// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-05",
  dateLabel: "Donnerstag, 5. November 2026",
  updatedLabel: "Recherchestand 05.11.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagmittag, 5.11.2026 (Recherchestand ca. 13:30 Uhr MEZ). DAX und Euro Stoxx 50 zeigen den aktuellen Stand des Donnerstagvormittags/-mittags, an dem beide Indizes nach dem demokratischen Erdrutschsieg bei den US-Zwischenwahlen neue Rekordhochs erreichten; die US-Kassamärkte (S&P 500, Nasdaq Composite, Dow Jones) zeigen weiterhin den Schlussstand von Mittwoch, 4.11., da der US-Kassamarkt an diesem Donnerstag erst um 15:30 MEZ öffnet. Gold, Bitcoin und Brent handeln durchgehend; beim sehr volatilen Brent-Ölpreis weichen Quellen zum Redaktionsschluss noch deutlich voneinander ab (zwischen rund 94 und 97 Dollar), da der Preis nach einem Einbruch von rund 9 Prozent am Mittwoch am Donnerstagvormittag wieder leicht zulegte. Die vollständigen Q3-Zahlen von Rheinmetall, Hensoldt und RENK sowie die vollständigen Qiagen-Zahlen (veröffentlicht gestern Abend) liegen heute erstmals vor. Bei den US-Zwischenwahlen waren zum Redaktionsschluss die Senatsrennen in Mississippi und Alaska weiterhin nicht final ausgezählt.",

  top: [
    { text: "DAX und Euro Stoxx 50 erreichen am Donnerstag nach dem demokratischen Erdrutschsieg bei den US-Zwischenwahlen neue Rekordhochs; der Dow Jones hatte bereits am Mittwoch mit +3,03 Prozent seinen besten Tag seit April 2025.", ref: "s:1" },
    { text: "Rheinmetall senkt die Jahresprognose zum fünften Mal binnen elf Monaten wegen Verzögerungen bei der Boxer-Großbestellung „Arminius” und bricht zeitweise um bis zu 18 Prozent ein; Hensoldt und RENK geben trotz besserer Zahlen im Branchensog nach.", ref: "s:12" },
    { text: "Der Ölpreis Brent war am Mittwoch um rund 9 Prozent eingebrochen, nachdem Vizepräsident Vance den seit Februar laufenden Irankrieg als Grund für die Wahlniederlage der Republikaner genannt hatte; am Donnerstag meldet die iranische Revolutionsgarde neue Tankerzwischenfälle an der Straße von Hormus.", ref: "s:11" },
    { text: "Die Bank of England erhöht ihren Leitzins erstmals seit August 2023 auf 4,0 Prozent, Bundesbank-Präsident Nagel und mehrere Fed-Vertreter werben weiter für Zinserhöhungen im Dezember.", ref: "s:6" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.600–26.650 Pkt. (neues Rekordhoch)", change: "+0,3 % bis +0,8 % ggü. Mittwochschluss (26.437,67 Pkt., der seinerseits +2,22 % bzw. +573 Pkt. zugelegt hatte)", dir: "up", asof: "Stand Do 5.11.26, Vormittag/Mittag (ca. 13 Uhr MEZ)", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als beim letzten Stand.",
      compare: [
        { label: "Mittwoch", text: "Der DAX war bereits am Mittwoch nach dem demokratischen Wahlsieg um 2,22 % bzw. 573 Punkte auf 26.437,67 Punkte gesprungen; am Donnerstag setzte sich die Rally fort und führte zu einem neuen Rekordhoch." }
      ],
      moved: {
        intro: "Als Hintergrund für den erneuten Anstieg am Donnerstag nennen Berichte:",
        items: [
          "Die Erleichterung über den demokratischen Sieg bei den US-Zwischenwahlen wirkt laut Berichten auch am zweiten Handelstag danach nach; Marktbeobachter nennen die Aussicht auf eine politische Blockade in Washington als Grund für die anhaltend gute Stimmung.",
          "Rheinmetall belastete den DAX dagegen einzeln: Die Aktie brach nach einer erneut gesenkten Jahresprognose zeitweise um bis zu 18 % ein."
        ]
      },
      important: [
        { area: "Rüstung", text: "Mehr zu Rheinmetall, Hensoldt und RENK in Meldung 12.", ref: "s:12" },
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "onvista: Dax erreicht Rekordhoch", url: "https://www.onvista.de/news/2026/11-05-dax-erreicht-rekordhoch-0-10-26572830" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.305 Pkt.", change: "+0,64 % ggü. Vortag", dir: "up", asof: "Stand Do 5.11.26, Mittag", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Allgemeine Tendenz", text: "Auch der Euro Stoxx 50 zieht am Donnerstag im Einklang mit der breiten Rekordrally an den europäischen Börsen weiter an." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die gleiche Erleichterung über den demokratischen Wahlsieg wie beim DAX treibt laut Berichten auch den Euro Stoxx 50 weiter an."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "finanzen.at: Starker Wochentag in Europa – Euro Stoxx 50 am Donnerstagmittag in Grün", url: "https://www.finanzen.at/nachrichten/aktien/starker-wochentag-in-europa-euro-stoxx-50-am-donnerstagmittag-in-gruen-1036721503" }
    },
    "sp500": {
      label: "S&P 500", value: "7.688,62", change: "+1,58 % (+119,70 Pkt., Schluss Mi 4.11.)", dir: "up", asof: "Schluss Mi 4.11.26; US-Kassamarkt öffnet Do erst 15:30 MEZ", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Im Vergleich zum Dow", text: "Während der S&P 500 am Mittwoch 1,58 % zulegte, gewann der Dow mit +3,03 % noch deutlicher, getrieben von fallenden Ölpreisen und einzelnen Sektor-Rotationen." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der demokratische Erdrutschsieg bei den US-Zwischenwahlen wird von Berichten als stabilisierend für Aktien gewertet, da er eine geteilte Regierung ohne scharfe Politikwenden erwarten lässt.",
          "Der um rund 9 % eingebrochene Ölpreis dämpfte zugleich Inflationssorgen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Was ein fallender Ölpreis für die Inflation bedeutet.", ref: "e:oil-inflation" }
      ],
      source: { title: "WTOP/AP: How major US stock indexes fared Wednesday", url: "https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-wednesday-11-4-2026" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.736,51", change: "+1,44 % (+364,50 Pkt., Schluss Mi 4.11.)", dir: "up", asof: "Schluss Mi 4.11.26; US-Kassamarkt öffnet Do erst 15:30 MEZ", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Chipwerte", text: "Innerhalb der Nasdaq liefen Chip- und Rechenzentrumswerte der breiten Markterholung entgegen: Qualcomm brach nach schwachen Smartphone-Chip-Umsätzen um rund 10 % ein, auch Nvidia gab trotz der Gesamtmarktrally nach." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "AMD legte nach starken Q3-Zahlen mit einem Rechenzentrumswachstum von 97 % deutlich zu; mehr dazu in Meldung 15.",
          "Sorgen vor strengerer Rechenzentrums-Regulierung durch neu gewählte demokratische Gouverneure belasteten einzelne KI-nahe Werte wie CoreWeave."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu AMD, Apple, CoreWeave und Anthropic in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "CNBC: AMD earnings and AI growth", url: "https://www.cnbc.com/2026/11/04/amd-earnings-analysts-ai-growth.html" }
    },
    "dow": {
      label: "Dow Jones", value: "53.356,12", change: "+3,03 % (+1.569,40 Pkt., Schluss Mi 4.11.) – bester Tag seit April 2025", dir: "up", asof: "Schluss Mi 4.11.26; US-Kassamarkt öffnet Do erst 15:30 MEZ", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Im Vergleich zur Nasdaq", text: "Während die Nasdaq um 1,44 % zulegte, gewann der stärker industriell geprägte Dow mit 3,03 % deutlich mehr – getragen von einer breiten Erholung bei Einzelhandels- und Gesundheitsaktien sowie von fallenden Ölpreisen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der demokratische Sieg bei den Zwischenwahlen und der zeitgleiche Einbruch des Ölpreises um rund 9 % werden von Berichten als Haupttreiber der breiten Dow-Rally genannt."
        ]
      },
      important: [
        { area: "Energie", text: "Mehr zum Ölpreiseinbruch in Meldung 11.", ref: "s:11" }
      ],
      source: { title: "Yahoo Finance: Dow rallies 1,500 points, S&P 500 and Nasdaq surge as midterm elections deliver Democratic sweep", url: "https://finance.yahoo.com/markets/live/stock-market-today-dow-rallies-1500-points-sp-500-nasdaq-midterm-elections-democrats-sweep-201207340.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1220", change: "-0,08 % (-9 Pips) ggü. Mittwochschluss; Tagesspanne 1,1219 bis 1,1267", dir: "down", asof: "Stand Do 5.11.26, Vormittag", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Wahlnacht", text: "Der Euro war in der Wahlnacht kurzzeitig bis auf 1,1245 bis 1,1267 gestiegen, bevor er sich am Donnerstag wieder leicht normalisierte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Nach der ersten Dollar-Schwäche rund um die Zwischenwahlen wird für den Donnerstag von einer leichten Dollar-Erholung berichtet."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinserwartung in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,86–4,90 %", change: "leicht fallend; -3 Basispunkte intraday, nachdem die Rendite bereits am Mittwoch um rund 6 Basispunkte gefallen war", dir: "down", asof: "Stand Do 5.11.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,9 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,9 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; mehrere Fed-Vertreter werben weiterhin für eine weitere Erhöhung im Dezember." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Rückgang wird von Berichten mit den fiskalischen Erwartungen nach dem Wahlergebnis und mit dem zugleich gefallenen Ölpreis in Verbindung gebracht, der Inflationssorgen dämpft."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Fed-Aussagen in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "CNBC: Treasury yields continue to fall after midterms", url: "https://www.cnbc.com/2026/11/05/treasury-yields-bonds-interest-rates.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,26 %", change: "leicht fallend von rund 3,32 % am Mittwoch", dir: "down", asof: "Stand Do 5.11.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 4,86 bis 4,90 % weiterhin deutlich über der Bund-Rendite – ein Abstand, der unter anderem die unterschiedliche Zinspolitik beider Notenbanken widerspiegelt." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die leicht rückläufige Rendite wird von Berichten mit der insgesamt risikofreudigeren Stimmung an den Märkten nach den US-Zwischenwahlen in Verbindung gebracht."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinserwartung in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ARIVA: Deutsche Anleihen – erneute Kursgewinne", url: "https://www.ariva.de/news/deutsche-anleihen-erneute-kursgewinne-12196054" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.128–4.135 $", change: "+1,8 % ggü. Mittwoch (≈ 4.042–4.062 $)", dir: "up", asof: "Stand Do 5.11.26, Vormittag", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 4.100 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Woche", text: "Gold hat sich damit von einem zwischenzeitlichen Rückgang Anfang der Woche erholt und notiert wieder klar über der Marke von 4.000 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg:",
        items: [
          "Trotz der insgesamt risikofreudigen Stimmung an den Aktienmärkten bleibt die Nachfrage nach Gold als Wertspeicher hoch; Berichte nennen dies als typisches Muster in weiterhin unsicheren geopolitischen Zeiten."
        ]
      },
      important: [
        { area: "Energie", text: "Mehr zur Lage am Golf in Meldung 11.", ref: "s:11" }
      ],
      source: { title: "Kitco: Gold Charts", url: "https://www.kitco.com/charts/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 94–97 $ (Angaben weichen je nach Quelle und Zeitpunkt deutlich voneinander ab)", change: "nach einem Einbruch von rund 9 % am Mittwoch (von ca. 104 auf ein Settlement von 93,52 $) am Donnerstag leicht erholt bis weitgehend stabil", dir: "flat", asof: "Stand Do 5.11.26, Vormittag; uneinheitliche Werte", story: 11, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 94 bis 97 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vor Kriegsbeginn im Februar.",
      compare: [
        { label: "Vorwoche", text: "Nach einem Hoch von rund 118 Dollar Ende Oktober markiert der Einbruch auf unter 95 Dollar einen der stärksten Tagesverluste seit Kriegsbeginn." }
      ],
      moved: {
        intro: "Als Hintergrund für den Einbruch am Mittwoch und die Gegenbewegung am Donnerstag nennen Berichte:",
        items: [
          "US-Vizepräsident Vance erklärte laut Berichten sinngemäß, der seit Februar laufende Krieg mit dem Iran sei der Grund für die Wahlniederlage der Republikaner gewesen; das befeuerte Spekulationen auf ein baldiges US-Iran-Abkommen und eine Lockerung der Blockade der Straße von Hormus.",
          "Am Donnerstag meldete die iranische Revolutionsgarde zugleich neue, unbestätigte Tankerzwischenfälle an der Straße von Hormus, was den Preis stützte."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage an der Straße von Hormus in Meldung 11.", ref: "s:11" },
        { area: "Inflation", text: "Ein fallender Ölpreis wirkt tendenziell dämpfend auf Energie- und Transportkosten.", ref: "e:oil-inflation" }
      ],
      source: { title: "FinanceFeeds: Brent Crude Oil Price – $94 Thursday After Wednesday's 9% Crash", url: "https://financefeeds.com/brent-crude-oil-price-94-thursday-after-9-percent-crash-us-iran-deal-bets-bull-100-bear-90/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 80.000–80.600 $", change: "+2,2 % bis +5,4 % binnen 24 Stunden", dir: "up", asof: "Stand Do 5.11.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 80.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Short-Positionen", text: "Laut Berichten wurden im Zuge des Anstiegs Short-Positionen von mehr als 380 Mio. Dollar zwangsweise glattgestellt, was den Kursanstieg zusätzlich verstärkte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Erholung:",
        items: [
          "Die insgesamt risikofreudigere Stimmung an den Märkten nach dem demokratischen Wahlsieg wird als Grund für den Anstieg genannt."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin", url: "https://fortune.com/article/price-of-bitcoin-11-05-2026" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "markets-donnerstag-dax-eurostoxx-rekordhoch-11-05", cats: ["markets"], when: "Stand Do 5.11.2026, Vormittag/Mittag",
      headline: "DAX und Euro Stoxx 50 erreichen am Donnerstag nach dem demokratischen Wahlsieg bei den US-Zwischenwahlen neue Rekordhochs, Rheinmetall bricht nach einer erneut gesenkten Prognose ein",
      sec30: "Der DAX stieg am Donnerstag auf zwischen rund 26.600 und 26.650 Punkte und damit auf ein neues Rekordhoch, nachdem er bereits am Mittwoch um 2,22 % auf 26.437,67 Punkte gesprungen war; der Euro Stoxx 50 legte um rund 0,64 % auf etwa 6.305 Punkte zu. Als Hintergrund nennen Berichte weiterhin den demokratischen Erdrutschsieg bei den US-Zwischenwahlen (Meldung 9). Einzeln belastete Rheinmetall den DAX: Die Aktie brach nach einer erneut gesenkten Jahresprognose zeitweise um bis zu 18 % ein (Meldung 12). Die US-Kassamärkte hatten am Mittwoch mit teils deutlichen Gewinnen geschlossen (Meldung 2).",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Donnerstag entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stieg am Donnerstag auf zwischen rund 26.600 und 26.650 Punkte – ein neues Rekordhoch – nachdem er bereits am Mittwoch um 2,22 % bzw. 573 Punkte auf 26.437,67 Punkte gesprungen war; der Euro Stoxx 50 legte um rund 0,64 % auf etwa 6.305 Punkte zu.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Marktbeobachter nennen weiterhin den demokratischen Erdrutschsieg bei den US-Zwischenwahlen als Haupttreiber der Rally; die Erwartung einer geteilten Regierung ohne scharfe Politikwenden stützt laut Berichten die Stimmung auch am zweiten Handelstag danach.",
            ask: [{ label: "Mehr zu den Zwischenwahlen", ref: "s:9" }] }
        ]},
        { h: "Was belastete Rheinmetall?", items: [
          { tag: "fakt", text: "Rheinmetall senkte mit den heutigen Q3-Zahlen zum fünften Mal binnen rund elf Monaten seine Jahresprognose und brach daraufhin zeitweise um bis zu 18 % ein; die Aktie zog auch andere europäische Rüstungswerte wie BAE Systems, Leonardo, Thales und Saab mit nach unten.",
            ask: [{ label: "Mehr zu Rheinmetall, Hensoldt und RENK", ref: "s:12" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 trotz des Rheinmetall-Einbruchs neue Rekordhochs erreichen, zeigt, dass die breite Markterholung nach den US-Zwischenwahlen einzelne, unternehmensspezifische Rückschläge derzeit überlagert. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Mittwoch werden in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Zwischenwahl-Ergebnisse im Detail in Meldung 9, Rheinmetall/Hensoldt/RENK in Meldung 12.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "onvista: Dax erreicht Rekordhoch", url: "https://www.onvista.de/news/2026/11-05-dax-erreicht-rekordhoch-0-10-26572830" },
        { title: "finanzen.at: Starker Wochentag in Europa – Euro Stoxx 50 am Donnerstagmittag in Grün", url: "https://www.finanzen.at/nachrichten/aktien/starker-wochentag-in-europa-euro-stoxx-50-am-donnerstagmittag-in-gruen-1036721503" },
        { title: "Euronews: Rheinmetall shares plunge more than 17% after profit warning over order delays", url: "https://www.euronews.com/2026/11/05/rheinmetall-shares-plunge-more-than-17-after-profit-warning-over-order-delays" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS MITTWOCH */
    {
      id: "us-wallstreet-mittwoch-midterms-sweep-11-05", cats: ["markets"], when: "Schluss Mi 4.11.2026 · vorbörslich Do 5.11.",
      headline: "Dow Jones verzeichnet nach dem demokratischen Sieg bei den US-Zwischenwahlen mit +3,03 Prozent seinen besten Tag seit April 2025, S&P 500 und Nasdaq schließen ebenfalls deutlich im Plus",
      sec30: "Der Dow Jones schloss am Mittwoch bei 53.356,12 Punkten (+3,03 % bzw. +1.569,40 Punkte) – der beste Tagesgewinn seit April 2025. Der S&P 500 legte um 1,58 % auf 7.688,62 Punkte zu, die Nasdaq Composite um 1,44 % auf 25.736,51 Punkte. Als Hintergrund nennen Berichte den demokratischen Erdrutschsieg bei den Zwischenwahlen (Meldung 9) sowie den um rund 9 % eingebrochenen Ölpreis (Meldung 11). Innerhalb der Nasdaq liefen einzelne Chip- und Rechenzentrumswerte der Rally entgegen: Qualcomm brach nach schwachen Smartphone-Chip-Zahlen um rund 10 % ein, auch Nvidia gab nach (Meldung 15).",
      blocks: [
        { h: "Wie schlossen Dow, S&P 500 und Nasdaq am Mittwoch?", items: [
          { tag: "fakt", text: "Der Dow Jones schloss am Mittwoch bei 53.356,12 Punkten (+3,03 % bzw. +1.569,40 Punkte) – der beste Tagesgewinn seit April 2025. Der S&P 500 legte um 1,58 % (+119,70 Punkte) auf 7.688,62 Punkte zu, die Nasdaq Composite um 1,44 % (+364,50 Punkte) auf 25.736,51 Punkte.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was nennen Berichte als Treiber?", items: [
          { tag: "einordnung", text: "Der demokratische Erdrutschsieg bei den Zwischenwahlen wird von Berichten als stabilisierend für Aktien gewertet, da er eine geteilte Regierung ohne scharfe Politikwenden erwarten lässt; der zugleich um rund 9 % eingebrochene Ölpreis dämpfte nach Einschätzung von Marktbeobachtern zusätzlich Inflationssorgen.",
            ask: [{ label: "Mehr zum Ölpreiseinbruch", ref: "s:11" }] }
        ]},
        { h: "Welche Sektoren liefen der Rally entgegen?", items: [
          { tag: "fakt", text: "Qualcomm brach nach schwächer als erwarteten Smartphone-Chip-Umsätzen um rund 10,2 % ein; Speicherchip-Werte wie Micron und Sandisk fielen im Zuge von Sorgen über steigende Speicherpreise ebenfalls über 7 %. Nvidia gab trotz der Gesamtmarktrally um rund 3 % nach, nachdem Melius Research sein Kursziel von 420 auf 315 Dollar gesenkt hatte.",
            ask: [{ label: "Mehr zu Tech-Aktien", ref: "s:15" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Dow, S&P 500 und Nasdaq deutlich zulegen, während einzelne Chip- und Speicherwerte gleichzeitig unter Druck stehen, zeigt, dass Anleger die Folgen der Zwischenwahlen für die Gesamtwirtschaft und für einzelne, möglicherweise stärker regulierte Technologiebranchen unterschiedlich bewerten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Reaktion in Europa wird in Meldung 1 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Zwischenwahl-Ergebnisse im Detail in Meldung 9, die Tech-Reaktionen in Meldung 15.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move"],
      sources: [
        { title: "Yahoo Finance: Dow rallies 1,500 points, S&P 500 and Nasdaq surge as midterm elections deliver Democratic sweep", url: "https://finance.yahoo.com/markets/live/stock-market-today-dow-rallies-1500-points-sp-500-nasdaq-midterm-elections-democrats-sweep-201207340.html" },
        { title: "WTOP/AP: How major US stock indexes fared Wednesday, 11/4/2026", url: "https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-wednesday-11-4-2026" },
        { title: "Investing.com/Reuters: AI, data-center stocks slip as Democratic sweep clouds expansion plans", url: "https://www.investing.com/news/stock-market-news/ai-datacenter-stocks-slip-as-democratic-sweep-clouds-expansion-plans-5003196" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN */
    {
      id: "gold-bitcoin-eurusd-anleihen-donnerstag-11-05", cats: ["markets"], when: "Stand Do 5.11.2026, Vormittag",
      headline: "Gold steigt weiter auf über 4.100 Dollar, Bitcoin legt nach einer Short-Welle deutlich zu, Anleiherenditen geben beidseits des Atlantiks leicht nach",
      sec30: "Gold stieg am Donnerstag um rund 1,8 % auf zwischen 4.128 und 4.135 Dollar je Feinunze. Bitcoin legte binnen 24 Stunden um 2,2 bis 5,4 % auf etwa 80.000 bis 80.600 Dollar zu, nachdem Berichten zufolge Short-Positionen von mehr als 380 Mio. Dollar zwangsweise glattgestellt worden waren. Der Euro gab gegenüber dem Dollar leicht auf rund 1,1220 nach. Die Rendite zehnjähriger Bundesanleihen fiel auf etwa 3,26 % (von rund 3,32 % am Mittwoch), die US-10-Jahres-Rendite gab nach einem bereits deutlichen Rückgang am Mittwoch weiter leicht auf rund 4,86 bis 4,90 % nach.",
      blocks: [
        { h: "Wie haben sich Gold und Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Donnerstag um rund 1,8 % auf zwischen 4.128 und 4.135 Dollar je Feinunze; Bitcoin legte binnen 24 Stunden um 2,2 bis 5,4 % auf etwa 80.000 bis 80.600 Dollar zu.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }, { label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] },
          { tag: "unbestaetigt", text: "Berichten zufolge wurden im Zuge des Bitcoin-Anstiegs Short-Positionen von mehr als 380 Mio. Dollar zwangsweise glattgestellt, was den Kursanstieg zusätzlich verstärkt haben könnte; eine unabhängige Bestätigung der genauen Summe lag zum Redaktionsschluss nicht vor." }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Die insgesamt risikofreudigere Stimmung nach dem demokratischen Wahlsieg wird als Treiber bei Bitcoin genannt; bei Gold bleibt die Nachfrage als Wertspeicher trotz der Aktienrally hoch, was Berichte mit anhaltenden geopolitischen Unsicherheiten – etwa am Persischen Golf – in Verbindung bringen." }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro gab gegenüber dem Dollar um rund 0,08 % auf etwa 1,1220 nach (Tagesspanne 1,1219 bis 1,1267). Die Rendite zehnjähriger Bundesanleihen fiel auf etwa 3,26 % (von rund 3,32 % am Mittwoch), die US-10-Jahres-Rendite gab nach einem bereits deutlichen Rückgang am Mittwoch weiter leicht auf rund 4,86 bis 4,90 % nach.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold weiter steigt, während zugleich Aktienindizes neue Rekordhochs erreichen und auch Bitcoin zulegt, zeigt, dass Anleger die Lage uneinheitlich deuten: teils als generelle Risikoerleichterung, teils als Anlass, sich weiterhin über Gold abzusichern. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX/Euro Stoxx 50 wird in Meldung 1 behandelt, die US-Schlusskurse in Meldung 2, die Zwischenwahlen im Detail in Meldung 9.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Kitco: Gold Charts", url: "https://www.kitco.com/charts/gold" },
        { title: "Fortune: Current price of Bitcoin", url: "https://fortune.com/article/price-of-bitcoin-11-05-2026" },
        { title: "ARIVA: Deutsche Anleihen – erneute Kursgewinne", url: "https://www.ariva.de/news/deutsche-anleihen-erneute-kursgewinne-12196054" },
        { title: "CNBC: Treasury yields continue to fall after midterms", url: "https://www.cnbc.com/2026/11/05/treasury-yields-bonds-interest-rates.html" }
      ]
    }
    ,
    /* 4 WIRTSCHAFT: EZB/LAGARDE-NACHFOLGE/SCHNABEL */
    {
      id: "ezb-lagarde-nachfolge-schnabel-nagel-11-05", cats: ["economy"], when: "Nominierungsfrist 6.11. · Schnabel-Rede Frankfurt 5.11. · Niederlande nominieren Knot 4.11.2026",
      headline: "Die Niederlande nominieren offiziell Klaas Knot für die Lagarde-Nachfolge, EZB-Direktorin Schnabel warnt vor Risiken hoher Staatsverschuldung für die Geldpolitik",
      sec30: "Die Niederlande haben am 4.11. den früheren Notenbankchef Klaas Knot offiziell als Kandidaten für die Nachfolge von EZB-Präsidentin Lagarde (Rücktritt zum 7.2.2027) nominiert. Die Nominierungsfrist für alle 21 Eurostaaten läuft bis Freitag, 6.11.; die Eurogruppe prüft die Vorschläge am 9.11., die EU-Spitzen wollen beim Gipfel am 26./27.11. Fortschritte erzielen. BIZ-Generaldirektor Pablo Hernández de Cos gilt weiter als zweiter Topkandidat, war aber zum Redaktionsschluss nicht offiziell nominiert. In einer Rede in Frankfurt warnte EZB-Direktoriumsmitglied Isabel Schnabel am 5.11., hohe Staatsverschuldung und das Wachstum von Nichtbanken könnten der EZB die geldpolitische Handlungsfähigkeit einschränken. Bundesbank-Präsident Nagel hatte bereits am 3.11. eine Zinserhöhung im Dezember für sehr wahrscheinlich notwendig gehalten.",
      blocks: [
        { h: "Wie ist der Stand bei der Lagarde-Nachfolge?", items: [
          { tag: "fakt", text: "Die Niederlande nominierten am 4.11.2026 offiziell den früheren Notenbankchef Klaas Knot als Kandidaten für die Nachfolge von EZB-Präsidentin Christine Lagarde, die ihren Rücktritt zum 7.2.2027 angekündigt hat – rund neun Monate vor dem offiziellen Ende ihrer Amtszeit. Die Nominierungsfrist für alle 21 Eurostaaten läuft bis Freitag, 6.11.; die Eurogruppe prüft die Vorschläge am 9.11., beim EU-Gipfel am 26./27.11. wollen die Staats- und Regierungschefs Fortschritte bei der Auswahl erzielen.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "BIZ-Generaldirektor Pablo Hernández de Cos gilt laut Berichten weiter als zweiter Topkandidat; Frankreich soll Knot im Gegenzug für den Posten des EZB-Chefökonomen unterstützen. Auch EZB-Chefökonom Philip Lane wurde von Irlands Notenbankchef Gabriel Makhlouf als möglicher Kandidat genannt. Eine offizielle Nominierung von de Cos lag zum Redaktionsschluss nicht vor." }
        ]},
        { h: "Was sagte EZB-Direktorin Schnabel zu den Risiken hoher Staatsverschuldung?", items: [
          { tag: "position", text: "EZB-Direktoriumsmitglied Isabel Schnabel warnte am 5.11.2026 in einer Rede in Frankfurt, hohe Staatsverschuldung und das Wachstum von Nichtbanken wie Hedgefonds, Investmentfonds und Versicherern könnten die Handlungsfähigkeit der EZB einschränken; steigende Schuldendienstkosten, vor allem für das als verwundbar geltende Frankreich, weckten Sorgen, die EZB könnte aus Angst vor Finanzinstabilität in der Geldpolitik eingeschränkt werden. Sie plädierte dafür, Bankenregulierung nicht zu lockern und die Regulierung von Nichtbanken zu stärken." }
        ]},
        { h: "Was sagte Bundesbank-Präsident Nagel zur Dezember-Sitzung?", items: [
          { tag: "position", text: "Bundesbank-Präsident Joachim Nagel hatte bereits am 3.11.2026 in Berlin gesagt, eine EZB-Zinserhöhung im Dezember sei aus heutiger Sicht sehr wahrscheinlich notwendig, da sich die Inflation dem von der EZB als ungünstig eingestuften Szenario nähere.",
            ask: [{ label: "Mehr zur Eurozone-Inflation", ref: "e:inflation-what" }] },
          { tag: "fakt", text: "Marktpreise (unter anderem auf Kalshi) implizieren inzwischen eine Wahrscheinlichkeit von rund 80 bis 88 % für eine EZB-Zinserhöhung um 0,25 Prozentpunkte auf 2,75 % bei der Sitzung am 17.12.2026 – es wäre die dritte Erhöhung des Jahres." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Suche nach der Lagarde-Nachfolge und Schnabels Warnung vor den Risiken hoher Staatsverschuldung zeitlich überlappen, zeigt, wie eng Personalfragen und geldpolitische Grundsatzdebatten bei der EZB derzeit miteinander verknüpft sind – während die Zinserhöhung im Dezember an den Märkten inzwischen weitgehend als gesetzt gilt." }
        ]}
      ],
      reaction: "Weitere Konjunkturdaten und die Fed-Debatte werden in Meldung 5 behandelt, die Bank-of-England-Erhöhung in Meldung 6.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:ecb-hike", "e:central-banks-why"],
      sources: [
        { title: "RTÉ: Netherlands nominates Knot for ECB presidency job", url: "https://www.rte.ie/news/business/2026/1104/1597949-knot-nominated-for-ecb-presidency-job/" },
        { title: "Investing.com/Reuters: High debt, rise of non-banks risk tying ECB's hands, Schnabel says", url: "https://www.investing.com/news/economy-news/high-debt-rise-of-nonbanks-risk-tying-ecbs-hands-schnabel-says-5002480" },
        { title: "Euronext/Live: Bundesbank's Nagel joins ECB chorus backing December rate hike", url: "https://live.euronext.com/en/financial-news/bundesbanks-nagel-joins-ecb-chorus-backing-december-rate-hike" },
        { title: "Kalshi: ECB rate decision odds", url: "https://kalshi.com/markets/kxcbdecisioneu/eu-central-bank-policy-interest-rate/kxcbdecisioneu-26dec17" }
      ]
    },
    /* 5 WIRTSCHAFT: FED + PMI/KONJUNKTUR */
    {
      id: "fed-pmi-konjunktur-einzelhandel-11-05", cats: ["economy"], when: "Fed-Statements seit 28.10. · PMI final 4.11. · Einzelhandel Destatis 2.11.2026",
      headline: "Mehrere Fed-Vertreter werben weiter für Zinserhöhungen, der Einkaufsmanagerindex für die Eurozone fällt im Oktober auf 51,7 Punkte, der deutsche Einzelhandel schwächelt",
      sec30: "Die Fed hatte ihren Leitzins am 28./29.10. bei 3,75 bis 4,00 % belassen; zwei der Stimmberechtigten (Cook und Hammack) votierten für eine sofortige Erhöhung. Fed-Chef Kevin Warsh ließ offen, ob die bisherige Geldpolitik ausreichend restriktiv sei, und bereitete damit den Boden für eine mögliche Dezember-Erhöhung; Dallas-Fed-Chefin Logan und St.-Louis-Fed-Chef Musalem sprachen sich explizit für weitere Zinsschritte aus. Der finale Einkaufsmanagerindex (PMI) für die Eurozone fiel im Oktober auf 51,7 Punkte (von 53,1 im September), der deutsche Composite-PMI auf 53,4 (von 53,8). Der deutsche Einzelhandelsumsatz sank im September real um 2,0 % gegenüber dem Vormonat.",
      blocks: [
        { h: "Was sagen Fed-Vertreter seit der Sitzung vom 28./29.10.?", items: [
          { tag: "fakt", text: "Die Fed beließ ihren Leitzins am 28./29.10.2026 im Zielkorridor von 3,75 bis 4,00 %; die Gouverneurin Lisa Cook und die Präsidentin der Cleveland-Fed, Beth Hammack, stimmten abweichend für eine sofortige Erhöhung um 0,25 Prozentpunkte.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Fed-Chef Kevin Warsh sagte, es gebe noch keine endgültigen Schlussfolgerungen, ob die bisherige restriktive Geldpolitik ausreichend wirke, und bereitete damit nach Einschätzung von Beobachtern den Boden für eine mögliche Dezember-Erhöhung. Dallas-Fed-Präsidentin Lorie Logan hält mindestens zwei weitere Erhöhungen um je 0,25 Punkte für nötig, St.-Louis-Fed-Präsident Alberto Musalem sprach sich für eine baldige weitere Straffung aus, da die Inflation weiterhin zu hoch über dem 2-Prozent-Ziel liege." }
        ]},
        { h: "Was zeigen die aktuellen US- und Eurozone-Konjunkturdaten?", items: [
          { tag: "fakt", text: "Der ISM-Einkaufsmanagerindex für die US-Industrie stieg im Oktober auf 55,5 Punkte (von 54,5), der Dienstleistungsindex lag bei 57,9 – der zehnte Expansionsmonat in Folge. Der offizielle US-Arbeitsmarktbericht für Oktober war erst für Freitag, 6.11., angesetzt und lag zum Redaktionsschluss nicht vor." },
          { tag: "fakt", text: "Der finale Einkaufsmanagerindex (PMI) für die Eurozone fiel im Oktober auf 51,7 Punkte (von 53,1 im September), der deutsche Composite-PMI auf 53,4 (von 53,8) – ein Zeichen für ein nachlassendes Wachstumstempo, auch wenn beide Indizes über der Wachstumsschwelle von 50 bleiben." }
        ]},
        { h: "Wie entwickelte sich der deutsche Einzelhandel?", items: [
          { tag: "fakt", text: "Der deutsche Einzelhandelsumsatz sank im September 2026 gegenüber August real um 2,0 % und nominal um 1,5 %; im Jahresvergleich zum September 2025 sank der reale Umsatz um 2,3 %. Der Internet- und Versandhandel wuchs real um 4,4 %, während Tankstellen real 9,3 % einbüßten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mehrere Fed-Vertreter weiter für Zinserhöhungen werben, während sich die Stimmung bei Dienstleistern in der Eurozone und der deutsche Einzelhandel gleichzeitig abschwächen, zeigt ein uneinheitliches Konjunkturbild auf beiden Seiten des Atlantiks – mit möglichen Folgen für die Zinsentscheidungen beider Notenbanken im Dezember.",
            ask: [{ label: "Mehr zur EZB-Zinserwartung", ref: "s:4" }] }
        ]}
      ],
      reaction: "Die EZB-Personalfragen werden in Meldung 4 behandelt, die Bank-of-England-Erhöhung in Meldung 6.",
      terms: ["leitzins"],
      followups: ["e:fed-hike", "e:central-banks-why"],
      sources: [
        { title: "CNBC: Fed Chair Kevin Warsh is keeping Wall Street guessing", url: "https://www.cnbc.com/2026/10/29/kevin-warsh-fed-october-rate-decision-december-hike.html" },
        { title: "Yahoo Finance: Fed officials make case for rate hikes amid ongoing inflation concerns", url: "https://finance.yahoo.com/economy/policy/articles/feds-musalem-says-rate-hike-163223128.html" },
        { title: "S&P Global/HCOB: Eurozone Composite PMI", url: "https://www.pmi.spglobal.com/Public/Home/PressRelease/85a7e7b2b2864290b945f2bd8d7c41eb" },
        { title: "Destatis: Einzelhandelsumsatz im September 2026 real um 2,0 % niedriger", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/11/PD26_383_45212.html" }
      ]
    },
    /* 6 WIRTSCHAFT: BANK OF ENGLAND */
    {
      id: "bank-of-england-leitzins-vier-prozent-11-05", cats: ["economy", "world"], when: "BoE-Entscheidung 5.11.2026",
      headline: "Die Bank of England erhöht ihren Leitzins erstmals seit August 2023 auf 4,0 Prozent",
      sec30: "Die Bank of England hob ihren Leitzins am 5.11.2026 um 0,25 Prozentpunkte auf 4,0 % an – die erste Erhöhung seit August 2023. Das geldpolitische Komitee stimmte mit 8 zu 1 für den Schritt. Die britische Verbraucherpreisinflation war im September auf 3,5 % gestiegen. BoE-Gouverneur Andrew Bailey sagte, sollte der seit Februar laufende Krieg zwischen den USA und dem Iran nicht beigelegt werden, dürfte dies nicht die letzte Erhöhung gewesen sein; Händler preisen derzeit eine Wahrscheinlichkeit von rund 25 % für einen weiteren Schritt im Dezember ein.",
      blocks: [
        { h: "Was hat die Bank of England entschieden?", items: [
          { tag: "fakt", text: "Die Bank of England erhöhte ihren Leitzins am 5.11.2026 um 0,25 Prozentpunkte auf 4,0 % – die erste Erhöhung seit August 2023. Das geldpolitische Komitee stimmte mit 8 zu 1 für den Schritt.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Warum erhöht die BoE jetzt, und was sagt Gouverneur Bailey?", items: [
          { tag: "fakt", text: "Die britische Verbraucherpreisinflation war im September 2026 auf 3,5 % gestiegen.",
            ask: [{ label: "Was ist Inflation, und wie wird sie gemessen?", ref: "t:inflation" }] },
          { tag: "position", text: "BoE-Gouverneur Andrew Bailey sagte, sollte der seit dem 28.2.2026 laufende Krieg zwischen den USA und dem Iran nicht beigelegt werden, dürfte die heutige Erhöhung nicht die letzte gewesen sein; Händler preisen derzeit eine Wahrscheinlichkeit von rund 25 % für einen weiteren Zinsschritt im Dezember ein." }
        ]},
        { h: "Wie reiht sich die BoE-Entscheidung international ein?", items: [
          { tag: "einordnung", text: "Mit der heutigen Erhöhung ist die Bank of England die letzte der großen westlichen Notenbanken, die seit Ausbruch des Energiepreisschocks durch den US-Iran-Krieg in einen Zinserhöhungszyklus eingetreten ist; auch die EZB (Meldung 4) und mehrere Fed-Vertreter (Meldung 5) diskutieren derzeit über weitere Erhöhungen im Dezember.",
            ask: [{ label: "Mehr zur EZB-Zinserwartung", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere große Notenbanken nahezu gleichzeitig über weitere Zinserhöhungen diskutieren oder sie bereits beschließen, zeigt, wie stark der anhaltende Energiepreisschock die globale Geldpolitik derzeit prägt." }
        ]}
      ],
      reaction: "Die EZB-Personalfragen und Nagels Dezember-Einschätzung werden in Meldung 4 behandelt, die Fed-Debatte in Meldung 5.",
      terms: ["leitzins", "inflation"],
      followups: ["e:central-banks-why", "e:fed-hike"],
      sources: [
        { title: "CNBC: Bank of England hikes for the first time since the Iran war", url: "https://www.cnbc.com/2026/11/05/interest-rates-inflation-uk.html" },
        { title: "MartinCid: Bank of England raises rates to 4%", url: "https://www.martincid.com/business/bank-of-england-raises-rates-4-percent-energy-inflation/" }
      ]
    }
    ,
    /* 7 DEUTSCHLAND: HAUSHALT/RENTENREFORM */
    {
      id: "bundeshaushalt-rentenreform-fratzscher-11-05", cats: ["germany", "economy"], when: "Bereinigungssitzung 12.11. · Plenumsberatung 24.–27.11. · Merz-Ankündigung Anfang November 2026",
      headline: "Der Zeitplan für den Bundeshaushalt 2027 bleibt bestehen, die geplante Kapitaldeckung in der Rente verschiebt sich erneut – DIW-Chef Fratzscher kritisiert die Verzögerung",
      sec30: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung des Haushaltsausschusses am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11. mit namentlicher Schlussabstimmung. Bei der Rentenreform bestätigte Bundeskanzler Merz, dass die Kapitaldeckung – anders als noch vor rund vier Wochen angekündigt – nicht mehr vollständig bis Weihnachten 2026 ins Kabinett geht: Nur der rentenrechtliche Teil soll fertig ausformuliert werden, der kapitalmarktrechtliche Teil zunächst nur als Eckpunkte; die endgültige gesetzliche Ausgestaltung folgt erst 2027. DIW-Chef Marcel Fratzscher bezeichnete die Verschiebung als Rückschlag für eine generationengerechte Rentenreform, die AfD-Fraktion kritisierte, Deutschland könne sich keine weitere Verzögerung erlauben.",
      blocks: [
        { h: "Was wurde zum Haushalt und zur Rente angekündigt?", items: [
          { tag: "fakt", text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung des Haushaltsausschusses am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026 mit namentlicher Schlussabstimmung am 27.11. Der Regierungsentwurf sieht Ausgaben von 555,4 Mrd. Euro vor, rund 30,9 Mrd. Euro mehr als 2026; der Wehretat soll auf 109,7 Mrd. Euro steigen (2026: 82,7 Mrd.).",
            ask: [{ label: "Wie entsteht der Bundeshaushalt?", ref: "e:haushalt-basics" }] },
          { tag: "fakt", text: "Bundeskanzler Merz bestätigte, dass der Einstieg in eine kapitalgedeckte Zusatzvorsorge – anders als noch vor rund vier Wochen angekündigt – 2026 nicht mehr vollständig ins Kabinett geht: Nur der rentenrechtliche Teil soll fertig ausformuliert werden, der kapitalmarktrechtliche Teil zunächst nur als Eckpunkte; die endgültige parlamentarische Verabschiedung verschiebt sich auf 2027." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Grundlage der Rentenreform ist der Bericht der Alterssicherungskommission mit 33 Empfehlungen, den der Koalitionsausschuss bereits am 2.7.2026 angenommen hatte; dazu zählt unter anderem die geplante Anhebung der Regelaltersgrenze auf 67,5 Jahre ab 2041. Durch die Verschiebung werden zentrale Details zur Kapitaldeckung – etwa zur Finanzierung und zum genauen Starttermin – erst 2027 gesetzlich festgelegt." }
        ]},
        { h: "Wer unterstützt die Verschiebung, und wer kritisiert sie?", items: [
          { tag: "position", text: "Bundesfinanzminister Lars Klingbeil verteidigte den Haushaltsentwurf im Bundestag als Zukunftsinvestition." },
          { tag: "position", text: "DIW-Chef Marcel Fratzscher bezeichnete die Verschiebung der Kapitalrente gegenüber der Rheinischen Post als Rückschlag für eine nachhaltige und generationengerechte Reform der gesetzlichen Rentenversicherung; junge Menschen und Geringverdiener bräuchten verlässliche Altersvorsorge über den Kapitalmarkt." },
          { tag: "position", text: "Die AfD-Fraktion erklärte, Deutschland könne sich keine weitere Verschiebung beim Einstieg in die Kapitaldeckung der Rente erlauben; der AfD-Haushaltspolitiker Michael Espendiller kritisierte zudem, fast jeder dritte Haushalts-Euro sei geliehen, und lehnte den Gesamthaushalt ab." },
          { tag: "position", text: "Der Grünen-Haushaltspolitiker Sebastian Schäfer warf der Koalition beim Haushalt „Buchungstricks” vor, die Linksfraktion bezeichnete den Entwurf als finanzpolitisch unsolide, wirtschaftlich kurzsichtig und sozial ungerecht." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Dass der Einstieg in die Kapitaldeckung erneut nur als Eckpunkte vorgelegt wird, bedeutet, dass zentrale Details erst 2027 parlamentarisch entschieden werden; das verschafft der Koalition mehr Zeit, verzögert aber nach Einschätzung von Kritikern wie Fratzscher auch eine mögliche Entlastung der umlagefinanzierten Rente.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]}
      ],
      reaction: "Umfragen und die Bundespräsident-Nachfolge werden in Meldung 8 behandelt.",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "Handelsblatt: Alterssicherung – Koalition verschiebt die neue Kapitalrente ins nächste Jahr", url: "https://www.handelsblatt.com/politik/deutschland/alterssicherung-koalition-verschiebt-die-neue-kapitalrente-ins-naechste-jahr/100267176.html" },
        { title: "ad-hoc-news: Kapitalrente – Fratzscher kritisiert Verschiebung durch Merz", url: "https://www.ad-hoc-news.de/politik/kapitalrente-fratzscher-kritisiert-verschiebung-durch-merz/70463133" },
        { title: "ZDFheute: Haushaltsentwurf 2027 – Klingbeils Entwurf überzeugt Opposition nicht", url: "https://www.zdfheute.de/politik/deutschland/haushaltsentwurf-2027-bundestag-klingbeil-kritik-opposition-100.html" }
      ]
    },
    /* 8 DEUTSCHLAND: UMFRAGEN/BUNDESPRÄSIDENT/PFLEGEREFORM */
    {
      id: "umfragen-bundespraesident-aigner-pflegereform-11-05", cats: ["germany"], when: "Forsa/INSA-Umfragen veröffentlicht 3.11. · CDU-Positionierung 5.11. · Pflegereform erste Lesung 5.11.2026",
      headline: "Mehrere CDU-Politiker sprechen sich für Ilse Aigner als gemeinsame Unions-Kandidatin für das Bundespräsidentenamt aus, neue Umfragen zeigen die AfD weiter deutlich vorn",
      sec30: "Die Forsa-Umfrage für RTL/n-tv (veröffentlicht 3.11.) sieht die AfD bei 26 % (-1 Punkt), die Union bei 20 % (-1), die Grünen bei 17 % (+1) und die SPD bei 14 % (+1); die INSA-Umfrage für Bild sieht die AfD sogar bei 28 %. Bei der Nachfolge von Bundespräsident Steinmeier sprach sich die nordrhein-westfälische CDU-Ministerin Ina Scharrenbach am 5.11. für die bayerische CSU-Politikerin Ilse Aigner als gemeinsame Unions-Kandidatin aus; auch Baden-Württembergs Ministerpräsident Özdemir und mehrere ostdeutsche CDU-Regierungschefs unterstützen Aigner. Unionsfraktionschef Frei sprach von einer „Zielgeraden” für eine gemeinsame Kandidatenbenennung. Der Bundestag berät am 5.11. zudem in erster Lesung über die Pflegeversicherungsreform.",
      blocks: [
        { h: "Was zeigen die neuen Umfragen?", items: [
          { tag: "fakt", text: "Die Forsa-Umfrage für RTL/n-tv (Erhebung 27.10. bis 2.11., veröffentlicht 3.11.) sieht die AfD bei 26 % (-1 Punkt), die Union bei 20 % (-1), die Grünen bei 17 % (+1), die SPD bei 14 % (+1), die Linke bei 11 % und die FDP bei 4 %. Die INSA-Umfrage für Bild (Erhebung 30.10. bis 2.11.) sieht die AfD bei 28 % (-1), die Union bei 20 %, die Grünen bei 15 %, die SPD bei 14 %, die Linke bei 10 %, die FDP bei 5 % und das BSW bei 3,5 %; die AfD liegt im Osten laut INSA bei 40 %, im Westen bei 25 %.",
            ask: [{ label: "Was bedeutet eine Koalition ohne Mehrheit?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was ist neu bei der Bundespräsident-Nachfolge?", items: [
          { tag: "position", text: "CDU-Präsidiumsmitglied und NRW-Heimatministerin Ina Scharrenbach sprach sich am 5.11.2026 gegenüber dem Handelsblatt für die CSU-Politikerin Ilse Aigner als gemeinsame Unions-Kandidatin für das Amt des Bundespräsidenten aus. Zuvor hatten sich bereits Baden-Württembergs Ministerpräsident Cem Özdemir (Grüne), alle drei ostdeutschen CDU-Ministerpräsidenten sowie Brandenburgs Ministerpräsident Dietmar Woidke (SPD) für Aigner ausgesprochen; Unionsfraktionschef Thorsten Frei sprach von einer „Zielgeraden” für eine gemeinsame Kandidatenbenennung durch CDU und CSU." },
          { tag: "unbestaetigt", text: "Zuvor hatte die Rheinische Post aus CDU-Kreisen berichtet, die hessische Fraktionschefin Ines Claus sei die Favoritin von Kanzler Merz; Merz' Umfeld dementierte dies und erklärte, Merz habe weder eine Entscheidung getroffen noch einen Vorschlag unterbreitet. Die Wahl durch die Bundesversammlung ist für den 30.1.2027 vorgesehen." }
        ]},
        { h: "Was berät der Bundestag sonst heute?", items: [
          { tag: "fakt", text: "Der Bundestag berät am 5.11.2026 in erster Lesung über das Pflegeneuordnungsgesetz, das ab 2027 die Beiträge stabilisieren und ein drohendes Milliardendefizit von rund 8 Mrd. Euro abwenden soll, unter anderem durch eine strengere Pflegegrad-Einstufung und einen höheren Beitragszuschlag für Kinderlose. Gesundheitsminister Carsten Linnemann kündigte Nachbesserungen an, etwa eine Rücknahme von Kürzungen bei Rentenversicherungsbeiträgen für pflegende Angehörige." },
          { tag: "position", text: "Linke-Vorsitzende Ines Schwerdtner kritisierte, Linnemann wolle nach der gesetzlichen Krankenversicherung nun offenbar auch die Pflege nach demselben Muster angehen; der DGB forderte spürbare Verbesserungen statt weiterer Einsparungen. Eine Petition pflegender Angehöriger gegen die Reform hatte bis Donnerstag mehr als 90.000 Unterschriften." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich mehrere CDU-Länderchefs und der Koalitionspartner SPD bereits auf Aigner festlegen, während Merz noch keine eigene Entscheidung verkündet hat, zeigt, dass die Bundespräsident-Nachfolge innerhalb der Union zunehmend von den Ländern getrieben wird." }
        ]}
      ],
      reaction: "Haushalt und Rentenreform werden in Meldung 7 behandelt.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:landtagswahl-why"],
      sources: [
        { title: "dawum.de: Forsa-Umfrage zur Bundestagswahl vom 03.11.2026", url: "https://dawum.de/Bundestag/Forsa/2026-11-03/" },
        { title: "dawum.de: INSA-Umfrage zur Bundestagswahl vom 03.11.2026", url: "https://dawum.de/Bundestag/INSA/2026-11-03" },
        { title: "Tagesspiegel/dpa: Debatte um Steinmeier-Nachfolge – alle CDU-Regierungschefs aus dem Osten für Aigner", url: "https://www.tagesspiegel.de/politik/dpa-debatte-um-steinmeier-nachfolge-alle-cdu-regierungschefs-aus-dem-osten-fur-aigner--frei-sieht-hervorragende-personalie-16242543.html" },
        { title: "Deutscher Bundestag: Neuordnung der Pflegeversicherung in erster Lesung beraten", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw45-de-pflegeneuordnungsgesetz-1225076" }
      ]
    },
    /* 9 INTERNATIONAL: US-ZWISCHENWAHLEN NACHWIRKUNGEN */
    {
      id: "us-midterms-nachwirkungen-johnson-trump-vance-11-05", cats: ["world"], when: "Wahltag Di 3.11. · Teilauszählung Stand Do 5.11.2026",
      headline: "Die Demokraten kontrollieren nach dem Erdrutschsieg bei den Zwischenwahlen beide Kongresskammern, Mike Johnson tritt nicht erneut als republikanischer Fraktionschef an",
      sec30: "Bei den US-Zwischenwahlen am 3.11. haben die Demokraten die Kontrolle über Repräsentantenhaus und Senat zurückgewonnen; im Senat eroberten sie sieben bislang republikanische Sitze und liegen nach bisherigem Stand bei 54 zu 44 Sitzen, ohne dass die Republikaner einen demokratischen Sitz zurückgewinnen konnten. In Mississippi und Alaska waren die Rennen zum Redaktionsschluss weiterhin nicht final entschieden. Der bisherige Minderheitsführer Mike Johnson kündigte an, nicht erneut für den Posten zu kandidieren. Präsident Trump reagierte auf die Niederlage mit der Ankündigung, mit den neuen demokratischen Mehrheiten zusammenarbeiten zu wollen, räumte zugleich aber ein, dass der seit Februar laufende Krieg mit dem Iran zur Wahlniederlage beigetragen habe; Vizepräsident Vance äußerte sich noch deutlicher.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Ein von den Demokraten mitkontrollierter Kongress kann die Gesetzgebungsagenda von Präsident Trump für die zweite Hälfte seiner Amtszeit deutlich erschweren, etwa bei Haushalts- und Regulierungsfragen; zugleich steigt die Bedeutung möglicher Vetos des Präsidenten." }
        ]},
        { h: "Wer ist beteiligt, und wie ist der Auszählungsstand?", items: [
          { tag: "fakt", text: "Die Demokraten gewannen die Mehrheit im Repräsentantenhaus zurück und eroberten im Senat sieben bislang republikanische Sitze (Iowa, Kansas, Ohio, Maine, North Carolina, South Carolina, Texas); nach bisherigem Stand liegen sie bei 54 zu 44 Sitzen, ohne dass die Republikaner einen einzigen demokratischen Sitz zurückgewinnen konnten. Die republikanische Senatorin Susan Collins verlor in Maine gegen den Demokraten Troy Jackson.",
            ask: [{ label: "Mehr zur Marktreaktion", ref: "s:1" }] },
          { tag: "unbestaetigt", text: "In Mississippi liegt der Demokrat Colom nach bisherigem Stand mit rund 1.000 Stimmen vor der republikanischen Amtsinhaberin Hyde-Smith; die Entscheidung hängt von rund 15.000 noch auszuzählenden provisorischen Stimmzetteln ab. In Alaska verzögern das Ranked-Choice-Verfahren sowie eine Kontroverse um einen zweiten Kandidaten namens „Dan Sullivan” auf dem Stimmzettel die endgültige Auszählung um mehrere Wochen." }
        ]},
        { h: "Welcher historische Hintergrund ist relevant?", items: [
          { tag: "fakt", text: "Der bisherige republikanische Minderheitsführer Mike Johnson gab am 4.11. bekannt, nicht erneut für den Fraktionsvorsitz zu kandidieren; er gewann seinen eigenen Wahlkreis in Louisiana und bleibt einfacher Abgeordneter. Damit ist ein offenes Rennen um die künftige republikanische Fraktionsführung entstanden." }
        ]},
        { h: "Welche wirtschaftlichen und politischen Auswirkungen werden diskutiert?", items: [
          { tag: "position", text: "Präsident Trump sagte, er sei „ein bisschen überrascht” gewesen, kündigte aber an, mit den neuen demokratischen Mehrheiten zusammenarbeiten zu wollen; zugleich betonte er sein Vetorecht. Er räumte zudem ein, dass der seit dem 28.2.2026 laufende Krieg mit dem Iran sinngemäß zur Wahlniederlage beigetragen habe – wegen kurzfristig gestiegener Spritpreise –, bekräftigte aber, er würde die gleiche Entscheidung wieder treffen. Vizepräsident JD Vance äußerte sich laut Berichten noch deutlicher und nannte den Krieg sinngemäß als Grund für die Niederlage." },
          { tag: "einordnung", text: "An den Finanzmärkten wird der Ausgang überwiegend als Erleichterung gedeutet (Meldung 1 und 2), während einzelne Rechenzentrums- und KI-nahe Aktien wegen angekündigter strengerer Regulierung in neu gewonnenen Bundesstaaten unter Druck stehen (Meldung 15).",
            ask: [{ label: "Mehr zu Tech-Aktien", ref: "s:15" }] }
        ]}
      ],
      reaction: "Die Marktreaktion wird in Meldung 1 (Europa) und Meldung 2 (USA) behandelt, Folgen für Tech-Aktien in Meldung 15, der Zusammenhang zum Ölpreis in Meldung 11.",
      terms: [],
      followups: [],
      sources: [
        { title: "CNBC: Democrats sweep 2026 midterms; Republicans fail to flip a single seat", url: "https://www.cnbc.com/2026/11/04/democrats-2026-midterm-election-results.html" },
        { title: "Washington Post: Speaker Johnson won't seek reelection", url: "https://www.washingtonpost.com/politics/2026/11/04/speaker-johnson-house-republicans-elections/699640e4-d869-11f1-930a-e08f8086f5ac_story.html" },
        { title: "Middle East Eye: Trump admits Iran war caused election losses", url: "https://www.middleeasteye.net/live-blog/live-blog-update/trump-admits-iran-war-caused-election-losses-we-had-do-it" },
        { title: "France24: Mississippi cliffhanger, Alaska count continues in US Senate races", url: "https://www.france24.com/en/live-news/20261104-mississippi-cliffhanger-alaska-count-continues-in-us-senate-races" }
      ]
    }
    ,
    /* 10 INTERNATIONAL/GEOPOLITIK: UKRAINE/ABU DHABI */
    {
      id: "ukraine-abudhabi-melania-energieangriffe-11-05", cats: ["world", "geo"], when: "Russischer Großangriff 3./4.11. · Abu-Dhabi-Gespräche geplant 10./11.11. · Melania-Trump-Treffen 5.11.2026",
      headline: "Russland, die USA und die Ukraine bestätigen Dreiergespräche in Abu Dhabi für den 10./11. November, zuvor griff Russland großflächig die ukrainische Energieinfrastruktur an",
      sec30: "In der Nacht vom 3. auf den 4.11. griff Russland mit rund 310 Drohnen großflächig die ukrainische Energieinfrastruktur in neun Regionen an; die ukrainische Luftabwehr schoss nach eigenen Angaben 272 Drohnen ab, landesweit wurden in den vergangenen 24 Stunden mindestens 6 Menschen getötet und rund 50 verletzt. Bereits in dieser Woche hatte ein russischer Luftangriff auf ein Hilfsverteilzentrum in Komyschuwacha (Oblast Saporischschja) nach Polizeiangaben mindestens 42 Zivilisten getötet – einer der tödlichsten Angriffe des Krieges, einen Tag nach Ablauf eines kurzen, US-vermittelten lokalen Waffenstillstands. Russland, die USA und die Ukraine bestätigten für den 10./11.11. in Abu Dhabi die vierte Runde von Dreiergesprächen seit Januar 2026 – die erste seit der neunmonatigen Unterbrechung durch den Ausbruch des US-Iran-Kriegs Ende Februar. First Lady Melania Trump will zuvor am 5.11. ukrainische und russische Ombudsleute im Weißen Haus zusammenbringen. International hält die Gaza-Waffenruhe nach Angaben von mehr als 100 Hilfsorganisationen nur „dem Namen nach”, Venezuelas Oppositionsführerin Machado spricht von einem unumkehrbaren Weg zu Wahlen 2027, und Taiwan registriert verstärkte chinesische Militäraktivität vor den Lokalwahlen am 28.11.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Dass die für 10./11.11. geplanten Abu-Dhabi-Gespräche die erste Dreierrunde seit der neunmonatigen, durch den Ausbruch des US-Iran-Kriegs verursachten Unterbrechung sind, zeigt, wie eng der Krieg in der Ukraine mit anderen internationalen Krisen verzahnt ist.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:11" }] }
        ]},
        { h: "Wer ist an den geplanten Gesprächen beteiligt?", items: [
          { tag: "fakt", text: "Für die Dreiergespräche in Abu Dhabi sind auf US-Seite Sondergesandter Steve Witkoff und Jared Kushner vorgesehen, auf russischer Seite Putin-Berater Wladimir Medinski; Themen sind laut Ankündigungen das Kriegsende, Nachkriegs-Sicherheitsvereinbarungen und humanitäre Fragen. Bereits am 5.11. will First Lady Melania Trump, die den Kontakt eigenständig initiiert hatte, die ukrainischen und russischen Ombudsleute Dmytro Lubinets und Jana Lantratowa im Weißen Haus zusammenbringen, um einen von ihr vermittelten lokalen Waffenstillstand in der Region Oleschky/Cherson zu besprechen." }
        ]},
        { h: "Welcher Hintergrund ist relevant?", items: [
          { tag: "fakt", text: "In der Nacht vom 3. auf den 4.11.2026 griff Russland mit rund 310 Drohnen und Marschflugkörpern großflächig die ukrainische Energieinfrastruktur in neun Regionen an; die ukrainische Luftabwehr schoss nach eigenen Angaben 272 Drohnen und zwei Marschflugkörper ab." },
          { tag: "fakt", text: "Ein russischer Luftangriff mit einer Gleitbombe auf ein Hilfsverteilzentrum in Komyschuwacha (Oblast Saporischschja) tötete nach Polizeiangaben mindestens 42 Zivilisten, weitere Menschen galten als unter Trümmern vermisst. Der Angriff erfolgte einen Tag nach Ablauf eines kurzen, von den USA vermittelten lokalen Waffenstillstands und weniger als eine Woche vor den geplanten Abu-Dhabi-Gesprächen." },
          { tag: "position", text: "Präsident Selenskyj bezeichnete den Angriff auf das Hilfszentrum als einen der tödlichsten des Krieges." }
        ]},
        { h: "Was ist sonst international wichtig?", items: [
          { tag: "fakt", text: "Mehr als 100 humanitäre und Menschenrechtsorganisationen erklärten, die im Oktober 2025 vereinbarte Waffenruhe in Gaza existiere „nur dem Namen nach”; israelische Angriffe töteten am 1.11. nach Angaben von Gesundheitsbehörden mindestens acht Palästinenser." },
          { tag: "position", text: "Venezuelas Oppositionsführerin María Corina Machado erklärte nach ihrer Rückkehr, das Land bewege sich unumkehrbar auf eine Präsidentschaftswahl 2027 zu; sie betonte, keinen Kontakt zur Interimsregierung unter Delcy Rodríguez zu haben." },
          { tag: "unbestaetigt", text: "Taiwan registrierte in den 24 Stunden bis zum 4.11. 49 Lufteinsätze chinesischer Militärflugzeuge rund um die Insel; Beobachter werten dies als Teil einer „Grauzonen”-Strategie Pekings vor den taiwanesischen Lokalwahlen am 28.11." }
        ]}
      ],
      reaction: "Der Energiemarkt-Hintergrund und die Lage am Persischen Golf werden in Meldung 11 behandelt, die US-Zwischenwahlen im Detail in Meldung 9.",
      terms: [],
      followups: [],
      sources: [
        { title: "RTÉ: Russia confirms Ukraine-US talks in Abu Dhabi", url: "https://www.rte.ie/news/2026/1103/1597730-ukraine/" },
        { title: "Kyiv Independent: Russian attacks kill 6, injure 50 across Ukraine as energy facilities targeted", url: "https://kyivindependent.com/russian-attacks-kill-6-injure-50-across-ukraine-over-past-day-as-energy-facilities-targeted-in-multiple-regions/" },
        { title: "Deccan Herald: Death toll from strike on Ukrainian aid centre reaches 42", url: "https://www.deccanherald.com/world/russia/death-toll-from-russian-strike-on-ukrainian-aid-centre-reaches-42-police-say-4208618" },
        { title: "CNBC: Melania Trump to host ceasefire meeting", url: "https://www.cnbc.com/2026/11/03/russia-ukraine-peace-talks-abu-dhabi-trump-putin-xi.html" },
        { title: "Al Jazeera: Gaza ceasefire exists in name only, more than 100 NGOs say", url: "https://www.aljazeera.com/news/2026/10/9/gaza-ceasefire-exists-in-name-only-more-than-100-ngos-say" }
      ]
    },
    /* 11 ENERGIE/GEOPOLITIK: HORMUZ/OEL/TTF/OPEC+ */
    {
      id: "hormuz-oelpreis-crash-ttf-gasspeicher-opec-11-05", cats: ["energy", "geo"], when: "Ölpreis-Crash Mi 4.11. · IRGC-Meldungen 5.11. · Bundesnetzagentur-Stand 4.11.2026",
      headline: "Der Ölpreis Brent bricht nach Vance-Äußerungen zum Irankrieg um rund 9 Prozent ein, der Iran meldet weitere Tankerzwischenfälle an der Straße von Hormus",
      sec30: "Brent brach am Mittwoch um rund 9 % von 104,23 auf ein Settlement von 93,52 Dollar ein, WTI fiel um 8,9 % auf 87,56 Dollar; am Donnerstag erholte sich der Preis leicht auf zwischen 94 und 97 Dollar, Angaben dazu weichen je nach Quelle und Zeitpunkt deutlich voneinander ab. Als Hintergrund nennen Berichte Äußerungen von US-Vizepräsident Vance, der den seit dem 28.2.2026 laufenden Krieg mit dem Iran als Grund für die Wahlniederlage der Republikaner bezeichnete, was Spekulationen auf ein baldiges US-Iran-Abkommen befeuerte. Die iranische Revolutionsgarde (IRGC) meldete am 5.11. zugleich zwei brennende Öltanker und einen brennenden Schlepper an der Straße von Hormus; eine unabhängige Bestätigung lag nicht vor. Der europäische Gaspreis TTF fiel von 93,67 auf 85,49 Euro je Megawattstunde; die deutschen Gasspeicher lagen laut Bundesnetzagentur zum 4.11. bei 60,8 % Füllstand und damit deutlich unter dem eigentlichen Ziel von 80 % zum 1.11. sowie unter dem Vorjahreswert von 75,24 %.",
      blocks: [
        { h: "Wie hat sich der Ölpreis entwickelt, und warum?", items: [
          { tag: "fakt", text: "Brent brach am Mittwoch um rund 9 % von 104,23 auf ein Settlement von 93,52 Dollar ein, WTI fiel um 8,9 % auf 87,56 Dollar – einer der stärksten Tagesverluste seit Kriegsbeginn im Februar. Am Donnerstagvormittag erholte sich der Preis leicht auf zwischen 94 und 97 Dollar; genaue Angaben weichen je nach Quelle und Abfragezeitpunkt an diesem volatilen Handelstag deutlich voneinander ab.",
            ask: [{ label: "Wie entsteht der Ölpreis?", ref: "n:brent" }] },
          { tag: "position", text: "US-Vizepräsident Vance sagte laut Berichten sinngemäß, der Grund für die Wahlniederlage der Republikaner sei der Krieg mit dem Iran gewesen; auch Präsident Trump räumte ein, der Krieg habe über gestiegene Spritpreise zur Niederlage beigetragen, bekräftigte aber, er würde die gleiche Entscheidung wieder treffen. Beide Aussagen befeuerten laut Berichten Spekulationen auf ein baldiges US-Iran-Abkommen und eine Lockerung der Blockade der Straße von Hormus." }
        ]},
        { h: "Was meldet der Iran zur Lage an der Straße von Hormus?", items: [
          { tag: "unbestaetigt", text: "Die iranischen Revolutionsgarden (IRGC) meldeten am 5.11.2026, zwei Öltanker und ein Schlepper seien in getrennten Zwischenfällen an der Straße von Hormus in Brand geraten; ein Großtanker soll in der Nacht zuvor auf einer von Iran als „nicht genehmigt” bezeichneten Route auf eine Seemine gelaufen sein. Das britische Marine-Handelszentrum UKMTO meldete zusätzlich, ein Tanker sei vor Katar von zwei nicht identifizierten Projektilen getroffen worden. Eine unabhängige Bestätigung dieser Angaben lag zum Redaktionsschluss nicht vor; sie stammen bislang überwiegend aus iranischen Staatsquellen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wie ist der Stand bei TTF-Gas, den deutschen Gasspeichern und OPEC+?", items: [
          { tag: "fakt", text: "Der europäische Gaspreis TTF fiel von 93,67 Euro am 3.11. auf 85,49 Euro je Megawattstunde am 4.11. – ein deutlicher Rückgang im Zuge der gleichen Entspannungshoffnungen wie beim Ölpreis.",
            ask: [{ label: "Was ist TTF-Gas?", ref: "t:ttf" }] },
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur zum 4.11.2026 bei 60,8 % Füllstand (150,4 TWh) – deutlich unter dem eigentlichen Zwischenziel von 80 % zum 1.11. und rund 14,7 Prozentpunkte unter dem Vorjahreswert (75,24 % am 3.11.2025). Die Bundesnetzagentur schätzt die Gefahr einer angespannten Gasversorgung trotzdem weiterhin als gering ein." },
          { tag: "fakt", text: "OPEC+ hatte bereits am 1.11. die Förderziele für Dezember auf dem Niveau von September belassen; über die Förderquoten für 2027 entscheidet die OPEC+-Vollversammlung erst am 29.11.2026." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis nach Entspannungssignalen aus Washington stark fällt, während der Iran gleichzeitig neue, unbestätigte Tankerzwischenfälle meldet, zeigt, dass die Märkte derzeit stärker auf politische Signale zu einem möglichen Kriegsende als auf einzelne Vorfallsmeldungen reagieren. Über die Kette von Konflikt über Ölpreis bis zu Inflation und Zinsen informiert die Übersicht unten.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Die Marktreaktion bei Gold wird in Meldung 3 behandelt, die US-Zwischenwahlen und ihre Folgen in Meldung 9, die Reaktion an den US-Börsen in Meldung 2.",
      terms: ["brent", "wti", "ttf"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:gas-ttf", "e:energy-germany", "chain:oil-to-markets"],
      sources: [
        { title: "FinanceFeeds: Brent Crude Oil Price – $94 Thursday After Wednesday's 9% Crash", url: "https://financefeeds.com/brent-crude-oil-price-94-thursday-after-9-percent-crash-us-iran-deal-bets-bull-100-bear-90/" },
        { title: "Star Advertiser/AP: Oil tumbles 9% as investors eye possible end to Iran war", url: "https://www.staradvertiser.com/2026/11/04/breaking-news/oil-tumbles-9-as-investors-eye-possible-end-to-iran-war/" },
        { title: "OilPrice: Iran Reports More Tanker Fires in Strait of Hormuz", url: "https://oilprice.com/Latest-Energy-News/World-News/Iran-Reports-More-Tanker-Fires-in-Strait-of-Hormuz.html" },
        { title: "Bundesnetzagentur: Aktuelle Lage der Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/artikel.html" },
        { title: "The National: OPEC+ holds December oil output targets steady as Iran war disrupts supply", url: "https://thenationalnews.com/business/energy/2026/11/01/opec-holds-december-oil-output-targets-steady-as-iran-war-disrupts-supply" }
      ]
    },
    /* 12 DEFENCE */
    {
      id: "rheinmetall-hensoldt-renk-q3-arminius-euronaval-11-05", cats: ["defence"], when: "Q3-Zahlen Rheinmetall/Hensoldt/RENK 5.11. · Haushaltsausschuss 4./5.11. · Euronaval Paris 3.–6.11.2026",
      headline: "Rheinmetall senkt die Jahresprognose zum fünften Mal binnen elf Monaten und bricht zweistellig ein, Hensoldt und RENK legen trotz guter Zahlen im Branchensog nach",
      sec30: "Rheinmetall meldete für das dritte Quartal einen Umsatz von 3,149 Mrd. Euro (+32,1 %) und ein operatives Ergebnis von 553 Mio. Euro (+61,7 %), senkte aber zugleich die Jahresprognose 2026 – wegen Verzögerungen bei der Boxer-Großbestellung „Arminius” und bei Munitions-Abnahmeverfahren – zum fünften Mal binnen rund elf Monaten; die Aktie brach daraufhin zeitweise um bis zu 18 % ein. Hensoldt übertraf mit 696 Mio. Euro Umsatz (+2 % über Konsens) und 144 Mio. Euro bereinigtem EBITDA die Erwartungen und hob die Jahresprognose an, verlor aber im Branchensog dennoch leicht. RENK steigerte den Auftragseingang um 44,3 % auf 469 Mio. Euro, die Aktie fiel trotzdem um rund 4,1 %. Der Bundestags-Haushaltsausschuss billigte zugleich sechs weitere Rüstungsbeschaffungen von rund 1,5 Mrd. Euro, auf der Pariser Messe Euronaval präsentierten Thales, Fincantieri, Naval Group und weitere Unternehmen neue Kooperationen.",
      blocks: [
        { h: "Was zeigen die Rheinmetall-Zahlen, und warum senkt der Konzern die Prognose erneut?", items: [
          { tag: "fakt", text: "Rheinmetall meldete für das dritte Quartal 2026 einen Umsatz von 3,149 Mrd. Euro (+32,1 % ggü. Vorjahr) und ein operatives Ergebnis (EBIT) von 553 Mio. Euro (+61,7 %); der Auftragsbestand stieg auf einen Rekordwert von rund 78 Mrd. Euro (Vorjahr 56,7 Mrd.).",
            ask: [{ label: "Warum reagieren Rüstungsaktien so empfindlich?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Zugleich senkte Rheinmetall die Jahresprognose 2026 auf rund 13,2 Mrd. Euro Umsatz (zuvor 13,7 bis 14,2 Mrd.) und rund 18,5 % operative Marge (zuvor rund 19 %) – laut JPMorgan-Analyst David Perry die fünfte Gewinn- oder Umsatzwarnung binnen rund elf Monaten. Als Gründe nannte Rheinmetall Verzögerungen bei der milliardenschweren Boxer-Großbestellung „Arminius” sowie bei Abnahmeverfahren für Artilleriemunition und eine schwächer als erwartet laufende Kooperation mit Destinus." },
          { tag: "fakt", text: "Die Aktie brach daraufhin zeitweise um bis zu 18 % auf rund 818,70 Euro ein und notierte zur Mittagszeit noch 14 bis 16 % im Minus bei rund 833 bis 844 Euro – etwa 48 % unter ihrem Jahreshoch. Die Boxer-Bestellung „Arminius” (Gesamtwert gut 20 Mrd. Euro) kommt laut Rheinmetalls eigener Einschätzung wahrscheinlich nicht mehr in diesem Jahr und laut Berichten erst im Februar 2027." }
        ]},
        { h: "Wie schnitten Hensoldt und RENK ab?", items: [
          { tag: "fakt", text: "Hensoldt meldete für das dritte Quartal einen Umsatz von 696 Mio. Euro (gut 2 % über Konsens) und ein bereinigtes EBITDA von 144 Mio. Euro (Vorjahr 104 Mio., rund 12 % über Konsens) bei einer Marge von 20,6 %; der Auftragsbestand erreichte mit rund 10,4 Mrd. Euro einen Rekordwert, vor allem getrieben vom Panzergeschäft. Der Konzern hob die Jahresprognose auf rund 2,8 Mrd. Euro Umsatz an, verlor aber im Sog der Rheinmetall-Gewinnwarnung dennoch rund 0,5 bis 1,7 %." },
          { tag: "unbestaetigt", text: "Zum weiterhin ungelösten Logistikproblem im Lagerverwaltungssystem ZEBEL am Hensoldt-Standort Wolfhagen äußerte sich der Konzern in der Q3-Mitteilung laut übereinstimmenden Berichten nicht konkret; Zeitplan und finanzielle Auswirkungen bleiben offen." },
          { tag: "fakt", text: "RENK steigerte den Auftragseingang um 44,3 % auf 469 Mio. Euro (Book-to-Bill-Verhältnis 1,4), der Umsatz legte um 12 % auf 345 Mio. Euro zu, das bereinigte EBIT um 17,3 % auf 61 Mio. Euro; die Jahresprognose wurde bestätigt. Die Aktie fiel dennoch um rund 4,1 % auf 34,95 Euro, nachdem der freie Cashflow mit 11 Mio. Euro hinter dem Konsens von 29 Mio. Euro zurückblieb." }
        ]},
        { h: "Was passierte beim Haushaltsausschuss und auf der Euronaval-Messe?", items: [
          { tag: "fakt", text: "Der Bundestags-Haushaltsausschuss billigte am 4./5.11.2026 sechs weitere „25-Millionen-Euro-Vorlagen” zur Bundeswehr-Beschaffung mit einem Gesamtvolumen von rund 1,5 Mrd. Euro, unter anderem ein Radar-Upgrade für Eurofighter der Tranche 4 sowie Übungsmunition für Puma und Schweren Waffenträger Infanterie; ein Vorhaben zu Spike-ER-2-Panzerabwehrlenkflugkörpern wurde kurzfristig von der Tagesordnung genommen.",
            ask: [{ label: "Mehr zum Zeitplan der Arminius-Bestellung", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Auf der Euronaval-Messe in Paris (3. bis 6.11., über 700 Aussteller aus mehr als 70 Ländern) unterzeichneten Fincantieri, Navantia und Naval Group eine Konsortialvereinbarung für die zweite Phase der European Patrol Corvette, Thales und die ELT Group gründeten ein Gemeinschaftsunternehmen für maritime elektronische Kampfführung, und Saab stellte sein neues 9LV-Marinekampfsystem vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rheinmetall trotz eines starken Quartals die Prognose erneut senkt, während Hensoldt und RENK bessere Zahlen liefern, zeigt, dass einzelne Großprojekte wie die Boxer-Bestellung derzeit stärker auf die Bewertung der gesamten Branche durchschlagen als die operative Geschäftsentwicklung der einzelnen Unternehmen.",
            ask: [{ label: "Mehr zu den NATO-Rüstungsausgaben", ref: "e:nato-target" }] }
        ]}
      ],
      reaction: "Die Marktreaktion bei DAX und Euro Stoxx 50 wird in Meldung 1 behandelt.",
      terms: ["closing"],
      followups: ["e:defence-stocks", "e:defence-order", "e:nato-target"],
      sources: [
        { title: "Rheinmetall: Quarterly Statement Q3 2026", url: "https://www.rheinmetall.com/en/media/news-watch/news/2026/11/2026-11-05-rheinmetall-news-quarterly-statement-q3" },
        { title: "Euronews: Rheinmetall shares plunge more than 17% after profit warning over order delays", url: "https://www.euronews.com/2026/11/05/rheinmetall-shares-plunge-more-than-17-after-profit-warning-over-order-delays" },
        { title: "Investing.com: Hensoldt Q3 adjusted EBITDA beats forecasts, 2026 sales target raised", url: "https://in.investing.com/news/earnings/hensoldt-q3-adjusted-ebitda-beats-forecasts-2026-sales-target-raised-5681763" },
        { title: "finanznachrichten.de: ROUNDUP – Rüstungskonzern Renk legt bei Aufträgen deutlich zu, Aktie sackt ab", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70044439-roundup-ruestungskonzern-renk-legt-bei-auftraegen-deutlich-zu-aktie-sackt-ab-016.htm" },
        { title: "hartpunkt.de: Boxer-Großbestellung Arminius kommt offenbar erst im Februar 2027", url: "https://www.hartpunkt.de/boxer-grossbestellung-arminius-kommt-offenbar-erst-im-februar-2027/" }
      ]
    }
    ,
    /* 13 DEALS: BASF/EVONIK/EQT-QIAGEN/TESLA-SPACEX */
    {
      id: "basf-evonik-eqt-qiagen-teslaspacex-11-05", cats: ["deals", "pe"], when: "Evonik-Q3 3.11. · Qiagen-Vollzahlen veröffentlicht 4.11. 22:05 Uhr · Tesla/SpaceX Stand Anfang November 2026",
      headline: "Evonik untermauert nach starken Q3-Zahlen seine Ablehnung des BASF-Angebots, die vollständigen Qiagen-Zahlen zum EQT-Deal zeigen Wachstum bei ausgesetzter Prognose",
      sec30: "Evonik meldete für das dritte Quartal ein um 40 % gesteigertes bereinigtes operatives Ergebnis von 629 Mio. Euro bei 13 % Umsatzwachstum auf 3,8 Mrd. Euro und untermauerte damit seine Ablehnung des BASF-Übernahmeangebots (24,00 Euro je Aktie, rund 11,2 Mrd. Euro); CFO Michael Rauch bekräftigte, der Konzern lasse weiterhin nur einen vertraulichen, informellen Austausch zu. Bei Qiagen liegen seit gestern Abend die vollständigen Q3-Zahlen zum bereits besiegelten EQT-Kauf (46,50 Euro je Aktie) vor: Nettoumsatz 548 Mio. Dollar (+3 %), bereinigter Gewinn je Aktie 0,65 Dollar – beide über den Erwartungen; wegen der laufenden Transaktion hat Qiagen seine Jahresprognose ausgesetzt und keinen Earnings Call abgehalten. Bei Tesla und SpaceX bleibt eine Fusion weiterhin unbestätigt.",
      blocks: [
        { h: "Wie reagiert Evonik auf das BASF-Angebot nach den Q3-Zahlen?", items: [
          { tag: "fakt", text: "Evonik meldete für das dritte Quartal 2026 ein um 13 % auf 3,8 Mrd. Euro gestiegenes Umsatzwachstum und ein um 40 % auf 629 Mio. Euro gesteigertes bereinigtes operatives Ergebnis; der Vorstand zeigte sich zuversichtlicher, die obere Hälfte der Jahresprognose von 2,0 bis 2,2 Mrd. Euro bereinigtem EBITDA zu erreichen.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich der Unternehmenswert vom Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "position", text: "Evonik-Finanzvorstand Michael Rauch bekräftigte laut Bloomberg die Unabhängigkeitsstrategie gegenüber dem BASF-Angebot von 24,00 Euro je Aktie (rund 11,2 Mrd. Euro) und kritisierte sinngemäß das Timing des Vorstoßes, der kurz nach der krankheitsbedingten Auszeit von CEO Christian Kullmann erfolgt sei; Interims-CEO Claus Rettig bezeichnete den Konzern als stark und robust. Der Vorstand lehnt konkrete Übernahmeverhandlungen weiterhin ab, lässt aber einen vertraulichen, informellen Austausch zu." },
          { tag: "unbestaetigt", text: "Die RAG-Stiftung (rund 44 % der Anteile) hat ihr Kuratorium über das BASF-Angebot informiert, aber zum Redaktionsschluss kein neues öffentliches Statement abgegeben; ein höheres BASF-Angebot lag ebenfalls nicht vor." }
        ]},
        { h: "Was zeigen die vollständigen Qiagen-Q3-Zahlen zum EQT-Deal?", items: [
          { tag: "fakt", text: "Qiagen veröffentlichte am Mittwochabend die vollständigen Q3-2026-Zahlen: Nettoumsatz 548 Mio. Dollar (+3 % ggü. Vorjahr, auch währungsbereinigt), bereinigter verwässerter Gewinn je Aktie 0,65 Dollar (Vorjahr 0,61 Dollar) – beide über den Erwartungen. Das unverwässerte (GAAP-)Ergebnis je Aktie sank dagegen auf 0,51 Dollar (-15 %), der Nettogewinn auf 106 Mio. Dollar (-19 %); das bereinigte operative Ergebnis stieg um 6 % auf 167 Mio. Dollar bei einer Marge von 30,4 %." },
          { tag: "fakt", text: "Wegen der ausstehenden Transaktion mit dem EQT-Konsortium (Angebotspreis weiterhin 46,50 Euro je Aktie über die Gesellschaft Crown NL Bidco, Closing Mitte 2027 erwartet) hat Qiagen seine Jahresprognose 2026 ausgesetzt und keinen Earnings Call zu den Q3-Zahlen abgehalten." }
        ]},
        { h: "Was ist bei Tesla und SpaceX neu?", items: [
          { tag: "unbestaetigt", text: "Bei Tesla und SpaceX liegen weiterhin keine Fusionsvereinbarung und keine Konditionen vor; beide Unternehmen prüfen eine mögliche Fusion über unabhängige Sonderausschüsse. Musk erklärte laut Berichten, für Tesla wäre eine Zustimmung von 50 % aller ausstehenden Aktien (nicht nur der abgegebenen Stimmen) nötig – eine vergleichsweise hohe Hürde; er selbst halte sich wegen des Interessenkonflikts aus den Verhandlungen heraus. Laut Prognosemarkt Polymarket liegt die Wahrscheinlichkeit einer Ankündigung bis Ende 2026 bei rund 16 %, bis Ende 2027 bei rund 66,5 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Evonik seine Ablehnung nach starken Zahlen weiter untermauert, während bei Qiagen trotz guter Quartalszahlen wegen der laufenden EQT-Transaktion keine Jahresprognose mehr existiert und bei Tesla/SpaceX weiterhin offene Fragen bestehen, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "≈ 11,2 Mrd. € (BASF/Evonik-Angebot, weiterhin abgelehnt) · ≈ 10,8 Mrd. € (EQT/Qiagen, bestätigt)", buyer: "BASF (abgelehnt) · EQT-Konsortium (Crown NL Bidco)", target: "Evonik · Qiagen", sector: "Chemie / Biotech-Diagnostik", type: "Unternehmensübernahmen (Details zu einem möglichen neuen BASF-Schritt sowie zu einer neuen RAG-Stiftung-Stellungnahme sind nicht in den Quellen genannt)" },
      reaction: "Weitere Großdeals, der Private-Credit-Markt und ein neuer Pharma-Deal werden in Meldung 14 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "Bloomberg: Evonik CFO Hardens Dismissal of €11.2 Billion BASF Approach", url: "https://www.bloomberg.com/news/articles/2026-11-03/evonik-sees-strong-earnings-bolstering-defense-against-basf" },
        { title: "Handelsblatt: Quartalszahlen – Evonik steigert operativen Gewinn und betont Eigenständigkeit", url: "https://www.handelsblatt.com/unternehmen/industrie/quartalszahlen-evonik-steigert-operativen-gewinn-und-betont-eigenstaendigkeit/100265237.html" },
        { title: "BioSpace: QIAGEN Reports Full Q3 2026 Results", url: "https://www.biospace.com/press-releases/qiagen-reports-full-q3-2026-results" },
        { title: "The Motley Fool: A SpaceX-Tesla Merger Seems Inevitable. Here are 3 Things That Could Get in the Way", url: "https://www.fool.com/investing/2026/11/04/a-spacex-tesla-merger-seems-inevitable-here-are-3-things-that-could-get-in-the-way/" }
      ]
    },
    /* 14 DEALS/PE/CREDIT: MARVELL/APOLLO/PRIVATE CREDIT/ASTRAZENECA */
    {
      id: "marvell-lumentum-apollo-privatecredit-astrazeneca-11-05", cats: ["deals", "pe", "credit"], when: "Marvell/Lumentum bestätigt 2.11. · Fitch-Ausfallrate Q3 2026 · AstraZeneca/Rhythm-Bericht 4.11.2026",
      headline: "Marvells 115-Milliarden-Dollar-Übernahme von Lumentum schickt beide Aktien auf Talfahrt, die Private-Credit-Ausfallrate erreicht laut Fitch einen neuen Rekordwert",
      sec30: "Marvell übernimmt Lumentum in einem reinen Aktiendeal mit einem impliziten Unternehmenswert von 115 Mrd. Dollar (Umtauschverhältnis 4,500 Marvell-Aktien je Lumentum-Aktie); beide Aktien fielen nach Bekanntwerden deutlich, da Anleger die starke Verwässerung für Marvell-Aktionäre kritisieren. Bei der von Apollo mit einem 9,6-Mrd.-Dollar-Kreditpaket unterlegten Übernahme von ADT durch Thrive Holdings (Unternehmenswert 15,3 Mrd. Dollar) gibt es keine neuen Entwicklungen seit dem 29.10. Die laut Fitch auf einen Rekordwert von 6,3 % gestiegene Ausfallrate bei Private-Credit-Krediten (von 6,0 % im Vorquartal) steht im Mittelpunkt einer breiteren Diskussion über die Risiken der Branche. Laut einem Bericht des Wall Street Journal erwägt AstraZeneca zudem ein nicht-bindendes, rund 10 Mrd. Dollar schweres Übernahmeangebot für den Adipositas-Spezialisten Rhythm Pharmaceuticals; eine offizielle Bestätigung lag nicht vor.",
      blocks: [
        { h: "Was zeigt die Marvell-Übernahme von Lumentum, und wie reagierten die Aktien?", items: [
          { tag: "fakt", text: "Marvell kündigte am 2.11.2026 die Übernahme von Lumentum in einem reinen Aktientausch an (4,500 Marvell-Aktien je Lumentum-Aktie), was einem impliziten Unternehmenswert von rund 115 Mrd. Dollar und einer Prämie von rund 23,9 % auf den unbeeinflussten Schlusskurs entspricht; nach Abschluss (erwartet im ersten Halbjahr 2028) sollen Marvell-Aktionäre rund 67 % und Lumentum-Aktionäre rund 33 % am gemeinsamen Unternehmen halten.",
            ask: [{ label: "Was ist ein Unternehmenswert?", ref: "t:enterprise-value" }] },
          { tag: "fakt", text: "Beide Aktien fielen nach Bekanntwerden deutlich: Marvell verlor zweistellig, Lumentum ebenfalls, da Analysten die starke Verwässerung für Marvell-Aktionäre durch das feste Umtauschverhältnis statt eines Barangebots kritisierten; Bank of America stufte Marvell auf „Neutral” herab, Raymond James hob Lumentum dagegen auf „Strong Buy” hoch." }
        ]},
        { h: "Wie ist der Stand bei Apollo/ADT, und was zeigt die neue Fitch-Zahl zu Private Credit?", items: [
          { tag: "fakt", text: "Bei der von Apollo Global Management mit einem 9,6-Mrd.-Dollar-Kreditpaket unterlegten Übernahme von ADT durch Thrive Holdings (10 Dollar je Aktie bar, Unternehmenswert 15,3 Mrd. Dollar, Vereinbarung vom 29.10.) gibt es keine neuen Entwicklungen; Apollo sucht laut Berichten weiter Banken zur Mitsyndizierung der Finanzierung.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] },
          { tag: "fakt", text: "Laut Fitch stieg die Ausfallrate bei Private-Credit-Krediten (gleitender Zwölf-Monats-Zeitraum) im dritten Quartal 2026 auf einen Rekordwert von 6,3 % (von 6,0 % im Vorquartal) – der fünfte Anstieg in Folge seit dem dritten Quartal 2025. Der enger gefasste Proskauer-Default-Index, der nur tatsächliche Zahlungs- und Covenant-Ausfälle zählt, liegt dagegen bei lediglich 2,51 %; der große Unterschied verdeutlicht, wie stark die Einschätzung von der verwendeten Methodik abhängt." }
        ]},
        { h: "Was ist bei AstraZeneca und Rhythm Pharmaceuticals neu?", items: [
          { tag: "unbestaetigt", text: "Laut einem vom Wall Street Journal zitierten Bericht erwägt AstraZeneca über seine Tochter Alexion ein nicht-bindendes Übernahmeangebot für den Adipositas-Spezialisten Rhythm Pharmaceuticals von rund 10 Mrd. Dollar, bis zu 134 Dollar je Aktie inklusive meilensteinbasierter Zahlungen; die Rhythm-Aktie sprang nach Bekanntwerden um 28 %. Eine offizielle Bestätigung durch AstraZeneca lag zum Redaktionsschluss nicht vor; Finanzierung, genauer Zeitplan und beteiligte Banken sind nicht in den Quellen genannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Marvell/Lumentum-Deal trotz seiner Größe mit Kursverlusten bei beiden Beteiligten quittiert wird, während die Private-Credit-Ausfallrate gleichzeitig einen neuen Rekordwert erreicht, zeigt, dass Anleger derzeit sowohl bei großen Aktiendeals als auch bei kreditfinanzierten Übernahmen genauer auf Risiken und Konditionen achten." }
        ]}
      ],
      deal: { value: "≈ 115 Mrd. $ (Marvell/Lumentum, Aktientausch) · ≈ 15,3 Mrd. $ Unternehmenswert / 9,6 Mrd. $ Kreditpaket (Apollo/ADT) · ≈ 10 Mrd. $ (AstraZeneca/Rhythm, unbestätigt)", buyer: "Marvell · Thrive Holdings (mit Apollo-Finanzierung) · AstraZeneca/Alexion (unbestätigt)", target: "Lumentum · ADT · Rhythm Pharmaceuticals", sector: "Halbleiter/Optik · Sicherheitstechnik · Pharma", type: "Aktientausch-Übernahme · kreditfinanzierte Übernahme · nicht-bindendes Angebot (Finanzierung, genauer Zeitplan und beteiligte Banken beim AstraZeneca/Rhythm-Bericht sind nicht in den Quellen genannt)" },
      reaction: "BASF/Evonik, EQT/Qiagen und Tesla/SpaceX werden in Meldung 13 behandelt.",
      terms: ["bdc", "direct-lending", "nav", "private-equity", "default-rate"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:pc-rates"],
      sources: [
        { title: "Bloomberg: Marvell to Acquire Lumentum in $115 Billion All-Stock Deal Focused on AI", url: "https://www.bloomberg.com/news/articles/2026-11-02/marvell-reaches-115-billion-deal-for-lumentum-holdings" },
        { title: "Yahoo Finance: Marvell's $115-billion Lumentum acquisition sends both stocks tumbling", url: "https://finance.yahoo.com/technology/ai/articles/marvells-115-billion-lumentum-acquisition-133000048.html" },
        { title: "Bloomberg: Apollo Flexes Underwriting Power With $9.6 Billion ADT Debt Deal", url: "https://www.bloomberg.com/news/articles/2026-11-02/apollo-flexes-underwriting-power-with-9-6-billion-adt-debt-deal" },
        { title: "Forbes: U.S. Private Credit Defaults Hit Record 6.3% As Quiet Distress Grows", url: "https://www.forbes.com/sites/mayrarodriguezvalladares/2026/10/29/us-private-credit-defaults-hit-record-63-as-quiet-distress-grows/" },
        { title: "Yahoo Finance/Reuters: AstraZeneca made $10 billion offer for obesity drugmaker Rhythm, sources say", url: "https://sg.finance.yahoo.com/news/astrazeneca-made-10-billion-bid-213058831.html" }
      ]
    },
    /* 15 TECHNOLOGIE */
    {
      id: "anthropic-apple-amd-coreweave-qualcomm-11-05", cats: ["tech"], when: "Anthropic-S-1-Nachtrag 2.11. · Apple/AMD-Zahlen 3./4.11. · CoreWeave-CDS-Rekord 4.11.2026",
      headline: "Anthropics Wachstum verlangsamt sich vor dem geplanten Nasdaq-Listing, Apple erreicht trotz einer Abstufung einen Rekordkurs, CoreWeaves Kreditausfallversicherungen erreichen ein Rekordhoch",
      sec30: "Anthropic aktualisierte am 2.11. sein Börsenprospekt (S-1) für das geplante Nasdaq-Listing unter dem Ticker „ANT”: Der Umsatz im dritten Quartal stieg auf 17,0 Mrd. Dollar, das Wachstumstempo verlangsamte sich aber deutlich von zuletzt über 130 % auf noch 47 % gegenüber dem Vorquartal; Investoren rechnen laut Berichten inzwischen mit einer Bewertung von rund 1,4 bis 1,5 Billionen Dollar statt der zuvor diskutierten bis zu 2 Billionen. Apple erreichte trotz einer Abstufung der DZ Bank auf „Verkaufen” einen Rekordschlusskurs von 349,51 Dollar und wurde mit einer Marktkapitalisierung von über 5,1 Billionen Dollar erstmals zum wertvollsten börsennotierten Unternehmen der Welt. AMD übertraf mit einem Rechenzentrumsumsatz von 8,5 Mrd. Dollar (+97 %) die Erwartungen deutlich, während Qualcomm nach schwachen Smartphone-Chip-Zahlen um rund 10 % einbrach und CoreWeaves fünfjähriger Kreditausfallversicherungs-Spread am Mittwoch auf ein Rekordhoch von rund 1.195 Basispunkten stieg.",
      blocks: [
        { h: "Was ist beim geplanten Anthropic-Börsengang neu?", items: [
          { tag: "fakt", text: "Anthropic veröffentlichte am 2.11.2026 einen Nachtrag zu seinem Börsenprospekt (S-1) für das geplante Nasdaq-Listing unter dem Ticker „ANT”, mit einem angepeilten Erstnotiz-Termin ab der Woche vom 16.11.; Preisspanne und genaues Datum standen zum Redaktionsschluss noch nicht fest. Der Umsatz im dritten Quartal stieg auf 17,0 Mrd. Dollar, der operative Verlust lag bei 567 Mio. Dollar; das Wachstumstempo verlangsamte sich von zuvor über 130 % auf noch rund 47 % gegenüber dem Vorquartal.",
            ask: [{ label: "Was bedeutet ein Börsengang (IPO)?", ref: "t:ipo" }] },
          { tag: "unbestaetigt", text: "Investoren rechnen laut Berichten inzwischen eher mit einer Bewertung von rund 1,4 bis 1,5 Billionen Dollar statt der zuvor diskutierten bis zu 2 Billionen; die letzte private Finanzierungsrunde im Mai/Juni 2026 hatte Anthropic noch mit rund 965 Mrd. Dollar bewertet." },
          { tag: "fakt", text: "Laut dem Prospekt zahlt Anthropic für GPU-Rechenkapazität bei SpaceX inzwischen rund 1,25 Mrd. Dollar pro Monat, perspektivisch bis zu 3,1 Mrd. Dollar pro Monat bei Vollauslastung ab Dezember 2026 – ein Gesamtvertragswert von bis zu 84,5 bis 120,5 Mrd. Dollar bis 2029, je nach Quelle.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Wie reagierten Apple und AMD auf ihre Zahlen?", items: [
          { tag: "fakt", text: "Die DZ Bank stufte Apple am 4.11. von „Halten” auf „Verkaufen” ab (Kursziel 300 Dollar) und nannte steigende Speicherchip-Kosten und Lieferengpässe als Gründe; dennoch stieg die Aktie um rund 7 % auf einen Rekordschlusskurs von 349,51 Dollar und hob die Marktkapitalisierung erstmals über 5,1 Billionen Dollar – Apple ist damit das wertvollste börsennotierte Unternehmen der Welt. Mehrere andere Analysten, darunter Morgan Stanley und Wells Fargo, blieben mit „Overweight”-Einstufungen optimistisch.",
            ask: [{ label: "Mehr zu den US-Schlusskursen vom Mittwoch", ref: "s:2" }] },
          { tag: "fakt", text: "AMD meldete für das dritte Quartal einen Umsatz von 13,4 Mrd. Dollar mit einem Rechenzentrumsumsatz von 8,5 Mrd. Dollar (+97 % ggü. Vorjahr, über dem Konsens von 8,2 Mrd.); die Prognose für das vierte Quartal liegt bei rund 17 Mrd. Dollar. Mehrere Analysten, darunter Stifel Nicolaus und Piper Sandler, hoben ihre Kursziele danach deutlich an." }
        ]},
        { h: "Was ist bei CoreWeave und anderen Chip-/KI-Werten neu?", items: [
          { tag: "unbestaetigt", text: "CoreWeaves fünfjähriger Kreditausfallversicherungs-Spread (CDS) stieg am 4.11. laut einer Quelle um 74,5 Basispunkte auf ein Rekordhoch von rund 1.195 Basispunkten, eine andere Quelle nennt rund 1.140 Basispunkte für denselben Tag; Werte über 1.000 Basispunkten gelten laut S&P Global Market Intelligence allgemein als Signal für finanzielle Notlage. Als Auslöser nennen Berichte die Sorge vor strengerer Rechenzentrums-Regulierung in neu gewonnenen demokratischen Bundesstaaten wie Texas.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Qualcomm brach nach schwächer als erwarteten Smartphone-Chip-Umsätzen um rund 10,2 % ein, die Speicherchip-Werte Micron und Sandisk fielen im Zuge von Sorgen über steigende Speicherpreise ebenfalls über 7 %. Die kombinierten Kapitalausgaben von Amazon, Alphabet, Meta und Microsoft erreichten im dritten Quartal mit rund 201,9 Mrd. Dollar einen Rekordwert für ein einzelnes Quartal.",
            ask: [{ label: "Warum investieren Konzerne so viel in KI-Rechenzentren?", ref: "e:ai-capex" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Apple trotz einer Abstufung einen Rekordkurs erreicht, während AMD mit starkem Rechenzentrumswachstum überzeugt und CoreWeaves Kreditausfallversicherungen gleichzeitig auf Rekordniveau notieren, zeigt, wie unterschiedlich Anleger derzeit einzelne Technologie- und KI-Werte einschätzen. Dies ist keine Anlageberatung.",
            ask: [{ label: "Mehr zu den Zwischenwahlen und ihren Folgen für Tech-Aktien", ref: "s:9" }] }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 (Europa) und Meldung 2 (USA) behandelt.",
      terms: ["hyperscaler", "credit-spread", "gigawatt"],
      followups: ["e:ai-capex", "e:circular-financing", "e:software-ai-loans"],
      sources: [
        { title: "StockTitan: Anthropic IPO Filing Updated", url: "https://www.stocktitan.net/articles/anthropic-ipo-amended-s1-2026-guide" },
        { title: "t3n: Anthropic-IPO – warum der Börsengang ins Wanken gerät", url: "https://t3n.de/news/anthropic-ipo-boersengang-wanken-risiken-1771236/" },
        { title: "AppleInsider: AAPL hits another record high closing price following election, Q4 financials", url: "https://appleinsider.com/articles/26/11/04/aapl-hits-another-record-high-closing-price-following-election-q4-financials" },
        { title: "DatacenterDynamics: AMD's data center revenue surges, leads to largest and most profitable quarter yet", url: "https://www.datacenterdynamics.com/en/news/amds-data-center-revenue-surges-leads-to-largest-and-most-profitable-quarter-yet/" },
        { title: "Benzinga: CoreWeave Debt Fears Hit Grim Record", url: "https://www.benzinga.com/markets/bonds/26/10/62603452/coreweave-cds-record-lehman-default-risk" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX stieg am Donnerstag auf ein neues Rekordhoch von rund 26.600 bis 26.650 Punkten, nachdem er bereits am Mittwoch um 2,22 % gesprungen war; der Euro Stoxx 50 legte um rund 0,64 % auf etwa 6.305 Punkte zu." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die anhaltende Rally nennen Berichte weiterhin den demokratischen Erdrutschsieg bei den US-Zwischenwahlen und die Erwartung einer geteilten Regierung ohne scharfe Politikwenden." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite liegt nach einem deutlichen Rückgang am Mittwoch weiterhin bei rund 4,86 bis 4,90 %, die Rendite zehnjähriger Bundesanleihen bei rund 3,26 %." },
    "yield-stocks": { tag: "einordnung", story: 2, text: "Die US-10-Jahres-Rendite fiel am Mittwoch im Zuge der Zwischenwahlen und des fallenden Ölpreises deutlich, was Aktien aus Sicht vieler Anleger relativ attraktiver macht." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold stieg am Donnerstag um rund 1,8 % auf zwischen 4.128 und 4.135 Dollar je Feinunze." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin legte binnen 24 Stunden um 2,2 bis 5,4 % auf etwa 80.000 bis 80.600 Dollar zu, nachdem laut Berichten Short-Positionen von mehr als 380 Mio. Dollar zwangsweise glattgestellt worden waren." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro gab gegenüber dem Dollar leicht auf rund 1,1220 nach (Tagesspanne 1,1219 bis 1,1267)." },
    "inflation-what": { tag: "fakt", story: 6, text: "Die britische Verbraucherpreisinflation war im September 2026 auf 3,5 % gestiegen, was die Bank of England zu ihrer ersten Zinserhöhung seit August 2023 veranlasste." },
    "oil-inflation": { tag: "einordnung", story: 11, text: "Brent notiert nach dem Einbruch vom Mittwoch bei rund 94 bis 97 Dollar je Barrel; ein fallender Ölpreis wirkt tendenziell dämpfend auf Energie- und Transportkosten in Europa." },
    "central-banks-why": { tag: "position", story: 4, text: "Bundesbank-Präsident Nagel hält eine EZB-Zinserhöhung im Dezember weiterhin für sehr wahrscheinlich notwendig; Marktpreise implizieren inzwischen eine Wahrscheinlichkeit von rund 80 bis 88 % dafür." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die Niederlande nominierten am 4.11. offiziell Klaas Knot für die Lagarde-Nachfolge; die Nominierungsfrist für alle Eurostaaten läuft bis Freitag, 6.11.2026." },
    "fed-hike": { tag: "position", story: 5, text: "Mehrere Fed-Vertreter, darunter Dallas-Fed-Chefin Lorie Logan und St.-Louis-Fed-Chef Alberto Musalem, werben weiterhin öffentlich für weitere Zinserhöhungen." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "rente-basics": { tag: "fakt", story: 7, text: "Der Einstieg in eine kapitalgedeckte Zusatzvorsorge geht 2026 erneut nur als Eckpunkte ins Kabinett; die endgültige parlamentarische Verabschiedung verschiebt sich auf 2027." },
    "debt-brake": { tag: "position", story: 7, text: "DIW-Chef Marcel Fratzscher bezeichnete die erneute Verschiebung der Kapitalrente als Rückschlag für eine generationengerechte Rentenreform." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Die Forsa-Umfrage vom 3.11. sieht die AfD bei 26 %, die Union bei 20 %, die Grünen bei 17 % und die SPD bei 14 %; die INSA-Umfrage sieht die AfD sogar bei 28 %." },
    "why-oil-up-geo": { tag: "position", story: 11, text: "US-Vizepräsident Vance nannte den Krieg mit dem Iran laut Berichten als Grund für die Wahlniederlage der Republikaner, was Spekulationen auf ein baldiges US-Iran-Abkommen befeuerte und den Ölpreis am Mittwoch um rund 9 % einbrechen ließ." },
    "hormuz": { tag: "unbestaetigt", story: 11, text: "Die iranischen Revolutionsgarden meldeten am 5.11. zwei brennende Öltanker und einen brennenden Schlepper an der Straße von Hormus; eine unabhängige Bestätigung lag nicht vor." },
    "gas-ttf": { tag: "fakt", story: 11, text: "Der europäische Gaspreis TTF fiel von 93,67 Euro am 3.11. auf 85,49 Euro je Megawattstunde am 4.11." },
    "energy-germany": { tag: "fakt", story: 11, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur zum 4.11. bei 60,8 % Füllstand – deutlich unter dem Zwischenziel von 80 % zum 1.11. und unter dem Vorjahreswert von 75,24 %." },
    "defence-stocks": { tag: "fakt", story: 12, text: "Rheinmetall brach nach einer erneut gesenkten Jahresprognose zeitweise um bis zu 18 % ein, Hensoldt und RENK gaben trotz besserer Zahlen im Branchensog nach." },
    "defence-order": { tag: "fakt", story: 12, text: "Die milliardenschwere Boxer-Bestellung „Arminius” kommt laut Rheinmetalls eigener Einschätzung wahrscheinlich nicht mehr in diesem Jahr und laut Berichten erst im Februar 2027." },
    "nato-target": { tag: "fakt", story: 12, text: "Auf der Euronaval-Messe in Paris (3. bis 6.11.) unterzeichneten Fincantieri, Navantia und Naval Group eine Konsortialvereinbarung für die European Patrol Corvette; der Bundestags-Haushaltsausschuss billigte zugleich sechs weitere Rüstungsvorhaben von rund 1,5 Mrd. Euro." },
    "ma-steps": { tag: "fakt", story: 13, text: "Evonik meldete ein um 40 % gesteigertes bereinigtes operatives Ergebnis von 629 Mio. Euro und untermauerte damit seine Ablehnung des BASF-Angebots; die vollständigen Qiagen-Q3-Zahlen zum EQT-Deal liegen seit gestern Abend vor." },
    "take-private-why": { tag: "unbestaetigt", story: 13, text: "Die RAG-Stiftung hat ihr Kuratorium über das BASF-Angebot informiert, aber kein neues öffentliches Statement abgegeben; ein höheres BASF-Angebot lag zum Redaktionsschluss nicht vor." },
    "deal-risks": { tag: "unbestaetigt", story: 13, text: "Bei Tesla und SpaceX bleibt eine Fusion unbestätigt; Musk zufolge wäre für Tesla eine Zustimmung von 50 % aller ausstehenden Aktien nötig." },
    "private-credit-what": { tag: "fakt", story: 14, text: "Laut Fitch stieg die Ausfallrate bei Private-Credit-Krediten im dritten Quartal 2026 auf einen Rekordwert von 6,3 % (von 6,0 % im Vorquartal)." },
    "redemption-limits": { tag: "unbestaetigt", story: 14, text: "Der enger gefasste Proskauer-Default-Index liegt mit 2,51 % deutlich niedriger als die Fitch-Zahl – ein Hinweis darauf, wie stark die Einschätzung von der verwendeten Methodik abhängt." },
    "ai-capex": { tag: "fakt", story: 15, text: "AMD meldete ein Rechenzentrumswachstum von 97 % auf 8,5 Mrd. Dollar; die kombinierten Kapitalausgaben von Amazon, Alphabet, Meta und Microsoft erreichten im dritten Quartal einen Rekordwert von rund 201,9 Mrd. Dollar." },
    "circular-financing": { tag: "unbestaetigt", story: 15, text: "Anthropic zahlt laut seinem aktualisierten Börsenprospekt inzwischen rund 1,25 Mrd. Dollar pro Monat an SpaceX für GPU-Rechenkapazität, perspektivisch bis zu 3,1 Mrd. Dollar pro Monat." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "International", type: "Fakt", story: 9,
      q: "Wie ist der Stand im US-Senat nach den Zwischenwahlen vom 3.11.2026 laut bisheriger Auszählung?",
      options: [
        "Die Republikaner verteidigten ihre Mehrheit mit 51 zu 49 Sitzen",
        "Die Demokraten liegen nach bisherigem Stand bei 54 zu 44 Sitzen, zwei Rennen sind noch offen",
        "Der Senat ist mit 50 zu 50 Sitzen exakt geteilt",
        "Die Wahl wurde komplett annulliert und wird wiederholt"
      ],
      answer: 1,
      explain: "Die Demokraten eroberten sieben bislang republikanische Sitze und liegen nach bisherigem Stand bei 54 zu 44 Sitzen; in Mississippi und Alaska war die Auszählung zum Redaktionsschluss noch nicht abgeschlossen."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 6,
      q: "Auf welchen Wert erhöhte die Bank of England ihren Leitzins am 5.11.2026?",
      options: ["3,5 %", "3,75 %", "4,0 %", "4,25 %"],
      answer: 2,
      explain: "Die Bank of England hob ihren Leitzins um 0,25 Prozentpunkte auf 4,0 % an – die erste Erhöhung seit August 2023."
    },
    {
      topic: "Defence", type: "Fakt", story: 12,
      q: "Die heutige Prognosesenkung war laut einem JPMorgan-Analysten die wievielte Gewinn- oder Umsatzwarnung von Rheinmetall binnen rund elf Monaten?",
      options: ["Die erste", "Die dritte", "Die vierte", "Die fünfte"],
      answer: 3,
      explain: "Laut JPMorgan-Analyst David Perry war die heutige Prognosesenkung die fünfte Gewinn- oder Umsatzwarnung von Rheinmetall binnen rund elf Monaten, unter anderem wegen Verzögerungen bei der Boxer-Bestellung „Arminius”."
    },
    {
      topic: "Deutschland", type: "Zusammenhang", story: 7,
      q: "Angenommen, der Einstieg in die kapitalgedeckte Zusatzvorsorge wird wie angekündigt 2026 nur als Eckpunkte vorgelegt. Was bedeutet das unter sonst gleichen Bedingungen am ehesten für das Jahr 2027?",
      options: [
        "Zentrale Details wie Finanzierung und Starttermin der Kapitaldeckung werden erst 2027 gesetzlich entschieden",
        "Die gesetzliche Rente wird 2027 vollständig abgeschafft",
        "Die Kapitaldeckung tritt automatisch schon Anfang 2026 in Kraft",
        "Es ändert sich nichts, da die Eckpunkte bereits rechtlich bindend sind"
      ],
      answer: 0,
      explain: "Wenn 2026 nur Eckpunkte vorgelegt werden, bedeutet das, dass die konkrete gesetzliche Ausgestaltung – etwa zu Finanzierung und Starttermin – erst 2027 parlamentarisch entschieden wird."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 11,
      q: "Angenommen, es kommt tatsächlich zu einem US-Iran-Abkommen mit einer dauerhaften Öffnung der Straße von Hormus. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Nur der Goldpreis, nicht aber der Ölpreis würde beeinflusst",
        "Es gäbe keinen Zusammenhang, da Hormus für den Ölhandel keine Rolle spielt",
        "Der Ölpreis würde automatisch auf null fallen",
        "Der Ölpreis würde tendenziell weiter sinken, weil wieder mehr Angebot über diese wichtige Route verfügbar wäre"
      ],
      answer: 3,
      explain: "Eine dauerhafte Öffnung einer wichtigen Transportroute wie der Straße von Hormus würde mehr Angebot am Markt erwarten lassen, was den Preis tendenziell sinken lässt – ähnlich wie es die Entspannungshoffnungen bereits am Mittwoch taten."
    }
  ]
};
