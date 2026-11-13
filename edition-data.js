// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-13",
  dateLabel: "Freitag, 13. November 2026",
  updatedLabel: "Recherchestand 13.11.2026",
  marketNote: "Diese Ausgabe entsteht am Freitagvormittag/-mittag, 13.11.2026. DAX und Euro Stoxx 50 zeigen den Zwischenstand des laufenden Freitagshandels gegen 12:15 Uhr (nicht den Schlusskurs); S&P 500, Nasdaq Composite und Dow Jones zeigen dagegen noch den Schlusskurs vom Donnerstag, 12.11.2026, da der US-Handel erst um 15:30 Uhr MEZ beginnt. Die US-Erzeugerpreise (PPI) für Oktober werden erst um 14:30 Uhr MEZ veröffentlicht und waren zum Redaktionsschluss dieser Ausgabe noch nicht erschienen; mehrere Werte (insbesondere EUR/USD, Gold, die US-Rendite und der Bund-Zins) können sich im Tagesverlauf danach noch ändern. Bei Brent und beim europäischen Gaspreis TTF weichen einzelne Quellen je nach Erhebungszeitpunkt und Kontraktmonat spürbar voneinander ab; das ist im Folgenden jeweils kenntlich gemacht. Nur Bitcoin handelt durchgehend.",

  top: [
    { text: "Der US-Verbraucherpreisindex für Oktober fällt am 10.11. mit +0,4 % in der Gesamtrate und +0,3 % im Kernwert heißer aus als erwartet; Fed-Vertreter wie Christopher Waller und Lorie Logan signalisieren daraufhin eine Zinserhöhung im Dezember, die Terminmärkte sehen eine Erhöhung inzwischen als nahezu sicher an.", ref: "s:4" },
    { text: "Nvidia-Gründer Jensen Huang tritt am 12.11. nach 33 Jahren als Präsident, CEO und Boardmitglied zurück, nachdem Berichte über eine Affäre mit einer mutmaßlich chinesischen Geschäftsfrau und eine FBI-Prüfung bekannt wurden; interimistisch übernimmt Finanzchefin Colette Kress, während Anthropics Börsengang mit einer Bewertung von bis zu 1,4 Billionen Dollar für den 19.11. vorbereitet wird.", ref: "s:14" },
    { text: "Der Haushaltsausschuss des Bundestags billigt in einer bis Freitagfrüh dauernden Sitzung den Bundeshaushalt 2027 mit einer Nettokreditaufnahme von 122,97 Mrd. Euro im Kernhaushalt; die Opposition kritisiert die Schuldenpolitik, offen bleibt weiterhin die im Koalitionsvertrag zugesagte Stromsteuersenkung.", ref: "s:7" },
    { text: "Präsident Trump erklärt am 12.11., die USA bräuchten „keinen Deal” mehr mit dem Iran, nachdem Katar zuvor einen Vorschlag zur Öffnung der Straße von Hormus vermittelt hatte; der Brent-Ölpreis zieht daraufhin deutlich an, während die Ukraine- und Russland-Delegationen nach den Abu-Dhabi-Gesprächen einen Gefangenenaustausch von 314 Kriegsgefangenen vollziehen.", ref: "s:10" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.807 Pkt.", change: "+0,1 % ggü. Donnerstagsschluss (26.771,88 Pkt.)", dir: "up", asof: "Zwischenstand Fr 13.11.26, ca. 12:15 Uhr", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als beim letzten Stand.",
      compare: [
        { label: "Donnerstag", text: "Der DAX hatte am Donnerstag mit 27.001,67 Punkten erstmals die Marke von 27.000 Punkten überschritten, fiel aber bis Handelsschluss auf 26.771,88 Punkte (+0,41 %) zurück." }
      ],
      moved: {
        intro: "Als Hintergrund für die Konsolidierung am Freitag nennen Berichte:",
        items: [
          "Nach dem Rekordlauf der Vortage kommt es laut Berichten zu Gewinnmitnahmen; Versicherer wie Munich Re, Hannover Rück und Allianz (jeweils rund +1,0 bis +1,3 %) sowie Eon (+1,9 % wegen Spekulationen um den Urenco-Anteil) stützen den Index zugleich.",
          "Auf Wochensicht liegt der DAX weiterhin deutlich im Plus (rund +4 %); Anleger halten sich laut Berichten vor den US-Erzeugerpreisen am Nachmittag zurück."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur heißen US-Inflation und der Zinsdebatte bei Fed und EZB in Meldung 4 und 5.", ref: "s:4" }
      ],
      source: { title: "ariva.de: Aktien Frankfurt – Atempause nach Rekordhoch beim Dax", url: "https://www.ariva.de/news/aktien-frankfurt-atempause-nach-rekordhoch-beim-dax-12206503" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.410 Pkt.", change: "+0,1 bis +0,2 % ggü. Donnerstagsschluss (6.409,55 bzw. 6.414,70 Pkt., Quellen leicht abweichend)", dir: "up", asof: "Zwischenstand Fr 13.11.26, ca. 12:09–12:30 Uhr", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Donnerstag", text: "Der Index war am Donnerstag ebenfalls leicht gestiegen und schloss zwischen 6.409,55 und 6.414,70 Punkten (Quellen nennen leicht unterschiedliche Werte)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den zurückhaltenden Freitagshandel:",
        items: [
          "Anleger warten laut Berichten auf die US-Erzeugerpreise am Nachmittag; gleichzeitig stützen steigende Anleiherenditen in Erwartung einer möglichen EZB-Zinserhöhung im Dezember Bankwerte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Aussagen von EZB-Chefökonom Lane und Bundesbank-Chef Nagel zu einer Dezember-Erhöhung in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "ariva.de: Aktien Europa – Zurückhaltendes Geschäft vor US-Preisdaten", url: "https://www.ariva.de/news/aktien-europa-zurueckhaltendes-geschaeft-vor-us-preisdaten-12206526" }
    },
    "sp500": {
      label: "S&P 500", value: "7.592,40 Pkt.", change: "-0,4 % bzw. -26,98 Pkt. ggü. Mittwoch", dir: "down", asof: "Schluss Do 12.11.26 (letzter verfügbarer Schlusskurs)", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Woche", text: "Der S&P 500 war in den Tagen zuvor überwiegend gestiegen; der Rückgang am Donnerstag beendete diese Serie vorerst." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang am Donnerstag nennen Berichte:",
        items: [
          "Nvidias Führungswechsel verunsicherte Technologiewerte, nachdem CEO Jensen Huang am 12.11. zurückgetreten war; gleichzeitig belasteten steigende Anleiherenditen nach der heißen US-Inflation vom Dienstag den Gesamtmarkt.",
          "Steigende Ölpreise im Zuge der Iran-Rhetorik von Präsident Trump drückten zusätzlich auf die Stimmung; mehr dazu in Meldung 10 und 14."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die am Terminmarkt eingepreiste Wahrscheinlichkeit für eine Fed-Zinserhöhung im Dezember liegt laut Berichten bei fast 100 %; mehr in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Yahoo Finance: How major US stock indexes fared Thursday 11/12/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-211731317.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.366,09 Pkt.", change: "-0,39 % bzw. -100,10 Pkt. ggü. Mittwoch", dir: "down", asof: "Schluss Do 12.11.26", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Nvidia", text: "Die Nvidia-Aktie fiel am Donnerstag um 4,3 % auf 166,19 Dollar (Tagestief unter 150 Dollar) – deutlich unter dem Oktober-Rekordhoch von rund 243 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Nvidias Führungswechsel nach Jensen Huangs Rücktritt belastete Technologiewerte; AMD (+5,9 % auf 562,44 Dollar) und Broadcom (+5,5 % auf rund 364 Dollar) profitierten dagegen von einer Verschiebung des Vertrauens zu konkurrierenden Chipherstellern.",
          "Steigende Anleiherenditen nach der heißen US-Inflation erhöhten zusätzlich den Abwertungsdruck auf hoch bewertete Technologiewerte."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Huangs Rücktritt und zur Chipbranche in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "eurasiabusinessnews.com: Stock Market Today, November 12, 2026 – Dow, S&P 500 and Nasdaq Fall After Jensen Huang Resigns", url: "https://eurasiabusinessnews.com/2026/11/13/stock-market-today-november-12-2026-dow-sp-500-and-nasdaq-fall-after-jensen-huang-resigns/" }
    },
    "dow": {
      label: "Dow Jones", value: "52.297,09 Pkt.", change: "-0,4 % bzw. -189,40 Pkt. ggü. Mittwoch", dir: "down", asof: "Schluss Do 12.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Woche", text: "Der Dow folgte am Donnerstag der breiten Risikoabwägung der anderen US-Indizes nach unten, nachdem er in den Tagen zuvor zugelegt hatte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die allgemeine Verunsicherung durch Nvidias Führungswechsel und steigende Anleiherenditen belastete auch die stärker industriell geprägten Dow-Werte."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu Trumps Kehrtwende bei der Iran-Diplomatie und zum steigenden Ölpreis in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "WTOP: How major US stock indexes fared Thursday 11/12/2026", url: "https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-thursday-11-12-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1058", change: "+0,03 % ggü. Donnerstagabend (≈ 1,1055)", dir: "flat", asof: "Stand Fr 13.11.26, Vormittag", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,11 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar stärker.",
      compare: [
        { label: "Monat", text: "Der Euro hat gegenüber dem Dollar in den vergangenen vier Wochen laut Berichten rund 0,9 % verloren und liegt binnen zwölf Monaten etwa 4,8 % niedriger." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den nahezu unveränderten Kurs:",
        items: [
          "Händler halten sich vor den US-Erzeugerpreisen am Nachmittag zurück; sowohl Fed als auch EZB signalisieren derzeit Offenheit für eine Zinserhöhung im Dezember, was beide Währungen stützt (mehr in Meldung 4 und 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.", ref: "s:5" }
      ],
      source: { title: "ariva.de: Devisen – Eurokurs vor US-Erzeugerpreisdaten stabil", url: "https://ariva.de/news/devisen-eurokurs-vor-us-erzeugerpreisdaten-stabil-12206391" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,13 %", change: "+0,02 Prozentpunkte ggü. Donnerstag; binnen einer Woche von rund 4,82 % auf über 5 % gestiegen", dir: "up", asof: "Stand Fr 13.11.26, vormittags (US-Erzeugerpreise erst 14:30 Uhr MEZ)", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,13 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,13 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; am Terminmarkt gilt eine Zinserhöhung im Dezember inzwischen als nahezu sicher (mehr in Meldung 4)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg seit Dienstag:",
        items: [
          "Der heißer als erwartet ausgefallene US-Verbraucherpreisindex für Oktober (+0,4 % Gesamtrate, +0,3 % Kernrate) sowie hawkishe Äußerungen mehrerer Fed-Vertreter ließen die Rendite zehnjähriger US-Anleihen binnen einer Woche von rund 4,82 % auf über 5 % steigen; zusätzlich belasteten steigende Ölpreise."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung im Dezember und zu den Fed-Äußerungen in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields rise as traders strengthen Fed rate hike bets", url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,37 %", change: "leicht höher ggü. Donnerstag", dir: "up", asof: "Stand Fr 13.11.26, vormittags", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,13 % weiterhin deutlich über der Bund-Rendite." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Aussicht auf steigende Zinsen auf beiden Seiten des Atlantiks belastet den Bund-Markt; EZB-Chefökonom Lane nannte eine weitere Zinserhöhung im Dezember „prudent”, Bundesbank-Chef Nagel bezeichnete sie als „ziemlich offensichtlich” nötig (mehr in Meldung 5). Die US-Erzeugerpreise am Nachmittag gelten als nächster wichtiger Markttreiber."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und zur Eurozonen-Inflation von 4,0 % in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "onvista.de: Deutsche Anleihen – Stabilisierungsversuch, US-Erzeugerpreise im Blick", url: "https://www.onvista.de/news/2026/11-13-deutsche-anleihen-stabilisierungsversuch-us-erzeugerpreise-im-blick-0-10-26576104" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.914 $", change: "+0,96 % ggü. Donnerstag", dir: "up", asof: "Stand Fr 13.11.26, vormittags", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 3.900 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Donnerstag", text: "Der Goldpreis war am Donnerstag deutlich unter die Marke von 4.000 Dollar gefallen; der Freitagsanstieg ist laut Berichten eine erste Gegenbewegung." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Erholung:",
        items: [
          "Nach dem starken Rückgang der Vortage nutzen laut Berichten einige Anleger das niedrigere Niveau zu Käufen; grundsätzlich bleibt der zinslose Goldpreis aber durch die Aussicht auf Zinserhöhungen bei Fed und EZB belastet."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.", ref: "s:4" }
      ],
      source: { title: "goldesel.de: Gold – Preis erholt sich um 0,96 Prozent auf 3.914 Dollar", url: "https://goldesel.de/aktien/news/gold-aktie-preis-erholt-sich-um-096-prozent-auf-3914-dollar" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 95,8 $ (Spanne 95,5–96,3 $ je Zeitpunkt/Quelle)", change: "leicht niedriger ggü. Donnerstag, nach +3,3 % am Mittwoch", dir: "down", asof: "Stand Fr 13.11.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Der Preis liegt weiterhin gut 50 % über dem Niveau vor einem Jahr, als der Iran-Konflikt eskalierte.",
      compare: [
        { label: "Woche", text: "Brent war am Dienstag auf rund 93,50 Dollar gestiegen (+2,3 %) und zog am Mittwoch nach Trumps Äußerung zum Iran auf rund 95,80 Dollar weiter an (+3,3 %); binnen 30 Tagen ist der Preis dennoch um rund 9 % gefallen." }
      ],
      moved: {
        intro: "Als Hintergrund für die leicht nachgebenden Notierungen am Freitag nennen Berichte:",
        items: [
          "Die Internationale Energieagentur (IEA) meldete am 13.11. erstmals seit Beginn des Iran-Kriegs einen möglichen Angebotsüberschuss am Ölmarkt: Das globale Angebot stieg im Oktober um 2,3 Mio. Barrel pro Tag auf 105,4 Mio. Barrel, für das vierte Quartal wird ein Überschuss von rund 2 Mio. Barrel pro Tag erwartet.",
          "Dem steht die anhaltende Unsicherheit um die Straße von Hormus und Trumps Absage an einen Iran-Deal entgegen; mehr dazu in Meldung 10."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu Trumps Kehrtwende bei der Iran-Diplomatie in Meldung 10.", ref: "s:10" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "Invezz: Oil price today – Brent holds near $96 as IEA sees first surplus since Iran war", url: "https://invezz.com/news/2026/11/13/oil-price-today-brent-holds-near-96-as-iea-sees-first-surplus-since-iran-war/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 68.700–69.000 $ (zwischenzeitlich bis 67.568 $)", change: "-6 bis -6,6 % binnen 24 Stunden", dir: "down", asof: "Stand Fr 13.11.26, früher Morgen", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 69.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Schwelle", text: "Bitcoin fiel in der Nacht zu Freitag erstmals seit dem 19. August wieder unter 70.000 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Eine neue Liquidationswelle erfasste laut Berichten mehr als 175.000 Trader; binnen 24 Stunden wurden Positionen im Wert von rund 1,3 bis 1,47 Mrd. Dollar zwangsliquidiert. Als Hintergrund gelten verstärkte Risikoscheu und ein stärkerer Dollar im Zuge der Zinserwartungen."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "cryptoticker.io: Crypto news – bitcoin down 6%, $1.3 billion liquidated", url: "https://cryptoticker.io/en/crypto-news-bitcoin-crash-liquidations-etf-outflows-november-13-2026" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 */
    {
      id: "markets-freitag-dax-eurostoxx-atempause-11-13", cats: ["markets"], when: "Zwischenstand Fr 13.11.2026, mittags",
      headline: "DAX und Euro Stoxx 50 pausieren knapp im Plus, nachdem der DAX erstmals über 27.000 Punkte gestiegen war",
      sec30: "Der DAX legte am Freitag bis zum Mittag um rund 0,1 % auf etwa 26.807 Punkte zu, nachdem er am Donnerstag erstmals die Marke von 27.000 Punkten überschritten hatte (Tageshoch 27.001,67 Punkte), zum Handelsschluss aber auf 26.771,88 Punkte zurückgefallen war. Der Euro Stoxx 50 stieg leicht auf rund 6.410 Punkte. Als Hintergrund nennen Berichte Gewinnmitnahmen nach dem Rekordlauf sowie eine zurückhaltende Positionierung vor den US-Erzeugerpreisen am Nachmittag.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stand gegen 12:15 Uhr bei rund 26.807 Punkten, ein Plus von etwa 0,1 % gegenüber dem Donnerstagsschluss (26.771,88 Punkten). Der Euro Stoxx 50 lag gegen 12:09 bis 12:30 Uhr je nach Quelle zwischen 6.408 und 6.410 Punkten, ebenfalls leicht im Plus.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was war am Donnerstag passiert?", items: [
          { tag: "fakt", text: "Der DAX überschritt am Donnerstag erstmals in seiner Geschichte die Marke von 27.000 Punkten (Tageshoch 27.001,67 Punkte), gab die Gewinne bis Handelsschluss aber teils wieder ab und schloss bei 26.771,88 Punkten (+0,41 %). Als Treiber des Rekordlaufs nennen Berichte zuvor fallende Ölpreise, solide Unternehmenszahlen und aufkommenden Konjunkturoptimismus." }
        ]},
        { h: "Was nennen Berichte als Grund für die Freitags-Pause?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen die Atempause auf Gewinnmitnahmen nach dem Rekordlauf zurück; Versicherer wie Munich Re, Hannover Rück und Allianz sowie Eon (gestützt von Spekulationen um den Urenco-Anteil) wirkten dem am Freitag entgegen. Auf Wochensicht liegt der DAX weiterhin rund 4 % im Plus." }
        ]},
        { h: "Worauf warten Anleger noch?", items: [
          { tag: "fakt", text: "Die US-Erzeugerpreise (PPI) für Oktober werden erst um 14:30 Uhr MEZ veröffentlicht. Zudem bleibt die Zinsdebatte bei Fed und EZB im Fokus, nachdem die US-Inflation am Dienstag heißer als erwartet ausgefallen war.",
            ask: [{ label: "Mehr zur US-Inflation und zur Fed", ref: "s:4" }, { label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 nach dem Rekordlauf der Vortage nur noch knapp zulegen, deutet darauf hin, dass Anleger vor den US-Erzeugerpreisen und der laufenden Zinsdebatte vorsichtiger agieren als zuletzt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Donnerstag werden in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, die US-Inflation und die Fed-Zinsdebatte in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ariva.de: Aktien Frankfurt – Atempause nach Rekordhoch beim Dax", url: "https://www.ariva.de/news/aktien-frankfurt-atempause-nach-rekordhoch-beim-dax-12206503" },
        { title: "ariva.de: Aktien Europa – Zurückhaltendes Geschäft vor US-Preisdaten", url: "https://www.ariva.de/news/aktien-europa-zurueckhaltendes-geschaeft-vor-us-preisdaten-12206526" },
        { title: "ad-hoc-news.de: DAX schließt bei 26.771,88 Punkten – Rekord über 27.000 im Handel", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-bei-26-771-88-punkten-rekord-ueber-27-000-im-handel/70503404" },
        { title: "finanzen.at: Aktien Frankfurt – Konjunkturhoffnung treibt Dax erstmals über 27.000 Punkte", url: "https://www.finanzen.at/nachrichten/aktien/aktien-frankfurt-konjunkturhoffnung-treibt-dax-erstmals-ueber-27-000-punkte-1036755112" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS DONNERSTAG */
    {
      id: "us-wallstreet-donnerstag-nvidia-huang-ruecktritt-11-12", cats: ["markets"], when: "Schluss Do 12.11.2026",
      headline: "Nasdaq, S&P 500 und Dow schließen den Donnerstag im Minus, belastet von Nvidias Führungswechsel und steigenden Renditen",
      sec30: "Der S&P 500 gab am Donnerstag um 0,4 % auf 7.592,40 Punkte nach, die Nasdaq Composite um 0,39 % auf 25.366,09 Punkte, der Dow Jones um 0,4 % auf 52.297,09 Punkte. Treiber war laut Berichten vor allem der überraschende Rücktritt von Nvidia-CEO Jensen Huang, der die Nvidia-Aktie um 4,3 % auf 166,19 Dollar drückte, während AMD (+5,9 %) und Broadcom (+5,5 %) zulegten. Zusätzlich belasteten steigende Anleiherenditen nach der heißen US-Inflation vom Dienstag sowie steigende Ölpreise im Zuge der Iran-Rhetorik von Präsident Trump.",
      blocks: [
        { h: "Wie schlossen Nasdaq, S&P 500 und Dow am Donnerstag?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 0,4 % (-26,98 Punkte) auf 7.592,40 Punkte, die Nasdaq Composite um 0,39 % (-100,10 Punkte) auf 25.366,09 Punkte, der Dow Jones um 0,4 % (-189,40 Punkte) auf 52.297,09 Punkte.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Wie reagierte die Nvidia-Aktie auf Huangs Rücktritt?", items: [
          { tag: "fakt", text: "Die Nvidia-Aktie fiel am Donnerstag um 4,3 % auf 166,19 Dollar, im Tagesverlauf zeitweise unter 150 Dollar – deutlich unter dem Oktober-Rekordhoch von rund 243 Dollar. Jensen Huang war am selben Tag nach 33 Jahren als Präsident, CEO und Boardmitglied zurückgetreten.",
            ask: [{ label: "Mehr zum Rücktritt und zur Chipbranche", ref: "s:14" }] }
        ]},
        { h: "Wer profitierte von der Verunsicherung bei Nvidia?", items: [
          { tag: "fakt", text: "AMD stieg um 5,86 % auf 562,44 Dollar, Broadcom um 5,54 % auf rund 364 Dollar. Analysten begründeten dies laut Berichten mit einer Verschiebung des Anlegervertrauens zu konkurrierenden Chipherstellern." }
        ]},
        { h: "Welche weiteren Faktoren belasteten den Markt?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen zog nach der heißer als erwartet ausgefallenen Oktober-Inflation weiter an und näherte sich der Marke von 5 %. Gleichzeitig stiegen die Ölpreise, nachdem Präsident Trump erklärt hatte, die USA bräuchten keinen Deal mit dem Iran (mehr in Meldung 4 und 10)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Nasdaq, S&P 500 und Dow trotz der Kursgewinne bei AMD und Broadcom insgesamt nachgaben, deutet darauf hin, dass Anleger den Führungswechsel bei Nvidia als Risiko für die gesamte KI-Branche werten und nicht nur als unternehmensspezifisches Thema. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Reaktion in Europa wird in Meldung 1 behandelt, Gold/Bitcoin/Euro in Meldung 3, die US-Inflation und die Fed-Zinsdebatte in Meldung 4, Huangs Rücktritt im Detail in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "Yahoo Finance: How major US stock indexes fared Thursday 11/12/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-211731317.html" },
        { title: "eurasiabusinessnews.com: Stock Market Today, November 12, 2026 – Dow, S&P 500 and Nasdaq Fall After Jensen Huang Resigns", url: "https://eurasiabusinessnews.com/2026/11/13/stock-market-today-november-12-2026-dow-sp-500-and-nasdaq-fall-after-jensen-huang-resigns/" },
        { title: "WTOP: How major US stock indexes fared Thursday 11/12/2026", url: "https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-thursday-11-12-2026" },
        { title: "CNBC: Nasdaq Composite slides as Nvidia shares tumble on Jensen Huang's exit; oil prices jump", url: "https://www.cnbc.com/2026/11/11/stock-market-today-live-updates.html" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN */
    {
      id: "gold-bitcoin-eurusd-anleihen-freitag-11-13", cats: ["markets"], when: "Stand Fr 13.11.2026",
      headline: "Gold erholt sich leicht, Bitcoin fällt unter 70.000 Dollar, Anleiherenditen bleiben nach der heißen US-Inflation erhöht",
      sec30: "Gold stieg am Freitag um rund 0,96 % auf etwa 3.914 Dollar je Feinunze, nachdem es am Donnerstag deutlich unter die Marke von 4.000 Dollar gefallen war. Bitcoin fiel dagegen in der Nacht zu Freitag erstmals seit dem 19. August wieder unter 70.000 Dollar und notiert rund 6 bis 6,6 % niedriger als am Vortag, nachdem mehr als 1,3 Mrd. Dollar an Positionen zwangsliquidiert wurden. Der Euro bewegte sich kaum gegenüber dem Dollar (≈1,1058). Die US-10-Jahres-Rendite liegt bei rund 5,13 %, nachdem sie binnen einer Woche von rund 4,82 % auf über 5 % gestiegen war; die Rendite zehnjähriger Bundesanleihen lag bei rund 3,37 %.",
      blocks: [
        { h: "Wie haben sich Gold und Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Freitagvormittag um rund 0,96 % auf etwa 3.914 Dollar je Feinunze, nachdem der Preis am Donnerstag deutlich unter 4.000 Dollar gefallen war. Bitcoin fiel in der Nacht zu Freitag zeitweise bis auf 67.568 Dollar – den niedrigsten Stand seit dem 19. August – und notiert aktuell zwischen rund 68.700 und 69.000 Dollar, 6 bis 6,6 % niedriger als 24 Stunden zuvor.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }, { label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Nach dem starken Rückgang der Vortage nutzen laut Berichten einige Anleger das niedrigere Goldniveau zu Käufen. Bei Bitcoin erfasste eine neue Liquidationswelle laut Berichten mehr als 175.000 Trader; als Hintergrund gelten verstärkte Risikoscheu und ein stärkerer Dollar im Zuge der Zinserwartungen bei Fed und EZB." }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro bewegte sich mit rund 1,1058 Dollar kaum gegenüber dem Vortag. Die US-10-Jahres-Rendite liegt bei rund 5,13 % und damit binnen einer Woche gut 0,3 Prozentpunkte höher als am vergangenen Dienstag (≈4,82 %); die Rendite zehnjähriger Bundesanleihen stieg ebenfalls leicht auf rund 3,37 %.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die US-Rendite in der vergangenen Woche so deutlich gestiegen ist, während Gold und Bitcoin unter Druck gerieten, passt zum klassischen Muster: Wird eine Zinserhöhung wahrscheinlicher, werden festverzinsliche Anlagen attraktiver, während zinslose oder renditefreie Anlagen wie Gold und Bitcoin tendenziell weniger gefragt sind. Die US-Erzeugerpreise am Nachmittag können diese Bewegung noch verstärken oder abschwächen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX/Euro Stoxx 50 wird in Meldung 1 behandelt, die US-Schlusskurse in Meldung 2, die US-Inflation und die Fed-Zinsdebatte in Meldung 4, die EZB-Zinsdebatte in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "goldesel.de: Gold – Preis erholt sich um 0,96 Prozent auf 3.914 Dollar", url: "https://goldesel.de/aktien/news/gold-aktie-preis-erholt-sich-um-096-prozent-auf-3914-dollar" },
        { title: "cryptoticker.io: Crypto news – bitcoin down 6%, $1.3 billion liquidated", url: "https://cryptoticker.io/en/crypto-news-bitcoin-crash-liquidations-etf-outflows-november-13-2026" },
        { title: "ariva.de: Devisen – Eurokurs vor US-Erzeugerpreisdaten stabil", url: "https://ariva.de/news/devisen-eurokurs-vor-us-erzeugerpreisdaten-stabil-12206391" },
        { title: "CNBC: Treasury yields rise as traders strengthen Fed rate hike bets", url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html" }
      ]
    },
    /* 4 WIRTSCHAFT: FED/CPI */
    {
      id: "fed-cpi-oktober-zinserhoehung-dezember-11-13", cats: ["economy"], when: "US-Inflationsbericht Di 10.11. · FOMC-Sitzung 8./9.12.2026",
      headline: "Heißer als erwartete US-Inflation für Oktober verdichtet die Erwartung einer Fed-Zinserhöhung im Dezember",
      sec30: "Der US-Verbraucherpreisindex für Oktober stieg am 10.11. um 0,4 % in der Gesamtrate (erwartet: 0,3 %) und um 0,3 % im Kernwert (erwartet: 0,2 %) – wegen einer Datenlücke durch den Regierungsstillstand 2025 ohne Jahresrate. Fed-Gouverneur Christopher Waller und die Chefin der Dallas-Fed, Lorie Logan, signalisierten daraufhin Offenheit für eine Zinserhöhung im Dezember, Logan hält laut Berichten mindestens zwei weitere Schritte für nötig. Am Terminmarkt gilt eine Erhöhung um 25 Basispunkte inzwischen mit rund 88 % Wahrscheinlichkeit als wahrscheinlichstes Szenario, der Rest der Wetten entfällt auf einen größeren Schritt von 50 Basispunkten. Die nächste FOMC-Sitzung findet am 8./9.12.2026 statt.",
      blocks: [
        { h: "Was zeigte der US-Verbraucherpreisindex für Oktober?", items: [
          { tag: "fakt", text: "Das Bureau of Labor Statistics veröffentlichte den Bericht am 10.11.2026 um 8:30 Uhr Ortszeit. Die Gesamtrate stieg um 0,4 % gegenüber dem Vormonat (erwartet: 0,3 %), die Kernrate um 0,3 % (erwartet: 0,2 %, wie bereits im September). Wegen einer durch den Regierungsstillstand 2025 verursachten Datenlücke enthält der Bericht weiterhin keine Jahresrate. Preistreiber waren laut Berichten unter anderem Lebensmittel und Mietkosten.",
            ask: [{ label: "Was ist der Unterschied zwischen Gesamt- und Kernrate?", ref: "t:kerninflation" }] }
        ]},
        { h: "Wie reagierten Fed-Vertreter auf die Daten?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller und die Präsidentin der Dallas-Fed, Lorie Logan, signalisierten nach den Daten Offenheit für eine Zinserhöhung im Dezember. Logan sagte in einer Rede in Houston sinngemäß, die Notenbank benötige mindestens zwei weitere Zinsschritte um je 25 Basispunkte und könne dabei schneller vorgehen als im bisherigen Herbst." },
          { tag: "fakt", text: "Fed-Chef Kevin Warsh gilt laut Washington Post unter seinen Kollegen – darunter zwei weitere von Präsident Trump berufene Mitglieder – als Außenseiter, weil er bezweifelt, dass der KI-Investitionsboom die Inflation befeuert, während mehr als ein Dutzend anderer Notenbanker genau das inzwischen annehmen." }
        ]},
        { h: "Wie reagierten die Märkte?", items: [
          { tag: "fakt", text: "Am Terminmarkt gilt eine Fed-Zinserhöhung im Dezember inzwischen praktisch als sicher; rund 88 % der Wetten entfallen auf einen Schritt um 25 Basispunkte, der Rest auf einen größeren Schritt um 50 Basispunkte. Die Rendite zehnjähriger US-Anleihen stieg binnen einer Woche von rund 4,82 % auf über 5 %; Nasdaq und S&P 500 gaben am Tag der Veröffentlichung nach.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere Fed-Mitglieder nach den Oktober-Daten offen für einen Zinsschritt im Dezember sind, zeigt eine Verschiebung der geldpolitischen Debatte in den USA: Im Mittelpunkt steht nicht mehr, ob die Fed senkt, sondern ob und wie stark sie im Dezember erhöht. Die US-Erzeugerpreise am Nachmittag dieser Ausgabe dürften die Einschätzung weiter beeinflussen." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1, 2 und 3, zur EZB-Zinsdebatte und zur Eurozonen-Inflation in Meldung 5, zu weiteren Konjunkturdaten in Meldung 6.",
      terms: ["leitzins", "basispunkt", "kerninflation"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks"],
      sources: [
        { title: "CNBC: A key report for where inflation stood in October comes out Tuesday", url: "https://www.cnbc.com/2026/11/09/october-cpi-report-2026-inflation.html" },
        { title: "Marketplace: Broad inflation persists across the economy, October CPI shows", url: "https://www.marketplace.org/story/2026/11/10/broad-inflation-persists-across-the-economy-october-cpi-shows" },
        { title: "Bloomberg: Interest-Rate Hike Debate Sparked by Fed's Waller, Logan After Hot Inflation", url: "https://www.bloomberg.com/news/articles/2026-11-10/fed-s-waller-backs-december-rate-hike-says-open-to-larger-move" },
        { title: "Washington Post: As more top Fed officials say AI is fueling inflation, Kevin Warsh is an outlier", url: "https://www.washingtonpost.com/business/2026/11/13/more-top-fed-officials-say-ai-is-fueling-inflation-kevin-warsh-is-an-outlier/" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB/EUROZONEN-INFLATION */
    {
      id: "ezb-dezember-zinserhoehung-eurozone-inflation-11-13", cats: ["economy"], when: "Eurostat-Flashschätzung Oktober · Lane/Nagel-Äußerungen 10.11. · nächste EZB-Sitzung 17./18.12.2026",
      headline: "EZB-Chefökonom Lane und Bundesbank-Chef Nagel signalisieren eine mögliche Zinserhöhung im Dezember, Eurozonen-Inflation steigt auf 4,0 %",
      sec30: "Die Inflation in der Eurozone stieg laut Eurostat-Flashschätzung im Oktober auf 4,0 % (September: 3,8 %), getrieben vor allem von Energiepreisen (+20,8 % gegenüber dem Vorjahr); die Kernrate blieb bei 2,5 % unverändert. EZB-Chefökonom Philip Lane sagte am 10.11., eine weitere Zinserhöhung im Dezember sei „prudent”, sollte sich die Datenlage bis dahin nicht wesentlich ändern; Bundesbank-Präsident Joachim Nagel bezeichnete einen Dezember-Schritt als „ziemlich offensichtlich” nötig. Die nächste EZB-Sitzung findet am 17./18.12.2026 statt.",
      blocks: [
        { h: "Wie hoch ist die Inflation in der Eurozone aktuell?", items: [
          { tag: "fakt", text: "Laut Eurostat-Flashschätzung stieg die Inflation in der Eurozone im Oktober auf 4,0 % (September: 3,8 %). Haupttreiber war Energie mit +20,8 % gegenüber dem Vorjahr (September: +18,9 %); die Dienstleistungsinflation stieg leicht auf 3,3 %, Nahrungsmittel/Alkohol/Tabak auf 1,6 %. Die Kernrate (ohne Energie und Nahrungsmittel) blieb bei 2,5 % unverändert. Die endgültige Oktoberzahl wird erst am 18.11.2026 veröffentlicht.",
            ask: [{ label: "Was ist der Unterschied zwischen Kern- und Gesamtinflation?", ref: "t:kerninflation" }] }
        ]},
        { h: "Was sagten EZB-Chefökonom Lane und Bundesbank-Chef Nagel?", items: [
          { tag: "position", text: "EZB-Chefökonom Philip Lane sagte Bloomberg am 10.11.: „If the information set we have in December is exactly the same as the information set today, then I think it would be prudent indeed to hike.” Bundesbank-Präsident Joachim Nagel äußerte sich deutlicher: „It is rather obvious that we have to increase rates in December.”" }
        ]},
        { h: "Wie reagieren Märkte auf die Zinssignale?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger Bundesanleihen stieg auf rund 3,37 %; Bankwerte im Euro Stoxx 50 profitierten laut Berichten von der Aussicht auf höhere Zinsen.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl in den USA (Meldung 4) als auch in der Eurozone führende Notenbankvertreter im November 2026 Offenheit für eine Zinserhöhung im Dezember zeigen, deutet auf eine ähnliche geldpolitische Debatte auf beiden Seiten des Atlantiks hin: Nach Jahren der Zinssenkungen rückt nun die Frage in den Vordergrund, ob die hartnäckige Inflation eine erneute Straffung nötig macht.",
            ask: [{ label: "Vom Ölpreis zur Inflation", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Mehr zur US-Inflation und zur Fed-Zinsdebatte in Meldung 4, zu weiteren Konjunkturdaten in Meldung 6.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "Eurostat: Euro area annual inflation up to 4.0%", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-04112026-ap" },
        { title: "TMGM: ECB's Lane – Prudent to hike again as inflation seen over 4% by year-end", url: "https://www.tmgm.com/en/analysis/market-news/article/ecbs-lane-prudent-to-hike-again-as-inflation-seen-over-4-by-year-end-202611100844" },
        { title: "The Private Banker: ECB's Nagel Calls a December Rate Hike \"Rather Obvious\"", url: "https://leprivatebanker.com/2026/11/10/ecbs-nagel-calls-a-december-rate-hike-rather-obvious-as-euro-zone-inflation-sits-at-a-three-year-high-of-4/" }
      ]
    },
    /* 6 WIRTSCHAFT: KONJUNKTUR */
    {
      id: "konjunktur-ifo-arbeitsmarkt-bip-11-13", cats: ["economy"], when: "ifo-Index Okt. (26.10.) · US-Arbeitsmarktbericht Okt. (6.11.) · BIP Q3 Deutschland (30.10.)",
      headline: "Deutsche Stimmungsindikatoren klettern leicht, US-Arbeitsmarkt überrascht mit kräftigem Jobzuwachs",
      sec30: "Der ifo-Geschäftsklimaindex stieg im Oktober zum sechsten Mal in Folge auf 90,2 Punkte (September: 89,9); vor allem die Erwartungskomponente verbesserte sich. Deutschlands Wirtschaft wuchs im dritten Quartal 2026 laut Destatis um 0,2 % gegenüber dem Vorquartal und um 1,3 % gegenüber dem Vorjahr. In den USA legten die Beschäftigtenzahlen außerhalb der Landwirtschaft im Oktober um 165.000 zu – mehr als doppelt so stark wie erwartet –, die Arbeitslosenquote fiel auf 4,1 %. Die kräftigen US-Arbeitsmarktdaten stützen zusätzlich die Erwartung einer Fed-Zinserhöhung im Dezember.",
      blocks: [
        { h: "Wie hat sich die Stimmung in der deutschen Wirtschaft entwickelt?", items: [
          { tag: "fakt", text: "Der ifo-Geschäftsklimaindex stieg im Oktober zum sechsten Mal in Folge auf 90,2 Punkte (September: 89,9 Punkte). Der Erwartungsindikator verbesserte sich von 90,4 auf 91,6 Punkte, während Unternehmen ihre aktuelle Lage etwas ungünstiger einschätzten. Besonders Industrie und Bauhauptgewerbe meldeten Verbesserungen, der Handel stagnierte, Dienstleister schätzten die Lage schwächer ein." }
        ]},
        { h: "Wie stark ist die deutsche Wirtschaft im dritten Quartal gewachsen?", items: [
          { tag: "fakt", text: "Das Statistische Bundesamt (Destatis) meldete für das dritte Quartal 2026 ein Wachstum des Bruttoinlandsprodukts von 0,2 % gegenüber dem Vorquartal und 1,3 % gegenüber dem Vorjahreszeitraum (preisbereinigt). Die Exporte, die in der ersten Jahreshälfte noch ein wichtiger Wachstumstreiber waren, verloren im dritten Quartal an Schwung." }
        ]},
        { h: "Wie entwickelte sich der US-Arbeitsmarkt?", items: [
          { tag: "fakt", text: "Die US-Wirtschaft schuf im Oktober 165.000 neue Stellen außerhalb der Landwirtschaft – mehr als doppelt so viel wie die von Ökonomen erwartete Zahl von rund 65.000 und deutlich über dem Zwölfmonatsdurchschnitt von rund 48.000. Die Arbeitslosenquote fiel von 4,2 % auf 4,1 %. Die stärksten Zuwächse gab es in unternehmensnahen Dienstleistungen, im Gesundheitswesen und im Transport- und Lagerwesen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die deutsche Stimmung als auch der US-Arbeitsmarkt robuster ausfallen als erwartet, erschwert nach Einschätzung von Marktbeobachtern die Begründung für Zinssenkungen und stützt stattdessen die Debatte über mögliche Zinserhöhungen bei Fed und EZB im Dezember (mehr in Meldung 4 und 5).",
            ask: [{ label: "Wie hängen Erzeugerpreise und Inflation zusammen?", ref: "e:ppi-what" }] }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte in Meldung 4, zur EZB-Zinsdebatte und Eurozonen-Inflation in Meldung 5.",
      terms: ["erzeugerpreise", "inflation"],
      followups: ["e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "ifo Institut: ifo Business Climate Rises (October 2026)", url: "https://www.ifo.de/en/press-release/2026-10-26/ifo-business-climate-rises-october-2026" },
        { title: "Statistisches Bundesamt (Destatis): Gross domestic product in the 3rd quarter of 2026 up 0.2% on the previous quarter", url: "https://www.destatis.de/EN/Press/2026/10/PE26_381_811.html" },
        { title: "Bloomberg: US Job Growth Beats Forecasts With 165,000 Added, Unemployment Drops", url: "https://www.bloomberg.com/news/articles/2026-11-06/us-adds-165-000-jobs-above-all-forecasts-as-unemployment-falls" }
      ]
    },
    /* 7 DEUTSCHLAND: BUNDESHAUSHALT 2027 */
    {
      id: "bundeshaushalt-2027-bereinigungssitzung-11-13", cats: ["germany"], when: "Bereinigungssitzung Haushaltsausschuss 12./13.11.2026 · abschließende Bundestagsberatung 24.–27.11.2026",
      headline: "Haushaltsausschuss billigt Bundeshaushalt 2027 mit 122,97 Mrd. Euro Nettokreditaufnahme im Kernhaushalt",
      sec30: "Der Haushaltsausschuss des Bundestags billigte in einer von Donnerstagnachmittag bis Freitagfrüh (5:55 Uhr) dauernden Bereinigungssitzung den Bundeshaushalt 2027 mit den Stimmen von CDU/CSU und SPD gegen AfD, Grüne und Die Linke. Der Gesamtetat liegt bei 560,92 Mrd. Euro, die Nettokreditaufnahme im Kernhaushalt bei 122,97 Mrd. Euro, davon 84,55 Mrd. Euro über die Ausnahme für Verteidigungsausgaben von der Schuldenbremse. Offen bleibt die im Koalitionsvertrag zugesagte Stromsteuersenkung für alle Haushalte, die Kanzler Merz beim Koalitionsausschuss am 17.11. klären will. Die abschließende Bundestagsberatung ist für den 24. bis 27.11. angesetzt.",
      blocks: [
        { h: "Was wurde beschlossen?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss stimmte in seiner Bereinigungssitzung über rund 2.000 Anträge ab und billigte den Bundeshaushalt 2027 mit den Stimmen von CDU/CSU und SPD gegen AfD, Grüne und Die Linke. Der Gesamtetat liegt bei 560,92 Mrd. Euro (5,48 Mrd. Euro mehr als im Regierungsentwurf), die Investitionen bei 61,85 Mrd. Euro. Die Steuereinnahmen werden mit 396,21 Mrd. Euro veranschlagt." }
        ]},
        { h: "Was ändert sich konkret bei der Verschuldung?", items: [
          { tag: "fakt", text: "Die Nettokreditaufnahme im Kernhaushalt liegt bei 122,97 Mrd. Euro, davon 84,55 Mrd. Euro über die seit der Grundgesetzreform 2025 geltende Ausnahme für Verteidigungsausgaben oberhalb von 1 % des Bruttoinlandsprodukts. Unter Einbeziehung des separaten Sondervermögens Bundeswehr liegt die gesamtstaatliche Neuverschuldung laut Berichten bei rund 210 Mrd. Euro – nach Angaben mehrerer Medien die zweithöchste in der Geschichte der Bundesrepublik.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Warum diese Ausgaben?", items: [
          { tag: "fakt", text: "Größte Einzeletats sind Arbeit und Soziales mit 203,29 Mrd. Euro und Verteidigung mit 109,75 Mrd. Euro. Beim Verkehrsetat wurden Mittel für die Autobahn-GmbH um knapp 2 Mrd. Euro auf 2,38 Mrd. Euro gekürzt, während Verpflichtungsermächtigungen für die Schiene um 4,34 Mrd. Euro erhöht wurden. Mit Ausnahme des Verteidigungsressorts müssen alle Ministerien ein Prozent ihres Budgets einsparen." }
        ]},
        { h: "Wer unterstützt den Haushalt, und womit?", items: [
          { tag: "position", text: "Finanzminister Lars Klingbeil (SPD) verteidigte den Kurs: Mit dem Haushalt setze die Koalition auf Investitionen und tiefgreifende Reformen, mit dem Ziel, Deutschland stärker zu machen." }
        ]},
        { h: "Wer kritisiert den Haushalt, und womit?", items: [
          { tag: "position", text: "Der haushaltspolitische Sprecher der Grünen, Sebastian Schäfer, bezeichnete den Haushalt sinngemäß als „Hütte ohne Fundament” und kritisierte zusätzliche Finanztransaktionen trotz ausgeschöpfter regulärer Kreditobergrenze sowie die nicht umgesetzte Stromsteuersenkung. Die Linke-Haushaltspolitiker Dietmar Bartsch sprach von einem „Dschungel aus Schulden, Tricks und Verschiebungen” und kritisierte, dass immer mehr Ausgaben außerhalb des Kernhaushalts finanziert würden. Der AfD-Haushaltspolitiker Michael Espendiller warf der Koalition vor, der Bund nehme „400.000 Euro neue Schulden – jede Minute” auf und sprach von „verfassungswidrigen Buchungstricks”." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Die Opposition verweist auf eine Kreditfinanzierungsquote von rund 32 % des Haushalts; Steuereinnahmen deckten damit nur rund 71 % der geplanten Ausgaben. Offen bleibt zudem die im Koalitionsvertrag zugesagte Stromsteuersenkung für alle Haushalte (Finanzierungsbedarf rund 5 bis 5,4 Mrd. Euro); Kanzler Friedrich Merz will dies beim Koalitionsausschuss am 17.11. klären und strebt eine verbindliche Zusage zum Januar 2027 für Privathaushalte an. Die abschließende Bundestagsberatung ist für den 24. bis 27.11. angesetzt, die Schlussabstimmung voraussichtlich für den 27.11.",
            ask: [{ label: "Was ist die Schuldenbremse genau?", ref: "e:debt-brake" }] }
        ]}
      ],
      reaction: "Mehr zur Bundespräsidentenwahl und zu aktuellen Umfragen in Meldung 8.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Bereinigungssitzung – Ausschuss beschließt Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw46-pa-haushalt-1231890" },
        { title: "onvista.de: Bundeshaushalt 2027 steht – Neuverschuldung steigt auf 210 Milliarden Euro", url: "https://www.onvista.de/news/2026/11-13-bundeshaushalt-2027-steht-neuverschuldung-steigt-auf-210-milliarden-euro-0-20-26575979" },
        { title: "ad-hoc-news.de: Bundeshaushalt 2027 – Opposition kritisiert 123 Milliarden Schulden", url: "https://www.ad-hoc-news.de/politik/bundeshaushalt-2027-opposition-kritisiert-123-milliarden-schulden/70503784" },
        { title: "Epoch Times: Bundeshaushalt 2027 – Klingbeil verteidigt Milliardeninvestitionen und Schulden", url: "https://www.epochtimes.de/politik/deutschland/bundeshaushalt-2027-klingbeil-verteidigt-milliardeninvestitionen-und-schulden-a5603878.html" },
        { title: "finanznachrichten.de: Merz will Stromsteuersenkung im Koalitionsausschuss klären", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70111867-merz-will-stromsteuersenkung-im-koalitionsausschuss-klaeren-003.htm" }
      ]
    },
    /* 8 DEUTSCHLAND: BUNDESPRÄSIDENTENWAHL + UMFRAGEN */
    {
      id: "bundespraesidentenwahl-aigner-umfragen-11-13", cats: ["germany"], when: "Kandidatenlage Stand 6.–13.11. · Wahl 30.1.2027 · Umfragen 10.11.2026",
      headline: "Union einigt sich auf Ilse Aigner als Kandidatin für das Bundespräsidentenamt, Umfragen sehen AfD weiter vorn",
      sec30: "Nach einem innerunionellen Streit will Kanzler Friedrich Merz Ilse Aigner (CSU) nun offiziell als gemeinsame Kandidatin von CDU und CSU für die Bundespräsidentenwahl am 30.1.2027 vorschlagen; SPD und Grüne signalisieren Unterstützung, AfD und Die Linke lehnen ab und wollen eigene Kandidaten aufstellen. Aktuelle Umfragen von Forsa und INSA sehen die AfD unverändert als stärkste Kraft bei 27 bis 28,5 %, vor der Union mit rund 19,5 bis 20 %.",
      blocks: [
        { h: "Was wurde vorgeschlagen?", items: [
          { tag: "fakt", text: "Kanzler und CDU-Chef Friedrich Merz will Ilse Aigner, Landtagspräsidentin in Bayern (CSU), den Unions-Gremien offiziell als gemeinsame Kandidatin für das Amt der Bundespräsidentin vorschlagen. Vorausgegangen war ein Streit innerhalb der Union, nachdem CSU-Chef Markus Söder Aigner bereits im Frühjahr 2026 zunächst ohne Abstimmung mit der CDU beworben hatte; die CDU hatte zunächst eigene Ansprüche angemeldet." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Die Wahl des Nachfolgers bzw. der Nachfolgerin von Bundespräsident Frank-Walter Steinmeier ist für den 30. Januar 2027 angesetzt. Die Bundesversammlung besteht aus 1.260 Mitgliedern – 630 Bundestagsabgeordneten und 630 von den Ländern entsandten Mitgliedern. Mit Aigner würde erstmals eine Frau das Amt übernehmen." }
        ]},
        { h: "Wer unterstützt die Nominierung, und womit?", items: [
          { tag: "position", text: "SPD-Politiker Dirk Wiese sagte, für ihn stehe fest, dass eine Frau dieses Amt übernehmen solle. Die Grünen-Fraktionsvorsitzende Britta Haßelmann erklärte, es sei an der Zeit, dass eine Frau Bundespräsidentin werde." }
        ]},
        { h: "Wer kritisiert die Nominierung, und womit?", items: [
          { tag: "position", text: "AfD und Die Linke lehnen Aigner ab und kündigten jeweils eigene Kandidaten an." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "fakt", text: "Forsa sah am 10.11. die AfD bei 27 % (+1 gegenüber dem 3.11.), die Union bei 20 % (unverändert), die Grünen bei 16 % (-1), die SPD bei 13 % (-1), Die Linke bei 11 % und die FDP bei 4 %. INSA (ebenfalls 10.11., im Auftrag der Bild) sah die AfD sogar bei 28,5 %, die Union bei 19,5 %. Beide Institute zeigen die AfD damit übereinstimmend klar als stärkste Kraft.",
            ask: [{ label: "Was bedeutet eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was bedeutet das für die Mehrheit in der Bundesversammlung?", items: [
          { tag: "einordnung", text: "Angesichts der aktuellen Umfragewerte ist eine Mehrheit für Aigner in der Bundesversammlung nicht automatisch gesichert; Union und SPD verfügen dort aber weiterhin über Sitze, die für die Wahl relevant sind. Genaue Mehrheitsberechnungen hängen von der tatsächlichen Zusammensetzung der von den Ländern entsandten Mitglieder ab, die erst näher am Wahltermin feststeht.",
            ask: [{ label: "Mehr zu Mehrheitsverhältnissen bei Koalitionen", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Mehr zum Bundeshaushalt 2027 in Meldung 7.",
      terms: ["koalition"],
      followups: ["e:coalition-majority"],
      sources: [
        { title: "CDU.de: Ilse Aigner – Bundespräsidentin mit Würde und Herz", url: "https://www.cdu.de/aktuelles/cdu-deutschlands/ilse-aigner-kandidatin-fuer-das-amt-der-bundespraesidentin-und-cdu-bundeskanzler-friedrich-merz/" },
        { title: "ZDFheute: Wird es erstmals eine Bundespräsidentin geben? Die CSU drängt auf Nominierung von Ilse Aigner", url: "https://www.zdfheute.de/politik/koalition-merz-cdu-bundespraesident-aigner-csu-100.html" },
        { title: "euronews: Unionsstreit beigelegt – Ilse Aigner soll Bundespräsidentin werden", url: "https://de.euronews.com/2026/11/06/erste-frau-ilse-aigner-soll-bundestagsprasidentin-werden" },
        { title: "dawum.de: Forsa-Umfrage vom 10.11.2026", url: "https://dawum.de/Bundestag/Forsa/2026-11-10/" },
        { title: "dawum.de: INSA-Umfrage vom 10.11.2026", url: "https://dawum.de/Bundestag/INSA/2026-11-10/" }
      ]
    },
    /* 9 INTERNATIONAL: UKRAINE-RUSSLAND ABU DHABI */
    {
      id: "ukraine-russland-abu-dhabi-gefangenenaustausch-11-13", cats: ["world", "geo"], when: "Gespräche Abu Dhabi 10./11.11. · Gefangenenaustausch 12.11. · Moskau-Besuch 12.11.",
      headline: "Nach den ersten direkten Gesprächen seit Monaten tauschen Ukraine und Russland 314 Kriegsgefangene aus",
      sec30: "Am 10. und 11.11.2026 fanden in Abu Dhabi die ersten von den USA vermittelten direkten Gespräche zwischen ukrainischen und russischen Delegationen seit rund neun Monaten statt. Einziges konkretes Ergebnis war eine Einigung auf einen Gefangenenaustausch von 314 Soldaten (157 je Seite), der am 12.11. vollzogen wurde. Zu Waffenstillstand, Territorialfragen und Sicherheitsgarantien kam es zu keinem Durchbruch; Hauptstreitpunkt bleibt Russlands Forderung, die Ukraine solle die noch gehaltenen Teile des Donbass abtreten. Die US-Sondergesandten Steve Witkoff und Jared Kushner reisten am 12.11. anschließend zu einem rund fünfstündigen Gespräch mit Präsident Putin nach Moskau und trafen danach Präsident Selenskyj in Dublin.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "In Abu Dhabi verhandelten am 10. und 11.11. erstmals seit rund neun Monaten wieder direkte ukrainische und russische Delegationen unter US-Vermittlung. Konkretes Ergebnis war ein Gefangenenaustausch von 314 Soldaten, der am 12.11. vollzogen wurde; zu Territorialfragen und einem Waffenstillstand gab es keinen Durchbruch." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Es ist der erste ernsthafte Verhandlungsversuch seit Monaten; der vorherige Diplomatieprozess war durch den im Februar 2026 eskalierten Iran-Konflikt unterbrochen worden. Dass beide Seiten trotz fehlendem Durchbruch an der humanitären Frage (Gefangenenaustausch) zusammenarbeiteten, deutet Beobachtern zufolge auf einen fortbestehenden, wenn auch fragilen Verhandlungskanal hin." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Für die USA leiteten die Sondergesandten Steve Witkoff und Jared Kushner die Gespräche. US-Außenminister Marco Rubio bezeichnete das Treffen als „very productive”. Präsident Wolodymyr Selenskyj nannte die Gespräche „constructive and quite substantive” und erklärte, es sei vor allem um humanitäre Fragen gegangen – Gefangenenaustausch sowie die Rückführung verschleppter ukrainischer Zivilisten und Kinder." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der direkte Verhandlungsprozess zwischen Russland und der Ukraine war seit Februar 2026 wegen der Eskalation des Iran-Konflikts unterbrochen gewesen. Kushner brachte in Abu Dhabi zudem die Idee einer neuen europäischen Sicherheitsarchitektur mit Russland ein, angelehnt an den früheren NATO-Russland-Rat." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "einordnung", text: "Fortschritte oder Rückschläge bei den Gesprächen wirken sich nach Einschätzung von Marktbeobachtern vor allem indirekt über die allgemeine Risikostimmung an den Finanzmärkten aus; ein direkter Effekt auf einzelne Rohstoffpreise wie beim Iran-Konflikt und dem Ölpreis (Meldung 10) ist für die Ukraine-Gespräche in den gesichteten Quellen nicht beschrieben." }
        ]}
      ],
      reaction: "Mehr zur Iran-Diplomatie und zum Ölpreis in Meldung 10 und 15.",
      terms: [],
      followups: [],
      sources: [
        { title: "Washington Post: Russia and Ukraine begin U.S.-backed peace talks in Abu Dhabi", url: "https://www.washingtonpost.com/world/2026/11/10/russia-ukraine-begin-us-backed-peace-talks-abu-dhabi/" },
        { title: "Kyiv Post: Ukraine, US and Russia End Second Day of Abu Dhabi Peace Talks", url: "https://www.kyivpost.com/post/89761" },
        { title: "euronews: Abu Dhabi peace talks end with prisoner exchange agreement as US envoys prepare to meet Putin", url: "https://www.euronews.com/2026/11/11/abu-dhabi-peace-talks-end-with-prisoner-exchange-agreement-as-us-envoys-prepare-to-meet-pu" },
        { title: "CNN: Witkoff and Kushner meet Zelensky after talks with Putin", url: "https://edition.cnn.com/2026/11/12/politics/ukraine-witkoff-kushner-putin-peace-talks-intl" },
        { title: "Ukrinform: War update – Pokrovsk sector remains hottest", url: "https://www.ukrinform.net/rubric-ato/4182752-war-update-127-clashes-on-front-line-pokrovsk-sector-remains-hottest.html" }
      ]
    },
    /* 10 GEOPOLITIK: IRAN/TRUMP-KEHRTWENDE */
    {
      id: "iran-trump-kehrtwende-hormuz-oelpreis-11-13", cats: ["geo", "world"], when: "Katar-Vorschlag 9.11. · Trump-Aussage 12.11. · Tankerzwischenfälle 10.–11.11.",
      headline: "Trump erklärt, die USA bräuchten keinen Deal mehr mit dem Iran, nachdem Katar einen Vorschlag zur Öffnung der Straße von Hormus vermittelt hatte",
      sec30: "Katars Premierminister hatte Präsident Trump am 9.11. einen von Iran gebilligten Vorschlag präsentiert: Öffnung der Straße von Hormus im Gegenzug für die Freigabe von 8 Mrd. Dollar eingefrorener iranischer Gelder. Am 12.11. vollzog Trump jedoch eine Kehrtwende und schrieb auf Truth Social, die USA bräuchten „keinen Deal” mehr mit dem Iran, man habe bereits dessen Geld und dessen Straße. Gleichzeitig kam es zu neuen Tankerzwischenfällen in der Straße von Hormus; der Brent-Ölpreis stieg am 12.11. um 3,3 % auf rund 95,80 Dollar.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Katar vermittelte einen Vorschlag zur Öffnung der Straße von Hormus gegen Freigabe iranischer Gelder; Trump erklärte am 12.11. jedoch, ein solcher Deal sei nicht mehr nötig. Parallel griffen laut der britischen Seefahrtsbehörde UKMTO Unbekannte am 10. und 11.11. Handelsschiffe in der Straße von Hormus an, ein iranischer Tanker lief zudem auf eine Mine." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Trumps Kehrtwende verschiebt eine seit Wochen laufende Vermittlung zwischen den Konfliktparteien zurück in eine Phase größerer Unsicherheit; der unmittelbare Anstieg des Ölpreises um 3,3 % zeigt, wie direkt Marktteilnehmer auf einzelne Aussagen in diesem Konflikt reagieren." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "position", text: "Präsident Trump schrieb auf Truth Social: „We don't need a deal with Iran. Those days have long since passed. We've got their money, Hundreds of Billions of Dollars, and we've got their Strait!” Laut Fox News drohte Trump zudem mit Militärschlägen „ohne Zögern” ('no hesitation'). Die jemenitischen Huthi erklärten am 12.11., eine Pumpstation der saudischen East-West-Pipeline sowie Ölanlagen im Hafen Yanbu angegriffen zu haben. Ein mögliches Treffen zwischen US-Vizepräsident JD Vance und Irans Sicherheitsratssekretär Mohsen Rezaei in Katar wurde von iranischer Seite als „fabricated” (fabriziert) zurückgewiesen." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der Konflikt eskalierte 2026 zum offenen Krieg mit US-Beteiligung; im April hatte Trump bereits ein 48-Stunden-Ultimatum zur Öffnung der Straße von Hormus gestellt, gefolgt von einem zweiwöchigen Waffenstillstand. Katar vermittelt seit Wochen zwischen den USA und Iran." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "fakt", text: "Der Brent-Ölpreis stieg am 12.11. um 3,3 % bzw. 3,06 Dollar auf rund 95,80 Dollar je Barrel – eine direkte Reaktion auf Trumps Aussage und die Tankerzwischenfälle. Ein Analyst der TD Securities sagte laut Berichten sinngemäß, die verschlechterte Nachrichtenlage zum Deal lasse wieder eine Risikoprämie in den Ölpreis einfließen.",
            ask: [{ label: "Mehr zum Ölpreis und zu deutschen Gasspeichern", ref: "s:15" }, { label: "Warum reagiert der Ölpreis auf Geopolitik?", ref: "e:why-oil-up-geo" }] }
        ]}
      ],
      reaction: "Mehr zum Ölpreis, zu OPEC+ und zu deutschen Gasspeichern in Meldung 15, zu den Ukraine-Gesprächen in Meldung 9.",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz"],
      sources: [
        { title: "Rigzone: US Holds Off Strikes after Qatari Mediation", url: "https://www.rigzone.com/news/wire/us_holds_off_strikes_after_qatari_mediation-10-nov-2026-185048-article/" },
        { title: "Iran International: Qatar to present Trump with $8 billion Hormuz deal", url: "https://www.iranintl.com/en/202611094583" },
        { title: "NBC News: Trump says the U.S. doesn't 'need' a deal with Iran", url: "https://nbcnews.com/politics/donald-trump/us-doesnt-need-peace-deal-iran-vance-corruption-trump-rcna609027" },
        { title: "Bloomberg: Oil Prices Rise After Trump Says US Doesn't Need Iran Deal", url: "https://www.bloomberg.com/news/articles/2026-11-12/oil-jumps-after-trump-says-us-doesn-t-need-deal-with-iran" },
        { title: "Iran International: Araghchi denies plans for meeting between Rezaei and Vance", url: "https://www.iranintl.com/en/202611105271" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL/HENSOLDT/RENK */
    {
      id: "defence-rheinmetall-gewinnwarnung-hensoldt-renk-11-13", cats: ["defence"], when: "Rheinmetall-Gewinnwarnung · Hensoldt-Kapitalmarkttag 10.11. · RENK 9M-Zahlen",
      headline: "Rheinmetall-Aktie fällt auf 52-Wochen-Tief nach zweiter Prognosesenkung, Hensoldt hebt Umsatzziel für 2035 an",
      sec30: "Die Rheinmetall-Aktie fiel diese Woche auf ein neues 52-Wochen-Tief von 742,50 Euro – ein Minus von über 60 % gegenüber dem Rekordhoch von rund 1.963,50 Euro im Januar 2026. Grund ist die zweite Prognosesenkung des Jahres: Rheinmetall senkte sein Umsatzziel 2026 von 13,7 bis 14,2 Mrd. Euro auf rund 13,2 Mrd. Euro, nachdem sich der Boxer-Großauftrag „Arminius” über rund 1.800 Fahrzeuge von Dezember 2026 auf voraussichtlich Februar 2027 verschoben hat. Hensoldt bekräftigte dagegen bei seinem Kapitalmarkttag in London am 10.11. sein Umsatzziel von 6 Mrd. Euro für 2030 und hob erstmals ein Ziel von 10 Mrd. Euro für 2035 aus. RENK meldete einen Auftragseingang von 1,66 Mrd. Euro in den ersten neun Monaten 2026 (+33,6 %) und einen Rekord-Auftragsbestand von 7,6 Mrd. Euro.",
      blocks: [
        { h: "Was ist bei Rheinmetall passiert?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie fiel diese Woche auf ein neues 52-Wochen-Tief von 742,50 Euro, gegenüber dem Rekordhoch von rund 1.963,50 Euro im Januar 2026 ein Rückgang von mehr als 60 % (seit Jahresbeginn rund -51 %). Grund ist die zweite Prognosesenkung des Jahres: Das Umsatzziel 2026 sank von 13,7 bis 14,2 Mrd. Euro auf rund 13,2 Mrd. Euro, die operative Marge wird bei rund 18,5 % erwartet. Hauptursache ist die Verschiebung des Boxer-Großauftrags „Arminius” (rund 1.800 Fahrzeuge) von Dezember 2026 auf voraussichtlich Februar 2027." },
          { tag: "fakt", text: "Neue Order: Belgien bestellte bei Rheinmetall 20 Skyranger-30-Flugabwehrsysteme im dreistelligen Millionenbereich. Analysten sind uneins: Goldman Sachs bestätigte ein Kursziel von 2.300 Euro (Buy), während Bank of America auf Neutral mit Kursziel 900 Euro herabstufte; Citi senkte das Ziel auf 1.099 Euro (Buy), Deutsche Bank auf 1.650 Euro (Buy). Der nächste Kapitalmarkttag ist für den 27.11.2026 angesetzt." }
        ]},
        { h: "Was zeigte Hensoldts Kapitalmarkttag?", items: [
          { tag: "fakt", text: "Hensoldt bekräftigte bei seinem Kapitalmarkttag in London am 10.11. sein Umsatzziel von 6 Mrd. Euro für 2030 und hob erstmals ein Ziel von 10 Mrd. Euro für 2035 an. CEO Oliver Dörre sagte: „Wir werden 2035 einen Umsatz von 10 Milliarden Euro erreichen.” Finanzchef Christian Ladurner erwartet für 2027/2028 ein Wachstum von 15 bis 20 % pro Jahr; die Auftragspipeline für 2027 bis 2032 liegt bei rund 110 Mrd. Euro (ungewichtet). JPMorgan stufte die Aktie auf „Übergewichten” hoch, Kursziel 105 Euro." }
        ]},
        { h: "Wie entwickelte sich RENK?", items: [
          { tag: "fakt", text: "RENK meldete für die ersten neun Monate 2026 einen Auftragseingang von 1,66 Mrd. Euro (+33,6 % gegenüber Vorjahr) und einen Rekord-Auftragsbestand von 7,6 Mrd. Euro. Die Übernahme von David Brown Defence wurde am 2.11. abgeschlossen." }
        ]},
        { h: "Wie steht es um die deutsche Verteidigungspolitik?", items: [
          { tag: "position", text: "Verteidigungsminister Boris Pistorius erklärte am 8.11., die Bundeswehr könne ihren Personalbedarf voraussichtlich ohne Wehrpflicht decken: „Wenn sich der Kurs fortsetzt, haben wir keine Aufwuchsprobleme.” Der Personalstand liegt bei rund 190.000 – dem höchsten Stand seit 13 Jahren –, die Bewerbungen stiegen um 24 %. Der Verteidigungshaushalt 2026 liegt insgesamt über 108 Mrd. Euro, davon 25,51 Mrd. Euro aus dem Sondervermögen Bundeswehr.",
            ask: [{ label: "Was bedeutet das NATO-Ziel für Verteidigungsausgaben?", ref: "e:nato-target" }] }
        ]}
      ],
      reaction: "Mehr zur Übernahme von KNDS durch den Bund in Meldung 12.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "Investing.com: Rheinmetall stock price target cut to €1,099 by Citi on guidance concerns", url: "https://www.investing.com/news/stock-market-news/rheinmetall-stock-price-target-cut-to-1099-by-citi-on-guidance-concerns-93CH-5024661" },
        { title: "MarketScreener: Capital Markets Day – Hensoldt confirms revenue ambition of 6 billion euros for 2030 and aims for 10", url: "https://www.marketscreener.com/news/capital-markets-day-hensoldt-confirms-revenue-ambition-of-6-billion-euros-for-2030-and-aims-for-10-ce785edad88afe27" },
        { title: "GlobeNewswire: 9M 2026 – RENK's order intake climbs by more than 30%", url: "https://www.globenewswire.com/news-release/2026/11/05/3396028/0/en/9m-2026-renk-s-order-intake-climbs-by-more-than-30-with-further-above-average-increase-in-adjusted-ebit-operating-capacity-ramp-up-in-parallel-to-ongoing-production.html" },
        { title: "ZDFheute: Pistorius sieht derzeit keinen Bedarf für Wehrpflicht", url: "https://www.zdfheute.de/politik/deutschland/pistorius-bundeswehr-wehrpflicht-freiwillige-anzahl-ausreichend-100.html" }
      ]
    },
    /* 12 DEALS: KNDS-BUND-ÜBERNAHME + BASF-EVONIK */
    {
      id: "knds-bund-uebernahme-basf-evonik-11-13", cats: ["deals", "defence"], when: "KNDS-Einigung Berichte Stand 11.11. · BASF-Evonik-Ablehnung bekräftigt 9.11.",
      headline: "Bund übernimmt laut Berichten die Hälfte des Rüstungskonzerns KNDS für 6,6 Milliarden Euro, Evonik lehnt BASF-Angebot weiter ab",
      sec30: "Die Bundesregierung übernimmt laut Berichten für 6,6 Mrd. Euro die Hälfte des deutsch-französischen Rüstungskonzerns KNDS (Leopard-2-Hersteller) von den Eigentümerfamilien, nachdem ein geplanter Börsengang gescheitert war; Vertragsunterzeichnung soll noch im November erfolgen. Parallel bekräftigte Evonik am 9.11. nach einem Treffen mit BASF-Spitzenvertretern seine Ablehnung des auf 24 Euro je Aktie (rund 11,2 Mrd. Euro) erhöhten BASF-Übernahmeangebots und untermauerte dies mit starken Quartalszahlen.",
      blocks: [
        { h: "Was ist der KNDS-Deal?", items: [
          { tag: "unbestaetigt", text: "Laut einem als Verschlusssache eingestuften Schreiben des Bundesfinanzministeriums, über das mehrere Medien berichten, übernimmt der Bund die Hälfte der Anteile am Rüstungskonzern KNDS von den Eigentümerfamilien (Wegmann) für 6,6 Mrd. Euro. Der Kaufpreis basiert auf einer Unternehmensbewertung von 11,2 Mrd. Euro aus dem Vorfeld des gescheiterten Börsengangs zuzüglich eines Aufschlags von 1 Mrd. Euro. Vertragsunterzeichnung soll noch im November 2026 erfolgen, der Vollzug im Dezember 2026; zum Redaktionsschluss dieser Ausgabe war laut Berichten noch nicht unterschrieben. Details zu Finanzierung, beteiligten Banken und dem genauen Zeitplan der kartellrechtlichen Prüfung werden in den Quellen nicht genannt." }
        ]},
        { h: "Wie ist der Stand beim BASF-Evonik-Übernahmeangebot?", items: [
          { tag: "fakt", text: "BASF hatte sein Angebot für Evonik auf 24 Euro je Aktie erhöht, insgesamt rund 11,2 Mrd. Euro – etwa 39 % über dem Kurs von Ende September, bevor BASFs Interesse bekannt wurde. Nach einem Treffen der Unternehmensspitzen am 7./8.11. bekräftigte Evonik am 9.11. laut Reuters-Berichten erneut seine Ablehnung." },
          { tag: "position", text: "Evonik erklärte, man habe das Angebot „gründlich geprüft” und entschieden, keine Verhandlungen mit BASF aufzunehmen; man sei lediglich zu einem „rein informativen und vertraulichen Austausch” bereit. BASF-Chef Markus Kamieth nannte den Schritt einen „logischen und sinnvollen Schritt zum richtigen Zeitpunkt”, betonte aber, man werde die Fusion „nicht um jeden Preis” verfolgen, und sicherte zu, betriebsbedingte Kündigungen bis 2032 auszuschließen." },
          { tag: "fakt", text: "Evonik untermauerte seine Position mit Quartalszahlen: Das bereinigte EBITDA stieg im dritten Quartal um 40 % auf 629 Mio. Euro, der Umsatz um 13 % auf knapp 3,83 Mrd. Euro; die Jahresprognose 2026 wurde auf den oberen Rand der Spanne von 2,0 bis 2,2 Mrd. Euro angehoben.",
            ask: [{ label: "Was bedeutet EBITDA?", ref: "t:ebitda" }, { label: "Wie laufen Übernahmen typischerweise ab?", ref: "e:ma-steps" }] }
        ]}
      ],
      deal: { value: "6,6 Mrd. Euro (KNDS, laut Berichten) / 11,2 Mrd. Euro (BASF-Angebot für Evonik, abgelehnt)", buyer: "Bundesregierung (KNDS) / BASF (Evonik-Angebot)", target: "50 % der KNDS-Anteile / Evonik Industries AG", sector: "Rüstung / Spezialchemie", type: "Anteilskauf (KNDS, laut Berichten noch nicht unterschrieben) / abgelehntes Übernahmeangebot (Evonik)" },
      reaction: "Mehr zu Rheinmetall, Hensoldt und RENK in Meldung 11.",
      terms: ["ebitda"],
      followups: ["e:ma-steps"],
      sources: [
        { title: "Handelsblatt: Rüstung – Bund zahlt 6,6 Milliarden Euro für KNDS-Einstieg", url: "https://www.handelsblatt.com/politik/deutschland/ruestung-bund-zahlt-66-milliarden-euro-fuer-knds-einstieg/100268563.html" },
        { title: "Kettner-Edelmetalle: Panzer-Poker um KNDS – Berlin zahlt 6,6 Milliarden für den Leopard!", url: "https://www.kettner-edelmetalle.de/news/panzer-poker-um-knds-berlin-zahlt-66-milliarden-fur-den-leopard-11-11-2026" },
        { title: "aktien.news: Evonik lehnt BASF-Übernahmeangebot ab und überzeugt mit starken Quartalszahlen", url: "https://www.aktien.news/evonik-lehnt-basf-ubernahmeangebot-ab-und-uberzeugt-mit-starken-quartalszahlen" },
        { title: "Handelsblatt: BASF bietet jetzt mehr als elf Milliarden Euro für Evonik", url: "https://www.handelsblatt.com/unternehmen/industrie/uebernahme-basf-bietet-jetzt-mehr-als-elf-milliarden-euro-fuer-evonik/100264522.html" },
        { title: "onvista: Insider – Evonik will auch nach BASF-Treffen eigenständig bleiben", url: "https://www.onvista.de/news/2026/11-09-insider-evonik-will-auch-nach-basf-treffen-eigenstaendig-bleiben-0-20-26574151" }
      ]
    },
    /* 13 DEALS/PRIVATE CREDIT: MARVELL-LUMENTUM + PRIVATE CREDIT */
    {
      id: "marvell-lumentum-private-credit-stress-11-13", cats: ["deals", "credit"], when: "Marvell-Lumentum-Fusion angekündigt 2.11. · KBRA-Report 5.11. · BDC-Daten Q3 2026",
      headline: "Marvell-Lumentum-Fusion über 115 Milliarden Dollar gilt als „Coin-Flip”, Private-Credit-Markt zeigt zunehmenden Stress",
      sec30: "Marvell Technology und Lumentum einigten sich am 2.11. auf eine Komplettübernahme im All-Stock-Deal mit einem Umtauschverhältnis von 4,5 Marvell-Aktien pro Lumentum-Aktie, bewertet auf rund 115 Mrd. Dollar. Seit Bekanntwerden der Gespräche fiel die Marvell-Aktie um rund 40 %, Lumentum um rund 35 %; Merger-Arbitrage-Spezialisten sehen die Erfolgswahrscheinlichkeit laut Bloomberg bei nur noch rund 50 %. Parallel meldet die Ratingagentur KBRA einen Anstieg ausfallender Private-Credit-Kreditnehmer um 22 % gegenüber dem Vorquartal auf einen Rekordwert von 112 Kreditnehmern, während nicht börsennotierte BDCs im dritten Quartal 2026 mit 4,1 Mrd. Dollar Netto-Abflüssen das dritte Quartal in Folge mehr Geld verloren als eingesammelt haben.",
      blocks: [
        { h: "Was ist der Marvell-Lumentum-Deal?", items: [
          { tag: "fakt", text: "Marvell Technology und Lumentum einigten sich am 2.11.2026 auf eine Komplettübernahme Lumentums im All-Stock-Deal: Lumentum-Aktionäre erhalten 4,5 Marvell-Aktien je Lumentum-Aktie, eine Prämie von rund 23,9 % auf den unbeeinflussten Schlusskurs vom 28.10. Je nach Quelle wird der Deal auf 115 bis 119 Mrd. Dollar beziffert; nach Abschluss sollen Marvell-Aktionäre rund 67 % und Lumentum-Aktionäre rund 33 % des gemeinsamen Unternehmens halten." }
        ]},
        { h: "Wie schätzen Analysten die Erfolgschancen ein?", items: [
          { tag: "fakt", text: "Seit Bekanntwerden der Gespräche Ende Oktober ist die Marvell-Aktie um rund 40 % gefallen, die Lumentum-Aktie um rund 35 %; Lumentum handelte laut Bloomberg Anfang November mit einem Abschlag von 14 % gegenüber dem impliziten Angebotswert. Bank of America stufte Marvell von „Buy” auf „Neutral” herab und senkte das Kursziel von 400 auf 225 Dollar." },
          { tag: "position", text: "Bloomberg berichtet, Merger-Arbitrage-Spezialisten sähen die Abschlusswahrscheinlichkeit inzwischen bei rund 50 % („Coin-Flip”); die Bloomberg-Intelligence-Analystin Jennifer Rie nennt die chinesische Kartellprüfung als größtes Zeitrisiko. Der Abschluss wird erst für die erste Hälfte 2028 erwartet.",
            ask: [{ label: "Was kann bei Übernahmen zwischen Vertragsunterzeichnung und Vollzug schiefgehen?", ref: "e:deal-risks" }] }
        ]},
        { h: "Wie steht es um den Private-Credit-Markt?", items: [
          { tag: "fakt", text: "Die Ratingagentur KBRA meldete für ihren November-Report einen Anstieg der Zahl ausfallender Private-Debt-Kreditnehmer auf einen Rekordwert von 112 – ein Plus von 22 % gegenüber dem Vorquartal. Die Non-Accrual-Quote im Direct-Lending-Markt liegt laut Berichten bei rund 2,3 %, im Lower Middle Market bei 1,7 %. Verschiedene Ratingagenturen kommen je nach Methodik – insbesondere je nachdem, ob eine Laufzeitverlängerung als Ausfall gezählt wird – auf Ausfallraten zwischen 2,5 und 6,0 %.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Was bedeutet ein Non-Accrual-Kredit?", ref: "t:non-accrual" }] }
        ]},
        { h: "Was zeigen die BDC-Fundraising-Daten?", items: [
          { tag: "fakt", text: "Nicht börsennotierte Business Development Companies (BDCs) sammelten im dritten Quartal 2026 laut Robert A. Stanger & Co. nur 1,5 Mrd. Dollar ein – der niedrigste Quartalswert seit Ende 2020 (-87 % gegenüber Vorjahr); gleichzeitig überstiegen Rücknahmen die Neumittel um netto 4,1 Mrd. Dollar, das dritte Quartal in Folge mit Netto-Abflüssen. Stanger-Chef Kevin Gannon erklärte sinngemäß, der nicht börsennotierte BDC-Markt schrumpfe, weil Anleger Kapital abziehen, nicht wegen einer breiten Verschlechterung der Nettoinventarwerte." }
        ]}
      ],
      deal: { value: "115 Mrd. $ (je nach Quelle bis 119 Mrd. $)", buyer: "Marvell Technology", target: "Lumentum", sector: "Halbleiter/Optik (KI-Infrastruktur)", type: "All-Stock-Fusion, Abschluss erwartet H1 2028" },
      reaction: "Mehr zu Nvidia und zur KI-Branche in Meldung 14.",
      terms: ["ebitda", "non-accrual", "bdc", "sofr"],
      followups: ["e:deal-risks", "e:private-credit-what", "e:redemption-limits", "e:nonaccrual-default"],
      sources: [
        { title: "Bloomberg: Marvell-Lumentum deal odds near coin-flip as AI trade shudders", url: "https://www.bloomberg.com/news/articles/2026-11-09/marvell-lumentum-deal-odds-near-coin-flip-as-ai-trade-shudders" },
        { title: "TradingView/Benzinga: Marvell's $115 Billion Lumentum Deal Faces 50-50 Odds: Report", url: "https://www.tradingview.com/news/benzinga:04e8ee0b0094b:0-marvell-s-115-billion-lumentum-deal-faces-50-50-odds-report/" },
        { title: "Bloomberg: Private Credit Defaults Surge, Lower Middle-Market Companies See Higher Rates", url: "https://www.bloomberg.com/news/articles/2026-11-05/private-credit-defaults-record-largest-quarterly-jump-kbra-says" },
        { title: "AltsWire: Nontraded BDC Net Outflows Reach $4.1B in Q3 as Fundraising Falls to Lowest Level Since 2020", url: "https://altswire.com/nontraded-bdc-net-outflows-reach-4-1b-in-q3-as-fundraising-falls-to-lowest-level-since-2020/" }
      ]
    },
    /* 14 TECHNOLOGIE: NVIDIA/HUANG + ANTHROPIC-IPO */
    {
      id: "nvidia-huang-ruecktritt-anthropic-ipo-11-13", cats: ["tech"], when: "Huang-Rücktritt 12.11. · Anthropic-Pricing geplant 18.11., Handelsstart 19.11.",
      headline: "Nvidia-Gründer Jensen Huang tritt nach 33 Jahren zurück, Anthropics Börsengang mit bis zu 1,4 Billionen Dollar Bewertung rückt näher",
      sec30: "Nach Berichten über eine Affäre mit einer mutmaßlich chinesischen Geschäftsfrau und einer von Präsident Trump am 9.11. erwähnten FBI-Prüfung trat Jensen Huang am 12.11. als Präsident, CEO und Boardmitglied von Nvidia zurück – nach 33 Jahren im Amt. Interimistisch übernimmt Finanzchefin Colette Kress. Die Nvidia-Aktie fiel am Rücktrittstag um 4,3 % auf 166,19 Dollar. Parallel bereitet Anthropic seinen Börsengang an der Nasdaq vor: Die Preisspanne liegt bei 70 bis 78 Dollar je Aktie, Pricing ist für den 18.11. und Handelsstart für den 19.11. geplant, bei einer Bewertung von bis zu 1,4 Billionen Dollar.",
      blocks: [
        { h: "Was ist bei Nvidia passiert?", items: [
          { tag: "fakt", text: "Nach Medienberichten über eine Affäre Huangs mit einer mutmaßlich chinesischen Geschäftsfrau und Präsident Trumps Aussage vom 9.11., das FBI ermittele, trat Jensen Huang am 12.11.2026 als Präsident, CEO und Boardmitglied von Nvidia zurück – bestätigt per SEC-Mitteilung (Form 8-K) und Nvidia-Pressemitteilung. In seinem Rücktrittsschreiben erklärte Huang: „There is no excuse for what I did.” Interimistisch übernahm die bisherige Finanzchefin Colette Kress die Führung." },
          { tag: "unbestaetigt", text: "Der Spionagevorwurf selbst bleibt umstritten: Singapur erklärte am 12.11., es gebe keine ausreichenden Beweise für eine Strafverfolgung; US-Justizminister Todd Blanche sagte, das Ministerium habe noch keine abschließende Erkenntnis. Senatsausschuss (Banking) und ein Ausschuss des Repräsentantenhauses (Foreign Affairs) haben Huang und Handelsminister Lutnick für Anhörungen Anfang Dezember vorgeladen." },
          { tag: "fakt", text: "Die Nvidia-Aktie fiel am 12.11. um 4,3 % auf 166,19 Dollar, zeitweise unter 150 Dollar – weit unter dem Oktober-Rekordhoch von rund 243 Dollar.",
            ask: [{ label: "Mehr zur Marktreaktion", ref: "s:2" }] }
        ]},
        { h: "Wie steht es um Anthropics Börsengang?", items: [
          { tag: "fakt", text: "Anthropic legte für seinen Börsengang an der Nasdaq (Ticker: ANT) eine Preisspanne von 70 bis 78 Dollar je Aktie fest, bei 825 Mio. Class-A-Aktien. Die Preisfestsetzung ist für den 18.11. geplant, der Handelsstart für den 19.11.; bei einer Bewertung von bis zu 1,4 Billionen Dollar (voll verwässert) könnte der Erlös am oberen Rand der Spanne rund 64 Mrd. Dollar betragen." },
          { tag: "fakt", text: "Parallel zum Börsengang investieren sieben Technologiekonzerne im Rahmen einer Privatplatzierung über insgesamt 26 Mrd. Dollar: Nvidia und Google/Alphabet je rund 10 Mrd. Dollar, AMD 2,5 Mrd. Dollar, Micron und Broadcom je 1 Mrd. Dollar, Microsoft 1 Mrd. Dollar; TSMC investiert separat bis zu 1 Mrd. Dollar, aufgeteilt auf Anthropic und OpenAI-Vorzugsaktien.",
            ask: [{ label: "Was ist zirkuläre Finanzierung in der KI-Branche?", ref: "e:circular-financing" }] },
          { tag: "unbestaetigt", text: "Bloomberg berichtet, Nvidias Investitionszusage stehe wegen Huangs Rücktritt nun unter verstärkter Beobachtung; ob sich dadurch Konditionen oder Zeitplan ändern, ist in den Quellen nicht benannt." }
        ]},
        { h: "Wie reagierte die übrige Chipbranche?", items: [
          { tag: "fakt", text: "AMD stieg am 12.11. um 5,86 % auf 562,44 Dollar, Broadcom um 5,54 % auf rund 364 Dollar; William Blair stufte AMD auf „Outperform” hoch, Bank of America erhöhte das Kursziel auf 700 Dollar. TSMC erholte sich nach vorherigen Kursverlusten um rund 4 % nach Bekanntwerden der Anthropic/OpenAI-Investition." },
          { tag: "fakt", text: "Die addierten Investitionsausgaben (Capex) von Amazon, Alphabet, Microsoft und Meta erreichten im dritten Quartal 2026 mit 201,9 Mrd. Dollar einen Rekordwert; Meta erhöhte seine Jahresprognose 2026 auf 125 bis 145 Mrd. Dollar.",
            ask: [{ label: "Was treibt die hohen KI-Investitionen?", ref: "e:ai-capex" }] }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 2, zum Marvell-Lumentum-Deal und zur Chipbranche in Meldung 13.",
      terms: ["hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:circular-financing", "e:custom-chips"],
      sources: [
        { title: "NVIDIA Investor Relations: NVIDIA Announces CEO Transition", url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/" },
        { title: "Washington Post: Jensen Huang resigns as Nvidia CEO after affair with alleged spy", url: "https://www.washingtonpost.com/technology/2026/11/12/nvidia-board-weighs-jensen-huangs-future-after-affair-with-allege-chinese-spy/" },
        { title: "CNBC: Anthropic sets price range of $70 to $78 in upcoming IPO", url: "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html" },
        { title: "Fortune: Anthropic sets IPO range valuing it at up to $1.4 trillion", url: "https://fortune.com/2026/11/10/anthropic-ipo-price-range-ai-stock-sell-off/" },
        { title: "Bloomberg: Anthropic IPO – Claude Maker Seeks Up to $1.5 Trillion Valuation", url: "https://www.bloomberg.com/news/articles/2026-11-10/anthropic-targets-64-4-billion-ipo-nearing-spacex-s-record" }
      ]
    },
    /* 15 ENERGIE: BRENT/OPEC+/GASSPEICHER */
    {
      id: "energie-brent-opec-gasspeicher-ttf-11-13", cats: ["energy"], when: "OPEC+-Entscheidung 1./2.11. · IEA-Bericht 13.11. · Gasspeicherstand Bundesnetzagentur 13.11.",
      headline: "IEA erwartet erstmals seit Kriegsbeginn einen Ölüberschuss, deutsche Gasspeicher bleiben historisch niedrig gefüllt",
      sec30: "Brent-Rohöl hält sich am Freitag bei rund 95,8 Dollar je Barrel, nachdem die Internationale Energieagentur (IEA) am 13.11. erstmals seit Beginn des Iran-Kriegs einen möglichen Angebotsüberschuss am Ölmarkt meldete. OPEC+ hatte die Fördermenge für Dezember bereits am 1./2.11. unverändert bei rund 31 Mio. Barrel pro Tag gelassen; das nächste Treffen zu den Januar-Quoten ist für den 29.11. angesetzt. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.11. bei 57,7 % Füllstand (142,7 TWh) – deutlich unter dem Zielwert von 80 % zum 1.11. und dem niedrigsten November-Stand seit Jahren. Der europäische Gaspreis TTF lag zuletzt bei rund 89,45 Euro je Megawattstunde.",
      blocks: [
        { h: "Wie hat sich der Ölpreis entwickelt, und warum?", items: [
          { tag: "fakt", text: "Brent-Rohöl war am Dienstag auf rund 93,50 Dollar gestiegen (+2,3 %) nach neuen Tankerzwischenfällen in der Straße von Hormus und zog am Mittwoch nach Trumps Absage an einen Iran-Deal auf rund 95,80 Dollar weiter an (+3,3 %, mehr in Meldung 10). Am Freitag notiert Brent mit rund 95,5 bis 96,3 Dollar je Zeitpunkt leicht niedriger; binnen 30 Tagen ist der Preis dennoch um rund 9 % gefallen, liegt aber weiterhin gut 50 % über dem Niveau vor einem Jahr." },
          { tag: "fakt", text: "Die Internationale Energieagentur (IEA) meldete am 13.11. erstmals seit Beginn des Iran-Kriegs einen möglichen Angebotsüberschuss: Das globale Ölangebot stieg im Oktober um 2,3 Mio. Barrel pro Tag auf 105,4 Mio. Barrel, getragen von erholten Golf-Exporten trotz des fortbestehenden Konflikts; für das vierte Quartal wird nun ein Überschuss von rund 2 Mio. Barrel pro Tag erwartet, statt des zuvor erwarteten Defizits.",
            ask: [{ label: "Was ist ein Öl-Future?", ref: "t:oil-future" }] }
        ]},
        { h: "Was entscheidet OPEC+?", items: [
          { tag: "fakt", text: "Die OPEC+-Kernallianz aus sieben Ländern (Saudi-Arabien, Russland, Irak, VAE, Kuwait, Kasachstan, Oman) beschloss bereits am 1./2.11., die Fördermenge für Dezember unverändert bei rund 31 Mio. Barrel pro Tag zu lassen – wie bereits im September, Oktober und November. Das nächste Treffen zu den Januar-2027-Quoten ist für Sonntag, den 29.11.2026, angesetzt.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie ist die Lage bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.11.2026 bei 57,7 % Füllstand (142,7 TWh) – deutlich unter dem für den 1.11. vorgesehenen Zielwert von 80 % und niedriger als in allen Novembern seit mindestens 2022 (November 2025: 75,1 %).",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] },
          { tag: "position", text: "Die Bundesnetzagentur erklärte, die Gasversorgung in Deutschland sei stabil und die Versorgungssicherheit gewährleistet; das Erreichen der Zielwerte sei dafür nicht zwingend notwendig, da auch Pipeline-Importe, LNG-Kapazität und Nachfragesteuerung zählten. Der Speicherverband INES warnte dagegen vor möglichen Engpässen bei einem außergewöhnlich kalten Winter." }
        ]},
        { h: "Wie ist die Lage bei TTF und den Strompreisen?", items: [
          { tag: "unbestaetigt", text: "Der europäische Gaspreis TTF schwankte zuletzt zwischen rund 84,31 Euro je Megawattstunde (9.11.) und 89,45 Euro (12.11.) – ein plausibler Tagesausschlag, aber kein einheitlicher aktueller Punktwert für den 13.11. in den gesichteten Quellen." },
          { tag: "fakt", text: "Der deutsche Börsenstrompreis schoss am 9.11. wegen einer Dunkelflaute (geringer Wind- und Solarproduktion) zeitweise auf 644 Euro je Megawattstunde – rund viermal so hoch wie im Oktober –, entspannte sich bis zum 12.11. aber wieder auf einen Tagesdurchschnitt von rund 19,9 Cent je Kilowattstunde." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis stark auf einzelne geopolitische Aussagen reagiert, während die deutschen Gasspeicher trotz insgesamt moderaterer Preise historisch niedrig gefüllt sind, zeigt, dass Öl- und Gasmarkt derzeit auf unterschiedliche Faktoren reagieren: Öl vor allem auf die Nachrichtenlage zum Hormus-Konflikt und das IEA-Angebotsbild, Gas stärker auf saisonale Entnahmen und die Einschätzung der Bundesnetzagentur zur Versorgungssicherheit.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zur Iran-Diplomatie und Trumps Kehrtwende in Meldung 10.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:gas-ttf", "e:energy-germany", "e:opec-plus-why"],
      sources: [
        { title: "Invezz: Oil price today – Brent holds near $96 as IEA sees first surplus since Iran war", url: "https://invezz.com/news/2026/11/13/oil-price-today-brent-holds-near-96-as-iea-sees-first-surplus-since-iran-war/" },
        { title: "Bloomberg: Global Oil Market Swings to Surplus on Gulf Exports, IEA Says", url: "https://www.bloomberg.com/news/articles/2026-11-13/global-oil-market-swings-to-surplus-on-gulf-exports-iea-says" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Versorgungssicherheit/aktuelle_gasversorgung/start.html" },
        { title: "de.investing.com: OPEC+ stellt Weichen für unveränderte Ölförderung im Dezember", url: "https://de.investing.com/news/commodities-news/opec-stellt-weichen-fur-unveranderte-olforderung-im-dezember-3737485" },
        { title: "netz-trends.de: Strompreis an der Börse springt auf 644 Euro je MWh – viermal so hoch wie im Oktober", url: "https://www.netz-trends.de/strompreis-an-der-boerse-springt-auf-644-euro-je-mwh-viermal-so-hoch-wie-im-oktober/" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX überschritt am Donnerstag erstmals die Marke von 27.000 Punkten (Tageshoch 27.001,67 Punkte), schloss aber bei 26.771,88 Punkten; am Freitag pausiert er knapp im Plus bei rund 26.807 Punkten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Nach dem Rekordlauf der Vorwoche kommt es am Freitag zu Gewinnmitnahmen, während Anleger vor den US-Erzeugerpreisen am Nachmittag und der laufenden Zinsdebatte bei Fed und EZB zurückhaltend agieren." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite liegt bei rund 5,13 % – binnen einer Woche von rund 4,82 % gestiegen –, die Rendite zehnjähriger Bundesanleihen bei rund 3,37 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Nach der heißer als erwartet ausgefallenen US-Inflation für Oktober gilt eine Fed-Zinserhöhung im Dezember am Terminmarkt praktisch als sicher; das belastet tendenziell zinslose Anlagen wie Gold und Bitcoin sowie hoch bewertete Technologiewerte." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold erholte sich am Freitag um rund 0,96 % auf etwa 3.914 Dollar je Feinunze, nachdem der Preis am Donnerstag deutlich unter 4.000 Dollar gefallen war." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro bewegt sich mit rund 1,1058 Dollar kaum gegenüber dem Vortag, da Fed und EZB derzeit ähnliche Zinssignale senden." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin fiel in der Nacht zu Freitag erstmals seit dem 19. August unter 70.000 Dollar und notiert rund 6 bis 6,6 % niedriger als 24 Stunden zuvor." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Gouverneur Christopher Waller und Dallas-Fed-Chefin Lorie Logan signalisierten nach der heißen Oktober-Inflation Offenheit für eine Zinserhöhung im Dezember; Logan hält laut Berichten mindestens zwei weitere Zinsschritte für nötig." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Dass sowohl mehrere Fed-Vertreter als auch EZB-Chefökonom Lane und Bundesbank-Chef Nagel im November 2026 Offenheit für eine Zinserhöhung im Dezember zeigen, deutet auf eine ähnliche geldpolitische Debatte auf beiden Seiten des Atlantiks hin." },
    "ecb-hike": { tag: "position", story: 5, text: "EZB-Chefökonom Philip Lane nannte eine weitere Zinserhöhung im Dezember am 10.11. „prudent”, Bundesbank-Präsident Joachim Nagel bezeichnete sie als „ziemlich offensichtlich” nötig; die Inflation in der Eurozone stieg im Oktober auf 4,0 %." },
    "inflation-what": { tag: "fakt", story: 5, text: "Die Inflation in der Eurozone stieg im Oktober laut Eurostat-Flashschätzung auf 4,0 % (September: 3,8 %), getrieben vor allem von Energiepreisen (+20,8 % gegenüber Vorjahr); die Kernrate blieb bei 2,5 %." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Haushaltsausschuss billigte den Bundeshaushalt 2027 mit einer Nettokreditaufnahme von 122,97 Mrd. Euro im Kernhaushalt; die abschließende Bundestagsberatung ist für den 24. bis 27.11.2026 angesetzt." },
    "debt-brake": { tag: "fakt", story: 7, text: "Von den 122,97 Mrd. Euro Nettokreditaufnahme im Kernhaushalt 2027 entfallen 84,55 Mrd. Euro auf die seit 2025 geltende Ausnahme für Verteidigungsausgaben von der Schuldenbremse." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Forsa sah die AfD am 10.11. bei 27 %, die Union bei 20 %; die Bundesversammlung zur Wahl des Bundespräsidenten am 30.1.2027 besteht aus 1.260 Mitgliedern." },
    "defence-order": { tag: "fakt", story: 11, text: "Belgien bestellte bei Rheinmetall 20 Skyranger-30-Flugabwehrsysteme im dreistelligen Millionenbereich; RENK meldete einen Rekord-Auftragsbestand von 7,6 Mrd. Euro." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie fiel diese Woche auf ein 52-Wochen-Tief von 742,50 Euro, nachdem der Boxer-Großauftrag „Arminius” von Dezember 2026 auf Februar 2027 verschoben wurde." },
    "nato-target": { tag: "fakt", story: 11, text: "Hensoldt hob beim Kapitalmarkttag in London sein Umsatzziel für 2035 erstmals auf 10 Mrd. Euro an und bestätigte das Ziel von 6 Mrd. Euro für 2030; der deutsche Verteidigungshaushalt 2026 liegt über 108 Mrd. Euro." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Der Bund übernimmt laut Berichten für 6,6 Mrd. Euro die Hälfte von KNDS; Evonik bekräftigte am 9.11. seine Ablehnung des auf 24 Euro je Aktie erhöhten BASF-Übernahmeangebots." },
    "deal-risks": { tag: "position", story: 13, text: "Merger-Arbitrage-Spezialisten sehen die Erfolgswahrscheinlichkeit der 115-Milliarden-Dollar-Fusion von Marvell und Lumentum nur noch bei rund 50 %; als größtes Zeitrisiko gilt die chinesische Kartellprüfung." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Ein KBRA-Report zeigt einen Anstieg der Zahl ausfallender Private-Credit-Kreditnehmer um 22 % gegenüber dem Vorquartal auf einen Rekordwert von 112 Kreditnehmern." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Nicht börsennotierte BDCs verzeichneten im dritten Quartal 2026 Netto-Abflüsse von 4,1 Mrd. Dollar – das dritte Quartal in Folge und das schwächste Fundraising-Quartal seit Ende 2020." },
    "ai-capex": { tag: "fakt", story: 14, text: "Die addierten Investitionsausgaben von Amazon, Alphabet, Microsoft und Meta erreichten im dritten Quartal 2026 einen Rekordwert von 201,9 Mrd. Dollar; Meta erhöhte seine Jahresprognose auf 125 bis 145 Mrd. Dollar." },
    "circular-financing": { tag: "fakt", story: 14, text: "Nvidia, Google/Alphabet, AMD, Micron, Broadcom und Microsoft beteiligen sich mit insgesamt 26 Mrd. Dollar an Anthropics Börsengang, der mit einer Bewertung von bis zu 1,4 Billionen Dollar geplant ist." },
    "why-oil-up-geo": { tag: "position", story: 10, text: "Präsident Trump erklärte am 12.11. auf Truth Social, die USA bräuchten „keinen Deal” mehr mit dem Iran; Irans Seite wies ein mögliches Vance-Rezaei-Treffen als „fabricated” zurück." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Katars Vorschlag zur Öffnung der Straße von Hormus gegen Freigabe von 8 Mrd. Dollar iranischer Gelder stand nach Trumps Absage am 12.11. weiterhin ohne Einigung." },
    "gas-ttf": { tag: "unbestaetigt", story: 15, text: "Der europäische Gaspreis TTF schwankte zuletzt zwischen rund 84,31 Euro (9.11.) und 89,45 Euro (12.11.) je Megawattstunde." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.11. bei 57,7 % Füllstand (142,7 TWh) – deutlich unter dem Zielwert von 80 % zum 1.11." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ ließ die Fördermenge für Dezember am 1./2.11. unverändert bei rund 31 Mio. Barrel pro Tag; das nächste Treffen zu den Januar-Quoten ist für den 29.11.2026 angesetzt." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 4,
      q: "Wie fiel die US-Kernrate der Inflation (Kern-VPI) für Oktober 2026 im Vergleich zur Markterwartung aus, und wie reagierten die US-Börsen am Tag der Veröffentlichung?",
      options: [
        "Die Kernrate fiel auf 0,0 %, die Börsen stiegen deutlich",
        "Die Kernrate wurde gar nicht veröffentlicht",
        "Die Kernrate lag mit 0,3 % über der Erwartung von 0,2 %, Nasdaq und S&P 500 fielen",
        "Die Kernrate traf exakt die Erwartung von 0,2 %, die Börsen bewegten sich kaum"
      ],
      answer: 2,
      explain: "Die Kernrate stieg im Oktober um 0,3 % statt der erwarteten 0,2 %, die Gesamtrate um 0,4 %. Am Tag der Veröffentlichung gaben Nasdaq und S&P 500 nach, die Rendite zehnjähriger US-Anleihen stieg in Richtung 5 %."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Wer übernahm nach Jensen Huangs Rücktritt interimistisch die Führung von Nvidia?",
      options: [
        "Lisa Su",
        "Ein externer Berater der US-Regierung",
        "Jensen Huangs Sohn",
        "Colette Kress, die bisherige Finanzchefin"
      ],
      answer: 3,
      explain: "Nvidias bisherige Finanzchefin (CFO) Colette Kress übernahm laut SEC-Mitteilung interimistisch die Rolle der CEO, nachdem Huang nach 33 Jahren zurückgetreten war."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Wie hoch ist laut Haushaltsausschuss die Nettokreditaufnahme im Kernhaushalt 2027, und welcher Teil davon entfällt auf die Ausnahme für Verteidigungsausgaben von der Schuldenbremse?",
      options: [
        "122,97 Mrd. Euro insgesamt, davon 84,55 Mrd. Euro über die Verteidigungsausnahme",
        "560,92 Mrd. Euro insgesamt, keine Ausnahme",
        "61,85 Mrd. Euro insgesamt, komplett ohne Ausnahme",
        "396,21 Mrd. Euro insgesamt, komplett über die Verteidigungsausnahme"
      ],
      answer: 0,
      explain: "Der Haushaltsausschuss billigte eine Nettokreditaufnahme von 122,97 Mrd. Euro im Kernhaushalt, davon 84,55 Mrd. Euro über die seit der Reform 2025 geltende Ausnahme für Verteidigungsausgaben oberhalb von 1 % des BIP."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 10,
      q: "Angenommen, Katars Vermittlungsvorschlag zur Öffnung der Straße von Hormus wäre am 12.11.2026 von den USA angenommen worden, statt dass Trump einen Deal für überflüssig erklärte. Was wäre dadurch für den Brent-Ölpreis unter sonst gleichen Bedingungen wahrscheinlicher geworden?",
      options: [
        "Der Ölpreis wäre eher gestiegen, weil weniger Angebot verfügbar wäre",
        "Der Ölpreis wäre eher gesunken, weil eine wichtige Route für den Öltransport sicherer geworden wäre",
        "Es gibt keinen Zusammenhang zwischen der Straße von Hormus und dem Ölpreis",
        "Der Goldpreis wäre automatisch im gleichen Ausmaß gestiegen"
      ],
      answer: 1,
      explain: "Die Straße von Hormus ist eine zentrale Route für den weltweiten Öltransport. Eine Öffnung und Entspannung hätte die Angebotssicherheit erhöht, was den Ölpreis tendenziell gesenkt hätte. Stattdessen stieg Brent nach Trumps Absage weiter an."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 5,
      q: "Sowohl in den USA als auch in der Eurozone verdichten sich im November 2026 die Signale für eine Zinserhöhung im Dezember. Was wird dadurch für den zinslosen Goldpreis unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Gold wird automatisch zur neuen Leitwährung",
        "Es gibt keinen Zusammenhang zwischen Notenbankzinsen und dem Goldpreis",
        "Gold wird dadurch tendenziell attraktiver, weil Zinserhöhungen Gold stützen",
        "Gold gerät tendenziell unter Druck, weil höhere Zinsen die Opportunitätskosten fürs Halten von Gold erhöhen"
      ],
      answer: 3,
      explain: "Höhere Zinsen erhöhen die Opportunitätskosten, zinsloses Gold statt verzinster Anlagen zu halten – das drückt tendenziell auf den Goldpreis. Die kurzfristige Erholung am 13.11. ändert daran grundsätzlich nichts."
    }
  ]
};
