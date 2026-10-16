// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-16",
  dateLabel: "Freitag, 16. Oktober 2026",
  updatedLabel: "Recherchestand 16.10.2026",
  marketNote: "Diese Ausgabe entsteht am Freitagmorgen, 16.10.2026, vor Handelsbeginn in Europa. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq gilt deshalb der Schlussstand von Donnerstag, 15.10. Am Donnerstag wurden in den USA die Erzeugerpreise (PPI) für September veröffentlicht und fielen mit +1,3 % im Monatsvergleich deutlich höher aus als erwartet; die US-Anleiherenditen sanken im Tagesverlauf dennoch, weil Anleger im Zuge des scharfen asiatischen Speicherchip-Ausverkaufs verstärkt in als sicher geltende Staatsanleihen auswichen. Dow Jones (+1,1 %), S&P 500 (+0,3 %) und Nasdaq Composite (+0,1 %) schlossen deshalb im Plus, während der technologienähere Nasdaq 100 laut einer Quelle rund 2 % verlor – beide Indizes sollten nicht verwechselt werden. In Asien setzte sich der schwere Ausverkauf bei Speicherchip-Werten vom Donnerstag (Kospi −7,6 %, Nikkei −4,9 %, Samsung und SK Hynix zweistellig im Minus) am Freitagmorgen laut mehreren Quellen nicht fort; es deutete sich eine teilweise Erholung an, ohne dass sich das einheitlich für die gesamte Region bestätigen ließe. Bei Brent-Öl und der Bund-Rendite weichen die gefundenen Quellen weiterhin teils voneinander ab; die Kennzahlen sind deshalb mit Spannen angegeben.",

  top: [
    { text: "Am Donnerstag veröffentlichte das US-Arbeitsministerium die Erzeugerpreise (PPI) für September: +1,3 % im Monatsvergleich, der stärkste Anstieg seit März 2022. Die US-Anleiherenditen sanken dennoch um 8 bis 11 Basispunkte auf rund 5,06 bis 5,10 %, weil Anleger im Zuge des asiatischen Speicherchip-Ausverkaufs verstärkt in Staatsanleihen auswichen. Dow Jones (+1,1 % auf 52.177,69 Punkte), S&P 500 (+0,3 % auf 7.744,06) und Nasdaq Composite (+0,1 %) schlossen im Plus, der DAX legte um 0,33 % auf 25.382,62 Punkte zu. Die am Donnerstag schwer getroffenen Speicherchip-Werte in Asien (Kospi −7,6 %, Nikkei −4,9 %) stabilisierten sich am Freitagmorgen laut mehreren Quellen teilweise.", ref: "s:1" },
    { text: "Fed-Chef Kevin Warsh legte sich bei seiner mit Spannung erwarteten Rede am 16.10. bei der IWF-Jahrestagung in Bangkok nicht auf einen Zinspfad für die FOMC-Sitzung am 27./28.10. fest („I don't prejudge meetings”). NY-Fed-Präsident Williams bekräftigte, für 2026 sei noch ein Zinsschritt angebracht, für 2027 keiner mehr; Chicago-Fed-Chef Goolsbee nannte die jüngsten Preisdaten „discouraging”. Die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung am 27./28.10. sank von Spitzenwerten nach den Inflationsdaten auf zuletzt rund 24 bis 30 %.", ref: "s:4" },
    { text: "Die Ukraine griff am 15.10. die russische Raffinerie Rjasan an und beendete damit eine laut Präsident Selenskyj auf US-Bitten eingelegte Pause bei Angriffen auf russische Ölanlagen. Präsident Trump nannte dies in einem Interview „a disgrace”, Außenminister Lawrow schloss erneut eine Waffenruhe aus. Beim EU-Gipfel am 15./16.10. in Brüssel vertagten die Staats- und Regierungschefs die Entscheidung über die Nutzung eingefrorener russischer Gelder für die Ukraine-Finanzierung erneut; Bundeskanzler Merz wies einen US-Vorschlag zur Verwaltung der Gelder zurück.", ref: "s:9" },
    { text: "In der Straße von Hormus wurde Mitte Oktober mindestens ein weiterer Frachter (GFS Pride) getroffen und sank; CENTCOM bestätigte eine iranische Urheberschaft, die iranischen Revolutionsgarden sprechen von einer Seemine. Der Flughafen Riad bleibt nach den Houthi-Angriffen vom 8. bis 10.10. mindestens bis zum 17.10. geschlossen; am 14./15.10. griffen Houthi-Kräfte zudem den Aramco-Hauptsitz in Dhahran und den Präsidentenpalast in Aden an.", ref: "s:10" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.382,62", change: "+0,33 % (+60,14 Pkt., Do-Schluss); eine andere Quelle nennt abweichend +0,3 % auf Basis von 25.299 Punkten", dir: "up", asof: "Schluss Do 15.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Mittwoch, 14.10., hatte der DAX bei 25.322,48 Punkten geschlossen (+0,25 %); am Donnerstag legte er auf 25.382,62 Punkte zu." }
      ],
      moved: {
        intro: "Als Hintergrund für Donnerstag nennen Berichte:",
        items: [
          "Die am Vormittag veröffentlichten, unerwartet hohen US-Erzeugerpreise belasteten die Stimmung zunächst, wurden von europäischen Anlegern aber vergleichsweise gelassen aufgenommen.",
          "Der scharfe Ausverkauf bei asiatischen Speicherchip-Werten vom Donnerstagmorgen wirkte sich auf den DAX nur begrenzt aus; mehr dazu in Meldung 14."
        ]
      },
      important: [
        { area: "Technologie", text: "Die asiatischen Speicherchip-Werte stabilisierten sich am Freitagmorgen laut mehreren Quellen wieder teilweise; mehr dazu in Meldung 1 und Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ARIVA.DE/dpa-AFX: Börsentag – Dax noch robust im KI-Ausverkauf", url: "https://www.ariva.de/news/dpa-afx-boersentag-auf-einen-blick-dax-noch-robust-im-12169808" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.171,15", change: "−0,3 % (−19 Pkt., Do-Schluss)", dir: "down", asof: "Schluss Do 15.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Mittwoch hatte der Euro Stoxx 50 je nach Quelle bei 6.190,37 bis 6.195,22 Punkten geschlossen (+0,38 bis +0,46 %); am Donnerstag gab er leicht nach." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Technologie- und chipnahe Werte belasteten den Index im Sog des asiatischen Ausverkaufs.",
          "Die unerwartet hohen US-Erzeugerpreise nährten zusätzliche Zinssorgen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Bund-Rendite gab am Donnerstag ebenfalls leicht nach; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.3 percent lower as tech sinks", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-3-percent-lower-as-tech-sinks/70331106" }
    },
    "sp500": {
      label: "S&P 500", value: "7.744,06", change: "+0,3 % (+25,12 Pkt., Do-Schluss)", dir: "up", asof: "Schluss Do 15.10.26", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Donnerstagsschluss: 52.177,69 Punkte (+1,1 %, +556,21 Pkt.) – stärker im Plus als S&P 500 und Nasdaq Composite, laut Berichten begünstigt durch eine Umschichtung in traditionelle Industriewerte." },
        { label: "Nasdaq Composite", text: "Donnerstagsschluss: rund 26.713 Punkte (+0,1 %, +20 Pkt.); der technologielastigere Nasdaq 100 verlor laut einer Quelle dagegen rund 2 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Donnerstag:",
        items: [
          "Die US-Erzeugerpreise (PPI) für September fielen mit +1,3 % im Monatsvergleich deutlich höher aus als erwartet – der stärkste Anstieg seit März 2022.",
          "Die Rendite zehnjähriger US-Staatsanleihen sank dennoch um rund 8 bis 11 Basispunkte, weil Anleger im Zuge des Ausverkaufs bei asiatischen Speicherchip-Werten verstärkt in als sicher geltende Staatsanleihen auswichen."
        ]
      },
      important: [
        { area: "Inflation", text: "Mehr zu den Erzeugerpreisen und weiteren US-Konjunkturdaten in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "Yahoo Finance: Dow, S&P 500 rise, Nasdaq trims losses as Treasury yields sink", url: "https://finance.yahoo.com/markets/live/stock-market-today-dow-sp-500-rise-nasdaq-trims-losses-as-treasury-yields-sink-153611834.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "≈ 26.713", change: "+0,1 % (+20 Pkt., Do-Schluss)", dir: "up", asof: "Schluss Do 15.10.26", story: 5,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie ist nicht identisch mit dem enger gefassten Nasdaq 100.",
      compare: [
        { label: "Nasdaq 100", text: "Der stärker technologielastige Nasdaq 100 schloss laut einer Quelle rund 2 % niedriger bei 29.950,81 Punkten – nicht zu verwechseln mit dem breiteren Nasdaq Composite." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die unerwartet hohen US-Erzeugerpreise nährten zunächst Zinssorgen.",
          "Die im Tagesverlauf sinkende US-Anleiherendite stützte den Composite-Index wieder, während einzelne große Technologiewerte im Nasdaq 100 unter dem asiatischen Chip-Ausverkauf litten."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "ad-hoc-news.de: Nasdaq Composite ends 20 points higher after hot PPI", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/nasdaq-composite-ends-20-points-higher-after-hot-ppi/70333694" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1208–1,1209 (EZB-Referenzkurs Do)", change: "+0,12 % ggü. Mi (1,1195)", dir: "up", asof: "EZB-Referenzkurs Do 15.10.26", story: 4,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Woche davor", text: "Der EZB-Referenzkurs war von 1,1181 Dollar am Montag über 1,1188 Dollar (Dienstag) und 1,1195 Dollar (Mittwoch) auf 1,1208 Dollar am Donnerstag gestiegen – der vierte Anstieg in Folge." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die sinkenden US-Anleiherenditen nach dem asiatischen Tech-Ausverkauf dämpften die Attraktivität von Dollar-Anlagen etwas."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed-Chef Warsh legte sich bei seiner IWF-Rede nicht auf einen Zinspfad fest; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Euro foreign exchange reference rates)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.de.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,06–5,10 %", change: "−8 bis −11 Bp ggü. Mittwoch (≈5,28–5,30 %)", dir: "down", asof: "Stand Do 15.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,1 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,1 % Zinsen pro Jahr.",
      compare: [
        { label: "Hintergrund", text: "Das Ausgangsniveau von rund 5,1 bis 5,3 % gilt laut Berichten als strukturell erhöht, unter anderem wegen Sorgen um das hohe US-Haushaltsdefizit; auch am Donnerstag blieb die Rendite damit deutlich über dem Niveau von Anfang 2026." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Donnerstag:",
        items: [
          "Die unerwartet hohen US-Erzeugerpreise (PPI, +1,3 % im Monatsvergleich) hätten für sich genommen eher höhere Renditen erwarten lassen.",
          "Stattdessen flüchteten Anleger im Zuge des scharfen Ausverkaufs bei asiatischen Speicherchip-Werten verstärkt in als sicher geltende US-Staatsanleihen, was die Rendite trotz der heißen Inflationsdaten sinken ließ."
        ]
      },
      important: [
        { area: "Fed", text: "Fed-Chef Warsh und weitere Fed-Mitglieder äußerten sich am 15./16.10. unterschiedlich zum weiteren Zinspfad; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields slide as investors flee to safety amid tech rout", url: "https://www.cnbc.com/2026/10/15/us-treasury-yields-investors-economic-data-.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,38–3,42 % (Quellenlage uneinheitlich)", change: "−6 bis −9 Bp ggü. Mittwoch (≈3,47–3,50 %)", dir: "down", asof: "Stand Do 15.10.26 (uneinheitliche Quellenlage)", story: 6, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,06 bis 5,10 % weiterhin deutlich über der Bund-Rendite von rund 3,38 bis 3,42 %; der Unterschied spiegelt unterschiedliche Zinspfade von Fed und EZB wider." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die EZB hält ihren Einlagensatz unverändert bei 2,50 % und dürfte laut einer früheren Reuters-Umfrage am 29.10. erneut pausieren.",
          "Der allgemeine Rückgang der US-Rendite im Zuge der weltweiten Flucht in sichere Anleihen wirkte sich auch auf europäische Staatsanleihen aus."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Mehr zur EZB-Position von Lagarde und zur Schnabel-Nachfolge in Meldung 6.", ref: "s:6" }
      ],
      source: { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.155–4.176 $", change: "+1,24 % (Do-Tagesverlauf); Freitagmorgen leicht niedriger bei ≈4.155,63 $", dir: "up", asof: "Stand Do 15.10./Fr-Morgen 16.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.150 bis 4.180 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "CNBC Select nennt für Donnerstagabend 4.170,70 Dollar, USAGold ein Tageshoch von 4.175,90 Dollar (+1,24 %); am Freitagmorgen (ca. 7:10 Uhr) lag der Preis laut einer weiteren Quelle bei rund 4.155,63 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die unerwartet hohen US-Erzeugerpreise nährten die Nachfrage nach Gold als Inflationsschutz.",
          "Die im Tagesverlauf sinkenden US-Anleiherenditen minderten zugleich die Opportunitätskosten des zinslosen Goldes."
        ]
      },
      important: [
        { area: "Zinsen", text: "Sinkende US-Anleiherenditen wirken grundsätzlich stützend auf den Goldpreis.", ref: "e:gold-why" }
      ],
      source: { title: "USAGold: Gold Climbs To $4,176 As Hot PPI Fuels Inflation-Hedge Bid", url: "https://www.usagold.com/daily-precious-metals-market-report-october-15-2026/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 105,3–105,9 $", change: "Do-Settlement 105,92 $; Fr-Morgen (Asien) −0,4 bis −0,6 % auf ≈105,3–105,5 $", dir: "down", asof: "Settlement Do 15.10./Fr-Vormittag 16.10.26", story: 10, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 105 Dollar je Fass (159 Liter) sind etwa 66 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI schloss am Donnerstag bei 97,97 Dollar je Barrel." }
      ],
      moved: {
        intro: "Berichte nennen gegenläufige Faktoren:",
        items: [
          "Die anhaltenden Tankerangriffe in der Straße von Hormus, darunter das Sinken des Frachters GFS Pride, wirkten weiterhin preistreibend (Meldung 10).",
          "Die US-Energiebehörde EIA hatte ihre Preisprognose für das vierte Quartal zuvor auf rund 105 Dollar angehoben.",
          "Am Freitagmorgen gab der Preis leicht nach, ohne dass eine einzelne Quelle dafür einen eindeutigen Grund nennt."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den Tankerangriffen und zur Lage am Flughafen Riad in Meldung 10.", ref: "s:10" }
      ],
      source: { title: "CNBC: Oil prices today: Brent, WTI fall", url: "https://www.cnbc.com/2026/10/15/oil-prices-today-brent-wti.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 82.000–82.400 $", change: "nach Rutsch unter 80.000 $ wieder erholt", dir: "up", asof: "Stand Fr-Morgen 16.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 80.000 bis 82.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf", text: "Bitcoin eröffnete den Donnerstag bei rund 81.573 Dollar (−1,8 %) und fiel zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar, bevor er sich bis Donnerstagabend auf rund 82.100 bis 82.400 Dollar erholte; am Freitagmorgen hielt sich der Kurs auf diesem Niveau." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Ausverkauf bei asiatischen Speicherchip- und KI-Werten belastete zwischenzeitlich auch Kryptowährungen.",
          "Käufer stiegen laut Berichten im Tagesverlauf wieder verstärkt ein, sodass sich der Kurs bis Freitagmorgen stabilisierte."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Bitcoin bounces back to $82,000 after fall below $80,000", url: "https://www.coindesk.com/business/2026/10/15/live-updates-bitcoin-back-under-usd81-000-as-ai-selloff-worsens" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-donnerstag-schluss-chip-stabilisierung-10-16", cats: ["markets", "tech"], when: "Schluss Do 15.10.2026 (Europa/USA) · Asien-Handel Fr 16.10.2026",
      headline: "US-Erzeugerpreise fallen hoch aus, US-Anleiherenditen sinken dennoch im Zuge einer Flucht in sichere Anlagen, asiatische Speicherchip-Werte stabilisieren sich am Freitagmorgen teilweise",
      sec30: "Am Donnerstag veröffentlichte das US-Arbeitsministerium die Erzeugerpreise (PPI) für September: +1,3 % im Monatsvergleich, der stärkste Anstieg seit März 2022. Die US-Anleiherenditen sanken dennoch, weil Anleger im Zuge des scharfen Ausverkaufs bei asiatischen Speicherchip-Werten vom Vortag verstärkt in als sicher geltende Staatsanleihen auswichen. Dow Jones (+1,1 % auf 52.177,69 Punkte), S&P 500 (+0,3 % auf 7.744,06) und Nasdaq Composite (+0,1 %) schlossen deshalb im Plus, während der technologienähere Nasdaq 100 laut einer Quelle rund 2 % verlor. In Europa legte der DAX um 0,33 % auf 25.382,62 Punkte zu, der Euro Stoxx 50 gab leicht um 0,3 % nach. Die am Donnerstag schwer getroffenen Speicherchip-Werte in Asien (Kospi −7,6 %, Nikkei −4,9 %, Samsung und SK Hynix zweistellig im Minus) stabilisierten sich am Freitagmorgen laut mehreren Quellen wieder teilweise, ohne dass sich das einheitlich für die gesamte Region bestätigen ließe.",
      blocks: [
        { h: "Wie haben sich die US-Indizes am Donnerstag trotz hoher Erzeugerpreise entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones legte um 1,1 % (+556,21 Punkte) auf 52.177,69 Punkte zu, der S&P 500 um 0,3 % (+25,12 Punkte) auf 7.744,06 Punkte, der Nasdaq Composite um 0,1 % (+20 Punkte) auf rund 26.713 Punkte.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:sp500" }] },
          { tag: "unbestaetigt", text: "Der stärker technologielastige Nasdaq 100 schloss laut einer Quelle dagegen rund 2 % niedriger bei 29.950,81 Punkten; Nasdaq Composite und Nasdaq 100 sollten nicht verwechselt werden." }
        ]},
        { h: "Warum sanken die US-Anleiherenditen trotz höherer Erzeugerpreise?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen sank um rund 8 bis 11 Basispunkte auf etwa 5,06 bis 5,10 %, obwohl die Erzeugerpreise mit +1,3 % im Monatsvergleich deutlich höher ausfielen als erwartet.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "einordnung", text: "Mehrere Quellen führen das auf eine Flucht in sichere Anlagen im Zuge des Ausverkaufs bei asiatischen Speicherchip-Werten zurück: Anleger kauften Staatsanleihen, obwohl die Inflationsdaten eher dagegen sprachen.",
            ask: [{ label: "Was bedeuten Renditen für Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX legte um 0,33 % (+60,14 Punkte) auf 25.382,62 Punkte zu; der Euro Stoxx 50 gab um 0,3 % (−19 Punkte) auf 6.171,15 Punkte nach." },
          { tag: "unbestaetigt", text: "Eine andere Quelle nennt für den DAX abweichend eine Veränderung von +0,3 % auf Basis eines Vortagswerts von 25.299 Punkten; die genaue Prozentangabe lässt sich nicht abschließend klären." }
        ]},
        { h: "Wie ist die Lage bei den asiatischen Speicherchip-Werten am Freitagmorgen?", items: [
          { tag: "fakt", text: "Nach dem Einbruch vom Donnerstag (Kospi −7,57 %, Nikkei −4,90 %, Samsung −9,48 %, SK Hynix −11,06 %) meldeten mehrere Quellen für den Freitagmorgen eine teilweise Erholung: Der Kospi eröffnete rund 1,8 bis 2,8 % höher, der Nikkei legte 0,78 bis 1,38 % zu, Samsung und SK Hynix gewannen jeweils ein bis drei Prozent.",
            ask: [{ label: "Mehr zum Hintergrund des Chip-Ausverkaufs", ref: "s:14" }] },
          { tag: "unbestaetigt", text: "Nicht überall setzte sich die Erholung fort: Der indonesische Aktienmarkt vertiefte sich laut einer Quelle um weitere rund 11 %." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass die US-Indizes trotz heißer Erzeugerpreisdaten zulegten, während die Anleiherendite sank, zeigt, wie stark kurzfristige Risikoscheu nach dem asiatischen Chip-Ausverkauf andere Faktoren überlagern kann. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Hintergründe des Chip-Ausverkaufs werden in Meldung 14 vertieft, die US-Konjunkturdaten in Meldung 5, die Fed-Reaktion in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why", "e:yield-stocks"],
      sources: [
        { title: "Yahoo Finance: Dow, S&P 500 rise, Nasdaq trims losses as Treasury yields sink", url: "https://finance.yahoo.com/markets/live/stock-market-today-dow-sp-500-rise-nasdaq-trims-losses-as-treasury-yields-sink-153611834.html" },
        { title: "ad-hoc-news.de: Nasdaq Composite ends 20 points higher after hot PPI", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/nasdaq-composite-ends-20-points-higher-after-hot-ppi/70333694" },
        { title: "ARIVA.DE/dpa-AFX: Börsentag – Dax noch robust im KI-Ausverkauf", url: "https://www.ariva.de/news/dpa-afx-boersentag-auf-einen-blick-dax-noch-robust-im-12169808" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.3 percent lower as tech sinks", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-3-percent-lower-as-tech-sinks/70331106" },
        { title: "TradingKey: Japan, South Korea stocks rebound (Kospi, Nikkei, SoftBank, SK Hynix, Samsung, Kioxia)", url: "https://www.tradingkey.com/analysis/stocks/more/262219917-japan-south-korea-stocks-kospi-nikkei-softbank-sk-hynix-samsung-kioxia-tradingkey" }
      ]
    },

    /* 2 MÄRKTE: RENDITEN */
    {
      id: "renditen-fed-ezb-sicherheitsflucht-10-16", cats: ["markets"], when: "PPI-Veröffentlichung Do 15.10., 14:30 Uhr MEZ · Fed-Leitzins 3,75–4,00 % seit 16.09. · FOMC-Sitzung 27./28.10.2026",
      headline: "US-Rendite sinkt trotz heißer Erzeugerpreise auf rund 5,1 Prozent, Bund-Rendite gibt ebenfalls leicht nach",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen fiel am Donnerstag um rund 8 bis 11 Basispunkte auf etwa 5,06 bis 5,10 Prozent, obwohl die US-Erzeugerpreise für September mit +1,3 Prozent im Monatsvergleich deutlich höher ausfielen als erwartet. Als Hintergrund nennen Berichte eine Flucht in sichere Anlagen im Zuge des Ausverkaufs bei asiatischen Speicherchip-Werten. Die Bund-Rendite bewegte sich mit rund 3,38 bis 3,42 Prozent ähnlich leicht nach unten; die Quellenlage bleibt hier uneinheitlich. Die eingepreiste Wahrscheinlichkeit für eine Fed-Zinserhöhung am 27./28.10. sank von einem Spitzenwert nach den Inflationsdaten auf zuletzt rund 24 bis 30 Prozent.",
      blocks: [
        { h: "Wie entwickelte sich die US-Rendite am Donnerstag?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen fiel um rund 8 bis 11 Basispunkte auf etwa 5,06 bis 5,10 %, nachdem sie am Mittwoch nach den Verbraucherpreisdaten noch auf rund 5,28 bis 5,30 % gesprungen war.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Warum sank die Rendite trotz hoher Erzeugerpreise?", items: [
          { tag: "einordnung", text: "CNBC und andere Quellen führen den Rückgang auf eine Flucht in sichere Anlagen zurück: Im Zuge des scharfen Ausverkaufs bei asiatischen Speicherchip-Werten kauften Anleger verstärkt US-Staatsanleihen, was deren Kurse steigen und die Rendite sinken ließ.",
            ask: [{ label: "Was ist der Zusammenhang zwischen Kurs und Rendite?", ref: "e:yield-meaning" }] },
          { tag: "fakt", text: "Die US-Erzeugerpreise (PPI) stiegen im Monatsvergleich um 1,3 % – der stärkste Anstieg seit März 2022; im Jahresvergleich ergibt sich mit 6,3 % der höchste Wert seit Dezember 2022.",
            ask: [{ label: "Mehr zu den Erzeugerpreisen", ref: "e:ppi-what" }] }
        ]},
        { h: "Wie hat sich die Markterwartung für die FOMC-Sitzung verändert?", items: [
          { tag: "unbestaetigt", text: "Laut CME FedWatch sprang die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung am 27./28.10. nach den Verbraucherpreisdaten kurzzeitig auf bis zu 53 %, fiel dann aber wieder zurück; Stand 16.10. werden rund 27 % für eine Erhöhung und rund 66 bis 73 % für ein Halten gehandelt. Kalshi nennt rund 27 %, Polymarket rund 24 % für eine Erhöhung – jeweils deutlich unter den Spitzenwerten direkt nach den Daten.",
            ask: [{ label: "Mehr zu den Fed-Reden und zum Zeitplan", ref: "s:4" }] }
        ]},
        { h: "Wie ist der Stand bei der Bund-Rendite?", items: [
          { tag: "unbestaetigt", text: "Die Bund-Rendite bewegte sich am Donnerstag mit rund 3,38 bis 3,42 % leicht niedriger als am Mittwoch (rund 3,47 bis 3,50 %); die verfügbaren Quellen weichen hier weiterhin voneinander ab.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,4 %?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die US-Rendite trotz heißerer Inflationsdaten sank, zeigt, dass kurzfristige Risikoscheu an den Märkten die reine Datenlogik zeitweise überlagern kann; für die Fed-Entscheidung am 27./28.10. bleibt die Gemengelage aus Inflationsdruck und Marktnervosität unübersichtlich." }
        ]}
      ],
      reaction: "Die Fed-Reden und die Marktpreisung werden in Meldung 4 vertieft, die EZB-Seite in Meldung 6.",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:fed-hike", "e:central-banks-why", "e:ppi-what"],
      sources: [
        { title: "CNBC: Treasury yields slide as investors flee to safety amid tech rout", url: "https://www.cnbc.com/2026/10/15/us-treasury-yields-investors-economic-data-.html" },
        { title: "U.S. Bureau of Labor Statistics: Producer Price Index News Release", url: "https://www.bls.gov/news.release/archives/ppi_10152026.htm" },
        { title: "Forbes: Fed 66% Likely To Hold Rates Steady Following High Inflation Data", url: "https://www.forbes.com/sites/digital-assets/2026/10/14/fed-66-likely-to-hold-rates-steady-following-high-inflation-data/" },
        { title: "Kalshi News: October Fed rate hike odds jump to 33% after inflation report", url: "https://news.kalshi.com/p/october-fed-rate-hike-odds-jump-to-33-after-inflation-report" },
        { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-16", cats: ["markets"], when: "Stand Do 15.10./Fr-Morgen 16.10.2026",
      headline: "Gold steigt nach heißen US-Erzeugerpreisen, Bitcoin erholt sich nach Rutsch unter 80.000 Dollar, Euro legt weiter zu",
      sec30: "Gold stieg am Donnerstag im Tagesverlauf um rund 1,24 % und erreichte ein Tageshoch von 4.175,90 Dollar je Feinunze, nachdem die US-Erzeugerpreise höher als erwartet ausgefallen waren und die US-Anleiherenditen zugleich sanken. Am Freitagmorgen lag der Preis bei rund 4.155,63 Dollar. Bitcoin eröffnete den Donnerstag mit einem Rückgang auf rund 81.573 Dollar und fiel zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar, bevor er sich bis Freitagmorgen auf rund 82.000 bis 82.400 Dollar erholte. Der Euro legte laut EZB-Referenzkurs weiter leicht zu, von 1,1195 auf 1,1208 Dollar.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Donnerstag im Tagesverlauf um rund 1,24 % auf ein Tageshoch von 4.175,90 Dollar je Feinunze; am Freitagmorgen (ca. 7:10 Uhr) lag der Preis laut einer Quelle bei rund 4.155,63 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die unerwartet hohen US-Erzeugerpreise, die die Nachfrage nach Gold als Inflationsschutz stützten, sowie die im Tagesverlauf sinkenden US-Anleiherenditen, die die Opportunitätskosten des zinslosen Goldes verringerten." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "fakt", text: "Bitcoin eröffnete den Donnerstag bei rund 81.573 Dollar (−1,8 %) und fiel zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar, bevor er sich bis Donnerstagabend auf rund 82.100 bis 82.400 Dollar erholte; am Freitagmorgen hielt sich der Kurs auf diesem Niveau.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "unbestaetigt", text: "Als Hintergrund für den zwischenzeitlichen Rückgang nennen Berichte den Ausverkauf bei asiatischen Speicherchip- und KI-Werten, der auch auf Kryptowährungen ausstrahlte; für die Erholung werden wieder einsteigende Käufer genannt." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs stieg von 1,1195 Dollar am Mittwoch auf 1,1208 Dollar am Donnerstag – der vierte Anstieg in Folge seit Montag (1,1181 Dollar).",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold und der Euro zulegten, während Bitcoin nach einem kurzen Einbruch unter 80.000 Dollar wieder aufholte, passt zu einer Phase, in der sinkende US-Renditen mehrere Anlageklassen zugleich stützten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Bewegungen hängen mit der sinkenden US-Rendite in Meldung 2 und dem Chip-Ausverkauf in Meldung 14 zusammen.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "USAGold: Gold Climbs To $4,176 As Hot PPI Fuels Inflation-Hedge Bid", url: "https://www.usagold.com/daily-precious-metals-market-report-october-15-2026/" },
        { title: "CNBC Select: The price of gold today, Oct. 15, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-15-2026/" },
        { title: "CoinDesk: Bitcoin bounces back to $82,000 after fall below $80,000", url: "https://www.coindesk.com/business/2026/10/15/live-updates-bitcoin-back-under-usd81-000-as-ai-selloff-worsens" },
        { title: "EZB: Euro-Referenzkurs (Euro foreign exchange reference rates)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.de.html" }
      ]
    },

    /* 4 WIRTSCHAFT: FED-REDEN */
    {
      id: "fed-warsh-williams-goolsbee-fomc-odds-10-16", cats: ["economy"], when: "IWF-Jahrestagung Bangkok 12.–18.10. · Warsh-Rede 16.10. · Williams-Interview 15.10. · FOMC-Blackout ab 17.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "Fed-Chef Warsh legt sich bei IWF-Rede nicht auf Zinspfad fest, weitere Fed-Mitglieder äußern sich unterschiedlich zur Oktober-Sitzung",
      sec30: "Fed-Chef Kevin Warsh sagte am 16.10. bei der IWF-Jahrestagung in Bangkok, er greife Sitzungen nicht vorweg, und lieferte keine klare Vorab-Festlegung für die FOMC-Sitzung am 27./28.10. NY-Fed-Präsident John Williams bekräftigte am 15.10., für 2026 sei aus seiner Sicht noch ein weiterer Zinsschritt angebracht, für 2027 aber keiner mehr nötig. Chicago-Fed-Präsident Austan Goolsbee nannte die jüngsten Preisdaten „discouraging”, zeigte sich aber vorsichtig optimistisch, falls die Inflation vor allem durch Zölle und den Nahost-Konflikt getrieben sei. Fed-Vizechefin Michelle Bowman sagte, es gebe „no rush to raise rates”. Die eingepreiste Wahrscheinlichkeit für eine Zinserhöhung am 27./28.10. sank von Spitzenwerten nach den Inflationsdaten auf zuletzt rund 24 bis 30 %; die Blackout-Periode vor der Sitzung beginnt am 17.10.",
      blocks: [
        { h: "Was sagte Fed-Chef Warsh bei seiner IWF-Rede?", items: [
          { tag: "position", text: "Kevin Warsh sagte am 16.10. in Bangkok, er lege sich nicht im Voraus auf Entscheidungen einzelner Sitzungen fest („I don't prejudge meetings”); er betonte zugleich, Künstliche Intelligenz könne mittelfristig die Produktivität steigern und so Inflationserwartungen dämpfen.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was sagen andere Fed-Mitglieder?", items: [
          { tag: "position", text: "NY-Fed-Präsident John Williams sagte am 15.10., er habe seine Einschätzung nicht geändert, dass für 2026 noch ein weiterer Zinsschritt angebracht sein könnte; für 2027 sehe er aktuell keinen Bedarf für weitere Erhöhungen." },
          { tag: "position", text: "Chicago-Fed-Präsident Austan Goolsbee bezeichnete die jüngsten Verbraucher- und Erzeugerpreisdaten als „discouraging” und warnte, hielte sich der monatliche Preistrend, entspräche das einer annualisierten Kernrate von rund 4 % – das sei „not acceptable”; er zeigte sich aber vorsichtig optimistisch, falls der Preisdruck vor allem auf Zölle, den Nahost-Konflikt oder Lieferkettenprobleme zurückgehe." },
          { tag: "position", text: "Fed-Vizechefin Michelle Bowman sagte, die Inflation sei zu hoch, es bestehe aber „no rush to raise rates”." }
        ]},
        { h: "Wie hat sich die Markterwartung für die Sitzung am 27./28.10. entwickelt?", items: [
          { tag: "unbestaetigt", text: "CME FedWatch zeigte nach den Inflationsdaten kurzzeitig bis zu 53 % Wahrscheinlichkeit für eine Erhöhung, fiel dann aber auf rund 27 % zurück. Kalshi nennt für den 16.10. rund 27 %, Polymarket rund 24 % Erhöhungswahrscheinlichkeit – jeweils deutlich unter den Spitzenwerten vom 14.10. (bis zu 33 bzw. 47,5 %). Für die Dezember-Sitzung wird eine höhere Erhöhungswahrscheinlichkeit von rund 63 % gehandelt.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "fakt", text: "Die FOMC-Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, beginnt am 17.10. und dauert bis zur Sitzung am 27./28.10.; Warshs Rede am 16.10. gehörte damit zu den letzten öffentlichen Stellungnahmen davor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Fed-Mitglieder je nach Zuständigkeitsbereich und Einschätzung der Datenlage weiterhin unterschiedliche Signale senden, während sich die Markterwartung nach den Inflationsdaten mehrfach deutlich verschoben hat, zeigt eine ungewöhnlich hohe Unsicherheit kurz vor der Sitzung am 27./28.10." }
        ]}
      ],
      reaction: "Die zugrundeliegende Renditebewegung wird in Meldung 2 behandelt, die EZB-Seite in Meldung 6, die US-Konjunkturdaten in Meldung 5.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Seoul Economic Daily: US rate path clouded as markets await Warsh's Oct. 16 remarks", url: "https://en.sedaily.com/international/2026/10/16/us-rate-path-clouded-as-markets-await-warshs-oct-16-remarks" },
        { title: "FXStreet: Fed's Warsh says he would deliver price stability but won't pre-judge meetings", url: "https://www.fxstreet.com/news/breaking-feds-warsh-says-he-would-deliver-price-stability-but-wont-pre-judge-meetings-202610160346" },
        { title: "The Star: Williams signals Fed nearing peak rates", url: "https://www.thestar.com.my/business/business-news/2026/10/15/williams-signals-fed-nearing-peak-rates" },
        { title: "Investing.com/Reuters: Fed's Goolsbee on inflation 'discouraging' but still some optimism", url: "https://www.investing.com/news/economy-news/feds-goolsbee-on-inflation-discouraging-but-still-some-optimism-4952861" },
        { title: "Kalshi News: October Fed rate hike odds jump to 33% after inflation report", url: "https://news.kalshi.com/p/october-fed-rate-hike-odds-jump-to-33-after-inflation-report" }
      ]
    },

    /* 5 WIRTSCHAFT: US-KONJUNKTURDATEN */
    {
      id: "us-konjunkturdaten-ppi-einzelhandel-iwf-10-16", cats: ["economy"], when: "PPI/Einzelhandel/Erstanträge veröffentlicht Do 15.10. · IWF-Weltwirtschaftsausblick 13.10. · Übergangsfinanzierung bis 11.12.2026",
      headline: "US-Erzeugerpreise und Einzelhandelsumsätze fallen deutlich höher aus als erwartet, IWF hebt globale Wachstumsprognose an",
      sec30: "Am Donnerstag veröffentlichte das Bureau of Labor Statistics die Erzeugerpreise (PPI) für September: +1,3 % im Monatsvergleich, der stärkste Anstieg seit März 2022, getrieben vor allem von Energie (+10,8 %); im Jahresvergleich ergibt sich mit +6,3 % der höchste Wert seit Dezember 2022. Die Einzelhandelsumsätze stiegen im September um 0,8 % (Konsens: 0,3 %). Die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis zum 10.10. leicht auf 199.000. Der neue IWF-Weltwirtschaftsausblick von der Jahrestagung in Bangkok (12.–18.10.) hebt das globale Wachstum 2026 auf 3,1 % an und sieht die weltweite Kopfinflation bei 4,7 % (2026) bzw. 4,1 % (2027); für die USA bleibt die Wachstumsprognose stabil bei 2,3 %. Ein Regierungsshutdown findet weiterhin nicht statt, die Übergangsfinanzierung läuft bis zum 11.12.2026.",
      blocks: [
        { h: "Was zeigen die US-Erzeugerpreise für September?", items: [
          { tag: "fakt", text: "Die Erzeugerpreise stiegen im Monatsvergleich um 1,3 % – der stärkste Anstieg seit März 2022; die Güterpreise legten um 2,6 % zu, mehr als 80 % davon entfielen auf Energie (+10,8 %). Im Jahresvergleich ergibt sich mit +6,3 % der höchste 12-Monats-Wert seit Dezember 2022.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "e:ppi-what" }] }
        ]},
        { h: "Wie entwickelten sich Einzelhandel und Arbeitsmarkt?", items: [
          { tag: "fakt", text: "Die Einzelhandelsumsätze stiegen im September um 0,8 % gegenüber dem Vormonat (Konsens: 0,3 %), nach einem aufwärtsrevidierten Anstieg von 1,3 % im August; Tankstellenumsätze legten um 6,4 % zu, die Kerngruppe ohne Auto, Tankstellen und Baumärkte nur um 0,1 %." },
          { tag: "fakt", text: "Die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis zum 10.10. leicht auf 199.000 (+1.000 gegenüber der Vorwoche); die Folgeanträge sanken auf 1,710 Millionen." }
        ]},
        { h: "Was zeigt der neue IWF-Weltwirtschaftsausblick?", items: [
          { tag: "fakt", text: "Der IWF hebt in seinem bei der Jahrestagung in Bangkok vorgestellten Weltwirtschaftsausblick die globale Wachstumsprognose für 2026 auf 3,1 % an; die weltweite Kopfinflation wird mit 4,7 % (2026) bzw. 4,1 % (2027) angegeben. Für die USA bleibt die Wachstumsprognose mit 2,3 % für 2026 und 2027 stabil, gestützt durch Konsum, Fiskalpolitik und Technologieinvestitionen." },
          { tag: "unbestaetigt", text: "Der IWF warnt zugleich vor Risiken durch hohe KI-Investitionen und strukturelle US-Haushaltsdefizite von rund 6 % des Bruttoinlandsprodukts." }
        ]},
        { h: "Gibt es einen Regierungsshutdown?", items: [
          { tag: "fakt", text: "Ein Regierungsshutdown findet nicht statt: Eine im September vom Kongress verabschiedete Übergangsfinanzierung sichert den Bundeshaushalt bis zum 11.12.2026; die nächste Haushaltsdeadline fällt damit in die Zeit nach den Zwischenwahlen (Midterms)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl Erzeugerpreise als auch Einzelhandelsumsätze deutlich höher ausfielen als erwartet, während der Arbeitsmarkt laut den Erstanträgen vergleichsweise stabil bleibt, liefert aus Sicht von Marktbeobachtern gemischte Signale für die Fed-Entscheidung am 27./28.10." }
        ]}
      ],
      reaction: "Die Fed-Reaktion wird in Meldung 4 vertieft, die Marktreaktion in Meldung 1 und 2.",
      terms: ["inflation", "erzeugerpreise"],
      followups: ["e:ppi-what", "e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "U.S. Bureau of Labor Statistics: Producer Price Index News Release, September 2026", url: "https://www.bls.gov/news.release/archives/ppi_10152026.htm" },
        { title: "IMF: World Economic Outlook Press Briefing Transcript, Annual Meetings 2026", url: "https://www.imf.org/en/news/articles/2026/10/13/tr-101326-press-briefing-transcript-world-economic-outlook-annual-meetings-2026" },
        { title: "Breaking Defense: House passes funding stopgap, averting government shutdown in October", url: "https://breakingdefense.com/2026/09/house-passes-funding-stopgap-averting-government-shutdown-in-october/" },
        { title: "CNBC: IMF, World Bank Annual Meetings October Bangkok", url: "https://www.cnbc.com/2026/10/12/imf-world-bank-annual-meetings-october-bangkok-asia-.html" }
      ]
    },

    /* 6 WIRTSCHAFT: EZB */
    {
      id: "ezb-lagarde-schnabel-nachfolge-10-16", cats: ["economy"], when: "Lagarde-Rede IWF-Bangkok · nächste EZB-Zinsentscheidung 29.10. · Bewerbungsfrist Schnabel-Nachfolge 28.10.2026",
      headline: "EZB-Präsidentin Lagarde sieht weiterhin keine Zweitrundeneffekte, Nachfolge für Schnabels EZB-Direktoriumsposten weiter offen",
      sec30: "EZB-Präsidentin Christine Lagarde bekräftigte bei der IWF/Weltbank-Jahrestagung in Bangkok, die Inflation sei überwiegend energiegetrieben, man sehe bislang keine Zweitrundeneffekte und lege sich nicht im Voraus auf einen Zinspfad fest. Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10. Isabel Schnabel scheidet Anfang Januar 2027 aus dem EZB-Direktorium aus und wechselt zum IWF; die Bewerbungsfrist für Kandidaten der Eurozonen-Staaten auf ihre Nachfolge läuft bis zum 28.10., ohne dass bislang ein offizieller deutscher Kandidat feststeht.",
      blocks: [
        { h: "Was sagte Lagarde in Bangkok?", items: [
          { tag: "position", text: "Lagarde sagte, die Inflation sei überwiegend, aber nicht ausschließlich durch Energiepreise getrieben; man sehe bislang keine Zweitrundeneffekte, könne aber nicht warten, bis diese vollständig sichtbar seien, sondern suche aktiv nach Anzeichen dafür. Man lege sich nicht im Voraus auf einen bestimmten Zinspfad fest – ein „gradueller”, abwägender Ansatz.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]},
        { h: "Wie ist der Stand bei der EZB-Zinspolitik?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %, zuletzt angehoben im September als Reaktion auf den Energiepreisschock; die nächste Zinsentscheidung fällt am 29.10.2026." },
          { tag: "unbestaetigt", text: "Eine zuvor veröffentlichte Reuters-Umfrage unter Ökonomen sah eine deutliche Mehrheit für eine Pause am 29.10. und eine mögliche weitere Erhöhung im Dezember; eine aktualisierte Umfrage nach den jüngsten US-Daten ließ sich in der Recherche nicht finden.",
            ask: [{ label: "Mehr zur Fed-Seite", ref: "s:4" }] }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Isabel Schnabel scheidet Anfang Januar 2027 aus dem EZB-Direktorium aus und wechselt als „Financial Counsellor” zum IWF nach Washington; die Bewerbungsfrist für Kandidaten der Eurozonen-Staaten läuft bis zum 28.10.2026." },
          { tag: "unbestaetigt", text: "Deutschland versucht laut Berichten, das einflussreiche Marktoperationen-Ressort für einen deutschen Kandidaten zu sichern; ein offizieller Name steht bislang nicht fest. Zusätzlich stehen 2027 der Abgang von EZB-Chefökonom Philip Lane und das Ende von Lagardes eigener Amtszeit an." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Lagarde einen abwägenden Kurs ohne Vorab-Festlegung signalisiert, während zugleich eine umfassende Personalnachfolge im EZB-Direktorium ansteht, zeigt, dass sich geldpolitische und personelle Weichenstellungen in Europa derzeit überlagern." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 4 behandelt, die Renditeentwicklung in Meldung 2.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "IMF: Annual Meetings 2026 Schedule", url: "https://www.imf.org/en/meetings/2026/annual/schedule" },
        { title: "OMFIF: ECB presidency – the race gets under way", url: "https://www.omfif.org/2026/01/ecb-presidency-the-race-gets-under-way/" },
        { title: "Yahoo Finance: ECB succession puzzle starts early", url: "https://finance.yahoo.com/economy/policy/articles/ecb-succession-puzzle-starts-early-120200876.html" },
        { title: "CNBC: IMF, World Bank Annual Meetings October Bangkok", url: "https://www.cnbc.com/2026/10/12/imf-world-bank-annual-meetings-october-bangkok-asia-.html" }
      ]
    },

    /* 7 DEUTSCHLAND: BERLIN-KOALITION */
    {
      id: "berlin-sondierung-zeitplan-10-16", cats: ["germany"], when: "Sondierungs-Wiederaufnahme Mi-Abend 14.10. · Ergebnis bis So 18.10. erwartet · Grünen-Landesausschuss Mo 19.10.2026",
      headline: "Berliner SPD, Grüne und Linke setzen Koalitionssondierungen fort, Ergebnis bis Sonntag erwartet",
      sec30: "Nachdem SPD und Grüne die Berliner Koalitionssondierungen mit der Linken am Dienstag wegen der Aufnahme der Politikerin Vanessa Emde in die Linksfraktion unterbrochen hatten, einigten sich alle drei Parteien am Mittwochabend auf eine Fortsetzung; die gemeinsame Vereinbarung zum Umgang mit Antisemitismus soll fester Bestandteil eines möglichen Koalitionsvertrags werden. Die Sondierungsergebnisse sollen bis Sonntag, 18.10., vorliegen; am Montag, 19.10., soll ein Grünen-Landesausschuss über die Aufnahme von Koalitionsverhandlungen entscheiden. Als offene Streitpunkte gelten unter anderem der Umgang mit der Vergesellschaftung großer Wohnungsunternehmen, Haushaltsdefizite und Familienpolitik.",
      blocks: [
        { h: "Wie wurde die Unterbrechung aufgelöst?", items: [
          { tag: "position", text: "Grünen-Fraktionsvorsitzende Bettina Jarasch bezeichnete die Unterbrechung als „ein Knall, der uns vielleicht allen auch gutgetan hat”; Linken-Spitzenkandidatin Elif Eralp sagte, „Missverständnisse sind ausgeräumt”; SPD-Spitzenkandidat Steffen Krach nannte die Antisemitismus-Vereinbarung die „Basis für alles, was in den kommenden Tagen und Wochen noch kommt”.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] }
        ]},
        { h: "Was ist der weitere Zeitplan?", items: [
          { tag: "fakt", text: "Die Ergebnisse der Sondierungen sollen bis Sonntag, 18.10., vorliegen; am Montag, 19.10., soll ein Landesausschuss der Grünen darüber entscheiden, ob formale Koalitionsverhandlungen aufgenommen werden." }
        ]},
        { h: "Welche Streitpunkte bestehen noch?", items: [
          { tag: "fakt", text: "Als offene Streitpunkte zwischen den drei Parteien gelten unter anderem der Umgang mit der Vergesellschaftung großer Wohnungsunternehmen, Haushaltsdefizite im Landeshaushalt und Fragen der Familienpolitik." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich SPD, Grüne und Linke nach der Unterbrechung auf eine verbindlichere Vereinbarung geeinigt haben, bedeutet noch keine Einigung in der Sache; der enge Zeitplan bis Sonntag zeigt, wie viele inhaltliche Fragen in kurzer Zeit geklärt werden müssen." }
        ]}
      ],
      reaction: "Die bundespolitische Lage wird in Meldung 8 vertieft.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel Liveblog: Linke, Grüne und SPD verständigen sich auf Wiederaufnahme von Sondierungen", url: "https://www.tagesspiegel.de/berlin/liveblog/schon-donnerstag-soll-es-weitergehen-linke-grune-und-spd-verstandigen-sich-auf-wiederaufnahme-von-sondierungen-16053722.html" },
        { title: "Berliner Zeitung: Berlin – SPD und Grüne unterbrechen Sondierungen wegen Vanessa Emde", url: "https://www.berliner-zeitung.de/article/berlin-spd-gruene-linke-sondierungen-unterbrochen-10492114" }
      ]
    },

    /* 8 DEUTSCHLAND: HAUSHALT/RENTE/SCHWEITZER/WEHRDIENST/UMFRAGEN */
    {
      id: "bundeshaushalt-rente-schweitzer-wehrdienst-10-16", cats: ["germany"], when: "Haushaltsanhörung 12.10. · Reservestärkungsgesetz 1. Lesung 15.10. · Umfragen INSA/Forsa 13.10.2026",
      headline: "Bundestag berät über Haushalt 2027 und Reservestärkungsgesetz, neuer Arbeitsminister Schweitzer positioniert sich zu Bürgergeld-Sanktionen",
      sec30: "Der Haushaltsausschuss des Bundestags führte am 12.10. eine öffentliche Anhörung zum Haushaltsbegleitgesetz 2027 durch; der von Finanzminister Klingbeil eingebrachte Entwurf sieht Ausgaben von 555,4 Mrd. Euro und eine Nettokreditaufnahme von rund 118,7 Mrd. Euro vor, die abschließende Lesung im Plenum ist für den 24. bis 27.11. geplant. Der neue Bundesarbeitsminister Alexander Schweitzer positionierte sich laut einem Interview gegen vollständige Leistungssanktionen bei der Grundsicherung. Der Bundestag debattierte am 15.10. in erster Lesung über ein Reservestärkungsgesetz, das eine verpflichtende Heranziehung von Reservisten auch außerhalb von Spannungs- oder Verteidigungsfall ermöglichen soll. Neue Umfragen von INSA und Forsa zeigen weiterhin deutlich unterschiedliche Werte für die AfD.",
      blocks: [
        { h: "Was ist der Stand beim Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss führte am 12.10. eine rund zweistündige öffentliche Anhörung zum Haushaltsbegleitgesetz 2027 durch. Der Regierungsentwurf sieht Gesamtausgaben von 555,4 Mrd. Euro (+30,9 Mrd. Euro ggü. 2026) und eine Nettokreditaufnahme von rund 118,7 Mrd. Euro vor; der Verteidigungsetat steigt mit 109,7 Mrd. Euro am stärksten, größter Einzeletat bleibt Arbeit und Soziales mit 201,5 Mrd. Euro.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "e:debt-brake" }] },
          { tag: "fakt", text: "Die abschließende Bereinigungssitzung des Haushaltsausschusses ist für den 12.11. terminiert, die 2./3. Lesung im Bundestagsplenum für den 24. bis 27.11.2026." }
        ]},
        { h: "Wie positioniert sich der neue Arbeitsminister Schweitzer zu Bürgergeld-Sanktionen?", items: [
          { tag: "position", text: "Alexander Schweitzer lehnte laut einem vorab bekanntgewordenen Interview vollständige Leistungssanktionen („Totalsanktionen”) bei der Grundsicherung ab und kritisierte den Ansatz, Wachstum vor allem über Kürzungen im Sozialstaat erreichen zu wollen, als Ausdruck „des kalten neoliberalen Geistes der Neunziger”.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]},
        { h: "Was wurde zum Reservestärkungsgesetz debattiert?", items: [
          { tag: "fakt", text: "Der Bundestag debattierte am 15.10. in erster Lesung über das Reservestärkungsgesetz der Bundesregierung, das die Verfügbarkeit und Einsatzbereitschaft der Reserve verbessern soll; erstmals soll eine verpflichtende Heranziehung von Reservisten zu Diensten auch außerhalb von Spannungs- oder Verteidigungsfall möglich werden. Die Bundesregierung rechnet mit jährlichen Mehrausgaben von rund 43,1 Mio. Euro ab 2027. Nach der Aussprache wurde der Entwurf in die Ausschüsse überwiesen." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "Die INSA-Umfrage vom 13.10. sieht die AfD bei 30,0 %, CDU/CSU bei 18,5 %, Grüne bei 14,0 %, SPD bei 13,5 %, Linke bei 10,0 %, FDP bei 4,5 %. Die Forsa-Umfrage vom selben Tag sieht die AfD dagegen bei 26 %, Union bei 19 %, Grüne bei 17 %, SPD bei 14 %, Linke bei 12 %, FDP bei 4 % – die Institute weichen vor allem bei AfD und Grünen deutlich voneinander ab.",
            ask: [{ label: "Wie entscheidet eine solche Mehrheitsfrage über eine Koalition?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mit Schweitzer ein neuer Minister eine kritischere Position zu Bürgergeld-Sanktionen einnimmt, während zugleich der Haushalt 2027 und ein neues Wehrdienst-Vorhaben parallel durch den Bundestag laufen, zeigt, wie viele innenpolitische Baustellen derzeit gleichzeitig bearbeitet werden." }
        ]}
      ],
      reaction: "Die Berliner Koalitionsfrage wird in Meldung 7 behandelt, die Verteidigungsausgaben in Meldung 11.",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "Handelsblatt: Haushaltswoche in unruhigen Zeiten – Das steckt im Etat 2027", url: "https://www.handelsblatt.com/politik/deutschland/bundestag-haushaltswoche-in-unruhigen-zeiten-das-steckt-im-etat-2027/100252742.html" },
        { title: "madeinbocholt.de: Bürgergeld – Schweitzer bezweifelt Rechtmäßigkeit neuer Sanktionen", url: "https://madeinbocholt.de/buergergeld-schweitzer-bezweifelt-rechtmaessigkeit-neuer-sanktionen/" },
        { title: "Deutscher Bundestag: Reservestärkungsgesetz (KW42)", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw42-de-reservestaerkungsgesetz-1223596" },
        { title: "dawum.de: Wahlumfragen INSA/Forsa", url: "https://dawum.de/Bundestag/Forsa/" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: UKRAINE/EU-GIPFEL */
    {
      id: "ukraine-angriffe-eu-gipfel-vermoegen-10-16", cats: ["world", "geo"], when: "Großangriff Nacht 13./14.10. · Ryazan-Angriff 15.10. · EU-Gipfel 15./16.10.2026",
      headline: "Ukraine setzt Angriffe auf russische Raffinerien fort, EU-Gipfel vertagt Entscheidung über eingefrorene russische Gelder erneut",
      sec30: "Nach dem russischen Großangriff auf ukrainische Energieinfrastruktur in der Nacht zum 14.10. griff die Ukraine am 15.10. die russische Raffinerie Rjasan mit Drohnen an; Präsident Selenskyj erklärte, die Ukraine habe die Angriffe auf russische Raffinerien drei Tage lang auf Bitten der USA pausiert, die Pause nun aber beendet. US-Präsident Trump bezeichnete die wiederaufgenommenen Angriffe als „a disgrace” und sagte, Selenskyj treibe damit den Ölpreis hoch. Außenminister Lawrow schloss am 15.10. erneut eine Waffenruhe aus. Beim EU-Gipfel am 15./16.10. in Brüssel vertagten die Staats- und Regierungschefs die Entscheidung über die Nutzung eingefrorener russischer Gelder für die Ukraine-Finanzierung; Bundeskanzler Merz wies einen US-Vorschlag zurück, die Gelder in ein von Washington kontrolliertes Instrument zu überführen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Die Ukraine griff am 15.10. die russische Ölraffinerie Rjasan an, die drittgrößte Russlands; die Anlage geriet in Brand, Schulen in der Umgebung wurden vorübergehend geschlossen.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:10" }] },
          { tag: "position", text: "Präsident Selenskyj erklärte, die Ukraine habe ihre Angriffe auf russische Raffinerien drei Tage lang auf Bitten Washingtons ausgesetzt, brach die Pause nun aber ab: „We're done.”" }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "position", text: "US-Präsident Trump bezeichnete die wiederaufgenommenen ukrainischen Raffinerie-Angriffe in einem Newsmax-Interview am 15.10. als „a disgrace” und sagte, Selenskyj treibe damit den Weltölpreis hoch; er wiederholte: „I'm not a big fan of Zelensky.”" },
          { tag: "position", text: "Außenminister Lawrow schloss am 15.10. auf einer Pressekonferenz in Aserbaidschan erneut eine Waffenruhe aus: „There will be no ceasefire — certainly not one that would allow him to recover and replenish his weapons.”" },
          { tag: "fakt", text: "Präsident Macron traf Selenskyj am 15.10. in Brüssel und sagte weitere Hilfe zu." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Trump hatte am 11.10. auf Truth Social einen sofortigen „Energie-Waffenstillstand” zwischen Russland und der Ukraine verkündet, dem angeblich beide Seiten zugestimmt hätten; Selenskyj hatte dies gegenüber Axios als für ihn neue Information bezeichnet. In der Nacht zum 14.10. griff Russland dennoch mit 39 ballistischen Raketen und über 120 Drohnen ukrainische Energieanlagen an, mindestens neun Menschen wurden getötet, rund 500.000 bis 600.000 Menschen verloren vorübergehend den Strom." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Beim EU-Gipfel am 15./16.10. in Brüssel vertagten die Staats- und Regierungschefs die Entscheidung über die Nutzung von bis zu 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine-Finanzierung; die EU-Kommission soll „so bald wie möglich” einen Vorschlag vorlegen, eine Entscheidung wird nun kurz vor Weihnachten erwartet." },
          { tag: "position", text: "Bundeskanzler Merz wies vor dem Gipfel einen US-Vorschlag zurück, die eingefrorenen Gelder in ein von Washington kontrolliertes Finanzkonstrukt zu überführen: „Das sind Assets, die in Europa eingefroren sind, und die sollten auch in Europa eingefroren bleiben... Das ist unsere Angelegenheit, und darüber entscheiden wir.”" },
          { tag: "unbestaetigt", text: "Belgiens Premierminister De Wever lehnt eine Nutzung der Gelder laut Berichten weiterhin ab und bezeichnete dies als möglichen „Kriegsakt”; er fordert rechtsverbindliche Garantien aller EU-Staaten. Schweden, die Niederlande, Spanien und Polen unterstützen dagegen den Zugriff auf die Gelder." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Ukraine ihre Raffinerie-Angriffe trotz des von Trump behaupteten Waffenstillstands wiederaufnahm und die EU die Entscheidung über die russischen Gelder erneut vertagte, zeigt, wie weit die beteiligten Seiten in zentralen Fragen weiterhin voneinander entfernt sind." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 10 vertieft, die deutsche Verteidigungspolitik in Meldung 11.",
      terms: [],
      followups: ["e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "The Moscow Times: Ukrainian drones spark fire at Ryazan refinery as Zelensky vows to resume attacks", url: "https://www.themoscowtimes.com/2026/10/15/ukrainian-drones-spark-fire-at-ryazan-refinery-as-zelensky-vows-to-resume-attacks-a93981" },
        { title: "Al Jazeera: Trump insists energy ceasefire holds as Ukraine reports new Russian strikes", url: "https://www.aljazeera.com/economy/2026/10/13/trump-insists-energy-ceasefire-holds-as-ukraine-reports-new-russian-strikes" },
        { title: "Censor.net: Lavrov ruled out the possibility of a ceasefire", url: "https://censor.net/en/news/4027930/lavrov-ruled-out-the-possibility-of-a-ceasefire" },
        { title: "UA News: EU wird beim Gipfel am 15./16. Oktober keine Entscheidung über Ukraine-Finanzierung treffen", url: "https://ua.news/en/world/es-ne-ukhvaliuvatime-rishen-pro-finansuvannia-ukrayini-na-samiti-15-16-zhovtnia" },
        { title: "onvista/dpa: Merz an USA – eingefrorene russische Vermögen müssen in Europa bleiben", url: "https://www.onvista.de/news/2026/10-15-merz-an-usa-eingefrorene-russische-vermoegen-muessen-in-europa-bleiben-0-20-26564444" }
      ]
    },

    /* 10 GEOPOLITIK: HORMUZ/RIAD */
    {
      id: "hormuz-tanker-riad-flughafen-10-16", cats: ["geo"], when: "GFS-Pride-Angriff 14./15.10. · Riad-Flughafensperrung mind. bis 17.10. · Houthi-Angriffe Dhahran/Aden 14./15.10.2026",
      headline: "Frachter in der Straße von Hormus sinkt nach Treffer, Flughafen Riad bleibt nach weiteren Houthi-Angriffen geschlossen",
      sec30: "In der Straße von Hormus wurde am 14./15.10. der Containerfrachter GFS Pride getroffen, geriet in Brand und sank; alle 21 Besatzungsmitglieder wurden evakuiert. Das US-Kommando CENTCOM bestätigte eine iranische Urheberschaft, während die iranischen Revolutionsgarden von einer Seemine auf einer „nicht autorisierten Route” sprechen. Der Flughafen Riad bleibt nach den Houthi-Angriffen vom 8. bis 10.10. mindestens bis zum 17.10. geschlossen; über 3.100 Flüge wurden gestrichen. Am 14./15.10. griffen Houthi-Kräfte zudem den Aramco-Hauptsitz in Dhahran und den Präsidentenpalast in Aden an; bei Letzterem wurden nach Angaben vor Ort mindestens fünf Menschen getötet.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der unter Singapur-Flagge fahrende Containerfrachter GFS Pride wurde am 14./15.10. in der Straße von Hormus getroffen, geriet in Brand und sank; alle 21 Besatzungsmitglieder wurden evakuiert.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Die britische Marinebehörde UKMTO stufte die Bedrohungslage als „severe” ein und hält weitere Angriffe für „highly likely”." }
        ]},
        { h: "Wer ist beteiligt, und welche Positionen vertreten die Seiten?", items: [
          { tag: "fakt", text: "CENTCOM bestätigte am 15.10. einen Treffer durch ein iranisches Geschoss beim GFS-Pride-Angriff." },
          { tag: "position", text: "Die iranischen Revolutionsgarden (IRGC) erklärten dagegen, eine Seemine habe das Schiff auf einer „nicht autorisierten Route” getroffen, und beanspruchten weiterhin die „volle Kontrolle” über die Meerenge." },
          { tag: "position", text: "Ein Houthi-Militärsprecher erklärte den saudischen Luftraum und die Flughäfen außerhalb von Mekka und Medina für „unsicher” und kündigte weitere Angriffe „in den kommenden Tagen” an." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Nach den Houthi-Angriffen auf den King-Khalid-Flughafen in Riad vom 8. bis 10.10. (mindestens 13 Tote, über 300 Verletzte) hatte die saudische Zivilluftfahrtbehörde GACA die Schließung mehrfach verlängert, zuletzt bis mindestens zum 17.10.; über 3.100 von rund 7.700 geplanten Flügen saudischer Flughäfen wurden zwischen dem 8. und 14.10. gestrichen." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Am 14.10. trafen Houthi-Kräfte zudem den Aramco-Hauptsitz in Dhahran mit einer Rakete (Brand, keine Opfer) sowie am 15.10. den Präsidentenpalast in Aden (mindestens fünf Tote, 16 Verletzte).",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] },
          { tag: "unbestaetigt", text: "Die US-Energiebehörde EIA hatte zuvor rund 100 Mio. Barrel aus strategischen Reserven freigegeben, was den Brent-Preis laut einer Quelle dämpfte; dennoch bewegte sich Brent zuletzt bei rund 105 Dollar je Barrel.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl die Tankerangriffe in der Straße von Hormus als auch die Houthi-Angriffe auf saudisches Gebiet anhalten, zeigt, wie sich mehrere Krisenherde am Golf weiterhin gegenseitig verstärken, mit Folgen für Ölversorgung und -preis." }
        ]}
      ],
      reaction: "Die Lage in der Ukraine wird in Meldung 9 behandelt, die Ölpreis-Einordnung in Meldung 15.",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "CNN: Two cargo ships sunk in Strait of Hormuz", url: "https://www.cnn.com/2026/10/15/middleeast/strait-of-hormuz-ships-sunk-iran-intl-hnk" },
        { title: "The National: Strait of Hormuz attacks surge as Iran steps up campaign against US-backed oil shipping", url: "https://www.thenationalnews.com/news/gulf/2026/10/13/strait-of-hormuz-attacks-surge-as-iran-steps-up-campaign-against-us-backed-oil-shipping/" },
        { title: "Air Data News: Riyadh airport to remain closed until October 17 as airlines cancel hundreds of flights", url: "https://www.airdatanews.com/riyadh-airport-to-remain-closed-until-october-17-as-airlines-cancel-hundreds-of-flights/" },
        { title: "Al Jazeera: Houthis target Yemen's presidential palace in Aden with missiles", url: "https://www.aljazeera.com/news/2026/10/15/houthis-target-yemens-presidential-palace-in-aden-with-missiles" },
        { title: "The National: Live – Houthi attacks on Saudi Arabia, Yemen", url: "https://www.thenationalnews.com/news/mena/2026/10/16/live-houthi-attacks-saudi-arabia-yemen/" }
      ]
    },

    /* 11 DEFENCE */
    {
      id: "defence-auftraege-rheinmetall-haushalt-10-16", cats: ["defence"], when: "Rheinmetall-Satellitenauftrag ~07.10. · Mangalia-Zuschlag 09.10. · US-Army-Verträge 13./14.10. · Verteidigungshaushalt 2027: Schlussabstimmung 24.–27.11.2026",
      headline: "Rheinmetall erhält Satelliten- und Werftaufträge, US Army vergibt neue Verträge an Lockheed Martin und Anduril",
      sec30: "Rheinmetall erhielt einen Rahmenvertrag über 1,7 Mrd. Euro für SAR-Aufklärungssatelliten für die Bundeswehr (gemeinsam mit Iceye, Produktion in Neuss, erster Start Anfang 2027) sowie den Zuschlag für die Übernahme der rumänischen Werft Damen Mangalia für 138,03 Mio. Euro; Rumänien bestellte zudem bei Rheinmetall Naval Systems zwei Patrouillenschiffe und zwei Taucher-Einsatzschiffe für 920 Mio. Euro. In den USA vergab die Army einen Vertrag über 117,12 Mio. Dollar an Lockheed Martin für Apache-Radarsupport sowie im Rahmen des NGC2-Programms 93,6 Mio. Dollar an neun Firmen plus einen Vertrag über 162,8 Mio. Dollar (Potenzial bis 1,8 Mrd. Dollar) an Anduril. Der deutsche Verteidigungshaushalt 2027 sieht Gesamtausgaben von 139,6 Mrd. Euro vor; die EU zahlte zudem 2,86 Mrd. Euro für die Ukraine-Verteidigung aus einem bestehenden Kredit aus.",
      blocks: [
        { h: "Was ist bei Rheinmetall neu?", items: [
          { tag: "fakt", text: "Rheinmetall erhielt einen Rahmenvertrag über 1,7 Mrd. Euro für SAR-Aufklärungssatelliten für die Bundeswehr, gemeinsam mit dem Partner Iceye; die Produktion erfolgt in Neuss, der erste Start ist für Anfang 2027 geplant." },
          { tag: "fakt", text: "Rheinmetall erhielt zudem den Zuschlag für die Übernahme der rumänischen Werft Damen Mangalia für 138,03 Mio. Euro; Rumänien bestellte separat bei Rheinmetall Naval Systems zwei Patrouillenschiffe und zwei Taucher-Einsatzschiffe für 920 Mio. Euro, Lieferung bis 2030." }
        ]},
        { h: "Welche neuen Verträge vergab das US-Militär?", items: [
          { tag: "fakt", text: "Die US-Army vergab am 13.10. einen Vertrag über 117,12 Mio. Dollar an Lockheed Martin für die Radarunterstützung von Apache-Hubschraubern." },
          { tag: "fakt", text: "Im Rahmen des Programms für die nächste Generation von Führungs- und Kontrollsoftware (NGC2) vergab die Army am 14.10. Verträge über insgesamt 93,6 Mio. Dollar an neun Firmen sowie einen separaten Vertrag über 162,8 Mio. Dollar (mit einem Potenzial von bis zu 1,8 Mrd. Dollar) an Anduril." }
        ]},
        { h: "Wie ist der Stand beim deutschen Verteidigungshaushalt?", items: [
          { tag: "fakt", text: "Der Verteidigungshaushalt 2027 sieht Gesamtausgaben von 139,6 Mrd. Euro vor (109,7 Mrd. Euro Einzelplan 14 plus 30 Mrd. Euro aus dem Sondervermögen); die abschließende Bundestagsabstimmung ist für den 24. bis 27.11. geplant.",
            ask: [{ label: "Mehr zum Gesamthaushalt 2027", ref: "s:8" }] },
          { tag: "fakt", text: "Die EU zahlte am 14.10. weitere 2,86 Mrd. Euro für die Ukraine-Verteidigung aus einem bestehenden 90-Mrd.-Euro-Kredit aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl europäische als auch amerikanische Rüstungskonzerne weiterhin neue Großaufträge erhalten, während die Verteidigungshaushalte in Deutschland und der EU weiter steigen, spiegelt die anhaltend hohe sicherheitspolitische Priorität dieses Bereichs wider." }
        ]}
      ],
      reaction: "Die Hintergründe des Ukraine-Kriegs werden in Meldung 9 behandelt, der deutsche Gesamthaushalt in Meldung 8.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "esut.de: Rheinmetall – Rumänische Werft Mangalia", url: "https://esut.de/2026/10/meldungen/75782/rheinmetall-rumaen-werft-mangalia/" },
        { title: "oplan.de: Rheinmetall erhält 1,7-Milliarden-Auftrag für Bundeswehr-Spionagesatelliten", url: "https://oplan.de/2026/10/07/rheinmetall-erhaelt-17-milliarden-auftrag-fuer-bundeswehr-spionagesatelliten/" },
        { title: "ad-hoc-news.de: Army awards contract to Lockheed Martin", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/army-awards-contract-to-lockheed-martin-as-stock-trades-below-its-high/70324039" },
        { title: "Military Times: US Army taps 9 companies to build next-gen command and control software", url: "https://militarytimes.com/industry/techwatch/2026/10/14/us-army-taps-9-companies-to-build-next-gen-command-and-control-software" },
        { title: "EU-Vertretung in Deutschland: Ukraine-Verteidigung – EU-Kommission zahlt 2,86 Milliarden Euro aus", url: "https://germany.representation.ec.europa.eu/nachrichten-und-veranstaltungen/pressemitteilungen/ukraine-verteidigung-eu-kommission-zahlt-286-milliarden-euro-aus-2026-10-14_de" }
      ]
    },

    /* 12 DEALS: PENSKE AUTOMOTIVE */
    {
      id: "deal-penske-automotive-take-private-10-16", cats: ["deals", "pe"], when: "Ankündigung 15.10.2026 · Closing erwartet Q1 2027",
      headline: "Penske Automotive wird von der Penske Corporation und Mitsui für 16,3 Milliarden Dollar von der Börse genommen",
      sec30: "Penske Automotive Group, einer der größten Autohändler der USA, kündigte am 15.10. an, von der Motown Acquisition Corp. übernommen zu werden – einer Gesellschaft im Besitz der Penske Corporation (64 %) und des japanischen Handelskonzerns Mitsui & Co. (36 %). Aktionäre erhalten 212 Dollar je Aktie in bar, das entspricht einem Unternehmenswert von rund 16,3 Mrd. Dollar und einer Prämie von 8,84 % gegenüber dem Schlusskurs vom 14.10. Das Closing wird für das erste Quartal 2027 erwartet, die Transaktion enthält laut Unternehmensangaben keine Finanzierungsbedingung.",
      blocks: [
        { h: "Was wurde angekündigt?", items: [
          { tag: "fakt", text: "Penske Automotive Group kündigte am 15.10. an, sich von der Motown Acquisition Corp. übernehmen zu lassen, einer Gesellschaft im Besitz der Penske Corporation (64 %) und Mitsui & Co. (36 %); Aktionäre erhalten 212 Dollar je Aktie in bar, das entspricht einem Unternehmenswert (Enterprise Value) von rund 16,3 Mrd. Dollar.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Der Angebotspreis liegt 8,84 % über dem Schlusskurs vom 14.10. und 8,6 % über dem Kurs vom 21.07., dem letzten Handelstag vor ersten Übernahmegerüchten." }
        ]},
        { h: "Was ist bekannt, was nicht?", items: [
          { tag: "fakt", text: "Die Transaktion enthält laut Unternehmensangaben keine Finanzierungsbedingung („no financing condition”); das Closing wird für das erste Quartal 2027 erwartet." },
          { tag: "unbestaetigt", text: "Angaben zu einem EV/EBITDA-Bewertungsmultiplikator oder zu beratenden Banken nennen die verfügbaren Quellen nicht.",
            ask: [{ label: "Was ist EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Penske-Familie gemeinsam mit einem langjährigen Partner das eigene Unternehmen von der Börse nimmt, ist ein Beispiel für ein Take-private durch bestehende Großaktionäre statt durch einen klassischen Finanzinvestor." }
        ]}
      ],
      deal: { value: "16,3 Mrd. $ (Enterprise Value)", buyer: "Penske Corporation & Mitsui & Co.", target: "Penske Automotive Group", sector: "Autohandel", type: "Take-private" },
      reaction: "Ein weiterer Großdeal der Woche wird in Meldung 13 behandelt.",
      terms: ["take-private", "enterprise-value", "ebitda", "closing"],
      followups: ["e:take-private-why", "e:ma-steps"],
      sources: [
        { title: "CNBC: Penske Automotive agrees to be taken private by Penske, Mitsui", url: "https://www.cnbc.com/2026/10/15/penske-automotive-agrees-to-be-taken-private-by-penske-mitsui.html" },
        { title: "Yahoo Finance: Penske Automotive to Be Taken Private at $16.3 Billion Valuation", url: "https://finance.yahoo.com/markets/stocks/articles/penske-automotive-taken-private-16-112119555.html" },
        { title: "Quartz: Penske Automotive agreed to a $16.3 billion take-private merger", url: "https://qz.com/penske-automotive-take-private-mitsui-merger-101526" }
      ]
    },

    /* 13 DEALS: THOMA BRAVO/PROOFPOINT/VARONIS */
    {
      id: "deal-thoma-bravo-varonis-10-16", cats: ["deals", "pe"], when: "Ankündigung 15.10.2026 · Closing erwartet H1 2027",
      headline: "Proofpoint übernimmt mit Rückendeckung von Thoma Bravo den Cybersicherheitsanbieter Varonis für 6,3 Milliarden Dollar",
      sec30: "Varonis Systems kündigte am 15.10. eine endgültige Vereinbarung an, von Proofpoint – unterstützt durch den Finanzinvestor Thoma Bravo – für rund 6,3 Mrd. Dollar übernommen zu werden. Varonis-Aktionäre erhalten 49,75 Dollar je Aktie in bar, eine Prämie von 52 % gegenüber dem Schlusskurs vom 22.06.2026. Thoma Bravo stellt zugesagtes Eigen- und Fremdkapital bereit, zusätzlich beteiligt sich der kanadische Pensionsfonds Ontario Teachers' Pension Plan an Proofpoint. Der Deal soll im ersten Halbjahr 2027 abgeschlossen werden.",
      blocks: [
        { h: "Was wurde angekündigt?", items: [
          { tag: "fakt", text: "Varonis Systems kündigte am 15.10. eine endgültige Vereinbarung an, von Proofpoint – unterstützt durch den Finanzinvestor Thoma Bravo – für rund 6,3 Mrd. Dollar übernommen zu werden. Varonis-Aktionäre erhalten 49,75 Dollar je Aktie in bar, eine Prämie von 52 % gegenüber dem Schlusskurs vom 22.06.2026, dem letzten vollen Handelstag vor ersten Gerüchten über einen möglichen Verkauf.",
            ask: [{ label: "Was ist Private Equity?", ref: "t:private-equity" }] }
        ]},
        { h: "Wie wird die Übernahme finanziert?", items: [
          { tag: "fakt", text: "Thoma Bravo stellt laut Unternehmensangaben zugesagtes Eigenkapital sowie zugesagte Fremdfinanzierung bereit; der kanadische Pensionsfonds Ontario Teachers' Pension Plan beteiligt sich zusätzlich an Proofpoint im Zusammenhang mit der Transaktion." },
          { tag: "unbestaetigt", text: "Angaben zu einem EV/EBITDA-Bewertungsmultiplikator und zu beratenden Banken nennen die verfügbaren Quellen nicht.",
            ask: [{ label: "Was ist Enterprise Value?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was ist der Zeitplan, und welche weiteren Deals gab es zuletzt?", items: [
          { tag: "fakt", text: "Der Deal wurde einstimmig vom Varonis-Vorstand gebilligt und soll vorbehaltlich der Zustimmung der Aktionäre und der Aufsichtsbehörden im ersten Halbjahr 2027 abgeschlossen werden; Varonis-Aktien werden danach von der Nasdaq genommen." },
          { tag: "unbestaetigt", text: "In der gleichen Woche verhandelte laut Bloomberg auch die London Stock Exchange Group über den Kauf der Permira-Tochter Octus für rund 3,5 Mrd. Dollar, ohne dass dies bestätigt wurde; zudem kündigte Bumble die Übernahme von Ithaca Holdings für 1,3 Mrd. Dollar an." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Proofpoint mit Rückendeckung von Thoma Bravo und einem Pensionsfonds einen Konkurrenten für 6,3 Mrd. Dollar übernimmt, ist ein Beispiel für die anhaltende Konsolidierung im Cybersicherheitsmarkt." }
        ]}
      ],
      deal: { value: "6,3 Mrd. $", buyer: "Proofpoint (unterstützt von Thoma Bravo)", target: "Varonis Systems", sector: "Cybersicherheit / Daten- und KI-Sicherheit", type: "Übernahme (Take-private)" },
      reaction: "Der Penske-Automotive-Deal wird in Meldung 12 behandelt.",
      terms: ["private-equity", "enterprise-value", "ebitda"],
      followups: ["e:ma-steps", "e:ev-ebitda", "e:pe-money"],
      sources: [
        { title: "Thoma Bravo: Proofpoint to Acquire Varonis in a $6.3 Billion Transaction (Pressemitteilung)", url: "https://www.thomabravo.com/press-releases/proofpoint-to-acquire-varonis-in-a-6.3-billion-transaction" },
        { title: "GuruFocus: Proofpoint to Acquire Varonis (VRNS) in $6.3B Deal Backed by Thoma Bravo", url: "https://www.gurufocus.com/news/9126362/proofpoint-to-acquire-varonis-vrns-in-63b-deal-backed-by-thoma-bravo" },
        { title: "KSL: Thoma Bravo's Proofpoint to buy Varonis Systems in $6.3 billion all-cash deal", url: "https://www.ksl.com/article/51636970/thoma-bravos-proofpoint-to-buy-varonis-systems-in-63-billion-all-cash-deal" },
        { title: "Bloomberg Law: Proofpoint to Buy Varonis for $6.3 Billion as Tech M&A Rebounds", url: "https://news.bloomberglaw.com/private-equity/proofpoint-to-buy-varonis-for-6-3-billion-as-tech-m-a-rebounds" }
      ]
    },

    /* 14 TECHNOLOGIE */
    {
      id: "ki-chip-ausverkauf-zirkulaere-finanzierung-10-16", cats: ["tech"], when: "Hock-Tan-Äußerung 12.10. · CXMT-Ankündigung 10.10. · Chip-Ausverkauf 13.–15.10.2026",
      headline: "Chefs von Broadcom und Intel warnen vor „Casino”-Mentalität bei KI-Investitionen, chinesischer Hersteller CXMT fordert Speicherchip-Branche heraus",
      sec30: "Nach dem scharfen Ausverkauf bei asiatischen Speicherchip-Werten rückt die Debatte über eine mögliche KI-Überinvestition wieder in den Fokus. Broadcom-Chef Hock Tan sagte am 12.10. in Singapur, KI-Investoren verhielten sich teils „wie im Casino” und wüssten nicht, worin sie investierten – trotz eines eigenen KI-Umsatzsprungs von 221 % im Jahresvergleich und einer milliardenschweren Vereinbarung mit Anthropic. Intel-Chef Lip-Bu Tan warnte, Kapitalkosten und Rendite-Erwartungen könnten zu einem größeren Flaschenhals für die Branche werden als die Chip-Knappheit selbst. Der chinesische Speicherchip-Hersteller CXMT stellte am 10.10. in Shanghai eine neue DDR5-Zellarchitektur vor, mit der er sich Berichten zufolge der Kapazität von Samsung, SK Hynix und Micron weiter annähert. Gleichzeitig wächst die Debatte über die zirkuläre Finanzierung zwischen Nvidia, OpenAI, Oracle und CoreWeave.",
      blocks: [
        { h: "Was sagten die Chefs von Broadcom und Intel?", items: [
          { tag: "position", text: "Broadcom-Chef Hock Tan sagte am 12.10. in Singapur, manche KI-Investoren verhielten sich „almost like they are in a casino” und wüssten nicht, worin sie eigentlich investierten – dies, obwohl Broadcoms eigener KI-Umsatz im Jahresvergleich um 221 % zulegte und das Unternehmen eine milliardenschwere Finanzierungsvereinbarung mit Anthropic abgeschlossen hat.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Intel-Chef Lip-Bu Tan sagte, viele Investoren hätten „no clue what they are investing in”; Kapitalkosten und Rendite-Erwartungen könnten zu einem größeren Flaschenhals für die Branche werden als die Verfügbarkeit von Chips selbst." }
        ]},
        { h: "Was macht der chinesische Hersteller CXMT?", items: [
          { tag: "fakt", text: "Der chinesische Speicherchip-Hersteller CXMT präsentierte am 10.10. in Shanghai eine neue DDR5-Zellarchitektur (4F²) und kündigte einen Kapazitätsausbau im Umfang von rund 5,2 Mrd. Dollar an; Analysten sehen das Unternehmen damit näher an der Kapazität von Micron heranrücken.",
            ask: [{ label: "Mehr zum Ausverkauf bei Samsung und SK Hynix", ref: "s:1" }] },
          { tag: "unbestaetigt", text: "Laut einem Branchenbericht (Digitimes) soll SK Hynix die Lieferung von Fertigungsausrüstung für HBM4-Speicher auf 2027 verschoben haben; dies ließ sich nur über eine einzelne Quelle bestätigen." }
        ]},
        { h: "Wie hängen Nvidia, OpenAI, Oracle und CoreWeave zusammen?", items: [
          { tag: "fakt", text: "Nvidia hat Investitionszusagen gegenüber OpenAI in Milliardenhöhe gemacht; OpenAI wiederum hat Oracle Cloud-Rechenleistung im Umfang von rund 300 Mrd. Dollar zugesagt und einen Vertrag mit CoreWeave über 22,4 Mrd. Dollar geschlossen. Oracle kauft dafür unter anderem Chips von Nvidia.",
            ask: [{ label: "Was ist zirkuläre Finanzierung in der KI-Branche?", ref: "e:circular-financing" }] },
          { tag: "unbestaetigt", text: "Kritiker bezeichnen dieses Geflecht als zirkuläre Finanzierung, bei der Geld und Aufträge zwischen denselben Unternehmen zirkulieren; eine abschließende Einschätzung, wie risikoreich dies ist, liefern die verfügbaren Quellen nicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass selbst Chefs von Unternehmen, die stark von der KI-Nachfrage profitieren, öffentlich vor überzogenen Erwartungen warnen, während ein chinesischer Herausforderer bei Speicherchips aufholt, zeigt, dass die Debatte über eine mögliche KI-Blase auch innerhalb der Branche geführt wird. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion auf den Chip-Ausverkauf wird in Meldung 1 behandelt, die Fed-Seite in Meldung 4.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "CNBC: Intel, Broadcom CEOs warn capital crunch could become AI bottleneck", url: "https://www.cnbc.com/2026/10/12/intel-broadcom-ceos-warn-capital-crunch-could-become-ai-bottleneck.html" },
        { title: "SCMP: China's CXMT unveils key progress in chip structure pursued by Samsung, SK Hynix", url: "https://www.scmp.com/tech/big-tech/article/3370505/chinas-cxmt-unveils-key-progress-chip-structure-pursued-samsung-sk-hynix" },
        { title: "Nikkei Asia: Memory breakthrough by China's CXMT puts chip rivals on back foot", url: "https://asia.nikkei.com/business/tech/semiconductors/memory-breakthrough-by-china-s-cxmt-puts-chip-rivals-on-back-foot" },
        { title: "Yahoo Finance: Nvidia, OpenAI, Oracle's $745B financing web", url: "https://finance.yahoo.com/economy/policy/articles/nvidia-openai-oracles-745b-financing-135702453.html" },
        { title: "Bloomberg: Chip Stocks Deepen Losses as Concerns Mount Over Rates, AI Debt", url: "https://www.bloomberg.com/news/articles/2026-10-15/chip-stocks-deepen-losses-as-concerns-mount-over-rates-ai-debt" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-opec-brent-ttf-gasspeicher-10-16", cats: ["energy"], when: "OPEC+-Beschluss 04.10. · TTF-Hoch 13.10. · Gasspeicher-Stand Mitte Oktober 2026",
      headline: "OPEC+ hält Förderung für November konstant, europäischer Gaspreis TTF erreicht höchsten Stand seit Dezember 2022",
      sec30: "Die OPEC+ hatte bereits am 04.10. beschlossen, die Fördermenge für November gegenüber Oktober unverändert bei rund 31,01 Mio. Barrel pro Tag zu belassen; das nächste Treffen ist für den 01.11. angesetzt. Der europäische Erdgas-Referenzpreis TTF stieg am 13.10. auf 85,85 Euro je Megawattstunde – der höchste Stand seit Dezember 2022 – unter anderem wegen der Spannungen im Nahen Osten. Die EU-Gasspeicher waren zuletzt nur zu rund 73 bis 74 % gefüllt, der niedrigste Stand zu dieser Jahreszeit seit fast 20 Jahren; die deutschen Speicher lagen bei rund 59,4 %. Die deutschen Strompreise in der Grundversorgung liegen mit 42,83 Cent je Kilowattstunde rund 21,8 % über dem Vorjahreswert.",
      blocks: [
        { h: "Was hat die OPEC+ beschlossen?", items: [
          { tag: "fakt", text: "Die OPEC+ beschloss bereits am 04.10., die Fördermenge für November gegenüber Oktober unverändert bei rund 31,01 Mio. Barrel pro Tag zu belassen; das nächste Treffen ist für den 01.11. angesetzt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "fakt", text: "Der europäische Erdgas-Referenzpreis TTF stieg am 13.10. auf 85,85 Euro je Megawattstunde – den höchsten Stand seit Dezember 2022.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die anhaltenden Spannungen im Nahen Osten, unter anderem rund um die Straße von Hormus.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:10" }] }
        ]},
        { h: "Wie ist der Stand bei den Gasspeichern?", items: [
          { tag: "fakt", text: "Die EU-Gasspeicher waren zuletzt nur zu rund 73 bis 74 % gefüllt – der niedrigste Füllstand zu dieser Jahreszeit seit fast 20 Jahren; die deutschen Speicher lagen bei rund 59,4 %.",
            ask: [{ label: "Was ist LNG?", ref: "t:lng" }] }
        ]},
        { h: "Wie entwickeln sich die deutschen Strompreise, und was plant die EU-Kommission bei der Atomkraft?", items: [
          { tag: "fakt", text: "Die deutschen Strompreise in der Grundversorgung liegen mit 42,83 Cent je Kilowattstunde rund 21,8 % über dem Vorjahreswert." },
          { tag: "position", text: "EU-Kommissionspräsidentin von der Leyen bezeichnete den europäischen Atomausstieg als „strategischen Fehler” und kündigte eine Renaissance der Kernenergie in der EU an; Bundeskanzler Merz teilt diese Einschätzung nach eigenen Worten persönlich, hält den deutschen Atomausstieg aber für unumkehrbar." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gaspreis und Speicherstände vor dem Winter angespannt bleiben, während die Debatte über Atomkraft in der EU wieder auflebt, zeigt, wie eng Energieversorgung, Preise und Energiepolitik derzeit zusammenhängen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 10 vertieft, die deutsche Innenpolitik in Meldung 8.",
      terms: ["ttf", "lng", "opec-plus", "brent"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "The Moscow Times: OPEC+ Agrees to Keep November Oil Output Targets Steady", url: "https://www.themoscowtimes.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady-a93865" },
        { title: "GuruFocus: European natural gas prices surge amid Middle East tensions", url: "https://www.gurufocus.com/news/9121205/european-natural-gas-prices-surge-amid-middle-east-tensions-ttf-etf-reacts" },
        { title: "karmactive.com: Europe gas storage 71 percent, below five-year average, EU 2026 winter supply risk", url: "https://www.karmactive.com/europe-gas-storage-71-percent-below-five-year-average-eu-target-2026-winter-supply-risk/" },
        { title: "Stromauskunft.de: Strompreise Deutschland", url: "https://www.stromauskunft.de/strompreise/" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Donnerstag schlossen Dow Jones (+1,1 %), S&P 500 (+0,3 %) und Nasdaq Composite (+0,1 %) im Plus, obwohl die US-Erzeugerpreise höher ausfielen als erwartet; der DAX legte um 0,33 % zu." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die gegenläufige Reaktion von Erzeugerpreisen und sinkender US-Rendite nennen Berichte eine Flucht in sichere Anlagen im Zuge des asiatischen Speicherchip-Ausverkaufs." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite fiel am Donnerstag um rund 8 bis 11 Basispunkte auf etwa 5,06 bis 5,10 %; die Bund-Rendite gab mit rund 3,38 bis 3,42 % ähnlich leicht nach (Quellenlage uneinheitlich)." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold stieg am Donnerstag um rund 1,24 % auf ein Tageshoch von 4.175,90 Dollar je Feinunze, gestützt durch die heißen Erzeugerpreise und die sinkenden US-Renditen." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs stieg von 1,1195 auf 1,1208 Dollar – der vierte Anstieg in Folge seit Montag." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin fiel am Donnerstag zwischenzeitlich erstmals seit einem Monat unter 80.000 Dollar und erholte sich bis Freitagmorgen auf rund 82.000 bis 82.400 Dollar." },
    "ppi-what": { tag: "fakt", story: 5, text: "Die US-Erzeugerpreise stiegen im September um 1,3 % im Monatsvergleich – der stärkste Anstieg seit März 2022, vor allem getrieben von Energie." },
    "inflation-what": { tag: "position", story: 6, text: "EZB-Präsidentin Lagarde sagte, die Inflation sei überwiegend energiegetrieben, man sehe aber bislang keine Zweitrundeneffekte." },
    "central-banks-why": { tag: "position", story: 4, text: "Fed-Chef Warsh legte sich bei seiner IWF-Rede am 16.10. nicht auf einen Zinspfad für die Sitzung am 27./28.10. fest; die eingepreiste Erhöhungswahrscheinlichkeit lag zuletzt bei rund 24 bis 30 %." },
    "fed-hike": { tag: "unbestaetigt", story: 4, text: "Nach den Inflationsdaten war die eingepreiste Erhöhungswahrscheinlichkeit für den 27./28.10. kurzzeitig auf bis zu 53 % gesprungen, bevor sie wieder auf rund 24 bis 30 % zurückfiel." },
    "ecb-hike": { tag: "fakt", story: 6, text: "Die EZB hält ihren Einlagensatz unverändert bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10.2026." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent bewegte sich zuletzt bei rund 105 Dollar je Barrel; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "fakt", story: 8, text: "Der Bundeshaushalt 2027 sieht eine Nettokreditaufnahme von rund 118,7 Mrd. Euro vor; die abschließende Lesung im Bundestag ist für den 24. bis 27.11. geplant." },
    "rente-basics": { tag: "position", story: 8, text: "Der neue Bundesarbeitsminister Schweitzer lehnte vollständige Leistungssanktionen bei der Grundsicherung ab und kritisierte den Ansatz, Wachstum vor allem über Sozialstaats-Kürzungen erreichen zu wollen." },
    "haushalt-basics": { tag: "fakt", story: 8, text: "Der Regierungsentwurf für 2027 sieht Gesamtausgaben von 555,4 Mrd. Euro vor, der Verteidigungsetat steigt mit 109,7 Mrd. Euro am stärksten." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "SPD, Grüne und Linke setzten die Berliner Koalitionssondierungen fort; Ergebnisse sollen bis Sonntag, 18.10., vorliegen." },
    "coalition-majority": { tag: "unbestaetigt", story: 8, text: "Die INSA-Umfrage vom 13.10. sieht die AfD bei 30,0 %, die Forsa-Umfrage vom selben Tag bei 26 % – die Institute weichen deutlich voneinander ab." },
    "hormuz": { tag: "fakt", story: 10, text: "Der Containerfrachter GFS Pride wurde am 14./15.10. in der Straße von Hormus getroffen, geriet in Brand und sank; CENTCOM bestätigte eine iranische Urheberschaft." },
    "why-oil-up-geo": { tag: "position", story: 10, text: "Houthi-Kräfte griffen am 14./15.10. zusätzlich den Aramco-Hauptsitz in Dhahran und den Präsidentenpalast in Aden an; der Flughafen Riad bleibt mindestens bis zum 17.10. geschlossen." },
    "defence-order": { tag: "fakt", story: 11, text: "Rheinmetall erhielt einen 1,7-Mrd.-Euro-Rahmenvertrag für Aufklärungssatelliten und den Zuschlag für die rumänische Werft Mangalia; die US-Army vergab neue Verträge an Lockheed Martin und Anduril." },
    "take-private-why": { tag: "fakt", story: 12, text: "Penske Automotive wird für 212 Dollar je Aktie (16,3 Mrd. Dollar Unternehmenswert) von der Penske Corporation und Mitsui von der Börse genommen, Closing erwartet im ersten Quartal 2027." },
    "ma-steps": { tag: "fakt", story: 13, text: "Varonis Systems wird von Proofpoint, unterstützt durch Thoma Bravo, für 6,3 Mrd. Dollar übernommen; der Deal soll im ersten Halbjahr 2027 abgeschlossen werden." },
    "ai-capex": { tag: "position", story: 14, text: "Broadcom-Chef Hock Tan sagte, manche KI-Investoren verhielten sich „wie im Casino”; Intel-Chef Lip-Bu Tan warnte vor Kapitalkosten als möglichem Flaschenhals für die Branche." },
    "custom-chips": { tag: "fakt", story: 14, text: "Der chinesische Hersteller CXMT stellte am 10.10. eine neue DDR5-Zellarchitektur vor und kündigte einen Kapazitätsausbau über rund 5,2 Mrd. Dollar an." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "Kritiker bezeichnen das Geflecht aus Investitionen zwischen Nvidia, OpenAI, Oracle und CoreWeave als zirkuläre Finanzierung." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen zuletzt bei rund 59,4 %, die EU-Speicher insgesamt bei rund 73 bis 74 % – der niedrigste Stand zu dieser Jahreszeit seit fast 20 Jahren." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Die OPEC+ hatte bereits am 04.10. beschlossen, die Fördermenge für November gegenüber Oktober unverändert bei rund 31,01 Mio. Barrel pro Tag zu belassen." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Der TTF-Gaspreis stieg am 13.10. auf 85,85 Euro je Megawattstunde – den höchsten Stand seit Dezember 2022." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie reagierten die US-Börsen am Donnerstag, 15.10.2026, auf die unerwartet hohen US-Erzeugerpreise?",
      options: [
        "Sie fielen deutlich",
        "Der Handel wurde wegen eines Feiertags ausgesetzt",
        "Dow, S&P 500 und Nasdaq Composite schlossen im Plus, weil Anleger in sichere Anleihen auswichen",
        "Nur der DAX stieg, alle US-Indizes fielen"
      ],
      answer: 2,
      explain: "Dow Jones, S&P 500 und Nasdaq Composite schlossen trotz heißer Erzeugerpreise im Plus, weil Anleger im Zuge des asiatischen Chip-Ausverkaufs verstärkt in als sicher geltende US-Staatsanleihen auswichen, was die Rendite sinken ließ."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 5,
      q: "Wie stark stiegen die US-Erzeugerpreise (PPI) im September 2026 gegenüber dem Vormonat?",
      options: [
        "0,3 %",
        "0,8 %",
        "2,6 %",
        "1,3 %"
      ],
      answer: 3,
      explain: "Die Erzeugerpreise stiegen im Monatsvergleich um 1,3 % – der stärkste Anstieg seit März 2022; die Güterpreise allein legten um 2,6 % zu, die Einzelhandelsumsätze stiegen um 0,8 %."
    },
    {
      topic: "Zentralbanken", type: "Zusammenhang", story: 4,
      q: "Angenommen, die Fed hält den Leitzins am 27./28.10.2026 entgegen der höheren Inflationsdaten für unverändert. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Weiterhin steigende Markterwartungen richten sich eher auf einen möglichen Zinsschritt im Dezember, ohne dass ein fester Automatismus besteht",
        "Ein garantierter Rückgang der Inflation",
        "Eine sofortige Rezession",
        "Ein automatischer Anstieg des Bitcoin-Preises"
      ],
      answer: 0,
      explain: "Für die Dezember-Sitzung wird bereits jetzt eine höhere Erhöhungswahrscheinlichkeit von rund 63 % gehandelt; ein fester Automatismus für Inflation, Rezession oder den Bitcoin-Preis besteht durch eine einzelne Zinsentscheidung nicht."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 10,
      q: "Was geschah laut CENTCOM Mitte Oktober 2026 in der Straße von Hormus?",
      options: [
        "Alle Tankerangriffe in der Straße von Hormus endeten",
        "Der Frachter GFS Pride wurde getroffen, geriet in Brand und sank",
        "Saudi-Arabien übernahm die Kontrolle über die Meerenge",
        "Der Flughafen Riad wurde wieder vollständig geöffnet"
      ],
      answer: 1,
      explain: "Der Containerfrachter GFS Pride wurde am 14./15.10. getroffen, geriet in Brand und sank; CENTCOM bestätigte eine iranische Urheberschaft, während die iranischen Revolutionsgarden von einer Seemine sprechen."
    },
    {
      topic: "Deals", type: "Zusammenhang", story: 12,
      q: "Angenommen, ein Übernahmeangebot liegt deutlich über dem bisherigen Börsenkurs eines Unternehmens, wie bei Penske Automotive (+8,84 %) oder Varonis (+52 %). Was wird dadurch unter sonst gleichen Bedingungen für die Aktionäre am ehesten wahrscheinlicher?",
      options: [
        "Ein Anreiz für Aktionäre, dem Verkauf zuzustimmen, ohne dass das Closing automatisch garantiert ist",
        "Eine automatische Verstaatlichung des Unternehmens",
        "Ein sofortiger Börsenausschluss ohne weiteres Verfahren",
        "Eine garantierte weitere Kurssteigerung über das Angebot hinaus"
      ],
      answer: 0,
      explain: "Eine deutliche Prämie schafft einen Anreiz, dem Verkauf zuzustimmen; das Closing hängt aber weiterhin von Zustimmungen der Aktionäre und Aufsichtsbehörden ab und ist nicht automatisch garantiert."
    }
  ]
};
