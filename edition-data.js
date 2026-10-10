// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-10",
  dateLabel: "Samstag, 10. Oktober 2026",
  updatedLabel: "Recherchestand 10.10.2026",
  marketNote: "Diese Ausgabe entsteht am Samstagmorgen, 10.10.2026. Die Börsen sind heute geschlossen: Für DAX, Euro Stoxx 50, S&P 500, Nasdaq und Dow Jones sowie für die US- und die Bund-Rendite gilt der Schlussstand von Freitag, 09.10.2026. Brent-Öl, Gold, Bitcoin und EUR/USD werden rund um die Uhr beziehungsweise durchgehend gehandelt; hier gilt der zuletzt verfügbare Stand vom Freitagabend beziehungsweise frühen Samstagmorgen. Bei einzelnen Werten weichen die Quellen spürbar voneinander ab: Beim Euro Stoxx 50 nennt eine Quelle für Freitag ein Plus von 0,83 % (6.177,37 Punkte), eine andere ein Minus von 0,9 % (rund 6.126,74 Punkte) – mit derselben Begründung (fallende Ölpreise). Beim Brent-Ölpreis reichen die Freitagsangaben von rund 102,6 bis 104,7 Dollar, beim Goldpreis von rund 4.169 bis 4.195 Dollar. Diese Unterschiede sind jeweils bei der betroffenen Kennzahl vermerkt.",

  top: [
    { text: "Die Aktienmärkte erholten sich am Freitag von den Vortagesverlusten: Der DAX stieg laut Berichten um 1,19 % auf 25.102,34 Punkte und damit wieder über die Marke von 25.000 Punkten, die US-Indizes schlossen die Woche im Plus. Hintergrund ist laut einem neuen Bloomberg-Bericht, dass OpenAI gegenüber Investoren weiterhin an seinem Jahresendziel von 70 Mrd. Dollar Umsatz-Run-Rate festhält, sowie sinkende Ölpreise.", ref: "s:1" },
    { text: "Die iranischen Revolutionsgarden griffen am 09.10. zwei weitere Tanker im Golf an (MV Sun Shine, Gem No.2) und drohten, Angriffe nicht mehr auf die Straße von Hormus zu beschränken – obwohl Präsident Trump zuvor angekündigt hatte, vor den US-Zwischenwahlen am 03.11. keine Angriffe auf den Iran zu starten. Die Ölpreis-Angaben für Freitag widersprechen sich deutlich.", ref: "s:9" },
    { text: "Nach einem Telefonat mit Putin kündigte Präsident Trump einen Diesel-Deal mit Russland an (stufenweise Lieferungen von zunächst 300.000 Tonnen bis zu 3 Mio. Tonnen, vorübergehende Aussetzung der Diesel-Sanktionen). Präsident Selenskyj kritisierte dies scharf als „Investition in den Krieg”, während zeitgleich das 22. EU-Sanktionspaket vor der geplanten Verabschiedung am 12.10. steht.", ref: "s:8" },
    { text: "Der Bundestag debattierte am 09.10. erneut über die Rentenreform; die Alterssicherungskommission empfiehlt die Abschaffung der abschlagsfreien Rente nach 45 Versicherungsjahren, wogegen Gewerkschaften und Arbeitgeberverbände – aus entgegengesetzten Gründen – Einwände erheben.", ref: "s:6" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.102,34", change: "+1,19 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag, 08.10., war der DAX um 1,18 % auf 24.806,97 Punkte gefallen und damit erstmals seit Wochen unter die Marke von 25.000 Punkten gerutscht; der Freitags-Anstieg von 295,37 Punkten brachte den Index zurück über diese Marke." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Ein neuer Bloomberg-Bericht vom 09.10. legt nahe, dass OpenAI gegenüber Investoren weiterhin an seinem Jahresendziel von 70 Mrd. Dollar annualisiertem Umsatz festhält – das beruhigte Chip- und KI-Werte nach dem Ausverkauf vom Donnerstag (Meldung 1, Meldung 14).",
          "Sinkende Ölpreise, nachdem Präsident Trump ankündigte, vor den US-Zwischenwahlen keine Angriffe auf den Iran zu starten, stützten die allgemeine Risikobereitschaft (Meldung 9)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Bloomberg-Bericht und zur Debatte um eine mögliche KI-Blase in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "finanzen.ch: Aufschläge in Frankfurt – DAX zum Ende des Freitagshandels mit Kursplus", url: "https://www.finanzen.ch/nachrichten/aktien/aufschlaege-in-frankfurt-dax-zum-ende-des-freitagshandels-mit-kursplus-1036612957" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.127–6.177", change: "+0,83 % bzw. −0,9 % je nach Quelle", dir: "flat", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "finanzen.ch berichtete für Freitag ein Plus von 0,83 % auf 6.177,37 Punkte (begründet mit sinkenden Ölpreisen und Anleiherenditen), ad-hoc-news nannte für denselben Tag ein Minus von 0,9 % auf rund 6.126,74 Punkte – mit derselben Begründung (fallende Ölpreise). Die Richtung der beiden Angaben widerspricht sich trotz identischer Begründung; welche Zahl zutrifft, ließ sich nicht auflösen." }
      ],
      moved: {
        intro: "Für Donnerstag/Freitag nennen Berichte als allgemeinen Hintergrund:",
        items: [
          "Sinkende Ölpreise nach Trumps Ankündigung, vor den Zwischenwahlen keine Angriffe auf den Iran zu starten, sowie leicht nachgebende Anleiherenditen (Meldung 3, Meldung 9)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Rendite französischer Staatsanleihen bleibt mit einem hohen Risikoaufschlag ein Belastungsfaktor für den europäischen Gesamtmarkt.", ref: "s:3" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 legt dank fallender Ölpreise 0,9 Prozent zu", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-legt-dank-fallender-oelpreise-0-9-prozent-zu/70276828" }
    },
    "sp500": {
      label: "S&P 500", value: "7.811,51", change: "+0,59 % (+46,15 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 51.654,95 Punkte (+0,83 %) – alle drei großen US-Indizes schlossen die Woche im Plus." },
        { label: "Nasdaq", text: "Freitagsschluss: 27.366,17 Punkte (+0,64 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Ein neuer Bloomberg-Bericht, demzufolge OpenAI weiterhin an seinem Jahresendziel von 70 Mrd. Dollar Umsatz-Run-Rate festhält, beruhigte Chip- und KI-Werte nach dem Ausverkauf vom Donnerstag (Meldung 14)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Bloomberg-Bericht und zur Debatte um eine mögliche KI-Blase in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Washington Post: How major US stock indexes fared Friday", url: "https://www.washingtonpost.com/business/2026/10/09/wall-street-stocks-dow-nasdaq/63e004dc-c41e-11f1-8170-681419af1cc9_story.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.366,17", change: "+0,64 % (+172,83 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Donnerstag", text: "Am Donnerstag war die Nasdaq um 1,25 % auf 27.193,34 Punkte gefallen; der Freitag brachte eine teilweise Erholung, ohne den Donnerstagsverlust vollständig auszugleichen." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Technologie- und Halbleiterwerte erholten sich, nachdem ein neuer Bloomberg-Bericht die Sorgen um OpenAIs Umsatzausblick dämpfte; Oracle legte laut mehreren Quellen zwischen 3,2 und 5,2 % zu, nachdem die Aktie am Donnerstag rund 6 % verloren hatte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf solche Nachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Friday, October 9", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-9-dow-sp-500-nasdaq-080148117.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1206", change: "+0,18 % ggü. Do (1,1186)", dir: "up", asof: "Fr 09.10.26, EZB-Referenzkurs", story: 5,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Vortage", text: "Der EZB-Referenzkurs war von 1,1177 (Mi/Do) auf 1,1186 (Donnerstag) gestiegen und legte am Freitag weiter auf 1,1206 Dollar zu." }
      ],
      moved: {
        intro: "Berichte nennen keinen expliziten Einzelgrund für den weiteren Anstieg:",
        items: [
          "Im allgemeinen Marktumfeld spielte laut Berichten die nachlassende Risikoprämie am Ölmarkt eine Rolle, die auch den Dollar als „sicherer Hafen” etwas weniger gefragt machte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed und EZB senden weiterhin unterschiedliche Signale: Fed-Präsident Musalem hält eine weitere Zinserhöhung grundsätzlich für nötig, die EZB bindet ihre Unterstützung für Frankreich an die EU-Fiskalregeln.", ref: "s:2" }
      ],
      source: { title: "onvista: Devisen – Eurokurs gestiegen, EZB-Referenzkurs 1,1206 US-Dollar", url: "https://www.onvista.de/news/2026/10-09-devisen-eurokurs-gestiegen-ezb-referenzkurs-1-1206-us-dollar-0-10-26562388" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,23–5,24 %", change: "kaum verändert ggü. Donnerstag", dir: "flat", asof: "Stand Fr 09.10.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,2 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,2 % Zinsen pro Jahr.",
      compare: [
        { label: "Donnerstag", text: "Am Donnerstag hatte die Rendite ebenfalls bei rund 5,23 bis 5,24 % gelegen – nahe dem 24-Jahres-Hoch vom Mittwoch (bis zu 5,36 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Fed-Präsident Alberto Musalem (St. Louis) sprach sich am 09.10. für eine weitere geldpolitische Straffung aus, nannte aber keinen Zeitpunkt (Meldung 2).",
          "Das vorläufige Verbrauchervertrauen der University of Michigan fiel auf ein 5-Monats-Tief von 46,3 Punkten – ein Hinweis auf konjunkturelle Vorsicht, die der Zinserwartung entgegensteht (Meldung 2)."
        ]
      },
      important: [
        { area: "Fed", text: "Die eingepreiste Wahrscheinlichkeit einer Zinserhöhung im Oktober liegt laut mehreren Quellen nur noch bei rund 16 bis 20 %.", ref: "s:2" }
      ],
      source: { title: "ETF Trends: Treasury Yields Snapshot – October 9, 2026", url: "https://www.etftrends.com/fixed-income-content-hub/treasury-yields-snapshot-october-9-2026/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,48 %", change: "leicht niedriger ggü. Donnerstag (3,49–3,50 %)", dir: "down", asof: "Stand Fr 09.10.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Die Rendite zehnjähriger französischer Staatsanleihen lag laut Berichten weiterhin bei rund 4,8 bis 4,9 %; der Risikoaufschlag zur Bundesanleihe hatte Anfang Oktober laut Bloomberg zeitweise bis zu 154 Basispunkte erreicht (02.10., höchster Stand seit 2011) und lag am Donnerstag bei rund 127 Basispunkten. Eine aktualisierte Zahl für Freitag liegt nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Bund-Rendite gab am Freitag parallel zu leicht sinkenden US-Renditen nach und stützte damit die Erholung an den europäischen Aktienmärkten (Meldung 1)."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Die EZB bindet ihre Unterstützung für Frankreich weiterhin an die Einhaltung der EU-Fiskalregeln; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "tradingeconomics.com: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.169–4.195 $", change: "+rund 1,3 % ggü. Donnerstag", dir: "up", asof: "Stand Fr 09.10.26", story: 5, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.180 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "Fortune nannte für Freitag einen Wert nahe 4.169 Dollar, wallstreet-online 4.193,18 Dollar (+1,45 %) – die genaue Nachkommastelle schwankt je nach Erfassungszeitpunkt (Fixing vs. Spot)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Sicherheitsnachfrage trotz Entspannungssignalen beim Ölpreis (Meldung 9); die weiterhin historisch hohe US-Rendite (Meldung 3) bleibt dabei ein gegenläufiger Faktor, der Gold normalerweise weniger attraktiv macht."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Anleiherenditen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv – trotzdem legte Gold am Freitag weiter zu.", ref: "e:gold-why" }
      ],
      source: { title: "wallstreet-online: Goldpreis – Gold explodiert, plus 1,45 % auf 4.193,18 USD", url: "https://www.wallstreet-online.de/nachricht/21499438-goldpreis-gold-explodiert-plus-1-45-4-193-18-usd" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 102,6–104,7 $", change: "uneinheitlich: −1,6 % bis +0,4 % ggü. Donnerstag", dir: "flat", asof: "Stand Fr 09.10./Sa-Morgen 10.10.26", story: 9, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 103 Dollar je Fass (159 Liter) sind etwa 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Donnerstag", text: "Am Donnerstag war Brent auf rund 103,5 bis 104,75 Dollar gesprungen; die Freitagsangaben schwanken je nach Quelle zwischen einem Rückgang auf 102,6 Dollar und einem weiteren Anstieg auf 104,7 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen gegenläufige Faktoren für Freitag:",
        items: [
          "Trumps Ankündigung, vor den Zwischenwahlen am 03.11. keine Angriffe auf den Iran zu starten, drückte laut mehreren Quellen den Preis.",
          "Neue Tankerangriffe im Golf (Meldung 9) und ein Hurrikan im Golf von Mexiko wirkten laut anderen Quellen gleichzeitig preistreibend."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den neuen Tankerangriffen trotz Trumps Zusage in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "CNBC: Oil falls as Trump comments on Iran talks ease supply concerns", url: "https://cnbc.com/2026/10/09/oil-falls-as-trump-comments-on-iran-talks-ease-supply-concerns.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 82.413 $", change: "−0,25 % ggü. Vortagmorgen", dir: "down", asof: "Stand Fr 09.10./Sa-Morgen 10.10.26", story: 5, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Bandbreite", text: "Bitcoin blieb am Freitagmorgen mit rund 82.413 Dollar im unteren Bereich der zuvor genannten Schwankungsbreite von 82.300 bis 85.800 Dollar vom Donnerstag/Freitagmorgen." }
      ],
      moved: {
        intro: "Berichte nennen keinen expliziten neuen Einzelgrund für Freitag:",
        items: [
          "Eine insgesamt vorsichtige Risikobereitschaft bleibt laut Berichten ein Faktor, ohne dass eine einzelne Nachricht als Auslöser genannt wird."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin for October 9, 2026", url: "https://fortune.com/article/price-of-bitcoin-10-09-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitag-erholung-dax-ueber-25000-10-10", cats: ["markets"], when: "Schluss Fr 09.10.2026",
      headline: "Aktienmärkte erholen sich am Freitag, DAX wieder über 25.000 Punkte",
      sec30: "Nach dem Ausverkauf vom Donnerstag erholten sich die Aktienmärkte am Freitag: Der Dow Jones legte 0,83 % auf 51.654,95 Punkte zu, der S&P 500 0,59 % auf 7.811,51 Punkte, die Nasdaq Composite 0,64 % auf 27.366,17 Punkte – alle drei US-Indizes schlossen die Woche im Plus. Der DAX stieg laut Berichten um 1,19 % auf 25.102,34 Punkte und damit wieder über die Marke von 25.000 Punkten; beim Euro Stoxx 50 widersprechen sich Quellen zwischen einem Plus von 0,83 % und einem Minus von 0,9 %. Als Hintergrund nennen Berichte einen neuen Bloomberg-Bericht, demzufolge OpenAI trotz der Diskussion vom Donnerstag weiterhin ein Jahresendziel von 70 Mrd. Dollar annualisiertem Umsatz verfolgt, sowie sinkende Ölpreise nach Trumps Ankündigung, vor den US-Zwischenwahlen keine Angriffe auf den Iran zu starten.",
      blocks: [
        { h: "Wie haben sich die Indizes am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones legte 0,83 % auf 51.654,95 Punkte zu, der S&P 500 0,59 % auf 7.811,51 Punkte und die Nasdaq Composite 0,64 % auf 27.366,17 Punkte – alle drei US-Indizes schlossen die Woche im Plus." },
          { tag: "unbestaetigt", text: "Der DAX stieg laut Berichten um 295,37 Punkte (+1,19 %) auf 25.102,34 Punkte und damit wieder über die Marke von 25.000 Punkten. Beim Euro Stoxx 50 widersprechen sich Quellen: Eine nennt +0,83 % auf 6.177,37 Punkte, eine andere −0,9 % auf rund 6.126,74 Punkte – mit derselben Begründung (fallende Ölpreise).",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] }
        ]},
        { h: "Was wird als Grund genannt?", items: [
          { tag: "fakt", text: "Laut einem neuen Bloomberg-Bericht vom 09.10. signalisierte OpenAI Investoren, weiterhin bis Jahresende eine annualisierte Umsatz-Run-Rate von 70 Mrd. Dollar erreichen oder übertreffen zu wollen – getragen vor allem durch ein Enterprise-Umsatzwachstum von 107 % und eine Gesamt-Run-Rate-Wachstumsrate von 77 % im dritten Quartal. Dies beruhigte Chip- und KI-Werte nach dem Ausverkauf vom Donnerstag.",
            ask: [{ label: "Mehr zur OpenAI-Umsatzdebatte und zur KI-Blasen-Diskussion", ref: "s:14" }] },
          { tag: "fakt", text: "Oracle erholte sich laut mehreren Quellen deutlich (zwischen +3,2 % und +5,2 %), nachdem die Aktie am Donnerstag rund 6 % verloren hatte." },
          { tag: "unbestaetigt", text: "Zusätzlich wirkte sich aus, dass Präsident Trump ankündigte, vor den US-Zwischenwahlen am 03.11. keine Angriffe auf den Iran zu starten – was den Ölpreis nach einer Quelle sinken ließ und die allgemeine Risikobereitschaft stützte, während andere Quellen für denselben Tag einen weiteren Ölpreis-Anstieg nennen (Meldung 9)." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass ein neuer Bericht zur selben Umsatzfrage binnen 24 Stunden die Marktstimmung drehen konnte, zeigt erneut, wie empfindlich Anleger derzeit auf jedes Signal zur Tragfähigkeit der hohen KI-Investitionen reagieren (Meldung 14). Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Erholung fällt zusammen mit uneinheitlichen Ölpreis-Angaben nach Trumps Nicht-Angriffs-Zusage (Meldung 9) und der neuen Wendung in der OpenAI-Umsatzdebatte (Meldung 14).",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why", "e:ai-capex"],
      sources: [
        { title: "Washington Post: How major US stock indexes fared Friday, 10/9/2026", url: "https://www.washingtonpost.com/business/2026/10/09/wall-street-stocks-dow-nasdaq/63e004dc-c41e-11f1-8170-681419af1cc9_story.html" },
        { title: "Yahoo Finance: Stock market today – Friday, October 9", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-9-dow-sp-500-nasdaq-080148117.html" },
        { title: "finanzen.ch: Aufschläge in Frankfurt – DAX zum Ende des Freitagshandels mit Kursplus", url: "https://www.finanzen.ch/nachrichten/aktien/aufschlaege-in-frankfurt-dax-zum-ende-des-freitagshandels-mit-kursplus-1036612957" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 legt dank fallender Ölpreise 0,9 Prozent zu", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-legt-dank-fallender-oelpreise-0-9-prozent-zu/70276828" },
        { title: "Tech Times: Investors Built $70B OpenAI Revenue Estimate Using Wrong Method", url: "https://techtimes.com/articles/328836/20261009/investors-built-70b-openai-revenue-estimate-using-wrong-method-ai-stocks-fell-when-ft-corrected.htm" }
      ]
    },

    /* 2 FED/MUSALEM/WALLER/VERBRAUCHERVERTRAUEN */
    {
      id: "fed-musalem-waller-verbrauchervertrauen-10-10", cats: ["economy", "markets"], when: "Musalem-Rede 09.10. · Michigan-Verbrauchervertrauen (vorl. Okt.) 09.10. · nächste FOMC-Sitzung 27./28.10.2026",
      headline: "Fed-Präsident Musalem hält weitere Zinserhöhung für nötig, US-Verbrauchervertrauen fällt auf 5-Monats-Tief",
      sec30: "St.-Louis-Fed-Präsident Alberto Musalem sprach sich am 09.10. für eine weitere geldpolitische Straffung aus, um die Inflation zügig auf das 2-%-Ziel zu bringen, wollte sich aber nicht auf die Sitzung am 27./28.10. festlegen. Fed-Gouverneur Waller bekräftigte, eine weitere Erhöhung müsse nicht auf aufeinanderfolgenden Sitzungen erfolgen. Das vorläufige Verbrauchervertrauen der University of Michigan für Oktober fiel auf 46,3 Punkte – ein 5-Monats-Tief und unter dem Konsens von 47,6. Die eingepreiste Wahrscheinlichkeit einer Zinserhöhung im Oktober liegt laut mehreren Quellen nur noch bei rund 16 bis 20 %.",
      blocks: [
        { h: "Was sagte Fed-Präsident Musalem am 9.10.?", items: [
          { tag: "position", text: "Alberto Musalem (Präsident der Fed St. Louis) erklärte, eine weitere Straffung der Geldpolitik sei nötig, um die Inflation zeitnah auf das 2-%-Ziel zurückzuführen; er nannte einen möglichen Zeitrahmen von 6 bis 9 Monaten für weitere Schritte, wollte sich zur konkreten Oktober-Sitzung aber nicht festlegen. Er bewertete die gestiegenen Anleiherenditen als Zeichen wirtschaftlicher Stärke, warnte aber vor der nicht nachhaltigen US-Staatsverschuldung.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Fed-Gouverneur Waller bekräftigte laut Folgeberichten, eine weitere Erhöhung müsse nicht auf aufeinanderfolgenden Sitzungen erfolgen; einen konkreten Zeitpunkt nannte er nicht." }
        ]},
        { h: "Wie hat sich das US-Verbrauchervertrauen entwickelt?", items: [
          { tag: "fakt", text: "Der vorläufige Index der University of Michigan für Oktober fiel auf 46,3 Punkte – ein 5-Monats-Tief und unter dem Konsens von 47,6 (September: 48,1). Die Inflationserwartungen für 1 Jahr stiegen auf 4,7 % (von 4,6 %), für 5 Jahre auf 3,5 % (von 3,4 %).",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Wie schätzen Märkte die Oktober-Entscheidung ein?", items: [
          { tag: "unbestaetigt", text: "Die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung bei der Sitzung am 27./28.10. liegt laut mehreren aktuellen Quellen bei rund 16 bis 20 % – deutlich niedriger als zuvor zwischenzeitlich genannte Werte von bis zu 53 %. Investoren rechnen laut Berichten eher mit einer möglichen Erhöhung im Dezember." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl Musalem als auch Waller an der grundsätzlichen Möglichkeit weiterer Zinserhöhungen festhalten, während sich gleichzeitig das Verbrauchervertrauen verschlechtert, zeigt laut Marktbeobachtern ein Abwägen zwischen Inflationsbekämpfung und konjunktureller Vorsicht; die Entscheidung am 27./28.10. bleibt offen." }
        ]}
      ],
      reaction: "Die gemischten Fed-Signale fallen zusammen mit der weiterhin historisch hohen US-Rendite (Meldung 3) und der Erholung an den Aktienmärkten (Meldung 1).",
      terms: ["leitzins", "rendite", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "onvista: Musalem – Fed, weitere Zinserhöhungen gegen Inflation nötig", url: "https://www.onvista.de/news/2026/10-09-musalem-fed-weitere-zinserhoehungen-gegen-inflation-noetig-0-20-26562163" },
        { title: "FXStreet: Dollar Index verharrt seitwärts, da Fed-Gouverneur Waller keinen Zeitpunkt für weitere Zinserhöhungen nennt", url: "https://www.fxstreet.de.com/news/dollar-index-verharrt-seitwarts-da-fed-gouverneur-waller-keinen-zeitpunkt-fur-weitere-zinserhohungen-nennt-202610081619" },
        { title: "Bloomberg: US Consumer Sentiment Falls to Five-Month Low", url: "https://www.bloomberg.com/news/articles/2026-10-09/us-consumer-sentiment-falls-to-five-month-low-in-october" }
      ]
    },

    /* 3 US-/BUND-/FRANKREICH-RENDITE */
    {
      id: "renditen-us-bund-frankreich-10-10", cats: ["markets"], when: "Stand Fr 09.10.2026",
      headline: "US-Rendite bleibt nahe 24-Jahres-Hoch, Bund-Rendite gibt leicht nach, Frankreich-Risikoaufschlag bleibt hoch",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen lag am Freitag weiterhin bei rund 5,23 bis 5,24 % – kaum verändert gegenüber Donnerstag. Die Bund-Rendite gab leicht auf rund 3,48 % nach. Die Rendite zehnjähriger französischer Staatsanleihen blieb laut Berichten bei rund 4,8 bis 4,9 %; der Risikoaufschlag zur Bundesanleihe hatte Anfang Oktober laut Bloomberg zeitweise bis zu 154 Basispunkte erreicht.",
      blocks: [
        { h: "Wie hat sich die US-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die US-10-Jahres-Rendite lag am Freitag weiterhin bei rund 5,23 bis 5,24 % – kaum verändert gegenüber Donnerstag und weiterhin nahe dem 24-Jahres-Hoch vom Mittwoch (bis zu 5,36 %).",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,2 %?", ref: "n:ust10" }] },
          { tag: "fakt", text: "Fed-Präsident Musalem sprach sich am 09.10. für eine weitere geldpolitische Straffung aus, ohne einen Zeitpunkt zu nennen (Meldung 2)." }
        ]},
        { h: "Wie hat sich die Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "Die Bund-Rendite gab am Freitag leicht auf rund 3,48 % nach, parallel zu leicht sinkenden US-Renditen.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Was ist der Stand bei Frankreichs Staatsanleihen?", items: [
          { tag: "unbestaetigt", text: "Die Rendite zehnjähriger französischer Staatsanleihen (OAT) lag laut Berichten weiterhin bei rund 4,8 bis 4,9 %. Der Risikoaufschlag zur Bundesanleihe hatte laut Bloomberg Anfang Oktober zeitweise bis zu 154 Basispunkte erreicht (02.10., höchster Stand seit 2011) und lag am Donnerstag bei rund 127 Basispunkten; eine aktualisierte Zahl für Freitag liegt nicht vor." },
          { tag: "fakt", text: "Premierminister Lecornus Sparhaushalt 2027 mit rund 54 Mrd. Euro Konsolidierung soll ab dem 13.10. in der Nationalversammlung debattiert werden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Eine dauerhaft hohe US-Rendite verteuert tendenziell auch global Kapital; der weiterhin hohe Risikoaufschlag französischer Staatsanleihen zeigt, dass die Sorge um Frankreichs Haushaltsdefizit trotz leichter Entspannung bei anderen Kennzahlen bestehen bleibt." }
        ]}
      ],
      reaction: "Die anhaltend hohe US-Rendite und der hohe Risikoaufschlag französischer Anleihen bleiben Hintergrund für die Erholung an den Aktienmärkten (Meldung 1) und die EZB-Haltung zu Frankreich (Meldung 4).",
      terms: ["rendite", "basispunkt", "schuldenbremse"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:debt-brake"],
      sources: [
        { title: "ETF Trends: Treasury Yields Snapshot – October 9, 2026", url: "https://www.etftrends.com/fixed-income-content-hub/treasury-yields-snapshot-october-9-2026/" },
        { title: "tradingeconomics.com: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" },
        { title: "Bloomberg: France's Bond Risk Hits Euro-Crisis Levels", url: "https://www.bloomberg.com/news/articles/2026-10-02/europe-s-bond-spread-blowout-prompts-bets-on-fewer-ecb-hikes" },
        { title: "Bloomberg: France's 10-Year Bond Risk Premium Rises to 120 Basis Points", url: "https://www.bloomberg.com/news/articles/2026-09-30/france-s-10-year-bond-risk-premium-rises-to-120-basis-points" }
      ]
    },

    /* 4 EZB/LAGARDE/SCHNABEL-NACHFOLGE */
    {
      id: "ezb-lagarde-schnabel-nachfolge-ecofin-10-10", cats: ["economy"], when: "Ecofin 09.10.2026 · Bewerbungsfrist Schnabel-Nachfolge 28.10.2026 · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "EZB-Unterstützung für Frankreich bleibt an EU-Fiskalregeln gebunden, Bewerbungsfrist für Schnabel-Nachfolge läuft",
      sec30: "Beim Ecofin-Rat am 09.10. in Luxemburg stand laut Berichten vor allem die Reform der EU-Finanzaufsicht ESMA im Fokus; dabei wurde deutlich, dass sich eine mögliche EZB-Unterstützung für Frankreich weiterhin an die Einhaltung der EU-Fiskalregeln bindet. Die Eurogruppe setzte den 28.10.2026 als Frist für Kandidatenvorschläge zur Nachfolge von Isabel Schnabel im EZB-Direktorium, die vorzeitig zum Internationalen Währungsfonds wechseln will; eine Entscheidung der Staats- und Regierungschefs wird beim Dezember-Gipfel erwartet. Die nächste EZB-Zinsentscheidung fällt am 29.10.2026.",
      blocks: [
        { h: "Was war Thema beim Ecofin-Rat?", items: [
          { tag: "fakt", text: "Der Ecofin-Rat beschäftigte sich am 09.10. laut Berichten vor allem mit einer Reform der europäischen Finanzmarktaufsicht ESMA, die unter anderem von Frankreich und mehreren anderen Ländern kritisiert wurde." },
          { tag: "position", text: "Laut einer Analyse stützt sich die EZB-Haltung zu Frankreich weiterhin auf die Bedingung, dass Frankreich innerhalb der EU-Fiskalregeln bleibt – ein Signal, das zur bisherigen Zurückhaltung passt.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Wie ist der Stand bei der EZB-Direktoriumsnachfolge?", items: [
          { tag: "fakt", text: "Eurogruppen-Chef Kyriakos Pierrakakis forderte die 21 Eurozonen-Staaten auf, bis zum 28.10.2026 Kandidaten für die Nachfolge von Isabel Schnabel einzureichen, die die EZB vorzeitig Richtung Internationalem Währungsfonds verlassen will. Die endgültige Entscheidung der EU-Staats- und Regierungschefs wird beim Dezember-Gipfel erwartet." },
          { tag: "unbestaetigt", text: "Da auch EZB-Chefökonom Philip Lane und Lagarde selbst 2027 planmäßig beziehungsweise möglicherweise ihre Ämter abgeben, wird laut Berichten von einem möglichen „Paket-Deal” bei der Postenverteilung im EZB-Direktorium gesprochen." }
        ]},
        { h: "Wie ist der Stand bei der nächsten Zinsentscheidung?", items: [
          { tag: "fakt", text: "Die nächste EZB-Zinsentscheidung fällt am 29.10.2026; der Hauptrefinanzierungssatz liegt seit dem 10.09.2026 bei 2,65 %, der Einlagensatz bei 2,50 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EZB ihre mögliche Unterstützung für Frankreich weiterhin an die Einhaltung der EU-Fiskalregeln bindet, während der Risikoaufschlag französischer Anleihen hoch bleibt (Meldung 3), zeigt eine bewusste Zurückhaltung gegenüber einem einzelnen Mitgliedstaat." }
        ]}
      ],
      reaction: "Die Zurückhaltung der EZB gegenüber Frankreich fällt zusammen mit dem weiterhin hohen Risikoaufschlag französischer Staatsanleihen (Meldung 3) und den Fed-Signalen zu einer möglichen weiteren Zinserhöhung (Meldung 2).",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:debt-brake"],
      sources: [
        { title: "eunews.it: Financial markets – Ecofin curbs ESMA's supervisory powers", url: "https://www.eunews.it/en/2026/10/09/financial-markets-ecofin-curbs-esmas-supervisory-powers-drawing-criticism-from-the-european-commission-and-the-ecb/" },
        { title: "FXStreet: Lagarde's backstop rests on Paris staying inside EU fiscal rules", url: "https://www.fxstreet.com/analysis/lagardes-backstop-rests-on-paris-staying-inside-eu-fiscal-rules-202610091123" },
        { title: "Yahoo Finance: ECB seeks Schnabel successor", url: "https://sg.finance.yahoo.com/news/ecb-seeks-schnabel-successor-first-002112880.html" },
        { title: "Global Banking & Finance: Euro Zone Begins Search for Schnabel Successor", url: "https://www.globalbankingandfinance.com/eurogroup-sets-deadline-submit-candidates-replace-ecbs/" }
      ]
    },

    /* 5 GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-freitag-10-10", cats: ["markets"], when: "Stand Fr 09.10./Sa-Morgen 10.10.2026",
      headline: "Gold legt weiter zu, Bitcoin bleibt schwach, Euro gewinnt gegenüber dem Dollar",
      sec30: "Gold notierte am Freitag je nach Quelle zwischen rund 4.169 und 4.195 Dollar je Feinunze – ein Plus von rund 1,3 % gegenüber Donnerstag. Bitcoin blieb mit rund 82.413 Dollar im unteren Bereich der zuvor genannten Schwankungsbreite von 82.300 bis 85.800 Dollar. Der Euro stieg laut EZB-Referenzkurs weiter von 1,1186 auf 1,1206 Dollar.",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "unbestaetigt", text: "Gold notierte am Freitag je nach Quelle zwischen rund 4.169 und 4.195 Dollar je Feinunze – ein Plus von rund 1,3 % gegenüber Donnerstag.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Freitagmorgen bei rund 82.413 Dollar (−0,25 % ggü. Vortagmorgen) und blieb damit im unteren Bereich der zuvor genannten Schwankungsbreite von 82.300 bis 85.800 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Laut EZB-Referenzkurs stieg EUR/USD von 1,1186 (Donnerstag) auf 1,1206 Dollar (Freitag) – ein Plus von 0,18 %.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold weiter zulegte, während Bitcoin schwach blieb und der Euro moderat zulegte, zeigt unterschiedliche Reaktionen auf dieselbe uneinheitliche Nachrichtenlage rund um Zinsen und Geopolitik. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die unterschiedlichen Bewegungen bei Gold, Bitcoin und Euro fielen zusammen mit den uneinheitlichen Ölpreis-Angaben (Meldung 9) und der weiterhin historisch hohen US-Rendite (Meldung 3).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "Fortune: Current price of gold, Oct. 9, 2026", url: "https://fortune.com/article/current-price-of-gold-10-09-2026/" },
        { title: "wallstreet-online: Goldpreis – Gold explodiert, plus 1,45 % auf 4.193,18 USD", url: "https://www.wallstreet-online.de/nachricht/21499438-goldpreis-gold-explodiert-plus-1-45-4-193-18-usd" },
        { title: "Fortune: Current price of Bitcoin for October 9, 2026", url: "https://fortune.com/article/price-of-bitcoin-10-09-2026/" },
        { title: "onvista: Devisen – Eurokurs gestiegen, EZB-Referenzkurs 1,1206 US-Dollar", url: "https://www.onvista.de/news/2026/10-09-devisen-eurokurs-gestiegen-ezb-referenzkurs-1-1206-us-dollar-0-10-26562388" }
      ]
    }
    ,

    /* 6 DEUTSCHLAND: RENTE */
    {
      id: "rentenreform-bundestag-debatte-10-10", cats: ["germany"], when: "Bundestagsdebatte 09.10.2026 · Alterssicherungskommission laufend",
      headline: "Bundestag debattiert über Rentenalter und abschlagsfreie Rente, Gewerkschaften und Arbeitgeber bleiben bei Gegenposition",
      sec30: "Am 09.10.2026 debattierte der Bundestag über das Rentenalter, die abschlagsfreie Rente nach 45 Versicherungsjahren und die Altersteilzeit; eine abschließende gesetzliche Einigung liegt weiterhin nicht vor. Die Alterssicherungskommission empfiehlt, die abschlagsfreie Rente nach 45 Versicherungsjahren abzuschaffen. DGB und Verdi treten für deren Erhalt ein, der Arbeitgeberverband BDA lehnt den Kommissionsvorschlag dagegen aus anderen Gründen ebenfalls ab. Die Opposition (Linke, Grüne, AfD) kritisiert das Vorhaben aus unterschiedlichen Richtungen.",
      blocks: [
        { h: "Was stand bei der Bundestagsdebatte zur Rente im Mittelpunkt?", items: [
          { tag: "fakt", text: "Am 09.10.2026 debattierte der Bundestag über das Rentenalter, die abschlagsfreie Rente nach 45 Versicherungsjahren und die Altersteilzeit; eine abschließende gesetzliche Einigung liegt weiterhin nicht vor.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]},
        { h: "Was empfiehlt die Alterssicherungskommission?", items: [
          { tag: "fakt", text: "Die Alterssicherungskommission empfiehlt, die abschlagsfreie Rente nach 45 Versicherungsjahren abzuschaffen; ein vorzeitiger Rentenbeginn soll künftig nur noch mit Abschlägen möglich sein, mit Ausnahme gesundheitlicher Gründe." }
        ]},
        { h: "Welche Kritik gibt es von Gewerkschaften?", items: [
          { tag: "position", text: "DGB und Verdi treten für den Erhalt der abschlagsfreien „Rente mit 63” ein. Verdi-Vorsitzender Frank Werneke erklärte, eine zunehmende Zahl von Ministern erkenne, dass der Kommissionsvorschlag falsch sei; IG-BAU-Chef Robert Feiger sagte, wer 45 Jahre gearbeitet und eingezahlt habe, verdiene eine Rente ohne Abschläge." }
        ]},
        { h: "Welche Position vertreten die Arbeitgeberverbände?", items: [
          { tag: "position", text: "BDA-Hauptgeschäftsführer Steffen Kampeter lehnte den von Arbeitsministerin Bärbel Bas (SPD) unterstützten Ansatz zur abschlagsfreien Rente nach 45 Versicherungsjahren ab: Der Vorschlag „war falsch, bleibt falsch – und wird auch unter neuem Titel falsch sein”." }
        ]},
        { h: "Welche Haltung vertritt die Opposition?", items: [
          { tag: "position", text: "Die Linke fordert laut Berichten den Verzicht auf eine weitere Erhöhung des Renteneintrittsalters sowie den Erhalt der abschlagsfreien Rente für Langzeitversicherte und der Altersteilzeit ab 55 Jahren. Grünen-Fraktionsvorsitzende Katharina Dröge kritisierte geplante Kürzungen bei der Rente für pflegende Angehörige und forderte alternative Finanzierungsquellen wie eine Erbschaftsteuerreform." },
          { tag: "unbestaetigt", text: "AfD-Abgeordnete Ulrike Schielke-Ziesing warf der Bundesregierung vor, das Rentenniveau einfrieren zu wollen; diese Positionierungen stammen teils aus vorangegangenen Bundestagsdebatten und wurden in der Berichterstattung zum 09.10. als weiterhin gültig beschrieben." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl Gewerkschaften als auch Arbeitgeberverbände den Kommissionsvorschlag ablehnen – wenn auch aus entgegengesetzten Gründen –, zeigt, wie schwierig ein Kompromiss innerhalb der von Kanzler Merz auf Frühjahr 2027 verschobenen Reform bleibt." }
        ]}
      ],
      reaction: "Die vertagte Rentenfrage läuft parallel zu den Berliner Haushaltssondierungen (Meldung 7) und zur Debatte über steigende Zinskosten des Staates (Meldung 3).",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "ms-aktuell.de: Rentenreform in Deutschland – Streit um Rentenalter und 45 Versicherungsjahre hält an", url: "https://ms-aktuell.de/welt/rentenreform-bundestag-09-10-2026/" },
        { title: "ZDFheute: Merz wirbt im Bundestag für Rentenreform – mit Gegenwind", url: "https://www.zdfheute.de/politik/kanzler-merz-regierungsbefragung-bundestag-parlament-100.html" },
        { title: "junge Welt: Rentenreform – DGB-Plädoyer für abschlagsfreie Rente", url: "https://www.jungewelt.de/artikel/527609.rentenreform-dgb-pl%C3%A4doyer-f%C3%BCr-abschlagsfreie-rente.html" },
        { title: "cash-online.de: Rentenreform – Streit um Beitragsjahre und längere Lebensarbeitszeit", url: "https://www.cash-online.de/a/rentenreform-streit-um-beitragsjahre-und-laengere-lebensarbeitszeit-707911/" }
      ]
    },

    /* 7 BERLIN SONDIERUNG HAUSHALT */
    {
      id: "berlin-sondierung-landeshaushalt-10-10", cats: ["germany"], when: "Sondierungsrunde 09.10.2026, 10 Uhr · Arbeitsgruppen am Wochenende · Parteitage in der Folgewoche geplant",
      headline: "Linke, Grüne und SPD sondieren über Berliner Landeshaushalt, noch keine Einigung",
      sec30: "Die Sondierungsrunde zum Landeshaushalt begann am Freitag, 09.10., 10 Uhr, im Haus der Statistik in Berlin-Mitte; eine konkrete Einigung zum Haushalt wurde nicht erzielt. Einigung erzielten die drei Parteien dagegen beim Thema Sauberkeit/Abfallwirtschaft. Berlins Haushaltslage gilt als angespannt – für 2028 fehlen laut Berichten über vier Milliarden Euro. Die zuvor vereinbarte Linie zum Umgang mit Antisemitismus trifft laut der Jüdischen Gemeinde zu Berlin weiterhin auf erhebliches Misstrauen.",
      blocks: [
        { h: "Wie ist der Stand bei den Haushaltssondierungen?", items: [
          { tag: "fakt", text: "Die Sondierungsrunde zum Landeshaushalt begann am Freitag, 09.10.2026, 10 Uhr, im Haus der Statistik in Berlin-Mitte; eine konkrete Einigung zum Haushalt wurde nicht erzielt.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "Einigung erzielten die drei Parteien hingegen beim Thema Sauberkeit und Abfallwirtschaft – sie wollen bei einer möglichen Koalition für mehr Sauberkeit in der Stadt sorgen." }
        ]},
        { h: "Wie ist die finanzielle Ausgangslage?", items: [
          { tag: "fakt", text: "Berlins Haushaltslage gilt als angespannt; für 2028 fehlen laut Berichten über vier Milliarden Euro, mit weiteren Milliardenlücken in Folgejahren. Offen ist, wie die Wahlversprechen der Linken finanziert werden sollen." }
        ]},
        { h: "Welche Positionen vertreten die Parteien?", items: [
          { tag: "position", text: "Linken-Landesvorsitzender Max Schirmer forderte ausreichende Mittel gegen die Wohnungs- und Mietenkrise. SPD-Landeschef Steffen Krach betonte den Wunsch, die Finanzen „auf eine seriöse und stabile Grundlage zu stellen”, lehnte aber eine von Linken und Grünen geforderte Vergesellschaftung von rund 220.000 Wohnungen großer privater Konzerne ab: „Mit mir wird es keine Enteignungen geben.” Grünen-Politikerin Nina Stahr betonte die Finanzierung von Klimaschutzmaßnahmen." }
        ]},
        { h: "Welche Kritik gibt es an der zuvor vereinbarten Antisemitismus-Linie?", items: [
          { tag: "position", text: "Gideon Joffe (Jüdische Gemeinde zu Berlin) erklärte, die Vereinbarung treffe weiterhin auf erhebliches Misstrauen innerhalb der jüdischen Gemeinschaft Berlins.",
            ask: [{ label: "Was braucht eine Koalition im Abgeordnetenhaus?", ref: "e:coalition-majority" }] },
          { tag: "fakt", text: "Linken-Landesvorsitzender Schirmer räumte ein, dass die Vereinbarung innerhalb der eigenen Partei „lebhaft diskutiert” werde." }
        ]},
        { h: "Wie geht es weiter?", items: [
          { tag: "fakt", text: "Für das Wochenende waren Abstimmungen in Arbeitsgruppen vorgesehen, für die folgende Woche Spitzentreffen zu weiteren Themen (Klima, Verkehr, Familienpolitik) sowie mögliche Parteitage zur Abstimmung über Koalitionsverhandlungen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die finanziellen Eckpunkte trotz der zuvor erzielten Antisemitismus-Einigung weiterhin offen sind, zeigt, dass der Weg zu einer möglichen ersten von der Linken geführten Landesregierung noch mehrere ungelöste Streitpunkte enthält." }
        ]}
      ],
      reaction: "Die Berliner Haushaltssondierungen laufen parallel zur bundespolitischen Rentendebatte (Meldung 6).",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel Liveblog: Noch keine Einigungen beim Haushalt – Linke, Grüne und SPD setzen Sondierungen am Wochenende fort", url: "https://www.tagesspiegel.de/berlin/liveblog/noch-keine-einigungen-beim-haushalt-linke-grune-und-spd-setzen-sondierungen-am-wochenende-fort-16053722.html" },
        { title: "ARIVA/dpa-AFX: Berlin – Rot-grün-rote Sondierungen über Haushalt", url: "https://www.ariva.de/news/berlin-rot-gruen-rote-sondierungen-ueber-haushalt-12163803" },
        { title: "Tagesspiegel/dpa: Regierungsbildung – Rot-grün-rote Sondierungen gehen in Berlin weiter", url: "https://www.tagesspiegel.de/berlin/dpa-regierungsbildung-rot-grun-rote-sondierungen-gehen-in-berlin-weiter-16144191.html" }
      ]
    },

    /* 8 UKRAINE: DIESEL-DEAL / ANGRIFFE / SANKTIONEN / SCHRÖDER */
    {
      id: "ukraine-diesel-deal-sanktionen-schroeder-10-10", cats: ["world", "geo"], when: "Diesel-Ankündigung 09.10. · Angriffe 09./10.10. · 22. EU-Sanktionspaket Annahme geplant 12.10. · Schröder-Besuch 09.10.",
      headline: "Trump kündigt Diesel-Deal mit Russland an, Selenskyj übt scharfe Kritik, EU bereitet 22. Sanktionspaket vor",
      sec30: "Nach einem Telefonat mit Putin kündigte Präsident Trump einen Diesel-Deal an: zunächst 300.000 Tonnen russischer Diesel, im November weitere 500.000 Tonnen, danach 1 Million und langfristig bis zu 3 Millionen Tonnen, bei vorübergehender Aussetzung der Diesel-Sanktionen. Präsident Selenskyj kritisierte dies scharf. Parallel trafen Trumps Sondergesandte Witkoff und Kushner am 09.10. die ukrainische Delegation zu Gesprächen über einen möglichen Energie- und Schwarzmeer-Waffenstillstand. Russische Angriffe forderten laut einem Liveticker binnen zwei Tagen 78 Tote und 215 Verletzte; die Ukraine griff ihrerseits russische Rechenzentren und zwei Großraffinerien an. Das 22. EU-Sanktionspaket (1.646 gelistete Personen/Organisationen) soll am 12.10. verabschiedet werden. In Deutschland sorgte ein Geburtstagsbesuch von Altkanzler Schröder bei Putin für scharfe Kritik von Merz und Klingbeil.",
      blocks: [
        { h: "Was kündigte Präsident Trump beim Diesel-Deal mit Russland an?", items: [
          { tag: "position", text: "Nach einem Telefonat mit Putin kündigte Trump einen Diesel-Deal an: „umgehend” 300.000 Tonnen russischer Diesel, im November weitere 500.000 Tonnen, „sofort danach” 1 Million Tonnen, langfristig bis zu 3 Millionen Tonnen; die USA setzten dafür Sanktionen auf russischen Diesel vorübergehend aus." },
          { tag: "position", text: "Präsident Selenskyj kritisierte den Deal scharf: Die Erlaubnis für Russland, Erdölprodukte zu verkaufen, sei „eine Investition in den Krieg”, den man beenden und nicht verlängern müsse; er nannte den Deal zudem „nicht fair und nicht ehrlich” und kritisierte, dass Witkoff und Kushner parallel mit der Ukraine verhandelten, ohne den Diesel-Deal zu erwähnen." }
        ]},
        { h: "Wie ist der Stand bei den Witkoff/Kushner-Gesprächen?", items: [
          { tag: "fakt", text: "Trumps Sondergesandte Steve Witkoff und Jared Kushner trafen am 09.10. in den USA die ukrainische Verhandlungsdelegation (unter anderem Geheimdienstchef Budanow) zu Gesprächen über einen möglichen Energie- und Schwarzmeer-Waffenstillstand; ein europäisches Team sollte sich anschließen. Selenskyj erwartete die Rückkehr der Delegation für Montag." }
        ]},
        { h: "Was ist bei den jüngsten Angriffen passiert?", items: [
          { tag: "unbestaetigt", text: "Laut einem Liveticker wurden in den zwei Tagen 09./10.10. insgesamt 78 Tote und 215 Verletzte durch russische Angriffe gemeldet, mit gezielten Schlägen gegen das ukrainische Stromnetz; Selenskyj sprach von „erheblichen Schäden” an der Energieinfrastruktur. Am 09.10. griff Russland zudem Saporischschja mit Gleitbomben an (1 Toter, 9 Verletzte)." },
          { tag: "fakt", text: "Die Ukraine griff am 08./09.10. zum zweiten Tag in Folge russische Yandex-Rechenzentren an (Ziele Kaluga und Sassowo) sowie in der Nacht zum 08./09.10. die Großraffinerien Omsk und Salawat mit modernisierten Drohnen." }
        ]},
        { h: "Was ist der Stand bei den EU-Sanktionen?", items: [
          { tag: "fakt", text: "Das 22. EU-Sanktionspaket soll am 12.10.2026 von den EU-Außenministern in Luxemburg formell angenommen werden; es listet laut Berichten 1.646 Personen und Organisationen – die größte Erweiterung der Sanktionsliste seit Kriegsbeginn, davon rund 1.570 mit Russlands Militärindustrie verknüpft. Zusätzlich sollen 77 Abgeordnete sanktioniert werden, die im September in besetzten ukrainischen Gebieten „gewählt” wurden." }
        ]},
        { h: "Wie wurde der Putin-Geburtstagsbesuch von Altkanzler Schröder in Deutschland aufgenommen?", items: [
          { tag: "fakt", text: "Altkanzler Gerhard Schröder besuchte Putin am 09.10. anlässlich seines 74. Geburtstags." },
          { tag: "position", text: "Bundeskanzler Merz nannte den Besuch „geradezu unmoralisch”; Vizekanzler Klingbeil erklärte, er halte den Besuch für „völlig inakzeptabel”; Regierungssprecher Steffen Meyer betonte, „Putin allein” trage die Verantwortung für den Krieg." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die USA kurzfristig wirtschaftliche Zusammenarbeit mit Russland (Diesel-Importe) über härteren Druck stellen, während die EU gleichzeitig ihr bislang größtes Sanktionspaket vorbereitet, zeigt unterschiedliche Linien zwischen den beiden wichtigsten Unterstützern der Ukraine." }
        ]}
      ],
      reaction: "Die diplomatischen Spannungen bleiben Hintergrund für die Rüstungsthemen (Meldung 10, Meldung 11); die Lage am Golf wird gesondert in Meldung 9 eingeordnet.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Pforzheimer Zeitung: Trump kündigt Deal zu Diesellieferungen aus Russland an", url: "https://www.pz-news.de/wirtschaft/wirtschaft-weltweit_artikel,-Trump-kuendigt-Deal-zu-Diesellieferungen-aus-Russland-an-_arid,2372292.html" },
        { title: "finanzen.net: Deal statt Sanktionen – Trump kündigt Diesellieferungen aus Russland an, scharfe Kritik von Selenskyj", url: "https://www.finanzen.net/nachricht/aktien/deal-statt-sanktionen-kontroverser-deal-trump-kuendigt-grosse-diesellieferungen-aus-russland-an-scharfe-kritik-von-selenskyj-15976839" },
        { title: "ZDFheute Liveticker: Ukraine-Russland-Konflikt", url: "https://www.zdfheute.de/politik/ausland/ukraine-russland-konflikt-blog-102.html" },
        { title: "112.ua: EU verabschiedet 22. Sanktionspaket gegen Russland", url: "https://112.ua/en/evrosouz-zatverdiv-22-paket-sankcij-proti-rosii-najbilse-rozsirenna-cornogo-spisku-z-pocatku-vijni-189837" },
        { title: "Handelsblatt: Merz und Klingbeil verurteilen Schröders Geburtstagsbesuch bei Putin", url: "https://www.handelsblatt.com/politik/deutschland/geburtstagsfeier-merz-und-klingbeil-verurteilen-schroeders-geburtstags-besuch-bei-putin/100260931.html" }
      ]
    },

    /* 9 IRAN/HORMUZ */
    {
      id: "iran-hormuz-tankerangriffe-trump-midterms-10-10", cats: ["world", "geo"], when: "Tankerangriffe 09.10. (MV Sun Shine, Gem No.2) · Trump-Ankündigung 08./09.10. · weiterer Vorfall 10.10.",
      headline: "Neue Tankerangriffe im Golf trotz Trumps Ankündigung, vor den Zwischenwahlen nicht gegen Iran vorzugehen",
      sec30: "Am 09.10. griffen die iranischen Revolutionsgarden den Tanker MV Sun Shine sowie den VLCC-Tanker Gem No.2 vor den VAE an; am 10.10. meldete UKMTO einen weiteren Beschuss. Präsident Trump hatte zuvor angekündigt, vor den US-Zwischenwahlen am 03.11. keine Angriffe auf den Iran zu starten – das Pentagon arbeitet laut Berichten dennoch weiter an Angriffsoptionen. Die Brent-Preisangaben für Freitag widersprechen sich deutlich zwischen einem Rückgang auf rund 102,6 Dollar und einem Anstieg auf 104,7 Dollar. OPEC+ hat seit der letzten Sitzung am 04.10. keine neue Entscheidung getroffen.",
      blocks: [
        { h: "Was ist bei den jüngsten Tankerangriffen passiert?", items: [
          { tag: "fakt", text: "Am 09.10. griffen die iranischen Revolutionsgarden (IRGC Navy) den Tanker MV Sun Shine an (Treffer im Maschinenraum, Brand) mit der Begründung einer „nicht autorisierten Route”; die IRGC drohte, Angriffe künftig nicht mehr auf die Straße von Hormus zu beschränken, sondern Schiffe „überall in der Region” zu verfolgen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Ebenfalls am 09.10. wurde der VLCC-Tanker „Gem No.2” rund 13 Seemeilen westlich von Al Jazeera (VAE) von einem unbekannten Projektil getroffen; das Feuer wurde gelöscht." },
          { tag: "unbestaetigt", text: "Am 10.10. meldete UKMTO laut Berichten einen erneuten Beschuss vor der VAE-Küste; nach einer Einschätzung handelt es sich um die höchste Zahl an Tankerangriffen seit Kriegsbeginn." }
        ]},
        { h: "Was kündigte Trump zum Umgang mit dem Iran an?", items: [
          { tag: "position", text: "Präsident Trump erklärte am 08./09.10., vor den US-Zwischenwahlen am 03.11.2026 keine Angriffe auf den Iran zu starten, und verwies auf „produktive Gespräche”." },
          { tag: "unbestaetigt", text: "Das Pentagon arbeitet laut Berichten unabhängig von dieser öffentlichen Zurückhaltung weiterhin an Angriffsoptionen unterschiedlichen Umfangs." }
        ]},
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die Angaben zum Brent-Preis für Freitag widersprechen sich deutlich: Eine Quelle nennt einen Rückgang auf rund 102,6 bis 103,2 Dollar (wegen Trumps Nicht-Angriffs-Zusage), eine andere einen Anstieg auf 104,7 Dollar (wegen der neuen Tankerangriffe und eines Hurrikans im Golf von Mexiko). Diese Diskrepanz ließ sich nicht abschließend auflösen.",
            ask: [{ label: "Was bedeutet der aktuelle Ölpreis?", ref: "n:brent" }] }
        ]},
        { h: "Was ist der Stand bei OPEC+?", items: [
          { tag: "fakt", text: "OPEC+ hatte zuletzt am 04.10. die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag gelassen; für den 09./10.10. liegt keine neue Sitzung oder Entscheidung vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass neue Tankerangriffe und Trumps öffentliche Zurückhaltung gleichzeitig auftreten, zeigt laut Marktbeobachtern, wie widersprüchlich sich die Risikolage am Golf derzeit darstellt – was sich auch in den uneinheitlichen Ölpreis-Angaben spiegelt.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der uneinheitliche Ölpreis bleibt Hintergrund für die deutsche Energieversorgung (Meldung 15) sowie für die Erholung an den Aktienmärkten (Meldung 1).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "Euronews: Iran's IRGC strikes tanker and threatens to target vessels beyond Hormuz", url: "https://www.euronews.com/2026/10/09/irans-irgc-strikes-tanker-and-threatens-to-target-vessels-beyond-hormuz" },
        { title: "CNBC: Iran war, Strait of Hormuz tanker attack, oil", url: "https://www.cnbc.com/2026/10/09/iran-war-strait-hormuz-tanker-attack-oil.html" },
        { title: "The National: Live – Iran war, Houthis, Strait of Hormuz, IRGC", url: "https://www.thenationalnews.com/news/mena/2026/10/10/live-iran-war-houthis-strait-of-hormuz-irgc/" },
        { title: "Al Jazeera: Trump says US will not strike Iran before midterm elections", url: "https://www.aljazeera.com/news/2026/10/9/trump-says-us-will-not-strike-iran-before-midterm-elections" },
        { title: "CNBC: Oil falls as Trump comments on Iran talks ease supply concerns", url: "https://cnbc.com/2026/10/09/oil-falls-as-trump-comments-on-iran-talks-ease-supply-concerns.html" }
      ]
    },

    /* 10 RHEINMETALL/RENK/HENSOLDT FREITAG */
    {
      id: "rheinmetall-renk-hensoldt-freitag-berenberg-10-10", cats: ["defence"], when: "Kurse Fr 09.10.2026 · Berenberg-Abstufung Rheinmetall 09.10. · Hensoldt-Kyiv-Deal-Nachhall 04.10.",
      headline: "Berenberg stuft Rheinmetall ab, Hensoldt profitiert vom Merz-Kyiv-Besuch, Renk bleibt nahe Jahrestief",
      sec30: "Rheinmetall notierte am Freitag laut Zwischenmeldungen bei rund 934,60 Euro (−0,3 % ggü. Donnerstagsschluss), nachdem Berenberg das Rating von „Buy” auf „Hold” und das Kursziel von 1.600 auf 1.020 Euro gesenkt hatte; RBC und Bernstein bestätigten dagegen positivere Einschätzungen. Renk blieb mit rund 34,0 bis 34,25 Euro nahe seinem am Donnerstag markierten 52-Wochen-Tief, trotz eines rund 30 Mio. Euro schweren Folgeauftrags vom finnischen Partner Patria. Hensoldt gewann rund 0,3 bis 1,0 % auf etwa 75,15 bis 75,40 Euro, gestützt vom Nachhall des Kyiv-Besuchs von Bundeskanzler Merz.",
      blocks: [
        { h: "Wie haben sich die Kurse am Freitag entwickelt?", items: [
          { tag: "unbestaetigt", text: "Rheinmetall notierte am Freitag laut Zwischenmeldungen bei rund 934,60 Euro (−0,3 % ggü. Donnerstagsschluss von 937,40 Euro).",
            ask: [{ label: "Was bedeutet ein schwankender Aktienkurs trotz hoher Branchennachfrage?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "Renk blieb mit rund 34,0 bis 34,25 Euro nahe seinem am Donnerstag markierten 52-Wochen-Tief von 33,49 Euro." },
          { tag: "fakt", text: "Hensoldt gewann dagegen rund 0,3 bis 1,0 % auf etwa 75,15 bis 75,40 Euro und war damit der klare Gewinner unter den drei Werten." }
        ]},
        { h: "Was treibt die Kursbewegungen?", items: [
          { tag: "position", text: "Berenberg-Analyst George McWhirter senkte das Rating für Rheinmetall von „Buy” auf „Hold” und das Kursziel von 1.600 auf 1.020 Euro, mit Verweis auf Unsicherheit beim mittelfristigen Wachstum und den Bedarf an neuen Großaufträgen über 2030 hinaus. RBC Capital Markets (Outperform, 1.600 Euro) und Bernstein Research (Outperform, 1.200 Euro) bestätigten dagegen ihre positiveren Einschätzungen." },
          { tag: "fakt", text: "Renk erhielt einen rund 30 Mio. Euro schweren Folgeauftrag des finnischen Partners Patria für HSWL-076-Getriebe der TRACKX-Fahrzeugfamilie (Lieferbeginn 2027); Jefferies bewertete dies als soliden Start ins vierte Quartal und bestätigte sein Buy-Rating." },
          { tag: "fakt", text: "Hensoldt profitierte vom Nachhall des Kyiv-Besuchs von Bundeskanzler Merz am 04.10., bei dem Hensoldt-CEO Oliver Dörre ein Memorandum of Understanding mit dem ukrainischen Verteidigungsministerium über weitere Radarlieferungen unterzeichnet hatte; insgesamt wurden bei dem Besuch 14 Abkommen im Volumen von rund 6,6 Mrd. Euro unterzeichnet. Jefferies (Buy, 98 Euro) und Kepler Cheuvreux (Buy, 90 Euro) bestätigten positive Einschätzungen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Hensoldt von einer konkreten Auftragsperspektive profitierte, während Rheinmetall wegen einer einzelnen Analysten-Abstufung nachgab und Renk trotz eines operativ positiven, aber kleinen Auftrags nahe seinem Jahrestief blieb, zeigt erneut, dass die drei Rüstungswerte derzeit stärker auf unternehmensspezifische Nachrichten reagieren als auf den allgemeinen Branchentrend. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die unterschiedliche Kursentwicklung fällt zusammen mit der allgemeinen Markterholung (Meldung 1); die anhaltenden Spannungen rund um die Ukraine bleiben Hintergrundfaktor für die Branche (Meldung 8, Meldung 11).",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "finanzen.ch: Rheinmetall Aktie News – Anleger schicken Rheinmetall am Mittag ins Minus", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-09-10-2026-1035060931" },
        { title: "onvista: ANALYSE-FLASH – Berenberg senkt Rheinmetall auf 'Hold' und Ziel auf 1020 Euro", url: "https://www.onvista.de/news/2026/10-09-analyse-flash-berenberg-senkt-rheinmetall-auf-hold-und-ziel-auf-1020-euro-0-10-26562204" },
        { title: "boerse-express: RENK-Aktie – Geht es jetzt los!?", url: "https://www.boerse-express.com/news/articles/renk-aktie-geht-es-jetzt-los-951857" },
        { title: "ad-hoc-news.de: Jefferies stufte Hensoldt-Aktie hoch und hielt Ziel bei 98 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/jefferies-stufte-hensoldt-aktie-hoch-und-hielt-ziel-bei-98-euro/70274671" },
        { title: "HENSOLDT: HENSOLDT strengthens Ukraine's air defence", url: "https://www.hensoldt.net/news/hensoldt-strengthens-ukraines-air--defence" }
      ]
    },

    /* 11 TKMS/JAPAN/NATO-BRANCHE */
    {
      id: "tkms-japan-nato-ruestungsindustrie-10-10", cats: ["defence"], when: "TKMS unverändert Vorzugsbieter seit Juli 2026 · Japan-Prüfung seit 02.10. · NATO-Branchenbericht 2026",
      headline: "TKMS-Kanada-Vertrag weiterhin offen, Japan prüft Patriot-Weitergabe, Branchenbericht zeigt Kapazitätsengpässe",
      sec30: "TKMS bleibt seit Juli 2026 unverändert Vorzugsbieter für die Erneuerung der kanadischen U-Boot-Flotte; ein bindender Hauptvertrag wird weiterhin erst Ende 2027 erwartet, neue Entwicklungen für den 09./10.10. liegen nicht vor. In Japan erklärte der LDP-Politiker Itsunori Onodera bei einem Kyiv-Besuch, Japan wolle Gespräche über eine mögliche Patriot-Weitergabe an die Ukraine anstoßen; eine Kabinettsentscheidung steht noch aus. Ein aktueller Branchenbericht beschreibt für 2026 große Kapazitätsengpässe in der europäischen Rüstungsindustrie.",
      blocks: [
        { h: "Wie ist der Stand beim TKMS-Auftrag aus Kanada?", items: [
          { tag: "fakt", text: "TKMS bleibt unverändert seit Juli 2026 Vorzugsbieter für die Erneuerung der kanadischen U-Boot-Flotte (bis zu zwölf Boote vom Typ 212CD); ein bindender Hauptvertrag wird laut Berichten weiterhin erst Ende 2027 erwartet, für den 09./10.10. liegen keine neuen Entwicklungen vor.",
            ask: [{ label: "Was bedeutet „Vorzugsbieter”?", ref: "e:nato-target" }] }
        ]},
        { h: "Wie ist der Stand bei Japan und der Patriot-Weitergabe?", items: [
          { tag: "unbestaetigt", text: "Der japanische LDP-Politiker Itsunori Onodera erklärte bei einem Kyiv-Besuch, Japan wolle trotz rechtlicher und politischer Beschränkungen zwischenstaatliche Gespräche über eine mögliche Weitergabe von Patriot-Abfangraketen an die Ukraine anstoßen; eine konkrete Entscheidung im Kabinett von Premierministerin Takaichi steht weiterhin aus." },
          { tag: "fakt", text: "Kurz nach dem Besuch kündigte Japans Außenministerium ein weiteres Sanktionspaket gegen Russland an, das Präsident Selenskyj begrüßte." }
        ]},
        { h: "Was zeigt der aktuelle Branchenbericht zur europäischen Rüstungsindustrie?", items: [
          { tag: "fakt", text: "Ein Branchenbericht beschreibt für 2026 große Kapazitätsengpässe in der europäischen Rüstungsindustrie: Die Nachfrage nach Munition und Raketensystemen wachse 5 bis 6 Mal schneller als die Produktionskapazität; mehr als die Hälfte der großen europäischen Rüstungsprogramme sei verspätet oder über Budget." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl das kanadische U-Boot-Programm als auch die mögliche japanische Patriot-Weitergabe politisch oder wirtschaftlich weit fortgeschritten, aber vertraglich nicht abgesichert sind, passt zum im Branchenbericht beschriebenen Muster aus hoher Nachfrage und begrenzten Kapazitäten." }
        ]}
      ],
      reaction: "Die anhaltende Nachfrage nach westlicher Rüstung hängt mit den Kursbewegungen bei Rheinmetall, Renk und Hensoldt zusammen (Meldung 10) und mit den diplomatischen Spannungen rund um die Ukraine (Meldung 8).",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "drweb.de: Zwölf U-Boote für Kanada – warum TKMS noch keinen Vertrag hat", url: "https://www.drweb.de/zwoelf-u-boote-fuer-kanada-warum-tkms-noch-keinen-vertrag-hat/" },
        { title: "Japan Times: Japan and Ukraine further ties as Tokyo weighs unprecedented security linkup", url: "https://www.japantimes.co.jp/news/2026/10/08/japan/japan-ukraine-defense-cooperation/" },
        { title: "militarnyi.com: Japan to Consider Transferring Patriot Missiles to Ukraine", url: "https://militarnyi.com/en/news/japan-consider-patriot-missiles-for-ukraine/" },
        { title: "informedclearly.com: Europas Rüstungsindustrie 2026 – die Abrechnung", url: "https://informedclearly.com/de/geopolitik/61130/europas-ruestungsindustrie-nato-ziel-2026" }
      ]
    }
    ,

    /* 12 M&A: CARLYLE/LUKOIL, CABLE ONE/COBANK, SPACEX/GRAIN, FIRMUS */
    {
      id: "ma-deals-carlyle-lukoil-cableone-spacex-firmus-10-10", cats: ["deals", "pe"], when: "Carlyle/Lukoil-Vertragsende 08.10. · CoBank-Klage 09.10. · SpaceX/Grain-Deal 09.10. · Firmus-IPO-Rückzug 08./09.10.",
      headline: "Carlyles Lukoil-Deal läuft aus, Gläubiger klagt gegen Cable-One-Übernahme, SpaceX kauft Funkspektrum für 8 Mrd. Dollar",
      sec30: "Die Private-Equity-Firma Carlyle gab ihren Plan auf, internationale Vermögenswerte von Lukoil zu übernehmen, nachdem die US-Sanktionsbehörde OFAC keine Genehmigung erteilte. Die Kreditgenossenschaft CoBank klagte, um Cable Ones rund 480 Mio. Dollar schwere Übernahme von Mega Broadband Investments zu blockieren; die Cable-One-Aktie fiel um rund 35%. SpaceX übernimmt für rund 8 Mrd. Dollar ein Funkspektrum-Portfolio von Grain Management. Der australische Rechenzentrumsbetreiber Firmus zog seinen geplanten Börsengang zurück. Bei den zuvor laufenden Prozessen um GFL Environmental, Palmer Square, Stack Infrastructure und Monzo gibt es keine neuen Entwicklungen.",
      blocks: [
        { h: "Was ist beim Carlyle/Lukoil-Deal passiert?", items: [
          { tag: "fakt", text: "Die Private-Equity-Firma Carlyle gab ihren Plan auf, internationale Vermögenswerte von Lukoil (unter anderem europäische Raffinerien, Ölfelder im Irak und in Kasachstan) zu übernehmen – die Vereinbarung lief aus, nachdem keine Genehmigung des US-Sanktionsamts OFAC erteilt wurde. Ein Konsortium um Todd Boehly bleibt im Rennen um die Lukoil-Vermögenswerte.",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] }
        ]},
        { h: "Was ist bei der Cable-One/Mega-Broadband-Übernahme passiert?", items: [
          { tag: "fakt", text: "Die Kreditgenossenschaft CoBank ACB (Gläubigerin mit rund 1,1 Mrd. Dollar besicherter Kredite an Cable One) reichte Klage ein, um Cable Ones rund 480 Mio. Dollar schwere Übernahme von 55 % an Mega Broadband Investments (Verkäufer: GTCR) zu blockieren, mit dem Vorwurf, Cable One sei de facto insolvent und das übernommene Eigenkapital nur rund 54 Mio. Dollar wert. Ein Bundesrichter erließ eine vorübergehende Verfügung; die Cable-One-Aktie fiel um rund 35 %." }
        ]},
        { h: "Was ist beim SpaceX/Grain-Management-Deal neu?", items: [
          { tag: "fakt", text: "SpaceX übernimmt für rund 8 Mrd. Dollar in bar ein 800-MHz-Funkspektrum-Portfolio von der Private-Equity-Firma Grain Management für den geplanten Starlink-Mobilfunkdienst (Direct-to-Device); der Deal steht unter dem Vorbehalt der Zustimmung der US-Regulierungsbehörde FCC. Laut Berichten verloren AT&T, Verizon und T-Mobile zusammen rund 36 Mrd. Dollar an Marktkapitalisierung, während die SpaceX-Bewertung um rund 67 Mrd. Dollar stieg." }
        ]},
        { h: "Was ist beim geplanten Börsengang von Firmus passiert?", items: [
          { tag: "fakt", text: "Der australische, von Nvidia unterstützte Rechenzentrumsbetreiber Firmus zog seinen geplanten Börsengang zurück, nachdem die Preisspanne von 11 auf 8,25 australische Dollar gesenkt worden war und die Zeichnungsbücher laut Berichten zusammengebrochen waren; das Unternehmen sucht nun eine Privatplatzierung von bis zu 3 Mrd. Dollar." }
        ]},
        { h: "Wie ist der Stand bei GFL Environmental, Palmer Square, Stack Infrastructure und Monzo?", items: [
          { tag: "unbestaetigt", text: "Für alle vier zuvor laufenden Prozesse liegen für den 09./10.10. keine neuen Entwicklungen vor: Um GFL Environmental (Unternehmenswert rund 28 Mrd. Dollar) konkurrieren weiterhin KKR/Blackstone/Energy Capital Partners gegen Brookfield/IFM Investors ohne Einigung; Goldman Sachs bleibt führender Bieter für Palmer Square (rund 37 Mrd. Dollar verwaltetes Vermögen); ein BlackRock/IFM-Konsortium bleibt in exklusiven Gesprächen über Stack Infrastructure; Monzo führt weiterhin frühe Gespräche mit CVC Capital Partners und Advent International über einen Minderheitsverkauf. Angaben zu Finanzierung, finalem Preis oder Zeitplan sind in den Quellen für keinen der vier Fälle genannt.",
            ask: [{ label: "Was ist ein Unternehmenswert (Enterprise Value)?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere große, teils milliardenschwere Deals (Carlyle/Lukoil, Cable One/Mega Broadband, SpaceX/Grain, Firmus-Börsengang) binnen wenigen Tagen scheiterten, blockiert oder zurückgezogen wurden, während andere laufende Prozesse unverändert bleiben, zeigt anhaltend hohe, aber zugleich störanfällige Dealaktivität in diesem Herbst." }
        ]}
      ],
      reaction: "Die hohe, aber störanfällige Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: ["closing", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "≈ 8 Mrd. $ (SpaceX/Grain Management, Funkspektrum, bar); weitere genannte Deals ohne einheitlichen Gesamtwert",
        buyer: "SpaceX",
        target: "Grain Management (800-MHz-Funkspektrumportfolio)",
        sector: "Telekommunikation / Satellitenkommunikation",
        type: "Übernahme unter FCC-Vorbehalt"
      },
      sources: [
        { title: "Bloomberg Tax: Carlyle Says Deal to Buy Lukoil International Assets Expired", url: "https://news.bloombergtax.com/international-trade/carlyle-says-deal-to-buy-lukoil-international-assets-expired-1" },
        { title: "Bloomberg: Cable One Lender Seeks to Block $480 Million Mega Broadband Deal", url: "https://www.bloomberg.com/news/articles/2026-10-09/cable-one-lender-seeks-to-block-480-million-mega-broadband-deal" },
        { title: "Axios: SpaceX's $8 billion spectrum deal", url: "https://www.axios.com/2026/10/09/spacex-8-billion-spectrum" },
        { title: "Bloomberg: Data Center Darling's $30 Billion IPO Dream Crushed in 48 Hours", url: "https://www.bloomberg.com/news/articles/2026-10-09/data-center-darling-s-30-billion-ipo-dream-crushed-in-48-hours" },
        { title: "Private Equity Wire: Blackstone and Brookfield lead rival PE consortia in GFL takeover race", url: "https://www.privateequitywire.co.uk/blackstone-and-brookfield-lead-rival-pe-consortia-in-gfl-takeover-race/" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-blue-owl-milken-semafor-10-10", cats: ["credit", "pe"], when: "Semafor-Folgebericht 08.10. · Milken Asia Summit 08.10. · Blue-Owl-Gegenrede 08.10.",
      headline: "Blue-Owl-Chefs widersprechen Bewertungssorgen, Investoren warnen weiter vor Refinanzierungsrisiko bei älteren Private-Credit-Deals",
      sec30: "Blue-Owl-Co-CEOs Marc Lipschultz und Doug Ostrover widersprachen öffentlich Sorgen um die Bewertungspraxis ihres Unternehmens und verwiesen auf niedrige Kreditverluste und hohe Renditen. Ein Semafor-Folgebericht zeigt, dass die SEC Wirtschaftsprüfer zu mehr Genauigkeit bei Kreditbewertungen mahnt und die Fed prüft, wie Banken Sicherheiten für Private-Credit-Kredite bewerten; ein ehemaliger JPMorgan-Banker verklagt FS KKR und Blue Owl. Beim Milken Asia Summit warnten Investoren erneut vor Refinanzierungsrisiken bei Deals aus 2021/2022. Die australische Bathla-Insolvenz bleibt ungelöst.",
      blocks: [
        { h: "Wie reagiert Blue Owl auf die Bewertungssorgen?", items: [
          { tag: "position", text: "Blue-Owl-Co-CEOs Marc Lipschultz und Doug Ostrover widersprachen den Kreditsorgen: Der 10-Jahres-Kreditverlust liege nur bei 12 Basispunkten (gegenüber 60 bis 100 Basispunkten im Syndikatsmarkt), Direktkredite würfen über 9 % Rendite ab, bei Gewinnmargen von 58 bis 58,5 %; die Dividendenrendite liege über 9 %. Die Blue-Owl-Aktie sei dennoch um rund 70 % gefallen.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] }
        ]},
        { h: "Was zeigt der Semafor-Folgebericht?", items: [
          { tag: "fakt", text: "Laut einem Semafor-Folgebericht mahnt die US-Börsenaufsicht SEC Wirtschaftsprüfer zu mehr Genauigkeit bei Kreditbewertungen; die Fed prüft zudem, wie Banken Sicherheiten für Private-Credit-Kredite bewerten. Der frühere JPMorgan-M&A-Chef Jim Woolery verklagt über seine Kanzlei FS KKR und Blue Owl wegen angeblich aufgeblasener Bewertungen." }
        ]},
        { h: "Was wurde beim Milken Asia Summit zusätzlich diskutiert?", items: [
          { tag: "position", text: "Investoren warnten beim Milken Asia Summit erneut vor einem wachsenden Refinanzierungsrisiko bei Private-Credit-Deals aus den Jahren 2021/2022, die bei den damaligen Nahe-Null-Zinsen abgeschlossen wurden; aktuelle Ausfälle lägen bei rund 3 bis 4 % gegenüber einem historischen Schnitt von rund 2 %, bei einem Marktvolumen von rund 1,8 Billionen Dollar.",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Wie ist der Stand bei der australischen Bathla-Insolvenz?", items: [
          { tag: "fakt", text: "Die Insolvenz des australischen Bauträgers Bathla Group bleibt ungelöst: Rund 40 Private-Credit-Fonds sind mit rund 3,6 Mrd. Dollar engagiert; die Fondsgesellschaft Metrics Credit Partners hat den Handel in drei ASX-notierten Fonds ausgesetzt. Die australische Notenbank RBA sieht weiterhin kein systemisches Risiko." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Blue Owls Management den Sorgen öffentlich widerspricht, während SEC und Fed gleichzeitig genauer hinschauen und ein ehemaliger Wall-Street-Banker klagt, zeigt, dass die Debatte um die Verlässlichkeit von Private-Credit-Bewertungen trotz der Gegenrede nicht abklingt." }
        ]}
      ],
      reaction: "Die anhaltende Bewertungsdebatte ergänzt die laufenden Übernahmegespräche bei Palmer Square (Meldung 12) um die Risikoseite desselben Marktes.",
      terms: ["nav", "default-rate", "bdc", "pik"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      widget: "sofr",
      sources: [
        { title: "Semafor: Blue Owl CEOs rebuff credit fears", url: "https://semafor.com/article/10/08/2026/blue-owl-ceos-rebuff-credit-fears" },
        { title: "Semafor: The worry hanging over private credit – can anyone trust the numbers?", url: "https://www.semafor.com/article/10/06/2026/the-worry-hanging-over-private-credit-can-anyone-trust-the-numbers" },
        { title: "Bloomberg: Legacy Private Credit Loans Face Refinancing Risks as Rates Rise", url: "https://www.bloomberg.com/news/articles/2026-10-08/legacy-private-credit-loans-face-refinancing-risks-as-rates-rise" },
        { title: "Bloomberg: RBA Downplays Risk from Bathla Collapse to Financial Stability", url: "https://www.bloomberg.com/news/articles/2026-10-01/rba-downplays-risks-from-bathla-collapse-to-financial-stability" }
      ]
    },

    /* 14 TECH/KI */
    {
      id: "openai-bloomberg-kiblase-panmure-dalio-10-10", cats: ["tech"], when: "Bloomberg-Bericht 09.10. · Panmure-Liberum-Warnung 09.10. · Dalio-Warnung 07.10. · Broadcom/SpaceX-Finanzierungen laufend",
      headline: "Bloomberg-Bericht entlastet OpenAI-Aktien, neue Warnung vor möglichem Platzen der KI-Blase 2027/2028",
      sec30: "Ein neuer Bloomberg-Bericht vom 09.10. legt nahe, dass OpenAI gegenüber Investoren weiterhin an seinem Jahresendziel von 70 Mrd. Dollar annualisiertem Umsatz festhält; Chip- und KI-Werte erholten sich daraufhin. Panmure-Liberum-Marktstratege Joachim Klement warnte am 09.10., die KI-Blase werde seiner Kernüberzeugung nach 2027 oder 2028 platzen; Ray Dalio hatte bereits am 07.10. vor einer klassischen Blasensituation gewarnt. Broadcom und SpaceX bauen weiterhin milliardenschwere Finanzierungen für KI-Chip-Käufe auf.",
      blocks: [
        { h: "Was zeigt der neue Bloomberg-Bericht zu OpenAI?", items: [
          { tag: "fakt", text: "Laut einem Bloomberg-Bericht vom 09.10. signalisierte OpenAI Investoren, weiterhin bis Jahresende eine annualisierte Umsatz-Run-Rate von 70 Mrd. Dollar erreichen oder übertreffen zu wollen – getragen vor allem durch ein Enterprise-Umsatzwachstum von 107 % und eine Gesamt-Run-Rate-Wachstumsrate von 77 % im dritten Quartal." },
          { tag: "fakt", text: "Die Diskrepanz zum vorherigen FT-Bericht (rund 50 Mrd. Dollar) wird laut einem Tech-Times-Bericht damit erklärt, dass Investoren versucht hatten, OpenAIs Zahlen für einen direkten Vergleich mit Anthropic hochzurechnen, wobei eine falsche Bilanzierungsmethodik verwendet wurde." },
          { tag: "position", text: "OpenAI-Finanzchefin Sarah Friar betonte gegenüber CNBC, das Unternehmen sei weiterhin „sehr gut kapitalisiert”." }
        ]},
        { h: "Wie haben Chip- und KI-Aktien am Freitag reagiert?", items: [
          { tag: "fakt", text: "Oracle erholte sich laut mehreren Quellen deutlich (zwischen +3,2 % und +5,2 %), nachdem die Aktie am Donnerstag rund 6 % verloren hatte; Chip- und KI-Infrastrukturwerte zogen laut Berichten insgesamt im vorbörslichen Handel an.",
            ask: [{ label: "Warum reagiert die Nasdaq stärker auf solche Nachrichten?", ref: "chain:nasdaq-why" }] }
        ]},
        { h: "Wie geht die Debatte um eine mögliche KI-Blase weiter?", items: [
          { tag: "position", text: "Joachim Klement, Leiter Marktstrategie bei der Londoner Investmentbank Panmure Liberum, warnte am 09.10., die KI-Blase werde seiner Kernüberzeugung nach entweder 2027 oder 2028 platzen; er nennt erschöpfte freie Cashflows der Hyperscaler bei gleichzeitig steigenden Fremdkapitalkosten als Risikoindikatoren und hält im Krisenfall einen Rückgang des S&P 500 auf rund 5.000 Punkte (−36 %) für möglich.",
            ask: [{ label: "Wie hängen KI-Investitionen mit solchen Bewertungsfragen zusammen?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Investor Ray Dalio hatte bereits am 07.10. bei der Forbes Global CEO Conference in Singapur gewarnt, KI befinde sich in einer klassischen Blasensituation; steigende Zinsen und wachsende Schuldenfinanzierung könnten einen scharfen Rückschlag auslösen." }
        ]},
        { h: "Was ist bei den großen KI-Finanzierungsdeals neu?", items: [
          { tag: "fakt", text: "Laut aktuellen Berichten beziffern einige Quellen die Broadcom-Finanzierung für Anthropics Chip-Leasing auf bis zu 42 Mrd. Dollar (andere nennen bis zu 60 Mrd. Dollar als Gesamtpaket); Broadcom-CEO Hock Tan bekräftigte den Ausbaupfad von 1 Gigawatt 2026 auf weitere 5 Gigawatt 2027 mit Option auf zusätzliche 10 Gigawatt 2028." },
          { tag: "fakt", text: "SpaceX verhandelt laut Berichten über eine rund 40 Mrd. Dollar schwere Fremdfinanzierung (rund 10 Mrd. Dollar Bankkredite, 30 Mrd. Dollar Investment-Grade-Anleihen), angeführt von Apollo Global Management und Pimco, zur Finanzierung von Nvidia-Chip-Käufen; auch Oracle sucht laut Berichten parallel Fremdkapital für KI-Chip-Käufe.",
            ask: [{ label: "Was bedeuten solche verschachtelten Finanzierungen?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass ein neuer Bericht zur selben Umsatzfrage binnen 24 Stunden die Marktstimmung drehen konnte, während gleichzeitig mehrere prominente Investoren vor einem möglichen Platzen der KI-Blase warnen und die Finanzierungssummen für KI-Infrastruktur weiter wachsen, zeigt, wie stark die Marktstimmung derzeit von der ungeklärten Frage abhängt, ob sich die hohen KI-Investitionen tatsächlich rechnen." }
        ]}
      ],
      reaction: "Der Stimmungswechsel bei Chip- und KI-Werten ist zentraler Hintergrund für die Erholung an den Aktienmärkten (Meldung 1).",
      terms: [],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Tech Times: Investors Built $70B OpenAI Revenue Estimate Using Wrong Method", url: "https://techtimes.com/articles/328836/20261009/investors-built-70b-openai-revenue-estimate-using-wrong-method-ai-stocks-fell-when-ft-corrected.htm" },
        { title: "Insurance Journal: AI Bubble Risks Worst S&P 500 Crash Since 2008, Strategist Says", url: "https://www.insurancejournal.com/news/international/2026/10/09/888427.htm" },
        { title: "Yahoo Finance UK: Ray Dalio warns AI bubble is nearing a breaking point", url: "https://uk.finance.yahoo.com/news/ray-dalio-warns-ai-bubble-133000666.html" },
        { title: "Yahoo Finance: Broadcom to lend Anthropic up to $42 billion to lease chips", url: "https://finance.yahoo.com/technology/article/broadcom-to-lend-anthropic-up-to-42-billion-to-lease-chips-in-latest-circular-investing-deal-121617505.html" },
        { title: "Yahoo Finance: SpaceX seeks $40 billion in debt financing for Nvidia AI chips", url: "https://finance.yahoo.com/technology/ai/articles/spacex-seeks-40-billion-debt-114434062.html" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "gasspeicher-reiche-opec-ttf-erneuerbare-10-10", cats: ["energy"], when: "Gasspeicher-Stand 08.10. (59,4 %) · Reiche-Sefe-Anweisung laufend · Brent/TTF Fr 09.10. · Erneuerbaren-Demo 09.10.",
      headline: "Deutsche Gasspeicher auf niedrigstem Stand seit 15 Jahren, Reiche weist Sefe zu mehr Einspeicherung an",
      sec30: "Die deutschen Gasspeicher lagen am 08.10.2026 bei 59,4 % – rund 16,6 Prozentpunkte unter dem Vorjahreswert und laut Berichten der niedrigste Stand zu dieser Jahreszeit seit mindestens 15 Jahren. Wirtschaftsministerin Reiche wies die bundeseigene Sefe an, verstärkt Gas einzuspeichern; der BDEW begrüßt dies, warnt aber vor unwirtschaftlichem Einkauf. Der TTF-Gaspreis fiel am Freitag um rund 3 % auf 76,48 Euro pro Megawattstunde, während die Brent-Angaben widersprüchlich bleiben. In Berlin demonstrierten rund 8.000 Menschen für mehr erneuerbare Energien.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen am 08.10.2026 bei 59,4 % – rund 16,6 Prozentpunkte unter dem Vorjahreswert und laut Berichten der niedrigste Stand zu dieser Jahreszeit seit mindestens 15 Jahren; die Bundesnetzagentur bewertet die Versorgungssicherheit trotzdem weiterhin als gewährleistet.",
            ask: [{ label: "Welche Rolle spielen Gasspeicher für die Energieversorgung?", ref: "e:energy-germany" }] },
          { tag: "fakt", text: "Auf EU-Ebene lagen die Speicher laut IEEFA am 03.10. bei 72,4 % – ebenfalls der niedrigste Wert seit Herbst 2011, mit einem Defizit von rund 7,3 Mrd. Kubikmetern gegenüber dem Vorjahr." }
        ]},
        { h: "Wie reagiert die Bundesregierung?", items: [
          { tag: "fakt", text: "Wirtschaftsministerin Katherina Reiche wies in Abstimmung mit Bundeskanzler Merz die bundeseigene Sefe an, verstärkt Gas einzuspeichern." },
          { tag: "position", text: "BDEW-Chefin Kerstin Andreae begrüßte dies als sinnvollen Schutz für den Winter, warnte aber zugleich, ein verlustreicher Gaseinkauf auf Vorrat sei für Unternehmen derzeit unwirtschaftlich – kein Unternehmen könne dauerhaft mit Verlust einkaufen.",
            ask: [{ label: "Was ist eine Umlage?", ref: "t:umlage" }] },
          { tag: "unbestaetigt", text: "Bei der separat geplanten strategischen Gasreserve von 24 Terawattstunden bleibt die Finanzierung (Umlage auf Gaskunden, Haushaltsmittel oder ein Mischmodell) weiterhin offen; geschätzte Kosten liegen bei rund 1,5 Mrd. Euro für den Aufbau." }
        ]},
        { h: "Wie haben sich Brent-Öl und TTF-Gas am Freitag entwickelt?", items: [
          { tag: "unbestaetigt", text: "Der Brent-Preis bewegte sich laut widersprüchlichen Quellen zwischen einem Rückgang auf rund 102,6 Dollar und einem Anstieg auf 104,7 Dollar (Meldung 9); der TTF-Gaspreis fiel dagegen klarer um rund 3 % auf 76,48 Euro pro Megawattstunde.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Was ist der Stand bei OPEC+ und anderen Förderländern?", items: [
          { tag: "fakt", text: "OPEC+ hält die Förderquote für November seit dem 04.10. unverändert bei rund 31,01 Mio. Barrel pro Tag; Russlands Ölproduktion stieg im Oktober leicht auf 9,382 Mio. Barrel pro Tag, blieb aber unter der eigenen Förderquote." }
        ]},
        { h: "Was ist sonst an Energiepolitik passiert?", items: [
          { tag: "fakt", text: "Am Freitag, 09.10., demonstrierten laut Veranstalterangaben rund 8.000 Menschen im Berliner Regierungsviertel unter dem Motto „Erneuerbare Energien: Ausbauen statt Ausbremsen” gegen die geplante EEG-Novelle 2027 und das Netzanschlusspaket." },
          { tag: "fakt", text: "Die erste Lesung des Regierungsentwurfs zur Verlängerung des Netzentgelt-Zuschusses 2027–2029 (jährlich rund 5,5 Mrd. Euro aus dem Klima- und Transformationsfonds) fand bereits am 08.10. statt; der Bundesrat befasst sich voraussichtlich ab dem 17.10. damit." }
        ]},
        { h: "Was bedeutet das insgesamt?", items: [
          { tag: "einordnung", text: "Dass Reiche trotz eines historisch niedrigen Speicherstands auf zusätzliche Einspeicherung statt auf Alarmsignale setzt, während die Finanzierung der mittelfristig geplanten strategischen Reserve weiterhin ungeklärt bleibt, zeigt zwei unterschiedliche Zeithorizonte der Risikovorsorge, die von der kurzfristig schwankenden Lage am Golf (Meldung 9) unabhängig sind." }
        ]}
      ],
      reaction: "Die Gasspeicher-Lage hängt mit der uneinheitlichen, durch die Lage am Golf getriebenen Risikoprämie bei Energie zusammen (Meldung 9).",
      terms: ["opec-plus", "ttf", "lng", "umlage"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation", "e:hormuz"],
      sources: [
        { title: "freiewelt.net: Das Gas bleibt bei 59 Prozent", url: "https://www.freiewelt.net/blog/stephan-schreiber/das-gas-bleibt-bei-59-prozent/45524" },
        { title: "gasspeicherkarte.de: Gasspeicher-Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" },
        { title: "euronews: IEEFA warnt – EU könnte Gasverbrauch im Winter um sieben Prozent senken müssen", url: "https://de.euronews.com/2026/10/09/ieefa-warnt-eu-konnte-gasverbrauch-im-winter-um-sieben-prozent-senken-mussen" },
        { title: "wirtschaftsticker.com: Reiche sichert Gasversorgung ab – Anweisung an Staatsfirma", url: "https://wirtschaftsticker.com/2026/10/reiche-sichert-gasversorgung-ab-anweisung-an-staatsfirma/" },
        { title: "DGS: Demo am 9. Oktober 2026 in Berlin", url: "https://www.dgs.de/demo-am-9-oktober-2026-in-berlin-was-eeg-novelle-und-netzpaket-fuer-die-energiewende-vor-ort-bedeuten/" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Freitag legten Dow Jones (+0,83 %), S&P 500 (+0,59 %) und Nasdaq (+0,64 %) zu; der DAX stieg laut Berichten um 1,19 % auf 25.102,34 Punkte und damit zurück über die Marke von 25.000 Punkten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Ein neuer Bloomberg-Bericht, demzufolge OpenAI weiterhin an seinem Jahresendziel von 70 Mrd. Dollar Umsatz-Run-Rate festhält, beruhigte Chip- und KI-Werte; sinkende Ölpreise nach Trumps Nicht-Angriffs-Zusage gegenüber dem Iran stützten zusätzlich." },
    "yield-meaning": { tag: "unbestaetigt", story: 3, text: "Die US-10-Jahres-Rendite lag am Freitag weiterhin bei rund 5,23 bis 5,24 % – kaum verändert gegenüber Donnerstag und nahe dem 24-Jahres-Hoch vom Mittwoch." },
    "yield-stocks": { tag: "einordnung", story: 1, text: "Dass Technologiewerte besonders stark auf neue Umsatzsignale reagieren, während die US-Rendite gleichzeitig nahe einem Mehrjahreshoch verharrt, passt zum klassischen Muster empfindlicher Reaktionen zinssensibler Aktien." },
    "gold-why": { tag: "unbestaetigt", story: 5, text: "Gold legte am Freitag weiter zu, auf rund 4.169 bis 4.195 Dollar je Feinunze – ein Plus von rund 1,3 % gegenüber Donnerstag." },
    "bitcoin-what": { tag: "unbestaetigt", story: 5, text: "Bitcoin blieb am Freitagmorgen mit rund 82.413 Dollar im unteren Bereich der zuvor genannten Schwankungsbreite von 82.300 bis 85.800 Dollar." },
    "eurusd-meaning": { tag: "fakt", story: 5, text: "Der Euro stieg laut EZB-Referenzkurs von 1,1186 (Donnerstag) auf 1,1206 Dollar (Freitag)." },
    "inflation-expectations": { tag: "fakt", story: 2, text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein 5-Monats-Tief; die Inflationserwartungen für 1 Jahr stiegen auf 4,7 %." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Während Fed-Präsident Musalem eine weitere Zinserhöhung grundsätzlich für nötig hält, bindet die EZB ihre mögliche Unterstützung für Frankreich weiterhin an die Einhaltung der EU-Fiskalregeln." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Fed-Präsident Musalem hält eine weitere Zinserhöhung grundsätzlich für nötig, legte sich aber nicht auf die Oktober-Sitzung fest; die eingepreiste Wahrscheinlichkeit dafür liegt laut mehreren Quellen nur noch bei rund 16 bis 20 %." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die nächste EZB-Zinsentscheidung fällt am 29.10.2026; der Hauptrefinanzierungssatz liegt seit dem 10.09.2026 bei 2,65 %, der Einlagensatz bei 2,50 %." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Die Brent-Preisangaben für Freitag reichen je nach Quelle von rund 102,6 bis 104,7 Dollar; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "unbestaetigt", story: 3, text: "Der Risikoaufschlag französischer Staatsanleihen gegenüber Bundesanleihen erreichte Anfang Oktober laut Bloomberg zeitweise bis zu 154 Basispunkte – den höchsten Stand seit 2011." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Haushaltsausschuss des Bundestags berät weiter am Bundeshaushalt 2027; die Bereinigungssitzung ist für den 12.11.2026 terminiert." },
    "rente-basics": { tag: "unbestaetigt", story: 6, text: "Der Bundestag debattierte am 09.10. erneut über die Rentenreform; die Alterssicherungskommission empfiehlt die Abschaffung der abschlagsfreien Rente nach 45 Versicherungsjahren, eine abschließende Einigung liegt weiterhin nicht vor." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "Linke, Grüne und SPD sondierten am 09.10. erstmals konkret über den Berliner Landeshaushalt; eine Einigung wurde nicht erzielt, nur beim Thema Sauberkeit." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Die zuvor vereinbarte Linie zum Umgang mit Antisemitismus trifft laut der Jüdischen Gemeinde zu Berlin weiterhin auf erhebliches Misstrauen." },
    "hormuz": { tag: "fakt", story: 9, text: "Am 09.10. griffen die iranischen Revolutionsgarden zwei weitere Tanker im Golf an (MV Sun Shine, Gem No.2) und drohten, Angriffe nicht mehr auf die Straße von Hormus zu beschränken." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "Präsident Trump kündigte an, vor den US-Zwischenwahlen keine Angriffe auf den Iran zu starten; das Pentagon arbeitet laut Berichten dennoch weiter an Angriffsoptionen." },
    "defence-order": { tag: "unbestaetigt", story: 11, text: "Japan prüft weiterhin eine mögliche Weitergabe von Patriot-Abfangraketen an die Ukraine; eine Kabinettsentscheidung steht aus." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Rheinmetall gab am Freitag nach einer Berenberg-Abstufung leicht nach, Renk blieb nahe seinem Jahrestief, Hensoldt gewann deutlich hinzu." },
    "nato-target": { tag: "fakt", story: 11, text: "TKMS bleibt seit Juli ohne bindenden Hauptvertrag Vorzugsbieter für das kanadische U-Boot-Programm; ein Vertrag wird laut Berichten erst Ende 2027 erwartet." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Carlyles Plan zur Übernahme von Lukoils internationalen Vermögenswerten lief am 08.10. aus, nachdem keine OFAC-Genehmigung erteilt wurde; ein Konsortium um Todd Boehly bleibt im Rennen." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Für GFL Environmental, Palmer Square, Stack Infrastructure und Monzo liegen für den 09./10.10. keine neuen Entwicklungen vor; alle vier Prozesse laufen ohne Einigung weiter." },
    "deal-risks": { tag: "fakt", story: 13, text: "Ein ehemaliger JPMorgan-M&A-Chef verklagt FS KKR und Blue Owl wegen angeblich aufgeblasener Kreditbewertungen; SEC und Fed schauen laut Berichten genauer auf Private-Credit-Bewertungen." },
    "private-credit-what": { tag: "unbestaetigt", story: 12, text: "Goldman Sachs bleibt führender Bieter für den CLO-Manager Palmer Square (≈ 37 Mrd. $ verwaltetes Vermögen); eine endgültige Vereinbarung liegt weiterhin nicht vor." },
    "pc-rates": { tag: "unbestaetigt", story: 13, text: "Investoren nannten beim Milken Asia Summit aktuelle Ausfälle von rund 3 bis 4 % bei Deals aus 2021/2022 – bei einem Marktvolumen von rund 1,8 Billionen Dollar." },
    "nonaccrual-default": { tag: "position", story: 13, text: "Blue-Owl-Co-CEOs Lipschultz und Ostrover nennen einen 10-Jahres-Kreditverlust von nur 12 Basispunkten, deutlich unter dem Wert des Syndikatsmarkts (60 bis 100 Basispunkte)." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Die Insolvenz der australischen Bathla Group lässt weiterhin rund 40 Private-Credit-Fonds auf einem Engagement von rund 3,6 Mrd. Dollar sitzen; Metrics Credit Partners hat den Handel in drei Fonds ausgesetzt." },
    "ai-capex": { tag: "unbestaetigt", story: 14, text: "Panmure-Liberum-Stratege Joachim Klement warnte am 09.10., die KI-Blase werde 2027 oder 2028 platzen; Ray Dalio hatte bereits am 07.10. vor einer klassischen Blasensituation gewarnt." },
    "custom-chips": { tag: "fakt", story: 14, text: "Broadcom-CEO Hock Tan bekräftigte den Ausbaupfad des Anthropic-Chip-Deals: 1 Gigawatt 2026, weitere 5 Gigawatt 2027, Option auf zusätzliche 10 Gigawatt 2028." },
    "circular-financing": { tag: "fakt", story: 14, text: "SpaceX verhandelt über eine rund 40 Mrd. Dollar schwere Fremdfinanzierung zum Kauf von Nvidia-Chips; Broadcom und Oracle suchen laut Berichten parallel Fremdkapital für KI-Infrastruktur." },
    "energy-germany": { tag: "unbestaetigt", story: 15, text: "Die deutschen Gasspeicher lagen am 08.10. bei 59,4 % – dem niedrigsten Stand zu dieser Jahreszeit seit mindestens 15 Jahren; Reiche wies die bundeseigene Sefe an, verstärkt einzuspeichern." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ hält die Förderquote für November seit dem 04.10. unverändert bei rund 31,01 Mio. Barrel pro Tag." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Was nennt ein Bloomberg-Bericht vom 09.10.2026 als Grund, warum sich Chip- und KI-Werte am Freitag von den Vortagesverlusten erholten?",
      options: [
        "OpenAI habe einen neuen Großkunden gewonnen",
        "Die Fed habe überraschend eine Zinssenkung beschlossen",
        "OpenAI halte laut Investoren weiterhin an einem Jahresendziel von 70 Mrd. Dollar Umsatz-Run-Rate fest",
        "Nvidia habe seine Gewinnwarnung zurückgezogen"
      ],
      answer: 2,
      explain: "Laut dem Bloomberg-Bericht signalisierte OpenAI Investoren, weiterhin bis Jahresende eine annualisierte Umsatz-Run-Rate von 70 Mrd. Dollar erreichen oder übertreffen zu wollen – das beruhigte Chip- und KI-Werte nach dem Ausverkauf vom Donnerstag."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Was empfiehlt die Alterssicherungskommission zur abschlagsfreien Rente nach 45 Versicherungsjahren?",
      options: [
        "Eine Verdoppelung der abschlagsfreien Rente auf 90 Beitragsjahre",
        "Abschaffung der abschlagsfreien Rente nach 45 Jahren; vorzeitiger Rentenbeginn künftig nur noch mit Abschlägen (Ausnahme: gesundheitliche Gründe)",
        "Die Einführung einer Rente ab 50 Jahren für alle Versicherten",
        "Die Beibehaltung des bisherigen Systems ohne jede Änderung"
      ],
      answer: 1,
      explain: "Die Alterssicherungskommission empfiehlt, die abschlagsfreie Rente nach 45 Versicherungsjahren abzuschaffen; ein vorzeitiger Rentenbeginn soll künftig nur noch mit Abschlägen möglich sein, mit Ausnahme gesundheitlicher Gründe. Gewerkschaften und Arbeitgeberverbände lehnen den Vorschlag aus entgegengesetzten Gründen ab."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 9,
      q: "Angenommen, die iranischen Revolutionsgarden würden ihre Drohung wahr machen und Schiffe „überall in der Region” statt nur in der Straße von Hormus angreifen. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Die Risikoprämie und damit potenziell der Ölpreis würden eher steigen, ein fester Automatismus besteht aber nicht",
        "Der Dollar würde automatisch gegenüber dem Euro schwächer",
        "OPEC+ müsste die Förderquote gesetzlich erhöhen",
        "Die US-Zwischenwahlen würden automatisch verschoben"
      ],
      answer: 0,
      explain: "Eine Ausweitung der Angriffe auf die gesamte Golfregion würde nach Einschätzung von Marktbeobachtern tendenziell die Risikoprämie und damit potenziell den Ölpreis weiter erhöhen; ein fester Automatismus für andere Kennzahlen wie Wechselkurs, Förderquote oder Wahltermine besteht dadurch nicht."
    },
    {
      topic: "International", type: "Fakt", story: 8,
      q: "Was kündigte Präsident Trump nach einem Telefonat mit Putin beim sogenannten Diesel-Deal an?",
      options: [
        "Ein vollständiges Ölembargo gegen Russland",
        "Die Entsendung von US-Truppen zur Sicherung ukrainischer Energieinfrastruktur",
        "Ein Verbot russischer Dieselimporte in die EU",
        "Die sofortige Lieferung von 300.000 Tonnen russischem Diesel mit stufenweiser Ausweitung auf bis zu 3 Mio. Tonnen, bei vorübergehender Aussetzung der Diesel-Sanktionen"
      ],
      answer: 3,
      explain: "Trump kündigte an, zunächst 300.000 Tonnen russischen Diesel zu importieren, im November weitere 500.000 Tonnen, danach 1 Million und langfristig bis zu 3 Millionen Tonnen, bei vorübergehender Aussetzung der Diesel-Sanktionen. Präsident Selenskyj kritisierte dies scharf als „Investition in den Krieg”."
    },
    {
      topic: "Private Credit", type: "Fakt", story: 13,
      q: "Wie begründeten die Blue-Owl-Co-CEOs Lipschultz und Ostrover ihre öffentliche Zurückweisung der Bewertungssorgen?",
      options: [
        "Mit dem vollständigen Verzicht auf PIK-Zinsen",
        "Mit einem 10-Jahres-Kreditverlust von nur 12 Basispunkten und Direktkredit-Renditen über 9 %",
        "Mit einer Verdreifachung der Dividende",
        "Mit dem angekündigten Rückzug aus dem Private-Credit-Geschäft"
      ],
      answer: 1,
      explain: "Lipschultz und Ostrover verwiesen auf einen 10-Jahres-Kreditverlust von nur 12 Basispunkten (gegenüber 60 bis 100 Basispunkten im Syndikatsmarkt) und auf Direktkredit-Renditen über 9 % bei Gewinnmargen von 58 bis 58,5 %, um den Bewertungssorgen zu widersprechen."
    }
  ]
};
