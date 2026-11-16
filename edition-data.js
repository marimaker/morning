// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-16",
  dateLabel: "Montag, 16. November 2026",
  updatedLabel: "Recherchestand 16.11.2026",
  marketNote: "Diese Ausgabe entsteht am Montagvormittag, 16.11.2026. DAX und Euro Stoxx 50 zeigen einen Zwischenstand vom Montagmittag, weil die Börse zum Redaktionsschluss noch nicht geschlossen hatte. S&P 500, Nasdaq Composite, Dow Jones und die US-Rendite zeigen dagegen noch den Schlusskurs vom Freitag, 13.11.2026, da der US-Handel zum Redaktionsschluss noch nicht begonnen hatte – ergänzt um die Tendenz der Terminkontrakte (Futures) für Montag. Gold, Öl und Bitcoin handeln durchgehend und zeigen bereits einen Montagvormittags-Stand. Bei der Rendite zehnjähriger Bundesanleihen weichen die Quellenangaben für Montag deutlich voneinander ab (zwischen rund 3,29 % und rund 3,38 %); das ist unten als unbestätigt gekennzeichnet. Die am Samstag gemeldeten iranischen Minentreffer auf Öltanker in der Straße von Hormus hat das US-Zentralkommando (CENTCOM) ausdrücklich als falsch zurückgewiesen; auch das angebliche Treffen zwischen US-Vizepräsident Vance und Irans Sicherheitsratschef Rezaei in Doha ist von iranischer Seite dementiert – beides ist entsprechend gekennzeichnet.",

  top: [
    { text: "Fed-Chef Kevin Warsh tritt am Montag bei einer Rede vor hawkishem Hintergrund auf: Nach der über Erwarten hohen US-Kerninflation (Oktober-Kern-CPI +0,3 % den dritten Monat in Folge) gilt eine Zinserhöhung im Dezember am Terminmarkt je nach Quelle zwischen 88 und 100 % als eingepreist; Fed-Vertreter wie Goolsbee und Williams bekräftigen die Offenheit dafür, Finanzminister Bessent warnt weiter davor. Parallel hält Bundesbank-Chef Nagel eine EZB-Erhöhung im Dezember für „ziemlich offensichtlich”, und EZB-Chefin Lagarde kündigte an, ihr Amt bereits im Februar 2027 vorzeitig abzugeben.", ref: "s:4" },
    { text: "China bestätigt das erste trilaterale Gipfeltreffen von Xi Jinping, Donald Trump und Wladimir Putin am 19.11. in Shenzhen am Rande des APEC-Gipfels; die Ukraine ist nicht eingeladen. Präsident Selenskyj warnt vor einem „Jalta-2.0”-Moment, bei dem über die Köpfe der direkt betroffenen Staaten hinweg verhandelt werde.", ref: "s:9" },
    { text: "Nvidia fällt am Montag erneut unter eine Marktkapitalisierung von 4 Billionen Dollar, während laut Financial Times vermehrt Rufe nach einer Rückkehr von Jensen Huang als CEO laut werden; Kongressanhörungen zu Huangs Rücktritt sind für den 1. bis 3.12. angesetzt. Anthropics Börsengang soll am 18.11. gepreist werden, Handelsstart ist für den 19.11. an der Nasdaq geplant.", ref: "s:14" },
    { text: "Bundeskanzler Merz kündigt für Dienstag, 17.11., eine Einigung im Koalitionsausschuss zur vollständigen Stromsteuersenkung auf den EU-Mindestsatz an – auch für Privathaushalte. Bei der Rentenreform bleibt die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren zwischen Arbeitsminister Schweitzer und Teilen der Union strittig; aktuelle Umfragen sehen die AfD weiterhin deutlich vor der Union.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.732 Pkt.", change: "-0,06 % ggü. Freitagsschluss (26.749,95 Pkt.)", dir: "down", asof: "Zwischenstand Mo 16.11.26, Mittag", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Tagesspanne", text: "Der DAX bewegte sich am Montagvormittag zwischen einem Tageshoch von 26.781 und einem Tagestief von 26.714 Punkten – insgesamt ein vergleichsweise ruhiger Handel." }
      ],
      moved: {
        intro: "Als Hintergrund für die Zurückhaltung nennen Berichte:",
        items: [
          "Anleger warten auf die Nvidia-Quartalszahlen am Dienstag nach US-Börsenschluss, die Rede von Fed-Chef Kevin Warsh am Montagmittag und das für Donnerstag geplante Pricing des Anthropic-Börsengangs; zugleich gab der Ölpreis am Vormittag nach."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Rede von Kevin Warsh und der Dezember-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: DAX am Montagmittag bei 26.732 Punkten – Ölpreis gibt nach", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-am-montagmittag-bei-26-732-punkten-oelpreis-gibt-nach/70520654" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.376 Pkt.", change: "-0,16 % ggü. Freitagsschluss (6.386,86 Pkt.)", dir: "down", asof: "Zwischenstand Mo 16.11.26, Mittag", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Tagesspanne", text: "Der Index bewegte sich am Vormittag zwischen einem Tageshoch von 6.391,15 und einem Tagestief von 6.371,86 Punkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Zurückhaltung:",
        items: [
          "Dieselbe Mischung aus Nvidia-Zahlen, Fed-Rede und Anthropic-Börsengang wie beim DAX, dazu die anhaltende Zinsdebatte bei der EZB nach Nagels Äußerungen und der Reuters-Ökonomenumfrage."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Nagel, Lagarde und der Reuters-Umfrage zur EZB in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "finanzen.at: Stoxx-Handel – Euro Stoxx 50 legt den Rückwärtsgang ein", url: "https://www.finanzen.at/nachrichten/aktien/stoxx-handel-euro-stoxx-50-legt-den-rueckwartsgang-ein-1036768379" }
    },
    "sp500": {
      label: "S&P 500", value: "7.561,67 Pkt. (Freitagsschluss)", change: "-0,40 % ggü. Donnerstag; Montag-Futures zeigen vorbörslich rund -0,6 % auf etwa 7.536 Punkte", dir: "down", asof: "Schluss Fr 13.11.26; Future-Indikation Mo 16.11.26 vor US-Handelsstart", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Woche", text: "Trotz des Freitags-Rückgangs hatte der S&P 500 auf Wochensicht noch um rund 2,5 % zugelegt – die beste Wochenperformance seit Anfang August." }
      ],
      moved: {
        intro: "Als Hintergrund für die vorbörsliche Schwäche am Montag nennen Berichte:",
        items: [
          "Anhaltende Nervosität im Chipsektor vor den Nvidia-Quartalszahlen am Dienstag nach Börsenschluss sowie vor der Rede von Fed-Chef Kevin Warsh am Mittag; Nvidia selbst fiel am Montag erneut unter eine Marktkapitalisierung von 4 Billionen Dollar."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Nvidia, der Huang-Nachfolge und dem Anthropic-Börsengang in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Yahoo Finance: Stock market today, Monday, November 16 – Dow, S&P 500, Nasdaq, Nvidia, oil", url: "https://finance.yahoo.com/markets/live/stock-market-today-monday-november-16-dow-sp-500-nasdaq-nvidia-oil-091631084.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.136,27 Pkt. (Freitagsschluss)", change: "-0,91 % ggü. Donnerstag; Nasdaq-100-Futures zeigen Montag rund -1,5 %", dir: "down", asof: "Schluss Fr 13.11.26; Future-Indikation Mo 16.11.26 vor US-Handelsstart", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Nvidia", text: "Die Nvidia-Aktie fiel am Montag laut CNBC um weitere rund 4 % und damit erneut unter eine Marktkapitalisierung von 4 Billionen Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die stärkere Future-Schwäche gegenüber Dow und S&P 500:",
        items: [
          "Die hohe Technologiegewichtung der Nasdaq macht den Index besonders empfindlich für die Unsicherheit rund um Nvidias Führungswechsel vor den Quartalszahlen am Dienstag."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Huangs Rücktritt, den Kongressanhörungen und Anthropics Börsengang in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "CNBC: Nvidia stock falls nearly 4% as scrutiny over Jensen Huang's exit continues", url: "https://www.cnbc.com/2026/11/16/nvidia-stock-price-jensen-huang.html" }
    },
    "dow": {
      label: "Dow Jones", value: "52.347,55 Pkt. (Freitagsschluss)", change: "+0,10 % ggü. Donnerstag; Montag-Futures zeigen rund -0,1 % auf etwa 52.370 Punkte", dir: "up", asof: "Schluss Fr 13.11.26; Future-Indikation Mo 16.11.26 vor US-Handelsstart", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Woche", text: "Auf Wochensicht hatte der Dow um rund 2,1 % zugelegt, trotz der Schwäche bei Technologiewerten am Freitag." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die geringere Future-Bewegung:",
        items: [
          "Die geringere Technologiegewichtung dämpft beim Dow die Unsicherheit rund um Nvidia und den Chipsektor stärker als bei S&P 500 oder Nasdaq."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zum geplanten Trump-Xi-Putin-Gipfel am 19.11. in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "Yahoo Finance: Dow, S&P 500, Nasdaq futures", url: "https://finance.yahoo.com/markets/stocks/articles/dow-p-500-nasdaq-futures-020421221.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1010", change: "-0,16 % ggü. Freitagabend (≈ 1,1020); binnen eines Monats rund -1,84 %, binnen eines Jahres rund -5,05 %", dir: "down", asof: "Stand Mo 16.11.26, Vormittag", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,10 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "Monat/Jahr", text: "Der Euro hat gegenüber dem Dollar binnen eines Monats rund 1,84 % und binnen eines Jahres rund 5,05 % verloren." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die anhaltende Dollar-Stärke:",
        items: [
          "Die zunehmend sicher erscheinende Fed-Zinserhöhung im Dezember sowie hawkishe Reden einzelner Fed-Vertreter stützen den Dollar stärker als die parallele EZB-Zinsdebatte den Euro (mehr in Meldung 4 und 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Fed-Chef Warsh und der Dezember-Zinsentscheidung in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "tradingeconomics.com: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,14–5,15 %", change: "nahezu unverändert ggü. Freitagsschluss (5,14 %; Tageshoch 5,17 %)", dir: "flat", asof: "Schluss Fr 13.11.26 / Stand Mo 16.11.26 vor US-Handelsstart", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,14 bis 5,15 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund diesen Zinssatz pro Jahr.",
      compare: [
        { label: "Woche", text: "Die Rendite liegt weiterhin rund 0,3 Prozentpunkte höher als eine Woche zuvor (rund 4,82 %) und damit auf einem Mehrmonatshoch." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für das hohe Niveau:",
        items: [
          "Die über Erwarten hohe US-Kerninflation (Oktober-Verbraucherpreise +0,4 % zum Vormonat, Kernrate +0,3 % den dritten Monat in Folge) sowie mehrere hawkishe Fed-Äußerungen und die Rede von Fed-Chef Kevin Warsh am Montag stützen die Erwartung einer Zinserhöhung im Dezember."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte und den FedWatch-Wahrscheinlichkeiten in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields rise as traders strengthen Fed rate hike bets", url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,37–3,38 % (Freitagsschluss)", change: "Angaben für Montag schwanken zwischen rund 3,29 % und 3,38 % – unbestätigt", dir: "flat", asof: "Schluss Fr 13.11.26; Montagangaben widersprüchlich", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,14 bis 5,15 % weiterhin deutlich über der Bund-Rendite." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für das erhöhte Niveau seit letzter Woche:",
        items: [
          "Bundesbank-Chef Nagel nannte eine EZB-Zinserhöhung im Dezember „ziemlich offensichtlich” nötig; eine Reuters-Umfrage sieht alle 71 befragten Ökonomen bei einer Anhebung auf 2,75 % im Dezember (mehr in Meldung 5). Für Montag selbst liegen in den ausgewerteten Quellen widersprüchliche Werte vor (rund 3,29 % bei einer Quelle, rund 3,38 % bei einer anderen); das lässt sich hier nicht auflösen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte, Lagardes Rücktrittsankündigung und der Bank of England in Meldung 5 und 6.", ref: "s:5" }
      ],
      source: { title: "FXStreet: ECB's Nagel sees another hike as second-round risks mount", url: "https://www.fxstreet.com/news/ecbs-nagel-sees-another-hike-as-second-round-risks-mount-202611131704" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.838 $", change: "-1,13 % ggü. Freitagsschluss (≈ 3.882 $) – Mehr-als-Jahres-Tief", dir: "down", asof: "Stand Mo 16.11.26, Vormittag", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 3.838 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Trend", text: "Gold ist damit bereits die zweite Handelssitzung in Folge gefallen und erreichte laut Berichten den niedrigsten Stand seit über einem Jahr." }
      ],
      moved: {
        intro: "Als Hintergrund für den weiteren Rückgang nennen Berichte:",
        items: [
          "Ein starker Dollar, hawkishe Fed-Äußerungen (u. a. von der Kansas-City-Fed) zur weiterhin „zu heiß” laufenden Inflation sowie die anhaltend hohe US-Rendite belasten den zinslosen Goldpreis; hinzu kommen nachlassende Hoffnungen auf eine schnelle Nahost-Deeskalation."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Fed-Chef Warsh und der Dezember-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Gold falls to over one-week low on firm dollar, Fed rate-hike bets", url: "https://www.cnbc.com/2026/11/12/gold-falls-to-over-one-week-low-on-firm-dollar-fed-rate-hike-bets.html" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 95,1 $", change: "rund -1 % ggü. Freitagsschluss (95,84 $)", dir: "down", asof: "Stand Mo 16.11.26, Vormittag", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Der Preis liegt weiterhin deutlich über dem Niveau vor einem Jahr, als der Nahost-Konflikt eskalierte.",
      compare: [
        { label: "WTI", text: "Die US-Sorte WTI fiel am Montag auf rund 87,9 bis 88,3 Dollar (-0,7 % ggü. Freitag)." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang nennen Berichte:",
        items: [
          "Die IEA erwartet für das vierte Quartal 2026 ein globales Angebotsüberangebot; die vollständige, 21 Länder umfassende OPEC+-Gruppe entscheidet am 29.11. über die Fördermengen für 2027 (mehr in Meldung 15)."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu den von CENTCOM zurückgewiesenen Tanker-Zwischenfällen in der Straße von Hormus in Meldung 10.", ref: "s:10" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "HDFC Sky: Brent crude oil price today, November 16, 2026 – Brent falls 1% to $94.86", url: "https://hdfcsky.com/news/brent-crude-oil-price-today-november-16-2026-brent-falls-1percent-to-94-86-wti-slips-below-88-as-supply-surplus-looms" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 64.250–64.600 $", change: "leichte Erholung ggü. dem Wochenend-Tief von rund 62.000 $ (Vier-Monats-Tief); binnen eines Monats rund -17 %", dir: "down", asof: "Stand Mo 16.11.26, Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet aktuell zwischen rund 64.000 und 65.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Wochenende", text: "In der Nacht zu Sonntag war Bitcoin auf ein Vier-Monats-Tief von rund 62.000 Dollar gefallen, nachdem binnen 24 Stunden mehr als 2 Mrd. Dollar an gehebelten Positionen zwangsliquidiert worden waren." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den anhaltenden Druck:",
        items: [
          "Die hohe Wahrscheinlichkeit einer Fed-Zinserhöhung im Dezember, Abflüsse von rund 1,9 Mrd. Dollar aus Krypto-ETFs sowie die Streichung von Bitcoin-Treasury-Firmen wie Strategy aus bestimmten Aktienindizes durch MSCI."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "crypto.news: Why Bitcoin price fell to $62,000", url: "https://crypto.news/why-bitcoin-price-fell-62000/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 MONTAGMITTAG */
    {
      id: "markets-dax-eurostoxx-montag-11-16", cats: ["markets"], when: "Zwischenstand Mo 16.11.2026, Mittag",
      headline: "DAX und Euro Stoxx 50 geben am Montagmittag leicht nach, Anleger warten auf Nvidia-Zahlen und die Fed-Rede",
      sec30: "Der DAX lag am Montagmittag bei rund 26.732 Punkten (-0,06 % ggü. Freitagsschluss 26.749,95 Punkte), der Euro Stoxx 50 bei rund 6.376 Punkten (-0,16 % ggü. Freitagsschluss 6.386,86 Punkte). Als Hintergrund für den ruhigen, leicht negativen Handel nennen Berichte die Nvidia-Quartalszahlen am Dienstag nach US-Börsenschluss, die Rede von Fed-Chef Kevin Warsh am Montagmittag sowie das nahende Pricing des Anthropic-Börsengangs am 18.11.",
      blocks: [
        { h: "Wie stehen DAX und Euro Stoxx 50 am Montagmittag?", items: [
          { tag: "fakt", text: "Der DAX bewegte sich am Vormittag zwischen einem Tageshoch von 26.781 und einem Tagestief von 26.714 Punkten und lag zuletzt bei rund 26.732 Punkten. Der Euro Stoxx 50 schwankte zwischen 6.391,15 und 6.371,86 Punkten und stand zuletzt bei rund 6.376 Punkten.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund für die Zurückhaltung?", items: [
          { tag: "einordnung", text: "Marktbeobachter verweisen auf drei anstehende Ereignisse: die Nvidia-Quartalszahlen am Dienstag nach US-Börsenschluss (erste Telefonkonferenz unter Interims-CEO Colette Kress), die Rede von Fed-Chef Kevin Warsh am Montagmittag bei einer Produktivitätskonferenz der San-Francisco-Fed, sowie das für den 18.11. geplante Pricing des Anthropic-Börsengangs vor dem Handelsstart am 19.11.",
            ask: [{ label: "Mehr zu Nvidia und Anthropic", ref: "s:14" }] }
        ]},
        { h: "Wie ordnen sich DAX und Euro Stoxx 50 in den größeren Zusammenhang ein?", items: [
          { tag: "einordnung", text: "Nach dem Rekordlauf der Vorwoche (DAX-Tageshoch 27.001,67 Punkte am 13.11.) bewegen sich beide Indizes seit Freitag in einer engen Spanne knapp unter ihren Höchstständen; die eigentliche Richtungsentscheidung dürfte laut Berichten erst mit den US-Handelsdaten am Nachmittag und den Nvidia-Zahlen am Dienstag fallen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Futures und der Freitagsschluss an der Wall Street werden in Meldung 2 behandelt, Gold/Bitcoin/Euro/Renditen in Meldung 3, die Fed-Rede und die Dezember-Zinsdebatte in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ad-hoc-news.de: DAX am Montagmittag bei 26.732 Punkten – Ölpreis gibt nach", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-am-montagmittag-bei-26-732-punkten-oelpreis-gibt-nach/70520654" },
        { title: "finanzen.at: Börse Frankfurt – so performt der DAX am Montagmittag", url: "https://www.finanzen.at/nachrichten/aktien/boerse-frankfurt-so-performt-der-dax-am-montagmittag-1036768387" },
        { title: "finanzen.at: Stoxx-Handel – Euro Stoxx 50 legt den Rückwärtsgang ein", url: "https://www.finanzen.at/nachrichten/aktien/stoxx-handel-euro-stoxx-50-legt-den-rueckwartsgang-ein-1036768379" }
      ]
    },
    /* 2 MÄRKTE: US-FUTURES/FREITAGSSCHLUSS + NVIDIA */
    {
      id: "markets-us-futures-freitagsschluss-chipsektor-11-16", cats: ["markets"], when: "Schluss Fr 13.11.2026 · Futures Mo 16.11.2026 vor US-Handelsstart",
      headline: "US-Futures geben vor Nvidia-Zahlen leicht nach, Nvidia-Aktie fällt erneut unter 4 Billionen Dollar Marktkapitalisierung",
      sec30: "Nach dem gemischten Freitagsschluss (S&P 500 -0,40 % auf 7.561,67 Punkte, Nasdaq -0,91 % auf 25.136,27 Punkte, Dow +0,10 % auf 52.347,55 Punkte) zeigen die Futures am Montag vor US-Handelsstart erneut leichte Verluste, besonders bei Technologiewerten (Nasdaq-100-Futures rund -1,5 %). Die Nvidia-Aktie fiel laut CNBC am Montag um weitere rund 4 % und damit erneut unter eine Marktkapitalisierung von 4 Billionen Dollar, inmitten anhaltender Unsicherheit nach Jensen Huangs Rücktritt.",
      blocks: [
        { h: "Wie schlossen die US-Indizes am Freitag, und wie stehen die Futures am Montag?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel am Freitag um 0,40 % auf 7.561,67 Punkte, die Nasdaq Composite um 0,91 % auf 25.136,27 Punkte; der Dow Jones legte dagegen um 0,10 % auf 52.347,55 Punkte zu. Am Montag vor US-Handelsstart zeigten die Futures laut Yahoo Finance rund -0,6 % beim S&P 500 (auf etwa 7.536 Punkte) und rund -1,5 % bei den Nasdaq-100-Futures; die Dow-Futures bewegten sich mit rund -0,1 % kaum.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was ist mit der Nvidia-Aktie los?", items: [
          { tag: "fakt", text: "Die Nvidia-Aktie fiel am Montag laut CNBC um weitere rund 4 % auf etwa 157,65 Dollar und damit erneut unter eine Marktkapitalisierung von 4 Billionen Dollar. Grund ist laut Berichten die anhaltende Verunsicherung nach Jensen Huangs Rücktritt als CEO am 12.11.; die ersten Quartalszahlen unter Interims-CEO Colette Kress stehen für den 17./18.11. an.",
            ask: [{ label: "Mehr zu Huangs Rücktritt und den Kongressanhörungen", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Nasdaq-Futures deutlich stärker nachgeben als die Dow-Futures, passt zum Muster seit Huangs Rücktritt: Die Unsicherheit konzentriert sich bislang vor allem auf den Technologie- und Chipsektor, während breiter gestreute Indizes wie der Dow weniger betroffen sind. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "DAX und Euro Stoxx 50 in Meldung 1, Gold/Bitcoin/Euro/Renditen in Meldung 3, Nvidia und Anthropic ausführlich in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "Yahoo Finance: Stock market today, Monday, November 16 – Dow, S&P 500, Nasdaq, Nvidia, oil", url: "https://finance.yahoo.com/markets/live/stock-market-today-monday-november-16-dow-sp-500-nasdaq-nvidia-oil-091631084.html" },
        { title: "CNBC: Nvidia stock falls nearly 4% as scrutiny over Jensen Huang's exit continues", url: "https://www.cnbc.com/2026/11/16/nvidia-stock-price-jensen-huang.html" },
        { title: "Yahoo Finance: Dow, S&P 500, Nasdaq futures", url: "https://finance.yahoo.com/markets/stocks/articles/dow-p-500-nasdaq-futures-020421221.html" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/RENDITEN MONTAG */
    {
      id: "markets-gold-bitcoin-eurusd-renditen-montag-11-16", cats: ["markets"], when: "Stand Mo 16.11.2026, Vormittag",
      headline: "Gold fällt auf Mehr-als-Jahres-Tief, Bitcoin erholt sich leicht vom Wochenend-Crash, der Dollar bleibt stark",
      sec30: "Gold fiel am Montag um weitere 1,13 % auf rund 3.838 Dollar je Feinunze – den niedrigsten Stand seit über einem Jahr. Bitcoin erholte sich nach dem Absturz auf ein Vier-Monats-Tief von rund 62.000 Dollar in der Nacht zu Sonntag leicht auf rund 64.250 bis 64.600 Dollar, bleibt aber binnen eines Monats rund 17 % im Minus. Der Euro gab gegenüber dem Dollar weiter auf rund 1,1010 nach, die Rendite zehnjähriger US-Staatsanleihen verharrte bei rund 5,14 bis 5,15 %.",
      blocks: [
        { h: "Warum fällt Gold weiter?", items: [
          { tag: "fakt", text: "Gold fiel am Montag um 1,13 % auf rund 3.838 Dollar je Feinunze, nach bereits 3.882 Dollar am Freitagsschluss – laut Berichten der niedrigste Stand seit über einem Jahr.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }] }
        ]},
        { h: "Wie hat sich Bitcoin seit dem Wochenend-Crash entwickelt?", items: [
          { tag: "fakt", text: "Bitcoin war in der Nacht zu Sonntag auf ein Vier-Monats-Tief von rund 62.000 Dollar gefallen, nachdem binnen 24 Stunden mehr als 2 Mrd. Dollar an gehebelten Positionen zwangsliquidiert worden waren. Am Montagvormittag notierte die Kryptowährung wieder bei rund 64.250 bis 64.600 Dollar – eine leichte Erholung, aber binnen eines Monats weiterhin rund 17 % im Minus.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Wie entwickelten sich Euro und US-Rendite?", items: [
          { tag: "fakt", text: "Der Euro fiel weiter auf rund 1,1010 Dollar (-0,16 % ggü. Freitagabend); binnen eines Monats hat der Euro rund 1,84 %, binnen eines Jahres rund 5,05 % gegenüber dem Dollar verloren. Die Rendite zehnjähriger US-Staatsanleihen verharrte bei rund 5,14 bis 5,15 %.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold weiter fällt, während Bitcoin sich nur leicht erholt und der Dollar stark bleibt, passt zum Muster einer als zunehmend sicher geltenden Fed-Zinserhöhung im Dezember: Zinslose Anlagen wie Gold und Bitcoin werden tendenziell weniger gefragt, wenn die Zinsen steigen oder hoch bleiben. Bei Bitcoin kommen laut Berichten zusätzlich Abflüsse aus Krypto-ETFs und die Streichung von Bitcoin-Treasury-Firmen wie Strategy aus bestimmten Aktienindizes durch MSCI hinzu. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX/Euro Stoxx 50 in Meldung 1, US-Futures in Meldung 2, die Fed-Rede und die Dezember-Zinsdebatte in Meldung 4, die EZB in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "CNBC: Gold falls to over one-week low on firm dollar, Fed rate-hike bets", url: "https://www.cnbc.com/2026/11/12/gold-falls-to-over-one-week-low-on-firm-dollar-fed-rate-hike-bets.html" },
        { title: "MarketScreener: Gold hits over one-year low as firm dollar, Fed outlook weigh", url: "https://www.marketscreener.com/news/gold-hits-over-one-year-low-as-firm-dollar-fed-outlook-weigh-ce785edede81f123" },
        { title: "crypto.news: Why Bitcoin price fell to $62,000", url: "https://crypto.news/why-bitcoin-price-fell-62000/" },
        { title: "FX Leaders: Bitcoin price forecast – BTC holds $62,500 demand zone after $2bn liquidation flush", url: "https://www.fxleaders.com/news/2026/11/16/bitcoin-price-forecast-btc-holds-62500-demand-zone-after-2bn-liquidation-flush/" }
      ]
    },
    /* 4 WIRTSCHAFT: FED/WARSH/CPI/JOBS */
    {
      id: "fed-warsh-zinsdebatte-dezember-11-16", cats: ["economy"], when: "US-CPI-Veröffentlichung 10.11. · Warsh-Rede Mo 16.11., 12:00 ET · FOMC-Sitzung 8./9.12.2026",
      headline: "US-Kerninflation steigt den dritten Monat in Folge stärker als erwartet, Fed-Chef Kevin Warsh spricht vor Zinsentscheid im Dezember",
      sec30: "Die US-Verbraucherpreise (CPI) für Oktober stiegen laut Arbeitsministerium um 0,4 % gegenüber dem Vormonat (erwartet: 0,3 %); die Kernrate stieg mit 0,3 % den dritten Monat in Folge stärker als die erwarteten 0,2 %. Der Oktober-Arbeitsmarktbericht hatte zuvor mit 165.000 neuen Stellen (erwartet: 59.000) und einer Arbeitslosenquote von 4,1 % deutlich positiv überrascht. Fed-Chef Kevin Warsh, der Jerome Powell im Mai 2026 abgelöst hatte, sprach am Montagmittag (12:00 Uhr Ostküstenzeit) bei einer Produktivitätskonferenz der San-Francisco-Fed; am Terminmarkt gilt eine Zinserhöhung im Dezember je nach Quelle zwischen 88 und rund 100 % als eingepreist.",
      blocks: [
        { h: "Was zeigten die US-Verbraucherpreise für Oktober?", items: [
          { tag: "fakt", text: "Das Arbeitsministerium (BLS) veröffentlichte den Bericht am 10.11.2026. Die Gesamtrate der Verbraucherpreise stieg um 0,4 % gegenüber dem Vormonat (erwartet: 0,3 %), die Kernrate (ohne Lebensmittel und Energie) um 0,3 % – den dritten Monat in Folge stärker als die erwarteten 0,2 %. Eine Jahresrate wurde wegen einer durch den vorangegangenen Regierungsshutdown verursachten Datenlücke nicht ausgewiesen; sie dürfte nach Berichten implizit bei rund 4 % liegen.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Wie stark war der Arbeitsmarkt?", items: [
          { tag: "fakt", text: "Der Oktober-Arbeitsmarktbericht (veröffentlicht 6.11.) zeigte 165.000 neue Stellen gegenüber nur 59.000 erwarteten, eine Arbeitslosenquote von 4,1 % und ein Lohnwachstum von 3,1 % im Jahresvergleich – deutlich über den Erwartungen." }
        ]},
        { h: "Wer ist Kevin Warsh, und was sagte er?", items: [
          { tag: "fakt", text: "Kevin Warsh wurde vom US-Senat mit 54 zu 45 Stimmen bestätigt und am 22.5.2026 als Nachfolger von Jerome Powell zum Fed-Vorsitzenden vereidigt. Er sprach am Montag, 16.11.2026, um 12:00 Uhr Ostküstenzeit bei einer Produktivitätskonferenz der San-Francisco-Fed; laut Berichten gilt sein Auftritt als hawkish eingeordnet, da er im Umfeld der hohen Kerninflation stattfand.",
            ask: [{ label: "Warum erhöhen Notenbanken die Zinsen?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie reagierten weitere Fed-Vertreter, und wie hoch ist die eingepreiste Wahrscheinlichkeit?", items: [
          { tag: "position", text: "New-York-Fed-Chef John Williams sagte bei einem Alumni-Treffen der UC Berkeley am 12.11., die Wirtschaft sei stark, der Arbeitsmarkt werde weiter stärker, und die Fed habe noch Arbeit vor sich, um die Inflation zum 2-%-Ziel zurückzuführen. Chicago-Fed-Chef Austan Goolsbee sagte am 13.11., man sei „nicht auf einem Pfad zurück zu 2 %”; der Preisdruck habe sich über Energie hinaus auf Dienstleistungen und medizinische Versorgung ausgeweitet, mitbedingt durch die starke Nachfrage im Zuge des KI-Rechenzentren-Booms. Finanzminister Scott Bessent warnte dagegen weiter öffentlich davor, die Fed solle wegen eines durch den Nahost-Konflikt ausgelösten Energiepreisschocks nicht die Zinsen erhöhen – Berichte beschreiben die Positionen von Bessent und Goolsbee ausdrücklich als „geteilt”." },
          { tag: "fakt", text: "Die am Terminmarkt (CME FedWatch) eingepreiste Wahrscheinlichkeit einer Zinserhöhung im Dezember schwankt je nach Quelle und Abfragezeitpunkt deutlich: Eine Quelle vom 16.11. nennt rund 100 %, andere Quellen vom Wochenende nennen rund 88 bis 95 %. Übereinstimmend ist der Trend: Die Wahrscheinlichkeit ist seit den Oktober-Daten deutlich gestiegen.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Kerninflation den dritten Monat in Folge stärker steigt als erwartet, während der Arbeitsmarkt zugleich deutlich positiv überrascht, liefert der Fed nach dieser Lesart doppelte Argumente für eine Zinserhöhung im Dezember: Eine schwächere Wirtschaft würde eine Erhöhung erschweren, ein starker Arbeitsmarkt lässt dagegen mehr Spielraum. Der offene Widerspruch zwischen Bessent und Goolsbee zeigt zugleich, dass innerhalb der US-Regierung und der Fed unterschiedlich bewertet wird, wie stark der Nahost-bedingte Energiepreisschock die Kerninflation tatsächlich verzerrt." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1 bis 3, zur EZB-Zinsdebatte in Meldung 5, zur Bank of England und Eurozone-Inflation in Meldung 6.",
      terms: ["inflation", "kerninflation", "leitzins", "basispunkt"],
      followups: ["e:inflation-what", "e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "CNBC: October CPI report 2026 – inflation", url: "https://www.cnbc.com/2026/11/09/october-cpi-report-2026-inflation.html" },
        { title: "stockanalysis.com: Fed's Williams says more rate hikes are likely", url: "https://stockanalysis.com/news/fed-williams-more-rate-hikes-likely/" },
        { title: "WHBL: Bessent, Fed's Goolsbee divided on role of energy shock in inflation", url: "https://whbl.com/2026/11/13/us-treasury-chief-says-fed-should-not-hike-rates-over-energy-shock-tied-to-iran-war/" },
        { title: "The Motley Fool: There's now a 100% chance of a Fed rate hike in December", url: "https://www.fool.com/investing/2026/11/16/theres-now-100-chance-fed-rate-hike-in-december-thats-not-worst-news-for-wall-street/" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB/NAGEL/LAGARDE/REUTERS-UMFRAGE */
    {
      id: "ezb-nagel-lagarde-ruecktritt-reuters-umfrage-11-16", cats: ["economy"], when: "Nagel-Interview ca. 10.11. · Reuters-Umfrage veröffentlicht ca. 13.-14.11. · Lagarde-Rückzugsankündigung · EZB-Sitzung 17.12.2026",
      headline: "Reuters-Umfrage: Alle befragten Ökonomen erwarten EZB-Zinserhöhung im Dezember, Lagarde kündigt vorzeitigen Rückzug für Februar 2027 an",
      sec30: "Eine Reuters-Umfrage unter 71 Ökonomen zeigt, dass alle Befragten eine Anhebung des EZB-Einlagensatzes von 2,5 auf 2,75 % im Dezember erwarten; 46 von ihnen halten das für den voraussichtlichen Zinsgipfel. Bundesbank-Chef Joachim Nagel hatte eine solche Erhöhung zuvor als „ziemlich offensichtlich” nötig bezeichnet, EZB-Chefin Christine Lagarde deutete in ähnlicher Richtung an. Parallel kündigte Lagarde an, ihr Amt bereits am 7.2.2027 und damit rund acht Monate früher als regulär vorgesehen abzugeben, um vor der französischen Präsidentschaftswahl im April einen geordneten Nachfolgewechsel zu ermöglichen. Die Eurozone-Inflation stieg im Oktober laut Eurostat auf 4,0 % (September: 3,8 %), vor allem wegen Energiepreisen (+20,8 % im Jahresvergleich).",
      blocks: [
        { h: "Was zeigt die Reuters-Umfrage, und was sagten Nagel und Lagarde?", items: [
          { tag: "fakt", text: "Laut einer Reuters-Umfrage unter 71 Ökonomen erwarten alle Befragten eine Anhebung des EZB-Einlagensatzes von 2,5 auf 2,75 % im Dezember; 46 der 71 halten dies für den voraussichtlichen Höhepunkt des Zinszyklus, 25 rechnen mit einem weiteren Schritt im ersten Quartal 2027. Im Oktober hatten noch 64 von 73 befragten Ökonomen diese Einschätzung geteilt.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Wer sagte was?", items: [
          { tag: "position", text: "Bundesbank-Präsident Joachim Nagel sagte in einem Bloomberg-TV-Interview, eine weitere Zinserhöhung im Dezember sei „ziemlich offensichtlich” nötig, trotz etwas entlasteter Energiepreise. EZB-Chefin Christine Lagarde sagte, sofern es keine größeren neuen Entwicklungen gebe, sei die Richtung für den EZB-Rat „ziemlich klar” – ein Hinweis auf einen Zinsschritt im Dezember. EZB-Direktoriumsmitglied Isabel Schnabel sagte, sowohl Wachstums- als auch Inflationsrisiken tendierten derzeit „eindeutig nach oben”. Der französische Notenbankchef François Villeroy de Galhau mahnte dagegen zu Agilität und sah „keinen Grund”, für längere Zeit mit einer Zinserhöhung zu rechnen – ein vorsichtigerer Ton als bei Nagel und Schnabel." }
        ]},
        { h: "Was hat Lagarde zu ihrer Zukunft angekündigt?", items: [
          { tag: "fakt", text: "Christine Lagarde kündigte an, ihr Amt als EZB-Präsidentin bereits am 7.2.2027 abzugeben – rund acht Monate früher als der reguläre Ablauf im Oktober 2027 –, um vor der französischen Präsidentschaftswahl im April 2027 einen geordneten Übergang zu ermöglichen. Als mögliche Nachfolger werden in Berichten unter anderem der niederländische Notenbankchef Klaas Knot, der spanische Notenbankchef Pablo Hernández de Cos sowie Bundesbank-Chef Nagel genannt; eine Einigung der Eurogruppe liegt noch nicht vor." }
        ]},
        { h: "Wie hat sich die Eurozone-Inflation entwickelt?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone stieg laut Eurostat im Oktober auf 4,0 %, nach 3,8 % im September – getrieben vor allem durch Energiepreise, die im Jahresvergleich um 20,8 % zulegten.",
            ask: [{ label: "Was sind Erzeugerpreise und Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich nahezu alle von Reuters befragten Ökonomen einig sind über eine EZB-Zinserhöhung im Dezember, während einzelne Ratsmitglieder wie Villeroy de Galhau vorsichtiger argumentieren, zeigt: Der Zinsschritt selbst gilt als nahezu sicher, offen bleibt vor allem, wie viele weitere Schritte danach folgen. Lagardes vorzeitiger Rückzug fällt in eine Phase, in der die EZB mitten in einer Zinswende steht – ihr Nachfolger würde diese Entscheidung voraussichtlich mitgestalten müssen." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte und Fed-Chef Warsh in Meldung 4, zur Bank of England und deutschen Inflation in Meldung 6.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "finanznachrichten.de: Ökonomen sind sich einig – EZB wird die Zinsen im Dezember auf 2,75 % anheben, wie eine Reuters-Umfrage zeigt", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70111696-oekonomen-sind-sich-einig-ezb-wird-die-zinsen-im-dezember-auf-2-75-anheben-wie-eine-reuters-umfrage-zeigt-545.htm" },
        { title: "cash.ch: Währungshüter Nagel – EZB-Zinserhöhung im Dezember ist aus heutiger Sicht sehr wahrscheinlich nötig", url: "https://www.cash.ch/news/top-news/wahrungshuter-nagel-ezb-zinserhohung-im-dezember-ist-aus-heutiger-sicht-sehr-wahrscheinlich-notig-982169" },
        { title: "Tagesspiegel (dpa): Vorzeitiger Rückzug – Lagarde verlässt EZB im Februar, will Redefreiheit", url: "https://www.tagesspiegel.de/wirtschaft/dpa-vorzeitiger-ruckzug-lagarde-verlasst-ezb-im-februar-will-redefreiheit-16214254.html" },
        { title: "Eurostat: Euro area annual inflation", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-04112026-ap" }
      ]
    },
    /* 6 WIRTSCHAFT: BANK OF ENGLAND/DEUTSCHE INFLATION */
    {
      id: "bankofengland-eurozone-inflation-11-16", cats: ["economy"], when: "BoE-Zinserhöhung 5.11.2026 · Destatis-Inflationsdaten Oktober · nächste BoE-Sitzung 17.12.2026",
      headline: "Bank of England erhöht Leitzins erstmals seit über drei Jahren, deutsche Inflation geht im Oktober auf 2,8 Prozent zurück",
      sec30: "Die Bank of England hatte ihren Leitzins am 5.11.2026 um 25 Basispunkte auf 4,0 % angehoben – die erste Erhöhung seit mehr als drei Jahren, mit einer Abstimmung von 8 zu 1 im Geldpolitik-Ausschuss. Gouverneur Andrew Bailey nannte eine zweite Erhöhung „wahrscheinlicher als unwahrscheinlich”, falls die hohen Energiekosten anhalten, und erwartet einen Inflationshöhepunkt von 4,9 % im zweiten Quartal 2027. In Deutschland ging die Inflationsrate im Oktober nach endgültigen Zahlen des Statistischen Bundesamts dagegen auf 2,8 % zurück (September: 3,3 %), bei einer Kernrate von 2,1 % und weiterhin deutlich steigenden Energiepreisen (+12,2 % im Jahresvergleich).",
      blocks: [
        { h: "Was hat die Bank of England entschieden?", items: [
          { tag: "fakt", text: "Die Bank of England erhöhte ihren Leitzins am 5.11.2026 um 25 Basispunkte auf 4,0 % – die erste Erhöhung seit August 2023. Acht Mitglieder des Geldpolitik-Ausschusses stimmten dafür, ein Mitglied hätte lieber 50 Basispunkte auf 4,25 % gesehen. Die nächste Entscheidung fällt am 17.12.2026.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was sagte Gouverneur Bailey?", items: [
          { tag: "position", text: "BoE-Gouverneur Andrew Bailey sagte, eine zweite Zinserhöhung sei „wahrscheinlicher als unwahrscheinlich”, falls die hohen Energiekosten anhielten; der aktuelle Schritt solle aber nicht als Beginn einer langen Erhöhungsserie verstanden werden. Ohne eine Deeskalation im Nahen Osten sei es nach seiner Einschätzung wohl aber auch nicht der letzte Schritt. Die Bank of England erwartet laut Bailey einen Inflationshöhepunkt von 4,9 % im zweiten Quartal 2027 – ein Anstieg, der seiner Einschätzung nach „zu diesem Zeitpunkt bereits weitgehend feststeht”, selbst bei einer raschen Deeskalation." }
        ]},
        { h: "Wie hat sich die deutsche Inflation entwickelt?", items: [
          { tag: "fakt", text: "Die deutsche Inflationsrate ging im Oktober 2026 laut endgültigen Zahlen des Statistischen Bundesamts (Destatis) auf 2,8 % zurück, nach 3,3 % im September; die Kernrate (ohne Lebensmittel und Energie) lag bei 2,1 %. Die Energiepreise stiegen im Jahresvergleich weiterhin um 12,2 %.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Inflation in Deutschland im Oktober zurückging, während sie in der gesamten Eurozone auf 4,0 % stieg und die Bank of England sogar einen Höhepunkt von 4,9 % für 2027 erwartet, zeigt deutliche Unterschiede zwischen einzelnen Ländern innerhalb der allgemein durch den Energiepreisschock getriebenen Entwicklung. Für die EZB-Entscheidung im Dezember ist vor allem die Entwicklung in der gesamten Eurozone maßgeblich, nicht die in einem einzelnen Mitgliedsland." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte in Meldung 4 und zur EZB-Zinsdebatte sowie Lagardes Rückzug in Meldung 5.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:central-banks-why", "e:inflation-what", "e:inflation-expectations"],
      sources: [
        { title: "CNBC: Bank of England raises interest rates", url: "https://www.cnbc.com/2026/11/05/interest-rates-inflation-uk.html" },
        { title: "Bloomberg: Bailey says second BoE hike more likely than not if war goes on", url: "https://www.bloomberg.com/news/articles/2026-11-05/bailey-says-second-boe-hike-more-likely-than-not-if-war-goes-on" },
        { title: "Destatis: Pressemitteilung – Inflationsrate im Oktober 2026 bei 2,8 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/11/PD26_392_611.html" },
        { title: "euronews: Eurozone inflation hits 4% – which countries saw prices jump the most", url: "https://www.euronews.com/2026/11/04/eurozone-inflation-hits-4-which-countries-saw-prices-jump-the-most" }
      ]
    },
    /* 7 DEUTSCHLAND: HAUSHALT/STROMSTEUER */
    {
      id: "bundeshaushalt-stromsteuer-koalitionsausschuss-11-16", cats: ["germany"], when: "Haushaltsausschuss-Billigung Fr 13.11.2026 · Koalitionsausschuss zur Stromsteuer angesetzt für Di 17.11.2026 · Bundestags-Schlussabstimmung angesetzt für Fr 27.11.2026",
      headline: "Merz kündigt für Dienstag eine Einigung zur vollständigen Stromsteuersenkung an, Bundestag stimmt Ende November abschließend über den Haushalt 2027 ab",
      sec30: "Nachdem der Haushaltsausschuss den Bundeshaushalt 2027 (122,97 Mrd. Euro Nettokreditaufnahme) bereits am Freitag gebilligt hatte, kündigte Bundeskanzler Friedrich Merz am Montag an, der Koalitionsausschuss werde sich am Dienstag, 17.11., auf eine vollständige Senkung der Stromsteuer auf den EU-Mindestsatz einigen – auch für Privathaushalte. CSU-Chef Markus Söder nannte die Senkung eine „Frage der Glaubwürdigkeit”, Vizekanzler Lars Klingbeil zeigte sich grundsätzlich offen, verlangt aber eine Gegenfinanzierung. Die abschließende Bundestagsberatung über den Gesamthaushalt ist für die Woche vom 24. bis 27.11. angesetzt, die namentliche Schlussabstimmung für Freitag, 27.11.",
      blocks: [
        { h: "Was wurde bereits beschlossen, und was steht noch aus?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags billigte am Freitag, 13.11.2026, den Bundeshaushalt 2027 mit einer Nettokreditaufnahme von 122,97 Mrd. Euro im Kernhaushalt bei Gesamtausgaben von rund 560,9 Mrd. Euro. Die im Koalitionsvertrag zugesagte Stromsteuersenkung ist darin nicht enthalten; darüber soll der Koalitionsausschuss am Dienstag, 17.11.2026, entscheiden. Die abschließende zweite und dritte Lesung im Bundestag ist für die Woche vom 24. bis 27.11.2026 angesetzt, mit der namentlichen Schlussabstimmung am Freitag, 27.11.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Was würde sich bei der Stromsteuer konkret ändern?", items: [
          { tag: "position", text: "Bundeskanzler Friedrich Merz sagte am Montag, 16.11., man werde sich „morgen” – also am Dienstag – einigen; Ziel sei eine vollständige Senkung der Stromsteuer 2027 auf den EU-Mindestsatz, auch für Privathaushalte, nicht nur für Unternehmen. Die Beratungen sollten „relativ kurz” ausfallen, weil die Zahlen bereits am Wochenende zwischen den Koalitionspartnern abgeglichen worden seien.",
            ask: [{ label: "Was ist die Umlage/Stromsteuer?", ref: "t:umlage" }] }
        ]},
        { h: "Wer unterstützt eine schnelle Einigung, und womit begründet er das?", items: [
          { tag: "position", text: "CSU-Chef Markus Söder bezeichnete die Stromsteuersenkung und einen Ausgleich der kalten Progression als „eine Frage der Glaubwürdigkeit” der Koalition. Vizekanzler Lars Klingbeil (SPD) zeigte sich grundsätzlich offen für die Senkung, verlangt dafür aber eine Gegenfinanzierung, um sie nicht über neue Schulden zu finanzieren." }
        ]},
        { h: "Welche Spannungen werden in der Koalition diskutiert?", items: [
          { tag: "einordnung", text: "Berichte beschreiben erheblichen Unmut in der Unionsfraktion, weil aus Sicht vieler Abgeordneter die SPD beim Haushaltskompromiss der Vorwoche zentrale Punkte durchsetzen konnte, während die Union bislang bei der Stromsteuer leer ausging; mehrere Unionspolitiker warnten laut Berichten vor einem Glaubwürdigkeitsverlust der Koalition, falls keine Einigung gelingt. Ein Teil des diskutierten Kompromisspakets soll auch eine Verschiebung der geplanten Zuckersteuer auf 2028 umfassen." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Gelingt die von Merz angekündigte Einigung am Dienstag, könnte die Stromsteuersenkung laut Berichten noch per Änderungsantrag in die Bundestags-Schlussberatung vom 24. bis 27.11. eingebracht werden; das Zeitfenster dafür gilt als eng. Ob und in welcher Höhe Verbraucher und Unternehmen 2027 tatsächlich von einer niedrigeren Stromsteuer profitieren, bleibt bis zu dieser Einigung offen." }
        ]}
      ],
      reaction: "Mehr zur Rentenreform, zur Bundespräsidentschaftskandidatur und zu aktuellen Umfragen in Meldung 8.",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "ZDFheute: Haushalt – Haushaltsausschuss billigt Etat, Union und SPD", url: "https://www.zdfheute.de/politik/deutschland/haushalt-haushaltsausschuss-bundestag-union-spd-100.html" },
        { title: "onvista (dpa): Merz – Koalition wird am Dienstag Absenkung der Stromsteuer beschließen", url: "https://www.onvista.de/news/2026/11-16-merz-koalition-wird-am-dienstag-absenkung-der-stromsteuer-beschliessen-0-20-26576847" },
        { title: "Tagesspiegel (dpa): Merz stellt vollständige Senkung der Stromsteuer in Aussicht", url: "https://www.tagesspiegel.de/politik/dpa-union-merz-stellt-vollstandige-senkung-der-stromsteuer-in-aussicht-16289982.html" },
        { title: "Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" }
      ]
    },
    /* 8 DEUTSCHLAND: RENTE/BUNDESPRÄSIDENTSCHAFT/UMFRAGEN */
    {
      id: "rentenreform-bundespraesidentschaft-umfragen-11-16", cats: ["germany"], when: "Aigner-Nominierung 9.11. · AfD-Gegenkandidat Berthold · ZDF-Politbarometer 13.11. · INSA-Umfrage 14.11. · Rentenreform laufend",
      headline: "AfD nominiert Fußball-Weltmeister Thomas Berthold als Gegenkandidaten zu Ilse Aigner, zwei Umfragen sehen die AfD weiter deutlich vor der Union",
      sec30: "Nachdem CDU/CSU am 9.11. die bayerische Landtagspräsidentin Ilse Aigner als Kandidatin für das Amt der Bundespräsidentin nominiert hatten, benannte die AfD den parteilosen früheren Fußball-Weltmeister von 1990, Thomas Berthold, als Gegenkandidaten für die Wahl am 30.1.2027. Das ZDF-Politbarometer (13.11., Befragung 10.-12.11.) sah die AfD bei 28 % und die Union bei 22 %; die INSA-Umfrage (14.11., Befragung 9.-13.11.) sah die AfD ebenfalls bei 28 %, die Union aber nur bei 19 %. Bei der Rentenreform bezeichnete Arbeitsminister Alexander Schweitzer (SPD) den Gesetzentwurf weiterhin als „zu 95 Prozent fertig”; strittig bleibt die von der Alterssicherungskommission empfohlene Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren.",
      blocks: [
        { h: "Wer tritt bei der Bundespräsidentschaftswahl an?", items: [
          { tag: "fakt", text: "Der CDU-Bundesvorstand nominierte am 9.11.2026 die bayerische Landtagspräsidentin Ilse Aigner (CSU) als gemeinsame Kandidatin von CDU und CSU; die Wahl durch die Bundesversammlung ist für den 30.1.2027 angesetzt. Die AfD benannte danach den parteilosen früheren Fußballnationalspieler und Weltmeister von 1990, Thomas Berthold, als ihren Kandidaten – laut AfD-Strategie bewusst ohne Parteibuch.",
            ask: [{ label: "Mehr zum Bundeshaushalt und der Koalition", ref: "s:7" }] }
        ]},
        { h: "Was zeigen die aktuellen Umfragen?", items: [
          { tag: "fakt", text: "Das ZDF-Politbarometer vom 13.11.2026 (1.297 Befragte, Erhebung 10.-12.11.) sah die AfD bei 28 % (+2 Punkte ggü. der Vorerhebung), die Union bei 22 % (-1), die Grünen bei 15 % (+2), die SPD bei 13 % (-1), die Linke bei 10 % (-1) und die FDP bei 3 %. Die am 14.11. veröffentlichte INSA-Umfrage (1.204 Befragte, Erhebung 9.-13.11.) sah die AfD ebenfalls bei 28 %, die Union aber nur bei 19 %, die Grünen bei 15 %, die SPD bei 14 %, die Linke bei 10 %, die FDP bei 5 % und das BSW bei 3 %.",
            ask: [{ label: "Hätte die Koalition laut solchen Umfragen eine Mehrheit?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie ist der Stand bei der Rentenreform?", items: [
          { tag: "fakt", text: "Arbeitsminister Alexander Schweitzer (SPD) bezeichnete den Gesetzentwurf zur Rentenreform weiterhin als „zu 95 Prozent fertig”; ein offizieller Referentenentwurf lag auch am 16.11. noch nicht vor. Die Bundesregierung will wesentliche Teile noch vor Weihnachten 2026 ins Kabinett bringen.",
            ask: [{ label: "Was ist die Rente mit 63?", ref: "e:rente-basics" }] }
        ]},
        { h: "Wer unterstützt welche Position bei der Rente mit 63, und womit begründet er sie?", items: [
          { tag: "position", text: "Schweitzer sagte, nichts von dem, was auf dem Tisch liege, werde besser, wenn es länger liegen bleibe, und zeigte sich zuversichtlich, einen Kompromiss zu finden – eine zurückhaltendere Position als Kanzler Merz, der auf eine Umsetzung der Kommissionsempfehlungen (also die Abschaffung) drängt. Unions-Fraktionschef Thorsten Frei lehnt laut Berichten einen Kompromiss ab, der an der geplanten Abschaffung nichts ändert. Verdi-Chef Frank Werneke forderte dagegen, die abschlagsfreie Rente nach 45 Beitragsjahren beizubehalten und das Rentenniveau von 48 % über 2031 hinaus zu stabilisieren; die Abschaffung würde nach seinen Angaben rund 10 Mrd. Euro einsparen und mehr als 250.000 Menschen pro Jahrgang betreffen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich Union, SPD und Grüne bei der eher repräsentativen Bundespräsidentschaftskandidatur auf eine gemeinsame Kandidatin verständigen können, während sich die Umfragewerte für die Koalitionsparteien gleichzeitig verschlechtern und bei der Rentenreform weiterhin keine Einigung zwischen SPD-Arbeitsminister und Teilen der Union vorliegt, zeigt erneut zwei unterschiedliche Ebenen: Übereinstimmung bei einer repräsentativen Personalfrage, offene Konflikte bei konkreten Sachthemen wie Rente und – siehe Meldung 7 – Stromsteuer." }
        ]}
      ],
      reaction: "Mehr zum Bundeshaushalt 2027 und zur Stromsteuer in Meldung 7.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:rente-basics", "e:haushalt-basics"],
      sources: [
        { title: "CDU: Ilse Aigner – Bundespräsidentin mit Würde und Herz", url: "https://www.cdu.de/aktuelles/cdu-deutschlands/ilse-aigner-kandidatin-fuer-das-amt-der-bundespraesidentin-und-cdu-bundeskanzler-friedrich-merz/" },
        { title: "kurierverlag.de: Bundespräsident – AfD nominiert Thomas Berthold gegen Ilse Aigner", url: "https://www.kurierverlag.de/politik/bundespraesident-afd-nominiert-thomas-berthold-gegen-ilse-aigner-zr-94590798.html" },
        { title: "dawum.de: ZDF-Politbarometer (Forschungsgruppe Wahlen), 13.11.2026", url: "https://dawum.de/Bundestag/Forschungsgruppe_Wahlen/2026-11-13/" },
        { title: "dawum.de: INSA-Umfrage, 14.11.2026", url: "https://dawum.de/Bundestag/INSA/2026-11-14/" },
        { title: "ZDFheute: Rente – Frührente, Verdi, Schweitzer", url: "https://www.zdfheute.de/politik/deutschland/rente-reform-fruehrente-verdi-schweitzer-100.html" }
      ]
    },
    /* 9 GEOPOLITIK: TRUMP-XI-PUTIN-GIPFEL/SELENSKYJ */
    {
      id: "trump-xi-putin-gipfel-shenzhen-zelensky-11-16", cats: ["world", "geo"], when: "Gipfel angesetzt 19.11.2026 (APEC 18.-19.11. in Shenzhen) · Bulgarien-Ankündigung 13.11.",
      headline: "China bestätigt erstes Dreiertreffen von Xi, Trump und Putin am 19.11., Selenskyj warnt vor einem „Jalta-2.0”-Moment",
      sec30: "China hat offiziell bestätigt, dass sich Xi Jinping, Donald Trump und Wladimir Putin am 19.11.2026 am Rande des APEC-Gipfels (18.-19.11.) in Shenzhen zu einem ersten trilateralen Treffen zusammenfinden – dem ersten dieser Art überhaupt. Eine offizielle Tagesordnung wurde nicht genannt; Berichten zufolge sollen globale Konflikte, Künstliche Intelligenz und nukleare Rüstungskontrolle besprochen werden. Die Ukraine ist nicht eingeladen; Präsident Selenskyj warnte, das Treffen drohe ein „Jalta-2.0”-Moment zu werden, bei dem über Einflusssphären entschieden werde, ohne die direkt betroffenen Staaten einzubeziehen.",
      blocks: [
        { h: "Was ist für den 19.11. in Shenzhen geplant?", items: [
          { tag: "fakt", text: "China bestätigte offiziell, dass Xi Jinping, Donald Trump und Wladimir Putin am 19.11.2026 am Rande des APEC-Gipfels (18.-19.11.) in Shenzhen ihr erstes trilaterales Treffen abhalten werden – das erste Treffen dieser drei Staats- und Regierungschefs in dieser Konstellation überhaupt. Eine offizielle Tagesordnung wurde nicht veröffentlicht.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Warum ist das Treffen wichtig, und wer ist beteiligt?", items: [
          { tag: "einordnung", text: "Berichten zufolge sollen bei dem Treffen globale Konflikte, Künstliche Intelligenz und ein mögliches nukleares Rüstungskontrollabkommen besprochen werden; eine Einigung zur Ukraine ist nicht ausgeschlossen, aber nicht bestätigt. Beteiligt sind mit den USA, China und Russland drei der militärisch und wirtschaftlich einflussreichsten Staaten der Welt – ohne direkte Beteiligung der Ukraine oder der EU." }
        ]},
        { h: "Wie reagiert die Ukraine auf das Treffen?", items: [
          { tag: "position", text: "Präsident Selenskyj warnte, ein solches Treffen zwischen Russland, China und den USA würde „nur das Gegenteil bewirken” und Putin ermutigen, den Krieg fortzusetzen; er sprach von der Gefahr eines „Jalta-2.0”-Moments, bei dem Einflusssphären unter Großmächten aufgeteilt würden, ohne die direkt betroffenen Staaten einzubeziehen. Zu einem von US-Vertretern ins Spiel gebrachten neuen europäischen Sicherheitsrahmen sagte Selenskyj, dieser könne Putin begünstigen; Putins Wunsch, Grenzen in Europa zu verändern, sei „eine Tatsache”. Die Reihenfolge müsse stattdessen sein: Waffenstillstand, Kriegsende, dann Sicherheitsgarantien für die Ukraine." }
        ]},
        { h: "Welcher historische Hintergrund und welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Bulgarien hatte am 13.11. beim Gipfel der Europäischen Politischen Gemeinschaft in Dublin angekündigt, keine Waffen und Munition aus eigenen Armeebeständen mehr an die Ukraine zu liefern und sich nicht an einer neuen EU-Finanzierungsrunde zu beteiligen; als Begründung nannte Ministerpräsident Rumen Radew ein laufendes EU-Verfahren wegen eines übermäßigen Haushaltsdefizits sowie Engpässe bei eigenen Reserven. Trilaterale Gespräche zwischen den USA, der Ukraine und Russland hatten bereits am 10./11.11. stattgefunden – die ersten seit Februar 2026 –, unter Beteiligung der US-Unterhändler Steve Witkoff und Jared Kushner.",
            ask: [{ label: "Mehr zu Iran, Hormus und dem Ölpreis", ref: "s:10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mit Bulgarien ein Nato- und EU-Mitgliedstaat eigene Waffenlieferungen an die Ukraine einstellt, während gleichzeitig ein erstes Dreiertreffen von Trump, Xi und Putin über mögliche Ukraine-Fragen verhandelt wird, deutet laut Beobachtern auf eine mögliche Verschiebung der Entscheidungsebene hin zu Gesprächen zwischen Großmächten – eine Entwicklung, die europäische Staaten nach Berichten mit Sorge beobachten, weil sie eine Einbindung in künftige Sicherheitsentscheidungen fordern." }
        ]}
      ],
      reaction: "Mehr zu Iran, der Straße von Hormus und dem Ölpreis in Meldung 10 und 15.",
      terms: [],
      followups: ["e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "Tribune India: China confirms first Xi-Trump-Putin summit on November 19", url: "https://www.tribuneindia.com/news/world/china-confirms-first-xi-trump-putin-summit-on-november-19/" },
        { title: "Anadolu Agency: Kremlin says Putin, Xi, Trump to hold trilateral meeting in Shenzhen on Nov. 19", url: "https://www.aa.com.tr/en/eurasia/kremlin-says-putin-xi-trump-to-hold-trilateral-meeting-in-shenzhen-on-nov-19/4125290" },
        { title: "PBS: Zelenskyy says a new European security framework floated by U.S. could benefit Putin", url: "https://www.pbs.org/newshour/world/zelenskyy-says-a-new-european-security-framework-floated-by-u-s-could-benefit-putin" },
        { title: "Ukrinform: Bulgaria halts arms and ammunition supplies to Ukraine from its military stockpiles", url: "https://www.ukrinform.net/rubric-polytics/4184679-bulgaria-halts-arms-and-ammunition-supplies-to-ukraine-from-its-military-stockpiles.html" }
      ]
    },
    /* 10 GEOPOLITIK: IRAN/HORMUZ/CENTCOM */
    {
      id: "iran-hormuz-centcom-dementi-vance-rezaei-11-16", cats: ["world", "geo"], when: "Iranische Minen-Behauptung Sa 14.11. · CENTCOM-Dementi · Vance-Rezaei-Bericht dementiert",
      headline: "US-Zentralkommando weist iranische Behauptungen über verminte Öltanker in der Straße von Hormus als falsch zurück",
      sec30: "Irans Marine und die Revolutionsgarden hatten am Samstag, 14.11., gemeldet, mehrere Öltanker seien in der Straße von Hormus nach Minentreffern in Brand geraten. Das US-Zentralkommando (CENTCOM) wies diese Darstellung ausdrücklich als „falsch” zurück: Alle international anerkannten Hauptdurchfahrtsrouten seien von US-Streitkräften geräumt und blieben frei, Tausende Handelsschiffe nutzten sie weiterhin sicher. Parallel dementierte Iran Berichte über ein geplantes Treffen zwischen US-Vizepräsident JD Vance und Sicherheitsratschef Mohsen Rezaei in Doha als „reine Lüge”.",
      blocks: [
        { h: "Was behauptete Iran, und was sagt CENTCOM dazu?", items: [
          { tag: "unbestaetigt", text: "Irans Marine und die Revolutionsgarden erklärten am Samstag, 14.11.2026, mehrere Öltanker seien nach dem Auftreffen auf Seeminen in der Straße von Hormus in Brand geraten; die betroffenen Schiffe hätten demnach Tracking-Systeme abgeschaltet und eine „nicht autorisierte Route” genutzt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Das US-Zentralkommando (CENTCOM) wies die iranischen Minen-Behauptungen explizit als „falsch” zurück und erklärte, alle international anerkannten Hauptdurchfahrtsrouten seien von US-Streitkräften von Seeminen befreit worden und blieben frei; Tausende Handelsschiffe nutzten sie weiterhin sicher. Bei einem früheren, ähnlich gelagerten Fall erklärte CENTCOM sogar, ein angeblich durch eine Mine getroffener Tanker sei tatsächlich zweimal von iranischen Waffen getroffen worden, und bezeichnete die Behauptung der Revolutionsgarden als „ein weiteres Beispiel ihrer Lügen und Einschüchterungsversuche”." }
        ]},
        { h: "Warum ist das wichtig, und wer ist beteiligt?", items: [
          { tag: "einordnung", text: "Die Straße von Hormus ist eine der wichtigsten Öltransportrouten der Welt; wiederholte, nicht unabhängig bestätigte iranische Behauptungen über Minentreffer stehen damit im Widerspruch zu einer expliziten Gegendarstellung des US-Militärs, das für die Sicherung der Durchfahrtsrouten mitverantwortlich ist. Beteiligt sind neben Iran und den USA auch die zahlreichen Reedereien, deren Tanker die Straße täglich passieren." }
        ]},
        { h: "Was ist mit dem angeblichen Vance-Rezaei-Treffen?", items: [
          { tag: "unbestaetigt", text: "Laut dem türkischen Geheimdienstchef Ibrahim Kalin und einem WSJ-Bericht soll US-Vizepräsident JD Vance ein Treffen mit Irans Sicherheitsratschef Mohsen Rezaei in Doha in Erwägung ziehen; weder Washington, Teheran noch Doha haben dies offiziell bestätigt. Rezaei selbst nannte die Berichte in einem Interview mit Al-Mayadeen eine „reine Lüge” und erklärte, Irans Position bleibe unverändert – Gespräche seien erst möglich, wenn die USA konkrete Schritte gemäß den von Iran genannten sieben Bedingungen unternähmen.",
            ask: [{ label: "Mehr zum Ölmarkt und den Preisfolgen", ref: "s:15" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Trotz der gemeldeten Tanker-Zwischenfälle und des anschließenden CENTCOM-Dementis gab der Brent-Preis am Montag leicht nach, auf rund 95 Dollar; als Hintergrund nennen Berichte vor allem ein von der IEA erwartetes globales Angebotsüberangebot, weniger die Geschehnisse in der Straße von Hormus.",
            ask: [{ label: "Wie wirkt der Ölpreis auf die Inflation?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz neuer, diesmal sogar von einer Seite ausdrücklich dementierter Vorfallmeldungen kaum reagiert, deutet darauf hin, dass Märkte wiederholte, unbestätigte iranische Minen-Behauptungen inzwischen deutlich geringer gewichten als das globale Angebotsbild und die anstehende OPEC+-Entscheidung Ende November." }
        ]}
      ],
      reaction: "Mehr zu Ölpreis, OPEC+ und deutschen Gasspeichern in Meldung 15, zum geplanten Trump-Xi-Putin-Gipfel in Meldung 9.",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:oil-inflation"],
      sources: [
        { title: "Middle East Eye: Iran says three tankers hit by mines in Hormuz, catch fire", url: "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-three-tankers-hit-mines-hormuz-fire" },
        { title: "gCaptain: US rejects Iran's mine claim as Hormuz shipping threat remains severe", url: "https://gcaptain.com/u-s-rejects-irans-mine-claim-as-hormuz-shipping-threat-remains-severe/" },
        { title: "Gulf News: US military rejects Iranian mine strike claims, says Hormuz transit lanes remain clear", url: "https://gulfnews.com/world/mena/us-military-rejects-iranian-mine-strike-claims-says-hormuz-transit-lanes-remain-clear-1.500727648" },
        { title: "ABNA: Iran denies reports of Rezaei-Vance meeting in Doha", url: "https://en.abna24.com/news/1888740/Iran-denies-reports-of-Rezaei-Vance-meeting-in-Doha" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL ERHOLUNG/GOLDMAN */
    {
      id: "rheinmetall-erholung-goldman-kursziel-11-16", cats: ["defence"], when: "Kurstief Fr 13.11. · Erholung Mo 16.11. · Goldman-Kurszielsenkung",
      headline: "Rheinmetall-Aktie erholt sich am Montag, Goldman Sachs senkt Kursziel trotz Kaufempfehlung deutlich",
      sec30: "Nach dem Kurstief vom Freitag (742,50 Euro, niedrigster Stand seit 21 Monaten) erholte sich die Rheinmetall-Aktie am Montag um rund 3,6 bis 3,9 % auf etwa 794 bis 796 Euro. Goldman Sachs senkte das Kursziel von 2.100 auf 1.350 Euro, beließ die Einstufung aber bei „Buy”. Auf Wochensicht liegt die Aktie weiterhin rund 6 % im Minus, seit Jahresbeginn rund 49 %.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie seit Freitag entwickelt?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie war am Freitag, 13.11.2026, zeitweise auf ein 52-Wochen-Tief von 742,50 Euro gefallen. Am Montag erholte sie sich um rund 3,6 bis 3,9 % auf etwa 794 bis 796 Euro; auf Wochensicht bleibt sie damit rund 6 % im Minus, seit dem Januar-Rekordhoch von 1.966 Euro rund 49 bis 60 % niedriger.",
            ask: [{ label: "Was war der Hintergrund der jüngsten Gewinnwarnung?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Wie reagieren Analysten?", items: [
          { tag: "fakt", text: "Goldman Sachs senkte sein Kursziel für Rheinmetall von 2.100 auf 1.350 Euro, beließ die Einstufung aber bei „Buy” – ein Hinweis darauf, dass die Bank trotz der deutlichen Zielsenkung von weiterem Aufwärtspotenzial ausgeht.",
            ask: [{ label: "Mehr zu RENK, Hensoldt und der SAFE-Finanzierung", ref: "s:12" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Aktie nach dem Kurstief vom Freitag erholt, während Goldman Sachs das Kursziel gleichzeitig deutlich kappt, zeigt unterschiedliche Zeithorizonte: Kurzfristig scheinen einzelne Anleger das niedrigere Niveau zu Käufen zu nutzen, während Analysten ihre längerfristigen Erwartungen an die bereits mehrfach gesenkten Unternehmensprognosen anpassen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Mehr zu RENK, Hensoldt, dem Bund-Einstieg bei KNDS und der EU-Verteidigungsfinanzierung SAFE in Meldung 12.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "ms-aktuell.de: Rheinmetall-Aktie – Jahrestief 13.11.2026", url: "https://ms-aktuell.de/welt/rheinmetall-aktie-jahrestief-13-11-2026/" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie vorbörslich", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/rheinmetall-aktie-vorboerslich-761-15-euro-0-57-prozent-tiefer/70519577" },
        { title: "boerse-express: Rheinmetall – Berlin hält den Etat, Goldman kappt das Kursziel", url: "https://www.boerse-express.com/news/articles/rheinmetall-berlin-haelt-den-etat-goldman-kappt-das-kursziel-963567" }
      ]
    },
    /* 12 DEFENCE: KNDS/SAFE/NATO */
    {
      id: "knds-safe-nato-verteidigungsausgaben-11-16", cats: ["defence", "deals"], when: "KNDS-Bericht 10.11. (Vertrag noch nicht unterschrieben) · SAFE-Stand 7.11. · Hensoldt-Zahlen 5.11. · RENK-Zahlen 12.11.",
      headline: "Bund-Einstieg bei KNDS weiterhin nicht unterschrieben, Hensoldt und RENK melden Rekord-Auftragsbestände",
      sec30: "Laut Handelsblatt-Bericht vom 10.11. zahlt der Bund rund 6,6 Mrd. Euro für einen 50-Prozent-Anteil an KNDS, abgeleitet aus einer Vor-Börsengang-Bewertung von 11,2 Mrd. Euro plus 1 Mrd. Euro Aufschlag; ein unterzeichneter Vertrag lag auch am 16.11. nicht vor. Hensoldt meldete für die ersten neun Monate 2026 einen um 76,7 % gestiegenen Auftragseingang und einen Rekord-Auftragsbestand von 10.367 Mio. Euro, RENK einen Rekord-Auftragsbestand von 7,6 Mrd. Euro. Bei der EU-Verteidigungsfinanzierung SAFE haben alle 19 teilnehmenden Staaten Kreditvereinbarungen über insgesamt 21,3 Mrd. Euro in der zweiten Runde genehmigt, 16 davon unterzeichnet.",
      blocks: [
        { h: "Was ist beim Bund-Einstieg bei KNDS bekannt?", items: [
          { tag: "unbestaetigt", text: "Laut einem Handelsblatt-Bericht vom 10.11.2026 haben sich der Bund und die deutschen Eigentümerfamilien (gehalten über die Wegmann-Holding) grundsätzlich darauf verständigt, dass der Bund rund 6,6 Mrd. Euro für einen 50-Prozent-Anteil an KNDS zahlt – abgeleitet aus einer Vor-Börsengang-Bewertung von 11,2 Mrd. Euro plus einem Aufschlag von 1 Mrd. Euro, weil Teile der Gewinne von 2026 noch den Eigentümerfamilien zufließen sollen. Ein unterzeichneter Vertrag lag den ausgewerteten Quellen zufolge auch am 16.11. noch nicht vor; die Unterzeichnung wird für „noch im November” erwartet, der Vollzug für Dezember 2026.",
            ask: [{ label: "Was passiert bei Übernahmen zwischen Unterzeichnung und Vollzug?", ref: "e:deal-risks" }] }
        ]},
        { h: "Was melden RENK und Hensoldt?", items: [
          { tag: "fakt", text: "Hensoldt meldete für die ersten neun Monate 2026 einen um 76,7 % auf 3.564 Mio. Euro gestiegenen Auftragseingang und einen Rekord-Auftragsbestand von 10.367 Mio. Euro; die Umsatzprognose für 2026 wurde angehoben. RENK meldete einen Rekord-Auftragsbestand von 7,6 Mrd. Euro, unter anderem durch einen rund 130 Mio. Euro schweren Getriebe-Auftrag für Leopard-2-Kampfpanzer; die RENK-Aktie reagierte darauf laut Berichten trotzdem kaum oder negativ, weil sie von der allgemeinen Kursschwäche im Rüstungssektor mitgezogen wurde.",
            ask: [{ label: "Mehr zur Rheinmetall-Erholung und Goldmans Kurszielsenkung", ref: "s:11" }] }
        ]},
        { h: "Wie ist der Stand bei der EU-Verteidigungsfinanzierung SAFE?", items: [
          { tag: "fakt", text: "In der zweiten SAFE-Runde über 21,3 Mrd. Euro haben inzwischen alle 19 teilnehmenden Mitgliedstaaten Kreditvereinbarungen genehmigt, 16 davon unterzeichnet; elf Staaten erhielten bereits eine Vorfinanzierung von 15 % (zusammen rund 13,5 Mrd. Euro). Europas gesamte Verteidigungsausgaben sollen 2026 laut Berichten auf rund 454 Mrd. Euro steigen; das Haager Nato-Ziel von Juni 2025 sieht bis 2035 insgesamt 5 % des BIP für Sicherheit vor, davon mindestens 3,5 % für klassische Verteidigung.",
            ask: [{ label: "Was ist das NATO-Ausgabenziel?", ref: "e:nato-target" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass RENK und Hensoldt ihre Auftragsbestände trotz der Rheinmetall-Probleme auf Rekordniveau steigern, während der Bund-Einstieg bei KNDS weiterhin nicht unterzeichnet ist, deutet darauf hin, dass die operative Nachfrage in der Rüstungsbranche laut den vorliegenden Daten unverändert hoch bleibt, während einzelne staatliche Beteiligungsvorhaben wie bei KNDS mehr Zeit benötigen als zunächst angekündigt." }
        ]}
      ],
      reaction: "Mehr zur Rheinmetall-Erholung und Goldmans Kurszielsenkung in Meldung 11.",
      terms: ["enterprise-value"],
      followups: ["e:nato-target", "e:defence-order", "e:ma-steps"],
      sources: [
        { title: "Handelsblatt: Rüstung – Bund zahlt 6,6 Milliarden Euro für KNDS-Einstieg", url: "https://www.handelsblatt.com/politik/deutschland/ruestung-bund-zahlt-66-milliarden-euro-fuer-knds-einstieg/100268563.html" },
        { title: "esut.de: Hensoldt-Auftrag – 3,56 Milliarden Euro Auftragseingang", url: "https://esut.de/2026/11/meldungen/76588/hensoldt-auftrag-356-milliarden/" },
        { title: "boersennews.de: Sippenhaft – RENK fällt trotz Rekordauftragsbestand", url: "https://www.boersennews.de/nachrichten/artikel/boersennews/sippenhaft-renk-faellt-trotz-rekordauftragsbestand/5340659/" },
        { title: "eunews.it: The second round of SAFE gets underway", url: "https://www.eunews.it/en/2026/10/29/the-second-round-of-safe-gets-underway-the-commission-urges-countries-to-use-the-remaining-21-3-billion-for-defence/" }
      ]
    },
    /* 13 DEALS/PRIVATE CREDIT: MARVELL-LUMENTUM/KBRA/BDC */
    {
      id: "marvell-lumentum-private-credit-stress-11-16", cats: ["deals", "credit"], when: "Deal angekündigt 2.11. · Marvell-Kurs Fr 13./Mo 16.11. · KBRA-Report 5.11. · Q3-BDC-Daten",
      headline: "Marvell-Aktie fällt weiter, Aktionärsklagen prüfen die Lumentum-Fusion, Private-Credit-Ausfälle erreichen Rekordwert",
      sec30: "Die Marvell-Aktie, die am 2.11. eine All-Stock-Übernahme von Lumentum für ursprünglich rund 115 Mrd. Dollar Unternehmenswert vereinbart hatte, schloss am Freitag bei 156,76 Dollar (-4,68 %) und fiel am Montag vorbörslich um weitere 1,8 bis 4,6 % auf Werte zwischen rund 137 und 150 Dollar – ein breiter Ausverkauf im Halbleitersektor. Mehrere Kanzleien kündigten Untersuchungen zur Fairness des Deals an. Parallel meldete die Ratingagentur KBRA einen Rekordwert von 112 ausfallenden Private-Credit-Kreditnehmern (+22 % ggü. Vorquartal); laut Fitch gaten aktuell 10 von 16 nicht börsennotierten BDCs ihre Rücknahmen.",
      blocks: [
        { h: "Wie hat sich die Marvell-Lumentum-Fusion seit der Ankündigung entwickelt?", items: [
          { tag: "fakt", text: "Marvell und Lumentum hatten am 2.11.2026 eine All-Stock-Fusion vereinbart (Umtauschverhältnis 4,5 Marvell-Aktien je Lumentum-Aktie, ursprünglich rund 115 Mrd. Dollar Unternehmenswert, rund 23,9 % Prämie auf den unbeeinflussten Kurs). Die Marvell-Aktie schloss am Freitag bei 156,76 Dollar (-4,68 % an diesem Tag) und fiel am Montag vorbörslich je nach Handelsplatz um weitere 1,8 bis 4,6 % auf Werte zwischen rund 137 und 150 Dollar – Teil eines breiteren Ausverkaufs im Halbleitersektor. Ein aktueller Lumentum-Einzelkurs für diese Tage ist in den ausgewerteten Quellen nicht genannt.",
            ask: [{ label: "Was kann bei Übernahmen zwischen Unterzeichnung und Vollzug schiefgehen?", ref: "e:deal-risks" }] }
        ]},
        { h: "Wie reagieren Analysten und Aktionärsanwälte?", items: [
          { tag: "fakt", text: "Bank of America, Cantor Fitzgerald, TD Cowen und RBC Capital senkten ihre Kursziele für Marvell deutlich (u. a. BofA von 400 auf 225 Dollar, Buy auf Neutral); andere Häuser wie StoneX, UBS, Stifel und Raymond James bestätigten dagegen Kaufempfehlungen. Der Analystenkonsens (43 Analysten) liegt weiterhin bei „Strong Buy” mit einem durchschnittlichen Kursziel von rund 310 Dollar. Mehrere Kanzleien für Aktionärsrechte, darunter Monteverde & Associates und Brodsky & Smith, kündigten seit rund dem 10.11. Untersuchungen an, ob der Lumentum-Vorstand seine Treuepflichten bei der Aushandlung des Deals verletzt hat; eine formelle Klage liegt bislang nicht vor.",
            ask: [{ label: "Was ist ein EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Wie stark ist der Private-Credit-Markt unter Druck?", items: [
          { tag: "fakt", text: "Die Ratingagentur KBRA meldete für ihren November-Report einen Rekordwert von 112 ausfallenden Private-Debt-Kreditnehmern (+22 % ggü. Vorquartal) unter mehr als 3.000 untersuchten Mittelstandsunternehmen mit zusammen über 1,4 Billionen Dollar Direct-Lending-Schulden; die Ausfallquote liegt bei rund 3,6 %, im Lower Middle Market bei 5,8 %. Rund 20 % der untersuchten Kreditnehmer meldeten sinkende Umsätze, die Bruttoverschuldung stieg erstmals seit über zwei Jahren wieder an.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }] }
        ]},
        { h: "Was zeigen die BDC-Daten?", items: [
          { tag: "fakt", text: "Laut Fitch begrenzen aktuell 10 von 16 nicht börsennotierten BDCs ihre Rücknahmen („Gates”). Blackstones BCRED kappte die Rücknahmen im dritten Quartal 2026 das dritte Quartal in Folge bei 5 % des Nettoinventarwerts, bei 4,3 Mrd. Dollar an Rücknahmeanträgen – der Branchenstandard liegt bei maximal 5 % pro Quartal. Die Non-Accrual-Quote bei BCRED sank zwar gegenüber dem Vorquartal, ein anderer BDC-Fonds (BDEBT) meldete für dasselbe Quartal eine Non-Accrual-Quote von 0,0 % – ein Hinweis auf eine Spaltung zwischen großen, liquiden BDCs und dem übrigen Markt." }
        ]}
      ],
      deal: { value: "~115 Mrd. $ bei Ankündigung; Marvell-Aktie seither von rund 221 auf 137 bis 150 $ gefallen, aktueller Deal-Spread in den Quellen nicht genannt", buyer: "Marvell Technology", target: "Lumentum", sector: "Halbleiter/Optik (KI-Infrastruktur)", type: "All-Stock-Fusion, Abschluss erwartet H1 2028" },
      reaction: "Mehr zu Nvidia und zur KI-Chipbranche in Meldung 14.",
      terms: ["ebitda", "non-accrual", "bdc"],
      followups: ["e:deal-risks", "e:private-credit-what", "e:redemption-limits"],
      sources: [
        { title: "Blockchain.News: Price prediction MRVL – Lumentum deal resets the tape", url: "https://blockchain.news/news/20261116-price-prediction-mrvl-lumentum-deal-resets-the-tape-as" },
        { title: "Benzinga: Marvell stock – Bank of America, Cantor downgrade on Lumentum deal", url: "https://www.benzinga.com/analyst-stock-ratings/downgrades/26/11/62831593/marvell-stock-bank-of-america-cantor-lumentum-deal" },
        { title: "GlobeNewswire: Brodsky & Smith shareholder update – Lumentum Holdings investigation", url: "https://www.globenewswire.com/news-release/2026/11/10/3399894/0/en/brodsky-smith-shareholder-update-notifying-investors-of-the-following-investigations-lumentum-holdings-inc-nasdaq-lite-array-technologies-inc-nasdaq-arry-surgery-partners-inc-nasda.html" },
        { title: "Bloomberg: Private credit defaults surge, lower middle-market companies see higher rates", url: "https://www.bloomberg.com/news/articles/2026-11-05/private-credit-defaults-record-largest-quarterly-jump-kbra-says" },
        { title: "White Securities Law: Non-traded BDC redemption gates 2026", url: "https://whitesecuritieslaw.com/non-traded-bdc-redemption-gates-2026/" }
      ]
    },
    /* 14 TECHNOLOGIE: NVIDIA/HUANG/ANTHROPIC */
    {
      id: "nvidia-huang-kongress-anthropic-ipo-11-16", cats: ["tech"], when: "Huang-Rücktritt 12.11. · Kongressanhörungen angesetzt 1.-3.12. · Nvidia-Zahlen 17./18.11. · Anthropic-Pricing 18.11., Handelsstart 19.11.",
      headline: "Nvidia fällt erneut unter 4 Billionen Dollar Marktkapitalisierung, Rufe nach Huangs Rückkehr werden lauter, Anthropic-Börsengang steht kurz vor dem Pricing",
      sec30: "Nach Jensen Huangs Rücktritt als Nvidia-CEO am 12.11. führt Finanzchefin Colette Kress das Unternehmen interimistisch; die Nvidia-Aktie fiel am Montag um weitere rund 4 % und damit erneut unter eine Marktkapitalisierung von 4 Billionen Dollar. Laut Financial Times wachsen übers Wochenende die Rufe nach einer Rückkehr Huangs, der selbst mit Vertrauten über diese Möglichkeit gesprochen haben soll. Der Senatsausschuss für Bankwesen lädt Huang und Handelsminister Lutnick für den 3.12. zu einer Anhörung vor, drei Ausschüsse des Repräsentantenhauses für den 1.12. Parallel steht Anthropics Börsengang (Preisspanne 70 bis 78 Dollar, Pricing 18.11., Handelsstart 19.11. an der Nasdaq) kurz vor dem Abschluss.",
      blocks: [
        { h: "Was ist nach Huangs Rücktritt bei Nvidia aktuell?", items: [
          { tag: "fakt", text: "Jensen Huang trat am 12.11.2026 mit sofortiger Wirkung als President, CEO und Verwaltungsratsmitglied zurück, nachdem Berichte über eine Affäre mit der als mutmaßliche chinesische Spionin verdächtigten Geschäftsfrau Alice Huang aufgekommen waren. Finanzchefin Colette Kress führt das Unternehmen interimistisch unter Beibehaltung ihres CFO-Titels. Die Nvidia-Aktie fiel am Montag laut CNBC um weitere rund 4 % auf etwa 157,65 Dollar und damit erneut unter eine Marktkapitalisierung von 4 Billionen Dollar; die ersten Quartalszahlen unter Kress' Führung stehen für den 17./18.11. an.",
            ask: [{ label: "Mehr zur Marktreaktion bei Nvidia, AMD und Broadcom", ref: "s:2" }] }
        ]},
        { h: "Gibt es Signale für eine Rückkehr Huangs?", items: [
          { tag: "unbestaetigt", text: "Laut Financial Times wuchsen übers Wochenende – auch aus dem Technologiesektor – Rufe nach einer Rückkehr Huangs als CEO; Huang selbst soll eine mögliche Rückkehr mit Vertrauten besprochen haben. Eine offizielle Entscheidung oder Bestätigung von Nvidia liegt dazu nicht vor; der neue Verwaltungsratsvorsitzende Harvey Jones hatte zuvor „volles Vertrauen” in Kress und das bestehende Führungsteam geäußert." }
        ]},
        { h: "Was ist bei den Kongressanhörungen und dem Spionagefall bekannt?", items: [
          { tag: "fakt", text: "Der Vorsitzende des Senatsausschusses für Bankwesen, Tim Scott, lud Huang und Handelsminister Howard Lutnick zu einer freiwilligen Aussage am 3.12.2026 vor und drohte im Weigerungsfall mit einer Vorladung; drei Ausschüsse des Repräsentantenhauses luden Huang zusätzlich zu einem nicht öffentlichen Gespräch am 1.12. vor. Alice Huang leitete das Singapur-Unternehmen Megaspeed International, das seit Juni 2024 Nvidia-Chips im Wert von über 4,8 Mrd. Dollar gekauft hat; US-Handels- und Justizministerium untersuchen, ob Megaspeed chinesischen Firmen half, Exportkontrollen zu umgehen. Laut Unternehmensangaben hat Alice Huang bei Megaspeed inzwischen keine Rolle mehr.",
            ask: [{ label: "Was ist zirkuläre Finanzierung in der KI-Branche?", ref: "e:circular-financing" }] }
        ]},
        { h: "Wie läuft Anthropics Börsengang?", items: [
          { tag: "fakt", text: "Anthropics Preisspanne liegt weiterhin bei 70 bis 78 Dollar je Aktie für 825 Mio. Class-A-Aktien, mit Pricing für den 18.11. und Handelsstart am 19.11. an der Nasdaq (Ticker: ANT) geplant; dazu kommt eine Privatplatzierung an Investoren wie Microsoft, Nvidia, Alphabet und Micron. Am oberen Rand der Spanne könnten Börsengang und Privatplatzierung zusammen bis zu 90,4 Mrd. Dollar erzielen, bei einer Bewertung von rund 1 Billion Dollar. Das Orderbuch war laut Bloomberg bis zum dritten Roadshow-Tag rund sechsfach überzeichnet." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion bei Nvidia, AMD und Broadcom in Meldung 2.",
      terms: ["hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:circular-financing", "e:custom-chips"],
      sources: [
        { title: "CNBC: Nvidia stock falls nearly 4% as scrutiny over Jensen Huang's exit continues", url: "https://www.cnbc.com/2026/11/16/nvidia-stock-price-jensen-huang.html" },
        { title: "CNBC: Calls for Huang to return grow in tech sector", url: "https://www.cnbc.com/2026/11/16/nvidia-jensen-huang-return-tech.html" },
        { title: "Fortune: Senate Banking Committee asks Huang, Lutnick to testify", url: "https://fortune.com/2026/11/13/senate-banking-committee-nvidia-jensen-huang-howard-lutnick/" },
        { title: "Bloomberg: Anthropic's IPO is said to be about six times oversubscribed", url: "https://www.bloomberg.com/news/articles/2026-11-12/anthropic-s-ipo-is-said-to-be-about-six-times-oversubscribed" }
      ]
    },
    /* 15 ENERGIE: BRENT/OPEC+/GASSPEICHER/DUNKELFLAUTE */
    {
      id: "oelpreis-opec-gasspeicher-dunkelflaute-11-16", cats: ["energy"], when: "Brent-Stand Mo 16.11. · OPEC+-Treffen für 29.11. angesetzt · Dunkelflaute-Rekord 9./10.11.",
      headline: "Ölpreis gibt vor der OPEC+-Entscheidung Ende November weiter nach, deutsche Gasspeicher bleiben kritisch niedrig",
      sec30: "Brent-Rohöl fiel am Montag um rund 1 % auf etwa 95 Dollar je Barrel (WTI: rund 88 Dollar), weil die IEA für das vierte Quartal 2026 ein globales Angebotsüberangebot erwartet. Die volle, 21 Länder umfassende OPEC+-Gruppe entscheidet am 29.11. über die Fördermengen für 2027 – nach IEA-Prognosen könnten dabei rund 2 Mio. Barrel pro Tag an verbliebenen Förderkürzungen auslaufen. Die deutschen Gasspeicher lagen zuletzt bei rund 57,7 % Füllstand und damit weiterhin deutlich unter dem Zielwert von 80 % zum 1.11.; Anfang November hatte eine Dunkelflaute den Strompreis zeitweise auf über 650 Euro je Megawattstunde getrieben.",
      blocks: [
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "fakt", text: "Brent-Rohöl fiel am Montag, 16.11.2026, um rund 1 % auf etwa 95 Dollar je Barrel, WTI auf rund 88 Dollar – beide damit etwas niedriger als der Freitagsschluss (Brent 95,84 Dollar, WTI 88,56 Dollar). Als Hintergrund nennen Berichte vor allem ein von der IEA erwartetes globales Angebotsüberangebot im vierten Quartal 2026.",
            ask: [{ label: "Was ist ein Öl-Future?", ref: "t:oil-future" }] }
        ]},
        { h: "Was entscheidet OPEC+ am 29.11.?", items: [
          { tag: "fakt", text: "Die acht an den freiwilligen Förderkürzungen beteiligten Länder hielten die Fördermenge für Dezember unverändert. Am 29.11.2026 trifft sich die vollständige, 21 Länder umfassende OPEC+-Gruppe, um die Fördermengen für 2027 festzulegen; laut IEA-Prognose könnten dabei rund 2 Mio. Barrel pro Tag an verbliebenen Förderkürzungen auslaufen. Die IEA erwartet für 2027 ein noch größeres Angebotsüberangebot, mit einer Produktionssteigerung auf 108,1 Mio. Barrel pro Tag gegenüber einem Nachfragewachstum von nur rund 2 Mio. Barrel pro Tag.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie ist die Lage bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen zuletzt bei rund 57,7 % Füllstand (142,7 TWh) – deutlich unter dem gesetzlichen Zielwert von 80 % zum 1.11., der tatsächlich nur zu rund 60 bis 61 % erreicht wurde. Die Bundesnetzagentur bewertet die sinkenden Füllstände als markt- und wetterbedingt normal und sieht keinen Hinweis auf eine Versorgungsknappheit.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] }
        ]},
        { h: "Was geschah bei Strompreis und Dunkelflaute?", items: [
          { tag: "fakt", text: "Eine Dunkelflaute Anfang November (Windstromerzeugung brach laut Berichten um rund 90 % ein) ließ den Strompreis am 9.11. zeitweise auf über 650 Euro je Megawattstunde steigen; die Tagesdurchschnitte erreichten am 9. und 10.11. mit 352,44 bzw. 357,56 Euro je Megawattstunde den höchsten Stand des Jahres 2026. In den ersten zehn Novembertagen lag der durchschnittliche Strompreis bei 277 Euro je Megawattstunde, verglichen mit 168 Euro im Oktober.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis vor allem auf das globale Angebotsbild und die anstehende OPEC+-Entscheidung reagiert, während die deutschen Gasspeicher und der Strompreis stärker von saisonalen Entnahmen, Wetter und der heimischen Erzeugungsstruktur abhängen, zeigt erneut unterschiedliche Preistreiber auf den einzelnen Energiemärkten." }
        ]}
      ],
      reaction: "Mehr zu den von CENTCOM zurückgewiesenen Tanker-Zwischenfällen in der Straße von Hormus in Meldung 10.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:opec-plus-why", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "HDFC Sky: Brent crude oil price today, November 16, 2026 – Brent falls 1% to $94.86", url: "https://hdfcsky.com/news/brent-crude-oil-price-today-november-16-2026-brent-falls-1percent-to-94-86-wti-slips-below-88-as-supply-surplus-looms" },
        { title: "Daily Sabah: OPEC keeps December output intact ahead of tougher call for 2027", url: "https://www.dailysabah.com/business/energy/opec-keeps-december-output-intact-ahead-of-tougher-call-for-2027" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Versorgungssicherheit/aktuelle_gasversorgung/start.html" },
        { title: "topagrar.com: Windflaute treibt Strompreis auf Jahreshöchststand", url: "https://www.topagrar.com/markt/news/windflaute-treibt-strompreis-auf-jahreshochststand-20031039.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX lag am Montagmittag bei rund 26.732 Punkten (-0,06 %), der Euro Stoxx 50 bei rund 6.376 Punkten (-0,16 %), jeweils gegenüber dem Freitagsschluss." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Vor den Nvidia-Quartalszahlen am Dienstag, der Fed-Rede von Kevin Warsh am Montag und dem Anthropic-Pricing am 18.11. bleibt der Handel in Europa vorsichtig." },
    "yield-meaning": { tag: "fakt", story: 4, text: "Die US-10-Jahres-Rendite verharrt bei rund 5,14 bis 5,15 %; bei der Bund-Rendite schwanken die Montagsangaben zwischen rund 3,29 und 3,38 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Nach der über Erwarten hohen US-Kerninflation gilt eine Zinserhöhung im Dezember am Terminmarkt je nach Quelle zwischen 88 und rund 100 % als eingepreist; das belastet tendenziell zinslose Anlagen wie Gold und Bitcoin." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold fiel am Montag um 1,13 % auf rund 3.838 Dollar – den niedrigsten Stand seit über einem Jahr." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro fiel weiter auf rund 1,1010 Dollar; binnen eines Monats hat er rund 1,84 % gegenüber dem Dollar verloren." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin erholte sich nach dem Wochenend-Tief von rund 62.000 Dollar leicht auf rund 64.250 bis 64.600 Dollar, bleibt aber binnen eines Monats rund 17 % im Minus." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die US-Kernrate der Verbraucherpreise stieg im Oktober den dritten Monat in Folge um 0,3 % und damit stärker als erwartet; die Eurozone-Inflation stieg im Oktober auf 4,0 %." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Dass Fed, EZB und Bank of England im November 2026 nahezu gleichzeitig über weitere Zinserhöhungen diskutieren oder sie bereits vollzogen haben, deutet auf eine breit angelegte geldpolitische Reaktion auf den Energiepreisschock hin." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Chef Kevin Warsh sprach am Montag vor hawkishem Hintergrund; Goolsbee und Williams bekräftigten die Offenheit für eine Dezember-Erhöhung, Finanzminister Bessent warnte weiter davor." },
    "ecb-hike": { tag: "position", story: 5, text: "Bundesbank-Chef Nagel nennt eine EZB-Erhöhung im Dezember „ziemlich offensichtlich” nötig; eine Reuters-Umfrage sieht alle 71 befragten Ökonomen bei einer Anhebung auf 2,75 % im Dezember." },
    "debt-brake": { tag: "fakt", story: 7, text: "Von den 122,97 Mrd. Euro Nettokreditaufnahme im Kernhaushalt 2027 entfallen 84,55 Mrd. Euro auf die Ausnahme für Verteidigungsausgaben von der Schuldenbremse." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Merz kündigte für Dienstag, 17.11., eine Einigung zur vollständigen Stromsteuersenkung im Koalitionsausschuss an; die Bundestags-Schlussabstimmung über den Haushalt ist für den 27.11. angesetzt." },
    "rente-basics": { tag: "fakt", story: 8, text: "Arbeitsminister Schweitzer bezeichnet den Rentenreform-Gesetzentwurf weiterhin als „zu 95 Prozent fertig”; strittig bleibt die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Zwei aktuelle Umfragen (ZDF-Politbarometer, INSA) sehen die AfD bei 28 %, die Union zwischen 19 und 22 % – die aktuelle Koalition hätte danach keine Bundestagsmehrheit." },
    "nato-target": { tag: "fakt", story: 12, text: "Europas Verteidigungsausgaben sollen 2026 auf rund 454 Mrd. Euro steigen; in der zweiten SAFE-Finanzierungsrunde haben alle 19 teilnehmenden EU-Staaten Kreditvereinbarungen über 21,3 Mrd. Euro genehmigt." },
    "defence-order": { tag: "fakt", story: 12, text: "Hensoldt meldete einen um 76,7 % gestiegenen Auftragseingang und einen Rekord-Auftragsbestand von 10.367 Mio. Euro, RENK einen Rekord-Auftragsbestand von 7,6 Mrd. Euro." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie erholte sich am Montag um rund 3,6 bis 3,9 % auf etwa 794 bis 796 Euro, nachdem Goldman Sachs das Kursziel von 2.100 auf 1.350 Euro gesenkt hatte." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Der Bund zahlt Berichten zufolge rund 6,6 Mrd. Euro für einen 50-Prozent-Anteil an KNDS; ein unterzeichneter Vertrag liegt auch am 16.11. noch nicht vor." },
    "deal-risks": { tag: "fakt", story: 13, text: "Die Marvell-Aktie ist seit der Ankündigung der Lumentum-Fusion deutlich gefallen; mehrere Kanzleien prüfen, ob der Lumentum-Vorstand seine Treuepflichten verletzt hat." },
    "private-credit-what": { tag: "fakt", story: 13, text: "KBRA meldet einen Rekordwert von 112 ausfallenden Private-Credit-Kreditnehmern, ein Plus von 22 % gegenüber dem Vorquartal." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Laut Fitch begrenzen aktuell 10 von 16 nicht börsennotierten BDCs ihre Rücknahmen; Blackstones BCRED kappte sie das dritte Quartal in Folge bei 5 % des Nettoinventarwerts." },
    "ai-capex": { tag: "fakt", story: 14, text: "Anthropics Börsengang war bis zum dritten Roadshow-Tag rund sechsfach überzeichnet; Pricing ist für den 18.11. geplant." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "US-Behörden untersuchen, ob das von Alice Huang geleitete Unternehmen Megaspeed chinesischen Firmen half, Exportkontrollen für Nvidia-Chips zu umgehen; Alice Huang selbst hat dort laut Unternehmensangaben keine Rolle mehr." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 10, text: "Irans Marine meldete am 14.11. brennende Tanker nach Minentreffern in der Straße von Hormus; das US-Zentralkommando CENTCOM wies dies ausdrücklich als falsch zurück." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Iran wies Berichte über ein geplantes Treffen zwischen US-Vizepräsident Vance und Sicherheitsratschef Rezaei in Doha als „reine Lüge” zurück." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen zuletzt bei rund 57,7 % Füllstand – deutlich unter dem Zielwert von 80 % zum 1.11." },
    "energy-germany": { tag: "fakt", story: 15, text: "Eine Dunkelflaute ließ den deutschen Strompreis am 9.11. zeitweise auf über 650 Euro je Megawattstunde steigen, der Tagesdurchschnitt erreichte am 10.11. mit 357,56 Euro den höchsten Stand des Jahres 2026." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ entscheidet am 29.11. über die Fördermengen für 2027; nach IEA-Prognosen könnten dabei rund 2 Mio. Barrel pro Tag an verbliebenen Förderkürzungen auslaufen." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 4,
      q: "Wer ist seit Mai 2026 Vorsitzender der US-Notenbank Fed und sprach am Montag, 16.11.2026, vor hawkishem Hintergrund?",
      options: [
        "Jerome Powell",
        "Kevin Warsh",
        "Scott Bessent",
        "Austan Goolsbee"
      ],
      answer: 1,
      explain: "Kevin Warsh wurde vom US-Senat bestätigt und am 22.5.2026 als Nachfolger von Jerome Powell zum Fed-Vorsitzenden vereidigt. Er sprach am Montag bei einer Produktivitätskonferenz der San-Francisco-Fed, während am Terminmarkt eine Dezember-Zinserhöhung je nach Quelle zwischen 88 und rund 100 % eingepreist war."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Was kündigte Bundeskanzler Merz am Montag, 16.11.2026, zur Stromsteuer an?",
      options: [
        "Die Stromsteuer werde komplett abgeschafft, aber erst 2030",
        "Der Koalitionsausschuss werde sich am Dienstag auf eine vollständige Senkung auf den EU-Mindestsatz einigen, auch für Privathaushalte",
        "Die Stromsteuersenkung sei endgültig gescheitert",
        "Nur Unternehmen sollten von einer Senkung profitieren, Privathaushalte nicht"
      ],
      answer: 1,
      explain: "Merz kündigte an, der Koalitionsausschuss werde sich am Dienstag, 17.11., auf eine vollständige Senkung der Stromsteuer auf den EU-Mindestsatz einigen – auch für Privathaushalte. Die Bundestags-Schlussabstimmung über den Gesamthaushalt 2027 ist für den 27.11. angesetzt."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 10,
      q: "Angenommen, das US-Zentralkommando CENTCOM hätte die iranischen Minen-Behauptungen in der Straße von Hormus bestätigt statt sie als falsch zurückzuweisen. Was wäre dadurch für den Brent-Preis unter sonst gleichen Bedingungen wahrscheinlicher geworden?",
      options: [
        "Der Ölpreis wäre eher gesunken, weil Unsicherheit die Nachfrage automatisch senkt",
        "Es gibt grundsätzlich keinen Zusammenhang zwischen Tankervorfällen und dem Ölpreis",
        "Nur der Goldpreis hätte reagiert, der Ölpreis nicht",
        "Der Ölpreis wäre eher gestiegen, weil eine von beiden Seiten bestätigte Eskalation die Versorgungssicherheit einer zentralen Öltransportroute stärker infrage gestellt hätte"
      ],
      answer: 3,
      explain: "Weil CENTCOM die iranischen Minen-Behauptungen ausdrücklich als falsch zurückwies, blieb die Reaktion am Ölmarkt gering; eine von US-Seite bestätigte Eskalation hätte die Versorgungssicherheit stärker infrage gestellt und den Ölpreis tendenziell nach oben getrieben."
    },
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Wer führt Nvidia seit Jensen Huangs Rücktritt interimistisch, und wie hat sich die Marktkapitalisierung entwickelt?",
      options: [
        "Arm-Chef Rene Haas, Marktkapitalisierung stieg wieder über 5 Billionen Dollar",
        "Finanzchefin Colette Kress interimistisch als CEO, Marktkapitalisierung fiel am Montag erneut unter 4 Billionen Dollar",
        "Verwaltungsratschef Harvey Jones als CEO, Marktkapitalisierung unverändert",
        "Jensen Huang selbst, der sein Amt bereits wieder angetreten hat"
      ],
      answer: 1,
      explain: "Finanzchefin Colette Kress führt Nvidia interimistisch unter Beibehaltung ihres CFO-Titels. Die Aktie fiel am Montag um weitere rund 4 % und damit erneut unter eine Marktkapitalisierung von 4 Billionen Dollar; Rufe nach einer Rückkehr Huangs blieben laut Financial Times bislang unbestätigte Spekulation."
    },
    {
      topic: "Deals", type: "Zusammenhang", story: 13,
      q: "Die Marvell-Lumentum-Fusion ist eine All-Stock-Übernahme mit einem festen Umtauschverhältnis (4,5 Marvell-Aktien je Lumentum-Aktie). Angenommen, die Marvell-Aktie fällt weiter deutlich. Was wird dadurch für den impliziten Angebotswert je Lumentum-Aktie unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Er bleibt exakt gleich, weil Übernahmeverträge den Dollarwert fixieren",
        "Er sinkt, weil sich der Wert der Lumentum-Aktionäre bei einem festen Umtauschverhältnis direkt am Marvell-Kurs bemisst",
        "Er steigt automatisch, weil Übernahmen immer eine Prämie garantieren",
        "Der Lumentum-Kurs ist von der Marvell-Aktie vollständig unabhängig"
      ],
      answer: 1,
      explain: "Bei einem festen Umtauschverhältnis (Aktien-für-Aktien-Deal) hängt der implizite Angebotswert für Lumentum-Aktionäre direkt vom Marvell-Kurs ab: Fällt Marvell weiter, sinkt auch der rechnerische Wert des Angebots für Lumentum-Aktionäre – was den Deal-Spread tendenziell vergrößert."
    }
  ]
};
