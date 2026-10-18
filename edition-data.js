// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-18",
  dateLabel: "Sonntag, 18. Oktober 2026",
  updatedLabel: "Recherchestand 18.10.2026",
  marketNote: "Diese Ausgabe entsteht am Sonntagmorgen, 18.10.2026. Die Börsen in Europa und den USA sind am Wochenende geschlossen, deshalb gilt für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq weiterhin der Schlussstand von Freitag, 16.10. Während DAX (+0,94 %) und Euro Stoxx 50 (+0,58 %) von Rüstungswerten wie Rheinmetall und einer Erholung bei ASML gestützt wurden, fielen S&P 500 (−1,1 %) und vor allem der technologienahe Nasdaq Composite (−2,1 %) weiter wegen anhaltender Sorgen um eine mögliche Überbewertung von KI-Investitionen. Die US-Anleiherendite blieb mit rund 5,08 bis 5,10 % weitgehend unverändert; für die Bund-Rendite ließ sich auch für diese Ausgabe kein über mehrere Quellen hinweg übereinstimmender Freitagswert ermitteln (Spanne rund 3,42 bis 3,46 %). Brent-Rohöl schloss am Freitag laut mehreren Quellen bei rund 109,86 Dollar je Barrel (zeitweise über 110 Dollar, höchster Stand seit Mai); am Samstag, 17.10., meldete die iranische Revolutionsgarde zusätzlich, ein Supertanker sei in der Straße von Hormus auf eine Seemine gelaufen und habe Feuer gefangen – eine unabhängig nicht bestätigte Angabe, die den Ölpreis am Montag weiter bewegen könnte. Bitcoin handelt auch am Wochenende weiter und lag Sonntagvormittag bei rund 81.700 Dollar, nur leicht über dem Freitagsniveau.",

  top: [
    { text: "Am Freitag, 16.10., schlossen S&P 500 (−1,1 % auf 7.659,44) und vor allem der Nasdaq Composite (−2,1 % auf 26.140,03, Wochenverlust rund −4,5 %) im Minus, weil die Sorge um eine mögliche Überbewertung von KI-Investitionen anhielt. DAX (+0,94 % auf 25.622,61 Punkte) und Euro Stoxx 50 (+0,58 % auf 6.204,23) legten dagegen zu, gestützt von Rüstungswerten wie Rheinmetall und einer Erholung bei ASML. Asiatische Speicherchip-Werte erholten sich am Freitag teilweise von ihrem Einbruch vom Donnerstag.", ref: "s:1" },
    { text: "Am Samstag, 17.10., meldete die iranische Revolutionsgarde, ein Supertanker mit mehr als 2 Mio. Barrel Rohöl sei in der Straße von Hormus auf eine Seemine gelaufen und habe Feuer gefangen; die Angabe ist unabhängig nicht bestätigt. Zugleich meldete die britische Seefahrtsbehörde UKMTO zwei weitere Angriffe auf Handelsschiffe vor der saudischen Küste. Der Flughafen Riad blieb auch nach Ablauf der ursprünglichen Sperrfrist am 17.10. ohne bestätigten Wiedereröffnungstermin geschlossen.", ref: "s:9" },
    { text: "Die Sondierungsgespräche von SPD, Grünen und Die Linke für eine künftige Berliner Landesregierung wurden am 17.10. abgeschlossen; die drei Parteien einigten sich auf ein gemeinsames Sondierungspapier mit dem Titel „Mehr gemeinsam, mehr Berlin” und empfehlen ihren Gremien, in Koalitionsverhandlungen einzutreten. Ein fertiger Koalitionsvertrag liegt noch nicht vor; der SPD-Landesvorstand soll am 21.10. entscheiden, die Linke hat ihren Parteitag auf den 31.10. verschoben.", ref: "s:6" },
    { text: "Der EU-Gipfel in Brüssel endete am 16.10. erneut ohne Entscheidung über die Nutzung von rund 185 bis 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine-Finanzierung; Belgiens Premierminister De Wever verlangte weiterhin rechtlich bindende Garantien aller EU-Staaten für die gesamte Darlehenssumme. Die Ukraine bezifferte die Finanzierungslücke für 2027 auf rund 78 Mrd. US-Dollar.", ref: "s:8" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.622,61", change: "+0,94 % (+239,99 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag, 15.10., hatte der DAX bei 25.382,62 Punkten geschlossen (+0,33 %); am Freitag legte er weiter zu." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Rüstungswerte wie Rheinmetall stützten den Index, nach Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende; mehr dazu in Meldung 10.",
          "Da über das Wochenende keine neuen Handelsdaten vorliegen, bleibt der Freitagsschluss bis Montag der gültige Stand."
        ]
      },
      important: [
        { area: "Rüstung", text: "Mehr zu neuen Rüstungsaufträgen und zur Rheinmetall-Aktie in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "onvista/dpa-AFX: Dax schüttelt Zins- und KI-Sorgen ab", url: "https://www.onvista.de/news/2026/10-16-roundup-aktien-frankfurt-schluss-dax-schuettelt-zins-und-ki-sorgen-ab-0-10-26565010" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.204,23", change: "+0,58 % (+36 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag hatte der Euro Stoxx 50 bei 6.171,15 Punkten geschlossen (−0,3 %); am Freitag legte er zu." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Rheinmetall und weitere Rüstungswerte stützten den Index.",
          "Der Chipausrüster ASML erholte sich am Freitag, was den Index zusätzlich stützte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Chef Warsh gab bei seiner IWF-Rede keine klare Richtung für die Sitzung am 27./28.10. vor; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.6 percent higher as ASML rebounds", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-6-percent-higher-as-asml-rebounds/70345171" }
    },
    "sp500": {
      label: "S&P 500", value: "7.659,44", change: "−1,1 % (−84,62 Pkt., Fr-Schluss); Wochenverlust rund −1,9 %", dir: "down", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 52.002,41 Punkte (−0,3 %, −175,28 Pkt.) – weniger stark im Minus als S&P 500 und Nasdaq Composite." },
        { label: "Nasdaq Composite", text: "Freitagsschluss: 26.140,03 Punkte (−2,1 %, −572,99 Pkt.); der Nasdaq 100 verlor rund 2,50 % auf 29.187,55 Punkte (−748,04 Pkt.)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen belasteten vor allem Technologie- und Chipwerte.",
          "Die US-Anleiherendite blieb im Tagesverlauf weitgehend unverändert bei rund 5,08 bis 5,10 %."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum anhaltenden KI-Ausverkauf und zu CoreWeave in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ABC News/AP: How major US stock indexes fared Friday", url: "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "26.140,03", change: "−2,1 % (−572,99 Pkt., Fr-Schluss); Wochenverlust rund −4,5 %", dir: "down", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie ist nicht identisch mit dem enger gefassten Nasdaq 100.",
      compare: [
        { label: "Nasdaq 100", text: "Der stärker technologielastige Nasdaq 100 verlor am Freitag rund 2,50 % (−748,04 Punkte) auf 29.187,55 Punkte und verzeichnete laut einer Quelle die schlechteste Woche seit rund 18 Monaten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Chipwerte wie Intel (−5,8 %), Micron (−5,6 %), AMD (−6,0 %) und Broadcom (−4,5 %) fielen weiter; der Philadelphia-Halbleiterindex SOX fiel den achten Tag in Folge – die erste solche Serie seit Oktober 2008 (Meldung 14).",
          "Zunehmende Sorgen um die Kreditwürdigkeit von KI-Cloud-Anbietern wie CoreWeave belasteten zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "ABC News/AP: How major US stock indexes fared Friday", url: "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1253 (EZB-Referenzkurs Fr)", change: "+0,40 % ggü. Do (1,1208)", dir: "up", asof: "EZB-Referenzkurs Fr 16.10.26", story: 3,
      means: "1 Euro kostet etwa 1,13 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Woche", text: "Der EZB-Referenzkurs stieg von 1,1181 Dollar am Montag über 1,1195 (Mittwoch) und 1,1208 (Donnerstag) auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die US-Anleiherendite blieb am Freitag weitgehend unverändert, was Dollar-Anlagen nicht zusätzlich stützte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Chef Warsh gab bei seiner IWF-Rede keine klare Richtung vor; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "finanzen.at: Devisen – EZB-Richtwerte, Euro-Referenzkurs bei 1,1253 US-Dollar", url: "https://www.finanzen.at/nachrichten/aktien/devisen-ezb-richtwerte-euro-referenzkurs-bei-1-1253-us-dollar-1036634676" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,08–5,10 %", change: "weitgehend unverändert ggü. Donnerstag", dir: "flat", asof: "Stand Fr 16.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr.",
      compare: [
        { label: "Hintergrund", text: "Das Niveau von rund 5,1 % gilt laut Berichten weiterhin als strukturell erhöht, unter anderem wegen Sorgen um das hohe US-Haushaltsdefizit." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Fed-Chef Warsh gab bei seiner IWF-Rede in Bangkok keine klare Richtung für die Sitzung am 27./28.10. vor.",
          "Nach CME-FedWatch-Daten lag die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober am 17.10. bei rund 14 bis 16 % (Hold rund 84 bis 87 %), nach rund 13 bis 15 % direkt nach Warshs Rede – kaum verändert."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zu Warshs Auftritt und zur Markterwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Trading Economics: United States Government Bond 10Y", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,42–3,46 % (kein einheitlicher Fr-Wert verfügbar)", change: "keine über mehrere Quellen übereinstimmende Freitagsangabe", dir: "flat", asof: "Stand Fr 16.10.26 (Quellen uneinheitlich)", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,08 bis 5,10 % weiterhin deutlich über der Bund-Rendite von rund 3,42 bis 3,46 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10.",
          "Mehrere Ökonomen erwarten laut einer Reuters-Umfrage inzwischen eine EZB-Zinserhöhung im Dezember, nachdem die Eurozonen-Inflation im September auf 3,8 % gestiegen war (Meldung 5)."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Mehr zur EZB-Position von Lagarde und zur Schnabel-Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.170–4.180 $", change: "+0,2 % ggü. Donnerstagabend", dir: "up", asof: "Stand Fr 16.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.170 bis 4.180 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "Mehrere Quellen nennen für Freitag Werte zwischen rund 4.156 und 4.180 Dollar je Feinunze, je nach Erfassungszeitpunkt (Londoner Fixing vs. Spotpreis)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die weitgehend unveränderte US-Rendite hielt die Opportunitätskosten des zinslosen Goldes niedrig.",
          "Die anhaltende Erwartung einer Fed-Zinspause im Oktober stützte den Goldpreis zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Warshs Rede und zur Markterwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "goldprice.org: Gold Price on 16 October 2026", url: "https://goldprice.org/gold-price-today/2026-10-16" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 109,86 $ (Fr-Schluss)", change: "+3,7 % (Tag), +4,9 % (Woche); zeitweise über 110 $ – höchster Stand seit Mai", dir: "up", asof: "Schluss Fr 16.10.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 110 Dollar je Fass (159 Liter) sind etwa 69 bis 70 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI wird für Freitag uneinheitlich mit rund 97 bis 101 Dollar je Barrel angegeben; die Quellen weichen hier stärker als sonst voneinander ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Fortgesetzte Lieferstörungen rund um die Straße von Hormus und Angriffe auf Tanker vor Saudi-Arabien (Meldung 9).",
          "Am Samstag, 17.10., meldete die iranische Revolutionsgarde einen weiteren, unabhängig nicht bestätigten Zwischenfall (Seemine), der den Ölpreis am Montag zusätzlich bewegen könnte."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu den Tankerangriffen und zur Lage am Golf in Meldung 9.", ref: "s:9" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "Bloomberg: Brent Oil Surges Above $110 as Supply Risks Intensify", url: "https://www.bloomberg.com/news/articles/2026-10-16/oil-tops-110-for-first-time-since-may-as-supply-risk-grows" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.700 $", change: "nahezu unverändert ggü. Freitagmorgen (81.437 $)", dir: "up", asof: "Stand So 18.10.26 vormittags", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.700 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Wochenende", text: "Zwischen Freitagmorgen (rund 81.437 Dollar) und Sonntagvormittag (rund 81.685 bis 81.737 Dollar) bewegte sich Bitcoin in einer Spanne von rund 80.655 bis 81.961 Dollar – ein insgesamt ruhiges Wochenende." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die anhaltenden Sorgen um KI-nahe Werte wie CoreWeave belasteten zwischenzeitlich auch Kryptowährungen (Meldung 14).",
          "Nach dem kurzen Rückgang unter 80.000 Dollar in der Vorwoche blieb der Kurs über das Wochenende weitgehend stabil."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "cryptoticker.io: Bitcoin-Kurs 81.685 Dollar", url: "https://cryptoticker.io/de/bitcoin-kurs-netzgebuehr-mempool-18-oktober-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitag-schluss-chip-erholung-10-18", cats: ["markets", "tech"], when: "Schluss Fr 16.10.2026 (Europa/USA) · Asien-Handel Fr 16.10.2026",
      headline: "S&P 500 und Nasdaq fallen am Freitag weiter, DAX und Euro Stoxx 50 legen dank Rüstungswerten und ASML zu",
      sec30: "Am Freitag, 16.10., schlossen S&P 500 (−1,1 % auf 7.659,44, Wochenverlust rund −1,9 %) und vor allem der Nasdaq Composite (−2,1 % auf 26.140,03, Wochenverlust rund −4,5 %) im Minus, weil die Sorge um eine mögliche Überbewertung von KI-Investitionen anhielt und US-Chipwerte wie Intel (−5,8 %) und Micron (−5,6 %) erneut nachgaben. Der Dow Jones gab dagegen nur 0,3 % ab. DAX (+0,94 % auf 25.622,61 Punkte) und Euro Stoxx 50 (+0,58 % auf 6.204,23) legten zu, gestützt von Rüstungswerten wie Rheinmetall und einer Erholung bei ASML. Die am Donnerstag schwer getroffenen asiatischen Speicherchip-Werte erholten sich am Freitag teilweise: Der Kospi legte rund 2 % zu, der Nikkei rund 1,4 %.",
      blocks: [
        { h: "Wie haben sich die US-Indizes am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones fiel um 0,3 % (−175,28 Punkte) auf 52.002,41 Punkte, der S&P 500 um 1,1 % (−84,62 Punkte) auf 7.659,44 Punkte – die schlechteste Woche seit Juni mit rund −1,9 %. Der Nasdaq Composite verlor 2,1 % (−572,99 Punkte) auf 26.140,03 Punkte; der Nasdaq 100 verlor rund 2,50 % und verzeichnete laut einer Quelle die schlechteste Woche seit rund 18 Monaten.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:sp500" }] },
          { tag: "fakt", text: "Der Philadelphia-Halbleiterindex SOX fiel laut Berichten den achten Tag in Folge – die erste solche Verlustserie seit Oktober 2008. AMD gab 6,0 % ab, Broadcom 4,5 %.",
            ask: [{ label: "Mehr zum Chip-Ausverkauf und CoreWeave", ref: "s:14" }] }
        ]},
        { h: "Warum legten DAX und Euro Stoxx 50 dagegen zu?", items: [
          { tag: "fakt", text: "Der DAX stieg um 0,94 % (+239,99 Punkte) auf 25.622,61 Punkte, der Euro Stoxx 50 um 0,58 % (+36 Punkte) auf 6.204,23 Punkte." },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte vor allem Rüstungswerte wie Rheinmetall, gestützt von Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende, sowie eine Erholung des Chipausrüsters ASML.",
            ask: [{ label: "Mehr zu den Rüstungsaufträgen", ref: "s:10" }] }
        ]},
        { h: "Wie ist die Lage bei den asiatischen Speicherchip-Werten?", items: [
          { tag: "fakt", text: "Nach dem Einbruch vom Donnerstag (Kospi −7,57 % auf 5.554 Punkte, siebter Verlusttag in Folge) erholte sich der Kospi am Freitag um rund 2,05 bis 2,15 % auf etwa 5.674 Punkte, blieb aber für die Woche rund 14,46 % im Minus. Der Nikkei legte 1,39 % auf 65.324 Punkte zu (Wochenverlust rund 5,37 %); Samsung gewann 2,62 %, SK Hynix 0,79 %, gaben im Tagesverlauf aber einen Teil der Gewinne wieder ab.",
            ask: [{ label: "Mehr zum Hintergrund des Chip-Ausverkaufs", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass US-Indizes und europäische Indizes am selben Tag in entgegengesetzte Richtungen liefen, zeigt, wie unterschiedlich Rüstungs- und Technologiewerte derzeit auf die Nachrichtenlage reagieren. Da über das Wochenende nicht gehandelt wird, bleibt dieser Stand bis Montag gültig – ein am Samstag gemeldeter Zwischenfall in der Straße von Hormus (Meldung 9) könnte den Handel am Montag zusätzlich beeinflussen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Hintergründe des Chip-Ausverkaufs werden in Meldung 14 vertieft, die Fed-Rede in Meldung 2, die Rüstungsaufträge in Meldung 10, die Lage am Golf in Meldung 9.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ABC News/AP: How major US stock indexes fared Friday", url: "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951" },
        { title: "onvista/dpa-AFX: Dax schüttelt Zins- und KI-Sorgen ab", url: "https://www.onvista.de/news/2026/10-16-roundup-aktien-frankfurt-schluss-dax-schuettelt-zins-und-ki-sorgen-ab-0-10-26565010" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.6 percent higher as ASML rebounds", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-6-percent-higher-as-asml-rebounds/70345171" },
        { title: "KED Global: Kospi's forward P/E ratio hits 26-year low", url: "https://www.kedglobal.com/korean-stock-market/newsView/ked202610160008" },
        { title: "Stocktwits: Nasdaq 100 Records Worst Week In 18 Months", url: "https://stocktwits.com/news-articles/markets/equity/nasdaq-100-records-worst-week-in-18-months/cZxK0vGRBt2" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED WARSH BANGKOK */
    {
      id: "fed-warsh-bangkok-zinserwartung-blackout-10-18", cats: ["markets", "economy"], when: "Warsh-Auftritt IWF-Bangkok 16.10. · FOMC-Blackout 17.–29.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "Fed-Chef Warsh gibt bei IWF-Auftritt in Bangkok kein Signal zum Zinspfad, Markterwartung bleibt seit dem Wochenende kaum verändert",
      sec30: "Fed-Chef Kevin Warsh trat am 16.10. bei einem von IWF-Chefin Georgieva moderierten Gespräch auf der IWF-Jahrestagung in Bangkok auf und machte laut Berichten keine Aussage zur Geldpolitik oder zum Wirtschaftsausblick, außer der allgemeinen Formel, die Fed werde „price stability” liefern. Er warnte, der Weg der Künstlichen Intelligenz werde „very bumpy”. Die FOMC-Blackout-Periode, in der sich Fed-Mitglieder nicht öffentlich äußern, begann am 17.10. und dauert bis nach der Sitzung am 27./28.10. Nach CME-FedWatch-Daten lag die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober am 17.10. bei rund 14 bis 16 % (Hold rund 84 bis 87 %) – gegenüber rund 13 bis 15 % direkt nach Warshs Rede kaum verändert. Kalshi nennt für den 17.10. eine Erhöhungswahrscheinlichkeit von rund 15 %, zwei Prozentpunkte niedriger als eine Woche zuvor.",
      blocks: [
        { h: "Was sagte Fed-Chef Warsh in Bangkok?", items: [
          { tag: "position", text: "Kevin Warsh machte am 16.10. in Bangkok laut mehreren Quellen keine Aussage zur Geldpolitik oder zum Wirtschaftsausblick vor der Sitzung am 27./28.10., außer der allgemeinen Formel: „At the Federal Reserve, we made very clear that we would deliver price stability.”",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] },
          { tag: "position", text: "Zur Künstlichen Intelligenz sagte Warsh laut Berichten, sie werde mittelfristig Produktivität und Wohlstand steigern, der Weg dorthin werde aber „very bumpy” (sehr holprig).",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Was bedeutet die FOMC-Blackout-Periode?", items: [
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, begann am 17.10., 00:00 Uhr Eastern Time, und dauert laut übereinstimmenden Quellen bis zum 29.10., einen Tag nach der Sitzung am 27./28.10.; regulär geplante Wirtschaftsdatenveröffentlichungen sind davon nicht betroffen." }
        ]},
        { h: "Wie hat sich die Markterwartung für die Sitzung am 27./28.10. seit dem Wochenende verändert?", items: [
          { tag: "unbestaetigt", text: "Nach CME-FedWatch-Daten lag die eingepreiste Erhöhungswahrscheinlichkeit für Oktober am 16.10. bei rund 12,7 bis 13 %, am 17.10. bei rund 14 bis 16 % – also kaum verändert. Kalshi nennt für den 17.10. eine Erhöhungswahrscheinlichkeit von rund 15 % (zwei Prozentpunkte niedriger als eine Woche zuvor), Polymarket eine Hold-Wahrscheinlichkeit von rund 82,5 bis 86,5 % je nach Zeitpunkt der Abfrage. Für die im Vorbericht genannte Dezember-Erhöhungswahrscheinlichkeit von rund 89 % liegt keine aktualisierte Bestätigung für dieses Wochenende vor.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Wie reagierte die US-Anleiherendite?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen blieb am Freitag weitgehend unverändert bei rund 5,08 bis 5,10 % – ein Niveau, das laut Berichten weiterhin als strukturell erhöht gilt, unter anderem wegen Sorgen um das hohe US-Haushaltsdefizit.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Markterwartung für die Oktober-Sitzung seit Warshs bewusst unverbindlichem Auftritt über das gesamte Wochenende kaum verändert hat, deutet darauf hin, dass sich die Anleger bereits vor der Blackout-Periode auf ein wahrscheinliches Halten der Zinsen eingestellt haben." }
        ]}
      ],
      reaction: "Die Marktreaktion wird in Meldung 1 behandelt, die EZB-Seite in Meldung 5, die US-Konjunkturdaten in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Euronews: Fed's Warsh sees AI boosting productivity but gives no signal on next rate hike", url: "https://www.euronews.com/2026/10/16/feds-warsh-sees-ai-boosting-productivity-but-gives-no-signal-on-next-rate-hike" },
        { title: "FXStreet: Fed's Warsh says he would deliver price stability, but won't pre-judge meetings", url: "https://www.fxstreet.com/news/breaking-feds-warsh-says-he-would-deliver-price-stability-but-wont-pre-judge-meetings-202610160346" },
        { title: "Phemex: Fed Enters Blackout Ahead of October Meeting", url: "https://phemex.com/news/article/fed-enters-blackout-ahead-of-october-meeting-as-us-earnings-season-accelerates-100277" },
        { title: "predictionmarketspicks.com: Fed Rate Odds Today – 84% Hold, 15% Hike at the Oct 28 FOMC", url: "https://predictionmarketspicks.com/tools/fed-rate-tracker" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-18", cats: ["markets"], when: "Stand Fr 16.10./So-Vormittag 18.10.2026",
      headline: "Euro legt auf EZB-Referenzkurs weiter zu, Gold bleibt nahe Mehrjahreshoch, Bitcoin hält sich über das Wochenende stabil bei rund 81.700 Dollar",
      sec30: "Der EZB-Referenzkurs stieg von 1,1208 Dollar am Donnerstag auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge. Gold lag am Freitag weiter nahe seinem Mehrjahreshoch bei rund 4.170 bis 4.180 Dollar je Feinunze, gestützt von der weitgehend unveränderten US-Rendite und der Erwartung einer Fed-Zinspause. Bitcoin, das auch am Wochenende weiterhandelt, bewegte sich zwischen Freitagmorgen (rund 81.437 Dollar) und Sonntagvormittag (rund 81.700 Dollar) in einer engen Spanne von rund 80.655 bis 81.961 Dollar – ein insgesamt ruhiges Wochenende nach dem kurzen Rückgang unter 80.000 Dollar in der Vorwoche.",
      blocks: [
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs stieg von 1,1208 Dollar am Donnerstag auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge seit Montag (1,1181 Dollar).",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,13?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold lag am Freitag je nach Quelle und Erfassungszeitpunkt bei rund 4.156 bis 4.180 Dollar je Feinunze, rund 0,2 % über dem Donnerstagabend-Niveau.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die weitgehend unveränderte US-Rendite, die die Opportunitätskosten des zinslosen Goldes niedrig hielt, sowie die anhaltende Erwartung einer Fed-Zinspause im Oktober." }
        ]},
        { h: "Wie hält sich Bitcoin über das Wochenende?", items: [
          { tag: "unbestaetigt", text: "Bitcoin bewegte sich zwischen Freitagmorgen (rund 81.437 Dollar) und Sonntagvormittag (rund 81.685 bis 81.737 Dollar) in einer Spanne von rund 80.655 bis 81.961 Dollar – nahezu unverändert und deutlich ruhiger als in der Vorwoche, als der Kurs zwischenzeitlich unter 80.000 Dollar gefallen war.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Euro und Gold weiter nahe ihren jüngsten Hochs liegen, während Bitcoin über das Wochenende in einer engen Spanne verharrte, passt zu einer Phase, in der sich die Markterwartung für die Fed-Politik seit Freitag kaum verändert hat. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Zinsentwicklung wird in Meldung 2 behandelt, die Sorgen um KI-nahe Werte in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "finanzen.at: Devisen – EZB-Richtwerte, Euro-Referenzkurs bei 1,1253 US-Dollar", url: "https://www.finanzen.at/nachrichten/aktien/devisen-ezb-richtwerte-euro-referenzkurs-bei-1-1253-us-dollar-1036634676" },
        { title: "goldprice.org: Gold Price on 16 October 2026", url: "https://goldprice.org/gold-price-today/2026-10-16" },
        { title: "cryptoticker.io: Bitcoin-Kurs 81.685 Dollar", url: "https://cryptoticker.io/de/bitcoin-kurs-netzgebuehr-mempool-18-oktober-2026/" }
      ]
    },

    /* 4 WIRTSCHAFT: US-KONJUNKTURDATEN/IWF-ABSCHLUSS */
    {
      id: "us-konjunktur-iwf-bangkok-abschluss-10-18", cats: ["economy"], when: "Michigan-Verbraucherstimmung vorläufig 09.10. · Industrieproduktion veröffentlicht 16.10. · IMFC-Pressekonferenz 17.10. · IWF-Jahrestagung Bangkok bis 18.10.2026",
      headline: "US-Verbraucherstimmung fällt auf Mehrmonatstief, IWF-Jahrestagung in Bangkok endet mit Warnung vor Lieferketten- und Schuldenrisiken",
      sec30: "Die vorläufige Verbraucherstimmung der University of Michigan für Oktober fiel auf 46,3 Punkte (−3,7 % ggü. September, 5-Monats-Tief); der Teilindex zur aktuellen Lage fiel auf ein Allzeittief von 44,7 Punkten, die Inflationserwartungen liegen bei 4,7 % (1 Jahr) bzw. 3,5 % (5 Jahre). Die Industrieproduktion stieg im September dagegen stärker als erwartet (+0,7 %, vor allem Halbleiter). Die IWF-Jahrestagung in Bangkok (12.–18.10.) endete mit einer IMFC-Pressekonferenz am 17.10.: IMFC-Vorsitzender Al-Jadaan warnte vor „keiner Komplazenz”, IWF-Chefin Georgieva sprach von „Optimismus und Sorge” und mahnte, einkommensschwache Länder wendeten inzwischen 8 bis 14 % ihrer Einnahmen für Schuldendienst auf. Ein G20-Finanzministertreffen am 15.10. endete ohne gemeinsame Abschlusserklärung.",
      blocks: [
        { h: "Wie ist die Stimmung der US-Verbraucher?", items: [
          { tag: "fakt", text: "Die vorläufige Verbraucherstimmung der University of Michigan für Oktober fiel auf 46,3 Punkte (−3,7 % ggü. September, ein 5-Monats-Tief); der Teilindex zur aktuellen Lage (Current Conditions) fiel auf 44,7 Punkte, ein Allzeittief, während der Erwartungsindex leicht auf 47,3 Punkte stieg (+2,2 %). Die Inflationserwartungen liegen bei 4,7 % für ein Jahr und 3,5 % für fünf Jahre.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] },
          { tag: "position", text: "Umfragedirektorin Joanne Hsu kommentierte: „Frustration over cost-of-living continues to mount, as consumers across the political spectrum believe that the trajectory of the economy has weakened since the beginning of the year.”" }
        ]},
        { h: "Was zeigt die US-Industrieproduktion für September?", items: [
          { tag: "fakt", text: "Die Industrieproduktion stieg im Monatsvergleich um 0,7 % – deutlich über der Erwartung von 0,4 %. Die Halbleiterproduktion legte um 2,1 % (m/m) bzw. 19,9 % (Jahresvergleich) zu, die Kfz-Produktion fiel dagegen um 3,0 %. Die Kapazitätsauslastung stieg auf 76,9 %." }
        ]},
        { h: "Wie ist die IWF-Jahrestagung in Bangkok zu Ende gegangen?", items: [
          { tag: "position", text: "Bei der Abschluss-Pressekonferenz am 17.10. warnte IMFC-Vorsitzender Mohammed Al-Jadaan (Saudi-Arabiens Finanzminister) vor „keiner Komplazenz”, da eskalierende Konflikte und Handelsspannungen kritische Handelsrouten weiter stören und die Energie- und Ernährungssicherheit verschlechtern könnten; er rief die Finanzbehörden auf, fiskalische Puffer wieder aufzubauen.",
            ask: [{ label: "Mehr zur EZB-Position", ref: "s:5" }] },
          { tag: "position", text: "IWF-Chefin Kristalina Georgieva bezeichnete die Stimmung der Tagung als geprägt von „optimism and worry”; höhere globale Zinsen bedeuteten, dass einkommensschwache Länder inzwischen 8 bis 14 % ihrer Einnahmen für Schuldendienst aufwenden müssten." },
          { tag: "unbestaetigt", text: "Laut einer einzelnen Quelle verließen Delegierte demonstrativ den Saal, als ein russischer Vertreter bei der IMFC-Sitzung sprach; ein unabhängiger zweiter Beleg dafür liegt nicht vor." },
          { tag: "fakt", text: "Ein G20-Finanzministertreffen am Rande der Tagung (15.10.) endete ohne gemeinsame Abschlusserklärung; US-Finanzminister Bessent nahm wegen „inländischer Termine” nicht teil." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Industrieproduktion deutlich stärker ausfiel als erwartet, während die Verbraucherstimmung zugleich auf einem Allzeittief bei der aktuellen Lage verharrt, liefert gemischte Signale für die Einschätzung der US-Konjunktur kurz vor der Fed-Entscheidung am 27./28.10." }
        ]}
      ],
      reaction: "Die Fed-Reaktion wird in Meldung 2 behandelt, die EZB-Seite in Meldung 5.",
      terms: ["leitzins", "inflation"],
      followups: ["e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "Bloomberg: US Consumer Sentiment Falls to Five-Month Low in October", url: "https://www.bloomberg.com/news/articles/2026-10-09/us-consumer-sentiment-falls-to-five-month-low-in-october" },
        { title: "verifiedinvesting.com: UMich Sentiment October 2026 – Index Falls to 46.3", url: "https://verifiedinvesting.com/blogs/us-economic-metrics/umich-sentiment-october-2026" },
        { title: "The Spokesman-Review: US factory production rebounds on semiconductors", url: "https://www.spokesman.com/stories/2026/oct/16/us-factory-production-rebounds-on-semiconductors-s/" },
        { title: "CNBC: IMFC chair says global economy resilient; delegates walk out on Russian official", url: "https://www.cnbc.com/2026/10/17/imf-members-call-for-more-support-amid-war-shocks-advanced-intelligence-risks.html" },
        { title: "Kuwait Times: IMF chief cites 'optimism and worry' as Bangkok meetings close", url: "https://kuwaittimes.com/article/51756/business/imf-chief-cites-optimism-and-worry-as-bangkok-meetings-close/amp/" }
      ]
    },

    /* 5 WIRTSCHAFT: EZB/FRANKREICH */
    {
      id: "ezb-lagarde-frankreich-schnabel-nachfolge-eurozone-inflation-10-18", cats: ["economy"], when: "Lagarde-Äußerungen IWF-Bangkok 14./17.10. · Eurostat-Inflation September final 16.10. · Bewerbungsfrist Schnabel-Nachfolge 28.10. · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "Eurozonen-Inflation steigt im September final auf 3,8 Prozent, Lagarde sieht keine Zweitrundeneffekte, deutscher Kandidat für Schnabel-Nachfolge weiter offen",
      sec30: "Eurostat bestätigte am 16.10. die Inflation der Eurozone für September final mit 3,8 % (nach 3,2 % im August) – der höchste Stand seit September 2023, getrieben vor allem von Energie (+18,8 bis 18,9 %); die Kerninflation stieg von 2,4 auf 2,5 %. EZB-Präsidentin Lagarde sagte am 14.10. in Bangkok, man sehe bislang keine Zweitrundeneffekte, verfolge aber Lohnforderungen über Tarifverträge; zu Frankreichs Fiskallage sagte sie, die Lösung liege „zuerst in Frankreich selbst”. Eine Reuters-Umfrage unter 73 Ökonomen sieht die EZB am 29.10. mehrheitlich bei einer unveränderten Zinsentscheidung, erwartet aber inzwischen von einer Mehrheit eine Zinserhöhung im Dezember. Bundesfinanzminister Klingbeil hat für die Schnabel-Nachfolge im EZB-Direktorium (Bewerbungsfrist 28.10.) noch keinen deutschen Kandidaten benannt. In Frankreich debattiert die Nationalversammlung seit dem 13.10. den Haushalt 2027 von Ministerpräsident Lecornu.",
      blocks: [
        { h: "Wie hoch ist die Inflation in der Eurozone?", items: [
          { tag: "fakt", text: "Eurostat bestätigte am 16.10. final eine Inflation von 3,8 % für September (nach 3,2 % im August) – der höchste Stand seit September 2023. Energie trieb die Teuerung mit 18,8 bis 18,9 % (nach 14,3 % im August); die Kerninflation (ohne Energie und Nahrungsmittel) stieg von 2,4 auf 2,5 %.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] }
        ]},
        { h: "Was sagte EZB-Präsidentin Lagarde?", items: [
          { tag: "position", text: "Lagarde sagte am 14.10. in Bangkok: „We are not seeing any second-round effects yet. We cannot wait until they are fully visible, but we can anticipate them and look for signs. In Europe, one sees expectations of wage increases through collective agreements, we are tracking these points.”",
            ask: [{ label: "Was sind Zweitrundeneffekte?", ref: "e:inflation-what" }] },
          { tag: "position", text: "Zur französischen Fiskallage sagte Lagarde: „On French debt, the primary and first solution lies in French fiscal policy. Growth is not brilliant, but growth of 1.1% in 2026 is not bad.”" }
        ]},
        { h: "Was erwarten Ökonomen für die EZB-Sitzung am 29.10.?", items: [
          { tag: "unbestaetigt", text: "Eine Reuters-Umfrage unter 73 Ökonomen (5.–8.10.) sieht die überwiegende Mehrheit bei einem unveränderten Einlagensatz von 2,50 % am 29.10.; 64 der 73 Befragten erwarten inzwischen eine Zinserhöhung im Dezember, 58 % sehen den Einlagensatz dann bei 2,75 %, 24 von 73 bei 3,00 %.",
            ask: [{ label: "Was bedeutet ein Leitzins von 2,50 %?", ref: "t:leitzins" }] }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Bewerbungen für die Nachfolge von Isabel Schnabel im EZB-Direktorium können bis zum 28.10. eingereicht werden; die Eurogruppe will die Bewerbungen im November beraten. Bundesfinanzminister Klingbeil sagte, er kläre „gerade mit dem Kanzler”, mit welchem Namen Deutschland antritt – ein Kandidat ist weiterhin nicht benannt." }
        ]},
        { h: "Wie ist der Stand beim französischen Haushalt 2027?", items: [
          { tag: "fakt", text: "Die Regierung Lecornu hatte am 1.10. ein Konsolidierungspaket von rund 54 Mrd. Euro vorgelegt, um das Defizit 2027 auf 5,0 % des BIP zu senken; der Finanzausschuss der Nationalversammlung strich davon rund 10 Mrd. Euro an Steuererhöhungen. Die Plenardebatte zum Einnahmenteil läuft seit dem 13.10." },
          { tag: "position", text: "Rassemblement National und La France insoumise drohen mit einem Misstrauensantrag, sollte der Haushalt nicht ihren Vorstellungen entsprechen; Lecornu schließt den Einsatz von Verordnungen bei anhaltender Blockade nicht aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Eurozonen-Inflation auf den höchsten Stand seit drei Jahren gestiegen ist und sich die Ökonomenerwartung in Richtung einer Dezember-Zinserhöhung verschoben hat, während Lagarde zugleich keine Dringlichkeit signalisiert, zeigt eine schwierige Abwägung zwischen Preisstabilität und wirtschaftlicher Erholung kurz vor der Sitzung am 29.10." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, die US-Konjunkturdaten in Meldung 4.",
      terms: ["leitzins", "inflation", "kerninflation", "schuldenbremse"],
      followups: ["e:ecb-hike", "e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "Eurostat: Annual inflation up to 3.8% in the euro area", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-16102026-ap" },
        { title: "FXStreet: Lagarde speech – We're not seeing any second round effects yet", url: "https://www.fxstreet.com/news/lagarde-speech-were-not-seeing-any-second-round-effects-yet-202610140236" },
        { title: "RTE: ECB to hike rates again in December as inflation almost doubles 2% target – Reuters poll", url: "https://www.rte.ie/news/business/2026/1008/1594593-ecb-interest-rates-poll/" },
        { title: "Handelsblatt: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.handelsblatt.com/politik/deutschland/europaeische-zentralbank-rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag/100262803.html" },
        { title: "nachrichten.fr: Haushalt 2027 setzt Lecornus Regierung unter Druck", url: "https://nachrichten.fr/haushalt-2027-setzt-lecornus-regierung-unter-druck" }
      ]
    },

    /* 6 DEUTSCHLAND: BERLIN-KOALITION */
    {
      id: "berlin-sondierung-ergebnis-spd-gruene-linke-10-18", cats: ["germany"], when: "Sondierungsabschluss 17.10. · SPD-Landesvorstand entscheidet 21.10. · Linke-Parteitag verschoben auf 31.10.2026",
      headline: "SPD, Grüne und Linke einigen sich in Berlin auf Sondierungspapier und empfehlen Koalitionsverhandlungen",
      sec30: "SPD, Grüne und Die Linke haben ihre Sondierungsgespräche für eine künftige Berliner Landesregierung am 17.10. abgeschlossen und sich auf ein gemeinsames Papier mit dem Titel „Mehr gemeinsam, mehr Berlin” verständigt. Die Parteien empfehlen ihren Gremien, in Koalitionsverhandlungen einzutreten; ein fertiger Koalitionsvertrag liegt noch nicht vor. Das Papier sieht unter anderem vor, private Wohnungsunternehmen mit mehr als 10.000 Wohnungen oberhalb dieser Grenze gegen Entschädigung in eine öffentlich-rechtliche Anstalt zu überführen (rund 160.000 Wohnungen), einen Mietendeckel von 2 % sowie 100.000 neue Wohnungen. Der SPD-Landesvorstand soll am 21.10. entscheiden, die Linke hat ihren Parteitag auf den 31.10. verschoben. CDU-Landeschef Evers kritisierte das Ergebnis als „massenhaft ungedeckte Ausgabenversprechen”.",
      blocks: [
        { h: "Was wurde beschlossen oder vorgeschlagen?", items: [
          { tag: "fakt", text: "SPD, Grüne und Die Linke verständigten sich am 17.10. auf ein gemeinsames Sondierungspapier mit dem Titel „Mehr gemeinsam, mehr Berlin” und empfehlen ihren Parteigremien, in Koalitionsverhandlungen einzutreten. Ein fertiger Koalitionsvertrag liegt noch nicht vor – das ist erst der nächste Schritt." }
        ]},
        { h: "Was würde sich konkret ändern?", items: [
          { tag: "fakt", text: "Das Papier sieht vor, private Wohnungsunternehmen mit mehr als 10.000 Wohnungen oberhalb dieser Grenze gegen Entschädigung in eine öffentlich-rechtliche Anstalt zu überführen – dadurch sollen rund 160.000 Wohnungen in öffentliches Eigentum kommen. Weitere Punkte: ein Mietendeckel von 2 %, ein günstigeres Sozialticket für den ÖPNV und 100.000 neue Wohnungen.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Warum wird das vorgeschlagen?", items: [
          { tag: "einordnung", text: "Die drei Parteien begründen die Vorschläge mit der angespannten Lage auf dem Berliner Wohnungsmarkt; zusätzlich genannte Schwerpunkte des Papiers sind Sicherheit, insbesondere für jüdische Menschen in Berlin, und ein saubereres Stadtbild." }
        ]},
        { h: "Wer unterstützt das Ergebnis, und womit begründet er das?", items: [
          { tag: "position", text: "SPD, Grüne und Die Linke stellen das Sondierungsergebnis selbst als Grundlage für eine Zusammenarbeit (Senatsbildung „Rot-Grün-Rot”) dar und verweisen auf die oben genannten Wohnungsmarkt- und Sicherheitsziele." }
        ]},
        { h: "Wer kritisiert das Ergebnis, und womit begründet er das?", items: [
          { tag: "position", text: "CDU-Landeschef Stefan Evers bezeichnete das Sondierungsergebnis als „massenhaft ungedeckte Ausgabenversprechen” und als „Kapitulationserklärung von SPD und Grünen vor einer radikalen, in Teilen antisemitischen Linkspartei”. Sein Argument: Für die Vergesellschaftung von Wohnungen würden Milliarden ausgegeben, ohne dass eine einzige neue Wohnung entstehe; Investoren würden abgeschreckt und neue Bürokratie aufgebaut, was die Wohnungsknappheit verschärfe statt sie zu lösen." }
        ]},
        { h: "Welche nächsten Schritte und Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Der SPD-Landesvorstand soll am 21.10. über das Sondierungsergebnis entscheiden; die Linke hat ihren ursprünglich für den 18.10. geplanten Parteitag auf den 31.10. verschoben. Bei Zustimmung aller drei Parteien könnten die eigentlichen Koalitionsverhandlungen frühestens Anfang November beginnen." }
        ]}
      ],
      reaction: "Die Bundesebene wird in Meldung 7 behandelt.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "ZDFheute: Sondierung in Berlin beendet – Linke, Grüne und SPD einig", url: "https://www.zdfheute.de/politik/deutschland/sondierungen-berlin-linke-gruene-spd-100.html" },
        { title: "Berliner Zeitung: Durchbruch in Berlin – Linke, Grüne und SPD wollen koalieren und 160.000 Wohnungen vergesellschaften", url: "https://www.berliner-zeitung.de/article/durchbruch-in-berlin-linke-gruene-und-spd-wollen-koalieren-und-160000-wohnungen-vergesellschaften-10505209" },
        { title: "Tagesspiegel/dpa: Regierungsbildung – Rot-Grün-Rot in Berlin rückt näher, Kritik der CDU", url: "https://www.tagesspiegel.de/politik/dpa-regierungsbildung-rot-grun-rot-in-berlin-ruckt-naher-kritik-der-cdu-16173557.html" },
        { title: "Tagesspiegel: Berliner Linke verschiebt für Freitag geplanten Parteitag", url: "https://www.tagesspiegel.de/berlin/abstimmung-uber-koalitionsverhandlungen-berliner-linke-verschiebt-fur-freitag-geplanten-parteitag-16155393.html" }
      ]
    },

    /* 7 DEUTSCHLAND: BUND HAUSHALT/RENTE/KOALITIONSDEBATTE */
    {
      id: "bund-haushalt-rente-koalitionsdebatte-umfragen-10-18", cats: ["germany"], when: "Haushaltsausschuss-Anhörung 12.10. · Merz bei der Jungen Union 17.10. · Umfragen INSA 17.10., Forsa 13.10., Ipsos 08.10.2026",
      headline: "Bundeshaushalt 2027 sieht 118,7 Milliarden Euro neue Schulden vor, Sozialverbände warnen vor Kürzungen bei Wohngeld und Rente",
      sec30: "Bundesfinanzminister Klingbeil stellte am 12.10. den Haushaltsentwurf 2027 vor: Die Nettokreditaufnahme soll um 20,7 Mrd. auf 118,7 Mrd. Euro steigen, davon 85,4 Mrd. über die grundgesetzliche Ausnahme für Verteidigungsausgaben. Der Bundeszuschuss zur Rentenversicherung soll zwar auf 132,04 Mrd. Euro steigen, der geplante Zuwachs soll aber um weitere 1 Mrd. Euro gekürzt werden. Ein Bündnis aus VdK, SoVD, DGB, Caritas, Diakonie, AWO, Der Paritätische, ver.di, IG Metall und dem Mieterbund warnt vor Einschnitten bei Wohngeld, Elterngeld und den Rentenzuschüssen. Bundeskanzler Merz bekräftigte am 17.10. beim Deutschlandtag der Jungen Union, die Koalition solle „nicht um jeden Preis” fortgesetzt werden und bestand auf vollständiger Umsetzung der Rentenreform. Der neue Arbeitsminister Schweitzer lehnte vollständige Leistungssanktionen bei der Grundsicherung ab. Aktuelle Umfragen sehen die AfD weiterhin bei rund 27 bis 29 %.",
      blocks: [
        { h: "Was wurde beim Bundeshaushalt 2027 vorgeschlagen?", items: [
          { tag: "fakt", text: "Die Nettokreditaufnahme des Bundes soll 2027 um 20,7 Mrd. Euro auf 118,7 Mrd. Euro steigen; davon entfallen 33,4 Mrd. Euro auf die reguläre Schuldenregel, 85,4 Mrd. Euro auf die grundgesetzliche Ausnahme für Verteidigungs- und sicherheitspolitische Ausgaben. Für den Sozialetat sind 201 Mrd. Euro vorgesehen.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Was würde sich bei der Rente konkret ändern?", items: [
          { tag: "fakt", text: "Der Bundeszuschuss zur Rentenversicherung soll 2027 auf 132,04 Mrd. Euro steigen (2026: 127,42 Mrd. Euro); zugleich plant die Bundesregierung, den Zuwachs um eine weitere Milliarde Euro zu kürzen – zusammen mit früheren Maßnahmen ein Kürzungsvolumen von insgesamt 2,2 Mrd. Euro. Das betrifft die Finanzierungsstruktur der Rentenversicherung, nicht unmittelbar die Höhe laufender Renten.",
            ask: [{ label: "Wie finanziert sich die Rente?", ref: "e:rente-basics" }] }
        ]},
        { h: "Warum werden diese Schritte vorgeschlagen?", items: [
          { tag: "einordnung", text: "Die Bundesregierung begründet die Haushaltsplanung mit gestiegenen Verteidigungsausgaben und der Notwendigkeit, den Bundeshaushalt insgesamt zu konsolidieren." } ]},
        { h: "Wer unterstützt die Pläne, und womit begründet er das?", items: [
          { tag: "position", text: "Bundeskanzler Merz sagte am 17.10. beim Deutschlandtag der Jungen Union, er wolle einen „straffen Reformkurs” und bestehe auf vollständiger Umsetzung der Rentenreform; die Koalition solle „nicht um jeden Preis” fortgesetzt werden. Die Union strebt noch dieses Jahr einen Kabinettsbeschluss zur Rentenreform mit erster Lesung 2026 an." },
          { tag: "position", text: "Der neue Bundesarbeitsminister Alexander Schweitzer (SPD) sagte zu Leistungssanktionen bei der Grundsicherung: „Leistungen komplett zu streichen geht nicht.” Laut Statistik waren 2024 rund 0,6 % bzw. etwa 23.000 Personen von Leistungsminderungen wegen Arbeitsverweigerung betroffen." }
        ]},
        { h: "Wer kritisiert die Pläne, und womit begründet er das?", items: [
          { tag: "position", text: "Ein Bündnis aus VdK, SoVD, DGB, Caritas, Diakonie, AWO, Der Paritätische, ver.di, IG Metall und dem Deutschen Mieterbund warnt vor Einschnitten bei Wohngeld, Elterngeld sowie bei den Bundeszuschüssen zur Renten- und Krankenversicherung: „Wer an sozialen Leistungen spart, gefährdet das Fundament unserer Demokratie.” Der Sozialverband SoVD bezeichnete die geplante Kürzung des Rentenzuschusses als „versteckte Rentenkürzung”." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Bärbel Bas war Anfang Oktober aus persönlichen Gründen von ihren Ämtern als SPD-Co-Vorsitzende und Bundesarbeitsministerin zurückgetreten; Schweitzer wurde ihr Nachfolger. SPD-Chef Klingbeil kündigte eine komplette Neuwahl der SPD-Führung auf einem Bundesparteitag „um den Jahreswechsel” an." },
          { tag: "unbestaetigt", text: "Aktuelle Umfragen zeigen weiterhin deutliche Unterschiede zwischen den Instituten: INSA (17.10.) sieht die AfD bei 29 %, CDU/CSU bei 18 %, Grüne bei 14 %, SPD bei 13 %, Linke bei 11 %; Forsa (13.10.) sieht die AfD bei 26 %, CDU/CSU bei 19 %, Grüne bei 17 %, SPD bei 14 %; Ipsos (8.10.) sieht die AfD bei 28 %, CDU/CSU bei 20 %.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Die Berliner Koalitionsbildung wird in Meldung 6 behandelt.",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "ad-hoc-news: Bundeshaushalt 2027 – 118,7 Milliarden Euro Kreditaufnahme geplant", url: "https://www.ad-hoc-news.de/wirtschaft/bundeshaushalt-2027-118-7-milliarden-euro-kreditaufnahme-geplant/70026208" },
        { title: "Versicherungsbote: Rentenversicherung – Bundeszuschuss wird gekürzt", url: "https://www.versicherungsbote.de/id/4915131/Rentenversicherung-Bundeszuschuss-wird-gekurzt/" },
        { title: "it-boltwise.de: Merz stellt Koalition mit SPD vor Grenzen – Rentenpaket bleibt Priorität", url: "https://www.it-boltwise.de/merz-stellt-koalition-mit-spd-vor-grenzen-rentenpaket-bleibt-prioritaet.html" },
        { title: "leinetal24.de: Grundsicherungs-Streit – Schweitzer lehnt Totalsanktionen ab", url: "https://www.leinetal24.de/wirtschaft/grundsicherung-neuer-arbeitsminister-bremst-bei-totalsanktionen-zr-94540675.html" },
        { title: "dawum.de: Bundestagswahl-Umfragen im Wahltrend", url: "https://dawum.de/Bundestag/" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: EU-GIPFEL/UKRAINE */
    {
      id: "eu-gipfel-russische-vermoegen-ukraine-finanzierungsluecke-10-18", cats: ["world", "geo"], when: "EU-Gipfel Brüssel 15./16.10. ohne Entscheidung · Russischer Großangriff Nacht 16./17.10. · Ukrainischer Gegenangriff Nacht 16./17.10.2026",
      headline: "EU-Gipfel endet erneut ohne Entscheidung über russische Vermögenswerte, Russland greift ukrainische Energieinfrastruktur am Wochenende massiv an",
      sec30: "Der EU-Gipfel in Brüssel endete am 16.10. ohne Entscheidung über die Nutzung von rund 185 bis 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine; Belgiens Premierminister De Wever verlangt rechtlich bindende Garantien aller EU-Staaten für die gesamte Darlehenssumme. Schweden, die Niederlande, Spanien, Polen und die baltischen Staaten befürworten die Nutzung, Belgien, Italien und Frankreich leisten Widerstand. Die Ukraine bezifferte die Finanzierungslücke für 2027 auf rund 78 Mrd. US-Dollar. In der Nacht zum 17.10. führte Russland laut Präsident Selenskyj einen der größten Angriffe auf die ukrainische Energieinfrastruktur mit mindestens 8 Toten und Stromausfällen für über eine Million Menschen; die Ukraine konterte mit einem Drohnenangriff auf die Region Moskau und einem Schlag gegen eine Drohnenfabrik in der Oblast Rostow.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der EU-Gipfel in Brüssel endete am 16.10. ohne Einigung über die Nutzung von rund 185 bis 210 Mrd. Euro eingefrorener russischer Vermögenswerte; eine Entscheidung wurde erneut vertagt.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:9" }] }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "Belgiens Premierminister Bart De Wever sagte: „This wasn't even done during World War II” und verlangte vollständiges gegenseitiges Risiko-Teilen: „I want full mutual risk-sharing, because there is a big risk. We will suffer under enormous claims. So if you want to do this, we must do it together.”" },
          { tag: "fakt", text: "Schweden, die Niederlande, Spanien und Polen – unterstützt von den baltischen Staaten – befürworten die Nutzung der eingefrorenen Vermögen; Belgien, Italien und Frankreich leisten Widerstand. Die Ukraine gibt die Finanzierungslücke für 2027 mit rund 78 Mrd. US-Dollar an." },
          { tag: "position", text: "EU-Kommissionspräsidentin von der Leyen und Ratspräsident Costa sicherten Präsident Selenskyj weitere europäische Hilfe zu; Costa sagte: „Now is not the time to withdraw support for Ukraine. Now is not the time to relax sanctions against Russia.”" }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Die Idee eines zinslosen „Reparationsdarlehens” wurde bereits im Oktober 2025 diskutiert: Die eingefrorenen russischen Reserven blieben dabei rechtlich im Besitz Russlands, Euroclear würde das gegen sie gehaltene Guthaben in null-verzinste EU-Anleihen umwandeln; eine Rückzahlung würde erst fällig, falls Russland im Rahmen eines künftigen Friedensabkommens Reparationen leistet. Belgien war schon beim damaligen Vorstoß der prominenteste Gegner." }
        ]},
        { h: "Welche wirtschaftlichen und militärischen Entwicklungen gab es am Wochenende?", items: [
          { tag: "fakt", text: "In der Nacht zum 17.10. führte Russland laut Präsident Selenskyj „einen der größten Angriffe” auf die ukrainische Energieinfrastruktur: Mehr als 15 Strom- und Übertragungsanlagen wurden getroffen, mindestens 8 Menschen starben, 60 wurden verletzt, zwei Einkaufszentren wurden getroffen, über eine Million Menschen verloren vorübergehend Strom; in der Region Wolhynien waren rund 370.000 Haushalte betroffen." },
          { tag: "fakt", text: "Die Ukraine griff im Gegenzug eine russische Drohnenfabrik in der Oblast Rostow an (Produktion der Drohnentypen Sarytsch und Klin) und setzte in der Nacht zum 17.10. rund 144 Drohnen gegen die Region Moskau ein, was zu Einschränkungen an Moskauer Flughäfen führte." },
          { tag: "unbestaetigt", text: "Russlands geschätzte Gesamtverluste an Kampfpersonal seit Kriegsbeginn beliefen sich laut ukrainischen/westlichen Schätzungen zum 17.10. auf rund 1.562.970 – eine Zahl, die unabhängig nicht überprüfbar ist." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EU die Entscheidung über die russischen Gelder erneut vertagte, während sich zugleich die gegenseitigen Angriffe auf Energieinfrastruktur am Wochenende fortsetzten, zeigt, wie eng die Finanzierungsfrage für die Ukraine mit dem anhaltenden militärischen Konflikt verbunden ist." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft, die deutsche Verteidigungspolitik in Meldung 10.",
      terms: [],
      followups: ["e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "eurointegration.com.ua: Belgian PM explains why EU summit did not move on frozen Russian assets", url: "https://www.eurointegration.com.ua/eng/news/2026/10/16/7247864/" },
        { title: "Latin Times: Belgium won't move on Russia's $249B frozen assets", url: "https://www.latintimes.com/belgium-blocks-eur185-billion-deal-ukraine-faces-78-billion-funding-cliff-next-year-600258" },
        { title: "Kyiv Independent: Russia launches 'one of its largest attacks' on Ukraine's energy grid", url: "https://kyivindependent.com/russian-attacks-kill-7-injure-dozens-across-ukraine-amid-continued-strikes-on-energy-infrastructure/" },
        { title: "Al Jazeera: Russian attacks in Ukraine kill at least 8, cut power to 1 million", url: "https://www.aljazeera.com/news/2026/10/17/russian-attacks-in-ukraine-kill-at-least-8-cut-power-to-1-million" },
        { title: "onvista: Von der Leyen und Costa versichern Selenskyj auf EU-Gipfel weitere Hilfe", url: "https://www.onvista.de/news/2026/10-16-von-der-leyen-und-costa-versichern-selenskyj-auf-eu-gipfel-weitere-hilfe-0-20-26564818" }
      ]
    },

    /* 9 GEOPOLITIK: HORMUZ/RIAD/ADEN */
    {
      id: "hormuz-seemine-houthi-aden-riad-flughafen-10-18", cats: ["geo"], when: "Seeminen-Vorfall 17.10. (unbestätigt) · Houthi-Angriff Aden 16.10. · Flughafen Riad NOTAM-Ablauf 17.10., 21:00 Uhr UTC, Wiedereröffnung unbestätigt",
      headline: "Iran meldet Seeminen-Vorfall an Supertanker in der Straße von Hormus, Flughafen Riad bleibt ohne bestätigten Wiedereröffnungstermin",
      sec30: "Die iranische Revolutionsgarde (IRGC) meldete am 17.10., ein Supertanker mit mehr als 2 Mio. Barrel Rohöl sei beim Befahren einer „nicht genehmigten Route” in der Straße von Hormus auf eine Seemine gelaufen; es habe eine Explosion und einen Großbrand gegeben. Die Angabe ist unabhängig nicht bestätigt. Die britische Seefahrtsbehörde UKMTO meldete zusätzlich zwei weitere Angriffe auf Handelsschiffe vor der saudischen Küste nahe Jubail. Die USA (CENTCOM) und Iran erhoben am 17.10. gegensätzliche Kontrollansprüche über die Straße von Hormus. Der Flughafen Riad blieb auch nach Ablauf der ursprünglichen NOTAM-Sperrfrist (17.10., 21:00 Uhr UTC) ohne bestätigten Wiedereröffnungstermin geschlossen. Am 16.10. hatten Houthi-Kräfte den Präsidentenpalast in Aden mit fünf Raketen angegriffen (5 Tote, 16 Verletzte); der UN-Sicherheitsrat verurteilte die Eskalation.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "unbestaetigt", text: "Die iranische Revolutionsgarde meldete am 17.10., ein Supertanker mit mehr als 2 Mio. Barrel Rohöl sei in der Straße von Hormus auf eine Seemine gelaufen, es habe eine Explosion und einen Großbrand gegeben. Diese Angabe stammt von einer Konfliktpartei und ist unabhängig nicht bestätigt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Die britische Seefahrtsbehörde UKMTO meldete zusätzlich zwei weitere Angriffe auf Handelsschiffe vor der saudischen Küste nahe Jubail: Ein Schiff wurde von einem unbekannten Projektil getroffen, ein zweiter Tanker von einem kleinen Boot aus mit einer Panzerfaust am Heck beschossen; in beiden Fällen blieb die Besatzung nach bisherigen Angaben unverletzt." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "US-Streitkräfte (CENTCOM) erklärten am 17.10., „amerikanische Streitkräfte und regionale Partner” kontrollierten die Straße von Hormus eindeutig, während Iran erklärte, die Straße werde „nicht öffnen, bis unsere sieben Bedingungen basierend auf dem Islamabad-Memorandum erfüllt sind”." },
          { tag: "fakt", text: "Houthi-Kräfte griffen am 16.10. den Präsidentenpalast in Aden mit fünf Raketen an; nach Angaben des jemenitischen Gesundheitsministers wurden mindestens 5 Menschen getötet und 16 verletzt. Die jemenitische Regierung erklärte, sie werde trotz der Sicherheitslage weiter von Aden aus arbeiten." },
          { tag: "fakt", text: "Der UN-Sicherheitsrat verurteilte in einer gemeinsamen Erklärung die „eskalierenden” Houthi-Angriffe auf Saudi-Arabien und bekräftigte das Recht Saudi-Arabiens auf Selbstverteidigung; die jemenitische Regierung begrüßte diese Positionierung." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Laut Berichten war der Oktober bislang der Monat mit den meisten Schiffsangriffen seit Beginn des Konflikts am 28. Februar: Von 12 bestätigt angegriffenen Schiffen erreichte die Hälfte ihr Ziel, eines sank, zwei wurden manövrierunfähig. Der Flughafen Riad war bereits seit Angriffen am 10./11.10. geschlossen; die NOTAM-Sperrfrist lief am 17.10., 21:00 Uhr UTC, formal aus, ohne dass die saudische Luftfahrtbehörde GACA eine Wiedereröffnung bestätigt hat." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Im Oktober flossen durchschnittlich nur noch rund 11,62 Mio. Barrel pro Tag durch die Straße von Hormus – rund 68 % des Referenzwerts von 17,15 Mio. Barrel; Frachtraten für Supertanker sind laut Berichten binnen zwölf Monaten um mehr als 800 % gestiegen.",
            ask: [{ label: "Mehr zum Ölpreis und zur OPEC+", ref: "s:15" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl der unbestätigte Seeminen-Vorfall als auch weitere Tanker- und Houthi-Angriffe anhalten, während ein Wiedereröffnungstermin für den Flughafen Riad weiterhin unklar ist, zeigt, wie sich mehrere Krisenherde am Golf gegenseitig verstärken." }
        ]}
      ],
      reaction: "Die Lage um die Ukraine und den EU-Gipfel wird in Meldung 8 behandelt, die Ölpreis-Einordnung in Meldung 15.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "euronews: Tanker brennt nach Minentreffer in der Straße von Hormus", url: "https://de.euronews.com/2026/10/17/tanker-brennt-nach-minentreffer-in-der-strasse-von-hormus" },
        { title: "Al Jazeera: US and Iran both claim control of Strait of Hormuz amid attacks on vessels", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { title: "Al Jazeera: Houthis strike Yemen's Aden – what that means", url: "https://www.aljazeera.com/news/2026/10/17/iran-backed-houthis-strike-yemens-aden-what-that-means" },
        { title: "aerocorner.com: Riyadh Airport Closure NOTAM Ends Oct 17", url: "https://aerocorner.com/news/riyadh-airport-reopen-notam-october-17-air-india-indigo-akasa/" },
        { title: "Yemen Monitor: Yemen Welcomes UN Security Council's Position on Houthi Attacks", url: "https://www.yemenmonitor.com/en/Details/ArtMID/908/ArticleID/185034" }
      ]
    },

    /* 10 DEFENCE */
    {
      id: "defence-auftraege-rtx-anduril-rheinmetall-10-18", cats: ["defence"], when: "RTX-Verträge 01.–08.10. · Anduril-Verträge ca. 12.10. · Rheinmetall-Kursanstieg Fr 16.10.2026",
      headline: "RTX und Anduril erhalten weitere Milliardenaufträge, Rheinmetall-Aktie erholt sich deutlich vom Monatstief",
      sec30: "RTX/Raytheon erhielt im Oktober einen Vertrag über bis zu 24,4 Mrd. Dollar für SM-6-Abfangraketen der US Navy (1.10.) und einen weiteren über bis zu 6,3 Mrd. Dollar für SM-3-Block-IB-Abfangraketen mit der Missile Defense Agency (8.10.). Anduril erhielt neue Militärverträge im Gesamtwert von bis zu 4,7 Mrd. Dollar, wenige Tage nachdem Mitgründer Palmer Luckey am 12.10. in ein Gremium der Trump-Administration zur Kriegsplanung berufen worden war. Die Rheinmetall-Aktie legte am Freitag, 16.10., um rund 4,5 bis 5,9 % zu, gestützt von Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende – bleibt damit aber weiterhin deutlich unter ihrem Rekordhoch von rund 2.008 Euro aus dem Oktober 2025.",
      blocks: [
        { h: "Welche neuen Großaufträge erhielt RTX/Raytheon?", items: [
          { tag: "fakt", text: "RTX/Raytheon erhielt einen Vertrag über bis zu 24,4 Mrd. Dollar für SM-6-Abfangraketen der US Navy (fünf Jahre plus zwei Optionsjahre, angekündigt 1.10.) sowie einen Vertrag über bis zu 6,3 Mrd. Dollar für SM-3-Block-IB-Abfangraketen mit der Missile Defense Agency (8.10.), da das Pentagon seine Raketenabwehr-Bestände wieder auffüllen will." }
        ]},
        { h: "Was macht Anduril?", items: [
          { tag: "fakt", text: "Anduril erhielt Militärverträge im Gesamtwert von bis zu 4,7 Mrd. Dollar, wenige Tage nachdem Mitgründer Palmer Luckey am 12.10. in ein Gremium der Trump-Administration zur Kriegsplanung berufen worden war." }
        ]},
        { h: "Wie entwickelte sich die Rheinmetall-Aktie?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie stieg am Freitag, 16.10., um rund 4,5 bis 5,9 % auf rund 1.076 bis 1.089 Euro, laut Berichten getrieben von Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende.",
            ask: [{ label: "Mehr zur DAX-Entwicklung am Freitag", ref: "n:dax" }] },
          { tag: "einordnung", text: "Das ist eine deutliche Erholung von den Tiefs, die die Aktie Anfang Oktober erreicht hatte, bleibt aber weiterhin rund die Hälfte unter dem bisherigen Rekordhoch von rund 2.008 Euro aus dem Oktober 2025." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl amerikanische als auch europäische Rüstungskonzerne weiterhin neue Großaufträge erhalten, spiegelt die anhaltend hohe sicherheitspolitische Priorität dieses Bereichs wider." }
        ]}
      ],
      reaction: "Die Hintergründe des Ukraine-Kriegs werden in Meldung 8 behandelt, der deutsche Haushalt in Meldung 7.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "US News: RTX's Raytheon Wins up to $6.3 Billion US Missile Contract", url: "https://www.usnews.com/news/top-news/articles/2026-10-08/rtxs-raytheon-wins-up-to-6-3-billion-us-missile-contract" },
        { title: "USNI News: Navy Contracts RTX for $24.4B Standard Missile-6 Deal", url: "https://news.usni.org/2026/10/02/navy-contracts-rtx-for-24-4b-standard-missile-6-deal" },
        { title: "Orange County Business Journal: Anduril Lands $4.7B in New Military Contracts", url: "https://www.ocbj.com/uncategorized/anduril-lands-4-7b-in-new-military-contracts/" },
        { title: "ms-aktuell.de: Rheinmetall-Aktie – fast 52 Prozent unter dem Rekordhoch", url: "https://ms-aktuell.de/welt/rheinmetall-aktie-kursrutsch-29-09-2026/" }
      ]
    },

    /* 11 DEALS: BUMBLE/CCC */
    {
      id: "deal-bumble-ithaca-ccc-gtcr-elliott-10-18", cats: ["deals", "pe"], when: "Bumble-Ankündigung 13.10. · CCC-Ankündigung 16.10. · Closing Bumble erwartet Q4 2026, CCC erwartet Q1 2027",
      headline: "Ithaca Holdings übernimmt Bumble für 1,3 Milliarden Dollar, GTCR und Elliott kaufen CCC Intelligent Solutions für 6,1 Milliarden Dollar",
      sec30: "Bumble Inc. – die Dating-App-Gruppe hinter Bumble, Badoo und BFF – kündigte am 13.10. an, von Ithaca Holdings (geführt von Ravi Gupta und John Hegeman) für rund 1,3 Mrd. Dollar in bar übernommen zu werden, 6,05 Dollar je Aktie, eine Prämie von 138 % gegenüber dem Schlusskurs vom 9.10.; Closing wird für das vierte Quartal 2026 erwartet. Separat einigten sich GTCR und der Finanzinvestor Elliott Investment Management am 16.10. darauf, den Versicherungs-Software-Anbieter CCC Intelligent Solutions für rund 6,1 Mrd. Dollar Unternehmenswert (7,75 Dollar je Aktie, 44 % Prämie) von der Börse zu nehmen; Closing wird ohne Finanzierungsvorbehalt für das erste Quartal 2027 erwartet.",
      blocks: [
        { h: "Was wurde bei Bumble angekündigt?", items: [
          { tag: "fakt", text: "Ithaca Holdings übernimmt Bumble Inc. für rund 1,3 Mrd. Dollar in bar, 6,05 Dollar je Aktie – eine Prämie von 138 % gegenüber dem Schlusskurs vom 9.10.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Ravi Gupta und John Hegeman werden Co-CEOs; Closing wird für das vierte Quartal 2026 erwartet." }
        ]},
        { h: "Was wurde bei CCC Intelligent Solutions angekündigt?", items: [
          { tag: "fakt", text: "GTCR und der Finanzinvestor Elliott Investment Management einigten sich am 16.10. darauf, CCC Intelligent Solutions, einen Anbieter von Software für Versicherungsschäden, für rund 6,1 Mrd. Dollar Unternehmenswert (7,75 Dollar je Aktie, 44 % Prämie gegenüber dem Kurs vor Aufkommen von Verkaufsgerüchten) in bar von der Börse zu nehmen; der Deal enthält keine Finanzierungsbedingung, Closing wird für das erste Quartal 2027 erwartet.",
            ask: [{ label: "Was ist Enterprise Value?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "Angaben zu einem EV/EBITDA-Bewertungsmultiplikator oder zu beratenden Banken nennen die verfügbaren Quellen nicht.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich zwei Unternehmen innerhalb weniger Tage mit Rückendeckung von Finanzinvestoren von der Börse genommen werden, passt zu einer anhaltenden Welle von Take-private-Deals in Konsum- und Versicherungstechnologie." }
        ]}
      ],
      deal: { value: "1,3 Mrd. $ (Bumble) / 6,1 Mrd. $ (CCC Intelligent Solutions)", buyer: "Ithaca Holdings (Bumble) · GTCR & Elliott Investment Management (CCC)", target: "Bumble Inc. · CCC Intelligent Solutions", sector: "Dating-Apps / Versicherungs-Software", type: "Take-private" },
      reaction: "Weitere Deals und der Stand im Private-Credit-Markt werden in Meldung 13 behandelt.",
      terms: ["take-private", "enterprise-value", "ebitda"],
      followups: ["e:take-private-why", "e:ma-steps"],
      sources: [
        { title: "Businesswire: Bumble Inc. to Be Acquired by Ithaca Holdings", url: "https://www.businesswire.com/news/home/20261013006131/en/Bumble-Inc.-to-Be-Acquired-by-Ithaca-Holdings-the-Long-Term-Holding-Company-for-Enduring-Technology-Businesses" },
        { title: "Insurance Journal: CCC Intelligent Solutions Agrees to $6.1B Take-Private Deal", url: "https://www.insurancejournal.com/news/national/2026/10/16/889163.htm" }
      ]
    },

    /* 12 DEALS/PRIVATE CREDIT: FAIRFAX/IDBI, SOFTBANK, BDC */
    {
      id: "fairfax-idbi-softbank-allied-private-credit-10-18", cats: ["deals", "pe", "credit"], when: "Kabinettsgenehmigung Indien 14.10. · SoftBank/Allied-Bericht 16.10. · Private-Credit-Fundraising Q1–Q3 2026",
      headline: "Fairfax übernimmt Mehrheit an Indiens IDBI Bank für 5,6 Milliarden Dollar, SoftBank prüft Milliarden-Übernahme von Allied Universal",
      sec30: "Die kanadische Fairfax Financial Holdings erhielt am 14.10. die Genehmigung der indischen Regierung, rund 60,72 % der IDBI Bank für etwa 5,6 Mrd. Dollar (81 Rupien je Aktie) zu übernehmen – der größte ausländische Investment-Deal in Indiens Bankensektor. Laut Berichten vom 16.10. prüft SoftBank zudem eine Übernahme des US-Sicherheitsdienstleisters Allied Universal für rund 18 Mrd. Dollar Eigenkapitalwert; eine endgültige Entscheidung ist laut Quellenlage noch nicht gefallen. Im Private-Credit-Markt sammelten Direct-Lending-Fonds in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein (+35 % gegenüber dem Vorjahr), während das Kreditvergabevolumen im dritten Quartal um 28 % auf 49,77 Mrd. Dollar sank; mehrere Kreditmanager prüfen laut Berichten Übernahmen angeschlagener Business Development Companies.",
      blocks: [
        { h: "Was wurde beim IDBI-Bank-Deal angekündigt?", items: [
          { tag: "fakt", text: "Die indische Regierung genehmigte am 14.10. die Übernahme von rund 60,72 % der IDBI Bank durch Fairfax Financial Holdings (Kanada, Prem Watsa) für rund 5,6 Mrd. Dollar (81 Rupien je Aktie); verkauft werden Anteile des indischen Staates (30,48 %) und der Lebensversicherung LIC (30,24 %). Es gilt laut Berichten als größter ausländischer Investment-Deal in Indiens Bankensektor." }
        ]},
        { h: "Was ist bei SoftBank und Allied Universal im Gespräch?", items: [
          { tag: "unbestaetigt", text: "SoftBank Group prüft laut einem Bericht vom 16.10. eine Übernahme des US-Sicherheitsdienstleisters Allied Universal für rund 18 Mrd. Dollar Eigenkapitalwert; eine endgültige Entscheidung ist laut der Quelle noch nicht gefallen. Angaben zu Finanzierung oder Zeitplan nennen die verfügbaren Quellen nicht." }
        ]},
        { h: "Wie stellt sich der Private-Credit-Markt aktuell dar?", items: [
          { tag: "fakt", text: "Direct-Lending-Fonds sammelten in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein (+35 % gegenüber dem Vorjahr, höchster 9-Monats-Wert seit 2016), während das Kreditvergabevolumen im dritten Quartal um 28 % auf 49,77 Mrd. Dollar sank, weil Kreditnehmer verstärkt auf günstigere, breit syndizierte Kredite ausweichen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "unbestaetigt", text: "Mindestens vier Kreditmanager (unter anderem Ares, Barings, BC Partners, Churchill Asset Management) prüfen laut Berichten Übernahmen angeschlagener Business Development Companies (BDCs); mehrere börsennotierte BDCs befinden sich in formalen strategischen Überprüfungen.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "fakt", text: "Der IWF widmet seinem Global Financial Stability Report (Oktober 2026) ein Kapitel zu Private Credit und warnt vor Hebelwirkung und Liquiditätsdruck in diesem stark gewachsenen Markt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass weiterhin Rekordsummen in den Private-Credit-Markt fließen, während institutionelle Beobachter wie der IWF zugleich vor Risiken warnen und einzelne Kreditfonds unter Druck geraten, zeigt eine wachsende Sorge um die Widerstandsfähigkeit dieses Marktes." }
        ]}
      ],
      reaction: "Die Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "non-accrual"],
      followups: ["e:private-credit-what", "e:pe-money", "e:nonaccrual-default"],
      sources: [
        { title: "Bloomberg: Fairfax to Buy IDBI for $5.6 Billion in Biggest India Bank Deal", url: "https://www.bloomberg.com/news/articles/2026-10-14/fairfax-buys-idbi-stake-for-5-6-billion-in-india-s-biggest-bank-deal" },
        { title: "KSL: SoftBank weighs $18 billion acquisition of Allied Universal, Bloomberg News reports", url: "https://www.ksl.com/article/51637421/softbank-weighs-18-billion-acquisition-of-allied-universal-bloomberg-news-reports" },
        { title: "privateequitywire.co.uk: Private credit fundraising hits record $129bn despite 28% decline in lending", url: "https://www.privateequitywire.co.uk/private-credit-fundraising-hits-record-129bn-despite-28-decline-in-lending/" }
      ]
    },

    /* 13 TECHNOLOGIE: KI-SORGEN/COREWEAVE/CHIPS */
    {
      id: "ki-aktien-sorgen-coreweave-chipwerte-huang-10-18", cats: ["tech"], when: "CoreWeave-Kursverlust 14.–16.10. · Huang-Aussage 17.10. · Intel-Kursverlust 16.10. · Kospi-Erholung Fr 16.10.2026",
      headline: "Sorgen um KI-Bewertungen und CoreWeave-Schulden halten an, Nvidia-Chef Huang beschwichtigt, asiatische Chipwerte erholen sich nur teilweise",
      sec30: "Die Aktie des KI-Cloud-Anbieters CoreWeave fiel in der Woche um mehr als 15 %, zeitweise über 20 %; die Rendite seiner 2032 fälligen Anleihen stieg auf ein Rekordniveau von rund 14,5 bis 15 % (Ausgabe im Juni noch mit 9,625 % Kupon). CoreWeave hat 2026 bereits über 35 Mrd. Dollar Kapital aufgenommen und trägt rund 52 Mrd. Dollar Schulden und Leasingverpflichtungen. Nvidia-Chef Jensen Huang sagte am 17.10. bei einem Termin in Berlin: „All of this is going to pass” und äußerte sich optimistisch zu CoreWeaves Finanzierungskosten. Der Philadelphia-Halbleiterindex SOX fiel den achten Tag in Folge; Intel verlor am Freitag 5,8 % auf 89,85 Dollar, nachdem TSMC-Chef Wei Kapazitätsengpässe bei Intels Packaging-Technologie angesprochen hatte. Asiatische Speicherchip-Werte erholten sich am Freitag nur teilweise von ihrem Einbruch der Vorwoche.",
      blocks: [
        { h: "Wie geht es CoreWeave und der Sorge um KI-Schulden?", items: [
          { tag: "fakt", text: "Die CoreWeave-Aktie fiel in der Woche um mehr als 15 %, zeitweise über 20 %; die Rendite seiner 2032 fälligen Anleihen stieg auf ein Rekordniveau von rund 14,5 bis 15 % (Ausgabe im Juni noch mit 9,625 % Kupon). CoreWeave hat 2026 über 35 Mrd. Dollar Kapital aufgenommen, trägt rund 52 Mrd. Dollar Schulden und Leasingverpflichtungen und zahlte zuletzt rund 640 Mio. Dollar Netto-Zinsen pro Quartal – etwa ein Viertel des Umsatzes.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] }
        ]},
        { h: "Was sagte Nvidia-Chef Jensen Huang dazu?", items: [
          { tag: "position", text: "Jensen Huang sagte am 17.10. bei einem Termin in Berlin: „All of this is going to pass, and the reason for that is very simple. It's going to be transformative. It's going to impact in a very positive way every single industry and every single country.” Zu CoreWeave konkret: „CoreWeave's strength is improving every day. I'm optimistic. Their cost of capital is actually decreasing.”",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Wie entwickelten sich weitere Chipwerte?", items: [
          { tag: "fakt", text: "Der Philadelphia-Halbleiterindex SOX fiel den achten Tag in Folge – die erste solche Serie seit Oktober 2008. Intel verlor am Freitag 5,8 % auf 89,85 Dollar, nachdem TSMC-Chef C.C. Wei am 15.10. signalisiert hatte, Kunden zu unterstützen, die wegen Kapazitätsengpässen bei Intels Packaging-Technologie nicht genug Kapazität erhalten; AMD gab 6,0 % ab, Micron 5,6 %, Broadcom 4,5 %." }
        ]},
        { h: "Wie geht es den asiatischen Speicherchip-Werten, und was macht CXMT?", items: [
          { tag: "fakt", text: "Nach dem Einbruch vom Donnerstag erholte sich der Kospi am Freitag um rund 2,05 bis 2,15 %, blieb für die Woche aber rund 14,46 % im Minus; das Kurs-Gewinn-Verhältnis des Kospi fiel trotz der Erholung auf ein 26-Jahres-Tief. Der chinesische Hersteller CXMT präsentierte eine neue, dichtere DDR5-Speicherarchitektur, was Sorgen vor einem möglichen Angebotsüberschuss ab 2029 nährt.",
            ask: [{ label: "Mehr zum Hintergrund des Chip-Ausverkaufs", ref: "e:custom-chips" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich asiatische Speicherchip-Werte nur teilweise erholten, während die Kreditwürdigkeit von KI-Cloud-Anbietern wie CoreWeave weiter im Fokus steht, zeigt, wie unübersichtlich die Lage in der KI- und Chipbranche derzeit bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion auf den Chip-Ausverkauf wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Yahoo Finance: CoreWeave's slump puts spotlight on debt behind AI boom", url: "https://finance.yahoo.com/technology/ai/articles/coreweaves-slump-puts-spotlight-debt-131324427.html" },
        { title: "Benzinga: CoreWeave Stock Forms H&S Pattern as Key Bond Yield Hits 15%", url: "https://www.benzinga.com/markets/equities/26/10/62428511/coreweave-stock-forms-hs-pattern-as-key-bond-yield-hits-15-amid-insider-selling" },
        { title: "The Edge Malaysia: Nvidia CEO on AI market turmoil – 'All of this is going to pass'", url: "https://theedgemalaysia.com/node/822194" },
        { title: "GuruFocus: Intel Corp (INTC) Shares Fall 5.8%", url: "https://www.gurufocus.com/news/9128327/intel-corp-intc-shares-fall-58-gf-value-says-still-overvalued" },
        { title: "Korea Times: Samsung, SK hynix sell-off excessive as memory outlook stays strong – analysts", url: "https://www.koreatimes.co.kr/economy/20261016/samsung-sk-hynix-sell-off-excessive-as-memory-outlook-stays-strong-analysts" }
      ]
    },

    /* 14 ENERGIE */
    {
      id: "energie-oelpreis-hormuz-gas-opec-10-18", cats: ["energy"], when: "Brent-Schluss Fr 16.10. · Seeminen-Vorfall 17.10. (unbestätigt) · TTF-Hoch Nacht zum 15.10. · OPEC+-Beschluss 04.10.2026",
      headline: "Ölpreis bleibt nach Tankerangriffen nahe Mehrmonatshoch, europäischer Gaspreis verharrt nahe Rekordniveau",
      sec30: "Brent schloss am Freitag, 16.10., bei rund 109,86 Dollar je Barrel (+3,7 % Tag, +4,9 % Woche), zeitweise über 110 Dollar – der höchste Stand seit Mai; am Samstag kam mit dem unbestätigten Seeminen-Vorfall in der Straße von Hormus ein weiterer Belastungsfaktor hinzu (Meldung 9). Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt. Der europäische Gas-Referenzpreis TTF erreichte in der Nacht zum 15.10. mit rund 87 Euro je Megawattstunde ein neues Hoch – den höchsten Stand seit Ende 2022. Die deutschen Gasspeicher lagen zuletzt bei rund 59,8 bis 60,4 % – deutlich unter dem Fünfjahresdurchschnitt von rund 87 % für diese Jahreszeit; der staatliche Gaseinkäufer SEFE soll zusätzlich 8 TWh beschaffen.",
      blocks: [
        { h: "Warum ist der Ölpreis zuletzt gestiegen?", items: [
          { tag: "fakt", text: "Brent schloss am Freitag, 16.10., bei rund 109,86 Dollar je Barrel (+3,7 % Tag, +4,9 % Woche), zeitweise über 110 Dollar – der höchste Stand seit Mai. Die US-Sorte WTI wird für Freitag uneinheitlich mit rund 97 bis 101 Dollar angegeben.",
            ask: [{ label: "Warum kann ein Konflikt den Ölpreis erhöhen?", ref: "e:why-oil-up-geo" }] },
          { tag: "unbestaetigt", text: "Am Samstag, 17.10., meldete die iranische Revolutionsgarde einen weiteren, unabhängig nicht bestätigten Zwischenfall (Seemine an einem Supertanker) in der Straße von Hormus, der den Ölpreis am Montag zusätzlich bewegen könnte. Mehr dazu in Meldung 9.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:9" }] }
        ]},
        { h: "Was hat die OPEC+ zuletzt beschlossen?", items: [
          { tag: "fakt", text: "Der Beschluss vom 4.10. – sieben Kernländer lassen die Fördermenge für November gegenüber Oktober unverändert – bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "fakt", text: "Der TTF-Referenzpreis erreichte in der Nacht zum 15.10. mit rund 87 Euro je Megawattstunde ein neues Hoch – den höchsten Stand seit Ende 2022.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Wie ist der Stand bei den Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen zuletzt bei rund 59,8 bis 60,4 % – deutlich unter dem Fünfjahresdurchschnitt von rund 87 % für diese Jahreszeit und auch unter dem Vorjahreswert von rund 76 %. Das politische Ziel von 80 % bis zum 1.11. gilt als kaum noch erreichbar; der staatliche Gaseinkäufer SEFE soll zusätzlich 8 TWh beschaffen. Die Bundesnetzagentur sieht aktuell keine unmittelbare Versorgungsgefährdung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Spannungen am Golf und knappe Gasspeicher sich derzeit gegenseitig verstärken, zeigt, wie eng Geopolitik und Energieversorgung vor dem Winter zusammenhängen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft, die deutsche Innenpolitik in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "Bloomberg: Brent Oil Surges Above $110 as Supply Risks Intensify", url: "https://www.bloomberg.com/news/articles/2026-10-16/oil-tops-110-for-first-time-since-may-as-supply-risk-grows" },
        { title: "Rio Times: Brent Oil Rises 3.7% to US$109.86 on Supply Fears", url: "https://www.riotimesonline.com/oil-markets-latam-friday-october-16-2026/" },
        { title: "CNBC: OPEC+ agrees to keep November oil output targets steady", url: "https://www.cnbc.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady.html" },
        { title: "it-boltwise.de: Europäische Gaspreise steigen auf 87,20 Euro – TTF setzt neuen Druck vor Winter", url: "https://www.it-boltwise.de/europaeische-gaspreise-steigen-auf-8720-euro-ttf-setzt-neuen-druck-vor-winter.html" },
        { title: "netz-trends.de: Gasspeicher bei 58 Prozent – Bund kauft 8 TWh nach", url: "https://www.netz-trends.de/gasspeicher-58-prozent-heizperiode-sefe-8-terawattstunden-15-dezember-2026-bundesnetzagentur-4-oktober-2026/" }
      ]
    },

    /* 15 ENERGIE/GEOPOLITIK PLATZHALTER ENTFERNT – FINALE 15. MELDUNG */
    {
      id: "geopolitik-us-iran-konflikt-einordnung-10-18", cats: ["geo", "world"], when: "Stand Konflikt USA/Israel/Iran „Tag 232” · Zwischenwahlen USA 3.11.2026",
      headline: "Konflikt zwischen USA, Israel und Iran hält an, Präsident Trump schließt Angriff vor den US-Zwischenwahlen aus",
      sec30: "Der im Februar 2026 begonnene Konflikt zwischen den USA, Israel und Iran dauert laut einem Konflikt-Tracker inzwischen über 230 Tage an und bildet den Hintergrund für die anhaltenden Angriffe in der Straße von Hormus und auf saudisches sowie jemenitisches Gebiet (Meldung 9). Präsident Trump sagte laut einer einzelnen Quelle, die USA würden Iran vor den Zwischenwahlen am 3.11. nicht angreifen; Iran soll laut einer Quelle Verteidigungsanlagen an Nuklearstandorten verstärken. Diese Angaben sind nicht unabhängig bestätigt.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "unbestaetigt", text: "Nach Angaben eines Konflikt-Trackers befindet sich der Konflikt zwischen den USA, Israel und Iran inzwischen im Bereich „Tag 230” seit seinem Beginn am 28. Februar 2026; diese Zählung stammt aus einer einzelnen Quelle." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "unbestaetigt", text: "Präsident Trump sagte laut einer einzelnen Quelle, die USA würden Iran vor den Zwischenwahlen am 3.11. nicht angreifen; Iran soll laut einer Quelle Verteidigungsanlagen an Nuklearstandorten verstärken. Beide Angaben sind unabhängig nicht bestätigt." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der Konflikt bildet seit Februar 2026 den Hintergrund für die wiederholten Angriffe in der Straße von Hormus, auf saudisches Gebiet und auf den Jemen, die in den Meldungen 9 und 15 beschrieben werden." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Der anhaltende Konflikt gilt laut Berichten als zentraler Treiber für die hohen Ölpreise und die gestörte Schifffahrt am Golf; mehr dazu in den Meldungen 9 und 14.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich der Konflikt über mehr als 230 Tage hinzieht, ohne dass eine der beschriebenen Eskalationsstufen bislang zu einer Lösung geführt hat, erklärt, warum die Lage am Golf immer wieder neue Schlagzeilen liefert, ohne dass sich der grundsätzliche Zustand ändert." }
        ]}
      ],
      reaction: "Die Lage in der Straße von Hormus wird in Meldung 9 vertieft, der Ölpreis in Meldung 14.",
      terms: [],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "CBS News: Ships in Strait of Hormuz still face 'indiscriminate attacks'", url: "https://www.cbsnews.com/live-updates/iran-war-us-houthi-saudi-arabia-trump/" },
        { title: "Al Jazeera: US and Iran both claim control of Strait of Hormuz amid attacks on vessels", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Freitag fielen S&P 500 (−1,1 %) und Nasdaq Composite (−2,1 %) wegen anhaltender KI-Bubble-Sorgen, während DAX (+0,94 %) und Euro Stoxx 50 (+0,58 %) dank Rüstungswerten und einer ASML-Erholung zulegten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die gegenläufige Entwicklung nennen Berichte Rüstungswerte wie Rheinmetall in Europa und anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen in den USA." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite blieb am Freitag weitgehend unverändert bei rund 5,08 bis 5,10 %; für die Bund-Rendite ließ sich auch dieses Wochenende kein über mehrere Quellen übereinstimmender Wert ermitteln (Spanne rund 3,42 bis 3,46 %)." },
    "central-banks-why": { tag: "position", story: 2, text: "Fed-Chef Warsh machte bei seiner Rede auf der IWF-Jahrestagung in Bangkok am 16.10. bewusst keine Aussage zum Zinspfad für die Sitzung am 27./28.10.; die FOMC-Blackout-Periode läuft seither bis zum 29.10." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Die eingepreiste Erhöhungswahrscheinlichkeit für Oktober lag am 17.10. bei rund 14 bis 16 % – gegenüber rund 13 bis 15 % direkt nach Warshs Rede kaum verändert." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold lag am Freitag weiter nahe seinem Mehrjahreshoch bei rund 4.170 bis 4.180 Dollar je Feinunze, gestützt von der unveränderten US-Rendite und der Erwartung einer Fed-Zinspause." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs stieg von 1,1208 auf 1,1253 Dollar – der fünfte Anstieg in Folge." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin bewegte sich über das Wochenende in einer engen Spanne von rund 80.655 bis 81.961 Dollar und lag Sonntagvormittag bei rund 81.700 Dollar." },
    "inflation-what": { tag: "position", story: 5, text: "EZB-Präsidentin Lagarde sagte am 14.10., man sehe bislang keine Zweitrundeneffekte bei der Inflation, verfolge aber Lohnforderungen über Tarifverträge; die Eurozonen-Inflation stieg im September final auf 3,8 %." },
    "ecb-hike": { tag: "unbestaetigt", story: 5, text: "Eine Reuters-Umfrage unter 73 Ökonomen sieht die EZB am 29.10. mehrheitlich bei einer unveränderten Zinsentscheidung, erwartet aber inzwischen von einer Mehrheit eine Zinserhöhung im Dezember auf 2,75 bis 3,00 %." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Bundeshaushalt 2027 sieht eine Nettokreditaufnahme von 118,7 Mrd. Euro vor; ein Sozialstaatsbündnis warnt vor Einschnitten bei Wohngeld, Elterngeld und Rentenzuschüssen." },
    "rente-basics": { tag: "fakt", story: 7, text: "Der Bundeszuschuss zur Rentenversicherung soll 2027 auf 132,04 Mrd. Euro steigen, der Zuwachs soll aber um weitere 1 Mrd. Euro gekürzt werden; der SoVD spricht von einer „versteckten Rentenkürzung”." },
    "debt-brake": { tag: "fakt", story: 7, text: "85,4 Mrd. Euro der geplanten Neuverschuldung 2027 sollen über die grundgesetzliche Ausnahme für Verteidigungs- und sicherheitspolitische Ausgaben aufgenommen werden." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "SPD, Grüne und Die Linke schlossen ihre Berliner Sondierungsgespräche am 17.10. ab und empfehlen Koalitionsverhandlungen; der SPD-Landesvorstand entscheidet am 21.10., die Linke tagt am 31.10." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Aktuelle Umfragen weichen weiterhin deutlich voneinander ab: INSA (17.10.) sieht die AfD bei 29 %, Forsa (13.10.) bei 26 %, Ipsos (8.10.) bei 28 %." },
    "hormuz": { tag: "unbestaetigt", story: 9, text: "Am 17.10. meldete die iranische Revolutionsgarde, ein Supertanker sei in der Straße von Hormus auf eine Seemine gelaufen; die Angabe ist unabhängig nicht bestätigt. Der Flughafen Riad blieb ohne bestätigten Wiedereröffnungstermin geschlossen." },
    "why-oil-up-geo": { tag: "fakt", story: 9, text: "Houthi-Kräfte griffen am 16.10. den Präsidentenpalast in Aden mit fünf Raketen an (5 Tote, 16 Verletzte); zusätzliche UKMTO-Meldungen zu Angriffen vor Saudi-Arabien kamen am 17.10. hinzu." },
    "defence-order": { tag: "fakt", story: 10, text: "RTX/Raytheon und Anduril erhielten im Oktober weitere Milliardenaufträge der US-Streitkräfte; die Rheinmetall-Aktie erholte sich am Freitag deutlich, bleibt aber unter ihrem Rekordhoch von Oktober 2025." },
    "take-private-why": { tag: "fakt", story: 11, text: "Bumble wird für 6,05 Dollar je Aktie (rund 1,3 Mrd. Dollar) von Ithaca Holdings übernommen, Closing erwartet im vierten Quartal 2026." },
    "ma-steps": { tag: "fakt", story: 11, text: "CCC Intelligent Solutions wird von GTCR und Elliott Investment Management für rund 6,1 Mrd. Dollar Unternehmenswert von der Börse genommen, Closing erwartet im ersten Quartal 2027." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Direct-Lending-Fonds sammelten in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein, während das Kreditvergabevolumen im dritten Quartal um 28 % sank." },
    "ai-capex": { tag: "position", story: 13, text: "Nvidia-Chef Jensen Huang sagte angesichts des Kursrückgangs von CoreWeave am 17.10., „all of this is going to pass”; die Anleiherendite des Unternehmens stieg zuvor auf ein Rekordniveau von rund 14,5 bis 15 %." },
    "custom-chips": { tag: "fakt", story: 13, text: "Der chinesische Hersteller CXMT präsentierte eine neue, dichtere DDR5-Speicherarchitektur; Sorgen vor einem Angebotsüberschuss ab 2029 belasten weiterhin asiatische Speicherchip-Werte." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "OpenAI hatte sein angestrebtes Gesamtbudget für Rechenleistung bereits im Februar 2026 von rund 1,4 Billionen auf rund 600 Mrd. Dollar reduziert; diese ältere Zahl wird im Kontext der aktuellen KI-Sorgen wieder diskutiert." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen zuletzt bei rund 59,8 bis 60,4 % – deutlich unter dem Fünfjahresdurchschnitt von rund 87 % für diese Jahreszeit." },
    "opec-plus-why": { tag: "fakt", story: 14, text: "Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt." },
    "gas-ttf": { tag: "fakt", story: 14, text: "Der TTF-Gaspreis erreichte in der Nacht zum 15.10. mit rund 87 Euro je Megawattstunde ein neues Hoch – den höchsten Stand seit Ende 2022." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent schloss am Freitag bei rund 109,86 Dollar je Barrel; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Worauf einigten sich SPD, Grüne und Die Linke am 17.10.2026 in Berlin?",
      options: [
        "Auf einen fertigen, unterschriebenen Koalitionsvertrag",
        "Auf ein Sondierungspapier mit der Empfehlung, Koalitionsverhandlungen aufzunehmen",
        "Auf den sofortigen Abbruch aller weiteren Gespräche",
        "Auf eine Minderheitsregierung ohne Die Linke"
      ],
      answer: 1,
      explain: "Die drei Parteien verständigten sich auf das Sondierungspapier „Mehr gemeinsam, mehr Berlin” und empfehlen ihren Gremien, in Koalitionsverhandlungen einzutreten; ein fertiger Koalitionsvertrag liegt noch nicht vor."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 9,
      q: "Angenommen, der am 17.10.2026 von der iranischen Revolutionsgarde gemeldete Seeminen-Vorfall in der Straße von Hormus würde sich unabhängig bestätigen lassen. Was würde dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Ein automatisches Ende aller Spannungen am Golf",
        "Ein garantierter Rückgang des Ölpreises",
        "Zusätzlicher Aufwärtsdruck auf den Ölpreis und weitere Störungen der Schifffahrt",
        "Eine sofortige Wiedereröffnung des Flughafens Riad"
      ],
      answer: 2,
      explain: "Schon unbestätigte Vorfälle in der Straße von Hormus haben den Ölpreis in den vergangenen Wochen wiederholt nach oben getrieben; eine bestätigte Eskalation würde diesen Effekt eher verstärken statt die Lage zu entspannen."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 5,
      q: "Wie hoch war die Inflation in der Eurozone im September 2026 laut der finalen Eurostat-Zahl vom 16.10.2026?",
      options: [
        "2,5 %",
        "3,2 %",
        "3,8 %",
        "4,7 %"
      ],
      answer: 2,
      explain: "Eurostat bestätigte am 16.10. final eine Inflation von 3,8 % für September (nach 3,2 % im August) – der höchste Stand seit September 2023, vor allem wegen hoher Energiepreise."
    },
    {
      topic: "Technologie", type: "Fakt", story: 13,
      q: "Was sagte Nvidia-Chef Jensen Huang am 17.10.2026 zur Kursentwicklung von CoreWeave?",
      options: [
        "„All of this is going to pass”",
        "Er äußerte sich nicht dazu",
        "Er riet Anlegern, ihre CoreWeave-Aktien zu verkaufen",
        "Er bestätigte, dass Nvidia bei CoreWeave aussteigen werde"
      ],
      answer: 0,
      explain: "Huang sagte, die aktuellen Sorgen würden vorübergehen und Künstliche Intelligenz werde langfristig jede Branche positiv verändern; zu CoreWeave sagte er zudem, dessen Finanzierungskosten sänken bereits wieder."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, Belgien würde sein Veto gegen die Nutzung der eingefrorenen russischen Vermögenswerte aufgeben. Was würde das für die von der Ukraine genannte Finanzierungslücke von rund 78 Mrd. Dollar für 2027 unter sonst gleichen Bedingungen am ehesten bedeuten?",
      options: [
        "Ein automatisches Ende des Ukraine-Kriegs",
        "Eine deutlich einfachere Deckung der Finanzierungslücke, ohne dass der Krieg dadurch automatisch endet",
        "Eine automatische Aufhebung aller EU-Sanktionen gegen Russland",
        "Keine Auswirkung, da die Gelder ohnehin nicht genutzt werden dürften"
      ],
      answer: 1,
      explain: "Ohne Belgiens Veto könnte die EU leichter auf die rund 185 bis 210 Mrd. Euro eingefrorener Vermögenswerte zugreifen und damit die von der Ukraine genannte Finanzierungslücke leichter decken; das würde den militärischen Konflikt selbst aber nicht automatisch beenden."
    }
  ]
};
