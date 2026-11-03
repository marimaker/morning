// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-03",
  dateLabel: "Dienstag, 3. November 2026",
  updatedLabel: "Recherchestand 03.11.2026",
  marketNote: "Diese Ausgabe entsteht am Dienstagmorgen, 3.11.2026 – dem Tag der US-Zwischenwahlen (gesamtes Repräsentantenhaus, rund ein Drittel des Senats, zahlreiche Gouverneursposten). DAX und Euro Stoxx 50 zeigen den Stand des Dienstagvormittags; die US-Kassamärkte (S&P 500, Nasdaq Composite, Dow Jones) öffnen erst um 15:30 MEZ, bis dahin gilt der Schlussstand von Montag, 2.11., ergänzt um die Tendenz der vorbörslichen Futures. Gold, Öl und Bitcoin handeln durchgehend und zeigen den aktuellsten verfügbaren Stand vom Dienstagmorgen. Apple hatte am Montagabend nach US-Börsenschluss seine Quartalszahlen vorgelegt – der erste Bericht unter dem neuen CEO John Ternus (Meldung 15); die Aktie fiel trotz eines Gewinn-Beats wegen einer schwachen Margen-Prognose. Die Eurozone-Schnellschätzung zur Oktober-Inflation wird erst morgen, Mittwoch 4.11., veröffentlicht und lag zum Redaktionsschluss noch nicht vor; auch die vollständigen Qiagen-Q3-Zahlen folgen erst morgen. Ergebnisse der heutigen US-Zwischenwahlen lagen zum Redaktionsschluss noch nicht vor, da die Wahllokale in den USA erst im Laufe des Abends Ortszeit schließen.",

  top: [
    { text: "DAX und Euro Stoxx 50 geben am Dienstagmorgen nach, belastet vom Kursrückgang bei Apple nach dessen Quartalszahlen und von der Vorsicht der Anleger vor den Ergebnissen der US-Zwischenwahlen; an der Wall Street hatte der Dow am Montag noch zugelegt, während S&P 500 und Nasdaq nachgaben.", ref: "s:1" },
    { text: "Apple übertrifft unter dem neuen CEO John Ternus beim Umsatz und Gewinn je Aktie die Erwartungen, die Aktie fällt aber wegen einer wegen steigender Speicherchip-Kosten schwächer ausgefallenen Margen-Prognose für das Weihnachtsquartal deutlich.", ref: "s:15" },
    { text: "Die Straße von Hormus gilt nach neuen Tankerangriffen und US-Luftschlägen auf die iranische Insel Qeshm als faktisch geschlossen; der Ölpreis und der europäische Gaspreis steigen deutlich, während die OPEC+ ihre Dezember-Förderquoten unverändert lässt.", ref: "s:10" },
    { text: "Russland führt in der Nacht zum Dienstag einen der größten Angriffe auf die ukrainische Energieinfrastruktur seit Kriegsbeginn, die geplanten Dreier-Gespräche in Abu Dhabi verschieben sich auf den 10./11. November; Präsident Selenskyj besucht überraschend Berlin.", ref: "s:8" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 25.717–25.737 Pkt.", change: "-0,7 % bis -1,0 % ggü. Mo-Schluss (25.981 Pkt.)", dir: "down", asof: "Stand Di 3.11.26, Vormittag (ca. 8–9 Uhr MEZ)", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Montag", text: "Der DAX war am Montag, 2.11., noch bis auf 25.981 Punkte gestiegen, nachdem er zuvor vom breiten Technologie-Ausverkauf vom Freitag betroffen war." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang am Dienstag nennen Berichte:",
        items: [
          "Der Kursrückgang bei Apple nach einer schwächer als erwarteten Margen-Prognose belastete die Stimmung in Technologiewerten auch in Europa.",
          "Anleger agieren laut Berichten zusätzlich vorsichtig vor den Ergebnissen der heutigen US-Zwischenwahlen."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu den Apple-Zahlen in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "onvista: Dax niedriger erwartet – US-Zwischenwahlen im Blick", url: "https://www.onvista.de/news/2026/11-03-dax-niedriger-erwartet-us-zwischenwahlen-im-blick-0-20-26571547" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.145–6.148 Pkt.", change: "-0,5 % bis -0,6 % ggü. Vortag", dir: "down", asof: "Stand Di 3.11.26, Vormittag", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Allgemeine Tendenz", text: "Auch der Euro Stoxx 50 gibt am Dienstagmorgen nach, im Einklang mit der schwächeren Tendenz an den europäischen Börsen insgesamt." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Technologie-Schwäche nach den Apple-Zahlen und die Vorsicht vor den US-Zwischenwahlen belasten laut Berichten den Gesamtmarkt."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zur Reaktion an der Wall Street am Montag in Meldung 3.", ref: "s:3" }
      ],
      source: { title: "Newsquawk: Daily European Equity Opening News – 3rd November 2026", url: "https://www.newsquawk.com/headlines/newsquawk-daily-european-equity-opening-news---3rd-november-2026" }
    },
    "sp500": {
      label: "S&P 500", value: "7.541,40", change: "-0,51 % (Mo-Schluss); vorbörslich Di uneinheitlich (S&P-Futures ca. -0,2 %)", dir: "down", asof: "Schluss Mo 2.11.26; US-Kassamarkt öffnet erst Di 15:30 MEZ", story: 3,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Tagesverlauf Montag", text: "Der S&P 500 hatte am Montag zeitweise rund 1,1 % im Plus gelegen, bevor Gewinnmitnahmen bei Technologiewerten den Index ins Minus drehten." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Die Apple-Aktie fiel nachbörslich nach einer schwachen Margen-Prognose um bis zu 4,4 %; das belastete die Stimmung auch für den Dienstag.",
          "Anleger warten zudem auf die Ergebnisse der heutigen US-Zwischenwahlen."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Apple, Intel und Amazon in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "CNBC: Apple's stock drops on weak margin forecast in Ternus' first earnings report", url: "https://www.cnbc.com/2026/11/02/apple-aapl-q4-2026-earnings-live-updates.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.164,36", change: "-1,07 % (Mo-Schluss); Nasdaq-100-Futures Di vorbörslich ca. +0,1 % bis +0,46 %", dir: "down", asof: "Schluss Mo 2.11.26; US-Kassamarkt öffnet erst Di 15:30 MEZ", story: 3,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Im Vergleich zum Dow", text: "Während der Dow am Montag um 0,41 % stieg, verlor die technologieschwere Nasdaq 1,07 % – ein Zeichen für eine Rotation aus Technologiewerten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Ausverkauf bei Technologiewerten setzte sich fort, verstärkt durch die schwache Reaktion auf die Apple-Zahlen nachbörslich.",
          "Vorbörslich am Dienstag erholten sich die Nasdaq-100-Futures leicht."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Anthropic und zirkulärer KI-Finanzierung in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "CNBC: Stock market today – Live updates", url: "https://www.cnbc.com/2026/11/01/stock-market-today-live-updates.html" }
    },
    "dow": {
      label: "Dow Jones", value: "51.983,98", change: "+0,41 % (Mo-Schluss)", dir: "up", asof: "Schluss Mo 2.11.26; US-Kassamarkt öffnet erst Di 15:30 MEZ", story: 3,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft weniger stark auf Kursbewegungen bei Tech-Aktien als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Im Vergleich zur Nasdaq", text: "Der Dow stieg am Montag um 0,41 %, während die Nasdaq 1,07 % verlor – Anleger rotierten laut Berichten von Technologie- in zyklischere Werte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Käufe in defensiveren, weniger technologienahen Werten stützten den Dow, während der Tech-Sektor unter Druck blieb."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Tech-Ausverkauf in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "247wallst: Money Rotated Out of Tech Today – the Dow and Nasdaq Split", url: "https://247wallst.com/cards/money-rotated-out-of-tech-today-the-dow-and-nasdaq-split-by-gspc-market-bell-01m6f16sjakb82rhj0p9s07n7a" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1185", change: "-0,5 % ggü. Montag (1,1237)", dir: "down", asof: "Stand Di 3.11.26, Vormittag", story: 4, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Montag", text: "Der Euro war am Montag bis auf 1,1237 Dollar gestiegen, gestützt von Erwartungen auf eine EZB-Zinserhöhung im Dezember." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Euro gab am Dienstag einen Teil der Montags-Gewinne wieder ab; als Hintergrund wird Zurückhaltung der Anleger vor den US-Zwischenwahlen genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinserwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "RoboForex: EUR/USD Forecast 03.11.2026", url: "https://roboforex.com/beginners/analytics/forex-forecast/currencies/eur-usd-forecast-2026-11-03/" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,92 %", change: "weitgehend stabil ggü. Vortag", dir: "flat", asof: "Stand Di 3.11.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,92 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,9 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt bei 3,75 bis 4,00 %; die neuen Fed-Projektionen (Dot Plot) fallen restriktiver aus als zuvor erwartet." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Rendite bewegt sich vor den US-Zwischenwahlen und ohne neue Fed-Aussagen in einer engen Spanne."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu EZB und Fed in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,31 %", change: "weitgehend stabil (Stand Mo 2.11.)", dir: "flat", asof: "Stand Mo 2.11.26 (aktuellster bestätigter Tageswert)", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Der Risikoaufschlag zehnjähriger französischer Anleihen zum Bund (OAT/Bund-Spread) lag am 2.11. bei rund 159,9 Basispunkten (OAT-Rendite 4,91 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Erwartung einer EZB-Zinserhöhung im Dezember stützt die Rendite tendenziell."
        ]
      },
      important: [
        { area: "Frankreich", text: "Mehr zur französischen Haushaltslage in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "ideal-investisseur.fr: OAT / Bund spread today", url: "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.909–3.910 $", change: "-0,9 % bis -1,0 % ggü. Vortag", dir: "down", asof: "Stand Di 3.11.26, ca. 8:15 Uhr MEZ", story: 4, whyRef: "e:gold-why",
      means: "Gold kostet etwa 3.909 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Montag", text: "Gold war am Montag noch um rund 0,8 % gestiegen; am Dienstag gibt der Preis wieder einen Teil davon ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Zurückhaltung der Anleger vor den Ergebnissen der US-Zwischenwahlen."
        ]
      },
      important: [
        { area: "Technologie", text: "Der Tech-Ausverkauf infolge der Apple-Zahlen beeinflusst auch die allgemeine Risikobereitschaft der Anleger; mehr dazu in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "Goldreporter: Goldpreis heute – Kurse unter Druck vor US-Midterm-Wahlen", url: "https://www.goldreporter.de/goldpreis-03-11-2026/marktbericht-gold/262762/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 106–107 $", change: "+1,8 % bis +2,1 % ggü. Vortag", dir: "up", asof: "Stand Di 3.11.26, Vormittag", story: 10, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 106 bis 107 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Frühjahr 2026.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI stieg im gleichen Zeitraum auf rund 97 Dollar je Barrel." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg:",
        items: [
          "Nach Angaben von US-Beamten führte das US-Militär am Montag, 2.11., „begrenzte, defensive” Luftangriffe auf die iranische Insel Qeshm an der Straße von Hormus durch; das befeuerte neue Sorgen um die Öl-Versorgung am Golf.",
          "Die OPEC+ hatte bereits am 1.11. ihre Dezember-Förderquoten unverändert gelassen; mehr dazu in Meldung 10."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf in Meldung 10.", ref: "s:10" },
        { area: "Inflation", text: "Ein steigender Ölpreis wirkt tendenziell anheizend auf Sprit-, Heiz- und Transportkosten.", ref: "e:oil-inflation" }
      ],
      source: { title: "FinanceFeeds: Brent Crude $106 After 7.6% Plunge – Qeshm Strike Report, Midterms", url: "https://financefeeds.com/brent-crude-oil-price-106-tuesday-after-7-6-percent-plunge-qeshm-strike-report-midterms-bull-113-bear-100/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 76.688 $", change: "-2,04 % ggü. Vortag", dir: "down", asof: "Stand Di 3.11.26", story: 4, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 76.688 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Zusammenhang mit Aktien", text: "Bitcoin bewegt sich zuletzt im Einklang mit dem Tech-Ausverkauf an den Aktienmärkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Allgemeine Risikoaversion der Anleger vor den US-Zwischenwahlen sowie die Korrelation mit dem Tech-Ausverkauf nach den Apple-Zahlen."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "KuCoin: BTC price, November 3 2026", url: "https://www.kucoin.com/news/insight/BTC/6ae9292abbcb5200074597b4" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "markets-dienstag-apple-midterms-11-03", cats: ["markets"], when: "Stand Di 3.11.2026, Vormittag",
      headline: "DAX und Euro Stoxx 50 geben am Dienstagmorgen nach, belastet vom Kursrückgang bei Apple und der Vorsicht vor den US-Zwischenwahlen",
      sec30: "Nachdem der DAX am Montag noch bis auf 25.981 Punkte gestiegen war, fällt er am Dienstagvormittag auf zwischen 25.717 und 25.737 Punkte (-0,7 % bis -1,0 %); der Euro Stoxx 50 notiert zwischen rund 6.145 und 6.148 Punkten (-0,5 % bis -0,6 %). Als Hintergrund nennen Berichte den Kursrückgang bei Apple nach dessen Quartalszahlen vom Montagabend (Meldung 15) sowie die Vorsicht der Anleger vor den Ergebnissen der heutigen US-Zwischenwahlen. An der Wall Street hatte sich am Montag bereits eine Rotation gezeigt: Der Dow schloss im Plus, während S&P 500 und Nasdaq nachgaben (Meldung 3).",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Dienstagmorgen entwickelt?", items: [
          { tag: "fakt", text: "Der DAX fiel am Dienstagvormittag auf zwischen 25.717 und 25.737 Punkte (-0,7 % bis -1,0 %), nachdem er am Montag noch bis auf 25.981 Punkte gestiegen war. Der Euro Stoxx 50 notierte zwischen rund 6.145 und 6.148 Punkten (-0,5 % bis -0,6 %).",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund für die schwächere Tendenz?", items: [
          { tag: "fakt", text: "Die Apple-Aktie fiel nach den Quartalszahlen vom Montagabend wegen einer schwächer als erwarteten Margen-Prognose vorbörslich deutlich; das belastete auch europäische Technologiewerte.",
            ask: [{ label: "Mehr zu den Apple-Zahlen", ref: "s:15" }] },
          { tag: "einordnung", text: "Anleger bleiben zudem vor den Ergebnissen der heutigen US-Zwischenwahlen vorsichtig, die als Stimmungstest für die Regierung Trump gelten.",
            ask: [{ label: "Mehr zur Lage an der Wall Street", ref: "s:3" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 am Dienstag nachgeben, während an der Wall Street am Montag bereits eine Rotation aus Technologiewerten zu beobachten war, deutet darauf hin, dass sowohl die Apple-Reaktion als auch die Unsicherheit vor den US-Zwischenwahlen derzeit die Stimmung in Europa und den USA gleichermaßen prägen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung an der Wall Street am Montag wird in Meldung 3 behandelt, Gold/Bitcoin/Euro in Meldung 4, die Apple-Zahlen im Detail in Meldung 15.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "onvista: Dax niedriger erwartet – US-Zwischenwahlen im Blick", url: "https://www.onvista.de/news/2026/11-03-dax-niedriger-erwartet-us-zwischenwahlen-im-blick-0-20-26571547" },
        { title: "onvista: Dax schwächer erwartet – Tech-Korrektur belastet Leitindex", url: "https://www.onvista.de/news/2026/11-03-dax-schwaecher-erwartet-tech-korrektur-belastet-leitindex-41121301-19-26571557" },
        { title: "Newsquawk: Daily European Equity Opening News – 3rd November 2026", url: "https://www.newsquawk.com/headlines/newsquawk-daily-european-equity-opening-news---3rd-november-2026" },
        { title: "XTB: DAX-Prognose für Dienstag, 03.11.26", url: "https://www.xtb.com/de/Marktanalysen/Trading-News/dax-prognose-fuer-dienstag-03-11-26-aktuelle-einschaetzung-und-chartanalyse" }
      ]
    },
    /* 2 WIRTSCHAFT: EZB/FED/PERSONALFRAGEN */
    {
      id: "ezb-fed-personalfragen-11-03", cats: ["economy", "markets"], when: "EZB-Sitzung 29.10. · Fed-Sitzung 28.10. · Bewerbungsfrist Schnabel-Nachfolge 28.10.2026",
      headline: "Die EZB steuert laut Insidern auf eine Zinserhöhung im Dezember zu, die Fed-Projektionen fallen restriktiver aus, bei der Schnabel- und Lagarde-Nachfolge zeichnen sich erste Kandidaten ab",
      sec30: "Nach der EZB-Sitzung vom 29.10. (Leitzins unverändert) berichten Insider, die EZB steuere auf eine Zinserhöhung um 0,25 Prozentpunkte am 17.12. zu, die als „so gut wie sicher” gelte, sofern die Energiepreise nicht einbrechen. EZB-Ratsmitglied Peter Kažimír betonte, die Zinspause sei „keine Ziellinie”. Die Fed hatte ihren Leitzins am 28.10. bei 3,75 bis 4,00 % belassen, ihre neuen Projektionen (Dot Plot) fallen mit einem Median von 4,1 % für Ende 2026 aber restriktiver aus als im Juni erwartet. Bei der EZB-Personalie Schnabel (wechselt zum IWF) endete die Bewerbungsfrist am 28.10.; Bundesfinanzminister Klingbeil hat noch keinen offiziellen Personalvorschlag eingereicht, unterstützt aber informell Bundesbank-Chef Nagel für die Lagarde-Nachfolge als EZB-Präsident.",
      blocks: [
        { h: "Wie ist der Stand bei der erwarteten Dezember-Zinserhöhung?", items: [
          { tag: "position", text: "EZB-Ratsmitglied Peter Kažimír sagte, die Zinspause der vergangenen Woche sei „keine Ziellinie” (im Original: „Last week's pause was not a finish line”) – von Beobachtern als weiteres Signal für eine mögliche Dezember-Erhöhung gewertet.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Laut Insidern steuert die EZB auf eine Zinserhöhung um 0,25 Prozentpunkte am 17.12. zu, die als „so gut wie sicher” gilt, sofern die Energiepreise nicht plötzlich einbrechen; eine offizielle Bestätigung der EZB liegt nicht vor, die nächste Sitzung ist erst für den 17.12. angesetzt." }
        ]},
        { h: "Was zeigen die neuen Fed-Projektionen?", items: [
          { tag: "fakt", text: "Die Fed beließ ihren Leitzins am 28.10.2026 unverändert im Zielkorridor von 3,75 bis 4,00 %. Die neuen Projektionen (Dot Plot) fallen aber restriktiver aus: Der Median für Ende 2026 liegt nun bei 4,1 % (zuvor im Juni: 3,8 %), für Ende 2027 ebenfalls bei 4,1 % (zuvor 3,6 %).",
            ask: [{ label: "Was zeigt der Dot Plot?", ref: "t:dot-plot" }] },
          { tag: "unbestaetigt", text: "Drei Fed-Vertreter sprachen sich laut Berichten zuletzt für weitere Zinserhöhungen zur Inflationsbekämpfung aus; Marktteilnehmer preisen eine Wahrscheinlichkeit von rund 73 % für einen weiteren Zinsschritt im Dezember ein." }
        ]},
        { h: "Was ist neu bei der Schnabel- und Lagarde-Nachfolge?", items: [
          { tag: "fakt", text: "Die Bewerbungsfrist für Nominierungsvorschläge zur Nachfolge von EZB-Direktorin Isabel Schnabel, die zum IWF wechselt, endete am 28.10.2026; über die Besetzung entscheidet der Europäische Rat.",
            ask: [{ label: "Mehr zu Lagardes vorzeitigem Rücktritt", ref: "e:ecb-hike" }] },
          { tag: "position", text: "Bundesfinanzminister Lars Klingbeil erklärte, Deutschland werde „sein Gewicht als größter Staat der Eurozone” einbringen, um eine breit getragene neue EZB-Führung zu formen; er unterstützt informell Bundesbank-Chef Joachim Nagel für die Nachfolge von EZB-Präsidentin Lagarde (vorzeitiger Rücktritt zum 7.2.2027), will eine konkrete Benennung aber erst mit Kanzler Merz abstimmen." },
          { tag: "unbestaetigt", text: "Als weitere Kandidaten für die Lagarde-Nachfolge werden der niederländische Notenbanker Klaas Knot sowie BIZ-Chef Pablo Hernández de Cos genannt; Berichten zufolge könnte es wegen mehrerer gleichzeitig offener EZB-Spitzenposten auf ein größeres europäisches „Personalpaket” hinauslaufen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Erwartung einer Dezember-Zinserhöhung bei der EZB weiter verdichtet, während auch die Fed-Projektionen restriktiver ausfallen und zugleich mehrere EZB-Personalfragen noch offen sind, zeigt, dass geldpolitische und personelle Themen an beiden großen Notenbanken derzeit eng miteinander verwoben sind. Die Marktreaktion dazu findet sich in Meldung 4." }
        ]}
      ],
      reaction: "Die Marktreaktion (Euro, Gold, Bitcoin) wird in Meldung 4 behandelt, Eurozone-Konjunkturdaten in Meldung 5.",
      terms: ["leitzins", "basispunkt", "dot-plot"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:fed-hike"],
      sources: [
        { title: "cash.ch: EZB steuert laut Insider auf Zinserhöhung zu", url: "https://www.cash.ch/news/top-news/ezb-steuert-laut-insider-auf-zinserhohung-zu-980905" },
        { title: "cash-online.de: EZB-Zinsentscheid – Kažimír hält Zinspause für keine Ziellinie", url: "https://www.cash-online.de/a/ezb-zinsentscheid-kazimir-haelt-zinspause-fuer-keine-ziellinie-729262/" },
        { title: "Handelsblatt: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.handelsblatt.com/politik/deutschland/europaeische-zentralbank-rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag/100262803.html" },
        { title: "Handelsblatt: EZB-Direktorin Isabel Schnabel wechselt zum IWF", url: "https://www.handelsblatt.com/finanzen/geldpolitik/ezb-isabel-schnabel-wechselt-vorzeitig-zum-iwf/100257204.html" },
        { title: "Handelsblatt: Geldpolitik – Fed lässt Zinsen unverändert", url: "https://www.handelsblatt.com/finanzen/geldpolitik/geldpolitik-fed-laesst-zinsen-unveraendert-weniger-zinsentscheidungen-ab-2027/100264521.html" }
      ]
    },
    /* 3 MÄRKTE: US-SCHLUSS MONTAG / APPLE-FOLGEN */
    {
      id: "us-wallstreet-montag-apple-folgen-11-03", cats: ["markets"], when: "Schluss Mo 2.11.2026 · vorbörslich Di 3.11.",
      headline: "Der Dow schließt am Montag im Plus, S&P 500 und Nasdaq geben nach, vorbörslich am Dienstag bleiben die US-Futures uneinheitlich vor Apple-Reaktion und Zwischenwahlen",
      sec30: "Der S&P 500 schloss am Montag bei 7.541,40 Punkten (-0,51 %), die Nasdaq Composite bei 25.164,36 Punkten (-1,07 %); der Dow Jones stieg dagegen um 0,41 % auf 51.983,98 Punkte – ein Zeichen für eine Rotation aus Technologiewerten. Nachbörslich fiel die Apple-Aktie nach ihren Quartalszahlen wegen einer schwachen Margen-Prognose um bis zu 4,4 %, vorbörslich am Dienstag vertiefte sich der Rückgang laut Berichten auf bis zu 4,5 bis 4,6 %. Die US-Futures blieben am Dienstagmorgen uneinheitlich: S&P-500-Futures rund -0,2 %, Dow-Futures rund -0,5 %, Nasdaq-100-Futures dagegen leicht im Plus. Heute, Dienstag, finden in den USA die Zwischenwahlen statt – alle 435 Sitze im Repräsentantenhaus, 35 plus zwei Senatssitze und rund 36 Gouverneursposten; Ergebnisse lagen zum Redaktionsschluss noch nicht vor.",
      blocks: [
        { h: "Wie schlossen S&P 500, Nasdaq und Dow am Montag?", items: [
          { tag: "fakt", text: "Der S&P 500 schloss am Montag bei 7.541,40 Punkten (-0,51 %), die Nasdaq Composite bei 25.164,36 Punkten (-1,07 %); der Dow Jones stieg dagegen um 0,41 % auf 51.983,98 Punkte.",
            ask: [{ label: "Warum fällt die Nasdaq?", ref: "chain:nasdaq-why" }] }
        ]},
        { h: "Wie reagierten die Futures auf die Apple-Zahlen?", items: [
          { tag: "fakt", text: "Die Apple-Aktie fiel nachbörslich am Montag zunächst um rund 3 %, vorbörslich am Dienstag vertiefte sich der Rückgang laut Berichten auf bis zu 4,5 bis 4,6 %. Die US-Futures blieben am Dienstagmorgen uneinheitlich: S&P-500-Futures rund -0,2 % (-14 Punkte), Dow-Futures rund -0,5 % (-260 Punkte), Nasdaq-100-Futures dagegen leicht im Plus (+0,1 %, +21 Punkte).",
            ask: [{ label: "Mehr zu den Apple-Zahlen", ref: "s:15" }] }
        ]},
        { h: "Was hat es mit den US-Zwischenwahlen auf sich?", items: [
          { tag: "fakt", text: "Heute, Dienstag, 3.11.2026, finden in den USA die regulären Kongress-Zwischenwahlen statt: zur Wahl stehen alle 435 Sitze im Repräsentantenhaus, 35 der 100 Senatssitze plus zwei Nachwahlen sowie Gouverneursposten in rund 36 Bundesstaaten. Ergebnisse lagen zum Redaktionsschluss noch nicht vor, da die Wahllokale erst im Laufe des Abends (US-Zeit) schließen." },
          { tag: "unbestaetigt", text: "Mehrere US-Medien bezeichnen die Wahl als Stimmungstest für Präsident Trumps zweite Amtszeit; Prognosemärkte sahen zuletzt eine Wahrscheinlichkeit von rund 75 % für einen demokratischen Erfolg im Kongress." },
          { tag: "einordnung", text: "Analysten sehen laut Berichten einen eher begrenzten Markteinfluss der Wahl, da ein möglicher Machtwechsel im Kongress bereits als Basisszenario in den Kursen berücksichtigt sei." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Dow am Montag zulegte, während S&P 500 und Nasdaq nachgaben und die Apple-Reaktion die Futures am Dienstag zusätzlich belastete, zeigt, dass Anleger derzeit stark zwischen einzelnen Technologiewerten und dem breiteren Markt unterscheiden – bei gleichzeitiger Unsicherheit über den Ausgang der Zwischenwahlen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Apple-Zahlen im Detail werden in Meldung 15 behandelt, Gold/Bitcoin/Euro in Meldung 4.",
      terms: ["rendite"],
      followups: ["chain:nasdaq-why", "e:yield-stocks"],
      sources: [
        { title: "CNBC: Apple's stock drops on weak margin forecast in Ternus' first earnings report", url: "https://www.cnbc.com/2026/11/02/apple-aapl-q4-2026-earnings-live-updates.html" },
        { title: "247wallst: Money Rotated Out of Tech Today – the Dow and Nasdaq Split", url: "https://247wallst.com/cards/money-rotated-out-of-tech-today-the-dow-and-nasdaq-split-by-gspc-market-bell-01m6f16sjakb82rhj0p9s07n7a" },
        { title: "Investing.com: US stock futures mixed as Apple slides, midterms loom", url: "https://www.investing.com/news/stock-market-news/us-stock-futures-mixed-as-apple-slides-midterms-loom-4994306" },
        { title: "CNBC: Midterm elections could jolt stocks if Democrats sweep Congress", url: "https://www.cnbc.com/2026/11/03/midterm-election-stock-market.html" },
        { title: "Yahoo Finance: Dow, S&P 500, Nasdaq futures waver ahead of midterm election results", url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-november-3-dow-sp-500-nasdaq-midterms-amd-090846378.html" }
      ]
    },
    /* 4 MÄRKTE: GOLD/BITCOIN/EURUSD */
    {
      id: "gold-bitcoin-eurusd-dienstag-11-03", cats: ["markets"], when: "Stand Di 3.11.2026, Vormittag",
      headline: "Gold und Bitcoin geben vor den US-Zwischenwahlen nach, der Euro verliert einen Teil seiner Montags-Gewinne",
      sec30: "Gold fiel am Dienstagmorgen um rund 0,9 bis 1,0 % auf etwa 3.909 bis 3.910 Dollar je Feinunze, nachdem der Preis am Montag noch gestiegen war. Bitcoin notierte bei rund 76.688 Dollar (-2,04 %); Berichte nennen allgemeine Risikoaversion vor den US-Zwischenwahlen sowie die Korrelation mit dem Tech-Ausverkauf als Hintergrund. Der Euro gab auf rund 1,1185 Dollar nach, nach einem Höchststand von 1,1237 Dollar am Montag, der von den EZB-Zinserwartungen gestützt worden war.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "unbestaetigt", text: "Gold fiel am Dienstagmorgen um rund 0,9 bis 1,0 % auf etwa 3.909 bis 3.910 Dollar je Feinunze, nachdem der Preis am Montag noch um rund 0,8 % gestiegen war.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] }
        ]},
        { h: "Wie hat sich Bitcoin entwickelt?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Dienstag bei rund 76.688 Dollar (-2,04 % ggü. Vortag); als Hintergrund nennen Berichte allgemeine Risikoaversion vor den US-Zwischenwahlen sowie die Korrelation mit dem Tech-Ausverkauf nach den Apple-Zahlen.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der Euro gab am Dienstag auf rund 1,1185 Dollar nach, nach einem Höchststand von 1,1237 Dollar am Montag.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "einordnung", text: "Der Höchststand am Montag war von den sich verdichtenden Erwartungen auf eine EZB-Zinserhöhung im Dezember gestützt worden; mehr dazu in Meldung 2.",
            ask: [{ label: "Mehr zur EZB und zur Schnabel-/Lagarde-Nachfolge", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold und Bitcoin am Dienstag nachgeben, während der Euro einen Teil seiner Montags-Gewinne abgibt, deutet darauf hin, dass die Vorsicht der Anleger vor den US-Zwischenwahlen derzeit über die EZB-Zinserwartungen als Stützungsfaktor für den Euro hinausgeht. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende EZB-Entwicklung wird in Meldung 2 behandelt, die US-Marktlage in Meldung 3.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Goldreporter: Goldpreis heute – Kurse unter Druck vor US-Midterm-Wahlen", url: "https://www.goldreporter.de/goldpreis-03-11-2026/marktbericht-gold/262762/" },
        { title: "KuCoin: BTC price, November 3 2026", url: "https://www.kucoin.com/news/insight/BTC/6ae9292abbcb5200074597b4" },
        { title: "RoboForex: EUR/USD Forecast 03.11.2026", url: "https://roboforex.com/beginners/analytics/forex-forecast/currencies/eur-usd-forecast-2026-11-03/" },
        { title: "Trading Economics: Gold", url: "https://tradingeconomics.com/commodity/gold" }
      ]
    },
    /* 5 WIRTSCHAFT: PMI/ARBEITSMARKT/INFLATION/FRANKREICH */
    {
      id: "eurozone-pmi-arbeitsmarkt-frankreich-11-03", cats: ["economy", "germany", "world"], when: "PMI final Okt. · Arbeitsmarkt Okt. (BA 3.11.) · Frankreich-Abstimmung erneut verschoben 3.11.2026",
      headline: "Die deutsche Arbeitslosigkeit sinkt im Oktober nur leicht, die Eurozone-Industrie wächst laut PMI weiter, Frankreichs Haushaltsabstimmung wird ein zweites Mal verschoben",
      sec30: "Die Bundesagentur für Arbeit meldete für Oktober 2.955.000 Arbeitslose (Quote 6,3 %, -0,1 Punkte ggü. September, aber +44.000 bzw. +0,1 Punkte im Jahresvergleich); BA-Vorstandschefin Nahles sprach von einem vergleichsweise schwachen Rückgang. Der finale Einkaufsmanagerindex (PMI) für die Industrie der Eurozone lag im Oktober bei 52,7 Punkten (September: 52,9), der Produktionsindex fiel auf ein Vier-Monats-Tief. Nationale Oktober-Inflationswerte zeigen weiterhin ein uneinheitliches Bild zwischen 2,8 % in Deutschland und 5,4 % in Italien; die offizielle Eurozone-Schnellschätzung folgt erst morgen, 4.11. In Frankreich wurde die für heute geplante Abstimmung über den Einnahmenteil des Haushalts 2027 in der Nationalversammlung ein zweites Mal verschoben; der Risikoaufschlag französischer zu deutschen Anleihen (OAT/Bund-Spread) lag am 2.11. bei rund 159,9 Basispunkten, nachdem Fitch den Ausblick für Frankreichs Bonität am 31.10. auf „negativ” gesenkt hatte.",
      blocks: [
        { h: "Wie hat sich der deutsche Arbeitsmarkt im Oktober entwickelt?", items: [
          { tag: "fakt", text: "Die Bundesagentur für Arbeit meldete für Oktober 2026 2.955.000 Arbeitslose, eine Quote von 6,3 % (-0,1 Punkte ggü. September, aber +44.000 bzw. +0,1 Punkte im Jahresvergleich); die Zahl offener Stellen lag bei 654.000 (+31.000 ggü. Vorjahr)." },
          { tag: "position", text: "BA-Vorstandschefin Andrea Nahles kommentierte, die wirtschaftlichen Rahmenbedingungen reichten weiterhin nicht für eine echte Besserung aus; der Rückgang falle „vergleichsweise schwach” aus." }
        ]},
        { h: "Wie entwickelt sich die Industrie in der Eurozone?", items: [
          { tag: "fakt", text: "Der finale Einkaufsmanagerindex (PMI) für die Industrie der Eurozone lag im Oktober bei 52,7 Punkten (September: 52,9, vorläufige Schnellschätzung: 52,4); der Produktionsindex fiel auf ein Vier-Monats-Tief von 52,8 Punkten (September: 53,6).",
            ask: [{ label: "Mehr zur Marktreaktion auf Zinserwartungen", ref: "s:2" }] }
        ]},
        { h: "Wie weit driftet die Inflation zwischen den Euroländern auseinander?", items: [
          { tag: "fakt", text: "Nationale Oktober-Inflationswerte zeigen weiterhin ein deutlich uneinheitliches Bild innerhalb der Eurozone: Italien 5,4 %, Spanien 4,9 %, Frankreich 3,4 %, Deutschland 2,8 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] },
          { tag: "unbestaetigt", text: "Vorab-Schätzungen für die Eurozone insgesamt vor der offiziellen Schnellschätzung am 4.11. schwanken je nach Bank zwischen 3,7 % (Bank of America) und 4,0 % (Pantheon Macroeconomics, angehoben von 3,8 % im September) – die endgültige Zahl liegt zum Redaktionsschluss noch nicht vor." }
        ]},
        { h: "Wie ist die Lage in Frankreich?", items: [
          { tag: "fakt", text: "Die für heute, 3.11., geplante Abstimmung über den Einnahmenteil des Haushalts 2027 in der französischen Nationalversammlung wurde ein zweites Mal verschoben; von rund 3.000 eingereichten Änderungsanträgen waren bis zum Vormittag des 2.11. erst 1.943 geprüft. Die Frist für die erste Lesung endet um Mitternacht am 17.11.; ein Rückgriff auf Artikel 49.3 der Verfassung wird diskutiert.",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "n:bund10" }] },
          { tag: "fakt", text: "Der Risikoaufschlag zehnjähriger französischer Staatsanleihen (OAT) zu Bundesanleihen (OAT/Bund-Spread) lag am 2.11. bei rund 159,9 Basispunkten (OAT-Rendite 4,91 %, Bund-Rendite 3,31 %); die Ratingagentur Fitch hatte den Ausblick für Frankreichs Bonität am 31.10. auf „negativ” gesenkt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der deutsche Arbeitsmarkt nur leicht nachgibt und die Eurozone-Industrie laut PMI weiter wächst, während sich die Inflation zwischen den Euroländern deutlich unterscheidet und Frankreichs Haushaltsabstimmung ein zweites Mal verschoben wird, zeigt ein weiterhin uneinheitliches Konjunkturbild innerhalb der Eurozone kurz vor der Oktober-Inflationsschätzung am 4.11." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 6 behandelt, die EZB-Zinserwartungen in Meldung 2.",
      terms: ["basispunkt", "rendite", "inflation"],
      followups: ["e:inflation-expectations", "e:debt-brake"],
      sources: [
        { title: "Bundesagentur für Arbeit: Arbeitsmarkt im Oktober 2026", url: "https://www.arbeitsagentur.de/presse/2026-41-arbeitsmarkt-im-oktober-2026" },
        { title: "finanzen.at: S&P Global Index – Eurozone-Industrie setzt Wachstumskurs im Oktober fort", url: "https://www.finanzen.at/nachrichten/aktien/s&p-global-index-eurozone-industrie-setzt-wachstumskurs-im-oktober-fort-1036699710" },
        { title: "Euronews: Germany, France, Italy and Spain – where was inflation highest in October", url: "https://www.euronews.com/2026/10/30/germany-france-italy-and-spain-where-was-inflation-highest-in-october" },
        { title: "newscord.org: France Postpones 2027 Budget Vote as National Assembly Debates Revenue Section", url: "https://newscord.org/article/france-postpones-2027-budget-vote-as-national-assembly-debates-revenue-section--Story_20261103_Francepostpones2027b56d07e3b" },
        { title: "ideal-investisseur.fr: OAT / Bund spread today", url: "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html" }
      ]
    },
    /* 6 DEUTSCHLAND: BUNDESHAUSHALT/KOALITIONSAUSSCHUSS */
    {
      id: "bundeshaushalt-koalitionsausschuss-11-03", cats: ["germany", "economy"], when: "Bereinigungssitzung 12.11. · Plenumsberatung 24.–27.11. · Koalitionsausschuss 17.11.2026",
      headline: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert, vor dem Koalitionsausschuss am 17. November werden mehrere offene Streitpunkte zwischen CDU, CSU und SPD sichtbar",
      sec30: "Der Zeitplan für die Haushaltsberatungen 2027 bleibt unverändert: Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11.2026 angesetzt, die abschließende Beratung im Bundestagsplenum läuft vom 24. bis 27.11., mit namentlicher Abstimmung am 27.11. Zum Koalitionsausschuss der Spitzen von CDU, CSU und SPD am 17.11. liegt noch keine offizielle Agenda vor, es gilt aber als wahrscheinlich, dass Reformvorhaben zu Rente, Arbeitsmarkt, Gesundheit und Pflege vorangebracht werden sollen. Berichten zufolge belasten die Koalition derzeit mehrere Streitpunkte: der Umgang mit der AfD-Wahl eines Landtagspräsidenten in Sachsen-Anhalt, SPD-Sondierungen mit Linken und Grünen in Berlin sowie ein Besetzungsstreit bei der geplanten Pflegekommission und Uneinigkeit über die 33 Empfehlungen der Rentenkommission.",
      blocks: [
        { h: "Wie ist der aktuelle Stand des Zeitplans für den Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses, bei der die letzten strittigen Fragen geklärt und eine Beschlussempfehlung zum Finanzplan 2026-2030 formuliert werden, ist weiterhin für den 12.11.2026 angesetzt; die abschließende Beratung im Bundestagsplenum läuft vom 24. bis 27.11., mit Generaldebatte zum Kanzleretat und namentlicher Abstimmung in dritter Lesung am 27.11.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Was ist beim Koalitionsausschuss am 17.11. zu erwarten?", items: [
          { tag: "unbestaetigt", text: "Zum Koalitionsausschuss der Spitzen von CDU, CSU und SPD am 17.11.2026 liegt keine offizielle Agenda vor; es gilt aber als wahrscheinlich, dass dabei Reformvorhaben zu Rente, Arbeitsmarkt, Gesundheit und Pflege vorangebracht werden sollen, um sie bis Jahresbeginn 2027 abzuschließen.",
            ask: [{ label: "Mehr zur Rente mit 63", ref: "s:7" }] },
          { tag: "unbestaetigt", text: "Berichten zufolge belasten die Koalition derzeit mehrere Streitpunkte: der Umgang mit der Wahl eines AfD-Politikers zum Landtagspräsidenten in Sachsen-Anhalt, SPD-Sondierungsgespräche mit Linken und Grünen in Berlin sowie ein Besetzungsstreit bei der geplanten Pflegekommission, deren Einsetzung Gesundheitsminister Linnemann (CDU) verschoben hatte, und anhaltende Uneinigkeit über die 33 Empfehlungen der Rentenkommission. Die Union drohte zudem, die Einkommensteuerreform zu blockieren, bis das SPD-geführte Arbeitsministerium Gesetzentwürfe zur Renten- und Arbeitsmarktreform vorlegt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Zeitplan für Bereinigungssitzung und Bundestagsberatung unverändert bleibt, während sich vor dem Koalitionsausschuss am 17.11. mehrere parallel laufende Streitpunkte zwischen CDU, CSU und SPD zeigen, deutet darauf hin, dass sich mehrere wichtige innenpolitische Entscheidungen im Laufe des November bündeln." }
        ]}
      ],
      reaction: "Die Rente mit 63 und die Bundespräsidenten-Nachfolge werden in Meldung 7 behandelt.",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027 – vom Entwurf zum Beschluss", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "ZDFheute: Diese drei Punkte belasten die Koalition – ziemlich sogar", url: "https://www.zdfheute.de/politik/cdu-csu-spd-koalition-koalitionsausschuss-reformen-afd-linke-100.html" },
        { title: "Table.Briefings: Reformen – Termin für Koalitionsausschuss im November", url: "https://table.media/berlin/news/reformen-termin-fuer-koalitionsausschuss-im-november" }
      ]
    },
    /* 7 DEUTSCHLAND: RENTE/UMFRAGEN/BUNDESPRÄSIDENT */
    {
      id: "rente-umfragen-bundespraesident-11-03", cats: ["germany"], when: "INSA-Sonntagsfrage 30.10.–2.11. · CDU-Präsidium zu Bundespräsident-Kandidatur 9.11.2026",
      headline: "Bei der Rente mit 63 bleibt der Streit zwischen Kanzler Merz und Arbeitsminister Schweitzer offen, die Grünen ziehen in einer aktuellen Umfrage erstmals vor die SPD, bei der Bundespräsidenten-Nachfolge drängt CDU-Politikerin Prien auf eine rasche Entscheidung",
      sec30: "Bei der Rente mit 63 bleiben die Positionen zwischen Kanzler Merz, der die Reformvorschläge der Rentenkommission unverändert umsetzen will, und dem neuen Arbeitsminister Schweitzer (SPD), der einen Kompromiss sucht, unverändert; laut ZDF-Politbarometer lehnen 74 % der Bürger die geplante Abschaffung ab. Die INSA-Sonntagsfrage (Erhebungszeitraum 30.10.-2.11., 2.004 Befragte) sieht die AfD bei 28,0 % weiter deutlich vor der Union (20,0 %); die Grünen liegen mit 15,0 % erstmals vor der SPD (14,0 %). Bei der Nachfolge von Bundespräsident Steinmeier (Bundesversammlung entscheidet am 30.1.2027) unterstützt die CSU weiterhin die bayerische Landtagspräsidentin Ilse Aigner, während die CDU zwischen Aigner und eigenen Kandidatinnen wie Julia Klöckner, Karin Prien oder Annegret Kramp-Karrenbauer noch unentschieden ist; Prien drängt öffentlich auf eine Entscheidung bis zur CDU-Präsidiumssitzung am 9.11.",
      blocks: [
        { h: "Wie ist der Stand bei der Rente mit 63?", items: [
          { tag: "position", text: "Kanzler Merz will die Reformvorschläge der Rentenkommission „so umsetzen, wie sie auf dem Tisch liegen”; er hatte zuvor erklärt, „gesund und fit abschlagsfrei früher in Rente zu gehen, das ist weder gerecht, noch können die Rentenversicherung und unsere Volkswirtschaft sich das leisten”.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Arbeitsminister Alexander Schweitzer (SPD), Nachfolger der zurückgetretenen Bärbel Bas, lehnt eine Eins-zu-eins-Umsetzung ab: „Deshalb wird das genau eines der Themen sein, bei denen wir uns zusammensetzen und einen guten Kompromiss finden müssen”; die Kommissionsvorschläge seien für ihn zunächst nur eine Diskussionsgrundlage. SPD-Generalsekretär Tim Klüssendorf bekräftigte, die SPD werde die abschlagsfreie Rente „nicht einfach so abschaffen”." },
          { tag: "unbestaetigt", text: "Laut ZDF-Politbarometer lehnen 74 % der Bürger die geplante Abschaffung der Rente mit 63 ab; ein fertiger gemeinsamer Gesetzentwurf lag zum Redaktionsschluss weiterhin nicht vor." }
        ]},
        { h: "Was zeigt die aktuelle INSA-Sonntagsfrage?", items: [
          { tag: "unbestaetigt", text: "Die INSA-Sonntagsfrage für Bild (Erhebungszeitraum 30.10. bis 2.11.2026, 2.004 Befragte) sieht die AfD bei 28,0 % (-1,5 Punkte zur Vorwoche) weiter deutlich vor der Union mit 20,0 % (+1 Punkt). Die Grünen liegen mit 15,0 % (+1 Punkt) erstmals vor der SPD mit 14,0 %.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie ist der Stand bei der Bundespräsidenten-Nachfolge?", items: [
          { tag: "fakt", text: "Die CSU unterstützt weiterhin die bayerische Landtagspräsidentin Ilse Aigner für die Nachfolge von Bundespräsident Steinmeier (Bundesversammlung entscheidet am 30.1.2027); innerhalb der CDU ist die Haltung uneinheitlich, als Alternativen werden Bundestagspräsidentin Julia Klöckner, Bundesfamilienministerin Karin Prien sowie die frühere Verteidigungsministerin Annegret Kramp-Karrenbauer genannt. Eine endgültige Festlegung der CDU soll erst bei der Präsidiumssitzung am 9.11. erfolgen." },
          { tag: "position", text: "Karin Prien drängt öffentlich auf eine Entscheidung: „Es sollte eine Frau werden.” Zu einer möglichen eigenen Kandidatur sagte sie, das „schmeichelt” ihr, warnte aber, dass Debatten über Kandidatinnen anders geführt würden als über männliche Bewerber." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei der Rente mit 63 weiterhin kein fertiger Gesetzentwurf vorliegt, während die aktuelle INSA-Erhebung mit den erstmals vor der SPD liegenden Grünen eine leichte Verschiebung in der Oppositions- und Regierungslandschaft zeigt und die CDU ihre Festlegung bei der Bundespräsidenten-Nachfolge weiterhin auf den 9.11. vertagt, deutet auf mehrere parallel laufende, noch offene innenpolitische Entscheidungsprozesse hin." }
        ]}
      ],
      reaction: "Der Bundeshaushalt und der Koalitionsausschuss-Termin werden in Meldung 6 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority"],
      sources: [
        { title: "nius.de: Rentenstreit in der Koalition – Merz widerspricht neuem SPD-Arbeitsminister", url: "https://nius.de/politik/merz-widerspricht-neuem-spd-arbeitsminister" },
        { title: "t-online: Nach Bärbel Bas – Union und SPD im Streit, Ärger um Rente mit 63", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101478576/nach-baerbel-bas-union-und-spd-im-streit-aerger-um-rente-mit-63-.html" },
        { title: "nius.de: INSA-Sonntagsfrage – AfD fällt auf 28 Prozent", url: "https://nius.de/politik/afd-faellt-auf-28-prozent-union-legt-zu-gruene-erreichen-15-prozent" },
        { title: "finanznachrichten.de: Prien drängt CDU zu Entscheidung über Bundespräsidentin", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69963073-prien-draengt-cdu-zu-entscheidung-ueber-bundespraesidentin-003.htm" }
      ]
    },
    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-krieg-energieangriffe-abudhabi-11-03", cats: ["world", "geo"], when: "Großangriff Nacht 2./3.11. · Raffinerie-Treffer 1.–3.11. · Selenskyj-Besuch Berlin 3.11. · Abu-Dhabi-Termin jetzt 10./11.11.2026",
      headline: "Russland führt in der Nacht zum Dienstag einen der größten Angriffe auf die ukrainische Energieinfrastruktur seit Kriegsbeginn, die Gespräche in Abu Dhabi werden auf den 10./11. November verschoben, Präsident Selenskyj besucht überraschend Berlin",
      sec30: "In der Nacht zum Dienstag, 3.11., griff Russland nach ukrainischen Angaben mit 289 Drohnen, 17 ballistischen Raketen und 59 Marschflugkörpern zehn Regionen an – laut dem ukrainischen Energieversorger Ukrenergo eine der größten Raketenwellen gegen die Energieinfrastruktur bislang; in Zhytomyr waren mehr als 180.000 Menschen ohne Strom, in Charkiw wurden bei einem Angriff auf ein Krankenhaus mindestens 73 Menschen verletzt. Umgekehrt trafen ukrainische Drohnen an drei aufeinanderfolgenden Nächten russische Großraffinerien in Kstowo, Samara und Jaroslawl. An der Front bei Pokrowsk/Myrnohrad bestreitet der ukrainische Generalstab eine Einkesselung, während unabhängige Beobachter (ISW) die Lage in Myrnohrad als „de facto belagert” einschätzen. US-Sondergesandter Witkoff kündigte an, die geplanten Dreier-Gespräche in Abu Dhabi fänden nun am 10./11.11. statt; am selben Tag, 3.11., besuchte Präsident Selenskyj überraschend Berlin und traf Kanzler Merz.",
      blocks: [
        { h: "Was geschah beim russischen Großangriff in der Nacht zum 3.11.?", items: [
          { tag: "unbestaetigt", text: "Russland griff nach ukrainischen Angaben (Ukrenergo-Chef Zaichenko) mit 289 Drohnen, 17 ballistischen Raketen und 59 Marschflugkörpern zehn Regionen an – eine der größten Raketenwellen gegen die ukrainische Energieinfrastruktur bislang. In der Region Zhytomyr waren mehr als 180.000 Menschen ohne Strom; bei einem Angriff auf ein Krankenhaus in Charkiw wurden nach Angaben mindestens 73 Menschen verletzt. Eine unabhängige Bestätigung der genauen Zahlen liegt nicht vor." }
        ]},
        { h: "Was geschah bei den ukrainischen Gegenangriffen auf russische Raffinerien?", items: [
          { tag: "unbestaetigt", text: "Ukrainische Drohnen trafen an drei aufeinanderfolgenden Nächten (1. bis 3.11.) russische Großraffinerien: die Anlage NORSI in Kstowo, eine Raffinerie in Samara sowie erneut die Slavneft-YANOS-Raffinerie in Jaroslawl; der russische Gouverneur Jewrajew sprach von mindestens sieben Brandherden. Opferzahlen und genaue Schäden liegen nur aus russischen Quellen vor und sind nicht unabhängig verifiziert.",
            ask: [{ label: "Mehr zu Öl- und Gaspreisen", ref: "s:10" }] }
        ]},
        { h: "Wie ist die Lage an der Front, und was ist beim Abu-Dhabi-Treffen neu?", items: [
          { tag: "unbestaetigt", text: "Im Raum Pokrowsk/Myrnohrad meldet der ukrainische Generalstab keine Einkesselung ukrainischer Einheiten, während das russische Verteidigungsministerium ein Vorrücken bei Novoserhijiwka beansprucht; das unabhängige Institute for the Study of War (ISW) schätzt die Lage in Myrnohrad als „de facto belagert” ein." },
          { tag: "fakt", text: "US-Sondergesandter Steve Witkoff kündigte am 3.11. an, die geplanten Dreier-Gespräche zwischen den USA, Russland und der Ukraine in Abu Dhabi fänden nun am 10./11.11.2026 statt, mit Witkoff und Kushner für die USA sowie Medinsky für Russland." },
          { tag: "fakt", text: "Am selben Tag, 3.11., besuchte Präsident Wolodymyr Selenskyj unangekündigt Berlin und wurde von Kanzler Merz im Kanzleramt empfangen; Themen waren laut Berichten militärische und finanzielle Unterstützung, unter anderem Luftverteidigung und eine im Oktober von Selenskyj angefragte Zusatzhilfe von 70 Mrd. Euro von europäischer Seite." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Russland und die Ukraine sich mit einem der größten Angriffe auf die Energieinfrastruktur und drei Raffinerie-Treffern binnen 72 Stunden gegenseitig treffen, während sich der Termin für die geplanten Gespräche in Abu Dhabi auf den 10./11.11. verschiebt und Selenskyj kurzfristig nach Berlin reist, zeigt, dass militärische Eskalation und diplomatische Bemühungen weiterhin eng nebeneinander verlaufen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 10 behandelt, weitere internationale Nachrichten in Meldung 9.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "Kyiv Independent: Russia unleashes biggest mass attack on Ukraine's energy this year", url: "https://kyivindependent.com/russia-unleashes-biggest-mass-attack-on-ukraines-energy-this-year-2/" },
        { title: "Al Jazeera: At least 73 injured as Russia bombs Ukrainian hospital and power plants", url: "https://www.aljazeera.com/news/2026/11/3/at-least-73-injured-as-russia-bombs-ukrainian-hospital-and-power-plants" },
        { title: "The Moscow Times: US-mediated Ukraine peace talks to resume in Abu Dhabi next week, Witkoff says", url: "https://www.themoscowtimes.com/2026/11/03/us-mediated-ukraine-peace-talks-to-resume-in-abu-dhabi-next-week-witkoff-says-a94160" },
        { title: "Ukrinform: No Ukrainian units encircled in Pokrovsk/Myrnohrad agglomeration – General Staff", url: "https://www.ukrinform.net/rubric-ato/4055148-no-ukrainian-units-encircled-in-pokrovskmyrnohrad-agglomeration-general-staff.html" },
        { title: "t-online: Selenskyj besucht Merz in Berlin", url: "https://www.t-online.de/nachrichten/deutschland/id_101510006/selenskyj-besucht-merz-in-berlin.html" }
      ]
    },
    /* 9 INTERNATIONAL/GEOPOLITIK: GAZA/VENEZUELA/TAIWAN/SUDAN */
    {
      id: "international-gaza-venezuela-taiwan-sudan-11-03", cats: ["world", "geo"], when: "Gaza-Vorfälle 2./3.11. · Machado-Rede 30.10. · Taiwan-PLA-Daten 26.10.–2.11. · Sudan-Jahrestag Okt. 2026",
      headline: "Der Gaza-Waffenstillstand bleibt nach neuen tödlichen Vorfällen angespannt, in Venezuela fordert Oppositionsführerin Machado Präsidentschaftswahlen für 2027, Taiwan registriert deutlich mehr chinesische Luftraum-Aktivität",
      sec30: "Der seit Oktober 2025 geltende Gaza-Waffenstillstand bleibt angespannt: Nach palästinensischen Angaben töteten israelische Luftschläge am 2.11. acht Menschen, darunter fünf Polizisten; Israel spricht von Hamas-Kämpfern, die Angriffe vorbereitet hätten, Hamas weist dies zurück. Das Gaza-Medienbüro zählt seit Beginn der Waffenruhe 5.989 israelische Verstöße mit 1.593 Toten. In Venezuela forderte Oppositionsführerin María Corina Machado am 30.10. Präsidentschaftswahlen für 2027; die USA drängen auf einen gestuften Übergangsplan, ein konkreter Wahltermin steht weiterhin nicht fest. Taiwan registrierte für die Woche 26.10.-1.11. 85 chinesische Luftraum-Aktivitäten (+85 % ggü. Vorwoche). Zum Jahrestag der RSF-Eroberung von El Fasher im Sudan bestätigt eine UN-Untersuchung Massentötungen und sexualisierte Gewalt in einem als Völkermord eingeordneten Ausmaß.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen gilt seit Oktober 2025 formal weiter." },
          { tag: "position", text: "Nach palästinensischen Angaben töteten israelische Luftschläge am 2.11. acht Menschen, darunter fünf Polizisten; die israelische Armee erklärte, die Getöteten seien Hamas-Kämpfer gewesen, die Angriffe auf Soldaten und Zivilisten vorbereitet und damit den Waffenstillstand verletzt hätten. Israel geht zudem davon aus, dass sich rund 200 Hamas-Kämpfer in Tunneln in israelisch kontrollierten Gebieten aufhalten." },
          { tag: "unbestaetigt", text: "Hamas weist die Vorwürfe zurück und wirft Israel vor, den Friedensplan zu unterlaufen. Das Government Media Office in Gaza dokumentiert seit Beginn der Waffenruhe 5.989 israelische Verstöße (753 davon im Oktober), mit 1.593 Toten, 5.748 Verletzten und 217 Verschleppten in der Folge; diese Angaben stammen aus einer palästinensischen Quelle und sind nicht unabhängig verifiziert." }
        ]},
        { h: "Was ist in Venezuela neu?", items: [
          { tag: "position", text: "Oppositionsführerin María Corina Machado dankte am 30.10. der Trump-Regierung und forderte erstmals öffentlich seit ihrer Rückkehr aus dem Exil Präsidentschaftswahlen für 2027." },
          { tag: "fakt", text: "Die seit Januar 2026 amtierende Interimspräsidentin Delcy Rodríguez sicherte Wahlen „vor den Augen der Welt” zu, nannte aber keinen konkreten Termin; die USA drängen laut Berichten vom 3.11. auf einen gestuften Plan für einen demokratischen Übergang. Präsident Trump erklärte am 2.11., die USA hätten „totale Kontrolle” über Venezuela und dessen Öl." },
          { tag: "unbestaetigt", text: "Der genaue Termin der nächsten Anhörung im Verfahren gegen den in New York in Untersuchungshaft sitzenden Ex-Präsidenten Maduro ließ sich in den Quellen nicht eindeutig verifizieren; der Fall wurde nach dem Tod des bisherigen Richters an Richterin Analisa Torres übertragen." }
        ]},
        { h: "Was ist bei Taiwan und im Sudan neu?", items: [
          { tag: "fakt", text: "Taiwans Verteidigungsministerium registrierte für die Woche 26.10. bis 1.11. 85 chinesische Luftraum-Aktivitäten rund um die Insel (davon 47 in der Luftraum-Identifizierungszone) – ein Anstieg von 85 % gegenüber der Vorwoche; für den 1./2.11. wurden weitere 19 Einsätze gemeldet." },
          { tag: "unbestaetigt", text: "Zum Jahrestag der Eroberung der sudanesischen Stadt El Fasher durch die paramilitärische RSF (26.10.) bestätigte eine UN-Untersuchung Massentötungen, systematische sexualisierte Gewalt und gezielte ethnische Verfolgung in einem als Völkermord eingeordneten Ausmaß; alleine in den ersten drei Tagen seien mehr als 6.000 Menschen getötet worden. Großbritannien verhängte deshalb Sanktionen gegen 15 sudanesische Militärführer." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Gaza-Waffenstillstand trotz formaler Fortgeltung von neuen tödlichen Vorfällen begleitet bleibt, während sich in Venezuela mit der Wahlforderung Machados und dem US-Druck auf einen Übergangsplan neue Dynamik zeigt und sowohl Taiwan als auch der Sudan laut internationalen Beobachtern unter anhaltend hohem militärischem beziehungsweise humanitärem Druck stehen, zeigt, wie unterschiedlich weit mehrere parallel laufende internationale Konfliktlinien derzeit vorangeschritten sind." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 8 behandelt, die Lage am Golf in Meldung 10.",
      terms: [],
      followups: [],
      sources: [
        { title: "ABC News: Israeli strikes kill eight people in Gaza, medics say", url: "https://www.abc.net.au/news/2026-11-02/israeli-strikes-kill-eight-people-in-gaza-medics-say/107334984" },
        { title: "Al Jazeera: Venezuela's Machado lauds Trump for 'freedom', urges 2027 elections", url: "https://www.aljazeera.com/news/2026/10/30/machado-lauds-trump-for-freedom-floodgate-urges-2027-elections" },
        { title: "Al Jazeera: US urges Venezuela to follow phased plan for democratic transition", url: "https://www.aljazeera.com/news/2026/11/3/us-urges-venezuela-to-follow-phased-plan-for-democratic-transition" },
        { title: "Taiwan Security Monitor: PLA Activity Update – Week of October 26–November 1, 2026", url: "https://taiwansecuritymonitor.substack.com/p/pla-activity-update-the-week-of-october-87d" },
        { title: "OHCHR: Sudan – Evidence in El-Fasher reveals genocidal campaign", url: "https://www.ohchr.org/en/press-releases/2026/02/sudan-evidence-el-fasher-reveals-genocidal-campaign-targeting-non-arab" }
      ]
    },
    /* 10 ENERGIE/GEOPOLITIK: GOLF/HORMUZ/OPEC+ */
    {
      id: "golf-hormuz-opecplus-energie-11-03", cats: ["energy", "geo"], when: "US-Angriff Qeshm 2.11. · OPEC+-Entscheidung 1.11. · TTF/Gasspeicher-Stand 3.11.2026",
      headline: "Die Straße von Hormus gilt nach neuen Tankerangriffen und US-Luftschlägen auf die iranische Insel Qeshm als faktisch geschlossen, der Ölpreis und der europäische Gaspreis steigen deutlich, die deutschen Gasspeicher verfehlen ihr Herbstziel",
      sec30: "Die Straße von Hormus gilt laut Schifffahrts-Trackern zum 3.11. als faktisch geschlossen für den kommerziellen Verkehr, nachdem ein katarischer LNG-Tanker und ein weiterer Frachter von unidentifizierten Objekten getroffen worden waren. Am 2.11. führte das US-Militär nach eigenen Angaben „begrenzte, defensive” Luftschläge auf die iranische Insel Qeshm durch, nachdem Iran zuvor auf ein US-Flugzeug gefeuert haben soll. Irans Außenminister Araghchi sprach nach Gesprächen mit katarischen Vermittlern von „keinen großen Durchbrüchen”. Die OPEC+ hatte am 1.11. ihre Dezember-Förderquoten unverändert bei rund 31 Mio. Barrel pro Tag gelassen. Brent stieg daraufhin am Dienstag um rund 1,8 bis 2,1 % auf etwa 106 bis 107 Dollar, der europäische Gas-Future TTF um mehr als 3 % auf rund 98,26 Euro je Megawattstunde. Die deutschen Gasspeicher erreichten zum 1.11. rund 61 % Füllstand und verfehlten damit das gesetzliche Herbstziel von 80 %.",
      blocks: [
        { h: "Was geschah zuletzt in der Straße von Hormus?", items: [
          { tag: "unbestaetigt", text: "Die Straße von Hormus gilt laut mehreren Schifffahrts-Trackern zum 3.11. als faktisch geschlossen für den kommerziellen Verkehr – am Samstag passierten nur fünf Frachtschiffe die Meerenge, am Sonntag keines. Ein katarischer LNG-Tanker wurde Ende Oktober von „unidentifizierten Objekten” getroffen, ein weiterer Tanker am Sonntagabend mit Brand an Bord; 25 Seeleute wurden evakuiert. Irans Marine erklärte, zwei Tanker seien auf Minen gelaufen – eine unabhängig nicht bestätigte Darstellung.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was haben die US-Luftschläge auf Qeshm zu bedeuten?", items: [
          { tag: "unbestaetigt", text: "Nach Angaben von US-Beamten führte das US-Militär am 2.11. „begrenzte, defensive” Luftangriffe auf die iranische Insel Qeshm an der Straße von Hormus durch – als Reaktion darauf, dass Iran zuvor auf ein US-Flugzeug gefeuert habe. Iranische Staatsmedien meldeten mehrere Explosionen auf der Insel; eine unabhängige Bestätigung beider Darstellungen liegt nicht vor." }
        ]},
        { h: "Wie ist der Stand bei den Vermittlungsgesprächen und der OPEC+-Entscheidung?", items: [
          { tag: "position", text: "Irans Außenminister Abbas Araghchi erklärte am 2.11., die Gespräche mit katarischen Vermittlern über das Wochenende hätten „keine großen Durchbrüche” gebracht; ein hochrangiger iranischer Vertreter sagte, Katar habe lediglich „unannehmbare Ideen, kein Angebot” vorgelegt." },
          { tag: "fakt", text: "Die siebenköpfige Kerngruppe der OPEC+ beließ am 1.11. die Dezember-Förderquoten unverändert bei rund 31 Mio. Barrel pro Tag – der dritte Monat in Folge ohne Änderung; als Begründung nennen Berichte die anhaltende Förderbeschränkung durch den Golf-Konflikt. Die Entscheidung über den Förderrahmen 2027 fällt erst beim nächsten Treffen am 29.11.2026.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie haben sich Ölpreis, Gaspreis und die deutschen Gasspeicher entwickelt?", items: [
          { tag: "fakt", text: "Brent stieg am Dienstag um rund 1,8 bis 2,1 % auf etwa 106 bis 107 Dollar je Barrel, WTI auf rund 97 Dollar; der europäische Gas-Future TTF stieg um mehr als 3 % auf rund 98,26 Euro je Megawattstunde – als Hintergrund nennen Berichte die Meldungen über die US-Luftschläge auf Qeshm.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "fakt", text: "Die deutschen Gasspeicher erreichten laut Bundesnetzagentur zum 1.11.2026 rund 61 % Füllstand und verfehlten damit das gesetzliche Herbstziel von 80 %; die Behörde sieht die Versorgungssicherheit dennoch aktuell nicht gefährdet. Frankreich (86,8 %), Italien (91,1 %) und Polen (99,1 %) liegen deutlich darüber." },
          { tag: "unbestaetigt", text: "Die Internationale Energieagentur (IEA) warnte am 3.11., die angespannte Lage auf dem Weltgasmarkt könne bis weit ins nächste Jahr anhalten; in einem Worst-Case-Szenario könnten die europäischen Speicher bis Ende März unter 10 % fallen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Ölpreis und europäischer Gaspreis nach den neuen Tankerangriffen und den US-Luftschlägen auf Qeshm deutlich steigen, während die OPEC+ ihre Förderquoten trotz der Lage unverändert lässt und die deutschen Gasspeicher ihr Herbstziel verfehlen, zeigt, wie eng geopolitische Eskalation am Golf, Energiepreise und die Versorgungslage in Europa derzeit miteinander verknüpft sind.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 8 behandelt, die US-Zwischenwahlen in Meldung 3.",
      terms: ["brent", "opec-plus", "ttf", "wti"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "e:opec-plus-why", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "Al Jazeera: Qatar LNG carrier struck by 'unidentified objects' in Gulf", url: "https://www.aljazeera.com/news/2026/11/1/qatar-lng-carrier-struck-by-unidentified-objects-in-gulf" },
        { title: "CNN: US military conducts strikes on Iran's Qeshm Island in defensive operation, officials say", url: "https://www.cnn.com/2026/11/02/politics/us-strikes-iran-qeshm-island" },
        { title: "Breitbart: Iran Says No Breakthroughs in 'Very Intensive' Peace Talks with Qatar", url: "https://www.breitbart.com/middle-east/2026/11/02/iran-says-no-breakthroughs-in-very-intensive-peace-talks-with-qatar/" },
        { title: "The National: Opec+ holds December oil output targets steady as Iran war disrupts supply", url: "https://www.thenationalnews.com/business/energy/2026/11/01/opec-holds-december-oil-output-targets-steady-as-iran-war-disrupts-supply/" },
        { title: "onvista: IEA erwartet auch 2027 angespannte Lage auf dem Gasmarkt", url: "https://onvista.de/news/2026/11-03-iea-erwartet-auch-2027-angespannte-lage-auf-dem-gasmarkt-0-10-26571695" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL/HENSOLDT/RENK/CALDEN */
    {
      id: "rheinmetall-hensoldt-renk-calden-11-03", cats: ["defence"], when: "Kurse Di 3.11. · Brand Calden Nacht zum 30.10. · Q3-Zahlen 5.11.2026",
      headline: "Rheinmetall kämpft vor den Q3-Zahlen um die 1.000-Euro-Marke, bei Hensoldt belastet weiterhin das ZEBEL-Softwareproblem, der hessische Staatsschutz ermittelt wegen eines mutmaßlich linksextrem motivierten Brandanschlags auf eine Rheinmetall-Baustelle",
      sec30: "Die Rheinmetall-Aktie notiert vor den Q3-Zahlen am 5.11. bei rund 998 bis 1.004 Euro, unterhalb der 50-Tage-Linie; Analysten erwarten einen Gewinnsprung von über 16 % ggü. Vorjahr, Jefferies bestätigt die Kaufempfehlung mit Kursziel 1.350 Euro. Die Hensoldt-Aktie fiel zuletzt auf rund 82,7 bis 83,5 Euro; das Analysehaus mwb senkte sein Kursziel auf 60 Euro und rät zum Verkauf, während Deutsche Bank und Warburg deutlich optimistischer bleiben. RENK notiert bei rund 36 Euro, seit Jahresbeginn rund 32,6 % im Minus. Der hessische Staatsschutz ermittelt wegen eines Brandanschlags in der Nacht zum Freitag, 30.10. (korrigiertes Datum), bei dem auf einer Rheinmetall-Baustelle in Kassel-Calden drei Radlader brannten; ein im Internet veröffentlichtes Bekennerschreiben auf einer als linksextremistisch eingestuften Plattform wird auf Echtheit geprüft.",
      blocks: [
        { h: "Wie entwickelten sich die Aktien von Rheinmetall, Hensoldt und RENK?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie notiert vor den Q3-Zahlen am 5.11. bei rund 998 bis 1.004 Euro, unterhalb der 50-Tage-Linie; Analysten erwarten einen Gewinn je Aktie von rund 7,00 Euro und einen Umsatz von 3,23 bis 3,40 Mrd. Euro (+16 % ggü. Vorjahresquartal). Jefferies bestätigte die Kaufempfehlung mit Kursziel 1.350 Euro.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Nachrichten?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Die Hensoldt-Aktie fiel zuletzt um rund 1,1 bis 2,0 % auf etwa 82,7 bis 83,5 Euro. Das Analysehaus mwb senkte sein Kursziel von 62 auf 60 Euro und bestätigte „Sell”, während die Deutsche Bank ihr Kursziel bei 105 Euro beließ und Warburg Research es auf 94 Euro anhob; der Analystenkonsens liegt bei rund 100 Euro." },
          { tag: "fakt", text: "RENK notierte am 3.11. bei rund 36 Euro – seit Jahresbeginn rund 32,6 % im Minus; der Analystenkonsens sieht ein Kursziel von rund 60 Euro." }
        ]},
        { h: "Was ist beim ZEBEL-Logistikproblem und beim Brand in Kassel-Calden neu?", items: [
          { tag: "unbestaetigt", text: "Softwareprobleme im neuen Hensoldt-Logistikzentrum Wolfhagen (ZEBEL) verursachen laut Berichten weiterhin Störungen bei der Ersatzteilversorgung der Bundeswehr und von Industriepartnern; Hensoldt erklärte, man priorisiere derzeit Ausbildungsprojekte." },
          { tag: "unbestaetigt", text: "In der Nacht zum Freitag, 30.10.2026 (nicht zum 1.11., wie teils berichtet), brannten auf einer Rheinmetall-Baustelle am Flughafen Kassel-Calden drei Radlader; die Polizei geht von vorsätzlicher Brandstiftung aus. Ein im Internet veröffentlichtes Bekennerschreiben auf einer vom Verfassungsschutz als linksextremistisch eingestuften Plattform – das dazu aufruft, Nordhessen „von einem Drehkreuz der Aufrüstung zu einem Ort des Widerstands” zu machen – wird vom Staatsschutz der Polizeidirektion Nordhessen auf Echtheit geprüft." },
          { tag: "position", text: "Hessens Innenminister Poseck (CDU) sprach von einem „gezielten Anschlag” und sagte: „Dies ist ein weiterer Beleg dafür, dass sich die linksextreme Szene radikalisiert hat”; er brachte die Tat in Verbindung mit weiteren mutmaßlich linksextrem motivierten Vorfällen in Hessen, etwa einem Sprengstoffanschlag auf ein CDU-Büro in Offenbach im September." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rheinmetall trotz des Vorfalls in Kassel-Calden vor den Q3-Zahlen stabil bleibt, während Hensoldt wegen des andauernden Logistikproblems von Analysten unterschiedlich bewertet wird und RENK weiterhin deutlich unter dem Analystenkonsens-Kursziel notiert, zeigt, dass unternehmensspezifische Faktoren die allgemein hohe Nachfrage nach Rüstungsgütern einzelner Zulieferer unterschiedlich stark überlagern. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die NATO-Verteidigungsausgaben und das Arminius-Programm werden in Meldung 12 behandelt, der Ukraine-Krieg in Meldung 8.",
      terms: [],
      followups: ["e:defence-stocks"],
      sources: [
        { title: "Börse Express: Rheinmetall-Aktie – Analysten erwarten Gewinnsprung am 5. November", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-analysten-erwarten-gewinnsprung-am-5-november-955031" },
        { title: "hessenschau: Feuer auf Rheinmetall-Baustelle in Calden – Polizei geht von Brandstiftung aus", url: "https://hessenschau.de/panorama/feuer-auf-baustelle-von-waffenhersteller-rheinmetall---staatsschutz-ermittelt-v1,calden-brandstiftung-100.html" },
        { title: "hessenschau: Calden – Polizei prüft Bekennerschreiben nach Brand auf Rheinmetall-Baustelle", url: "https://www.hessenschau.de/panorama/calden-polizei-prueft-bekennerschreiben-nach-brand-auf-rheinmetall-baustelle-v5,calden-brandstiftung-100.html" },
        { title: "Börse Express: Hensoldt-Aktie – Versorgungsstörungen bei Bundeswehr eingeräumt", url: "https://www.boerse-express.com/news/articles/hensoldt-aktie-versorgungsstoerungen-bei-bundeswehr-eingeraeumt-958196" },
        { title: "ad-hoc-news.de: RENK Group-Aktie – aktueller Kursstand", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/renk-group-aktie-am-montagmittag-bei-36-94-euro/70445296" }
      ]
    },
    /* 12 DEFENCE: EURONAVAL/BUNDESTAG/NATO/ARMINIUS */
    {
      id: "euronaval-bundestag-nato-arminius-11-03", cats: ["defence"], when: "Euronaval Paris 3.–6.11. · Haushaltsausschuss 4.11. · Arminius-Verschiebung auf Februar 2027",
      headline: "Auf der Rüstungsmesse Euronaval in Paris zeigen Rheinmetall und RENK neue Produkte, der Bundestags-Haushaltsausschuss berät morgen über sieben weitere Rüstungsvorhaben, die große Boxer-Bestellung Arminius verschiebt sich laut Berichten auf Februar 2027",
      sec30: "Auf der Rüstungsmesse Euronaval in Paris (3. bis 6.11.) mit Ausstellern aus über 70 Ländern zeigt Rheinmetall Komponenten für „Hybrid-Fleet”-Konzepte sowie das Lenkflugkörper-Abwehrsystem FV-014; RENK präsentiert erstmals sein maritimes Portfolio, darunter ein Antriebspaket für ein unbemanntes Schiffsprogramm eines NATO-Staates. Der Bundestags-Haushaltsausschuss berät morgen, 4.11., über sieben weitere Rüstungsvorhaben von jeweils über 25 Mio. Euro, darunter eine Vertragsanpassung beim Eurofighter und SPIKE-ER2-Lenkraketen für den Kampfhubschrauber H145M. Die für Dezember 2026 geplante Großbestellung von bis zu 1.800 zusätzlichen Boxer-Radpanzern (Arminius) verschiebt sich laut Berichten auf Februar 2027. Die NATO-Verteidigungsausgaben der europäischen Partner und Kanadas steigen 2026 um 11 % auf 777 Mrd. Dollar, Deutschland meldet Rekordausgaben von 124,7 Mrd. Euro.",
      blocks: [
        { h: "Was ist auf der Rüstungsmesse Euronaval neu?", items: [
          { tag: "fakt", text: "Die Rüstungsmesse Euronaval findet vom 3. bis 6.11.2026 in Paris-Le Bourget statt, mit Ausstellern aus über 70 Ländern; der globale Marinerüstungsmarkt sei binnen zwei Jahren um rund 50 % auf über 122 Mrd. Dollar gewachsen. Rheinmetall zeigt Komponenten für „Hybrid-Fleet”-Konzepte sowie das Lenkflugkörper-Abwehrsystem FV-014, das ab 2027 an die Bundeswehr geliefert werden soll." },
          { tag: "fakt", text: "RENK präsentiert erstmals sein maritimes Portfolio: Seit April 2026 liefert das Unternehmen ein Antriebspaket (unter anderem das Getriebe T2RECS) für ein unbemanntes Schiffsprogramm eines NATO-Staates; die Tochter Renk Magnet-Motor erhielt zudem einen Folgeauftrag von Saab über drei Stirling-Stromerzeugungssysteme für ein U-Boot-Programm." }
        ]},
        { h: "Welche neuen Bundeswehr-Beschaffungsvorhaben stehen morgen an?", items: [
          { tag: "fakt", text: "Der Bundestags-Haushaltsausschuss berät am 4.11.2026 über sieben weitere Rüstungsvorhaben von jeweils über 25 Mio. Euro: eine Vertragsanpassung beim Eurofighter (derzeit 38 Tranche-4- und 20 Tranche-5-Jets beauftragt), Bildverstärkervorsätze für Handwaffen, Troposcatter-Richtfunksysteme für das TaWAN-Netzwerk, zusätzliche geschützte Sanitätseinrichtungen Role 2B, Übungsmunition für den Schützenpanzer Puma sowie SPIKE-ER2-Panzerabwehrraketen für den Kampfhubschrauber H145M.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] }
        ]},
        { h: "Was ist beim Arminius-Programm und den NATO-Ausgaben neu?", items: [
          { tag: "unbestaetigt", text: "Die für Dezember 2026 geplante Großbestellung von bis zu 1.800 zusätzlichen Boxer-Radpanzern (Arminius-Programm) verschiebt sich laut Berichten auf Februar 2027; der Rahmenvertrag soll ein Gesamtvolumen von bis zu 75 bis 77 Mrd. Euro umfassen, mit einer Festbestellung von rund 25 Mrd. Euro. Hersteller sind Rheinmetall und KNDS Deutschland gemeinsam." },
          { tag: "fakt", text: "Fünf von 32 NATO-Staaten (Estland, Griechenland, Lettland, Litauen, Polen) erreichen 2026 bereits das 5-Prozent-Ziel; die Verteidigungsausgaben der europäischen NATO-Partner und Kanadas steigen 2026 um 11 % auf 777 Mrd. Dollar. Deutschland meldet für 2026 Rekordausgaben von 124,7 Mrd. Euro und strebt bis 2029 3,5 % des BIP an.",
            ask: [{ label: "Was ist das NATO-Ausgabenziel?", ref: "e:nato-target" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die NATO-Verteidigungsausgaben insgesamt weiter steigen und der Bundestag über mehrere kleinere Rüstungsvorhaben berät, während sich der große Boxer-Auftrag Arminius laut Berichten auf Februar 2027 verschiebt, zeigt, dass die Umsetzung der angekündigten Aufrüstung sich weiterhin über viele einzelne, zeitlich versetzte Beschlüsse erstreckt." }
        ]}
      ],
      reaction: "Die Kursbewegungen bei Rheinmetall, Hensoldt und RENK werden in Meldung 11 behandelt, der Ukraine-Krieg in Meldung 8.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "presseportal: Euronaval 2026 – RENK Group treibt die nächste Generation maritimer Mobilität an", url: "https://www.presseportal.de/pm/171595/6380055" },
        { title: "ESUT: Euronaval 2026 – Rheinmetall-Elemente für die Hybrid-Fleet", url: "https://esut.de/2026/11/meldungen/76439/euronaval-2026-rheinmetall-elemente-fuer-die-hybrid-fleet/" },
        { title: "ESUT: Bundeswehr – 7 Rüstungsvorhaben zur Entscheidung", url: "https://esut.de/2026/11/meldungen/76427/bundeswehr-7-ruestungsvorhaben-ent/" },
        { title: "hartpunkt: Boxer-Großbestellung Arminius kommt offenbar erst im Februar 2027", url: "https://www.hartpunkt.de/boxer-grossbestellung-arminius-kommt-offenbar-erst-im-februar-2027/" },
        { title: "ZDFheute: Nato beschließt Fünf-Prozent-Ziel für Verteidigungsausgaben", url: "https://www.zdfheute.de/politik/ausland/nato-fuenf-prozent-ziel-verteidigung-ausgaben-100.html" }
      ]
    },
    /* 13 DEALS: BASF/EVONIK/EQT-QIAGEN/TESLA-SPACEX */
    {
      id: "basf-evonik-eqt-qiagen-teslaspacex-11-03", cats: ["deals", "pe"], when: "Evonik-Q3 3.11.2026 (heute) · Qiagen-Vorabzahlen · Tesla/SpaceX-Sonderausschüsse Okt.",
      headline: "Evonik meldet zum Jahresauftakt der Q3-Saison einen Nettoverlust trotz deutlich höherem EBITDA, bei Qiagen setzt der EQT-Deal die Jahresprognose aus, bei Tesla und SpaceX sinkt laut Prognosemärkten die Wahrscheinlichkeit einer baldigen Fusion",
      sec30: "Evonik meldete heute, 3.11., für das dritte Quartal einen Umsatz von 3,825 Mrd. Euro (+13 %) und ein bereinigtes EBITDA von 629 Mio. Euro (+40 %), unter dem Strich aber einen Nettoverlust von 53 Mio. Euro wegen einer 313-Mio.-Euro-Rückstellung für zusätzliche Effizienzmaßnahmen; die Jahresprognose wurde auf die obere Hälfte der EBITDA-Spanne angehoben. Evonik hatte das auf 24,00 Euro je Aktie erhöhte BASF-Angebot (rund 11,2 Mrd. Euro) bereits am 30.10. offiziell abgelehnt. Beim bereits besiegelten EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) legte Qiagen vorläufige Q3-Zahlen vor und setzte wegen der laufenden Transaktion die Jahresprognose aus; die vollständigen Zahlen folgen morgen. Bei Tesla und SpaceX bleibt eine Fusion unbestätigt; laut Prognosemarkt Polymarket ist die Wahrscheinlichkeit einer Ankündigung bis Ende 2026 zuletzt auf 16,0 % gefallen.",
      blocks: [
        { h: "Was zeigen die heutigen Evonik-Q3-Zahlen, und wie ist der Stand bei BASF?", items: [
          { tag: "fakt", text: "Evonik meldete für das dritte Quartal 2026 einen Umsatz von 3,825 Mrd. Euro (+13 % ggü. Vorjahr) und ein bereinigtes EBITDA von 629 Mio. Euro (+40 %, Marge 16,4 %), unter dem Strich aber einen Nettoverlust von 53 Mio. Euro wegen einer zusätzlichen Restrukturierungsrückstellung von 313 Mio. Euro; die Jahresprognose wurde auf die obere Hälfte der Spanne von 2,0 bis 2,2 Mrd. Euro EBITDA angehoben.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "fakt", text: "Der Evonik-Vorstand hatte das von BASF auf 24,00 Euro je Aktie (rund 11,2 Mrd. Euro, rund 40 % Aufschlag) erhöhte Angebot am 30.10.2026 offiziell abgelehnt, ließ aber vertraulichen Informationsaustausch zu." },
          { tag: "unbestaetigt", text: "CEO Christian Kullmann fällt nach einer schweren Operation bis voraussichtlich Anfang 2027 aus, Interims-CEO ist Claus Rettig; Finanzvorstand Rauch bezeichnete das Timing von BASFs Angebot als „merkwürdig”, da es kurz nach Bekanntwerden von Kullmanns Ausfall erfolgte. Die RAG-Stiftung (rund 43,8 % der Evonik-Anteile) berät eigenständig, ohne sich bislang öffentlich zum erhöhten Angebot zu äußern; Evoniks geprüfte Übernahme des US-Konzerns Ashland lief bereits vor dem BASF-Interesse und gilt nicht eindeutig als reine Abwehrmaßnahme." }
        ]},
        { h: "Wie ist der Stand beim EQT-Kauf von Qiagen?", items: [
          { tag: "fakt", text: "EQT bietet gemeinsam mit Co-Investoren von ADIA und CPP Investments 46,50 Euro je Aktie in bar, Gesamtwert rund 10,8 Mrd. Euro (40,3 % Aufschlag auf den letzten Schlusskurs); Vorstand und Aufsichtsrat haben einstimmig zugestimmt, das Closing wird für Mitte 2027 erwartet.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Qiagen legte vorläufige Q3-Zahlen vor (Nettoumsatz 548 Mio. Dollar, bereinigtes EPS 0,65 Dollar), setzte wegen der laufenden Transaktion aber die Jahresprognose aus und hält keine Telefonkonferenz ab; die vollständigen Zahlen folgen morgen, 4.11." },
          { tag: "unbestaetigt", text: "Analystenreaktionen sind gemischt: Berenberg und Citigroup hoben ihre Kursziele an, JPMorgan, Barclays und Baird stuften dagegen auf „Neutral” zurück und sehen kaum verbleibendes Kurspotenzial; ein Aktionär (PSquared) fordert die Annahme des Angebots, andere halten die Prämie angesichts gestiegener Nachfrage für zu niedrig." }
        ]},
        { h: "Was ist bei Tesla und SpaceX neu?", items: [
          { tag: "unbestaetigt", text: "Bei Tesla und SpaceX liegen weiterhin keine Fusionsvereinbarung und keine Konditionen vor; beide Unternehmen haben unabhängige Sonderausschüsse eingesetzt, Musk ist wegen eines Interessenkonflikts ausgeschlossen. Musk bezifferte Ende Oktober die Hürde für eine Fusion auf rund 1,98 Mrd. nötige „Ja”-Stimmen und nannte dies „quite a high hurdle”. Laut Prognosemarkt Polymarket ist die Wahrscheinlichkeit einer Ankündigung bis Ende 2026 zuletzt auf 16,0 % gefallen (von rund 40 % im Juni), bis Ende 2027 auf rund 66,5 %.",
            ask: [{ label: "Mehr zum Private-Credit-Markt", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Evonik zum Jahresauftakt der Q3-Saison trotz höherem EBITDA einen Nettoverlust meldet und am BASF-Angebot festhält, während der EQT-Kauf von Qiagen bereits in der Umsetzungsphase ist und bei Tesla/SpaceX die Wahrscheinlichkeit einer kurzfristigen Fusion laut Prognosemärkten sinkt, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "≈ 11,2 Mrd. € (BASF/Evonik-Angebot, abgelehnt) · ≈ 10,8 Mrd. € (EQT/Qiagen, bestätigt)", buyer: "BASF (abgelehnt) · EQT-Konsortium", target: "Evonik · Qiagen", sector: "Chemie / Biotech-Diagnostik", type: "Unternehmensübernahmen (BASF/Evonik abgelehnt, EQT/Qiagen bestätigt; eine mögliche Evonik-Gegenübernahme von Ashland ist unbestätigt, Finanzierung, Bewertung und Banken dazu nicht in den Quellen genannt)" },
      reaction: "Weitere Großdeals und der Private-Credit-Markt werden in Meldung 14 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "Investing.com: Evonik Q3 2026 slides – EBITDA surges 40%, ROCE target upgraded", url: "https://www.investing.com/news/company-news/evonik-q3-2026-slides-ebitda-surges-40-roce-target-upgraded-93CH-4994465" },
        { title: "finanznachrichten.de: RAG-Stiftung berät über BASF-Übernahmepläne für Evonik", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69800545-rag-stiftung-beraet-ueber-basf-uebernahmeplaene-fuer-evonik-016.htm" },
        { title: "MarketScreener: Qiagen Agrees to EUR10.8 Billion Takeover by EQT", url: "https://www.marketscreener.com/news/qiagen-agrees-to-eur10-8-billion-takeover-by-eqt-ce785cd9df8cf526" },
        { title: "Qiagen Corporate IR: QIAGEN reports preliminary Q3 2026 results", url: "https://corporate.qiagen.com/English/newsroom/press-releases/press-release-details/2026/QIAGEN-reports-preliminary-Q3-2026-results/default.aspx" },
        { title: "247wallst: Musk Says A Tesla-SpaceX Merger Is 'A Good Idea' But Admits It Would Require 1.98 Billion Yes Votes", url: "https://247wallst.com/investing/2026/10/29/musk-says-a-tesla-spacex-merger-is-a-good-idea-but-admits-it-would-require-1-98-billion-yes-votes-he-calls-it-quite-a-high-hurdle/" }
      ]
    },
    /* 14 DEALS/PE/PRIVATE CREDIT: MARVELL/LUMENTUM/ADT/BLUE OWL/ARES */
    {
      id: "marvell-lumentum-adt-privatecredit-11-03", cats: ["deals", "pe", "credit"], when: "Marvell/Lumentum angekündigt 2.11. · Apollo/ADT-Finanzierung 2.11. · Blue-Owl-/Ares-Q3 Ende Okt.",
      headline: "Marvell übernimmt Lumentum in einer 115-Mrd.-Dollar-Aktientransaktion, Apollo stellt für die Thrive-Holdings-Übernahme von ADT 9,6 Mrd. Dollar Fremdkapital bereit, Blue Owl und Ares melden für das dritte Quartal weiter wachsendes verwaltetes Vermögen",
      sec30: "Marvell Technology kündigte am 2.11. die Übernahme von Lumentum in einer reinen Aktientransaktion an (Umtauschverhältnis 4,500 Marvell-Aktien je Lumentum-Aktie), impliziter Unternehmenswert rund 115 Mrd. Dollar, rund 23,9 % Aufschlag; begründet wird der Deal mit der Kombination von Konnektivität und Photonik für KI-Infrastruktur. Ebenfalls am 2.11. wurde bekannt, dass Apollo Global Management rund 9,6 Mrd. Dollar Fremdkapital für die von Thrive Holdings geplante Übernahme des Sicherheitsunternehmens ADT bereitstellt (Eigenkapitalwert rund 7,6 Mrd. Dollar, Unternehmenswert 15,3 Mrd. Dollar). Bei den Private-Credit-Häusern meldete Blue Owl Ende Oktober ein verwaltetes Vermögen von 330 Mrd. Dollar (+12 %), Ares 691 Mrd. Dollar (+16 %); Blackstones BDC-Zahlen folgen erst morgen. Die zuletzt verfügbaren branchenweiten Risikodaten zu Rücknahmen bei nicht börsennotierten BDCs stammen weiterhin aus dem zweiten Quartal 2026.",
      blocks: [
        { h: "Was ist der neue Stand bei Marvell/Lumentum und Apollo/ADT?", items: [
          { tag: "fakt", text: "Marvell Technology kündigte am 2.11.2026 die Übernahme von Lumentum in einer reinen Aktientransaktion an: Umtauschverhältnis 4,500 Marvell-Aktien je Lumentum-Aktie, impliziter Unternehmenswert rund 115 Mrd. Dollar (rund 1.132 Dollar je Aktie), rund 23,9 % Aufschlag. Nach Abschluss sollen Marvell-Aktionäre rund 67 % und Lumentum-Aktionäre rund 33 % des kombinierten Unternehmens halten; Synergien von über 1 Mrd. Dollar pro Jahr werden angestrebt." },
          { tag: "fakt", text: "Apollo Global Management stellt laut Bloomberg (2.11.) rund 9,6 Mrd. Dollar Fremdkapital für die von Thrive Holdings (unterstützt von Josh Kushner) geplante Übernahme des Sicherheitsunternehmens ADT bereit: 10,00 Dollar je Aktie in bar, 45,6 % Aufschlag, Eigenkapitalwert rund 7,6 Mrd. Dollar, Unternehmenswert 15,3 Mrd. Dollar; Closing wird für das erste Quartal 2027 erwartet.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was zeigen die Q3-Zahlen von Blue Owl und Ares?", items: [
          { tag: "fakt", text: "Blue Owl meldete für das dritte Quartal (29.10.) ein verwaltetes Vermögen von 330 Mrd. Dollar (+12 % ggü. Vorjahr) und über die vergangenen zwölf Monate 49 Mrd. Dollar neu eingesammeltes Kapital; die Aktie stieg daraufhin um 7 %.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "fakt", text: "Ares Management meldete für das dritte Quartal ein verwaltetes Vermögen von 691 Mrd. Dollar (+16 % ggü. Vorjahr) bei einem GAAP-Nettogewinn von 85,3 Mio. Dollar; die Quartalsdividende stieg um 20 % auf 1,35 Dollar. Blackstones BDC-Zahlen (BXSL) stehen erst morgen, 4.11., an." }
        ]},
        { h: "Wie ist die Risikolage bei Private Credit insgesamt?", items: [
          { tag: "unbestaetigt", text: "Die zuletzt verfügbaren branchenweiten Risikodaten stammen weiterhin aus dem zweiten Quartal 2026: Laut Fitch erreichte die Ausfallrate bei Private-Credit-Krediten mit 6,0 % einen Rekordwert, zehn von 16 nicht börsennotierten Business Development Companies (BDCs) konnten Rücknahmewünsche von Anlegern nicht vollständig bedienen. Neuere, speziell auf diese Woche datierte Warnsignale wurden in der aktuellen Recherche nicht gefunden.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mit Marvell/Lumentum und Apollo/ADT zwei weitere große, von der Evonik-Frage unabhängige Transaktionen bekannt wurden, während Blue Owl und Ares beim verwaltetem Vermögen weiter wachsen, aber die zuletzt verfügbaren branchenweiten Risikodaten zu Rücknahmen unverändert aus dem Frühjahr stammen, zeigt, dass die M&A- und Private-Credit-Aktivität derzeit auf hohem Niveau bleibt, auch wenn aktuelle Risikokennzahlen für die gesamte Branche noch nicht vorliegen." }
        ]}
      ],
      deal: { value: "≈ 115 Mrd. $ (Marvell/Lumentum, All-Stock) · ≈ 15,3 Mrd. $ Unternehmenswert (Apollo/Thrive/ADT)", buyer: "Marvell Technology · Thrive Holdings (Fremdkapital: Apollo)", target: "Lumentum · ADT", sector: "Optik-Halbleiter / Sicherheitstechnik", type: "Unternehmensübernahmen (beide bestätigt; Details zur Kartellprüfung bei Marvell/Lumentum nicht in den Quellen genannt)" },
      reaction: "BASF/Evonik, EQT/Qiagen und Tesla/SpaceX werden in Meldung 13 behandelt.",
      terms: ["bdc", "direct-lending", "nav", "private-equity"],
      followups: ["e:private-credit-what", "e:redemption-limits"],
      sources: [
        { title: "SEC: Lumentum 8-K – Marvell Merger Agreement", url: "https://www.sec.gov/Archives/edgar/data/0001633978/000119312526442758/d163169dex991.htm" },
        { title: "Bloomberg: Apollo Flexes Underwriting Power With $9.6 Billion ADT Debt Deal", url: "https://www.bloomberg.com/news/articles/2026-11-02/apollo-flexes-underwriting-power-with-9-6-billion-adt-debt-deal" },
        { title: "Investing.com: Blue Owl Q3 2026 slides – AUM hits $330bn, margins expand", url: "https://uk.investing.com/news/stock-market-news/blue-owl-q3-2026-slides-aum-hits-330b-margins-expand-93CH-4942881" },
        { title: "Yahoo Finance: Ares Management Corporation Reports Third Quarter 2026 Results", url: "https://finance.yahoo.com/markets/stocks/articles/ares-management-corporation-reports-third-100000868.html" },
        { title: "Bloomberg: Fitch's Private Credit Default Rate Hit Record in Second Quarter", url: "https://www.bloomberg.com/news/articles/2026-07-30/fitch-s-private-credit-default-rate-hit-record-in-second-quarter" }
      ]
    },
    /* 15 TECHNOLOGIE: APPLE/COREWEAVE/BURRY/ANTHROPIC */
    {
      id: "apple-earnings-coreweave-burry-anthropic-11-03", cats: ["tech"], when: "Apple-Zahlen Mo 2.11. nach Börsenschluss · Intel/Amazon-Nachwirkungen · Anthropic-IPO-Update 2.11.2026",
      headline: "Apple übertrifft unter dem neuen CEO John Ternus die Erwartungen, die Aktie fällt aber wegen einer schwachen Margen-Prognose, Analysten senken die Intel-Kursziele weiter, Anthropic weist in seinem aktualisierten Börsenprospekt ein stark gestiegenes Umsatzwachstum bei zugleich hohen künftigen Rechenverpflichtungen aus",
      sec30: "Apple meldete am Montagabend für das vierte Geschäftsquartal einen Umsatz von 114,48 Mrd. Dollar (über der Erwartung von rund 113,4 Mrd. Dollar, +12 %) und einen Gewinn je Aktie von 2,10 Dollar (über der Erwartung von 1,99 Dollar) – der erste Bericht unter dem seit 1.9.2026 amtierenden CEO John Ternus. Die Aktie fiel dennoch nachbörslich und vorbörslich um bis zu 4,5 bis 4,6 %, weil die Margen-Prognose für das Weihnachtsquartal wegen stark steigender Speicherchip-Kosten schwächer ausfiel als erhofft. Bei Intel senkten mehrere Analysten nach dem Kurssturz vom 30.10. ihre Kursziele weiter, etwa Bernstein auf 75 Dollar. Anthropic aktualisierte am 2.11. sein Börsenprospekt und wies einen Q3-Umsatz von 17,0 Mrd. Dollar aus – mehr als das Zwölffache des Vorjahreswerts –, zugleich aber künftige Rechenleistungs-Verpflichtungen von rund 417 Mrd. Dollar.",
      blocks: [
        { h: "Was zeigen die Apple-Zahlen, und wie reagierte die Aktie?", items: [
          { tag: "fakt", text: "Apple meldete für das vierte Geschäftsquartal 2026 einen Umsatz von 114,48 Mrd. Dollar (Erwartung: rund 113,4 Mrd. Dollar, +12 % ggü. Vorjahr, ein Rekord für ein September-Quartal) und einen Gewinn je Aktie von 2,10 Dollar (Erwartung: 1,99 Dollar, +14 %, darin laut CNBC ein positiver Einmaleffekt von 0,05 Dollar aus Zoll-Rückerstattungen); der iPhone-Umsatz stieg um 17 % auf 57,58 Mrd. Dollar, die Services-Sparte erreichte mit 31,57 Mrd. Dollar ein Allzeithoch." },
          { tag: "fakt", text: "Es ist der erste Quartalsbericht unter dem seit 1.9.2026 amtierenden CEO John Ternus, der auf Tim Cook folgte (Cook wechselte in die Rolle des Executive Chairman). Für das Weihnachtsquartal stellte Apple ein Umsatzwachstum von 7 bis 10 % in Aussicht, deutlich über dem Analystenkonsens von rund 6,1 %.",
            ask: [{ label: "Mehr zu CoreWeave und Nvidia", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Trotz des Zahlen-Beats fiel die Aktie nachbörslich am Montag um bis zu 4,4 % und vorbörslich am Dienstag weiter auf ein Minus von rund 4,5 bis 4,6 %. Als Grund nennt CNBC eine „weak margin forecast”, ausgelöst von stark steigenden Speicherchip-Kosten; Ternus sagte laut CNBC, Apple habe die Preise nur „widerwillig” angehoben, um Komponentenkosten auszugleichen." }
        ]},
        { h: "Wie reagierten Analysten auf Intel und Amazon nach dem Kurssturz vom 30.10.?", items: [
          { tag: "fakt", text: "Intel war am 30.10. um 28,6 % auf 65,76 Dollar eingebrochen – der nach Berichten größte Tagesverlust seit 1974, rund 140 Mrd. Dollar Marktkapitalisierung vernichtet. Seither senkten mehrere Analysten ihre Kursziele weiter: Bank of America von 145 auf 100 Dollar (Herabstufung auf „Neutral”), Bernstein von 110 auf 75 Dollar, Morgan Stanley von 84 auf 75 Dollar; der Analystenkonsens liegt inzwischen bei „Hold” mit einem Durchschnittskursziel von rund 97 Dollar." },
          { tag: "fakt", text: "Amazon war am 30.10. um 1,4 % gefallen, nachdem Umsatz und Gewinn den Konsens verfehlt hatten; das Unternehmen bestätigte aber sein Investitionsziel (Capex) von 220 Mrd. Dollar für 2026." }
        ]},
        { h: "Was ist bei CoreWeave, Michael Burry und Anthropics Börsengang neu?", items: [
          { tag: "unbestaetigt", text: "CoreWeaves fünfjährige Kreditausfallversicherungs-Spreads (CDS), die Mitte/Ende Oktober zeitweise über 1.140 Basispunkte gestiegen waren, lagen zuletzt bei rund 1.041 Basispunkten – laut S&P Global weiterhin ein Niveau, das klassischerweise „finanzielle Notlage” signalisiert.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "unbestaetigt", text: "Investor Michael Burry hält laut Berichten weiterhin umfangreiche Short-Positionen (über Put-Optionen mit Laufzeit 2027) gegen Nvidia, Palantir, Micron und Tesla und vergleicht die Lage mit „den letzten Monaten der Bubble 1999–2000”; Palantir sei seiner Einschätzung nach „wildly overvalued”. Eine Bestätigung neuerer Entwicklungen nach dem 1.11. liegt nicht vor." },
          { tag: "fakt", text: "Anthropic aktualisierte am 2.11.2026 sein öffentliches Börsenprospekt (S-1) für ein geplantes Nasdaq-Listing und wies für das dritte Quartal einen Umsatz von 17,0 Mrd. Dollar aus – mehr als das Zwölffache des Vorjahreswerts; zugleich weist die Einreichung künftige Rechenleistungs-Verpflichtungen von rund 417 Mrd. Dollar aus, mit Vertragslaufzeiten von bis zu 20 Jahren.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Apple unter seinem neuen CEO die Erwartungen übertrifft, die Aktie aber wegen steigender Speicherchip-Kosten fällt, während Intel weiter abgestuft wird und Anthropic einerseits stark wachsende Umsätze, andererseits sehr hohe künftige Rechenverpflichtungen ausweist, zeigt, wie genau Anleger derzeit beobachten, ob sich hohe KI-Investitionen in profitablen Ergebnissen niederschlagen. Dies ist keine Anlageberatung.",
            ask: [{ label: "Warum fällt die Nasdaq?", ref: "chain:nasdaq-why" }] }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 (Europa) und Meldung 3 (USA) behandelt.",
      terms: ["hyperscaler", "credit-spread"],
      followups: ["e:ai-capex", "e:circular-financing"],
      sources: [
        { title: "CNBC: Apple's stock drops on weak margin forecast in Ternus' first earnings report", url: "https://www.cnbc.com/2026/11/02/apple-aapl-q4-2026-earnings-live-updates.html" },
        { title: "9to5Mac: Apple reports Q4 2026 earnings – $114.5 billion in revenue, up 12%", url: "https://9to5mac.com/2026/11/02/apple-reports-q4-2026-earnings/" },
        { title: "GuruFocus: INTC Downgraded by B of A Securities – Price Target Lowered to $100", url: "https://www.gurufocus.com/news/9158360/intc-downgraded-by-b-of-a-securities-price-target-lowered-to-100" },
        { title: "StockTitan: Anthropic IPO Filing Updated With New Results as Claude's Maker Heads to Nasdaq", url: "https://www.stocktitan.net/articles/anthropic-ipo-amended-s1-2026-guide" },
        { title: "Investing.com: US stock futures mixed as Apple slides, midterms loom", url: "https://www.investing.com/news/stock-market-news/us-stock-futures-mixed-as-apple-slides-midterms-loom-4994306" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX fiel am Dienstagvormittag auf zwischen 25.717 und 25.737 Punkte (-0,7 % bis -1,0 %), nachdem er am Montag noch bis auf 25.981 Punkte gestiegen war; der Euro Stoxx 50 notierte zwischen rund 6.145 und 6.148 Punkten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die schwächere Tendenz am Dienstag nennen Berichte den Kursrückgang bei Apple nach einer schwachen Margen-Prognose sowie die Vorsicht der Anleger vor den Ergebnissen der US-Zwischenwahlen." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite liegt am Dienstag weitgehend stabil bei rund 4,92 %, die Rendite zehnjähriger Bundesanleihen bei rund 3,31 % (Stand Montag, 2.11.)." },
    "gold-why": { tag: "unbestaetigt", story: 4, text: "Gold gab am Dienstagmorgen rund 0,9 bis 1,0 % auf etwa 3.909 bis 3.910 Dollar je Feinunze nach, nachdem der Preis am Montag noch gestiegen war." },
    "bitcoin-what": { tag: "unbestaetigt", story: 4, text: "Bitcoin fiel am Dienstag um rund 2,0 % auf etwa 76.688 Dollar; Berichte nennen allgemeine Risikoaversion vor den US-Zwischenwahlen als Hintergrund." },
    "eurusd-meaning": { tag: "fakt", story: 4, text: "Der Euro gab am Dienstag auf rund 1,1185 Dollar nach, nach einem Höchststand von 1,1237 Dollar am Montag." },
    "central-banks-why": { tag: "unbestaetigt", story: 2, text: "EZB-Ratsmitglied Peter Kažimír sagte, die Zinspause der vergangenen Woche sei „keine Ziellinie” – von Beobachtern als weiteres Signal für eine mögliche Dezember-Zinserhöhung gewertet." },
    "fed-hike": { tag: "fakt", story: 2, text: "Die Fed beließ ihren Leitzins am 28.10. bei 3,75 bis 4,00 %, die neuen Projektionen (Dot Plot) fallen mit einem Median von 4,1 % für Ende 2026 aber restriktiver aus als zuvor erwartet." },
    "ecb-hike": { tag: "unbestaetigt", story: 2, text: "Laut Insidern steuert die EZB auf eine Zinserhöhung um 0,25 Prozentpunkte am 17.12. zu, die als „so gut wie sicher” gilt, sofern die Energiepreise nicht einbrechen; eine offizielle Bestätigung der EZB liegt nicht vor." },
    "inflation-expectations": { tag: "unbestaetigt", story: 5, text: "Nationale Oktober-Inflationswerte schwanken zwischen 2,8 % in Deutschland und 5,4 % in Italien; Vorab-Schätzungen für die gesamte Eurozone liegen zwischen 3,7 % (BofA) und 4,0 % (Pantheon), die offizielle Schnellschätzung folgt erst am 4.11." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Die Bereinigungssitzung des Haushaltsausschusses zum Bundeshaushalt 2027 ist für den 12.11. angesetzt, die abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "debt-brake": { tag: "fakt", story: 6, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert; vor dem Koalitionsausschuss am 17.11. werden laut Berichten mehrere Streitpunkte zwischen CDU, CSU und SPD sichtbar, unter anderem zur Rentenreform und zur Pflegekommission." },
    "rente-basics": { tag: "position", story: 7, text: "Kanzler Merz will die Reformvorschläge der Rentenkommission „so umsetzen, wie sie auf dem Tisch liegen”; Arbeitsminister Schweitzer (SPD) sucht einen Kompromiss und sieht die Vorschläge nur als Diskussionsgrundlage." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Die INSA-Sonntagsfrage (30.10.-2.11.) sieht die AfD bei 28,0 % weiter deutlich vor der Union (20,0 %); die Grünen liegen mit 15,0 % laut dieser Erhebung erstmals vor der SPD (14,0 %)." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 10, text: "Der Ölpreis stieg am Dienstag deutlich, nachdem die USA nach eigenen Angaben „begrenzte, defensive” Luftschläge auf die iranische Insel Qeshm an der Straße von Hormus durchgeführt hatten." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Die Straße von Hormus gilt laut Schifffahrts-Trackern zum 3.11. als faktisch geschlossen für den kommerziellen Verkehr, nachdem zuvor ein katarischer LNG-Tanker und ein weiterer Frachter von unidentifizierten Objekten getroffen worden waren." },
    "opec-plus-why": { tag: "fakt", story: 10, text: "Die OPEC+ beließ am 1.11. die Dezember-Förderquoten unverändert bei rund 31 Mio. Barrel pro Tag – der dritte Monat in Folge; die Entscheidung über den Förderrahmen 2027 fällt erst am 29.11." },
    "gas-ttf": { tag: "fakt", story: 10, text: "Der europäische Gas-Future TTF stieg am Dienstag um mehr als 3 % auf rund 98,26 Euro je Megawattstunde, nachdem Berichte über erneute US-Luftschläge auf Ziele im Iran bekannt wurden." },
    "energy-germany": { tag: "fakt", story: 10, text: "Die deutschen Gasspeicher erreichten zum 1.11. rund 61 % Füllstand und verfehlten damit das gesetzliche Herbstziel von 80 %; die Bundesnetzagentur sieht die Versorgungssicherheit aber derzeit nicht gefährdet." },
    "oil-inflation": { tag: "einordnung", story: 10, text: "Brent stieg am Dienstag auf rund 106 bis 107 Dollar je Barrel; ein steigender Ölpreis wirkt tendenziell anheizend auf Sprit-, Heiz- und Transportkosten in Europa." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Rheinmetall kämpft vor den Q3-Zahlen am 5.11. um die 1.000-Euro-Marke, Hensoldt wird von Analysten wegen des ZEBEL-Logistikproblems unterschiedlich bewertet, RENK notiert weiterhin deutlich unter dem Analystenkonsens-Kursziel." },
    "nato-target": { tag: "fakt", story: 12, text: "Fünf von 32 NATO-Staaten erreichen 2026 bereits das 5-Prozent-Ziel; die Verteidigungsausgaben der europäischen NATO-Partner und Kanadas steigen 2026 um 11 % auf 777 Mrd. Dollar, Deutschland meldet Rekordausgaben von 124,7 Mrd. Euro." },
    "defence-order": { tag: "fakt", story: 12, text: "Der Bundestags-Haushaltsausschuss berät am 4.11. über sieben weitere Rüstungsvorhaben von jeweils über 25 Mio. Euro; die große Boxer-Bestellung Arminius verschiebt sich laut Berichten von Dezember 2026 auf Februar 2027." },
    "ma-steps": { tag: "fakt", story: 13, text: "Evonik lehnte das auf 24 Euro je Aktie erhöhte BASF-Angebot am 30.10. ab und meldete heute für das dritte Quartal einen Nettoverlust trotz höherem EBITDA; der EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) ist bereits besiegelt, die vollständigen Qiagen-Zahlen folgen morgen." },
    "take-private-why": { tag: "unbestaetigt", story: 13, text: "Evonik soll laut Berichten eine Übernahme des US-Konzerns Ashland prüfen; dies war bereits vor dem BASF-Angebot im Gespräch und gilt nicht eindeutig als reine Abwehrmaßnahme. Die RAG-Stiftung hat sich weiterhin nicht öffentlich zum erhöhten BASF-Angebot geäußert." },
    "deal-risks": { tag: "unbestaetigt", story: 13, text: "Bei Tesla und SpaceX bleibt eine Fusion unbestätigt; laut Prognosemarkt Polymarket ist die Wahrscheinlichkeit einer Ankündigung bis Ende 2026 zuletzt auf 16,0 % gefallen, Musk selbst kann wegen eines Interessenkonflikts nicht an den Gesprächen teilnehmen." },
    "private-credit-what": { tag: "fakt", story: 14, text: "Blue Owl meldete für das dritte Quartal ein verwaltetes Vermögen von 330 Mrd. Dollar (+12 %), Ares 691 Mrd. Dollar (+16 %); beide Unternehmen sammelten im Quartal weiter zweistellige Milliardenbeträge an frischem Kapital ein." },
    "redemption-limits": { tag: "unbestaetigt", story: 14, text: "Die zuletzt verfügbaren branchenweiten Daten stammen aus dem zweiten Quartal 2026: Die Ausfallrate bei Private-Credit-Krediten erreichte laut Fitch mit 6,0 % einen Rekordwert, zehn von 16 nicht börsennotierten BDCs konnten Rücknahmewünsche nicht vollständig bedienen." },
    "ai-capex": { tag: "fakt", story: 15, text: "Apple übertraf mit 114,48 Mrd. Dollar Umsatz und 2,10 Dollar Gewinn je Aktie die Erwartungen für das vierte Geschäftsquartal, die Aktie fiel aber wegen einer durch steigende Speicherchip-Kosten schwächer als erwarteten Margen-Prognose für das Weihnachtsquartal." },
    "circular-financing": { tag: "unbestaetigt", story: 15, text: "Anthropic wies in seinem am 2.11. aktualisierten Börsenprospekt einen Quartalsumsatz von 17,0 Mrd. Dollar aus, zugleich aber künftige Rechenleistungs-Verpflichtungen von rund 417 Mrd. Dollar; Investor Michael Burry hält laut Berichten weiterhin umfangreiche Short-Positionen gegen mehrere KI-nahe Aktien." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 3,
      q: "Wie schlossen S&P 500 und Dow Jones am Montag, 2.11.2026, im Vergleich zueinander?",
      options: [
        "Beide stiegen etwa gleich stark",
        "Beide fielen etwa gleich stark",
        "Der Handel wurde wegen der Zwischenwahlen ausgesetzt",
        "Der Dow stieg, während der S&P 500 und die Nasdaq nachgaben"
      ],
      answer: 3,
      explain: "Der Dow schloss am Montag mit +0,41 % im Plus, während der S&P 500 um 0,51 % und die technologieschwere Nasdaq um 1,07 % nachgaben – ein Zeichen für eine Rotation aus Technologiewerten."
    },
    {
      topic: "Technologie", type: "Zusammenhang", story: 15,
      q: "Apple übertraf beim Umsatz und beim Gewinn je Aktie die Erwartungen, die Aktie fiel aber dennoch deutlich. Angenommen, die Speicherchip-Preise würden in den kommenden Monaten weiter stark steigen. Was würde das unter sonst gleichen Bedingungen am ehesten für Apples Margen-Ausblick bedeuten?",
      options: [
        "Der Druck auf die Margen würde sich tendenziell verstärken, da Apple die höheren Komponentenkosten laut eigenen Angaben nur „widerwillig” an Kunden weitergibt",
        "Die Margen würden sich automatisch verbessern, weil höhere Chip-Preise immer positiv für Hersteller sind",
        "Es gäbe keinen Zusammenhang, da Apple keine Speicherchips verwendet",
        "Apple müsste die iPhone-Produktion vollständig einstellen"
      ],
      answer: 0,
      explain: "Apple begründete die schwächere Margen-Prognose für das Weihnachtsquartal mit stark steigenden Speicherchip-Kosten und erklärte, Preiserhöhungen nur „widerwillig” vorgenommen zu haben; weiter steigende Chip-Preise würden diesen Druck tendenziell verstärken."
    },
    {
      topic: "Energie", type: "Fakt", story: 10,
      q: "Was geschah laut US-Angaben am 2.11.2026 an der Straße von Hormus?",
      options: [
        "Die OPEC+ erhöhte überraschend die Förderquoten",
        "Das US-Militär führte „begrenzte, defensive” Luftschläge auf die iranische Insel Qeshm durch",
        "Iran öffnete die Meerenge vollständig für den Handel",
        "Deutschland entsandte Kriegsschiffe in die Region"
      ],
      answer: 1,
      explain: "Nach Angaben von US-Beamten führte das US-Militär am 2.11. „begrenzte, defensive” Luftschläge auf die iranische Insel Qeshm durch – als Reaktion darauf, dass Iran zuvor auf ein US-Flugzeug gefeuert habe."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Welche Partei liegt laut der INSA-Sonntagsfrage vom 30.10. bis 2.11.2026 erstmals vor der SPD?",
      options: [
        "FDP",
        "Linke",
        "CSU",
        "Grüne"
      ],
      answer: 3,
      explain: "Die Grünen erreichen in dieser Erhebung 15,0 % und liegen damit erstmals vor der SPD mit 14,0 %; die AfD bleibt mit 28,0 % weiterhin deutlich stärkste Kraft."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 2,
      q: "Angenommen, die Energiepreise würden in den kommenden Wochen überraschend stark einbrechen. Was würde das laut den in Meldung 2 genannten Einschätzungen am ehesten für die als „so gut wie sicher” geltende EZB-Zinserhöhung im Dezember bedeuten?",
      options: [
        "Es gäbe keinen Zusammenhang zwischen Energiepreisen und EZB-Entscheidungen",
        "Sie könnte dadurch infrage gestellt werden, da Insider die Erhöhung ausdrücklich an anhaltend hohe Energiepreise koppeln",
        "Sie würde dadurch noch wahrscheinlicher, weil fallende Preise immer zu mehr Zinserhöhungen führen",
        "Der Leitzins würde automatisch verdoppelt"
      ],
      answer: 1,
      explain: "Laut Insidern steuert die EZB auf eine Dezember-Zinserhöhung zu, die als „so gut wie sicher” gilt, sofern die Energiepreise nicht einbrechen; ein starker Preisrückgang würde diese Begründung für die Erhöhung somit tendenziell schwächen."
    }
  ]
};
