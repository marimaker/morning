// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-25",
  dateLabel: "Freitag, 25. September 2026",
  updatedLabel: "Recherchestand 25.09.2026",
  marketNote: "Diese Ausgabe erscheint früh am Freitagmorgen, vor Öffnung der europäischen Börsen. Die europäischen und US-Zahlen zeigen daher den Handelsschluss vom Donnerstag, 24.09.2026 (Xetra 17:30 Uhr bzw. US-Handelsschluss). Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Donnerstag, US-Vormittag (Ostküstenzeit). Der Donnerstag war ein Tag mit ungewöhnlich vielen widersprüchlichen Quellenangaben: Zum DAX-Schlussstand kursierten mehrere abweichende Werte, beim Brent-Ölpreis schwankten Berichte wegen der Houthi-Angriffe auf Saudi-Arabien und der Hoffnung auf eine Hormus-Öffnung binnen Stunden zwischen rund 99 und 108 Dollar, und auch beim Goldpreis weichen Quellen leicht voneinander ab. Werte mit „≈” stammen aus Marktberichten und können je nach Quelle und Erhebungszeitpunkt abweichen.",

  top: [
    { text: "Die Rendite zehnjähriger US-Staatsanleihen sprang am Donnerstag auf den höchsten Stand seit 2007 (Berichte nennen Werte zwischen rund 5,13 % und 5,20 %). Auslöser waren laut Berichten überraschend starke Konjunkturdaten (US-Einkaufsmanagerindex auf Fünfjahreshoch, Erstanträge auf Arbeitslosenhilfe nahe historischem Tief) und Fed-Gouverneur Michael Barr, der am Mittwoch weitere „Politikanpassungen” zur Inflationsbekämpfung für nötig erklärte. DAX, Euro Stoxx 50, S&P 500 und Dow gaben nach, die Nasdaq verlor nach ihrem Rekordschluss vom Vortag ebenfalls.", ref: "s:2" },
    { text: "Am Rande der UN-Vollversammlung setzten Iran und die USA ihre Gespräche fort: US-Sondergesandter Witkoff und Jared Kushner verhandelten am 23.9. rund einen Tag über Vermittler mit Irans Außenminister Araghchi, Witkoff nannte die Runde „constructive and promising”. Zugleich hatte Präsident Trump vor der UN-Vollversammlung von der Wahl zwischen einem Abkommen oder der „Vernichtung” der Islamischen Republik gesprochen, Irans Präsident Pezeshkian wies dies zurück. Der Ölpreis schwankte am Donnerstag wegen Huthi-Raketenangriffen auf Saudi-Arabien und Berichten über mögliche Fortschritte bei der Straße von Hormus zwischen rund 99 und 108 Dollar je Barrel Brent.", ref: "s:8" },
    { text: "Chinas Staatschef Xi Jinping besuchte vom 23. bis 25.9. erstmals seit zehn Jahren wieder Washington. Konkretestes Ergebnis: Die USA verlängerten die Zoll-Waffenruhe mit China bis zum 10. Januar 2027. Bei Themen wie Taiwan, Halbleiter-Exportkontrollen und Künstlicher Intelligenz gab es laut Berichten keine neuen Vereinbarungen.", ref: "s:10" },
    { text: "In Berlin stimmt Die Linke heute (Freitag) auf einem Parteitag darüber ab, ob sie nach ihrem Wahlsieg (25,7 % der Stimmen) mit SPD und Grünen in Sondierungsgespräche für eine Landesregierung eintritt. Die Berliner SPD signalisierte am Donnerstag Gesprächsbereitschaft sowohl mit der Linken als auch mit der CDU. Parallel hält die Debatte um Kanzler Merz' Äußerung zu einem „Gerechtigkeitsproblem” zwischen gesetzlicher und privater Krankenversicherung an; die Unionsfraktion wies Berichte über einen geplanten Kurswechsel zurück.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 25.352", change: "≈ −0,2 %", dir: "down", asof: "Schluss Do 24.09.", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Widersprüchliche Angaben", text: "Zum exakten Donnerstagsschluss finden sich abweichende Werte: 25.352 Punkte (−0,2 %) in einer Quelle, 25.266,53 Punkte (−0,57 %) in einer anderen, und ein Zwischenstand von 25.410,64 Punkten (+0,13 %) zu einem früheren Zeitpunkt des Handelstags. Welcher Wert der endgültige Xetra-Schlusskurs ist, ließ sich aus den gesichteten Quellen nicht eindeutig klären." },
        { label: "MDAX", text: "Auch beim MDAX weichen Quellen voneinander ab: 30.995 Punkte (−0,7 %) bzw. 30.790,64 Punkte (−1,36 %) wurden berichtet. Schaeffler und Nordex gehörten laut Berichten zu den größten Verlierern." }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Donnerstag vor allem diese Faktoren:",
        items: [
          "Steigende Ölpreise belasteten den deutschen Aktienmarkt, nachdem Fortschritte bei den Iran-USA-Gesprächen zur Straße von Hormus ausblieben.",
          "Ein überraschend starker ifo-Geschäftsklimaindex hielt die Verluste in Grenzen und stützte zeitweise die Kurse.",
          "Steigende Anleiherenditen in den USA und Deutschland machten Aktien im Vergleich weniger attraktiv."
        ]
      },
      important: [
        { area: "Öl", text: "Steigende Ölpreise belasten energieintensive Firmen und die Stimmung.", ref: "e:oil-stocks" },
        { area: "Zinsen", text: "Die Anleiherenditen sprangen am Donnerstag auf mehrjährige Hochs.", ref: "s:2" },
        { area: "Konjunktur", text: "Der ifo-Index zeigt eine sich erholende deutsche Wirtschaft.", ref: "s:5" }
      ],
      source: { title: "onvista: Aktien Frankfurt – Dax sinkt leicht, starker Ifo-Index hält Verluste in Grenzen", url: "https://www.onvista.de/news/2026/09-24-aktien-frankfurt-dax-sinkt-leicht-starker-ifo-index-haelt-verluste-in-grenzen-0-10-26557162" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.274,46", change: "−0,40 %", dir: "down", asof: "Schluss Do 24.09.", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Ein Minus heißt: Diese Unternehmen wurden zusammen niedriger bewertet als am Vortag, mit teils großen Unterschieden zwischen einzelnen Aktien.",
      compare: [
        { label: "Gewinner", text: "Münchener Rück +1,99 %, Allianz +1,48 %, Eni +1,46 %, Siemens +0,31 %" },
        { label: "Verlierer", text: "Infineon −3,94 %, Rheinmetall −3,41 %, BMW −2,45 %" },
        { label: "Jahresverlauf", text: "Seit Jahresbeginn 2026 liegt der Index laut Bericht mit +7,25 % im Plus." }
      ],
      moved: {
        intro: "Berichte nennen für den Donnerstag vor allem:",
        items: [
          "Chipwerte wie Infineon gaben nach, während Rückversicherer und Versicherer (Münchener Rück, Allianz) zulegten.",
          "Autowerte wie BMW litten laut Berichten unter anhaltenden Marktanteilsverlusten in China.",
          "Rüstungswerte wie Rheinmetall setzten ihren Kursrückgang der Vortage fort (Meldung 11)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Steigende US- und Bund-Renditen wirken auch auf europäische Aktien.", ref: "e:yield-stocks" }
      ],
      source: { title: "finanzen.at: Euro Stoxx 50 aktuell – präsentiert sich schlussendlich schwächer", url: "https://www.finanzen.at/nachrichten/aktien/euro-stoxx-50-aktuell-euro-stoxx-50-prasentiert-sich-schlussendlich-schwacher-1036571695" }
    },
    "sp500": {
      label: "S&P 500", value: "7.706,05", change: "−0,8 %", dir: "down", asof: "Schluss Do 24.09.", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. Ein Minus von 0,8 % heißt: Diese Firmen wurden zusammen rund 0,8 % niedriger bewertet als am Vortag.",
      compare: [
        { label: "Dow Jones", text: "−0,7 % (−352,10 Punkte) auf 51.511,59" },
        { label: "Nasdaq", text: "−1,1 % auf 26.936,04 Punkte, nachdem sie am Mittwoch mit rund 27.122 Punkten einen Rekordschluss erreicht hatte." },
        { label: "Sektoren", text: "Versorger (Utilities) und zyklische Konsumwerte fielen laut Bericht am stärksten (Utilities Select Sector SPDR −1,9 %, Consumer Discretionary Select Sector SPDR −1,5 %)." }
      ],
      moved: {
        intro: "Berichte nennen für den Donnerstag:",
        items: [
          "Die Rendite zehnjähriger US-Anleihen sprang auf den höchsten Stand seit 2007, was Aktien belastete (Meldung 2).",
          "Steigende Ölpreise nach Huthi-Angriffen auf Saudi-Arabien verunsicherten zusätzlich.",
          "Kurse zogen sich zeitweise wieder etwas an, nachdem Reuters von möglichen Fortschritten bei Gesprächen zur Wiedereröffnung der Straße von Hormus berichtete."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen, besonders bei Wachstumsfirmen.", ref: "e:rates-stocks" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Thursday, September 24", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-september-24-dow-sp-500-nasdaq-080352893.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.936,04", change: "−1,1 %", dir: "down", asof: "Schluss Do 24.09.", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Nach dem Rekordschluss vom Mittwoch (rund 27.122 Punkte) gab sie am Donnerstag nach.",
      compare: [
        { label: "Mittwoch", text: "Rekordschluss bei rund 27.122 Punkten, getragen von der Rally rund um Metas KI-Agenten „Muse” (Meldung 14) und starken Chipwerten." },
        { label: "Philadelphia Semiconductor Index (SOX)", text: "Sprang am Mittwoch laut Bericht um 4,3 %, bevor der Sektor am Donnerstag mit dem Gesamtmarkt nachgab." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Die kräftig gestiegene US-Rendite (höchster Stand seit 2007) bremste besonders technologie- und wachstumslastige Aktien.",
          "Nach dem starken Lauf der Vortage kam es zu Gewinnmitnahmen, unter anderem bei Meta (Meldung 14)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq besonders empfindlich auf steigende Zinsen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "TheStreet: Stock market today – Dow, S&P 500, Nasdaq updates Sept. 24, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-24-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,138", change: "≈ −0,02 %", dir: "down", asof: "Do 24.09.", story: 2,
      means: "1 Euro kostet etwa 1,138 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Vortage", text: "Der Kurs bewegte sich die Woche über in einer engen Spanne um 1,137–1,145." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Steigende US-Zinserwartungen nach Fed-Gouverneur Barrs Aussagen stützten tendenziell den Dollar.",
          "Der Euro bewegte sich insgesamt nur wenig, während die Renditedifferenz zwischen den USA und dem Euroraum im Fokus stand."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Gouverneur Barr hält weitere Zinsschritte für wahrscheinlich nötig.", ref: "s:2" },
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,14 %", change: "kräftig gestiegen, höchster Stand seit 2007", dir: "up", asof: "Do 24.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Abweichende Angaben", text: "Berichte nennen für Donnerstag unterschiedliche Werte zwischen rund 5,13 % und 5,20 % – je nach Erhebungszeitpunkt. Übereinstimmend ist: Es ist der höchste Stand seit 2007." },
        { label: "2-Jahres-Rendite", text: "≈ 4,95 %, ebenfalls gestiegen." },
        { label: "Vorwoche", text: "Noch am Dienstag zuvor lag die Rendite bei rund 4,96 % – ein Anstieg von rund 0,15 bis 0,20 Prozentpunkten binnen weniger Tage." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Fed-Gouverneur Michael Barr sagte am Mittwoch, weitere „Politikanpassungen” seien voraussichtlich nötig, um die Inflation zeitnah auf 2 % zurückzuführen – Märkte werteten das als Signal für eine mögliche weitere Zinserhöhung im Oktober.",
          "Die Erstanträge auf Arbeitslosenhilfe fielen auf 197.000 (erwartet: 201.000) – einer der niedrigsten Stände seit 1969 und ein Zeichen für einen robusten Arbeitsmarkt.",
          "Der Flash-Einkaufsmanagerindex für die USA stieg auf 58,4 Punkte, den höchsten Stand seit über fünf Jahren (Meldung 4) – starke Konjunkturdaten nähren Zinserhöhungserwartungen."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren mit Aktien.", ref: "e:yield-stocks" },
        { area: "Unternehmensfinanzierung", text: "Kredite werden teurer, wenn der sichere Zins steigt.", ref: "e:fed-hike" },
        { area: "Private Credit", text: "Variable Zinsen steigen mit den Referenzzinsen.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Höhere US-Zinserwartungen können den Dollar stützen.", ref: "e:eurusd-meaning" },
        { area: "Gold", text: "Gold zahlt keinen Zins und konkurriert mit Anleihen.", ref: "e:gold-why" }
      ],
      source: { title: "CNBC: US Treasury yields, bonds, Fed, inflation", url: "https://www.cnbc.com/2026/09/24/us-treasury-yields-bonds-fed-inflation.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,61 %", change: "deutlich gestiegen (von ≈ 3,55 % am Vortag)", dir: "up", asof: "Do 24.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. Rund 3,6 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,6 % pro Jahr.",
      compare: [
        { label: "Abweichende Angaben", text: "Eine Quelle nennt für denselben Zeitraum stattdessen rund 3,475 % – möglicherweise ein anderer Erhebungszeitpunkt. Die Grundrichtung (steigend) ist in mehreren Quellen übereinstimmend." },
        { label: "Woche", text: "Deutlicher Anstieg gegenüber rund 3,44 % am Dienstag." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: ["Die Bund-Rendite zog im Sog der stark gestiegenen US-Rendite mit nach oben (Meldung 2)."]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen machen neue Schulden des Bundes teurer, relevant für den Haushalt 2027.", ref: "e:debt-brake" },
        { area: "Kredite", text: "Bauzinsen und Firmenkredite orientieren sich an Bund-Renditen.", ref: "e:yield-meaning" }
      ],
      source: { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.278 $", change: "≈ −0,2 bis −0,4 %", dir: "down", asof: "Do 24.09.", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.278 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Abweichende Angaben", text: "Quellen nennen für Donnerstag Werte zwischen rund 4.272 $ und 4.286 $ je nach Tageszeit und Handelsplatz – die Schwankungsbreite ist kleiner als am Dienstag zuvor, aber weiterhin vorhanden." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Der starke US-Flash-PMI (58,4 Punkte) und steigende Anleiherenditen belasteten Gold, weil zinslose Anlagen im Vergleich weniger attraktiv werden.",
          "Ein fester Dollar wirkte zusätzlich bremsend."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinserwartungen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Kitco News: Spot gold drops as flash S&P composite PMI improves to 58.4 in September", url: "https://www.kitco.com/news/article/2026-09-23/spot-gold-drops-4280oz-flash-sp-composite-pmi-improves-584-september" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 105 $", change: "stark schwankend, zeitweise +3 % bis +5 %", dir: "up", asof: "Do 24.09.", story: 8, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 105 Dollar je Fass (159 Liter) sind rund 66 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Ungewöhnlich große Schwankung", text: "Berichte nennen für Donnerstag sehr unterschiedliche Werte: ein Zwischenhoch von rund 108,23 $ nach Huthi-Raketen auf Saudi-Arabien, andere Quellen nennen rund 103–106,4 $ zum Handelsende, eine weitere Quelle sogar einen Einbruch auf 99,37 $ (−3,92 %). Die Bandbreite von rund 99 bis 108 $ an einem einzigen Handelstag ist ungewöhnlich groß und lässt sich nicht auf einen einzelnen Erhebungsfehler zurückführen – wahrscheinlicher ist, dass Meldungen zu Huthi-Angriffen und zu möglichen Hormus-Fortschritten den Kurs im Tagesverlauf mehrfach in unterschiedliche Richtungen bewegten." }
      ],
      moved: {
        intro: "Berichte nennen für den Donnerstag:",
        items: [
          "Iran-nahe Huthi-Rebellen im Jemen feuerten laut Berichten erneut Raketen auf saudische Städte ab, was den Preis zeitweise stark nach oben trieb.",
          "Reuters berichtete von möglichen Fortschritten bei Gesprächen zwischen Iran und den USA über eine gestaffelte Wiedereröffnung der Straße von Hormus, was Preise zeitweise wieder drückte.",
          "Nur drei Frachtschiffe passierten die Straße von Hormus am Mittwoch – rund 80 % unter dem 10-Tage-Durchschnitt, laut Berichten ein Zeichen für die angespannte Lage."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport – höhere Preise wirken das direkt.", ref: "e:oil-inflation" },
        { area: "Aktien", text: "Ölkonzerne verdienen mehr, energieintensive Firmen werden belastet.", ref: "e:oil-stocks" },
        { area: "Deutschland", text: "Ein höherer Ölpreis kann Energieimporte verteuern.", ref: "e:energy-germany" }
      ],
      source: { title: "Bloomberg: Latest Oil Market News and Analysis for Sept. 24", url: "https://www.bloomberg.com/news/articles/2026-09-23/latest-oil-market-news-and-analysis-for-sept-24" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 83.900 $", change: "≈ −1 bis −2,5 %", dir: "down", asof: "Do 24.09., Vormittag ET", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 83.900 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf", text: "Eröffnung bei rund 84.370 $, danach Rückgang auf rund 83.462 $ (7:33 Uhr ET), später wieder rund 83.943 $ (10 Uhr ET) – Angaben schwanken je nach Zeitpunkt und Handelsplatz." },
        { label: "September-Höchststand", text: "Am Dienstag zuvor hatte Bitcoin noch ein Tageshoch von 87.281 $ erreicht, den höchsten Stand seit Ende Januar 2026 (siehe Vortagesausgabe)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die wachsende Erwartung einer weiteren Fed-Zinserhöhung im Oktober belastete Bitcoin wie andere risikobehaftete Anlagen.",
          "Nach der starken Rally der Vorwoche kam es zu Gewinnmitnahmen."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin, Sept. 24, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-24-2026/" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 DONNERSTAG-MARKTBERICHT */
    {
      id: "donnerstag-maerkte", cats: ["markets"], when: "Do 24.09. Handelsschluss · Fr 25.09. Ausblick",
      headline: "DAX und Wall Street geben nach, Rüstungs- und Chipwerte unter Druck, Nasdaq nach Rekord im Rückwärtsgang",
      sec30: "Der DAX gab am Donnerstag leicht bis deutlich nach (Berichte nennen zwischen −0,2 % und −0,57 %), der Euro Stoxx 50 verlor 0,40 %. In den USA fielen S&P 500 (−0,8 %), Dow (−0,7 %) und Nasdaq (−1,1 %) nach dem Nasdaq-Rekordschluss vom Vortag. Hauptbelastung waren stark gestiegene Anleiherenditen und schwankende Ölpreise; ein überraschend starker ifo-Index dämpfte die Verluste in Deutschland.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "unbestaetigt", text: "Zum exakten DAX-Schlussstand nennen Quellen unterschiedliche Werte zwischen 25.266,53 (−0,57 %) und 25.352 Punkten (−0,2 %). Übereinstimmend ist die Richtung: leicht abwärts.",
            ask: [{ label: "Was bedeutet ein Minus beim DAX?", ref: "n:dax" }, { label: "Was ist der Euro Stoxx 50?", ref: "n:eurostoxx50" }] },
          { tag: "fakt", text: "In den USA schloss der S&P 500 bei 7.706,05 Punkten (−0,8 %), der Dow bei 51.511,59 Punkten (−0,7 % bzw. −352,10 Punkte), die Nasdaq bei 26.936,04 Punkten (−1,1 %) – nach ihrem Rekordschluss von rund 27.122 Punkten am Mittwoch.",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Was trieb die Kurse einzelner Aktien?", items: [
          { tag: "fakt", text: "Im Euro Stoxx 50 gewannen Münchener Rück (+1,99 %), Allianz (+1,48 %) und Siemens (+0,31 %), während Infineon (−3,94 %), Rheinmetall (−3,41 %) und BMW (−2,45 %) nachgaben." },
          { tag: "position", text: "Berichte nennen für Rüstungswerte einen eigenen Belastungsfaktor: Unsicherheit über die geopolitische Lage und hohe Ölpreise belasteten den Gesamtmarkt, dazu kommt laut einem Analysten Umschichtung innerhalb der europäischen Rüstungsbranche (Meldung 11).",
            ask: [{ label: "Warum fallen Rüstungsaktien trotz neuer Aufträge?", ref: "s:11" }] }
        ]},
        { h: "Was bewegte den DAX?", items: [
          { tag: "position", text: "Marktbeobachter nennen steigende Ölpreise als Belastungsfaktor, nachdem Fortschritte bei den Iran-USA-Gesprächen zur Straße von Hormus ausblieben. Ein überraschend starker ifo-Geschäftsklimaindex hielt die Verluste jedoch in Grenzen.",
            ask: [{ label: "Was zeigt der ifo-Index?", ref: "s:5" }, { label: "Warum schwankte der Ölpreis so stark?", ref: "n:brent" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag mit widersprüchlichen Schlusskursangaben zeigt, wie unterschiedlich Datenanbieter runden und erheben können. Für die langfristige Entwicklung ist das meist nicht entscheidend. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die stark gestiegenen Anleiherenditen (Meldung 2) gelten laut Berichten als Hauptbelastung für Aktien weltweit.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:yield-stocks", "e:oil-stocks", "e:rates-stocks"],
      sources: [
        { title: "onvista: Aktien Frankfurt – Dax sinkt leicht, starker Ifo-Index hält Verluste in Grenzen", url: "https://www.onvista.de/news/2026/09-24-aktien-frankfurt-dax-sinkt-leicht-starker-ifo-index-haelt-verluste-in-grenzen-0-10-26557162" },
        { title: "finanzen.at: Euro Stoxx 50 aktuell – präsentiert sich schlussendlich schwächer", url: "https://www.finanzen.at/nachrichten/aktien/euro-stoxx-50-aktuell-euro-stoxx-50-prasentiert-sich-schlussendlich-schwacher-1036571695" },
        { title: "Yahoo Finance: Stock market today – Thursday, September 24", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-september-24-dow-sp-500-nasdaq-080352893.html" },
        { title: "Vantage Markets: Dow Jones Drops 352 Points After 19-Year-High Yields", url: "https://www.vantagemarkets.com/market-analysis/dow-jones-today-dj30-yields-2007-high-september-24-2026/" }
      ]
    },

    /* 2 US-RENDITEN */
    {
      id: "renditen-2007-hoch", cats: ["markets", "economy"], when: "Mi 23.–Do 24.09.2026 · Fed-Rede und Konjunkturdaten",
      headline: "US-Rendite auf höchstem Stand seit 2007, Fed-Gouverneur Barr signalisiert weitere Zinsschritte",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen sprang am Donnerstag auf den höchsten Stand seit 2007 (Berichte: rund 5,13–5,20 %). Fed-Gouverneur Michael Barr hatte am Mittwoch gesagt, weitere „Politikanpassungen” seien wahrscheinlich nötig, um die Inflation zeitnah auf 2 % zu senken. Dazu kamen überraschend starke Konjunkturdaten: Erstanträge auf Arbeitslosenhilfe fielen auf 197.000, der Flash-Einkaufsmanagerindex für die USA stieg auf 58,4 Punkte. Auch die deutsche Bund-Rendite zog auf rund 3,61 % an.",
      blocks: [
        { h: "Was hat Fed-Gouverneur Barr gesagt?", items: [
          { tag: "position", text: "Michael Barr sagte am Mittwoch bei einem Auftritt der Federal Reserve Bank of Chicago laut Bericht: „In my base case, further policy adjustments are likely to be needed to ensure inflation comes down to target in a timely fashion.” Er verwies darauf, dass die Risiken für das Inflationsziel gestiegen, die Risiken für den Arbeitsmarkt dagegen gesunken seien.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }, { label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was zeigten die Konjunkturdaten?", items: [
          { tag: "fakt", text: "Die Erstanträge auf US-Arbeitslosenhilfe fielen auf 197.000 (erwartet: 201.000) – einer der niedrigsten Stände seit 1969.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "fakt", text: "Der Flash-Einkaufsmanagerindex (Composite-PMI) für die USA stieg im September auf 58,4 Punkte, von 56,0 im August – der höchste Stand seit über fünf Jahren, deutlich über den Erwartungen von Ökonomen (rund 55,2).",
            ask: [{ label: "Was zeigt der deutsche Flash-PMI?", ref: "s:4" }] }
        ]},
        { h: "Was zeigen die Anleihemärkte?", items: [
          { tag: "unbestaetigt", text: "Zur exakten US-10-Jahres-Rendite am Donnerstag nennen Quellen unterschiedliche Werte zwischen rund 5,13 % und 5,20 % – übereinstimmend ist, dass es der höchste Stand seit 2007 war.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Die deutsche 10-Jahres-Bundrendite zog im Sog der US-Rendite auf rund 3,61 % an, deutlich höher als noch am Dienstag (≈ 3,44 %).",
            ask: [{ label: "Was bedeutet das für den Bundeshaushalt?", ref: "e:debt-brake" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Starke Konjunkturdaten sind grundsätzlich eine gute Nachricht für die Wirtschaft, erhöhen aber laut Markteinschätzung auch das Risiko weiterer Zinsschritte – und damit die Belastung für Aktien und Kreditmärkte.",
            ask: [{ label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Wie wirken Zinsen auf Kreditmärkte?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX, Euro Stoxx 50, S&P 500 und Dow gaben am Donnerstag nach, die Nasdaq verlor nach ihrem Rekordschluss vom Vortag ebenfalls (Meldung 1).",
      terms: ["leitzins", "basispunkt", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:eurusd-meaning"],
      sources: [
        { title: "CNBC: US Treasury yields, bonds, Fed, inflation", url: "https://www.cnbc.com/2026/09/24/us-treasury-yields-bonds-fed-inflation.html" },
        { title: "Bloomberg: US Jobless Claims Slip to 197,000, Hold Close to Historic Lows", url: "https://www.bloomberg.com/news/articles/2026-09-24/us-jobless-claims-slip-to-197-000-hold-close-to-historic-lows" },
        { title: "American Banker: Fed's Barr – 'further policy adjustments are likely'", url: "https://www.americanbanker.com/news/feds-barr-further-policy-adjustments-are-likely" },
        { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
      ]
    },

    /* 3 GOLD / BITCOIN */
    {
      id: "gold-bitcoin-donnerstag", cats: ["markets"], when: "Do 24.09. Gold und Bitcoin",
      headline: "Gold gibt nach starken Konjunkturdaten leicht nach, Bitcoin fällt von September-Höchstständen zurück",
      sec30: "Gold bewegte sich am Donnerstag zwischen rund 4.272 und 4.286 Dollar je Feinunze, leicht niedriger als am Vortag – belastet vom starken US-Flash-PMI und der steigenden US-Rendite. Bitcoin fiel von seinem Dienstags-Hoch (87.281 $) auf rund 83.900 Dollar zurück, belastet von der wachsenden Erwartung einer weiteren Fed-Zinserhöhung.",
      blocks: [
        { h: "Gold: Leichter Rückgang", items: [
          { tag: "unbestaetigt", text: "Für den Goldpreis am Donnerstag nennen Quellen Werte zwischen rund 4.272 $ und 4.286 $ je nach Tageszeit und Handelsplatz.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "position", text: "Als Belastungsfaktor nennen Berichte den überraschend starken US-Einkaufsmanagerindex und die stark gestiegene US-Rendite, die zinslose Anlagen wie Gold im Vergleich weniger attraktiv machen." }
        ]},
        { h: "Bitcoin: Rückgang von September-Höchstständen", items: [
          { tag: "fakt", text: "Bitcoin eröffnete den Donnerstag bei rund 84.370 $, fiel im Verlauf des Vormittags (US-Ostküstenzeit) auf rund 83.462 $ und pendelte anschließend um rund 83.900 $ – deutlich unter dem Dienstags-Hoch von 87.281 $.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "position", text: "Berichte nennen die wachsende Erwartung einer weiteren Fed-Zinserhöhung im Oktober als Belastungsfaktor für risikobehaftete Anlagen wie Bitcoin." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Sowohl Gold als auch Bitcoin reagierten am Donnerstag auf dasselbe Grundmuster: steigende Zinsen und Zinserwartungen machen zinslose bzw. spekulative Anlagen im Vergleich weniger attraktiv. Gold verlor dabei deutlich weniger als Bitcoin, was zur unterschiedlichen Rolle beider Anlagen passt – Gold gilt traditionell als defensiver, Bitcoin als spekulativer." }
        ]}
      ],
      reaction: "Die US-Rendite sprang am Donnerstag auf den höchsten Stand seit 2007, was tendenziell sowohl Gold als auch Bitcoin belastet (Meldung 2).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what"],
      sources: [
        { title: "Kitco News: Spot gold drops as flash S&P composite PMI improves to 58.4 in September", url: "https://www.kitco.com/news/article/2026-09-23/spot-gold-drops-4280oz-flash-sp-composite-pmi-improves-584-september" },
        { title: "Fortune: Current price of Bitcoin, Sept. 24, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-24-2026/" },
        { title: "Bitcoin.com News: Bitcoin price retreats from September highs", url: "https://news.bitcoin.com/market-updates/bitcoin-price-retreats-from-september-highs-with-82-8k-in-the-crosshairs/" }
      ]
    },

    /* 4 FLASH-PMI */
    {
      id: "flash-pmi-september", cats: ["economy"], when: "Flash-PMI veröffentlicht 23.09.2026",
      headline: "Flash-Einkaufsmanagerindizes zeigen überraschend starkes Wachstum in Eurozone und USA",
      sec30: "Der Flash-Einkaufsmanagerindex (Composite) für die Eurozone stieg im September überraschend auf 53,1 Punkte – den höchsten Stand seit April 2023 und deutlich über der Erwartung eines Rückgangs auf 51,7. In den USA sprang der Composite-PMI auf 58,4 Punkte, den höchsten Stand seit über fünf Jahren. Beide Werte deuten auf beschleunigtes Wachstum hin, nähren aber auch die Erwartung weiterer Zinsschritte.",
      blocks: [
        { h: "Was zeigt der Flash-PMI für die Eurozone?", items: [
          { tag: "fakt", text: "Der Composite-PMI für die Eurozone stieg von 52,0 im August auf 53,1 im September – der höchste Stand seit April 2023. Der Dienstleistungs-PMI legte auf 53,0 zu (August: 51,6). Neuaufträge wuchsen laut Bericht so schnell wie seit über vier Jahren nicht, gestützt auch von Exporten.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] }
        ]},
        { h: "Was zeigt der Flash-PMI für die USA?", items: [
          { tag: "fakt", text: "Der US-Composite-PMI stieg von 56,0 im August auf 58,4 im September, deutlich über der Erwartung von rund 55,2 – der höchste Stand seit über fünf Jahren. Sowohl der Dienstleistungssektor als auch die Industrie trugen laut Bericht zum Wachstum bei.",
            ask: [{ label: "Was bedeutet das für die US-Rendite?", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Starke Einkaufsmanagerindizes gelten grundsätzlich als positives Konjunktursignal. Sie nähren aber zugleich die Erwartung, dass Zentralbanken die Zinsen eher weiter erhöhen als senken, weil eine robuste Wirtschaft auch mehr Inflationsdruck erzeugen kann. Das erklärt teilweise, warum die US-Rendite am selben Tag auf ein mehrjähriges Hoch sprang.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }, { label: "Was zeigt der deutsche ifo-Index?", ref: "s:5" }] }
        ]}
      ],
      reaction: "Die überraschend starken PMI-Daten gehören laut Berichten zu den Faktoren, die am Donnerstag zum Sprung der US-Rendite auf den höchsten Stand seit 2007 beitrugen (Meldung 2).",
      terms: ["kerninflation"],
      followups: ["e:inflation-what", "e:central-banks-why", "e:rates-stocks"],
      sources: [
        { title: "S&P Global: Eurozone Composite PMI Output", url: "https://www.pmi.spglobal.com/Public/Home/PressRelease/ab6649de01fd4c38a7f2c9a3e52a81bf" },
        { title: "FXStreet: US S&P Global Composite PMI came in at 58.4 in September", url: "https://www.fxstreet.com/news/sp-global-pmis-expected-to-show-resilient-us-economic-growth-in-september-202609230845" },
        { title: "FXStreet: Eurozone flash Manufacturing PMI remains steady at 52.7 in September", url: "https://www.fxstreet.com/news/eurozone-flash-manufacturing-pmi-remains-steady-at-527-in-september-202609230804" }
      ]
    },

    /* 5 IFO / GEMEINSCHAFTSDIAGNOSE */
    {
      id: "ifo-gemeinschaftsdiagnose", cats: ["economy", "germany"], when: "ifo-Index veröffentlicht 24.09. · Gemeinschaftsdiagnose 23.09.",
      headline: "ifo-Geschäftsklima steigt fünften Monat in Folge, Wirtschaftsinstitute verdoppeln Wachstumsprognose für 2026",
      sec30: "Der ifo-Geschäftsklimaindex stieg im September auf 89,9 Punkte (August: 88,8) – der fünfte Anstieg in Folge und der höchste Stand seit Mai 2023. Einen Tag zuvor hatten die führenden Wirtschaftsforschungsinstitute in ihrer Gemeinschaftsdiagnose die Wachstumsprognose für Deutschland 2026 von 0,6 % auf 1,3 % verdoppelt, für 2027 aber nur noch 1,1 % und für 2028 0,4 % Wachstum erwartet.",
      blocks: [
        { h: "Was zeigt der ifo-Index?", items: [
          { tag: "fakt", text: "Der ifo-Geschäftsklimaindex stieg im September auf 89,9 Punkte, nach 88,8 im August – der fünfte Anstieg in Folge und der beste Wert seit Mai 2023. Die Erwartungskomponente legte auf 90,4 Punkte zu (August: 89,1), die Einschätzung der aktuellen Lage auf 89,5 Punkte (August: 88,5).",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "position", text: "ifo-Präsident Clemens Fuest sagte laut Bericht sinngemäß, die deutsche Wirtschaft setze ihren Erholungskurs fort. Der stellvertretende Leiter des ifo Zentrums für Konjunkturforschung, Timo Wollmershäuser, verwies zugleich auf Risiken: Eine Eskalation im Nahen Osten könnte die globalen Energiepreise weiter treiben und damit Lieferengpässe und Inflationsdruck erhöhen." }
        ]},
        { h: "Was sagt die Gemeinschaftsdiagnose der Wirtschaftsinstitute?", items: [
          { tag: "fakt", text: "Die Gemeinschaftsdiagnose der führenden Wirtschaftsforschungsinstitute (vorgestellt am 23.09. auf der Bundespressekonferenz, federführend IWH Halle) hob die Wachstumsprognose für Deutschland 2026 von 0,6 % (Frühjahrsprognose) auf 1,3 % an. Für 2027 werden 1,1 % erwartet, für 2028 nur noch 0,4 %.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] },
          { tag: "fakt", text: "Die Institute erwarten eine Inflationsrate von 2,8 % (2026) und 3,2 % (2027), eine Arbeitslosenquote von 6,4 % (2026) sinkend auf 5,8 % (2028) sowie ein steigendes gesamtstaatliches Finanzierungsdefizit von 4,1 % (2026) auf 4,7 % (2028) des BIP." },
          { tag: "einordnung", text: "Die Institute beschreiben den Aufschwung laut Berichten als „auf schmalem Fundament” stehend – strukturelle Schwächen und steigende Staatsdefizite begrenzten den Erholungskurs." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Beide Indikatoren – ifo-Index und Gemeinschaftsdiagnose – zeichnen für Deutschland ein vorsichtig optimistischeres Bild als noch im Frühjahr, warnen aber übereinstimmend vor Risiken durch Energiepreise und strukturelle Probleme. Das passt zum gleichzeitigen Anstieg der Ölpreise durch die Nahost-Lage (Meldung 8).",
            ask: [{ label: "Wie hängt Öl mit Inflation zusammen?", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Der starke ifo-Index dämpfte am Donnerstag die DAX-Verluste, die durch steigende Ölpreise und Anleiherenditen ausgelöst wurden (Meldung 1).",
      terms: ["kerninflation", "inflation"],
      followups: ["e:inflation-what", "e:central-banks-why", "e:oil-inflation"],
      sources: [
        { title: "ifo Institute: ifo Business Climate Rises (September 2026)", url: "https://www.ifo.de/en/facts/2026-09-24/ifo-business-climate-rises-september-2026" },
        { title: "onvista: ROUNDUP – Ifo-Geschäftsklima steigt weiter, Wirtschaft bleibt auf Erholungskurs", url: "https://www.onvista.de/news/2026/09-24-roundup-ifo-geschaeftsklima-steigt-weiter-wirtschaft-bleibt-auf-erholungskurs-0-10-26557026" },
        { title: "ad-hoc-news: Institute rechnen 2026 mit deutlich stärkerem Wachstum – Gemeinschaftsdiagnose", url: "https://www.ad-hoc-news.de/wirtschaft/die-institute-rechnen-2026-mit-einem-deutlich-staerkeren-wachstum-als-noch/70175962" },
        { title: "epochtimes: Aufschwung 'auf schmalem Fundament' – Institute sehen Wachstum bei 1,3 Prozent", url: "https://www.epochtimes.de/politik/deutschland/aufschwung-auf-schmalem-fundament-wirtschaftsinstitute-sehen-wachstum-bei-13-prozent-a5618572.html" }
      ]
    },

    /* 6 BUNDESHAUSHALT 2027 */
    {
      id: "bundeshaushalt-2027", cats: ["germany"], when: "Haushaltsausschuss-Beratungen seit 23.09. · Bereinigungssitzung 12.11. · Schlussabstimmung 27.11.",
      headline: "Bundestag berät Haushalt 2027 mit 555,4 Mrd. Euro Ausgaben und rund 200 Mrd. Euro neuer Kreditaufnahme",
      sec30: "Der Haushaltsausschuss des Bundestags hat am 23.09. mit den Einzelplan-Beratungen zum Etat 2027 begonnen, am 24.09. stand das Kanzleramt auf der Tagesordnung. Der Entwurf sieht Gesamtausgaben von 555,4 Mrd. Euro vor (+6 % gegenüber 2026), bei einer Neuverschuldung im Kernhaushalt von 118 Mrd. Euro und insgesamt rund 200 Mrd. Euro Kreditaufnahme einschließlich Sondervermögen. Die abschließende Bundestagsabstimmung ist für den 27.11. angesetzt.",
      blocks: [
        { h: "Was ist im Entwurf vorgesehen?", items: [
          { tag: "fakt", text: "Der Haushaltsentwurf 2027 sieht Gesamtausgaben von 555,4 Mrd. Euro vor, 6 % mehr als 2026. Größter Einzeletat ist Arbeit und Soziales mit 201,46 Mrd. Euro, vor allem für die gesetzliche Rente. Der Verteidigungsetat soll um 33 % auf 109,75 Mrd. Euro steigen.",
            ask: [{ label: "Wie entsteht der Bundeshaushalt?", ref: "e:haushalt-basics" }, { label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] },
          { tag: "fakt", text: "Die geplante Neuverschuldung im Kernhaushalt liegt bei 118 Mrd. Euro, zusammen mit Sondervermögen bei rund 200 Mrd. Euro. Die Zinsbelastung für 2027 wird auf 41 Mrd. Euro geschätzt, mit einem Anstieg auf rund 80 Mrd. Euro bis 2030." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss begann die Einzelplan-Beratungen am 23.09. mit den Etats der Verfassungsorgane, am 24.09. mit Einzelplan 04 (Bundeskanzler und Bundeskanzleramt). Insgesamt sind zehn Sitzungen bis Anfang November vorgesehen, die Bereinigungssitzung ist für den 12.11. angesetzt, die abschließende Lesung für 24.–27.11. mit namentlicher Schlussabstimmung am 27.11." }
        ]},
        { h: "Wer unterstützt den Entwurf, wer kritisiert ihn?", items: [
          { tag: "position", text: "Finanzminister Lars Klingbeil (SPD) bezeichnete die frühere Politik ausgeglichener Haushalte in der Generaldebatte laut Bericht als „Fetisch” und sagte, man hole „nach, was andere verschlafen haben”; Investitionen seien „Fundament für Wachstum und Beschäftigung”." },
          { tag: "position", text: "CDU/CSU-Haushaltspolitiker Mathias Middelberg forderte laut Bericht langfristige Einsparungen, unter anderem jährlich zwei Prozent weniger Personalkosten. Die AfD (Michael Espendiller) warnte vor „Haushaltstricks”. Die Linke (Dietmar Bartsch) sagte, wer Reichtum nicht antaste, könne Arbeit nicht entlasten. Die Grünen (Sebastian Schäfer, Katharina Dröge) kritisierten den Entwurf laut Bericht als „notdürftig zusammengeflicktes Zahlenwerk” und warfen der Regierung vor, mit Umbuchungen aus dem Klimafonds die Haushaltslücke zu schließen." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Die steigende Zinsbelastung hängt eng mit den zuletzt gestiegenen Anleiherenditen zusammen (Meldung 2): Höhere Renditen verteuern neue Staatsschulden zusätzlich zu den bereits eingeplanten Summen.",
            ask: [{ label: "Was bedeutet die Schuldenbremse?", ref: "e:debt-brake" }, { label: "Wie wirken höhere Bund-Renditen?", ref: "n:bund10" }] }
        ]}
      ],
      reaction: "Am Freitag stimmt zudem der Bundesrat über zahlreiche vom Bundestag beschlossene Gesetze ab, unter anderem zur BAföG-Reform und zur Wohngeld-Anpassung.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:nato-target"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "Deutscher Bundestag: Haushaltsausschuss", url: "https://www.bundestag.de/ausschuesse/a08_haushalt" },
        { title: "ZDFheute: Haushaltsentwurf 2027 – Bundestag, Klingbeil, Kritik der Opposition", url: "https://www.zdfheute.de/politik/deutschland/haushaltsentwurf-2027-bundestag-klingbeil-kritik-opposition-100.html" },
        { title: "Bundesrat Kompakt: Sitzung 1068 am 25.09.2026", url: "https://www.bundesrat.de/DE/plenum/bundesrat-kompakt/bundesrat-kompakt-node.html" }
      ]
    },

    /* 7 BERLIN-KOALITION + CDU-DEBATTE */
    {
      id: "berlin-koalition-cdu-debatte", cats: ["germany"], when: "Parteitag Die Linke Fr 25.09. · CDU-Debatte seit 21.09.",
      headline: "Berliner Linke entscheidet heute über Sondierungsgespräche, Unionsfraktion weist Kurswechsel-Berichte bei Krankenversicherung zurück",
      sec30: "Die Berliner Linke, mit 25,7 % stärkste Kraft bei der Abgeordnetenhauswahl, entscheidet heute (Freitag) auf einem Parteitag, ob sie SPD und Grüne zu Sondierungsgesprächen für eine Landesregierung einlädt. Die Berliner SPD zeigte sich am Donnerstag gesprächsbereit sowohl mit der Linken als auch mit der CDU. Auf Bundesebene hält die Debatte um Kanzler Merz' Aussage zu einem „Gerechtigkeitsproblem” zwischen gesetzlicher und privater Krankenversicherung an; die Unionsfraktion wies Berichte über einen geplanten Kurswechsel zurück.",
      blocks: [
        { h: "Was wurde beschlossen bzw. steht zur Entscheidung?", items: [
          { tag: "fakt", text: "Bei der Berliner Abgeordnetenhauswahl wurde Die Linke mit 25,7 % stärkste Kraft, vor CDU (18,8 %), AfD (16,3 %), Grünen (14,3 %) und SPD (12,1 %). Auf dem heutigen Parteitag stimmt Die Linke darüber ab, ob sie SPD und Grüne zu Sondierungsgesprächen für eine Landesregierung einlädt.",
            ask: [{ label: "Warum sind Landtagswahlen bundespolitisch wichtig?", ref: "e:landtagswahl-why" }, { label: "Was bedeutet 'keine Mehrheit'?", ref: "t:koalition" }] },
          { tag: "fakt", text: "Die Berliner SPD signalisierte am Donnerstag (24.09.) grundsätzliche Bereitschaft zu Sondierungsgesprächen sowohl mit der Linken als auch mit der CDU." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "einordnung", text: "Bei Zustimmung des Parteitags könnten die eigentlichen Sondierungsgespräche in der kommenden Woche beginnen – das ist noch keine Koalitionsverhandlung, sondern eine Vorstufe. Spitzenkandidatin der Linken ist Elif Eralp, die als erste weibliche Regierende Bürgermeisterin Berlins gehandelt wird." }
        ]},
        { h: "Wer unterstützt was, wer kritisiert was?", items: [
          { tag: "position", text: "Der Landesvorstand der Linken sprach sich für Sondierungsgespräche mit SPD und Grünen aus; laut Berichten gibt es aber auch innerparteiliche Gegner einer Regierungsbeteiligung." },
          { tag: "position", text: "Zur Krankenversicherungsdebatte: Bundeskanzler Friedrich Merz (CDU) hatte am 21.09. gesagt, das Nebeneinander von gesetzlicher und privater Krankenversicherung sei ein „Gerechtigkeitsproblem”, weil Privatversicherte aus Sicht vieler Bürger schneller Termine bekämen. Das Kanzleramt dementierte laut Berichten noch am selben Abend einen Kurswechsel; CDU/CSU-Fraktionschef Thorsten Frei und CSU-Landesgruppenchef Alexander Hoffmann wiesen am 23.09. den Eindruck zurück, Merz plane eine Zusammenlegung von gesetzlicher und privater Krankenversicherung – er habe lediglich lange Wartezeiten für gesetzlich Versicherte angesprochen." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Beide Themen zeigen unterschiedliche Dynamiken: In Berlin geht es um eine konkrete Koalitionsbildung nach einer Wahl, auf Bundesebene um eine Grundsatzdebatte über die Krankenversicherung, die die Koalition aus Union und SPD berührt, ohne dass bislang ein Gesetzentwurf vorliegt.",
            ask: [{ label: "Wie funktioniert Koalitionsbildung?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Der Bundeshaushalt 2027 (Meldung 6) und die Rentenreform bleiben weitere zentrale innenpolitische Themen dieser Woche.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "t-online: Berliner Linke lädt Grüne und SPD zu 'Vorgesprächen' ein", url: "https://www.t-online.de/nachrichten/deutschland/id_101446214/berliner-linke-laedt-gruene-und-spd-zu-vorgespraechen-ein.html" },
        { title: "Berliner Abendblatt: Berliner Linke entscheidet auf Parteitag über Sondierungen", url: "https://berliner-abendblatt.de/berlin-news/berliner-linke-entscheidet-auf-parteitag-ueber-sondierungen-id349479" },
        { title: "onvista: Berliner SPD will mit Linke und CDU sondieren", url: "https://www.onvista.de/news/2026/09-24-berliner-spd-will-mit-linke-und-cdu-sondieren-0-10-26557213" },
        { title: "Ärzteblatt: Merz sieht 'Gerechtigkeitsproblem' bei Nebeneinander von privater und gesetzlicher Krankenversicherung", url: "https://www.aerzteblatt.de/news/merz-sieht-gerechtigkeitsproblem-bei-nebeneinander-von-privater-und-gesetzlicher-krankenversicherung-2aaacdbf-aef6-458d-bd7f-7d0d5c918fd9" },
        { title: "Tagesspiegel: Kanzleramt rudert nach Merz-Aussage zurück", url: "https://www.tagesspiegel.de/politik/doch-kein-kurswechsel-bei-den-krankenkassen-kanzleramt-rudert-nach-merz-aussage-zuruck-16081713.html" }
      ]
    },

    /* 8 IRAN-USA / HORMUZ */
    {
      id: "iran-usa-hormuz", cats: ["world", "geo"], when: "22.–24.09.2026 · UN-Vollversammlung, New York",
      headline: "USA und Iran verhandeln bei UN-Vollversammlung weiter, Ölpreis schwankt wegen Huthi-Angriffen und Hormuz-Hoffnungen",
      sec30: "US-Sondergesandter Steve Witkoff und Jared Kushner verhandelten am 23.09. rund einen Tag über Vermittler mit Irans Außenminister Araghchi am Rande der UN-Vollversammlung – die erste derartige Begegnung seit dem Zusammenbruch der Waffenruhe im Juli. Zuvor hatte Präsident Trump vor der UN-Vollversammlung von der Wahl zwischen einem Abkommen mit Iran oder dessen „Vernichtung” gesprochen; Irans Präsident Pezeshkian wies dies zurück. Der Ölpreis schwankte am Donnerstag stark zwischen rund 99 und 108 Dollar je Barrel Brent.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Seit Ende Februar 2026 befinden sich die USA, Israel und Iran im Krieg; eine Waffenruhe vom April hielt teilweise, ein im Juni vereinbartes Memorandum kollabierte im Juli erneut. Am 22./23.09. gab es am Rande der UN-Vollversammlung neue Gespräche über Vermittler." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Ein zentraler Streitpunkt ist die Straße von Hormus, durch die ein großer Teil des weltweiten Ölhandels läuft. Ein iranischer Regierungsvertreter sagte laut Kyodo/Reuters, Iran könne die Straße innerhalb von sieben Tagen wieder öffnen, wenn die USA militärischen Druck verringern und ihre Seeblockade iranischer Häfen aufheben.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }, { label: "Warum kann ein Konflikt den Ölpreis erhöhen?", ref: "e:why-oil-up-geo" }] },
          { tag: "position", text: "Mohsen Rezaei, Sekretär von Irans Oberstem Nationalen Sicherheitsrat, nannte am 24.09. laut Bericht mehrere Bedingungen: Ende der US-Militär- und Wirtschaftsmaßnahmen, Aufhebung der Seeblockade, Ende der Kämpfe „an allen Schauplätzen”, Freigabe eingefrorener iranischer Gelder und eine sichere Schifffahrtsregelung für Hormus." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "US-Sondergesandter Steve Witkoff und Jared Kushner verhandelten am 23.09. über Vermittler mit Irans Außenminister Abbas Araghchi; als Vermittler wurden Katars Premierminister Scheich Mohammed bin Abdulrahman Al Thani und Pakistan genannt. Witkoff nannte die Gespräche „constructive and promising”." },
          { tag: "position", text: "Präsident Trump sagte vor der UN-Vollversammlung am 22.09.: Er stehe vor der Entscheidung zwischen einem Abkommen mit Iran, das dem Land erlaube, „ein weit größeres Land” aufzubauen, oder der „Vernichtung” der Islamischen Republik. Irans Präsident Masoud Pezeshkian entgegnete am 23.09., Iran werde „never bow our head or bend at the knee”, und bestritt, dass Iran eine Atomwaffe anstrebe." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "unbestaetigt", text: "Der Ölpreis schwankte am Donnerstag ungewöhnlich stark: Nach Huthi-Raketenangriffen auf saudische Städte stieg Brent zeitweise auf rund 108 $, nach Reuters-Berichten über mögliche Fortschritte bei den Hormuz-Gesprächen fiel er wieder. Nur drei Frachtschiffe passierten die Straße von Hormus am Mittwoch – rund 80 % unter dem 10-Tage-Durchschnitt.",
            ask: [{ label: "Was bedeutet das für den Ölpreis?", ref: "n:brent" }, { label: "Wie wirkt Öl auf die Inflation?", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Der DAX litt am Donnerstag unter den steigenden Ölpreisen (Meldung 1); die deutschen Gasspeicher bleiben von der Hormuz-Frage nur indirekt betroffen (Meldung 15).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "e:oil-inflation", "e:brent-wti"],
      sources: [
        { title: "US News: Hope for Progress After US, Iran Hold First Shuttle Talks in Months", url: "https://www.usnews.com/news/world/articles/2026-09-23/hope-for-progress-after-us-iran-hold-first-shuttle-talks-in-months" },
        { title: "Axios: Trump says in UN speech he faces a decision whether to 'annihilate' Iran", url: "https://www.axios.com/2026/09/22/trump-speech-un-general-assembly-iran-annihilate" },
        { title: "CNBC: Iran's president blames U.S., Israel for global instability in defiant UN speech", url: "https://www.cnbc.com/2026/09/23/iran-united-nations-trump-israel.html" },
        { title: "Bloomberg: Latest Oil Market News and Analysis for Sept. 24", url: "https://www.bloomberg.com/news/articles/2026-09-23/latest-oil-market-news-and-analysis-for-sept-24" },
        { title: "CNBC: Oil prices pull back after report of talks for phased reopening of Strait of Hormuz", url: "https://www.cnbc.com/2026/09/24/oil-iran-crude-kepler-trump-us-un-.html" }
      ]
    },

    /* 9 UKRAINE-RUSSLAND */
    {
      id: "ukraine-russland-energiewaffenruhe", cats: ["world", "geo"], when: "22.–24.09.2026 · UN-Vollversammlung und Angriffe", widget: undefined,
      headline: "Selenskyj schlägt Trump Energie-Waffenruhe vor, Trump droht Russland mit Zöllen von bis zu 100 %",
      sec30: "Bei einem 40-minütigen Treffen am Rande der UN-Vollversammlung sprach Präsident Selenskyj von „positiven und produktiven” Gesprächen mit Trump und schlug eine gegenseitige Energie-Waffenruhe vor. Trump kündigte vor der UN-Vollversammlung an, im Fall eines fehlenden Kriegsendes Zölle von bis zu 100 % gegen Käufer russischer Energie zu verhängen. In der Nacht auf den 24.09. traf Russland Kiew mit ballistischen Raketen, landesweit wurden laut Berichten mindestens 16 Menschen getötet.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Selenskyj und Trump trafen sich am 22.09. rund 40 Minuten am Rande der UN-Vollversammlung. Selenskyj beschrieb die Gespräche als „positive and productive” und schlug eine gegenseitige Waffenruhe bei Angriffen auf Energieinfrastruktur vor." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "position", text: "Selenskyj sagte laut Bericht: „We are ready for energy ceasefire. If they don't want us to attack their diesel and refineries...we are ready – if they will not attack our energy system.” Er betonte, es habe keine Absprache über eine einseitige Einstellung ukrainischer Angriffe auf die russische Ölindustrie gegeben.",
            ask: [{ label: "Wie hängt Energie mit dem Ölmarkt zusammen?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "position", text: "Präsident Trump sagte vor der UN-Vollversammlung, die USA seien bereit, Zölle von bis zu 100 % gegen Käufer russischer Energie zu verhängen, sollte Russland keinem Kriegsende zustimmen: „In the event that Russia is not ready to make a deal to end the war, then the United States is fully prepared to impose a very strong round of powerful tariffs.”" },
          { tag: "fakt", text: "Australiens Premierminister Anthony Albanese und Selenskyj unterzeichneten am 23.09. ein bilaterales Sicherheitsabkommen; Australien kündigte ein Unterstützungspaket von rund 60 Mio. australischen Dollar (≈ 42 Mio. US-Dollar) an." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "einordnung", text: "Die Gespräche folgen auf ein Treffen von US-Sondergesandten mit Putin in Moskau Anfang September sowie auf wiederholte, bislang erfolglose Vermittlungsversuche seit Kriegsbeginn. Die EU berät parallel über ein neues Sanktionspaket gegen Russland, ein Beschluss ist für den 12.10. vorgesehen." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "fakt", text: "In der Nacht auf den 24.09. traf Russland Kiew in drei Wellen mit ballistischen Raketen; nach ersten Angaben gab es Tote und Verletzte in Kiew, landesweit wurden laut Berichten mindestens 16 Menschen getötet und 59 verletzt. Ukrainische Kräfte griffen laut Berichten in der Folgenacht mutmaßlich eine russische Ölraffinerie an." }
        ]}
      ],
      reaction: "Eine mögliche Zoll-Eskalation gegen Käufer russischer Energie könnte laut Einordnung globale Energiehandelsströme beeinflussen; unmittelbare Marktreaktionen dazu wurden in den gesichteten Quellen nicht beziffert.",
      terms: [],
      followups: ["e:why-oil-up-geo", "e:oil-inflation"],
      sources: [
        { title: "Al Jazeera: Zelenskyy says Ukraine ready for energy truce with Russia after Trump talks", url: "https://www.aljazeera.com/news/2026/9/23/zelenskyy-says-ukraine-ready-for-energy-truce-with-russia-after-trump-talks" },
        { title: "Kyiv Post: Trump Urges Putin to End the War in Ukraine, Cites New 100% Tariff Powers", url: "https://www.kyivpost.com/post/85153" },
        { title: "Kyiv Independent: Russian attacks kill at least 16, injure 59 across Ukraine as Kyiv hit by waves of drones, ballistic missiles", url: "https://kyivindependent.com/russian-attacks-kill-at-least-16-injure-59-across-ukraine-as-kyiv-hit-by-waves-of-drones-ballistic-missiles/" },
        { title: "UN News: Zelenskyy urges stronger pressure on Russia", url: "https://news.un.org/en/story/2026/09/1168416" }
      ]
    },

    /* 10 XI-TRUMP-GIPFEL */
    {
      id: "xi-trump-gipfel", cats: ["world"], when: "23.–25.09.2026 · Staatsbesuch Washington",
      headline: "Xi Jinping besucht Washington, USA und China verlängern Zoll-Waffenruhe bis Januar 2027",
      sec30: "Chinas Staatschef Xi Jinping absolvierte vom 23. bis 25.09. seinen ersten Staatsbesuch in Washington seit einem Jahrzehnt – das dritte Treffen mit Trump innerhalb von elf Monaten. Konkretestes Ergebnis: Die USA verlängerten die bestehende Zoll-Waffenruhe mit China bis zum 10. Januar 2027. Bei Taiwan, Exportkontrollen für Chips und Seltene Erden sowie Künstlicher Intelligenz gab es laut Berichten keine neuen Vereinbarungen.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Xi landete am 23.09. auf der Joint Base Andrews, wo ihn Trump und First Lady Melania Trump persönlich empfingen – erstmals seit elf Jahren, dass ein US-Präsident einen Staatsgast so begrüßte. Am 24.09. folgten ein rund einstündiges bilaterales Treffen im Weißen Haus und ein Staatsbankett." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "US-Finanzminister Scott Bessent bestätigte bei Xis Ankunft, dass beide Seiten den bestehenden Zoll-Waffenstillstand bis zum 10. Januar 2027 verlängern – ursprünglich sollte er am 10. November 2026 auslaufen.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] },
          { tag: "position", text: "China-Analysten hatten den Gipfel vorab als „long on atmosphere and short on deliverables” eingeschätzt; die Zoll-Verlängerung war das einzige konkret verkündete Ergebnis." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beim Treffen im Weißen Haus ging es laut chinesischem Außenministerium um Handel, Künstliche Intelligenz und Taiwan. Xi äußerte die Hoffnung, die USA hielten an ihrer Ablehnung von Taiwans Unabhängigkeit fest; Trump legte sich dazu laut Berichten nicht fest." },
          { tag: "position", text: "Xi sagte laut chinesischem Außenministerium zur KI-Kooperation: Beide Länder seien „große KI-Mächte”, es gebe „while there is competition between the two sides, there is even greater scope for cooperation.”" },
          { tag: "fakt", text: "Beim Staatsbankett im East Room waren unter anderen Jeff Bezos, Elon Musk, Mark Zuckerberg, Sundar Pichai und laut Berichten auch Tim Cook und Sam Altman anwesend." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "unbestaetigt", text: "Zu Exportkontrollen bei Halbleitern und Seltenen Erden sowie zu Chinas Beziehungen zu Iran wurden laut Berichten keine neuen Vereinbarungen bekannt. Eine Quelle nennt eine mögliche Verschiebung neuer US-Chip-Zölle gegen China bis 2027, ohne dies offiziell zu bestätigen.",
            ask: [{ label: "Warum investieren Konzerne Milliarden in KI-Rechenzentren?", ref: "e:ai-capex" }] }
        ]}
      ],
      reaction: "Die Zoll-Waffenruhe dämpft laut Einordnung kurzfristig ein Risiko für globale Lieferketten, ohne die grundsätzlichen Streitpunkte zwischen den USA und China zu lösen.",
      terms: ["hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips"],
      sources: [
        { title: "Al Jazeera: Trump welcomes Xi to Washington as US, China agree to extend trade truce", url: "https://www.aljazeera.com/news/2026/9/23/trump-meets-chinas-xi-jinping-at-us-airport-on-arrival-for-three-day-trip" },
        { title: "CNBC: U.S.-China trade truce extended for two months, Bessent says", url: "https://www.cnbc.com/2026/09/24/us-china-trade-truce-bessent-trump-xi.html" },
        { title: "NBC News: Trump-Xi summit – Leaders meet at White House amid tensions over Taiwan, trade and AI", url: "https://www.nbcnews.com/world/asia/trump-xi-summit-meet-white-house-tensions-taiwan-trade-ai-rcna598073" },
        { title: "Washington Times: Xi, Trump conclude bilateral meeting", url: "https://www.washingtontimes.com/news/2026/sep/24/xi-jinping-trump-conclude-bilateral-meeting/" }
      ]
    },

    /* 11 RÜSTUNG */
    {
      id: "ruestungsaktien-schlingerkurs", cats: ["defence"], when: "Do 24.09. Kursrückgang · laufende Aufträge September",
      headline: "Rüstungsaktien setzen Rückgang fort, obwohl neue Aufträge für Rheinmetall, Renk und Hensoldt gemeldet werden",
      sec30: "Rheinmetall, Hensoldt und Renk verloren am Donnerstag zwischen rund 3 und 4 Prozent und setzten damit ihren „Schlingerkurs” der Vortage fort – trotz neuer Aufträge wie einem italienischen Panther-Beschaffungsprogramm für Rheinmetall/Leonardo und einem Rekord-Auftragsbestand bei Renk. Verteidigungsminister Pistorius wies nach einer Ausschusssitzung Kritik an Rüstungsprogrammen zurück. TKMS entwickelte sich gegen den Trend positiv.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Rheinmetall fiel am Donnerstag um rund 3,4 bis 3,8 % auf etwa 990 Euro (Jahresverlauf 2026: −36,5 %), Hensoldt um rund 3,1 bis 4 % auf etwa 76 Euro, Renk um rund 2,8 bis 4,4 % nahe ihrem 52-Wochen-Tief (Jahresverlauf: −22,2 %).",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] },
          { tag: "position", text: "Als Grund nennt ein Analyst laut Bericht „massive Umschichtungen innerhalb der europäischen Rüstungsindustrie”; ein anderer Analyst (MWB Research) verweist darauf, dass hohe Auftragsvolumina bei Rheinmetall bereits eingepreist seien." }
        ]},
        { h: "Welche neuen Aufträge gibt es trotzdem?", items: [
          { tag: "fakt", text: "Laut der italienischen Vergabedatenbank ANAC startete Italien die Beschaffung von 132 Panther-Fahrzeugen plus 140 Trägerfahrzeugen von Rheinmetall/Leonardo; das Gesamtprogramm (rund 1.050 Fahrzeuge, 2027–2030) wird auf 15 bis 25 Mrd. Euro geschätzt.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Renk meldete einen Rekord-Auftragsbestand von 6,9 Mrd. Euro sowie einen NATO-Auftrag für Antriebskomponenten von Überwasserdrohnen (Wert nicht genannt). Hensoldt/Diehl Defence erhielten einen 100-Mio.-Euro-Auftrag für TRML-4D-Radare." },
          { tag: "unbestaetigt", text: "TKMS-CEO äußerte die Erwartung eines indischen U-Boot-Auftrags über rund 8 Mrd. Euro bis Jahresende – eine Vertragsunterzeichnung liegt dafür laut Bericht noch nicht vor." }
        ]},
        { h: "Was sagt die Politik?", items: [
          { tag: "position", text: "Verteidigungsminister Boris Pistorius wies am 23.09. nach einer Sitzung des Verteidigungsausschusses Kritik an Rüstungsprogrammen zurück, etwa am Kampfpanzer Leopard 2 A8 („kein Altmetall”), und betonte die wachsende Rolle von KI und unbemannten Systemen." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "TKMS entwickelte sich mit +25,9 % seit Jahresbeginn gegen den Trend positiv, nachdem Deutschland statt der von Rheinmetall geplanten F126-Fregatten acht MEKO-A-200-Fregatten von TKMS bestellt hatte. Das zeigt, dass sich einzelne Rüstungsunternehmen trotz eines schwächeren Gesamtsektors unterschiedlich entwickeln können.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 % des BIP?", ref: "e:nato-target" }] }
        ]}
      ],
      reaction: "Rheinmetall gehörte am Donnerstag auch im Euro Stoxx 50 zu den größten Verlierern (Meldung 1).",
      terms: ["closing"],
      followups: ["e:defence-stocks", "e:defence-order", "e:nato-target", "e:haushalt-basics"],
      sources: [
        { title: "onvista/dpa-AFX: Aktien im Fokus – Rüstungswerte setzen Schlingerkurs mit Verlusten fort", url: "https://www.onvista.de/news/2026/09-24-aktien-im-fokus-ruestungswerte-setzen-schlingerkurs-mit-verlusten-fort-0-10-26557069" },
        { title: "ad-hoc-news: Rheinmetall-Aktie – Italien startet Panther-Beschaffung", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/rheinmetall-aktie-italien-startet-panther-beschaffung/70178157" },
        { title: "Börse Express: Renk-Aktie – Auftragsbestand klettert auf 6,9 Milliarden", url: "https://www.boerse-express.com/news/articles/renk-aktie-auftragsbestand-klettert-auf-69-milliarden-901950" },
        { title: "finanzen.net: Pistorius weist Kritik an Rüstung zurück – 'kein Altmetall'", url: "https://www.finanzen.net/nachricht/aktien/pistorius-weist-kritik-an-ruestung-zurueck-kein-altmetall-15948359" }
      ]
    },

    /* 12 M&A DEALS */
    {
      id: "deals-priority-gfl-neu", cats: ["deals", "pe"], when: "Priority Technology 21.09. · GFL weiter offen · neue Deals 24.09.",
      headline: "Priority Technology vor Take-private, GFL-Bietergefecht weiter offen, neue Milliarden-Deals bei Kobayashi und Rechenzentren",
      sec30: "Beim Take-private von Priority Technology Holdings (≈ 1,6 Mrd. $ Unternehmenswert, 8,05 $ je Aktie) kündigten mehrere US-Kanzleien Prüfungen möglicher Ansprüche an. Beim Bietergefecht um GFL Environmental (≈ 18 Mrd. $ Eigenkapitalwert) gibt es weiter keine Entscheidung. Neu hinzugekommen: Kobayashi Pharmaceutical prüft einen Buyout über rund 3,2 Mrd. $, BlackRock/IFM verhandeln über ein bis zu 25 Mrd. $ schweres Rechenzentrumsportfolio.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Priority Technology Holdings unterzeichnete am 21.09. eine definitive Vereinbarung mit einer von CEO Thomas Priore geführten Investorengruppe (Searchlight Capital) über 8,05 $ je Aktie in bar, ein Unternehmenswert von rund 1,6 Mrd. $ (38 % Prämie auf den Schlusskurs vom 18.09.). Searchlight sagte 160 Mio. $ Eigenkapital ohne Finanzierungsvorbehalt zu, Closing wird für die erste Hälfte 2027 erwartet.",
            ask: [{ label: "Was passiert bei einer Übernahme?", ref: "e:ma-steps" }, { label: "Warum nehmen Investoren Firmen von der Börse?", ref: "e:take-private-why" }] },
          { tag: "fakt", text: "Zwischen dem 21. und 23.09. kündigten mehrere US-Anwaltskanzleien (u. a. Johnson Fistel, Monteverde, Bleichmar Fonti & Auld) Untersuchungen an, ob die Priority-Technology-Geschäftsführung ihre Treuepflichten gegenüber den Aktionären verletzt haben könnte." }
        ]},
        { h: "Wie ist der Stand bei GFL Environmental?", items: [
          { tag: "unbestaetigt", text: "Beim Bietergefecht zwischen einem Konsortium aus KKR/Energy Capital Partners/Blackstone und einem Konsortium aus Brookfield/IFM Investors um GFL Environmental (≈ 18 Mrd. $ Eigenkapital plus ≈ 10 Mrd. $ Schulden) gibt es weiterhin keine finale Entscheidung; ein Sonderkomitee prüft seit Juli die Angebote, eine Entscheidung wird „in den kommenden Wochen” erwartet. GFL-CEO Patrick Dovigi zeigte sich offen für ein Going-private und würde laut Bericht seinen gesamten Anteil einbringen.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] }
        ]},
        { h: "Welche neuen Deals kamen hinzu?", items: [
          { tag: "unbestaetigt", text: "Kobayashi Pharmaceutical (Japan) führt laut Berichten vom 24./25.09. Gespräche mit CVC Capital Partners und NSSK über einen Buyout im Volumen von über 500 Mrd. Yen (≈ 3,2 Mrd. $) – unverbindlich, noch keine Entscheidung." },
          { tag: "unbestaetigt", text: "BlackRock und IFM Investors führten am 24.09. laut Bericht exklusive Gespräche über den Kauf eines Rechenzentrumsportfolios von Blue Owl Capital (Stack Infrastructure APAC) für bis zu 25 Mrd. $ – noch nicht finalisiert." },
          { tag: "fakt", text: "Schneider Electric kündigte am 24.09. ein Übernahmeangebot für die deutsche Shelly Group zu 70,00 Euro je Aktie an (≈ 1,2 Mrd. Euro, 27 % Prämie); die Gründerfamilie mit 56,6 % der Anteile unterstützt den Deal, Vollzug wird für das erste Quartal 2027 erwartet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Bandbreite der Deals – von einem Fintech-Take-private über ein Bietergefecht im Abfallentsorgungssektor bis zu einem Rechenzentrumsportfolio – zeigt, dass sowohl klassische Branchen als auch KI-Infrastruktur derzeit aktive M&A-Themen sind.",
            ask: [{ label: "Welche Risiken bestehen bis zum Closing?", ref: "e:deal-risks" }] }
        ]}
      ],
      deal: { value: "≈ 1,6 Mrd. $ (Unternehmenswert, Priority Technology)", buyer: "Investorengruppe um CEO Thomas Priore / Searchlight Capital Partners", target: "Priority Technology Holdings", sector: "Zahlungsabwicklung / Fintech", type: "CEO-geführtes Going-private (Take-private)" },
      reaction: "Rechenzentrumsportfolios wie das von BlackRock/IFM verhandelte hängen eng mit dem KI-Infrastrukturboom zusammen (Meldung 14).",
      terms: ["closing", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks", "e:lbo"],
      sources: [
        { title: "Businesswire: Priority Technology Holdings Announces Definitive Agreement with Investor Group", url: "https://www.businesswire.com/news/home/20260920050170/en/Priority-Technology-Holdings-Inc.-Announces-Definitive-Agreement-with-Investor-Group-Led-by-Chairman-and-CEO-Thomas-Priore-to-Take-Company-Private" },
        { title: "Bloomberg: Blackstone and Brookfield consortia are said to bid for GFL", url: "https://www.bloomberg.com/news/articles/2026-09-16/blackstone-and-brookfield-consortia-are-said-to-bid-for-gfl" },
        { title: "Bloomberg: Kobayashi in $3.2 Billion Buyout Talks After Red Yeast Scandal", url: "https://www.bloomberg.com/news/articles/2026-09-24/kobayashi-in-3-2-billion-buyout-talks-after-red-yeast-scandal" },
        { title: "Bloomberg: BlackRock, IFM Close In On $25 Billion Stack Data Center Deal", url: "https://www.bloomberg.com/news/articles/2026-09-24/blackrock-ifm-close-in-on-25-billion-stack-data-center-deal" },
        { title: "onvista: ROUNDUP – Schneider Electric will Shelly Group übernehmen", url: "https://www.onvista.de/news/2026/09-24-roundup-schneider-electric-will-shelly-group-uebernehmen-0-10-26557085" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-loparex-ausfaelle", cats: ["credit"], when: "Loparex-Rekapitalisierung 24.09. · Fitch-Ausfallrate 14.09.",
      headline: "Rekapitalisierung bei Loparex löscht Blue-Owl-Kredit fast aus, Private-Credit-Ausfallrate laut Fitch auf Rekordhoch",
      sec30: "Der Spezialfolienhersteller Loparex, dessen Kredit bei Blue Owls Fonds OBDC bereits auf Non-Accrual gesetzt war, wird nun von Monarch Alternative Capital und Atlantic Park umfassend rekapitalisiert (≈ 1 Mrd. $). Blue Owls nachrangiger Kredit wird dabei voraussichtlich größtenteils ausgelöscht. Parallel meldete Fitch für den Private-Credit-Markt eine Rekord-Ausfallrate von 6,3 % über zwölf Monate – wobei andere Anbieter deutlich niedrigere Werte nennen.",
      blocks: [
        { h: "Was ist bei Loparex passiert?", items: [
          { tag: "fakt", text: "Blue Owls Fonds OBDC hatte den Second-Lien-Kredit an Loparex nach einer gescheiterten Rekapitalisierung im zweiten Quartal auf Non-Accrual gesetzt; die Bewertung fiel von rund 88 Cent je Dollar (Ende 2025) auf rund 5 Cent (Ende Q2 2026), Moody's stufte Loparex als ausgefallen ein.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Woran erkennt man Stress in Private Credit?", ref: "e:nonaccrual-default" }] },
          { tag: "fakt", text: "Am 24.09. wurde eine umfassende Rekapitalisierung bekannt, angeführt von Monarch Alternative Capital und Atlantic Park (General Atlantic), im Volumen von rund 1 Mrd. $ (Aufteilung nicht genannt). Blue Owls Junior-Kredit wird dabei voraussichtlich größtenteils oder vollständig ausgelöscht, OBDC erhält nur einen kleinen Eigenkapitalanteil. Die Blue-Owl-Aktie (OWL) fiel am 24.09. um rund 5 %." }
        ]},
        { h: "Was zeigt die Ausfallrate für den Gesamtmarkt?", items: [
          { tag: "fakt", text: "Fitch bezifferte die rollierende 12-Monats-Ausfallrate im Private-Credit-Markt Ende August auf einen Rekordwert von 6,3 % (Juli: 6,1 %), mit 14 Ausfall-Ereignissen im August – dem bisherigen Rekordmonat. Die Ausfallrate im Software-Sektor sank dagegen auf 0,6 %.",
            ask: [{ label: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?", ref: "e:sofr-spread" }] },
          { tag: "unbestaetigt", text: "Andere Anbieter nennen für denselben Markt deutlich niedrigere Ausfallraten: der Proskauer-Index rund 2,51 % (Q2), Moody's zwischen 1,6 % und 4,7 % (2025) – ein Hinweis darauf, dass verschiedene Methoden zu stark unterschiedlichen Werten führen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der Fall Loparex zeigt beispielhaft, wie ein einzelner Kredit fast vollständig abgeschrieben werden kann, wenn eine geplante Rekapitalisierung scheitert. Die stark auseinanderliegenden Ausfallraten verschiedener Anbieter erinnern daran, dass eine einzelne Kennzahl allein wenig über die Gesundheit des gesamten Marktes aussagt.",
            ask: [{ label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }] }
        ]}
      ],
      reaction: "Die zuletzt stark gestiegene US-Rendite (Meldung 2) verteuert variable Private-Credit-Kredite zusätzlich, was Ausfallrisiken tendenziell erhöht.",
      terms: ["non-accrual", "default-rate"],
      followups: ["e:private-credit-what", "e:nonaccrual-default", "e:pc-rates", "e:sofr-spread"],
      sources: [
        { title: "Loparex: Loparex Announces Comprehensive Recapitalization and Strategic Capital Support", url: "https://loparex.com/loparex-announces-comprehensive-recapitalization-and-strategic-capital-support-to-advance-next-stage-of-growth/" },
        { title: "Bloomberg: Blue Owl Slashes Private Loan to Near Zero Amid Bankruptcy Risk", url: "https://www.bloomberg.com/news/articles/2026-09-05/blue-owl-slashes-private-loan-to-near-zero-amid-bankruptcy-risk" },
        { title: "Bloomberg: US Private Credit Default Rate Hits a Record of 6.3%, Fitch Says", url: "https://www.bloomberg.com/news/articles/2026-09-14/us-private-credit-default-rate-hits-a-record-of-6-3-fitch-says" },
        { title: "Bloomberg: Private Credit Defaults Are 1%, 6% or 19%, Depending Who You Ask", url: "https://www.bloomberg.com/news/articles/2026-09-17/private-credit-defaults-are-1-6-or-19-depending-who-you-ask" }
      ]
    },

    /* 14 META MUSE */
    {
      id: "meta-muse-connect-amazon", cats: ["tech", "markets"], when: "8.–24.09.2026 · Meta Connect und Amazon-Sperre",
      headline: "Amazon blockiert Metas KI-Agent Muse, Meta stellt auf Connect-Konferenz KI-Brillen und tragbares Gerät vor",
      sec30: "Amazon sperrte am 22.09. den Zugriff von Metas KI-Agenten „Muse” auf seinen Online-Shop, nachdem Meta sich geweigert hatte, den Bot zu entfernen. Auf der Meta-Connect-Konferenz (23./24.09.) kündigte Meta an, Muse in den kommenden Monaten in Smart-Glasses zu integrieren, dazu ein neues tragbares Gerät „Muse Charm”. Mehrere Analysten erhöhten ihre Kursziele für die Meta-Aktie deutlich, unter anderem JPMorgan auf 920 Dollar.",
      blocks: [
        { h: "Was ist neu seit der Vortagesausgabe?", items: [
          { tag: "fakt", text: "Amazon blockierte Muse am 22.09. aus seinem Online-Shop. Eine Amazon-Sprecherin erklärte, Drittanbieter-Apps, die im Namen von Kunden einkaufen, müssten transparent operieren; Amazon wirft Muse vor, ohne Authentifizierung auf Kundenkonten zuzugreifen. Meta entgegnet, Muse habe keinen Zugriff auf Passwörter oder Zahlungsmittel, sondern nur mit Erlaubnis auf die Bestellhistorie.",
            ask: [{ label: "Warum bewegte Muse ganze Marktsegmente?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Auf der Meta-Connect-Konferenz am 23./24.09. kündigte Meta an, Muse in den kommenden Monaten auf Smart-Glasses zu bringen (freihändige Sprachaktivierung, kontextbezogene Aktionen), dazu ein neues tragbares Gerät „Muse Charm” sowie neue Shopping-Partnerschaften mit Walmart, Best Buy, Gap, Sephora, Expedia, Instacart und Wayfair." }
        ]},
        { h: "Sicherheitslücke bereits behoben", items: [
          { tag: "fakt", text: "Sicherheitsforscher Patrick Wardle hatte am 21.09. eine Schwachstelle offengelegt, über die ein lokaler Prozess auf dem Mac den Diktier-Traffic von Muse umleiten und den Auth-Token kapern konnte. Meta patchte die Lücke laut Bericht rund 16 Stunden nach der Offenlegung." }
        ]},
        { h: "Wie reagierten Analysten und der Aktienkurs?", items: [
          { tag: "fakt", text: "JPMorgan (Doug Anmuth) erhöhte sein Kursziel für Meta nach der Connect-Keynote von 820 auf 920 Dollar. KeyBanc hob das Ziel auf 900 Dollar an, Jefferies auf 875 Dollar. Das mediane Kursziel an der Wall Street liegt bei rund 760 Dollar.",
            ask: [{ label: "Warum investieren Konzerne Milliarden in KI-Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Die Meta-Aktie war im Monat vor dem 24.09. um rund 30 % gestiegen und gab am Donnerstag vorbörslich rund 2 % nach – nach dem starken Lauf eine übliche Gewinnmitnahme." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der Amazon-Streit zeigt exemplarisch einen neuen Konflikttyp: KI-Agenten, die im Auftrag von Nutzern auf fremden Plattformen einkaufen, stellen etablierte Anbieter vor die Frage, wie viel Zugriff sie Drittanbietern erlauben. Ein ähnlicher Rechtsstreit läuft bereits zwischen Amazon und Perplexity." }
        ]}
      ],
      reaction: "Chipwerte wie Infineon hatten von der Muse-Rally profitiert, gaben aber am Donnerstag im Zuge der allgemeinen Marktschwäche nach (Meldung 1).",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:software-ai-loans"],
      sources: [
        { title: "heise online: Locked out – Amazon blocks Meta's AI agent Muse in its online shop", url: "https://www.heise.de/en/news/Locked-out-Amazon-blocks-Meta-s-AI-agent-Muse-in-its-online-shop-11460854.html" },
        { title: "Tom's Guide: Meta Connect 2026 RECAP", url: "https://www.tomsguide.com/news/live/meta-connect-2026-live" },
        { title: "Unite.AI: Meta Hot-Fixes Muse Zero-Day That Let Attackers Hijack the AI Agent", url: "https://www.unite.ai/meta-hot-fixes-muse-zero-day-that-let-attackers-hijack-the-ai-agent/" },
        { title: "qz.com: JPMorgan hebt Kursziel für Meta auf 920 US-Dollar", url: "https://de.qz.com/jpmorgan-meta-kursziel-muse-ai-agent-092426" },
        { title: "Benzinga: What's Going On With Meta Platforms Stock Thursday?", url: "https://www.benzinga.com/markets/tech/26/09/61966093/metas-muse-ai-has-wall-street-seeing-billion-dollar-possibilities" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "gasspeicher-rehden-kritisch", cats: ["energy", "germany"], when: "Füllstand Stand 22.–24.09. · Reiche-Entscheidung weiter offen",
      headline: "Speicher Rehden nur zu 8 Prozent gefüllt, Ministerin Reiches Ausschreibungs-Entscheidung weiter offen",
      sec30: "Deutschlands größter Gasspeicher Rehden war um den 24./25.09. laut Berichten nur zu rund 8 % gefüllt – weit unter der gesetzlichen November-Zielvorgabe von 45 %. Die deutschen Gasspeicher insgesamt lagen bei rund 56–57 %, gut 20 Prozentpunkte unter dem Vorjahreswert. Wirtschaftsministerin Katherina Reiche hat noch immer keine final bezifferte Entscheidung über eine Ausweitung des Ausschreibungsinstruments „Long Term Options” getroffen. Der TTF-Gaspreis lag bei rund 74 Euro je Megawattstunde.",
      blocks: [
        { h: "Wie ist die Lage bei Gas?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen um den 22.–24.09. laut mehreren Quellen zwischen rund 56 % und 57 % Füllstand – rund 20 Prozentpunkte unter dem Vorjahreswert (2025: rund 76,7 %) und der niedrigste je zu dieser Jahreszeit gemessene Stand seit Beginn der Aufzeichnungen vor 15 Jahren.",
            ask: [{ label: "Warum ist Gas in Europa teuer?", ref: "e:gas-ttf" }] },
          { tag: "fakt", text: "Besonders kritisch ist der Speicher Rehden, mit Abstand der größte deutsche Gasspeicher: Er war um den 24./25.09. nur zu rund 8 % gefüllt, weit unter der für ihn geltenden gesetzlichen November-Zielvorgabe von 45 % (gegenüber 80 % bei anderen Speichern, wegen seiner geografischen Lage und langsameren Ein-/Ausspeicherleistung)." },
          { tag: "fakt", text: "Der TTF-Gaspreis lag am 24.09. bei rund 74 Euro je Megawattstunde, rund 134 % über dem Vorjahresniveau – laut einer Quelle der höchste Stand seit Kriegsbeginn.",
            ask: [{ label: "Was ist TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Was tut die Politik?", items: [
          { tag: "fakt", text: "Wirtschaftsministerin Katherina Reiche (CDU) plant weiterhin, eine für den Herbst angesetzte Ausschreibung über „Long Term Options” (LTO) um eine bislang nicht bezifferte Gasmenge zu erhöhen. Beim LTO-Mechanismus reserviert der Marktgebietsverantwortliche Trading Hub Europe gegen Gebühr Gaslieferungen von Händlern, die die Mengen in ihren Speichern vorhalten müssen." },
          { tag: "unbestaetigt", text: "Eine finale, konkret bezifferte Entscheidung über das LTO-Volumen ließ sich in den gesichteten Quellen bis zum 24.09. nicht bestätigen. Reiche lehnt laut Berichten einen staatlichen Direkteinkauf wie 2022 ab, um Preistreiberei zu vermeiden." },
          { tag: "position", text: "Grünen-Politiker Michael Kellner erkennt laut Bericht an, dass Reiche Handlungsbedarf sieht, bezeichnet erhöhte LTO-Ausschreibungen aber als „eine späte Krücke” und bezweifelt, ob das Instrument bei einem kalten Winter ausreicht." }
        ]},
        { h: "Wie hängt das mit dem Ölmarkt zusammen?", items: [
          { tag: "einordnung", text: "Die parallele Ölpreis-Volatilität durch die Iran-Hormuz-Lage (Meldung 8) betrifft primär den Ölmarkt; für die europäische Gasversorgung ist vor allem die LNG-Versorgung aus Katar und den USA relevant, die von einer separaten Dynamik im Persischen Golf abhängt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]}
      ],
      reaction: "Ein niedriger Speicherstand macht Deutschland empfindlicher für Preisschwankungen am Gasmarkt vor dem Winter, unabhängig von der separaten Ölpreis-Entwicklung (Meldung 8).",
      terms: ["ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:hormuz"],
      sources: [
        { title: "Denkstrom: Rehden fast leer – Gaspreise auf Dreijahreshoch", url: "https://denkstrom.org/artikel/gasspeicher-rehden-vierjahreshoch-september-2026/" },
        { title: "presse.online: Gasspeicher bei 56 Prozent – Reiche spricht mit Uniper", url: "https://presse.online/2026/09/16/gasspeicher-bei-56-prozent-reiche-spricht-mit-uniper/" },
        { title: "t-online: Gasspeicher – Reiche will Einspeisung mit neuem Modell ankurbeln", url: "https://www.t-online.de/finanzen/energie/id_101438394/gasspeicher-reiche-will-einspeisung-mit-neuem-modell-ankurbeln.html" },
        { title: "oilpriceapi.com: TTF Gas Price Today", url: "https://www.oilpriceapi.com/live/dutch-ttf-gas-price" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "fed-hike": { tag: "position", story: 2, text: "Fed-Gouverneur Michael Barr sagte am 23.09., weitere „Politikanpassungen” seien voraussichtlich nötig, um die Inflation zeitnah auf 2 % zu senken – Märkte werten das als Signal für eine mögliche weitere Zinserhöhung im Oktober." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Starke US-Konjunkturdaten (PMI, niedrige Erstanträge) erhöhten am Donnerstag die Erwartung weiterer Fed-Zinsschritte und trieben die Rendite zehnjähriger US-Anleihen auf den höchsten Stand seit 2007." },
    "yield-meaning": { tag: "unbestaetigt", story: 2, text: "Die US-10-Jahres-Rendite sprang am Donnerstag auf den höchsten Stand seit 2007 (Berichte: zwischen rund 5,13 % und 5,20 %), die Bund-Rendite zog auf rund 3,61 % an." },
    "yield-stocks": { tag: "position", story: 1, text: "Marktbeobachter nennen die stark gestiegenen Anleiherenditen als Hauptbelastung für DAX, Euro Stoxx 50, S&P 500 und Dow am Donnerstag." },
    "rates-stocks": { tag: "fakt", story: 1, text: "Nach ihrem Rekordschluss vom Mittwoch verlor die Nasdaq am Donnerstag 1,1 %, stärker als S&P 500 (−0,8 %) und Dow (−0,7 %) – ein Muster, das zur Zinsempfindlichkeit von Wachstumsaktien passt." },
    "index-move": { tag: "unbestaetigt", story: 1, text: "Zum DAX-Donnerstagsschluss kursieren unterschiedliche Werte zwischen 25.266,53 und 25.352 Punkten (jeweils leicht im Minus)." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Der Goldpreis gab am Donnerstag leicht nach (Quellen: 4.272–4.286 $), belastet vom starken US-PMI und der stark gestiegenen US-Rendite." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin fiel vom Dienstags-Hoch (87.281 $) auf rund 83.900 $ zurück, belastet von der wachsenden Erwartung einer weiteren Fed-Zinserhöhung." },
    "eurusd-meaning": { tag: "fakt", story: 2, text: "EUR/USD bewegte sich am Donnerstag kaum und notierte bei rund 1,138, während die Zinsdifferenz zu den USA im Fokus stand." },
    "inflation-what": { tag: "fakt", story: 5, text: "Die Gemeinschaftsdiagnose der Wirtschaftsinstitute erwartet für Deutschland eine Inflation von 2,8 % (2026) und 3,2 % (2027)." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Haushaltsausschuss begann am 23.09. die Einzelplan-Beratungen zum Entwurf 2027 (Ausgaben 555,4 Mrd. €, Neuverschuldung ≈ 200 Mrd. € inkl. Sondervermögen); die Schlussabstimmung ist für den 27.11. angesetzt." },
    "debt-brake": { tag: "fakt", story: 6, text: "Die geschätzte Zinsbelastung des Bundes steigt von 41 Mrd. € (2027) auf rund 80 Mrd. € (2030) – ein Anstieg, der durch die zuletzt gestiegenen Anleiherenditen zusätzlich verstärkt werden könnte." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "Die Berliner Linke (25,7 % der Stimmen) entscheidet heute auf einem Parteitag über Sondierungsgespräche mit SPD und Grünen für eine Landesregierung." },
    "coalition-majority": { tag: "fakt", story: 7, text: "Die Berliner SPD zeigte sich am 24.09. gesprächsbereit sowohl mit der Linken als auch mit der CDU – welche Koalition entsteht, ist noch offen." },
    "nato-target": { tag: "fakt", story: 11, text: "Der deutsche Verteidigungsetat soll 2027 um 33 % auf 109,75 Mrd. Euro steigen; gleichzeitig gaben Rüstungsaktien wie Rheinmetall, Hensoldt und Renk am Donnerstag deutlich nach." },
    "defence-order": { tag: "fakt", story: 11, text: "Italien startete die Beschaffung von 132 Panther-Fahrzeugen von Rheinmetall/Leonardo, Renk meldete einen Rekord-Auftragsbestand von 6,9 Mrd. Euro." },
    "defence-stocks": { tag: "position", story: 11, text: "Ein Analyst nennt „massive Umschichtungen innerhalb der europäischen Rüstungsindustrie” als Grund für die Kursverluste bei Rheinmetall, Hensoldt und Renk trotz neuer Aufträge." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 8, text: "Der Ölpreis schwankte am Donnerstag zwischen rund 99 und 108 $ je Barrel, getrieben von Huthi-Raketenangriffen auf Saudi-Arabien und Berichten über mögliche Fortschritte bei den Hormuz-Gesprächen." },
    "hormuz": { tag: "fakt", story: 8, text: "Nur drei Frachtschiffe passierten die Straße von Hormus am Mittwoch – rund 80 % unter dem 10-Tage-Durchschnitt, während Iran und die USA über eine mögliche Wiederöffnung verhandelten." },
    "brent-wti": { tag: "unbestaetigt", story: 8, text: "Berichte zum Brent-Preis am Donnerstag schwanken ungewöhnlich stark zwischen rund 99 und 108 $ je Barrel." },
    "oil-inflation": { tag: "fakt", story: 5, text: "ifo-Ökonom Timo Wollmershäuser warnte, eine Eskalation im Nahen Osten könnte die globalen Energiepreise weiter treiben und damit Inflationsdruck erhöhen." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der TTF-Gaspreis lag am 24.09. bei rund 74 Euro je Megawattstunde, rund 134 % über dem Vorjahresniveau." },
    "energy-germany": { tag: "unbestaetigt", story: 15, text: "Der Speicher Rehden war um den 24./25.09. nur zu rund 8 % gefüllt; Wirtschaftsministerin Reiches Entscheidung über eine LTO-Ausweitung ist weiterhin nicht final beziffert." },
    "ma-steps": { tag: "fakt", story: 12, text: "Priority Technology Holdings vereinbarte am 21.09. ein Going-private für 8,05 $ je Aktie (≈ 1,6 Mrd. $); beim GFL-Bietergefecht (≈ 18 Mrd. $) gibt es weiterhin keine Entscheidung." },
    "take-private-why": { tag: "fakt", story: 12, text: "Beim Priority-Technology-Deal sagte Investor Searchlight 160 Mio. $ Eigenkapital ohne Finanzierungsvorbehalt zu, Closing wird für H1 2027 erwartet." },
    "deal-risks": { tag: "unbestaetigt", story: 12, text: "Mehrere US-Kanzleien kündigten seit dem 21.09. Untersuchungen möglicher Treuepflichtverletzungen beim Priority-Technology-Deal an." },
    "lbo": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental (≈ 18 Mrd. $ Eigenkapital, ≈ 10 Mrd. $ Schulden) konkurrieren weiterhin zwei Investorengruppen; GFL-CEO Dovigi zeigte sich offen für ein Going-private." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Loparex wird nach dem Ausfall des Blue-Owl-Kredits nun von Monarch Alternative Capital und Atlantic Park mit rund 1 Mrd. $ rekapitalisiert; Blue Owls Junior-Kredit wird dabei größtenteils ausgelöscht." },
    "sofr-spread": { tag: "einordnung", story: 2, text: "Die stark gestiegene US-Rendite lässt auch SOFR erhöht bleiben – variabel verzinste Private-Credit-Kredite werden für Schuldner dadurch tendenziell teurer." },
    "pc-rates": { tag: "fakt", story: 13, text: "Fitch bezifferte die 12-Monats-Ausfallrate im Private-Credit-Markt Ende August auf ein Rekordhoch von 6,3 %, mit 14 Ausfall-Ereignissen im bisherigen Rekordmonat August." },
    "nonaccrual-default": { tag: "unbestaetigt", story: 13, text: "Verschiedene Anbieter nennen für denselben Private-Credit-Markt stark abweichende Ausfallraten zwischen rund 2,5 % (Proskauer) und 6,3 % (Fitch)." },
    "ai-capex": { tag: "fakt", story: 14, text: "Meta kündigte auf der Connect-Konferenz an, den KI-Agenten Muse in Smart-Glasses zu integrieren; mehrere Analysten erhöhten ihre Kursziele für Meta deutlich, u. a. JPMorgan auf 920 $." },
    "software-ai-loans": { tag: "fakt", story: 14, text: "Amazon blockierte Metas KI-Agenten Muse aus seinem Online-Shop, ein Beispiel für Konflikte zwischen Plattformen und KI-Agenten Dritter." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 2,
      q: "Die Rendite zehnjähriger US-Staatsanleihen erreichte am Donnerstag den höchsten Stand seit welchem Jahr?",
      options: ["seit 2020", "seit 2015", "seit 2007", "seit 1999"],
      answer: 2,
      explain: "Berichte nennen übereinstimmend das Jahr 2007 als letzten vergleichbaren Höchststand, auch wenn der exakte Prozentwert zwischen den Quellen leicht abweicht (rund 5,13 % bis 5,20 %)."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 5,
      q: "Auf welchen Wert stieg der ifo-Geschäftsklimaindex im September 2026?",
      options: ["86,7 Punkte", "88,8 Punkte", "89,9 Punkte", "92,4 Punkte"],
      answer: 2,
      explain: "Der ifo-Index stieg von 88,8 Punkten im August auf 89,9 Punkte im September – der fünfte Anstieg in Folge und der höchste Stand seit Mai 2023."
    },
    {
      topic: "International", type: "Fakt", story: 10,
      q: "Bis zu welchem Datum verlängerten die USA und China ihre Zoll-Waffenruhe beim Xi-Trump-Gipfel?",
      options: ["10. November 2026", "31. Dezember 2026", "10. Januar 2027", "1. März 2027"],
      answer: 2,
      explain: "US-Finanzminister Bessent bestätigte eine Verlängerung der bestehenden Zoll-Waffenruhe bis zum 10. Januar 2027 – ursprünglich sollte sie bereits am 10. November 2026 auslaufen."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, es kommt in den kommenden Wochen tatsächlich zu einer gestaffelten Wiedereröffnung der Straße von Hormus. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Der Ölpreis wird automatisch auf über 150 Dollar steigen",
        "Das Ölangebot am Weltmarkt steigt, was den Preis eher dämpft",
        "Die deutschen Gasspeicher füllen sich dadurch automatisch auf über 90 %",
        "Die US-Rendite fällt dadurch automatisch unter 4 %"
      ],
      answer: 1,
      explain: "Durch die Straße von Hormus läuft ein großer Teil der weltweiten Ölproduktion. Eine Wiedereröffnung würde das Angebot vergrößern, was den Preis nach Einschätzung von Marktbeobachtern eher dämpfen würde – ein automatischer Effekt auf Gasspeicher oder US-Renditen lässt sich daraus nicht ableiten."
    },
    {
      topic: "Notenbanken", type: "Zusammenhang", story: 2,
      q: "Angenommen, weitere US-Konjunkturdaten fallen in den kommenden Wochen ähnlich stark aus wie die PMI- und Arbeitsmarktdaten vom 24.09. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Fed senkt den Leitzins automatisch noch im Oktober",
        "Der Markt preist eine weitere Zinserhöhung stärker ein, Anleiherenditen bleiben eher hoch",
        "Die US-Inflation sinkt dadurch sofort unter 2 %",
        "Der Dollar wird automatisch deutlich schwächer"
      ],
      answer: 1,
      explain: "Starke Konjunkturdaten wie niedrige Erstanträge auf Arbeitslosenhilfe und ein hoher Einkaufsmanagerindex gelten laut Markteinschätzung als Signal für anhaltenden Preisdruck – das stützt tendenziell die Erwartung weiterer Zinsschritte und damit hohe Renditen, wie es Fed-Gouverneur Barrs Aussagen bereits nahelegten."
    }
  ]
};
