// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-19",
  dateLabel: "Montag, 19. Oktober 2026",
  updatedLabel: "Recherchestand 19.10.2026",
  marketNote: "Diese Ausgabe entsteht am Montagmorgen, 19.10.2026, vor Eröffnung des europäischen Kassahandels. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq gilt deshalb weiterhin der Schlussstand von Freitag, 16.10. Asiatische Märkte fielen am Montag bereits deutlich: Nikkei und Kospi gaben zeitweise mehr als 2 bzw. 3 % ab, nachdem der chinesische KI-Anbieter DeepSeek am Wochenende ein neues, speichereffizienteres Modell vorgestellt hatte, was erneut Sorgen um die Nachfrage nach Speicherchips schürte (Meldung 13) – das deutet auf einen schwächeren Handelsstart in Europa und den USA hin. Devisen-, Gold-, Öl- und Bitcoin-Kurse handeln dagegen durchgehend und zeigen bereits aktuellere Montagswerte: Brent-Rohöl fiel am Montagvormittag um rund 1,9 % auf etwa 107,85 Dollar, nachdem Präsident Trump eine Anordnung unterzeichnet hatte, die neue Russland-Sanktionen vorerst aussetzt (Meldung 14).",

  top: [
    { text: "Asiatische Aktienmärkte fielen am Montag, 19.10., deutlich: Der Nikkei gab zeitweise mehr als 2 % ab, der Kospi öffnete rund 1,7 % niedriger und fiel zeitweise um bis zu 3,2 %, Samsung und SK Hynix verloren zeitweise über 4 %. Hintergrund ist laut Berichten ein neues, speichereffizienteres KI-Modell des chinesischen Anbieters DeepSeek, das erneut Sorgen um die künftige Nachfrage nach Speicherchips weckte – nach einer Woche, in der S&P 500 (−1,1 %) und vor allem der Nasdaq Composite (−2,1 %, Wochenverlust rund −4,5 %) bereits wegen KI-Bewertungssorgen gefallen waren, während DAX (+0,94 %) und Euro Stoxx 50 (+0,58 %) dank Rüstungswerten zulegten.", ref: "s:1" },
    { text: "Der Ölpreis fiel am Montagvormittag um rund 1,9 % auf etwa 107,85 Dollar je Barrel (Brent), nachdem US-Präsident Trump am 16./17.10. eine Anordnung unterzeichnet hatte, die neue Russland-Sanktionen vorerst aussetzt. Gleichzeitig hält die Lage in der Straße von Hormus an: Die iranische Revolutionsgarde meldete inzwischen zwei Supertanker, die auf Minen gelaufen seien; die US-Streitkräfte (CENTCOM) wiesen das als „yet another IRGC attempt to intimidate regional commercial shipping through disinformation” zurück.", ref: "s:14" },
    { text: "In Berlin entscheiden SPD und Grüne am Abend des 19.10. darüber, ob sie mit der Linken in Koalitionsverhandlungen eintreten; die Grünen tagen dafür auf einem kleinen Parteitag um 20 Uhr, der SPD-Landesvorstand stimmt digital ab. 20 SPD-Bundestagsabgeordnete sprachen sich zuvor öffentlich gegen ein Bündnis ihrer Partei mit der Linken aus; die Linke selbst entscheidet erst am 31.10. auf einem Parteitag. Bundeskanzler Merz äußerte sich kritisch zu den Plänen.", ref: "s:5" },
    { text: "Die Ukraine startete in der Nacht zum 18.10. einen ihrer größten Drohnenangriffe des Jahres auf Russland (laut russischen Angaben über 1.000 Drohnen, Ziel unter anderem ein Öl-Terminal in St. Petersburg); in der Nacht zum 19.10. traf ein russischer Angriff mit Raketen und Drohnen Kiew, beschädigte eine U-Bahn-Station und ein Wohnhaus, eine Frau wurde getötet. Der EU-Gipfel vom 16.10. hatte zuvor erneut keine Entscheidung über die Nutzung eingefrorener russischer Vermögenswerte für die Ukraine-Finanzierung gebracht.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.622,61", change: "+0,94 % (+239,99 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Montag-Indikation", text: "Da der Kassahandel am Montagmorgen noch nicht begonnen hat, bleibt der Freitagsschluss der gültige Stand; asiatische Märkte fielen am Montag bereits deutlich, was auf einen schwächeren Start hindeuten könnte." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Rüstungswerte wie Rheinmetall stützten den Index, nach Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende; mehr dazu in Meldung 9.",
          "Asiatische Märkte fielen am Montag wegen eines neuen KI-Modells des chinesischen Anbieters DeepSeek, das Sorgen um die Chip-Nachfrage schürte (Meldung 13)."
        ]
      },
      important: [
        { area: "Rüstung", text: "Mehr zu neuen Rüstungsaufträgen und zur Rheinmetall-Aktie in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "ms-aktuell.de: DAX-Schluss 16.10.2026", url: "https://ms-aktuell.de/welt/dax-schluss-16-10-2026/" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.204,23", change: "+0,58 % (+36 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag hatte der Euro Stoxx 50 bei rund 6.168 Punkten geschlossen; am Freitag legte er zu, gestützt von Rheinmetall und einer ASML-Erholung." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Rheinmetall und weitere Rüstungswerte stützten den Index.",
          "Der Chipausrüster ASML erholte sich am Freitag, was den Index zusätzlich stützte."
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
        { label: "Dow Jones", text: "Freitagsschluss: 52.002,41 Punkte (−0,3 %, −175,28 Pkt.) – weniger stark im Minus, da im Dow weniger Technologiewerte stecken." },
        { label: "Nasdaq Composite", text: "Freitagsschluss: 26.140,03 Punkte (−2,1 %, −572,99 Pkt.); der Nasdaq 100 verlor rund 2,50 % auf 29.187,55 Punkte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen belasteten vor allem Technologie- und Chipwerte.",
          "Am Montag verschärfte ein neues Modell des chinesischen KI-Anbieters DeepSeek die Sorgen um die Speicherchip-Nachfrage zusätzlich (Meldung 13)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum anhaltenden KI-Ausverkauf und zu CoreWeave in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "ABC News/AP: How major US stock indexes fared Friday", url: "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "26.140,03", change: "−2,1 % (−572,99 Pkt., Fr-Schluss); Wochenverlust rund −4,5 %", dir: "down", asof: "Schluss Fr 16.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie ist nicht identisch mit dem enger gefassten Nasdaq 100.",
      compare: [
        { label: "Nasdaq 100", text: "Der stärker technologielastige Nasdaq 100 verlor am Freitag rund 2,50 % (−748,04 Punkte) auf 29.187,55 Punkte und lag damit rund 6,52 % unter seinem Hoch vom 6.10." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Philadelphia-Halbleiterindex SOX fiel am Freitag um 3,83 % auf 11.137,29 Punkte – der achte Verlusttag in Folge, die erste solche Serie seit Oktober 2008 (Meldung 13).",
          "Zunehmende Sorgen um die Kreditwürdigkeit von KI-Cloud-Anbietern wie CoreWeave belasteten zusätzlich; am Montag kam die Sorge um ein neues, speichereffizienteres KI-Modell von DeepSeek hinzu."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Nasdaq.com: Nasdaq posts worst weekly drop in months, Dow edges narrow gain", url: "https://www.nasdaq.com/press-release/nasdaq-posts-worst-weekly-drop-months-dow-edges-narrow-gain-2026-10-16" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1230 (Devisenmarkt Mo-vormittag)", change: "leicht schwächer als EZB-Referenzkurs Fr (1,1253)", dir: "down", asof: "Devisenmarkt Mo 19.10.26 vormittags", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Woche bis Freitag", text: "Der EZB-Referenzkurs war von 1,1181 Dollar am Montag der Vorwoche über 1,1208 (Donnerstag) auf 1,1253 Dollar am Freitag gestiegen – der fünfte Anstieg in Folge; die EZB veröffentlicht ihren Referenzkurs für Montag erst am Nachmittag." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die US-Anleiherendite bewegte sich am Freitag nach heißen September-Inflationsdaten, blieb im Tagesverlauf aber weitgehend unverändert."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Chef Warsh gab bei seiner IWF-Rede keine klare Richtung vor; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "investing.com: EUR/USD Kurs", url: "https://de.investing.com/currencies/eur-usd" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,08–5,10 % (Fr); Mo-Indikation ≈ 5,06–5,07 %", change: "leicht niedriger als Freitag", dir: "flat", asof: "Stand Fr 16.10.26 / Mo-Indikation 19.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr.",
      compare: [
        { label: "Hintergrund", text: "Das Niveau von rund 5,1 % gilt laut Berichten weiterhin als strukturell erhöht; am Freitag bewegte eine heißer als erwartet ausgefallene September-Inflationszahl die Rendite zusätzlich." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Fed-Chef Warsh gab bei seiner IWF-Rede in Bangkok am 16.10. keine klare Richtung für die Sitzung am 27./28.10. vor; seit 17.10. gilt die FOMC-Blackout-Periode bis zum 29.10.",
          "Nach mehreren Markterwartungs-Plattformen (CME FedWatch, Kalshi, Polymarket) lag die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober zuletzt überwiegend zwischen rund 13 und 16 %, mit vereinzelten höheren Einzelwerten – die Werte schwanken je Quelle und Zeitpunkt deutlich."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zu Warshs Auftritt und zur Markterwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "CNBC: US Treasury yields – investors weigh hot inflation data", url: "https://www.cnbc.com/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,42–3,46 % (keine einheitliche Mo-Angabe verfügbar)", change: "keine über mehrere Quellen übereinstimmende neue Angabe seit Freitag", dir: "flat", asof: "Stand Fr 16.10.26 (Quellen uneinheitlich)", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,08 bis 5,10 % weiterhin deutlich über der Bund-Rendite von rund 3,42 bis 3,46 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10.",
          "Die Bewerbungsfrist für die Nachfolge von Isabel Schnabel im EZB-Direktorium läuft am 28.10. ab (Meldung 4)."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Mehr zur EZB-Position und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "kagels-trading.de: Zinsentwicklung und Prognose", url: "https://www.kagels-trading.de/zinsentwicklung-prognose/" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.170,60 $ (Mo-Vormittag)", change: "nahezu unverändert ggü. Freitag (≈ 4.170–4.180 $)", dir: "flat", asof: "Stand Mo 19.10.26 vormittags", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.170 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Woche", text: "Gold war zur Wochenmitte auf rund 4.073 Dollar gefallen (Spekulation auf höhere US-Zinsen nach heißen Inflationsdaten) und hat sich seither bei rund 4.170 Dollar stabilisiert." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die weitgehend unveränderte US-Rendite hielt die Opportunitätskosten des zinslosen Goldes niedrig.",
          "Die anhaltende Erwartung einer Fed-Zinspause im Oktober stützte den Goldpreis zusätzlich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu Warshs Rede und zur Markterwartung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "gold.de: Goldpreis-Entwicklung", url: "https://www.gold.de/kurse/goldpreis/entwicklung/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 107,85 $ (Mo-Vormittag)", change: "−1,9 % ggü. Freitagsschluss (109,86 $)", dir: "down", asof: "Stand Mo 19.10.26 vormittags", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 108 Dollar je Fass (159 Liter) sind etwa 68 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI wird für Montag uneinheitlich mit rund 97 bis 101 Dollar je Barrel angegeben; die Quellen weichen hier weiterhin stärker als sonst voneinander ab." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Präsident Trump unterzeichnete am 16./17.10. eine Anordnung, die neue Russland-Sanktionen (darunter Strafzölle von bis zu 500 % auf russisches Öl und Gas) vorerst aussetzt, was mehr Angebot erwarten lässt und die Preise drückte.",
          "Gegenläufig hält die Lage in der Straße von Hormus an: Die iranische Revolutionsgarde meldet inzwischen zwei auf Minen gelaufene Supertanker, was die US-Streitkräfte (CENTCOM) als Desinformation zurückweisen (Meldung 14)."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf in Meldung 14.", ref: "s:14" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "tradingkey.com: Brent crude oil drops as Trump waives sanctions on Russia", url: "https://tradingkey.com/de/analysis/commodities/oil/262222951-brent-crude-oil-drops-trump-waives-sanctions-russia-tradingkey" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 82.000–82.800 $", change: "+rund 0,9 % ggü. Wochenende (≈ 81.700 $)", dir: "up", asof: "Stand Mo 19.10.26 vormittags", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin rund 35 % unter seinem Allzeithoch von etwa 126.080 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die anhaltenden Sorgen um KI-nahe Werte wie CoreWeave und der Montags-Ausverkauf bei asiatischen Chipwerten belasteten zwischenzeitlich auch Kryptowährungen (Meldung 13).",
          "Nach dem ruhigen Wochenende (Spanne rund 80.655 bis 81.961 Dollar) zog der Kurs am Montagvormittag leicht an."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "interactivecrypto.com: Bitcoin/USD – 34,95 % unter dem Allzeithoch", url: "https://www.interactivecrypto.com/de/bitcoin-usd-btc-34-95-unter-dem-allzeithoch-trotz-stabilisierung-bei-82-000-usd" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitag-schluss-deepseek-montag-selloff-10-19", cats: ["markets", "tech"], when: "Schluss Fr 16.10.2026 (Europa/USA) · Asien-Handel Mo 19.10.2026",
      headline: "S&P 500 und Nasdaq schließen die Woche im Minus, DAX und Euro Stoxx 50 legen zu – am Montag fallen asiatische Chipwerte nach neuem DeepSeek-Modell erneut deutlich",
      sec30: "Am Freitag, 16.10., schlossen S&P 500 (−1,1 % auf 7.659,44, Wochenverlust rund −1,9 %) und vor allem der Nasdaq Composite (−2,1 % auf 26.140,03, Wochenverlust rund −4,5 %) im Minus, weil die Sorge um eine mögliche Überbewertung von KI-Investitionen anhielt. Der Philadelphia-Halbleiterindex SOX fiel den achten Tag in Folge. DAX (+0,94 % auf 25.622,61 Punkte) und Euro Stoxx 50 (+0,58 % auf 6.204,23) legten dagegen zu, gestützt von Rüstungswerten wie Rheinmetall und einer Erholung bei ASML. Am Montag, 19.10., fielen asiatische Märkte erneut deutlich: Der Nikkei gab zeitweise mehr als 2 % ab, der Kospi öffnete rund 1,7 % niedriger und verlor zeitweise bis zu 3,2 %, nachdem der chinesische KI-Anbieter DeepSeek am Wochenende ein neues, speichereffizienteres Modell vorgestellt hatte.",
      blocks: [
        { h: "Wie haben sich die US-Indizes am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones fiel um 0,3 % (−175,28 Punkte) auf 52.002,41 Punkte, der S&P 500 um 1,1 % (−84,62 Punkte) auf 7.659,44 Punkte – die schlechteste Woche seit Juni mit rund −1,9 %. Der Nasdaq Composite verlor 2,1 % (−572,99 Punkte) auf 26.140,03 Punkte; der Nasdaq 100 verlor rund 2,50 % auf 29.187,55 Punkte und lag damit rund 6,52 % unter seinem Hoch vom 6.10.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:sp500" }] },
          { tag: "fakt", text: "Der Philadelphia-Halbleiterindex SOX fiel am Freitag um 3,83 % auf 11.137,29 Punkte – der achte Verlusttag in Folge, die erste solche Serie seit Oktober 2008, mit einem Rückgang von rund 16 % seit dem 6.10.",
            ask: [{ label: "Mehr zum Chip-Ausverkauf und CoreWeave", ref: "s:13" }] }
        ]},
        { h: "Warum legten DAX und Euro Stoxx 50 dagegen zu?", items: [
          { tag: "fakt", text: "Der DAX stieg um 0,94 % (+239,99 Punkte) auf 25.622,61 Punkte, der Euro Stoxx 50 um 0,58 % (+36 Punkte) auf 6.204,23 Punkte." },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte vor allem Rüstungswerte wie Rheinmetall, gestützt von Analystenerwartungen weiterer Aufträge aus dem Bundeshaushalt zum Jahresende, sowie eine Erholung des Chipausrüsters ASML.",
            ask: [{ label: "Mehr zu den Rüstungsaufträgen", ref: "s:9" }] }
        ]},
        { h: "Was geschah am Montag in Asien, und warum?", items: [
          { tag: "fakt", text: "Der Nikkei fiel am Montag, 19.10., zeitweise um mehr als 2 % auf unter 64.000 Punkte, der Kospi öffnete rund 1,7 % tiefer bei 5.572,10 Punkten und verlor zeitweise bis zu 3,2 %; Samsung und SK Hynix gaben zeitweise über 4 % ab, grenzten die Verluste im Tagesverlauf aber etwas ein.",
            ask: [{ label: "Mehr zu DeepSeek und dem Chip-Ausverkauf", ref: "s:13" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte ein neues, nach eigenen Angaben deutlich speichereffizienteres KI-Modell des chinesischen Anbieters DeepSeek, das Sorgen vor einem möglichen Rückgang der Speicherchip-Nachfrage erneut schürte – nach einer Vorwoche, in der Samsung und SK Hynix bereits ihre schlechteste Woche seit 2008 verzeichnet hatten." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass US-Indizes und europäische Indizes am Freitag in entgegengesetzte Richtungen liefen und sich der Ausverkauf bei asiatischen Chipwerten am Montag fortsetzte, zeigt, wie unterschiedlich Rüstungs- und Technologiewerte derzeit auf die Nachrichtenlage reagieren. Da der europäische Kassahandel am Montagmorgen noch nicht begonnen hat, bleibt der Freitagsschluss bis zur Eröffnung gültig. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Hintergründe des Chip-Ausverkaufs werden in Meldung 13 vertieft, die Fed-Rede in Meldung 2, die Rüstungsaufträge in Meldung 9, der Ölpreis in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ABC News/AP: How major US stock indexes fared Friday", url: "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951" },
        { title: "ms-aktuell.de: DAX-Schluss 16.10.2026", url: "https://ms-aktuell.de/welt/dax-schluss-16-10-2026/" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 closes 36 points higher as Rheinmetall leads", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-36-points-higher-as-rheinmetall-leads/70342765" },
        { title: "247wallst.com: A 2.1% drop at the Tokyo open sets the tone for the Asia session", url: "https://247wallst.com/cards/a-2-1-drop-at-the-tokyo-open-sets-the-tone-for-the-asia-ses-n225-market-bell-01m58s8kqz6jcqsh9kx6bbzhsr" },
        { title: "Korea Herald: Seoul stocks open sharply lower after US tech sell-off", url: "https://www.koreaherald.com/article/10906650" },
        { title: "kucoin.com: Asian chip stocks drop amid AI funding concerns and DeepSeek model update", url: "https://www.kucoin.com/news/flash/asian-chip-stocks-drop-amid-ai-funding-concerns-and-deepseek-model-update" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED WARSH BLACKOUT */
    {
      id: "fed-warsh-blackout-zinswetten-10-19", cats: ["markets", "economy"], when: "Warsh-Auftritt IWF-Bangkok 16.10. · FOMC-Blackout 17.–29.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "Fed bleibt in der Blackout-Periode vor der Oktober-Sitzung, Marktwetten zeigen weiterhin überwiegend eine Zinspause – mit großen Abweichungen zwischen den Quellen",
      sec30: "Fed-Chef Kevin Warsh hatte am 16.10. bei einem von IWF-Chefin Georgieva moderierten Gespräch in Bangkok keine Aussage zur Geldpolitik gemacht, außer der allgemeinen Formel, die Fed werde „price stability” liefern; seit 17.10., 0 Uhr Eastern Time, gilt die FOMC-Blackout-Periode bis zum 29.10., einen Tag nach der Sitzung am 27./28.10. Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen überwiegend eine Zinspause im Oktober ein, mit Werten für die Erhöhungswahrscheinlichkeit zwischen rund 13 und 16 %; einzelne Quellen nennen davon abweichende, teils deutlich höhere Werte bis zu 42 %, was die Unsicherheit in der Markteinschätzung zeigt. Ein möglicher Regierungsshutdown wurde bereits im September abgewendet, die US-Haushaltsfinanzierung läuft bis zum 11.12.; reguläre Konjunkturdaten erschienen deshalb im Oktober planmäßig.",
      blocks: [
        { h: "Was sagte Fed-Chef Warsh in Bangkok?", items: [
          { tag: "position", text: "Kevin Warsh machte am 16.10. in Bangkok laut mehreren Quellen keine Aussage zur Geldpolitik vor der Sitzung am 27./28.10. und sagte laut einer Quelle sinngemäß, er wolle Sitzungen nicht vorab festlegen; zur Künstlichen Intelligenz sagte er, sie werde mittelfristig Produktivität und Wohlstand steigern, der Weg dorthin werde aber „very bumpy” (sehr holprig). Er sprach zudem von einer „synchronous tightening” der Notenbanken weltweit.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet die FOMC-Blackout-Periode?", items: [
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, begann am 17.10., 0 Uhr Eastern Time, und dauert bis zum 29.10., einen Tag nach der Sitzung am 27./28.10.; regulär geplante Wirtschaftsdatenveröffentlichungen sind davon nicht betroffen." }
        ]},
        { h: "Wie schätzen Marktplattformen die Oktober-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Nach Angaben von CME FedWatch, Kalshi und Polymarket lag die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung im Oktober zuletzt überwiegend zwischen rund 13 und 16 % (Halten entsprechend rund 84 bis 87 %); eine einzelne Quelle nennt davon deutlich abweichend rund 42 % Erhöhungswahrscheinlichkeit nach der heißen September-Inflationszahl. Diese Diskrepanz lässt sich aus den verfügbaren Quellen nicht auflösen und wird hier als unsicher gekennzeichnet.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Gibt es neue US-Konjunkturdaten, und läuft ein Regierungsshutdown?", items: [
          { tag: "fakt", text: "Ein möglicher Shutdown zum 1.10. wurde bereits durch eine Übergangsfinanzierung abgewendet, die am 2.9. unterschrieben wurde und bis zum 11.12. läuft; dadurch erschienen US-Konjunkturdaten im Oktober planmäßig, etwa die September-Einzelhandelsumsätze am 15.10. Spezifisch neue Arbeitsmarkt- oder Inflationsdaten seit dem 17.10. wurden in der Recherche nicht gefunden; die nächsten regulären Veröffentlichungen fallen in die laufende Blackout-Periode." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung für die Oktober-Sitzung je nach Plattform und Zeitpunkt zwischen rund 13 und 42 % für eine Zinserhöhung schwankt, zeigt, wie unterschiedlich Anleger die Lage nach der heißen September-Inflationszahl und Warshs bewusst unverbindlichem Auftritt einschätzen; die Mehrheit der Quellen geht weiterhin von einer Zinspause aus." }
        ]}
      ],
      reaction: "Die Marktreaktion wird in Meldung 1 behandelt, die EZB-Seite in Meldung 4, die US-Renditen in den Zahlen oben.",
      terms: ["leitzins", "basispunkt", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "CNBC: Fed's Warsh sees AI boosting productivity but gives no signal on next rate hike", url: "https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html" },
        { title: "Axios: Warsh signals steady Fed outlook despite inflation jump", url: "https://www.axios.com/2026/10/16/warsh-federal-reserve-interest-rates" },
        { title: "eco3min.fr: Fed Blackout Period – Calendar and Exact Rule", url: "https://eco3min.fr/en/fed-blackout-period-calendar/" },
        { title: "predictionmarketspicks.com: Fed Rate Odds for October 2026", url: "https://predictionmarketspicks.com/articles/fed-rate-october-2026-odds-warsh-kalshi-polymarket-futures" },
        { title: "Yahoo Finance: Traders give Warsh a 42% chance", url: "https://finance.yahoo.com/economy/policy/articles/traders-warsh-42-chance-doing-082651946.html" },
        { title: "leadingage.org: Averting shutdown, Congress passes funding measure through December 11", url: "https://leadingage.org/averting-shutdown-congress-passes-funding-measure-through-december-11/" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-19", cats: ["markets"], when: "Stand Fr 16.10./Mo-Vormittag 19.10.2026",
      headline: "Euro gibt am Montag leicht nach, Gold stabilisiert sich nahe 4.170 Dollar, Bitcoin legt nach ruhigem Wochenende leicht zu",
      sec30: "Der Euro handelte am Montagvormittag mit rund 1,1230 Dollar etwas schwächer als der EZB-Referenzkurs vom Freitag (1,1253 Dollar, der fünfte Anstieg in Folge). Gold war zur Wochenmitte wegen Spekulation auf höhere US-Zinsen nach heißen Inflationsdaten auf rund 4.073 Dollar gefallen und hat sich seither bei rund 4.170 Dollar je Feinunze stabilisiert. Bitcoin, das auch am Wochenende weiterhandelt, bewegte sich nach einem ruhigen Wochenende (Spanne rund 80.655 bis 81.961 Dollar) am Montagvormittag leicht aufwärts auf rund 82.000 bis 82.800 Dollar – weiterhin rund 35 % unter seinem Allzeithoch von etwa 126.080 Dollar.",
      blocks: [
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs stieg von 1,1208 Dollar am Donnerstag auf 1,1253 Dollar am Freitag – der fünfte Anstieg in Folge; am Montagvormittag handelte der Euro am freien Devisenmarkt mit rund 1,1230 Dollar etwas schwächer. Die EZB veröffentlicht ihren offiziellen Referenzkurs für Montag erst am Nachmittag.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold war zur Wochenmitte auf rund 4.073 Dollar je Feinunze gefallen, wegen Spekulation auf höhere US-Zinsen nach einer heißer als erwartet ausgefallenen September-Inflationszahl, und hat sich seither bei rund 4.170 Dollar stabilisiert.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund für die Stabilisierung nennen Berichte die weitgehend unveränderte US-Rendite und die anhaltende Erwartung einer Fed-Zinspause im Oktober." }
        ]},
        { h: "Wie entwickelt sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Nach einem ruhigen Wochenende in einer Spanne von rund 80.655 bis 81.961 Dollar zog Bitcoin am Montagvormittag leicht an auf rund 82.000 bis 82.800 Dollar, je nach Quelle; eine Quelle beschreibt den Kurs dagegen als weiterhin bei rund 81.000 Dollar „klebend” – die Angaben weichen leicht voneinander ab.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold sich nach dem Rückgang zur Wochenmitte stabilisiert hat und Bitcoin leicht zulegt, während der Euro minimal nachgibt, passt zu einer Phase, in der sich die Markterwartung für die Fed-Politik seit Freitag kaum verändert hat. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Zinsentwicklung wird in Meldung 2 behandelt, die Sorgen um KI-nahe Werte in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "investing.com: EUR/USD Kurs", url: "https://de.investing.com/currencies/eur-usd" },
        { title: "gold.de: Goldpreis-Entwicklung", url: "https://www.gold.de/kurse/goldpreis/entwicklung/" },
        { title: "interactivecrypto.com: Bitcoin/USD – 34,95 % unter dem Allzeithoch", url: "https://www.interactivecrypto.com/de/bitcoin-usd-btc-34-95-unter-dem-allzeithoch-trotz-stabilisierung-bei-82-000-usd" },
        { title: "wallstreet-online.de: Bitcoin-Prognose Oktober 2026", url: "https://www.wallstreet-online.de/nachricht/21543524-bitcoin-prognose-oktober-2026-kaufen-wale-2-75-milliarden-dollar-kurs-81-000-dollar-klebt" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/SCHNABEL-NACHFOLGE/FRANKREICH */
    {
      id: "ezb-schnabel-nachfolge-frankreich-haushalt-10-19", cats: ["economy"], when: "Bewerbungsfrist Schnabel-Nachfolge 28.10. · nächste EZB-Zinsentscheidung 29.10. · Nationalversammlung-Debatte seit 13.10.2026",
      headline: "Bewerbungsfrist für Schnabel-Nachfolge im EZB-Direktorium läuft bis 28.10., Frankreichs Haushaltsdebatte bleibt umstritten",
      sec30: "Die Bewerbungsfrist für die Nachfolge von Isabel Schnabel im EZB-Direktorium läuft am 28.10. ab; Schnabel wechselt zum 4.1.2027 zum IWF, ihr EZB-Austritt wird am 3.1.2027 wirksam. Bundesfinanzminister Klingbeil hat noch keinen deutschen Kandidaten benannt, will aber laut Berichten „bald” einen Personalvorschlag machen. Die EZB hält ihren Einlagensatz seit der Erhöhung im September unverändert bei 2,50 %; Einschätzungen zur Sitzung am 29.10. gehen auseinander. In Frankreich debattiert die Nationalversammlung weiter über den Haushalt 2027 von Ministerpräsident Lecornu; der Finanzausschuss lehnte den Entwurf bereits vorab mehrheitlich ab, Lecornu schließt den Einsatz von Verordnungen bei anhaltender Blockade nicht aus.",
      blocks: [
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die Bewerbungsfrist für die Nachfolge von Isabel Schnabel im EZB-Direktorium wurde von den Euro-Finanzministern auf den 28.10. festgelegt; eine Entscheidung soll bei einem Treffen im November fallen. Schnabel wechselt zum 4.1.2027 zum IWF, wo sie die Abteilung für Geld- und Kapitalmärkte leiten wird; ihr EZB-Austritt wird am 3.1.2027 wirksam.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Bundesfinanzminister Klingbeil hat bislang keinen deutschen Kandidaten für den Posten benannt; laut Berichten plant er „bald” einen Personalvorschlag." }
        ]},
        { h: "Wie ist der Stand bei der EZB-Zinsentscheidung am 29.10.?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Im Oktober werden keine neuen EZB-Gesamtwirtschaftsprojektionen veröffentlicht." },
          { tag: "unbestaetigt", text: "Einschätzungen zur Sitzung am 29.10. gehen in den verfügbaren Quellen auseinander: Eine Einschätzung erwartet vorerst keine weitere Zinsanhebung, eine andere nennt (Stand 24.9.) rund 60 % Wahrscheinlichkeit für eine weitere Erhöhung. Lagarde hatte Ende September zu „maßvollen Zinserhöhungen” aufgerufen." }
        ]},
        { h: "Wie ist der Stand beim französischen Haushalt 2027?", items: [
          { tag: "fakt", text: "Die Regierung Lecornu hatte am 1.10. ein Konsolidierungspaket von rund 54 Mrd. Euro vorgelegt, um das Defizit 2027 auf 5,0 % des BIP zu senken; der Finanzausschuss der Nationalversammlung lehnte den Entwurf bereits vorab mit klarer Mehrheit ab. Die Plenardebatte zum Einnahmenteil läuft seit dem 13.10. weiter." },
          { tag: "position", text: "Lecornu, der im Parlament keine absolute Mehrheit hat, schließt den Einsatz von Verordnungen (Ordonnances) bei anhaltender Blockade nicht aus; Widerstand kommt vor allem von linken Abgeordneten gegen Kürzungen bei Sozialausgaben und Renten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die EZB-Personalfrage als auch die französische Haushaltsdebatte noch offen sind, während die EZB-Zinsentscheidung am 29.10. kurz nach der Fed-Sitzung folgt, zeigt, wie viele europäische Wirtschaftsfragen Ende Oktober zusammenlaufen." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 6.",
      terms: ["leitzins", "inflation", "schuldenbremse"],
      followups: ["e:ecb-hike", "e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel bis 28. Oktober", url: "https://www.onvista.de/news/2026/10-09-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-bis-28-oktober-0-20-26562225" },
        { title: "Handelsblatt: Nachfolge EZB – Nominierungsfrist für Schnabel-Nachfolge steht", url: "https://www.handelsblatt.com/finanzen/nachfolge-ezb-nominierungsfrist-fuer-schnabel-nachfolge-steht/100260974.html" },
        { title: "wz.de: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.wz.de/wirtschaft/rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag_aid-156683347" },
        { title: "finanztip.de: Zinsentwicklung", url: "https://www.finanztip.de/zinsentwicklung/" },
        { title: "IndexBox: France's 2027 budget – Lecornu targets €54bn in cuts as deficit fight looms", url: "https://www.indexbox.io/blog/frances-2027-budget-lecornu-targets-54bn-in-cuts-as-deficit-fight-looms/" },
        { title: "nachrichten.fr: Lecornu hält Verordnungen für den Haushalt 2027 offen", url: "https://nachrichten.fr/lecornu-halt-verordnungen-fur-den-haushalt-2027-offen/" }
      ]
    },

    /* 5 DEUTSCHLAND: BERLIN-KOALITION ENTSCHEIDUNG */
    {
      id: "berlin-koalition-entscheidung-spd-gruene-linke-10-19", cats: ["germany"], when: "Grüne-Parteitag und SPD-Landesvorstand entscheiden 19.10. abends · Linke-Parteitag 31.10.2026",
      headline: "SPD und Grüne entscheiden am Montagabend über Koalitionsverhandlungen mit der Linken in Berlin, 20 SPD-Abgeordnete sprechen sich zuvor dagegen aus",
      sec30: "Nach dem Abschluss der Sondierungsgespräche am 17.10. entscheiden die Berliner Grünen am Montagabend auf einem kleinen Parteitag (20 Uhr) und der SPD-Landesvorstand per Digitalabstimmung darüber, ob sie mit der Linken in Koalitionsverhandlungen eintreten. Zuvor hatten sich 20 SPD-Bundestagsabgeordnete in einer gemeinsamen Erklärung gegen ein Bündnis ihrer Partei mit der Linken ausgesprochen. Die Linke selbst entscheidet wegen der zweiwöchigen Berliner Herbstferien erst am 31.10. auf einem Parteitag; bei Zustimmung aller drei Parteien könnten die eigentlichen Koalitionsverhandlungen frühestens Anfang November beginnen. CDU-Landeschef Evers und Bundeskanzler Merz kritisierten die Pläne.",
      blocks: [
        { h: "Was wurde beschlossen oder vorgeschlagen?", items: [
          { tag: "fakt", text: "SPD, Grüne und Die Linke hatten sich am 17.10. auf ein gemeinsames Sondierungspapier mit dem Titel „Mehr gemeinsam, mehr Berlin” verständigt. Am Montagabend, 19.10., entscheiden die Grünen auf einem eigens einberufenen kleinen Parteitag (20 Uhr) und der SPD-Landesvorstand per Digitalabstimmung darüber, ob sie in Koalitionsverhandlungen eintreten.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was würde sich konkret ändern?", items: [
          { tag: "fakt", text: "Das Sondierungspapier sieht vor, private Wohnungsunternehmen mit mehr als 10.000 Wohnungen oberhalb dieser Grenze gegen Entschädigung in eine öffentlich-rechtliche Anstalt zu überführen – betroffen wären laut Linke-Fraktionsco-Chefin Elif Eralp fünf große Wohnungsunternehmen, darunter Vonovia, mit zusammen rund 160.000 Wohnungen. Weitere Punkte sind ein Mietendeckel von 2 % und 100.000 neue Wohnungen." }
        ]},
        { h: "Warum wird das vorgeschlagen?", items: [
          { tag: "position", text: "Eralp begründete die geplante Vergesellschaftung so: „Unser Ziel ist, dass durch die Vergesellschaftung die Mieten nicht weiter steigen.” Die drei Parteien verweisen zudem auf die angespannte Lage auf dem Berliner Wohnungsmarkt." }
        ]},
        { h: "Wer unterstützt die Pläne, und wer kritisiert sie?", items: [
          { tag: "position", text: "SPD, Grüne und Die Linke stellen das Sondierungsergebnis als Grundlage für eine Zusammenarbeit dar. Dagegen sprachen sich 20 SPD-Bundestagsabgeordnete in einer gemeinsamen Erklärung gegen ein Bündnis ihrer Partei mit der Linken aus." },
          { tag: "position", text: "CDU-Landeschef Stefan Evers bezeichnete das Ergebnis als „Kapitulationserklärung” von SPD und Grünen; Bundeskanzler Friedrich Merz sagte: „Wer die politische Mitte stärken will, darf nicht mit Linksradikalen verhandeln”, und forderte die Parteien auf, diesen Weg zu beenden." }
        ]},
        { h: "Welche nächsten Schritte und Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Die Linke entscheidet wegen der zweiwöchigen Berliner Herbstferien erst am 31.10. auf einem Parteitag über die Sondierungsergebnisse. Stimmen alle drei Parteien zu, könnten die eigentlichen Koalitionsverhandlungen frühestens Anfang November beginnen." }
        ]}
      ],
      reaction: "Die Bundesebene wird in Meldung 6 behandelt.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Abendzeitung München: Zwei Parteien in Berlin entscheiden über Koalitionsgespräche", url: "https://www.abendzeitung-muenchen.de/politik/zwei-parteien-in-berlin-entscheiden-ueber-koalitionsgespraeche-art-1166678" },
        { title: "infranken.de: Rot-Grün-Rot in Berlin rückt näher – Kritik der CDU", url: "https://www.infranken.de/deutschland/rot-gruen-rot-in-berlin-rueckt-naeher-kritik-der-cdu-art-6404255" },
        { title: "news.de: Merz geht auf SPD und Grüne wegen möglichem Linksbündnis los", url: "https://www.news.de/politik/860102806/merz-geht-auf-spd-und-gruene-wegen-moeglichem-linksbuendnis-los-rot-gruen-rot-in-berlin-rueckt-naeher-kritik-der-cdu/1/" },
        { title: "ZDFheute: Sondierung in Berlin beendet – Linke, Grüne und SPD einig", url: "https://www.zdfheute.de/politik/deutschland/sondierungen-berlin-linke-gruene-spd-100.html" }
      ]
    },

    /* 6 DEUTSCHLAND: BUND HAUSHALT/RENTE/RECHNUNGSHOF */
    {
      id: "bund-haushalt-rente-rechnungshof-pflegereform-10-19", cats: ["germany"], when: "Haushaltseckpunkte Bundestag 12.10. · Bundesrechnungshof-Kritik 17.10. · VdK-Kritik Pflegereform Oktober 2026",
      headline: "Bundeshaushalt 2027 sieht 118,7 Milliarden Euro neue Schulden vor, Bundesrechnungshof und Sozialverbände kritisieren Finanzplanung und Rentenzuschuss-Kürzung",
      sec30: "Bundesfinanzminister Klingbeil legte am 12.10. den Haushaltsentwurf 2027 vor: Gesamtausgaben von 555,4 Mrd. Euro, eine Nettokreditaufnahme von 118,7 Mrd. Euro und ein Verteidigungsetat von rund 109,7 Mrd. Euro – ein Drittel mehr als 2026. Der Bundesrechnungshof verschärfte im Oktober seine Kritik an der Schuldenpolitik und weist für die Haushaltsplanung bis 2030 einen Konsolidierungsbedarf von 108 Mrd. Euro aus. Klingbeil plant zudem, den Bundeszuschuss zur Rentenversicherung um 4 Mrd. Euro zu kürzen; nach Berechnungen der Rentenversicherung könnte das den Beitragssatz bereits ab Juli 2027 um 0,2 Punkte steigen lassen. Der VdK kritisiert zusätzlich eine im Rahmen der Pflegereform geplante Begrenzung zusätzlicher Rentenpunkte für pflegende Angehörige.",
      blocks: [
        { h: "Was wurde beim Bundeshaushalt 2027 vorgeschlagen?", items: [
          { tag: "fakt", text: "Der Haushaltsentwurf 2027 sieht Gesamtausgaben von 555,4 Mrd. Euro vor; die Nettokreditaufnahme soll auf 118,7 Mrd. Euro steigen. Der Verteidigungsetat soll auf rund 109,7 Mrd. Euro steigen – ein Drittel mehr als 2026.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Was würde sich bei der Rente konkret ändern?", items: [
          { tag: "fakt", text: "Klingbeil plant, den Bundeszuschuss zur gesetzlichen Rentenversicherung im kommenden Jahr um 4 Mrd. Euro zu kürzen. Nach Berechnungen der Rentenversicherung könnte dies den Beitragssatz bereits ab Juli 2027 um 0,2 Prozentpunkte steigen lassen, statt erst Mitte 2028 wie bisher erwartet.",
            ask: [{ label: "Wie finanziert sich die Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Zusätzlich plant die Pflegereform, die Zahl zusätzlicher Rentenpunkte für pflegende Angehörige im Rentenalter ab 2027 zu begrenzen; nach VdK-Angaben wären davon rund 39.000 Personen pro Jahr betroffen, bei einem Einsparvolumen von rund 150 Mio. Euro." }
        ]},
        { h: "Warum werden diese Schritte vorgeschlagen?", items: [
          { tag: "einordnung", text: "Die Bundesregierung begründet die Haushaltsplanung mit gestiegenen Verteidigungsausgaben und der Notwendigkeit, den Bundeshaushalt insgesamt zu konsolidieren." }
        ]},
        { h: "Wer kritisiert die Pläne, und womit begründet er das?", items: [
          { tag: "position", text: "Der Bundesrechnungshof verschärfte im Oktober seine Kritik an der Schuldenpolitik und weist für die Haushaltsplanung bis 2030 einen Konsolidierungsbedarf von 108 Mrd. Euro aus." },
          { tag: "position", text: "Grünen-Haushaltspolitiker Sebastian Schäfer kritisierte: „Dieses Land hat einen besseren Haushalt verdient. Dieses Land hat eine bessere Regierung verdient.”" },
          { tag: "position", text: "VdK-Präsidentin Verena Bentele bezeichnete die geplante Begrenzung der Rentenpunkte für pflegende Angehörige angesichts des geringen Einsparvolumens als „hochgradig unsolidarisch”. Arbeitgeber, Gewerkschaften und die Rentenversicherung warnen zudem vor einer wachsenden Belastung der Beitragszahler durch die Kürzung des Bundeszuschusses." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "unbestaetigt", text: "Aktuelle Wahlumfragen zeigen weiterhin Unterschiede zwischen den Instituten: INSA (17.10.) sieht die AfD bei 29 %, CDU/CSU bei 18 %, Grüne bei 14 %, SPD bei 13 %, Linke bei 11 %; Forsa (6.10.) sieht die AfD bei 26 %, CDU/CSU bei 19 %, Grüne bei 17 %, SPD bei 14 %. Der Institutsmittelwert (Stand 17.10.) liegt bei AfD 27,6 %, CDU/CSU 19,6 %, Grüne 15,4 %, SPD 13,2 %.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]}
      ],
      reaction: "Die Berliner Koalitionsbildung wird in Meldung 5 behandelt.",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "ZDFheute: Klingbeil legt Etatpläne 2027 im Bundestag vor – die Eckpunkte", url: "https://www.zdfheute.de/politik/deutschland/haushalt-entwurf-2027-eckpunkte-klingbeil-100.html" },
        { title: "ZDFheute: Klingbeils Haushaltsentwurf überzeugt Opposition nicht", url: "https://www.zdfheute.de/politik/deutschland/haushaltsentwurf-2027-bundestag-klingbeil-kritik-opposition-100.html" },
        { title: "klamm.de: Bundesrechnungshof kritisiert wachsende Finanzlücke", url: "https://www.klamm.de/news/bundesrechnungshof-kritisiert-wachsende-finanzluecke-21N179217469033.html" },
        { title: "Versicherungsbote: Rentenversicherung – Kritik an Kürzung der Bundeszuschüsse wächst", url: "https://www.versicherungsbote.de/id/4949770/Rentenversicherung-Kritik-an-Kuerzung-der-Bundeszuschuesse-waechst-/" },
        { title: "ad-hoc-news: Pflegereform – VdK kritisiert Kürzung für 39.000 Rentner", url: "https://www.ad-hoc-news.de/politik/pflegereform-vdk-kritisiert-kuerzung-fuer-39-000-rentner/70271160" },
        { title: "dawum.de: Bundestagswahl-Umfragen im Wahltrend", url: "https://dawum.de/" }
      ]
    },

    /* 7 INTERNATIONAL/GEOPOLITIK: EU-GIPFEL/UKRAINE/DIPLOMATIE */
    {
      id: "eu-gipfel-ukraine-drohnenangriffe-trump-selenskyj-putin-xi-10-19", cats: ["world", "geo"], when: "EU-Gipfel 15./16.10. ohne Entscheidung · ukrainischer Großangriff Nacht 17./18.10. · russischer Angriff auf Kiew Nacht 18./19.10.2026",
      headline: "EU-Gipfel bleibt ohne Entscheidung über russische Vermögenswerte, Ukraine und Russland greifen sich gegenseitig massiv an, Putin schlägt Dreier-Gipfel mit Trump und Xi vor",
      sec30: "Der EU-Gipfel in Brüssel endete am 16.10. erneut ohne Entscheidung über die Nutzung von rund 185 bis 210 Mrd. Euro eingefrorener russischer Zentralbankgelder; die Staats- und Regierungschefs beauftragten die EU-Kommission, bis zum nächsten Gipfel Vorschläge zur Deckung der ukrainischen Finanzierungslücke für 2027 (rund 78,1 Mrd. Dollar) vorzulegen. In der Nacht zum 18.10. startete die Ukraine einen ihrer größten Drohnenangriffe des Jahres auf Russland (laut russischen Angaben mehr als 1.000 Drohnen, Ziel unter anderem ein Öl-Terminal in St. Petersburg); Präsident Trump kritisierte das scharf, da die Ukraine damit eine von ihm vermittelte Energie-Waffenruhe gebrochen habe. In der Nacht zum 19.10. traf ein russischer Angriff Kiew, tötete eine Frau und beschädigte eine U-Bahn-Station. Laut Berichten schlug Kreml-Chef Putin zudem einen möglichen Dreier-Gipfel mit Trump und Chinas Staatschef Xi am Rande des APEC-Treffens im November vor – ohne Beteiligung der Ukraine.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der EU-Gipfel endete am 16.10. ohne Einigung über die Nutzung der eingefrorenen russischen Vermögenswerte; die EU-Kommission wurde beauftragt, bis zum nächsten Europäischen Rat Vorschläge zur Deckung der ukrainischen Finanzierungslücke für 2027 vorzulegen. Ein konkreter neuer Gipfeltermin für eine endgültige Entscheidung war zum Redaktionsschluss nicht auffindbar.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:14" }] }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "Belgiens Premierminister Bart De Wever hält an seinem Veto fest und verlangt vollständige Mutualisierung der rechtlichen und finanziellen Risiken durch alle EU-Staaten, um Belgien vor möglichen russischen Vergeltungsmaßnahmen zu schützen. Bundeskanzler Merz hatte Belgien bereits angeboten, dass Deutschland 25 % des Gesamtdarlehens absichert – bislang ohne Durchbruch." },
          { tag: "fakt", text: "Die Ukraine benötigt für 2027 zusätzlich rund 78,1 Mrd. Dollar, davon rund 45,3 Mrd. Dollar für Verteidigungsausgaben und rund 32,8 Mrd. Dollar für laufende Staatsausgaben." }
        ]},
        { h: "Was geschah bei den gegenseitigen Angriffen am Wochenende?", items: [
          { tag: "fakt", text: "In der Nacht zum 18.10. setzte die Ukraine nach russischen Angaben mehr als 1.000 Drohnen gegen Russland ein, Ziele waren unter anderem ein Öl-Terminal in St. Petersburg, ein Logistikzentrum und ein Rechenzentrum; Russlands Verteidigungsministerium meldete, 1.015 Drohnen abgeschossen zu haben, eine Person sei getötet worden." },
          { tag: "fakt", text: "In der Nacht zum 19.10. beschädigte ein russischer Angriff mit ballistischen Raketen, Marschflugkörpern und Drohnen eine U-Bahn-Station am linken Dnipro-Ufer in Kiew sowie ein 25-stöckiges Wohnhaus; laut Bürgermeister Klitschko wurde eine 21-jährige Frau getötet, drei weitere Personen wurden verletzt." },
          { tag: "position", text: "Präsident Selenskyj erklärte, Russland habe seit der von Trump verkündeten Energie-Waffenruhe bereits 76 Mal gezielt die ukrainische Energie-, Öl- und Gasinfrastruktur angegriffen, mit dem Ziel, die Ukraine vor dem Winter ohne Heizung und Strom zu lassen." }
        ]},
        { h: "Welche diplomatischen Entwicklungen gab es?", items: [
          { tag: "position", text: "Präsident Trump kritisierte den ukrainischen Großangriff, nachdem er zuvor ukrainische Angriffe auf russische Ölraffinerien als „disgrace” bezeichnet hatte; Berichten zufolge will das Weiße Haus steigende Öl- und Dieselpreise vor den Zwischenwahlen am 3.11. dämpfen." },
          { tag: "fakt", text: "Präsident Selenskyj sprach am 18.10. mit Trumps Gesandten Steve Witkoff und Jared Kushner über ein mögliches neues Treffen zur Friedensdiplomatie, möglicherweise noch in dieser Woche." },
          { tag: "unbestaetigt", text: "Laut Berichten schlug Kreml-Chef Putin einen Dreier-Gipfel mit Trump und Chinas Staatschef Xi Jinping vor, möglicherweise am Rande des APEC-Gipfels am 18./19.11. in Shenzhen – ohne Beteiligung Selenskyjs. Ein US-Vertreter erklärte, Trump habe dem noch nicht zugestimmt, stehe dem Vorschlag aber offen gegenüber; ein offizieller Termin liegt nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EU die Entscheidung über die russischen Gelder erneut vertagte, während sich zugleich die gegenseitigen Angriffe fortsetzten und ein möglicher Trump-Putin-Xi-Gipfel ohne die Ukraine im Raum steht, zeigt, wie eng die Finanzierungsfrage für die Ukraine mit dem anhaltenden militärischen und diplomatischen Geschehen verbunden ist." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in den Meldungen 14 und 15 vertieft, die deutsche Verteidigungspolitik in Meldung 9.",
      terms: [],
      followups: ["e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "inkl.com: Belgium blocks €185 billion deal as Ukraine faces a $78 billion funding cliff", url: "https://www.inkl.com/news/belgium-blocks-eu185-billion-deal-as-ukraine-faces-a-78-billion-funding-cliff-in-next-year" },
        { title: "CNN: Ukraine defies Trump and launches one of its biggest drone attacks on Russia this year", url: "https://edition.cnn.com/2026/10/18/europe/ukraine-russia-drone-attack-trump-intl" },
        { title: "Deccan Herald: Russian strike kills woman, hits Kyiv subway station, mayor says", url: "https://www.deccanherald.com/world/russia/russian-strike-kills-woman-hits-kyiv-subway-station-mayor-says-4187713" },
        { title: "Kyiv Independent: Russian ballistic missiles slam Kyiv right as air raid alarms sound", url: "https://kyivindependent.com/russian-ballistic-missiles-slam-kyiv-right-as-air-raid-alarms-sound/" },
        { title: "Bloomberg: Zelenskyy says speaking to Witkoff, Kushner about peace meeting", url: "https://www.bloomberg.com/news/articles/2026-10-18/zelenskyy-says-speaking-to-witkoff-kushner-about-peace-meeting" },
        { title: "CNBC: Putin floats Trump-Xi summit on Ukraine war, energy", url: "https://www.cnbc.com/2026/10/19/putin-trump-xi-ukraine-war-energy.html" }
      ]
    },

    /* 8 GEOPOLITIK: HORMUZ/RIAD */
    {
      id: "hormuz-iran-centcom-riad-wiedereroeffnung-10-19", cats: ["geo"], when: "Iranische Minen-Meldung 17./18.10. · CENTCOM-Dementi 17./18.10. · Flughafen Riad wiedereröffnet 18.10.2026",
      headline: "Iran meldet zwei weitere Tanker-Zwischenfälle in der Straße von Hormus, US-Streitkräfte weisen die Minen-Darstellung als Desinformation zurück – Flughafen Riad wiedereröffnet",
      sec30: "Die iranische Revolutionsgarde (IRGC) meldete am 17./18.10., gleich zwei Supertanker mit jeweils rund 2 Mio. Barrel Rohöl seien in ihrer „Sperrzone” im Golf von Oman auf Minen gelaufen und in Brand geraten; die IRGC behauptete zudem, die Schiffe hätten ihre Navigationssysteme abgeschaltet und seien „mit US-Unterstützung” gefahren. Die US-Streitkräfte (CENTCOM) widersprachen ausdrücklich: Kein Schiff sei auf eine Mine gelaufen, es handle sich um „yet another IRGC attempt to intimidate regional commercial shipping through disinformation”. Unabhängig bestätigt sind dagegen zwei separate Tanker-Zwischenfälle vor der saudischen Küste bei Al-Jubail, die die britische Seefahrtsbehörde UKMTO meldete. Der Flughafen Riad wurde am 18.10. nach der Schließung infolge der Angriffe vom 10./11.10. wiedereröffnet; mehrere Fluggesellschaften setzen ihre Streckenaussetzungen aber bis in den späteren Oktober fort.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "unbestaetigt", text: "Die iranische Revolutionsgarde meldete am 17./18.10., zwei Supertanker seien in der Straße von Hormus auf Minen gelaufen und in Brand geraten; diese Angabe stammt von einer Konfliktpartei.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "Die US-Streitkräfte (CENTCOM) erklärten dagegen ausdrücklich: „No ships have hit mines in the Strait of Hormuz”, es handle sich um „yet another IRGC attempt to intimidate regional commercial shipping through disinformation”." }
        ]},
        { h: "Was ist unabhängig bestätigt?", items: [
          { tag: "fakt", text: "Die britische Seefahrtsbehörde UKMTO bestätigte zwei separate Zwischenfälle vor der saudischen Küste bei Al-Jubail: ein Tanker wurde rund 78 Seemeilen nordöstlich von Al-Jubail von einem Boot aus mit einer Panzerfaust beschossen, ein weiterer von einem unbekannten Projektil getroffen; die Besatzungen blieben jeweils unverletzt oder wurden evakuiert." }
        ]},
        { h: "Wie ist der Stand beim Flughafen Riad?", items: [
          { tag: "fakt", text: "Der King Khalid International Airport in Riad wurde am Sonntag, 18.10., wiedereröffnet, nachdem er seit den Angriffen vom 10./11.10. gesperrt war. Mehrere Fluggesellschaften setzen ihre Streckenaussetzungen aber noch fort: Etihad bis 19.10., Oman Air bis 22.10., SalamAir bis 31.10., Air France bis 24.10." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "unbestaetigt", text: "Laut Branchenberichten brach der Ölfluss durch die Straße von Hormus von rund 20,8 Mio. Barrel am 8.10. auf rund 2,9 Mio. Barrel am 11.10. ein; diese Angabe ist nicht amtlich verifiziert, wird aber mehrfach zitiert. Ein Live-Tracker zählte die Sperrung am 19.10. als „Tag 232”.",
            ask: [{ label: "Mehr zum Ölpreis und zur OPEC+", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Iran nun von zwei Minen-Zwischenfällen spricht, während CENTCOM dem ausdrücklich widerspricht und nur die separaten UKMTO-Meldungen unabhängig bestätigt sind, zeigt, wie unübersichtlich die Informationslage am Golf bleibt – auch wenn der Flughafen Riad bereits wieder geöffnet hat." }
        ]}
      ],
      reaction: "Die Lage um die Ukraine und den EU-Gipfel wird in Meldung 7 behandelt, der Jemen in Meldung 15, der Ölpreis in Meldung 14.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "Al Jazeera: Iran says two tankers catch fire after hitting mines in Strait of Hormuz", url: "https://www.aljazeera.com/news/2026/10/18/iran-says-two-tankers-catch-fire-after-hitting-mines-in-strait-of-hormuz" },
        { title: "Kurdistan24: CENTCOM denies Iran claim that tanker hit mines in Strait of Hormuz", url: "https://www.kurdistan24.net/en/story/936328/centcom-denies-iran-claim-that-tanker-hit-mines-in-strait-of-hormuz" },
        { title: "Al Arabiya: Tanker hit off Saudi's Gulf coast, crew evacuated – UKMTO", url: "https://english.alarabiya.net/News/middle-east/2026/10/17/tanker-hit-off-saudi-s-gulf-coast-crew-evacuated-ukmto" },
        { title: "The National: Riyadh airport reopens – which airlines are still cancelling flights to Saudi Arabia", url: "https://www.thenationalnews.com/travel/2026/10/18/riyadh-airport-reopens-which-airlines-are-still-cancelling-flights-to-saudi-arabia/" },
        { title: "CNN: How the US-Iran war upended two critical global trade routes", url: "https://www.cnn.com/2026/10/17/economy/us-iran-war-shipping-trade-hormuz-bab-el-mandab-strait-intl-vis" }
      ]
    },

    /* 9 DEFENCE: RHEINMETALL/ARMINIUS/EU */
    {
      id: "defence-rheinmetall-arminius-edip-uk-10-19", cats: ["defence"], when: "Rheinmetall-Kursplus Woche bis 18.10. · EDIP-Förderung 14.10. · UK-Haubitzenauftrag Oktober 2026",
      headline: "Rheinmetall-Aktie legt binnen einer Woche fast 16 Prozent zu, Arminius-Großauftrag rückt näher, EU fördert Rüstungsindustrie mit 168 Millionen Euro",
      sec30: "Die Rheinmetall-Aktie stieg bis Sonntagabend, 18.10., auf 1.083,40 Euro – ein Wochenplus von rund 15,8 %, allein am Freitag plus 6,26 %. Laut Konzernchef Papperger rückt das Arminius-Programm näher, das größte Rüstungsbeschaffungsprojekt der Bundeswehr: bis zu 3.000 zusätzliche Boxer-Fahrzeuge inklusive 561 Skyranger-30-Flugabwehrpanzern, Gesamtvolumen bis zu 40 Mrd. Euro; der Vertrag ist aber noch nicht final unterzeichnet. Großbritannien bestellte zudem 72 Haubitzen vom Typ RCH 155 von Rheinmetall/KNDS für rund 1 Mrd. Pfund. Die EU-Kommission stellte am 14.10. 168,2 Mio. Euro für acht Projekte zur Stärkung der europäischen Rüstungsindustrie bereit und zahlte zugleich 2,86 Mrd. Euro zur Deckung des operativen Verteidigungsbedarfs der Ukraine aus.",
      blocks: [
        { h: "Wie entwickelte sich die Rheinmetall-Aktie?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie stieg bis Sonntagabend, 18.10., auf 1.083,40 Euro – ein Wochenplus von rund 15,8 %, allein am Freitag plus 6,26 % auf 1.090,20 Euro. Mehrere Analysten bestätigten Kaufempfehlungen, der durchschnittliche Kursschnitt liegt laut Berichten bei rund 1.570 Euro, die Deutsche Bank nennt 1.800 Euro als Kursziel.",
            ask: [{ label: "Mehr zur DAX-Entwicklung am Freitag", ref: "n:dax" }] }
        ]},
        { h: "Was ist der Stand beim Arminius-Programm?", items: [
          { tag: "fakt", text: "Das Arminius-Programm, das größte Rüstungsbeschaffungsprojekt der Bundeswehr, sieht bis zu 3.000 zusätzliche Boxer-Fahrzeuge inklusive 561 Skyranger-30-Flugabwehrpanzern vor, mit einem Gesamtvolumen von bis zu 40 Mrd. Euro." },
          { tag: "position", text: "Rheinmetall-Chef Armin Papperger gab laut Berichten ein Update, wonach der Vertrag noch nicht final unterzeichnet sei; eine Verzögerung gefährde das Lieferziel 2029." }
        ]},
        { h: "Welche weiteren Aufträge und Förderungen gibt es?", items: [
          { tag: "fakt", text: "Großbritannien bestellte 72 Haubitzen vom Typ RCH 155 (Rheinmetall/KNDS) für rund 1 Mrd. Pfund, mit Lieferstart ab 2028. Rheinmetall verdoppelte zudem am 8.10. seine syndizierte Kreditlinie vorzeitig von 750 Mio. auf 1,5 Mrd. Euro." },
          { tag: "fakt", text: "Die EU-Kommission stellte am 14.10. 168,2 Mio. Euro für acht Projekte der Säule „Industrielle Stärkung” des Europäischen Verteidigungsindustrieprogramms bereit, was 1,26 Mrd. Euro industrielle Investitionen mobilisieren soll; Ziel ist es, Fertigungszeiten ab 2027 um bis zu 90 % zu verkürzen. Zusätzlich zahlte die EU am 14.10. 2,86 Mrd. Euro zur Deckung des operativen Verteidigungsbedarfs der Ukraine aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rheinmetalls Aktie binnen einer Woche deutlich zulegte und zugleich neue Aufträge aus Großbritannien sowie EU-Fördermittel für die Rüstungsindustrie hinzukommen, spiegelt die anhaltend hohe sicherheitspolitische Priorität dieses Bereichs wider – die Aktie bleibt aber weiterhin unter ihrem Rekordhoch von Oktober 2025." }
        ]}
      ],
      reaction: "Die Hintergründe des Ukraine-Kriegs werden in Meldung 7 behandelt, weitere US-Rüstungsaufträge in Meldung 10.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "boerse-express.com: Rheinmetall-Aktie – knapp 16 % in einer Woche, Großauftrag Arminius rückt näher", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-knapp-16-in-einer-woche-grossauftrag-arminius-rueckt-naeher-954217" },
        { title: "hartpunkt.de: Arminius – Rheinmetall-CEO gibt Update zu Boxer-Riesenauftrag", url: "https://www.hartpunkt.de/arminius-rheinmetall-ceo-gibt-update-zu-boxer-riesenauftrag/" },
        { title: "DER AKTIONÄR: Rheinmetall und KNDS erhalten Aufträge aus Großbritannien", url: "https://www.deraktionaer.de/artikel/aktien/rheinmetall-und-knds-erhaelt-auftraege-aus-grossbritannien-20392711.html" },
        { title: "Europäische Kommission: Kommission unterstützt europäische Rüstungsproduktion mit über 168 Millionen Euro", url: "https://germany.representation.ec.europa.eu/nachrichten-und-veranstaltungen/pressemitteilungen/kommission-unterstutzt-europaische-rustungsproduktion-mit-uber-168-millionen-euro-2026-10-14_de" },
        { title: "Europäische Kommission: Ukraine-Verteidigung – EU-Kommission zahlt 2,86 Milliarden Euro aus", url: "https://germany.representation.ec.europa.eu/nachrichten-und-veranstaltungen/pressemitteilungen/ukraine-verteidigung-eu-kommission-zahlt-286-milliarden-euro-aus-2026-10-14_de" }
      ]
    },

    /* 10 DEFENCE: RTX/ANDURIL */
    {
      id: "defence-rtx-anduril-luckey-pentagon-10-19", cats: ["defence"], when: "Anduril-Navy-Vertrag 6.10. · Anduril-Army-Vertrag 30.9. · Luckey-Berufung Project Meridian 12.10.2026",
      headline: "Anduril erhält Milliardenaufträge für U-Boot-Werft und Kommandosystem, Mitgründer Palmer Luckey ins Pentagon-Zukunftswaffengremium berufen",
      sec30: "Anduril erhielt im Oktober Militärverträge im Gesamtwert von bis zu 4,7 Mrd. Dollar, darunter einen Navy-Auftrag über bis zu 2,9 Mrd. Dollar für eine neue U-Boot-Werft (6.10.) verbunden mit 3,7 Mrd. Dollar Eigeninvestition in eine neue Werft in Sparrows Point bei Baltimore (Start 2030, rund 3.100 Arbeitsplätze) sowie einen Army-Vertrag über bis zu 1,8 Mrd. Dollar für das Kommandosystem NGC2 (30.9.). Mitgründer Palmer Luckey wurde am 12.10. in das Pentagon-Zukunftswaffengremium „Project Meridian” berufen, was Fragen zu möglichen Interessenkonflikten aufwarf. RTX/Raytheon hatte zuvor bereits Verträge über bis zu 24,4 Mrd. Dollar (SM-6) und bis zu 6,3 Mrd. Dollar (SM-3 Block IB) für Raketenabwehr erhalten.",
      blocks: [
        { h: "Welche neuen Großaufträge erhielt Anduril?", items: [
          { tag: "fakt", text: "Anduril erhielt am 6.10. einen Navy-Auftrag über bis zu 2,9 Mrd. Dollar für den Bau einer U-Boot-Werft, verbunden mit einer eigenen Investition von 3,7 Mrd. Dollar in eine neue Werft in Sparrows Point bei Baltimore, die ab 2030 rund 3.100 Arbeitsplätze schaffen soll. Am 30.9. erhielt Anduril zudem einen Army-Vertrag über bis zu 1,8 Mrd. Dollar für das Kommandosystem NGC2. Insgesamt summieren sich die neuen Anduril-Verträge im Oktober auf bis zu 4,7 Mrd. Dollar." }
        ]},
        { h: "Was ist an der Berufung von Palmer Luckey bemerkenswert?", items: [
          { tag: "fakt", text: "Anduril-Mitgründer Palmer Luckey wurde am 12.10. in ein Gremium der Trump-Administration zur Kriegsplanung berufen, genannt „Project Meridian”; Beobachter werfen Fragen zu möglichen Interessenkonflikten auf, da Anduril zugleich neue Milliardenaufträge vom Pentagon erhält." }
        ]},
        { h: "Welche Aufträge erhielt RTX/Raytheon zuvor?", items: [
          { tag: "fakt", text: "RTX/Raytheon erhielt einen Vertrag über bis zu 24,4 Mrd. Dollar für SM-6-Abfangraketen der US Navy (angekündigt 1.10.) sowie einen Vertrag über bis zu 6,3 Mrd. Dollar für SM-3-Block-IB-Abfangraketen mit der Missile Defense Agency (8.10.), da das Pentagon seine Raketenabwehr-Bestände wieder auffüllen will." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl etablierte Rüstungskonzerne wie RTX als auch jüngere Unternehmen wie Anduril weiterhin neue Großaufträge erhalten, während zugleich ein Mitgründer in ein Pentagon-Planungsgremium berufen wird, spiegelt die anhaltend hohe sicherheitspolitische Priorität und die engen Verbindungen zwischen Industrie und Verteidigungsministerium in den USA wider." }
        ]}
      ],
      reaction: "Die deutsche und europäische Rüstungsindustrie wird in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "CNBC: Anduril lands $2.9 billion Navy submarine shipyard contract", url: "https://www.cnbc.com/2026/10/06/anduril-navy-submarine-shipyard-contract.html" },
        { title: "US News: RTX's Raytheon wins up to $6.3 billion US missile contract", url: "https://www.usnews.com/news/top-news/articles/2026-10-08/rtxs-raytheon-wins-up-to-6-3-billion-us-missile-contract" },
        { title: "USNI News: Navy contracts RTX for $24.4B Standard Missile-6 deal", url: "https://news.usni.org/2026/10/02/navy-contracts-rtx-for-24-4b-standard-missile-6-deal" }
      ]
    },

    /* 11 DEALS/PE: NEUE MEGA-DEALS */
    {
      id: "deals-akzonobel-axalta-proofpoint-varonis-eqt-cleanaway-apollo-easyjet-10-19", cats: ["deals", "pe"], when: "AkzoNobel/Axalta-Ankündigung 16.10. · Proofpoint/Varonis 15./16.10. · Apollo/easyJet 16.10. · EQT/Cleanaway 19.10.2026",
      headline: "AkzoNobel und Axalta fusionieren für 25 Milliarden Dollar, Apollo übernimmt easyJet, EQT kauft australischen Entsorger Cleanaway",
      sec30: "Der Lackhersteller AkzoNobel und der US-Konkurrent Axalta Coating Systems kündigten am 16.10. eine Fusion mit einem Volumen von rund 25 Mrd. Dollar an. Der Softwarekonzern Proofpoint (im Besitz von Thoma Bravo) übernimmt den Datensicherheitsanbieter Varonis Systems für rund 6,3 Mrd. Dollar in bar. Der Finanzinvestor Apollo Global Management übernimmt die britische Fluggesellschaft easyJet für 5,7 Mrd. Pfund, Abschluss bis Ende des ersten Quartals 2027 erwartet. Am 19.10. kündigte EQT an, den australischen Entsorger Cleanaway Waste Management für rund 9,3 Mrd. australische Dollar (rund 6,5 Mrd. US-Dollar) zu übernehmen; die Cleanaway-Aktie sprang daraufhin um 20 %. Bei den bereits bekannten Deals bestätigte sich: Bumble/Ithaca Holdings soll im vierten Quartal 2026 abgeschlossen werden, CCC Intelligent Solutions/GTCR-Elliott im ersten Quartal 2027.",
      blocks: [
        { h: "Was wurde bei AkzoNobel/Axalta und Proofpoint/Varonis angekündigt?", items: [
          { tag: "fakt", text: "Der niederländische Lackhersteller AkzoNobel und der US-Konkurrent Axalta Coating Systems kündigten am 16.10. eine Fusion mit einem Gesamtvolumen von rund 25 Mrd. Dollar an." },
          { tag: "fakt", text: "Proofpoint (Thoma Bravo) übernimmt den auf Daten- und KI-Sicherheit spezialisierten Anbieter Varonis Systems für rund 6,3 Mrd. Dollar in bar; angekündigt am 15./16.10.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] }
        ]},
        { h: "Was wurde bei Apollo/easyJet und EQT/Cleanaway angekündigt?", items: [
          { tag: "fakt", text: "Apollo Global Management übernimmt die britische Fluggesellschaft easyJet für 5,7 Mrd. Pfund; Abschluss wird bis Ende des ersten Quartals 2027 erwartet." },
          { tag: "fakt", text: "EQT kündigte am 19.10. an, den australischen Entsorger Cleanaway Waste Management für rund 9,3 Mrd. australische Dollar (rund 6,5 Mrd. US-Dollar) zu 3,095 australische Dollar je Aktie plus Sonderdividende zu übernehmen; die Cleanaway-Aktie sprang daraufhin um rund 20 %." },
          { tag: "unbestaetigt", text: "Angaben zu beratenden Banken oder einem EV/EBITDA-Bewertungsmultiplikator für diese vier Deals nennen die verfügbaren Quellen nicht.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Was ist der Stand bei den zuvor gemeldeten Deals?", items: [
          { tag: "fakt", text: "Bumble (Ithaca Holdings, 6,05 Dollar je Aktie, rund 1,3 Mrd. Dollar) soll im vierten Quartal 2026 abgeschlossen werden; die Bumble-Aktie legte über zwei Handelstage um 134 % zu. CCC Intelligent Solutions (GTCR/Elliott, 7,75 Dollar je Aktie, rund 6,1 Mrd. Dollar Unternehmenswert) soll im ersten Quartal 2027 abgeschlossen werden – der dritte Rückzug von der Börse für CCC durch einen Finanzinvestor." },
          { tag: "fakt", text: "Die Übernahme von rund 60,7 % der indischen IDBI Bank durch Fairfax Financial Holdings (rund 5,6 Mrd. Dollar) wurde am 14./15.10. bestätigt; die IDBI-Aktie fiel daraufhin über 7 %, da der vereinbarte Preis unter dem vorherigen Börsenkurs lag. SoftBanks mögliche Übernahme von Allied Universal für rund 18 Mrd. Dollar befindet sich laut Berichten weiterhin in einer frühen Prüfungsphase, ohne Transaktionsgarantie." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass binnen wenigen Tagen gleich mehrere Milliarden-Deals in unterschiedlichsten Branchen – Lacke, Datensicherheit, Luftfahrt, Entsorgung – angekündigt wurden, passt zu einer anhaltend aktiven M&A- und Private-Equity-Welle." }
        ]}
      ],
      deal: { value: "25 Mrd. $ (AkzoNobel/Axalta) · 6,3 Mrd. $ (Proofpoint/Varonis) · 5,7 Mrd. £ (Apollo/easyJet) · 6,5 Mrd. $ (EQT/Cleanaway)", buyer: "AkzoNobel · Thoma Bravo/Proofpoint · Apollo Global Management · EQT", target: "Axalta Coating Systems · Varonis Systems · easyJet · Cleanaway Waste Management", sector: "Lacke / Daten- & KI-Sicherheit / Luftfahrt / Entsorgung", type: "Fusion & Take-private" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value", "ebitda"],
      followups: ["e:take-private-why", "e:ma-steps"],
      sources: [
        { title: "dealroom.net: Recent M&A Deals 2026", url: "https://dealroom.net/blog/recent-m-a-deals" },
        { title: "Proofpoint: Proofpoint to acquire Varonis in a $6.3 billion transaction", url: "https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-acquire-varonis-creating-global-leader-data-and-ai-security" },
        { title: "startupfortune.com: EQT agrees to buy Australia's Cleanaway Waste Management for $6.5 billion", url: "https://startupfortune.com/eqt-agrees-to-buy-australias-cleanaway-waste-management-for-65-billion/" },
        { title: "247wallst.com: Bumble soars as Ithaca Holdings agrees to take it private at $6.05 a share", url: "https://247wallst.com/investing/2026/10/13/bumble-soars-56-as-ithaca-holdings-agrees-to-take-it-private-at-6-05-a-share-match-group-advances-2/" },
        { title: "alternativeswatch.com: Claims software firm CCC to go private for third time", url: "https://www.alternativeswatch.com/2026/10/18/gtcr-elliott-ccc-take-private/" },
        { title: "CNBC: India's IDBI Bank falls 7% as government announces $5.5 billion stake sale to Canada's Fairfax", url: "https://www.cnbc.com/2026/10/15/india-canada-fairfax-idbi-fdi.html" }
      ]
    },

    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-moodys-pik-fitch-bdc-cvc-10-19", cats: ["credit", "pe"], when: "Moody's-Bericht 14.10. · Fitch-Bericht 13.10. · CVC/Endowus-Ankündigung 17.10.2026",
      headline: "Moody's warnt vor durch PIK-Klauseln verschleierten Ausfällen bei Private Credit, Fitch meldet weiterhin hohe BDC-Rücknahmequoten",
      sec30: "Moody's berichtete am 14.10., die Ausfallrate bei 607 untersuchten Private-Credit-Schuldnern habe in den zwölf Monaten bis Juni bei 4 % gelegen, steige aber auf 5,8 %, wenn Zinszahlungen in Form zusätzlicher Schulden (PIK) und Laufzeitverlängerungen bei finanziell angespannten Firmen als Ausfall gewertet würden – Moody's warnt vor einer „Fälligkeitsmauer” bei niedrig gerateten Schuldnern. Fitch Ratings meldete am 13.10., die durchschnittlichen Rücknahmeanträge bei Business Development Companies (BDCs) seien im dritten Quartal auf 9,8 % der verwalteten Vermögenswerte gefallen (von 10,8 %), lägen aber weiter über der vertraglichen Quartalsgrenze von 5 %. Gleichzeitig wächst der Markt: Direct-Lending-Fonds sammelten in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein, während das Kreditvergabevolumen im dritten Quartal um 28 % sank. Die Fondsplattform CVC Capital Partners startete am 17.10. über die Wealth-Plattform Endowus eine neue europäische Direct-Lending-Strategie für Anleger in Singapur und Hongkong.",
      blocks: [
        { h: "Was zeigt der Moody's-Bericht zu Private-Credit-Ausfällen?", items: [
          { tag: "fakt", text: "Moody's berichtete am 14.10., die Ausfallrate bei 607 untersuchten Private-Credit-Schuldnern habe in den zwölf Monaten bis Juni offiziell bei 4 % gelegen, steige aber auf 5,8 %, wenn PIK-Anpassungen (Zinszahlung in Form zusätzlicher Schulden statt bar) und Laufzeitverlängerungen bei finanziell angespannten Firmen als Ausfall gewertet würden.",
            ask: [{ label: "Was ist PIK?", ref: "t:pik" }] },
          { tag: "position", text: "Moody's warnte in dem Bericht vor einer „Fälligkeitsmauer” bei niedrig gerateten Private-Credit-Schuldnern." }
        ]},
        { h: "Was zeigt der Fitch-Bericht zu BDCs?", items: [
          { tag: "fakt", text: "Fitch Ratings meldete am 13.10., die durchschnittlichen Rücknahmeanträge bei Business Development Companies seien im dritten Quartal auf 9,8 % der verwalteten Vermögenswerte gefallen (von 10,8 % im Vorquartal), lägen aber weiterhin über der vertraglichen Quartalsgrenze von 5 %.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] }
        ]},
        { h: "Wie stellt sich der Private-Credit-Markt insgesamt dar?", items: [
          { tag: "fakt", text: "Direct-Lending-Fonds sammelten in den ersten neun Monaten 2026 ein Rekordvolumen von 129,15 Mrd. Dollar ein (+35 % gegenüber dem Vorjahr, höchster 9-Monats-Wert seit Beginn der Datenreihe 2016), während das Kreditvergabevolumen im dritten Quartal um 28 % auf 49,77 Mrd. Dollar sank, weil Kreditnehmer verstärkt auf günstigere, breit syndizierte Kredite ausweichen; im dritten Quartal wurden rund 16,39 Mrd. Dollar an Direct-Lending-Krediten in syndizierte Kreditmärkte refinanziert, gegenüber nur 2,60 Mrd. Dollar in die andere Richtung.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "fakt", text: "CVC Capital Partners startete am 17.10. über die asiatische Wealth-Plattform Endowus eine neue europäische Direct-Lending-Strategie für akkreditierte Anleger in Singapur und Hongkong – ein Beispiel für das anhaltende Wachstum des Marktes trotz der Warnungen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rekordsummen in den Private-Credit-Markt fließen, während Ratingagenturen zugleich auf verschleierte Ausfälle und anhaltend hohe Rücknahmequoten bei BDCs hinweisen, zeigt eine wachsende Sorge um die Widerstandsfähigkeit dieses stark gewachsenen Marktes." }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "non-accrual", "pik"],
      followups: ["e:private-credit-what", "e:pe-money", "e:nonaccrual-default"],
      sources: [
        { title: "Bloomberg: US private credit defaults understated by PIK use, Moody's says", url: "https://bloomberg.com/news/articles/2026-10-14/us-private-credit-stress-masked-by-growing-pik-use-moody-s-says" },
        { title: "Pensions & Investments: Fitch – private credit BDC redemptions ease but stay above 5% cap", url: "https://www.pionline.com/alternative-investments/private-credit/pi-private-credit-redemptions-third-quarter-fitch-ratings/" },
        { title: "Yahoo Finance: Private credit faces deployment squeeze as fundraising hits record", url: "https://finance.yahoo.com/markets/stocks/articles/private-credit-faces-deployment-squeeze-183333828.html" },
        { title: "caproasia.com: Singapore's Endowus launches CVC Capital Partners private credit strategy", url: "https://www.caproasia.com/2026/10/17/singapore-11-billion-independent-digital-wealth-platform-endowus-launches-europe-241-billion-private-equity-firm-cvc-capital-partners-private-credit-strategy-european-direct-lending-in-singapore/" }
      ]
    },

    /* 13 TECHNOLOGIE: COREWEAVE/SOX/DEEPSEEK */
    {
      id: "tech-coreweave-sox-deepseek-huang-10-19", cats: ["tech"], when: "CoreWeave-CDS-Sprung 15.10. · SOX-Rekordserie Fr 16.10. · DeepSeek-Modell 17.10. · Huang-Aussage Berlin 17.10.2026",
      headline: "CoreWeaves Ausfallrisiko an den Kreditmärkten steigt weiter, Nvidia-Chef Huang beschwichtigt, neues DeepSeek-Modell verschärft Sorgen um Speicherchip-Nachfrage",
      sec30: "Die 5-Jahres-Kreditausfallversicherungen (CDS) von CoreWeave sprangen von 368 Basispunkten am 6.10. auf 643 Basispunkte am Freitag und zuletzt auf rund 1.038 Basispunkte – das entspricht einer impliziten Ausfallwahrscheinlichkeit von rund 60 %. Die CoreWeave-Aktie fiel in der Woche bis 17.10. um rund 25 % (allein am Freitag −12 %) auf 61,39 Dollar; Anleihen mit Fälligkeit 2031 rentieren bei rund 15,78 %. Nvidia-Chef Jensen Huang sagte dazu am 17.10. in Berlin: „CoreWeave's strength is improving every day. I'm optimistic. Their cost of capital is actually decreasing”, und allgemein zu den KI-Sorgen: „All of this is going to pass.” Der Philadelphia-Halbleiterindex SOX fiel am Freitag den achten Tag in Folge. Am Wochenende veröffentlichte der chinesische KI-Anbieter DeepSeek ein neues Modell („V4.1-Flash-1017”), das nach eigenen Angaben deutlich weniger Speicherbedarf benötigt – das drückte am Montag erneut auf asiatische Speicherchip-Werte.",
      blocks: [
        { h: "Wie geht es CoreWeave und der Sorge um KI-Schulden?", items: [
          { tag: "fakt", text: "Die 5-Jahres-CDS von CoreWeave sprangen von 368 Basispunkten am 6.10. auf 643 Basispunkte am Freitag, 16.10., und zuletzt auf rund 1.038 Basispunkte – eine implizite Ausfallwahrscheinlichkeit von rund 60 %. Die Aktie fiel in der Woche bis 17.10. um rund 25 % (allein am Freitag −12 %) auf 61,39 Dollar. Anleihen mit Fälligkeit 2031 (9,75 % Kupon) rentieren bei rund 15,78 %.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] }
        ]},
        { h: "Was sagte Nvidia-Chef Jensen Huang dazu?", items: [
          { tag: "position", text: "Jensen Huang sagte am 17.10. bei einem Termin in Berlin gegenüber Bloomberg: „CoreWeave's strength is improving every day. I'm optimistic. Their cost of capital is actually decreasing.” Allgemein zu den KI-Sorgen sagte er: „All of this is going to pass. It's going to be transformative.”",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Wie entwickelten sich weitere Chipwerte?", items: [
          { tag: "fakt", text: "Der Philadelphia-Halbleiterindex SOX fiel am Freitag um 3,83 % auf 11.137,29 Punkte – der achte Verlusttag in Folge, die erste solche Serie seit Oktober 2008, mit einem Rückgang von rund 16 % seit dem 6.10. und einer geschätzten Marktwertvernichtung von rund 2 Billionen Dollar. Nvidia schloss bei 214,13 Dollar (−1,43 %), AMD bei 528,75 Dollar (−5,95 %)." }
        ]},
        { h: "Was hat es mit dem neuen DeepSeek-Modell auf sich?", items: [
          { tag: "fakt", text: "Der chinesische KI-Anbieter DeepSeek veröffentlichte am 17.10. das Modell „V4.1-Flash-1017”, das nach eigenem Benchmark mit 77,0 Punkten unter anderem Claude Opus 5 (74,0) und GPT-5.6 „Sol” (73,0) übertrifft und laut Berichten deutlich weniger Arbeitsspeicher benötigt als bisherige Modelle.",
            ask: [{ label: "Mehr zum Hintergrund des Chip-Ausverkaufs", ref: "e:custom-chips" }] },
          { tag: "fakt", text: "Am Montag, 19.10., öffnete der Kospi rund 1,7 % tiefer bei 5.572,10 Punkten; Samsung und SK Hynix gaben zeitweise über 4 % ab, nachdem sie bereits in der Vorwoche ihre schlechteste Woche seit 2008 verzeichnet hatten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die Kreditmärkte bei CoreWeave als auch die Aktienmärkte bei asiatischen Speicherchip-Herstellern weiter unter Druck stehen, während Nvidia-Chef Huang beschwichtigt, zeigt, wie unübersichtlich die Lage in der KI- und Chipbranche derzeit bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion auf den Chip-Ausverkauf wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Motley Fool: Why is CoreWeave stock falling today?", url: "https://www.fool.com/investing/2026/10/16/why-is-coreweave-stock-falling-today/" },
        { title: "startupfortune.com: CoreWeave default odds hit 60 percent as credit swaps top 1,000 basis points", url: "https://startupfortune.com/coreweave-default-odds-hit-60-percent-as-credit-swaps-top-1000-basis-points/" },
        { title: "CNBC: CoreWeave credit default swaps hit distress levels as investors sour on AI debt", url: "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html" },
        { title: "marktechpost.com: DeepSeek just released V4.1-Flash-1017, scores 77.0 on DeepSWE, opens search API", url: "https://www.marktechpost.com/2026/10/17/deepseek-just-released-v4-1-flash-1017-scores-77-0-on-deepswe-opens-search-api/" },
        { title: "Korea Herald: Seoul stocks open sharply lower after US tech sell-off", url: "https://www.koreaherald.com/article/10906650" }
      ]
    },

    /* 14 ENERGIE */
    {
      id: "energie-oelpreis-trump-sanktionen-hormuz-gas-10-19", cats: ["energy", "geo"], when: "Trump-Anordnung 16./17.10. · Ölpreisrückgang Mo 19.10. · TTF-Hoch Mitte Oktober · OPEC+-Beschluss 4.10.2026",
      headline: "Ölpreis fällt am Montag, nachdem Trump neue Russland-Sanktionen vorerst aussetzt, während die Lage in der Straße von Hormus angespannt bleibt",
      sec30: "Präsident Trump unterzeichnete am 16./17.10. eine Anordnung, die neue Russland-Sanktionen vorerst aussetzt – darunter Strafzölle von bis zu 500 % auf russisches Öl und Gas und bis zu 100 % auf Käuferländer; er nannte das eine „very good decision”. In der Folge fiel Brent am Montagvormittag um rund 1,9 % auf etwa 107,85 Dollar, WTI uneinheitlich auf rund 97 bis 101 Dollar. Gegenläufig hält die Lage in der Straße von Hormus an, wo Iran inzwischen zwei Tanker-Minen-Zwischenfälle meldet, die CENTCOM bestreitet (Meldung 8). Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt. Der europäische Gas-Referenzpreis TTF liegt weiterhin nahe seinem Mehrjahreshoch, mit einem Oktober-Monatsmittel von rund 75 Euro je Megawattstunde; die deutschen Gasspeicher lagen zum Gastag 13.10. bei rund 60,1 % – weiter unter dem Fünfjahresdurchschnitt für diese Jahreszeit.",
      blocks: [
        { h: "Warum ist der Ölpreis am Montag gefallen?", items: [
          { tag: "fakt", text: "Präsident Trump unterzeichnete am 16./17.10. eine Anordnung, die neue, eigentlich vom Kongress beschlossene Russland-Sanktionen vorerst aussetzt – darunter Strafzölle von bis zu 500 % auf russisches Öl und Gas sowie bis zu 100 % auf Länder, die russisches Öl kaufen. Trump bezeichnete die Anordnung als „very good decision”.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "In der Folge fiel Brent am Montagvormittag um rund 1,9 % auf etwa 107,85 Dollar je Barrel, nach einem Freitagsschluss von 109,86 Dollar; WTI wird für Montag uneinheitlich mit rund 97 bis 101 Dollar angegeben." }
        ]},
        { h: "Wie wirkt die Lage in der Straße von Hormus dagegen?", items: [
          { tag: "unbestaetigt", text: "Gegenläufig hält die Lage in der Straße von Hormus an: Iran meldet inzwischen zwei auf Minen gelaufene Tanker, was die US-Streitkräfte (CENTCOM) als Desinformation zurückweisen. Mehr dazu in Meldung 8.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] }
        ]},
        { h: "Was hat die OPEC+ zuletzt beschlossen?", items: [
          { tag: "fakt", text: "Der Beschluss vom 4.10. – unter anderem Saudi-Arabien mit 10,5 Mio. Barrel pro Tag, Russland mit 9,9 Mio. und Irak mit 4,4 Mio. – lässt die Fördermenge für November gegenüber Oktober unverändert; das nächste Treffen ist für den 1.11. angesetzt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie ist der Stand bei Gaspreis und Gasspeichern?", items: [
          { tag: "unbestaetigt", text: "Der TTF-Referenzpreis liegt laut verfügbaren Quellen weiterhin nahe seinem Mehrjahreshoch, mit einem Oktober-Monatsmittel von rund 75 Euro je Megawattstunde; ein eindeutiger Tageswert für Montag ließ sich nicht ermitteln.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen zum Gastag 13.10. bei rund 60,1 % (147,3 von 245,1 TWh) – Platz 16 von 21 gemeldeten Ländern und weiterhin deutlich unter dem Fünfjahresdurchschnitt für diese Jahreszeit." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz anhaltender Spannungen am Golf gefallen ist, zeigt, wie stark Trumps Entscheidung zur vorübergehenden Aussetzung der Russland-Sanktionen die Markterwartung über ein größeres Rohölangebot kurzfristig verändert hat." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Jemen in Meldung 15, die deutsche Innenpolitik in Meldung 6.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "The Moscow Times: Trump signs order exempting Russia from new sanctions legislation", url: "https://www.themoscowtimes.com/2026/10/17/trump-signs-order-exempting-russia-from-new-sanctions-legislation-a94012" },
        { title: "tradingkey.com: Brent crude oil drops as Trump waives sanctions on Russia", url: "https://tradingkey.com/de/analysis/commodities/oil/262222951-brent-crude-oil-drops-trump-waives-sanctions-russia-tradingkey" },
        { title: "enerdata.net: OPEC+ keeps November 2026 production targets unchanged amid supply disruptions", url: "https://www.enerdata.net/publications/daily-energy-news/opec-keeps-november-2026-production-targets-unchanged-amid-supply-disruptions.html" },
        { title: "protergia.gr: TTF prices per month", url: "https://www.protergia.gr/en/home/natural-gas/ttf-prices-per-month/" },
        { title: "gasspeicherkarte.de: Gasspeicher Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" }
      ]
    },

    /* 15 GEOPOLITIK: JEMEN/HOUTHI */
    {
      id: "jemen-houthi-aden-operation-dawn-of-yemen-10-19", cats: ["geo", "world"], when: "Houthi-Angriff Aden 15.10. · Beginn Operation Dawn of Yemen 5.10. · Araghchi-Vorschlag weiter offen 18.10.2026",
      headline: "Jemenitische Regierungsoffensive gegen die Houthi hält an, Irans Vorschlag zur Öffnung der Straße von Hormus bleibt laut Teheran „auf dem Tisch”",
      sec30: "Houthi-Kräfte griffen am 15.10. den Präsidentenpalast in Aden mit fünf Raketen an; nach Angaben des jemenitischen Gesundheitsministeriums wurden mindestens 5 Menschen getötet und 16 verletzt, Ministerpräsident al-Zindani und das Kabinett blieben unverletzt. Die jemenitische Regierung hatte am 5.10. die von rund 100 saudischen Kampfflugzeugen unterstützte Offensive „Operation Dawn of Yemen” zur Rückeroberung Sanaas von den Houthi gestartet; nach Angaben der jemenitischen Streitkräfte wurden seither mehrere Tausend Angriffe geflogen. Irans Außenminister Araghchi erklärte am 18.10., der iranische Vorschlag zur Öffnung der Straße von Hormus binnen sieben Tagen stehe weiterhin „auf dem Tisch”, verbunden mit drei Bedingungen: Aufhebung der US-Seeblockade, Aussetzung der US-Ölsanktionen und ein Waffenstillstand, der ausdrücklich den Libanon einschließt. Eine umfassende Einigung liegt bislang nicht vor.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Houthi-Kräfte griffen am 15.10. den Präsidentenpalast al-Maashiq in Aden mit fünf Raketen an; nach Angaben des jemenitischen Gesundheitsministeriums wurden mindestens 5 Menschen getötet und 16 verletzt. Ministerpräsident Shaya al-Zindani und das Kabinett waren zum Zeitpunkt des Angriffs anwesend, blieben aber unverletzt." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "fakt", text: "Die jemenitische Regierung (Presidential Leadership Council) hatte bereits am 5.10. die Offensive „Operation Dawn of Yemen” zur Rückeroberung Sanaas gestartet, unterstützt von rund 100 saudischen Kampfflugzeugen." },
          { tag: "unbestaetigt", text: "Nach Angaben der jemenitischen Streitkräfte wurden seit Beginn der Offensive mehrere Tausend Luftangriffe geflogen und rund 700 Houthi-Kämpfer „neutralisiert” – eine einseitige Angabe der Konfliktpartei, die unabhängig nicht überprüfbar ist." },
          { tag: "position", text: "Die jemenitische Regierung erklärte trotz des Palastangriffs, weiterhin von Aden aus zu arbeiten; der UN-Sicherheitsrat verurteilte in einer gemeinsamen Erklärung die eskalierenden Houthi-Angriffe und bekräftigte Saudi-Arabiens Recht auf Selbstverteidigung." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der Oktober gilt laut Berichten bislang als der Monat mit den meisten Schiffsangriffen am Golf seit Beginn des Konflikts zwischen den USA, Israel und Iran im Februar 2026; der 13.10. war mit sechs gemeldeten Angriffen laut einer Quelle der bislang heftigste einzelne Tag." }
        ]},
        { h: "Welche diplomatischen Entwicklungen gibt es zur Straße von Hormus?", items: [
          { tag: "position", text: "Irans Außenminister Abbas Araghchi erklärte am 18.10., der iranische Vorschlag zur Öffnung der Straße von Hormus binnen sieben Tagen stehe weiterhin „auf dem Tisch”, verbunden mit drei Bedingungen: Aufhebung der US-Seeblockade, Aussetzung der US-Ölsanktionen und ein Waffenstillstand, der ausdrücklich den Libanon einschließt. Eine umfassende Einigung liegt bislang nicht vor.",
            ask: [{ label: "Mehr zum Hormuz-Zwischenfall", ref: "s:8" }] },
          { tag: "unbestaetigt", text: "Ein IRGC-Sprecher erklärte laut einer Quelle, „the war is not over”, und deutete eine mögliche Ausweitung auf ein „breiteres Schlachtfeld” an – eine einseitige, nicht unabhängig bestätigte Äußerung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die jemenitische Offensive gegen die Houthi als auch Irans Vorschlag zur Hormuz-Öffnung weiterlaufen, ohne dass eine Seite bislang nachgegeben hat, zeigt, wie sich die Konfliktherde am Golf und im Jemen gegenseitig verstärken und den Ölpreis beeinflussen (Meldung 14)." }
        ]}
      ],
      reaction: "Der Hormuz-Zwischenfall wird in Meldung 8 behandelt, der Ölpreis in Meldung 14, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: Houthis target Yemen's presidential palace in Aden with missiles", url: "https://www.aljazeera.com/news/2026/10/15/houthis-target-yemens-presidential-palace-in-aden-with-missiles" },
        { title: "ABC News (Australia): Houthis attack Aden, killing five and wounding 16", url: "https://www.abc.net.au/news/2026-10-16/houthis-attack-aden-killing-five-and-wounding-16/107268204" },
        { title: "Saudi Gazette: Yemen launches Operation Dawn of Yemen to retake Sanaa from Houthis", url: "https://saudigazette.com.sa/article/665132/world/yemen-launches-operation-dawn-of-yemen-to-retake-sanaa-from-houthis" },
        { title: "Antiwar.com: Araghchi says Iran's proposal to open Strait of Hormuz within seven days is still on the table", url: "https://news.antiwar.com/2026/10/18/araghchi-says-irans-proposal-to-open-strait-of-hormuz-within-seven-days-is-still-on-the-table/" },
        { title: "The National: Yemen government will remain in Aden despite Houthi attack, says official", url: "https://www.thenationalnews.com/news/mena/2026/10/16/yemen-government-will-remain-in-aden-despite-houthi-attack-says-official/" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Freitag fielen S&P 500 (−1,1 %) und Nasdaq Composite (−2,1 %) wegen anhaltender KI-Bubble-Sorgen, während DAX (+0,94 %) und Euro Stoxx 50 (+0,58 %) dank Rüstungswerten und einer ASML-Erholung zulegten; am Montag fielen asiatische Chipwerte nach einem neuen DeepSeek-Modell erneut." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die gegenläufige Entwicklung nennen Berichte Rüstungswerte wie Rheinmetall in Europa und anhaltende Sorgen um eine mögliche Überbewertung von KI-Investitionen in den USA und Asien." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite lag am Freitag bei rund 5,08 bis 5,10 % und bewegte sich nach einer heißen September-Inflationszahl; für Montag deuten einzelne Quellen eine leicht niedrigere Indikation an. Für die Bund-Rendite ließ sich weiterhin kein über mehrere Quellen übereinstimmender aktueller Wert ermitteln." },
    "central-banks-why": { tag: "position", story: 2, text: "Fed-Chef Warsh machte bei seiner Rede auf der IWF-Jahrestagung in Bangkok am 16.10. bewusst keine Aussage zum Zinspfad für die Sitzung am 27./28.10.; die FOMC-Blackout-Periode läuft seither bis zum 29.10." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Marktplattformen wie CME FedWatch, Kalshi und Polymarket preisen für Oktober überwiegend eine Erhöhungswahrscheinlichkeit von rund 13 bis 16 % ein; einzelne Quellen nennen davon abweichend bis zu 42 %." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold war zur Wochenmitte auf rund 4.073 Dollar gefallen und hat sich seither bei rund 4.170 Dollar je Feinunze stabilisiert, gestützt von der unveränderten US-Rendite und der Erwartung einer Fed-Zinspause." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs war bis Freitag fünfmal in Folge auf 1,1253 Dollar gestiegen; am Montagvormittag handelte der Euro am freien Devisenmarkt mit rund 1,1230 Dollar etwas schwächer." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin bewegte sich über das Wochenende in einer engen Spanne von rund 80.655 bis 81.961 Dollar und zog am Montagvormittag leicht auf rund 82.000 bis 82.800 Dollar an." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %; Einschätzungen zur Sitzung am 29.10. gehen in den verfügbaren Quellen auseinander." },
    "ecb-hike": { tag: "unbestaetigt", story: 4, text: "Eine Einschätzung erwartet vorerst keine weitere EZB-Zinsanhebung, eine andere nennt rund 60 % Wahrscheinlichkeit für eine weitere Erhöhung am 29.10." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Bundeshaushalt 2027 sieht eine Nettokreditaufnahme von 118,7 Mrd. Euro und Gesamtausgaben von 555,4 Mrd. Euro vor; der Bundesrechnungshof weist für die Planung bis 2030 einen Konsolidierungsbedarf von 108 Mrd. Euro aus." },
    "rente-basics": { tag: "fakt", story: 6, text: "Klingbeil plant, den Bundeszuschuss zur Rentenversicherung um 4 Mrd. Euro zu kürzen; das könnte den Beitragssatz laut Berechnungen der Rentenversicherung bereits ab Juli 2027 um 0,2 Punkte steigen lassen." },
    "debt-brake": { tag: "fakt", story: 6, text: "Der Verteidigungsetat soll 2027 auf rund 109,7 Mrd. Euro steigen – ein Drittel mehr als 2026 – und trägt wesentlich zur geplanten Nettokreditaufnahme bei." },
    "landtagswahl-why": { tag: "fakt", story: 5, text: "SPD und Grüne entscheiden am Abend des 19.10. über Koalitionsverhandlungen mit der Linken in Berlin; die Linke selbst entscheidet erst am 31.10. auf einem Parteitag." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Aktuelle Umfragen weichen weiterhin deutlich voneinander ab: INSA (17.10.) sieht die AfD bei 29 %, Forsa (6.10.) bei 26 %; der Institutsmittelwert liegt bei rund 27,6 %." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Iran meldet inzwischen zwei auf Minen gelaufene Supertanker in der Straße von Hormus; die US-Streitkräfte (CENTCOM) weisen das ausdrücklich als Desinformation zurück. Der Flughafen Riad wurde am 18.10. wiedereröffnet." },
    "why-oil-up-geo": { tag: "fakt", story: 14, text: "Der Ölpreis fiel am Montag trotz der anhaltenden Spannungen am Golf, nachdem Präsident Trump neue Russland-Sanktionen vorerst ausgesetzt hatte." },
    "defence-order": { tag: "fakt", story: 9, text: "Die Rheinmetall-Aktie legte binnen einer Woche rund 15,8 % zu, gestützt vom näherrückenden Arminius-Programm und einem neuen britischen Haubitzenauftrag; Anduril erhielt in den USA weitere Milliardenaufträge (Meldung 10)." },
    "take-private-why": { tag: "fakt", story: 11, text: "Apollo übernimmt easyJet für 5,7 Mrd. Pfund, EQT den australischen Entsorger Cleanaway für rund 6,5 Mrd. Dollar; Bumble und CCC Intelligent Solutions bewegen sich wie angekündigt auf ihren Abschluss zu." },
    "ma-steps": { tag: "fakt", story: 11, text: "AkzoNobel und Axalta kündigten eine Fusion über rund 25 Mrd. Dollar an, Proofpoint übernimmt Varonis Systems für rund 6,3 Mrd. Dollar." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Moody's beziffert die um PIK-Effekte bereinigte Private-Credit-Ausfallrate auf 5,8 % statt offiziell 4 %; Direct-Lending-Fonds sammelten dennoch ein Rekordvolumen von 129,15 Mrd. Dollar ein." },
    "ai-capex": { tag: "position", story: 13, text: "Nvidia-Chef Jensen Huang sagte am 17.10. zu CoreWeave, dessen Finanzierungskosten sänken bereits wieder; die CDS des Unternehmens stiegen zugleich auf rund 1.038 Basispunkte." },
    "custom-chips": { tag: "fakt", story: 13, text: "DeepSeek veröffentlichte am 17.10. ein neues, speichereffizienteres KI-Modell; am Montag fielen Samsung und SK Hynix daraufhin erneut deutlich." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen zum Gastag 13.10. bei rund 60,1 % – weiterhin deutlich unter dem Fünfjahresdurchschnitt für diese Jahreszeit." },
    "opec-plus-why": { tag: "fakt", story: 14, text: "Der OPEC+-Beschluss vom 4.10., die Fördermenge für November unverändert zu lassen, bleibt der aktuelle Stand; das nächste Treffen ist für den 1.11. angesetzt." },
    "gas-ttf": { tag: "unbestaetigt", story: 14, text: "Der TTF-Gaspreis liegt im Oktober-Monatsmittel bei rund 75 Euro je Megawattstunde und damit weiterhin nahe seinem Mehrjahreshoch." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent fiel am Montag auf rund 107,85 Dollar je Barrel; Öl bleibt trotz des Rückgangs ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "Die Sorge um die Finanzierung von KI-Cloud-Anbietern wie CoreWeave bleibt akut; dessen Kreditausfallversicherungen stiegen binnen zwei Wochen von 368 auf rund 1.038 Basispunkte." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Deutschland", type: "Fakt", story: 5,
      q: "Worüber entscheiden SPD und Grüne am Abend des 19.10.2026 in Berlin?",
      options: [
        "Über die endgültige Unterschrift unter einen fertigen Koalitionsvertrag",
        "Darüber, ob sie mit der Linken in Koalitionsverhandlungen eintreten",
        "Über die Auflösung des Berliner Senats",
        "Über eine vorzeitige Neuwahl des Abgeordnetenhauses"
      ],
      answer: 1,
      explain: "Die Grünen tagen dafür auf einem kleinen Parteitag, der SPD-Landesvorstand stimmt digital ab; es geht um die Empfehlung, in Koalitionsverhandlungen mit der Linken einzutreten – ein fertiger Koalitionsvertrag liegt noch nicht vor."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 8,
      q: "Wie reagierten die US-Streitkräfte (CENTCOM) auf die iranische Meldung, zwei Supertanker seien in der Straße von Hormus auf Minen gelaufen?",
      options: [
        "Sie bestätigten den Vorfall unabhängig",
        "Sie wiesen die Darstellung ausdrücklich als Desinformation zurück",
        "Sie äußerten sich nicht dazu",
        "Sie kündigten als Reaktion eine eigene Militäroperation an"
      ],
      answer: 1,
      explain: "CENTCOM erklärte, kein Schiff sei auf eine Mine gelaufen, und bezeichnete die iranische Darstellung als „yet another IRGC attempt to intimidate regional commercial shipping through disinformation”."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 14,
      q: "Angenommen, Präsident Trump hätte die neuen Russland-Sanktionen am 16./17.10.2026 nicht ausgesetzt, sondern verschärft. Was wäre für den Ölpreis am Montag unter sonst gleichen Bedingungen am ehesten wahrscheinlicher gewesen?",
      options: [
        "Ein stärkerer Rückgang des Ölpreises als tatsächlich beobachtet",
        "Ein geringerer Rückgang oder sogar ein Anstieg des Ölpreises, da weniger russisches Angebot erwartet worden wäre",
        "Keine Auswirkung, da Sanktionen den Ölpreis grundsätzlich nicht beeinflussen",
        "Eine automatische Wiedereröffnung der Straße von Hormus"
      ],
      answer: 1,
      explain: "Die tatsächliche Aussetzung der Sanktionen ließ mehr russisches Ölangebot erwarten und drückte den Preis; eine Verschärfung hätte das Angebot eher verknappt und damit tendenziell preistreibend gewirkt."
    },
    {
      topic: "Technologie", type: "Fakt", story: 13,
      q: "Was sagte Nvidia-Chef Jensen Huang am 17.10.2026 zu CoreWeave?",
      options: [
        "Er riet Anlegern, ihre CoreWeave-Aktien zu verkaufen",
        "„CoreWeave's strength is improving every day. I'm optimistic.”",
        "Er bestätigte den Ausstieg Nvidias bei CoreWeave",
        "Er äußerte sich nicht zu CoreWeave"
      ],
      answer: 1,
      explain: "Huang sagte in Berlin, CoreWeaves Stärke verbessere sich täglich und dessen Finanzierungskosten sänken bereits wieder, obwohl die Kreditausfallversicherungen des Unternehmens zu diesem Zeitpunkt auf ein Rekordniveau gestiegen waren."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 7,
      q: "Angenommen, die EU würde sich doch noch auf die Nutzung der eingefrorenen russischen Vermögenswerte einigen. Was würde das für die von der Ukraine genannte Finanzierungslücke von rund 78,1 Mrd. Dollar für 2027 unter sonst gleichen Bedingungen am ehesten bedeuten?",
      options: [
        "Ein automatisches Ende des Ukraine-Kriegs",
        "Eine deutlich einfachere Deckung der Finanzierungslücke, ohne dass der Krieg dadurch automatisch endet",
        "Eine automatische Aufhebung aller EU-Sanktionen gegen Russland",
        "Keine Auswirkung, da die Gelder ohnehin nicht genutzt werden dürften"
      ],
      answer: 1,
      explain: "Eine Einigung über die rund 185 bis 210 Mrd. Euro eingefrorener Vermögenswerte würde die Finanzierungslücke der Ukraine für 2027 leichter decken helfen; den militärischen Konflikt selbst würde das aber nicht automatisch beenden."
    }
  ]
};
