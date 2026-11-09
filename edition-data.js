// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-09",
  dateLabel: "Montag, 9. November 2026",
  updatedLabel: "Recherchestand 09.11.2026",
  marketNote: "Diese Ausgabe entsteht am Montagvormittag, 9.11.2026. DAX und Euro Stoxx 50 zeigen den aktuellen Zwischenstand des laufenden Montagshandels (nicht den Schlusskurs); S&P 500, Nasdaq Composite und Dow Jones zeigen dagegen noch den Schlusskurs vom Freitag, 6.11.2026, da der US-Handel erst um 15:30 Uhr MEZ beginnt. Bei EUR/USD, Gold, Brent, der US- und der Bundesanleihe-Rendite weichen einzelne Quellen je nach Erhebungszeitpunkt und Kontraktmonat spürbar voneinander ab; das ist im Folgenden jeweils kenntlich gemacht. Nur Bitcoin handelt durchgehend.",

  top: [
    { text: "Nvidia-Aktien geben am Montag nach, nachdem der Vorstand eine unabhängige Untersuchung zu CEO Jensen Huang eingeleitet hat: Huang räumte eine außereheliche Beziehung zu einer mutmaßlichen chinesischen Geheimdienstmitarbeiterin ein. AMD und Broadcom legen dagegen vorbörslich zu.", ref: "s:14" },
    { text: "Bundeskanzler Friedrich Merz schlägt die bayerische Landtagspräsidentin Ilse Aigner (CSU) als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl vor; die Wahl in der Bundesversammlung ist für den 30. Januar 2027 angesetzt.", ref: "s:6" },
    { text: "Nach Ablauf der Nominierungsfrist bewerben sich offiziell nur Klaas Knot und Pablo Hernández de Cos um die Nachfolge von EZB-Präsidentin Christine Lagarde; Bundesbank-Präsident Nagel gilt laut Handelsblatt-Berichten als praktisch aus dem Rennen.", ref: "s:5" },
    { text: "Katars Premierminister trifft Präsident Trump im Weißen Haus zur Iran-Vermittlung; US-Außenminister Rubio weist einen iranischen Vorschlag als „outrageous and ridiculous” zurück, während Irans Außenminister Araghchi eine Öffnung der Straße von Hormus binnen zwei Tagen anbietet.", ref: "s:10" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.097,07 Pkt.", change: "+1,07 % bzw. +276,71 Pkt. ggü. Freitagsschluss (25.820,36 Pkt.)", dir: "up", asof: "Zwischenstand Mo 9.11.26, 12:47 Uhr", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als beim letzten Stand.",
      compare: [
        { label: "Freitag", text: "Der DAX war am Freitag im Sog eines globalen Technologie-Ausverkaufs um 1,92 % auf 25.820,36 Punkte gefallen." }
      ],
      moved: {
        intro: "Als Hintergrund für die Erholung am Montagvormittag nennen Berichte:",
        items: [
          "Eine Stabilisierung bei Technologie- und Halbleiterwerten nach dem Ausverkauf der Vorwoche sowie freundlichere Vorgaben aus Asien; deutsche Halbleiterzulieferer wie Infineon und Elmos profitierten von der Hoffnung auf einen soliden US-Handelsstart.",
          "Die neue Unsicherheit um Nvidia-Chef Jensen Huang (Meldung 14) bremste die Erholung bei einzelnen Technologiewerten, ohne den Gesamtmarkt am Montagvormittag zu belasten."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur Nvidia-Untersuchung in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ad-hoc-news.de: DAX bei 26.079 Punkten – Erholung nach KI-Ausverkauf", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-26-079-punkten-erholung-nach-ki-ausverkauf/70480973" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.247,92 Pkt.", change: "+1,25 % ggü. Freitagsschluss (6.170,49 Pkt.)", dir: "up", asof: "Zwischenstand Mo 9.11.26, mittags", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Freitag", text: "Der Index war am Freitag um 0,98 % auf 6.170,49 Punkte gefallen, blieb für die Vorwoche aber noch leicht im Plus." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg am Montag:",
        items: [
          "Bankwerte und zuletzt fallende Ölpreise stützten den Index; die Stimmung profitierte zudem von der Hoffnung auf eine Stabilisierung nach dem Technologie-Ausverkauf der Vorwoche."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Chip-Sektor und zur Nvidia-Untersuchung in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 steigt mittags auf 6.247,92 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-steigt-mittags-auf-6-247-92-punkte/70480955" }
    },
    "sp500": {
      label: "S&P 500", value: "7.376,86 Pkt.", change: "+0,31 % bzw. +23,13 Pkt. ggü. Donnerstag", dir: "up", asof: "Schluss Fr 6.11.26 (letzter verfügbarer Schlusskurs)", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "US-Vorbörse Montag", text: "US-Futures auf S&P 500, Dow und Nasdaq deuteten am Montagvormittag laut Berichten leicht höher, während Nvidia-Aktien im vorbörslichen Handel um rund 5 % nachgaben." }
      ],
      moved: {
        intro: "Als Hintergrund für die Freitagserholung nennen Berichte:",
        items: [
          "Der US-Arbeitsmarktbericht für Oktober fiel mit +165.000 neuen Stellen deutlich stärker aus als die Erwartung von rund 59.000 bis 65.000; die Arbeitslosenquote sank auf 4,1 %.",
          "AMD legte nach Rekord-Quartalszahlen zu und stützte damit auch den breiteren Markt; mehr zum Chip-Sektor und zur neuen Nvidia-Untersuchung in Meldung 14."
        ]
      },
      important: [
        { area: "Zinsen", text: "Was Fed-Chef Powells Dezember-Kommentar für die Zinsentscheidung bedeutet.", ref: "s:4" }
      ],
      source: { title: "Yahoo Finance: Stock Market News for Nov 6, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-nov-6-132900980.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "24.579,42 Pkt.", change: "+1,09 % ggü. Donnerstag; für die Woche aber -3,37 % (vierte Verlustwoche in Folge)", dir: "up", asof: "Schluss Fr 6.11.26", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Rekordstand", text: "Der Index liegt laut Berichten rund 10,94 % unter seinem Rekordschluss vom 6.10.2026 (27.599,79 Pkt.) – von Marktbeobachtern als technische Korrektur eingeordnet." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Freitagserholung sowie die Bewegung am Montag:",
        items: [
          "AMD meldete Rekord-Quartalszahlen und sprang am Freitag deutlich zu; Nvidia und Intel erholten sich ebenfalls.",
          "Am Montag belastete die neue Nvidia-Untersuchung (Meldung 14) einzelne Chipwerte, während AMD und Broadcom laut Berichten vorbörslich zulegten."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur Nvidia-Untersuchung und zum Chip-Sektor in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ad-hoc-news.de: Nasdaq Composite vor US-Start – Erholung beendet vierten Wochenverlust nicht", url: "https://ad-hoc-news.de/boerse/news/marktberichte/nasdaq-composite-vor-us-start-erholung-beendet-vierten-wochenverlust-nicht/70480780" }
    },
    "dow": {
      label: "Dow Jones", value: "51.285,73 Pkt.", change: "-0,46 % bzw. -237,33 Pkt. ggü. Donnerstag", dir: "down", asof: "Schluss Fr 6.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Im Vergleich zu Nasdaq und S&P 500", text: "Während Nasdaq und S&P 500 sich am Freitag erholten, blieb der stärker industriell geprägte Dow als einziger der drei großen US-Indizes im Minus." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Unsicherheit über die Folgen der US-Zwischenwahlen für Technologie- und Verteidigungswerte belastete auch traditionellere Industriewerte im Dow weiter."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "Yahoo Finance: Stock Market News for Nov 6, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-nov-6-132900980.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1188", change: "+0,3 % ggü. Freitag (≈ 1,115)", dir: "up", asof: "Stand Mo 9.11.26, vormittags", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar stärker.",
      compare: [
        { label: "Freitag", text: "Der Euro hatte sich am Freitag nach dem starken US-Jobbericht gegenüber dem Dollar abgeschwächt (EZB-Referenzkurs 1,1165, andere Quellen nannten Werte bis 1,1142)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die leichte Erholung:",
        items: [
          "Eine etwas ruhigere Stimmung an den Aktienmärkten am Montag ließ die Nachfrage nach dem Dollar als vermeintlich sicherem Hafen leicht nachlassen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinserwartung vor dem US-Inflationsbericht am Dienstag in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Pound Sterling Live: EUR/USD History 2026", url: "https://www.poundsterlinglive.com/history/EUR-USD-2026" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,85 %", change: "leicht gefallen ggü. Freitag (4,86 %)", dir: "down", asof: "Stand Mo 9.11.26, 8:30 Uhr ET", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,85 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,85 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; Fed-Chef Powell dämpfte zuletzt die Erwartung einer sicheren Zinssenkung im Dezember (mehr in Meldung 4)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die leichte Bewegung:",
        items: [
          "Anleger warten auf den US-Inflationsbericht für Oktober am Dienstag, 10.11.2026, der als nächster wichtiger Markttreiber vor der Fed-Sitzung am 9.12. gilt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung im Dezember in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ETF Trends: Treasury Yields Snapshot, November 6, 2026", url: "https://www.etftrends.com/fixed-income-content-hub/treasury-yields-snapshot-november-6-2026/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,26 %", change: "Bund-Future -0,10 % auf 122,98 Pkt.; der genaue Tagesvergleich ist zwischen Quellen uneinheitlich", dir: "flat", asof: "Stand Mo 9.11.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 4,85 % weiterhin deutlich über der Bund-Rendite – ein Abstand, der unter anderem die unterschiedliche Zinspolitik beider Notenbanken widerspiegelt." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Leichte Kursverluste bei deutschen Staatsanleihen zu Wochenbeginn, laut Berichten ohne eindeutig benannten Einzelauslöser."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Nachfolgefrage und zur Dezember-Sitzung in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "onvista.de: Deutsche Anleihen – Kursverluste zum Wochenstart", url: "https://www.onvista.de/news/2026/11-09-deutsche-anleihen-kursverluste-zum-wochenstart-0-10-26574087" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.100,50 $", change: "+0,9 % ggü. Freitag (4.070,41 $)", dir: "up", asof: "Stand Mo 9.11.26, 8:30 Uhr", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 4.100 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Monat", text: "Gold legte im Monatsvergleich laut Berichten um rund 5,9 % zu; für das Gesamtjahr 2026 steht in Dollar gerechnet weiterhin ein Minus von rund 5 % zu Buche." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg am Montag:",
        items: [
          "Die neue Unsicherheit um Nvidia und den Technologiesektor (Meldung 14) sowie die anhaltende Volatilität rund um den Iran-Krieg (Meldung 10) stützten die Nachfrage nach Gold als Wertspeicher."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Iran-Diplomatie in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "Goldreporter: Goldpreis heute 4.100 Dollar (09.11.2026)", url: "https://www.goldreporter.de/goldpreis-heute-4100-dollar-09-11-2026/marktbericht-gold/262922/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 97–99 $ (je nach Kontraktmonat/Quelle)", change: "leicht niedriger als am Freitag (98,03 $); für die Woche laut Berichten weiterhin deutlich im Minus", dir: "down", asof: "Stand Mo 9.11.26", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Auch nach dem jüngsten Rückgang liegt der Preis deutlich über dem Niveau vor Kriegsbeginn im Februar 2026.",
      compare: [
        { label: "Woche", text: "Brent war Anfang November laut Berichten zunächst auf rund 110 Dollar gestiegen, bevor Hoffnungen auf eine diplomatische Lösung im Iran-Krieg den Preis wieder drückten." }
      ],
      moved: {
        intro: "Als Hintergrund für die Bewegung am Montag nennen Berichte:",
        items: [
          "Katars Premierminister trifft Präsident Trump zur Iran-Vermittlung; Irans Außenminister Araghchi bot an, die Straße von Hormus binnen zwei Tagen zu öffnen, falls die USA Irans Bedingungen erfüllen – das dämpfte den Preis zunächst.",
          "US-Außenminister Rubio wies den iranischen Vorschlag zugleich als „outrageous and ridiculous” zurück, was die Unsicherheit über den weiteren Verlauf hochhielt."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Diplomatie mit Katar und zum iranischen Vorschlag in Meldung 10.", ref: "s:10" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "Fortune: Price of Oil, November 9, 2026", url: "https://fortune.com/article/price-of-oil-11-09-2026/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 74.200–74.550 $", change: "-0,8 % binnen 24 Stunden; fünfte Verlustwoche in Folge", dir: "down", asof: "Stand Mo 9.11.26, Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 74.000 bis 75.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Woche", text: "Bitcoin war zuletzt bis auf rund 80.935 Dollar gestiegen, bevor es in die fünfte Verlustwoche in Folge rutschte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der breite Risikoabbau rund um den Technologiesektor – verstärkt durch die neue Nvidia-Untersuchung (Meldung 14) – erfasste laut Berichten auch Bitcoin und andere Kryptowährungen."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "finanzen.net: Kryptomarkt – fünfte Verlustwoche in Folge, Bitcoin startet bei 74.200 Dollar in die CPI-Woche", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-fuenfte-verlustwoche-in-folge-bitcoin-startet-bei-74-200-dollar-in-die-cpi-woche-ether-faellt-auf-2-100-dollar-00-16049754" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 */
    {
      id: "markets-montag-dax-eurostoxx-erholung-11-09", cats: ["markets"], when: "Zwischenstand Mo 9.11.2026, mittags",
      headline: "DAX und Euro Stoxx 50 erholen sich am Montag deutlich vom Freitagsverlust, während eine neue Nvidia-Untersuchung einzelne Technologiewerte belastet",
      sec30: "Der DAX legte am Montag bis zur Mittagszeit um rund 1,07 % auf 26.097,07 Punkte zu, nachdem er am Freitag im Sog eines globalen Technologie-Ausverkaufs um 1,92 % gefallen war. Der Euro Stoxx 50 stieg um rund 1,25 % auf 6.247,92 Punkte. Als Hintergrund nennen Berichte eine Stabilisierung bei Technologie- und Halbleiterwerten sowie freundlichere Vorgaben aus Asien. Gleichzeitig sorgte die am Sonntag bekanntgewordene Untersuchung zu Nvidia-Chef Jensen Huang (Meldung 14) für neue Unsicherheit bei einzelnen Technologiewerten.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Montag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stand um 12:47 Uhr bei 26.097,07 Punkten, ein Plus von 1,07 % bzw. 276,71 Punkten gegenüber dem Freitagsschluss (25.820,36 Punkte). Der Euro Stoxx 50 stieg bis zur Mittagszeit um rund 1,25 % auf 6.247,92 Punkte.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen die Erholung auf eine Stabilisierung bei Technologie- und Halbleiterwerten nach dem Ausverkauf der Vorwoche sowie auf freundlichere Vorgaben aus Asien zurück; deutsche Chipzulieferer wie Infineon und Elmos profitierten demnach von der Hoffnung auf einen soliden US-Handelsstart." }
        ]},
        { h: "Welche neue Unsicherheit kam am Wochenende hinzu?", items: [
          { tag: "fakt", text: "Nvidias Vorstand kündigte am Sonntag, 8.11.2026, eine unabhängige Untersuchung zu CEO Jensen Huang an, nachdem dieser eine außereheliche Beziehung zu einer mutmaßlichen chinesischen Geheimdienstmitarbeiterin eingeräumt hatte. Die Nvidia-Aktie gab darauf vorbörslich nach.",
            ask: [{ label: "Mehr zur Nvidia-Untersuchung", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 trotz der neuen Nvidia-Nachricht am Montagvormittag zulegten, deutet darauf hin, dass Anleger die Entwicklung bislang eher als unternehmensspezifisches Ereignis statt als neue Belastung für den gesamten Technologiesektor einordnen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Freitag werden in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Nvidia-Untersuchung im Detail in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ad-hoc-news.de: DAX bei 26.079 Punkten – Erholung nach KI-Ausverkauf", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-26-079-punkten-erholung-nach-ki-ausverkauf/70480973" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 steigt mittags auf 6.247,92 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-steigt-mittags-auf-6-247-92-punkte/70480955" },
        { title: "ariva.de: Aktien Frankfurt – Dax schafft es nach Korrektur wieder über 26.000 Punkte", url: "https://www.ariva.de/news/aktien-frankfurt-dax-schafft-es-nach-korrektur-wieder-ueber-12200112" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS FREITAG */
    {
      id: "us-wallstreet-freitag-jobs-report-nvidia-vorboerse-11-06", cats: ["markets"], when: "Schluss Fr 6.11.2026 · US-Vorbörse Mo 9.11.2026",
      headline: "Nasdaq und S&P 500 schlossen die Woche nach dem Jobbericht im Plus, am Montag belastet die neue Nvidia-Untersuchung den vorbörslichen Handel",
      sec30: "Die Nasdaq Composite legte am Freitag um 1,09 % auf 24.579,42 Punkte zu, der S&P 500 um 0,31 % auf 7.376,86 Punkte; der Dow Jones gab dagegen um 0,46 % auf 51.285,73 Punkte nach. Grund für die Erholung war laut Berichten vor allem der deutlich stärker als erwartete US-Arbeitsmarktbericht für Oktober (+165.000 Stellen). Für die Woche blieb die Nasdaq dennoch mit 3,37 % im Minus – die vierte Verlustwoche in Folge. Am Montagvormittag deuteten US-Futures leicht höher, während Nvidia-Aktien im vorbörslichen Handel um rund 5 % nachgaben, nachdem der Nvidia-Vorstand eine Untersuchung zu CEO Jensen Huang eingeleitet hatte (Meldung 14).",
      blocks: [
        { h: "Wie schlossen Nasdaq, S&P 500 und Dow am Freitag?", items: [
          { tag: "fakt", text: "Die Nasdaq Composite legte um 1,09 % (+264,43 Punkte) auf 24.579,42 Punkte zu, der S&P 500 um 0,31 % (+23,13 Punkte) auf 7.376,86 Punkte. Der Dow Jones gab dagegen um 0,46 % (-237,33 Punkte) auf 51.285,73 Punkte nach.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Wie fällt die Wochenbilanz aus?", items: [
          { tag: "fakt", text: "Trotz der Freitagserholung verzeichnete die Nasdaq laut Berichten für die Woche ein Minus von 3,37 % – die vierte Verlustwoche in Folge. Der Index liegt damit rund 10,94 % unter seinem Rekordschluss vom 6.10.2026 (27.599,79 Punkte), was Marktbeobachter als technische Korrektur einordnen." }
        ]},
        { h: "Was zeigt der vorbörsliche Handel am Montag?", items: [
          { tag: "fakt", text: "US-Futures auf Dow, S&P 500 und Nasdaq deuteten am Montagvormittag laut Berichten leicht höher. Gleichzeitig gaben Nvidia-Aktien im vorbörslichen Handel um rund 5 % nach, nachdem der Nvidia-Vorstand am Sonntag eine Untersuchung zu CEO Jensen Huang eingeleitet hatte; AMD- und Broadcom-Aktien legten dagegen vorbörslich zu.",
            ask: [{ label: "Mehr zur Nvidia-Untersuchung", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Nvidia am Montag isoliert nachgibt, während AMD und Broadcom zulegen, deutet darauf hin, dass Anleger die neue Nachricht zunächst als unternehmensspezifisches Ereignis statt als branchenweites Risiko behandeln. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Reaktion in Europa wird in Meldung 1 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Fed-Zinserwartung vor dem US-Inflationsbericht in Meldung 4, die Nvidia-Untersuchung im Detail in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "Yahoo Finance: Stock Market News for Nov 6, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-nov-6-132900980.html" },
        { title: "ad-hoc-news.de: Nasdaq Composite vor US-Start – Erholung beendet vierten Wochenverlust nicht", url: "https://ad-hoc-news.de/boerse/news/marktberichte/nasdaq-composite-vor-us-start-erholung-beendet-vierten-wochenverlust-nicht/70480780" },
        { title: "U.S. Bureau of Labor Statistics: Employment Situation Summary", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
        { title: "TradingKey: US Premarket – Futures Rise, Nvidia Down 5% on Huang Probe", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262296219-us-premarket-futures-rise-nvidia-down-5-huang-probe-ai-cloud-coreweave-tradingkey" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN */
    {
      id: "gold-bitcoin-eurusd-anleihen-montag-11-09", cats: ["markets"], when: "Stand Mo 9.11.2026",
      headline: "Gold legt vor dem US-Inflationsbericht zu, Bitcoin rutscht in die fünfte Verlustwoche, der Euro erholt sich leicht gegenüber dem Dollar",
      sec30: "Gold stieg am Montag um rund 0,9 % auf etwa 4.100,50 Dollar je Feinunze, nachdem es im Monatsvergleich bereits rund 5,9 % zugelegt hatte. Bitcoin gab dagegen weiter nach und rutschte mit etwa 74.200 bis 74.550 Dollar in die fünfte Verlustwoche in Folge. Der Euro erholte sich leicht gegenüber dem Dollar auf etwa 1,1188, nachdem er sich am Freitag nach dem starken US-Jobbericht abgeschwächt hatte. Die US-10-Jahres-Rendite lag mit rund 4,85 % leicht unter dem Freitagswert, während die Rendite zehnjähriger Bundesanleihen bei rund 3,26 % und damit nahezu unverändert notierte.",
      blocks: [
        { h: "Wie haben sich Gold und Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Montag um rund 0,9 % auf etwa 4.100,50 Dollar je Feinunze (von 4.070,41 Dollar am Freitag). Bitcoin gab dagegen um rund 0,8 % binnen 24 Stunden auf etwa 74.200 bis 74.550 Dollar nach und markierte damit die fünfte Verlustwoche in Folge, nach einem zwischenzeitlichen Hoch von 80.935 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }, { label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Die anhaltende Unsicherheit um den Technologiesektor – verstärkt durch die neue Nvidia-Untersuchung (Meldung 14) – sowie die Volatilität rund um den Iran-Krieg (Meldung 10) stützten die Nachfrage nach Gold als Wertspeicher, während der breite Risikoabbau auch Bitcoin erfasste." }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro erholte sich gegenüber dem Dollar leicht auf etwa 1,1188 (von rund 1,115 am Freitag). Die US-10-Jahres-Rendite lag am Montagmorgen bei rund 4,85 % (von 4,86 % am Freitag), die Rendite zehnjähriger Bundesanleihen bei rund 3,26 %; der Bund-Future gab um 0,10 % auf 122,98 Punkte nach.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Für den exakten Tagesvergleich bei der Bund-Rendite liegen keine vollständig übereinstimmenden Werte vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold zulegt, während Bitcoin weiter nachgibt, zeigt, dass beide Anlagen trotz ähnlicher Einordnung als „alternative” Wertanlagen derzeit unterschiedlich auf die Gemengelage aus Technologie-Unsicherheit und geopolitischer Lage reagieren. Anleger warten zudem auf den US-Inflationsbericht für Oktober am Dienstag. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX/Euro Stoxx 50 wird in Meldung 1 behandelt, die US-Schlusskurse in Meldung 2, die Fed-Zinserwartung in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Goldreporter: Goldpreis heute 4.100 Dollar (09.11.2026)", url: "https://www.goldreporter.de/goldpreis-heute-4100-dollar-09-11-2026/marktbericht-gold/262922/" },
        { title: "finanzen.net: Kryptomarkt – fünfte Verlustwoche in Folge", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-fuenfte-verlustwoche-in-folge-bitcoin-startet-bei-74-200-dollar-in-die-cpi-woche-ether-faellt-auf-2-100-dollar-00-16049754" },
        { title: "Pound Sterling Live: EUR/USD History 2026", url: "https://www.poundsterlinglive.com/history/EUR-USD-2026" },
        { title: "onvista.de: Deutsche Anleihen – Kursverluste zum Wochenstart", url: "https://www.onvista.de/news/2026/11-09-deutsche-anleihen-kursverluste-zum-wochenstart-0-10-26574087" }
      ]
    },
    /* 4 WIRTSCHAFT: FED */
    {
      id: "fed-powell-dezember-cpi-dienstag-11-09", cats: ["economy"], when: "FOMC-Sitzung 27./28.10. · US-Jobbericht 6.11. · US-Inflationsbericht Di 10.11. · nächste Fed-Sitzung 9.12.2026",
      headline: "Fed-Chef Powell dämpft die Erwartung einer sicheren Dezember-Zinssenkung, am Dienstag folgt der US-Inflationsbericht für Oktober",
      sec30: "Die Fed hatte ihren Leitzins bei der Sitzung am 27./28.10.2026 bei 3,75 bis 4,00 % gehalten. Fed-Chef Jerome Powell dämpfte danach die Markterwartung einer sicheren weiteren Zinssenkung im Dezember: „A further reduction in the policy rate at the December meeting is not a foregone conclusion. Far from it.” Die Wahrscheinlichkeit für eine Zinssenkung am Terminmarkt fiel daraufhin laut Berichten von rund 90 bis 99,5 % auf etwa 65 bis 71 %. Der am Freitag veröffentlichte Oktober-Jobbericht fiel mit +165.000 Stellen deutlich stärker aus als erwartet; am Dienstag, 10.11., folgt um 8:30 Uhr Ortszeit der US-Inflationsbericht für Oktober, der als nächster wichtiger Markttreiber vor der Fed-Sitzung am 9.12. gilt.",
      blocks: [
        { h: "Was hat die Fed zuletzt entschieden?", items: [
          { tag: "fakt", text: "Die US-Notenbank Fed hielt ihren Leitzins bei der Sitzung am 27./28.10.2026 unverändert bei 3,75 bis 4,00 %.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Fed-Chef Jerome Powell sagte danach, eine weitere Zinssenkung bei der Dezember-Sitzung sei „not a foregone conclusion. Far from it” – also keineswegs eine sichere Sache." }
        ]},
        { h: "Wie reagierte der Markt auf Powells Aussage?", items: [
          { tag: "fakt", text: "Die am Terminmarkt eingepreiste Wahrscheinlichkeit für eine weitere Zinssenkung im Dezember fiel laut Berichten von rund 90 bis 99,5 % vor Powells Aussage auf etwa 65 bis 71 % danach.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was zeigt der Jobbericht, und was steht am Dienstag an?", items: [
          { tag: "fakt", text: "Der US-Arbeitsmarktbericht für Oktober wurde am Freitag, 6.11.2026, veröffentlicht: +165.000 neue Stellen gegenüber einer Erwartung von rund 59.000 bis 65.000, die Arbeitslosenquote sank auf 4,1 % von 4,2 %. Am Dienstag, 10.11.2026, 8:30 Uhr Ortszeit, folgt der US-Verbraucherpreisindex für Oktober; die nächste Fed-Sitzung ist für den 9.12.2026 angesetzt.",
            ask: [{ label: "Mehr zur Marktreaktion", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Powell eine Dezember-Senkung explizit als unsicher bezeichnete, obwohl der Markt zuvor von einer nahezu sicheren Senkung ausging, zeigt, wie stark einzelne Konjunkturdaten wie der Oktober-Inflationsbericht am Dienstag die Fed-Entscheidung noch beeinflussen können." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 2 und 3, zur EZB-Nachfolgefrage und zur Eurozonen-Inflation in Meldung 5.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks"],
      sources: [
        { title: "cash-online.de: Fed-Zinsentscheidung – Powells Satz verunsicherte die Wall Street", url: "https://www.cash-online.de/a/fed-zinsentscheidung-powells-satz-verunsicherte-die-wall-street-729464/" },
        { title: "U.S. Bureau of Labor Statistics: Employment Situation Summary", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
        { title: "Finance Calendar: US CPI Report October 2026", url: "https://www.financecalendar.com/event/us-cpi-report-october-2026/" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB-NACHFOLGE + INFLATION */
    {
      id: "ezb-nachfolge-eurogruppe-inflation-divergenz-11-09", cats: ["economy"], when: "Nominierungsfrist 6.11. · Eurogruppe-Treffen 9.11. · Eurostat-Schätzung Oktober 2026",
      headline: "Die Eurogruppe nimmt am Montag eine Bestandsaufnahme zur Lagarde-Nachfolge vor, während Eurozone und Deutschland bei der Oktober-Inflation deutlich auseinanderliegen",
      sec30: "Nach Ablauf der Nominierungsfrist bewerben sich offiziell nur der frühere niederländische Notenbankchef Klaas Knot und BIZ-Generaldirektor Pablo Hernández de Cos um die Nachfolge von EZB-Präsidentin Christine Lagarde, die ihr Amt zum 7.2.2027 abgibt. Bundesbank-Präsident Joachim Nagel hatte Interesse signalisiert, gilt laut Handelsblatt-Berichten aber als praktisch aus dem Rennen; Deutschland strebt stattdessen offenbar einen Sitz im EZB-Direktorium an. Die Eurogruppe nahm am Montag, 9.11., eine erste Bestandsaufnahme der Bewerbungen vor; die Entscheidung soll beim EU-Gipfel am 17./18.12.2026 fallen. Parallel zeigt die vorläufige Oktober-Inflation eine deutliche Kluft: Deutschland meldete 2,8 %, die Eurozone insgesamt 4,0 % – den höchsten Stand seit September 2023.",
      blocks: [
        { h: "Wer bewirbt sich offiziell um die Lagarde-Nachfolge?", items: [
          { tag: "fakt", text: "Nach Ablauf der Nominierungsfrist am 6.11.2026 liegen zwei offizielle Bewerbungen vor: der frühere Chef der niederländischen Notenbank, Klaas Knot, nominiert von den Niederlanden, und der Generaldirektor der Bank für Internationalen Zahlungsausgleich (BIZ), Pablo Hernández de Cos, nominiert von Spanien.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Spaniens Vizeregierungschef Carlos Cuerpo pries de Cos als Bewerber mit „besonnener Hand und inspirierender Führung”." }
        ]},
        { h: "Welche Rolle spielt Bundesbank-Präsident Nagel?", items: [
          { tag: "fakt", text: "Laut Handelsblatt-Berichten gilt Bundesbank-Präsident Joachim Nagel inzwischen als praktisch aus dem Rennen um die EZB-Spitze; das Bundeskanzleramt sieht seine Chancen als gering, in der CDU gibt es Vorbehalte. Deutschland strebt stattdessen offenbar einen einflussreichen Posten im sechsköpfigen EZB-Direktorium an – im Gespräch ist laut Berichten unter anderem ein möglicher Wechsel zwischen Nagel und EZB-Direktorin Isabel Schnabel.",
            ask: [{ label: "Mehr zur Debatte um die EZB-Nachfolge", ref: "e:ecb-hike" }] }
        ]},
        { h: "Wie geht es weiter?", items: [
          { tag: "fakt", text: "Die Eurogruppe nahm am Montag, 9.11.2026, in Brüssel eine erste Bestandsaufnahme der Bewerbungen vor. Die endgültige politische Entscheidung durch die EU-Staats- und Regierungschefs ist für den EU-Gipfel am 17./18.12.2026 angesetzt." }
        ]},
        { h: "Wie weit liegen Deutschland und die Eurozone bei der Inflation auseinander?", items: [
          { tag: "fakt", text: "Nach einer vorläufigen Schätzung lag die deutsche Inflationsrate im Oktober 2026 bei 2,8 % (nach 3,3 % im September); die Energiepreise stiegen um 12,2 %, die Kerninflation ohne Energie und Lebensmittel lag bei 2,1 %. Für die gesamte Eurozone meldete eine erste Schätzung dagegen 4,0 % – den höchsten Wert seit September 2023 – mit einem Energiepreisanstieg von 20,8 %; die Kerninflation der Eurozone stagnierte bei 2,5 %.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] },
          { tag: "unbestaetigt", text: "Die genauen Ursachen für die deutliche Diskrepanz zwischen deutscher und eurozonenweiter Inflationsrate werden in den gesichteten Quellen nicht abschließend erklärt; als wahrscheinlicher Faktor gilt der je nach Land unterschiedlich starke Energiepreiseffekt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Eurozonen-Inflation mit 4,0 % deutlich über der deutschen Rate von 2,8 % liegt, könnte die Debatte um die Geldpolitik der nächsten EZB-Führung zusätzlich beeinflussen – ein möglicher Hintergrund dafür, warum sowohl Knot als auch de Cos sich in ihrer bisherigen Haltung zur Zinspolitik unterscheiden." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinserwartung in Meldung 4, zum Ölpreis als Treiber der Energiekomponente in Meldung 15.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "Handelsblatt: EZB – Joachim Nagel so gut wie aus dem Rennen um Lagarde-Nachfolge", url: "https://www.handelsblatt.com/finanzen/geldpolitik/ezb-joachim-nagel-so-gut-wie-aus-dem-rennen-um-lagarde-nachfolge/100255562.html" },
        { title: "Handelsblatt: EZB – Spanien nominiert Pablo Hernandez de Cos für Lagarde-Nachfolge", url: "https://www.handelsblatt.com/finanzen/geldpolitik/ezb-spanien-nominiertpablo-hernandez-de-cos-fuer-lagarde-nachfolge/100267919.html" },
        { title: "onvista.de: Poker um EZB-Spitze – Wer folgt auf Christine Lagarde?", url: "https://www.onvista.de/news/2026/11-09-poker-um-ezb-spitze-wer-folgt-auf-christine-lagarde-0-10-26574093" },
        { title: "Destatis: Inflationsrate im Oktober 2026 voraussichtlich +2,8 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_382_611.html" },
        { title: "finanznachrichten.de: Eurozone – Inflationsrate steigt im Oktober auf 4,0 Prozent", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70030324-eurozone-inflationrate-steigt-im-oktober-auf-4-0-prozent-016.htm" }
      ]
    },
    /* 6 DEUTSCHLAND: AIGNER-NOMINIERUNG */
    {
      id: "ilse-aigner-bundespraesidentin-nominierung-11-09", cats: ["germany"], when: "Ankündigung So 8.11. abends · Nominierung Mo 9.11. · Wahl Bundesversammlung 30.1.2027",
      headline: "Merz schlägt Ilse Aigner als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl vor",
      sec30: "Bundeskanzler Friedrich Merz kündigte am Sonntagabend, 8.11.2026, an, die bayerische Landtagspräsidentin Ilse Aigner (CSU) als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl vorzuschlagen. Die offizielle Nominierung erfolgte am Montag in den Parteigremien; die Wahl in der Bundesversammlung ist für den 30. Januar 2027 angesetzt, ein Sieg im ersten Wahlgang gilt wegen der gemeinsamen Mehrheit von Union und SPD als sehr wahrscheinlich. Aigner wäre im Erfolgsfall die erste Frau im Amt und würde auf Frank-Walter Steinmeier folgen, der nach zwei Amtszeiten nicht erneut antreten darf.",
      blocks: [
        { h: "Was wurde vorgeschlagen?", items: [
          { tag: "fakt", text: "Bundeskanzler Friedrich Merz (CDU) kündigte am Sonntagabend, 8.11.2026, an, die bayerische Landtagspräsidentin Ilse Aigner (CSU) als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl vorzuschlagen. Die offizielle Nominierung durch die Parteigremien erfolgte am Montag, 9.11.2026." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Die Wahl des oder der nächsten Bundespräsidenten durch die Bundesversammlung ist für den 30. Januar 2027 angesetzt. CDU/CSU und SPD verfügen dort gemeinsam über eine Mehrheit, weshalb ein Sieg Aigners bereits im ersten Wahlgang als sehr wahrscheinlich gilt. Sie würde auf Frank-Walter Steinmeier folgen, der nach zwei Amtszeiten laut Grundgesetz nicht erneut antreten darf.",
            ask: [{ label: "Wie entsteht eine Regierungsmehrheit?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Warum fiel die Wahl auf Aigner?", items: [
          { tag: "einordnung", text: "Aigner ist seit 2018 Präsidentin des Bayerischen Landtags und war zuvor Bundeslandwirtschaftsministerin; sie gehört zu den bekannteren Politikerinnen der CSU. CSU-Chef Markus Söder hatte ihren Namen laut Berichten bereits Monate zuvor ins Gespräch gebracht. Im Erfolgsfall wäre sie die erste Frau und die erste Person aus der CSU im Amt des Bundespräsidenten." }
        ]},
        { h: "Wer unterstützt den Vorschlag und womit?", items: [
          { tag: "position", text: "CDU-Fraktionschef Thorsten Frei sagte: „Ilse Aigner ist in der Tat eine hervorragend geeignete Kandidatin.” Laut Berichten gab es zudem Unterstützungssignale aus der SPD-Spitze sowie Sympathiebekundungen bei der Grünen-Spitze für die Personalie." }
        ]},
        { h: "Wer kritisiert den Vorschlag und womit?", items: [
          { tag: "einordnung", text: "In den zum Redaktionsschluss gesichteten Berichten liegt keine nennenswerte öffentliche Kritik an der Personalie Aigner vor; eine Positionierung von AfD oder Linken lag zum Zeitpunkt der Recherche nicht vor." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Da Union und SPD gemeinsam über die nötige Mehrheit in der Bundesversammlung verfügen, gilt eine Wahl Aigners bereits im ersten Wahlgang als sehr wahrscheinlich; Berichte heben vor allem die symbolische Bedeutung als erste Bundespräsidentin hervor." }
        ]}
      ],
      reaction: "Mehr zur allgemeinen Stimmungslage und zu aktuellen Umfragen in Meldung 8.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "Bloomberg: Merz Endorses Ilse Aigner for Germany's First Female President Next Year", url: "https://www.bloomberg.com/news/articles/2026-11-08/merz-backs-ilse-aigner-as-germany-s-first-female-president" },
        { title: "kreisbote.de: Ilse Aigner soll am 9. November 2026 als Bundespräsidentin-Kandidatin nominiert werden", url: "https://www.kreisbote.de/politik/ilse-aigner-soll-am-november-2026-als-bundespraesidentin-kandidatin-nominiert-werden-zr-94580855.html" },
        { title: "ZDFheute: Wie Merz seine Freundin Aigner zur Präsidenten-Kandidatin kürt", url: "https://www.zdfheute.de/politik/aigner-merz-bundespraesidentin-zeitplan-100.html" },
        { title: "t-online.de: Steinmeier-Nachfolge – SPD und Grünen-Spitze stellen sich hinter Ilse Aigner", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101519494/steinmeier-nachfolge-spd-und-gruenen-spitze-stellen-sich-hinter-ilse-aigner.html" }
      ]
    },
    /* 7 DEUTSCHLAND: HAUSHALT/STEUERREFORM */
    {
      id: "bundeshaushalt-steuerreform-optionsmodell-middelberg-11-09", cats: ["germany"], when: "Bereinigungssitzung 12.11. · Plenumsberatung 24.–27.11. · Middelberg-Äußerung 6.11.2026",
      headline: "Die Unionsfraktion droht weiter mit einer Blockade der Einkommensteuerreform, Klingbeil verlangt von allen Ministerien zusätzliche Einsparungen",
      sec30: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Die Bereinigungssitzung des Haushaltsausschusses ist für Donnerstag, 12.11.2026, terminiert, die abschließende Bundestagsberatung für den 24. bis 27.11. Der Haushalt sieht Ausgaben von rund 555 Mrd. Euro und eine Nettokreditaufnahme von etwa 118,7 bis 119 Mrd. Euro im Kernhaushalt vor. Bundesfinanzminister Lars Klingbeil (SPD) verlangte von allen Ministerien eine zusätzliche Einsparung von 2 Prozent über die bereits vereinbarte 1-Prozent-Vorgabe hinaus. Parallel hält die Unionsfraktion an ihrer am 6.11. öffentlich gewordenen Blockadedrohung gegenüber der von der SPD angestrebten Einkommensteuerreform fest, solange kein praktikables Optionsmodell für Personengesellschaften vorliegt.",
      blocks: [
        { h: "Was ist beim Bundeshaushalt 2027 vorgesehen?", items: [
          { tag: "fakt", text: "Der Haushaltsentwurf 2027 sieht Ausgaben von rund 555 Mrd. Euro vor (+6 % gegenüber 2026) sowie eine Nettokreditaufnahme im Kernhaushalt von rund 118,7 bis 119 Mrd. Euro, deutlich mehr als die 98 Mrd. Euro im Jahr 2026; hinzu kommen rund 80 Mrd. Euro über Sondervermögen. Die Bereinigungssitzung des Haushaltsausschusses ist für Donnerstag, 12.11.2026, terminiert, die abschließende Bundestagsberatung für den 24. bis 27.11." }
        ]},
        { h: "Was ändert sich konkret, und worüber wird gestritten?", items: [
          { tag: "fakt", text: "Im Haushaltsbegleitgesetz 2027 ist unter anderem ein Optionsmodell für Personengesellschaften vorgesehen, das diesen erlauben soll, zwischen der Besteuerung nach Einkommen- oder Körperschaftsteuer zu wechseln – im Zusammenhang mit einer von Union und SPD vereinbarten Anhebung des Spitzensteuersatzes von 45 auf 47 Prozent und einer schrittweisen Senkung der Körperschaftsteuer von 15 auf 10 Prozent." }
        ]},
        { h: "Wer unterstützt die Pläne und womit?", items: [
          { tag: "position", text: "Bundesfinanzminister Lars Klingbeil (SPD) betonte, er lege einen „verfassungskonformen” Haushalt vor, und verlangte von allen Ministerien eine zusätzliche Einsparung von 2 Prozent über die bereits vereinbarte 1-Prozent-Vorgabe hinaus. Zur konkreten Ausgestaltung des Optionsmodells selbst lag von SPD-Seite in den gesichteten Quellen keine öffentliche Stellungnahme vor." }
        ]},
        { h: "Wer kritisiert die Pläne und womit?", items: [
          { tag: "position", text: "Mathias Middelberg (CDU), stellvertretender Vorsitzender der Unionsfraktion, erklärte am 6.11.2026, die Einkommensteuerreform sei „nicht zustimmungsfähig ohne ein wirklich praktikables Modell”; ein „so weites Auseinanderfallen der Besteuerung je nach Rechtsform des Unternehmens” sei inakzeptabel, „bislang liegt dafür leider noch immer kein Vorschlag vor”. Sebastian Schäfer (Grüne) kritisierte eine „geplante Verschuldung von mehr als 200 Milliarden Euro” trotz „immer neuer Buchungstricks”; Marc Biadacz (CDU) warnte vor „dauerhaft steigenden Bundeszuschüssen” zur Rentenversicherung.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Ohne eine Einigung auf ein praktikables Optionsmodell könnte sich laut der Unionsposition die geplante Steuerreform verzögern – mit möglichen Rückwirkungen auf den ohnehin engen Zeitplan der Haushaltsberatungen bis zum 27.11." }
        ]}
      ],
      reaction: "Mehr zur Rentenreform und zu aktuellen Umfragen in Meldung 8, zur Bundespräsidentenwahl in Meldung 6.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Tagesspiegel/AFP: „Nicht zustimmungsfähig” – CDU droht mit Blockade der geplanten Steuerreform", url: "https://www.tagesspiegel.de/politik/afp-nicht-zustimmungsfahig-cdu-droht-mit-blockade-der-geplanten-steuerreform-16253118.html" },
        { title: "bundestag.de: Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "bundestag.de: Haushaltsausschuss legt letzte Hand an Etat für 2027", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1231740" },
        { title: "ZDFheute: Klingbeil legt Etatpläne 2027 im Bundestag vor", url: "https://www.zdfheute.de/politik/deutschland/haushalt-entwurf-2027-eckpunkte-klingbeil-100.html" }
      ]
    },
    /* 8 DEUTSCHLAND: RENTE/UMFRAGEN */
    {
      id: "rentenreform-kapitalrente-umfragen-11-09", cats: ["germany"], when: "Schweitzer-Aussage Anfang Nov. · Umfragen 3.–7.11.2026",
      headline: "Die Kapitalrente soll vor Weihnachten nur als Eckpunkte ins Kabinett, aktuelle Umfragen sehen die AfD weiterhin deutlich vor der Union",
      sec30: "Bundesarbeitsminister Alexander Schweitzer (SPD), seit 13.10.2026 Nachfolger der zurückgetretenen Bärbel Bas, bestätigte den Zeitplan: Das Kabinett soll noch vor Weihnachten 2026 den rentenrechtlichen Teil sowie Eckpunkte zur kapitalgedeckten Zusatzvorsorge („Kapitalrente”) beschließen; ein ausgearbeiteter Gesetzentwurf zur Kapitalrente wird erst 2027 erwartet. Aus der Unionsfraktion kam Kritik an diesem Vorgehen; DIW-Präsident Fratzscher bezeichnete die Verschiebung als „Rückschlag”. Neue Umfragen von Forsa, INSA und infratest dimap sehen die AfD weiterhin deutlich vor der Union, mit Werten, die zwischen den Instituten um bis zu drei Prozentpunkte voneinander abweichen.",
      blocks: [
        { h: "Was wurde zur Rentenreform angekündigt?", items: [
          { tag: "fakt", text: "Bundesarbeitsminister Alexander Schweitzer (SPD) – seit 13.10.2026 im Amt, nachdem Bärbel Bas unter Verweis auf private Gründe und „öffentliche Angriffe” auf sie zurückgetreten war – bestätigte, dass das Kabinett noch vor Weihnachten 2026 nur den rentenrechtlichen Teil sowie Eckpunkte zur Kapitalrente beschließen soll; ein ausgearbeiteter Gesetzentwurf zur Kapitalrente und die abschließende Bundestagsentscheidung werden erst für das erste Quartal 2027 erwartet." ,
            ask: [{ label: "Was ist das Umlageverfahren?", ref: "t:umlage" }] }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Die Kapitalrente soll ab 2028 zunächst mit 0,5 Prozent des Bruttolohns starten und jährlich um je 0,5 Prozentpunkte bis auf insgesamt 2 Prozent steigen, paritätisch von Arbeitgebern und Arbeitnehmern getragen. Zum 1.1.2027 tritt zudem die Mütterrente III in Kraft: Für vor 1992 geborene Kinder steigt die anrechenbare Erziehungszeit von 30 auf 36 Monate – das entspricht rund 21,26 Euro mehr Bruttorente pro Kind und Monat; Bestandsrentnerinnen und -rentner erhalten die Nachzahlung voraussichtlich erst Anfang 2028." }
        ]},
        { h: "Wer unterstützt das Vorgehen und womit?", items: [
          { tag: "position", text: "SPD-Fraktionsvorsitzende Dagmar Schmidt verteidigte die Verschiebung der Kapitalrente mit dem Argument, „Gründlichkeit” müsse Vorrang haben, da neue Strukturen erst geschaffen werden müssten." }
        ]},
        { h: "Wer kritisiert das Vorgehen und womit?", items: [
          { tag: "position", text: "Pascal Reddig, Vorsitzender der „Jungen Gruppe” der Unionsfraktion, kritisierte: „Die Kapitalrente braucht ein Gesetz, keine Absichtserklärung.” DIW-Präsident Marcel Fratzscher bezeichnete die erneute Verschiebung als „Rückschlag für eine nachhaltige und generationengerechte Reform der gesetzlichen Rentenversicherung”.",
            ask: [{ label: "Mehr zur Debatte um die Rentenreform", ref: "e:rente-basics" }] }
        ]},
        { h: "Wie ist die politische Stimmungslage laut aktuellen Umfragen?", items: [
          { tag: "fakt", text: "Forsa sah die AfD am 3.11.2026 bei 26 % und die Union bei 20 %; INSA maß am 7.11.2026 29,0 % zu 19,0 %; infratest dimap (ARD-DeutschlandTrend) kam am 5.11.2026 auf 27 % zu 20 %. Die Institute weichen damit bei der AfD um bis zu drei Prozentpunkte voneinander ab.",
            ask: [{ label: "Wie entsteht eine Regierungsmehrheit?", ref: "e:coalition-majority" }] },
          { tag: "unbestaetigt", text: "Die Abweichungen zwischen den Instituten liegen im Rahmen üblicher Erhebungsunsicherheiten und sollten nicht als einheitlicher Trend, sondern als unterschiedliche Momentaufnahmen gelesen werden." }
        ]}
      ],
      reaction: "Mehr zum Streit um die Steuerreform im Haushaltsbegleitgesetz in Meldung 7, zur Bundespräsidentenwahl in Meldung 6.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "kettner-edelmetalle.de: Rente auf der langen Bank – Merz verschiebt die Aktienrente erneut", url: "https://www.kettner-edelmetalle.de/news/rente-auf-der-langen-bank-merz-verschiebt-die-aktienrente-erneut-03-11-2026" },
        { title: "ms-aktuell.de: Mütterrente III kommt – Wer mehr Rente bekommt und wann das Geld fließt", url: "https://ms-aktuell.de/welt/muetterrente-iii-auszahlung-27-09-2026/" },
        { title: "dawum.de: Forsa-Umfrage Bundestag, 2026-11-03", url: "https://dawum.de/Bundestag/Forsa/2026-11-03/" },
        { title: "dawum.de: INSA-Umfrage Bundestag, 2026-11-07", url: "https://dawum.de/Bundestag/INSA/2026-11-07/" },
        { title: "finanznachrichten.de: ARD-DeutschlandTrend – AfD in Sonntagsfrage weiterhin vorn, Union und SPD unverändert", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70049880-ard-deutschlandtrend-afd-in-sonntagsfrage-weiterhin-vorn-union-und-spd-unveraendert-007.htm" }
      ]
    },
    /* 9 INTERNATIONAL: US-ZWISCHENWAHLEN FINAL + MILLER */
    {
      id: "us-zwischenwahlen-mississippi-alaska-miller-amtsantritt-11-09", cats: ["world"], when: "Wahltag Di 3.11. · Zertifizierung Mississippi 13.11. · Alaska ca. 18.11. · Miller-Amtsantritt 9.11.2026",
      headline: "Mississippi und Alaska bleiben weiterhin zu knapp zum Zählen, Stephen Miller tritt heute als neuer Stabschef im Weißen Haus an",
      sec30: "Nach den Zwischenwahlen vom 3.11.2026 ist die Kontrolle der Demokraten über Senat und Repräsentantenhaus zwar projiziert, in Mississippi (Scott Colom gegen Cindy Hyde-Smith, bei 96,9 % Auszählung 49,1 zu 48,8 %) und Alaska (Mary Peltola gegen Dan Sullivan, bei 74,1 % Auszählung 48,2 zu 47,9 %) gilt das Ergebnis aber weiterhin als zu knapp („too close to call”); die Zertifizierung in Mississippi wird für den 13.11. erwartet, in Alaska wegen Ranked-Choice-Voting erst um den 18.11. Im Weißen Haus tritt heute, 9.11., Stephen Miller offiziell die Nachfolge von Susie Wiles als Stabschef an, die am 6.11. ihren Rücktritt erklärt hatte.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Mit der Kontrolle über beide Kongresskammern können die Demokraten künftig Gesetzesvorhaben der Trump-Regierung blockieren und eigene Untersuchungen einleiten; das gilt auch für die Haushaltspolitik, etwa bei geplanten Verteidigungsausgaben (mehr dazu in Meldung 11)." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "In Mississippi liegen Scott Colom (D) und Cindy Hyde-Smith (R) bei einer Auszählung von 96,9 % mit 49,1 zu 48,8 % nahezu gleichauf; die Zertifizierung wird für den 13.11.2026 erwartet. In Alaska liegen Mary Peltola (D) und Dan Sullivan (R) bei 74,1 % Auszählung mit 48,2 zu 47,9 % ebenfalls knapp beieinander; wegen des Ranked-Choice-Verfahrens wird das endgültige Ergebnis erst um den 18.11.2026 erwartet." }
        ]},
        { h: "Welcher historische Hintergrund ist wichtig?", items: [
          { tag: "einordnung", text: "Mid-Term-Wahlen gelten traditionell als Stimmungstest für die amtierende Regierung; ein Sitzverlust der Regierungspartei ist historisch häufig, das Ausmaß des demokratischen Erfolgs wird in Berichten aber als besonders deutlich eingeordnet." }
        ]},
        { h: "Welche personellen und wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Susie Wiles erklärte laut Berichten am 6.11.2026 ihren Rücktritt als Stabschefin im Weißen Haus; Präsident Trump ernannte daraufhin Stephen Miller zum Nachfolger, der sein Amt am 9.11.2026 antritt." },
          { tag: "position", text: "Der demokratische Fraktionsvorsitzende im Repräsentantenhaus, Hakeem Jeffries, bezeichnete Miller als „a dangerous xenophobe and reckless extremist who has American blood on his hands”; der republikanische Senator Thom Tillis nannte die Personalie „the worst of all possible choices”." },
          { tag: "einordnung", text: "Bei den Zwischenwahlen stimmten Wähler in zehn Bundesstaaten über 41 Fragen zu Rechenzentren ab, 77 % votierten gegen eine weitere Entwicklung – das gilt laut Berichten als einer der Auslöser für den Chip-Ausverkauf vom 5.11. (Meldung 14). Verteidigungswerte gaben nach den Wahlen ebenfalls nach, aus Sorge vor möglichen Kürzungen bei geplanten Rüstungsausgaben (Meldung 11).",
            ask: [{ label: "Mehr zum Chip-Ausverkauf", ref: "s:14" }, { label: "Mehr zu Verteidigungswerten", ref: "s:11" }] }
        ]}
      ],
      reaction: "Mehr zu den Marktreaktionen in Meldung 1 und 2, zum Chip-Ausverkauf in Meldung 14, zu Verteidigungswerten in Meldung 11.",
      terms: [],
      followups: ["e:why-markets-move"],
      sources: [
        { title: "Washington Post: Trump names Stephen Miller new White House chief of staff", url: "https://www.washingtonpost.com/politics/2026/11/06/trump-names-stephen-miller-new-white-house-chief-staff/" },
        { title: "whitehouse.gov: President Trump Names Stephen Miller as 33rd White House Chief of Staff", url: "https://www.whitehouse.gov/releases/2026/11/president-trump-names-stephen-miller-as-33rd-white-house-chief-of-staff/" },
        { title: "NBC News: Mississippi Senate Results", url: "https://www.nbcnews.com/politics/2026-elections/mississippi-senate-results" },
        { title: "Washington Post: Alaska Senate – Peltola vs. Sullivan Live Updates", url: "https://www.washingtonpost.com/elections/results/2026/11/03/alaska-senate-peltola-sullivan-live-updates/" }
      ]
    },
    /* 10 INTERNATIONAL/GEOPOLITIK: IRAN/HORMUS */
    {
      id: "iran-krieg-katar-rubio-araghchi-hormus-11-09", cats: ["world", "geo"], when: "Iranischer Vorschlag 5.11. · Rubio-Reaktion 8./9.11. · Trump-Katar-Treffen Mo 9.11.2026",
      headline: "Katars Premierminister trifft Trump zur Iran-Vermittlung, Rubio weist einen iranischen Vorschlag zurück, während Iran eine Öffnung der Straße von Hormus anbietet",
      sec30: "Katars Premierminister Scheich Mohammed bin Abdulrahman bin Jassim Al Thani traf Präsident Trump am Montag, 9.11.2026, im Weißen Haus, um die Vermittlung im Krieg zwischen den USA/Israel und Iran fortzusetzen. Iran hatte über katarische Vermittler einen neuen, auf dem Siebenpunkte-Plan von der UN-Generalversammlung im September basierenden Vorschlag übermittelt; Außenminister Abbas Araghchi bot an, die Straße von Hormus binnen zwei Tagen zu öffnen, falls die USA Irans Bedingungen – darunter ein Ende des Krieges an allen Fronten – erfüllten. US-Außenminister Marco Rubio wies die iranischen Forderungen als „outrageous and ridiculous and really not realistic” zurück und sagte zugleich, man stehe „nicht am Rande eines Durchbruchs”.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Die Straße von Hormus ist eine der wichtigsten Handelsrouten für Öltransporte weltweit; jede neue Nachricht zu Eskalation oder Diplomatie in dieser Region wirkt sich unmittelbar auf den Ölpreis aus (mehr dazu in Meldung 15) und damit auch auf Inflationserwartungen und Zentralbank-Entscheidungen." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Katars Premierminister Scheich Mohammed bin Abdulrahman bin Jassim Al Thani traf Präsident Trump am 9.11.2026 im Weißen Haus; Katar vermittelt seit Monaten zwischen Washington und Teheran. Auf iranischer Seite führt Außenminister Abbas Araghchi die Gespräche, auf US-Seite Außenminister Marco Rubio." }
        ]},
        { h: "Welcher historische Hintergrund ist wichtig?", items: [
          { tag: "fakt", text: "Der Krieg zwischen den USA/Israel und Iran läuft seit dem 28.2.2026; mehrere zuvor vereinbarte Waffenstillstände sind bislang gescheitert.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Iran bot über katarische Vermittler an, die Straße von Hormus binnen zwei Tagen zu öffnen, falls die USA Irans Bedingungen – darunter ein Ende des Krieges an allen Fronten – erfüllen.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] },
          { tag: "position", text: "US-Außenminister Rubio bezeichnete die iranischen Forderungen als „not just unacceptable, but in some cases, outrageous and ridiculous and really not realistic” und sagte, man sei „nicht am Rande eines Durchbruchs”; zugleich nannte er den Krieg in einem separaten Interview unpopulär, aber „necessary”, um die nukleare Bedrohung zu stoppen." },
          { tag: "einordnung", text: "Jede neue Nachricht zur Diplomatie oder Eskalation rund um die Straße von Hormus wirkte sich diese Woche unmittelbar auf den Ölpreis aus; mehr dazu in Meldung 15." }
        ]}
      ],
      reaction: "Mehr zum Ölpreis und zu den deutschen Gasspeichern in Meldung 15, zur Fed- und EZB-Zinspolitik in Meldung 4 und 5.",
      terms: [],
      followups: ["e:why-oil-up-geo", "e:hormuz"],
      sources: [
        { title: "Al Jazeera: Qatar PM to meet Trump – What's the latest on US-Iran negotiations?", url: "https://www.aljazeera.com/news/2026/11/9/qatar-pm-to-meet-trump-whats-the-latest-on-us-iran-negotiations" },
        { title: "Al Jazeera: Rubio says war on Iran unpopular but 'necessary' to stop nuclear threat", url: "https://www.aljazeera.com/news/2026/11/9/rubio-says-war-on-iran-unpopular-but-necessary-to-stop-nuclear-threat" },
        { title: "Axios: Trump to meet Qatari prime minister about mediation efforts with Iran", url: "https://www.axios.com/2026/11/09/trump-qatar-prime-minister-iran-war-mediation" }
      ]
    },
    /* 11 DEFENCE */
    {
      id: "rheinmetall-erholung-belgien-skyranger-hensoldt-11-09", cats: ["defence"], when: "Rheinmetall-Erholung Mo 9.11. · Belgien-Auftrag 9.11. · Hensoldt-Kapitalmarkttag 10.11.2026",
      headline: "Rheinmetall erholt sich am Montag von einem neuen Tief, Belgien bestellt 20 Skyranger-30-Systeme, Hensoldt steht vor dem Kapitalmarkttag",
      sec30: "Die Rheinmetall-Aktie fiel am Montagmorgen zunächst auf rund 792 Euro – ein neues Tief seit Februar 2025 –, erholte sich im Tagesverlauf aber auf bis zu 833,60 Euro (+2,5 %), nachdem sie seit der Gewinnwarnung vom 5.11. rund 21 % verloren hatte. Belgien bestellte am 9.11. 20 Flugabwehrsysteme Skyranger 30 von Rheinmetall; das Land veranschlagt die Gesamtinvestition auf 3,1 Mrd. Euro. Hensoldt meldete starke Neun-Monats-Zahlen und steht am 10.11. vor seinem Kapitalmarkttag in London, RENK verzeichnete einen Auftragseingang von +33,6 %. Analysten bleiben bei Rheinmetall weiterhin gespalten.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie am Montag entwickelt?", items: [
          { tag: "fakt", text: "Die Aktie eröffnete am Montag bei rund 805 Euro, fiel am Morgen zeitweise auf fast 792 Euro – ein neues Tief seit Februar 2025 – und erholte sich im Tagesverlauf auf ein Hoch von 833,60 Euro (+2,5 %). Seit der Gewinnwarnung vom Mittwochabend, 5.11., hatte die Aktie insgesamt rund 21 % verloren.",
            ask: [{ label: "Mehr zur Gewinnwarnung vom 5.11.", ref: "t:ebitda" }] }
        ]},
        { h: "Wie reagieren Analysten weiterhin?", items: [
          { tag: "position", text: "Bank of America bestätigte eine „Hold”-Einstufung mit Kursziel 800 Euro, JPMorgan senkte das Kursziel auf 1.150 Euro, Goldman Sachs hielt dagegen an „Buy” mit Kursziel 2.300 Euro fest, und MWB Research stufte auf „Buy” mit Kursziel 1.050 Euro hoch." }
        ]},
        { h: "Was wurde mit Belgien vereinbart?", items: [
          { tag: "fakt", text: "Belgien bestellte am 9.11.2026 20 Flugabwehrsysteme vom Typ Skyranger 30, montiert auf Wechselladerfahrzeugen, zur Verteidigung kritischer Infrastruktur gegen Drohnen und andere Luftbedrohungen; das Land veranschlagt die zugehörige Gesamtinvestition auf 3,1 Mrd. Euro. Der Auftrag geht auf eine belgisch-niederländische Kooperationsvereinbarung vom NATO-Gipfel in Ankara im Juli 2026 zurück." }
        ]},
        { h: "Wie entwickelten sich Hensoldt und RENK?", items: [
          { tag: "fakt", text: "Hensoldt meldete für die ersten neun Monate 2026 einen Auftragseingang von 3,56 Mrd. Euro (+76,7 %) und einen Umsatz von 1,86 Mrd. Euro (+21,3 %); das bereinigte EBITDA stieg um 33,0 % auf 281 Mio. Euro. Die Jahresprognose wurde auf rund 2,8 Mrd. Euro Umsatz angehoben; am 10.11. steht der Kapitalmarkttag in London an. RENK meldete für das dritte Quartal einen Auftragseingang von +33,6 %, bei rückläufigem Nettogewinn.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Wie reagierten US-Verteidigungswerte auf die Zwischenwahlen?", items: [
          { tag: "fakt", text: "Nach dem demokratischen Sieg bei den Zwischenwahlen fiel die Lockheed-Martin-Aktie am 4.11. um 6,9 %, aus Sorge, ein demokratisch kontrollierter Kongress könnte das von Trump geplante Verteidigungsbudget beschneiden." }
        ]}
      ],
      reaction: "Mehr zu den Zwischenwahlen in Meldung 9, zum DAX in Meldung 1.",
      terms: ["ebitda"],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "ariva.de: Aktie im Fokus – Rheinmetall versucht Erholung, Analystenziele weiter hoch", url: "https://www.ariva.de/news/aktie-im-fokus-rheinmetall-versuchen-erholung-12199865" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie vorbörslich bei 801,15 Euro: 1,42 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/rheinmetall-aktie-vorboerslich-bei-801-15-euro-1-42-prozent-tiefer/70479339" },
        { title: "armyrecognition.com: Belgium Orders 20 Rheinmetall Skyranger 30 Air Defence Systems", url: "https://www.armyrecognition.com/news/army-news/2026/belgium-orders-20-rheinmetall-skyranger-30-air-defence-systems-to-protect-critical-infrastructure" },
        { title: "ad-hoc-news.de: Hensoldt stock faces capital markets day after strong 9M results", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/hensoldt-stock-faces-capital-markets-day-after-strong-9m-results/70473945" }
      ]
    },
    /* 12 DEALS/PE */
    {
      id: "basf-evonik-wochenende-marvell-lumentum-analysten-11-09", cats: ["deals", "pe"], when: "BASF/Evonik-Treffen Sa 8.11. · Marvell/Lumentum-Analystenreaktionen Anfang Nov. 2026",
      headline: "BASF und Evonik treffen sich am Wochenende zu einem vertraulichen Austausch, an Evoniks Ablehnung ändert sich laut Insidern nichts",
      sec30: "Die Vorstandschefs und Finanzchefs von BASF und Evonik trafen sich am Samstag, 8.11.2026, zu einem als „rein informativ und vertraulich” angekündigten Austausch über Evoniks eigene Mittelfriststrategie. Laut Insider-Berichten änderte sich an Evoniks bereits am 5.11. bekräftigter Ablehnung des BASF-Übernahmeangebots von 24 Euro pro Aktie (rund 11,2 Mrd. Euro) dadurch nichts; weitere Termine seien aktuell nicht geplant. Parallel reagierten Analysten weiterhin gemischt auf die am 2.11. angekündigte 115-Milliarden-Dollar-Fusion von Marvell Technology und Lumentum Holdings.",
      blocks: [
        { h: "Was geschah am Wochenende bei BASF/Evonik?", items: [
          { tag: "unbestaetigt", text: "Laut Insider-Berichten trafen sich die Vorstandschefs und Finanzchefs von BASF und Evonik am Samstag, 8.11.2026, zu einem Gespräch, das als „rein informativer und vertraulicher Austausch” angekündigt worden war; Evonik wollte dabei seine eigene mittelfristige Strategie darlegen, BASF seine Beweggründe erläutern. Beide Unternehmenssprecher wollten das Treffen offiziell nicht kommentieren." },
          { tag: "fakt", text: "An Evoniks bereits am 5.11.2026 bekräftigter Ablehnung des nachgebesserten BASF-Angebots von 24 Euro pro Aktie (rund 11,2 Mrd. Euro) habe sich laut den Insider-Angaben auch nach dem Treffen nichts geändert; weitere Termine mit BASF seien aktuell nicht geplant.",
            ask: [{ label: "Wie läuft eine Übernahme typischerweise ab?", ref: "e:ma-steps" }] }
        ]},
        { h: "Wie reagieren Analysten auf die Marvell/Lumentum-Fusion?", items: [
          { tag: "fakt", text: "Marvell Technology und Lumentum Holdings hatten am 2.11.2026 eine Aktientausch-Fusion im Wert von rund 115 Mrd. Dollar bekanntgegeben (4,5 Marvell-Aktien je Lumentum-Aktie, rund 23,9 % Prämie, Closing geplant für die erste Hälfte 2028). Die Kurse beider Unternehmen fielen unmittelbar nach der Ankündigung deutlich: Marvell um 12,72 % auf 171,41 Dollar, Lumentum um 18,59 % auf 684,40 Dollar." },
          { tag: "position", text: "TD Cowen und Bank of America senkten ihre Marvell-Einstufung auf „Hold” bzw. „Neutral” und kürzten die Kursziele; BofA-Analyst Sean O'Loughlin erwartet eine Gewinnverwässerung im mittleren einstelligen Prozentbereich für 2028. Bei Lumentum hob Raymond James auf „Strong Buy” und bezeichnete die Marktreaktion als „overdone”, während Needham das Kursziel senkte, aber bei „Buy” blieb." }
        ]}
      ],
      reaction: "Mehr zur Private-Credit-Ausfallrate in Meldung 13.",
      terms: ["enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: { value: "≈ 11,2 Mrd. € (BASF/Evonik-Angebot, weiterhin abgelehnt) · ≈ 115 Mrd. $ (Marvell/Lumentum, Aktientausch, bestätigt)", buyer: "BASF (abgelehnt) · Marvell Technology", target: "Evonik · Lumentum Holdings", sector: "Chemie · Halbleiter/Optik", type: "Übernahmeangebot (abgelehnt, Wochenendgespräch ohne Kursänderung laut Insidern) · Aktientausch-Fusion (weitere Finanzierungsdetails zu einem möglichen neuen BASF-Angebot sind nicht in den Quellen genannt)" },
      sources: [
        { title: "onvista.de: Insider – Evonik will auch nach BASF-Treffen eigenständig bleiben", url: "https://onvista.de/news/2026/11-09-insider-evonik-will-auch-nach-basf-treffen-eigenstaendig-bleiben-0-20-26574151" },
        { title: "cash.ch: Insider – Spitzen von BASF und Evonik trafen sich im Übernahmepoker", url: "https://www.cash.ch/news/top-news/insider-spitzen-von-basf-und-evonik-trafen-sich-im-ubernahmepoker-983600" },
        { title: "Yahoo Finance: Analysts downgrade Marvell, slash price targets", url: "https://finance.yahoo.com/markets/stocks/articles/analysts-downgrade-marvell-slash-price-133715676.html" },
        { title: "Seeking Alpha: Lumentum upgraded as market reaction to Marvell deal appears overdone", url: "https://seekingalpha.com/news/4662828-lumentum-upgraded-as-market-reaction-to-marvell-deal-appears-overdone" }
      ]
    },
    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-fitch-rekord-bdc-cliffwater-11-09", cats: ["credit"], when: "Fitch-Q3-Daten Ende Okt. 2026",
      headline: "Private-Credit-Ausfallraten erreichen laut Fitch mit 6,3 Prozent einen neuen Rekordwert, etablierte BDC-Portfolios zeigen laut anderen Daten dagegen sinkende Verlustquoten",
      sec30: "Fitch Ratings meldete für das dritte Quartal 2026 eine auf zwölf Monate bezogene Ausfallrate bei US-Private-Credit-Krediten von 6,3 % – der vierte Quartalsanstieg in Folge (nach 6,0 % im Vorquartal). Zählt man nur schwere Ereignisse wie Insolvenzen und Liquidationen, liegt die Rate dagegen bei lediglich 0,3 %. Der Cliffwater Direct Lending Index wies für 2025 realisierte Verluste von 0,70 % aus – unter dem historischen Durchschnitt von 1,01 % –, was auf eine differenziertere Lage in etablierten BDC-Portfolios hindeutet als die Fitch-Kopfzahl allein nahelegt.",
      blocks: [
        { h: "Was zeigt der Fitch-Index?", items: [
          { tag: "fakt", text: "Laut Fitch Ratings erreichte die auf die letzten zwölf Monate bezogene US-Private-Credit-Ausfallrate im dritten Quartal 2026 einen Rekordwert von 6,3 %, nach 6,0 % im Vorquartal – der vierte Anstieg in Folge. Fitch zählte 27 Ausfallereignisse von 20 neuen, individuellen Schuldnern.",
            ask: [{ label: "Was ist eine Ausfallrate?", ref: "t:default-rate" }] },
          { tag: "fakt", text: "Zählt man nur schwere Ereignisse wie Insolvenzen und Liquidationen, liegt die Fitch-Rate dagegen bei nur 0,3 % (nach 0,4 % im Vorquartal) – die meisten erfassten „Ausfälle” waren demnach weniger gravierende Ereignisse wie Stundungen oder Zinsaufschübe.",
            ask: [{ label: "Was ist eine PIK-Vereinbarung?", ref: "t:pik" }] }
        ]},
        { h: "Was zeigen Daten zu Business Development Companies (BDCs)?", items: [
          { tag: "fakt", text: "Der Cliffwater Direct Lending Index wies für das Jahr 2025 realisierte Verluste von 0,70 % aus – unterhalb des historischen Durchschnitts von 1,01 %. Dies deutet darauf hin, dass etablierte, breit diversifizierte BDC-Portfolios trotz der hohen Fitch-Kopfzahl bislang vergleichsweise moderate realisierte Verluste zeigen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was bedeutet die Diskrepanz?", items: [
          { tag: "einordnung", text: "Die deutlich unterschiedlichen Werte – 6,3 % Fitch-Kopfzahl gegenüber 0,3 % bei schweren Ereignissen und 0,70 % realisierten BDC-Verlusten laut Cliffwater – zeigen erneut, dass Ausfallraten im Private-Credit-Markt stark von Definition, erfasster Grundgesamtheit und Methodik abhängen.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Mehr zu Fed- und EZB-Zinserwartungen in Meldung 4 und 5.",
      terms: ["default-rate", "pik", "direct-lending", "bdc"],
      followups: ["e:private-credit-what", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Fundssociety: U.S. Private Credit Default Rate Continues to Climb", url: "https://www.fundssociety.com/en/news/alternativos/u-s-private-credit-default-rate-continues-to-climb/" },
        { title: "Connect Money: Private Credit Defaults Hit Record 6.3% in Q3", url: "https://www.connectmoney.com/stories/private-credit-defaults-hit-record-6-3-in-q3-fitch/" },
        { title: "KBRA: Private Credit Business Development Company (BDC) Ratings Compendium Q2 2026", url: "https://www.kbra.com/publications/xHfVQnVY/private-credit-business-development-company-bdc-ratings-compendium-second-quarter-2026" }
      ]
    },
    /* 14 TECHNOLOGIE */
    {
      id: "nvidia-jensen-huang-untersuchung-chipsektor-anthropic-11-09", cats: ["tech"], when: "Board-Statement So 8.11. · Kursreaktion Mo 9.11. · Chip-Ausverkauf Do 5.11.2026",
      headline: "Nvidias Vorstand leitet eine Untersuchung zu CEO Jensen Huang ein, nachdem dieser eine Beziehung zu einer mutmaßlichen chinesischen Geheimdienstmitarbeiterin eingeräumt hat",
      sec30: "Nvidias Vorstand gab am Sonntag, 8.11.2026, bekannt, eine unabhängige Untersuchung einzuleiten, nachdem CEO Jensen Huang in einer Mitteilung an die Belegschaft eine außereheliche Beziehung zu Alice Huang eingeräumt hatte, einer ehemaligen Führungskraft des in Singapur ansässigen Chip-Unternehmens Megaspeed; US-Geheimdienste gehen laut Berichten davon aus, dass sie für China spionierte. Der Vorstand erklärte, es gebe „keinen Grund zur Annahme”, dass nationale Sicherheit oder Firmengeheimnisse kompromittiert wurden, und äußerte weiterhin Vertrauen in Huang. Die Nvidia-Aktie gab am Montag im vorbörslichen Handel rund 5 % nach, während AMD und Broadcom zulegten. Der Vorfall folgt auf den größten Chip-Ausverkauf seit 2020 am Donnerstag, 5.11., sowie auf anhaltende Berichte zum geplanten Anthropic-Börsengang.",
      blocks: [
        { h: "Worum geht es bei der Nvidia-Untersuchung?", items: [
          { tag: "fakt", text: "Huang schrieb in seiner Mitteilung an die Belegschaft: „I owe my family and all of you an apology”, und weiter: „To my colleagues at NVIDIA, including those I have worked alongside for decades, and to our board, partners, and shareholders around the world: you deserve better from me.” Er räumte eine außereheliche Beziehung zu Alice Huang ein, einer ehemaligen Führungskraft des Singapur-Chipunternehmens Megaspeed; US-Geheimdienste gehen laut Berichten davon aus, dass sie für China spionierte." },
          { tag: "position", text: "Nvidias Vorstand erklärte: „The Board prioritizes U.S. national and economic security, which is paramount to the interests of NVIDIA and its shareholders.” Man habe „keinen Grund zur Annahme”, dass nationale Sicherheit oder Firmengeheimnisse kompromittiert wurden; Huang unterstütze die Prüfung voll und habe volle Kooperation zugesagt. Ein Nvidia-Sprecher erklärte, Huang werde ohne Unterbrechung CEO bleiben.",
            ask: [{ label: "Mehr zur Marktreaktion", ref: "s:1" }] }
        ]},
        { h: "Wie reagierten die Aktienmärkte am Montag?", items: [
          { tag: "fakt", text: "Nvidia-Aktien gaben im vorbörslichen US-Handel am Montag um rund 5 % nach (von einem Freitagsschluss bei 186,64 Dollar); in Deutschland notierte die Aktie bei Lang & Schwarz zeitweise rund 6,3 % tiefer. AMD- und Broadcom-Aktien legten im selben Zeitraum vorbörslich zu – eine deutliche Divergenz zu Nvidia." }
        ]},
        { h: "Was war beim Chip-Ausverkauf vom Donnerstag passiert?", items: [
          { tag: "fakt", text: "Der Philadelphia Semiconductor Index war am Donnerstag, 5.11.2026, um 12,2 % eingebrochen; Nvidia fiel auf 181,60 Dollar (-9,26 %), AMD auf 404,40 Dollar (-17,26 % vor der Freitagserholung), Broadcom auf 291,53 Dollar (-10,43 %). Der S&P 500 verlor an diesem Tag 4,36 %, die Nasdaq 5,52 %; nach Reuters-Schätzungen verdampften rund 2,5 Billionen Dollar Marktkapitalisierung. Als Auslöser nennen Berichte die bei den Zwischenwahlen deutlich gegen Rechenzentren ausgefallenen Abstimmungen sowie schwache Nachfragesignale von Qualcomm und Intel." }
        ]},
        { h: "Was gibt es Neues bei Anthropic und OpenAI?", items: [
          { tag: "unbestaetigt", text: "Laut Berichten drängen IPO-Investoren die angepeilte Anthropic-Bewertung nach unten; ein Börsengang wird für die Woche ab 16.11.2026 angepeilt, abhängig von der Marktlage. Am 2.11. wurde zusätzlich eine Registrierung für ein Angebot von Class-A-Aktien in Japan im Volumen von bis zu rund 3,5 Mrd. Dollar eingereicht. CNBC berichtete am 7.11., der Anthropic-Börsengang sehe sich einem „AI-Backlash” nach den Zwischenwahlen ausgesetzt." },
          { tag: "unbestaetigt", text: "OpenAI schloss laut Berichten eine Finanzierungsrunde über 11 Mrd. Dollar bei einer Bewertung von 1,25 Billionen Dollar ab – unter einer zuvor kolportierten Zielmarke von 1,5 Billionen Dollar; OpenAI-Finanzchefin Sarah Friar erklärte, das Unternehmen werde trotz des Wahlausgangs und politischem Druck weiter in US-Rechenzentren investieren." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Nvidia am Montag isoliert nachgibt, während AMD und Broadcom zulegen, deutet darauf hin, dass Anleger die neue Nachricht zunächst als unternehmensspezifisches Risiko für Nvidia behandeln, nicht als neue grundsätzliche Belastung für den gesamten KI- und Chipsektor. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Mehr zu den Marktreaktionen in DAX und Euro Stoxx 50 in Meldung 1, zu Nasdaq und S&P 500 in Meldung 2.",
      terms: ["hyperscaler"],
      followups: ["e:ai-capex", "e:circular-financing", "chain:nasdaq-why"],
      sources: [
        { title: "globenewswire.com: Statement from NVIDIA Board of Directors", url: "https://www.globenewswire.com/news-release/2026/11/08/3398017/0/en/statement-from-nvidia-board-of-directors.html" },
        { title: "TechCrunch: Nvidia says it's investigating CEO Jensen Huang's relationship with possible Chinese spy", url: "https://techcrunch.com/2026/11/08/nvidia-says-its-investigating-ceo-jensen-huangs-relationship-with-possible-chinese-spy/" },
        { title: "The Washington Post: Read Jensen Huang's letter to Nvidia about his affair with suspected Chinese spy", url: "https://www.washingtonpost.com/technology/2026/11/08/read-jensen-huangs-letter-nvidia-about-his-affair-with-suspected-chinese-spy/" },
        { title: "CNBC: Nvidia investigates CEO Jensen Huang's relationship with alleged Chinese spy", url: "https://www.cnbc.com/2026/11/08/nvidia-jensen-huang-investigation-china-spy.html" },
        { title: "TradingKey: US Premarket – Futures Rise, Nvidia Down 5% on Huang Probe", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262296219-us-premarket-futures-rise-nvidia-down-5-huang-probe-ai-cloud-coreweave-tradingkey" }
      ]
    },
    /* 15 ENERGIE */
    {
      id: "brent-opec-plus-gasspeicher-ttf-11-09", cats: ["energy", "geo"], when: "OPEC+-Entscheidung So 1.11. · Gasspeicher-Stand Bundesnetzagentur 9.11. · TTF-Stand 9.11.2026",
      headline: "OPEC+ lässt die Dezember-Förderquoten unverändert, deutsche Gasspeicher liegen weiter deutlich unter dem Winterziel",
      sec30: "Die OPEC+-Kerngruppe beschloss bereits am Sonntag, 1.11.2026, die Förderquoten für Dezember unverändert zu lassen – die dritte Runde unveränderter Quoten in Folge; die richtungsweisende Entscheidung zum Förderrahmen 2027 steht erst beim Ministertreffen am 29.11. an. Der Ölpreis Brent bewegte sich am Montag je nach Quelle und Kontraktmonat zwischen rund 97 und 99 Dollar und damit leicht unter dem Freitagswert. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 9.11. bei 59,2 % Füllstand (146,5 TWh) – deutlich unter dem für den 1.11. vorgesehenen Zielwert von 80 % –, der europäische Gaspreis TTF fiel auf rund 84,31 Euro je Megawattstunde.",
      blocks: [
        { h: "Was hat OPEC+ entschieden?", items: [
          { tag: "fakt", text: "Die OPEC+-Kerngruppe (Saudi-Arabien, Russland, Irak, Kuwait, Algerien, Kasachstan, Oman) beschloss am Sonntag, 1.11.2026, in einem Online-Treffen, die Förderquoten für Dezember unverändert zu lassen – die dritte Runde unveränderter Quoten in Folge. Saudi-Arabien, Kuwait und Irak produzieren laut Berichten weiterhin unterhalb ihrer Quote, unter anderem wegen anhaltender Beschränkungen an der Straße von Hormus. Die richtungsweisende Entscheidung zum Förderrahmen 2027 steht erst beim Ministertreffen am 29.11.2026 an.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "fakt", text: "Brent bewegte sich am Montag, 9.11.2026, je nach Quelle und Kontraktmonat zwischen rund 97 und 99 Dollar je Barrel – leicht unter dem Freitagswert von 98,03 Dollar. Anfang November war der Preis laut Berichten zunächst auf rund 110 Dollar gestiegen, bevor Hoffnungen auf eine diplomatische Lösung im Iran-Krieg ihn wieder drückten.",
            ask: [{ label: "Was ist Brent?", ref: "t:brent" }] },
          { tag: "einordnung", text: "Irans Angebot, die Straße von Hormus binnen zwei Tagen zu öffnen, falls die USA Irans Bedingungen erfüllen, wirkte am Montag zunächst preisdämpfend; Rubios Zurückweisung des iranischen Vorschlags hielt die Unsicherheit aber hoch.",
            ask: [{ label: "Mehr zur Lage an der Straße von Hormus", ref: "s:10" }] }
        ]},
        { h: "Wie ist die Lage bei Gas und deutschen Speichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 9.11.2026 bei 59,2 % Füllstand (146,5 TWh), nach 60,6 % (149,8 TWh) am 5.11. – deutlich unter dem für den 1.11. vorgesehenen Zielwert von 80 %. Der europäische Gaspreis TTF (Frontmonat-Kontrakt Amsterdam) fiel auf rund 84,31 Euro je Megawattstunde, ein Rückgang von 1,4 % gegenüber Freitag und deutlich unter dem Stand von über 104 Euro Ende Oktober.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] },
          { tag: "position", text: "Die Bundesnetzagentur erklärte, sinkende Füllstände seien kein Indiz für eine Gasmangellage; die Versorgungssicherheit sei weiterhin gewährleistet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Brent trotz der laufenden Iran-Diplomatie volatil bleibt, während die europäischen Gaspreise zuletzt deutlich fielen, zeigt, dass Öl- und Gasmarkt derzeit auf unterschiedliche Faktoren reagieren: Öl vor allem auf die Nachrichtenlage zum Hormus-Konflikt, Gas stärker auf saisonale Nachfrage und Lagerbestände.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zur Lage an der Straße von Hormus in Meldung 10, zur Eurozonen-Inflation in Meldung 5.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "Arab News: OPEC+ Holds December Oil Output Targets Unchanged", url: "https://www.arabnews.com/business/opec-holds-december-oil-output-targets-unchanged-3009277" },
        { title: "Fortune: Price of Oil, November 9, 2026", url: "https://fortune.com/article/price-of-oil-11-09-2026/" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "finanzen.net: Erdgaspreis TTF", url: "https://www.finanzen.net/rohstoffe/erdgas-preis-ttf" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX legte am Montag bis zur Mittagszeit um rund 1,07 % auf 26.097,07 Punkte zu, nachdem er am Freitag im Sog eines globalen Technologie-Ausverkaufs um 1,92 % gefallen war." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "DAX und Euro Stoxx 50 erholten sich am Montag, obwohl die neue Nvidia-Untersuchung (Meldung 14) zusätzliche Unsicherheit für den Technologiesektor schuf – ein Hinweis, dass Anleger das Ereignis bislang als unternehmensspezifisch einordnen." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite lag am Montag bei rund 4,85 %, die Rendite zehnjähriger Bundesanleihen bei rund 3,26 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Fed-Chef Powell dämpfte die Erwartung einer sicheren Dezember-Zinssenkung; die eingepreiste Wahrscheinlichkeit fiel von rund 90–99,5 % auf etwa 65–71 %, was tendenziell Anlagen ohne feste Zinsen wie Gold und Bitcoin beeinflusst." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold stieg am Montag um rund 0,9 % auf etwa 4.100,50 Dollar je Feinunze, gestützt von der Unsicherheit um Nvidia und den Iran-Krieg." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin gab weiter nach und rutschte mit etwa 74.200 bis 74.550 Dollar in die fünfte Verlustwoche in Folge." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro erholte sich leicht gegenüber dem Dollar auf etwa 1,1188." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Chef Jerome Powell bezeichnete eine weitere Zinssenkung im Dezember als „not a foregone conclusion. Far from it” – der US-Inflationsbericht am Dienstag gilt als nächster wichtiger Markttreiber." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Sowohl Fed-Chef Powell als auch die Debatte um die EZB-Nachfolge zeigen, wie stark einzelne Konjunkturdaten die nächsten Zinsentscheidungen beeinflussen können." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Nach Ablauf der Nominierungsfrist bewerben sich offiziell nur Klaas Knot und Pablo Hernández de Cos um die Lagarde-Nachfolge; Bundesbank-Präsident Nagel gilt laut Handelsblatt als praktisch aus dem Rennen." },
    "inflation-what": { tag: "fakt", story: 5, text: "Die deutsche Inflationsrate lag im Oktober 2026 vorläufig bei 2,8 %, die der gesamten Eurozone bei 4,0 % – dem höchsten Stand seit September 2023." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent notiert nach den Schwankungen der vergangenen Woche bei rund 97 bis 99 Dollar je Barrel; ein weiterhin hoher Ölpreis wirkt tendenziell treibend auf Energie- und Transportkosten in Europa." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "rente-basics": { tag: "fakt", story: 8, text: "Die Kapitalrente soll vor Weihnachten 2026 nur als Eckpunkte ins Kabinett; der ausgearbeitete Gesetzentwurf und die Mütterrente III folgen erst 2027." },
    "debt-brake": { tag: "position", story: 8, text: "DIW-Chef Marcel Fratzscher bezeichnete die erneute Verschiebung der Kapitalrente als Rückschlag für eine generationengerechte Rentenreform." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Forsa sieht die AfD bei 26 %, die Union bei 20 %; INSA misst 29,0 % zu 19,0 %. Union und SPD verfügen in der Bundesversammlung aber über eine Mehrheit, die für die Bundespräsidentenwahl entscheidend ist." },
    "defence-order": { tag: "fakt", story: 11, text: "Belgien bestellte am 9.11. 20 Skyranger-30-Flugabwehrsysteme von Rheinmetall; das Land veranschlagt die Gesamtinvestition auf 3,1 Mrd. Euro." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Rheinmetall fiel am Montagmorgen zeitweise auf ein neues Tief seit Februar 2025, erholte sich aber im Tagesverlauf um bis zu 2,5 %." },
    "nato-target": { tag: "fakt", story: 11, text: "Der Belgien-Auftrag für Rheinmetall geht auf eine belgisch-niederländische Kooperationsvereinbarung vom NATO-Gipfel in Ankara im Juli 2026 zurück." },
    "ma-steps": { tag: "fakt", story: 12, text: "BASF und Evonik trafen sich am 8.11. zu einem vertraulichen Austausch; an Evoniks Ablehnung des Übernahmeangebots änderte sich laut Insidern nichts." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Weitere Termine zwischen BASF und Evonik sind laut Insider-Berichten aktuell nicht geplant." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Laut Fitch stieg die Ausfallrate bei Private-Credit-Krediten im dritten Quartal 2026 auf einen Rekordwert von 6,3 %; bei schweren Ereignissen wie Insolvenzen liegt die Rate dagegen nur bei 0,3 %." },
    "redemption-limits": { tag: "unbestaetigt", story: 13, text: "Der Cliffwater Direct Lending Index weist für 2025 realisierte Verluste von 0,70 % aus – unter dem historischen Durchschnitt von 1,01 % –, was auf eine differenziertere Lage als die Fitch-Kopfzahl hindeutet." },
    "ai-capex": { tag: "fakt", story: 14, text: "AMD- und Broadcom-Aktien legten am Montag vorbörslich zu, während Nvidia infolge der neuen Untersuchung zu CEO Jensen Huang nachgab." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "OpenAI soll laut Berichten eine Finanzierungsrunde über 11 Mrd. Dollar bei einer Bewertung von 1,25 Billionen Dollar abgeschlossen haben, unter einer zuvor kolportierten Zielmarke von 1,5 Billionen Dollar." },
    "why-oil-up-geo": { tag: "einordnung", story: 10, text: "Iran bot an, die Straße von Hormus binnen zwei Tagen zu öffnen, falls die USA Irans Bedingungen erfüllen; US-Außenminister Rubio wies den Vorschlag zugleich als „outrageous and ridiculous” zurück." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Irans Außenminister Araghchi bot eine Öffnung der Straße von Hormus binnen zwei Tagen an; eine Einigung mit den USA stand zum Redaktionsschluss noch aus, Rubio sprach von „not at the verge of a breakthrough”." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der europäische Gaspreis TTF fiel auf rund 84,31 Euro je Megawattstunde, deutlich unter dem Stand von über 104 Euro Ende Oktober." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 9.11. bei 59,2 % Füllstand (146,5 TWh) – deutlich unter dem Zielwert von 80 % für den 1.11." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Wen hat Bundeskanzler Merz am 9.11.2026 als gemeinsame Kandidatin von CDU, CSU und SPD für die Bundespräsidentenwahl vorgeschlagen?",
      options: [
        "Ilse Aigner",
        "Julia Klöckner",
        "Ursula von der Leyen",
        "Marco Buschmann"
      ],
      answer: 0,
      explain: "Merz schlug die bayerische Landtagspräsidentin Ilse Aigner (CSU) vor; sie wäre im Erfolgsfall die erste Frau im Amt des Bundespräsidenten."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Worum geht es bei der von Nvidias Vorstand am 8.11.2026 eingeleiteten Untersuchung zu CEO Jensen Huang?",
      options: [
        "Um mutmaßlichen Bilanzbetrug",
        "Um Insiderhandel mit Nvidia-Aktien",
        "Um eine Beziehung Huangs zu einer mutmaßlichen chinesischen Geheimdienstmitarbeiterin",
        "Um einen Kartellrechtsverstoß gegenüber AMD"
      ],
      answer: 2,
      explain: "Huang räumte eine außereheliche Beziehung zu einer ehemaligen Führungskraft eines Singapur-Chipunternehmens ein; US-Geheimdienste gehen davon aus, dass sie für China spionierte."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 5,
      q: "Welche zwei Kandidaten haben sich nach Fristende offiziell um die Nachfolge von EZB-Präsidentin Christine Lagarde beworben?",
      options: [
        "Joachim Nagel und Klaas Knot",
        "Isabel Schnabel und Philip Lane",
        "Christine Lagarde und Joachim Nagel",
        "Klaas Knot und Pablo Hernández de Cos"
      ],
      answer: 3,
      explain: "Offiziell nominiert wurden nur der Niederländer Klaas Knot und der Spanier Pablo Hernández de Cos; Bundesbank-Präsident Nagel gilt laut Berichten als praktisch aus dem Rennen."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 4,
      q: "Angenommen, der am Dienstag veröffentlichte US-Verbraucherpreisindex für Oktober fällt deutlich höher aus als erwartet. Was wird dadurch unter sonst gleichen Bedingungen für die Dezember-Zinsentscheidung der Fed wahrscheinlicher?",
      options: [
        "Eine Zinssenkung wird automatisch wahrscheinlicher",
        "Es hätte keinen Einfluss auf die Entscheidung",
        "Die Wahrscheinlichkeit, dass die Fed die Zinsen hält oder erhöht statt senkt, steigt",
        "Die Fed müsste die Zinsen automatisch auf 0 senken"
      ],
      answer: 2,
      explain: "Höhere Inflation spricht tendenziell gegen eine Zinssenkung; Fed-Chef Powell hatte eine sichere Dezember-Senkung bereits vor der Veröffentlichung als unsicher bezeichnet."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 10,
      q: "Irans Außenminister Araghchi bietet an, die Straße von Hormus dauerhaft zu öffnen, falls die USA Irans Bedingungen erfüllen. Was würde eine dauerhafte Öffnung dieser Route unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Der Ölpreis stiege automatisch deutlich an",
        "Der Ölpreis sänke tendenziell, weil mehr Angebot über diese wichtige Route verfügbar wäre",
        "Es gäbe keinen Zusammenhang, da Hormus für den Ölhandel keine Rolle spielt",
        "Gold und Bitcoin stiegen dadurch automatisch im gleichen Ausmaß"
      ],
      answer: 1,
      explain: "Eine dauerhaft offene wichtige Transportroute wie die Straße von Hormus würde mehr Ölangebot am Markt erwarten lassen, was den Preis tendenziell sinken lässt."
    }
  ]
};
