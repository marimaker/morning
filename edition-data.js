// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-20",
  dateLabel: "Sonntag, 20. September 2026",
  updatedLabel: "Recherchestand 20.09.2026",
  marketNote: "Am Wochenende sind die Börsen geschlossen. Die Zahlen zeigen den Handelsschluss vom Freitag, 18.09.2026. Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Samstagnachmittag (19.09., US-Zeit). Werte mit „≈“ stammen aus Marktberichten und können je nach Quelle und Uhrzeit leicht abweichen.",

  top: [
    { text: "Die Huthi griffen nach saudischer Darstellung in der Nacht zum Samstag erstmals seit Beginn der Eskalation die saudische Hauptstadt Riad sowie den Ölhafen Yanbu an. Eine Rakete wurde nach saudischen Angaben abgefangen, Opfer oder Schäden wurden nicht bestätigt.", ref: "s:8" },
    { text: "Heute wählen Berlin und Mecklenburg-Vorpommern. Die Wahl findet inmitten einer Führungskrise von Kanzler Merz statt: Nach dem AfD-Rekordergebnis in Sachsen-Anhalt (6.9.) trifft sich heute um 17 Uhr das CDU-Präsidium, Merz sagte deshalb seine USA-Reise ab.", ref: "s:6" },
    { text: "Die Rendite zehnjähriger US-Anleihen kletterte am Freitag auf etwa 5,0 %, die zehnjährige Bundrendite auf rund 3,5 %. Grund sind laut Berichten die jüngste Fed-Zinserhöhung und eine anstehende große Anleiheauktion.", ref: "s:4" },
    { text: "In der Nacht zum Sonntag flog die Ukraine laut russischen Angaben den nach Moskauer Darstellung größten Drohnenangriff des Jahres auf Moskau. Eine Ölraffinerie geriet in Brand, in der Region Moskau starben laut Gouverneur zwei Menschen.", ref: "s:9" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.304", change: "−1,60 %", dir: "down", asof: "Schluss Fr 18.09.", story: 3,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. 25.304 Punkte sind ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: −1,60 % heißt, dass diese Unternehmen zusammen rund 1,6 % niedriger bewertet werden als am Vortag.",
      compare: [
        { label: "Woche", text: "−1,03 % gegenüber dem Vorfreitag (25.568,56 Punkte am 11.09.)" },
        { label: "Abweichende Angabe", text: "Eine weitere Quelle nennt 25.296,44 Punkte statt 25.304,06 Punkte. Die Abweichung ist gering und dürfte am Messzeitpunkt liegen." }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Freitag vor allem diese Faktoren:",
        items: [
          "Der große Verfallstag, an dem Futures und Optionen auf Aktienindizes auslaufen.",
          "Der Einbruch der VW-Vorzugsaktie nach der gesenkten Gewinnprognose, der auch BMW, Mercedes-Benz und Continental mit nach unten zog.",
          "Die Nahost-Lage und steigende Anleiherenditen."
        ]
      },
      important: [
        { area: "Aktien", text: "Der DAX ist ein Stimmungsbild der großen deutschen Firmen, kein Maß für die gesamte Wirtschaft.", ref: "e:index-move" },
        { area: "Zinsen", text: "Steigende Renditen können Bewertungen von Aktien belasten.", ref: "e:yield-stocks" }
      ],
      source: { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.236", change: "−1,37 %", dir: "down", asof: "Schluss Fr 18.09.", story: 3,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. −1,37 % heißt: Diese Unternehmen wurden zusammen rund 1,4 % niedriger bewertet als am Vortag.",
      compare: [
        { label: "Abweichende Angabe", text: "Eine andere Quelle nennt 6.230,42 Punkte (−1,46 %) statt 6.236,20 Punkte (−1,37 %). Beide Quellen gelten als seriös, der Unterschied liegt vermutlich am Erhebungszeitpunkt." },
        { label: "Zum DAX", text: "Der DAX verlor mit −1,60 % etwas mehr." }
      ],
      moved: {
        intro: "Berichte nennen für den europäischen Handel dieselben Faktoren wie für den DAX:",
        items: ["Verfallstag, Nahost-Lage und steigende Anleiherenditen."]
      },
      important: [
        { area: "Aktien", text: "Ein Index fasst viele Aktien zu einer Zahl zusammen.", ref: "e:index-move" }
      ],
      source: { title: "finanzen.ch / onvista: Angespannte Stimmung in Europa, Euro Stoxx 50 fällt", url: "https://www.finanzen.ch/nachrichten/aktien/angespannte-stimmung-in-europa-euro-stoxx-50-faellt-schlussendlich-1036557393" }
    },
    "sp500": {
      label: "S&P 500", value: "7.650", change: "+0,17 %", dir: "up", asof: "Schluss Fr 18.09.", story: 3,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. +0,17 % bedeutet: Die Firmen wurden zusammen rund 0,17 % höher bewertet als am Vortag.",
      compare: [
        { label: "Punkte", text: "+12,74 Punkte auf 7.650,50" },
        { label: "Dow Jones", text: "−95,40 Punkte (−0,19 %) auf 51.682,64" }
      ],
      moved: {
        intro: "Berichte zum Freitag:",
        items: [
          "Die US-Indizes schlossen gemischt zum Ende einer von der Fed-Entscheidung geprägten Woche.",
          "Die Rendite zehnjähriger US-Anleihen stieg auf etwa 5,0 %, was Aktien laut Berichten zunehmend belastete."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen.", ref: "e:rates-stocks" }
      ],
      source: { title: "TheStreet: Stock market today – Dow, S&P 500, Nasdaq updates Sept. 18, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.523", change: "+0,39 %", dir: "up", asof: "Schluss Fr 18.09.", story: 3,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie reagiert deshalb oft empfindlich auf Zinsänderungen und auf Nachrichten zur KI.",
      compare: [
        { label: "Punkte", text: "+104,25 Punkte auf 26.522,55" },
        { label: "Speicherchips", text: "Speicherchip-Werte legten am Freitag deutlich zu, u. a. SanDisk +10,99 %, Seagate +6,93 %, Micron +3,92 % (Meldung 14)." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Die Nasdaq schloss am Freitag leicht im Plus, gestützt von Chip- und Speicherwerten.",
          "Zugleich stieg die zehnjährige US-Rendite auf rund 5,0 %."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum fällt oder steigt die Nasdaq bei Zinsänderungen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "TheStreet: Stock market today – Dow, S&P 500, Nasdaq updates Sept. 18, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,146", change: "−0,14 %", dir: "down", asof: "Fr 18.09.", story: 1,
      means: "1 Euro kostet etwa 1,146 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "Andere Angabe", text: "Trading Economics nennt für Freitagabend rund 1,148 $." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Der Dollar blieb nahe seinem Julitief für den Euro stark, nachdem die Fed am Mittwoch die Zinsen erhöht hatte.",
          "EZB-Präsidentin Lagarde äußerte sich am Freitag zur Konjunktur, ohne den Euro merklich zu bewegen."
        ]
      },
      important: [
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" },
        { area: "Zinsen", text: "Die Fed hat die Zinsen erhöht, die EZB äußert sich zurückhaltender zu weiteren Schritten.", ref: "e:fed-hike" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,01 %", change: "+7 Basispunkte", dir: "up", asof: "Fr 18.09.", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,0 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Abweichende Angabe", text: "Ein anderer Marktbericht nennt für Freitag einen niedrigeren Wert von rund 4,94–4,95 %. Welcher Stand exakt der Schlusswert war, lässt sich aus den gesichteten Quellen nicht sicher klären." },
        { label: "2-Jahres-Rendite", text: "Stieg laut Bericht stärker (+13 Basispunkte), die Zinskurve wurde dadurch flacher." },
        { label: "Fed-Leitzins", text: "3,75–4,00 % (Erhöhung am 16.09.)" }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Nach der Fed-Zinserhöhung vom Mittwoch fiel die Rendite zunächst, stieg am Freitag aber wieder kräftig.",
          "Am Markt wurde laut Bericht eine bevorstehende große Anleiheauktion im Volumen von 183 Mrd. $ als ein Faktor genannt."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren mit Aktien.", ref: "e:yield-stocks" },
        { area: "Unternehmensfinanzierung", text: "Kredite werden teurer, wenn der sichere Zins steigt.", ref: "e:fed-hike" },
        { area: "Private Credit", text: "Variable Zinsen steigen mit den Referenzzinsen.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Höhere US-Zinsen können den Dollar stützen.", ref: "e:eurusd-meaning" },
        { area: "Gold", text: "Gold zahlt keinen Zins und konkurriert mit Anleihen.", ref: "e:gold-why" }
      ],
      source: { title: "ts2.tech: 10-Year Treasury Yield Closes at 5.01% Before $183 Billion Auction Test", url: "https://ts2.tech/en/10-year-treasury-yield-closes-at-5-01-before-183-billion-auction-test/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,52 %", change: "+0,04 Punkte", dir: "up", asof: "Fr 18.09.", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. 3,52 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,5 % pro Jahr.",
      compare: [
        { label: "Diese Woche", text: "Mehrjahreshoch von 3,57 % am Dienstag" },
        { label: "Euro-Bund-Future", text: "−0,11 % auf 120,64 Punkte (Fr)" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: ["Der Anstieg folgte dem Sog der steigenden US-Renditen nach der Fed-Entscheidung vom Mittwoch."]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen machen neue Schulden des Bundes teurer, relevant für den Haushalt 2027.", ref: "e:debt-brake" },
        { area: "Kredite", text: "Bauzinsen und Firmenkredite orientieren sich an Bund-Renditen.", ref: "e:yield-meaning" }
      ],
      source: { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.380 $", change: "+0,77 %", dir: "up", asof: "Schluss Fr 18.09.", story: 5, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.380 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "In Euro", text: "≈ 3.822 € je Feinunze bei einem Kurs von 0,8726 €/$" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Gold stieg trotz eines starken Dollars und einer auf rund 5 % gestiegenen US-Rendite.",
          "Als Grund gilt die Nachfrage nach einem sicheren Hafen angesichts der Nahost-Eskalation und der Inflationssorgen. Das ist die Einschätzung der Quelle."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Kettner Edelmetalle: Goldpreis aktuell", url: "https://www.kettner-edelmetalle.de/wissen/goldpreis" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 103,9 $", change: "−0,9 %", dir: "down", asof: "Schluss Fr 18.09.", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 104 Dollar je Fass (159 Liter) sind rund 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Abweichende Angaben", text: "Quellen nennen für Freitag zwischen 103,21 $ und 104,33 $, eine Quelle nennt für Samstag 99,29 $ — vermutlich ein anderer Kontrakt oder Zeitpunkt. Für den Newsletter wird der CNBC-Wert von rund 103,9 $ verwendet." },
        { label: "September bisher", text: "Laut Berichten war Brent Mitte September zeitweise über 108 $ gestiegen, nachdem Saudi-Arabien wegen einer Pipeline-Störung Öllieferungen storniert hatte." }
      ],
      moved: {
        intro: "Laut Berichten wirkten am Freitag diese Faktoren:",
        items: [
          "Händler trauten Saudi-Arabien zu, die Pipeline-Kapazität teilweise wiederherzustellen und Lieferungen über Oman fortzusetzen.",
          "Die Lagerbestände an Ölprodukten stiegen in mehreren Regionen."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Zinsen", text: "Hohe Inflation kann höhere Zinsen bedeuten.", ref: "e:central-banks-why" },
        { area: "Aktien", text: "Ölkonzerne verdienen mehr, energieintensive Firmen zahlen mehr.", ref: "e:oil-stocks" },
        { area: "Deutschland", text: "Energieimporte werden teurer.", ref: "e:energy-germany" }
      ],
      source: { title: "CNBC: Oil prices today, Sept. 18, 2026", url: "https://www.cnbc.com/2026/09/18/oil-prices-today-brent-wti-saudi-arabia-houthi.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.350 $", change: "≈ +4,3 % seit Fr-Morgen", dir: "up", asof: "Sa 19.09., 16:12 Uhr ET", story: 5, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.350 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Freitag, 8 Uhr ET", text: "77.979,54 $" },
        { label: "Abweichende Angabe", text: "Ein weiterer Marktbericht nennt für Samstag 81.754,50 $, leicht abweichend vom hier verwendeten Wert." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: ["Kryptowerte legten am Freitag zu, während Aktien uneinheitlich schlossen. Eine genaue Ursache für den Sprung übers Wochenende nennen die gesichteten Quellen nicht eindeutig."]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Price of Bitcoin, Sept. 18, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-18-2026/" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 FED / WARSH */
    {
      id: "fed-warsh", cats: ["economy", "markets"], when: "Mi 16.09. Fed-Entscheid · Fr 18.09. Warsh-Analyse",
      headline: "Fed-Chef Warsh deutet laut Fortune-Analyse geldpolitische Wende zum Monetarismus an",
      sec30: "Drei Tage nach der Fed-Zinserhöhung auf 3,75–4,00 % analysiert Fortune Aussagen von Fed-Chef Kevin Warsh von der Pressekonferenz vom Mittwoch: Warsh hält die klassische „neutrale Zinsrate“ für akademisch interessant, aber praktisch wenig hilfreich, und will stattdessen stärker auf Geldmengenwachstum achten. Die nächste Fed-Sitzung ist am 27./28. Oktober, ohne neue Zinsprognosen.",
      blocks: [
        { h: "Was ist neu?", items: [
          { tag: "position", text: "Bei der FOMC-Pressekonferenz vom 16.09. sagte Warsh laut Fortune-Bericht sinngemäß, die Fed könne einzelne Preise nicht steuern, aber dafür sorgen, dass Preisänderungen einzelner Güter nicht auf das gesamte Preisniveau übergreifen. Die sogenannte neutrale Zinsrate (ein Konzept des Ökonomen Knut Wicksell) sei akademisch interessant, für die praktische Entscheidungsfindung aber ohne große Relevanz.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Fortune interpretiert daraus, Warsh strebe ein Geldmengenwachstum von rund 6 % an, um das 2-%-Inflationsziel zu erreichen. Das ist die Einordnung des Fortune-Journalisten, kein direktes Zitat von Warsh." }
        ]},
        { h: "Zur Erinnerung: Was hat die Fed beschlossen?", items: [
          { tag: "fakt", text: "Der Offenmarktausschuss (FOMC) erhöhte den Leitzins am 16.09. einstimmig (12:0) um 0,25 Punkte auf 3,75–4,00 %, die erste Erhöhung seit 2023. Der Median der Mitglieder-Prognosen (Dot Plot) erwartet bis Jahresende eine weitere Erhöhung.",
            ask: [{ label: "Was ist ein Dot Plot?", ref: "t:dot-plot" }, { label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }] }
        ]},
        { h: "Was kommt als Nächstes?", items: [
          { tag: "fakt", text: "Die nächste FOMC-Sitzung ist am 27./28. Oktober. Es ist keine Sitzung mit aktualisierten Wirtschafts- und Zinsprognosen (kein „SEP-Meeting“)." },
          { tag: "unbestaetigt", text: "Auf der Wettplattform Polymarket lag die Wahrscheinlichkeit für eine weitere 0,25-Punkte-Erhöhung am 18.09. bei 56 %, für eine Zinspause bei 44 %. Das ist eine Markterwartung, keine Prognose der Fed selbst.",
            ask: [{ label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Der nächste wichtige US-Inflationswert, der Kern-PCE-Preisindex für August, wird am Freitag, 25.09., veröffentlicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Ein stärkerer Fokus auf Geldmengenwachstum statt auf einzelne Preisdaten wäre ein anderer Ansatz als in den vergangenen Jahren üblich. Was das für künftige Zinsentscheidungen konkret heißt, ist aus den gesichteten Quellen noch nicht klar erkennbar.",
            ask: [{ label: "Was bedeutet das für Aktien?", ref: "e:rates-stocks" }, { label: "Was bedeutet das für den Dollar?", ref: "n:eurusd" }] },
          { tag: "fakt", text: "Am Freitag stieg die Rendite zehnjähriger US-Anleihen auf rund 5,01 %, der Euro lag bei ≈ 1,146 Dollar.",
            ask: [{ label: "Was bedeutet 5 % Rendite?", ref: "n:ust10" }] }
        ]}
      ],
      reaction: "Die 10-jährige US-Rendite stieg am Freitag auf rund 5,01 %. S&P 500 (+0,17 %) und Nasdaq (+0,39 %) schlossen leicht höher, der Dow (−0,19 %) leicht niedriger.",
      terms: ["leitzins", "dot-plot", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:eurusd-meaning"],
      sources: [
        { title: "Fortune: Kevin Warsh just revealed a huge change for the Fed. The press missed it", url: "https://fortune.com/2026/09/18/kevin-warsh-federal-reserve-what-is-monetarism/" },
        { title: "centralbank.watch: Fed Rate Probability", url: "https://centralbank.watch/federal-reserve/" },
        { title: "Yahoo Finance: Next Fed meeting – what to expect in October", url: "https://finance.yahoo.com/news/next-fed-meeting-october-expect-110000809.html" },
        { title: "ts2.tech: 10-Year Treasury Yield Closes at 5.01% Before $183 Billion Auction Test", url: "https://ts2.tech/en/10-year-treasury-yield-closes-at-5-01-before-183-billion-auction-test/" }
      ]
    },

    /* 2 EZB LAGARDE/SCHNABEL */
    {
      id: "ezb-lagarde", cats: ["economy"], when: "Fr 18.09. · Lagarde-Aussagen / ZEW September",
      headline: "EZB-Chefin Lagarde sieht Wachstum „vielversprechender als gedacht“, ZEW-Erwartungen legen nur leicht zu",
      sec30: "EZB-Präsidentin Christine Lagarde äußerte sich am Freitag zurückhaltend optimistisch zur Konjunktur und will weiter von Sitzung zu Sitzung über die Zinsen entscheiden. Die deutschen ZEW-Konjunkturerwartungen stiegen im September nur leicht auf 34,7 Punkte, während der Erwartungsindex für die gesamte Eurozone deutlich fiel. Die nächste EZB-Zinsentscheidung ist am 29. Oktober.",
      blocks: [
        { h: "Was sagen EZB-Vertreter?", items: [
          { tag: "position", text: "Lagarde sagte am Freitag laut Bericht sinngemäß, das Wachstum falle etwas vielversprechender aus als zunächst gedacht, und der EZB-Rat werde weiterhin von Sitzung zu Sitzung entscheiden. Bislang seien keine Zweitrundeneffekte bei der Inflation zu erkennen.",
            ask: [{ label: "Was bedeutet die EZB-Zinserhöhung für mich?", ref: "e:ecb-hike" }] },
          { tag: "position", text: "EZB-Direktorin Isabel Schnabel hatte sich vor der Zinsentscheidung vom 10.09. für eine Erhöhung ausgesprochen. Die jüngsten Energiepreisanstiege bezeichnete sie danach laut Bericht als „ziemlich besorgniserregend“.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] },
          { tag: "position", text: "Bundesbank-Präsident Joachim Nagel äußerte sich dahingehend, der Ölpreisschock durch den Iran-Konflikt werde die deutsche Wirtschaft belasten, voraussichtlich aber keine Rezession auslösen." }
        ]},
        { h: "Wie steht die Konjunktureinschätzung?", items: [
          { tag: "fakt", text: "Die ZEW-Konjunkturerwartungen für Deutschland stiegen im September um 0,5 auf 34,7 Punkte; Ökonomen hatten im Schnitt einen stärkeren Anstieg auf rund 40 Punkte erwartet. Die Lagebeurteilung verbesserte sich um 14,0 auf −47,1 Punkte, bleibt also negativ.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "fakt", text: "Der ZEW-Erwartungsindex für die gesamte Eurozone fiel dagegen um 5,6 Punkte auf 25,8. Als Risiken nennt ZEW-Präsident Achim Wambach laut Bericht teure Energie durch den Iran-Konflikt und Unsicherheit durch „hybride Angriffe“." },
          { tag: "fakt", text: "Der Einkaufsmanagerindex (PMI) für die Eurozone lag im August bei 52,1 (Composite), der höchste Stand seit November. Der Industrie-PMI erreichte mit 52,7 den stärksten Wert seit Mai 2022, getrieben vor allem von Deutschland." }
        ]},
        { h: "Was kommt als Nächstes?", items: [
          { tag: "fakt", text: "Der ifo-Geschäftsklimaindex für September wird am 24.09. veröffentlicht. Der zuletzt bestätigte Wert für August lag bei 88,8 Punkten (Juli: 86,7)." },
          { tag: "fakt", text: "Die nächste EZB-Zinsentscheidung ist am 29. Oktober." },
          { tag: "position", text: "Sollte die Inflation in den kommenden Monaten nicht sinken, halten Marktbeobachter eine weitere EZB-Zinserhöhung um 0,25 Punkte für möglich. Das ist eine Einschätzung, keine EZB-Ankündigung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gemischten Konjunktursignale — leicht bessere deutsche Erwartungen, schwächere Eurozone-Erwartungen, solide Industrie-PMI-Werte — erklären, warum die EZB sich laut Lagarde nicht auf einen festen Zinspfad festlegen will.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]}
      ],
      reaction: "Der Euro bewegte sich nach Lagardes Aussagen kaum und lag am Freitag bei rund 1,146 Dollar.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what", "e:companies-costs"],
      sources: [
        { title: "fxstreet.de: EZB-Chefin Lagarde – Wir werden von Sitzung zu Sitzung über die Zinsen entscheiden", url: "https://www.fxstreet.de.com/news/ezb-chefin-lagarde-wir-werden-von-sitzung-zu-sitzung-uber-die-zinsen-entscheiden-202609180821" },
        { title: "Handelsblatt: EZB – Schnabel prescht vor und fordert Zinserhöhung im September", url: "https://www.handelsblatt.com/finanzen/geldpolitik/ezb-schnabel-prescht-vor-und-fordert-zinserhoehung-im-september/100249668.html" },
        { title: "ad-hoc-news.de: Die ZEW-Konjunkturerwartungen für Deutschland haben sich im September …", url: "https://www.ad-hoc-news.de/wirtschaft/die-zew-konjunkturerwartungen-fuer-deutschland-haben-sich-im-september/70104478" },
        { title: "S&P Global: Eurozone flash PMI signals cooler inflation amid sustained expansion of output", url: "https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/08/eurozone-flash-pmi-signals-cooler-inflation-amid-sustained-expansion-of-output" },
        { title: "ZDFheute: Wirtschaft, Wachstum, Rezession, IWF, Iran", url: "https://www.zdfheute.de/wirtschaft/wirtschaft-wachstum-rezession-iwf-iran-100.html" }
      ]
    },

    /* 3 FREITAG MARKTBERICHT */
    {
      id: "freitag-maerkte", cats: ["markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "DAX verliert am großen Verfallstag 1,6 %, VW senkt Gewinnprognose – Buffett tritt als Berkshire-Chairman zurück",
      sec30: "Der DAX schloss 1,60 % tiefer bei 25.304 Punkten. In den USA war das Bild gemischt: S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,19 %. Volkswagen senkte die Gewinnprognose nach einer Milliarden-Abschreibung auf Porsche, die Vorzugsaktie fiel um bis zu 5,6 %. Zudem trat Warren Buffett als Chairman von Berkshire Hathaway zurück.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "DAX −1,60 % auf 25.304,06 Punkte, Euro Stoxx 50 −1,37 % auf 6.236,20 Punkte. VW-Vorzüge verloren zwischen 4,4 % und 5,6 % je nach Quelle, BMW, Mercedes-Benz und Continental gaben bis zu 4,8 % nach.",
            ask: [{ label: "Was bedeutet −1,6 %?", ref: "n:dax" }, { label: "Was ist der Euro Stoxx 50?", ref: "n:eurostoxx50" }] },
          { tag: "fakt", text: "In den USA schlossen S&P 500 bei 7.650,50 Punkten (+0,17 %), Nasdaq bei 26.522,55 (+0,39 %) und Dow bei 51.682,64 (−0,19 %). Die Rendite zehnjähriger US-Anleihen stieg auf rund 5,01 %.",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Was ist bei Volkswagen los?", items: [
          { tag: "fakt", text: "VW senkte die Prognose für 2026: Die operative Umsatzrendite soll nur noch bis zu 1 % betragen, zuvor waren 4,0 bis 5,5 % erwartet. Berichte nennen Sonderbelastungen von rund 10 Mrd. €, vor allem auf die Tochter Porsche.",
            ask: [{ label: "Warum senken Firmen Prognosen?", ref: "e:companies-costs" }] },
          { tag: "position", text: "Berichte nennen als Gründe für die Porsche-Abschreibung geänderte langfristige Annahmen, US-Zölle und schwache Nachfrage nach Luxusautos in China, dazu Kosten für den Konzernumbau. Das ist die Darstellung der Medien, die sich auf VW-Angaben stützen." }
        ]},
        { h: "Warum fiel der DAX?", items: [
          { tag: "position", text: "Marktbeobachter nennen vor allem den großen Verfallstag, den VW-Einbruch, die Nahost-Lage und steigende Anleiherenditen. Wie viel jeder Faktor beigetragen hat, lässt sich nicht genau sagen.",
            ask: [{ label: "Was ist der große Verfallstag?", ref: "e:verfallstag-why" }, { label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Warum bewegen sich Börsen?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Warren Buffett tritt zurück", items: [
          { tag: "fakt", text: "Warren Buffett (96) ist als Chairman von Berkshire Hathaway zurückgetreten, das Amt hatte er seit 1970 inne. Er bleibt Chairman emeritus und Direktor. Sein Sohn Howard Buffett, seit 1993 im Verwaltungsrat, übernimmt den Vorsitz. Greg Abel ist bereits seit einigen Monaten CEO." },
          { tag: "position", text: "Im Aktionärsbrief schrieb Buffett laut Berichten den Satz „Father Time always wins“ („Die Zeit gewinnt immer“). Der Markt reagierte verhalten, die Berkshire-B-Aktie bewegte sich kaum." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag sagt wenig über die langfristige Entwicklung. Wer in Indexfonds investiert, sieht solche Schwankungen regelmäßig. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Am Montag öffnen die Börsen wieder. Der Nahost-Konflikt (Meldung 8) und die Renditen (Meldung 4) bleiben Themen.",
      terms: ["verfallstag", "rendite"],
      followups: ["e:index-move", "e:verfallstag-why", "e:yield-stocks", "e:why-markets-move", "e:companies-costs"],
      sources: [
        { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" },
        { title: "TheStreet: Stock market today – Dow, S&P 500, Nasdaq updates Sept. 18, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026" },
        { title: "wallstreet-online: Aktien Frankfurt Schluss, Dax taucht", url: "https://www.wallstreet-online.de/nachricht/21400173-aktien-frankfurt-schluss-dax-taucht-bleibt-schwieriger-kampf-inflation" },
        { title: "Washington Post: Warren Buffett steps down as chairman of Berkshire Hathaway", url: "https://www.washingtonpost.com/business/2026/09/18/warren-buffett-steps-down-chairman-berkshire-hathaway/" },
        { title: "NPR: Warren Buffett steps down as Berkshire chairman", url: "https://www.npr.org/2026/09/18/nx-s1-5973852/warren-buffett-steps-down" }
      ]
    },

    /* 4 RENDITEN */
    {
      id: "renditen", cats: ["markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "US-Rendite steigt auf 5,01 % vor großer Anleiheauktion, Bund-Rendite auf 3,52 %",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen kletterte am Freitag auf rund 5,01 %, nachdem sie nach der Fed-Zinserhöhung vom Mittwoch zunächst gefallen war. Die zehnjährige Bundesanleihe rentierte bei rund 3,52 %, nach einem Mehrjahreshoch von 3,57 % am Dienstag.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Die US-10-Jahres-Rendite stieg am Freitag laut Bericht um 7 Basispunkte auf rund 5,01 %. Die 2-Jahres-Rendite legte stärker zu (+13 Basispunkte), die Zinskurve wurde dadurch flacher.",
            ask: [{ label: "Was bedeutet eine Rendite von 5 %?", ref: "n:ust10" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "unbestaetigt", text: "Ein anderer Marktbericht nennt für denselben Tag einen niedrigeren Wert von rund 4,94–4,95 %. Welcher Stand der maßgebliche Schlusswert ist, lässt sich aus den gesichteten Quellen nicht abschließend klären." },
          { tag: "fakt", text: "Die deutsche 10-Jahres-Bundrendite lag am Freitag bei rund 3,52 %, ein Plus von 0,04 Punkten laut Trading Economics. Am Dienstag hatte sie mit 3,57 % ein Mehrjahreshoch erreicht.",
            ask: [{ label: "Was bedeutet das für den Bundeshaushalt?", ref: "e:debt-brake" }] }
        ]},
        { h: "Warum steigen die Renditen?", items: [
          { tag: "position", text: "Berichte nennen als Hintergrund die Fed-Zinserhöhung vom Mittwoch und eine bevorstehende große US-Anleiheauktion im Volumen von 183 Mrd. Dollar. Beides kann Anleger dazu bewegen, höhere Zinsen für neue Anleihen zu verlangen.",
            ask: [{ label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Höhere Renditen wirken über mehrere Kanäle: Sie machen Aktien im Vergleich weniger attraktiv, verteuern Kredite für Unternehmen und den Staat und erhöhen die Zinskosten in Kreditmärkten wie Private Credit. Probier die Kette unten aus.",
            ask: [{ label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Wie wirken Zinsen auf Kreditmärkte?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX (−1,6 %) und Euro Stoxx 50 (−1,4 %) fielen am Freitag, S&P 500 und Nasdaq schlossen dagegen leicht im Plus.",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:fed-hike", "e:debt-brake", "chain:rates-to-credit"],
      sources: [
        { title: "ts2.tech: 10-Year Treasury Yield Closes at 5.01% Before $183 Billion Auction Test", url: "https://ts2.tech/en/10-year-treasury-yield-closes-at-5-01-before-183-billion-auction-test/" },
        { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" },
        { title: "onvista: Deutsche Anleihen mit leichten Kursbewegungen", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" }
      ]
    },

    /* 5 GOLD / BITCOIN */
    {
      id: "gold-bitcoin", cats: ["markets"], when: "Fr 18.09. Gold · Sa 19.09. Bitcoin",
      headline: "Gold klettert trotz hoher Zinsen auf rund 4.380 Dollar, Bitcoin springt übers Wochenende über 81.000 Dollar",
      sec30: "Gold stieg am Freitag um 0,77 % auf rund 4.380 Dollar je Feinunze, obwohl die US-Rendite auf etwa 5 % gestiegen war. Bitcoin legte zwischen Freitagmorgen (≈ 77.980 $) und Samstagnachmittag (≈ 81.350 $) deutlich zu.",
      blocks: [
        { h: "Gold: Sicherer Hafen trotz hoher Zinsen", items: [
          { tag: "fakt", text: "Gold schloss am Freitag bei rund 4.379,82 Dollar je Feinunze, ein Plus von 0,77 %. In Euro entspricht das rund 3.822 € je Feinunze.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Eigentlich sprechen ein starker Dollar und hohe Anleiherenditen gegen einen steigenden Goldpreis, weil Gold keine Zinsen zahlt. Dass Gold trotzdem stieg, deuten Beobachter als Zeichen für anhaltende Nachfrage nach einem sicheren Hafen, etwa wegen der Nahost-Eskalation." }
        ]},
        { h: "Bitcoin: Sprung übers Wochenende", items: [
          { tag: "fakt", text: "Bitcoin lag am Freitag um 8 Uhr US-Ostküstenzeit bei rund 77.980 Dollar und am Samstag um 16:12 Uhr Ostküstenzeit bei rund 81.354 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "unbestaetigt", text: "Ein weiterer Marktbericht nennt für Samstag einen leicht abweichenden Wert von 81.754,50 Dollar. Eine eindeutige Ursache für den Kursanstieg übers Wochenende nennen die gesichteten Quellen nicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold und Bitcoin werden beide gelegentlich als „Absicherung“ beschrieben, funktionieren aber unterschiedlich: Gold gilt traditionell als sicherer Hafen in Krisenzeiten, Bitcoin wird von vielen Anlegern eher wie eine riskante Wachstumsanlage behandelt.",
            ask: [{ label: "Was bedeutet ein starker Dollar?", ref: "e:eurusd-meaning" }] }
        ]}
      ],
      reaction: "Die US-Rendite stieg am Freitag auf rund 5,01 %, was Gold eigentlich hätte belasten sollen.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Kettner Edelmetalle: Goldpreis aktuell", url: "https://www.kettner-edelmetalle.de/wissen/goldpreis" },
        { title: "Fortune: Price of Bitcoin, Sept. 18, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-18-2026/" },
        { title: "The Motley Fool: Stock market midday, Sept. 18 – stocks slip, crypto gains", url: "https://www.fool.com/coverage/stock-market-today/2026/09/18/stock-market-midday-sept-18-stocks-slip-crypto-gains/" }
      ]
    },

    /* 6 WAHL BERLIN/MV + MERZ-KRISE */
    {
      id: "wahl-merz", cats: ["germany"], when: "So 20.09. · Wahltag",
      headline: "Berlin und Mecklenburg-Vorpommern wählen – Wahl fällt in Führungskrise von Kanzler Merz",
      sec30: "Heute wählen Berlin und Mecklenburg-Vorpommern neue Landesparlamente, erste Prognosen kommen ab 18 Uhr. Die Wahl findet vor dem Hintergrund einer Führungskrise der CDU statt: Nach dem AfD-Rekordergebnis in Sachsen-Anhalt am 6. September trifft sich heute um 17 Uhr das CDU-Präsidium, Kanzler Merz sagte deshalb seine USA-Reise ab.",
      blocks: [
        { h: "Was ist heute los?", items: [
          { tag: "fakt", text: "Die Wahllokale in Berlin und Mecklenburg-Vorpommern schließen um 18 Uhr, danach folgen erste Prognosen und im Lauf des Abends Hochrechnungen. Das vorläufige amtliche Endergebnis wird laut Ankündigung des Landeswahlleiters Berlin erst in der Nacht erwartet.",
            ask: [{ label: "Warum sind Landtagswahlen bundespolitisch wichtig?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "Die Wahlbeteiligung war laut Zwischenständen deutlich höher als bei den letzten Wahlen: In Mecklenburg-Vorpommern lag sie um 14 Uhr bei 40,7 % (2021 zur gleichen Zeit: 32,5 %), in Berlin um 12 Uhr bei 27,9 % (rund 4,5 Punkte mehr als 2023)." }
        ]},
        { h: "Wie war die Ausgangslage vor der Wahl?", items: [
          { tag: "fakt", text: "In Mecklenburg-Vorpommern sah die letzte Umfrage der Forschungsgruppe Wahlen (erhoben 14.–17.09.) ein knappes Rennen: SPD 37 %, AfD 36 %, Die Linke 9 %, CDU 6 %, Grüne 5 %, BSW 4 %. Amtierende Ministerpräsidentin Manuela Schwesig (SPD) tritt gegen AfD-Spitzenkandidat Leif-Erik Holm an." },
          { tag: "fakt", text: "In Berlin sahen die letzten Umfragen (Infratest dimap 7.–10.09., Forschungsgruppe Wahlen 11.09.) Die Linke mit 21–23 % erstmals als mögliche stärkste Kraft, vor CDU (20 %), AfD (18 %), Grünen (15–16 %) und SPD (12 %)." }
        ]},
        { h: "Warum ist diese Wahl bundespolitisch besonders im Blick?", items: [
          { tag: "fakt", text: "Bei der Landtagswahl in Sachsen-Anhalt am 6.9. wurde die AfD mit 43,8 % stärkste Kraft, die CDU stürzte auf 17,2 % ab (−19,9 Punkte). Kanzler Friedrich Merz (CDU) nannte es laut Bericht die schwerste Wahlniederlage seit Jahren." },
          { tag: "fakt", text: "Laut einer ZDF-Umfrage sahen rund drei Viertel der Befragten Merz als mitverantwortlich für das Ergebnis. Mehrere Medien berichteten von wachsendem CDU-internem Druck auf ihn.",
            ask: [{ label: "Was bedeutet „keine Mehrheit“ für eine Koalition?", ref: "e:coalition-majority" }] },
          { tag: "fakt", text: "Das CDU-Präsidium trifft sich heute um 17 Uhr, eine Stunde vor Schließung der Wahllokale. Mehrere Zeitungen (Tagesspiegel, Handelsblatt) beschreiben ein mögliches Vertrauensvotum, ohne dass der Ausgang zum Zeitpunkt der Berichterstattung feststand." },
          { tag: "fakt", text: "Merz sagte seine für die kommende Woche geplante Reise zur UN-Generaldebatte in New York sowie die Verleihung des Henry-Kissinger-Preises ab, um in Berlin präsent zu sein." }
        ]},
        { h: "Was wird für danach diskutiert?", items: [
          { tag: "position", text: "In Berlin gilt Rot-Rot-Grün (Linke-SPD-Grüne) als eine wahrscheinliche Koalitionsoption; die Linke macht laut Berichten einen Volksentscheid zur Vergesellschaftung großer Wohnungskonzerne zur Bedingung. Eine Koalition mit der AfD schließen alle anderen Parteien aus." }
        ]}
      ],
      reaction: "Erste Prognosen werden ab 18 Uhr erwartet, das amtliche Ergebnis folgt in der Nacht.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "ZDFheute: Liveticker – Wahl Berlin, Landtagswahl Mecklenburg-Vorpommern", url: "https://www.zdfheute.de/politik/deutschland/wahl-berlin-landtagswahl-mecklenburg-vorpommern-prognose-hochrechnung-ergebnisse-liveticker-100.html" },
        { title: "dawum.de: Umfrage Mecklenburg-Vorpommern, Forschungsgruppe Wahlen 17.09.2026", url: "https://dawum.de/Mecklenburg-Vorpommern/Forschungsgruppe_Wahlen/2026-09-17/" },
        { title: "wahlrecht.de: Umfragen Abgeordnetenhauswahl Berlin", url: "https://www.wahlrecht.de/umfragen/landtage/berlin.htm" },
        { title: "Tagesspiegel: Kommt es zum Schwur? Merz könnte am Sonntag im CDU-Präsidium die Vertrauensfrage stellen", url: "https://www.tagesspiegel.de/politik/kommt-es-zum-schwur-merz-konnte-am-sonntag-im-cdu-prasidium-die-vertrauensfrage-stellen-16053087.html" },
        { title: "Tagesspiegel/dpa: Merz sagt Reise zur UN-Generaldebatte nach New York ab", url: "https://www.tagesspiegel.de/politik/dpa-merz-sagt-reise-zur-un-generaldebatte-nach-new-york-ab-16057110.html" }
      ]
    },

    /* 7 HAUSHALT + RENTE */
    {
      id: "haushalt-rente", cats: ["germany"], when: "KW 37 · Haushaltseinbringung / Sept. 2026 Rentendebatte",
      headline: "Bundeshaushalt 2027 sieht rund 200 Mrd. € Neuverschuldung vor, Rentenreform steckt im Koalitionsstreit",
      sec30: "Finanzminister Lars Klingbeil (SPD) hat den Haushaltsentwurf 2027 mit Ausgaben von 555,4 Mrd. € in den Bundestag eingebracht, die Gesamtneuverschuldung inklusive Sondervermögen und Verteidigung liegt bei rund 200 Mrd. €. Bei der Rentenreform gibt es Streit zwischen Kanzleramt und Arbeitsministerium über Tempo und Umfang der Umsetzung, der DGB ruft für den 26.9. zu Protesten auf.",
      blocks: [
        { h: "Was ist im Haushalt 2027 geplant?", items: [
          { tag: "fakt", text: "Der Entwurf sieht Ausgaben von 555,4 Mrd. € vor (2026: 524,5 Mrd. €). Die Nettokreditaufnahme innerhalb der Schuldenbremse soll bei 118,7 Mrd. € liegen (2026 geplant: 98 Mrd. €).",
            ask: [{ label: "Wie entsteht der Bundeshaushalt?", ref: "e:haushalt-basics" }] },
          { tag: "fakt", text: "Zusammen mit den von der Schuldenbremse ausgenommenen Sondervermögen für Infrastruktur/Klimaneutralität und den Verteidigungsausgaben über 1 % des BIP soll die gesamte Neuverschuldung 2027 bei rund 200 Mrd. € liegen. Die dafür genutzte Kreditaufnahme soll von 85,4 Mrd. € (2027) auf 151,8 Mrd. € (2030) steigen.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "e:debt-brake" }, { label: "Was bedeutet das NATO-Ziel von 5 % des BIP?", ref: "e:nato-target" }] },
          { tag: "position", text: "Klingbeil verteidigte den Kurs im Bundestag: Man könne sich nicht mit einem ausgeglichenen Haushalt gegen Russlands Präsidenten Putin verteidigen, der Haushalt sei verfassungskonform." }
        ]},
        { h: "Was ist bei der Rente geplant?", items: [
          { tag: "fakt", text: "Die Alterssicherungskommission übergab der Bundesregierung am 23.06.2026 insgesamt 33 Empfehlungen, darunter die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren (\"Rente mit 63\"), ein dynamisches Renteneintrittsalter und eine neue Schutzrente für gesundheitlich beeinträchtigte Langzeitbeschäftigte.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Der Koalitionsausschuss würdigte den Bericht am 02.07. und kündigte eine vollständige und zügige Umsetzung an. Ziel ist, das Gesetzgebungsverfahren bis Ende 2026 abzuschließen." },
          { tag: "position", text: "Arbeitsministerin Bärbel Bas (SPD) betont laut Berichten, der Kommissionsbericht sei keine bindende politische Einigung, und fordert mehr Debatte zu Langzeitbeschäftigten und Erwerbsminderungsrentnern. Merz (CDU) drängt dagegen auf die vollständige Umsetzung des Gesamtpakets und warnte laut Bericht vor einer Regierungskrise, sollte die Koalition einzelne Punkte herausbrechen." },
          { tag: "unbestaetigt", text: "Am 18.09. wurde ein erster, noch nicht koalitionsintern abgestimmter Arbeitsentwurf aus dem Bundesarbeitsministerium bekannt. Ob der Zeitplan bis Jahresende hält, ist laut Berichten aus Berlin offen." }
        ]},
        { h: "Wer unterstützt, wer kritisiert?", items: [
          { tag: "position", text: "Der DGB (Vorsitzende Yasmin Fahimi) lehnt die Pläne als grundsätzlich unfair ab und fordert statt eines höheren Renteneintrittsalters ein höheres Rentenniveau (derzeit 48 %, soll auf 50 % und dann 53 % steigen). Der DGB ruft für den 26.09. unter dem Motto „Hart erarbeitet!“ zu Protesten in 15 deutschen Großstädten auf.",
            ask: [{ label: "Was bedeutet „keine Mehrheit“ für eine Koalition?", ref: "e:coalition-majority" }] },
          { tag: "position", text: "Verdi-Chef Frank Werneke forderte sozial ausgewogene statt pauschale Kürzungen. Der Arbeitgeberverband BDA (Präsident Rainer Dulger) warnt vor einer Mehrbelastung der Wirtschaft von über 40 Mrd. € jährlich durch eine geplante zusätzliche Kapitalrente (2 % Zusatzbeitrag) und befürchtet einen Anstieg des gesamten Sozialversicherungsbeitrags auf 22 % bis 2031." }
        ]}
      ],
      reaction: "Die Debatte fällt auf den Tag der Landtagswahlen in Berlin und Mecklenburg-Vorpommern (Meldung 6).",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:rente-basics", "e:nato-target"],
      sources: [
        { title: "ZDFheute: Haushalt-Entwurf 2027 – Eckpunkte", url: "https://www.zdfheute.de/politik/deutschland/haushalt-entwurf-2027-eckpunkte-klingbeil-100.html" },
        { title: "ZDFheute: Klingbeil, Haushalt, Neuverschuldung", url: "https://www.zdfheute.de/politik/deutschland/klingbeil-haushalt-neuverschuldung-100.html" },
        { title: "Bundesregierung: FAQ Rentenreform", url: "https://www.bundesregierung.de/breg-de/aktuelles/faq-rentenreform-2444534" },
        { title: "ad-hoc-news.de: DGB-Proteste 26. September, Fahimi fordert Nachbesserungen bei Rente", url: "https://www.ad-hoc-news.de/wirtschaft/dgb-proteste-26-september-fahimi-fordert-nachbesserungen-bei-rente/70135035" },
        { title: "ad-hoc-news.de: Rentenreform – BDA warnt vor 40 Milliarden Euro Mehrkosten", url: "https://www.ad-hoc-news.de/wirtschaft/rentenreform-bda-warnt-vor-40-milliarden-euro-mehrkosten/69874996" }
      ]
    },

    /* 8 HUTHI RIAD/YANBU */
    {
      id: "huthi-riad", cats: ["world", "geo"], when: "Sa 19.09. · Nacht",
      headline: "Huthi greifen nach saudischer Darstellung erstmals Riad an, Rakete nahe Flughafen abgefangen",
      sec30: "In der Nacht zum Samstag versuchten die jemenitischen, iranisch unterstützten Huthi-Rebellen laut saudischer Darstellung erstmals seit Beginn der aktuellen Eskalation, die Hauptstadt Riad mit einer ballistischen Rakete anzugreifen. Die Rakete wurde nach saudischen Angaben abgefangen, weitere Angriffe auf die Hafenstadt Yanbu und andere Orte seien vereitelt worden. Das US-Außenministerium warnte vor einer raschen Eskalation.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Saudi-Arabien meldete, die Huthi hätten versucht, Riad mit einer ballistischen Rakete anzugreifen; die Rakete sei nahe dem King-Khalid-Flughafen abgefangen und zerstört worden. Anwohner berichteten von einer Explosion und einer Rauchwolke. Verletzte oder Sachschäden wurden nicht bestätigt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Die Huthi teilten laut Sprecher Yahya Saree mit, sie hätten „als Reaktion auf saudische Angriffsversuche auf Sanaa“ zwei Militäroperationen mit ballistischen Raketen, Marschflugkörpern und Drohnen durchgeführt, unter anderem gegen Ziele in Yanbu sowie versucht gegen Taif, Baysh und Farasan." },
          { tag: "unbestaetigt", text: "Eine einzelne Quelle (Eastern Herald) berichtet, ein Aramco-Treibstoffdepot nahe dem Flughafen sei getroffen worden. Die Hauptagenturen (NPR, Reuters/Euronews, NBC) sprechen dagegen von keinen bestätigten Schäden. Aramco äußerte sich auf Presseanfragen nicht." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Es ist nach den gesichteten Berichten der erste Versuch, die saudische Hauptstadt selbst zu treffen, seit die aktuelle Eskalation begann. Yanbu ist zugleich ein wichtiger Ölexporthafen und Endpunkt einer zentralen saudischen Pipeline, die Routen um die gestörte Straße von Hormus bietet.",
            ask: [{ label: "Warum kann ein Konflikt den Ölpreis erhöhen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "Das US-Außenministerium warnte, die Feindseligkeiten zwischen Saudi-Arabien und den Huthi könnten rasch eskalieren, und gab eine erhöhte Reisewarnung für Amerikaner im Nahen Osten heraus." },
          { tag: "unbestaetigt", text: "Mehreren Berichten zufolge brach US-Präsident Trump sein Wochenende in Camp David ab und kehrte überraschend ins Weiße Haus zurück; eine offizielle Begründung dafür wurde nicht mitgeteilt." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beteiligt sind die jemenitischen, von Iran unterstützten Huthi-Rebellen, Saudi-Arabien und die USA. Im Hintergrund steht der seit Ende Februar 2026 laufende Krieg zwischen den USA/Israel und Iran." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Am 8. April 2026 vereinbarten die Konfliktparteien einen von Pakistan vermittelten Waffenstillstand, der am 21. April auf unbestimmte Zeit verlängert wurde. Am 17. Juni unterzeichneten die USA und Iran ein Memorandum zur Kriegsbeendigung. Dieser Deal kollabierte am 8. Juli, nachdem Iran Angriffe auf Handelsschiffe in der Straße von Hormus begann. Seither gelten die Huthi laut einem Lagebericht als „aktivstes Kriegsschauplatz“." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "fakt", text: "Brent schloss am Freitag, also vor dem Angriff vom Wochenende, bei rund 103,9 Dollar. Handelsdaten zur Reaktion auf den Riad-Angriff liegen wegen des Wochenendes noch nicht vor; sie dürften sich erst am Montag zeigen.",
            ask: [{ label: "Was bedeutet ein Ölpreis um 104 $?", ref: "n:brent" }] }
        ]}
      ],
      reaction: "Der Ölmarkt ist bis Montag geschlossen. Brent schloss am Freitag bei rund 103,9 Dollar (Meldung 15).",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:brent-wti", "e:oil-inflation", "e:energy-germany"],
      sources: [
        { title: "NPR: Saudi Arabia says Houthis tried to attack its capital", url: "https://www.npr.org/2026/09/19/nx-s1-5974980/saudi-arabia-houthis-attempted-attack-capital" },
        { title: "Euronews: Flames and smoke spotted at Riyadh's King Khalid airport after overnight air raid alert", url: "https://www.euronews.com/2026/09/19/flames-and-smoke-spotted-at-riyadhs-king-khalid-airport-after-overnight-air-raid-alert" },
        { title: "NBC News: Flames, smoke seen at Riyadh airport as Houthis claim attacks on Saudi capital", url: "https://www.nbcnews.com/world/middle-east/flames-smoke-seen-riyadh-airport-houthis-claim-attacks-saudi-capital-rcna598714" },
        { title: "Al-Monitor: US fears rapid escalation in Mideast after Houthis attack Riyadh", url: "https://www.al-monitor.com/originals/2026/09/us-fears-rapid-escalation-mideast-after-houthis-attack-riyadh" },
        { title: "Washington Examiner: State Department warning on Middle East after Houthi attack on Saudi Arabia", url: "https://www.washingtonexaminer.com/news/world/4734979/state-department-warning-middle-east-houthis-saudi-arabia/" }
      ]
    },

    /* 9 UKRAINE MOSKAU */
    {
      id: "ukraine-moskau", cats: ["world", "geo"], when: "Nacht So 20.09.",
      headline: "Größter Drohnenangriff auf Moskau seit Jahresbeginn trifft Ölraffinerie, USA verschärfen Russland-Sanktionen",
      sec30: "In der Nacht zum Sonntag feuerte die Ukraine laut russischem Verteidigungsministerium mehr als 1.000 Drohnen auf Russland ab, 1.110 seien über 19 Regionen und der Krim abgefangen worden — der höchste nächtliche Wert des Jahres. Eine Moskauer Ölraffinerie geriet in Brand, in der Region Moskau starben laut Gouverneur zwei Menschen. Parallel unterzeichnete Präsident Trump ein verschärftes Russland-Sanktionsgesetz.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Russlands Verteidigungsministerium meldete, in der Nacht zum Sonntag seien über 1.000 ukrainische Drohnen eingesetzt worden, 1.110 davon über 19 Regionen sowie über der Krim abgefangen — der bisher höchste nächtliche Wert 2026 (vorheriger Höchstwert: 822 im August)." },
          { tag: "fakt", text: "Getroffen wurden nach russischen Angaben eine Ölraffinerie in Moskau (Kapazität 11 Mio. Tonnen pro Jahr, laut Bericht rund 40 % des Moskauer Treibstoffmarkts) im Stadtteil Kapotnja sowie ein Wohngebäude. In der Region Moskau starben laut Gouverneur Andrei Vorobjov zwei Menschen, 20 wurden verletzt." },
          { tag: "position", text: "Moskaus Bürgermeister Sergej Sobjanin nannte es laut Bericht den größten je verzeichneten Drohnenangriff auf die Hauptstadt; in Moskau selbst habe es keine Verletzten gegeben." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der Angriff fiel in die letzten Tage der russischen Parlamentswahl, die laut Berichten erstmals auch in den von Russland annektierten ukrainischen Gebieten stattfand — ein international umstrittenes Vorgehen." },
          { tag: "einordnung", text: "Angriffe auf russische Ölraffinerien zielen nach Einschätzung von Beobachtern auf die Treibstoffversorgung und Staatseinnahmen Russlands aus dem Energiegeschäft." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Russlands Verteidigungsministerium macht die Ukraine für den Angriff verantwortlich; eine eigene ukrainische Bestätigung zu diesem konkreten Angriff wird in den gesichteten Quellen nicht genannt." },
          { tag: "fakt", text: "US-Präsident Trump unterzeichnete am 18.09. den „Lindsey O. Graham Sanctioning Russia and Iran Act of 2026“, der vom Senat mit 86:11 und vom Repräsentantenhaus mit 262:159 verabschiedet wurde. Das Gesetz erlaubt Zölle von bis zu 100 % auf Waren von Ländern, die russisches Öl oder Gas kaufen oder Sanktionen umgehen, und richtet sich gegen Russlands Energie- und Verteidigungssektor sowie Präsident Putin.",
            ask: [{ label: "Was ist ein Basispunkt (zum Vergleich Zölle vs. Zinsen)?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Das US-Außenministerium genehmigte am 19.09. einen möglichen Verkauf von Luftverteidigungsausrüstung im Wert von 2,68 Mrd. Dollar an die Ukraine, unter anderem Raketensysteme und Radare. Die Genehmigung unterliegt noch der Prüfung durch den Kongress." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der bisherige nächtliche Höchstwert an abgefangenen Drohnen lag laut Bericht bei 822 im August 2026. Der neue Angriff mit über 1.000 eingesetzten Drohnen übertrifft diesen Wert deutlich." }
        ]},
        { h: "Wirtschaftliche und politische Auswirkungen", items: [
          { tag: "einordnung", text: "Das neue US-Sanktionsgesetz zielt darauf, Käufer russischen Öls und Gases über hohe Zölle unter Druck zu setzen. Wie stark sich das in der Praxis auswirkt, hängt von der Umsetzung ab, die in den gesichteten Quellen noch nicht im Detail beschrieben ist." }
        ]}
      ],
      reaction: "Der Angriff fällt in eine Woche mit ohnehin erhöhter geopolitischer Spannung durch den Iran-Konflikt (Meldung 8).",
      terms: [],
      followups: [],
      sources: [
        { title: "NPR: Ukraine fires drones at Russia, hits Moscow region", url: "https://www.npr.org/2026/09/20/nx-s1-5975372/ukraine-fires-drones-at-russia-moscow" },
        { title: "Kyiv Independent: Russia says dozens of Ukrainian drones targeted Moscow as broader attack hit multiple regions", url: "https://kyivindependent.com/russia-says-dozens-of-ukrainian-drones-targeted-moscow-as-broader-attack-hit-multiple-regions/" },
        { title: "Ukrinform: Moscow claims record drone attack as oil refinery and warehouse complex in region catch fire", url: "https://www.ukrinform.net/amp/rubric-ato/4165906-moscow-claims-record-drone-attack-as-oil-refinery-and-warehouse-complex-in-region-catch-fire.html" },
        { title: "RFE/RL: Trump signs Russia and Iran sanctions act into law", url: "https://www.rferl.org/a/33859294.html" },
        { title: "UPI: State Department approves equipment sale to Ukraine", url: "https://www.upi.com/Top_News/US/2026/09/19/state-department-equipment-sale-ukraine/4001789851439/" }
      ]
    },

    /* 10 NATO BREUER */
    {
      id: "nato-breuer", cats: ["defence", "world"], when: "Sa 19.09. · Kopenhagen",
      headline: "Deutscher Generalinspekteur Breuer zum Vorsitzenden des NATO-Militärausschusses gewählt",
      sec30: "Bei einem Treffen der Generalstabschefs der 32 NATO-Staaten in Kopenhagen wurde der deutsche Generalinspekteur Carsten Breuer am Samstag zum neuen Vorsitzenden des NATO-Militärausschusses gewählt. Er tritt das Amt im Juli 2027 für drei Jahre an und wird oberster militärischer Berater von NATO-Generalsekretär Mark Rutte.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "General Carsten Breuer wurde am 19.09. in Kopenhagen von den Generalstabschefs der 32 NATO-Mitgliedstaaten zum Vorsitzenden des NATO-Militärausschusses gewählt. Er übernimmt das Amt im Juli 2027 für eine dreijährige Amtszeit und wird damit oberster militärischer Berater von NATO-Generalsekretär Mark Rutte." },
          { tag: "fakt", text: "Breuer (61) ist seit März 2023 Generalinspekteur der Bundeswehr. Er wurde als „Kanzlergeneral“ bekannt, nachdem der damalige Bundeskanzler Olaf Scholz ihn 2021/22 mit der Leitung eines Corona-Krisenstabs betraut hatte." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Der NATO-Militärausschuss berät die politische Führung der NATO in militärischen Fragen. Die Wahl eines Deutschen an die Spitze fällt in eine Phase, in der Deutschland seine Verteidigungsausgaben deutlich ausweitet.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 % des BIP?", ref: "e:nato-target" }] },
          { tag: "fakt", text: "Laut NATO-Angaben gaben die europäischen Bündnispartner und Kanada 2025 zusammen über 90 Mrd. Dollar mehr für Verteidigung aus als im Vorjahr (rund +20 %). Für 2026 sollen fünf Staaten die 3,5-%-Kernverteidigungsrichtlinie und siebzehn Staaten die 1,5-%-Sicherheitsinvestitionsrichtlinie erfüllen." }
        ]}
      ],
      reaction: "Die Wahl fällt in eine Woche, in der auch der deutsche Bundeshaushalt 2027 mit deutlich steigenden Verteidigungsausgaben beraten wird (Meldung 7).",
      terms: [],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "Euronews: Germany's defence chief Carsten Breuer chosen to head NATO military committee", url: "https://www.euronews.com/my-europe/2026/09/19/germanys-defence-chief-carsten-breuer-chosen-to-head-nato-military-committee" },
        { title: "CNBC: German general Breuer elected to head top NATO military body", url: "https://www.cnbc.com/2026/09/19/german-general-breuer-elected-to-head-top-nato-military-body.html" },
        { title: "NATO: Defence Investment Update – record spending in Europe and Canada", url: "https://www.nato.int/en/news-and-events/articles/news/2026/07/07/defence-investment-update-record-spending-in-europe-and-canada" }
      ]
    },

    /* 11 RHEINMETALL */
    {
      id: "rheinmetall", cats: ["defence", "markets"], when: "Mo 14.09. · Auftrag / Fr 18.09. · Kurs",
      headline: "Rheinmetall erhält Großauftrag über Artilleriemunition, Aktie bei rund 1.013 Euro",
      sec30: "Rheinmetall hat von einem international nicht namentlich genannten Kunden einen Auftrag über mehrere zehntausend 155-mm-Artilleriegranaten erhalten, im niedrigen dreistelligen Millionen-Euro-Bereich, Lieferung bis 2027. Die Aktie notierte am Freitag bei rund 1.013 Euro.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Rheinmetall meldete am 14.09. einen Auftrag über die Lieferung mehrerer Zehntausend 155-mm-Artilleriegranaten. Der Auftragswert liegt im niedrigen dreistelligen Millionen-Euro-Bereich, die Lieferung soll bis 2027 erfolgen, die Produktion sei bereits angelaufen.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Den Kunden nennt Rheinmetall firmenüblich für Exportverträge dieser Art nicht. Die gelieferte Munition sei bereits bei mehreren NATO-Staaten im Einsatz und mit gängigen 155-mm-Waffensystemen kompatibel." }
        ]},
        { h: "Wie steht die Aktie?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie notierte am Freitag bei rund 1.011 bis 1.014 Euro, ein Rückgang von rund 0,3 bis 0,4 % zum Vortag. Das 52-Wochen-Hoch lag bei 2.007 Euro (03.10.2025), das 52-Wochen-Tief bei 902,50 Euro (25.06.2026).",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "Angaben zum genauen Kurs und zum durchschnittlichen Analysten-Kursziel (rund 1.865 Euro) stammen aus Web-Suchergebnissen und sollten vor einer Anlageentscheidung mit einer Live-Quelle abgeglichen werden." }
        ]},
        { h: "Einordnung", items: [
          { tag: "einordnung", text: "Der Auftrag fällt in eine Phase steigender NATO-Verteidigungsausgaben und eines deutschen Bundeshaushalts 2027, der die Kreditaufnahme für Verteidigung deutlich ausweitet.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 % des BIP?", ref: "e:nato-target" }, { label: "Was ist im Haushalt 2027 geplant?", ref: "s:7" }] }
        ]}
      ],
      reaction: "Der DAX, in dem Rheinmetall notiert ist, verlor am Freitag insgesamt 1,6 % (Meldung 3).",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target", "e:haushalt-basics"],
      sources: [
        { title: "suv.report: Rheinmetall erhält Großauftrag über 155-mm-Artilleriemunition", url: "https://suv.report/rheinmetall-erhaelt-grossauftrag-ueber-155-mm-artilleriemunition/" },
        { title: "ad-hoc-news.de: Rheinmetall stock gains on new artillery ammunition contract and solid …", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/rheinmetall-stock-gains-on-new-artillery-ammunition-contract-and-solid/70099196" },
        { title: "finanzen.net: Rheinmetall-Aktie", url: "https://www.finanzen.net/aktien/rheinmetall-aktie" }
      ]
    },

    /* 12 GFL / MISTRAS / DEALS */
    {
      id: "gfl-mistras", cats: ["deals", "pe"], when: "Do 17.09. GFL-Gebote / Fr 18.09. MISTRAS-Vereinbarung",
      headline: "H.I.G. Capital übernimmt MISTRAS für 866 Mio. $, um GFL Environmental liefern sich zwei Investorengruppen ein Bietergefecht",
      sec30: "H.I.G. Capital übernimmt den Prüfdienstleister MISTRAS Group für 20,35 Dollar je Aktie (Unternehmenswert rund 866 Mio. $), eine 40-tägige Go-Shop-Frist läuft bis 27.10. Um den kanadischen Entsorger GFL Environmental (Marktwert rund 18 Mrd. $ plus 10 Mrd. $ Schulden) konkurrieren laut Bloomberg zwei Konsortien: KKR/Energy Capital Partners/Blackstone gegen Brookfield/IFM Investors.",
      deal: { value: "≈ 866 Mio. $ (Unternehmenswert)", buyer: "H.I.G. Capital", target: "MISTRAS Group", sector: "Industrielle Prüf- und Instandhaltungsdienstleistungen", type: "Take-private" },
      blocks: [
        { h: "MISTRAS: Was ist passiert?", items: [
          { tag: "fakt", text: "H.I.G. Capital und MISTRAS Group unterzeichneten am 18.09. eine endgültige Vereinbarung: 20,35 Dollar je Aktie in bar, Unternehmenswert rund 866 Mio. Dollar (eine Quelle nennt 870 Mio. $). Das entspricht einer Prämie von rund 8 % zum 30-Tage- und 13 % zum 90-Tage-Durchschnittskurs.",
            ask: [{ label: "Was passiert bei einer Übernahme?", ref: "e:ma-steps" }, { label: "Warum nehmen Investoren Firmen von der Börse?", ref: "e:take-private-why" }] },
          { tag: "fakt", text: "Mit H.I.G. verbundene Parteien halten bereits Stimmrechtsvereinbarungen über rund 31 % der ausstehenden Aktien, der Vorstand stimmte einstimmig zu. Eine 40-tägige Go-Shop-Frist mit Berater Baird läuft bis zum 27.10.2026, in der MISTRAS aktiv nach besseren Angeboten suchen kann.",
            ask: [{ label: "Welche Risiken bestehen bis zum Closing?", ref: "e:deal-risks" }] },
          { tag: "unbestaetigt", text: "Zu Finanzierungsbanken, einem EV/EBITDA-Multiple oder konkurrierenden Angeboten für MISTRAS wird in den gesichteten Quellen nichts genannt.",
            ask: [{ label: "Was bedeutet Enterprise Value und EBITDA-Multiple?", ref: "e:ev-ebitda" }] }
        ]},
        { h: "GFL Environmental: Bietergefecht", items: [
          { tag: "fakt", text: "Laut Bloomberg-Bericht vom 16.09. haben zwei Investorengruppen Gebote für GFL Environmental abgegeben: KKR mit Energy Capital Partners und Blackstone auf der einen, Brookfield Asset Management mit IFM Investors auf der anderen Seite. GFL hat einen Marktwert von rund 18 Mrd. $ und rund 10 Mrd. $ Schulden.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] },
          { tag: "position", text: "GFL-Chef Patrick Dovigi zeigte sich laut Bloomberg offen für Angebote über dem aktuellen Aktienkurs, betonte aber, es sei noch keine Entscheidung gefallen." },
          { tag: "unbestaetigt", text: "Zu Gebotshöhe, Finanzierung oder einer Entscheidungsfrist wird in den gesichteten Quellen nichts genannt. Ein Zuschlag für eines der beiden Konsortien wäre einer der größten Leveraged Buyouts des Jahres." }
        ]},
        { h: "Weitere Deals der Woche", items: [
          { tag: "fakt", text: "Der Versicherungsmakler Baldwin Group geht für 32,50 $ je Aktie (Unternehmenswert rund 7,7 Mrd. $) durch Sequence Holdings und das Family Office von Michael Dell (DFO Management) von der Börse, eine Prämie von rund 88 % zum unbeeinflussten Kurs vom 17.06." },
          { tag: "fakt", text: "Copart übernimmt die Online-Auktionsplattform ACV Auctions für 10,50 $ je Aktie (rund 1,9 Mrd. $, 45 % Prämie), laut Unternehmen Coparts bislang größter Zukauf." },
          { tag: "fakt", text: "Blackstone übernimmt Flow Control Holdings (Kühlkomponenten für Rechenzentren) von Audax Private Equity; der Kaufpreis wurde nicht offengelegt, laut Bericht sicherte sich Blackstone dafür einen Kredit bei UBS." }
        ]}
      ],
      reaction: "Alle genannten Deals sind noch nicht abgeschlossen (\"pending\"), bis zum Closing können sich Details noch ändern.",
      terms: ["take-private", "lbo", "enterprise-value", "closing"],
      followups: ["e:ma-steps", "e:take-private-why", "e:lbo", "e:pe-money", "e:deal-risks", "e:ev-ebitda"],
      sources: [
        { title: "GlobeNewswire: MISTRAS Group enters into definitive agreement to be acquired by H.I.G. Capital for $20.35 per share in cash", url: "https://www.globenewswire.com/news-release/2026/09/18/3364639/12235/en/mistras-group-inc-enters-into-definitive-agreement-to-be-acquired-by-h-i-g-capital-for-20-35-per-share-in-cash.html" },
        { title: "citybiz: H.I.G. Capital to acquire MISTRAS Group in $866 million deal", url: "https://www.citybiz.co/article/905694/h-i-g-capital-to-acquire-mistras-group-in-866-million-deal/" },
        { title: "waste360: Blackstone and Brookfield consortia to bid for GFL", url: "https://www.waste360.com/industry-insights/blackstone-and-brookfield-consortia-to-bid-for-gfl" },
        { title: "Businesswire: The Baldwin Group to go private through majority investment by Sequence Holdings and Dell family office", url: "https://www.businesswire.com/news/home/20260914720607/en/The-Baldwin-Group-to-Go-Private-Through-Majority-Investment-by-Sequence-Holdings-and-Dell-Family-Office" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit", cats: ["credit"], when: "Anfang Sept. Loparex / Fitch-Report Q2 2026",
      headline: "Blue Owl schreibt Loparex-Kredit auf 5 Cent ab, Fitch-Report zeigt hohe BDC-Rücknahmewünsche",
      sec30: "Blue Owls Business Development Company OBDC hat einen Second-Lien-Kredit an den Folienhersteller Loparex auf rund 5 Cent je Dollar abgeschrieben, Moody's stuft Loparex als ausgefallen ein. Ein Fitch-Report zeigt: 10 von 16 beobachteten nicht börsengehandelten BDCs konnten im zweiten Quartal 2026 Rücknahmewünsche nicht vollständig bedienen, die durchschnittliche Rücknahmequote stieg auf 10,3 %.",
      blocks: [
        { h: "Was ist der Stand bei Loparex?", items: [
          { tag: "fakt", text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex nur noch mit rund 5 Cent je Dollar (Ende März noch rund 63 Cent, Ende 2025 rund 88 Cent). Ein First-Lien-Kredit, zuvor nahe dem Nennwert, steht bei rund 22 Cent.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Was ist ein First-Lien- bzw. Second-Lien-Kredit?", ref: "t:first-lien" }] },
          { tag: "fakt", text: "Auslöser war laut Bericht ein gescheiterter M&A-Deal, der frisches Eigenkapital hätte bringen sollen. Loparex verpasste im Juni eine Zinszahlung auf die Second-Lien-Schulden und befindet sich in Forbearance (Stundung) bis September 2026. Moody's stuft Loparex als „in default“ ein und warnt vor einer möglichen Chapter-11-Insolvenz." },
          { tag: "unbestaetigt", text: "Loparex versucht laut Bericht, rund 1,5 Mrd. $ von Private-Credit-Gebern zur Refinanzierung von First- und Second-Lien-Schulden zu beschaffen, die teils Anfang 2027 fällig werden. Ob dies gelingt, ist in den gesichteten Quellen offen." }
        ]},
        { h: "Was zeigt der Fitch-Report?", items: [
          { tag: "fakt", text: "Laut Fitch-Ratings-Report für das zweite Quartal 2026 konnten 10 von 16 beobachteten nicht börsengehandelten BDCs Rücknahmewünsche nicht vollständig bedienen. Die durchschnittliche Rücknahmequote stieg auf 10,3 % der Anteile (Q1: 9,7 %), mit einer Spanne von 1,3 % bis 38,1 %. Blue Owl Technology Income Corp (OTIC) hatte laut Bericht die höchste Rücknahmequote der Gruppe.",
            ask: [{ label: "Warum begrenzen Kreditfonds Rücknahmen?", ref: "e:redemption-limits" }] },
          { tag: "fakt", text: "Insgesamt forderten Anleger im zweiten Quartal 2026 laut Bericht 15,6 Mrd. $ an Rücknahmen bei den beobachteten BDCs." },
          { tag: "fakt", text: "Laut einem weiteren Bericht (Octus) stiegen die Non-Accruals im ersten Quartal 2026 um 40 % gegenüber dem Vorquartal auf rund 9,98 Mrd. $ zu Anschaffungskosten.",
            ask: [{ label: "Woran erkennt man Stress in Private Credit?", ref: "e:nonaccrual-default" }] }
        ]},
        { h: "Was hat das mit den Zinsen zu tun?", items: [
          { tag: "einordnung", text: "Viele Private-Credit-Kredite sind variabel verzinst (SOFR plus Aufschlag). Nach der Fed-Erhöhung steigt SOFR, und Schuldner zahlen mehr. Das erhöht die Erträge der Fonds, belastet aber schwächere Kreditnehmer zusätzlich.",
            ask: [{ label: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?", ref: "e:sofr-spread" }, { label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }] }
        ]}
      ],
      reaction: "Die US-Rendite (und damit SOFR-nahe Referenzzinsen) stieg am Freitag auf rund 5,01 % (Meldung 4).",
      terms: ["sofr", "first-lien", "second-lien", "default-rate", "non-accrual", "bdc", "nav"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Bloomberg / Private Equity Wire: Blue Owl slashes Loparex loan valuation as bankruptcy risk mounts", url: "https://www.privateequitywire.co.uk/blue-owl-slashes-loparex-loan-valuation-as-bankruptcy-risk-mounts/" },
        { title: "Angel Investors Network: BDC redemption crisis 2026 – private credit liquidity gates", url: "https://angelinvestorsnetwork.com/alternative-investments/bdc-redemption-crisis-2026-private-credit-liquidity-gates" },
        { title: "Octus: BDC Weekly Roundup", url: "https://octus.com/resources/articles/octus-bdc-weekly-roundup-061626/" }
      ]
    },

    /* 14 AI SLOWDOWN / CHIPS */
    {
      id: "ai-slowdown", cats: ["tech", "markets"], when: "13.–18.09.2026",
      headline: "KI-Sicherheitsdebatte weitet sich aus, Speicherchip-Werte legen am Freitag deutlich zu",
      sec30: "Nach dem Aufruf von Anthropic-Chef Dario Amodei zur Verlangsamung der KI-Entwicklung verhandeln OpenAI, Anthropic und Google DeepMind laut TechCrunch seit Wochen über KI-Sicherheit, beide Erstgenannten sollen bei der US-Regierung für ein Gesetz zum „KI-Einfrieren“ werben. Am Freitag legten Speicherchip-Werte wie SanDisk und Seagate deutlich zu, der Philadelphia-Halbleiterindex schloss 2,78 % höher.",
      blocks: [
        { h: "Was ist neu in der KI-Debatte?", items: [
          { tag: "position", text: "Amodei nannte China laut CNBC-Bericht vom 13.09. das „schwierigste Dilemma“ für seinen Verlangsamungsvorschlag: Bremse nur ein Teil der Welt die Entwicklung, könnte das anderen einen Vorsprung verschaffen.",
            ask: [{ label: "Warum investieren Konzerne Milliarden in KI-Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Die staatsnahe chinesische Zeitung Global Times bezeichnete den Vorschlag laut Bericht als Vorgehen im Stil des Kalten Krieges, mit dem eigentlichen Ziel, Chinas KI-Entwicklung durch technologische Barrieren zu bremsen." },
          { tag: "fakt", text: "Am 15.09. bestätigte OpenAI-Politikchef Chris Lehane, dass OpenAI seit Wochen mit Anthropic und Google DeepMind über KI-Sicherheit verhandelt. Laut Berichten fordern OpenAI und Anthropic von der US-Regierung ein Gesetz zum „KI-Einfrieren“; unter den Unterstützern desselben Gesetzentwurfs werden laut Bericht auch Steve Bannon und Bernie Sanders genannt — eine ungewöhnliche politische Koalition." },
          { tag: "position", text: "US-Senator Mark Warner wies laut Bericht „Untergangs-Rhetorik“ zurück, forderte aber, der Kongress solle bis Jahresende 2026 KI-Sicherheitsstandards festlegen." }
        ]},
        { h: "Wie reagierten die Märkte am Freitag?", items: [
          { tag: "fakt", text: "Speicherchip-Werte legten am 18.09. deutlich zu: SanDisk +10,99 %, Seagate +6,93 %, Western Digital +4,13 %, Micron +3,92 %, SK Hynix +2,46 %. Der Philadelphia-Halbleiterindex (SOX) schloss 2,78 % höher.",
            ask: [{ label: "Warum entwickeln KI-Firmen eigene Chips?", ref: "e:custom-chips" }] },
          { tag: "position", text: "Berichte führen die Rally auf eine Sektorrotation und optimistische Aussagen von Nvidia-Chef Jensen Huang zu künftigen Chipabsätzen zurück, weniger auf neue Kapitalzuflüsse." },
          { tag: "fakt", text: "In Frankfurt legten Infineon (nach Hochstufung durch Oddo BHF) und Siltronic (nach einer UBS-Kurszielanhebung von 105 auf 120 €) zu." }
        ]},
        { h: "Sicherheitslücke bei mehreren KI-Coding-Tools entdeckt", items: [
          { tag: "fakt", text: "Am 18.09. meldeten Sicherheitsforscher eine kritische Schwachstelle („Plugin4Shell“), die es erlauben soll, bösartigen Plugin-Code an Sicherheitsprüfungen vorbei in mehrere KI-Coding-Werkzeuge gleichzeitig einzuschleusen, laut Bericht betroffen waren Claude Code, OpenAI Codex, GitHub Copilot und Gemini CLI." }
        ]},
        { h: "Einordnung", items: [
          { tag: "einordnung", text: "Die vier großen Hyperscaler (Amazon, Alphabet, Meta, Microsoft) planen laut Marktschätzungen für 2026 zusammen rund 725 Mrd. $ Investitionen in KI-Infrastruktur, ein Anstieg von rund 77 % gegenüber 2025. Diese Summen erklären, warum schon Andeutungen einer Verlangsamung die Chipbranche bewegen.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] }
        ]}
      ],
      reaction: "Die Nasdaq schloss am Freitag 0,39 % höher, gestützt von der Chip- und Speicherwerte-Rally (Meldung 3).",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing", "e:software-ai-loans"],
      sources: [
        { title: "CNBC: Anthropic's Amodei says China presents 'toughest dilemma'", url: "https://www.cnbc.com/2026/09/13/china-dilemma-ai-slowdown-anthropic.html" },
        { title: "medianama.com: Here's how tech leaders and countries reacted to Amodei's call to slow down AI", url: "https://www.medianama.com/2026/09/223-tech-leaders-countries-amodei-slowdown-ai/" },
        { title: "TechCrunch: OpenAI, Anthropic, Google have been in talks on AI safety for weeks", url: "https://techcrunch.com/2026/09/15/openai-anthropic-google-have-been-in-talks-on-ai-safety-for-weeks/" },
        { title: "moomoo Community: Why are memory chip stocks surging? September 18, 2026", url: "https://www.moomoo.com/community/feed/why-are-memory-chips-soaring-september-18-2026-u-s-117295617474565" },
        { title: "onvista: Aktien im Fokus – Infineon und Siltronic nach Analystenlob begehrt", url: "https://www.onvista.de/news/2026/09-18-aktien-im-fokus-2-infineon-und-siltronic-nach-analystenlob-begehrt-0-10-26554867" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gas", cats: ["energy", "germany"], when: "Mitte Sept. 2026",
      headline: "Deutsche Gasspeicher nur zu 56 % gefüllt, Wirtschaftsministerin Reiche spricht mit Uniper über Speicherhilfe",
      sec30: "Die deutschen Gasspeicher waren Mitte September nur zu rund 56 % gefüllt, Anfang September meldete der Speicherverband INES sogar 53 % — den niedrigsten Stand zu dieser Jahreszeit seit 15 Jahren. Auch EU-weit liegen die Speicher mit rund 69 % unter dem Fünfjahresschnitt. Grund sind laut Berichten unter anderem kriegsbedingte LNG-Ausfälle am Persischen Golf.",
      blocks: [
        { h: "Wie ist die Lage bei Gas?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher waren Mitte September zu rund 56 % gefüllt, vor einem Jahr zu 71 %. Anfang September hatte der Speicherverband INES sogar nur 53 % gemeldet — den niedrigsten Stand zu diesem Zeitpunkt im Jahr seit 15 Jahren.",
            ask: [{ label: "Warum ist Gas in Europa teuer?", ref: "e:gas-ttf" }] },
          { tag: "fakt", text: "EU-weit sind die Gasspeicher laut dem Branchenverband Gas Infrastructure Europe zu rund 69 % gefüllt (Stand 18.09.), etwa 16 Prozentpunkte unter dem Fünfjahresschnitt." }
        ]},
        { h: "Warum ist Gas knapp?", items: [
          { tag: "position", text: "Berichte nennen als Grund, dass durch den Krieg um den Iran und Störungen an der Straße von Hormus rund 36 Mio. Tonnen LNG aus Katar und den Vereinigten Arabischen Emiraten nicht wie geplant den Markt erreicht haben. Europa konkurriert dadurch stärker mit Asien um verbleibende Lieferungen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was tut die Politik?", items: [
          { tag: "fakt", text: "Bundeswirtschaftsministerin Katherina Reiche führt laut Berichten Gespräche mit Uniper (und laut einem Bericht auch mit SEFE) über staatliche Unterstützung beim Speicheraufbau, nachdem eine erste Waffenruhe im Nahen Osten nicht hielt und die Gaspreise wieder anzogen." },
          { tag: "fakt", text: "Die Bundesnetzagentur bestätigt, dass die „Frühwarnstufe“ bereits seit dem 01.07.2025 gilt; die Versorgungssicherheit sei aktuell weiterhin gewährleistet. Gesetzliche Zielmarke ist ein Füllstand von 30 % zum 01.02.2027." }
        ]},
        { h: "Was zahlen Verbraucher aktuell für Strom?", items: [
          { tag: "unbestaetigt", text: "Laut Vergleichsportalen (stromauskunft.de, finanztip.de, Stand um den 20.09.) liegt der günstigste Stromtarif für einen Modellhaushalt (3.500 kWh/Jahr) bei rund 29,85 Cent/kWh, die Grundversorgung bei rund 40,37 Cent/kWh. Wer in der Grundversorgung bleibt, zahlt demnach im Schnitt rund 1.411 €/Jahr, mit dem günstigsten Tarif rund 941 €/Jahr. Diese Zahlen stammen von Vergleichsportalen, nicht von einer amtlichen Statistikstelle wie der Bundesnetzagentur." }
        ]},
        { h: "Weitere Energiepolitik", items: [
          { tag: "fakt", text: "Der Bundestag berät am 24.09. in erster Lesung den Regierungsentwurf zur Änderung des Energiewirtschaftsrechts, der den Zubau von Anlagen besser mit dem Netzausbau synchronisieren soll." },
          { tag: "fakt", text: "Im Rahmen eines neuen Kapazitätsmarkts sollen ab September 2026 zunächst 9 GW an Langzeitkapazitäten ausgeschrieben werden, die mehrtägige „Dunkelflauten“ überbrücken sollen; zusätzlich sind zum 01.09. und zum 08.12.2026 Ausschreibungen für je 4,5 GW neue, mindestens 10 Stunden durchgängig lieferfähige Erzeugungsanlagen geplant." }
        ]}
      ],
      reaction: "Ein niedrigerer Speicherstand macht Deutschland empfindlicher für Preisschwankungen wie durch die Huthi-Angriffe vom Wochenende (Meldung 8).",
      terms: ["ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:hormuz", "e:oil-inflation"],
      sources: [
        { title: "presse.online: Gasspeicher bei 56 Prozent – Reiche spricht mit Uniper", url: "https://presse.online/2026/09/16/gasspeicher-bei-56-prozent-reiche-spricht-mit-uniper/" },
        { title: "Bloomberg: Germany discusses gas storage help with state-owned companies", url: "https://www.bloomberg.com/news/articles/2026-09-07/germany-discusses-gas-storage-help-with-state-owned-companies" },
        { title: "Bundestag: Energiewirtschaftsrecht – Regierung plant Änderungen beim Netzausbau", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw39-de-energiewirtschaftsrecht-1211298" },
        { title: "stromauskunft.de: Strompreise aktuell", url: "https://www.stromauskunft.de/" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "fed-hike": { tag: "fakt", story: 1, text: "Die Fed erhöhte am 16.09. einstimmig um 0,25 Punkte auf 3,75–4,00 %. Fed-Chef Warsh deutete laut Fortune-Analyse einen stärkeren Fokus auf Geldmengenwachstum statt einzelner Preisdaten an." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Fed, EZB und Bank of Japan haben zuletzt erhöht. Lagarde sagte am Freitag, die EZB entscheide weiter von Sitzung zu Sitzung, das Wachstum sei etwas vielversprechender als gedacht." },
    "ecb-hike": { tag: "position", story: 2, text: "Die EZB erhöhte am 10.09. den Einlagensatz auf 2,50 %. EZB-Direktorin Schnabel nannte die jüngsten Energiepreisanstiege „ziemlich besorgniserregend“." },
    "inflation-what": { tag: "fakt", story: 2, text: "Die ZEW-Konjunkturerwartungen für Deutschland stiegen im September nur leicht auf 34,7 Punkte, der Eurozone-Erwartungsindex fiel dagegen auf 25,8 Punkte." },
    "yield-meaning": { tag: "fakt", story: 4, text: "US-10J ≈ 5,01 % (Freitag), Bund-10J ≈ 3,52 %. Eine andere Quelle nennt für die US-Rendite abweichend rund 4,94–4,95 %." },
    "yield-stocks": { tag: "position", story: 4, text: "Marktbeobachter nennen steigende Renditen als einen der Faktoren für den DAX-Rückgang um 1,6 % am Freitag." },
    "rates-stocks": { tag: "fakt", story: 3, text: "Am Freitag schlossen S&P 500 (+0,17 %) und Nasdaq (+0,39 %) leicht höher, der Dow (−0,19 %) leicht niedriger. Die 10-jährige US-Rendite stieg auf rund 5,01 %." },
    "index-move": { tag: "fakt", story: 3, text: "DAX Freitag: −1,60 % auf 25.304 Punkte. Euro Stoxx 50 −1,37 % bzw. −1,46 % je nach Quelle, S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,19 %." },
    "why-markets-move": { tag: "position", story: 3, text: "Für den Freitag nennen Marktbeobachter Verfallstag, den VW-Einbruch, Nahost-Lage und Anleiherenditen. Der Anteil jedes Faktors lässt sich nicht genau bestimmen." },
    "verfallstag-why": { tag: "fakt", story: 3, text: "Der Freitag, 18.09., war ein großer Verfallstag. Der DAX schloss 1,6 % tiefer." },
    "companies-costs": { tag: "fakt", story: 3, text: "Volkswagen senkte die Prognose für die operative Umsatzrendite 2026 von 4,0–5,5 % auf bis zu 1 %, vor allem wegen einer Milliarden-Abschreibung auf Porsche." },
    "gold-why": { tag: "fakt", story: 5, text: "Gold schloss am Freitag bei rund 4.380 $ je Feinunze (+0,77 %), obwohl die US-Rendite auf rund 5,01 % stieg." },
    "bitcoin-what": { tag: "fakt", story: 5, text: "Bitcoin stieg zwischen Freitagmorgen (≈ 77.980 $) und Samstagnachmittag (≈ 81.350 $) deutlich." },
    "eurusd-meaning": { tag: "fakt", story: 1, text: "EUR/USD lag am Freitag bei rund 1,146. Der Dollar blieb nahe seinem Julitief für den Euro stark." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Haushaltsentwurf 2027 sieht Ausgaben von 555,4 Mrd. € vor, die Gesamtneuverschuldung inklusive Sondervermögen und Verteidigung soll bei rund 200 Mrd. € liegen." },
    "debt-brake": { tag: "fakt", story: 7, text: "Verteidigungsausgaben über 1 % des BIP sind von der Schuldenbremse ausgenommen; die dafür genutzte Kreditaufnahme soll von 85,4 Mrd. € (2027) auf 151,8 Mrd. € (2030) steigen." },
    "rente-basics": { tag: "position", story: 7, text: "Arbeitsministerin Bas will mehr Debatte zur Rentenreform, Kanzler Merz drängt auf schnelle Gesamtumsetzung. Der DGB ruft für den 26.09. zu bundesweiten Protesten auf." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "Heute, am 20.09., wählen Berlin und Mecklenburg-Vorpommern. Die Wahlbeteiligung lag am Mittag deutlich über der der letzten Wahl." },
    "coalition-majority": { tag: "fakt", story: 6, text: "In Berlin sah die letzte Umfrage die Linke mit 21–23 % als mögliche stärkste Kraft. In Mecklenburg-Vorpommern lieferten sich SPD (37 %) und AfD (36 %) laut letzter Umfrage ein knappes Rennen." },
    "nato-target": { tag: "fakt", story: 10, text: "2025 gaben europäische NATO-Partner und Kanada über 90 Mrd. $ mehr für Verteidigung aus als im Vorjahr. Für 2026 sollen fünf Staaten die 3,5-%-Kernverteidigungsrichtlinie erfüllen." },
    "defence-order": { tag: "fakt", story: 11, text: "Rheinmetall erhielt am 14.09. einen Auftrag über mehrere Zehntausend 155-mm-Artilleriegranaten im niedrigen dreistelligen Mio.-€-Bereich, Lieferung bis 2027." },
    "defence-stocks": { tag: "unbestaetigt", story: 11, text: "Die Rheinmetall-Aktie notierte am Freitag bei rund 1.011–1.014 €, leicht abweichend je nach Quelle." },
    "why-oil-up-geo": { tag: "fakt", story: 8, text: "In der Nacht zum Samstag griffen die Huthi laut saudischer Darstellung erstmals Riad selbst sowie den Ölhafen Yanbu an." },
    "hormuz": { tag: "fakt", story: 8, text: "Seit dem Kollaps eines Waffenstillstandsversuchs am 8. Juli 2026 gelten die Huthi als aktivstes Kriegsschauplatz rund um die Straße von Hormus." },
    "brent-wti": { tag: "fakt", story: 15, text: "Brent schloss am Freitag bei rund 103,9 $, Quellen weichen zwischen 103,21 $ und 104,33 $ leicht voneinander ab." },
    "oil-inflation": { tag: "fakt", story: 15, text: "Kriegsbedingte LNG-Ausfälle am Persischen Golf (rund 36 Mio. Tonnen) verschärfen die europäische Gasknappheit zusätzlich zum hohen Ölpreis." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Deutsche Gasspeicher waren Mitte September zu rund 56 % gefüllt (Vorjahr 71 %), EU-weit zu rund 69 %, rund 16 Punkte unter dem Fünfjahresschnitt." },
    "energy-germany": { tag: "position", story: 15, text: "Wirtschaftsministerin Reiche spricht mit Uniper über staatliche Unterstützung beim Speicheraufbau. Die Bundesnetzagentur hält die Versorgung trotz niedrigerer Füllstände für gesichert." },
    "ma-steps": { tag: "fakt", story: 12, text: "H.I.G. Capital und MISTRAS unterzeichneten am 18.09. eine endgültige Vereinbarung über 20,35 $ je Aktie, das Closing wird für Ende 2026/Anfang 2027 erwartet." },
    "ev-ebitda": { tag: "unbestaetigt", story: 12, text: "Beim MISTRAS-Deal (Unternehmenswert ≈ 866 Mio. $) ist ein EV/EBITDA-Multiple in den gesichteten Quellen nicht genannt." },
    "lbo": { tag: "position", story: 12, text: "Um GFL Environmental (≈ 18 Mrd. $ Marktwert, ≈ 10 Mrd. $ Schulden) konkurrieren laut Bloomberg zwei Investorengruppen, es wäre einer der größten LBOs des Jahres." },
    "take-private-why": { tag: "fakt", story: 12, text: "MISTRAS soll von H.I.G. Capital von der Börse genommen werden, eine 40-tägige Go-Shop-Frist läuft bis 27.10.2026." },
    "deal-risks": { tag: "fakt", story: 12, text: "Beim MISTRAS-Deal fehlen noch die Zustimmung der Aktionäre und der Behörden. Der Go-Shop erlaubt konkurrierende Angebote." },
    "pe-money": { tag: "unbestaetigt", story: 12, text: "Zu Finanzierung und Banken beim GFL-Bietergefecht (KKR/ECP/Blackstone gegen Brookfield/IFM) wird in den gesichteten Quellen nichts genannt." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex nur noch mit rund 5 Cent je Dollar, Moody's sieht Loparex als ausgefallen." },
    "sofr-spread": { tag: "einordnung", story: 13, text: "Nach der Fed-Erhöhung steigt SOFR, und variabel verzinste Private-Credit-Kredite werden für Schuldner teurer." },
    "pc-rates": { tag: "fakt", story: 13, text: "Laut Fitch-Report konnten 10 von 16 beobachteten BDCs Rücknahmewünsche im zweiten Quartal 2026 nicht vollständig bedienen, die Quote stieg auf 10,3 %." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Non-Accruals bei BDCs stiegen laut Octus im ersten Quartal 2026 um 40 % gegenüber dem Vorquartal auf rund 9,98 Mrd. $." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Anleger forderten im zweiten Quartal 2026 laut Fitch-Report insgesamt 15,6 Mrd. $ an Rücknahmen bei den beobachteten BDCs." },
    "ai-capex": { tag: "position", story: 14, text: "Die vier großen Hyperscaler planen 2026 laut Schätzungen zusammen rund 725 Mrd. $ Investitionen in KI-Infrastruktur, ein Anstieg von rund 77 % gegenüber 2025." },
    "software-ai-loans": { tag: "position", story: 14, text: "OpenAI, Anthropic und Google DeepMind verhandeln laut TechCrunch seit Wochen über KI-Sicherheitsstandards, was auch für Kreditgeber softwarelastiger Portfolios relevant ist." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Notenbanken", type: "Fakt", story: 1,
      q: "Wofür hält Fed-Chef Kevin Warsh laut FOMC-Pressekonferenz die klassische „neutrale Zinsrate“ (ein Konzept von Knut Wicksell)?",
      options: [
        "Für das wichtigste Steuerungsinstrument der Fed",
        "Für akademisch interessant, aber ohne große praktische Relevanz für Entscheidungen",
        "Für identisch mit dem Leitzins",
        "Für ein Konzept, das die Fed 2026 erstmals eingeführt hat"
      ],
      answer: 1,
      explain: "Laut Fortune-Bericht sagte Warsh sinngemäß, die neutrale Zinsrate sei akademisch interessant, für die praktische Entscheidungsfindung aber wenig hilfreich. Er will stattdessen stärker auf Geldmengenwachstum achten."
    },
    {
      topic: "Finanzmärkte", type: "Zusammenhang", story: 4,
      q: "Angenommen, die US-Rendite bleibt bei rund 5 % und die Fed deutet eine weitere Zinserhöhung im Oktober an. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Kurse bestehender, niedrig verzinster Anleihen steigen",
        "Wachstumsaktien werden unabhängig vom Zinsniveau automatisch attraktiver",
        "Anleihen konkurrieren stärker um Anlegergeld, hoch bewertete Wachstumsaktien geraten stärker unter Druck",
        "Der Ölpreis sinkt automatisch"
      ],
      answer: 2,
      explain: "Höhere sichere Zinsen senken den heutigen Wert künftiger Gewinne besonders bei Wachstumsfirmen und machen Anleihen im Vergleich attraktiver. Die US-10-Jahres-Rendite lag am Freitag bei rund 5,01 %."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Wie hoch war die Wahlbeteiligung in Mecklenburg-Vorpommern am Sonntagmittag (14 Uhr) im Vergleich zur Landtagswahl 2021?",
      options: [
        "40,7 % gegenüber 32,5 % im Jahr 2021 zur gleichen Zeit",
        "Etwa gleich hoch wie 2021",
        "Deutlich niedriger als 2021",
        "Über 70 %, ein historischer Höchstwert"
      ],
      answer: 0,
      explain: "Laut ZDF-Liveticker lag die Beteiligung in Mecklenburg-Vorpommern um 14 Uhr bei 40,7 %, gegenüber 32,5 % zur gleichen Zeit 2021 — ein deutlicher Anstieg."
    },
    {
      topic: "Geopolitik & Energie", type: "Zusammenhang", story: 8,
      q: "Angenommen, weitere Angriffe treffen saudische Ölexportterminals wie Yanbu und die Straße von Hormus bleibt gestört. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Der Ölpreis fällt, weil mehr Öl auf den Markt kommt",
        "Die deutschen Gasspeicher füllen sich automatisch schneller",
        "Zentralbanken senken sofort die Zinsen",
        "Der Risikoaufschlag im Ölpreis steigt, der Ölpreis tendiert nach oben"
      ],
      answer: 3,
      explain: "Yanbu ist ein wichtiger Ausfuhrhafen, der Routen um die gestörte Straße von Hormus bietet. Sinkt die erwartete Liefermenge, steigt tendenziell der Preis — was wiederum Inflations- und Zinsdruck erhöhen kann."
    },
    {
      topic: "Private Credit", type: "Fakt", story: 13,
      q: "Auf wie viel Cent je Dollar hat Blue Owl (OBDC) den Second-Lien-Kredit an Loparex zuletzt abgeschrieben?",
      options: [
        "Rund 5 Cent",
        "Rund 50 Cent",
        "Rund 88 Cent",
        "Rund 22 Cent"
      ],
      answer: 0,
      explain: "Der Second-Lien-Kredit wurde auf rund 5 Cent je Dollar abgeschrieben (Ende März noch ≈ 63 Cent). Der besser besicherte First-Lien-Kredit steht bei rund 22 Cent — das war früher nahe dem Nennwert."
    }
  ]
};
