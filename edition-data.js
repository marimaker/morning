// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-15",
  dateLabel: "Sonntag, 15. November 2026",
  updatedLabel: "Recherchestand 15.11.2026",
  marketNote: "Diese Ausgabe entsteht am Sonntag, 15.11.2026. Da Börsen am Wochenende geschlossen sind, zeigen DAX, Euro Stoxx 50, S&P 500, Nasdaq Composite, Dow Jones, EUR/USD, die US- und die Bund-Rendite sowie Gold und Brent jeweils den Schlusskurs vom Freitag, 13.11.2026 – nicht einen Zwischenstand. Die US-Erzeugerpreise für Oktober, die zum Redaktionsschluss der Vorausgabe noch ausstanden, sind inzwischen veröffentlicht. Nur Bitcoin handelt durchgehend und fiel übers Wochenende weiter, mit teils stark abweichenden Momentaufnahmen je nach Uhrzeit – das ist unten kenntlich gemacht. Beim Goldpreis weichen der Freitag-Vormittags-Zwischenstand (rund 3.914 $, +0,96 %) und der tatsächliche Schlusskurs (rund 3.882 $, +0,14 %) spürbar voneinander ab; beim europäischen Gaspreis TTF liegen die Quellenangaben fürs Wochenende zwischen rund 84 und 91 Euro je Megawattstunde, je nach Kontrakt und Erhebungsmethode. Berichte über Tanker-Zwischenfälle in der Straße von Hormus am 14.11. konnte Reuters nicht unabhängig bestätigen; solche Stellen sind als unbestätigt gekennzeichnet.",

  top: [
    { text: "Nach den US-Erzeugerpreisen für Oktober (+0,3 % zum Vormonat, +6,5 % im Jahresvergleich – der stärkste Anstieg seit November 2022) bekräftigen mehrere Fed-Vertreter wie John Williams, Austan Goolsbee und Mary Daly ihre Offenheit für eine Zinserhöhung im Dezember, während Finanzminister Scott Bessent öffentlich vor einem Zinsschritt mitten im energiepreisgetriebenen Schock warnt; auch Bundesbank-Chef Nagel nennt eine EZB-Erhöhung im Dezember „ziemlich offensichtlich”, eine Reuters-Umfrage sieht alle 71 befragten Ökonomen bei einer EZB-Anhebung auf 2,75 % im Dezember.", ref: "s:4" },
    { text: "Der Kreml bestätigt ein erstes trilaterales Treffen von Wladimir Putin, Xi Jinping und Donald Trump am 19.11. in Shenzhen, bei dem laut Kreml-Angaben auch eine Ukraine-Regelung besprochen werden soll; die Ukraine selbst ist nicht eingeladen. Parallel kündigt Bulgarien an, keine eigenen Waffenlieferungen und keine neue EU-Finanzierungsrunde für die Ukraine mehr zu unterstützen.", ref: "s:9" },
    { text: "Nvidia-Gründer Jensen Huang muss nach seinem Rücktritt als CEO am 1./2. bzw. 3.12. vor Kongressausschüssen aussagen; Singapur erklärt, es habe nicht genügend Beweise, um die als Spionin verdächtigte Geschäftsfrau strafrechtlich zu verfolgen, verbietet ihr aber die Wiedereinreise. Parallel ist Anthropics für den 19.11. geplanter Börsengang nach Berichten sechsfach überzeichnet.", ref: "s:14" },
    { text: "Der Haushaltsausschuss des Bundestags billigt den Bundeshaushalt 2027 mit 122,97 Mrd. Euro Nettokreditaufnahme; die im Koalitionsvertrag zugesagte Stromsteuersenkung bleibt ungeklärt und soll laut Berichten am 17.11. im Koalitionsausschuss verhandelt werden.", ref: "s:6" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "26.749,95 Pkt.", change: "-0,08 % ggü. Donnerstagsschluss (26.771,88 Pkt.)", dir: "down", asof: "Schluss Fr 13.11.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Freitagvormittag", text: "Am Freitagvormittag war der DAX noch um rund 0,1 % auf etwa 26.807 Punkte gestiegen; bis zum Handelsschluss drehte der Index ins Minus." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang bis Handelsschluss nennen Berichte:",
        items: [
          "Gewinnmitnahmen nach dem Rekordlauf der Vorwoche (Donnerstag-Tageshoch 27.001,67 Punkte) sowie eine zurückhaltende Positionierung vor dem Wochenende, in dem der DAX nicht gehandelt wird."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den US-Erzeugerpreisen und der Fed-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ariva.de: Roundup – Aktien Frankfurt Schluss: Dax trotzt Nasdaq-Schwäche", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-trotzt-nasdaq-schwaeche-12207030" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.386,86 Pkt.", change: "-0,19 % bzw. -12,12 Pkt. ggü. Donnerstagsschluss", dir: "down", asof: "Schluss Fr 13.11.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Woche", text: "Auch der Euro Stoxx 50 hatte am Freitagvormittag noch leicht im Plus gelegen, gab die Gewinne aber bis Handelsschluss ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Zurückhaltung vor dem Wochenende sowie die anhaltende Zinsdebatte bei Fed und EZB nach den US-Erzeugerpreisen am Nachmittag."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Aussagen von Bundesbank-Chef Nagel und der Reuters-Ökonomenumfrage zur EZB in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "finanzen.ch: Zurückhaltung in Europa – Euro Stoxx 50 fällt schlussendlich", url: "https://www.finanzen.ch/nachrichten/aktien/zurueckhaltung-in-europa-euro-stoxx-50-faellt-schlussendlich-1036762440" }
    },
    "sp500": {
      label: "S&P 500", value: "7.561,67 Pkt.", change: "-0,40 % bzw. -30,73 Pkt. ggü. Donnerstag", dir: "down", asof: "Schluss Fr 13.11.26", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Woche", text: "Trotz des Freitags-Rückgangs legte der S&P 500 auf Wochensicht um rund 2,5 % zu – die beste Wochenperformance seit Anfang August." }
      ],
      moved: {
        intro: "Als Hintergrund für den Freitags-Rückgang nennen Berichte:",
        items: [
          "Ein breiter Ausverkauf im Chipsektor: Die anfängliche Erleichterungsrally bei AMD und Broadcom nach Jensen Huangs Rücktritt drehte sich ins Gegenteil; zusätzlich belastete die Rendite zehnjähriger US-Anleihen nahe 5,14 % die Technologiewerte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die am Terminmarkt eingepreiste Wahrscheinlichkeit für eine Fed-Zinserhöhung im Dezember liegt laut Berichten bei rund 88 bis 91 %; mehr in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "The Motley Fool: Stock Market Today, Nov. 13 – AMD sinks 8.75% on sector-wide AI chip sell-off", url: "https://www.fool.com/coverage/stock-market-today/2026/11/13/stock-market-today-nov-13-amd-sinks-8-75-on-sector-ai-chip-sell-off-after-early-gains-reverse/" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.136,27 Pkt.", change: "-0,91 % bzw. -229,82 Pkt. ggü. Donnerstag", dir: "down", asof: "Schluss Fr 13.11.26", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Nvidia", text: "Die Nvidia-Aktie fiel am Freitag um weitere 2,01 % auf 162,85 Dollar und damit unter eine Marktkapitalisierung von 4 Billionen Dollar – erstmals seit Juli 2025." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "AMD, das am Donnerstag nach Huangs Rücktritt noch rund 5,9 % gestiegen war, fiel am Freitag um 8,75 % auf 534,06 Dollar; Broadcom gab um 4,76 % auf 347,01 Dollar nach – ein breiter Risiko-Abbau im KI-Chipsektor löste die anfängliche Erleichterungsrally ab."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Huangs Rücktritt, den Kongressanhörungen und Anthropics Börsengang in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Yahoo Finance: Stock market today – futures tick higher", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-futures-tick-133734502.html" }
    },
    "dow": {
      label: "Dow Jones", value: "52.347,55 Pkt.", change: "+0,10 % bzw. +50,45 Pkt. ggü. Donnerstag", dir: "up", asof: "Schluss Fr 13.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Woche", text: "Auf Wochensicht legte der Dow um rund 2,1 % zu, trotz der Schwäche bei Technologiewerten am Freitag." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die geringere Technologiegewichtung dämpfte beim Dow den Chipsektor-Ausverkauf, der S&P 500 und Nasdaq belastete."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zum geplanten Trump-Xi-Putin-Gipfel und zu Iran/Hormus in Meldung 8 und 9.", ref: "s:9" }
      ],
      source: { title: "247wallst.com: Money moved out of tech and into everything else today", url: "https://247wallst.com/cards/money-moved-out-of-tech-and-into-everything-else-today-the-gspc-market-bell-01m7bbjh5wpep4vmjk7jwpas8h" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1020", change: "-0,3 % ggü. Donnerstagabend (≈ 1,1055)", dir: "down", asof: "Schluss Fr 13.11.26", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,10 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "ECB-Referenzkurs", text: "Der tägliche EZB-Referenzkurs (fixiert um 14:15 Uhr, kein Schlusskurs) lag am Freitag mit rund 1,1052 etwas höher als der spätere Handelsschluss." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Euro-Schwäche:",
        items: [
          "Die anhaltende Zinsdebatte bei Fed und EZB sowie die nach den US-Erzeugerpreisen gestiegene US-Rendite stützten den Dollar stärker als den Euro (mehr in Meldung 4 und 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.", ref: "s:5" }
      ],
      source: { title: "tradingeconomics.com: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,14 %", change: "+0,04 Prozentpunkte ggü. Donnerstag; Tageshoch 5,17 %", dir: "up", asof: "Schluss Fr 13.11.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,14 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,14 % Zinsen pro Jahr.",
      compare: [
        { label: "Woche", text: "Die Rendite liegt rund 0,3 Prozentpunkte höher als eine Woche zuvor (rund 4,82 %) und damit auf einem Mehrmonatshoch." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg:",
        items: [
          "Die am 13.11. veröffentlichten US-Erzeugerpreise für Oktober (+6,5 % im Jahresvergleich, stärkster Anstieg seit November 2022) sowie mehrere hawkishe Fed-Äußerungen stützten die Erwartung einer Zinserhöhung im Dezember."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung im Dezember und den Fed-Äußerungen in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields rise as traders strengthen Fed rate hike bets", url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,37–3,38 %", change: "leicht höher ggü. Donnerstag; binnen einer Woche von rund 3,23 % gestiegen", dir: "up", asof: "Stand Fr 13.11.26, Nachmittag", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,14 % weiterhin deutlich über der Bund-Rendite." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Bundesbank-Chef Nagel nannte eine EZB-Zinserhöhung im Dezember „ziemlich offensichtlich” nötig; eine Reuters-Umfrage sieht alle 71 befragten Ökonomen bei einer Anhebung auf 2,75 % im Dezember (mehr in Meldung 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und zur Bank of England in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "FXStreet: ECB's Nagel sees another hike as second-round risks mount", url: "https://www.fxstreet.com/news/ecbs-nagel-sees-another-hike-as-second-round-risks-mount-202611131704" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.882 $", change: "+0,14 % ggü. Donnerstag (nach zwischenzeitlich +0,96 % auf rund 3.914 $ am Vormittag)", dir: "flat", asof: "Schluss Fr 13.11.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 3.880 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Freitagvormittag", text: "Am Freitagvormittag war Gold noch um 0,96 % auf rund 3.914 Dollar gestiegen; bis Handelsschluss gab der Preis einen Großteil dieser Gewinne wieder ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die gedämpfte Erholung:",
        items: [
          "Die anhaltende Aussicht auf Zinserhöhungen bei Fed und EZB im Dezember belastet den zinslosen Goldpreis grundsätzlich weiter, auch wenn einzelne Anleger das niedrigere Niveau der Vortage zu Käufen nutzten."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.", ref: "s:4" }
      ],
      source: { title: "tradingeconomics.com: Gold", url: "https://tradingeconomics.com/commodity/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 95,84 $", change: "+0,02 $ ggü. Donnerstag; zweite Woche in Folge rund -2,5 %", dir: "flat", asof: "Settlement Fr 13.11.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Der Preis liegt weiterhin deutlich über dem Niveau vor einem Jahr, als der Nahost-Konflikt eskalierte.",
      compare: [
        { label: "WTI", text: "Die US-Sorte WTI schloss bei 88,56 Dollar (-0,18 Dollar); US-Diesel fiel am Samstag erstmals seit zwei Monaten unter 6 Dollar je Gallone." }
      ],
      moved: {
        intro: "Als Hintergrund für die zweite wöchentliche Preissenkung in Folge nennen Berichte:",
        items: [
          "Ein globales Angebotsüberschuss-Bild der IEA trifft auf gemeldete, aber von Reuters nicht unabhängig bestätigte Tanker-Zwischenfälle in der Straße von Hormus am 14.11. (mehr in Meldung 8)."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu den Tanker-Zwischenfällen in der Straße von Hormus in Meldung 8.", ref: "s:8" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "EnergyNow: Oil prices fall for second straight week as global supply surplus emerges", url: "https://energynow.com/2026/11/oil-prices-fall-for-second-straight-week-as-global-supply-surplus-emerges-wti-closes-at-88-56-brent-at-95-84/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 62.000–67.000 $ (Tief in der Nacht zu Sonntag bei rund 62.000 $)", change: "weiterer Rückgang übers Wochenende, binnen einer Woche rund -13 bis -15 %", dir: "down", asof: "Stand So 15.11.26, Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet aktuell zwischen rund 62.000 und 67.000 US-Dollar, je nach Tageszeit sehr unterschiedlich. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Schwelle", text: "Bitcoin fiel in der Nacht zu Sonntag auf rund 62.000 Dollar – den niedrigsten Stand seit Mitte Juli 2026 – und erholte sich danach wieder auf rund 65.000 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Binnen 24 Stunden wurden laut Berichten mehr als 2 Mrd. Dollar an gehebelten Positionen zwangsliquidiert, mehr als 320.000 Trader waren betroffen. Der Kurs durchbrach zudem den gleitenden 200-Tage-Durchschnitt bei rund 73.000 Dollar, was nach Berichten zusätzliche Verkäufe auslöste."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "coindaro.com: Bitcoin price today – $61,946 low, liquidations", url: "https://www.coindaro.com/bitcoin-price-today-61946-low-liquidations/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 FREITAGSSCHLUSS */
    {
      id: "markets-freitagsschluss-dax-eurostoxx-11-13", cats: ["markets"], when: "Schluss Fr 13.11.2026",
      headline: "DAX und Euro Stoxx 50 schließen den Freitag leicht im Minus, nachdem sie am Vormittag noch im Plus gelegen hatten",
      sec30: "Der DAX schloss den Freitag bei 26.749,95 Punkten, ein Minus von 0,08 % gegenüber dem Donnerstagsschluss (26.771,88 Punkte) – am Vormittag hatte der Index noch rund 0,1 % im Plus gelegen. Der Euro Stoxx 50 gab bis Handelsschluss um 0,19 % auf 6.386,86 Punkte nach. Als Hintergrund nennen Berichte Gewinnmitnahmen nach dem Rekordlauf der Vorwoche sowie eine zurückhaltende Stimmung vor dem Wochenende, in dem weder DAX noch Euro Stoxx 50 gehandelt werden.",
      blocks: [
        { h: "Wie schlossen DAX und Euro Stoxx 50 am Freitag?", items: [
          { tag: "fakt", text: "Der DAX schloss bei 26.749,95 Punkten (-0,08 % bzw. -21,93 Punkte gegenüber Donnerstag). Der Euro Stoxx 50 gab um 0,19 % bzw. 12,12 Punkte auf 6.386,86 Punkte nach.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Wie unterscheidet sich das vom Vormittag?", items: [
          { tag: "fakt", text: "Am Freitagvormittag hatte der DAX noch bei rund 26.807 Punkten gelegen, ein Plus von etwa 0,1 % gegenüber Donnerstag; bis zum Handelsschluss drehte der Index ins Minus. Bereits am Donnerstag war der DAX erstmals über die Marke von 27.000 Punkten gestiegen (Tageshoch 27.001,67 Punkte), hatte die Gewinne aber schon bis Handelsschluss abgegeben." }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen den Rückgang auf Gewinnmitnahmen nach dem Rekordlauf der Vorwoche zurück; zugleich blieb die Zinsdebatte bei Fed und EZB im Fokus, nachdem am Nachmittag die US-Erzeugerpreise veröffentlicht wurden (mehr in Meldung 4 und 5).",
            ask: [{ label: "Mehr zu den US-Erzeugerpreisen", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das fürs Wochenende?", items: [
          { tag: "einordnung", text: "Weil DAX und Euro Stoxx 50 am Wochenende nicht gehandelt werden, bleibt der Freitagsschluss bis Montag der gültige Stand; neue Nachrichten – etwa zu Fed, EZB oder Geopolitik – können sich erst zum Handelsstart am Montag in den Kursen niederschlagen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Freitag werden in Meldung 2 behandelt, Gold/Bitcoin/Euro/Renditen in Meldung 3, die US-Erzeugerpreise und die Fed-Zinsdebatte in Meldung 4, die EZB-Zinsdebatte in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ariva.de: Roundup – Aktien Frankfurt Schluss: Dax trotzt Nasdaq-Schwäche", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-trotzt-nasdaq-schwaeche-12207030" },
        { title: "finanzen.ch: Zurückhaltung in Europa – Euro Stoxx 50 fällt schlussendlich", url: "https://www.finanzen.ch/nachrichten/aktien/zurueckhaltung-in-europa-euro-stoxx-50-faellt-schlussendlich-1036762440" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS FREITAG + CHIP-AUSVERKAUF */
    {
      id: "us-wallstreet-freitag-chipsektor-ausverkauf-11-13", cats: ["markets"], when: "Schluss Fr 13.11.2026",
      headline: "S&P 500 und Nasdaq schließen die Woche im Plus ab, trotz eines Ausverkaufs im Chipsektor am Freitag",
      sec30: "Der S&P 500 schloss den Freitag bei 7.561,67 Punkten (-0,40 %), die Nasdaq Composite bei 25.136,27 Punkten (-0,91 %); der Dow Jones legte dagegen um 0,10 % auf 52.347,55 Punkte zu. Auf Wochensicht stehen S&P 500 (+2,5 %), Nasdaq (+2,3 %) und Dow (+2,1 %) trotzdem im Plus – die beste Wochenperformance seit Anfang August. Belastet wurde der Freitagshandel laut Berichten vor allem von einem breiten Ausverkauf im Chipsektor: Die anfängliche Erleichterungsrally bei AMD und Broadcom nach Nvidia-Chef Jensen Huangs Rücktritt drehte sich ins Gegenteil, AMD fiel um 8,75 %, Broadcom um 4,76 %.",
      blocks: [
        { h: "Wie schlossen S&P 500, Nasdaq und Dow am Freitag – und auf Wochensicht?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 0,40 % (-30,73 Punkte) auf 7.561,67 Punkte, die Nasdaq Composite um 0,91 % (-229,82 Punkte) auf 25.136,27 Punkte. Der Dow Jones stieg dagegen um 0,10 % (+50,45 Punkte) auf 52.347,55 Punkte. Auf Wochensicht legten S&P 500 um rund 2,5 %, Nasdaq um rund 2,3 % und Dow um rund 2,1 % zu.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was geschah im Chipsektor?", items: [
          { tag: "fakt", text: "Die Nvidia-Aktie fiel am Freitag um weitere 2,01 % auf 162,85 Dollar und damit unter eine Marktkapitalisierung von 4 Billionen Dollar – erstmals seit Juli 2025. AMD, das am Donnerstag nach Huangs Rücktritt noch um rund 5,9 % gestiegen war, fiel am Freitag um 8,75 % auf 534,06 Dollar; Broadcom gab um 4,76 % auf 347,01 Dollar nach, auch der Chip-ETF iShares Semiconductor fiel um rund 4 %.",
            ask: [{ label: "Mehr zu Huangs Rücktritt und zur Chipbranche", ref: "s:14" }] }
        ]},
        { h: "Was nennen Berichte als Grund für die Kehrtwende?", items: [
          { tag: "einordnung", text: "Marktbeobachter beschrieben die anfängliche Rally bei AMD und Broadcom als Vertrauensverschiebung zu konkurrierenden Chipherstellern nach Huangs Rücktritt; am Freitag wich diese Erleichterung aber einem breiteren Risiko-Abbau im gesamten KI-Chipsektor. Bank of America stufte zudem Marvell im Zuge dessen eigener Übernahmepläne für Lumentum auf „Neutral” herab (mehr in Meldung 13).",
            ask: [{ label: "Mehr zum Marvell-Lumentum-Deal", ref: "s:13" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass S&P 500 und Nasdaq trotz des Freitags-Ausverkaufs auf Wochensicht deutlich im Plus liegen, zeigt, dass Huangs Rücktritt und die Zinsdebatte bislang eher zu Umschichtungen innerhalb der Technologiebranche als zu einem breiten Ausverkauf geführt haben. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX und Euro Stoxx 50 wird in Meldung 1 behandelt, Gold/Bitcoin/Euro/Renditen in Meldung 3, Huangs Rücktritt und Anthropics Börsengang in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "The Motley Fool: Stock Market Today, Nov. 13 – AMD sinks 8.75% on sector-wide AI chip sell-off", url: "https://www.fool.com/coverage/stock-market-today/2026/11/13/stock-market-today-nov-13-amd-sinks-8-75-on-sector-ai-chip-sell-off-after-early-gains-reverse/" },
        { title: "Yahoo Finance: Stock market today – futures tick higher", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-futures-tick-133734502.html" },
        { title: "247wallst.com: Money moved out of tech and into everything else today", url: "https://247wallst.com/cards/money-moved-out-of-tech-and-into-everything-else-today-the-gspc-market-bell-01m7bbjh5wpep4vmjk7jwpas8h" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN WOCHENENDE */
    {
      id: "gold-bitcoin-eurusd-renditen-wochenende-11-15", cats: ["markets"], when: "Stand So 15.11.2026, Vormittag",
      headline: "Bitcoin fällt übers Wochenende auf ein Vier-Monats-Tief, Gold gibt Freitags-Gewinne ab, US-Rendite schließt bei rund 5,14 Prozent",
      sec30: "Gold war am Freitagvormittag noch um 0,96 % auf rund 3.914 Dollar gestiegen, fiel aber bis Handelsschluss wieder zurück und schloss bei etwa 3.882 Dollar (+0,14 % ggü. Donnerstag). Bitcoin brach übers Wochenende weiter ein: In der Nacht zu Sonntag fiel der Kurs auf ein Vier-Monats-Tief von rund 62.000 Dollar, nachdem binnen 24 Stunden mehr als 2 Mrd. Dollar an gehebelten Positionen zwangsliquidiert wurden – mehr als 320.000 Trader waren betroffen. Der Euro gab gegenüber dem Dollar auf rund 1,1020 nach, die Rendite zehnjähriger US-Staatsanleihen schloss bei rund 5,14 % (Tageshoch 5,17 %).",
      blocks: [
        { h: "Wie entwickelte sich Gold am Freitag?", items: [
          { tag: "fakt", text: "Gold stieg am Freitagvormittag um 0,96 % auf etwa 3.914 Dollar je Feinunze, fiel aber bis Handelsschluss zurück und schloss bei rund 3.882 Dollar, ein Plus von nur noch 0,14 % gegenüber Donnerstag.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }] }
        ]},
        { h: "Wie stark ist Bitcoin übers Wochenende gefallen?", items: [
          { tag: "fakt", text: "Bitcoin fiel am Samstag zunächst unter 66.000 Dollar und in der Nacht zu Sonntag auf ein Tief von rund 62.000 Dollar – den niedrigsten Stand seit Mitte Juli 2026 – bevor sich der Kurs wieder auf rund 65.000 Dollar erholte. Binnen 24 Stunden wurden laut Berichten mehr als 2 Mrd. Dollar an gehebelten Positionen zwangsliquidiert, mehr als 320.000 Trader waren betroffen, rund 87 % davon Long-Positionen. Auf Wochensicht verlor Bitcoin damit rund 13 bis 15 %.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro schloss bei rund 1,1020 Dollar, schwächer als der Donnerstagsschluss von etwa 1,1055 Dollar. Die Rendite zehnjähriger US-Staatsanleihen schloss bei rund 5,14 % (Tageshoch 5,17 %), rund 0,3 Prozentpunkte höher als eine Woche zuvor; die Rendite zehnjähriger Bundesanleihen stieg auf rund 3,37 bis 3,38 %.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl Gold als auch Bitcoin unter Druck stehen, während die US-Rendite auf einem Mehrmonatshoch verharrt, passt zum Muster steigender Zinserwartungen: Wird eine Zinserhöhung wahrscheinlicher, werden zinslose Anlagen wie Gold und Bitcoin tendenziell weniger gefragt. Bei Bitcoin kommt laut Berichten eine technische Komponente hinzu – der Kurs durchbrach den gleitenden 200-Tage-Durchschnitt bei rund 73.000 Dollar, was zusätzliche Verkäufe ausgelöst haben soll. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX/Euro Stoxx 50 in Meldung 1, US-Schlusskurse in Meldung 2, die US-Erzeugerpreise und die Fed-Zinsdebatte in Meldung 4, die EZB-Zinsdebatte in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "tradingeconomics.com: Gold", url: "https://tradingeconomics.com/commodity/gold" },
        { title: "coindaro.com: Bitcoin price today – $61,946 low, liquidations", url: "https://www.coindaro.com/bitcoin-price-today-61946-low-liquidations/" },
        { title: "tokenpost.com: Bitcoin liquidation wave tops $2 billion", url: "https://www.tokenpost.com/news/investing/57662" },
        { title: "CNBC: Treasury yields rise as traders strengthen Fed rate hike bets", url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html" }
      ]
    },
    /* 4 WIRTSCHAFT: US-PPI/FED */
    {
      id: "us-ppi-fed-zinsdebatte-dezember-11-13", cats: ["economy"], when: "PPI-Veröffentlichung Fr 13.11. · FOMC-Sitzung 8./9.12.2026",
      headline: "US-Erzeugerpreise steigen im Jahresvergleich so stark wie seit 2022 nicht mehr, mehrere Fed-Vertreter bekräftigen Offenheit für Dezember-Zinserhöhung",
      sec30: "Die US-Erzeugerpreise (PPI) für Oktober stiegen laut Arbeitsministerium um 0,3 % gegenüber dem Vormonat (erwartet: 0,4 %) und um 6,5 % im Jahresvergleich – der stärkste Anstieg seit November 2022. Mehrere Fed-Vertreter wie New-York-Fed-Chef John Williams, Chicago-Fed-Chef Austan Goolsbee und San-Francisco-Fed-Chefin Mary Daly bekräftigten danach ihre Einschätzung, dass weitere Zinsschritte nötig seien; Finanzminister Scott Bessent warnte dagegen öffentlich davor, wegen eines energiepreisgetriebenen Schocks „zu stark” zu erhöhen. Am Terminmarkt gilt eine Zinserhöhung im Dezember weiterhin als nahezu sicher, die FOMC-Sitzung findet am 8./9.12.2026 statt.",
      blocks: [
        { h: "Was zeigten die US-Erzeugerpreise für Oktober?", items: [
          { tag: "fakt", text: "Das Arbeitsministerium (BLS) veröffentlichte den Bericht am 13.11.2026. Die Gesamtrate der Erzeugerpreise stieg um 0,3 % gegenüber dem Vormonat (erwartet: 0,4 %), die Kernrate (ohne Lebensmittel und Energie) ebenfalls um 0,3 % (wie erwartet). Im Jahresvergleich stiegen die Erzeugerpreise um 6,5 % – der stärkste Anstieg seit November 2022; bei den Waren betrug der Jahresanstieg sogar 10,2 %, der größte Zwölfmonatsanstieg seit Oktober 2022.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] }
        ]},
        { h: "Wie reagierten Fed-Vertreter?", items: [
          { tag: "position", text: "New-York-Fed-Präsident John Williams sagte, die Wirtschaft sei robust und der Arbeitsmarkt stärker geworden, die Inflation bleibe hartnäckig; die Fed müsse „im Zeitverlauf weitere Schritte” unternehmen, um zum 2-%-Ziel zurückzukehren, ohne sich auf Zeitpunkt oder Umfang festzulegen. Chicago-Fed-Chef Austan Goolsbee nannte die jüngsten Daten „grenzwertig beunruhigend” und sprach von einem „heiklen Moment” für die Notenbank, weil sich der Preisdruck über Zölle und Energie hinaus auf Dienstleistungen und das Gesundheitswesen ausweite. San-Francisco-Fed-Chefin Mary Daly sagte, weitere Zinsschritte seien angesichts anhaltenden – vor allem dienstleistungsgetriebenen – Preisdrucks wahrscheinlich nötig, sehe aber keine Dringlichkeit und wolle im Dezember gemeinsam mit dem Gremium entscheiden." },
          { tag: "position", text: "Finanzminister Scott Bessent warnte dagegen öffentlich davor, wegen eines durch den Nahost-Konflikt ausgelösten Energiepreisschocks „zu stark” zu erhöhen, und verwies auf um 7,9 % gefallene Dieselpreise als Beleg dafür, dass der Schock vorübergehend sei; Goolsbee widersprach im selben Zeitraum öffentlich und sagte, der Preisdruck gehe „weit über das hinaus, was hohe Ölpreise erklären könnten”.",
            ask: [{ label: "Mehr zur Zinsdebatte bei Fed und EZB", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie reagierten die Märkte?", items: [
          { tag: "fakt", text: "Am Terminmarkt (CME FedWatch) lag die eingepreiste Wahrscheinlichkeit einer Zinserhöhung im Dezember zuletzt bei rund 88 bis 91 % für einen Schritt um 25 Basispunkte, der Rest der Wetten entfiel auf einen größeren Schritt um 50 Basispunkte; eine Erhöhung an sich gilt praktisch als sicher. Die Rendite zehnjähriger US-Anleihen schloss am Freitag bei rund 5,14 %.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Fed-Vertreter trotz eines nur leicht über der Erwartung liegenden Erzeugerpreis-Monatswerts weiterhin auf den starken Jahresanstieg und die Ausweitung des Preisdrucks auf Dienstleistungen verweisen, zeigt: Die Debatte in der Fed dreht sich nicht mehr darum, ob im Dezember erhöht wird, sondern ob 25 oder 50 Basispunkte angemessen sind. Der offene Widerspruch zwischen Finanzminister Bessent und Fed-Vertretern wie Goolsbee verdeutlicht zugleich unterschiedliche Lesarten, wie stark der Nahost-bedingte Energiepreisschock die Kerninflation verzerrt." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1, 2 und 3, zur EZB-Zinsdebatte in Meldung 5, zur Iran-Geopolitik und den Ölpreisen in Meldung 8.",
      terms: ["erzeugerpreise", "leitzins", "basispunkt"],
      followups: ["e:ppi-what", "e:fed-hike", "e:central-banks-why", "e:oil-inflation"],
      sources: [
        { title: "BLS: Producer Price Index News Release", url: "https://www.bls.gov/news.release/ppi.nr0.htm" },
        { title: "CNBC: PPI inflation report October 2026", url: "https://www.cnbc.com/2026/11/13/ppi-inflation-report-october-2026.html" },
        { title: "Fortune: Federal Reserve, inflation, forever war – Iran oil prices, diesel, Fed rate hikes", url: "https://fortune.com/2026/11/14/federal-reserve-inflation-forever-war-iran-oil-prices-diesel-fed-rate-hikes/" },
        { title: "Al Jazeera: US Treasury warns against rate hikes during US-Iran war energy shock", url: "https://www.aljazeera.com/economy/2026/11/13/us-treasury-warns-against-rate-hikes-during-us-iran-war-energy-shock" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB/EUROZONE */
    {
      id: "ezb-dezember-zinserhoehung-nagel-reuters-umfrage-11-13", cats: ["economy"], when: "Nagel-Interview ca. 13.-14.11. · Reuters-Umfrage ca. 12.-14.11.2026",
      headline: "Bundesbank-Chef Nagel nennt EZB-Zinserhöhung im Dezember „ziemlich offensichtlich”, Reuters-Umfrage sieht sie einhellig erwartet",
      sec30: "Bundesbank-Präsident Joachim Nagel bezeichnete eine weitere EZB-Zinserhöhung im Dezember in einem Bloomberg-TV-Interview als „ziemlich offensichtlich” nötig und sprach von anhaltend erhöhter Kerninflation. Eine Reuters-Umfrage unter 71 Ökonomen ergab, dass alle Befragten eine Anhebung des EZB-Einlagensatzes von 2,5 auf 2,75 % im Dezember erwarten; 46 von ihnen halten das für den voraussichtlichen Zinsgipfel. In Großbritannien hatte die Bank of England bereits am 5.11. ihren Leitzins um 25 Basispunkte auf 4 % angehoben – die erste Erhöhung seit August 2023.",
      blocks: [
        { h: "Was sagte Bundesbank-Chef Nagel?", items: [
          { tag: "position", text: "Joachim Nagel sagte in einem Bloomberg-TV-Interview, eine weitere Zinserhöhung im Dezember sei „ziemlich offensichtlich” nötig; die Kerninflation bleibe erhöht, kurzfristige Inflationserwartungen seien im Gleichschritt mit dem Anstieg der Gesamtinflation gestiegen. Er beschrieb die aktuelle Geldpolitik als am „oberen Rand des neutralen Bereichs”; eine Anhebung auf 2,75 % würde in „restriktives Territorium” führen.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was zeigt die Reuters-Umfrage?", items: [
          { tag: "fakt", text: "Laut einer zwischen dem 10. und 12.11.2026 durchgeführten Reuters-Umfrage erwarten alle 71 befragten Ökonomen eine Anhebung des EZB-Einlagensatzes von 2,5 auf 2,75 % im Dezember; 46 der 71 halten dies für den voraussichtlichen Höhepunkt des Zinszyklus, 25 rechnen mit einem weiteren Schritt, voraussichtlich im ersten Quartal 2027.",
            ask: [{ label: "Was bedeutet eine Zinserhöhung für die Wirtschaft?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie ist die Lage bei der Bank of England?", items: [
          { tag: "fakt", text: "Die Bank of England hatte ihren Leitzins bereits am 5.11.2026 um 25 Basispunkte auf 4 % angehoben – die erste Erhöhung seit August 2023. Gouverneur Andrew Bailey warnte, die britische Inflation könne wegen des Nahost-bedingten Energiepreisrisikos bis Mitte 2027 auf „etwa 5 %” steigen, signalisierte aber nur bedingte Offenheit für einen weiteren Schritt; der Terminmarkt preist für die Sitzung am 17.12.2026 lediglich eine Wahrscheinlichkeit von rund 25 % für eine weitere Erhöhung ein." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Fed, EZB und Bank of England im November 2026 nahezu gleichzeitig über weitere Zinserhöhungen diskutieren oder sie bereits vollzogen haben, deutet auf eine breit angelegte geldpolitische Reaktion auf die durch den Nahost-Konflikt verstärkte Energiepreis-Inflation hin – auch wenn Tempo und Ausmaß zwischen den Notenbanken unterschiedlich eingeschätzt werden. Die Angaben zur eingepreisten Wahrscheinlichkeit einer EZB-Erhöhung schwanken zwischen den Quellen deutlich (teils rund 65 %, teils über 90 %); robuster belegt ist die einhellige Erwartung der 71 von Reuters befragten Ökonomen." }
        ]}
      ],
      reaction: "Mehr zu den US-Erzeugerpreisen und der Fed-Zinsdebatte in Meldung 4, zur Marktreaktion in Meldung 1 bis 3.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "FXStreet: ECB's Nagel sees another hike as second-round risks mount", url: "https://www.fxstreet.com/news/ecbs-nagel-sees-another-hike-as-second-round-risks-mount-202611131704" },
        { title: "CNBC: Bank of England raises interest rates", url: "https://www.cnbc.com/2026/11/05/interest-rates-inflation-uk.html" },
        { title: "The Private Banker: Bundesbank's Nagel says it is highly probable the ECB must hike again", url: "https://leprivatebanker.com/2026/11/13/bundesbanks-nagel-says-it-is-highly-probable-the-ecb-must-hike-again-as-december-move-is-priced-at-72/" }
      ]
    },
    /* 6 DEUTSCHLAND: HAUSHALT 2027/STROMSTEUER */
    {
      id: "bundeshaushalt-2027-stromsteuer-ungeklaert-11-13", cats: ["germany"], when: "Haushaltsausschuss-Billigung Fr 13.11.2026 (Sitzung bis 5:55 Uhr) · Koalitionsausschuss zur Stromsteuer angesetzt für Di 17.11.2026 · Bundestagsdebatte 24.-27.11.2026",
      headline: "Haushaltsausschuss billigt Bundeshaushalt 2027, die zugesagte Stromsteuersenkung bleibt ungeklärt",
      sec30: "Der Haushaltsausschuss des Bundestags billigte in einer bis Freitagfrüh um 5:55 Uhr dauernden Sitzung den Bundeshaushalt 2027 mit einer Nettokreditaufnahme von 122,97 Mrd. Euro im Kernhaushalt – 4,25 Mrd. Euro mehr als im Regierungsentwurf. Davon entfallen 84,55 Mrd. Euro auf die Ausnahme für Verteidigungsausgaben von der Schuldenbremse. Offen bleibt weiterhin die im Koalitionsvertrag zugesagte Stromsteuersenkung; die Finanzierung von rund 5,4 Mrd. Euro jährlich soll laut Berichten am Dienstag, 17.11.2026, im Koalitionsausschuss verhandelt werden. Die abschließende Bundestagsberatung ist für die Woche vom 24. bis 27.11.2026 angesetzt.",
      blocks: [
        { h: "Was wurde beschlossen?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss billigte den Bundeshaushalt 2027 mit Stimmen der Koalition aus CDU/CSU und SPD, gegen die Stimmen von AfD, Bündnis 90/Die Grünen und Die Linke. Die Nettokreditaufnahme im Kernhaushalt liegt bei 122,97 Mrd. Euro (2026: 97,96 Mrd. Euro) bei Gesamtausgaben von rund 560,9 Mrd. Euro. Über rund 2.000 Änderungsanträge wurde in der Sitzung abgestimmt.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Von den 122,97 Mrd. Euro Nettokreditaufnahme entfallen 84,55 Mrd. Euro auf die seit 2025 geltende Ausnahme für Verteidigungsausgaben oberhalb von 1 % des BIP von der Schuldenbremse; die regulär schuldenbremsenrelevante Nettokreditaufnahme von 38,43 Mrd. Euro bewegt sich an der verfassungsrechtlichen Obergrenze. Die im Koalitionsvertrag zugesagte Stromsteuersenkung für alle Verbraucher auf den EU-Mindestsatz ist im vom Ausschuss gebilligten Entwurf nicht enthalten; ihre Finanzierung von jährlich rund 5,4 Mrd. Euro bleibt offen.",
            ask: [{ label: "Was bedeutet die Ausnahme für Verteidigungsausgaben?", ref: "e:debt-brake" }] }
        ]},
        { h: "Wer unterstützt den Haushalt und womit?", items: [
          { tag: "position", text: "CDU-Haushaltspolitiker Christian Haase sagte, die Stromsteuer werde „nochmal auf der politischen Agenda” der kommenden Woche stehen. SPD-Haushaltspolitiker Thorsten Rudolph sagte: „Wir dürfen das nicht über neue Schulden finanzieren.”" }
        ]},
        { h: "Wer kritisiert den Haushalt und womit?", items: [
          { tag: "position", text: "Grünen-Haushaltspolitiker Sebastian Schäfer nannte den Haushalt „ein wackliges Gebilde ohne Fundament”. Linke-Haushaltspolitiker Dietmar Bartsch bezeichnete ihn als „einen unverantwortlichen Haushalt, ein Dickicht aus Schulden, Tricks und Verschiebungen”. Grünen-Politikerin Katrin Uhlig sagte, die Stromsteuer werde „zunehmend zum Symbol für eine Bundesregierung, die groß ankündigt, aber nicht liefert”." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Weil die Finanzierung der Stromsteuersenkung weiterhin ungeklärt ist, bleibt offen, ob und wann Verbraucher und Unternehmen tatsächlich von einer niedrigeren Stromsteuer profitieren. Die Entscheidung soll laut Berichten am Dienstag, 17.11.2026, im Koalitionsausschuss fallen; die endgültige Entscheidung über den Gesamthaushalt 2027 trifft der Bundestag erst in der Woche vom 24. bis 27.11.2026." }
        ]}
      ],
      reaction: "Mehr zur Rentenreform und zur Bundespräsidentschaftskandidatur in Meldung 7.",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Bundestag: Haushaltsausschuss billigt Etat 2027 (hib-Kurzmeldung)", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1233152" },
        { title: "Handelsblatt: Haushalt – Koalition findet bisher kein Geld für Stromsteuer-Senkung", url: "https://www.handelsblatt.com/politik/deutschland/haushalt-koalition-findet-bisher-kein-geld-fuer-stromsteuer-senkung/100269235.html" },
        { title: "Tagesspiegel: „Hat ordentlich geknallt” – Wut in der Union", url: "https://www.tagesspiegel.de/politik/hat-ordentlich-geknalltwut-in-der-union--merz-will-stromsteuersenkung-wohl-noch-im-koalitionsausschuss-durchboxen-16276409.html" }
      ]
    },
    /* 7 DEUTSCHLAND: RENTE/BUNDESPRÄSIDENTIN/UMFRAGEN */
    {
      id: "rentenreform-bundespraesidentin-aigner-umfragen-11-13", cats: ["germany"], when: "Aigner-Nominierung 9.11. · ZDF-Politbarometer 13.11. (Befragung 10.-12.11.) · Rentenreform laufend",
      headline: "CDU nominiert Ilse Aigner als Kandidatin für das Bundespräsidentenamt, ZDF-Politbarometer sieht AfD sechs Punkte vor der Union",
      sec30: "Der CDU-Bundesvorstand nominierte am 9.11.2026 die bayerische Landtagspräsidentin Ilse Aigner (CSU) als Kandidatin für die Wahl zur Bundespräsidentin am 30.1.2027; SPD-Chef Klingbeil und die Grünen-Führung signalisierten Unterstützung. Das ZDF-Politbarometer vom 13.11. (Befragung 10.-12.11., 1.297 Befragte) sah die AfD bei 28 % und die Union bei 22 % – ein Rückstand von sechs Punkten; SPD und Linke verloren je einen Punkt. Bei der Rentenreform ist der Gesetzentwurf von Arbeitsminister Alexander Schweitzer (SPD) nach eigenen Angaben zu 95 % fertig, strittig bleibt die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren.",
      blocks: [
        { h: "Wer ist Ilse Aigner, und wie läuft ihre Nominierung?", items: [
          { tag: "fakt", text: "Der CDU-Bundesvorstand nominierte am 9.11.2026 die seit 2018 amtierende Präsidentin des Bayerischen Landtags und frühere Bundeslandwirtschaftsministerin Ilse Aigner (CSU) als gemeinsame Kandidatin von CDU und CSU für das Amt der Bundespräsidentin. Die Wahl durch die Bundesversammlung (1.260 Mitglieder) ist für den 30.1.2027 angesetzt; Aigner wäre im Erfolgsfall die erste Frau in diesem Amt." }
        ]},
        { h: "Wer unterstützt die Kandidatur, und wer kritisiert sie?", items: [
          { tag: "position", text: "Bundeskanzler Friedrich Merz sagte: „Mit Ilse Aigner als Bundespräsidentin hätte Deutschland eine Bundespräsidentin mit Würde und Herz.” SPD-Chef Lars Klingbeil signalisierte, die SPD werde eine Kandidatur Aigners „begrüßen und unterstützen”; auch die Grünen-Führung zeigte sich offen. Die AfD kündigte an, eine eigene Kandidatin oder einen eigenen Kandidaten aufzustellen; die AfD-Politikerin Beatrix von Storch nannte die Nominierung Aigners ein „Zeichen der Armut”." }
        ]},
        { h: "Was zeigt das aktuelle ZDF-Politbarometer?", items: [
          { tag: "fakt", text: "Das ZDF-Politbarometer vom 13.11.2026 (telefonische/Online-Befragung von 1.297 Wahlberechtigten, 10. bis 12.11.) sah die AfD bei 28 % (+2 Punkte gegenüber der Vorwoche), die Union bei 22 % (-1 Punkt) – ein Abstand von sechs Punkten. Die Grünen legten auf 15 % zu (+2), die SPD fiel auf 13 % (-1), die Linke auf 10 % (-1), die FDP blieb bei 3 %. Die derzeitige Koalition aus CDU/CSU und SPD hätte laut der Umfrage keine Mehrheit im Bundestag.",
            ask: [{ label: "Mehr zum Bundeshaushalt der Koalition", ref: "s:6" }] }
        ]},
        { h: "Wie ist der Stand bei der Rentenreform?", items: [
          { tag: "fakt", text: "Arbeitsminister Alexander Schweitzer (SPD) bezeichnete den Gesetzentwurf zur Umsetzung der Empfehlungen der Alterssicherungskommission als „zu 95 Prozent fertig”; ein offizieller Referentenentwurf lag bis Mitte November aber noch nicht vor. Strittig bleibt vor allem die von der Kommission empfohlene Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren („Rente mit 63”); Schweitzer, Teile der SPD und ostdeutsche CDU-Politiker diskutieren stattdessen eine gezielte „Schutzrente” für besonders belastete Berufsgruppen. Bundeskanzler Merz will die Reform noch vor Weihnachten ins Kabinett bringen.",
            ask: [{ label: "Was ist die Rente mit 63?", ref: "e:rente-basics" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass CDU, SPD und Grüne sich bei der Bundespräsidentschaftskandidatur auf eine gemeinsame Kandidatin verständigen, während die Umfragen für die Koalitionsparteien gleichzeitig schwach ausfallen, zeigt zwei unterschiedliche Ebenen der aktuellen politischen Lage: Beim repräsentativen Amt des Bundespräsidenten gibt es eine breite Übereinstimmung, bei der Bewertung der Regierungsarbeit in Sachthemen wie Haushalt und Rente dagegen nicht." }
        ]}
      ],
      reaction: "Mehr zum Bundeshaushalt 2027 und zur Stromsteuer in Meldung 6.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:rente-basics", "e:landtagswahl-why"],
      sources: [
        { title: "CDU: Ilse Aigner – Bundespräsidentin mit Würde und Herz", url: "https://www.cdu.de/aktuelles/cdu-deutschlands/ilse-aigner-kandidatin-fuer-das-amt-der-bundespraesidentin-und-cdu-bundeskanzler-friedrich-merz/" },
        { title: "Berliner Zeitung: Merz setzt auf Ilse Aigner – CSU-Politikerin soll Bundespräsidentin werden", url: "https://www.berliner-zeitung.de/article/ilse-aigner-soll-bundespraesidentin-werden-10577479" },
        { title: "Handelsblatt: ZDF-Politbarometer – AfD wieder deutlicher vor Union", url: "https://www.handelsblatt.com/politik/deutschland/zdf-politbarometer-afd-wieder-deutlicher-vor-union/100269688.html" },
        { title: "cash-online.de: Rente mit 63 abschaffen – Gesetzentwurf zu 95 Prozent fertig", url: "https://www.cash-online.de/a/rente-mit-63-abschaffen-gesetzentwurf-zu-95-prozent-fertig-730061/" }
      ]
    },
    /* 8 GEOPOLITIK: IRAN/HORMUZ */
    {
      id: "iran-hormuz-tankerminen-trump-vance-rezaei-11-14", cats: ["world", "geo"], when: "Tankervorfälle Sa 14.11. · Trump-Äußerung 12.11.",
      headline: "Irans Marine meldet Tanker-Brände nach Minentreffern in der Straße von Hormus, Iran weist Berichte über ein Vance-Rezaei-Treffen zurück",
      sec30: "Irans Marine und die Revolutionsgarden meldeten am Samstag, 14.11., dass mehrere Öltanker in der Straße von Hormus nach dem Auftreffen von Seeminen in Brand geraten seien; betroffene Schiffe hätten demnach Transponder und Radar abgeschaltet und eine „nicht genehmigte Route” genutzt. Reuters erklärte, die Angaben nicht unabhängig bestätigen zu können. Parallel wiesen der iranische Außenminister Araghchi und der Chef des nationalen Sicherheitsrats, Mohsen Rezaei, Berichte über ein geplantes Treffen mit US-Vizepräsident JD Vance in Doha als „erfunden” zurück. Präsident Trump hatte am 12.11. erklärt, die USA bräuchten „keinen Deal” mehr mit dem Iran.",
      blocks: [
        { h: "Was ist in der Straße von Hormus passiert?", items: [
          { tag: "unbestaetigt", text: "Irans Marine und die Revolutionsgarden erklärten am Samstag, 14.11.2026, mehrere Öltanker seien nach dem Auftreffen auf Seeminen in Brand geraten; nach Angaben der Revolutionsgarden hätten die betroffenen Schiffe Funk- und Positionssysteme abgeschaltet gehabt und versucht, die Straße von Hormus über eine „nicht genehmigte Route” heimlich zu passieren. Reuters erklärte ausdrücklich, die Angaben nicht unabhängig überprüfen zu können.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was sagte Präsident Trump zu einem Iran-Deal?", items: [
          { tag: "position", text: "Präsident Trump erklärte am 12.11.2026, die USA bräuchten „keinen Deal” mehr mit dem Iran, nachdem Katar zuvor einen Vorschlag zur Öffnung der Straße von Hormus gegen die Freigabe von rund 8 Mrd. Dollar iranischer Gelder vermittelt hatte." }
        ]},
        { h: "Was ist mit dem angeblichen Vance-Rezaei-Treffen?", items: [
          { tag: "unbestaetigt", text: "Berichte hatten ein Treffen zwischen US-Vizepräsident JD Vance und dem Chef des iranischen Nationalen Sicherheitsrats, Mohsen Rezaei, in Doha vermeldet. Irans Außenminister Abbas Araghchi nannte dies „vollkommen unbegründet”, Rezaei selbst bezeichnete die Berichte als „erfunden” und sagte, sie dienten dazu, wirtschaftlichen Druck zu verringern und den Ölpreis zu senken; Verhandlungen seien erst möglich, wenn die USA sieben iranische Bedingungen akzeptierten.",
            ask: [{ label: "Mehr zum Ölmarkt und den Preisfolgen", ref: "s:15" }] }
        ]},
        { h: "Wie reagiert der Ölmarkt?", items: [
          { tag: "fakt", text: "Trotz der gemeldeten Tanker-Zwischenfälle blieb der Brent-Preis zum Wochenende mit rund 95,84 Dollar nahezu unverändert; laut Berichten hat sich die Ölversorgung aus der Golfregion über alternative Routen inzwischen weitgehend erholt, während der Tankerverkehr durch die Straße von Hormus selbst laut IMF-PortWatch-Daten nahe dem Stillstand liegt.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz neuer Zwischenfallmeldungen kaum reagiert, während tatsächliche Schiffsdurchfahrten durch Hormus fast ausbleiben, deutet darauf hin, dass Märkte die konkrete Versorgungslage über Umwege und Pipeline-Kapazitäten inzwischen höher gewichten als einzelne, teils nicht unabhängig bestätigte Vorfallmeldungen." }
        ]}
      ],
      reaction: "Mehr zu Ölpreis, OPEC+ und deutschen Gasspeichern in Meldung 15, zur Ukraine-Diplomatie und dem geplanten Trump-Xi-Putin-Gipfel in Meldung 9.",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:brent-wti"],
      sources: [
        { title: "Investing.com (Reuters): Iran's navy says three tankers on fire after hitting mines in Hormuz", url: "https://www.investing.com/news/commodities-news/irans-navy-says-three-tankers-on-fire-after-hitting-mines-in-hormuz-5027556" },
        { title: "gCaptain: Oil tanker on fire after hitting mine in Hormuz", url: "https://gcaptain.com/oil-tanker-on-fire-after-hitting-mine-in-hormuz/" },
        { title: "Middle East Eye: Iran denies reports of Rezaei meeting with US Vice President JD Vance", url: "https://www.middleeasteye.net/live-blog/live-blog-update/iran-denies-reports-rezaei-meeting-us-vice-president-jd-vance" },
        { title: "Jerusalem Post: Iran says oil tanker on fire after naval mine strike in eastern Strait of Hormuz", url: "https://www.jpost.com/middle-east/iran-news/article-914859" }
      ]
    },
    /* 9 GEOPOLITIK: TRUMP-XI-PUTIN/UKRAINE/BULGARIEN */
    {
      id: "trump-xi-putin-gipfel-shenzhen-ukraine-bulgarien-11-19", cats: ["world", "geo"], when: "Gipfel angesetzt 19.11.2026 (APEC 18.-19.11.) · Bulgarien-Ankündigung 13.11.",
      headline: "Kreml bestätigt erstes Dreiertreffen von Trump, Xi und Putin für den 19.11. in Shenzhen, Bulgarien beendet eigene Waffenlieferungen an die Ukraine",
      sec30: "Der Kreml-Sprecher Dmitri Peskow bestätigte ein erstes trilaterales Treffen von Wladimir Putin, Xi Jinping und Donald Trump am 19.11.2026 am Rande des APEC-Gipfels in Shenzhen (18.-19.11.); dabei sollen laut Kreml-Angaben auch Fragen einer Ukraine-Regelung sowie nukleare Rüstungskontrolle besprochen werden. Die Ukraine selbst ist nicht eingeladen. Parallel erklärte der bulgarische Ministerpräsident Rumen Radew am 13.11. beim Gipfel der Europäischen Politischen Gemeinschaft in Dublin, Bulgarien werde keine Waffen und Munition aus eigenen Beständen mehr an die Ukraine liefern und sich auch nicht an einer neuen EU-Finanzierungsrunde beteiligen.",
      blocks: [
        { h: "Was ist für den 19.11. in Shenzhen geplant?", items: [
          { tag: "fakt", text: "Kreml-Sprecher Dmitri Peskow bestätigte, dass Wladimir Putin, Xi Jinping und Donald Trump am 19.11.2026 am Rande des APEC-Gipfels (18.-19.11. in Shenzhen) ein erstes trilaterales Treffen abhalten werden. Nach Kreml-Angaben sollen Putin und Trump dabei weiter über eine Ukraine-Regelung sprechen; alle drei Seiten sollen zudem Gespräche über ein nukleares Rüstungskontrollabkommen führen." }
        ]},
        { h: "Wie reagiert die Ukraine auf den geplanten Gipfel?", items: [
          { tag: "unbestaetigt", text: "Berichten zufolge ist die Ukraine zu dem Treffen nicht eingeladen; nach Sekundärberichten äußerte Präsident Selenskyj die Sorge vor einer Entscheidung über die Ukraine ohne ukrainische Beteiligung. Diese Einschätzung stammt aus Sekundärquellen und lässt sich hier nicht gegen eine offizielle ukrainische Erklärung absichern." }
        ]},
        { h: "Was hat Bulgarien angekündigt?", items: [
          { tag: "fakt", text: "Der bulgarische Ministerpräsident Rumen Radew erklärte am 13.11.2026 beim Gipfel der Europäischen Politischen Gemeinschaft in Dublin, Bulgarien werde die Ukraine künftig weder mit Waffen und Munition aus eigenen Armeebeständen versorgen noch sich an einer neuen Runde europäischer Finanzhilfen für die Ukraine beteiligen. Als Begründung nannte Radew ein laufendes EU-Verfahren wegen eines übermäßigen bulgarischen Haushaltsdefizits sowie Engpässe bei den eigenen Reserven." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mit Bulgarien erstmals ein Nato- und EU-Mitgliedstaat eigene Waffenlieferungen an die Ukraine explizit mit Verweis auf eigene Haushalts- und Reserveprobleme einstellt, während gleichzeitig ein erstes Dreiertreffen von Trump, Xi und Putin über die Ukraine verhandelt werden soll, zeigt zwei parallele Dynamiken: wachsenden finanziellen Druck auf einzelne Unterstützerstaaten einerseits und eine mögliche Verschiebung der Entscheidungsebene hin zu Gesprächen zwischen Großmächten andererseits." }
        ]}
      ],
      reaction: "Mehr zu Iran, der Straße von Hormus und dem Ölpreis in Meldung 8 und 15.",
      terms: [],
      followups: ["e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "Anadolu Agency: Kremlin says Putin, Xi, Trump to hold trilateral meeting in Shenzhen on Nov. 19", url: "https://www.aa.com.tr/en/eurasia/kremlin-says-putin-xi-trump-to-hold-trilateral-meeting-in-shenzhen-on-nov-19/4125290" },
        { title: "TASS: Putin, Xi Jinping, Trump trilateral summit to be held in Shenzhen on November 19", url: "https://tass.com/politics/2218203" },
        { title: "t-online.de: Ukraine-Krieg – Nato-Land Bulgarien will Kiew keine Waffen mehr liefern", url: "https://www.t-online.de/nachrichten/ausland/internationale-politik/id_101529134/ukraine-krieg-nato-land-bulgarien-will-kiew-keine-waffen-mehr-liefern.html" },
        { title: "Ukrinform: Bulgaria halts arms and ammunition supplies to Ukraine from its military stockpiles", url: "https://www.ukrinform.net/rubric-polytics/4184679-bulgaria-halts-arms-and-ammunition-supplies-to-ukraine-from-its-military-stockpiles.html" }
      ]
    },
    /* 10 DEFENCE: RHEINMETALL */
    {
      id: "rheinmetall-kursverfall-gewinnwarnung-bvb-11-13", cats: ["defence"], when: "Profitwarnung 4.11. · Kurstief 13.11. · BVB-Trennung 13.11.",
      headline: "Rheinmetall-Aktie fällt auf 21-Monats-Tief, Borussia Dortmund beendet Sponsoring, Analysten verweisen auf Ukraine-Gesprächsfortschritte",
      sec30: "Die Rheinmetall-Aktie fiel am Freitag, 13.11., zeitweise auf ein 52-Wochen-Tief von 742,50 Euro und schloss bei 765,50 Euro – rund 60 % unter dem Januar-Rekordhoch von 1.966 Euro. Hintergrund ist laut Berichten die bereits zweite Gewinnwarnung binnen drei Monaten (die fünfte binnen elf Monaten laut JPMorgan) wegen der auf Februar 2027 verschobenen Boxer-Großbestellung „Arminius” sowie Fortschritte bei den US-vermittelten Ukraine-Gesprächen, die laut Marktbeobachtern die eingepreiste „Kriegsprämie” der Rüstungsaktien schmelzen lassen. Zudem bestätigte Borussia Dortmund am 13.11., das Stadion-Sponsoring mit Rheinmetall nach Ablauf im Juni 2027 nicht zu verlängern.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie fiel am Freitag, 13.11.2026, zeitweise auf ein 52-Wochen-Tief von 742,50 Euro und schloss bei 765,50 Euro; am Sonntag wurde der Kurs mit rund 759 Euro angegeben – gut 60 % unter dem Januar-Rekordhoch von 1.966 Euro.",
            ask: [{ label: "Mehr zu Rheinmetalls Konkurrenten RENK und Hensoldt", ref: "s:11" }] }
        ]},
        { h: "Was war der Hintergrund der jüngsten Gewinnwarnung?", items: [
          { tag: "fakt", text: "Rheinmetall hatte die Jahresprognose 2026 bereits am 4.11. zum zweiten Mal binnen drei Monaten gesenkt: Umsatz nun rund 13,2 statt 13,7 bis 14,2 Mrd. Euro, operative Marge rund 18,5 statt rund 19 %. Grund ist laut Konzernangaben die Verschiebung der milliardenschweren Boxer-Großbestellung „Arminius” (rund 1.800 Fahrzeuge, nach Angaben von Konzernchef Papperger mit einem Rheinmetall-Anteil von zunächst 12,4 Mrd. Euro, potenziell über 38 Mrd. Euro inklusive Folgeaufträgen) von Dezember 2026 auf frühestens Februar 2027; zusätzlich verzögerten sich Munitions-Abrufe. JPMorgan bezeichnete dies als die fünfte Gewinn- oder Umsatzwarnung binnen elf Monaten.",
            ask: [{ label: "Mehr zum deutschen Verteidigungshaushalt", ref: "e:nato-target" }] }
        ]},
        { h: "Welche Rolle spielen die Ukraine-Gespräche?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen den Kursrückgang bei Rheinmetall, RENK und Hensoldt zusätzlich auf Fortschritte bei den von den USA vermittelten Ukraine-Gesprächen zurück: Je wahrscheinlicher ein Kriegsende erscheint, desto stärker schmilzt nach dieser Lesart die in Rüstungsaktien eingepreiste „Kriegsprämie”. Ein unterzeichnetes Abkommen oder ein Waffenstillstand liegt nach den vorliegenden Berichten allerdings nicht vor.",
            ask: [{ label: "Mehr zum geplanten Trump-Xi-Putin-Gipfel", ref: "s:9" }] }
        ]},
        { h: "Was ist mit dem BVB-Sponsoring?", items: [
          { tag: "fakt", text: "Borussia Dortmund bestätigte am 13.11.2026, das seit Mai 2024 laufende, rund 10 Mio. Euro pro Jahr schwere Stadion-Sponsoring mit Rheinmetall nach dessen Auslaufen am 30.6.2027 nicht zu verlängern. Dem waren anhaltende Protestaktionen von Fans vorausgegangen." }
        ]}
      ],
      reaction: "Mehr zu RENK, Hensoldt und der EU-Verteidigungsfinanzierung SAFE in Meldung 11.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order", "chain:oil-to-markets"],
      sources: [
        { title: "wallstreet-online.de: Rheinmetall – Prognose gekappt, Fregattenauftrag unsicher", url: "https://wallstreet-online.de/nachricht/21694341-rheinmetall-sturzflug-prognose-gekappt-fregattenauftrag-unsicher" },
        { title: "finanzen.ch: Rheinmetall-Aktie – Kursbewegung 13.11.2026", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-13-11-2026-1035064641" },
        { title: "ESPN: Borussia Dortmund, Rheinmetall sponsorship ends", url: "https://www.espn.com/soccer/story/_/id/50473322/borussia-dortmund-rheinmetall-sponsorship-arms-manufacturer" }
      ]
    },
    /* 11 DEFENCE: RENK/HENSOLDT/BELGIEN/SAFE */
    {
      id: "renk-hensoldt-belgien-safe-finanzierung-11-10", cats: ["defence"], when: "RENK-Zahlen 5.11. · Hensoldt-Kapitalmarkttag 10.11. · Belgien-Order 9.11.",
      headline: "RENK meldet Rekord-Auftragsbestand, Hensoldt hebt Umsatzziel für 2035 an, Belgien bestellt Flugabwehrsysteme bei Rheinmetall",
      sec30: "RENK steigerte den Auftragseingang in den ersten neun Monaten 2026 um 33,6 % auf 1,66 Mrd. Euro und meldete einen Rekord-Auftragsbestand von 7,6 Mrd. Euro. Hensoldt bestätigte beim Kapitalmarkttag in London am 10.11. sein 2030-Umsatzziel von 6 Mrd. Euro und hob das Ziel für 2035 erstmals auf 10 Mrd. Euro an. Belgien bestellte am 9.11. 20 Skyranger-30-Flugabwehrsysteme von Rheinmetall im Rahmen seines 3,1-Mrd.-Euro-Luftverteidigungsprogramms „Blue Dome”. Bei der EU-Verteidigungsfinanzierung SAFE haben inzwischen alle 19 teilnehmenden Staaten Kreditvereinbarungen über insgesamt 21,3 Mrd. Euro in der zweiten Runde genehmigt.",
      blocks: [
        { h: "Was zeigen die RENK-Zahlen?", items: [
          { tag: "fakt", text: "RENK meldete für die ersten neun Monate 2026 einen Auftragseingang von 1,66 Mrd. Euro (+33,6 % ggü. Vorjahr) und einen Rekord-Auftragsbestand von 7,6 Mrd. Euro (Jahresende 2025: 6,7 Mrd. Euro); der Umsatz stieg um 5,8 % auf 982,0 Mio. Euro. Für das fortgeführte Geschäft nach dem Verkauf der Wälzlager-Sparte an Miba rechnet RENK 2026 mit rund 1,4 Mrd. Euro Umsatz und 240 bis 255 Mio. Euro bereinigtem EBIT.",
            ask: [{ label: "Mehr zum Kursverfall bei Rheinmetall", ref: "s:10" }] }
        ]},
        { h: "Was kündigte Hensoldt an?", items: [
          { tag: "fakt", text: "Hensoldt bestätigte beim Kapitalmarkttag in London am 10.11.2026 sein Umsatzziel von 6 Mrd. Euro für 2030 und hob das Ziel für 2035 erstmals auf 10 Mrd. Euro an; für 2027/2028 erwartet der Sensorhersteller ein jährliches Umsatzwachstum von 15 bis 20 %. Für 2026 bestätigte Hensoldt eine Umsatzprognose von rund 2,8 Mrd. Euro bei einer bereinigten EBITDA-Marge von rund 19 %.",
            ask: [{ label: "Was ist das NATO-Ausgabenziel?", ref: "e:nato-target" }] }
        ]},
        { h: "Was hat Belgien bestellt?", items: [
          { tag: "fakt", text: "Belgien bestellte am 9.11.2026 bei Rheinmetall 20 Skyranger-30-Flugabwehrsysteme im Rahmen seines mit den Niederlanden abgestimmten 3,1-Mrd.-Euro-Luftverteidigungsprogramms „Blue Dome”; die Lieferungen sollen Ende 2028 beginnen. Der Auftragswert liegt im unteren dreistelligen Millionenbereich." }
        ]},
        { h: "Wie steht es um die EU-Verteidigungsfinanzierung SAFE?", items: [
          { tag: "fakt", text: "In der zweiten SAFE-Runde über 21,3 Mrd. Euro haben inzwischen alle 19 teilnehmenden Mitgliedstaaten Kreditvereinbarungen genehmigt, 16 davon unterzeichnet; elf Staaten erhielten bereits eine Vorfinanzierung von 15 % (zusammen rund 13,5 Mrd. Euro). Die EU-Kommission wirbt dafür, einen Teil der Mittel in Kooperationsprojekte mit der Ukraine zu lenken." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass RENK und Hensoldt ihre Wachstumsziele trotz der Rheinmetall-Probleme anheben oder bestätigen, während zugleich neue nationale Order wie die belgische Skyranger-Bestellung hinzukommen, deutet darauf hin, dass die Schwäche bei Rheinmetall laut den vorliegenden Daten vor allem unternehmensspezifisch (Lieferverzögerungen) bedingt ist und nicht die gesamte europäische Rüstungsbranche gleichermaßen betrifft." }
        ]}
      ],
      reaction: "Mehr zum Kursverfall bei Rheinmetall und zur Debatte um die „Kriegsprämie” in Meldung 10.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "GlobeNewswire: 9M 2026 RENK steigert Auftragseingang um mehr als 30 %", url: "https://www.globenewswire.com/news-release/2026/11/05/3396028/0/de/9m-2026-renk-steigert-auftragseingang-um-mehr-als-30-bei-erneut-%C3%BCberproportionalem-anstieg-des-bereinigten-ebit-operativer-kapazit%C3%A4tshochlauf-parallel-zur-laufenden-produktion.html" },
        { title: "Hensoldt: Capital Markets Day – Hensoldt confirms revenue ambition of €6bn for 2030 and aims for €10bn in 2035", url: "https://www.hensoldt.net/news/capital-markets-day-hensoldt-confirms-revenue-ambition-of-6-billion-euros-for-2030-and-aims-for-10-billion-euros-in-2035" },
        { title: "hartpunkt.de: Belgien bestellt 20 Flugabwehrsysteme Skyranger-30", url: "https://www.hartpunkt.de/belgien-bestellt-20-flugabwehrsysteme-skyranger-30/" },
        { title: "Berliner Zeitung: 21,3 Milliarden Euro an SAFE-Krediten – EU-Kommission wirbt für Zusammenarbeit mit der Ukraine", url: "https://www.berliner-zeitung.de/article/213-milliarden-euro-an-safe-krediten-eu-kommission-wirbt-fuer-zusammenarbeit-mit-ukraine-10544507" }
      ]
    },
    /* 12 DEALS: KNDS/UNIPER/MEYER WERFT/BASF-EVONIK */
    {
      id: "staatsbeteiligungen-knds-uniper-meyerwerft-basf-evonik-11-13", cats: ["deals", "pe"], when: "KNDS-Berichte 11.-13.11. · Uniper-Bieterrunde laufend · Meyer-Werft/MSC-Unterschrift angekündigt für 17.11. · BASF-Evonik seit 9.11. unverändert",
      headline: "Bund verhandelt mehrere Staatsbeteiligungen: KNDS-Einstieg, Uniper-Verkauf und mögliche MSC-Übernahme bei Meyer Werft",
      sec30: "Berichten zufolge zahlt der Bund rund 6,6 Mrd. Euro für einen 50-Prozent-Anteil am Rüstungskonzern KNDS – mehr Anteil als die im Juni vom Haushaltsausschuss gebilligten 7,2 Mrd. Euro für 40 Prozent vorsahen, aber zu einem niedrigeren Gesamtpreis; ein unterzeichneter Vertrag liegt laut Berichten noch nicht vor. Beim Energiekonzern Uniper (99,12 % Bundesanteil) sind Brookfield/CPPIB, Equinor und Centrica in die nächste Bieterrunde für verbindliche Angebote gekommen, nachdem ein KKR/RWE-Konsortium und EPH ausgeschieden waren; der Verkaufswert wird auf bis zu 14 Mrd. Euro taxiert. Beim Schiffbauer Meyer Werft bereiten Bund, Niedersachsen und die Schweizer Reederei MSC laut Berichten eine Unterzeichnung am 17.11. vor, die MSC rund 80 % des Unternehmens übertragen würde. Beim BASF-Übernahmeangebot für Evonik (24 Euro je Aktie, rund 11,2 Mrd. Euro) gibt es seit der Ablehnung durch Evonik am 9.11. keine bestätigte neue Entwicklung.",
      blocks: [
        { h: "Was ist beim KNDS-Einstieg des Bundes bekannt?", items: [
          { tag: "unbestaetigt", text: "Mehreren übereinstimmenden Medienberichten zufolge hat sich der Bund grundsätzlich darauf verständigt, rund 6,6 Mrd. Euro für einen 50-Prozent-Anteil an KNDS (Leopard-/Boxer-Hersteller) zu zahlen und damit die deutschen Eigentümerfamilien (gehalten über die Wegmann-Holding) auszuzahlen. Das ist weniger Geld als die vom Haushaltsausschuss im Juni für einen kleineren Anteil von 40 % gebilligten 7,2 Mrd. Euro, aber ein größerer Anteil. Ein unterzeichneter, ratifizierter Vertrag liegt den Berichten zufolge noch nicht vor.",
            ask: [{ label: "Was passiert bei Übernahmen zwischen Unterzeichnung und Vollzug?", ref: "e:deal-risks" }] }
        ]},
        { h: "Was treibt die Uniper-Privatisierung?", items: [
          { tag: "fakt", text: "Beim mehrheitlich dem Bund gehörenden Energiekonzern Uniper (99,12 % Anteil über das Bundesfinanzministerium) sind laut Berichten Brookfield (mit CPPIB), Equinor und Centrica in die nächste Bieterrunde für verbindliche Angebote gekommen; ein Konsortium aus KKR und RWE sowie der tschechische Investor Daniel Křetínskys EPH schieden zuvor aus. Der Verkaufswert wird auf bis zu 14 Mrd. Euro einschließlich Nettoliquidität taxiert; gesetzlich muss der Bund maximal 25 % plus eine Aktie zurückbehalten, eine Mehrheitsveräußerung ist bis Ende 2028 vorgeschrieben.",
            ask: [{ label: "Was ist ein Enterprise Value?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was ist bei der Meyer Werft geplant?", items: [
          { tag: "unbestaetigt", text: "Berichten zufolge bereiten Bund, das Land Niedersachsen und die Schweizer Reederei MSC eine Unterzeichnung am Dienstag, 17.11.2026, vor, mit der MSC das Recht erhalten würde, rund 80 % der Meyer Werft (Papenburg) zu übernehmen – den Anteil, den Bund und Niedersachsen Ende 2024 im Zuge einer Rettungsaktion übernommen hatten. Die Meyer-Familie würde die verbleibenden rund 20 % halten. Der Auftragsbestand der Werft wird mit bis zu 10 Mrd. Euro angegeben. Die beteiligten Parteien haben dies zum Zeitpunkt der Berichte noch nicht offiziell bestätigt." }
        ]},
        { h: "Was ist beim BASF-Angebot für Evonik neu?", items: [
          { tag: "fakt", text: "Beim Übernahmeangebot von BASF für Evonik (24 Euro je Aktie, rund 11,2 Mrd. Euro) gibt es seit der Ablehnung durch den Evonik-Vorstand am 9.11. keine neue bestätigte Entwicklung; Evonik hatte zuvor für das dritte Quartal 2026 einen um rund 40 % auf 629 Mio. Euro gestiegenen operativen Gewinn bei weiterhin negativem Nettoergebnis (-53 Mio. Euro) gemeldet und seine Jahresprognose angehoben. Die RAG-Stiftung als größte Evonik-Aktionärin (über 40 % der Anteile) berät weiterhin über ihre Haltung zu dem Angebot." }
        ]}
      ],
      reaction: "Mehr zum Marvell-Lumentum-Deal und zum Private-Credit-Stress in Meldung 13.",
      terms: ["enterprise-value", "ebitda"],
      followups: ["e:ma-steps", "e:ev-ebitda", "e:deal-risks"],
      sources: [
        { title: "hessenschau.de: Bericht – Bund zahlt 6,6 Milliarden für Einstieg bei Rüstungskonzern KNDS", url: "https://www.hessenschau.de/wirtschaft/bericht-bund-zahlt-66-milliarden-fuer-einstieg-bei-ruestungskonzern-knds-v1,knds-bund-100.html" },
        { title: "energyconnects.com: Centrica, Equinor in next round of Germany's Uniper sale", url: "https://www.energyconnects.com/news/utilities/2026/november/centrica-equinor-in-next-round-of-germany-s-uniper-sale/" },
        { title: "kreuzfahrttester.com: MSC-Übernahme Meyer Werft", url: "https://kreuzfahrttester.com/2026/11/15/msc-uebernahme-meyer-werft/" },
        { title: "Handelsblatt: Evonik steigert operativen Gewinn und betont Eigenständigkeit", url: "https://www.handelsblatt.com/unternehmen/industrie/quartalszahlen-evonik-steigert-operativen-gewinn-und-betont-eigenstaendigkeit/100265237.html" }
      ]
    },
    /* 13 DEALS/PRIVATE CREDIT: MARVELL-LUMENTUM/KBRA */
    {
      id: "marvell-lumentum-spread-private-credit-stress-11-13", cats: ["deals", "credit"], when: "Deal angekündigt 2.11. · KBRA-Report 5.11. · Q3-BDC-Daten",
      headline: "Kursverfall lässt Spread bei der Marvell-Lumentum-Fusion auf fast 20 Prozent steigen, Private-Credit-Ausfälle erreichen Rekordwert",
      sec30: "Die am 2.11. vereinbarte All-Stock-Fusion von Marvell und Lumentum (ursprünglich rund 115 Mrd. Dollar Unternehmenswert, Umtauschverhältnis 4,5 Marvell-Aktien je Lumentum-Aktie) steckt durch den starken Kursverfall beider Aktien seit Bekanntwerden in Schwierigkeiten: Der implizite Angebotswert ist von rund 1.132 auf etwa 601 Dollar je Lumentum-Aktie gefallen, der Deal-Spread liegt bei rund 19,7 % – ungewöhnlich hoch für einen bereits unterzeichneten, vorstandsgebilligten Deal. Bank of America stufte Marvell auf „Neutral” herab. Parallel meldet die Ratingagentur KBRA einen Rekordwert von 112 ausfallenden Private-Credit-Kreditnehmern (+22 % ggü. Vorquartal), während nicht börsennotierte BDCs im dritten Quartal 2026 mit 4,1 Mrd. Dollar Netto-Abflüssen das dritte Quartal in Folge mehr Geld verloren als eingesammelt haben.",
      blocks: [
        { h: "Wie steht es um die Marvell-Lumentum-Fusion?", items: [
          { tag: "fakt", text: "Marvell und Lumentum vereinbarten am 2.11.2026 eine All-Stock-Fusion mit einem Umtauschverhältnis von 4,5 Marvell-Aktien je Lumentum-Aktie, ursprünglich mit einem impliziten Angebotswert von rund 1.132 Dollar je Lumentum-Aktie und einem Unternehmenswert von rund 115 Mrd. Dollar bewertet (rund 23,9 % Prämie auf den unbeeinflussten Schlusskurs vom 28.10.). Seit Bekanntwerden ist die Marvell-Aktie massiv gefallen, wodurch der implizite Angebotswert auf rund 601 Dollar je Lumentum-Aktie gesunken ist; Lumentum selbst handelt mit einem Abschlag von rund 19,7 % darauf – ein ungewöhnlich großer Spread für einen bereits unterzeichneten Deal.",
            ask: [{ label: "Was kann bei Übernahmen zwischen Unterzeichnung und Vollzug schiefgehen?", ref: "e:deal-risks" }] }
        ]},
        { h: "Wie reagieren Analysten und Anleger?", items: [
          { tag: "fakt", text: "Bank of America stufte Marvell von „Buy” auf „Neutral” herab und senkte das Kursziel von 400 auf 225 Dollar, mit Verweis auf Verwässerungsrisiken durch die All-Stock-Struktur. Lumentum-Chef Michael Hurlston räumte ein, das Timing des Deals sei „schlecht” gewesen. Anwaltskanzleien für Aktionärsrechte prüfen laut Berichten, ob der Lumentum-Vorstand eine zu niedrige Prämie akzeptiert hat; eine Klage ist bislang nicht bestätigt.",
            ask: [{ label: "Was ist ein EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Wie stark ist der Private-Credit-Markt unter Druck?", items: [
          { tag: "fakt", text: "Die Ratingagentur KBRA meldete für ihren November-Report einen Rekordwert von 112 ausfallenden Private-Debt-Kreditnehmern (+22 % ggü. Vorquartal) unter mehr als 3.000 untersuchten Mittelstandsunternehmen mit zusammen über 1,4 Billionen Dollar Direct-Lending-Schulden; die Ausfallquote nach Kreditnehmerzahl liegt bei rund 3,6 %. Im Lower Middle Market liegt die Ausfallquote mit 5,8 % deutlich höher als im Gesamtportfolio.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }] }
        ]},
        { h: "Was zeigen die BDC-Fundraising-Daten?", items: [
          { tag: "fakt", text: "Nicht börsennotierte BDCs sammelten im dritten Quartal 2026 nur 1,5 Mrd. Dollar ein – 87 % weniger als im Vorjahresquartal und der niedrigste Wert seit Ende 2020 – bei gleichzeitigen Netto-Abflüssen von 4,1 Mrd. Dollar, dem dritten Quartal in Folge mit mehr Rücknahmen als Neugeld. Sponsoren erfüllten im Schnitt nur 40 % der Rücknahmeanträge, geschätzt 8,2 Mrd. Dollar an Anträgen blieben unerfüllt." }
        ]}
      ],
      deal: { value: "~115 Mrd. $ bei Ankündigung; impliziter Wert durch Kursverfall auf rund 601 $ je Lumentum-Aktie gesunken, Deal-Spread ~19,7 %", buyer: "Marvell Technology", target: "Lumentum", sector: "Halbleiter/Optik (KI-Infrastruktur)", type: "All-Stock-Fusion, Abschluss erwartet H1 2028" },
      reaction: "Mehr zu Nvidia und zur KI-Chipbranche in Meldung 14.",
      terms: ["ebitda", "non-accrual", "bdc"],
      followups: ["e:deal-risks", "e:private-credit-what", "e:redemption-limits"],
      sources: [
        { title: "TikR: Marvell's Lumentum deal is dangerously myopic – Lumentum is down 25% in two days", url: "https://www.tikr.com/blog/marvells-lumentum-deal-is-dangerously-myopic-lumentum-is-down-25-in-two-days" },
        { title: "Investing.com: Marvell stock downgraded by BofA on Lumentum deal concerns", url: "https://www.investing.com/news/analyst-ratings/marvell-stock-downgraded-by-bofa-on-lumentum-deal-concerns-93CH-4994008" },
        { title: "AltsWire: Nontraded BDC net outflows reach $4.1B in Q3 as fundraising falls to lowest level since 2020", url: "https://altswire.com/nontraded-bdc-net-outflows-reach-4-1b-in-q3-as-fundraising-falls-to-lowest-level-since-2020/" },
        { title: "Bloomberg: Private credit defaults surge, lower middle-market companies see higher rates", url: "https://www.bloomberg.com/news/articles/2026-11-05/private-credit-defaults-record-largest-quarterly-jump-kbra-says" }
      ]
    },
    /* 14 TECHNOLOGIE: NVIDIA/HUANG/ANTHROPIC */
    {
      id: "nvidia-huang-kongress-anthropic-ipo-ueberzeichnet-11-13", cats: ["tech"], when: "Anhörungen angesetzt 1.-3.12. · Anthropic-Pricing 18.11., Handelsstart 19.11.",
      headline: "Nvidia-Gründer Huang muss vor dem Kongress aussagen, Anthropics Börsengang ist sechsfach überzeichnet",
      sec30: "Der Senatsausschuss für Bankwesen (Vorsitz: Tim Scott) lud Jensen Huang und US-Handelsminister Howard Lutnick für den 3.12. zu einer öffentlichen Anhörung vor, drei Ausschüsse des Repräsentantenhauses für den 1./2.12.; als Grund nennen die Ausschüsse „nationale Sicherheitsbedenken” im Zusammenhang mit Huangs Rücktritt. Singapurs Innenministerium erklärte, es habe nach Prüfung durch die Generalstaatsanwaltschaft nicht genügend Beweise, um die als mutmaßliche Spionin verdächtigte Geschäftsfrau Alice Huang strafrechtlich zu verfolgen – verhängte aber eine Verwarnung und ein Wiedereinreiseverbot. Parallel ist Anthropics Börsengang an der Nasdaq (Preisspanne 70 bis 78 Dollar, Pricing 18.11., Handelsstart 19.11.) nach Berichten rund sechsfach überzeichnet.",
      blocks: [
        { h: "Was ist bei den Kongressanhörungen zu Huang bekannt?", items: [
          { tag: "fakt", text: "Der Vorsitzende des Senatsausschusses für Bankwesen, Tim Scott, forderte Jensen Huang und Handelsminister Howard Lutnick auf, am 3.12.2026 öffentlich vor dem Ausschuss auszusagen, und drohte im Weigerungsfall mit einer Vorladung per Subpoena. Drei Ausschüsse des Repräsentantenhauses luden Huang und Nvidias Chefjustiziar Tim Teter zusätzlich für den 1./2.12. vor. Als Begründung werden „nationale Sicherheitsbedenken” im Zusammenhang mit den Spionagevorwürfen genannt.",
            ask: [{ label: "Mehr zum Rücktritt und zur Marktreaktion", ref: "s:2" }] }
        ]},
        { h: "Was ergab die Prüfung in Singapur?", items: [
          { tag: "unbestaetigt", text: "Singapurs Innenministerium erklärte, Polizei und Generalstaatsanwaltschaft hätten nicht genügend Beweise gefunden, um die als mutmaßliche Spionin verdächtigte Geschäftsfrau Alice Huang wegen der Spionagevorwürfe strafrechtlich zu verfolgen. Sie erhielt dennoch eine förmliche Verwarnung wegen ungenauer Angaben während der Ermittlungen und ein Verbot der Wiedereinreise nach Singapur; Ermittlungen gegen das Unternehmen Megaspeed und sechs weitere Personen laufen laut Singapur weiter. Der eigentliche Spionagevorwurf bleibt damit unbewiesen, aber auch nicht ausgeräumt.",
            ask: [{ label: "Was ist zirkuläre Finanzierung in der KI-Branche?", ref: "e:circular-financing" }] }
        ]},
        { h: "Wer leitet Nvidia aktuell, und wie geht die Suche weiter?", items: [
          { tag: "fakt", text: "Finanzchefin Colette Kress führt Nvidia interimistisch unter Beibehaltung ihres CFO-Titels; der neue Verwaltungsratsvorsitzende Harvey Jones äußerte „volles Vertrauen” in Kress und das Führungsteam. Nvidia erklärte, bislang weder eine Personalberatung beauftragt noch Kandidaten offiziell kontaktiert zu haben; kursierende Namen (intern u. a. Kress selbst, extern u. a. Apple-Chef Tim Cook) bezeichnete das Unternehmen als verfrüht." }
        ]},
        { h: "Wie läuft Anthropics Börsengang?", items: [
          { tag: "fakt", text: "Anthropics Orderbuch war laut Berichten bis zum dritten Tag der Roadshow rund sechsfach überzeichnet – mehr als bei frühen Vergleichswerten wie dem SpaceX-Börsengang. Die Preisspanne liegt weiterhin bei 70 bis 78 Dollar je Aktie (825 Mio. Class-A-Aktien), Pricing ist für den 18.11., der Handelsstart für den 19.11. an der Nasdaq (Ticker: ANT) geplant; rund 20 % der Aktien sind für Privatanleger reserviert. Am oberen Rand der Spanne könnte der Erlös aus Börsengang und begleitender Privatplatzierung zusammen bis zu 90,4 Mrd. Dollar erreichen." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion bei Nvidia, AMD und Broadcom in Meldung 2.",
      terms: ["hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:circular-financing", "e:custom-chips"],
      sources: [
        { title: "Fortune: Senate Banking Committee summons Nvidia's Huang, Commerce's Lutnick", url: "https://fortune.com/2026/11/13/senate-banking-committee-nvidia-jensen-huang-howard-lutnick/" },
        { title: "Al Jazeera: Nvidia's Huang, Lutnick summoned to testify to US Senate", url: "https://www.aljazeera.com/news/2026/11/13/nvidias-huang-lutnick-summoned-to-testify-to-us-senate" },
        { title: "The Star: Singapore says it found insufficient evidence to prosecute Alice Huang", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/13/singapore-says-it-found-insufficient-evidence-to-prosecute-alice-huang-the-alleged-spy-in-nvidia-scandal" },
        { title: "Semafor: Investors are hungry for Anthropic's IPO despite tech pullback", url: "https://www.semafor.com/article/11/13/2026/investors-are-hungry-for-anthropics-ipo-despite-tech-pullback" }
      ]
    },
    /* 15 ENERGIE: BRENT/OPEC+/GASSPEICHER/DUNKELFLAUTE */
    {
      id: "oelpreis-opec-gasspeicher-dunkelflaute-11-13", cats: ["energy"], when: "Brent-Settlement Fr 13.11. · OPEC+-Treffen für 29.11. angesetzt · Dunkelflaute 9./10.11.",
      headline: "Brent fällt zweite Woche in Folge, deutsche Gasspeicher bleiben historisch niedrig, eine Dunkelflaute treibt den Strompreis auf Jahreshoch",
      sec30: "Brent-Rohöl schloss den Freitag bei 95,84 Dollar je Barrel (WTI: 88,56 Dollar) – die zweite Woche in Folge mit einem Rückgang von jeweils rund 2,5 %. OPEC+ bereitet für den 29.11. eine Entscheidung über die Fördermengen für 2027 vor, die auch von einer verzögerten Kapazitätsprüfung abhängt. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.11. bei 57,7 % Füllstand (142,7 TWh) – weiterhin deutlich unter dem Zielwert von 80 % zum 1.11. Eine Dunkelflaute ließ den deutschen Stromtagesdurchschnitt am 10.11. auf 357,56 Euro je Megawattstunde steigen, den höchsten Tageswert des Jahres 2026; der 15-Minuten-Spitzenpreis lag am 9.11. bei über 650 Euro.",
      blocks: [
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "fakt", text: "Brent-Rohöl schloss den Freitag, 13.11.2026, bei 95,84 Dollar je Barrel (+0,02 Dollar), WTI bei 88,56 Dollar (-0,18 Dollar); beide Sorten verzeichneten damit die zweite Woche in Folge einen Rückgang von jeweils rund 2,5 %. US-Diesel fiel am Samstag erstmals seit zwei Monaten unter 6 Dollar je Gallone.",
            ask: [{ label: "Was ist ein Öl-Future?", ref: "t:oil-future" }] }
        ]},
        { h: "Was entscheidet OPEC+ am 29.11.?", items: [
          { tag: "fakt", text: "Die Fördermenge für Dezember bleibt unverändert bei rund 31 Mio. Barrel pro Tag. Am 29.11.2026 trifft sich die vollständige, 21 Länder umfassende OPEC+-Gruppe, um die Fördermengen für 2027 festzulegen – eine weitreichendere Entscheidung als die bisherigen Monatsverlängerungen. Voraussetzung ist eine Kapazitätsprüfung, die ursprünglich Ende September fällig war, sich durch die Kriegsfolgen im Iran aber verzögerte und laut Berichten „in den kommenden Tagen” vor Mitte November abgeschlossen werden sollte. Offen ist, ob die OPEC+ die noch bis Ende 2026 laufenden Förderkürzungen von rund 2 Mio. Barrel pro Tag auslaufen lässt.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie ist die Lage bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.11.2026 bei 57,7 % Füllstand (142,7 TWh) – rund 9 Prozentpunkte unter dem gesetzlichen Zielwert von 80 % zum 1.11. und auf einem 15-Jahres-Tief für diesen Zeitpunkt der Saison. Pipeline-Importe lagen in der Woche vom 5. bis 11.11. bei 17,5 TWh, die Auslastung der LNG-Terminals bei 35,5 %.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] }
        ]},
        { h: "Was geschah bei Strompreis und Dunkelflaute?", items: [
          { tag: "fakt", text: "Eine Dunkelflaute (die Windstromerzeugung brach laut Berichten um rund 90 % ein) ließ den deutschen Stromtagesdurchschnitt am 10.11. auf 357,56 Euro je Megawattstunde steigen – den höchsten Tageswert des Jahres 2026; am 9.11. erreichte der 15-Minuten-Spitzenpreis zeitweise über 650 Euro. Analysen verweisen darauf, dass ausreichend verfügbare Batteriespeicher die Spitze auf rund 388 Euro hätten begrenzen können. Bis zum 14.11. normalisierte sich der Tagesdurchschnitt wieder auf rund 19,8 Cent je Kilowattstunde.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz neuer Tanker-Zwischenfallmeldungen in der Straße von Hormus zurückgeht, während die deutschen Gasspeicher historisch niedrig bleiben und einzelne Dunkelflauten weiterhin zu Preisspitzen führen, zeigt erneut unterschiedliche Treiber: Öl reagiert stärker auf das globale Angebotsbild und die OPEC+-Entscheidung Ende November, Gas und Strom in Deutschland stärker auf saisonale Entnahmen, Wetter und die heimische Erzeugungsstruktur." }
        ]}
      ],
      reaction: "Mehr zu den Tanker-Zwischenfällen in der Straße von Hormus in Meldung 8.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:opec-plus-why", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "EnergyNow: Oil prices fall for second straight week as global supply surplus emerges", url: "https://energynow.com/2026/11/oil-prices-fall-for-second-straight-week-as-global-supply-surplus-emerges-wti-closes-at-88-56-brent-at-95-84/" },
        { title: "Türkiye Today: OPEC pushes capacity review to mid-November as Iran war stalls expansion", url: "https://www.turkiyetoday.com/business/opec-pushes-capacity-review-to-mid-november-as-iran-war-stalls-expansion-report-3229472" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Versorgungssicherheit/aktuelle_gasversorgung/start.html" },
        { title: "Berliner Zeitung: Dunkelflaute treibt Strompreis über 650 Euro", url: "https://www.berliner-zeitung.de/article/dunkelflaute-treibt-strompreis-ueber-650-euro-batterien-haetten-ihn-auf-388-euro-gedrueckt-10582325" },
        { title: "topagrar.com: Windflaute treibt Strompreis auf Jahreshöchststand", url: "https://www.topagrar.com/markt/news/windflaute-treibt-strompreis-auf-jahreshoechststand-20031039.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX schloss den Freitag bei 26.749,95 Punkten (-0,08 %) niedriger als der Zwischenstand vom Vormittag (rund 26.807 Punkte); der Euro Stoxx 50 gab auf 6.386,86 Punkte nach." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Nach dem Rekordlauf der Vorwoche kommt es am Freitag zu Gewinnmitnahmen; zugleich bleibt die Zinsdebatte bei Fed und EZB vor dem Wochenende im Fokus." },
    "yield-meaning": { tag: "fakt", story: 4, text: "Die US-10-Jahres-Rendite schloss bei rund 5,14 % (Tageshoch 5,17 %), die Rendite zehnjähriger Bundesanleihen bei rund 3,37 bis 3,38 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Nach den US-Erzeugerpreisen und mehreren hawkishen Fed-Äußerungen gilt eine Zinserhöhung im Dezember am Terminmarkt weiterhin praktisch als sicher; das belastet tendenziell zinslose Anlagen wie Gold und Bitcoin." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold stieg am Freitagvormittag auf rund 3.914 Dollar, fiel aber bis Handelsschluss auf etwa 3.882 Dollar zurück (+0,14 % ggü. Donnerstag)." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro schloss bei rund 1,1020 Dollar, schwächer als der Donnerstagsschluss von etwa 1,1055 Dollar." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin fiel in der Nacht zu Sonntag auf ein Vier-Monats-Tief von rund 62.000 Dollar, nachdem binnen 24 Stunden mehr als 2 Mrd. Dollar an Positionen zwangsliquidiert wurden." },
    "ppi-what": { tag: "fakt", story: 4, text: "Die US-Erzeugerpreise für Oktober stiegen um 0,3 % zum Vormonat und um 6,5 % im Jahresvergleich – der stärkste Anstieg seit November 2022." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Dass sowohl mehrere Fed-Vertreter als auch Bundesbank-Chef Nagel im November 2026 eine Zinserhöhung im Dezember für wahrscheinlich bis „ziemlich offensichtlich” halten, deutet auf eine ähnliche geldpolitische Debatte auf beiden Seiten des Atlantiks hin." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Vertreter wie John Williams, Austan Goolsbee und Mary Daly bekräftigten nach den Erzeugerpreisdaten ihre Offenheit für eine Zinserhöhung im Dezember; Finanzminister Bessent warnte dagegen vor einem Zinsschritt mitten im Energiepreis-Schock." },
    "ecb-hike": { tag: "position", story: 5, text: "Bundesbank-Chef Nagel nannte eine EZB-Zinserhöhung im Dezember „ziemlich offensichtlich” nötig; eine Reuters-Umfrage sieht alle 71 befragten Ökonomen bei einer Anhebung auf 2,75 % im Dezember." },
    "debt-brake": { tag: "fakt", story: 6, text: "Von den 122,97 Mrd. Euro Nettokreditaufnahme im Kernhaushalt 2027 entfallen 84,55 Mrd. Euro auf die Ausnahme für Verteidigungsausgaben von der Schuldenbremse." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Haushaltsausschuss billigte den Bundeshaushalt 2027 mit 122,97 Mrd. Euro Nettokreditaufnahme; die Stromsteuersenkung bleibt ungeklärt und soll am 17.11. im Koalitionsausschuss verhandelt werden." },
    "rente-basics": { tag: "fakt", story: 7, text: "Arbeitsminister Schweitzer bezeichnet den Rentenreform-Gesetzentwurf als „zu 95 Prozent fertig”; strittig bleibt die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren." },
    "coalition-majority": { tag: "fakt", story: 7, text: "Das ZDF-Politbarometer vom 13.11. sah die AfD bei 28 %, die Union bei 22 %; die aktuelle Koalition hätte laut der Umfrage keine Bundestagsmehrheit." },
    "nato-target": { tag: "fakt", story: 11, text: "Hensoldt hob sein Umsatzziel für 2035 auf 10 Mrd. Euro an; in der zweiten SAFE-Finanzierungsrunde haben alle 19 teilnehmenden EU-Staaten Kreditvereinbarungen über 21,3 Mrd. Euro genehmigt." },
    "defence-order": { tag: "fakt", story: 11, text: "Belgien bestellte bei Rheinmetall 20 Skyranger-30-Flugabwehrsysteme; RENK meldete einen Rekord-Auftragsbestand von 7,6 Mrd. Euro." },
    "defence-stocks": { tag: "fakt", story: 10, text: "Die Rheinmetall-Aktie fiel am 13.11. zeitweise auf ein 52-Wochen-Tief von 742,50 Euro – laut JPMorgan die fünfte Gewinnwarnung binnen elf Monaten." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Der Bund zahlt Berichten zufolge rund 6,6 Mrd. Euro für einen 50-Prozent-Anteil an KNDS; ein unterzeichneter Vertrag liegt noch nicht vor." },
    "deal-risks": { tag: "fakt", story: 13, text: "Der implizite Angebotswert der Marvell-Lumentum-Fusion ist durch den Kursverfall von rund 1.132 auf etwa 601 Dollar je Lumentum-Aktie gesunken, der Deal-Spread liegt bei rund 19,7 %." },
    "private-credit-what": { tag: "fakt", story: 13, text: "KBRA meldet einen Rekordwert von 112 ausfallenden Private-Credit-Kreditnehmern, ein Plus von 22 % gegenüber dem Vorquartal." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Nicht börsennotierte BDCs verzeichneten im dritten Quartal 2026 Netto-Abflüsse von 4,1 Mrd. Dollar – das dritte Quartal in Folge." },
    "ai-capex": { tag: "fakt", story: 14, text: "Anthropics Orderbuch für den Börsengang war bis zum dritten Roadshow-Tag rund sechsfach überzeichnet; Pricing ist für den 18.11. geplant." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "Singapur fand nicht genügend Beweise, um die als Spionin verdächtigte Geschäftsfrau im Nvidia-Fall strafrechtlich zu verfolgen, verbot ihr aber die Wiedereinreise; der eigentliche Spionagevorwurf bleibt unbewiesen." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 8, text: "Irans Marine meldete am 14.11. brennende Tanker nach Minentreffern in der Straße von Hormus; Reuters konnte die Angaben nicht unabhängig bestätigen." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Iran wies Berichte über ein geplantes Treffen zwischen US-Vizepräsident Vance und Sicherheitsratschef Rezaei in Doha als „erfunden” zurück." },
    "gas-ttf": { tag: "unbestaetigt", story: 15, text: "Der europäische Gaspreis TTF wird fürs Wochenende je nach Quelle zwischen rund 84 und 91 Euro je Megawattstunde angegeben." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.11. bei 57,7 % Füllstand – rund 9 Prozentpunkte unter dem Zielwert von 80 % zum 1.11." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ entscheidet am 29.11. über die Fördermengen für 2027; die Fördermenge für Dezember bleibt bei rund 31 Mio. Barrel pro Tag unverändert." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 4,
      q: "Wie fielen die US-Erzeugerpreise (PPI) für Oktober 2026 im Monats- und im Jahresvergleich aus?",
      options: [
        "+0,3 % zum Vormonat, +6,5 % im Jahresvergleich – der stärkste Jahresanstieg seit November 2022",
        "-0,3 % zum Vormonat, keine Jahresrate veröffentlicht",
        "+1,0 % zum Vormonat, +2,1 % im Jahresvergleich",
        "Die Erzeugerpreise wurden wegen eines Regierungsstillstands gar nicht veröffentlicht"
      ],
      answer: 0,
      explain: "Die Erzeugerpreise stiegen im Oktober um 0,3 % gegenüber dem Vormonat und um 6,5 % im Jahresvergleich – den stärksten Anstieg seit November 2022. Mehrere Fed-Vertreter werteten dies als weiteres Argument für eine Zinserhöhung im Dezember."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Welche Ausschüsse haben Jensen Huang nach seinem Rücktritt als Nvidia-CEO zu Anhörungen vorgeladen, und wann?",
      options: [
        "Nur ein EU-Ausschuss, Termin noch offen",
        "Der Senatsausschuss für Bankwesen (3.12.) und drei Ausschüsse des Repräsentantenhauses (1./2.12.)",
        "Gar keine, Huang hat sich freiwillig gemeldet",
        "Nur ein chinesisches Gericht"
      ],
      answer: 1,
      explain: "Senatsausschuss-Chef Tim Scott lud Huang und Handelsminister Lutnick für den 3.12. vor, drei Ausschüsse des Repräsentantenhauses für den 1./2.12. – mit Verweis auf nationale Sicherheitsbedenken."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Wie hoch ist die vom Haushaltsausschuss gebilligte Nettokreditaufnahme im Kernhaushalt 2027, und welcher Teil entfällt auf die Verteidigungsausnahme von der Schuldenbremse?",
      options: [
        "97,96 Mrd. Euro insgesamt, keine Ausnahme",
        "560,9 Mrd. Euro insgesamt, komplett über die Ausnahme",
        "122,97 Mrd. Euro insgesamt, davon 84,55 Mrd. Euro über die Verteidigungsausnahme",
        "38,43 Mrd. Euro insgesamt, davon die Hälfte über die Ausnahme"
      ],
      answer: 2,
      explain: "Die Nettokreditaufnahme liegt bei 122,97 Mrd. Euro, davon 84,55 Mrd. Euro über die seit 2025 geltende Ausnahme für Verteidigungsausgaben; die zugesagte Stromsteuersenkung ist darin nicht finanziert."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, Reuters hätte die iranischen Berichte über verminte Tanker in der Straße von Hormus unabhängig bestätigen können, statt dass sie unbestätigt blieben. Was wäre dadurch für den Brent-Preis unter sonst gleichen Bedingungen wahrscheinlicher geworden?",
      options: [
        "Der Ölpreis wäre eher gesunken, weil die Nachfrage automatisch zurückgeht",
        "Es gibt grundsätzlich keinen Zusammenhang zwischen Tankervorfällen und dem Ölpreis",
        "Der Ölpreis wäre eher gestiegen, weil ein bestätigter Angriff auf eine zentrale Öltransportroute die Versorgungssicherheit stärker belastet hätte",
        "Nur der Goldpreis hätte reagiert, der Ölpreis nicht"
      ],
      answer: 2,
      explain: "Eine unabhängig bestätigte Eskalation in der Straße von Hormus würde die Versorgungssicherheit stärker infrage stellen und den Ölpreis tendenziell nach oben treiben; weil die Berichte unbestätigt blieben, reagierte Brent am Wochenende kaum."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Die Fed-Zinsen bleiben 2026 hoch, und viele private Kreditnehmer zahlen variable Zinsen auf Basis von SOFR. Was wird dadurch für die Zahl der Private-Credit-Ausfälle unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Ausfälle werden unwahrscheinlicher, weil hohe Zinsen Kreditgeber automatisch vorsichtiger machen",
        "Es gibt keinen Zusammenhang zwischen Notenbankzinsen und Private-Credit-Ausfällen",
        "Nur der Aktienmarkt reagiert auf Zinsänderungen, der Kreditmarkt nicht",
        "Die Ausfälle werden wahrscheinlicher, weil höhere SOFR-Zinsen die Zinslast variabel verzinster Kredite erhöhen"
      ],
      answer: 3,
      explain: "Viele Private-Credit-Kredite sind variabel verzinst (SOFR + Aufschlag); bleiben die Leitzinsen hoch, steigt die Zinslast der Kreditnehmer, was die Wahrscheinlichkeit von Ausfällen erhöht – passend zum von KBRA gemeldeten Rekordwert von 112 ausfallenden Kreditnehmern."
    }
  ]
};
