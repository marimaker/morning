// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-10",
  dateLabel: "Dienstag, 10. November 2026",
  updatedLabel: "Recherchestand 10.11.2026",
  marketNote: "Diese Ausgabe entsteht am Dienstagmittag, 10.11.2026. DAX und Euro Stoxx 50 zeigen den Zwischenstand des laufenden Dienstagshandels (nicht den Schlusskurs); S&P 500, Nasdaq Composite und Dow Jones zeigen dagegen noch den Schlusskurs vom Montag, 9.11.2026, da der US-Handel erst um 15:30 Uhr MEZ beginnt. Der US-Inflationsbericht für Oktober wird erst um 14:30 Uhr MEZ veröffentlicht und war zum Redaktionsschluss dieser Ausgabe noch nicht erschienen; mehrere Werte (insbesondere EUR/USD, Gold, Brent und die US-Rendite) können sich im Tagesverlauf danach noch deutlich ändern. Bei Brent und beim europäischen Gaspreis TTF weichen einzelne Quellen je nach Erhebungszeitpunkt und Kontraktmonat zudem spürbar voneinander ab; das ist im Folgenden jeweils kenntlich gemacht. Nur Bitcoin handelt durchgehend.",

  top: [
    { text: "Fed-Gouverneur Christopher Waller signalisiert in einer Rede in London Offenheit für eine Zinserhöhung im Dezember um 25 Basispunkte, womöglich auch 50; der US-Inflationsbericht für Oktober wird erst am Nachmittag um 14:30 Uhr MEZ veröffentlicht.", ref: "s:4" },
    { text: "Anthropic legt für seinen Börsengang an der Nasdaq eine Preisspanne von 70 bis 78 Dollar je Aktie fest (Bewertung bis zu rund 1,4 Billionen Dollar); Präsident Trump bestätigt zugleich, dass sich das FBI mit der Affäre um Nvidia-Chef Jensen Huang befasst.", ref: "s:14" },
    { text: "Hensoldt hebt beim Kapitalmarkttag in London sein Umsatzziel für 2035 erstmals auf 10 Milliarden Euro an, während sich die Rheinmetall-Aktie weiter von ihrem Tief seit Februar 2025 erholt.", ref: "s:10" },
    { text: "In Abu Dhabi beginnen die ersten dreiseitigen Gespräche zwischen den USA, der Ukraine und Russland seit Februar 2026; Katars Premierminister setzt nach dem Trump-Treffen vom Montag seine Vermittlung im Iran-Konflikt fort, während Teheran Trumps optimistische Darstellung zurückweist.", ref: "s:9" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.584 Pkt.", change: "+1,2 % bzw. rund +318 Pkt. ggü. Montagsschluss (26.265,56 Pkt.; andere Quellen nennen 26.267 Pkt.)", dir: "up", asof: "Zwischenstand Di 10.11.26, ca. 13:00 Uhr", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als beim letzten Stand.",
      compare: [
        { label: "Montag", text: "Der DAX war am Montag um rund 1,73 % auf 26.267 Punkte gestiegen – der zweite Erholungstag nach dem Ausverkauf der Vorwoche." }
      ],
      moved: {
        intro: "Als Hintergrund für die weitere Erholung am Dienstag nennen Berichte:",
        items: [
          "Deutlich fallende Ölpreise im Zuge der Iran-Diplomatie sowie ein fester Technologiesektor (u. a. Infineon) stützten den Index.",
          "Der DAX näherte sich damit wieder seinem Rekordhoch vom Donnerstag der Vorwoche (26.692,90 Punkte); Anleger warten zugleich auf den US-Inflationsbericht für Oktober um 14:30 Uhr MEZ, der als nächster wichtiger Markttreiber gilt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Fed-Gouverneur Wallers Zinserhöhungssignal vor dem US-Inflationsbericht in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: DAX bei 26.602 Punkten: L&S-Indikation 0,67 Prozent höher", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-26-602-punkten-l-und-s-indikation-0-67-prozent-hoeher/70485788" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.366,94 Pkt.", change: "+1,22 % ggü. Montagsschluss (6.290,45 Pkt.)", dir: "up", asof: "Zwischenstand Di 10.11.26, 13:21 Uhr", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Montag", text: "Der Index war bereits am Montag deutlich gestiegen und schloss bei 6.290,45 Punkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den weiteren Anstieg am Dienstag:",
        items: [
          "Fallende Ölpreise und die Hoffnung auf eine Lösung im Iran-Konflikt stützten den Euro Stoxx 50; Bankwerte profitierten zusätzlich von steigenden Anleiherenditen in Erwartung einer möglichen EZB-Zinserhöhung im Dezember."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu EZB-Chefökonom Lanes Aussage zu einer möglichen Dezember-Erhöhung in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 steigt zur Mittagszeit um 1,22 Prozent", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-steigt-zur-mittagszeit-um-1-22-prozent/70485936" }
    },
    "sp500": {
      label: "S&P 500", value: "7.549,94 Pkt.", change: "+2,35 % bzw. +173,08 Pkt. ggü. Freitag", dir: "up", asof: "Schluss Mo 9.11.26 (letzter verfügbarer Schlusskurs)", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "US-Vorbörse Dienstag", text: "S&P-500-Futures deuteten am Dienstagmorgen laut Berichten nahezu unverändert, da Anleger auf den US-Inflationsbericht um 14:30 Uhr MEZ warteten." }
      ],
      moved: {
        intro: "Als Hintergrund für die Montagserholung nennen Berichte:",
        items: [
          "Eine deutliche Erholung bei Technologie- und Chipwerten nach dem Ausverkauf der Vorwoche sowie sinkende Ölpreise im Zuge der Iran-Diplomatie stützten die US-Börsen.",
          "Nvidia-Aktien gaben dagegen erneut nach (-4,27 % auf 178,67 Dollar), belastet von der anhaltenden Unsicherheit um die Untersuchung zu CEO Jensen Huang; mehr dazu in Meldung 14."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Gouverneur Waller signalisierte am Dienstag eine mögliche Zinserhöhung im Dezember; mehr in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "TheStreet: Stock Market Today – Dow, S&P 500, Nasdaq Updates, Nov. 9", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-09-202" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.253,14 Pkt.", change: "+2,74 % bzw. +673,72 Pkt. ggü. Freitag", dir: "up", asof: "Schluss Mo 9.11.26", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Dienstag-Futures", text: "Nasdaq-100-Futures deuteten am Dienstagmorgen laut Berichten leicht negativ (−0,2 bis −0,4 %), da Chipwerte vor dem US-Inflationsbericht verkauft wurden." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Montagserholung:",
        items: [
          "AMD, Broadcom und weitere Chipwerte erholten sich am Montag deutlich; AMD stellte für das vierte Quartal einen Rekord-Umsatzausblick von rund 17 Mrd. Dollar in Aussicht und übertrifft damit laut Berichten erstmals Intels Prognose.",
          "Nvidia blieb dagegen das Schlusslicht im Chipsektor, belastet von der Untersuchung zu CEO Jensen Huang (Meldung 14)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu AMDs Ausblick und zur Nvidia-Untersuchung in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "TheStreet: Stock Market Today – Dow, S&P 500, Nasdaq Updates, Nov. 9", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-09-202" }
    },
    "dow": {
      label: "Dow Jones", value: "52.389,75 Pkt.", change: "+2,15 % bzw. +1.104,02 Pkt. ggü. Freitag", dir: "up", asof: "Schluss Mo 9.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Freitag", text: "Der Dow war am Freitag als einziger der drei großen US-Indizes im Minus geblieben; am Montag drehte er gemeinsam mit Nasdaq und S&P 500 deutlich ins Plus." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die allgemeine Risikoerholung nach dem Ausverkauf der Vorwoche sowie sinkende Ölpreise stützten auch die stärker industriell geprägten Dow-Werte."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu den Gesprächen zwischen USA, Ukraine und Russland in Abu Dhabi in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "TheStreet: Stock Market Today – Dow, S&P 500, Nasdaq Updates, Nov. 9", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-09-202" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1225", change: "+0,3 % ggü. Montag (≈ 1,1188)", dir: "up", asof: "Stand Di 10.11.26, vormittags", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar stärker.",
      compare: [
        { label: "Unterstützungsniveau", text: "Analysten nannten 1,1100 als wichtige Unterstützungsmarke für EUR/USD im Vorfeld der US-Inflationsdaten; einzelne Quellen nennen für den Dienstagvormittag Werte zwischen 1,1220 und 1,1237." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Bewegung:",
        items: [
          "Die Aussicht auf eine mögliche Fed-Zinserhöhung im Dezember stützte zunächst eher den Dollar; der Euro profitierte zugleich von der Erwartung einer möglichen EZB-Zinserhöhung, worauf EZB-Chefökonom Lane am Dienstag hindeutete (Meldung 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.", ref: "s:5" }
      ],
      source: { title: "FXStreet: 1,1100 – wichtige Unterstützungsmarke für EUR/USD im Countdown zu den US-VPI-Daten", url: "https://www.fxstreet.de.com/news/1-1100-wichtige-unterstutzungsmarke-fur-eur-usd-im-countdown-zu-den-us-vpi-daten-202611100517" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,89 %", change: "+0,04 Prozentpunkte ggü. Montag (≈ 4,85 %)", dir: "up", asof: "Stand Di 10.11.26, Vormittag (vor US-Inflationsbericht)", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,89 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,89 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; Fed-Gouverneur Waller signalisierte am Dienstag aber Offenheit für eine Zinserhöhung im Dezember (mehr in Meldung 4)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg:",
        items: [
          "Wallers Aussage, er neige zu einer Zinserhöhung im Dezember um 25 Basispunkte und könne sich bei hoher Kerninflation auch 50 Basispunkte vorstellen, ließ die Rendite zehnjähriger US-Anleihen am Dienstagmorgen steigen; die am Terminmarkt eingepreiste Wahrscheinlichkeit für eine Dezember-Erhöhung stieg laut Berichten auf nahezu 100 % (von rund 85 % zuvor)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung im Dezember und zu Wallers Aussage in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields edge higher as traders await October CPI report", url: "https://www.cnbc.com/2026/11/10/us-bonds-treasurys-yields.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,25 %", change: "leicht niedriger ggü. Montag (≈ 3,26 %)", dir: "flat", asof: "Stand Di 10.11.26", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 4,89 % weiterhin deutlich über der Bund-Rendite." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "EZB-Chefökonom Philip Lane sagte am Dienstag, eine weitere Zinserhöhung im Dezember sei „prudent”, sollten sich die Daten bis dahin nicht wesentlich ändern; er erwartet eine Inflation von etwas über 4 % zum Jahresende (mehr in Meldung 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Nachfolgefrage und zu Lanes Zinsaussage in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "tradingeconomics.com: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.117 $", change: "-0,6 % ggü. Montag (4.140 $)", dir: "down", asof: "Stand Di 10.11.26, 8:30 Uhr", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 4.100 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Dienstag-Futures", text: "Vorbörsliche Future-Notierungen lagen laut einzelnen Quellen mit rund 4.086 Dollar noch etwas niedriger als der Spotpreis am Morgen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang:",
        items: [
          "Die Aussicht auf eine mögliche Fed-Zinserhöhung im Dezember belastete den zinslosen Goldpreis; gleichzeitig ließ die Hoffnung auf eine Lösung im Iran-Konflikt die Nachfrage nach Gold als Krisenwährung etwas nachlassen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Wallers Zinssignal in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Goldreporter.de: Goldpreis heute – 4.100 Dollar vor US-Inflationsdaten (10.11.2026)", url: "https://www.goldreporter.de/goldpreis-heute-10-11-2026-us-inflation/marktbericht-gold/262941/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 91–93 $ (je nach Quelle/Zeitpunkt, fallend)", change: "deutlich niedriger als am Montag (rund 97–99 $); rund -4 bis -5 % binnen eines Tages", dir: "down", asof: "Stand Di 10.11.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Auch nach dem jüngsten Rückgang liegt der Preis über dem Niveau vor Kriegsbeginn im Februar 2026.",
      compare: [
        { label: "Woche", text: "Brent war Anfang November laut Berichten zunächst auf rund 110 bis 117 Dollar gestiegen, bevor die Hoffnung auf eine diplomatische Lösung im Iran-Konflikt den Preis seither deutlich drückt." }
      ],
      moved: {
        intro: "Als Hintergrund für den weiteren Rückgang am Dienstag nennen Berichte:",
        items: [
          "Berichte über mögliche Fortschritte bei einer Öffnung der Straße von Hormus nach dem Trump-Katar-Treffen vom Montag drückten den Ölpreis; ein entsprechender Bericht wurde von iranischer Seite am Dienstag allerdings als „fake news” zurückgewiesen (mehr in Meldung 8)."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur iranischen Position und zum Dementi aus Teheran in Meldung 8.", ref: "s:8" },
        { area: "Energie", text: "Mehr zu deutschen Gasspeichern und OPEC+ in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "Fortune: Price of Oil, November 10, 2026", url: "https://fortune.com/article/price-of-oil-11-10-2026/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 74.200–74.600 $", change: "-0,3 bis -1,1 % binnen 24 Stunden", dir: "down", asof: "Stand Di 10.11.26, Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 74.000 bis 75.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Woche", text: "Bitcoin war zuletzt bis auf rund 80.935 Dollar gestiegen, bevor es wieder zurückfiel." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Aussicht auf eine mögliche Fed-Zinserhöhung im Dezember belastete tendenziell auch risikoreichere Anlagen wie Bitcoin."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Sunday Guardian Live: Bitcoin Price Today, November 10, 2026", url: "https://sundayguardianlive.com/trending/bitcoin-price-today-november-10-2026-btc-trades-at-74596-after-retreating-from-80935-check-latest-price-in-india-market-trends-key-drivers-320124/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 */
    {
      id: "markets-dienstag-dax-eurostoxx-erholung-11-10", cats: ["markets"], when: "Zwischenstand Di 10.11.2026, mittags",
      headline: "DAX und Euro Stoxx 50 setzen die Erholung fort und nähern sich dem Rekordhoch der Vorwoche",
      sec30: "Der DAX legte am Dienstag bis zum Mittag um rund 1,2 % auf etwa 26.584 Punkte zu, nachdem er bereits am Montag um 1,73 % gestiegen war. Der Euro Stoxx 50 stieg um 1,22 % auf 6.366,94 Punkte. Als Hintergrund nennen Berichte deutlich fallende Ölpreise im Zuge der Iran-Diplomatie sowie einen festen Technologiesektor. Der DAX näherte sich damit wieder seinem Rekordhoch vom Donnerstag der Vorwoche (26.692,90 Punkte); Anleger warten zugleich auf den US-Inflationsbericht für Oktober, der erst am Nachmittag um 14:30 Uhr MEZ veröffentlicht wird.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Dienstag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stand gegen 13:00 Uhr bei rund 26.584 Punkten, ein Plus von etwa 1,2 % gegenüber dem Montagsschluss (26.265,56 bzw. 26.267 Punkten je nach Quelle). Der Euro Stoxx 50 stieg bis 13:21 Uhr um 1,22 % auf 6.366,94 Punkte.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen die Erholung auf deutlich fallende Ölpreise im Zuge der Iran-Diplomatie sowie auf einen festen Technologiesektor zurück; der Chipzulieferer Infineon stützte laut Berichten den DAX zusätzlich." }
        ]},
        { h: "Worauf warten Anleger noch?", items: [
          { tag: "fakt", text: "Der US-Inflationsbericht für Oktober wird erst um 14:30 Uhr MEZ (8:30 Uhr Ostzeit) veröffentlicht. Fed-Gouverneur Christopher Waller hatte zuvor in einer Rede in London Offenheit für eine Zinserhöhung im Dezember signalisiert.",
            ask: [{ label: "Mehr zu Wallers Zinssignal", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 bereits vor der Veröffentlichung der US-Inflationsdaten deutlich zulegen, deutet darauf hin, dass geopolitische Entwicklungen – insbesondere die Hoffnung auf eine Lösung im Iran-Konflikt – an diesem Tag für europäische Anleger im Vordergrund standen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Montag werden in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, der US-Inflationsbericht und Wallers Zinssignal in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ad-hoc-news.de: DAX bei 26.602 Punkten: L&S-Indikation 0,67 Prozent höher", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-26-602-punkten-l-und-s-indikation-0-67-prozent-hoeher/70485788" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 steigt zur Mittagszeit um 1,22 Prozent", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-steigt-zur-mittagszeit-um-1-22-prozent/70485936" },
        { title: "onvista.de: DAX nimmt Rekordjagd wieder auf – Ölpreise fallen", url: "https://onvista.de/news/2026/11-10-dax-nimmt-rekordjagd-wieder-auf-oelpreise-fallen-0-20-26574582" },
        { title: "ariva.de: dpa-AFX Börsentag auf einen Blick – Rekordhoch rückt wieder näher", url: "https://www.ariva.de/news/dpa-afx-boersentag-auf-einen-blick-rekordhoch-rueckt-wieder-12200942" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS MONTAG */
    {
      id: "us-wallstreet-montag-erholung-cpi-dienstag-11-09", cats: ["markets"], when: "Schluss Mo 9.11.2026 · US-Vorbörse Di 10.11.2026",
      headline: "Nasdaq, S&P 500 und Dow schließen den Montag deutlich im Plus, vor dem US-Inflationsbericht zeigen sich die Futures uneinheitlich",
      sec30: "Die Nasdaq Composite legte am Montag um 2,74 % auf 25.253,14 Punkte zu, der S&P 500 um 2,35 % auf 7.549,94 Punkte, der Dow Jones um 2,15 % auf 52.389,75 Punkte. Treiber war laut Berichten vor allem eine breite Erholung bei Technologie- und Chipwerten; AMD stellte zudem für das vierte Quartal einen Rekord-Umsatzausblick in Aussicht, der erstmals über Intels Prognose liegt. Nvidia blieb dagegen das Schlusslicht und schloss 4,27 % tiefer, belastet von der Untersuchung zu CEO Jensen Huang. Am Dienstagmorgen deuteten S&P- und Dow-Futures nahezu unverändert bis leicht positiv, während Nasdaq-100-Futures leicht negativ tendierten, da Anleger vor dem US-Inflationsbericht am Nachmittag Chipwerte verkauften.",
      blocks: [
        { h: "Wie schlossen Nasdaq, S&P 500 und Dow am Montag?", items: [
          { tag: "fakt", text: "Die Nasdaq Composite legte um 2,74 % (+673,72 Punkte) auf 25.253,14 Punkte zu, der S&P 500 um 2,35 % (+173,08 Punkte) auf 7.549,94 Punkte, der Dow Jones um 2,15 % (+1.104,02 Punkte) auf 52.389,75 Punkte.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was trieb AMD und den Chipsektor?", items: [
          { tag: "fakt", text: "AMD meldete für das dritte Quartal einen Umsatz von 13,4 Mrd. Dollar (+45 % gegenüber dem Vorjahr); der Rechenzentrumsumsatz stieg um 97 % auf einen Rekordwert von 8,5 Mrd. Dollar. Für das vierte Quartal stellte AMD einen Umsatz von rund 17 Mrd. Dollar (±3 %) in Aussicht – nach Berichten erstmals über Intels Prognose von 15 bis 16 Mrd. Dollar." }
        ]},
        { h: "Wie entwickelte sich Nvidia im Vergleich?", items: [
          { tag: "fakt", text: "Die Nvidia-Aktie schloss am Montag 4,27 % tiefer bei 178,67 Dollar – ein Marktwertverlust von rund 192 Mrd. Dollar laut Berichten –, belastet von der am Wochenende eingeleiteten Untersuchung zu CEO Jensen Huang.",
            ask: [{ label: "Mehr zur Nvidia-Untersuchung", ref: "s:14" }] }
        ]},
        { h: "Was zeigt der vorbörsliche Handel am Dienstag?", items: [
          { tag: "fakt", text: "S&P-500- und Dow-Futures deuteten am Dienstagmorgen laut Berichten nahezu unverändert bis leicht positiv, während Nasdaq-100-Futures leicht negativ tendierten (−0,2 bis −0,4 %); als Grund nennen Berichte Verkäufe bei Chipwerten vor dem US-Inflationsbericht um 14:30 Uhr MEZ." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Nasdaq, S&P 500 und Dow am Montag gemeinsam deutlich zulegten, während Nvidia weiter isoliert nachgab, deutet darauf hin, dass Anleger die Untersuchung zu Huang weiterhin als unternehmensspezifisches Risiko behandeln. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Reaktion in Europa wird in Meldung 1 behandelt, Gold/Bitcoin/Euro in Meldung 3, der US-Inflationsbericht und Wallers Zinssignal in Meldung 4, die Nvidia-Untersuchung im Detail in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "TheStreet: Stock Market Today – Dow, S&P 500, Nasdaq Updates, Nov. 9", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-09-202" },
        { title: "Dataconomy: AMD Forecasts First Quarterly Revenue Lead Over Intel", url: "https://dataconomy.com/2026/11/10/amd-forecasts-first-quarterly-revenue-lead-over-intel" },
        { title: "Yahoo Finance: Nvidia extends fall as board investigates CEO's affair with alleged Chinese spy", url: "https://finance.yahoo.com/technology/live/nvidia-scandal-live-updates-nvidia-stock--board-investigates-ceo-jensen-huang-affair-alleged-chinese-spy-163130372.html" },
        { title: "Yahoo Finance: Stock market today – Dow, S&P 500, Nasdaq trade mixed ahead of key inflation data", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-mixed-ahead-cpi" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN */
    {
      id: "gold-bitcoin-eurusd-anleihen-dienstag-11-10", cats: ["markets"], when: "Stand Di 10.11.2026",
      headline: "Gold und Bitcoin geben vor dem US-Inflationsbericht nach, Anleiherenditen steigen nach Wallers Zinssignal",
      sec30: "Gold fiel am Dienstag um rund 0,6 % auf etwa 4.117 Dollar je Feinunze, nachdem es am Montag noch um 1,7 % gestiegen war. Bitcoin gab zwischen 0,3 und 1,1 % binnen 24 Stunden nach auf etwa 74.200 bis 74.600 Dollar. Der Euro legte gegenüber dem Dollar leicht zu auf etwa 1,1225. Die US-10-Jahres-Rendite stieg auf rund 4,89 %, nachdem Fed-Gouverneur Waller Offenheit für eine Zinserhöhung im Dezember signalisiert hatte; die Rendite zehnjähriger Bundesanleihen lag mit rund 3,25 % nahezu unverändert.",
      blocks: [
        { h: "Wie haben sich Gold und Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Gold fiel am Dienstagmorgen um rund 0,6 % auf etwa 4.117 Dollar je Feinunze (von 4.140 Dollar am Montag); vorbörsliche Future-Notierungen lagen laut einzelnen Quellen sogar bei rund 4.086 Dollar. Bitcoin gab zwischen 0,3 und 1,1 % binnen 24 Stunden nach auf etwa 74.200 bis 74.600 Dollar, nach einem zwischenzeitlichen Hoch von 80.935 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }, { label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Die Aussicht auf eine mögliche Fed-Zinserhöhung im Dezember belastete den zinslosen Goldpreis und tendenziell auch risikoreichere Anlagen wie Bitcoin; gleichzeitig ließ die Hoffnung auf eine Lösung im Iran-Konflikt die Nachfrage nach Gold als Krisenwährung etwas nachlassen." }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro legte gegenüber dem Dollar leicht zu auf etwa 1,1225 (von rund 1,1188 am Montag); einzelne Quellen nennen für den Vormittag Werte zwischen 1,1220 und 1,1237. Die US-10-Jahres-Rendite stieg auf rund 4,89 % (von 4,85 % am Montag), die Rendite zehnjähriger Bundesanleihen lag mit rund 3,25 % nahezu unverändert.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die US-Rendite steigt, während Gold und Bitcoin nachgeben, passt zum klassischen Muster: Wenn eine Zinserhöhung wahrscheinlicher wird, werden festverzinsliche Anlagen attraktiver und zinslose Anlagen wie Gold tendenziell weniger gefragt. Der endgültige US-Inflationsbericht am Nachmittag kann diese Bewegung noch verstärken oder umkehren. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX/Euro Stoxx 50 wird in Meldung 1 behandelt, die US-Schlusskurse in Meldung 2, Wallers Zinssignal und der US-Inflationsbericht in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Goldreporter.de: Goldpreis heute – 4.100 Dollar vor US-Inflationsdaten (10.11.2026)", url: "https://www.goldreporter.de/goldpreis-heute-10-11-2026-us-inflation/marktbericht-gold/262941/" },
        { title: "Sunday Guardian Live: Bitcoin Price Today, November 10, 2026", url: "https://sundayguardianlive.com/trending/bitcoin-price-today-november-10-2026-btc-trades-at-74596-after-retreating-from-80935-check-latest-price-in-india-market-trends-key-drivers-320124/" },
        { title: "FXStreet: 1,1100 – wichtige Unterstützungsmarke für EUR/USD im Countdown zu den US-VPI-Daten", url: "https://www.fxstreet.de.com/news/1-1100-wichtige-unterstutzungsmarke-fur-eur-usd-im-countdown-zu-den-us-vpi-daten-202611100517" },
        { title: "CNBC: Treasury yields edge higher as traders await October CPI report", url: "https://www.cnbc.com/2026/11/10/us-bonds-treasurys-yields.html" }
      ]
    },
    /* 4 WIRTSCHAFT: FED/WALLER/CPI */
    {
      id: "fed-waller-dezember-zinserhoehung-cpi-11-10", cats: ["economy"], when: "FOMC-Sitzung 27./28.10. · Waller-Rede Di 10.11. · US-Inflationsbericht Di 10.11., 14:30 Uhr MEZ · nächste Fed-Sitzung 9.12.2026",
      headline: "Fed-Gouverneur Waller signalisiert eine mögliche Zinserhöhung im Dezember, am Nachmittag folgt der US-Inflationsbericht für Oktober",
      sec30: "Die Fed hatte ihren Leitzins bei der Sitzung am 27./28.10.2026 mit 10:2-Stimmen bei 3,75 bis 4,00 % gehalten; die Gouverneurinnen Lisa Cook und Beth Hammack stimmten abweichend für eine Erhöhung um 25 Basispunkte. Fed-Gouverneur Christopher Waller sagte am Dienstag in einer Rede in London, er neige nun selbst zu einer Zinserhöhung im Dezember um 25 Basispunkte – bei einer Kernrate der Inflation von 0,3 % oder mehr halte er sogar 50 Basispunkte für erwägenswert. Die am Terminmarkt eingepreiste Wahrscheinlichkeit für eine Dezember-Erhöhung stieg laut Berichten auf nahezu 100 % (von rund 85 % vor der Rede). Der US-Verbraucherpreisindex für Oktober wird erst um 14:30 Uhr MEZ veröffentlicht und enthält wegen einer Datenlücke durch den Regierungsstillstand 2025 keine Jahresrate, sondern nur Monatswerte; erwartet werden +0,3 % in der Gesamtrate und +0,2 % im Kernwert.",
      blocks: [
        { h: "Was hat die Fed zuletzt entschieden?", items: [
          { tag: "fakt", text: "Die US-Notenbank Fed hielt ihren Leitzins bei der Sitzung am 27./28.10.2026 mit 10:2-Stimmen unverändert bei 3,75 bis 4,00 %. Gouverneurin Lisa Cook – ihr erstes Dissens-Votum seit ihrem Amtsantritt 2022 – und die Präsidentin der Cleveland-Fed, Beth Hammack, stimmten für eine sofortige Erhöhung um 25 Basispunkte.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was sagte Fed-Gouverneur Waller am Dienstag?", items: [
          { tag: "position", text: "Waller sagte in einer Rede in London: „If, as I expect, the monthly rate of inflation improves in October, I am leaning toward supporting an increase in our policy rate of 25 basis points.” Für den Fall einer Kernrate von 0,3 % oder mehr fügte er hinzu: „In that case, I believe a 50 basis point hike in the policy rate should be considered at the December meeting.” Zur Begründung sagte er weiter: „Hiking only 25 basis points would put our credibility at risk, a risk I am not eager to take.”" }
        ]},
        { h: "Wie reagierte der Markt auf Wallers Aussage?", items: [
          { tag: "fakt", text: "Die am Terminmarkt eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Dezember stieg laut Berichten auf nahezu 100 % (von rund 85 % vor der Rede); die Rendite zweijähriger US-Anleihen zog um rund 6 bis 7 Basispunkte an, die zehnjährige Rendite um rund 2 bis 3 Basispunkte auf etwa 4,89 %.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was zeigt der US-Inflationsbericht, und wann wird er veröffentlicht?", items: [
          { tag: "fakt", text: "Der US-Verbraucherpreisindex für Oktober wird am Dienstag, 10.11.2026, um 8:30 Uhr Ortszeit (14:30 Uhr MEZ) vom Bureau of Labor Statistics veröffentlicht. Wegen einer durch den Regierungsstillstand 2025 verursachten Datenlücke enthält der Bericht erstmals keine Jahresrate für Gesamt- und Kerninflation, sondern nur Monatswerte; erwartet werden +0,3 % in der Gesamtrate (nach +0,6 % im September) und +0,2 % im Kernwert (nach +0,3 % im September). Zum Redaktionsschluss dieser Ausgabe lagen die tatsächlichen Werte noch nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich zwei Fed-Mitglieder im Oktober für eine Erhöhung statt für einen unveränderten Leitzins stimmten und nun auch Waller offen für einen Dezember-Schritt ist, zeigt eine deutliche Verschiebung der Debatte: Im Mittelpunkt steht nicht mehr die Frage, ob die Fed senkt, sondern ob und wie stark sie im Dezember erhöht. Der Inflationsbericht am Nachmittag dürfte dafür mitentscheidend sein." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1, 2 und 3, zur EZB-Zinsdebatte und zur Eurozonen-Inflation in Meldung 5.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks"],
      sources: [
        { title: "Bloomberg: Fed's Waller Backs December Rate Hike, Says Open to Larger Move", url: "https://www.bloomberg.com/news/articles/2026-11-10/fed-s-waller-backs-december-rate-hike-says-open-to-larger-move" },
        { title: "CNBC: Fed Governor Waller sees December hike likely, opens door to possible half-point increase", url: "https://www.cnbc.com/2026/11/10/fed-governor-waller-sees-december-hike-likely.html" },
        { title: "tochieye.com: Fed Holds Rates at 3.75–4.00% on October 28 With Two Dissents for a Hike", url: "https://www.tochieye.com/en/global/fomc-hold-dissent-hike-october-2026-us-mortgage-2026-11/" },
        { title: "CNBC: A key report for where inflation stood in October comes out Tuesday", url: "https://www.cnbc.com/2026/11/09/october-cpi-report-2026-inflation.html" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB-NACHFOLGE + LANE */
    {
      id: "ezb-nachfolge-lane-zinserhoehung-eurogruppe-11-10", cats: ["economy"], when: "Eurogruppe-Treffen Mo 9.11. · Lane-Rede Di 10.11.2026 · EU-Gipfel 17./18.12.2026",
      headline: "EZB-Chefökonom Lane hält eine weitere Zinserhöhung im Dezember für naheliegend, die Eurogruppe bringt die Lagarde-Nachfolge einen Schritt weiter",
      sec30: "Eurogruppen-Präsident Kyriakos Pierrakakis bestätigte nach dem Treffen am Montag, 9.11.2026, dass nur Klaas Knot (Niederlande) und Pablo Hernández de Cos (Spanien) offiziell für die Nachfolge von EZB-Präsidentin Christine Lagarde nominiert sind; zugleich werden zwei weitere EZB-Spitzenposten neu besetzt – der Sitz von Isabel Schnabel und das Amt des Chefökonomen (derzeit Philip Lane). Die endgültige Entscheidung soll beim EU-Gipfel am 17./18.12.2026 fallen. Lane selbst sagte am Dienstag bei einer Rede in London, es wäre „prudent”, im Dezember erneut zu erhöhen, sollten sich die Daten bis dahin nicht wesentlich ändern; er erwartet eine Inflation von etwas über 4 % zum Jahresende. Die EZB hatte ihre Leitzinsen 2026 bereits zweimal angehoben, zuletzt im September auf aktuell 2,50 % (Einlagesatz).",
      blocks: [
        { h: "Was hat die Eurogruppe zur EZB-Nachfolge besprochen?", items: [
          { tag: "fakt", text: "Eurogruppen-Präsident Kyriakos Pierrakakis bestätigte nach dem Treffen vom 9.11.2026, dass offiziell nur Klaas Knot (ehemaliger Gouverneur der niederländischen Notenbank, nominiert von den Niederlanden) und Pablo Hernández de Cos (Generaldirektor der Bank für Internationalen Zahlungsausgleich, nominiert von Spanien) für die Nachfolge von EZB-Präsidentin Christine Lagarde kandidieren, die ihr Amt am 7.2.2027 abgibt.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Welche weiteren EZB-Posten stehen zur Neubesetzung?", items: [
          { tag: "fakt", text: "Neben der Präsidentschaft werden zeitgleich zwei weitere Direktoriumsposten neu besetzt: der Sitz von Isabel Schnabel, die am 4.1.2027 ausscheidet, und das Amt des Chefökonomen, das Philip Lane Ende Mai 2027 abgibt. Laut Pierrakakis könnten alle drei Personalien gemeinsam auf Ebene der Staats- und Regierungschefs entschieden werden, „to facilitate consensus”; die Entscheidung liegt beim Europäischen Rat und ist für den EU-Gipfel am 17./18.12.2026 vorgesehen." }
        ]},
        { h: "Was sagte EZB-Chefökonom Lane zur Geldpolitik?", items: [
          { tag: "position", text: "Lane sagte bei einer Rede am King's College London: Es wäre „prudent indeed to hike” im Dezember, sollten sich die Daten bis dahin nicht wesentlich ändern. Er erwarte eine Inflation von „a little bit” über 4 % zum Jahresende, mit einer sich beschleunigenden Kern- und Lebensmittelinflation, besonders im ersten Quartal 2027." }
        ]},
        { h: "Wie ist die aktuelle EZB-Zinslage, und wie hoch ist die Inflation?", items: [
          { tag: "fakt", text: "Die EZB-Leitzinsen liegen seit der Ratssitzung vom 29.10.2026 unverändert bei 2,50 % (Einlagesatz), 2,65 % (Hauptrefinanzierungssatz) und 2,90 % (Spitzenrefinanzierungssatz) – nach zwei Erhöhungen im Jahr 2026. Pierrakakis nannte als Hintergrund, dass die europäischen Erdgaspreise weiterhin etwa das Dreifache des Vorkriegsniveaus betragen und die Inflation in der Eurozone im Oktober auf 4 % gestiegen sei.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl Fed-Gouverneur Waller als auch EZB-Chefökonom Lane am selben Tag Offenheit für eine Zinserhöhung im Dezember signalisierten, zeigt, dass beide großen Notenbanken derzeit eher über ein mögliches Anziehen der Geldpolitik diskutieren als über Lockerungsschritte – ein Umfeld, das unter anderem von anhaltend hohen Energiepreisen mitgeprägt wird." }
        ]}
      ],
      reaction: "Mehr zu Wallers Zinssignal und zum US-Inflationsbericht in Meldung 4, zum Ölpreis als Treiber der Energiekomponente in Meldung 15.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "Pressclub.be: Remarks by Kyriakos Pierrakakis following the Eurogroup meeting of 9 November 2026", url: "https://www.pressclub.be/press-releases/remarks-by-kyriakos-pierrakakis-following-the-eurogroup-meeting-of-9-november-2026/" },
        { title: "Bloomberg: ECB Succession Advances as Ministers Look at Trio of Jobs", url: "https://www.bloomberg.com/news/articles/2026-11-09/ecb-succession-advances-as-ministers-look-to-pick-trio-of-jobs" },
        { title: "FXStreet: ECB's Lane – Prudent to hike again as inflation seen over 4% by year-end", url: "https://www.fxstreet.com/news/ecbs-lane-prudent-to-hike-again-as-inflation-seen-over-4-by-year-end-202611100844" },
        { title: "ms-aktuell.de: EZB – Dritte Zinserhöhung 2026 rückt näher", url: "https://ms-aktuell.de/welt/ezb-lane-zinserhoehung-10-11-2026/" }
      ]
    },
    /* 6 DEUTSCHLAND: AIGNER-FRAKTIONSBESUCHE + AFD-KONTROVERSE */
    {
      id: "aigner-fraktionsbesuche-afd-absage-11-10", cats: ["germany"], when: "Nominierung Mo 9.11. · Fraktionsbesuche Di 10.11.2026 · Wahl Bundesversammlung 30.1.2027",
      headline: "Ilse Aigner stellt sich den Bundestagsfraktionen vor, eine Absage an die AfD-Fraktion löst Kontroverse aus",
      sec30: "Einen Tag nach ihrer Nominierung als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl stellte sich Ilse Aigner am Dienstag den Bundestagsfraktionen vor: zunächst der Unionsfraktion, danach der SPD und den Grünen. Bei der AfD-Fraktion blieb der Besuch aus. Aigners Stabschef Erik Markuse begründete dies damit, dass AfD-Vizefraktionschefin Beatrix von Storch die Nominierung öffentlich als „Armutszeugnis” bezeichnet habe. AfD-Chefin Alice Weidel forderte dagegen einen Besuch aus Respekt gegenüber den Wählern; von Storch warf Aigner „mangelnde Souveränität” vor. Die AfD kündigte an, einen eigenen Kandidaten aufzustellen.",
      blocks: [
        { h: "Was wurde vorgeschlagen, und was ist heute neu?", items: [
          { tag: "fakt", text: "Bundeskanzler Friedrich Merz hatte am Sonntagabend angekündigt, die bayerische Landtagspräsidentin Ilse Aigner (CSU) als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl vorzuschlagen; der CDU-Bundesvorstand nominierte sie am Montag „mit lange anhaltendem Beifall”. Am Dienstag stellte sich Aigner den Bundestagsfraktionen vor: zunächst gemeinsam mit Unionsfraktionschef Thorsten Frei und CSU-Landesgruppenchef Alexander Hoffmann der Unionsfraktion, danach der SPD- und der Grünen-Fraktion." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Bei der AfD-Fraktion blieb ein Besuch aus. Aigners Stabschef Erik Markuse erklärte gegenüber „The Pioneer”: „Frau von Storch hat die Nominierung Ilse Aigners öffentlich als Armutszeugnis bezeichnet. Damit erübrigt sich ein Besuch der AfD-Fraktion.” Die Wahl in der Bundesversammlung bleibt für den 30. Januar 2027 angesetzt; wegen der gemeinsamen Mehrheit von Union und SPD gilt ein Sieg Aigners im ersten Wahlgang weiterhin als sehr wahrscheinlich.",
            ask: [{ label: "Wie entsteht eine Regierungsmehrheit?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Warum kam es zu der Absage?", items: [
          { tag: "position", text: "AfD-Vizefraktionschefin Beatrix von Storch hatte die Nominierung Aigners auf der Plattform X öffentlich als „Armutszeugnis” bezeichnet. Diese Formulierung ist eine Bewertung von Storchs, keine Einschätzung dieser Redaktion." }
        ]},
        { h: "Wer unterstützt Aigner und womit?", items: [
          { tag: "position", text: "SPD-Chef Lars Klingbeil sagte, Aigner habe „eine wahnsinnig integrative Kraft” und sei „eine sehr volksnahe Politikerin, die redet mit den Menschen auf Augenhöhe”. Grünen-Fraktionschefin Britta Haßelmann begrüßte, dass nach 75 Jahren erstmals eine Frau Bundespräsidentin werden könnte, und lobte Aigners „nahbares und zugewandtes” Auftreten; Parteichefin Franziska Brantner äußerte die Hoffnung, die Kandidatin könne gesellschaftliche Spaltungen überwinden." }
        ]},
        { h: "Wer kritisiert das Vorgehen und womit?", items: [
          { tag: "position", text: "AfD-Chefin Alice Weidel forderte, Aigner solle sich auch der nach AfD-Zählung „zweitgrößten Fraktion” vorstellen – aus „Respekt” gegenüber den Wählern. Von Storch konterte gegenüber „The Pioneer”: „Wer wegen eines einzigen kritischen Tweets … das Gespräch verweigert, zeigt mangelnde Souveränität, mangelnde Kritikfähigkeit und das Fehlen der Fähigkeit, Gräben zu überwinden.” Linke-Fraktionschefin Heidi Reichinnek kritisierte unabhängig davon, das Amt werde „immer wieder als Versorgungsposten zwischen den Unionsparteien und der SPD hin und hergeschoben”; eine überparteiliche Kandidatur wäre sinnvoller gewesen." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Die AfD kündigte an, einen eigenen Kandidaten für die Bundespräsidentenwahl aufzustellen; auch die Linke hat noch nicht entschieden, ob sie eine eigene Kandidatur stellt. Wegen der gemeinsamen Mehrheit von Union und SPD in der Bundesversammlung ändert dies an der grundsätzlichen Erfolgsaussicht Aigners laut bisherigen Einschätzungen nichts." }
        ]}
      ],
      reaction: "Mehr zum Bundeshaushalt 2027 und zur Rentenreform in Meldung 7.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "t-online.de: CDU nominiert Aigner als Bundespräsidentin", url: "https://www.t-online.de/nachrichten/deutschland/id_101517080/cdu-nominiert-aigner-als-bundespraesidentin.html" },
        { title: "diebayern.de: Unionskandidatin Aigner stellt sich im Bundestag vor", url: "https://www.diebayern.de/politik/unionskandidatin-aigner-stellt-sich-im-bundestag-vor-3200125" },
        { title: "t-online.de: Wahl zur Bundespräsidentin – Ilse Aigner lehnt Besuch bei AfD-Fraktion ab", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101520542/wahl-zur-bundespraesidentin-ilse-aigner-lehnt-besuch-bei-afd-fraktion-ab.html" },
        { title: "Tagesspiegel/dpa: AfD-Fraktion kritisiert Aigner nach Besuchsabsage", url: "https://www.tagesspiegel.de/politik/dpa-kandidatin-fur-das-bundesprasidentenamtafd-fraktion-kritisiert-aigner-nach-besuchsabsage-16259352.html" },
        { title: "Handelsblatt: Bundespräsidentin Ilse Aigner stellt sich nicht AfD und Linken vor", url: "https://www.handelsblatt.com/politik/deutschland/bundespraesidentin-ilse-aigner-stellt-sich-nicht-afd-und-linken-vor/100268693.html" }
      ]
    },
    /* 7 DEUTSCHLAND: BUNDESHAUSHALT 2027 + RENTE */
    {
      id: "bundeshaushalt-2027-rente-kapitalrente-11-10", cats: ["germany"], when: "Bereinigungssitzung Haushaltsausschuss 12.11. · Plenumsberatung 24.–27.11. · Fratzscher-Kritik 5.11.2026",
      headline: "Der Bundeshaushalt 2027 geht in die finale Phase, die Verschiebung der Kapitalrente bleibt umstritten",
      sec30: "Die Bereinigungssitzung des Haushaltsausschusses zum Bundeshaushalt 2027 ist für Donnerstag, 12.11.2026, angesetzt, die abschließende Bundestagsberatung für den 24. bis 27.11. Haushaltspolitiker Mathias Middelberg (CDU/CSU) sprach von „Rekord-Investitionen” nach Jahren wirtschaftlicher Stagnation, mahnte aber „mehr Ehrgeiz beim Sparen” angesichts einer Kreditfinanzierungsquote von 32 Prozent an. Die bereits im September beschlossene Einkommensteuerreform sieht ab 2028 eine Entlastung von rund 10 Mrd. Euro jährlich vor, finanziert unter anderem über einen höheren Spitzensteuersatz für Personengesellschaften. Parallel bleibt die vor Weihnachten nur in Eckpunkten geplante Kapitalrente umstritten: DIW-Chef Marcel Fratzscher hatte die Verschiebung als „Rückschlag” kritisiert.",
      blocks: [
        { h: "Was ist beim Bundeshaushalt 2027 der aktuelle Stand?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses ist für Donnerstag, 12.11.2026, angesetzt und dient dazu, letzte strittige Fragen zu klären; die abschließende viertägige Bundestagsberatung („Haushaltswoche”) folgt vom 24. bis 27.11.2026. Mehrere Einzelpläne (Verkehr, Digitales, Wohnen/Bauwesen, Forschung, Auswärtiges Amt) wurden zuvor bereits ohne Änderungen durch den Ausschuss gebracht." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Das Kabinett hatte die Einkommensteuerreform 2027 bereits am 2.9.2026 beschlossen: Sie sieht ab 2028 eine jährliche Entlastung von rund 10 Mrd. Euro vor, finanziert über Belastungen von mindestens 5 Mrd. Euro bei Besserverdienenden und Personengesellschaften. Deren Spitzensteuersatz soll auf 49,585 % steigen, während Kapitalgesellschaften ab 2028 nur rund 26 % Körperschaftsteuer zahlen. Die Kapitalrente soll ab 2028 mit 0,5 % des Bruttolohns starten und bis auf 2 % steigen; zunächst kommt vor Weihnachten 2026 aber nur der rentenrechtliche Teil samt Eckpunkten dazu ins Kabinett, ein ausgearbeiteter Gesetzentwurf erst 2027.",
            ask: [{ label: "Was ist das Umlageverfahren?", ref: "t:umlage" }] }
        ]},
        { h: "Warum wird die Kapitalrente separat behandelt?", items: [
          { tag: "position", text: "SPD-Fraktionsvorsitzende Dagmar Schmidt hatte die Verschiebung der Kapitalrente mit dem Argument verteidigt, „Gründlichkeit” müsse Vorrang haben, da neue Strukturen erst geschaffen werden müssten." }
        ]},
        { h: "Wer unterstützt die Pläne und womit?", items: [
          { tag: "position", text: "Haushaltspolitiker Mathias Middelberg (CDU/CSU) lobte einen Haushalt mit „Rekord-Investitionen” und erklärte, Deutschland sei nach sieben Jahren wirtschaftlicher Stagnation wieder auf Wachstumskurs. Zugleich mahnte er, eine Kreditfinanzierungsquote von 32 Prozent dürfe „kein Dauerzustand” sein, und forderte „mehr Ehrgeiz beim Sparen”." }
        ]},
        { h: "Wer kritisiert die Pläne und womit?", items: [
          { tag: "position", text: "DIW-Präsident Marcel Fratzscher bezeichnete die erneute Verschiebung der Kapitalrente als „Rückschlag für eine nachhaltige und generationengerechte Reform der gesetzlichen Rentenversicherung”; gerade junge Menschen und Menschen mit geringen Ersparnissen brauchten eine verlässliche Altersvorsorge, die auch die Chancen des Kapitalmarkts nutze. Pascal Reddig, Vorsitzender der „Jungen Gruppe” der Unionsfraktion, hatte zuvor erklärt: „Die Kapitalrente braucht ein Gesetz, keine Absichtserklärung.”",
            ask: [{ label: "Mehr zur Debatte um die Rentenreform", ref: "e:rente-basics" }] }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Aktuelle Umfragen sehen die AfD weiterhin deutlich vor der Union: Forsa maß am 3.11. 26 % zu 20 %, INSA am 7.11. 29,0 % zu 19,0 %. Diese Werte werden in Berichten auch im Zusammenhang mit der laufenden Haushalts- und Rentendebatte diskutiert, ein direkter Kausalzusammenhang wird in den Quellen jedoch nicht belegt." ,
            ask: [{ label: "Wie entsteht eine Regierungsmehrheit?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Mehr zur Nominierung von Ilse Aigner in Meldung 6.",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "bundestag.de: Haushaltsausschuss legt letzte Hand an Etat für 2027", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1231740" },
        { title: "Berlin Story News: Haushaltsberatung – Middelberg fordert „mehr Ehrgeiz beim Sparen”", url: "https://www.berlinstory.de/news/haushaltsberatung-middelberg-fordert-mehr-ehrgeiz-beim-sparen" },
        { title: "fuer-gruender.de: Einkommensteuer 2027 – Klingbeil legt neuen Reform-Entwurf vor", url: "https://www.fuer-gruender.de/blog/einkommensteuer-2027-klingbeil-legt-neuen-reform-entwurf-vor/" },
        { title: "mittelstand-nachrichten.de: Fratzscher – Verschiebung der Kapitalrente ist „Rückschlag”", url: "https://www.mittelstand-nachrichten.de/aktuell/dts_politik/fratzscher-verschiebung-der-kapitalrente-ist-rueckschlag-fuer-generationengerechte-reform/" },
        { title: "dawum.de: Bundestagswahl-Umfrage INSA, 07.11.2026", url: "https://dawum.de/Bundestag/INSA/2026-11-07/" }
      ]
    },
    /* 8 INTERNATIONAL/GEOPOLITIK: IRAN/KATAR/TRUMP VS TEHERAN */
    {
      id: "iran-katar-trump-rubio-rezaei-dementi-11-10", cats: ["world", "geo"], when: "Trump-Katar-Treffen Mo 9.11. · Rezaei-Dementi Di 10.11. · G7-Zwischenstopp Katars PM in Paris Di 10.11.2026",
      headline: "Nach dem Trump-Katar-Treffen spricht Präsident Trump von einem möglichen Kriegsende, Teheran weist die Darstellung zurück",
      sec30: "Nach seinem Treffen mit Katars Premierminister Scheich Mohammed bin Abdulrahman Al Thani am Montag im Weißen Haus sagte Präsident Trump, der Iran sei „militarily, effectively over”, man halte lediglich den Status quo; weitere Angriffe seien „quite unlikely”, es gebe aber „positive momentum toward an end to this conflict”. Noch am selben Tag widersprach Teheran deutlich: Mohsen Rezaei, Sekretär des iranischen Nationalen Sicherheitsrats, schrieb von „fake news about imaginary talks”, Präsident Pezeshkian sprach von einer „no war, no peace”-Realität, die beendet werden solle, betonte aber zugleich, man werde sich „nicht Gewalt und Schikane” beugen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Die Straße von Hormus ist eine der wichtigsten Handelsrouten für Öltransporte weltweit; jede neue Nachricht zu Eskalation oder Diplomatie in dieser Region wirkt sich unmittelbar auf den Ölpreis aus (mehr dazu in Meldung 15) und damit auch auf Inflationserwartungen und Zentralbank-Entscheidungen." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Katars Premierminister Scheich Mohammed bin Abdulrahman Al Thani traf Präsident Trump und Vizepräsident JD Vance am 9.11.2026 im Weißen Haus. Auf iranischer Seite positionierten sich Außenminister Abbas Araghchi, Nationaler-Sicherheitsrat-Sekretär Mohsen Rezaei, Außenamtssprecher Esmail Baghaei und Präsident Masud Pezeshkian; auf US-Seite äußerte sich zusätzlich Außenminister Marco Rubio." }
        ]},
        { h: "Welcher historische Hintergrund ist wichtig?", items: [
          { tag: "fakt", text: "Der Krieg zwischen den USA/Israel und Iran läuft seit dem 28.2.2026; mehrere zuvor vereinbarte Waffenstillstände sind bislang gescheitert. Rubio hatte bereits am Montag einen iranischen Vorschlag – eine Öffnung der Straße von Hormus binnen zwei Tagen gegen ein Ende des Krieges an allen Fronten – als „not just unacceptable, but in some cases, outrageous and ridiculous” zurückgewiesen und gesagt: „I wouldn't say we're at the verge of a breakthrough.”",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Welche Reaktionen gab es am Dienstag?", items: [
          { tag: "position", text: "Trump sagte gegenüber Reportern, der Iran sei „militarily, effectively over”, die USA blieben aber „locked and loaded”; es gebe „positive momentum toward an end to this conflict”, ein Ende sei „fairly soon” denkbar." },
          { tag: "position", text: "Mohsen Rezaei konterte auf X: „Stop manufacturing fake news about imaginary talks”, und bezeichnete die US-Regierung als „desperate gambler”. Außenamtssprecher Baghaei erklärte, Irans Zwei-Tage-Plan – am ersten Tag setzen die USA bestimmte Maßnahmen um, am zweiten öffnet sich die Straße von Hormus – bleibe „the most reasonable possible plan” und weiterhin auf dem Tisch. Präsident Pezeshkian sagte, man favorisiere Dialog und Verhandlungen, werde sich aber „nicht Gewalt und Schikane” beugen." },
          { tag: "einordnung", text: "Die klare Diskrepanz zwischen dem optimistischen Ton aus Washington und den scharfen Dementis aus Teheran deutet darauf hin, dass es am Dienstag keine Einigung gab, auch wenn keine neue militärische Eskalation gemeldet wurde.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zum Ölpreis in Meldung 15, zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.",
      terms: [],
      followups: ["e:why-oil-up-geo", "e:hormuz"],
      sources: [
        { title: "UPI: Trump–Qatar meeting – Iran negotiations", url: "https://www.upi.com/Top_News/US/2026/11/10/Trump-Qatar-meeting-Iran-negotiations/7831794293830/" },
        { title: "Bloomberg: Trump Signals New Iran Strikes Unnecessary After Qatar Meeting", url: "https://www.bloomberg.com/news/articles/2026-11-10/trump-signals-new-iran-strikes-unnecessary-after-qatar-meeting" },
        { title: "Euronews: Trump says Iran war 'effectively over' as Tehran denies planned talks", url: "https://www.euronews.com/2026/11/10/trump-says-iran-war-effectively-over-as-tehran-denies-planned-talks" },
        { title: "The Times of Israel: Liveblog – Iran's top security official says US should stop manufacturing fake news", url: "https://www.timesofisrael.com/liveblog_entry/irans-top-security-official-says-us-should-stop-manufacturing-fake-news-about-imaginary-talks/" },
        { title: "The Nation (Pakistan): Supreme Leader told to end 'no war, no peace' reality – Iran president", url: "https://www.nation.com.pk/10-Nov-2026/supreme-leader-told-us-end-war-peace-reality-iran-president" }
      ]
    },
    /* 9 INTERNATIONAL/GEOPOLITIK: UKRAINE/RUSSLAND/USA ABU DHABI */
    {
      id: "ukraine-russland-usa-abu-dhabi-gespraeche-11-10", cats: ["world", "geo"], when: "Gespräche Abu Dhabi 10.–11.11.2026 (erste Dreiergespräche seit Februar 2026)",
      headline: "USA, Ukraine und Russland beginnen in Abu Dhabi die ersten dreiseitigen Gespräche seit Februar 2026",
      sec30: "In Abu Dhabi begannen am Dienstag zweitägige, von den USA vermittelte Dreiergespräche zwischen den USA, der Ukraine und Russland – die erste trilaterale Runde seit Februar 2026. Geleitet wird die US-Seite von Jared Kushner und Steve Witkoff, die sich zusätzlich mit Vertretern Großbritanniens, Frankreichs, Deutschlands, Italiens, der NATO und der EU-Kommission trafen. Im Zentrum steht die Frage von Sicherheitsgarantien für die Ukraine nach einem möglichen Kriegsende; laut Berichten gebe es „a little bit of flexibility” beider Seiten zur künftigen Kontrolle ostukrainischer Gebiete. Präsident Selenskyj nannte einen Stopp entlang der aktuellen Kontaktlinie mit anschließenden Verhandlungen als schnellsten Weg zum Kriegsende; in der Nacht vor den Gesprächen feuerte Russland nach Angaben der ukrainischen Seite 162 Drohnen und eine ballistische Rakete auf die Ukraine.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Es handelt sich um die erste dreiseitige Gesprächsrunde zwischen den USA, der Ukraine und Russland seit Februar 2026; ein Ergebnis könnte unmittelbare Auswirkungen auf künftige Sicherheitsgarantien für die Ukraine und auf die europäische Verteidigungsplanung haben." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Die US-Delegation wird von Trumps Schwiegersohn Jared Kushner und Sondergesandtem Steve Witkoff geleitet; beide trafen sich am Dienstagvormittag zusätzlich mit Vertretern Großbritanniens, Frankreichs, Deutschlands, Italiens, der NATO und der EU-Kommission. Auf ukrainischer Seite äußerte sich Präsident Wolodymyr Selenskyj, auf russischer Seite lehnten offizielle Stellen laut Berichten weiterhin umfassende Waffenruhen und direkte Gespräche zwischen Putin und Selenskyj ab." }
        ]},
        { h: "Welcher historische Hintergrund ist wichtig?", items: [
          { tag: "fakt", text: "Es handelt sich um die erste trilaterale Gesprächsrunde seit Februar 2026; frühere Vermittlungsversuche waren zuvor wiederholt an Fragen der territorialen Kontrolle und an der Ablehnung einer umfassenden Waffenruhe durch Russland gescheitert." }
        ]},
        { h: "Welche wirtschaftlichen und sicherheitspolitischen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Laut Berichten gebe es „a little bit of flexibility” beider Seiten beim zentralen Streitpunkt der künftigen Kontrolle ostukrainischer Gebiete; Fortschritte hingen aber von einer Einigung auf Sicherheitsgarantien für die Zeit nach möglichen Kampfhandlungen ab. Präsident Selenskyj wertete verstärkte russische Angriffe – 162 Drohnen und eine ballistische Rakete in der Nacht vor den Gesprächen – als Versuch Moskaus, Druck auf die ukrainische Verhandlungsposition auszuüben." },
          { tag: "einordnung", text: "Der Ausgang der Gespräche dürfte auch die Debatte über künftige europäische Verteidigungsausgaben und gemeinsame Rüstungsbeschaffung mitbestimmen; mehr dazu in Meldung 10 und 11." }
        ]}
      ],
      reaction: "Mehr zu Verteidigungswerten in Meldung 10 und 11. Zu den US-Zwischenwahlen-Nachwehen (Nachzählung in Mississippi und Alaska, Amtsantritt von Stephen Miller als neuer Stabschef im Weißen Haus) liegen über den bereits berichteten Stand hinaus keine wesentlichen neuen Entwicklungen vor.",
      terms: [],
      followups: ["e:why-markets-move"],
      sources: [
        { title: "Washington Post: Russia, Ukraine, US security talks begin in Abu Dhabi", url: "https://www.washingtonpost.com/world/2026/11/10/russia-ukraine-war-putin-zelenskyy-uae/" },
        { title: "The National: Russia and Ukraine security-focused talks start in Abu Dhabi", url: "https://www.thenationalnews.com/news/mena/2026/11/10/russia-and-ukraine-security-focused-talks-start-in-abu-dhabi/" },
        { title: "Meduza: Russia, Ukraine, and the U.S. to hold peace talks in Abu Dhabi on November 10", url: "https://meduza.io/en/feature/2026/11/10/russia-ukraine-and-the-u-s-to-hold-peace-talks-in-abu-dhabi-on-november-10-their-first-trilateral-meeting-since-february-with-security-issues-expected-to-top-the-agenda" }
      ]
    },
    /* 10 DEFENCE: HENSOLDT KAPITALMARKTTAG */
    {
      id: "hensoldt-kapitalmarkttag-london-11-10", cats: ["defence"], when: "Kapitalmarkttag London Di 10.11.2026 · Neunmonatszahlen 5.11.2026",
      headline: "Hensoldt hebt beim Kapitalmarkttag in London sein Umsatzziel für 2035 erstmals auf 10 Milliarden Euro an",
      sec30: "Hensoldt bestätigte beim Kapitalmarkttag in London am Dienstag sein bisheriges Umsatzziel von 6 Mrd. Euro für 2030 und nannte erstmals ein Ziel von 10 Mrd. Euro für 2035. Für 2027/2028 erwartet das Unternehmen ein jährliches Umsatzwachstum von 15 bis 20 %, die bereinigte EBITDA-Marge soll bis 2030 schrittweise auf rund 21 % steigen. Die Mitarbeiterzahl soll von rund 10.600 (2026) auf etwa 14.000 (2029) steigen. Analysten reagierten gespalten: Jefferies und Deutsche Bank bestätigten „Buy”-Einstufungen, LBBW senkte dagegen das Kursziel auf „Hold”.",
      blocks: [
        { h: "Was wurde beim Kapitalmarkttag angekündigt?", items: [
          { tag: "fakt", text: "Hensoldt bestätigte sein Umsatzziel von 6 Mrd. Euro für 2030 und nannte erstmals ein Ziel von 10 Mrd. Euro für 2035. Für 2027/2028 erwartet das Unternehmen ein jährliches Umsatzwachstum von 15 bis 20 %; die bereinigte EBITDA-Marge soll von rund 19 % (2026) um jährlich etwa 50 Basispunkte auf rund 21 % (2030) steigen. Die ungewichtete Auftragspipeline für 2027 bis 2032 beziffert Hensoldt auf rund 110 Mrd. Euro; der Auftragsbestand soll Ende 2026 bei rund 11,2 Mrd. Euro liegen.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Welche Kapazitäten baut Hensoldt aus?", items: [
          { tag: "fakt", text: "Hensoldt kündigte einen Kapazitätssprung bis Mitte 2027 sowie zusätzliche Flächen von rund 46.000 Quadratmetern bis 2029 an; die Radarkapazität für das System TRML-4D soll binnen drei Jahren verfünffacht und danach weiter verdoppelt werden. Die Mitarbeiterzahl soll von rund 10.600 (2026) auf etwa 14.000 (2029) steigen." }
        ]},
        { h: "Was zeigen die Neunmonatszahlen als Hintergrund?", items: [
          { tag: "fakt", text: "Für die ersten neun Monate 2026 meldete Hensoldt bereits am 5.11. einen Auftragseingang von 3,564 Mrd. Euro (+76,7 %) und einen Umsatz von 1,863 Mrd. Euro (+21,3 %); die Jahresguidance 2026 (rund 2,8 Mrd. Euro Umsatz, rund 19,0 % bereinigte EBITDA-Marge) wurde beim Kapitalmarkttag bestätigt." },
          { tag: "position", text: "CEO Oliver Dörre sagte laut Berichten: „Wir liefern heute, was unsere Kunden bestellt haben: pünktlich und in erwarteter Qualität.” CFO Christian Ladurner ergänzte: „Seit diesem Jahr wandeln wir unseren Auftragsbestand in schnellerem Tempo in Umsatz um.”" }
        ]},
        { h: "Wie reagieren Analysten?", items: [
          { tag: "position", text: "Jefferies bestätigte „Buy” mit Kursziel 98 Euro und bezeichnete die Umsatzprognose als „konservativ”; die Deutsche Bank bestätigte „Buy” mit Kursziel 105 Euro. Exane BNP blieb „Neutral”, erhöhte das Kursziel aber von 83 auf 85 Euro. LBBW senkte dagegen das Kursziel von 100 auf 85 Euro und stufte auf „Hold” ab, mit der Begründung, die Rentabilitätsziele hingen noch von der Ausführung ab; mindestens ein weiteres Haus bewertete die Aktie mit „Sell” bei einem Kursziel von 70 Euro." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gegensätzlichen Analystenreaktionen zeigen, dass der zentrale Streitpunkt bei Hensoldt nicht die Nachfrage, sondern die Bewertung ist: Wie hoch ein gerechtfertigtes Kurs-Gewinn-Vielfaches ausfällt, hängt laut Berichten davon ab, ob die ambitionierten Margenziele tatsächlich erreicht werden." }
        ]}
      ],
      reaction: "Mehr zu Rheinmetall und RENK in Meldung 11.",
      terms: ["ebitda"],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "ad-hoc-news.de: Capital Markets Day – HENSOLDT confirms revenue ambition of 6 billion euros for 2030 and aims for 10 billion euros in 2035", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/capital-markets-day-hensoldt-confirms-revenue-ambition-of-6-billion-euros-for-2030-and-aims-for-10/70484406" },
        { title: "ad-hoc-news.de: Hensoldt's London Test – A €10.4 Billion Backlog and Two Very Different Price Targets", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/hensoldt-s-london-test-a-10-4-billion-backlog-and-two-very-different-price-targets/70482546" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL/RENK/US-VERTEIDIGUNGSWERTE */
    {
      id: "rheinmetall-renk-us-verteidigungswerte-11-10", cats: ["defence"], when: "Rheinmetall-Erholung Di 10.11. · RENK/Patria-Auftrag Di 10.11. · Berenberg-Kurszielsenkung Di 10.11.2026",
      headline: "Rheinmetall erholt sich weiter von seinem Tief seit Februar 2025, Berenberg senkt dennoch das Kursziel",
      sec30: "Die Rheinmetall-Aktie legte am Dienstag im Tagesverlauf von rund 853 auf bis zu 884,50 Euro zu (Mittag: rund 870 bis 872 Euro, +2,8 bis 3,2 %) und setzte damit ihre Erholung vom Tief seit Februar 2025 fort. Die Bank Berenberg senkte das Kursziel dennoch von 1.020 auf 900 Euro und erwartet, dass Rheinmetall seine Umsatzplanung für 2030 beim Kapitalmarkttag am 26./27.11. in Hamburg kürzen wird. RENK erhielt von Patria einen Folgeauftrag über Getriebe im Wert von 30 Mio. Euro. Die zuvor nach den US-Zwischenwahlen gefallenen US-Verteidigungswerte Lockheed Martin, RTX und Northrop Grumman zeigten laut Marktdaten am Dienstag eine Erholung.",
      blocks: [
        { h: "Wie entwickelte sich die Rheinmetall-Aktie am Dienstag?", items: [
          { tag: "fakt", text: "Die Aktie stand vorbörslich bei 853,20 Euro (+0,92 %), stieg bis 8:40 Uhr auf 868,25 Euro (+2,70 %) und erreichte im Tagesverlauf ein Hoch von 884,50 Euro. Zur Mittagszeit notierte sie bei rund 870 bis 872 Euro (+2,8 bis 3,2 %). Seit der Gewinnwarnung vom 5.11. – laut Berichten die fünfte Gewinn- bzw. Umsatzwarnung binnen elf Monaten, mit einer auf 13,2 Mrd. Euro gesenkten Umsatzprognose 2026 – hatte die Aktie zunächst rund 21 % verloren.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Wie reagieren Analysten?", items: [
          { tag: "position", text: "Die Bank Berenberg senkte ihr Kursziel von 1.020 auf 900 Euro und beließ die Einstufung bei „Hold”; sie erwartet, dass Rheinmetall seine bisherige Umsatzplanung für 2030 (rund 50 Mrd. Euro) beim eigenen Kapitalmarkttag am 26./27.11.2026 in Hamburg kürzen wird – Berichte nennen mögliche neue Zielwerte von rund 35 Mrd. Euro." }
        ]},
        { h: "Was gibt es Neues bei RENK?", items: [
          { tag: "fakt", text: "Der finnische Hersteller Patria bestellte bei RENK Getriebe für die Fahrzeugfamilie TRACKX im Wert von 30 Mio. Euro, Lieferbeginn 2027; die RENK-Aktie notierte am Dienstagmittag bei 36,30 Euro. RENK hatte für die ersten neun Monate 2026 bereits einen Umsatz von 982,0 Mio. Euro (+5,8 %) und einen Rekord-Auftragsbestand von 7,6 Mrd. Euro gemeldet." }
        ]},
        { h: "Wie entwickeln sich US-Verteidigungswerte?", items: [
          { tag: "unbestaetigt", text: "Nach dem demokratischen Sieg bei den Zwischenwahlen war die Lockheed-Martin-Aktie am 4.11. um rund 7 % eingebrochen, Northrop Grumman um 4,53 %, RTX um 2,64 % – aus Sorge, ein demokratisch kontrollierter Kongress könnte Präsident Trumps geforderte 1,5 Billionen Dollar für das Verteidigungsbudget 2027 kürzen; Demokraten wollen laut Berichten die NDAA und eine Haushaltsfrist am 11.12. nutzen, um die Entscheidung zu verschieben. Laut aggregierten Marktdaten vom Dienstag erholten sich alle drei Werte um rund 3 %; diese Tageszahlen stammen aus automatisierten Kursdaten-Quellen und sollten vor Weiterverwendung gegen eine Echtzeit-Kursquelle geprüft werden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Berenberg das Kursziel trotz der Kurserholung senkt, zeigt, dass Analysten die operativen Probleme bei Rheinmetall (Verzögerungen bei Boxer-Schützenpanzer und Munition) weiterhin als ernst einschätzen; der eigene Kapitalmarkttag Ende November dürfte dafür mehr Klarheit bringen." }
        ]}
      ],
      reaction: "Mehr zu Hensoldt in Meldung 10, zu den Gesprächen in Abu Dhabi in Meldung 9.",
      terms: ["ebitda"],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "ad-hoc-news.de: Rheinmetall-Aktie vorbörslich 853,20 Euro: 0,92 Prozent höher", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/rheinmetall-aktie-vorboerslich-853-20-euro-0-92-prozent-hoeher/70484371" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie – Berenberg senkt Kursziel auf 900 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/rheinmetall-aktie-berenberg-senkt-kursziel-auf-900-euro/70485406" },
        { title: "finanznachrichten.de: Aktie im Fokus – Rheinmetall weiter erholt von Tief seit Februar 2025", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70087036-aktie-im-fokus-rheinmetall-weiter-erholt-von-tief-seit-februar-2025-016.htm" },
        { title: "ad-hoc-news.de: RENK Group Aktie – Patria bestellt Getriebe für TRACKX", url: "https://ad-hoc-news.de/boerse/news/unternehmensnachrichten/renk-group-aktie-patria-bestellt-getriebe-fuer-trackx/70486065" },
        { title: "military.com: Democrats Plan to Use NDAA and a December Funding Deadline to Shrink Trump's $1.5T Defense Budget", url: "https://www.military.com/democrats-plan-to-use-ndaa-and-december-funding-deadline-to-shrink-trumps-15-trillion-defense-budget" }
      ]
    },
    /* 12 DEALS/PE: BASF/EVONIK + MARVELL/LUMENTUM */
    {
      id: "basf-evonik-marvell-lumentum-11-10", cats: ["deals", "pe"], when: "BASF/Evonik-Treffen Sa 8.11. · Evonik-Q3-Zahlen Di 10.11. · Marvell/Lumentum-Analysten Anfang Nov. 2026",
      headline: "Evonik untermauert seine Ablehnung des BASF-Angebots mit starken Quartalszahlen, Analysten sehen die Marvell-Lumentum-Fusion nur noch als Münzwurf",
      sec30: "Nach dem vertraulichen Austausch der Vorstandsspitzen von BASF und Evonik am Samstag bleibt es laut Insidern bei Evoniks Ablehnung des BASF-Angebots von 24 Euro pro Aktie (rund 11,2 Mrd. Euro); weitere Treffen sind nicht angesetzt. Evonik meldete am Dienstag starke Neun-Monats-Zahlen: Das bereinigte EBITDA stieg im dritten Quartal um 40 % auf 629 Mio. Euro, der Umsatz um 13 % auf 3,83 Mrd. Euro – der stärkste Anstieg seit vier Jahren. Bei der am 2.11. angekündigten 115-Milliarden-Dollar-Fusion von Marvell Technology und Lumentum Holdings sehen Merger-Arbitrage-Spezialisten die Erfolgswahrscheinlichkeit inzwischen nur noch bei rund 50 %; TD Cowen halbierte sein Kursziel für Marvell von 350 auf 175 Dollar.",
      blocks: [
        { h: "Was ist der aktuelle Stand bei BASF/Evonik?", items: [
          { tag: "unbestaetigt", text: "Laut Insider-Berichten änderte sich an Evoniks bereits am 5.11. bekräftigter Ablehnung des nachgebesserten BASF-Angebots von 24 Euro pro Aktie (rund 11,2 Mrd. Euro) auch nach dem vertraulichen Austausch der Vorstandsspitzen am Samstag, 8.11., nichts; Evonik habe das Angebot weiterhin als „nicht ausreichend, um formale Verhandlungen zu beginnen” bezeichnet. Weitere Treffen sind aktuell nicht angesetzt; beide Unternehmen wollten sich offiziell nicht äußern.",
            ask: [{ label: "Wie läuft eine Übernahme typischerweise ab?", ref: "e:ma-steps" }] }
        ]},
        { h: "Was zeigen Evoniks heutige Zahlen?", items: [
          { tag: "fakt", text: "Evonik meldete am Dienstag für das dritte Quartal 2026 ein bereinigtes EBITDA von 629 Mio. Euro (+40 % gegenüber dem Vorjahr) und einen Umsatz von 3,83 Mrd. Euro (+13 % – der stärkste Anstieg seit vier Jahren); das Jahresziel 2026 wurde in die obere Hälfte der Spanne von 2,0 bis 2,2 Mrd. Euro EBITDA gerückt. BASF-CEO Markus Kamieth hatte die mögliche Kombination zuvor als „mögliche Antwort auf globale Konkurrenz” bezeichnet, zugleich aber erklärt, BASF werde „nicht überteuer zahlen”." }
        ]},
        { h: "Wie reagieren Analysten auf die Marvell-Lumentum-Fusion?", items: [
          { tag: "fakt", text: "Marvell Technology und Lumentum Holdings hatten am 2.11.2026 eine Aktientausch-Fusion im Wert von rund 115 Mrd. Dollar angekündigt (Closing geplant für die erste Hälfte 2028); eine regulatorische Break-Fee von 3,2 Mrd. Dollar wird fällig, falls der Deal an einem Kartell- oder Investitionsprüfungsverbot scheitert." },
          { tag: "position", text: "TD Cowen senkte seine Einstufung für Marvell am 3.11. von „Outperform” auf „Market Perform” und halbierte das Kursziel von 350 auf 175 Dollar; Analyst Sean O'Loughlin erwartet für 2028 eine Gewinnverwässerung im mittleren einstelligen Prozentbereich und äußerte Sorge vor einem Einstieg nahe dem Höhepunkt eines „Optical-Mini-Cycle”. Merger-Arbitrage-Spezialisten bezifferten die Erfolgswahrscheinlichkeit des Deals laut Bloomberg inzwischen auf rund 50 % („coin flip”)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Evonik seine Ablehnung ausgerechnet mit besonders starken Quartalszahlen unterlegt, dürfte die eigenständige Position zusätzlich stärken. Die wachsende Skepsis gegenüber Marvell/Lumentum zeigt zugleich, wie stark große Technologie-Fusionen derzeit von der Unsicherheit über künftige KI-Investitionszyklen abhängen." }
        ]}
      ],
      reaction: "Mehr zur Private-Credit-Lage in Meldung 13.",
      terms: ["enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: { value: "≈ 11,2 Mrd. € (BASF/Evonik-Angebot, weiterhin abgelehnt) · ≈ 115 Mrd. $ (Marvell/Lumentum, Aktientausch, bestätigt)", buyer: "BASF (abgelehnt) · Marvell Technology", target: "Evonik · Lumentum Holdings", sector: "Chemie · Halbleiter/Optik", type: "Übernahmeangebot (abgelehnt) · Aktientausch-Fusion (Erfolgswahrscheinlichkeit laut Analysten bei rund 50 %; Finanzierungsdetails zu einem möglichen neuen BASF-Angebot sind nicht in den Quellen genannt – als unbestätigt zu werten)" },
      sources: [
        { title: "ad-hoc-news.de: Evonik-Aktie – Nach Spitzentreffen bleibt Nein zu BASF", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/evonik-aktie-nach-spitzentreffen-bleibt-nein-zu-basf/70483612" },
        { title: "ad-hoc-news.de: Evonik-Aktie – Starkes Quartal rückt Jahresziel in obere Hälfte", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/evonik-aktie-starkes-quartal-rueckt-jahresziel-in-obere-haelfte/70485369" },
        { title: "Bloomberg: Marvell's $115 Billion Lumentum Deal Odds Near Coin Flip", url: "https://www.bloomberg.com/news/articles/2026-11-09/marvell-lumentum-deal-odds-near-coin-flip-as-ai-trade-shudders" },
        { title: "GuruFocus: MRVL Downgraded by TD Cowen, Price Target Lowered to $175", url: "https://www.gurufocus.com/news/9166039/mrvl-downgraded-by-td-cowen-price-target-lowered-to-175" }
      ]
    },
    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-kbra-ausfallraten-bdc-abfluesse-11-10", cats: ["credit"], when: "KBRA-Report 5.11.2026 · Fitch-Q3-Daten Ende Okt. 2026",
      headline: "Ein neuer KBRA-Report zeigt deutlich mehr Private-Credit-Ausfälle im Mittelstand, Non-traded-BDCs verzeichnen Rekord-Abflüsse",
      sec30: "Nach der bereits bekannten Fitch-Kopfzahl einer Rekord-Ausfallrate von 6,3 % für das dritte Quartal 2026 liefert ein neuer KBRA-Report vom 5.11. detailliertere Daten: Bei über 3.000 Middle-Market-Unternehmen mit zusammen 1,4 Billionen Dollar Direct-Lending-Schulden stieg die Zahl der Kreditnehmer mit Ausfällen im dritten Quartal um 22 % auf 112; die Ausfallrate im „Lower Middle Market” liegt bei 5,8 %, im „Core Middle Market” bei 3,7 %. Moody's warnt zudem, dass die verbreitete Nutzung von PIK-Vereinbarungen (Zinszahlung in Form zusätzlicher Schuldscheine statt Bargeld) echten finanziellen Stress verschleiere. Parallel meldete der Sektor der nicht börsennotierten Business Development Companies (BDCs) für das dritte Quartal Netto-Abflüsse von 4,1 Mrd. Dollar – das schwächste Fundraising-Quartal seit Ende 2020.",
      blocks: [
        { h: "Was zeigt der neue KBRA-Report?", items: [
          { tag: "fakt", text: "KBRA zählte im dritten Quartal 2026 bei über 3.000 Middle-Market-Unternehmen mit zusammen 1,4 Billionen Dollar Direct-Lending-Schulden 112 Kreditnehmer mit Ausfällen – ein Anstieg von 22 % gegenüber den 87 Kreditnehmern im Vorquartal. Die Ausfallrate (Zwölf-Monats-Betrachtung) liegt im „Lower Middle Market” bei 5,8 % (nach 4,8 % im Vorquartal) und im „Core Middle Market” bei 3,7 % (nach 3,2 %).",
            ask: [{ label: "Was ist eine Ausfallrate?", ref: "t:default-rate" }] }
        ]},
        { h: "Was sagt Moody's zur Rolle von PIK-Vereinbarungen?", items: [
          { tag: "einordnung", text: "Moody's wies bereits Mitte Oktober darauf hin, dass die Ausfallrate unter 607 von der Agentur bewerteten Private-Credit-Kreditnehmern bei 4 % liegt, aber auf 5,8 % steigt, wenn PIK-Nachträge und Laufzeitverlängerungen bei finanziell angespannten Schuldnern mitgezählt werden – ein Hinweis darauf, dass die verbreitete Nutzung solcher Vereinbarungen echten Stress teilweise verschleiern könnte.",
            ask: [{ label: "Was ist eine PIK-Vereinbarung?", ref: "t:pik" }] }
        ]},
        { h: "Wie entwickelt sich der BDC-Sektor?", items: [
          { tag: "fakt", text: "Nicht börsennotierte Business Development Companies (BDCs) verzeichneten im dritten Quartal 2026 Netto-Abflüsse von 4,1 Mrd. Dollar; das Fundraising fiel auf 1,5 Mrd. Dollar – den niedrigsten Quartalswert seit dem vierten Quartal 2020. Bei einzelnen Fonds stiegen die Nonaccrual-Investments an (etwa bei Kayne Anderson BDC auf 3,6 % der Investitionen), während die Dividenden-Ausschüttungsquote bei Barings BDC laut Berichten bei 125 % lag.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die granulareren KBRA-Daten bestätigen im Grundsatz die bereits bekannte Fitch-Kopfzahl von 6,3 % Ausfallrate, zeigen aber zusätzlich, dass der Stress besonders im kleineren Mittelstand zunimmt, während gleichzeitig weniger frisches Kapital in den BDC-Sektor fließt – zwei Entwicklungen, die sich laut Berichten gegenseitig verstärken könnten.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Mehr zu den M&A-Deals in Meldung 12, zu den Zinssignalen von Fed und EZB in Meldung 4 und 5.",
      terms: ["default-rate", "pik", "direct-lending", "bdc"],
      followups: ["e:private-credit-what", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Forbes: U.S. Private Credit Defaults Hit Record 6.3% As Quiet Distress Grows", url: "https://www.forbes.com/sites/mayrarodriguezvalladares/2026/10/29/us-private-credit-defaults-hit-record-63-as-quiet-distress-grows/" },
        { title: "Bloomberg: US Private Credit Defaults Understated by PIK Use, Moody's Says", url: "https://www.bloomberg.com/news/articles/2026-10-14/us-private-credit-stress-masked-by-growing-pik-use-moody-s-says" },
        { title: "AltsWire: Nontraded BDC Net Outflows Reach $4.1B in Q3 as Fundraising Falls to Lowest Level Since 2020", url: "https://altswire.com/nontraded-bdc-net-outflows-reach-4-1b-in-q3-as-fundraising-falls-to-lowest-level-since-2020/" }
      ]
    },
    /* 14 TECHNOLOGIE */
    {
      id: "nvidia-huang-fbi-anthropic-ipo-preisspanne-11-10", cats: ["tech"], when: "Trump-FBI-Aussage Di 10.11. · China-Dementi 9./10.11. · Anthropic-Preisspanne Di 10.11.2026",
      headline: "Präsident Trump bestätigt FBI-Ermittlungen zur Nvidia-Affäre, Anthropic legt die Preisspanne für seinen Börsengang fest",
      sec30: "Präsident Trump sagte am Dienstag, das FBI befasse sich mit der Affäre um Nvidia-Chef Jensen Huang, er gehe aber davon aus, dass Huang „in good shape” sei. Chinas Außenministerium wies die Spionagevorwürfe als „groundless speculation and an attempt to smear and malign China” zurück; Aktionäre reichten zudem eine Sammelklage gegen Nvidia und Huang ein. Die Nvidia-Aktie, die am Montag 4,27 % tiefer geschlossen hatte, erholte sich am Dienstag leicht. Parallel legte Anthropic die Preisspanne für seinen Börsengang an der Nasdaq auf 70 bis 78 Dollar je Aktie fest (825 Mio. Aktien, Erlös bis zu 64,35 Mrd. Dollar, Bewertung bis zu rund 1,4 Billionen Dollar); AMD, Broadcom, Google, Micron, Microsoft, Nvidia und TSMC beteiligen sich parallel mit insgesamt 26 Mrd. Dollar.",
      blocks: [
        { h: "Was gibt es Neues zur Nvidia-Untersuchung?", items: [
          { tag: "position", text: "Präsident Trump sagte gegenüber Journalisten: „I know the FBI is looking into it in terms of something else, and I think that he'll be in good shape.” Nvidias Vorstand hatte am Sonntag erklärt, man habe „keinen Grund zur Annahme”, dass nationale Sicherheit oder Firmengeheimnisse kompromittiert worden seien; Huang hatte in einer internen Mitteilung geschrieben: „I was unfaithful to my wife. My actions hurt her and our children. There is no excuse for what I did.”" }
        ]},
        { h: "Wie reagiert China?", items: [
          { tag: "position", text: "Ein Sprecher des chinesischen Außenministeriums bezeichnete die Spionagevorwürfe als „groundless speculation and an attempt to smear and malign China”." }
        ]},
        { h: "Welche weiteren Folgen gibt es?", items: [
          { tag: "fakt", text: "Aktionäre reichten laut Berichten eine Sammelklage gegen Nvidia und Jensen Huang wegen angeblicher Irreführung der Investoren ein." },
          { tag: "position", text: "Kritiker bemängelten zudem Nvidias Führungsstruktur: Charu Chanana (Saxo Bank) sagte, „governance is now an investment risk”, da kein öffentlich benannter Nachfolger für Huang existiere; der frühere Baxter-CEO Harry Kraemer Jr. sagte: „To say there's no issue before you've done an investigation, that's not appropriate. That's how you lose credibility.”" }
        ]},
        { h: "Wie entwickelte sich die Nvidia-Aktie?", items: [
          { tag: "fakt", text: "Die Nvidia-Aktie war am Montag um 4,27 % auf 178,67 Dollar gefallen – ein Marktwertverlust von rund 192 Mrd. Dollar. Am Dienstag erholte sie sich im Tagesverlauf leicht auf rund 178 bis 181 Dollar. Die nächsten Quartalszahlen stehen am 17.11.2026 an." }
        ]},
        { h: "Was ist neu beim Anthropic-Börsengang?", items: [
          { tag: "fakt", text: "Anthropic legte die Preisspanne für sein Nasdaq-Debüt (Ticker „ANT”) auf 70 bis 78 Dollar je Aktie fest: 825 Mio. Aktien, Erlös bis zu 64,35 Mrd. Dollar am oberen Ende, Bewertung bei vollständiger Verwässerung bis zu rund 1,4 Billionen Dollar – deutlich unter früheren Spekulationen von 1,5 bis 2 Billionen Dollar. Parallel beteiligen sich AMD, Broadcom, Google, Micron, Microsoft, Nvidia und TSMC über eine Privatplatzierung mit insgesamt 26 Mrd. Dollar. Der Handelsstart an der Nasdaq wird für den 19. oder 20.11.2026 erwartet; Konsortialführer sind Goldman Sachs und Morgan Stanley." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Nvidia-Aktie trotz FBI-Ermittlungen und Sammelklage nur moderat nachgibt, deutet darauf hin, dass Anleger die Affäre weiterhin eher als Governance-Risiko denn als unmittelbare Geschäftsgefährdung einordnen. Die deutlich niedrigere Anthropic-Bewertung gegenüber früheren Spekulationen zeigt zugleich, dass Investoren nach dem Technologie-Ausverkauf der Vorwochen vorsichtiger bei der Bewertung von KI-Unternehmen geworden sind. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Mehr zu den Marktreaktionen in DAX und Euro Stoxx 50 in Meldung 1, zu Nasdaq und S&P 500 in Meldung 2.",
      terms: ["hyperscaler", "ipo"],
      followups: ["e:ai-capex", "e:circular-financing", "chain:nasdaq-why"],
      sources: [
        { title: "CP24/AP: Trump says FBI is looking at Nvidia CEO Jensen Huang's affair with alleged Chinese agent", url: "https://www.cp24.com/news/world/2026/11/10/trump-says-fbi-is-looking-at-nvidia-ceo-jensen-huangs-affair-with-alleged-chinese-agent" },
        { title: "The Washington Post: China dismisses reports of plot to ensnare Nvidia CEO as a smear campaign", url: "https://www.washingtonpost.com/technology/2026/11/09/china-dismisses-reports-plot-ensnare-nvidia-ceo-smear-campaign/" },
        { title: "Fortune: FBI is 'looking into' Jensen Huang – Nvidia's governance under scrutiny", url: "https://fortune.com/2026/11/10/fbi-looking-into-jensen-huang-nvidia-corporate-governance/" },
        { title: "CNBC: Anthropic sets price range of $70 to $78 in upcoming IPO", url: "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html" },
        { title: "The Washington Post: Anthropic targets a company value of more than $1 trillion in its IPO", url: "https://www.washingtonpost.com/business/2026/11/10/anthropic-targets-company-value-more-than-1-trillion-its-ipo/" }
      ]
    },
    /* 15 ENERGIE */
    {
      id: "brent-opec-gasspeicher-ttf-11-10", cats: ["energy", "geo"], when: "Brent-Rückgang Di 10.11. · Gasspeicher-Stand Bundesnetzagentur 10.11. · OPEC+-Entscheidung 1.11.2026",
      headline: "Der Ölpreis fällt deutlich unter 93 Dollar, die deutschen Gasspeicher erreichen laut Berichten den niedrigsten Füllstand seit 2011",
      sec30: "Brent fiel am Dienstag auf rund 91 bis 93 Dollar je Barrel – ein Rückgang von 4 bis 5 % gegenüber Montag –, gestützt von der Hoffnung auf eine diplomatische Lösung im Iran-Konflikt nach dem Trump-Katar-Treffen. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 10.11. bei 59 % Füllstand (145,8 TWh); laut Euronews erreichten sie damit den niedrigsten Stand seit 2011, deutlich unter dem Zielwert von 80 % für den 1.11. Bundesnetzagentur-Präsident Klaus Müller erklärte, die Speicherziele seien für die Versorgungssicherheit „nicht mehr zwingend”; ein Vertreter des Speicherverbands INES warnte dennoch vor möglichen Engpässen zwischen Januar und März 2027. OPEC+ hatte bereits am 1.11. die Förderquoten für Dezember unverändert gelassen; neue Entscheidungen stehen erst beim Ministertreffen am 29.11. an.",
      blocks: [
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "fakt", text: "Brent fiel am Dienstag je nach Zeitpunkt und Quelle auf Werte zwischen rund 91 und 93 Dollar je Barrel (von rund 97 bis 99 Dollar am Montag) – ein Rückgang von schätzungsweise 4 bis 5 %. Anfang November war der Preis zunächst auf rund 110 bis 117 Dollar gestiegen." }
        ]},
        { h: "Was treibt den Rückgang?", items: [
          { tag: "einordnung", text: "Berichte über mögliche Fortschritte bei einer Öffnung der Straße von Hormus nach dem Trump-Katar-Treffen vom Montag drückten den Ölpreis; ein entsprechender Bericht wurde von iranischer Seite am Dienstag jedoch als „fake news” zurückgewiesen (mehr in Meldung 8).",
            ask: [{ label: "Mehr zur Lage an der Straße von Hormus", ref: "s:8" }] }
        ]},
        { h: "Wie ist die Lage bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 10.11.2026 bei 59 % Füllstand (145,8 TWh) – deutlich unter dem für den 1.11. vorgesehenen Zielwert von 80 % (tatsächlich erreicht wurden zu diesem Stichtag rund 61 %). Laut Euronews handelt es sich damit um den niedrigsten Füllstand seit 2011.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] },
          { tag: "position", text: "Bundesnetzagentur-Präsident Klaus Müller erklärte, Speicherziele seien für die Versorgungssicherheit „nicht mehr zwingend”. Ein Vertreter des Speicherverbands INES warnte dagegen vor möglichen Engpässen zwischen Januar und März 2027." }
        ]},
        { h: "Wie ist die Lage bei TTF und OPEC+?", items: [
          { tag: "unbestaetigt", text: "Zum europäischen Gaspreis TTF liegen für den 10.11. uneinheitliche Werte zwischen rund 83 und 87 Euro je Megawattstunde vor; ein exakter Tageswert ließ sich nicht eindeutig verifizieren. OPEC+ hatte bereits am 1.11.2026 die Förderquoten für Dezember unverändert gelassen – die dritte Runde unveränderter Quoten in Folge; die richtungsweisende Entscheidung zum Förderrahmen 2027 steht erst beim Ministertreffen am 29.11.2026 an.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis auf Diplomatie-Hoffnungen stark reagiert, während die deutschen Gasspeicher trotz fallender Preise historisch niedrig gefüllt sind, zeigt, dass Öl- und Gasmarkt derzeit auf unterschiedliche Faktoren reagieren: Öl vor allem auf die Nachrichtenlage zum Hormus-Konflikt, Gas stärker auf saisonale Entnahmen und die Einschätzung der Bundesnetzagentur zur Versorgungssicherheit.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zur Iran-Diplomatie in Meldung 8, zur Eurozonen-Inflation in Meldung 5.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "Fortune: Price of Oil, November 10, 2026", url: "https://fortune.com/article/price-of-oil-11-10-2026/" },
        { title: "Euronews: Oil prices continue to fall on hopes of US-Iran peace deal talks", url: "https://www.euronews.com/2026/11/10/oil-prices-continue-to-fall-on-hopes-of-us-iran-peace-deal-talks" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/artikel.html" },
        { title: "Euronews (DE): Deutschlands Gasspeicher auf historischem Tiefstand", url: "https://de.euronews.com/2026/11/10/deutschlands-gasspeicher-auf-historischem-tiefstand" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX legte am Dienstag bis zum Mittag um rund 1,2 % auf etwa 26.584 Punkte zu und näherte sich damit wieder seinem Rekordhoch vom Donnerstag der Vorwoche (26.692,90 Punkte)." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "DAX und Euro Stoxx 50 legten am Dienstag bereits vor der Veröffentlichung des US-Inflationsberichts deutlich zu – ein Hinweis, dass an diesem Tag vor allem die Hoffnung auf eine Lösung im Iran-Konflikt und fallende Ölpreise im Vordergrund standen." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite stieg am Dienstag auf rund 4,89 %, die Rendite zehnjähriger Bundesanleihen lag bei rund 3,25 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Fed-Gouverneur Waller signalisierte am Dienstag Offenheit für eine Zinserhöhung im Dezember; die am Terminmarkt eingepreiste Wahrscheinlichkeit dafür stieg auf nahezu 100 %, was tendenziell zinslose Anlagen wie Gold und Bitcoin belastet." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold fiel am Dienstag um rund 0,6 % auf etwa 4.117 Dollar je Feinunze, belastet von der Aussicht auf eine mögliche Fed-Zinserhöhung im Dezember." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin gab weiter nach und notierte zwischen 74.200 und 74.600 Dollar, rund 0,3 bis 1,1 % niedriger als am Vortag." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro legte gegenüber dem Dollar leicht zu auf etwa 1,1225." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Gouverneur Christopher Waller sagte am 10.11.2026 in London, er neige zu einer Zinserhöhung im Dezember um 25 Basispunkte und halte bei hoher Kerninflation auch 50 Basispunkte für erwägenswert; die Fed hatte den Leitzins am 28.10. mit zwei Dissens-Stimmen für eine Erhöhung unverändert gelassen." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Dass sowohl Fed-Gouverneur Waller als auch EZB-Chefökonom Lane am selben Tag Offenheit für eine Zinserhöhung im Dezember zeigten, deutet auf eine ähnliche geldpolitische Debatte auf beiden Seiten des Atlantiks hin." },
    "ecb-hike": { tag: "position", story: 5, text: "EZB-Chefökonom Philip Lane sagte am 10.11.2026, eine weitere Zinserhöhung im Dezember sei „prudent”, sollten sich die Daten nicht wesentlich ändern; er erwartet eine Inflation von etwas über 4 % zum Jahresende." },
    "inflation-what": { tag: "fakt", story: 5, text: "Die Inflation in der Eurozone lag im Oktober laut Eurogruppen-Angaben bei 4 %; europäische Erdgaspreise liegen weiterhin bei etwa dem Dreifachen des Vorkriegsniveaus." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Die Bereinigungssitzung des Haushaltsausschusses zum Bundeshaushalt 2027 ist für den 12.11.2026 angesetzt, die abschließende Bundestagsberatung für den 24. bis 27.11.2026." },
    "rente-basics": { tag: "fakt", story: 7, text: "Die Kapitalrente soll vor Weihnachten 2026 nur in Eckpunkten ins Kabinett; DIW-Chef Marcel Fratzscher kritisierte die Verschiebung als „Rückschlag”." },
    "debt-brake": { tag: "position", story: 7, text: "Haushaltspolitiker Mathias Middelberg (CDU/CSU) mahnte angesichts einer Kreditfinanzierungsquote von 32 Prozent „mehr Ehrgeiz beim Sparen” an." },
    "coalition-majority": { tag: "fakt", story: 6, text: "Forsa sah die AfD am 3.11. bei 26 %, die Union bei 20 %; Union und SPD verfügen in der Bundesversammlung aber über eine Mehrheit, die für die Bundespräsidentenwahl entscheidend ist." },
    "defence-order": { tag: "fakt", story: 11, text: "Patria bestellte am 10.11. bei RENK Getriebe für die Fahrzeugfamilie TRACKX im Wert von 30 Mio. Euro." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie erholte sich am Dienstag im Tagesverlauf von rund 853 auf bis zu 884,50 Euro; Berenberg senkte das Kursziel dennoch auf 900 Euro." },
    "nato-target": { tag: "fakt", story: 10, text: "Hensoldt hob beim Kapitalmarkttag in London sein Umsatzziel für 2035 erstmals auf 10 Mrd. Euro an und bestätigte das Ziel von 6 Mrd. Euro für 2030." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "An Evoniks Ablehnung des BASF-Übernahmeangebots änderte sich laut Insidern auch nach dem Treffen vom 8.11. nichts; Evonik untermauerte dies am 10.11. mit starken Quartalszahlen." },
    "take-private-why": { tag: "fakt", story: 12, text: "Merger-Arbitrage-Spezialisten sehen die Erfolgswahrscheinlichkeit der 115-Milliarden-Dollar-Fusion von Marvell und Lumentum inzwischen nur noch bei rund 50 %." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Ein neuer KBRA-Report zeigt einen Anstieg der Zahl ausfallender Middle-Market-Kreditnehmer um 22 % im dritten Quartal 2026; die Ausfallrate im „Lower Middle Market” liegt bei 5,8 %." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Nicht börsennotierte BDCs verzeichneten im dritten Quartal 2026 Netto-Abflüsse von 4,1 Mrd. Dollar – das schwächste Fundraising-Quartal seit Ende 2020." },
    "ai-capex": { tag: "fakt", story: 14, text: "AMD stellte für das vierte Quartal einen Rekord-Umsatzausblick von rund 17 Mrd. Dollar in Aussicht und übertrifft damit erstmals Intels Prognose; Nvidia bleibt durch die Untersuchung zu CEO Jensen Huang belastet." },
    "circular-financing": { tag: "fakt", story: 14, text: "AMD, Broadcom, Google, Micron, Microsoft, Nvidia und TSMC beteiligen sich mit insgesamt 26 Mrd. Dollar an Anthropics Börsengang, der mit einer Bewertung von bis zu rund 1,4 Billionen Dollar geplant ist." },
    "why-oil-up-geo": { tag: "position", story: 8, text: "Präsident Trump sagte nach dem Treffen mit Katars Premierminister, der Iran sei „militarily, effectively over”; Irans Nationaler-Sicherheitsrat-Sekretär Rezaei wies diese Darstellung umgehend als „fake news” zurück." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Irans Zwei-Tage-Plan zur Öffnung der Straße von Hormus bleibt laut Außenamtssprecher Baghaei „auf dem Tisch”; eine Einigung mit den USA stand am 10.11. weiterhin aus." },
    "gas-ttf": { tag: "unbestaetigt", story: 15, text: "Zum europäischen Gaspreis TTF liegen für den 10.11. uneinheitliche Werte zwischen rund 83 und 87 Euro je Megawattstunde vor." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 10.11. bei 59 % Füllstand (145,8 TWh) – laut Euronews der niedrigste Stand seit 2011." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 4,
      q: "Was beschloss die Fed-Sitzung am 27./28. Oktober 2026, und wie stimmten die beiden Dissentierenden?",
      options: [
        "Eine Erhöhung um 25 Basispunkte, einstimmig beschlossen",
        "Eine Senkung auf 3,50 bis 3,75 Prozent",
        "Ein unveränderter Leitzins von 3,75 bis 4,00 Prozent, wobei zwei Mitglieder für eine Erhöhung stimmten",
        "Eine Senkung, der alle Mitglieder einstimmig zustimmten"
      ],
      answer: 2,
      explain: "Die Fed hielt den Leitzins mit 10:2 Stimmen bei 3,75 bis 4,00 % stabil; Lisa Cook und Beth Hammack stimmten für eine sofortige Erhöhung um 25 Basispunkte."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Welche Preisspanne legte Anthropic für seinen Börsengang an der Nasdaq fest?",
      options: [
        "30 bis 40 US-Dollar",
        "50 bis 60 US-Dollar",
        "100 bis 120 US-Dollar",
        "70 bis 78 US-Dollar"
      ],
      answer: 3,
      explain: "Anthropic legte die Preisspanne für sein Nasdaq-Debüt auf 70 bis 78 Dollar je Aktie fest, bei einer Bewertung von bis zu rund 1,4 Billionen Dollar."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Warum besuchte Bundespräsidentschaftskandidatin Ilse Aigner am 10.11.2026 die AfD-Fraktion nicht?",
      options: [
        "Weil Aigner zeitlich verhindert war",
        "Weil AfD-Vizefraktionschefin Beatrix von Storch die Nominierung öffentlich als „Armutszeugnis” bezeichnet hatte",
        "Weil die AfD-Fraktion keine Einladung ausgesprochen hatte",
        "Weil das Protokoll des Bundestags das vorschreibt"
      ],
      answer: 1,
      explain: "Aigners Stabschef Erik Markuse begründete die Absage damit, dass von Storch die Nominierung zuvor als „Armutszeugnis” bezeichnet hatte; die AfD kündigte daraufhin einen eigenen Kandidaten an."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 8,
      q: "Angenommen, Iran öffnet die Straße von Hormus tatsächlich vollständig für den Schiffsverkehr. Was wird dadurch unter sonst gleichen Bedingungen für den Ölpreis wahrscheinlicher?",
      options: [
        "Der Ölpreis steigt deutlich, weil die Nachfrage automatisch mitsteigt",
        "Es gibt keinen Zusammenhang zwischen Hormus und dem Ölpreis",
        "Der Ölpreis sinkt tendenziell, weil mehr Angebot über diese wichtige Route verfügbar wäre",
        "Der Goldpreis steigt automatisch im gleichen Ausmaß wie der Ölpreis"
      ],
      answer: 2,
      explain: "Eine vollständig offene, wichtige Transportroute wie die Straße von Hormus würde mehr Ölangebot am Markt erwarten lassen, was den Preis tendenziell sinken lässt – wie bereits die Diplomatie-Hoffnungen am 10.11. zeigten."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 5,
      q: "Sowohl Fed-Gouverneur Waller als auch EZB-Chefökonom Lane signalisierten am 10.11.2026 Offenheit für eine Zinserhöhung im Dezember. Was wird dadurch unter sonst gleichen Bedingungen für den zinslosen Goldpreis wahrscheinlicher?",
      options: [
        "Der Goldpreis steht tendenziell unter Druck, da höhere Zinsen die Opportunitätskosten für das zinslose Gold erhöhen",
        "Gold wird dadurch automatisch zur neuen Leitwährung",
        "Es gibt keinen Zusammenhang zwischen Notenbankzinsen und dem Goldpreis",
        "Gold wird dadurch tendenziell attraktiver, da Zinserhöhungen Gold stützen"
      ],
      answer: 0,
      explain: "Höhere Zinsen erhöhen die Opportunitätskosten, zinsloses Gold zu halten, statt in verzinste Anlagen zu investieren – das drückt tendenziell auf den Goldpreis, wie am 10.11. zu beobachten war."
    }
  ]
};
