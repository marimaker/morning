// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-04",
  dateLabel: "Sonntag, 4. Oktober 2026",
  updatedLabel: "Recherchestand 04.10.2026",
  marketNote: "Diese Ausgabe entsteht am Sonntag, 04.10.2026. Die Börsen sind an diesem Wochenende geschlossen; für DAX, Euro Stoxx 50, S&P 500, Nasdaq, Dow Jones sowie die US- und die Bund-Rendite gilt der zuletzt bestätigte Schlusskurs vom Freitag, 02.10.2026. Brent-Öl, Bitcoin und EUR/USD werden rund um die Uhr beziehungsweise durchgehend gehandelt; ihre Werte spiegeln den Sonntagvormittag, 04.10.2026, wider und können sich bis Montag noch ändern. Das OPEC+-Treffen zur Förderquote für November, das für den heutigen Sonntag angesetzt war, ist laut Delegierten-Angaben bereits abgeschlossen: Die Kerngruppe aus sieben OPEC+-Staaten einigte sich darauf, die Förderquote unverändert zu lassen. Werte mit „≈” stammen aus Marktberichten und können je nach Quelle und Erhebungszeitpunkt leicht abweichen; beim Euro Stoxx 50 und beim Brent-Ölpreis wichen verschiedene Quellen an diesem Wochenende deutlicher voneinander ab, was jeweils gekennzeichnet ist.",

  top: [
    { text: "Der offizielle US-Arbeitsmarktbericht für September zeigte am Freitag nur ein Plus von 29.000 Stellen – deutlich weniger als die erwarteten rund 84.000 bis 90.000 –, die Arbeitslosenquote stieg auf 4,2 %, die Augustzahl wurde von 162.000 auf 133.000 nach unten revidiert. Die US-Rendite zehnjähriger Staatsanleihen stieg zum Handelsschluss trotzdem leicht auf rund 5,28 %; an den Terminmärkten wird eine Wahrscheinlichkeit von rund 77 bis 84 % dafür gesehen, dass die Fed bei ihrer Sitzung am 28.10. die Zinsen unverändert lässt.", ref: "s:2" },
    { text: "Nach Berichten vom 3.10. trafen sich hochrangige Sicherheitsberater von Präsident Trump – darunter Vizepräsident Vance, Außenminister Rubio und Verteidigungsminister Hegseth – am Vortag auf Camp David zu bislang nicht öffentlich bestätigten Beratungen über Iran und den Jemen-Konflikt. Nahe Oman wurde am 3.10. ein weiterer Tanker in der Region getroffen. OPEC+ einigte sich am 4.10. laut Delegierten darauf, die Förderquote für November unverändert zu lassen.", ref: "s:8" },
    { text: "Russland traf die Kyjiwer Südbrücke nach ukrainischen Angaben binnen 24 Stunden fünfmal und beschädigte am 3. und 4.10. zusätzlich die Nordbrücke; Stadtverwaltung und Bürgermeister Klitschko sprechen von Angriffen, die die Hauptstadt zunehmend durchtrennen. Südkoreas Präsident Lee Jae-myung bekräftigte am 2./3.10. seine Drohung mit weiteren Schritten gegen die Ukraine im Streit um überstellte nordkoreanische Kriegsgefangene.", ref: "s:9" },
    { text: "Eurostat meldete am 2.10. für die Eurozone eine Flash-Inflation von 3,8 % im September – mehr als der Marktkonsens von 3,6 % und der höchste Wert seit drei Jahren. EZB-Präsidentin Lagarde hatte am 28.9. vor dem EU-Parlament für eine „maßvolle” Reaktion geworben; Märkte preisen inzwischen einen weiteren EZB-Zinsschritt im Dezember ein.", ref: "s:4" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.231", change: "+1,2 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 02.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "Der DAX gewann am Freitag, 02.10., rund 292 Punkte und schloss bei 25.231,20 Punkten (+1,17 bis +1,2 % je Quelle) – nach einem Rücksetzer unter die Marke von 25.000 Punkten am Donnerstag." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Der schwache US-Arbeitsmarktbericht (nur 29.000 neue Stellen statt der erwarteten rund 84.000 bis 90.000) dämpfte die Erwartung einer weiteren Fed-Zinserhöhung im Oktober und stützte damit auch europäische Aktien (Meldung 2)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Der schwache US-Arbeitsmarktbericht ließ die an den Terminmärkten eingepreiste Wahrscheinlichkeit einer Fed-Zinserhöhung im Oktober weiter sinken, was Aktien beidseits des Atlantiks stützte.", ref: "s:2" }
      ],
      source: { title: "ms-aktuell.de: DAX legt kräftig zu – Schwache US-Jobdaten stützen die Börse", url: "https://ms-aktuell.de/welt/dax-jobdaten-oelpreis-02-10-2026/" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.233–6.242", change: "≈ +0,9 bis +1,1 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 02.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Ein Plus heißt: Diese Unternehmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "Je nach Quelle schloss der Euro Stoxx 50 am Freitag zwischen 6.233,29 Punkten (+0,94 %) und 6.242 Punkten (+1,07 %); eine weitere Quelle nennt 6.238,50 Punkte (+1,02 %) und führt den Anstieg auf eine von ASML angeführte Technologie-Rally zurück." }
      ],
      moved: {
        intro: "Für Freitag nennen Berichte:",
        items: [
          "Der schwache US-Arbeitsmarktbericht dämpfte Zinssorgen und stützte Aktien in Europa und den USA gleichermaßen (Meldung 2); einzelne Technologiewerte wie ASML profitierten laut Berichten zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Bund-Rendite gab am Freitag parallel leicht auf rund 3,46 % nach.", ref: "n:bund10" }
      ],
      source: { title: "bbntimes.com: Euro Stoxx 50 Rebounds to 6,238.50 as ASML Leads a Tech Rally and Soft US Payrolls Cool Rate Fears", url: "https://www.bbntimes.com/global-economy/euro-stoxx-50-rebounds-to-6-238-50-as-asml-leads-a-tech-rally-and-soft-us-payrolls-cool-rate-fears" }
    },
    "sp500": {
      label: "S&P 500", value: "7.722,72", change: "+0,73 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 02.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 51.176,96 Punkte (+0,49 %)." },
        { label: "Nasdaq", text: "Freitagsschluss: 27.190,86 Punkte (+1,19 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Der US-Arbeitsmarktbericht für September fiel mit nur 29.000 neuen Stellen deutlich schwächer aus als die erwarteten rund 84.000 bis 90.000; die Arbeitslosenquote stieg auf 4,2 %.",
          "Die Rendite zehnjähriger US-Staatsanleihen fiel nach der Veröffentlichung zunächst, stieg zum Handelsschluss aber auf rund 5,28 % (Meldung 2)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die eingepreiste Wahrscheinlichkeit einer Fed-Zinspause im Oktober liegt laut Terminmärkten bei rund 77 bis 84 %.", ref: "n:ust10" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq rally as September jobs report disappoints", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.190,86", change: "+1,19 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 02.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Woche", text: "Die Nasdaq legte am Freitag deutlicher zu als Dow und S&P 500 – zinssensitive Technologiewerte profitierten besonders stark von der gesunkenen Zinserwartung." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Der schwache Arbeitsmarktbericht senkte die Wahrscheinlichkeit einer weiteren Fed-Zinserhöhung im Oktober, was besonders zinssensitiven Technologiewerten half."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zinsnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq rally as September jobs report disappoints", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1252–1,1256", change: "leicht höher ggü. Freitagschluss (≈ 1,1243–1,1247)", dir: "up", asof: "So 04.10., Vormittag", story: 4,
      means: "1 Euro kostet etwa 1,13 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Monat", text: "Über den vergangenen Monat hat der Euro gegenüber dem Dollar laut einer Quelle rund 3,2 % verloren; am Sonntagvormittag lag der Kurs bei rund 1,1256." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der schwache US-Arbeitsmarktbericht dämpfte die Zinserwartungen für den Dollar, während die EZB nach der über dem Konsens liegenden Eurozone-Inflation eher zu einem weiteren Zinsschritt im Dezember tendiert (Meldung 4)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB signalisiert einen möglichen weiteren Zinsschritt im Dezember, während die Fed nach dem schwachen Jobbericht eher zu einer Pause im Oktober tendiert.", ref: "s:4" }
      ],
      source: { title: "tradingeconomics.com: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,28 %", change: "+ca. 5 Bp, trotz anfänglichem Rückgang", dir: "up", asof: "Schluss Fr 02.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,3 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,3 % Zinsen pro Jahr.",
      compare: [
        { label: "Tagesverlauf", text: "Nach Veröffentlichung des schwachen US-Arbeitsmarktberichts fiel die Rendite zunächst deutlich, erholte sich im weiteren Handelsverlauf aber wieder und schloss rund 5 Basispunkte höher bei etwa 5,28 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der US-Arbeitsmarktbericht für September zeigte nur 29.000 neue Stellen (erwartet: rund 84.000 bis 90.000) und eine auf 4,2 % gestiegene Arbeitslosenquote.",
          "Dass die Rendite trotz der schwachen Daten letztlich leicht stieg, deuten Marktbeobachter als Zeichen, dass Anleger eine Fed-Reaktion über den Oktober hinaus für nicht ausgeschlossen halten."
        ]
      },
      important: [
        { area: "Aktien", text: "Der anfängliche Rückgang der Rendite half US-Aktien im Tagesverlauf zu kräftigen Gewinnen.", ref: "e:yield-stocks" },
        { area: "Fed", text: "Terminmärkte sehen eine Wahrscheinlichkeit von rund 77 bis 84 % dafür, dass die Fed am 28.10. die Zinsen pausiert.", ref: "e:fed-hike" }
      ],
      source: { title: "CNBC: 10-year Treasury yield ticks higher despite weaker-than-expected jobs report", url: "https://www.cnbc.com/2026/10/02/treasury-yields-bonds-nonfarm-payrolls.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,46 %", change: "−5 Bp ggü. Donnerstag (3,51 %)", dir: "down", asof: "Schluss Fr 02.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag, 01.10., hatte die Rendite noch bei rund 3,51 % gelegen; Mitte September war sie zeitweise auf rund 3,65 % gestiegen – den höchsten Stand seit 2011." }
      ],
      moved: {
        intro: "Berichte nennen als möglichen Hintergrund:",
        items: [
          "Die Bund-Rendite bewegte sich am Freitag mit leicht nachgebender Tendenz, während US-Renditen nach dem schwachen Jobbericht zunächst fielen."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen verteuern neue Bundesschulden; der Bundesrechnungshof warnte am 02.10. zusätzlich vor wachsender Belastung des Haushalts durch Rentenausgaben.", ref: "e:debt-brake" }
      ],
      source: { title: "tradingeconomics.com: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.140 $", change: "≈ −0,9 bis −1,0 % (Fr/So)", dir: "down", asof: "Fr/So 02.–04.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.140 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Rekordhoch", text: "Je nach Quelle lag das 2026er-Rekordhoch bei rund 5.418 bis 5.608 Dollar (Anfang 2026); seitdem befindet sich der Preis in einer Korrektur- und Konsolidierungsphase." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die zum Handelsschluss wieder gestiegene US-Rendite macht zinslose Anlagen wie Gold tendenziell weniger attraktiv (Meldung 2)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinserwartungen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "tradingeconomics.com: Gold – Price, Chart, Historical Data", url: "https://tradingeconomics.com/commodity/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 102 $", change: "kaum verändert ggü. Donnerstag (nach Sprung von zuvor mehr als +4 %)", dir: "flat", asof: "Fr/Sa 02./03.10.26", story: 15, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 102 Dollar je Fass (159 Liter) sind rund 64 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Quellenlage", text: "Mehrere Quellen nennen für den 01.–03.10. übereinstimmend rund 102 bis 103 Dollar (nach einem Sprung von mehr als 4 % am 01.10.); eine einzelne Quelle hatte für den 02.10. abweichend rund 99,7 Dollar genannt – dieser niedrigere Wert ließ sich mit weiteren Quellen nicht erhärten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Verlegung eines dritten US-Flugzeugträgers in die Golfregion und ein weiterer Tanker-Vorfall nahe Oman am 03.10. hielten die Risikoprämie hoch (Meldung 8).",
          "Die G7-Staaten vereinbarten am 02.10. die Freigabe von bis zu 100 Millionen Barrel aus strategischen Reserven über vier Monate; die IEA bezifferte die bislang insgesamt freigegebene Menge auf rund 325 Millionen Barrel.",
          "OPEC+ einigte sich am 04.10. darauf, die Förderquote für November unverändert zu lassen (Meldung 15)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "OPEC+", text: "OPEC+ hält die Förderquote für November unverändert – mehr dazu in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "CNBC: Oil jumps 4% on Strait of Hormuz tensions", url: "https://www.cnbc.com/2026/10/01/oil-prices-today-wti-brent.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 84.700–84.900 $", change: "kaum verändert ggü. Vortag", dir: "flat", asof: "So 04.10., früher Morgen", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 84.700 bis 84.900 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Quellenlage", text: "Mehrere Quellen für Sonntagfrüh liegen relativ nah beieinander (rund 84.700 bis 84.900 Dollar) – nach einem zuvor gescheiterten Versuch, sich nachhaltig über 87.000 Dollar zu halten." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Bitcoin bewegte sich trotz der zum Wochenschluss wieder gestiegenen US-Rendite nur wenig in eine klare Richtung."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "usethebitcoin.com: Bitcoin Price Analysis October 4, 2026 – BTC Holds $84K as Buyers Eye $88K", url: "https://usethebitcoin.com/bitcoin/bitcoin-price-october-4-2026/" }
    }
  },

  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitag-rally-schwacher-jobbericht-04-10", cats: ["markets"], when: "Schluss Fr 02.10.2026",
      headline: "DAX und US-Indizes schließen den Freitag nach schwachem US-Arbeitsmarktbericht im Plus",
      sec30: "Der DAX gewann am Freitag rund 292 Punkte und schloss bei 25.231,20 Punkten (+1,2 %) – nach einem Rücksetzer unter die Marke von 25.000 Punkten am Donnerstag. Der Euro Stoxx 50 legte je nach Quelle zwischen 0,9 und 1,1 % auf etwa 6.233 bis 6.242 Punkte zu, angeführt von einer Technologie-Rally um ASML. In den USA schlossen der Dow Jones (51.176,96 Punkte, +0,49 %), der S&P 500 (7.722,72 Punkte, +0,73 %) und vor allem die Nasdaq Composite (27.190,86 Punkte, +1,19 %) im Plus, nachdem der US-Arbeitsmarktbericht für September deutlich schwächer ausgefallen war als erwartet.",
      blocks: [
        { h: "Wie haben sich die Indizes am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX schloss am Freitag, 02.10.2026, bei 25.231,20 Punkten (+1,2 %) und damit wieder über der psychologisch wichtigen Marke von 25.000 Punkten.",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] },
          { tag: "unbestaetigt", text: "Der Euro Stoxx 50 schloss je nach Quelle zwischen 6.233,29 Punkten (+0,94 %) und 6.242 Punkten (+1,07 %); eine Quelle nennt 6.238,50 Punkte (+1,02 %) mit Verweis auf eine ASML-geführte Technologie-Rally." },
          { tag: "fakt", text: "In den USA schlossen Dow Jones (51.176,96 Punkte, +0,49 %), S&P 500 (7.722,72 Punkte, +0,73 %) und Nasdaq Composite (27.190,86 Punkte, +1,19 %) deutlich im Plus.",
            ask: [{ label: "Warum reagiert die Nasdaq stärker auf Zinsnachrichten?", ref: "chain:nasdaq-why" }] }
        ]},
        { h: "Was wird als Grund genannt?", items: [
          { tag: "fakt", text: "Der US-Arbeitsmarktbericht für September zeigte nur ein Plus von 29.000 Stellen – deutlich weniger als die erwarteten rund 84.000 bis 90.000 –, die Arbeitslosenquote stieg auf 4,2 %.",
            ask: [{ label: "Was steckt hinter dem Arbeitsmarktbericht?", ref: "s:2" }] },
          { tag: "einordnung", text: "Dass schwächere Konjunkturdaten die Aktienmärkte beflügelten, erklären Marktbeobachter damit, dass Anleger eine geringere Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung im Oktober einpreisten – ein Effekt, der sowohl in den USA als auch in Europa zu beobachten war." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass schwache Konjunkturdaten Aktienmärkte steigen lassen können, mag zunächst widersprüchlich wirken; es zeigt aber, wie stark Zinserwartungen die Kursbewegungen derzeit prägen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die nach dem schwachen Jobbericht gesunkene Zinserwartung (Meldung 2) stützte Aktien beidseits des Atlantiks; Gold geriet dagegen unter Druck, weil die US-Rendite zum Handelsschluss wieder anzog (Meldung 3).",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "e:yield-stocks", "chain:nasdaq-why"],
      sources: [
        { title: "ms-aktuell.de: DAX legt kräftig zu – Schwache US-Jobdaten stützen die Börse", url: "https://ms-aktuell.de/welt/dax-jobdaten-oelpreis-02-10-2026/" },
        { title: "finanzen.at: XETRA-SCHLUSS/DAX verabschiedet sich versöhnlich ins Wochenende", url: "https://www.finanzen.at/nachrichten/aktien/xetra-schluss-dax-verabschiedet-sich-versoehnlich-ins-wochenende-1036593939" },
        { title: "bbntimes.com: Euro Stoxx 50 Rebounds to 6,238.50 as ASML Leads a Tech Rally and Soft US Payrolls Cool Rate Fears", url: "https://www.bbntimes.com/global-economy/euro-stoxx-50-rebounds-to-6-238-50-as-asml-leads-a-tech-rally-and-soft-us-payrolls-cool-rate-fears" },
        { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq rally as September jobs report disappoints", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html" }
      ]
    },

    /* 2 JOBBERICHT/FED */
    {
      id: "us-jobbericht-september-fed-ausblick-04-10", cats: ["economy", "markets"], when: "Veröffentlichung Fr 02.10.2026, 14:30 MESZ · nächste Fed-Sitzung 27.–28.10.",
      headline: "US-Arbeitsmarktbericht fällt deutlich schwächer aus als erwartet, Fed-Gouverneur warnt zugleich vor geopolitischen Preisrisiken",
      sec30: "Der offizielle US-Arbeitsmarktbericht (Nonfarm Payrolls) für September zeigte nur ein Plus von 29.000 Stellen – gegenüber erwarteten rund 84.000 bis 90.000 – und eine auf 4,2 % gestiegene Arbeitslosenquote; die Augustzahl wurde von 162.000 auf 133.000 nach unten revidiert. Die US-Rendite zehnjähriger Staatsanleihen fiel nach der Veröffentlichung zunächst, schloss aber rund 5 Basispunkte höher bei etwa 5,28 %. An den Terminmärkten wird eine Wahrscheinlichkeit von rund 77 bis 84 % dafür gesehen, dass die Fed bei ihrer Sitzung am 27./28.10. die Zinsen unverändert lässt. Fed-Gouverneur Philip Jefferson warnte bereits am 01.10. in einer Rede vor zusätzlichen, von geopolitischen Entwicklungen ausgehenden Aufwärtsrisiken für die Inflation. Ein Regierungsshutdown lag nicht vor: Die bereits am 02.09. unterzeichnete Übergangsfinanzierung sichert die Bundesbehörden bis zum 11.12.2026.",
      blocks: [
        { h: "Was zeigt der Arbeitsmarktbericht?", items: [
          { tag: "fakt", text: "Der Bericht des US-Arbeitsministeriums (BLS) für September, veröffentlicht am 02.10.2026, zeigte ein Plus von nur 29.000 Stellen (Erwartung: rund 84.000 bis 90.000). Die Arbeitslosenquote stieg von 4,1 % auf 4,2 %; die Augustzahl wurde von zuvor 162.000 auf 133.000 nach unten revidiert." }
        ]},
        { h: "Wie haben Rendite und Fed-Erwartung reagiert?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen fiel nach Veröffentlichung des Berichts zunächst deutlich, drehte im weiteren Handelsverlauf aber wieder nach oben und schloss rund 5 Basispunkte höher bei etwa 5,28 %.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Verschiedene Terminmarkt-Tracker sehen die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10.2026 zwischen rund 77 und 84 % – die genaue Zahl schwankt je nach Zeitpunkt und Anbieter." },
          { tag: "einordnung", text: "Dass die Rendite trotz der schwachen Daten letztlich leicht stieg, werten Marktbeobachter als Hinweis, dass Anleger eine Fed-Reaktion über den Oktober hinaus weiterhin nicht ausschließen." }
        ]},
        { h: "Was sagte die Fed zu geopolitischen Risiken?", items: [
          { tag: "fakt", text: "Fed-Gouverneur Philip Jefferson verwies in einer Rede am 01.10.2026 auf zusätzliche, von geopolitischen Entwicklungen – etwa im Nahen Osten – ausgehende Aufwärtsrisiken für die Inflation, die neben dem schwächeren Arbeitsmarkt in die Zinsabwägung einfließen.",
            ask: [{ label: "Warum reagieren Zentralbanken auf solche Risiken?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Liegt ein Regierungsshutdown vor?", items: [
          { tag: "fakt", text: "Nein. Präsident Trump hatte bereits am 02.09.2026 eine Übergangsfinanzierung unterzeichnet, die die Bundesbehörden bis zum 11.12.2026 auf dem bisherigen Niveau finanziert. Der Arbeitsmarktbericht erschien dadurch fristgerecht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Ein deutlich schwächerer Arbeitsmarkt macht eine Fed-Zinserhöhung im Oktober laut Markteinschätzung unwahrscheinlicher; das stützte am Freitag Aktien (Meldung 1) und belastete zinslose Anlagen wie Gold (Meldung 3), sobald die Rendite zum Handelsschluss wieder anzog. Gleichzeitig hält die Fed selbst geopolitische Preisrisiken für relevant." }
        ]}
      ],
      reaction: "Die gesunkene Zinserwartung stützte Aktien (Meldung 1), während die zum Handelsschluss wieder gestiegene Rendite Gold belastete (Meldung 3); die EZB signalisiert parallel eher einen weiteren Zinsschritt im Dezember (Meldung 4).",
      terms: ["leitzins", "rendite", "basispunkt"],
      followups: ["e:yield-meaning", "e:fed-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "CNBC: 10-year Treasury yield ticks higher despite weaker-than-expected jobs report", url: "https://www.cnbc.com/2026/10/02/treasury-yields-bonds-nonfarm-payrolls.html" },
        { title: "Yahoo Finance: September 2026 jobs report", url: "https://finance.yahoo.com/economy/articles/september-2026-jobs-report-payrolls-123334753.html" },
        { title: "BLS: Employment Situation Summary", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
        { title: "Federal Reserve: Speech by Governor Jefferson, 01.10.2026", url: "https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm" }
      ]
    },

    /* 3 GOLD/BITCOIN/EUR-USD/BUND */
    {
      id: "gold-bitcoin-eurusd-bund-wochenende-04-10", cats: ["markets"], when: "Stand Fr/So 02.–04.10.2026",
      headline: "Gold gibt nach gestiegener US-Rendite nach, Bitcoin kaum verändert, Bund-Rendite niedriger als am Donnerstag",
      sec30: "Gold notierte zum Wochenende bei rund 4.140 Dollar je Feinunze (≈ −0,9 bis −1,0 %) und damit weiterhin deutlich unter dem 2026er-Rekordhoch von rund 5.400 bis 5.600 Dollar. Bitcoin bewegte sich am Sonntagmorgen kaum verändert bei rund 84.700 bis 84.900 Dollar. Der Euro stand gegenüber dem Dollar am Sonntag bei rund 1,1252 bis 1,1256, nachdem er am Freitag noch bei rund 1,1243 bis 1,1247 gelegen hatte. Die Bund-Rendite gab auf etwa 3,46 % nach, nach rund 3,51 % am Donnerstag.",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "fakt", text: "Gold notierte zum Wochenschluss bei rund 4.140 Dollar je Feinunze (≈ −0,9 bis −1,0 %) und damit weiterhin deutlich unter dem 2026er-Rekordhoch, das je nach Quelle zwischen rund 5.400 und 5.600 Dollar lag.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Dass die US-Rendite zum Handelsschluss wieder anzog, nachdem sie nach dem schwachen Jobbericht zunächst gefallen war, dürfte zinslose Anlagen wie Gold am späten Freitag belastet haben (Meldung 2)." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Sonntagmorgen bei rund 84.700 bis 84.900 Dollar – kaum verändert gegenüber dem Vortag, nach einem zuvor gescheiterten Versuch, sich über 87.000 Dollar zu halten.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie haben sich Euro und Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "EUR/USD stieg auf rund 1,1252 bis 1,1256, nachdem der Kurs am Freitag noch bei rund 1,1243 bis 1,1247 gelegen hatte.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:4" }] },
          { tag: "fakt", text: "Die Bund-Rendite gab auf etwa 3,46 % nach, nach rund 3,51 % am Donnerstag; Mitte September war sie zeitweise auf rund 3,65 % gestiegen – den höchsten Stand seit 2011.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold, Bitcoin, Euro und Bund-Rendite reagierten zum Wochenende unterschiedlich auf dieselbe Nachrichtenlage: Gold gab nach, der Euro legte zu, Bitcoin blieb weitgehend unverändert. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zum Handelsschluss wieder gestiegene US-Rendite (Meldung 2) wirkt grundsätzlich bremsend auf zinslose Anlagen wie Gold.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "tradingeconomics.com: Gold – Price, Chart, Historical Data", url: "https://tradingeconomics.com/commodity/gold" },
        { title: "usethebitcoin.com: Bitcoin Price Analysis October 4, 2026", url: "https://usethebitcoin.com/bitcoin/bitcoin-price-october-4-2026/" },
        { title: "tradingeconomics.com: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" },
        { title: "tradingeconomics.com: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
      ]
    },

    /* 4 EUROZONE-INFLATION/EZB/FED */
    {
      id: "eurozone-inflation-lagarde-fed-risiken-04-10", cats: ["economy"], when: "Eurostat-Flash 02.10. · Lagarde-Anhörung 28.09. · Fed-Rede 01.10. · nächste EZB-Sitzung 28.–29.10.",
      headline: "Eurozone-Inflation bleibt mit 3,8 Prozent über dem Konsens, Lagarde wirbt weiter für maßvolle Reaktion",
      sec30: "Eurostat meldete am 02.10.2026 für die Eurozone eine Flash-Inflation von 3,8 % im Jahresvergleich für September – mehr als der Marktkonsens von 3,6 % und der höchste Wert seit drei Jahren (August: 3,2 %). Haupttreiber war Energie mit +18,8 %. Deutschland meldete vorläufig 3,3 %, Frankreich 3,4 %, Italien 4,1 %, Spanien 5,0 %. EZB-Präsidentin Lagarde hatte bei einer Anhörung vor dem EU-Parlament am 28.09. für eine maßvolle Reaktion geworben; an den Märkten gilt inzwischen ein weiterer EZB-Zinsschritt im Dezember als eingepreist. Über das Wochenende gab es dazu keine neuen offiziellen Daten oder EZB-Stellungnahmen.",
      blocks: [
        { h: "Wie hoch ist die Inflation in der Eurozone?", items: [
          { tag: "fakt", text: "Eurostat meldete am 02.10.2026 eine Flash-Schätzung von 3,8 % für die Eurozone im September 2026 – über dem Marktkonsens von 3,6 % und dem höchsten Wert seit drei Jahren (August: 3,2 %). Energie verteuerte sich um 18,8 % gegenüber dem Vorjahr.",
            ask: [{ label: "Was ist Inflation und wie wird sie gemessen?", ref: "e:inflation-what" }] },
          { tag: "fakt", text: "Länderwerte für September: Deutschland (vorläufig) 3,3 %, Frankreich 3,4 %, Italien 4,1 %, Spanien 5,0 %. Die endgültige deutsche Zahl steht noch aus." }
        ]},
        { h: "Was hat EZB-Präsidentin Lagarde gesagt?", items: [
          { tag: "position", text: "Lagarde warb bei einer Anhörung vor dem Wirtschaftsausschuss des EU-Parlaments am 28.09.2026 sinngemäß für eine maßvolle Reaktion auf die durch den Nahost-Konflikt angeheizte Inflation und erklärte, es gebe bislang keine Belege für eine Übertragung der Energiepreise auf die Löhne.",
            ask: [{ label: "Was hatte die EZB zuletzt beschlossen?", ref: "e:ecb-hike" }] },
          { tag: "unbestaetigt", text: "An den Terminmärkten gilt inzwischen ein weiterer EZB-Zinsschritt im Dezember als eingepreist; eine Anhebung bei der nächsten Sitzung am 28./29.10.2026 dagegen als unwahrscheinlicher." }
        ]},
        { h: "Welche zusätzlichen Risiken sieht die US-Notenbank?", items: [
          { tag: "fakt", text: "Fed-Gouverneur Philip Jefferson verwies am 01.10.2026 in einer Rede auf geopolitisch bedingte Aufwärtsrisiken für die Inflation – ein Thema, das die Eurozone-Zahlen mit der US-Diskussion verbindet.",
            ask: [{ label: "Wie reagieren Zentralbanken auf solche Risiken?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die über dem Konsens liegende Eurozone-Inflation passt zur vorsichtigen, aber nicht alarmierten Tonlage Lagardes; während die Fed nach dem schwachen US-Jobbericht eher zu einer Oktober-Pause tendiert (Meldung 2), rückt bei der EZB ein Dezember-Zinsschritt stärker in den Fokus." }
        ]}
      ],
      reaction: "Die über dem Konsens liegende Eurozone-Inflation bleibt Hintergrund für die EZB-Linie; der durch den Iran-Konflikt beeinflusste Energiepreis (Meldung 8, Meldung 15) gilt weiterhin als wichtiger Treiber.",
      terms: ["inflation", "kerninflation"],
      followups: ["e:inflation-what", "e:ecb-hike", "e:central-banks-why", "e:oil-inflation"],
      sources: [
        { title: "Eurostat: Euro area annual inflation up to 3.8% in September 2026", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-02102026-ap" },
        { title: "onvista: Lagarde für „maßvolle” Reaktion auf Inflation, Zinsschritt im Dezember", url: "https://www.onvista.de/news/2026/09-28-lagarde-fuer-massvolle-reaktion-auf-inflation-zinsschritt-im-dezember-0-20-26558274" },
        { title: "Federal Reserve: Speech by Governor Jefferson, 01.10.2026", url: "https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm" }
      ]
    },

    /* 5 MARKTAUSBLICK/OPEC+ */
    {
      id: "marktausblick-fed-ezb-zwischenwahlen-opec-04-10", cats: ["markets", "economy"], when: "FOMC 27.–28.10. · EZB-Sitzung 28.–29.10. · US-Zwischenwahlen 03.11. · OPEC+-Entscheidung 04.10.",
      headline: "Terminmärkte sehen Fed-Zinspause als wahrscheinlich, OPEC+ hält Förderquote für November unverändert",
      sec30: "An den Terminmärkten wird eine Wahrscheinlichkeit von rund 77 bis 84 % dafür gesehen, dass die Fed bei ihrer Sitzung am 27./28.10. die Zinsen pausiert; die EZB tagt am 28./29.10., die US-Zwischenwahlen finden am 03.11. statt. OPEC+ einigte sich am heutigen Sonntag, 04.10., laut Delegierten darauf, die Förderquote für November unverändert zu lassen; die volle Ministerrunde zur Förderpolitik 2027 ist erst für den 29.11. angesetzt.",
      blocks: [
        { h: "Wie schätzen Terminmärkte die nächste Fed-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Verschiedene Terminmarkt-Tracker sehen die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10.2026 zwischen rund 77 und 84 %; die genaue Zahl schwankt je nach Anbieter und Zeitpunkt.",
            ask: [{ label: "Was zeigte der Auslöser dafür?", ref: "s:2" }] }
        ]},
        { h: "Was hat die OPEC+ heute entschieden?", items: [
          { tag: "fakt", text: "Die OPEC+-Kerngruppe aus sieben Staaten (Saudi-Arabien, Russland, Irak, Kuwait, Kasachstan, Algerien, Oman) einigte sich am 04.10.2026 per Videokonferenz darauf, die Förderquote für November unverändert zu lassen – eine Fortsetzung der bereits im Oktober verhängten Förderpause.",
            ask: [{ label: "Warum trifft sich die OPEC+ regelmäßig?", ref: "e:opec-plus-why" }] }
        ]},
        { h: "Welche politischen Termine stehen an?", items: [
          { tag: "fakt", text: "Die US-Zwischenwahlen finden am 03.11.2026 statt; Präsident Trump hatte eine mögliche erneute Bombardierung Irans ausdrücklich für die Zeit danach in Aussicht gestellt.",
            ask: [{ label: "Was ist dazu der aktuelle Stand?", ref: "s:8" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Kombination aus einer wahrscheinlichen Fed-Pause, einer möglichen EZB-Anhebung im Dezember und einer unveränderten OPEC+-Förderquote zeigt, dass Zins- und Energiepolitik in den kommenden Wochen eng mit politischen Terminen verknüpft bleiben." }
        ]}
      ],
      reaction: "Die Einschätzungen zur Fed-Sitzung hängen eng mit dem Arbeitsmarktbericht zusammen (Meldung 2); die OPEC+-Entscheidung betrifft unmittelbar den Ölpreis (Meldung 15).",
      terms: ["leitzins"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:ecb-hike"],
      sources: [
        { title: "Federal Reserve: Meeting calendars and information (FOMC)", url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
        { title: "Bloomberg: OPEC+ Set to Keep Quotas Steady in November, Delegates Say", url: "https://www.bloomberg.com/news/articles/2026-10-04/opec-has-deal-outline-for-steady-november-quotas-delegates-say" },
        { title: "e-fundresearch.com: EZB-Termine 2026 – Alle Ratssitzungen und Zinsentscheide", url: "https://e-fundresearch.com/markets/artikel/60240-ezb-termine-2026-alle-ratssitzungen-und-zinsentscheide" }
      ]
    },

    /* 6 RENTE/PFLEGE/HAUSHALT */
    {
      id: "rente-pflege-haushalt-rechnungshof-04-10", cats: ["germany"], when: "Rechnungshof-Bericht 02.10. · Koalitionsausschuss angesetzt für 07.10. · Bereinigungssitzung 12.11.",
      headline: "Bundesrechnungshof warnt vor wachsender Rentenlast für den Haushalt, Koalition prüft Kompromiss bei Beitragsjahren",
      sec30: "Der Bundesrechnungshof warnte in einem am 02.10.2026 bekannt gewordenen Bericht, die Zuschüsse zur Rentenversicherung könnten bis 2040 auf rund 36,7 % aller Steuereinnahmen steigen – nach rund 29 % aktuell; mit dem geplanten Rentenpaket könnte der Bundeszuschuss laut dem Bericht bereits Anfang der 2030er-Jahre rund 46 % der Steuereinnahmen erreichen. Für 2027 sind im Haushaltsentwurf 132,0 Mrd. Euro für die Rentenversicherung vorgesehen (2026: 127,4 Mrd. Euro). In der Koalition werden laut Berichten Kompromissmodelle geprüft, die Schwelle für die abschlagsfreie Rente von 45 auf 46 oder 47 Beitragsjahre anzuheben, möglicherweise beschränkt auf besonders belastende Berufe. Der für den 07.10.2026 angesetzte Koalitionsausschuss zu Rente, Pflege und Gesundheit soll hierzu eine Linie finden.",
      blocks: [
        { h: "Was warnt der Bundesrechnungshof?", items: [
          { tag: "fakt", text: "Laut einem am 02.10.2026 bekannt gewordenen Bericht des Bundesrechnungshofs könnten die Bundeszuschüsse zur Rentenversicherung bis 2040 auf rund 36,7 % aller Steuereinnahmen steigen (aktuell rund 29 %); mit dem geplanten Rentenpaket könnte der Zuschuss bereits Anfang der 2030er-Jahre rund 46 % erreichen. Für 2027 sind 132,0 Mrd. Euro vorgesehen, nach 127,4 Mrd. Euro 2026.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "unbestaetigt", text: "Berichten zufolge wirft der Rechnungshof dem Bundesfinanzministerium zusätzlich vor, 7 Mrd. Euro aus einer Rücklage einplanen zu wollen, die faktisch nicht in der angenommenen Höhe bestehe, und warnt vor einer „Schuldenfalle”, da rund 32 % der Ausgaben kreditfinanziert seien." }
        ]},
        { h: "Was wird zur Rentenreform diskutiert?", items: [
          { tag: "unbestaetigt", text: "In der Koalition werden laut Berichten Modelle geprüft, die Schwelle für die abschlagsfreie Rente nach langer Beitragszeit von 45 auf 46 oder 47 Jahre anzuheben, möglicherweise beschränkt auf besonders belastende Berufe. Ein Gesetzentwurf lag zum Recherchezeitpunkt nicht vor." },
          { tag: "position", text: "SPD-Generalsekretär Tim Klüssendorf sprach sich dafür aus, die bestehende 45-Jahre-Regel zu erhalten.",
            ask: [{ label: "Was bedeutet eine Koalition?", ref: "t:koalition" }] },
          { tag: "position", text: "DGB-Vorsitzende Yasmin Fahimi lehnt eine Einschränkung der abschlagsfreien Rente nach langer Beitragszeit ab und bezeichnete eine zur Diskussion stehende „Kapitalrente” als „Täuschung”." }
        ]},
        { h: "Wie ist der Stand bei der Pflegereform?", items: [
          { tag: "fakt", text: "Das Bundeskabinett hatte am 30.09.2026 das Pflegeneuordnungsgesetz (PNOG) beschlossen; dabei wurde eine zuvor diskutierte Kürzung bei der Rente gestrichen und der Entlastungsbetrag für Pflegegrad 1 gekappt." },
          { tag: "position", text: "Die Gewerkschaft Verdi bezeichnete das PNOG trotz der Zugeständnisse weiterhin als „Sparpaket” zu Lasten von Beitragszahlenden, Pflegebedürftigen und Beschäftigten und fordert einen Pflegedeckel." }
        ]},
        { h: "Wie ist der Stand beim Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss berät seit der Einbringung durch Finanzminister Lars Klingbeil am 08.09.2026 über den Etat 2027; die Bereinigungssitzung ist für den 12.11.2026 angesetzt, die Schlussabstimmung im Plenum für den 27.11.2026.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Während Pflegereform und Haushalt 2027 nach festem Zeitplan laufen, bleibt die Rentenreform ohne Einigung zwischen Union und SPD; der Koalitionsausschuss am 7.10. gilt als nächster wichtiger Termin, zusätzlich unter Druck durch die Rechnungshof-Warnung." }
        ]}
      ],
      reaction: "Die ungelöste Rentenfrage läuft parallel zur allgemeinen Diskussion über die Zinslast des Staates (Meldung 3) und zu den Berliner Koalitionssondierungen (Meldung 7).",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:rente-basics"],
      sources: [
        { title: "finanzen.at: Rechnungshof – Rente verbraucht immer mehr Steuereinnahmen", url: "https://www.finanzen.at/nachrichten/aktien/rechnungshof-rente-verbraucht-immer-mehr-steuereinnahmen-1036594161" },
        { title: "finanznachrichten.de: Rechnungshof befürchtet hohe Kosten der Rente für Bundeshaushalt", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69744489-rechnungshof-befuerchtet-hohe-kosten-der-rente-fuer-bundeshaushalt-003.htm" },
        { title: "ad-hoc-news.de: Rente mit 63 – Koalition prüft 46 oder 47 Beitragsjahre als Kompromiss", url: "https://www.ad-hoc-news.de/wirtschaft/rente-mit-63-koalition-prueft-46-oder-47-beitragsjahre-als-kompromiss/70179478" },
        { title: "kma-online.de: PNOG beschlossen – Linnemann macht SPD Zugeständnisse", url: "https://www.kma-online.de/aktuelles/politik/detail/pnog-beschlossen-linnemann-macht-spd-zugestaendnisse-56278" },
        { title: "verdi.de: Pflegereform 2026 – Kabinett beschließt Sparpaket", url: "https://www.verdi.de/politik-gesellschaft/pflegereform-beschlossen-verdi-verlangt-nachbesserungen-im-bundestag" }
      ]
    },

    /* 7 BERLIN SONDIERUNG / TAG DER DEUTSCHEN EINHEIT */
    {
      id: "berlin-sondierung-dritte-runde-einheitsfeier-04-10", cats: ["germany"], when: "2. Sondierungsgespräch 03.10. · 3. Runde angesetzt für 07.10. · Einheitsfeier Bremen 03.10.",
      headline: "Berliner Sondierungsgespräche gehen in dritte Runde, Bundespräsident spricht bei Einheitsfeier in Bremen",
      sec30: "Die Parteivorsitzenden von Linke, SPD und Grünen führten am Samstag, 03.10.2026, ein rund fünfstündiges zweites Sondierungsgespräch in Berlin, erneut ohne Einigung zum Umgang mit Antisemitismus-Vorwürfen und organisierter Kriminalität; eine dritte Runde ist für Mittwoch, 07.10.2026, vereinbart. Linksfraktionschef im Bundestag Sören Pellmann war bereits am 01.10. seinem eigenen Beitritt zur „Roten Hilfe” öffentlich geworden. Am 03.10.2026 fand zudem die zentrale Feier zum Tag der Deutschen Einheit in Bremen statt; Bundespräsident Steinmeier und Bremens Bürgermeister Andreas Bovenschulte hielten die Festreden.",
      blocks: [
        { h: "Was wurde beim zweiten Sondierungsgespräch besprochen?", items: [
          { tag: "fakt", text: "Die Parteivorsitzenden von Linke, Grünen und SPD trafen sich am 03.10.2026 rund fünf Stunden lang im Haus der Statistik in Berlin. Zum Umgang mit Antisemitismus-Vorwürfen und organisierter Kriminalität gab es weiterhin keine Einigung; alle Seiten erklärten, die Gespräche fortsetzen zu wollen. Eine dritte Runde ist für Mittwoch, 07.10.2026, vereinbart.",
            ask: [{ label: "Warum sind Landeswahlen auch bundespolitisch wichtig?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "Grüne und SPD machen weiterhin eine klare Positionierung der Linken zu diesen Themen zur Vorbedingung für formelle Koalitionsverhandlungen.",
            ask: [{ label: "Was braucht eine Koalition im Abgeordnetenhaus?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was ist der Stand um Sören Pellmann?", items: [
          { tag: "fakt", text: "Linksfraktionschef im Bundestag Sören Pellmann war am 01.10.2026 öffentlich geworden mit seinem eigenen Beitritt zur „Roten Hilfe” – als Reaktion auf Kritik an einer früheren, inzwischen beendeten Mitgliedschaft der Berliner Linken-Spitzenkandidatin Elif Eralp in derselben, vom Berliner Verfassungsschutz als linksextrem eingestuften Organisation." }
        ]},
        { h: "Was wurde bei der Einheitsfeier in Bremen gesagt?", items: [
          { tag: "fakt", text: "Die zentrale Feier zum 36. Jahrestag der Deutschen Einheit fand am 03.10.2026 in Bremen statt; Bundespräsident Steinmeier und Bürgermeister Bovenschulte hielten im Festakt in der Glocke die Hauptreden." },
          { tag: "position", text: "Bundespräsident Steinmeier warnte in seiner Rede vor politischer Demagogie extremistischer Kräfte, die seiner Einschätzung nach nicht nur Freiheit und Demokratie, sondern auch den gesellschaftlichen Zusammenhalt gefährde, und rief zu „Mut zur Erneuerung” auf." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der offene Umgang mit Antisemitismus-Vorwürfen bleibt der zentrale Streitpunkt vor möglichen Koalitionsverhandlungen in Berlin; die dritte Gesprächsrunde am 7.10. fällt auf denselben Tag wie der bundespolitische Koalitionsausschuss zu Rente und Pflege (Meldung 6)." }
        ]}
      ],
      reaction: "Die Debatte läuft parallel zur bundespolitischen Diskussion über Rente und Pflege (Meldung 6), deren Koalitionsausschuss auf denselben Tag fällt wie die dritte Berliner Sondierungsrunde.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel: Vorgespräche gehen in dritte Runde – Linke, Grüne und SPD bewegen sich zaghaft aufeinander zu", url: "https://www.tagesspiegel.de/berlin/vorgesprache-gehen-in-dritte-runde-linke-grune-und-spd-bewegen-sich-in-berlin-zaghaft-aufeinander-zu-16122162.html" },
        { title: "Berliner Zeitung: Linke, Grüne und SPD setzen Vorgespräche fort", url: "https://www.berliner-zeitung.de/article/linke-gruene-und-spd-setzen-vorgespraeche-fort-10456750" },
        { title: "Berliner Zeitung: Sören Pellmann tritt der Roten Hilfe bei", url: "https://www.berliner-zeitung.de/article/soeren-pellmann-tritt-der-roten-hilfe-bei-10453020" },
        { title: "butenunbinnen.de: Bundespräsident und Bremens Bürgermeister halten Reden bei Festakt", url: "https://www.butenunbinnen.de/nachrichten/bremen-festakt-deutsche-einheit-glocke-100.html" }
      ]
    },

    /* 8 IRAN/HORMUZ/CAMP DAVID/OPEC+ */
    {
      id: "iran-hormuz-camp-david-opec-04-10", cats: ["world", "geo"], when: "Camp-David-Treffen 02.10. (bekannt 03.10.) · Tanker-Vorfall 03.10. · OPEC+-Entscheidung 04.10.",
      headline: "Trumps Sicherheitsberater beraten auf Camp David über Iran, neuer Tanker-Vorfall nahe Oman, OPEC+ hält Förderquote",
      sec30: "Nach Berichten vom 03.10.2026 trafen sich Vizepräsident Vance, Außenminister Rubio, Verteidigungsminister Hegseth und weitere hochrangige Sicherheitsberater Trumps am Vortag zu bislang nicht öffentlich bestätigten, mehrstündigen Beratungen auf Camp David über Iran und den Jemen-Konflikt. Hegseth bezeichnete die US-Marineblockade iranischer Häfen als „ironclad” und erklärte, Iran werde „niemals” eine Atomwaffe besitzen. Am 03.10. wurde rund vier Seemeilen östlich von Oman ein weiterer Tanker von einem Geschoss getroffen. OPEC+ einigte sich am 04.10. darauf, die Förderquote für November unverändert zu lassen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Durch die Straße von Hormus läuft nach Angaben von Marktbeobachtern ein großes Volumen des weltweit gehandelten Öls. Eine Deeskalation oder Eskalation dort wirkt sich direkt auf die globalen Energiepreise aus (Meldung 15).",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wer ist beteiligt, und wie ist der Stand?", items: [
          { tag: "unbestaetigt", text: "Laut einem Bericht vom 03.10.2026 trafen sich Vizepräsident JD Vance, Außenminister Marco Rubio, Verteidigungsminister Pete Hegseth, Nahost-Sondergesandter Steve Witkoff, CIA-Direktor John Ratcliffe, Generalstabschef Dan Caine und Finanzminister Scott Bessent am Vortag zu mehrstündigen Beratungen auf Camp David über Iran und den Konflikt zwischen Saudi-Arabien und den Huthi im Jemen. Die US-Regierung hat das Treffen nicht offiziell bestätigt." },
          { tag: "position", text: "Verteidigungsminister Hegseth erklärte laut Berichten, die US-Marineblockade iranischer Häfen sei „ironclad”, und betonte, Iran werde „niemals, niemals, niemals” eine Atomwaffe besitzen." }
        ]},
        { h: "Welche militärischen Bewegungen und Vorfälle gab es?", items: [
          { tag: "fakt", text: "Die USS Theodore Roosevelt verließ laut Berichten bereits am 28.09.2026 ohne besondere Ankündigung den Hafen von San Diego, gefolgt von der Makin-Island-Einsatzgruppe mit mehr als 2.000 Marineinfanteristen; die gesamte US-Truppenpräsenz in der Region könnte auf bis zu rund 20.000 Personen steigen.",
            ask: [{ label: "Wie hat sich der Ölpreis dadurch entwickelt?", ref: "n:brent" }] },
          { tag: "unbestaetigt", text: "Am 03.10.2026 wurde nach Berichten rund vier Seemeilen östlich von Oman ein weiterer Tanker von einem Geschoss getroffen – ein zusätzlicher Vorfall zu dem bereits am 01./02.10. gemeldeten Tanker-Treffer in der Straße von Hormus. Die genaue Zählung solcher Vorfälle schwankt je nach Quelle." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Die G7-Staaten vereinbarten am 02.10.2026 die Freigabe von bis zu 100 Millionen Barrel aus strategischen Ölreserven über vier Monate; die Internationale Energieagentur (IEA) bezifferte die bislang insgesamt freigegebene Menge auf rund 325 Millionen Barrel." },
          { tag: "fakt", text: "OPEC+ einigte sich am 04.10.2026 darauf, die Förderquote für November unverändert zu lassen; die volle Ministerrunde zur Förderpolitik für 2027 ist erst für den 29.11.2026 angesetzt.",
            ask: [{ label: "Welche Rolle spielt Öl für die Inflation?", ref: "e:oil-inflation" }] },
          { tag: "einordnung", text: "Die Kette von einem geopolitischen Konflikt über den Ölpreis bis zu Zinsen und Verbrauchern lässt sich Schritt für Schritt nachvollziehen.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der von der Hormuz-Eskalation beeinflusste Ölpreis (Meldung 15) gilt weiterhin als Hintergrundfaktor für die Energiekosten vor dem Winter; die US-Zwischenwahlen am 3.11. bleiben ein politischer Fixpunkt (Meldung 5).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "e:oil-inflation", "chain:oil-to-markets"],
      sources: [
        { title: "Axios: Scoop – Trump's top national security aides meet secretly at Camp David on Iran, Yemen", url: "https://www.axios.com/2026/10/03/trumps-cabinet-camp-david-iran-war-yemen-houthis" },
        { title: "CBS News: Live Updates – Trump Iran war, US midterm elections, troops deployment", url: "https://www.cbsnews.com/live-updates/trump-iran-war-us-midterm-elections-troops-deployment/" },
        { title: "Washington Times: Navy sending USS Theodore Roosevelt carrier strike group to the Middle East", url: "https://www.washingtontimes.com/news/2026/oct/2/navy-sending-uss-theodore-roosevelt-carrier-strike-group-middle-east/" },
        { title: "Bloomberg: OPEC+ Set to Keep Quotas Steady in November, Delegates Say", url: "https://www.bloomberg.com/news/articles/2026-10-04/opec-has-deal-outline-for-steady-november-quotas-delegates-say" }
      ]
    },

    /* 9 UKRAINE/RUSSLAND/SÜDKOREA */
    {
      id: "ukraine-kyjiw-bruecken-suedkorea-04-10", cats: ["world", "geo"], when: "Südbrücke mehrfach getroffen 02.10. · Nordbrücke 03./04.10. · Südkorea-Drohung erneuert 02./03.10.",
      headline: "Russland greift Kyjiws Brücken wiederholt an, Südkoreas Präsident bekräftigt Drohung gegen die Ukraine",
      sec30: "Die Kyjiwer Südbrücke wurde nach ukrainischen Angaben binnen 24 Stunden fünfmal getroffen; am 03. und 04.10.2026 wurde zusätzlich die Nordbrücke (Pivnichnyj-Brücke) beschädigt, am Samstag mit zwei Verletzten. Örtliche Behörden sprechen davon, dass die Angriffe die Hauptstadt zunehmend in zwei Teile zerschneiden. Weitere Angriffe trafen am 03.10. ein Pharmalager in Sumy und eine Kommunikationsanlage in Dnipro. Südkoreas Präsident Lee Jae-myung bekräftigte am 02./03.10. seine Drohung mit weiteren, nicht näher genannten Schritten gegen die Ukraine im Streit um überstellte nordkoreanische Kriegsgefangene, sollte Kyjiw sich nicht entschuldigen.",
      blocks: [
        { h: "Was ist in Kyjiw passiert?", items: [
          { tag: "fakt", text: "Die Kyjiwer Südbrücke wurde laut Berichten vom 02.10.2026 binnen 24 Stunden fünfmal getroffen. Am 03.10. wurde zusätzlich die Nordbrücke (Pivnichnyj-Brücke) getroffen – zwei Menschen wurden verletzt, Stromleitungen für Trolleybusse und die Fahrbahn beschädigt; am 04.10. gab es dort einen weiteren Treffer." },
          { tag: "position", text: "Örtliche Behörden erklärten laut Berichten, die wiederholten Angriffe auf Brücken zerschnitten die Hauptstadt faktisch in zwei Teile." },
          { tag: "fakt", text: "Am 03.10.2026 trafen zusätzliche Angriffe ein Pharmalager in Sumy und eine Kommunikationsanlage in Dnipro; landesweit wurde an diesem Tag von einem Toten und sechs Verletzten berichtet." }
        ]},
        { h: "Was ist der Stand bei der Patriot-Lizenz?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj hatte am 25.09.2026 erklärt, Trump habe am Rande der UN-Generalversammlung eine „endgültige Entscheidung” getroffen, der Ukraine eine Lizenz zur eigenen Produktion von Patriot-Abfangraketen zu erteilen. Eine unabhängige Bestätigung durch das US-Außenministerium oder ein unterzeichnetes Abkommen liegt weiterhin nicht vor; es handelt sich bislang um eine politische Zusage, nicht um eine formalisierte Vereinbarung.",
            ask: [{ label: "Wie ist die Lage bei Rüstungsaufträgen?", ref: "s:11" }] }
        ]},
        { h: "Was ist der Streit mit Südkorea?", items: [
          { tag: "fakt", text: "Auslöser war Präsident Selenskyjs Ankündigung vor der UN-Generalversammlung, die Ukraine habe zwei im Januar 2025 gefangene nordkoreanische Soldaten nach Südkorea überstellt." },
          { tag: "position", text: "Südkoreas Präsident Lee Jae-myung bekräftigte am 02./03.10.2026 erneut seine Drohung mit weiteren, nicht näher genannten Maßnahmen, sollte die Ukraine sich nicht öffentlich entschuldigen." },
          { tag: "position", text: "Die ukrainische Außenministeriumsseite bezeichnete den Vorgang laut einem am 01.10. veröffentlichten Interview als „diplomatisches Missverständnis”; ein Vertreter des südkoreanischen Präsidialamts nannte diese Reaktion „ausweichend”." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Anhaltende Angriffe auf die Energie- und Verkehrsinfrastruktur und die ungeklärte Patriot-Frage halten laut Marktbeobachtern die Nachfrage nach westlicher Rüstungsunterstützung hoch (Meldung 11)." }
        ]}
      ],
      reaction: "Die ungeklärte Patriot-Lizenz-Frage bleibt Teil der allgemeinen Debatte über westliche Rüstungslieferungen (Meldung 10, Meldung 11).",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "CNN: Russia strikes another major bridge in Kyiv as attacks on Ukrainian capital escalate", url: "https://www.cnn.com/2026/10/03/europe/russia-strikes-northern-southern-bridges-kyiv-attacks-intl" },
        { title: "Bloomberg: Russia Again Strikes Kyiv Bridge as Infrastructure Attacks Widen", url: "https://www.bloomberg.com/news/articles/2026-10-04/russia-again-strikes-kyiv-bridge-as-infrastructure-attacks-widen" },
        { title: "Kyiv Independent: Russia strikes key Kyiv bridge for 3rd straight day as attacks intensify", url: "https://kyivindependent.com/russia-strikes-key-kyiv-bridge-for-3rd-straight-day-as-attacks-intensify/" },
        { title: "France24: Trump made 'final decision' to allow Ukraine to produce Patriot missiles, Zelensky says", url: "https://www.france24.com/en/europe/20260925-trump-made-final-decision-to-give-ukraine-patriot-licence-zelensky-says" },
        { title: "Seoul Economic Daily: Lee Warns of Further Steps if Ukraine Refuses Public Apology", url: "https://en.sedaily.com/politics/2026/10/03/lee-warns-of-further-steps-if-ukraine-refuses-public-apology" }
      ]
    },

    /* 10 RHEINMETALL/RENK/DIEHL */
    {
      id: "rheinmetall-renk-diehl-defence-04-10", cats: ["defence"], when: "Schluss Fr 02.10. · Insiderkäufe 29.09./02.10. · Diehl/BAAINBw-Auftrag bekannt 23./24.09.",
      headline: "Rheinmetall-Aktie uneinheitlich notiert, Renk fällt nach gesenktem Kursziel weiter, Diehl erhält IRIS-T-Auftrag für F125",
      sec30: "Die Rheinmetall-Aktie schloss am 02.10.2026 an der Frankfurter Börse (Xetra) bei 956,90 Euro, an anderen Handelsplätzen zwischen 960,90 und 962,30 Euro. CEO Armin Papperger kaufte am 29.09. für rund 498.948 Euro eigene Aktien, am 02.10. erwarb zusätzlich die einem Aufsichtsratsmitglied nahestehende Sara-Georgi-Stiftung Aktien für rund 238.707 Euro. Die Renk-Aktie notierte am 02.10. bei rund 37,13 bis 37,50 Euro, nachdem JPMorgan sein Kursziel am 28.09. von 75 auf 62 Euro gesenkt hatte. Diehl Defence erhielt vom Beschaffungsamt BAAINBw nach Billigung durch den Haushaltsausschuss am 23.09. einen Auftrag zur Anpassung von IRIS-T SLM für die F125-Fregatten der Deutschen Marine.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die Rheinmetall-Aktie schloss am 02.10.2026 je nach Handelsplatz unterschiedlich: an der Frankfurter Börse (Xetra) bei 956,90 Euro, in Frankfurt-Parkett bei 961,20 Euro, in Stuttgart bei 961,00 Euro und bei gettex bei 962,30 Euro.",
            ask: [{ label: "Was bedeutet ein fallender Aktienkurs trotz hoher Auftragsbestände?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "CEO Armin Papperger kaufte am 29.09.2026 eigene Aktien für rund 498.948 Euro (Durchschnittspreis 950,38 Euro); am 02.10.2026 erwarb zusätzlich die mit Aufsichtsratsmitglied Andreas Georgi verbundene Sara-Georgi-Stiftung Aktien für rund 238.707 Euro (Durchschnittspreis 954,83 Euro)." },
          { tag: "unbestaetigt", text: "Analystenkursziele reichen weiterhin von rund 1.050 bis 2.300 Euro; der Median wird mit rund 1.500 bis 1.860 Euro angegeben – eine ungewöhnlich große Streuung je nach Quelle und Zeitpunkt." }
        ]},
        { h: "Wie hat sich die Renk-Aktie entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die Renk-Aktie notierte am 02.10.2026 je nach Handelsplatz zwischen rund 37,13 und 37,50 Euro – rund 32 % im Minus seit Jahresbeginn und mehr als die Hälfte unter ihrem Allzeithoch von Oktober 2025." },
          { tag: "fakt", text: "JPMorgan senkte am 28.09.2026 sein Kursziel für Renk von 75 auf 62 Euro, beließ die Einstufung aber bei „Overweight”; Analyst David Perry begründete dies mit einem möglicherweise enttäuschenden Quartalsergebnis, erwartet im Kerngeschäft Vehicle Mobility Solutions aber weiterhin starke Resultate." }
        ]},
        { h: "Welche Bundeswehr-Beschaffung wurde konkret?", items: [
          { tag: "fakt", text: "Diehl Defence erhielt vom Beschaffungsamt BAAINBw einen Auftrag zur Anpassentwicklung von IRIS-T SLM für die F125-Fregatten der Deutschen Marine (Prototypenbau, Testfeuerungen) – nach Billigung durch den Haushaltsausschuss des Bundestags am 23.09.2026 und Ankündigung am 24.09.2026. Für das Wochenende 02.–04.10. lagen dazu keine weiteren Entwicklungen vor.",
            ask: [{ label: "Welche größeren Rüstungsprojekte laufen sonst noch?", ref: "s:11" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die unterschiedliche Kursentwicklung von Rheinmetall (uneinheitlich je Handelsplatz, aber mit Insiderkäufen) und Renk (nach gesenktem Kursziel weiter unter Druck) zeigt, wie unterschiedlich Anleger die einzelnen deutschen Rüstungswerte derzeit einschätzen – während die Bundeswehr parallel weiterhin konkrete Beschaffungsaufträge vergibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die anhaltenden Angriffe in der Ukraine (Meldung 9) bleiben Hintergrundfaktor für die Branche; der große TKMS-Auftrag aus Kanada zeigt gegenläufig weiter hohe internationale Nachfrage (Meldung 11).",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "finanznachrichten.de: Rheinmetall Aktie – Insiderkäufe und neuer Vorstoß ins All", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69741134-rheinmetall-aktie-insiderkaeufe-und-neuer-vorstoss-ins-all-424.htm" },
        { title: "onvista: ANALYSE-FLASH – JPMorgan senkt Ziel für Renk auf 62 Euro, „Overweight”", url: "https://www.onvista.de/news/2026/09-28-analyse-flash-jpmorgan-senkt-ziel-fuer-renk-auf-62-euro-overweight-0-10-26558168" },
        { title: "ad-hoc-news.de: RENK Group meldet UBS-Anteil – Aktie notiert bei 37,50 Euro nach 37,44 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/renk-group-meldet-ubs-anteil-renk-group-aktie-notiert-bei-37-50-euro-nach-37-44-euro/70220908" }
      ]
    },

    /* 11 NATO-VERTEIDIGUNGSAUSGABEN/TKMS */
    {
      id: "nato-verteidigungsausgaben-tkms-kanada-04-10", cats: ["defence"], when: "NATO-Meldung Rekordausgaben laufend · TKMS-Kanada-Vorzugsbieter Juli 2026, ohne neuen Stand",
      headline: "Deutschland meldet Rekord-Verteidigungsausgaben, bleibt aber unter dem Fünf-Staaten-Ziel von 3,5 Prozent",
      sec30: "Deutschland meldete erneut Verteidigungsausgaben in Rekordhöhe von 124,7 Mrd. Euro, was nach NATO-Berechnung rund 2,69 % des Bruttoinlandsprodukts entspricht. Fünf NATO-Staaten werden das 2025 beim Gipfel in Den Haag vereinbarte Ziel von 3,5 % des BIP bis 2035 bereits im laufenden Jahr erreichen – Deutschland gehört bislang nicht dazu. Beim kanadischen U-Boot-Programm bleibt der im Juli 2026 getroffene Vorzugsbieter-Entscheid für Thyssenkrupp Marine Systems (TKMS) unverändert aktuell; ein unterzeichneter Vertrag liegt weiterhin nicht vor.",
      blocks: [
        { h: "Wie hoch sind Deutschlands Verteidigungsausgaben?", items: [
          { tag: "fakt", text: "Deutschland meldete der NATO Verteidigungsausgaben von 124,7 Mrd. Euro für das laufende Jahr – ein Rekordwert, der nach NATO-Berechnungsmethode rund 2,69 % des Bruttoinlandsprodukts entspricht.",
            ask: [{ label: "Wie hängen Rüstungsaufträge mit dem Haushalt zusammen?", ref: "s:6" }] },
          { tag: "fakt", text: "Fünf NATO-Mitgliedstaaten werden das auf dem Den-Haag-Gipfel 2025 vereinbarte Ziel von 3,5 % des BIP für Kernverteidigungsausgaben bis 2035 bereits im laufenden Jahr erreichen; Deutschland zählt trotz der Rekordsumme bislang nicht zu diesen Staaten." }
        ]},
        { h: "Wie ist der Stand beim TKMS-Auftrag aus Kanada?", items: [
          { tag: "fakt", text: "Kanadas Premierminister Mark Carney hatte TKMS im Juli 2026 offiziell als Vorzugsbieter für die Erneuerung der kanadischen U-Boot-Flotte ausgewählt: bis zu zwölf U-Boote vom Typ 212CD, reiner Bauauftrag mit einem Volumen von rund 20 Mrd. Euro, Gesamtvolumen inklusive Wartung über die Nutzungsdauer von bis zu rund 62 Mrd. Euro. Die ersten vier Boote sollen bis 2034 geliefert werden.",
            ask: [{ label: "Was bedeutet „Vorzugsbieter”?", ref: "e:nato-target" }] },
          { tag: "unbestaetigt", text: "Die Auswahl als Vorzugsbieter ist noch kein unterzeichneter Vertrag; für das Wochenende 02.–04.10.2026 lag dazu kein neuer Stand vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Rekordmeldung zu den deutschen Verteidigungsausgaben und der weiterhin unverbindliche TKMS-Vorzugsbieter-Status in Kanada zeigen zwei unterschiedliche Stadien derselben Entwicklung: steigende Budgets einerseits, noch nicht final vertraglich abgesicherte Großaufträge andererseits." }
        ]}
      ],
      reaction: "Die anhaltende Nachfrage nach westlicher Rüstung (Meldung 9) und die Kursentwicklung deutscher Rüstungswerte (Meldung 10) hängen mit demselben Trend steigender Verteidigungsbudgets zusammen.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "zdfheute.de: Nato – Fünf Mitgliedsstaaten erreichen Ausgaben-Ziel", url: "https://www.zdfheute.de/politik/ausland/nato-ausgaben-verteidigung-ziel-trump-100.html" },
        { title: "rpr1.de/dpa: Deutschland meldet Nato-Verteidigungsausgaben in Rekordhöhe", url: "https://www.rpr1.de/nachrichten/dpa-politik/deutschland-meldet-nato-verteidigungsausgaben-in-rekordhoehe" },
        { title: "euronews.de: Kanada setzt auf deutsche U-Boote – TKMS gewinnt Milliardenauftrag", url: "https://de.euronews.com/my-europe/2026/07/07/kanada-u-boot-tkms-212cd" }
      ]
    },

    /* 12 DEALS: GFL ENVIRONMENTAL / PARAMOUNT SKYDANCE */
    {
      id: "gfl-environmental-paramount-skydance-04-10", cats: ["deals"], when: "GFL-Gebote bekannt 02.10. · Skydance-Umbenennung/NYSE-Wechsel angesetzt für 06.10.",
      headline: "Zwei Investorenkonsortien bieten um GFL Environmental, Paramount-WBD-Fusion firmiert ab 6. Oktober als „Skydance Corporation”",
      sec30: "Der kanadisch-US-amerikanische Entsorgungskonzern GFL Environmental erhielt laut Berichten vom 02.10.2026 konkurrierende Übernahmeangebote von zwei Investorengruppen: KKR, Blackstone und Energy Capital Partners auf der einen, Brookfield Asset Management und IFM Investors auf der anderen Seite. Der Deal würde GFL mit einem Unternehmenswert von rund 28 Mrd. Dollar (rund 18 Mrd. Dollar Eigenkapitalwert plus rund 10 Mrd. Dollar Schulden) bewerten. Getrennt davon soll der aus der Fusion von Paramount und Warner Bros. Discovery entstandene Konzern am 06.10.2026 in „Skydance Corporation” umbenannt werden und von der Nasdaq an die NYSE wechseln (Ticker künftig „SKYD”).",
      blocks: [
        { h: "Wer bietet um GFL Environmental, und wie hoch ist der Deal bewertet?", items: [
          { tag: "fakt", text: "Laut einem am 02.10.2026 bekannt gewordenen Bericht konkurrieren zwei Konsortien um eine Übernahme von GFL Environmental: KKR & Co., Blackstone und Energy Capital Partners auf der einen Seite, Brookfield Asset Management und IFM Investors auf der anderen. Der Unternehmenswert wird mit rund 28 Mrd. Dollar angegeben (rund 18 Mrd. Dollar Marktwert des Eigenkapitals plus rund 10 Mrd. Dollar Schulden).",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] },
          { tag: "fakt", text: "Ein im Juli 2026 eingesetzter Sonderausschuss von GFL prüft die Angebote und könnte laut Berichten auf höhere Gebote drängen; GFL-Gründer und CEO Patrick Dovigi erklärte, seinen gesamten Anteil in eine Übernahme einbringen zu wollen." },
          { tag: "unbestaetigt", text: "Angaben zu Finanzierung, genauer Bewertung je Aktie, beteiligten Banken und einem konkreten Zeitplan für eine Entscheidung sind in den vorliegenden Quellen nicht genannt.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "t:lbo" }] }
        ]},
        { h: "Was passiert bei Paramount/Warner Bros. Discovery?", items: [
          { tag: "fakt", text: "Der aus der rund 110 Mrd. Dollar schweren Fusion von Paramount Skydance und Warner Bros. Discovery entstandene Konzern kündigte am 02.10.2026 an, seinen Namen zum 06.10.2026 in „Skydance Corporation” zu ändern und die Notierung der Class-B-Aktien von der Nasdaq an die NYSE zu verlegen; der Ticker wechselt von „PSKY” zu „SKYD”." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Beide Vorgänge zeigen anhaltend hohe Aktivität bei großen Unternehmensübernahmen und -umstrukturierungen in diesem Herbst – einmal als noch offener Bieterwettstreit, einmal als unmittelbar bevorstehender formaler Vollzugsschritt einer bereits im Februar 2026 vereinbarten Fusion." }
        ]}
      ],
      reaction: "Der GFL-Bieterwettstreit reiht sich in eine Serie großer Private-Equity-Transaktionen ein, die auch Palmer Square und Stack Infrastructure betreffen (Meldung 13).",
      terms: ["closing"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "≈ 28 Mrd. $ Unternehmenswert (≈ 18 Mrd. $ Eigenkapital + ≈ 10 Mrd. $ Schulden); Kaufpreis je Aktie nicht in den Quellen genannt",
        buyer: "Zwei konkurrierende Konsortien: (1) KKR, Blackstone, Energy Capital Partners; (2) Brookfield Asset Management, IFM Investors",
        target: "GFL Environmental (Entsorgungskonzern, Kanada/USA)",
        sector: "Entsorgung / Infrastruktur",
        type: "Take-Private (Leveraged Buyout, Gebote liegen vor, keine Einigung)"
      },
      sources: [
        { title: "SeekingAlpha: GFL Environmental gains on report two PE consortia have made offers", url: "https://seekingalpha.com/news/4649853-gfl-environmental-gains-on-report-two-pe-consortia-have-made-offers" },
        { title: "TTNews: GFL draws rival bids from investor groups", url: "https://www.ttnews.com/articles/gfl-rival-bids-investors" },
        { title: "Bloomberg: Paramount to Change Name to Skydance After Merger Is Complete", url: "https://www.bloomberg.com/news/articles/2026-10-02/paramount-to-change-name-to-skydance-after-merger-is-complete" },
        { title: "Variety: New Name of Paramount-Warner Bros. Unveiled – Skydance Corp.", url: "https://variety.com/2026/tv/news/name-of-paramount-warner-bros-unveiled-skydance-1236893761/" }
      ]
    },

    /* 13 PRIVATE CREDIT/PE */
    {
      id: "metrics-credit-partners-palmer-square-stack-04-10", cats: ["credit", "pe"], when: "Metrics-Fondssperren seit 30.09. · Fitch-Augustzahl 6,3 % · Goldman/Palmer-Square-Gespräche laufend",
      headline: "Australischer Credit-Manager Metrics sperrt Milliarden-Fonds, US-Ausfallrate bei Private Credit auf Rekordhoch",
      sec30: "Der australische Credit-Manager Metrics Credit Partners (rund 28 Mrd. australische Dollar verwaltetes Vermögen) setzte die Rücknahme bei zwei Großfonds mit zusammen mehr als 9 Mrd. australischen Dollar aus, nachdem Wirtschaftsprüfer KPMG die Jahresabschlüsse dreier börsennotierter Metrics-Fonds wegen Bewertungsfragen bei unlisteten Gewerbeimmobilien nicht testiert hatte; die Nettoinventarwerte wurden um bis zu 12,16 % nach unten korrigiert. Fitch bezifferte die US-Ausfallrate bei Private-Credit-Krediten für August 2026 auf einen Rekordwert von 6,3 % (Juli: 6,1 %). Parallel verhandelt Goldman Sachs weiter als führender Bieter über den CLO-Manager Palmer Square (rund 37 Mrd. Dollar verwaltetes Vermögen), und ein BlackRock/IFM-Konsortium bleibt in exklusiven Gesprächen über die asiatisch-pazifischen Rechenzentren von Stack Infrastructure (rund 20 bis 25 Mrd. Dollar).",
      blocks: [
        { h: "Was ist bei Metrics Credit Partners passiert?", items: [
          { tag: "fakt", text: "Wirtschaftsprüfer KPMG verweigerte zum Stichtag 30.09.2026 die Testierung der Jahresabschlüsse dreier börsennotierter Metrics-Fonds, weil er mit den Bewertungsannahmen für unlistete Gewerbeimmobilien-Investments nicht einverstanden war; die drei Fonds wurden daraufhin vom Handel ausgesetzt, die Nettoinventarwerte um zusammen rund 168 Mio. australische Dollar (1,99 bis 12,16 %) nach unten korrigiert.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "In der Folge setzte Metrics am 30.09.2026 auch Zeichnungen und Rücknahmen bei zwei großen unlisteten Fonds aus – dem MCP Wholesale Investments Trust (rund 6 Mrd. australische Dollar) und dem MCP Real Estate Debt Fund (rund 3,3 Mrd. australische Dollar) –, wodurch mehr als 9 Mrd. australische Dollar an Anlegergeld vorübergehend nicht verfügbar sind.",
            ask: [{ label: "Was passiert bei solchen Rücknahmesperren grundsätzlich?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Wie entwickeln sich die Ausfallraten bei Private Credit insgesamt?", items: [
          { tag: "fakt", text: "Fitch bezifferte die rollierende Zwölf-Monats-Ausfallrate bei US-Private-Credit-Krediten für August 2026 auf einen Rekordwert von 6,3 % (Juli: 6,1 %), bei 14 erfassten Ausfällen im Monat (Juli: 3). Gesundheitswesen, Industrie und verarbeitendes Gewerbe wiesen mit jeweils 9,9 % die höchsten Sektor-Ausfallraten auf.",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Wie ist der Stand bei Palmer Square und Stack Infrastructure?", items: [
          { tag: "unbestaetigt", text: "Goldman Sachs gilt weiterhin als führender Bieter für den CLO-Manager Palmer Square Capital Management (rund 37 Mrd. Dollar verwaltetes Vermögen, davon rund 27 Mrd. Dollar CLO-Plattform); eine endgültige Vereinbarung liegt laut Berichten weiterhin nicht vor, die Gespräche könnten auch ohne Abschluss enden." },
          { tag: "unbestaetigt", text: "Ein von BlackRock (über die AI-Infrastructure-Partnership mit Nvidia, Microsoft, xAI und MGX) und IFM Investors angeführtes Konsortium bleibt in exklusiven Gesprächen mit Blue Owl Capital über die asiatisch-pazifischen Rechenzentren von Stack Infrastructure, bewertet mit rund 20 bis 25 Mrd. Dollar; auch hier steht eine Einigung noch aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Metrics-Fondssperren und die gestiegene Fitch-Ausfallrate zeigen Belastungen im Private-Credit-Markt, während zugleich – bei Palmer Square und Stack Infrastructure – weiterhin milliardenschwere Übernahmegespräche laufen. Beides zusammen deutet auf einen Markt, der trotz einzelner Stressfälle weiterhin stark wächst." }
        ]}
      ],
      reaction: "Die Entwicklungen bei Metrics und die Fitch-Ausfallrate ergänzen die laufenden Übernahmegespräche bei Palmer Square und Stack Infrastructure (Meldung 12) um die Risikoseite desselben Marktes.",
      terms: ["nav", "default-rate", "bdc"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      widget: "sofr",
      deal: {
        value: "≈ 37 Mrd. $ verwaltetes Vermögen (davon ≈ 27 Mrd. $ CLO-Plattform); Kaufpreis nicht in den Quellen genannt",
        buyer: "Goldman Sachs",
        target: "Palmer Square Capital Management (CLO- und Credit-Manager)",
        sector: "Private Credit / CLO-Management",
        type: "Unternehmensübernahme (Gespräche laufen, keine Einigung)"
      },
      sources: [
        { title: "caproasia.com: Australia $28 Billion Asset Manager Metrics Credit Partners Suspends Redemption of Unlisted Funds", url: "https://www.caproasia.com/2026/10/03/australia-28-billion-asset-manager-metrics-credit-partners-suspends-redemption-of-unlisted-funds-that-invest-in-suspended-listed-funds-metrics-real-estate-multi-strategy-fund-metrics-income-opportu/" },
        { title: "thenightly.com.au: Metrics puts hold on funds after shock $170 million writedown and KPMG audit delay", url: "https://thenightly.com.au/business/metrics-puts-hold-on-funds-after-shock-170m-writedown-and-kpmg-audit-delay-c-22947651" },
        { title: "Bloomberg: US Private Credit Default Rate Hits a Record of 6.3%, Fitch Says", url: "https://www.bloomberg.com/news/articles/2026-09-14/us-private-credit-default-rate-hits-a-record-of-6-3-fitch-says" },
        { title: "The Daily Upside: Goldman Leads Bidding for $37 Billion Palmer Square, a CLO Powerhouse", url: "https://www.thedailyupside.com/finance/banking/goldman-sachs-in-talks-to-buy-clos-leader-palmer-square-for-37-billion/" },
        { title: "ksl.com/Bloomberg: BlackRock, IFM close in on $25 billion Stack data center deal", url: "https://www.ksl.com/article/51628006/blackrock-ifm-close-in-on-25-billion-stack-data-center-deal-bloomberg-news-reports" }
      ]
    },

    /* 14 TECH/KI */
    {
      id: "amd-intel-tsmc-terafab-ki-chips-04-10", cats: ["tech"], when: "AMD-Preisrunde ab Q4 2026 · Intel-Erhöhung angesetzt für 05.10. · Musk-Bestätigung 03.10.",
      headline: "Berichte über Preiserhöhungen bei AMD und Intel, Musk bestätigt Gespräche zwischen TSMC und seinem „Terafab”-Projekt",
      sec30: "AMD soll Partner laut Berichten über eine Preiserhöhung von rund 10 % für Grafikkarten, KI-Beschleuniger und Mainboard-Chipsätze ab dem vierten Quartal 2026 informiert haben, als Reaktion auf gestiegene TSMC-Waferpreise; eine offizielle AMD-Bestätigung dieser konkreten Preisrunde liegt nicht vor, unabhängig bestätigt sind lediglich kleinere Preisaufschläge bei einzelnen Radeon-Grafikkarten. Für Intel wird berichtet, man plane ab dem 05.10.2026 eine rund zehnprozentige Erhöhung bei PC-Prozessoren – ebenfalls ohne offizielle Bestätigung. Tesla-Chef Elon Musk bestätigte am 03.10.2026, dass Gespräche zwischen TSMC und seinem texanischen Chipfabrik-Projekt „Terafab” liefen, ohne Details zu Umfang oder Zeitplan zu nennen.",
      blocks: [
        { h: "Was wird zu Preiserhöhungen bei AMD und Intel berichtet?", items: [
          { tag: "unbestaetigt", text: "AMD soll Handelspartner darüber informiert haben, Grafikkarten, KI-Beschleuniger und Mainboard-Chipsätze ab dem vierten Quartal 2026 um rund 10 % teurer zu machen; als Grund werden gestiegene Waferpreise von TSMC genannt. Eine offizielle Bestätigung durch AMD selbst liegt nicht vor; unabhängig bestätigt ist lediglich ein kleinerer Preisaufschlag von 10 bis 20 Dollar bei einzelnen Radeon-RX-9000-Grafikkarten." },
          { tag: "unbestaetigt", text: "Für Intel kursieren Berichte über eine rund zehnprozentige Preiserhöhung bei PC-Prozessoren ab dem 05.10.2026 – nach Angaben der Berichte bereits die dritte Erhöhung in diesem Jahr. Eine offizielle Bestätigung durch Intel liegt ebenfalls nicht vor; Hinweise auf eine gesonderte Preiserhöhung bei KI-Chips von Intel wurden nicht gefunden." }
        ]},
        { h: "Was ist bei TSMC und „Terafab” neu?", items: [
          { tag: "fakt", text: "Elon Musk bestätigte am 03.10.2026 auf der Plattform X, dass Gespräche zwischen TSMC und seinem in Texas entstehenden Chipfabrik-Projekt „Terafab” (geplantes Investitionsvolumen rund 25 Mrd. Dollar, erste Phase rund 16,8 Mrd. Dollar) liefen: „Just discussions, but something may come of it.” TSMC selbst äußerte sich nicht öffentlich dazu; eine Investitionsentscheidung oder ein Zeitplan wurden nicht genannt.",
            ask: [{ label: "Wie hängt das mit KI-Investitionen insgesamt zusammen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Welche weiteren KI-Finanzierungsfragen werden diskutiert?", items: [
          { tag: "fakt", text: "Die Bank of England warnte Ende September 2026, das weltweite KI-bezogene Schuldenvolumen liege inzwischen bei rund 450 Mrd. Dollar – mehr als doppelt so viel wie im gesamten Jahr 2025 –, und dass die zunehmende Verschuldung von KI-Firmen zusammen mit intransparenten, sogenannten zirkulären Finanzierungsstrukturen zwischen Unternehmen wie Nvidia, OpenAI und Oracle Verluste im Abschwungfall verstärken könnte.",
            ask: [{ label: "Was ist mit „zirkulärer Finanzierung” gemeint?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere große Chip- und KI-Finanzierungsthemen gleichzeitig in der Schwebe sind – unbestätigte Preisrunden bei AMD und Intel, unverbindliche TSMC-Gespräche bei „Terafab” und eine Zentralbank-Warnung vor zirkulärer KI-Finanzierung –, zeigt, wie viel in diesem schnell wachsenden Markt derzeit noch nicht vertraglich oder offiziell abgesichert ist." }
        ]}
      ],
      reaction: "Die Diskussion um steigende Chip-Kosten und KI-Finanzierungsrisiken ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit- und PE-Themen eine Rolle spielen (Meldung 13).",
      terms: [],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "TweakTown: AMD reportedly plans a 10% price hike for chips starting in Q4 2026", url: "https://www.tweaktown.com/news/113605/amd-reportedly-plans-a-10-percent-price-hike-for-chips-starting-in-q4-2026/index.html" },
        { title: "borncity.com: Intel und AMD – Prozessoren und Chips könnten um rund 10 Prozent teurer werden", url: "https://borncity.com/news/intel-und-amd-prozessoren-und-chips-koennten-um-rund-10-prozent-teurer-werden/" },
        { title: "Tom's Hardware: Elon Musk confirms discussions with TSMC about Terafab chipmaking collaboration", url: "https://www.tomshardware.com/tech-industry/semiconductors/elon-musk-confirms-discussions-with-tsmc-about-terafab-chipmaking-collaboration-intel-is-the-only-other-named-partner-terafab-to-exclusively-supply-tesla-spacex-and-xai" },
        { title: "Yahoo Finance/Insurance Journal: Bank of England Sees Growing Risk That Dangers From AI and Debt Will Materialize", url: "https://www.insurancejournal.com/news/international/2026/09/30/887361.htm" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "gasspeicher-opec-brent-lng-04-10", cats: ["energy"], when: "Gasspeicher-Stand 02.10. (Reiche-Einordnung 04.10.) · OPEC+-Entscheidung 04.10. · Brent Fr/Sa 02./03.10.",
      headline: "Deutsche Gasspeicher nur zu 58 Prozent gefüllt, Ministerin Reiche sieht Versorgung trotzdem gesichert",
      sec30: "Die deutschen Gasspeicher waren am 02.10.2026 nur zu rund 58 % gefüllt (143,5 Terawattstunden) – deutlich weniger als die gut 76 % zum selben Zeitpunkt des Vorjahres. Bundeswirtschaftsministerin Katherina Reiche erklärte am 04.10.2026, die Versorgung sei auch in einem besonders kalten Winter gesichert; die Bundesnetzagentur stuft das Risiko einer Unterversorgung weiterhin als gering ein, verweist aber auf mögliche Engpässe von bis zu 9 Terawattstunden pro Monat im Februar/März 2027 in einem Extremwinter-Szenario. Brent-Rohöl notierte am Wochenende bei rund 102 Dollar je Barrel, nachdem OPEC+ am 04.10. die Förderquote für November unverändert gelassen hatte.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher waren laut Bundesnetzagentur am 02.10.2026 zu rund 58 % gefüllt (143,5 Terawattstunden) – gegenüber gut 76 % zum selben Zeitpunkt des Vorjahres.",
            ask: [{ label: "Welche Rolle spielen Gasspeicher für die Energieversorgung?", ref: "e:energy-germany" }] },
          { tag: "position", text: "Bundeswirtschaftsministerin Katherina Reiche erklärte am 04.10.2026, man könne auch in einem besonders kalten Winter von einer gesicherten Versorgung ausgehen, unter anderem wegen bestehender Speicherverpflichtungen und verfügbarer LNG-Kapazitäten." },
          { tag: "unbestaetigt", text: "Die Bundesnetzagentur stuft das Risiko einer Unterversorgung weiterhin als gering ein, verweist in Modellrechnungen aber auf mögliche Engpässe von bis zu 9 Terawattstunden pro Monat im Februar/März 2027 in einem Extremwinter-Szenario; der Speicherverband Ines warnt, der aktuelle Füllstand könnte in einem besonders kalten oder langen Winter nicht ausreichen." }
        ]},
        { h: "Was hat die OPEC+ heute entschieden, und wie reagiert der Ölpreis?", items: [
          { tag: "fakt", text: "OPEC+ einigte sich am 04.10.2026 darauf, die Förderquote für November unverändert zu lassen; die volle Ministerrunde zur Förderpolitik 2027 ist erst für den 29.11.2026 angesetzt.",
            ask: [{ label: "Wie ist der Gesamtkontext dazu?", ref: "s:8" }] },
          { tag: "unbestaetigt", text: "Brent-Rohöl notierte am Wochenende bei rund 102 Dollar je Barrel; eine einzelne, abweichende Quelle hatte für den 02.10. rund 99,7 Dollar genannt, was sich mit weiteren Quellen nicht erhärten ließ.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Welche weiteren deutschen Energiethemen gibt es?", items: [
          { tag: "fakt", text: "Das LNG-Terminal in Stade nimmt nach dem Anlegen der schwimmenden Anlage „Energos Force” am 17.09.2026 schrittweise den Betrieb auf; eine tatsächliche Gaseinspeisung ins Netz wird laut Berichten aber erst für November 2026 erwartet." },
          { tag: "fakt", text: "Die reduzierte Stromsteuer für Industrie und Landwirtschaft wird laut Reiche ein drittes Jahr in Höhe von 0,05 Cent pro Kilowattstunde fortgeführt; eine breite Strompreis-Entlastung für private Haushalte ist vor den 2030er-Jahren weiterhin nicht vorgesehen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der niedrigere Speicherstand bei gleichzeitig offiziell als „gesichert” bezeichneter Versorgung zeigt, dass Behörden und Speicherbranche die Risikolage unterschiedlich gewichten; die unveränderte OPEC+-Quote dämpft zusätzliche Preissprünge beim Öl, ohne die grundsätzliche geopolitische Risikoprämie zu beseitigen (Meldung 8)." }
        ]}
      ],
      reaction: "Die Gasspeicher-Lage und die unveränderte OPEC+-Förderquote hängen mit der allgemeinen, durch den Iran-Konflikt getriebenen Risikoprämie bei Energie zusammen (Meldung 8).",
      terms: ["opec-plus", "ttf", "lng"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation", "e:hormuz"],
      sources: [
        { title: "ms-aktuell.de: Gasspeicher nur zu 58 Prozent – Reiche gibt Entwarnung", url: "https://ms-aktuell.de/welt/gasspeicher-reiche-winter-04-10-2026/" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "Bloomberg: OPEC+ Set to Keep Quotas Steady in November, Delegates Say", url: "https://www.bloomberg.com/news/articles/2026-10-04/opec-has-deal-outline-for-steady-november-quotas-delegates-say" },
        { title: "CNBC: Oil jumps 4% on Strait of Hormuz tensions", url: "https://www.cnbc.com/2026/10/01/oil-prices-today-wti-brent.html" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX schloss am Freitag bei 25.231,20 Punkten (+1,2 %) und damit wieder über 25.000 Punkten; US-Indizes legten nach dem schwachen Jobbericht noch deutlicher zu." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Dass ein schwacher US-Arbeitsmarktbericht Aktien steigen ließ, erklären Beobachter mit der gesunkenen Wahrscheinlichkeit einer weiteren Fed-Zinserhöhung im Oktober." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite fiel nach dem schwachen Jobbericht vom 02.10. zunächst, erholte sich im Tagesverlauf aber wieder und schloss rund 5 Basispunkte höher bei etwa 5,28 %." },
    "yield-stocks": { tag: "fakt", story: 1, text: "Der anfängliche Rückgang der US-Rendite half US-Aktien am Freitag zu kräftigen Kursgewinnen, bevor die Rendite zum Handelsschluss wieder anzog." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold notierte zum Wochenende bei rund 4.140 Dollar je Feinunze (≈ −0,9 bis −1,0 %) und damit weiterhin deutlich unter dem 2026er-Rekordhoch." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin notierte am Sonntagmorgen bei rund 84.700 bis 84.900 Dollar, kaum verändert gegenüber dem Vortag." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "EUR/USD stieg nach dem schwachen US-Jobbericht auf rund 1,1252 bis 1,1256, nachdem der Kurs am Freitag noch bei rund 1,1243 bis 1,1247 gelegen hatte." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die Eurozone-Inflation lag im September laut Eurostat-Flash-Schätzung bei 3,8 % – mehr als der Marktkonsens von 3,6 % und der höchste Wert seit drei Jahren." },
    "inflation-expectations": { tag: "unbestaetigt", story: 2, text: "Terminmärkte sehen die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10. zwischen rund 77 und 84 %." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Während die Fed nach dem schwachen US-Jobbericht und trotz eigener Warnungen vor geopolitischen Preisrisiken eher zu einer Oktober-Pause tendiert, rückt bei der EZB nach der über dem Konsens liegenden Eurozone-Inflation ein Dezember-Zinsschritt stärker in den Fokus." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Terminmärkte sehen die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10.2026 zwischen rund 77 und 84 %." },
    "ecb-hike": { tag: "position", story: 4, text: "EZB-Präsidentin Lagarde warb am 28.09. vor dem EU-Parlament für eine maßvolle Reaktion auf die Inflation und verwies darauf, dass es bislang keine Belege für eine Lohn-Preis-Spirale gebe." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent-Rohöl notierte am Wochenende bei rund 102 Dollar je Barrel und gilt weiterhin als Belastungsfaktor für Sprit-, Heiz- und Transportkosten vor dem Winter." },
    "debt-brake": { tag: "fakt", story: 6, text: "Der Bundesrechnungshof warnte am 02.10., die Bundeszuschüsse zur Rentenversicherung könnten bis 2040 auf rund 36,7 % aller Steuereinnahmen steigen; die Bund-Rendite lag am 02.10. bei rund 3,46 %." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Haushaltsausschuss berät bis zur Bereinigungssitzung am 12.11.2026; die Schlussabstimmung ist für den 27.11.2026 angesetzt." },
    "rente-basics": { tag: "unbestaetigt", story: 6, text: "In der Koalition werden Modelle geprüft, die Schwelle für die abschlagsfreie Rente von 45 auf 46 oder 47 Beitragsjahre anzuheben; der Koalitionsausschuss am 07.10.2026 soll hierzu eine Linie finden." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "Linke, SPD und Grüne führten am 03.10. ein zweites Sondierungsgespräch ohne Einigung zu Antisemitismus-Vorwürfen; eine dritte Runde ist für den 07.10. vereinbart." },
    "coalition-majority": { tag: "fakt", story: 7, text: "Grüne und SPD machen eine klare Positionierung der Linken gegen Antisemitismus und organisierte Kriminalität weiterhin zur Vorbedingung für Koalitionsverhandlungen." },
    "hormuz": { tag: "fakt", story: 8, text: "Am 03.10. wurde rund vier Seemeilen östlich von Oman ein weiterer Tanker getroffen; Trumps Sicherheitsberater berieten am 02.10. auf Camp David über Iran und den Jemen-Konflikt." },
    "why-oil-up-geo": { tag: "position", story: 8, text: "Verteidigungsminister Hegseth bezeichnete die US-Marineblockade iranischer Häfen als „ironclad” und erklärte, Iran werde niemals eine Atomwaffe besitzen." },
    "defence-order": { tag: "fakt", story: 10, text: "Diehl Defence erhielt nach Billigung durch den Haushaltsausschuss vom 23.09. einen Auftrag zur Anpassung von IRIS-T SLM für die F125-Fregatten der Deutschen Marine." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Die Rheinmetall-Aktie notierte am 02.10. je nach Handelsplatz zwischen 956,90 und 962,30 Euro; CEO Papperger und ein Aufsichtsratsmitglied kauften zuletzt eigene Aktien. Die Renk-Aktie blieb nach einer JPMorgan-Kurszielsenkung unter Druck." },
    "nato-target": { tag: "fakt", story: 11, text: "Deutschland meldete Rekord-Verteidigungsausgaben von 124,7 Mrd. Euro (≈ 2,69 % des BIP); fünf andere NATO-Staaten erreichen bereits das 3,5-Prozent-Ziel. Der TKMS-Vorzugsbieter-Status für das kanadische U-Boot-Programm bleibt ohne neuen Stand." },
    "ma-steps": { tag: "fakt", story: 12, text: "Zwei Investorenkonsortien bieten um GFL Environmental (Unternehmenswert ≈ 28 Mrd. $); ein Sonderausschuss prüft die Angebote." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental konkurrieren zwei Konsortien bei einem geschätzten Unternehmenswert von rund 28 Mrd. Dollar; Finanzierung, Bewertung je Aktie und Zeitplan sind in den Quellen nicht genannt." },
    "deal-risks": { tag: "fakt", story: 12, text: "Der aus der Paramount-WBD-Fusion entstandene Konzern wechselt am 06.10.2026 formal zur „Skydance Corporation” und von der Nasdaq an die NYSE." },
    "private-credit-what": { tag: "unbestaetigt", story: 13, text: "Goldman Sachs gilt weiterhin als führender Bieter für den CLO-Manager Palmer Square (≈ 37 Mrd. $ verwaltetes Vermögen); eine endgültige Vereinbarung liegt nicht vor." },
    "pc-rates": { tag: "fakt", story: 13, text: "Die US-Ausfallrate im Private-Credit-Markt erreichte laut Fitch im August 2026 mit 6,3 % einen neuen Rekordwert." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Der australische Credit-Manager Metrics Credit Partners musste die Nettoinventarwerte mehrerer Fonds um bis zu 12,16 % nach unten korrigieren, nachdem KPMG die Jahresabschlüsse nicht testiert hatte." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Metrics Credit Partners setzte am 30.09. die Rücknahme bei zwei Großfonds mit zusammen mehr als 9 Mrd. australischen Dollar aus." },
    "ai-capex": { tag: "unbestaetigt", story: 14, text: "AMD und Intel sollen Preiserhöhungen von rund 10 % für Chips ab Q4 2026 bzw. 05.10.2026 planen; offizielle Bestätigungen fehlen bislang." },
    "custom-chips": { tag: "fakt", story: 14, text: "Elon Musk bestätigte am 03.10., dass Gespräche zwischen TSMC und seinem Chipfabrik-Projekt „Terafab” laufen, ohne Details zu Umfang oder Zeitplan zu nennen." },
    "circular-financing": { tag: "fakt", story: 14, text: "Die Bank of England warnte Ende September vor zirkulären Finanzierungsstrukturen zwischen KI-Firmen wie Nvidia, OpenAI und Oracle bei einem weltweiten KI-Schuldenvolumen von rund 450 Mrd. Dollar." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 02.10. bei rund 58 %; Ministerin Reiche bezeichnete die Versorgung am 04.10. trotzdem als gesichert, während die Bundesnetzagentur auf mögliche Engpässe in einem Extremwinter verweist." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ einigte sich am 04.10. darauf, die Förderquote für November unverändert zu lassen; die volle Ministerrunde zur Förderpolitik 2027 ist für den 29.11. angesetzt." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Wirtschaft", type: "Fakt", story: 2,
      q: "Was zeigte der offizielle US-Arbeitsmarktbericht für September, veröffentlicht am Freitag, 02.10.2026?",
      options: [
        "Ein Plus von rund 300.000 neuen Stellen, deutlich über der Erwartung",
        "Einen Verlust von Stellen und eine auf 6 % gesprungene Arbeitslosenquote",
        "Nur ein Plus von 29.000 Stellen – deutlich weniger als die erwarteten rund 84.000 bis 90.000 – bei einer auf 4,2 % gestiegenen Arbeitslosenquote",
        "Die Veröffentlichung wurde wegen eines Regierungsshutdowns komplett verschoben"
      ],
      answer: 2,
      explain: "Der Bericht fiel mit nur 29.000 neuen Stellen deutlich schwächer aus als die erwarteten rund 84.000 bis 90.000; die Arbeitslosenquote stieg auf 4,2 %, was die eingepreiste Wahrscheinlichkeit einer Fed-Zinspause im Oktober steigen ließ."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 4,
      q: "Auf welchen Wert stieg die Flash-Inflation der Eurozone für September 2026 laut Eurostat?",
      options: [
        "3,8 % – mehr als der Marktkonsens von 3,6 % und der höchste Wert seit drei Jahren",
        "1,2 %, den niedrigsten Stand seit Jahren",
        "Genau auf das EZB-Ziel von 2,0 %",
        "Die Zahl wurde wegen methodischer Probleme nicht veröffentlicht"
      ],
      answer: 0,
      explain: "Eurostat meldete am 02.10. eine Flash-Inflation von 3,8 % für September – über dem Marktkonsens von 3,6 % und dem höchsten Stand seit drei Jahren, getrieben vor allem von Energiepreisen."
    },
    {
      topic: "Deutschland", type: "Zusammenhang", story: 6,
      q: "Angenommen, Union und SPD einigen sich beim Koalitionsausschuss am 7.10. überraschend vollständig auf eine Anhebung der abschlagsfreien Rente auf 47 Beitragsjahre. Was würde unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Bundestagswahl müsste automatisch wiederholt werden",
        "Die Bund-Rendite würde dadurch automatisch auf 0 % fallen",
        "Der zentrale innenpolitische Streitpunkt bei der Rentenreform wäre vorerst geklärt, während Pflegereform und Haushalt 2027 ohnehin nach festem Zeitplan weiterlaufen",
        "Der Bundeshaushalt 2027 müsste komplett neu aufgestellt werden"
      ],
      answer: 2,
      explain: "Die Rentenreform ist der einzige der drei Themen (Rente, Pflege, Haushalt), bei dem laut Berichten noch keine Einigung vorliegt; Pflegereform und Haushalt folgen bereits einem festen parlamentarischen Zeitplan."
    },
    {
      topic: "International", type: "Fakt", story: 8,
      q: "Worauf einigte sich die OPEC+-Kerngruppe am Sonntag, 04.10.2026, laut Delegierten-Angaben?",
      options: [
        "Eine deutliche Erhöhung der Förderquote für November",
        "Die Förderquote für November unverändert zu lassen",
        "Eine vollständige Aussetzung der Ölförderung bis Jahresende",
        "Den sofortigen Austritt aus der OPEC+"
      ],
      answer: 1,
      explain: "Die Kerngruppe aus sieben OPEC+-Staaten einigte sich darauf, die Förderquote für November unverändert zu lassen; die volle Ministerrunde zur Förderpolitik 2027 ist erst für den 29.11.2026 angesetzt."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 15,
      q: "Die deutschen Gasspeicher lagen Anfang Oktober 2026 bei rund 58 Prozent statt den gut 76 Prozent des Vorjahres. Was folgt daraus am ehesten?",
      options: [
        "Dass Deutschland das Winter-Ziel damit bereits deutlich übertroffen hat",
        "Dass Ministerin Reiche und die Bundesnetzagentur die Versorgung trotz niedrigerem Füllstand als gesichert einschätzen, während der Speicherverband Ines vor einem besonders kalten Winter warnt",
        "Dass in Deutschland ab sofort kein Gas mehr verbraucht werden darf",
        "Dass der Füllstand automatisch zum neuen gesetzlichen Ziel wird"
      ],
      answer: 1,
      explain: "Ministerin Reiche und die Bundesnetzagentur bezeichnen die Versorgung trotz des niedrigeren Füllstands als gesichert, während der Speicherverband Ines einschränkt, dass der Stand in einem besonders kalten oder langen Winter knapp werden könnte."
    }
  ]
};
