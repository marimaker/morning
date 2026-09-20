// Gemeinsame Prüflogik für edition-data.js. Läuft in macOS (JXA), Node (GitHub Actions) und im Browser.
// validateEdition(K, E, erwartetesDatum) -> { errs: [...], n: Anzahl geprüfter Verweise }
function validateEdition(K, E, expected) {
var errs = [], n = 0;

function chk(ref, where) {
  n++;
  var p = ref.split(":"), k = p[0], id = p.slice(1).join(":"), ok = false;
  if (k === "e") ok = !!K.explainers[id];
  else if (k === "t") ok = !!K.terms[id];
  else if (k === "n") ok = !!E.numbers[id];
  else if (k === "chain") ok = !!K.chains[id];
  else if (k === "s") ok = (+id >= 1 && +id <= E.stories.length);
  else if (k === "sec") ok = K.sections.some(function (s) { return s.id === id; });
  else if (k === "q") ok = true;
  if (!ok) errs.push(where + " -> " + ref);
}
if (!E) errs.push("window.EDITION fehlt");
else {
  if (E.date !== expected) errs.push("date ist " + E.date + ", erwartet " + expected);
  ["dateLabel", "updatedLabel", "marketNote"].forEach(function (k) { if (!E[k]) errs.push("Feld " + k + " fehlt"); });
  if (!E.stories || E.stories.length !== 15) errs.push("erwartet 15 Meldungen, gefunden " + (E.stories ? E.stories.length : 0));
  if (!E.top || E.top.length < 3) errs.push("top zu kurz");
  if (!E.quiz || E.quiz.length !== 5) errs.push("erwartet 5 Quizfragen");
  if (!E.strip || E.strip.length < 8) errs.push("strip zu kurz");
  (E.top || []).forEach(function (t) { chk(t.ref, "top"); });
  (E.strip || []).forEach(function (id) {
    chk("n:" + id, "strip");
    var x = E.numbers[id]; if (!x) return;
    ["label", "value", "change", "asof", "means"].forEach(function (f) { if (!x[f]) errs.push("num " + id + " fehlt " + f); });
    if (["up", "down", "flat"].indexOf(x.dir) < 0) errs.push("num " + id + " dir");
    if (!x.compare || !x.moved || !x.important || !x.source) errs.push("num " + id + " unvollständig");
    if (x.whyRef) chk(x.whyRef, "num " + id);
    (x.important || []).forEach(function (a) { chk(a.ref, "num " + id); });
    if (x.story) chk("s:" + x.story, "num " + id);
  });
  (E.stories || []).forEach(function (s, i) {
    var w = "story " + (i + 1);
    ["id", "when", "headline", "sec30"].forEach(function (f) { if (!s[f]) errs.push(w + " fehlt " + f); });
    if (!s.cats || !s.cats.length) errs.push(w + " ohne cats");
    (s.cats || []).forEach(function (c) { chk("sec:" + c, w + " cat"); });
    if (!s.blocks || s.blocks.length < 2) errs.push(w + " zu wenige Blöcke");
    (s.blocks || []).forEach(function (b) {
      if (!b.h || !b.items || !b.items.length) errs.push(w + " Block unvollständig");
      (b.items || []).forEach(function (it) {
        if (["fakt", "einordnung", "position", "unbestaetigt"].indexOf(it.tag) < 0) errs.push(w + " item ohne gültiges tag: " + (it.text || "").slice(0, 40));
        (it.ask || []).forEach(function (a) { chk(a.ref, w + " ask"); });
      });
    });
    (s.terms || []).forEach(function (t) { chk("t:" + t, w + " terms"); });
    (s.followups || []).forEach(function (r) { chk(r, w + " followups"); });
    if (!s.sources || s.sources.length < 1) errs.push(w + " ohne Quellen");
    (s.sources || []).forEach(function (q) { if (!/^https?:\/\//.test(q.url || "")) errs.push(w + " Quelle ohne URL"); });
  });
  Object.keys(E.context || {}).forEach(function (id) {
    chk("e:" + id, "context");
    if (E.context[id].story) chk("s:" + E.context[id].story, "context " + id);
  });
  (E.quiz || []).forEach(function (q, i) {
    chk("s:" + q.story, "quiz " + (i + 1));
    if (!q.q || !q.explain || !q.topic || !q.type) errs.push("quiz " + (i + 1) + " unvollständig");
    if (!q.options || q.options.length !== 4 || new Set(q.options).size !== 4) errs.push("quiz " + (i + 1) + " Optionen");
    if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) errs.push("quiz " + (i + 1) + " answer");
  });
}
  return { errs: errs, n: n };
}
if (typeof module !== "undefined" && module.exports) module.exports = validateEdition;
