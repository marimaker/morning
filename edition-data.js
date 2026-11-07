// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-07",
  dateLabel: "Samstag, 7. November 2026",
  updatedLabel: "Recherchestand 07.11.2026",
  marketNote: "Diese Ausgabe entsteht am Samstag, 7.11.2026. Die Börsen sind an diesem Wochenende geschlossen; DAX, Euro Stoxx 50, S&P 500, Nasdaq Composite, Dow Jones sowie die Anleiherenditen (UST10, Bund10) und Gold/Brent (Future-Kontrakte) zeigen daher den Schlussstand vom Freitag, 6.11.2026. Nur Bitcoin handelt durchgehend; der hier genannte Bitcoin-Wert stammt vom Freitagvormittag (US-Ortszeit) und kann sich bis Montag weiter verändert haben. Bei EUR/USD, Gold, Bund10 und Brent weichen einzelne Quellen je nach Erhebungszeitpunkt und Kontraktmonat spürbar voneinander ab; das ist im Folgenden jeweils kenntlich gemacht.",

  top: [
    { text: "Nach dem größten Tagesverlust des Chip-Sektors seit 2020 am Donnerstag erholen sich Nasdaq Composite und S&P 500 am Freitag wieder, getragen von starken AMD-Zahlen und einem überraschend robusten US-Arbeitsmarktbericht; DAX und Dow Jones schließen die Woche dagegen leichter.", ref: "s:1" },
    { text: "Nach den US-Zwischenwahlen kontrollieren die Demokraten den Senat mit 54 zu 44 Sitzen, in Mississippi und Alaska ist die Auszählung weiterhin nicht final; im Weißen Haus löst Stephen Miller ab dem 9.11. Susie Wiles als Stabschef ab.", ref: "s:9" },
    { text: "Die Bank of England erhöht ihren Leitzins erstmals seit August 2023 auf 4,0 Prozent und verweist auf steigende Energiepreise durch den Nahost-Konflikt; bei der EZB zählt die Eurogruppe nach Fristende zwei offizielle Bewerbungen um die Lagarde-Nachfolge.", ref: "s:6" },
    { text: "Der Ölpreis Brent bleibt nach dem Einbruch vom Mittwoch volatil knapp unter 100 Dollar je Barrel; die iranischen Revolutionsgarden melden neue, bislang unabhängig nicht bestätigte Tankerzwischenfälle an der Straße von Hormus.", ref: "s:15" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.820,36 Pkt.", change: "-1,92 % bzw. -504,65 Pkt. ggü. Donnerstagschluss (26.325,01 Pkt.)", dir: "down", asof: "Schluss Fr 6.11.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Donnerstag", text: "Der DAX hatte am Donnerstag im Tagesverlauf noch ein Rekordhoch von rund 26.692,90 Punkten erreicht, bevor er zum Handelsschluss bei 26.325,01 Punkten aus dem Markt ging." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang am Freitag nennen Berichte:",
        items: [
          "Der globale Technologie- und Chip-Ausverkauf vom Donnerstag wirkte auch am Freitag noch nach; Sorgen über eine strengere Regulierung von Rechenzentren nach den US-Zwischenwahlen sowie Zweifel an der Rentabilität hoher KI-Investitionen belasteten laut Berichten auch europäische Technologie- und Zuliefererwerte.",
          "Die Erholung an der Nasdaq am Freitagnachmittag kam für die europäischen Börsen zeitlich zu spät, um den DAX noch ins Plus zu drehen."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zum Chip-Ausverkauf und zur Erholung in Meldung 14.", ref: "s:14" },
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "ad-hoc-news.de: DAX schließt am 6. November 1,92 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-am-6-november-1-92-prozent-tiefer/70471611" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.170,49 Pkt.", change: "-0,98 % ggü. Donnerstag (6.231,54 Pkt.); für die gesamte Woche laut Berichten rund +0,64 %", dir: "down", asof: "Schluss Fr 6.11.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Wochenbilanz", text: "Trotz des Freitagsverlusts stand für den Euro Stoxx 50 laut Berichten am Ende der Woche noch ein Plus von rund 0,64 % zu Buche – getragen von der Erholung früher in der Woche." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Freitagsrückgang:",
        items: [
          "Der globale Ausverkauf bei Technologie- und Chipwerten vom Donnerstag drückte auch auf europäische Indizes; erholende US-Märkte im späteren Handel begrenzten die Verluste, konnten sie aber nicht ausgleichen."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zum Chip-Ausverkauf in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 schließt 0,98 Prozent tiefer bei 6.170,49 Punkten", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-0-98-prozent-tiefer-bei-6-170-49-punkten/70471567" }
    },
    "sp500": {
      label: "S&P 500", value: "7.376,86 Pkt.", change: "+0,31 % bzw. +23,13 Pkt. ggü. Donnerstag", dir: "up", asof: "Schluss Fr 6.11.26", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Woche", text: "Trotz der Freitagserholung verzeichnete der S&P 500 laut Berichten die schwächste Wochenperformance seit Juni 2026, nachdem der Index am Donnerstag im Zuge des Chip-Ausverkaufs deutlich gefallen war." }
      ],
      moved: {
        intro: "Als Hintergrund für die Freitagserholung nennen Berichte:",
        items: [
          "Der US-Arbeitsmarktbericht für Oktober fiel mit +165.000 neuen Stellen deutlich stärker aus als die Erwartung von rund 65.000; die Arbeitslosenquote sank auf 4,1 %.",
          "AMD legte nach Rekord-Quartalszahlen um rund 11 % zu und stützte damit auch den breiteren Markt; mehr dazu in Meldung 14."
        ]
      },
      important: [
        { area: "Zinsen", text: "Was ein starker Jobbericht für die Dezember-Zinsentscheidung der Fed bedeutet.", ref: "s:4" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Nasdaq and S&P 500 rebound, Dow slips to cap bruising week for AI stocks", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-november-6-dow-sp-500-nasdaq-jobs-report-earnings-135953863.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "24.579,42 Pkt.", change: "+1,09 % bzw. +264,43 Pkt. ggü. Donnerstag (24.315,00 Pkt., -5,5 % am Donnerstag)", dir: "up", asof: "Schluss Fr 6.11.26", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Donnerstag", text: "Am Donnerstag war die Nasdaq im Zuge eines breiten Technologie- und Chip-Ausverkaufs um 5,5 % eingebrochen – der stärkste Tagesverlust des Chip-Sektors seit 2020 (Philadelphia Semiconductor Index -12,2 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Erholung am Freitag:",
        items: [
          "AMD meldete ein Rechenzentrumswachstum von 97 % und sprang um rund 11 %; Nvidia und Intel erholten sich ebenfalls.",
          "Der robuste US-Arbeitsmarktbericht stützte zusätzlich die Risikobereitschaft."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Chip-Ausverkauf und zur Erholung in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "StockTitan: Chip Stocks Bounced Back in the Stock Market Today, November 6, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-6-2026" }
    },
    "dow": {
      label: "Dow Jones", value: "51.285,73 Pkt.", change: "-0,46 % bzw. -237,33 Pkt. ggü. Donnerstag (51.523,06 Pkt., -3,4 % am Donnerstag)", dir: "down", asof: "Schluss Fr 6.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Im Vergleich zu Nasdaq und S&P 500", text: "Während Nasdaq und S&P 500 sich am Freitag erholten, blieb der stärker industriell geprägte Dow als einziger der drei großen US-Indizes im Minus." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Unsicherheit über die Folgen der Zwischenwahlen für die Technologie- und Rechenzentrumsbranche belastete auch traditionellere Industriewerte im Dow weiter."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Nasdaq and S&P 500 rebound, Dow slips to cap bruising week for AI stocks", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-november-6-dow-sp-500-nasdaq-jobs-report-earnings-135953863.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,114–1,117 (Angaben schwanken je Quelle/Zeitpunkt zwischen 1,1139 und 1,1230)", change: "EZB-Referenzkurs -0,53 % auf 1,1165 (von 1,1224 am Donnerstag)", dir: "down", asof: "Stand Fr 6.11.26", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,11 bis 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar stärker.",
      compare: [
        { label: "Woche", text: "Der Euro hatte in der Wahlwoche zeitweise über 1,12 gestanden; am Freitag schwächte er sich gegenüber dem Dollar spürbar ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der überraschend starke US-Arbeitsmarktbericht stützte den Dollar, da er die Wahrscheinlichkeit einer weiteren Fed-Zinserhöhung im Dezember erhöhte.",
          "Die weiterhin unsichere Stimmung an den Aktienmärkten ließ den Dollar zusätzlich als vermeintlich sicheren Hafen gefragter erscheinen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinserwartung in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "finanzen.at: Devisen im Blick – Darum geht es für den Euro zum US-Dollar deutlich abwärts", url: "https://www.finanzen.at/nachrichten/devisen/devisen-im-blick-darum-geht-es-fuer-deu-euro-zum-us-dollar-deutlich-abwarts-1036728754" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,86 %", change: "leicht gestiegen am Freitag", dir: "up", asof: "Stand Fr 6.11.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,9 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,9 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; der Markt preist laut CME FedWatch (Stand 6.11., vor dem Jobbericht) eine Wahrscheinlichkeit von rund 73 % für eine weitere Erhöhung im Dezember ein." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg am Freitag:",
        items: [
          "Der deutlich stärker als erwartete US-Arbeitsmarktbericht für Oktober (+165.000 Stellen) erhöhte aus Sicht vieler Anleger die Wahrscheinlichkeit einer weiteren Fed-Zinserhöhung im Dezember."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung im Dezember in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: 10-year Treasury yield rises after much stronger-than-expected October jobs report", url: "https://www.cnbc.com/2026/11/06/treasury-yields-inch-lower-as-investors-look-ahead-to-key-jobs-data-.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,25 %", change: "im Wochenverlauf leicht gefallen (von rund 3,31 % zu Wochenbeginn); der genaue Tagesvergleich zu Donnerstag ist zwischen Quellen uneinheitlich", dir: "flat", asof: "Stand Fr 6.11.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 4,86 % weiterhin deutlich über der Bund-Rendite – ein Abstand, der unter anderem die unterschiedliche Zinspolitik beider Notenbanken widerspiegelt." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Wochenrückgang:",
        items: [
          "Die Risikoaversion durch den globalen Technologie-Ausverkauf trieb in Teilen der Woche die Nachfrage nach als sicher geltenden Bundesanleihen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Nachfolgefrage und zur Dezember-Sitzung in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "TradingEconomics: Deutschland 10-Jahres-Anleiherendite", url: "https://de.tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.045–4.050 $", change: "-0,94 % bis -1,02 % ggü. Donnerstag (≈ 4.126 $)", dir: "down", asof: "Stand Fr 6.11.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 4.050 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Woche", text: "Vor dem Jobbericht lag Gold laut Berichten auf dem besten Wochenverlauf seit über zwei Monaten; der starke Dollar am Freitag bremste den Anstieg." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Rückgang am Freitag:",
        items: [
          "Der starke US-Arbeitsmarktbericht stützte den Dollar, was Gold für Käufer in anderen Währungen verteuert und die Nachfrage dämpft."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "CNBC Select: The price of gold today, Nov. 6, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-nov-6-2026/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 98–100 $ (je nach Kontraktmonat/Quelle)", change: "nach einem Einbruch von rund 8–10 % am Mittwoch zwei Tage in Folge leicht erholt; für die Woche aber weiterhin rund 13–15 % im Minus", dir: "up", asof: "Stand Fr 6.11.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Auch nach dem jüngsten Wochenverlust liegt der Preis deutlich über dem Niveau vor Kriegsbeginn im Februar 2026.",
      compare: [
        { label: "Mittwoch", text: "Brent war am Mittwoch nach dem demokratischen Wahlsieg bei den US-Zwischenwahlen auf rund 93 Dollar eingebrochen, bevor sich der Preis am Donnerstag und Freitag wieder erholte." }
      ],
      moved: {
        intro: "Als Hintergrund für die Erholung nennen Berichte:",
        items: [
          "Erneute Sorgen über Tankerangriffe im Nahen Osten und Unsicherheit über den weiteren Verlauf des Irankriegs stützten den Preis.",
          "Die iranischen Revolutionsgarden meldeten am Mittwoch neue, bislang unabhängig nicht bestätigte Tankerzwischenfälle an der Straße von Hormus."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage an der Straße von Hormus in Meldung 15.", ref: "s:15" },
        { area: "Zinsen", text: "Mehr zur BoE-Zinserhöhung, die mit steigenden Energiepreisen begründet wurde, in Meldung 6.", ref: "s:6" }
      ],
      source: { title: "ariva.de: Ölpreise legen weiter zu – Brent knapp unter 100 US-Dollar", url: "https://www.ariva.de/news/oelpreise-legen-weiter-zu-brent-knapp-unter-100-us-dollar-12197549" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 75.600–76.300 $", change: "-5,3 % bis -6,1 % binnen 24 Stunden", dir: "down", asof: "Stand Fr 6.11.26, Vormittag (US-Ortszeit)", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 76.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Woche", text: "Bitcoin war nach dem demokratischen Wahlsieg bei den Zwischenwahlen zunächst auf über 80.000 Dollar gestiegen, gab diese Gewinne im Zuge des breiten Technologie-Ausverkaufs der Woche aber vollständig wieder ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der breite Risikoabbau im Zuge des Technologie- und Chip-Ausverkaufs erfasste auch Bitcoin und andere Kryptowährungen."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "TokenPost: Bitcoin Trades at $75,702 in Friday Morning Market Snapshot", url: "https://www.tokenpost.com/news/investing/50194" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 */
    {
      id: "markets-freitag-dax-eurostoxx-tech-ausverkauf-11-06", cats: ["markets"], when: "Schluss Fr 6.11.2026",
      headline: "DAX und Euro Stoxx 50 schließen die Woche nach einem globalen Technologie-Ausverkauf schwächer, obwohl sich US-Technologiewerte am Freitag bereits erholten",
      sec30: "Der DAX fiel am Freitag um 1,92 % auf 25.820,36 Punkte, nachdem er am Donnerstag im Tagesverlauf noch ein Rekordhoch von rund 26.692,90 Punkten erreicht hatte. Der Euro Stoxx 50 gab um 0,98 % auf 6.170,49 Punkte nach, blieb für die gesamte Woche aber laut Berichten noch mit rund 0,64 % im Plus. Grund für den Rückgang war der globale Technologie- und Chip-Ausverkauf vom Donnerstag (Meldung 14), der auch am Freitag noch nachwirkte, obwohl sich Nasdaq und S&P 500 in den USA bereits wieder erholten (Meldung 2).",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX fiel am Freitag um 1,92 % bzw. 504,65 Punkte auf 25.820,36 Punkte und gab damit einen Teil seines Donnerstags-Rekordhochs von rund 26.692,90 Punkten wieder ab. Der Euro Stoxx 50 gab um 0,98 % bzw. 61,05 Punkte auf 6.170,49 Punkte nach.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen den Rückgang auf den globalen Technologie- und Chip-Ausverkauf vom Donnerstag zurück: Nach den US-Zwischenwahlen stimmten in zehn US-Bundesstaaten Wähler über 41 Fragen zu Rechenzentren ab, 77 % votierten dabei gegen weitere Rechenzentrums-Entwicklung – das schürte laut Berichten Sorgen vor strengerer Regulierung des KI-Sektors.",
            ask: [{ label: "Mehr zu den Zwischenwahlen", ref: "s:9" }, { label: "Mehr zum Chip-Ausverkauf", ref: "s:14" }] }
        ]},
        { h: "Wie fällt die Wochenbilanz aus?", items: [
          { tag: "fakt", text: "Der Euro Stoxx 50 stand laut Berichten trotz des Freitagsverlusts für die gesamte Woche noch mit rund 0,64 % im Plus. Für den DAX liegen keine übereinstimmenden Angaben zur exakten Wochenperformance vor; sicher belegt ist, dass der Index von seinem Donnerstags-Rekordhoch deutlich zurückfiel." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der DAX von einem Rekordhoch am Donnerstag auf ein Freitagsminus wechselte, während die US-Technologiewerte sich zur gleichen Zeit schon wieder erholten, zeigt, wie schnell sich die Einschätzung von Anlegern zu den Folgen der Zwischenwahlen für den KI-Sektor innerhalb weniger Handelstage ändern kann. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Freitag werden in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, der Chip-Ausverkauf im Detail in Meldung 14, die Zwischenwahl-Ergebnisse in Meldung 9.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ad-hoc-news.de: DAX schließt am 6. November 1,92 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-am-6-november-1-92-prozent-tiefer/70471611" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 schließt 0,98 Prozent tiefer bei 6.170,49 Punkten", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-0-98-prozent-tiefer-bei-6-170-49-punkten/70471567" },
        { title: "Euronews: Global stock rout deepens as AI data-centre fears fuel worst US chip sell-off since 2020", url: "https://www.euronews.com/2026/11/06/global-stock-rout-deepens-as-ai-data-centre-fears-fuel-worst-us-chip-sell-off-since-2020" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS FREITAG */
    {
      id: "us-wallstreet-freitag-jobs-report-ki-ausverkauf-11-06", cats: ["markets"], when: "Schluss Fr 6.11.2026",
      headline: "Nasdaq und S&P 500 erholen sich am Freitag nach dem größten Chip-Ausverkauf seit 2020, der Dow Jones schließt die Woche als einziger großer US-Index im Minus",
      sec30: "Die Nasdaq Composite legte am Freitag um 1,09 % auf 24.579,42 Punkte zu, der S&P 500 um 0,31 % auf 7.376,86 Punkte; der Dow Jones gab dagegen um 0,46 % auf 51.285,73 Punkte nach. Grund für die Erholung war laut Berichten vor allem der deutlich stärker als erwartete US-Arbeitsmarktbericht für Oktober (+165.000 Stellen) sowie ein Kurssprung von AMD um rund 11 % nach Rekord-Quartalszahlen. Am Donnerstag war es noch zum stärksten Einbruch des Chip-Sektors seit 2020 gekommen (Nasdaq -5,5 %, Dow -3,4 %, Philadelphia Semiconductor Index -12,2 %), ausgelöst durch Sorgen über eine strengere Regulierung von Rechenzentren nach den Zwischenwahlen (Meldung 9) und Zweifel an der Rentabilität hoher KI-Investitionen.",
      blocks: [
        { h: "Wie schlossen Nasdaq, S&P 500 und Dow am Freitag?", items: [
          { tag: "fakt", text: "Die Nasdaq Composite legte um 1,09 % (+264,43 Punkte) auf 24.579,42 Punkte zu, der S&P 500 um 0,31 % (+23,13 Punkte) auf 7.376,86 Punkte. Der Dow Jones gab dagegen um 0,46 % (-237,33 Punkte) auf 51.285,73 Punkte nach und blieb damit als einziger der drei Indizes am Freitag im Minus.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was war am Donnerstag passiert?", items: [
          { tag: "fakt", text: "Am Donnerstag war es zum stärksten Tagesverlust des Chip-Sektors seit 2020 gekommen: Der Philadelphia Semiconductor Index brach um 12,2 % ein, die Nasdaq um 5,5 % auf 24.315,00 Punkte, der Dow um 3,4 % auf 51.523,06 Punkte. Laut Berichten gingen an diesem Tag rund 2,9 Billionen US-Dollar Marktkapitalisierung bei S&P-500-Unternehmen verloren; Alphabet brach um 12,6 % ein – der schlechteste Tag seit dem Börsengang 2004.",
            ask: [{ label: "Mehr zum Chip-Ausverkauf", ref: "s:14" }] }
        ]},
        { h: "Was trieb die Erholung am Freitag?", items: [
          { tag: "einordnung", text: "Der US-Arbeitsmarktbericht für Oktober fiel mit +165.000 neuen Stellen deutlich stärker aus als die Erwartung von rund 65.000; die Arbeitslosenquote sank auf 4,1 % von 4,2 %. AMD meldete zudem einen Rekordumsatz von 13,4 Mrd. Dollar (+45 % gegenüber Vorjahr) und ein Rechenzentrumswachstum von 97 %, die Aktie sprang um rund 11 %.",
            ask: [{ label: "Mehr zu AMD und dem Chip-Sektor", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Nasdaq und S&P 500 sich schon einen Tag nach dem stärksten Chip-Ausverkauf seit 2020 wieder erholten, während der stärker industriell geprägte Dow im Minus blieb, zeigt, dass Anleger die kurzfristige Erholung vor allem auf einzelne starke Unternehmenszahlen (AMD) und auf den Arbeitsmarktbericht zurückführten, nicht auf eine grundsätzliche Entwarnung bei der Regulierungsfrage. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Reaktion in Europa wird in Meldung 1 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Fed-Zinserwartung nach dem Jobbericht in Meldung 4, der Chip-Ausverkauf im Detail in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "Yahoo Finance: Stock market today – Nasdaq and S&P 500 rebound, Dow slips to cap bruising week for AI stocks", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-november-6-dow-sp-500-nasdaq-jobs-report-earnings-135953863.html" },
        { title: "StockTitan: Chip Stocks Bounced Back in the Stock Market Today, November 6, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-6-2026" },
        { title: "CNN: US jobs report October 2026", url: "https://www.cnn.com/2026/11/06/economy/us-jobs-report-october" },
        { title: "Fortune: Tech stocks are suffering the biggest selloff since Covid as investors see a premature end to the AI data-center boom", url: "https://fortune.com/2026/11/05/tech-stocks-are-suffering-the-biggest-selloff-since-covid-as-investors-see-premature-end-to-ai-datacenter-boom/" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN */
    {
      id: "gold-bitcoin-eurusd-anleihen-freitag-11-06", cats: ["markets"], when: "Stand Fr 6.11.2026",
      headline: "Gold und Bitcoin geben nach einem starken US-Jobbericht nach, der Euro schwächt sich gegenüber dem Dollar ab",
      sec30: "Gold fiel am Freitag um rund 1 % auf zwischen 4.045 und 4.050 Dollar je Feinunze, nachdem es zuvor auf dem besten Wochenverlauf seit über zwei Monaten gewesen war. Bitcoin gab binnen 24 Stunden um 5,3 bis 6,1 % auf etwa 75.600 bis 76.300 Dollar nach und gab damit seine Gewinne seit dem Wahlsieg der Demokraten komplett wieder ab. Der Euro schwächte sich gegenüber dem Dollar ab (EZB-Referenzkurs -0,53 % auf 1,1165), während die US-10-Jahres-Rendite nach dem überraschend starken Jobbericht leicht auf rund 4,86 % stieg; die Rendite zehnjähriger Bundesanleihen lag mit rund 3,25 % im Wochenverlauf weiter niedriger.",
      blocks: [
        { h: "Wie haben sich Gold und Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Gold fiel am Freitag um rund 0,94 bis 1,02 % auf zwischen 4.045 und 4.050 Dollar je Feinunze (von rund 4.126 Dollar am Donnerstag). Bitcoin gab binnen 24 Stunden um 5,3 bis 6,1 % auf etwa 75.600 bis 76.300 Dollar nach.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }, { label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Der überraschend starke US-Arbeitsmarktbericht stützte den Dollar und dämpfte damit die Nachfrage nach Gold als Alternative; der breite Risikoabbau im Zuge des Technologie-Ausverkaufs der Woche erfasste auch Bitcoin, das damit seine gesamten Gewinne seit dem demokratischen Wahlsieg bei den Zwischenwahlen wieder abgab." }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro schwächte sich gegenüber dem Dollar ab; der EZB-Referenzkurs fiel um 0,53 % auf 1,1165 (von 1,1224 am Donnerstag), andere Quellen nennen für den Freitag Werte zwischen 1,1139 und 1,1230 – die Angaben weichen hier spürbar voneinander ab. Die US-10-Jahres-Rendite stieg nach dem Jobbericht leicht auf rund 4,86 %, während die Rendite zehnjähriger Bundesanleihen im Wochenverlauf von rund 3,31 auf etwa 3,25 % fiel.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Für die genaue EUR/USD-Notierung und für den exakten Tagesvergleich bei der Bund-Rendite liegen keine übereinstimmenden Werte vor; die hier genannten Zahlen markieren die Bandbreite der gesichteten Quellen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold und Bitcoin am Freitag gleichzeitig nachgaben, während die US-Anleiherenditen stiegen, passt zu einem Markt, der nach einem starken Jobbericht eine höhere Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung einpreist – das verteuert tendenziell zinslose Anlagen wie Gold und Bitcoin gegenüber verzinsten Anlagen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX/Euro Stoxx 50 wird in Meldung 1 behandelt, die US-Schlusskurse in Meldung 2, die Fed-Zinserwartung in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "CNBC Select: The price of gold today, Nov. 6, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-nov-6-2026/" },
        { title: "TokenPost: Bitcoin Trades at $75,702 in Friday Morning Market Snapshot", url: "https://www.tokenpost.com/news/investing/50194" },
        { title: "finanzen.at: Devisen im Blick – Darum geht es für den Euro zum US-Dollar deutlich abwärts", url: "https://www.finanzen.at/nachrichten/devisen/devisen-im-blick-darum-geht-es-fuer-deu-euro-zum-us-dollar-deutlich-abwarts-1036728754" },
        { title: "CNBC: 10-year Treasury yield rises after much stronger-than-expected October jobs report", url: "https://www.cnbc.com/2026/11/06/treasury-yields-inch-lower-as-investors-look-ahead-to-key-jobs-data-.html" }
      ]
    },
    /* 4 WIRTSCHAFT: FED */
    {
      id: "fed-dezember-zinsentscheidung-jobs-report-11-06", cats: ["economy"], when: "FOMC-Sitzung 27./28.10. · Jobbericht 6.11. · nächste Sitzung 8./9.12.2026",
      headline: "Fed-Chef Warsh nennt die kommenden sechs Wochen vor der Dezember-Sitzung „information-rich”, der Markt preist laut CME FedWatch eine Wahrscheinlichkeit von rund 73 Prozent für eine weitere Zinserhöhung ein",
      sec30: "Die Fed hatte ihren Leitzins bei der Sitzung am 27./28.10.2026 mit 10 zu 2 Stimmen bei 3,75 bis 4,00 % gehalten; Gouverneurin Lisa Cook und Cleveland-Fed-Chefin Beth Hammack votierten für eine weitere Erhöhung. Fed-Chef Kevin Warsh sagte danach, die Inflation liege seit „fast sechs Jahren” über dem Zielwert, die kommenden sechs Wochen bis zur nächsten Sitzung am 8./9. Dezember seien „information-rich”. Der am Freitag veröffentlichte Oktober-Jobbericht fiel mit +165.000 Stellen deutlich stärker aus als erwartet; laut CME FedWatch lag die Wahrscheinlichkeit für eine weitere Zinserhöhung im Dezember vor der Veröffentlichung bei rund 73 %.",
      blocks: [
        { h: "Was hat die Fed zuletzt entschieden?", items: [
          { tag: "fakt", text: "Die US-Notenbank Fed hielt ihren Leitzins bei der Sitzung am 27./28.10.2026 mit 10 zu 2 Stimmen unverändert bei 3,75 bis 4,00 %, nachdem sie im September erstmals seit drei Jahren erhöht hatte. Gouverneurin Lisa Cook und die Präsidentin der Cleveland-Fed, Beth Hammack, votierten für eine weitere Erhöhung um 0,25 Prozentpunkte.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Fed-Chef Kevin Warsh sagte nach der Sitzung, die Inflation liege seit „fast sechs Jahren” über dem Zielwert und es sei „unsere Verantwortung, die Inflation zu senken”; die kommenden sechs Wochen bis zur Dezember-Sitzung seien „information-rich”. Dallas-Fed-Präsidentin Lorie Logan forderte in einer Rede mindestens zwei weitere Zinserhöhungen um je 0,25 Prozentpunkte." }
        ]},
        { h: "Was zeigt der Jobbericht vom Freitag?", items: [
          { tag: "fakt", text: "Der US-Arbeitsmarktbericht für Oktober wurde am Freitag, 6.11.2026, veröffentlicht: +165.000 neue Stellen gegenüber einer Erwartung von rund 65.000, die Arbeitslosenquote sank auf 4,1 % von 4,2 %.",
            ask: [{ label: "Mehr zur Marktreaktion", ref: "s:2" }] }
        ]},
        { h: "Wie bewertet der Markt die Dezember-Sitzung?", items: [
          { tag: "fakt", text: "Laut CME FedWatch lag die Wahrscheinlichkeit für eine weitere Zinserhöhung um 0,25 Prozentpunkte bei der nächsten Sitzung am 8./9. Dezember 2026 vor der Veröffentlichung des Jobberichts bei rund 72,8 %, die Wahrscheinlichkeit für unveränderte Zinsen bei rund 27,2 %.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Markt überwiegend eine weitere Zinserhöhung statt einer Senkung einpreist, unterscheidet die aktuelle Lage von früheren Zyklen: Der seit Februar 2026 laufende Irankrieg hat die Energiepreise und damit die Inflationserwartungen erhöht, was Fed und Bank of England nach bisherigen Aussagen eher zu Erhöhungen als zu Senkungen veranlasst." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 2 und 3, zur EZB-Nachfolgefrage und Dezember-Sitzung in Meldung 5, zur Bank of England in Meldung 6.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks"],
      sources: [
        { title: "CNBC: Fed interest rate decision October 2026", url: "https://www.cnbc.com/2026/10/28/fed-interest-rate-decision-october-2026.html" },
        { title: "Bloomberg: Fed holds rates, says more data will help next decision", url: "https://www.bloomberg.com/news/articles/2026-10-28/fed-holds-rates-says-more-data-will-help-next-decision" },
        { title: "KuCoin News: Fed's December rate hike probability at 72.8% before nonfarm payrolls release", url: "https://www.kucoin.com/news/flash/fed-s-december-rate-hike-probability-at-72-8-before-nonfarm-payrolls-release" },
        { title: "CNN: US jobs report October 2026", url: "https://www.cnn.com/2026/11/06/economy/us-jobs-report-october" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB-LAGARDE-NACHFOLGE */
    {
      id: "ezb-lagarde-nachfolge-knot-decos-nagel-11-06", cats: ["economy"], when: "Nominierungsfrist 6.11. · Nagel-Rede Berlin 4.11. · Eurogruppe-Treffen 9.11.2026",
      headline: "Die Eurogruppe zählt nach Fristende zwei offizielle Bewerbungen um die Lagarde-Nachfolge, Bundesbank-Präsident Nagel wird als möglicher dritter Kandidat gehandelt",
      sec30: "Nach Ablauf der von Eurogruppen-Präsident Pierrakakis gesetzten Nominierungsfrist liegen für die Nachfolge von EZB-Präsidentin Christine Lagarde (Rücktritt zum 7.2.2027 angekündigt) zwei offizielle Bewerbungen vor: der frühere niederländische Notenbankchef Klaas Knot und BIZ-Generaldirektor Pablo Hernández de Cos. Bundesbank-Präsident Joachim Nagel wird in deutschen Berichten als möglicher dritter Kandidat gehandelt, ohne offiziell nominiert zu sein. Die Eurogruppe nimmt am 9.11. eine erste Bestandsaufnahme vor; Bundeskanzler Merz erwartet eine Entscheidung noch in diesem Jahr. Nagel selbst hatte am 4.11. in Berlin eine EZB-Zinserhöhung im Dezember erneut für „aus heutiger Sicht sehr wahrscheinlich notwendig” gehalten.",
      blocks: [
        { h: "Wer hat sich offiziell um die Lagarde-Nachfolge bewirbt?", items: [
          { tag: "fakt", text: "Nach Ablauf der Nominierungsfrist (von den meisten Quellen auf Freitag, 6.11.2026, datiert) liegen zwei offizielle Bewerbungen für die Nachfolge von EZB-Präsidentin Christine Lagarde vor: der frühere Chef der niederländischen Notenbank, Klaas Knot, und der Generaldirektor der Bank für Internationalen Zahlungsausgleich (BIZ), Pablo Hernández de Cos.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Einzelne Quellen nennen für das Fristende auch den 5. oder den 7. November; die Mehrheit der gesichteten Berichte nennt den 6. November als Stichtag." }
        ]},
        { h: "Welche Rolle spielt Bundesbank-Präsident Nagel?", items: [
          { tag: "unbestaetigt", text: "Bundesbank-Präsident Joachim Nagel wird laut mehreren deutschen Berichten als möglicher dritter, deutscher Kandidat gehandelt; Bundesfinanzminister Lars Klingbeil (SPD) soll ihn unterstützen, Bundeskanzler Friedrich Merz (CDU) habe sich noch nicht festgelegt. Eine offizielle Nominierung Nagels lag zum Redaktionsschluss nicht vor." }
        ]},
        { h: "Wie geht es weiter?", items: [
          { tag: "fakt", text: "Die Eurogruppe nimmt am 9.11.2026 eine erste Bestandsaufnahme der eingegangenen Bewerbungen vor; eine endgültige Empfehlung soll erst in den folgenden Wochen erfolgen. Laut Bundeskanzler Merz soll die Entscheidung noch in diesem Jahr fallen." }
        ]},
        { h: "Was sagte Nagel zur Dezember-Zinssitzung?", items: [
          { tag: "position", text: "Nagel sagte am 4.11.2026 in Berlin, eine Zinserhöhung der EZB im Dezember sei „aus heutiger Sicht sehr wahrscheinlich notwendig”. Die Eurozonen-Inflation hatte im September 2026 bei 3,8 % gelegen; die nächste EZB-Zinssitzung ist für den 17.12.2026 angesetzt." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinserwartung in Meldung 4, zur Bank of England in Meldung 6.",
      terms: ["leitzins"],
      followups: ["e:ecb-hike", "e:central-banks-why"],
      sources: [
        { title: "ORF: Zwei Bewerber für Lagarde-Nachfolge an der Spitze der EZB", url: "https://orf.at/stories/3447456/" },
        { title: "finanzen.at: Zwei Bewerber für Lagarde-Nachfolge an Spitze der EZB", url: "https://www.finanzen.at/nachrichten/aktien/zwei-bewerber-fuer-lagarde-nachfolge-an-spitze-der-ezb-1036730690" },
        { title: "fondsprofessionell.at: Bericht – Bundesbankchef Nagel als Kandidat für EZB-Spitze im Gespräch", url: "https://www.fondsprofessionell.at/news/maerkte/headline/bericht-bundesbankchef-nagel-als-kandidat-fuer-ezb-spitze-im-gespraech-252685/newsseite/1/" },
        { title: "cash.ch: Währungshüter Nagel – EZB-Zinserhöhung im Dezember ist aus heutiger Sicht sehr wahrscheinlich nötig", url: "https://www.cash.ch/news/top-news/wahrungshuter-nagel-ezb-zinserhohung-im-dezember-ist-aus-heutiger-sicht-sehr-wahrscheinlich-notig-982169" }
      ]
    },
    /* 6 WIRTSCHAFT/WORLD: BANK OF ENGLAND */
    {
      id: "bank-of-england-leitzins-vier-prozent-bailey-11-05", cats: ["economy", "world"], when: "BoE-Entscheidung 5.11.2026",
      headline: "Die Bank of England erhöht ihren Leitzins auf 4,0 Prozent und begründet dies mit steigenden Energiepreisen im Zuge des Nahost-Konflikts",
      sec30: "Das geldpolitische Komitee der Bank of England erhöhte den Leitzins am 5.11.2026 um 0,25 Prozentpunkte auf 4,0 % – die erste Erhöhung seit August 2023. Die Abstimmung fiel 8 zu 1 aus; das abweichende Mitglied Catherine Mann hätte eine Erhöhung um 0,5 Prozentpunkte bevorzugt. Als Begründung nannte die Notenbank weiter steigende globale Energiepreise von einem bereits erhöhten Niveau aus. Gouverneur Andrew Bailey warnte, ohne echte Fortschritte bei einer Lösung des Nahost-Konflikts seien die Risiken für Energiepreise und Inflation „nach oben gerichtet”.",
      blocks: [
        { h: "Was hat die Bank of England entschieden?", items: [
          { tag: "fakt", text: "Das geldpolitische Komitee (MPC) der Bank of England erhöhte den Leitzins am 5.11.2026 um 0,25 Prozentpunkte auf 4,0 % – die erste Erhöhung seit August 2023. Die Abstimmung fiel 8 zu 1 aus; Catherine Mann votierte für eine größere Erhöhung um 0,5 Prozentpunkte auf 4,25 %.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Warum wurde der Zins erhöht?", items: [
          { tag: "fakt", text: "Die Notenbank begründete den Schritt mit weiter steigenden globalen Energiepreisen von einem bereits erhöhten Niveau aus und erwartet, dass die britische Inflation Mitte 2027 rund 5 % erreichen könnte." },
          { tag: "position", text: "BoE-Gouverneur Andrew Bailey sagte: „Ohne echte Fortschritte hin zu einer Lösung des Konflikts im Nahen Osten … sind die Risiken für die Energiepreise und damit für die Inflation nach oben gerichtet.” Er betonte zugleich, die Erhöhung solle nicht als erste einer unausweichlich langen Serie verstanden werden, fügte aber hinzu, dass sie – falls der Nahost-Konflikt nicht gelöst werde – wohl auch nicht die letzte sein werde.",
            ask: [{ label: "Mehr zum Irankrieg und der Straße von Hormus", ref: "s:10" }] }
        ]},
        { h: "Wie reagierten Märkte?", items: [
          { tag: "fakt", text: "Das britische Pfund reagierte verhalten, da die Erhöhung bereits weitgehend eingepreist war; GBP/USD notierte am Freitag, 6.11., bei rund 1,3395 bis 1,3406. Die Rendite zehnjähriger britischer Staatsanleihen (Gilts) stieg leicht um 0,02 Prozentpunkte auf 5,15 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Bank of England ihre Zinserhöhung ausdrücklich mit dem Nahost-Konflikt begründet, zeigt, wie direkt sich der seit Februar 2026 laufende Irankrieg über den Ölpreis auf die Geldpolitik in Europa auswirkt – ähnlich wie bei der EZB (Meldung 5)." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinserwartung in Meldung 4, zur EZB-Nachfolgefrage in Meldung 5, zum Ölpreis und zur Straße von Hormus in Meldung 15.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:oil-inflation", "e:central-banks-why"],
      sources: [
        { title: "CNBC: Interest rates, inflation UK", url: "https://www.cnbc.com/2026/11/05/interest-rates-inflation-uk.html" },
        { title: "CryptoSlate: Bank of England raises rates to 4% as it forecasts inflation near 5% next year", url: "https://cryptoslate.com/bank-of-england-raises-rates-to-4-as-it-forecasts-inflation-near-5-next-year/" },
        { title: "Pound Sterling Live: Pound to Euro and Dollar fades, Bank of England hike", url: "https://www.poundsterlinglive.com/gbp-live-today/23847-pound-to-euro-and-dollar-fades-bank-of-england-hike" }
      ]
    },
    /* 7 DEUTSCHLAND: HAUSHALT/STEUERREFORM */
    {
      id: "bundeshaushalt-steuerreform-streit-optionsmodell-11-06", cats: ["germany"], when: "Bereinigungssitzung 12.11. · Plenumsberatung 24.–27.11. · Steuerreform-Streit öffentlich 6.11.2026",
      headline: "Die Unionsfraktion droht im Streit um ein Optionsmodell für Personengesellschaften mit einer Blockade der von der SPD geplanten Einkommensteuerreform",
      sec30: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11.2026 terminiert, die abschließende Bundestagsberatung für den 24. bis 27.11., die Verabschiedung für Freitag, 27.11. Parallel zum Haushalt soll das Haushaltsbegleitgesetz 2027 beschlossen werden, das unter anderem eine von der SPD angestrebte Einkommensteuerreform für Personengesellschaften enthält. Am 6.11. wurde öffentlich, dass die Unionsfraktion diese Reform blockiert, solange kein praktikables Optionsmodell für den Wechsel von der Einkommen- zur Körperschaftsteuer vorliegt.",
      blocks: [
        { h: "Was ist beim Bundeshaushalt 2027 beschlossen und was ist noch offen?", items: [
          { tag: "fakt", text: "Der Haushaltsentwurf 2027 mit einem Gesamtvolumen von 555,4 Mrd. Euro wurde bereits am 8.9.2026 in den Bundestag eingebracht. Die Bereinigungssitzung des Haushaltsausschusses ist für Donnerstag, 12.11.2026, terminiert, die abschließende Bundestagsberatung (2./3. Lesung) für den 24. bis 27.11., die Verabschiedung durch namentliche Abstimmung für Freitag, 27.11.2026." }
        ]},
        { h: "Was wird mit dem Haushaltsbegleitgesetz konkret geändert?", items: [
          { tag: "fakt", text: "Im Haushaltsbegleitgesetz 2027 ist unter anderem ein sogenanntes Optionsmodell für Personengesellschaften vorgesehen, das diesen Unternehmen erlauben soll, zwischen der Besteuerung nach Einkommen- oder nach Körperschaftsteuer zu wechseln – im Zusammenhang mit einer von der SPD angestrebten Einkommensteuerreform." }
        ]},
        { h: "Wer unterstützt die Reform und womit?", items: [
          { tag: "position", text: "Die SPD-Seite der Koalition treibt die Einkommensteuerreform voran; eine konkrete öffentliche Begründung eines SPD-Vertreters für die Ausgestaltung des Optionsmodells selbst lag in den gesichteten Quellen für diese Woche nicht vor." }
        ]},
        { h: "Wer kritisiert die Reform und womit?", items: [
          { tag: "position", text: "Mathias Middelberg, stellvertretender Vorsitzender der Unionsfraktion, erklärte am 6.11.2026, die Einkommensteuerreform sei „nicht zustimmungsfähig ohne ein wirklich praktikables Modell, das Personengesellschaften den Wechsel in die Besteuerung nach der Körperschaftsteuer ermöglicht”; ein „so weites Auseinanderfallen der Besteuerung je nach Rechtsform des Unternehmens” sei aus seiner Sicht inakzeptabel.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Ohne eine Einigung auf ein praktikables Optionsmodell könnte sich laut der Unionsposition die geplante Steueranhebung beziehungsweise -reform im Rahmen des Haushaltsbegleitgesetzes verzögern – mit möglichen Rückwirkungen auf den ohnehin engen Zeitplan der Haushaltsberatungen bis zum 27.11." }
        ]}
      ],
      reaction: "Mehr zur Rentenreform und zu aktuellen Umfragen in Meldung 8.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "mittelstand-nachrichten.de: Steuerreform – Union droht SPD mit Blockade, Streit um Optionsmodell für Personengesellschaften", url: "https://www.mittelstand-nachrichten.de/aktuell/dts_politik/steuerreform-union-droht-spd-mit-blockade-streit-um-optionsmodell-fuer-personengesellschaften/" },
        { title: "bundestag.de: Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "bundestag.de: 55. Sitzung Haushaltsausschuss (Bereinigungssitzung)", url: "https://www.bundestag.de/ausschuesse/a08_haushalt/1231424-1231424" }
      ]
    },
    /* 8 DEUTSCHLAND: RENTE/UMFRAGEN */
    {
      id: "rentenreform-kapitalrente-verschiebung-fratzscher-umfragen-11-06", cats: ["germany"], when: "Schweitzer-Aussage 4.11. · Fratzscher-Kritik 5.11. · Umfragen Ende Okt./Anfang Nov. 2026",
      headline: "Bundesarbeitsminister Schweitzer meldet den Entwurf des Rentenreformgesetzes zu 95 Prozent fertig, DIW-Chef Fratzscher kritisiert die erneute Verschiebung der Kapitalrente",
      sec30: "Bundesarbeitsminister Alexander Schweitzer (SPD) erklärte am 4.11.2026, der Entwurf des Renten-Reformgesetzes sei „zu 95 Prozent fertig”. Wesentliche Reformteile sollen laut Bundeskanzler Merz noch vor Weihnachten ins Kabinett; die kapitalgedeckte Zusatzvorsorge („Kapitalrente”) soll aber zunächst nur als Eckpunkte festgelegt werden, die gesetzliche Ausgestaltung verschiebt sich auf 2027. DIW-Präsident Marcel Fratzscher kritisierte das am 5.11. als „Rückschlag für eine nachhaltige und generationengerechte Reform”. Neue Umfragen von Forsa, INSA und infratest dimap sehen die AfD weiterhin deutlich vor der Union.",
      blocks: [
        { h: "Was wurde zur Rentenreform angekündigt?", items: [
          { tag: "fakt", text: "Bundesarbeitsminister Alexander Schweitzer (SPD) erklärte am 4.11.2026 beim Chemie-Arbeitgebertag in Berlin, der Entwurf des Renten-Reformgesetzes sei „zu 95 Prozent fertig”. Bundeskanzler Friedrich Merz kündigte an, wesentliche Reformteile sollten noch vor Weihnachten 2026 im Kabinett beschlossen werden." },
          { tag: "fakt", text: "Für die kapitalgedeckte Zusatzvorsorge („Kapitalrente”) sollen zunächst nur Eckpunkte festgelegt werden; die detaillierte gesetzliche Ausgestaltung soll erst 2027 erfolgen, die Verabschiedung durch Bundestag und Bundesrat ist nun für das erste Quartal 2027 vorgesehen – ursprünglich war ein Inkrafttreten zum 1.1.2027 angestrebt. Vorgesehen ist, zwei Prozent der Rentenversicherungsbeiträge am Kapitalmarkt anzulegen, geschätztes Volumen 30 bis 40 Mrd. Euro jährlich.",
            ask: [{ label: "Was ist das Umlageverfahren?", ref: "t:umlage" }] }
        ]},
        { h: "Was ändert sich konkret, was bleibt strittig?", items: [
          { tag: "fakt", text: "Ab 2027 soll zudem die Mütterrente III die anrechenbare Erziehungszeit für vor 1992 geborene Kinder von 30 auf 36 Monate ausweiten. Als Streitpunkte innerhalb der Koalition gelten weiterhin eine mögliche Einschränkung der abschlagsfreien Rente nach 45 Beitragsjahren („Rente mit 63”), eine Kopplung des Rentenalters an die Lebenserwartung über 67 Jahre hinaus sowie ein ab 2031 wieder angewendeter Nachhaltigkeitsfaktor, der die jährliche Rentensteigerung bremsen soll." }
        ]},
        { h: "Wer unterstützt das Vorgehen und womit?", items: [
          { tag: "position", text: "SPD-Fraktionsvorsitzende Dagmar Schmidt verteidigte die Verschiebung der Kapitalrente mit dem Argument, „Gründlichkeit” müsse Vorrang haben, da neue Strukturen erst geschaffen werden müssten. CSU-Fraktionschef im bayerischen Landtag, Klaus Holetschek, forderte dagegen eine zügige Umsetzung: „Die Erwartungshaltung der Union ist klar: Die Reformen müssen jetzt rasch umgesetzt werden.”" }
        ]},
        { h: "Wer kritisiert das Vorgehen und womit?", items: [
          { tag: "position", text: "DIW-Präsident Marcel Fratzscher bezeichnete die Verschiebung der Kapitalrente am 5.11.2026 als „Rückschlag für eine nachhaltige und generationengerechte Reform der gesetzlichen Rentenversicherung”. Sein Argument: Gerade junge Menschen und Menschen mit niedrigem Einkommen bräuchten eine Altersvorsorge, die auch die Chancen des Kapitalmarkts nutze, statt sich allein auf das Umlageverfahren zu stützen.",
            ask: [{ label: "Mehr zur Debatte um die Rentenreform", ref: "e:rente-basics" }] }
        ]},
        { h: "Welche Auswirkungen werden diskutiert und wie ist die politische Stimmungslage?", items: [
          { tag: "fakt", text: "Aktuelle Umfragen (Erhebungszeitraum Ende Oktober/Anfang November 2026) sehen die AfD weiter deutlich vor der Union: Forsa 26,0 % (AfD) zu 20,0 % (Union), INSA 28,0 % zu 20,0 %, infratest dimap (ARD-DeutschlandTrend) 27 % zu 20 %. Eine Koalition aus Union und SPD hätte laut infratest dimap weiterhin keine Mehrheit.",
            ask: [{ label: "Wie entsteht eine Regierungsmehrheit?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Mehr zum Streit um die Steuerreform im Haushaltsbegleitgesetz in Meldung 7.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "ariva.de: Schweitzer – 95 Prozent des Renten-Reformgesetzes fertig", url: "https://www.ariva.de/news/schweitzer-95-prozent-des-renten-reformgesetzes-fertig-12194860" },
        { title: "ad-hoc-news.de: Rentenreform – Kabinett plant Beschluss vor Weihnachten, Kapitalrente folgt 2027", url: "https://www.ad-hoc-news.de/wissenschaft/rentenreform-kabinett-plant-beschluss-vor-weihnachten-kapitalrente-folgt-2027/70460882" },
        { title: "ad-hoc-news.de: Kapitalrente – Fratzscher kritisiert Verschiebung durch Merz", url: "https://www.ad-hoc-news.de/politik/kapitalrente-fratzscher-kritisiert-verschiebung-durch-merz/70463133" },
        { title: "dawum.de: Forsa-Umfrage Bundestag", url: "https://dawum.de/Bundestag/Forsa/2026-11-03/" },
        { title: "Tagesspiegel: ARD-DeutschlandTrend – AfD bleibt deutlich vor der Union", url: "https://www.tagesspiegel.de/politik/deutschlandtrend-der-ard-afd-bleibt-deutlich-vor-der-union--zufriedenheit-mit-merz-steigt-leicht-16247649.html" }
      ]
    },
    /* 9 INTERNATIONAL: US-ZWISCHENWAHLEN FINAL */
    {
      id: "us-zwischenwahlen-endstand-miller-stabschef-11-06", cats: ["world"], when: "Wahltag Di 3.11. · Stand Fr 6.11.2026 · Miller-Ernennung wirksam 9.11.",
      headline: "Nach den US-Zwischenwahlen stehen Mississippi und Alaska weiterhin aus, im Weißen Haus löst Stephen Miller Susie Wiles als Stabschef ab",
      sec30: "Die Demokraten kontrollieren nach den Zwischenwahlen vom 3.11.2026 den Senat mit 54 zu 44 Sitzen (sieben umgekehrte Sitze: Kansas, Iowa, Texas, Ohio, Maine, North Carolina, South Carolina) und das Repräsentantenhaus mit mehr als 250 von 435 Sitzen. In Mississippi (Colom gegen Hyde-Smith, Unterschied unter 100 Stimmen, keine Nachzähl-Pflicht, Zertifizierung am 13.11.) und Alaska (Peltola gegen Sullivan, Ranked-Choice-Auswertung erst am 18.11.) ist die Auszählung weiterhin nicht final. Präsident Trump machte unter anderem die Ölpreise und den Irankrieg für die Wahlniederlage verantwortlich; als personelle Folge löst Stephen Miller ab dem 9.11. Susie Wiles als Stabschef im Weißen Haus ab.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Mit der Kontrolle über beide Kongresskammern können die Demokraten künftig Gesetzesvorhaben der Trump-Regierung blockieren und eigene Untersuchungen einleiten; das gilt auch für die Haushaltspolitik, etwa bei geplanten Verteidigungsausgaben (mehr dazu in Meldung 11)." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Die Demokraten gewannen im Senat sieben zuvor republikanische Sitze (Kansas, Iowa, Texas, Ohio, Maine, North Carolina, South Carolina) und liegen damit bei 54 zu 44 Sitzen; im Repräsentantenhaus kamen rund 40 Sitze hinzu. In Mississippi (Kandidaten Colom und Hyde-Smith) und Alaska (Peltola und Sullivan) ist die Auszählung noch nicht abgeschlossen." }
        ]},
        { h: "Welcher historische Hintergrund ist wichtig?", items: [
          { tag: "einordnung", text: "Mid-Term-Wahlen gelten traditionell als Stimmungstest für die amtierende Regierung; ein Sitzverlust der Regierungspartei ist historisch häufig, das Ausmaß des demokratischen Erfolgs wird in Berichten aber als besonders deutlich eingeordnet." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Investoren bewerteten die Folgen für verschiedene Branchen unterschiedlich: Bei den Zwischenwahlen stimmten Wähler in zehn Bundesstaaten über 41 Fragen zu Rechenzentren ab, 77 % votierten gegen eine weitere Entwicklung – das gilt laut Berichten als einer der Auslöser für den Chip-Ausverkauf vom Donnerstag (Meldung 14). Verteidigungswerte gaben ebenfalls nach, aus Sorge vor Kürzungen bei geplanten Rüstungsausgaben (Meldung 11).",
            ask: [{ label: "Mehr zum Chip-Ausverkauf", ref: "s:14" }, { label: "Mehr zu Verteidigungswerten", ref: "s:11" }] },
          { tag: "position", text: "Präsident Trump machte laut Berichten unter anderem hohe Ölpreise und den seit Februar 2026 laufenden Irankrieg für die Wahlniederlage der Republikaner verantwortlich und kündigte Vetos gegen Gesetzesvorhaben der neuen demokratischen Mehrheit an." },
          { tag: "fakt", text: "Als bislang größte personelle Folge löst Stephen Miller zum 9.11.2026 Susie Wiles als Stabschef im Weißen Haus ab; die Personalie wurde am 6.11. bekannt." }
        ]}
      ],
      reaction: "Mehr zu den Marktreaktionen in Meldung 1 und 2, zum Chip-Ausverkauf in Meldung 14, zu Verteidigungswerten in Meldung 11.",
      terms: [],
      followups: ["e:why-markets-move"],
      sources: [
        { title: "NBC News: Midterm election results 2026", url: "https://www.nbcnews.com/politics/2026-elections" },
        { title: "CNBC: Data center ballot measures 2026 midterm", url: "https://www.cnbc.com/2026/11/04/data-center-ballot-measures-2026-midterm.html" },
        { title: "Tom's Hardware: AI data centers comprehensively defeated at US midterm elections", url: "https://www.tomshardware.com/tech-industry/data-centers/ai-data-centers-comprehensively-defeated-at-us-midterm-elections-45-measures-put-on-the-ballot-as-americans-overwhelmingly-vote-against-developments" }
      ]
    },
    /* 10 INTERNATIONAL/GEOPOLITIK: IRAN/HORMUS */
    {
      id: "iran-krieg-hormus-tankerzwischenfaelle-diplomatie-11-06", cats: ["world", "geo"], when: "US-Luftschläge Qeshm 2.11. · IRGC-Meldungen 4./5.11. · Haaretz-Bericht 6.11.2026",
      headline: "Die USA führen erneut Luftschläge gegen Ziele im Iran, die iranischen Revolutionsgarden melden neue, unabhängig nicht bestätigte Tankerzwischenfälle an der Straße von Hormus",
      sec30: "US-Streitkräfte führten am 2.11.2026 nach eigenen Angaben „defensive” Luftschläge auf die iranische Insel Qeshm in der Straße von Hormus durch, als Reaktion auf einen iranischen Beschuss eines US-Flugzeugs. Am 4.11. behaupteten die iranischen Revolutionsgarden (IRGC) über den staatsnahen Sender Press TV, vier Öltanker seien durch Seeminen zerstört worden; eine unabhängige Bestätigung liegt nicht vor. Parallel laufen über Katar vermittelte indirekte US-Iran-Gespräche; ein Bericht der israelischen Zeitung Haaretz vom 6.11. – als Spekulation zu kennzeichnen – nennt den 9.11. als möglichen Termin für eine Wiederaufnahme größerer Kampfhandlungen durch die USA.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Die Straße von Hormus ist eine der wichtigsten Handelsrouten für Öltransporte weltweit; Angriffe oder deren Androhung in dieser Region wirken sich unmittelbar auf den Ölpreis aus (mehr dazu in Meldung 15) und damit auch auf die Inflationserwartungen von Zentralbanken wie der Bank of England (Meldung 6)." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "US-Streitkräfte führten am 2.11.2026 Luftschläge auf die Insel Qeshm durch – dort befinden sich laut Berichten eine unterirdische Raketenbasis, ein Marinestützpunkt und eine große Entsalzungsanlage. Die iranische Nachrichtenagentur IRNA meldete fünf Explosionen auf der Insel." },
          { tag: "unbestaetigt", text: "Die iranischen Revolutionsgarden behaupteten am 4.11.2026 über Press TV, vier Öltanker seien beim Versuch, eine von Iran als gesperrt erklärte Route zu befahren, durch Seeminen zerstört worden; zwei weitere Schiffe seien beschlagnahmt, eine US-Drohne vom Typ MQ-9 abgeschossen worden. Diese Angaben stammen ausschließlich von iranischer, staatsnaher Seite; eine unabhängige Bestätigung liegt nicht vor, und auch die genannte Zahl der betroffenen Tanker schwankt zwischen Berichten." }
        ]},
        { h: "Welcher historische Hintergrund ist wichtig?", items: [
          { tag: "fakt", text: "Der Krieg zwischen den USA/Israel und Iran läuft seit dem 28.2.2026; erklärtes Ziel der USA und Israels ist laut Berichten die Zerstörung des iranischen Raketenarsenals und der iranischen Marine sowie die Verhinderung iranischer Atomwaffen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Jede neue Eskalations- oder Entspannungsmeldung rund um die Straße von Hormus wirkte sich diese Woche unmittelbar auf den Ölpreis aus; mehr dazu in Meldung 15.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] },
          { tag: "unbestaetigt", text: "Laut einem Bericht der Zeitung Haaretz vom 6.11.2026 unter Berufung auf nicht näher genannte Quellen erwäge Präsident Trump, den Krieg so früh wie am 9.11. wieder aufzunehmen; dies ist als Spekulation, nicht als bestätigte Entscheidung zu werten. Parallel laufen über Katar vermittelte indirekte US-Iran-Gespräche; Irans Oberster Führer soll der eigenen Regierung „Vollmachten” erteilt haben, um diese zu beschleunigen." }
        ]}
      ],
      reaction: "Mehr zum Ölpreis und zu den deutschen Gasspeichern in Meldung 15, zur Bank of England in Meldung 6.",
      terms: [],
      followups: ["e:why-oil-up-geo", "e:hormuz"],
      sources: [
        { title: "CNN: US conducts strikes on Iranian targets near Strait of Hormuz", url: "https://www.cnn.com/2026/11/02/politics/us-strikes-iran-qeshm-island" },
        { title: "Al Jazeera: Iran says tankers struck in Hormuz amid fears of new US attack", url: "https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack" },
        { title: "Haaretz: Report – Trump weighs options for resuming war with Iran as soon as November 9", url: "https://www.haaretz.com/middle-east-news/iran/2026-11-06/ty-article/report-trump-weighs-options-for-resuming-war-with-iran-as-soon-as-november-9/000001a1-b08c-defa-a7f7-bcffca730000" }
      ]
    },
    /* 11 DEFENCE */
    {
      id: "rheinmetall-kursrutsch-analysten-papperger-euronaval-11-06", cats: ["defence"], when: "Gewinnwarnung 5.11. · Wochenbilanz bis Fr 6.11. · Euronaval Paris 3.–6.11.2026",
      headline: "Rheinmetall verliert binnen einer Woche rund 22 Prozent an Börsenwert, Analysten sind nach der fünften Gewinnwarnung gespalten, CEO Papperger kauft eigene Aktien",
      sec30: "Rheinmetall hatte am 5.11. zum fünften Mal binnen elf Monaten die Jahresprognose gesenkt und war zeitweise um bis zu 18,5 % eingebrochen; von Freitag, 30.10. (1.037,60 €), bis Freitag, 6.11. (812,70 €), verlor die Aktie insgesamt 21,68 %. Analysten reagierten gespalten: JPMorgan und Bernstein senkten ihre Kursziele und Einstufungen, Jefferies, RBC und Deutsche Bank Research hielten an Kaufempfehlungen fest. CEO Armin Papperger kaufte am 5. und 6.11. insgesamt 834 eigene Aktien für rund 702.780 Euro. Hensoldt und RENK meldeten trotz guter Neun-Monats- beziehungsweise Quartalszahlen ebenfalls Kursrückgänge im Branchensog; auf der Messe Euronaval in Paris unterzeichneten Fincantieri, Navantia und Naval Group ein neues Konsortialabkommen.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie seit der Gewinnwarnung entwickelt?", items: [
          { tag: "fakt", text: "Zwischen dem Xetra-Schluss von Freitag, 30.10.2026 (1.037,60 €), und Freitag, 6.11.2026 (812,70 €), verlor die Rheinmetall-Aktie 21,68 % ihres Wertes. Am Samstag, 7.11., notierte sie im dünn gehandelten außerbörslichen Handel bei Lang & Schwarz leicht erholt bei 816,50 € (+0,47 %).",
            ask: [{ label: "Mehr zur Gewinnwarnung vom 5.11.", ref: "s:1" }] }
        ]},
        { h: "Wie reagierten Analysten?", items: [
          { tag: "position", text: "JPMorgan senkte das Kursziel von 1.350 auf 1.150 € (Neutral), Bernstein stufte von „Outperform” auf „Market-Perform” herab (Kursziel von 1.200 auf 1.000 €), Baader Europe/AlphaValue senkte von 1.328 auf 1.132 € (weiterhin „Add”). Dagegen hielten Jefferies (Buy, 1.350 €), RBC (Outperform, 1.600 €) und Deutsche Bank Research (Buy, 1.650 €) an optimistischeren Einschätzungen fest." },
          { tag: "fakt", text: "CEO Armin Papperger kaufte am 5.11. 585 eigene Aktien (im Schnitt 858,95 €) und am 6.11. weitere 249 Aktien (804,40 €) – zusammen Aktien im Wert von rund 702.780 Euro." }
        ]},
        { h: "Wie entwickelten sich Hensoldt und RENK?", items: [
          { tag: "fakt", text: "Hensoldt meldete am 5.11. starke Neun-Monats-Zahlen: Auftragseingang +76,7 % auf 3,56 Mrd. €, Umsatz +21,3 % auf 1,863 Mrd. €, bereinigtes EBITDA +33 % auf 281 Mio. €, Auftragsbestand mit 10,37 Mrd. € auf Rekordniveau; die Jahresprognose wurde leicht auf rund 2,8 Mrd. € Umsatz angehoben. RENK meldete für das dritte Quartal einen Auftragseingang von 469 Mio. € (+44 %), Umsatz von 345 Mio. € und bestätigte die Jahresprognose. Beide Aktien standen trotz der soliden Zahlen im Schatten des Rheinmetall-Kursrutschs.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Was passierte auf der Euronaval-Messe und im Bundestag?", items: [
          { tag: "fakt", text: "Auf der Marinerüstungsmesse Euronaval in Paris (3. bis 6.11., 30. Ausgabe) unterzeichneten Fincantieri, Navantia und Naval Group ein Konsortialabkommen für die zweite Phase der European Patrol Corvette. Der Bundestags-Haushaltsausschuss billigte am 4.11. sechs von sieben vorgelegten Rüstungsvorhaben im Gesamtvolumen von rund 1,5 Mrd. Euro." }
        ]},
        { h: "Wie reagierten US-Verteidigungswerte auf die Zwischenwahlen?", items: [
          { tag: "fakt", text: "Nach dem demokratischen Sieg bei den Zwischenwahlen fielen am 4.11. Lockheed Martin, Northrop Grumman, RTX und L3Harris jeweils mehrere Prozent, aus Sorge, ein demokratisch kontrollierter Kongress könnte das von Trump geplante 1,5-Billionen-Dollar-Verteidigungsbudget beschneiden." },
          { tag: "position", text: "Analyst Myles Walton (Wolfe Research) bezeichnete die Kursreaktion als „a headline negative for defense stocks”, erwartete sie aber als möglicherweise kurzlebig und verwies auf die Erholung der Branche nach den Zwischenwahlen 2006." }
        ]}
      ],
      reaction: "Mehr zu den Zwischenwahlen in Meldung 9, zum DAX in Meldung 1.",
      terms: ["ebitda"],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "euronews: Rheinmetall shares plunge after profit warning", url: "https://www.euronews.com/2026/11/05/rheinmetall-shares-plunge-more-than-17-after-profit-warning-over-order-delays" },
        { title: "ad-hoc-news.de: Rheinmetall Wochenbilanz", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-am-6-november-1-92-prozent-tiefer/70471611" },
        { title: "hartpunkt.de: Haushaltsausschuss billigt Rüstungsvorhaben", url: "https://www.hartpunkt.de/" },
        { title: "Naval News: Euronaval 2026", url: "https://www.navalnews.com/" }
      ]
    },
    /* 12 DEALS/PE */
    {
      id: "basf-evonik-ablehnung-marvell-lumentum-deal-11-06", cats: ["deals", "pe"], when: "Evonik-Ablehnung 5.11. · Marvell/Lumentum-Ankündigung 2.11.2026",
      headline: "Evonik lehnt das 11,2-Milliarden-Euro-Angebot von BASF formell ab, Marvell und Lumentum besiegeln per Aktientausch eine Fusion im Wert von 115 Milliarden Dollar",
      sec30: "Der Evonik-Vorstand entschied am 5.11.2026, nicht in Verhandlungen mit BASF über dessen nachgebessertes Übernahmeangebot von 24 Euro pro Aktie (rund 11,2 Mrd. Euro) einzutreten, und bot lediglich einen „rein informativen und vertraulichen Austausch” an. Interims-CEO Claus Rettig bekräftigte die Ablehnung und verwies auf starke Q3-Zahlen. Die RAG-Stiftung (43,8 % der Anteile) äußerte sich diese Woche nicht öffentlich. Parallel gaben Marvell Technology und Lumentum Holdings am 2.11. eine Aktientausch-Fusion im Wert von 115 Mrd. Dollar bekannt – einen der größten Tech-Deals des Jahres.",
      blocks: [
        { h: "Was wurde bei BASF/Evonik entschieden?", items: [
          { tag: "fakt", text: "Der Evonik-Vorstand gab am 5.11.2026 bekannt, einen Brief von BASF vom 22.10.2026 geprüft und entschieden zu haben, nicht in Verhandlungen einzutreten; er bot lediglich einen „rein informativen und vertraulichen Austausch” an. BASFs nachgebessertes Angebot liegt bei 24 Euro pro Aktie, was rund 11,2 Mrd. Euro entspricht; die Evonik-Aktie notierte am 4.11. mit 21,46 Euro deutlich darunter." },
          { tag: "position", text: "Interims-CEO Claus Rettig argumentierte, Größe allein mache ein Unternehmen nicht besser, der Branchentrend gehe eher zur Fokussierung; er sei überzeugt, dass Evonik aus eigener Kraft mehr Wert schaffen könne, und verwies auf das um 40 % gestiegene bereinigte operative EBITDA von 629 Mio. Euro im dritten Quartal." },
          { tag: "unbestaetigt", text: "Die RAG-Stiftung als mit 43,8 % größte Evonik-Anteilseignerin hat sich für diese Woche nicht erneut öffentlich positioniert. Zur Finanzierungsstruktur eines möglichen neuen BASF-Angebots, zu beteiligten Banken/Beratern oder zu einem Zeitplan für ein Folgeangebot liegen in den Quellen keine Angaben vor.",
            ask: [{ label: "Wie läuft eine Übernahme typischerweise ab?", ref: "e:ma-steps" }] }
        ]},
        { h: "Was wurde bei Marvell/Lumentum vereinbart?", items: [
          { tag: "fakt", text: "Marvell Technology und Lumentum Holdings gaben am 2.11.2026 eine Fusion per Aktientausch im Wert von rund 115 Mrd. Dollar Unternehmenswert bekannt: 4,5 Marvell-Aktien je Lumentum-Aktie, eine Prämie von rund 23,9 % auf den unbeeinflussten Kurs vom 28.10.; das Closing wird für die erste Jahreshälfte 2028 erwartet. Die Unternehmen nennen einen angestrebten kombinierten adressierbaren Markt von 550 Mrd. Dollar im Bereich KI-Konnektivität und Laserkomponenten." }
        ]}
      ],
      reaction: "Mehr zur Private-Credit-Ausfallrate in Meldung 13.",
      terms: ["enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: { value: "≈ 11,2 Mrd. € (BASF/Evonik-Angebot, abgelehnt) · ≈ 115 Mrd. $ (Marvell/Lumentum, Aktientausch, bestätigt)", buyer: "BASF (abgelehnt) · Marvell Technology", target: "Evonik · Lumentum Holdings", sector: "Chemie · Halbleiter/Optik", type: "Übernahmeangebot (abgelehnt) · Aktientausch-Fusion (Finanzierungsstruktur, Banken/Berater und Zeitplan eines möglichen neuen BASF-Angebots sind nicht in den Quellen genannt)" },
      sources: [
        { title: "PCI Mag: Evonik confirms non-binding takeover approach from BASF", url: "https://www.pcimag.com/articles/115280-evonik-confirms-nonbinding-takeover-approach-from-basf" },
        { title: "Handelsblatt: Evonik-Interimschef bekräftigt Ablehnung von BASF-Angebot", url: "https://www.handelsblatt.com/politik/deutschland/chemieindustrie-evonik-interimschef-bekraeftigt-ablehnung-von-basf-angebot/100267654.html" },
        { title: "ad-hoc-news.de: BASF/Evonik – 24-Euro-Angebot zurückgewiesen", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/basf-aktie-evonik-weist-uebernahmeangebot-von-24-euro-zurueck/70468452" },
        { title: "Bloomberg: Marvell reaches $115 billion deal for Lumentum Holdings", url: "https://www.bloomberg.com/news/articles/2026-11-02/marvell-reaches-115-billion-deal-for-lumentum-holdings" }
      ]
    },
    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-ausfallrate-fitch-proskauer-divergenz-11-06", cats: ["credit"], when: "Fitch-Q3-Daten 29./30.10. · Proskauer-Q3-Index 29.10.2026",
      headline: "Private-Credit-Ausfallraten zeigen laut Fitch einen Rekordwert von 6,3 Prozent, der enger gefasste Proskauer-Index meldet dagegen einen Rückgang auf 2,41 Prozent",
      sec30: "Fitch Ratings meldete für das dritte Quartal 2026 eine auf zwölf Monate bezogene Ausfallrate bei US-Private-Credit-Krediten von 6,3 % – ein neuer Höchstwert nach 6,0 % im Vorquartal. Der enger gefasste Proskauer Private Credit Default Index kommt für dasselbe Quartal auf 2,41 %, einen Rückgang vom zweiten in Folge. Die Diskrepanz zeigt laut Berichten, wie stark die Einschätzung von der verwendeten Methodik und der erfassten Grundgesamtheit abhängt. Für die konkrete Woche selbst liegen keine neuen Indexveröffentlichungen vor; beide Berichte stammen aus der letzten Oktoberwoche und wurden bis in den November hinein weiter diskutiert.",
      blocks: [
        { h: "Was zeigt der Fitch-Index?", items: [
          { tag: "fakt", text: "Laut Fitch Ratings erreichte die auf die letzten zwölf Monate bezogene US-Private-Credit-Ausfallrate im dritten Quartal 2026 einen Rekordwert von 6,3 %, nach 6,0 % im Vorquartal. Fitch zählte 27 Ausfallereignisse von 20 neuen, individuellen Schuldnern; Industrie/Fertigung sowie Konsumgüter/-dienstleistungen hatten mit je 9,7 % die höchsten Sektorausfallraten.",
            ask: [{ label: "Was ist eine Ausfallrate?", ref: "t:default-rate" }] },
          { tag: "position", text: "Lyle Margolis, Head of Private Credit for U.S. Corporates bei Fitch, sagte, die Ausfallraten im Private-Credit-Markt seien im dritten Quartal erhöht geblieben, wobei gestresste Laufzeitverlängerungen, Zinsaufschübe und Payment-in-Kind-Vereinbarungen weiterhin für die meisten Ausfallereignisse verantwortlich seien.",
            ask: [{ label: "Was ist eine PIK-Vereinbarung?", ref: "t:pik" }] },
          { tag: "fakt", text: "Zählt man nur schwere Ereignisse wie Insolvenzen und Liquidationen, fiel die Fitch-Rate dagegen auf 0,3 % (von 0,4 % im Vorquartal) – die meisten erfassten „Ausfälle” waren demnach weniger gravierende Ereignisse wie Stundungen.",
            ask: [{ label: "Was ist ein Non-Accrual?", ref: "t:non-accrual" }] }
        ]},
        { h: "Was zeigt der Proskauer-Index?", items: [
          { tag: "fakt", text: "Der Proskauer Private Credit Default Index weist für das dritte Quartal 2026 eine Ausfallrate von 2,41 % aus (nach 2,51 % im Vorquartal) – der zweite Rückgang in Folge. Der Index umfasst 746 Darlehen mit insgesamt 205,7 Mrd. Dollar ursprünglichem Kreditvolumen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "fakt", text: "Proskauer warnte zugleich, die sinkende Gesamtrate verdecke Druck in Teilsegmenten: Bei Unternehmen mit einem EBITDA unter 25 Mio. Dollar stieg die Ausfallrate von 1,9 % im Vorquartal auf 2,2 %, auch Ausfälle bei Software-/Technologie-Kreditnehmern nahmen zu." }
        ]},
        { h: "Was bedeutet die Diskrepanz?", items: [
          { tag: "einordnung", text: "Die deutlich unterschiedlichen Werte von Fitch (6,3 %) und Proskauer (2,41 %) zeigen, dass Ausfallraten im Private-Credit-Markt stark von Definition, erfasster Grundgesamtheit und Methodik abhängen; ein Bloomberg-Artikel fasste dies bereits im September mit dem Titel „Private Credit Defaults Are 1%, 6% or 19%, Depending Who You Ask” zusammen.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Mehr zu Fed- und EZB-Zinserwartungen in Meldung 4 und 5.",
      terms: ["default-rate", "non-accrual", "direct-lending", "bdc"],
      followups: ["e:private-credit-what", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Forbes: US private credit defaults hit record 6.3% as quiet distress grows", url: "https://www.forbes.com/sites/mayrarodriguezvalladares/2026/10/29/us-private-credit-defaults-hit-record-63-as-quiet-distress-grows/" },
        { title: "Proskauer Rose LLP: Proskauer's Private Credit Default Index reveals rate of 2.41% for Q3 2026", url: "https://www.proskauer.com/report/proskauers-private-credit-default-index-reveals-rate-of-241-for-q3-2026" },
        { title: "Bloomberg: Private Credit Defaults Are 1%, 6% or 19%, Depending Who You Ask", url: "https://www.bloomberg.com/news/articles/2026-09-17/private-credit-defaults-are-1-6-or-19-depending-who-you-ask" }
      ]
    },
    /* 14 TECHNOLOGIE */
    {
      id: "ki-chip-ausverkauf-erholung-anthropic-circular-financing-11-06", cats: ["tech"], when: "Chip-Ausverkauf Do 5.11. · Erholung Fr 6.11. · Anthropic-Japan-Filing 2.11.2026",
      headline: "Der Philadelphia-Halbleiterindex verzeichnet am Donnerstag den größten Tagesverlust seit 2020, AMD erholt sich am Freitag mit einem Kurssprung von 11 Prozent nach Rekordzahlen",
      sec30: "Der Philadelphia Semiconductor Index brach am Donnerstag, 5.11.2026, um 12,2 % ein – der größte Tagesverlust seit 2020; Nvidia fiel auf 181,60 Dollar (-9,26 %). Als Auslöser nennen Berichte vor allem die bei den Zwischenwahlen mit großer Mehrheit gegen Rechenzentren ausgefallenen Abstimmungen sowie schwache Quartalszahlen von Qualcomm und Arm. Am Freitag erholten sich die Kurse: AMD sprang nach Rekord-Quartalszahlen um rund 11 % auf 449,03 Dollar, Nvidia um rund 3 % auf 187,07 Dollar. Parallel reichte Anthropic am 2.11. eine ergänzende Registrierung für sein geplantes Börsengangs-Volumen in Japan ein; die Debatte über „zirkuläre” Finanzierungsstrukturen zwischen Nvidia, OpenAI, Microsoft, Oracle und CoreWeave hält weiter an.",
      blocks: [
        { h: "Wie stark war der Chip-Ausverkauf am Donnerstag?", items: [
          { tag: "fakt", text: "Der Philadelphia Semiconductor Index (SOX) brach am Donnerstag, 5.11.2026, um 12,2 % ein – der größte Tagesverlust seit 2020; der S&P 500 verlor an diesem Tag 4,4 %, nach Berichten gingen rund 2,9 Billionen Dollar Marktkapitalisierung bei S&P-500-Unternehmen verloren. Nvidia fiel auf 181,60 Dollar (-9,26 %).",
            ask: [{ label: "Mehr zu den Zwischenwahlen", ref: "s:9" }] }
        ]},
        { h: "Was nennen Berichte als Auslöser?", items: [
          { tag: "einordnung", text: "Als Hauptauslöser nennen Berichte die bei den Zwischenwahlen in zehn Bundesstaaten mit 77 % klar gegen Rechenzentrums-Entwicklung ausgefallenen Abstimmungen, die Sorgen vor einer strengeren Regulierung des KI-Sektors schürten; hinzu kamen schwächer als erwartete Quartalszahlen von Qualcomm und Arm Holdings am Mittwochabend sowie allgemeine Zweifel an der Rentabilität hoher KI-Investitionen." },
          { tag: "fakt", text: "Eine Kioxia-Prognose für das Dezember-Quartal belastete zusätzlich Speicherchip-Werte: SanDisk fiel zwischen 9 und 20 %, Micron zwischen 7 und 16 %, SK Hynix um 13 %." }
        ]},
        { h: "Wie verlief die Erholung am Freitag?", items: [
          { tag: "fakt", text: "AMD meldete für das dritte Quartal einen Rekordumsatz von 13,4 Mrd. Dollar (+45 % gegenüber Vorjahr) mit einem Rechenzentrumswachstum von 97 % auf 8,5 Mrd. Dollar und sprang daraufhin am Freitag um rund 11 % auf 449,03 Dollar; Nvidia erholte sich um rund 3 % auf 187,07 Dollar, Intel um rund 5 %.",
            ask: [{ label: "Was sind Hyperscaler?", ref: "t:hyperscaler" }] }
        ]},
        { h: "Was gibt es Neues bei Anthropic?", items: [
          { tag: "fakt", text: "Anthropic reichte am 2.11.2026 eine Ergänzung (Amendment No. 1) zu seiner S-1-Börsenanmeldung sowie eine separate Wertpapier-Registrierung in Japan für Class-A-Aktien im Volumen von bis zu 3,5 Mrd. Dollar ein – dies deckt nur den japanischen Teil des geplanten US-Börsengangs ab." },
          { tag: "unbestaetigt", text: "Berichte nennen einen möglichen Börsengangstermin bereits ab der Woche des 16.11.2026 mit einer Bewertung von bis zu 2 Billionen Dollar; dies ist als Spekulation zu werten, ein Preis war in der Anmeldung noch nicht festgelegt." }
        ]},
        { h: "Wie steht es um die Debatte über „zirkuläre” KI-Finanzierung?", items: [
          { tag: "unbestaetigt", text: "Branchenanalysen schätzen, dass rund 46 Mrd. Dollar an direkten Eigenkapitalbeteiligungen und bis zu 879 Mrd. Dollar an mehrjährigen Kaufverpflichtungen zwischen Microsoft, Oracle, Amazon, Google, Meta, OpenAI, Anthropic, xAI, CoreWeave und Nvidia zirkulieren; die Methodik dieser Aggregatzahl ist nicht unabhängig überprüfbar.",
            ask: [{ label: "Was ist zirkuläre Finanzierung?", ref: "e:circular-financing" }] },
          { tag: "position", text: "Investor Michael Burry bezeichnete entsprechende Konstrukte als „byzantine money loop”; Nvidia-Chef Jensen Huang widersprach: „We put in $1 and get $100 back—is that circular financing?”" }
        ]}
      ],
      reaction: "Mehr zu den Marktreaktionen in DAX und Euro Stoxx 50 in Meldung 1, zu Nasdaq und S&P 500 in Meldung 2.",
      terms: ["hyperscaler"],
      followups: ["e:ai-capex", "e:circular-financing", "chain:nasdaq-why"],
      sources: [
        { title: "Euronews: Global stock rout deepens as AI data-centre fears fuel worst US chip sell-off since 2020", url: "https://www.euronews.com/2026/11/06/global-stock-rout-deepens-as-ai-data-centre-fears-fuel-worst-us-chip-sell-off-since-2020" },
        { title: "24/7 Wall St.: AMD jumps 8%, Intel and Nvidia climb 5% as chip stocks rebound from worst sell-off since 2020", url: "https://247wallst.com/investing/2026/11/06/amd-jumps-8-intel-and-nvidia-climb-5-as-chip-stocks-rebound-from-worst-sell-off-since-2020/" },
        { title: "AMD: AMD Reports Third Quarter 2026 Financial Results", url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results" },
        { title: "Reuters via Investing.com: Anthropic plans to sell $3.5 billion of shares to Japan investors in IPO filing", url: "https://www.investing.com/news/stock-market-news/anthropic-plans-to-sell-35-billion-of-shares-to-japan-investors-in-ipo-filing-shows-4989963" }
      ]
    },
    /* 15 ENERGIE */
    {
      id: "brent-oelpreis-volatilitaet-hormus-ttf-gasspeicher-11-06", cats: ["energy", "geo"], when: "Ölpreis-Einbruch Mi 4.11. · Erholung Do/Fr · Gasspeicher-Stand Bundesnetzagentur 5./6.11.2026",
      headline: "Der Ölpreis Brent bleibt nach dem Einbruch vom Mittwoch volatil knapp unter 100 Dollar, deutsche Gasspeicher liegen weiter unter dem Winterziel",
      sec30: "Brent war am Mittwoch, 4.11.2026, nach dem demokratischen Wahlsieg bei den US-Zwischenwahlen auf rund 93 Dollar je Barrel eingebrochen – Spekulation auf eine raschere Diplomatie im Irankrieg. Am Donnerstag und Freitag erholte sich der Preis auf zwischen 96 und 100 Dollar, gestützt durch neue, unbestätigte Tankerzwischenfälle an der Straße von Hormus (Meldung 10); für die gesamte Woche blieb aber ein Minus von rund 13 bis 15 % stehen. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 5./6.11. bei rund 60 bis 61 % Füllstand, deutlich unter dem Winterziel von 80 %; die Behörde bewertet die Versorgungssicherheit weiterhin als gewährleistet.",
      blocks: [
        { h: "Wie hat sich der Ölpreis diese Woche entwickelt?", items: [
          { tag: "fakt", text: "Brent fiel am Mittwoch, 4.11.2026, auf rund 93 Dollar je Barrel (WTI -8,3 % auf 88,12 Dollar); am Donnerstag erholte sich der Preis auf zwischen 96 und 97 Dollar, am Freitag weiter auf zwischen 98 und 100 Dollar (je nach Kontraktmonat). Für die gesamte Woche blieb trotz der Erholung ein Rückgang von rund 13 bis 15 % stehen.",
            ask: [{ label: "Was ist Brent?", ref: "t:brent" }] }
        ]},
        { h: "Was nennen Berichte als Grund für Einbruch und Erholung?", items: [
          { tag: "einordnung", text: "Der demokratische Wahlsieg bei den Zwischenwahlen ließ Investoren zunächst auf eine beschleunigte Diplomatie zur Beendigung des Irankriegs spekulieren, was den Preis am Mittwoch drückte. Am Donnerstag und Freitag überwogen dann erneut Sorgen über Tankerangriffe im Nahen Osten und Unsicherheit über den weiteren Kriegsverlauf.",
            ask: [{ label: "Mehr zur Lage an der Straße von Hormus", ref: "s:10" }] },
          { tag: "position", text: "Ole Sloth Hansen, Rohstoffexperte der Saxo Bank, sagte sinngemäß, ohne greifbare Fortschritte bei einer diplomatischen Lösung könnte sich der jüngste Preisrückgang schnell wieder umkehren. Pavel Molchanov von Raymond James sagte gegenüber Bloomberg sinngemäß, eine dauerhafte diplomatische Einigung zur Wiedereröffnung der Straße von Hormus könnte die Ölpreise weiter senken, Skepsis bleibe aber angebracht." }
        ]},
        { h: "Wie ist die Lage bei Gas und deutschen Speichern?", items: [
          { tag: "fakt", text: "Der europäische Gaspreis TTF schwankte diese Woche zwischen rund 87 und 101 Euro je Megawattstunde. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 5./6.11.2026 bei rund 60 bis 61 % Füllstand – deutlich unter dem Winterziel von 80 %.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] },
          { tag: "position", text: "Die Bundesnetzagentur erklärte, die Gasversorgung in Deutschland sei stabil und die Versorgungssicherheit gewährleistet; das Risiko einer Gasmangellage schätzt die Behörde weiterhin als „niedrig” ein." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis binnen einer Woche erst um rund ein Fünftel einbrach und sich dann wieder teilweise erholte, zeigt, wie stark der Markt derzeit auf jede neue Nachricht zur Diplomatie oder Eskalation im Irankrieg reagiert; das wirkt über die Energiekosten direkt auf die Inflationserwartungen und damit auf Zentralbank-Entscheidungen wie die der Bank of England (Meldung 6).",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zur Lage an der Straße von Hormus in Meldung 10, zur Bank of England in Meldung 6.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "ariva.de: Ölpreise erholen sich etwas vom Einbruch", url: "https://www.ariva.de/news/oelpreise-erholen-sich-etwas-vom-einbruch-12196861" },
        { title: "ariva.de: Ölpreise legen weiter zu – Brent knapp unter 100 US-Dollar", url: "https://www.ariva.de/news/oelpreise-legen-weiter-zu-brent-knapp-unter-100-us-dollar-12197549" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/artikel.html" },
        { title: "Al Jazeera: Iran says tankers struck in Hormuz amid fears of new US attack", url: "https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX fiel am Freitag um 1,92 % auf 25.820,36 Punkte und gab damit einen Teil seines Donnerstags-Rekordhochs von rund 26.692,90 Punkten wieder ab." },
    "why-markets-move": { tag: "einordnung", story: 2, text: "Der globale Technologie- und Chip-Ausverkauf vom Donnerstag (Nasdaq -5,5 %, Philadelphia Semiconductor Index -12,2 %) wirkte am Freitag noch nach, obwohl sich Nasdaq und S&P 500 bereits wieder erholten." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite stieg am Freitag nach einem starken Jobbericht leicht auf rund 4,86 %, die Rendite zehnjähriger Bundesanleihen lag bei rund 3,25 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Der Markt preist laut CME FedWatch eine Wahrscheinlichkeit von rund 73 % für eine weitere Fed-Zinserhöhung im Dezember ein, was tendenziell Anlagen ohne feste Zinsen wie Gold und Bitcoin weniger attraktiv macht." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold fiel am Freitag um rund 1 % auf zwischen 4.045 und 4.050 Dollar je Feinunze, nachdem der starke US-Jobbericht den Dollar gestützt hatte." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin gab binnen 24 Stunden um 5,3 bis 6,1 % auf etwa 75.600 bis 76.300 Dollar nach und gab damit seine Gewinne seit dem Wahlsieg der Demokraten komplett wieder ab." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro schwächte sich gegenüber dem Dollar ab; der EZB-Referenzkurs fiel um 0,53 % auf 1,1165." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Chef Kevin Warsh bezeichnete die sechs Wochen bis zur Dezember-Sitzung als „information-rich”; Dallas-Fed-Präsidentin Logan forderte mindestens zwei weitere Zinserhöhungen." },
    "central-banks-why": { tag: "einordnung", story: 6, text: "Sowohl die Bank of England als auch Bundesbank-Präsident Nagel begründen die Notwendigkeit weiterer Zinserhöhungen explizit mit den durch den Irankrieg gestiegenen Energiepreisen." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Nach Ablauf der Nominierungsfrist liegen für die Lagarde-Nachfolge zwei offizielle Bewerbungen vor: Klaas Knot und Pablo Hernández de Cos; Bundesbank-Präsident Nagel wird als möglicher dritter Kandidat gehandelt." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent notiert nach den Schwankungen dieser Woche bei rund 98 bis 100 Dollar je Barrel; ein weiterhin hoher Ölpreis wirkt tendenziell treibend auf Energie- und Transportkosten in Europa." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "rente-basics": { tag: "fakt", story: 8, text: "Der Entwurf des Rentenreformgesetzes ist laut Bundesarbeitsminister Schweitzer zu 95 % fertig; die Kapitalrente geht weiterhin nur als Eckpunkte ins Kabinett, die gesetzliche Ausgestaltung verschiebt sich auf 2027." },
    "debt-brake": { tag: "position", story: 8, text: "DIW-Chef Marcel Fratzscher bezeichnete die erneute Verschiebung der Kapitalrente als Rückschlag für eine generationengerechte Rentenreform." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Die Forsa-Umfrage sieht die AfD bei 26 %, die Union bei 20 %; eine Koalition aus Union und SPD hätte laut infratest dimap weiterhin keine Mehrheit." },
    "defence-order": { tag: "fakt", story: 11, text: "Die Verzögerung bei der Boxer-Großbestellung „Arminius” war der Hauptgrund für Rheinmetalls fünfte Gewinnwarnung binnen elf Monaten." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Rheinmetall verlor zwischen dem 30.10. und dem 6.11. rund 22 % an Börsenwert; auch US-Verteidigungswerte wie Lockheed Martin und Northrop Grumman gaben nach den Zwischenwahlen nach." },
    "nato-target": { tag: "fakt", story: 11, text: "Auf der Euronaval-Messe in Paris unterzeichneten Fincantieri, Navantia und Naval Group ein Konsortialabkommen für die European Patrol Corvette; der Bundestags-Haushaltsausschuss billigte zugleich Rüstungsvorhaben von rund 1,5 Mrd. Euro." },
    "ma-steps": { tag: "fakt", story: 12, text: "Evonik lehnte das nachgebesserte BASF-Übernahmeangebot von 24 Euro je Aktie (rund 11,2 Mrd. Euro) am 5.11. formell ab." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Die RAG-Stiftung als größte Evonik-Anteilseignerin hat sich diese Woche nicht erneut öffentlich zum BASF-Angebot positioniert." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Laut Fitch stieg die Ausfallrate bei Private-Credit-Krediten im dritten Quartal 2026 auf einen Rekordwert von 6,3 %; der enger gefasste Proskauer-Index meldet dagegen einen Rückgang auf 2,41 %." },
    "redemption-limits": { tag: "unbestaetigt", story: 13, text: "Die deutliche Diskrepanz zwischen Fitch- und Proskauer-Ausfallraten zeigt, wie stark die Einschätzung von der verwendeten Methodik abhängt." },
    "ai-capex": { tag: "fakt", story: 14, text: "AMD meldete für das dritte Quartal ein Rechenzentrumswachstum von 97 % auf 8,5 Mrd. Dollar und sprang daraufhin am Freitag um rund 11 %." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "Branchenanalysen schätzen auf bis zu 879 Mrd. Dollar an mehrjährigen Kaufverpflichtungen zwischen großen KI- und Cloud-Firmen; Nvidia-Chef Jensen Huang weist den Vorwurf zirkulärer Finanzierung zurück." },
    "why-oil-up-geo": { tag: "einordnung", story: 15, text: "Der Ölpreis schwankte diese Woche stark zwischen Einbruch (Mittwoch) und Erholung (Donnerstag/Freitag), je nach Nachrichtenlage zur Diplomatie und Eskalation im Irankrieg." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Die iranischen Revolutionsgarden meldeten am 4.11. die Zerstörung von vier Öltankern durch Seeminen in der Straße von Hormus; eine unabhängige Bestätigung liegt nicht vor." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der europäische Gaspreis TTF schwankte diese Woche zwischen rund 87 und 101 Euro je Megawattstunde." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 5./6.11. bei rund 60 bis 61 % Füllstand – deutlich unter dem Winterziel von 80 %." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "International", type: "Fakt", story: 9,
      q: "Wie ist der Stand im US-Senat nach den Zwischenwahlen vom 3.11.2026 laut bisheriger Auszählung?",
      options: [
        "Die Republikaner verteidigten ihre Mehrheit mit 51 zu 49 Sitzen",
        "Die Demokraten liegen nach bisherigem Stand bei 54 zu 44 Sitzen, in Mississippi und Alaska ist die Auszählung noch nicht final",
        "Der Senat ist mit 50 zu 50 Sitzen exakt geteilt",
        "Die Wahl wurde komplett annulliert und wird wiederholt"
      ],
      answer: 1,
      explain: "Die Demokraten eroberten sieben zuvor republikanische Sitze und liegen bei 54 zu 44 Sitzen; in Mississippi und Alaska war die Auszählung zum Redaktionsschluss noch nicht abgeschlossen."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 6,
      q: "Auf welchen Wert erhöhte die Bank of England ihren Leitzins am 5.11.2026?",
      options: ["3,5 %", "3,75 %", "4,0 %", "4,25 %"],
      answer: 2,
      explain: "Die Bank of England hob ihren Leitzins um 0,25 Prozentpunkte auf 4,0 % an – die erste Erhöhung seit August 2023."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Um wie viel Prozent brach der Philadelphia Semiconductor Index am Donnerstag, 5.11.2026, ein?",
      options: ["Um rund 2 %", "Um rund 5 %", "Um rund 12 %", "Um rund 25 %"],
      answer: 2,
      explain: "Der Philadelphia Semiconductor Index verlor am Donnerstag 12,2 % – der größte Tagesverlust des Chip-Sektors seit 2020."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 15,
      q: "Angenommen, es käme tatsächlich zu einer dauerhaften diplomatischen Lösung mit einer verlässlich offenen Straße von Hormus. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Nur der Goldpreis, nicht aber der Ölpreis würde beeinflusst",
        "Es gäbe keinen Zusammenhang, da Hormus für den Ölhandel keine Rolle spielt",
        "Der Ölpreis würde automatisch auf null fallen",
        "Der Ölpreis würde tendenziell weiter sinken, weil wieder mehr Angebot über diese wichtige Route verfügbar wäre"
      ],
      answer: 3,
      explain: "Eine dauerhaft offene wichtige Transportroute wie die Straße von Hormus würde mehr Ölangebot am Markt erwarten lassen, was den Preis tendenziell sinken lässt – wie es die Entspannungshoffnungen bereits am Mittwoch zeigten."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Angenommen, die Fed erhöht die Zinsen im Dezember wie von CME FedWatch mehrheitlich erwartet. Was wird dadurch unter sonst gleichen Bedingungen für Private-Credit-Kreditnehmer mit variabel verzinsten Krediten wahrscheinlicher?",
      options: [
        "Ihre Zinskosten sinken automatisch",
        "Ihre Zinskosten steigen tendenziell, was das Risiko von Zahlungsschwierigkeiten und Ausfällen erhöht",
        "Es hat keinen Einfluss auf ihre Kreditkonditionen",
        "Ihre Kredite werden automatisch in Eigenkapital umgewandelt"
      ],
      answer: 1,
      explain: "Private-Credit-Kredite sind meist variabel verzinst und oft an Referenzzinssätze gekoppelt; steigende Leitzinsen erhöhen daher tendenziell die Zinslast der Kreditnehmer und damit das Risiko von Zahlungsschwierigkeiten – wie es die bereits erhöhten Fitch-Ausfallraten (Meldung 13) nahelegen."
    }
  ]
};
