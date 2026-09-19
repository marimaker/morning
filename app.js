// MORNING – App-Logik (ändert sich nicht täglich). Inhalte: knowledge.js (dauerhaft) und edition-data.js (täglich).
(function () {
  "use strict";
  var K = window.KNOWLEDGE, E = window.EDITION;
  var app = document.getElementById("app");
  if (!K || !E) {
    app.innerHTML = "<div class='card'><h2>Daten fehlen</h2><p>knowledge.js und edition-data.js müssen im selben Ordner liegen.</p></div>";
    return;
  }

  /* ───────────────────────── Helfer ───────────────────────── */
  var TAGS = { fakt: "FAKT", einordnung: "EINORDNUNG", position: "POSITION / AUSSAGE EINER QUELLE", unbestaetigt: "NOCH UNBESTÄTIGT" };
  var STORIES = E.stories;
  var N = STORIES.length;

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }
  function store(key, val) {
    try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; }
  }
  function secOf(id) { for (var i = 0; i < K.sections.length; i++) if (K.sections[i].id === id) return K.sections[i]; return null; }
  function secLabel(id) { var s = secOf(id); return s ? s.de : id; }
  function storyNo(i) { return i + 1; }

  /* ───────────────────────── Fachbegriffe automatisch verlinken ───────────────────────── */
  var aliasList = [];
  Object.keys(K.terms).forEach(function (id) {
    K.terms[id].aliases.forEach(function (a) { aliasList.push({ a: a, id: id }); });
  });
  aliasList.sort(function (x, y) { return y.a.length - x.a.length; });
  var aliasMap = {};
  aliasList.forEach(function (x) { aliasMap[x.a.toLowerCase()] = x; });
  var termRe = new RegExp("(^|[^\\p{L}\\p{N}])(" + aliasList.map(function (x) { return escRe(esc(x.a)); }).join("|") + ")(?![\\p{L}\\p{N}])", "giu");

  // Text → HTML mit anklickbaren Fachbegriffen (jeder Begriff höchstens einmal pro Textstück)
  function rich(text, skipTerm) {
    var seen = {};
    if (skipTerm) seen[skipTerm] = true;
    return esc(text).replace(termRe, function (m, pre, word) {
      var hit = aliasMap[word.toLowerCase()];
      if (!hit) return m;
      if (word.length <= 3 && word !== esc(hit.a)) return m; // kurze Kürzel nur exakt
      if (seen[hit.id]) return m;
      seen[hit.id] = true;
      return pre + '<button type="button" class="term" data-term="' + hit.id + '">' + word + "</button>";
    });
  }

  /* ───────────────────────── Navigation / Referenzen ───────────────────────── */
  function hashFor(ref) {
    var p = ref.split(":"), kind = p[0], id = p.slice(1).join(":");
    if (kind === "e") return "#/e/" + id;
    if (kind === "n") return "#/n/" + id;
    if (kind === "chain") return "#/chain/" + id;
    if (kind === "s") return "#/story/" + id;
    if (kind === "sec") return "#/s/" + id;
    if (kind === "q") return "#/search/" + encodeURIComponent(id);
    return "#/";
  }
  function go(ref, chainId) {
    var p = ref.split(":");
    if (p[0] === "t") { openTerm(p.slice(1).join(":")); return; }
    var hh = hashFor(ref);
    if (chainId && p[0] === "e") hh += "/c/" + chainId;
    if (location.hash === hh) route(); else location.hash = hh;
  }
  function labelFor(ref) {
    var p = ref.split(":"), kind = p[0], id = p.slice(1).join(":");
    if (kind === "e" && K.explainers[id]) return K.explainers[id].q;
    if (kind === "chain" && K.chains[id]) return "Kette: " + K.chains[id].title;
    if (kind === "n" && E.numbers[id]) return "Was bedeutet " + E.numbers[id].label + " " + E.numbers[id].value + "?";
    if (kind === "t" && K.terms[id]) return "Was ist " + K.terms[id].name + "?";
    if (kind === "s") { var s = STORIES[+id - 1]; return s ? s.headline : "Meldung " + id; }
    if (kind === "q") return id;
    return ref;
  }
  function askRow(list) {
    if (!list || !list.length) return null;
    var row = h("div", { class: "ask" });
    list.forEach(function (a) {
      row.appendChild(h("button", { type: "button", "data-go": a.ref, text: a.label }));
    });
    return row;
  }
  function badgeFor(cat) { return h("span", { class: "badge", text: secLabel(cat) }); }

  /* ───────────────────────── Zustand: Pfad, Fortschritt ───────────────────────── */
  var trail = [];
  var lastStoryHash = null;
  function readKey() { return "morning.read." + E.date; }
  function readSet() { return store(readKey()) || {}; }
  function markRead(i) { var s = readSet(); s[i] = 1; store(readKey(), s); }
  function readCount() { return Object.keys(readSet()).length; }

  function setTrail(kind, label, hash, base) {
    if (kind === "root") { trail = base.slice(); return; }
    if (!trail.length) trail = base ? base.slice() : [{ label: "Heute", hash: "#/" }];
    for (var i = 0; i < trail.length; i++) {
      if (trail[i].hash === hash) { trail = trail.slice(0, i + 1); return; }
    }
    trail.push({ label: label, hash: hash });
    if (trail.length > 9) trail.splice(1, trail.length - 9);
  }
  function renderCrumbs() {
    var box = document.getElementById("crumbs");
    box.textContent = "";
    trail.forEach(function (t, i) {
      if (i) box.appendChild(h("span", { class: "sep", text: ">" }));
      if (i === trail.length - 1) box.appendChild(h("span", { class: "cur", text: t.label }));
      else box.appendChild(h("a", { href: t.hash, text: t.label }));
    });
  }

  /* ───────────────────────── Seitenleisten ───────────────────────── */
  function renderNav(current) {
    var nav = document.getElementById("nav");
    nav.textContent = "";
    nav.appendChild(h("button", { type: "button", class: "navclose", "data-navclose": "1", "aria-label": "Menü schließen", text: "✕" }));
    nav.appendChild(h("a", { class: "brand", href: "#/", html: "MORNING<small>Nachrichten verstehen</small>" }));
    function item(label, hash, key, count) {
      var a = h("a", { class: "nv", href: hash }, h("span", { text: label }), count != null ? h("span", { class: "cnt", text: String(count) }) : null);
      if (current === key) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    }
    item("Home", "#/", "home");
    item("Today (Briefing)", "#/story/1", "story", N);
    nav.appendChild(h("hr"));
    K.sections.forEach(function (s) {
      var c = STORIES.filter(function (st) { return st.cats.indexOf(s.id) >= 0; }).length;
      item(s.label, "#/s/" + s.id, "s:" + s.id, c || null);
    });
    nav.appendChild(h("hr"));
    item("Wissens-Quiz", "#/quiz", "quiz");
  }

  function setExplore(title, refs) {
    var box = document.getElementById("explore");
    box.textContent = "";
    box.appendChild(h("h2", { text: "EXPLORE" }));
    if (title) box.appendChild(h("p", { class: "small muted", text: title }));
    var seen = {};
    (refs || []).forEach(function (r) {
      if (seen[r]) return; seen[r] = true;
      box.appendChild(h("button", { type: "button", class: "ex", "data-go": r, text: labelFor(r) }));
    });
  }

  /* ───────────────────────── Fachbegriff-Fenster ───────────────────────── */
  var modalFrom = null;
  function openTerm(id) {
    var t = K.terms[id];
    if (!t) return;
    var m = document.getElementById("modal");
    modalFrom = document.activeElement;
    m.textContent = "";
    m.appendChild(h("button", { type: "button", class: "close", "data-close": "1", text: "Schließen ✕" }));
    m.appendChild(h("div", { class: "eyebrow", text: "Fachbegriff" }));
    m.appendChild(h("h2", { id: "modalTitle", text: t.name }));
    m.appendChild(h("div", { class: "lbl", text: "Einfach erklärt" }));
    m.appendChild(h("p", { text: t.short }));
    m.appendChild(h("div", { class: "lbl", text: "Beispiel" }));
    m.appendChild(h("p", { class: "example", text: t.example }));
    m.appendChild(h("div", { class: "lbl", text: "Warum wichtig?" }));
    m.appendChild(h("p", { text: t.why }));
    if (t.next && t.next.length) {
      m.appendChild(h("div", { class: "lbl", text: "Weiter" }));
      var row = h("div", { class: "chips" });
      t.next.forEach(function (r) { row.appendChild(h("button", { type: "button", class: "chip", "data-go": r, "data-closemodal": "1", text: "→ " + labelFor(r) })); });
      m.appendChild(row);
    }
    document.getElementById("scrim").hidden = false;
    m.hidden = false;
    m.querySelector(".close").focus();
  }
  function closeModal() {
    document.getElementById("modal").hidden = true;
    document.getElementById("scrim").hidden = !document.body.classList.contains("navopen");
    if (modalFrom && modalFrom.focus) try { modalFrom.focus(); } catch (e) {}
    modalFrom = null;
  }
  function setNav(open) {
    document.body.classList.toggle("navopen", open);
    document.getElementById("menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
    document.getElementById("scrim").hidden = !open;
  }

  /* ───────────────────────── Bausteine ───────────────────────── */
  function tagBadge(tag) { return tag ? h("span", { class: "tag " + tag, text: TAGS[tag] }) : null; }

  function termChips(ids) {
    if (!ids || !ids.length) return null;
    var row = h("div", { class: "chips" });
    ids.forEach(function (id) { if (K.terms[id]) row.appendChild(h("button", { type: "button", class: "chip", "data-go": "t:" + id, text: K.terms[id].name })); });
    return row;
  }
  function followList(refs) {
    var box = h("div", { class: "followups" });
    refs.forEach(function (r) { box.appendChild(h("button", { type: "button", "data-go": r, text: "→ " + labelFor(r) })); });
    return box;
  }
  function sourceList(list) {
    if (!list || !list.length) return null;
    var ul = h("ul");
    list.forEach(function (s) { ul.appendChild(h("li", null, h("a", { href: s.url, target: "_blank", rel: "noopener noreferrer", text: s.title }))); });
    return h("div", { class: "sources" }, h("b", { text: "Quellen" }), ul);
  }

  /* ───────────────────────── HOME ───────────────────────── */
  function viewHome() {
    var done = readCount();
    var mins = Math.max(1, Math.round(N * 0.5));
    var startNo = Math.min(N, done >= N ? 1 : done + 1);
    var qres = store("morning.quiz." + E.date);

    app.appendChild(h("section", { class: "hero" },
      h("div", { class: "eyebrow", text: "Morning Edition" }),
      h("h1", { text: "GOOD MORNING" }),
      h("div", { class: "date", text: E.dateLabel }),
      h("p", { text: "Dein Briefing für heute" }),
      h("p", { class: "meta", text: N + " Stories · ca. " + mins + " Min. · " + E.updatedLabel }),
      h("div", { class: "actions" },
        h("button", { type: "button", class: "btn primary", "data-go": "s:" + startNo, text: done && done < N ? "Weiter bei " + startNo + "/" + N + " →" : "Briefing starten →" }),
        h("button", { type: "button", class: "btn ghost", "data-go": "sec:markets", text: "Bereiche ansehen" }),
        qres ? h("span", { class: "eyebrow", style: "align-self:center", text: "Daily Score heute: " + qres.right + "/" + qres.total }) : null)));

    var form = h("form", { class: "askform", autocomplete: "off" },
      h("input", { type: "search", name: "hq", placeholder: "z. B. Warum ist der DAX heute gefallen?", "aria-label": "Was möchtest du verstehen?" }),
      h("button", { type: "submit", class: "btn primary", text: "Verstehen" }));
    form.addEventListener("submit", function (e) { e.preventDefault(); var v = form.elements.hq.value.trim(); if (v) go("q:" + v); });
    var ex = h("div", { class: "chips center" });
    K.examples.forEach(function (q) { ex.appendChild(h("button", { type: "button", class: "chip", "data-go": "q:" + q, text: q })); });
    var ask = h("section", { class: "card askbox" }, h("h2", { text: "Was möchtest du verstehen?" }), form, ex);
    ask.querySelector("form").style.cssText = "display:flex;gap:8px;max-width:620px;margin:12px auto";
    ask.querySelector("input").style.cssText = "flex:1;min-width:0;font:inherit;padding:13px 16px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink)";
    app.appendChild(ask);

    var must = h("section", { class: "card must" }, h("h2", { text: "Guten Morgen. Das musst du heute wissen." }));
    var ul = h("ul");
    E.top.forEach(function (t, i) {
      ul.appendChild(h("li", null, h("button", { type: "button", "data-go": t.ref }, h("span", { class: "n", text: String(i + 1) }), h("span", { text: t.text }))));
    });
    must.appendChild(ul);
    app.appendChild(must);

    app.appendChild(h("h2", { text: "Märkte auf einen Blick" }));
    var strip = h("div", { class: "strip" });
    E.strip.forEach(function (id) {
      var n = E.numbers[id];
      strip.appendChild(h("button", { type: "button", class: "tick " + n.dir, "data-go": "n:" + id },
        h("div", { class: "l", text: n.label }), h("div", { class: "v", text: n.value }), h("div", { class: "c", text: n.change }),
        h("div", { class: "w", text: n.whyRef ? "Warum bewegt sich das? →" : "Was bedeutet das? →" })));
    });
    app.appendChild(strip);
    app.appendChild(h("p", { class: "note", text: E.marketNote }));

    app.appendChild(h("h2", { text: "Die Meldungen des Tages" }));
    var rs = readSet(), list = h("ul", { class: "storylist" });
    STORIES.forEach(function (s, i) {
      list.appendChild(h("li", null, h("button", { type: "button", class: rs[i] ? "read" : "", "data-go": "s:" + storyNo(i) },
        h("span", { class: "num", text: String(storyNo(i)) }),
        h("span", null, badgeFor(s.cats[0]), h("span", { class: "hd", text: s.headline })))));
    });
    app.appendChild(list);

    app.appendChild(h("h2", { style: "margin-top:24px", text: "Lernpfade: Zusammenhänge Schritt für Schritt" }));
    Object.keys(K.chains).forEach(function (id) {
      var c = K.chains[id];
      app.appendChild(h("button", { type: "button", class: "r card", style: "display:block;width:100%;text-align:left", "data-go": "chain:" + id },
        h("b", { text: c.title }), h("span", { class: "muted small", text: c.blurb }), h("div", { class: "small", style: "margin-top:6px", text: c.steps.map(function (s) { return s.label; }).join("  →  ") })));
    });

    app.appendChild(h("section", { class: "card", style: "text-align:center" },
      h("h2", { text: "Hast du heute aufgepasst?" }),
      h("p", { class: "muted", text: "Teste dein Wissen in " + E.quiz.length + " Fragen. Sie basieren nur auf den Meldungen und Erklärungen dieser Ausgabe." }),
      h("button", { type: "button", class: "btn primary", "data-go": "quiz", text: "Quiz starten →" })));

    setExplore("Beliebte Fragen", K.examples.map(function (q) { return "q:" + q; }));
  }

  /* ───────────────────────── MELDUNG (News-Modus) ───────────────────────── */
  function storyAskRefs(s) {
    var refs = [];
    s.blocks.forEach(function (b) { b.items.forEach(function (it) { (it.ask || []).forEach(function (a) { if (a.ref.charAt(0) !== "t") refs.push(a.ref); }); }); });
    (s.followups || []).forEach(function (r) { refs.push(r); });
    return refs;
  }

  function sofrWidget() {
    var st = { sofr: 4.0, spread: 5.0 }, loan = 500;
    var out = h("div", { class: "out" });
    function fmt(x) { return x.toFixed(2).replace(".", ","); }
    function upd() {
      var rate = st.sofr + st.spread, cost = loan * rate / 100, base = loan * 9 / 100;
      var diff = cost - base;
      out.innerHTML = "Kreditzins = SOFR " + fmt(st.sofr) + " % + Spread " + fmt(st.spread) + " % = <b>" + fmt(rate) + " %</b><br>" +
        "Zinskosten bei " + loan + " Mio. $ Kredit: <b>" + fmt(cost) + " Mio. $ pro Jahr</b>" +
        (Math.abs(diff) > 0.001 ? " (" + (diff > 0 ? "+" : "−") + fmt(Math.abs(diff)) + " Mio. $ gegenüber 9 %)" : " (Ausgangsbeispiel: SOFR 4 % + Spread 5 % ≈ 9 %)");
    }
    function slider(label, key, min, max) {
      var val = h("span", { text: fmt(st[key]) + " %" });
      var inp = h("input", { type: "range", min: min, max: max, step: "0.25", value: st[key], "aria-label": label });
      inp.addEventListener("input", function () { st[key] = parseFloat(inp.value); val.textContent = fmt(st[key]) + " %"; upd(); });
      return h("label", null, h("span", { text: label }), inp, val);
    }
    var box = h("div", { class: "sofr" }, h("b", { text: "Beispiel anzeigen: Was kostet ein SOFR-Kredit?" }),
      slider("SOFR", "sofr", 2, 7), slider("Spread", "spread", 3, 9), out);
    upd();
    return box;
  }

  function viewStory(i) {
    var s = STORIES[i];
    if (!s) { viewNotFound(); return; }
    markRead(i);
    lastStoryHash = "#/story/" + storyNo(i);

    var prev = i > 0 ? i : null, next = i < N - 1 ? i + 2 : null;
    function nav(sticky) {
      return h("div", { class: "storynav" + (sticky ? " sticky" : "") },
        h("button", { type: "button", class: "btn", "data-go": prev ? "s:" + prev : "sec:markets", disabled: !prev },
          h("span", { class: "lg", text: "← vorherige News" }), h("span", { class: "sm", text: "← Zurück" })),
        h("span", { class: "cnt", text: storyNo(i) + "/" + N }),
        h("button", { type: "button", class: "btn primary", "data-goto": next ? "#/story/" + next : "#/done" },
          h("span", { class: "lg", text: next ? "nächste News →" : "Briefing abschließen →" }), h("span", { class: "sm", text: next ? "Weiter →" : "Abschließen →" })));
    }

    app.appendChild(h("div", { class: "stepper" },
      h("span", { class: "cnt", text: storyNo(i) + " / " + N }),
      h("div", { class: "progress", role: "progressbar", "aria-valuemin": "1", "aria-valuemax": String(N), "aria-valuenow": String(storyNo(i)) }, h("i", { style: "width:" + Math.round(storyNo(i) / N * 100) + "%" }))));

    var art = h("article", { class: "card storyhead", id: "story" });
    var meta = h("div", { class: "meta" });
    s.cats.forEach(function (c) { meta.appendChild(badgeFor(c)); });
    meta.appendChild(h("span", { text: s.when + " · " + E.updatedLabel }));
    art.appendChild(meta);
    art.appendChild(h("h1", { text: s.headline }));
    art.appendChild(h("div", { class: "sec30" }, h("b", { text: "30 Sekunden" }), h("span", { html: rich(s.sec30) })));

    if (s.deal) {
      var d = s.deal, dc = h("div", { class: "dealcard" });
      [["Deal Value", d.value], ["Käufer", d.buyer], ["Target", d.target], ["Sektor", d.sector], ["Deal-Typ", d.type]].forEach(function (kv) {
        dc.appendChild(h("div", null, h("div", { class: "k", text: kv[0] }), h("div", { class: "v", text: kv[1] })));
      });
      art.appendChild(dc);
    }

    s.blocks.forEach(function (b) {
      var blk = h("section", { class: "block" }, h("h3", { text: b.h }));
      b.items.forEach(function (it) {
        var item = h("div", { class: "item" }, h("span", { class: "txt" }, tagBadge(it.tag), h("span", { html: rich(it.text) })));
        var row = askRow(it.ask); if (row) item.appendChild(row);
        blk.appendChild(item);
      });
      art.appendChild(blk);
    });

    if (s.widget === "sofr") art.appendChild(sofrWidget());
    if (s.reaction) art.appendChild(h("div", { class: "reaction" }, h("b", { text: "Marktreaktion" }), h("span", { html: rich(s.reaction) })));

    if (s.terms && s.terms.length) {
      art.appendChild(h("h3", { style: "margin-top:20px", text: "Fachbegriffe in dieser Meldung" }));
      art.appendChild(termChips(s.terms));
    }
    art.appendChild(h("h3", { style: "margin-top:20px", text: "Weiterführende Fragen" }));
    art.appendChild(followList(s.followups));
    art.appendChild(sourceList(s.sources));
    art.appendChild(nav(false));
    app.appendChild(art);
    app.appendChild(nav(true));

    // Wischgesten (Smartphone)
    var x0 = null, y0 = null;
    art.addEventListener("touchstart", function (e) { var t = e.changedTouches[0]; x0 = t.clientX; y0 = t.clientY; }, { passive: true });
    art.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; x0 = null;
      if (Math.abs(dx) > 70 && Math.abs(dy) < 45) location.hash = dx < 0 ? (next ? "#/story/" + next : "#/done") : (prev ? "#/story/" + prev : "#/");
    }, { passive: true });

    setExplore("Weiter verstehen", storyAskRefs(s));
  }

  /* ───────────────────────── ERKLÄRUNG ───────────────────────── */
  function explainerBody(id, opts) {
    var x = K.explainers[id], box = h("div", { class: "answer" });
    var ctx = E.context[id];
    box.appendChild(h("h2", { text: "Kurz gesagt" }));
    box.appendChild(h("p", { class: "lead", html: rich(x.kurz) }));
    if (ctx) {
      var now = h("div", { class: "now" }, h("b", { class: "h", text: "Aktueller Zusammenhang" }), tagBadge(ctx.tag), h("span", { html: rich(ctx.text) }));
      if (ctx.story) now.appendChild(h("div", { class: "ask" }, h("button", { type: "button", "data-go": "s:" + ctx.story, text: "→ Zur Meldung " + ctx.story + "/" + N })));
      box.appendChild(now);
    }
    box.appendChild(h("h2", { text: "Warum?" }));
    var ol = h("ol", { class: "why-steps" });
    x.warum.forEach(function (w, i) { ol.appendChild(h("li", { "data-n": String(i + 1), html: rich(w) })); });
    box.appendChild(ol);
    box.appendChild(h("h2", { text: "Einfaches Beispiel" }));
    box.appendChild(h("p", { class: "example", html: rich(x.beispiel) }));
    box.appendChild(h("h2", { text: "Warum ist das wichtig?" }));
    box.appendChild(h("p", { html: rich(x.wichtig) }));
    if (x.terms && x.terms.length) { box.appendChild(h("h2", { text: "Fachbegriffe" })); box.appendChild(termChips(x.terms)); }
    if (x.related && x.related.length) {
      box.appendChild(h("h2", { text: "Was hängt damit zusammen?" }));
      var row = h("div", { class: "chips" });
      x.related.forEach(function (r) { if (K.explainers[r]) row.appendChild(h("button", { type: "button", class: "chip", "data-go": "e:" + r, text: K.explainers[r].title })); });
      box.appendChild(row);
    }
    if (x.followups && x.followups.length) {
      box.appendChild(h("h2", { text: "Weiterführende Fragen" }));
      box.appendChild(followList(x.followups.map(function (r) { return "e:" + r; })));
    }
    return box;
  }

  function viewExplainer(id, chainId) {
    var x = K.explainers[id];
    if (!x) { viewNotFound(); return; }
    var chain = chainId && K.chains[chainId] ? K.chains[chainId] : null;
    var idx = -1;
    if (chain) chain.steps.forEach(function (s, i) { if (s.ref === id && idx < 0) idx = i; });
    if (idx < 0) chain = null;

    var card = h("article", { class: "card" });
    card.appendChild(h("div", { class: "eyebrow", text: secLabel(x.section) }));
    card.appendChild(h("h1", { text: x.q }));

    if (chain) {
      var bar = h("div", { class: "chainbar" });
      chain.steps.forEach(function (s, i) {
        if (i) bar.appendChild(h("span", { class: "ar", text: "→" }));
        var b = h("button", { type: "button", class: "st", "data-go": "e:" + s.ref, "data-chain": chainId, text: s.label });
        if (i === idx) b.setAttribute("aria-current", "step");
        bar.appendChild(b);
      });
      card.appendChild(h("p", { class: "muted small", text: "Warum-Kette: " + chain.title + " · Schritt " + (idx + 1) + " von " + chain.steps.length }));
      card.appendChild(bar);
    }

    card.appendChild(explainerBody(id));

    var acts = h("div", { class: "actions" });
    if (chain) {
      acts.appendChild(h("button", { type: "button", class: "btn", "data-go": idx > 0 ? "e:" + chain.steps[idx - 1].ref : "chain:" + chainId, "data-chain": idx > 0 ? chainId : "", text: "← Zurück" }));
      if (idx < chain.steps.length - 1) acts.appendChild(h("button", { type: "button", class: "btn primary", "data-go": "e:" + chain.steps[idx + 1].ref, "data-chain": chainId, text: "Weiter: " + chain.steps[idx + 1].label + " →" }));
      else acts.appendChild(h("button", { type: "button", class: "btn primary", "data-go": "chain:" + chainId, text: "Kette abgeschlossen: Übersicht" }));
    } else {
      acts.appendChild(h("button", { type: "button", class: "btn", "data-back": "1", text: "← Zurück" }));
    }
    if (lastStoryHash) acts.appendChild(h("button", { type: "button", class: "btn ghost", "data-goto": lastStoryHash, text: "Zurück zur News" }));
    card.appendChild(acts);
    app.appendChild(card);

    var refs = (x.followups || []).map(function (r) { return "e:" + r; });
    (x.related || []).forEach(function (r) { refs.push("e:" + r); });
    setExplore("Weiter verstehen", refs);
  }

  /* ───────────────────────── ZAHL ───────────────────────── */
  function viewNumber(id) {
    var n = E.numbers[id];
    if (!n) { viewNotFound(); return; }
    var box = h("article", { class: "card numview" });
    box.appendChild(h("div", { class: "eyebrow", text: "Was bedeutet diese Zahl? · " + n.asof }));
    box.appendChild(h("h1", { text: n.label }));
    box.appendChild(h("div", { class: "bignum " + n.dir, text: n.value }));
    box.appendChild(h("div", { class: "muted", text: n.change }));

    box.appendChild(h("h2", { text: "Was bedeutet " + n.value + "?" }));
    box.appendChild(h("p", { class: "lead", html: rich(n.means) }));

    box.appendChild(h("h2", { text: "Ist das hoch?" }));
    var ul = h("ul", { class: "cmp" });
    n.compare.forEach(function (c) { ul.appendChild(h("li", null, h("span", { class: "k", text: c.label }), h("span", { text: c.text }))); });
    box.appendChild(ul);
    box.appendChild(h("p", { class: "note", text: "Vergleiche mit dem Wert vor einem Monat, einem Jahr oder dem langjährigen Durchschnitt nennen die gesichteten Quellen nicht. Sie werden hier nicht ungeprüft ergänzt." }));

    box.appendChild(h("h2", { text: "Warum hat sich der Wert bewegt?" }));
    box.appendChild(h("p", { html: rich(n.moved.intro) }));
    if (n.moved.items.length) {
      var l2 = h("ul", { class: "clean" });
      n.moved.items.forEach(function (t) { l2.appendChild(h("li", { html: rich(t) })); });
      box.appendChild(l2);
    }
    box.appendChild(h("div", { class: "ask" },
      n.whyRef ? h("button", { type: "button", "data-go": n.whyRef, text: "Tiefer: Warum? →" }) : null,
      n.story ? h("button", { type: "button", "data-go": "s:" + n.story, text: "Zur Meldung " + n.story + "/" + N + " →" }) : null));

    box.appendChild(h("h2", { text: "Warum ist das wichtig?" }));
    var areas = h("div", { class: "areas" });
    n.important.forEach(function (a) { areas.appendChild(h("button", { type: "button", "data-go": a.ref }, h("b", { text: a.area }), h("span", { text: a.text }))); });
    box.appendChild(areas);
    box.appendChild(sourceList([n.source]));
    box.appendChild(h("div", { class: "actions" }, h("button", { type: "button", class: "btn", "data-back": "1", text: "← Zurück" })));
    app.appendChild(box);

    var refs = n.important.map(function (a) { return a.ref; });
    if (n.whyRef) refs.unshift(n.whyRef);
    setExplore("Weiter verstehen", refs);
  }

  /* ───────────────────────── KETTE ───────────────────────── */
  function viewChain(id) {
    var c = K.chains[id];
    if (!c) { viewNotFound(); return; }
    var card = h("article", { class: "card" });
    card.appendChild(h("div", { class: "eyebrow", text: "Warum-Kette" }));
    card.appendChild(h("h1", { text: c.title }));
    card.appendChild(h("p", { class: "muted", text: c.blurb + " Tippe auf einen Schritt, um ihn zu verstehen. Danach kannst du mit „Weiter“ der Kette folgen." }));
    var view = h("div", { class: "chainview" });
    c.steps.forEach(function (s, i) {
      var ctx = E.context[s.ref];
      if (i) view.appendChild(h("div", { class: "carrow", "aria-hidden": "true", text: "↓" }));
      view.appendChild(h("div", { class: "cnode" },
        h("button", { type: "button", "data-go": "e:" + s.ref, "data-chain": id },
          h("span", { class: "t" }, h("span", { text: String(i + 1) }), s.label),
          h("span", { class: "muted small", text: K.explainers[s.ref].q }),
          ctx ? h("span", { class: "now-s", text: "Aktuell: " + ctx.text }) : null)));
    });
    card.appendChild(view);
    card.appendChild(h("div", { class: "actions" },
      h("button", { type: "button", class: "btn primary", "data-go": "e:" + c.steps[0].ref, "data-chain": id, text: "Kette starten →" }),
      h("button", { type: "button", class: "btn", "data-back": "1", text: "← Zurück" })));
    app.appendChild(card);
    setExplore("Weitere Lernpfade", Object.keys(K.chains).filter(function (k) { return k !== id; }).map(function (k) { return "chain:" + k; }));
  }

  /* ───────────────────────── BEREICH ───────────────────────── */
  function viewSection(id) {
    var sec = secOf(id);
    if (!sec) { viewNotFound(); return; }
    app.appendChild(h("div", { class: "card" }, h("div", { class: "eyebrow", text: sec.label }), h("h1", { text: sec.de }), h("p", { class: "muted", text: sec.blurb })));

    var idxs = [];
    STORIES.forEach(function (s, i) { if (s.cats.indexOf(id) >= 0) idxs.push(i); });
    app.appendChild(h("h2", { text: "Heute" }));
    if (idxs.length) {
      var rs = readSet(), list = h("ul", { class: "storylist" });
      idxs.forEach(function (i) {
        list.appendChild(h("li", null, h("button", { type: "button", class: rs[i] ? "read" : "", "data-go": "s:" + storyNo(i) },
          h("span", { class: "num", text: String(storyNo(i)) }), h("span", { class: "hd", text: STORIES[i].headline }))));
      });
      app.appendChild(list);
    } else app.appendChild(h("p", { class: "muted", text: "In dieser Ausgabe gibt es keine Meldung zu diesem Bereich." }));

    var exps = Object.keys(K.explainers).filter(function (k) { return K.explainers[k].section === id; });
    if (exps.length) {
      app.appendChild(h("h2", { style: "margin-top:24px", text: "Verstehen" }));
      app.appendChild(followList(exps.map(function (k) { return "e:" + k; })));
    }
    var chains = Object.keys(K.chains).filter(function (k) {
      return K.chains[k].steps.some(function (st) { return K.explainers[st.ref] && K.explainers[st.ref].section === id; });
    });
    if (chains.length) {
      app.appendChild(h("h2", { style: "margin-top:24px", text: "Warum-Ketten" }));
      app.appendChild(followList(chains.map(function (k) { return "chain:" + k; })));
    }
    setExplore(sec.de, exps.slice(0, 6).map(function (k) { return "e:" + k; }));
  }

  /* ───────────────────────── SUCHE ───────────────────────── */
  var STOP = {};
  ("der die das den dem des ein eine einer eines und oder ist sind war wird werden was wie warum wieso weshalb wer wo wann welche welcher welches bedeutet bedeuten " +
   "fur fuer mich uns von zu mit auf im in an am bei aus nach uber ueber heute jetzt aktuell dass es sich nicht auch als um noch nur schon so kann konnen hat haben gibt " +
   "ich du man mein meine meinen dies diese dieser hier dort dabei damit wenn dann wird wurde").split(" ").forEach(function (w) { STOP[w] = 1; });
  function norm(s) {
    return String(s).toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss").replace(/[^a-z0-9%&+ ]/g, " ").replace(/\s+/g, " ").trim();
  }
  function stems(s) {
    var out = [];
    norm(s).split(" ").forEach(function (t) {
      if (!t || STOP[t]) return;
      out.push(t.length > 5 ? t.slice(0, 5) : t);
    });
    return out;
  }
  var index = null;
  function buildIndex() {
    index = [];
    Object.keys(K.explainers).forEach(function (id) {
      var x = K.explainers[id];
      index.push({ kind: "e", id: id, kw: stems(x.keywords.join(" ")), ti: stems(x.title + " " + x.q), tx: stems(x.kurz), phr: x.keywords.map(norm) });
    });
    Object.keys(K.terms).forEach(function (id) {
      var t = K.terms[id];
      index.push({ kind: "t", id: id, kw: stems(t.aliases.join(" ")), ti: stems(t.name), tx: stems(t.short), phr: t.aliases.map(norm) });
    });
    STORIES.forEach(function (s, i) {
      index.push({ kind: "s", id: String(i + 1), kw: [], ti: stems(s.headline), tx: stems(s.sec30), phr: [] });
    });
  }
  function search(q) {
    if (!index) buildIndex();
    var qs = stems(q), qn = norm(q), res = [];
    if (!qs.length) return res;
    index.forEach(function (d) {
      var sc = 0;
      qs.forEach(function (t) {
        if (d.kw.indexOf(t) >= 0) sc += 3;
        if (d.ti.indexOf(t) >= 0) sc += 2;
        if (d.tx.indexOf(t) >= 0) sc += 1;
      });
      d.phr.forEach(function (p) { if (p.length >= 4 && (" " + qn + " ").indexOf(" " + p + " ") >= 0) sc += 4; });
      if (d.kind === "s") sc *= 0.8;
      if (sc > 0) res.push({ d: d, score: sc });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res;
  }

  function viewSearch(q) {
    q = decodeURIComponent(q || "").trim();
    var inp = document.getElementById("q"); if (inp) inp.value = q;
    var res = search(q);
    var card = h("article", { class: "card" });
    card.appendChild(h("div", { class: "eyebrow", text: "Was möchtest du verstehen?" }));
    card.appendChild(h("h1", { text: q || "Suche" }));

    var expl = res.filter(function (r) { return r.d.kind === "e"; });
    var terms = res.filter(function (r) { return r.d.kind === "t"; });
    var stor = res.filter(function (r) { return r.d.kind === "s"; });
    var best = expl.length && expl[0].score >= 4 ? expl[0] : null;

    if (!best && !terms.length && !stor.length) {
      card.appendChild(h("p", { text: "Dazu habe ich in der Wissensbasis dieser Ausgabe keine passende Erklärung gefunden. Probiere es mit einem Stichwort (z. B. „Inflation“, „Rendite“, „Private Credit“) oder wähle einen Bereich." }));
      var ex = h("div", { class: "chips" });
      K.examples.forEach(function (e) { ex.appendChild(h("button", { type: "button", class: "chip", "data-go": "q:" + e, text: e })); });
      card.appendChild(ex);
    }
    if (best) {
      card.appendChild(h("p", { class: "muted small", text: "Beste Antwort: " + K.explainers[best.d.id].q }));
      card.appendChild(explainerBody(best.d.id));
    } else if (terms.length && terms[0].score >= 3) {
      var t = K.terms[terms[0].d.id];
      card.appendChild(h("h2", { text: t.name }));
      card.appendChild(h("p", { class: "lead", text: t.short }));
      card.appendChild(h("p", { class: "example", text: t.example }));
      card.appendChild(h("p", { text: t.why }));
      if (t.next) card.appendChild(followList(t.next));
    }
    if (stor.length && stor[0].score >= 2) {
      card.appendChild(h("h2", { style: "margin-top:24px", text: "Aktuelle Meldungen dazu" }));
      card.appendChild(followList(stor.slice(0, 3).map(function (r) { return "s:" + r.d.id; })));
    }
    var more = expl.slice(best ? 1 : 0, best ? 6 : 5).filter(function (r) { return r.score >= 2; });
    if (more.length) {
      card.appendChild(h("h2", { style: "margin-top:24px", text: "Weitere passende Fragen" }));
      card.appendChild(followList(more.map(function (r) { return "e:" + r.d.id; })));
    }
    card.appendChild(h("p", { class: "note", text: "Die Suche greift auf die vorbereitete Wissensbasis und die Meldungen dieser Ausgabe zu. Es ist kein Live-Chatbot, und nichts wird neu erfunden." }));
    app.appendChild(card);
    setExplore("Passende Themen", more.map(function (r) { return "e:" + r.d.id; }).concat(K.examples.slice(0, 3).map(function (e) { return "q:" + e; })));
  }

  /* ───────────────────────── FERTIG ───────────────────────── */
  function viewDone() {
    app.appendChild(h("section", { class: "hero" },
      h("div", { class: "eyebrow", text: "Morning Briefing" }),
      h("h1", { text: "Briefing abgeschlossen." }),
      h("p", { text: "Du hast heute " + readCount() + " von " + N + " Meldungen gelesen." }),
      h("div", { class: "actions" },
        h("button", { type: "button", class: "btn primary", "data-go": "quiz", text: "Quiz starten (" + E.quiz.length + " Fragen) →" }),
        h("button", { type: "button", class: "btn ghost", "data-go": "s:1", text: "Von vorn lesen" }))));
    var out = h("section", { class: "card" }, h("h2", { text: "Was als Nächstes ansteht" }));
    var ul = h("ul", { class: "clean" });
    [
      "Sonntag, 20.09.: Landtagswahlen in Berlin und Mecklenburg-Vorpommern",
      "Dienstag, 22.09.: Öffentliche Anhörung der US-Handelsbehörde USTR zur Zollpolitik",
      "Mittwoch, 23.09.: Erste Einkaufsmanagerindizes (PMI) der großen Volkswirtschaften",
      "Donnerstag, 24.09.: Zinsentscheid der Schweizerischen Nationalbank",
      "Fed: Laut Prognose der Mitglieder folgt 2026 noch eine weitere Zinserhöhung",
      "Ukraine: Neue Gespräche für Oktober erwartet, Termin und Ort offen"
    ].forEach(function (t) { ul.appendChild(h("li", { text: t })); });
    out.appendChild(ul);
    app.appendChild(out);
    setExplore("Nach dem Briefing", ["chain:oil-to-markets", "chain:rates-to-credit", "chain:nasdaq-why"]);
  }

  /* ───────────────────────── QUIZ ───────────────────────── */
  var Q = null;
  function shuffleIdx(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); for (var j = n - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }

  function viewQuiz() {
    if (!Q) Q = { i: -1, answers: [], answered: false };
    if (Q.i < 0) return quizIntro();
    if (Q.i >= E.quiz.length) return quizResult();
    quizQuestion();
  }
  function quizIntro() {
    var prev = store("morning.quiz." + E.date);
    app.appendChild(h("section", { class: "card", style: "text-align:center" },
      h("div", { class: "eyebrow", text: "Nach dem Briefing" }),
      h("h1", { text: "Hast du heute aufgepasst?" }),
      h("p", { class: "lead", text: "Teste dein Wissen in " + E.quiz.length + " Fragen." }),
      h("p", { class: "muted", text: "Die Fragen basieren nur auf den Meldungen und Erklärungen von heute und prüfen auch Zusammenhänge, nicht nur Fakten." }),
      prev ? h("p", { class: "muted small", text: "Dein letzter Score heute: " + prev.right + "/" + prev.total }) : null,
      h("div", { class: "actions", style: "justify-content:center" },
        h("button", { type: "button", class: "btn primary", id: "quizStart", text: "Los geht’s →" }))));
    document.getElementById("quizStart").addEventListener("click", function () { Q = { i: 0, answers: [], answered: false }; route(); });
    setExplore("Vorher nochmal lesen?", ["s:1", "chain:oil-to-markets"]);
  }
  function quizQuestion() {
    var q = E.quiz[Q.i];
    var order = Q.order && Q.orderFor === Q.i ? Q.order : (Q.order = shuffleIdx(q.options.length), Q.orderFor = Q.i, Q.order);
    var opts = h("div", { class: "opts", role: "group", "aria-label": "Antworten" });
    var letters = ["A", "B", "C", "D"];
    order.forEach(function (orig, pos) {
      opts.appendChild(h("button", { type: "button", class: "opt", "data-orig": String(orig) }, h("kbd", { text: letters[pos] }), h("span", { text: q.options[orig] })));
    });
    var card = h("article", { class: "card" },
      h("div", { class: "eyebrow", text: "Frage " + (Q.i + 1) + "/" + E.quiz.length + " · " + q.topic + " · " + q.type }),
      h("h2", { style: "margin-top:8px", text: q.q }),
      opts, h("div", { id: "qfb" }));
    app.appendChild(card);
    opts.addEventListener("click", function (e) {
      var b = e.target.closest(".opt"); if (b && !Q.answered) quizAnswer(+b.getAttribute("data-orig"));
    });
    setExplore("Tipp", ["s:" + q.story]);
  }
  function quizAnswer(orig) {
    var q = E.quiz[Q.i], ok = orig === q.answer;
    Q.answered = true; Q.answers[Q.i] = ok;
    Array.prototype.forEach.call(app.querySelectorAll(".opt"), function (b) {
      var o = +b.getAttribute("data-orig"); b.disabled = true;
      if (o === q.answer) b.classList.add("correct"); else if (o === orig) b.classList.add("wrong");
    });
    var last = Q.i === E.quiz.length - 1;
    var fb = document.getElementById("qfb");
    fb.appendChild(h("div", { class: "fb " + (ok ? "ok" : "no") }, h("b", { text: ok ? "Richtig! " : "Falsch. " }), q.explain));
    fb.appendChild(h("div", { class: "actions" },
      h("button", { type: "button", class: "btn primary", id: "qnext", text: last ? "Ergebnis ansehen →" : "Nächste Frage →" })));
    var nb = document.getElementById("qnext"); nb.focus();
    nb.addEventListener("click", function () { Q.i++; Q.answered = false; route(); });
  }
  function quizResult() {
    var total = E.quiz.length, right = Q.answers.filter(Boolean).length, pct = Math.round(right / total * 100);
    store("morning.quiz." + E.date, { right: right, total: total });
    var good = [], bad = [];
    E.quiz.forEach(function (q, i) {
      if (Q.answers[i]) { if (good.indexOf(q.topic) < 0) good.push(q.topic); }
      else if (bad.indexOf(i) < 0) bad.push(i);
    });
    var badTopics = bad.map(function (i) { return E.quiz[i].topic; });
    good = good.filter(function (t) { return badTopics.indexOf(t) < 0; });

    var card = h("article", { class: "card" },
      h("div", { class: "eyebrow", text: "Daily Score · " + E.dateLabel }),
      h("div", { class: "score-big", text: right + " / " + total + " richtig" }),
      h("div", { class: "bar-mini" }, h("i", { style: "width:" + pct + "%" })),
      h("p", { class: "lead", text: "Du hast " + pct + " % der heutigen Fragen richtig beantwortet." }));
    if (good.length) { card.appendChild(h("h3", { text: "Stärkste Themen" })); card.appendChild(h("p", { text: good.join(", ") })); }
    if (bad.length) {
      card.appendChild(h("h3", { text: "Noch einmal ansehen" }));
      var box = h("div", { class: "followups" });
      bad.forEach(function (i) { box.appendChild(h("button", { type: "button", "data-go": "s:" + E.quiz[i].story, text: "→ " + E.quiz[i].topic + ": " + STORIES[E.quiz[i].story - 1].headline })); });
      card.appendChild(box);
    } else card.appendChild(h("p", { text: "Alles richtig. Perfekt." }));
    card.appendChild(h("p", { class: "note", text: "Der Score bewertet ausschließlich sachlich richtige Antworten, keine politischen Ansichten." }));
    card.appendChild(h("div", { class: "actions" },
      h("button", { type: "button", class: "btn primary", id: "qagain", text: "Quiz wiederholen" }),
      h("button", { type: "button", class: "btn", "data-go": "sec:markets", text: "Zu den Bereichen" }),
      h("button", { type: "button", class: "btn ghost", "data-goto": "#/", text: "Zur Startseite" })));
    app.appendChild(card);
    document.getElementById("qagain").addEventListener("click", function () { Q = { i: 0, answers: [], answered: false }; route(); });
    setExplore("Weiter lernen", ["chain:oil-to-markets", "chain:rates-to-credit", "chain:nasdaq-why"]);
  }

  function viewNotFound() {
    app.appendChild(h("div", { class: "card" }, h("h1", { text: "Nicht gefunden" }), h("p", { text: "Diese Seite gibt es nicht." }),
      h("button", { type: "button", class: "btn primary", "data-goto": "#/", text: "Zur Startseite" })));
    setExplore("", K.examples.map(function (q) { return "q:" + q; }));
  }

  /* ───────────────────────── Router ───────────────────────── */
  var HOME = [{ label: "Heute", hash: "#/" }];
  function route() {
    var raw = location.hash.replace(/^#\/?/, "");
    var parts = raw.split("/");
    var kind = parts[0] || "home";
    app.textContent = "";
    var cur = "home";
    try {
      if (kind === "home") { setTrail("root", "", "#/", HOME); viewHome(); }
      else if (kind === "story") {
        var n = parseInt(parts[1], 10) || 1, s = STORIES[n - 1];
        cur = "story";
        setTrail("root", "", "", [HOME[0], { label: s ? secLabel(s.cats[0]) : "Meldung", hash: s ? "#/s/" + s.cats[0] : "#/" }, { label: "Meldung " + n + "/" + N, hash: "#/story/" + n }]);
        viewStory(n - 1);
      } else if (kind === "s") {
        cur = "s:" + parts[1];
        setTrail("root", "", "", [HOME[0], { label: secLabel(parts[1]), hash: "#/s/" + parts[1] }]);
        viewSection(parts[1]);
      } else if (kind === "e") {
        var x = K.explainers[parts[1]];
        cur = x ? "s:" + x.section : "home";
        setTrail("deep", x ? x.title : "?", "#/e/" + parts[1] + (parts[2] === "c" ? "/c/" + parts[3] : ""), x ? [HOME[0], { label: secLabel(x.section), hash: "#/s/" + x.section }] : HOME);
        viewExplainer(parts[1], parts[2] === "c" ? parts[3] : null);
      } else if (kind === "n") {
        var nn = E.numbers[parts[1]];
        setTrail("deep", nn ? nn.label : "?", "#/n/" + parts[1], [HOME[0], { label: "Märkte", hash: "#/s/markets" }]);
        cur = "s:markets";
        viewNumber(parts[1]);
      } else if (kind === "chain") {
        var c = K.chains[parts[1]];
        setTrail("deep", c ? c.title : "?", "#/chain/" + parts[1], [HOME[0], { label: "Warum-Ketten", hash: "#/chain/" + parts[1] }]);
        viewChain(parts[1]);
      } else if (kind === "search") {
        var qq = decodeURIComponent(parts.slice(1).join("/") || "");
        setTrail("deep", "Suche: " + qq, "#/search/" + parts.slice(1).join("/"), HOME);
        viewSearch(parts.slice(1).join("/"));
      } else if (kind === "quiz") {
        cur = "quiz"; setTrail("root", "", "", [HOME[0], { label: "Quiz", hash: "#/quiz" }]); viewQuiz();
      } else if (kind === "done") {
        setTrail("root", "", "", [HOME[0], { label: "Briefing abgeschlossen", hash: "#/done" }]); viewDone();
      } else { setTrail("root", "", "", HOME); viewNotFound(); }
    } catch (err) {
      app.textContent = "";
      app.appendChild(h("div", { class: "card" }, h("h1", { text: "Fehler beim Anzeigen" }), h("p", { class: "muted", text: String(err && err.message || err) })));
      if (window.console) console.error(err);
    }
    renderNav(cur);
    renderCrumbs();
    setNav(false);
    window.scrollTo(0, 0);
    try { document.title = "MORNING – " + (trail.length ? trail[trail.length - 1].label : "Nachrichten verstehen"); } catch (e) {}
  }

  /* ───────────────────────── Ereignisse ───────────────────────── */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-term],[data-go],[data-goto],[data-back],[data-close],[data-navclose]");
    if (!el) return;
    if (el.hasAttribute("data-term")) { openTerm(el.getAttribute("data-term")); return; }
    if (el.hasAttribute("data-navclose")) { setNav(false); return; }
    if (el.hasAttribute("data-close")) { closeModal(); return; }
    if (el.hasAttribute("data-back")) {
      if (trail.length > 1) location.hash = trail[trail.length - 2].hash; else location.hash = "#/";
      return;
    }
    if (el.hasAttribute("data-goto")) { location.hash = el.getAttribute("data-goto"); return; }
    if (el.hasAttribute("data-go")) {
      var wasModal = el.hasAttribute("data-closemodal");
      if (wasModal) { modalFrom = null; document.getElementById("modal").hidden = true; document.getElementById("scrim").hidden = true; }
      go(el.getAttribute("data-go"), el.getAttribute("data-chain") || null);
    }
  });
  document.getElementById("scrim").addEventListener("click", function () { if (!document.getElementById("modal").hidden) closeModal(); else setNav(false); });
  document.getElementById("menuBtn").addEventListener("click", function () { setNav(!document.body.classList.contains("navopen")); });
  document.addEventListener("keydown", function (e) {
    var tgt = e.target && e.target.tagName;
    if (e.key === "Escape") { if (!document.getElementById("modal").hidden) closeModal(); else setNav(false); return; }
    if (tgt === "INPUT" || tgt === "TEXTAREA" || e.metaKey || e.ctrlKey || e.altKey) return;
    var m = location.hash.match(/^#\/story\/(\d+)/);
    if (m) {
      var n = +m[1];
      if (e.key === "ArrowRight") location.hash = n < N ? "#/story/" + (n + 1) : "#/done";
      if (e.key === "ArrowLeft" && n > 1) location.hash = "#/story/" + (n - 1);
    }
    if (location.hash === "#/quiz" && Q && Q.i >= 0 && Q.i < E.quiz.length && !Q.answered) {
      var idx = "abcd".indexOf(e.key.toLowerCase());
      if (idx < 0) idx = parseInt(e.key, 10) - 1;
      if (idx >= 0 && idx < Q.order.length) quizAnswer(Q.order[idx]);
    }
  });
  document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var v = document.getElementById("q").value.trim();
    if (v) go("q:" + v);
  });
  window.addEventListener("hashchange", route);

  // Vorschläge im Suchfeld
  var dl = document.getElementById("qsuggest");
  Object.keys(K.explainers).forEach(function (id) { dl.appendChild(h("option", { value: K.explainers[id].q })); });

  route();

  // Installierbare App: Service Worker nur über http(s), nicht bei file://
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
