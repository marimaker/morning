// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-21",
  dateLabel: "Montag, 21. September 2026",
  updatedLabel: "Recherchestand 21.09.2026",
  marketNote: "Diese Ausgabe erscheint früh am Montagmorgen, bevor die europäischen Börsen öffnen. Die Marktzahlen zeigen daher weiterhin den Handelsschluss vom Freitag, 18.09.2026, dem letzten vollständigen Handelstag. Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Sonntagnachmittag (20.09., US-Ostküstenzeit). Werte mit „≈” stammen aus Marktberichten und können je nach Quelle und Uhrzeit leicht abweichen.",

  top: [
    { text: "Bei den Landtagswahlen in Berlin und Mecklenburg-Vorpommern wurde am Sonntag Die Linke erstmals stärkste Kraft im Berliner Abgeordnetenhaus (25,7 %), während die CDU in Mecklenburg-Vorpommern mit 4,9 % erstmals in der Geschichte der Bundesrepublik an einer Landtags-Sperrklausel scheiterte. Das CDU-Präsidium stützte Kanzler Merz laut übereinstimmenden Berichten am Sonntagabend, er bleibt im Amt.", ref: "s:6" },
    { text: "In der Nacht zum Sonntag flog die Ukraine laut russischem Verteidigungsministerium den nach eigener Darstellung größten Drohnenangriff des Jahres auf Moskau, während dort noch die Stimmen der russischen Parlamentswahl ausgezählt wurden. Eine Ölraffinerie im Moskauer Stadtteil Kapotnja geriet in Brand, laut Gouverneur der Region Moskau starben drei Menschen.", ref: "s:9" },
    { text: "Nach dem Huthi-Angriffsversuch auf Riad und den Ölhafen Yanbu in der Nacht zum Samstag kündigte Saudi-Arabien laut Berichten eine „feste” und „sehr umfangreiche” Vergeltung an. Die East-West-Pipeline, die Ölexporte um die gestörte Straße von Hormus leitet, war zuvor bereits durch einen Drohnenangriff beschädigt worden.", ref: "s:8" },
    { text: "Die japanische Notenbank erhöhte am Freitag ihren Leitzins um 0,25 Punkte auf 1,25 % – den höchsten Stand seit 1995 – in einer knappen 7:2-Entscheidung. Die US-Rendite zehnjähriger Anleihen hielt sich bei rund 5,0 %, nachdem auch die Fed am Mittwoch zuvor erhöht hatte.", ref: "s:1" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.304", change: "−1,60 %", dir: "down", asof: "Schluss Fr 18.09.", story: 3,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. 25.304 Punkte sind ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: −1,60 % heißt, dass diese Unternehmen zusammen rund 1,6 % niedriger bewertet werden als am Vortag.",
      compare: [
        { label: "Woche", text: "−1,03 % gegenüber dem Vorfreitag (25.568,56 Punkte am 11.09.)" }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Freitag vor allem diese Faktoren:",
        items: [
          "Der große Verfallstag, an dem Futures und Optionen auf Aktienindizes auslaufen.",
          "Der Einbruch der VW-Vorzugsaktie nach der gesenkten Gewinnprognose, der auch BMW, Mercedes-Benz und Continental mit nach unten zog.",
          "Ein stärker als erwartet gestiegener deutscher Erzeugerpreisindex für August, die Nahost-Lage und steigende Anleiherenditen."
        ]
      },
      important: [
        { area: "Aktien", text: "Der DAX ist ein Stimmungsbild der großen deutschen Firmen, kein Maß für die gesamte Wirtschaft.", ref: "e:index-move" },
        { area: "Zinsen", text: "Steigende Renditen können Bewertungen von Aktien belasten.", ref: "e:yield-stocks" },
        { area: "Preise", text: "Erzeugerpreise zeigen, was Firmen für ihre Produkte am Markt erzielen, bevor sie bei Verbrauchern ankommen.", ref: "e:ppi-what" }
      ],
      source: { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.236", change: "−1,37 %", dir: "down", asof: "Schluss Fr 18.09.", story: 3,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. −1,37 % heißt: Diese Unternehmen wurden zusammen rund 1,4 % niedriger bewertet als am Vortag.",
      compare: [
        { label: "Abweichende Angabe", text: "Eine andere Quelle nennt 6.230,42 Punkte (−1,46 %) statt 6.236,20 Punkte (−1,37 %). Beide Quellen gelten als seriös, der Unterschied liegt vermutlich am Erhebungszeitpunkt." },
        { label: "Zum DAX", text: "Der DAX verlor mit −1,60 % etwas mehr." },
        { label: "Ab Montag", text: "Im Euro Stoxx 50 ersetzen laut Indexpflege Engie und Nokia die Titel Volkswagen und Wolters Kluwer." }
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
        { label: "Dow Jones", text: "−95,40 Punkte (−0,18 %) auf 51.682,64 — schlechteste Woche seit März 2026 (−1,7 %)" }
      ],
      moved: {
        intro: "Berichte zum Freitag:",
        items: [
          "Die US-Indizes schlossen gemischt zum Ende einer von der Fed-Entscheidung geprägten Woche.",
          "Die Rendite zehnjähriger US-Anleihen hielt sich bei rund 5,0 %, was Aktien laut Berichten zunehmend belastete."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen.", ref: "e:rates-stocks" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Friday, September 18", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-18-dow-sp-500-nasdaq-080504071.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.523", change: "+0,39 %", dir: "up", asof: "Schluss Fr 18.09.", story: 3,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie reagiert deshalb oft empfindlich auf Zinsänderungen und auf Nachrichten zur KI.",
      compare: [
        { label: "Punkte", text: "+104,25 Punkte auf 26.522,55" },
        { label: "Speicherchips", text: "Speicherchip-Werte legten am Freitag deutlich zu, u. a. SanDisk +10,99 %, Seagate +6,93 %, Micron +3,92 % (Meldung 14). In den Tagen danach kam es laut Bericht zu Gewinnmitnahmen." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Die Nasdaq schloss am Freitag leicht im Plus, gestützt von Chip- und Speicherwerten sowie optimistischen Aussagen von Nvidia-Chef Jensen Huang zu künftigen Chipabsätzen.",
          "Zugleich hielt sich die zehnjährige US-Rendite bei rund 5,0 %."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum fällt oder steigt die Nasdaq bei Zinsänderungen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "TheStreet: Stock market today – Dow, S&P 500, Nasdaq updates Sept. 18, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,148", change: "+0,08 %", dir: "up", asof: "Fr 18.09.", story: 1,
      means: "1 Euro kostet etwa 1,148 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Abweichende Angaben", text: "Quellen nennen für Freitag zwischen 1,1460 und 1,1486 Dollar je Euro." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Nach der Fed-Zinserhöhung vom Mittwoch und der Bank-of-Japan-Erhöhung vom Freitag bewegten sich mehrere große Währungen.",
          "Der japanische Yen schwächte sich trotz der BoJ-Erhöhung auf rund 156,6 je Dollar ab, dem schwächsten Stand seit 1995."
        ]
      },
      important: [
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" },
        { area: "Zinsen", text: "Die Fed und die Bank of Japan haben zuletzt erhöht, die EZB äußert sich zurückhaltender zu weiteren Schritten.", ref: "e:fed-hike" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,01 %", change: "+7 Basispunkte", dir: "up", asof: "Fr 18.09.", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,0 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Kurzfristige Laufzeiten", text: "Die 2- und 3-Jahres-Renditen stiegen laut Bericht stärker in Richtung 5 %, wodurch sich die Zinskurve zwischenzeitlich stärker anglich (\"bulged\")." },
        { label: "Fed-Leitzins", text: "3,75–4,00 % (Erhöhung am 16.09.)" }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Nach der Fed-Zinserhöhung vom Mittwoch fiel die Rendite zunächst, kletterte zum Wochenschluss aber wieder auf rund 5 %.",
          "Fed-Chef Warsh sprach laut Bericht davon, dass „zu viele Kategorien” noch Preissteigerungen über 3 % zeigten, was Markt-Wetten auf eine weitere Zinserhöhung im Oktober stützte."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren mit Aktien.", ref: "e:yield-stocks" },
        { area: "Unternehmensfinanzierung", text: "Kredite werden teurer, wenn der sichere Zins steigt.", ref: "e:fed-hike" },
        { area: "Private Credit", text: "Variable Zinsen steigen mit den Referenzzinsen.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Höhere US-Zinsen können den Dollar stützen.", ref: "e:eurusd-meaning" },
        { area: "Gold", text: "Gold zahlt keinen Zins und konkurriert mit Anleihen.", ref: "e:gold-why" }
      ],
      source: { title: "CNBC: Treasury yield climbs back to 5% after Fed rate decision", url: "https://www.cnbc.com/2026/09/16/treasury-yield-bond-market-fed-decision.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,52 %", change: "+0,04 Punkte", dir: "up", asof: "Fr 18.09.", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. 3,52 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,5 % pro Jahr.",
      compare: [
        { label: "Diese Woche", text: "Mehrjahreshoch von 3,57 % am Dienstag" }
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
        { label: "In Euro", text: "≈ 3.820 € je Feinunze bei einem Kurs von rund 0,873 €/$" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Gold stieg trotz eines starken Dollars und einer bei rund 5 % gehaltenen US-Rendite.",
          "Als Grund gilt die Nachfrage nach einem sicheren Hafen angesichts der Nahost-Eskalation. Das ist die Einschätzung der Quelle."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Statista: Goldpreis (London-Fixing)", url: "https://de.statista.com/statistik/daten/studie/196622/umfrage/preis-fuer-eine-unze-feingold-london-vormittagsfixing/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 103,9 $", change: "−0,9 %", dir: "down", asof: "Schluss Fr 18.09.", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 104 Dollar je Fass (159 Liter) sind rund 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "September bisher", text: "Nach dem Drohnenangriff auf die saudische East-West-Pipeline am 10./11.09. war Brent laut Berichten zeitweise auf rund 108–110 $ gestiegen." },
        { label: "WTI", text: "Die US-Ölsorte WTI fiel am Montag laut einem Bericht deutlicher auf rund 96 $, eine ungewöhnliche Abweichung von Brent." }
      ],
      moved: {
        intro: "Laut Berichten wirkten am Freitag diese Faktoren:",
        items: [
          "Saudi-Arabiens Ölexporte stiegen im September auf gut 4 Mio. Barrel pro Tag (August: 2,4 Mio.), weil mehr Öl über die Straße von Hormus statt über die beschädigte Pipeline nach Yanbu verschifft wurde.",
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
      label: "Bitcoin", value: "≈ 81.085 $", change: "≈ +4,0 % seit Fr-Morgen", dir: "up", asof: "So 20.09., 16:36 Uhr ET", story: 5, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.085 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Freitag, 8 Uhr ET", text: "≈ 77.980 $" },
        { label: "Samstag", text: "Ein Marktbericht vom Samstagnachmittag nannte bereits rund 81.350 $, der Kurs bewegte sich seither seitwärts." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: ["Kryptowerte legten übers Wochenende zu. Eine genaue Ursache für den Sprung nennen die gesichteten Quellen nicht eindeutig."]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Bitcoin Price", url: "https://www.coindesk.com/price/bitcoin" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 FED / BOJ / BOE */
    {
      id: "notenbanken-fed-boj", cats: ["economy", "markets"], when: "16.–19.09.2026 · Fed, BoJ, BoE",
      headline: "Fed hält an Zinserhöhungskurs fest, Bank of Japan erhöht auf höchsten Stand seit 1995, Bank of England hält Kurs",
      sec30: "Drei Tage nach der Fed-Zinserhöhung auf 3,75–4,00 % bleiben laut Berichten weitere Zinsschritte im Oktober im Gespräch. Die Bank of Japan erhöhte am Freitag ihren Leitzins um 0,25 Punkte auf 1,25 % – den höchsten Stand seit 1995 – in einer knappen 7:2-Entscheidung. Die Bank of England beließ ihren Leitzins bei 3,75 %. Die nächste Fed-Sitzung ist am 27./28. Oktober.",
      blocks: [
        { h: "Was hat die Fed beschlossen und gesagt?", items: [
          { tag: "fakt", text: "Der Offenmarktausschuss (FOMC) erhöhte den Leitzins am 16.09. einstimmig (12:0) um 0,25 Punkte auf 3,75–4,00 %, die erste Erhöhung seit 2023.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }, { label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }] },
          { tag: "position", text: "Fed-Chef Kevin Warsh sagte auf der Pressekonferenz laut Bericht sinngemäß, „zu viele” Preiskategorien zeigten weiterhin Steigerungen über 3 %. Laut Medienberichten erwarten 16 von 18 FOMC-Mitgliedern im Dot Plot bis Jahresende eine weitere Erhöhung.",
            ask: [{ label: "Was ist ein Dot Plot?", ref: "t:dot-plot" }] },
          { tag: "unbestaetigt", text: "Zum Termin der nächsten wichtigen US-Inflationszahl (Kern-PCE für August) nennen Quellen unterschiedliche Daten, teils den 25.09., teils den 30.09.2026. Welches Datum zutrifft, ließ sich aus den gesichteten Quellen nicht eindeutig klären." }
        ]},
        { h: "Was zeigen aktuelle US-Konjunkturdaten?", items: [
          { tag: "fakt", text: "Die wöchentlichen Erstanträge auf Arbeitslosenhilfe fielen in der Woche zum 12.09. um 10.000 auf 196.000, den niedrigsten Stand seit Mitte Juli und unter dem erwarteten Wert von 208.000." },
          { tag: "fakt", text: "Die Arbeitslosenquote lag im August unverändert bei 4,1 %, die Wirtschaft schuf 162.000 neue Stellen." }
        ]},
        { h: "Was hat die Bank of Japan beschlossen?", items: [
          { tag: "fakt", text: "Die Bank of Japan erhöhte am 18.09. ihren Leitzins um 0,25 Punkte auf 1,25 % – den höchsten Stand seit 1995. Die Entscheidung fiel knapp mit 7:2 Stimmen; zwei von Premierministerin Takaichi ernannte Mitglieder (Toichiro Asada, Ayano Sato) stimmten dagegen." },
          { tag: "fakt", text: "Der japanische Yen schwächte sich trotz der Erhöhung um rund 0,45 % auf etwa 156,64 je Dollar ab.",
            ask: [{ label: "Was bedeutet ein schwacher Euro/Yen für Importe?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Was hat die Bank of England beschlossen?", items: [
          { tag: "fakt", text: "Die Bank of England beließ ihren Leitzins am 16.09. mehrheitlich (6:3) bei 3,75 %; drei Mitglieder stimmten für eine Erhöhung auf 4 %. Die britische Inflation lag im August bei 3,1 % und soll nach Einschätzung der Notenbank weiter steigen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Mit Fed und Bank of Japan haben zwei der größten Notenbanken zuletzt erhöht, während die Bank of England abwartet. Das unterschiedliche Tempo kann Wechselkurse und Anleiherenditen weltweit beeinflussen.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }, { label: "Was bedeutet das für Aktien?", ref: "e:rates-stocks" }] }
        ]}
      ],
      reaction: "Die 10-jährige US-Rendite hielt sich am Freitag bei rund 5,01 %. S&P 500 (+0,17 %) und Nasdaq (+0,39 %) schlossen leicht höher, der Dow (−0,18 %) leicht niedriger.",
      terms: ["leitzins", "dot-plot", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:eurusd-meaning"],
      sources: [
        { title: "CNBC: Treasury yield climbs back to 5% after Fed rate decision", url: "https://www.cnbc.com/2026/09/16/treasury-yield-bond-market-fed-decision.html" },
        { title: "Bloomberg: Bank of Japan hikes interest rates in a split vote, yen drops", url: "https://www.bloomberg.com/news/newsletters/2026-09-18/bank-of-japan-hikes-interest-rates-in-a-split-vote-yen-drops" },
        { title: "CNBC: Japan raises rates to 31-year high", url: "https://www.cnbc.com/2026/09/18/japan-raises-rates-30-year-high-yen-jgb.html" },
        { title: "Bank of England: September 2026 Monetary Policy Summary", url: "https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/september-2026" },
        { title: "Bloomberg: US jobless claims fall to 196,000", url: "https://www.bloomberg.com/news/articles/2026-09-17/us-jobless-claims-fall-to-196-000-continuing-applications-drop" }
      ]
    },

    /* 2 EZB LAGARDE/SCHNABEL/NAGEL + ZEW/IFO/PMI */
    {
      id: "ezb-lagarde", cats: ["economy"], when: "Fr 18.09. Lagarde-Aussagen · ZEW September · ifo-Prognose 24.09.",
      headline: "EZB-Chefin Lagarde entscheidet weiter „von Sitzung zu Sitzung”, Ökonomen erwarten leicht steigenden ifo-Index",
      sec30: "EZB-Präsidentin Christine Lagarde bekräftigte am Freitag, der EZB-Rat werde von Sitzung zu Sitzung über die Zinsen entscheiden, bislang seien keine Zweitrundeneffekte bei der Inflation erkennbar. Die deutschen ZEW-Konjunkturerwartungen waren im September nur leicht auf 34,7 Punkte gestiegen, für den ifo-Geschäftsklimaindex (Veröffentlichung 24.09.) erwarten befragte Ökonomen einen Anstieg auf rund 89,0 Punkte. Die nächste EZB-Zinsentscheidung ist am 29. Oktober.",
      blocks: [
        { h: "Was sagen EZB-Vertreter?", items: [
          { tag: "position", text: "Lagarde sagte am Freitag laut Bericht sinngemäß, der EZB-Rat werde weiterhin von Sitzung zu Sitzung entscheiden. Bislang seien keine Zweitrundeneffekte bei der Inflation zu erkennen.",
            ask: [{ label: "Was bedeutet die EZB-Zinserhöhung für mich?", ref: "e:ecb-hike" }] },
          { tag: "fakt", text: "Bei der Zinsentscheidung vom 10.09. hatte die EZB den Einlagensatz auf 2,50 % erhöht und ihre Projektionen aktualisiert: Wachstum 0,9 % (2026), 1,4 % (2027), 1,5 % (2028); Inflation 3,0 % (2026), 2,5 % (2027), 2,1 % (2028) — Rückkehr zum Inflationsziel demnach erst gegen Ende 2027." },
          { tag: "position", text: "EZB-Direktorin Isabel Schnabel hatte sich vor der Zinsentscheidung für eine Erhöhung ausgesprochen und fordert laut Berichten angesichts hartnäckiger Inflation weitere Schritte. Bundesbank-Präsident Joachim Nagel äußerte sich am 11.09. dagegen zurückhaltender: Es sei „zu früh, um über Zinserhöhungen zu spekulieren”." }
        ]},
        { h: "Wie steht die Konjunktureinschätzung?", items: [
          { tag: "fakt", text: "Die ZEW-Konjunkturerwartungen für Deutschland stiegen im September um 0,5 auf 34,7 Punkte; Ökonomen hatten im Schnitt einen stärkeren Anstieg auf rund 40 Punkte erwartet. Die Lagebeurteilung verbesserte sich um 14,0 auf −47,1 Punkte, bleibt also negativ.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "fakt", text: "Der ZEW-Erwartungsindex für die gesamte Eurozone fiel dagegen um 5,6 Punkte auf 25,8. Als Risiken nennt ZEW-Präsident Achim Wambach laut Bericht teure Energie durch den Iran-Konflikt und Unsicherheit durch „hybride Angriffe”." },
          { tag: "fakt", text: "Der Einkaufsmanagerindex (PMI) für die Eurozone lag im August bei einem Industrie-Teilindex von 52,7 (höchster Stand seit Mai 2022), der Dienstleistungs-Teilindex fiel leicht auf 51,6. Die September-Werte (Flash-PMI) werden erst am 23.09. veröffentlicht." }
        ]},
        { h: "Was kommt als Nächstes?", items: [
          { tag: "unbestaetigt", text: "Für den ifo-Geschäftsklimaindex, der am 24.09. veröffentlicht wird, erwarten von Dow Jones Newswires befragte Ökonomen im Schnitt einen Anstieg auf rund 89,0 Punkte (August: 88,8). Das ist eine Prognose, keine Ist-Zahl." },
          { tag: "fakt", text: "Die nächste EZB-Zinsentscheidung ist am 29. Oktober." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gemischten Konjunktursignale — leicht bessere deutsche Erwartungen, schwächere Eurozone-Erwartungen, solide Industrie-PMI-Werte — erklären, warum die EZB sich laut Lagarde nicht auf einen festen Zinspfad festlegen will.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]}
      ],
      reaction: "Der Euro bewegte sich nach Lagardes Aussagen kaum und lag am Freitag bei rund 1,148 Dollar.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what", "e:companies-costs"],
      sources: [
        { title: "fxstreet.de: EZB-Chefin Lagarde – Wir werden von Sitzung zu Sitzung über die Zinsen entscheiden", url: "https://www.fxstreet.de.com/news/ezb-chefin-lagarde-wir-werden-von-sitzung-zu-sitzung-uber-die-zinsen-entscheiden-202609180821" },
        { title: "fxstreet.de: Nagel von der EZB – zu früh, um über Zinserhöhungen zu spekulieren", url: "https://www.fxstreet.de.com/news/nagel-von-der-ezb-zu-fruh-um-uber-zinserhohungen-zu-spekulieren-202609110640" },
        { title: "ad-hoc-news.de: Die ZEW-Konjunkturerwartungen für Deutschland haben sich im September …", url: "https://www.ad-hoc-news.de/wirtschaft/die-zew-konjunkturerwartungen-fuer-deutschland-haben-sich-im-september/70104478" },
        { title: "finanzen.net: Konjunktur im Blick – ifo-Geschäftsklimaindex und kleine Zentralbanken", url: "https://www.finanzen.net/nachricht/aktien/konjunktur-im-blick-ifo-geschaeftsklimaindex-und-kleine-zentralbanken-15941536" }
      ]
    },

    /* 3 FREITAG MARKTBERICHT */
    {
      id: "freitag-maerkte", cats: ["markets"], when: "Fr 18.09. Handelsschluss · Mo 21.09. Ausblick",
      headline: "DAX verliert am großen Verfallstag 1,6 %, VW senkt Gewinnprognose, deutsche Chipwerte legen zu",
      sec30: "Der DAX schloss 1,60 % tiefer bei 25.304 Punkten. In den USA war das Bild gemischt: S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,18 % (schlechteste Woche seit März 2026). Volkswagen senkte die Gewinnprognose nach einer Milliarden-Abschreibung auf Porsche, die Vorzugsaktie fiel um bis zu 5,6 %. Infineon, Siltronic und Aixtron legten dagegen nach Analysten-Aufstufungen zu.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "DAX −1,60 % auf 25.304,06 Punkte, Euro Stoxx 50 −1,37 % auf 6.236,20 Punkte. VW-Vorzüge verloren rund 5,6 %, BMW, Mercedes-Benz und Continental gaben bis zu 4,8 % nach, die Porsche-Aktie rund 3,3 %.",
            ask: [{ label: "Was bedeutet −1,6 %?", ref: "n:dax" }, { label: "Was ist der Euro Stoxx 50?", ref: "n:eurostoxx50" }] },
          { tag: "fakt", text: "In den USA schlossen S&P 500 bei 7.650,50 Punkten (+0,17 %), Nasdaq bei 26.522,55 (+0,39 %) und Dow bei 51.682,64 (−0,18 %, schlechteste Woche seit März 2026). Die Rendite zehnjähriger US-Anleihen hielt sich bei rund 5,01 %.",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Was ist bei Volkswagen los?", items: [
          { tag: "fakt", text: "VW senkte die Prognose für 2026: Die operative Umsatzrendite soll nur noch bis zu 1 % betragen, zuvor waren 4,0 bis 5,5 % erwartet. Berichte nennen Sonderbelastungen von rund 10 Mrd. €, vor allem auf die Tochter Porsche.",
            ask: [{ label: "Warum senken Firmen Prognosen?", ref: "e:companies-costs" }] },
          { tag: "position", text: "Berichte nennen als Gründe für die Porsche-Abschreibung geänderte langfristige Annahmen, US-Zölle und schwache Nachfrage nach Luxusautos in China, dazu Kosten für den Konzernumbau." }
        ]},
        { h: "Warum fiel der DAX, warum stiegen deutsche Chipwerte?", items: [
          { tag: "position", text: "Marktbeobachter nennen vor allem den großen Verfallstag, den VW-Einbruch, gestiegene deutsche Erzeugerpreise, die Nahost-Lage und steigende Anleiherenditen. Wie viel jeder Faktor beigetragen hat, lässt sich nicht genau sagen.",
            ask: [{ label: "Was ist der große Verfallstag?", ref: "t:verfallstag" }, { label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }] },
          { tag: "fakt", text: "Gegen den Trend legten Infineon nach einer Hochstufung durch Oddo BHF (+2,7 %) und Siltronic nach einer UBS-Kurszielanhebung auf 120 € deutlich zu; Aixtron gewann rund 4,5 % auf 35,37 €, gestützt von optimistischen Aussagen Nvidia-Chef Jensen Huangs zu künftigen Chipabsätzen." }
        ]},
        { h: "Was steht heute an?", items: [
          { tag: "fakt", text: "Für Montag sind unter anderem eine Rede von Chicago-Fed-Präsident Austan Goolsbee (12:30 Uhr), der Chicago Fed National Activity Index (14:30 Uhr) sowie Kapitalmarkttage von Novo Nordisk und Societe Generale terminiert. Im Euro Stoxx 50 ersetzen Engie und Nokia die Titel Volkswagen und Wolters Kluwer." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag sagt wenig über die langfristige Entwicklung. Wer in Indexfonds investiert, sieht solche Schwankungen regelmäßig. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die europäischen Börsen öffnen heute (Montag) wieder. Der Nahost-Konflikt (Meldungen 8, 9) und die Renditen (Meldung 4) bleiben Themen.",
      terms: ["verfallstag", "rendite", "erzeugerpreise"],
      followups: ["e:index-move", "e:yield-stocks", "e:companies-costs", "e:ppi-what"],
      sources: [
        { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" },
        { title: "BBN Times: Dow Jones today – blue chips slip 0.18% and post worst week since March", url: "https://www.bbntimes.com/global-economy/dow-jones-today-blue-chips-slip-0-18-to-51-682-64-and-post-worst-week-since-march" },
        { title: "onvista: Aktien im Fokus – Infineon und Siltronic nach Analystenlob begehrt", url: "https://www.onvista.de/news/2026/09-18-aktien-im-fokus-2-infineon-und-siltronic-nach-analystenlob-begehrt-0-10-26554867" },
        { title: "boerse.de: Tagesvorschau – Termine am 21. September 2026", url: "https://www.boerse.de/nachrichten/TAGESVORSCHAU-Termine-am-21-September-2026/38611365" }
      ]
    },

    /* 4 RENDITEN */
    {
      id: "renditen", cats: ["markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "US-Rendite hält sich bei rund 5 %, kurze Laufzeiten nähern sich an, Bund-Rendite bei 3,52 %",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen hielt sich am Freitag bei rund 5,0 %, nachdem sie nach der Fed-Zinserhöhung vom Mittwoch zunächst gefallen war. Zugleich stiegen die Renditen kürzerer Laufzeiten (2 und 3 Jahre) stärker in Richtung 5 %, wodurch sich die Zinskurve kurzzeitig annäherte. Die zehnjährige Bundesanleihe rentierte bei rund 3,52 %, nach einem Mehrjahreshoch von 3,57 % am Dienstag.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Die US-10-Jahres-Rendite hielt sich am Freitag laut Bericht bei rund 5,0–5,01 %. Die 2- und 3-Jahres-Renditen stiegen stärker in Richtung 5 %, sodass sich die Zinskurve stellenweise anglich.",
            ask: [{ label: "Was bedeutet eine Rendite von 5 %?", ref: "n:ust10" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Die deutsche 10-Jahres-Bundrendite lag am Freitag bei rund 3,52 %, ein Plus von 0,04 Punkten laut Trading Economics. Am Dienstag hatte sie mit 3,57 % ein Mehrjahreshoch erreicht.",
            ask: [{ label: "Was bedeutet das für den Bundeshaushalt?", ref: "e:debt-brake" }] }
        ]},
        { h: "Warum bewegen sich die Renditen?", items: [
          { tag: "position", text: "Berichte nennen als Hintergrund die Fed-Zinserhöhung vom Mittwoch sowie Aussagen von Fed-Chef Warsh, wonach „zu viele” Preiskategorien noch über 3 % lägen — was Markt-Wetten auf eine weitere Zinserhöhung im Oktober stützte.",
            ask: [{ label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }] },
          { tag: "fakt", text: "Auch die Bank of Japan erhöhte am Freitag ihren Leitzins auf 1,25 %, den höchsten Stand seit 1995 — ein weiterer Faktor für global unterschiedliche Zinsniveaus." }
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
        { title: "Wolf Street: Treasury yields of 2-years, 3-years spike toward 5%, 10-year holds at 5% — yield curve bulges", url: "https://wolfstreet.com/2026/09/19/treasury-yields-of-2-years-3-years-spike-toward-5-but-10-year-holds-at-5-yield-curve-bulges-thoughts-on-whats-brewing/" },
        { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" },
        { title: "CNBC: Treasury yield climbs back to 5% after Fed rate decision", url: "https://www.cnbc.com/2026/09/16/treasury-yield-bond-market-fed-decision.html" }
      ]
    },

    /* 5 GOLD / BITCOIN */
    {
      id: "gold-bitcoin", cats: ["markets"], when: "Fr 18.09. Gold · So 20.09. Bitcoin",
      headline: "Gold klettert trotz hoher Zinsen auf rund 4.380 Dollar, Bitcoin bleibt übers Wochenende über 81.000 Dollar",
      sec30: "Gold stieg am Freitag um 0,77 % auf rund 4.380 Dollar je Feinunze, obwohl die US-Rendite bei etwa 5 % blieb. Bitcoin legte zwischen Freitagmorgen (≈ 77.980 $) und dem Wochenende deutlich zu und hielt sich am Sonntagnachmittag bei rund 81.085 Dollar.",
      blocks: [
        { h: "Gold: Sicherer Hafen trotz hoher Zinsen", items: [
          { tag: "fakt", text: "Gold schloss am Freitag bei rund 4.379,82 Dollar je Feinunze, ein Plus von 0,77 %. In Euro entspricht das rund 3.820 € je Feinunze.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Eigentlich sprechen ein starker Dollar und hohe Anleiherenditen gegen einen steigenden Goldpreis, weil Gold keine Zinsen zahlt. Dass Gold trotzdem stieg, deuten Beobachter als Zeichen für anhaltende Nachfrage nach einem sicheren Hafen, etwa wegen der Nahost-Eskalation." }
        ]},
        { h: "Bitcoin: Stabil übers Wochenende", items: [
          { tag: "fakt", text: "Bitcoin lag am Freitag um 8 Uhr US-Ostküstenzeit bei rund 77.980 Dollar und am Sonntag um 16:36 Uhr Ostküstenzeit bei rund 81.085 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "unbestaetigt", text: "Ein Marktbericht vom Samstagnachmittag hatte bereits rund 81.350 Dollar genannt, der Kurs bewegte sich seither in etwa seitwärts. Eine eindeutige Ursache für den Anstieg übers Wochenende nennen die gesichteten Quellen nicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold und Bitcoin werden beide gelegentlich als „Absicherung” beschrieben, funktionieren aber unterschiedlich: Gold gilt traditionell als sicherer Hafen in Krisenzeiten, Bitcoin wird von vielen Anlegern eher wie eine riskante Wachstumsanlage behandelt.",
            ask: [{ label: "Was bedeutet ein starker Dollar?", ref: "e:eurusd-meaning" }] }
        ]}
      ],
      reaction: "Die US-Rendite hielt sich am Freitag bei rund 5,01 %, was Gold eigentlich hätte belasten sollen.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Statista: Goldpreis (London-Fixing)", url: "https://de.statista.com/statistik/daten/studie/196622/umfrage/preis-fuer-eine-unze-feingold-london-vormittagsfixing/" },
        { title: "CoinDesk: Bitcoin Price", url: "https://www.coindesk.com/price/bitcoin" },
        { title: "Kettner Edelmetalle: Goldpreis aktuell", url: "https://www.kettner-edelmetalle.de/wissen/goldpreis" }
      ]
    },

    /* 6 WAHLERGEBNISSE BERLIN/MV + MERZ BLEIBT */
    {
      id: "wahl-ergebnis", cats: ["germany"], when: "So 20.09. · Wahlabend und Nacht",
      headline: "Die Linke erstmals stärkste Kraft in Berlin, CDU verfehlt in Mecklenburg-Vorpommern die Sperrklausel, Merz bleibt Kanzler",
      sec30: "Bei den Landtagswahlen in Berlin und Mecklenburg-Vorpommern am Sonntag wurde Die Linke mit 25,7 % erstmals stärkste Kraft im Berliner Abgeordnetenhaus, die CDU kam auf 18,8 %. In Mecklenburg-Vorpommern wurde die AfD mit 38,2 % stärkste Kraft vor der SPD (35,5 %), die CDU verpasste mit 4,9 % erstmals in der Geschichte der Bundesrepublik als Partei den Einzug in ein Landesparlament. Das CDU-Präsidium stützte Kanzler Merz am Abend laut übereinstimmenden Berichten.",
      blocks: [
        { h: "Wie ist das Ergebnis in Berlin?", items: [
          { tag: "fakt", text: "Bei einer Wahlbeteiligung von 74,2 % wurde Die Linke mit 25,7 % (47 Sitze) erstmals stärkste Kraft im Berliner Abgeordnetenhaus. Es folgen CDU 18,8 % (34 Sitze), AfD 16,3 % (29 Sitze), Grüne 14,3 % (26 Sitze) und SPD 12,1 % (22 Sitze) — für die SPD das historisch schlechteste Ergebnis bei einer Abgeordnetenhauswahl." },
          { tag: "fakt", text: "CDU und SPD kommen zusammen auf keine Mehrheit mehr. Als rechnerische Optionen werden Linke-Grüne-SPD oder CDU-Grüne-SPD genannt." }
        ]},
        { h: "Wie ist das Ergebnis in Mecklenburg-Vorpommern?", items: [
          { tag: "fakt", text: "Bei einer Wahlbeteiligung von 78,1 % (+7,3 Punkte gegenüber 2021) wurde die AfD mit 38,2 % (32 Sitze) stärkste Kraft vor der SPD von Ministerpräsidentin Manuela Schwesig mit 35,5 % (29 Sitze). Die Linke kam auf 6,5 % (5 Sitze), die Grünen auf 5,7 % (5 Sitze)." },
          { tag: "fakt", text: "Die CDU kam auf 4,9 % und verpasste damit als Partei erstmals in der Geschichte der Bundesrepublik den Einzug in ein Landesparlament. AfD-Spitzenkandidat Leif-Erik Holm hat keine Koalitionsoption; SPD-Kandidatin Schwesig trat erfolgreich zur Wiederwahl an." }
        ]},
        { h: "Was geschah beim CDU-Präsidium?", items: [
          { tag: "fakt", text: "Das CDU-Präsidium traf sich am Sonntag um 17 Uhr, eine Stunde vor Schließung der Wahllokale. Die CDU-Zentrale hatte im Vorfeld eine „Vertrauensfrage” als Instrument des Präsidiums bestritten. Stellvertretende Parteichefin Karin Prien hatte vorab erklärt, man werde „zu keinem anderen Ergebnis kommen als heute” und stehe zum Kanzler." },
          { tag: "fakt", text: "Nach den ersten Hochrechnungen nannte Merz das Ergebnis in Mecklenburg-Vorpommern nach Berichten „ein Desaster”, räumte für Berlin fehlenden bundespolitischen Rückenwind ein und kündigte an, seinen Reformkurs als Kanzler und Parteichef fortzusetzen." },
          { tag: "unbestaetigt", text: "Zum genauen Wortlaut-Beschluss des Präsidiums nach Sitzungsende ließ sich in den gesichteten Quellen kein Primärzitat finden; mehrere Berichte beschreiben aber übereinstimmend, dass das Präsidium Merz am Abend Rückhalt gab. Am Montag warnte CDU-Generalsekretär Carsten Linnemann laut Bericht vor einem Mitgliederschwund von bis zu 50.000 Mitgliedern bis zum Ende der Legislaturperiode." }
        ]},
        { h: "Wie reagierten Parteien und Politiker?", items: [
          { tag: "position", text: "Ministerpräsidentin Manuela Schwesig (SPD) sagte laut ARD-Interview sinngemäß, sie sei „die Frau gegen Blau” gewesen, das sei gelungen; SPD-Chef Lars Klingbeil sprach von „Riesen-Respekt” vor ihrer Leistung, mahnte zugleich mehr Demut an: Man habe es nicht geschafft, Reformen so zu kommunizieren, „dass die Menschen sehen, dass sich was verändert”." },
          { tag: "position", text: "AfD-Bundesvorsitzende Alice Weidel bezeichnete ihre Partei laut ZDF-Interview als „die neue Volkspartei in Deutschland”, sprach von einem „Regierungsauftrag” und forderte den Rücktritt von Kanzler Merz." },
          { tag: "position", text: "CDU-Politiker Günter Krings wies eine Führungsdebatte um Merz laut Bericht zurück: Alternativen könne man nur diskutieren, „wenn jemand erklären kann, warum es mit ihm besser laufen würde”." }
        ]},
        { h: "Was wird für die Regierungsbildung diskutiert?", items: [
          { tag: "position", text: "In Berlin gilt eine Koalition aus Linke, Grünen und SPD oder aus CDU, Grünen und SPD als rechnerische Option. Eine Koalition mit der AfD schließen in beiden Ländern alle anderen im Parlament vertretenen Parteien aus.",
            ask: [{ label: "Warum sind Landtagswahlen bundespolitisch wichtig?", ref: "e:landtagswahl-why" }, { label: "Was bedeutet „keine Mehrheit” für eine Koalition?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Der Bundestag berät am Montag über die Folgen; der Bundeshaushalt 2027 und die Rentenreform (Meldung 7) bleiben zentrale Streitpunkte der Koalition.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "Wikipedia: Wahl zum Abgeordnetenhaus von Berlin 2026", url: "https://de.wikipedia.org/wiki/Wahl_zum_Abgeordnetenhaus_von_Berlin_2026" },
        { title: "Wikipedia: Landtagswahl in Mecklenburg-Vorpommern 2026", url: "https://de.wikipedia.org/wiki/Landtagswahl_in_Mecklenburg-Vorpommern_2026" },
        { title: "Tagesspiegel: Wahl in Mecklenburg-Vorpommern 2026 – AfD in Hochrechnungen vor Schwesigs SPD, CDU bei 4,9 Prozent", url: "https://www.tagesspiegel.de/politik/wahl-in-mecklenburg-vorpommern-2026-afd-in-hochrechnungen-vor-schwesigs-spd--cdu-bei-49-prozent-16058943.html" },
        { title: "ZDFheute: Merz äußert sich zu Wahlen in Berlin und Mecklenburg-Vorpommern", url: "https://www.zdfheute.de/politik/deutschland/merz-kanzler-wahlen-berlin-mecklenburg-vorpommern-statement-cdu-regierung-100.html" },
        { title: "t-online: Wahlen in MV und Berlin – Schwesig erteilt AfD Absage", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101444176/wahlen-in-mecklenburg-vorpommern-und-berlin-schwesig-erteilt-afd-absage.html" }
      ]
    },

    /* 7 SPRITPREIS-PAKET + RENTE + HAUSHALT */
    {
      id: "sprit-rente-haushalt", cats: ["germany"], when: "Fr 18.09. Spritpreis-Beschluss · laufend Rente/Haushalt 2027",
      headline: "Bund und Länder senken Energiesteuer auf Kraftstoffe um 14 Cent je Liter, Rentenreform und Haushalt 2027 in der Beratungsphase",
      sec30: "Bund und Länder haben sich auf eine befristete Senkung der Energiesteuer auf Benzin und Diesel um 14 Cent je Liter ab 1.10.2026 geeinigt, zusätzlich soll bis 1.1.2027 ein Spritpreisdeckel mit der Mineralölwirtschaft verhandelt werden. Bei der Rentenreform hält Arbeitsministerin Bas an weiterer Debatte fest, während Kanzler Merz auf vollständige Umsetzung drängt; der DGB ruft für den 26.9. zu Protesten auf. Der Bundeshaushalt 2027 befindet sich in der Ausschussberatung, die Bereinigungssitzung ist für den 12.11. angesetzt.",
      blocks: [
        { h: "Was wurde bei den Kraftstoffpreisen beschlossen?", items: [
          { tag: "fakt", text: "Bund und Länder einigten sich darauf, die Energiesteuer auf Benzin und Diesel ab 1.10.2026 um 14 Cent je Liter zu senken; inklusive Mehrwertsteuereffekt ergibt sich laut Bundesregierung eine Entlastung von rund 17 Cent je Liter, befristet bis Jahresende 2026. Das Gesamtvolumen wird mit rund 2,5 Mrd. € beziffert, die Länder tragen die Hälfte." },
          { tag: "fakt", text: "Zusätzlich soll bis zum 1.1.2027 ein befristeter Spritpreisdeckel nach Vorbild von Luxemburg und Belgien mit der Mineralölwirtschaft verhandelt werden." },
          { tag: "position", text: "Kanzler Merz sprach laut Bericht von einem „starken Signal für unser Land”. Als Hintergrund werden die militärischen Entwicklungen im Nahost-Konflikt genannt, die zuletzt die Ölpreise beeinflusst haben.",
            ask: [{ label: "Warum steigen die Ölpreise?", ref: "e:why-oil-up-geo" }] },
          { tag: "position", text: "Bundeswirtschaftsministerin Katherina Reiche (CDU) hatte zuvor eine Mehrwertsteuersenkung auf Kraftstoffe von 19 auf 7 Prozent gefordert; die SPD-Fraktion erhöhte parallel den Druck auf Ölkonzerne mit der Forderung nach einem temporären Preisdeckel." }
        ]},
        { h: "Was ist bei der Rente geplant?", items: [
          { tag: "fakt", text: "Die Alterssicherungskommission hatte der Bundesregierung im Juni 2026 insgesamt 33 Empfehlungen übergeben, darunter die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren (\"Rente mit 63\") und ein dynamisches Renteneintrittsalter.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Arbeitsministerin Bärbel Bas (SPD) hält den Kommissionsbericht laut Berichten weiterhin nicht für eine bindende politische Einigung und fordert mehr Debatte zu Langzeitbeschäftigten und Erwerbsminderungsrentnern. Merz (CDU) drängt dagegen auf die vollständige Umsetzung des Gesamtpakets und warnte laut Bericht vor einer Regierungskrise, sollte die Koalition einzelne Punkte herausbrechen." },
          { tag: "fakt", text: "Ein separates Vorhaben, die „Frühstart-Rente” (10 € monatlicher Staatszuschuss pro Kind in einen kapitalgedeckten Altersvorsorgevertrag), soll am 25.09. erstmals im Bundestag beraten werden, geplantes Inkrafttreten ist der 1.1.2027." }
        ]},
        { h: "Wer unterstützt, wer kritisiert?", items: [
          { tag: "position", text: "Der DGB (Vorsitzende Yasmin Fahimi) ruft für Samstag, den 26.09., zu einem bundesweiten Aktionstag in rund 15 Großstädten auf — gerichtet unter anderem gegen eine geplante Arbeitszeitreform (Umstellung von einer Tages- auf eine Wochenhöchstarbeitszeit) sowie gegen mögliche Einschnitte bei Kündigungsschutz, Krankengeld, Pflege und Rente. Fahimi fordert den Erhalt der Rente mit 63, eine höhere Mütterrente und höhere Bundeszuschüsse zur Rentenversicherung.",
            ask: [{ label: "Was bedeutet „keine Mehrheit” für eine Koalition?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie steht der Haushalt 2027?", items: [
          { tag: "fakt", text: "Finanzminister Klingbeil hatte den Entwurf (Ausgaben 555,4 Mrd. €, Nettokreditaufnahme im Kernhaushalt 118,7 Mrd. €) am 8.9. in den Bundestag eingebracht. Der Entwurf befindet sich nun in der Beratung im Haushaltsausschuss; die abschließende Bereinigungssitzung ist für den 12.11.2026 angesetzt, die Verabschiedung im Bundestag für den 27.11.2026 geplant.",
            ask: [{ label: "Wie entsteht der Bundeshaushalt?", ref: "e:haushalt-basics" }, { label: "Was ist die Schuldenbremse?", ref: "e:debt-brake" }] }
        ]}
      ],
      reaction: "Die Beratungen fallen in die Woche nach den Landtagswahlen in Berlin und Mecklenburg-Vorpommern (Meldung 6).",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:rente-basics", "e:why-oil-up-geo"],
      sources: [
        { title: "Bundesregierung: Entlastung bei den Spritpreisen – Steuersenkung für Diesel und Benzin", url: "https://www.bundesregierung.de/breg-de/aktuelles/entlastung-spritpreise-2453192" },
        { title: "Tagesspiegel: Regierung einigt sich auf Tankrabatt und Spritpreisdeckel", url: "https://www.tagesspiegel.de/politik/regierung-einigt-sich-auf-tankrabatt-und-spritpreisdeckel--das-steht-im-beschlusspapier-16071907.html" },
        { title: "DGB: Aktionstag Sozialstaat, 26.9.2026", url: "https://www.dgb.de/mitmachen/kampagnen/aktionstag-sozialstaat/" },
        { title: "Bundestag: Nettokreditaufnahme von 118,7 Milliarden Euro geplant", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw37-de-allgemeine-finanzdebatte-1194734" },
        { title: "ad-hoc-news.de: DGB-Proteste 26. September, Fahimi fordert Nachbesserungen bei Rente", url: "https://www.ad-hoc-news.de/wirtschaft/dgb-proteste-26-september-fahimi-fordert-nachbesserungen-bei-rente/70135035" }
      ]
    },

    /* 8 HUTHI RIAD/YANBU ESKALATION */
    {
      id: "huthi-eskalation", cats: ["world", "geo"], when: "Nacht Sa 19.09. Angriff · seither Vergeltungsdrohung",
      headline: "Saudi-Arabien kündigt nach Huthi-Angriffsversuch auf Riad und Yanbu „umfangreiche” Vergeltung an",
      sec30: "Nach dem Versuch der jemenitischen Huthi-Rebellen, in der Nacht zum Samstag Riad und den Ölhafen Yanbu anzugreifen, kündigte Saudi-Arabien laut Berichten eine „feste” und „sehr umfangreiche” Vergeltung an. Die Huthi erklärten, sie hätten Raketen, Marschflugkörper und Drohnen gegen „sensible Ziele” eingesetzt. Der Konflikt fällt in eine Phase, in der Saudi-Arabien wegen einer beschädigten Öl-Pipeline bereits mehr Öl über die Straße von Hormus statt über Yanbu verschifft.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Huthi-Militärsprecher Yahya Saree erklärte, die Rebellen hätten „zwei besondere Militäroperationen” mit ballistischen Raketen, Marschflugkörpern und Drohnen gegen Riad sowie eine Aramco-Anlage in Yanbu durchgeführt. Saudi-Arabien bestätigte, dass die Luftabwehr eine auf Riad gerichtete ballistische Rakete abgefangen habe.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Eine unabhängige Bestätigung von Treffern oder Schäden bei der Aramco-Anlage in Yanbu lag zunächst nicht vor, Aramco äußerte sich zunächst nicht dazu." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Saudi-Arabien kündigte laut Berichten eine „feste” und „sehr umfangreiche” Vergeltung an; die Koalition habe zuvor bereits rund 50 Vergeltungsschläge geflogen.",
            ask: [{ label: "Warum kann ein Konflikt den Ölpreis erhöhen?", ref: "e:why-oil-up-geo" }] },
          { tag: "einordnung", text: "Yanbu ist ein wichtiger Ölexporthafen und Endpunkt der East-West-Pipeline, die Routen um die gestörte Straße von Hormus bietet. Die Pipeline war bereits am 10./11.09. durch einen aus dem Irak gestarteten Drohnenangriff beschädigt worden; die Reparatur soll laut Berichten Wochen dauern." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beteiligt sind die jemenitischen, von Iran unterstützten Huthi-Rebellen und Saudi-Arabien. Im Hintergrund steht der seit Ende Februar 2026 laufende Krieg zwischen den USA/Israel und Iran." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der Huthi-Saudi-Konflikt eskalierte laut Berichten bereits seit Juli 2026, als die Huthi saudische Schiffe blockierten und die Straße von Bab-al-Mandab einnahmen. Ein zuvor erzielter US-Iran-Waffenstillstand war am 8.7.2026 kollabiert, nachdem Iran Angriffe auf Handelsschiffe in der Straße von Hormus begann." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "fakt", text: "Saudi-Arabiens Ölexporte stiegen im September laut Berichten auf gut 4 Mio. Barrel pro Tag (August: 2,4 Mio.), weil mehr Öl über die Straße von Hormus statt über die beschädigte Pipeline nach Yanbu verschifft wird. Brent notierte am Montagmorgen bei rund 103 Dollar, nachdem der Preis in der Vorwoche zeitweise auf über 108 Dollar gestiegen war.",
            ask: [{ label: "Was bedeutet ein Ölpreis um 104 $?", ref: "n:brent" }] }
        ]}
      ],
      reaction: "Brent notierte am Montagmorgen bei rund 103 Dollar (Meldung 15), stabil im Vergleich zum Freitagsschluss.",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:brent-wti", "e:oil-inflation", "e:energy-germany"],
      sources: [
        { title: "The Media Line: Houthis claim missile, drone attacks on Riyadh, Aramco facility in Yanbu", url: "https://themedialine.org/headlines/houthis-claim-missile-drone-attacks-on-riyadh-aramco-facility-in-yanbu/" },
        { title: "Al Jazeera: \"There will be a very sizeable Saudi response\" to Houthi attacks", url: "https://www.aljazeera.com/video/newsfeed/2026/9/20/there-will-be-a-very-sizeable-saudi-response-to-houthi-attacks" },
        { title: "Al Jazeera: Houthis report air strikes in Yemen after Saudi Arabia vows firm response", url: "https://www.aljazeera.com/news/2026/9/15/houthis-report-air-strikes-in-yemen-after-saudi-arabia-vows-firm-response" },
        { title: "Bloomberg: Latest oil market news and analysis for Sept. 21", url: "https://www.bloomberg.com/news/articles/2026-09-20/latest-oil-market-news-and-analysis-for-sept-21" },
        { title: "OilPrice.com: Drone strikes hit Saudi Arabia's vital East-West oil pipeline", url: "https://oilprice.com/Latest-Energy-News/World-News/Drone-Strikes-Hit-Saudi-Arabias-Vital-East-West-Oil-Pipeline.html" }
      ]
    },

    /* 9 UKRAINE MOSKAU + DUMA-WAHL + SANKTIONEN */
    {
      id: "ukraine-moskau-duma", cats: ["world", "geo"], when: "Nacht So 20.09. Angriff · 18.–20.09. Duma-Wahl",
      headline: "Rekord-Drohnenangriff auf Moskau während russischer Parlamentswahl, Trump-Sanktionsgesetz in Kraft",
      sec30: "In der Nacht zum Sonntag setzte die Ukraine laut russischem Verteidigungsministerium mehr als 1.000 Drohnen gegen Russland ein — den nach russischer Darstellung bisher größten nächtlichen Angriff des Jahres. Eine Moskauer Ölraffinerie geriet in Brand, drei Menschen starben laut Gouverneur der Region Moskau. Der Angriff fiel in die letzten Tage der russischen Duma-Wahl. Parallel unterzeichnete US-Präsident Trump am Freitag ein verschärftes Russland-Sanktionsgesetz.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Russlands Verteidigungsministerium meldete, in der Nacht zum Sonntag seien mehr als 1.000 ukrainische Drohnen eingesetzt worden; Angaben zur Zahl der abgefangenen Drohnen schwanken zwischen rund 1.100 und rund 1.900 je nach Quelle. Es sei der bisher größte nächtliche Angriff des Jahres 2026 gewesen." },
          { tag: "fakt", text: "Getroffen wurde die Gazpromneft-Raffinerie im Moskauer Stadtteil Kapotnja, die laut Bericht rund 40 % des Moskauer Treibstoffbedarfs deckt; der ukrainische Generalstab bestätigte den Angriff auf die Anlage. In der Region Moskau starben laut Gouverneur Andrei Vorobjov zunächst zwei, später ein dritter Mensch an seinen Verletzungen — insgesamt drei Tote nach jüngsten Berichten." },
          { tag: "position", text: "Moskaus Bürgermeister Sergej Sobjanin nannte den Angriff laut Bericht beispiellos und „eindeutig mit dem Ziel geplant, die Wahlen zu stören”; er sei aber erfolgreich abgewehrt worden. Präsident Putin warf der Ukraine vor, mit dem Angriff die Wahl beeinflussen zu wollen." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der Angriff fiel in die letzten Tage der russischen Staatsduma-Wahl (18.–20.09.) — der ersten seit Kriegsbeginn 2022 und laut Berichten der ersten, die auch in den von Russland annektierten ukrainischen Gebieten stattfand." },
          { tag: "unbestaetigt", text: "Nach einer vorläufigen Auszählung (Stand rund 41 % der Stimmen) lag Einiges Russland bei 57,4 %, vor KPRF (13,8 %), LDPR (9,1 %) und Neue Leute (7,9 %). Das amtliche Endergebnis lag zum Redaktionsschluss noch nicht vor." },
          { tag: "einordnung", text: "Angriffe auf russische Ölraffinerien zielen nach Einschätzung von Beobachtern auf die Treibstoffversorgung und Staatseinnahmen Russlands aus dem Energiegeschäft." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "US-Präsident Trump unterzeichnete am 18.09. den „Lindsey O. Graham Sanctioning Russia and Iran Act of 2026”, der vom Senat mit 86:11 und vom Repräsentantenhaus mit 262:159 verabschiedet wurde. Das Gesetz erlaubt Zölle von bis zu 100 % auf Waren von Ländern, die russisches Öl oder Gas kaufen oder Sanktionen umgehen, und richtet sich gegen Russlands Energie- und Verteidigungssektor, seine „Schattenflotte” an Tankern sowie Präsident Putin.",
            ask: [{ label: "Was ist ein Basispunkt (zum Vergleich Zölle vs. Zinsen)?", ref: "t:basispunkt" }] },
          { tag: "position", text: "Kreml-Sprecher Dmitri Peskow nannte das Sanktionsgesetz laut Bericht „unfreundlich” und erklärte, es werde „Bemühungen um eine friedliche Lösung in der Ukraine sicher erschweren”. Ministerpräsident Dmitri Medwedew erklärte, die Sanktionen hätten russische Hoffnungen auf bessere Beziehungen zur neuen US-Regierung beendet. Das russische Außenministerium nannte die Sanktionen „gefährlich” und „kurzsichtig” und behielt sich Vergeltungsmaßnahmen vor." },
          { tag: "position", text: "Russland kündigte laut Bericht an, seine Angriffe auf Kiew zu „intensivieren”." }
        ]},
        { h: "Wirtschaftliche und politische Auswirkungen", items: [
          { tag: "einordnung", text: "Das neue US-Sanktionsgesetz zielt darauf, Käufer russischen Öls und Gases über hohe Zölle unter Druck zu setzen. Wie stark sich das in der Praxis auswirkt, hängt von der Umsetzung ab, die in den gesichteten Quellen noch nicht im Detail beschrieben ist." }
        ]}
      ],
      reaction: "Der Angriff fällt in eine Woche mit ohnehin erhöhter geopolitischer Spannung durch die Huthi-Eskalation am Golf (Meldung 8).",
      terms: [],
      followups: ["e:central-banks-why"],
      sources: [
        { title: "Bloomberg: Moscow refinery hit as Russia reports largest 2026 drone attack", url: "https://www.bloomberg.com/news/articles/2026-09-20/moscow-refinery-hit-as-russia-reports-largest-2026-drone-attack" },
        { title: "The Moscow Times: 2 dead in Moscow region, drones hit oil refinery in Russian capital", url: "https://www.themoscowtimes.com/2026/09/20/2-dead-in-moscow-region-drones-hit-oil-refinery-in-russian-capital-a93753" },
        { title: "NBC News: Two dead in Moscow region as drones hit oil refinery in Russian capital", url: "https://www.nbcnews.com/world/russia/two-dead-moscow-region-drones-hit-oil-refinery-russian-capital-rcna598767" },
        { title: "US News: Trump signs Russia sanctions bill into law", url: "https://www.usnews.com/news/world/articles/2026-09-18/trump-signs-russia-sanctions-bill-into-law" },
        { title: "Foreign Policy: Russia's elections, State Duma results, Putin, democracy, Ukraine", url: "https://foreignpolicy.com/2026/09/18/russia-elections-state-duma-results-putin-democracy-ukraine/" }
      ]
    },

    /* 10 NATO BREUER + VERTEIDIGUNGSHAUSHALT */
    {
      id: "nato-breuer-budget", cats: ["defence", "world"], when: "Sa 19.09. Kopenhagen · Verteidigungshaushalt 2027",
      headline: "Generalinspekteur Breuer wird NATO-Militärausschuss-Chef, deutscher Verteidigungshaushalt 2027 soll auf 139,6 Mrd. Euro steigen",
      sec30: "Bei einem Treffen der Generalstabschefs der 32 NATO-Staaten in Kopenhagen wurde der deutsche Generalinspekteur Carsten Breuer am Samstag zum neuen Vorsitzenden des NATO-Militärausschusses gewählt, er setzte sich gegen die kanadische Generalstabschefin Jennie Carignan durch. Zugleich soll der deutsche Verteidigungshaushalt 2027 auf einen Rekordwert von 139,6 Mrd. Euro steigen, ein Plus von 31,4 Mrd. Euro gegenüber 2026.",
      blocks: [
        { h: "Was ist bei der NATO passiert?", items: [
          { tag: "fakt", text: "General Carsten Breuer wurde am 19.09. in Kopenhagen von den Generalstabschefs der 32 NATO-Mitgliedstaaten zum Vorsitzenden des NATO-Militärausschusses gewählt und setzte sich gegen die kanadische Generalstabschefin Jennie Carignan durch, die als erste Frau an der Spitze des Gremiums gestanden hätte. Er übernimmt das Amt im Juli 2027 für eine dreijährige Amtszeit und wird oberster militärischer Berater von NATO-Generalsekretär Mark Rutte." },
          { tag: "fakt", text: "Breuer (61) ist seit März 2023 Generalinspekteur der Bundeswehr. Es ist seit über 20 Jahren das erste Mal, dass ein deutscher General diesen NATO-Posten übernimmt." }
        ]},
        { h: "Was ist beim Verteidigungshaushalt geplant?", items: [
          { tag: "fakt", text: "Der deutsche Verteidigungshaushalt 2027 soll laut Planung auf 139,6 Mrd. Euro steigen: regulärer Wehretat (Einzelplan 14) 109,7 Mrd. Euro plus 29,9 Mrd. Euro aus dem Sondervermögen Bundeswehr — ein Plus von 31,4 Mrd. Euro gegenüber 2026 (82,7 plus 25,5 Mrd. Euro). Größter Einzelposten ist die militärische Beschaffung mit über 60 Mrd. Euro, davon 31,3 Mrd. Euro Investitionen.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 % des BIP?", ref: "e:nato-target" }] },
          { tag: "fakt", text: "Deutschland will die NATO-Zielquote von 3,5 % des BIP für Kernverteidigung bereits 2029 erreichen, sechs Jahre früher als die verbindliche Frist 2035. Für 2026 meldete Deutschland NATO-Verteidigungsausgaben von 124,7 Mrd. Euro (+25,5 % gegenüber Vorjahr)." },
          { tag: "fakt", text: "Nur fünf der 32 NATO-Staaten (Estland, Griechenland, Lettland, Litauen, Polen) erreichen 2026 bereits die neue 5-Prozent-Zielmarke aus 3,5 % Kernverteidigung und 1,5 % sicherheitsrelevanter Infrastruktur." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Die Wahl eines Deutschen an die Spitze des NATO-Militärausschusses fällt in eine Phase, in der Deutschland seine Verteidigungsausgaben deutlich ausweitet und der Bundeshaushalt 2027 entsprechend höhere Kreditaufnahme für Verteidigung vorsieht (Meldung 7)." }
        ]}
      ],
      reaction: "Der Rüstungssektor bleibt im Fokus, während die Aktien einzelner Hersteller wie Rheinmetall zuletzt schwächer tendierten (Meldung 11).",
      terms: [],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "hartpunkt.de: General Carsten Breuer zum nächsten Vorsitzenden des NATO-Militärausschusses gewählt", url: "https://www.hartpunkt.de/general-carsten-breuer-zum-naechten-vorsitzenden-des-nato-militaerausschusses-gewaehlt/" },
        { title: "t-online: Carsten Breuer – Generalinspekteur wird Chef von Nato-Militärausschuss", url: "https://www.t-online.de/nachrichten/ausland/internationale-politik/id_101443248/carsten-breuer-generalinspekteur-wird-chef-von-nato-militaerausschuss.html" },
        { title: "soldat-und-technik.de: Neuer Verteidigungsetat – 139,6 Mrd. Euro für 2027", url: "https://soldat-und-technik.de/2026/09/streitkraefte/49884/verteidigungsetat-2027/" },
        { title: "Tagesspiegel: Fast 125 Milliarden Euro – Deutschland meldet Nato-Verteidigungsausgaben in Rekordhöhe", url: "https://www.tagesspiegel.de/politik/fast-125-milliarden-euro-deutschland-meldet-nato-verteidigungsausgaben-in-rekordhohe-15814766.html" }
      ]
    },

    /* 11 RÜSTUNGSINDUSTRIE */
    {
      id: "ruestungsindustrie", cats: ["defence", "markets"], when: "Sept. 2026 · laufende Aufträge",
      headline: "Rheinmetall-Aktie bei rund 1.014 Euro, Hensoldt-Auftragsbestand erstmals über 10 Milliarden Euro",
      sec30: "Nach dem Großauftrag über Artilleriemunition vom 14.09. notierte die Rheinmetall-Aktie am Freitag bei rund 1.014 Euro, rund 8,9 % niedriger als vor einem Monat. Hensoldt meldete einen auf 10,36 Mrd. Euro verdoppelten Auftragsbestand, ThyssenKrupp Marine Systems einen 800-Mio.-Euro-Auftrag zur U-Boot-Modernisierung, und KNDS verschob seinen geplanten Börsengang.",
      blocks: [
        { h: "Wie steht die Rheinmetall-Aktie?", items: [
          { tag: "fakt", text: "Rheinmetall erhielt am 14.09. einen Auftrag über die Lieferung mehrerer Zehntausend 155-mm-Artilleriegranaten im niedrigen dreistelligen Millionen-Euro-Bereich, Lieferung bis 2027.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Die Aktie notierte am Freitag bei rund 1.014,30 Euro, auf Monatssicht rund 8,9 % im Minus, auf Jahressicht rund 46,5 % unter dem Stand von Anfang 2026. Rheinmetall hatte am 04.09. die Umsatzprognose 2026 gesenkt und vor einem deutlich negativen Free Cashflow gewarnt.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was melden andere Rüstungsfirmen?", items: [
          { tag: "fakt", text: "Hensoldt meldete einen im ersten Halbjahr 2026 auf 2,81 Mrd. Euro verdoppelten Auftragseingang und einen Rekord-Auftragsbestand von 10,36 Mrd. Euro; der Haushaltsausschuss billigte einen Rahmenvertrag über mehr als 750 Mio. Euro für Joint-Fire-Support-Teams, ein Ersteinzelauftrag liegt bei rund 100 Mio. Euro." },
          { tag: "fakt", text: "ThyssenKrupp Marine Systems (TKMS) erhielt einen 800-Mio.-Euro-Auftrag zur Modernisierung von sechs U-Booten des Typs 212A der deutschen Marine; der Auftragsbestand liegt bei 18,7 Mrd. Euro." },
          { tag: "fakt", text: "KNDS verschob laut Bericht seinen geplanten Börsengang; Banken raten den Eigentümerfamilien angesichts der schwachen Rheinmetall-Kursentwicklung zum Abwarten. Zuletzt kursierten Bewertungsvorstellungen von rund 12,5 Mrd. Euro, zuvor waren 15 bis 18 Mrd. Euro im Gespräch." }
        ]},
        { h: "Einordnung", items: [
          { tag: "einordnung", text: "Die Aufträge fallen in eine Phase steigender NATO-Verteidigungsausgaben und eines deutschen Bundeshaushalts 2027 mit deutlich höherem Wehretat (Meldung 10). Dass einzelne Aktien wie Rheinmetall dennoch schwächer tendieren, zeigt, dass Auftragslage und Aktienkurs nicht immer gleich laufen.",
            ask: [{ label: "Was ist im Haushalt 2027 geplant?", ref: "s:10" }] }
        ]}
      ],
      reaction: "Der DAX, in dem Rheinmetall notiert ist, verlor am Freitag insgesamt 1,6 % (Meldung 3).",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "suv.report: Rheinmetall erhält Großauftrag über 155-mm-Artilleriemunition", url: "https://suv.report/rheinmetall-erhaelt-grossauftrag-ueber-155-mm-artilleriemunition/" },
        { title: "boerse-express.com: Rheinmetall Aktie – KNDS als Belastungsprobe", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-knds-als-belastungsprobe-947700" },
        { title: "boerse-express.com: Hensoldt Aktie – Auftragsbestand überschreitet zehn Milliarden", url: "https://www.finanztrends.de/news/hensoldt-aktie-auftragsbestand-ueberschreitet-zehn-milliarden/" },
        { title: "thyssenkrupp.com: 800-Millionen-Euro-Großauftrag für TKMS", url: "https://www.thyssenkrupp.com/de/newsroom/pressemeldungen/pressedetailseite/800-millionen-euro-grossauftrag-fur-tkms:-umfassende-modernisierung-von-sechs-u-booten-des-typs-212a-der-deutschen-marine-299320" },
        { title: "finanzen.net: KNDS wirft Millionen RENK-Aktien auf den Markt", url: "https://www.finanzen.net/nachricht/aktien/grossplatzierung-sektor-unter-druck-knds-wirft-millionen-renk-aktien-auf-den-markt-rheinmetall-hensoldt-co-im-blick-00-15698112" }
      ]
    },

    /* 12 GFL / MISTRAS / DEALS */
    {
      id: "gfl-mistras", cats: ["deals", "pe"], when: "Fr 18.09. MISTRAS-Vereinbarung · weiter offen GFL-Bietergefecht",
      headline: "H.I.G. Capital übernimmt MISTRAS für 866 Mio. $, GFL-Bietergefecht zwischen KKR/Blackstone und Brookfield/IFM weiter offen",
      sec30: "H.I.G. Capital übernimmt den Prüfdienstleister MISTRAS Group für 20,35 Dollar je Aktie (Unternehmenswert rund 866 Mio. $), eine 40-tägige Go-Shop-Frist läuft bis 27.10. Um den kanadischen Entsorger GFL Environmental (Marktwert rund 18 Mrd. $ plus 10 Mrd. $ Schulden) konkurrieren weiterhin zwei Konsortien: KKR/Energy Capital Partners/Blackstone gegen Brookfield/IFM Investors — eine Entscheidung stand zum Wochenende noch aus.",
      deal: { value: "≈ 866 Mio. $ (Unternehmenswert)", buyer: "H.I.G. Capital", target: "MISTRAS Group", sector: "Industrielle Prüf- und Instandhaltungsdienstleistungen", type: "Take-private" },
      blocks: [
        { h: "MISTRAS: Was ist passiert?", items: [
          { tag: "fakt", text: "H.I.G. Capital und MISTRAS Group unterzeichneten am 18.09. eine endgültige Vereinbarung: 20,35 Dollar je Aktie in bar, Unternehmenswert rund 866 Mio. Dollar. Das entspricht einer Prämie von rund 2,6 % zum letzten Schlusskurs, 8 % zum 30-Tage- und 13 % zum 90-Tage-Durchschnittskurs.",
            ask: [{ label: "Was passiert bei einer Übernahme?", ref: "e:ma-steps" }, { label: "Warum nehmen Investoren Firmen von der Börse?", ref: "e:take-private-why" }] },
          { tag: "fakt", text: "Mit H.I.G. verbundene Parteien halten bereits Stimmrechtsvereinbarungen über rund 31 % der ausstehenden Aktien, der Vorstand stimmte einstimmig zu. Eine 40-tägige Go-Shop-Frist mit Berater Baird läuft bis zum 27.10.2026, in der MISTRAS aktiv nach besseren Angeboten suchen kann.",
            ask: [{ label: "Welche Risiken bestehen bis zum Closing?", ref: "e:deal-risks" }] },
          { tag: "unbestaetigt", text: "Zu Finanzierungsbanken oder einem EV/EBITDA-Multiple wird in den gesichteten Quellen nichts genannt.",
            ask: [{ label: "Was bedeutet Enterprise Value und EBITDA-Multiple?", ref: "e:ev-ebitda" }] }
        ]},
        { h: "GFL Environmental: Bietergefecht weiter offen", items: [
          { tag: "fakt", text: "Bei GFL Environmental prüft laut Bericht ein im Juli gebildetes Sonderkomitee die Gebote von KKR mit Energy Capital Partners und Blackstone auf der einen sowie Brookfield Asset Management mit IFM Investors auf der anderen Seite und könnte höhere Gebote fordern. GFL hat einen Marktwert von rund 18 Mrd. $ und rund 10 Mrd. $ Schulden.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] },
          { tag: "unbestaetigt", text: "Verbindliche Angebote sollten laut Berichten „in der dritten September-Woche” fällig sein; zum Wochenende lag noch keine Entscheidung vor. GFL-Chef Patrick Dovigi zeigte sich offen für ein Angebot „deutlich über” dem aktuellen Kurs und will nach eigenen Angaben 100 % seiner Anteile reinvestieren." }
        ]},
        { h: "Weitere Deals der Woche", items: [
          { tag: "fakt", text: "Der Versicherungsmakler Baldwin Group geht für 32,50 $ je Aktie (Unternehmenswert rund 7,7 Mrd. $) durch Sequence Holdings und das Family Office von Michael Dell (DFO Management) von der Börse, eine Prämie von rund 88 % zum unbeeinflussten Kurs vom 17.06. Das Closing wird für das erste Quartal 2027 erwartet, Mitarbeiter behalten eine Minderheitsbeteiligung." },
          { tag: "fakt", text: "Copart übernimmt die Online-Auktionsplattform ACV Auctions für 10,50 $ je Aktie (rund 1,9 Mrd. $, 45 % Prämie), laut Unternehmen Coparts bislang größter Zukauf." }
        ]}
      ],
      reaction: "Alle genannten Deals sind noch nicht abgeschlossen (\"pending\"), bis zum Closing können sich Details noch ändern.",
      terms: ["take-private", "lbo", "enterprise-value", "closing"],
      followups: ["e:ma-steps", "e:take-private-why", "e:lbo", "e:pe-money", "e:deal-risks", "e:ev-ebitda"],
      sources: [
        { title: "GlobeNewswire: MISTRAS Group enters into definitive agreement to be acquired by H.I.G. Capital for $20.35 per share in cash", url: "https://www.globenewswire.com/news-release/2026/09/18/3364639/12235/en/mistras-group-inc-enters-into-definitive-agreement-to-be-acquired-by-h-i-g-capital-for-20-35-per-share-in-cash.html" },
        { title: "InsideArbitrage: H.I.G. Capital to acquire MISTRAS Group in a $866 million cash deal", url: "https://www.insidearbitrage.com/2026/09/h-i-g-capital-to-acquire-mistras-group-in-a-866-million-cash-deal/" },
        { title: "Private Equity Wire: Blackstone and Brookfield lead rival PE consortia in GFL takeover race", url: "https://www.privateequitywire.co.uk/blackstone-and-brookfield-lead-rival-pe-consortia-in-gfl-takeover-race/" },
        { title: "InsideArbitrage: Sequence Holdings and Dell family office to take the Baldwin Group private for $7.70 billion", url: "https://www.insidearbitrage.com/2026/09/sequence-holdings-and-dell-family-office-to-take-the-baldwin-group-private-for-7-70-billion/" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit", cats: ["credit"], when: "Anfang Sept. Loparex · Fitch-Report Q2 2026",
      headline: "Blue Owl schreibt Loparex-Kredit auf 5 Cent ab, Fitch-Report zeigt 10,3 % Rücknahmequote bei BDCs",
      sec30: "Blue Owls Business Development Company OBDC hat einen Second-Lien-Kredit an den Folienhersteller Loparex auf rund 5 Cent je Dollar abgeschrieben, Moody's stuft Loparex als ausgefallen ein. Ein Fitch-Report zeigt: 10 von 16 beobachteten nicht börsengehandelten BDCs konnten im zweiten Quartal 2026 Rücknahmewünsche nicht vollständig bedienen, die durchschnittliche Rücknahmequote stieg auf 10,3 %, Anleger forderten insgesamt 15,6 Mrd. $ zurück.",
      blocks: [
        { h: "Was ist der Stand bei Loparex?", items: [
          { tag: "fakt", text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex nur noch mit rund 5 Cent je Dollar (Ende März noch rund 63 Cent, Ende 2025 rund 88 Cent). Ein First-Lien-Kredit steht bei rund 22 Cent. Vier Kredite mit zusammen 122,43 Mio. $ Wert zum Jahresende wurden bis Juni auf nur noch 8,34 Mio. $ abgeschrieben — ein Rückgang von rund 93 %.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Was ist ein First-Lien- bzw. Second-Lien-Kredit?", ref: "t:first-lien" }] },
          { tag: "fakt", text: "Loparex verpasste im Juni eine Zinszahlung auf die Second-Lien-Schulden und befindet sich in einer Forbearance-Vereinbarung (Stundung), die im September 2026 ausläuft. Moody's stuft Loparex als „in default” ein und nennt ein mögliches Chapter-11-Insolvenzrisiko." },
          { tag: "unbestaetigt", text: "Loparex versucht laut Bericht, rund 1,5 Mrd. $ von Private-Credit-Gebern zur Refinanzierung von First- und Second-Lien-Schulden zu beschaffen, die teils Anfang 2027 fällig werden. Ob dies gelingt, ist in den gesichteten Quellen offen." }
        ]},
        { h: "Was zeigt der Fitch-Report?", items: [
          { tag: "fakt", text: "Laut Fitch-Ratings-Report für das zweite Quartal 2026 konnten 10 von 16 beobachteten nicht börsengehandelten BDCs Rücknahmewünsche nicht vollständig bedienen. Die durchschnittliche Rücknahmequote stieg auf 10,3 % der Anteile (Q1: 9,7 %), mit einer Spanne von 1,3 % bis 38,1 %. Blue Owl Technology Income Corp (OTIC) hatte laut Bericht die höchste Rücknahmequote der Gruppe.",
            ask: [{ label: "Warum begrenzen Kreditfonds Rücknahmen?", ref: "e:redemption-limits" }] },
          { tag: "fakt", text: "Insgesamt forderten Anleger im zweiten Quartal 2026 laut Bericht 15,6 Mrd. $ an Rücknahmen bei den beobachteten BDCs." },
          { tag: "fakt", text: "Laut Fitch liegt die branchenweite Private-Credit-Ausfallrate seit April 2026 bei 6,0 bis 6,1 % (Stand Juli), mit 12,3 % bei kleinen Kreditnehmern (bis 25 Mio. $ EBITDA) gegenüber 3,9 % bei der nächsten Größenklasse.",
            ask: [{ label: "Woran erkennt man Stress in Private Credit?", ref: "e:nonaccrual-default" }] }
        ]},
        { h: "Was hat das mit den Zinsen zu tun?", items: [
          { tag: "einordnung", text: "Viele Private-Credit-Kredite sind variabel verzinst (SOFR plus Aufschlag). Nach der Fed-Erhöhung bleibt SOFR erhöht, und Schuldner zahlen mehr. Das erhöht die Erträge der Fonds, belastet aber schwächere Kreditnehmer zusätzlich.",
            ask: [{ label: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?", ref: "e:sofr-spread" }, { label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }] }
        ]}
      ],
      reaction: "Die US-Rendite (und damit SOFR-nahe Referenzzinsen) hielt sich am Freitag bei rund 5,01 % (Meldung 4).",
      terms: ["sofr", "first-lien", "second-lien", "default-rate", "non-accrual", "bdc", "nav"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Private Equity Wire: Blue Owl slashes Loparex loan valuation as bankruptcy risk mounts", url: "https://www.privateequitywire.co.uk/blue-owl-slashes-loparex-loan-valuation-as-bankruptcy-risk-mounts/" },
        { title: "Connect Money: Perpetual non-traded BDCs can absorb elevated redemptions – Fitch", url: "https://www.connectmoney.com/stories/perpetual-non-traded-bdcs-can-absorb-elevated-redemptions-fitch/" },
        { title: "pipelineroad.com: Blue Owl marks down Loparex loans after non-accrual move", url: "https://pipelineroad.com/news/20260907-blue-owl-marks-down-loparex-loans-after-non-accrual-move-and" }
      ]
    },

    /* 14 AI-SICHERHEIT / PLUGIN4SHELL / CHIPS */
    {
      id: "ai-sicherheit", cats: ["tech", "markets"], when: "12.–18.09.2026",
      headline: "OpenAI folgt Amodeis Sicherheitsvorstoß, Schwachstelle „Plugin4Shell” bei zwei KI-Coding-Tools weiter ungepatcht",
      sec30: "Nach Anthropic-Chef Dario Amodeis Essay zur Verlangsamung der KI-Entwicklung sagte OpenAI-Chef Sam Altman zu, ebenfalls unabhängige Sicherheitsprüfer mit weitreichendem internem Zugang einzusetzen. Bei der Sicherheitslücke „Plugin4Shell”, die mehrere KI-Coding-Werkzeuge betrifft, haben Anthropic und OpenAI ihre Tools gepatcht, GitHub Copilot ist laut Bericht weiterhin ungepatcht. Nach der Speicherchip-Rally vom Freitag kam es laut Bericht zu Gewinnmitnahmen bei einzelnen Werten.",
      blocks: [
        { h: "Was ist neu in der KI-Sicherheitsdebatte?", items: [
          { tag: "position", text: "Anthropic-Chef Dario Amodei veröffentlichte am 12.09. einen Essay mit einem Dreipunkte-Plan: eingebettete unabhängige Prüfer mit mitarbeiterähnlichem Zugang, Koordination zwischen KI-Firmen in Demokratien und langfristig ein internationales Abkommen unter Einbeziehung Chinas. Er warnte, ohne verbindliche Grenzen für Rechenleistung und Sicherheitsprüfungen drohten binnen 6 bis 12 Monaten autonome KI-Systeme, kritische Internet-Infrastruktur zu kompromittieren.",
            ask: [{ label: "Warum investieren Konzerne Milliarden in KI-Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "position", text: "OpenAI-Chef Sam Altman sagte laut Bericht zu, ebenfalls unabhängige Prüfer mit „mitarbeiterähnlichem Zugang” einzusetzen, und äußerte öffentlich, man könne „die Kontrolle über KI verlieren”. Altman trat zudem aus dem internen OpenAI-Sicherheitsausschuss zurück; das Gremium wird nun unabhängig von Zico Kolter (Carnegie Mellon) geleitet." },
          { tag: "fakt", text: "OpenAI-Politikchef Chris Lehane bestätigte am 15.09., dass OpenAI seit Wochen mit Anthropic und Google DeepMind über gemeinsame KI-Sicherheitsstandards verhandelt; eine verbindliche Einigung gibt es laut Bericht bislang nicht, auch wegen kartellrechtlicher Bedenken." },
          { tag: "position", text: "Ein öffentlicher Expertenbrief vom 18.09. fordert, dass eingebettete Sicherheitsprüfer wirklich unabhängig sein müssen — mit mehr Transparenz und Schutz vor Vergeltungsmaßnahmen der Firmen, bei denen sie eingebettet sind. Das ist Kritik an der Glaubwürdigkeit der Selbstverpflichtungen von Anthropic und OpenAI, keine Bewertung durch die Redaktion." }
        ]},
        { h: "Sicherheitslücke „Plugin4Shell” bei KI-Coding-Tools", items: [
          { tag: "fakt", text: "Die israelische Sicherheitsfirma AIR entdeckte die Lücke im Mai 2026 und meldete sie den Herstellern im Juni; die volle Offenlegung erfolgte am 17.09. Betroffen waren Claude Code, OpenAI Codex, GitHub Copilot und Gemini CLI." },
          { tag: "fakt", text: "Laut Berichten haben Anthropic (Claude Code, Version 2.1.179) und OpenAI (Codex, Version 0.146.0) die Lücke gepatcht. GitHub Copilot ist demnach weiterhin ungepatcht, Google hat Gemini CLI nicht gepatcht, sondern das Tool eingestellt." }
        ]},
        { h: "Wie reagierten die Chipmärkte?", items: [
          { tag: "fakt", text: "Speicherchip-Werte legten am 18.09. deutlich zu: SanDisk +10,99 %, Seagate +6,93 %, Western Digital +4,13 %, Micron +3,92 %. Der Philadelphia-Halbleiterindex (SOX) schloss 2,78 % höher.",
            ask: [{ label: "Warum entwickeln KI-Firmen eigene Chips?", ref: "e:custom-chips" }] },
          { tag: "unbestaetigt", text: "In den Tagen danach kam es laut Bericht zu Gewinnmitnahmen ohne neue konkrete Nachrichten: Seagate rund −4 %, SanDisk rund −3 %. Micron blieb wegen seiner DRAM/KI-Server-Position stabiler." },
          { tag: "fakt", text: "SanDisk bleibt mit einem Kursplus von rund 633 % seit Jahresbeginn 2026 Spitzenreiter im S&P 500, Micron liegt bei rund +256 %." }
        ]},
        { h: "Einordnung", items: [
          { tag: "einordnung", text: "Die vier großen Hyperscaler (Amazon, Alphabet, Meta, Microsoft) planen laut Marktschätzungen für 2026 zusammen rund 725 Mrd. $ Investitionen in KI-Infrastruktur, ein Anstieg von rund 77 % gegenüber 2025. Diese Summen erklären, warum schon Andeutungen einer Verlangsamung oder neue Sicherheitsvorgaben die Chipbranche bewegen können.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] }
        ]}
      ],
      reaction: "Die Nasdaq schloss am Freitag 0,39 % höher, gestützt von der Chip- und Speicherwerte-Rally (Meldung 3).",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:software-ai-loans"],
      sources: [
        { title: "Forbes: Amodei cites recursive self-improvement in September essay", url: "https://www.forbes.com/sites/johnwerner/2026/09/17/amodei-cites-recursive-self-improvement-in-september-essay/" },
        { title: "CNBC: Sam Altman spells out how and why the AI industry wants to slow down", url: "https://www.cnbc.com/2026/09/14/sam-altman-ai-slowdown-anthropic-amodei-musk.html" },
        { title: "TechCrunch: OpenAI, Anthropic, Google have been in talks on AI safety for weeks", url: "https://techcrunch.com/2026/09/15/openai-anthropic-google-have-been-in-talks-on-ai-safety-for-weeks/" },
        { title: "Help Net Security: Zero-click RCE vulnerability hit four major AI coding agents, two remain unpatched", url: "https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/" },
        { title: "Yahoo Finance / 24-7 Wall St.: Storage stocks slide as profit taking follows big run", url: "https://finance.yahoo.com/markets/stocks/articles/storage-stocks-slide-profit-taking-180550876.html" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gas", cats: ["energy", "germany"], when: "Mitte Sept. 2026 · Entscheidung LTO-Ausschreibung heute",
      headline: "Deutsche Gasspeicher nur zu 55,9 % gefüllt, Reiche entscheidet heute über neues Ausschreibungsinstrument",
      sec30: "Die deutschen Gasspeicher waren am 14. September nur zu rund 55,9 % gefüllt, fast 20 Punkte unter dem Vorjahreswert — der niedrigste Stand zu dieser Jahreszeit seit 15 Jahren laut Speicherverband INES. EU-weit liegen die Speicher mit rund 69 % ebenfalls unter dem Fünfjahresschnitt. Wirtschaftsministerin Katherina Reiche will nach Berichten heute entscheiden, ob und in welchem Umfang ein neues Ausschreibungsinstrument für Langzeit-Speicheroptionen genutzt wird.",
      blocks: [
        { h: "Wie ist die Lage bei Gas?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher waren am Gastag 14.09.2026 zu 55,92 % gefüllt, gegenüber 75,40 % vor einem Jahr — ein Rückgang um rund 19,5 Prozentpunkte und rund 21 Punkte unter dem September-Schnitt der vergangenen fünf Jahre.",
            ask: [{ label: "Warum ist Gas in Europa teuer?", ref: "e:gas-ttf" }] },
          { tag: "fakt", text: "EU-weit sind die Gasspeicher laut dem Branchenverband Gas Infrastructure Europe zu rund 69 % gefüllt (Stand 18.09.), etwa 16 Prozentpunkte unter dem Fünfjahresschnitt." },
          { tag: "position", text: "Der Speicherverband INES warnt laut Bericht, bei extremer Kälte könnten im Januar an einzelnen Tagen Versorgungslücken von bis zu 25 % auftreten; im ungünstigsten Fall könnten Speicher Anfang Februar 2027 nahezu leer sein." }
        ]},
        { h: "Warum ist Gas knapp?", items: [
          { tag: "position", text: "Berichte nennen als Grund, dass durch den Krieg um Iran und Störungen an der Straße von Hormus LNG-Lieferungen aus Katar und den Vereinigten Arabischen Emiraten den Markt nicht wie geplant erreicht haben. Europa konkurriert dadurch stärker mit Asien um verbleibende Lieferungen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was tut die Politik?", items: [
          { tag: "fakt", text: "Bundeswirtschaftsministerin Katherina Reiche führt laut Berichten Gespräche mit den bundeseigenen Unternehmen Uniper und SEFE über zusätzliche Einspeicherungen vor Beginn der Heizperiode. Unipers Speicher stehen dabei vergleichsweise besser da als der SEFE-Speicher in Rehden." },
          { tag: "fakt", text: "Reiches Ministerium will laut Bericht bis heute, 21.09., klären, ob und in welchem Umfang ein neues Ausschreibungsinstrument für „Long Term Options” ausgeweitet wird: Dabei reserviert der Betreiber Trading Hub Europe gegen Gebühr Gaslieferungen von Händlern, die die Mengen für einen bestimmten Zeitraum in ihren Speichern halten müssen." },
          { tag: "unbestaetigt", text: "Laut BDEW-Präsident Müller ist die gesetzliche Zielmarke von 80 % Füllstand zum 1. November nicht mehr erreichbar. Das ist eine Einschätzung des Branchenverbands, keine amtliche Feststellung der Bundesnetzagentur." }
        ]},
        { h: "Weitere Energiepolitik", items: [
          { tag: "fakt", text: "Der Bundestag berät am 24.09. in erster Lesung den Regierungsentwurf zu einer grundlegenden Reform des Erneuerbare-Energien-Gesetzes: zusätzliche Ausschreibungen für 12 GW Windenergie an Land, neue Regeln für kleine Solaranlagen und ein schrittweiser Übergang in die Direktvermarktung. Ab 1.1.2027 soll die feste Einspeisevergütung für neue Dachanlagen bis 100 kWp entfallen, da die EU-beihilferechtliche Genehmigung des aktuellen Modells Ende 2026 ausläuft." },
          { tag: "fakt", text: "Im neuen Kapazitätsmarkt wurden bei der ersten Auktion (Gebotsschluss 08.09.2026) 4,5 GW gesicherte Leistung vergeben, eine zweite Runde ist für später 2026 geplant. Zuschlagsnehmer müssen die Kapazität 15 Jahre bereitstellen; die Gesamtkosten des Mechanismus werden mit bis zu 35,2 Mrd. Euro beziffert, vor allem zur Förderung von Gaskraftwerken." }
        ]},
        { h: "Was zahlen Verbraucher aktuell für Strom?", items: [
          { tag: "unbestaetigt", text: "Laut Vergleichsportalen (Stand 20.09.) liegt der günstigste Stromtarif für einen Modellhaushalt bei rund 29,85 Cent/kWh, die Grundversorgung bei rund 40,37 Cent/kWh, Bestandskunden zahlen im Schnitt rund 31,1 Cent/kWh (−12,2 % gegenüber Vorjahr). Diese Zahlen stammen von Vergleichsportalen, nicht von einer amtlichen Statistikstelle." }
        ]}
      ],
      reaction: "Ein niedrigerer Speicherstand macht Deutschland empfindlicher für Preisschwankungen wie durch die Huthi-Angriffe am Golf (Meldung 8).",
      terms: ["ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:hormuz", "e:oil-inflation"],
      sources: [
        { title: "netz-trends.de: Gasspeicher bei 55,93 Prozent – 80-Prozent-Vorgabe zum 1. November laut Müller nicht mehr erreichbar", url: "https://www.netz-trends.de/gasspeicher-55-93-prozent-mueller-vorgabe-80-prozent-1-november-2026-nicht-erreichbar-16-september-2026/" },
        { title: "t-online: Gasspeicher – Reiche will Einspeisung mit neuem Modell ankurbeln", url: "https://www.t-online.de/finanzen/energie/id_101438394/gasspeicher-reiche-will-einspeisung-mit-neuem-modell-ankurbeln.html" },
        { title: "Bundestag: Grundlegende Reform des Erneuerbare-Energien-Gesetzes geplant", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw39-de-energie-stromsektor-1211294" },
        { title: "IWR: Strom – Neuer Kapazitätsmarkt kostet bis zu 35 Mrd. Euro, vor allem Gaskraftwerke werden gefördert", url: "https://www.iwr.de/news/strom-neuer-kapazitaetsmarkt-kostet-bis-zu-35-mrd-euro-vor-allem-gaskraftwerke-werden-gefoerdert-news39998" },
        { title: "stromauskunft.de: Aktuelle Strompreise am 20. September 2026", url: "https://www.stromauskunft.de/strompreise/" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "fed-hike": { tag: "fakt", story: 1, text: "Die Fed erhöhte am 16.09. einstimmig um 0,25 Punkte auf 3,75–4,00 %. Fed-Chef Warsh sprach laut Bericht davon, „zu viele” Preiskategorien lägen noch über 3 %, Markt-Wetten sehen eine weitere Erhöhung im Oktober." },
    "central-banks-why": { tag: "fakt", story: 1, text: "Fed und Bank of Japan haben zuletzt erhöht (BoJ am 18.09. auf 1,25 %, höchster Stand seit 1995), die Bank of England hielt ihren Zins bei 3,75 %, die EZB entscheidet laut Lagarde weiter von Sitzung zu Sitzung." },
    "ecb-hike": { tag: "position", story: 2, text: "Die EZB erhöhte am 10.09. den Einlagensatz auf 2,50 %. Lagarde sagte am 18.09., der Rat entscheide weiter von Sitzung zu Sitzung, es gebe bislang keine Zweitrundeneffekte." },
    "inflation-what": { tag: "fakt", story: 2, text: "Die ZEW-Konjunkturerwartungen für Deutschland stiegen im September nur leicht auf 34,7 Punkte, der Eurozone-Erwartungsindex fiel dagegen auf 25,8 Punkte." },
    "yield-meaning": { tag: "fakt", story: 4, text: "US-10J hielt sich am Freitag bei rund 5,0–5,01 %, Bund-10J bei rund 3,52 %. Kürzere US-Laufzeiten (2 und 3 Jahre) näherten sich der 5-%-Marke stärker an." },
    "yield-stocks": { tag: "position", story: 4, text: "Marktbeobachter nennen anhaltend hohe Renditen als einen der Faktoren für den DAX-Rückgang um 1,6 % am Freitag." },
    "rates-stocks": { tag: "fakt", story: 3, text: "Am Freitag schlossen S&P 500 (+0,17 %) und Nasdaq (+0,39 %) leicht höher, der Dow (−0,18 %) leicht niedriger, in der schlechtesten Woche seit März 2026." },
    "index-move": { tag: "fakt", story: 3, text: "DAX Freitag: −1,60 % auf 25.304 Punkte. Euro Stoxx 50 −1,37 % bzw. −1,46 % je nach Quelle, S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,18 %." },
    "companies-costs": { tag: "fakt", story: 3, text: "Volkswagen senkte die Prognose für die operative Umsatzrendite 2026 von 4,0–5,5 % auf bis zu 1 %, vor allem wegen einer Milliarden-Abschreibung auf Porsche." },
    "gold-why": { tag: "fakt", story: 5, text: "Gold schloss am Freitag bei rund 4.380 $ je Feinunze (+0,77 %), obwohl die US-Rendite bei rund 5,01 % blieb." },
    "bitcoin-what": { tag: "fakt", story: 5, text: "Bitcoin bewegte sich zwischen Freitagmorgen (≈ 77.980 $) und Sonntagnachmittag (≈ 81.085 $) deutlich nach oben und hielt dieses Niveau übers Wochenende." },
    "eurusd-meaning": { tag: "fakt", story: 1, text: "EUR/USD lag am Freitag bei rund 1,148. Der japanische Yen schwächte sich trotz der BoJ-Zinserhöhung auf rund 156,6 je Dollar ab." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Haushaltsentwurf 2027 (Ausgaben 555,4 Mrd. €) befindet sich in der Ausschussberatung; Bereinigungssitzung am 12.11., Verabschiedung im Bundestag für den 27.11.2026 geplant." },
    "debt-brake": { tag: "fakt", story: 7, text: "Verteidigungsausgaben über 1 % des BIP sind von der Schuldenbremse ausgenommen; der Verteidigungshaushalt 2027 soll auf 139,6 Mrd. Euro steigen (Meldung 10)." },
    "rente-basics": { tag: "position", story: 7, text: "Arbeitsministerin Bas hält am Bedarf weiterer Debatte fest, Kanzler Merz drängt auf schnelle Gesamtumsetzung. Der DGB ruft für den 26.09. zu bundesweiten Protesten in rund 15 Städten auf." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "Am 20.09. wurde Die Linke erstmals stärkste Kraft in Berlin (25,7 %), die CDU verpasste in Mecklenburg-Vorpommern mit 4,9 % erstmals als Partei den Einzug in ein Landesparlament." },
    "coalition-majority": { tag: "fakt", story: 6, text: "In Berlin haben CDU und SPD zusammen keine Mehrheit mehr; als Optionen gelten Linke-Grüne-SPD oder CDU-Grüne-SPD. In Mecklenburg-Vorpommern hat die AfD als stärkste Kraft keine Koalitionsoption." },
    "nato-target": { tag: "fakt", story: 10, text: "Deutschland will die NATO-Zielquote von 3,5 % des BIP bereits 2029 erreichen. Für 2026 meldete Deutschland NATO-Ausgaben von 124,7 Mrd. Euro, nur 5 von 32 NATO-Staaten erfüllen 2026 bereits die neue 5-%-Gesamtquote." },
    "defence-order": { tag: "fakt", story: 11, text: "Rheinmetall erhielt am 14.09. einen Artilleriemunitions-Auftrag, Hensoldt meldete einen auf 10,36 Mrd. Euro verdoppelten Auftragsbestand, TKMS einen 800-Mio.-Euro-Auftrag zur U-Boot-Modernisierung." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie notierte am Freitag bei rund 1.014 €, rund 8,9 % niedriger als vor einem Monat, nachdem der Konzern die Umsatzprognose gesenkt hatte." },
    "why-oil-up-geo": { tag: "fakt", story: 8, text: "In der Nacht zum Samstag versuchten die Huthi laut saudischer Darstellung, Riad und den Ölhafen Yanbu anzugreifen. Saudi-Arabien kündigte eine „umfangreiche” Vergeltung an." },
    "hormuz": { tag: "fakt", story: 8, text: "Saudi-Arabien verschifft nach der Beschädigung der East-West-Pipeline mehr Öl über die Straße von Hormus statt über Yanbu; die Exporte stiegen im September auf gut 4 Mio. Barrel pro Tag." },
    "brent-wti": { tag: "fakt", story: 15, text: "Brent notierte am Montagmorgen bei rund 103 $, nach einem zeitweiligen Anstieg auf über 108 $ in der Vorwoche. WTI fiel dagegen deutlicher auf rund 96 $." },
    "oil-inflation": { tag: "fakt", story: 15, text: "Kriegsbedingte LNG-Ausfälle am Persischen Golf verschärfen die europäische Gasknappheit zusätzlich zum erhöhten Ölpreis." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Deutsche Gasspeicher waren am 14.09. zu 55,92 % gefüllt (Vorjahr 75,40 %), EU-weit zu rund 69 %, rund 16 Punkte unter dem Fünfjahresschnitt." },
    "energy-germany": { tag: "fakt", story: 15, text: "Wirtschaftsministerin Reiche will heute über die Ausweitung eines neuen Ausschreibungsinstruments für Speicheroptionen entscheiden. Sie führt zudem Gespräche mit Uniper und SEFE über zusätzliche Einspeicherungen." },
    "ma-steps": { tag: "fakt", story: 12, text: "H.I.G. Capital und MISTRAS unterzeichneten am 18.09. eine endgültige Vereinbarung über 20,35 $ je Aktie, das Closing wird für Ende 2026/Anfang 2027 erwartet." },
    "ev-ebitda": { tag: "unbestaetigt", story: 12, text: "Beim MISTRAS-Deal (Unternehmenswert ≈ 866 Mio. $) ist ein EV/EBITDA-Multiple in den gesichteten Quellen nicht genannt." },
    "lbo": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental (≈ 18 Mrd. $ Marktwert, ≈ 10 Mrd. $ Schulden) konkurrieren weiterhin zwei Investorengruppen, eine Entscheidung stand zum Wochenende noch aus." },
    "take-private-why": { tag: "fakt", story: 12, text: "MISTRAS soll von H.I.G. Capital von der Börse genommen werden, eine 40-tägige Go-Shop-Frist läuft bis 27.10.2026." },
    "deal-risks": { tag: "fakt", story: 12, text: "Beim MISTRAS-Deal fehlen noch die Zustimmung der Aktionäre und der Behörden. Der Go-Shop erlaubt konkurrierende Angebote." },
    "pe-money": { tag: "unbestaetigt", story: 12, text: "Zu Finanzierung und Banken beim GFL-Bietergefecht (KKR/ECP/Blackstone gegen Brookfield/IFM) wird in den gesichteten Quellen nichts genannt." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex nur noch mit rund 5 Cent je Dollar, Moody's sieht Loparex als ausgefallen." },
    "sofr-spread": { tag: "einordnung", story: 13, text: "SOFR bleibt nach der Fed-Erhöhung erhöht, variabel verzinste Private-Credit-Kredite werden für Schuldner dadurch teurer." },
    "pc-rates": { tag: "fakt", story: 13, text: "Laut Fitch-Report konnten 10 von 16 beobachteten BDCs Rücknahmewünsche im zweiten Quartal 2026 nicht vollständig bedienen, die Quote stieg auf 10,3 %, Anleger forderten 15,6 Mrd. $ zurück." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Die branchenweite Private-Credit-Ausfallrate liegt laut Fitch seit April 2026 bei 6,0–6,1 %, bei kleinen Kreditnehmern sogar bei 12,3 %." },
    "redemption-limits": { tag: "fakt", story: 13, text: "10 von 16 beobachteten BDCs konnten Rücknahmewünsche im zweiten Quartal 2026 nicht vollständig bedienen, mit Quoten zwischen 1,3 % und 38,1 %." },
    "ai-capex": { tag: "position", story: 14, text: "Die vier großen Hyperscaler planen 2026 laut Schätzungen zusammen rund 725 Mrd. $ Investitionen in KI-Infrastruktur, ein Anstieg von rund 77 % gegenüber 2025." },
    "software-ai-loans": { tag: "position", story: 14, text: "OpenAI, Anthropic und Google DeepMind verhandeln seit Wochen über KI-Sicherheitsstandards; Altman sagte unabhängige Prüfer mit mitarbeiterähnlichem Zugang zu, ein Expertenbrief bezweifelt deren Unabhängigkeit." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Welche Partei wurde bei der Wahl zum Abgeordnetenhaus von Berlin am 20.09.2026 erstmals stärkste Kraft?",
      options: [
        "CDU",
        "Die Linke",
        "AfD",
        "SPD"
      ],
      answer: 1,
      explain: "Die Linke kam auf 25,7 % (47 Sitze) und wurde damit erstmals stärkste Kraft im Berliner Abgeordnetenhaus, vor CDU (18,8 %), AfD (16,3 %), Grünen (14,3 %) und SPD (12,1 %)."
    },
    {
      topic: "Notenbanken", type: "Fakt", story: 1,
      q: "Auf welchen Wert erhöhte die Bank of Japan am 18.09.2026 ihren Leitzins, und wie ist dieser Stand einzuordnen?",
      options: [
        "0,50 % — niedrigster Stand seit 2016",
        "0,75 % — unverändert zum Vormonat",
        "1,00 % — Rückkehr zum Stand von 2008",
        "1,25 % — höchster Stand seit 1995"
      ],
      answer: 3,
      explain: "Die Bank of Japan erhöhte den Leitzins um 0,25 Punkte auf 1,25 % — den höchsten Stand seit 1995 — in einer knappen 7:2-Abstimmung, bei der zwei von Premierministerin Takaichi ernannte Mitglieder dagegen stimmten."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 9,
      q: "Angenommen, weitere Staaten fürchten künftig US-Zölle von bis zu 100 % durch das neue Russland-Sanktionsgesetz. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Käuferstaaten russischen Öls und Gases meiden diese Lieferungen eher, um die Zölle zu vermeiden",
        "Der Rubel wertet dadurch automatisch auf",
        "Der Ölpreis fällt weltweit deutlich",
        "Russland exportiert automatisch mehr Öl in die EU"
      ],
      answer: 0,
      explain: "Das von Trump unterzeichnete Sanktionsgesetz erlaubt Zölle von bis zu 100 % auf Waren von Ländern, die russisches Öl oder Gas kaufen. Damit steigt der Anreiz für Drittstaaten, solche Käufe zu meiden."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Angenommen, die Rücknahmewünsche bei nicht börsengehandelten BDC-Fonds bleiben so hoch wie im zweiten Quartal 2026. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Fonds können alle Rücknahmewünsche weiterhin vollständig bedienen",
        "Mehr Fonds könnten Rücknahmen weiter begrenzen oder verzögern",
        "Die Kreditqualität der Fonds verbessert sich automatisch",
        "BDCs zahlen automatisch weniger Zinsen an Anleger aus"
      ],
      answer: 1,
      explain: "Laut Fitch-Report konnten im zweiten Quartal 2026 bereits 10 von 16 beobachteten BDCs Rücknahmewünsche nicht vollständig bedienen. Hält der Druck an, dürfte das häufiger vorkommen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Um wie viel Cent je Liter senkt der Bund ab dem 1.10.2026 die Energiesteuer auf Benzin und Diesel laut Beschluss von Bund und Ländern?",
      options: [
        "7 Cent",
        "20 Cent",
        "14 Cent",
        "30 Cent"
      ],
      answer: 2,
      explain: "Bund und Länder einigten sich auf eine Senkung der Energiesteuer um 14 Cent je Liter; inklusive Mehrwertsteuereffekt ergibt sich laut Bundesregierung eine Entlastung von rund 17 Cent je Liter, befristet bis Jahresende 2026."
    }
  ]
};
