// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-02",
  dateLabel: "Montag, 2. November 2026",
  updatedLabel: "Recherchestand 02.11.2026",
  marketNote: "Diese Ausgabe entsteht am Montagmorgen, 2.11.2026. Die Börsen in Frankfurt und der Eurozone handeln bereits seit dem Vormittag; DAX und Euro Stoxx 50 zeigen daher Vormittags- bzw. frühe Nachmittagswerte. Die US-Kassamärkte (S&P 500, Nasdaq Composite, Dow Jones) öffnen erst um 15:30 MEZ; bis dahin gilt der Schlussstand von Freitag, 30.10.26, ergänzt um die Tendenz der vorbörslichen Futures. Gold, Öl und Bitcoin handeln durchgehend und zeigen den aktuellsten verfügbaren Stand vom Montagvormittag. Die OPEC+ hatte sich bereits am Sonntag, 1.11., getroffen und die Dezember-Förderquoten unverändert gelassen (Meldung 14 und 8). Apple berichtet seine Quartalszahlen heute nach US-Börsenschluss – der erste Quartalsbericht unter dem neuen CEO John Ternus (Meldung 13); zum Redaktionsschluss lagen dazu noch keine Zahlen vor. In den USA finden morgen, Dienstag, 3.11., landesweite Zwischenwahlen statt (u. a. Gouverneurswahlen in New Jersey und Virginia). Die Schnellschätzung zur Eurozone-Inflation für Oktober wird erst am Mittwoch, 4.11., veröffentlicht und lag zum Redaktionsschluss noch nicht vor.",

  top: [
    { text: "Nach dem breiten Technologie-Ausverkauf vom Freitag zeigen sich DAX und Euro Stoxx 50 am Montagvormittag leicht erholt, auch US-Aktienfutures weisen nach oben; der Ölpreis fällt dagegen deutlich, nachdem die OPEC+ am Sonntag ihre Dezember-Förderquoten unverändert ließ und Berichte über US-Iran-Vermittlungsgespräche die Risikoprämie dämpften.", ref: "s:1" },
    { text: "An der EZB verdichten sich die Erwartungen auf eine Zinserhöhung im Dezember; zugleich hat die Eurogruppe die Frist für Nominierungsvorschläge zur Nachfolge von EZB-Direktorin Isabel Schnabel, die zum 4.1.2027 zum IWF wechselt, auf den 27.11.2026 verlängert.", ref: "s:2" },
    { text: "In der Nacht zum Sonntag griff Russland die ukrainische Energieinfrastruktur in vier Regionen mit 433 Drohnen an, von denen die ukrainische Luftwaffe nach eigenen Angaben 371 abfing; die Ukraine griff im Gegenzug erneut die Lukoil-Raffinerie Kstowo an. Das geplante Dreiertreffen in Abu Dhabi bleibt laut Kreml-Berater Uschakow frühestens für die Zeit nach dem 4.11. terminiert.", ref: "s:7" },
    { text: "Apple legt seine Quartalszahlen für das vierte Geschäftsquartal heute nach US-Börsenschluss vor – der erste Bericht unter dem seit 1.9.2026 amtierenden neuen CEO John Ternus; Analysten erwarten einen Umsatz von rund 113,4 Mrd. Dollar, nachdem Amazon und Intel am Freitag mit ihren Zahlen einen breiten Technologie-Ausverkauf ausgelöst hatten.", ref: "s:13" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 25.829–25.912 Pkt.", change: "+0,11 % bis +0,36 % ggü. Fr-Schluss (25.818,21)", dir: "up", asof: "Stand Mo 2.11.26, Vormittag/früher Nachmittag", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als beim letzten Stand.",
      compare: [
        { label: "Freitag", text: "Der DAX hatte am Freitag, 30.10., im Zuge des breiten Technologie-Ausverkaufs 0,85 % auf 25.818,21 Punkte verloren." }
      ],
      moved: {
        intro: "Als Hintergrund für die leichte Erholung am Montag nennen Berichte:",
        items: [
          "Der deutlich fallende Ölpreis (Meldung 14) wirkte stützend, da niedrigere Energiekosten die Gewinnaussichten vieler Unternehmen verbessern.",
          "Zugleich bleiben Anleger laut Berichten vorsichtig vor den Apple-Zahlen am Abend (Meldung 13) und den US-Zwischenwahlen am Dienstag."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Apple, Amazon und Intel in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "ad-hoc-news.de: DAX bei 25.829 Punkten – vorsichtiger Wochenauftakt trotz Ölpreisrückgang", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-25-829-punkten-vorsichtiger-wochenauftakt-trotz-oelpreisrueckgang/70445499" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.134–6.156 Pkt.", change: "+0,06 % bis +0,4 % ggü. Fr-Schluss (6.131,31)", dir: "up", asof: "Stand Mo 2.11.26, Vormittag", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Freitag", text: "Der Euro Stoxx 50 war am Freitag um 1,22 % auf 6.131,31 Punkte gefallen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der fallende Ölpreis stützte die Stimmung, während anhaltende Sorgen um die Bewertung von KI-Investitionen und die Haushaltslagen in Frankreich und Spanien laut Berichten belastend wirkten."
        ]
      },
      important: [
        { area: "Hinweis zur Datenlage", text: "Ein später am Montag erschienener Bericht nennt einen Schlussstand von exakt 6.131,31 Punkten (-1,22 %) – identisch mit dem Freitagswert. Das deutet auf eine möglicherweise fehlerhafte Datenübernahme hin; verlässlich bestätigt sind nur die Vormittagswerte zwischen rund 6.134 und 6.156 Punkten.", ref: "s:1" }
      ],
      source: { title: "ARIVA.DE: Aktien Europa – Uneinheitlicher Wochenauftakt, Ölpreisrückgang stützt", url: "https://www.ariva.de/news/aktien-europa-uneinheitlicher-wochenauftakt-12190709" }
    },
    "sp500": {
      label: "S&P 500", value: "7.580,07", change: "-140,32 Pkt. / -1,82 % (Fr-Schluss); vorbörslich Mo +0,33 % bis +0,51 %", dir: "down", asof: "Schluss Fr 30.10.26; US-Kassamarkt öffnet erst Mo 15:30 MEZ", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Vorbörslicher Handel Montag", text: "Die S&P-500-Futures deuteten am Montagmorgen laut Berichten auf einen freundlicheren Start hin, nachdem der Index am Freitag seinen schwächsten Tag seit Juni verzeichnet hatte." }
      ],
      moved: {
        intro: "Als Hintergrund für die vorbörsliche Erholung nennen Berichte:",
        items: [
          "Analysten sehen laut CNBC „nichts Grundlegendes am KI-Handel kaputt”; die Verluste vom Freitag gelten eher als Reaktion auf einzelne Unternehmenszahlen (Meldung 13) als auf einen breiteren Trend.",
          "Der fallende Ölpreis (Meldung 14) wirkte zusätzlich stützend."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Amazon, Intel und Apple in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "CNBC: Stock market today – Live updates", url: "https://www.cnbc.com/2026/11/01/stock-market-today-live-updates.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.437,00", change: "-747,73 Pkt. / -2,86 % (Fr-Schluss); vorbörslich Mo +0,70 % bis +0,84 %", dir: "down", asof: "Schluss Fr 30.10.26; US-Kassamarkt öffnet erst Mo 15:30 MEZ", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Oktober insgesamt", text: "Die Nasdaq schloss den Oktober laut Berichten mit einem Monatsverlust von rund 5,2 % ab." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Am Montag erholten sich laut Yahoo Finance einzelne zuvor stark gefallene Halbleiterwerte wie Micron, SanDisk und Western Digital vorbörslich um je rund 2 %.",
          "Der Kurssturz bei Intel (-29 %, größter Tagesverlust seit 1974) und die enttäuschenden Amazon-Zahlen hatten den Freitagsausverkauf ausgelöst; mehr dazu in Meldung 13."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Nvidia und Apple in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "FinanceFeeds: Nasdaq ends October at 25,437 after 2.86% drop – Apple, AMD and midterms ahead", url: "https://financefeeds.com/nasdaq-ends-october-at-25437-after-2-86-drop-apple-amd-and-midterms-ahead/" }
    },
    "dow": {
      label: "Dow Jones", value: "51.770,31", change: "-572,25 Pkt. / -1,09 % (Fr-Schluss); vorbörslich Mo +0,55 % bis +0,60 %", dir: "down", asof: "Schluss Fr 30.10.26; US-Kassamarkt öffnet erst Mo 15:30 MEZ", story: 1,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft weniger stark auf Kursbewegungen bei Tech-Aktien als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Im Vergleich zur Nasdaq", text: "Der Dow hatte am Freitag mit -1,09 % deutlich weniger verloren als die technologiestarke Nasdaq (-2,86 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die vorbörsliche Erholung am Montag:",
        items: [
          "Die Dow-Futures deuteten laut Berichten auf ein Plus von rund 310 Punkten hin, gestützt vom fallenden Ölpreis."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf vom Freitag in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Washington Times: Wall Street falls in worst day since June as sell-off in tech stocks deepens", url: "https://www.washingtontimes.com/news/2026/oct/30/wall-street-falls-worst-day-since-june-sell-tech-stocks-deepens/" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1172–1,1237", change: "+0,06 % bis +0,70 % ggü. EZB-Referenzkurs Fr (1,1172)", dir: "up", asof: "Stand Mo 2.11.26, Vormittag", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Freitag", text: "Der EZB-Referenzkurs lag am Freitag bei 1,1172 Dollar, nachdem Lagarde am Donnerstag eine mögliche Dezember-Zinserhöhung angedeutet hatte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die sich verdichtenden Erwartungen auf eine EZB-Zinserhöhung im Dezember stützen den Euro weiter; mehr dazu in Meldung 2."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB und zur Schnabel-Nachfolge in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "ARIVA.DE: Devisen – Eurokurs steigt bis knapp unter 1,12 US-Dollar", url: "https://www.ariva.de/news/devisen-eurokurs-steigt-bis-knapp-unter-1-12-us-dollar-12190541" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,93 %", change: "weitgehend stabil ggü. Freitag", dir: "flat", asof: "Stand Mo 2.11.26", story: 1, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,93 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,9 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 % (Entscheidung vom 28.10.); die Rendite liegt damit knapp einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Nach dem kurzen Rückgang im Zuge des Technologie-Ausverkaufs am Freitag pendelt sich die Rendite am Montag wieder auf einem stabilen Niveau ein."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf vom Freitag in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,33 %", change: "+0,02 Prozentpunkte ggü. Freitag", dir: "up", asof: "Stand Mo 2.11.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Der Risikoaufschlag zehnjähriger französischer Anleihen zu Bundesanleihen (OAT/Bund-Spread) lag zuletzt (Fr 30.10.) bei rund 159 Basispunkten; eine neuere Zahl für Montag liegt in den Quellen nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die sich verdichtenden Erwartungen auf eine EZB-Zinserhöhung im Dezember stützen die Rendite tendenziell."
        ]
      },
      important: [
        { area: "Frankreich", text: "Mehr zur französischen Wirtschaftslage in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.903 $", change: "+0,8 % ggü. Vortag, nach Einbruch auf rund 3.875 $ am Wochenende", dir: "up", asof: "Stand Mo 2.11.26, 8:30 Uhr MEZ", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 3.903 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Wochenverlauf", text: "Gold war am Freitag und über das Wochenende erstmals seit rund einem Jahr unter die Marke von 4.000 Dollar gefallen; der Montagswert liegt noch darunter." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die leichte Erholung:",
        items: [
          "Schnäppchenkäufe nach dem Kursrutsch vom Wochenende sowie eine gewisse Vorsicht vor den US-Zwischenwahlen am Dienstag stützen den Preis laut Goldreporter."
        ]
      },
      important: [
        { area: "Technologie", text: "Der Ausverkauf bei Technologiewerten am Freitag hatte Kapital aus Edelmetallen abgezogen; mehr dazu in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Goldreporter: Goldpreis heute – Marktbericht Gold, 02.11.2026", url: "https://www.goldreporter.de/goldpreis-2-11-2026/marktbericht-gold/262730/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 108–109 $", change: "-4 % bis -4,5 % ggü. Fr-Schluss", dir: "down", asof: "Stand Mo 2.11.26, Vormittag", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 108 bis 109 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Frühjahr 2026, aber klar unter dem Freitagsstand.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI fiel im gleichen Zeitraum auf rund 99 bis 100 Dollar je Barrel." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Die OPEC+ beließ bei ihrem Treffen am Sonntag, 1.11., die Dezember-Förderquoten unverändert – der dritte Monat in Folge ohne Änderung; mehr dazu in Meldung 14.",
          "Berichte über diplomatische Bemühungen zwischen den USA und Iran dämpften zugleich Sorgen vor einer unmittelbaren militärischen Eskalation am Golf; mehr dazu in Meldung 8."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Ein fallender Ölpreis wirkt tendenziell dämpfend auf Sprit-, Heiz- und Transportkosten.", ref: "e:oil-inflation" }
      ],
      source: { title: "CNBC: Stock market today – Live updates (Brent/WTI)", url: "https://www.cnbc.com/2026/11/01/stock-market-today-live-updates.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 77.750–77.975 $", change: "nahezu unverändert ggü. Freitag (≈ 77.300–77.400 $)", dir: "flat", asof: "Stand Mo 2.11.26, Vormittag (6:30 Uhr EST)", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 77.750 bis 77.975 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Wochenverlauf", text: "Bitcoin hatte im Oktober laut Berichten den schwächsten Monatsverlauf seit 2014 verzeichnet (-7,7 %) und bleibt auch am Montag auf diesem gedrückten Niveau." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die weiterhin schwache Stimmung:",
        items: [
          "Ein mutmaßlicher Hack bei der Kryptobörse Binance mit einem Schaden von rund 6,3 Mrd. Dollar sowie anhaltende Abflüsse aus Bitcoin-Spot-ETFs (-643 Mio. Dollar am 30.10.) belasten laut Berichten weiterhin; eine unabhängige Bestätigung der Hack-Schadenssumme liegt nicht vor."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Price of Bitcoin, 11/02/2026", url: "https://fortune.com/article/price-of-bitcoin-11-02-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "markets-montag-erholung-oelpreis-11-02", cats: ["markets"], when: "Stand Mo 2.11.2026, Vormittag/vorbörslich",
      headline: "DAX und Euro Stoxx 50 zeigen sich am Montag nach dem Freitags-Ausverkauf leicht erholt, US-Aktienfutures weisen nach oben, der Ölpreis fällt deutlich nach der OPEC+-Entscheidung",
      sec30: "Nach dem breiten Technologie-Ausverkauf vom Freitag (DAX -0,85 % auf 25.818,21, S&P 500 -1,82 %, Nasdaq -2,86 %) zeigen sich die Märkte am Montag leicht erholt: Der DAX stieg am Vormittag auf zwischen 25.829 und 25.912 Punkte (+0,11 % bis +0,36 %), der Euro Stoxx 50 auf rund 6.134 bis 6.156 Punkte. In den USA, deren Kassamarkt erst um 15:30 MEZ öffnet, deuteten die Futures auf einen freundlicheren Start hin: S&P-500-Futures +0,33 % bis +0,51 %, Nasdaq-100-Futures +0,70 % bis +0,84 %, Dow-Futures rund +310 Punkte. Als Hintergrund für die vorsichtige Erholung nennen Berichte den deutlich fallenden Ölpreis (Meldung 14) sowie die Einschätzung von Analysten, der Freitags-Ausverkauf sei eher auf einzelne Unternehmenszahlen (Amazon, Intel; Meldung 13) als auf einen breiteren Trend zurückzuführen. Zugleich bleiben Anleger vorsichtig vor den Apple-Zahlen am Montagabend und den US-Zwischenwahlen am Dienstag, 3.11.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Montag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stieg am Montagvormittag auf zwischen 25.829 und 25.912 Punkte (+0,11 % bis +0,36 %); am Freitag hatte er noch 0,85 % auf 25.818,21 Punkte verloren. Der Euro Stoxx 50 notierte am Vormittag zwischen rund 6.134 und 6.156 Punkten, nach einem Freitagsverlust von 1,22 % auf 6.131,31 Punkte.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "unbestaetigt", text: "Ein später am Montag erschienener Bericht nennt für den Euro Stoxx 50 einen Schlussstand von exakt 6.131,31 Punkten (-1,22 %) – identisch mit dem Freitagswert; das deutet auf eine möglicherweise fehlerhafte Datenübernahme hin und wird hier nicht als verlässlicher Tagesschluss gewertet." }
        ]},
        { h: "Wie reagierten die US-Futures und der Ölpreis?", items: [
          { tag: "fakt", text: "Vorbörslich deuteten die US-Futures am Montag auf einen freundlicheren Handelsstart hin: S&P-500-Futures +0,33 % bis +0,51 %, Nasdaq-100-Futures +0,70 % bis +0,84 %, Dow-Futures rund +0,55 bis +0,6 % (+310 Punkte).",
            ask: [{ label: "Mehr zu Amazon, Intel und Apple", ref: "s:13" }] },
          { tag: "fakt", text: "Brent-Rohöl fiel am Montag deutlich um 4 bis 4,5 % auf rund 108 bis 109 Dollar je Barrel, WTI auf rund 99 bis 100 Dollar; Hintergrund ist die OPEC+-Entscheidung vom Sonntag, 1.11., die Dezember-Förderquoten unverändert zu lassen, sowie Berichte über US-Iran-Vermittlungsgespräche.",
            ask: [{ label: "Mehr zur OPEC+-Entscheidung und zum Golf", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich DAX, Euro Stoxx 50 und die US-Futures nach dem Freitags-Ausverkauf nur leicht und uneinheitlich erholen, während der Ölpreis deutlich fällt, deutet darauf hin, dass Anleger die Technologie-Sorgen vom Freitag zwar nicht als grundlegende Trendwende werten, aber vor den Apple-Zahlen und den US-Zwischenwahlen weiterhin vorsichtig bleiben. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Gold, Bitcoin und der Euro werden in Meldung 3 behandelt, die OPEC+-Entscheidung und der Ölpreis im Detail in Meldung 14, die Hintergründe bei Amazon, Intel und Apple in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ad-hoc-news.de: DAX bei 25.829 Punkten – vorsichtiger Wochenauftakt trotz Ölpreisrückgang", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-25-829-punkten-vorsichtiger-wochenauftakt-trotz-oelpreisrueckgang/70445499" },
        { title: "ARIVA.DE: Aktien Europa – Uneinheitlicher Wochenauftakt, Ölpreisrückgang stützt", url: "https://www.ariva.de/news/aktien-europa-uneinheitlicher-wochenauftakt-12190709" },
        { title: "CNBC: Stock market today – Live updates", url: "https://www.cnbc.com/2026/11/01/stock-market-today-live-updates.html" },
        { title: "FinanceFeeds: Nasdaq ends October at 25,437 after 2.86% drop – Apple, AMD and midterms ahead", url: "https://financefeeds.com/nasdaq-ends-october-at-25437-after-2-86-drop-apple-amd-and-midterms-ahead/" },
        { title: "Washington Times: Wall Street falls in worst day since June as sell-off in tech stocks deepens", url: "https://www.washingtontimes.com/news/2026/oct/30/wall-street-falls-worst-day-since-june-sell-tech-stocks-deepens/" }
      ]
    },
    /* 2 WIRTSCHAFT: EZB/SCHNABEL-NACHFOLGE */
    {
      id: "ezb-dezember-zinserhoehung-schnabel-nachfolge-11-02", cats: ["economy", "markets"], when: "Lagarde-PK 29.10. · Fristverlängerung Schnabel-Nachfolge 27.10./27.11.2026",
      headline: "Die Erwartung einer EZB-Zinserhöhung im Dezember verdichtet sich weiter, die Eurogruppe verlängert die Nominierungsfrist für die Nachfolge von EZB-Direktorin Schnabel auf den 27. November",
      sec30: "Nach der EZB-Sitzung vom Donnerstag, 29.10. (Leitzins unverändert bei 2,50 %), werten Beobachter Lagardes Aussage, ohne Überraschungen sei „die Richtung der Reise ziemlich klar”, weiterhin als deutliches Signal für eine Zinserhöhung im Dezember um voraussichtlich 25 Basispunkte. Parallel dazu hat die Eurogruppe die Frist für Nominierungsvorschläge zur Nachfolge von EZB-Direktorin Isabel Schnabel, die zum 4.1.2027 zum Internationalen Währungsfonds wechselt, auf den 27.11.2026 verlängert. Bundesfinanzminister Lars Klingbeil kündigte an, zeitnah einen deutschen Personalvorschlag vorzulegen, da Deutschland Anspruch auf einen Sitz im EZB-Direktorium erhebt; die Eurogruppe will die Personalie auf ihrem nächsten Treffen im November besprechen, möglicherweise im Zusammenhang mit der durch Lagardes vorzeitigen Rücktritt zum 7.2.2027 ebenfalls offenen EZB-Präsidentschaft.",
      blocks: [
        { h: "Wie ist der Stand bei der erwarteten Dezember-Zinserhöhung?", items: [
          { tag: "position", text: "EZB-Präsidentin Lagarde sagte auf der Pressekonferenz am 29.10., die Geldpolitik bleibe „data-dependent and meeting-by-meeting”, doch ohne Überraschungen sei „die Richtung der Reise ziemlich klar” – von Beobachtern als Signal für eine mögliche Zinserhöhung im Dezember gewertet.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Im EZB-Rat sei laut Berichten bereits diskutiert worden, ob schon im Oktober erhöht werden solle; eine Mehrheit entschied sich dagegen. Eine konkrete Bestätigung einer Dezember-Erhöhung liegt von der EZB selbst nicht vor, die nächste Sitzung ist erst für Mitte Dezember angesetzt." }
        ]},
        { h: "Was ist bei der Schnabel-Nachfolge neu?", items: [
          { tag: "fakt", text: "Die Eurogruppe verlängerte die Frist für Nominierungsvorschläge zur Nachfolge von EZB-Direktorin Isabel Schnabel, die zum 4.1.2027 zum IWF wechselt, auf den 27.11.2026.",
            ask: [{ label: "Mehr zu Lagardes vorzeitigem Rücktritt", ref: "e:ecb-hike" }] },
          { tag: "position", text: "Bundesfinanzminister Lars Klingbeil kündigte an, bald einen deutschen Personalvorschlag vorzulegen, da Deutschland traditionell Anspruch auf einen Sitz im sechsköpfigen EZB-Direktorium erhebt." },
          { tag: "unbestaetigt", text: "Beobachter verknüpfen die Schnabel-Nachfolge zunehmend mit der separaten Frage der EZB-Präsidentschaft 2027, die durch Lagardes angekündigten vorzeitigen Rücktritt zum 7.2.2027 offen ist; eine offizielle Verknüpfung beider Personalfragen durch die Eurogruppe liegt nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Erwartung einer Dezember-Zinserhöhung weiter verdichtet, während zugleich zwei hochrangige EZB-Personalfragen – Schnabel-Nachfolge und Lagarde-Nachfolge – gleichzeitig offen bleiben, zeigt, dass geldpolitische und personelle Themen an der EZB-Spitze derzeit eng miteinander verwoben sind. Die Marktreaktion dazu findet sich in Meldung 3." }
        ]}
      ],
      reaction: "Die Marktreaktion (Euro, Gold, Bitcoin) wird in Meldung 3 behandelt, die allgemeine Marktlage in Meldung 1.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:fed-hike"],
      sources: [
        { title: "Börsen-Zeitung: Lagarde kündigt Abschied an und avisiert Zinserhöhung", url: "https://www.boersen-zeitung.de/konjunktur-politik/lagarde-kuendigt-abschied-an-und-avisiert-zinserhoehung" },
        { title: "euronews DE: „Ich kann nicht neutral bleiben” – Lagarde erklärt frühen EZB-Abgang", url: "https://de.euronews.com/2026/10/29/ich-kann-nicht-neutral-bleiben-lagarde-erklart-fruhen-ezb-abgang" },
        { title: "Handelsblatt: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.handelsblatt.com/politik/deutschland/europaeische-zentralbank-rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag/100262803.html" },
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel verlängert", url: "https://www.onvista.de/news/2026/10-27-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-verlaengert-0-20-26568925" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD */
    {
      id: "gold-bitcoin-eurusd-montag-11-02", cats: ["markets"], when: "Stand Mo 2.11.2026, Vormittag",
      headline: "Gold erholt sich am Montag leicht, bleibt aber unter der Marke von 4.000 Dollar, Bitcoin verharrt nach einem mutmaßlichen Binance-Hack auf schwachem Niveau, der Euro profitiert von steigenden EZB-Zinserwartungen",
      sec30: "Gold stieg am Montagmorgen um rund 0,8 % auf etwa 3.903 Dollar je Feinunze, nachdem der Preis am Wochenende auf rund 3.875 Dollar gefallen war – weiterhin unter der erstmals seit rund einem Jahr unterschrittenen Marke von 4.000 Dollar. Als Hintergrund für die leichte Erholung nennen Berichte Schnäppchenkäufe nach dem Kursrutsch sowie Vorsicht vor den US-Zwischenwahlen am Dienstag. Bitcoin notierte am Montagvormittag bei rund 77.750 bis 77.975 Dollar, nahezu unverändert gegenüber dem Freitagsniveau von rund 77.300 bis 77.400 Dollar; belastend wirken laut Berichten weiterhin ein mutmaßlicher Hack bei der Kryptobörse Binance mit einem Schaden von rund 6,3 Mrd. Dollar sowie Abflüsse aus Bitcoin-Spot-ETFs von 643 Mio. Dollar am Freitag. Der Euro stieg dagegen auf bis zu 1,1237 Dollar, gestützt von den sich verdichtenden Erwartungen auf eine EZB-Zinserhöhung im Dezember.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Montagmorgen um rund 0,8 % auf etwa 3.903 Dollar je Feinunze; am Wochenende war der Preis bis auf rund 3.875 Dollar gefallen – weiterhin unter der erstmals seit rund einem Jahr unterschrittenen Marke von 4.000 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "unbestaetigt", text: "Als Hintergrund für die leichte Erholung nennt Goldreporter Schnäppchenkäufe nach dem Kursrutsch sowie eine gewisse Vorsicht der Anleger vor den US-Zwischenwahlen am Dienstag, 3.11." }
        ]},
        { h: "Wie hat sich Bitcoin entwickelt?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Montagvormittag bei rund 77.750 bis 77.975 Dollar – nahezu unverändert gegenüber dem Freitagsniveau von rund 77.300 bis 77.400 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "unbestaetigt", text: "Als belastende Faktoren nennen Berichte einen mutmaßlichen Hack bei der Kryptobörse Binance mit einem Schaden von rund 6,3 Mrd. Dollar sowie Abflüsse aus Bitcoin-Spot-ETFs von rund 643 Mio. Dollar am Freitag; eine unabhängige Bestätigung der Hack-Schadenssumme liegt nicht vor." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der Euro stieg am Montag bis auf 1,1237 Dollar, nach einem EZB-Referenzkurs von 1,1172 Dollar am Freitag.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die sich verdichtenden Erwartungen auf eine EZB-Zinserhöhung im Dezember; mehr dazu in Meldung 2.",
            ask: [{ label: "Mehr zur EZB und zur Schnabel-Nachfolge", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold nur leicht und Bitcoin kaum von dem allgemein etwas freundlicheren Marktumfeld am Montag profitieren, während der Euro von den EZB-Zinserwartungen gestützt wird, deutet darauf hin, dass die Belastungsfaktoren vom Wochenende – insbesondere bei Bitcoin der mutmaßliche Binance-Hack – noch nachwirken. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende EZB-Entwicklung wird in Meldung 2 behandelt, die allgemeine Marktlage in Meldung 1.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Goldreporter: Goldpreis heute – Marktbericht Gold, 02.11.2026", url: "https://www.goldreporter.de/goldpreis-2-11-2026/marktbericht-gold/262730/" },
        { title: "Fortune: Price of Bitcoin, 11/02/2026", url: "https://fortune.com/article/price-of-bitcoin-11-02-2026/" },
        { title: "KuCoin: Crypto Daily Market Report, November 2, 2026", url: "https://www.kucoin.com/news/articles/crypto-daily-market-report-november-2-2026" },
        { title: "ARIVA.DE: Devisen – Eurokurs steigt bis knapp unter 1,12 US-Dollar", url: "https://www.ariva.de/news/devisen-eurokurs-steigt-bis-knapp-unter-1-12-us-dollar-12190541" }
      ]
    },
    /* 4 WIRTSCHAFT: IFO/GFK/PMI/FRANKREICH */
    {
      id: "konjunktur-ifo-gfk-pmi-frankreich-11-02", cats: ["economy", "germany", "world"], when: "Ifo 26.10. · GfK 29.10. · Eurozone-PMI final Okt. · Länder-Inflationsdaten Okt.",
      headline: "Der Ifo-Geschäftsklimaindex steigt weiter, das GfK-Konsumklima bleibt schwach, die Eurozone-Industrie wächst laut PMI so stark wie seit über vier Jahren nicht, die Inflation driftet zwischen den Euroländern deutlich auseinander",
      sec30: "Der Ifo-Geschäftsklimaindex stieg im Oktober auf 90,2 Punkte (September: 89,9), getragen von deutlich verbesserten Erwartungen im Verarbeitenden Gewerbe, die erstmals seit über drei Jahren wieder positiv ausfielen; der Dienstleistungssektor schwächelte dagegen. Das GfK-Konsumklima für November fiel leicht auf -30,8 Punkte (Oktober: -30,6); die Wirtschaftserwartungen der Verbraucher verbesserten sich zum sechsten Mal in Folge, die Anschaffungsneigung blieb wegen Inflationssorgen aber schwach. Der finale Eurozone-Industrie-PMI lag im Oktober bei 52,7 Punkten (September: 52,9) – laut S&P Global die stärkste Wachstumsphase der Industrie seit über vier Jahren. Vor der Eurozone-weiten Inflations-Schnellschätzung am 4.11. zeigen nationale Oktoberwerte ein deutlich uneinheitliches Bild: Italien 5,4 %, Spanien 4,9 %, Frankreich 3,4 %, Deutschland dagegen gefallen auf 2,8 %. Vorab-Schätzungen für die Eurozone insgesamt schwanken je nach Bank zwischen 3,7 % und 4,0 %.",
      blocks: [
        { h: "Wie entwickelt sich die Stimmung in der deutschen Wirtschaft?", items: [
          { tag: "fakt", text: "Der Ifo-Geschäftsklimaindex stieg im Oktober auf 90,2 Punkte (September: 89,9); die Erwartungskomponente im Verarbeitenden Gewerbe war erstmals seit über drei Jahren wieder positiv, der Dienstleistungssektor schwächelte dagegen." },
          { tag: "fakt", text: "Das GfK-Konsumklima für November fiel leicht auf -30,8 Punkte (Oktober: -30,6 Punkte). Die Wirtschaftserwartungen der Verbraucher verbesserten sich laut GfK zum sechsten Mal in Folge, Einkommenserwartungen und eine erhöhte Anschaffungszurückhaltung blieben wegen Inflationssorgen aber ein Belastungsfaktor." }
        ]},
        { h: "Wie entwickelt sich die Industrie in der Eurozone?", items: [
          { tag: "fakt", text: "Der finale Einkaufsmanagerindex (PMI) für die Industrie der Eurozone lag im Oktober bei 52,7 Punkten (September: 52,9) – laut S&P Global die stärkste Expansionsphase der Industrie seit über vier Jahren.",
            ask: [{ label: "Mehr zur Marktreaktion auf Zinserwartungen", ref: "s:2" }] }
        ]},
        { h: "Wie weit driftet die Inflation zwischen den Euroländern auseinander?", items: [
          { tag: "fakt", text: "Nationale Oktober-Inflationswerte zeigen ein deutlich uneinheitliches Bild innerhalb der Eurozone: Italien 5,4 %, Spanien 4,9 %, Frankreich 3,4 %, Deutschland dagegen gefallen auf 2,8 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] },
          { tag: "unbestaetigt", text: "Vorab-Schätzungen für die Eurozone insgesamt vor der offiziellen Schnellschätzung am 4.11. schwanken je nach Bank zwischen 3,7 % (Bank of America) und 4,0 % (Pantheon Macroeconomics, nach 3,8 % im September) – die endgültige Zahl liegt zum Redaktionsschluss noch nicht vor." }
        ]},
        { h: "Wie ist die Lage in Frankreich?", items: [
          { tag: "fakt", text: "Der Risikoaufschlag zehnjähriger französischer Staatsanleihen (OAT) zu Bundesanleihen (OAT/Bund-Spread) lag zuletzt (Freitag, 30.10.) bei rund 159 Basispunkten, nach einem Mehrjahreshoch von rund 176 bis 178 Basispunkten Ende Oktober; eine Haushalts-Abstimmung in der französischen Nationalversammlung ist für den 3.11. angesetzt.",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die deutsche Industrieerwartung und die Eurozone-Industrie insgesamt laut PMI aufhellen, während das deutsche Konsumklima schwach bleibt und sich die Inflation zwischen den Euroländern deutlich unterscheidet, zeigt ein weiterhin uneinheitliches Konjunkturbild innerhalb der Eurozone kurz vor der Oktober-Inflationsschätzung am 4.11." }
        ]}
      ],
      reaction: "Der deutsche Bundeshaushalt wird in Meldung 5 behandelt, die EZB-Zinserwartungen in Meldung 2.",
      terms: ["basispunkt", "rendite", "inflation"],
      followups: ["e:inflation-expectations", "e:debt-brake"],
      sources: [
        { title: "ifo Institut: ifo Business Climate Rises, October 2026", url: "https://www.ifo.de/en/press-release/2026-10-26/ifo-business-climate-rises-october-2026" },
        { title: "investinglive.com: Germany November GfK consumer sentiment vs -30.9 expected", url: "https://investinglive.com/news/germany-november-gfk-consumer-sentiment-vs-30-9-expected/" },
        { title: "IT-Boltwise: Eurozone-Industrie im Plus – PMI steigt auf 52,7 Punkte im Oktober", url: "https://www.it-boltwise.de/eurozone-industrie-im-plus-pmi-steigt-auf-527-punkte-im-oktober.html" },
        { title: "Euronews: Germany, France, Italy and Spain – where was inflation highest in October", url: "https://www.euronews.com/2026/10/30/germany-france-italy-and-spain-where-was-inflation-highest-in-october" },
        { title: "ideal-investisseur.fr: OAT / Bund spread today", url: "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html" }
      ]
    },
    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-zeitplan-koalitionsausschuss-11-02", cats: ["germany", "economy"], when: "Zeitplan unverändert · Koalitionsausschuss neu: 17.11.2026",
      headline: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert, ein Koalitionsausschuss der Spitzen von CDU, CSU und SPD ist für den 17. November angesetzt",
      sec30: "Der Zeitplan für die Haushaltsberatungen 2027 bleibt unverändert: Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11.2026 angesetzt, die abschließende Beratung im Bundestagsplenum läuft vom 24. bis 27.11.2026. Laut Kabinettsentwurf vom Sommer 2026 soll die Neuverschuldung 2027 insgesamt rund 200 Mrd. Euro erreichen, davon rund 118,7 Mrd. Euro im Kernhaushalt und der Rest über die Sondervermögen für Infrastruktur/Klima und Verteidigung; Finanzminister Klingbeil begründet dies mit dem Modernisierungs- und Aufrüstungsbedarf. Die endgültigen Zahlen werden erst mit der Bereinigungssitzung am 12.11. final festgelegt, in die auch die Ergebnisse der 171. Steuerschätzung vom 22.10. (4,1 Mrd. Euro Mehreinnahmen für 2027) einfließen. Neu bekannt wurde zudem der Termin für einen Koalitionsausschuss der Spitzen von CDU, CSU und SPD am 17.11.2026, bei dem unter anderem Rente, Arbeitsmarkt-, Gesundheits- und Pflegereform vorangebracht werden sollen.",
      blocks: [
        { h: "Wie ist der aktuelle Stand des Zeitplans für den Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses, bei der die Ergebnisse der 171. Steuerschätzung final in den Gesetzentwurf eingearbeitet werden, ist weiterhin für den 12.11.2026 angesetzt; die abschließende Beratung im Bundestagsplenum läuft vom 24. bis 27.11.2026.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Wie hoch soll die Neuverschuldung 2027 ausfallen?", items: [
          { tag: "fakt", text: "Laut dem Kabinettsentwurf vom Sommer 2026 soll die gesamte Neuverschuldung 2027 rund 200 Mrd. Euro erreichen – davon rund 118,7 Mrd. Euro im Kernhaushalt, der Rest über die Sondervermögen für Infrastruktur/Klima (rund 55 Mrd. Euro) und Verteidigung (rund 30 Mrd. Euro). Die endgültigen Zahlen werden erst mit der Bereinigungssitzung am 12.11. festgelegt.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] },
          { tag: "position", text: "Finanzminister Klingbeil begründete die hohe Neuverschuldung damit, dass die Bundeswehr „aufgerüstet” und „modernisiert” werde: Mit einem ausgeglichenen Haushalt lasse sich „gegen Putin” nicht verteidigen." }
        ]},
        { h: "Was ist neu beim Koalitionsausschuss?", items: [
          { tag: "fakt", text: "Ein Koalitionsausschuss der Spitzen von CDU, CSU und SPD ist für den 17.11.2026 angesetzt; dabei sollen unter anderem die Rentenreform, die Arbeitsmarkt-, Gesundheits- und Pflegereform vorangebracht werden.",
            ask: [{ label: "Mehr zur Rente mit 63", ref: "s:6" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Zeitplan für Bereinigungssitzung und Bundestagsberatung unverändert bleibt, während die genaue Höhe der Neuverschuldung erst am 12.11. final festgelegt wird und ein Koalitionsausschuss am 17.11. weitere innenpolitische Streitpunkte wie die Rente behandeln soll, deutet darauf hin, dass sich mehrere wichtige Entscheidungen im Laufe des November bündeln." }
        ]}
      ],
      reaction: "Die Rente mit 63 und weitere Innenpolitik werden in Meldung 6 behandelt, die Konjunkturdaten in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "ZDFheute: Haushalt 2027 – Klingbeil verteidigt neue Schulden für Aufrüstung", url: "https://www.zdfheute.de/politik/deutschland/klingbeil-haushalt-neuverschuldung-100.html" },
        { title: "ZDFheute: Haushalt 2027 – Bundesregierung ringt um Milliarden", url: "https://www.zdfheute.de/politik/deutschland/bundeshaushalt-2027-schulden-regierung-finanzen-100.html" },
        { title: "Bundesfinanzministerium: Ergebnisse der 171. Steuerschätzung", url: "https://www.bundesfinanzministerium.de/Content/DE/Video/2026/2026-10-22-171-steuerschaetzung/2026-10-22-pressekonferenz.html" },
        { title: "Table.Briefings: Termin für Koalitionsausschuss im November", url: "https://table.media/berlin/news/reformen-termin-fuer-koalitionsausschuss-im-november" }
      ]
    },
    /* 6 DEUTSCHLAND: RENTE/UMFRAGEN/BUNDESPRÄSIDENT */
    {
      id: "rente-umfragen-bundespraesident-11-02", cats: ["germany"], when: "INSA-Sonntagstrend 1.11. · CDU-Präsidium zu Bundespräsident-Kandidatur 9.11.2026",
      headline: "Bei der Rente mit 63 bleiben die Positionen zwischen Kanzler Merz und Arbeitsminister Schweitzer unverändert, der INSA-Sonntagstrend sieht die AfD bei 29 % vor der Union, die CDU will sich am 9. November auf einen Bundespräsidenten-Kandidaten festlegen",
      sec30: "Bei der Rente mit 63 bleiben die Positionen unverändert: Kanzler Merz will die Reformvorschläge der Alterssicherungskommission umsetzen, Arbeitsminister Schweitzer (SPD) sucht einen Kompromiss. Der nächste wichtige Termin ist der Koalitionsausschuss am 17.11. (Meldung 5); ein fertiger gemeinsamer Gesetzentwurf liegt weiterhin nicht vor. Der INSA-Sonntagstrend für „Bild am Sonntag” (veröffentlicht 1.11., 1.202 Befragte) sieht die AfD unverändert bei 29 % vor der Union (20 %), SPD unverändert bei 13 %, Grüne bei 14 %, Linke bei 11 % (+1) und FDP bei 5 % (+1). Bei der Nachfolge von Bundespräsident Steinmeier (Wahl durch die Bundesversammlung am 30.1.2027) will sich die CDU erst bei einer Präsidiumssitzung am 9.11.2026 festlegen, ob sie die CSU-Politikerin Ilse Aigner unterstützt oder einen eigenen Kandidaten beziehungsweise eine eigene Kandidatin benennt; CSU-Chef Söder wirbt öffentlich für Aigner, als CDU-interne Alternativen werden Julia Klöckner und Karin Prien genannt.",
      blocks: [
        { h: "Wie ist der Stand bei der Rente mit 63?", items: [
          { tag: "position", text: "Kanzler Merz will die Reformvorschläge der Alterssicherungskommission „so umsetzen, wie sie auf dem Tisch liegen”, sieht aber „auch für mich Grenzen”; Arbeitsminister Alexander Schweitzer (SPD) sucht einen Kompromiss und will die Rente mit 63 im Kern erhalten.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Ein fertiger gemeinsamer Gesetzentwurf lag zum Redaktionsschluss weiterhin nicht vor; der nächste wichtige Termin ist der Koalitionsausschuss der Spitzen von CDU, CSU und SPD am 17.11.2026 (Meldung 5), der Zeitplan sieht einen Kabinettsbeschluss weiterhin bis Jahresende 2026 vor." }
        ]},
        { h: "Was zeigt der aktuelle INSA-Sonntagstrend?", items: [
          { tag: "unbestaetigt", text: "Der INSA-Sonntagstrend für „Bild am Sonntag” (veröffentlicht 1.11.2026, 1.202 Befragte) sieht die AfD unverändert bei 29 % als stärkste Kraft, die Union bei 20 %, SPD unverändert bei 13 %, Grüne bei 14 %, Linke bei 11 % (+1 Punkt) und FDP bei 5 % (+1 Punkt).",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie ist der Stand bei der Bundespräsidenten-Nachfolge?", items: [
          { tag: "fakt", text: "Die CDU will sich erst bei einer Präsidiumssitzung am 9.11.2026 festlegen, ob sie CSU-Politikerin Ilse Aigner unterstützt oder einen eigenen Kandidaten beziehungsweise eine eigene Kandidatin für die Nachfolge von Bundespräsident Steinmeier benennt (Wahl durch die Bundesversammlung am 30.1.2027)." },
          { tag: "position", text: "CSU-Chef Markus Söder wirbt öffentlich für Aigner und erhöht damit laut Berichten den Druck auf Kanzler Merz; als CDU-interne Alternativen werden Julia Klöckner und Karin Prien genannt. SPD und Grüne fordern eine Frau im Amt, AfD-Chefin Alice Weidel kündigte einen eigenen AfD-Kandidaten an." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei der Rente mit 63 weiterhin kein fertiger Gesetzentwurf vorliegt, während der INSA-Sonntagstrend erneut keine Mehrheit für die aktuelle Koalition zeigt und die CDU ihre Festlegung bei der Bundespräsidenten-Nachfolge auf den 9.11. vertagt, deutet auf mehrere parallel laufende, noch offene innenpolitische Entscheidungsprozesse hin." }
        ]}
      ],
      reaction: "Der Bundeshaushalt und der Koalitionsausschuss-Termin werden in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority"],
      sources: [
        { title: "ad-hoc-news.de: INSA-Sonntagstrend für Bild am Sonntag", url: "https://www.ad-hoc-news.de/politik/im-aktuellen-sonntagstrend-von-insa-fuer-die-bild-am-sonntag-bleibt-die/70135330" },
        { title: "t-online: Rente mit 63 vor dem Aus? Merz widerspricht neuem Arbeitsminister klar", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101485570/rente-mit-63-merz-widerspricht-neuem-arbeitsminister-deutlich.html" },
        { title: "ZDFheute: Wird es erstmals eine Bundespräsidentin geben? Die CSU drängt auf Nominierung von Ilse Aigner", url: "https://www.zdfheute.de/politik/koalition-merz-cdu-bundespraesident-aigner-csu-100.html" },
        { title: "Table.Briefings: Termin für Koalitionsausschuss im November", url: "https://table.media/berlin/news/reformen-termin-fuer-koalitionsausschuss-im-november" }
      ]
    },
    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-drohnenangriff-energie-abu-dhabi-11-02", cats: ["world", "geo"], when: "Großangriff Nacht 31.10./1.11. · Lukoil-Angriff Kstowo 1.11. · Front Pokrowsk 1.11.2026",
      headline: "Russland greift die ukrainische Energieinfrastruktur mit 433 Drohnen an, die Ukraine schlägt erneut gegen eine Lukoil-Raffinerie zurück, das geplante Dreiertreffen in Abu Dhabi bleibt frühestens für die Zeit nach dem 4. November terminiert",
      sec30: "In der Nacht zum Sonntag, 1.11., griff Russland die ukrainische Energieinfrastruktur in vier Regionen mit 433 Drohnen an; die ukrainische Luftwaffe gab an, 371 davon abgefangen zu haben, es kam zu Stromausfällen. Als Reaktion griff die Ukraine in der gleichen Nacht erneut die Lukoil-Raffinerie „Nischegorodnefteorgsintes” in Kstowo an – dieselbe Anlage war bereits im April, Mai und August getroffen worden; nach drei Raffinerie-Treffern binnen 72 Stunden sind laut Berichten rund 10 % der russischen Raffineriekapazität betroffen. An der Front bei Pokrowsk meldete die ukrainische Armee am 1.11. 205 Gefechte binnen eines Tages. Beim geplanten Dreiertreffen in Abu Dhabi bleibt der Termin offen: Kreml-Berater Juri Uschakow hatte bereits am 29.10. gesagt, die Gespräche würden frühestens nach dem 4.11. stattfinden; die US-Zwischenwahlen selbst finden bereits einen Tag früher, am Dienstag, 3.11.2026, statt. Ein möglicher Termin um den 10.11. wird in Berichten genannt, ist aber nicht offiziell bestätigt.",
      blocks: [
        { h: "Was geschah beim russischen Großangriff in der Nacht zum 1.11.?", items: [
          { tag: "unbestaetigt", text: "Russland griff die ukrainische Energieinfrastruktur in vier Regionen mit nach ukrainischen Angaben 433 Drohnen an; die ukrainische Luftwaffe gab an, 371 davon abgefangen zu haben. Es kam zu Stromausfällen; eine unabhängige Bestätigung der genauen Zahlen liegt nicht vor." }
        ]},
        { h: "Was geschah beim ukrainischen Gegenangriff auf die Lukoil-Raffinerie?", items: [
          { tag: "unbestaetigt", text: "Die Ukraine griff in der Nacht zum 1.11. erneut die Lukoil-Raffinerie „Nischegorodnefteorgsintes” in Kstowo an – dieselbe Anlage war bereits im April, Mai und August getroffen worden. Die Attacke beendete laut Berichten eine zweiwöchige, von Washington erbetene Angriffspause; zusammen mit zwei weiteren Raffinerie-Treffern binnen 72 Stunden sind nach Schätzungen rund 10 % der russischen Raffineriekapazität betroffen – Opferzahlen und genaue Schäden liegen nur aus russischen Quellen vor und sind nicht unabhängig verifiziert.",
            ask: [{ label: "Mehr zu Öl- und Gaspreisen", ref: "s:14" }] }
        ]},
        { h: "Wie ist die Lage an der Front, und wie ist der Stand bei Abu Dhabi?", items: [
          { tag: "unbestaetigt", text: "Die ukrainische Armee meldete für den 1.11. im Raum Pokrowsk 205 Gefechte binnen eines Tages; unabhängig bestätigte Zahlen dazu liegen nicht vor." },
          { tag: "position", text: "Kreml-Berater Juri Uschakow hatte bereits am 29.10. gesagt, die Gespräche in Abu Dhabi würden frühestens nach dem 4.11. stattfinden, abhängig „auch von der Lage an der Front”; die US-Zwischenwahlen selbst finden bereits einen Tag früher, am Dienstag, 3.11.2026, statt. Ein möglicher Termin um den 10.11. wird in Berichten genannt, ist aber nicht offiziell bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Russland und die Ukraine sich in der Nacht zum 1.11. gegenseitig mit Angriffen auf Energieinfrastruktur beziehungsweise Raffineriekapazität trafen, während ein konkreter Termin für die geplanten Gespräche in Abu Dhabi weiterhin offen bleibt, zeigt, dass militärische Eskalation und diplomatische Ankündigungen weiterhin eng nebeneinander verlaufen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, der Ölpreis im Detail in Meldung 14.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "CNBC: Russia launches massive drone attack on Ukraine energy infrastructure", url: "https://www.cnbc.com/2026/11/01/stock-market-today-live-updates.html" },
        { title: "investinglive.com: ICYMI – Ukrainian drones hit three Russian refineries in 72 hours, ending US-sought pause", url: "https://investinglive.com/commodities/icymi-ukrainian-drones-hit-three-russian-refineries-in-72-hours-ending-us-sought-pause" },
        { title: "Ukrinform (DE): Drohnen greifen Lukoil-Raffinerie in Russland an", url: "https://www.ukrinform.de/amp/rubric-ato/4180192-drohnen-greifen-lukoilraffinerie-in-russland-an.html" },
        { title: "Meduza: Kremlin says U.S.-Russia-Ukraine peace talks will take place in Abu Dhabi after November 4", url: "https://meduza.io/en/news/2026/10/29/kremlin-says-u-s-russia-ukraine-peace-talks-will-take-place-in-abu-dhabi-after-november-4-depending-on-battlefield-conditions" }
      ]
    },
    /* 8 GEOPOLITIK/ENERGIE: GOLF/HORMUZ/IRAN/OPEC+ */
    {
      id: "golf-hormuz-iran-opecplus-diplomatie-11-02", cats: ["geo"], when: "Weitere Tanker-Vorfälle Wochenende · katarische Vermittler verlassen Teheran 1.11. · OPEC+-Treffen So 1.11.2026",
      headline: "Über das Wochenende werden weitere Tanker-Zwischenfälle in der Straße von Hormus gemeldet, katarische Vermittler verlassen Teheran nach Gesprächen über einen Waffenstillstand, die OPEC+ lässt die Dezember-Förderquoten unverändert",
      sec30: "Über das Wochenende meldeten Berichte weitere Tanker- und Frachter-Zwischenfälle in der Straße von Hormus, unter anderem beim katarischen LNG-Frachter „Al Mayeda”; die Zuschreibung der Vorfälle bleibt wie zuvor unklar und ist nicht unabhängig bestätigt. Die katarischen Vermittler reisten am 1.11. aus Teheran ab; laut Reuters bietet Iran inzwischen an, die Straße von Hormus binnen zwei statt der zuvor diskutierten sieben Tage wieder zu öffnen, bezeichnete katarische Vorschläge zum Nuklearthema aber als „unakzeptabel”. Die OPEC+ beließ bei ihrem virtuellen Treffen am Sonntag, 1.11., die Dezember-Förderquoten der sieben Kernländer unverändert bei rund 31 Mio. Barrel pro Tag – bereits der dritte Monat in Folge ohne Änderung; die richtungsweisende Entscheidung über den Förderrahmen für 2027 fällt erst beim nächsten Treffen am 29.11.2026.",
      blocks: [
        { h: "Was wird zu neuen Tanker-Zwischenfällen in der Straße von Hormus berichtet?", items: [
          { tag: "unbestaetigt", text: "Über das Wochenende meldeten mehrere Quellen weitere Tanker- und Frachter-Zwischenfälle in der Straße von Hormus, unter anderem beim katarischen LNG-Frachter „Al Mayeda”; wer für die Vorfälle verantwortlich ist, bleibt wie bei den zuvor gemeldeten Fällen unklar und ist nicht unabhängig bestätigt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wie ist der Stand bei den Vermittlungsgesprächen?", items: [
          { tag: "fakt", text: "Die katarischen Vermittler reisten am 1.11. aus Teheran ab, nachdem sie dort mit iranischen Unterhändlern über eine Wiederbelebung des Waffenstillstandsabkommens mit den USA gesprochen hatten." },
          { tag: "position", text: "Iran bietet laut Reuters inzwischen an, die Straße von Hormus binnen zwei statt der zuvor diskutierten sieben Tage wieder zu öffnen, bezeichnete katarische Vorschläge zum Nuklearthema zugleich als „unakzeptabel”; eine Einigung liegt weiterhin nicht vor." }
        ]},
        { h: "Was hat die OPEC+ am Sonntag entschieden?", items: [
          { tag: "fakt", text: "Die sieben Kern-Förderländer der OPEC+ (darunter Saudi-Arabien, Russland, Irak, Kuwait, Kasachstan, Algerien, Oman) beließen bei einem virtuellen Treffen am 1.11. die Dezember-Förderquoten unverändert bei rund 31 Mio. Barrel pro Tag – bereits der dritte Monat in Folge ohne Änderung, nach bereits unveränderten Quoten für Oktober und November.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Als Begründung nennen Berichte die anhaltende Marktunsicherheit durch die Exportausfälle infolge des Konflikts am Golf; die richtungsweisende Entscheidung über den Förderrahmen für 2027 fällt erst beim nächsten Treffen am 29.11.2026.",
            ask: [{ label: "Mehr zum Ölpreis nach der Entscheidung", ref: "n:brent" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass weiterhin neue Tanker-Zwischenfälle gemeldet werden, während Iran sein Angebot zur Hormus-Öffnung von sieben auf zwei Tage verkürzt und die OPEC+ trotz der Unsicherheiten ihre Förderquoten unverändert lässt, zeigt, dass militärische Risiken und wirtschaftliche Entscheidungen am Golf weiterhin parallel verlaufen, ohne dass sich eine Seite bislang durchsetzt. Der Ölpreis fiel dennoch deutlich; mehr dazu in Meldung 14." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis und die Gasversorgung im Detail in Meldung 14.",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "e:opec-plus-why"],
      sources: [
        { title: "Splash247 / CBS News: Tanker incidents continue in Strait of Hormuz", url: "https://www.cbsnews.com/" },
        { title: "Reuters: Iran offers to reopen Hormuz within two days, calls Qatari nuclear proposals unacceptable", url: "https://www.reuters.com/world/middle-east/" },
        { title: "Bloomberg: OPEC+ leaves oil output targets unchanged for December", url: "https://www.bloomberg.com/news/articles/2026-11-01/opec-leaves-oil-output-targets-unchanged-for-december" },
        { title: "The National: OPEC+ holds December oil output targets steady as Iran war disrupts supply", url: "https://www.thenationalnews.com/business/energy/2026/11/01/opec-holds-december-oil-output-targets-steady-as-iran-war-disrupts-supply/" }
      ]
    },
    /* 9 DEFENCE: RHEINMETALL/HENSOLDT/RENK */
    {
      id: "rheinmetall-hensoldt-renk-aktien-11-02", cats: ["defence"], when: "Kurse Mo 2.11. · ZEBEL-Problem Hensoldt andauernd · Vorfall Kassel-Calden Wochenende",
      headline: "Rheinmetall, Hensoldt und RENK notieren am Montag uneinheitlich, Jefferies bestätigt vor den Rheinmetall-Zahlen die Kaufempfehlung, auf einer Rheinmetall-Baustelle in Kassel-Calden brennen in der Nacht zum Wochenende drei Radlader",
      sec30: "Die Rheinmetall-Aktie schwankte am Montagvormittag zwischen rund 1.025 und 1.041 Euro und damit nahezu auf Höhe des Freitagsschlusses von 1.037,60 Euro; Jefferies bestätigte vor den Q3-Zahlen am 5.11. die Kaufempfehlung. Bei Hensoldt verschärfte sich das bereits bekannte Softwareproblem im ZEBEL-Logistikzentrum weiter: Das Analysehaus mwb senkte sein Kursziel von 62 auf 60 Euro, während Bank of America ihr Kursziel auf 94 Euro anhob und Goldman Sachs die Coverage mit „Neutral” aufnahm; die Aktie notierte am Montagvormittag bei rund 85,4 bis 85,9 Euro. RENK notierte am Montagmittag bei rund 36,9 bis 37,1 Euro, deutlich unter dem von der DZ Bank Ende Oktober auf 56 Euro gesenkten fairen Wert. In der Nacht zum Wochenende brannten auf einer Rheinmetall-Baustelle in Kassel-Calden, auf der ein rund 260 Mio. Euro teures Logistik- und Drohnentestzentrum entstehen soll, drei Radlader; ein online veröffentlichtes Bekennerschreiben mit politischem Hintergrund wird vom hessischen Staatsschutz geprüft, Hessens Innenminister Poseck (CDU) sprach von einem „gezielten Anschlag”.",
      blocks: [
        { h: "Wie entwickelten sich die Aktien von Rheinmetall, Hensoldt und RENK am Montag?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie schwankte am Montagvormittag zwischen rund 1.025 und 1.041 Euro, nahezu auf Höhe des Freitagsschlusses von 1.037,60 Euro; Jefferies bestätigte vor den Q3-Zahlen am 5.11.2026 die Kaufempfehlung.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Nachrichten?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "Bei Hensoldt verschärfte sich das Softwareproblem im ZEBEL-Logistikzentrum weiter: Das Analysehaus mwb senkte sein Kursziel von 62 auf 60 Euro, während Bank of America ihr Kursziel auf 94 Euro anhob und Goldman Sachs die Coverage mit „Neutral” aufnahm; die Aktie notierte am Montagvormittag bei rund 85,4 bis 85,9 Euro." },
          { tag: "fakt", text: "RENK notierte am Montagmittag bei rund 36,9 bis 37,1 Euro – deutlich unter dem von der DZ Bank bereits am 23.10. auf 56 Euro gesenkten fairen Wert; alle aktiven Analysten empfehlen die Aktie laut Daten weiterhin überwiegend zum Kauf." }
        ]},
        { h: "Was geschah auf der Rheinmetall-Baustelle in Kassel-Calden?", items: [
          { tag: "unbestaetigt", text: "In der Nacht zum Wochenende brannten auf einer Rheinmetall-Baustelle in Kassel-Calden, auf der ein rund 260 Mio. Euro teures Logistik- und Drohnentestzentrum entstehen soll, drei Radlader. Ein online veröffentlichtes Bekennerschreiben mit politischem Hintergrund wird vom hessischen Staatsschutz geprüft; eine Bestätigung der Urheberschaft liegt nicht vor." },
          { tag: "position", text: "Hessens Innenminister Poseck (CDU) sprach von einem „gezielten Anschlag”." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rheinmetall trotz des Vorfalls in Kassel-Calden vor den Q3-Zahlen stabil bleibt, während Hensoldt wegen eines andauernden Logistikproblems von Analysten unterschiedlich bewertet wird und RENK weiterhin deutlich unter dem von Analysten genannten fairen Wert notiert, zeigt, dass unternehmensspezifische Faktoren die allgemein hohe Nachfrage nach Rüstungsgütern einzelner Zulieferer unterschiedlich stark überlagern. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die NATO-Verteidigungsausgaben und Bundeswehr-Beschaffungsvorhaben werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks"],
      sources: [
        { title: "finanzen.ch: Rheinmetall Aktie – News, Rheinmetall am Vormittag mit Verlusten", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-02-11-2026-1035064641" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie – Jefferies bestätigt Buy vor Quartalszahlen", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/rheinmetall-aktie-jefferies-bestaetigt-buy-vor-quartalszahlen/70444710" },
        { title: "ad-hoc-news.de: Hensoldt's ZEBEL snag gives mwb a reason to cut its target and its upgrade hopes", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/hensoldt-s-zebel-snag-gives-mwb-a-reason-to-cut-its-target-and-its-upgrade-hopes/70438858" },
        { title: "ad-hoc-news.de: RENK Group-Aktie am Montagmittag bei 36,94 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/renk-group-aktie-am-montagmittag-bei-36-94-euro/70445296" },
        { title: "hessenschau.de: Polizei prüft Bekennerschreiben nach Brand auf Rheinmetall-Baustelle in Calden", url: "https://hessenschau.de/panorama/calden-polizei-prueft-bekennerschreiben-nach-brand-auf-rheinmetall-baustelle-in-calden-v2,calden-brandstiftung-100.html" }
      ]
    },
    /* 10 DEFENCE: NATO-BUDGET/BUNDESWEHR-BESCHAFFUNG */
    {
      id: "nato-budget-bundeswehr-ruestungsvorhaben-11-02", cats: ["defence"], when: "NATO-Ausgaben 2026 · Haushaltsausschuss-Sitzung 4.11.2026 · Arminius-Zeitplan unverändert 9.12.2026",
      headline: "Die NATO-Verteidigungsausgaben steigen 2026 laut Schätzungen auf über 1,8 Billionen Dollar, der Bundestags-Haushaltsausschuss berät am 4.11. über sieben weitere Rüstungsvorhaben, der Arminius-Zeitplan für Boxer-Radpanzer bleibt unverändert",
      sec30: "Die Verteidigungsausgaben aller NATO-Mitglieder sollen 2026 laut Schätzungen auf über 1,8 Billionen Dollar steigen (+11 % gegenüber 2025); die USA tragen daran rund 1,03 Billionen Dollar, Deutschland ist mit rund 147 Mrd. Dollar zweitgrößter Zahler. Fast alle Mitglieder erreichen inzwischen das 2-Prozent-Ziel, nur Slowenien bleibt laut Berichten ein Ausreißer. Der Bundestags-Haushaltsausschuss berät am 4.11.2026 über sieben weitere Rüstungsvorhaben im Volumen von jeweils über 25 Mio. Euro, darunter eine Vertragsanpassung beim Eurofighter, SPIKE-ER2-Lenkraketen für H145M-Kampfhubschrauber sowie Troposcatter-Funksysteme. Beim Arminius-Programm (rund 1.800 Boxer-Radpanzer, rund 25 Mrd. Euro Festauftrag) bleibt die parlamentarische Befassung für den 9.12.2026 angesetzt; auf der Rüstungsmesse Euronaval in Paris (3. bis 6.11.) zeigt Rheinmetall unter anderem das Drohnenboot „Kraken K3”, ohne dass bislang neue Vertragsabschlüsse vermeldet wurden.",
      blocks: [
        { h: "Wie entwickeln sich die NATO-Verteidigungsausgaben?", items: [
          { tag: "unbestaetigt", text: "Die Verteidigungsausgaben aller NATO-Mitglieder sollen 2026 laut Schätzungen auf über 1,8 Billionen Dollar steigen (+11 % gegenüber 2025); die USA tragen rund 1,03 Billionen Dollar dazu bei, Deutschland mit rund 147 Mrd. Dollar als zweitgrößter Zahler. Fast alle Mitglieder erreichen inzwischen das 2-Prozent-Ziel der Wirtschaftsleistung, nur Slowenien bleibt laut Berichten ein Ausreißer.",
            ask: [{ label: "Was ist das NATO-Ausgabenziel?", ref: "e:nato-target" }] }
        ]},
        { h: "Welche neuen Bundeswehr-Beschaffungsvorhaben stehen an?", items: [
          { tag: "fakt", text: "Der Bundestags-Haushaltsausschuss berät am 4.11.2026 über sieben weitere Rüstungsvorhaben im Volumen von jeweils über 25 Mio. Euro, darunter eine Vertragsanpassung beim Eurofighter, SPIKE-ER2-Lenkraketen für H145M-Kampfhubschrauber, Troposcatter-Funksysteme und Sanitätssysteme des Typs Role 2B.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Beim Arminius-Programm (rund 1.800 Boxer-Radpanzer, rund 25 Mrd. Euro Festauftrag, Rheinmetall-Anteil über ARTEC auf rund 12,4 Mrd. Euro geschätzt) bleibt die parlamentarische Befassung für den 9.12.2026 angesetzt; bei vollem Rahmenvertrag inklusive Optionen könnte das Volumen auf bis zu 75 Mrd. Euro steigen." }
        ]},
        { h: "Was ist bei der Rüstungsmesse Euronaval neu?", items: [
          { tag: "fakt", text: "Auf der Rüstungsmesse Euronaval in Paris (3. bis 6.11.2026) zeigt Rheinmetall unter anderem das Drohnenboot „Kraken K3”, das Marschflugkörper-Abwehrsystem „Millennium Gun” und das Täuschsystem „MASS”; neue Vertragsabschlüsse wurden bislang nicht vermeldet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die NATO-Verteidigungsausgaben insgesamt weiter steigen, während der Bundestag parallel über mehrere kleinere und größere Rüstungsvorhaben berät und der Arminius-Großauftrag weiterhin erst im Dezember unterschrieben werden soll, zeigt, dass die Umsetzung der angekündigten Aufrüstung sich über viele einzelne, zeitlich versetzte Beschlüsse erstreckt." }
        ]}
      ],
      reaction: "Die Kursbewegungen bei Rheinmetall, Hensoldt und RENK werden in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "Bernama: NATO defence spending set to exceed $1.8 trillion in 2026", url: "https://www.bernama.com/en/news.php/?id=2578070" },
        { title: "UK Defence Journal: NATO backs £2.5bn 2026 budget to boost collective defence", url: "https://ukdefencejournal.org.uk/nato-backs-2-5bn-2026-budget-to-boost-collective-defence/" },
        { title: "esut.de: Bundeswehr – 7 Rüstungsvorhaben zur Entscheidung", url: "https://esut.de/2026/11/meldungen/76427/bundeswehr-7-ruestungsvorhaben-ent/" },
        { title: "heavy-shift.com: Germany's Arminius programme – Rheinmetall expects €12.4 billion from the first Boxer contract", url: "https://heavy-shift.com/germanys-arminius-programme-rheinmetall-expects-eu12-4-billion-from-the-first-boxer-contract-and-up-to-5-500-vehicles-in-total/" },
        { title: "Rheinmetall: Rheinmetall at the Euronaval exhibition", url: "https://www.rheinmetall.com/en/media/news-watch/news/2026/10/2026-10-30-rheinmetall-at-the-euronaval-exhibition" }
      ]
    },
    /* 11 DEALS: BASF/EVONIK, EQT/QIAGEN, TESLA/SPACEX, WEITERE */
    {
      id: "basf-evonik-eqt-qiagen-teslaspacex-deals-11-02", cats: ["deals", "pe"], when: "Evonik-Ablehnung 30.10. · Qiagen-Q3 4.11. · ADT/Thrive 29.10. · Marvell/Lumentum Okt.",
      headline: "Evonik lehnt das erhöhte BASF-Angebot offiziell ab und prüft laut Berichten eine Gegenübernahme von Ashland, bei Tesla/SpaceX gilt eine Fusion laut Barclays nun als zentraler Teil der Anlagethese, Apollo finanziert die milliardenschwere Übernahme von ADT",
      sec30: "Evonik hat das von BASF auf 24,00 Euro je Aktie (rund 11 Mrd. Euro) erhöhte Übernahmeangebot am 30.10. offiziell abgelehnt, bleibt aber für vertraulichen Informationsaustausch offen; NRW-Wirtschaftsministerin Neubaur begrüßte die Ablehnung. Evonik soll laut Handelsblatt-Berichten im Gegenzug eine Übernahme des US-Spezialchemiekonzerns Ashland (Börsenwert rund 3,3 Mrd. Dollar) prüfen, was Evonik offiziell bestreitet; auch Advent, Apollo und Carlyle sollen Interesse an Ashland haben. Beim bereits besiegelten EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) stehen am 4.11. die vollständigen Q3-Zahlen an – ein erster Test der Investorenstimmung seit der Deal-Ankündigung. Bei Tesla und SpaceX bezeichnet Barclays eine mögliche Fusion inzwischen als „zentralen Bestandteil” der Tesla-Anlagethese, ohne dass Konditionen oder ein Preis vorliegen. Daneben wurden zwei weitere Großdeals bekannt: Apollo finanziert über Thrive Holdings die Übernahme des Sicherheitsunternehmens ADT für rund 7,6 Mrd. Dollar Eigenkapitalwert, und Marvell Technology übernimmt Lumentum in einer reinen Aktientransaktion mit einer Bewertung von rund 115 Mrd. Dollar.",
      blocks: [
        { h: "Was ist der neue Stand bei BASF/Evonik?", items: [
          { tag: "fakt", text: "Der Evonik-Vorstand lehnte das von BASF auf 24,00 Euro je Aktie (rund 11 Mrd. Euro, rund 40 % Aufschlag auf den unbeeinflussten Kurs) erhöhte Angebot am 30.10.2026 offiziell ab, ließ aber vertraulichen Informationsaustausch zu.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "position", text: "NRW-Wirtschaftsministerin Mona Neubaur begrüßte die Ablehnung und bezeichnete Evonik als „ein starkes, zukunftsfähiges Unternehmen”." },
          { tag: "unbestaetigt", text: "Evonik soll laut Handelsblatt-Insidern eine milliardenschwere Übernahme des US-Spezialchemiekonzerns Ashland (Börsenwert rund 3,3 Mrd. Dollar) als mögliche Abwehrstrategie prüfen; Evonik bestreitet einen solchen Zusammenhang offiziell. Auch die Finanzinvestoren Advent, Apollo und Carlyle sollen Interesse an Ashland bekundet haben. Die RAG-Stiftung (rund 43,8 % der Evonik-Anteile) hat sich weiterhin nicht öffentlich final positioniert; Evonik legt seine Q3-Zahlen am 3.11. vor." }
        ]},
        { h: "Wie ist der Stand beim EQT-Kauf von Qiagen?", items: [
          { tag: "fakt", text: "EQT bietet gemeinsam mit den Co-Investoren ADIA (Abu Dhabi) und CPP Investments (Kanada) 46,50 Euro je Aktie in bar, Gesamtwert rund 10,8 Mrd. Euro (12,1 Mrd. Dollar); die Finanzierung ist ohne Finanzierungsvorbehalt gesichert, Vorstand und Aufsichtsrat unterstützen den Deal einstimmig.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Qiagen legt die vollständigen Q3-Zahlen am 4.11.2026 vor – ein erster Test der Investorenstimmung seit der Deal-Ankündigung; das Closing bleibt für Mitte 2027 geplant, mehr als 50 % der Aktionäre müssen zustimmen." }
        ]},
        { h: "Wie ist der Stand bei Tesla/SpaceX, und welche weiteren Großdeals wurden bekannt?", items: [
          { tag: "unbestaetigt", text: "Bei Tesla und SpaceX bleibt eine mögliche Fusion weiterhin unbestätigt; Barclays bezeichnet eine mögliche SpaceX-Fusion laut einem Bericht vom 1.11. inzwischen als „zentralen Bestandteil” der Tesla-Anlagethese. Elon Musk selbst kann wegen eines Interessenkonflikts nicht an den Gesprächen teilnehmen, hält eine Fusion aber nach eigenen Worten „für eine gute Idee”; Konditionen oder ein Preis liegen weiterhin nicht vor.",
            ask: [{ label: "Mehr zum Private-Credit-Markt", ref: "s:12" }] },
          { tag: "fakt", text: "Daneben wurden zwei weitere große Deals bekannt: Apollo Global Management finanziert über Josh Kushners Investmentvehikel Thrive Holdings die Übernahme des Sicherheitsunternehmens ADT für 10,00 Dollar je Aktie in bar (Eigenkapitalwert rund 7,6 Mrd. Dollar, Unternehmenswert rund 15,3 Mrd. Dollar, rund 45,6 % Aufschlag); eine Go-Shop-Frist für weitere Gebote läuft bis zum 28.11.2026. Marvell Technology übernimmt Lumentum in einer reinen Aktientransaktion mit einer Bewertung von rund 115 Mrd. Dollar, strategisch begründet mit Laser- und Optik-Komponenten für KI-Rechenzentren." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Evonik ein erhöhtes BASF-Angebot ablehnt und zugleich eine mögliche Gegenübernahme geprüft haben soll, während beim bereits besiegelten EQT-Kauf von Qiagen die Q3-Zahlen am 4.11. als Stimmungstest gelten und bei Tesla/SpaceX weiterhin jede Festlegung fehlt, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle; mit ADT/Thrive und Marvell/Lumentum kamen zugleich zwei weitere große, von der Evonik-Frage unabhängige Transaktionen hinzu." }
        ]}
      ],
      deal: { value: "rund 11 Mrd. € (BASF/Evonik-Angebot, abgelehnt) · rund 10,8 Mrd. € (EQT/Qiagen, bestätigt) · rund 7,6 Mrd. $ (Apollo/ADT) · rund 115 Mrd. $ (Marvell/Lumentum, All-Stock)", buyer: "BASF (abgelehnt) · EQT-Konsortium · Thrive Holdings/Apollo · Marvell Technology", target: "Evonik · Qiagen · ADT · Lumentum", sector: "Chemie / Biotech-Diagnostik / Sicherheitstechnik / Optik-Halbleiter", type: "Unternehmensübernahmen (BASF/Evonik abgelehnt; eine mögliche Evonik-Gegenübernahme von Ashland ist unbestätigt, Finanzierung, Bewertung und Banken dazu nicht in den Quellen genannt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "ad-hoc-news.de: Evonik lehnt BASF-Angebot ab, Neubaur begrüßt Entscheidung", url: "https://www.ad-hoc-news.de/politik/evonik-lehnt-basf-angebot-ab-neubaur-begruesst-entscheidung/70435381" },
        { title: "Handelsblatt: Übernahmepoker – Evonik lehnt erhöhte Offerte von BASF ab", url: "https://www.handelsblatt.com/unternehmen/industrie/uebernahmepoker-evonik-lehnt-erhoehte-offerte-von-basf-ab/100266102.html" },
        { title: "WirtschaftsWoche: Evonik prüft Ashland-Kauf als Abwehr gegen Übernahme durch BASF", url: "https://www.wiwo.de/unternehmen/industrie/evonik-prueft-ashland-kauf-abwehr-gegen-uebernahme-durch-basf/100264549.html" },
        { title: "Börsen-Zeitung: Finanzinvestor EQT bietet 10,8 Mrd. Euro für Laborausrüster Qiagen", url: "https://www.boersen-zeitung.de/unternehmen-branchen/finanzinvestor-eqt-bietet-108-mrd-euro-fuer-laborausruester-qiagen" },
        { title: "The Motley Fool: Barclays says a SpaceX merger is now a key part of Tesla's bull case", url: "https://www.fool.com/investing/2026/11/01/barclays-says-a-spacex-merger-is-now-a-key-part-of/" }
      ]
    },
    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-blueowl-q3-redemptions-11-02", cats: ["credit", "pe"], when: "Blue-Owl-Q3-Earnings-Call 29.10.2026",
      headline: "Blue Owl meldet für das dritte Quartal höhere Gebühreneinnahmen, die Rücknahmewünsche bei einzelnen nicht börsennotierten Fonds gehen laut Unternehmen weiter zurück, branchenweit bleiben die Rücknahmen bei nicht börsennotierten BDCs aber über Vorjahresniveau",
      sec30: "Blue Owl Capital meldete beim Q3-Earnings-Call am 29.10.2026 Gebühreneinnahmen (Fee-Related Earnings) von 427,5 Mio. Dollar, ein Plus von 14 % gegenüber dem Vorjahr. Das Unternehmen berichtete zudem, dass die Rücknahmewünsche bei einzelnen seiner nicht börsennotierten Fonds rückläufig seien: Bei einem Fonds das zweite Quartal in Folge, bei einem anderen das fünfte Quartal in Folge und damit auf einem Neun-Quartals-Tief. Branchenweit bleiben die Rücknahmeanträge bei nicht börsennotierten BDCs (Business Development Companies) insgesamt aber erhöht: Laut Berichten summierten sie sich seit Jahresbeginn auf rund 3,4 Mrd. Dollar und liegen damit über dem Vorjahresniveau. Diese Zahlen ergänzen die bereits zuvor bekannten Rücknahmequoten bei den großen Flaggschifffonds von Blue Owl, Apollo, Ares und Blackstone für das dritte Quartal 2026.",
      blocks: [
        { h: "Was zeigen die Blue-Owl-Quartalszahlen?", items: [
          { tag: "fakt", text: "Blue Owl Capital meldete beim Q3-Earnings-Call am 29.10.2026 Gebühreneinnahmen (Fee-Related Earnings) von 427,5 Mio. Dollar – ein Plus von 14 % gegenüber dem Vorjahresquartal.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "fakt", text: "Das Unternehmen berichtete zudem, die Rücknahmewünsche gingen bei einzelnen seiner nicht börsennotierten Fonds weiter zurück: bei einem Fonds das zweite Quartal in Folge, bei einem anderen das fünfte Quartal in Folge und damit auf ein Neun-Quartals-Tief." }
        ]},
        { h: "Wie ist die Lage branchenweit?", items: [
          { tag: "unbestaetigt", text: "Branchenweit bleiben die Rücknahmeanträge bei nicht börsennotierten BDCs insgesamt erhöht: Laut Berichten summierten sie sich seit Jahresbeginn 2026 auf rund 3,4 Mrd. Dollar und liegen damit über dem Vorjahresniveau.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] },
          { tag: "fakt", text: "Diese Zahl ergänzt die bereits zuvor bekannten Rücknahmequoten der großen Flaggschifffonds für das dritte Quartal 2026: Blue Owl OBDC 16,8 %, Apollo Debt Solutions BDC 14,7 %, Ares-Flaggschifffonds 14,4 %, Blackstones BCRED 10 % und der spezialisierte Blue-Owl-Technologiefonds OTIC weiterhin rund 39 % – jeweils teils über dem vertraglichen Quartalslimit von 5 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Blue Owl bei einzelnen eigenen Fonds rückläufige Rücknahmewünsche meldet, während die Rücknahmen bei nicht börsennotierten BDCs insgesamt über dem Vorjahresniveau bleiben, deutet darauf hin, dass sich die im Oktober beobachtete leichte Entspannung bei den breit gestreuten Flaggschifffonds nicht gleichmäßig auf die gesamte Branche übertragen hat." }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits"],
      sources: [
        { title: "The Motley Fool: Blue Owl (OWL) Q3 2026 Earnings Call Transcript", url: "https://www.fool.com/earnings/call-transcripts/2026/10/29/blue-owl-owl-q3-2026-earnings-call-transcript/" },
        { title: "Yahoo Finance: Blue Owl's redemption shift shakes...", url: "https://finance.yahoo.com/news/blue-owls-redemption-shift-shakes-165500164.html" },
        { title: "Alternative Credit Investor: Blue Owl private credit redemption requests fall again in Q3", url: "https://alternativecreditinvestor.com/2026/10/30/blue-owl-private-credit-redemption-requests-fall-again-in-q3/" }
      ]
    },
    /* 13 TECHNOLOGIE: APPLE/AMAZON/INTEL/COREWEAVE/BURRY */
    {
      id: "apple-earnings-preview-amazon-intel-circular-ai-11-02", cats: ["tech"], when: "Apple-Zahlen Mo 2.11. nach Börsenschluss (Call 23 Uhr MEZ) · Analystenreaktionen Amazon/Intel Wochenende",
      headline: "Apple berichtet heute Abend seine Quartalszahlen – der erste Bericht unter dem neuen CEO John Ternus –, Analysten senken nach den Amazon- und Intel-Zahlen reihenweise ihre Kursziele, Investor Michael Burry bekräftigt seine Kritik an zirkulärer KI-Finanzierung",
      sec30: "Apple berichtet seine Zahlen für das vierte Geschäftsquartal heute, Montag, 2.11., nach US-Börsenschluss (Call um 23 Uhr MEZ) – der erste Quartalsbericht unter dem seit 1.9.2026 amtierenden neuen CEO John Ternus, der auf Tim Cook folgte; Cook wechselte in die Rolle des Executive Chairman. Analysten erwarten einen Umsatz von rund 113,4 Mrd. Dollar und ein Ergebnis je Aktie von rund 1,99 Dollar; Apple hat die Konsensschätzung die vergangenen acht Quartale in Folge übertroffen. Nach den enttäuschenden Amazon-Zahlen und dem Kurssturz von Intel am Freitag senkten mehrere Analysten ihre Kursziele deutlich, darunter Bank of America bei Intel von 145 auf 100 Dollar. Bei CoreWeave sank der Kreditausfallversicherungs-Spread (CDS) von seinem Rekordniveau auf rund 1.041 Basispunkte, bleibt aber im als risikoreich geltenden Bereich über 1.000 Basispunkten. Investor Michael Burry bekräftigte nach Anthropics Börsenprospekt seine Kritik an „zirkulärer” KI-Finanzierung und verweist auf ein verlangsamtes Umsatzwachstum bei gleichzeitig stark steigenden Rechenkosten des Unternehmens.",
      blocks: [
        { h: "Was wird von den Apple-Zahlen heute Abend erwartet?", items: [
          { tag: "fakt", text: "Apple berichtet seine Zahlen für das vierte Geschäftsquartal 2026 heute, Montag, 2.11., nach US-Börsenschluss; der Earnings-Call ist für 23 Uhr MEZ angesetzt. Analysten erwarten einen Umsatz von rund 113,4 Mrd. Dollar und ein Ergebnis je Aktie von rund 1,99 Dollar (+7,6 % gegenüber Vorjahr), beim iPhone-Umsatz rund 56,5 Mrd. Dollar (+15 %); Apple hat die Konsensschätzung die vergangenen acht Quartale in Folge übertroffen.",
            ask: [{ label: "Mehr zu CoreWeave und Nvidia", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Es ist der erste Quartalsbericht unter dem seit 1.9.2026 amtierenden neuen CEO John Ternus, der auf Tim Cook folgte; Cook wechselte in die Rolle des Executive Chairman. Analystenziele reichen von Bernstein (370 Dollar) über Monness (355 Dollar) bis Wedbush (350 Dollar); J.P. Morgan rechnet dagegen wegen zollbedingter Vorzieheffekte eher mit schwächeren iPhone-17-Verkäufen." }
        ]},
        { h: "Wie reagierten Analysten auf die Amazon- und Intel-Zahlen vom Freitag?", items: [
          { tag: "fakt", text: "Nach Amazons verfehltem Gewinnkonsens senkten mehrere Analysten ihre Kursziele, darunter Scotiabank (von 325 auf 300 Dollar) und Cantor Fitzgerald (von 310 auf 280 Dollar); andere wie Phillip Securities stuften die Aktie dagegen hoch." },
          { tag: "fakt", text: "Bei Intel, dessen Aktie am Freitag um bis zu 29 % einbrach – der nach Berichten größte Tagesverlust seit 1974 –, stufte Bank of America von „Buy” auf „Neutral” herab (Kursziel von 145 auf 100 Dollar), Roth Capital ebenfalls auf „Neutral” (120 auf 70 Dollar); Intels Guidance für das vierte Quartal impliziert laut Berichten ein Ergebnis je Aktie von 0,25 Dollar gegenüber einem Konsens von 0,43 Dollar." }
        ]},
        { h: "Wie geht es CoreWeave, und was wird zu zirkulärer KI-Finanzierung diskutiert?", items: [
          { tag: "unbestaetigt", text: "Bei CoreWeave sank der Kreditausfallversicherungs-Spread (CDS) von seinem Rekordniveau auf rund 1.041 Basispunkte, bleibt aber im als risikoreich geltenden Bereich über 1.000 Basispunkten; am Montag verzeichnete die Aktie laut Berichten ein Rekordvolumen bei Put-Optionen. Nvidia-CEO Jensen Huang äußerte sich zuversichtlich zur Lage von CoreWeave, an dem Nvidia rund 10 % hält.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "unbestaetigt", text: "Investor Michael Burry bekräftigte nach Anthropics Börsenprospekt seine Kritik an „zirkulärer” KI-Finanzierung; neu bekannt wurde laut Berichten, dass sich Anthropics Umsatzwachstum auf 46 % verlangsamt habe (von zuvor 144 %), während die Rechenkosten um 78 % gestiegen seien. Burry verschiebt laut Berichten seinen Zeithorizont für seine Short-Positionen auf Mitte bis Ende 2027; Gegenstimmen wie TV-Investor Jim Cramer werfen Kritikern vor, die geplante Anthropic-Börsennotierung schlechtreden zu wollen.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Apple seine Zahlen ausgerechnet unter einem neuen CEO und kurz nach dem breiten Technologie-Ausverkauf vom Freitag vorlegt, während Analysten die Kursziele bei Amazon und vor allem Intel senken und die Debatte um zirkuläre KI-Finanzierung durch neue Zahlen zu Anthropics Umsatzwachstum und Rechenkosten weitergeht, zeigt, wie genau Anleger derzeit beobachten, ob sich hohe KI-Investitionen in profitablen Ergebnissen niederschlagen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die allgemeine Marktreaktion wird in Meldung 1 behandelt, die EZB-Seite in Meldung 2.",
      terms: ["hyperscaler", "credit-spread"],
      followups: ["e:ai-capex", "e:circular-financing"],
      sources: [
        { title: "AppleInsider: Apple earnings preview, November 2026", url: "https://appleinsider.com/2026/11/01" },
        { title: "Washington Post: Apple CEO Tim Cook will step down, to be succeeded by hardware chief John Ternus", url: "https://www.washingtonpost.com/technology/2026/04/20/tim-cook-apple-ceo-john-ternus/" },
        { title: "Al Jazeera: John Ternus succeeds Tim Cook as Apple CEO after 15 years", url: "https://www.aljazeera.com/economy/2026/9/1/john-ternus-succeeds-tim-cook-as-apple-ceo-after-15-years" },
        { title: "CNBC: Intel downgraded after guidance implies big earnings miss", url: "https://www.cnbc.com/2026/10/31/" },
        { title: "GuruFocus: CoreWeave CDS spreads, Nvidia market cap update", url: "https://www.gurufocus.com/" }
      ]
    },
    /* 14 ENERGIE */
    {
      id: "energie-opecplus-ttf-brent-gasspeicher-11-02", cats: ["energy", "geo"], when: "OPEC+-Entscheidung So 1.11. · TTF/Brent Mo 2.11. · Gasspeicher-Stand 1.11.2026",
      headline: "Die OPEC+ lässt die Dezember-Förderquoten unverändert, der Ölpreis fällt dadurch und wegen Hoffnungen auf eine Iran-Diplomatie deutlich, der europäische Gaspreis bleibt über 100 Euro, die deutschen Gasspeicher liegen weiterhin unter dem gesetzlichen Herbstziel",
      sec30: "Die OPEC+ beließ bei ihrem virtuellen Treffen am Sonntag, 1.11., die Dezember-Förderquoten der sieben Kernländer unverändert bei rund 31 Mio. Barrel pro Tag – der dritte Monat in Folge ohne Änderung; die richtungsweisende Entscheidung über den Förderrahmen 2027 fällt erst am 29.11. Brent fiel daraufhin am Montag um rund 4 bis 4,5 % auf etwa 108 bis 109 Dollar je Barrel, WTI auf rund 99 bis 100 Dollar; als zusätzlichen Grund nennen Berichte Hoffnungen auf eine diplomatische Entspannung zwischen den USA und Iran. Der europäische Gas-Future TTF notierte am Montag bei rund 102 bis 104 Euro je Megawattstunde – leicht unter dem Freitagshoch, aber weiter über der seit 2022 nicht mehr erreichten Marke von 100 Euro. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 1.11. bei 61,17 % Füllstand und damit weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %; Behördenchef Klaus Müller betonte, die Versorgungssicherheit sei dennoch gewährleistet, warnte aber vor spürbar höheren Heizkosten. In der Nacht zum 1.11. griff die Ukraine erneut eine Lukoil-Raffinerie in Russland an (Meldung 7).",
      blocks: [
        { h: "Was hat die OPEC+ am Sonntag entschieden, und wie reagierte der Ölpreis?", items: [
          { tag: "fakt", text: "Die OPEC+ beließ die Dezember-Förderquoten der sieben Kernländer unverändert bei rund 31 Mio. Barrel pro Tag – der dritte Monat in Folge ohne Änderung; die richtungsweisende Entscheidung über den Förderrahmen 2027 fällt erst beim nächsten Treffen am 29.11.2026.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Brent fiel am Montag um rund 4 bis 4,5 % auf etwa 108 bis 109 Dollar je Barrel, WTI auf rund 99 bis 100 Dollar; als zusätzlichen Grund nennen Berichte Hoffnungen auf eine diplomatische Entspannung zwischen den USA und Iran, über die in Meldung 8 berichtet wird.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "fakt", text: "Der europäische Gas-Future TTF (Dezember-Kontrakt) notierte am Montag bei rund 102 bis 104 Euro je Megawattstunde – leicht unter dem Freitagshoch, aber weiter über der seit 2022 nicht mehr erreichten Marke von 100 Euro.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 1.11.2026 bei 61,17 % Füllstand – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % (bzw. 45 % für sechs spezielle Anlagen wie Rehden und Bad Lauchstädt)." },
          { tag: "position", text: "Bundesnetzagentur-Chef Klaus Müller betonte, die Versorgungssicherheit sei im Zusammenspiel aus Pipeline- und LNG-Importen, Speichern und Nachfrage dennoch gewährleistet, warnte aber vor spürbar höheren Heizkosten für Verbraucher." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis nach der unveränderten OPEC+-Entscheidung und Hoffnungen auf Iran-Diplomatie deutlich fällt, während der europäische Gaspreis über 100 Euro bleibt und die deutschen Gasspeicher weiterhin unter dem gesetzlichen Ziel liegen, zeigt, dass sich Öl- und Gasmärkte derzeit in unterschiedliche Richtungen bewegen – mit entsprechenden Folgen für Energiekosten in Europa.",
            ask: [{ label: "Öl- und Gaspreise wirken auf Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:gas-ttf", "e:opec-plus-why", "e:oil-inflation"],
      sources: [
        { title: "Bloomberg: OPEC+ leaves oil output targets unchanged for December", url: "https://www.bloomberg.com/news/articles/2026-11-01/opec-leaves-oil-output-targets-unchanged-for-december" },
        { title: "The National: OPEC+ holds December oil output targets steady as Iran war disrupts supply", url: "https://www.thenationalnews.com/business/energy/2026/11/01/opec-holds-december-oil-output-targets-steady-as-iran-war-disrupts-supply/" },
        { title: "WirtschaftsWoche: Ölpreise starten mit Verlusten in die neue Handelswoche", url: "https://www.wiwo.de/finanzen/oelpreis-aktuell-oelpreise-starten-mit-verlusten-in-die-neue-handelswoche/100207502.html" },
        { title: "Bundesnetzagentur: Speicherfüllstand – aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/_svg/Gasspeicher_Fuellstand/Speicherfuellstand.html" },
        { title: "taz: Gasspeicher nicht gut gefüllt", url: "https://taz.de/Gasspeicher-nicht-gut-gefuellt/!6226382/" }
      ]
    },
    /* 15 INTERNATIONAL/GEOPOLITIK: GAZA/TAIWAN/VENEZUELA/SUDAN */
    {
      id: "gaza-taiwan-venezuela-sudan-international-11-02", cats: ["world", "geo"], when: "Gaza-Vorfälle 30.10.–2.11. · Venezuela-Berichte 1./2.11. · El-Fasher-Jahrestag Okt. 2026",
      headline: "Der Gaza-Waffenstillstand bleibt laut Berichten weiterhin angespannt, in Venezuela wird Machados größte Herausforderung nun in politischer Geduld gesehen, zum Jahrestag der RSF-Eroberung von El Fasher veröffentlicht Amnesty International einen neuen Bericht",
      sec30: "Der seit Oktober 2025 geltende Gaza-Waffenstillstand bleibt laut mehreren Quellen angespannt: Nach israelischen Angaben vom 30.10. wurden zwei Hamas-Depots zerstört und vier Kämpfer getötet; laut Anadolu Agency wurden am 2.11. vier Palästinenser durch israelisches Feuer getötet. Ein UN-Bericht wirft Israel Kriegsverbrechen vor, was Israel zurückweist; seit Beginn des Waffenstillstands wurden nach palästinensischen Angaben mindestens 1.583 Menschen getötet. In Venezuela sehen Kommentatoren Oppositionsführerin María Corina Machados größte Herausforderung nun in politischer Geduld, nachdem sie am 30.10. öffentlich Präsidentschaftswahlen für 2027 gefordert hatte; die USA strichen zudem Jorge Rodríguez, den Bruder der amtierenden Interimspräsidentin Delcy Rodríguez, von einer Sanktionsliste, eine erste Gerichtsanhörung im Verfahren gegen den in US-Haft sitzenden Ex-Präsidenten Maduro ist für den 17.11. angesetzt. In der Taiwan-Frage gibt es keine neuen größeren Entwicklungen. Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die RSF veröffentlichte Amnesty International einen neuen Bericht, wonach die Einwohnerzahl der Stadt von fast einer Million auf unter 70.000 gesunken sei.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen gilt seit Oktober 2025 formal weiter." },
          { tag: "position", text: "Die israelische Armee meldete für den 30.10. die Zerstörung zweier Hamas-Waffendepots und die Tötung von vier Kämpfern, die laut israelischen Angaben Angriffe vorbereitet hätten." },
          { tag: "unbestaetigt", text: "Laut Anadolu Agency wurden am 2.11. vier Palästinenser durch israelisches Feuer getötet; diese Angabe stammt aus einer als israelkritisch einzuordnenden Quelle und ist nicht unabhängig verifiziert. Ein UN-Bericht wirft Israel zudem Kriegsverbrechen im Gazakrieg vor, was die israelische Regierung zurückweist; seit Beginn des Waffenstillstands wurden nach palästinensischen Angaben mindestens 1.583 Menschen im Gazastreifen getötet." }
        ]},
        { h: "Was ist in Venezuela neu?", items: [
          { tag: "position", text: "Oppositionsführerin María Corina Machado hatte am 30.10. erstmals öffentlich seit ihrer Rückkehr aus dem Exil Präsidentschaftswahlen für 2027 gefordert; Kommentatoren sehen ihre größte Herausforderung nun darin, auf diesem Weg politische Geduld zu beweisen." },
          { tag: "fakt", text: "Die USA strichen Jorge Rodríguez, den Bruder der amtierenden Interimspräsidentin Delcy Rodríguez, von einer Sanktionsliste; eine erste Gerichtsanhörung im Verfahren gegen den seit Januar 2026 in US-Haft sitzenden Ex-Präsidenten Nicolás Maduro (Frage der Immunität) ist für den 17.11.2026 in New York angesetzt." }
        ]},
        { h: "Was ist zum Sudan und zu Taiwan neu?", items: [
          { tag: "unbestaetigt", text: "Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die paramilitärische RSF veröffentlichte Amnesty International einen neuen Bericht, wonach die Einwohnerzahl der Stadt von fast einer Million vor dem Krieg auf unter 70.000 gesunken sei; der Bericht spricht von anhaltenden rechtswidrigen Tötungen und möglichem Völkermord – eine gerichtliche Feststellung dazu liegt nicht vor." },
          { tag: "fakt", text: "In der Taiwan-Frage gibt es gegenüber dem Stand vom 30.10. keine neuen größeren Entwicklungen; zu neuen chinesischen Luftraumverletzungen liegen keine Berichte vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Gaza-Waffenstillstand trotz formaler Fortgeltung von neuen Vorfällen begleitet bleibt, während sich in Venezuela mit der Sanktionslockerung für Jorge Rodríguez und dem angesetzten Gerichtstermin gegen Maduro konkrete nächste Schritte abzeichnen und die Lage in Sudan laut Menschenrechtsorganisationen weiterhin als gravierend beschrieben wird, zeigt, wie unterschiedlich weit mehrere parallel laufende internationale Konfliktlinien derzeit vorangeschritten sind." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "Anadolu Agency: Israeli fire kills four Palestinians in Gaza", url: "https://www.aa.com.tr/en" },
        { title: "Japan Times: Venezuela's Machado faces test of political patience", url: "https://www.japantimes.co.jp/" },
        { title: "Foreign Policy: Venezuela – After Machado Returns, Will U.S. Allow Elections?", url: "https://foreignpolicy.com/2026/10/30/venezuela-machado-elections-us-rubio-rodriguez-oil/" },
        { title: "Amnesty International: Sudan – El Fasher one year after capture by the RSF", url: "https://www.amnesty.org/en/latest/news/2026/10/sudan-el-fasher-civilians-suffer-unlawful-killings-detention-and-torture-one-year-after-citys-capture-by-the-rsf-new-testimony/" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX stieg am Montagvormittag auf zwischen 25.829 und 25.912 Punkte (+0,11 % bis +0,36 %), nachdem er am Freitag 0,85 % auf 25.818,21 Punkte verloren hatte; der Euro Stoxx 50 notierte zwischen rund 6.134 und 6.156 Punkten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die leichte Erholung am Montag nennen Berichte den deutlich fallenden Ölpreis sowie die Einschätzung, der Freitags-Ausverkauf sei eher auf einzelne Unternehmenszahlen als auf einen breiteren Trend zurückzuführen." },
    "yield-meaning": { tag: "fakt", story: 1, text: "Die US-10-Jahres-Rendite liegt am Montag weitgehend stabil bei rund 4,93 %, die Rendite zehnjähriger Bundesanleihen bei rund 3,33 % (+0,02 Prozentpunkte)." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold stieg am Montagmorgen um rund 0,8 % auf etwa 3.903 Dollar je Feinunze, bleibt aber unter der am Wochenende erstmals seit rund einem Jahr unterschrittenen Marke von 4.000 Dollar." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin notiert am Montag bei rund 77.750 bis 77.975 Dollar, nahezu unverändert gegenüber Freitag; ein mutmaßlicher Hack bei Binance und Abflüsse aus Bitcoin-ETFs belasten weiterhin." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro stieg am Montag bis auf 1,1237 Dollar, gestützt von den sich verdichtenden Erwartungen auf eine EZB-Zinserhöhung im Dezember." },
    "central-banks-why": { tag: "position", story: 2, text: "EZB-Präsidentin Lagarde sagte am 29.10., ohne Überraschungen sei „die Richtung der Reise ziemlich klar” – von Beobachtern als Signal für eine mögliche Dezember-Zinserhöhung gewertet." },
    "fed-hike": { tag: "fakt", story: 2, text: "Die Fed hatte ihren Leitzins bereits am 28.10. bei 3,75 bis 4,00 % belassen; die EZB hielt am 29.10. mit einer eigenen Zinspause bei 2,50 % dagegen, signalisierte aber eine mögliche Dezember-Erhöhung." },
    "ecb-hike": { tag: "unbestaetigt", story: 2, text: "Beobachter werten Lagardes Aussagen vom 29.10. weiterhin als Signal für eine EZB-Zinserhöhung im Dezember um voraussichtlich 25 Basispunkte; eine offizielle Bestätigung der EZB liegt nicht vor, die nächste Sitzung ist erst Mitte Dezember." },
    "inflation-expectations": { tag: "unbestaetigt", story: 4, text: "Nationale Oktober-Inflationswerte schwanken zwischen 2,8 % in Deutschland und 5,4 % in Italien; Vorab-Schätzungen für die gesamte Eurozone liegen zwischen 3,7 % und 4,0 %, die offizielle Schnellschätzung folgt erst am 4.11." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Laut Kabinettsentwurf soll die Neuverschuldung 2027 insgesamt rund 200 Mrd. Euro erreichen, davon rund 118,7 Mrd. Euro im Kernhaushalt; die endgültigen Zahlen legt die Bereinigungssitzung am 12.11. fest." },
    "debt-brake": { tag: "fakt", story: 5, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "rente-basics": { tag: "position", story: 6, text: "Kanzler Merz will die Reformvorschläge der Alterssicherungskommission „so umsetzen, wie sie auf dem Tisch liegen”, sieht aber „auch für mich Grenzen”; Arbeitsminister Schweitzer sucht einen Kompromiss und will die Rente mit 63 im Kern erhalten." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Der INSA-Sonntagstrend vom 1.11. sieht die AfD unverändert bei 29 % vor der Union (20 %); die SPD liegt unverändert bei 13 %, die Grünen bei 14 %." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 8, text: "Der Ölpreis fiel am Montag trotz anhaltender Spannungen am Golf deutlich, nachdem die OPEC+ ihre Förderquoten unverändert ließ und Berichte über US-Iran-Vermittlungsgespräche die Risikoprämie dämpften." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Über das Wochenende wurden weitere Tanker- und Frachter-Zwischenfälle in der Straße von Hormus gemeldet, unter anderem beim katarischen LNG-Frachter „Al Mayeda”; die Zuschreibung bleibt unklar." },
    "opec-plus-why": { tag: "fakt", story: 14, text: "Die OPEC+ beließ am Sonntag, 1.11., die Dezember-Förderquoten unverändert – der dritte Monat in Folge ohne Änderung; die Entscheidung über den Förderrahmen 2027 fällt erst am 29.11." },
    "defence-order": { tag: "fakt", story: 10, text: "Der Bundestags-Haushaltsausschuss berät am 4.11. über sieben weitere Rüstungsvorhaben im Volumen von jeweils über 25 Mio. Euro; der Festauftrag für das Arminius-Programm soll weiterhin nach der Befassung am 9.12. unterschrieben werden." },
    "defence-stocks": { tag: "unbestaetigt", story: 9, text: "Rheinmetall, Hensoldt und RENK notierten am Montag uneinheitlich; Jefferies bestätigte vor den Rheinmetall-Zahlen am 5.11. die Kaufempfehlung, während Analysten bei Hensoldt wegen eines Logistikproblems unterschiedlich urteilen." },
    "nato-target": { tag: "unbestaetigt", story: 10, text: "Die Verteidigungsausgaben aller NATO-Mitglieder sollen 2026 laut Schätzungen auf über 1,8 Billionen Dollar steigen; fast alle Mitglieder erreichen inzwischen das 2-Prozent-Ziel." },
    "ma-steps": { tag: "fakt", story: 11, text: "Evonik lehnte das auf 24 Euro je Aktie erhöhte BASF-Angebot am 30.10. offiziell ab, ließ aber vertraulichen Informationsaustausch zu; der EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) ist bereits besiegelt." },
    "take-private-why": { tag: "unbestaetigt", story: 11, text: "Evonik soll laut Berichten eine Gegenübernahme des US-Konzerns Ashland prüfen, was das Unternehmen offiziell bestreitet; die RAG-Stiftung äußerte sich weiterhin nicht öffentlich zum BASF-Angebot." },
    "deal-risks": { tag: "unbestaetigt", story: 11, text: "Bei Tesla und SpaceX bleibt eine mögliche Fusion weiterhin unbestätigt; Barclays bezeichnet sie inzwischen als „zentralen Bestandteil” der Tesla-Anlagethese, Musk selbst kann wegen eines Interessenkonflikts nicht an den Gesprächen teilnehmen." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Blue Owl meldete für das dritte Quartal Gebühreneinnahmen von 427,5 Mio. Dollar (+14 %); die Rücknahmewünsche gingen bei einzelnen eigenen Fonds weiter zurück, bleiben branchenweit bei nicht börsennotierten BDCs aber über Vorjahresniveau." },
    "redemption-limits": { tag: "unbestaetigt", story: 12, text: "Branchenweit summierten sich die Rücknahmeanträge bei nicht börsennotierten BDCs seit Jahresbeginn 2026 auf rund 3,4 Mrd. Dollar; beim spezialisierten Blue-Owl-Technologiefonds OTIC blieben die Rücknahmewünsche im dritten Quartal bei rund 39 % – weiterhin der höchste Wert der Branche." },
    "ai-capex": { tag: "fakt", story: 13, text: "Apple berichtet seine Zahlen heute Abend als erster Quartalsbericht unter dem neuen CEO John Ternus; Analysten erwarten rund 113,4 Mrd. Dollar Umsatz, nach dem Ausverkauf bei Amazon und Intel am Freitag." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "Investor Michael Burry bekräftigte seine Kritik an zirkulärer KI-Finanzierung und verweist auf ein von 144 % auf 46 % verlangsamtes Umsatzwachstum bei Anthropic, während dessen Rechenkosten um 78 % stiegen." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 1.11. bei 61,17 % Füllstand – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %." },
    "gas-ttf": { tag: "fakt", story: 14, text: "Der europäische Gas-Future TTF notierte am Montag bei rund 102 bis 104 Euro je Megawattstunde und bleibt damit über der seit 2022 nicht mehr erreichten Marke von 100 Euro." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent fiel am Montag auf rund 108 bis 109 Dollar je Barrel; ein fallender Ölpreis wirkt tendenziell dämpfend auf Sprit-, Heiz- und Transportkosten in Europa." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie reagierten DAX und US-Aktienfutures am Montagvormittag, 2.11.2026, nach dem breiten Technologie-Ausverkauf vom Freitag?",
      options: [
        "Sie fielen weiter deutlich",
        "Sie zeigten sich leicht erholt bzw. wiesen nach oben",
        "Sie blieben exakt unverändert",
        "Der Handel wurde ausgesetzt"
      ],
      answer: 1,
      explain: "Der DAX stieg am Montagvormittag auf zwischen 25.829 und 25.912 Punkte, auch die US-Aktienfutures deuteten auf einen freundlicheren Start hin – unter anderem gestützt vom deutlich fallenden Ölpreis."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 2,
      q: "Angenommen, die Eurozone-Inflation würde in der Schnellschätzung am 4.11.2026 deutlich über den bisherigen Erwartungen liegen. Was würde das unter sonst gleichen Bedingungen am ehesten für die von vielen Beobachtern erwartete EZB-Zinserhöhung im Dezember bedeuten?",
      options: [
        "Die Erhöhung würde dadurch unwahrscheinlicher, weil hohe Inflation die EZB zu Zinssenkungen zwingt",
        "Es gäbe keinen Zusammenhang, da die EZB Inflationsdaten bei ihren Entscheidungen nicht berücksichtigt",
        "Die Erhöhung würde dadurch wahrscheinlicher, da einer der von Beobachtern genannten Gründe für eine mögliche Straffung bestätigt würde",
        "Der Leitzins würde automatisch auf 0 % fallen"
      ],
      answer: 2,
      explain: "Lagardes Andeutung einer möglichen Dezember-Erhöhung wird unter anderem mit der im Vergleich zum 2-Prozent-Ziel hohen Inflation begründet; eine höher als erwartet ausfallende Oktober-Inflation würde dieses Argument für eine Zinserhöhung stärken."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 8,
      q: "Angenommen, die US-Iran-Vermittlungsgespräche würden in den kommenden Tagen tatsächlich zu einer echten Entspannung in der Straße von Hormus führen. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Einen tendenziell steigenden Ölpreis, weil Entspannung an den Märkten immer als Kaufsignal gilt",
        "Keine Auswirkung, da der Ölpreis unabhängig von der Lage am Golf ist",
        "Eine automatische Verdoppelung der OPEC+-Förderquoten",
        "Einen tendenziell weiter sinkenden Ölpreis, weil die Sorge vor Lieferausfällen durch die wichtige Handelsroute abnehmen würde"
      ],
      answer: 3,
      explain: "Ein großer Teil der weltweiten Öltransporte läuft normalerweise durch die Straße von Hormus; bereits Berichte über mögliche Vermittlungsgespräche drückten den Ölpreis am Montag, eine echte Entspannung würde ihn nach dieser Logik tendenziell weiter sinken lassen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Welche Partei sieht der INSA-Sonntagstrend vom 1.11.2026 unverändert als stärkste Kraft vor der Union?",
      options: [
        "SPD",
        "Grüne",
        "AfD",
        "Linke"
      ],
      answer: 2,
      explain: "Der INSA-Sonntagstrend für „Bild am Sonntag” sieht die AfD unverändert bei 29 % vor der Union mit 20 %."
    },
    {
      topic: "Technologie", type: "Fakt", story: 13,
      q: "Was ist an den Apple-Quartalszahlen vom heutigen Montagabend, 2.11.2026, eine Besonderheit?",
      options: [
        "Es ist der erste Quartalsbericht unter dem neuen CEO John Ternus, der auf Tim Cook folgte",
        "Apple veröffentlicht erstmals keine Umsatzzahlen mehr",
        "Es ist der letzte Quartalsbericht vor einer Fusion mit Intel",
        "Apple berichtet ausnahmsweise vor US-Börsenschluss"
      ],
      answer: 0,
      explain: "John Ternus, zuvor Hardware-Chef, löste Tim Cook zum 1.9.2026 als CEO ab; der heutige Bericht ist sein erster Quartalsbericht in dieser Rolle, Cook wechselte in die Position des Executive Chairman."
    }
  ]
};
