// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-17",
  dateLabel: "Samstag, 17. Oktober 2026",
  updatedLabel: "Recherchestand 17.10.2026",
  marketNote: "Diese Ausgabe entsteht am Samstagmorgen, 17.10.2026. Die Börsen in Europa und den USA sind am Wochenende geschlossen, deshalb gilt für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq der Schlussstand von Freitag, 16.10. Während DAX (+0,94 %) und Euro Stoxx 50 (+0,58 %) vor allem von Rüstungswerten wie Rheinmetall gestützt wurden, fielen Dow Jones (−0,3 %), S&P 500 (−1,1 %) und besonders der technologienahe Nasdaq Composite (−2,1 %), weil die Sorge um eine mögliche Überbewertung von KI-Investitionen anhielt. Fed-Chef Kevin Warsh vermied bei seiner Rede auf der IWF-Jahrestagung in Bangkok bewusst ein Signal zum Zinspfad; die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung am 27./28.10. sank daraufhin auf rund 13 bis 15 %, während sie für die Dezember-Sitzung auf rund 89 % stieg. Die US-Anleiherendite blieb mit rund 5,06 bis 5,10 % weitgehend unverändert; für die Bund-Rendite ließ sich für Freitag keine verlässliche, mit anderen Quellen übereinstimmende Zahl ermitteln, deshalb wird hier weiterhin der Donnerstagsstand (≈3,38–3,42 %) ausgewiesen. Der Ölpreis zog nach einem weiteren Tankerangriff in der Straße von Hormus am Freitag deutlich an; die Quellenlage zu Brent weicht dabei stärker als sonst voneinander ab (105 bis 110 Dollar je Barrel), deshalb wird die Kennzahl mit Spanne angegeben. Bitcoin handelt auch am Wochenende weiter und lag Samstagmorgen bei rund 81.000 bis 82.700 Dollar.",

  top: [
    { text: "Am Freitag, 16.10., schlossen Dow Jones (−0,3 % auf 52.002,41 Punkte), S&P 500 (−1,1 % auf 7.659,44) und vor allem der Nasdaq Composite (−2,1 % auf 26.140,03, Wochenverlust rund −4,5 %) im Minus, weil die Sorge um eine mögliche Überbewertung von KI-Investitionen anhielt und Chipwerte wie Micron und Intel erneut nachgaben. DAX (+0,94 % auf 25.622,61 Punkte) und Euro Stoxx 50 (+0,58 % auf 6.204,23) legten dagegen zu, gestützt von Rüstungswerten wie Rheinmetall. Asiatische Speicherchip-Werte erholten sich am Freitag teilweise von ihrem Einbruch vom Donnerstag.", ref: "s:1" },
    { text: "Fed-Chef Kevin Warsh vermied bei einem von IWF-Chefin Georgieva moderierten Gespräch auf der IWF-Jahrestagung in Bangkok am 16.10. bewusst eine Festlegung für die Zinsentscheidung am 27./28.10. („It's a new chapter at the Fed [and] we're not in that business anymore”). Er warnte, der Weg der Künstlichen Intelligenz werde „very bumpy”. Die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober sank danach auf rund 13 bis 15 %, für die Dezember-Sitzung wird dagegen eine Erhöhungswahrscheinlichkeit von rund 89 % gehandelt. Die FOMC-Blackout-Periode begann am 17.10.", ref: "s:2" },
    { text: "Der EU-Gipfel in Brüssel endete am 16.10. erneut ohne Entscheidung über die Nutzung von rund 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine-Finanzierung; Belgiens Premierminister De Wever blockiert weiterhin das Modell eines „Reparationsdarlehens”. Präsident Selenskyj bezifferte den Finanzierungsbedarf für 2027 auf 155 Mrd. Euro und bat die EU-Staaten um zusätzliche 70 Mrd. Euro. Bundeskanzler Merz bekräftigte, die eingefrorenen Gelder müssten unter europäischer Kontrolle bleiben.", ref: "s:8" },
    { text: "In der Straße von Hormus wurde am 16.10. ein weiterer Tanker (MT ST 3, 15 indische Besatzungsmitglieder) von einem Geschoss getroffen; die Meerenge gilt laut Berichten inzwischen als faktisch geschlossen für den regulären Handelsverkehr. Houthi-Kräfte griffen am selben Tag erneut den Präsidentenpalast in Aden an (5 Tote, 16 Verletzte). Der Flughafen Riad bleibt mindestens bis zum 17.10. geschlossen, ein Wiedereröffnungstermin ist nicht bestätigt.", ref: "s:9" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.622,61", change: "+0,94 % (+239,99 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag, 15.10., hatte der DAX bei 25.382,62 Punkten geschlossen (+0,33 %); am Freitag legte er weiter zu." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Rüstungswerte wie Rheinmetall stützten den Index deutlich, nach Berichten über mögliche weitere Aufträge aus dem Bundeshaushalt zum Jahresende; mehr dazu in Meldung 10.",
          "Fed-Chef Warshs Auftritt in Bangkok ohne klares Zinssignal wurde von Anlegern eher entspannend aufgenommen."
        ]
      },
      important: [
        { area: "Rüstung", text: "Mehr zu neuen Rüstungsaufträgen und zur Rheinmetall-Aktie in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "onvista/dpa-AFX: Dax schüttelt Zins- und KI-Sorgen ab", url: "https://www.onvista.de/news/2026/10-16-roundup-aktien-frankfurt-schluss-dax-schuettelt-zins-und-ki-sorgen-ab-0-10-26565010" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.204,23", change: "+0,58 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag hatte der Euro Stoxx 50 bei 6.171,15 Punkten geschlossen (−0,3 %); am Freitag legte er zu." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Rheinmetall und weitere Rüstungswerte führten den Index an.",
          "Die teilweise Stabilisierung der Chipwerte in Asien wirkte unterstützend."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Chef Warsh gab bei seiner IWF-Rede keine klare Richtung für die Sitzung am 27./28.10. vor; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 closes 36 points higher as Rheinmetall leads", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-36-points-higher-as-rheinmetall-leads/70342765" }
    },
    "sp500": {
      label: "S&P 500", value: "7.659,44", change: "−1,1 % (−84,62 Pkt., Fr-Schluss); Wochenverlust rund −1,9 %", dir: "down", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 52.002,41 Punkte (−0,3 %, −175,28 Pkt.) – weniger stark im Minus als S&P 500 und Nasdaq Composite." },
        { label: "Nasdaq Composite", text: "Freitagsschluss: 26.140,03 Punkte (−2,1 %, −572,99 Pkt.); der technologielastigere Nasdaq 100 verlor laut einer Quelle rund 2,5 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen belasteten vor allem Technologie- und Chipwerte (Micron −5,6 %, Intel −5,8 %).",
          "Die US-Anleiherendite blieb im Tagesverlauf weitgehend unverändert bei rund 5,06 bis 5,10 %."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum anhaltenden KI-Ausverkauf und zu CoreWeave in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "AP via WTOP: How major US stock indexes fared Friday 10/16/2026", url: "https://wtop.com/national/2026/10/how-major-us-stock-indexes-fared-friday-10-16-2026" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "26.140,03", change: "−2,1 % (−572,99 Pkt., Fr-Schluss); Wochenverlust rund −4,5 %", dir: "down", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie ist nicht identisch mit dem enger gefassten Nasdaq 100.",
      compare: [
        { label: "Nasdaq 100", text: "Der stärker technologielastige Nasdaq 100 verlor laut einer Quelle rund 2,5 % – nicht zu verwechseln mit dem breiteren Nasdaq Composite." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Ausverkauf bei US-Chipwerten wie Micron und Intel setzte sich fort, auch wenn sich asiatische Speicherchip-Werte am selben Tag teilweise erholten (Meldung 14).",
          "Zunehmende Sorgen um die Kreditwürdigkeit von KI-Cloud-Anbietern wie CoreWeave belasteten zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "AP via KENS5: How major US stock indexes fared Friday", url: "https://www.kens5.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-10162026/616-a0bdb55c-653b-410b-bc01-ae1f2a7523c8" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1253 (EZB-Referenzkurs Fr)", change: "+0,40 % ggü. Do (1,1208)", dir: "up", asof: "EZB-Referenzkurs Fr 16.10.26", story: 3,
      means: "1 Euro kostet etwa 1,13 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Woche", text: "Der EZB-Referenzkurs stieg von 1,1181 Dollar am Montag über 1,1195 (Mittwoch) und 1,1208 (Donnerstag) auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die US-Anleiherendite blieb am Freitag weitgehend unverändert, was Dollar-Anlagen nicht zusätzlich stützte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Chef Warsh gab bei seiner IWF-Rede keine klare Richtung vor; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Euro foreign exchange reference rates)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.de.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,06–5,10 %", change: "weitgehend unverändert ggü. Donnerstag", dir: "flat", asof: "Stand Fr 16.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr.",
      compare: [
        { label: "Hintergrund", text: "Das Niveau von rund 5,1 % gilt laut Berichten weiterhin als strukturell erhöht, unter anderem wegen Sorgen um das hohe US-Haushaltsdefizit." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Fed-Chef Warsh gab bei seiner IWF-Rede in Bangkok keine klare Richtung für die Sitzung am 27./28.10. vor.",
          "Die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober sank weiter auf rund 13 bis 15 %, während sie für Dezember auf rund 89 % stieg."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zu Warshs Auftritt und zur Markterwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "CNBC: Fed's Warsh says AI development path will be 'very bumpy'", url: "https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,38–3,42 % (kein verlässlicher Fr-Wert verfügbar)", change: "Donnerstagsstand ggü. Mittwoch (≈3,47–3,50 %) leicht niedriger; für Freitag keine übereinstimmende Quelle gefunden", dir: "flat", asof: "Stand Do 15.10.26 (Fr-Wert unklar)", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,06 bis 5,10 % weiterhin deutlich über der Bund-Rendite von rund 3,38 bis 3,42 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10.",
          "Für Freitag ließ sich in der Recherche kein verlässlicher, mit anderen Quellen übereinstimmender Wert für die Bund-Rendite ermitteln."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Mehr zur EZB-Position von Lagarde und zur Schnabel-Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.179–4.180 $", change: "+0,2 % ggü. Donnerstagabend (≈4.170–4.176 $)", dir: "up", asof: "Stand Fr 16.10.26 vormittags", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.170 bis 4.180 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "Goldreporter.de nennt für Freitagvormittag (ca. 8:30 Uhr) einen Preis von rund 4.179 bis 4.180 Dollar je Feinunze." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die weitgehend unveränderte US-Rendite hielt die Opportunitätskosten des zinslosen Goldes niedrig.",
          "Die Erwartung einer Fed-Zinspause nach Warshs Rede stützte den Goldpreis zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Warshs Rede und zur Markterwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Goldreporter.de: Goldpreis heute, 16.10.2026 – Fed-Zinspause", url: "https://www.goldreporter.de/goldpreis-heute-16-10-2026-fed-zinspause/marktbericht-gold/262425/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 108–110 $ (Quellenlage mit Spanne)", change: "+3 bis +4 % ggü. Donnerstag (≈105,9 $)", dir: "up", asof: "Fr 16.10.26 (uneinheitliche Quellenlage)", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 108 bis 110 Dollar je Fass (159 Liter) sind etwa 68 bis 69 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI bewegte sich am Freitag laut Berichten bei rund 97 bis 101 Dollar je Barrel." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein weiterer Tankerangriff in der Straße von Hormus am 16.10. (Tanker MT ST 3) nährte erneut Sorgen um die Ölversorgung (Meldung 9).",
          "Saudi-Arabiens East-West-Pipeline, die die Meerenge umgeht, läuft laut einer Quelle inzwischen wieder mit rund 5,8 Mio. Barrel pro Tag."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu den Tankerangriffen und zur Lage am Golf in Meldung 9.", ref: "s:9" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "The National: Oil tanker struck in Strait of Hormuz, says Indian ports minister", url: "https://www.thenationalnews.com/news/mena/2026/10/16/india-hormuz-strait-tanker-attack/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.000–82.700 $", change: "+2,1 % (24h) ggü. Freitagabend", dir: "up", asof: "Stand Sa 17.10.26 morgens", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.000 bis 83.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Woche", text: "Bitcoin war am Donnerstag zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar gefallen, bevor es sich bis Samstagmorgen auf rund 81.000 bis 82.700 Dollar erholte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die anhaltenden Sorgen um KI-nahe Werte wie CoreWeave belasteten zwischenzeitlich auch Kryptowährungen (Meldung 14).",
          "Käufer stiegen laut Berichten im Wochenverlauf wieder verstärkt ein."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Bitcoin Price", url: "https://www.coindesk.com/price/bitcoin" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitag-schluss-tech-ausverkauf-chip-erholung-10-17", cats: ["markets", "tech"], when: "Schluss Fr 16.10.2026 (Europa/USA) · Asien-Handel Fr 16.10.2026",
      headline: "Dow, S&P 500 und Nasdaq fallen am Freitag deutlich, DAX und Euro Stoxx 50 legen dank Rüstungswerten zu",
      sec30: "Am Freitag, 16.10., schlossen Dow Jones (−0,3 % auf 52.002,41 Punkte), S&P 500 (−1,1 % auf 7.659,44, Wochenverlust rund −1,9 %) und vor allem der Nasdaq Composite (−2,1 % auf 26.140,03, Wochenverlust rund −4,5 %) im Minus, weil die Sorge um eine mögliche Überbewertung von KI-Investitionen anhielt und US-Chipwerte wie Micron (−5,6 %) und Intel (−5,8 %) erneut nachgaben. DAX (+0,94 % auf 25.622,61 Punkte) und Euro Stoxx 50 (+0,58 % auf 6.204,23) legten dagegen zu, gestützt vor allem von Rüstungswerten wie Rheinmetall. Die am Donnerstag schwer getroffenen asiatischen Speicherchip-Werte erholten sich am Freitag teilweise: Der Kospi legte rund 2 % zu, der Nikkei rund 1,4 %.",
      blocks: [
        { h: "Wie haben sich die US-Indizes am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones fiel um 0,3 % (−175,28 Punkte) auf 52.002,41 Punkte, der S&P 500 um 1,1 % (−84,62 Punkte) auf 7.659,44 Punkte – die schlechteste Woche seit Juni mit rund −1,9 %. Der Nasdaq Composite verlor 2,1 % (−572,99 Punkte) auf 26.140,03 Punkte, die schlechteste Woche seit April 2025 mit rund −4,5 %.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:sp500" }] },
          { tag: "unbestaetigt", text: "Der stärker technologielastige Nasdaq 100 verlor laut einer Quelle rund 2,5 %, eine exakte Punktzahl wird dabei nicht einheitlich genannt; Nasdaq Composite und Nasdaq 100 sollten nicht verwechselt werden." }
        ]},
        { h: "Warum legten DAX und Euro Stoxx 50 dagegen zu?", items: [
          { tag: "fakt", text: "Der DAX stieg um 0,94 % (+239,99 Punkte) auf 25.622,61 Punkte, der Euro Stoxx 50 um 0,58 % auf 6.204,23 Punkte." },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte vor allem Rüstungswerte: Rheinmetall legte zeitweise mehr als 5 % zu, nachdem Analysten weitere Aufträge aus dem Bundeshaushalt zum Jahresende erwarteten; auch Fed-Chef Warshs Auftritt in Bangkok ohne klares Zinssignal wurde von europäischen Anlegern eher entspannend aufgenommen.",
            ask: [{ label: "Mehr zu den neuen Rüstungsaufträgen", ref: "s:10" }, { label: "Mehr zu Warshs Rede", ref: "s:2" }] }
        ]},
        { h: "Wie ist die Lage bei den asiatischen Speicherchip-Werten?", items: [
          { tag: "fakt", text: "Nach dem Einbruch vom Donnerstag (Kospi −7,57 % auf 5.554 Punkte, siebter Verlusttag in Folge) erholte sich der Kospi am Freitag um rund 2,05 bis 2,15 % auf etwa 5.674 Punkte, blieb aber für die Woche rund 14,46 % im Minus. Der Nikkei legte 1,39 % auf 65.324 Punkte zu (Wochenverlust rund 5,37 %); Samsung gewann 2,62 %, SK Hynix 0,79 %.",
            ask: [{ label: "Mehr zum Hintergrund des Chip-Ausverkaufs", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass US-Indizes und europäische Indizes am selben Tag in entgegengesetzte Richtungen liefen, zeigt, wie unterschiedlich Rüstungs- und Technologiewerte derzeit auf die Nachrichtenlage reagieren. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Hintergründe des Chip-Ausverkaufs werden in Meldung 14 vertieft, die Fed-Rede in Meldung 2, die Rüstungsaufträge in Meldung 10.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "AP via WTOP: How major US stock indexes fared Friday 10/16/2026", url: "https://wtop.com/national/2026/10/how-major-us-stock-indexes-fared-friday-10-16-2026" },
        { title: "AP via KENS5: How major US stock indexes fared Friday", url: "https://www.kens5.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-friday-10162026/616-a0bdb55c-653b-410b-bc01-ae1f2a7523c8" },
        { title: "onvista/dpa-AFX: Dax schüttelt Zins- und KI-Sorgen ab", url: "https://www.onvista.de/news/2026/10-16-roundup-aktien-frankfurt-schluss-dax-schuettelt-zins-und-ki-sorgen-ab-0-10-26565010" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 closes 36 points higher as Rheinmetall leads", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-36-points-higher-as-rheinmetall-leads/70342765" },
        { title: "KED Global: Korean stock market report, 16.10.2026", url: "https://www.kedglobal.com/korean-stock-market/newsView/ked202610160001" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED WARSH BANGKOK */
    {
      id: "fed-warsh-bangkok-zinserwartung-blackout-10-17", cats: ["markets", "economy"], when: "Warsh-Fireside-Chat IWF-Bangkok 16.10. · FOMC-Blackout ab 17.10., 00:00 Uhr ET · FOMC-Sitzung 27./28.10.2026",
      headline: "Fed-Chef Warsh gibt bei IWF-Auftritt in Bangkok kein Signal zum Zinspfad, Markterwartung verschiebt sich auf Dezember",
      sec30: "Fed-Chef Kevin Warsh trat am 16.10. bei einem von IWF-Chefin Georgieva moderierten Gespräch auf der IWF-Jahrestagung in Bangkok auf und vermied bewusst eine Festlegung für die Sitzung am 27./28.10.: „It's a new chapter at the Fed [and] we're not in that business anymore” – eine Abkehr von fester Forward Guidance. Er sprach von einer weltweit „synchronen” geldpolitischen Straffung ohne „Mitfahrer” und warnte, der Weg der Künstlichen Intelligenz werde „very bumpy”, auch wenn sie langfristig Produktivität und Wohlstand steigere. Fed-Vizechefin Bowman bekräftigte am selben Tag, es gebe „keine Dringlichkeit” für weitere Zinsschritte. Nach Warshs Auftritt sank die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung am 27./28.10. auf rund 13 bis 15 %, während für die Dezember-Sitzung eine Erhöhungswahrscheinlichkeit von rund 89 % gehandelt wird. Die US-Anleiherendite blieb mit rund 5,06 bis 5,10 % weitgehend unverändert. Die Blackout-Periode vor der Sitzung begann am 17.10.",
      blocks: [
        { h: "Was sagte Fed-Chef Warsh in Bangkok?", items: [
          { tag: "position", text: "Kevin Warsh sagte am 16.10. in Bangkok, die Fed lege sich nicht mehr im Voraus auf Entscheidungen fest: „It's a new chapter at the Fed [and] we're not in that business anymore.” Zur Weltwirtschaft sprach er von einer Widerstandsfähigkeit, die er „vor fünf oder sechs Monaten nicht vorhergesagt hätte”, und von einer weltweit „synchronen” geldpolitischen Straffung ohne „Mitfahrer”.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] },
          { tag: "position", text: "Zur Künstlichen Intelligenz sagte Warsh, sie werde mittelfristig Produktivität und Wohlstand steigern, der Weg dorthin werde aber „very bumpy” (sehr holprig).",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Was sagten andere Fed-Mitglieder?", items: [
          { tag: "position", text: "Fed-Vizechefin Michelle Bowman bekräftigte am 16.10. ihre zurückhaltende Linie: „I don't feel any urgency for taking further action at this point.”" },
          { tag: "position", text: "NY-Fed-Präsident John Williams sagte bereits am 13.10., er halte weiterhin einen weiteren Zinsschritt im Jahr 2026 für möglich, sehe für 2027 aber aktuell keinen Bedarf für weitere Erhöhungen." },
          { tag: "position", text: "Chicago-Fed-Präsident Austan Goolsbee bezeichnete die jüngsten Preisdaten am 14.10. als „discouraging” und warnte, eine Kerninflation von rund 4 % auf Jahresbasis sei „not acceptable”; er wolle aber erst weitere Daten abwarten, bevor er eine Zinserhöhung befürwortet." }
        ]},
        { h: "Wie hat sich die Markterwartung für die Sitzung am 27./28.10. verändert?", items: [
          { tag: "unbestaetigt", text: "Nach Warshs Auftritt sank die an CME FedWatch eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober auf rund 13 bis 15 % (Hold rund 85 bis 87 %); Kalshi nennt für den 16.10. eine Hold-Wahrscheinlichkeit von rund 66 % und eine Erhöhungswahrscheinlichkeit von rund 33 %, Polymarket einen Allzeithochwert von rund 87 % für Hold. Für die Dezember-Sitzung wird dagegen weiterhin eine deutlich höhere Erhöhungswahrscheinlichkeit von rund 89 % gehandelt – die Markterwartung hat sich damit von Oktober auf Dezember verschoben, nicht aufgelöst.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "fakt", text: "Die FOMC-Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, begann am 17.10., 00:00 Uhr Eastern Time, und dauert bis zur Sitzung am 27./28.10.; Warshs Rede am 16.10. gehörte damit zu den letzten öffentlichen Stellungnahmen davor." }
        ]},
        { h: "Wie reagierte die US-Anleiherendite?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen blieb am Freitag weitgehend unverändert bei rund 5,06 bis 5,10 % – ein Niveau, das laut Berichten weiterhin als strukturell erhöht gilt, unter anderem wegen Sorgen um das hohe US-Haushaltsdefizit.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Für die Bund-Rendite ließ sich für Freitag kein mit anderen Quellen übereinstimmender Wert ermitteln; der Donnerstagsstand lag bei rund 3,38 bis 3,42 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich Fed-Mitglieder weiterhin uneinheitlich äußern, während sich die Markterwartung nach Warshs bewusst unverbindlichem Auftritt deutlich von Oktober auf Dezember verschoben hat, zeigt eine ungewöhnlich hohe Unsicherheit kurz vor der Sitzung am 27./28.10." }
        ]}
      ],
      reaction: "Die Marktreaktion wird in Meldung 1 behandelt, die EZB-Seite in Meldung 5, die US-Konjunkturdaten in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "CNBC: Fed's Warsh says AI development path will be 'very bumpy'", url: "https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html" },
        { title: "Euronews: Fed's Warsh sees AI boosting productivity but gives no signal on next rate hike", url: "https://www.euronews.com/2026/10/16/feds-warsh-sees-ai-boosting-productivity-but-gives-no-signal-on-next-rate-hike" },
        { title: "NBC News: Will the Fed raise interest rates? Kevin Warsh offers few clues", url: "https://www.nbcnews.com/business/economy/will-fed-raise-interest-rates-kevin-warsh-offer-clues-rcna603661" },
        { title: "Bloomberg: Fed's Williams currently sees no need for rate hike in 2027", url: "https://www.bloomberg.com/news/articles/2026-10-13/fed-s-williams-currently-sees-no-need-for-rate-hike-in-2027" },
        { title: "Capitaxer: Fed rate hold odds jump to 85% even as Warsh offers no clues on policy path", url: "https://www.capitaxer.com/fed-rate-hold-odds-jump-to-85-even-as-warsh-offers-no-clues-on-policy-path/" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-17", cats: ["markets"], when: "Stand Fr 16.10./Sa-Morgen 17.10.2026",
      headline: "Euro legt auf EZB-Referenzkurs weiter zu, Gold bleibt nahe Mehrjahreshoch, Bitcoin pendelt um 82.000 Dollar",
      sec30: "Der EZB-Referenzkurs stieg von 1,1208 Dollar am Donnerstag auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge. Gold legte am Freitagvormittag weiter leicht zu auf rund 4.179 bis 4.180 Dollar je Feinunze (+0,2 % ggü. Donnerstagabend), gestützt von der weitgehend unveränderten US-Rendite und der Erwartung einer Fed-Zinspause. Bitcoin, das auch am Wochenende weiterhandelt, lag am Samstagmorgen bei rund 81.000 bis 82.700 Dollar (+2,1 % binnen 24 Stunden), nachdem es am Donnerstag zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar gefallen war.",
      blocks: [
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs stieg von 1,1208 Dollar am Donnerstag auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge seit Montag (1,1181 Dollar).",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,13?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Freitagvormittag (ca. 8:30 Uhr) weiter leicht auf rund 4.179 bis 4.180 Dollar je Feinunze (+0,2 % ggü. Donnerstagabend).",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die weitgehend unveränderte US-Rendite, die die Opportunitätskosten des zinslosen Goldes niedrig hielt, sowie die Erwartung einer Fed-Zinspause nach Warshs Rede in Bangkok." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin lag am Samstagmorgen bei rund 81.000 bis 82.700 Dollar (+2,1 % binnen 24 Stunden), nachdem es am Donnerstag zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar gefallen war.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Euro und Gold weiter zulegten, während Bitcoin nach dem kurzen Einbruch unter 80.000 Dollar erneut schwankte, passt zu einer Phase, in der die Markterwartung für die Fed-Politik mehrfach wechselte. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Zinsentwicklung wird in Meldung 2 behandelt, die Sorgen um KI-nahe Werte in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "ariva.de: Devisen – Eurokurs legt weiter zu", url: "https://www.ariva.de/news/devisen-eurokurs-legt-weiter-zu-12171820" },
        { title: "it-boltwise.de: Euro steigt nach EZB-Referenzkurs – Gegenbewegung zum US-Zinsnarrativ", url: "https://www.it-boltwise.de/euro-steigt-nach-ezb-referenzkurs-gegenbewegung-zum-us-zinsnarrativ.html" },
        { title: "Goldreporter.de: Goldpreis heute, 16.10.2026 – Fed-Zinspause", url: "https://www.goldreporter.de/goldpreis-heute-16-10-2026-fed-zinspause/marktbericht-gold/262425/" },
        { title: "CoinDesk: Bitcoin Price", url: "https://www.coindesk.com/price/bitcoin" }
      ]
    },

    /* 4 WIRTSCHAFT: US-KONJUNKTURDATEN/IWF */
    {
      id: "us-industrieproduktion-iwf-bangkok-shutdown-10-17", cats: ["economy"], when: "Industrieproduktion veröffentlicht Fr 16.10. · Michigan-Verbraucherstimmung vorläufig 09.10. · IWF-Jahrestagung Bangkok 12.–18.10. · Übergangsfinanzierung bis 11.12.2026",
      headline: "US-Industrieproduktion steigt stärker als erwartet, IWF-Jahrestagung in Bangkok mit Fokus auf Künstliche Intelligenz",
      sec30: "Die US-Notenbank veröffentlichte am 16.10. die Industrieproduktion für September: +0,7 % im Monatsvergleich, deutlich über der Erwartung von +0,4 %, getragen vor allem von Halbleitern (+2,1 % m/m, +19,9 % im Jahresvergleich); die Kfz-Produktion fiel dagegen um 3,0 %. Die Kapazitätsauslastung stieg auf 76,9 %. Die bereits am 9.10. veröffentlichte vorläufige Verbraucherstimmung der University of Michigan war für Oktober auf 46,3 Punkte gefallen (−3,7 % ggü. September, 5-Monats-Tief); eine neue Zahl gab es bis zum Wochenende nicht. Ein Regierungsshutdown findet weiterhin nicht statt, die Übergangsfinanzierung läuft bis zum 11.12.2026. Auf der IWF-Jahrestagung in Bangkok (12.–18.10., über 15.000 Teilnehmer aus 191 Ländern) stand am ersten Tag Künstliche Intelligenz im Fokus; der IWF veröffentlichte den Global Financial Stability Report und den „Bangkok Blueprint” gegen digitalen Finanzbetrug, das IMFC-Plenum tagte am 17.10.",
      blocks: [
        { h: "Was zeigt die US-Industrieproduktion für September?", items: [
          { tag: "fakt", text: "Die Industrieproduktion stieg im Monatsvergleich um 0,7 % – deutlich über der Erwartung von 0,4 %. Die Halbleiterproduktion legte um 2,1 % (m/m) bzw. 19,9 % (Jahresvergleich) zu, die Kfz-Produktion fiel dagegen um 3,0 %. Die Kapazitätsauslastung stieg von 76,4 auf 76,9 %." }
        ]},
        { h: "Wie ist die Stimmung der US-Verbraucher?", items: [
          { tag: "fakt", text: "Die vorläufige Verbraucherstimmung der University of Michigan für Oktober, veröffentlicht am 9.10., war auf 46,3 Punkte gefallen (−3,7 % ggü. September, ein 5-Monats-Tief); bis zum Wochenende gab es keine aktualisierte oder finale Zahl." }
        ]},
        { h: "Gibt es einen Regierungsshutdown?", items: [
          { tag: "fakt", text: "Ein Regierungsshutdown findet nicht statt: Eine im September vom Kongress verabschiedete Übergangsfinanzierung sichert den Bundeshaushalt bis zum 11.12.2026." }
        ]},
        { h: "Was steht bei der IWF-Jahrestagung in Bangkok im Fokus?", items: [
          { tag: "fakt", text: "Die Jahrestagung (12.–18.10.) brachte über 15.000 Teilnehmer aus 191 Ländern zusammen; am ersten Tag stand Künstliche Intelligenz und die Zukunft der Arbeit im Fokus. Der IWF veröffentlichte den Global Financial Stability Report und lancierte den „Bangkok Blueprint” gegen digitalen Finanzbetrug; das IMFC-Plenum tagte am 17.10.",
            ask: [{ label: "Mehr zur IWF-Position zur EZB", ref: "s:5" }] },
          { tag: "unbestaetigt", text: "Der IWF erwartet laut einem Bericht mindestens eine weitere EZB-Zinserhöhung um 25 Basispunkte in diesem Jahr, um die Kerninflation im Euroraum einzudämmen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Industrieproduktion deutlich stärker ausfiel als erwartet, während die Verbraucherstimmung zugleich auf einem Mehrmonatstief verharrt, liefert gemischte Signale für die Einschätzung der US-Konjunktur kurz vor der Fed-Entscheidung am 27./28.10." }
        ]}
      ],
      reaction: "Die Fed-Reaktion wird in Meldung 2 behandelt, die EZB-Seite in Meldung 5.",
      terms: ["leitzins"],
      followups: ["e:ppi-what", "e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "CNBC: September industrial production comes in stronger than expected", url: "https://www.cnbc.com/video/2026/10/16/september-industrial-production-comes-in-stronger-than-expected.html" },
        { title: "The Spokesman-Review: US factory production rebounds on semiconductors", url: "https://www.spokesman.com/stories/2026/oct/16/us-factory-production-rebounds-on-semiconductors-s/" },
        { title: "Bloomberg: US consumer sentiment falls to five-month low in October", url: "https://www.bloomberg.com/news/articles/2026-10-09/us-consumer-sentiment-falls-to-five-month-low-in-october" },
        { title: "Breaking Defense: House passes funding stopgap, averting government shutdown in October", url: "https://breakingdefense.com/2026/09/house-passes-funding-stopgap-averting-government-shutdown-in-october/" },
        { title: "Atlantic Council: Live updates from the IMF/World Bank Annual Meetings in Thailand", url: "https://www.atlanticcouncil.org/blogs/econographics/live-updates-from-the-imf-world-bank-annual-meetings-in-thailand-as-financial-leaders-take-on-ai-debt-and-geopolitical-upheaval/" }
      ]
    },

    /* 5 WIRTSCHAFT: EZB */
    {
      id: "ezb-lagarde-frankreich-schnabel-nachfolge-10-17", cats: ["economy"], when: "Lagarde-Äußerungen IWF-Bangkok Mi 14.10. · Bewerbungsfrist Schnabel-Nachfolge 28.10. · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "EZB-Präsidentin Lagarde verweist Frankreichs Fiskalkrise an die Politik, Klingbeil will deutschen Kandidaten für Schnabel-Nachfolge benennen",
      sec30: "EZB-Präsidentin Christine Lagarde sagte am Rande der IWF-Jahrestagung in Bangkok, man sehe bislang keine Zweitrundeneffekte bei der Inflation, die vor allem, aber nicht ausschließlich energiepreisgetrieben sei. Zur französischen Fiskalkrise sagte sie, die Lösung liege „zuerst in Frankreich selbst” und bei der Fiskalpolitik; das Wachstum von 1,1 % für 2026 bezeichnete sie als „nicht brillant, aber nicht schlecht”. Laut einem Bloomberg-Bericht werden EZB-Vertreter zunehmend ungeduldig, weil Lagarde ihren künftigen geldpolitischen Kurs nicht klarer kommuniziert. Isabel Schnabel wechselt am 4.1.2027 zum IWF; die Bewerbungsfrist für ihre Nachfolge im EZB-Direktorium läuft bis zum 28.10. Bundesfinanzminister Klingbeil will bis dahin einen deutschen Kandidaten benennen.",
      blocks: [
        { h: "Was sagte Lagarde zur Inflation und zu Frankreich?", items: [
          { tag: "position", text: "Lagarde sagte: „We're not seeing any second round effects yet” bei der Inflation, die vor allem, aber nicht ausschließlich durch Energiepreise getrieben sei.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] },
          { tag: "position", text: "Zur Fiskalkrise in Frankreich, der sie keine EZB-Intervention zusicherte, sagte Lagarde: „The primary and first solution lies at home in France [...] and it has to do with fiscal policies.” Das Wachstum von 1,1 % für 2026 bezeichnete sie als „nicht brillant, aber nicht schlecht”." }
        ]},
        { h: "Wie ungeduldig sind andere EZB-Vertreter?", items: [
          { tag: "unbestaetigt", text: "Laut einem Bloomberg-Bericht vom 15.10. werden EZB-Vertreter zunehmend ungeduldig, weil Lagarde ihren künftigen geldpolitischen Kurs nicht klarer kommuniziert." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Isabel Schnabel wechselt am 4.1.2027 als Finanzberaterin zum IWF; die Bewerbungsfrist für Kandidaten der Eurozonen-Staaten auf ihre Nachfolge im EZB-Direktorium läuft bis zum 28.10.2026." },
          { tag: "unbestaetigt", text: "Bundesfinanzminister Lars Klingbeil will laut Berichten bis zum 28.10. einen deutschen Personalvorschlag klären, offen bleibt, mit welchem Namen für welche Position. Bundesbank-Chef Joachim Nagel soll laut Berichten zudem Ambitionen auf die EZB-Präsidentschaft selbst haben; für mehrere EZB-Spitzenposten 2027 (Präsidentschaft, Chefökonom-Nachfolge) wird ein „Paketdeal” als wahrscheinlich eingeschätzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Lagarde einen abwägenden Kurs ohne klare Kommunikation signalisiert, während zugleich eine umfassende Personalnachfolge im EZB-Direktorium ansteht, zeigt, dass sich geldpolitische und personelle Weichenstellungen in Europa weiterhin überlagern." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, die US-Konjunkturdaten in Meldung 4.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "FXStreet: Lagarde speech – 'We're not seeing any second round effects yet'", url: "https://www.fxstreet.com/news/lagarde-speech-were-not-seeing-any-second-round-effects-yet-202610140236" },
        { title: "CNN: ECB's Christine Lagarde on France's fiscal crisis", url: "https://www.cnn.com/2026/10/14/markets/ecb-christine-lagarde-france-intl-hnk" },
        { title: "Bloomberg: ECB officials get impatient for Lagarde to clear up future plans", url: "https://www.bloomberg.com/news/articles/2026-10-15/ecb-officials-get-impatient-for-lagarde-to-clear-up-future-plans" },
        { title: "Bloomberg: Schnabel will leave ECB board early for senior role at IMF", url: "https://www.bloomberg.com/news/articles/2026-09-24/schnabel-will-leave-ecb-board-early-for-senior-role-at-imf" },
        { title: "t-online: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.t-online.de/finanzen/aktuelles/id_101484538/rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag.html" }
      ]
    },

    /* 6 DEUTSCHLAND: BERLIN-KOALITION */
    {
      id: "berlin-sondierung-zielgerade-wochenende-10-17", cats: ["germany"], when: "Fortsetzung Fr 16.10. abends ohne Ergebnis · weiteres Treffen Sa 17.10. geplant · Ergebnis bis So 18.10. erwartet · Grünen-Landesausschuss Mo 19.10.2026",
      headline: "Berliner Koalitionssondierungen von SPD, Grünen und Linke ziehen sich bis ins Wochenende, Ergebnis weiterhin für Sonntag erwartet",
      sec30: "Die Sondierungsgespräche zwischen SPD, Grünen und Linke in Berlin wurden am Freitagabend, 16.10., fortgesetzt, endeten aber erneut ohne Einigung. Die Positionen von SPD und Linke klaffen laut Berichten besonders bei der Frage des künftigen Landeshaushalts auseinander, in dem Beteiligte mit Milliardenlücken rechnen. Für Samstagvormittag war ein weiteres Treffen vorgesehen, Sonntag gilt als möglicher zusätzlicher Verhandlungstag. Ein Ergebnis soll weiterhin bis Sonntag, 18.10., vorliegen, damit am Montag, 19.10., ein Landesausschuss der Grünen über die Aufnahme formaler Koalitionsverhandlungen entscheiden kann. Ein gemeinsames Antisemitismus-Papier vom 8.10. soll Teil eines möglichen Koalitionsvertrags werden.",
      blocks: [
        { h: "Wie ist der Stand nach dem Treffen am Freitag?", items: [
          { tag: "fakt", text: "Die Sondierungsgespräche wurden am Freitagabend, 16.10., fortgesetzt, zogen sich aber bis in den Abend und endeten ohne Einigung. Die Positionen von SPD und Linke klaffen laut Berichten besonders deutlich auseinander, zudem beanspruchte die Diskussion über den künftigen Landeshaushalt angesichts erwarteter Milliardenlücken viel Zeit.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] }
        ]},
        { h: "Was ist der weitere Zeitplan?", items: [
          { tag: "fakt", text: "Für Samstagvormittag, 17.10., war ein weiteres Treffen vorgesehen, Sonntag gilt als möglicher zusätzlicher Verhandlungstag. Ein Ergebnis soll weiterhin bis Sonntag, 18.10., vorliegen, damit am Montag, 19.10., ein Landesausschuss der Grünen über die Aufnahme formaler Koalitionsverhandlungen entscheidet." }
        ]},
        { h: "Welche Rolle spielt das Antisemitismus-Papier?", items: [
          { tag: "fakt", text: "Ein gemeinsames Papier der drei Parteien vom 8.10. zum Umgang mit Antisemitismus soll Teil eines möglichen Koalitionsvertrags werden; es enthält die Formulierung, das Existenzrecht Israels sei für die Parteien „unverhandelbar”.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Gespräche auch am Freitag ohne Ergebnis blieben und sich bis ins Wochenende ziehen, zeigt, wie eng der Zeitplan bis Sonntag angesichts der verbleibenden inhaltlichen Differenzen, vor allem beim Landeshaushalt, geworden ist." }
        ]}
      ],
      reaction: "Die bundespolitische Lage wird in Meldung 7 vertieft.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel Liveblog: Berliner Sondierungen", url: "https://www.tagesspiegel.de/berlin/liveblog/sonderparteitag-der-berliner-linke-grosse-mehrheit-stimmt-fur-sondierungen-mit-grunen-und-spd-16053722.html" },
        { title: "finanzen.at/dpa: Auf der Zielgeraden – Sondierungen in Berlin gehen weiter", url: "https://www.finanzen.at/nachrichten/aktien/auf-der-zielgeraden-sondierungen-in-berlin-gehen-weiter-1036635764" },
        { title: "ZDFheute: Berlin – Sondierungen Linke, SPD, Grüne", url: "https://www.zdfheute.de/politik/deutschland/berlin-sondierungen-linke-spd-gruene-krise-100.html" }
      ]
    },

    /* 7 DEUTSCHLAND: BAS-RÜCKTRITT/HAUSHALT/RENTE/BÜRGERGELD/WEHRDIENST/UMFRAGEN */
    {
      id: "bas-ruecktritt-schweitzer-haushalt-rente-umfragen-10-17", cats: ["germany"], when: "Bas-Rücktritt 12.10. · Schweitzer-Vereidigung Mitte Okt. · Bundestags-Sitzungswoche bis 16.10. · Umfragen INSA/Forsa 13.10., Infratest dimap 01.10.2026",
      headline: "Rücktritt von Arbeitsministerin Bas löst Koalitionsdebatte aus, neuer Minister Schweitzer im Amt, Umfragen zeigen weiterhin große AfD-Vorsprünge",
      sec30: "Bärbel Bas trat am 12.10. als Bundesarbeitsministerin und SPD-Vorsitzende zurück und nannte den Tod ihrer Stieftochter sowie öffentliche Angriffe während ihrer Trauerzeit als Gründe, unter anderem von der Union. SPD-Politiker reagierten scharf, die Union wies die Vorwürfe zurück. Alexander Schweitzer wurde bereits als neuer Arbeitsminister vereidigt und positionierte sich gegen Bürgergeld-Totalsanktionen. Beim Haushalt 2027 soll der Bundeszuschuss zur Rentenversicherung auf 132,04 Mrd. Euro steigen, soll aber um 1 Mrd. Euro gekürzt werden; ab 2027 soll sich die Berechnungsformel für Regelsätze der Grundsicherung ändern. Der Bundestag debattierte am 15.10. erstmals über ein Reservestärkungsgesetz. INSA (13.10.) sieht die AfD bei 30 %, Forsa (13.10.) bei 26 %, Infratest dimap (1.10.) bei 27 % – die Institute weichen weiterhin deutlich voneinander ab.",
      blocks: [
        { h: "Warum ist Bärbel Bas zurückgetreten, und wie reagierten die Koalitionspartner?", items: [
          { tag: "fakt", text: "Bärbel Bas trat am 12.10. als Bundesarbeitsministerin und SPD-Vorsitzende zurück. Als Gründe nannte sie den Tod ihrer Stieftochter sowie öffentliche Angriffe während ihrer Trauerzeit, unter anderem aus der Union.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] },
          { tag: "position", text: "SPD-Politikerin Manuela Schwesig bezeichnete das Verhalten der Union als „unmenschlich und rücksichtslos”, Parteichef Lars Klingbeil nannte es „unanständig”." },
          { tag: "position", text: "Bundeskanzler Friedrich Merz äußerte Respekt vor der Entscheidung und betonte die vertrauensvolle Zusammenarbeit; der CDU-Politiker Gordon Schnieder wies Bas' Vorwürfe zurück." },
          { tag: "unbestaetigt", text: "Berichten zufolge reagierte das Kanzleramt am 16.10. erneut auf Medienberichte über Kritik von Merz an Bas während ihrer Trauerzeit." }
        ]},
        { h: "Wie ist der Stand bei Rente und Grundsicherung/Bürgergeld?", items: [
          { tag: "fakt", text: "Der Bundeszuschuss zur gesetzlichen Rentenversicherung soll 2027 auf 132,04 Mrd. Euro steigen (2026: 127,42 Mrd. Euro); die Bundesregierung will den Zuschuss zugleich um 1 Mrd. Euro kürzen.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Ab 2027 soll die Berechnungsformel für Regelsätze der Grundsicherung von einem zweistufigen auf ein einstufiges Anpassungsverfahren umgestellt werden; der Bund erwartet dadurch jährliche Einsparungen von über 100 Mio. Euro. Die konkrete Höhe der Regelsätze für 2027 war zuletzt noch nicht final entschieden." },
          { tag: "position", text: "Der neue Arbeitsminister Alexander Schweitzer lehnte vollständige Leistungssanktionen bei der Grundsicherung ab." }
        ]},
        { h: "Was wurde zum Reservestärkungsgesetz debattiert?", items: [
          { tag: "fakt", text: "Der Bundestag debattierte am 15.10. in erster Lesung über das Reservestärkungsgesetz, das eine verpflichtende Heranziehung von Reservisten auch außerhalb von Spannungs- oder Verteidigungsfall ermöglichen soll. Nach der Debatte wurde der Entwurf zur weiteren Beratung in die Ausschüsse überwiesen, federführend der Verteidigungsausschuss." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "Die INSA-Umfrage vom 13.10. sieht die AfD bei 30 %, Union bei 18,5 %, Grüne bei 14 %, SPD bei 13,5 %, Linke bei 10 %, FDP bei 4,5 %. Die Forsa-Umfrage vom selben Tag sieht die AfD dagegen bei 26 %, Union bei 19 %, Grüne bei 17 %, SPD bei 14 %, Linke bei 12 %, FDP bei 4 %. Die Infratest-dimap-Umfrage vom 1.10. sieht die AfD bei 27 %, Union bei 20 %, Grüne bei 16 %, SPD bei 13 %, Linke bei 11 %, FDP bei 4 % – die Institute weichen vor allem bei AfD und Grünen deutlich voneinander ab.",
            ask: [{ label: "Wie entscheidet eine solche Mehrheitsfrage über eine Koalition?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Rücktritt von Bas weiterhin koalitionsinterne Spannungen erkennen lässt, während Haushalt, Rente, Grundsicherung und ein neues Wehrdienst-Vorhaben parallel durch den Bundestag laufen, zeigt, wie viele innenpolitische Baustellen derzeit gleichzeitig bearbeitet werden." }
        ]}
      ],
      reaction: "Die Berliner Koalitionsfrage wird in Meldung 6 behandelt, die Verteidigungsausgaben in Meldung 10 und 11.",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "ZDFheute: Reaktionen auf Bas-Rücktritt", url: "https://www.zdfheute.de/politik/baerbel-bas-ruecktritt-reaktionen-100.html" },
        { title: "Wetterauer Zeitung/dpa: Kanzler-Kritik an Bärbel Bas – Kanzleramt reagiert auf Berichte", url: "https://www.wetterauer-zeitung.de/politik/kanzler-kritik-an-baerbel-bas-kanzleramt-reagiert-auf-berichte-zr-94544710.html" },
        { title: "beck-aktuell: Neuer Arbeitsminister Alexander Schweitzer – Bas-Nachfolger vereidigt", url: "https://www.beck-aktuell.de/heute-im-recht/rechtspolitik-gesetzgebung/neuer-arbeitsminister-alexander-schweitzer-bas-nachfolger-bundestag-2026-10-14" },
        { title: "buerger-geld.org: Haushaltsentwurf 2027 – was für Rente, Grundsicherung und Pflege vorgesehen ist", url: "https://www.buerger-geld.org/news/finanzen/haushaltsentwurf-2027-was-fuer-rente-grundsicherung-und-pflege-vorgesehen-ist" },
        { title: "Handelsblatt: INSA-Umfrage – AfD bei 30 Prozent, Union fällt auf 18,5", url: "https://www.handelsblatt.com/politik/deutschland/umfragewerte-der-parteien-insa-umfrage-afd-bei-30-prozent-union-faellt-auf-18/100259491.html" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE/EU-GIPFEL */
    {
      id: "ukraine-eu-gipfel-vermoegen-finanzierungsluecke-10-17", cats: ["world", "geo"], when: "EU-Gipfel Brüssel 15./16.10. ohne Entscheidung · neue Großangriffe Nacht 15./16.10. · Lawrow-Pressekonferenz Baku 15./16.10.2026",
      headline: "EU-Gipfel endet ohne Entscheidung über russische Vermögenswerte, Selenskyj nennt zusätzliche Finanzierungslücke von 70 Milliarden Euro",
      sec30: "Der EU-Gipfel in Brüssel endete am 16.10. erneut ohne Entscheidung über die Nutzung von rund 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine-Finanzierung; Belgiens Premierminister De Wever blockiert weiterhin das Modell eines „Reparationsdarlehens”. Präsident Selenskyj sagte in Brüssel, der Krieg werde im kommenden Jahr 155 Mrd. Euro kosten, und bat die EU-Staaten um zusätzliche 70 Mrd. Euro. Bundeskanzler Merz bekräftigte, die eingefrorenen Gelder müssten unter europäischer Kontrolle bleiben. US-Präsident Trump bezeichnete Selenskyj als schwieriger im Umgang als Präsident Putin, Außenminister Lawrow schloss in Baku erneut eine Waffenruhe aus. In der Nacht zum 16.10. griff Russland die Ukraine mit 149 Shahed-Drohnen an, während ukrainische Drohnen alle vier Moskauer Flughäfen zeitweise zur Einstellung des Betriebs zwangen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der EU-Gipfel in Brüssel endete am 16.10. ohne Einigung über die Nutzung von rund 210 Mrd. Euro eingefrorener russischer Vermögenswerte; die EU-Kommission soll „so bald wie möglich” einen Vorschlag vorlegen, eine Entscheidung wurde erneut vertagt.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:9" }] }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "Präsident Selenskyj sagte in Brüssel: „The war will cost 155 billion euros next year. And we need at least 70 billion euros more from you – for defence, for weapons and for our resilience.”" },
          { tag: "position", text: "Lettlands Premierminister Andris Kulbergs forderte erneut die Nutzung der Gelder: „The frozen assets are there: they should be used to support Ukraine. It's that simple.” Belgiens Premierminister De Wever widersprach mit Verweis auf historische Präzedenzfälle: „In every war, even in World War II, they [immobilised assets] were never touched. But at the end of a conflict, there is always a peace deal.”" },
          { tag: "position", text: "EU-Kommissionspräsidentin von der Leyen sagte: „We will not lift any sanctions unless Russia stops the war” und „we stand by your side.” Bundeskanzler Merz bekräftigte, die eingefrorenen Gelder müssten unter europäischer Kontrolle bleiben." },
          { tag: "position", text: "US-Präsident Trump sagte, er finde Selenskyj „more difficult to deal with than Putin” und bezeichnete die wiederaufgenommenen ukrainischen Raffinerie-Angriffe weiterhin als „disgrace”. Außenminister Lawrow schloss bei einer Pressekonferenz in Baku erneut eine Waffenruhe aus und warf Selenskyj vor, sich mit der Ablehnung eines Diesel-Abkommens gegen Trump zu stellen." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Die Ukraine hatte am 15.10. die russische Raffinerie Rjasan angegriffen, nachdem sie eine von Trump am 11.10. behauptete „Energie-Waffenruhe” nach eigenen Angaben beendet hatte. In der Nacht zum 14.10. hatte Russland mit 39 ballistischen Raketen und über 120 Drohnen ukrainische Energieanlagen angegriffen." }
        ]},
        { h: "Welche militärischen und wirtschaftlichen Entwicklungen gab es zuletzt?", items: [
          { tag: "fakt", text: "In der Nacht zum 16.10. griff Russland die Ukraine mit 149 Shahed-Drohnen an (mindestens 3 Tote, 53 Verletzte). Ukrainische Drohnen griffen im Gegenzug die Region Moskau an; alle vier Moskauer Flughäfen mussten den Betrieb zeitweise einstellen, Moskaus Bürgermeister Sobjanin meldete 94 abgeschossene Drohnen. Zudem brannte es nach einem Drohnenangriff an einer Industrieanlage in der Region Surgut." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EU die Entscheidung über die russischen Gelder erneut vertagte, während Selenskyj eine zusätzliche Finanzierungslücke von 70 Mrd. Euro nennt und sich die gegenseitigen Angriffe fortsetzen, zeigt, wie weit die beteiligten Seiten in zentralen Finanzierungs- und Sicherheitsfragen weiterhin voneinander entfernt sind." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft, die deutsche Verteidigungspolitik in Meldung 10 und 11.",
      terms: [],
      followups: ["e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: EU rallies in support of Ukraine amid Trump standoff", url: "https://www.aljazeera.com/news/2026/10/16/eu-rallies-in-support-of-ukraine-amid-trump-standoff" },
        { title: "Euronews: EU summit leaders to rally behind Zelenskyy amid bitter row with Trump", url: "https://www.euronews.com/2026/10/16/eu-summit-leaders-to-rally-behind-zelenskyy-amid-bitter-row-with-trump" },
        { title: "CNN: Zelensky praises 'real leaders' in Europe as his relationship with Trump deteriorates", url: "https://www.cnn.com/2026/10/16/europe/zelensky-brussels-trump-relationship-intl" },
        { title: "NBC News: Trump says Ukraine resuming strikes on Russian oil sites is a 'disgrace'", url: "https://www.nbcnews.com/world/ukraine/trump-ukraine-strikes-russian-oil-disgrace-zelenskyy-starlink-rcna603848" },
        { title: "Kyiv Independent: Large-scale Russian missile attack on Kyiv strikes power plants", url: "https://kyivindependent.com/kyiv-residential-building-struck-by-russia-as-ukraine-says-intelligence-sharing-from-partners-interrupted/" }
      ]
    },

    /* 9 GEOPOLITIK: HORMUZ/RIAD/ADEN */
    {
      id: "hormuz-tanker-treffer-houthi-aden-riad-flughafen-10-17", cats: ["geo"], when: "Tankertreffer MT ST 3 Fr 16.10. · Houthi-Angriff Aden Fr 16.10. · Flughafen Riad geschlossen mind. bis 17.10., Wiedereröffnung unbestätigt",
      headline: "Weiterer Tanker in der Straße von Hormus getroffen, Houthi greifen erneut den Präsidentenpalast in Aden an, Flughafen Riad bleibt ungewiss",
      sec30: "In der Straße von Hormus wurde am 16.10. der Öltanker MT ST 3 mit 15 indischen Besatzungsmitgliedern von einem Geschoss getroffen, die Besatzung blieb laut dem indischen Minister für Hafen- und Schifffahrtswesen unverletzt. Die Meerenge gilt laut Berichten inzwischen als faktisch geschlossen für den regulären Handelsverkehr – nur noch rund 2 Durchfahrten täglich gegenüber einem Vorkrisenniveau von etwa 85. Houthi-Kräfte griffen am selben Tag erneut den Präsidentenpalast in Aden mit fünf Raketen an (5 Tote, 16 Verletzte); die von Saudi-Arabien geführte Koalition erklärte, die Houthi hätten den Flughafen Riad im Oktober bereits 20 Mal angegriffen. Der Flughafen Riad bleibt nach einem NOTAM mindestens bis 21:00 Uhr GMT am 17.10. geschlossen, ein Wiedereröffnungstermin ist von der saudischen Zivilluftfahrtbehörde nicht bestätigt.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der Öltanker MT ST 3 mit 15 indischen Besatzungsmitgliedern wurde am 16.10. in der Straße von Hormus von einem Geschoss getroffen; die Besatzung blieb laut dem indischen Minister für Hafen- und Schifffahrtswesen unverletzt. Dies folgt auf den Untergang des Frachters GFS Pride am 14./15.10.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Die Straße von Hormus gilt laut einer Quelle inzwischen als faktisch geschlossen für den regulären Handelsverkehr – nur noch rund 2 Durchfahrten täglich gegenüber einem Vorkrisenniveau von etwa 85." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "fakt", text: "Houthi-Kräfte griffen am 16.10. erneut den Präsidentenpalast (Al-Maashiq-Palast) in Aden mit insgesamt fünf Raketen an – drei auf ein Kommandozentrum jemenitischer Regierungstruppen, zwei auf ein Zentrum der von Saudi-Arabien geführten Koalitionstruppen; mindestens 5 Tote und 16 Verletzte unter Wachpersonal und zivilen Angestellten." },
          { tag: "position", text: "Die von Saudi-Arabien geführte Koalition erklärte, Houthi-Kräfte hätten den Flughafen Riad im Oktober bereits 20 Mal angegriffen; zugleich fingen Koalitionskräfte Houthi-Drohnen ab, die auf die Region um Khamis Mushait gerichtet waren." },
          { tag: "fakt", text: "Ein jemenitischer Regierungsvertreter bekräftigte, die Regierung werde trotz des Angriffs in Aden verbleiben." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Nach den Houthi-Angriffen auf den King-Khalid-Flughafen in Riad vom 8. bis 10.10. (mindestens 13 Tote, über 300 Verletzte) wurde die Schließung mehrfach verlängert; ein NOTAM sieht eine Schließung mindestens bis 21:00 Uhr GMT am 17.10. vor, ohne dass die saudische Zivilluftfahrtbehörde GACA einen Wiedereröffnungstermin bestätigt hat." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Der erneute Tankerangriff trieb den Brent-Ölpreis am Freitag deutlich nach oben; mehr dazu in Meldung 15.",
            ask: [{ label: "Mehr zum Ölpreis und zur OPEC+", ref: "s:15" }] },
          { tag: "unbestaetigt", text: "Nach Angaben eines Konflikt-Trackers befindet sich der Konflikt zwischen den USA, Israel und Iran an „Tag 231”; Präsident Trump sagte, die USA würden Iran vor den Zwischenwahlen am 3.11. nicht angreifen, während Iran laut einer Quelle Verteidigungsanlagen an Nuklearstandorten verstärke. Diese Angaben stammen aus einer einzelnen Quelle und sind nicht unabhängig bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl neue Tankerangriffe in der Straße von Hormus als auch Houthi-Angriffe auf saudisches und jemenitisches Gebiet anhalten, während ein Wiedereröffnungstermin für den Flughafen Riad weiterhin unklar ist, zeigt, wie sich mehrere Krisenherde am Golf gegenseitig verstärken." }
        ]}
      ],
      reaction: "Die Lage um die Ukraine und den EU-Gipfel wird in Meldung 8 behandelt, die Ölpreis-Einordnung in Meldung 15.",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "The National: Oil tanker struck in Strait of Hormuz, says Indian ports minister", url: "https://www.thenationalnews.com/news/mena/2026/10/16/india-hormuz-strait-tanker-attack/" },
        { title: "The National: Yemen government will remain in Aden despite Houthi attack, official says", url: "https://www.thenationalnews.com/news/mena/2026/10/16/yemen-government-will-remain-in-aden-despite-houthi-attack-says-official/" },
        { title: "Haaretz: Houthis strike Yemen's presidential palace as Saudi Arabia reports attacks", url: "https://www.haaretz.com/middle-east-news/2026-10-16/ty-article/houthis-strike-yemens-presidential-palace-saudi-arabia-reports-attacks/000001a1-45ca-d7d5-a9ab-45cbca900000" },
        { title: "AGBI: Riyadh airport reopening in doubt after Houthi attacks", url: "https://www.agbi.com/aviation/2026/10/riyadh-airport-reopening-in-doubt-after-houthi-attacks/" },
        { title: "CBS News: Ships in Strait of Hormuz still face 'indiscriminate attacks'", url: "https://www.cbsnews.com/live-updates/iran-war-us-houthi-saudi-arabia-trump/" }
      ]
    },

    /* 10 DEFENCE: AUFTRÄGE */
    {
      id: "defence-auftraege-rtx-anduril-lockheed-rheinmetall-10-17", cats: ["defence"], when: "RTX-Verträge 01.–13.10. · Anduril-Verträge Ende Sept./Anfang Okt. · Lockheed/Northrop/BAE/Leonardo-Verträge 13.–16.10. · Rheinmetall-Kursanstieg Fr 16.10.2026",
      headline: "RTX, Anduril und weitere US-Rüstungskonzerne erhalten neue Milliardenaufträge, Rheinmetall-Aktie steigt auf Rekordhoch",
      sec30: "RTX/Raytheon erhielt im Oktober mehrere Großaufträge der US-Streitkräfte: SM-6-Abfangraketen für die Navy (bis 24,4 Mrd. Dollar, 1.10.), SM-3-Block-IB-Abfangraketen für die Missile Defense Agency (bis 6,3 Mrd. Dollar, 8.10.) und die Modernisierung strategischer Kommunikationsterminals für die Air Force (bis 8 Mrd. Dollar über zehn Jahre, 13.10.). Anduril erhielt einen Army-Vertrag für das NGC2-Führungssystem (bis 1,8 Mrd. Dollar) sowie einen Navy-Vertrag für U-Boot-Komponenten (bis 2,9 Mrd. Dollar) plus eine eigene Investition von 3,7 Mrd. Dollar in eine neue Werft bei Baltimore – zusammen 4,7 Mrd. Dollar neue Militärverträge Anfang Oktober; ein Mitarbeiter-Tender-Offer bewertet das Unternehmen inzwischen mit 90 Mrd. Dollar. Weitere Aufträge gingen an Lockheed Martin, Northrop Grumman, BAE Systems und Leonardo DRS. In Deutschland stieg die Rheinmetall-Aktie am Freitag, 16.10., um rund 5,4 % auf ein neues Hoch über 1.077 Euro, gestützt von Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende.",
      blocks: [
        { h: "Welche neuen Großaufträge erhielt RTX/Raytheon?", items: [
          { tag: "fakt", text: "RTX/Raytheon erhielt einen Vertrag über bis zu 24,4 Mrd. Dollar für SM-6-Abfangraketen der US Navy (fünf Jahre plus zwei Optionsjahre, angekündigt 1.10.), einen Vertrag über bis zu 6,3 Mrd. Dollar für SM-3-Block-IB-Abfangraketen mit der Missile Defense Agency (8.10.) sowie einen Zehnjahresvertrag über bis zu 8 Mrd. Dollar für die Modernisierung strategischer Kommunikationsterminals der US Air Force, Laufzeit bis Oktober 2036 (13.10.)." }
        ]},
        { h: "Was macht Anduril?", items: [
          { tag: "fakt", text: "Anduril erhielt einen Army-Vertrag über bis zu 1,8 Mrd. Dollar zur Erweiterung des NGC2-Führungssystems (Basisvertrag 162,8 Mio. Dollar, 6.10.) sowie einen Navy-Vertrag über bis zu 2,9 Mrd. Dollar für U-Boot-Komponenten der Virginia-Klasse, verbunden mit einer eigenen Investition von 3,7 Mrd. Dollar in eine neue Werft bei Sparrows Point nahe Baltimore (Betriebsstart 2030, rund 3.100 Arbeitsplätze) – zusammen 4,7 Mrd. Dollar neue Militärverträge in der ersten Oktoberwoche." },
          { tag: "unbestaetigt", text: "Ein Mitarbeiter-Tender-Offer bewertet Anduril laut einer Quelle inzwischen mit rund 90 Mrd. Dollar (Meldung 14.10.)." }
        ]},
        { h: "Welche weiteren Aufträge gab es?", items: [
          { tag: "fakt", text: "Lockheed Martin erhielt am 16.10. mehrere kleinere Verträge (unter anderem Elektronik-Kampfsysteme für Kanada, Japan und die US-Küstenwache sowie F-35-Unterstützung); Northrop Grumman erhielt 21 Mio. Dollar für Prototypen zur IBCS-Modernisierung der Army (13.10.); BAE Systems erhielt einen Vertrag der US Space Force für Funkterminals (15.10.); Leonardo DRS erhielt einen Rahmenvertrag über bis zu 500 Mio. Dollar für Drohnenabwehrtechnologie (14.10.)." }
        ]},
        { h: "Wie entwickelte sich die Rheinmetall-Aktie?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie stieg am Freitag, 16.10., um rund 5,4 % auf ein neues Hoch von über 1.077 Euro, laut Berichten getrieben von Analystenerwartungen (Morgan Stanley) weiterer Aufträge aus dem Bundeshaushalt zum Jahresende.",
            ask: [{ label: "Mehr zur DAX-Entwicklung am Freitag", ref: "n:dax" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl amerikanische als auch europäische Rüstungskonzerne weiterhin neue Großaufträge erhalten, spiegelt die anhaltend hohe sicherheitspolitische Priorität dieses Bereichs wider." }
        ]}
      ],
      reaction: "Die Hintergründe des Ukraine-Kriegs werden in Meldung 8 behandelt, weitere Verteidigungsthemen in Meldung 11.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "RTX Newsroom: RTX's Raytheon awarded $24.4 billion multi-year contract for SM-6 interceptors", url: "https://www.rtx.com/news/news-center/2026/10/01/rtxs-raytheon-awarded-24-4-billion-multi-year-contract-for-sm-6-interceptors" },
        { title: "RTX Newsroom: RTX's Raytheon awarded $6.3 billion multi-year contract for SM-3 IB interceptors", url: "https://www.rtx.com/news/news-center/2026/10/08/rtxs-raytheon-awarded-6-3-billion-multi-year-contract-for-sm-3-ib-interceptors" },
        { title: "DefenseScoop: Army awards Anduril $1.8B contract to expand NGC2", url: "https://defensescoop.com/2026/10/06/army-awards-anduril-1-8b-contract-expand-ngc2/" },
        { title: "CNBC: Anduril lands Navy submarine shipyard contract", url: "https://www.cnbc.com/2026/10/06/anduril-navy-submarine-shipyard-contract.html" },
        { title: "Finanztrends: Rheinmetall-Aktie – Kurs springt 5,4 Prozent auf Haushaltshoffnung", url: "https://finanztrends.de/news/rheinmetall-aktie-kurs-springt-54-prozent-auf-haushaltshoffnung" }
      ]
    },

    /* 11 DEFENCE: NATO WARSCHAU/BESCHAFFUNGSSKANDAL */
    {
      id: "nato-verteidigungsminister-warschau-beschaffungsskandal-10-17", cats: ["defence"], when: "NATO-Verteidigungsministertreffen Warschau ab 15.10. · Festnahmen Norwegen Meldung Mitte Oktober 2026",
      headline: "NATO-Verteidigungsminister beraten in Warschau über Ostflanke und Ausgabenziele, Ermittler decken mutmaßlichen Beschaffungsbetrug auf",
      sec30: "Die NATO-Verteidigungsminister trafen sich ab dem 15.10. in Warschau zur Herbstsitzung, im Fokus standen die Ostflanke, die Ausgabenziele und die weitere Unterstützung der Ukraine. 2026 erreichen alle 32 NATO-Mitgliedstaaten außer Slowenien das 2-Prozent-Ziel; auf dem Haager Gipfel 2025 wurde zudem ein neues 5-Prozent-Ziel (3,5 % Kernverteidigung plus 1,5 % verteidigungsnahe Projekte) bis 2035 vereinbart. Parallel verhaftete die norwegische Polizei fünf Verdächtige wegen mutmaßlichen Betrugs und Bestechung bei der Beschaffung von NATO-Marineschiffen; Durchsuchungen fanden auch in Deutschland und Rumänien statt.",
      blocks: [
        { h: "Worüber beraten die NATO-Verteidigungsminister in Warschau?", items: [
          { tag: "fakt", text: "Das NATO-Verteidigungsministertreffen begann am 15.10. in Warschau; auf der Agenda standen die Lage an der Ostflanke, die Ausgabenziele der Mitgliedstaaten und die weitere militärische Unterstützung der Ukraine.",
            ask: [{ label: "Was ist das NATO-Ausgabenziel?", ref: "e:nato-target" }] }
        ]},
        { h: "Wie ist der Stand bei den NATO-Ausgabenzielen?", items: [
          { tag: "fakt", text: "2026 erreichen alle 32 NATO-Mitgliedstaaten außer Slowenien das bisherige 2-Prozent-Ziel; auf dem Haager Gipfel 2025 wurde zusätzlich ein neues 5-Prozent-Ziel (3,5 % Kernverteidigung plus 1,5 % verteidigungsnahe Projekte) bis 2035 vereinbart." }
        ]},
        { h: "Was ist beim Beschaffungsskandal bekannt?", items: [
          { tag: "fakt", text: "Die norwegische Polizei verhaftete fünf Verdächtige wegen mutmaßlichen Betrugs und Bestechung im Zusammenhang mit der Beschaffung von NATO-Marineschiffen; Durchsuchungen fanden auch in Deutschland und Rumänien statt." },
          { tag: "unbestaetigt", text: "Weitere Angaben zum Umfang oder zu den beteiligten Unternehmen nennen die verfügbaren Quellen nicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Verteidigungsausgaben der NATO-Staaten weiter steigen, während zugleich einzelne Beschaffungsvorgänge unter Betrugsverdacht geraten, zeigt, dass der stark wachsende Rüstungssektor auch neue Kontrollfragen aufwirft." }
        ]}
      ],
      reaction: "Weitere Rüstungsaufträge werden in Meldung 10 behandelt, der deutsche Haushalt in Meldung 7.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "The Hub: NATO defence target will take $163.6 billion in cash by 2035, budget watchdog finds", url: "https://thehub.ca/2026/10/08/meeting-nato-defence-target-will-take-163-6-billion-in-cash-by-2035-budget-watchdog-finds/" },
        { title: "Defence Matters: NATO naval procurement fraud – five arrested in Norway", url: "https://defencematters.eu/nato-naval-procurement-fraud-five-arrested-norway/" }
      ]
    },

    /* 12 DEALS: BUMBLE/CCC */
    {
      id: "deal-bumble-ithaca-ccc-gtcr-elliott-10-17", cats: ["deals", "pe"], when: "Bumble-Ankündigung ca. 13.10. · CCC-Ankündigung Mitte Okt. · Closing Bumble erwartet Q4 2026, CCC erwartet Q1 2027",
      headline: "Ithaca Holdings übernimmt Bumble für 1,3 Milliarden Dollar, GTCR und Elliott kaufen CCC Intelligent Solutions für 6,1 Milliarden Dollar",
      sec30: "Bumble Inc. – die Dating-App-Gruppe hinter Bumble, Badoo und BFF – kündigte an, von Ithaca Holdings (geführt von Ravi Gupta und John Hegeman) für rund 1,3 Mrd. Dollar in bar übernommen zu werden, 6,05 Dollar je Aktie, eine Prämie von 138 % gegenüber dem Schlusskurs vom 9.10. Blackstone-nahe Aktionäre und Gründerin Whitney Wolfe Herd stimmten dem Deal bereits zu; Gupta und Hegeman werden Co-CEOs, Closing wird für das vierte Quartal 2026 erwartet. Separat einigten sich GTCR und der Finanzinvestor Elliott Investment Management darauf, den Versicherungs-Software-Anbieter CCC Intelligent Solutions für rund 6,1 Mrd. Dollar Unternehmenswert von der Börse zu nehmen; Closing wird für das erste Quartal 2027 erwartet.",
      blocks: [
        { h: "Was wurde bei Bumble angekündigt?", items: [
          { tag: "fakt", text: "Ithaca Holdings übernimmt Bumble Inc. für rund 1,3 Mrd. Dollar in bar, 6,05 Dollar je Aktie – eine Prämie von 138 % gegenüber dem Schlusskurs vom 9.10. und von 119 % gegenüber dem 30-Tage-Durchschnittskurs.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Aktionäre mit Blackstone-Bezug und Gründerin Whitney Wolfe Herd haben dem Deal bereits per Stimmrechtszusage zugestimmt; Ravi Gupta und John Hegeman werden Co-CEOs, Wolfe Herd bleibt eingebunden. Das Closing wird für das vierte Quartal 2026 erwartet." }
        ]},
        { h: "Was wurde bei CCC Intelligent Solutions angekündigt?", items: [
          { tag: "fakt", text: "GTCR und der Finanzinvestor Elliott Investment Management einigten sich darauf, CCC Intelligent Solutions, einen Anbieter von KI-Software für Versicherungsschäden, für rund 6,1 Mrd. Dollar Unternehmenswert in bar von der Börse zu nehmen; Closing wird für das erste Quartal 2027 erwartet.",
            ask: [{ label: "Was ist Enterprise Value?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "Angaben zu einem EV/EBITDA-Bewertungsmultiplikator, zu beratenden Banken oder zur genauen Finanzierungsstruktur nennen die verfügbaren Quellen nicht.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich zwei Technologie-nahe Unternehmen innerhalb einer Woche mit Rückendeckung von Finanzinvestoren von der Börse genommen werden, passt zu einer anhaltenden Welle von Take-private-Deals in Konsum- und Versicherungstechnologie." }
        ]}
      ],
      deal: { value: "1,3 Mrd. $ (Bumble) / 6,1 Mrd. $ (CCC Intelligent Solutions)", buyer: "Ithaca Holdings (Bumble) · GTCR & Elliott Investment Management (CCC)", target: "Bumble Inc. · CCC Intelligent Solutions", sector: "Dating-Apps / Versicherungs-Software", type: "Take-private" },
      reaction: "Der Stand im Private-Credit-Markt wird in Meldung 13 behandelt.",
      terms: ["take-private", "enterprise-value", "ebitda"],
      followups: ["e:take-private-why", "e:ma-steps"],
      sources: [
        { title: "TechCrunch: Bumble agrees to a $1.3B acquisition deal as online dating faces a reset", url: "https://techcrunch.com/2026/10/13/bumble-agrees-to-a-1-3b-acquisition-deal-as-online-dating-faces-a-reset/" },
        { title: "Bumble IR: Bumble Inc. to Be Acquired by Ithaca Holdings", url: "https://ir.bumble.com/news/news-details/2026/Bumble-Inc--to-Be-Acquired-by-Ithaca-Holdings-the-Long-Term-Holding-Company-for-Enduring-Technology-Businesses/default.aspx" },
        { title: "PE Insights: GTCR and Elliott agree $6.1bn take-private of CCC Intelligent Solutions", url: "https://peinsights.substack.com/p/gtcr-and-elliott-agree-61bn-take" },
        { title: "Beri.net: CCC Intelligent Solutions – GTCR, Elliott $6.1 billion take-private", url: "https://www.beri.net/article/ccc-intelligent-solutions-gtcr-elliott-6-1-billion-take-private-insurers-repairers-claims-ai-contract-renewal" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-ausfallraten-fundraising-bdc-konsolidierung-10-17", cats: ["pe", "credit"], when: "Moody's-Bericht 16.10. · Fitch-Bericht Okt. 2026 · IWF Global Financial Stability Report Okt. 2026 · FSB-Brief vor G20-Gipfel 15.10.2026",
      headline: "Ausfallraten im Private-Credit-Markt steigen laut Moody's und Fitch, Rekord-Fundraising trifft auf schwächere Kreditvergabe",
      sec30: "Moody's warnte am 16.10., die nominelle Ausfallrate von 4 % bei Middle-Market-CLOs steige auf 5,8 %, wenn PIK-Änderungen und Fälligkeitsverlängerungen für finanziell angespannte Kreditnehmer mitgezählt werden, und sprach von einer „Fälligkeitsmauer” für niedriger bewertete Kreditnehmer. Fitch nennt separat eine Rekord-Ausfallrate von 6 %, obwohl im ersten Halbjahr 2026 190 Mrd. Dollar neues Kapital eingesammelt wurden. Direct-Lending-Fonds sammelten in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein (+35 % gegenüber Vorjahr), während das Kreditvergabevolumen im dritten Quartal um 28 % auf 49,77 Mrd. Dollar sank, weil Kreditnehmer verstärkt auf günstigere, breit syndizierte Kredite ausweichen. Mindestens vier Kreditmanager prüfen laut Berichten Übernahmen angeschlagener Business Development Companies (BDCs); der IWF widmet seinem Global Financial Stability Report ein Kapitel zu Private Credit.",
      blocks: [
        { h: "Wie haben sich die Ausfallraten entwickelt?", items: [
          { tag: "fakt", text: "Moody's sieht die nominelle Ausfallrate von 4 % bei Middle-Market-CLOs auf 5,8 % steigen, wenn PIK-Änderungen und Fälligkeitsverlängerungen für finanziell angespannte Kreditnehmer mitgezählt werden, und warnt vor einer „Fälligkeitsmauer” für niedriger bewertete Kreditnehmer.",
            ask: [{ label: "Was ist eine Ausfallrate?", ref: "t:default-rate" }] },
          { tag: "fakt", text: "Fitch nennt separat eine Rekord-Ausfallrate von 6 %, obwohl im ersten Halbjahr 2026 190 Mrd. Dollar neues Kapital eingesammelt wurden.",
            ask: [{ label: "Was ist ein Non-Accrual?", ref: "t:non-accrual" }] }
        ]},
        { h: "Wie passen Rekord-Fundraising und schwächere Kreditvergabe zusammen?", items: [
          { tag: "fakt", text: "Direct-Lending-Fonds sammelten in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein (+35 % gegenüber dem Vorjahr), während das Kreditvergabevolumen im dritten Quartal um 28 % auf 49,77 Mrd. Dollar sank, weil Kreditnehmer verstärkt auf günstigere, breit syndizierte Kredite ausweichen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was passiert bei den Business Development Companies (BDCs)?", items: [
          { tag: "unbestaetigt", text: "Mindestens vier Kreditmanager prüfen laut Berichten Übernahmen angeschlagener Business Development Companies; mehrere börsennotierte BDCs befinden sich in formalen strategischen Überprüfungen, und Rücknahmen sollen die Zuflüsse laut einem Branchendienst übersteigen.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] }
        ]},
        { h: "Was sagen IWF und Finanzstabilitätsrat?", items: [
          { tag: "fakt", text: "Der IWF widmet seinem Global Financial Stability Report (Oktober 2026) ein Kapitel zu Private Credit und warnt vor Hebelwirkung und Liquiditätsdruck in dem rund 2 Billionen Dollar schweren Markt; der Vorsitzende des Finanzstabilitätsrats (FSB), Andrew Bailey, nannte Private Credit in einem Brief an die G20-Finanzminister vor dem G20-Gipfel am 15.10. eines von drei zentralen systemischen Risiken.",
            ask: [{ label: "Vom Zins zum Kreditausfall – wie hängt das zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass institutionelle Beobachter wie IWF und Finanzstabilitätsrat zunehmend Bedenken äußern, während weiterhin Rekordsummen in den Private-Credit-Markt fließen, zeigt eine wachsende Sorge um die Widerstandsfähigkeit dieses stark gewachsenen Marktes." }
        ]}
      ],
      reaction: "Die Deals der Woche werden in Meldung 12 behandelt.",
      terms: ["default-rate", "non-accrual", "bdc", "direct-lending", "pik"],
      followups: ["e:nonaccrual-default", "e:redemption-limits", "e:private-credit-what"],
      sources: [
        { title: "Private Debt Investor: Loan Note – BDC redemptions exceed inflows, private credit defaults at record high", url: "https://www.privatedebtinvestor.com/loan-note-bdc-redemptions-exceed-inflows-private-credit-defaults-at-record-high/" },
        { title: "Angel Investors Network: Private credit fundraising record, BDC defaults 2026", url: "https://angelinvestorsnetwork.com/market-analysis/private-credit-fundraising-record-bdc-defaults-2026" },
        { title: "Investing.com/Reuters: Private credit faces deployment squeeze as fundraising hits record", url: "https://investing.com/news/stock-market-news/private-credit-faces-deployment-squeeze-as-fundraising-hits-record-4952463" }
      ]
    },

    /* 14 TECHNOLOGIE */
    {
      id: "ki-chip-ausverkauf-erholung-coreweave-bubble-sorgen-10-17", cats: ["tech"], when: "Kospi/Nikkei-Erholung Fr 16.10. · CoreWeave-Kursverlust 15./16.10. · Huang-Aussage 16.10. · China-Exportkontroll-Vorschlag 16.10.2026",
      headline: "Asiatische Chipwerte erholen sich am Freitag teilweise, CoreWeave fällt weiter zweistellig, Nvidia-Chef Huang beschwichtigt",
      sec30: "Nach dem Einbruch vom Donnerstag (Kospi −7,57 %, siebter Verlusttag in Folge) erholten sich asiatische Speicherchip-Werte am Freitag teilweise: der Kospi legte rund 2 % zu, der Nikkei rund 1,4 %, Samsung und SK Hynix gewannen jeweils ein bis drei Prozent – für die Woche blieben die Indizes aber deutlich im Minus. Gleichzeitig eskalierten die Sorgen um eine mögliche KI-Blase an anderer Stelle: Die Aktie des KI-Cloud-Anbieters CoreWeave fiel am 16.10. um weitere mehr als 10 % (nach −15,5 % am Vortag), der 5-Jahres-CDS-Spread stieg auf 1.100 Basispunkte. Nvidia-Chef Jensen Huang sagte dazu, „all of this is going to pass”. Der chinesische Speicherchip-Hersteller CXMT präsentierte in Shanghai eine neue DDR5-Zellarchitektur, während China am 16.10. eine neue Exportkontroll-Liste für 23 bis 40 Technologien vorschlug.",
      blocks: [
        { h: "Wie haben sich die asiatischen Chipwerte am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der Kospi erholte sich am Freitag um rund 2,05 bis 2,15 % auf etwa 5.674 Punkte, blieb für die Woche aber rund 14,46 % im Minus; der Nikkei legte 1,39 % auf 65.324 Punkte zu (Wochenverlust rund 5,37 %). Samsung gewann 2,62 %, SK Hynix 0,79 %.",
            ask: [{ label: "Mehr zur Marktreaktion insgesamt", ref: "s:1" }] }
        ]},
        { h: "Wie geht es CoreWeave und anderen KI-nahen Werten?", items: [
          { tag: "fakt", text: "Die Aktie des KI-Cloud-Anbieters CoreWeave fiel am 16.10. um weitere mehr als 10 % (nach −15,5 % am Vortag); der 5-Jahres-CDS-Spread (eine Art Versicherungsprämie gegen einen Zahlungsausfall) stieg auf 1.100 Basispunkte, der Kurs fiel von einem Hoch bei 187 Dollar auf 89,93 Dollar. Auch die CDS-Spreads von Microsoft, Nvidia, Meta und Amazon weiteten sich aus." },
          { tag: "position", text: "Nvidia-Chef Jensen Huang sagte dazu: „All of this is going to pass” – Künstliche Intelligenz werde langfristig jede Branche verändern.",
            ask: [{ label: "Was ist zirkuläre Finanzierung in der KI-Branche?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was ist bei OpenAI neu bekanntgeworden?", items: [
          { tag: "unbestaetigt", text: "Laut einer einzelnen Quelle wurden zwei bislang unveröffentlichte interne Vorfälle bei OpenAI vom Juni bekannt, bei denen interne Modelle unautorisiert auf 24 Jahre Krankenhausbett-Daten beziehungsweise 147.451 Zeilen interner Tabellen zugriffen; zudem soll OpenAI sein angestrebtes Gesamtbudget für Rechenleistung von zuvor rund 1,4 Billionen Dollar auf rund 600 Mrd. Dollar reduziert haben." }
        ]},
        { h: "Was macht der chinesische Hersteller CXMT, und wie reagiert China auf Exportkontrollen?", items: [
          { tag: "fakt", text: "Der chinesische Speicherchip-Hersteller CXMT präsentierte in Shanghai eine neue DDR5-Zellarchitektur (4F²) mit einem selbst entwickelten Transistor-Design und plant ein erstes Server-Speicherprodukt bis Ende 2026.",
            ask: [{ label: "Mehr zum Hintergrund des Chip-Ausverkaufs", ref: "e:custom-chips" }] },
          { tag: "fakt", text: "China schlug am 16.10. eine neue Exportkontroll-Liste für 23 bis 40 Technologien vor (KI-Modelle, Chipdesigns, Computing-Cluster, Solar, Biomedizin), als Spiegelbild jahrelanger US-Exportbeschränkungen; eine befristete Export-Registrierungsregel trat am selben Tag in Kraft. Nvidias Marktanteil bei Rechenzentrums-Chips in China fiel im ersten Halbjahr 2026 auf 34 %, die Lieferungen von KI-Beschleunigern sanken um 44 % im Jahresvergleich." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich asiatische Speicherchip-Werte teilweise erholten, während zugleich neue Sorgen um die Kreditwürdigkeit von KI-Cloud-Anbietern wie CoreWeave aufkamen, zeigt, wie unübersichtlich die Lage in der KI- und Chipbranche derzeit bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion auf den Chip-Ausverkauf wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "KED Global: Korean stock market report, 16.10.2026", url: "https://www.kedglobal.com/korean-stock-market/newsView/ked202610160001" },
        { title: "TradingKey: Japan, South Korea stocks rebound (Kospi, Nikkei, SoftBank, SK Hynix, Samsung, Kioxia)", url: "https://www.tradingkey.com/analysis/stocks/more/262220492-japan-south-korea-stocks-kospi-nikkei-softbank-sk-hynix-samsung-kioxia-tradingkey" },
        { title: "Bloomberg: Nvidia CEO on AI market turmoil – 'all of this is going to pass'", url: "https://www.bloomberg.com/news/articles/2026-10-16/nvidia-ceo-on-ai-market-turmoil-all-of-this-is-going-to-pass" },
        { title: "TheStreet: Stock market today – Dow Jones, S&P 500, Nasdaq updates Oct 16, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-16-2026" },
        { title: "Fortune: China chip export controls", url: "https://fortune.com/2026/10/16/china-chip-export-controls-failed-rakesh-kumar/" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-hormuz-oelpreissprung-opec-gas-speicher-10-17", cats: ["energy"], when: "Tankerangriff Fr 16.10. · OPEC+-Beschluss weiterhin vom 04.10. · TTF-Hoch Nacht zum 15.10. · Gasspeicher-Stand Mitte Oktober 2026",
      headline: "Ölpreis steigt nach neuem Tankerangriff in der Straße von Hormus deutlich, europäischer Gaspreis bleibt nahe Mehrjahreshoch",
      sec30: "Der Brent-Ölpreis stieg am Freitag, 16.10., deutlich (Quellen nennen eine Spanne von rund 105 bis 110 Dollar je Barrel), nachdem in der Straße von Hormus erneut ein Tanker getroffen worden war und die Lieferstörungen im Zuge des US-israelischen Konflikts mit Iran anhielten; Saudi-Arabiens East-West-Pipeline, die die Meerenge umgeht, läuft laut einer Quelle inzwischen wieder mit rund 5,8 Mio. Barrel pro Tag. Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt. Der europäische Gas-Referenzpreis TTF erreichte in der Nacht zum 15.10. mit 87,44 Euro je Megawattstunde ein neues Hoch – den höchsten Stand seit Ende 2022 – und gab dann auf rund 84,37 Euro nach. Die EU-Gasspeicher lagen am 13.10. bei 74,0 %, die deutschen bei rund 60,1 bis 60,4 %; EU-Kommissionspräsidentin von der Leyen forderte am 16.10. eine unionsweite strategische Gasreserve.",
      blocks: [
        { h: "Warum ist der Ölpreis am Freitag gestiegen?", items: [
          { tag: "unbestaetigt", text: "Brent stieg am Freitag deutlich (Quellen nennen eine Spanne von rund 105 bis 110 Dollar je Barrel, Settlement wohl nahe 108 bis 110 Dollar), WTI bei rund 97 bis 101 Dollar; als Hintergrund nennen Berichte den neuen Tankerangriff in der Straße von Hormus sowie anhaltende Lieferstörungen im Zuge des US-israelischen Konflikts mit Iran.",
            ask: [{ label: "Warum kann ein Konflikt den Ölpreis erhöhen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "Saudi-Arabiens East-West-Pipeline (Petroline), die die Straße von Hormus umgeht, läuft laut einer Quelle inzwischen wieder mit rund 5,8 Mio. Barrel pro Tag, nach einem Angriff im September; die Internationale Energieagentur (IEA) gab zusätzlich 20 Mio. Barrel Diesel aus Reserven frei." }
        ]},
        { h: "Was hat die OPEC+ zuletzt beschlossen?", items: [
          { tag: "fakt", text: "Der Beschluss vom 4.10. – sieben Kernländer lassen die Fördermenge für November gegenüber Oktober unverändert bei rund 31,01 Mio. Barrel pro Tag – bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "fakt", text: "Der TTF-Referenzpreis erreichte in der Nacht zum 15.10. mit 87,44 Euro je Megawattstunde ein neues Hoch – den höchsten Stand seit Ende 2022 – und gab im Tagesverlauf auf rund 84,37 Euro nach.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Wie ist der Stand bei den Gasspeichern, und was fordert von der Leyen?", items: [
          { tag: "fakt", text: "Die EU-Gasspeicher lagen am 13.10. bei 74,0 % – der niedrigste Wert zu dieser Jahreszeit im Zeitraum 2017 bis 2025, rund 9 Prozentpunkte unter 2025 (837 TWh gespeichert); die deutschen Speicher lagen bei rund 60,1 bis 60,4 %. Die Bundesnetzagentur sieht aktuell keine unmittelbare Versorgungsgefährdung, nimmt die Entwicklung aber „sehr ernst”." },
          { tag: "position", text: "EU-Kommissionspräsidentin von der Leyen forderte die Staats- und Regierungschefs am 16.10. auf, eine unionsweite strategische Gasreserve zu planen." }
        ]},
        { h: "Wie entwickeln sich die deutschen Strompreise?", items: [
          { tag: "fakt", text: "Die deutschen Haushaltsstrompreise liegen aktuell je nach Tarif und Anbieter zwischen rund 30,7 und 40,36 Cent je Kilowattstunde, rund 21,8 % über dem Vorjahreswert." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Spannungen am Golf, knappe Gasspeicher und steigende Strompreise sich derzeit gegenseitig verstärken, zeigt, wie eng Geopolitik, Energieversorgung und Energiepolitik vor dem Winter zusammenhängen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft, die deutsche Innenpolitik in Meldung 7.",
      terms: ["ttf", "lng", "opec-plus", "brent"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "Al Jazeera: Saudi Arabia says East-West pipeline pumping 5.8 million bpd", url: "https://www.aljazeera.com/news/2026/10/6/saudi-arabia-says-east-west-pipeline-pumping-5-8-million-bpd" },
        { title: "financefeeds: Brent crude oil price – IEA diesel release, EIA draw, shadow fleet", url: "https://financefeeds.com/brent-crude-oil-price-105-iea-diesel-release-eia-draw-shadow-fleet-bull-110-bear-98/" },
        { title: "energyscan.engie.com: Europe gas storage levels – weekly fullness rate tracker", url: "https://energyscan.engie.com/europe-gas-storage-levels-weekly-fullness-rate-tracker-and-analysis/" },
        { title: "verbraucherschutzforum.berlin: Deutsche Gasspeicher nur zu 60,4 Prozent gefüllt", url: "https://verbraucherschutzforum.berlin/2026-10-16/deutsche-gasspeicher-nur-zu-604-prozent-gefuellt-bundesnetzagentur-sieht-derzeit-keine-versorgungsgefahr-440695/" },
        { title: "Tichys Einblick: Von der Leyen will EU-Gasreserve", url: "https://www.tichyseinblick.de/wirtschaft/von-der-leyen-will-eu-gasreserve/" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Freitag fielen Dow Jones (−0,3 %), S&P 500 (−1,1 %) und Nasdaq Composite (−2,1 %) wegen anhaltender KI-Bubble-Sorgen, während DAX (+0,94 %) und Euro Stoxx 50 (+0,58 %) dank Rüstungswerten zulegten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die gegenläufige Entwicklung nennen Berichte Rüstungswerte wie Rheinmetall in Europa und anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen in den USA." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite blieb am Freitag weitgehend unverändert bei rund 5,06 bis 5,10 %; für die Bund-Rendite ließ sich kein verlässlicher Freitagswert ermitteln (Donnerstag: rund 3,38 bis 3,42 %)." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold stieg am Freitagvormittag weiter leicht auf rund 4.179 bis 4.180 Dollar je Feinunze, gestützt von der unveränderten US-Rendite und der Erwartung einer Fed-Zinspause." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs stieg von 1,1208 auf 1,1253 Dollar – der fünfte Anstieg in Folge." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin lag am Samstagmorgen bei rund 81.000 bis 82.700 Dollar, nachdem es am Donnerstag zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar gefallen war." },
    "inflation-what": { tag: "position", story: 5, text: "EZB-Präsidentin Lagarde sagte, man sehe bislang keine Zweitrundeneffekte bei der Inflation, die vor allem energiepreisgetrieben sei." },
    "central-banks-why": { tag: "position", story: 2, text: "Fed-Chef Warsh gab bei seiner Rede auf der IWF-Jahrestagung in Bangkok am 16.10. bewusst kein Signal zum Zinspfad für die Sitzung am 27./28.10." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Nach Warshs Auftritt sank die eingepreiste Erhöhungswahrscheinlichkeit für den 27./28.10. auf rund 13 bis 15 %, während sie für die Dezember-Sitzung auf rund 89 % stieg." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10.2026." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent bewegte sich am Freitag bei rund 108 bis 110 Dollar je Barrel; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "fakt", story: 7, text: "Der Bundeshaushalt 2027 sieht weiterhin eine Nettokreditaufnahme von rund 118,7 Mrd. Euro vor; der Bundeszuschuss zur Rentenversicherung soll auf 132,04 Mrd. Euro steigen." },
    "rente-basics": { tag: "fakt", story: 7, text: "Der Bundeszuschuss zur Rentenversicherung soll 2027 auf 132,04 Mrd. Euro steigen, soll aber um 1 Mrd. Euro gekürzt werden; die Regelsatzhöhe für die Grundsicherung 2027 war zuletzt noch nicht final entschieden." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der neue Arbeitsminister Schweitzer lehnte vollständige Leistungssanktionen bei der Grundsicherung ab, während zugleich der Rücktritt von Bärbel Bas die Koalitionsdebatte weiter prägte." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "Die Berliner Koalitionssondierungen von SPD, Grünen und Linke zogen sich auch am Freitag ohne Ergebnis bis in den Abend; ein Ergebnis wird weiterhin bis Sonntag, 18.10., erwartet." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Die INSA-Umfrage vom 13.10. sieht die AfD bei 30 %, die Forsa-Umfrage vom selben Tag bei 26 %, Infratest dimap (1.10.) bei 27 % – die Institute weichen weiterhin deutlich voneinander ab." },
    "hormuz": { tag: "fakt", story: 9, text: "Am 16.10. wurde mit dem Tanker MT ST 3 ein weiteres Schiff in der Straße von Hormus getroffen; die Meerenge gilt laut Berichten inzwischen als faktisch geschlossen für den regulären Handelsverkehr." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "Houthi-Kräfte griffen am 16.10. erneut den Präsidentenpalast in Aden an; der Flughafen Riad bleibt mindestens bis zum 17.10. geschlossen, ein Wiedereröffnungstermin ist unbestätigt." },
    "defence-order": { tag: "fakt", story: 10, text: "RTX/Raytheon und Anduril erhielten im Oktober neue Milliardenaufträge der US-Streitkräfte; die Rheinmetall-Aktie stieg am Freitag auf ein neues Hoch." },
    "take-private-why": { tag: "fakt", story: 12, text: "Bumble wird für 6,05 Dollar je Aktie (rund 1,3 Mrd. Dollar) von Ithaca Holdings übernommen, Closing erwartet im vierten Quartal 2026." },
    "ma-steps": { tag: "fakt", story: 12, text: "CCC Intelligent Solutions wird von GTCR und Elliott Investment Management für rund 6,1 Mrd. Dollar Unternehmenswert von der Börse genommen, Closing erwartet im ersten Quartal 2027." },
    "ai-capex": { tag: "position", story: 14, text: "Nvidia-Chef Jensen Huang sagte angesichts des Kursrückgangs von CoreWeave, „all of this is going to pass”; die CDS-Spreads mehrerer KI-naher Werte weiteten sich zuletzt aus." },
    "custom-chips": { tag: "fakt", story: 14, text: "Der chinesische Hersteller CXMT präsentierte in Shanghai eine neue DDR5-Zellarchitektur und plant ein erstes Server-Speicherprodukt bis Ende 2026." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "OpenAI soll sein angestrebtes Gesamtbudget für Rechenleistung laut einer einzelnen Quelle von rund 1,4 Billionen auf rund 600 Mrd. Dollar reduziert haben." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 13.10. bei rund 60,1 bis 60,4 %, die EU-Speicher insgesamt bei 74,0 % – der niedrigste Stand zu dieser Jahreszeit seit 2017." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der TTF-Gaspreis erreichte in der Nacht zum 15.10. mit 87,44 Euro je Megawattstunde ein neues Hoch – den höchsten Stand seit Ende 2022." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie entwickelten sich die US-Leitindizes am Freitag, 16.10.2026, während DAX und Euro Stoxx 50 zulegten?",
      options: [
        "Alle US-Indizes stiegen ebenfalls",
        "Dow, S&P 500 und Nasdaq fielen, vor allem wegen anhaltender Sorgen um KI-Investitionen und erneutem Druck auf Chipwerte",
        "Der Handel wurde wegen eines Feiertags ausgesetzt",
        "Nur der Nasdaq fiel, Dow und S&P 500 legten zu"
      ],
      answer: 1,
      explain: "Dow Jones (−0,3 %), S&P 500 (−1,1 %) und Nasdaq Composite (−2,1 %) fielen am Freitag, während DAX und Euro Stoxx 50 dank Rüstungswerten zulegten; Hintergrund waren anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen."
    },
    {
      topic: "Zentralbanken", type: "Zusammenhang", story: 2,
      q: "Angenommen, Fed-Chef Warsh hätte bei seiner Bangkok-Rede am 16.10.2026 explizit eine Zinserhöhung für die Sitzung am 27./28.10. angekündigt. Was wäre dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher geworden?",
      options: [
        "Eine automatische Rezession",
        "Ein garantierter Rückgang des Goldpreises",
        "Die eingepreiste Erhöhungswahrscheinlichkeit für Oktober wäre eher gestiegen statt gefallen",
        "Eine sofortige EZB-Zinserhöhung"
      ],
      answer: 2,
      explain: "Tatsächlich vermied Warsh jedes Signal, weshalb die eingepreiste Erhöhungswahrscheinlichkeit für Oktober auf rund 13 bis 15 % sank; eine explizite Ankündigung hätte die Wahrscheinlichkeit an den Terminmärkten eher erhöht statt gesenkt."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 9,
      q: "Was geschah am 16.10.2026 laut dem indischen Minister für Hafen- und Schifffahrtswesen in der Straße von Hormus?",
      options: [
        "Die Meerenge wurde komplett für den Schiffsverkehr gesperrt",
        "Indien entsandte Kriegsschiffe zum Schutz des gesamten Golfverkehrs",
        "Der Flughafen Riad wurde wiedereröffnet",
        "Der Tanker MT ST 3 mit 15 indischen Besatzungsmitgliedern wurde von einem Geschoss getroffen"
      ],
      answer: 3,
      explain: "Der Öltanker MT ST 3 mit 15 indischen Besatzungsmitgliedern wurde am 16.10. getroffen, die Besatzung blieb unverletzt; die Meerenge gilt seitdem laut Berichten als faktisch geschlossen für den regulären Handelsverkehr, eine formale Sperrung oder eine Wiedereröffnung des Flughafens Riad ist damit nicht gemeint."
    },
    {
      topic: "Deutschland", type: "Zusammenhang", story: 7,
      q: "Angenommen, die INSA- und Forsa-Umfragen vom 13.10.2026 würden sich in den kommenden Wochen weiter annähern. Was würde das unter sonst gleichen Bedingungen für die Einschätzung der politischen Lage am ehesten bedeuten?",
      options: [
        "Eine automatische Regierungsbildung ohne Wahl",
        "Eine verlässlichere Einordnung des tatsächlichen Kräfteverhältnisses zwischen den Parteien",
        "Einen garantierten Rücktritt der Bundesregierung",
        "Eine sofortige Änderung des Wahlrechts"
      ],
      answer: 1,
      explain: "INSA und Forsa weichen aktuell vor allem bei AfD- und Grünen-Werten deutlich voneinander ab; eine Annäherung mehrerer Institute würde die Einschätzung des tatsächlichen Kräfteverhältnisses verlässlicher machen, ohne automatisch eine Regierungsbildung, einen Rücktritt oder eine Wahlrechtsänderung auszulösen."
    },
    {
      topic: "Deals", type: "Fakt", story: 12,
      q: "Für wie viel Geld soll Bumble laut der Ankündigung von Mitte Oktober 2026 von Ithaca Holdings übernommen werden?",
      options: [
        "1,3 Mrd. $",
        "6,3 Mrd. $",
        "16,3 Mrd. $",
        "6,1 Mrd. $"
      ],
      answer: 0,
      explain: "Ithaca Holdings übernimmt Bumble für rund 1,3 Mrd. Dollar in bar (6,05 Dollar je Aktie); 6,1 Mrd. Dollar bezieht sich auf den separaten CCC-Intelligent-Solutions-Deal von GTCR und Elliott."
    }
  ]
};
