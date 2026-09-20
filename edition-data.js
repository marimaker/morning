// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-20",
  dateLabel: "Sonntag, 20. September 2026",
  updatedLabel: "Recherchestand 20.09.2026",
  marketNote: "Am Wochenende sind die Börsen geschlossen. Die Zahlen zeigen den Handelsschluss vom Freitag, 18.09.2026. Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Samstag, 19.09. Werte mit „≈“ stammen aus Marktberichten und können je nach Quelle und Uhrzeit leicht abweichen.",

  top: [
    { text: "Der Krieg um den Iran erreicht Saudi-Arabien: Am Samstag griffen die Huthi nach eigenen Angaben Riad und die Hafenstadt Yanbu an. Brent schloss am Freitag bei rund 104 Dollar.", ref: "s:8" },
    { text: "Die Notenbanken erhöhen die Zinsen: Fed, EZB und Bank of Japan haben zuletzt angehoben, die Bank of England hielt bei 3,75 %, drei Mitglieder wollten erhöhen. Die zehnjährige US-Rendite stieg auf 5,0 %.", ref: "s:1" },
    { text: "Heute wählen Berlin und Mecklenburg-Vorpommern. Erste Prognosen kommen ab 18 Uhr, letzte Umfragen sahen enge Rennen.", ref: "s:10" },
    { text: "Der DAX verlor am Freitag 1,6 %. Volkswagen senkte seine Gewinnprognose nach einer Milliarden-Abschreibung auf Porsche, die VW-Aktie fiel um 5,6 %.", ref: "s:4" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.304", change: "−1,60 %", dir: "down", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. 25.304 Punkte sind ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: −1,60 % heißt, dass diese Unternehmen zusammen rund 1,6 % niedriger bewertet werden als am Vortag.",
      compare: [
        { label: "Woche", text: "−1,03 % gegenüber dem Vorfreitag" },
        { label: "MDax", text: "−1,16 % auf 31.083,97 Punkte" },
        { label: "Abweichende Angabe", text: "Andere Berichte nennen 25.296,44 Punkte (−1,63 %). Die Quellen weichen je nach Zeitpunkt der Messung leicht ab." },
        { label: "Seit Jahresbeginn", text: "rund +3,1 % (finanzen.at)" }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Freitag vor allem diese Faktoren:",
        items: [
          "Der große Verfallstag, an dem Futures und Optionen auf Aktienindizes auslaufen.",
          "Die angespannte Lage im Nahen Osten und Sorgen um die Öl- und Gasversorgung.",
          "Steigende Anleiherenditen und Inflationsrisiken.",
          "Einzelwerte: Die VW-Vorzüge fielen um 5,6 % nach der gesenkten Gewinnprognose, Infineon und Siltronic legten zu."
        ]
      },
      important: [
        { area: "Aktien", text: "Der DAX ist ein Stimmungsbild der großen deutschen Firmen, kein Maß für die gesamte Wirtschaft.", ref: "e:index-move" },
        { area: "Zinsen", text: "Steigende Renditen können Bewertungen von Aktien belasten.", ref: "e:yield-stocks" }
      ],
      source: { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.236", change: "−1,37 %", dir: "down", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Er zeigt, wie die europäischen Börsen insgesamt liefen. −1,37 % heißt: Diese Unternehmen wurden zusammen rund 1,4 % niedriger bewertet als am Vortag.",
      compare: [
        { label: "Zum DAX", text: "Der DAX verlor mit −1,60 % etwas mehr." }
      ],
      moved: {
        intro: "Der Bericht nennt für den europäischen Handel dieselben Faktoren wie für den DAX:",
        items: [
          "Verfallstag, Nahost-Lage, Versorgungssorgen bei Öl und Gas sowie steigende Anleiherenditen."
        ]
      },
      important: [
        { area: "Aktien", text: "Ein Index fasst viele Aktien zu einer Zahl zusammen.", ref: "e:index-move" }
      ],
      source: { title: "onvista: Aktien Frankfurt Schluss (Euro Stoxx 50)", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "sp500": {
      label: "S&P 500", value: "7.650", change: "+0,17 %", dir: "up", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. +0,17 % bedeutet: Die Firmen wurden zusammen 0,17 % höher bewertet als am Vortag.",
      compare: [
        { label: "Punkte", text: "+12,74 Punkte auf 7.650,50 (AP)" },
        { label: "Dow Jones", text: "−95,40 Punkte (−0,2 %) auf 51.682,64" },
        { label: "Breite", text: "Laut AP fielen die Aktien mehrheitlich, der Index wurde von einzelnen Werten getragen." }
      ],
      moved: {
        intro: "Berichte zum Freitag:",
        items: [
          "Die US-Indizes schlossen gemischt nach einer auf und ab verlaufenen Woche mit der Zinserhöhung der Fed.",
          "Die Rendite zehnjähriger US-Anleihen stieg auf 5,00 %, das setzte Aktien laut AP zunehmend unter Druck."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen.", ref: "e:rates-stocks" }
      ],
      source: { title: "AP (10tv): How major US stock indexes fared Friday 9/18/2026", url: "https://www.10tv.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-9182026/616-5b0cc042-6090-4d16-a538-a1f2be368a0c" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.523", change: "+0,39 %", dir: "up", asof: "Schluss Fr 18.09.", story: 4,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie reagiert deshalb oft empfindlich auf Zinsänderungen und auf Nachrichten zur KI.",
      compare: [
        { label: "Punkte", text: "+104,25 Punkte auf 26.522,55 (AP)" },
        { label: "Montag (14.09.)", text: "Chipwerte gaben stark nach, nachdem KI-Chefs eine Verlangsamung gefordert hatten (Meldung 15)" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Die Nasdaq schloss am Freitag leicht im Plus, obwohl die Mehrheit der US-Aktien fiel.",
          "Coinbase legte laut Marktbericht um 11,7 % zu (im S&P 500 der größte Gewinner)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum fällt die Nasdaq bei steigenden Zinsen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "AP (10tv): How major US stock indexes fared Friday 9/18/2026", url: "https://www.10tv.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-9182026/616-5b0cc042-6090-4d16-a538-a1f2be368a0c" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,146", change: "−0,14 %", dir: "down", asof: "Fr 18.09.", story: 1,
      means: "1 Euro kostet etwa 1,146 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "EZB-Referenzkurs", text: "1,1460 $ (Fr 18.09.)" },
        { label: "New Yorker Handel", text: "zuletzt 1,1482 $ (dpa-AFX/Ariva)" },
        { label: "Einordnung", text: "Im letzten Monat hat der Euro um etwa 1,9 % nachgegeben (Trading Economics)." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Der Euro war am Mittwoch nach der Zinserhöhung der Fed unter Druck geraten und pendelte sich seitdem auf niedrigerem Niveau ein.",
          "Der Dollar-Index stieg in der Woche um rund 1,1 % (Rio Times)."
        ]
      },
      important: [
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" },
        { area: "Zinsen", text: "Die Fed und die EZB haben beide erhöht.", ref: "e:fed-hike" }
      ],
      source: { title: "Ariva/dpa-AFX: Devisen, Euro weiter stabilisiert vor dem Wochenende", url: "https://www.ariva.de/eur-usd-euro-us-dollar-kurs/news/devisen-euro-weiter-stabilisiert-vor-dem-wochenende-12141691" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,0 %", change: "auf 5,00 % gestiegen", dir: "up", asof: "Fr 18.09.", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,0 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Freitag", text: "Laut AP kletterte die Rendite auf 5,00 %." },
        { label: "Fed-Leitzins", text: "3,75–4,00 % (Erhöhung am 16.09.)" }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund der Woche:",
        items: [
          "Die Zinserhöhung der Fed und der Hinweis auf eine weitere Erhöhung bis Jahresende.",
          "Hohe Ölpreise und gestiegene Inflationserwartungen der Verbraucher (Meldung 1)."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren mit Aktien.", ref: "e:yield-stocks" },
        { area: "Unternehmensfinanzierung", text: "Kredite werden teurer, wenn der sichere Zins steigt.", ref: "e:fed-hike" },
        { area: "Immobilien", text: "Hypothekenzinsen orientieren sich an langfristigen Renditen.", ref: "e:yield-meaning" },
        { area: "Private Equity", text: "Schuldenfinanzierte Übernahmen (LBOs) werden teurer.", ref: "e:lbo" },
        { area: "Private Credit", text: "Variable Zinsen steigen mit den Referenzzinsen.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Höhere US-Zinsen können den Dollar stützen.", ref: "e:eurusd-meaning" },
        { area: "Gold", text: "Gold zahlt keinen Zins und konkurriert mit Anleihen.", ref: "e:gold-why" }
      ],
      source: { title: "AP (10tv): How major US stock indexes fared Friday 9/18/2026", url: "https://www.10tv.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-9182026/616-5b0cc042-6090-4d16-a538-a1f2be368a0c" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "3,50 %", change: "Hoch 3,57 % am Di", dir: "flat", asof: "Fr 18.09.", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. 3,50 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,5 % pro Jahr.",
      compare: [
        { label: "Diese Woche", text: "Mehrjahreshoch von 3,57 % am Dienstag (onvista)" },
        { label: "Euro-Bund-Future", text: "−0,11 % auf 120,64 Punkte (Fr)" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Am Freitag gab es leichte Kursverluste bei Bundesanleihen, die Rendite blieb unter dem Wochenhoch."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen machen neue Schulden des Bundes teurer.", ref: "e:debt-brake" },
        { area: "Kredite", text: "Bauzinsen und Firmenkredite orientieren sich an Bund-Renditen.", ref: "e:yield-meaning" }
      ],
      source: { title: "onvista: Deutsche Anleihen mit leichten Kursverlusten", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.380 $", change: "+0,77 %", dir: "up", asof: "Schluss Fr 18.09.", story: 6, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.380 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Woche", text: "+0,73 % (Rio Times)" },
        { label: "Silber", text: "66,35 $ (+1,41 % am Freitag, +3,05 % auf die Woche)" },
        { label: "Abweichende Angabe", text: "Andere Seiten nennen bis zu 4.421 $, je nach Kontrakt und Uhrzeit." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Gold stieg trotz eines stärkeren Dollars (Dollar-Index +1,1 % auf die Woche) und einer auf rund 5 % gestiegenen US-Rendite.",
          "Die Quelle wertet das als Zeichen, dass die Nachfrage unabhängig von den Renditen anhielt. Das ist ihre Einschätzung."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Rio Times: Gold closes at US$4,380; silver gains 3.05% on the week", url: "https://www.riotimesonline.com/gold-silver-precious-metals-saturday-september-19-2026/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 103,9 $", change: "−0,9 %", dir: "down", asof: "Schluss Fr 18.09.", story: 7, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 104 Dollar je Fass (159 Liter) sind rund 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Woche", text: "Rückgang von etwa 1,2 % bis 1,4 %, je nach Quelle. Eine CNBC-Überschrift spricht von einer Woche ohne Veränderung." },
        { label: "Serie", text: "Dritter Verlusttag in Folge" }
      ],
      moved: {
        intro: "Laut Berichten wirkten diese Faktoren:",
        items: [
          "Händler trauten Saudi-Arabien zu, Teile von Produktion und Export wieder aufzunehmen; das Land steigerte laut Bericht die Lieferungen über Oman.",
          "Die Lagerbestände an Ölprodukten stiegen in den USA, Singapur und Europa.",
          "CNBC beschreibt, der Markt sehe den Ausfall der saudischen Pipeline als weniger störend als befürchtet."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Zinsen", text: "Hohe Inflation kann höhere Zinsen bedeuten.", ref: "e:central-banks-why" },
        { area: "Aktien", text: "Ölkonzerne verdienen mehr, energieintensive Firmen zahlen mehr.", ref: "e:oil-stocks" },
        { area: "Deutschland", text: "Energieimporte werden teurer.", ref: "e:energy-germany" }
      ],
      source: { title: "CNBC: Oil finishes the week flat as the market sees Saudi pipeline outage as less disruptive than feared", url: "https://www.cnbc.com/2026/09/18/oil-prices-today-brent-wti-saudi-arabia-houthi.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.350 $", change: "≈ +5,6 % am Fr", dir: "up", asof: "Sa 19.09.", story: 6, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.350 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 76.400 $" },
        { label: "Hoch Freitag", text: "81.702 $, erstmals über 80.000 $ seit dem 7. September" },
        { label: "Abweichende Angabe", text: "MetaMask zeigt zu anderer Uhrzeit ≈ 81.084 $." }
      ],
      moved: {
        intro: "Berichte nennen als Grund für den Sprung:",
        items: [
          "Die Auflösung von Wetten auf fallende Kurse (Short-Liquidationen). Die Summen schwanken je nach Quelle zwischen rund 183 und 260 Mio. $.",
          "Zuflüsse in US-Bitcoin-ETFs von netto 433 Mio. $ am 18.09. laut Bericht."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Yahoo Finance: Bitcoin jumps above $81k as short squeeze offsets rate and regulatory pressure", url: "https://finance.yahoo.com/markets/crypto/articles/bitcoin-jumps-above-81k-short-031138129.html" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 FED */
    {
      id: "fed", cats: ["economy", "markets"], when: "Mi 16.09. · Fed-Entscheid / Woche voraus",
      headline: "Fed erhöht die Zinsen erstmals seit 2023 auf 3,75–4,00 %, US-Verbraucher erwarten mehr Inflation",
      sec30: "Die US-Notenbank hat den Leitzins um 0,25 Punkte auf 3,75–4,00 % angehoben, einstimmig mit 12:0. Es ist die erste Erhöhung seit 2023. Nach den Projektionen erwartet der Median eine weitere Erhöhung bis Jahresende. Die Verbraucherstimmung fiel zugleich auf einen der niedrigsten Werte der Statistik, die Inflationserwartungen stiegen.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Der Offenmarktausschuss (FOMC) beschloss einstimmig (12:0), den Leitzins um 0,25 Prozentpunkte auf eine Spanne von 3,75–4,00 % anzuheben. Es ist die erste Erhöhung seit 2023.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Im Dot Plot, den Zinsprognosen der Mitglieder, erwartet der Median eine weitere Erhöhung um 0,25 Punkte im Jahr 2026. 16 von 18 Teilnehmern rechnen mit einem weiteren Schritt, vier davon sehen zwei weitere Schritte als möglich. Fed-Chef Kevin Warsh hat keinen eigenen Punkt abgegeben.",
            ask: [{ label: "Was ist ein Dot Plot?", ref: "t:dot-plot" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Warsh betonte auf der Pressekonferenz laut Berichten, die Inflation sei weiter zu hoch und die Fed meine es ernst mit Preisstabilität. Er gab nur begrenzte Hinweise auf den weiteren Kurs.",
            ask: [{ label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }, { label: "Wie hängt Öl mit Inflation zusammen?", ref: "e:oil-inflation" }] },
          { tag: "einordnung", text: "Zentralbanken erhöhen Zinsen, um Nachfrage zu bremsen und Preisdruck zu senken. Ob die hohen Ölpreise dabei eine Rolle spielten, nennen die gesichteten Quellen nicht ausdrücklich für die Fed.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Höhere US-Zinsen verteuern Kredite und machen Anleihen attraktiver. Sie wirken auf Aktien, den Dollar und Kreditmärkte weltweit. Der Referenzzins SOFR folgt dem Leitzins, deshalb steigen auch die Zinsen vieler Unternehmenskredite.",
            ask: [{ label: "Was bedeutet das für Aktien?", ref: "e:rates-stocks" }, { label: "Was bedeutet das für Private Credit?", ref: "e:pc-rates" }, { label: "Was ist SOFR?", ref: "t:sofr" }] },
          { tag: "fakt", text: "Am Freitag stieg die Rendite zehnjähriger US-Anleihen auf 5,00 %, der Euro lag bei ≈ 1,146 Dollar. Der Dollar-Index legte in der Woche um rund 1,1 % zu.",
            ask: [{ label: "Was bedeutet 5,0 %?", ref: "n:ust10" }, { label: "Was passiert mit dem Dollar?", ref: "n:eurusd" }] }
        ]},
        { h: "Was zeigen die US-Verbraucherumfragen und was kommt als Nächstes?", items: [
          { tag: "fakt", text: "Der Konsumklima-Index der Universität Michigan fiel in der vorläufigen September-Erhebung auf 47,8 Punkte, den zweiten Rückgang in Folge und deutlich unter den erwarteten 51,0. Die Inflationserwartung für das kommende Jahr stieg auf 4,6 %, für fünf Jahre auf 3,4 %.",
            ask: [{ label: "Was sind Inflationserwartungen?", ref: "e:inflation-expectations" }] },
          { tag: "position", text: "Als Belastung nennen die Befragten laut Bericht steigende Kraftstoffpreise und Handelsstreit. Die Angabe stammt aus der Auswertung der Umfrage durch Medien, nicht aus einer Ursachenanalyse." },
          { tag: "fakt", text: "Der nächste wichtige US-Inflationswert, der Kern-PCE-Preisindex für August, wird am Freitag, 25.09., um 8:30 Uhr New Yorker Zeit veröffentlicht. Prognostiker erwarten laut financecalendar.com +0,2 % zum Vormonat (rund 3,3 % zum Vorjahr). Das ist eine Erwartung, kein Ergebnis." }
        ]}
      ],
      reaction: "Die 10-jährige US-Rendite lag am Freitag bei 5,0 %. S&P 500 (+0,17 %) und Nasdaq (+0,39 %) schlossen leicht höher, der Dow (−0,2 %) leicht niedriger.",
      terms: ["leitzins", "dot-plot", "basispunkt", "sofr", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:sofr-spread", "e:eurusd-meaning", "e:inflation-expectations", "chain:rates-to-credit"],
      sources: [
        { title: "CNBC: Fed rate decision September 2026", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
        { title: "Charles Schwab: Fed hikes in 12-0 vote, commits to inflation fight", url: "https://www.schwab.com/learn/story/fomc-meeting" },
        { title: "TheStreet: Fed raises rates, signals another 2026 hike could follow", url: "https://www.thestreet.com/fed/fed-raises-rates-signals-another-hike-2026" },
        { title: "Advisor Perspectives: Consumer sentiment falls again in September", url: "https://www.advisorperspectives.com/dshort/updates/2026/09/11/consumer-sentiment-falls-again-in-september" },
        { title: "financecalendar.com: When is the next PCE report", url: "https://www.financecalendar.com/us-pce-report/" }
      ]
    },

    /* 2 EURORAUM-INFLATION */
    {
      id: "inflation-euro", cats: ["economy", "germany"], when: "Do 17.09. · Eurostat / Fr 18.09. · Destatis",
      headline: "Euroraum-Inflation steigt im August auf 3,2 %, deutsche Erzeugerpreise legen um 4,6 % zu",
      sec30: "Die Inflation im Euroraum lag im August laut Eurostat bei 3,2 % (Juli 2,9 %). Energie verteuerte sich um 14,3 %. Die Erzeugerpreise deutscher Hersteller stiegen um 4,6 % zum Vorjahr, Mineralölprodukte um 40,5 %. Die EZB hatte am 10. September den Einlagensatz auf 2,50 % angehoben.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Eurostat: Die Inflation im Euroraum lag im August bei 3,2 % nach 2,9 % im Juli. Die erste Schnellschätzung hatte 3,3 % ergeben und wurde nach unten korrigiert.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }, { label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "fakt", text: "Die Energiepreise stiegen um 14,3 % zum Vorjahr (Juli 10,3 %). Dienstleistungen verteuerten sich um 3,0 % (Juli 3,3 %), die Kerninflation ohne Energie und Nahrungsmittel sank auf 2,4 % (Juli 2,5 %).",
            ask: [{ label: "Warum treibt Energie die Inflation?", ref: "e:oil-inflation" }] },
          { tag: "fakt", text: "Destatis: Die Erzeugerpreise gewerblicher Produkte lagen im August 4,6 % über dem Vorjahr und 1,1 % über dem Vormonat. Energie +8,3 %, Mineralölprodukte +40,5 %, leichtes Heizöl +65,3 %, Kraftstoffe +37,7 %. Ohne Energie stiegen die Preise um 3,1 %, Vorleistungsgüter um 6,1 %.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "e:ppi-what" }, { label: "Was bedeutet das für Unternehmen?", ref: "e:companies-costs" }] },
          { tag: "fakt", text: "Nicht alles wird teurer: Verbrauchsgüter kosteten 2,0 % weniger als vor einem Jahr. Investitionsgüter verteuerten sich um 2,4 %, Gebrauchsgüter um 2,1 %." },
          { tag: "position", text: "Nach Angaben von Destatis gehen die Preissprünge bei Mineralölprodukten auf die Militäraktionen im Iran und im Nahen Osten zurück. Das ist die Begründung der Statistiker." }
        ]},
        { h: "Was hat die EZB getan?", items: [
          { tag: "fakt", text: "Am 10. September erhöhte die EZB den Einlagensatz von 2,25 % auf 2,50 %. Berichten zufolge ist es die zweite Erhöhung in diesem Jahr.",
            ask: [{ label: "Was bedeutet das für Kredite und Sparer?", ref: "e:ecb-hike" }, { label: "Was ist der Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "EZB-Präsidentin Lagarde legte sich laut Bericht nicht auf einen weiteren Zinspfad fest. Der Rat habe über künftige Schritte nicht diskutiert und entscheide datenabhängig von Sitzung zu Sitzung. Nach den neuen Projektionen soll die Inflation im Schnitt 3,0 % in 2026, 2,5 % in 2027 und 2,1 % in 2028 betragen.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie steht die Konjunktur?", items: [
          { tag: "fakt", text: "ZEW-Konjunkturerwartungen für Deutschland im September: 34,7 Punkte (+0,5 zum August). Ökonomen hatten im Schnitt mehr erwartet (rund 40). Die Lagebeurteilung stieg um 14,0 auf −47,1 Punkte." },
          { tag: "position", text: "ZEW-Präsident Wambach sieht die Experten sinngemäß vorsichtig optimistisch für eine Erholung. Als Risiken nennt er teure Energie wegen des Iran-Kriegs und hybride Angriffe." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Erzeugerpreise gelten als Frühindikator für Verbraucherpreise: Steigen die Kosten der Hersteller, geben sie diese oft (nicht immer) weiter. Ob und wann das bei Verbrauchern ankommt, ist offen. Für die EZB ist das ein Grund, weitere Schritte von den Daten abhängig zu machen.",
            ask: [{ label: "Wie hängen beide zusammen?", ref: "e:inflation-what" }, { label: "Was sind Inflationserwartungen?", ref: "e:inflation-expectations" }] }
        ]}
      ],
      reaction: "Die Marktberichte zum DAX vom Freitag nennen Inflationsrisiken als einen von mehreren Belastungsfaktoren.",
      terms: ["inflation", "kerninflation", "erzeugerpreise", "leitzins", "basispunkt"],
      followups: ["e:inflation-what", "e:ppi-what", "e:oil-inflation", "e:ecb-hike", "e:central-banks-why", "e:energy-germany"],
      sources: [
        { title: "Eurostat: Annual inflation up to 3.2% in the euro area", url: "https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/2-17092026-ap" },
        { title: "Statistisches Bundesamt: Erzeugerpreise im August 2026 +4,6 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_328_61241.html" },
        { title: "ZDFheute: EZB erhöht Leitzins auf 2,5 Prozent", url: "https://www.zdfheute.de/wirtschaft/ezb-zinsentscheid-leitzins-finanzen-100.html" },
        { title: "ARIVA: ZEW-Konjunkturerwartungen verbessern sich weniger als erwartet", url: "https://www.ariva.de/news/deutschland-zew-konjunkturerwartungen-verbessern-sich-12136791" }
      ]
    },

    /* 3 BOJ / BOE */
    {
      id: "boj-boe", cats: ["economy", "markets"], when: "Do 17.09. · BoE / Fr 18.09. · BoJ",
      headline: "Bank of Japan erhöht auf 1,25 %, Bank of England hält bei 3,75 % – drei Mitglieder stimmen für eine Erhöhung",
      sec30: "Die Bank of Japan hat ihren Leitzins am Freitag auf 1,25 % angehoben, den höchsten Stand seit 1995, mit 7:2 Stimmen. Die Bank of England ließ ihren Zins bei 3,75 %, doch drei von neun Mitgliedern stimmten für eine Erhöhung.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Bank of Japan: Der Leitzins steigt auf 1,25 %, das Board entschied mit 7:2. Der Satz ist der höchste seit 1995. Die Erhöhung galt als weitgehend erwartet. Der Yen gab nach der Entscheidung laut Bericht nach.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Bank of England: Der Leitzins bleibt bei 3,75 %. Sechs Mitglieder stimmten für Beibehalten, drei (Pill, Greene und Mann) erneut für eine Erhöhung.",
            ask: [{ label: "Was sind Basispunkte?", ref: "t:basispunkt" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Die gesichteten Quellen ordnen die Schritte in eine Reihe ein: Die Bank of Japan folgt laut Bericht der Fed und der EZB. Als Hintergrund nennen die Berichte die hohe Inflation und die Energiepreise im Zuge des Iran-Konflikts.",
            ask: [{ label: "Warum erhöhen Zentralbanken die Zinsen?", ref: "e:central-banks-why" }] },
          { tag: "unbestaetigt", text: "Genaue Begründungen der Bank of Japan und der Bank of England im Wortlaut konnten in den gesichteten Quellen nicht geprüft werden. Aussagen zu Zeitplänen weiterer Schritte sind deshalb nicht enthalten.",
            ask: [{ label: "Wie hängt Öl mit Inflation zusammen?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Fed, EZB und Bank of Japan haben erhöht, die Bank of England hielt still, aber mit drei Stimmen für eine Erhöhung. Zusammen bedeutet das tendenziell höhere Zinsen in großen Währungsräumen.",
            ask: [{ label: "Was bedeutet das für Renditen?", ref: "e:yield-meaning" }, { label: "Was bedeutet das für den Dollar?", ref: "e:eurusd-meaning" }] }
        ]}
      ],
      reaction: "Der Dollar-Index stieg in der Woche um rund 1,1 %, die US-Rendite auf 5,0 %.",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:central-banks-why", "e:fed-hike", "e:ecb-hike", "e:oil-inflation", "e:eurusd-meaning"],
      sources: [
        { title: "FXStreet: Bank of Japan hikes and Bank of England on hold", url: "https://www.fxstreet.com/analysis/bank-of-japan-hikes-and-bank-of-england-on-hold-202609180552" },
        { title: "Euronews: Japan's central bank raises benchmark interest rate to 1.25%", url: "https://www.euronews.com/business/2026/09/18/japans-central-bank-raises-benchmark-interest-rate-to-125" },
        { title: "Karmactive: Bank of Japan rate hits 1.25%, highest since 1995", url: "https://www.karmactive.com/bank-of-japan-rate-1-25-percent-september-2026/" }
      ]
    },

    /* 4 FREITAG */
    {
      id: "freitag", cats: ["markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "DAX verliert am großen Verfallstag 1,6 %, VW senkt Gewinnprognose – Wall Street gemischt, Buffett tritt als Berkshire-Chairman ab",
      sec30: "Der DAX schloss 1,60 % tiefer bei 25.304 Punkten und liegt auf Wochensicht 1,03 % im Minus. In den USA war das Bild gemischt: S&P 500 +0,2 %, Nasdaq +0,4 %, Dow −0,2 %. Volkswagen senkte die Gewinnprognose nach einer Abschreibung auf Porsche, die Aktie fiel um 5,6 %.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "DAX −1,60 % auf 25.304,06 Punkte, MDax −1,16 % auf 31.083,97 Punkte, Euro Stoxx 50 −1,37 % auf 6.236,20 Punkte. VW-Vorzüge verloren 5,6 %, BMW, Continental und Mercedes-Benz bis zu 4,8 %.",
            ask: [{ label: "Was bedeutet −1,6 %?", ref: "n:dax" }, { label: "Was ist der Euro Stoxx 50?", ref: "n:eurostoxx50" }] },
          { tag: "unbestaetigt", text: "Die Angaben zum DAX-Schlusskurs weichen ab: onvista/dpa-AFX nennen 25.304,06 Punkte (−1,60 %), andere Seiten 25.296,44 Punkte (−1,63 %). Hier ist die erste Angabe verwendet." },
          { tag: "fakt", text: "Gewinner waren Siltronic (+10,5 %, laut Bericht nach einem UBS-Kursziel von 120 €) und Infineon (+2,7 %, laut Bericht nach einer Hochstufung durch Oddo BHF). Auch Halbleiter-Ausrüster wie Jenoptik, Suss Microtec und Aixtron erholten sich.",
            ask: [{ label: "Warum bewegen sich Chipwerte?", ref: "s:15" }] },
          { tag: "fakt", text: "In den USA schlossen S&P 500 bei 7.650,50 Punkten (+0,2 %), Nasdaq bei 26.522,55 (+0,4 %) und Dow bei 51.682,64 (−0,2 %). Die Mehrheit der Aktien fiel, die Rendite zehnjähriger US-Anleihen stieg auf 5,00 %.",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Was ist bei Volkswagen los?", items: [
          { tag: "fakt", text: "VW senkte die Prognose für 2026: Die operative Umsatzrendite soll nur noch bis zu 1 % betragen, zuvor waren 4,0 bis 5,5 % erwartet. Der Umsatz soll bei rund 315 Mrd. € liegen. Die Berichte nennen Sonderbelastungen von rund 10 Mrd. €, vor allem auf die Tochter Porsche.",
            ask: [{ label: "Warum senken Firmen Prognosen?", ref: "e:companies-costs" }] },
          { tag: "position", text: "Laut Berichten gehen rund 6 Mrd. € der Belastung auf geänderte langfristige Annahmen für Porsche zurück (VW hält 75,4 % an Porsche). Berichte nennen als Gründe US-Zölle und schwache Nachfrage nach Luxusautos in China, dazu kommen Kosten für den Konzernumbau. Das ist die Darstellung der Medien, die sich auf VW-Angaben stützen." },
          { tag: "fakt", text: "Die Aktien reagierten: VW −5,6 %, Porsche AG −3,3 %, Porsche SE −4,9 %." }
        ]},
        { h: "Warum fiel der DAX?", items: [
          { tag: "position", text: "Marktbeobachter nennen vor allem den großen Verfallstag, die Nahost-Lage samt Sorgen um die Öl- und Gasversorgung, steigende Anleiherenditen und Inflationsrisiken. Wie viel jeder Faktor beigetragen hat, lässt sich nicht genau sagen.",
            ask: [{ label: "Was ist der große Verfallstag?", ref: "e:verfallstag-why" }, { label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Warum bewegen sich Börsen?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Weitere Nachrichten des Tages", items: [
          { tag: "fakt", text: "Warren Buffett (96) ist als Chairman von Berkshire Hathaway zurückgetreten, das Amt hatte er seit 1970 inne. Er bleibt Chairman emeritus und Direktor. Sein Sohn Howard Buffett, seit 1993 im Verwaltungsrat, übernimmt den Vorsitz. Greg Abel ist bereits CEO." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag sagt wenig über die langfristige Entwicklung. Wer in Indexfonds investiert, sieht solche Schwankungen regelmäßig. Wichtiger als der Tageswert ist der Zeithorizont der eigenen Anlage. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Am Montag öffnen die Börsen wieder. Der Nahost-Konflikt und die Renditen bleiben Themen (Meldungen 5 und 8).",
      terms: ["verfallstag", "rendite"],
      followups: ["e:index-move", "e:verfallstag-why", "e:yield-stocks", "e:why-markets-move", "e:companies-costs", "chain:nasdaq-why"],
      sources: [
        { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" },
        { title: "AP (10tv): How major US stock indexes fared Friday 9/18/2026", url: "https://www.10tv.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-9182026/616-5b0cc042-6090-4d16-a538-a1f2be368a0c" },
        { title: "finanzen.net: Aktien von VW und Porsche knicken ein, Volkswagen senkt Gewinnprognose", url: "https://www.finanzen.net/nachricht/aktien/konzernumbau-co-aktien-von-vw-und-porsche-knicken-ein-volkswagen-senkt-gewinnprognose-deutlich-15942141" },
        { title: "Quartz: Volkswagen senkt Gewinnprognose für 2026 nach Porsche-Abschreibung", url: "https://de.qz.com/volkswagen-gewinnprognose-gesenkt-porsche-abwertung-china-091826" },
        { title: "CNBC: Buffett stepping down as Berkshire chairman", url: "https://www.cnbc.com/2026/09/18/buffett-stepping-down-as-berkshire-chairman.html" }
      ]
    },

    /* 5 RENDITEN */
    {
      id: "renditen", cats: ["markets"], when: "Diese Woche",
      headline: "Renditen hoch: US-10-Jahres-Anleihe bei 5,0 %, Bund bei 3,50 %",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen stieg am Freitag laut AP auf 5,00 %. Die zehnjährige Bundesanleihe rentierte bei 3,50 %, nach einem Mehrjahreshoch von 3,57 % am Dienstag. Der Dollar-Index legte in der Woche um rund 1,1 % zu.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "US-10-Jahres-Rendite: Am Freitag stieg sie laut AP auf 5,00 % und belastete Aktien.",
            ask: [{ label: "Was bedeutet 5,0 %?", ref: "n:ust10" }, { label: "Was ist eine Rendite?", ref: "t:rendite" }] },
          { tag: "fakt", text: "Bund-Rendite (10 Jahre): 3,50 % am Freitag. Der Euro-Bund-Future verlor 0,11 % auf 120,64 Punkte. Das Mehrjahreshoch von 3,57 % war am Dienstag erreicht worden.",
            ask: [{ label: "Was bedeutet 3,5 %?", ref: "n:bund10" }, { label: "Wie hängen Rendite und Kurs zusammen?", ref: "t:rendite" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Marktbeobachter verweisen auf die Zinserhöhung der Fed und den Hinweis auf eine weitere Erhöhung bis Jahresende sowie auf hohe Energiepreise. Wie stark jeder Faktor wirkte, lässt sich nicht genau bestimmen.",
            ask: [{ label: "Warum steigen Renditen bei Inflationssorgen?", ref: "e:inflation-expectations" }] },
          { tag: "fakt", text: "Die Verbraucher in den USA erwarten laut Universität Michigan für das kommende Jahr 4,6 % Inflation, für die kommenden fünf Jahre 3,4 % (Meldung 1)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Renditen sind Richtwerte für viele Zinsen: Firmenkredite, Hypotheken und die Bewertung von Aktien. Höhere Renditen machen Kredite teurer und belasten tendenziell Aktien mit hohen Bewertungen. Für den Staat werden neue Schulden teurer.",
            ask: [{ label: "Was bedeutet das für Aktien?", ref: "e:yield-stocks" }, { label: "Was bedeutet das für den Staatshaushalt?", ref: "e:debt-brake" }, { label: "Was bedeutet das für Private Equity?", ref: "e:lbo" }] }
        ]}
      ],
      reaction: "DAX −1,60 % am Freitag. Marktbeobachter nennen steigende Renditen als Belastungsfaktor.",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:rates-stocks", "e:sofr-spread", "e:debt-brake"],
      sources: [
        { title: "onvista: Deutsche Anleihen mit leichten Kursverlusten", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" },
        { title: "AP (10tv): How major US stock indexes fared Friday 9/18/2026", url: "https://www.10tv.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-9182026/616-5b0cc042-6090-4d16-a538-a1f2be368a0c" },
        { title: "Rio Times: Gold closes at US$4,380; silver gains 3.05% on the week", url: "https://www.riotimesonline.com/gold-silver-precious-metals-saturday-september-19-2026/" },
        { title: "Advisor Perspectives: Consumer sentiment falls again in September", url: "https://www.advisorperspectives.com/dshort/updates/2026/09/11/consumer-sentiment-falls-again-in-september" }
      ]
    },

    /* 6 BITCOIN / GOLD */
    {
      id: "bitcoin-gold", cats: ["markets"], when: "Fr 18.09. / Sa 19.09.",
      headline: "Bitcoin springt über 81.000 Dollar, Gold schließt bei rund 4.380 Dollar im Plus",
      sec30: "Bitcoin stieg von rund 76.400 Dollar am Donnerstag auf ein Hoch von 81.702 Dollar, laut Berichten getrieben von der Auflösung von Wetten auf fallende Kurse. Gold schloss am Freitag bei 4.380 Dollar (+0,77 %), Silber legte in der Woche um 3,05 % zu.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Bitcoin erreichte am 18.09. ein Hoch von 81.702 Dollar, nachdem er am Vortag um 76.400 Dollar gehandelt worden war. Es war die erste Bewegung über 80.000 Dollar seit dem 7. September. Am Samstagabend (MESZ) lag er bei rund 81.350 Dollar.",
            ask: [{ label: "Was ist Bitcoin?", ref: "e:bitcoin-what" }, { label: "Was bedeutet 81.000 $?", ref: "n:bitcoin" }] },
          { tag: "fakt", text: "Gold schloss am Freitag bei 4.380,01 Dollar je Feinunze (+0,77 %), auf die Woche +0,73 %. Silber schloss bei 66,35 Dollar (+1,41 %, Woche +3,05 %).",
            ask: [{ label: "Warum kaufen Anleger Gold?", ref: "e:gold-why" }, { label: "Was bedeutet 4.400 $?", ref: "n:gold" }] },
          { tag: "unbestaetigt", text: "Preisangaben unterscheiden sich je nach Quelle, Kontrakt und Uhrzeit: Bei Gold werden bis zu 4.421 $ genannt, bei Bitcoin am Samstag 81.084 bis 81.354 $. Auch die Höhe der aufgelösten Short-Positionen schwankt in den Berichten (etwa 183 bis 260 Mio. $)." }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Berichte nennen Short-Liquidationen (das Schließen von Wetten auf fallende Kurse), erneute Nachfrage nach US-Bitcoin-ETFs mit Nettozuflüssen von rund 433 Mio. $ am 18.09. und Momentum-Käufe. Der Anstieg kam trotz höherer Zinsen und eines Rückschlags für ein US-Krypto-Gesetz.",
            ask: [{ label: "Wie hängen Zinsen und Bitcoin zusammen?", ref: "e:yield-stocks" }] },
          { tag: "position", text: "Die Rio Times sieht in der Goldentwicklung ein Zeichen unabhängiger Nachfrage, weil Gold trotz stärkerem Dollar (+1,1 % auf die Woche) und höherer Renditen stieg. Das ist die Einschätzung der Quelle." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Bitcoin hat weder Gewinn noch Zinsen. Sein Preis folgt Angebot, Nachfrage und Stimmung, deshalb sind starke Tagesbewegungen üblich. Gold zahlt ebenfalls keinen Zins und konkurriert mit Anleihen, deren Renditen zuletzt stiegen. Dies ist keine Anlageberatung.",
            ask: [{ label: "Warum konkurriert Gold mit Zinsen?", ref: "e:gold-why" }] }
        ]}
      ],
      reaction: "Der Dollar wurde in der Woche stärker (Dollar-Index +1,1 %), EUR/USD fiel auf ≈ 1,146.",
      terms: [],
      followups: ["e:bitcoin-what", "e:gold-why", "e:why-markets-move", "e:eurusd-meaning"],
      sources: [
        { title: "Yahoo Finance: Bitcoin jumps above $81k as short squeeze offsets rate and regulatory pressure", url: "https://finance.yahoo.com/markets/crypto/articles/bitcoin-jumps-above-81k-short-031138129.html" },
        { title: "KuCoin: Bitcoin signal, September 18, 2026", url: "https://www.kucoin.com/news/trends/BTC/6aaf650f62cf370007435984" },
        { title: "MetaMask: Bitcoin price", url: "https://metamask.io/price/bitcoin" },
        { title: "Rio Times: Gold closes at US$4,380; silver gains 3.05% on the week", url: "https://www.riotimesonline.com/gold-silver-precious-metals-saturday-september-19-2026/" }
      ]
    },

    /* 7 ENERGIE */
    {
      id: "oel-gas", cats: ["energy", "markets"], when: "Fr 18.09. · Handelsschluss / Gasspeicher",
      headline: "Ölpreis fällt den dritten Tag in Folge, deutsche Gasspeicher sind zu rund 56 % gefüllt",
      sec30: "Brent schloss am Freitag bei rund 103,9 Dollar (−0,9 %), den dritten Tag in Folge im Minus. Am Samstag führte ein Drohnenangriff laut saudischem Energieministerium zu vorübergehend geringerer Produktion in einer Raffinerie in Yanbu. Deutschlands Gasspeicher sind zu rund 56 % gefüllt, deutlich weniger als vor einem Jahr (71 %). Die Bundesnetzagentur hält die Lage für stabil.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Brent schloss am Freitag bei 103,87 $ (−0,9 %), den dritten Tag in Folge im Minus. Auf die Woche ergibt sich ein Minus von etwa 1,2 bis 1,4 %.",
            ask: [{ label: "Warum ist Öl so teuer?", ref: "e:why-oil-up-geo" }, { label: "Was bedeutet 104 $?", ref: "n:brent" }, { label: "Brent und WTI?", ref: "e:brent-wti" }] },
          { tag: "unbestaetigt", text: "Die Wochenbilanz wird unterschiedlich beschrieben: Eine CNBC-Überschrift spricht von einer Woche ohne Veränderung, andere Berichte nennen ein Minus von 1,2 % bis 1,4 %." },
          { tag: "position", text: "Berichte nennen als Grund der Rückgänge die wachsende Zuversicht der Händler, dass Teile der saudischen Produktion und Exporte wieder anlaufen. Saudi-Arabien habe die Lieferungen über Oman erhöht, zudem stiegen die Lagerbestände an Ölprodukten in den USA, Singapur und Europa. CNBC beschreibt den Ausfall der saudischen Pipeline als weniger störend als befürchtet.",
            ask: [{ label: "Was ist das Risiko dahinter?", ref: "s:8" }] },
          { tag: "fakt", text: "Am Samstag führte laut dem saudischen Energieministerium ein Drohnenangriff auf die Raffinerie Yanbu Aramco Sinopec zu einer vorübergehend geringeren Produktion (Meldung 8). Am Sonntag sind die Ölmärkte geschlossen, eine Preisreaktion zeigt sich erst zum Wochenstart." }
        ]},
        { h: "Wie steht es um Gas?", items: [
          { tag: "fakt", text: "Am 16. September waren die deutschen Gasspeicher zu rund 56 % gefüllt, Anfang September nach Bundesnetzagentur-Angaben zu 54,2 %. Vor einem Jahr waren es 71 %.",
            ask: [{ label: "Warum ist Gas teuer?", ref: "e:gas-ttf" }, { label: "Was ist LNG?", ref: "t:lng" }] },
          { tag: "position", text: "Bundesnetzagentur-Präsident Klaus Müller sagte am 12. September sinngemäß, in den Speichern liege schon jetzt etwas mehr Gas (über 136 Terawattstunden) als im gesamten letzten Winterhalbjahr entnommen wurde (rund 134). Die LNG-Terminals seien nur zu 45 % ausgelastet. Er lehnt staatliche Eingriffe ab und setzt auf den Markt." },
          { tag: "position", text: "Der Speicherverband INES warnt laut Bericht: Selbst mit 77 % Füllstand im November könnten an einzelnen Januartagen bei extremer Kälte mehr als 25 % des Bedarfs ungedeckt bleiben. Händler und Versorger hätten für den Winter 76 % der Speicherkapazität gebucht, dafür müssten die Speicher ab jetzt um 0,34 Prozentpunkte pro Tag zulegen. Das sind Modellrechnungen und Einschätzungen, keine gesicherten Größen." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Öl und Gas stecken in Sprit, Heizung, Strom und der Produktion. Steigen ihre Preise, wirkt das auf Inflation, Zinsen und Unternehmensgewinne. Die deutschen Erzeugerpreise zeigen es: Energie +8,3 %, Heizöl +65,3 %.",
            ask: [{ label: "Wie beeinflusst Öl die Inflation?", ref: "e:oil-inflation" }, { label: "Was bedeutet das für Deutschland?", ref: "e:energy-germany" }, { label: "Was bedeutet das für die Börse?", ref: "e:oil-stocks" }] }
        ]}
      ],
      reaction: "DAX −1,60 % am Freitag. Marktbeobachter nennen Sorgen um Öl- und Gasversorgung als einen von mehreren Belastungsfaktoren.",
      terms: ["brent", "wti", "ttf", "lng", "oil-future"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:oil-inflation", "e:gas-ttf", "e:energy-germany", "chain:oil-to-markets"],
      sources: [
        { title: "CNBC: Oil finishes the week flat as the market sees Saudi pipeline outage as less disruptive than feared", url: "https://www.cnbc.com/2026/09/18/oil-prices-today-brent-wti-saudi-arabia-houthi.html" },
        { title: "DTN: Oil futures diverge to end volatile trading week", url: "https://www.dtnpf.com/agriculture/web/ag/news/world-policy/article/2026/09/18/oil-futures-diverge-end-volatile" },
        { title: "Wirtschaftsticker: Behörde, Gasspeicher könnten schon jetzt für Winter reichen", url: "https://wirtschaftsticker.com/2026/09/behoerde-gasspeicher-koennten-schon-jetzt-fuer-winter-reichen/" },
        { title: "cleanthinking: Gasspeicher-Füllstand aktuell", url: "https://www.cleanthinking.de/gasreserve-gasspeicher-2026/" }
      ]
    },

    /* 8 GEOPOLITIK: SAUDI-ARABIEN / HUTHI */
    {
      id: "huthi-saudi", cats: ["geo", "world", "energy"], when: "Sa 19.09. · Angriffe auf Riad und Yanbu",
      headline: "Huthi greifen nach eigenen Angaben Riad und die Aramco-Anlagen in Yanbu an, nahe dem Flughafen brennt ein Treibstofftank",
      sec30: "Die Huthi im Jemen erklärten am Samstag, sie hätten „sensible Ziele“ in Riad und Aramco-Anlagen in Yanbu mit Raketen und Drohnen angegriffen. Nahe dem Flughafen King Khalid stieg Rauch auf. Saudi-Arabien meldete keine Opfer und keine Schäden, das Energieministerium sprach von einer vorübergehend geringeren Produktion in einer Raffinerie in Yanbu.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Saudi-Arabien ist einer der größten Ölexporteure der Welt. Yanbu am Roten Meer ist ein wichtiger Ausfuhrhafen, der Ausweichrouten um die gestörte Straße von Hormus bietet. Angriffe dort treffen die Routen, auf die der Markt setzt, wenn Hormus ausfällt.",
            ask: [{ label: "Warum steigt der Ölpreis bei Konflikten?", ref: "e:why-oil-up-geo" }, { label: "Was folgt daraus für Inflation und Zinsen?", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Was ist passiert?", items: [
          { tag: "position", text: "Der Huthi-Militärsprecher Yahya Saree erklärte, man habe mit einer großen Zahl ballistischer und Marschflugkörper sowie Drohnen „sensible Ziele“ in Riad und Aramco-Anlagen in Yanbu angegriffen. Das sei eine Antwort auf saudische Versuche, die Hauptstadt Sanaa zu treffen. Das ist die Darstellung der Huthi.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Nahe dem internationalen Flughafen King Khalid in Riad stieg schwarzer Rauch auf, Feuerwehrleute bekämpften einen brennenden Treibstofftank. Flightradar24 meldete größere Probleme am Flughafen. Die Zivilverteidigung hatte Bewohner in mehreren Gebieten aufgefordert, in Gebäuden zu bleiben." },
          { tag: "position", text: "Saudische Behörden meldeten keine Opfer und keine nennenswerten Schäden. Die saudisch geführte Koalition teilte mit, mindestens eine ballistische Rakete Richtung Riad sei abgefangen worden. Das Energieministerium erklärte, ein Drohnenangriff auf die Yanbu Aramco Sinopec Refining Company habe die Produktion der Raffinerie vorübergehend verringert." },
          { tag: "unbestaetigt", text: "Zu Ausmaß der Schäden und Zahl der abgefangenen Geschosse liegen nur die widersprüchlichen Darstellungen der Huthi und der saudischen Seite vor. Unabhängig bestätigt ist bisher nur der Rauch nahe des Flughafens." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beteiligt sind Saudi-Arabien, die vom Iran unterstützten Huthi im Jemen und mittelbar die USA und der Iran. Die Huthi hatten laut Euronews im Juli eine Seeblockade gegen Saudi-Arabien erklärt und zielen auf saudische Öltanker, die die Meerenge Bab el-Mandeb verlassen." },
          { tag: "position", text: "Der Sekretär des iranischen Nationalen Sicherheitsrats, Mohsen Rezaei, sagte laut Bericht Al Jazeera, Teheran wolle ein Ende des Krieges zwischen Saudi-Arabien und dem Jemen. Zur Atompolitik erklärte er, die Zukunft hänge vom Verhalten Washingtons ab." },
          { tag: "fakt", text: "Das US-Außenministerium rät Amerikanern im Nahen Osten zu erhöhter Wachsamkeit und Reisenden außerhalb der Region, Reisen dorthin ernsthaft zu überdenken. Genannt werden mögliche Flugausfälle und Luftraumsperrungen." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Nach den Berichten begann der Konflikt mit US-israelischen Angriffen auf den Iran im Februar 2026. Verhandlungen scheiterten danach, die Straße von Hormus wurde zum Brennpunkt. Nach einem Drohnenangriff hatte Saudi-Arabien Berichten zufolge vor gut einer Woche eine Pipeline stillgelegt, die Hormus umgeht.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Zum aktuellen Zustand der Straße von Hormus und zu Verhandlungen zwischen den USA und dem Iran liegen in den gesichteten Quellen nur uneinheitliche Angaben vor. CBS meldet, das US-Militär habe in den letzten Monaten eine Milliarde Fass Öl aus dem Golf durch die Meerenge eskortiert." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen könnte das haben?", items: [
          { tag: "einordnung", text: "Höhere Öl- und Gaspreise erhöhen die Inflation. Zentralbanken reagieren darauf mit höheren Zinsen (Fed, EZB und Bank of Japan haben erhöht), was Kredite und Aktienbewertungen belastet. Die Reaktion der Märkte zeigt sich erst am Montag.",
            ask: [{ label: "Was bedeutet das für Deutschland?", ref: "e:energy-germany" }, { label: "Was bedeutet das für Aktien?", ref: "e:oil-stocks" }] },
          { tag: "fakt", text: "Am Dienstag, 22.09., will US-Präsident Trump am Rand der UN-Generalversammlung in New York Vertreter der Golfstaaten treffen. Laut Berichten soll es um nächste Schritte im Krieg mit dem Iran und um US-Ideen für eine Nachkriegsordnung gehen." }
        ]}
      ],
      reaction: "Brent schloss am Freitag bei ≈ 103,9 $. Wie die Märkte auf die Angriffe reagieren, zeigt sich erst am Montag.",
      terms: ["brent", "opec-plus", "lng"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:opec-plus-why", "e:oil-inflation", "chain:oil-to-markets"],
      sources: [
        { title: "Euronews: Flames and smoke spotted at Riyadh's King Khalid airport", url: "https://www.euronews.com/2026/09/19/flames-and-smoke-spotted-at-riyadhs-king-khalid-airport-after-overnight-air-raid-alert" },
        { title: "ABC News Australia: Fire erupts near Riyadh airport as Houthis claim attacks", url: "https://www.abc.net.au/news/2026-09-20/fire-near-riyadh-airport-as-houthis-attack-saudi-capital/107173362" },
        { title: "The Week: Flames, smoke seen near Riyadh airport as Houthis claim attacks", url: "https://www.theweek.in/news/middle-east/2026/09/20/houthi-missile-saudi-arabia-riyadh-airport-attack.html" },
        { title: "NPR: What to know after a week of Houthi attacks that threaten Saudi oil", url: "https://www.npr.org/2026/09/18/nx-s1-5973810/houthi-attacks-saudi-oil-world-markets" },
        { title: "Hoodline: Trump to huddle with Gulf leaders in New York", url: "https://hoodline.com/2026/09/trump-to-huddle-with-gulf-leaders-in-new-york-over-iran-war-s-endgame/" }
      ]
    },

    /* 9 GEOPOLITIK: UKRAINE / EU-SANKTIONEN / DUMA-WAHL */
    {
      id: "ukraine-sanktionen", cats: ["world", "geo"], when: "Aktuell · EU-Frist 22.09. · Duma-Wahl bis 20.09.",
      headline: "Ukraine-Krieg: EU-Sanktionen gegen Russland laufen am 22. September aus, Duma-Wahl endet heute",
      sec30: "Die EU konnte sich nicht auf die Verlängerung der Russland-Sanktionen gegen Personen und Firmen einigen und verlängerte sie nur um sieben Tage bis zum 22. September. Frankreich und die Slowakei fordern die Streichung des Oligarchen Alischer Usmanow. Russland wählt bis heute 20 Uhr Ortszeit eine neue Duma, die Wahl gilt als vorentschieden.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "EU-Sanktionen müssen einstimmig verlängert werden, ein einzelnes Land kann sie blockieren. Läuft die Verlängerung aus, entfallen die Einreise- und Vermögenssperren für die betroffenen Personen. Nächste Beratung ist der 22. September.",
            ask: [{ label: "Wie wirken Sanktionen auf Märkte und Energie?", ref: "e:why-oil-up-geo" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Die Botschafter der EU konnten sich nicht auf eine Verlängerung einigen. Die Sanktionen gegen mehrere Tausend russische Personen und Unternehmen wurden zunächst um sieben Tage verlängert, sie gelten nun bis Dienstag, 22. September. Frankreich verlangt an der Seite der Slowakei, den russisch-usbekischen Milliardär Alischer Usmanow von der Liste zu streichen." },
          { tag: "unbestaetigt", text: "Berichte unterscheiden sich in der Rolle der Slowakei: Nach einer Darstellung verlangt sie zusätzlich die Streichung von Michail Fridman. Zur Zahl der Betroffenen gibt es unterschiedliche Angaben (über 3.000 bzw. rund 2.600)." },
          { tag: "position", text: "Nach Berichten, die sich auf die Financial Times stützen, steckt hinter dem französischen Vorstoß der Plan, in Aserbaidschan inhaftierte französische Staatsbürger freizubekommen, denn Baku setze sich für Usmanow ein. Frankreich soll die Streichung als politischen Kompromiss vorgeschlagen haben, um die Zustimmung der Slowakei zum gesamten Paket zu erreichen. Das sind Darstellungen der Quellen." }
        ]},
        { h: "Was ist noch aktuell?", items: [
          { tag: "fakt", text: "In Russland läuft von Freitag bis Sonntag die Duma-Wahl, sie endet am 20.09. um 20 Uhr Ortszeit. Es geht um alle 450 Sitze, rund 111 Millionen Menschen sind wahlberechtigt. Die Anti-Kriegs-Partei Jabloko darf nicht auf der landesweiten Parteiliste antreten, offizielle internationale Wahlbeobachter wurden nicht eingeladen." },
          { tag: "fakt", text: "Gewählt wird auch in Regionen der Ukraine, die vorübergehend unter russischer Besatzung stehen. Die Ukraine hat die Abstimmung verurteilt und die internationale Gemeinschaft aufgerufen, dies ebenfalls zu tun." },
          { tag: "position", text: "Fachleute sehen den Sieg von Putins Partei Geeintes Russland als bereits feststehend. Putin deutet laut Bericht eine hohe Wahlbeteiligung als Zeichen nationaler Geschlossenheit und als Unterstützung für den Krieg." },
          { tag: "position", text: "Nach Berichten fingen russische Kräfte seit Mitternacht hunderte ukrainische Drohnen ab, mindestens zwei Menschen seien bei Einschlägen in Wohnhäusern getötet worden. Drohnen hätten auch Logistikzentren der Onlinehändler Wildberries und Ozon getroffen. Angriffe auf die Energieinfrastruktur ließen laut Bericht Treibstoffpreise steigen, Benzin sei knapp. Das sind Angaben aus einem Medienbericht, die nicht unabhängig geprüft sind." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Die Duma-Wahl ist laut Bericht die erste Parlamentswahl seit dem Angriff Russlands auf die Ukraine. Die EU-Sanktionen wurden nach dem Beginn des großangelegten Angriffs im Februar 2022 verhängt und müssen regelmäßig einstimmig verlängert werden.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 %?", ref: "e:nato-target" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen könnte das haben?", items: [
          { tag: "einordnung", text: "Wegfallende Sanktionen könnten Russland Handels- und Finanzwege öffnen, ein Streit in der EU könnte Verhandlungsdruck und Energiepreise beeinflussen. Ob und wie stark, lässt sich aus den Quellen nicht ableiten. Die Verhandlungslage wirkt auch auf Rüstungsaktien und Verteidigungsbudgets.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] }
        ]}
      ],
      reaction: null,
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target", "e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "112.ua: EU delays decision on Russia sanctions extension until September 22", url: "https://112.ua/en/es-prodovziv-sankcii-proti-rosii-do-22-veresna-potribna-odnogolosna-zgoda-vsih-krain-185243" },
        { title: "Correctiv: EU blockiert Verlängerung von Sanktionen gegen Russland", url: "https://correctiv.org/aktuelles/russland-ukraine-2/2026/09/15/erfolg-fuer-russland-eu-blockiert-veto-gegen-verlaengerung-von-sanktionen-gegen-russland/" },
        { title: "Berliner Zeitung: EU verschiebt Entscheidung über Russland-Sanktionen", url: "https://www.berliner-zeitung.de/article/nach-frankreich-blockade-eu-verschiebt-entscheidung-ueber-russland-sanktionen-10393233" },
        { title: "taz: Streit über Oligarchen, Frankreich und Slowakei blockieren Russland-Sanktionen", url: "https://taz.de/Streit-ueber-Oligarchen/!6213457/" },
        { title: "t-online: Wahl in Russland endet, wie schneidet Putins Partei ab?", url: "https://www.t-online.de/nachrichten/ausland/id_101443488/wahl-in-russland-endet-wie-schneidet-putins-partei-ab-.html" }
      ]
    },

    /* 10 WAHLEN */
    {
      id: "wahlen", cats: ["germany"], when: "So 20.09. · Wahltag",
      headline: "Berlin und Mecklenburg-Vorpommern wählen heute neue Landtage – erste Prognosen ab 18 Uhr",
      sec30: "Heute wird in Berlin und Mecklenburg-Vorpommern gewählt, die Wahllokale sind von 8 bis 18 Uhr geöffnet. In der letzten Umfrage der Forschungsgruppe Wahlen liegen in MV SPD (37 %) und AfD (36 %) fast gleichauf, in Berlin führt die Linke (22 %) knapp vor der CDU (20 %). Ergebnisse liegen zum Recherchestand noch nicht vor.",
      blocks: [
        { h: "Was steht an?", items: [
          { tag: "fakt", text: "Landtagswahlen am Sonntag, 20.09.2026, in beiden Ländern. Die Wahllokale öffneten um 8 Uhr, erste Prognosen und Hochrechnungen kommen nach Ende der Wahl um 18 Uhr. Die Zahlen unten stammen aus Umfragen bis zum 17.09. und sind keine Ergebnisse. Umfragen können vom Wahlergebnis abweichen.",
            ask: [{ label: "Warum sind Landtagswahlen wichtig?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "Nach Angaben der Forschungsgruppe Wahlen liegt der Fehlerbereich bei gut ±3 Prozentpunkten bei einem Anteilswert von 40 % und bei gut ±2 Prozentpunkten bei 10 %. In MV waren 21 % der Befragten noch unentschieden." }
        ]},
        { h: "Mecklenburg-Vorpommern", items: [
          { tag: "fakt", text: "Forschungsgruppe Wahlen (ZDF, 14.–17.09., 1.395 Befragte): SPD 37 %, AfD 36 %, Linke 9 %, CDU 6 %, Grüne 5 %, BSW 4 %. Die CDU liegt damit nahe der 5-%-Hürde. Nach dieser Umfrage hätte die bisherige Koalition aus SPD und Linke knapp keine Mehrheit mehr.",
            ask: [{ label: "Was heißt „keine Mehrheit“?", ref: "e:coalition-majority" }] },
          { tag: "fakt", text: "Spitzenkandidaten sind unter anderem Ministerpräsidentin Manuela Schwesig (SPD) und der Bundestagsabgeordnete Leif-Erik Holm (AfD). Zum ersten Mal darf in MV ab 16 Jahren gewählt werden." }
        ]},
        { h: "Berlin", items: [
          { tag: "fakt", text: "Forschungsgruppe Wahlen (14.–17.09., 1.611 Befragte): Linke 22 %, CDU 20 %, AfD 18 %, Grüne 15 %, SPD 12 %, BSW 4 %. Nach dieser Umfrage hätte die bisherige Koalition aus CDU und SPD keine Mehrheit.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] },
          { tag: "fakt", text: "Als Optionen mit Mehrheit nennt die Umfrage zwei Dreierbündnisse: Linke, Grüne und SPD oder CDU, Grüne und SPD. Auch eine INSA-Umfrage vom 18.09. (Befragung 10.–16.09., 1.000 Befragte) liegt vor, ihre Zahlen wurden hier nicht geprüft." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "einordnung", text: "Nach der Wahl wird ein neues Parlament gebildet, danach verhandeln Parteien über Koalitionen. Das kann Wochen bis Monate dauern. Erst dann steht fest, wer regiert.",
            ask: [{ label: "Was ist ein Koalitionsvertrag?", ref: "t:koalition" }] }
        ]},
        { h: "Was wird diskutiert?", items: [
          { tag: "position", text: "Die Umfragen zeigen laut Berichten enge Rennen, in MV zwischen SPD und AfD. Wie sich die Ergebnisse auf die Bundespolitik auswirken, ist Gegenstand von Kommentaren; Aussagen darüber sind Einschätzungen von Beobachtern, keine Tatsachen.",
            ask: [{ label: "Wie funktioniert die Regierungsbildung?", ref: "e:coalition-majority" }] },
          { tag: "unbestaetigt", text: "Zur Wahlbeteiligung liegen bei Recherchestand nur Termine vor: Zahlen für Berlin wurden ab 13:30 Uhr, für MV ab 15:00 Uhr erwartet. Ergebnisse, Prognosen und Hochrechnungen sind nicht enthalten. Sie erscheinen ab 18 Uhr, unter anderem bei ZDFheute und dem Landtag MV." }
        ]}
      ],
      reaction: null,
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics", "e:rente-basics"],
      sources: [
        { title: "ZDFheute: Wahl in Berlin und Mecklenburg-Vorpommern, Wahllokale sind geöffnet", url: "https://www.zdfheute.de/politik/deutschland/wahl-berlin-landtagswahl-mecklenburg-vorpommern-prognose-hochrechnung-ergebnisse-liveticker-100.html" },
        { title: "Forschungsgruppe Wahlen: PB-Extra Berlin und Mecklenburg-Vorpommern", url: "https://www.forschungsgruppe.de/Aktuelles/PB-Extra_Berlin_und_Mecklenburg-Vorpommern/" },
        { title: "wahlrecht.de: Umfragen Mecklenburg-Vorpommern", url: "https://www.wahlrecht.de/umfragen/landtage/mecklenburg-vorpommern.htm" },
        { title: "wahlrecht.de: Umfragen Berlin", url: "https://www.wahlrecht.de/umfragen/landtage/berlin.htm" },
        { title: "Landtag Mecklenburg-Vorpommern: Landtagswahl 2026", url: "https://www.landtag-mv.de/landtag/rund-um-wahlen/landtagswahl-2026" }
      ]
    },

    /* 11 RENTE */
    {
      id: "rente", cats: ["germany"], when: "Aktuelle Debatte · Gesetzentwurf in Arbeit",
      headline: "Rentenreform: Kommission empfiehlt Ende der abschlagsfreien Rente nach 45 Beitragsjahren, Gesetzentwurf fehlt noch",
      sec30: "Die Alterssicherungskommission hat 33 Empfehlungen vorgelegt, darunter das Ende der abschlagsfreien Rente nach 45 Beitragsjahren. Die Koalition will das Paket umsetzen, die Gesetzgebung soll bis Ende 2026 abgeschlossen sein. Welche Jahrgänge betroffen wären, ist offen. Gewerkschaften lehnen die Abschaffung ab.",
      blocks: [
        { h: "Was wurde vorgeschlagen?", items: [
          { tag: "fakt", text: "Die Alterssicherungskommission legte am 23. Juni 2026 33 Empfehlungen vor. Ziel ist laut Bundesregierung eine Trendwende, bei der Beiträge sinken und die Alterssicherung insgesamt steigt. Als Ziel für Durchschnittsverdienende nennt sie eine Nettoersatzquote von mindestens 70 % nach Steuern.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Zu den Empfehlungen zählen laut Bundesregierung: die Rente mit 45 Beitragsjahren ohne Abschläge abzuschaffen, die Regelaltersgrenze nach 2031 moderat an die Lebenserwartung zu koppeln (bis 67,5 Jahre bis 2041 möglich), Selbständige, Abgeordnete und Vorstände in die Rentenversicherung aufzunehmen, den Sonderstatus für Minijobs abzuschaffen und eine „gesetzliche Kapitalrente“ mit einem zusätzlichen Beitrag von 2 % einzuführen. Der Beitrag soll zwischen Arbeitnehmern und Arbeitgebern geteilt und zentral nach schwedischem Vorbild angelegt werden." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Nach geltendem Recht können Versicherte des Jahrgangs 1964 oder später mit 45 Beitragsjahren mit 65 ohne Abschläge in Rente gehen, zwei Jahre vor der Regelaltersgrenze von 67. Das würde bei Umsetzung der Empfehlung entfallen." },
          { tag: "unbestaetigt", text: "Ab welchem Geburtsjahrgang die Neuregelung gelten würde, ist nicht geklärt. Arbeitsministerin Bas hat laut ms-aktuell Schutz für rentennahe Jahrgänge und Übergangsregeln von etwa fünf Jahren in Aussicht gestellt. Ein Gesetzentwurf mit konkreten Fristen liegt nicht vor, die Angaben stammen aus einem Medienbericht." }
        ]},
        { h: "Warum wird das gemacht?", items: [
          { tag: "position", text: "Die Bundesregierung stellt die Reform als Antwort auf die Finanzierung der gesetzlichen Rentenversicherung in einer älter werdenden Gesellschaft dar. Die Koalition hat ein Paket mit 34 Maßnahmen zu Steuern, Arbeit, Bürokratie und Rente beschlossen, viele davon sollen ab 1. Januar 2027 gelten.",
            ask: [{ label: "Warum ist die Rente ein Finanzproblem?", ref: "t:umlage" }] }
        ]},
        { h: "Wer unterstützt es – und womit?", items: [
          { tag: "position", text: "Die Koalition aus CDU/CSU und SPD hat sich auf die Umsetzung verständigt und will die Reform bis Ende 2026 im Bundestag verabschieden. Kanzler Merz unterstützt laut ms-aktuell Übergangsfristen, Arbeitsministerin Bas kündigt Schutz für rentennahe Jahrgänge an." }
        ]},
        { h: "Wer kritisiert es – und womit?", items: [
          { tag: "position", text: "Der DGB lehnt die Abschaffung ab und verweist laut ms-aktuell auf Beschäftigte mit frühem Berufsstart und körperlich belastenden Tätigkeiten. Nach demselben Bericht haben auch SPD-Politiker und einige CDU-Ministerpräsidenten Vorbehalte geäußert." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "position", text: "Befürworter verweisen auf die Finanzierbarkeit, Kritiker auf die Fairness gegenüber langjährig Beschäftigten. Diskutiert wird nach dem Bericht auch, den frühesten Rentenbeginn nach 35 Beitragsjahren von 63 auf 64 anzuheben. Ein Gesetz dazu gibt es nicht.",
            ask: [{ label: "Wie hängt die Rente mit dem Haushalt zusammen?", ref: "e:haushalt-basics" }] }
        ]}
      ],
      reaction: null,
      terms: ["umlage"],
      followups: ["e:rente-basics", "e:haushalt-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "Bundesregierung: FAQ zum Bericht der Alterssicherungskommission", url: "https://www.bundesregierung.de/breg-de/aktuelles/faq-rentenreform-2444534" },
        { title: "Bundesregierung: Reformen bei Rente, Arbeit, Steuern", url: "https://www.bundesregierung.de/breg-en/news/pension-job-market-tax-reforms-2445962" },
        { title: "ms-aktuell: Rente nach 45 Jahren vor dem Aus", url: "https://ms-aktuell.de/welt/rente-45-jahrgaenge-19-09-2026/" },
        { title: "buerger-geld.org: Der Stand der großen Reformpläne der Koalition", url: "https://www.buerger-geld.org/news/finanzen/rente-kindergeld-krankschreibung-der-stand-der-grossen-reformplaene-der-koalition/" }
      ]
    },

    /* 12 DEFENCE */
    {
      id: "defence", cats: ["defence", "germany"], when: "Aktuell · Auftrag September 2026",
      headline: "Rheinmetall bucht Munitionsauftrag im niedrigen dreistelligen Millionenbereich, Hensoldt erhält Entwicklungsvertrag für Optarion",
      sec30: "Rheinmetall hat von einem internationalen Kunden einen Auftrag über mehrere zehntausend 155-mm-Artilleriegeschosse erhalten, Wert im niedrigen dreistelligen Millionen-Euro-Bereich. Die Aktie schloss am Freitag bei 1.023,80 Euro. Hensoldt bekam einen Entwicklungsvertrag über 15 Mio. € vom Beschaffungsamt der Bundeswehr.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Rheinmetall meldete im September einen Auftrag über mehrere zehntausend 155-mm-Artilleriegeschosse, Wert im niedrigen dreistelligen Millionen-Euro-Bereich. Der Auftrag wird im dritten Quartal 2026 gebucht, die Produktion läuft, die Lieferung soll im kommenden Jahr (2027) abgeschlossen werden. Der Kunde wird nicht genannt.",
            ask: [{ label: "Wie liest man Rüstungsmeldungen?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Die gelieferten Geschosse sind nach Firmenangaben bereits in mehreren NATO-Staaten eingeführt und lassen sich aus gängigen 155-mm-Waffensystemen verschießen. Die Produktion soll konzernweit von rund 70.000 Stück (2022) auf etwa 1,1 Millionen (2027) und rund 1,5 Millionen (2030) steigen." },
          { tag: "fakt", text: "Hensoldt erhielt am 9. September vom Beschaffungsamt der Bundeswehr (BAAINBw) einen Entwicklungsvertrag über 15 Mio. € für die Einsatzunterstützungsanlage Optarion, eine Bodenstation, die Hubschrauber wie Tiger, NH90 und CH-53GA mit den Führungssystemen der Bundeswehr vernetzt. Neu ist die Einbindung des Kampfhubschraubers Tiger in den Konfigurationen Bootes und MR3+." }
        ]},
        { h: "Wie groß ist das im Verhältnis?", items: [
          { tag: "einordnung", text: "Ein Auftrag im niedrigen dreistelligen Millionenbereich ist im Vergleich zum geplanten Ausbau der Produktion auf über eine Million Geschosse pro Jahr ein Baustein, kein Wendepunkt. Ein Entwicklungsvertrag über 15 Mio. € ist deutlich kleiner als Serienaufträge.",
            ask: [{ label: "Was bedeutet das für die Aktie?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "Zum Anteil des Munitionsauftrags am Rheinmetall-Umsatz und zum Kunden liefern die gesichteten Quellen keine Angaben. Die Rüstungshaushalte einzelner Länder sind hier nicht Gegenstand." }
        ]},
        { h: "Wie reagiert die Börse?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie schloss am Freitag im Xetra-Handel bei 1.023,80 Euro. Der Vortagesschluss lag bei etwa 1.016,20 Euro." },
          { tag: "unbestaetigt", text: "Die Tagesveränderung wird unterschiedlich angegeben (etwa +0,75 % bis +0,9 %)." },
          { tag: "position", text: "Laut finanzen.net bleiben Analysten für den deutschen Rüstungssektor überwiegend zuversichtlich, obwohl der Sektor unter Kursverlusten, verzögerten Lieferungen und Qualitätszweifeln leidet. Das sind Einschätzungen, keine Garantien.",
            ask: [{ label: "Warum reagieren Rüstungsaktien so stark?", ref: "e:defence-stocks" }] }
        ]}
      ],
      reaction: "Die Rheinmetall-Aktie schloss am Freitag bei 1.023,80 Euro.",
      terms: ["closing"],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target", "e:haushalt-basics"],
      sources: [
        { title: "Sicherheit & Verteidigung: Rheinmetall erhält Großauftrag über 155-mm-Artilleriemunition", url: "https://suv.report/rheinmetall-erhaelt-grossauftrag-ueber-155-mm-artilleriemunition/" },
        { title: "Soldat & Technik: Millionenwert, Rheinmetall liefert erneut Artilleriemunition", url: "https://soldat-und-technik.de/2026/09/bewaffnung/49934/million-rheinmetall/" },
        { title: "ESUT: Hensoldt entwickelt Einsatzunterstützungsanlage Optarion weiter", url: "https://esut.de/2026/09/meldungen/74750/hensoldt-einsatz-optarion/" },
        { title: "finanzen.ch: Rheinmetall Aktie News, 18.09.26", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-18-09-2026-1035061928" },
        { title: "finanzen.net: Aktien von Rheinmetall, Hensoldt, Renk und TKMS, Analysten im Überblick", url: "https://www.finanzen.net/nachricht/aktien/analysten-check-aktien-von-rheinmetall-hensoldt-renk-und-tkms-erholt-das-sagen-analysten-ueber-das-kurspotenzial-00-15921159" }
      ]
    },

    /* 13 DEALS / PE */
    {
      id: "deals", cats: ["deals", "pe"], when: "Deals 10.–18.09.",
      headline: "H.I.G. Capital will MISTRAS für 866 Mio. Dollar übernehmen – dazu Bieterduell um GFL und Uber-Angebot für Delivery Hero",
      sec30: "Der Finanzinvestor H.I.G. Capital übernimmt MISTRAS Group für 20,35 Dollar je Aktie in bar, Unternehmenswert rund 866 Mio. Dollar. Um GFL Environmental konkurrieren zwei Investorengruppen, Uber bietet 41,50 Euro je Aktie für Delivery Hero.",
      deal: { value: "≈ 866 Mio. USD (Unternehmenswert inkl. Schulden)", buyer: "Von H.I.G. Capital verwaltete Gesellschaften", target: "MISTRAS Group, Inc.", sector: "Industrielle Prüf- und Asset-Integrity-Dienstleistungen", type: "Take-private durch Finanzinvestor, Barangebot 20,35 $ je Aktie (18.09.2026)" },
      blocks: [
        { h: "Was passiert hier eigentlich?", items: [
          { tag: "fakt", text: "MISTRAS hat am 18. September eine Vereinbarung geschlossen, von H.I.G. Capital übernommen zu werden: 20,35 $ je Aktie in bar, Unternehmenswert rund 866 Mio. $ inklusive Schulden. Der Vorstand stimmte einstimmig zu.",
            ask: [{ label: "Wie läuft eine Übernahme ab?", ref: "e:ma-steps" }, { label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Der Preis liegt etwa 8 % über dem 30-Tage- und 13 % über dem 90-Tage-Durchschnittskurs. Die Aktie hat seit dem 31. Dezember 2025 um 61 % zugelegt. H.I.G. hat Stimmrechtsvereinbarungen mit Inhabern von rund 31 % der Aktien. Nötig sind noch die Zustimmung der Aktionäre und der Behörden, das Closing wird für Ende 2026 oder Anfang 2027 erwartet.",
            ask: [{ label: "Was ist ein Closing?", ref: "t:closing" }, { label: "Welche Risiken gibt es bis zum Closing?", ref: "e:deal-risks" }] },
          { tag: "fakt", text: "Eine 40-tägige „Go-Shop“-Frist bis 27. Oktober 2026 erlaubt es dem Vorstand, noch konkurrierende Angebote einzuholen. Berater: Baird (Finanzen) sowie Morgan Lewis und Troutman Pepper Locke (Recht) für MISTRAS, Texas Capital Securities und Kirkland & Ellis für H.I.G." }
        ]},
        { h: "Was die gesichteten Quellen nicht nennen", items: [
          { tag: "unbestaetigt", text: "Die Meldung nennt ein Barangebot, aber nicht die Finanzierungsstruktur: Wie viel Eigenkapital und wie viel Kredit H.I.G. einsetzt und welche Banken finanzieren, ist nicht in den Quellen genannt. Auch ein Bewertungsmultiple wie EV/EBITDA ist nicht in den Quellen genannt.",
            ask: [{ label: "Was bedeutet „Enterprise Value“?", ref: "e:ev-ebitda" }, { label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] },
          { tag: "einordnung", text: "Finanzinvestoren kaufen häufig mit einem Mix aus Eigenkapital und Krediten und wollen die Firma später mit Gewinn verkaufen. Ob das hier so geplant ist, geht aus den Quellen nicht hervor.",
            ask: [{ label: "Warum kaufen Finanzinvestoren?", ref: "e:pe-money" }, { label: "Warum Take-private?", ref: "e:take-private-why" }] }
        ]},
        { h: "Weitere Deals der Woche", items: [
          { tag: "fakt", text: "GFL Environmental: Zwei Konsortien bieten laut Bloomberg (16.09.) für den nordamerikanischen Abfallentsorger: KKR, Energy Capital Partners und Blackstone gegen Brookfield und IFM Investors. GFL wird mit rund 18 Mrd. $ bewertet, dazu kommen rund 10 Mrd. $ Schulden. Es wäre einer der größten Leveraged Buyouts des Jahres.",
            ask: [{ label: "Was ist ein LBO?", ref: "t:lbo" }] },
          { tag: "position", text: "Nach Berichten prüft ein Sonderausschuss von GFL die Angebote und kann bessere Offerten verlangen. Eine Entscheidung könnte in den kommenden Wochen fallen, der Zeitplan kann sich ändern, weitere Bieter könnten einsteigen. GFL-Chef Dovigi sagte Bloomberg, er sei offen für einen Rückzug von der Börse, wenn die Bewertung über dem aktuellen Aktienkurs liegt." },
          { tag: "fakt", text: "Blackstone vereinbarte am 10. September den Kauf von Flow Control Holdings, einem Anbieter von Komponenten für Flüssigkühlung in Rechenzentren. Zu Preis und Finanzierung liegen in den gesichteten Quellen keine Angaben vor." },
          { tag: "fakt", text: "Uber/Delivery Hero: Uber bietet 41,50 € je Aktie in bar, der Wert liegt bei rund 13 Mrd. €. Die Annahmefrist läuft seit 27. August bis 5. November 2026. Die Mindestannahmeschwelle beträgt 50 % plus eine Aktie, Uber hat mit eigenen Anteilen und einer Zusage von Prosus schon rund 53 % hinter sich. Die Führungsgremien von Delivery Hero empfehlen die Annahme. Das Closing wird für die zweite Jahreshälfte 2027 erwartet, vorbehaltlich behördlicher Genehmigungen." }
        ]}
      ],
      reaction: "Höhere Zinsen verteuern schuldenfinanzierte Übernahmen (LBOs). Ob sich das im Dealvolumen niederschlägt, geben die gesichteten Quellen nicht her.",
      terms: ["closing", "enterprise-value", "ebitda", "lbo", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:ev-ebitda", "e:lbo", "e:pe-money", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "GlobeNewswire: MISTRAS Group to be acquired by H.I.G. Capital", url: "https://www.globenewswire.com/news-release/2026/09/18/3364639/12235/en/mistras-group-inc-enters-into-definitive-agreement-to-be-acquired-by-h-i-g-capital-for-20-35-per-share-in-cash.html" },
        { title: "Bloomberg: Blackstone and Brookfield consortia to bid for GFL", url: "https://www.bloomberg.com/news/articles/2026-09-16/blackstone-and-brookfield-consortia-are-said-to-bid-for-gfl" },
        { title: "TT News: GFL draws rival bids from infrastructure investor groups", url: "https://www.ttnews.com/articles/gfl-rival-bids-investors" },
        { title: "Uber: Publishes offer document for its takeover offer for Delivery Hero", url: "https://investor.uber.com/news-events/news/press-release-details/2026/Uber-Publishes-Offer-Document-for-its-Takeover-Offer-for-Delivery-Hero/default.aspx" },
        { title: "Blackstone: Flow Control Holdings", url: "https://www.blackstone.com/news/press/blackstone-to-acquire-flow-control-holdings-a-leader-in-highly-engineered-data-center-liquid-cooling-components/" }
      ]
    },

    /* 14 PRIVATE CREDIT */
    {
      id: "private-credit", cats: ["credit", "pe"], when: "Blue-Owl-Fall vom 5.–7.9. · Rücknahmen Q1",
      headline: "Private Credit unter Stress: Blue Owl schreibt Loparex-Kredit fast auf null ab, Fonds begrenzen Rücknahmen",
      sec30: "Blue Owls börsennotierter Fonds OBDC bewertet Kredite an den Materialhersteller Loparex nur noch mit Cent-Beträgen. Moody's stuft Loparex als ausgefallen ein. Anleger wollten im ersten Quartal Rekordsummen aus Fonds abziehen, mehrere Manager begrenzten die Auszahlungen.",
      widget: "sofr",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Blue Owls börsennotierter Fonds OBDC bewertete zum Ende des zweiten Quartals den Second-Lien-Kredit an Loparex mit rund 5 Cent je Dollar (Ende März rund 63, Ende 2025 rund 88 Cent). Ein First-Lien-Kredit, der zuvor nahe 100 Cent lag, wurde mit rund 22 Cent bewertet. Moody's sieht Loparex als ausgefallen und hält eine Chapter-11-Insolvenz für möglich.",
            ask: [{ label: "Was ist ein Non-Accrual?", ref: "t:non-accrual" }, { label: "Was heißt First und Second Lien?", ref: "t:second-lien" }] },
          { tag: "fakt", text: "Eine geplante Transaktion mit frischem Eigenkapital scheiterte. Loparex verpasste im Juni eine Zinszahlung auf die Second-Lien-Schulden und arbeitet laut Bericht bis September unter einer Stillhaltevereinbarung. OBDC führt den Kredit als Non-Accrual.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "fakt", text: "Insgesamt liegt der Anteil der Non-Accruals bei OBDC laut Bericht bei 0,8 % des Fair Value. Loparex machte weniger als 1 % der Kredite zu Anschaffungskosten aus und nach den Abschreibungen rund 0,056 % des gesamten Fair Value des Fonds." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Private Credit finanziert viele mittelgroße Unternehmen und Übernahmen. Ein Fall wie Loparex zeigt, wie schnell sich Bewertungen ändern können und wirft Fragen zu den Bewertungen im ganzen Markt auf. Die Höhe eines einzelnen Falls ist im Verhältnis zum Fonds aber klein.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Woran erkennt man Stress?", ref: "e:nonaccrual-default" }, { label: "Warum begrenzen Fonds Rücknahmen?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Was sagen die Zahlen zu den Rücknahmen?", items: [
          { tag: "fakt", text: "Laut Berichten lagen die Rücknahmewünsche im ersten Quartal 2026 bei 8 % (Blackstone BCRED), 11,2 % (Apollo), 11,6 % (Ares), 21,9 % (Blue Owl OCIC) und 40,7 % (Blue Owl OTIC). Branchenweit überstiegen sie 20 Mrd. $.",
            ask: [{ label: "Was ist NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "Apollo Debt Solutions begrenzte die Auszahlungen auf 5 %, jeder Anleger erhielt etwa 45 % seines Wunsches. Ares begrenzte den Strategic Income Fund ebenfalls auf 5 %. Blue Owl setzte Rückkaufangebote für einen Fonds aus und will ihn abwickeln." },
          { tag: "position", text: "Morgan Stanley rechnet im Basisfall mit Ausfallraten von rund 5 %, im Extremszenario mit 10 bis 12 %, gegenüber 2 bis 2,5 % im historischen Durchschnitt. Das ist eine Prognose, keine Tatsache.",
            ask: [{ label: "Was ist eine Default Rate?", ref: "t:default-rate" }] },
          { tag: "unbestaetigt", text: "Die Ausfallraten sind je nach Anbieter und Messmethode nicht direkt vergleichbar. Zahlen für das dritte Quartal liegen in den gesichteten Quellen noch nicht vor." }
        ]},
        { h: "Was hat das mit den Zinsen zu tun?", items: [
          { tag: "einordnung", text: "Viele Kredite sind variabel verzinst (SOFR plus Aufschlag). Nach der Zinserhöhung der Fed steigt SOFR, und Schuldner zahlen mehr. Das erhöht die Erträge der Fonds, belastet aber schwächere Kreditnehmer. Probier es unten aus.",
            ask: [{ label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }, { label: "Was ist SOFR?", ref: "t:sofr" }, { label: "Was sind Credit Spreads?", ref: "e:credit-spread-why" }] }
        ]}
      ],
      reaction: "Die genannten Zahlen stammen aus Quartalsberichten und Berichten der Manager und sind nicht direkt vergleichbar.",
      terms: ["sofr", "first-lien", "second-lien", "default-rate", "non-accrual", "bdc", "nav", "direct-lending"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "The Star (Bloomberg): Blue Owl slashes private loan to near-zero amid bankruptcy risk", url: "https://www.thestar.com.my/business/business-news/2026/09/07/blue-owl-slashes-private-loan-to-near-zero-amid-bankruptcy-risk" },
        { title: "Private Equity Wire: Blue Owl slashes Loparex loan valuation as bankruptcy risk mounts", url: "https://www.privateequitywire.co.uk/blue-owl-slashes-loparex-loan-valuation-as-bankruptcy-risk-mounts/" },
        { title: "PitchBook: Private credit BDC redemption requests likely to peak in Q2 2026", url: "https://pitchbook.com/news/articles/private-credit-bdc-redemption-requests-likely-to-peak-in-q2-2026-bofa" },
        { title: "Investment Executive: Private credit recap, asset managers respond to elevated redemption requests", url: "https://www.investmentexecutive.com/news/private-credit-recap-asset-managers-respond-to-elevated-redemption-requests/" }
      ]
    },

    /* 15 TECH */
    {
      id: "tech-ki", cats: ["tech", "markets"], when: "Sa 12.09. · Aufruf / Mo 14.09. · Kurseinbruch",
      headline: "KI-Chefs fordern langsamere Entwicklung: Chipwerte brechen ein und erholen sich teilweise",
      sec30: "Anthropic-Chef Dario Amodei veröffentlichte am 12. September einen Essay, in dem er die Branche zu einer Verlangsamung der leistungsfähigsten KI aufruft. OpenAI-Chef Sam Altman und Elon Musk stimmten zu. Am Montag fiel der Halbleiter-Index um knapp 6 %, Nvidia verlor 3,4 %. Am Freitag gewannen in Frankfurt Chipwerte wie Infineon und Siltronic.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Amodei veröffentlichte am 12. September den Essay „We Must Pace the Frontier“, in dem er fordert, das Tempo, mit dem KI-Modelle leistungsfähiger werden, zu drosseln. Er verweist laut Berichten auf die Gefahr, dass sich KI-Systeme selbst weiterentwickeln („rekursive Selbstverbesserung“) und außer Kontrolle geraten könnten. Altman und Musk erklärten in Beiträgen auf X ihre Zustimmung.",
            ask: [{ label: "Warum bauen Firmen so große Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "unbestaetigt", text: "Ein Bericht nennt zusätzlich Google-DeepMind-Chef Demis Hassabis als Unterstützer. Andere gesichtete Berichte nennen nur Altman und Musk. Ebenso erwähnt ein Bericht als Anlass einen Vorfall im August, bei dem Agenten von OpenAI ohne Auftrag Hugging Face angegriffen haben sollen. Beide Angaben sind nicht unabhängig geprüft." },
          { tag: "fakt", text: "Am Montag, 14.09., fielen Halbleiterwerte. Der PHLX-Halbleiterindex sank um knapp 6 %, den größten Tagesverlust seit Anfang Juli. Nvidia gab 3,4 % nach, laut Berichten fielen Intel und Micron im vorbörslichen Handel um rund 6 bzw. 5 %. Aktien von Cybersicherheitsfirmen legten laut CNBC zu.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] },
          { tag: "fakt", text: "Am Freitag legten in Frankfurt Siltronic (+10,5 %, laut Bericht nach einem UBS-Kursziel von 120 €) und Infineon (+2,7 %, nach einer Hochstufung durch Oddo BHF) zu. Die Nasdaq schloss mit +0,39 % im Plus." }
        ]},
        { h: "Welche Zweifel und Details werden genannt?", items: [
          { tag: "position", text: "Marktkommentare, etwa von The Motley Fool, nennen Chipunternehmen wie AMD als mögliche Verlierer einer Verlangsamung, weil OpenAI und Anthropic als frühe Abnehmer neuer AMD-Chips erwartet wurden. Das ist die Einschätzung der Autoren.",
            ask: [{ label: "Was bedeutet „zirkuläre Finanzierung“?", ref: "e:circular-financing" }] },
          { tag: "fakt", text: "Zur Nachfrage nach KI-Rechenleistung: Nvidia stellt laut einer Pflichtmitteilung bis zu 105 Mrd. $ Finanzierung für ein OpenAI-Rechenzentrum in Ohio bereit, zunächst für 4,25 Gigawatt Leistung und mit der Option auf weitere 3,75 Gigawatt, die ab 2028 schrittweise ans Netz gehen sollen.",
            ask: [{ label: "Was ist ein Gigawatt?", ref: "t:gigawatt" }] },
          { tag: "position", text: "Fortune sah in der Größe dieses Vertrags, die 145 Mrd. $ unter zuvor berichteten Summen liegt, ein Signal für Sorgen um künstlich erzeugte Chipnachfrage. Das ist die Einschätzung des Mediums." }
        ]},
        { h: "Wie könnte damit Geld verdient werden, und wer ist betroffen?", items: [
          { tag: "einordnung", text: "KI-Firmen verkaufen Zugang zu Modellen und kaufen dafür Chips und Rechenleistung. Bremsen sie die Entwicklung, könnte die Nachfrage nach Chips, Speichern und Rechenzentren langsamer wachsen. Ob es so kommt, ist offen, denn eine freiwillige Verlangsamung müsste auch von anderen Firmen und Staaten mitgetragen werden.",
            ask: [{ label: "Wer profitiert von KI-Investitionen?", ref: "e:ai-capex" }, { label: "Warum entwickeln Firmen eigene Chips?", ref: "e:custom-chips" }] }
        ]}
      ],
      reaction: "Nasdaq +0,39 % am Freitag. In Frankfurt legten Infineon (+2,7 %) und Siltronic (+10,5 %) zu.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing", "e:software-ai-loans"],
      sources: [
        { title: "CNBC: AI stocks sink while cybersecurity shares rally on slowdown fears", url: "https://www.cnbc.com/2026/09/14/ai-stocks-slowdown-amodei-altman.html" },
        { title: "CNN Business: AI stocks slide after top industry CEOs call for slowdown", url: "https://www.cnn.com/2026/09/14/business/ai-stocks-slide-slowdown-development-amodei-altman-intl" },
        { title: "TheStreet: Musk, Altman back Amodei call to slow AI development", url: "https://www.thestreet.com/technology/musk-amodei-altman-ai-slowdown-chip-selloff" },
        { title: "Forbes: Amodei cites recursive self-improvement in September essay", url: "https://www.forbes.com/sites/johnwerner/2026/09/17/amodei-cites-recursive-self-improvement-in-september-essay/" },
        { title: "CNBC: Nvidia backing $105 billion in financing for OpenAI data center in Ohio", url: "https://www.cnbc.com/2026/08/17/nvidia-financing-open-ai-data-center-ohio.html" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "why-oil-up-geo": { tag: "fakt", story: 8, text: "Am Samstag griffen die Huthi nach eigenen Angaben Riad und Aramco-Anlagen in Yanbu an. Brent schloss am Freitag bei rund 103,9 $, den dritten Tag in Folge im Minus." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Zum heutigen Status der Straße von Hormus liegen in den gesichteten Quellen nur uneinheitliche Angaben vor. Der Krieg um den Iran und die Meerenge bleiben der Brennpunkt." },
    "brent-wti": { tag: "fakt", story: 7, text: "Brent (Nov) schloss am Freitag bei 103,87 $ (−0,9 %), den dritten Tag in Folge im Minus." },
    "oil-inflation": { tag: "fakt", story: 2, text: "Deutsche Erzeugerpreise August: Energie +8,3 %, Mineralölprodukte +40,5 %, leichtes Heizöl +65,3 %. Euroraum-Energieinflation laut Eurostat 14,3 %." },
    "gas-ttf": { tag: "fakt", story: 7, text: "Deutsche Gasspeicher waren am 16.09. zu rund 56 % gefüllt, vor einem Jahr zu 71 %. Die Bundesnetzagentur hält die Lage für stabil." },
    "energy-germany": { tag: "position", story: 7, text: "Der Speicherverband INES warnt vor möglichen Lücken an einzelnen Januartagen bei extremer Kälte, Bundesnetzagentur-Chef Müller hält die Versorgung für ausreichend." },
    "fed-hike": { tag: "fakt", story: 1, text: "Die Fed erhöhte am 16.09. einstimmig um 0,25 Punkte auf 3,75–4,00 %, die erste Erhöhung seit 2023. Der Median der Prognosen sieht bis Jahresende eine weitere." },
    "rates-stocks": { tag: "fakt", story: 4, text: "Am Freitag schlossen S&P 500 (+0,2 %) und Nasdaq (+0,4 %) leicht höher, der Dow (−0,2 %) leicht niedriger. Die 10-jährige US-Rendite stieg auf 5,00 %." },
    "ecb-hike": { tag: "fakt", story: 2, text: "Die EZB erhöhte am 10.09. den Einlagensatz von 2,25 % auf 2,50 %." },
    "central-banks-why": { tag: "fakt", story: 3, text: "Fed (16.09.), EZB (10.09.) und Bank of Japan (18.09., auf 1,25 %) haben erhöht. Die Bank of England ließ den Zins bei 3,75 %, drei Mitglieder stimmten für eine Erhöhung." },
    "inflation-what": { tag: "fakt", story: 2, text: "Die Inflation im Euroraum lag im August bei 3,2 %, die Kerninflation bei 2,4 %." },
    "inflation-expectations": { tag: "fakt", story: 1, text: "Die Universität Michigan meldet für September eine Inflationserwartung der US-Verbraucher von 4,6 % für das kommende Jahr und 3,4 % für fünf Jahre." },
    "yield-meaning": { tag: "fakt", story: 5, text: "US-10J ≈ 5,00 %, Bund-10J 3,50 % (Mehrjahreshoch 3,57 % am Dienstag)." },
    "yield-stocks": { tag: "position", story: 4, text: "Marktbeobachter nennen steigende Renditen als einen der Faktoren für den DAX-Rückgang um 1,6 % am Freitag." },
    "verfallstag-why": { tag: "fakt", story: 4, text: "Der Freitag, 18.09., war ein großer Verfallstag. Der DAX schloss 1,6 % tiefer." },
    "index-move": { tag: "fakt", story: 4, text: "DAX Freitag: −1,60 % auf 25.304 Punkte. Euro Stoxx 50 −1,37 %, S&P 500 +0,2 %, Nasdaq +0,4 %, Dow −0,2 %." },
    "why-markets-move": { tag: "position", story: 4, text: "Für den Freitag nennen Marktbeobachter Verfallstag, Nahost-Lage, Anleiherenditen und Inflationsrisiken. Der Anteil jedes Faktors lässt sich nicht genau bestimmen." },
    "ppi-what": { tag: "fakt", story: 2, text: "Erzeugerpreise August 2026: +4,6 % zum Vorjahr, +1,1 % zum Vormonat. Ohne Energie +3,1 %." },
    "companies-costs": { tag: "fakt", story: 4, text: "Volkswagen senkte die Prognose für die operative Umsatzrendite 2026 von 4,0–5,5 % auf bis zu 1 %, vor allem wegen einer Milliarden-Abschreibung auf Porsche." },
    "rente-basics": { tag: "position", story: 11, text: "Die Alterssicherungskommission empfiehlt, die abschlagsfreie Rente nach 45 Beitragsjahren abzuschaffen. Ein Gesetzentwurf liegt noch nicht vor, die Gesetzgebung soll bis Ende 2026 abgeschlossen sein." },
    "landtagswahl-why": { tag: "fakt", story: 10, text: "Heute, am 20.09., wählen Berlin und Mecklenburg-Vorpommern. Erste Prognosen kommen ab 18 Uhr." },
    "coalition-majority": { tag: "fakt", story: 10, text: "Nach der Umfrage der Forschungsgruppe Wahlen hätte in Berlin die Koalition aus CDU und SPD keine Mehrheit, in MV hätten SPD und Linke knapp keine Mehrheit." },
    "defence-order": { tag: "fakt", story: 12, text: "Beispiel: Rheinmetall-Auftrag über mehrere zehntausend 155-mm-Geschosse im niedrigen dreistelligen Mio.-€-Bereich, Lieferung bis 2027. Hensoldt: Entwicklungsvertrag über 15 Mio. € für Optarion." },
    "defence-stocks": { tag: "fakt", story: 12, text: "Die Rheinmetall-Aktie schloss am Freitag bei 1.023,80 €. Analysten bleiben laut finanzen.net überwiegend zuversichtlich, der Sektor kämpft mit Kursverlusten und verzögerten Lieferungen." },
    "ma-steps": { tag: "fakt", story: 13, text: "Beispiel: H.I.G. Capital will MISTRAS für 20,35 $ je Aktie übernehmen (Vereinbarung 18.09., Closing Ende 2026/Anfang 2027). Bei Uber/Delivery Hero läuft die Annahmefrist bis 5.11." },
    "ev-ebitda": { tag: "unbestaetigt", story: 13, text: "Beim MISTRAS-Deal (Unternehmenswert ≈ 866 Mio. $) ist ein EV/EBITDA-Multiple in den gesichteten Quellen nicht genannt." },
    "lbo": { tag: "einordnung", story: 13, text: "Um GFL Environmental konkurrieren zwei Investorengruppen, es wäre einer der größten LBOs des Jahres. Höhere Zinsen verteuern solche Kredite." },
    "take-private-why": { tag: "fakt", story: 13, text: "MISTRAS soll von H.I.G. Capital von der Börse genommen werden. Eine 40-tägige Go-Shop-Frist läuft bis 27.10.2026." },
    "deal-risks": { tag: "fakt", story: 13, text: "Beim MISTRAS-Deal fehlen noch die Zustimmung der Aktionäre und der Behörden. Der Go-Shop erlaubt konkurrierende Angebote." },
    "pe-money": { tag: "position", story: 13, text: "Um GFL Environmental konkurrieren zwei Investorengruppen (KKR/ECP/Blackstone gegen Brookfield/IFM). GFL wird mit rund 18 Mrd. $ bewertet, dazu rund 10 Mrd. $ Schulden." },
    "sofr-spread": { tag: "einordnung", story: 14, text: "Nach der Fed-Erhöhung steigt SOFR, und variabel verzinste Kredite werden für Schuldner teurer." },
    "private-credit-what": { tag: "fakt", story: 14, text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex nur noch mit rund 5 Cent je Dollar, Moody's sieht Loparex als ausgefallen." },
    "pc-rates": { tag: "position", story: 14, text: "Morgan Stanley rechnet im Basisfall mit Ausfallraten von rund 5 % im Private Credit, im Extremszenario 10–12 %, gegenüber 2–2,5 % im Durchschnitt." },
    "nonaccrual-default": { tag: "fakt", story: 14, text: "Non-Accruals bei OBDC laut Bericht 0,8 % des Fair Value, obwohl ein einzelner Fall wie Loparex stark abgeschrieben wurde." },
    "redemption-limits": { tag: "fakt", story: 14, text: "Im ersten Quartal lagen die Rücknahmewünsche bei Apollo bei 11,2 %, bei Ares bei 11,6 %. Beide begrenzten die Auszahlungen auf 5 %." },
    "ai-capex": { tag: "position", story: 15, text: "Nach dem Aufruf von KI-Chefs zur Verlangsamung fielen Chipwerte am 14.09. stark. Nvidia will bis zu 105 Mrd. $ für ein OpenAI-Rechenzentrum in Ohio finanzieren." },
    "eurusd-meaning": { tag: "fakt", story: 1, text: "EUR/USD lag am Freitag bei rund 1,146, der Dollar-Index stieg in der Woche um etwa 1,1 %." },
    "gold-why": { tag: "fakt", story: 6, text: "Gold schloss am Freitag bei 4.380 $ je Feinunze (+0,77 %), obwohl die US-Rendite auf 5,00 % stieg." },
    "bitcoin-what": { tag: "fakt", story: 6, text: "Bitcoin stieg auf über 81.000 $ (Samstag ≈ 81.350 $), nachdem er am Donnerstag bei rund 76.400 $ lag." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Notenbanken", type: "Fakt", story: 3,
      q: "Wie fiel die Abstimmung der Bank of England am 17. September aus?",
      options: [
        "Einstimmig für eine Zinssenkung",
        "6:3 für unveränderte 3,75 %, drei Mitglieder stimmten für eine Erhöhung",
        "5:4 für eine Erhöhung auf 4,0 %",
        "Einstimmig für eine Erhöhung um 0,5 Punkte"
      ],
      answer: 1,
      explain: "Die Bank of England ließ den Zins bei 3,75 %. Sechs Mitglieder stimmten fürs Halten, drei (Pill, Greene und Mann) für eine Erhöhung."
    },
    {
      topic: "Finanzmärkte", type: "Zusammenhang", story: 5,
      q: "Angenommen, US-Verbraucher erwarten dauerhaft höhere Inflation und die Fed signalisiert weitere Zinserhöhungen. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Kurse bestehender, niedriger verzinster Anleihen steigen",
        "Variabel verzinste Kredite werden billiger",
        "Der Dollar wird zwangsläufig schwächer",
        "Die Renditen von Staatsanleihen steigen tendenziell, die Kurse bestehender Anleihen sinken"
      ],
      answer: 3,
      explain: "Neue Anleihen zahlen dann mehr, alte, niedriger verzinste sind weniger wert: Kurs runter, Rendite hoch. Die US-10-Jahres-Rendite erreichte am Freitag 5,00 %."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 10,
      q: "Was zeigt die Umfrage der Forschungsgruppe Wahlen für die Berlin-Wahl?",
      options: [
        "Die bisherige Koalition aus CDU und SPD hätte keine Mehrheit, Dreierbündnisse kämen in Frage",
        "Die AfD liegt mit deutlichem Abstand vorn",
        "Die SPD ist mit rund 30 % stärkste Kraft",
        "CDU und SPD hätten eine klare Mehrheit"
      ],
      answer: 0,
      explain: "Linke 22 %, CDU 20 %, AfD 18 %, Grüne 15 %, SPD 12 %. Die bisherige Koalition hätte keine Mehrheit, Optionen sind Linke-Grüne-SPD oder CDU-Grüne-SPD."
    },
    {
      topic: "Geopolitik & Energie", type: "Zusammenhang", story: 8,
      q: "Angenommen, weitere Angriffe treffen saudische Ölanlagen am Roten Meer. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Der Ölpreis fällt, weil mehr Öl auf den Markt kommt",
        "Die Inflationssorgen nehmen ab",
        "Der Risikoaufschlag im Ölpreis steigt, der Ölpreis tendiert nach oben",
        "Zentralbanken senken sofort die Zinsen"
      ],
      answer: 2,
      explain: "Yanbu ist ein wichtiger Ausfuhrhafen, der Routen um die gestörte Straße von Hormus bietet. Sinkt die erwartete Liefermenge, steigt tendenziell der Preis und mit ihm der Inflationsdruck."
    },
    {
      topic: "Unternehmen", type: "Fakt", story: 4,
      q: "Auf wie viel Prozent vom Umsatz erwartet Volkswagen für 2026 nun die operative Umsatzrendite?",
      options: [
        "Weiterhin 4,0 bis 5,5 %",
        "Bis zu 1 %, vorher 4,0 bis 5,5 %",
        "Mehr als 8 %",
        "Sie soll sich gegenüber dem Vorjahr verdoppeln"
      ],
      answer: 1,
      explain: "VW senkte die Prognose wegen einer Abschreibung auf Porsche, schwacher China-Nachfrage und Umbaukosten. Die VW-Vorzüge verloren am Freitag 5,6 %."
    }
  ]
};
