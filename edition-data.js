// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-31",
  dateLabel: "Samstag, 31. Oktober 2026",
  updatedLabel: "Recherchestand 31.10.2026",
  marketNote: "Diese Ausgabe entsteht am Samstagmorgen, 31.10.2026; die Börsen in Frankfurt, der Eurozone und den USA sind am Wochenende geschlossen. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq Composite sowie für die Renditen von US- und Bundesanleihen gilt deshalb der Schlussstand von Freitag, 30.10.2026. Gold-, Öl- und Bitcoin-Notierungen handeln dagegen durchgehend; hier wird der aktuellste verfügbare Stand gezeigt, teils vom Samstagmorgen. Die Fed hatte ihren Leitzins bereits am Mittwoch, 28.10., bei 3,75 bis 4,00 % belassen; die EZB hielt ihren Leitzins am Donnerstag, 29.10., ebenfalls unverändert bei 2,50 % (Meldung 2) – EZB-Präsidentin Lagarde kündigte dabei zugleich ihren vorzeitigen Rücktritt zum 7. Februar 2027 an. Am Freitag lösten ein Kurssturz bei Intel und enttäuschende Amazon-Zahlen einen breiten Technologie-Ausverkauf aus, der DAX, Euro Stoxx 50 und die US-Indizes belastete (Meldung 1). Apple berichtet seine Quartalszahlen erst am Montag, 2.11., nach Börsenschluss; die OPEC+ trifft sich am Sonntag, 1.11., zur nächsten Förderentscheidung (Meldung 14) – zum Redaktionsschluss lag dazu noch kein Ergebnis vor.",

  top: [
    { text: "Die EZB hielt ihren Leitzins am Donnerstag, 29.10., unverändert bei 2,50 %; Präsidentin Christine Lagarde deutete zugleich eine mögliche Zinserhöhung im Dezember an und kündigte überraschend ihren vorzeitigen Rücktritt zum 7. Februar 2027 an.", ref: "s:2" },
    { text: "Am Freitag, 30.10., erlebte die Wall Street ihren schwächsten Handelstag seit Juni: Der S&P 500 verlor 1,82 %, die Nasdaq Composite 2,86 %, nachdem ein Kurssturz bei Intel und enttäuschende Amazon-Zahlen einen breiten Technologie-Ausverkauf auslösten. DAX (-0,85 % auf 25.818,21 Punkte) und Euro Stoxx 50 (-1,22 %) gaben ebenfalls nach.", ref: "s:1" },
    { text: "Gold fiel erstmals seit rund einem Jahr unter die Marke von 4.000 Dollar, Bitcoin verzeichnete mit einem Monatsminus von rund 7,7 % laut Berichten den schwächsten Oktober seit 2014 – unter anderem belastet von einem mutmaßlichen Hack bei der Kryptobörse Binance.", ref: "s:3" },
    { text: "Die Lage am Golf bleibt angespannt: Irans Revolutionsgarde meldete mehrere brennende Tanker in der Straße von Hormus, während katarische Vermittler zugleich erneut nach Teheran reisten, um ein Waffenstillstandsabkommen zwischen den USA und Iran wiederzubeleben.", ref: "s:8" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.818,21", change: "-221,81 Pkt. / -0,85 % (Fr-Schluss)", dir: "down", asof: "Schluss Fr 30.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Wochenverlauf", text: "Der DAX beendete am Freitag eine vier Handelstage andauernde Gewinnserie." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang am Freitag nennen Berichte:",
        items: [
          "Einzelwerte wie Siemens Energy (-7,1 %) und Infineon (-6,7 %) belasteten den Index deutlich, nachdem Zweifel an der Rentabilität hoher KI-Investitionen nach US-Technologiezahlen aufkamen; Bayer (+4,7 %) wirkte dagegen stabilisierend.",
          "Der breitere Ausverkauf bei US-Technologiewerten nach dem Kurssturz von Intel und den Amazon-Quartalszahlen griff auch auf europäische Werte über; mehr dazu in Meldung 1."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf bei US-Tech-Werten und den Hintergründen in Meldung 1 bzw. Meldung 13.", ref: "s:1" }
      ],
      source: { title: "ad-hoc-news.de: Dax closes at 25,818.21 after four-day winning streak ends", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-closes-at-25-818-21-after-four-day-winning-streak-ends/70436736" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.131,31", change: "-75,60 Pkt. / -1,22 % (Fr-Schluss)", dir: "down", asof: "Schluss Fr 30.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Technologiesektor", text: "Der europäische Technologiesektor verzeichnete laut Berichten mit -2,75 % seine schwächste Sitzung seit dem 7. Juli." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der Ausverkauf bei US-Technologiewerten nach Intels Kurssturz und den Amazon-Zahlen griff auch auf europäische Technologiewerte über.",
          "Zusätzlich belasteten die wieder gestiegenen Ölpreise (Meldung 14) die Stimmung."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf in Meldung 1 und Meldung 13.", ref: "s:1" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 falls 1.22 percent to 6,131.31 points", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-falls-1-22-percent-to-6-131-31-points/70436726" }
    },
    "sp500": {
      label: "S&P 500", value: "7.580,07", change: "-140,32 Pkt. / -1,82 % (Fr-Schluss)", dir: "down", asof: "Schluss Fr 30.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Abstand zum Rekordhoch", text: "Der S&P 500 liegt damit rund 3 % unter seinem Rekordhoch von 7.818,93 Punkten vom 6.10.2026." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Amazon verfehlte trotz starkem Cloud-Wachstum den Gewinnkonsens, die Aktie fiel in Summe um rund 10 %; mehr dazu in Meldung 13.",
          "Der Chip-Hersteller Intel brach vorbörslich um bis zu 29 % ein, nachdem das Unternehmen eine schwache PC-Absatzprognose vorgelegt hatte, was einen breiten Ausverkauf bei Technologie- und Halbleiterwerten auslöste."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Amazon, Intel und Nvidia in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq fall as Amazon, Intel lead AI sell-off", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-30-dow-sp-500-nasdaq-amazon-intel-ai-sell-off-191429143.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.437,00", change: "-747,73 Pkt. / -2,86 % (Fr-Schluss)", dir: "down", asof: "Schluss Fr 30.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Im Vergleich zum S&P 500", text: "Die technologiestarke Nasdaq fiel deutlich stärker als der breiter gestreute S&P 500 (-1,82 %), was die Konzentration der Verluste auf Technologiewerte zeigt." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der Kurssturz bei Intel und die verfehlten Amazon-Zahlen trafen die technologiestarke Nasdaq besonders stark; mehr dazu in Meldung 13.",
          "Auch CoreWeave, Broadcom und Nvidia gaben am Freitag deutlich nach."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Broadcom und Nvidia in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq fall as Amazon, Intel lead AI sell-off", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-30-dow-sp-500-nasdaq-amazon-intel-ai-sell-off-191429143.html" }
    },
    "dow": {
      label: "Dow Jones", value: "51.770,31", change: "-572,25 Pkt. / -1,09 % (Fr-Schluss)", dir: "down", asof: "Schluss Fr 30.10.26", story: 1,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft weniger stark auf Kursbewegungen bei Tech-Aktien als der S&P 500 oder die Nasdaq.",
      compare: [
        { label: "Im Vergleich zur Nasdaq", text: "Der Dow verlor mit -1,09 % deutlich weniger als die technologiestarke Nasdaq (-2,86 %), da er weniger stark von Chip- und Cloud-Werten abhängt." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der breite Technologie-Ausverkauf nach dem Intel-Kurssturz und den Amazon-Zahlen traf auch den Dow, allerdings schwächer als die technologienäheren Indizes."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf in Meldung 1 und 13.", ref: "s:1" }
      ],
      source: { title: "bbntimes.com: Dow Jones (DJIA) Falls to 51,770.31 Amid Tech-Led Selloff", url: "https://www.bbntimes.com/global-economy/dow-jones-djia-falls-to-51-770-31-amid-tech-led-selloff-and-weak-corporate-earnings-in-wall-street" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1172", change: "+0,38 % ggü. Donnerstag (EZB-Referenzkurs)", dir: "up", asof: "EZB-Referenzkurs Fr 30.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Donnerstag", text: "Der EZB-Referenzkurs lag am Donnerstag noch bei rund 1,1130 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Euro legte zu, nachdem EZB-Präsidentin Lagarde auf der Pressekonferenz am Donnerstag eine mögliche Zinserhöhung im Dezember andeutete; mehr dazu in Meldung 2."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Sitzung und Lagardes Rücktrittsankündigung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "finanzen.net: Devisen – Eurokurs gestiegen, EZB-Referenzkurs 1,1172 US-Dollar", url: "https://www.finanzen.net/nachricht/devisen/devisen-eurokurs-gestiegen-ezb-referenzkurs-1-1172-us-dollar-16023599" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,93–4,94 %", change: "-9 bis -10 Basispunkte ggü. Mittwoch (nach Fed-Entscheidung: rund 5,03–5,04 %)", dir: "down", asof: "Stand Fr 30.10.26", story: 1, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,93 bis 4,94 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,9 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; die Rendite liegt damit gut einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Im Zuge des Technologie-Ausverkaufs am Freitag (Meldung 1) flossen Gelder verstärkt in US-Staatsanleihen, was die Rendite sinken ließ."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf am Freitag in Meldung 1.", ref: "s:1" }
      ],
      source: { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,31–3,35 %", change: "Quellen weichen leicht ab; leicht niedriger als Mittwoch (3,37 %)", dir: "down", asof: "Stand Fr 30.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Frankreichs 10-Jahres-Rendite (OAT) lag deutlich höher; der Risikoaufschlag zu Bundesanleihen (OAT/Bund-Spread) stieg laut Berichten am Freitag wieder auf rund 159 bis 160 Basispunkte, nachdem er am Vortag kurzzeitig auf rund 153 bis 155 Basispunkte gefallen war." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die vergleichsweise hohe Eurozone-Inflation (3,8 % im September) stützt die Rendite tendenziell; zugleich bleibt die Bundesanleihe wegen der unsicheren Lage in Frankreich als sicherer Hafen gefragt."
        ]
      },
      important: [
        { area: "Frankreich", text: "Mehr zur französischen Wirtschaftslage und dem OAT/Bund-Spread in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ARIVA.DE: Deutsche Anleihen geben nach, höhere Inflation stützt die Rendite", url: "https://ariva.de/news/deutsche-anleihen-geben-nach-hoehere-inflation-stuetzt-die-12188291" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.875–3.985 $", change: "-0,9 % (Fr.), weiter fallend auf rund 3.875 $ (Sa. früh) – erstmals seit rund einem Jahr unter 4.000 $", dir: "down", asof: "Stand Sa 31.10.26 früh (Fr.-Schluss 3.985,03 $)", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 3.875 bis 3.985 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Wochenverlauf", text: "Der Goldpreis war bereits in den Tagen zuvor unter Druck geraten; mit dem Rutsch unter 4.000 Dollar markiert er ein neues Jahrestief." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anleger schichteten im Zuge des Technologie-Ausverkaufs am Freitag (Meldung 1) verstärkt in Anleihen statt in Gold um."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf am Freitag in Meldung 1.", ref: "s:1" }
      ],
      source: { title: "Goldreporter: Goldpreis heute – Marktbericht Gold, 30.10.2026", url: "https://goldreporter.de/goldpreis-30-10-2026/marktbericht-gold/262690" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 112–118 $ (Quellen weichen ab)", change: "+1,4 % (Tag), +9,8 % (Monat)", dir: "up", asof: "Stand Fr 30.10.26 / Sa früh", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 112 bis 118 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Frühjahr 2026.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI notierte zwischen rund 103 und 105 Dollar je Barrel." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Neue US-Sanktionen gegen russische Ölexporte und Angriffe auf russische Raffinerien halten den Ölpreis laut Berichten hoch.",
          "Mehrere von Irans Revolutionsgarde gemeldete Tanker-Zwischenfälle in der Straße von Hormus stützten den Ölpreis zusätzlich; mehr dazu in Meldung 8 und Meldung 14."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "Trading Economics: Brent Crude Oil", url: "https://tradingeconomics.com/commodity/brent-crude-oil" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 77.300–77.400 $", change: "-rund 3 bis 4 % ggü. Donnerstag; schwächster Oktober seit 2014 (-7,7 % im Monatsverlauf)", dir: "down", asof: "Stand Sa 31.10.26 früh", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 77.000 bis 77.500 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Monatsverlauf", text: "Mit einem Monatsminus von rund 7,7 % verzeichnet Bitcoin laut Berichten den schwächsten Oktober seit 2014." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Das allgemeine Risiko-Aus im Zuge des Technologie-Ausverkaufs am Freitag sowie ein mutmaßlicher Hack bei der Kryptobörse Binance, der laut Berichten Liquidationen von rund 1,49 bis 1,67 Mrd. Dollar binnen 24 Stunden ausgelöst haben soll; eine unabhängige Bestätigung dazu liegt nicht vor."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Live News – Binance hack rattles crypto as Intel plunges and AI spending fears hit tech", url: "https://www.coindesk.com/markets/2026/10/30/live-news-binance-hack-rattles-crypto-as-intel-plunges-and-ai-spending-fears-hit-tech" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "markets-ausverkauf-intel-amazon-10-30", cats: ["markets"], when: "Schluss Fr 30.10.2026",
      headline: "Wall Street erlebt den schwächsten Handelstag seit Juni, DAX und Euro Stoxx 50 beenden ihre Gewinnserie, ein Kurssturz bei Intel und enttäuschende Amazon-Zahlen lösen einen breiten Technologie-Ausverkauf aus",
      sec30: "Der DAX verlor am Freitag, 30.10., 0,85 % auf 25.818,21 Punkte und beendete damit eine vier Tage andauernde Gewinnserie; der Euro Stoxx 50 gab um 1,22 % auf 6.131,31 Punkte nach. An der Wall Street fiel der S&P 500 um 1,82 % auf 7.580,07 Punkte – der schwächste Tag seit Juni –, die Nasdaq Composite verlor 2,86 % auf 25.437,00 Punkte, der Dow Jones 1,09 % auf 51.770,31 Punkte. Der Volatilitätsindex VIX stieg um rund 12,9 % auf 19,42 Punkte. Als Auslöser nennen Berichte einen vorbörslichen Kurssturz der Intel-Aktie von bis zu 29 % nach einer schwachen PC-Absatzprognose sowie enttäuschende Amazon-Quartalszahlen vom Vorabend; beides schürte Sorgen, ob sich die hohen KI-Investitionen der Technologiekonzerne auszahlen. In Deutschland belasteten vor allem Siemens Energy (-7,1 %) und Infineon (-6,7 %), während Bayer (+4,7 %) stützte.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX verlor am Freitag 0,85 % (-221,81 Punkte) auf 25.818,21 Punkte und beendete damit eine vier Handelstage andauernde Gewinnserie. Der Euro Stoxx 50 gab um 1,22 % (-75,60 Punkte) auf 6.131,31 Punkte nach; der europäische Technologiesektor verzeichnete mit -2,75 % laut Berichten seine schwächste Sitzung seit dem 7. Juli.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "fakt", text: "Bei deutschen Einzelwerten verloren Siemens Energy rund 7,1 % und Infineon rund 6,7 %, während Bayer um rund 4,7 % zulegte und den Index stützte." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 1,82 % (-140,32 Punkte) auf 7.580,07 Punkte – nach Berichten der schwächste Handelstag seit Juni und rund 3 % unter dem Rekordhoch von 7.818,93 Punkten vom 6.10.2026. Die Nasdaq Composite verlor 2,86 % (-747,73 Punkte) auf 25.437,00 Punkte, der Dow Jones 1,09 % (-572,25 Punkte) auf 51.770,31 Punkte.",
            ask: [{ label: "Mehr zu Amazon und Intel", ref: "s:13" }] },
          { tag: "fakt", text: "Der Volatilitätsindex VIX stieg um rund 12,9 % auf 19,42 Punkte, nach einer Tagesspanne zwischen 18,03 und 23,93 Punkten – ein deutlicher Anstieg der an den Optionsmärkten gemessenen Nervosität." }
        ]},
        { h: "Was löste den Ausverkauf aus?", items: [
          { tag: "fakt", text: "Die Intel-Aktie brach vorbörslich um bis zu 29 % ein, nachdem das Unternehmen eine schwache PC-Absatzprognose vorgelegt hatte; das löste einen breiten Ausverkauf bei Chip- und Technologiewerten aus.",
            ask: [{ label: "Mehr zu Amazon, Nvidia und CoreWeave", ref: "s:13" }] },
          { tag: "einordnung", text: "Zusammen mit den am Vorabend veröffentlichten, verfehlten Amazon-Quartalszahlen nährte der Intel-Kurssturz Zweifel daran, ob sich die hohen KI-Investitionen der großen Technologiekonzerne kurzfristig auszahlen; diese Sorge griff auch auf europäische Technologiewerte über." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX, Euro Stoxx 50 und die US-Indizes nach mehreren Gewinntagen am Freitag gleichzeitig und deutlich nachgaben, zeigt, wie stark die Marktstimmung derzeit von einzelnen Technologie-Quartalszahlen abhängt. Die Gold- und Bitcoin-Reaktion dazu findet sich in Meldung 3, die EZB-Entscheidung vom Vortag in Meldung 2. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die EZB-Entscheidung vom Vortag wird in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Hintergründe bei Amazon, Intel und Nvidia in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ad-hoc-news.de: Dax closes at 25,818.21 after four-day winning streak ends", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-closes-at-25-818-21-after-four-day-winning-streak-ends/70436736" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 falls 1.22 percent to 6,131.31 points", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-falls-1-22-percent-to-6-131-31-points/70436726" },
        { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq fall as Amazon, Intel lead AI sell-off", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-30-dow-sp-500-nasdaq-amazon-intel-ai-sell-off-191429143.html" },
        { title: "bbntimes.com: Dow Jones (DJIA) Falls to 51,770.31 Amid Tech-Led Selloff", url: "https://www.bbntimes.com/global-economy/dow-jones-djia-falls-to-51-770-31-amid-tech-led-selloff-and-weak-corporate-earnings-in-wall-street" },
        { title: "ms-aktuell.de: DAX, Bayer, Infineon – Marktüberblick 30.10.2026", url: "https://ms-aktuell.de/welt/dax-bayer-infineon-30-10-2026/" }
      ]
    },
    /* 2 WIRTSCHAFT: EZB/LAGARDE */
    {
      id: "ezb-leitzins-lagarde-ruecktritt-10-29", cats: ["economy", "markets"], when: "EZB-Entscheidung Do 29.10.2026, PK 14:45 MEZ",
      headline: "Die EZB lässt ihren Leitzins unverändert bei 2,50 %, Präsidentin Lagarde deutet eine mögliche Zinserhöhung im Dezember an und kündigt ihren vorzeitigen Rücktritt zum 7. Februar 2027 an",
      sec30: "Die EZB beließ ihren Leitzins am Donnerstag, 29.10., erwartungsgemäß unverändert: Einlagensatz 2,50 %, Hauptrefinanzierungssatz 2,65 %, Spitzenrefinanzierungssatz 2,90 %. Das traf die Erwartung einer Reuters-Umfrage, in der zuvor 70 von 73 befragten Ökonomen eine Pause vorhergesagt hatten. Auf der Pressekonferenz sprach Präsidentin Christine Lagarde von einem „data-dependent and meeting-by-meeting approach”, betonte aber: „the direction of travel is clear” – eine weitere Zinserhöhung im Dezember bleibe möglich, falls sich der Energiepreisschock auf andere Preise und Löhne übertrage. Kurz vor der Sitzung hatte Lagarde zudem ihren vorzeitigen Rücktritt zum 7. Februar 2027 angekündigt, rund acht Monate vor dem regulären Ende ihrer Amtszeit; als Begründung sagte sie, sie könne „nicht neutral bleiben” und wolle sich künftig freier äußern. Eine aktuellere Reuters-Umfrage sieht inzwischen 64 von 73 befragten Ökonomen bei einer Zinserhöhung im Dezember. Die Nominierungsfrist für die Schnabel-Nachfolge im EZB-Direktorium bleibt bei 27.11.2026.",
      blocks: [
        { h: "Was hat die EZB am Donnerstag entschieden?", items: [
          { tag: "fakt", text: "Die EZB beließ ihren Einlagensatz bei 2,50 %, den Hauptrefinanzierungssatz bei 2,65 % und den Spitzenrefinanzierungssatz bei 2,90 %. Die Entscheidung entsprach einer Reuters-Umfrage, nach der 70 von 73 befragten Ökonomen eine erneute Pause erwartet hatten.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was sagte Präsidentin Lagarde auf der Pressekonferenz?", items: [
          { tag: "position", text: "Lagarde beschrieb den Ansatz der EZB als „data-dependent and meeting-by-meeting”, ergänzte aber: „the direction of travel is clear” – eine weitere Zinserhöhung im Dezember sei möglich. Sie warnte vor einem möglichen Übergreifen des Energiepreisschocks auf andere Preise und Löhne, sah die Kernrate der Inflation aber bislang als stabil an." }
        ]},
        { h: "Welche Überraschung gab es bei Lagardes Amtszeit?", items: [
          { tag: "fakt", text: "Kurz vor der Sitzung kündigte Lagarde an, ihr Amt bereits zum 7. Februar 2027 abzugeben – rund acht Monate vor dem regulären Ende ihrer Amtszeit Ende Oktober 2027." },
          { tag: "position", text: "Als Begründung sagte Lagarde, sie könne „nicht neutral bleiben” und wolle sich künftig freier zu Themen äußern, die außerhalb des EZB-Mandats liegen." },
          { tag: "unbestaetigt", text: "Der vorzeitige Rücktritt überlagert nach Einschätzung von Beobachtern die laufende Debatte um die Schnabel-Nachfolge (Frist weiterhin 27.11.2026) und schafft faktisch eine größere Personalfrage für die EZB-Spitze 2027; als mögliche deutsche Kandidaten kursieren in Presseberichten unter anderem Markus Brunnermeier, Ulrike Malmendier und Jörg Kukies – offizielle Nominierungen liegen dazu nicht vor." }
        ]},
        { h: "Wie schätzen Ökonomen die Dezember-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Eine aktuellere Reuters-Umfrage sieht inzwischen 64 von 73 befragten Ökonomen (rund 90 %) bei einer Erhöhung im Dezember, da die Inflation in der Eurozone mit 3,8 % im September fast doppelt so hoch wie das 2-Prozent-Ziel der EZB liegt.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EZB im Oktober zwar pausiert, Lagarde aber bereits eine Dezember-Erhöhung andeutet und zugleich ihren vorzeitigen Rücktritt ankündigt, zeigt, dass sich geldpolitische und personelle Fragen an der EZB-Spitze derzeit überlagern. Die Marktreaktion auf die Entscheidung wird in Meldung 3 behandelt." }
        ]}
      ],
      reaction: "Die Marktreaktion (Euro, Gold, Bitcoin) wird in Meldung 3 behandelt, der Ausverkauf an den Aktienmärkten in Meldung 1.",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "EZB: Pressekonferenz – Monetary policy statement, 29.10.2026", url: "https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is261029~5c5ffe99e5.de.html" },
        { title: "CNBC: European Central Bank holds interest rates steady", url: "https://www.cnbc.com/2026/10/29/european-central-bank-interest-rates.html" },
        { title: "euronews DE: „Ich kann nicht neutral bleiben” – Lagarde erklärt frühen EZB-Abgang", url: "https://de.euronews.com/2026/10/29/ich-kann-nicht-neutral-bleiben-lagarde-erklart-fruhen-ezb-abgang" },
        { title: "finanzen.net: Mitteilung vor Zinsentscheid – vorzeitiger Abgang EZB-Präsidentin Lagarde gibt Amt zum 7. Februar 2027 ab", url: "https://www.finanzen.net/nachricht/aktien/mitteilung-vor-zinsentscheid-vorzeitiger-abgang-ezb-praesidentin-lagarde-gibt-amt-zum-7-februar-2027-ab-16018507" },
        { title: "finanzen.net: Lagarde deutet EZB-Zinsschritt im Dezember an", url: "https://www.finanzen.net/nachricht/aktien/lagarde-deutet-ezb-zinsschritt-im-dezember-an-16019107" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD */
    {
      id: "gold-bitcoin-eurusd-10-30", cats: ["markets"], when: "Stand Fr 30.10. bis Sa 31.10.2026 früh",
      headline: "Gold fällt erstmals seit rund einem Jahr unter die Marke von 4.000 Dollar, Bitcoin verzeichnet nach einem mutmaßlichen Hack bei Binance den schwächsten Oktober seit 2014, der Euro gewinnt nach Lagardes Dezember-Signal",
      sec30: "Gold fiel am Freitag um 0,9 % auf 3.985,03 Dollar je Feinunze und rutschte bis Samstagmorgen weiter auf rund 3.875 Dollar – damit erstmals seit rund einem Jahr unter die Marke von 4.000 Dollar. Bitcoin notierte in der Nacht zum Samstag bei rund 77.300 bis 77.400 Dollar, rund 7,7 % niedriger als zu Monatsbeginn und damit laut Berichten im schwächsten Oktober seit 2014; als zusätzlichen Belastungsfaktor nennen Berichte einen mutmaßlichen Hack bei der Kryptobörse Binance mit Liquidationen von rund 1,49 bis 1,67 Mrd. Dollar binnen 24 Stunden – unabhängig bestätigt ist dies nicht. Der Euro stieg dagegen: Der EZB-Referenzkurs lag am Freitag bei 1,1172 Dollar, nach rund 1,1130 Dollar am Donnerstag.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold fiel am Freitag um 0,9 % auf 3.985,03 Dollar je Feinunze und damit erstmals seit rund einem Jahr unter die psychologisch wichtige Marke von 4.000 Dollar; bis Samstagmorgen rutschte der Preis weiter auf rund 3.875 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte, dass Anleger im Zuge des Technologie-Ausverkaufs am Freitag (Meldung 1) verstärkt in Anleihen statt in Gold umschichteten – ungewöhnlich, da Gold in unsicheren Phasen sonst oft als Zufluchtsort gilt." }
        ]},
        { h: "Wie hat sich Bitcoin entwickelt?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte in der Nacht zum Samstag bei rund 77.300 bis 77.400 Dollar – ein Monatsminus von rund 7,7 % und laut Berichten der schwächste Oktober seit 2014.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "unbestaetigt", text: "Als zusätzlichen Belastungsfaktor nennen Berichte einen mutmaßlichen Hack bei der Kryptobörse Binance, der Liquidationen von rund 1,49 bis 1,67 Mrd. Dollar binnen 24 Stunden ausgelöst haben soll; eine unabhängige Bestätigung dieser Angaben liegt nicht vor." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs für den Euro stieg am Freitag auf 1,1172 Dollar, nach rund 1,1130 Dollar am Donnerstag.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte, dass EZB-Präsidentin Lagarde auf der Pressekonferenz am Donnerstag eine mögliche Zinserhöhung im Dezember andeutete, was den Euro stützte; mehr dazu in Meldung 2.",
            ask: [{ label: "Mehr zur EZB-Sitzung und Lagardes Rücktritt", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold und Bitcoin zeitgleich mit dem Technologie-Ausverkauf an den Aktienmärkten nachgeben, statt wie in früheren unsicheren Phasen zu profitieren, deutet darauf hin, dass Anleger ihr Geld derzeit eher in Anleihen als in alternative Wertspeicher umschichten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende EZB-Entscheidung wird in Meldung 2 behandelt, der Aktien-Ausverkauf in Meldung 1, der Ölpreis in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Goldreporter: Goldpreis heute – Marktbericht Gold, 30.10.2026", url: "https://goldreporter.de/goldpreis-30-10-2026/marktbericht-gold/262690" },
        { title: "finanzen.at: Gold und Silber fallen fast auf Jahrestief", url: "https://www.finanzen.at/nachrichten/rohstoffe/gold-und-silber-fallen-fast-auf-jahrestief-1036692298" },
        { title: "CoinDesk: Bitcoin price today", url: "https://www.coindesk.com/price/bitcoin" },
        { title: "CoinDesk: Live News – Binance hack rattles crypto as Intel plunges and AI spending fears hit tech", url: "https://www.coindesk.com/markets/2026/10/30/live-news-binance-hack-rattles-crypto-as-intel-plunges-and-ai-spending-fears-hit-tech" },
        { title: "finanzen.net: Devisen – Eurokurs gestiegen, EZB-Referenzkurs 1,1172 US-Dollar", url: "https://www.finanzen.net/nachricht/devisen/devisen-eurokurs-gestiegen-ezb-referenzkurs-1-1172-us-dollar-16023599" }
      ]
    },
    /* 4 WIRTSCHAFT: KONJUNKTURDATEN DE/FR */
    {
      id: "konjunktur-ifo-bip-frankreich-10-30", cats: ["economy", "germany", "world"], when: "Ifo 26.10. · GfK 29.10. · BIP Deutschland/Frankreich 30.10.2026",
      headline: "Der Ifo-Geschäftsklimaindex steigt zum sechsten Mal in Folge, das deutsche BIP wächst im dritten Quartal stärker als erwartet, Frankreichs Wirtschaft schrumpft leicht und der Risikoaufschlag zu Bundesanleihen steigt wieder",
      sec30: "Der Ifo-Geschäftsklimaindex stieg im Oktober zum sechsten Mal in Folge auf 90,2 Punkte, den höchsten Stand seit Frühjahr 2023; Ifo-Präsident Clemens Fuest sprach von einer Konjunkturbelebung, die sich fortsetze. Das GfK-Konsumklima für November fiel dagegen leicht auf -30,8 Punkte (Oktober: -30,6); die Konjunkturerwartungen der Verbraucher waren laut GfK erstmals seit Beginn des Iran-Kriegs wieder leicht positiv, Einkommenserwartungen und Sparneigung blieben aber ein Belastungsfaktor. Das deutsche Bruttoinlandsprodukt wuchs im dritten Quartal laut Destatis um 0,2 % gegenüber dem Vorquartal (erwartet: 0,1 %) und um 1,3 % gegenüber dem Vorjahr; der Konsum legte leicht zu, die Investitionen gingen zurück. In Frankreich schrumpfte das BIP im dritten Quartal laut INSEE dagegen um 0,1 %; der Risikoaufschlag zehnjähriger französischer Anleihen zu Bundesanleihen (OAT/Bund-Spread) stieg am Freitag wieder auf rund 159 bis 160 Basispunkte, nachdem er am Vortag kurzzeitig auf rund 153 bis 155 Basispunkte gefallen war.",
      blocks: [
        { h: "Wie entwickelt sich die Stimmung in der deutschen Wirtschaft?", items: [
          { tag: "fakt", text: "Der Ifo-Geschäftsklimaindex stieg im Oktober zum sechsten Mal in Folge auf 90,2 Punkte – der höchste Stand seit Frühjahr 2023; die Erwartungskomponente trieb den Anstieg, die Einschätzung der aktuellen Lage fiel dagegen leicht schwächer aus." },
          { tag: "position", text: "Ifo-Präsident Clemens Fuest sagte dazu laut Berichten: „Die Konjunkturbelebung setzt sich fort”, dämpfte aber zugleich die Hoffnung auf einen nachhaltigen Investitionsaufschwung." },
          { tag: "fakt", text: "Das GfK-Konsumklima für November fiel leicht auf -30,8 Punkte (Oktober: -30,6 Punkte). Die Konjunkturerwartungen der Verbraucher waren laut GfK-Experte Rolf Bürkl erstmals seit Beginn des Iran-Kriegs wieder leicht positiv (+2,1 Punkte), Einkommenserwartungen und eine erhöhte Sparneigung blieben aber ein Belastungsfaktor." }
        ]},
        { h: "Wie ist das deutsche BIP im dritten Quartal gewachsen?", items: [
          { tag: "fakt", text: "Das deutsche Bruttoinlandsprodukt wuchs im dritten Quartal 2026 laut Destatis um 0,2 % gegenüber dem Vorquartal (Erwartung: 0,1 %) und um 1,3 % gegenüber dem Vorjahresquartal. Der private Konsum legte leicht zu, die Investitionen gingen dagegen zurück, auch die Exportdynamik schwächte sich ab; ausführliche Zahlen veröffentlicht Destatis erst am 25.11." }
        ]},
        { h: "Wie ist die Lage in Frankreich?", items: [
          { tag: "fakt", text: "Frankreichs Bruttoinlandsprodukt schrumpfte im dritten Quartal laut der Statistikbehörde INSEE um 0,1 % gegenüber dem Vorquartal." },
          { tag: "unbestaetigt", text: "Der Risikoaufschlag zehnjähriger französischer Staatsanleihen (OAT) zu Bundesanleihen (OAT/Bund-Spread) war von einem Mehrjahreshoch von rund 178 Basispunkten (22.10.) bis zum 29.10. auf rund 153 bis 155 Basispunkte gefallen, stieg am Freitag, 30.10., aber laut Berichten wieder auf rund 159 bis 160 Basispunkte – getrieben unter anderem durch die schwachen BIP-Zahlen und die weiterhin ungelöste Haushaltslage.",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die deutsche Erwartungsstimmung und das BIP-Wachstum im dritten Quartal leicht positiver zeigen als erwartet, während Frankreichs Wirtschaft schrumpft und sein Risikoaufschlag zu Bundesanleihen wieder steigt, verdeutlicht ein weiterhin uneinheitliches Konjunkturbild innerhalb der Eurozone." }
        ]}
      ],
      reaction: "Der deutsche Bundeshaushalt wird in Meldung 5 behandelt, die EZB-Entscheidung in Meldung 2.",
      terms: ["basispunkt", "rendite"],
      followups: ["e:inflation-expectations", "e:debt-brake"],
      sources: [
        { title: "onvista/dpa: ROUNDUP – Ifo-Geschäftsklima steigt trotz hoher Energiepreise weiter", url: "https://www.onvista.de/news/2026/10-26-roundup-ifo-geschaeftsklima-steigt-trotz-hoher-energiepreise-weiter-0-10-26568315" },
        { title: "ad-hoc-news.de: Verbraucherstimmung bleibt im November bei -30,8 Punkten", url: "https://www.ad-hoc-news.de/politik/verbraucherstimmung-bleibt-im-november-bei-30-8-punkten/70424470" },
        { title: "Destatis: Bruttoinlandsprodukt im 3. Quartal 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_381_811.html" },
        { title: "Boursorama: France – le PIB a reculé de 0,1% au troisième trimestre selon l'INSEE", url: "https://www.boursorama.com/actualite-economique/actualites/france-le-pib-a-recule-de-0-1-au-troisieme-trimestre-selon-l-insee-35e4f698761dcf90a4658b15c05ccbe1" },
        { title: "ideal-investisseur.fr: OAT / Bund spread today", url: "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html" }
      ]
    },
    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-zeitplan-10-30", cats: ["germany", "economy"], when: "171. Steuerschätzung 22.10. · Bereinigungssitzung 12.11. · Bundestagsberatung 24.–27.11.2026",
      headline: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert, Finanzminister Klingbeil sieht durch die Steuerschätzung weder neuen Spielraum noch neue Lücken",
      sec30: "Finanzminister Lars Klingbeil (SPD) hatte am 22.10. die 171. Steuerschätzung vorgestellt: Für 2027 rechnet der Bund mit 4,1 Mrd. Euro Mehreinnahmen, für das laufende Jahr 2026 dagegen mit 3 Mrd. Euro weniger als zuvor erwartet; die gesamtstaatlichen Steuereinnahmen sollen 2027 erstmals die Marke von 1 Billion Euro übersteigen. Klingbeil sagte dazu, man gewinne „insgesamt keinen neuen finanziellen Spielraum”, müsse aber „auch keine neuen Lücken schließen”. Der Zeitplan für die Haushaltsberatungen 2027 bleibt unverändert: Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11.2026 angesetzt, die abschließende Beratung im Bundestagsplenum läuft vom 24. bis 27.11.2026.",
      blocks: [
        { h: "Was ergab die 171. Steuerschätzung vom 22.10.?", items: [
          { tag: "fakt", text: "Finanzminister Klingbeil stellte am 22.10. die 171. Steuerschätzung vor: Für 2027 rechnet der Bund mit Mehreinnahmen von 4,1 Mrd. Euro gegenüber der vorherigen Schätzung, für das laufende Jahr 2026 dagegen mit 3 Mrd. Euro weniger als zuvor erwartet. Die gesamtstaatlichen Steuereinnahmen sollen 2027 erstmals die Marke von 1 Billion Euro übersteigen.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] },
          { tag: "position", text: "Klingbeil sagte dazu: „Für 2027 gewinnen wir insgesamt keinen neuen finanziellen Spielraum, aber wir müssen auch keine neuen Lücken schließen.” Durch die etwas günstigere Wirtschaftslage könne der Bund laut Berichten zudem etwas weniger neue Schulden aufnehmen als ursprünglich von Klingbeil geplant." }
        ]},
        { h: "Wie ist der aktuelle Stand des Zeitplans?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses, bei der die Ergebnisse der Steuerschätzung final in den Gesetzentwurf eingearbeitet werden, ist weiterhin für den 12.11.2026 angesetzt; die abschließende Beratung im Bundestagsplenum läuft vom 24. bis 27.11.2026." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Steuerschätzung weder zusätzlichen Spielraum noch neue Deckungslücken für den Bund ergibt, während der Zeitplan für Bereinigungssitzung und Bundestagsberatung unverändert bleibt, deutet darauf hin, dass die eigentlichen politischen Streitpunkte des Haushalts 2027 unabhängig von der Steuerschätzung erst Mitte und Ende November entschieden werden." }
        ]}
      ],
      reaction: "Die Rente mit 63 und weitere Innenpolitik werden in Meldung 6 behandelt, die Konjunkturdaten in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Bundesfinanzministerium: Ergebnisse der 171. Steuerschätzung", url: "https://www.bundesfinanzministerium.de/Content/DE/Video/2026/2026-10-22-171-steuerschaetzung/2026-10-22-pressekonferenz.html" },
        { title: "t-online: Steuereinnahmen ziehen an, Lars Klingbeil sieht keine Etat-Entlastung", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101493330/steuereinnahmen-ziehen-an-lars-klingbeil-sieht-keine-etat-entlastung.html" },
        { title: "news.de: Steuerplus 2027 – Klingbeil mit deutlicher Botschaft an Merz", url: "https://www.news.de/politik/860119834/lars-klingbeil-steuerschaetzung-2027-4-1-milliarden-euro-mehr-finanzminister-haushaltsplanung-2027-steuereinnahmen-bund-2027/1/" },
        { title: "Deutscher Bundestag: Beratungen zum Bundeshaushalt 2027 fortgesetzt", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1225360" }
      ]
    },
    /* 6 DEUTSCHLAND: RENTE/UMFRAGEN/MERZ-ASIENREISE/BUNDESPRÄSIDENT */
    {
      id: "rente-umfragen-merz-asienreise-bundespraesident-10-30", cats: ["germany"], when: "Merz-Zitat 17.10. · Umfragen Ende Okt. · Asienreise-Abschluss 30.10. · Steinmeier-Nachfolge Stand 23.10.2026",
      headline: "Bei der Rente mit 63 bleiben Kanzler Merz und Arbeitsminister Schweitzer uneinig, Umfragen sehen die AfD unverändert deutlich vor der Union, Merz beendet seine Asienreise in Südkorea",
      sec30: "Beim Streit um die Rente mit 63 bleiben die Positionen unverändert: Kanzler Merz sagte am 17.10., er wolle die Reformvorschläge der Alterssicherungskommission „so umsetzen, wie sie auf dem Tisch liegen”, ergänzte aber „Es gibt auch für mich Grenzen”; Arbeitsminister Alexander Schweitzer (SPD) erklärte dagegen, „Kommissionsvorschläge sind Kommissionsvorschläge sind Kommissionsvorschläge”, und zeigte sich „zuversichtlich”, einen Kompromiss zu finden. Der ARD-DeutschlandTrend für Oktober sieht die AfD unverändert bei 27 % vor der Union (20 %, -1 Punkt, Tiefstwert seit September 2021); nur 10 % der Befragten sind laut der Umfrage mit der Arbeit der Koalition zufrieden. INSA (27.10.) sieht die AfD bei 29,5 % vor der Union (19,0 %), Forsa (26.10.) bei 27 % vor 21 %. Kanzler Merz beendete am 30.10. seine fünftägige Asienreise (Singapur, Japan, Südkorea) in Seoul, wo er Präsident Lee Jae-myung traf und an der demilitarisierten Zone zur Botschaft „Sicherheit ist nicht mehr teilbar” formulierte. Bei der Nachfolge von Bundespräsident Steinmeier gilt laut Berichten weiterhin CSU-Politikerin Ilse Aigner als aussichtsreichste Kandidatin, während die CDU laut Berichten einen eigenen Kandidaten oder eine eigene Kandidatin erwägt.",
      blocks: [
        { h: "Wie ist der Stand bei der Rente mit 63?", items: [
          { tag: "position", text: "Kanzler Merz sagte am 17.10., er wolle die Reformvorschläge der Alterssicherungskommission „so umsetzen, wie sie auf dem Tisch liegen”, fügte aber hinzu: „Es gibt auch für mich Grenzen.”",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Arbeitsminister Alexander Schweitzer (SPD) entgegnete, Kommissionsvorschläge seien „Kommissionsvorschläge sind Kommissionsvorschläge sind Kommissionsvorschläge”, und zeigte sich „zuversichtlich”, dass eine Einigung gelinge." },
          { tag: "unbestaetigt", text: "Widerstand gegen eine vollständige Abschaffung der Rente mit 63 kommt laut Berichten auch von mehreren ostdeutschen CDU-Landespolitikern; die SPD lehnt laut Berichterstattung über den Koalitionsausschuss vom 8.10. zudem eine „enge Härtefallregel” für die vorzeitige abschlagsfreie Rente ab. Ein fertiger gemeinsamer Gesetzentwurf lag zum Redaktionsschluss weiterhin nicht vor; er soll laut Zeitplan bis Jahresende 2026 kabinettsreif sein." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "Der ARD-DeutschlandTrend (Infratest dimap, Oktober) sieht die AfD unverändert bei 27 % als stärkste Kraft, die Union bei 20 % (-1 Punkt gegenüber September, der niedrigste Stand seit September 2021), SPD bei 13 %, Grüne bei 16 % (+1), Linke bei 11 %; nur 10 % der Befragten äußerten sich zufrieden mit der Arbeit der Koalition. INSA (27.10.) sieht die AfD bei 29,5 %, die Union bei 19,0 %; Forsa (26.10.) die AfD bei 27 %, die Union bei 21 %. Die Institute weichen vor allem bei Grünen und Union deutlich voneinander ab.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie ist der Stand bei Merz' Asienreise und der Bundespräsidenten-Nachfolge?", items: [
          { tag: "fakt", text: "Kanzler Merz beendete am 30.10. seine fünftägige Reise durch Singapur, Japan und Südkorea; in Seoul traf er Präsident Lee Jae-myung, besuchte die demilitarisierte Zone zur Grenze Nordkoreas und formulierte dort die Botschaft „Sicherheit ist nicht mehr teilbar”. Bei einer Wirtschaftskonferenz warb er zudem für eine engere Zusammenarbeit mit ASEAN-Staaten und regelbasierten Handel; japanische und südkoreanische Gesprächspartner äußerten laut Berichten Sorgen, das geplante EU-„Industrial Accelerator Act” könne protektionistisch auf die Automobilindustrie wirken." },
          { tag: "unbestaetigt", text: "Für die Nachfolge von Bundespräsident Steinmeier (Wahl durch die Bundesversammlung am 30.1.2027) gilt laut Berichten CSU-Politikerin und bayerische Landtagspräsidentin Ilse Aigner weiterhin als aussichtsreichste Kandidatin mit überparteilicher Unterstützung aus SPD und Grünen; die CDU erwägt laut Berichten, einen eigenen Kandidaten oder eine eigene Kandidatin zu benennen, genannt werden unter anderem Julia Klöckner, Karin Prien und Ines Claus. Eine Einigung wird von einzelnen Quellen für den 9.11. erwartet, offiziell bestätigt ist dies nicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei der Rente mit 63 weiterhin kein fertiger Gesetzentwurf vorliegt, während Umfragen unverändert keine Mehrheit für die aktuelle Koalition zeigen und der Kanzler zugleich seine Asienreise abschließt, deutet auf anhaltende innenpolitische Unsicherheit hin, auch wenn der Zeitplan für eine Einigung bis Jahresende formal weiterbesteht." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority"],
      sources: [
        { title: "t-online: Rente mit 63 vor dem Aus? Merz widerspricht neuem Arbeitsminister klar", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101485570/rente-mit-63-merz-widerspricht-neuem-arbeitsminister-deutlich.html" },
        { title: "cash-online: Rente mit 63 – Arbeitsminister Schweitzer sucht Kompromiss im Streit um Reform", url: "https://www.cash-online.de/a/rente-mit-63-arbeitsminister-schweitzer-sucht-kompromiss-im-streit-um-reform-727896/" },
        { title: "Infratest dimap: ARD-DeutschlandTrend Oktober 2026", url: "https://www.infratest-dimap.de/umfragen-analysen/bundesweit/ard-deutschlandtrend/2026/oktober/" },
        { title: "ZDFheute: Merz in Asien – Was von der Reise des Kanzlers bleibt", url: "https://www.zdfheute.de/politik/merz-asien-reise-fazit-suedkorea-japan-singapur-fazit-100.html" },
        { title: "ZDFheute: Wird es erstmals eine Bundespräsidentin geben? Die CSU drängt auf Nominierung von Ilse Aigner", url: "https://www.zdfheute.de/politik/koalition-merz-cdu-bundespraesident-aigner-csu-100.html" }
      ]
    },
    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-dnipro-abu-dhabi-10-30", cats: ["world", "geo"], when: "Angriff auf Dnipro Nacht 28./29.10. · Aussagen Selenskyj/Uschakow 29.10.2026",
      headline: "Nach dem russischen Drohnenangriff auf einen Bahnhof in Dnipro bleibt der Termin für das geplante Dreiertreffen in Abu Dhabi weiter offen",
      sec30: "Nach dem russischen Drohnenangriff auf den Bahnhof in Dnipro in der Nacht zum 29.10. schwanken die Opferzahlen je nach Quelle zwischen 13 und 15 Toten; Präsident Selenskyj nannte den Angriff „entsetzlich” und forderte „faire und entschiedene Maßnahmen Amerikas und Europas”. An der Front bei Pokrowsk und Kostjantyniwka meldete die ukrainische Armee am 30.10. 173 Gefechte binnen eines Tages, die nach ukrainischen Angaben heftigsten der laufenden Kämpfe. Beim geplanten Dreiertreffen in Abu Dhabi bleibt der Termin offen: Präsident Selenskyj sagte am 29.10., er hoffe auf ein Treffen zwischen dem 6. und 10. November, betonte aber, dies hänge „von der US-Seite ab”; Kreml-Berater Juri Uschakow bekräftigte dagegen, die Gespräche würden erst nach dem 4. November stattfinden – dem Tag der US-Zwischenwahlen – abhängig „auch von der Lage an der Front”. Präsident Trump hatte zuvor ein baldiges Treffen zwischen Selenskyj und Putin angekündigt, ohne Format oder Datum zu nennen.",
      blocks: [
        { h: "Welcher Angriff ereignete sich in der Nacht zum 29.10.?", items: [
          { tag: "unbestaetigt", text: "Eine russische Drohne traf den Bahnhof in Dnipro, an dem ein Zug nach Saporischschja bereitstand; die Opferzahlen schwanken je nach Quelle zwischen 13 und 15 Toten, darunter laut Berichten ein 11-jähriger Junge, sowie rund 14 Verletzte." },
          { tag: "position", text: "Präsident Selenskyj nannte den Angriff „entsetzlich” und forderte „faire und entschiedene Maßnahmen Amerikas und Europas gegen die russische Eskalation”." }
        ]},
        { h: "Wie ist die Lage an der Front?", items: [
          { tag: "unbestaetigt", text: "Die ukrainische Armee meldete für den 30.10. im Raum Pokrowsk und Kostjantyniwka 173 Gefechte binnen eines Tages sowie 75 russische Luftangriffe mit 255 Gleitbomben – nach ukrainischen Angaben die heftigsten Kämpfe der laufenden Frontabschnitte; unabhängig bestätigte Zahlen dazu liegen nicht vor." }
        ]},
        { h: "Wie ist der Stand bei den geplanten Verhandlungen in Abu Dhabi?", items: [
          { tag: "position", text: "Präsident Selenskyj sagte am 29.10., er hoffe auf ein Dreiertreffen zwischen dem 6. und 10. November, betonte aber, dies hänge „von der US-Seite ab”.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "position", text: "Kreml-Berater Juri Uschakow bekräftigte dagegen am 29.10., die Gespräche würden erst nach dem 4. November stattfinden – dem Tag der US-Zwischenwahlen –, abhängig „auch von der Lage an der Front und der generellen Situation”; er dementierte Berichte über ein Treffen bereits am 4.11. und schloss eine europäische Beteiligung erneut aus." },
          { tag: "unbestaetigt", text: "Präsident Trump hatte zuvor ein baldiges Treffen zwischen Selenskyj und Putin angekündigt, ohne Format oder Datum zu nennen; dies wurde von Kyjiw und Moskau nicht in dieser Form offiziell bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Russland und die Ukraine weiterhin unterschiedliche Zeitfenster für mögliche Gespräche in Abu Dhabi nennen und Uschakow den russischen Zeitplan ausdrücklich mit der Lage an der Front verknüpft, zeigt, dass militärisches Geschehen und diplomatische Ankündigungen weiterhin eng miteinander verbunden bleiben, ohne dass ein konkreter Termin feststeht." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, weitere internationale Entwicklungen in Meldung 15.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "Meduza: Russian drone strikes train station in Ukraine's Dnipro, killing at least 13", url: "https://meduza.io/en/news/2026/10/29/russian-drone-strikes-train-station-in-ukraine-s-dnipro-killing-at-least-13" },
        { title: "Euronews: At least 13 killed, several injured in Russian drone strike on Ukrainian railway station", url: "https://www.euronews.com/2026/10/29/at-least-13-killed-several-injured-in-russian-drone-strike-on-ukrainian-railway-station" },
        { title: "Meduza: Kremlin says U.S.-Russia-Ukraine peace talks will take place in Abu Dhabi after November 4", url: "https://meduza.io/en/news/2026/10/29/kremlin-says-u-s-russia-ukraine-peace-talks-will-take-place-in-abu-dhabi-after-november-4-depending-on-battlefield-conditions" },
        { title: "Ukrinform: Zelensky – Ukraine hopes to hold trilateral meeting in Abu Dhabi by Nov 10", url: "https://www.ukrinform.net/rubric-polytics/4179077-zelensky-ukraine-hopes-to-hold-trilateral-meeting-in-abu-dhabi-by-nov-10.html" },
        { title: "Ukrinform: War update – 173 clashes on front line over past day", url: "https://www.ukrinform.net/rubric-ato/4179959-war-update-173-clashes-on-front-line-over-past-day-fiercest-fighting-in-pokrovsk-kostiantynivka-sectors.html" }
      ]
    },
    /* 8 GEOPOLITIK/ENERGIE: GOLF/HORMUZ/IRAN */
    {
      id: "golf-hormuz-tanker-diplomatie-10-30", cats: ["geo", "energy"], when: "IRGC-Meldungen Tanker 30.10. · katarische Vermittlung 30.10. · Berichte über Verhandlungsentwurf 30./31.10.2026",
      headline: "Irans Revolutionsgarde meldet mehrere brennende Tanker in der Straße von Hormus, katarische Vermittler reisen zugleich erneut nach Teheran, um ein US-Iran-Abkommen wiederzubeleben",
      sec30: "Nach Angaben der iranischen Revolutionsgarde (IRGC) sollen am 30.10. zwei bis vier Tanker auf „nicht autorisierten” Routen in der Straße von Hormus auf Minen gelaufen oder in Brand geraten sein; die Angaben schwanken je nach Quelle und sind nicht unabhängig bestätigt, das US-Kommando CENTCOM dementierte laut Berichten sogar eine IRGC-Präsenz in der Meerenge. Oman rettete 25 Besatzungsmitglieder von einem brennenden Rohöltanker, ein Tanker mit 27 indischen Seeleuten wurde laut indischer Regierung mit Magnetminen angegriffen; alle Besatzungsmitglieder seien in Sicherheit. Der Schiffsverkehr durch die Straße von Hormus bleibt mit nur 2 Transits am 25.10. (gegenüber normalerweise rund 85 pro Tag) weiterhin stark eingeschränkt. Gleichzeitig reisten katarische Vermittler laut Al Jazeera am 30.10. erneut nach Teheran, um ein Waffenstillstandsabkommen zwischen den USA und Iran wiederzubeleben, und übergaben einen Brief von US-Vizepräsident Vance; laut mehreren Berichten sieht ein diskutierter Entwurf einen Transfer des iranischen Uran-Vorrats an ein Drittland, eine Wiedereröffnung der Straße von Hormus binnen sieben Tagen und finanzielle Anreize für Teheran vor – offiziell bestätigt ist dieser Entwurf nicht.",
      blocks: [
        { h: "Was wird zu Tanker-Zwischenfällen in der Straße von Hormus berichtet?", items: [
          { tag: "unbestaetigt", text: "Die iranische Revolutionsgarde (IRGC) meldete am 30.10., zwei bis vier Tanker seien auf „nicht autorisierten” Routen in der Straße von Hormus auf Minen gelaufen oder in Brand geraten; die genaue Zahl schwankt je nach Quelle. Das US-Kommando CENTCOM dementierte laut Berichten sogar eine IRGC-Präsenz in der Meerenge zum fraglichen Zeitpunkt – eine unabhängige Bestätigung der Vorfälle liegt nicht vor.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Oman rettete nach eigenen Angaben 25 Besatzungsmitglieder von einem brennenden Rohöltanker; ein weiterer Tanker mit 27 indischen Seeleuten wurde laut indischer Regierung mit Magnetminen angegriffen, alle Besatzungsmitglieder seien den Angaben zufolge in Sicherheit." },
          { tag: "unbestaetigt", text: "Der Schiffsverkehr durch die Straße von Hormus bleibt laut Schiffsverkehrsdaten mit nur 2 Transits am 25.10. gegenüber normalerweise rund 85 pro Tag weiterhin stark eingeschränkt." }
        ]},
        { h: "Welche diplomatischen Bemühungen gibt es?", items: [
          { tag: "fakt", text: "Katarische Vermittler reisten laut Al Jazeera am 30.10. erneut nach Teheran, um ein Waffenstillstandsabkommen zwischen den USA und Iran wiederzubeleben, und übergaben dabei einen Brief von US-Vizepräsident Vance." },
          { tag: "unbestaetigt", text: "Mehrere Berichte beschreiben einen diskutierten Verhandlungsentwurf, der einen Transfer des iranischen Uran-Vorrats an ein Drittland oder eine Reduzierung des Anreicherungsgrads, eine Wiedereröffnung der Straße von Hormus binnen sieben Tagen sowie finanzielle Anreize für Teheran vorsehen soll, wobei China laut Berichten als möglicher Garant fungieren könnte. Dieser Entwurf ist bislang nicht offiziell von einer der beteiligten Regierungen bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass iranische Stellen weiterhin Tanker-Zwischenfälle in der Straße von Hormus melden, während gleichzeitig über einen möglichen Verhandlungsentwurf mit konkreten Zugeständnissen berichtet wird, zeigt, wie eng militärische Eskalation und diplomatische Vermittlungsversuche am Golf derzeit nebeneinander verlaufen; der Ölpreis (Meldung 14) bewegte sich entsprechend volatil.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis im Detail in Meldung 14.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "Euronews: Iran's Revolutionary Guard reports tankers on fire in Strait of Hormuz as talks continue", url: "https://www.euronews.com/2026/10/30/irans-revolutionary-guard-reports-two-tankers-on-fire-in-strait-of-hormuz-as-talks-continu" },
        { title: "CNBC: Iran claims four tankers struck mines in Hormuz as strike fears grow", url: "https://www.cnbc.com/2026/10/30/iran-trump-hormuz-oil-middle-east-.html" },
        { title: "Al Jazeera: Qatari officials in Iran in bid to revive ceasefire deal with US", url: "https://www.aljazeera.com/news/2026/10/30/qatari-officials-in-iran-in-bid-to-revive-ceasefire-deal-with-us" },
        { title: "Business Standard: US-Iran draft proposes uranium transfer, reopening Hormuz within 7 days", url: "https://www.business-standard.com/world-news/us-iran-draft-proposes-uranium-transfer-reopening-hormuz-within-7-days-126103100083_1.html" }
      ]
    },
    /* 9 DEFENCE: RHEINMETALL/ARMINIUS */
    {
      id: "rheinmetall-arminius-analysten-10-30", cats: ["defence"], when: "Kurs Fr 30.10. · Arminius-Befassung 9.12. · Q3-Zahlen 5.11.2026",
      headline: "Die Rheinmetall-Aktie schließt am Freitag praktisch unverändert, UBS und Citi senken ihre Kursziele, der Arminius-Vertrag für Boxer-Radpanzer soll nach parlamentarischer Befassung im Dezember unterschrieben werden",
      sec30: "Die Rheinmetall-Aktie schloss am Freitag, 30.10., mit -1,01 % bei 1.037,60 Euro – praktisch unverändert zum Donnerstagsniveau; der Rückgang am Nachmittag erfolgte laut Berichten ohne erkennbare unternehmensspezifische Meldung, auch RENK, Hensoldt und TKMS gaben zeitgleich nach. UBS senkte ihr Kursziel von 1.600 auf 1.360 Euro (Kaufen bestätigt), Citi bestätigte ihre Kaufempfehlung mit Kursziel 1.408 Euro und verweist auf den Arminius-Auftrag als Kurstreiber; der Analystenkonsens liegt bei rund 1.500 Euro. Beim Arminius-Programm (rund 1.800 Boxer-Radpanzer) bleibt die parlamentarische Befassung im Haushaltsausschuss und Bundestag für den 9.12.2026 angesetzt, der Festauftrag über rund 25 Mrd. Euro soll danach unterschrieben werden; bei vollem Rahmenvertrag inklusive zwei Optionen könnte das Volumen auf bis zu 75 Mrd. Euro steigen. Die Rheinmetall-Q3-Zahlen bleiben für den 5.11.2026 terminiert.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt, und wie reagieren Analysten?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie schloss am Freitag mit -1,01 % bei 1.037,60 Euro – praktisch unverändert zum Donnerstagsniveau von rund 1.036 Euro. Der Rückgang am Nachmittag erfolgte laut Berichten ohne erkennbare unternehmensspezifische Meldung; RENK, Hensoldt und TKMS gaben zeitgleich ebenfalls nach.",
            ask: [{ label: "Mehr zum DAX-Verlauf", ref: "n:dax" }] },
          { tag: "position", text: "UBS senkte ihr Kursziel von 1.600 auf 1.360 Euro, bestätigte aber die Kaufempfehlung; Citi bestätigte ebenfalls „Kaufen” mit einem Kursziel von 1.408 Euro und verweist dabei insbesondere auf den Arminius-Auftrag als Kurstreiber. Morningstar-Analystin Loredana Muharremi sieht einen fairen Wert von 2.380 Euro – deutlich optimistischer als der übrige Analystenkonsens von rund 1.500 Euro (7 Kaufen, 2 Halten, 0 Verkaufen)." }
        ]},
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Der Festauftrag über rund 25 Mrd. Euro für rund 1.800 Boxer-Radpanzer soll nach der parlamentarischen Befassung im Haushaltsausschuss und Bundestag am 9.12.2026 unterschrieben werden; Rheinmetalls Anteil über die Beteiligungsgesellschaft ARTEC (50:50 mit KNDS Deutschland) wird auf rund 12,4 Mrd. Euro geschätzt. Bei vollem Rahmenvertrag inklusive zwei Optionen (Lieferzeitraum 2030 bis 2035, Flotte dann rund 5.500 Fahrzeuge) könnte das Gesamtvolumen laut Berichten auf bis zu 75 Mrd. Euro steigen.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Die Rheinmetall-Quartalszahlen für das dritte Quartal bleiben für den 5.11.2026 terminiert." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Rheinmetall-Aktie am Freitag kaum bewegte, während Analysten vor den Q3-Zahlen am 5.11. ihre Kursziele teils deutlich senken, aber überwiegend an Kaufempfehlungen festhalten, zeigt, dass der erwartete Arminius-Großauftrag die Bewertung weiterhin stützt, auch wenn noch kein finaler Vertrag unterschrieben ist. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "US-Rüstungskonzerne und Hensoldt/RENK werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "finanzen.net: Rheinmetall Aktie – Kursbewegung 30.10.2026", url: "https://www.finanzen.net/nachricht/aktien/rheinmetall-aktie-kursbewegung-30-10-2026-11210138" },
        { title: "hartpunkt.de: Arminius ante portas – Großvertrag für Boxer-Radpanzer soll im Dezember geschlossen werden", url: "https://www.hartpunkt.de/arminius-ante-portas-grossvertrag-fuer-boxer-radpanzer-soll-im-dezember-geschlossen-werden/" },
        { title: "boerse-express.com: Rheinmetall Aktie – UBS nimmt das Kursziel auf 1.360 Euro zurück", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-ubs-nimmt-das-kursziel-auf-1360-euro-zurueck-957577" },
        { title: "boerse-express.com: Rheinmetall Aktie – Citi setzt auf den Arminius-Auftrag", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-citi-setzt-auf-den-arminius-auftrag-957413" }
      ]
    },
    /* 10 DEFENCE: US-RÜSTUNGSKONZERNE/HENSOLDT/RENK */
    {
      id: "us-ruestungskonzerne-hensoldt-renk-10-30", cats: ["defence"], when: "General Dynamics Q3 30.10. · Kurse Hensoldt/RENK Fr 30.10. · Lockheed-Aufträge Okt. 2026",
      headline: "General Dynamics übertrifft mit seinen Q3-Zahlen die Erwartungen deutlich, Lockheed Martin hebt den Jahresausblick an, Hensoldt fällt nach Problemen im Ersatzteil-Logistikzentrum, RENK bleibt vor den Q3-Zahlen unter Druck",
      sec30: "General Dynamics meldete am 30.10. einen Umsatz von 14,6 Mrd. Dollar (+12,9 % zum Vorjahr, rund 6 % über Konsens) und ein Ergebnis je Aktie von 4,49 Dollar (+15,7 %, rund 9 % über Konsens), bei einem außergewöhnlich hohen Book-to-Bill-Verhältnis von 6,8 zu 1 und einem Gesamtauftragsbestand von 220,3 Mrd. Dollar. Lockheed Martin hob seinen Jahresausblick 2026 auf ein bereinigtes Ergebnis je Aktie von 30,35 bis 30,75 Dollar an und erhielt von der US-Armee einen Auftrag für das „Future Interceptor Program” gegen Hyperschallraketen und Drohnen. Bei den europäischen Zulieferern fiel die Hensoldt-Aktie am Freitag um rund 2,1 bis 2,3 % auf etwa 85,6 bis 85,8 Euro, nachdem Softwareprobleme im ZEBEL-Logistikzentrum Ersatzteillieferungen an die Bundeswehr erheblich beeinträchtigt hatten; ein Analyst senkte sein Kursziel daraufhin von 62 auf 60 Euro und bekräftigte eine Verkaufsempfehlung. RENK notierte ebenfalls schwächer, nachdem die DZ Bank bereits am 23.10. ihren fairen Wert von 64 auf 56 Euro gesenkt hatte; die RENK-Q3-Zahlen sind für den 5.11. terminiert.",
      blocks: [
        { h: "Wie entwickelten sich General Dynamics und Lockheed Martin?", items: [
          { tag: "fakt", text: "General Dynamics meldete für das dritte Quartal einen Umsatz von 14,6 Mrd. Dollar (+12,9 % zum Vorjahr, rund 6 % über Konsens) und ein verwässertes Ergebnis je Aktie von 4,49 Dollar (+15,7 %, rund 9 % über Konsens); das Book-to-Bill-Verhältnis lag bei außergewöhnlich hohen 6,8 zu 1, der Gesamtauftragsbestand bei 220,3 Mrd. Dollar.",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:9" }] },
          { tag: "fakt", text: "Lockheed Martin hob seinen Jahresausblick 2026 auf ein bereinigtes Ergebnis je Aktie von 30,35 bis 30,75 Dollar an (zuvor 29,95 bis 30,65 Dollar) und erhielt von der US-Armee einen Auftrag für das „Future Interceptor Program” zur Entwicklung eines Abfangsystems gegen Hyperschallraketen und Drohnen, mit angestrebter Einsatzbereitschaft bis 2031." }
        ]},
        { h: "Wie entwickelten sich Hensoldt und RENK?", items: [
          { tag: "unbestaetigt", text: "Die Hensoldt-Aktie fiel am Freitag um rund 2,1 bis 2,3 % auf etwa 85,6 bis 85,8 Euro, nachdem Softwareprobleme im ZEBEL-Logistikzentrum Ersatzteillieferungen an die Bundeswehr erheblich beeinträchtigt hatten und eine zuvor erwartete Prognoseanhebung für 2026 damit fraglich wurde; ein Analyst senkte sein Kursziel daraufhin von 62 auf 60 Euro und bekräftigte eine Verkaufsempfehlung, während die Deutsche Bank ihr Kursziel von 105 Euro zuletzt nicht angepasst hatte.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Nachrichten?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "RENK notierte am Freitag ebenfalls schwächer; die DZ Bank hatte ihren fairen Wert bereits am 23.10. von 64 auf 56 Euro gesenkt (Kaufen bestätigt), mit Verweis auf den Verkauf des Gleitlager-Geschäfts an den österreichischen Zulieferer Miba als Teil der angekündigten Fokussierung auf das Defence-Geschäft. Die RENK-Q3-Zahlen sind für den 5.11.2026 terminiert, zeitgleich mit der Rüstungsmesse Euronaval in Paris." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass US-Rüstungskonzerne wie General Dynamics und Lockheed Martin weiterhin deutlich über den Erwartungen liegende Zahlen und Aufträge melden, während die europäischen Zulieferer Hensoldt und RENK mit unternehmensspezifischen Problemen beziehungsweise einem Geschäftsverkauf zu kämpfen haben, zeigt, dass der allgemeine Rüstungsboom nicht automatisch jedes einzelne Unternehmen in der Lieferkette gleich begünstigt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Rheinmetall und das Arminius-Programm werden in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "General Dynamics: Reports Third-Quarter 2026 Financial Results", url: "https://investorrelations.gd.com/news/press-release-details/2026/General-Dynamics-Reports-Third-Quarter-2026-Financial-Results/default.aspx" },
        { title: "Bloomberg: Lockheed Martin Raises Outlook on Robust Demand for Missiles", url: "https://www.bloomberg.com/news/articles/2026-10-22/lockheed-martin-raises-outlook-on-robust-demand-for-missiles" },
        { title: "defensescoop.com: Army selects Lockheed Martin for billion-dollar Future Interceptor program", url: "https://defensescoop.com/2026/10/29/army-selects-lockheed-martin-future-interceptor-program" },
        { title: "finanzen.net: HENSOLDT Aktie News – HENSOLDT verliert am Freitagnachmittag", url: "https://www.finanzen.net/nachricht/aktien/hensoldt-aktie-kursbewegung-30-10-2026-12160256" },
        { title: "boerse-express.com: Renk Group Aktie – DZ Bank kappt fairen Wert auf 56 Euro", url: "https://www.boerse-express.com/news/articles/renk-group-aktie-dz-bank-kappt-fairen-wert-auf-56-euro-957625" }
      ]
    },
    /* 11 DEALS: BASF/EVONIK, EQT/QIAGEN, TESLA/SPACEX */
    {
      id: "deals-basf-evonik-qiagen-teslaspacex-10-30", cats: ["deals", "pe"], when: "BASF-Angebot/Evonik-Ablehnung Ende Okt. · EQT/Qiagen-Aktionärsreaktion Okt. · Tesla/SpaceX-Berichte 26.–31.10.2026",
      headline: "BASF soll sein Angebot für Evonik laut Berichten auf 24 Euro je Aktie erhöht haben, Evonik lehnt Verhandlungen darüber ab, bei Tesla und SpaceX bleibt eine mögliche Fusion weiterhin reine Spekulation",
      sec30: "BASF soll laut Reuters und Handelsblatt sein Angebot für Evonik von ursprünglich 22,15 auf 24,00 Euro je Aktie (rund 11 Mrd. Euro) erhöht haben; eine Zahl nennt die offizielle Mitteilung nicht, bestätigt hat den Preis bislang keiner der beiden Konzerne. Der Evonik-Vorstand hat das Schreiben nach eigenen Angaben „eingehend geprüft” und sich entschieden, nicht in Verhandlungen einzutreten, lässt aber vertrauliche Gespräche zu. Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, äußerte sich weiterhin nicht öffentlich zu dem Angebot. Beim bereits besiegelten EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) halten mehrere Investoren den Aufschlag für zu niedrig und fordern höhere Preise; Barclays stufte die Aktie von „Overweight” auf „Equal-weight” herab. Bei Tesla und SpaceX bleibt eine mögliche Fusion weiterhin ergebnisoffen und unbestätigt: Elon Musk hatte bereits Ende Oktober gesagt, eine Fusion sei „keineswegs sicher”, neue Berichte diskutieren seither vor allem mögliche strategische Vorteile einer gemeinsamen Chipfertigung sowie ein mögliches chinesisches Blockadepotenzial wegen Teslas Werk in Shanghai.",
      blocks: [
        { h: "Was ist der neue Stand bei BASF/Evonik?", items: [
          { tag: "unbestaetigt", text: "BASF soll laut Reuters und Handelsblatt sein Angebot für Evonik von ursprünglich 22,15 auf 24,00 Euro je Aktie (rund 11 Mrd. Euro) erhöht haben; eine Zahl nennt die offizielle Mitteilung nicht, bestätigt hat den Preis von 24 Euro bislang keiner der beiden Konzerne.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "fakt", text: "Der Evonik-Vorstand hat das BASF-Schreiben nach eigenen Angaben „eingehend geprüft” und sich entschieden, nicht in Verhandlungen über das Angebot einzutreten; man habe sich stattdessen auf vertrauliche Gespräche verständigt, in denen Evonik seine Position erläutern und BASF seine Motive darlegen könne." },
          { tag: "unbestaetigt", text: "Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, äußerte sich weiterhin nicht öffentlich zu dem kursierenden Angebot; ein Sprecher erklärte lediglich, die Inhalte und Ergebnisse interner Beratungen seien vertraulich." }
        ]},
        { h: "Wie ist der Stand beim EQT-Kauf von Qiagen?", items: [
          { tag: "fakt", text: "Qiagen hatte bereits Ende Oktober definitiv einer Übernahme durch ein EQT-Konsortium zugestimmt: 46,50 Euro je Aktie in bar, Gesamtwert rund 10,8 Mrd. Euro; Vorstand und Aufsichtsrat unterstützen das Angebot einstimmig.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "unbestaetigt", text: "Mehrere Investoren halten den gebotenen Aufschlag auf den Kurs vor Bekanntwerden des Deals für zu niedrig und fordern höhere Preise bis zu 65 bis 70 Euro je Aktie; Barclays stufte die Aktie von „Overweight” auf „Equal-weight” herab, während Citigroup ihr Kursziel anhob. Ein Squeeze-out soll im kommenden Jahr auf einer außerordentlichen Hauptversammlung beschlossen werden, das Closing bleibt bis Mitte 2027 geplant." }
        ]},
        { h: "Wie ist der Stand bei Tesla und SpaceX?", items: [
          { tag: "unbestaetigt", text: "Beide Unternehmen haben unabhängige Sonderausschüsse zur Prüfung einer möglichen Fusion eingesetzt; Elon Musk hatte selbst gesagt, ein Zusammenschluss sei „keineswegs sicher”. Neuere Berichte diskutieren als mögliche strategische Logik unter anderem eine gemeinsame Halbleiterfertigung für künftige Tesla- und SpaceX-Produkte sowie – als Gegenargument – ein mögliches Blockadepotenzial durch China, da Teslas Werk in Shanghai für rund die Hälfte der globalen Fahrzeugproduktion steht und im Fusionsfall unter einem großen US-Verteidigungszulieferer stehen würde. Eine verbindliche Entscheidung, Konditionen oder ein Preis liegen weiterhin nicht vor.",
            ask: [{ label: "Mehr zum Private-Credit-Markt", ref: "s:12" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Evonik ein offenbar erhöhtes BASF-Angebot formell ablehnt, aber vertrauliche Gespräche zulässt, während beim bereits besiegelten EQT-Kauf von Qiagen einzelne Investoren den Preis für zu niedrig halten und bei Tesla/SpaceX weiterhin jede Festlegung fehlt, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "rund 11 Mrd. € (BASF/Evonik, weiterhin unbestätigt) · rund 10,8 Mrd. € (EQT/Qiagen, bestätigt)", buyer: "BASF · EQT-Konsortium", target: "Evonik · Qiagen", sector: "Chemie / Biotech-Diagnostik", type: "Unternehmensübernahme (BASF/Evonik weiterhin unbestätigt; Finanzierung, Bewertung und Banken für dieses mögliche Angebot nicht in den Quellen genannt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "goldesel.de: BASF Aktie – Deutsche Bank senkt auf Hold, Evonik-Offerte bei 24 Euro unbestätigt", url: "https://goldesel.de/aktien/news/basf-aktie-deutsche-bank-senkt-auf-hold-evonik-offerte-bei-24-euro-unbestatigt" },
        { title: "finanznachrichten.de: 24 Euro je Aktie – BASF legt bei Evonik nach", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69921536-24-euro-je-aktie-basf-legt-bei-evonik-nach-088.htm" },
        { title: "t-online: RAG-Stiftung berät über BASF-Übernahmepläne für Evonik", url: "https://www.t-online.de/finanzen/boerse/ticker/rag-stiftung-beraet-ueber-basf-uebernahmeplaene-fuer-evonik/0DBA92006A1EA271/" },
        { title: "wallstreet-online.de: EQT bietet 46,50 Euro für Qiagen – reicht das den Aktionären?", url: "https://www.wallstreet-online.de/nachricht/21577060-eqt-46-50-euro-qiagen-reicht-aktionaeren" },
        { title: "CNBC: Buy Tesla ahead of potential SpaceX merger, says Barclays", url: "https://www.cnbc.com/2026/10/26/tesla-spacex-merger-barclays.html" }
      ]
    },
    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-entspannung-bcred-blueowl-ares-10-30", cats: ["credit", "pe"], when: "Q3-Rücknahmezahlen Blue Owl/Apollo/Ares Okt. 2026",
      headline: "Rücknahmewünsche bei großen Private-Credit-Fonds gehen im dritten Quartal überwiegend leicht zurück, beim spezialisierten Blue-Owl-Technologiefonds OTIC bleiben sie dagegen auf Rekordniveau",
      sec30: "Bei mehreren großen Private-Credit-Fonds ist der Rücknahmedruck im dritten Quartal 2026 leicht zurückgegangen: Beim Blue-Owl-Flaggschifffonds OBDC sanken die Rücknahmewünsche das zweite Quartal in Folge auf 16,8 % (von 18,8 %); beim Apollo Debt Solutions BDC gingen sie auf 14,7 % zurück (von 16,8 %), blieben aber auf das vertragliche Limit von 5 % gekappt; auch Ares Management kappte seinen Flaggschifffonds das zweite Quartal in Folge, mit leicht sinkenden Anträgen von 14,4 %. Beim spezialisierten Blue-Owl-Technologiefonds OTIC wollten Anleger dagegen erneut 39 % der Anteile zurückgeben – der höchste Wert der Branche, sogar leicht über dem Vorquartal. Blackstones BCRED-Fonds, dessen Ausblick S&P im Oktober von „positiv” auf „stabil” zurückgestuft hatte, verzeichnete im dritten Quartal Rücknahmeanträge von 10 % des Nettoinventarwerts, oberhalb der vertraglichen 5-Prozent-Grenze je Quartal. Ares meldete zugleich einen Nettomittelzufluss von 31 Mrd. Dollar im dritten Quartal, sein verwaltetes Vermögen stieg um 16 % auf 690,6 Mrd. Dollar.",
      blocks: [
        { h: "Wie entwickeln sich Rücknahmewünsche bei großen Private-Credit-Fonds?", items: [
          { tag: "fakt", text: "Beim Blue-Owl-Flaggschifffonds Blue Owl Credit Income Corp (OBDC) sanken die Rücknahmewünsche das zweite Quartal in Folge auf 16,8 % der Anteile (von 18,8 % im Vorquartal). Beim Apollo Debt Solutions BDC (Fondsvolumen 25,9 Mrd. Dollar) gingen sie auf 14,7 % zurück (von 16,8 %), blieben aber auf das vertragliche Quartalslimit von 5 % gekappt – laut Apollo-Management stammt der Großteil der Anträge aus bereits zuvor eingereichten, nicht erfüllten Anträgen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "fakt", text: "Ares Management kappte die Rücknahmen seines Flaggschifffonds ebenfalls das zweite Quartal in Folge, mit leicht sinkenden Anträgen von 14,4 %; gleichzeitig sammelte Ares im dritten Quartal 31 Mrd. Dollar an neuem Kapital ein, das verwaltete Vermögen stieg um 16 % auf 690,6 Mrd. Dollar." }
        ]},
        { h: "Wo bleibt der Rücknahmedruck hoch?", items: [
          { tag: "unbestaetigt", text: "Beim spezialisierten Blue-Owl-Technologiefonds Blue Owl Technology Income Corp (OTIC, rund 5 Mrd. Dollar Fondsvolumen) wollten Anleger im dritten Quartal erneut rund 39 % der Anteile zurückgeben – der höchste Wert der Branche, sogar leicht über dem bereits hohen Vorquartalswert von 38,1 %; als Grund nennen Berichte die konzentrierte Anlegerbasis und den Portfolioschwerpunkt auf Software- und Technologiekredite." },
          { tag: "unbestaetigt", text: "Der Nettoinventarwert von Blackstones Private Credit Fund (BCRED) verzeichnete im dritten Quartal Rücknahmeanträge von rund 10 % des Fondsvermögens, oberhalb der vertraglichen Grenze von 5 % pro Quartal – größtenteils laut Berichten getrieben von aus dem zweiten Quartal übertragenen Anträgen. S&P hatte den Ausblick für BCRED bereits im Oktober von „positiv” auf „stabil” zurückgestuft.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Rücknahmewünsche bei den meisten großen Private-Credit-Fonds im dritten Quartal leicht zurückgehen, während sie beim spezialisierten Technologiefonds von Blue Owl weiterhin auf Rekordniveau bleiben, deutet auf eine insgesamt leichte Entspannung bei breit gestreuten Fonds hin, während konzentrierte, techlastige Fonds weiterhin unter besonderem Druck stehen." }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits"],
      sources: [
        { title: "Alternative Credit Investor: Blue Owl private credit redemption requests fall again in Q3", url: "https://alternativecreditinvestor.com/2026/10/30/blue-owl-private-credit-redemption-requests-fall-again-in-q3/" },
        { title: "Yahoo Finance/Benzinga: Blue Owl Investors Seek to Pull 39% From $5B Tech Credit Fund", url: "https://finance.yahoo.com/markets/stocks/articles/blue-owl-investors-seek-pull-193426820.html" },
        { title: "Kucoin: Apollo Debt Solutions BDC Limits Redemptions for the Third Consecutive Quarter", url: "https://www.kucoin.com/news/flash/apollo-debt-solutions-bdc-limits-redemptions-for-third-consecutive-quarter" },
        { title: "Investing.com/Reuters: Ares fund withdrawal requests decline as private credit redemptions ease", url: "https://www.investing.com/news/stock-market-news/ares-fund-withdrawal-requests-decline-as-private-credit-redemptions-ease-4916327" }
      ]
    },
    /* 13 TECHNOLOGIE: AMAZON/APPLE/NVIDIA/COREWEAVE/ZIRKULÄRE FINANZIERUNG */
    {
      id: "amazon-apple-nvidia-coreweave-circular-10-30", cats: ["tech"], when: "Amazon-Zahlen Do 29.10. abends · Apple-Zahlen angekündigt für Mo 2.11. · Nvidia/CoreWeave/Broadcom Fr 30.10.2026",
      headline: "Amazon verfehlt trotz starkem AWS-Wachstum den Gewinnkonsens und verliert rund 10 %, Apple berichtet erst am Montag, CoreWeaves Kreditrisiko erreicht ein Rekordniveau",
      sec30: "Amazon meldete für das dritte Quartal einen Umsatz von 201,9 Mrd. Dollar (+12 %, knapp unter Konsens) und ein Ergebnis je Aktie von 1,89 Dollar (unter dem Konsens von rund 1,97 bis 2,01 Dollar); AWS wuchs dagegen mit 39 % so stark wie seit knapp fünf Jahren nicht, bei einer operativen Marge von 38,7 %. Die Aktie fiel im regulären Handel um 4,25 % und nachbörslich um weitere rund 6 %, in Summe rund 10 % – Marktbeobachter nennen den Gewinn-Fehlbetrag sowie Sorgen um Investitionsausgaben (Capex rund 76 Mrd. Dollar im Quartal, freier Cashflow zuletzt bei -42,4 Mrd. Dollar) als Hintergrund. Apple berichtet seine Zahlen für das vierte Geschäftsquartal erst am Montag, 2.11., nach Börsenschluss; Analysten erwarten einen Umsatz von rund 113,4 Mrd. Dollar. Bei CoreWeave stiegen die Kreditausfallversicherungen (CDS) auf ein Rekordniveau von rund 1.195 Basispunkten, die Aktie fiel am Freitag um rund 9,7 % auf ein Niveau nahe dem 52-Wochen-Tief; Nvidias Marktkapitalisierung fiel erstmals seit Wochen wieder unter 5 Billionen Dollar, Broadcom verlor trotz eines Analysten-Upgrades rund 5 %. Nach Anthropics Börsenprospekt vom 26.10. rechnete Investor Michael Burry vor, Anthropic sei Rechenleistungs-Verpflichtungen von insgesamt rund 537 Mrd. Dollar eingegangen, und erneuerte seine Kritik an „zirkulärer” KI-Finanzierung.",
      blocks: [
        { h: "Wie hat Amazon bei seinen Quartalszahlen abgeschnitten?", items: [
          { tag: "fakt", text: "Amazon meldete für das dritte Quartal einen Umsatz von 201,9 Mrd. Dollar (+12 % zum Vorjahr, knapp unter dem Konsens von rund 202 Mrd. Dollar) und ein Ergebnis je Aktie von 1,89 Dollar – unter dem Konsens von rund 1,97 bis 2,01 Dollar. AWS wuchs dagegen um 39 % auf 46,0 Mrd. Dollar Umsatz, das sechste Quartal in Folge mit beschleunigtem Wachstum, bei einer operativen Marge von 38,7 % und einem Auftragsbestand von 578 Mrd. Dollar.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "einordnung", text: "Die Aktie fiel im regulären Handel um 4,25 % und nachbörslich um weitere rund 6 %, in Summe rund 10 %; als Hintergrund nennen Berichte neben dem Gewinn-Fehlbetrag vor allem die hohen Investitionsausgaben von rund 76 Mrd. Dollar im Quartal und einen negativen freien Cashflow von zuletzt -42,4 Mrd. Dollar (gleitender Jahreswert)." }
        ]},
        { h: "Wann berichtet Apple seine Zahlen?", items: [
          { tag: "fakt", text: "Apple berichtet seine Zahlen für das vierte Geschäftsquartal 2026 erst am Montag, 2.11., nach Börsenschluss; Analysten erwarten einen Umsatz von rund 113,4 Mrd. Dollar (+9 bis 11 %) und ein Ergebnis je Aktie von rund 1,99 Dollar. Zum Redaktionsschluss lagen noch keine Ist-Zahlen vor." }
        ]},
        { h: "Wie geht es Nvidia, CoreWeave und Broadcom?", items: [
          { tag: "fakt", text: "CoreWeaves 5-Jahres-Kreditausfallversicherungen (CDS) stiegen auf ein Rekordniveau von rund 1.195 Basispunkten, die Aktie fiel am Freitag um rund 9,7 % auf ein Niveau nahe dem 52-Wochen-Tief.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Nvidias Marktkapitalisierung fiel am Freitag erstmals seit mehreren Wochen wieder unter 5 Billionen Dollar; zeitweise überholte Apple Nvidia als wertvollstes Unternehmen der Welt. Broadcom verlor trotz einer Kurszielanhebung durch DA Davidson rund 5 %, der Markt reagiert laut Berichten zunehmend skeptisch auf die Struktur des milliardenschweren Anthropic-Finanzierungsdeals." }
        ]},
        { h: "Was wird zu „zirkulärer” KI-Finanzierung diskutiert?", items: [
          { tag: "unbestaetigt", text: "Nach Anthropics Börsenprospekt vom 26.10. rechnete Investor Michael Burry vor, der KI-Konzern sei Rechenleistungs-Verpflichtungen von insgesamt rund 537 Mrd. Dollar eingegangen – unter anderem gegenüber Alphabet (114,5 Mrd.), Broadcom (161,2 Mrd.), Amazon (110 Mrd.) und Microsoft (44,9 Mrd. Dollar) – und erneuerte seine Kritik an „zirkulärer” KI-Finanzierung; seine Kernthese ist, dass rund 80 % von Anthropics Umsatz variabel oder kündbar seien, während die Infrastrukturkosten fix blieben.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Amazon trotz starkem AWS-Wachstum wegen hoher Investitionsausgaben beim Gewinn enttäuscht, während CoreWeaves Kreditrisiko ein Rekordniveau erreicht und die Debatte um zirkuläre KI-Finanzierung nach Anthropics Börsenprospekt neue Nahrung erhält, zeigt erneut, wie genau Anleger derzeit beobachten, ob sich die hohen KI-Investitionen in profitablen Ergebnissen niederschlagen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die EZB-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler"],
      followups: ["e:ai-capex", "e:circular-financing"],
      sources: [
        { title: "Amazon: Amazon.com Announces Third Quarter Results", url: "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/" },
        { title: "The Motley Fool: Stock market today – Amazon falls on Q3 earnings report and capex concerns", url: "https://www.fool.com/coverage/stock-market-today/2026/10/29/stock-market-today-oct-29-amazon-falls-on-q3-earnings-report-and-capex-concerns/" },
        { title: "MacRumors: Apple to report Q4 2026 earnings on November 2", url: "https://www.macrumors.com/2026/10/06/apple-q4-2026-earnings-nov-2/" },
        { title: "Benzinga: CoreWeave CDS hits record on default risk fears", url: "https://www.benzinga.com/markets/bonds/26/10/62603452/coreweave-cds-record-lehman-default-risk" },
        { title: "247wallst.com: The Big Short investor Michael Burry just found a $537 billion problem with AI", url: "https://247wallst.com/investing/2026/10/29/the-big-short-investor-michael-burry-just-found-a-537-billion-problem-with-ai/" }
      ]
    },
    /* 14 ENERGIE */
    {
      id: "energie-gas-oel-opec-lukoil-10-30", cats: ["energy", "geo"], when: "TTF-Gaspreis Fr 30.10. · Gasspeicher-Stand 31.10. · OPEC+-Treffen So 1.11. · Lukoil-Fristen 21.11.26/April 2027",
      headline: "Der europäische Gaspreis TTF steigt weiter über die Marke von 100 Euro, die deutschen Gasspeicher liegen bei 61,6 %, die OPEC+ trifft sich am Sonntag zur nächsten Förderentscheidung",
      sec30: "Der europäische Gas-Future TTF stieg am Freitag, 30.10., weiter auf rund 103 bis 104 Euro je Megawattstunde (+5,8 % zum Vortag) – die Marke von 100 Euro wurde damit nicht nur kurz überschritten, sondern ausgebaut. Brent notierte je nach Quelle zwischen rund 112 und 118 Dollar je Barrel, WTI zwischen rund 103 und 105 Dollar; neue US-Sanktionen gegen russische Ölexporte, Angriffe auf russische Raffinerien und die gemeldeten Tanker-Zwischenfälle in der Straße von Hormus (Meldung 8) halten den Ölpreis laut Berichten hoch. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 31.10. bei 61,6 % Füllstand (152,4 TWh) – ein leichter Anstieg gegenüber dem 22.10. (61,1 %), aber weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % und unter dem EU-Durchschnitt von zuletzt rund 73 bis 75 %. Die OPEC+ trifft sich am Sonntag, 1.11., zu ihrer nächsten Förderentscheidung für Dezember; nach den bereits am 4.10. unverändert belassenen November-Quoten erwarten Delegierte auch für Dezember keine größeren Änderungen. Bei den Lukoil-Sanktionen verlängerte die US-Behörde OFAC die Frist für Verhandlungen über eingefrorenes Auslandsvermögen bis zum 21.11.2026, während eine separate Lizenz für den laufenden Tankstellen- und Raffineriebetrieb außerhalb Russlands bereits bis April 2027 verlängert wurde.",
      blocks: [
        { h: "Was ist beim europäischen Gaspreis passiert?", items: [
          { tag: "fakt", text: "Der europäische Gas-Future TTF (Dezember-Kontrakt) stieg am Freitag weiter auf rund 103 bis 104 Euro je Megawattstunde (+5,8 % zum Vortag); die erstmals seit 2022 erreichte Marke von 100 Euro wurde damit nicht nur kurz überschritten, sondern in der Woche weiter ausgebaut.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte anhaltende kriegsbedingte Angebotsausfälle sowie historisch niedrige Vor-Winter-Speicherstände in mehreren EU-Ländern; ING warnte laut Berichten vor weiteren Engpässen im Winter." }
        ]},
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "unbestaetigt", text: "Brent notierte je nach Quelle zwischen rund 112 und 118 Dollar je Barrel (+1,4 % zum Vortag, +9,8 % im Monatsverlauf), WTI zwischen rund 103 und 105 Dollar – die Angaben schwanken weiterhin deutlich je nach Messzeitpunkt und Quelle. Als Hintergrund nennen Berichte neue US-Sanktionen gegen russische Ölexporte, Angriffe auf russische Raffinerien sowie die am selben Tag gemeldeten Tanker-Zwischenfälle in der Straße von Hormus.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 31.10. bei 61,6 % Füllstand (152,4 TWh) – ein leichter Anstieg gegenüber dem 22.10. (61,1 %/151,1 TWh), aber weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10. und unter dem EU-Durchschnitt von zuletzt rund 73 bis 75 %; die Bundesnetzagentur bewertet die Versorgungslage dennoch weiterhin als stabil." }
        ]},
        { h: "Wie ist der Stand bei der OPEC+ und bei den Lukoil-Sanktionen?", items: [
          { tag: "unbestaetigt", text: "Die OPEC+ trifft sich am Sonntag, 1.11., zur Festlegung der Dezember-Förderquoten; nachdem die November-Quoten bereits am 4.10. unverändert belassen worden waren, erwarten Delegierte laut Berichten auch für Dezember keine größeren Änderungen, auch weil ein geplanter Kapazitäts-Überprüfungsprozess wegen der Unsicherheiten durch den Konflikt am Golf verschoben wurde.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Die US-Behörde OFAC verlängerte die Frist für Verhandlungen über eingefrorenes Auslandsvermögen des russischen Ölkonzerns Lukoil bis zum 21.11.2026; eine separate, bereits am 15.10. erteilte Lizenz für den laufenden Betrieb von Lukoil-Tankstellen und der bulgarischen Raffinerie außerhalb Russlands läuft dagegen bis April 2027 – beide Fristen sollten nicht verwechselt werden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der europäische Gaspreis seinen Anstieg über 100 Euro fortsetzt, während die deutschen Gasspeicher nur leicht zulegen und weiterhin unter dem gesetzlichen Ziel liegen und der Ölpreis durch neue Sanktionen und die Lage am Golf hoch bleibt, zeigt, wie unmittelbar geopolitische Entwicklungen derzeit auf europäische Energiepreise durchschlagen.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:gas-ttf", "e:opec-plus-why", "e:oil-inflation"],
      sources: [
        { title: "Epoch Times: Wendepunkt beim Gas – Preis über 100 Euro und erster Frost im November", url: "https://www.epochtimes.de/wirtschaft/wendepunkt-beim-gas-preis-ueber-100-euro-und-erster-frost-im-november-a5649723.html" },
        { title: "fxstreet.de.com: Gaspreis explodiert über 100 Euro – ING warnt vor weiteren Engpässen im Winter", url: "https://www.fxstreet.de.com/news/gaspreis-explodiert-uber-100-euro-ing-warnt-vor-weiteren-engpassen-im-winter-202610300617" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung in Deutschland", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/artikel.html" },
        { title: "The Moscow Times/Reuters: OPEC+ agrees to keep November oil output targets steady", url: "https://www.themoscowtimes.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady-a93865" },
        { title: "Reuters via TradingView: US extends deadline for buyers of Lukoil foreign assets until November 21", url: "https://www.tradingview.com/news/reuters.com,2026:newsml_L1N4680CU:0-us-extends-deadline-for-buyers-of-lukoil-foreign-assets-until-november-21/" }
      ]
    },
    /* 15 INTERNATIONAL/GEOPOLITIK: GAZA/TAIWAN/VENEZUELA/SUDAN */
    {
      id: "gaza-taiwan-venezuela-sudan-international-10-30", cats: ["world", "geo"], when: "IDF-Einsätze Gaza 30./31.10. · Taiwan-Berichte 28.–30.10. · Machado-Äußerungen 30.10. · El-Fasher-Berichte 23./26.10.2026",
      headline: "Der Gaza-Waffenstillstand bleibt laut Berichten fragil, Venezuelas Oppositionsführerin Machado dankt der US-Regierung und fordert Wahlen für 2027, zum Sudan-Konflikt in El Fasher erscheinen neue Menschenrechtsberichte",
      sec30: "Der seit Oktober 2025 geltende Gaza-Waffenstillstand bleibt laut mehreren Quellen fragil: Die israelische Armee (IDF) meldete am 30./31.10. die Zerstörung mehrerer Hamas-Waffendepots und die Tötung mehrerer Kämpfer, die laut IDF-Angaben Angriffe vorbereitet hätten; palästinensische Quellen berichteten von mindestens zwei getöteten Palästinensern bei israelischen Angriffen im selben Zeitraum. In der Taiwan-Frage registrierte die US-Armee laut Berichten vom 30.10. weiterhin Planungen für mögliche Verlegungen im Pazifikraum für einen denkbaren Taiwan-Konflikt 2027, ohne dass es in der Woche selbst zu neuen größeren chinesischen Luftraumverletzungen kam. In Venezuela äußerte sich Oppositionsführerin María Corina Machado am 30.10. erstmals öffentlich seit ihrer Rückkehr aus dem Exil, dankte der US-Regierung für das Öffnen der „Schleusen zur Freiheit” und forderte Präsidentschaftswahlen für 2027; Hintergrund ist die im Januar 2026 von den USA durchgeführte Festnahme von Präsident Maduro, der sich seither vor einem New Yorker Gericht verantworten muss, während Vizepräsidentin Delcy Rodríguez als von den USA anerkannte Interimspräsidentin amtiert. Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die RSF veröffentlichten Human Rights Watch und Amnesty International im Oktober neue Berichte über anhaltende Rechtsverstöße in der Stadt.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen gilt seit Oktober 2025 formal weiter." },
          { tag: "position", text: "Die israelische Armee (IDF) meldete am 30./31.10. die Zerstörung mehrerer Hamas-Waffendepots und die Tötung mehrerer Kämpfer, darunter laut IDF-Angaben ein Kommandeur, der zwölf israelische Geiseln festgehalten habe; diese Kämpfer hätten laut IDF-Angaben neue Angriffe vorbereitet und damit den Waffenstillstand verletzt." },
          { tag: "unbestaetigt", text: "Palästinensische Quellen berichteten für denselben Zeitraum von mindestens zwei getöteten Palästinensern, darunter einem Lehrer, bei israelischen Angriffen; diese Quellen sind als israelkritisch einzuordnen und nicht unabhängig verifiziert." }
        ]},
        { h: "Was geschieht zwischen China und Taiwan?", items: [
          { tag: "unbestaetigt", text: "Laut Berichten vom 30.10. plant die US-Armee (USARPAC) weiterhin mögliche Truppenverlegungen im Pazifikraum für einen denkbaren China-Taiwan-Konflikt 2027; ein US-General bezeichnete das sogenannte „Davidson Window” (ein von US-Seite angenommenes Zeitfenster chinesischer Invasionsfähigkeit) als weiterhin gültig – eine Einschätzung der US-Seite, keine neutral verifizierte Tatsache. Zu neuen größeren chinesischen Luftraumverletzungen in der Woche selbst liegen keine Berichte vor." }
        ]},
        { h: "Welche weiteren internationalen Entwicklungen gab es?", items: [
          { tag: "position", text: "Oppositionsführerin María Corina Machado äußerte sich am 30.10. erstmals öffentlich seit ihrer Rückkehr aus dem Exil und dankte der US-Regierung dafür, die „Schleusen zur Freiheit” geöffnet zu haben; sie erklärte, der Übergang in Venezuela bewege sich „unumkehrbar” auf eine Präsidentschaftswahl 2027 zu, und dementierte jeglichen Kontakt mit Interimspräsidentin Delcy Rodríguez." },
          { tag: "fakt", text: "Hintergrund ist die im Januar 2026 von den USA durchgeführte Festnahme von Präsident Nicolás Maduro, der sich seither wegen Drogenhandels- und Waffenvorwürfen vor einem New Yorker Gericht verantworten muss; Vizepräsidentin Delcy Rodríguez amtiert seither als von den USA anerkannte Interimspräsidentin." },
          { tag: "unbestaetigt", text: "Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die paramilitärische RSF (Oktober 2025) veröffentlichten Amnesty International und Human Rights Watch im Oktober neue Berichte, wonach weiterhin rechtswidrige Tötungen, Inhaftierungen, Hunger und Folter in der Stadt dokumentiert seien; laut Amnesty lebt weniger als ein Zehntel der Vorkriegsbevölkerung noch dort." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere internationale Konfliktlinien – Gaza, Taiwan, Sudan – weiterhin ohne klare Lösung fortbestehen, während sich in Venezuela mit Machados öffentlichem Auftritt und ihrer Forderung nach Wahlen für 2027 zumindest eine innenpolitische Entwicklung sichtbar bewegt, zeigt, wie viele geopolitische Baustellen derzeit gleichzeitig offen bleiben." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "Jerusalem Post: IDF kills Hamas terrorists in Gaza, including commander who held 12 hostages", url: "https://www.jpost.com/israel-news/defense-news/article-913354" },
        { title: "Taipei Times: US Army outlines Pacific deployments for possible 2027 China-Taiwan conflict", url: "https://www.taipeitimes.com/News/front/archives/2026/10/30/2003866854" },
        { title: "Al Jazeera: Venezuela's Machado lauds Trump for 'freedom', urges 2027 elections", url: "https://www.aljazeera.com/news/2026/10/30/machado-lauds-trump-for-freedom-floodgate-urges-2027-elections" },
        { title: "Foreign Policy: Venezuela – After Machado Returns, Will U.S. Allow Elections?", url: "https://foreignpolicy.com/2026/10/30/venezuela-machado-elections-us-rubio-rodriguez-oil/" },
        { title: "Amnesty International: Sudan – El Fasher civilians suffer unlawful killings, detention and torture one year after capture by the RSF", url: "https://www.amnesty.org/en/latest/news/2026/10/sudan-el-fasher-civilians-suffer-unlawful-killings-detention-and-torture-one-year-after-citys-capture-by-the-rsf-new-testimony/" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX verlor am Freitag, 30.10., 0,85 % auf 25.818,21 Punkte, der Euro Stoxx 50 1,22 % auf 6.131,31 Punkte; S&P 500 (-1,82 %) und Nasdaq (-2,86 %) gaben noch deutlicher nach." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund nennen Berichte einen Kurssturz der Intel-Aktie nach schwacher PC-Prognose sowie enttäuschende Amazon-Quartalszahlen, die Sorgen um die Rentabilität hoher KI-Investitionen schürten." },
    "fed-hike": { tag: "fakt", story: 2, text: "Die Fed hatte ihren Leitzins bereits am Mittwoch, 28.10., bei 3,75 bis 4,00 % belassen; die EZB zog am Donnerstag mit einer eigenen Zinspause bei 2,50 % nach." },
    "central-banks-why": { tag: "position", story: 2, text: "EZB-Präsidentin Lagarde sagte, die Geldpolitik bleibe „data-dependent and meeting-by-meeting”, betonte aber: „the direction of travel is clear” – eine weitere Zinserhöhung im Dezember sei möglich." },
    "yield-meaning": { tag: "fakt", story: 1, text: "Die US-10-Jahres-Rendite fiel am Freitag im Zuge des Technologie-Ausverkaufs auf rund 4,93 bis 4,94 %, nachdem sie nach der Fed-Entscheidung zuvor bei rund 5,03 bis 5,04 % gelegen hatte." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold fiel bis Samstagmorgen auf rund 3.875 Dollar je Feinunze – erstmals seit rund einem Jahr unter 4.000 Dollar –, nachdem Anleger im Zuge des Technologie-Ausverkaufs verstärkt in Anleihen statt in Gold umschichteten." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin notierte zum Wochenende bei rund 77.300 bis 77.400 Dollar, ein Monatsminus von rund 7,7 % – laut Berichten der schwächste Oktober seit 2014, zusätzlich belastet von einem mutmaßlichen Hack bei der Kryptobörse Binance." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs für den Euro stieg am Freitag auf 1,1172 Dollar, nachdem Lagarde eine mögliche Zinserhöhung im Dezember angedeutet hatte." },
    "ecb-hike": { tag: "unbestaetigt", story: 2, text: "Eine aktuelle Reuters-Umfrage sieht inzwischen 64 von 73 befragten Ökonomen bei einer EZB-Zinserhöhung im Dezember, nachdem die EZB im Oktober zunächst pausiert hatte." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone lag im September bei 3,8 %; die Oktober-Schnellschätzung wird erst am 4.11. veröffentlicht." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Die 171. Steuerschätzung vom 22.10. brachte dem Bund für 2027 rund 4,1 Mrd. Euro Mehreinnahmen; Finanzminister Klingbeil sagte, man gewinne dadurch keine neuen Spielräume, müsse aber auch keine neuen Lücken schließen." },
    "debt-brake": { tag: "fakt", story: 5, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "rente-basics": { tag: "position", story: 6, text: "Kanzler Merz will die Reformvorschläge der Alterssicherungskommission „so umsetzen, wie sie auf dem Tisch liegen”, sieht aber „auch für mich Grenzen”; Arbeitsminister Schweitzer sucht einen Kompromiss und will die Rente mit 63 im Kern erhalten." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Der ARD-DeutschlandTrend (Oktober) sieht die AfD unverändert bei 27 % vor der Union (20 %, Tiefstwert seit 2021); INSA und Forsa sehen die AfD mit 27 bis 29,5 % ebenfalls vor der Union, die Institute weichen bei Grünen und Union aber deutlich voneinander ab." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 8, text: "Brent notierte am Wochenende je nach Quelle zwischen rund 112 und 118 Dollar, gestützt von neuen US-Sanktionen gegen russische Ölexporte und von Tanker-Zwischenfällen in der Straße von Hormus." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Irans Revolutionsgarde meldete am 30.10. mehrere brennende oder auf Minen gelaufene Tanker in der Straße von Hormus; der Schiffsverkehr bleibt mit nur 2 Transits am 25.10. gegenüber normalerweise rund 85 pro Tag stark eingeschränkt." },
    "defence-order": { tag: "unbestaetigt", story: 9, text: "Der Festauftrag über rund 25 Mrd. Euro für das Arminius-Programm (rund 1.800 Boxer-Radpanzer) soll nach der parlamentarischen Befassung am 9.12. unterschrieben werden." },
    "defence-stocks": { tag: "fakt", story: 10, text: "General Dynamics übertraf mit einem Book-to-Bill-Verhältnis von 6,8 zu 1 deutlich die Erwartungen; bei Hensoldt belasteten Softwareprobleme im Ersatzteil-Logistikzentrum, bei RENK der Verkauf des Gleitlager-Geschäfts an Miba." },
    "ma-steps": { tag: "unbestaetigt", story: 11, text: "BASF soll sein Angebot für Evonik laut Berichten auf 24 Euro je Aktie erhöht haben; Evonik lehnte es ab, in Verhandlungen einzutreten, ließ aber vertrauliche Gespräche zu. Der EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) ist bereits besiegelt." },
    "take-private-why": { tag: "unbestaetigt", story: 11, text: "Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, äußerte sich weiterhin nicht öffentlich zu dem kursierenden BASF-Angebot." },
    "deal-risks": { tag: "unbestaetigt", story: 11, text: "Bei Tesla und SpaceX bleibt eine mögliche Fusion weiterhin ergebnisoffen; Musk selbst sagte, ein Zusammenschluss sei „keineswegs sicher”." },
    "private-credit-what": { tag: "unbestaetigt", story: 12, text: "Blackstones Private Credit Fund (BCRED) verzeichnete im dritten Quartal Rücknahmeanträge von rund 10 % des Nettoinventarwerts, oberhalb der vertraglichen 5-Prozent-Grenze; S&P hatte den Ausblick im Oktober auf „stabil” zurückgestuft." },
    "redemption-limits": { tag: "unbestaetigt", story: 12, text: "Beim spezialisierten Blue-Owl-Technologiefonds OTIC wollten Anleger im dritten Quartal erneut rund 39 % der Anteile zurückgeben – der höchste Wert der Branche; bei den breiter gestreuten Flaggschifffonds von Blue Owl, Apollo und Ares gingen die Rücknahmewünsche dagegen leicht zurück." },
    "ai-capex": { tag: "fakt", story: 13, text: "Amazon meldete für das dritte Quartal einen Umsatz von 201,9 Mrd. Dollar mit 39 % AWS-Wachstum, verfehlte den Gewinnkonsens aber wegen hoher Investitionsausgaben; die Aktie fiel in Summe um rund 10 %." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "Nach Anthropics Börsenprospekt rechnete Investor Michael Burry Rechenleistungs-Verpflichtungen von rund 537 Mrd. Dollar vor und erneuerte seine Kritik an „zirkulärer” KI-Finanzierung." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 31.10. bei 61,6 % Füllstand (152,4 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %." },
    "gas-ttf": { tag: "fakt", story: 14, text: "Der europäische Gas-Future TTF stieg am Freitag weiter auf rund 103 bis 104 Euro je Megawattstunde und baute damit den erstmals seit 2022 erreichten Stand über 100 Euro weiter aus." },
    "opec-plus-why": { tag: "unbestaetigt", story: 14, text: "Die OPEC+ trifft sich am Sonntag, 1.11., zur Festlegung der Dezember-Förderquoten; nach den bereits am 4.10. unveränderten November-Quoten erwarten Delegierte auch für Dezember keine größeren Änderungen." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent notierte zwischen rund 112 und 118 Dollar je Barrel; Öl- und Gaspreise bleiben Belastungsfaktoren für Sprit-, Heiz- und Transportkosten in Europa." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Technologie", type: "Fakt", story: 1,
      q: "Welcher Wert löste laut Berichten am Freitag, 30.10.2026, maßgeblich den breiten Technologie-Ausverkauf an den Börsen aus?",
      options: [
        "Intel",
        "Alphabet",
        "Deutsche Bank",
        "Rheinmetall"
      ],
      answer: 0,
      explain: "Die Intel-Aktie brach vorbörslich um bis zu 29 % ein, nachdem das Unternehmen eine schwache PC-Absatzprognose vorgelegt hatte; das löste zusammen mit enttäuschenden Amazon-Zahlen einen breiten Ausverkauf bei Technologiewerten aus."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 2,
      q: "Angenommen, die Inflation in der Eurozone würde im November deutlich unter 3 % fallen. Was würde das unter sonst gleichen Bedingungen am ehesten für die von vielen Ökonomen erwartete EZB-Zinserhöhung im Dezember bedeuten?",
      options: [
        "Die Erhöhung würde dadurch wahrscheinlicher, weil niedrigere Inflation immer zu höheren Zinsen führt",
        "Es gäbe keinen Zusammenhang, da die EZB ihre Entscheidungen unabhängig von Inflationsdaten trifft",
        "Die EZB müsste den Leitzins automatisch auf 0 % senken",
        "Die Erhöhung würde dadurch unwahrscheinlicher, da einer der von der EZB genannten Gründe für eine mögliche Straffung entfiele"
      ],
      answer: 3,
      explain: "Lagarde begründete die Offenheit für eine Dezember-Erhöhung unter anderem mit der hohen Inflation von 3,8 % im September; eine deutlich niedrigere Inflation würde diesen Grund für eine Straffung abschwächen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Welche Partei liegt laut dem ARD-DeutschlandTrend vom Oktober 2026 unverändert als stärkste Kraft vor der Union?",
      options: [
        "SPD",
        "AfD",
        "Grüne",
        "Linke"
      ],
      answer: 1,
      explain: "Der ARD-DeutschlandTrend sieht die AfD im Oktober unverändert bei 27 % und damit vor der Union, die mit 20 % ihren niedrigsten Stand seit September 2021 erreicht."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, die katarische Vermittlung zwischen den USA und Iran würde in den kommenden Tagen tatsächlich zu einer Wiedereröffnung der Straße von Hormus führen. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Keine Auswirkung, da der Ölpreis unabhängig vom Schiffsverkehr durch Hormus ist",
        "Einen tendenziell sinkenden Ölpreis, weil wieder mehr Öl ungehindert durch die wichtige Handelsroute transportiert werden könnte",
        "Eine automatische Verdoppelung der OPEC+-Förderquoten",
        "Einen tendenziell steigenden Ölpreis, weil Entspannung an den Märkten immer als Kaufsignal gilt"
      ],
      answer: 1,
      explain: "Ein großer Teil der weltweiten Öltransporte läuft normalerweise durch die Straße von Hormus; eine Wiedereröffnung würde das Angebot tendenziell erhöhen und den Ölpreis nach der in Meldung 8 und 14 beschriebenen Logik eher sinken lassen."
    },
    {
      topic: "Technologie", type: "Fakt", story: 13,
      q: "Wie veränderte sich die Amazon-Aktie in Summe nach den Quartalszahlen vom 29.10.2026?",
      options: [
        "Sie stieg um rund 10 %",
        "Sie blieb nahezu unverändert",
        "Sie fiel in Summe um rund 10 %",
        "Sie fiel um rund 29 %"
      ],
      answer: 2,
      explain: "Amazon verfehlte trotz starkem AWS-Wachstum von 39 % den Gewinnkonsens; die Aktie fiel im regulären und nachbörslichen Handel in Summe um rund 10 %. Der Rückgang von rund 29 % betraf stattdessen die Intel-Aktie vorbörslich."
    }
  ]
};
