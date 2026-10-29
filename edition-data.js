// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-29",
  dateLabel: "Donnerstag, 29. Oktober 2026",
  updatedLabel: "Recherchestand 29.10.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagmorgen, 29.10.2026, vor Eröffnung der europäischen Börsen (Xetra startet 9 Uhr MEZ, die Wall Street 15:30 MEZ). Für DAX, Euro Stoxx 50, Dow Jones, S&P 500, Nasdaq Composite sowie für die Renditen von US- und Bundesanleihen gilt deshalb weiterhin der Schlussstand von Mittwoch, 28.10.2026, da zum Redaktionsschluss noch keine Kassakurse für Donnerstag vorliegen; Vorbörsen-Indikationen (Futures) werden ausdrücklich als vorläufig gekennzeichnet. Gold-, Öl- und Bitcoin-Notierungen handeln dagegen durchgehend; hier wird der aktuellste verfügbare Stand gezeigt. Die US-Notenbank Fed hatte ihren Leitzins am Mittwochabend bei 3,75 bis 4,00 % belassen (Meldung 2); heute, Donnerstag, entscheidet die EZB um 14:15 MEZ über ihren Leitzins (Pressekonferenz 14:45 MEZ). Nach US-Börsenschluss am Mittwoch legten bereits Microsoft und Alphabet sehr unterschiedlich aufgenommene Quartalszahlen vor, Amazon folgt heute nach Börsenschluss (Meldung 13). Bei Brent und WTI weichen verfügbare Quellen für Mittwoch und Donnerstagmorgen weiterhin voneinander ab; Abweichungen sind entsprechend gekennzeichnet (Meldung 14).",

  top: [
    { text: "Die Fed beließ ihren Leitzins am Mittwochabend bei 3,75 bis 4,00 % (Abstimmung 10:2); Fed-Chef Kevin Warsh wies Vorwürfe einer politisch motivierten Entscheidung zurück. DAX (25.704,02 Punkte, +0,44 %) und die US-Indizes schlossen uneinheitlich, der Euro Stoxx 50 gab leicht nach (6.152,92 Punkte, -0,19 %); die US-10-Jahres-Rendite stieg auf rund 5,03 bis 5,04 %.", ref: "s:2" },
    { text: "Microsoft und Alphabet legten am Mittwochabend sehr unterschiedlich aufgenommene Quartalszahlen vor: Die Microsoft-Aktie stieg vorbörslich am Donnerstag um rund 4 %, die Alphabet-Aktie brach dagegen um rund 10 % ein. Amazon berichtet heute nach US-Börsenschluss.", ref: "s:13" },
    { text: "Die EZB entscheidet heute, 29.10., um 14:15 MEZ über ihren Leitzins; eine Reuters-Umfrage sieht eine erneute Pause bei 2,50 % als wahrscheinlich, für Dezember erwarten die meisten befragten Ökonomen dagegen eine weitere Erhöhung. Die Nominierungsfrist für die Schnabel-Nachfolge wurde bis zum 27.11. verlängert.", ref: "s:4" },
    { text: "Die Lage am Golf bleibt angespannt: Die Straße von Hormus gilt laut Branchenbeobachtern weiterhin als faktisch für den Welthandel gesperrt, Huthi-Rebellen meldeten einen Angriff auf die saudische Raffinerie Ras Tanura. Der Ölpreis (Brent) bewegte sich entsprechend zwischen rund 113 und 116 Dollar je Barrel.", ref: "s:8" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.704,02", change: "+0,44 % (Mi-Schluss)", dir: "up", asof: "Schluss Mi 28.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Donnerstag-Vorbörse", text: "Laut Vorbörsen-Indikationen notierte der DAX-Future am Donnerstagmorgen rund zwei Stunden vor Xetra-Start bei etwa 25.765 bis 25.834 Punkten (+0,24 % bis +0,3 %) – leicht höher als der Mittwochsschluss." }
      ],
      moved: {
        intro: "Als Hintergrund für Mittwoch nennen Berichte:",
        items: [
          "Die Fed-Entscheidung am Abend und ihre Aufnahme an den Märkten; mehr dazu in Meldung 2.",
          "Einzelwerte wie die Deutsche Bank (nach Rekordquartalsgewinn, rund +4 %) stützten den Index, während Symrise nach schwachen Zahlen über 10 % verlor."
        ]
      },
      important: [
        { area: "Fed", text: "Die Fed-Entscheidung vom Mittwochabend wird in Meldung 2 behandelt.", ref: "s:2" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Dax auf Erholungskurs", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-auf-erholungskurs-12185579" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.152,92", change: "-0,19 % (-11,77 Pkt., Mi-Schluss)", dir: "down", asof: "Schluss Mi 28.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Im Vergleich zum DAX", text: "Während der DAX am Mittwoch leicht zulegte, gab der breitere Euro Stoxx 50 leicht nach – ein Hinweis darauf, dass sich die Bewegung nicht gleichmäßig auf alle Eurozonen-Länder und -Branchen verteilte." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Die Zurückhaltung vor der Fed-Entscheidung am Abend und die gemischte Reaktion auf europäische Einzelwerte (Meldung 1).",
          "Die weiterhin erhöhte, aber seit dem Moody's-Entscheid nicht weiter eskalierende französische Risikoprämie; mehr dazu in Meldung 4."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB-Zinsentscheidung heute und die französische Risikoprämie werden in Meldung 4 behandelt.", ref: "s:4" }
      ],
      source: { title: "Yahoo Finance: EURO STOXX 50", url: "https://finance.yahoo.com/quote/%5ESTOXX50E/" }
    },
    "sp500": {
      label: "S&P 500", value: "≈ 7.744", change: "+0,28 % (Mi-Schluss)", dir: "up", asof: "Schluss Mi 28.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Donnerstag-Vorbörse", text: "Laut Vorbörsen-Indikationen notierte der S&P-500-Future am Donnerstagmorgen rund 0,4 % niedriger, der Nasdaq-100-Future sogar rund 1,3 % niedriger – vor allem wegen des Kurseinbruchs bei Alphabet nach den Quartalszahlen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Die Fed beließ den Leitzins unverändert bei 3,75 bis 4,00 %; Anleger positionierten sich zugleich vor den Quartalszahlen von Microsoft und Alphabet nach Börsenschluss.",
          "Der Volatilitätsindex VIX fiel auf rund 17,52 Punkte (-4,7 %), ein Hinweis auf nachlassende Nervosität vor der Fed-Entscheidung."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Fed-Entscheidung vom Mittwochabend in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Yahoo Finance: Markets News, Oct. 28, 2026 – Stocks Close Higher, Treasury Yields Rise After Fed Holds Rates Steady", url: "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-28-2026-111035502.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "≈ 26.550", change: "+0,27 % (Mi-Schluss)", dir: "up", asof: "Schluss Mi 28.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Donnerstag-Vorbörse", text: "Der Nasdaq-100-Future zeigte am Donnerstagmorgen ein deutliches Minus von rund 1,3 %, nachdem die Alphabet-Aktie nach den Quartalszahlen vorbörslich über 10 % verloren hatte; die Microsoft-Aktie stieg dagegen vorbörslich um rund 4 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Anleger positionierten sich vor den Quartalszahlen von Microsoft und Alphabet am Abend; mehr dazu in Meldung 13."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Microsoft, Alphabet, CoreWeave, Meta, Nvidia und Broadcom in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow rises, S&P 500 and Nasdaq futures fall as Alphabet stock sells off", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-29-dow-sp-500-nasdaq-alphabet-microsoft-081708101.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1133", change: "EZB-Referenzkurs Mi; Donnerstagswerte uneinheitlich zwischen 1,1129 und 1,116", dir: "flat", asof: "EZB-Referenzkurs Mi 28.10.26", story: 3,
      means: "1 Euro kostet etwa 1,11 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Donnerstag", text: "Für Donnerstagmorgen nennen verschiedene Quellen uneinheitliche Werte zwischen rund 1,1129 und 1,116 Dollar; eine offizielle EZB-Notierung für Donnerstag lag zum Redaktionsschluss noch nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die als weitgehend erwartet eingestufte Fed-Entscheidung vom Mittwochabend sowie die Erwartung der heutigen EZB-Sitzung werden als Hintergrund genannt; ein eindeutiger Einzelgrund für die Kursbewegung wird in den verfügbaren Quellen nicht benannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur heutigen EZB-Sitzung und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro foreign exchange reference rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,03–5,04 %", change: "+3 bis +5 Basispunkte nach der Fed-Entscheidung", dir: "up", asof: "Stand Mi 28.10.26 abends", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,03 bis 5,04 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; die Rendite liegt damit gut einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Rendite stieg laut Berichten, nachdem die Fed den Leitzins zwar wie erwartet unverändert ließ, Marktbeobachter die Wahrscheinlichkeit einer weiteren Erhöhung im Dezember nach der Pressekonferenz aber auf rund 83 bis 85 % anhoben."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur gestrigen Fed-Entscheidung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "CNBC: 10-year Treasury yield creeps higher even as Fed keeps rates the same", url: "https://www.cnbc.com/2026/10/28/us-treasurys-bonds-yields-federal-reserve.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,37 %", change: "leicht niedriger als Anfang Oktober", dir: "down", asof: "Stand Mi 28.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Frankreichs 10-Jahres-Rendite (OAT) lag am Mittwoch bei rund 4,94 %; der Risikoaufschlag zu Bundesanleihen (OAT/Bund-Spread) lag bei rund 156,6 Basispunkten – nach einem Mehrjahreshoch von rund 178 Basispunkten am 22.10. weiterhin deutlich niedriger." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Rendite liegt mit rund 3,37 % niedriger als Anfang Oktober (3,55 % am 7.10., Zwischenhoch 3,69 % am 28.9.), vor der heutigen EZB-Sitzung."
        ]
      },
      important: [
        { area: "Frankreich", text: "Mehr zur EZB-Sitzung heute und zur französischen Haushaltslage in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "cbonds.de: 10-jährige Bundesanleihe – Rendite, Kurs und Zinsentwicklung", url: "https://cbonds.de/10-year-german-government-bond-yield/" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.031–4.044 $", change: "-0,5 bis -0,6 % ggü. Vortag", dir: "down", asof: "Stand Do 29.10.26 früh", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.030 bis 4.040 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Monatsverlauf", text: "Laut Goldreporter liegt Gold damit rund 9,2 % unter dem Stand vor einem Monat, aber weiterhin rund 6,6 % im Minus seit Jahresbeginn 2026 insgesamt niedriger; zwei Quellen (Goldreporter, Goldesel.de) nennen für Donnerstagmorgen leicht abweichende Werte zwischen 4.031 und 4.044 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Als Hintergrund für den Rückgang nennen Berichte die nach der Fed-Entscheidung gestiegenen Anleiherenditen, die Gold als zinslose Anlage relativ weniger attraktiv machen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur gestrigen Fed-Entscheidung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Goldreporter: Goldpreis heute – 4.000-Dollar-Marke weiter im Fokus", url: "https://www.goldreporter.de/goldpreis-29-10-2026/marktbericht-gold/262669/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 113–116 $ (Quellen uneinheitlich)", change: "leicht niedriger im Tagesverlauf", dir: "down", asof: "Stand Do 29.10.26 früh", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 113 bis 116 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Frühjahr 2026.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI notierte am Donnerstagmorgen laut Berichten zwischen rund 100,7 und 102 Dollar je Barrel – ebenfalls mit leicht rückläufiger Tendenz." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Hoffnung auf eine mögliche Deeskalation, nachdem laut Berichten US-Vizepräsident Vance Kontakt zu einem iranischen Sicherheitsvertreter gesucht haben soll, wird als Grund für den leichten Rückgang genannt; mehr zur Lage am Golf in Meldung 8.",
          "Der Schiffsverkehr durch die Straße von Hormus bleibt laut Kpler-Daten mit rund 8,5 Mio. Barrel pro Tag deutlich unter dem Niveau vor der Krise, was den Ölpreis weiterhin stützt."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf und in der Straße von Hormus in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "HDFC Sky: Oil Slips on US–Iran Talks but Middle East Tensions Limit Fall", url: "https://hdfcsky.com/news/oil-prices-today-october-29-2026-brent-falls-to-114-2-wti-at-101-4-as-us-iran-peace-hopes-counter-supply-risks" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 79.700–80.300 $", change: "leicht schwankend im Tagesverlauf", dir: "flat", asof: "Stand Do 29.10.26 früh", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 80.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf", text: "Zwei Quellen nennen für die frühen Donnerstagmorgenstunden (Eastern Time) leicht abweichende Werte zwischen rund 79.656 und 80.279 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung wurde kein spezifischer Einzelgrund genannt; Berichte verweisen auf die allgemeine Stimmung bei Risikoanlagen nach der Fed-Entscheidung."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Bitcoin price today", url: "https://www.coindesk.com/price/bitcoin" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-mittwochsschluss-fed-reaktion-10-29", cats: ["markets"], when: "Schluss Mi 28.10.2026 · Vorbörse Do 29.10.2026",
      headline: "DAX schließt den Mittwoch leicht im Plus, Euro Stoxx 50 und US-Indizes uneinheitlich, Vorbörse zeigt Donnerstagmorgen eine gespaltene Reaktion auf Alphabet und Microsoft",
      sec30: "Der DAX legte am Mittwoch um 0,44 % auf 25.704,02 Punkte zu, der Euro Stoxx 50 gab dagegen leicht um 0,19 % auf 6.152,92 Punkte nach. Bei den US-Indizes stieg der S&P 500 um rund 0,28 % auf etwa 7.744 Punkte, die Nasdaq Composite um rund 0,27 % auf etwa 26.550 Punkte; der Volatilitätsindex VIX fiel auf 17,52 Punkte (-4,7 %). Als Hintergrund nennen Berichte die als weitgehend erwartet eingestufte Fed-Entscheidung vom Abend sowie Einzelwerte wie die Deutsche Bank (Rekordquartalsgewinn, rund +4 %) und Symrise (schwache Zahlen, über -10 %). Vorbörsen-Indikationen zeigen für Donnerstag eine gespaltene Reaktion auf die Quartalszahlen von Microsoft und Alphabet: Der DAX-Future notierte leicht höher, der Nasdaq-100-Future dagegen rund 1,3 % niedriger, nachdem die Alphabet-Aktie vorbörslich über 10 % verlor.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stieg am Mittwoch um 0,44 % auf 25.704,02 Punkte, der Euro Stoxx 50 gab dagegen um 0,19 % (-11,77 Punkte) auf 6.152,92 Punkte nach. Bei Einzelwerten legte die Deutsche Bank nach einem Rekordquartalsgewinn rund 4 % zu, während Symrise nach schwachen Zahlen und einem gesenkten Ausblick über 10 % verlor.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 trotz vergleichbarer Rahmenbedingungen in unterschiedliche Richtungen liefen, deutet darauf hin, dass Einzelwert-Nachrichten am Mittwoch stärker wirkten als die gemeinsame Erwartung vor der Fed-Entscheidung." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes?", items: [
          { tag: "fakt", text: "Der S&P 500 stieg laut Berichten um rund 0,28 % auf etwa 7.744 Punkte, die Nasdaq Composite um rund 0,27 % auf etwa 26.550 Punkte, der Dow Jones um rund 0,19 % auf etwa 52.475 Punkte. Der Volatilitätsindex VIX fiel auf 17,52 Punkte, nach rund 18,4 Punkten am Vortag.",
            ask: [{ label: "Mehr zur Fed-Entscheidung vom Mittwochabend", ref: "s:2" }] },
          { tag: "einordnung", text: "Anleger positionierten sich vor der Fed-Entscheidung am Nachmittag sowie vor den Quartalszahlen von Microsoft und Alphabet nach Börsenschluss; die moderaten Kursausschläge deuten auf eine insgesamt erwartungsgemäß verlaufene Fed-Sitzung hin." }
        ]},
        { h: "Was zeigen die Vorbörsen-Indikationen für Donnerstag?", items: [
          { tag: "unbestaetigt", text: "Laut Vorbörsen-Indikationen notierte der DAX-Future am Donnerstagmorgen rund zwei Stunden vor Xetra-Start bei etwa 25.765 bis 25.834 Punkten (+0,24 % bis +0,3 %); der Dow-Future zeigte sich rund 0,3 % höher. Der S&P-500-Future notierte dagegen rund 0,4 % niedriger, der Nasdaq-100-Future sogar rund 1,3 % niedriger.",
            ask: [{ label: "Mehr zu Microsoft und Alphabet", ref: "s:13" }] },
          { tag: "fakt", text: "Als Grund für das uneinheitliche Bild nennen Berichte die gegensätzliche Aktienreaktion auf die nach US-Börsenschluss am Mittwoch veröffentlichten Quartalszahlen: Die Alphabet-Aktie brach vorbörslich über 10 % ein, während die Microsoft-Aktie rund 4 % zulegte." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass DAX und US-Indizes den Mittwoch nur moderat und uneinheitlich bewegten, während sich die Vorbörse für Donnerstag bereits wieder stark gespalten zeigt, verdeutlicht, wie unmittelbar einzelne Unternehmenszahlen und die Fed-Entscheidung derzeit auf die Marktstimmung wirken. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, Gold/Bitcoin/Bund-Rendite in Meldung 3, Technologie/Microsoft/Alphabet/CoreWeave in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Dax auf Erholungskurs", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-auf-erholungskurs-12185579" },
        { title: "ntg24.de: Börsenschluss – AI-Optimismus trägt den DAX, Deutsche Bank mit Rekordquartal", url: "https://www.ntg24.de/Boersenschluss-AI-Optimismus-traegt-den-DAX-Deutsche-Bank-mit-Rekordquartal-an-der-Spitze-28102026-MF" },
        { title: "Yahoo Finance: Markets News, Oct. 28, 2026 – Stocks Close Higher, Treasury Yields Rise After Fed Holds Rates Steady", url: "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-28-2026-111035502.html" },
        { title: "finanzen.at: EUREX/DAX-Future leicht im Plus", url: "https://www.finanzen.at/nachrichten/aktien/eurex-dax-future-leicht-im-plus-1036683603" },
        { title: "Yahoo Finance: Stock market today – Dow rises, S&P 500 and Nasdaq futures fall as Alphabet stock sells off", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-29-dow-sp-500-nasdaq-alphabet-microsoft-081708101.html" }
      ]
    },
    /* 2 FED-ENTSCHEIDUNG */
    {
      id: "fed-entscheidung-warsh-haelt-leitzins-10-29", cats: ["markets", "economy"], when: "FOMC-Entscheidung Mi 28.10.2026, 14 Uhr ET / 19 Uhr MEZ · PK 19:30 Uhr MEZ",
      headline: "Die Fed beließ den Leitzins am Mittwochabend bei 3,75 bis 4,00 %, zwei Gouverneure stimmten für eine Erhöhung, Fed-Chef Warsh weist Vorwürfe einer politisch motivierten Entscheidung zurück",
      sec30: "Die Fed beließ ihren Leitzins am Mittwoch, 28.10., um 14 Uhr Eastern Time (19 Uhr MEZ) unverändert in der Spanne von 3,75 bis 4,00 % – bei einer Abstimmung von 10 zu 2. Gouverneurin Lisa Cook und die Präsidentin der Cleveland-Fed, Beth Hammack, stimmten für eine Erhöhung um 25 Basispunkte; für Cook war es laut Berichten der erste Dissens ihrer Amtszeit. Fed-Chef Kevin Warsh sagte auf der anschließenden Pressekonferenz, Politik habe bei der Entscheidung „keine Rolle” gespielt, und bezeichnete die Sitzung als „a heck of a family fight”. Er kündigte zudem an, die Fed werde ab 2027 nur noch acht statt der bisherigen Zahl geldpolitischer Sitzungen pro Jahr abhalten. Die US-10-Jahres-Rendite stieg im Anschluss auf rund 5,03 bis 5,04 %; laut CME FedWatch stieg die eingepreiste Wahrscheinlichkeit für eine weitere Erhöhung im Dezember auf rund 83 bis 85 %.",
      blocks: [
        { h: "Was hat die Fed am Mittwoch entschieden?", items: [
          { tag: "fakt", text: "Die Fed beließ ihren Leitzins am 28.10. um 14 Uhr Eastern Time (19 Uhr MEZ) unverändert in der Spanne von 3,75 bis 4,00 %. Die Entscheidung fiel mit 10 zu 2 Stimmen: Gouverneurin Lisa Cook und die Präsidentin der Cleveland-Fed, Beth Hammack, votierten für eine Erhöhung um 25 Basispunkte.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Die Fed beschrieb die Wirtschaftsaktivität in ihrer Erklärung als „stark” (zuvor im September noch als „solide”), bei weiterhin erhöhter Inflation." }
        ]},
        { h: "Was sagte Fed-Chef Kevin Warsh auf der Pressekonferenz?", items: [
          { tag: "position", text: "Warsh wies auf Nachfragen zurück, die Entscheidung sei politisch motiviert: „Politics played no role in the decision. I just spent two days with my colleagues upstairs. I didn't hear an utterance about politics.” Er bezeichnete die Sitzung als „a heck of a family fight” und sagte, er sei „honored”, die Fed zu leiten.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "fakt", text: "Warsh kündigte zudem an, die Fed werde ab 2027 künftig acht geldpolitische Sitzungen pro Jahr als „richtige Zahl” abhalten, von denen eine ausschließlich der breiten geldpolitischen Strategie gewidmet sein solle. Laut Berichten sagte er zudem, man werde den jüngsten Anstieg der Ölpreise „genau bewerten”." }
        ]},
        { h: "Wie reagierten Märkte und Marktbeobachter auf die Entscheidung?", items: [
          { tag: "fakt", text: "Aktienindizes schlossen am Mittwoch leicht im Plus (Meldung 1), während die US-10-Jahres-Rendite im Anschluss an die Entscheidung auf rund 5,03 bis 5,04 % stieg (von zuvor rund 4,99 %).",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "e:yield-meaning" }] },
          { tag: "unbestaetigt", text: "Laut CME FedWatch stieg die eingepreiste Wahrscheinlichkeit für eine weitere Zinserhöhung bei der Dezember-Sitzung nach der Pressekonferenz auf rund 83 bis 85 % (von zuvor rund 78 %) – ein ungewöhnliches Muster, da die Fed zugleich den aktuellen Leitzins unverändert ließ." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Fed trotz eines ungewöhnlich knappen Abstimmungsergebnisses und zunehmender interner Differenzen an der aktuellen Zinsspanne festhält, während Marktbeobachter für Dezember bereits mit hoher Wahrscheinlichkeit eine weitere Erhöhung einpreisen, zeigt, dass sich die Fed weiterhin in einem Straffungskurs bewegt, auch wenn innerhalb des Gremiums keine Einigkeit über das Tempo besteht." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1, die EZB-Seite in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "CNBC: Fed interest rate decision October 2026 – Fed holds rates steady", url: "https://www.cnbc.com/2026/10/28/fed-interest-rate-decision-october-2026.html" },
        { title: "CNN: Fed keeps interest rates unchanged, but two officials dissented in favor of a rate hike", url: "https://www.cnn.com/2026/10/28/business/live-news/federal-reserve-interest-rate-october" },
        { title: "US News: Warsh Says Politics Played No Role in Fed's Rate Decision by Group He Is 'Honored' to Lead", url: "https://www.usnews.com/news/politics/articles/2026-10-28/warsh-says-politics-played-no-role-in-feds-rate-decision-by-group-he-is-honored-to-lead" },
        { title: "CNBC: Fed meeting recap – Warsh says central bank will host fewer rate-setting meetings in future years", url: "https://www.cnbc.com/2026/10/28/fed-meeting-today-live-updates.html" },
        { title: "Fortune: Fed holds rates steady days before the midterms, even as inflation runs hot", url: "https://fortune.com/2026/10/28/fed-rates-steady-midterms-october-3-75-to-4-percent-cook-hammack-dissent/" },
        { title: "CNBC: 10-year Treasury yield creeps higher even as Fed keeps rates the same", url: "https://www.cnbc.com/2026/10/28/us-treasurys-bonds-yields-federal-reserve.html" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD */
    {
      id: "gold-bitcoin-eurusd-nach-fed-10-29", cats: ["markets"], when: "Stand Mi 28.10. bis Do 29.10.2026 früh",
      headline: "Gold gibt nach der Fed-Entscheidung leicht nach, Bitcoin bewegt sich seitwärts, der Euro bleibt vor der heutigen EZB-Sitzung nahe 1,11 Dollar",
      sec30: "Gold notierte am Donnerstagmorgen je nach Quelle zwischen rund 4.031 und 4.044 Dollar je Feinunze (-0,5 bis -0,6 % gegenüber dem Vortag) – rund 9,2 % unter dem Stand vor einem Monat. Bitcoin bewegte sich in den frühen Morgenstunden zwischen rund 79.656 und 80.279 Dollar, ohne klaren Trend. Der EZB-Referenzkurs für den Euro lag am Mittwoch bei 1,1133 Dollar; für Donnerstagmorgen nennen Quellen uneinheitliche Werte zwischen rund 1,1129 und 1,116 Dollar. Als Hintergrund für die leichte Goldschwäche nennen Berichte die nach der Fed-Entscheidung gestiegenen US-Anleiherenditen.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "unbestaetigt", text: "Gold notierte am Donnerstagmorgen je nach Quelle zwischen rund 4.031 Dollar (Goldreporter) und 4.044 Dollar (Goldesel.de) je Feinunze (-0,5 bis -0,6 % gegenüber dem Vortag); laut Goldreporter liegt der Preis damit rund 9,2 % unter dem Stand vor einem Monat.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die nach der Fed-Entscheidung gestiegenen US-Anleiherenditen, die Gold als zinslose Anlage relativ weniger attraktiv machen." }
        ]},
        { h: "Wie hat sich Bitcoin entwickelt?", items: [
          { tag: "unbestaetigt", text: "Bitcoin bewegte sich in den frühen Donnerstagmorgenstunden (Eastern Time) zwischen rund 79.656 und 80.279 Dollar, je nach Quelle und Messzeitpunkt – ohne klaren Trend.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Mittwoch bei 1,1133 Dollar; für Donnerstagmorgen nennen verschiedene Quellen uneinheitliche Werte zwischen rund 1,1129 und 1,116 Dollar – eine offizielle EZB-Notierung für Donnerstag lag zum Redaktionsschluss noch nicht vor.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,11?", ref: "e:eurusd-meaning" }] },
          { tag: "einordnung", text: "Für die Kursbewegung wird in den verfügbaren Quellen kein eindeutiger Einzelgrund genannt; Berichte verweisen auf die bereits verarbeitete Fed-Entscheidung vom Vorabend und die Erwartung der heutigen EZB-Sitzung.",
            ask: [{ label: "Mehr zur heutigen EZB-Sitzung", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold nach der Fed-Entscheidung leicht nachgibt, während sich Bitcoin seitwärts bewegt und der Euro nahe seinem Vortageswert verharrt, passt zu einer Phase, in der die Fed-Entscheidung bereits verarbeitet ist und sich die Aufmerksamkeit der Märkte auf die heutige EZB-Sitzung und die Quartalszahlen von Microsoft und Alphabet richtet. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Fed-Entscheidung wird in Meldung 2 behandelt, die EZB-Seite in Meldung 4, der Ölpreis in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Goldreporter: Goldpreis heute – 4.000-Dollar-Marke weiter im Fokus", url: "https://www.goldreporter.de/goldpreis-29-10-2026/marktbericht-gold/262669/" },
        { title: "goldesel.de: Gold Aktie – Goldpreis hält sich über 4.000 Dollar, fällt am 29. Oktober um 0,6 Prozent", url: "https://goldesel.de/aktien/news/gold-aktie-goldpreis-halt-sich-uber-4000-dollar-fallt-am-29-oktober-um-06-prozent" },
        { title: "CoinDesk: Bitcoin price today", url: "https://www.coindesk.com/price/bitcoin" },
        { title: "EZB: Euro foreign exchange reference rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" },
        { title: "Trading Economics: Euro US Dollar Exchange Rate", url: "https://tradingeconomics.com/euro-area/currency" }
      ]
    },
    /* 4 WIRTSCHAFT: EZB/FRANKREICH/SCHNABEL */
    {
      id: "ezb-entscheidung-frankreich-schnabel-10-29", cats: ["economy", "world"], when: "EZB-Sitzung heute 29.10., 14:15 MEZ · Schnabel-Nachfolgefrist bis 27.11. · Reuters-Umfrage Anfang Oktober",
      headline: "Die EZB entscheidet heute über ihren Leitzins, eine Reuters-Umfrage sieht eine erneute Pause bei 2,50 % als wahrscheinlich, die Nominierungsfrist für die Schnabel-Nachfolge wurde bis zum 27. November verlängert",
      sec30: "Die EZB entscheidet heute, 29.10., um 14:15 MEZ über ihren Leitzins (Pressekonferenz 14:45 MEZ); der Einlagensatz liegt seit der Erhöhung im September bei 2,50 %. Laut einer Reuters-Umfrage erwarteten 70 von 73 befragten Ökonomen eine erneute Pause, für Dezember rechnet die Mehrheit dagegen mit einer weiteren Erhöhung um 25 Basispunkte. Die Nominierungsfrist für die Schnabel-Nachfolge im EZB-Direktorium wurde vom 28.10. auf den 27.11.2026 verlängert; als mögliche Kandidaten für EZB-Spitzenpositionen gelten laut Berichten Pablo Hernández de Cos und Klaas Knot, Bundesfinanzminister Klingbeil will laut Handelsblatt „bald” einen deutschen Personalvorschlag machen. In Frankreich lag der Risikoaufschlag zehnjähriger Staatsanleihen zu Bundesanleihen (OAT/Bund-Spread) am Mittwoch bei rund 156,6 Basispunkten, nach einem Mehrjahreshoch von rund 178 Basispunkten am 22.10. Die Inflation in der Eurozone lag im September bei 3,8 %, in Deutschland bei 3,3 %.",
      blocks: [
        { h: "Wie ist der Stand vor der heutigen EZB-Zinsentscheidung?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %, den Hauptrefinanzierungssatz bei 2,65 %. Die Zinsentscheidung wird heute, 29.10., um 14:15 MEZ bekanntgegeben, die Pressekonferenz von Präsidentin Lagarde folgt um 14:45 MEZ.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Laut einer Reuters-Umfrage erwarteten 70 von 73 befragten Ökonomen für heute eine erneute Pause; für die Dezember-Sitzung rechnet die Mehrheit der befragten Ökonomen dagegen mit einer weiteren Erhöhung um 25 Basispunkte auf dann 2,75 % Einlagensatz." },
          { tag: "position", text: "Bundesbankpräsident Joachim Nagel sagte Mitte Oktober, die EZB müsse auf die Inflation „flexibel und mit ruhiger Hand” reagieren, und schloss einen weiteren Zinsschritt in „mild restriktives” Terrain nicht aus; er sehe bislang keine klaren Zweitrundeneffekte auf Preis- und Lohnsetzung." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die ursprüngliche Nominierungsfrist für den Schnabel-Sitz im EZB-Direktorium (28.10.) wurde auf den 27.11.2026 verlängert; Isabel Schnabel wechselt zum 3.1.2027 zum IWF." },
          { tag: "unbestaetigt", text: "Als mögliche Kandidaten für EZB-Spitzenpositionen gelten laut Berichten Pablo Hernández de Cos (Generaldirektor der Bank für Internationalen Zahlungsausgleich) und der ehemalige niederländische Notenbankchef Klaas Knot; ein konkreter deutscher Kandidat für den Schnabel-Sitz wird in den verfügbaren Quellen nicht benannt, Bundesfinanzminister Klingbeil will laut Handelsblatt „bald” einen eigenen Personalvorschlag machen." }
        ]},
        { h: "Wie ist der Stand bei Frankreich?", items: [
          { tag: "fakt", text: "Der Risikoaufschlag zehnjähriger französischer Staatsanleihen (OAT) zu Bundesanleihen lag am Mittwoch bei rund 156,6 Basispunkten (OAT-Rendite 4,94 %, Bund-Rendite 3,37 %) – nach einem Mehrjahreshoch von rund 178 Basispunkten am 22.10. weiterhin deutlich niedriger, aber oberhalb des Niveaus von Mitte des Jahres.",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "e:yield-meaning" }] },
          { tag: "fakt", text: "Frankreichs Staatsverschuldung lag im zweiten Quartal 2026 bei rund 119,0 % des BIP; Premierminister Lecornu hatte am 1.10. einen Sparhaushalt über 54 Mrd. Euro vorgelegt, mit dem Ziel, das Defizit 2027 auf 5,0 % des BIP zu senken, ohne dass die Regierung über eine stabile Mehrheit in der Nationalversammlung verfügt." }
        ]},
        { h: "Wie entwickelt sich die Inflation?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone lag im September bei 3,8 % (höchster Stand seit 2023, laut Eurostat vor allem getrieben durch Energiepreise, +18,8 % zum Vorjahr); in Deutschland lag sie bei 3,3 %, die Kernrate ohne Energie und Nahrungsmittel bei 2,4 %. Die Oktober-Schnellschätzung für die Eurozone lag zum Redaktionsschluss noch nicht vor.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EZB heute vermutlich pausiert, während für Dezember von der Mehrheit der befragten Ökonomen eine weitere Erhöhung erwartet wird, und sich gleichzeitig die französische Risikoprämie nur teilweise von ihrem Mehrjahreshoch erholt hat, zeigt, dass sich die EZB in einer ähnlichen Lage wie die Fed befindet – zwischen anhaltend erhöhter Inflation und der Frage, wie viel zusätzliche geldpolitische Straffung die Wirtschaft verträgt." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 5.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "netz-trends.de: EZB-Entscheid 29. Oktober – Zinsen und Inflation im Überblick", url: "https://www.netz-trends.de/ezb-entscheid-29-oktober-einlagesatz-2-50-prozent-inflation-3-3-prozent-festgeld-bauzinsen/" },
        { title: "fxstreet: Europäische Zentralbank dürfte die Zinssätze trotz hohen Inflationsdrucks unverändert lassen", url: "https://www.fxstreet.de.com/news/europaische-zentralbank-durfte-die-zinssatze-trotz-hoher-inflationsdrucks-unverandert-lassen-202610290800" },
        { title: "cash.ch: EZB-Nominierungsfrist für Schnabel-Nachfolge steht – Lagardes Pläne weiter offen", url: "https://www.cash.ch/news/top-news/ezb-nominierungsfrist-fur-schnabel-nachfolge-steht-lagardes-plane-weiter-offen-975350" },
        { title: "Handelsblatt: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.handelsblatt.com/politik/deutschland/europaeische-zentralbank-rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag/100262803.html" },
        { title: "ideal-investisseur.fr: OAT / Bund spread today – 156.6 bps as of Oct 28, 2026", url: "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html" },
        { title: "Eurostat: Annual inflation up to 3.8% in the euro area", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-02102026-ap" },
        { title: "Destatis: Inflationsrate im September 2026 bei +3,3 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_364_611.html" }
      ]
    },
    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-steuerschaetzung-10-29", cats: ["germany", "economy"], when: "171. Steuerschätzung 22.10. · Bereinigungssitzung 12.11. · Schlussabstimmung 27.11.2026",
      headline: "Die 171. Steuerschätzung bringt dem Bund laut Finanzminister Klingbeil keine neue Entlastung, aber auch keine neuen Lücken, der Zeitplan für die Haushaltsberatungen 2027 bleibt unverändert",
      sec30: "Finanzminister Lars Klingbeil (SPD) stellte am 22.10. die 171. Steuerschätzung vor: Für 2027 rechnet der Bund mit 4,1 Mrd. Euro Mehreinnahmen, für 2026 dagegen mit 3 Mrd. Euro weniger als zuvor erwartet. Erstmals sollen die gesamtstaatlichen Steuereinnahmen 2027 die Marke von 1 Billion Euro übersteigen (1.044,2 Mrd. Euro inklusive EU-Anteil). Klingbeil sagte dazu wörtlich, man gewinne „insgesamt keine neuen Spielräume hinzu”, müsse aber „auch keine neuen Lücken schließen”. Der Zeitplan für die Haushaltsberatungen 2027 bleibt unverändert: Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11.2026 angesetzt, die Schlussabstimmung im Bundestagsplenum für den 27.11.2026.",
      blocks: [
        { h: "Was ergab die 171. Steuerschätzung vom 22.10.?", items: [
          { tag: "fakt", text: "Finanzminister Klingbeil stellte am 22.10. die 171. Steuerschätzung vor: Für 2027 rechnet der Bund mit Mehreinnahmen von 4,1 Mrd. Euro gegenüber der vorherigen Schätzung, für das laufende Jahr 2026 dagegen mit 3 Mrd. Euro weniger als zuvor erwartet. Erstmals sollen die gesamtstaatlichen Steuereinnahmen 2027 die Marke von 1 Billion Euro übersteigen (1.044,2 Mrd. Euro inklusive EU-Anteil).",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] },
          { tag: "position", text: "Klingbeil sagte wörtlich: „Für 2027 gewinnen wir insgesamt keine neuen Spielräume hinzu, wir müssen aber auch keine neuen Lücken schließen.” Für zusätzliche Entlastungen oder Steuersenkungen sieht er demnach weiterhin keinen Spielraum." }
        ]},
        { h: "Wie ist der aktuelle Stand des Zeitplans?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses ist weiterhin für den 12.11.2026 angesetzt, die Schlussabstimmung im Bundestagsplenum für den 27.11.2026. Eine öffentliche Anhörung zum Haushaltsbegleitgesetz 2027 hatte bereits am 12.10. im Haushaltsausschuss stattgefunden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Steuerschätzung weder zusätzlichen Spielraum noch neue Deckungslücken für den Bund ergibt, während der Zeitplan für Bereinigungssitzung und Schlussabstimmung unverändert bleibt, deutet darauf hin, dass die eigentlichen politischen Streitpunkte des Haushalts 2027 unabhängig von der Steuerschätzung erst in den Beratungen Mitte und Ende November entschieden werden." }
        ]}
      ],
      reaction: "Die Innenpolitik rund um Rente und Kabinett wird in Meldung 6 behandelt, die EZB-Seite in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Bundesfinanzministerium: Ergebnisse der 171. Steuerschätzung", url: "https://www.bundesfinanzministerium.de/Content/DE/Video/2026/2026-10-22-171-steuerschaetzung/2026-10-22-pressekonferenz.html" },
        { title: "onvista/dpa: ROUNDUP – Steuereinnahmen ziehen an, Klingbeil: keine Etat-Entlastung", url: "https://www.onvista.de/news/2026/10-22-roundup-steuereinnahmen-ziehen-an-klingbeil-keine-etat-entlastung-0-10-26567323" },
        { title: "ZDFheute: Steuerschätzung – Mehr Einnahmen für Bund, Länder, Kommunen", url: "https://www.zdfheute.de/politik/steuer-steuern-steuerschaetzung-bund-kommunnen-einnahmen-100.html" },
        { title: "Deutscher Bundestag: Anhörung zum Haushaltsbegleitgesetz 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw42-pa-haushalt-1194772" },
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" }
      ]
    },
    /* 6 DEUTSCHLAND: RENTE/UMFRAGEN/MERZ-ASIENREISE/BUNDESPRÄSIDENT */
    {
      id: "rente-umfragen-merz-asienreise-bundespraesident-10-29", cats: ["germany"], when: "Schweitzer-Vereidigung 14.10. · Merz-Asienreise 26.–30.10. · Umfragen 20.–27.10.2026",
      headline: "Bei der Rente mit 63 sucht der neue Arbeitsminister Schweitzer weiterhin einen Kompromiss mit Kanzler Merz, Umfragen sehen die AfD unverändert vor der Union, Merz reist weiter durch Asien",
      sec30: "Nach dem Rücktritt von Bärbel Bas als Arbeitsministerin und SPD-Chefin am 12.10. wurde Alexander Schweitzer (SPD) am 14.10. als neuer Bundesarbeitsminister vereidigt. Die Alterssicherungskommission hatte zuvor vorgeschlagen, die abschlagsfreie Rente nach 45 Beitragsjahren („Rente mit 63”) zugunsten einer Schutzrente für langjährig Versicherte mit gesundheitlichen Einschränkungen umzubauen; Kanzler Merz und CSU-Chef Söder wollen die Reformvorschläge der Kommission vollständig umsetzen, während Schweitzer die Rente mit 63 „im Kern erhalten” will und einen Kompromiss sucht. Ein gemeinsamer Gesetzentwurf soll laut Zeitplan bis Jahresende 2026 kabinettsreif sein, eine Bundestagsabstimmung ist für das erste Quartal 2027 geplant. Umfragen von INSA und Forsa (20.–27.10.) sehen die AfD weiterhin als stärkste Kraft vor der Union. Kanzler Merz bereist seit dem 26.10. Singapur, Japan und Südkorea; bei der Nachfolge von Bundespräsident Steinmeier hält Merz mehrere CDU-Optionen offen, die CSU positioniert sich für die bayerische Landtagspräsidentin Ilse Aigner.",
      blocks: [
        { h: "Wie ist der Stand bei der Rente mit 63?", items: [
          { tag: "fakt", text: "Nach dem Rücktritt von Bärbel Bas als Arbeitsministerin und SPD-Chefin am 12.10. wurde Alexander Schweitzer (SPD), vormals Ministerpräsident von Rheinland-Pfalz, am 14.10. als neuer Bundesarbeitsminister vereidigt.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Die von der Bundesregierung eingesetzte Alterssicherungskommission hatte vorgeschlagen, die abschlagsfreie Rente nach 45 Beitragsjahren zugunsten einer Schutzrente für langjährig Versicherte mit gesundheitlichen Einschränkungen umzubauen; Kanzler Merz sagte, er wolle die Reformvorschläge „so umsetzen, wie sie auf dem Tisch liegen”, auch CSU-Chef Söder unterstützt die vollständige Umsetzung des im Juli vereinbarten Reformpakets." },
          { tag: "position", text: "Arbeitsminister Schweitzer will die Rente mit 63 dagegen „im Kern erhalten” und sucht nach eigener Aussage einen „guten Kompromiss”; laut einer aktuellen Umfrage lehnen 74 % der Befragten eine Abschaffung ab, nur 21 % befürworten sie." },
          { tag: "unbestaetigt", text: "Ein gemeinsamer Gesetzentwurf soll laut Zeitplan bis Jahresende 2026 kabinettsreif sein, eine Bundestagsabstimmung ist für das erste Quartal 2027 geplant; Stand 28./29.10. liegt noch kein fertiger Entwurf vor, strittig bleiben unter anderem die Anrechnung von Kindererziehungs- und Pflegezeiten." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "INSA (23.–26.10.) sieht die AfD bei 29,5 %, die Union bei 19,0 %, SPD und Grüne bei jeweils 14,0 % und die Linke bei 10,0 %; Forsa (20.–26.10.) sieht die AfD bei 27 %, die Union bei 21 %, die Grünen bei 16 % und die SPD bei 13 %. Beide Institute sehen die AfD als stärkste und die Union als zweitstärkste Kraft, weichen bei Grünen und Union aber deutlich voneinander ab.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie ist der Stand bei Merz' Asienreise und der Bundespräsidenten-Nachfolge?", items: [
          { tag: "fakt", text: "Kanzler Merz bereist seit dem 26.10. Singapur, Japan und Südkorea; am 28.10. wurde er in Tokio von Premierministerin Sanae Takaichi empfangen, am 29./30.10. stehen Gespräche mit Präsident Lee Jae-myung in Seoul auf dem Programm. Laut Bundesregierung soll die Reise die sicherheits- und wirtschaftspolitische Zusammenarbeit vertiefen." },
          { tag: "fakt", text: "Für die Nachfolge von Bundespräsident Steinmeier (Amtsende März 2027, Wahl durch die Bundesversammlung am 30.1.2027) hält Merz laut Berichten mehrere CDU-Optionen offen, darunter Bundestagspräsidentin Julia Klöckner und Bildungsministerin Karin Prien; die CSU positioniert sich laut Berichten für die bayerische Landtagspräsidentin Ilse Aigner." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei der Rente mit 63 weiterhin kein fertiger Gesetzentwurf vorliegt, während Umfragen unverändert keine Mehrheit für die aktuelle Koalition zeigen und der Kanzler zugleich auf Auslandsreise ist, deutet auf anhaltende innenpolitische Unsicherheit hin, auch wenn der Zeitplan für eine Einigung bis Jahresende formal weiterbesteht." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority"],
      sources: [
        { title: "t-online: Nach Bas-Rücktritt – Union und SPD im Streit um Rente mit 63", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101478576/nach-bas-ruecktritt-union-und-spd-im-streit-aerger-um-rente-mit-63-.html" },
        { title: "cash-online: Rente mit 63 – Arbeitsminister Schweitzer sucht Kompromiss im Streit um Reform", url: "https://www.cash-online.de/a/rente-mit-63-arbeitsminister-schweitzer-sucht-kompromiss-im-streit-um-reform-727896/" },
        { title: "cash-online: Rente mit 63 – Merz will bis Weihnachten liefern, 74 Prozent sind dagegen", url: "https://www.cash-online.de/a/rente-mit-63-merz-will-bis-weihnachten-liefern-74-prozent-sind-dagegen-728492/" },
        { title: "ZDFheute: Bärbel Bas tritt zurück", url: "https://www.zdfheute.de/politik/deutschland/baerbel-bas-spd-ruecktritt-100.html" },
        { title: "dawum.de: Wahlumfrage INSA 27.10.2026", url: "https://dawum.de/Bundestag/INSA/2026-10-27/" },
        { title: "bundesregierung.de: Bundeskanzler Merz reist nach Singapur, Japan und in die Republik Korea", url: "https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-merz-reist-nach-singapur-japan-und-in-die-republik-korea-2458120" },
        { title: "ZDFheute: Steinmeier-Nachfolge – Wird erstmals eine Bundespräsidentin?", url: "https://www.zdfheute.de/politik/deutschland/wahl-steinmeier-nachfolge-bundespraesidentin-100.html" }
      ]
    },
    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-dnipro-angriff-abu-dhabi-10-29", cats: ["world", "geo"], when: "Angriff auf Dnipro Nacht 28./29.10. · Uschakow-Aussage 28./29.10. · Selenskyj-Aussage 28.10.2026",
      headline: "Ein russischer Drohnenangriff auf einen Bahnhof in Dnipro tötet mindestens 13 Menschen, Kreml-Berater Uschakow erwartet Gespräche in Abu Dhabi erst nach dem 4. November",
      sec30: "Eine strahlgetriebene russische Drohne traf in der Nacht zum 29.10. den Bahnhof in Dnipro, an dem ein Zug nach Saporischschja bereitstand; nach Angaben des Gouverneurs starben mindestens 13 Menschen, fünf wurden verletzt. Russland meldete zugleich, einen Großteil von 613 auf Moskau gerichteten Drohnen sowie insgesamt 1.214 ukrainische Drohnen abgefangen zu haben, unabhängig bestätigte Zahlen liegen dazu nicht vor. Bei der Diplomatie bleibt ein verbindliches Datum für das geplante Dreiertreffen in Abu Dhabi offen: Präsident Selenskyj erklärte am 28.10., er erwarte Gespräche „so früh wie möglich”, möglicherweise schon vor dem 10. November, mit technischen Vorgesprächen zwischen dem 6. und 10. November. Kreml-Berater Juri Uschakow sagte dagegen, die Gespräche würden erst nach dem 4. November stattfinden, abhängig „auch von der Lage an der Front”; eine europäische Beteiligung schloss er erneut aus. Präsident Trump hatte am 28.10. ein baldiges Treffen zwischen Selenskyj und Putin angekündigt, ohne Format oder Datum zu nennen.",
      blocks: [
        { h: "Welcher Angriff ereignete sich in der Nacht zum 29.10.?", items: [
          { tag: "unbestaetigt", text: "Eine strahlgetriebene russische Drohne traf den Bahnhof in Dnipro, an dem ein Zug nach Saporischschja bereitstand; nach Angaben des Gouverneurs Oleksandr Hantscha starben mindestens 13 Menschen, fünf wurden verletzt. Auch Charkiw wurde erneut angegriffen, eine Bildungseinrichtung wurde beschädigt." },
          { tag: "unbestaetigt", text: "Russland meldete, in derselben Nacht einen Großteil von 613 auf Moskau gerichteten Drohnen sowie insgesamt 1.214 ukrainische Drohnen über russischem Gebiet abgefangen zu haben; unabhängig bestätigte Zahlen liegen in den verfügbaren Quellen nicht vor." }
        ]},
        { h: "Wie ist der Stand bei den geplanten Verhandlungen in Abu Dhabi?", items: [
          { tag: "position", text: "Präsident Selenskyj sagte am 28.10., er erwarte US-ukrainisch-russische Gespräche „so früh wie möglich”, möglicherweise schon vor dem 10. November; technische Vorgespräche zwischen dem 6. und 10. November in Abu Dhabi sollen unter anderem eine Energie- und Seewaffenruhe, einen Gefangenenaustausch und humanitäre Fragen behandeln.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "position", text: "Kreml-Berater Juri Uschakow sagte dagegen am 28./29.10., die Gespräche würden erst nach dem russischen Feiertag am 4.11. stattfinden, abhängig „auch von der Lage an der Front”; ein genaues Datum werde noch bekanntgegeben. Er bekräftigte zudem, Europa werde nicht an den Verhandlungstisch in Abu Dhabi eingeladen." },
          { tag: "position", text: "Präsident Trump kündigte am 28.10. ein baldiges Treffen zwischen Selenskyj und Putin an, ohne Format oder Datum zu nennen; dies wurde von Kyjiw und Moskau nicht offiziell in dieser Form bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Russland und die Ukraine sich weiterhin gegenseitig mit Drohnenangriffen attackieren, während Selenskyj und Uschakow öffentlich unterschiedliche Zeitfenster für mögliche Gespräche in Abu Dhabi nennen, zeigt, dass militärisches Geschehen und diplomatische Ankündigungen weiterhin deutlich auseinanderliegen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, weitere internationale Entwicklungen in Meldung 15.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "Kyiv Independent: Breaking – Russia strikes train at Dnipro station with jet-powered drone, at least 13 dead", url: "https://kyivindependent.com/breaking-russia-strikes-train-at-dnipro-station-with-jet-powered-drone-at-least-13-dead/" },
        { title: "Meduza: Russian drone strikes train station in Ukraine's Dnipro, killing at least 13", url: "https://meduza.io/en/news/2026/10/29/russian-drone-strikes-train-station-in-ukraine-s-dnipro-killing-at-least-13" },
        { title: "Pravda: Zelenskyy expects Ukraine-US-Russia meeting in Abu Dhabi by 10 November", url: "https://www.pravda.com.ua/eng/news/2026/10/28/8060119/" },
        { title: "Meduza: Kremlin says U.S.-Russia-Ukraine peace talks will take place in Abu Dhabi after November 4", url: "https://meduza.io/en/news/2026/10/29/kremlin-says-u-s-russia-ukraine-peace-talks-will-take-place-in-abu-dhabi-after-november-4-depending-on-battlefield-conditions" },
        { title: "EADaily: No one is going to invite Europe to the negotiating table in Abu Dhabi — Ushakov", url: "https://eadaily.com/en/news/2026/10/28/no-one-is-going-to-invite-europe-to-the-negotiating-table-in-abu-dhabi-ushakov" },
        { title: "Berliner Zeitung: Trump kündigt Treffen mit Putin und Selenskyj an", url: "https://www.berliner-zeitung.de/article/trump-putin-selenskyj-treffen-ukraine-verhandlungen-10537682" }
      ]
    },
    /* 8 GEOPOLITIK: GOLF/HORMUZ/IRAN */
    {
      id: "golf-hormuz-ras-tanura-10-29", cats: ["geo", "energy"], when: "Huthi-Angriff auf Ras Tanura 27./28.10. · gemeldeter Drohnenabschuss 29.10. · Vance-Brief 28.10.",
      headline: "Huthi-Rebellen melden einen Raketenangriff auf die saudische Raffinerie Ras Tanura, die Straße von Hormus bleibt laut Branchendaten für den Welthandel weitgehend gesperrt, US-Vizepräsident Vance schickt einen Brief an iranische Sicherheitsvertreter",
      sec30: "Die Straße von Hormus gilt laut Schiffsverkehrsdaten (IMF PortWatch) weiterhin als faktisch gesperrt: Am 25.10. wurden dort nur 2 Transits gezählt, gegenüber normalerweise rund 85 pro Tag. Der Huthi-Sprecher Yahya Saree erklärte am 27./28.10., man habe mit einer ballistischen Rakete die saudische Raffinerie Ras Tanura getroffen und Brände ausgelöst, zudem seien der Flughafen Najran, eine Luftwaffenbasis sowie das saudische Verteidigungsministerium in Riad angegriffen worden; eine saudische Bestätigung lag zum Zeitpunkt der Meldungen nicht vor. Iran meldete am 29.10. den Abschuss einer US-Drohne östlich der Meerenge. Kriegsrisiko-Versicherungen für Tankerfahrten durch Hormus liegen laut Branchenangaben weiterhin bei 6 bis 10 % des Schiffswerts. Bei der Diplomatie schickte US-Vizepräsident Vance laut Berichten am 28.10. einen Brief an einen iranischen Sicherheitsvertreter, wonach Verhandlungen auch das iranische Atomprogramm einschließen müssten.",
      blocks: [
        { h: "Wie ist die Lage in der Straße von Hormus?", items: [
          { tag: "unbestaetigt", text: "Laut Schiffsverkehrsdaten (IMF PortWatch) wurden am 25.10. nur 2 Transits durch die Straße von Hormus gezählt, gegenüber normalerweise rund 85 pro Tag; Kriegsrisiko-Versicherungen für Tankerfahrten liegen laut Branchenangaben weiterhin bei 6 bis 10 % des Schiffswerts, gegenüber rund 0,25 % vor der Krise.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Iran meldete am 29.10. den Abschuss einer US-Drohne östlich der Meerenge; die britische Marinebehörde UKMTO berichtete zudem von einem brennenden Schiff vor der omanischen Küste. Unabhängig bestätigte Angaben dazu liegen nicht vor." }
        ]},
        { h: "Welcher Angriff auf saudisches Gebiet wurde gemeldet?", items: [
          { tag: "position", text: "Der Huthi-Sprecher Yahya Saree erklärte am 27./28.10., man habe mit einer ballistischen Rakete die saudische Raffinerie Ras Tanura getroffen und Brände ausgelöst; zudem seien der Flughafen Najran, eine Luftwaffenbasis bei Khamis Mushait, das saudische Verteidigungsministerium in Riad sowie der Flughafen Abha angegriffen worden. Eine saudische Bestätigung dieser Angaben lag zum Zeitpunkt der Meldungen nicht vor.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] }
        ]},
        { h: "Welche diplomatischen Bemühungen gibt es?", items: [
          { tag: "unbestaetigt", text: "US-Vizepräsident Vance schickte laut Berichten am 28.10. einen Brief an einen iranischen Sicherheitsvertreter, wonach mögliche Verhandlungen eine „bedeutsame” Reduktion der iranischen Urananreicherung einschließen müssten. Iran knüpft Gespräche laut Berichten weiterhin an Vorbedingungen wie ein Ende der US-Seeblockade und die Freigabe eingefrorener Gelder." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Straße von Hormus laut Schiffsverkehrsdaten weiterhin faktisch gesperrt bleibt und Huthi-Rebellen parallel einen Angriff auf eine wichtige saudische Raffinerie melden, während gleichzeitig über einen Brief der US-Regierung an iranische Sicherheitsvertreter berichtet wird, zeigt, wie eng militärische Eskalation und diplomatische Kontaktversuche am Golf derzeit nebeneinander verlaufen, ohne dass sich eine Seite durchsetzt." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis im Detail in Meldung 14.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "straits.live: Strait of Hormuz News, October 29, 2026 – Straits Daily Brief", url: "https://straits.live/briefs/2026-10-29" },
        { title: "Semafor: Yemen's Houthis attack Saudi Arabia's largest oil refinery", url: "https://www.semafor.com/article/10/28/2026/yemens-houthis-attack-saudi-arabias-largest-oil-refinery" },
        { title: "US News: Yemen's Houthis Say They Hit Saudi Ras Tanura Oil Refinery With Missile", url: "https://www.usnews.com/news/world/articles/2026-10-27/yemens-houthis-say-they-launched-an-attack-on-saudi-ras-tanura-oil-refinery" },
        { title: "Axios: Vance tells top Iranian official negotiations must address nuclear program", url: "https://axios.com/2026/10/28/vance-iran-nuclear-talks-letter" },
        { title: "BOE Report: Reading Gulf anxiety in the oil price", url: "https://boereport.com/2026/10/28/reading-gulf-anxiety-in-the-oil-price/" }
      ]
    },
    /* 9 DEFENCE: RHEINMETALL/ARMINIUS */
    {
      id: "rheinmetall-arminius-dezember-10-29", cats: ["defence"], when: "Kurs Do 29.10. vormittags · Arminius-Vertrag für Dezember 2026 erwartet · Q3-Zahlen 5.11.2026",
      headline: "Die Rheinmetall-Aktie erholt sich am Donnerstag, der milliardenschwere Arminius-Vertrag für Boxer-Radpanzer soll im Dezember unterschrieben werden, Analysten bleiben vor den Q3-Zahlen gespalten",
      sec30: "Die Rheinmetall-Aktie legte am Donnerstagvormittag an der Xetra um rund 2,4 bis 3,2 % auf etwa 1.036,40 Euro zu, nachdem sie zuvor um die Marke von 1.000 Euro gekämpft hatte. Die Deutsche Bank senkte am 27.10. ihr Kursziel von 1.800 auf 1.650 Euro, bestätigte aber die Kaufempfehlung; Berenberg hatte bereits am 9.10. von Kaufen auf Halten zurückgestuft und das Kursziel von 1.600 auf 1.020 Euro gesenkt. Der Analystenkonsens (25 Häuser) sieht ein mittleres Kursziel von rund 1.565 Euro, vor den Q3-Zahlen am 5.11. (erwarteter Gewinn je Aktie: 7,00 Euro, Vorjahr 3,34 Euro). Beim Arminius-Programm (rund 1.800 Boxer-Radpanzer) soll der Festauftrag über rund 25 Mrd. Euro laut Berichten im Dezember 2026 unterschrieben werden, Rheinmetalls Anteil über die Beteiligungsgesellschaft ARTEC (50:50 mit KNDS Deutschland) wird auf rund 12,4 Mrd. Euro geschätzt; die Bundestags-Befassung bleibt für den 9.12. angesetzt. Beim ukrainischen Marschflugkörper „Flamingo” führt laut Berichten weiterhin Diehl, nicht Rheinmetall, die Gespräche mit dem Hersteller Fire Point.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt, und wie reagieren Analysten vor den Q3-Zahlen?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie legte am Donnerstagvormittag an der Xetra um rund 2,4 bis 3,2 % auf etwa 1.036,40 Euro zu, nachdem sie zuvor nahe der Marke von 1.000 Euro gehandelt hatte.",
            ask: [{ label: "Mehr zum DAX-Verlauf", ref: "n:dax" }] },
          { tag: "position", text: "Die Deutsche Bank senkte ihr Kursziel am 27.10. von 1.800 auf 1.650 Euro, bestätigte aber die Kaufempfehlung; Berenberg hatte die Aktie bereits am 9.10. von Kaufen auf Halten zurückgestuft und das Kursziel von 1.600 auf 1.020 Euro gesenkt, Bernstein bestätigte dagegen „Outperform” mit einem Kursziel von 1.200 Euro. Der Konsens von 25 Analysten liegt bei einem mittleren Kursziel von rund 1.565 Euro (Spanne 1.000 bis 2.180 Euro). Für die Q3-Zahlen am 5.11. erwarten Analysten einen Gewinn je Aktie von rund 7,00 Euro (Vorjahr 3,34 Euro) bei einem Umsatz von rund 3,23 Mrd. Euro." }
        ]},
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Der Festauftrag über rund 25 Mrd. Euro für rund 1.800 Boxer-Radpanzer soll laut Berichten im Dezember 2026 unterschrieben werden, nach der parlamentarischen Befassung am 9.12.; Rheinmetalls Anteil über die Beteiligungsgesellschaft ARTEC (50:50 mit KNDS Deutschland) wird auf rund 12,4 Mrd. Euro geschätzt, bei einem möglichen Rahmenvolumen von über 75 Mrd. Euro. Ein zweiter Servicevertrag über rund 4 Mrd. Euro ist laut Berichten für Januar 2027 geplant.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Separat erhöhen Deutschland und die Niederlande ihre Bestellung des Schakal-Radpanzers um 69 Fahrzeuge (davon 35 für Deutschland); die Lieferung ist für 2032/33 geplant." }
        ]},
        { h: "Wie ist der Stand bei Flamingo und Covenant/Anthem?", items: [
          { tag: "unbestaetigt", text: "Beim ukrainischen Marschflugkörper „Flamingo” (Hersteller Fire Point, Reichweite rund 3.000 Kilometer) führt laut Berichten weiterhin Diehl, nicht Rheinmetall, die Gespräche über eine Kooperation; Rheinmetall-Chef Papperger sucht laut Berichten separat eine eigene Kooperation mit Fire Point. Eine Festvereinbarung liegt in beiden Fällen nicht vor." },
          { tag: "fakt", text: "Das US-Startup Covenant hat sein europäisches Werk in Leipzig für den Marschflugkörper „Anthem” bereits eröffnet; Dänemark bestellte am 22.10. entsprechende Systeme. Eine Beteiligung Rheinmetalls an diesem Geschäft ist in den verfügbaren Quellen nicht erkennbar." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Rheinmetall-Aktie am Donnerstag erholt, während Analysten vor den Q3-Zahlen am 5.11. weiterhin gespalten bleiben und beim Arminius-Programm zwar ein Vertragsabschluss im Dezember erwartet wird, aber noch kein finaler Vertrag vorliegt, zeigt, wie viele einzelne, noch offene Faktoren gleichzeitig über die Bewertung des Unternehmens entscheiden. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Weitere internationale Rüstungsaufträge und Hensoldt/RENK werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "finanzen.ch: Rheinmetall Aktie News – Rheinmetall steigt am Vormittag", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-29-10-2026-1035064641" },
        { title: "investor-verlag.de: Rheinmetall Aktie – Kampf um die 1.000-Euro-Marke vor Q3", url: "https://www.investor-verlag.de/aktien-und-aktienhandel/deutschland/rheinmetall-aktie/rheinmetall-aktie-kampf-um-die-1-000-euro-marke-vor-q3/" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie – Deutsche Bank senkt Ziel auf 1.650,00 Euro", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/rheinmetall-aktie-deutsche-bank-senkt-ziel-auf-1-650-00-euro-gibt-vorboerslich-nach/70424489" },
        { title: "hartpunkt.de: Arminius ante portas – Großvertrag für Boxer-Radpanzer soll im Dezember geschlossen werden", url: "https://www.hartpunkt.de/arminius-ante-portas-grossvertrag-fuer-boxer-radpanzer-soll-im-dezember-geschlossen-werden/" },
        { title: "t-online.de: Ukraine-Marschflugkörper Flamingo – Diehl will Kiews Wunderwaffe bauen", url: "https://www.t-online.de/nachrichten/ukraine/id_101297318/ukraine-marschflugkoerper-flamingo-diehl-will-kiews-wunderwaffe-bauen.html" }
      ]
    },
    /* 10 DEFENCE: US-RÜSTUNGSKONZERNE/HENSOLDT/RENK */
    {
      id: "us-ruestungskonzerne-hensoldt-renk-10-29", cats: ["defence"], when: "Q3-Zahlen RTX/Northrop Okt. · Kurse Hensoldt/RENK Do 29.10. vormittags · RENK-Miba-Deal 22.10.2026",
      headline: "Northrop Grumman und RTX melden Rekord-Auftragsbestände, Hensoldt setzt seinen Kurslauf fort, bei RENK bleiben die Analystenmeinungen nach dem Verkauf des Gleitlagergeschäfts gespalten",
      sec30: "RTX meldete für das dritte Quartal einen Umsatz von 25,0 Mrd. Dollar (+11 % zum Vorjahr) und ein bereinigtes Ergebnis je Aktie von 2,26 Dollar (+33 %), die Jahresprognose wurde auf 97,0 bis 97,5 Mrd. Dollar Umsatz angehoben; die US-Armee vergab am 19.10. zudem einen 215-Mio.-Dollar-Folgeauftrag für Javelin-Lenksysteme. Northrop Grumman meldete einen Auftragseingang von 16,4 Mrd. Dollar und einen Rekord-Orderbestand von rund 109,6 bis 110 Mrd. Dollar; die Deutsche Bank hob ihr Kursziel auf 634 Dollar an. General Dynamics (Orderbestand 136,5 Mrd. Dollar) berichtet eigene Zahlen am 30.10. Bei den europäischen Zulieferern notierte Hensoldt am Donnerstagvormittag bei rund 85,66 bis 88,32 Euro, die Deutsche Bank bestätigte ihr Kursziel von 105 Euro; RENK notierte dagegen schwächer bei rund 36,05 bis 36,55 Euro, nachdem JPMorgan sein Kursziel am 22.10. von 62 auf 50 Euro gesenkt hatte – am selben Tag hatte RENK einen bindenden Vertrag zum Verkauf seines Gleitlager-Geschäfts an Miba geschlossen.",
      blocks: [
        { h: "Wie entwickelten sich die US-Rüstungskonzerne nach ihren Quartalszahlen?", items: [
          { tag: "fakt", text: "RTX meldete für das dritte Quartal einen Umsatz von 25,0 Mrd. Dollar (+11 % zum Vorjahr) und ein bereinigtes Ergebnis je Aktie von 2,26 Dollar (+33 %); die Jahresprognose wurde auf 97,0 bis 97,5 Mrd. Dollar Umsatz angehoben. Die US-Armee vergab am 19.10. einen 215-Mio.-Dollar-Folgeauftrag für Javelin-Lenksysteme.",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:9" }] },
          { tag: "fakt", text: "Northrop Grumman meldete einen Auftragseingang von 16,4 Mrd. Dollar und einen Rekord-Orderbestand von rund 109,6 bis 110 Mrd. Dollar (+20 Mrd. Dollar); die Deutsche Bank hob ihr Kursziel daraufhin auf 634 Dollar an. General Dynamics (Orderbestand 136,5 Mrd. Dollar) meldete zudem einen 184-Mio.-Dollar-Marineauftrag für elektronische Kampfsysteme und berichtet eigene Quartalszahlen am 30.10." }
        ]},
        { h: "Wie entwickelten sich Hensoldt und RENK?", items: [
          { tag: "unbestaetigt", text: "Die Hensoldt-Aktie notierte am Donnerstagvormittag bei rund 85,66 bis 88,32 Euro (+0,2 bis +2,6 %); die Deutsche Bank bestätigte am 16.10. ihr Kursziel von 105 Euro, Jefferies sieht 98 Euro, Goldman Sachs 85 Euro, mwb research mit 62 Euro am unteren Ende. Der Konsens von 14 Analysten liegt bei rund 90,31 Euro (5 Kaufen, 7 Halten, 2 Verkaufen).",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Nachrichten?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "RENK notierte am Donnerstagvormittag schwächer bei rund 36,05 bis 36,55 Euro (-1,7 %); JPMorgan hatte sein Kursziel am 22.10. von 62 auf 50 Euro gesenkt (Übergewichten bestätigt), die DZ Bank senkte den fairen Wert am 23.10. auf 56 Euro. Hintergrund ist unter anderem, dass RENK am 22.10. einen bindenden Vertrag zum Verkauf seines Gleitlager-Geschäfts an den österreichischen Zulieferer Miba geschlossen hat, was die Bewertung einzelner Analysten beeinflusst." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass US-Rüstungskonzerne wie RTX und Northrop Grumman weiterhin Rekord-Auftragsbestände melden, während sich bei den europäischen Zulieferern Hensoldt und RENK nach einem Geschäftsverkauf die Analystenmeinungen unterschiedlich entwickeln, zeigt, dass der allgemeine Rüstungsboom nicht automatisch jedes einzelne Unternehmen in der Lieferkette gleich begünstigt." }
        ]}
      ],
      reaction: "Rheinmetall und die deutsche Rüstungsindustrie werden in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "boerse-global.de: RTX Aktie – Javelin-Nachschub?", url: "https://www.boerse-global.de/rtx-aktie-javelin-nachschub/836453" },
        { title: "ad-hoc-news.de: Northrop Grumman-Aktie – Deutsche Bank hebt Ziel auf 634,00 USD an", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/northrop-grumman-aktie-deutsche-bank-hebt-ziel-auf-634-00-usd-an/70415432" },
        { title: "ad-hoc-news.de: General Dynamics-Aktie – Berichtstermin am 30.10.2026", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/general-dynamics-aktie-berichtstermin-am-30-10-2026-betrifft-general-dynamics-aktie/70421900" },
        { title: "finanzen.ch: HENSOLDT Aktie News – HENSOLDT tendiert am Donnerstagvormittag nordwärts", url: "https://www.finanzen.ch/nachrichten/aktien/hensoldt-aktie-kursbewegung-29-10-2026-1035064657" },
        { title: "boerse-express.com: Renk Group Aktie – JPMorgan holt Kursziel auf 50 Euro runter", url: "https://www.boerse-express.com/news/articles/renk-group-aktie-jpmorgan-holt-kursziel-auf-50-euro-runter-957126" },
        { title: "finanzen.net: RENK Kaufen (DZ BANK) 23.10.2026", url: "https://www.finanzen.net/analyse/renk_kaufen-dz_bank_1113796" }
      ]
    },
    /* 11 DEALS: BASF/EVONIK, EQT/QIAGEN, TESLA/SPACEX */
    {
      id: "deals-basf-evonik-qiagen-teslaspacex-10-29", cats: ["deals", "pe"], when: "BASF-Aussagen 28.10. · EQT/Qiagen-Zustimmung 21./22.10. · Musk-Telefonkonferenz 27.10.2026",
      headline: "BASF-Chef Kamieth nennt eine Evonik-Übernahme „logisch und sinnvoll”, ohne den kursierenden Preis zu bestätigen, der EQT-Kauf von Qiagen ist besiegelt, bei Tesla/SpaceX bleibt eine Fusion laut Musk „keineswegs sicher”",
      sec30: "BASF-Chef Markus Kamieth bezeichnete eine Übernahme von Evonik am 28.10. gegenüber Analysten als „logischen und sinnvollen” Schritt, betonte aber, BASF werde nicht überzahlen; den seit Tagen kursierenden Preis von 24 Euro je Aktie (rund 11 Mrd. Euro) bestätigte er nicht. Als Zugeständnis bot er unter anderem Bestandsschutz für Standortvereinbarungen und den Ausschluss betriebsbedingter Kündigungen bis 2032 an. Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, äußerte sich weiterhin nicht öffentlich; die Evonik-Aktie notiert mit rund 21,34 Euro weiterhin rund 12 % unter dem kursierenden Angebotspreis. Beim EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) hatte sich der Finanzinvestor am 21./22.10. im Bieterwettstreit gegen KKR durchgesetzt; das Closing ist bis Mitte 2027 geplant. Bei Tesla und SpaceX bleibt eine mögliche Fusion weiterhin ergebnisoffen: Elon Musk dämpfte in einer Telefonkonferenz am 27.10. Erwartungen und sagte, eine Fusion sei „keineswegs sicher”.",
      blocks: [
        { h: "Was ist der neue Stand bei BASF/Evonik?", items: [
          { tag: "position", text: "BASF-Chef Markus Kamieth bezeichnete eine Evonik-Übernahme am 28.10. gegenüber Analysten als „logischen und sinnvollen” Schritt, betonte aber, man werde „nicht überzahlen”; den seit Tagen kursierenden Preis von 24 Euro je Aktie bestätigte er nicht. Als Zugeständnis bot er laut Berichten unter anderem Bestandsschutz für Standortvereinbarungen, den Ausschluss betriebsbedingter Kündigungen bis 2032, die Beibehaltung der Tarifverträge sowie mindestens einen Vorstandssitz in Nordrhein-Westfalen an.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, äußerte sich weiterhin nicht öffentlich zu dem kursierenden Angebot; die Evonik-Aktie notiert mit rund 21,34 Euro weiterhin rund 12 % unter dem kursierenden Angebotspreis von 24 Euro je Aktie, was auf anhaltende Marktskepsis hindeutet, ob der Deal in dieser Form zustande kommt." }
        ]},
        { h: "Wie ist der Stand beim EQT-Kauf von Qiagen?", items: [
          { tag: "fakt", text: "Qiagen stimmte am 21./22.10. definitiv einer Übernahme durch ein EQT-Konsortium zu: 46,50 Euro je Aktie in bar, Gesamtwert rund 10,8 Mrd. Euro, eine Prämie von rund 40 % auf den Schlusskurs vom 8. Juli 2026. Der Finanzinvestor KKR war ebenfalls im Bieterwettstreit, zog sich aber zurück; das Closing ist vorbehaltlich regulatorischer Freigaben bis Mitte 2027 geplant.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] }
        ]},
        { h: "Wie ist der Stand bei Tesla und SpaceX?", items: [
          { tag: "unbestaetigt", text: "Beide Unternehmen haben unabhängige Sonderausschüsse zur Prüfung einer möglichen Fusion eingesetzt, Analysten diskutieren dabei Bewertungen von bis zu rund 5 Billionen Dollar. Elon Musk dämpfte in einer Telefonkonferenz am 27.10. jedoch selbst die Erwartungen: Eine Fusion sei „keineswegs sicher” („I think that would be overstating it”), eine Mehrheit der Tesla-Aktionäre müsste zustimmen.",
            ask: [{ label: "Mehr zum Private-Credit-Markt", ref: "s:12" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich BASF-Chef Kamieth inhaltlich positiv, aber ohne Preisbestätigung zu Evonik äußert, während der EQT-Kauf von Qiagen bereits vollständig besiegelt ist und Musk selbst Erwartungen an eine Tesla/SpaceX-Fusion dämpft, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "rund 11 Mrd. € (BASF/Evonik, weiterhin unbestätigt) · rund 10,8 Mrd. € (EQT/Qiagen, bestätigt)", buyer: "BASF · EQT-Konsortium", target: "Evonik · Qiagen", sector: "Chemie / Biotech-Diagnostik", type: "Unternehmensübernahme (BASF/Evonik weiterhin unbestätigt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "ICIS: Evonik deal a 'logical' step, but BASF will not overpay – CEO", url: "https://www.icis.com/explore/resources/news/2026/10/28/11239204/evonik-deal-a-logical-step-but-basf-will-not-overpay-ceo/" },
        { title: "onvista: ROUNDUP 3 – BASF drückt bei Evonik-Kauf aufs Gas, höheres Ergebnisziel für 2026", url: "https://www.onvista.de/news/2026/10-28-roundup-3-basf-drueckt-bei-evonik-kauf-aufs-gas-hoeheres-ergebnisziel-fuer-2026-0-10-26569467" },
        { title: "ad-hoc-news.de: BASF soll 24,00 Euro für Evonik bieten – Evonik-Aktie liegt 12,00 Prozent darunter", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/basf-soll-24-00-euro-fuer-evonik-bieten-evonik-aktie-liegt-12-00-prozent-darunter/70419135" },
        { title: "GuruFocus: Qiagen (QGEN) Agrees to €10.8 Billion Acquisition by EQT at a 40% Premium", url: "https://www.gurufocus.com/news/9136561/qiagen-qgen-agrees-to-108-billion-acquisition-by-eqt-at-a-40-premium" },
        { title: "Börsen-Zeitung: Finanzinvestor EQT entscheidet Bieterwettkampf um Qiagen für sich", url: "https://www.boersen-zeitung.de/unternehmen-branchen/finanzinvestor-eqt-bietet-108-mrd-euro-fuer-laborausruester-qiagen" },
        { title: "Al Jazeera: Elon Musk says SpaceX and Tesla exploring largest merger in history", url: "https://www.aljazeera.com/economy/2026/10/21/elon-musk-says-spacex-and-tesla-exploring-largest-merger-in" }
      ]
    },
    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-bcred-blueowl-sp-10-29", cats: ["credit", "pe"], when: "Blackstone-Q3-Zahlen Ende Okt. · S&P-Ausblicksänderung Okt. · Blue-Owl/Apollo-Rücknahmen Q3 2026",
      headline: "S&P stuft den Ausblick für Blackstones Private-Credit-Fonds BCRED von „positiv” auf „stabil” zurück, bei Blue Owl und Apollo bleiben Rücknahmewünsche weiterhin über den vertraglichen Limits",
      sec30: "Der Nettoinventarwert (NAV) von Blackstones Private Credit Fund (BCRED) lag zum 30.9.2026 bei 23,51 Dollar je Anteil, das Fondsvermögen bei rund 41,1 Mrd. Dollar. S&P stufte den Ausblick für BCRED im Oktober von „positiv” auf „stabil” zurück, mit Verweis auf einen NAV-Rückgang durch Abschreibungen auf Investments der Jahrgänge 2021/Anfang 2022; die Liquidität gilt laut S&P weiterhin als ausreichend für Rücknahmen bis 5 % des NAV. Bei Blue Owl verzeichnete der Technologie-Kreditfonds OTIC im dritten Quartal erneut Rücknahmewünsche von rund 39 % der Anteile – der höchste Wert der Branche – und kappte die Auszahlung erneut auf 5 %; auch der Apollo Debt Solutions BDC hatte zuvor bei Rücknahmewünschen von 11,2 % auf 5 % gekappt. Der Trend verschärfter Rücknahmebeschränkungen im rund 3 Billionen Dollar schweren Private-Credit-Markt setzt sich damit fort.",
      blocks: [
        { h: "Wie ist der Stand bei Blackstones BCRED?", items: [
          { tag: "fakt", text: "Der Nettoinventarwert (NAV) von BCRED lag zum 30.9.2026 bei 23,51 Dollar je Anteil, das Fondsvermögen bei rund 41,1 Mrd. Dollar, bei einem Portfolio-Marktwert von rund 75,6 Mrd. Dollar und Schulden von rund 34,8 Mrd. Dollar.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "unbestaetigt", text: "S&P stufte den Ausblick für BCRED im Oktober von „positiv” auf „stabil” zurück, mit Verweis auf einen NAV-Rückgang durch Abschreibungen auf Investments der Jahrgänge 2021/Anfang 2022; die Liquidität gilt laut S&P weiterhin als ausreichend, um Rücknahmen bis 5 % des NAV zu bedienen.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was zeigt sich bei Blue Owl und Apollo?", items: [
          { tag: "unbestaetigt", text: "Blue Owl verzeichnete beim Technologie-Kreditfonds OTIC im dritten Quartal erneut Rücknahmewünsche von rund 39 % der Anteile – laut Berichten der höchste Wert der Branche – und kappte die Auszahlung erneut auf das vertragliche Limit von 5 %.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "unbestaetigt", text: "Der Apollo Debt Solutions BDC (rund 14,7 Mrd. Dollar Nettovermögen) hatte zuvor bei Rücknahmewünschen von 11,2 % ebenfalls auf 5 % gekappt; auch Ares Capital hat laut Berichten Rücknahmen bei nicht gehandelten BDCs begrenzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass S&P den Ausblick für einen der größten Private-Credit-Fonds zurückstuft, während gleichzeitig mehrere weitere große Fonds weiterhin deutlich mehr Rücknahmen anfragen, als sie vertraglich auszahlen müssen, zeigt anhaltenden Druck in Teilen der Anlageklasse – auch wenn einzelne Fonds wie BCRED laut S&P über ausreichend Liquidität für die vertraglich begrenzten Rücknahmen verfügen." }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:nonaccrual-default"],
      sources: [
        { title: "rallies.ai: S&P says Blackstone Private Credit Fund outlook revised to stable from positive", url: "https://rallies.ai/news/sp-says-blackstone-private-credit-fund-outlook-revised-to-stable-from-positive-af83b57bb94fa143" },
        { title: "SEC: Blackstone Private Credit Fund – Form 8-K (21.10.2026)", url: "https://www.sec.gov/Archives/edgar/data/0001803498/000180349826000056/bcred-20261021.htm" },
        { title: "With Intelligence: Apollo and Ares Cap Redemptions for Non-Traded BDCs", url: "https://www.withintelligence.com/insights/apollo-and-ares-cap-redemptions-for-non-traded-bdcs/" },
        { title: "Blind Spot Intel: The Private Credit Gates Just Started Closing", url: "https://theblindspotintel.substack.com/p/the-private-credit-gates-just-started" },
        { title: "Yardeni Research: Private Credit Monitor", url: "https://yardeni.com/tools/private-credit-monitor" }
      ]
    },
    /* 13 TECHNOLOGIE: MICROSOFT/ALPHABET/AMAZON/COREWEAVE/NVIDIA */
    {
      id: "microsoft-alphabet-amazon-coreweave-nvidia-10-29", cats: ["tech"], when: "Microsoft/Alphabet-Zahlen Mi 28.10. abends · Amazon-Zahlen heute nach Börsenschluss · CoreWeave/Nvidia-CDS Okt. 2026",
      headline: "Microsoft übertrifft die Erwartungen und legt vorbörslich zu, Alphabet verfehlt trotz starkem Cloud-Wachstum den Gewinnkonsens deutlich, Amazon berichtet heute, Investor Michael Burry warnt weiter vor „zirkulärer” KI-Finanzierung",
      sec30: "Microsoft meldete für sein erstes Geschäftsquartal 2027 (Juli bis September 2026) einen Umsatz von 92,3 Mrd. Dollar (+19 %) und ein bereinigtes Ergebnis je Aktie von 4,89 Dollar (Konsens 4,73 Dollar); Azure wuchs um 48 %. Die Aktie stieg vorbörslich am Donnerstag um rund 4 %. Alphabet meldete einen Umsatz von 127,58 Mrd. Dollar (+25 %), verfehlte den Gewinnkonsens aber deutlich (2,12 statt erwarteter 3,01 Dollar je Aktie), unter anderem wegen eines 8,2-Mrd.-Dollar-Verlusts aus der SpaceX-Beteiligung; Google Cloud wuchs um 103 % auf 30,7 Mrd. Dollar, der Kapitalaufwand (Capex) stieg auf 51,4 Mrd. Dollar je Quartal. Die Alphabet-Aktie brach vorbörslich um rund 10 % ein. Amazon berichtet heute nach US-Börsenschluss; Analysten erwarten einen Umsatz von rund 202 Mrd. Dollar. Bei CoreWeave bleiben die Kreditausfallversicherungen (CDS) mit rund 1.148 Basispunkten auf „Distress”-Niveau. Investor Michael Burry bezeichnete Nvidias rund 105-Mrd.-Dollar-Garantie für ein OpenAI-Rechenzentrum erneut als „zirkuläre Finanzierung” mit „Shades of Enron”; Nvidia-Chef Jensen Huang widersprach.",
      blocks: [
        { h: "Wie haben Microsoft und Alphabet bei ihren Quartalszahlen abgeschnitten?", items: [
          { tag: "fakt", text: "Microsoft meldete für sein erstes Geschäftsquartal 2027 (Juli bis September 2026) einen Umsatz von 92,3 Mrd. Dollar (+19 % zum Vorjahr, über dem Konsens von 90,7 Mrd. Dollar) und ein bereinigtes Ergebnis je Aktie von 4,89 Dollar (Konsens 4,73 Dollar); der Azure-Umsatz wuchs um 48 %, der freie Cashflow lag bei 18,6 Mrd. Dollar. Die Aktie stieg vorbörslich am Donnerstag um rund 4 %.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Alphabet meldete einen Umsatz von 127,58 Mrd. Dollar (+25 %), verfehlte den Gewinnkonsens aber deutlich (2,12 statt erwarteter 3,01 Dollar je Aktie) – unter anderem wegen eines 8,2-Mrd.-Dollar-Verlusts aus der SpaceX-Beteiligung. Google Cloud wuchs um 103 % auf 30,7 Mrd. Dollar Umsatz, der Kapitalaufwand (Capex) stieg auf 51,4 Mrd. Dollar je Quartal, der freie Cashflow war mit -9,1 Mrd. Dollar negativ. Die Aktie brach vorbörslich um rund 10 % ein." }
        ]},
        { h: "Was steht heute bei Amazon an?", items: [
          { tag: "fakt", text: "Amazon berichtet heute, 29.10., nach US-Börsenschluss (Telefonkonferenz 17 Uhr Eastern Time) Quartalszahlen; Analysten erwarten einen Umsatz von rund 202 Mrd. Dollar (+12 %) und ein Ergebnis je Aktie von rund 2,01 Dollar, bei AWS-Wachstumsschätzungen zwischen 35 und 41 %." }
        ]},
        { h: "Wie geht es CoreWeave, Nvidia und Broadcom?", items: [
          { tag: "fakt", text: "CoreWeaves 5-Jahres-Kreditausfallversicherungen (CDS) lagen zuletzt bei rund 1.148 Basispunkten – weiterhin auf „Distress”-Niveau, was einer impliziten 5-Jahres-Ausfallwahrscheinlichkeit von rund 60 bis 64 % entspricht; die Aktie blieb entsprechend volatil.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Nvidias Aktie notierte bei rund 215 bis 218 Dollar (Marktkapitalisierung rund 5,2 Billionen Dollar), belastet unter anderem von Berichten über eine Prüfung des 12,9-Mrd.-Dollar-Hugging-Face-Deals durch das US-Justizministerium; Broadcom sicherte sich weiterhin über die am 26.10. bekanntgewordene 63-Mrd.-Dollar-Finanzierung für KI-Chips für Anthropic Rückhalt, die Aktie notiert bei rund 342 Dollar." }
        ]},
        { h: "Was wird zu „zirkulärer” KI-Finanzierung diskutiert?", items: [
          { tag: "unbestaetigt", text: "Investor Michael Burry bezeichnet Nvidias rund 105-Mrd.-Dollar-Kreditgarantie für ein OpenAI-Rechenzentrum in Ohio erneut als „zirkuläre Finanzierung” und zieht Vergleiche zu „Shades of Enron” im Zusammenhang mit einem 500-Mrd.-Dollar-Finanzierungsdeal mit mehreren Wall-Street-Banken. Nvidia-Chef Jensen Huang widerspricht der Einschätzung und verweist darauf, dass OpenAI für die Rechenzentrumskapazität Miete zahle.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Microsoft seine Zahlen übertrifft, während Alphabet trotz starkem Cloud-Wachstum den Gewinnkonsens wegen hoher KI-Investitionen und externer Verluste verfehlt, zeigt erneut, wie genau Anleger derzeit beobachten, ob sich die hohen KI-Investitionen einzelner Konzerne in profitablen Ergebnissen niederschlagen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "CNBC: Alphabet, Google Stock Drops 10%, Microsoft Rises", url: "https://www.cnbc.com/2026/10/29/alphabet-google-microsoft-msft-shares-today-earnings.html" },
        { title: "Fortune: Alphabet's Google Cloud revenue doubles to $31B as cash flow stays deep red", url: "https://fortune.com/2026/10/28/alphabet-google-stock-drops-cloud-revenue-doubles-free-cash-flow-negative/" },
        { title: "The Motley Fool: Microsoft and Alphabet Just Reported Earnings, Putting the AI Boom to the Test", url: "https://www.fool.com/investing/2026/10/28/microsoft-and-alphabet-just-reported-earnings-putting-the-ai-boom-to-the-test/" },
        { title: "Yahoo Finance: Amazon (AMZN) Q3 Earnings Preview – AWS Growth Takes Center Stage", url: "https://finance.yahoo.com/markets/stocks/articles/amazon-amzn-q3-earnings-preview-211300540.html" },
        { title: "Benzinga: Nvidia's Credit Risk Has Tripled and Just Passed Meta's", url: "https://www.benzinga.com/markets/bonds/26/10/62623350/nvidia-credit-risk-cds-tripled-passes-meta-coreweave" },
        { title: "Benzinga: Michael Burry Points to Nvidia's $105B OpenAI Guarantee as 'Circular Financing' Red Flag", url: "https://www.benzinga.com/markets/earnings/26/08/61486426/michael-burry-points-to-nvidias-105b-openai-guarantee-as-circular-financing-red-flag-whistling-past-the-graveyard" },
        { title: "BigGo Finance: Michael Burry Says Nvidia's $500 Billion AI Funding Deal Has 'Shades of Enron'", url: "https://finance.biggo.com/news/97f417c3-2783-4212-b7ce-2592fd1453a4" }
      ]
    },
    /* 14 ENERGIE */
    {
      id: "oelpreis-gasspeicher-ttf-opec-10-29", cats: ["energy", "geo"], when: "TTF-Gaspreis über 100 €/MWh 28.10. · Gasspeicher-Stand 22.10. · OPEC+-Treffen 1.11. · Lukoil-Frist 21.11.2026",
      headline: "Der europäische Gas-Future TTF überschreitet erstmals seit 2022 die Marke von 100 Euro je Megawattstunde, der Ölpreis bleibt von der Lage am Golf getrieben, die deutschen Gasspeicher liegen weiter unter dem Herbstziel",
      sec30: "Der europäische Gas-Future TTF überschritt am 28.10. erstmals seit 2022 die Marke von 100 Euro je Megawattstunde (100,09 €/MWh) – ein Plus von rund 36 % zum Vormonat und 218 % zum Vorjahr; LNG-Lieferungen nach Nordwesteuropa kosteten zuletzt rund 31,16 Dollar je MMBtu. Brent notierte am Donnerstagmorgen je nach Quelle zwischen rund 113 und 116 Dollar je Barrel, WTI zwischen rund 100,7 und 102 Dollar, mit leicht rückläufiger Tendenz gegenüber dem Vortag. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %. Die OPEC+ wird beim Treffen am 1.11. laut Delegierten voraussichtlich an unveränderten Förderquoten festhalten; die OFAC-Frist für Verhandlungen über eingefrorenes Lukoil-Auslandsvermögen wurde weiter bis zum 21.11.2026 verlängert.",
      blocks: [
        { h: "Was ist beim europäischen Gaspreis passiert?", items: [
          { tag: "fakt", text: "Der europäische Gas-Future TTF überschritt am 28.10. erstmals seit 2022 die Marke von 100 Euro je Megawattstunde (100,09 €/MWh) – ein Plus von rund 36 % zum Vormonat und rund 218 % zum Vorjahreswert; LNG-Lieferungen nach Nordwesteuropa kosteten zuletzt rund 31,16 Dollar je MMBtu.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte anhaltende kriegsbedingte Angebotsausfälle sowie historisch niedrige Vor-Winter-Speicherstände in mehreren EU-Ländern." }
        ]},
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "unbestaetigt", text: "Brent notierte am Donnerstagmorgen je nach Quelle zwischen rund 113 und 116 Dollar je Barrel, WTI zwischen rund 100,7 und 102 Dollar – die Angaben schwanken weiterhin stark je nach Messzeitpunkt und Quelle. Gegenüber dem Vortag zeigt sich eine leicht rückläufige Tendenz.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10.; die Bundesnetzagentur sieht aktuell dennoch kein akutes Versorgungsrisiko." }
        ]},
        { h: "Wie ist der Stand bei der OPEC+ und bei den Lukoil-Sanktionen?", items: [
          { tag: "unbestaetigt", text: "Die OPEC+ wird beim Treffen am 1.11. laut Delegierten voraussichtlich an den seit Anfang Oktober unveränderten Förderquoten festhalten, auch weil die tatsächliche Förderung wegen der Störungen am Golf unter den Zielwerten liegt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Die US-Behörde OFAC verlängerte die Frist für Verhandlungen über eingefrorenes Auslandsvermögen des russischen Ölkonzerns Lukoil erneut, von zuvor 22.10. auf nun 21.11.2026, ohne dass ein tatsächlicher Eigentumsübergang erlaubt ist." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der europäische Gaspreis erstmals seit 2022 wieder über 100 Euro je Megawattstunde steigt, während die deutschen Gasspeicher unter dem gesetzlichen Ziel liegen und der Ölpreis weiterhin stark von der Lage am Golf abhängt, zeigt, wie unmittelbar geopolitische Entwicklungen derzeit auf europäische Energiepreise durchschlagen.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "Euronews: European gas price crosses €100 for first time since 2022 as EU warns of new crisis", url: "https://www.euronews.com/2026/10/28/european-gas-price-crosses-100-for-first-time-since-2022-as-eu-warns-of-new-crisis" },
        { title: "HDFC Sky: Oil Slips on US–Iran Talks but Middle East Tensions Limit Fall", url: "https://hdfcsky.com/news/oil-prices-today-october-29-2026-brent-falls-to-114-2-wti-at-101-4-as-us-iran-peace-hopes-counter-supply-risks" },
        { title: "netz-trends.de: Gasspeicher Deutschland – 61,1 Prozent (22. Oktober 2026)", url: "https://www.netz-trends.de/gasspeicher-deutschland-61-1-prozent-22-oktober-2026-bundesnetzagentur-gaspreis-destatis/" },
        { title: "Oil & Gas 360: OPEC+ expected to hold December oil targets steady as supply disruptions persist", url: "https://oilandgas360.com/opec-oil-producers-set-to-keep-output-targets-steady-at-sunday-meeting-sources-say" },
        { title: "Interfax: OFAC extends Lukoil's license to sell foreign assets until Nov 21", url: "https://interfax.com/newsroom/top-stories/119637/" }
      ]
    },
    /* 15 INTERNATIONAL/GEOPOLITIK: GAZA/TAIWAN/VENEZUELA/SUDAN */
    {
      id: "gaza-taiwan-venezuela-sudan-international-10-29", cats: ["world", "geo"], when: "UN-Bericht Gaza 26.10. · Taiwan-Update 19.–25.10. · Machado-Rückkehr 25.10. · El-Fasher-Jahrestagsberichte 26.10.2026",
      headline: "Eine UN-Untersuchungskommission wirft Israel trotz Waffenstillstand anhaltende Völkerrechtsverstöße in Gaza vor, Taiwan registriert weniger chinesische Militäraktivität als in der Vorwoche, in Venezuela ist Oppositionsführerin Machado aus dem Exil zurückgekehrt",
      sec30: "Eine UN-Untersuchungskommission erklärte in einem am 26.10. veröffentlichten Bericht, Israel begehe trotz des seit Oktober 2025 geltenden Waffenstillstands weiterhin „genozidale Handlungen” gegen Palästinenser in Gaza und werfe Israel zudem Verbrechen gegen die Menschlichkeit im Westjordanland vor; Israel weist die Vorwürfe zurück. Taiwans Verteidigungsministerium registrierte zwischen dem 19. und 25.10. 46 chinesische Militärflugeinsätze rund um die Insel, ein Rückgang von rund 13 % gegenüber der Vorwoche; ein von den USA zugesagtes, rund 14 Mrd. Dollar schweres Rüstungspaket liegt laut Senatoren weiterhin auf Eis. Oppositionsführerin María Corina Machado kehrte am 25.10. nach zehn Monaten im Untergrund nach Venezuela zurück; Präsident Trump kündigte an, venezolanisches Öl werde „bald” die Spritpreise senken. Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die RSF (Oktober 2025) veröffentlichten Human Rights Watch und Amnesty International am 26.10. neue Berichte über anhaltende Rechtsverstöße in der Stadt.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen gilt seit Oktober 2025 formal weiter." },
          { tag: "unbestaetigt", text: "Eine UN-Untersuchungskommission erklärte in einem am 26.10. veröffentlichten Bericht, Israel begehe trotz des Waffenstillstands weiterhin „genozidale Handlungen” gegen Palästinenser und habe seine Gebietskontrolle in Gaza seit dem Waffenstillstand ausgeweitet; die Kommission wirft Israel zudem Verbrechen gegen die Menschlichkeit im Westjordanland vor. Israel weist sowohl die Genozid- als auch weitere Vorwürfe zurück." }
        ]},
        { h: "Was geschieht zwischen China und Taiwan?", items: [
          { tag: "fakt", text: "Taiwans Verteidigungsministerium registrierte zwischen dem 19. und 25.10. 46 chinesische Militärflugeinsätze rund um die Insel, davon 32 in der Luftverteidigungszone (ADIZ) – ein Rückgang von rund 13 % gegenüber der Vorwoche (53 Einsätze)." },
          { tag: "unbestaetigt", text: "Ein von den USA zugesagtes, rund 14 Mrd. Dollar schweres Rüstungspaket für Taiwan liegt laut mehreren US-Senatoren weiterhin auf Eis; eine formelle Benachrichtigung des Kongresses steht aus." }
        ]},
        { h: "Welche weiteren internationalen Entwicklungen gab es?", items: [
          { tag: "fakt", text: "Oppositionsführerin María Corina Machado kehrte am 25.10. nach zehn Monaten im Untergrund beziehungsweise Exil nach Venezuela zurück; Präsident Trump kündigte an, venezolanisches Öl werde „bald” die Spritpreise senken." },
          { tag: "unbestaetigt", text: "Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die paramilitärische RSF (Oktober 2025) veröffentlichten Human Rights Watch und Amnesty International am 26.10. neue Berichte, wonach weiterhin rechtswidrige Tötungen, Inhaftierungen, Hunger und Folter in der Stadt dokumentiert seien und beide Kriegsparteien humanitäre Hilfe blockierten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere internationale Konfliktlinien – Gaza, Taiwan, Sudan – weiterhin ohne klare Lösung fortbestehen, während sich in Venezuela mit der Rückkehr Machados zumindest eine innenpolitische Entwicklung sichtbar verändert, zeigt, wie viele geopolitische Baustellen derzeit gleichzeitig offen bleiben." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "Al Jazeera: UN panel accuses Israel of 'extermination' in West Bank, genocide in Gaza", url: "https://www.aljazeera.com/news/2026/10/26/israel-committing-crimes-against-humanity-in-occupied-west-bank-un" },
        { title: "The National: Gaza ceasefire has not stopped Israeli 'genocidal acts', UN commission says", url: "https://www.thenationalnews.com/news/us/2026/10/26/gaza-ceasefire-genocide-un/" },
        { title: "Taiwan Security Monitor: PLA Activity Update – The Week of October 19–25, 2026", url: "https://taiwansecuritymonitor.substack.com/p/pla-activity-update-the-week-of-october-d0c" },
        { title: "NPR: Venezuela's opposition leader María Corina Machado returns after months in exile", url: "https://www.npr.org/2026/10/25/nx-s1-6016222/venezuela-maria-corina-machado-leader-returns-exile" },
        { title: "Human Rights Watch: Sudan – One Year on from the Cataclysm of El Fasher", url: "https://www.hrw.org/news/2026/10/26/sudan-one-year-on-from-the-cataclysm-of-el-fasher" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX stieg am Mittwoch, 28.10., um 0,44 % auf 25.704,02 Punkte, der Euro Stoxx 50 gab dagegen um 0,19 % auf 6.152,92 Punkte nach; S&P 500 (+0,28 %) und Nasdaq (+0,27 %) legten leicht zu." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund nennen Berichte die als weitgehend erwartet eingestufte Fed-Entscheidung vom Abend sowie Einzelwerte wie die Deutsche Bank (Rekordquartalsgewinn) und Symrise (schwache Zahlen)." },
    "fed-hike": { tag: "fakt", story: 2, text: "Die Fed beließ ihren Leitzins am Mittwochabend bei 3,75 bis 4,00 % (Abstimmung 10:2); für die Dezember-Sitzung preisen Marktbeobachter laut CME FedWatch mit rund 83 bis 85 % Wahrscheinlichkeit eine weitere Erhöhung ein." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Fed-Chef Kevin Warsh wies Vorwürfe einer politisch motivierten Entscheidung zurück und kündigte an, die Fed werde ab 2027 künftig acht geldpolitische Sitzungen pro Jahr abhalten." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite stieg nach der Fed-Entscheidung auf rund 5,03 bis 5,04 % und liegt damit gut einen Prozentpunkt über dem Fed-Leitzins von 3,75 bis 4,00 %." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold notierte am Donnerstagmorgen je nach Quelle zwischen rund 4.031 und 4.044 Dollar je Feinunze (-0,5 bis -0,6 %), nachdem die nach der Fed-Entscheidung gestiegenen Anleiherenditen Gold als zinslose Anlage relativ weniger attraktiv machten." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin bewegte sich in den frühen Donnerstagmorgenstunden zwischen rund 79.656 und 80.279 Dollar, ohne klaren Trend." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Mittwoch bei 1,1133 Dollar; für Donnerstagmorgen nennen Quellen uneinheitliche Werte zwischen rund 1,1129 und 1,116 Dollar." },
    "ecb-hike": { tag: "unbestaetigt", story: 4, text: "Laut einer Reuters-Umfrage erwarteten 70 von 73 befragten Ökonomen für die heutige EZB-Sitzung eine Pause bei 2,50 %, die Mehrheit erwartet für Dezember dagegen eine weitere Erhöhung." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone lag im September bei 3,8 %, in Deutschland bei 3,3 %; die Oktober-Schnellschätzung für die Eurozone lag zum Redaktionsschluss noch nicht vor." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Die 171. Steuerschätzung vom 22.10. brachte dem Bund für 2027 rund 4,1 Mrd. Euro Mehreinnahmen; Finanzminister Klingbeil sagte, man gewinne dadurch keine neuen Spielräume, müsse aber auch keine neuen Lücken schließen." },
    "debt-brake": { tag: "fakt", story: 5, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., Schlussabstimmung am 27.11.2026." },
    "rente-basics": { tag: "position", story: 6, text: "Der neue Arbeitsminister Alexander Schweitzer (SPD) will die Rente mit 63 „im Kern erhalten” und sucht einen Kompromiss; Kanzler Merz und CSU-Chef Söder wollen die Reformvorschläge der Alterssicherungskommission vollständig umsetzen." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "INSA (23.–26.10.) sieht die AfD bei 29,5 % vor der Union (19,0 %); Forsa (20.–26.10.) sieht die AfD bei 27 % vor der Union (21 %) – beide Institute weichen bei Grünen und Union deutlich voneinander ab." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 8, text: "Brent notierte am Donnerstagmorgen je nach Quelle zwischen rund 113 und 116 Dollar, mit leicht rückläufiger Tendenz, nachdem Hoffnung auf eine mögliche US-Iran-Deeskalation aufkam." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Die Straße von Hormus gilt laut Schiffsverkehrsdaten weiterhin als faktisch gesperrt: Am 25.10. wurden dort nur 2 Transits gezählt, gegenüber normalerweise rund 85 pro Tag." },
    "defence-order": { tag: "unbestaetigt", story: 9, text: "Der Festauftrag über rund 25 Mrd. Euro für das Arminius-Programm (rund 1.800 Boxer-Radpanzer) soll laut Berichten im Dezember 2026 unterschrieben werden, nach der parlamentarischen Befassung am 9.12." },
    "defence-stocks": { tag: "fakt", story: 10, text: "RTX und Northrop Grumman meldeten Rekord-Auftragsbestände; bei RENK bleiben Analysten nach dem Verkauf des Gleitlagergeschäfts an Miba gespalten, bei Hensoldt sehen mehrere Analysten weiteres Potenzial." },
    "ma-steps": { tag: "fakt", story: 11, text: "Qiagen stimmte am 21./22.10. definitiv einer Übernahme durch ein EQT-Konsortium zu (46,50 Euro je Aktie, rund 10,8 Mrd. Euro); der Finanzinvestor KKR war ebenfalls im Bieterwettstreit, zog sich aber zurück." },
    "take-private-why": { tag: "position", story: 11, text: "BASF-Chef Kamieth bezeichnete eine Evonik-Übernahme am 28.10. als „logischen und sinnvollen” Schritt, bestätigte den kursierenden Preis von 24 Euro je Aktie aber nicht; die RAG-Stiftung schweigt weiterhin öffentlich." },
    "deal-risks": { tag: "unbestaetigt", story: 11, text: "Bei Tesla und SpaceX bleibt eine mögliche Fusion ergebnisoffen; Elon Musk sagte selbst, eine Fusion sei „keineswegs sicher”." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Der Nettoinventarwert von Blackstones Private Credit Fund (BCRED) lag zum 30.9.2026 bei 23,51 Dollar je Anteil; S&P stufte den Ausblick im Oktober von „positiv” auf „stabil” zurück." },
    "redemption-limits": { tag: "unbestaetigt", story: 12, text: "Blue Owl verzeichnete beim Technologie-Kreditfonds OTIC im dritten Quartal erneut Rücknahmewünsche von rund 39 % der Anteile und kappte die Auszahlung erneut auf 5 %." },
    "ai-capex": { tag: "fakt", story: 13, text: "Microsoft meldete für sein erstes Geschäftsquartal 2027 einen Umsatz von 92,3 Mrd. Dollar (+19 %) mit 48 % Azure-Wachstum; Alphabet steigerte Google Cloud um 103 %, verfehlte den Gewinnkonsens aber wegen hoher Investitionen deutlich." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "Investor Michael Burry bezeichnet Nvidias rund 105-Mrd.-Dollar-Garantie für ein OpenAI-Rechenzentrum erneut als „zirkuläre Finanzierung”; Nvidia-Chef Jensen Huang widerspricht." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %." },
    "gas-ttf": { tag: "fakt", story: 14, text: "Der europäische Gas-Future TTF überschritt am 28.10. erstmals seit 2022 die Marke von 100 Euro je Megawattstunde (+36 % zum Vormonat, +218 % zum Vorjahr)." },
    "opec-plus-why": { tag: "unbestaetigt", story: 14, text: "Die OPEC+ wird beim Treffen am 1.11. laut Delegierten voraussichtlich an unveränderten Förderquoten festhalten, auch weil die tatsächliche Förderung wegen der Störungen am Golf unter den Zielwerten liegt." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent schwankte zwischen rund 113 und 116 Dollar je Barrel; Öl- und Gaspreise bleiben Belastungsfaktoren für Sprit-, Heiz- und Transportkosten in Europa." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 2,
      q: "Mit welchem Abstimmungsverhältnis hat die Fed ihre Zinsentscheidung am 28.10.2026 getroffen?",
      options: [
        "Einstimmig (12:0)",
        "7:5",
        "10:2",
        "9:3"
      ],
      answer: 2,
      explain: "Die Fed beließ den Leitzins mit 10 zu 2 Stimmen unverändert; Gouverneurin Lisa Cook und die Präsidentin der Cleveland-Fed, Beth Hammack, stimmten für eine Erhöhung um 25 Basispunkte."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, die Diplomatie zwischen den USA und Iran würde in den kommenden Tagen tatsächlich zu einer spürbaren Entspannung an der Straße von Hormus führen. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Einen tendenziell steigenden Ölpreis, weil Entspannung immer als Kaufsignal gilt",
        "Einen tendenziell sinkenden Ölpreis, weil mehr Öl ungehindert durch die wichtige Handelsroute transportiert werden könnte",
        "Keine Auswirkung, da der Ölpreis unabhängig vom Schiffsverkehr durch Hormus ist",
        "Eine automatische Verdoppelung der OPEC+-Förderquoten"
      ],
      answer: 1,
      explain: "Ein großer Teil der weltweiten Öltransporte läuft normalerweise durch die Straße von Hormus; eine Entspannung würde laut der in Meldung 8 beschriebenen Logik das Angebot tendenziell erhöhen und den Ölpreis eher sinken lassen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Wer wurde am 14.10.2026 als neuer Bundesarbeitsminister vereidigt, nachdem Bärbel Bas zurückgetreten war?",
      options: [
        "Alexander Schweitzer",
        "Lars Klingbeil",
        "Markus Söder",
        "Karin Prien"
      ],
      answer: 0,
      explain: "Alexander Schweitzer (SPD), zuvor Ministerpräsident von Rheinland-Pfalz, wurde am 14.10.2026 als neuer Bundesarbeitsminister vereidigt, nachdem Bärbel Bas ihre Ämter niedergelegt hatte."
    },
    {
      topic: "Technologie", type: "Fakt", story: 13,
      q: "Wie veränderte sich die Alphabet-Aktie vorbörslich nach den Quartalszahlen vom 28.10.2026?",
      options: [
        "Sie stieg um rund 10 %",
        "Sie blieb nahezu unverändert",
        "Sie brach um rund 10 % ein",
        "Sie stieg um rund 25 %"
      ],
      answer: 2,
      explain: "Obwohl Alphabet starkes Umsatzwachstum und ein Cloud-Wachstum von 103 % meldete, verfehlte das Unternehmen den Gewinnkonsens deutlich; die Aktie brach daraufhin vorbörslich um rund 10 % ein."
    },
    {
      topic: "Deals", type: "Zusammenhang", story: 11,
      q: "Angenommen, die RAG-Stiftung würde das kursierende Evonik-Angebot von BASF ablehnen. Was würde das unter sonst gleichen Bedingungen am ehesten für den weiteren Verlauf des Deals bedeuten?",
      options: [
        "Der Deal käme wahrscheinlich nicht in der bisher kursierenden Form zustande, da die RAG-Stiftung rund 43 % der Evonik-Aktien hält",
        "BASF müsste automatisch ein höheres Gebot vorlegen",
        "EQT würde automatisch das Angebot für Evonik übernehmen",
        "Qiagen würde dadurch zum neuen Übernahmeziel von BASF"
      ],
      answer: 0,
      explain: "Die RAG-Stiftung hält laut Meldung 11 rund 43 % der Evonik-Aktien; ohne ihre Zustimmung käme eine Übernahme in der bisher kursierenden Form kaum zustande, weshalb ihr fortgesetztes Schweigen als wichtiger Unsicherheitsfaktor gilt."
    }
  ]
};
