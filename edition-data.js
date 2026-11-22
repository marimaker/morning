// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-22",
  dateLabel: "Sonntag, 22. November 2026",
  updatedLabel: "Recherchestand 22.11.2026",
  marketNote: "Diese Ausgabe entsteht am Sonntag, 22.11.2026. Da die Börsen am Wochenende geschlossen sind, zeigen DAX, Euro Stoxx 50, S&P 500, Nasdaq Composite, Dow Jones sowie die Renditen von US-Staatsanleihen und Bundesanleihen den Schlussstand vom Freitag, 20.11.2026 – dem Ende einer Woche, die von einem breiten, KI-Aktien-getriebenen Ausverkauf geprägt war. Gold und Brent-Öl zeigen ebenfalls den Freitagsstand, da in den ausgewerteten Quellen keine durchgehende Wochenend-Notierung vorlag. Bitcoin handelt durchgehend (24/7) und zeigt den Stand von Sonntagmittag, 22.11.2026. Bei einzelnen Werten (Euro Stoxx 50, Gold, Brent) weichen die Angaben zwischen Quellen leicht ab; das ist unten als unbestätigt gekennzeichnet.",

  top: [
    { text: "Ein breiter, von Sorgen um die Finanzierung des KI-Infrastrukturbooms ausgelöster Ausverkauf drückte die Weltbörsen in ihre schlechteste Woche seit Jahren: Der S&P 500 und der Dow Jones rutschten in die Korrekturzone, die Nasdaq Composite verlor rund 10 % binnen einer Woche und drehte damit für das Jahr 2026 ins Minus. Der DAX verbuchte mit -7,28 % seinen größten Wochenverlust seit April 2025. Auslöser waren unter anderem eine SEC-Ermittlung zu Nvidias Bilanzierungspraktiken, neue US-Exportbeschränkungen für KI-Chips sowie die Nachwirkungen des Rücktritts von Nvidia-Chef Jensen Huang.", ref: "s:2" },
    { text: "Am Golf eskalierte die Lage weiter: Irans Revolutionsgarde griff nach eigenen Angaben erneut US-Stützpunkte in Bahrain an und beansprucht die Zerstörung zweier US-Patriot-Radaranlagen. Das britische Maritime-Warnsystem UKMTO meldete zwei weitere Tanker-Zwischenfälle nahe Oman; Irans Marine berichtete unabhängig davon von einem brennenden Tanker nach einem angeblichen Minentreffer – von Reuters nicht verifiziert. Eine katarische Vermittlerdelegation reiste nach Teheran, ohne dass es laut Beteiligten bereits zu „formellen” Verhandlungen kam.", ref: "s:10" },
    { text: "Beim Treffen der „Koalition der Willigen” in Berlin sagte US-Vermittler Jared Kushner, Russland sei mit dem Konzept NATO-ähnlicher, auf Artikel 5 gestützter Sicherheitsgarantien für die Ukraine „comfortable”; Präsident Selenskyj erklärte, er habe dazu bislang keine schriftlichen Zusagen gesehen. Nach dem Dreiertreffen von Trump, Xi und Putin in Shenzhen hatte Selenskyj Putin öffentlich als „Mörder” bezeichnet, nachdem Trump ihn zuvor als „Freund” bezeichnet hatte.", ref: "s:9" },
    { text: "Der Bundeshaushalt 2027 steht vor der für Freitag, 27.11., geplanten Schlussabstimmung im Bundestag; die Gegenfinanzierung der zuvor beschlossenen Stromsteuersenkung über das Jahr 2027 hinaus bleibt ungeklärt. Bei der Rentenreform soll das Kabinett erst am 9. oder 16. Dezember entscheiden. Aktuelle Umfragen sehen die AfD weiterhin bei 26 bis 29 %, die Union bei 19 bis 21 %.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "24.802,78 Pkt.", change: "-2,60 % ggü. Donnerstag; -7,28 % Wochenverlust – größter seit April 2025", dir: "down", asof: "Schluss Fr 20.11.26 (Börsen am Wochenende geschlossen)", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Woche", text: "Mit -7,28 % verzeichnete der DAX seinen größten Wochenverlust seit April 2025." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Ein weltweiter Ausverkauf von Technologie- und KI-nahen Aktien erfasste auch deutsche Werte: Infineon verlor laut Berichten 7,9 %, Aixtron 9,5 %. Treiber waren laut Beobachtern Zweifel an der Finanzierbarkeit des KI-Infrastrukturbooms, eine SEC-Ermittlung zu Nvidia und neue US-Exportbeschränkungen für KI-Chips (mehr in Meldung 14)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum KI-Ausverkauf, Nvidia und Anthropic in Meldung 14.", ref: "s:14" },
        { area: "USA", text: "Mehr zu den US-Indizes in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "marketscreener.de: XETRA-SCHLUSS – DAX-Ausverkauf gewinnt an Fahrt, 25.000er-Marke fällt", url: "https://de.marketscreener.com/boerse-nachrichten/xetra-schluss-dax-ausverkauf-gewinnt-an-fahrt-25-000er-marke-faellt-ce785ed3da80f222" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 5.942–5.952 Pkt. (Angaben zwischen Quellen leicht abweichend)", change: "-2,64 % bis -2,81 % ggü. Donnerstag; -6,84 % Wochenverlust", dir: "down", asof: "Schluss Fr 20.11.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Woche", text: "Der Wochenverlust von rund 6,84 % lag etwas unter dem des DAX, da der Index breiter gestreut ist." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der breite europäische Technologie- und KI-Ausverkauf im Gleichschritt mit der Wall Street erfasste den Euro Stoxx 50 ähnlich stark wie den DAX."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und Lagardes Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 falls 2.64 percent as AI selloff caps weak week", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-falls-2-64-prozent-as-ai-selloff-caps-weak-week/70540943" }
    },
    "sp500": {
      label: "S&P 500", value: "6.910,39 Pkt.", change: "-3,70 % ggü. Donnerstag; -8,6 % Wochenverlust – Index in Korrekturzone", dir: "down", asof: "Schluss Fr 20.11.26", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Korrektur", text: "Mit dem Wochenverlust von 8,6 % rutschte der Index laut Berichten in die sogenannte Korrekturzone (mehr als 10 % unter seinem Rekordhoch)." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Zweifel an der Finanzierbarkeit des KI-Infrastrukturbooms, eine SEC-Ermittlung zu Nvidias Bilanzierung und neue US-Exportbeschränkungen für KI-Chips lösten breite Gewinnmitnahmen aus (mehr in Meldung 14)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Nvidia und Anthropic in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/11/19/stock-market-today-live-updates.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "22.617,73 Pkt.", change: "-5,28 % ggü. Donnerstag; ≈ -10 % Wochenverlust – größter Wocheneinbruch seit über sechs Jahren", dir: "down", asof: "Schluss Fr 20.11.26", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Jahresbilanz", text: "Mit dem Wocheneinbruch drehte die Nasdaq laut Berichten für das Gesamtjahr 2026 ins Minus." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der breite KI-Aktien-Ausverkauf traf Technologiewerte am stärksten; Nvidia verlor allein in der Woche rund 23 % (mehr in Meldung 14)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Nvidia und Anthropic in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/11/19/stock-market-today-live-updates.html" }
    },
    "dow": {
      label: "Dow Jones", value: "48.147,33 Pkt.", change: "-1,93 % (-949,73 Pkt.) ggü. Donnerstag; -8 % Wochenverlust – schlechteste Woche seit März 2020", dir: "down", asof: "Schluss Fr 20.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Korrektur", text: "Auch der Dow rutschte laut Berichten in die Korrekturzone – trotz geringerer Technologiegewichtung als Nasdaq und S&P 500." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die breite Risikoabkehr erfasste auch nicht-technologienahe Werte, da Anleger allgemein Liquidität suchten."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf und zur Ukraine-Diplomatie in Meldung 9 und 10.", ref: "s:10" }
      ],
      source: { title: "UPI: Dow, S&P 500 enter correction territory", url: "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,097", change: "leicht fester ggü. Vortag (Spanne 1,0967–1,0990)", dir: "up", asof: "Stand Fr 20.11.26", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,10 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar stärker.",
      compare: [
        { label: "Woche", text: "Der Kurs bewegte sich die Woche über in einer engen Spanne zwischen rund 1,0967 und 1,0990." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die breite Risikoabkehr an den Aktienmärkten dämpfte Kapitalströme in beide Richtungen; größere Zinssignale von Fed und EZB stehen erst im Dezember an (mehr in Meldung 4 und 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Trading Economics: Euro Area Currency – EUR/USD", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,92 %", change: "fünfter Rückgangstag in Folge", dir: "down", asof: "Stand Fr 20.11.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,92 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund diesen Zinssatz pro Jahr.",
      compare: [
        { label: "Woche", text: "Die Rendite fiel laut Berichten den fünften Tag in Folge, da Anleger angesichts des Aktien-Ausverkaufs verstärkt in Staatsanleihen auswichen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Flucht in sichere Häfen wegen des breiten Aktien-Ausverkaufs drückte die Rendite nach unten, obwohl am Terminmarkt eine Fed-Zinserhöhung im Dezember weiterhin nahezu sicher eingepreist ist (mehr in Meldung 4)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte und den FedWatch-Wahrscheinlichkeiten in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ETF Trends: Treasury Yields Snapshot, November 20, 2026", url: "https://www.etftrends.com/fixed-income-content-hub/treasury-yields-snapshot-november-20-2026/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,30 %", change: "-6 Basispunkte ggü. Vorwoche (3,38 %)", dir: "down", asof: "Schluss Fr 20.11.26", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Woche", text: "Die Rendite fiel binnen der Woche um rund 6 Basispunkte, am Freitag selbst laut einer Quelle um rund 12 Basispunkte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Auch europäische Anleger wichen angesichts des Aktien-Ausverkaufs verstärkt in Bundesanleihen aus, obwohl die EZB für Dezember weiterhin eine Zinserhöhung signalisiert (mehr in Meldung 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und Lagardes Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "aktiencheck.de: Bundesanleihen – Wochenbilanz mit 3,30 Prozent Rendite, sechs Basispunkte unter der Vorwoche", url: "https://aktiencheck.de/artikel/bundesanleihen-wochenbilanz-mit-330-prozent-rendite-sechs-basispunkte-unter-der" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.525–3.538 $ (Angaben uneinheitlich)", change: "-2,2 % bis -3,7 % ggü. Donnerstag", dir: "down", asof: "Schluss Fr 20.11.26 – Angaben zwischen Quellen abweichend", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 3.525 bis 3.540 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Woche", text: "Gold gab trotz des breiten Aktien-Ausverkaufs nach, statt wie sonst üblich als sicherer Hafen zu profitieren." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Mehrere Quellen beschreiben einen breiten Ausverkauf über Anlageklassen hinweg (\"broad metals and equity selloff\"), bei dem Investoren offenbar generell Liquidität suchten statt in Gold auszuweichen."
        ]
      },
      important: [
        { area: "Märkte", text: "Mehr zum breiten Ausverkauf in Meldung 2 und 3.", ref: "s:2" }
      ],
      source: { title: "goldprice.org: Gold Price on 20 November 2026", url: "https://goldprice.org/gold-price-today/2026-11-20" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 92,6 $", change: "+0,64 % ggü. Donnerstag, aber -3,41 % Wochenverlust – dritte Verlustwoche in Folge", dir: "down", asof: "Schluss Fr 20.11.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte.",
      compare: [
        { label: "WTI", text: "Die US-Sorte WTI notierte bei rund 83,4 Dollar je Barrel; zwischenzeitlich war Brent am Freitag bis auf rund 90 Dollar gefallen." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Trotz eskalierender Tankerangriffe am Golf (mehr in Meldung 10) fiel der Ölpreis auf Wochensicht, weil die tatsächlichen Öltransporte durch die Straße von Hormus laut Berichten nahezu auf Vorkriegsniveau liegen; die IEA erwartet für 2027 einen größeren globalen Angebotsüberschuss (mehr in Meldung 15)."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Eskalation am Golf in Meldung 10.", ref: "s:10" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "CNBC: Oil prices set for third straight weekly decline on Middle East export flows", url: "https://www.cnbc.com/2026/11/20/oil-wti-brent-hormuz.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 58.900–59.400 $", change: "+5,68 % binnen 24 Stunden (Erholung), aber ≈ -9 bis -10 % Wochenverlust", dir: "up", asof: "Stand So 22.11.26, Vormittag/Mittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet aktuell zwischen rund 58.900 und 59.400 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Woche", text: "Bitcoin stand am 15.11. noch über 65.000 Dollar; der breite Risiko-Ausverkauf erfasste damit auch Kryptowährungen, bevor sich der Kurs am Wochenende leicht erholte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der breite Ausverkauf von Risikoanlagen in dieser Woche belastete Bitcoin wie Aktien; die Erholung am Sonntag beschreiben Berichte als Gegenbewegung nach dem Wochentief."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinCodex: Daily Market Update, November 22, 2026", url: "https://coincodex.com/article/95777/daily-market-update-for-november-22-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 WOCHENSCHLUSS */
    {
      id: "markets-dax-eurostoxx-wochenschluss-11-20", cats: ["markets"], when: "Schluss Fr 20.11.2026",
      headline: "DAX verbucht größten Wochenverlust seit April 2025, Euro Stoxx 50 gibt ähnlich stark nach",
      sec30: "Der DAX fiel am Freitag um 2,60 % auf 24.802,78 Punkte und verzeichnete damit einen Wochenverlust von 7,28 % – den größten seit April 2025. Der Euro Stoxx 50 gab je nach Quelle zwischen 2,64 % und 2,81 % auf rund 5.942 bis 5.952 Punkte nach, auf Wochensicht ein Minus von 6,84 %. Als Hintergrund nennen Berichte einen breiten, von Sorgen um die KI-Finanzierung ausgelösten Ausverkauf, der auch deutsche Technologiewerte wie Infineon (-7,9 %) und Aixtron (-9,5 %) traf.",
      blocks: [
        { h: "Wie entwickelte sich der DAX diese Woche?", items: [
          { tag: "fakt", text: "Der DAX schloss am Freitag bei 24.802,78 Punkten, ein Rückgang von 2,60 % gegenüber Donnerstag. Auf die Woche gerechnet verlor der Index 7,28 % – laut Berichten der größte Wochenverlust seit April 2025.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Wie entwickelte sich der Euro Stoxx 50?", items: [
          { tag: "unbestaetigt", text: "Der Euro Stoxx 50 fiel laut unterschiedlichen Quellen zwischen 2,64 % und 2,81 % auf rund 5.942 bis 5.952 Punkte; der Wochenverlust lag bei rund 6,84 %. Die genaue Schlusszahl lässt sich aus den ausgewerteten Quellen nicht einheitlich bestimmen.",
            ask: [{ label: "Mehr zu den US-Indizes", ref: "s:2" }] }
        ]},
        { h: "Was nennen Berichte als Hintergrund?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen den Ausverkauf auf Zweifel an der Finanzierbarkeit des KI-Infrastrukturbooms zurück, verstärkt durch eine SEC-Ermittlung zu Nvidias Bilanzierungspraktiken, neue US-Exportbeschränkungen für KI-Chips und die Nachwirkungen des Rücktritts von Nvidia-Chef Jensen Huang (mehr in Meldung 14). Dass auch europäische Technologiewerte wie Infineon und Aixtron deutlich verloren, zeigt laut Beobachtern, wie eng die europäischen Börsen inzwischen an die US-Technologiewerte gekoppelt sind.",
            ask: [{ label: "Vom Zins zu den Märkten", ref: "chain:nasdaq-why" }] }
        ]}
      ],
      reaction: "US-Indizes in Meldung 2, Gold/Bitcoin/Euro/Renditen in Meldung 3, Nvidia und Anthropic ausführlich in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "marketscreener.de: XETRA-SCHLUSS – DAX-Ausverkauf gewinnt an Fahrt, 25.000er-Marke fällt", url: "https://de.marketscreener.com/boerse-nachrichten/xetra-schluss-dax-ausverkauf-gewinnt-an-fahrt-25-000er-marke-faellt-ce785ed3da80f222" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 falls 2.64 percent as AI selloff caps weak week", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-falls-2-64-prozent-as-ai-selloff-caps-weak-week/70540943" },
        { title: "Edge Consultancy: Europe Market Wrap, 20 November 2026", url: "https://edgeconsultancykw.com/europe-market-wrap-20-november-2026/" }
      ]
    },
    /* 2 MÄRKTE: US-INDIZES KORREKTUR */
    {
      id: "markets-us-indizes-korrektur-ki-ausverkauf-11-20", cats: ["markets"], when: "Schluss Fr 20.11.2026",
      headline: "S&P 500 und Dow Jones rutschen in die Korrekturzone, Nasdaq verzeichnet größten Wocheneinbruch seit über sechs Jahren",
      sec30: "Der S&P 500 fiel am Freitag um 3,70 % auf 6.910,39 Punkte, ein Wochenverlust von 8,6 % – der Index gilt damit laut Berichten als in der Korrekturzone. Die Nasdaq Composite verlor 5,28 % auf 22.617,73 Punkte, binnen der Woche rund 10 % – der größte Wocheneinbruch seit über sechs Jahren, der das Jahr 2026 für den Index ins Minus drehte. Der Dow Jones fiel um 1,93 % (-949,73 Punkte) auf 48.147,33 Punkte, ein Wochenverlust von 8 % – die schlechteste Woche seit März 2020.",
      blocks: [
        { h: "Wie schlossen die US-Indizes am Freitag?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 3,70 % auf 6.910,39 Punkte, die Nasdaq Composite um 5,28 % auf 22.617,73 Punkte, der Dow Jones um 1,93 % (-949,73 Punkte) auf 48.147,33 Punkte. Auf Wochensicht verloren S&P 500 und Dow Jones jeweils rund 8 bis 8,6 %, die Nasdaq rund 10 %.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Warum gilt das als Korrektur?", items: [
          { tag: "einordnung", text: "Als Korrektur bezeichnen Marktbeobachter einen Rückgang von mehr als 10 % gegenüber dem jeweiligen Rekordhoch. S&P 500 und Dow Jones erreichten diese Marke laut Berichten in dieser Woche; die Nasdaq drehte zusätzlich für das Gesamtjahr 2026 ins Minus.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was nennen Berichte als Auslöser?", items: [
          { tag: "einordnung", text: "Berichte führen den Ausverkauf auf eine Kombination zurück: Zweifel an der Finanzierbarkeit des KI-Infrastrukturbooms, eine neue US-Exportregel vom 16.11., die den Remote-Zugriff chinesischer Firmen auf US-KI-Chips lizenzpflichtig macht, sowie eine SEC-Ermittlung zu Nvidias Bilanzierungspraktiken (mehr in Meldung 14). Mehrere Chip-Zulieferer wie Micron, Intel und TSMC gaben laut Berichten zwischen 6 und 8 % nach.",
            ask: [{ label: "Mehr zu Nvidia und Anthropic", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich drei große US-Indizes binnen einer Woche in Korrektur- bzw. Negativterritorium rutschen, zeigt laut Beobachtern, wie stark die Marktstimmung 2026 von der Bewertung einzelner KI-Unternehmen abhängt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "DAX und Euro Stoxx 50 in Meldung 1, Gold/Bitcoin/Euro/Renditen in Meldung 3, Nvidia und Anthropic ausführlich in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/11/19/stock-market-today-live-updates.html" },
        { title: "UPI: Dow, S&P 500 enter correction territory", url: "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/" },
        { title: "The Motley Fool: Why Nvidia stock is down today", url: "https://www.fool.com/investing/2026/11/20/why-nvidia-stock-is-down-today/" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/RENDITEN */
    {
      id: "markets-gold-bitcoin-eurusd-renditen-11-22", cats: ["markets"], when: "Schluss Fr 20.11.2026 · Bitcoin Stand So 22.11.2026",
      headline: "Gold gibt trotz Aktien-Ausverkauf nach, Bitcoin erholt sich nach Wochentief, US-Rendite fällt fünften Tag in Folge",
      sec30: "Der Goldpreis fiel am Freitag um 2,2 bis 3,7 % auf rund 3.525 bis 3.538 Dollar je Feinunze – ungewöhnlich, da Gold in unsicheren Zeiten meist gefragter wird. Bitcoin stand am 15.11. noch über 65.000 Dollar, fiel im Wochenverlauf um rund 9 bis 10 %, erholte sich aber bis Sonntagmittag um 5,68 % binnen 24 Stunden auf rund 58.900 bis 59.400 Dollar. Der Euro notierte stabil bei rund 1,097 Dollar. Die Rendite zehnjähriger US-Staatsanleihen fiel den fünften Tag in Folge auf rund 4,92 %, da Anleger angesichts des Aktien-Ausverkaufs verstärkt in Staatsanleihen auswichen.",
      blocks: [
        { h: "Warum fiel Gold trotz des Aktien-Ausverkaufs?", items: [
          { tag: "unbestaetigt", text: "Mehrere Quellen beschreiben einen breiten Ausverkauf über Anlageklassen hinweg, bei dem Investoren offenbar generell Liquidität suchten statt in Gold als sicheren Hafen auszuweichen. Die genaue Gewichtung der Gründe lässt sich aus den ausgewerteten Quellen nicht abschließend auflösen.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }] }
        ]},
        { h: "Wie entwickelte sich Bitcoin?", items: [
          { tag: "fakt", text: "Bitcoin notierte am 15.11. noch über 65.000 Dollar, fiel im Wochenverlauf um rund 9 bis 10 % und stand am Sonntagmittag, 22.11., bei rund 58.900 bis 59.400 Dollar – ein Plus von 5,68 % binnen 24 Stunden gegenüber dem Wochentief.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Wie entwickelten sich Euro und US-Rendite?", items: [
          { tag: "fakt", text: "Der Euro notierte stabil bei rund 1,097 Dollar. Die Rendite zehnjähriger US-Staatsanleihen fiel den fünften Tag in Folge auf rund 4,92 %, die Bund-Rendite auf rund 3,30 % (-6 Basispunkte zur Vorwoche).",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Rendite von Staatsanleihen fällt, während Aktien einbrechen, passt zum klassischen Muster einer Flucht in sichere Häfen. Dass Gold dabei nicht wie sonst profitierte, deutet laut Beobachtern auf eine Phase hin, in der generell Liquidität gesucht wurde statt gezielt in einzelne sichere Anlagen. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX/Euro Stoxx 50 in Meldung 1, US-Indizes in Meldung 2, die Fed-Zinsdebatte in Meldung 4, die EZB in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "goldprice.org: Gold Price on 20 November 2026", url: "https://goldprice.org/gold-price-today/2026-11-20" },
        { title: "journalarta.com: Gold Price Today – Bullion Drops 3.71% to $3,530.75 in Broad Metals and Equity Selloff", url: "https://journalarta.com/en/2026/11/20/gold-price-today-bullion-drops-3-71-to-3530-75-in-broad-metals-and-equity-selloff/" },
        { title: "CoinCodex: Daily Market Update, November 22, 2026", url: "https://coincodex.com/article/95777/daily-market-update-for-november-22-2026/" },
        { title: "ETF Trends: Treasury Yields Snapshot, November 20, 2026", url: "https://www.etftrends.com/fixed-income-content-hub/treasury-yields-snapshot-november-20-2026/" }
      ]
    },
    /* 4 WIRTSCHAFT: FED-DEZEMBER-DEBATTE */
    {
      id: "fed-dezember-zinsdebatte-warsh-waller-fedwatch-11-20", cats: ["economy"], when: "Stand 20.11.2026 · nächste Fed-Entscheidung 9./10.12.2026",
      headline: "Am Terminmarkt gilt eine Fed-Zinserhöhung im Dezember inzwischen fast als sicher, Waller fordert größeren Schritt",
      sec30: "Die von CME FedWatch berechnete Wahrscheinlichkeit für eine Fed-Zinserhöhung im Dezember stieg laut Berichten von 67 % am 5.11. auf nahezu 100 % am 16.11. – getrieben von einem stärker als erwarteten Oktober-Jobsbericht. Fed-Gouverneur Christopher Waller bekräftigte zuletzt seine Forderung nach einem Schritt um 50 Basispunkte, sollte die Fed nicht klar auf Januar verweisen. Fed-Chef Kevin Warsh bestätigte erneut, dass die Fed ab 2027 nur noch sieben statt acht Zinsentscheide pro Jahr treffen wird. Der Leitzins liegt aktuell bei 3,75 bis 4,00 %.",
      blocks: [
        { h: "Wie hoch ist die am Terminmarkt eingepreiste Wahrscheinlichkeit für Dezember?", items: [
          { tag: "fakt", text: "Die von CME FedWatch berechnete Wahrscheinlichkeit für eine Zinserhöhung um 25 Basispunkte bei der Sitzung am 9./10.12. stieg laut einer Quelle von 67 % am 5.11. auf nahezu 100 % am 16.11. – ausgelöst durch einen stärker als erwarteten Oktober-Jobsbericht mit 165.000 neuen Stellen.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was fordert Waller, und was sagt das FOMC-Protokoll?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller bekräftigte zuletzt seine bereits aus dem FOMC-Protokoll vom 18.11. bekannte Position, die Fed könnte im Dezember einen Schritt um 50 Basispunkte benötigen, falls sie nicht klar signalisiere, im Januar erneut zu erhöhen. Laut dem Protokoll der Oktober-Sitzung hielt die Fed den Leitzins mit 10 zu 2 Stimmen bei 3,75 bis 4,00 %; die zwei abweichenden Mitglieder hatten für eine sofortige Erhöhung gestimmt.",
            ask: [{ label: "Was ist ein Basispunkt?", ref: "t:basispunkt" }] }
        ]},
        { h: "Was bestätigte Fed-Chef Warsh erneut?", items: [
          { tag: "fakt", text: "Fed-Chef Kevin Warsh bestätigte in einer Rede am 20.11., dass die Fed ab 2027 eine der acht jährlichen Sitzungen zu einer reinen Strategiesitzung ohne Zinsabstimmung macht, ab 2028 sollen es zwei sein – laut Berichten Teil einer strukturellen Reform, mit der Fed-Mitglieder künftig seltener öffentlich Stellung nehmen sollen.",
            ask: [{ label: "Warum erhöhen Notenbanken die Zinsen?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet das im Zusammenhang mit dem Aktien-Ausverkauf?", items: [
          { tag: "einordnung", text: "Dass die Fed trotz des breiten Aktien-Ausverkaufs dieser Woche weiterhin auf eine Zinserhöhung im Dezember zusteuert, zeigt laut Beobachtern, dass sich die Notenbank an Konjunktur- und Arbeitsmarktdaten orientiert und nicht an kurzfristigen Kursbewegungen. Ein im November final veröffentlichter Index der University of Michigan zum Verbrauchervertrauen stieg auf 51,5 Punkte (Oktober: 48,0), die Inflationserwartungen für ein Jahr sanken auf 3,7 % (Vormonat: 4,7 %).",
            ask: [{ label: "Mehr zu den US-Indizes", ref: "s:2" }] }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1 bis 3, zur EZB-Zinsdebatte in Meldung 5, zu weiteren Konjunkturdaten in Meldung 6.",
      terms: ["inflation", "kerninflation", "leitzins", "basispunkt"],
      followups: ["e:inflation-what", "e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "ABA Banking Journal: FOMC minutes show close call over possible rate hike", url: "https://bankingjournal.aba.com/2026/11/fomc-minutes-show-close-call-over-possible-rate-hike/" },
        { title: "The Motley Fool: There's now a 100% chance of a Fed rate hike in December", url: "https://www.fool.com/investing/2026/11/16/theres-now-100-chance-fed-rate-hike-in-december-thats-not-worst-news-for-wall-street/" },
        { title: "GuruFocus: Fed's Waller Raises the Stakes for December Rate Bets", url: "https://www.gurufocus.com/news/9207708/feds-waller-raises-the-stakes-for-december-rate-bets" },
        { title: "CNBC: Warsh wants Fed officials to talk less", url: "https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html" },
        { title: "Rio Times: US Inflation Fear Eases to 3.7% in November", url: "https://www.riotimesonline.com/united-states-michigan-inflation-expectations-november-2026/" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB-DEZEMBER-DEBATTE/LAGARDE-NACHFOLGE */
    {
      id: "ezb-dezember-zinsdebatte-lagarde-nachfolge-knot-de-cos-11-21", cats: ["economy"], when: "Stand 21.11.2026 · EZB-Entscheidung 17.12.2026 · EU-Gipfel 17./18.12.2026",
      headline: "EZB-Terminmarkt preist Dezember-Zinserhöhung mit rund 91 % Wahrscheinlichkeit ein, Knot weigert sich weiterhin, Kandidatur zurückzuziehen",
      sec30: "Vor der EZB-Sitzung am 17.12. preist der Terminmarkt laut Berichten eine Zinserhöhung um 25 Basispunkte (Einlagensatz von 2,50 auf 2,75 %) mit rund 91 % Wahrscheinlichkeit ein. Bei der Nachfolge von EZB-Chefin Christine Lagarde weigert sich der Niederländer Klaas Knot laut einem Bericht vom 21.11. weiterhin, seine Kandidatur zurückzuziehen, obwohl Deutschland, Frankreich und laut neueren Berichten auch Italien sich inzwischen auf den Spanier Pablo Hernández de Cos verständigt haben sollen. Eine Entscheidung wird beim EU-Gipfel am 17./18.12. erwartet.",
      blocks: [
        { h: "Wie hoch ist die eingepreiste Wahrscheinlichkeit für die EZB-Zinserhöhung?", items: [
          { tag: "fakt", text: "Der Terminmarkt preist laut Berichten eine Erhöhung des EZB-Einlagensatzes von 2,50 auf 2,75 % bei der Sitzung am 17.12. mit rund 91 % Wahrscheinlichkeit ein.",
            ask: [{ label: "Warum erhöhen Notenbanken die Zinsen?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie steht es um Lagardes Nachfolge?", items: [
          { tag: "unbestaetigt", text: "Klaas Knot weigert sich laut einem Bericht vom 21.11. weiterhin, sich aus dem Rennen zurückzuziehen, trotz Berichten vom 16.11., er stehe kurz davor. Pablo Hernández de Cos hat laut Berichten vom 21.11. inzwischen die Unterstützung Deutschlands, Frankreichs und Italiens – damit rechnerisch eine Mehrheit im EZB-Rat, auch wenn die niederländische Seite betont, Knot bleibe im Rennen. Eine endgültige Entscheidung soll beim EU-Gipfel am 17./18.12. fallen.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass EZB und Fed nahezu gleichzeitig im Dezember über weitere Zinserhöhungen entscheiden könnten, während sich die EZB-Führung personell neu sortiert, erhöht laut Beobachtern die Unsicherheit darüber, wie die Zinspolitik im Euroraum über das Jahr 2026 hinaus fortgesetzt wird – insbesondere angesichts des parallel laufenden Aktien-Ausverkaufs (mehr in Meldung 1 bis 3)." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte in Meldung 4, zu deutschen und europäischen Konjunkturdaten in Meldung 6.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "admiralmarkets.com: EZB-Zinsentscheid Dezember 2026 – Preview", url: "https://admiralmarkets.com/analytics/traders-blog/ecb-rate-decision-december-2026-preview" },
        { title: "mundiario.com: Knot se niega a capitular – bloqueo holandés retrasa desembarco de de Cos en el BCE", url: "https://www.mundiario.com/economia/knot-niega-capitular-bloqueo-holandes-retrasa-desembarco-cos-bce/20261121110502454161.html" },
        { title: "Newsquawk: Former ECB's Knot – Netherlands is expected to withdraw from the race for the ECB presidency this week", url: "https://www.newsquawk.com/headlines/former-ecbs-knot-netherlands-is-expected-to-withdraw-from-the-race-for-the-ecb-presidency-this-week-with-his-chances-minimal-now-that-germany-and-france-have-agreed-in-principle-that-spains-de-cos-should-lead-the-ecb-reports-de-volkskrant" }
      ]
    },
    /* 6 WIRTSCHAFT: PMI NOVEMBER DEUTSCHLAND/EUROZONE */
    {
      id: "pmi-november-deutschland-eurozone-industrie-schwaeche-11-21", cats: ["economy", "germany"], when: "Flash-PMI November veröffentlicht 21.11.2026",
      headline: "Deutscher Industrie-PMI fällt auf Zehn-Monats-Tief, Eurozone-Industrie erstmals seit fast drei Jahren mit steigenden Einkaufspreisen",
      sec30: "Der vorläufige Einkaufsmanagerindex (PMI) für die deutsche Industrie fiel im November auf 47,0 Punkte – ein Zehn-Monats-Tief; der Produktionsindex sank auf 48,3 Punkte, ein Elf-Monats-Tief. Für die Eurozone fiel der Industrie-PMI auf 49,6 Punkte (Fünf-Monats-Tief), der Output-Index auf 50,4 Punkte (Neun-Monats-Tief). Laut S&P Global stiegen die Einkaufspreise der deutschen Industrie erstmals seit fast drei Jahren wieder an.",
      blocks: [
        { h: "Was zeigt der deutsche Industrie-PMI?", items: [
          { tag: "fakt", text: "Der deutsche Industrie-PMI fiel im November auf 47,0 Punkte – ein Zehn-Monats-Tief (Werte unter 50 zeigen Kontraktion an). Der Produktionsindex sank auf 48,3 Punkte, ein Elf-Monats-Tief.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "e:index-move" }] }
        ]},
        { h: "Was zeigt der Einkaufsmanagerindex für die Eurozone?", items: [
          { tag: "fakt", text: "Der vorläufige Industrie-PMI für die Eurozone lag bei 49,6 Punkten (Fünf-Monats-Tief), der Output-Index bei 50,4 Punkten (Neun-Monats-Tief). Laut S&P Global stiegen die Einkaufspreise der deutschen Industrie dabei erstmals seit fast drei Jahren wieder an.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Industrie-PMIs in Deutschland und der Eurozone weiter sinken, während gleichzeitig die Einkaufspreise erstmals seit fast drei Jahren steigen, deutet laut Beobachtern auf eine schwierige Gemengelage hin: schwache Nachfrage trifft auf steigende Kosten. Das fällt zeitlich mit der Debatte über eine weitere EZB-Zinserhöhung im Dezember zusammen (mehr in Meldung 5).",
            ask: [{ label: "Mehr zur EZB-Zinsdebatte", ref: "s:5" }] }
        ]}
      ],
      reaction: "Mehr zur EZB-Zinsdebatte in Meldung 5, zur Fed-Zinsdebatte in Meldung 4.",
      terms: ["inflation"],
      followups: ["e:inflation-what", "e:inflation-expectations"],
      sources: [
        { title: "S&P Global PMI: Pressemitteilung Flash PMI Eurozone/Deutschland November 2026", url: "https://www.pmi.spglobal.com/Public/Home/PressRelease/bdf991dcb0d348468ee4d7aa7c5740d2" }
      ]
    },
    /* 7 DEUTSCHLAND: BUNDESHAUSHALT 2027/STROMSTEUER-FINANZIERUNG */
    {
      id: "bundeshaushalt-2027-schlussabstimmung-stromsteuer-finanzierung-11-21", cats: ["germany"], when: "Haushaltswoche Bundestag 24.–27.11.2026 · Schlussabstimmung geplant 27.11.2026",
      headline: "Bundeshaushalt 2027 vor Schlussabstimmung im Bundestag, Gegenfinanzierung der Stromsteuersenkung über 2027 hinaus weiter offen",
      sec30: "Der Bundestag berät den Bundeshaushalt 2027 in der Woche vom 24. bis 27.11. in zweiter und dritter Lesung; die namentliche Schlussabstimmung ist für Freitag, 27.11., ab rund 12:40 Uhr vorgesehen. Die Gesamtausgaben liegen bei 560,92 Mrd. Euro, die Gesamtneuverschuldung bei rund 210 Mrd. Euro. Offen bleibt, wie die zuvor beschlossene Stromsteuersenkung über das Jahr 2027 hinaus gegenfinanziert werden soll; SPD und Union diskutieren dazu unterschiedliche Optionen.",
      blocks: [
        { h: "Was wurde beschlossen und was ändert sich konkret?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss billigte einen Bundeshaushalt 2027 mit 560,92 Mrd. Euro Ausgaben (+6,9 % ggü. 2026) und einer Gesamtneuverschuldung von rund 210 Mrd. Euro, davon 122,97 Mrd. Euro Kreditaufnahme im Kernhaushalt. Die für die Schuldenbremse relevante Kreditaufnahme liegt bei 38,43 Mrd. Euro – exakt an der zulässigen Obergrenze. Größter Einzeletat ist Arbeit und Soziales mit 203,29 Mrd. Euro, der Verkehrsetat wurde um 1,08 Mrd. auf 25,35 Mrd. Euro gekürzt. Für die Folgejahre weisen interne Planungen Finanzlücken von zusammen rund 108 Mrd. Euro aus (2028: 22,4 Mrd., 2029: 38,8 Mrd., 2030: 47,4 Mrd. Euro).",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Warum ist die Gegenfinanzierung der Stromsteuersenkung noch offen?", items: [
          { tag: "fakt", text: "Die zuvor beschlossene Senkung der Stromsteuer auf den EU-Mindestsatz zum 1.1.2027 ist bislang nur für das Jahr 2027 über Rücklagen des EEG-Kontos gesichert; dem Bund entgehen dadurch rund 5,4 Mrd. Euro jährlich. Für die Zeit danach diskutieren SPD und Union unterschiedliche Optionen, darunter den Klima- und Transformationsfonds oder eine von der SPD vorgeschlagene Erhöhung der Kapitalertragsteuer von 25 auf rund 30 %, die die Union ablehnt.",
            ask: [{ label: "Was ist eine Umlage?", ref: "t:umlage" }] }
        ]},
        { h: "Wer kritisiert die Haushaltsplanung und womit?", items: [
          { tag: "position", text: "Der Grünen-Haushaltsexperte Sebastian Schäfer bezeichnete den Haushalt als „Bretterbude ohne Fundament”. Linken-Politiker Dietmar Bartsch warnte vor einem „Irrgarten aus Schulden, Tricks und Verschiebungen”. Der Bundesrechnungshof hatte bereits im September vor einer „Schuldenfalle” gewarnt, der Sachverständigenrat sprach von einem „Blick in den Abgrund”.",
            ask: [{ label: "Was bedeutet die Schuldenbremse konkret?", ref: "e:debt-brake" }] }
        ]},
        { h: "Wer verteidigt die Haushaltsplanung und womit?", items: [
          { tag: "position", text: "SPD-Haushälter Rudolph sagte zur Haushaltsaufstellung, man spare, „damit der Haushalt aufgeht”. Vizekanzler Lars Klingbeil hatte eine Senkung der Stromsteuer zuvor an eine „seriöse” Gegenfinanzierung geknüpft und „finanzpolitische Experimente” ausgeschlossen." }
        ]},
        { h: "Welche weiteren Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Parallel setzt sich die Bundesregierung laut Berichten im künftigen EU-Finanzrahmen (2028–2034) dafür ein, dass höhere Ukraine-Hilfen künftig per qualifizierter Mehrheit statt per Veto-Einstimmigkeit beschlossen werden können; die AfD-Fraktion kritisierte dies als Schritt zu einer „uferlosen Schuldenunion” und forderte den Erhalt des Vetorechts. Nach der Bundestagsabstimmung befasst sich anschließend der Bundesrat mit dem Haushalt.",
            ask: [{ label: "Mehr zur Rentenreform und den Umfragen", ref: "s:8" }] }
        ]}
      ],
      reaction: "Mehr zur Rentenreform und den aktuellen Umfragen in Meldung 8.",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Bundestag.de: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "aktiencheck.de: Bundeshaushalt 2027 – Koalitionsausschuss ringt um die Lücken", url: "https://aktiencheck.de/artikel/bundeshaushalt-2027-koalitionsausschuss-ringt-heute-um-die-luecken-bundestag" },
        { title: "aktiencheck.de: Bundeshaushalt 2027 – 561 Milliarden Euro, 123 Milliarden neue Schulden", url: "https://aktiencheck.de/artikel/bundeshaushalt-2027-561-milliarden-euro-123-milliarden-neue-schulden-110" },
        { title: "onvista: Deutschland will im neuen EU-Finanzrahmen Vetos gegen höhere Ukraine-Hilfe verhindern", url: "https://www.onvista.de/news/2026/11-19-deutschland-will-im-neuen-eu-finanzrahmen-vetos-gegen-hoehere-ukraine-hilfe-verhindern-0-20-26578313" }
      ]
    },
    /* 8 DEUTSCHLAND: RENTENREFORM-KOMPROMISS/UMFRAGEN */
    {
      id: "rentenreform-kompromiss-umfragen-afd-union-11-21", cats: ["germany"], when: "Kabinettsentscheidung geplant 9. oder 16.12.2026 · Umfragen 17.–21.11.2026",
      headline: "Koalition diskutiert Kompromissvarianten zur Rentenreform, Umfragen sehen AfD weiterhin klar vor der Union",
      sec30: "Für die Rentenreform diskutiert die Koalition verschiedene Kompromissvarianten zur Anrechnung von Arbeitslosigkeits-, Pflege- und Kindererziehungszeiten auf die abschlagsfreie Rente nach 45 Beitragsjahren; die Kabinettsentscheidung ist weiterhin für den 9. oder 16. Dezember vorgesehen. Aktuelle Umfragen von INSA, Forsa und YouGov sehen die AfD zwischen 26 und 29 %, die Union zwischen 19 und 21 %. Parallel fanden an mehreren Orten in Deutschland Demonstrationen gegen die AfD statt.",
      blocks: [
        { h: "Was wird bei der Rentenreform diskutiert und was bleibt offen?", items: [
          { tag: "fakt", text: "Die Kabinettsentscheidung über die „Rente mit 63” ist weiterhin für den 9. oder 16. Dezember vorgesehen. Nach einem Bericht soll die abschlagsfreie Rente nach 45 Beitragsjahren grundsätzlich erhalten bleiben, aber Kindererziehungs- und Pflegezeiten sollen künftig nicht mehr oder nur eingeschränkt angerechnet werden; ein anderer Bericht nennt dagegen Arbeitslosigkeits- und Pflegezeiten als nicht mehr anrechenbar, Kindererziehungszeiten dagegen weiterhin anerkannt. Welche Variante sich durchsetzt, ist noch nicht entschieden.",
            ask: [{ label: "Mehr zur Rentenreform", ref: "e:rente-basics" }] }
        ]},
        { h: "Wer unterstützt welche Position und womit?", items: [
          { tag: "position", text: "Die CSU fordert zusätzlich, den Abschlag bei vorzeitigem Rentenbeginn von 0,3 auf 0,4 Prozent pro Monat zu erhöhen. Kanzleramtschef Thorsten Frei (CDU) lehnt laut Berichten jeden Kompromiss zur Abschaffung der Regelung ab und sieht dafür keinen Verhandlungsspielraum. Bundesarbeitsminister Alexander Schweitzer (SPD) strebt einen „guten Kompromiss” an und hatte sich zuvor gegen eine Abschaffung der Rente mit 63 ausgesprochen; Mecklenburg-Vorpommerns Ministerpräsidentin Manuela Schwesig (SPD) sagte, Menschen mit 45 Einzahlungsjahren dürften „nicht bestraft werden”.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Welche Alternative wird diskutiert?", items: [
          { tag: "unbestaetigt", text: "Die Alterssicherungskommission schlägt alternativ eine „Schutzrente” vor: abschlagsfrei erst ab 35 Beitragsjahren und frühestens zwei Jahre vor der Regelaltersgrenze. Eine DIW-Studie zum Jahrgang 1957 bezifferte die mögliche Brutto-Entlastung durch eine Abschaffung der bisherigen Regelung auf 10,4 Mrd. Euro, netto für die öffentlichen Haushalte auf 9,5 Mrd. Euro, mit potenziell rund 125.000 zusätzlichen Vollzeitstellen." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Aktuelle Umfragen von INSA (21.11., 28 %), Forsa (10.–16.11., 26 %) und YouGov (13.–16.11., 29 %) sehen die AfD weiterhin klar vor der Union (19 bis 21 %) – die aktuelle Koalition hätte danach weiterhin keine Bundestagsmehrheit. Beobachter sehen darin einen Grund für den Einigungsdruck auf Union und SPD bei Rente und Haushalt. Zwischen dem 18. und 21.11. fanden an mehreren Orten in Deutschland Demonstrationen gegen die AfD statt, unter anderem in Achern, München, Nürtingen, Düren, Braunschweig, Papenburg und Bad Oldesloe.",
            ask: [{ label: "Mehr zum Bundeshaushalt 2027", ref: "s:7" }] }
        ]}
      ],
      reaction: "Mehr zum Bundeshaushalt 2027 und der Stromsteuer-Finanzierung in Meldung 7.",
      terms: ["koalition", "schuldenbremse"],
      followups: ["e:rente-basics", "e:coalition-majority", "e:debt-brake", "e:landtagswahl-why"],
      sources: [
        { title: "cash-online.de: Rentenreform und Rente mit 63 – Koalition vertagt Entscheidung", url: "https://www.cash-online.de/a/rentenreform-und-rente-mit-63-koalition-vertagt-entscheidung-730788/" },
        { title: "t-online.de: Rente mit 63 – Arbeitsminister Alexander Schweitzer strebt Kompromiss an", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101485570/rente-mit-63-arbeitsminister-alexander-schweitzer-strebt-kompromiss-an.html" },
        { title: "Berliner Kurier: Neuer Plan für „Rente mit 63” – Union bringt Kompromiss ins Spiel", url: "https://www.berliner-kurier.de/article/rente-mit-63-kompromiss-union-spd-10513426" },
        { title: "dawum.de: INSA, Erhebung 16.–20.11.2026", url: "https://dawum.de/Bundestag/INSA/2026-11-21/" },
        { title: "kurierverlag.de: Neue Forsa-Sonntagsfrage – AfD baut Führung vor Union aus", url: "https://www.kurierverlag.de/politik/neue-forsa-sonntagsfrage-afd-vor-union-spd-stuerzt-ab-zr-94595328.html" }
      ]
    },
    /* 9 GEOPOLITIK: UKRAINE-DIPLOMATIE BERLIN/KUSHNER/SELENSKYJ */
    {
      id: "ukraine-diplomatie-berlin-kushner-selenskyj-kertsch-11-21", cats: ["world", "geo"], when: "Berlin-Treffen 19./21.11.2026 · weitere Kertsch-Angriffe 15.–17.11.2026",
      headline: "Berlin-Gipfel der „Koalition der Willigen”: Kushner sieht Russland offen für NATO-ähnliche Garantien, Selenskyj wartet auf schriftliche Zusagen",
      sec30: "Beim Treffen der „Koalition der Willigen” in Berlin sagte US-Vermittler Jared Kushner, Russland sei mit dem Konzept auf Artikel 5 gestützter Sicherheitsgarantien für die Ukraine „comfortable”. Präsident Wolodymyr Selenskyj erklärte am 21.11., er habe dazu bislang keine schriftlichen Zusagen gesehen. Zuvor hatte Selenskyj Wladimir Putin nach dessen Shenzhen-Treffen mit Trump und Xi öffentlich als „Mörder” bezeichnet, nachdem Trump Putin bei der Begrüßung als „Freund” bezeichnet hatte. Die EU-Kommission schlug zudem einen zusätzlichen 45-Mrd.-Euro-Kredit für die Ukraine vor.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Am 19. und 21.11. trafen sich Vertreter der „Koalition der Willigen” in Berlin, um über Sicherheitsgarantien für die Ukraine zu beraten. US-Vermittler Jared Kushner sagte dabei, Russland sei mit dem Konzept auf Artikel 5 gestützter Garantien „comfortable”. Selenskyj erklärte am 21.11., er habe dazu noch keine schriftlichen Zusagen gesehen." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Eine NATO-ähnliche, auf Artikel 5 gestützte Sicherheitsgarantie gilt als eine der zentralen ukrainischen Forderungen für ein mögliches Kriegsende. Dass Kushner von russischer „Comfort” mit dem Konzept spricht, wäre laut Beobachtern ein Fortschritt – solange es aber keine schriftliche Zusage gibt, bleibt unklar, wie belastbar diese Aussage ist.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:10" }] }
        ]},
        { h: "Wer ist beteiligt und was wurde gesagt?", items: [
          { tag: "position", text: "Jared Kushner sagte auf einer Pressekonferenz in Berlin: Russland sei mit dem Konzept, dass jede Sicherheitsgarantie für die Ukraine auf Artikel 5 basiere, „comfortable”. Selenskyj sagte Journalisten gegenüber, er habe dazu bislang keine schriftlichen Zusagen gesehen. Nach dem Dreiertreffen von Trump, Xi und Putin in Shenzhen hatte Selenskyj erklärt: „Für uns ist er ein Feind, und natürlich ist er für uns ein Mörder […] weil er tötet.” Er fügte hinzu, wer über Putin wie über einen Freund spreche, vermittle diesem nicht genug Druck. Kreml-Sprecher Dmitry Peskow sagte zur zuvor von der Ukraine beschädigten Kertsch-Brücke, diese werde „wiederaufgebaut werden – und noch besser als zuvor”.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Zwischen dem 15. und 17.11. hatte die Ukraine nach Berichten mehrere Angriffswellen auf die Kertsch-Brücke geführt, bei denen laut russischen Angaben über 1.400 Drohnen abgefangen wurden; der Straßenteil der Brücke wurde dabei beschädigt. Der seit 2022 andauernde Krieg und das Shenzhen-Treffen von Trump, Xi und Putin am Rande des APEC-Gipfels bilden den unmittelbaren Hintergrund dieser diplomatischen Woche." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "unbestaetigt", text: "Die EU-Kommission schlug am 18.11. einen zusätzlichen 45-Mrd.-Euro-Kredit für die Ukraine vor (20 Mrd. Euro Finanzhilfe, 25 Mrd. Euro für Waffenkäufe), rückzahlbar erst nach etwaigen russischen Reparationen – zusätzlich zu einem bereits beschlossenen 90-Mrd.-Euro-Kredit für 2026/27. Eine EU-Diplomatin bestätigte am 21.11., dass die Nutzung eingefrorener russischer Vermögenswerte vorerst nicht zur Debatte stehe, solange der EU-Haushaltsstreit andauert; wie belastbar und wann umsetzbar der neue Kredit ist, lässt sich aus den Quellen nicht abschließend bewerten.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:10" }] }
        ]}
      ],
      reaction: "Mehr zur militärischen Eskalation am Golf in Meldung 10.",
      terms: [],
      followups: ["chain:oil-to-markets"],
      sources: [
        { title: "CNBC: Kushner says Russia comfortable with idea of NATO-like security guarantees", url: "https://cnbc.com/2026/11/20/kushner-ukraine-nato-russia-trump-putin.html" },
        { title: "Kyiv Independent: Zelensky says Ukraine has yet to see written commitments on NATO-style security guarantees", url: "https://kyivindependent.com/zelensky-says-ukraine-has-yet-to-see-written-commitments-on-nato-style-security-guarantees/" },
        { title: "Ukrainska Pravda: Zelenskyy responds to Trump calling Putin his friend – For us, he is an enemy and a killer", url: "https://www.pravda.com.ua/eng/news/2026/11/20/8063867/" },
        { title: "Euronews: Von der Leyen proposes €45bn loan to Ukraine backed by joint debt", url: "https://www.euronews.com/2026/11/18/von-der-leyen-proposes-45bn-loan-to-ukraine-backed-by-joint-debt" },
        { title: "Euromaidan Press: EU ambassador says Russia's frozen assets will stay off the table", url: "https://euromaidanpress.com/2026/11/21/eu-ambassador-says-russias-frozen-assets-will-stay-off-the-table-while-the-bloc-negotiates-its-next-long-term-budget/" }
      ]
    },
    /* 10 GEOPOLITIK: GOLF-ESKALATION/HORMUS */
    {
      id: "golf-eskalation-hormus-bahrain-kuwait-katar-vermittlung-11-21", cats: ["geo", "world"], when: "Angriffe und Tanker-Zwischenfälle 18.–21.11.2026 · katarische Vermittlung 21.11.2026",
      headline: "Iran weitet Angriffe auf Bahrain aus, UKMTO meldet weitere Tanker-Zwischenfälle bei Hormus, Katar vermittelt ohne Durchbruch",
      sec30: "Irans Revolutionsgarde griff nach eigenen Angaben erneut US-Stützpunkte in Bahrain an und beansprucht die Zerstörung zweier US-Patriot-Radaranlagen. Das britische Maritime-Warnsystem UKMTO meldete am 21.11. zwei weitere Tanker-Zwischenfälle nahe Khasab/Oman; unabhängig davon berichtete Irans Marine von einem brennenden Tanker nach einem angeblichen Minentreffer – von Reuters nicht verifiziert. Eine katarische Delegation führte zweistündige Gespräche mit iranischen Vertretern in Teheran, ohne dass es laut Beteiligten bereits zu „formellen” Verhandlungen kam. Golfstaaten und der Golf-Kooperationsrat verurteilten die Angriffe scharf.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Irans Revolutionsgarde griff laut eigenen Angaben weiterhin US-Stützpunkte in Bahrain an (al-Riffa, Awali) und beansprucht die Zerstörung zweier US-Patriot-Radaranlagen. UKMTO meldete am 21.11. zwei Tanker-Zwischenfälle nahe Khasab in Oman, jeweils rund 11 bzw. 17 Seemeilen entfernt, ohne Verletzte." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Die Straße von Hormus ist eine der wichtigsten Öltransportrouten der Welt. Laut einer Analyse sank der Schiffsverkehr durch die Straße zwischen dem 12. und 18.11. um rund 15 % (von 52 auf 37 Tanker pro Tag), während Versicherungsprämien für die Route von rund 0,1 bis 0,25 % auf 3,5 bis 7,5 % stiegen – ein Hinweis auf stark gestiegene wahrgenommene Risiken, auch wenn der Ölpreis selbst zuletzt fiel (mehr in Meldung 15).",
            ask: [{ label: "Mehr zu Öl und Gas", ref: "s:15" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beteiligt sind die USA, Iran sowie die Golfstaaten Bahrain, Kuwait und die Vereinigten Arabischen Emirate. Saudi-Arabiens Außenministerium verurteilte am 22.11. die Angriffe auf eine „zivile Industrieanlage” in Bahrain „in schärfster Form” und erklärte sich mit Bahrain solidarisch. Kuwait bezeichnete die Drohnenangriffe als „flagrante Verletzungen” seiner Souveränität. Der Generalsekretär des Golf-Kooperationsrats, Jasem Mohamed Albudaiwi, machte Iran „verantwortlich für diese Eskalation und ihre Folgen für die regionale Sicherheit”.",
            ask: [{ label: "Was sind Ölfutures?", ref: "t:oil-future" }] }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der aktuelle Krieg zwischen den USA/Israel und Iran läuft seit Ende Februar 2026. Eine katarische Delegation führte am 21.11. zweistündige Gespräche mit iranischen Vertretern in Teheran; Vize-Außenminister Kasem Gharibabadi bezeichnete dies noch nicht als „formelle” Verhandlungen. Irans Außenminister Abbas Araghchi sagte, die Wiedereröffnung der Straße von Hormus sei „nicht schwierig”, wenn die USA „vernünftige Bedingungen” akzeptierten – zugleich sei die Diskussion über eine Öffnung sinnlos, solange Irans Forderungen nicht erfüllt seien. US-Außenminister Marco Rubio bezeichnete Irans Forderungen als „unacceptable”.",
            ask: [{ label: "Mehr zur Ukraine-Diplomatie in Berlin", ref: "s:9" }] }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "unbestaetigt", text: "Irans Marine meldete einen brennenden Tanker östlich der Straße von Hormus nach einem angeblichen Minentreffer; laut Reuters ließ sich das nicht unabhängig verifizieren, auch nicht, ob es sich um dieselben Schiffe handelt wie bei den von UKMTO gemeldeten Vorfällen. Trotz der eskalierenden Angriffe fiel der Brent-Preis auf Wochensicht, weil die tatsächlichen Öltransporte durch die Straße laut Berichten nahezu auf Vorkriegsniveau liegen (mehr in Meldung 15).",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zum Treffen der Koalition der Willigen in Berlin in Meldung 9, zu Öl und Gas in Meldung 15.",
      terms: ["brent", "oil-future"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:brent-wti", "chain:oil-to-markets"],
      sources: [
        { title: "Al Jazeera: What's behind Iran's escalation of attacks in the Gulf?", url: "https://aljazeera.com/news/2026/11/22/whats-behind-irans-escalation-of-attacks-in-the-gulf" },
        { title: "Al Jazeera: Tankers hit in Strait of Hormuz as Iran tightens grip on shipping", url: "https://www.aljazeera.com/news/2026/11/21/tankers-hit-in-strait-of-hormuz-as-iran-tightens-grip-on-shipping" },
        { title: "CNBC: UK maritime agency reports two tanker attacks near Oman's Khasab, UKMTO says", url: "https://www.cnbc.com/amp/2026/11/21/two-tanker-attacks-reported-near-omans-khasab-ukmto-says.html" },
        { title: "Al Jazeera: Iran says held talks with Qatari mediators, urges US to accept conditions", url: "https://www.aljazeera.com/news/2026/11/21/iran-says-held-talks-with-qatari-mediators-urges-us-to-accept-conditions" },
        { title: "Gulf News: Kuwait condemns continued Iranian attacks on UAE, Gulf states", url: "https://gulfnews.com/world/gulf/kuwait-condemns-continued-iranian-attacks-on-uae-gulf-states-1.500476760" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL/RENK/KNDS */
    {
      id: "ruestungsaktien-rheinmetall-renk-knds-friedensdiplomatie-11-20", cats: ["defence"], when: "Schluss Fr 20.11.2026 · SAFE-Antragsfrist 30.11.2026",
      headline: "Rheinmetall-Aktie fällt weiter auf neues 52-Wochen-Tief, RENK ebenfalls auf Jahrestief – Friedensdiplomatie belastet den Sektor",
      sec30: "Die Rheinmetall-Aktie fiel am Freitag um 4,44 % auf 693,40 Euro – ein neues 52-Wochen-Tief und damit rund 65 % unter ihrem Jahreshoch vom Januar 2026 (1.966 Euro). RENK fiel ebenfalls auf ein neues 52-Wochen-Tief von 30,54 Euro. Als Treiber nennen Berichte die Ukraine-Friedensdiplomatie dieser Woche – den Dreiergipfel von Trump, Xi und Putin in Shenzhen sowie das Berlin-Treffen der „Koalition der Willigen” –, die Sorgen vor einem absehbaren Ende des Rüstungsbooms schürte. Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS bleibt weiterhin ohne bestätigte Unterschrift.",
      blocks: [
        { h: "Wie entwickelten sich die Rüstungsaktien?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie fiel am Freitag um 4,44 % (-32,20 Euro) auf 693,40 Euro, das Tagestief lag bei 679,90 Euro – ein neues 52-Wochen-Tief und rund 65 % unter dem Jahreshoch von 1.966 Euro im Januar 2026. RENK fiel ebenfalls auf ein neues 52-Wochen-Tief von 30,54 Euro; die UBS erhöhte zugleich ihre Beteiligung an RENK auf 5,2 %.",
            ask: [{ label: "Mehr zu Rheinmetalls Geschäftsentwicklung", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Berichte führen den Kursverfall auf die Ukraine-Friedensdiplomatie dieser Woche zurück: den Dreiergipfel von Trump, Xi und Putin in Shenzhen am 19.11. und das Treffen der „Koalition der Willigen” unter Beteiligung von Bundeskanzler Merz in Berlin am 21.11. (mehr in Meldung 9). Beide Ereignisse schürten laut Beobachtern Sorgen bei Anlegern, ein mögliches Kriegsende könnte den Rüstungsboom früher als erwartet dämpfen. Analysten von Bank of America und Berenberg hatten ihre Kursziele für Rheinmetall bereits zuvor auf jeweils 900 Euro gesenkt.",
            ask: [{ label: "Mehr zur Ukraine-Diplomatie", ref: "s:9" }] }
        ]},
        { h: "Wie steht es um den KNDS-Bund-Einstieg und SAFE?", items: [
          { tag: "unbestaetigt", text: "Der für rund 6,6 Mrd. Euro geplante 50-Prozent-Einstieg des Bundes bei KNDS war auch bis zum 22.11. weiterhin nicht ausdrücklich als final unterschrieben bestätigt; der Vollzug wird weiterhin für Dezember erwartet. Beim EU-Verteidigungsprogramm SAFE läuft die Antragsfrist für die zweite Runde über 21,3 Mrd. Euro unverändert bis zum 30.11." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Kursverfall bei Rheinmetall und RENK diese Woche vor allem mit der Friedensdiplomatie und nicht mit operativen Negativnachrichten zusammenfällt, zeigt laut Beobachtern, wie stark die Bewertung von Rüstungsaktien derzeit von der Einschätzung der Anleger zur Dauer des Ukraine-Kriegs abhängt. Rheinmetall veranstaltet vom 25. bis 27.11. einen Capital Markets Day in Hamburg, bei dem das Unternehmen seine mittelfristige Strategie erläutern will." }
        ]}
      ],
      reaction: "Mehr zur Ukraine-Diplomatie in Meldung 9, zur Lage am Golf in Meldung 10.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks", "e:ma-steps"],
      sources: [
        { title: "finanzen.ch: Rheinmetall-Aktie Kursbewegung 20.11.2026", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-20-11-2026-1035061928" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie bei 701,40 Euro – 3,34 Prozent tiefer vor Xetra", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/rheinmetall-aktie-bei-701-40-euro-3-34-prozent-tiefer-vor-xetra/70538988" },
        { title: "t-online.de: Ukraine-Gipfel in Berlin – Merz fordert Trump, Putin und Xi heraus", url: "https://www.t-online.de/nachrichten/ausland/eu/id_101536810/ukraine-gipfel-in-berlin-merz-fordert-trump-putin-und-xi-heraus.html" }
      ]
    },
    /* 12 DEALS: TPG/CORPAY-BILL/BENDING SPOONS-MAILCHIMP/MARVELL-LUMENTUM */
    {
      id: "deals-bill-mailchimp-marvell-lumentum-update-11-20", cats: ["deals"], when: "BILL/TPG-Corpay angekündigt 19./20.11.2026 · Mailchimp-Deal angekündigt 19.11.2026",
      headline: "TPG und Corpay übernehmen BILL Holdings für 6 Milliarden Dollar, Bending Spoons kauft Mailchimp von Intuit – Marvell-Lumentum-Spread korrigiert sich auf rund 18 Prozent",
      sec30: "Die Private-Equity-Firma TPG und der Zahlungsdienstleister Corpay übernehmen den Fintech-Anbieter BILL Holdings in einem Take-Private-Deal für 6 Mrd. Dollar (63,25 Dollar je Aktie in bar, eine Prämie von 31 %); Corpay zahlt davon 1,1 Mrd. Dollar für einen 33-Prozent-Anteil mit einer Option, das Unternehmen bis 2030 vollständig zu übernehmen. Der italienische App-Entwickler Bending Spoons kauft zudem Mailchimp von Intuit für rund 3,68 Mrd. Dollar Unternehmenswert – deutlich unter den 12 Mrd. Dollar, die Intuit 2021 dafür bezahlt hatte. Bei der laufenden Marvell-Lumentum-Fusion lag der Kurs-Spread zuletzt bei rund 18 bis 20 %, während eine andere, separat berichtete Kennzahl die Erfolgswahrscheinlichkeit des Deals bei rund 50 % sieht.",
      blocks: [
        { h: "Was wurde beim BILL-Deal vereinbart?", items: [
          { tag: "fakt", text: "TPG und Corpay übernehmen BILL Holdings für 6 Mrd. Dollar in bar, 63,25 Dollar je Aktie – eine Prämie von 31 % gegenüber dem vorherigen Kurs. Corpay zahlt 1,1 Mrd. Dollar für einen 33-Prozent-Anteil und erhält eine Option, das Unternehmen bis 2030 vollständig zu übernehmen. Laut Berichten enthält die Vereinbarung keine Finanzierungsvorbehalte; der Abschluss wird für das erste Halbjahr 2027 erwartet. Finanzierungsdetails zu den beteiligten Banken wurden in den ausgewerteten Quellen nicht genannt.",
            ask: [{ label: "Was ist ein Take-Private?", ref: "t:take-private" }] }
        ]},
        { h: "Was wurde beim Mailchimp-Deal vereinbart?", items: [
          { tag: "fakt", text: "Der italienische App-Entwickler Bending Spoons kauft Mailchimp von Intuit für rund 3,68 Mrd. Dollar Unternehmenswert – deutlich unter den 12 Mrd. Dollar, die Intuit 2021 für Mailchimp bezahlt hatte. Intuit investiert dabei 368 Mio. Dollar der Verkaufserlöse zurück in Eigenkapital von Bending Spoons.",
            ask: [{ label: "Was ist ein Unternehmenswert (Enterprise Value)?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Wie steht es um die Marvell-Lumentum-Fusion?", items: [
          { tag: "fakt", text: "Marvell (MRVL) schloss am Freitag bei 138,47 Dollar, Lumentum (LITE) bei 535,15 Dollar. Bei einem festen Umtauschverhältnis von 4,5 Marvell-Aktien je Lumentum-Aktie ergibt sich daraus ein rechnerischer Angebotswert von rund 623 Dollar je Lumentum-Aktie – ein Rückgang von rund 45 % gegenüber dem bei Ankündigung genannten Wert von rund 1.132 Dollar. Der Kurs-Spread zwischen diesem rechnerischen Wert und dem tatsächlichen Lumentum-Kurs lag laut Berichten Mitte November bei rund 18 bis 20 %; eine separate, von Bloomberg berichtete Einschätzung zur Erfolgswahrscheinlichkeit des Deals selbst lag bei rund 50 % („coin flip”). Lumentum-CEO Michael Hurlston räumte öffentlich ein, die Aktionäre seien „nicht glücklich”, verteidigte den Deal aber weiterhin als strategisch sinnvoll.",
            ask: [{ label: "Mehr zum Merger-Arbitrage-Spread", ref: "e:deal-risks" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass trotz des breiten Markt-Ausverkaufs dieser Woche weiterhin große Übernahmen angekündigt werden, zeigt laut Beobachtern, dass Finanzinvestoren wie TPG und Private-Equity-Häuser den Ausverkauf teils als Kaufgelegenheit nutzen. Beim Marvell-Lumentum-Deal verdeutlicht der anhaltend hohe Spread, dass der Markt dem Abschluss zu den ursprünglichen Konditionen weiterhin mit Skepsis begegnet. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Mehr zu Private-Credit-Nachrichten in Meldung 13.",
      terms: ["enterprise-value", "ebitda", "closing"],
      followups: ["e:deal-risks", "e:ev-ebitda", "e:take-private-why"],
      deal: { value: "6 Mrd. $ (BILL/TPG-Corpay) · 3,68 Mrd. $ Enterprise Value (Mailchimp/Bending Spoons) · 115 Mrd. $ Enterprise Value (Marvell-Lumentum, ursprünglich)", buyer: "TPG & Corpay (BILL) · Bending Spoons (Mailchimp) · Marvell Technology (Lumentum)", target: "BILL Holdings · Mailchimp (von Intuit) · Lumentum Holdings", sector: "Fintech/Payments · Marketing-Software · Halbleiter/optische Komponenten", type: "Take-Private (Cash) · Unternehmensverkauf (Cash) · Aktien-für-Aktien-Fusion" },
      sources: [
        { title: "TPG: BILL Agrees to be Acquired by TPG in Partnership with Corpay", url: "https://www.tpg.com/news-and-insights/bill-agrees-to-be-acquired-by-tpg-in-partnership-with-corpay" },
        { title: "Bloomberg: Bending Spoons to Buy Mailchimp From Intuit for $3.7 Billion", url: "https://www.bloomberg.com/news/articles/2026-11-19/bending-spoons-to-buy-mailchimp-from-intuit-for-3-billion" },
        { title: "TechCrunch: Bending Spoons buys Mailchimp for $3.68 billion", url: "https://techcrunch.com/2026/11/20/bending-spoons-buys-mailchimp-for-3-68-billion/" },
        { title: "24/7 Wall St.: Lumentum's CEO Admits Shareholders Are Not Happy About the Marvell Deal", url: "https://247wallst.com/investing/2026/11/20/lumentums-ceo-admits-shareholders-are-not-happy-about-the-marvell-deal/" },
        { title: "Bloomberg: Marvell's $115 Billion Lumentum Acquisition Odds Hover Near 50%", url: "https://www.bloomberg.com/news/articles/2026-11-09/marvell-lumentum-deal-odds-near-coin-flip-as-ai-trade-shudders" }
      ]
    },
    /* 13 PRIVATE CREDIT: BC PARTNERS/INVESTCORP BDC/BLACKSTONE */
    {
      id: "private-credit-bc-partners-investcorp-bdc-konsolidierung-11-21", cats: ["credit"], when: "BC-Partners-Deal angekündigt 11.11.2026 · weiterhin diskutiert bis 21.11.2026",
      headline: "Konsolidierung bei Private-Credit-Fonds hält an: BC Partners übernimmt Investcorp-BDC, Proskauer-Ausfallindex bleibt rückläufig",
      sec30: "BC Partners übernimmt über seinen Fonds BCP Investment Corp. die börsennotierte Investcorp Credit Management BDC (ICMB) in einer reinen Aktienfusion mit 10 % Abschlag zum Nettoinventarwert (NAV); ICMB-Aktionäre halten danach rund 16,7 % der kombinierten Gesellschaft. Der Deal reiht sich laut Berichten in eine anhaltende Konsolidierungswelle bei Business Development Companies (BDCs) ein – auch BlackRock TCP Capital und WhiteHorse Finance prüfen laut Berichten strategische Optionen. Der Proskauer Private Credit Default Index war zuletzt im dritten Quartal 2026 auf 2,41 % gefallen, der zweite Rückgang in Folge.",
      blocks: [
        { h: "Was wurde bei der Investcorp-BDC-Übernahme vereinbart?", items: [
          { tag: "fakt", text: "BC Partners übernimmt über seinen Fonds BCP Investment Corp. (BCIC) die Investcorp Credit Management BDC (ICMB) in einer reinen Aktienfusion. ICMB wird dabei mit einem Abschlag von 10 % auf den Nettoinventarwert (NAV) bewertet; ICMB-Aktionäre erhalten BCIC-Aktien im Gegenwert von 90 % des NAV und halten danach rund 16,7 % der kombinierten Gesellschaft. Der Abschluss wird für Anfang 2027 erwartet.",
            ask: [{ label: "Was ist ein BDC?", ref: "t:bdc" }] }
        ]},
        { h: "Welche weiteren Konsolidierungssignale gibt es?", items: [
          { tag: "unbestaetigt", text: "Laut Berichten prüfen auch BlackRock TCP Capital und WhiteHorse Finance strategische Optionen einschließlich eines möglichen Verkaufs – Hinweise auf anhaltenden Konsolidierungsdruck im rund 1,8 Billionen Dollar schweren Private-Credit-Markt. Zudem schloss Blackstone Anfang November seinen europäischen Fonds Blackstone European Direct Lending Fund IV (BXDE IV), was Berichte als Zeichen dafür werten, dass institutionelle Investoren verstärkt auf europäisches Direct Lending als Diversifizierung setzen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Wie haben sich die Ausfallraten entwickelt?", items: [
          { tag: "fakt", text: "Der Proskauer Private Credit Default Index war im dritten Quartal 2026 auf 2,41 % gefallen (nach 2,51 % im zweiten Quartal) – der zweite Rückgang in Folge. Fitch hatte für Oktober eine rollierende Zwölf-Monats-Ausfallrate von 6,2 % bei Direct-Lending-Krediten gemeldet. Zum vom Markt zuvor beobachteten 1,3-Mrd.-Dollar-Fullscript-Kredit, den Antares, Blue Owl, Carlyle und Golub Capital übernommen hatten, gab es keine neue Entwicklung in dieser Woche.",
            ask: [{ label: "Was ist eine Ausfallrate?", ref: "t:default-rate" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere BDCs Übernahmen oder strategische Optionen prüfen, während ein großer europäischer Direct-Lending-Fonds erfolgreich schließt, zeigt laut Beobachtern ein gemischtes Bild: Konsolidierungsdruck bei kleineren, börsennotierten BDCs einerseits, anhaltende Investorennachfrage nach Direct Lending insgesamt andererseits. Die leicht rückläufigen Ausfallraten deuten laut Berichten auf eine gewisse Stabilisierung hin, auch wenn das Niveau historisch weiterhin erhöht bleibt.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Mehr zu den BILL- und Mailchimp-Übernahmen in Meldung 12, zur Fed-Zinsdebatte in Meldung 4.",
      terms: ["sofr", "credit-spread", "basispunkt", "direct-lending", "non-accrual", "default-rate", "bdc"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:credit-spread-why", "e:pc-rates", "e:nonaccrual-default", "chain:rates-to-credit"],
      widget: "sofr",
      sources: [
        { title: "Bloomberg: BC Partners to Buy Investcorp BDC Amid Private Credit Shakeout", url: "https://www.bloomberg.com/news/articles/2026-11-11/bc-partners-to-buy-investcorp-bdc-amid-private-credit-shakeout" },
        { title: "Legal500/Proskauer: Proskauer's Private Credit Default Index reveals rate of 2.41% for Q3 2026", url: "https://legal500.com/intelligence/united-states/finance-and-banking/proskauers-private-credit-default-index-reveals-rate-of-241-for-q3-2026" },
        { title: "Investment Executive/Fitch: U.S. private credit defaults ease in October", url: "https://investmentexecutive.com/news/research-and-markets/u-s-private-credit-defaults-ease-in-october-fitch" }
      ]
    },
    /* 14 TECHNOLOGIE: ANTHROPIC/NVIDIA */
    {
      id: "anthropic-ant-nvidia-sec-ausverkauf-11-20", cats: ["tech"], when: "Handelstag 1 Do 19.11.2026 · Handelstag 2 Fr 20.11.2026",
      headline: "Anthropic-Aktie nähert sich nach starkem Handelsstart wieder dem Ausgabepreis, Nvidia erlebt schlimmste Woche seit 2008",
      sec30: "Die Anthropic-Aktie (Ticker ANT) startete am Donnerstag bei 111,50 Dollar (+34 % ggü. Ausgabepreis 83 Dollar) und schloss den ersten Handelstag bei 97,17 Dollar (+17 %). Am zweiten Handelstag, Freitag, fiel der Kurs zeitweise bis auf 83,05 Dollar – nur 5 Cent über dem Ausgabepreis – und schloss laut zwei übereinstimmenden Sekundärquellen bei rund 88,91 Dollar (-8,5 %). Die Nvidia-Aktie fiel am Freitag um 14,01 % auf 125,53 Dollar, den siebten Verlusttag in Folge; der Wochenverlust von rund 23 % gilt laut einer Quelle als die schlimmste Woche seit 2008. Reuters berichtete, die SEC-Ermittlung gegen Nvidia konzentriere sich auf dessen Bilanzierungspraktiken bei der geografischen Umsatzzuordnung, insbesondere Umsätze über Singapur.",
      blocks: [
        { h: "Wie verlief der Handelsstart von Anthropic?", items: [
          { tag: "fakt", text: "Die Anthropic-Aktie (Ticker ANT) startete am Donnerstag, 19.11., um 11:48 Uhr US-Ostküstenzeit bei 111,50 Dollar (+34 % ggü. Ausgabepreis von 83 Dollar), mit einem Intraday-Hoch von 115,10 und einem Intraday-Tief von 92,72 Dollar. Der Schlusskurs des ersten Handelstags lag bei 97,17 Dollar (+17 % ggü. Ausgabepreis), die Marktkapitalisierung bei rund 1,76 Billionen Dollar, intraday zeitweise bis zu 2 Billionen Dollar.",
            ask: [{ label: "Was ist ein Börsengang (IPO)?", ref: "t:ipo" }] }
        ]},
        { h: "Wie entwickelte sich die Aktie am zweiten Handelstag?", items: [
          { tag: "unbestaetigt", text: "Am Freitag, 20.11., eröffnete die Aktie bei rund 89,86 Dollar und fiel im Tagesverlauf zeitweise auf 83,05 Dollar – nur 5 Cent über dem Ausgabepreis von 83 Dollar. Der Schlusskurs wird von zwei unabhängigen Sekundärquellen übereinstimmend mit rund 88,91 Dollar angegeben (-8,5 % ggü. Vortag, aber weiterhin +7,1 % über dem Ausgabepreis); eine Primärquelle (Nasdaq/Bloomberg) war wegen Zugriffsbeschränkungen nicht auswertbar.",
            ask: [{ label: "Mehr zu den US-Indizes", ref: "s:2" }] }
        ]},
        { h: "Wie entwickelte sich Nvidia, und was ist bei der SEC-Ermittlung neu?", items: [
          { tag: "fakt", text: "Die Nvidia-Aktie fiel am Freitag um 14,01 % auf 125,53 Dollar – der siebte Verlusttag in Folge, auf Wochensicht ein Minus von rund 23 %, laut einer Quelle die schlimmste Woche seit 2008. Reuters berichtete am 20./21.11., die zivilrechtliche SEC-Ermittlung konzentriere sich auf Nvidias Bilanzierungspraktiken bei der geografischen Umsatzzuordnung, insbesondere auf Umsätze, die über Singapur verbucht wurden; die Ermittlung befindet sich laut Berichten in einem frühen Stadium.",
            ask: [{ label: "Was sind kundenspezifische Chips?", ref: "e:custom-chips" }] }
        ]},
        { h: "Was sagte das US-Finanzministerium zu Nvidias China-Geschäft?", items: [
          { tag: "position", text: "US-Finanzminister Scott Bessent erklärte am 20.11., weitere Exportbeschränkungen für Nvidia-Chips nach China seien nicht nötig; China habe bislang nur wenige Bestellungen für den H200-Chip aufgegeben. Rund 600.000 H200-Chips lagern laut Berichten weiterhin unverkauft in Hongkong." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Anthropic-Aktie sich binnen zwei Handelstagen fast wieder dem Ausgabepreis näherte, während Nvidia seine schlimmste Woche seit 2008 erlebte, zeigt laut Beobachtern, wie stark die aktuelle Marktstimmung von Zweifeln an der kurzfristigen Finanzierbarkeit und Bilanzierung des KI-Booms geprägt ist – unabhängig von den fundamentalen Wachstumsaussichten einzelner Unternehmen. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zu den Märkten", ref: "chain:nasdaq-why" }] }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1 und 2.",
      terms: ["ipo"],
      followups: ["e:ai-capex", "e:circular-financing", "e:custom-chips"],
      sources: [
        { title: "Forbes: Anthropic IPO Live – stock closes day at $97, up more than 17%", url: "https://www.forbes.com/sites/fionariley/2026/11/19/anthropic-ipo-live-stock-closes-day-at-97-up-more-than-17/" },
        { title: "Fortune: Anthropic stock teeters close to IPO price in second day of trading", url: "https://fortune.com/2026/11/20/anthropic-stock-teeters-close-to-ipo-price-in-second-day-of-trading/" },
        { title: "The Motley Fool: Why Nvidia stock is down today", url: "https://www.fool.com/investing/2026/11/20/why-nvidia-stock-is-down-today/" },
        { title: "Korea Times: Nvidia's accounting is focus of US SEC investigation, sources say", url: "https://www.koreatimes.co.kr/world/20261121/nvidias-accounting-is-focus-of-us-sec-investigation-sources-say" },
        { title: "U.S. News: Treasury Secretary says no further restrictions are needed for Nvidia chip exports to China", url: "https://www.usnews.com/news/business/articles/2026-11-20/treasury-secretary-says-no-further-restrictions-are-needed-for-nvidia-chip-exports-to-china" }
      ]
    },
    /* 15 ENERGIE: GASSPEICHER/TTF/OEL/OPEC+ */
    {
      id: "gasspeicher-ttf-oel-opec-plus-29-11-vorbereitung-11-22", cats: ["energy"], when: "Stand 20.–22.11.2026 · OPEC+-Entscheidung für 2027-Quoten am 29.11.2026",
      headline: "Deutsche Gasspeicher auf niedrigstem 20.-November-Stand seit zehn Jahren, TTF-Preis springt nach Ausfall in Norwegen, Ölpreis fällt trotz Golf-Eskalation",
      sec30: "Die deutschen Gasspeicher fielen bis zum 21.11. auf rund 56,5 %, den niedrigsten Stand an einem 20./21. November seit mindestens zehn Jahren (Vorjahr: rund 72 %). Der TTF-Gaspreis für Dezember-Lieferung sprang am Freitag um 5,3 % auf 87,18 Euro pro Megawattstunde, unter anderem wegen eines Ausfalls der norwegischen Troll-Förderanlage. Der Brent-Ölpreis fiel dagegen auf Wochensicht um 3,41 % auf rund 92,6 Dollar je Barrel, obwohl sich die Lage am Golf weiter zuspitzte – weil die tatsächlichen Öltransporte durch die Straße von Hormus laut Berichten nahezu auf Vorkriegsniveau liegen. OPEC+ ließ die Dezember-Förderquoten unverändert und verschob die Entscheidung über die Quoten für 2027 auf das Treffen am 29.11.",
      blocks: [
        { h: "Wie ist der Füllstand der deutschen Gasspeicher?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher fielen von rund 57,1 % am 18.11. auf rund 56,73 % am 20.11. und weiter auf rund 56,48 % am 21.11. – laut einer Quelle der niedrigste Stand an einem 20. November seit mindestens zehn Jahren (Vorjahreswert 20.11.2025: rund 72,47 %). EU-weit lag der Füllstand zuletzt bei rund 69,8 %.",
            ask: [{ label: "Was ist LNG?", ref: "t:lng" }] }
        ]},
        { h: "Wie entwickelte sich der Gaspreis?", items: [
          { tag: "fakt", text: "Der TTF-Gaspreis (Dezember-Kontrakt) schloss am Freitag bei 87,18 Euro pro Megawattstunde, ein Plus von 5,3 % gegenüber Donnerstag. Berichte nennen die niedrigen Speicherstände, einen Ausfall der norwegischen Troll-Förderanlage und kalte Witterungsaussichten als Hintergrund.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] }
        ]},
        { h: "Wie entwickelte sich der Ölpreis, und was ist bei OPEC+ geplant?", items: [
          { tag: "fakt", text: "Brent schloss am Freitag bei rund 92,6 Dollar je Barrel (+0,64 % zum Vortag, aber -3,41 % auf Wochensicht – die dritte Verlustwoche in Folge); WTI lag bei 83,41 Dollar. OPEC+ hatte am 16.11. eine erste unabhängige Prüfung der nachhaltigen Förderkapazität jedes Mitgliedslands abgeschlossen, ließ die Dezember-Förderquoten unverändert und verschob die schwierigere Entscheidung über die Quoten für 2027 auf das Treffen aller 21 OPEC+-Mitglieder am 29.11.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz eskalierender Tankerangriffe am Golf (mehr in Meldung 10) auf Wochensicht fällt, während Erdgas wegen niedriger Speicherstände und eines Förderausfalls in Norwegen teurer wird, zeigt laut Beobachtern erneut, dass Öl- und Gasmarkt derzeit von unterschiedlichen Faktoren getrieben werden: Beim Öl überwiegt kurzfristig, dass die tatsächlichen Golf-Exporte laut Berichten kaum beeinträchtigt sind und die IEA für 2027 einen größeren globalen Angebotsüberschuss erwartet; bei Gas überwiegt die Sorge vor einem knappen Winter in Europa.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zur Eskalation am Golf in Meldung 10.",
      terms: ["brent", "wti", "opec-plus", "ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:opec-plus-why", "e:oil-future"],
      sources: [
        { title: "Hersfelder Zeitung: Deutschlands Gasspeicher nur noch zu 57 Prozent gefüllt", url: "https://www.hersfelder-zeitung.de/wirtschaft/gasspeicher-bei-57-prozent-drohen-engpaesse-und-hoehere-preise-zr-94601846.html" },
        { title: "Selectra: Prix du gaz – le marché a fini la semaine en hausse de 5,3 %", url: "https://selectra.info/energie/actualites/prix-gaz/2026-11-21" },
        { title: "aktiencheck.de: Erdgaspreis Europa – TTF steigt auf 86 Euro, Troll-Ausfall bremst Norwegen", url: "https://aktiencheck.de/artikel/erdgaspreis-europa-ttf-steigt-auf-86-euro-speicher-nur-zu-70-prozent-gefuellt" },
        { title: "CNBC: Oil prices set for third straight weekly decline on Middle East export flows", url: "https://www.cnbc.com/2026/11/20/oil-wti-brent-hormuz.html" },
        { title: "Daily Sabah: OPEC+ keeps December output intact ahead of tougher call for 2027", url: "https://www.dailysabah.com/business/energy/opec-keeps-december-output-intact-ahead-of-tougher-call-for-2027" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX fiel am Freitag um 2,60 % auf 24.802,78 Punkte, der Wochenverlust lag bei 7,28 % – der größte seit April 2025. Der Euro Stoxx 50 gab rund 2,64 bis 2,81 % nach." },
    "why-markets-move": { tag: "einordnung", story: 2, text: "Ein breiter, von Zweifeln an der KI-Finanzierung ausgelöster Ausverkauf drückte S&P 500 und Dow Jones in die Korrekturzone und die Nasdaq binnen einer Woche um rund 10 % nach unten." },
    "yield-meaning": { tag: "fakt", story: 4, text: "Die US-10-Jahres-Rendite fiel den fünften Tag in Folge auf rund 4,92 %; die Bund-Rendite lag bei rund 3,30 % (-6 Basispunkte zur Vorwoche)." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Am Terminmarkt gilt eine Fed-Zinserhöhung im Dezember inzwischen mit nahezu 100 % Wahrscheinlichkeit als eingepreist – trotz des parallelen Aktien-Ausverkaufs." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold fiel am Freitag um 2,2 bis 3,7 % auf rund 3.525 bis 3.538 Dollar – ungewöhnlich während eines breiten Aktien-Ausverkaufs, da Gold sonst oft als sicherer Hafen gefragt ist." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro notierte stabil bei rund 1,097 Dollar, in einer engen Wochen-Spanne von 1,0967 bis 1,0990." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin fiel binnen der Woche um rund 9 bis 10 % von über 65.000 auf unter 59.000 Dollar und erholte sich bis Sonntagmittag um 5,68 % binnen 24 Stunden." },
    "inflation-what": { tag: "fakt", story: 6, text: "Der deutsche Industrie-PMI fiel im November auf ein Zehn-Monats-Tief von 47,0 Punkten; der Eurozone-Industrie-PMI auf ein Fünf-Monats-Tief von 49,6 Punkten." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Fed-Chef Kevin Warsh bestätigte erneut, dass die Fed ab 2027 nur noch sieben statt acht Zinsentscheide pro Jahr treffen wird." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Gouverneur Waller bekräftigte seine Forderung nach einem Schritt um 50 Basispunkte im Dezember, sollte die Fed nicht klar auf eine weitere Erhöhung im Januar verweisen." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Der Terminmarkt preist eine EZB-Zinserhöhung von 2,50 auf 2,75 % bei der Sitzung am 17.12. mit rund 91 % Wahrscheinlichkeit ein." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Bundeshaushalt 2027 (560,92 Mrd. Euro Ausgaben, rund 210 Mrd. Euro Gesamtneuverschuldung) steht vor der für den 27.11. geplanten Schlussabstimmung im Bundestag." },
    "debt-brake": { tag: "fakt", story: 7, text: "Die für die Schuldenbremse relevante Kreditaufnahme im Bundeshaushalt 2027 liegt bei 38,43 Mrd. Euro – exakt an der verfassungsrechtlich zulässigen Obergrenze." },
    "rente-basics": { tag: "unbestaetigt", story: 8, text: "Die Kabinettsentscheidung zur Rentenreform ist weiterhin für den 9. oder 16. Dezember vorgesehen; Berichte zur genauen Kompromissvariante bei der Anrechnung von Zeiten widersprechen sich teilweise." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Aktuelle Umfragen (INSA, Forsa, YouGov) sehen die AfD zwischen 26 und 29 %, die Union zwischen 19 und 21 % – die aktuelle Koalition hätte danach weiterhin keine Bundestagsmehrheit." },
    "nato-target": { tag: "fakt", story: 11, text: "Beim EU-Verteidigungsprogramm SAFE läuft die Antragsfrist für die zweite Runde über 21,3 Mrd. Euro unverändert bis zum 30.11." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie fiel am Freitag auf ein neues 52-Wochen-Tief von 693,40 Euro – rund 65 % unter ihrem Jahreshoch; RENK fiel ebenfalls auf ein neues 52-Wochen-Tief." },
    "ma-steps": { tag: "unbestaetigt", story: 11, text: "Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS war am 22.11. weiterhin nicht ausdrücklich als unterschrieben bestätigt." },
    "deal-risks": { tag: "fakt", story: 12, text: "Beim Marvell-Lumentum-Deal lag der Kurs-Spread zuletzt bei rund 18 bis 20 %; die von Bloomberg berichtete Erfolgswahrscheinlichkeit des Deals selbst wurde separat mit rund 50 % angegeben." },
    "private-credit-what": { tag: "fakt", story: 13, text: "BC Partners übernimmt die Investcorp Credit Management BDC (ICMB) in einer Aktienfusion mit 10 % Abschlag zum Nettoinventarwert – Teil einer anhaltenden Konsolidierungswelle bei Business Development Companies." },
    "ai-capex": { tag: "fakt", story: 14, text: "Die Anthropic-Aktie fiel vom ersten Handelstags-Schluss (97,17 Dollar) am zweiten Handelstag zeitweise fast wieder auf den Ausgabepreis von 83 Dollar." },
    "circular-financing": { tag: "fakt", story: 14, text: "Reuters berichtete, die SEC-Ermittlung gegen Nvidia konzentriere sich auf Bilanzierungspraktiken bei der geografischen Umsatzzuordnung, insbesondere Umsätze über Singapur." },
    "why-oil-up-geo": { tag: "fakt", story: 10, text: "Irans Revolutionsgarde griff weiterhin US-Stützpunkte in Bahrain an; UKMTO meldete am 21.11. zwei weitere Tanker-Zwischenfälle nahe Oman." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Irans Marine meldete einen brennenden Tanker östlich der Straße von Hormus nach einem angeblichen Minentreffer – von Reuters nicht unabhängig verifiziert." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher fielen auf rund 56,5 %, der TTF-Gaspreis sprang am Freitag um 5,3 % auf 87,18 Euro pro Megawattstunde." },
    "energy-germany": { tag: "fakt", story: 15, text: "Mit rund 56,5 % Füllstand liegen die deutschen Gasspeicher so niedrig wie an keinem 20./21. November seit mindestens zehn Jahren." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ ließ die Dezember-Förderquoten nach Abschluss einer ersten unabhängigen Kapazitätsprüfung unverändert und verschob die Entscheidung über die Quoten für 2027 auf das Treffen am 29.11." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 2,
      q: "Wie stark fiel die Nasdaq Composite am Freitag, 20.11.2026, und wie hoch war der Wochenverlust?",
      options: [
        "-1,5 % am Tag, -3 % auf Wochensicht",
        "-5,28 % am Tag, rund -10 % auf Wochensicht",
        "-0,4 % am Tag, +2 % auf Wochensicht",
        "-8 % am Tag, rund -20 % auf Wochensicht"
      ],
      answer: 1,
      explain: "Die Nasdaq Composite fiel am Freitag um 5,28 % auf 22.617,73 Punkte, der Wochenverlust lag bei rund 10 % – der größte Wocheneinbruch seit über sechs Jahren, der das Jahr 2026 für den Index ins Minus drehte."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Wie entwickelte sich die Anthropic-Aktie (Ticker ANT) am zweiten Handelstag, Freitag 20.11.2026?",
      options: [
        "Sie stieg weiter auf über 150 Dollar",
        "Sie blieb unverändert bei 97,17 Dollar",
        "Sie fiel zeitweise bis auf 83,05 Dollar – nur 5 Cent über dem Ausgabepreis – und schloss laut Berichten bei rund 88,91 Dollar",
        "Der Handel wurde für den Tag ausgesetzt"
      ],
      answer: 2,
      explain: "Nach dem starken Handelsstart am Donnerstag (Schluss 97,17 Dollar) fiel die Anthropic-Aktie am Freitag zeitweise bis auf 83,05 Dollar – nur 5 Cent über dem Ausgabepreis von 83 Dollar – und schloss laut zwei übereinstimmenden Quellen bei rund 88,91 Dollar."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 10,
      q: "Angenommen, die Tankerangriffe in der Straße von Hormus würden zunehmen, ohne dass die tatsächlichen Öltransporte durch die Straße sinken. Was folgt daraus für den Brent-Preis laut der Logik dieser Woche am ehesten?",
      options: [
        "Der Ölpreis würde automatisch stark steigen, unabhängig von den tatsächlichen Transportmengen",
        "Der Ölpreis kann trotz mehr Angriffsmeldungen seitwärts laufen oder fallen, solange die tatsächlichen Exporte durch die Straße kaum beeinträchtigt sind und gleichzeitig ein globales Angebotsüberangebot erwartet wird",
        "Nur der Goldpreis würde reagieren, Öl nicht",
        "Der Ölpreis würde automatisch auf null fallen"
      ],
      answer: 1,
      explain: "Diese Woche fiel Brent trotz eskalierender Tankerangriffe auf Wochensicht, weil die tatsächlichen Öltransporte durch die Straße von Hormus laut Berichten kaum beeinträchtigt waren und die IEA für 2027 einen größeren globalen Angebotsüberschuss erwartet."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Für welchen Tag ist die namentliche Schlussabstimmung über den Bundeshaushalt 2027 im Bundestag geplant?",
      options: [
        "Freitag, 27.11.2026",
        "Montag, 1.12.2026",
        "Mittwoch, 9.12.2026",
        "Der Termin steht noch nicht fest"
      ],
      answer: 0,
      explain: "Die Haushaltswoche im Bundestag läuft vom 24. bis 27.11.2026; die namentliche Schlussabstimmung über den Bundeshaushalt 2027 ist für Freitag, 27.11., ab rund 12:40 Uhr vorgesehen."
    },
    {
      topic: "Rüstung", type: "Zusammenhang", story: 11,
      q: "Angenommen, die Gespräche der „Koalition der Willigen” in Berlin würden in den kommenden Wochen zu konkreten, schriftlich fixierten Sicherheitsgarantien für die Ukraine führen. Was wird laut der Logik dieser Woche für Rüstungsaktien wie Rheinmetall und RENK wahrscheinlicher?",
      options: [
        "Die Kurse würden davon unberührt bleiben, da Rüstungsaktien laut den Quellen nur von Auftragszahlen abhängen",
        "Die Kurse würden garantiert sofort auf null fallen",
        "Es gäbe keinen Zusammenhang zwischen Diplomatie und Rüstungsaktien",
        "Weiterer Kursdruck würde wahrscheinlicher, da Anleger ein näherrückendes Kriegsende mit einem absehbaren Ende des aktuellen Rüstungsbooms verbinden könnten – ähnlich wie beim Kursverfall nach dem Shenzhen- und dem Berlin-Treffen dieser Woche"
      ],
      answer: 3,
      explain: "Rheinmetall und RENK fielen diese Woche laut Berichten vor allem wegen der Ukraine-Friedensdiplomatie (Shenzhen-Gipfel, Berlin-Treffen) auf neue 52-Wochen-Tiefs, nicht wegen operativer Negativnachrichten – konkrete Fortschritte bei Sicherheitsgarantien würden diesen Effekt der Logik nach verstärken."
    }
  ]
};
