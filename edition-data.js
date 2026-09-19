// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-19",
  dateLabel: "Samstag, 19. September 2026",
  updatedLabel: "Recherchestand 19.09.2026",
  marketNote: "Am Wochenende sind die Börsen geschlossen. Die Zahlen zeigen den Handelsschluss vom Freitag, 18.09.2026. Werte mit „≈“ stammen aus Marktberichten vom 17./18.09. und können leicht abweichen.",

  top: [
    { text: "Die Fed hat die Zinsen erhöht, die EZB ebenfalls. Der Grund ist in beiden Fällen Inflation, die Energiepreise antreiben.", ref: "s:3" },
    { text: "Öl bleibt über 100 Dollar, Gas ist in Europa so teuer wie seit Ende 2022 nicht mehr. Auslöser ist der Konflikt im Nahen Osten.", ref: "s:1" },
    { text: "Am Sonntag wählen Berlin und Mecklenburg-Vorpommern. Umfragen sehen beide bisherigen Regierungen ohne Mehrheit.", ref: "s:8" },
    { text: "Rüstungsaktien stehen unter Druck: Der Fregatten-Stopp und Lieferzweifel belasten Rheinmetall & Co.", ref: "s:12" }
  ],

  strip: ["dax", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.304", change: "−1,60 %", dir: "down", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. 25.304 Punkte sind ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: −1,60 % heißt, dass diese Unternehmen zusammen rund 1,6 % niedriger bewertet werden als am Vortag.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 25.717 Punkte (+0,7 %)" },
        { label: "Woche", text: "−1,03 % gegenüber dem Vorfreitag" }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Freitag vor allem diese Faktoren:",
        items: [
          "Die angespannte Lage im Nahen Osten und hohe Ölpreise.",
          "Steigende Renditen am Anleihemarkt.",
          "Stärker als erwartet gestiegene Erzeugerpreise in Deutschland.",
          "Der große Verfallstag, an dem Futures und Optionen auslaufen."
        ]
      },
      important: [
        { area: "Aktien", text: "Der DAX ist ein Stimmungsbild der großen deutschen Firmen, kein Maß für die gesamte Wirtschaft.", ref: "e:index-move" },
        { area: "Zinsen", text: "Steigende Renditen können Bewertungen von Aktien belasten.", ref: "e:yield-stocks" }
      ],
      source: { title: "onvista: Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "sp500": {
      label: "S&P 500", value: "7.650", change: "+0,17 %", dir: "up", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. +0,17 % bedeutet: Die Firmen wurden zusammen 0,17 % höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag (Do)", text: "7.637,74 Punkte (+1,14 %)" },
        { label: "Woche", text: "Wochenverlust laut Yahoo Finance" }
      ],
      moved: {
        intro: "Berichte zum Freitag:",
        items: [
          "US-Aktien schlossen nach dem Zinsschritt der Fed nahezu unverändert.",
          "Steigende Renditen und hohe Ölpreise werden als Belastung genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen.", ref: "e:rates-stocks" }
      ],
      source: { title: "TheStreet: Stock Market Today", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.523", change: "+0,39 %", dir: "up", asof: "Schluss Fr 18.09.", story: 4,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie reagiert deshalb oft empfindlich auf Zinsänderungen.",
      compare: [
        { label: "Vortag (Do)", text: "+1,69 %, angeführt von Chipwerten" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Am Donnerstag führten Chipwerte die Erholung an.",
          "Am Freitag schloss die Nasdaq leicht im Plus."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum fällt die Nasdaq bei steigenden Zinsen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Saxo Bank: Market Quick Take", url: "https://www.home.saxo/en-mena/content/articles/macro/market-quick-take---chips-lead-a-rebound-as-treasury-yields-retreat---18-september-2026-18092026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,148", change: "+0,07 %", dir: "up", asof: "Stand ca. 18.09.", story: 0,
      means: "1 Euro kostet etwa 1,148 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar stärker.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 1,1488" }
      ],
      moved: {
        intro: "Die gesichteten Quellen nennen keine eindeutige Ursache für die Bewegung. Grundsätzlich wirken Zinsunterschiede zwischen den USA und dem Euroraum, was Anleger je nach Erwartung in Dollar oder Euro lenkt.",
        items: []
      },
      important: [
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" },
        { area: "Zinsen", text: "Die Fed und die EZB haben beide erhöht.", ref: "e:fed-hike" }
      ],
      source: { title: "Saxo Bank: Morning Brew", url: "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-september-19-2026-18092026" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,0 %", change: "+6 Bp", dir: "up", asof: "Fr 18.09.", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,0 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 4,94 % (−6,3 Basispunkte)" },
        { label: "Diese Woche", text: "Über 5 %, der höchste Stand seit Juli 2007" }
      ],
      moved: {
        intro: "Nach Berichten trieben diese Faktoren die Renditen in dieser Woche:",
        items: [
          "Der Zinsschritt der Fed und die Signale für eine weitere Erhöhung.",
          "Hohe Ölpreise, die Inflationssorgen nähren."
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
      source: { title: "Yahoo Finance: Dow, S&P mit Wochenverlusten", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-18-dow-sp-500-nasdaq-080504071.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "3,50 %", change: "Mehrjahreshoch 3,57 % (Di)", dir: "flat", asof: "Fr 18.09.", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. 3,50 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,5 % pro Jahr.",
      compare: [
        { label: "Diese Woche", text: "Mehrjahreshoch von 3,57 % am Dienstag" },
        { label: "Euro-Bund-Future", text: "−0,11 % auf 120,64 Punkte (Fr)" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Öl und Fed setzten Bundesanleihen zeitweise unter Druck.",
          "Am Freitag stützten fallende Ölpreise nicht die Kurse, die Renditen blieben nahe dem Hoch."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen machen die geplanten neuen Schulden des Bundes teurer.", ref: "e:debt-brake" },
        { area: "Kredite", text: "Bauzinsen und Firmenkredite orientieren sich an Bund-Renditen.", ref: "e:yield-meaning" }
      ],
      source: { title: "onvista: Deutsche Anleihen", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.361 $", change: "+0,5 %", dir: "up", asof: "Stand ca. 18.09.", story: 0, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.361 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [{ label: "Vortag (Do)", text: "≈ 4.360 $" }],
      moved: { intro: "Die gesichteten Quellen nennen keine eindeutige Ursache für die Bewegung.", items: [] },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Saxo Bank: Morning Brew", url: "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-september-19-2026-18092026" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 105 $", change: "≈ −6 % vs. Wochenhoch", dir: "down", asof: "Fr 18.09.", story: 1, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 105 Dollar je Fass (159 Liter) sind rund 66 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 103,77 $ (−1,5 %)" },
        { label: "WTI", text: "Über 100 $, Wochenschluss ungefähr unverändert" },
        { label: "Wochenhoch", text: "Der Preis liegt rund 6 % darunter" }
      ],
      moved: {
        intro: "Laut Berichten wirkten diese Faktoren:",
        items: [
          "Fallende Preise seit Mittwoch, nachdem Saudi-Arabien ankündigte, etwa die Hälfte der Kapazität seiner beschädigten Ost-West-Pipeline in wenigen Tagen wiederherzustellen.",
          "Anhaltende Angriffe der Huthi auf saudische Energieanlagen und Tanker halten das Risiko hoch."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Zinsen", text: "Hohe Inflation kann höhere Zinsen bedeuten.", ref: "e:central-banks-why" },
        { area: "Aktien", text: "Ölkonzerne verdienen mehr, energieintensive Firmen zahlen mehr.", ref: "e:oil-stocks" },
        { area: "Deutschland", text: "Energieimporte werden teurer.", ref: "e:energy-germany" }
      ],
      source: { title: "onvista: Deutsche Anleihen", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 76.566 $", change: "+0,16 %", dir: "up", asof: "Stand ca. 18.09.", story: 0, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 76.566 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [{ label: "Vortag (Do)", text: "≈ 77.000 $" }],
      moved: { intro: "Die gesichteten Quellen nennen keine eindeutige Ursache für die Bewegung.", items: [] },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Saxo Bank: Morning Brew", url: "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-september-19-2026-18092026" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 ENERGIE */
    {
      id: "oel-gas", cats: ["energy", "markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "Öl bleibt über 100 Dollar, Gas in Europa auf Mehrjahreshoch",
      sec30: "Die US-Ölsorte WTI kostet weiter über 100 Dollar je Fass, Brent lag am Freitag bei rund 105 Dollar, ist aber seit Mittwoch gefallen. In Europa erreichte Erdgas (TTF) zuletzt rund 84 Euro je Megawattstunde, ein Hoch seit Ende 2022.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Der Ölpreis fällt seit Mittwoch, bleibt aber hoch: Brent liegt um 105 $, WTI über 100 $. Nach einem Bericht sagte Saudi-Arabien, es wolle die Hälfte der Kapazität seiner beschädigten Ost-West-Pipeline innerhalb weniger Tage wiederherstellen.",
            ask: [{ label: "Warum ist Öl so teuer?", ref: "e:why-oil-up-geo" }, { label: "Was bedeutet 105 $?", ref: "n:brent" }] },
          { tag: "fakt", text: "Der europäische Gaspreis (TTF) lag am 14. September bei etwa 84 €/MWh, rund 5 % über dem Freitag davor und der höchste Stand seit Ende 2022.",
            ask: [{ label: "Warum ist Gas teuer?", ref: "e:gas-ttf" }, { label: "Was ist TTF?", ref: "t:ttf" }] },
          { tag: "fakt", text: "Europas Gasspeicher waren Anfang September nur zu etwa zwei Dritteln gefüllt. In Deutschland lagen die Füllstände deutlich unter den Werten früherer Jahre.",
            ask: [{ label: "Was bedeutet das für Deutschland?", ref: "e:energy-germany" }] }
        ]},
        { h: "Welche Ursachen werden genannt?", items: [
          { tag: "position", text: "Marktberichte nennen die Lage im Nahen Osten, angegriffene Energieanlagen und unsichere Schifffahrtswege. Für Gas zusätzlich Einschränkungen bei Lieferungen aus Katar." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Öl und Gas stecken in Sprit, Heizung, Strom und der Produktion. Steigen ihre Preise, wirkt das auf Inflation, Zinsen und Unternehmensgewinne.",
            ask: [{ label: "Wie beeinflusst Öl die Inflation?", ref: "e:oil-inflation" }, { label: "Was bedeutet das für die Börse?", ref: "e:oil-stocks" }] }
        ]}
      ],
      reaction: "DAX −1,60 %, Autowerte bis −4,8 %. Marktbeobachter nennen hohe Ölpreise als einen der Belastungsfaktoren.",
      terms: ["brent", "wti", "ttf", "lng", "oil-future"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:oil-inflation", "e:gas-ttf", "e:energy-germany", "chain:oil-to-markets"],
      sources: [
        { title: "onvista: Deutsche Anleihen (Brent, Pipeline)", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" },
        { title: "Yahoo Finance: Marktbericht 18.09.", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-18-dow-sp-500-nasdaq-080504071.html" },
        { title: "ms-aktuell: Gaspreis TTF (14.09.)", url: "https://ms-aktuell.de/welt/gaspreis-ttf-hoch-14-09-2026/" }
      ]
    },

    /* 2 GEOPOLITIK */
    {
      id: "huthi-iran", cats: ["geo", "world", "energy"], when: "Berichte der Woche",
      headline: "Huthi-Angriffe auf Saudi-Arabien: Der Iran-Krieg erreicht die Ölinfrastruktur",
      sec30: "Die pro-iranischen Huthi aus dem Jemen haben ihre Angriffe auf Saudi-Arabien verstärkt. Sie zielen auf Ölanlagen und auf Tanker im Roten Meer. Nach Angaben aus Riad wurden mindestens 73 Menschen verletzt. Die Feuerpause zwischen Saudi-Arabien und den Huthi ist praktisch hinfällig.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Die Golfregion liefert einen großen Teil des Weltölangebots. Angriffe auf Anlagen und Transportwege lassen Märkte mit Ausfällen rechnen, und der Ölpreis reagiert sofort.",
            ask: [{ label: "Warum steigt der Ölpreis bei Konflikten?", ref: "e:why-oil-up-geo" }, { label: "Was folgt daraus für Inflation und Zinsen?", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Die Huthi-Miliz im Jemen, die vom Iran unterstützt wird, und Saudi-Arabien. Nach Berichten schwelt seit Februar eine Konfrontation zwischen den USA und dem Iran." }
        ]},
        { h: "Was sagen die Beteiligten?", items: [
          { tag: "position", text: "Die Zahl von mindestens 73 Verletzten und die Brände an mehreren Orten stammen aus Angaben Riads. Sie wurden hier nicht unabhängig überprüft." },
          { tag: "position", text: "Die Huthi hatten Ende Juli eine Seeblockade gegen Saudi-Arabien angekündigt. Seither greifen sie laut Berichten saudische Öltanker im Roten Meer und Energieanlagen an." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Anfang März 2026 brach der Schiffsverkehr durch die Straße von Hormus laut Berichten nahezu ein. Im April erklärte Iran die Meerenge für vollständig offen, worauf die Ölpreise um mehr als 10 % fielen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Zum aktuellen Zustand der Straße von Hormus sind die gesichteten Quellen uneinheitlich: Ein Interview beschreibt sie als blockiert, andere Berichte nennen erneute Spannungen. Eine gesicherte Lagebeschreibung liegt hier nicht vor." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen könnte das haben?", items: [
          { tag: "einordnung", text: "Höhere Öl- und Gaspreise erhöhen die Inflation. Zentralbanken reagieren darauf mit höheren Zinsen (Fed und EZB haben beide erhöht), was Kredite und Aktienbewertungen belastet.",
            ask: [{ label: "Was bedeutet das für Deutschland?", ref: "e:energy-germany" }, { label: "Was bedeutet das für Aktien?", ref: "e:oil-stocks" }] }
        ]}
      ],
      reaction: "Ölpreise bleiben über 100 $ (WTI). Der DAX gab am Freitag um 1,6 % nach, Marktbeobachter nennen die Nahost-Lage als Belastung.",
      terms: ["brent", "opec-plus", "lng"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:opec-plus-why", "e:oil-inflation", "chain:oil-to-markets"],
      sources: [
        { title: "t-online: Huthi attackieren Energieanlagen in Saudi-Arabien", url: "https://www.t-online.de/nachrichten/ausland/terrorismus/id_101425286/krieg-am-golf-huthi-attackieren-eneergieanlagen-in-saudi-arabien-.html" },
        { title: "taz: Nachrichten im Irankrieg", url: "https://taz.de/-Nachrichten-im-Irankrieg-/!6212705/" },
        { title: "Euronews: Ölpreis fällt nach Hormus-Öffnung (April)", url: "https://www.euronews.com/business/2026/04/17/oil-prices-drop-over-10-after-iran-declares-the-strait-of-hormuz-completely-open" },
        { title: "ZDFheute: EZB-Chefin zur Inflation", url: "https://www.zdfheute.de/wirtschaft/ezb-leitzins-anhebung-lagarde-interview-100.html" }
      ]
    },

    /* 3 FED */
    {
      id: "fed", cats: ["markets", "economy"], when: "Mi 16.09. · Fed-Entscheid",
      headline: "Fed erhöht die Zinsen erstmals seit über drei Jahren",
      sec30: "Die US-Notenbank hat den Leitzins um 0,25 Punkte auf 3,75–4,00 % angehoben, einstimmig mit 12:0. Fed-Chef Kevin Warsh sagte sinngemäß, die Inflation sei zu hoch, und das schon zu lange. Laut Prognose der Mitglieder folgt 2026 eine weitere Erhöhung.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Der FOMC beschloss einstimmig (12:0) eine Erhöhung um 0,25 Prozentpunkte auf 3,75–4,00 %. Es ist die erste Erhöhung seit über drei Jahren.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Der „Dot Plot“, die Zinsprognose der Fed-Mitglieder, sieht im Durchschnitt eine weitere Erhöhung um 0,25 Punkte in diesem Jahr und keine Erhöhung 2027.",
            ask: [{ label: "Was ist ein Dot Plot?", ref: "t:dot-plot" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Warsh sagte laut Berichten sinngemäß, die schlichte Tatsache sei, dass die Inflation zu hoch ist und das schon zu lange. Die Inflation habe seit Jahresbeginn wegen des Kriegs mit dem Iran angezogen.",
            ask: [{ label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }, { label: "Wie hängt Öl mit Inflation zusammen?", ref: "e:oil-inflation" }] },
          { tag: "fakt", text: "Warsh wurde im Mai 2026 Fed-Chef. Berichten zufolge hatte Präsident Trump ihn ausgewählt und Zinssenkungen erwartet. Die Erhöhung geht gegen diese Erwartung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Höhere US-Zinsen verteuern Kredite und machen Anleihen attraktiver. Sie wirken auf Aktien, den Dollar und Kreditmärkte weltweit. Der Referenzzins SOFR folgt dem Leitzins, deshalb steigen auch die Zinsen vieler Unternehmenskredite.",
            ask: [{ label: "Was bedeutet das für Aktien?", ref: "e:rates-stocks" }, { label: "Was bedeutet das für Private Credit?", ref: "e:pc-rates" }, { label: "Was ist SOFR?", ref: "t:sofr" }] }
        ]}
      ],
      reaction: "Die Rendite 10-jähriger US-Staatsanleihen stieg über 5 %, der höchste Stand seit Juli 2007. Der S&P 500 und die Nasdaq schlossen am Freitag leicht höher, der Dow leicht niedriger.",
      terms: ["leitzins", "dot-plot", "basispunkt", "sofr", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:sofr-spread", "e:eurusd-meaning", "chain:rates-to-credit"],
      sources: [
        { title: "CNBC: Fed approves rate hike", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
        { title: "Al Jazeera: US Fed raises rates", url: "https://www.aljazeera.com/economy/2026/9/16/us-fed-raises-interest-rates-as-inflation-weighs-on-economy" },
        { title: "NPR: The Fed raises rates", url: "https://www.npr.org/2026/09/16/nx-s1-5968724/federal-reserve-interest-rates-inflation-economy" },
        { title: "CBC: Fed hikes, defying Trump demands", url: "https://www.cbc.ca/news/business/us-interest-rate-hike-sept-2026-9.7346557" }
      ]
    },

    /* 4 FREITAG */
    {
      id: "freitag", cats: ["markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "DAX bricht am großen Verfallstag um 1,6 % ein, Wall Street hält sich",
      sec30: "Der DAX schloss 1,60 % tiefer bei 25.304 Punkten und liegt auf Wochensicht 1,03 % im Minus. In den USA gaben sich die Indizes kaum verändert: S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,18 %.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "DAX −1,60 % auf 25.304 Punkte, MDax −1,16 % auf 31.084 Punkte. VW-Vorzüge verloren 5,6 % nach einer gesenkten Gewinnprognose, BMW, Continental und Mercedes bis zu 4,8 %, Porsche AG 3,3 %.",
            ask: [{ label: "Was bedeutet −1,6 %?", ref: "n:dax" }, { label: "Warum senken Firmen Prognosen?", ref: "e:companies-costs" }] },
          { tag: "fakt", text: "Gewinner waren Siltronic (+10,5 %, nach einem höheren UBS-Kursziel) und Infineon (+2,7 %, Hochstufung durch Oddo BHF)." },
          { tag: "fakt", text: "In den USA schlossen S&P 500 bei 7.650,50 Punkten (+0,17 %), Nasdaq bei 26.522,55 (+0,39 %) und Dow bei 51.682,64 (−0,18 %).",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Marktbeobachter nennen vor allem vier Faktoren: den großen Verfallstag, die Nahost-Lage samt hohem Ölpreis, steigende Anleiherenditen und stärker als erwartet gestiegene deutsche Erzeugerpreise. Wie viel jeder Faktor beigetragen hat, lässt sich nicht genau sagen.",
            ask: [{ label: "Was ist der große Verfallstag?", ref: "e:verfallstag-why" }, { label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Warum bewegen sich Börsen?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag sagt wenig über die langfristige Entwicklung. Wer in Indexfonds investiert, sieht solche Schwankungen regelmäßig. Wichtiger als der Tageswert ist der Zeithorizont der eigenen Anlage. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Der DAX lag am Donnerstag noch bei etwa 25.717 Punkten (+0,7 %), der Freitag machte das mehr als wett.",
      terms: ["verfallstag", "rendite"],
      followups: ["e:index-move", "e:verfallstag-why", "e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "onvista: Aktien Frankfurt Schluss", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" },
        { title: "TheStreet: Stock Market Today (18.09.)", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026" },
        { title: "Saxo Bank: Morning Brew", url: "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-september-19-2026-18092026" }
      ]
    },

    /* 5 ANLEIHEN */
    {
      id: "renditen", cats: ["markets"], when: "Diese Woche",
      headline: "Renditen auf Mehrjahreshoch: US-10-Jahres-Anleihe über 5 %, Bund bei 3,5 %",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen stieg diese Woche über 5 %, der höchste Stand seit Juli 2007, und lag am Freitag bei rund 5,0 %. Die zehnjährige Bundesanleihe rentierte bei 3,50 %, nach 3,57 % am Dienstag.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "US-10-Jahres-Rendite: Freitag ≈ 5,0 %. Sie hatte in der Woche die Marke von 5 % überschritten (höchster Stand seit Juli 2007). Am Donnerstag lag sie bei etwa 4,94 %.",
            ask: [{ label: "Was bedeutet 5,0 %?", ref: "n:ust10" }, { label: "Ist das hoch?", ref: "n:ust10" }] },
          { tag: "fakt", text: "Bund-Rendite (10 Jahre): 3,50 % am Freitag, Mehrjahreshoch 3,57 % am Dienstag. Der Euro-Bund-Future verlor 0,11 % auf 120,64 Punkte.",
            ask: [{ label: "Was bedeutet 3,5 %?", ref: "n:bund10" }, { label: "Wie hängen Rendite und Kurs zusammen?", ref: "t:rendite" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Berichte nennen den Zinsschritt der Fed und hohe Ölpreise als Treiber. Am Freitag stützte auch der zuletzt fallende Ölpreis die Anleihen nicht, laut Bericht dämpft er Inflationserwartungen nur etwas.",
            ask: [{ label: "Warum steigen Renditen bei Inflationssorgen?", ref: "e:inflation-expectations" }] }
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
        { title: "wallstreet-online: Öl und Fed setzen Bundesanleihen unter Druck (17.09.)", url: "https://www.wallstreet-online.de/nachricht/21391731-oel-fed-bundesanleihen-druck-rendite-mehrjahreshoch" },
        { title: "Yahoo Finance: 10-Jahres-Rendite nahe 5 %", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-18-dow-sp-500-nasdaq-080504071.html" }
      ]
    },

    /* 6 ERZEUGERPREISE */
    {
      id: "erzeugerpreise", cats: ["economy", "germany"], when: "Fr 18.09. · Destatis",
      headline: "Erzeugerpreise steigen im August um 4,6 %, Energie ist Haupttreiber",
      sec30: "Die Preise, die deutsche Hersteller für ihre Produkte verlangen, waren im August 4,6 % höher als ein Jahr zuvor und 1,1 % höher als im Juli. Energie verteuerte sich um 8,3 %, leichtes Heizöl um 65,3 %.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Erzeugerpreise gewerblicher Produkte: +4,6 % gegenüber August 2025 und +1,1 % gegenüber Juli 2026 (Destatis). Laut einem Bericht ist das der höchste Wert seit April 2023.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "e:ppi-what" }] },
          { tag: "fakt", text: "Energie: +8,3 % im Jahresvergleich. Mineralölprodukte +40,5 %, leichtes Heizöl +65,3 %, Kraftstoffe +37,7 %, Erdgas +7,5 %, Strom +1,7 %. Vorleistungsgüter +6,1 % (Metalle +14,8 %).",
            ask: [{ label: "Warum ist Energie der Treiber?", ref: "e:oil-inflation" }] },
          { tag: "fakt", text: "Nicht alles wird teurer: Verbrauchsgüter kosteten 2,0 % weniger, Nahrungsmittel 4,3 % weniger (Butter −40,5 %)." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Erzeugerpreise gelten als Frühindikator für Verbraucherpreise. Steigen die Kosten der Hersteller, geben sie diese oft (nicht immer) weiter. Die Verbraucherinflation lag laut Statistischem Bundesamt im August bei 2,9 %, Haushaltsenergie war 10,5 % teurer.",
            ask: [{ label: "Wie hängen beide zusammen?", ref: "e:inflation-what" }, { label: "Was bedeutet das für Unternehmen?", ref: "e:companies-costs" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Zahlen sprechen dafür, dass Energiepreise die Kosten der Industrie treiben. Ob und wann das bei den Verbrauchern ankommt, ist offen.",
            ask: [{ label: "Warum reagiert die EZB?", ref: "e:central-banks-why" }] }
        ]}
      ],
      reaction: "Marktbericht zufolge belasteten die stärker als erwarteten Erzeugerpreise den DAX am Freitag.",
      terms: ["erzeugerpreise", "inflation", "kerninflation"],
      followups: ["e:ppi-what", "e:inflation-what", "e:oil-inflation", "e:energy-germany", "e:central-banks-why"],
      sources: [
        { title: "Statistisches Bundesamt: Erzeugerpreise August 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_328_61241.html" },
        { title: "finanzen.ch: Erzeugerpreise stärker als erwartet", url: "https://www.finanzen.ch/nachrichten/aktien/deutsche-erzeugerpreise-steigen-im-august-starker-als-erwartet-1036555775" },
        { title: "ftd.de: Inflation Deutschland August", url: "https://www.ftd.de/wirtschaft-und-politik/geldpolitik/inflation-deutschland-aktuell-entwicklung-preise-august-2026-vor-ezb-zinsentscheid/" }
      ]
    },

    /* 7 EZB */
    {
      id: "ezb", cats: ["economy", "markets"], when: "Do 10.09. · EZB-Entscheid",
      headline: "EZB erhöht den Einlagensatz auf 2,50 % – Lagarde: Inflation „wird schlimmer, bevor sie besser wird“",
      sec30: "Die EZB hat am 10. September ihre Leitzinsen um 0,25 Punkte erhöht, der Einlagensatz liegt nun bei 2,50 %. Als Grund nennt sie den Nahost-Konflikt, der Preisdruck erzeugt. Inflation dürfte laut EZB noch länger deutlich über dem Ziel bleiben.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Einlagensatz von 2,25 % auf 2,50 % (+25 Basispunkte). Berichten zufolge ist es die zweite Zinserhöhung dieser Phase.",
            ask: [{ label: "Was ist der Einlagensatz?", ref: "t:leitzins" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Sinngemäß laut EZB-Erklärung erzeugt der Nahost-Konflikt weiter Preisdruck, und die Inflation dürfte noch längere Zeit deutlich über dem Ziel bleiben. Am Ende des Prognosezeitraums sieht die EZB die Inflation bei 2,1 %.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] },
          { tag: "position", text: "EZB-Chefin Lagarde sagte, die Inflation werde „schlimmer, bevor sie besser wird“, und räumte laut ZDF ein, eine Zentralbank könne das Energieproblem selbst nicht lösen.",
            ask: [{ label: "Warum steigen Preise bei Energie?", ref: "e:oil-inflation" }] },
          { tag: "unbestaetigt", text: "Bis wann die Inflation zum Ziel von 2 % zurückkehrt, wird uneinheitlich berichtet (Ende 2027 bzw. Ende 2028)." }
        ]},
        { h: "Was bedeutet das für Verbraucher?", items: [
          { tag: "fakt", text: "Laut ZDF: höhere Zinsen für Kredite, mehr Zinsen auf Spareinlagen und hohe Lebenshaltungskosten als Wahlkampfthema.",
            ask: [{ label: "Was bedeutet das für Kredite und Sparer?", ref: "e:ecb-hike" }] },
          { tag: "position", text: "Lagarde beschrieb die Wachstums- und Arbeitsmarktlage laut Berichten als robust. Die Wachstumsprognose wurde angehoben." }
        ]}
      ],
      reaction: "Die Bund-Rendite erreichte am Dienstag dieser Woche mit 3,57 % ein Mehrjahreshoch.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:oil-inflation", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "ZDFheute: EZB-Chefin – Inflation wird schlimmer, bevor sie besser wird", url: "https://www.zdfheute.de/wirtschaft/ezb-leitzins-anhebung-lagarde-interview-100.html" },
        { title: "LBBW: EZB-Zinsentscheid und Prognosen", url: "https://www.lbbw.de/artikel/maerkte-verstehen/ezb-zinsentscheid-leitzins-prognosen_ait4bfmrfe_d.html" }
      ]
    },

    /* 8 WAHLEN */
    {
      id: "wahlen", cats: ["germany"], when: "So 20.09. · Wahltag",
      headline: "Berlin und Mecklenburg-Vorpommern wählen am Sonntag neue Landtage",
      sec30: "Am 20. September wird in Berlin und Mecklenburg-Vorpommern gewählt. Laut ZDF-Politbarometer Extra hätten in beiden Ländern die bisherigen Regierungen keine Mehrheit. In MV liegt die AfD (37 %) vor der SPD (34 %), in Berlin die Linke (23 %) vor der CDU (21 %).",
      blocks: [
        { h: "Was steht an?", items: [
          { tag: "fakt", text: "Landtagswahlen am Sonntag, 20.09.2026, in beiden Ländern. Die Zahlen unten stammen aus dem ZDF-Politbarometer Extra (Befragung 7.–10.09., veröffentlicht 11.09.) und sind Projektionen, keine Ergebnisse.",
            ask: [{ label: "Warum sind Landtagswahlen wichtig?", ref: "e:landtagswahl-why" }] }
        ]},
        { h: "Mecklenburg-Vorpommern", items: [
          { tag: "fakt", text: "AfD 37 %, SPD 34 %, Linke 10 %, CDU 7 %, Grüne 5 %, BSW 4 %, Sonstige 3 %. Die Regierung aus SPD und Linke hätte laut Umfrage keine Mehrheit. 25 % sind noch unentschlossen.",
            ask: [{ label: "Was heißt „keine Mehrheit“?", ref: "e:coalition-majority" }] },
          { tag: "fakt", text: "Bei der Frage nach dem Regierungschef liegt Ministerpräsidentin Schwesig (SPD) mit 61 % vor AfD-Spitzenkandidat Holm (28 %)." }
        ]},
        { h: "Berlin", items: [
          { tag: "fakt", text: "Linke 23 %, CDU 21 %, AfD 17 %, Grüne 16 %, SPD 10 %, BSW 3 %, Sonstige 10 %. Der Senat aus CDU und SPD hätte keine Mehrheit. Als realistische Optionen nennt das ZDF Bündnisse aus Linke, Grünen und SPD oder aus CDU, Grünen und SPD. 28 % sind unentschlossen." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "einordnung", text: "Nach der Wahl wird ein neues Parlament gebildet, danach verhandeln Parteien über Koalitionen. Das kann Wochen bis Monate dauern. Erst dann steht fest, wer regiert.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was wird diskutiert?", items: [
          { tag: "position", text: "Kommentatoren verweisen auf die bundespolitische Signalwirkung der Wahlen. Nach dem Marktbericht schauen auch Anleger auf den Ausgang." }
        ]}
      ],
      reaction: "Marktteilnehmer richteten laut Bericht am Freitag den Blick auf die Landtagswahlen.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics", "e:rente-basics"],
      sources: [
        { title: "ZDF: Politbarometer Extra zu den Landtagswahlen", url: "https://www.zdfheute.de/politik/deutschland/politbarometer-extra-landtagswahlen-berlin-mecklenburg-vorpommern-100.html" },
        { title: "Infratest dimap: Mecklenburg-Vorpommern", url: "https://www.infratest-dimap.de/umfragen-analysen/bundeslaender/mecklenburg-vorpommern/" }
      ]
    },

    /* 9 HAUSHALT */
    {
      id: "haushalt", cats: ["germany", "economy"], when: "Entwurf · Beratung im Herbst",
      headline: "Haushalt 2027: Etwa 555 Milliarden Euro Ausgaben und über 200 Milliarden Euro neue Schulden geplant",
      sec30: "Die Regierung von Kanzler Merz und Finanzminister Klingbeil plant für 2027 Ausgaben von rund 555 Mrd. € (2026: 524,5 Mrd. €) und Neuschulden von über 200 Mrd. €. Die Verteidigungsausgaben sollen auf rund 109,7 Mrd. € steigen. Der Bundestag soll Ende November entscheiden.",
      blocks: [
        { h: "Was wurde vorgeschlagen?", items: [
          { tag: "fakt", text: "Der Entwurf sieht Ausgaben von rund 555 Mrd. € vor und geplante Schulden von über 200 Mrd. €. Beschlossen wird er erst vom Bundestag, geplant ist das für Ende November.",
            ask: [{ label: "Wie entsteht der Haushalt?", ref: "e:haushalt-basics" }, { label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Verteidigung rund 109,7 Mrd. € (etwa 30 % mehr), Ukraine-Hilfen 11,9 Mrd. €. Gespart werden soll unter anderem bei Förderprogrammen, Elterngeld, Renten- und Krankenversicherung, Klima- und Transformationsfonds und Entwicklungshilfe. Neue Steuern auf Tabak, Alkohol und Sekt sowie eine Plastikabgabe sind geplant.",
            ask: [{ label: "Was bedeutet das NATO-Ziel?", ref: "e:nato-target" }] },
          { tag: "fakt", text: "Eine vereinbarte Steuerreform soll zum 1. Januar 2027 in Kraft treten und Familien sowie Menschen mit niedrigen und mittleren Einkommen um rund 10 Mrd. € im Jahr entlasten (höhere Grundfreibeträge, Kinderfreibeträge und Kindergeld)." }
        ]},
        { h: "Warum wird das gemacht?", items: [
          { tag: "position", text: "Finanzminister Klingbeil: „Man kann sich gegenüber Putin nicht mit der schwarzen Null verteidigen.“ Die Koalition stellt die Verdopplung der Verteidigungsausgaben in vier Jahren als notwendige Stärkung der Abwehrfähigkeit dar. Ziel sind 5 % des BIP bis 2029." }
        ]},
        { h: "Wer unterstützt es – und womit?", items: [
          { tag: "position", text: "Die Koalition aus CDU/CSU und SPD begründet den Entwurf mit Sicherheitslage und Investitionsbedarf. Sie hofft, dass anziehendes Wachstum die Steuereinnahmen erhöht." }
        ]},
        { h: "Wer kritisiert es – und womit?", items: [
          { tag: "position", text: "AfD, Grüne und Linke kritisieren die hohe Schuldenquote und die Prioritäten. Die Opposition warf Merz und Klingbeil laut Bericht Buchungstricks vor. Ein Industrieverband nannte den Schuldenzuwachs „alarmierend“." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "position", text: "Als großes Problem gelten stark steigende Zinszahlungen auf die Staatsschulden. Höhere Renditen (Bund 3,50 %) verteuern die Finanzierung.",
            ask: [{ label: "Warum machen höhere Zinsen Schulden teurer?", ref: "e:debt-brake" }, { label: "Was bedeutet 3,5 % Rendite?", ref: "n:bund10" }] }
        ]}
      ],
      reaction: "Die Rendite zehnjähriger Bundesanleihen liegt nahe einem Mehrjahreshoch, was für den Bund höhere Zinskosten bei neuen Schulden bedeutet.",
      terms: ["schuldenbremse", "rendite"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:nato-target", "e:yield-meaning", "e:rente-basics"],
      sources: [
        { title: "Euronews: Haushalt 2027 mit 200 Mrd. € Schulden", url: "https://de.euronews.com/my-europe/2026/07/06/haushalt-2027-merz-koalition-schulden-200-milliarden-euro" },
        { title: "RPR1/dpa: Koalition im Verteidigungsmodus", url: "https://www.rpr1.de/nachrichten/dpa-politik/koalition-im-verteidigungsmodus-das-steckt-im-etat-2027" },
        { title: "Bundesregierung: Reformen bei Rente, Arbeit, Steuern", url: "https://www.bundesregierung.de/breg-en/news/pension-job-market-tax-reforms-2445962" }
      ]
    },

    /* 10 RENTE */
    {
      id: "rente", cats: ["germany"], when: "Aktuelle Debatte",
      headline: "Rente nach 45 Beitragsjahren: Kommission will Ende der abschlagsfreien Rente",
      sec30: "Die Rentenkommission empfiehlt, die abschlagsfreie Rente nach 45 Beitragsjahren abzuschaffen und durch eine enger gefasste Härtefallregel zu ersetzen. Die Regierung will das Reformpaket im Kern umsetzen. Gewerkschaften und Sozialverbände protestieren.",
      blocks: [
        { h: "Was wurde vorgeschlagen?", items: [
          { tag: "fakt", text: "Die Rentenkommission 2026 empfiehlt, den abschlagsfreien Rentenzugang nach 45 Beitragsjahren komplett zu streichen und durch eine enger gefasste Härtefallregel zu ersetzen.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Die Bundesregierung hat erklärt, das Reformpaket im Kern umsetzen zu wollen. Das Gesetzespaket soll bis Ende 2026 im Bundestag abgeschlossen sein." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Wer heute nach 45 Beitragsjahren ohne Abschläge in Rente gehen kann, könnte diese Möglichkeit künftig verlieren oder nur in Härtefällen behalten. Ob und wie Übergangs- oder Vertrauensschutzregeln gelten, ist laut Berichten Teil der Debatte und noch nicht abschließend geklärt." }
        ]},
        { h: "Warum wird das gemacht?", items: [
          { tag: "position", text: "Der Wegfall soll laut Berichten die Finanzen der gesetzlichen Rentenversicherung entlasten.",
            ask: [{ label: "Warum ist die Rente ein Finanzproblem?", ref: "t:umlage" }] }
        ]},
        { h: "Wer kritisiert es – und womit?", items: [
          { tag: "position", text: "Der DGB will die abschlagsfreie Rente nach 45 Versicherungsjahren erhalten. IG-Metall-Chefin Benner kündigte für den Fall einer Abschaffung sinngemäß heftigen Widerstand in der Metall- und Elektroindustrie an. Sozialverband und Verdi äußerten sich enttäuscht. Eine Petition an den Bundestag fordert, sie als Anerkennung von Lebensleistung beizubehalten." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "position", text: "Experten streiten laut Berichten über Pro und Contra: Befürworter verweisen auf Finanzierbarkeit, Kritiker auf Fairness für langjährig Beschäftigte.",
            ask: [{ label: "Wie hängt die Rente mit dem Haushalt zusammen?", ref: "e:haushalt-basics" }] }
        ]}
      ],
      reaction: null,
      terms: ["umlage"],
      followups: ["e:rente-basics", "e:haushalt-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "ms-aktuell: Rente nach 45 Jahren vor dem Aus", url: "https://ms-aktuell.de/welt/rente-45-jahrgaenge-19-09-2026/" },
        { title: "ihr-rentenberater.de: Rentenreform 2026", url: "https://www.ihr-rentenberater.de/rentenreform-2026/" },
        { title: "buerger-geld.org: Experten streiten über Pro und Contra", url: "https://www.buerger-geld.org/news/rente/rente-mit-45-beitragsjahren-experten-streiten-ueber-das-pro-und-contra-zum-geplante-aus" }
      ]
    },

    /* 11 UKRAINE */
    {
      id: "ukraine", cats: ["world", "geo", "defence"], when: "Aktuell",
      headline: "Ukraine: Neue Gespräche rücken näher, Waffenstillstand nicht in Sicht",
      sec30: "Nach Gesprächen mit US-Unterhändlern in Kiew spricht Präsident Selenskyj von neuen Ansätzen der US-Seite. Einen fertigen Friedensplan oder einen Waffenstillstand gibt es nicht. Für Oktober werden neue Gespräche erwartet, aber Termin und Ort fehlen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Die Aussichten auf Verhandlungen wirken auf Verteidigungsbudgets, Rüstungsaktien und Energiemärkte. Sie sind auch ein Faktor für die Sicherheitspolitik Europas.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Die Ukraine, Russland und die USA als Vermittler. Als mögliche Gastgeber weiterer Gespräche wurden zuletzt die Türkei, die Vereinigten Arabischen Emirate und die Schweiz genannt. Festgelegt ist nichts." }
        ]},
        { h: "Was ist der Stand?", items: [
          { tag: "position", text: "Selenskyj sprach nach den Gesprächen von neuen Ansätzen der US-Seite. Er nannte weder einen fertigen Friedensplan noch eine politische Einigung." },
          { tag: "fakt", text: "Weder Russland noch die Ukraine haben im Zusammenhang mit möglichen Oktober-Gesprächen eine allgemeine Feuerpause angekündigt. Die Reise der US-Unterhändler führte nicht zu einer umfassenden Einstellung der Angriffe." },
          { tag: "fakt", text: "Zu den schwierigsten Fragen zählt weiterhin die Zukunft der von Russland beanspruchten ukrainischen Gebiete." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der Krieg begann mit Russlands großangelegtem Angriff auf die Ukraine im Februar 2022. Seither hat Europa seine Verteidigungsausgaben stark erhöht.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 %?", ref: "e:nato-target" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen könnte das haben?", items: [
          { tag: "einordnung", text: "Nachrichten über Annäherung oder Stillstand bei den Verhandlungen wirken auf die Erwartungen an künftige Rüstungsaufträge. Berichte nennen Signale einer Annäherung zwischen den USA und Russland unter den Gründen für die schwachen Rüstungsaktien.",
            ask: [{ label: "Wie liest man Rüstungsmeldungen?", ref: "e:defence-order" }] }
        ]}
      ],
      reaction: "Rheinmetall liegt seit Jahresbeginn rund 36,5 % im Minus. Als ein Grund werden Signale einer Annäherung zwischen den USA und Russland genannt.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target", "e:defence-order", "e:haushalt-basics"],
      sources: [
        { title: "ZDFheute: Ukraine – Gespräche laufen, Waffenstillstand nicht in Sicht", url: "https://www.zdfheute.de/politik/ausland/sicherheitsgarantien-usa-verhandlungen-jung-ukraine-krieg-russland-100.html" },
        { title: "ms-aktuell: Neue Ukraine-Gespräche rücken näher", url: "https://ms-aktuell.de/welt/ukraine-gespraeche-oktober-13-09-2026/" }
      ]
    },

    /* 12 DEFENCE */
    {
      id: "defence", cats: ["defence", "germany"], when: "Aktuell",
      headline: "Rüstungsaktien unter Druck: F126 gestoppt, Rheinmetall −36,5 % seit Jahresbeginn",
      sec30: "Seit Jahresbeginn liegen Rheinmetall (−36,5 %) und Renk (−22,2 %) im Minus, TKMS (+25,9 %) und Hensoldt (+4,4 %) im Plus. Berichte nennen den Stopp der Fregatte F126, Lieferverzögerungen, Signale einer Annäherung zwischen USA und Russland und ein Wahlergebnis. Gleichzeitig steigt das Verteidigungsbudget.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Das Verteidigungsministerium hat im Juni das Projekt F126 beendet, wegen erheblicher Verzögerungen, enormer Kostensteigerungen und unkalkulierbarer Risiken. Sechs Schiffe hätten rund 18 Mrd. € gekostet.",
            ask: [{ label: "Wie liest man Rüstungsmeldungen?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Als Ersatz sind acht kleinere MEKO-A-200-Fregatten vorgesehen. Die ersten vier kosten rund 6,3 Mrd. €, vorbehaltlich der Zustimmung des Haushaltsausschusses. Eine Option auf vier weitere für rund 5,3 Mrd. € kann bis Ende 2026 gezogen werden." },
          { tag: "fakt", text: "Am Tag des Stopps legte TKMS zeitweise über 10 % zu, Rheinmetall verlor über 15 %." }
        ]},
        { h: "Wer ist der Auftraggeber, was wurde bestellt?", items: [
          { tag: "fakt", text: "Rheinmetall erhielt im zweiten Quartal zwei Aufträge über 155-mm-Artilleriemunition für die Ukraine: einen bezahlt von einem NATO-Staat (mittlerer zweistelliger Millionen-Euro-Betrag, mehrere tausend Granaten und Treibladungen, fertig bis April 2027), einen von der Ukraine (hoher zweistelliger Millionen-Euro-Betrag).",
            ask: [{ label: "Wie liest man so eine Meldung?", ref: "e:defence-order" }] }
        ]},
        { h: "Wie groß ist das im Verhältnis?", items: [
          { tag: "einordnung", text: "Die Munitionsaufträge sind mit mittleren bis hohen zweistelligen Millionenbeträgen klein im Vergleich zu Marineprojekten von 6,3 Mrd. €. Zum Anteil am Rheinmetall-Umsatz liefern die gesichteten Quellen keine Angabe." }
        ]},
        { h: "Welche Gründe werden für die Kursschwäche genannt?", items: [
          { tag: "position", text: "Berichte nennen den F126-Stopp, Meldungen über Lieferverzögerungen, Signale einer Annäherung zwischen den USA und Russland und das Wahlergebnis in Sachsen-Anhalt. Analysten empfehlen die Aktien mehrheitlich weiter zum Kauf. Das ist ihre Einschätzung, keine Garantie.",
            ask: [{ label: "Warum reagieren Rüstungsaktien so stark?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was ist der Rahmen?", items: [
          { tag: "fakt", text: "Der Haushaltsentwurf 2027 sieht Verteidigungsausgaben von rund 109,7 Mrd. € vor. Nach einem Bericht plant die Bundeswehr außerdem Drohnenbeschaffungen im Umfang von rund 10 Mrd. € über die kommenden Jahre.",
            ask: [{ label: "Was bedeutet das 5-%-Ziel?", ref: "e:nato-target" }] }
        ]}
      ],
      reaction: "Rheinmetall kostete am 9. September rund 1.015 €, Renk 43,22 € und Hensoldt 79,86 € (XETRA).",
      terms: ["closing"],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target", "e:haushalt-basics"],
      sources: [
        { title: "Bundeswehr.de: Beendigung F126", url: "https://www.bundeswehr.de/de/meldungen/beendigung-ruestungsprojekt-fregatte-f126-6115992" },
        { title: "suv.report: MEKO A-200 als Ersatz", url: "https://suv.report/bundeswehr-stoppt-fregattenprojekt-f126-marine-soll-stattdessen-meko-a-200-schiffe-erhalten/" },
        { title: "finanzen.net: Rüstungsaktien nach Erholung schwach", url: "https://www.finanzen.net/nachricht/aktien/gewinnmitnahmen-rheinmetall-renk-hensoldt-ruestunsgaktien-nach-kleiner-erholung-schon-wieder-schwach-15925262" },
        { title: "Rheinmetall: Artilleriemunition für die Ukraine", url: "https://www.rheinmetall.com/en/media/news-watch/news/2026/07/2026-07-07-rheinmetall-is-supplying-artillery-ammunition-to-ukraine-funded-by-a-nato-member-state" },
        { title: "defence-network: 10 Mrd. € für Drohnen", url: "https://defence-network.com/deutschland-investiert-10-milliarden-drohnen/" }
      ]
    },

    /* 13 DEALS / PE */
    {
      id: "deals", cats: ["deals", "pe"], when: "Deals 9.–14.09.",
      headline: "Copart will ACV Auctions für 1,9 Mrd. Dollar kaufen – dazu Blackstone, Take-private und PE-Fonds",
      sec30: "Der Autoauktions-Betreiber Copart übernimmt ACV Auctions für rund 1,9 Mrd. Dollar. In derselben Woche kauft Blackstone einen Anbieter von Kühltechnik für Rechenzentren, und die Baldwin Group wird von Investoren von der Börse genommen.",
      deal: { value: "1,90 Mrd. USD", buyer: "Copart, Inc.", target: "ACV Auctions, Inc.", sector: "Fahrzeug-Onlineauktionen (Hintergrundwissen)", type: "Strategische Übernahme (Vereinbarung vom 10.09.2026)" },
      blocks: [
        { h: "Was passiert hier eigentlich?", items: [
          { tag: "fakt", text: "Copart hat am 10. September vereinbart, ACV Auctions zu übernehmen, Wert rund 1,90 Mrd. USD. ",
            ask: [{ label: "Wie läuft eine Übernahme ab?", ref: "e:ma-steps" }, { label: "Was ist ein Closing?", ref: "t:closing" }] }
        ]},
        { h: "Was die gesichteten Quellen nicht nennen", items: [
          { tag: "unbestaetigt", text: "Motive, Finanzierung (Kasse, Kredit oder Aktien), Bewertung je Aktie, EV/EBITDA, beratende Banken und Zeitplan bis zum Closing sind in den gesichteten Meldungen nicht enthalten. Diese Angaben stehen in der Ad-hoc-Mitteilung der Unternehmen.",
            ask: [{ label: "Was bedeutet „Enterprise Value“?", ref: "e:ev-ebitda" }, { label: "Welche Risiken gibt es bis zum Closing?", ref: "e:deal-risks" }] },
          { tag: "einordnung", text: "Hintergrundwissen: Copart und ACV sind Anbieter von Online-Fahrzeugauktionen, die gesichteten Meldungen beschreiben das nicht näher. Typische Motive strategischer Zukäufe sind Marktanteil, Technologie und Kosteneinsparungen. Deals dieser Größe brauchen in der Regel Zustimmung der Aktionäre und Prüfung durch Behörden." }
        ]},
        { h: "Weitere Deals der Woche", items: [
          { tag: "fakt", text: "Independence Realty Trust kauft Centerspace für rund 2,14 Mrd. USD (09.09.). John Marshall Bancorp übernimmt Eagle Financial Services (08.09.). Axogen kauft BioCircuit Technologies für 200 Mio. USD (11.09.)." },
          { tag: "fakt", text: "Blackstone kauft Flow Control Holdings, einen Anbieter von Komponenten für die Flüssigkeitskühlung in Rechenzentren (10.09.). ITC Federal übernimmt Capgemini Government Solutions (13.09.).",
            ask: [{ label: "Warum kaufen Finanzinvestoren?", ref: "e:pe-money" }] },
          { tag: "fakt", text: "Die Baldwin Group soll von Sequence Holdings und DFO Management übernommen und von der Börse genommen werden (14.09.).",
            ask: [{ label: "Warum Take-private?", ref: "e:take-private-why" }, { label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] }
        ]},
        { h: "Private Equity: Fonds im Fundraising", items: [
          { tag: "position", text: "Nach Marktberichten peilt KKR mit seinem Americas Fund XIII mehr als 20 Mrd. USD an (Abschluss Ende 2026 erwartet), Apollo mit Fund X 25 Mrd. USD (Obergrenze angeblich 27 Mrd.), Blackstone mit Capital Partners IX über 25 Mrd. USD. Blackstone meldet laut Bericht ein verwaltetes Vermögen über 1,3 Bio. USD.",
            ask: [{ label: "Wie verdient Private Equity?", ref: "e:pe-money" }] }
        ]}
      ],
      reaction: "Höhere Zinsen verteuern schuldenfinanzierte Übernahmen (LBOs). Ob sich das im Dealvolumen niederschlägt, geben die gesichteten Quellen nicht her.",
      terms: ["closing", "enterprise-value", "ebitda", "lbo", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:ev-ebitda", "e:lbo", "e:pe-money", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "Insidearbitrage: Neue Merger-Ankündigungen", url: "https://www.insidearbitrage.com/category/new-merger-announcements/" },
        { title: "Businesswire: Merger & Acquisition News", url: "https://www.businesswire.com/newsroom/subject/merger-acquisition?page=4" },
        { title: "Airfund: Private Equity Deals 2026", url: "https://www.airfund.io/en/post/private-equity-deals-2026-kuwait-pipeline-apollo-easyjet-weekly" }
      ]
    },

    /* 14 PRIVATE CREDIT */
    {
      id: "private-credit", cats: ["credit", "pe"], when: "Q1/Q2-Daten · Juli",
      headline: "Private Credit unter Stress: Ausfälle und Rücknahmewünsche auf Rekordniveau",
      sec30: "Der US-Markt für Private Credit meldet steigende Ausfälle: Laut Fitch erreichte die Ausfallrate im Juli mit 6,1 % einen Rekord. Bei den größten BDCs stieg der Anteil der Non-Accruals im zweiten Quartal auf 3,95 %. Anleger wollten Rekordsummen aus Fonds abziehen.",
      widget: "sofr",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Laut Fitch erreichte die Ausfallrate im US-Private-Credit-Markt im Juli 2026 mit 6,1 % einen Rekord. Bei den zehn größten BDCs stieg der Anteil der Kredite in Non-Accrual im zweiten Quartal um 0,2 Punkte auf 3,95 % der Schulden zu Anschaffungskosten (3,3 Mrd. $).",
            ask: [{ label: "Was ist eine Default Rate?", ref: "t:default-rate" }, { label: "Was ist ein Non-Accrual?", ref: "t:non-accrual" }, { label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "fakt", text: "Berichten zufolge lagen die Rücknahmewünsche im zweiten Quartal bei 12,4 % des Fondsvermögens, ein Höchstwert, von dem nur ein Teil erfüllt wurde. Bei zwei Blue-Owl-Fonds wollten Anleger 4,7 Mrd. $ abziehen. Blue Owl erfüllte 5 %.",
            ask: [{ label: "Warum begrenzen Fonds Rücknahmen?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Private Credit finanziert viele mittelgroße Unternehmen und Übernahmen. Steigende Ausfälle und Rücknahmewünsche zeigen, dass Anleger die Risiken höher einschätzen. Bei Softwarekrediten (bei BDCs rund ein Viertel der Portfolios) stehen die Sorgen vor KI-Störungen im Mittelpunkt.",
            ask: [{ label: "Warum Softwarekredite?", ref: "e:software-ai-loans" }, { label: "Woran erkennt man Stress?", ref: "e:nonaccrual-default" }] }
        ]},
        { h: "Was sagen die Manager?", items: [
          { tag: "position", text: "Blue Owl führt die hohen Rücknahmewünsche auf Sorgen über KI-bedingte Störungen bei Softwarefirmen zurück. Nach Unternehmensangaben ist im Quartal kein Softwarekredit ausgefallen. Auch der Vermögensverwalter Neuberger Berman meint, die Verkaufswelle bei BDCs erzähle nur eine unvollständige Geschichte. Morgan Stanley warnt dagegen vor Ausfallraten von bis zu 8 % im Direct Lending, gegenüber 2 bis 2,5 % im historischen Durchschnitt." }
        ]},
        { h: "Was hat das mit den Zinsen zu tun?", items: [
          { tag: "einordnung", text: "Viele Kredite sind variabel verzinst (SOFR plus Aufschlag). Nach der Zinserhöhung der Fed steigt SOFR, und Schuldner zahlen mehr. Das erhöht die Erträge der Fonds, belastet aber schwächere Kreditnehmer. Probier es unten aus.",
            ask: [{ label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }, { label: "Was ist SOFR?", ref: "t:sofr" }, { label: "Was sind Credit Spreads?", ref: "e:credit-spread-why" }] }
        ]}
      ],
      reaction: "Die genannten Zahlen stammen aus Quartals- und Monatsberichten und unterscheiden sich je Anbieter in der Messung. Sie sind nicht direkt vergleichbar.",
      terms: ["sofr", "credit-spread", "first-lien", "second-lien", "mezzanine", "pik", "unitranche", "covenant", "default-rate", "non-accrual", "bdc", "direct-lending"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Morningstar: Private Credit Is Showing More Signs of Distress", url: "https://www.morningstar.com/markets/private-credit-is-showing-more-signs-distress" },
        { title: "CAIA: Private Credit Redemptions, Defaults", url: "https://caia.org/blog/2026/04/20/private-credit-redemptions-defaults-and-wrappers-oh-my/" },
        { title: "Semafor: Blue Owl hit by billions in redemptions", url: "https://www.semafor.com/article/07/02/2026/blue-owl-hit-by-billions-in-redemptions-again" },
        { title: "Neuberger: Why the Sell-Off Tells an Incomplete Story", url: "https://www.nb.com/insights/private-credit-and-bdcs-why-the-sell-off-tells-an-incomplete-story" }
      ]
    },

    /* 15 TECH */
    {
      id: "tech-ki", cats: ["tech", "markets"], when: "Hintergrund August · Chipwerte diese Woche",
      headline: "KI-Infrastruktur: Nvidia finanziert OpenAI-Rechenzentrum mit bis zu 105 Mrd. Dollar, Chipwerte führen die Erholung an",
      sec30: "Nvidia stellt laut Bericht bis zu 105 Mrd. Dollar für ein OpenAI-Rechenzentrum in Ohio bereit. OpenAI will außerdem einen eigenen Chip mit Broadcom bis Jahresende einsetzen. Diese Woche führten Chipwerte die Börsenerholung an.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Laut CNBC (17.08.) unterstützt Nvidia die Finanzierung eines KI-Rechenzentrums für OpenAI in Ohio mit bis zu 105 Mrd. $. Zunächst sollen 4,25 Gigawatt Rechenleistung entstehen, mit Option auf weitere 3,75 GW. Die Firma SB Energy baut, besitzt und betreibt den Campus und vermietet ihn 20 Jahre an OpenAI.",
            ask: [{ label: "Was ist ein Gigawatt?", ref: "t:gigawatt" }, { label: "Warum baut man solche Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "OpenAI erklärte laut CNBC (25.08.), Tests seines eigenen Inferenz-Chips „Jalapeño“ (entwickelt mit Broadcom) zeigten einen deutlichen Fortschritt. Der Einsatz ist bis Jahresende geplant.",
            ask: [{ label: "Warum entwickeln Firmen eigene Chips?", ref: "e:custom-chips" }] }
        ]},
        { h: "Wie könnte damit Geld verdient werden, und wer ist betroffen?", items: [
          { tag: "einordnung", text: "OpenAI verkauft Zugang zu KI-Modellen. Nvidia verdient an Chips, SB Energy an Miete. Auch Stromversorger, Kühltechnik-Firmen und Kreditgeber hängen an solchen Projekten. Eigene Chips könnten langfristig Nvidias Anteil bei OpenAI verringern.",
            ask: [{ label: "Wer profitiert noch?", ref: "e:ai-capex" }] }
        ]},
        { h: "Welche Zweifel gibt es?", items: [
          { tag: "position", text: "Fortune berichtete am 18.08., der Umfang des Deals liege 145 Mrd. $ unter früheren Berichten, und sieht darin Sorgen vor „künstlicher“ Nachfrage nach Chips. Das ist die Einschätzung des Mediums.",
            ask: [{ label: "Was bedeutet „zirkuläre Finanzierung“?", ref: "e:circular-financing" }] }
        ]},
        { h: "Und an der Börse?", items: [
          { tag: "fakt", text: "Am Donnerstag führten Chipwerte die Erholung an, die Nasdaq stieg um 1,69 %. Am Freitag legten Siltronic (+10,5 %) und Infineon (+2,7 %) zu." }
        ]}
      ],
      reaction: "Nasdaq +1,69 % am Donnerstag und +0,39 % am Freitag.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing", "e:software-ai-loans"],
      sources: [
        { title: "CNBC: Nvidia financing for OpenAI data center in Ohio", url: "https://www.cnbc.com/2026/08/17/nvidia-financing-open-ai-data-center-ohio.html" },
        { title: "CNBC: OpenAI says its Broadcom chip is a big advance", url: "https://www.cnbc.com/2026/08/25/openai-says-its-broadcom-chip-is-a-big-advance-what-about-nvidia.html" },
        { title: "Fortune: OpenAI data center deal comes in $145 billion lower", url: "https://fortune.com/2026/08/18/openai-data-center-deal-with-nvidia-comes-in-145-billion-lower-than-reportedsignaling-concerns-of-artificial-demand-for-chips/" },
        { title: "Saxo Bank: Chips lead a rebound", url: "https://www.home.saxo/en-mena/content/articles/macro/market-quick-take---chips-lead-a-rebound-as-treasury-yields-retreat---18-september-2026-18092026" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "why-oil-up-geo": { tag: "fakt", story: 2, text: "Aktuell greifen die pro-iranischen Huthi saudische Ölanlagen und Tanker an, und es gibt eine Konfrontation zwischen den USA und dem Iran. WTI liegt über 100 $, Brent bei rund 105 $." },
    "hormuz": { tag: "unbestaetigt", story: 2, text: "Laut Berichten brach der Verkehr Anfang März fast völlig ein, im April erklärte Iran die Meerenge für offen (Ölpreis −10 %). Zum heutigen Status sind die Quellen uneinheitlich." },
    "brent-wti": { tag: "fakt", story: 1, text: "Aktuell: Brent ≈ 105 $, WTI über 100 $. Der Preis ist seit Mittwoch gefallen, etwa 6 % unter dem Wochenhoch." },
    "oil-inflation": { tag: "fakt", story: 6, text: "Deutsche Erzeugerpreise: Energie +8,3 %, leichtes Heizöl +65,3 %, Kraftstoffe +37,7 % im Jahresvergleich. Verbraucherinflation im August 2,9 %." },
    "gas-ttf": { tag: "fakt", story: 1, text: "Der TTF lag am 14.09. bei rund 84 €/MWh, ein Hoch seit Ende 2022. Europas Speicher waren Anfang September nur zu etwa zwei Dritteln gefüllt." },
    "energy-germany": { tag: "einordnung", story: 6, text: "Laut Destatis waren Haushaltsenergie im August 10,5 % und Industrie-Energie 8,3 % teurer als ein Jahr zuvor." },
    "fed-hike": { tag: "fakt", story: 3, text: "Die Fed erhöhte am 16.09. einstimmig um 0,25 Punkte auf 3,75–4,00 %. Die Prognose sieht 2026 eine weitere Erhöhung." },
    "ecb-hike": { tag: "fakt", story: 7, text: "Die EZB erhöhte am 10.09. den Einlagensatz von 2,25 % auf 2,50 %." },
    "central-banks-why": { tag: "fakt", story: 7, text: "Fed und EZB haben diese Woche bzw. vor gut einer Woche beide die Zinsen erhöht, mit Verweis auf energiegetriebene Inflation." },
    "yield-meaning": { tag: "fakt", story: 5, text: "US-10J ≈ 5,0 % (höchster Stand seit Juli 2007 in dieser Woche), Bund-10J 3,50 % (3,57 % am Dienstag)." },
    "yield-stocks": { tag: "position", story: 4, text: "Marktbeobachter nennen steigende Renditen als einen der Faktoren für den DAX-Rückgang um 1,6 % am Freitag." },
    "verfallstag-why": { tag: "fakt", story: 4, text: "Der Freitag, 18.09., war ein großer Verfallstag. Der DAX schloss 1,6 % tiefer." },
    "index-move": { tag: "fakt", story: 4, text: "DAX Freitag: −1,60 % auf 25.304 Punkte. S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,18 %." },
    "ppi-what": { tag: "fakt", story: 6, text: "Erzeugerpreise August 2026: +4,6 % zum Vorjahr, +1,1 % zum Vormonat." },
    "companies-costs": { tag: "fakt", story: 4, text: "VW-Vorzüge fielen am Freitag um 5,6 % nach einer gesenkten Gewinnprognose." },
    "haushalt-basics": { tag: "fakt", story: 9, text: "Entwurf für 2027: rund 555 Mrd. € Ausgaben, Neuschulden über 200 Mrd. €. Beschluss im Bundestag Ende November geplant." },
    "debt-brake": { tag: "position", story: 9, text: "Kritiker verweisen auf steigende Zinszahlungen als großes Problem der hohen Neuverschuldung." },
    "rente-basics": { tag: "position", story: 10, text: "Die Rentenkommission empfiehlt, die abschlagsfreie Rente nach 45 Beitragsjahren abzuschaffen." },
    "landtagswahl-why": { tag: "fakt", story: 8, text: "Am Sonntag, 20.09., wählen Berlin und Mecklenburg-Vorpommern." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Laut ZDF-Politbarometer hätten die bisherigen Regierungen in Berlin (CDU/SPD) und MV (SPD/Linke) keine Mehrheit." },
    "nato-target": { tag: "fakt", story: 9, text: "Der Haushaltsentwurf 2027 plant rund 109,7 Mrd. € für Verteidigung. Ziel der Regierung: 5 % des BIP bis 2029." },
    "defence-order": { tag: "fakt", story: 12, text: "Beispiel: Rheinmetall-Aufträge über 155-mm-Munition (mittlere/hohe zweistellige Mio. €). Die MEKO-A-200-Fregatten sollen ca. 6,3 Mrd. € kosten." },
    "defence-stocks": { tag: "fakt", story: 12, text: "Seit Jahresbeginn: Rheinmetall −36,5 %, Renk −22,2 %, Hensoldt +4,4 %, TKMS +25,9 %." },
    "ma-steps": { tag: "fakt", story: 13, text: "Beispiel diese Woche: Copart will ACV Auctions für rund 1,9 Mrd. $ kaufen (Vereinbarung 10.09.)." },
    "lbo": { tag: "einordnung", story: 13, text: "Höhere Zinsen (Fed, EZB) verteuern Kredite für Übernahmen und machen LBOs teurer." },
    "take-private-why": { tag: "fakt", story: 13, text: "Die Baldwin Group soll von Sequence Holdings und DFO Management von der Börse genommen werden (14.09.)." },
    "pe-money": { tag: "position", story: 13, text: "Fundraising laut Berichten: KKR Americas XIII (Ziel >20 Mrd. $), Apollo Fund X (25 Mrd. $), Blackstone IX (>25 Mrd. $)." },
    "sofr-spread": { tag: "einordnung", story: 14, text: "Nach der Fed-Erhöhung steigt SOFR, und variabel verzinste Kredite werden für Schuldner teurer." },
    "pc-rates": { tag: "fakt", story: 14, text: "Fitch: Ausfallrate im US-Private-Credit im Juli 6,1 %, Rekord. Non-Accruals bei den zehn größten BDCs 3,95 %." },
    "nonaccrual-default": { tag: "fakt", story: 14, text: "Non-Accruals bei den zehn größten BDCs im Q2: 3,95 % (+0,2 Punkte)." },
    "redemption-limits": { tag: "fakt", story: 14, text: "Rücknahmewünsche im Q2 laut Berichten 12,4 % des Fondsvermögens. Blue Owl erfüllte bei zwei Fonds 5 %." },
    "software-ai-loans": { tag: "position", story: 14, text: "Blue Owl führt hohe Rücknahmewünsche auf KI-bedingte Sorgen bei Softwarefirmen zurück." },
    "ai-capex": { tag: "fakt", story: 15, text: "Nvidia stellt laut CNBC bis zu 105 Mrd. $ für ein OpenAI-Rechenzentrum in Ohio bereit (4,25 GW, 20-Jahres-Mietvertrag)." },
    "custom-chips": { tag: "fakt", story: 15, text: "OpenAI will seinen mit Broadcom entwickelten Inferenz-Chip „Jalapeño“ bis Jahresende einsetzen." },
    "circular-financing": { tag: "position", story: 15, text: "Fortune sieht im Nvidia-OpenAI-Deal Anzeichen von Sorgen vor „künstlicher“ Chip-Nachfrage." },
    "eurusd-meaning": { tag: "fakt", story: 0, text: "EUR/USD liegt bei rund 1,148." },
    "gold-why": { tag: "fakt", story: 0, text: "Gold kostet rund 4.361 $ je Feinunze (+0,5 %)." },
    "bitcoin-what": { tag: "fakt", story: 0, text: "Bitcoin liegt bei rund 76.566 $ (+0,16 %)." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Geopolitik & Energie", type: "Zusammenhang", story: 2,
      q: "Angenommen, der Ölpreis steigt stark. Welche Entwicklung wird – unter sonst gleichen Bedingungen – wahrscheinlicher?",
      options: [
        "Der energiebezogene Inflationsdruck nimmt zu",
        "Die Inflation sinkt, weil Verbraucher weniger konsumieren müssen",
        "Zentralbanken senken sofort die Zinsen, um die Wirtschaft zu stützen",
        "Die Erzeugerpreise sinken, weil Firmen billiger produzieren"
      ],
      answer: 0,
      explain: "Öl steckt in Sprit, Heizung, Transport und Produktion. Teurere Energie treibt die Preise. Zentralbanken reagieren darauf eher mit höheren Zinsen, wie diese Woche Fed und EZB."
    },
    {
      topic: "Finanzmärkte", type: "Zusammenhang", story: 5,
      q: "Die Rendite einer Staatsanleihe steigt. Was passiert normalerweise mit dem Kurs bereits ausgegebener Anleihen mit niedrigerem Zins?",
      options: [
        "Der Kurs sinkt",
        "Der Kurs steigt",
        "Der Kurs bleibt unverändert",
        "Der Kurs hängt allein vom Ölpreis ab"
      ],
      answer: 0,
      explain: "Neue Anleihen zahlen mehr. Deshalb sind alte, niedriger verzinste Anleihen weniger wert, ihr Kurs fällt und ihre Rendite steigt."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 9,
      q: "Was sieht der Haushaltsentwurf 2027 der Bundesregierung laut Berichten vor?",
      options: [
        "Ausgaben von rund 555 Mrd. € und Neuschulden von über 200 Mrd. €",
        "Ausgaben von rund 300 Mrd. € ohne neue Schulden",
        "Eine vollständige Streichung der Verteidigungsausgaben",
        "Einen Haushalt, den der Bundesrat allein beschließt"
      ],
      answer: 0,
      explain: "Geplant sind rund 555 Mrd. € Ausgaben, darunter etwa 109,7 Mrd. € für Verteidigung. Beschließen soll den Haushalt der Bundestag, geplant Ende November."
    },
    {
      topic: "Deals & Private Equity", type: "Zusammenhang", story: 13,
      q: "Was ist ein Take-private, wie es bei der Baldwin Group vereinbart wurde?",
      options: [
        "Investoren kaufen ein börsennotiertes Unternehmen komplett und nehmen es von der Börse",
        "Ein Unternehmen geht zum ersten Mal an die Börse",
        "Zwei Firmen fusionieren zu gleichen Teilen und bleiben börsennotiert",
        "Der Staat verstaatlicht ein Unternehmen"
      ],
      answer: 0,
      explain: "Bei einem Take-private bezahlen Investoren die Aktionäre aus, danach gehört die Firma nur noch ihnen. Oft geschieht das mit Krediten (LBO)."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 14,
      q: "Ein Kredit hat einen Zins von SOFR + 5 Prozentpunkten. Was passiert, wenn SOFR von 4,0 % auf 4,25 % steigt?",
      options: [
        "Der Kreditzins steigt von etwa 9,00 % auf etwa 9,25 %",
        "Der Kreditzins bleibt bei 5 %, weil der Aufschlag fest ist",
        "Der Kreditzins sinkt, weil der Aufschlag dann kleiner wird",
        "Der Kredit wird sofort zurückgezahlt"
      ],
      answer: 0,
      explain: "Der Zins besteht aus Referenzzins plus Aufschlag. Der Aufschlag bleibt fest, der Referenzzins schwankt, deshalb steigt der Gesamtzins um 0,25 Punkte."
    }
  ]
};
