// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-22",
  dateLabel: "Donnerstag, 22. Oktober 2026",
  updatedLabel: "Recherchestand 22.10.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagmorgen, 22.10.2026, vor Eröffnung des europäischen Kassahandels. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500, Nasdaq Composite und den Halbleiterindex SOX gilt deshalb weiterhin der Schlussstand von Mittwoch, 21.10. Laut einer Vorbörse-Indikation wurde der DAX rund zwei Stunden vor Handelsbeginn etwa 0,6 % niedriger bei rund 25.500 Punkten erwartet, nachdem asiatische Märkte in der Nacht deutlich gefallen waren (Nikkei −2,65 %, Hang Seng rund −3,0 bis −3,2 %, Kospi rund −3,5 bis −3,8 %), vor allem bei KI- und Speicherchip-Werten. Devisen-, Gold-, Öl- und Bitcoin-Kurse handeln dagegen durchgehend: Brent-Rohöl notierte Donnerstagmorgen je nach Quelle zwischen rund 110 und 112 Dollar, Gold korrigierte nach seinem Rekordhoch vom Dienstag deutlich auf rund 4.083 bis 4.091 Dollar, und Bitcoin fiel je nach Quelle auf rund 81.700 bis 82.900 Dollar (Meldungen 1, 3, 8, 15).",

  top: [
    { text: "DAX (+1,35 % auf 25.645,04 Pkt.) und Euro Stoxx 50 (+1,4 % auf rund 6.205 Pkt.) schlossen am Mittwoch, 21.10., dank starker Quartalszahlen (unter anderem SpaceX, SAP, Capital One) im Plus; auch Dow Jones, S&P 500 und Nasdaq Composite legten zu. In der Nacht zum Donnerstag fielen asiatische Märkte jedoch wieder deutlich (Nikkei −2,65 %, Hang Seng rund −3 %, Kospi rund −3,5 %) wegen eines erneuten Ausverkaufs bei KI-nahen Aktien, und der DAX wurde laut einer Vorbörse-Indikation rund 0,6 % niedriger erwartet.", ref: "s:1" },
    { text: "US-Sondergesandter Steve Witkoff traf Kreml-Chef Putin am 21.10. zu einem rund dreistündigen Gespräch; laut Kreml-Angaben ist Putin bereit, Mitte November trilaterale Gespräche wieder aufzunehmen. Präsident Selenskyj zeigte sich im selben Zeitraum offen dafür, ein Einfrieren der aktuellen Frontlinie als ersten Schritt zu einem Friedensabkommen zu akzeptieren, verbunden mit der Forderung nach belastbaren Sicherheitsgarantien. Belgiens Premier De Wever bekräftigte am 21.10. seine Haltung, dass die EU keine eingefrorenen russischen Vermögenswerte für die Ukraine-Finanzierung nutzen solle.", ref: "s:7" },
    { text: "Am 21.10. wurden bei einem Angriff auf den Flughafen King Fahd in Dammam (Saudi-Arabien) nach offiziellen Angaben zwei Menschen getötet und acht verletzt; ein weiterer Drohnenangriff auf das Aramco-Ölfeld Shaybah wurde abgefangen, forderte nach Berichten aber ebenfalls zwei Tote. Gleichzeitig meldete die iranische Revolutionsgarde weitere Tankerbrände in der Straße von Hormus. Der Ölpreis stieg daraufhin auf rund 110 bis 112 Dollar je Barrel Brent.", ref: "s:8" },
    { text: "Der Finanzinvestor EQT und der DAX-Konzern Qiagen einigten sich am 21./22.10. auf eine Übernahme Qiagens für rund 10,8 Mrd. Euro Unternehmenswert (46,50 Euro je Aktie in bar) – laut Handelsblatt nach einem Bieterwettstreit mit KKR. Es ist eine der größten Private-Equity-Übernahmen eines deutschen Börsenkonzerns in diesem Jahr.", ref: "s:12" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.645,04", change: "+1,35 % (+341 Pkt., Mi-Schluss)", dir: "up", asof: "Schluss Mi 21.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Quellenabweichung", text: "Eine Quelle nennt für Mittwoch leicht abweichend 25.647,11 Punkte – eine übliche Rundungsdifferenz zwischen Datenanbietern." },
        { label: "Donnerstag-Indikation", text: "Laut einer Vorbörse-Indikation wurde der DAX rund zwei Stunden vor Handelsbeginn etwa 0,6 % niedriger bei rund 25.500 Punkten erwartet; der europäische Kassahandel hatte zum Redaktionsschluss noch nicht begonnen." }
      ],
      moved: {
        intro: "Als Hintergrund für Mittwoch nennen Berichte:",
        items: [
          "Die laufende Quartalsberichtssaison: SpaceX meldete für seine KI-Sparte „Super Intelligence” einen Quartalsumsatz von 7,6 Mrd. Dollar, die Aktie sprang rund 8 %; auch SAP (+rund 3,5 %), Adidas und Jenoptik lieferten starke Zahlen.",
          "Für den schwächeren Donnerstag-Ausblick nennen Berichte einen erneuten Ausverkauf bei KI-nahen Aktien in Asien sowie den über 110 Dollar gestiegenen Ölpreis nach neuen Angriffen auf saudische Ziele; mehr dazu in Meldung 8."
        ]
      },
      important: [
        { area: "Rüstung", text: "Mehr zum Kursrückgang bei Rheinmetall und den Analysten-Kürzungen zum Arminius-Programm in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Dax auf Vierwochenhoch", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-auf-vierwochenhoch-12176917" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.205 Pkt. (eine Quelle: 6.208 Pkt.)", change: "+1,4 % (+83 Pkt., Mi-Schluss)", dir: "up", asof: "Schluss Mi 21.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Anleihemarkt", text: "Der Risikoaufschlag französischer Staatsanleihen stieg am Mittwoch auf ein 15-Jahres-Hoch von rund 160 Basispunkten (10-Jahres-Rendite rund 5,0 %) – Gegenwind für europäische Aktien, der die Gewinne aber nicht verhinderte." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Starke Einzelwerte, vor allem SAP (+rund 3,5 %), minderten die zuvor dominierenden Sorgen um eine mögliche Überbewertung von KI-Investitionen.",
          "Gegenläufig belastete der auf ein 15-Jahres-Hoch gestiegene Risikoaufschlag französischer Staatsanleihen die Rentenmärkte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Was eine Rendite bedeutet und warum sie Aktienmärkte bewegt, erklärt diese Erklärung.", ref: "e:yield-stocks" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 schließt dank SAP 1,4 Prozent höher", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-dank-sap-1-4-prozent-hoeher/70386502" }
    },
    "sp500": {
      label: "S&P 500", value: "7.757,17", change: "+0,58 % (+44,60 Pkt., Mi-Schluss)", dir: "up", asof: "Schluss Mi 21.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Mittwochsschluss: 52.856,09 Punkte (+0,69 %, +360,21 Pkt.)." },
        { label: "Halbleiterindex SOX", text: "Der Philadelphia-Halbleiterindex SOX legte am Mittwoch den zweiten Tag in Folge zu (+1,97 % auf 11.505,6 Punkte)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Starke Quartalszahlen von SpaceX (KI-Sparte „Super Intelligence”, Umsatz 7,6 Mrd. Dollar) und Capital One Financial (+rund 8 %) überdeckten zunächst die seit Wochen anhaltenden Sorgen um die Finanzierung von KI-Investitionen.",
          "Gegenläufig fiel Netflix nachbörslich rund 5 %, nach einer laut Berichten schwachen Umsatzprognose fürs vierte Quartal."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Metas Quartalszahlen und zu CoreWeave in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "AP via mymotherlode.com: How major US stock indexes fared Wednesday", url: "https://mymotherlode.com/news/national/11240746/how-major-us-stock-indexes-fared-wednesday-10-21-2026" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "26.702,86", change: "+1,05 % (+278,04 Pkt., Mi-Schluss)", dir: "up", asof: "Schluss Mi 21.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Asien Donnerstag", text: "Die asiatischen Märkte fielen am Donnerstag erneut deutlich (Nikkei −2,65 %, Hang Seng rund −3,0 bis −3,2 %, Kospi rund −3,5 bis −3,8 %, Shanghai Composite rund −1,4 bis −1,5 %) – die Erholung an der Nasdaq vom Mittwoch bestätigte sich damit in Asien noch nicht." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Starke Nachfrage nach KI-, Chip- und Rechenzentrumswerten sowie die SpaceX-Rally (+rund 8 %) nach den Quartalszahlen.",
          "Nvidia, AMD und Intel legten vorbörslich bis zu 2 % zu."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Yahoo Finance/CNBC: Stock market today – tech rallies, SpaceX stock surges nearly 8%", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-21-dow-sp-500-nasdaq-100000105.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1234 (EZB-Referenzkurs)", change: "leicht höher als 1,1225 am Mo/Di", dir: "flat", asof: "EZB-Referenzkurs Mi 21.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Tagesspanne", text: "Eine Quelle nennt für Mittwoch eine Tagesspanne von rund 1,1211 bis 1,1245 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die leichte Bewegung von 1,1225 auf 1,1234 Dollar wurde in den verfügbaren Quellen keine ausdrückliche Begründung genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Sitzung am 29.10. und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Grafik USD)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,07–5,13 %", change: "nahezu unverändert („steady”)", dir: "flat", asof: "Stand Mi 21.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt aktuell bei 3,75 bis 4,00 % (seit der Erhöhung um 25 Basispunkte am 16.9.2026) – die Anleiherendite liegt damit weiterhin gut einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die FOMC-Blackout-Periode läuft seit 17.10. bis 29.10.; seither gibt es keine öffentlichen Fed-Kommentare zur Zinspolitik mehr.",
          "Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen für die Sitzung am 27./28.10. überwiegend eine Zinspause ein, mit Werten zwischen rund 84 und 88 % je Plattform; auf eine erneute Zinserhöhung entfallen rund 12 bis 16 %."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Blackout-Periode und zu den Marktwetten in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "CNBC: Treasury yields steady as investors await jobless claims", url: "https://www.cnbc.com/2026/10/21/bonds-us-treasurys-yields.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,41–3,42 %", change: "kaum verändert (Bund-Future −0,05 % auf 121,52/121,58 Pkt.)", dir: "flat", asof: "Stand Mi 21.10.26", story: 1, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Der Risikoaufschlag französischer Staatsanleihen gegenüber deutschen stieg am Mittwoch auf ein 15-Jahres-Hoch von rund 160 Basispunkten (französische 10-Jahres-Rendite rund 5,0 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die EZB hält ihren Einlagensatz seit der September-Erhöhung bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10.",
          "Ein Bericht nennt als Hintergrund für Bewegungen am Anleihemarkt, dass sich der Ölpreis nach vagen Hoffnungen auf diplomatische Fortschritte im Nahost-Konflikt zwischenzeitlich wieder etwas beruhigt hatte – eine Einschätzung der Quelle, nicht unabhängig bestätigt."
        ]
      },
      important: [
        { area: "Frankreich", text: "Die steigende französische Risikoprämie belastete den Euro Stoxx 50 am Mittwoch zusätzlich.", ref: "s:1" }
      ],
      source: { title: "ARIVA.DE: Deutsche Anleihen sinken – Französischer Risikoaufschlag auf 15-Jahreshoch", url: "https://www.ariva.de/news/deutsche-anleihen-sinken-franzoesischer-risikoaufschlag-auf-12176919" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.083–4.091 $", change: "−1,39 % (−57,40 $) ggü. Dienstag", dir: "down", asof: "Stand Do 22.10.26, 5:34 Uhr EDT", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.080 bis 4.090 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Rekordhoch Dienstag", text: "Gold hatte am Dienstag, 20.10., mit 4.381,21 Dollar ein Rekordhoch erreicht; der aktuelle Stand liegt damit rund 7 % darunter." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Gewinnmitnahmen nach dem Rekordhoch vom Dienstag.",
          "Ein Bericht nennt zusätzlich den auf über 110 Dollar gestiegenen Ölpreis als Belastungsfaktor, da er die Inflationssorgen und damit indirekt die Markteinschätzung zum Realzins verändert habe – eine Einordnung der Quelle, keine unabhängig bestätigte Kausalität."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Blackout-Periode und zu den Zinswetten in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Kitco: Goldpreis-Chart", url: "http://www.kitco.com/charts/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 110–112 $ (Spanne, Quellen weichen ab)", change: "+1,2 bis +2,9 % ggü. Vortag", dir: "up", asof: "Stand Do 22.10.26 früh", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 110 Dollar je Fass (159 Liter) sind etwa 70 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI notierte Donnerstagfrüh bei rund 99,3 bis 99,9 Dollar je Barrel und näherte sich damit der 100-Dollar-Marke." },
        { label: "Quellenspanne", text: "Verschiedene Datenanbieter nannten für Donnerstagfrüh Werte zwischen 110,11 und 111,97 Dollar für Brent – übliche Abweichungen durch unterschiedliche Erfassungszeitpunkte im 24-Stunden-Handel." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Angriffe auf saudische Energie- und Flughafeninfrastruktur am 21.10. (Flughafen Dammam, Aramco-Ölfeld Shaybah), die trotz nach CENTCOM-Angaben grundsätzlich hohem Schiffsverkehr durch die Straße von Hormus die Versorgungssorgen erneut verstärkten; mehr dazu in Meldung 8.",
          "Ein Rückgang der US-Rohölbestände um 3,06 Mio. Barrel in der Woche bis 17.10."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "Nation Thailand (Reuters): Fresh Houthi attacks in Saudi Arabia prompt a US diplomatic drawdown as Brent gains", url: "https://www.nationthailand.com/news/world/40072588" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.700–82.900 $ (Spanne, Quellen weichen ab)", change: "−1,91 % ggü. Vortag (CoinDesk, 24h)", dir: "down", asof: "Stand Do 22.10.26 Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin rund 34 bis 35 % unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Laut Bloomberg belasteten erneute „AI jitters” (Sorgen um KI-Investitionen) das Sentiment.",
          "ETF-Abflüsse und rund 651 Mio. Dollar Zwangsliquidationen binnen 24 Stunden verstärkten den Rückgang."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Bloomberg: Bitcoin Falls Below $83,000 as AI Jitters Weigh on Sentiment", url: "https://www.bloomberg.com/news/articles/2026-10-22/bitcoin-falls-below-83-000-as-ai-jitters-weigh-on-sentiment" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-mittwoch-schluss-asien-donnerstag-10-22", cats: ["markets"], when: "Schluss Mi 21.10.2026 (Europa/USA) · Asien-Handel Do 22.10.2026",
      headline: "DAX und Wall Street schließen am Mittwoch im Plus, asiatische Märkte fallen am Donnerstag wegen eines erneuten KI-Ausverkaufs",
      sec30: "Am Mittwoch, 21.10., stiegen DAX (+1,35 % auf 25.645,04 Pkt.) und Euro Stoxx 50 (+1,4 % auf rund 6.205 Pkt.), getragen von starken Quartalszahlen unter anderem von SpaceX, SAP und Capital One. Auch die US-Indizes legten zu: Dow Jones +0,69 %, S&P 500 +0,58 %, Nasdaq Composite +1,05 %; der Halbleiterindex SOX stieg den zweiten Tag in Folge (+1,97 %). In der Nacht zum Donnerstag fielen asiatische Märkte jedoch wieder deutlich (Nikkei −2,65 %, Hang Seng rund −3,0 bis −3,2 %, Kospi rund −3,5 bis −3,8 %), getrieben von einem erneuten Ausverkauf bei KI-nahen Aktien. Der DAX wurde laut einer Vorbörse-Indikation rund 0,6 % niedriger erwartet.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Mittwoch entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stieg um 1,35 % (+341 Punkte) auf 25.645,04 Punkte, der Euro Stoxx 50 um 1,4 % (+83 Punkte) auf rund 6.205 Punkte.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die laufende Quartalsberichtssaison: SpaceX meldete für seine KI-Sparte „Super Intelligence” einen Quartalsumsatz von 7,6 Mrd. Dollar und die Aktie sprang rund 8 %, SAP legte rund 3,5 % zu, Capital One Financial stieg rund 8 %, zudem lieferten Adidas und Jenoptik starke Zahlen." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes, und was bremste gleichzeitig?", items: [
          { tag: "fakt", text: "Der Dow Jones stieg um 0,69 % (+360,21 Punkte) auf 52.856,09 Punkte, der S&P 500 um 0,58 % (+44,60 Punkte) auf 7.757,17 Punkte, der Nasdaq Composite um 1,05 % (+278,04 Punkte) auf 26.702,86 Punkte; der Halbleiterindex SOX legte den zweiten Tag in Folge zu (+1,97 % auf 11.505,6 Punkte).",
            ask: [{ label: "Mehr zu CoreWeave, Nvidia und Meta", ref: "s:14" }] },
          { tag: "unbestaetigt", text: "Netflix fiel nachbörslich rund 5 %, nach einer laut Berichten schwachen Umsatzprognose fürs vierte Quartal und gesenkten Werbeerlös-Erwartungen." },
          { tag: "einordnung", text: "In Europa belastete ein auf ein 15-Jahres-Hoch gestiegener Risikoaufschlag französischer Staatsanleihen (rund 160 Basispunkte, 10-Jahres-Rendite rund 5,0 %) die Rentenmärkte zusätzlich, ohne die Aktiengewinne zu verhindern.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Wie entwickelten sich asiatische Märkte am Donnerstag, und was deutet das für Europa an?", items: [
          { tag: "unbestaetigt", text: "Der Nikkei fiel am Donnerstag um 2,65 % auf 62.907,84 Punkte (Tokyo Electron −6,51 %, SoftBank −6,86 %, zusätzlich belastet von einem stärkeren Yen), der Hang Seng um rund 3,0 bis 3,2 % auf etwa 22.890 bis 22.935 Punkte (Hang-Seng-Tech-Index über −5 %, Alibaba −5,3 %, Tencent −3,2 %, CATL −10 %), der Kospi um rund 3,5 bis 3,8 % auf 5.533,77 Punkte, der Shanghai Composite um rund 1,4 bis 1,5 % auf 3.658,03 Punkte." },
          { tag: "einordnung", text: "Berichte nennen als Hintergrund einen erneuten, breiten Ausverkauf bei KI-nahen Aktien, der die zuvor als stützend gewerteten US-Quartalszahlen überschattete.",
            ask: [{ label: "Warum fällt die Nasdaq manchmal trotz guter US-Zahlen?", ref: "chain:nasdaq-why" }] },
          { tag: "fakt", text: "Laut einer Vorbörse-Indikation wurde der DAX rund zwei Stunden vor Handelsbeginn etwa 0,6 % niedriger bei rund 25.500 Punkten erwartet, unter anderem wegen des über 110 Dollar gestiegenen Ölpreises nach neuen Angriffen auf saudische Ziele.",
            ask: [{ label: "Mehr zu den Angriffen in Saudi-Arabien", ref: "s:8" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass US-Indizes und europäische Indizes am Mittwoch gemeinsam zulegten, während sich der Druck auf asiatische KI- und Chipwerte am Donnerstag erneut verstärkte, zeigt, wie schnell sich die Stimmung rund um KI-Investitionen weiterhin dreht. Da der europäische Kassahandel am Donnerstagmorgen noch nicht begonnen hat, bleibt der Mittwochsschluss bis zur Eröffnung gültig. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, Gold/Bitcoin in Meldung 3, die Lage am Golf in Meldung 8, CoreWeave/Nvidia/Meta in Meldung 14, der Ölpreis in Meldung 15.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Dax auf Vierwochenhoch", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-auf-vierwochenhoch-12176917" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 schließt dank SAP 1,4 Prozent höher", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-dank-sap-1-4-prozent-hoeher/70386502" },
        { title: "AP via mymotherlode.com: How major US stock indexes fared Wednesday", url: "https://mymotherlode.com/news/national/11240746/how-major-us-stock-indexes-fared-wednesday-10-21-2026" },
        { title: "Yahoo Finance/CNBC: Stock market today – tech rallies, SpaceX stock surges nearly 8%", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-21-dow-sp-500-nasdaq-100000105.html" },
        { title: "Gurufocus: Nikkei 225 falls 2.65% amid rising market caution", url: "https://www.gurufocus.com/news/9135987/nikkei-225-falls-265-amid-rising-market-caution" },
        { title: "ARIVA.DE: Deutsche Anleihen sinken – Französischer Risikoaufschlag auf 15-Jahreshoch", url: "https://www.ariva.de/news/deutsche-anleihen-sinken-franzoesischer-risikoaufschlag-auf-12176919" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED BLACKOUT & ZINSWETTEN */
    {
      id: "fed-blackout-zinswetten-ppi-10-22", cats: ["markets", "economy"], when: "FOMC-Blackout 17.–29.10. · FOMC-Sitzung 27./28.10.2026 · Marktwetten Stand 21.10.2026",
      headline: "Fed bleibt in der Blackout-Periode vor der Oktober-Sitzung, Marktplattformen preisen überwiegend eine Zinspause ein, US-Erzeugerpreise fielen im September deutlich höher aus als erwartet",
      sec30: "Die FOMC-Blackout-Periode läuft seit Samstag, 17.10., bis Donnerstag, 29.10. Die Fed hatte ihren Leitzins am 16.9. um 25 Basispunkte auf 3,75 bis 4,00 % angehoben – die erste Erhöhung seit Juli 2023. Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen für die Sitzung am 27./28.10. mit rund 84 bis 88 % überwiegend eine Zinspause ein, mit rund 12 bis 16 % für eine weitere Erhöhung; eine Senkung wird praktisch nicht erwartet. Die US-Erzeugerpreise waren im September um 1,3 % gegenüber dem Vormonat gestiegen (Prognose 0,6 %), das Fed-Beige-Book vom 14.10. zeichnete ein gemischtes Konjunkturbild.",
      blocks: [
        { h: "Was bedeutet die FOMC-Blackout-Periode, und wie hoch ist der Leitzins aktuell?", items: [
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, begann am 17.10. und dauert bis zum 29.10. – einen Tag nach der Sitzung am 27./28.10. Die Zinsentscheidung wird am Mittwoch, 28.10., um 14 Uhr Eastern Time bekanntgegeben.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Die Fed hatte ihren Leitzins am 16.9.2026 mit 12:0 Stimmen um 25 Basispunkte auf eine Spanne von 3,75 bis 4,00 % angehoben – die erste Erhöhung seit Juli 2023." }
        ]},
        { h: "Wie schätzen Marktplattformen die Oktober-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Nach Angaben von CME FedWatch, Kalshi und Polymarket wird für Oktober überwiegend eine Zinspause erwartet, mit Wahrscheinlichkeiten zwischen rund 84 % (CME FedWatch) und 88,5 % (Kalshi, Stand 21.10.); auf eine erneute Erhöhung um 25 Basispunkte entfallen je Plattform rund 12 bis 16 %, auf eine Senkung praktisch 0 %. Die Wahrscheinlichkeit für eine Erhöhung ist damit innerhalb einer Woche von rund 19 % auf diese Werte gefallen.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Welche aktuellen US-Konjunkturdaten spielen eine Rolle?", items: [
          { tag: "fakt", text: "Die US-Erzeugerpreise stiegen im September um 1,3 % gegenüber dem Vormonat (Prognose 0,6 %) und um 6,3 % gegenüber dem Vorjahr (Prognose 5,3 %); die Kern-Erzeugerpreise legten um 0,7 % zum Vormonat zu.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] },
          { tag: "fakt", text: "Die US-Einzelhandelsumsätze stiegen im September um 0,8 % gegenüber dem Vormonat und um 6,3 % gegenüber dem Vorjahr auf 745,0 Mrd. Dollar." },
          { tag: "fakt", text: "Das Fed-Beige-Book vom 14.10. (Datenstand bis 5.10., zusammengestellt von der Philadelphia Fed) zeichnete ein gemischtes Bild: 2 von 12 Distrikten meldeten moderates, 3 modestes, 4 leichtes Wachstum, 3 keine Veränderung; der Preisdruck wurde in 3 Distrikten als „robust”, in 8 als „moderat” beschrieben." },
          { tag: "fakt", text: "Ein für den 1.10. drohender US-Regierungsshutdown wurde durch eine bereits am 2.9. unterschriebene Übergangsfinanzierung abgewendet; die Finanzierung ist bis zum 11.12.2026 gesichert." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung für die Oktober-Sitzung trotz der laufenden Blackout-Periode zwischen rund 84 und 88 % für eine Zinspause schwankt, während die September-Erzeugerpreise deutlich stärker gestiegen sind als erwartet, zeigt, wie genau Anleger weiterhin jedes verfügbare Datum zur US-Konjunktur verfolgen." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1 und den Zahlen oben, die EZB-Seite und globale Zentralbanken werden in Meldung 4 behandelt.",
      terms: ["leitzins", "basispunkt", "rendite", "erzeugerpreise"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "FinanceCalendar: FOMC Rate Decision October 2026", url: "https://www.financecalendar.com/event/fomc-rate-decision-october-2026/" },
        { title: "CNBC: Fed rate decision September 2026", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
        { title: "PredictionMarketPicks: Fed Rate Tracker", url: "https://predictionmarketspicks.com/tools/fed-rate-tracker/october-2026/2026-10-21" },
        { title: "Boston Fed: Beige Book, October 2026 – mixed results, outlook dims", url: "https://www.bostonfed.org/news-and-events/news/2026/10/beige-book-october-2026-mixed-results-outlook-dims.aspx" },
        { title: "TradingEconomics (de): US-Erzeugerpreise September 2026", url: "https://de.tradingeconomics.com/united-states/producer-price-inflation-mom/news/470590" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-22", cats: ["markets"], when: "Stand Mi 21./Do 22.10.2026",
      headline: "Gold korrigiert nach Rekordhoch deutlich, Bitcoin fällt unter 83.000 Dollar, Euro bleibt gegenüber dem Dollar stabil",
      sec30: "Gold hatte am Dienstag, 20.10., mit 4.381,21 Dollar ein Rekordhoch erreicht und korrigierte bis Donnerstagfrüh um rund 1,4 % auf 4.083 bis 4.091 Dollar je Feinunze. Bitcoin fiel laut Bloomberg wegen erneuter Sorgen um KI-Investitionen („AI jitters”) unter 83.000 Dollar, je nach Quelle auf rund 81.700 bis 82.900 Dollar – rund 34 bis 35 % unter seinem Allzeithoch vom 6.10.2025. Der EZB-Referenzkurs für den Euro lag am Mittwoch bei 1,1234 Dollar, leicht höher als die 1,1225 Dollar vom Montag/Dienstag.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold erreichte am Dienstag, 20.10., mit 4.381,21 Dollar ein Rekordhoch und fiel bis Donnerstagfrüh (5:34 Uhr EDT) um rund 1,4 % (−57,40 Dollar) auf eine Spanne von 4.082,90 bis 4.090,50 Dollar je Feinunze.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte Gewinnmitnahmen nach dem Rekordhoch; ein Bericht nennt zusätzlich den auf über 110 Dollar gestiegenen Ölpreis als Belastungsfaktor für die Inflationserwartung – eine Einordnung der Quelle, keine unabhängig bestätigte Kausalität." }
        ]},
        { h: "Wie entwickelt sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Quellen nennen für Donnerstagvormittag unterschiedliche Werte zwischen rund 81.744,57 Dollar (CoinDesk, −1,91 % binnen 24 Stunden) und rund 82.705 bis 82.906 Dollar; Bitcoin liegt damit weiterhin rund 34 bis 35 % unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "fakt", text: "Laut Bloomberg belasteten erneute Sorgen um die Finanzierung von KI-Investitionen („AI jitters”) das Sentiment; ETF-Abflüsse und rund 651 Mio. Dollar Zwangsliquidationen binnen 24 Stunden verstärkten den Rückgang." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Mittwoch bei 1,1234 Dollar, leicht höher als die 1,1225 Dollar vom Montag und Dienstag; eine Quelle nennt für Mittwoch eine Tagesspanne von rund 1,1211 bis 1,1245 Dollar. Für die Bewegung wurde in den verfügbaren Quellen keine ausdrückliche Begründung genannt.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold nach seinem Rekordhoch deutlich korrigiert und Bitcoin gleichzeitig unter 83.000 Dollar fällt, während der Euro gegenüber dem Dollar nahezu stabil bleibt, passt zu einer Phase, in der sich die Stimmung rund um KI-Investitionen von Tag zu Tag stark verändert. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Fed-Zinsentwicklung wird in Meldung 2 behandelt, der KI-Ausverkauf in Meldung 14, der Ölpreis in Meldung 15.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Kitco: Goldpreis-Chart", url: "http://www.kitco.com/charts/gold" },
        { title: "Yahoo Finance/Reuters: Gold price today, Wednesday, October 21, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-price-today-wednesday-october-21-2026-gold-prices-down-52-yoy-one-week-ahead-of-the-feds-rate-decision-105025200.html" },
        { title: "Bloomberg: Bitcoin Falls Below $83,000 as AI Jitters Weigh on Sentiment", url: "https://www.bloomberg.com/news/articles/2026-10-22/bitcoin-falls-below-83-000-as-ai-jitters-weigh-on-sentiment" },
        { title: "CoinDesk: Bitcoin Price", url: "https://www.coindesk.com/price/bitcoin" },
        { title: "finanzen.at: Devisen (EZB-Richtwerte) – Euro-Referenzkurs bei 1,1234 US-Dollar", url: "https://www.finanzen.at/nachrichten/aktien/devisen-ezb-richtwerte-euro-referenzkurs-bei-1-1234-us-dollar-1036649648" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/SCHNABEL-NACHFOLGE/GLOBALE ZENTRALBANKEN */
    {
      id: "ezb-schnabel-globale-zentralbanken-inflation-10-22", cats: ["economy", "world"], when: "EZB-Sitzung 29.10. · Schnabel-Nachfolgefrist 28.10. · BoJ-Sitzung 30.10. · BoE-Sitzung 5.11. · UK-Inflation 21.10.2026",
      headline: "EZB-Zinsentscheidung am 29.10. rückt näher, britische Inflation steigt auf 3,5 %, IWF erwartet für 2026 weltweit 3,1 % Wachstum und 4,7 % Inflation",
      sec30: "Die EZB hält ihren Einlagensatz seit der September-Erhöhung bei 2,50 %; der Marktkonsens erwartet für die Sitzung am 29.10. mit rund 99 % keine Änderung. Die Nominierungsfrist für die Nachfolge von Isabel Schnabel im EZB-Direktorium läuft am 28.10. ab. Die britische Inflation stieg im September laut ONS auf 3,5 % (von 3,1 %); vor der nächsten Bank-of-England-Sitzung am 5.11. erwartet eine Reuters-Umfrage unter 63 Ökonomen mehrheitlich eine Erhöhung auf 4,00 %. Die Bank of Japan tagt am 29./30.10., die chinesische Notenbank PBoC ließ ihre Leitzinsen am 20.10. den 17. Monat in Folge unverändert. Der IWF erwartet laut seinem Weltwirtschaftsausblick vom 14.10. für 2026 ein globales Wachstum von 3,1 % bei einer globalen Inflation von 4,7 %.",
      blocks: [
        { h: "Wie ist der Stand bei der EZB-Zinsentscheidung am 29.10.?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Die Zinsentscheidung wird am 29.10. um 14:15 MEZ bekanntgegeben, die Pressekonferenz folgt um 14:45 MEZ.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Der Marktkonsens erwartet nach verfügbaren Quellen zu rund 99 % keine Zinsänderung am 29.10.; genaue Einschätzungen können sich bis zur Sitzung noch verändern." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die Nominierungsfrist für die 21 Eurostaaten läuft am 28.10. ab; Isabel Schnabel wechselt zum 3.1.2027 zum IWF, wo sie ab 4.1.2027 die Abteilung für Geld- und Kapitalmärkte leitet. Die Eurogruppe berät im November über die Kandidaten für die Nachfolge im EZB-Direktorium; ein konkreter Name ist bislang nicht bekannt." }
        ]},
        { h: "Wie haben sich Inflation und Zinspolitik in anderen großen Volkswirtschaften entwickelt?", items: [
          { tag: "fakt", text: "Die britische Inflation stieg im September laut Office for National Statistics auf 3,5 % (von 3,1 % im August); vor der nächsten Bank-of-England-Sitzung am 5.11. (aktueller Leitzins 3,75 %) erwartet eine Reuters-Umfrage unter 63 Ökonomen mehrheitlich (54 von 63) eine Erhöhung auf 4,00 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] },
          { tag: "fakt", text: "Die Bank of Japan tagt am 29./30.10.; nach dem Zinsschritt im September wird überwiegend ein Halten bei 1,25 % erwartet. Die chinesische Notenbank PBoC ließ ihre Leitzinsen (1 Jahr 3,0 %, 5 Jahre 3,5 %) am 20.10. den 17. Monat in Folge unverändert; Chinas Wirtschaft war im dritten Quartal um 4,5 % gegenüber dem Vorjahr gewachsen." }
        ]},
        { h: "Was sagt der IWF zur globalen Konjunktur?", items: [
          { tag: "fakt", text: "Der IWF erwartet laut seinem am 14.10. in Bangkok veröffentlichten Weltwirtschaftsausblick für 2026 ein globales Wachstum von 3,1 % (2027: 3,4 %) bei einer globalen Inflation von 4,7 % (2027: 4,1 %); als Risiken nennt der Bericht unter anderem den Nahost-Konflikt, als Stütze den anhaltenden KI-Investitionsboom." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die EZB-Personalfrage als auch mehrere große Zentralbanken gleichzeitig vor Zinsentscheidungen stehen, während die britische Inflation zuletzt stieg und der IWF für 2026 weiterhin eine erhöhte globale Inflation erwartet, zeigt, wie viele geldpolitische Fragen Ende Oktober zusammenlaufen." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 5.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "Handelsblatt: EZB – Euro-Staaten müssen bis Monatsende Schnabel-Nachfolge nominieren", url: "https://www.handelsblatt.com/finanzen/ezb-euro-staaten-muessen-bis-monatsende-schnabel-nachfolge-nominieren/100260974.html" },
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel bis 28. Oktober", url: "https://www.onvista.de/news/2026/10-09-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-bis-28-oktober-0-20-26562225" },
        { title: "ONS: Consumer price inflation, UK", url: "https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/latest" },
        { title: "Japan Times: Bank of Japan underlying inflation rate", url: "https://www.japantimes.co.jp/business/2026/10/05/economy/bank-of-japan-underlying-inflation-rate/" },
        { title: "IMF: World Economic Outlook, October 2026", url: "https://www.imf.org/en/publications/weo/issues/2026/10/13/world-economic-outlook-october-2026" }
      ]
    },

    /* 5 DEUTSCHLAND: BUNDESHAUSHALT/KLINGBEIL/MERZ */
    {
      id: "bundeshaushalt-klingbeil-merz-berlin-global-dialogue-10-22", cats: ["germany", "economy"], when: "Rechnungshof-Kritik 18.10. · Klingbeil-Verteidigung Mitte Okt. · Merz-Rede 21.10.2026 · Bereinigungssitzung 12.11.2026",
      headline: "Finanzminister Klingbeil verteidigt hohe Ausgaben trotz Rechnungshof-Kritik, Bundeskanzler Merz fordert bei internationalem Forum mehr wirtschaftliche Souveränität für Deutschland",
      sec30: "Der Bundesrechnungshof hatte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro beziffert (geplante Ausgaben 555,4 Mrd. Euro, erwartete Einnahmen 394,7 Mrd. Euro) und vor einem Anstieg der Bundesschulden auf rund 3 Billionen Euro bis 2030 gewarnt. Finanzminister Klingbeil verteidigte seinen Kurs laut Handelsblatt mit dem sinngemäßen Vergleich, Verteidigung ohne Schulden sei wie eine Mondlandung ohne Rakete. Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11. angesetzt, die abschließende Bundestagsabstimmung voraussichtlich für Ende November. Bei einer Rede beim „Berlin Global Dialogue” am 21.10. erklärte Bundeskanzler Merz, die Weltwirtschaftsordnung habe sich „fundamental verändert”, Deutschland müsse „stärker und souveräner” werden; zugleich äußerte er sich zur EU-Handelspolitik gegenüber China.",
      blocks: [
        { h: "Was zeigt die Kritik des Bundesrechnungshofs am Haushalt 2027?", items: [
          { tag: "fakt", text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushaltsentwurf 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben von 555,4 Mrd. Euro gegenüber erwarteten Einnahmen von 394,7 Mrd. Euro) und warnte, die Bundesschulden könnten bis 2030 auf rund 3 Billionen Euro steigen.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Wie reagierte die Regierung auf die Kritik?", items: [
          { tag: "position", text: "Finanzminister Lars Klingbeil verteidigte laut Handelsblatt seinen Kurs sinngemäß mit dem Vergleich, eine Verteidigungspolitik ohne Schulden sei wie eine Mondlandung ohne Rakete, und verwies auf die Notwendigkeit höherer Verteidigungsausgaben." }
        ]},
        { h: "Welche nächsten Schritte beim Haushalt werden diskutiert?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11.2026 angesetzt, die abschließende Bundestagsabstimmung wird voraussichtlich Ende November erfolgen.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Was sagte Bundeskanzler Merz beim „Berlin Global Dialogue”, und wozu äußerte er sich zur EU-China-Handelspolitik?", items: [
          { tag: "position", text: "Bundeskanzler Merz erklärte am 21.10. beim „Berlin Global Dialogue”, die Welt- und Wirtschaftsordnung habe sich „fundamental verändert”, Lieferketten seien gestört und internationale Institutionen unter Druck; Deutschland müsse „stärker und souveräner” werden. Für 2026 nannte er ein erwartetes Wirtschaftswachstum von 1,3 %." },
          { tag: "position", text: "Laut Bloomberg sagte Merz am selben Tag zur EU-Handelspolitik gegenüber China, die EU wolle „idealerweise” keine scharfen neuen Handelsinstrumente gegen China einsetzen müssen, werde sich aber gegen „aggressive Praktiken” verteidigen.",
            ask: [{ label: "Mehr zu den China-Taiwan-Spannungen", ref: "s:9" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Bundesregierung trotz der Rechnungshof-Kritik an ihrem Ausgabenkurs festhält, während Bundeskanzler Merz gleichzeitig mehr wirtschaftliche Souveränität für Deutschland fordert, zeigt, wie eng innenpolitische Haushaltsfragen und außenwirtschaftliche Positionierung derzeit zusammenhängen." }
        ]}
      ],
      reaction: "Die Berliner Koalitionsbildung und aktuelle Umfragen werden in Meldung 6 behandelt.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:central-banks-why"],
      sources: [
        { title: "Bundesrechnungshof: Einzelplananalysen 2027", url: "https://www.bundesrechnungshof.de/veroeffentlichungen/einzelplananalysen-2027" },
        { title: "Handelsblatt: Haushalt 2027 – so verteidigt Klingbeil die hohen Rüstungsausgaben", url: "https://www.handelsblatt.com/politik/deutschland/haushalt-2027-so-verteidigt-klingbeil-die-hohen-ruestungsausgaben-1/100252789.html" },
        { title: "Bundesregierung: Rede von Bundeskanzler Merz anlässlich des Berlin Global Dialogues am 21. Oktober 2026 in Berlin", url: "https://www.bundesregierung.de/breg-de/aktuelles/rede-von-bundeskanzler-merz-anlaesslich-des-berlin-global-dialogues-am-21-oktober-2026-in-berlin-2457876" },
        { title: "Bloomberg: Merz Says Protectionism Is Throwing a Wrench at Global Trade", url: "https://www.bloomberg.com/news/articles/2026-10-21/merz-says-protectionism-is-throwing-a-wrench-at-global-trade" }
      ]
    },

    /* 6 DEUTSCHLAND: BERLIN-KOALITION/UMFRAGEN */
    {
      id: "berlin-koalition-umfragen-insa-forsa-bayern-10-22", cats: ["germany"], when: "Linke-Parteitag 31.10.2026 · INSA/Forsa 20.10. · Bayern-Umfragen 19./20.10.2026",
      headline: "Vor dem Linke-Parteitag am 31.10. bleibt die Berliner Koalitionsbildung unverändert im Zeitplan, neue bundesweite und bayerische Umfragen zeigen teils deutliche Unterschiede zwischen Instituten",
      sec30: "Zur Berliner Koalitionsbildung aus SPD, Grünen und Linke gab es seit den Abstimmungen vom 19.10. (SPD-Landesvorstand 26:3, Grüne-Landesausschuss 43:2) keine neuen Entwicklungen; die Linke entscheidet weiterhin erst am 31.10. auf ihrem Parteitag. Neue Umfragen zeigen bundesweit teils deutliche Unterschiede: INSA sieht die AfD bei 30 %, Forsa bei 27 %, eine Aggregation mehrerer Institute (dawum.de, 20.10.) bei 26,4 %. In Bayern sehen zwei aktuelle Umfragen (Infratest dimap, GMS) die CSU bei 36 bis 37 % und die AfD bei 21 bis 22 % als zweitstärkste Kraft.",
      blocks: [
        { h: "Was ist der aktuelle Stand bei der Berliner Koalitionsbildung?", items: [
          { tag: "fakt", text: "Der SPD-Landesvorstand hatte am 19.10. mit 26:3 Stimmen, der Grüne-Landesausschuss mit 43:2 Stimmen für Koalitionsverhandlungen mit der Linken gestimmt. Die Linke entscheidet erst am 31.10. auf einem Landesparteitag; zu neuen Positionierungen einzelner Landesverbände seit dem 20.10. liegen keine Berichte vor.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was zeigen neue bundesweite Umfragen?", items: [
          { tag: "unbestaetigt", text: "INSA (für Bild, veröffentlicht 20.10., Erhebung 16.–19.10., n=2.002) sieht die AfD bei 30 %; Forsa (für RTL/ntv, veröffentlicht 20.10., Erhebung 13.–19.10., n=2.502) sieht die AfD bei 27 %. Eine Aggregation mehrerer Institute (dawum.de, Stand 20.10.) nennt für die AfD 26,4 %, für die Union 22,1 %, für die Grünen 15,4 %, für die SPD 14,1 %, für die Linke 9,6 %. Die Institute unterscheiden sich damit weiterhin deutlich, stimmen aber darin überein, dass die AfD stärkste Kraft bleibt.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was zeigen aktuelle Umfragen in Bayern?", items: [
          { tag: "unbestaetigt", text: "Infratest dimap (20.10.) sieht in Bayern die CSU bei 36 %, die AfD bei 21 %, die Grünen bei 15 %, die Freien Wähler bei 9 %, die SPD bei 8 % und die Linke bei 4 %. GMS (19.10.) sieht die CSU bei 37 %, die AfD bei 22 %, die Grünen bei 15 %, die Freien Wähler bei 10 %, die SPD bei 6 %, die Linke bei 3 % und die FDP bei 2 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich an der Berliner Koalitionsbildung seit den Abstimmungen vom 19.10. nichts Wesentliches verändert hat, während bundesweite und bayerische Umfragen je nach Institut weiterhin deutlich voneinander abweichen, zeigt, wie unterschiedlich die aktuelle politische Stimmungslage in Deutschland je nach Erhebungsmethode eingeschätzt wird." }
        ]}
      ],
      reaction: "Der Bundeshaushalt und die Rede von Bundeskanzler Merz werden in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "ZDFheute: Berlin – SPD, Grüne und Linke auf dem Weg zu Koalitionsverhandlungen", url: "https://www.zdfheute.de/politik/deutschland/berlin-rot-rot-gruen-spd-gruene-linke-koalition-verhandlungen-100.html" },
        { title: "dawum.de: Bundestag – INSA", url: "https://dawum.de/Bundestag/INSA/" },
        { title: "dawum.de: Bundestag – Forsa", url: "https://dawum.de/Bundestag/Forsa/" },
        { title: "dawum.de: Bayern – Infratest dimap", url: "https://dawum.de/Bayern/Infratest_dimap/2026-10-20/" }
      ]
    },

    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE/WITKOFF-PUTIN */
    {
      id: "ukraine-witkoff-putin-zelensky-frontlinie-10-22", cats: ["world", "geo"], when: "Russische Angriffe Nacht 20./21. und 21./22.10. · Witkoff-Putin-Treffen 21.10. · De-Wever-Äußerung 21.10. · Zelensky-Interview 21.10.2026",
      headline: "US-Sondergesandter Witkoff trifft Putin, Präsident Selenskyj zeigt sich offen für ein Einfrieren der Frontlinie, Belgien bleibt bei seiner Haltung zu eingefrorenen russischen Vermögenswerten",
      sec30: "In den Nächten zum 21. und 22.10. griff Russland mehrere ukrainische Regionen mit Drohnen und Raketen an; nach ukrainischen, unabhängig nicht überprüften Angaben gab es dabei mindestens 11 Tote und rund 79 Verletzte, während Russland die Abwehr von mehr als 800 ukrainischen Drohnen meldete. US-Sondergesandter Steve Witkoff traf Kreml-Chef Putin am 21.10. zu einem rund dreistündigen Gespräch; laut Kreml ist Putin bereit, Mitte November trilaterale Gespräche wieder aufzunehmen, möglicher Ort Abu Dhabi. Präsident Selenskyj sagte am selben Tag in einem Fernsehinterview, er sei offen für ein Einfrieren der aktuellen Frontlinie als ersten Schritt, verbunden mit der Forderung nach belastbaren Sicherheitsgarantien. Belgiens Premier De Wever bekräftigte im Parlament, die EU werde keinen neuen Vorschlag zur Nutzung eingefrorener russischer Vermögenswerte vorlegen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "unbestaetigt", text: "In der Nacht zum 21.10. griff Russland nach ukrainischen Angaben mit 98 Drohnen und 6 Raketen mehrere Regionen an (Kiew, Charkiw, Krementschuk, Mykolajiw, Tschernihiw, Donezk, Saporischschja); die Ukraine habe 58 Drohnen abgefangen. Mindestens 9 Tote und 45 Verletzte wurden gemeldet – nach eigenen, unabhängig nicht überprüften Angaben." },
          { tag: "unbestaetigt", text: "In der Nacht zum 22.10. griff Russland nach ukrainischen Angaben 12 Regionen an; mindestens 2 Tote und 34 Verletzte wurden gemeldet, davon allein in Kiew 1 Tote und 24 Verletzte, darunter nach diesen Angaben 5 Jugendliche und 2 Kleinkinder." },
          { tag: "unbestaetigt", text: "Russland meldete im gleichen Zeitraum die Abwehr von mehr als 800 ukrainischen Drohnen – ebenfalls eine einseitige, unabhängig nicht überprüfte Angabe." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "fakt", text: "US-Sondergesandter Steve Witkoff traf Kreml-Chef Putin am 21.10. zu einem rund dreistündigen Gespräch (Berichte nennen unterschiedliche Orte: ein Palast bei St. Petersburg oder Moskau); Jared Kushner war per Video zugeschaltet." },
          { tag: "position", text: "Nach Kreml-Angaben ist Putin bereit, Mitte November (rund 10. bis 19.11.) trilaterale Gespräche über ein „Sicherheitssystem für Russland und Ukraine” wieder aufzunehmen, möglicher Ort Abu Dhabi; Russland erklärte zudem, die Ukraine müsse „notwendige Entscheidungen” treffen, um den Krieg zu beenden. Als Geste gab Russland den seit über vier Jahren inhaftierten US-Bürger Stephen Hubbard (74) frei." },
          { tag: "position", text: "Präsident Selenskyj sagte am 21.10. in einem Fox-News-Interview, er sei bereit, einem Einfrieren der aktuellen Frontlinie (die rund 75 % des ukrainischen Staatsgebiets unter ukrainischer Kontrolle beließe) als ersten Schritt zu einem Friedensabkommen zuzustimmen, fordere dafür aber von den USA und europäischen Partnern belastbare Sicherheitsgarantien, damit Ukrainer nicht fürchten müssten, „that occupation returns, aggression returns, killings return”." }
        ]},
        { h: "Welche diplomatischen Entwicklungen gab es sonst?", items: [
          { tag: "unbestaetigt", text: "Berichten vom 19./20.10. zufolge erwägt Präsident Trump ein mögliches Dreiertreffen mit Putin und Chinas Staatschef Xi am Rande des APEC-Gipfels in Shenzhen (18./19.11.); Trump nannte als Fokus „nuclear weapons and denuclearization”, nicht primär die Ukraine. China hat bislang keine Bereitschaft dafür signalisiert." },
          { tag: "fakt", text: "Belgiens Premierminister Bart De Wever erklärte am 21.10. im Parlament, er sei zuversichtlich, dass die EU-Kommission keinen neuen Vorschlag zur Nutzung der rund 185 Mrd. Euro eingefrorener russischer Zentralbankgelder bei Euroclear vorlegen werde; er kritisierte eine Äußerung des niederländischen Premiers Rob Jetten, der von einer „Beschlagnahmung” des Geldes gesprochen hatte, als möglicherweise rechtlich folgenreich." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Die von der EU-Kommission genannte Finanzierungslücke der Ukraine von 70 Mrd. Euro für 2027 bleibt damit ungelöst, da Belgien seine Blockade gegen die Nutzung der eingefrorenen Vermögenswerte nicht aufgegeben hat.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich gleichzeitig ein neuer diplomatischer Kanal über Witkoff und eine mögliche Kompromissbereitschaft Selenskyjs zu einem Einfrieren der Frontlinie andeuten, während sich an den gegenseitigen Angriffen und an der ungelösten EU-Finanzierungsfrage nichts geändert hat, zeigt, wie weit militärisches Geschehen und diplomatische Signale derzeit noch auseinanderliegen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, die China-Taiwan-Spannungen in Meldung 9.",
      terms: [],
      followups: ["e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "Kyiv Independent: At least 2 killed, 2 injured in Russian drone attack on Kyiv", url: "https://kyivindependent.com/at-least-2-killed-2-injured-in-russian-drone-attack-on-kyiv/" },
        { title: "Ukrinform: Russen fliegen in der Nacht Angriffe auf 12 Regionen der Ukraine", url: "https://www.ukrinform.de/rubric-ato/4177033-russen-fliegen-in-der-nacht-angriffe-auf-12-regionen-der-ukraine-zwei-tote-34-verletzte.html" },
        { title: "CNN: US envoy Witkoff holds talks with Putin on Russia-Ukraine war", url: "https://www.cnn.com/2026/10/21/europe/us-envoy-witkoff-putin-talks-russia-ukraine-intl" },
        { title: "Foreign Policy: US-Ukraine peace plan – Zelensky, Witkoff, Oslo talks, Putin", url: "https://foreignpolicy.com/2026/10/21/us-ukraine-peace-plan-zelensky-witkoff-oslo-talks-putin/" },
        { title: "Anews/Interfax: Belgian premier says EU will not propose using frozen Russian assets for Ukraine", url: "https://www.anews.com.tr/world/2026/10/21/belgian-premier-says-eu-will-not-propose-using-frozen-russian-assets-for-ukraine" },
        { title: "Axios: Trump summit Xi Putin denuclearization Ukraine", url: "https://www.axios.com/2026/10/19/trump-summit-xi-putin-denuclearization-ukraine" }
      ]
    },

    /* 8 GEOPOLITIK: HORMUZ/JEMEN/SAUDI-ARABIEN */
    {
      id: "hormuz-jemen-saudi-dammam-shaybah-10-22", cats: ["geo"], when: "Angriffe Dammam/Shaybah 21.10. · IRGC-Tankermeldungen 21.10. · Jemen-Offensive seit 5.10.2026",
      headline: "Angriffe auf den Flughafen Dammam und das Aramco-Ölfeld Shaybah fordern mehrere Tote, Iran meldet weitere Tankerbrände in der Straße von Hormus",
      sec30: "Am 21.10. wurden bei einem Angriff auf den Flughafen King Fahd in Dammam (Saudi-Arabien) zwei Menschen getötet und acht verletzt; ein Drohnenangriff auf das Aramco-Ölfeld Shaybah wurde abgefangen, forderte nach Berichten aber ebenfalls zwei Tote durch Trümmer. Die iranische Revolutionsgarde meldete am 21.10. zwei bis drei weitere Tankerbrände in der Straße von Hormus nach angeblichen Minentreffern und behauptete, eine US-Drohne abgeschossen zu haben – von CENTCOM nicht bestätigt beziehungsweise zurückgewiesen. Im Jemen hält die saudisch unterstützte Offensive „Operation Dawn of Yemen” gegen die Houthi an; diese feuerten am 21.10. Raketen auf die Flughäfen Aden und Mukalla. Der Ölpreis stieg als Reaktion auf rund 110 bis 112 Dollar je Barrel Brent.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Bei einem Angriff auf den Flughafen King Fahd International Airport in Dammam (Saudi-Arabien) am Abend des 21.10. wurden zwei Menschen getötet (ein saudischer und ein indischer Staatsbürger) und acht verletzt, zudem entstand Sachschaden." },
          { tag: "fakt", text: "Ein Drohnenangriff auf das Aramco-Ölfeld Shaybah wurde am 21.10. abgefangen; dennoch wurden laut Berichten zwei Menschen (philippinischer und nepalesischer Staatsangehöriger) durch Trümmer oder Folgeschäden getötet und zwei weitere verletzt." },
          { tag: "unbestaetigt", text: "Die iranische Revolutionsgarde (IRGC) meldete am 21.10. zwei bis drei weitere Tankerbrände in der Straße von Hormus nach angeblichen Minentreffern auf einer „nicht genehmigten Route” sowie den Abschuss einer US-Drohne (MQ-9 Reaper) – von CENTCOM als falsch zurückgewiesen; eine unabhängige Bestätigung fehlt." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "unbestaetigt", text: "Ein weiterer Tanker vor Oman (rund 11 Seemeilen westlich von Bakha) wurde am 21.10. von einem unbekannten Projektil getroffen und geriet in Brand; die UKMTO bestätigte den Vorfall, das Feuer sei unter Kontrolle, die Besatzung unverletzt, der Ursprung des Projektils blieb unklar. Laut dem Datendienst Kpler gab es in den vorangegangenen zwei Wochen mindestens 18 Angriffe auf Schiffe in der Region." },
          { tag: "position", text: "CENTCOM hält an seiner Einschätzung fest, dass rund 97 % der Schiffe die Straße von Hormus weiterhin erfolgreich passieren und am 12.10. über 19 Mio. Barrel Öl sicher durchgeschleust worden seien – nach CENTCOM-Angaben." }
        ]},
        { h: "Wie ist der Stand im Jemen?", items: [
          { tag: "unbestaetigt", text: "Jemenitische Regierungstruppen meldeten am 21.10. 835 Angriffe auf Houthi-Ziele binnen 24 Stunden und gaben an, dabei 285 Kämpfer und Kommandeure „neutralisiert” sowie rund 190 Fahrzeuge und Ausrüstungsgegenstände zerstört zu haben – eine einseitige, unabhängig nicht überprüfbare Angabe der Konfliktpartei." },
          { tag: "fakt", text: "Houthi-Kräfte feuerten am 21.10. ballistische Raketen auf die Flughäfen in Aden und Mukalla (al-Rayyan) sowie auf eine Fabrik in Taiz; die jemenitische Regierung macht die Houthi offiziell für die Angriffe verantwortlich." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Der Ölpreis stieg am 21.10. als Reaktion auf die Angriffe in Saudi-Arabien auf rund 110,40 Dollar (Brent, +1,4 %) beziehungsweise 99,95 Dollar (WTI, +2,2 %), obwohl der Schiffsverkehr durch die Straße von Hormus nach CENTCOM-Angaben grundsätzlich hoch bleibt.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] },
          { tag: "unbestaetigt", text: "Der Flughafen Riad (King Khalid International Airport) ist seit dem 18./19.10. offiziell wieder geöffnet, laut Berichten sind aber weiterhin rund 34 bis 66 % der Flüge annulliert oder ausgesetzt; jede Landung und jeder Abflug benötigt eine Sondergenehmigung der saudischen Luftfahrtbehörde GACA. Die US-Botschaft in Riad gab am 21.10. eine neue Sicherheitswarnung heraus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Angriffe nun verstärkt gegen saudische Energie- und Flughafeninfrastruktur richten, während gleichzeitig weiterhin widersprüchliche Angaben zur Lage in der Straße von Hormus kursieren, zeigt, wie unübersichtlich und angespannt die Lage am Golf bleibt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis in Meldung 15.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: One killed, eight injured in attack on Saudi Arabia's King Fahd airport", url: "https://www.aljazeera.com/news/2026/10/22/one-killed-eight-injured-in-attack-on-saudi-arabias-king-fahd-airport-2" },
        { title: "Arabian Business: Saudi Arabia attacks kill 3 and injure 10 at Dammam airport and Aramco oilfield", url: "https://www.arabianbusiness.com/abnews/saudi-arabia-attacks-kill-3-and-injure-10-at-dammam-airport-and-aramco-oilfield" },
        { title: "Al-Monitor: IRGC claims it downed US drone, set two tankers ablaze near Hormuz", url: "https://www.al-monitor.com/originals/2026/10/irgc-claims-it-downed-us-drone-set-two-tankers-ablaze-near-hormuz" },
        { title: "Arab News: Ship attacked near Strait of Hormuz, maritime agency says", url: "https://www.arabnews.com/middle-east/ship-attacked-near-strait-of-hormuz-maritime-agency-3007496" },
        { title: "Arab News: Yemeni forces claim 835 strikes against Houthi targets in 24 hours", url: "https://www.arabnews.com/middle-east/yemeni-forces-claim-835-strikes-against-houthi-targets-in-24-hours-3007576" },
        { title: "The National: Riyadh airport reopens – which airlines are still cancelling flights to Saudi Arabia", url: "https://www.thenationalnews.com/travel/2026/10/19/riyadh-airport-reopens-which-airlines-are-still-cancelling-flights-to-saudi-arabia/" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: CHINA-TAIWAN */
    {
      id: "china-taiwan-spannungen-pratas-cyberangriffe-10-22", cats: ["world", "geo"], when: "Pratas-Zwischenfälle 18./20.10. · Taiwan-Kommunalwahlen anstehend · US-Einschätzung laufend",
      headline: "Taiwan meldet verstärkte chinesische Cyberangriffe vor Kommunalwahlen, Zwischenfälle zwischen Küstenwachen um die Pratas-Inseln halten an",
      sec30: "Taiwan berichtete zuletzt von durchschnittlich rund 2,6 Mio. chinesischen Cyberangriffen pro Tag im Jahr 2026 sowie verstärkter Desinformation vor anstehenden Kommunalwahlen. Am 18. und 20.10. kam es zu Konfrontationen zwischen chinesischer Küstenwache beziehungsweise Marine und taiwanischen Kräften um die Pratas-Inseln; Taiwan erklärte, 16 chinesische Schiffe wegen mutmaßlicher „maritimer Belästigung” vertrieben zu haben. US-Geheimdienste gehen laut Berichten weiterhin davon aus, dass eine chinesische Invasion vor 2028 unwahrscheinlich bleibt.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Taiwan meldete für 2026 durchschnittlich rund 2,6 Mio. chinesische Cyberangriffe pro Tag sowie verstärkte Desinformationskampagnen vor anstehenden taiwanischen Kommunalwahlen." },
          { tag: "fakt", text: "Am 18. und 20.10. kam es zu Konfrontationen zwischen chinesischer Küstenwache beziehungsweise Marine und taiwanischen Kräften um die Pratas-Inseln im Südchinesischen Meer; Taiwan erklärte, 16 chinesische Schiffe wegen mutmaßlicher „maritimer Belästigung” vertrieben zu haben." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "Taiwan wirft China vor, mit Cyberangriffen und Desinformation gezielt Einfluss auf die anstehenden Kommunalwahlen nehmen zu wollen. Eine offizielle Reaktion Pekings auf diesen konkreten Vorwurf liegt in den verfügbaren Quellen nicht vor." }
        ]},
        { h: "Welcher historische Hintergrund spielt eine Rolle?", items: [
          { tag: "fakt", text: "Die Pratas-Inseln werden von Taiwan verwaltet, liegen aber näher an der chinesischen Küste; sie sind seit Jahren wiederkehrender Schauplatz von Spannungen zwischen chinesischen und taiwanischen Kräften, ohne dass es bislang zu offener militärischer Eskalation kam." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "US-Geheimdienste gehen laut Berichten weiterhin davon aus, dass eine chinesische Invasion Taiwans vor 2028 unwahrscheinlich bleibt; Taiwan ist für die weltweite Chipproduktion von zentraler Bedeutung, was mögliche Eskalationen auch für globale Lieferketten relevant macht.",
            ask: [{ label: "Mehr zur EU-Handelspolitik gegenüber China", ref: "s:5" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Zwischenfälle um die Pratas-Inseln und die chinesischen Cyberangriffe vor den Kommunalwahlen fortsetzen, ohne dass sich an der grundsätzlichen Lage etwas verändert hat, passt zu einem seit Jahren andauernden Muster wiederkehrender, aber bislang nicht offen militärisch eskalierender Spannungen." }
        ]}
      ],
      reaction: "Die deutsche Position zur EU-China-Handelspolitik wird in Meldung 5 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: [],
      sources: [
        { title: "Malay Mail: Taiwan says China ramps up cyberattacks and disinformation before elections", url: "https://malaymail.com/news/world/2026/10/21/taiwan-says-china-ramps-up-cyberattacks-and-disinformation-before-elections/240026" },
        { title: "Al Jazeera: Taiwan drives away 16 Chinese ships accused of maritime harassment", url: "https://www.aljazeera.com/news/2026/10/18/taiwan-drives-away-16-chinese-ships-accused-of-maritime-harassment" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL */
    {
      id: "defence-rheinmetall-arminius-leonardo-italien-10-22", cats: ["defence"], when: "Berenberg/UBS-Kürzungen 20./21.10. · Leonardo-Rheinmetall-Aufträge 21.10. · Mangalia-Zuschlag 19./20.10.2026",
      headline: "Analysten kürzen Kursziele für Rheinmetall deutlich wegen Zweifeln am Arminius-Programm, das Gemeinschaftsunternehmen mit Leonardo erhält gleichzeitig Großaufträge der italienischen Armee über 3,7 Milliarden Euro",
      sec30: "Die Rheinmetall-Aktie geriet am 21.10. unter Verkaufsdruck und schloss bei 1.020,00 Euro (−3,21 %), nachdem Berenberg sein Kursziel von 1.600 auf 1.020 Euro gesenkt und von „Buy” auf „Hold” herabgestuft hatte; UBS senkte sein Kursziel von 1.600 auf 1.360 Euro, behielt aber die Kaufempfehlung. Branchenberichte sprechen von einer möglichen Kürzung des erwarteten Arminius-Auftragswerts, eine offizielle Bestätigung dazu gibt es nicht. Gleichzeitig erhielt das Gemeinschaftsunternehmen „Leonardo Rheinmetall Military Vehicles” am 21.10. zwei Großaufträge der italienischen Armee über zusammen 3,7 Mrd. Euro, und Rheinmetall gewann zusammen mit der Reederei MSC den Zuschlag für die rumänische Werft Mangalia (rund 138 Mio. Euro).",
      blocks: [
        { h: "Warum senkten Analysten ihre Kursziele für Rheinmetall?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie schloss am 21.10. bei 1.020,00 Euro (−3,21 % gegenüber 1.054 Euro am Vortag) unter Verkaufsdruck." },
          { tag: "fakt", text: "Berenberg senkte sein Kursziel für Rheinmetall von 1.600 auf 1.020 Euro (−36 %) und stufte die Aktie von „Buy” auf „Hold” herab; UBS senkte sein Kursziel von 1.600 auf 1.360 Euro, beließ die Einstufung aber bei „Buy” (20./21.10.).",
            ask: [{ label: "Mehr zum DAX-Anstieg am Mittwoch", ref: "n:dax" }] },
          { tag: "unbestaetigt", text: "Branchenberichte (unter anderem Boerse-Express, Investing.com) sprechen von einer möglichen Kürzung des erwarteten Arminius-Auftragswerts um rund 9 Mrd. Euro (von rund 32 auf 23 Mrd. Euro Gesamtschätzung) – ausdrücklich als Analystenschätzung, nicht als offizielle Bestätigung durch Rheinmetall zu werten. Die parlamentarische Befassung ist weiterhin für den 9.12.2026 terminiert, ein Dienstleistungsvertrag über 4 Mrd. Euro soll im Januar 2027 folgen." }
        ]},
        { h: "Welche neuen Aufträge erhielt Rheinmetall gleichzeitig?", items: [
          { tag: "fakt", text: "Das Gemeinschaftsunternehmen „Leonardo Rheinmetall Military Vehicles” erhielt am 21.10. von der italienischen Armee zwei Großaufträge über zusammen 3,7 Mrd. Euro – für das Schützenpanzerprogramm A2CS sowie einen ersten Auftrag für einen neuen Kampfpanzer; das Gesamtprogrammvolumen bis 2037/2040 wird auf rund 23 Mrd. Euro geschätzt." },
          { tag: "fakt", text: "Rheinmetall gewann zusammen mit der Schweizer/italienischen Reederei MSC am 19./20.10. die Ausschreibung für die rumänische Werft Mangalia am Schwarzen Meer für rund 138 Mio. Euro, unter anderem für zwei Offshore-Patrouillenboote für Rumänien." },
          { tag: "fakt", text: "Rheinmetall veröffentlicht seine Q3-Zahlen am 5.11.2026; im Pre-Close-Statement bestätigte das Unternehmen die Jahresprognose (Umsatzwachstum 37 bis 42 %, operative Marge rund 19 %)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Analysten ihre Kursziele wegen Zweifeln am Arminius-Programm deutlich senken, während Rheinmetall über sein italienisches Gemeinschaftsunternehmen gleichzeitig neue Milliardenaufträge erhält, zeigt, wie unterschiedlich einzelne Programme und Standbeine des Konzerns derzeit bewertet werden." }
        ]}
      ],
      reaction: "Weitere internationale Rüstungsaufträge werden in Meldung 11 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "wallstreet-online.de: Beachtet! Rheinmetall-Aktie – Verkaufsdruck", url: "https://wallstreet-online.de/nachricht/21560111-beachtet-rheinmetall-aktie-verkaufsdruck-21-10-2026" },
        { title: "wallstreet-online.de: Rheinmetall – Berenberg kappt Kursziel, 36 Prozent, Wachstum wackelt", url: "https://www.wallstreet-online.de/nachricht/21506725-rheinmetall-berenberg-kappt-kursziel-36-prozent-wachstum-wackelt" },
        { title: "ad-hoc-news.de: Rheinmetall stock – UBS cuts target to EUR 1,360.00", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/rheinmetall-stock-ubs-cuts-target-to-eur-1-360-00/70385697" },
        { title: "defence-industry.eu: Rheinmetall wins joint bid for Romania's Mangalia shipyard", url: "https://defence-industry.eu/rheinmetall-wins-joint-bid-for-romanias-mangalia-shipyard-to-build-naval-vessels-and-expand-civilian-production-on-the-black-sea/" },
        { title: "Leonardo: The partnership between Leonardo and Rheinmetall", url: "https://www.leonardo.com/en/news-and-stories-detail/-/detail/the-partnership-between-leonardo-rheinmetall" },
        { title: "finanznachrichten.de: Rheinmetall AG Q3 Pre-Close – Die Kriegsführung wandelt sich erneut, Halten", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69763543-rheinmetall-ag-q3-pre-close-die-kriegsfuehrung-wandelt-sich-erneut-halten-098.htm" }
      ]
    },

    /* 11 DEFENCE: RTX/ANDURIL/SAAB */
    {
      id: "defence-rtx-saab-project-meridian-10-22", cats: ["defence"], when: "RTX-Radarvertrag 21.10. · Javelin-Auftrag 19.10. · Saab-Gripen-Auftrag 15.10.2026",
      headline: "RTX erhält höhere Vertragsobergrenze für Radarsysteme, Saab bekommt Gripen-Auftrag aus Schweden, die Kritik an Palmer Luckeys Pentagon-Rolle hält an",
      sec30: "RTX erhielt am 21.10. eine Erhöhung der Vertragsobergrenze für AN/TPS-Radarsysteme von 2,61 auf 3 Mrd. Dollar, ein RTX/Lockheed-Martin-Gemeinschaftsunternehmen zuvor am 19.10. einen 215-Mio.-Dollar-Auftrag der US Army für Javelin-Abschussgeräte. Saab erhielt bereits am 15.10. von der schwedischen Beschaffungsbehörde FMV einen Auftrag über 1,3 Mrd. schwedische Kronen (rund 116 Mio. Euro) für einen neuen Flugsteuerrechner für das Kampfflugzeug Gripen. Die Kritik an der Berufung von Anduril-Mitgründer Palmer Luckey in das Pentagon-Zukunftsgremium „Project Meridian” wegen möglicher Interessenkonflikte hält unverändert an.",
      blocks: [
        { h: "Welche neuen Aufträge erhielten RTX und Saab?", items: [
          { tag: "fakt", text: "RTX erhielt am 21.10. eine Vertragsänderung für AN/TPS-Radarsysteme, bei der die Vertragsobergrenze von 2,61 auf 3 Mrd. Dollar angehoben wurde, mit Laufzeit bis Oktober 2028." },
          { tag: "fakt", text: "Ein Gemeinschaftsunternehmen von RTX und Lockheed Martin erhielt am 19.10. einen 215-Mio.-Dollar-Auftrag der US Army für leichte Javelin-Abschussgeräte mit Kommunikationsmodul." },
          { tag: "fakt", text: "Saab erhielt am 15.10. von der schwedischen Beschaffungsbehörde FMV einen Auftrag über 1,3 Mrd. schwedische Kronen (rund 116 Mio. Euro) für einen neuen Flugsteuerrechner für das Kampfflugzeug Gripen, Lieferung ab 2030." }
        ]},
        { h: "Wie ist der Stand bei „Project Meridian” und Palmer Luckey?", items: [
          { tag: "fakt", text: "US-Verteidigungsminister Pete Hegseth hatte Ende September Anduril-Mitgründer Palmer Luckey gemeinsam mit Elon Musk und dem früheren Kongressabgeordneten Newt Gingrich in das auf 120 Tage angelegte Pentagon-Projekt „Project Meridian: The Future of Warfare” berufen.",
            ask: [{ label: "Mehr zum Anduril-Navy-Auftrag", ref: "e:defence-stocks" }] },
          { tag: "position", text: "Die Kritik an möglichen Interessenkonflikten, da sowohl Anduril als auch Musks SpaceX von den Empfehlungen der Studie profitieren könnten, hält laut Berichten unverändert an; die 120-tägige Studie läuft weiter, Ergebnisse stehen noch aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl etablierte Rüstungskonzerne wie RTX und Saab weiterhin neue Aufträge erhalten als auch die Debatte um Interessenkonflikte bei Anduril und Palmer Luckey anhält, spiegelt die anhaltend engen und teils umstrittenen Verbindungen zwischen Industrie und Verteidigungsministerien wider." }
        ]}
      ],
      reaction: "Rheinmetall und die europäische Rüstungsindustrie werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "Gurufocus: Raytheon Technologies (RTX) secures $3 billion contract extension for radar systems", url: "https://www.gurufocus.com/news/9135252/raytheon-technologies-rtx-secures-3-billion-contract-extension-for-radar-systems" },
        { title: "RTX: U.S. Army awards Javelin joint venture $215 million contract", url: "https://www.rtx.com/news/news-center/2026/10/19/u-s-army-awards-javelin-joint-venture-215-million-contract-for-lightweight-comm" },
        { title: "militaeraktuell.at: Saab-Auftrag für neuen Gripen-Computer", url: "https://militaeraktuell.at/saab-auftrag-neuen-gripen-computer/" },
        { title: "The Hill: Project Meridian Pentagon conflict", url: "https://thehill.com/opinion/national-security/6139986-project-meridian-pentagon-conflict/" }
      ]
    },

    /* 12 DEALS/PE: EQT/QIAGEN, SALESFORCE/BRAZE */
    {
      id: "deals-eqt-qiagen-salesforce-braze-cvc-verisure-10-22", cats: ["deals", "pe"], when: "EQT/Qiagen-Einigung 21./22.10. · Salesforce/Braze 20.10. · CVC/Verisure-Berichte 21.10.2026",
      headline: "EQT übernimmt den DAX-Konzern Qiagen für rund 10,8 Milliarden Euro, Salesforce kauft Braze für 5,66 Milliarden Dollar",
      sec30: "Der Finanzinvestor EQT (über die Holding Crown NL Bidco) und Qiagen N.V. einigten sich am 21./22.10. auf ein freiwilliges öffentliches Übernahmeangebot: 46,50 Euro je Aktie in bar, Unternehmenswert rund 10,8 Mrd. Euro, eine Prämie von 40,3 % auf den unbeeinflussten Kurs vom 8.7.2026. Vorstand und Aufsichtsrat von Qiagen unterstützen das Angebot einstimmig; der Vollzug wird für Mitte 2027 erwartet. Laut Handelsblatt ging dem ein Bieterwettstreit mit KKR voraus. Salesforce gab am 20.10. eine endgültige Vereinbarung zur Übernahme des Software-Anbieters Braze für rund 5,66 Mrd. Dollar bekannt (47,50 Dollar je Aktie in bar). Zudem prüft laut Berichten der Finanzinvestor CVC ein Delisting-Angebot für den Sicherheitsdienstleister Verisure, und der Fondsanbieter Pantheon schloss einen Secondaries-Fonds bei 6 Mrd. Dollar.",
      blocks: [
        { h: "Was wurde bei EQT/Qiagen angekündigt?", items: [
          { tag: "fakt", text: "Crown NL Bidco B.V. (EQT Private Equity) und Qiagen N.V. gaben am 21./22.10. die Einigung über ein freiwilliges öffentliches Übernahmeangebot bekannt: 46,50 Euro je Aktie in bar, Unternehmenswert rund 10,8 Mrd. Euro, eine Prämie von 40,3 % auf den unbeeinflussten Kurs vom 8.7.2026 beziehungsweise 46,9 % auf den 3-Monats-Durchschnittskurs. Mindestannahmeschwelle ist mehr als 50 % der Aktien, der Vollzug wird für Mitte 2027 erwartet; Vorstand und Aufsichtsrat unterstützen das Angebot einstimmig.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "unbestaetigt", text: "Laut Berichten sind an der Finanzierung auch Investoren aus Abu Dhabi (ADIA) und Kanada (CPP Investments) beteiligt; konkrete Angaben zu Finanzierungsstruktur und beratenden Banken nennen die verfügbaren Quellen nicht." },
          { tag: "position", text: "Laut Handelsblatt ging der Einigung ein Bieterwettstreit zwischen EQT und dem Finanzinvestor KKR voraus." }
        ]},
        { h: "Was wurde bei Salesforce/Braze angekündigt?", items: [
          { tag: "fakt", text: "Salesforce gab am 20.10. eine endgültige Vereinbarung zur Übernahme des Marketing- und Customer-Engagement-Software-Anbieters Braze für rund 5,66 Mrd. Dollar bekannt (47,50 Dollar je Aktie in bar); der Abschluss wird im Fiskaljahr 2028 von Salesforce erwartet, vorbehaltlich der Zustimmung der Aktionäre und der Kartellbehörden.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was ist der Stand bei weiteren Deals?", items: [
          { tag: "unbestaetigt", text: "Laut Financial Times und Reuters (21.10.) prüft der Finanzinvestor CVC ein Delisting-Angebot für den Sicherheitsdienstleister Verisure – nur rund ein Jahr nach dessen Börsengang durch Hellman & Friedman (Oktober 2025, Bewertung 13,7 Mrd. Euro); der aktuelle Marktwert liegt nur noch bei rund 9,7 Mrd. Euro. Weder CVC noch Verisure haben dies bestätigt, ein Deal-Wert liegt nicht vor." },
          { tag: "fakt", text: "Der Fondsanbieter Pantheon schloss am 21.10. seinen Secondaries-Fonds VIII bei 6 Mrd. Dollar – 71 % über dem ursprünglichen Zielvolumen von 3,5 Mrd. Dollar, bei starker Nachfrage aus Asien und dem Nahen Osten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass binnen wenigen Tagen gleich mehrere Milliarden-Deals in unterschiedlichsten Branchen – Diagnostik, Software, Sicherheitsdienstleistungen – angekündigt oder erwogen wurden, passt zu einer anhaltend aktiven M&A- und Private-Equity-Welle." }
        ]}
      ],
      deal: { value: "10,8 Mrd. € (EQT/Qiagen) · 5,66 Mrd. $ (Salesforce/Braze)", buyer: "EQT Private Equity (Crown NL Bidco) · Salesforce", target: "Qiagen N.V. · Braze", sector: "Diagnostik/Biotech-Software / Marketing-Software", type: "Take-private & Unternehmensübernahme" },
      reaction: "Der Private-Credit-Markt wird in Meldung 13 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why"],
      sources: [
        { title: "finanznachrichten.de: Qiagen-Aktie – EQT bietet 46,50 Euro, Übernahme für 10,8 Milliarden Euro geplant", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69903698-qiagen-aktie-eqt-bietet-46-50-euro-uebernahme-fuer-10-8-milliarden-euro-geplant-424.htm" },
        { title: "Bloomberg: EQT Nears $9.6 Billion Deal for Molecular Testing Firm Qiagen", url: "https://www.bloomberg.com/news/articles/2026-10-21/eqt-nears-9-6-billion-deal-for-molecular-testing-firm-qiagen" },
        { title: "Handelsblatt: Qiagen-Übernahme – warum EQT und KKR um den Dax-Konzern ringen", url: "https://www.handelsblatt.com/unternehmen/industrie/qiagen-uebernahme-warum-eqt-und-kkr-um-den-dax-konzern-ringen/100263996.html" },
        { title: "Salesforce: Salesforce Signs Definitive Agreement to Acquire Braze", url: "https://www.salesforce.com/news/press-releases/2026/10/20/salesforce-signs-definitive-agreement-to-acquire-braze/" },
        { title: "MarketScreener: CVC explores Verisure take-private bid a year after listing, FT reports", url: "https://www.marketscreener.com/news/cvc-explores-verisure-take-private-bid-a-year-after-listing-ft-reports-ce785cd9dd88f525" },
        { title: "GlobeNewswire: Pantheon exceeds target with $6bn for its latest global private equity secondaries program", url: "https://www.globenewswire.com/news-release/2026/10/21/3385483/0/en/pantheon-exceeds-target-with-6bn-for-its-latest-global-private-equity-secondaries-program.html" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-sp-blackstone-bcred-moodys-fitch-10-22", cats: ["credit", "pe"], when: "S&P-Blackstone-BCRED-Herabstufung 16.10. · Moody's-Bericht 14.10. · Fitch-Rekordwert 14.9.2026",
      headline: "S&P stuft den Ausblick für Blackstones Private-Credit-Flaggschifffonds BCRED von „positiv” auf „stabil” herab, Moody's- und Fitch-Warnungen zu Ausfällen bleiben aktuell",
      sec30: "S&P Global Ratings senkte am 16.10. den Ausblick für den Blackstone Private Credit Fund (BCRED) von „positiv” auf „stabil”, nach Abschreibungen bei Krediten aus den Jahrgängen 2021/22, die den Nettoinventarwert belastet haben; die Liquidität für Rücknahmen bis zu 5 % des Nettoinventarwerts hält S&P weiterhin für ausreichend. Die bereits bekannten Warnungen bleiben aktuell: Moody's hatte am 14.10. berichtet, die um PIK-Effekte bereinigte Private-Credit-Ausfallrate liege bei 5,8 % statt offiziell 4,0 %; Fitch hatte im September eine Rekord-Ausfallrate von 6,3 % gemeldet, und Blue Owl hatte Anfang Oktober erneut Rücknahmen bei zwei Fonds auf 5 % begrenzt.",
      blocks: [
        { h: "Was hat S&P beim Blackstone-Fonds BCRED geändert?", items: [
          { tag: "fakt", text: "S&P Global Ratings senkte am 16.10. den Ausblick für den Blackstone Private Credit Fund (BCRED) – einen der größten Private-Credit-Fonds für Privatanleger – von „positiv” auf „stabil”. Als Grund nennt S&P Abschreibungen bei Krediten aus den Jahrgängen 2021/22, die den Nettoinventarwert (NAV) belastet haben.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "fakt", text: "S&P hält die Liquidität des Fonds für Rücknahmen bis zu einem vertraglichen Höchstwert von 5 % des Nettoinventarwerts weiterhin für ausreichend.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Wie stellen sich die bereits bekannten Warnungen von Moody's und Fitch dar?", items: [
          { tag: "fakt", text: "Moody's hatte am 14.10. berichtet, die offizielle Ausfallrate bei untersuchten Private-Credit-Schuldnern liege bei 4,0 %, steige aber auf 5,8 %, wenn PIK-Zinszahlungen und Laufzeitverlängerungen bei finanziell angespannten Firmen als Ausfall gewertet würden.",
            ask: [{ label: "Was ist PIK?", ref: "t:pik" }] },
          { tag: "fakt", text: "Fitch Ratings hatte im September eine über 1.300 Kreditnehmer gemessene Ausfallrate von 6,3 % gemeldet – nach eigenen Angaben ein Rekordwert; Blue Owl hatte Anfang Oktober erneut die Rücknahmen bei zwei Private-Credit-Fonds auf 5 % begrenzt, nachdem Rücknahmeanfragen beim Technologiefonds OTIC auf 39 % gestiegen waren.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass nach Moody's und Fitch nun auch S&P den Ausblick für einen der größten Privatanleger-Fonds im Private-Credit-Markt vorsichtiger einstuft, fügt sich in ein Muster zunehmender Warnsignale bei gleichzeitig weiterhin hohem institutionellem Interesse an der Anlageklasse ein.",
            ask: [{ label: "Wie wirken höhere Zinsen auf Private-Credit-Ausfälle?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 12 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "pik", "nav"],
      followups: ["e:private-credit-what", "e:nonaccrual-default", "e:redemption-limits"],
      sources: [
        { title: "rallies.ai: S&P says Blackstone Private Credit Fund outlook revised to stable from positive", url: "https://rallies.ai/news/sp-says-blackstone-private-credit-fund-outlook-revised-to-stable-from-positive-af83b57bb94fa143" },
        { title: "Private Equity Wire: PIK amendments mask US private credit stress, Moody's warns", url: "https://www.privateequitywire.co.uk/pik-amendments-mask-us-private-credit-stress-moodys-warns/" },
        { title: "FA-Mag: Blue Owl again caps two BDCs after withdrawal requests", url: "https://www.fa-mag.com/news/blue-owl-again-caps-two-bdcs-after-withdrawal-requests-88687.html" },
        { title: "Bloomberg: US private credit default rate hits a record of 6.3%, Fitch says", url: "https://www.bloomberg.com/news/articles/2026-09-14/us-private-credit-default-rate-hits-a-record-of-6-3-fitch-says" }
      ]
    },

    /* 14 TECHNOLOGIE: COREWEAVE/NVIDIA/META/SOX */
    {
      id: "tech-coreweave-nvidia-meta-sox-samsung-10-22", cats: ["tech"], when: "Meta-Quartalszahlen 21.10. · CoreWeave-Goldman-Upgrade 21.10. · SOX-Schluss 21.10. · Samsung/SK-Hynix-Rückgang 22.10.2026",
      headline: "Meta hebt seine Investitionsprognose für 2026 deutlich an, Goldman Sachs stuft CoreWeave hoch, Samsung und SK Hynix fallen am Donnerstag wegen neuer Zweifel an der KI-Rentabilität",
      sec30: "Meta meldete am 21.10. für das dritte Quartal einen Umsatz von 64,60 Mrd. Dollar (+26 % gegenüber Vorjahr) und hob seine Investitionsprognose (Capex) für 2026 auf 135 bis 145 Mrd. Dollar an, bei zugleich negativem freiem Cashflow von −2,1 Mrd. Dollar. CoreWeaves Aktie blieb unter Druck (−29 % im Oktober), die 5-Jahres-Kreditausfallversicherungen lagen bei rund 1.082 Basispunkten – niedriger als das Rekordhoch vom 15.10. (1.194,5 Bp), aber weiterhin hoch; Goldman Sachs stufte die Aktie am 21.10. von „Neutral” auf „Buy” hoch, worauf sie sich um rund 7 % erholte. Der Halbleiterindex SOX schloss am Mittwoch bei 11.505,6 Punkten (+1,97 %), doch am Donnerstag fielen Samsung (−4 %) und SK Hynix (−6 %) wegen neu aufgeflammter Zweifel an der KI-Rentabilität.",
      blocks: [
        { h: "Wie geht es CoreWeave und der Sorge um KI-Schulden?", items: [
          { tag: "fakt", text: "Die CoreWeave-Aktie fiel im Oktober um rund 29 % und blieb auch am 21.10. unter Druck; die 5-Jahres-Kreditausfallversicherungen (CDS) lagen bei rund 1.082 Basispunkten – niedriger als das Rekordhoch von 1.194,5 Basispunkten vom 15.10., aber weiterhin auf hohem Niveau. Die Anleihe mit Kupon 9,625 % (Fälligkeit 2032) rentierte mit rund 14,9 %.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Goldman Sachs stufte CoreWeave am 21.10. von „Neutral” auf „Buy” hoch, worauf sich die Aktie um rund 7 % erholte. CoreWeave kündigte zudem eine Expansion nach Indien an (gemeinsam mit AdaniConneX, 240-Megawatt-Rechenzentrum in Navi Mumbai, skalierbar auf 480 Megawatt, Betrieb ab Mitte 2028)." }
        ]},
        { h: "Was zeigen Metas Quartalszahlen?", items: [
          { tag: "fakt", text: "Meta meldete am 21.10. für das dritte Quartal 2026 einen Umsatz von 64,60 Mrd. Dollar (+26 % gegenüber Vorjahr) und hob seine Investitionsprognose (Capex) für 2026 auf 135 bis 145 Mrd. Dollar an, bei einem negativen freien Cashflow von −2,1 Mrd. Dollar.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Microsoft, Alphabet und Amazon legen ihre Quartalszahlen erst am 28./29.10. vor; Daten dazu liegen noch nicht vor." }
        ]},
        { h: "Wie entwickelten sich Chipwerte am Mittwoch und Donnerstag?", items: [
          { tag: "fakt", text: "Der Halbleiterindex SOX schloss am Mittwoch, 21.10., bei 11.505,6 Punkten (+1,97 %) und legte damit den zweiten Tag in Folge zu; Nvidia, AMD und Intel gewannen vorbörslich bis zu 2 %." },
          { tag: "unbestaetigt", text: "Am Donnerstag fielen die südkoreanischen Speicherchip-Werte Samsung (−4 %) und SK Hynix (−6 %) wegen neu aufgeflammter Zweifel an der KI-Rentabilität – eine Gegenbewegung zur Euphorie der Vorwoche um ausverkaufte HBM- und DRAM-Kapazitäten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Meta seine Investitionsprognose weiter anhebt und CoreWeave von einer Analysten-Hochstufung profitiert, während gleichzeitig asiatische Speicherchip-Werte am Donnerstag erneut fallen, zeigt, wie unübersichtlich die Lage in der KI- und Chipbranche weiterhin bleibt. Dies ist keine Anlageberatung.",
            ask: [{ label: "Was treibt den KI-Boom bei Chips an?", ref: "e:custom-chips" }] }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "CNBC: CoreWeave's market confidence erodes as bond yields spike, stock sinks", url: "https://www.cnbc.com/2026/10/21/coreweaves-market-confidence-erodes-as-bond-yields-spike-stock-sinks.html" },
        { title: "Yahoo Finance: CoreWeave stock attempts to rebound on Goldman Sachs upgrade to Buy", url: "https://finance.yahoo.com/markets/stocks/article/coreweave-stock-attempts-to-rebound-on-goldman-sachs-upgrade-to-buy-171325223.html" },
        { title: "CNBC: Meta earnings Q3 2026 live updates", url: "https://www.cnbc.com/2026/10/21/meta-earnings-q3-2026-live-updates.html" },
        { title: "Saxo Bank: Chip stocks sold off after key earnings – 22 October 2026", url: "https://home.saxo/en-sg/content/articles/macro/market-quick-take---chip-stocks-sold-off-after-key-earnings---22-october-2026-22102026" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-oelpreis-ttf-gasspeicher-opec-10-22", cats: ["energy", "geo"], when: "Ölpreisanstieg 21./22.10. · TTF-Hoch 20.10. · Gasspeicher-Stand 21.10. · OPEC+-Gremiumstreffen 20./21.10.2026",
      headline: "Ölpreis steigt nach Angriffen auf saudische Ziele auf rund 110 bis 112 Dollar, europäischer Gaspreis TTF überschreitet erstmals seit Ende 2022 die 90-Euro-Marke",
      sec30: "Brent-Rohöl stieg nach den Angriffen auf den Flughafen Dammam und das Aramco-Ölfeld Shaybah auf rund 110 bis 112 Dollar je Barrel (+1,2 bis +2,9 % je Quelle), WTI näherte sich der 100-Dollar-Marke. Der europäische Gas-Referenzpreis TTF überschritt am Montag, 20.10., erstmals seit Dezember 2022 die 90-Euro-Marke (Tageshoch rund 90,24 Euro, Settlement 90,15 Euro je Megawattstunde) – ein weiterer Anstieg gegenüber den 88,33 Euro vom Vortag. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 21.10. bei 61,2 % Füllstand, leicht höher als die 60,5 % vom 16.10.; die Behörde sieht weiterhin ein „geringes Risiko” einer Gasmangellage. Bei der OPEC+ gab es keine neue Förderentscheidung; das nächste reguläre Treffen bleibt für den 1.11. angesetzt.",
      blocks: [
        { h: "Warum ist der Ölpreis zuletzt gestiegen?", items: [
          { tag: "fakt", text: "Am 21.10. wurden bei Angriffen auf den Flughafen Dammam und das Aramco-Ölfeld Shaybah in Saudi-Arabien mehrere Menschen getötet; mehr dazu in Meldung 8.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "fakt", text: "Brent-Rohöl notierte als Reaktion am Donnerstagmorgen je nach Quelle zwischen 110,11 und 111,97 Dollar je Barrel (+1,2 bis +2,9 % gegenüber dem Vortag); die US-Ölsorte WTI näherte sich mit rund 99,3 bis 99,9 Dollar der 100-Dollar-Marke.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "Zusätzlich fielen die US-Rohölbestände in der Woche bis 17.10. um 3,06 Mio. Barrel, was laut Berichten ebenfalls zum Preisanstieg beitrug." }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "fakt", text: "Der TTF-Referenzpreis überschritt am Montag, 20.10., erstmals seit Dezember 2022 die 90-Euro-Marke (Tageshoch rund 90,24 Euro je Megawattstunde, Settlement 90,15 Euro) – ein weiterer Anstieg gegenüber den 88,33 Euro vom 19.10.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die Konkurrenz um LNG-Lieferungen vor dem Winter, Unsicherheiten im Nahen Osten und die weiterhin unterdurchschnittliche Speicherfüllung in Europa." }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern und der OPEC+?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 21.10. bei 61,2 % Füllstand (151,4 TWh) – leicht höher als die 60,5 % vom 16.10.; die Behörde sieht weiterhin ein „geringes Risiko” einer Gasmangellage. Die gesetzliche Vorgabe liegt bei 80 % bis zum 1.11.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Das 174. Treffen des OPEC+-Gremiums am 20./21.10. war rein organisatorischer Natur, es gab keine neue Förderentscheidung; das nächste reguläre Treffen bleibt für den 1.11. angesetzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl der Ölpreis als auch der europäische Gaspreis zuletzt gleichzeitig gestiegen sind – Öl wegen der Angriffe in Saudi-Arabien, Gas wegen der Konkurrenz um LNG vor dem Winter –, zeigt, wie stark geopolitische und saisonale Faktoren die Energiepreise derzeit gemeinsam treiben.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "Nation Thailand (Reuters): Fresh Houthi attacks in Saudi Arabia prompt a US diplomatic drawdown as Brent gains", url: "https://www.nationthailand.com/news/world/40072588" },
        { title: "Babypips: WTI crude oil – premium strategy, 22 October 2026", url: "https://www.babypips.com/trading/premium-strategy-2026-10-22-wti-crude-oil-usoil" },
        { title: "IT-Boltwise: Erdgas-Preisdruck in Europa – TTF steigt auf über 90 Euro je MWh", url: "https://www.it-boltwise.de/erdgas-preisdruck-in-europa-ttf-steigt-auf-8957-euro-je-mwh.html" },
        { title: "Bundesnetzagentur: Aktuelle Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "CNBC: Oil price today – WTI, Brent rise on Middle East worries", url: "https://www.cnbc.com/2026/10/21/oil-price-today-wti-brent-rise-on-middle-east-worries.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Mittwoch stiegen DAX (+1,35 %) und Euro Stoxx 50 (+1,4 %) dank starker Quartalszahlen, während asiatische Märkte am Donnerstag wegen eines erneuten KI-Ausverkaufs deutlich fielen (Nikkei −2,65 %, Hang Seng rund −3 %, Kospi rund −3,5 %)." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die gegenläufige Entwicklung nennen Berichte starke Einzelwerte (SpaceX, SAP, Capital One) am Mittwoch sowie einen erneuten, breiten Ausverkauf bei KI-nahen Aktien in Asien am Donnerstag." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite lag am Mittwoch bei rund 5,07 bis 5,13 %, der Fed-Leitzins bei 3,75 bis 4,00 %; die FOMC-Blackout-Periode läuft seit 17.10. bis zum 29.10." },
    "central-banks-why": { tag: "einordnung", story: 2, text: "Die Fed hatte ihren Leitzins am 16.9.2026 erstmals seit Juli 2023 angehoben; seither läuft die Debatte zwischen einer Zinspause und einer weiteren Erhöhung bei der Sitzung am 27./28.10." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen für Oktober mit rund 84 bis 88 % überwiegend eine Zinspause ein, mit rund 12 bis 16 % für eine weitere Erhöhung; eine Senkung wird praktisch nicht erwartet." },
    "ecb-hike": { tag: "unbestaetigt", story: 4, text: "Der Marktkonsens erwartet für die EZB-Sitzung am 29.10. zu rund 99 % keine Zinsänderung; die Nominierungsfrist für die Schnabel-Nachfolge läuft am 28.10. ab." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die britische Inflation stieg im September auf 3,5 % (von 3,1 %); vor der Bank-of-England-Sitzung am 5.11. erwartet eine Mehrheit befragter Ökonomen eine Zinserhöhung auf 4,00 %." },
    "gold-why": { tag: "einordnung", story: 3, text: "Gold korrigierte nach seinem Rekordhoch vom Dienstag (4.381,21 Dollar) bis Donnerstagfrüh um rund 1,4 % auf 4.083 bis 4.091 Dollar – vor allem wegen Gewinnmitnahmen." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Mittwoch bei 1,1234 Dollar, leicht höher als die 1,1225 Dollar vom Montag und Dienstag." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin fiel je nach Quelle auf rund 81.700 bis 82.900 Dollar – laut Bloomberg wegen erneuter Sorgen um KI-Investitionen und ETF-Abflüssen." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro; Finanzminister Klingbeil verteidigte seinen Ausgabenkurs trotz der Kritik." },
    "debt-brake": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof warnt, die Bundesschulden könnten bis 2030 auf rund 3 Billionen Euro steigen, wenn die aktuelle Haushaltsplanung fortgeführt wird." },
    "landtagswahl-why": { tag: "unbestaetigt", story: 6, text: "Aktuelle Bayern-Umfragen (Infratest dimap, GMS) sehen die CSU bei 36 bis 37 % und die AfD bei 21 bis 22 % als zweitstärkste Kraft." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Bundesweite Umfragen weichen weiterhin deutlich voneinander ab: INSA sieht die AfD bei 30 %, Forsa bei 27 %, eine Institute-Aggregation bei 26,4 %." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Iran meldete am 21.10. weitere Tankerbrände in der Straße von Hormus und den Abschuss einer US-Drohne – von CENTCOM zurückgewiesen; eine unabhängige Bestätigung fehlt weiterhin." },
    "why-oil-up-geo": { tag: "fakt", story: 15, text: "Der Ölpreis stieg zuletzt auf rund 110 bis 112 Dollar je Barrel, nachdem Angriffe auf den Flughafen Dammam und das Aramco-Ölfeld Shaybah in Saudi-Arabien mehrere Tote gefordert hatten." },
    "defence-order": { tag: "unbestaetigt", story: 10, text: "Branchenberichte sprechen von einer möglichen Kürzung des erwarteten Arminius-Auftragswerts für Rheinmetall um rund 9 Mrd. Euro; eine offizielle Bestätigung dazu gibt es nicht." },
    "defence-stocks": { tag: "fakt", story: 11, text: "RTX erhielt am 21.10. eine Erhöhung der Vertragsobergrenze für Radarsysteme auf 3 Mrd. Dollar; die Kritik an Palmer Luckeys Rolle im Pentagon-Gremium „Project Meridian” hält unverändert an." },
    "nato-target": { tag: "fakt", story: 11, text: "Saab erhielt am 15.10. einen Auftrag der schwedischen Beschaffungsbehörde FMV über rund 116 Mio. Euro für einen neuen Flugsteuerrechner für das Kampfflugzeug Gripen." },
    "ma-steps": { tag: "fakt", story: 12, text: "EQT und Qiagen einigten sich am 21./22.10. auf eine Übernahme Qiagens für rund 10,8 Mrd. Euro Unternehmenswert; Salesforce übernimmt Braze für rund 5,66 Mrd. Dollar." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Der Finanzinvestor CVC prüft laut Berichten ein Delisting-Angebot für den Sicherheitsdienstleister Verisure, nur rund ein Jahr nach dessen Börsengang." },
    "private-credit-what": { tag: "fakt", story: 13, text: "S&P senkte am 16.10. den Ausblick für den Blackstone Private Credit Fund (BCRED) von „positiv” auf „stabil”, nach Abschreibungen bei Krediten aus den Jahrgängen 2021/22." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Fitch hatte im September eine Rekord-Ausfallrate von 6,3 % bei über 1.300 untersuchten Private-Credit-Kreditnehmern gemeldet." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Blue Owl hatte Anfang Oktober erneut die Rücknahmen bei zwei Private-Credit-Fonds auf 5 % begrenzt, nachdem Rücknahmeanfragen beim Technologiefonds OTIC auf 39 % gestiegen waren." },
    "ai-capex": { tag: "fakt", story: 14, text: "Meta hob am 21.10. seine Investitionsprognose für 2026 auf 135 bis 145 Mrd. Dollar an, bei zugleich negativem freiem Cashflow von −2,1 Mrd. Dollar." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Der Halbleiterindex SOX legte am Mittwoch den zweiten Tag in Folge zu, doch Samsung und SK Hynix fielen am Donnerstag wegen neu aufgeflammter Zweifel an der KI-Rentabilität." },
    "circular-financing": { tag: "fakt", story: 14, text: "CoreWeaves 5-Jahres-Kreditausfallversicherungen lagen weiterhin bei rund 1.082 Basispunkten – niedriger als das Rekordhoch vom 15.10., aber weiterhin auf hohem Niveau." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 21.10. bei 61,2 % Füllstand, leicht höher als die 60,5 % vom 16.10.; die gesetzliche Vorgabe liegt bei 80 % bis zum 1.11." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Das 174. Treffen des OPEC+-Gremiums am 20./21.10. war rein organisatorischer Natur; eine neue Förderentscheidung gab es nicht, das nächste reguläre Treffen bleibt für den 1.11. angesetzt." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der TTF-Gaspreis überschritt am 20.10. erstmals seit Dezember 2022 die 90-Euro-Marke je Megawattstunde." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent stieg zuletzt auf rund 110 bis 112 Dollar je Barrel; Öl und das gleichzeitig steigende Gaspreisniveau bleiben Belastungsfaktoren für Sprit-, Heiz- und Transportkosten." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Deals", type: "Fakt", story: 12,
      q: "Für welchen Unternehmenswert einigten sich EQT und Qiagen am 21./22.10.2026 auf eine Übernahme?",
      options: [
        "Rund 6,1 Mrd. Dollar",
        "Rund 10,8 Mrd. Euro",
        "Rund 25 Mrd. Dollar",
        "Rund 1,3 Mrd. Dollar"
      ],
      answer: 1,
      explain: "EQT bietet 46,50 Euro je Aktie in bar, was einem Unternehmenswert von rund 10,8 Mrd. Euro entspricht – eine Prämie von 40,3 % auf den unbeeinflussten Kurs vom 8.7.2026."
    },
    {
      topic: "Märkte", type: "Zusammenhang", story: 2,
      q: "Angenommen, die Fed würde bei ihrer Sitzung am 27./28.10.2026 entgegen der Mehrheitserwartung der Marktplattformen den Leitzins erneut anheben statt ihn zu halten. Was würde das für die Rendite zehnjähriger US-Staatsanleihen und für stark auf günstige Finanzierung angewiesene Aktien wie CoreWeave unter sonst gleichen Bedingungen am ehesten bedeuten?",
      options: [
        "Sinkende Renditen und tendenziell Entlastung für CoreWeave",
        "Steigende Renditen und tendenziell zusätzlicher Druck auf Aktien wie CoreWeave",
        "Keine Auswirkung, da Leitzins-Entscheidungen Aktienkurse grundsätzlich nicht beeinflussen",
        "Eine automatische Rückkehr zu einer Zinssenkung im Dezember"
      ],
      answer: 1,
      explain: "Eine überraschende Zinserhöhung würde tendenziell die Anleiherenditen weiter steigen lassen und damit die Finanzierungskosten für stark fremdfinanzierte, auf künftiges Wachstum setzende Unternehmen wie CoreWeave zusätzlich erhöhen."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 8,
      q: "Was ereignete sich am 21.10.2026 am Flughafen King Fahd in Dammam (Saudi-Arabien)?",
      options: [
        "Ein Angriff tötete zwei Menschen und verletzte acht",
        "Der Flughafen wurde dauerhaft geschlossen",
        "Der Flughafen meldete einen Passagier-Rekord",
        "Das Flughafenpersonal trat in einen Streik"
      ],
      answer: 0,
      explain: "Bei dem Angriff am Abend des 21.10. wurden zwei Menschen (ein saudischer und ein indischer Staatsbürger) getötet und acht weitere verletzt."
    },
    {
      topic: "International", type: "Zusammenhang", story: 7,
      q: "Angenommen, Belgien würde seine Blockade gegen die Nutzung der rund 185 Mrd. Euro eingefrorener russischer Vermögenswerte doch noch aufgeben. Was würde das für die von der EU-Kommission genannte Finanzierungslücke der Ukraine von 70 Mrd. Euro für 2027 unter sonst gleichen Bedingungen am ehesten bedeuten?",
      options: [
        "Einen automatischen Waffenstillstand im Ukraine-Krieg",
        "Eine deutlich einfachere Deckung der Finanzierungslücke, ohne dass der Krieg dadurch automatisch endet",
        "Keine Auswirkung, da die Gelder ohnehin nicht genutzt werden dürften",
        "Eine automatische Aufhebung aller EU-Sanktionen gegen Russland"
      ],
      answer: 1,
      explain: "Eine Einigung über die rund 185 Mrd. Euro eingefrorener Vermögenswerte würde die Finanzierungslücke der Ukraine für 2027 leichter decken helfen; den militärischen Konflikt selbst würde das aber nicht automatisch beenden."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Wie veränderte sich Metas Investitionsprognose (Capex) für 2026 laut den am 21.10.2026 veröffentlichten Quartalszahlen?",
      options: [
        "Sie wurde auf 50 Mrd. Dollar gesenkt",
        "Sie blieb unverändert bei 100 Mrd. Dollar",
        "Sie wurde komplett gestrichen",
        "Sie wurde auf 135 bis 145 Mrd. Dollar angehoben"
      ],
      answer: 3,
      explain: "Meta hob seine Investitionsprognose für 2026 auf 135 bis 145 Mrd. Dollar an, bei gleichzeitig negativem freiem Cashflow von −2,1 Mrd. Dollar im dritten Quartal."
    }
  ]
};
