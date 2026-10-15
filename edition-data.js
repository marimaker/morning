// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-15",
  dateLabel: "Donnerstag, 15. Oktober 2026",
  updatedLabel: "Recherchestand 15.10.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagmorgen, 15.10.2026, vor Handelsbeginn in Europa. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq gilt deshalb der Schlussstand von Mittwoch, 14.10. Die US-Inflationsdaten (CPI) für September wurden am Mittwoch wie geplant veröffentlicht und fielen mit 3,7 % (Kopfrate) und 2,6 % (Kernrate) höher aus als erwartet; US-Aktien gaben danach nach, die Rendite zehnjähriger US-Staatsanleihen sprang auf rund 5,28 bis 5,30 %. Am Donnerstagmorgen kam es in Asien zu einem deutlich schärferen Ausverkauf bei Speicherchip-Werten als am Vortag (Kospi zeitweise über −7 bis −8 % mit kurzzeitiger Handelsaussetzung, Nikkei rund −5 %, Samsung und SK Hynix zweistellig im Minus) – die Teilerholung vom Mittwoch hat sich damit nicht fortgesetzt. Bei Gold und Brent-Öl weichen die gefundenen Quellen für Mittwoch/Donnerstag weiterhin stark voneinander ab; ein einzelner belastbarer Wert lässt sich nicht nennen, die Kennzahlen sind deshalb als uneinheitlich gekennzeichnet. Auch bei der Rendite zehnjähriger Bundesanleihen streuen die verfügbaren Quellen ungewöhnlich stark (zwischen rund 3,24 und 3,80 % je nach Quelle/Laufzeit); hier wird ein mittlerer Wert mit Unsicherheitshinweis genannt.",

  top: [
    { text: "Die US-Inflationsrate für September stieg mit 3,7 % (Kernrate 2,6 %) stärker als erwartet; die US-Börsen gaben danach nach (S&P 500 −1,11 %, Nasdaq −1,3 bis −1,9 %, Dow −0,09 %), während DAX (+0,25 % auf 25.322,48 Punkte) und Euro Stoxx 50 (+0,38 bis 0,46 %) noch vor den Daten im Plus geschlossen hatten. Am Donnerstagmorgen brach in Asien der Kospi zeitweise um 7 bis 8 % ein (kurzzeitige Handelsaussetzung), der Nikkei fiel um rund 5 %, Samsung und SK Hynix zweistellig – die Teilerholung vom Vortag setzte sich damit nicht fort.", ref: "s:1" },
    { text: "Trotz eines von Präsident Trump behaupteten „Energie-Waffenstillstands” griff Russland in der Nacht zum 14.10. die Ukraine mit 39 ballistischen Raketen und über 120 Angriffsdrohnen an und traf sechs Wärmekraftwerke sowie eine Umspannstation in Kyjiw und der Region Charkiw; mindestens neun Menschen wurden getötet, rund 500.000 bis 600.000 Menschen verloren vorübergehend den Strom. Außenminister Lawrow hatte zuvor eine Kampfpause zurückgewiesen. Die EU hatte am 12.10. ihr 22. Sanktionspaket mit rund 1.600 Einträgen verabschiedet; beim EU-Gipfel am 15./16.10. wird über die Nutzung eingefrorener russischer Gelder für die Ukraine-Finanzierung beraten, ohne dass laut Berichten eine finale Entscheidung erwartet wird.", ref: "s:8" },
    { text: "Die Tankerangriffe in der Straße von Hormus halten an: UKMTO zählte zwischen dem 6. und 14.10. 15 weitere Angriffsmeldungen, davon 11 allein in den letzten vier Tagen. Iranische Vertreter beanspruchten weiterhin die „volle Kontrolle” über die Meerenge, US-Außenminister Rubio widersprach. Der Flughafen Riad bleibt nach den Houthi-Angriffen vom 8. bis 10.10. mindestens bis zum 17.10. geschlossen; die saudische Luftfahrtbehörde strich über 3.100 Flüge.", ref: "s:9" },
    { text: "In Berlin verständigten sich SPD, Grüne und Linke am Mittwochabend, 14.10., auf eine Fortsetzung der zuvor unterbrochenen Koalitionssondierungen; die gemeinsame Antisemitismus-Vereinbarung soll fester Bestandteil eines möglichen Koalitionsvertrags werden. Im Bund wurde Alexander Schweitzer (SPD) am 14.10. als neuer Bundesarbeitsminister vereidigt, Nachfolger der zurückgetretenen Bärbel Bas. Neue Umfragen zeigen weiterhin unterschiedliche AfD-Werte (INSA 30 %, Forsa 26 %).", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.322,48", change: "+0,25 % (+62,58 Pkt., Mi-Schluss)", dir: "up", asof: "Schluss Mi 14.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Dienstag, 13.10., hatte der DAX bei 25.259,90 Punkten geschlossen; am Mittwoch legte er auf 25.322,48 Punkte zu." }
      ],
      moved: {
        intro: "Als Hintergrund für Mittwoch nennen Berichte:",
        items: [
          "Besser als erwartete chinesische Außenhandelsdaten stützten zunächst die europäischen Börsen.",
          "Die mit Spannung erwarteten US-Inflationsdaten für September wurden erst nach europäischem Handelsschluss veröffentlicht; die Reaktion darauf zeigte sich vor allem an den US-Börsen (Meldung 4)."
        ]
      },
      important: [
        { area: "Technologie", text: "Am Donnerstagmorgen kam es in Asien zu einem deutlich schärferen Ausverkauf bei Speicherchip-Werten als am Vortag; mehr dazu in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "finanzen.net: Pluszeichen in Frankfurt – DAX verbucht letztendlich Zuschläge", url: "https://www.finanzen.net/nachricht/aktien/pluszeichen-in-frankfurt-dax-verbucht-letztendlich-zuschlaege-15985118" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.190,37", change: "+0,38 % bis +0,46 % je Quelle (Mi-Schluss)", dir: "up", asof: "Schluss Mi 14.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "ARIVA/dpa nennen für Mittwoch 6.190,37 Punkte (+0,38 %), finanzen.net nennt 6.195,22 Punkte (+0,46 %)." }
      ],
      moved: {
        intro: "Für Mittwoch nennen Berichte als Hintergrund:",
        items: [
          "Besser als erwartete chinesische Handelsdaten stützten die europäischen Indizes."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Bund-Rendite blieb am Mittwoch nahezu unverändert bei rund 3,47 bis 3,50 %; mehr dazu in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "ARIVA.DE: Aktien Europa Schluss – teils deutliche Gewinne", url: "https://www.ariva.de/news/aktien-europa-schluss-teils-deutliche-gewinne-12169382" }
    },
    "sp500": {
      label: "S&P 500", value: "7.718,94", change: "−1,11 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 14.10.26", story: 4,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Mittwochsschluss: 51.621,48 Punkte (−0,09 %, −48,62 Pkt.) – vergleichsweise stabil gegenüber dem stärkeren Rückgang bei S&P 500 und Nasdaq." },
        { label: "Nasdaq", text: "Mittwochsschluss je nach Quelle: 26.692,87 bis 26.840 Punkte (−1,3 % bis −1,9 %) – belastet von Verkäufen bei KI- und Chip-Werten, unter anderem CoreWeave mit rund −15 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Die US-Inflationsdaten (CPI) für September fielen mit 3,7 % Kopfrate und 2,6 % Kernrate höher aus als die vom Markt erwarteten rund 3,6 % bzw. 2,4 bis 2,5 %.",
          "Die Rendite zehnjähriger US-Staatsanleihen sprang in Reaktion um rund 9 Basispunkte auf etwa 5,28 bis 5,30 %, zeitweise bis 5,365 % – ein Mehrjahreshoch."
        ]
      },
      important: [
        { area: "Inflation", text: "Mehr zu den Inflationsdaten und zur Fed-Reaktion in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Yahoo Finance: Stock market today, Wednesday Oct 14", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-14-dow-sp-500-nasdaq-081136597.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.692,87", change: "−1,3 % bis −1,9 % je Quelle (Mi-Schluss)", dir: "down", asof: "Schluss Mi 14.10.26", story: 4,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Vortag", text: "Am Dienstag war die Nasdaq um 0,15 % gefallen; am Mittwoch folgte nach den heißeren US-Inflationsdaten ein deutlich stärkerer Rückgang." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "KI-nahe Werte wie CoreWeave (rund −15 %) gerieten nach den Inflationsdaten und wegen anhaltender Zinssorgen besonders unter Druck.",
          "Am Donnerstagmorgen setzte sich der Ausverkauf bei asiatischen Speicherchip-Werten fort; mehr dazu in Meldung 14."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zins- und Chipnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "The Motley Fool: Stock Market Midday Oct 14 – Hot inflation weighs on markets, CoreWeave plummets", url: "https://www.fool.com/coverage/stock-market-today/2026/10/14/stock-market-midday-oct-14-hot-inflation-weighs-on-markets-coreweave-plummets-15/" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1195 (EZB-Referenzkurs Mi)", change: "+0,06 % ggü. Di (1,1188)", dir: "up", asof: "EZB-Referenzkurs Mi 14.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Woche davor", text: "Von 1,1181 Dollar am Montag war der Kurs am Dienstag auf 1,1188 Dollar gestiegen; am Mittwoch legte er laut EZB-Referenzkurs leicht weiter auf 1,1195 Dollar zu." }
      ],
      moved: {
        intro: "Berichte nennen uneinheitliche Angaben zum Tagesverlauf:",
        items: [
          "Ein dpa-AFX-Überblick nennt dagegen eine Abschwächung des Euro im Tagesverlauf um rund 0,7 % nach den US-Inflationsdaten – die Angaben zum genauen Tagesverlauf widersprechen sich."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB hält ihren Einlagensatz bei 2,50 % und dürfte laut einer Umfrage am 29.10. pausieren; mehr dazu in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Euro foreign exchange reference rates)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.de.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,28–5,30 %", change: "+9 Bp nach US-Inflationsdaten, zeitweise bis 5,365 %", dir: "up", asof: "Stand Mi 14.10.26 (CNBC)", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,3 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,3 % Zinsen pro Jahr.",
      compare: [
        { label: "Zwischenhoch", text: "Mit rund 5,365 % erreichte die Rendite am Mittwoch intraday laut einer Quelle ein Mehrjahreshoch; zuvor hatte sie Anfang Oktober bereits bis zu 5,36 % erreicht." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Die US-Inflationsdaten für September fielen mit 3,7 % (Kopfrate) und 2,6 % (Kernrate) höher aus als erwartet, was die Markterwartung einer weiteren Fed-Zinserhöhung zunächst erhöhte.",
          "Nach gut aufgenommenen Anleiheauktionen gab die Rendite im weiteren Handelsverlauf einen Teil des Anstiegs wieder ab."
        ]
      },
      important: [
        { area: "Fed", text: "Die eingepreiste Wahrscheinlichkeit für ein Halten des Leitzinses bei der FOMC-Sitzung am 27./28.10. liegt laut Berichten bei rund 66 %, für eine weitere Erhöhung bei rund 33 bis 35 % – beide Werte schwankten zuletzt deutlich; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: 10-year Treasury yield jumps as September core inflation comes in hotter than expected", url: "https://www.cnbc.com/amp/2026/10/14/us-treasury-yields-cpi-inflation-report.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,47–3,50 % (Quellenlage uneinheitlich, Spanne 3,24–3,80 % je nach Quelle/Laufzeit)", change: "weitgehend stabil", dir: "flat", asof: "Stand Mi 14.10.26 (uneinheitliche Quellenlage)", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,28 bis 5,30 % weiterhin deutlich über der Bund-Rendite von rund 3,47 bis 3,50 %; der Unterschied spiegelt unterschiedliche Zinspfade von Fed und EZB wider." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "EZB-Chefvolkswirt Lane nannte einen weltweiten, auch vom KI-Investitionsboom getriebenen Zinsanstieg als einen Faktor.",
          "Frankreichs Haushaltslage wirkt sich laut Berichten auf den Renditeaufschlag französischer Anleihen gegenüber Bundesanleihen aus (OAT-Bund-Spread zuletzt rund 139,5 Basispunkte)."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %; mehr zur IWF-Jahrestagung und zur Schnabel-Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "ARIVA.DE: Deutsche Anleihen legen etwas zu", url: "https://www.ariva.de/news/deutsche-anleihen-legen-etwas-zu-12168664" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.080–4.168 $", change: "uneinheitlich: rund −1,5 % bis −1,6 % laut mehreren Quellen", dir: "down", asof: "Stand Mi 14.10.26 (Tagesverlauf)", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.100 bis 4.170 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "Goldreporter nennt für den Nachmittag (15:52 Uhr) 4.097,73 Dollar (−1,53 %), bei einem Tageshoch von 4.168,43 und einem Tagestief von 4.080,14 Dollar; andere Quellen nennen für den Morgen noch rund 4.147 bis 4.160 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die nach den US-Inflationsdaten gestiegenen US-Anleiherenditen wirkten belastend auf den zinslosen Wertspeicher Gold.",
          "Zum Vergleich: Das Rekordhoch von 5.597,23 Dollar wurde laut Berichten am 29.01.2026 erreicht; von diesem Niveau ist der Preis weiterhin deutlich entfernt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Steigende US-Anleiherenditen wirken grundsätzlich belastend auf Gold.", ref: "e:gold-why" }
      ],
      source: { title: "Goldreporter: Goldpreis heute, 14.10.2026 – US-Inflation", url: "https://www.goldreporter.de/goldpreis-heute-14102026-us-inflation/marktbericht-gold/262393/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 105,4–106,3 $ (Quellen weichen ab)", change: "uneinheitlich: etwa −0,25 % bis +0,67 % je Quelle", dir: "flat", asof: "Stand Mi 14.10./Do-Vormittag 15.10.26", story: 9, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 105 Dollar je Fass (159 Liter) sind etwa 66 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Quellenlage", text: "Trading Economics nennt für Mittwoch 105,43 Dollar (−0,25 %), Convextrade und Investing.com nennen 106,19 bis 106,27 Dollar (+0,67 %); ein dpa-AFX-Überblick nennt +0,1 % zum Vortag. Die Angaben lassen sich nicht abschließend in Einklang bringen." }
      ],
      moved: {
        intro: "Berichte nennen gegenläufige Faktoren:",
        items: [
          "Die anhaltenden Tankerangriffe in der Straße von Hormus und die Sperrung des Flughafens Riad nach Houthi-Angriffen wirkten laut Berichten weiterhin preistreibend (Meldung 9).",
          "Die OPEC+ hatte bereits am 04.10. beschlossen, die Fördermenge für November gegenüber Oktober unverändert bei rund 31,1 Mio. Barrel pro Tag zu belassen (Meldung 15)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den Tankerangriffen und zur Lage am Flughafen Riad in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "Trading Economics: Brent Crude Oil", url: "https://tradingeconomics.com/commodity/brent-crude-oil" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 83.300 $", change: "weiterhin schwankend, zuletzt leicht erholt nach Rückgang unter 81.000 $", dir: "up", asof: "Stand Do-Morgen 15.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.000 bis 84.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf", text: "Bitcoin war zuvor zwischenzeitlich unter 81.000 Dollar gefallen und erholte sich bis Mittwoch/Donnerstag wieder auf rund 83.300 Dollar; die Schwankungsbreite blieb hoch." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die nach den US-Inflationsdaten gestiegenen Anleiherenditen belasteten zwischenzeitlich auch Kryptowährungen.",
          "Spot-Käufer stiegen laut Berichten zuletzt wieder verstärkt ein."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin, Oct. 14, 2026", url: "https://fortune.com/article/price-of-bitcoin-10-14-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: MITTWOCH-SCHLUSS + CHIP-AUSVERKAUF ASIEN DONNERSTAG */
    {
      id: "maerkte-mittwoch-cpi-chip-ausverkauf-asien-10-15", cats: ["markets"], when: "Schluss Mi 14.10.2026 (Europa/USA) · Asien-Handel Do 15.10.2026",
      headline: "US-Inflationsdaten fallen höher aus als erwartet, DAX schließt vor den Daten im Plus, asiatische Speicherchip-Werte brechen am Donnerstag deutlich ein",
      sec30: "Am Mittwoch schlossen DAX (+0,25 % auf 25.322,48 Punkte) und Euro Stoxx 50 (+0,38 bis 0,46 %) im Plus, gestützt von besseren chinesischen Handelsdaten. Die US-Börsen folgten einem anderen Muster: Nach Veröffentlichung der US-Inflationsdaten für September fiel der S&P 500 um 1,11 %, die Nasdaq um 1,3 bis 1,9 %, der Dow gab moderat um 0,09 % nach. Grund waren eine Kopfrate von 3,7 % und eine Kernrate von 2,6 %, beide höher als erwartet. Am Donnerstagmorgen setzte sich in Asien kein Erholungstrend fort, sondern ein deutlich schärferer Ausverkauf bei Speicherchip-Werten: Der Kospi fiel zeitweise um 7 bis 8 % mit kurzzeitiger Handelsaussetzung, der Nikkei um rund 5 %, Samsung und SK Hynix zweistellig.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Mittwoch entwickelt?", items: [
          { tag: "fakt", text: "Der DAX legte um 0,25 % (+62,58 Pkt.) auf 25.322,48 Punkte zu.",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] },
          { tag: "fakt", text: "Der Euro Stoxx 50 stieg je nach Quelle um 0,38 bis 0,46 % auf 6.190,37 bis 6.195,22 Punkte." }
        ]},
        { h: "Wie reagierten die US-Börsen auf die Inflationsdaten?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 1,11 % auf 7.718,94 Punkte, die Nasdaq Composite je nach Quelle um 1,3 bis 1,9 % auf 26.692,87 bis 26.840 Punkte, der Dow Jones gab moderater um 0,09 % (−48,62 Pkt.) auf 51.621,48 Punkte nach.",
            ask: [{ label: "Warum reagiert die Nasdaq oft stärker als der Dow?", ref: "chain:nasdaq-why" }] },
          { tag: "fakt", text: "KI-nahe Werte wie CoreWeave gerieten mit rund −15 % besonders stark unter Druck." }
        ]},
        { h: "Was löste den neuen Ausverkauf bei asiatischen Speicherchip-Werten am Donnerstag aus?", items: [
          { tag: "fakt", text: "Der Kospi fiel zeitweise um 7 bis 8 % auf rund 5.527 Punkte, zeitweise mit kurzer Handelsaussetzung (Circuit Breaker); der Nikkei 225 fiel um rund 5 % auf rund 64.335 Punkte. Samsung Electronics fiel um rund 7 bis 9,7 %, SK Hynix um rund 10 bis 11,1 %, Kioxia (Japan) um rund 11,2 %, Tokyo Electron um rund 7,5 %.",
            ask: [{ label: "Mehr zur Chip-Konkurrenz und zur KI-Debatte", ref: "s:14" }] },
          { tag: "unbestaetigt", text: "Als Treiber nennen Berichte vorläufige Samsung-Quartalszahlen mit einem operativen Gewinn unter Markterwartung, eine neue Ankündigung des chinesischen Herstellers CXMT zu DDR5-Servermodulen mit neuer Zellstruktur sowie anhaltende Zinssorgen; Broadcom- und Intel-Chefs sollen laut Berichten zudem gewarnt haben, die Finanzierung werde zum „großen Hindernis” für den KI-Boom." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass europäische Börsen am Mittwoch noch vor den US-Inflationsdaten zulegten, während US-Indizes danach nachgaben und asiatische Speicherchip-Werte am Donnerstag deutlich schärfer einbrachen als am Vortag, zeigt erneut, wie empfindlich Anleger derzeit sowohl auf Zinsdaten als auch auf einzelne Signale zur künftigen Marktstellung bei KI- und Speicherchips reagieren. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Inflationsdaten und die Fed-Reaktion werden in Meldung 4 vertieft, die Chip-Thematik in Meldung 14, die Zinslage in Meldung 2.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why", "e:ai-capex"],
      sources: [
        { title: "finanzen.net: Pluszeichen in Frankfurt – DAX verbucht letztendlich Zuschläge", url: "https://www.finanzen.net/nachricht/aktien/pluszeichen-in-frankfurt-dax-verbucht-letztendlich-zuschlaege-15985118" },
        { title: "ARIVA.DE: Aktien Europa Schluss – teils deutliche Gewinne", url: "https://www.ariva.de/news/aktien-europa-schluss-teils-deutliche-gewinne-12169382" },
        { title: "CNBC: 10-year Treasury yield jumps as September core inflation comes in hotter than expected", url: "https://www.cnbc.com/amp/2026/10/14/us-treasury-yields-cpi-inflation-report.html" },
        { title: "Invezz: Samsung, SK Hynix stocks crash 9%-11% as risk shifts from chips to customers", url: "https://invezz.com/news/2026/10/15/samsung-sk-hynix-stocks-crash-9-11-as-risk-shifts-from-chips-to-customers/" },
        { title: "Bloomberg: Chip Stocks Deepen Losses as Concerns Mount Over Rates, AI Debt", url: "https://www.bloomberg.com/news/articles/2026-10-15/chip-stocks-deepen-losses-as-concerns-mount-over-rates-ai-debt" }
      ]
    },

    /* 2 MÄRKTE: RENDITEN US/BUND + FED NACH CPI */
    {
      id: "renditen-fed-cpi-hoch-fomc-10-15", cats: ["markets"], when: "Fed-Leitzins 3,75–4,00 % seit 16.09. · CPI-Veröffentlichung 14.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "US-Rendite springt nach höheren Inflationsdaten auf rund 5,3 Prozent, Markterwartung für Fed-Zinsschritt schwankt deutlich",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen sprang am Mittwoch nach Veröffentlichung der US-Inflationsdaten für September um rund 9 Basispunkte auf etwa 5,28 bis 5,30 %, zeitweise bis 5,365 % – ein Mehrjahreshoch. Fed-Gouverneur Waller hatte zuvor erklärt, bei anhaltenden Daten seien weitere Zinserhöhungen angebracht; New-York-Fed-Präsident Williams sagte bereits am 13.10., für 2026 sei noch ein Schritt angebracht, für 2027 aber keiner mehr nötig. Die eingepreiste Wahrscheinlichkeit für ein Halten des Leitzinses bei der FOMC-Sitzung am 27./28.10. liegt laut Berichten bei rund 66 %, für eine weitere Erhöhung bei rund 33 bis 35 % – beide Werte schwankten zuletzt binnen weniger Tage deutlich. Die Bund-Rendite bewegte sich mit rund 3,47 bis 3,50 % kaum, wobei die Quellenlage hier ungewöhnlich stark streut.",
      blocks: [
        { h: "Wie reagierte die US-Rendite auf die Inflationsdaten?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen sprang am Mittwoch um rund 9 Basispunkte auf etwa 5,28 bis 5,30 %, mit einem Intraday-Hoch von rund 5,365 % – nach Berichten ein Mehrjahreshoch.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,3 %?", ref: "n:ust10" }] }
        ]},
        { h: "Was sagen Fed-Mitglieder zum weiteren Vorgehen?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller erklärte, bei anhaltenden Daten seien weitere Zinserhöhungen angebracht, um die Inflation schneller Richtung 2 %-Ziel zu bringen; Erhöhungen müssten aber nicht auf aufeinanderfolgenden Sitzungen erfolgen." },
          { tag: "position", text: "New-York-Fed-Präsident John Williams sagte bereits am 13.10., für 2026 sei aus seiner Sicht noch eine weitere Zinserhöhung angebracht, für 2027 sehe er dagegen keine weitere Erhöhung als nötig an." },
          { tag: "unbestaetigt", text: "Mehrere Prognosemärkte (u. a. CME FedWatch, Kalshi) nennen für ein Halten des Leitzinses am 27./28.10. eine Wahrscheinlichkeit von rund 66 %, für eine Erhöhung von rund 33 bis 35 %; diese Werte schwankten laut Berichten binnen weniger Tage deutlich (von rund 22 % auf 35 % nach den Inflationsdaten). Für die Dezember-Sitzung wird eine höhere Erhöhungswahrscheinlichkeit von rund 63 % gehandelt." }
        ]},
        { h: "Wie ist der Stand bei der Bund-Rendite?", items: [
          { tag: "unbestaetigt", text: "Die Bund-Rendite bewegte sich am Mittwoch kaum bei rund 3,47 bis 3,50 %; die verfügbaren Quellen weichen hier jedoch ungewöhnlich stark voneinander ab (Spanne rund 3,24 bis 3,80 % je nach Quelle und Laufzeit). EZB-Chefvolkswirt Lane nannte einen weltweiten, auch vom KI-Investitionsboom getriebenen Zinsanstieg als einen Faktor für das insgesamt höhere Renditeniveau in Europa.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die eingepreiste Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung nach den Inflationsdaten kurzfristig deutlich schwankte, während Fed-Mitglieder selbst unterschiedliche Signale senden, zeigt ein Abwägen zwischen anhaltendem Inflationsdruck und konjunktureller Vorsicht; die FOMC-Sitzung am 27./28.10. dürfte hierzu mehr Klarheit bringen." }
        ]}
      ],
      reaction: "Die US-Inflationsdaten und Arbeitsmarktlage werden in Meldung 4 vertieft, die EZB-Seite in Meldung 5.",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:fed-hike", "e:central-banks-why"],
      sources: [
        { title: "CNBC: 10-year Treasury yield jumps as September core inflation comes in hotter than expected", url: "https://www.cnbc.com/amp/2026/10/14/us-treasury-yields-cpi-inflation-report.html" },
        { title: "Forbes: Fed 66% Likely To Hold Rates Steady Following High Inflation Data", url: "https://www.forbes.com/sites/digital-assets/2026/10/14/fed-66-likely-to-hold-rates-steady-following-high-inflation-data/" },
        { title: "Axios: Federal Reserve will take its time delivering rate hikes (Waller)", url: "https://www.axios.com/2026/10/08/interest-rate-hikes-fed-waller" },
        { title: "Bloomberg: Fed's Williams Currently Sees No Need for Rate Hike in 2027", url: "https://www.bloomberg.com/news/articles/2026-10-13/fed-s-williams-currently-sees-no-need-for-rate-hike-in-2027" },
        { title: "ARIVA.DE: Deutsche Anleihen legen etwas zu", url: "https://www.ariva.de/news/deutsche-anleihen-legen-etwas-zu-12168664" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-15", cats: ["markets"], when: "Stand Mi 14.10./Do-Morgen 15.10.2026",
      headline: "Gold gibt nach höheren US-Renditen nach, Bitcoin bleibt schwankungsanfällig, Euro legt minimal zu",
      sec30: "Gold notierte je nach Quelle und Tageszeitpunkt zwischen rund 4.080 und 4.168 Dollar je Feinunze – ein Rückgang von rund 1,5 bis 1,6 %, nachdem die US-Anleiherenditen nach den Inflationsdaten gestiegen waren. Bitcoin blieb volatil und notierte zuletzt wieder bei rund 83.300 Dollar, nach einem zwischenzeitlichen Rückgang unter 81.000 Dollar. Der Euro legte laut EZB-Referenzkurs leicht von 1,1188 auf 1,1195 Dollar zu, während ein anderer Überblick für den Tagesverlauf eine Abschwächung um rund 0,7 % nennt.",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "unbestaetigt", text: "Goldreporter nennt für den Nachmittag (15:52 Uhr) 4.097,73 Dollar (−1,53 %), bei einem Tageshoch von 4.168,43 und einem Tagestief von 4.080,14 Dollar; andere Quellen nennen für den Morgen noch rund 4.147 bis 4.160 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "fakt", text: "Als Hintergrund nennen Berichte die nach den US-Inflationsdaten gestiegenen US-Anleiherenditen, die den zinslosen Wertspeicher Gold belasteten." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin war zuvor zwischenzeitlich unter 81.000 Dollar gefallen und erholte sich bis Mittwoch/Donnerstag wieder auf rund 83.300 Dollar; die Schwankungsbreite blieb hoch.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "fakt", text: "Als Hintergrund nennen Berichte wieder verstärkt einsteigende Spot-Käufer, nachdem gestiegene Anleiherenditen zwischenzeitlich belastet hatten." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs stieg von 1,1188 Dollar am Dienstag auf 1,1195 Dollar am Mittwoch." },
          { tag: "unbestaetigt", text: "Ein dpa-AFX-Überblick nennt dagegen eine Abschwächung des Euro im Tagesverlauf um rund 0,7 % nach den US-Inflationsdaten – die Angaben zum genauen Tagesverlauf widersprechen sich.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold nach den höheren US-Renditen nachgab, während Bitcoin nach einem kurzen Einbruch wieder aufholte und beim Euro-Kurs widersprüchliche Tagesverlaufsangaben vorliegen, zeigt weiterhin uneinheitliche Signale an den Finanzmärkten nach den US-Inflationsdaten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Bewegungen bei Gold, Bitcoin und Euro fallen zusammen mit der nach den Inflationsdaten gestiegenen US-Rendite (Meldung 2) und der unsicheren Ölpreis-Lage am Golf (Meldung 9).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "Goldreporter: Goldpreis heute, 14.10.2026 – US-Inflation", url: "https://www.goldreporter.de/goldpreis-heute-14102026-us-inflation/marktbericht-gold/262393/" },
        { title: "Goldreporter: Goldpreis – Charttechnik, Seitwärtsbewegung, 14.10.2026", url: "https://www.goldreporter.de/goldpreis-charttechnik-seitwaertsbewegung-14-10-2026/charttechnik/262403/" },
        { title: "Fortune: Current price of Bitcoin, Oct. 14, 2026", url: "https://fortune.com/article/price-of-bitcoin-10-14-2026/" },
        { title: "news.Bitcoin.com: Bitcoin Price Caught Between Bullish Averages and $84K Resistance", url: "https://news.bitcoin.com/market-updates/bitcoin-price-caught-between-bullish-averages-and-84k-resistance/" },
        { title: "EZB: Euro-Referenzkurs (Euro foreign exchange reference rates)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.de.html" }
      ]
    },

    /* 4 WIRTSCHAFT: US-INFLATION HOCH/FED/ARBEITSMARKT */
    {
      id: "us-inflation-hoch-fed-arbeitsmarkt-10-15", cats: ["economy"], when: "US-Inflationsdaten (CPI) veröffentlicht 14.10., 14:30 Uhr MEZ · Erstanträge Woche bis 03.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "US-Inflation steigt im September stärker als erwartet auf 3,7 Prozent, Fed-Mitglieder bewerten weiteren Zinsschritt unterschiedlich",
      sec30: "Das Bureau of Labor Statistics veröffentlichte am 14.10. die US-Verbraucherpreisdaten für September: Die Kopfrate stieg auf 3,7 % im Jahresvergleich (Konsens: 3,6 %), die Kernrate auf 2,6 % (Konsens: 2,4 bis 2,5 %); Haupttreiber waren Benzinpreise (+9,1 % im Monat) und der Energieindex insgesamt (+5,2 %). US-Aktien gaben danach nach, die Rendite zehnjähriger US-Staatsanleihen sprang auf rund 5,3 %. Der Arbeitsmarkt zeigt weiter gemischte Signale: Die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis zum 03.10. auf 197.000, das Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein 5-Monats-Tief. Ein Regierungsshutdown findet weiterhin nicht statt; die Übergangsfinanzierung läuft bis zum 11.12.2026.",
      blocks: [
        { h: "Was ergaben die US-Inflationsdaten für September?", items: [
          { tag: "fakt", text: "Das Bureau of Labor Statistics veröffentlichte am 14.10. die Verbraucherpreisdaten für September: Kopfrate +3,7 % im Jahresvergleich (Konsens 3,6 %, Vormonat August rund 3,4 %), Kernrate +2,6 % (Konsens 2,4 bis 2,5 %); im Monatsvergleich stieg der Gesamtindex um 0,6 %, die Kernrate um 0,3 %. Haupttreiber waren Benzinpreise (+9,1 % im Monat) und der Energieindex insgesamt (+5,2 %).",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]},
        { h: "Wie reagierten die Märkte auf die Daten?", items: [
          { tag: "fakt", text: "US-Aktien gaben nach Veröffentlichung der Daten nach (S&P 500 −1,11 %, Nasdaq −1,3 bis −1,9 %), die Rendite zehnjähriger US-Staatsanleihen sprang um rund 9 Basispunkte auf etwa 5,28 bis 5,30 %, zeitweise bis 5,365 %.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,3 %?", ref: "n:ust10" }] }
        ]},
        { h: "Wie reagieren Fed-Mitglieder auf diese Datenlage?", items: [
          { tag: "position", text: "Fed-Gouverneur Waller erklärte, bei anhaltenden Daten seien weitere Zinserhöhungen angebracht, um die Inflation schneller Richtung 2 %-Ziel zu bringen; Erhöhungen müssten nicht auf aufeinanderfolgenden Sitzungen erfolgen." },
          { tag: "position", text: "New-York-Fed-Präsident Williams sagte bereits am 13.10., für 2026 sei noch ein weiterer Zinsschritt angebracht, für 2027 aber keiner mehr nötig." },
          { tag: "unbestaetigt", text: "Die eingepreiste Wahrscheinlichkeit für ein Halten des Leitzinses am 27./28.10. liegt laut Berichten bei rund 66 %, für eine Erhöhung bei rund 33 bis 35 %; diese Werte schwankten binnen weniger Tage deutlich. Für Dezember wird eine Erhöhungswahrscheinlichkeit von rund 63 % gehandelt." }
        ]},
        { h: "Wie ist der Stand bei Arbeitsmarkt und Verbrauchervertrauen?", items: [
          { tag: "fakt", text: "Die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis zum 03.10. auf 197.000 (Erwartung: 200.000), den niedrigsten Stand seit Mitte Juli; der 4-Wochen-Schnitt lag bei 198.000." },
          { tag: "fakt", text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte (Erwartung: 47,6) – ein 5-Monats-Tief; die 1-Jahres-Inflationserwartungen der Befragten stiegen auf 4,7 %.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Gibt es einen Regierungsshutdown?", items: [
          { tag: "fakt", text: "Ein Regierungsshutdown findet nicht statt: Eine am 02.09.2026 unterschriebene Übergangsfinanzierung sichert den Bundeshaushalt bis zum 11.12.2026; Datenveröffentlichungen wie die CPI-Daten liefen fristgerecht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Inflationsdaten höher ausfielen als erwartet und Fed-Mitglieder weiterhin unterschiedliche Signale zu einem möglichen weiteren Zinsschritt senden, während Arbeitsmarkt und Verbrauchervertrauen gleichzeitig schwächere Signale zeigen, zeigt laut Marktbeobachtern ein Abwägen zwischen Inflationsbekämpfung und konjunktureller Vorsicht vor der FOMC-Sitzung am 27./28.10." }
        ]}
      ],
      reaction: "Die Fed-Debatte knüpft an die Renditelage in Meldung 2 an; die europäische Gegenseite wird in Meldung 5 behandelt.",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "U.S. Bureau of Labor Statistics: Consumer Price Index Summary – September 2026", url: "https://www.bls.gov/news.release/cpi.nr0.htm" },
        { title: "US Inflation Calculator: US CPI Sept 2026 – Inflation Hits 3.7% as Gas Prices Surge", url: "https://www.usinflationcalculator.com/inflation/us-cpi-sept-2026-inflation-hits-3-7-as-gas-prices-surge/100073364/" },
        { title: "CNBC: 10-year Treasury yield jumps as September core inflation comes in hotter than expected", url: "https://www.cnbc.com/amp/2026/10/14/us-treasury-yields-cpi-inflation-report.html" },
        { title: "Forbes: Fed 66% Likely To Hold Rates Steady Following High Inflation Data", url: "https://www.forbes.com/sites/digital-assets/2026/10/14/fed-66-likely-to-hold-rates-steady-following-high-inflation-data/" },
        { title: "Advisor Perspectives: Consumer Sentiment Falls to Five Month Low", url: "https://www.advisorperspectives.com/dshort/updates/2026/10/09/consumer-sentiment-falls-again-in-october" }
      ]
    },

    /* 5 WIRTSCHAFT: EZB/IWF BANGKOK/SCHNABEL-NACHFOLGE */
    {
      id: "ezb-iwf-bangkok-schnabel-nachfolge-10-15", cats: ["economy"], when: "IWF-Jahrestagung 12.–18.10. · Lagarde-Rede 14.10. · Schnabel-Nachfolge-Frist 28.10. · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "Lagarde sieht in Bangkok weiterhin keine Zweitrundeneffekte bei der Inflation, IWF bestätigt höhere Deutschland-Wachstumsprognose, Schnabel-Nachfolge weiter offen",
      sec30: "EZB-Präsidentin Lagarde sagte am 14.10. bei der IWF/Weltbank-Jahrestagung in Bangkok (12.–18.10.), man sehe weiterhin keine Zweitrundeneffekte bei der Inflation und lege sich nicht im Voraus auf einen Zinspfad fest. Der neue IWF-Weltwirtschaftsausblick bestätigt eine Wachstumsprognose für Deutschland von 1,3 % für 2026 (Eurozone 1,1 %, Welt 3,1 %); die IWF-Chefökonomin nannte den Handel mit KI-Gütern einen „entscheidenden Beschleuniger”. Die EZB hält ihren Einlagensatz bei 2,50 %; laut einer Reuters-Umfrage erwarten 70 von 73 Ökonomen am 29.10. eine Pause, 64 von 73 für Dezember eine Erhöhung. Die Bewerbungsfrist für die Schnabel-Nachfolge im EZB-Direktorium läuft bis zum 28.10., ohne dass bislang ein offizieller deutscher Kandidat feststeht.",
      blocks: [
        { h: "Was sagte EZB-Präsidentin Lagarde in Bangkok?", items: [
          { tag: "position", text: "Lagarde sagte am 14.10.: Die Inflation sei überwiegend, aber nicht ausschließlich infolge der Energiepreise gestiegen; man sehe bislang noch keine Zweitrundeneffekte. Man könne nicht warten, bis diese in vollem Umfang sichtbar seien, aber man könne sie antizipieren und nach Hinweisen suchen. Man lege sich nicht im Voraus auf einen bestimmten Zinspfad fest.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] },
          { tag: "position", text: "Zum Wachstum von 1,1 % in der Eurozone sagte Lagarde, dies sei „nicht brillant”, aber „nicht schlecht”. Zur Lage in Frankreich sagte sie laut einem Interview, die Lösung der Schuldenprobleme liege in der französischen Fiskalpolitik." }
        ]},
        { h: "Was zeigt der neue IWF-Weltwirtschaftsausblick?", items: [
          { tag: "fakt", text: "Der am 13./14.10. vorgestellte IWF-Weltwirtschaftsausblick bestätigt eine Wachstumsprognose für Deutschland von 1,3 % für 2026 (zuvor 0,7 % im Juli) und 1,1 % für 2027; für die Eurozone werden 1,1 %, für die Weltwirtschaft 3,1 % (2026) bzw. 3,4 % (2027) erwartet. Die weltweite Kopfinflation wird mit 4,7 % (2026) und 4,1 % (2027) angegeben." },
          { tag: "position", text: "IWF-Chefökonomin Silvana Tenreyro bezeichnete den Handel mit KI-bezogenen Gütern als „entscheidenden Beschleuniger” des Wachstums; als zentrales Risiko nannte der IWF die Energiemärkte angesichts erneuter Spannungen im Nahen Osten." }
        ]},
        { h: "Wie ist der Stand bei der EZB-Zinspolitik?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %, zuletzt angehoben am 10.09. als Reaktion auf den Energiepreisschock." },
          { tag: "unbestaetigt", text: "Eine Reuters-Umfrage unter 73 Ökonomen (05.–08.10.) ergab, dass 70 von 73 für die Sitzung am 29.10. eine Pause erwarten; 64 von 73 erwarten für Dezember eine Erhöhung um 25 Basispunkte auf 2,75 bis 3,00 %." },
          { tag: "position", text: "EZB-Chefvolkswirt Philip Lane nannte einen weltweiten, auch vom KI-Boom getriebenen Zinsanstieg als einen Hintergrund für die insgesamt gestiegenen Renditen in Europa." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Isabel Schnabel scheidet zum 04.01.2027 aus dem EZB-Direktorium aus und wechselt zum IWF. Eurogruppen-Chef Kyriakos Pierrakakis forderte die 21 Eurozonen-Länder auf, bis zum 28.10. Kandidaten zu benennen; die Eurogruppe berät im November." },
          { tag: "unbestaetigt", text: "Als mögliche Kandidatin wird die Ökonomin Ulrike Malmendier genannt; dies ist bislang nicht offiziell bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der IWF seine Wachstumsprognose für Deutschland bestätigt, während die EZB einem möglichen Dezember-Zinsschritt laut der Ökonomenumfrage näherzukommen scheint und zugleich eine Personalnachfolge im Direktorium noch offen ist, zeigt, wie mehrere wirtschafts- und geldpolitische Entwicklungen in Europa derzeit zusammenfallen." }
        ]}
      ],
      reaction: "Die EZB-Themen ergänzen die Fed-Debatte in Meldung 4 und die Renditelage in Meldung 2.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "fxstreet.de: Lagarde-Rede – Wir sehen bisher noch keine Zweitrundeneffekte", url: "https://www.fxstreet.de.com/news/lagarde-rede-wir-sehen-bisher-noch-keine-zweitrundeneffekte-202610140236" },
        { title: "Börsen-Zeitung: Steigende Renditen bremsen EZB-Räte", url: "https://www.boersen-zeitung.de/konjunktur-politik/steigende-renditen-bremsen-ezb" },
        { title: "cash.ch: EZB-Nominierungsfrist für Schnabel-Nachfolge steht, Lagardes Pläne weiter offen", url: "https://www.cash.ch/news/top-news/ezb-nominierungsfrist-fur-schnabel-nachfolge-steht-lagardes-plane-weiter-offen-975350" },
        { title: "ad-hoc-news.de: IWF-Prognose – Deutschlands Wachstum steigt 2026 auf 1,3 Prozent", url: "https://www.ad-hoc-news.de/wirtschaft/iwf-prognose-deutschlands-wachstum-steigt-2026-auf-1-3-prozent/70309039" },
        { title: "Handelsblatt: IWF-Konjunkturprognose – Die Weltwirtschaft klafft immer weiter auseinander", url: "https://www.handelsblatt.com/politik/international/iwf-konjunkturprognose-die-weltwirtschaft-klafft-immer-weiter-auseinander/100261440.html" }
      ]
    },

    /* 6 DEUTSCHLAND: SCHWEITZER VEREIDIGT/RENTENREFORM */
    {
      id: "rentenreform-schweitzer-vereidigt-miersch-winkel-10-15", cats: ["germany"], when: "Schweitzer-Vereidigung 14.10. · Miersch-Vorstoß 11.10. · Winkel-Zurückweisung 11./12.10.2026",
      headline: "Alexander Schweitzer als neuer Bundesarbeitsminister vereidigt, Streit um weiteres Verfahren bei der Rentenreform hält an",
      sec30: "Alexander Schweitzer (SPD), zuvor Ministerpräsident von Rheinland-Pfalz, wurde am 14.10. im Bundestag als neuer Bundesminister für Arbeit und Soziales vereidigt – als Nachfolger der zurückgetretenen Bärbel Bas. Kanzler Merz würdigte in seiner Regierungserklärung die Arbeit von Bas und forderte von Schweitzer, die verabredeten Gesetzentwürfe „so schnell wie möglich” ins Kabinett zu bringen. Der Streit zwischen SPD-Fraktionschef Miersch und Unionsfraktionsvize Winkel über das weitere Verfahren vor einem Kabinettsbeschluss zur Rentenreform hält laut verfügbaren Quellen weiter an. Ein Kabinettsbeschluss wird weiterhin bis Jahresende angestrebt, die abschließende Bundestagsverabschiedung bleibt auf das erste Quartal 2027 verschoben.",
      blocks: [
        { h: "Wer ist der neue Bundesarbeitsminister, und wie verlief die Vereidigung?", items: [
          { tag: "fakt", text: "Alexander Schweitzer (SPD, 53, Jurist, 2024 bis 2026 Ministerpräsident von Rheinland-Pfalz) wurde am 14.10. zu Beginn der Bundestagssitzung von Bundestagspräsidentin Julia Klöckner als neuer Bundesminister für Arbeit und Soziales vereidigt und nahm am selben Tag erstmals an der Kabinettssitzung teil." },
          { tag: "position", text: "Kanzler Merz würdigte in seiner Regierungserklärung die Arbeit von Bärbel Bas, die das Amt „mit großer Empathie, insbesondere für die Schwachen” ausgeübt habe, und forderte von Schweitzer, die verabredeten Gesetzentwürfe „so schnell wie möglich” ins Kabinett zu bringen." }
        ]},
        { h: "Was fordert Kanzler Merz beim Zeitplan der Rentenreform?", items: [
          { tag: "position", text: "Merz sagte beim Arbeitgebertag in Berlin am 13.10., die Vorschläge der Rentenkommission lägen bereits seit Juni vor: „Juli, August, September, Oktober – das ist mir schon zu lang.” Das Kabinett solle die Rentenreform noch in diesem Jahr beschließen.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]},
        { h: "Wie ist der Streit um das weitere Verfahren zwischen Miersch und Winkel?", items: [
          { tag: "position", text: "SPD-Fraktionschef Matthias Miersch hatte am 11.10. vorgeschlagen, vor einem Kabinettsbeschluss die Bundestagsfraktionen und möglicherweise die Ministerpräsidenten stärker einzubeziehen." },
          { tag: "position", text: "Unionsfraktionsvize Johannes Winkel (CDU/CSU) hatte dies zurückgewiesen: „Es macht keinen Sinn, nach der umfassenden Arbeit der Kommission und der politischen Einigung nun eine neue Rentenkommission mit neuen Akteuren einzusetzen.” Eine Aktualisierung dieses Streits nach dem 11./12.10. ließ sich in der Recherche nicht finden; er bestand den verfügbaren Quellen zufolge am 14./15.10. fort." }
        ]},
        { h: "Was ist der aktuelle Zeitplan?", items: [
          { tag: "fakt", text: "Ein Kabinettsbeschluss zum Rentenpaket wird weiterhin bis spätestens Jahresende angestrebt; die abschließende Verabschiedung im Bundestag bleibt wegen der Beteiligung des Bundesrats auf das erste Quartal 2027 verschoben." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mit Schweitzer ein neuer Minister die Federführung bei der Rentenreform übernimmt, während der Streit um den Umfang der Konsultation vor einem Kabinettsbeschluss weiter anhält, zeigt zusätzliche Unsicherheit bei einem ohnehin bereits verzögerten Gesetzgebungsprozess." }
        ]}
      ],
      reaction: "Die Entwicklungen laufen parallel zu den weiteren innenpolitischen Themen in Meldung 7.",
      terms: ["koalition", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics"],
      sources: [
        { title: "Deutscher Bundestag: Alexander Schweitzer als Bundesminister für Arbeit und Soziales vereidigt", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw42-de-vereidigung-1224038" },
        { title: "ARIVA.DE: Bas-Nachfolger Schweitzer im Bundestag vereidigt", url: "https://www.ariva.de/news/bas-nachfolger-schweitzer-im-bundestag-vereidigt-12169089" },
        { title: "onvista.de: Merz – Kabinett soll Rentenreform noch in diesem Jahr verabschieden", url: "https://www.onvista.de/news/2026/10-13-merz-kabinett-soll-rentenreform-noch-in-diesem-jahr-verabschieden-0-20-26563493" },
        { title: "Handelsblatt: Rentenreform – Unionsfraktionsvize weist Mierschs Renten-Vorstoß zurück", url: "https://www.handelsblatt.com/politik/deutschland/rentenreform-unionsfraktionsvize-weist-mierschs-renten-vorstoss-zurueck/100261313.html" }
      ]
    },

    /* 7 DEUTSCHLAND: BERLIN-SONDIERUNG WIEDERAUFNAHME/UMFRAGEN/STROMSTEUER */
    {
      id: "berlin-sondierung-wiederaufnahme-umfragen-stromsteuer-10-15", cats: ["germany"], when: "Sondierungs-Wiederaufnahme Mi-Abend 14.10. · INSA 11.10./Forsa 13.10. · Merz-Stromsteuer-Ankündigung 12.10. · Merz-Regierungserklärung 14.10.2026",
      headline: "Berliner SPD, Grüne und Linke verständigen sich auf Fortsetzung der Koalitionssondierungen, neue Umfragen zeigen weiterhin unterschiedliche AfD-Werte",
      sec30: "Nachdem SPD und Grüne die Berliner Koalitionssondierungen mit der Linken am Dienstagabend wegen der Aufnahme der umstrittenen Politikerin Vanessa Emde in die Linksfraktion unterbrochen hatten, verständigten sich alle drei Parteien am Mittwochabend, 14.10., auf eine Fortsetzung; die gemeinsame Antisemitismus-Vereinbarung soll fester Bestandteil eines möglichen Koalitionsvertrags werden. Neue Umfragen zeigen weiterhin unterschiedliche Werte für die AfD (INSA 30 %, Forsa 26 %). Zur von Kanzler Merz angekündigten Stromsteuer-Senkung für alle Verbraucher liegt weiterhin kein Umsetzungsdatum vor; Merz hielt zudem am 14.10. eine Regierungserklärung zum EU-Gipfel und forderte ein schärferes Vorgehen gegen „unfaire Handelspraktiken”.",
      blocks: [
        { h: "Wie wurden die Berliner Sondierungen fortgesetzt?", items: [
          { tag: "fakt", text: "Linke, Grüne und SPD verständigten sich am Mittwochabend, 14.10., auf eine Fortsetzung der zuvor unterbrochenen Sondierungen; Bedingung ist, dass die gemeinsame „Berliner Vereinbarung” zum Umgang mit Antisemitismus fester Bestandteil eines möglichen Koalitionsvertrags wird.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] },
          { tag: "position", text: "Linken-Co-Fraktionschefin Elif Eralp sagte: „Missverständnisse sind ausgeräumt.” SPD-Spitzenkandidat Steffen Krach bezeichnete die Vereinbarung als „Basis für alles, was in den kommenden Tagen und Wochen noch kommt”; wer sich nicht daran halte, werde „die Konsequenzen zu spüren bekommen”. Grünen-Spitzenkandidatin Bettina Jarasch sagte, es sei „ein Knall, der uns vielleicht allen auch gutgetan hat”." }
        ]},
        { h: "Was zeigen neue Umfragen?", items: [
          { tag: "unbestaetigt", text: "Die INSA-Umfrage vom 11.10. sieht die AfD bei 30,0 %, CDU/CSU bei 18,5 %, Grüne bei 14,0 %, SPD bei 13,5 %, Linke bei 10,0 %. Die Forsa-Umfrage vom 13.10. sieht die AfD dagegen bei 26 %, Union bei 19 %, Grüne bei 17 %, SPD bei 14 %, Linke bei 12 %. Der ARD-DeutschlandTrend vom 01.10. hatte die AfD bei 27 % gesehen; die Institute weichen vor allem bei AfD und Grünen deutlich voneinander ab.",
            ask: [{ label: "Wie entscheidet eine solche Mehrheitsfrage über eine Koalition?", ref: "e:coalition-majority" }] },
          { tag: "unbestaetigt", text: "Laut ARD-DeutschlandTrend waren zuletzt nur rund 10 % der Befragten mit der Arbeit der Bundesregierung zufrieden – ein historischer Tiefstand." }
        ]},
        { h: "Was ist der Stand bei der Stromsteuer-Ankündigung?", items: [
          { tag: "fakt", text: "Kanzler Merz hatte nach der CDU-Präsidiumsklausur am 12.10. angekündigt, die Stromsteuer auch für Privathaushalte auf das EU-Mindestniveau zu senken (von 2,05 auf 0,05 Cent je Kilowattstunde), um nach seinen Worten eine „Glaubwürdigkeitslücke” zu schließen; ein Haushalt mit rund 3.500 kWh Jahresverbrauch könnte dadurch rund 81 Euro jährlich sparen.",
            ask: [{ label: "Mehr zu den Details und zur Finanzierung", ref: "s:15" }] },
          { tag: "unbestaetigt", text: "Merz verwies auf mögliche Mehreinnahmen von rund 5 Mrd. Euro durch optimistischere Wachstumsprognosen zur Gegenfinanzierung; ein konkretes Umsetzungsdatum und neue Reaktionen der Koalitionspartner seit dem 13./14.10. ließen sich in der Recherche nicht finden." }
        ]},
        { h: "Was sagte Kanzler Merz zum EU-Gipfel?", items: [
          { tag: "position", text: "Merz gab am 14.10. im Bundestag eine Regierungserklärung zum EU-Gipfel ab und forderte weitere Einsparungen im EU-Haushalt sowie ein schärferes Vorgehen gegen unfaire Handelspraktiken: „Wir werden nicht länger tatenlos zusehen, wenn andere Länder unserer Wirtschaft durch hohe Subventionen, künstlich abgewertete Währungen, Überkapazitäten und aggressive Preispolitik schaden.”" }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Berliner Sondierungen nach einer kurzen Unterbrechung mit einer verbindlicheren Antisemitismus-Vereinbarung fortgesetzt werden, während bundesweite Umfragen weiterhin deutlich voneinander abweichende AfD-Werte zeigen und die Stromsteuer-Ankündigung ohne festes Datum bleibt, zeigt auf mehreren Ebenen anhaltende politische Bewegung ohne abschließende Klärung." }
        ]}
      ],
      reaction: "Die Entwicklungen ergänzen den Rentenstreit in Meldung 6 und die Energiepolitik in Meldung 15.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel Liveblog: Linke, Grüne und SPD verständigen sich auf Wiederaufnahme von Sondierungen", url: "https://www.tagesspiegel.de/berlin/liveblog/sondierungsgesprache-in-berlin-umstrittene-abgeordnete-vanessa-emde-wird-teil-der-linkenfraktion-16053722.html" },
        { title: "Berliner Zeitung: Berlin – SPD und Grüne unterbrechen Sondierungen wegen Vanessa Emde", url: "https://www.berliner-zeitung.de/article/berlin-spd-gruene-linke-sondierungen-unterbrochen-10492114" },
        { title: "dawum.de: Wahlumfrage vom 11.10.2026 von INSA", url: "https://dawum.de/Bundestag/INSA/2026-10-11/" },
        { title: "dawum.de: Wahlumfrage vom 13.10.2026 von Forsa", url: "https://dawum.de/Bundestag/Forsa/2026-10-13/" },
        { title: "ZDFheute: Die drei Erkenntnisse aus Merz' Rede im Bundestag", url: "https://www.zdfheute.de/politik/merz-eu-regierungserklaerung-reformen-100.html" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE GROSSANGRIFF + EU-GIPFEL */
    {
      id: "ukraine-grossangriff-energie-sanktionspaket-eu-gipfel-10-15", cats: ["world", "geo"], when: "Trump-Behauptung 11.10. · Großangriff Nacht 13./14.10. · EU-Sanktionspaket (22.) 12.10. · EU-Gipfel 15.–16.10.2026",
      headline: "Russland greift ukrainische Energieinfrastruktur mit einem der schwersten Angriffe seit Trumps behauptetem Waffenstillstand an, EU berät beim Gipfel über eingefrorene russische Gelder",
      sec30: "Trotz eines von Präsident Trump am 11.10. behaupteten „Energie-Waffenstillstands”, den Außenminister Lawrow zurückwies, griff Russland in der Nacht zum 14.10. die Ukraine mit 39 ballistischen Raketen und über 120 Angriffsdrohnen an und traf sechs Wärmekraftwerke sowie eine Umspannstation in Kyjiw und der Region Charkiw sowie ein Rechenzentrum; mindestens neun Menschen wurden getötet, rund 500.000 bis 600.000 Menschen verloren vorübergehend den Strom. Die EU hatte am 12.10. ihr 22. Sanktionspaket mit rund 1.600 Einträgen verabschiedet. Beim EU-Gipfel am 15./16.10. in Brüssel wird über die Nutzung von rund 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine-Finanzierung beraten; eine finale Entscheidung wird laut Berichten nicht erwartet.",
      blocks: [
        { h: "Was behauptete Trump, und was geschah stattdessen?", items: [
          { tag: "position", text: "Trump schrieb am 11.10. auf Truth Social, es gelte „effective immediately” ein Energie-Waffenstillstand zwischen Russland und der Ukraine, dem beide Seiten zugestimmt hätten; Moskau und Kyjiw dementierten zunächst beide, von einer solchen Vereinbarung zu wissen." },
          { tag: "fakt", text: "In der Nacht zum 14.10. griff Russland dennoch mit 39 ballistischen Raketen und über 120 Angriffsdrohnen ukrainische Energie- und kritische Infrastruktur an, traf sechs Wärmekraftwerke sowie eine Umspannstation in Kyjiw und der Region Charkiw sowie ein Rechenzentrum einer Bank; mindestens neun Menschen wurden getötet, rund 500.000 bis 600.000 Menschen verloren vorübergehend den Strom." }
        ]},
        { h: "Wie reagierten Selenskyj und lokale Behörden?", items: [
          { tag: "position", text: "Präsident Selenskyj sagte, Russland habe genau jene Infrastruktur angegriffen, die von der vom amerikanischen Präsidenten verkündeten Waffenruhe erfasst sein sollte, und bezeichnete das Ausmaß des Angriffs als „völlig bewusst und demonstrativ”. Kyjiws Bürgermeister Vitali Klitschko bestätigte den massiven ballistischen Raketenangriff auf Energieanlagen in Kyjiw und Umgebung." },
          { tag: "fakt", text: "Selenskyj beklagte zudem, es habe erneut keine Frühwarnung von westlichen Partnern gegeben, und warnte vor Einschränkungen bei Starlink, die den Militärbetrieb störten." }
        ]},
        { h: "Was sagt Russland?", items: [
          { tag: "position", text: "Außenminister Lawrow wies eine Kampfpause für die Ukraine zurück: „Ich glaube nicht, dass er [Selenskyj] das verdient.” Kremlsprecher Peskow erklärte, Putin sei nur bereit, am Tag einer ukrainischen Wahl das Feuer einzustellen, sofern Kyjiw Wahlen organisiere; Selenskyj entgegnete, die Ukraine werde Wahlen abhalten, sofern Russland zuvor 60 Tage Waffenruhe einhalte." }
        ]},
        { h: "Was beschloss die EU, und worüber wird beim Gipfel beraten?", items: [
          { tag: "fakt", text: "Die EU-Außenminister verabschiedeten am 12.10. das 22. Sanktionspaket: rund 1.600 neue Listungen (826 Unternehmen, 743 Einzelpersonen) – das bislang größte Listungspaket seit Kriegsbeginn, unter anderem gegen Hersteller von Raketentriebwerken und Zulieferer der Rüstungsindustrie." },
          { tag: "unbestaetigt", text: "Beim EU-Gipfel am 15./16.10. in Brüssel beraten die Staats- und Regierungschefs über die Nutzung von rund 210 Mrd. Euro eingefrorener russischer Zentralbankgelder für die Ukraine-Finanzierung; Kyjiw sieht für 2027 eine Finanzierungslücke von rund 78 Mrd. Dollar. Schweden, die Niederlande, Spanien und Polen unterstützen den Zugriff auf die eingefrorenen Gelder, Belgien, Italien und Frankreich bremsen; laut Berichten wird beim Gipfel selbst keine finale Entscheidung erwartet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Russland binnen weniger Stunden nach einem von den USA verkündeten Waffenstillstand einen der bislang schwersten Angriffe auf ukrainische Energieinfrastruktur führte, während die EU gleichzeitig ihr größtes Sanktionspaket verabschiedet hat und beim Gipfel über die Finanzierung der Ukraine berät, zeigt weiterhin unterschiedliche Ansätze zwischen den wichtigsten Unterstützern der Ukraine und Russland. Wirtschaftlich bleibt die ukrainische Energieversorgung vor dem Winter gefährdet." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft; die deutsche Energiepolitik in Meldung 15.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Al Jazeera: Massive Russian attack on Ukraine kills at least six, cuts power in Kyiv", url: "https://www.aljazeera.com/news/2026/10/14/massive-russian-attack-on-ukraine-kills-at-least-six-cuts-power-in-kyiv" },
        { title: "CNN: Russia batters Ukraine's energy facilities", url: "https://edition.cnn.com/2026/10/14/europe/russia-ukraine-energy-strike-early-warning-intl-hnk" },
        { title: "Axios: Trump says Russia and Ukraine agreed to immediate energy ceasefire", url: "https://www.axios.com/2026/10/11/trump-russia-ukraine-energy-ceasefire-zelensky" },
        { title: "Consilium: EU agrees largest-ever package of listings (22nd sanctions package)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/10/12/russia-s-war-of-aggression-against-ukraine-eu-agrees-largest-ever-package-of-listings-targeting-almost-1600-individuals-and-entities-in-russia-s-military-industrial-complex/" },
        { title: "ua.news: EU wird beim Gipfel am 15./16. Oktober keine Entscheidung über Ukraine-Finanzierung treffen", url: "https://ua.news/en/world/es-ne-ukhvaliuvatime-rishen-pro-finansuvannia-ukrayini-na-samiti-15-16-zhovtnia" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: HORMUZ + RIAD-FLUGHAFEN */
    {
      id: "hormuz-anhaltend-riad-flughafen-gesperrt-10-15", cats: ["world", "geo"], when: "UKMTO-Meldungen 6.–14.10. · Houthi-Angriffe Riad 8.–10.10. · Flughafensperrung bis 17.10.2026",
      headline: "Tankerangriffe in der Straße von Hormus halten an, Flughafen Riad bleibt nach Houthi-Angriffen bis mindestens 17. Oktober geschlossen",
      sec30: "Die britische Marinebehörde UKMTO zählte zwischen dem 6. und 14.10. 15 weitere Angriffsmeldungen rund um die Straße von Hormus, davon 11 allein in den letzten vier Tagen vor dem 14.10. Iranische Vertreter beanspruchen weiterhin die „volle Kontrolle” über die Meerenge; die USA widersprechen dieser Darstellung. CENTCOM wies am 13.10. Behauptungen eines IRGC-Marinekommandeurs zurück und erklärte, am 12.10. seien mehr als 19 Mio. Barrel Rohöl sicher durch die Straße begleitet worden. Der Flughafen Riad bleibt nach den Houthi-Angriffen vom 8. bis 10.10. (mindestens 13 Tote, über 300 Verletzte) bis mindestens zum 17.10. geschlossen; über 3.100 Flüge wurden gestrichen.",
      blocks: [
        { h: "Wie hat sich die Zahl der Tankerangriffe weiterentwickelt?", items: [
          { tag: "fakt", text: "UKMTO zählte zwischen dem 6. und 14.10. 15 weitere Angriffsmeldungen rund um die Straße von Hormus, davon 11 allein in den letzten vier Tagen vor dem 14.10. – ein fortgesetzt hohes Niveau seit dem bisherigen Höchststand Anfang/Mitte Oktober.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was behaupten iranische Vertreter, und wie reagieren die USA?", items: [
          { tag: "position", text: "Ein IRGC-Berater erklärte, die Straße von Hormus sei „geschlossen”, die Streitkräfte der Islamischen Republik hätten die „volle Kontrolle” darüber; der Sekretär des Obersten Nationalen Sicherheitsrats erklärte, iranische Kräfte griffen jede Nacht mehrere Schiffe an, die angeblich Öl auf größere Tanker umladen – diese Angabe ließ sich nicht unabhängig bestätigen." },
          { tag: "fakt", text: "CENTCOM wies am 13.10. Behauptungen eines IRGC-Marinekommandeurs zurück, wonach sich US-Kriegsschiffe der Straße nicht näherten, und erklärte, am 12.10. seien mehr als 19 Mio. Barrel Rohöl sicher durch die Straße begleitet worden." },
          { tag: "position", text: "US-Außenminister Marco Rubio widersprach der iranischen Darstellung: Die Straße sei offen, der Ölfluss liege fast so hoch wie vor Konfliktbeginn." }
        ]},
        { h: "Was ist der Stand beim Flughafen Riad?", items: [
          { tag: "fakt", text: "Nach den Houthi-Angriffen vom 8. bis 10.10. auf den King-Khalid-Flughafen (mindestens 13 Tote, über 300 Verletzte) verlängerte die saudische Zivilluftfahrtbehörde GACA die Schließung bis mindestens zum 17.10., um Sicherheits- und Betriebsbereitschaft zu prüfen; über 3.100 Flüge wurden gestrichen." },
          { tag: "position", text: "Ein Houthi-Militärsprecher drohte, Fluggesellschaften sollten saudische Flughäfen meiden, diese seien „potenzielle Ziele” für weitere Operationen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Tankerangriffe auf fortgesetzt hohem Niveau bleiben, während der Flughafen Riad bereits mehr als eine Woche außer Betrieb ist, zeigt, wie sich mehrere Krisenherde am Golf gegenseitig verstärken – was sich auch in den widersprüchlichen Ölpreis-Angaben spiegelt.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der widersprüchliche Ölpreis bleibt Hintergrund für die deutsche Energieversorgung (Meldung 15) sowie für die Markteinordnung in Meldung 3.",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "Al Jazeera: Iran steps up Hormuz surveillance, attacks soar, oil flows crash again", url: "https://www.aljazeera.com/news/2026/10/14/iran-steps-up-hormuz-surveillance-attacks-soar-oil-flows-crash-again" },
        { title: "Seatrade Maritime: UKMTO issues four Hormuz attack reports, Iran claims ADNOC tanker strike", url: "https://www.seatrade-maritime.com/security/ukmto-issues-four-hormuz-attack-reports-iran-claims-adnoc-tanker-strike" },
        { title: "IranWire: CENTCOM rejects IRGC Navy commander's claim over control of Strait of Hormuz", url: "https://iranwire.com/en/news/158871-centcom-rejects-irgc-navy-commanders-claim-over-control-of-strait-of-hormuz/" },
        { title: "India TV News: Riyadh airport shut till October 17 as Saudis probe how defence systems failed", url: "https://www.indiatvnews.com/news/world/riyadh-airport-shut-till-october-17-as-saudis-probe-how-defence-systems-failed-in-houthi-attack-updates-2026-10-13-1056785" },
        { title: "TRAICY: Riyadh Airport Closure Extended Until October 17", url: "https://en.traicy.com/posts/2026101341126/" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL/RENK/HENSOLDT */
    {
      id: "rheinmetall-renk-hensoldt-kurse-analysten-10-15", cats: ["defence"], when: "Kursbewegungen Mi 14.10. · KNDS-Auftrag für Renk 14.10. · BofA-Downgrade Renk · Hensoldt-Zahlen 05.11.2026",
      headline: "Rheinmetall erholt sich nach Verdopplung seiner Kreditlinie, Renk erhält neuen KNDS-Auftrag trotz BofA-Herabstufung, Hensoldt gilt bei Analysten als Favorit",
      sec30: "Rheinmetall legte am Mittwoch um 3,14 % auf 983,30 Euro zu, nachdem das Unternehmen seine syndizierte Kreditlinie auf 1,5 Mrd. Euro verdoppelt hatte; die Aktie bleibt 2026 dennoch bis zu 40 % im Minus. Renk stieg um 1,9 bis 2,7 % auf 34,65 bis 34,80 Euro, gestützt von einem neuen KNDS-Auftrag über rund 130 Mio. Euro für Leopard-2-Getriebe, während Bank of America ihre Kaufempfehlung auf „Neutral” zurückstufte (Kursziel 42,50 Euro) und Zweifel an der Nachhaltigkeit der aktuellen Produktionsrate äußerte. Hensoldt legte um 2,02 % auf 80,78 Euro zu; ein Kursziel wurde auf 94 Euro angehoben, mehrere Analysten sehen den Titel derzeit als Favoriten im Sektor.",
      blocks: [
        { h: "Wie haben sich die Kurse am Mittwoch entwickelt?", items: [
          { tag: "fakt", text: "Rheinmetall legte um 3,14 % (+29,90 Euro) auf 983,30 Euro zu; Renk stieg je nach Quelle um 1,9 bis 2,7 % auf 34,65 bis 34,80 Euro; Hensoldt gewann 2,02 % auf 80,78 Euro.",
            ask: [{ label: "Was bedeutet ein schwankender Aktienkurs trotz hoher Branchennachfrage?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was treibt die Entwicklung bei Rheinmetall?", items: [
          { tag: "fakt", text: "Rheinmetall verdoppelte seine syndizierte Kreditlinie auf 1,5 Mrd. Euro; die Aktie bleibt dennoch bis zu 40 % unter ihrem Jahreshoch, nachdem Berenberg das Rating bereits am 09.10. von „Buy” auf „Hold” gesenkt hatte." },
          { tag: "position", text: "Das Analysten-Konsens-Kursziel liegt bei rund 1.500 bis 1.580 Euro (Spanne 1.020 bis 2.300 Euro); 7 von 9 Analysehäusern bewerten die Aktie weiterhin mit „Buy”." }
        ]},
        { h: "Was ist beim Renk-Auftrag und den Analysteneinschätzungen neu?", items: [
          { tag: "fakt", text: "KNDS bestellte für rund 130 Mio. Euro Getriebe und Steuerungen für Leopard-2-Fahrzeuge bei Renk, Lieferung 2029 bis 2032." },
          { tag: "position", text: "Ein Bank-of-America-Analyst strich dennoch die Kaufempfehlung für Renk (Rating „Neutral”, Kursziel von 62,50 auf 42,50 Euro gesenkt) mit der Begründung, die aktuelle Getriebeproduktion lasse sich nicht auf diesem Niveau halten. JPMorgan senkte das Kursziel auf 62 Euro, bestätigte aber „Overweight”; Jefferies bestätigte „Buy” bei 60 Euro." }
        ]},
        { h: "Warum gilt Hensoldt derzeit als Favorit im Sektor?", items: [
          { tag: "fakt", text: "Ein Kursziel für Hensoldt wurde auf 94 Euro angehoben; die nächsten Zahlen stehen am 05.11. an." },
          { tag: "position", text: "Mehrere Analysten bezeichneten Hensoldt zuletzt als Favoriten gegenüber Rheinmetall und Renk, mit Verweis auf geringere Zweifel an Lieferfähigkeit und Produktionskapazität – eine genaue Begründung nennen die verfügbaren Quellen nicht im Detail." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rheinmetall nach einer Finanzierungsmaßnahme deutlich zulegte, Renk trotz eines neuen Auftrags von einem Analystenhaus herabgestuft wurde und Hensoldt von mehreren Seiten als Favorit gehandelt wird, zeigt, dass unternehmensspezifische Nachrichten die Kurse in diesem Sektor derzeit stärker treiben als ein einheitlicher Branchentrend. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Kursbewegungen ergänzen die Markteinordnung in Meldung 1 und die neuen Aufträge in Meldung 11.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "wallstreet-online.de: Rheinmetall-Aktie legt zu – 14.10.2026", url: "https://www.wallstreet-online.de/nachricht/21523555-beachtet-rheinmetall-aktie-legt-14-10-2026" },
        { title: "ARIVA.DE: Renk erhält weiteren Auftrag für Leopard-2-Getriebe", url: "https://www.ariva.de/news/renk-erhaelt-weiteren-auftrag-fuer-leopard-2-getriebe-12168570" },
        { title: "ad-hoc-news.de: Bank of America senkt Ziel für RENK-Aktie auf 42,50 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/bank-of-america-senkt-ziel-fuer-renk-aktie-auf-42-50-euro/70241867" },
        { title: "finanznachrichten.de: Renk und Rheinmetall landen auf der Abschussliste, doch Hensoldt bleibt gefragt", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69739359-aktie-behauptet-sich-renk-und-rheinmetall-landen-auf-der-abschussliste-doch-hensoldt-bleibt-gefragt-049.htm" }
      ]
    },

    /* 11 DEFENCE: TKMS/P75(I)/JAPAN/NATO */
    {
      id: "tkms-p75i-japan-patriot-nato-ausgaben-10-15", cats: ["defence"], when: "Haushaltsausschuss-Billigung 08.10. · TKMS/Mazagon-Dock-Verhandlungen laufend · Onodera-Kyjiw-Besuch Anfang Okt. · NATO-Ausgaben 2026",
      headline: "TKMS treibt Verhandlungen zum indischen U-Boot-Programm voran, Japan sondiert weiter mögliche Patriot-Lieferung an die Ukraine, NATO-Partner erhöhen Verteidigungsausgaben kräftig",
      sec30: "Nach der Billigung von vier zusätzlichen MEKO-A-200-Fregatten durch den Haushaltsausschuss des Bundestags (Gesamtauftrag acht Schiffe, rund 11,6 Mrd. Euro) verhandelt TKMS weiter mit der indischen Mazagon Dock Shipbuilders über das U-Boot-Programm P75(I); eine Freigabe durch das indische Sicherheitskomitee steht noch aus. Der japanische Politiker Itsunori Onodera besuchte Anfang Oktober Kyjiw, um innerhalb der Regierung Takaichi Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine anzustoßen; eine Entscheidung steht weiterhin aus. Die europäischen NATO-Partner und Kanada erhöhten ihre Verteidigungsausgaben 2026 um rund 11 % auf 777 Mrd. Dollar; Deutschland meldete mit 124,7 Mrd. Euro einen Rekordwert.",
      blocks: [
        { h: "Wie ist der Stand beim TKMS-Fregattenauftrag?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags hatte am 08.10. die Finanzierung von vier zusätzlichen MEKO-A-200-Fregatten gebilligt; zusammen mit den bereits bestellten vier Schiffen erhält TKMS damit einen Gesamtauftrag über acht Fregatten im Wert von rund 11,6 Mrd. Euro, Ablieferung des ersten Schiffs des zweiten Loses ist für Ende 2029 geplant.",
            ask: [{ label: "Warum ist Rüstungsnachfrage für Unternehmen wie TKMS relevant?", ref: "e:nato-target" }] }
        ]},
        { h: "Wie ist der Stand beim indischen U-Boot-Programm P75(I)?", items: [
          { tag: "unbestaetigt", text: "TKMS wurde als Technologiepartner für sechs U-Boote mit außenluftunabhängigem Antrieb (Wert je nach Quelle rund 6,4 bis 8 Mrd. Euro bzw. rund 10 Mrd. Dollar) für die indische Marine ausgewählt; die Vertragsverhandlungen mit der staatlichen Mazagon Dock Shipbuilders laufen weiter, eine Freigabe durch das zuständige Sicherheitskomitee steht noch aus. Eine neue Vertragsunterzeichnung in den letzten 48 Stunden ließ sich nicht feststellen." }
        ]},
        { h: "Was ist der Stand bei Japan und möglichen Patriot-Lieferungen an die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Der japanische Politiker Itsunori Onodera besuchte Anfang Oktober Kyjiw, um innerhalb der Regierung Takaichi Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine anzustoßen; Japan muss dafür zunächst rechtliche und politische Exportbeschränkungen klären. Die drei zentralen sicherheitspolitischen Dokumente Japans sollen bis Jahresende überarbeitet werden, eine konkrete Entscheidung zu Patriot-Lieferungen steht noch aus." }
        ]},
        { h: "Wie ist der Stand bei den NATO-Verteidigungsausgaben?", items: [
          { tag: "fakt", text: "Die europäischen NATO-Partner und Kanada erhöhten ihre Verteidigungsausgaben 2026 um rund 11 % auf zusammen 777 Mrd. Dollar. Deutschland meldete der NATO für 2026 einen Rekordwert von 124,7 Mrd. Euro (2,69 % des BIP, +25,5 % gegenüber dem Vorjahr) und liegt damit weiterhin unter dem 3,5-%-Ziel." },
          { tag: "fakt", text: "Weitere laufende Bundeswehr-Beschaffungen umfassen einen Rheinmetall-Auftrag über rund 1,015 Mrd. Euro für mehr als 2.000 Militär-Lkw sowie eine längerfristig geplante Beschaffung von acht Flugabwehrfregatten der Klasse F127 im Volumen von rund 26,18 Mrd. Euro." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass TKMS parallel an einem deutschen Milliardenauftrag und einem indischen U-Boot-Programm arbeitet, während Japan erst am Anfang möglicher Gespräche über Patriot-Lieferungen steht und die NATO-Partner ihre Ausgaben insgesamt kräftig erhöhen, zeigt, dass einzelne Großaufträge und das übergeordnete Ausgabenziel unterschiedlich schnell vorankommen." }
        ]}
      ],
      reaction: "Die Entwicklungen ergänzen die Kursbewegungen bei Rheinmetall, Renk und Hensoldt in Meldung 10.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order", "e:nato-target"],
      sources: [
        { title: "TKMS Group: Milestone in Indian submarine program – TKMS enters contract negotiations with Mazagon Dock Shipbuilders (MDL) for P75(I) program", url: "https://www.tkmsgroup.com/news/article/milestone-in-indian-submarine-program-tkms-enters-contract-negotiations-with-mazagon-dock-shipbuilders-mdl-for-p75i-program" },
        { title: "bmvg.de: Vier weitere MEKO-Fregatten für die Marine", url: "https://www.bmvg.de/de/aktuelles/weitere-meko-fregatten-fuer-marine-6162258" },
        { title: "korabelov.info: Ukraine could be given even more protection from missiles – Japan launches new talks on Patriot systems", url: "https://korabelov.info/en/2026/10/621559/ukraine-could-be-given-even-more-protection-from-missiles-japan-launches-new-talks-on-patriot-systems/" },
        { title: "nippon.com: PM Takaichi Notes Importance of Visiting Ukraine", url: "https://www.nippon.com/en/news/yjj2026100800920/" },
        { title: "finanznachrichten.de: 777 Milliarden Dollar – NATO-Verbündete fahren Verteidigungsausgaben massiv hoch", url: "https://www.finanznachrichten.de/nachrichten-2026-09/69698624-777-milliarden-dollar-nato-verbuendete-fahren-verteidigungsausgaben-massiv-hoch-wo-rheinmetall-und-nodestream-ansetzen-176.htm" }
      ]
    },

    /* 12 DEALS: LUKOIL/BOEHLY, CABLE ONE, SCHNEIDER/PTC, BUMBLE, NEUE DEALS */
    {
      id: "ma-deals-lukoil-boehly-cableone-schneider-bumble-neue-deals-10-15", cats: ["deals", "pe"], when: "OFAC-Lizenz läuft 22.10. aus · Cable-One-Anhörungstermin offen · neue Deals Galderma/BlackRock/Bridgepoint Anfang–Mitte Okt.2026",
      headline: "Boehly-Konsortium positioniert sich weiter für Lukoil-Vermögenswerte, Cable One bleibt gerichtlich blockiert, neue Milliarden-Deals bei Galderma und BlackRock",
      sec30: "Nach Carlyles Rückzug positioniert sich weiterhin ein Konsortium um Todd Boehly (Eldridge), die US-Entwicklungsfinanzierungsbehörde DFC sowie katarische und mit Abu Dhabi verbundene Investoren für die rund 20 bis 22 Mrd. Dollar schweren internationalen Lukoil-Vermögenswerte; die OFAC-Verhandlungslizenz wurde bis zum 22.10. verlängert, mit dem Hinweis, sie könne widerrufen werden. Im Cable-One/Mega-Broadband-Streit ordnete ein New Yorker Richter am 13.10. einen Anhörungs- und Schriftsatzzeitplan an, ein Termin stand bei Redaktionsschluss noch nicht fest. Bei Schneider Electric/PTC wurden neue Finanzierungsdetails bekannt, die Bumble-Aktie war nach der Going-Private-Ankündigung um 56 % gesprungen. Neu bekannt wurden zudem die Übernahme von Blackstones ZO Skin Health durch Galderma (1,5 Mrd. Dollar) sowie eine Mehrheitsbeteiligung von BlackRock an CenterWell Senior Primary Care (rund 2,8 Mrd. Dollar).",
      blocks: [
        { h: "Wie ist der Stand beim Carlyle/Lukoil-Deal und dem Boehly-Konsortium?", items: [
          { tag: "fakt", text: "Carlyle hatte am 08./09.10. bestätigt, die im Januar 2026 vereinbarte Übernahme der internationalen Lukoil-Vermögenswerte (rund 20 bis 22 Mrd. Dollar, ohne Kasachstan) nicht mehr zu verfolgen, nachdem die US-Sanktionsbehörde OFAC die Vereinbarung nie genehmigt hatte.",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] },
          { tag: "unbestaetigt", text: "Ein Konsortium um Todd Boehly (Eldridge), die US-Entwicklungsfinanzierungsbehörde DFC (geplanter Anteil rund 15 % ohne eigene Kapitaleinlage), das katarische Unternehmen UCC Holding sowie die mit Abu Dhabi verbundene International Holding Co. positioniert sich für die Vermögenswerte (Raffinerien in Bulgarien und Rumänien, Ölfelder unter anderem im Irak, Tankstellen in Europa, Nahost und Amerika). Die OFAC-Verhandlungslizenz (General License 131J) wurde bis zum 22.10. verlängert, mit dem Hinweis, sie könne widerrufen werden; sie erlaubt nur Verhandlungen, nicht den endgültigen Abschluss." }
        ]},
        { h: "Was ist bei der Cable-One/Mega-Broadband-Übernahme passiert?", items: [
          { tag: "fakt", text: "Nachdem ein Bundesrichter im September die rund 480 Mio. Dollar schwere Übernahme von Mega Broadband Investments wegen einer Klage des Kreditgebers CoBank vorläufig gestoppt hatte, ordnete ein New Yorker Richter am 13.10. an, dass sich beide Parteien auf einen Schriftsatz- und Anhörungstermin einigen; ein konkretes Datum stand bei Redaktionsschluss noch nicht fest.",
            ask: [{ label: "Wie kam es zu der gerichtlichen Blockade?", ref: "e:take-private-why" }] },
          { tag: "unbestaetigt", text: "Eine geplante Refinanzierung über rund 2,45 Mrd. Dollar hängt laut Berichten vom Ausgang des gerichtlichen Verfahrens ab." }
        ]},
        { h: "Was ist beim Schneider-Electric/PTC-Deal neu?", items: [
          { tag: "fakt", text: "Schneider Electric übernimmt PTC für 205 Dollar je Aktie in bar (Eigenkapitalwert rund 22,6 Mrd. Dollar, Unternehmenswert 23,7 Mrd. Dollar inklusive Schulden); die Finanzierung soll laut Berichten über rund 5 bis 6 Mrd. Euro neue Aktien sowie 16 bis 17 Mrd. Euro neue Schulden erfolgen." },
          { tag: "unbestaetigt", text: "Angaben zu konkret finanzierenden Banken sind in den verfügbaren Quellen nicht genannt." }
        ]},
        { h: "Was ist beim Bumble/Ithaca-Deal neu?", items: [
          { tag: "fakt", text: "Die Bumble-Aktie sprang am 13.10. nach Bekanntgabe der Going-Private-Übernahme durch Ithaca Holdings (1,3 Mrd. Dollar, 6,05 Dollar je Aktie) um 56 %. Gründerin Whitney Wolfe Herd bleibt eingebunden, Ithaca-Gründer Ravi Gupta und John Hegeman sollen Co-CEOs werden." }
        ]},
        { h: "Welche weiteren neuen Deals wurden bekannt?", items: [
          { tag: "fakt", text: "Die Hautpflege-Firma Galderma übernimmt die Blackstone-Tochter ZO Skin Health für 1,5 Mrd. Dollar (Meldung vom 14.10.)." },
          { tag: "fakt", text: "BlackRock übernimmt eine Mehrheit an CenterWell Senior Primary Care für rund 2,8 Mrd. Dollar." },
          { tag: "fakt", text: "Der Finanzinvestor Bridgepoint vereinbarte Anfang Oktober die Mehrheitsübernahme des Hamburger Laborkonzerns GBA Group vom bisherigen Mehrheitseigner Ardian, in einem Deal mit einer Bewertung von mehr als 1 Mrd. Euro; Ardian bleibt mit einer Minderheitsbeteiligung investiert." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich das Boehly-Konsortium weiter für die Lukoil-Vermögenswerte positioniert und Cable One weiterhin mit einer gerichtlichen Blockade kämpft, während gleichzeitig neue milliardenschwere Übernahmen wie Schneider Electric/PTC, Bumble/Ithaca, Galderma/ZO Skin Health und BlackRock/CenterWell abgeschlossen oder vereinbart werden, zeigt anhaltend hohe, aber zugleich störanfällige Dealaktivität in diesem Herbst." }
        ]}
      ],
      reaction: "Die Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung bei den Private-Credit-Themen in Meldung 13.",
      terms: ["closing", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "23,7 Mrd. $ (Eigenkapitalwert ca. 22,6 Mrd. $, 205 $/Aktie bar); Finanzierung laut Berichten über rund 5 bis 6 Mrd. Euro neue Aktien sowie 16 bis 17 Mrd. Euro neue Schulden; konkret finanzierende Banken nicht in den Quellen genannt",
        buyer: "Schneider Electric",
        target: "PTC Inc. (Industriesoftware)",
        sector: "Industrielle Software / Automatisierung",
        type: "Übernahme (All-Cash)"
      },
      sources: [
        { title: "TradingView/Reuters: US government, Gulf billionaires back Boehly bid for Lukoil assets, FT reports", url: "https://www.tradingview.com/news/reuters.com,2026:newsml_L6N45E11E:0-us-government-gulf-billionaires-back-boehly-bid-for-lukoil-assets-ft-reports/" },
        { title: "FesenkoLaw.com: OFAC GL 131J – Extended to October 22, With a Warning That It Can Be Revoked", url: "https://fesenkolaw.com/blog/ofac-gl-131j-extended-to-october-22/" },
        { title: "Light Reading: Cable One-Mega Broadband deal stays in limbo, but for how long?", url: "https://www.lightreading.com/cable-technology/cable-one-mega-broadband-deal-stays-in-limbo-but-for-how-long-" },
        { title: "Investing.com: Schneider Electric shares tumble 7% on $22.6 bln PTC deal", url: "https://www.investing.com/news/stock-market-news/schneider-electric-close-to-20-bln-deal-of-us-software-maker-ptc--report-4930953" },
        { title: "24/7 Wall St.: Bumble Soars 56% as Ithaca Holdings Agrees to Take It Private at $6.05 a Share", url: "https://247wallst.com/investing/2026/10/13/bumble-soars-56-as-ithaca-holdings-agrees-to-take-it-private-at-6-05-a-share-match-group-advances-2/" },
        { title: "Private Equity Wire: Bridgepoint agrees majority acquisition of GBA Group in deal valued at more than €1bn", url: "https://www.privateequitywire.co.uk/bridgepoint-agrees-majority-acquisition-of-gba-group-in-deal-valued-at-more-than-e1bn/" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-blue-owl-loparex-fed-sec-10-15", cats: ["credit", "pe"], when: "Blue-Owl-Kurs 14.10. · Loparex-Abschreibung Anfang Okt. · Fed-Kommentar Cook laufend · SEC-Datenangaben 2026",
      headline: "Blue-Owl-Aktie fällt auf neues Tief, Kredit an Verpackungskonzern Loparex fast vollständig abgeschrieben, Fed sieht laut Gouverneurin Cook noch kein Systemrisiko",
      sec30: "Die Blue-Owl-Aktie fiel am 14.10. um 5,4 % auf 8,79 Dollar – ein neues Tief in ihrer 52-Wochen-Spanne von 7,95 bis 17,33 Dollar, Marktkapitalisierung rund 14,48 Mrd. Dollar. Die Rücknahmeanträge blieben hoch: Beim Technologiefonds stiegen sie auf 39 % (von 38,1 % im Vorquartal), beim 36-Mrd.-Dollar-Flaggschifffonds sanken sie dagegen leicht auf 16,8 % (von 18,8 %); insgesamt wollten Investoren zuletzt 4,2 Mrd. Dollar abziehen (Vorquartal 4,7 Mrd.). Beim nachrangigen Kredit an den Verpackungskonzern Loparex schrieb Blue Owl vier Darlehen von zusammen 122,43 Mio. auf nur noch 8,34 Mio. Dollar ab, nachdem eine geplante Kapitalzufuhr scheiterte und eine Zinszahlung ausblieb; Moody's warnt vor einer möglichen Chapter-11-Insolvenz. Fed-Gouverneurin Lisa Cook sieht aktuell kein zusätzliches Systemrisiko durch Private Credit, die Fed befragt aber weiter Großbanken zur Sicherheitenqualität.",
      blocks: [
        { h: "Wie entwickelt sich die Blue-Owl-Aktie?", items: [
          { tag: "fakt", text: "Die Blue-Owl-Aktie (OWL) fiel am 14.10. um 5,4 % auf 8,79 Dollar, innerhalb einer 52-Wochen-Spanne von 7,95 bis 17,33 Dollar; die Marktkapitalisierung liegt bei rund 14,48 Mrd. Dollar.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] }
        ]},
        { h: "Wie stark sind die Rücknahmen in den BDC-Fonds?", items: [
          { tag: "fakt", text: "Beim Technologiefonds Blue Owl Technology Income stiegen die zur Rücknahme angemeldeten Anteile auf 39 % (Vorquartal 38,1 %); beim Flaggschifffonds Blue Owl Credit Income (35,1 Mrd. Dollar) sanken die Anfragen dagegen leicht auf 16,8 % (von 18,8 %). Insgesamt wollten Investoren zuletzt rund 4,2 Mrd. Dollar abziehen, gegenüber 4,7 Mrd. Dollar im Vorquartal.",
            ask: [{ label: "Was ist eine Rücknahme-Obergrenze?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Was ist beim Loparex-Kredit passiert?", items: [
          { tag: "unbestaetigt", text: "Blue Owl schrieb vier Darlehen an den Verpackungskonzern Loparex von zusammen 122,43 Mio. Dollar auf nur noch 8,34 Mio. Dollar ab (rund −93 %), nachdem eine geplante Kapitalzufuhr im Rahmen einer Übernahme scheiterte und Loparex eine Zinszahlung verpasste; Moody's warnt vor einer möglichen Insolvenz nach Chapter 11.",
            ask: [{ label: "Was bedeutet ein notleidender Kredit?", ref: "e:nonaccrual-default" }] }
        ]},
        { h: "Was unternehmen Fed und SEC?", items: [
          { tag: "position", text: "Fed-Gouverneurin Lisa Cook sagte, sie sehe aktuell kein zusätzliches Systemrisiko durch Private Credit; die Federal Reserve Bank of New York befragt dennoch weiter Großbanken wie JPMorgan, Wells Fargo und Barclays zur Qualität von Sicherheiten bei Private-Credit-Krediten." },
          { tag: "fakt", text: "Laut SEC-Daten sind die Private-Credit-Bestände registrierter Fonds seit 2020 um fast 60 % auf rund 270 Mrd. Dollar gestiegen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Blue-Owl-Aktie ein neues Tief erreicht und ein einzelner Kredit fast vollständig abgeschrieben werden musste, während Fed-Gouverneurin Cook gleichzeitig kein zusätzliches Systemrisiko sieht, zeigt, dass die Debatte um die Verlässlichkeit von Private-Credit-Bewertungen anhält, ohne dass sich die Aufsichtsbehörden bislang alarmiert zeigen." }
        ]}
      ],
      reaction: "Die Bewertungsdebatte ergänzt die Fragen zu Dealaktivität und Fremdfinanzierung bei den M&A-Themen in Meldung 12 sowie die Zinslage in Meldung 2.",
      terms: ["nav", "default-rate", "bdc", "pik"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:deal-risks", "chain:rates-to-credit", "e:redemption-limits"],
      widget: "sofr",
      sources: [
        { title: "stockanalysis.com: Blue Owl Capital (OWL) – Aktienkurs und Kennzahlen", url: "https://stockanalysis.com/stocks/owl/" },
        { title: "Bloomberg: Blue Owl Caps Redemptions at Two BDCs After Surge in Withdrawal Requests", url: "https://www.bloomberg.com/news/articles/2026-10-02/blue-owl-again-caps-two-bdcs-after-39-17-withdrawal-requests" },
        { title: "Private Equity Wire: Blue Owl slashes Loparex loan valuation as bankruptcy risk mounts", url: "https://www.privateequitywire.co.uk/blue-owl-slashes-loparex-loan-valuation-as-bankruptcy-risk-mounts/" },
        { title: "Benzinga: Fed Visits Banks In Private-Credit Risk Review", url: "https://www.benzinga.com/markets/private-markets/26/10/62206396/fed-visits-jpmorgan-wells-fargo-barclays-in-private-credit-risk-review" },
        { title: "American Banker: Fed's Cook downplays systemic risks posed by private credit", url: "https://www.americanbanker.com/news/feds-cook-downplays-systemic-risks-posed-by-private-credit" }
      ]
    },

    /* 14 TECHNOLOGIE: CHIP-AUSVERKAUF/OPENAI/KI-BLASE/NVIDIA/SPACEX */
    {
      id: "ki-blase-chip-ausverkauf-openai-nvidia-spacex-10-15", cats: ["tech"], when: "Chip-Ausverkauf Asien Do 15.10. · OpenAI-Umsatzkorrektur 08.10. · Dalio-Warnung 07.10./Huang-Kommentar 14.10. · Nvidia/Reflection/SpaceX laufend",
      headline: "Speicherchip-Werte in Asien brechen deutlich ein, Nvidia-Chef Huang kündigt möglichen Lieferstopp für 'unsichere KI' an, Debatte um KI-Blase hält an",
      sec30: "Am Donnerstag brach der Kospi zeitweise um 7 bis 8 % ein (kurzzeitige Handelsaussetzung), der Nikkei um rund 5 %; Samsung und SK Hynix fielen zweistellig. Als Treiber nennen Berichte schwächer als erwartete vorläufige Samsung-Zahlen, eine neue CXMT-Ankündigung zu DDR5-Servermodulen und anhaltende Zinssorgen. OpenAI verhandelt weiter über eine Finanzierungsrunde von mindestens 30 Mrd. Dollar bei rund 1,4 Billionen Dollar Bewertung und verschiebt einen möglichen Börsengang laut Sam Altman wegen KI-Sicherheitsbedenken auf 2027. Investor Ray Dalio bekräftigte seine Warnung vor einer KI-Blase; Nvidia-Chef Jensen Huang erklärte laut Bloomberg, er könne die Chip-Lieferung an Firmen stoppen, die 'unsichere KI' entwickeln, wies Blasen-Sorgen aber insgesamt zurück. Nvidia führt zudem Gespräche über eine engere Verbindung mit dem Start-up Reflection AI, SpaceX sucht weiterhin rund 40 Mrd. Dollar Fremdfinanzierung für den Kauf von Nvidia-Chips.",
      blocks: [
        { h: "Was löste den neuen Ausverkauf bei asiatischen Speicherchip-Werten aus?", items: [
          { tag: "fakt", text: "Der Kospi fiel zeitweise um 7 bis 8 % auf rund 5.527 Punkte, mit kurzzeitiger Handelsaussetzung (Circuit Breaker); der Nikkei 225 fiel um rund 5 % auf rund 64.335 Punkte. Samsung Electronics fiel um rund 7 bis 9,7 %, SK Hynix um rund 10 bis 11,1 %, Kioxia um rund 11,2 %, Tokyo Electron um rund 7,5 %.",
            ask: [{ label: "Wie hängt das mit der Marktbewegung vom Mittwoch zusammen?", ref: "s:1" }] },
          { tag: "unbestaetigt", text: "Als Treiber nennen Berichte vorläufige Samsung-Quartalszahlen mit einem operativen Gewinn unter Markterwartung, eine neue Ankündigung des chinesischen Herstellers CXMT zu DDR5-Servermodulen mit neuer Zellstruktur sowie anhaltende Zinssorgen nach den US-Inflationsdaten. Broadcom- und Intel-Chefs sollen laut Berichten zudem gewarnt haben, die Finanzierung werde zum „großen Hindernis” für den KI-Boom." }
        ]},
        { h: "Wie ist der Stand bei OpenAI?", items: [
          { tag: "fakt", text: "OpenAI verhandelt weiter über eine Finanzierungsrunde von mindestens 30 Mrd. Dollar bei rund 1,4 Billionen Dollar Bewertung, mit Abu Dhabis MGX und BlackRock als möglichen Ankerinvestoren – nach einer 122-Mrd.-Dollar-Runde im März bei 852 Mrd. Dollar Bewertung." },
          { tag: "fakt", text: "Sam Altman verschob einen möglichen Börsengang laut eigenen Angaben wegen „KI-Sicherheitsbedenken” auf 2027. OpenAI selbst hält an einem Jahresend-Umsatzziel von 70 Mrd. Dollar fest und verweist auf ein Wachstum der annualisierten Umsatzrate von 77 % im dritten Quartal – nachdem ein Financial-Times-Bericht vom 08.10. eine tatsächliche annualisierte Rate von nur rund 50 Mrd. Dollar genannt hatte, rund 20 Mrd. Dollar unter dem zuvor kolportierten Wert." }
        ]},
        { h: "Welche neuen Aussagen gibt es zur KI-Blasen-Debatte?", items: [
          { tag: "position", text: "Bridgewater-Gründer Ray Dalio bekräftigte seine Warnung, KI zeige „alle Merkmale einer klassischen Blase”, die sich dem Platzen nähere, und nannte steigende Schulden und steigende Zinsen als mögliche Auslöser.",
            ask: [{ label: "Warum warnen Analysten vor einer KI-Blase?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Nvidia-Chef Jensen Huang erklärte laut Bloomberg am 14.10., er könne die Chip-Lieferung an Firmen stoppen, die „unsichere KI” entwickeln, wies aber gleichzeitig Kontrollverlust-Sorgen als übertrieben zurück und bezeichnete sie als „growing pains” einer schnell wachsenden Branche; die Nachfrage nach KI-Infrastruktur werde das Angebot noch Jahre übersteigen." }
        ]},
        { h: "Was ist bei Nvidia/Reflection AI und der SpaceX-Finanzierung neu?", items: [
          { tag: "unbestaetigt", text: "Nvidia führt weiter Gespräche über eine Übernahme, einen Acqui-Hire oder eine größere Investition in das KI-Start-up Reflection AI (zuletzt mit 25 Mrd. Dollar bewertet); mehrere Dealstrukturen werden geprüft, unter anderem ein Acqui-Hire zur Vermeidung einer langwierigen Kartellprüfung. Eine Einigung liegt bislang nicht vor.",
            ask: [{ label: "Was ist damit gemeint, dass Finanzierung „zirkulär” wird?", ref: "e:circular-financing" }] },
          { tag: "fakt", text: "SpaceX sucht weiterhin rund 40 Mrd. Dollar Fremdfinanzierung (rund 10 Mrd. Dollar Bankkredite, 30 Mrd. Dollar Anleihen), angeführt von Apollo Global Management mit Pimco als möglichem weiteren Geldgeber, um Nvidia-KI-Chips zu kaufen; ein Abschluss wird frühestens 2027 erwartet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass ein erneuter, schärferer Ausverkauf bei asiatischen Chipwerten mit anhaltenden Debatten über OpenAIs Umsatzzahlen, Nvidias eigene Warnungen vor „unsicherer KI” und weiteren milliardenschweren Finanzierungsvorhaben zusammenfällt, zeigt, wie angespannt die Lage rund um die KI-Investitionen derzeit eingeschätzt wird. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Chip-Thematik knüpft an die Markteinordnung in Meldung 1 an.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Invezz: Samsung, SK Hynix stocks crash 9%-11% as risk shifts from chips to customers", url: "https://invezz.com/news/2026/10/15/samsung-sk-hynix-stocks-crash-9-11-as-risk-shifts-from-chips-to-customers/" },
        { title: "CNBC: SK Hynix, Samsung, SoftBank stocks – Asia tech rout, AI funding worries", url: "https://www.cnbc.com/2026/10/15/sk-hynix-samsung-softbank-stocks-asia-tech-rout-ai-funding-worries.html" },
        { title: "Bloomberg: Chip Stocks Deepen Losses as Concerns Mount Over Rates, AI Debt", url: "https://www.bloomberg.com/news/articles/2026-10-15/chip-stocks-deepen-losses-as-concerns-mount-over-rates-ai-debt" },
        { title: "Bloomberg: Nvidia CEO Says He Would Halt Chip Supply to Customers Building Unsafe AI", url: "https://www.bloomberg.com/news/articles/2026-10-14/nvidia-ceo-says-he-would-cut-off-customers-who-build-unsafe-ai" },
        { title: "Benzinga: SpaceX Seeks $40 Billion, Led by Apollo, to Buy Nvidia Chips", url: "https://www.benzinga.com/markets/tech/26/10/62208031/spacex-apollo-40-billion-nvidia-chips-financing" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gasspeicher-kwkg-brent-opec-10-15", cats: ["energy"], when: "Gasspeicherstand 13./14.10. · KWKG nicht beschlossen 14.10. · OPEC+-Entscheidung 04.10. · Brent-Preis Mi 14.10.2026",
      headline: "Deutsche Gasspeicher bleiben bei rund 60 Prozent, Kraft-Wärme-Kopplungsgesetz verschiebt sich weiter, OPEC+ hält an unveränderter Fördermenge fest",
      sec30: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur zuletzt bei 60,3 % (149,1 TWh); ein neuerer Wert für den 15.10. ließ sich nicht finden, das gesetzliche Ziel von 80 % zum 01.11. wird damit deutlich verfehlt. Das Kraft-Wärme-Kopplungsgesetz wurde am 14.10. erneut nicht im Kabinett beschlossen, da das Wirtschaftsministerium den Gesetzentwurf noch vorlegen muss; bislang liegen nur Eckpunkte vor. Zur von Kanzler Merz angekündigten Stromsteuer-Senkung liegt weiterhin kein Umsetzungsdatum vor. Die OPEC+ hatte bereits am 04.10. beschlossen, die Fördermenge für November gegenüber Oktober unverändert bei rund 31,1 Mio. Barrel pro Tag zu belassen; der Brent-Preis bewegte sich am Mittwoch je nach Quelle zwischen rund 105,4 und 106,3 Dollar.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur zuletzt (13./14.10.) bei 60,3 % (149,1 TWh); ein neuerer Wert für den 15.10. ließ sich nicht finden. Das gesetzliche Ziel liegt bei 80 % zum 01.11.; die Bundesnetzagentur bezeichnet die Versorgung dennoch als stabil.",
            ask: [{ label: "Was ist TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Was ist mit dem Kraft-Wärme-Kopplungsgesetz (KWKG)?", items: [
          { tag: "fakt", text: "Das Bundeswirtschaftsministerium hatte das KWKG für die Kabinettssitzung am 14.10. angemeldet; es wurde jedoch erneut nicht beschlossen, da bislang nur Eckpunkte (veröffentlicht Ende September) vorliegen und der Gesetzentwurf selbst noch fehlt. Das aktuelle Gesetz läuft Ende 2026 aus; ein Inkrafttreten der Novelle wird spätestens im ersten Quartal 2027 angestrebt." },
          { tag: "unbestaetigt", text: "Die Eckpunkte sehen unter anderem eine Verlängerung der Förderung bis 2035, eine Verdopplung des Fördervolumens von 750 Mio. auf 1,5 Mrd. Euro pro Jahr sowie eine Anhebung der maximalen Förderung für Wärmenetzprojekte von 50 auf 100 Mio. Euro vor." },
          { tag: "position", text: "Die Branchenverbände BDEW und VKU fordern weiterhin eine Verlängerung der Förderung bis mindestens 2038 statt nur bis 2035." }
        ]},
        { h: "Was ist der Stand bei der Stromsteuer-Senkung?", items: [
          { tag: "position", text: "Kanzler Merz hatte angekündigt, die Stromsteuer auch für Privathaushalte auf das EU-Mindestniveau zu senken, um nach seinen Worten eine „Glaubwürdigkeitslücke” zu schließen.",
            ask: [{ label: "Mehr zur Ankündigung und zu den politischen Reaktionen", ref: "s:7" }] },
          { tag: "unbestaetigt", text: "Ein festes Umsetzungsdatum und eine gesicherte Gegenfinanzierung liegen weiterhin nicht vor; Merz verwies auf mögliche Mehreinnahmen von rund 5 Mrd. Euro durch optimistischere Wachstumsprognosen." }
        ]},
        { h: "Wie ist der Stand beim Ölpreis und bei OPEC+?", items: [
          { tag: "fakt", text: "Die OPEC+ hatte bereits am 04.10. beschlossen, die Fördermenge für November gegenüber Oktober unverändert bei rund 31,1 Mio. Barrel pro Tag zu belassen; das nächste Treffen zur Dezember-Entscheidung ist für den 01.11. angesetzt.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] },
          { tag: "unbestaetigt", text: "Der Brent-Preis bewegte sich am Mittwoch je nach Quelle zwischen rund 105,4 und 106,3 Dollar; als Treiber nennen Berichte vor allem die anhaltenden Spannungen am Golf (Meldung 9) und nicht die Förderpolitik." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Gasspeicher weiterhin deutlich unter dem gesetzlichen Zwischenziel liegen und ein zentrales Energiegesetz sich erneut verschiebt, während gleichzeitig eine neue Stromsteuer-Entlastung ohne festes Datum und Finanzierungsnachweis angekündigt bleibt, zeigt, wie eng Versorgungssicherheit, Gesetzgebungsverfahren und die Energiepreis-Debatte derzeit miteinander verknüpft sind." }
        ]}
      ],
      reaction: "Die angespannte Gasspeicherlage und der von geopolitischen Spannungen geprägte Ölpreis ergänzen die Lage am Golf in Meldung 9; die Stromsteuer-Ankündigung hängt mit den innenpolitischen Themen in Meldung 7 zusammen.",
      terms: ["ttf", "lng", "opec-plus"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation"],
      sources: [
        { title: "Bundesnetzagentur: Aktuelle Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "zfk.de: Energiegesetze-Ticker Deutschland", url: "https://www.zfk.de/politik/deutschland/energiegesetze-ticker-deutschland-reiche" },
        { title: "Solarserver: BMWE legt Eckpunkte für KWKG-Novelle vor", url: "https://www.solarserver.de/2026/09/23/bmwe-legt-eckpunkte-fuer-kwkg-novelle-vor/" },
        { title: "The Moscow Times: OPEC+ Agrees to Keep November Oil Output Targets Steady", url: "https://www.themoscowtimes.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady-a93865" },
        { title: "Trading Economics: Brent Crude Oil", url: "https://tradingeconomics.com/commodity/brent-crude-oil" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Mittwoch schlossen DAX (+0,25 %) und Euro Stoxx 50 (+0,38 bis 0,46 %) im Plus; S&P 500 (−1,11 %), Nasdaq (−1,3 bis −1,9 %) und Dow (−0,09 %) gaben nach den US-Inflationsdaten nach." },
    "why-markets-move": { tag: "unbestaetigt", story: 1, text: "Am Donnerstagmorgen brach der Kospi zeitweise um 7 bis 8 % ein, der Nikkei um rund 5 %; als Treiber werden schwache vorläufige Samsung-Zahlen, eine neue CXMT-Chipankündigung und Zinssorgen genannt." },
    "yield-meaning": { tag: "unbestaetigt", story: 2, text: "Die US-10-Jahres-Rendite sprang nach den Inflationsdaten auf rund 5,28 bis 5,30 %, zeitweise bis 5,365 %; die Bund-Rendite blieb mit rund 3,47 bis 3,50 % nahezu unverändert (Quellenlage uneinheitlich)." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold gab nach den gestiegenen US-Renditen auf rund 4.080 bis 4.168 Dollar je Feinunze nach (−1,5 bis −1,6 %)." },
    "eurusd-meaning": { tag: "unbestaetigt", story: 3, text: "Der EZB-Referenzkurs stieg leicht von 1,1188 auf 1,1195 Dollar; ein anderer Überblick nennt dagegen eine Abschwächung des Euro im Tagesverlauf um rund 0,7 % nach den US-Daten." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin blieb volatil und notierte zuletzt wieder bei rund 83.300 Dollar, nach einem zwischenzeitlichen Rückgang unter 81.000 Dollar." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die US-Inflationsrate für September stieg auf 3,7 % (Kernrate 2,6 %) – höher als erwartet und über dem August-Wert." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Das Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte, die 1-Jahres-Inflationserwartung stieg auf 4,7 %." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Nach den heißeren US-Inflationsdaten schwankte die eingepreiste Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung am 27./28.10. zuletzt zwischen rund 22 und 35 %, während die EZB ihren Einlagensatz bei 2,50 % hält." },
    "fed-hike": { tag: "unbestaetigt", story: 4, text: "Die eingepreiste Wahrscheinlichkeit für ein Halten des Leitzinses am 27./28.10. liegt laut Berichten bei rund 66 %, für eine Erhöhung bei rund 33 bis 35 %." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %; laut einer Reuters-Umfrage erwarten 70 von 73 Ökonomen am 29.10. eine Pause, 64 von 73 für Dezember eine Erhöhung." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Der Brent-Preis bewegte sich am Mittwoch je nach Quelle zwischen rund 105,4 und 106,3 Dollar; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Alexander Schweitzer (SPD) wurde am 14.10. als neuer Bundesarbeitsminister vereidigt; ein Kabinettsbeschluss zur Rentenreform wird weiterhin bis Jahresende angestrebt." },
    "rente-basics": { tag: "fakt", story: 6, text: "Der Streit zwischen SPD-Fraktionschef Miersch und Unionsfraktionsvize Winkel über das weitere Verfahren vor einem Kabinettsbeschluss hält laut verfügbaren Quellen weiter an." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "SPD, Grüne und Linke verständigten sich am Mittwochabend, 14.10., auf eine Fortsetzung der Berliner Koalitionssondierungen, nachdem diese wegen der Personalie Vanessa Emde unterbrochen worden waren." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Neue Umfragen zeigen weiterhin deutlich unterschiedliche Werte für die AfD (INSA 30 %, Forsa 26 %); nur rund 10 % der Befragten sind laut ARD-DeutschlandTrend mit der Koalitionsarbeit zufrieden." },
    "hormuz": { tag: "fakt", story: 9, text: "UKMTO zählte zwischen dem 6. und 14.10. 15 weitere Angriffsmeldungen rund um die Straße von Hormus, davon 11 allein in den letzten vier Tagen vor dem 14.10." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "US-Außenminister Rubio widersprach iranischen Behauptungen einer vollständigen Kontrolle über die Straße von Hormus und erklärte, der Ölfluss liege fast auf Vorkriegsniveau." },
    "defence-order": { tag: "unbestaetigt", story: 11, text: "Japans Politiker Itsunori Onodera besuchte Anfang Oktober Kyjiw, um Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine anzustoßen; eine Entscheidung steht weiterhin aus." },
    "defence-stocks": { tag: "fakt", story: 10, text: "Rheinmetall erholte sich am Mittwoch um 3,14 % nach einer Verdopplung seiner Kreditlinie, Renk erhielt einen neuen KNDS-Auftrag trotz einer BofA-Herabstufung, Hensoldt gilt bei mehreren Analysten als Favorit im Sektor." },
    "nato-target": { tag: "fakt", story: 11, text: "Die europäischen NATO-Partner und Kanada erhöhten ihre Verteidigungsausgaben 2026 um rund 11 % auf 777 Mrd. Dollar; Deutschland meldete einen Rekordwert von 124,7 Mrd. Euro." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Das Konsortium um Todd Boehly positioniert sich weiter für die internationalen Lukoil-Vermögenswerte; die OFAC-Verhandlungslizenz wurde bis zum 22.10. verlängert, mit dem Hinweis, sie könne widerrufen werden." },
    "take-private-why": { tag: "fakt", story: 12, text: "Ein New Yorker Richter ordnete am 13.10. an, dass sich beide Parteien im Cable-One/Mega-Broadband-Streit auf einen Anhörungstermin verständigen; ein Termin stand noch nicht fest." },
    "deal-risks": { tag: "fakt", story: 13, text: "Die Federal Reserve setzt ihre Bankbesuche zur Prüfung von Private-Credit-Sicherheiten fort; Fed-Gouverneurin Lisa Cook sieht aktuell kein zusätzliches Systemrisiko." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Die Blue-Owl-Aktie fiel am 14.10. auf 8,79 Dollar (−5,4 %) und damit auf ein neues Tief; die Rücknahmeanträge bei großen BDC-Fonds blieben weiterhin erhöht." },
    "pc-rates": { tag: "unbestaetigt", story: 13, text: "Blue Owl schrieb seinen Kredit an den Verpackungskonzern Loparex um rund 93 % auf nur noch 8,34 Mio. Dollar ab, nachdem eine geplante Kapitalzufuhr scheiterte und eine Zinszahlung ausblieb." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Blue Owl hält die Rücknahme-Obergrenze von 5 % bei zwei BDC-Fonds aufrecht; die Rücknahmeanträge beim Technologiefonds stiegen auf 39 %, beim Flaggschifffonds sanken sie leicht auf 16,8 %." },
    "ai-capex": { tag: "position", story: 14, text: "Nvidia-Chef Jensen Huang erklärte laut Bloomberg, er könne die Chip-Lieferung an Firmen stoppen, die „unsichere KI” entwickeln, wies Blasen-Sorgen insgesamt aber zurück; Ray Dalio bekräftigte seine Warnung vor einer „klassischen Blase”." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Nvidia prüft laut Berichten weiterhin verschiedene Dealstrukturen für eine engere Verbindung mit dem KI-Unternehmen Reflection AI, darunter einen Acqui-Hire zur Vermeidung einer langwierigen Kartellprüfung." },
    "circular-financing": { tag: "fakt", story: 14, text: "SpaceX sucht weiterhin rund 40 Mrd. Dollar Fremdfinanzierung, angeführt von Apollo Global Management, um Nvidia-KI-Chips zu kaufen; ein Abschluss wird frühestens 2027 erwartet." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen zuletzt bei 60,3 % – ein neuerer Wert für den 15.10. ließ sich nicht finden; das Kraft-Wärme-Kopplungsgesetz wurde am 14.10. erneut nicht beschlossen." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Die OPEC+ hatte bereits am 04.10. beschlossen, die Fördermenge für November gegenüber Oktober unverändert bei rund 31,1 Mio. Barrel pro Tag zu belassen." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie haben sich DAX und US-Leitindizes am Mittwoch, 14.10.2026, entwickelt?",
      options: [
        "Alle Indizes schlossen deutlich im Plus",
        "Alle Indizes schlossen deutlich im Minus",
        "Der DAX legte zu, während S&P 500, Nasdaq und Dow nach den US-Inflationsdaten nachgaben",
        "Die Börsen blieben wegen eines Feiertags geschlossen"
      ],
      answer: 2,
      explain: "Der DAX stieg um 0,25 % auf 25.322,48 Punkte, während der S&P 500 nach den US-Inflationsdaten um 1,11 %, die Nasdaq um 1,3 bis 1,9 % und der Dow um 0,09 % nachgaben."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 4,
      q: "Wie hoch fiel die US-Inflationsrate (CPI, Kopfrate) für September 2026 laut dem am 14.10. veröffentlichten Bericht aus?",
      options: [
        "3,4 %",
        "3,6 %",
        "4,2 %",
        "3,7 %"
      ],
      answer: 3,
      explain: "Die Kopfrate stieg auf 3,7 % im Jahresvergleich, über dem Konsens von 3,6 % und über dem August-Wert von rund 3,4 %; die Kernrate lag bei 2,6 %."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, Russland setzt seine Angriffe auf ukrainische Energieanlagen trotz des von Trump behaupteten Waffenstillstands fort. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Zweifel an der Belastbarkeit der behaupteten Vereinbarung nehmen tendenziell zu, ohne dass daraus ein fester Automatismus für weitere Schritte folgt",
        "Ein automatisches Ende der EU-Sanktionen gegen Russland",
        "Eine sofortige Aufnahme der Ukraine in die NATO",
        "Ein automatischer Rückgang des Brent-Ölpreises"
      ],
      answer: 0,
      explain: "Fortgesetzte Angriffe trotz der behaupteten Vereinbarung nähren laut Berichten Zweifel an deren Belastbarkeit; ein fester Automatismus für EU-Sanktionen, NATO-Beitritt oder den Ölpreis besteht dadurch nicht."
    },
    {
      topic: "Rüstung", type: "Fakt", story: 10,
      q: "Was geschah am Mittwoch, 14.10.2026, mit der Rheinmetall-Aktie?",
      options: [
        "Sie fiel um rund 5 %",
        "Sie legte um 3,14 % zu, nachdem das Unternehmen seine Kreditlinie verdoppelt hatte",
        "Sie blieb unverändert",
        "Der Handel wurde ausgesetzt"
      ],
      answer: 1,
      explain: "Rheinmetall stieg auf 983,30 Euro (+3,14 %), nachdem die syndizierte Kreditlinie auf 1,5 Mrd. Euro verdoppelt wurde; die Aktie bleibt 2026 dennoch bis zu 40 % unter ihrem Jahreshoch."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Angenommen, weitere Kredite in Private-Credit-Portfolios müssten wie beim Loparex-Darlehen stark abgeschrieben werden. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Ein automatischer Zinsschritt der Fed",
        "Eine sofortige Insolvenz aller BDC-Fonds",
        "Ein automatischer Anstieg des Goldpreises",
        "Zunehmende Zweifel an der Bewertungspraxis von Private-Credit-Fonds und möglicher weiterer Druck auf Rücknahmen, ohne dass ein fester Automatismus besteht"
      ],
      answer: 3,
      explain: "Weitere starke Abschreibungen würden laut Marktbeobachtern tendenziell Zweifel an der Bewertungspraxis nähren und den Druck auf Rücknahmen erhöhen; ein fester Automatismus für Fed-Entscheidungen, Fondsinsolvenzen oder den Goldpreis besteht dadurch nicht."
    }
  ]
};
