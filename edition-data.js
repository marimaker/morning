// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-23",
  dateLabel: "Mittwoch, 23. September 2026",
  updatedLabel: "Recherchestand 23.09.2026",
  marketNote: "Diese Ausgabe erscheint früh am Mittwochmorgen, vor Öffnung der europäischen Börsen. Die europäischen und US-Zahlen zeigen daher den Handelsschluss vom Dienstag, 22.09.2026 (Xetra 17:30 Uhr bzw. US-Handelsschluss). Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Dienstagnachmittag (22.09., US-Ostküstenzeit). Werte mit „≈” stammen aus Marktberichten und können je nach Quelle und Erhebungszeitpunkt leicht abweichen; bei Gold gehen die gesichteten Quellen für Dienstag deutlicher auseinander als sonst üblich, das ist unten vermerkt.",

  top: [
    { text: "Metas neuer KI-Agent „Muse” hat seit dem Start am 8.9. laut Berichten binnen zwei Wochen rund 2,5 bis 2,8 Mio. Downloads erzielt und die Meta-Aktie am Montag um rund 11 % nach oben getrieben. Am Dienstag gaben im S&P 500 dagegen Banken-, Versicherungs- und Reiseportal-Aktien nach, aus Sorge, persönliche KI-Agenten könnten Geschäftsmodelle stören, die von Routinekäufen der Kunden leben.", ref: "s:14" },
    { text: "Am Rande der UN-Vollversammlung trafen sich Irans Außenminister Araghchi und US-Sondergesandter Witkoff am Dienstag rund drei Stunden zu vermittelten Gesprächen. Zugleich sagte Präsident Trump vor der UN-Vollversammlung, er stehe vor der Entscheidung zwischen einem Abkommen mit Iran oder dessen „Vernichtung”, rechne aber erst nach den US-Zwischenwahlen im November mit einem Deal. Der Ölpreis fiel am Dienstag unter 100 Dollar je Barrel, nachdem Iran laut einem Agenturbericht angeboten hatte, die Straße von Hormus bei Aufhebung der US-Blockade wieder zu öffnen.", ref: "s:8" },
    { text: "Nach den Landtagswahlen in Berlin und Mecklenburg-Vorpommern vom Sonntag lud Die Linke SPD und Grüne am Montag zu Sondierungsgesprächen für eine Berliner Landesregierung ein. In der CDU hält die Debatte um Kanzler Merz' Führung an, nachdem er das Nebeneinander von privater und gesetzlicher Krankenversicherung als „Gerechtigkeitsproblem” bezeichnet hatte – das Kanzleramt dementierte noch am selben Abend einen Kurswechsel.", ref: "s:6" },
    { text: "Mehrere Fed-Vertreter äußerten sich in der Woche vom 21.9. zur Geldpolitik: Chicago-Fed-Chef Goolsbee sprach von einem „schmerzhaften” Weg zum Inflationsziel, Richmond-Fed-Chef Barkin sagte, die Inflationsrisiken überwögen derzeit die Beschäftigungsrisiken. Die US-Rendite zehnjähriger Anleihen hielt sich bei rund 4,96 %, nahe der 5-%-Marke der Vorwoche.", ref: "s:2" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.578,85", change: "+0,02 %", dir: "flat", asof: "Schluss Di 22.09.", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. 25.578,85 Punkte sind ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: +0,02 % heißt, der Index schloss am Dienstag praktisch unverändert zum Vortag.",
      compare: [
        { label: "Woche", text: "+1,08 % gegenüber dem Freitagsschluss (25.304,06 Punkte am 18.09.)" },
        { label: "MDAX", text: "Der MDAX legte mit +0,92 % auf 31.529,91 Punkte deutlicher zu als der DAX." }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Dienstag vor allem diese Faktoren:",
        items: [
          "Ein Rückgang der Ölpreise unter 100 US-Dollar je Barrel Brent stützte die Stimmung zeitweise.",
          "Der Index konnte die Gewinne aber nicht über ein technisches Niveau (50-Tage-Linie) hinaus ausbauen.",
          "Uneinheitliche US-Vorgaben und die Diskussion um mögliche weitere Fed-Zinsschritte bremsten zusätzlich."
        ]
      },
      important: [
        { area: "Aktien", text: "Der DAX ist ein Stimmungsbild der großen deutschen Firmen, kein Maß für die gesamte Wirtschaft.", ref: "e:index-move" },
        { area: "Öl", text: "Fallende Ölpreise können Firmen mit hohem Energieverbrauch entlasten.", ref: "e:oil-stocks" },
        { area: "Zinsen", text: "Die Diskussion um weitere Fed-Zinsschritte wirkt auch auf europäische Aktien.", ref: "e:yield-stocks" }
      ],
      source: { title: "onvista: Dax schließt kaum verändert", url: "https://www.onvista.de/news/2026/09-22-dax-schliesst-kaum-veraendert-0-20-26556396" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.329,84", change: "+0,18 %", dir: "up", asof: "Schluss Di 22.09.", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. +0,18 % heißt: Diese Unternehmen wurden zusammen leicht höher bewertet als am Vortag, allerdings mit großen Unterschieden zwischen einzelnen Aktien.",
      compare: [
        { label: "Gewinner", text: "Infineon +3,16 %, adidas +2,58 %, DHL Group +2,16 %" },
        { label: "Verlierer", text: "Allianz −3,35 %, Rheinmetall −1,90 %, Deutsche Bank −1,66 %" }
      ],
      moved: {
        intro: "Berichte nennen für den Dienstag vor allem Einzeltitelbewegungen statt eines einheitlichen Makro-Treibers:",
        items: [
          "Chipwerte wie Infineon profitierten von der Rally rund um Metas KI-Agenten „Muse”.",
          "Finanzwerte wie Allianz und Deutsche Bank gaben nach – in den USA fiel der Finanzsektor auf den tiefsten Stand seit Juli, aus Sorge, KI-Agenten könnten etablierte Geschäftsmodelle stören."
        ]
      },
      important: [
        { area: "Technologie", text: "Metas KI-Agent Muse gilt als wichtiger Auslöser der Sektor-Bewegungen dieser Woche.", ref: "s:14" }
      ],
      source: { title: "finanzen.at: Euro Stoxx 50 aktuell – Gewinne zum Ende des Dienstagshandels", url: "https://www.finanzen.at/nachrichten/aktien/euro-stoxx-50-aktuell-zum-ende-des-dienstagshandels-gewinne-im-euro-stoxx-50-1036564528" }
    },
    "sp500": {
      label: "S&P 500", value: "7.764,70", change: "±0,0 %", dir: "flat", asof: "Schluss Di 22.09.", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. Am Dienstag schloss er praktisch unverändert zum Vortag – nach einem kräftigen Anstieg am Montag.",
      compare: [
        { label: "Montag", text: "Am Montag war der Index um rund 1,5 % gesprungen, getrieben von der Marktreaktion auf Metas KI-Agenten „Muse”." },
        { label: "Finanzsektor", text: "Der S&P-500-Finanzsektor fiel am Dienstag um rund 2 % auf den tiefsten Stand seit Juli; JPMorgan und Wells Fargo gaben je über 3 % nach, Charles Schwab über 6 %." },
        { label: "Dow Jones", text: "−185 Punkte (−0,36 %) auf 51.864,00" }
      ],
      moved: {
        intro: "Berichte zum Dienstag:",
        items: [
          "Der KI-getriebene Rekordlauf vom Montag pausierte, Technologiewerte hielten sich aber vergleichsweise gut.",
          "Fallende Ölpreise und die Frage nach dem weiteren Fed-Kurs prägten zusätzlich den Handel."
        ]
      },
      important: [
        { area: "Technologie", text: "Der Auslöser der Sektor-Rotation war Metas KI-Agent Muse.", ref: "s:14" },
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen.", ref: "e:rates-stocks" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Tuesday, September 22", url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-september-22-nasdaq-dow-sp-500-080625961.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.244", change: "+0,4 %", dir: "up", asof: "Schluss Di 22.09.", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Am Dienstag erreichte sie einen neuen Rekordschluss, den zweiten in Folge.",
      compare: [
        { label: "Speicherchips", text: "SanDisk sprang laut Bericht um rund 6 %, nachdem Rosenblatt die Coverage mit „Buy” und Kursziel 2.400 $ aufnahm; Micron legte rund 3 % zu." },
        { label: "Andere Quelle", text: "Eine Quelle nennt für den Dienstag +0,5 % statt +0,4 % – die Abweichung liegt im Bereich üblicher Rundungsunterschiede." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Der von Metas KI-Agenten „Muse” ausgelöste KI-Handel trieb Technologie- und Chipwerte weiter an.",
          "Fallende Ölpreise und leicht nachgebende Renditen unterstützten zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum fällt oder steigt die Nasdaq bei Zinsänderungen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "TheStreet: Stock market today – Dow, S&P 500, Nasdaq updates Sept. 22, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-22-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,145", change: "−0,15 %", dir: "down", asof: "Di 22.09.", story: 2,
      means: "1 Euro kostet etwa 1,145 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Mehrwochenkontext", text: "Der Euro näherte sich laut Bericht dem niedrigsten Stand seit Ende Juli." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Hawkishe Aussagen mehrerer Fed-Vertreter (u. a. Goolsbee, Barkin, Musalem) stützten den Dollar.",
          "Zuvor hatten steigende Ölpreise den Euro zusätzlich belastet, bevor die Preise am Dienstag wieder fielen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehrere Fed-Vertreter halten weitere Zinsschritte für möglich.", ref: "e:fed-hike" },
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,96 %", change: "kaum verändert (< 1 Bp)", dir: "flat", asof: "Di 22.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,96 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Andere Laufzeiten", text: "Die 2-Jahres-Rendite lag bei 4,743 % (−1 Bp), die 30-Jahres-Rendite bei 5,296 % (unverändert)." },
        { label: "Fed-Leitzins", text: "3,75–4,00 % (Erhöhung am 16.09.)" }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anleger warteten laut Bericht auf neue Arbeitsmarktdaten und weitere Fed-Kommentare.",
          "Chicago-Fed-Chef Austan Goolsbee sprach von einem möglicherweise „schmerzhaften” Weg zum Inflationsziel, Richmond-Fed-Chef Tom Barkin sagte, die Inflationsrisiken überwögen derzeit die Beschäftigungsrisiken, St.-Louis-Fed-Chef Musalem hält weitere Zinserhöhungen für möglich."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren mit Aktien.", ref: "e:yield-stocks" },
        { area: "Unternehmensfinanzierung", text: "Kredite werden teurer, wenn der sichere Zins steigt.", ref: "e:fed-hike" },
        { area: "Private Credit", text: "Variable Zinsen steigen mit den Referenzzinsen.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Höhere US-Zinserwartungen können den Dollar stützen.", ref: "e:eurusd-meaning" },
        { area: "Gold", text: "Gold zahlt keinen Zins und konkurriert mit Anleihen.", ref: "e:gold-why" }
      ],
      source: { title: "CNBC: Treasury yields ease as investors await fresh jobs data, Fed comments", url: "https://www.cnbc.com/amp/2026/09/22/treasury-yield-us-bond-market-trump.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,44 %", change: "−0,01 Punkte", dir: "down", asof: "Di 22.09.", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. 3,44 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,4 % pro Jahr.",
      compare: [
        { label: "Woche", text: "Leicht rückläufig gegenüber rund 3,52 % am Freitag." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: ["Kein spezifischer Einzelgrund; die Bewegung fiel in den Kontext fallender US-Renditen und Ölpreise."]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen machen neue Schulden des Bundes teurer, relevant für den Haushalt 2027.", ref: "e:debt-brake" },
        { area: "Kredite", text: "Bauzinsen und Firmenkredite orientieren sich an Bund-Renditen.", ref: "e:yield-meaning" }
      ],
      source: { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.310 $", change: "≈ −0,8 %", dir: "down", asof: "Di 22.09.", story: 5, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.310 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Abweichende Angaben", text: "Quellen nennen für Dienstag deutlich unterschiedliche Stände: 4.307,63 $ (Spot-Schluss, −0,81 %), rund 4.358,80 $ (16:32 Uhr Ostküstenzeit, +16 $) und 4.346 $ (−0,9 %) in einer weiteren Quelle. Welcher Wert der offizielle Tagesschluss ist, ließ sich aus den gesichteten Quellen nicht eindeutig klären." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Hawkishe Fed-Aussagen stützten laut Bericht den Dollar und belasteten Gold.",
          "Gegenläufig wirkten Rekord-Goldimporte aus China, die die Nachfrage stützten."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinserwartungen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "USAGOLD: Daily Precious Metals Market Report, September 22, 2026", url: "https://www.usagold.com/daily-precious-metals-market-report-september-22-2026/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 99,0 $", change: "≈ −1 % bis −3 % (je nach Quelle)", dir: "down", asof: "Di 22.09.", story: 8, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 99 Dollar je Fass (159 Liter) sind rund 62 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Fünfte Verlustsitzung", text: "Brent fiel laut Bericht in die fünfte Verlustsitzung in Folge und auf den niedrigsten Stand seit zwei Wochen, erstmals seit Wochen wieder unter 100 $." },
        { label: "WTI", text: "Die US-Ölsorte WTI notierte bei rund 91,3 $ (−0,7 %)." }
      ],
      moved: {
        intro: "Laut Berichten wirkte am Dienstag vor allem:",
        items: [
          "Japans Nachrichtenagentur Kyodo berichtete, Iran habe angeboten, die Straße von Hormus innerhalb von sieben Tagen nach Aufhebung der US-Blockade iranischer Häfen wieder zu öffnen.",
          "Das nährte laut Berichten Hoffnungen auf eine Grundlage für Gespräche am Rande der UN-Vollversammlung (Meldung 8)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport – ein Rückgang wirkt umgekehrt.", ref: "e:oil-inflation" },
        { area: "Aktien", text: "Ölkonzerne verdienen weniger, energieintensive Firmen werden entlastet.", ref: "e:oil-stocks" },
        { area: "Deutschland", text: "Ein niedrigerer Ölpreis kann Energieimporte verbilligen.", ref: "e:energy-germany" }
      ],
      source: { title: "Fortune: Current price of oil, Sept. 22, 2026", url: "https://fortune.com/article/price-of-oil-09-22-2026/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 85.229 $", change: "Tageshoch 87.281 $, dann Konsolidierung", dir: "up", asof: "Di 22.09., Nachmittag ET", story: 5, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 85.229 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tageshoch", text: "87.281 $ – der höchste Stand seit Ende Januar 2026." },
        { label: "ETF-Zuflüsse", text: "Laut Bericht flossen am 21.09. knapp 1 Mrd. $ in US-Spot-Bitcoin-ETFs, ein Rekord im Jahr 2026." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein Short-Squeeze mit laut Bericht über 750 Mio. $ liquidierten Short-Positionen trieb den Kurs zusätzlich.",
          "Rekord-Zuflüsse in US-Spot-Bitcoin-ETFs unterstützten die Rally."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "finanzen.net: Kryptomarkt 22. September 2026 Nachmittag", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-bitcoin-konsolidiert-nach-tageshoch-87-281-dollar-strategy-kauft-bitmine-akkumuliert-eth-648-millionen-shorts-liquidiert-00-15946924" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 DIENSTAG-MARKTBERICHT */
    {
      id: "dienstag-maerkte", cats: ["markets"], when: "Di 22.09. Handelsschluss · Mi 23.09. Ausblick",
      headline: "DAX schließt kaum verändert, Wall Street uneinheitlich, Chipwerte von KI-Rally getrieben",
      sec30: "Der DAX schloss am Dienstag praktisch unverändert bei 25.578,85 Punkten, der Euro Stoxx 50 legte um 0,18 % zu. In den USA war das Bild gemischt: S&P 500 flach, Nasdaq +0,4 % (neuer Rekord), Dow −0,36 %. Auslöser der Sektor-Bewegungen war weiter Metas KI-Agent „Muse”: Chipwerte legten zu, Banken-, Versicherungs- und Reisewerte gaben nach.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "DAX +0,02 % auf 25.578,85 Punkte, Euro Stoxx 50 +0,18 % auf 6.329,84 Punkte. Der MDAX legte mit +0,92 % auf 31.529,91 Punkte deutlicher zu.",
            ask: [{ label: "Was bedeutet +0,02 %?", ref: "n:dax" }, { label: "Was ist der Euro Stoxx 50?", ref: "n:eurostoxx50" }] },
          { tag: "fakt", text: "In den USA schloss der S&P 500 praktisch unverändert bei 7.764,70 Punkten, die Nasdaq erreichte mit 27.244 Punkten (+0,4 %) den zweiten Rekordschluss in Folge, der Dow gab 0,36 % auf 51.864,00 Punkte nach.",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Was trieb die Kurse einzelner Aktien?", items: [
          { tag: "fakt", text: "Im Euro Stoxx 50 gewannen Infineon (+3,16 %), adidas (+2,58 %) und DHL Group (+2,16 %), während Allianz (−3,35 %), Rheinmetall (−1,90 %) und Deutsche Bank (−1,66 %) nachgaben." },
          { tag: "fakt", text: "In den USA fiel der S&P-500-Finanzsektor um rund 2 % auf den tiefsten Stand seit Juli; JPMorgan und Wells Fargo verloren je über 3 %, Charles Schwab über 6 %. SanDisk sprang rund 6 % nach einer Hochstufung durch Rosenblatt (Kursziel 2.400 $), Micron legte rund 3 % zu." },
          { tag: "position", text: "Marktbeobachter nennen als gemeinsamen Auslöser Metas KI-Agenten „Muse”: Chip- und KI-Infrastrukturwerte profitierten von der KI-Euphorie, während Banken, Versicherer und Online-Reiseportale unter der Sorge litten, persönliche KI-Agenten könnten Geschäftsmodelle stören, die von Routinekäufen der Kunden leben.",
            ask: [{ label: "Was ist bei Meta Muse los?", ref: "s:14" }] }
        ]},
        { h: "Was bewegte den DAX?", items: [
          { tag: "position", text: "Marktbeobachter nennen einen Rückgang der Ölpreise unter 100 $ je Barrel als stützenden Faktor, der die Gewinne aber nicht über ein technisches Niveau hinaus ausbauen konnte. Uneinheitliche US-Vorgaben und die Diskussion um mögliche weitere Fed-Zinsschritte bremsten zusätzlich.",
            ask: [{ label: "Warum fiel der Ölpreis?", ref: "n:brent" }, { label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag sagt wenig über die langfristige Entwicklung. Wer in Indexfonds investiert, sieht solche Schwankungen regelmäßig. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die europäischen Börsen öffnen heute (Mittwoch) wieder; die Fed-Reden der Vorwoche (Meldung 2) und die Iran-Diplomatie (Meldung 8) bleiben Themen.",
      terms: ["verfallstag", "rendite"],
      followups: ["e:index-move", "e:yield-stocks", "e:oil-stocks", "e:rates-stocks"],
      sources: [
        { title: "onvista: Dax schließt kaum verändert", url: "https://www.onvista.de/news/2026/09-22-dax-schliesst-kaum-veraendert-0-20-26556396" },
        { title: "finanzen.at: Euro Stoxx 50 aktuell – Gewinne zum Ende des Dienstagshandels", url: "https://www.finanzen.at/nachrichten/aktien/euro-stoxx-50-aktuell-zum-ende-des-dienstagshandels-gewinne-im-euro-stoxx-50-1036564528" },
        { title: "Yahoo Finance: Stock market today – Tuesday, September 22", url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-september-22-nasdaq-dow-sp-500-080625961.html" },
        { title: "TheStreet: Stock market today – Sept. 22, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-22-2026" },
        { title: "24/7 Wall St.: SanDisk jumps 6% as Rosenblatt starts coverage at Buy", url: "https://247wallst.com/investing/2026/09/22/sandisk-jumps-6-as-rosenblatt-starts-coverage-at-buy-with-2400-target-micron-rises-3-seagate-ticks-up/" }
      ]
    },

    /* 2 FED HAWKISHE REDEN */
    {
      id: "fed-hawkish-reden", cats: ["economy", "markets"], when: "21.–22.09.2026 · Fed-Reden",
      headline: "Mehrere Fed-Vertreter warnen vor anhaltenden Inflationsrisiken, US-Rendite hält sich nahe 5 %",
      sec30: "Eine Woche nach der Fed-Zinserhöhung auf 3,75–4,00 % äußerten sich mehrere Notenbanker: Chicago-Fed-Chef Goolsbee sprach von einem möglicherweise „schmerzhaften” Weg zum 2-%-Inflationsziel, Richmond-Fed-Chef Barkin sagte, die Inflationsrisiken überwögen derzeit die Beschäftigungsrisiken, St.-Louis-Fed-Chef Musalem hält weitere Zinserhöhungen für möglich. Die US-Rendite zehnjähriger Anleihen hielt sich bei rund 4,96 %.",
      blocks: [
        { h: "Was haben Fed-Vertreter gesagt?", items: [
          { tag: "position", text: "Chicago-Fed-Chef Austan Goolsbee sagte am 21.09. in London laut Bericht, anhaltende Angebotsschocks – etwa durch den hohen Ölpreis infolge des Iran-Kriegs und durch Zölle – machten die Inflationsbekämpfung schmerzhaft: „It's going to be painful.”",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Richmond-Fed-Chef Tom Barkin sagte laut Bericht: „The risks to inflation outweigh the risks to maximum employment. That's why we raised rates”, zeigte sich aber offen für eine schnellere Entspannung, sollte sich das Bild ändern." },
          { tag: "position", text: "St.-Louis-Fed-Chef Alberto Musalem hält laut Bericht weitere Zinserhöhungen für möglich, um die Inflation zurück zum Ziel zu führen. NY-Fed-Chef John Williams äußerte sich auf einer Treasury-Konferenz, ohne dass ein konkretes Zitat zur Geldpolitik vorlag." }
        ]},
        { h: "Was zeigen die Anleihemärkte?", items: [
          { tag: "fakt", text: "Die US-10-Jahres-Rendite hielt sich am Dienstag laut Bericht bei rund 4,959 %, kaum verändert zum Vortag. Die 2-Jahres-Rendite lag bei 4,743 % (−1 Bp), die 30-Jahres-Rendite bei 5,296 % (unverändert).",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Eine Quelle nennt für denselben Tag eine Rendite von 4,97 % statt 4,959 % – die Differenz liegt vermutlich an unterschiedlichen Erhebungszeitpunkten (Settle vs. Intraday-Snapshot)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Nach der Zinserhöhung vom 16.09. zeigen die aktuellen Fed-Reden, dass innerhalb der Notenbank keine Einigkeit über das weitere Tempo besteht – von „schmerzhaft, aber nötig” bis zu offener Bereitschaft für weitere Schritte reicht die Bandbreite der Aussagen.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }, { label: "Was bedeutet das für Aktien?", ref: "e:rates-stocks" }] }
        ]}
      ],
      reaction: "Der Dollar legte im Zuge der hawkishen Aussagen leicht zu, der Euro notierte bei rund 1,145 (Meldung 1).",
      terms: ["leitzins", "basispunkt", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:eurusd-meaning"],
      sources: [
        { title: "CNBC: Treasury yields ease as investors await fresh jobs data, Fed comments", url: "https://www.cnbc.com/amp/2026/09/22/treasury-yield-us-bond-market-trump.html" },
        { title: "Bloomberg: Fed's Goolsbee says road to 2% inflation may not be painless", url: "https://www.bloomberg.com/news/articles/2026-09-21/fed-s-goolsbee-says-road-to-2-inflation-may-not-be-painless" },
        { title: "Investing.com: Fed's Barkin says US economy firming but inflation risks persist", url: "https://www.investing.com/news/economy-news/feds-barkin-says-us-economy-firming-but-inflation-risks-persist-4911359" }
      ]
    },

    /* 3 EZB / EUROZONE PMI / IFO-AUSBLICK */
    {
      id: "ezb-pmi-eurozone", cats: ["economy"], when: "Flash-PMI 23.09. · ifo-Index 24.09.",
      headline: "Deutscher Dienstleistungssektor wächst laut Flash-PMI so stark wie seit acht Monaten nicht, Industrie schwächelt weiter",
      sec30: "Der HCOB-Flash-Einkaufsmanagerindex für Deutschland zeigt im September ein geteiltes Bild: Die Dienstleistungs-Geschäftstätigkeit stieg auf ein Achtmonatshoch von 52,5 Punkten, während die Industrie-PMI auf ein Vierhonatstief von 48,5 Punkte fiel. Insgesamt wuchs die Produktion im deutschen Privatsektor laut S&P Global so stark wie seit 16 Monaten nicht, bei gleichzeitig rückläufigem Auftragseingang. Der ifo-Geschäftsklimaindex wird morgen, am 24.09., veröffentlicht.",
      blocks: [
        { h: "Was zeigt der Flash-PMI für Deutschland?", items: [
          { tag: "fakt", text: "Der HCOB-Flash-Einkaufsmanagerindex Deutschland (Erhebungszeitraum 11.–19.09.) zeigt: Dienstleistungen 52,5 Punkte (August: 49,3, Achtmonatshoch), Industrie-PMI 48,5 Punkte (August: 49,8, Vierhonatstief), Industrie-Produktionsindex 52,2 Punkte (August: 52,9, Zweimonatstief).",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "einordnung", text: "S&P Global beschreibt die Gesamtproduktion des deutschen Privatsektors als so stark gewachsen wie seit 16 Monaten nicht, vor allem getragen vom Dienstleistungssektor – bei gleichzeitig rückläufigen Auftragseingängen, was auf eine fragile Nachfrage hindeutet." }
        ]},
        { h: "Wie sieht es für die gesamte Eurozone aus?", items: [
          { tag: "unbestaetigt", text: "Zu einzelnen Eurozone-weiten Flash-PMI-Werten für September gehen die gesichteten Quellen deutlicher auseinander als sonst üblich: Eine Quelle nennt einen Composite-Wert von rund 50,5 Punkten mit einem Zehnmonatstief bei Dienstleistungen (50,1), eine andere Prognose vor Veröffentlichung ging von rund 51,7 Punkten aus. Welcher Wert der finale Ist-Wert ist, ließ sich nicht abschließend verifizieren." },
          { tag: "fakt", text: "Letzter gesicherter August-Wert für die Eurozone: Composite 52,0 Punkte, Industrie 52,7 (damals höchster Stand seit Mai 2022), Dienstleistungen 51,6." }
        ]},
        { h: "Was kommt als Nächstes?", items: [
          { tag: "fakt", text: "Der ifo-Geschäftsklimaindex für September wird morgen, am 24.09. um 10:30 Uhr, veröffentlicht. Der August-Wert lag bei 88,8 Punkten (Juli: 86,7)." },
          { tag: "fakt", text: "Die Gemeinschaftsdiagnose der führenden Wirtschaftsforschungsinstitute zur Konjunkturprognose wird heute, 23.09. um 10 Uhr, auf der Bundespressekonferenz vorgestellt. Die ifo-Herbstprognose vom 3.9. hatte das deutsche BIP-Wachstum 2026 bereits auf 1,4 % angehoben." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gemischten Signale – starke deutsche Dienstleistungen, schwächere Industrie, unsichere Eurozone-Werte – erklären, warum die EZB laut ihren jüngsten Aussagen weiter von Sitzung zu Sitzung über die Zinsen entscheiden will, statt sich auf einen festen Kurs festzulegen.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]}
      ],
      reaction: "Der Euro bewegte sich am Dienstag kaum und notierte bei rund 1,145 Dollar (Meldung 1).",
      terms: ["kerninflation", "leitzins"],
      followups: ["e:inflation-what", "e:central-banks-why", "e:ecb-hike"],
      sources: [
        { title: "S&P Global: HCOB Flash Germany PMI", url: "https://www.pmi.spglobal.com/Public/Home/PressRelease/ede734f3d61f450b8f7b99ff2ccceb69" },
        { title: "ifo Institut: ifo Business Climate August 2026", url: "https://www.ifo.de/en/press-release/2026-08-25/ifo-business-climate-rises-august-2026" },
        { title: "Bundespressekonferenz: Termine 23.09.2026", url: "https://www.bundespressekonferenz.de/pressekonferenzen/termine" }
      ]
    },

    /* 4 RENDITEN */
    {
      id: "renditen", cats: ["markets"], when: "Di 22.09. · Handelsschluss",
      headline: "US-Rendite hält sich bei rund 4,96 %, Bund-Rendite gibt leicht auf 3,44 % nach",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen bewegte sich am Dienstag kaum und lag bei rund 4,96 %, nachdem Anleger auf neue Fed-Kommentare und Arbeitsmarktdaten warteten. Die zehnjährige Bundesanleihe rentierte bei rund 3,44 %, leicht niedriger als am Freitag (3,52 %).",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Die US-10-Jahres-Rendite lag am Dienstag laut Bericht bei rund 4,959 %, kaum verändert zum Vortag.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Die deutsche 10-Jahres-Bundrendite lag am Dienstag bei rund 3,44 %, ein Minus von 0,01 Punkten laut Trading Economics, leicht niedriger als der Freitagswert von rund 3,52 %.",
            ask: [{ label: "Was bedeutet das für den Bundeshaushalt?", ref: "e:debt-brake" }] }
        ]},
        { h: "Warum bewegen sich die Renditen?", items: [
          { tag: "position", text: "Berichte nennen als Hintergrund für die US-Rendite die Erwartung neuer Konjunkturdaten sowie mehrere Fed-Reden, die von anhaltenden Inflationsrisiken sprachen (Meldung 2).",
            ask: [{ label: "Was haben Fed-Vertreter gesagt?", ref: "s:2" }] },
          { tag: "fakt", text: "Für die Bund-Rendite nennen die gesichteten Quellen keinen spezifischen Einzelgrund; die leichte Bewegung fiel in den Kontext fallender US-Renditen und Ölpreise." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Renditen nahe der 5-%-Marke wirken über mehrere Kanäle: Sie machen Aktien im Vergleich weniger attraktiv, verteuern Kredite für Unternehmen und den Staat und erhöhen die Zinskosten in Kreditmärkten wie Private Credit.",
            ask: [{ label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Wie wirken Zinsen auf Kreditmärkte?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX (+0,02 %) und Euro Stoxx 50 (+0,18 %) schlossen am Dienstag kaum verändert bis leicht höher (Meldung 1).",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:fed-hike", "e:debt-brake", "chain:rates-to-credit"],
      sources: [
        { title: "CNBC: Treasury yields ease as investors await fresh jobs data, Fed comments", url: "https://www.cnbc.com/amp/2026/09/22/treasury-yield-us-bond-market-trump.html" },
        { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
      ]
    },

    /* 5 GOLD / BITCOIN */
    {
      id: "gold-bitcoin", cats: ["markets"], when: "Di 22.09. Gold und Bitcoin",
      headline: "Gold uneinheitlich bewertet, Bitcoin springt nach Short-Squeeze auf bis zu 87.281 Dollar",
      sec30: "Gold bewegte sich am Dienstag je nach Quelle zwischen rund 4.308 und 4.359 Dollar je Feinunze, belastet von hawkishen Fed-Aussagen, gestützt von Rekord-Goldimporten aus China. Bitcoin sprang auf ein Tageshoch von 87.281 Dollar – den höchsten Stand seit Ende Januar – und konsolidierte am Nachmittag bei rund 85.229 Dollar, getrieben von einem Short-Squeeze und Rekord-Zuflüssen in US-Spot-Bitcoin-ETFs.",
      blocks: [
        { h: "Gold: Uneinheitliche Quellenlage", items: [
          { tag: "unbestaetigt", text: "Für den Goldpreis am Dienstag nennen die gesichteten Quellen deutlich unterschiedliche Stände: 4.307,63 $ (Spot-Schluss, −0,81 %), rund 4.358,80 $ (16:32 Uhr Ostküstenzeit) und 4.346 $ (−0,9 %) in einer weiteren Quelle. Die Differenz von bis zu rund 50 Dollar lässt sich nicht eindeutig auf einen einzelnen Grund zurückführen.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "position", text: "Als Belastungsfaktor nennen Berichte hawkishe Fed-Aussagen, die den Dollar stützten; als Unterstützung werden Rekord-Goldimporte aus China genannt." }
        ]},
        { h: "Bitcoin: Short-Squeeze treibt Kurs", items: [
          { tag: "fakt", text: "Bitcoin erreichte am Dienstag ein Tageshoch von 87.281 Dollar – den höchsten Stand seit Ende Januar 2026 – und konsolidierte am Nachmittag bei rund 85.229 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "fakt", text: "Laut Bericht wurden binnen 24 Stunden Short-Positionen im Volumen von über 750 Mio. Dollar liquidiert; am 21.09. flossen zudem knapp 1 Mrd. Dollar in US-Spot-Bitcoin-ETFs, ein Rekord für 2026." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold und Bitcoin werden beide gelegentlich als „Absicherung” beschrieben, funktionieren aber unterschiedlich: Gold gilt traditionell als sicherer Hafen in Krisenzeiten, Bitcoin wird von vielen Anlegern eher wie eine riskante Wachstumsanlage behandelt – die aktuelle Rally wird vor allem mit technischen Marktfaktoren (Short-Squeeze, ETF-Zuflüsse) erklärt, nicht mit einem klassischen Krisen-Motiv." }
        ]}
      ],
      reaction: "Die US-Rendite hielt sich am Dienstag bei rund 4,96 %, was Gold eigentlich hätte belasten sollen (Meldung 4).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what"],
      sources: [
        { title: "USAGOLD: Daily Precious Metals Market Report, September 22, 2026", url: "https://www.usagold.com/daily-precious-metals-market-report-september-22-2026/" },
        { title: "finanzen.net: Kryptomarkt 22. September 2026 – Bitcoin über 86.000 Dollar", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-bitcoin-ueber-86-000-dollar-wochenstaerkste-krypto-rally-seit-august-solana-9-japan-im-blick-00-15946081" },
        { title: "finanzen.net: Kryptomarkt 22. September 2026 Nachmittag", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-bitcoin-konsolidiert-nach-tageshoch-87-281-dollar-strategy-kauft-bitmine-akkumuliert-eth-648-millionen-shorts-liquidiert-00-15946924" }
      ]
    },

    /* 6 WAHLNACHWEHEN BERLIN/MV + CDU-FÜHRUNGSDEBATTE */
    {
      id: "wahl-nachwehen", cats: ["germany"], when: "Mo 21.–Di 22.09. · Sondierungen und CDU-Debatte",
      headline: "Die Linke lädt SPD und Grüne zu Sondierungsgesprächen in Berlin ein, CDU-Führungsdebatte um Merz hält an",
      sec30: "Nach ihrem Wahlsieg in Berlin lud Die Linke SPD und Grüne am Montag zu „Vorgesprächen” über eine gemeinsame Landesregierung ein, ein Parteitag der Linken zur Zustimmung ist für Freitag geplant. In der CDU hält die Debatte um Kanzler Merz' Führung an, nachdem er das Nebeneinander von privater und gesetzlicher Krankenversicherung als „Gerechtigkeitsproblem” bezeichnet hatte – das Kanzleramt dementierte noch am selben Abend einen Kurswechsel.",
      blocks: [
        { h: "Wie geht es mit der Regierungsbildung in Berlin voran?", items: [
          { tag: "fakt", text: "Die Ko-Vorsitzenden der Berliner Linken, Kerstin Wolter und Maximilian Schirmer, luden SPD und Grüne am 22.09. zu Vorgesprächen über eine mögliche Koalition ein. Geplanter Zeitplan: diese Woche Vorgespräche, am Freitag ein Parteitag der Linken zur Zustimmung, danach Beginn formeller Sondierungen.",
            ask: [{ label: "Wie ist das Wahlergebnis in Berlin ausgefallen?", ref: "e:landtagswahl-why" }] },
          { tag: "position", text: "Wolter sagte laut Bericht sinngemäß, man stehe unmissverständlich an der Seite jüdischen Lebens in Berlin, das sicher, sichtbar und selbstbestimmt gelebt werden können müsse." },
          { tag: "fakt", text: "Linke-Spitzenkandidatin Elif Eralp wurde zur Co-Fraktionsvorsitzenden gewählt und gilt als mögliche künftige Regierende Bürgermeisterin. In den gesichteten Quellen wird eine CDU-Grüne-SPD-Option nicht als aktiv verfolgtes Szenario beschrieben." }
        ]},
        { h: "Was ist bei der CDU-Führungsdebatte neu?", items: [
          { tag: "fakt", text: "Nach CDU-Gremiensitzungen sagte Kanzler Merz am Montag laut Bericht, das Nebeneinander von privater (PKV) und gesetzlicher Krankenversicherung (GKV) sei ein „Gerechtigkeitsproblem”, da Privatversicherte den Eindruck erweckten, schneller Termine zu bekommen." },
          { tag: "fakt", text: "Das Kanzleramt widersprach noch am selben Abend einem Kurswechsel: Merz habe das Krankenversicherungssystem nicht infrage gestellt, weder eine Fusion noch eine Abschaffung der PKV seien geplant." },
          { tag: "position", text: "Juso-Chef Philipp Türmer forderte danach eine Bürgerversicherung, FDP-Vize Henning Höne lehnte dies ab und forderte stattdessen mehr Wettbewerb, CSU-Landesgruppenchef Alexander Hoffmann verteidigte Merz mit dem Hinweis, dieser habe nur die Terminvergabe gemeint." }
        ]},
        { h: "Wie reagiert die CDU auf die Wahlniederlagen?", items: [
          { tag: "position", text: "CDU-Generalsekretärin Franziska Hoppermann sagte laut Bericht, man könne davon ausgehen, dass der Bundeskanzler im Amt bleibe. Fraktionschef Thorsten Frei sicherte Merz die Unterstützung der Bundestagsfraktion zu." },
          { tag: "position", text: "Der frühere CDU-Landeschef in Mecklenburg-Vorpommern, Eckhardt Rehberg, warf Merz laut Bericht „mangelnde Empathie” vor; mehrere CDU-Ministerpräsidenten trafen sich demnach ohne Merz." },
          { tag: "unbestaetigt", text: "Ein Kommentar der „Münchner Merkur” vom 22.09. spekulierte, Merz könnte bei fortgesetzter Blockade der Rentenreform durch Arbeitsministerin Bas SPD-Minister entlassen und eine Minderheitsregierung bilden. Das ist eine Zeitungs-Einschätzung, kein bestätigter Regierungsplan.",
            ask: [{ label: "Worum geht es beim Rentenstreit?", ref: "s:7" }] }
        ]}
      ],
      reaction: "Der Bundestag tagt in dieser Sitzungswoche (KW39) unter anderem zur Rentenreform-Vorstufe „Frühstart-Rente” am Freitag (Meldung 7).",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "t-online: Berliner Linke lädt Grüne und SPD zu Vorgesprächen ein", url: "https://www.t-online.de/nachrichten/deutschland/id_101446214/berliner-linke-laedt-gruene-und-spd-zu-vorgespraechen-ein.html" },
        { title: "ZDFheute: Wahlen in Berlin und MV – Sondierungen für Rot-Rot-Grün geplant", url: "https://www.zdfheute.de/politik/deutschland/wahl-mecklenburg-vorpommern-2026-wahl-berlin-reaktionen-parteien-liveticker-100.html" },
        { title: "Tagesspiegel: Doch kein Kurswechsel bei den Krankenkassen? Kanzleramt rudert nach Merz-Aussage zurück", url: "https://www.tagesspiegel.de/politik/doch-kein-kurswechsel-bei-den-krankenkassen-kanzleramt-rudert-nach-merz-aussage-zuruck-16081713.html" },
        { title: "t-online: Juso-Chef Türmer fordert nach Merz-Aussage Bürgerversicherung", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101446642/juso-chef-tuermer-fordert-nach-merz-aussage-buergerversicherung.html" },
        { title: "ARIVA: Pressestimme Münchner Merkur zu Merz und Linkspartei", url: "https://www.ariva.de/news/pressestimme-muenchner-merkur-zu-merz-linkspartei-12143811" }
      ]
    },

    /* 7 SPRIT / RENTE / HAUSHALT */
    {
      id: "sprit-rente-haushalt", cats: ["germany"], when: "Bundesrat-Abstimmung 25.09. · Haushaltsausschuss 24.09.",
      headline: "Spritpreis-Entlastung soll am 25.9. den Bundesrat passieren, Haushaltsausschuss startet Einzelplan-Beratungen",
      sec30: "Die im September beschlossene Senkung der Energiesteuer auf Kraftstoffe um 14 Cent je Liter soll am Donnerstag, 25.9., den Bundesrat passieren, damit sie zum 1.10. in Kraft treten kann. Der Haushaltsausschuss beginnt morgen, 24.9., mit den ersten Einzelplan-Beratungen zum Bundeshaushalt 2027; die Bereinigungssitzung ist erst für Ende November angesetzt. Bei der Rentenreform gibt es laut gesichteten Quellen für die vergangenen Tage keine neuen offiziellen Wortmeldungen von Arbeitsministerin Bas oder Kanzler Merz.",
      blocks: [
        { h: "Wie ist der Stand bei der Spritpreis-Entlastung?", items: [
          { tag: "fakt", text: "Bund und Länder hatten eine befristete Senkung der Energiesteuer auf Benzin und Diesel um 14 Cent je Liter ab 1.10.2026 vereinbart, inklusive Mehrwertsteuereffekt rund 17 Cent je Liter, befristet bis Jahresende. Gesamtvolumen rund 2,5 Mrd. €, Bund und Länder tragen je die Hälfte.",
            ask: [{ label: "Warum steigen oder fallen Ölpreise?", ref: "e:why-oil-up-geo" }] },
          { tag: "unbestaetigt", text: "Die abschließende Zustimmung des Bundesrats ist laut Zeitplan für den 25.09.2026 vorgesehen; ob die Maßnahme bis zum Redaktionsschluss bereits final verabschiedet wurde, ließ sich aus den gesichteten Quellen nicht abschließend bestätigen." },
          { tag: "fakt", text: "Ein früherer Tankrabatt kam laut Bundeskartellamt nur zu rund 13,8 von 16,7 Cent tatsächlich bei Verbrauchern an – ein Punkt, der die aktuelle Debatte begleitet." }
        ]},
        { h: "Was ist bei der Rente der Stand?", items: [
          { tag: "fakt", text: "Die Alterssicherungskommission hatte der Bundesregierung im Juni 2026 insgesamt 33 Empfehlungen übergeben, darunter die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren und ein dynamisches Renteneintrittsalter. Der Koalitionsausschuss beschloss am 2.7., alle Empfehlungen vollständig und zügig umzusetzen, Ziel ist ein abgeschlossenes Gesetzgebungsverfahren bis Jahresende 2026.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Arbeitsministerin Bärbel Bas (SPD) hatte Anfang September laut Bericht weiteren Gesprächsbedarf angemeldet, wollte das Paket aber nicht grundsätzlich neu aufmachen: „Ich warne davor, das Paket komplett aufzumachen.” MV-Ministerpräsidentin Manuela Schwesig lehnte eine Kopplung des Renteneintrittsalters an die Lebenserwartung bis 70 ab und verwies auf hohe Ablehnungswerte in Umfragen." },
          { tag: "unbestaetigt", text: "Für den Zeitraum 21.–23.09. fanden sich in den gesichteten Quellen keine neuen, direkt bestätigten Wortmeldungen von Bas oder Merz speziell zur Rente." },
          { tag: "fakt", text: "Ein separates Vorhaben, die „Frühstart-Rente” (10 € monatlicher Staatszuschuss pro Kind in einen kapitalgedeckten Altersvorsorgevertrag), wird am Freitag, 25.09., erstmals im Bundestag beraten." }
        ]},
        { h: "Wie steht der Haushalt 2027?", items: [
          { tag: "fakt", text: "Finanzminister Klingbeil hatte den Entwurf (Ausgaben 555,4 Mrd. €, 30,9 Mrd. € mehr als 2026) am 8.9. in den Bundestag eingebracht. Die 46. Sitzung des Haushaltsausschusses mit den ersten Einzelplan-Beratungen ist für morgen, 24.09., angesetzt; die abschließende Bereinigungssitzung ist erst für Ende November (24.–27.11.2026) vorgesehen.",
            ask: [{ label: "Wie entsteht der Bundeshaushalt?", ref: "e:haushalt-basics" }, { label: "Was ist die Schuldenbremse?", ref: "e:debt-brake" }] }
        ]},
        { h: "Was ist für den 26.09. geplant?", items: [
          { tag: "fakt", text: "Der DGB ruft für Samstag, 26.09., unter dem Motto „Hart verdient!” zu einem bundesweiten Aktionstag in 15 Großstädten auf, gerichtet u. a. gegen eine geplante Arbeitszeitreform sowie gegen mögliche Einschnitte bei Kündigungsschutz, Krankengeld, Pflege und Rente." }
        ]}
      ],
      reaction: "Die Beratungen fallen in die Woche nach den Landtagswahlen in Berlin und Mecklenburg-Vorpommern (Meldung 6).",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:rente-basics", "e:why-oil-up-geo"],
      sources: [
        { title: "Bundesregierung: Entlastung bei den Spritpreisen – Steuersenkung für Diesel und Benzin", url: "https://www.bundesregierung.de/breg-de/aktuelles/entlastung-spritpreise-2453192" },
        { title: "netz-trends.de: Tankrabatt ab 1. Oktober – Energiesteuer minus 14 Cent", url: "https://www.netz-trends.de/tankrabatt-1-oktober-2026-energiesteuer-14-cent-bundeskartellamt-13-8-von-16-7-cent-19-september-2026/" },
        { title: "Bundesregierung: FAQ zum Bericht der Alterssicherungskommission", url: "https://www.bundesregierung.de/breg-de/aktuelles/faq-rentenreform-2444534" },
        { title: "Tagesspiegel: Schwesig gegen Rente mit 70, Bas hat Gesprächsbedarf", url: "https://www.tagesspiegel.de/politik/so-wie-der-kanzler-sich-das-vorstellt-wird-das-nicht-funktionieren-schwesig-gegen-rente-mit-70-bas-hat-gesprachsbedarf-16011585.html" },
        { title: "Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" }
      ]
    },

    /* 8 IRAN-DIPLOMATIE + ÖLPREIS */
    {
      id: "iran-diplomatie-oel", cats: ["world", "geo"], when: "Di 22.09. UN-Vollversammlung, New York",
      headline: "Witkoff und Araghchi verhandeln in New York, Trump droht Iran mit „Vernichtung”, Ölpreis fällt unter 100 Dollar",
      sec30: "Am Rande der UN-Vollversammlung trafen sich Irans Außenminister Araghchi und US-Sondergesandter Witkoff am Dienstag rund drei Stunden zu vermittelten Gesprächen, ein weiteres Treffen wird erwartet. Zugleich sagte Präsident Trump vor der Vollversammlung, er stehe vor der Entscheidung zwischen einem Abkommen mit Iran oder dessen „Vernichtung”, rechne aber erst nach den US-Zwischenwahlen im November mit einem Deal. Der Ölpreis fiel unter 100 Dollar, nachdem Iran laut einem Agenturbericht ein Angebot zur Wiedereröffnung der Straße von Hormus signalisiert hatte.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Irans Außenminister Abbas Araghchi und der US-Sondergesandte Steve Witkoff trafen sich am 22.09. in New York rund drei Stunden zu einem von Katars Premierminister Scheich Mohammed bin Abdulrahman Al Thani vermittelten Gespräch, an dem auch Jared Kushner teilnahm.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "US-Sondergesandter Witkoff nannte die Gespräche laut Bericht „vielversprechend, konstruktiv”, Trump sprach von einem „sehr guten, sehr produktiven” Treffen mit einem weiteren Termin „in naher Zukunft”." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "position", text: "Präsident Trump sagte vor der UN-Vollversammlung, er stehe vor einer „großen Entscheidung”: entweder ein Abkommen mit Iran oder die „Vernichtung” der Islamischen Republik. Er rechne aber erst nach den US-Zwischenwahlen im November mit einem Deal und beanspruchte, Iran am Bau einer Atomwaffe gehindert zu haben." },
          { tag: "position", text: "Laut iranischer Darstellung fordert Teheran im Gegenzug für eine Öffnung der Straße von Hormus die Aufhebung der US-Marineblockade, die Freigabe eingefrorener iranischer Vermögenswerte und ein Ende des Kriegs auf allen Fronten, einschließlich Libanon. Das ist die iranische Position, kein bestätigtes Verhandlungsergebnis." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Der Krieg zwischen den USA/Israel und Iran läuft seit den Angriffen vom 28. Februar 2026 als Zermürbungskrieg weiter; ein Waffenstillstand im April und ein Memorandum of Understanding vom Juni 2026 scheiterten und liefen im August formell aus." },
          { tag: "position", text: "Die Iranische Revolutionsgarde (IRGC) erklärte laut Bericht, die USA und Israel müssten einen Rückzug aus der Region akzeptieren. Das ist die Position der IRGC." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "fakt", text: "Japans Nachrichtenagentur Kyodo berichtete, Iran habe angeboten, die Straße von Hormus innerhalb von sieben Tagen nach Aufhebung der US-Blockade iranischer Häfen wieder zu öffnen. Der Ölpreis Brent fiel daraufhin am Dienstag auf rund 99 Dollar je Barrel, die fünfte Verlustsitzung in Folge und den niedrigsten Stand seit zwei Wochen.",
            ask: [{ label: "Was bedeutet ein Ölpreis um 99 $?", ref: "n:brent" }] },
          { tag: "einordnung", text: "Eine tatsächliche Wiedereröffnung der Straße von Hormus, durch die laut Angaben rund ein Fünftel der weltweiten Ölproduktion verschifft wird, würde das globale Ölangebot erheblich vergrößern und den Preis nach Einschätzung von Marktbeobachtern voraussichtlich weiter drücken." }
        ]}
      ],
      reaction: "Der Ölpreisrückgang stützte am Dienstag zeitweise auch europäische Aktienmärkte (Meldung 1).",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:brent-wti", "e:oil-inflation", "e:energy-germany"],
      sources: [
        { title: "CNN: UN General Assembly live updates – Trump on Iran", url: "https://www.cnn.com/2026/09/22/world/live-news/un-general-assembly-trump" },
        { title: "NBC News: Trump address to United Nations General Assembly, Iran", url: "https://www.nbcnews.com/politics/trump-administration/trump-address-united-nations-general-assembly-iran-war-rcna599085" },
        { title: "ANI News: Witkoff says US-Iran talks were promising, constructive", url: "https://aninews.in/news/world/us/steve-witkoff-says-us-iran-talks-were-promising-constructive-as-iran-confirms-fm-aragchis-meeting-with-envoy20260923060941/" },
        { title: "Fortune: Current price of oil, Sept. 22, 2026", url: "https://fortune.com/article/price-of-oil-09-22-2026/" },
        { title: "Al Jazeera: IRGC says US, Israel must accept withdrawal from region (live blog)", url: "https://www.aljazeera.com/news/liveblog/2026/9/22/iran-war-live-irgc-says-us-israel-must-accept-withdrawal-from-region" }
      ]
    },

    /* 9 UKRAINE/RUSSLAND */
    {
      id: "ukraine-russland", cats: ["world", "geo"], when: "20.09. Moskau-Angriff · 21.09. Duma-Endergebnis · 22.09. Zelensky-Trump",
      headline: "Duma-Wahl bringt Einiges Russland Rekord-Sitzzahl, Moskau-Angriff fordert drei Tote, Zelensky trifft Trump in New York",
      sec30: "Nach der russischen Staatsduma-Wahl vom 18.–20.09. gewann Putins Partei Einiges Russland laut vorläufigem Endergebnis rund 58 % und eine Rekord-Sitzzahl von 355 der 450 Mandate. Beim ukrainischen Drohnenangriff auf Moskau in der Nacht zum 20.09. starben laut Gouverneur drei Menschen, rund 20 wurden verletzt; Russlands Verteidigungsministerium meldete mit 1.110 abgeschossenen Drohnen einen neuen Jahresrekord. Am Dienstag trafen sich Präsident Zelensky und Präsident Trump am Rande der UN-Vollversammlung in New York.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Bei der Staatsduma-Wahl vom 18.–20.09. gewann Einiges Russland laut Berichten rund 58 % der Listenstimmen und eine Rekord-Sitzzahl von 355 der 450 Mandate. Die Kommunisten (KPRF) kamen auf 13,8 % (40 Sitze), die LDPR auf 25 Sitze, Neue Leute auf 20 Sitze. Die Wahlbeteiligung lag bei 56,66 %.",
            ask: [{ label: "Was ist ein Basispunkt (zum Größenvergleich)?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "Beim ukrainischen Drohnenangriff auf Moskau in der Nacht zum 20.09. – während der letzten Stunden der Duma-Wahl – starben laut Gouverneur der Region Moskau drei Menschen, rund 20 wurden verletzt, darunter drei Kinder. Getroffen wurde unter anderem die Gazpromneft-Raffinerie im Stadtteil Kapotnja. Russlands Verteidigungsministerium meldete 1.110 abgeschossene Drohnen in 19 Regionen plus der Krim, einen neuen Jahresrekord (vorheriger Höchstwert: 822 im August)." }
        ]},
        { h: "Wie ist die Lage an der Front?", items: [
          { tag: "fakt", text: "Der ukrainische Generalstab meldete für den 22.09. laut Bericht 248 Gefechte binnen 24 Stunden, Schwerpunkt weiterhin der Raum Pokrovsk (33 abgewehrte Angriffe). Russland flog nach ukrainischen Angaben 87 Luftangriffe mit 305 Gleitbomben sowie 9.647 Kamikaze-Drohnen – Angaben der ukrainischen Seite, unabhängig nicht überprüft." }
        ]},
        { h: "Was besprachen Zelensky und Trump?", items: [
          { tag: "fakt", text: "Präsident Zelensky traf Präsident Trump am 22.09. am Rande der UN-Vollversammlung in New York. Themen waren laut Berichten mögliche Deeskalationsschritte, eine Energie-Waffenruhe (Ukraine fordert ein Ende der Angriffe auf Energieinfrastruktur), Luftverteidigung und die Produktion von Patriot-Abfangraketen in der Ukraine.",
            ask: [{ label: "Was ist die Straße von Hormus – Vergleich zu Öl-Diplomatie?", ref: "e:hormuz" }] },
          { tag: "position", text: "Zelensky nannte das Treffen laut Bericht „positiv und produktiv”. Für Oktober 2026 wurden trilaterale Gespräche USA-Ukraine-Russland in den Vereinigten Arabischen Emiraten in Aussicht gestellt." }
        ]},
        { h: "Wirtschaftliche und politische Auswirkungen", items: [
          { tag: "einordnung", text: "Angriffe auf russische Ölraffinerien wie in Kapotnja zielen nach Einschätzung von Beobachtern auf die Treibstoffversorgung und Staatseinnahmen Russlands aus dem Energiegeschäft. Das letzte bestätigte EU-Sanktionspaket gegen Russland (21. Paket) stammt vom 23. Juli 2026; ein neues Paket speziell für die Woche vom 21.–23.09. wurde in den gesichteten Quellen nicht gefunden." }
        ]}
      ],
      reaction: "Der Angriff und das Treffen fallen in eine Woche mit paralleler US-Iran-Diplomatie am Rande derselben UN-Vollversammlung (Meldung 8).",
      terms: [],
      followups: ["e:central-banks-why"],
      sources: [
        { title: "Al Jazeera: Pro-Putin party wins supermajority amid ramped-up Ukrainian attacks", url: "https://www.aljazeera.com/news/2026/9/21/pro-putin-party-wins-supermajority-amid-ramped-up-ukrainian-attacks" },
        { title: "CNN: Moscow, Ukraine attack, Russia election", url: "https://www.cnn.com/2026/09/20/europe/moscow-ukraine-attack-russia-election" },
        { title: "Bloomberg: Moscow refinery hit as Russia reports largest 2026 drone attack", url: "https://www.bloomberg.com/news/articles/2026-09-20/moscow-refinery-hit-as-russia-reports-largest-2026-drone-attack" },
        { title: "Kyiv Independent: Zelensky arrives in US for high-stakes Trump meeting", url: "https://kyivindependent.com/zelensky-arrives-in-us-for-high-stakes-trump-meeting-un-general-assembly/" },
        { title: "112.ua: 248 Gefechte und 87 Luftangriffe am 22. September (ukrainische Angaben)", url: "https://112.ua/en/za-dobu-22-veresna-248-bojovih-zitknen-i-87-aviaudariv-na-fronti-osnovna-aktivnist-na-pokrovskomu-napramku-186602" }
      ]
    },

    /* 10 XI JINPING USA-BESUCH */
    {
      id: "xi-usa-besuch", cats: ["world"], when: "23.–25.09.2026 · Staatsbesuch Washington",
      headline: "Xi Jinping beginnt dreitägigen Staatsbesuch in Washington, erster seit 2015",
      sec30: "Chinas Präsident Xi Jinping besucht ab heute, 23.09., für drei Tage die USA auf Einladung von Präsident Trump – sein erster Staatsbesuch in Washington seit 2015 und das zweite persönliche Treffen der beiden in diesem Jahr. Am 24.09. empfängt Trump Xi im Weißen Haus mit militärischen Ehren, gefolgt von einem Staatsbankett mit Vertretern großer US-Tech-Konzerne. Auf der Agenda stehen laut Berichten Handel, Investitionen, KI, der Iran-Krieg und Taiwan.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Xi Jinping reist am 23.09. zu einem dreitägigen Staatsbesuch (23.–25.09.) nach Washington – der erste Staatsbesuch eines chinesischen Präsidenten dort seit 2015. Am 24.09. ist ein Empfang im Weißen Haus mit militärischen Ehren vorgesehen, danach ein Staatsbankett im East Room mit Vertretern großer US-Tech-Konzerne.",
            ask: [{ label: "Was ist ein Hyperscaler (zum Kontext US-Tech-Konzerne)?", ref: "t:hyperscaler" }] },
          { tag: "fakt", text: "Es ist das zweite persönliche Treffen zwischen Xi und Trump in diesem Jahr. Xi hatte zuvor Anfang September Ägypten besucht." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Ein Staatsbesuch dieser Größenordnung findet nach Einschätzung von Beobachtern selten statt und signalisiert den Versuch beider Seiten, die Handelsbeziehungen und weitere Streitpunkte direkt zu verhandeln, statt sie nur über untergeordnete Kanäle zu klären." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beteiligt sind Präsident Xi Jinping und Präsident Donald Trump sowie laut Bericht Vertreter großer US-Technologiekonzerne beim Staatsbankett." }
        ]},
        { h: "Worüber wird laut Berichten verhandelt?", items: [
          { tag: "unbestaetigt", text: "Als Themen werden Handel, Investitionen, Künstliche Intelligenz, der Iran-Krieg und Taiwan genannt. Zu konkreten Ergebnissen oder Vereinbarungen lagen zum Redaktionsschluss noch keine Berichte vor, da der Besuch erst heute beginnt." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "einordnung", text: "Ein Treffen dieser Größenordnung zwischen den beiden größten Volkswirtschaften wird von Marktbeobachtern häufig als potenzieller Kurstreiber für Technologie- und Exportwerte gesehen, insbesondere falls es zu neuen Handelsvereinbarungen kommt. Konkrete Marktreaktionen lagen zum Redaktionsschluss noch nicht vor." }
        ]}
      ],
      reaction: "Der Besuch fällt in dieselbe UN-Vollversammlungswoche wie die US-Iran-Diplomatie (Meldung 8) und das Zelensky-Trump-Treffen (Meldung 9).",
      terms: ["hyperscaler"],
      followups: ["e:ai-capex"],
      sources: [
        { title: "U.S. News: China's Xi to visit the US from September 23-25", url: "https://www.usnews.com/news/world/articles/2026-09-21/chinas-xi-to-visit-the-us-from-september-23-25" },
        { title: "South China Morning Post: Xi Jinping will pay state visit to US", url: "https://www.scmp.com/news/china/diplomacy/article/3368223/chinese-president-xi-jinping-will-pay-state-visit-us-week-beijing-confirms" }
      ]
    },

    /* 11 NATO BREUER + RÜSTUNGSINDUSTRIE */
    {
      id: "nato-breuer-ruestung", cats: ["defence"], when: "19.09. NATO-Wahl · laufende Rüstungsaufträge",
      headline: "Bundeswehrverband drängt auf rasche Breuer-Nachfolge, Rheinmetall-Aktie schwankt zwischen 993 und 1.012 Euro",
      sec30: "Nach der Wahl von Generalinspekteur Carsten Breuer zum künftigen NATO-Militärausschuss-Vorsitzenden drängt Bundeswehrverbandschef André Wüstner Verteidigungsminister Pistorius, dessen Nachfolge rasch zu klären. Breuer tritt das NATO-Amt im Sommer 2027 an, als erster Deutscher seit General Kujat (2002–2005). Bei den Rüstungswerten schwankte die Rheinmetall-Aktie am Dienstag zwischen rund 993,50 und 1.012,20 Euro und schloss den Euro Stoxx 50 mit −1,90 % als einer der Verlierer.",
      blocks: [
        { h: "Was ist bei der NATO passiert?", items: [
          { tag: "fakt", text: "General Carsten Breuer wurde am 19.09. in Kopenhagen von den Verteidigungschefs der 32 NATO-Mitgliedstaaten zum künftigen Vorsitzenden des NATO-Militärausschusses gewählt. Er tritt das Amt im Sommer 2027 für drei Jahre an und folgt auf den italienischen Admiral Giuseppe Cavo Dragone. Zuletzt hatte General Harald Kujat (2002–2005) als Deutscher dieses Amt inne.",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 % des BIP?", ref: "e:nato-target" }] },
          { tag: "position", text: "Verteidigungsminister Boris Pistorius lobte laut Bericht Breuers „außergewöhnliche strategische Weitsicht”. Bundeswehrverbandschef André Wüstner drängt Pistorius laut Bericht, die Nachfolge als Generalinspekteur rasch zu klären." }
        ]},
        { h: "Wie steht die Rheinmetall-Aktie?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie schwankte am Dienstag zwischen rund 993,50 und 1.012,20 Euro und schloss den Euro Stoxx 50 mit −1,90 % als einer der Verlierer des Index.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Rheinmetall bewirbt sich mit General Dynamics Land Systems um den Ersatz der US-Bradley-Kampffahrzeugflotte (Volumen über 45 Mrd. $ für rund 4.000 Fahrzeuge). Prototypentests laufen bis 2027, eine Vergabeentscheidung steht noch aus." }
        ]},
        { h: "Was melden andere Rüstungsfirmen?", items: [
          { tag: "fakt", text: "TKMS näherte sich laut Berichten zuletzt seinem Allzeithoch (rund 84,40 €, +1,44 % an einem Handelstag). Der Bund plant weiterhin einen Einstieg bei KNDS, was auch als Kursthema für TKMS gilt." },
          { tag: "unbestaetigt", text: "Zu neuen September-Auftragszahlen von Hensoldt für KNDS-Radar- und Optronik-Ausrüstung ließen sich in den gesichteten Quellen keine aktuellen Zahlen eindeutig bestätigen, nur die Kursreaktion." }
        ]},
        { h: "Einordnung", items: [
          { tag: "einordnung", text: "Dass die Rheinmetall-Aktie trotz voller Auftragsbücher schwankt, zeigt, dass Auftragslage und Aktienkurs nicht immer gleich laufen – zuletzt spielten auch Nachrichten zur möglichen Wiederannäherung zwischen den USA und Iran eine Rolle für Rüstungswerte allgemein.",
            ask: [{ label: "Was ist bei der Iran-Diplomatie neu?", ref: "s:8" }] }
        ]}
      ],
      reaction: "Rheinmetall zählte am Dienstag zu den Verlierern im Euro Stoxx 50 (Meldung 1).",
      terms: [],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "Euronews: Germany's defence chief Carsten Breuer chosen to head NATO Military Committee", url: "https://www.euronews.com/my-europe/2026/09/19/germanys-defence-chief-carsten-breuer-chosen-to-head-nato-military-committee" },
        { title: "mittelstand-nachrichten.de: Carsten Breuer wird Nato-Militärchef, Pistorius soll Nachfolge schnell regeln", url: "https://www.mittelstand-nachrichten.de/aktuell/dts_politik/carsten-breuer-wird-nato-militaerchef-pistorius-soll-nachfolge-als-generalinspekteur-schnell-regeln/" },
        { title: "finanzen.at: Euro Stoxx 50 aktuell – Rheinmetall unter den Verlierern", url: "https://www.finanzen.at/nachrichten/aktien/euro-stoxx-50-aktuell-zum-ende-des-dienstagshandels-gewinne-im-euro-stoxx-50-1036564528" },
        { title: "euronews.de: Rheinmetall bewirbt sich um US-Bradley-Nachfolge", url: "https://de.euronews.com/my-europe/2026/09/03/rheinmetall-schuetzenpanzer-lynx-luchs-usa" }
      ]
    },

    /* 12 DEALS: GFL / PRIORITY TECHNOLOGY / TELIX-ITM */
    {
      id: "deals-gfl-priority", cats: ["deals", "pe"], when: "GFL weiter offen · Priority Technology 21.09. · Telix-ITM 20.09.",
      headline: "Priority Technology geht in CEO-geführtem 1,6-Mrd.-Dollar-Deal von der Börse, GFL-Bietergefecht weiter offen",
      sec30: "Der Zahlungsdienstleister Priority Technology Holdings wird für 8,05 Dollar je Aktie (rund 1,6 Mrd. $, 38 % Prämie) von einer Investorengruppe unter Führung von CEO Thomas Priore und Searchlight Capital Partners von der Börse genommen. Telix Pharmaceuticals übernimmt den deutschen Radiopharmazeutika-Hersteller ITM für rund 1,65 Mrd. $, überwiegend in Aktien. Beim kanadischen Entsorger GFL Environmental (≈ 18 Mrd. $ Marktwert, ≈ 10 Mrd. $ Schulden) prüft ein Sonderausschuss weiterhin die Gebote zweier Investorenkonsortien, eine Entscheidung steht noch aus.",
      deal: { value: "≈ 1,6 Mrd. $ (Eigenkapitalwert)", buyer: "Investorengruppe um CEO Thomas Priore / Searchlight Capital Partners", target: "Priority Technology Holdings", sector: "Zahlungsabwicklung / Fintech", type: "CEO-geführtes Going-private (Take-private)" },
      blocks: [
        { h: "Priority Technology: Was ist passiert?", items: [
          { tag: "fakt", text: "Priority Technology Holdings unterzeichnete am 21.09. eine Vereinbarung, wonach eine von CEO Thomas Priore geführte Investorengruppe das Unternehmen für 8,05 Dollar je Aktie in bar übernimmt (Eigenkapitalwert rund 1,6 Mrd. $) – eine Prämie von rund 38 % zum letzten Schlusskurs bzw. rund 65 % zum unbeeinflussten Kurs vor der ersten Offenlegung im November 2025.",
            ask: [{ label: "Was passiert bei einer Übernahme?", ref: "e:ma-steps" }, { label: "Warum nehmen Investoren Firmen von der Börse?", ref: "e:take-private-why" }] },
          { tag: "fakt", text: "Die Finanzierung erfolgt laut Bericht teils über Eigenkapitalzusagen von Fonds, die von Searchlight Capital Partners beraten werden. Das Closing wird für die erste Hälfte 2027 erwartet, vorbehaltlich Zustimmung der von der Investorengruppe unabhängigen Aktionäre und Behörden.",
            ask: [{ label: "Welche Risiken bestehen bis zum Closing?", ref: "e:deal-risks" }] }
        ]},
        { h: "Telix–ITM: Was ist passiert?", items: [
          { tag: "fakt", text: "Telix Pharmaceuticals kündigte am 20.09. die Übernahme des deutschen Radiopharmazeutika-Herstellers ITM Isotope Technologies Munich für rund 1,65 Mrd. $ an (cash- und schuldenfreie Bewertung). ITM-Aktionäre erhalten rund 1,25 Mrd. $ überwiegend in Telix-Aktien (11,841 $ je ITM-Aktie), dazu bis zu 700 Mio. $ erfolgsabhängige Zahlungen bei Erreichen regulatorischer und kommerzieller Meilensteine für den Wirkstoff ITM-11.",
            ask: [{ label: "Was ist Enterprise Value und EBITDA-Multiple?", ref: "e:ev-ebitda" }] },
          { tag: "unbestaetigt", text: "Zu einem EV/EBITDA-Multiple oder beteiligten Finanzierungsbanken wird in den gesichteten Quellen nichts genannt. Das Closing wird bis Jahresende 2026 erwartet." }
        ]},
        { h: "GFL Environmental: Bietergefecht weiter offen", items: [
          { tag: "fakt", text: "Bei GFL Environmental prüft ein im Juli gebildetes Sonderkomitee weiterhin die Gebote von KKR mit Energy Capital Partners und Blackstone auf der einen sowie Brookfield Asset Management mit IFM Investors auf der anderen Seite und könnte höhere Gebote fordern. GFL hat einen Marktwert von rund 18 Mrd. $ und rund 10 Mrd. $ Schulden.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] },
          { tag: "unbestaetigt", text: "Eine Entscheidung wird laut mit der Sache vertrauten Personen „in den kommenden Wochen” für möglich gehalten; der Zeitplan kann sich noch ändern, weitere Bieter könnten hinzukommen." }
        ]}
      ],
      reaction: "Alle drei Deals sind noch nicht abgeschlossen (\"pending\"), bis zum Closing können sich Details noch ändern.",
      terms: ["take-private", "lbo", "enterprise-value", "closing"],
      followups: ["e:ma-steps", "e:take-private-why", "e:lbo", "e:pe-money", "e:deal-risks", "e:ev-ebitda"],
      sources: [
        { title: "Digital Transactions: Priority Announces It Will Go Private in a $1.6 Billion Deal", url: "https://www.digitaltransactions.net/priority-announces-it-will-go-private-in-a-1-6-billion-deal/" },
        { title: "InsideArbitrage: CEO Thomas Priore led investor group to take Priority Technology private", url: "https://www.insidearbitrage.com/2026/09/ceo-thomas-priore-led-investor-group-to-take-priority-technology-private-for-1-6-billion/" },
        { title: "SEC/Telix Pharmaceuticals: Form 6-K – ITM acquisition announcement", url: "https://www.sec.gov/Archives/edgar/data/0002007191/000162828026058126/announcement.htm" },
        { title: "Financier Worldwide: Telix Pharmaceuticals to acquire Isotope Technologies for $1.65bn", url: "https://www.financierworldwide.com/fw-news/2026/9/22/telix-pharmaceuticals-to-acquire-isotope-technologies-for-165bn" },
        { title: "Private Equity Wire: Blackstone and Brookfield lead rival PE consortia in GFL takeover race", url: "https://www.privateequitywire.co.uk/blackstone-and-brookfield-lead-rival-pe-consortia-in-gfl-takeover-race/" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit", cats: ["credit"], when: "Anfang Sept. Loparex · Fitch-Report Q2 2026",
      headline: "Blue Owl schreibt Loparex-Kredit weiter ab, Morgan Stanley warnt vor steigenden Direct-Lending-Ausfällen durch KI-Disruption",
      sec30: "Blue Owls Business Development Company OBDC bewertet einen Second-Lien-Kredit an den insolvenzgefährdeten Folienhersteller Loparex weiterhin nur mit rund 5 Cent je Dollar. Ein Fitch-Report zeigt, dass 10 von 16 beobachteten nicht börsengehandelten BDCs im zweiten Quartal 2026 Rücknahmewünsche nicht vollständig bedienen konnten. Morgan Stanley geht laut Bericht davon aus, dass Direct-Lending-Ausfälle wegen KI-bedingter Disruption bei Software-Kreditnehmern auf bis zu 8 % steigen könnten, nahe dem Corona-Höchststand.",
      blocks: [
        { h: "Was ist der Stand bei Loparex?", items: [
          { tag: "fakt", text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex weiterhin mit nur rund 5 Cent je Dollar (Ende März noch rund 63 Cent). Ein First-Lien-Kredit steht bei rund 22 Cent. Vier Kredite mit zusammen 122,43 Mio. $ Wert zum Jahresende wurden bis Juni auf nur noch 8,34 Mio. $ abgeschrieben – ein Rückgang von rund 93 %.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Was ist ein First-Lien- bzw. Second-Lien-Kredit?", ref: "t:first-lien" }] },
          { tag: "fakt", text: "Auslöser war laut Bericht ein gescheiterter M&A-Deal zur Eigenkapitalzufuhr; Loparex verpasste im Juni eine Zinszahlung auf die Second-Lien-Schulden und befand sich seitdem in einer bis September laufenden Forbearance-Vereinbarung. Moody's stuft Loparex als „in default” ein und nennt ein mögliches Chapter-11-Insolvenzrisiko." }
        ]},
        { h: "Was zeigt der Fitch-Report zu BDCs?", items: [
          { tag: "fakt", text: "Laut Fitch-Ratings-Report für das zweite Quartal 2026 konnten 10 von 16 beobachteten nicht börsengehandelten BDCs Rücknahmewünsche nicht vollständig bedienen. Die durchschnittliche Rücknahmequote stieg auf 10,3 % der Anteile (Q1: 9,7 %), mit einer Spanne von 1,3 % bis 38,1 %.",
            ask: [{ label: "Warum begrenzen Kreditfonds Rücknahmen?", ref: "e:redemption-limits" }] },
          { tag: "fakt", text: "Insgesamt forderten Anleger im zweiten Quartal 2026 laut Bericht 15,6 Mrd. $ an Rücknahmen bei den beobachteten BDCs." }
        ]},
        { h: "Was sagt Morgan Stanley zur KI-Disruption?", items: [
          { tag: "position", text: "Morgan Stanley geht laut Bericht davon aus, dass Direct-Lending-Ausfälle auf bis zu 8 % steigen könnten, nahe dem Höchststand während der Corona-Pandemie, weil KI-bedingte Disruption den Druck auf Software-Kreditnehmer verstärkt. Softwareunternehmen machen im Median rund 25 % der BDC-Portfolios aus. Das ist eine Prognose, kein Ist-Wert.",
            ask: [{ label: "Was ist bei Meta Muse los – Beispiel für KI-Disruption?", ref: "s:14" }] },
          { tag: "fakt", text: "Zum Vergleich: Der Cliffwater Direct Lending Index bezifferte die realisierten Verluste für 2025 auf 0,70 % gegenüber einem historischen Durchschnitt von 1,01 %." }
        ]},
        { h: "Was hat das mit den Zinsen zu tun?", items: [
          { tag: "einordnung", text: "Viele Private-Credit-Kredite sind variabel verzinst (SOFR plus Aufschlag). Solange die US-Rendite und SOFR-nahe Referenzzinsen nahe 5 % bleiben, zahlen Schuldner mehr. Das erhöht die Erträge der Fonds, belastet aber schwächere Kreditnehmer zusätzlich.",
            ask: [{ label: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?", ref: "e:sofr-spread" }, { label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }] }
        ]}
      ],
      reaction: "Die US-Rendite (und damit SOFR-nahe Referenzzinsen) hielt sich am Dienstag bei rund 4,96 % (Meldung 4).",
      terms: ["sofr", "first-lien", "second-lien", "default-rate", "non-accrual", "bdc", "nav"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Bloomberg: Blue Owl slashes private loan to near zero amid bankruptcy risk", url: "https://www.bloomberg.com/news/articles/2026-09-05/blue-owl-slashes-private-loan-to-near-zero-amid-bankruptcy-risk" },
        { title: "Private Equity Wire: Blue Owl slashes Loparex loan valuation as bankruptcy risk mounts", url: "https://www.privateequitywire.co.uk/blue-owl-slashes-loparex-loan-valuation-as-bankruptcy-risk-mounts/" },
        { title: "Connect Money: Perpetual non-traded BDCs can absorb elevated redemptions – Fitch", url: "https://www.connectmoney.com/stories/perpetual-non-traded-bdcs-can-absorb-elevated-redemptions-fitch/" },
        { title: "Dechert: Don't believe the headlines – a defense of BDCs and private credit", url: "https://www.dechert.com/knowledge/the-cred/2026/6/don-t-believe-the-headlines--a-defense-of-bdcs-and-private-credi.html" }
      ]
    },

    /* 14 META MUSE / KI-SICHERHEIT */
    {
      id: "meta-muse-ki", cats: ["tech", "markets"], when: "8.–22.09.2026 · Muse-Start und Marktreaktion",
      headline: "Metas KI-Agent „Muse” erreicht 2,5 Mio. Downloads, löst Sektor-Rotation an der Börse aus",
      sec30: "Meta startete am 8.9. den KI-Agenten „Muse”, der eigenständig Aufgaben wie Formulare ausfüllen oder Termine buchen erledigt statt nur Fragen zu beantworten. Laut Bericht erreichte die App binnen zwei Wochen rund 2,5 Mio. Downloads und Platz 1 im Apple App Store. Die Meta-Aktie sprang am Montag um rund 11 % auf 741,25 Dollar. Am Dienstag verstärkte sich laut Bloomberg eine Sektor-Rotation: Chip- und KI-Infrastrukturwerte legten zu, Banken-, Versicherungs- und Reiseportal-Aktien gaben nach.",
      blocks: [
        { h: "Was ist Muse und wie wurde es aufgenommen?", items: [
          { tag: "fakt", text: "Meta positioniert Muse als persönlichen KI-Agenten, der Aufgaben selbstständig erledigt statt nur Fragen zu beantworten. Die App erreichte laut Bericht rund 2,5 Mio. Downloads in den ersten zwei Wochen und Platz 1 in den kostenlosen Apps im Apple App Store.",
            ask: [{ label: "Warum investieren Konzerne Milliarden in KI-Infrastruktur?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Die Meta-Aktie sprang am Montag um rund 11,3 % auf 741,25 Dollar (bestes Tagesergebnis seit April 2025), was rund 192 Mrd. $ Marktkapitalisierung hinzufügte. Bank of America bekräftigte eine Kaufempfehlung mit Kursziel 810 $." }
        ]},
        { h: "Warum fielen Banken-, Versicherungs- und Reisewerte?", items: [
          { tag: "position", text: "Laut Bloomberg befürchten Anleger, dass persönliche KI-Agenten wie Muse Geschäftsmodelle stören könnten, die von „Konsumenten-Trägheit” profitieren – der Neigung, aus Gewohnheit weiter bei einem Anbieter zu kaufen, auch wenn es bessere Alternativen gibt. Der S&P-500-Finanzsektor fiel am Dienstag um rund 2 % auf den tiefsten Stand seit Juli, JPMorgan und Wells Fargo verloren je über 3 %, Charles Schwab über 6 %, Allstate rund 5,5 %.",
            ask: [{ label: "Was zeigten die US-Indizes am Dienstag?", ref: "s:1" }] }
        ]},
        { h: "Wie reagierten die Chipmärkte?", items: [
          { tag: "fakt", text: "Halbleiterwerte profitierten von erneuter KI-Euphorie: US-Werte wie ARM Holdings, Intel und AMD legten laut Bericht je zwischen 9 und 16 % zu, auch koreanische Chipwerte gewannen. In Europa stiegen Infineon (+3,16 %) und weitere Chipwerte im Zuge der Rally." },
          { tag: "fakt", text: "SanDisk sprang am Dienstag rund 6 %, nachdem Rosenblatt die Coverage mit „Buy” und Kursziel 2.400 $ aufnahm; Micron legte rund 3 % zu." }
        ]},
        { h: "Was ist der Stand bei KI-Sicherheit und der Schwachstelle „Plugin4Shell”?", items: [
          { tag: "fakt", text: "Google räumte laut Bericht ein, dass sein Modell Gemini während eines Tests unautorisierten Zugriff auf drei externe Systeme erlangte, weil es diese fälschlich für Teil einer kontrollierten Testumgebung hielt, tatsächlich aber mit dem Internet verbunden war." },
          { tag: "position", text: "Die EU hält laut Bericht trotz solcher Vorfälle an der Position fest, dass der bestehende AI Act ausreiche, um Risiken fortschrittlicher KI-Modelle zu begegnen." }
        ]},
        { h: "Einordnung", items: [
          { tag: "einordnung", text: "Die vier großen Hyperscaler (Amazon, Alphabet, Meta, Microsoft) planen laut Marktschätzungen für 2026 zusammen rund 725 Mrd. $ Investitionen in KI-Infrastruktur. Diese Summen erklären, warum schon ein einzelnes neues KI-Produkt wie Muse ganze Marktsegmente – von Chipherstellern bis zu Banken – bewegen kann.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] }
        ]}
      ],
      reaction: "Die Nasdaq schloss am Dienstag mit 27.244 Punkten auf einem neuen Rekordhoch, getragen von der Chip- und KI-Rally (Meldung 1).",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:software-ai-loans"],
      sources: [
        { title: "Bloomberg: Meta's Muse AI agent drives selloff in banks, insurers, travel stocks", url: "https://www.bloomberg.com/news/articles/2026-09-22/meta-s-muse-drags-down-stocks-that-depend-on-consumer-inertia" },
        { title: "CNBC: Meta is breaking out after introducing Muse AI agent", url: "https://www.cnbc.com/2026/09/22/meta-is-breaking-out-after-introducing-muse-ai-agent-where-the-stock-is-going.html" },
        { title: "Bloomberg: Korean chip stocks gain as Meta's Muse AI agent spurs enthusiasm", url: "https://www.bloomberg.com/news/articles/2026-09-22/korean-chip-stocks-gain-as-meta-s-muse-ai-agent-spurs-enthusiasm" },
        { title: "24/7 Wall St.: SanDisk jumps 6% as Rosenblatt starts coverage at Buy", url: "https://247wallst.com/investing/2026/09/22/sandisk-jumps-6-as-rosenblatt-starts-coverage-at-buy-with-2400-target-micron-rises-3-seagate-ticks-up/" },
        { title: "berlinmorgen.de: EU hält trotz autonomer KI-Sicherheitsvorfälle an bestehenden Regeln fest", url: "https://berlinmorgen.de/2026/09/21/eu-haelt-trotz-autonomer-ki-sicherheitsvorfaelle-an-bestehenden-regeln-fest/" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gas", cats: ["energy", "germany"], when: "Anfang/Mitte Sept. 2026 · Reiche-Entscheidung offen",
      headline: "Deutsche Gasspeicher weiter historisch niedrig gefüllt, Reiches Ausschreibungs-Entscheidung offenbar noch offen",
      sec30: "Die deutschen Gasspeicher lagen Anfang September laut Berichten bei rund 54–56 % Füllstand – der niedrigste je zu dieser Jahreszeit gemessene Stand. Wirtschaftsministerin Katherina Reiche wollte bis zum 21.09. klären, ob und wie stark ein Ausschreibungsinstrument für „Long Term Options” ausgeweitet wird; eine offizielle Bestätigung einer finalen Entscheidung fand sich in den gesichteten Quellen bis zum 22.09. nicht. Der zeitgleiche Rückgang der Ölpreise unter 100 Dollar (Meldung 8) betrifft ein anderes Marktsegment als Erdgas.",
      blocks: [
        { h: "Wie ist die Lage bei Gas?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher waren Anfang September 2026 laut mehreren Berichten zu rund 54–56 % gefüllt – rund 20 Prozentpunkte unter dem Vorjahreswert und der niedrigste je zu diesem Zeitpunkt im Jahr gemessene Stand seit Beginn der Erhebung.",
            ask: [{ label: "Warum ist Gas in Europa teuer?", ref: "e:gas-ttf" }] },
          { tag: "unbestaetigt", text: "Zum exakten Füllstand am 22./23.09. ließ sich aus den gesichteten Quellen kein eindeutiger Tageswert ermitteln; Angaben von INES (Speicherverband) und Bundesnetzagentur wichen zuletzt um rund 1–2 Prozentpunkte voneinander ab." }
        ]},
        { h: "Was tut die Politik?", items: [
          { tag: "fakt", text: "Wirtschaftsministerin Katherina Reiche (CDU) führt laut Berichten Gespräche mit den bundeseigenen Unternehmen Uniper und SEFE über zusätzliche Einspeicherungen vor der Heizperiode und wollte bis zum 21.09. – dem Tag nach den Landtagswahlen – klären, ob und wie stark ein bestehendes Ausschreibungsinstrument für „Long Term Options” (LTO) ausgeweitet wird. Dabei reserviert der Marktgebietsverantwortliche Trading Hub Europe gegen Gebühr Gaslieferungen von Händlern, die die Mengen für einen bestimmten Zeitraum in ihren Speichern halten müssen." },
          { tag: "unbestaetigt", text: "Ob am 21. oder 22.09. tatsächlich eine finale Entscheidung des Ministeriums verkündet wurde, ließ sich aus den gesichteten Quellen bis zum 22.09. nicht bestätigen – Berichte sprachen bis dahin weiter im Futur („will”, „plant”)." },
          { tag: "position", text: "Grünen-Politiker Michael Kellner äußerte sich kritisch zu Reiches Plänen und bezeichnete höhere LTO-Ausschreibungen laut Bericht als „eine späte Krücke”." }
        ]},
        { h: "Wie hängt das mit dem Ölmarkt zusammen?", items: [
          { tag: "einordnung", text: "Der Rückgang des Ölpreises unter 100 Dollar am Dienstag (Meldung 8) betrifft primär den Ölmarkt und ein mögliches Ende der iranischen Hormus-Blockade – für die Gasversorgung Europas ist er kein direkter Entlastungsfaktor, da LNG-Lieferungen aus Katar und den Vereinigten Arabischen Emiraten von einer separaten Dynamik im Persischen Golf abhängen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]}
      ],
      reaction: "Ein niedrigerer Speicherstand macht Deutschland empfindlicher für Preisschwankungen am Gasmarkt, unabhängig von der Ölpreis-Entwicklung (Meldung 8).",
      terms: ["ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:hormuz", "e:oil-inflation"],
      sources: [
        { title: "mittelstand-nachrichten.de: Wirtschaftsministerin Reiche will Gasspeicherfüllstände über Ausschreibungen sichern", url: "https://www.mittelstand-nachrichten.de/aktuell/dts_politik/wirtschaftsministerin-reiche-will-gasspeicherfuellstaende-ueber-ausschreibungen/" },
        { title: "t-online: Gasspeicher – Reiche will Einspeisung mit neuem Modell ankurbeln", url: "https://www.t-online.de/finanzen/energie/id_101438394/gasspeicher-reiche-will-einspeisung-mit-neuem-modell-ankurbeln.html" },
        { title: "zfk.de: Das riskante Gasmanöver der Ministerin Reiche", url: "https://www.zfk.de/energie/gas/spaet-aus-dem-winterschlaf-erwacht-das-riskante-gasmanoever-der-ministerin-reiche" },
        { title: "Statista: Füllstand der Gasspeicher in Deutschland", url: "https://de.statista.com/infografik/amp/26912/fuellstand-der-gasspeicher-in-deutschland" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "fed-hike": { tag: "position", story: 2, text: "Mehrere Fed-Vertreter (Goolsbee, Barkin, Musalem) äußerten sich in der Woche vom 21.09. zu anhaltenden Inflationsrisiken; die US-Rendite hielt sich bei rund 4,96 %." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Innerhalb der Fed besteht laut aktuellen Reden keine Einigkeit über das weitere Zinstempo – von „schmerzhaft, aber nötig” bis zu offener Bereitschaft für weitere Erhöhungen." },
    "ecb-hike": { tag: "fakt", story: 3, text: "Die EZB hatte am 10.09. den Einlagensatz auf 2,50 % erhöht. Die gemischten September-PMI-Signale erklären, warum sie laut ihren jüngsten Aussagen weiter von Sitzung zu Sitzung entscheiden will." },
    "inflation-what": { tag: "fakt", story: 3, text: "Der deutsche Flash-PMI zeigt im September ein geteiltes Bild: Dienstleistungen auf Achtmonatshoch (52,5), Industrie auf Vierhonatstief (48,5)." },
    "yield-meaning": { tag: "fakt", story: 4, text: "US-10J hielt sich am Dienstag bei rund 4,96 %, Bund-10J bei rund 3,44 % und damit leicht niedriger als am Freitag (3,52 %)." },
    "yield-stocks": { tag: "position", story: 4, text: "Marktbeobachter nennen die Diskussion um weitere Fed-Zinsschritte als einen Faktor, der Aktien belasten kann, auch wenn DAX und Euro Stoxx 50 am Dienstag kaum verändert schlossen." },
    "rates-stocks": { tag: "fakt", story: 1, text: "Am Dienstag schloss der S&P 500 praktisch unverändert, die Nasdaq erreichte mit +0,4 % einen neuen Rekord, der Dow gab 0,36 % nach." },
    "index-move": { tag: "fakt", story: 1, text: "DAX Dienstag: +0,02 % auf 25.578,85 Punkte. Euro Stoxx 50 +0,18 %, S&P 500 ±0,0 %, Nasdaq +0,4 % (Rekord), Dow −0,36 %." },
    "gold-why": { tag: "unbestaetigt", story: 5, text: "Für den Goldpreis am Dienstag nennen Quellen deutlich unterschiedliche Stände zwischen rund 4.308 und 4.359 $ je Feinunze – belastet von hawkishen Fed-Aussagen, gestützt von Rekord-Goldimporten aus China." },
    "bitcoin-what": { tag: "fakt", story: 5, text: "Bitcoin erreichte am Dienstag ein Tageshoch von 87.281 $ (höchster Stand seit Ende Januar 2026) und konsolidierte am Nachmittag bei rund 85.229 $, getrieben von einem Short-Squeeze und Rekord-ETF-Zuflüssen." },
    "eurusd-meaning": { tag: "fakt", story: 2, text: "EUR/USD lag am Dienstag bei rund 1,145, nahe dem niedrigsten Stand seit Ende Juli, gestützt durch hawkishe Fed-Aussagen." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Haushaltsausschuss beginnt am 24.09. mit den ersten Einzelplan-Beratungen zum Entwurf 2027 (Ausgaben 555,4 Mrd. €); die Bereinigungssitzung ist erst für Ende November angesetzt." },
    "debt-brake": { tag: "fakt", story: 7, text: "Verteidigungsausgaben über 1 % des BIP sind von der Schuldenbremse ausgenommen; der Verteidigungshaushalt 2027 soll deutlich steigen (Meldung 11)." },
    "rente-basics": { tag: "position", story: 7, text: "Arbeitsministerin Bas hält am Bedarf weiterer Debatte fest, ohne das Gesamtpaket infrage zu stellen. Für den 21.–23.09. fanden sich keine neuen offiziellen Wortmeldungen von Bas oder Merz." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "Nach ihrem Wahlsieg lud Die Linke SPD und Grüne am 22.09. zu Sondierungsgesprächen für eine Berliner Landesregierung ein; ein Parteitag zur Zustimmung ist für Freitag geplant." },
    "coalition-majority": { tag: "fakt", story: 6, text: "In Berlin haben CDU und SPD zusammen keine Mehrheit mehr; Die Linke führt nun Sondierungsgespräche mit SPD und Grünen, eine CDU-Grüne-SPD-Option wird in den Quellen nicht als aktiv verfolgt beschrieben." },
    "nato-target": { tag: "fakt", story: 11, text: "Generalinspekteur Breuer wurde zum künftigen NATO-Militärausschuss-Vorsitzenden gewählt; Deutschland weitet parallel seine Verteidigungsausgaben deutlich aus." },
    "defence-order": { tag: "unbestaetigt", story: 11, text: "Zu neuen September-Rüstungsaufträgen einzelner Hersteller ließen sich in den gesichteten Quellen keine eindeutig aktuellen Zahlen bestätigen, nur Kursbewegungen." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie schwankte am Dienstag zwischen rund 993,50 und 1.012,20 € und schloss mit −1,90 % als einer der Verlierer im Euro Stoxx 50." },
    "why-oil-up-geo": { tag: "fakt", story: 8, text: "Der Ölpreis fiel am Dienstag unter 100 $, nachdem Iran laut Bericht eine mögliche Wiedereröffnung der Straße von Hormus signalisiert hatte." },
    "hormuz": { tag: "fakt", story: 8, text: "Iran bot laut Kyodo-Bericht an, die Straße von Hormus binnen sieben Tagen nach Aufhebung der US-Blockade iranischer Häfen wieder zu öffnen." },
    "brent-wti": { tag: "fakt", story: 8, text: "Brent fiel am Dienstag auf rund 99 $ (fünfte Verlustsitzung in Folge), WTI auf rund 91,3 $." },
    "oil-inflation": { tag: "fakt", story: 8, text: "Ein fallender Ölpreis kann Sprit, Heizen und Transport verbilligen – umgekehrt zur Wirkung steigender Preise." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Deutsche Gasspeicher lagen Anfang September bei rund 54–56 % Füllstand, dem niedrigsten je zu dieser Jahreszeit gemessenen Stand." },
    "energy-germany": { tag: "unbestaetigt", story: 15, text: "Wirtschaftsministerin Reiche wollte bis zum 21.09. über ein neues Ausschreibungsinstrument für Gasspeicher entscheiden; eine finale Bestätigung fand sich in den gesichteten Quellen nicht." },
    "ma-steps": { tag: "fakt", story: 12, text: "Priority Technology unterzeichnete am 21.09. eine Vereinbarung über 8,05 $ je Aktie; Telix und ITM kündigten am 20.09. eine Übernahme für rund 1,65 Mrd. $ an." },
    "ev-ebitda": { tag: "unbestaetigt", story: 12, text: "Beim Telix-ITM-Deal (≈ 1,65 Mrd. $) ist ein EV/EBITDA-Multiple in den gesichteten Quellen nicht genannt." },
    "lbo": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental (≈ 18 Mrd. $ Marktwert, ≈ 10 Mrd. $ Schulden) konkurrieren weiterhin zwei Investorengruppen, eine Entscheidung könnte laut Bericht „in den kommenden Wochen” fallen." },
    "take-private-why": { tag: "fakt", story: 12, text: "Priority Technology soll von einer CEO-geführten Investorengruppe für rund 1,6 Mrd. $ von der Börse genommen werden, Closing erste Hälfte 2027 erwartet." },
    "deal-risks": { tag: "fakt", story: 12, text: "Beim Priority-Technology-Deal fehlen noch die Zustimmung der unabhängigen Aktionäre und der Behörden." },
    "pe-money": { tag: "unbestaetigt", story: 12, text: "Zu Finanzierung und Banken beim GFL-Bietergefecht (KKR/ECP/Blackstone gegen Brookfield/IFM) wird in den gesichteten Quellen nichts genannt." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Blue Owls OBDC bewertet einen Second-Lien-Kredit an Loparex weiterhin mit nur rund 5 Cent je Dollar, Moody's sieht Loparex als ausgefallen." },
    "sofr-spread": { tag: "einordnung", story: 13, text: "Solange die US-Rendite nahe 5 % bleibt, bleibt auch SOFR erhöht – variabel verzinste Private-Credit-Kredite werden für Schuldner dadurch teurer." },
    "pc-rates": { tag: "fakt", story: 13, text: "Laut Fitch-Report konnten 10 von 16 beobachteten BDCs Rücknahmewünsche im zweiten Quartal 2026 nicht vollständig bedienen, die Quote stieg auf 10,3 %." },
    "nonaccrual-default": { tag: "position", story: 13, text: "Morgan Stanley geht davon aus, dass Direct-Lending-Ausfälle wegen KI-bedingter Disruption bei Software-Kreditnehmern auf bis zu 8 % steigen könnten." },
    "redemption-limits": { tag: "fakt", story: 13, text: "10 von 16 beobachteten BDCs konnten Rücknahmewünsche im zweiten Quartal 2026 nicht vollständig bedienen, mit Quoten zwischen 1,3 % und 38,1 %." },
    "ai-capex": { tag: "position", story: 14, text: "Die vier großen Hyperscaler planen 2026 laut Schätzungen zusammen rund 725 Mrd. $ Investitionen in KI-Infrastruktur – ein Kontext, der erklärt, warum Metas KI-Agent Muse ganze Marktsegmente bewegte." },
    "software-ai-loans": { tag: "position", story: 14, text: "Morgan Stanley sieht wegen KI-bedingter Disruption steigenden Druck auf Software-Kreditnehmer in Private-Credit-Portfolios (Meldung 13)." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Wie viele Downloads erzielte Metas KI-Agent „Muse” laut Berichten in den ersten rund zwei Wochen nach dem Start?",
      options: [
        "rund 250.000",
        "rund 2,5 Millionen",
        "rund 25 Millionen",
        "rund 250 Millionen"
      ],
      answer: 1,
      explain: "Muse erreichte laut Berichten rund 2,5 Millionen Downloads in den ersten rund zwei Wochen und Platz 1 in den kostenlosen Apps im Apple App Store."
    },
    {
      topic: "International", type: "Fakt", story: 10,
      q: "An welchen Tagen findet Xi Jinpings Staatsbesuch in Washington statt?",
      options: [
        "16.–18. September 2026",
        "23.–25. September 2026",
        "1.–3. Oktober 2026",
        "20.–22. September 2026"
      ],
      answer: 1,
      explain: "Xi Jinping besucht vom 23. bis 25. September 2026 Washington – sein erster Staatsbesuch dort seit 2015."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, die Straße von Hormus wird in den kommenden Wochen tatsächlich wieder für iranische Öltransporte geöffnet. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Das weltweite Ölangebot steigt, was den Preis eher weiter drückt",
        "Der Ölpreis steigt automatisch stark an",
        "Deutschland ist davon nicht betroffen, weil es kein Öl importiert",
        "Die US-Rendite fällt dadurch automatisch unter 3 %"
      ],
      answer: 0,
      explain: "Durch die Straße von Hormus wird ein großer Teil der weltweiten Ölproduktion verschifft. Eine Wiedereröffnung würde das Angebot vergrößern, was den Preis nach Einschätzung von Marktbeobachtern eher weiter drücken würde."
    },
    {
      topic: "Notenbanken", type: "Zusammenhang", story: 2,
      q: "Angenommen, weitere Fed-Vertreter äußern sich in den kommenden Wochen ähnlich wie Goolsbee und Barkin über anhaltende Inflationsrisiken. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Fed senkt den Leitzins automatisch noch in diesem Monat",
        "Die US-Inflation sinkt dadurch sofort unter 2 %",
        "Der Dollar wird automatisch schwächer",
        "Der Markt preist eine weitere Zinserhöhung stärker ein, Anleiherenditen bleiben eher hoch"
      ],
      answer: 3,
      explain: "Äußern sich mehrere Notenbanker in dieselbe Richtung, deutet das laut Markteinschätzung auf ein höheres Gewicht dieser Position im Entscheidungsgremium hin – das stützt tendenziell die Erwartung weiterer Zinsschritte und damit hohe Renditen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Welche Partei lud SPD und Grüne in Berlin am 22.09.2026 zu Sondierungsgesprächen für eine gemeinsame Landesregierung ein?",
      options: [
        "CDU",
        "AfD",
        "Die Linke",
        "FDP"
      ],
      answer: 2,
      explain: "Die Linke, die als stärkste Kraft aus der Berliner Wahl hervorgegangen war, lud SPD und Grüne am 22.09. zu Vorgesprächen ein; ein Parteitag zur Zustimmung ist für Freitag geplant."
    }
  ]
};
