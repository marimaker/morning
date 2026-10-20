// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-20",
  dateLabel: "Dienstag, 20. Oktober 2026",
  updatedLabel: "Recherchestand 20.10.2026",
  marketNote: "Diese Ausgabe entsteht am Dienstagmorgen, 20.10.2026, vor Eröffnung des europäischen Kassahandels. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq gilt deshalb weiterhin der Schlussstand von Montag, 19.10. Laut einer Vorbörse-Indikation von IG Markets wurde der DAX rund zwei Stunden vor Handelsbeginn etwa 0,5 % niedriger bei rund 25.199 Punkten erwartet; asiatische Märkte fielen am Dienstagmorgen erneut, vor allem bei Speicherchip- und Halbleiterwerten (Meldung 1). Devisen-, Gold-, Öl- und Bitcoin-Kurse handeln dagegen durchgehend: Brent-Rohöl notierte Dienstag früh mit rund 109,06 Dollar leicht schwächer als am Montag, nachdem Präsident Trump am Wochenende zuvor neue Russland-Sanktionen ausgesetzt hatte (Meldung 15).",

  top: [
    { text: "DAX (−1,18 % auf 25.319,77 Pkt.) und Euro Stoxx 50 (−0,96 % auf 6.144,81 Pkt.) fielen am Montag, 19.10., unter anderem wegen geopolitischer Unsicherheit im Nahen Osten und einer steigenden Bund-Rendite, während sich S&P 500 (+0,41 %) und vor allem der Nasdaq Composite (+1,11 %) von der KI-Ausverkaufswoche erholten; der Halbleiterindex SOX beendete mit +1,61 % eine achttägige Verlustserie. Am Dienstagmorgen fielen asiatische Märkte erneut, und der DAX wurde laut einer Vorbörse-Indikation rund 0,5 % niedriger erwartet.", ref: "s:1" },
    { text: "Der SPD-Landesvorstand stimmte am Montagabend mit 26:3 Stimmen, der Grüne-Landesausschuss mit 43:2 Stimmen dafür, in Berlin in Koalitionsverhandlungen mit der Linken einzutreten; Rot-Grün-Rot käme auf 91 von 153 Sitzen. Die Linke selbst entscheidet erst am 31.10. auf einem Parteitag. Bundeskanzler Merz hatte zuvor erklärt: „Das ist nicht zulässig zum Schutze unserer Demokratie.”", ref: "s:6" },
    { text: "Die Ukraine setzte in der Nacht zum 19.10. mehr als 1.000 Drohnen gegen Russland ein, ein russischer Luftangriff traf in der Nacht zum 20.10. erneut Kiew. Die EU-Kommission bezifferte die ukrainische Finanzierungslücke für 2027 auf 70 Mrd. Euro; Präsident Trump zeigte sich offen für ein mögliches Dreiertreffen mit Putin und Xi, das der ukrainische Außenminister Sybiha scharf kritisierte.", ref: "s:8" },
    { text: "Iran meldete am 19.10. einen weiteren Tankerbrand in der Straße von Hormus – laut eigenen Angaben den dritten Fall binnen zwei Tagen; CENTCOM hat das nicht bestätigt. CENTCOM und Iran nennen zudem stark unterschiedliche Zahlen zum verbliebenen Ölfluss durch die Straße. Im Jemen hält die von Saudi-Arabien unterstützte Offensive „Operation Dawn of Yemen” gegen die Houthi an.", ref: "s:9" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.319,77", change: "−1,18 % (−303 Pkt., Mo-Schluss)", dir: "down", asof: "Schluss Mo 19.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Dienstag-Indikation", text: "Laut einer Vorbörse-Indikation von IG Markets wurde der DAX rund zwei Stunden vor Handelsbeginn etwa 0,5 % niedriger bei rund 25.199 Punkten erwartet; der europäische Kassahandel hatte zum Redaktionsschluss noch nicht begonnen." }
      ],
      moved: {
        intro: "Als Hintergrund für Montag nennen Berichte:",
        items: [
          "Geopolitische Unsicherheit im Nahen Osten sowie Zurückhaltung vor der anlaufenden Quartalsberichtssaison.",
          "Eine steigende Bund-Rendite (rund 3,43 %) sowie Gewinnmitnahmen bei Rheinmetall nach dessen starker Vorwochen-Rally; mehr dazu in Meldung 10."
        ]
      },
      important: [
        { area: "Rüstung", text: "Mehr zum Rheinmetall-Kursrückgang und zum Arminius-Programm in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "ad-hoc-news.de: DAX schließt wegen Nahost-Risiken 1,2 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-wegen-nahost-risiken-1-2-prozent-tiefer/70364715" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.144,81", change: "−0,96 % (Mo-Schluss)", dir: "down", asof: "Schluss Mo 19.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Vorwoche", text: "Am Freitag, 16.10., hatte der Euro Stoxx 50 noch bei 6.204,23 Punkten geschlossen (+0,58 %); am Montag fiel der Index damit wieder unter sein Freitagsniveau." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Politische Unruhen und Fiskalsorgen in Frankreich, wo die 10-Jahres-Rendite auf rund 4,857 % stieg; mehr dazu in Meldung 4.",
          "Anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen belasteten zusätzlich Bankwerte."
        ]
      },
      important: [
        { area: "Frankreich", text: "Mehr zur Ausgangssperre in Paris und zur Haushaltsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 schließt wegen KI-Sorgen 1,0 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-wegen-ki-sorgen-1-0-prozent-tiefer/70365127" }
    },
    "sp500": {
      label: "S&P 500", value: "7.690,73", change: "+0,41 % (Mo-Schluss)", dir: "up", asof: "Schluss Mo 19.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Montagsschluss: 51.966,03 Punkte (−0,07 %, −36,38 Pkt.) – nahezu unverändert, da im Dow weniger Technologiewerte stecken." },
        { label: "Nasdaq Composite", text: "Montagsschluss: 26.430,89 Punkte (+1,11 %); der Nasdaq 100 stieg auf 29.617,14 Punkte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Montag:",
        items: [
          "Eine technische Erholung bei KI- und Chipwerten nach dem starken Ausverkauf der Vorwoche, ohne dass die zugrunde liegenden Finanzierungssorgen bereits ausgeräumt wären.",
          "Der Halbleiterindex SOX stieg um 1,61 % auf 11.316,3 Punkte und beendete damit eine Verlustserie von acht Handelstagen – die längste seit Mai 2026; mehr dazu in Meldung 14."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur Erholung bei CoreWeave, Nvidia und AMD in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Yahoo Finance: How major US stock indexes fared Monday", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-202016557.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "26.430,89", change: "+1,11 % (Mo-Schluss)", dir: "up", asof: "Schluss Mo 19.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie ist nicht identisch mit dem enger gefassten Nasdaq 100.",
      compare: [
        { label: "Nasdaq 100", text: "Der stärker technologielastige Nasdaq 100 stieg am Montag auf 29.617,14 Punkte, nachdem er in der Vorwoche deutlich gefallen war." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Eine Erholung bei AMD (+rund 3–4 % am Montag) nach Kursziel-Anhebungen mehrerer Banken und Berichten über Kapazitätszusagen von Meta und Anthropic.",
          "Asiatische Speicherchip-Werte fielen dagegen am Dienstagmorgen erneut, was die Erholung an der Nasdaq noch nicht bestätigt; mehr dazu in Meldung 14."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/10/18/stock-market-today-live-updates.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1225 (EZB-Referenzkurs Di)", change: "unverändert ggü. Montag; schwächer als vor einer Woche (1,1253 am Fr 16.10.)", dir: "flat", asof: "EZB-Referenzkurs Di 20.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Marktkurs", text: "Eine Quelle nennt für Montag einen leicht abweichenden Marktkurs von rund 1,1213 Dollar; der Unterschied zum EZB-Referenzkurs (1,1225) erklärt sich vermutlich durch unterschiedliche Erfassungszeitpunkte (EZB-Fixing 14:15 MEZ gegenüber laufendem Marktkurs)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der EZB-Referenzkurs war von 1,1253 Dollar am Freitag, 16.10., auf 1,1225 Dollar gefallen und blieb am Montag und Dienstag auf diesem Niveau."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Sitzung am 29.10. und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Grafik USD)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,07–5,08 %", change: "nahezu unverändert ggü. Vorwoche", dir: "flat", asof: "Stand Mo 19.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr.",
      compare: [
        { label: "Hintergrund", text: "Das Niveau gilt laut Berichten weiterhin als strukturell erhöht, unter anderem wegen der heißen September-Inflationszahl (CPI 3,7 %, Kern 2,6 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die FOMC-Blackout-Periode läuft seit 17.10. bis 29.10.; seither gibt es keine öffentlichen Fed-Kommentare zur Zinspolitik mehr.",
          "Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen für die Sitzung am 27./28.10. überwiegend eine Zinspause ein, mit Werten für die Haltewahrscheinlichkeit zwischen rund 65 und 87 % je Plattform und Zeitpunkt."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Blackout-Periode und zu den Marktwetten in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Atlanta Fed: FOMC blackout periods", url: "https://www.atlantafed.org/news-and-events/press-room/blackout-periods" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,43 %", change: "gefallen von 3,55 % (7.10.) bzw. 3,69 % (28.9., höchster Stand seit April 2011)", dir: "flat", asof: "Stand Mo 19.10.26 (nur eine Quelle verfügbar)", story: 1, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,07 bis 5,08 % weiterhin deutlich über der Bund-Rendite von rund 3,43 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Bund-Rendite war Ende September auf 3,69 % gestiegen – den höchsten Stand seit April 2011 – und ist seither wieder etwas gefallen.",
          "Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Mehr zur EZB-Sitzung und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "cbonds.de: 10-jährige Bundesanleihe – Rendite, Kurs und Zinsentwicklung", url: "https://cbonds.de/10-year-german-government-bond-yield/" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.150 $ (Spanne 4.132–4.167 $)", change: "innerhalb der üblichen Tagesspanne, kein klarer Trend erkennbar", dir: "flat", asof: "Stand Mo 19.10.26 (kein eindeutiger Di-Wert verfügbar)", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.150 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenspanne", text: "Verschiedene Datenanbieter nannten für Montag Werte zwischen 4.132,40 Dollar (Kitco) und 4.166,76 Dollar (MetalCharts) – übliche Abweichungen durch unterschiedliche Erfassungszeitpunkte im 24-Stunden-Handel, kein eindeutiger offizieller Schlusswert auffindbar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die weitgehend unveränderte US-Rendite hielt die Opportunitätskosten des zinslosen Goldes niedrig.",
          "Die anhaltende Erwartung einer Fed-Zinspause im Oktober stützte den Goldpreis zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Blackout-Periode und zur Zinserwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Kitco: Goldpreis-Chart", url: "http://www.kitco.com/charts/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 109,06 $ (Di-früh)", change: "−0,45 % ggü. Vortag", dir: "down", asof: "Stand Di 20.10.26, 00:10 GMT", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 109 Dollar je Fass (159 Liter) sind etwa 69 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI wird je Liefertermin unterschiedlich notiert: der auslaufende November-Kontrakt bei rund 103,32 Dollar, der aktivere Dezember-Kontrakt bei rund 98,08 Dollar – ein Rollover-Effekt zwischen zwei Kontrakten, kein echter Widerspruch." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Präsident Trump erließ am 16./17.10. eine Anordnung, die neue Russland-Sanktionen auf Energieexporte vorerst aussetzt, was mehr Angebot erwarten lässt und die Preise drückte.",
          "Gegenläufig halten die Spannungen in der Straße von Hormus und um saudische Energieinfrastruktur an; eine einzelne Tracking-Quelle nennt für Dienstag abweichend einen steigenden Brent-Preis von rund 110 Dollar – als unsicher gekennzeichnet, da zwei unabhängige Quellen den Rückgang auf 109,06 Dollar bestätigen."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage in der Straße von Hormus in Meldung 9.", ref: "s:9" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "Business Standard: Oil prices ease as Russia sanctions relief offsets Gulf supply risks", url: "https://www.business-standard.com/markets/commodities/oil-prices-ease-as-russia-sanctions-relief-offsets-gulf-supply-risks-126102000063_1.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 82.400–82.900 $", change: "weitgehend seitwärts ggü. Vortag", dir: "flat", asof: "Stand Mo/Di 19./20.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 bis 83.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin rund 34,5 bis 35 % unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025 – und rund 24 % unter seinem Stand vor einem Jahr (108.687 Dollar am 19.10.2025)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die anhaltenden Finanzierungssorgen um KI-nahe Werte wie CoreWeave belasteten zwischenzeitlich auch Kryptowährungen (Meldung 14).",
          "Quellen nennen für denselben Zeitpunkt leicht unterschiedliche Werte zwischen rund 82.440 und 82.900 Dollar – im Rahmen normaler Abweichungen zwischen Datenanbietern."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Price of Bitcoin, 19.10.2026", url: "https://fortune.com/article/price-of-bitcoin-10-19-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-montag-schluss-asien-dienstag-10-20", cats: ["markets"], when: "Schluss Mo 19.10.2026 (Europa/USA) · Asien-Handel Di 20.10.2026",
      headline: "DAX und Euro Stoxx 50 fallen am Montag, S&P 500 und Nasdaq erholen sich leicht – asiatische Märkte eröffnen am Dienstag erneut schwächer",
      sec30: "Am Montag, 19.10., fielen DAX (−1,18 % auf 25.319,77 Pkt.) und Euro Stoxx 50 (−0,96 % auf 6.144,81 Pkt.), belastet von geopolitischer Unsicherheit im Nahen Osten, einer steigenden Bund-Rendite und Gewinnmitnahmen bei Rheinmetall. Die US-Indizes erholten sich dagegen leicht: Dow Jones nahezu unverändert (−0,07 % auf 51.966,03 Pkt.), S&P 500 +0,41 % auf 7.690,73 Pkt., Nasdaq Composite +1,11 % auf 26.430,89 Pkt. Der Halbleiterindex SOX stieg um 1,61 % auf 11.316,3 Punkte und beendete damit eine Verlustserie von acht Handelstagen. Am Dienstagmorgen fielen asiatische Märkte erneut (Nikkei −0,6 %, Kospi rund −2,8 %, Hang Seng −1,0 %), vor allem bei Speicherchip-Werten; der DAX wurde laut einer Vorbörse-Indikation rund 0,5 % niedriger erwartet.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Montag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX fiel um 1,18 % (−303 Punkte) auf 25.319,77 Punkte, der Euro Stoxx 50 um 0,96 % auf 6.144,81 Punkte.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte geopolitische Unsicherheit im Nahen Osten, Zurückhaltung vor der anlaufenden Quartalsberichtssaison, eine steigende Bund-Rendite (rund 3,43 %) sowie Gewinnmitnahmen bei Rheinmetall nach dessen starker Vorwochen-Rally.",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:10" }] }
        ]},
        { h: "Warum erholten sich die US-Indizes?", items: [
          { tag: "fakt", text: "Der Dow Jones schloss nahezu unverändert (−0,07 %) bei 51.966,03 Punkten, der S&P 500 stieg um 0,41 % auf 7.690,73 Punkte, der Nasdaq Composite legte um 1,11 % auf 26.430,89 Punkte zu." },
          { tag: "fakt", text: "Der Philadelphia-Halbleiterindex SOX stieg um 1,61 % auf 11.316,3 Punkte und beendete damit eine Verlustserie von acht Handelstagen – die längste seit Mai 2026.",
            ask: [{ label: "Mehr zum Chip-Ausverkauf und CoreWeave", ref: "s:14" }] },
          { tag: "einordnung", text: "Berichte sprechen von einer technischen Erholung („relief bounce”) bei KI- und Chipwerten nach dem starken Ausverkauf der Vorwoche, ohne dass die zugrunde liegenden Sorgen um KI-Finanzierung und CoreWeave bereits ausgeräumt wären." }
        ]},
        { h: "Wie haben sich asiatische Märkte am Dienstag entwickelt, und was deutet das für Europa an?", items: [
          { tag: "unbestaetigt", text: "Der Nikkei fiel am Dienstagmorgen um rund 0,6 % auf 64.512,35 Punkte, der Hang Seng um rund 1,0 % auf 23.947,37 Punkte, der Shanghai Composite blieb mit 3.732,29 Punkten nahezu unverändert. Für den Kospi nennen Quellen unterschiedliche Rückgänge zwischen rund 2,8 und über 3 % auf etwa 5.605 Punkte, getrieben von Fremdverkäufen bei Speicherchip-Werten." },
          { tag: "fakt", text: "Laut einer Vorbörse-Indikation des Brokers IG Markets wurde der DAX rund zwei Stunden vor Handelsbeginn etwa 0,5 % niedriger bei rund 25.199 Punkten erwartet; der Nasdaq 100 hatte sich am Montagabend etwas stabilisiert, bevor die asiatischen Chip- und Halbleiterwerte am Dienstagmorgen erneut unter Druck gerieten." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass US-Indizes und europäische Indizes am Montag in entgegengesetzte Richtungen liefen und sich der Druck auf asiatische Chipwerte am Dienstag fortsetzte, zeigt, wie unterschiedlich geopolitische Risiken und die KI-Finanzierungssorgen die einzelnen Marktsegmente derzeit treffen. Da der europäische Kassahandel am Dienstagmorgen noch nicht begonnen hat, bleibt der Montagsschluss bis zur Eröffnung gültig. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Hintergründe des Chip-Ausverkaufs werden in Meldung 14 vertieft, die Fed-Seite in Meldung 2, Rheinmetall in Meldung 10, der Ölpreis in Meldung 15.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ad-hoc-news.de: DAX schließt wegen Nahost-Risiken 1,2 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-wegen-nahost-risiken-1-2-prozent-tiefer/70364715" },
        { title: "ARIVA.DE: Roundup – Aktien Frankfurt Schluss", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-juengste-erholung-nicht-12173652" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 schließt wegen KI-Sorgen 1,0 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-wegen-ki-sorgen-1-0-prozent-tiefer/70365127" },
        { title: "Yahoo Finance: How major US stock indexes fared Monday", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-202016557.html" },
        { title: "finanzen.at: DAX-Flash – Verluste erwartet, Vortagestief dürfte getestet werden", url: "https://www.finanzen.at/nachrichten/aktien/dax-flash-verluste-erwartet-vortagestief-duerfte-getestet-werden-1036642071" },
        { title: "CappNotes: Closing Look – Monday, October 19, 2026", url: "https://cappnotes.substack.com/p/closing-look-monday-october-19-2026" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED BLACKOUT */
    {
      id: "fed-blackout-zinswetten-fomc-10-20", cats: ["markets", "economy"], when: "FOMC-Blackout 17.–29.10. · FOMC-Sitzung 27./28.10.2026 · Marktwetten Stand 19./20.10.2026",
      headline: "Fed bleibt in der Blackout-Periode vor der Oktober-Sitzung, Marktplattformen preisen weiterhin überwiegend eine Zinspause ein",
      sec30: "Die FOMC-Blackout-Periode läuft seit Samstag, 17.10., bis Donnerstag, 29.10. – einen Tag nach der Zinsentscheidung am 27./28.10. (Bekanntgabe Mittwoch, 28.10., 14 Uhr Eastern Time). Seither äußern sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik. Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen überwiegend eine Zinspause im Oktober ein, mit Werten für die Haltewahrscheinlichkeit zwischen rund 65 und 87 % je Plattform und Zeitpunkt. Die September-Inflationsdaten fielen mit 3,7 % (Kern 2,6 %) weiterhin erhöht aus.",
      blocks: [
        { h: "Was galt vor Beginn der Blackout-Periode?", items: [
          { tag: "position", text: "Fed-Chef Kevin Warsh sagte am 16.10. bei der IWF-Jahrestagung in Bangkok sinngemäß, er wolle Sitzungen nicht vorab festlegen: „I don't prejudge meetings. I don't believe in saying now what I might do.” Zur Geldpolitik allgemein sagte er: „At the Federal Reserve, we made very clear that we would deliver price stability.”",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet die FOMC-Blackout-Periode?", items: [
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, begann am 17.10. und dauert bis zum 29.10. – einen Tag nach der Sitzung am 27./28.10. Die Zinsentscheidung wird am Mittwoch, 28.10., um 14 Uhr Eastern Time bekanntgegeben, die Pressekonferenz folgt um 14:30 Uhr." }
        ]},
        { h: "Wie schätzen Marktplattformen die Oktober-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Nach Angaben von CME FedWatch, Kalshi und Polymarket wird für Oktober überwiegend eine Zinspause erwartet; die genannten Haltewahrscheinlichkeiten schwanken aber deutlich zwischen den Quellen – von rund 65 % (Kalshi, nach der PCE-Inflationszahl) bis rund 87 % (Polymarket). Eine Zinssenkung wird praktisch mit 0 % bewertet; für die Dezember-Sitzung nennt eine Quelle rund 75 % Wahrscheinlichkeit für eine Erhöhung, was angesichts der sonst eher auf eine Pause deutenden Markterwartung ungewöhnlich hoch erscheint und hier als unsicher markiert wird.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Welche aktuellen US-Konjunkturdaten spielen eine Rolle?", items: [
          { tag: "fakt", text: "Die US-Verbraucherpreise stiegen im September um 3,7 % gegenüber dem Vorjahr (Kerninflation 2,6 %); die Kern-PCE-Rate lag im August bei 3,0 %. Beide Werte liegen weiterhin über dem Fed-Ziel von 2 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung für die Oktober-Sitzung je nach Plattform und Zeitpunkt zwischen rund 65 und 87 % für eine Zinspause schwankt, während die September-Inflation weiterhin über dem Fed-Ziel liegt, zeigt, wie unsicher Anleger die weitere Zinsentwicklung trotz der laufenden Blackout-Periode einschätzen." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1 und den Zahlen oben, die EZB-Seite und Frankreich werden in Meldung 4 behandelt.",
      terms: ["leitzins", "basispunkt", "rendite", "inflation"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Atlanta Fed: FOMC blackout periods", url: "https://www.atlantafed.org/news-and-events/press-room/blackout-periods" },
        { title: "WSLS/AP: Fed chair Warsh says price stability is key but shies away from signals about rates", url: "https://www.wsls.com/business/2026/10/16/fed-chair-warsh-says-price-stability-is-key-but-shies-away-from-signals-about-rates/" },
        { title: "US Inflation Calculator: Current inflation rates", url: "https://www.usinflationcalculator.com/inflation/current-inflation-rates/" },
        { title: "Kalshi News: Fed rate odds – traders flip to October hold at 65% after PCE report", url: "https://news.kalshi.com/p/fed-rate-odds-traders-flip-to-october-hold-at-65-after-pce-report" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-20", cats: ["markets"], when: "Stand Mo 19./Di 20.10.2026",
      headline: "Euro bleibt gegenüber dem Dollar schwächer als vor einer Woche, Gold pendelt um 4.150 Dollar, Bitcoin bewegt sich seitwärts",
      sec30: "Der EZB-Referenzkurs lag am Montag und Dienstag unverändert bei 1,1225 Dollar – schwächer als die 1,1253 Dollar vom Freitag der Vorwoche. Gold bewegte sich am Montag in einer Spanne von rund 4.132 bis 4.167 Dollar je Feinunze, ohne klaren Trend. Bitcoin, das auch am Wochenende weiterhandelt, lag je nach Quelle zwischen rund 82.440 und 82.900 Dollar – weiterhin rund 34,5 bis 35 % unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025.",
      blocks: [
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Montag und Dienstag unverändert bei 1,1225 Dollar, nachdem er von 1,1253 Dollar am Freitag, 16.10., gefallen war.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "unbestaetigt", text: "Für Montag nennen verschiedene Datenanbieter Werte zwischen 4.132,40 Dollar (Kitco) und 4.166,76 Dollar (MetalCharts) je Feinunze; ein eindeutiger, über mehrere Quellen übereinstimmender Tagesschluss ließ sich nicht ermitteln, ein spezifischer Dienstagswert liegt noch nicht vor.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund für das Pendeln um dieses Niveau nennen Berichte die weitgehend unveränderte US-Rendite und die anhaltende Erwartung einer Fed-Zinspause im Oktober." }
        ]},
        { h: "Wie entwickelt sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Quellen nennen für Montag/Dienstag leicht unterschiedliche Werte zwischen rund 82.440 Dollar (Fortune) und rund 82.900 Dollar; Bitcoin liegt damit weiterhin rund 34,5 bis 35 % unter seinem Allzeithoch von 126.198,07 Dollar und rund 24 % unter seinem Stand vor einem Jahr.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold ohne klaren Trend um sein aktuelles Niveau pendelt und Bitcoin sich seitwärts bewegt, während der Euro gegenüber der Vorwoche leicht schwächer bleibt, passt zu einer Phase, in der sich die Markterwartung für die Fed-Politik seit Tagen kaum verändert hat. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Zinsentwicklung wird in Meldung 2 behandelt, der KI-Ausverkauf in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "EZB: Euro-Referenzkurs (Grafik USD)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html" },
        { title: "Fortune: Price of Bitcoin, 19.10.2026", url: "https://fortune.com/article/price-of-bitcoin-10-19-2026/" },
        { title: "cryptoclassic.org: Bitcoin all-time high", url: "https://www.cryptoclassic.org/bitcoin/all-time-high/" },
        { title: "Kitco: Goldpreis-Chart", url: "http://www.kitco.com/charts/gold" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/SCHNABEL-NACHFOLGE/FRANKREICH */
    {
      id: "ezb-schnabel-frankreich-unruhen-10-20", cats: ["economy"], when: "EZB-Sitzung 29.10. · Schnabel-Nachfolgefrist 28.10. · Ausgangssperre Paris Nacht 19./20.10.2026",
      headline: "EZB-Zinsentscheidung am 29.10. rückt näher, Bewerbungsfrist für Schnabel-Nachfolge läuft, Frankreich verhängt nach Unruhen eine Ausgangssperre in Paris",
      sec30: "Die EZB hält ihren Einlagensatz seit der September-Erhöhung bei 2,50 %; die Zinsentscheidung am 29.10. wird um 14:15 MEZ bekanntgegeben, der Marktkonsens erwartet laut LBBW zu rund 88 % keine Änderung. Die Nominierungsfrist für die Nachfolge von Isabel Schnabel im EZB-Direktorium läuft am 28.10. ab; ein Kandidatenname ist noch nicht bekannt. Die finale Eurozonen-Inflation für September lag laut Eurostat bei 3,8 % (Energie +18,9 %). In Frankreich verhängte Premierminister Lecornu nach landesweiten Protesten gegen hohe Lebenshaltungskosten mit Plünderungen (17./18.10., bis Montagabend 2.513 Festnahmen) eine nächtliche Ausgangssperre in Teilen von Paris; die Haushaltsdebatte 2027 bleibt unterdessen ungelöst.",
      blocks: [
        { h: "Wie ist der Stand bei der EZB-Zinsentscheidung am 29.10.?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Die Zinsentscheidung wird am 29.10. um 14:15 MEZ bekanntgegeben, die Pressekonferenz folgt um 14:45 MEZ.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Laut LBBW erwartet der Marktkonsens zu rund 88 % keine Zinsänderung am 29.10.; genaue Einschätzungen können sich bis zur Sitzung noch verändern." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die Nominierungsfrist für die 21 Eurostaaten läuft am 28.10. ab; Isabel Schnabel wechselt Anfang 2027 vorzeitig zum IWF. Ein konkreter Kandidatenname für ihre Nachfolge im EZB-Direktorium ist bislang nicht bekannt." }
        ]},
        { h: "Wie hat sich die Inflation in der Eurozone entwickelt?", items: [
          { tag: "fakt", text: "Die finale September-Inflation (HVPI) lag laut Eurostat bei 3,8 % – nach 3,2 % im August; die Kernrate lag bei 2,3 %, Haupttreiber war Energie mit +18,9 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was geschah in Frankreich am Wochenende, und wie ist der Stand beim Haushalt 2027?", items: [
          { tag: "fakt", text: "Nach landesweiten Protesten gegen hohe Lebenshaltungskosten am 17./18.10. mit Plünderungen wurden bis Montagabend 2.513 Personen festgenommen, 67 davon in Untersuchungshaft. Premierminister Lecornu verhängte in Paris für die Nacht von Montag auf Dienstag (23 bis 6 Uhr) eine Ausgangssperre rund um Place de la République und Les Halles." },
          { tag: "position", text: "Lecornu begründete die Maßnahme so: „Eines der Ziele dieser Ausgangssperre ist der Schutz von Personen, aber auch von Eigentum, insbesondere von Geschäften.” Innenminister Laurent Nuñez sprach von „einem Kontrollverlust”. Gelbwesten-Proteste wurden für den 24.10. angekündigt." },
          { tag: "fakt", text: "Der Finanzausschuss der Nationalversammlung hatte den Einnahmenteil des rund 54 Mrd. Euro schweren Konsolidierungspakets bereits am 9.10. mit 31:3 Stimmen abgelehnt; die Plenardebatte ist weiterhin nicht abgeschlossen.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die EZB-Personalfrage als auch die französische Haushaltsdebatte und nun auch die Unruhen in Paris ungelöst bleiben, während die EZB-Zinsentscheidung am 29.10. kurz nach der Fed-Sitzung folgt, zeigt, wie viele europäische Wirtschafts- und Innenpolitik-Fragen Ende Oktober zusammenlaufen." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 7.",
      terms: ["leitzins", "inflation", "schuldenbremse"],
      followups: ["e:ecb-hike", "e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "LBBW: EZB-Zinsentscheid – Leitzins-Prognosen", url: "https://www.lbbw.de/artikel/maerkte-verstehen/ezb-zinsentscheid-leitzins-prognosen_ait4bfmrfe_d.html" },
        { title: "Handelsblatt: EZB – Euro-Staaten müssen bis Monatsende Schnabel-Nachfolge nominieren", url: "https://www.handelsblatt.com/finanzen/ezb-euro-staaten-muessen-bis-monatsende-schnabel-nachfolge-nominieren/100260974.html" },
        { title: "Eurostat: HVPI September 2026 (final)", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-16102026-ap" },
        { title: "Handelsblatt: Nach Ausschreitungen – Ausgangssperren vor neuen Protesten in Frankreich verhängt", url: "https://www.handelsblatt.com/politik/international/nach-ausschreitungen-ausgangssperren-vor-neuen-protesten-in-frankreich-verhaengt/100263174.html" },
        { title: "nd-aktuell: Frankreich – Verschuldung überlagert Haushaltsdebatte", url: "https://nd-aktuell.de/artikel/1203151.frankreich-frankreich-verschuldung-ueberlagert-haushaltsdebatte.html" }
      ]
    },

    /* 5 WIRTSCHAFT: DEUTSCHE KONJUNKTUR */
    {
      id: "deutschland-konjunktur-inflation-ifo-zew-arbeitsmarkt-10-20", cats: ["economy", "germany"], when: "ifo-Geschäftsklima 24.9. · Destatis-Inflation 13.10. · Arbeitsmarkt 30.9. · ZEW-Veröffentlichung 20.10.2026",
      headline: "Deutsche Inflation steigt im September auf Jahreshoch, ifo-Index auf höchstem Stand seit über drei Jahren, Arbeitsmarkt startet verhalten in den Herbst",
      sec30: "Die deutsche Inflation lag im September laut Destatis bei 3,3 % – dem bisherigen Jahreshöchststand 2026 –, die Kernrate bei 2,4 %, Energie verteuerte sich um 14,9 %. Das ifo-Geschäftsklima stieg im September auf 89,9 Punkte, den höchsten Stand seit über drei Jahren; ifo-Präsident Fuest sprach von einem fortgesetzten „Erholungskurs”. Die Arbeitslosigkeit lag im September bei 2.994.000 Personen (Quote 6,4 %); BA-Vorstandsvorsitzende Nahles sprach von einer „schwunglos” ausfallenden Herbstbelebung. Der ZEW-Index für Oktober wird turnusgemäß heute, 20.10., um 11 Uhr veröffentlicht und lag zum Redaktionsschluss noch nicht vor.",
      blocks: [
        { h: "Wie hat sich die deutsche Inflation entwickelt?", items: [
          { tag: "fakt", text: "Die deutsche Inflation lag im September 2026 laut Destatis bei 3,3 % gegenüber dem Vorjahr – dem bisherigen Jahreshöchststand 2026 –, die Kernrate (ohne Energie und Lebensmittel) bei 2,4 %; Energie verteuerte sich um 14,9 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Wie schätzt das ifo-Institut die Konjunktur ein?", items: [
          { tag: "fakt", text: "Das ifo-Geschäftsklima stieg im September auf 89,9 Punkte – den höchsten Stand seit über drei Jahren." },
          { tag: "position", text: "ifo-Präsident Clemens Fuest sagte dazu: „Die deutsche Wirtschaft setzt ihren Erholungskurs fort.”" }
        ]},
        { h: "Wie stellt sich der Arbeitsmarkt dar?", items: [
          { tag: "fakt", text: "Die Zahl der Arbeitslosen lag im September bei 2.994.000, die Arbeitslosenquote bei 6,4 %." },
          { tag: "position", text: "BA-Vorstandsvorsitzende Andrea Nahles sagte: „Im September beginnt am Arbeitsmarkt die Herbstbelebung. Der Auftakt fällt allerdings schwunglos aus.”" }
        ]},
        { h: "Was steht heute mit dem ZEW-Index noch an?", items: [
          { tag: "unbestaetigt", text: "Der ZEW-Index der Konjunkturerwartungen für Oktober wird turnusgemäß heute, 20.10., um 11 Uhr veröffentlicht; Marktschätzungen gehen von einem Rückgang auf rund 30 Punkte aus (von 34,7 im September), lagen zum Redaktionsschluss dieser Ausgabe aber noch nicht als bestätigter Wert vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Inflation im September auf ihren Jahreshöchststand stieg, während sich die ifo-Stimmung gleichzeitig deutlich verbesserte und der Arbeitsmarkt nur verhalten in den Herbst startet, zeigt ein uneinheitliches Konjunkturbild in Deutschland." }
        ]}
      ],
      reaction: "Die EZB-Zinsentscheidung wird in Meldung 4 behandelt, der Bundeshaushalt in Meldung 7.",
      terms: ["inflation", "kerninflation"],
      followups: ["e:inflation-what", "e:inflation-expectations"],
      sources: [
        { title: "ifo Institut: ifo business climate rises, September 2026", url: "https://www.ifo.de/en/press-release/2026-09-24/ifo-business-climate-rises-september-2026" },
        { title: "Destatis: Pressemitteilung PD26_364_611", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_364_611.html" },
        { title: "Bundesagentur für Arbeit / presseportal.de: Arbeitsmarktbericht September 2026", url: "https://www.presseportal.de/pm/6776/6361915" },
        { title: "ZEW: ZEW-Konjunkturerwartungen", url: "https://www.zew.de/de/presse/zew-konjunkturerwartungen" }
      ]
    },

    /* 6 DEUTSCHLAND: BERLIN-KOALITION ERGEBNIS */
    {
      id: "berlin-koalition-ergebnis-spd-gruene-linke-10-20", cats: ["germany"], when: "SPD-Landesvorstand & Grünen-Landesausschuss stimmen Montagabend, 19.10. · Linke-Parteitag 31.10.2026",
      headline: "SPD-Landesvorstand und Grüne stimmen für Koalitionsverhandlungen mit der Linken in Berlin",
      sec30: "Der SPD-Landesvorstand stimmte am Montagabend mit 26:3 Stimmen, der Grüne-Landesausschuss mit 43:2 Stimmen dafür, in Berlin in Koalitionsverhandlungen mit der Linken einzutreten; Rot-Grün-Rot käme auf 91 von 153 Sitzen. Die Linke selbst entscheidet erst am 31.10. auf einem Parteitag, bei dem auch über eine Antisemitismus-Erklärung abgestimmt werden soll. Bei Zustimmung könnten die eigentlichen Koalitionsverhandlungen Anfang November beginnen. Bundeskanzler Merz hatte die Pläne zuvor kritisiert, Linke-Vorsitzende Schwerdtner reagierte darauf.",
      blocks: [
        { h: "Was wurde beschlossen?", items: [
          { tag: "fakt", text: "Der SPD-Landesvorstand stimmte am Montagabend mit 26:3 Stimmen, der Grüne-Landesausschuss mit 43:2 Stimmen dafür, in Koalitionsverhandlungen mit der Linken einzutreten.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was würde sich konkret ändern?", items: [
          { tag: "fakt", text: "Grundlage ist das am 17.10. verständigte Sondierungspapier der drei Parteien; stimmt auch die Linke am 31.10. zu, käme eine Koalition aus SPD, Grünen und Linke auf 91 von 153 Sitzen im Abgeordnetenhaus." }
        ]},
        { h: "Wer unterstützt die Pläne, und wer kritisiert sie?", items: [
          { tag: "position", text: "Grünen-Spitzenkandidat Werner Graf sagte zu den Plänen: „In der Verkehrspolitik wird eine neue Zeit anbrechen.”" },
          { tag: "position", text: "Bundeskanzler Friedrich Merz sagte bereits am 17.10. beim Deutschlandtag der Jungen Union: „Das ist nicht zulässig zum Schutze unserer Demokratie. Das geht nicht, hört auf damit.” Linke-Vorsitzende Ines Schwerdtner reagierte darauf: „Ich wünschte mir, er wäre einmal so aufgebracht, was die Probleme der Menschen in diesem Land angeht.”" }
        ]},
        { h: "Welche nächsten Schritte werden diskutiert?", items: [
          { tag: "fakt", text: "Die Linke entscheidet am 31.10. auf einem Landesparteitag über die Sondierungsergebnisse, bei dem auch über eine Antisemitismus-Erklärung abgestimmt werden soll. Stimmt auch sie zu, könnten die eigentlichen Koalitionsverhandlungen ab etwa dem 2.11. beginnen.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Die Bundesebene und aktuelle Umfragen werden in Meldung 7 behandelt.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "ZDFheute: Berlin – SPD, Grüne und Linke auf dem Weg zu Koalitionsverhandlungen", url: "https://www.zdfheute.de/politik/deutschland/berlin-rot-rot-gruen-spd-gruene-linke-koalition-verhandlungen-100.html" },
        { title: "Tagesspiegel: Bei drei Gegenstimmen – SPD-Landesvorstand stimmt für Koalitionsgespräche", url: "https://tagesspiegel.de/berlin/liveblog/bei-drei-gegenstimmen-spd-landesvorstand-stimmt-fur-koalitionsgespraeche-16053722.html" },
        { title: "Berliner Zeitung: „Hört auf damit” – Merz will Linke-Regierung in Berlin in letzter Minute stoppen", url: "https://www.berliner-zeitung.de/article/hoert-auf-damit-merz-will-linke-regierung-in-berlin-in-letzter-minute-stoppen-10504483" }
      ]
    },

    /* 7 DEUTSCHLAND: BUNDESHAUSHALT/RECHNUNGSHOF/RENTE/PFLEGE/UMFRAGEN */
    {
      id: "bundeshaushalt-rechnungshof-rente-pflege-umfragen-10-20", cats: ["germany"], when: "Rechnungshof-Kritik 18.10. · Pflegereform-Zeitplan 30.9./5.11./11.12. · Umfragen 8.–20.10.2026",
      headline: "Bundesrechnungshof wirft dem Finanzministerium Buchungstricks beim Haushalt 2027 vor, Sozialverbände kritisieren die Pflegereform, AfD bleibt in Umfragen stärkste Kraft",
      sec30: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben) und wirft Finanzminister Klingbeil vor, 7 Mrd. Euro aus einer Rücklage mit einem Buchwert von 0 Euro entnehmen zu wollen. Der zusätzliche Bundeszuschuss zur Rentenversicherung soll 2027 um 1 Mrd. Euro geringer ausfallen als ursprünglich geplant, der Rentenbeitragssatz soll bei 18,6 % stabil bleiben. Die Pflegereform (Kabinettsbeschluss 30.9., erste Lesung im Bundestag 5.11., abschließende Lesung 11.12.) soll zusätzliche Rentenpunkte für pflegende Angehörige begrenzen; VdK und Verdi kritisieren die Pläne. Aktuelle Umfragen (ZDF-Politbarometer, YouGov, INSA) sehen die AfD weiterhin bei 28 bis 29 % als stärkste Kraft, mit teils deutlichen Unterschieden bei den übrigen Parteien.",
      blocks: [
        { h: "Was zeigt die Kritik des Bundesrechnungshofs am Haushalt 2027?", items: [
          { tag: "fakt", text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushaltsentwurf 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben); bis 2030 soll der Anteil auf 31,2 % steigen. Die Bundesschulden könnten laut Rechnungshof bis 2030 auf rund 3 Billionen Euro steigen.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] },
          { tag: "position", text: "Der Rechnungshof wirft Finanzminister Lars Klingbeil vor, 7 Mrd. Euro aus einer Rücklage mit einem Buchwert von 0 Euro entnehmen zu wollen – eine Praxis, die der Rechnungshof als „Buchungstrick” bezeichnet." }
        ]},
        { h: "Was würde sich bei Rente und Pflege konkret ändern?", items: [
          { tag: "fakt", text: "Der zusätzliche Bundeszuschuss zur gesetzlichen Rentenversicherung soll 2027 um 1 Mrd. Euro geringer ausfallen als ursprünglich geplant; der Rentenbeitragssatz soll 2027 bei 18,6 % stabil bleiben.",
            ask: [{ label: "Wie finanziert sich die Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Die Pflegereform (Kabinettsbeschluss 30.9., erste Lesung im Bundestag am 5.11., abschließende Lesung am 11.12.) sieht vor, zusätzliche Rentenpunkte für pflegende Angehörige im Rentenalter zu begrenzen (rund 39.000 Personen pro Jahr betroffen, Einsparung rund 150 Mio. Euro) und die Tariflohnpflicht in der Altenpflege bis Ende 2030 auszusetzen; der Pflegebeitragssatz soll 2027 bei 3,6 % stabil bleiben." }
        ]},
        { h: "Wer kritisiert die Pläne, und womit begründet er das?", items: [
          { tag: "position", text: "VdK-Präsidentin Verena Bentele bezeichnete die geplante Begrenzung der Rentenpunkte für pflegende Angehörige als „höchst unsolidarisch” und forderte von Bundeskanzler Merz einen „Sozialcheck” für die Rentenreform-Pläne." },
          { tag: "position", text: "Verdi-Vorsitzender Frank Werneke bezeichnete die Pflegereform als „Sparpaket zulasten der Versicherten, Pflegebedürftigen und Beschäftigten”, forderte einen „Pflegedeckel” und kritisierte die geplante Aussetzung der Tariflohnpflicht in der Altenpflege." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert, unter anderem in aktuellen Umfragen?", items: [
          { tag: "unbestaetigt", text: "Aktuelle Umfragen weichen weiterhin deutlich voneinander ab: Das ZDF-Politbarometer (8.10., Erhebung 5.–7.10.) sieht die AfD bei 28 %, CDU/CSU bei 21 %, Grüne bei 15 %, SPD bei 13 %, Linke bei 12 %. YouGov (20.10., Erhebung 16.–19.10.) sieht die AfD ebenfalls bei 28 %, CDU/CSU aber nur bei 18 %, Grüne bei 16 %, SPD bei 14 %, Linke bei 10 %. INSA (17.10.) sieht die AfD bei 29 %, CDU/CSU bei 18 %, Grüne bei 14 %, SPD bei 13 %, Linke bei 11 %. Alle drei Institute sehen die AfD übereinstimmend als stärkste Kraft, unterscheiden sich aber bei den übrigen Parteien teils deutlich.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Die Berliner Koalitionsbildung wird in Meldung 6 behandelt.",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "t-online: Haushalt 2027 – Rechnungshof wirft Klingbeil Buchungstricks vor", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101420390/haushalt-2027-rechnungshof-wirft-klingbeil-buchungsstricks-vor.html" },
        { title: "ad-hoc-news.de: Bundeshaushalt 2027 – Rechnungshof beziffert Deckungslücke auf 160,7 Milliarden", url: "https://www.ad-hoc-news.de/wirtschaft/bundeshaushalt-2027-rechnungshof-beziffert-deckungsluecke-auf-160-7-milliarden/70351796" },
        { title: "Deutsche Rentenversicherung: Kürzungen der Bundeszuschüsse", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2026/260915-kuerzungen-bundeszuschuesse" },
        { title: "ad-hoc-news.de: Pflegereform – VdK kritisiert Kürzung für 39.000 Rentner", url: "https://www.ad-hoc-news.de/politik/pflegereform-vdk-kritisiert-kuerzung-fuer-39-000-rentner/70271160" },
        { title: "verdi.de: Pflegereform und GKV-Gesetz – Verdi fordert Pflegedeckel und faire Löhne", url: "https://www.verdi.de/politik-gesellschaft/pflegereform-und-gkv-gesetz-verdi-fordert-pflegedeckel-und-faire-loehne" },
        { title: "ZDF-Presseportal: ZDF-Politbarometer Oktober I 2026", url: "https://presseportal.zdf.de/pressemitteilung/zdf-politbarometer-oktober-i-2026" },
        { title: "onvista: Sonntagsfrage – AfD bleibt stärkste Kraft", url: "https://www.onvista.de/news/2026/10-20-sonntagsfrage-afd-bleibt-staerkste-kraft-0-10-26565882" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-krieg-eu-finanzierungsluecke-trump-putin-xi-10-20", cats: ["world", "geo"], when: "Drohnenangriff auf Russland Nacht 18./19.10. · russischer Angriff auf Kiew Nacht 19./20.10. · EU-Gipfel 15./16.10. · Putin-Vorschlag 9./19.10.2026",
      headline: "Ukraine und Russland setzen gegenseitige Angriffe fort, EU beziffert Finanzierungslücke für 2027 auf 70 Milliarden Euro, Trump offen für möglichen Putin-Xi-Gipfel",
      sec30: "In der Nacht zum 19.10. setzte die Ukraine mehr als 1.000 Drohnen gegen Russland ein, Ziele waren unter anderem der Ölhafen St. Petersburg und ein Rechenzentrum; russische Angaben nennen einen Toten und mehrere Verletzte. In der Nacht zum 20.10. tötete ein russischer Luftangriff eine Frau in Kiew und beschädigte eine U-Bahn-Station. Die EU-Kommission bezifferte am 16.10. die ukrainische Finanzierungslücke für 2027 auf 70 Mrd. Euro; Belgiens Premier De Wever hält weiter an seinem Veto gegen die Nutzung eingefrorener russischer Vermögenswerte fest. Präsident Trump zeigte sich am 19.10. offen für ein mögliches Dreiertreffen mit Putin und Chinas Staatschef Xi, das der ukrainische Außenminister Sybiha scharf kritisierte.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "In der Nacht zum 19.10. setzte die Ukraine nach eigenen Angaben mehr als 1.000 Drohnen gegen Russland ein; Ziele waren unter anderem der Ölhafen und ein Ölterminal in St. Petersburg, ein Industrielager, der Flughafen St. Petersburg sowie ein Rechenzentrum. Russische Behörden meldeten einen Toten und mehrere Verletzte sowie „massive” Brände; Russland gab an, 1.015 Drohnen abgefangen zu haben." },
          { tag: "fakt", text: "In der Nacht zum 20.10. tötete ein russischer Luftangriff eine Frau in Kiew und beschädigte eine U-Bahn-Station sowie ein Wohnhaus." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "Präsident Selenskyj bot laut Berichten an, 30 Tage lang Angriffe auf russische Ölraffinerien auszusetzen, falls die USA im Gegenzug Patriot-Flugabwehrraketen liefern; Kreml-Chef Putin lehnte einen Energie-Waffenstillstand dagegen ab." },
          { tag: "fakt", text: "Belgiens Premierminister Bart De Wever hält an seinem Veto gegen die Nutzung der rund 185 bis 210 Mrd. Euro eingefrorener russischer Zentralbankgelder fest; ein Treffen zwischen Selenskyj und De Wever am Rande des EU-Gipfels brachte keinen Durchbruch." }
        ]},
        { h: "Welche diplomatischen Entwicklungen gab es?", items: [
          { tag: "unbestaetigt", text: "Kreml-Chef Putin schlug Präsident Trump in einem Telefonat am 9.10. ein Dreiertreffen mit Chinas Staatschef Xi Jinping vor, möglich am Rande des APEC-Gipfels im November in China. Trump äußerte sich am 19.10. offen dafür, wolle den Fokus aber auf „nuclear weapons and denuclearization” legen – ein fester Termin liegt nicht vor." },
          { tag: "position", text: "Der ukrainische Außenminister Andrii Sybiha kritisierte die Idee scharf: „A trilateral meeting between the leaders of Russia, China, and the US would do only the opposite: encourage Putin to continue this war.”" }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "EU-Kommissionspräsidentin von der Leyen bezifferte am 16.10. die Finanzierungslücke der Ukraine für 2027 auf 70 Mrd. Euro; der Europäische Rat beauftragte die Kommission, bis zum nächsten Gipfel Vorschläge zur Deckung dieser Lücke vorzulegen.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:9" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die gegenseitigen Angriffe fortsetzen, während die EU die Finanzierungsfrage weiterhin nicht gelöst hat und ein möglicher Trump-Putin-Xi-Gipfel ohne die Ukraine im Raum steht, zeigt, wie eng militärisches Geschehen und Finanzierungsfragen für die Ukraine derzeit verbunden sind." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 behandelt, die deutsche Verteidigungspolitik in Meldung 10.",
      terms: [],
      followups: ["e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: Ukrainian drone attack on Russia's St Petersburg kills 1, hits energy sites", url: "https://www.aljazeera.com/news/2026/10/19/ukrainian-drone-attack-on-russias-st-petersburg-kills-1-hits-energy-sites" },
        { title: "Kyiv Post: Live updates", url: "https://www.kyivpost.com/thread/87556" },
        { title: "US News: Trump says he is open to joining trilateral meeting with Xi, Putin", url: "https://www.usnews.com/news/world/articles/2026-10-19/trump-says-he-is-open-to-joining-trilateral-meeting-with-xi-putin" },
        { title: "The Hill: Putin proposes Trump-Xi summit", url: "https://thehill.com/policy/international/6157609-putin-proposes-trump-xi-summit/" },
        { title: "Kyiv Independent: Zelensky meets Belgian PM De Wever, but silence reigns on Russian assets", url: "https://kyivindependent.com/zelensky-meets-belgian-prime-minister-de-wever-but-silence-reigns-on-russian-assets/" },
        { title: "Interfax Ukraine: EU funding gap for Ukraine 2027", url: "https://en.interfax.com.ua/news/general/1222765.html" }
      ]
    },

    /* 9 GEOPOLITIK: HORMUZ/JEMEN */
    {
      id: "hormuz-jemen-houthi-tanker-centcom-10-20", cats: ["geo"], when: "Iranische Tankerbrand-Meldung 19.10. · CENTCOM-Angaben 17.10. · Operation Dawn of Yemen seit 5.10.2026",
      headline: "Iran meldet weitere Tankerbrände in der Straße von Hormus, CENTCOM und Iran nennen stark abweichende Zahlen zum Ölfluss, die Offensive gegen die Houthi im Jemen hält an",
      sec30: "Iran meldete am 19.10. einen weiteren Tankerbrand in der Straße von Hormus nach einem angeblichen Minentreffer – laut IRGC-Marine den dritten Fall binnen zwei Tagen; CENTCOM hat Schiffsidentität und Brandursache nicht bestätigt. CENTCOM-Chef Admiral Cooper erklärte, in der Vorwoche hätten trotzdem 400 Schiffe die Straße passiert, während ein Tracking-Dienst für den 11.10. nur 2 Durchfahrten zählte. Im Jemen hält die am 5.10. mit saudischer Unterstützung gestartete Offensive „Operation Dawn of Yemen” gegen die Houthi an; der Flughafen Riad wurde am 18.10. wieder geöffnet.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "unbestaetigt", text: "Die iranische Revolutionsgarde (IRGC) meldete am 19.10. einen weiteren Tankerbrand in der Straße von Hormus nach einem angeblichen Minentreffer – nach eigenen Angaben den dritten Fall binnen zwei Tagen, auf einer „nicht genehmigten Route” mit abgeschaltetem Tracking. CENTCOM hat Schiffsidentität oder Brandursache nicht bestätigt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "CENTCOM-Chef Admiral Brad Cooper erklärte, in der Vorwoche hätten trotzdem 400 Schiffe und 100 Mio. Barrel Öl die Straße passiert: „The Strait of Hormuz is controlled by the United States and our regional partners, not Iran.”" }
        ]},
        { h: "Was ist unabhängig bestätigt, und wo widersprechen sich die Angaben?", items: [
          { tag: "unbestaetigt", text: "Ein Tracking-Dienst zählte für den 11.10. nur 2 Durchfahrten gegenüber einer Vorkrisen-Basislinie von rund 85 pro Tag; Iran selbst bezifferte den Ölfluss in den sieben Tagen bis 13.10. auf 11,6 Mio. Barrel pro Tag (68 % der Vorkriegs-Basis von 17,1 Mio.). CENTCOM und Iran zeichnen damit stark unterschiedliche Bilder der Lage, die sich aus den verfügbaren Quellen nicht auflösen lassen." },
          { tag: "fakt", text: "In der Woche bis 16.10. wurden mindestens 12 Schiffe angegriffen (1 gesunken, 2 deaktiviert, 3 beschädigt) – die höchste Angriffszahl seit Kriegsbeginn Ende Februar 2026." }
        ]},
        { h: "Wie ist der Stand im Jemen, und beim Flughafen Riad?", items: [
          { tag: "fakt", text: "Die jemenitische Regierung hatte am 5.10. mit saudischer Unterstützung (rund 100 Kampfflugzeuge) die Offensive „Operation Dawn of Yemen” zur Rückeroberung Sanaas von den Houthi gestartet." },
          { tag: "unbestaetigt", text: "Nach eigenen Angaben der jemenitischen Streitkräfte wurden allein am 19.10. 558 Houthi-Kämpfer in 1.164 Angriffen „neutralisiert” – eine einseitige, unabhängig nicht überprüfbare Angabe der Konfliktpartei." },
          { tag: "fakt", text: "Houthi-Kräfte griffen am 19.10. ein Militärlager der Regierungstruppen in Südjemen an; laut Washington Post wurden dabei mindestens 20 Soldaten getötet – einer der tödlichsten Vorfälle der jüngsten Eskalation." },
          { tag: "fakt", text: "Der Flughafen Riad (King Khalid International Airport) wurde am 18.10. nach den Angriffen vom 10./11.10. wieder geöffnet, allerdings mit Einschränkungen; mehrere Fluggesellschaften verlängerten ihre Streckenaussetzungen bis in den November." }
        ]},
        { h: "Welche diplomatischen Entwicklungen gibt es zur Straße von Hormus?", items: [
          { tag: "position", text: "Irans Außenminister Araghchi bekräftigte am 18.10. das „Sieben-Tage-Angebot” zur Öffnung der Straße von Hormus, verbunden mit drei Bedingungen: Aufhebung der US-Seeblockade, Aussetzung der US-Ölsanktionen und ein Waffenstillstand an allen regionalen Fronten. Strittig bleibt laut Berichten vor allem die von US-Vizepräsident Vance verlangte Reduzierung der iranischen Urananreicherung.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "s:15" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass CENTCOM und Iran weiterhin stark unterschiedliche Zahlen zum Ölfluss durch die Straße von Hormus nennen und sich gleichzeitig die Offensive im Jemen fortsetzt, zeigt, wie unübersichtlich und angespannt die Lage am Golf bleibt – auch wenn der Flughafen Riad bereits wieder geöffnet hat." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 8 behandelt, der Ölpreis in Meldung 15.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: US and Iran both claim control of Strait of Hormuz amid attacks on vessels", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { title: "straits.live: Strait of Hormuz tracker, Briefing 20.10.2026", url: "https://straits.live/briefs/2026-10-20" },
        { title: "Tribune India: 'Direct consequence of US aggression', Iran's FM Araghchi warns over Strait of Hormuz insecurity during Lavrov visit", url: "https://www.tribuneindia.com/news/world/direct-consequence-of-us-aggression-irans-fm-araghchi-warns-over-strait-of-hormuz-insecurity-during-lavrov-visit" },
        { title: "Washington Post: Yemen, Houthis, Saudi fighting", url: "https://www.washingtonpost.com/world/2026/10/19/yemen-houthis-saudi-fighting/" },
        { title: "The National: Riyadh airport reopens – which airlines are still cancelling flights to Saudi Arabia", url: "https://www.thenationalnews.com/travel/2026/10/19/riyadh-airport-reopens-which-airlines-are-still-cancelling-flights-to-saudi-arabia/" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL/ARMINIUS/EU SAFE */
    {
      id: "defence-rheinmetall-arminius-eu-safe-10-20", cats: ["defence"], when: "Arminius-Vertragsziel Dezember 2026 · EU-Rat beschließt Omnibus V am 9.10.2026",
      headline: "Rheinmetalls Arminius-Vertrag soll im Dezember unterzeichnet werden, die EU vereinfacht mit Omnibus V die Vergabe von Verteidigungsmitteln",
      sec30: "Der milliardenschwere Arminius-Vertrag für neue Boxer-Radpanzer-Varianten der Bundeswehr soll laut Branchenberichten im Dezember 2026 unterzeichnet werden: Der Bundestag soll die Finanzierung am 9.12. beraten, eine Unterschrift könnte 5 bis 10 Tage danach folgen. Die erste feste Bestellung hätte für Rheinmetall einen Wert von rund 12,4 Mrd. Euro (Gesamtvolumen rund 25 Mrd. Euro mit KNDS Deutschland), ein Rahmenabkommen mit weiteren Tranchen bis 2035 könnte laut Berichten über 75 Mrd. Euro erreichen. Der EU-Rat gab am 9.10. die endgültige Zustimmung zum „Omnibus V”-Gesetzespaket, das die Vergabe von Verteidigungsmitteln aus dem 150 Mrd. Euro schweren SAFE-Programm vereinfachen und Schwellenwerte für Beschaffungen anheben soll.",
      blocks: [
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Laut Branchenberichten soll der Arminius-Vertrag für neue Boxer-Radpanzer-Varianten der Bundeswehr im Dezember 2026 unterzeichnet werden: Die Bundestagsberatung zur Finanzierung ist für den 9.12. vorgesehen, eine Unterschrift könnte 5 bis 10 Tage danach folgen. Eine offizielle Bestätigung dieses genauen Zeitplans durch Rheinmetall selbst liegt noch nicht vor.",
            ask: [{ label: "Mehr zur DAX-Entwicklung am Montag", ref: "n:dax" }] },
          { tag: "fakt", text: "Die erste feste Bestellung hätte für Rheinmetall einen Wert von rund 12,4 Mrd. Euro, bei einem Gesamtvolumen von rund 25 Mrd. Euro, da sich Rheinmetall und KNDS Deutschland die Boxer-Verkäufe im Verhältnis 50:50 teilen. Ein mögliches Rahmenabkommen mit weiteren Tranchen bis 2035 könnte laut Berichten einen Gesamtwert von über 75 Mrd. Euro erreichen." }
        ]},
        { h: "Was beschließt die EU mit dem SAFE-Programm und Omnibus V?", items: [
          { tag: "fakt", text: "Der EU-Rat gab am 9.10. die endgültige Zustimmung zum „Omnibus V”-Gesetzespaket, das Verwaltungshürden bei Beschaffung, Genehmigungen und grenzüberschreitender Zusammenarbeit im Verteidigungsbereich abbauen soll; der Schwellenwert für Liefer- und Dienstleistungsaufträge steigt dabei von 432.000 auf 2 Mio. Euro.",
            ask: [{ label: "Was ist das NATO-Ausgabenziel?", ref: "e:nato-target" }] },
          { tag: "fakt", text: "Im Rahmen des SAFE-Programms stellt die EU den Mitgliedstaaten langfristige, günstige Kredite von bis zu 150 Mrd. Euro für die Beschaffung dringend benötigter Verteidigungsgüter wie Munition, Flugabwehr- und Artilleriesysteme zur Verfügung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl der deutsche Arminius-Vertrag als auch die EU-weite Vereinfachung der Verteidigungsbeschaffung auf Dezember beziehungsweise bereits laufende Umsetzung zusteuern, spiegelt die anhaltend hohe sicherheitspolitische Priorität dieses Bereichs wider." }
        ]}
      ],
      reaction: "Weitere US-Rüstungsaufträge werden in Meldung 11 behandelt, der Ukraine-Krieg in Meldung 8.",
      terms: [],
      followups: ["e:defence-order", "e:nato-target"],
      sources: [
        { title: "hartpunkt.de: Arminius ante portas – Großvertrag für Boxer-Radpanzer soll im Dezember geschlossen werden", url: "https://www.hartpunkt.de/arminius-ante-portas-grossvertrag-fuer-boxer-radpanzer-soll-im-dezember-geschlossen-werden/" },
        { title: "defence-industry.eu: Rheinmetall expects €12.4 billion from Germany's Arminius plan, potential value reaching €77 billion", url: "https://defence-industry.eu/rheinmetall-expects-e12-4-billion-from-germanys-arminius-plan-for-up-to-5500-boxers-with-potential-value-reaching-e77-billion/" },
        { title: "ieu-monitoring.com: EU Council adopts Defence Omnibus V to accelerate investment and procurement", url: "https://ieu-monitoring.com/editorial/eu-council-adopts-defence-omnibus-v-to-accelerate-investment-and-procurement/1251866" },
        { title: "cosinex Blog: Omnibus V – höhere Schwellenwerte für Verteidigungsbeschaffung", url: "https://blog.cosinex.de/2026/10/07/omnibus-v-hohere-schwellenwerte-fur-verteidigungsbeschaffung/" }
      ]
    },

    /* 11 DEFENCE: RTX/ANDURIL */
    {
      id: "defence-rtx-anduril-luckey-pentagon-10-20", cats: ["defence"], when: "Anduril-Navy-Vertrag 6.10. · Luckey-Berufung Project Meridian Ende September · RTX-Aufträge 1./8./13.10.2026",
      headline: "Anduril-Mitgründer Palmer Luckey bleibt wegen seiner Rolle im Pentagon-Zukunftsgremium „Project Meridian” umstritten, RTX erhält weitere Milliardenaufträge",
      sec30: "Anduril erhielt am 6.10. einen Navy-Auftrag über bis zu 2,9 Mrd. Dollar für eine U-Boot-Werft – nur wenige Tage, nachdem Mitgründer Palmer Luckey gemeinsam mit Elon Musk und Newt Gingrich in das vom Pentagon geleitete 120-Tage-Projekt „Project Meridian” zur Erforschung künftiger Kriegsführung berufen worden war. Beobachter werfen wegen möglicher Interessenkonflikte weiter Fragen auf, da Anduril und Musks SpaceX von den Ergebnissen profitieren könnten. RTX/Raytheon erhielt zuvor bereits Verträge über bis zu 24,4 Mrd. Dollar (SM-6), 6,3 Mrd. Dollar (SM-3 Block IB) und 8 Mrd. Dollar (Kommunikationsmodernisierung der US-Luftwaffe).",
      blocks: [
        { h: "Was ist an der Berufung von Palmer Luckey bemerkenswert?", items: [
          { tag: "fakt", text: "US-Verteidigungsminister Pete Hegseth berief Ende September Anduril-Mitgründer Palmer Luckey gemeinsam mit Elon Musk und dem früheren Kongressabgeordneten Newt Gingrich in das Projekt „Project Meridian: The Future of Warfare” – eine auf 120 Tage angelegte Studie zu automatisierten und KI-gestützten Waffensystemen." },
          { tag: "position", text: "Beobachter äußerten laut Berichten Bedenken wegen möglicher Interessenkonflikte, da sowohl Anduril als auch Musks SpaceX von den Empfehlungen der Studie zu künftigen autonomen Waffensystemen profitieren könnten; Anduril-Chef verteidigte die bestehenden Verträge des Unternehmens." }
        ]},
        { h: "Welche neuen Großaufträge erhielt Anduril?", items: [
          { tag: "fakt", text: "Anduril erhielt am 6.10. – nur wenige Tage nach Luckeys Berufung – einen Navy-Auftrag über bis zu 2,9 Mrd. Dollar für den Bau einer U-Boot-Werft zur Unterstützung der Produktion von Virginia-Klasse-U-Booten." }
        ]},
        { h: "Welche Aufträge erhielt RTX/Raytheon zuletzt?", items: [
          { tag: "fakt", text: "RTX/Raytheon erhielt am 1.10. einen Fünfjahresvertrag über bis zu 24,4 Mrd. Dollar für SM-6-Abfangraketen, am 8.10. einen Vertrag über bis zu 6,3 Mrd. Dollar für SM-3-Block-IB-Abfangraketen und am 13.10. einen Auftrag der US-Luftwaffe über bis zu 8 Mrd. Dollar zur Modernisierung strategischer Kommunikationsterminals." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl etablierte Rüstungskonzerne wie RTX als auch jüngere Unternehmen wie Anduril weiterhin neue Großaufträge erhalten, während ein Anduril-Mitgründer zugleich in ein Pentagon-Planungsgremium berufen wurde, spiegelt die anhaltend engen Verbindungen zwischen Industrie und Verteidigungsministerium in den USA wider." }
        ]}
      ],
      reaction: "Die deutsche und europäische Rüstungsindustrie wird in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 8.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "CNBC: Anduril lands $2.9 billion Navy submarine shipyard contract", url: "https://www.cnbc.com/2026/10/06/anduril-navy-submarine-shipyard-contract.html" },
        { title: "CNBC: Anduril CEO defends contracts amid Palmer Luckey ethics questions", url: "https://www.cnbc.com/2026/10/15/anduril-ceo-contracts-palmer-luckey-ethics.html" },
        { title: "NPR: Elon Musk and Palmer Luckey's new Pentagon roles raise ethics worries", url: "https://www.npr.org/2026/10/06/nx-s1-5991899/elon-musk-palmer-luckey-pentagon-drones-ai" },
        { title: "RTX: RTX's Raytheon awarded $24.4 billion multi-year contract for SM-6 interceptors", url: "https://www.rtx.com/news/news-center/2026/10/01/rtxs-raytheon-awarded-24-4-billion-multi-year-contract-for-sm-6-interceptors" },
        { title: "RTX: RTX's Raytheon awarded $6.3 billion multi-year contract for SM-3 IB interceptors", url: "https://www.rtx.com/news/news-center/2026/10/08/rtxs-raytheon-awarded-6-3-billion-multi-year-contract-for-sm-3-ib-interceptors" }
      ]
    },

    /* 12 DEALS/PE: M&A-MELDUNGEN */
    {
      id: "deals-eqt-cleanaway-ccc-gtcr-akzonobel-apollo-bumble-10-20", cats: ["deals", "pe"], when: "EQT/Cleanaway-Ankündigung 18./19.10. · CCC/GTCR-Elliott 14./15.10. · Axanzo-Namensgebung 15.10. · Bumble-Closing 12./13.10.2026",
      headline: "EQT übernimmt den australischen Entsorger Cleanaway für rund 6,5 Milliarden Dollar, GTCR und Elliott kaufen CCC Intelligent Solutions für 6,1 Milliarden Dollar",
      sec30: "Der Finanzinvestor EQT kündigte am 18./19.10. an, den australischen Entsorger Cleanaway Waste Management für rund 9,3 Mrd. australische Dollar (rund 6,5 Mrd. US-Dollar, 3,095 australische Dollar je Aktie plus Sonderdividende) zu übernehmen; die Cleanaway-Aktie sprang daraufhin um rund 20 %. Ein Konsortium aus GTCR und Elliott Investment Management einigte sich bereits am 14./15.10. darauf, den Versicherungssoftware-Anbieter CCC Intelligent Solutions für einen Unternehmenswert von rund 6,1 Mrd. Dollar (Eigenkapitalwert rund 4,6 Mrd. Dollar, 7,75 Dollar je Aktie) zu übernehmen. Bei bereits bekannten Deals gab es ebenfalls Updates: AkzoNobel und Axalta werden nach ihrer rund 25 Mrd. Dollar schweren Fusion künftig „Axanzo” heißen, Thoma Bravo hat für die Finanzierung der Varonis-Übernahme JPMorgan und UBS engagiert, und die Übernahme von Bumble durch Ithaca Holdings wurde am 12./13.10. formell besiegelt.",
      blocks: [
        { h: "Was wurde bei EQT/Cleanaway angekündigt?", items: [
          { tag: "fakt", text: "EQT Infrastructure kündigte am 18./19.10. an, den australischen Entsorger Cleanaway Waste Management für rund 9,3 Mrd. australische Dollar (rund 6,5 Mrd. US-Dollar) zu übernehmen, zu 3,095 australische Dollar je Aktie in bar plus einer Sonderdividende – eine Prämie von rund 32,1 % zum Schlusskurs vom 12.8.2026. Die Cleanaway-Aktie sprang daraufhin um rund 20 %, ihren besten Handelstag seit rund 15 Jahren. Der Abschluss wird bis Ende März 2027 erwartet.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] }
        ]},
        { h: "Was wurde bei CCC Intelligent Solutions angekündigt?", items: [
          { tag: "fakt", text: "Ein Konsortium aus GTCR und Elliott Investment Management vereinbarte am 14./15.10., den Versicherungssoftware-Anbieter CCC Intelligent Solutions für einen Unternehmenswert von rund 6,1 Mrd. Dollar (Eigenkapitalwert rund 4,6 Mrd. Dollar) zu übernehmen; Aktionäre erhalten 7,75 Dollar je Aktie – eine Prämie von rund 44 % zum unbeeinflussten Schlusskurs vom 9.7.2026. Der Deal enthält keine Finanzierungsbedingung; der Abschluss wird im ersten Quartal 2027 erwartet.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "Angaben zu beratenden Banken für diesen Deal nennen die verfügbaren Quellen nicht." }
        ]},
        { h: "Was ist der Stand bei bereits bekannten Deals?", items: [
          { tag: "fakt", text: "AkzoNobel und Axalta Coating Systems gaben am 15.10. bekannt, dass ihr fusioniertes Unternehmen künftig „Axanzo” (Ticker AXZ) heißen wird; die Hauptversammlung bei AkzoNobel zur rund 25 Mrd. Dollar schweren Fusion ist für den 30.11. angesetzt." },
          { tag: "fakt", text: "Das Thoma-Bravo-Portfoliounternehmen Proofpoint hat JPMorgan und UBS als Banken für eine Hochzins-Anleihe zur Finanzierung der rund 6,3 Mrd. Dollar schweren Varonis-Übernahme engagiert und bereits 1,25 Mrd. Dollar an Finanzierung gesichert." },
          { tag: "fakt", text: "Die Übernahme von Bumble durch Ithaca Holdings (1,3 Mrd. Dollar, 6,05 Dollar je Aktie) wurde am 12./13.10. formell besiegelt; die Bumble-Aktie verdoppelte sich daraufhin binnen zwei Handelstagen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass binnen wenigen Tagen gleich mehrere Milliarden-Deals in unterschiedlichsten Branchen – Entsorgung, Versicherungssoftware, Lacke, Online-Dating – angekündigt oder besiegelt wurden, passt zu einer anhaltend aktiven M&A- und Private-Equity-Welle." }
        ]}
      ],
      deal: { value: "6,5 Mrd. $ (EQT/Cleanaway) · 6,1 Mrd. $ (GTCR-Elliott/CCC) · 25 Mrd. $ (AkzoNobel/Axalta→Axanzo)", buyer: "EQT Infrastructure · GTCR/Elliott Investment Management · AkzoNobel", target: "Cleanaway Waste Management · CCC Intelligent Solutions · Axalta Coating Systems", sector: "Entsorgung / Versicherungssoftware / Lacke", type: "Take-private & Fusion" },
      reaction: "Der Private-Credit-Markt wird in Meldung 13 behandelt.",
      terms: ["take-private", "enterprise-value", "ebitda"],
      followups: ["e:ma-steps", "e:take-private-why"],
      sources: [
        { title: "EQT Group: EQT agrees to acquire Cleanaway", url: "https://eqtgroup.com/news/eqt-agrees-to-acquire-cleanaway-a-leading-australian-integrated-waste-management-and-resource-recovery-platform-2026-10-18" },
        { title: "FinanceAsia: EQT buys Cleanaway Waste Management for A$9.3bn", url: "https://www.financeasia.com/article/eqt-buys-cleanaway-waste-management-for-a9-3bn/508561" },
        { title: "CollisionWeek: CCC Intelligent Solutions taken private by GTCR, Elliott in $6.1 billion deal", url: "https://collisionweek.com/2026/10/15/ccc-intelligent-solutions-taken-private-gtcr-elliott-6-1-billion-deal/" },
        { title: "AkzoNobel: AkzoNobel and Axalta to be called Axanzo following merger", url: "https://www.akzonobel.com/en/media/media-releases/akzonobel-and-axalta-to-be-called-axanzo-following-merger" },
        { title: "Bloomberg: Thoma Bravo's Proofpoint taps JPMorgan, UBS on Varonis debt deal", url: "https://bloomberg.com/news/articles/2026-10-16/thoma-bravo-s-proofpoint-taps-jpmorgan-ubs-on-varonis-debt-deal" },
        { title: "TechCrunch: Bumble agrees to a $1.3B acquisition deal as online dating faces a reset", url: "https://techcrunch.com/2026/10/13/bumble-agrees-to-a-1-3b-acquisition-deal-as-online-dating-faces-a-reset/" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-moodys-pik-blueowl-fitch-10-20", cats: ["credit", "pe"], when: "Moody's-Bericht 14.10. · Blue-Owl-Rücknahmebegrenzung Anfang Oktober · Fitch-Rekordwert 14.9.2026",
      headline: "Moody's warnt vor durch PIK-Klauseln verschleierten Ausfällen bei Private Credit, Blue Owl begrenzt erneut Rücknahmen bei zwei BDC-Fonds",
      sec30: "Moody's berichtete am 14.10., die offizielle Ausfallrate bei 607 untersuchten Private-Credit-Schuldnern habe in den zwölf Monaten bis Juni bei 4,0 % gelegen, steige aber auf 5,8 %, wenn Zinszahlungen in Form zusätzlicher Schulden (PIK) und Laufzeitverlängerungen bei finanziell angespannten Firmen als Ausfall gewertet würden; rund 17 % der Kreditnehmer in 47 untersuchten Middle-Market-CLOs nutzen PIK-Zinsen. Caa-geratete Schuldner machen über die Hälfte der zwischen 2027 und 2028 fälligen Verbindlichkeiten aus – Moody's warnt vor einer „Fälligkeitsmauer”. Blue Owl begrenzte Anfang Oktober erneut die Rücknahmen bei zwei Private-Credit-Fonds auf 5 %, nachdem Rücknahmeanfragen beim Technologiefonds OTIC auf 39 % gestiegen waren – den höchsten Wert der Branche. Fitch hatte bereits im September eine Rekord-Ausfallrate von 6,3 % gemeldet.",
      blocks: [
        { h: "Was zeigt der Moody's-Bericht zu Private-Credit-Ausfällen?", items: [
          { tag: "fakt", text: "Moody's berichtete am 14.10., die offizielle Ausfallrate bei 607 untersuchten Private-Credit-Schuldnern habe in den zwölf Monaten bis Juni 2026 bei 4,0 % gelegen, steige aber auf 5,8 %, wenn PIK-Anpassungen (Zinszahlung in Form zusätzlicher Schulden statt bar) und Laufzeitverlängerungen bei finanziell angespannten Firmen als Ausfall gewertet würden.",
            ask: [{ label: "Was ist PIK?", ref: "t:pik" }] },
          { tag: "fakt", text: "Rund 17 % der Kreditnehmer in 47 untersuchten Middle-Market-CLOs nutzen PIK-Zinsen; diese Firmen zeigen laut Moody's schwache Liquidität, negativen freien Cashflow und eine Zinsdeckung nahe null. Caa-geratete Emittenten machen über die Hälfte der zwischen 2027 und 2028 fälligen Verbindlichkeiten aus.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "position", text: "Moody's warnte in dem Bericht vor einer „Fälligkeitsmauer” bei niedrig gerateten Private-Credit-Schuldnern." }
        ]},
        { h: "Wie stellen sich Rücknahmen bei Business Development Companies dar?", items: [
          { tag: "fakt", text: "Blue Owl begrenzte Anfang Oktober 2026 erneut die Rücknahmen bei zwei Private-Credit-Fonds auf einen vertraglichen Höchstwert von 5 %, nachdem Rücknahmeanfragen beim Technologiefonds OTIC auf 39 % gestiegen waren – den höchsten Wert der Branche; binnen sechs Monaten lieferte Blue Owl rund 446 Mio. Dollar Liquidität, etwa 35 % der ursprünglichen Rücknahmeanfragen." },
          { tag: "fakt", text: "Fitch Ratings hatte bereits im September eine über 1.300 Kreditnehmer gemessene, auf zwölf Monate bezogene Ausfallrate von 6,3 % gemeldet – nach eigenen Angaben ein Rekordwert.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Wie stellt sich der Markt insgesamt dar?", items: [
          { tag: "fakt", text: "Institutionelles Private-Credit-Fundraising erreichte im ersten Halbjahr 2026 mit rund 190 Mrd. Dollar einen Rekordwert, während Retail-Anleger im gleichen Zeitraum rund 12,7 Mrd. Dollar aus Non-Traded-BDCs abzogen – eine wachsende Kluft zwischen institutionellem und Privatanleger-Segment." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass institutionelles Geld weiterhin in Rekordvolumen in den Private-Credit-Markt fließt, während Ratingagenturen zugleich auf verschleierte Ausfälle hinweisen und ein großer Anbieter wie Blue Owl erneut Rücknahmen begrenzen muss, zeigt eine wachsende Kluft zwischen institutionellem Vertrauen und Sorgen im Privatanleger-Segment." }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 12 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "non-accrual", "pik"],
      followups: ["e:private-credit-what", "e:nonaccrual-default", "e:redemption-limits"],
      sources: [
        { title: "Private Equity Wire: PIK amendments mask US private credit stress, Moody's warns", url: "https://www.privateequitywire.co.uk/pik-amendments-mask-us-private-credit-stress-moodys-warns/" },
        { title: "Benzinga: Moody's finds private credit stress is worse than default rates suggest, warns of maturity wall", url: "https://www.benzinga.com/markets/private-markets/26/10/62406062/moodys-finds-private-credit-stress-is-worse-than-default-rates-suggest-warns-of-maturity-wall" },
        { title: "FA-Mag: Blue Owl again caps two BDCs after withdrawal requests", url: "https://www.fa-mag.com/news/blue-owl-again-caps-two-bdcs-after-withdrawal-requests-88687.html" },
        { title: "Bloomberg: US private credit default rate hits a record of 6.3%, Fitch says", url: "https://www.bloomberg.com/news/articles/2026-09-14/us-private-credit-default-rate-hits-a-record-of-6-3-fitch-says" }
      ]
    },

    /* 14 TECHNOLOGIE: COREWEAVE/SOX/DEEPSEEK/HUANG */
    {
      id: "tech-coreweave-sox-deepseek-huang-berlin-10-20", cats: ["tech"], when: "CoreWeave-CDS-Rekord 15.10. · SOX-Erholung Mo 19.10. · Huang-Besuch Berlin 19./20.10.2026",
      headline: "CoreWeaves Kreditausfallrisiko bleibt auf Rekordniveau, Chipwerte erholen sich am Montag, Nvidia-Chef Huang kündigt in Berlin weitere Milliarden-Investitionen an",
      sec30: "Die 5-Jahres-Kreditausfallversicherungen (CDS) von CoreWeave erreichten am 15.10. mit 1.194,5 Basispunkten ein Rekordhoch – eine implizite Ausfallwahrscheinlichkeit von über 60 % binnen fünf Jahren; die Aktie fiel in der Woche bis 18.10. um rund 25 %. Der Halbleiterindex SOX erholte sich am Montag, 19.10., um 1,61 % auf 11.316,3 Punkte und beendete damit eine achttägige Verlustserie; AMD legte rund 3 bis 4 % zu. Nvidia-Chef Jensen Huang kündigte am 19./20.10. bei einem Besuch in Berlin zusätzliche Investitionen von rund 10 Mrd. Dollar für das europäische KI-Ökosystem an und rief deutsche Unternehmen auf, ihre Daten für den Einsatz von KI zu öffnen.",
      blocks: [
        { h: "Wie geht es CoreWeave und der Sorge um KI-Schulden?", items: [
          { tag: "fakt", text: "Die 5-Jahres-CDS von CoreWeave stiegen am 15.10. auf ein Rekordhoch von 1.194,5 Basispunkten – eine implizite Ausfallwahrscheinlichkeit von über 60 % binnen fünf Jahren. Die Aktie fiel in der Woche bis 18.10. um rund 25 %; die Rendite der Anleihe mit Fälligkeit 2031 (9,75 % Kupon) kletterte auf rund 15,78 %.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] }
        ]},
        { h: "Wie entwickelten sich Chipwerte am Montag?", items: [
          { tag: "fakt", text: "Der Philadelphia-Halbleiterindex SOX stieg am Montag um 1,61 % auf 11.316,3 Punkte und beendete damit eine Verlustserie von acht Handelstagen – die längste seit Mai 2026 –, nachdem er zuvor um rund 11,5 bis 16 % gefallen war." },
          { tag: "fakt", text: "AMD legte am Montag um rund 3 bis 4 % zu, gestützt von Kursziel-Anhebungen mehrerer Banken und Berichten über Kapazitätszusagen von Meta und Anthropic für AMDs MI450-Grafikprozessoren." }
        ]},
        { h: "Was kündigte Nvidia-Chef Jensen Huang in Berlin an?", items: [
          { tag: "fakt", text: "Nvidia-Chef Jensen Huang kündigte am 19./20.10. bei einem Invest-in-Germany-Termin in Berlin zusätzliche Investitionen von rund 10 Mrd. Dollar für das europäische KI-Ökosystem an, zusätzlich zu bereits zugesagten 8 Mrd. Dollar.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Huang rief die deutsche Industrie auf, KI schneller zu nutzen: „Open your doors for AI to make use of your data.” Zu den anhaltenden KI-Marktsorgen hatte er bereits am 16.10. gesagt: „All of this is going to pass.”" },
          { tag: "fakt", text: "Bundeskanzler Merz bezeichnete bei demselben Termin den deutschen Atomausstieg als „strategischen Fehler”, aber „irreversibel” – ein separates energiepolitisches Thema am Rande des Besuchs." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich Chipwerte und der SOX-Index am Montag erholten, während die Kreditmärkte bei CoreWeave gleichzeitig auf Rekordniveau bleiben und Huang in Berlin weitere Milliarden-Investitionen ankündigt, zeigt, wie unübersichtlich die Lage in der KI- und Chipbranche weiterhin bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion auf den Chip-Ausverkauf wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "CNBC: CoreWeave credit default swaps hit distress levels as investors sour on AI debt", url: "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html" },
        { title: "TradingKey: CoreWeave stock forecast – debt fears, $10.4 billion backlog, 60 support, October 19 2026", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262223317-coreweave-stock-forecast-debt-fears-104-billion-backlog-60-support-october-19-2026-tradingkey" },
        { title: "CNBC: German chancellor urges businesses to embrace AI", url: "https://www.cnbc.com/2026/10/20/german-chancellor-urges-businesses-to-embrace-ai.html" },
        { title: "Euronews: Nvidia CEO Jensen Huang warns Germany is falling behind in AI race", url: "https://www.euronews.com/2026/10/19/nvidia-ceo-jensen-huang-warns-germany-is-falling-behind-in-ai-race" },
        { title: "Yahoo Finance: SK Hynix, Samsung shares dip", url: "https://finance.yahoo.com/technology/ai/articles/sk-hynix-samsung-shares-dip-071811226.html" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-oelpreis-sanktionsaussetzung-ttf-gasspeicher-opec-10-20", cats: ["energy", "geo"], when: "Trump-Sanktionsaussetzung 16./17.10. · Ölpreis Di-früh 20.10. · TTF-Hoch Mo 19.10. · OPEC+-Beschluss 4.10.2026",
      headline: "Ölpreis bleibt nach Trumps Aussetzung neuer Russland-Sanktionen schwächer, europäischer Gaspreis TTF erreicht höchsten Stand seit Ende 2022",
      sec30: "Brent-Rohöl notierte Dienstagfrüh mit rund 109,06 Dollar je Barrel leicht schwächer als am Montag, nachdem Präsident Trump am 16./17.10. eine Anordnung erlassen hatte, die neue Russland-Sanktionen auf Energieexporte vorerst aussetzt. Der europäische Gas-Referenzpreis TTF stieg am Montag auf einen Schlussstand von 88,33 Euro je Megawattstunde und erreichte intraday mit 89,57 Euro den höchsten Stand seit Ende 2022, getrieben von den Angriffen auf Handelsschiffe in der Straße von Hormus und verstärktem Einspeichern vor dem Winter. Die deutschen Gasspeicher lagen am 16.10. bei 60,5 % Füllstand – rund 17 bis 19 Prozentpunkte unter dem Vorjahreswert. Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt.",
      blocks: [
        { h: "Warum ist der Ölpreis zuletzt gefallen?", items: [
          { tag: "fakt", text: "Präsident Trump erließ am 16./17.10. eine Anordnung, die neue, eigentlich vom Kongress beschlossene Russland-Sanktionen auf Energieexporte vorerst aussetzt.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "Brent-Rohöl notierte Dienstagfrüh (00:10 GMT) mit rund 109,06 Dollar je Barrel rund 0,45 % schwächer als am Vortag; die US-Ölsorte WTI wird je nach Liefertermin mit rund 98 bis 103 Dollar angegeben." },
          { tag: "unbestaetigt", text: "Eine einzelne Tracking-Quelle nennt für Dienstag abweichend einen steigenden Brent-Preis von rund 110 Dollar (+1,85 %); da zwei unabhängige Quellen den Rückgang auf 109,06 Dollar bestätigen, wird diese Abweichung als unsicher gekennzeichnet." }
        ]},
        { h: "Wie wirkt die Lage am Golf auf den Ölpreis?", items: [
          { tag: "unbestaetigt", text: "Gegenläufig halten die Spannungen in der Straße von Hormus sowie Angriffe auf saudische Energieinfrastruktur an; mehr dazu in Meldung 9.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:9" }] }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "fakt", text: "Der TTF-Referenzpreis stieg am Montag auf einen Schlussstand von 88,33 Euro je Megawattstunde und erreichte intraday mit 89,57 Euro den höchsten Stand seit Ende 2022.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die Angriffe auf Handelsschiffe in der Straße von Hormus, verstärktes Einspeichern vor dem Winter, schwächere LNG-Exporte aus dem Nahen Osten und die wachsende Abhängigkeit Europas von LNG vor dem geplanten vollständigen Ausstieg aus russischem Gas ab 2027." }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern und der OPEC+?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen zum 16.10. bei 60,5 % Füllstand (149,62 TWh) – rund 17 bis 19 Prozentpunkte unter dem Vorjahreswert; die gesetzliche Vorgabe liegt bei 80 % bis zum 1.11." },
          { tag: "fakt", text: "Der OPEC+-Beschluss vom 4.10. – unter anderem Saudi-Arabien mit 10,5 Mio. Barrel pro Tag, Russland mit 9,9 Mio. und Irak mit 4,4 Mio. – lässt die Fördermenge für November gegenüber Oktober unverändert; das nächste Treffen ist für den 1.11. angesetzt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz anhaltender Spannungen am Golf leicht gefallen ist, während der europäische Gaspreis gleichzeitig auf seinen höchsten Stand seit Ende 2022 stieg, zeigt, wie unterschiedlich sich die geopolitische Lage auf Öl- und Gasmärkte derzeit auswirkt." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft, der Ukraine-Krieg in Meldung 8.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "Business Standard: Oil prices ease as Russia sanctions relief offsets Gulf supply risks", url: "https://www.business-standard.com/markets/commodities/oil-prices-ease-as-russia-sanctions-relief-offsets-gulf-supply-risks-126102000063_1.html" },
        { title: "Business Recorder: Oil eases as markets assess potential waiver on Russian energy, Middle East supply risks", url: "https://www.brecorder.com/news/40445067/oil-eases-as-markets-assess-potential-waiver-on-russian-energy-middle-east-supply-risks" },
        { title: "IT-Boltwise: Erdgas-Preisdruck in Europa – TTF steigt auf 89,57 Euro je MWh", url: "https://www.it-boltwise.de/erdgas-preisdruck-in-europa-ttf-steigt-auf-8957-euro-je-mwh.html" },
        { title: "Bundesnetzagentur: Aktuelle Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "CNBC: OPEC+ agrees to keep November oil output targets steady", url: "https://www.cnbc.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Montag fielen DAX (−1,18 %) und Euro Stoxx 50 (−0,96 %) wegen geopolitischer Unsicherheit und einer steigenden Bund-Rendite, während S&P 500 (+0,41 %) und Nasdaq Composite (+1,11 %) sich von der KI-Ausverkaufswoche erholten; am Dienstag fielen asiatische Chipwerte erneut." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die gegenläufige Entwicklung nennen Berichte geopolitische Risiken und Gewinnmitnahmen bei Rüstungswerten in Europa sowie eine technische Erholung bei KI- und Chipwerten in den USA nach dem starken Ausverkauf der Vorwoche." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite lag am Montag bei rund 5,07 bis 5,08 %; die FOMC-Blackout-Periode läuft seit 17.10. bis zum 29.10. Für die Bund-Rendite nennt eine einzelne Quelle 3,43 %, nicht kreuzverifiziert." },
    "central-banks-why": { tag: "position", story: 2, text: "Fed-Chef Warsh machte bei seiner Rede auf der IWF-Jahrestagung in Bangkok am 16.10. bewusst keine Aussage zum Zinspfad für die Sitzung am 27./28.10.; die FOMC-Blackout-Periode läuft seither bis zum 29.10." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen für Oktober überwiegend eine Zinspause ein, mit Haltewahrscheinlichkeiten zwischen rund 65 und 87 % je Plattform und Zeitpunkt." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold bewegte sich am Montag in einer Spanne von rund 4.132 bis 4.167 Dollar je Feinunze, gestützt von der unveränderten US-Rendite und der Erwartung einer Fed-Zinspause; ein eindeutiger Dienstagswert liegt noch nicht vor." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Montag und Dienstag unverändert bei 1,1225 Dollar – schwächer als die 1,1253 Dollar vom Freitag der Vorwoche." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin bewegte sich zwischen rund 82.440 und 82.900 Dollar – weiterhin rund 34,5 bis 35 % unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %; die finale Eurozonen-Inflation für September lag laut Eurostat bei 3,8 %." },
    "inflation-expectations": { tag: "fakt", story: 5, text: "Die deutsche Inflation stieg im September auf 3,3 % – den bisherigen Jahreshöchststand 2026 –, während das ifo-Geschäftsklima gleichzeitig auf den höchsten Stand seit über drei Jahren stieg." },
    "ecb-hike": { tag: "unbestaetigt", story: 4, text: "Der Marktkonsens erwartet laut LBBW zu rund 88 % keine Zinsänderung bei der EZB-Sitzung am 29.10.; die Nominierungsfrist für die Schnabel-Nachfolge läuft am 28.10. ab." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben) und wirft dem Finanzministerium Buchungstricks vor." },
    "rente-basics": { tag: "fakt", story: 7, text: "Der zusätzliche Bundeszuschuss zur Rentenversicherung soll 2027 um 1 Mrd. Euro geringer ausfallen als geplant; der Rentenbeitragssatz soll bei 18,6 % stabil bleiben." },
    "debt-brake": { tag: "fakt", story: 7, text: "Der Bundesrechnungshof warnt, die Bundesschulden könnten bis 2030 auf rund 3 Billionen Euro steigen, wenn die aktuelle Haushaltsplanung fortgeführt wird." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "Der SPD-Landesvorstand stimmte am Montagabend mit 26:3, der Grüne-Landesausschuss mit 43:2 Stimmen für Koalitionsverhandlungen mit der Linken in Berlin; die Linke entscheidet erst am 31.10." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Aktuelle Umfragen weichen weiterhin deutlich voneinander ab: ZDF-Politbarometer und YouGov sehen die AfD bei 28 %, INSA bei 29 %; bei den übrigen Parteien unterscheiden sich die Institute teils um mehrere Prozentpunkte." },
    "hormuz": { tag: "unbestaetigt", story: 9, text: "Iran meldete am 19.10. einen weiteren Tankerbrand in der Straße von Hormus; CENTCOM und Iran nennen weiterhin stark unterschiedliche Zahlen zum verbliebenen Ölfluss durch die Straße." },
    "why-oil-up-geo": { tag: "fakt", story: 15, text: "Der Ölpreis fiel zuletzt trotz anhaltender Spannungen am Golf, nachdem Präsident Trump neue Russland-Sanktionen auf Energieexporte vorerst ausgesetzt hatte." },
    "defence-order": { tag: "unbestaetigt", story: 10, text: "Der Arminius-Vertrag für Rheinmetall soll laut Branchenberichten im Dezember 2026 unterzeichnet werden; die EU gab am 9.10. die endgültige Zustimmung zum Omnibus-V-Paket zur Vereinfachung der Verteidigungsbeschaffung." },
    "nato-target": { tag: "fakt", story: 10, text: "Das SAFE-Programm stellt EU-Mitgliedstaaten langfristige, günstige Kredite von bis zu 150 Mrd. Euro für dringend benötigte Verteidigungsgüter zur Verfügung; Omnibus V soll die Vergabe dieser Mittel beschleunigen." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Anduril-Mitgründer Palmer Luckey wurde Ende September in das Pentagon-Zukunftsgremium „Project Meridian” berufen; wenige Tage später erhielt Anduril einen Navy-Auftrag über bis zu 2,9 Mrd. Dollar." },
    "ma-steps": { tag: "fakt", story: 12, text: "EQT kündigte die Übernahme von Cleanaway Waste Management für rund 6,5 Mrd. Dollar an, ein Konsortium aus GTCR und Elliott übernimmt CCC Intelligent Solutions für einen Unternehmenswert von rund 6,1 Mrd. Dollar." },
    "take-private-why": { tag: "fakt", story: 12, text: "AkzoNobel und Axalta werden nach ihrer Fusion künftig „Axanzo” heißen; die Bumble-Übernahme durch Ithaca Holdings wurde am 12./13.10. formell besiegelt." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Moody's beziffert die um PIK-Effekte bereinigte Private-Credit-Ausfallrate auf 5,8 % statt offiziell 4,0 %; institutionelles Fundraising erreichte im ersten Halbjahr 2026 dennoch einen Rekordwert von rund 190 Mrd. Dollar." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Fitch meldete im September eine Rekord-Ausfallrate von 6,3 % bei über 1.300 untersuchten Private-Credit-Kreditnehmern." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Blue Owl begrenzte Anfang Oktober erneut die Rücknahmen bei zwei Private-Credit-Fonds auf 5 %, nachdem Rücknahmeanfragen beim Technologiefonds OTIC auf 39 % gestiegen waren." },
    "ai-capex": { tag: "position", story: 14, text: "Nvidia-Chef Jensen Huang kündigte am 19./20.10. in Berlin zusätzliche Investitionen von rund 10 Mrd. Dollar für das europäische KI-Ökosystem an, während CoreWeaves Kreditausfallrisiko weiter auf Rekordniveau bleibt." },
    "custom-chips": { tag: "fakt", story: 14, text: "Der Halbleiterindex SOX erholte sich am Montag um 1,61 % und beendete eine achttägige Verlustserie; asiatische Speicherchip-Werte fielen am Dienstagmorgen dennoch erneut." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "Die Sorge um die Finanzierung von KI-Cloud-Anbietern wie CoreWeave bleibt akut; dessen Kreditausfallversicherungen erreichten am 15.10. mit 1.194,5 Basispunkten ein Rekordhoch." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen zum 16.10. bei 60,5 % Füllstand – weiterhin rund 17 bis 19 Prozentpunkte unter dem Vorjahreswert, bei einer gesetzlichen Vorgabe von 80 % bis zum 1.11." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der TTF-Gaspreis stieg am Montag auf einen Schlussstand von 88,33 Euro je Megawattstunde und erreichte intraday mit 89,57 Euro den höchsten Stand seit Ende 2022." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent fiel zuletzt auf rund 109,06 Dollar je Barrel; Öl und das gleichzeitig steigende Gaspreisniveau bleiben Belastungsfaktoren für Sprit-, Heiz- und Transportkosten." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Mit welchem Ergebnis stimmte der SPD-Landesvorstand am Montagabend, 19.10.2026, über Koalitionsverhandlungen mit der Linken in Berlin ab?",
      options: [
        "26:3 Stimmen dafür",
        "Einstimmig dagegen",
        "15:14 knapp dafür",
        "Die Abstimmung wurde auf unbestimmte Zeit vertagt"
      ],
      answer: 0,
      explain: "Der SPD-Landesvorstand stimmte mit 26:3 Stimmen dafür, in Koalitionsverhandlungen mit der Linken einzutreten; der Grüne-Landesausschuss stimmte mit 43:2 Stimmen ebenfalls zu."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 15,
      q: "Angenommen, Präsident Trump hätte die neuen Russland-Sanktionen auf Energieexporte am 16./17.10.2026 nicht ausgesetzt, sondern wie ursprünglich beschlossen in Kraft treten lassen. Was wäre für den Ölpreis danach unter sonst gleichen Bedingungen am ehesten wahrscheinlicher gewesen?",
      options: [
        "Ein stärkerer Rückgang des Ölpreises als tatsächlich beobachtet",
        "Ein geringerer Rückgang oder sogar ein Anstieg des Ölpreises, da weniger russisches Angebot erwartet worden wäre",
        "Keine Auswirkung, da Sanktionen den Ölpreis grundsätzlich nicht beeinflussen",
        "Eine automatische Öffnung der Straße von Hormus"
      ],
      answer: 1,
      explain: "Die tatsächliche Aussetzung der Sanktionen ließ mehr russisches Ölangebot erwarten und drückte den Preis; eine Umsetzung der Sanktionen hätte das Angebot eher verknappt und damit tendenziell preistreibend gewirkt."
    },
    {
      topic: "Märkte", type: "Fakt", story: 2,
      q: "Bis wann läuft die aktuelle FOMC-Blackout-Periode vor der Fed-Zinsentscheidung am 27./28.10.2026?",
      options: [
        "Bis zum Beginn der Sitzung am 27.10.",
        "Bis zum Jahresende 2026",
        "Bis zum 29.10., einen Tag nach der Zinsentscheidung",
        "Es gibt 2026 keine Blackout-Periode"
      ],
      answer: 2,
      explain: "Die Blackout-Periode begann am 17.10. und dauert bis zum 29.10. – einen Tag nach der Zinsentscheidung, die am 28.10. bekanntgegeben wird. In dieser Zeit äußern sich Fed-Mitglieder nicht öffentlich zur Geldpolitik."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Was kündigte Nvidia-Chef Jensen Huang bei seinem Besuch in Berlin am 19./20.10.2026 an?",
      options: [
        "Den Rückzug Nvidias aus dem europäischen Markt",
        "Die Übernahme von CoreWeave durch Nvidia",
        "Ein Verkaufsverbot für Nvidia-Chips in Deutschland",
        "Zusätzliche Investitionen von rund 10 Mrd. Dollar für das europäische KI-Ökosystem"
      ],
      answer: 3,
      explain: "Huang kündigte zusätzliche Investitionen von rund 10 Mrd. Dollar für das europäische KI-Ökosystem an – zusätzlich zu bereits zuvor zugesagten 8 Mrd. Dollar – und rief deutsche Unternehmen auf, ihre Daten für KI zu öffnen."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, die EU würde sich doch noch auf die Nutzung der eingefrorenen russischen Vermögenswerte einigen. Was würde das für die von der EU-Kommission genannte Finanzierungslücke der Ukraine von 70 Mrd. Euro für 2027 unter sonst gleichen Bedingungen am ehesten bedeuten?",
      options: [
        "Ein automatisches Ende des Ukraine-Kriegs",
        "Eine deutlich einfachere Deckung der Finanzierungslücke, ohne dass der Krieg dadurch automatisch endet",
        "Keine Auswirkung, da die Gelder ohnehin nicht genutzt werden dürften",
        "Eine automatische Aufhebung aller EU-Sanktionen gegen Russland"
      ],
      answer: 1,
      explain: "Eine Einigung über die rund 185 bis 210 Mrd. Euro eingefrorener Vermögenswerte würde die Finanzierungslücke der Ukraine für 2027 leichter decken helfen; den militärischen Konflikt selbst würde das aber nicht automatisch beenden, wie Präsident Selenskyj mit Blick auf eine mögliche Wiederaufrüstung Russlands betonte."
    }
  ]
};
