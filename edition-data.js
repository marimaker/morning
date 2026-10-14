// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-14",
  dateLabel: "Mittwoch, 14. Oktober 2026",
  updatedLabel: "Recherchestand 14.10.2026",
  marketNote: "Diese Ausgabe entsteht am Mittwochmorgen, 14.10.2026, vor Handelsbeginn in Europa. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq gilt deshalb der Schlussstand von Dienstag, 13.10. Am Mittwochmorgen erholten sich in Asien die am Vortag stark gefallenen Speicherchip- und Technologiewerte teilweise wieder (Nikkei, Kospi, Samsung, SK Hynix im Plus). Bei Brent-Öl weichen die gefundenen Quellen für Dienstag/Mittwoch stark voneinander ab (von rund 104,7 bis 107,3 Dollar) – ein einzelner belastbarer Wert lässt sich nicht nennen, die Kennzahl ist deshalb als uneinheitlich gekennzeichnet. Auch bei Gold schwanken die Angaben je nach Tageszeitpunkt. Die US-Inflationsdaten (CPI) für September werden erst heute, 14.10., um 14:30 Uhr MEZ veröffentlicht und waren zum Redaktionsschluss dieser Ausgabe noch nicht verfügbar; genannte Werte dazu sind Prognosen, keine Ist-Daten.",

  top: [
    { text: "Die US-Börsen schlossen am Dienstag gemischt (Dow +? nein: −0,35 % auf 51.850,55? – korrigiert: Dow −0,35 % auf 51.670,10 Punkte, S&P 500 −0,02 % auf 7.805,45 Punkte, Nasdaq −0,15 % auf 27.204,38 Punkte), der DAX gab leicht um 0,07 % auf 25.259,90 Punkte nach. Grund war unter anderem eine zweite Verkaufswelle bei Speicherchip-Werten nach einem neuen DRAM-Design des chinesischen Herstellers ChangXin Memory (CXMT); am Mittwochmorgen erholten sich die zuvor stark gefallenen asiatischen Chipwerte (Nikkei +0,6 %, Kospi +1,7 bis 2,0 %, Samsung und SK Hynix im Plus) teilweise wieder.", ref: "s:1" },
    { text: "Präsident Trump behauptete am 11.10., Russland und die Ukraine hätten einem „Energie-Waffenstillstand” zugestimmt; Außenminister Lawrow wies dies als „Pause”, die der Ukraine nur Zeit zur Neuaufstellung verschaffe, zurück. Am Abend des 13.10. griff Russland Kyjiw mit ballistischen Raketen an und traf unter anderem ein Heizkraftwerk; Präsident Selenskyj meldete sechs angegriffene Energieanlagen allein an diesem Tag. Die EU verabschiedete am 12.10. ihr bislang größtes Sanktionspaket gegen Russland mit rund 1.600 Einträgen.", ref: "s:8" },
    { text: "Die Tankerangriffe in der Straße von Hormus erreichten mit 18 UKMTO-Warnmeldungen im Oktober einen neuen Höchststand; allein am 11.10. wurden sechs Schiffe getroffen. Ein Houthi-Angriff auf den Flughafen Riad forderte zwischen dem 8. und 10.10. mindestens zwölf Tote und über 300 Verletzte; der Flughafen bleibt mindestens bis zum 17.10. geschlossen.", ref: "s:9" },
    { text: "Nach einer CDU-Klausur kündigte Kanzler Merz an, die Stromsteuer für alle Verbraucher auf das EU-Mindestniveau zu senken; Finanzminister Klingbeil äußerte Zweifel an der dauerhaften Finanzierbarkeit. In Berlin unterbrachen SPD und Grüne am Dienstagabend die Koalitionssondierungen mit der Linken, nachdem deren Fraktion die wegen israelkritischer Aussagen umstrittene Politikerin Vanessa Emde aufgenommen hatte. Arbeitsministerin Bärbel Bas trat zudem von ihren Ämtern zurück.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.259,90", change: "−0,07 % (rund −18 Pkt., Di-Schluss)", dir: "down", asof: "Schluss Di 13.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Montag, 12.10., hatte der DAX laut der vorherigen Ausgabe bei 25.277,68 Punkten geschlossen; am Dienstag gab er leicht auf 25.259,90 Punkte nach." }
      ],
      moved: {
        intro: "Als Hintergrund für Dienstag nennen Berichte:",
        items: [
          "Der Chipsektor stand unter Druck: Infineon fiel rund 2,1 %, Elmos Semiconductor rund 6,3 %, nachdem Berichte über ein neues DRAM-Design des chinesischen Herstellers ChangXin Memory (CXMT) die Stimmung belasteten (Meldung 14).",
          "Gemischt ausgefallene Quartalszahlen US-amerikanischer Großbanken (JPMorgan verfehlte die Erwartungen, Wells Fargo, Citigroup und Goldman Sachs übertrafen sie) wirkten zusätzlich belastend.",
          "Fallende Ölpreise und leicht sinkende Anleiherenditen konnten die negative Stimmung laut Berichten nicht drehen."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Ausverkauf und zur teilweisen Erholung bei asiatischen Chipwerten in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Erholung erlahmt", url: "https://ariva.de/news/roundup-aktien-frankfurt-schluss-erholung-erlahmt-12167943" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.166,01", change: "−0,55 % bis −0,57 % je Quelle (Di-Schluss)", dir: "down", asof: "Schluss Di 13.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "onvista.de nennt für Dienstag je nach Abrufzeitpunkt einen Schlussstand von 6.166,01 bis 6.167,01 Punkten; die Veränderung wird mit −0,55 % bis −0,57 % angegeben." }
      ],
      moved: {
        intro: "Für Dienstag nennen Berichte als Hintergrund:",
        items: [
          "Die allgemeine Schwäche bei Chip- und Technologiewerten sowie gemischte US-Bankbilanzen drückten auch auf den breiteren europäischen Markt."
        ]
      },
      important: [
        { area: "Zinsen", text: "EZB-Präsidentin Lagarde äußerte sich am Mittwoch bei der IWF-Jahrestagung in Bangkok zur Inflationslage; mehr dazu in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "onvista.de: ROUNDUP/Aktien Europa Schluss – EuroStoxx gibt wieder nach, Züricher SMI legt zu", url: "https://www.onvista.de/news/2026/10-13-roundup-aktien-europa-schluss-eurostoxx-gibt-wieder-nach-zuericher-smi-legt-zu-0-10-26563682" }
    },
    "sp500": {
      label: "S&P 500", value: "7.805,45", change: "−0,02 % (fast unverändert, Di-Schluss)", dir: "flat", asof: "Schluss Di 13.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Dienstagsschluss: 51.670,10 Punkte (−0,35 %, −180,45 Pkt.) – belastet von gemischten Bankbilanzen; der KBW-Bankindex fiel um 1,1 %." },
        { label: "Nasdaq", text: "Dienstagsschluss: 27.204,38 Punkte (−0,15 %) – zweiter Tag in Folge mit Schwäche bei Speicherchip-Werten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Dienstag:",
        items: [
          "Verhaltener Handel vor den US-Inflationsdaten für September, die heute, 14.10., veröffentlicht werden.",
          "Gemischte Bankbilanzen: JPMorgan verfehlte die Erwartungen, Wells Fargo, Citigroup und Goldman Sachs übertrafen sie."
        ]
      },
      important: [
        { area: "Inflation", text: "Die US-Inflationsdaten für September werden heute, 14.10., um 14:30 Uhr MEZ veröffentlicht – mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "Yahoo Finance: Stock market today, Tuesday Oct 13", url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-october-13-dow-sp-500-nasdaq-080236234.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.204,38", change: "−0,15 % (Di-Schluss)", dir: "down", asof: "Schluss Di 13.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Vortag", text: "Am Montag war die Nasdaq bereits um 0,44 % gefallen; der Dienstag brachte mit −0,15 % den zweiten Rückgang in Folge, ausgelöst von anhaltender Schwäche bei Speicherchip-Werten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Speicherchip-Werte wie Micron und SanDisk (−7 %) sowie Western Digital (−2 %) standen zum zweiten Tag in Folge unter Druck wegen Konkurrenzsorgen durch den chinesischen Hersteller CXMT (Meldung 14).",
          "Verhaltener Handel vor den heutigen US-Inflationsdaten."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf solche Nachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "CNBC: Micron sinks, other memory-linked names dip for a second day", url: "https://www.cnbc.com/2026/10/13/sk-hynix-softbank-samsung-electronics-shares-tech-stocks-fall.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1188 (EZB-Referenzkurs Di)", change: "+0,06 % ggü. Mo (1,1181)", dir: "up", asof: "EZB-Referenzkurs Di 13.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Woche davor", text: "Von 1,1206 Dollar am Freitag, 09.10., war der Kurs am Montag auf 1,1181 Dollar gefallen; am Dienstag stieg er leicht auf 1,1188 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Leicht nachgebende US-Anleiherenditen vor den heutigen US-Inflationsdaten dämpften die Dollar-Stärke etwas."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB hält ihren Einlagensatz bei 2,50 % und dürfte laut einer Umfrage unter Ökonomen am 29.10. pausieren; mehr dazu in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "finanzen.at: Devisen/EZB-Richtwerte – Euro-Referenzkurs bei 1,1188 US-Dollar", url: "https://www.finanzen.at/nachrichten/aktien/devisen-ezb-richtwerte-euro-referenzkurs-bei-1-1188-us-dollar-1036621185" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,21–5,22 %", change: "leicht nachgebend (CNBC: −2 Bp)", dir: "down", asof: "Stand Di 13.10.26 (CNBC); Tagesspanne 5,19–5,24 % laut anderen Quellen", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,2 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,2 % Zinsen pro Jahr.",
      compare: [
        { label: "Zwischenhoch", text: "Anfang Oktober hatte die Rendite laut einer Quelle zwischenzeitlich bis zu 5,36 % erreicht; der aktuelle Stand von rund 5,21 bis 5,22 % liegt leicht darunter." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Dienstag:",
        items: [
          "Sich stabilisierende Energiepreise dämpften Inflationssorgen und damit die Zinserwartung.",
          "Investoren positionierten sich vor den heute, 14.10., veröffentlichten US-Inflationsdaten vorsichtig."
        ]
      },
      important: [
        { area: "Fed", text: "Die eingepreiste Wahrscheinlichkeit, dass die Fed am 27./28.10. den Leitzins unverändert lässt, liegt laut Berichten bei rund 80 bis 82 %; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: 10-year Treasury yield falls as energy prices stabilize", url: "https://www.cnbc.com/2026/10/13/us-treasurys-bonds-yields.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,44–3,46 %", change: "leicht fallend", dir: "down", asof: "Stand Di 13.10.26 (Tagestief 3,44 %, Nachmittag 3,46 %)", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "US-Rendite", text: "Die US-10-Jahres-Rendite liegt mit rund 5,21 bis 5,22 % weiterhin deutlich über der Bund-Rendite von rund 3,44 bis 3,46 %; der Unterschied spiegelt unterschiedliche Zinspfade von Fed und EZB wider." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Fallende Ölpreise dämpften Inflationserwartungen und Zinsspekulationen.",
          "Eine Meldung über mögliche zusätzliche russische Diesel-Importe in die USA hatte laut Experten nur einen begrenzten Effekt auf die Rendite."
        ]
      },
      important: [
        { area: "Zentralbank", text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %; mehr zur IWF-Jahrestagung und zur Schnabel-Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "onvista.de: Deutsche Anleihen legen zu – fallende Ölpreise dämpfen Inflationssorgen", url: "https://onvista.de/news/2026/10-13-deutsche-anleihen-legen-zu-fallende-oelpreise-daempfen-inflationssorgen-0-10-26563424" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.155–4.182 $", change: "uneinheitlich: rund +0,35 % laut einer Quelle, abends niedriger laut anderen", dir: "flat", asof: "Stand Di 13.10.26 (CNBC Select, 9 Uhr ET, sowie Tagesverlauf)", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.170 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "CNBC Select nennt für 9 Uhr ET 4.179,27 Dollar (Vortag 4.164,85 Dollar, rund +0,35 %); im weiteren Tagesverlauf wird ein Rückgang auf rund 4.154,70 Dollar genannt, eine andere Quelle nennt bis zu 4.182 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Weiterhin hohe geopolitische Unsicherheit in der Ukraine und am Golf stützte die Nachfrage nach Gold als sicherem Hafen.",
          "Zum Vergleich: Das Rekordhoch von 5.597,23 Dollar wurde laut Berichten am 29.01.2026 erreicht; von diesem Niveau ist der Preis weiterhin deutlich entfernt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Leicht sinkende US-Anleiherenditen vor den heutigen Inflationsdaten wirken grundsätzlich stützend auf Gold.", ref: "e:gold-why" }
      ],
      source: { title: "CNBC Select: The price of gold today, Oct. 13, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-13-2026/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 104,7–107,3 $ (Quellen weichen stark ab)", change: "uneinheitlich: etwa −1,5 % bis +0,8 % je Quelle", dir: "flat", asof: "Stand Di 13.10./Mi-Vormittag 14.10.26", story: 9, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 105 Dollar je Fass (159 Liter) sind etwa 66 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Quellenlage", text: "Fortune nennt für Dienstag, 7:45 Uhr ET, 107,29 Dollar; Convextrade nennt 105,30 Dollar; Trading-Economics-Datenpunkte schwanken zwischen rund 104,67 und 106,51 Dollar für Dienstag/Mittwoch. Der Vortag wird mit rund 108,04 Dollar angegeben. Die Angaben lassen sich nicht abschließend in Einklang bringen." }
      ],
      moved: {
        intro: "Berichte nennen gegenläufige Faktoren:",
        items: [
          "Die eskalierenden Houthi-Angriffe auf Saudi-Arabien und die anhaltenden Tankerangriffe in der Straße von Hormus wirkten laut Berichten preistreibend (Meldung 9) und überlagerten nach Einschätzung von Marktbeobachtern die Entspannungssignale beim behaupteten Ukraine-Energie-Waffenstillstand (Meldung 8).",
          "Hurrikan-bedingte Förderausfälle im Golf von Mexiko (rund 605.000 Barrel pro Tag, laut einer Quelle rund 30 % der dortigen US-Förderung) wirkten zusätzlich preistreibend.",
          "Die OPEC+ beließ die Fördermenge für November gegenüber Oktober unverändert – der zweite Monat in Folge ohne Erhöhung (Meldung 15)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den Tankerangriffen und zum Houthi-Angriff auf Riad in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "Fortune: Current price of oil, Oct. 13, 2026", url: "https://fortune.com/article/price-of-oil-10-13-2026/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 83.300 $", change: "+1,6 % (Mi-Morgen), nach Rückgang am Dienstagmorgen", dir: "up", asof: "Stand Mi-Morgen 14.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 bis 84.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf Dienstag", text: "Bitcoin eröffnete am Dienstag bei rund 81.754 Dollar (−2,3 % gegenüber Montag), erholte sich im Tagesverlauf auf rund 83.120 Dollar und schloss bei rund 83.360 bis 83.475 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Spot-Käufer stiegen laut Berichten am Mittwochmorgen wieder verstärkt ein, nachdem der Kurs am Dienstag kurzzeitig unter 81.000 Dollar gefallen war.",
          "Sorgen um weiterhin erhöhte Anleiherenditen hatten zuvor belastet; die leicht sinkende US-Rendite vor den heutigen Inflationsdaten wirkte zuletzt stützend."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Yahoo Finance: Bitcoin and Ethereum prices today, Tuesday, October 13, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-tuesday-october-13-2026-crypto-prices-regaining-ground-this-morning-as-spot-buyers-step-up-113622571.html" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DIENSTAG-SCHLUSS + ASIEN-ERHOLUNG MITTWOCH */
    {
      id: "maerkte-dienstag-mixed-asien-chip-erholung-10-14", cats: ["markets"], when: "Schluss Di 13.10.2026 · Asien-Handel Mi 14.10.2026",
      headline: "US-Börsen schließen am Dienstag gemischt, DAX gibt leicht nach, asiatische Chipwerte erholen sich am Mittwoch teilweise",
      sec30: "Am Dienstag fiel der Dow Jones um 0,35 % auf 51.670,10 Punkte, der S&P 500 gab mit −0,02 % kaum nach, die Nasdaq verlor 0,15 %. Der DAX sank um 0,07 % auf 25.259,90 Punkte, der Euro Stoxx 50 um 0,55 bis 0,57 %. Grund war unter anderem eine zweite Verkaufswelle bei Speicherchip-Werten, nachdem der chinesische Hersteller ChangXin Memory (CXMT) Fortschritte bei einem neuen, dichteren DRAM-Zelldesign meldete. Am Mittwochmorgen erholten sich die am Vortag stark gefallenen asiatischen Chip- und Technologiewerte teilweise wieder (Nikkei +0,6 %, Kospi +1,7 bis 2,0 %, Samsung und SK Hynix im Plus).",
      blocks: [
        { h: "Wie haben sich US-Börsen und DAX am Dienstag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones fiel um 0,35 % (−180,45 Pkt.) auf 51.670,10 Punkte; der S&P 500 gab mit −0,02 % auf 7.805,45 Punkte kaum nach, die Nasdaq Composite verlor 0,15 % auf 27.204,38 Punkte.",
            ask: [{ label: "Was bedeutet eine kleine Veränderung bei der Nasdaq?", ref: "n:nasdaq" }] },
          { tag: "fakt", text: "Der DAX gab um 0,07 % auf 25.259,90 Punkte nach, der Euro Stoxx 50 um 0,55 bis 0,57 % auf rund 6.166 Punkte.",
            ask: [{ label: "Was bedeutet ein Minus beim DAX?", ref: "n:dax" }] }
        ]},
        { h: "Was wird als Hintergrund genannt?", items: [
          { tag: "fakt", text: "Gemischt ausgefallene Quartalszahlen US-amerikanischer Großbanken belasteten den Dow: JPMorgan verfehlte die Erwartungen, Wells Fargo, Citigroup und Goldman Sachs übertrafen sie; der KBW-Bankindex fiel um 1,1 %." },
          { tag: "fakt", text: "Im DAX fiel Infineon um rund 2,1 %, Elmos Semiconductor um rund 6,3 %, nachdem Berichte über das neue DRAM-Design von CXMT die Stimmung im Chipsektor belasteten." }
        ]},
        { h: "Warum stand der Speicherchip-Sektor zum zweiten Tag in Folge unter Druck?", items: [
          { tag: "unbestaetigt", text: "CXMT meldete Fortschritte bei einem dichteren DRAM-Zelldesign und plant, entsprechenden Server-Speicher bis Jahresende auszuliefern. Die CXMT-Aktie selbst war am Montag, dem ersten Handelstag nach der „Golden Week”-Feiertagspause, um 7,79 % gefallen – der größte Tagesverlust seit dem Börsengang im Juli.",
            ask: [{ label: "Mehr zur Chip-Konkurrenz und zur KI-Debatte", ref: "s:14" }] },
          { tag: "unbestaetigt", text: "Am Dienstag fielen laut Berichten Micron und SanDisk um rund 7 %, Western Digital um rund 2 % – bereits der zweite Rückgangstag in Folge." }
        ]},
        { h: "Wie erholten sich die Märkte am Mittwochmorgen?", items: [
          { tag: "fakt", text: "Der Nikkei 225 stieg um rund 0,6 % auf 68.193,13 Punkte, nachdem er am Vortag rund 2,5 % verloren hatte; der Kospi legte um 1,7 bis 2,0 % zu, Samsung Electronics um rund 2,8 bis 3 %, SK Hynix um rund 2 bis 3 %, Taiwan Semiconductor (TSMC) um 1,4 %." },
          { tag: "position", text: "Ein Morningstar-Analyst wies laut Berichten darauf hin, dass die Kommerzialisierung des neuen CXMT-Designs noch große Hürden habe, etwa bei der Serienfertigungs-Konsistenz und strengen Server-Qualifizierungsstandards." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass eine einzelne technische Ankündigung binnen eines Tages einen zweistelligen Kursrückgang bei mehreren asiatischen Chipwerten auslösen und binnen eines weiteren Tages teilweise wieder aufgeholt werden konnte, zeigt erneut, wie empfindlich Anleger derzeit auf jedes Signal zur künftigen Marktstellung bei KI- und Speicherchips reagieren. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Chip-Thematik wird in Meldung 14 vertieft; die Zinslage dazu in Meldung 2, die widersprüchliche Ölpreis-Lage in Meldung 9.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why", "e:ai-capex"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Erholung erlahmt", url: "https://ariva.de/news/roundup-aktien-frankfurt-schluss-erholung-erlahmt-12167943" },
        { title: "onvista.de: ROUNDUP/Aktien Europa Schluss – EuroStoxx gibt wieder nach", url: "https://www.onvista.de/news/2026/10-13-roundup-aktien-europa-schluss-eurostoxx-gibt-wieder-nach-zuericher-smi-legt-zu-0-10-26563682" },
        { title: "Yahoo Finance: Stock market today, Tuesday Oct 13", url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-october-13-dow-sp-500-nasdaq-080236234.html" },
        { title: "Bloomberg: Korean Chip Stocks Sink on Chinese Rival Worry, Broadcom Remarks", url: "https://www.bloomberg.com/news/articles/2026-10-13/korean-chip-stocks-sink-on-chinese-rival-worry-broadcom-remarks" },
        { title: "Business Standard: Asian stocks rise as chipmakers rebound ahead of US inflation data", url: "https://www.business-standard.com/amp/markets/news/asian-stocks-rise-as-chipmakers-rebound-ahead-of-us-inflation-data-126101400115_1.html" }
      ]
    },

    /* 2 MÄRKTE: RENDITEN US/BUND + FED */
    {
      id: "renditen-fed-warsh-williams-10-14", cats: ["markets"], when: "Fed-Leitzins 3,75–4,00 % seit 16.09. · Williams-Rede 13.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "US-Rendite gibt leicht nach, Fed-Mitglieder uneins über weiteren Zinsschritt, Bund-Rendite bleibt stabil",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen lag am Dienstag bei rund 5,21 bis 5,22 % und damit leicht unter dem Anfang-Oktober-Hoch von bis zu 5,36 %. Die Fed hatte ihren Leitzins am 16.09. erstmals seit 2023 um 25 Basispunkte auf 3,75 bis 4,00 % angehoben, als Reaktion auf anhaltend hohe, energiepreisgetriebene Inflation. New-York-Fed-Präsident Williams sagte am 13.10., ein weiterer Zinsschritt 2026 sei angebracht, 2027 aber keiner mehr nötig; Gouverneur Waller hatte zuvor von unzureichenden Fortschritten bei der Inflation gesprochen. Märkte preisen für die FOMC-Sitzung am 27./28.10. eine Wahrscheinlichkeit von rund 80 bis 82 % für ein Halten des Leitzinses ein. Die Bund-Rendite bewegte sich kaum bei rund 3,44 bis 3,46 %.",
      blocks: [
        { h: "Wie hoch ist der US-Leitzins aktuell, und warum?", items: [
          { tag: "fakt", text: "Die Fed erhöhte ihren Leitzins am 16.09.2026 einstimmig (12:0) um 25 Basispunkte auf 3,75 bis 4,00 % – die erste Erhöhung seit 2023. Als Grund nennen Berichte anhaltend hohe Inflation (Kern-PCE über 3 %) in Verbindung mit einem energiepreisgetriebenen Schock durch den Konflikt im Nahen Osten.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was sagen Fed-Mitglieder zum weiteren Vorgehen?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller sagte am 08.10., die Inflation zeige weiterhin nicht ausreichend Fortschritte in Richtung des 2-%-Ziels." },
          { tag: "position", text: "New-York-Fed-Präsident John Williams sagte am 13.10., aus seiner Sicht sei noch eine weitere Zinserhöhung 2026 angebracht, für 2027 sehe er dagegen keine weitere Erhöhung als nötig an." },
          { tag: "unbestaetigt", text: "Mehrere Quellen nennen für ein Beibehalten des Leitzinses am 27./28.10. eine eingepreiste Wahrscheinlichkeit von rund 80 bis 82 %, für eine weitere Erhöhung von rund 18 bis 20 %; als wahrscheinlicherer Termin für den nächsten Zinsschritt gilt Dezember (rund 75 %)." }
        ]},
        { h: "Wie hat sich die US-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die US-10-Jahres-Rendite lag laut CNBC am Dienstag bei rund 5,21 bis 5,22 % (−2 Basispunkte); andere Quellen nennen eine Tagesspanne von 5,19 bis 5,24 %. Anfang Oktober hatte sie zwischenzeitlich bis zu 5,36 % erreicht.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,2 %?", ref: "n:ust10" }] }
        ]},
        { h: "Wie ist der Stand bei der Bund-Rendite?", items: [
          { tag: "unbestaetigt", text: "Die Bund-Rendite bewegte sich am Dienstag kaum bei rund 3,44 bis 3,46 %; als Hintergrund nennen Berichte fallende Ölpreise, die Inflationserwartungen dämpften.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass einzelne Fed-Mitglieder weiterhin unterschiedliche Signale zu einem möglichen weiteren Zinsschritt senden, während die Marktpreise eher auf eine Pause im Oktober und einen möglichen Dezember-Schritt hindeuten, zeigt ein Abwägen zwischen anhaltendem Inflationsdruck und den heute veröffentlichten Daten." }
        ]}
      ],
      reaction: "Die US-Inflationsdaten und die Arbeitsmarktlage werden in Meldung 4 vertieft; die EZB-Seite in Meldung 5.",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:fed-hike", "e:central-banks-why"],
      sources: [
        { title: "Federal Reserve: Pressemitteilung Zinserhöhung 16.09.2026", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm" },
        { title: "Federal Reserve: Rede von Governor Waller, 08.10.2026", url: "https://www.federalreserve.gov/newsevents/speech/waller20261008a.htm" },
        { title: "FXStreet: Fed's Williams sees one final 2026 rate hike, none in 2027", url: "https://fxstreet.com/news/feds-williams-sees-one-final-2026-rate-hike-none-in-2027-202610131821" },
        { title: "CNBC: 10-year Treasury yield falls as energy prices stabilize", url: "https://www.cnbc.com/2026/10/13/us-treasurys-bonds-yields.html" },
        { title: "onvista.de: Deutsche Anleihen legen zu – fallende Ölpreise dämpfen Inflationssorgen", url: "https://onvista.de/news/2026/10-13-deutsche-anleihen-legen-zu-fallende-oelpreise-daempfen-inflationssorgen-0-10-26563424" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-14", cats: ["markets"], when: "Stand Di 13.10./Mi-Vormittag 14.10.2026",
      headline: "Gold hält sich nahe 4.170 Dollar, Bitcoin erholt sich nach Dienstag-Rückgang, Euro legt minimal zu",
      sec30: "Gold notierte je nach Quelle und Tageszeitpunkt zwischen rund 4.155 und 4.182 Dollar je Feinunze. Bitcoin war am Dienstag zwischenzeitlich unter 81.000 Dollar gefallen, erholte sich aber bis Mittwochmorgen auf rund 83.300 Dollar (+1,6 %). Der Euro legte zum Dollar leicht zu, von 1,1181 am Montag auf 1,1188 am Dienstag.",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "unbestaetigt", text: "CNBC Select nennt für Dienstag, 9 Uhr ET, 4.179,27 Dollar (Vortag 4.164,85 Dollar, rund +0,35 %); im weiteren Tagesverlauf wird ein Rückgang auf rund 4.154,70 Dollar genannt, eine andere Quelle nennt bis zu 4.182 Dollar.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "fakt", text: "Weiterhin hohe geopolitische Unsicherheit in der Ukraine und am Golf stützte die Nachfrage nach Gold als sicherem Hafen; zum Vergleich: Das Rekordhoch von 5.597,23 Dollar wurde laut Berichten am 29.01.2026 erreicht." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin eröffnete am Dienstag bei rund 81.754 Dollar (−2,3 % gegenüber Montag), erholte sich im Tagesverlauf auf rund 83.120 Dollar und schloss bei rund 83.360 bis 83.475 Dollar; am Mittwochmorgen notierte die Währung rund 1,6 % höher bei etwa 83.300 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "fakt", text: "Als Hintergrund der Erholung nennen Berichte verstärkt einsteigende Spot-Käufer am Mittwochmorgen, nachdem Sorgen um erhöhte Anleiherenditen zuvor belastet hatten." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs stieg von 1,1181 Dollar am Montag auf 1,1188 Dollar am Dienstag – ein leichtes Plus von rund 0,06 %.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:2" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold trotz anhaltender geopolitischer Unsicherheit kaum eindeutig zulegen konnte, während Bitcoin nach einem kurzen Einbruch rasch wieder aufholte, zeigt weiterhin uneinheitliche Signale an den Finanzmärkten vor den heutigen US-Inflationsdaten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Bewegungen bei Gold, Bitcoin und Euro fallen zusammen mit der leicht nachgebenden US-Rendite (Meldung 2) und der unsicheren Ölpreis-Lage am Golf (Meldung 9).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "CNBC Select: The price of gold today, Oct. 13, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-13-2026/" },
        { title: "Yahoo Finance: Bitcoin and Ethereum prices today, Tuesday, October 13, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-tuesday-october-13-2026-crypto-prices-regaining-ground-this-morning-as-spot-buyers-step-up-113622571.html" },
        { title: "blockchainreporter.net: Bitcoin price today – BTC rebounds above $83K amid Kospi turmoil", url: "https://blockchainreporter.net/bitcoin-price-today-btc-rebounds-above-83k-kospi" },
        { title: "finanzen.at: Devisen/EZB-Richtwerte – Euro-Referenzkurs bei 1,1188 US-Dollar", url: "https://www.finanzen.at/nachrichten/aktien/devisen-ezb-richtwerte-euro-referenzkurs-bei-1-1188-us-dollar-1036621185" }
      ]
    },

    /* 4 WIRTSCHAFT: US-INFLATION/FED/ARBEITSMARKT */
    {
      id: "us-inflation-fed-arbeitsmarkt-10-14", cats: ["economy"], when: "US-Arbeitsmarktbericht 02.10. · Verbrauchervertrauen 09.10. · US-Inflationsdaten (CPI) heute, 14.10., 14:30 Uhr MEZ · FOMC-Sitzung 27./28.10.2026",
      headline: "US-Inflationsdaten für September stehen heute an, schwacher Arbeitsmarkt und sinkendes Verbrauchervertrauen erhöhen den Entscheidungsdruck für die Fed",
      sec30: "Die US-Inflationsdaten (CPI) für September werden heute, 14.10., um 14:30 Uhr MEZ veröffentlicht; der Konsens erwartet einen Anstieg der Kopfrate auf rund 3,6 bis 3,7 % und eine Kernrate von rund 2,4 bis 2,5 % – dies sind Prognosen, keine Ist-Werte. Der US-Arbeitsmarktbericht für September (veröffentlicht 02.10.) zeigte mit nur 29.000 neuen Stellen einen deutlich schwächeren Wert als die erwarteten 84.000, bei einer Arbeitslosenquote von 4,2 %. Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte, ein 5-Monats-Tief. Der Fed-Leitzins liegt seit dem 16.09. bei 3,75 bis 4,00 %; die nächste Zinsentscheidung fällt am 27./28.10.",
      blocks: [
        { h: "Was steht heute an?", items: [
          { tag: "unbestaetigt", text: "Das Bureau of Labor Statistics veröffentlicht heute, 14.10., um 14:30 Uhr MEZ die Verbraucherpreisdaten für September. Der Konsens erwartet eine Kopfrate von rund 3,6 bis 3,7 % (nach 3,4 % im August) und eine Kernrate von rund 2,4 bis 2,5 %. Diese Werte sind Prognosen von Analysten, keine amtlich bestätigten Ist-Daten.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]},
        { h: "Wie ist der Stand beim US-Arbeitsmarkt?", items: [
          { tag: "fakt", text: "Der Arbeitsmarktbericht für September (veröffentlicht 02.10.) zeigte lediglich 29.000 neue Stellen gegenüber erwarteten 84.000, bei einer Arbeitslosenquote von 4,2 %; die Werte für Juli und August wurden zudem nach unten revidiert. Die Zahl der Erstanträge auf Arbeitslosenhilfe lag in der Woche bis zum 03.10. bei 197.000 – die vierte Woche in Folge unter 200.000." },
          { tag: "fakt", text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein Rückgang von 3,7 % gegenüber September und ein 5-Monats-Tief.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Wie reagieren Fed-Mitglieder auf diese Datenlage?", items: [
          { tag: "position", text: "Fed-Gouverneur Waller sagte am 08.10., die Inflation zeige weiterhin nicht ausreichend Fortschritte." },
          { tag: "position", text: "New-York-Fed-Präsident Williams sagte am 13.10., ein weiterer Zinsschritt 2026 sei angebracht, 2027 aber keiner mehr nötig." },
          { tag: "unbestaetigt", text: "Märkte preisen für die FOMC-Sitzung am 27./28.10. eine Wahrscheinlichkeit von rund 80 bis 82 % für ein Halten des Leitzinses ein." }
        ]},
        { h: "Gibt es einen Regierungsshutdown?", items: [
          { tag: "fakt", text: "Ein Regierungsshutdown findet nicht statt: Eine am 02.09.2026 unterschriebene Übergangsfinanzierung sichert den Bundeshaushalt bis zum 11.12.2026; Datenveröffentlichungen laufen fristgerecht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass ein deutlich schwächerer Arbeitsmarkt und sinkendes Verbrauchervertrauen auf eine Fed treffen, die erst im September erstmals seit 2023 die Zinsen erhöht hat, zeigt laut Marktbeobachtern ein Abwägen zwischen Inflationsbekämpfung und konjunktureller Vorsicht; die heutigen Inflationsdaten dürften für die Entscheidung am 27./28.10. mitentscheidend sein." }
        ]}
      ],
      reaction: "Die Fed-Debatte knüpft an die Renditelage in Meldung 2 an; die europäische Gegenseite wird in Meldung 5 behandelt.",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "U.S. Bureau of Labor Statistics: Employment Situation – September 2026", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
        { title: "Admiral Markets: US CPI September 2026 – scenarios for the Fed in October", url: "https://admiralmarkets.com/analytics/traders-blog/us-cpi-september-2026-scenarios-fed-october" },
        { title: "FXStreet: Fed's Williams sees one final 2026 rate hike, none in 2027", url: "https://fxstreet.com/news/feds-williams-sees-one-final-2026-rate-hike-none-in-2027-202610131821" },
        { title: "Fedtools: Government shutdown status, October 2026", url: "https://www.fedtools.com/blog/government-shutdown-october-2026" }
      ]
    },

    /* 5 WIRTSCHAFT: EZB/IWF BANGKOK/DEUTSCHE INFLATION/SCHNABEL */
    {
      id: "ezb-iwf-bangkok-deutsche-inflation-schnabel-10-14", cats: ["economy"], when: "Destatis-Veröffentlichung 13.10. · IWF-Jahrestagung 12.–18.10. · Lagarde-Rede 14.10. · Schnabel-Nachfolge-Frist 28.10. · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "Deutsche September-Inflation final bei 3,3 % bestätigt, Lagarde sieht in Bangkok noch keine Zweitrundeneffekte, Schnabel-Nachfolge weiter offen",
      sec30: "Destatis bestätigte am 13.10. die deutsche Inflationsrate für September final bei +3,3 % gegenüber Vorjahr (Kernrate 2,4 %) – der höchste Wert seit Dezember 2023, getrieben von Energiepreisen (+14,9 %) und Kraftstoffen (+37,1 %). Bei der IWF/Weltbank-Jahrestagung in Bangkok (12.–18.10.) hob der IWF seine Wachstumsprognose für Deutschland 2026 auf 1,3 % an (von zuvor 0,7 %); EZB-Präsidentin Lagarde sagte am 14.10., sie sehe noch keine Zweitrundeneffekte bei der Inflation. Die EZB hält ihren Einlagensatz bei 2,50 %; eine Umfrage unter 73 Ökonomen erwartet überwiegend eine Pause am 29.10. und einen Zinsschritt im Dezember. Die Bewerbungsfrist für die Schnabel-Nachfolge im EZB-Direktorium läuft bis zum 28.10.",
      blocks: [
        { h: "Was ergab die finale deutsche Inflationsrate für September?", items: [
          { tag: "fakt", text: "Destatis bestätigte am 13.10. final eine Inflationsrate von +3,3 % gegenüber dem Vorjahr (+0,6 % gegenüber dem Vormonat), Kernrate +2,4 % – der höchste Wert seit Dezember 2023. Haupttreiber waren Energiepreise (+14,9 %) und Kraftstoffe (+37,1 %).",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]},
        { h: "Was passiert bei der IWF/Weltbank-Jahrestagung in Bangkok?", items: [
          { tag: "fakt", text: "Die Jahrestagung findet vom 12. bis 18.10. statt. Der am 13.10. veröffentlichte IWF-Weltwirtschaftsausblick hebt die Wachstumsprognose für Deutschland 2026 auf 1,3 % an (zuvor 0,7 %); für die Eurozone werden 1,1 %, für die Weltwirtschaft 3,1 % Wachstum erwartet." },
          { tag: "position", text: "IWF-Chefin Kristalina Georgieva warnte, Künstliche Intelligenz sei ein „langsam heranrollender Tsunami” für bis zu 40 % der Arbeitsplätze weltweit." },
          { tag: "position", text: "EZB-Präsidentin Lagarde sagte am 14.10. in Bangkok, man sehe „noch keine Zweitrundeneffekte” bei der Inflation; zur Lage in Frankreich sagte sie, die Lösung liege „in der französischen Fiskalpolitik”." }
        ]},
        { h: "Wie ist der Stand bei der EZB-Zinspolitik?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %, zuletzt angehoben am 10.09. als Reaktion auf den Energiepreisschock." },
          { tag: "unbestaetigt", text: "Eine Reuters-Umfrage unter 73 Ökonomen (05.–08.10.) ergab, dass 70 von 73 für die Sitzung am 29.10. eine Pause erwarten; rund 90 % erwarten für Dezember eine Erhöhung auf 2,75 bis 3,00 %." },
          { tag: "position", text: "EZB-Chefökonom Philip Lane sagte am 05.10. in Frankfurt, ein „mittlerer Pfad” einer gemessenen Reaktion bleibe weiterhin angebracht." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Isabel Schnabel scheidet zum 03.01.2027 aus dem EZB-Direktorium aus und wechselt zum IWF. Die Bewerbungsfrist für Kandidaten läuft bis zum 28.10.; ein offizieller deutscher Kandidat wurde bislang nicht benannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der IWF seine Wachstumsprognose für Deutschland deutlich anhebt, während die EZB einem möglichen Dezember-Zinsschritt näherzukommen scheint und zugleich eine Personalnachfolge im Direktorium noch offen ist, zeigt, wie mehrere wirtschafts- und geldpolitische Entwicklungen in Europa derzeit zusammenfallen." }
        ]}
      ],
      reaction: "Die EZB-Themen ergänzen die Fed-Debatte in Meldung 4 und die Renditelage in Meldung 2.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "Statistisches Bundesamt: Verbraucherpreise September 2026 final", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_364_611.html" },
        { title: "IWF: World Economic Outlook, Oktober 2026", url: "https://www.imf.org/en/publications/weo/issues/2026/10/13/world-economic-outlook-october-2026" },
        { title: "FXStreet: Lagarde speech – 'We're not seeing any second round effects yet'", url: "https://www.fxstreet.com/news/lagarde-speech-were-not-seeing-any-second-round-effects-yet-202610140236" },
        { title: "Econostream: ECB's Lane – 'middle path' of measured policy response remains appropriate", url: "https://www.econostream-media.com/news/2026-10-05/ecb%E2%80%99s_lane:_%E2%80%9Cmiddle_path%E2%80%9D_of_measured_policy_response_remain_appropriate.html" },
        { title: "FXStreet: ECB expected to pause in October before hiking rates in December – Reuters poll", url: "https://www.fxstreet.com/news/ecb-expected-to-pause-in-october-before-hiking-rates-in-december-reuters-poll-202610081239" }
      ]
    },

    /* 6 DEUTSCHLAND: RENTENREFORM/BAS-RÜCKTRITT */
    {
      id: "rentenreform-bas-ruecktritt-miersch-winkel-10-14", cats: ["germany"], when: "Bas-Rücktritt Anfang Okt. bekanntgegeben · Miersch-Vorstoß 11.10. · Winkel-Zurückweisung 11./12.10.2026",
      headline: "Arbeitsministerin Bärbel Bas tritt zurück, Streit um weiteres Verfahren bei der Rentenreform zwischen SPD und Union hält an",
      sec30: "Bärbel Bas trat als SPD-Co-Vorsitzende und Bundesarbeitsministerin zurück; als Gründe nannte sie Trauer über ihre verstorbene Stieftochter und persönliche Angriffe „auch aus den Reihen des Koalitionspartners”. Als Nachfolger im Arbeitsministerium ist der frühere rheinland-pfälzische Ministerpräsident Alexander Schweitzer (SPD) vorgesehen. Parallel hält der Streit um das weitere Verfahren bei der Rentenreform an: SPD-Fraktionschef Miersch forderte am 11.10. zusätzliche Gespräche mit Fraktionen und möglicherweise Ministerpräsidenten vor einem Kabinettsbeschluss; CDU/CSU-Vize-Fraktionschef Winkel wies dies zurück. Ein Kabinettsbeschluss wird weiterhin bis spätestens Jahresende angestrebt, die abschließende Bundestagsverabschiedung bleibt auf das Frühjahr 2027 verschoben.",
      blocks: [
        { h: "Was wurde zum Rücktritt von Bärbel Bas bekannt?", items: [
          { tag: "position", text: "Bärbel Bas erklärte zu ihrem Rücktritt als SPD-Co-Vorsitzende und Bundesarbeitsministerin: „Da ich derzeit nicht die Kraft aufbringen kann, meine Regierungs- und Parteiarbeit kurzfristig vollumfänglich wahrzunehmen, habe ich mich entschieden, beide Ämter aufzugeben.” Als Gründe nannte sie Trauer über ihre verstorbene Stieftochter sowie persönliche Angriffe „auch aus den Reihen des Koalitionspartners”." },
          { tag: "fakt", text: "Als Nachfolger im Amt des Bundesarbeitsministers ist der frühere rheinland-pfälzische Ministerpräsident Alexander Schweitzer (SPD) vorgesehen." }
        ]},
        { h: "Was fordert SPD-Fraktionschef Miersch beim weiteren Verfahren?", items: [
          { tag: "position", text: "SPD-Fraktionschef Matthias Miersch sagte am 11.10.: „Es gibt die Überlegung, dass man die Fraktionen und möglicherweise auch die Ministerpräsidenten in den Prozess einbezieht, bevor es einen Kabinettsbeschluss gibt.”",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]},
        { h: "Wie reagiert die Union?", items: [
          { tag: "position", text: "Unionsfraktionsvize Johannes Winkel (CDU/CSU) wies den Vorschlag zurück: „Es macht keinen Sinn, nach der umfassenden Arbeit der Kommission und der politischen Einigung nun eine neue Rentenkommission mit neuen Akteuren einzusetzen.” Weiter sagte er: „Es ist an der Zeit, Wort zu halten. Es ist an der Zeit, Entscheidungen zu treffen.”" }
        ]},
        { h: "Was ist der aktuelle Zeitplan?", items: [
          { tag: "fakt", text: "Ein Kabinettsbeschluss zum Rentenpaket wird weiterhin bis spätestens Jahresende angestrebt; die abschließende Verabschiedung im Bundestag bleibt auf das Frühjahr 2027 verschoben." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Ministerin, die bislang für die Rentenreform zuständig war, zurücktritt, während gleichzeitig weiterhin über den Umfang der Konsultation vor einem Kabinettsbeschluss gestritten wird, zeigt zusätzliche Unsicherheit bei einem ohnehin bereits verzögerten Gesetzgebungsprozess." }
        ]}
      ],
      reaction: "Die Entwicklungen laufen parallel zu den weiteren innenpolitischen Themen in Meldung 7.",
      terms: ["koalition", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics"],
      sources: [
        { title: "Handelsblatt: Rentenreform – Unionsfraktionsvize weist Mierschs Renten-Vorstoß zurück", url: "https://www.handelsblatt.com/politik/deutschland/rentenreform-unionsfraktionsvize-weist-mierschs-renten-vorstoss-zurueck/100261313.html" },
        { title: "ZDFheute: Bärbel Bas tritt als SPD-Chefin und Arbeitsministerin zurück", url: "https://www.zdfheute.de/politik/deutschland/baerbel-bas-spd-ruecktritt-100.html" },
        { title: "ms-aktuell.de: Nach dem Rücktritt von Bärbel Bas wächst der Streit um die Rentenreform", url: "https://ms-aktuell.de/finanzen/rentenreform-rente-63-12-10-2026/" }
      ]
    },

    /* 7 DEUTSCHLAND: BERLIN-SONDIERUNG/SACHSEN-ANHALT/UMFRAGEN/STROMSTEUER */
    {
      id: "berlin-sondierung-emde-sachsen-anhalt-insa-stromsteuer-10-14", cats: ["germany"], when: "Sondierungs-Unterbrechung Di-Abend 13.10. · Halle-Gedenken/Tillschneider 10.–12.10. · INSA 11.10./Forsa 13.10. · Merz-Stromsteuer-Ankündigung 12.10.2026",
      headline: "Berliner SPD und Grüne unterbrechen Sondierungen mit der Linken wegen einer Personalie, neue Umfragen zeigen unterschiedliche AfD-Werte, Details zur Stromsteuer-Ankündigung",
      sec30: "SPD und Grüne unterbrachen am Dienstagabend die Koalitionssondierungen mit der Linken in Berlin, nachdem die Linksfraktion die wegen israelkritischer Äußerungen umstrittene Politikerin Vanessa Emde aufgenommen hatte – nur fünf Tage nach Beginn der Sondierungen und kurz nach einer gemeinsamen Vereinbarung zum Umgang mit Antisemitismus. In Sachsen-Anhalt hält die Kontroverse um den AfD-Landtagsvizepräsidenten Tillschneider nach dem Halle-Gedenken an. Die INSA-Umfrage vom 11.10. sieht die AfD bei 30 %, die Forsa-Umfrage vom 13.10. bei 26 % – die Institute weichen deutlich voneinander ab. Zur von Kanzler Merz angekündigten Stromsteuer-Senkung für alle Verbraucher äußerte Finanzminister Klingbeil Zweifel an der dauerhaften Finanzierbarkeit.",
      blocks: [
        { h: "Was führte zur Unterbrechung der Berliner Sondierungen?", items: [
          { tag: "fakt", text: "SPD und Grüne unterbrachen am Abend des 13.10. die seit dem 08.10. laufenden Koalitionssondierungen mit der Linken, nachdem deren neu konstituierte Fraktion die Politikerin Vanessa Emde aufnahm – gegen den ausdrücklichen Widerstand von SPD und Grünen. Emde war zuvor wegen Äußerungen kritisiert worden, die das Existenzrecht Israels als Staat infrage stellten.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "SPD-Verhandlungsführer Steffen Krach hatte den Ausschluss antisemitisch aufgefallener Mitglieder zuvor als Bedingung für eine Fortsetzung der Gespräche genannt; die Aufnahme Emdes stellt die erst kurz zuvor vereinbarte gemeinsame Antisemitismus-Vereinbarung infrage." }
        ]},
        { h: "Worum geht es bei den Sondierungen inhaltlich noch?", items: [
          { tag: "fakt", text: "Die Linke fordert die Vergesellschaftung großer privater Wohnungsbestände; die SPD bezeichnet dies als „rote Linie”. Die Linke fordert zudem die Abschaffung des Landesverfassungsschutzes, was SPD und Grüne ablehnen. Zusätzlich müsste jede Koalition eine jährliche Haushaltslücke von rund 5 Mrd. Euro (2026–2029) einplanen.",
            ask: [{ label: "Wie entscheidet eine solche Mehrheitsfrage über eine Koalition?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie geht die Kontroverse um Tillschneider in Sachsen-Anhalt weiter?", items: [
          { tag: "fakt", text: "Der am 06.10. auch mit Stimmen aus der CDU-Fraktion gewählte AfD-Landtagsvizepräsident Hans-Thomas Tillschneider war als Vertreter des Landtags zur Gedenkveranstaltung für den Anschlag auf die Synagoge Halle vorgesehen; eine Menschenkette jüdischer Studierender verhinderte seine Teilnahme. Kritisiert wird unter anderem, dass Tillschneider zuvor die politische Einordnung des Anschlags infrage gestellt haben soll." }
        ]},
        { h: "Was zeigen neue Umfragen?", items: [
          { tag: "unbestaetigt", text: "Die INSA-Umfrage vom 11.10. (n=1.207) sieht die AfD bei 30 %, CDU/CSU bei 19 %, Grüne bei 14 %, SPD bei 13 %, Linke bei 10 %. Die Forsa-Umfrage vom 13.10. (n=1.502) sieht die AfD dagegen bei 26 %, Union ebenfalls bei 19 %, Grüne bei 17 %, SPD bei 14 %, Linke bei 12 %. Die Institute weichen vor allem bei AfD und Grünen deutlich voneinander ab; eine Erklärung dafür nennen die Quellen nicht." }
        ]},
        { h: "Was ist der Stand bei der Stromsteuer-Ankündigung?", items: [
          { tag: "fakt", text: "Nach der CDU-Klausur kündigte Kanzler Merz an, die Stromsteuer auch für Privathaushalte auf das EU-Mindestniveau zu senken; bislang gilt dies nur für Industrie und Landwirtschaft. Ein konkretes Umsetzungsdatum liegt noch nicht vor.",
            ask: [{ label: "Mehr zu den Details und zur Finanzierung", ref: "s:15" }] },
          { tag: "position", text: "Bundesfinanzminister Lars Klingbeil (SPD) äußerte Zweifel an der dauerhaften Finanzierbarkeit: „Die Annahme, dass sich damit dauerhaft eine Stromsteuersenkung finanzieren lässt, kann ich heute nicht bestätigen.”" }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass eine Personalfrage die Berliner Sondierungen nur Tage nach deren Beginn unterbricht, während gleichzeitig zwei Umfrageinstitute deutlich unterschiedliche Werte für die AfD zeigen und Finanzierungsfragen zur Stromsteuer offenbleiben, zeigt auf mehreren Ebenen anhaltende Unsicherheit in der politischen Lage." }
        ]}
      ],
      reaction: "Die Entwicklungen ergänzen den Rentenstreit in Meldung 6 und die Energiepolitik in Meldung 15.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Berliner Zeitung: Berlin – SPD und Grüne unterbrechen Sondierungen wegen Vanessa Emde", url: "https://www.berliner-zeitung.de/article/berlin-spd-gruene-linke-sondierungen-unterbrochen-10492114" },
        { title: "Migazin: Halle-Gedenken – Jüdische Studierende stoppen AfD-Mann Tillschneider", url: "https://www.migazin.de/2026/10/11/warum-afd-politiker-tillschneider-synagoge/" },
        { title: "dawum.de: INSA-Umfrage 11.10.2026", url: "https://dawum.de/Bundestag/INSA/2026-10-11" },
        { title: "dawum.de: Forsa-Umfrage 13.10.2026", url: "https://dawum.de/Bundestag/Forsa/2026-10-13/" },
        { title: "onvista.de: Klingbeil zweifelt an Finanzierung von Stromsteuer-Senkung", url: "https://www.onvista.de/news/2026/10-12-klingbeil-zweifelt-an-finanzierung-von-stromsteuer-senkung-0-10-26563210" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE ENERGIE-WAFFENSTILLSTAND + SANKTIONSPAKET */
    {
      id: "ukraine-energie-waffenstillstand-sanktionspaket22-10-14", cats: ["world", "geo"], when: "Trump-Behauptung 11.10. · EU-Sanktionspaket 22 verabschiedet 12.10. · russische Angriffe Kyjiw/Charkiw 13.10. · Miami-Treffen Witkoff/Kushner um 13.10.2026",
      headline: "Trumps behaupteter Energie-Waffenstillstand wird von fortgesetzten russischen Angriffen auf ukrainische Energieanlagen überschattet, EU verabschiedet 22. Sanktionspaket",
      sec30: "Präsident Trump behauptete am 11.10. per Truth Social, Russland und die Ukraine hätten einem „Energie-Waffenstillstand” zugestimmt. Außenminister Lawrow wies dies zurück. Am Abend des 13.10. griff Russland Kyjiw mit ballistischen Raketen an und traf unter anderem das Heizkraftwerk Darnytsia sowie ein Wohnhaus; weitere Ziele waren ein Kraftwerk in Charkiw und eine Gasförderanlage. Präsident Selenskyj meldete sechs angegriffene Energieanlagen allein an diesem Tag und 33 Verletzte. Die EU verabschiedete am 12.10. ihr 22. Sanktionspaket gegen Russland mit rund 1.600 Einträgen. In Miami trafen US-Gesandte Witkoff und Kushner die ukrainische Delegation, um für einen Diesel-Deal mit Russland zu werben.",
      blocks: [
        { h: "Was behauptet Trump, und wie reagiert Russland?", items: [
          { tag: "position", text: "Trump schrieb am 11.10. auf Truth Social: „Both parties have agreed. Do not break it!” Auf die Frage, wie beide Seiten zugestimmt haben könnten, ohne informiert worden zu sein, sagte er: „Because I said, 'you agree,' that's why. They agreed because I said they agree.” Am 13.10. relativierte er angesichts fortgesetzter Angriffe: „Well, I'd have to look at it and see, because there's been violations on both sides.”" },
          { tag: "position", text: "Außenminister Sergej Lawrow wies eine Kampfpause am 12.10. zurück: „I don't think he [Zelenskyy] deserves a respite” und „I don't think we will fall for assurances and promises again.” Kreml-Sprecher Peskow wies zudem Selenskyjs Vorschlag einer 60-tägigen Waffenruhe für Wahlen zurück." }
        ]},
        { h: "Wie reagierte Präsident Selenskyj, und was griff Russland tatsächlich an?", items: [
          { tag: "position", text: "Selenskyj sagte zunächst, die Ankündigung sei „news for me. But if Russians agree to an energy ceasefire, Ukraine will agree.”" },
          { tag: "fakt", text: "Am Abend des 13.10. griff Russland Kyjiw mit ballistischen Raketen an und traf das Heizkraftwerk Darnytsia (CHPP-4) sowie ein Wohnhaus; weitere Ziele waren ein Kraftwerk in Charkiw, eine Gasförderanlage und eine zivile Gastankstelle. Selenskyj: „Today alone, the Russians have attacked 6 energy facilities in Ukraine. 33 people were wounded.” Nach seinen Angaben gab es keine Vorwarnung durch Partner." }
        ]},
        { h: "Was wurde beim 22. EU-Sanktionspaket beschlossen?", items: [
          { tag: "fakt", text: "Die EU-Außenminister verabschiedeten am 12.10. in Luxemburg das 22. Sanktionspaket: rund 1.600 Unternehmen und Einzelpersonen, mehr als die Hälfte davon mit Bezug zur Produktionskette ballistischer Raketen (etwa Iskander) und zu Drohnenherstellern." },
          { tag: "position", text: "EU-Außenbeauftragte Kaja Kallas sagte: „We are making it significantly harder, slower and more expensive for Russia to produce the weapons it uses to kill Ukrainians.”" }
        ]},
        { h: "Wie ist der Stand bei den Witkoff/Kushner-Verhandlungen?", items: [
          { tag: "unbestaetigt", text: "Witkoff und Kushner trafen die ukrainische Delegation um den 13.10. in Miami, um für einen Diesel-Deal mit Russland zu werben, der laut Berichten den Kreml an den Verhandlungstisch zurückbringen soll. Kushner übermittelte demnach Trumps Forderung, die Ukraine solle Angriffe auf russische Raffinerien einstellen; Russland sei laut Berichten weiterhin nicht bereit, den Krieg zu beenden. Die ukrainische Seite verließ das Treffen ohne formale Zusage, signalisierte aber Bereitschaft zu einem Energiewaffenstillstand, sofern Russland ihn einhält." }
        ]},
        { h: "Was bedeutet das, und welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Dass ein von den USA verkündeter Waffenstillstand von keiner der beiden Kriegsparteien eindeutig bestätigt wird und innerhalb von Stunden erneute Angriffe auf Energieanlagen folgen, zeigt weiterhin unterschiedliche Ansätze zwischen den wichtigsten Unterstützern der Ukraine; das gleichzeitig verabschiedete größte EU-Sanktionspaket unterstreicht dies zusätzlich. Wirtschaftlich bleibt die ukrainische Energieversorgung vor dem Winter gefährdet, während die Aufmerksamkeit der Ölmärkte sich zuletzt stärker auf die Golf-Region richtet (Meldung 9)." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 9 vertieft; die deutsche Energiepolitik in Meldung 15.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Bloomberg: Trump says Russia and Ukraine agreed to energy ceasefire", url: "https://www.bloomberg.com/news/articles/2026-10-11/trump-says-russia-and-ukraine-agreed-to-energy-ceasefire-mv3wxxro" },
        { title: "Al Jazeera: Trump insists energy ceasefire holds as Ukraine reports new Russian strikes", url: "https://www.aljazeera.com/economy/2026/10/13/trump-insists-energy-ceasefire-holds-as-ukraine-reports-new-russian-strikes" },
        { title: "Pravda.com.ua: Zelensky reports Russian strikes on six energy facilities", url: "https://www.pravda.com.ua/eng/news/2026/10/13/8057882/" },
        { title: "Meduza: EU approves largest expansion of sanctions list against Russia", url: "https://meduza.io/en/news/2026/10/12/eu-approves-largest-expansion-of-sanctions-list-against-russia" },
        { title: "Axios: Trump says Russia, Ukraine agreed to energy ceasefire", url: "https://www.axios.com/2026/10/11/trump-russia-ukraine-energy-ceasefire-zelensky" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: HORMUZ + HOUTHI-ANGRIFF RIAD */
    {
      id: "hormuz-tankerangriffe-houthi-riad-10-14", cats: ["world", "geo"], when: "6 Schiffe am 11.10. getroffen · UKMTO 18 Meldungen im Oktober · Houthi-Angriffe auf Riad 8.–10.10. · Flughafensperrung bis mind. 17.10.2026",
      headline: "Tankerangriffe in der Straße von Hormus erreichen neuen Höchststand, Flughafen Riad nach Houthi-Angriffen weiter geschlossen",
      sec30: "Die britische Marinebehörde UKMTO zählte allein am 11.10. sechs getroffene Schiffe (fünf Tanker, ein Containerschiff) und insgesamt 18 Angriffsmeldungen im Oktober – ein neuer Höchststand seit Kriegsbeginn im Februar 2026. Die iranischen Revolutionsgarden (IRGC) übernahmen Verantwortung für den Brand eines Tankers, der Warnungen ignoriert habe; die USA widersprechen der iranischen Darstellung, die Straße sei geschlossen. Das US-Militär schaltete einen Frachter aus, der die Blockade iranischer Häfen durchbrechen wollte. Ein Houthi-Angriff auf den Flughafen Riad forderte zwischen dem 8. und 10.10. mindestens zwölf Tote und über 300 Verletzte; der Flughafen bleibt mindestens bis zum 17.10. geschlossen.",
      blocks: [
        { h: "Wie hat sich die Zahl der Tankerangriffe entwickelt?", items: [
          { tag: "fakt", text: "Laut UKMTO wurden allein am 11.10. sechs Schiffe getroffen (fünf Tanker, ein Containerschiff); insgesamt zählte die Behörde im Oktober 18 Angriffsmeldungen – ein neuer Höchststand seit Kriegsbeginn im Februar 2026. Mindestens zwölf Tanker wurden laut Berichten binnen einer Woche Ende September/Anfang Oktober getroffen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was sagen Iran und die USA dazu?", items: [
          { tag: "position", text: "Die IRGC-Marine erklärte am 12.10., sie habe einen Supertanker in Brand gesetzt, weil dieser versucht habe, die Meerenge mit abgeschaltetem Navigationssystem zu verlassen und Warnungen ignoriert habe; ein iranischer Vertreter erklärte zudem, die Straße von Hormus sei „geschlossen” und die Streitkräfte hätten „volle Kontrolle”." },
          { tag: "position", text: "US-Außenminister Marco Rubio widersprach dieser Darstellung: Die Straße sei offen, der Ölfluss liege „fast so hoch wie vor Konfliktbeginn”; an Iran gerichtet sagte er, die „volle Kontrolle” sei verloren." }
        ]},
        { h: "Was unternahm das US-Militär?", items: [
          { tag: "fakt", text: "CENTCOM meldete, ein US-Kampfjet habe mit Präzisionsmunition den Antrieb eines panama-geflaggten Frachters lahmgelegt, der versucht habe, nach Verlassen eines iranischen Hafens die Blockade zu durchbrechen; niemand wurde verletzt. Seit Wiederaufnahme der Blockade am 14.07. wurden laut CENTCOM vier Schiffe lahmgelegt, 135 zur Umkehr gezwungen und zehn IRGC-nahe Tanker zerstört." }
        ]},
        { h: "Was ist beim Houthi-Angriff auf den Flughafen Riad passiert?", items: [
          { tag: "fakt", text: "Der King-Khalid-Flughafen in Riad wurde zwischen dem 8. und 10.10. mehrfach von Houthi-Raketen getroffen; beim schwersten Angriff wurden laut saudischen Angaben mindestens zwölf Menschen getötet und über 300 verletzt. Der Flughafen bleibt mindestens bis zum 17.10. geschlossen; Saudi-Arabien fing drei weitere Raketen ab und zerstörte nach eigenen Angaben drei Houthi-Abschussplattformen." },
          { tag: "position", text: "Ein Houthi-Sprecher begründete den Angriff als Vergeltung für saudische Angriffe auf zivile Infrastruktur im Jemen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Tankerangriffe einen neuen Höchststand erreichen, während parallel ein separater Houthi-Angriff auf saudisches Territorium den Flughafen Riad für mehr als eine Woche außer Betrieb setzt, zeigt, wie sich mehrere Krisenherde am Golf gegenseitig verstärken – was sich auch in den widersprüchlichen Ölpreis-Angaben spiegelt.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der widersprüchliche Ölpreis bleibt Hintergrund für die deutsche Energieversorgung (Meldung 15) sowie für die Markteinordnung in Meldung 3.",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "gCaptain: New reports reveal five more ships hit near Hormuz", url: "https://gcaptain.com/new-reports-reveal-five-more-ships-hit-near-hormuz" },
        { title: "The National: Strait of Hormuz attacks surge as Iran steps up campaign against US-backed oil shipping", url: "https://www.thenationalnews.com/news/gulf/2026/10/13/strait-of-hormuz-attacks-surge-as-iran-steps-up-campaign-against-us-backed-oil-shipping/" },
        { title: "The Hill: CENTCOM disables cargo vessel in Gulf of Oman", url: "https://thehill.com/policy/defense/6141140-centcom-disables-cargo-vessel-gulf-oman/" },
        { title: "CNN: Riyadh airport attacked, Saudi Arabia says 12 killed, 300 wounded", url: "https://www.cnn.com/2026/10/10/middleeast/riyadh-airport-saudi-houthis-intl" },
        { title: "Washington Post: Saudi Arabia vows retaliation against Houthis after Riyadh airport strike", url: "https://www.washingtonpost.com/world/2026/10/11/saudi-arabia-vows-retaliation-against-houthis-after-riyadh-airport-strike/" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL/RENK/HENSOLDT */
    {
      id: "rheinmetall-renk-hensoldt-kurse-analysten-10-14", cats: ["defence"], when: "Kursrückgänge Di 13.10. · Berenberg-Downgrade 09.10. · BofA-Kaufempfehlung-Rückzug bei Renk · Hensoldt-Zahlen 05.11.2026",
      headline: "Rheinmetall, Renk und Hensoldt geben am Dienstag nach, Analysten bleiben bei den drei Rüstungswerten gespalten",
      sec30: "Rheinmetall fiel am Dienstag auf rund 953 bis 960 Euro, nachdem das Unternehmen bereits Anfang September seine Umsatzprognose 2026 gesenkt und einen deutlich negativen Free Cashflow gemeldet hatte. Hensoldt gab um rund 0,65 % auf 79,75 bis 79,82 Euro nach. Renk fiel um 1,7 % auf 34,11 Euro, nachdem ein Bank-of-America-Analyst seine Kaufempfehlung zurückgezogen hatte. Die Analystenlager bleiben bei allen drei Werten gespalten, mit Kurszielspannen von über 1.000 Euro bei Rheinmetall und 62 bis 105 Euro bei Hensoldt.",
      blocks: [
        { h: "Wie haben sich die Kurse am Dienstag entwickelt?", items: [
          { tag: "fakt", text: "Rheinmetall fiel im Xetra-Handel auf rund 953 bis 960 Euro (zuvor rund 962 Euro); Hensoldt gab um rund 0,65 % auf 79,75 bis 79,82 Euro nach (Tageshoch 80,62 Euro, Tagestief 79,36 Euro) und zählte zu den MDAX-Verlierern; Renk fiel um 1,7 % auf 34,11 Euro.",
            ask: [{ label: "Was bedeutet ein schwankender Aktienkurs trotz hoher Branchennachfrage?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was treibt die unterschiedlichen Analysteneinschätzungen?", items: [
          { tag: "position", text: "Berenberg hatte das Rating für Rheinmetall bereits am 09.10. von „Buy” auf „Hold” gesenkt und das Kursziel von 1.600 auf 1.020 Euro reduziert, mit Verweis auf unsichere mittelfristige Wachstumsperspektiven; Rheinmetall hatte Anfang September seine Umsatzprognose 2026 auf 13,7 bis 14,2 Mrd. Euro gesenkt und einen deutlich negativen Free Cashflow sowie Lieferverzögerungen gemeldet. Bernstein bestätigte dagegen „Outperform” mit Kursziel 1.200 Euro, RBC Capital Markets nannte 1.600 Euro, Deutsche Bank 1.800 Euro." },
          { tag: "position", text: "Ein Bank-of-America-Analyst zog seine Kaufempfehlung für Renk zurück, mit der Begründung, die aktuelle Getriebeproduktion lasse sich nicht auf diesem Niveau halten." },
          { tag: "position", text: "Bei Hensoldt reicht die Analystenspanne von mwb research (Sell, Kursziel 62 Euro) bis zu Jefferies (98 Euro) und Deutsche Bank (105 Euro); Goldman Sachs bewertet die Aktie seit Anfang Oktober mit „Neutral” (Kursziel 85 Euro). Die nächsten Zahlen stehen am 05.11. an." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass alle drei Werte am Dienstag nachgaben, während Analysten bei Kurszielen und Einschätzungen weiterhin stark voneinander abweichen, zeigt, dass unternehmensspezifische Nachrichten – etwa Rheinmetalls gesenkte Prognose oder Zweifel an Renks Produktionskapazität – derzeit stärker wirken als der allgemeine Branchentrend. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Kursbewegungen ergänzen die Markteinordnung in Meldung 1 und die neuen Aufträge in Meldung 11.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "finanzen.net: Rheinmetall-Aktie – Kursbewegung 13.10.2026", url: "https://www.finanzen.net/nachricht/aktien/rheinmetall-aktie-kursbewegung-13-10-2026-11207664" },
        { title: "WirtschaftsWoche: Rheinmetall-Aktie – welchen Grund hat das Ausmaß des Absturzes?", url: "https://www.wiwo.de/finanzen/boerse/rheinmetall-aktie-welchen-grund-hat-das-ausmass-des-rheinmetall-absturzes/100235739.html" },
        { title: "ad-hoc-news.de: Berenberg senkt Ziel für die Rheinmetall-Aktie auf 1.020 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/berenberg-senkt-ziel-fuer-die-rheinmetall-aktie-auf-1-020-euro/70298723" },
        { title: "finanzen.ch: Hensoldt-Aktie – Kursbewegung 13.10.2026", url: "https://www.finanzen.ch/nachrichten/aktien/hensoldt-aktie-kursbewegung-13-10-2026-1035061970" },
        { title: "finanzen.ch: Renk-Aktie – Kursbewegung 13.10.2026", url: "https://www.finanzen.ch/nachrichten/aktien/renk-aktie-kursbewegung-13-10-2026-1035061989" }
      ]
    },

    /* 11 DEFENCE: TKMS/JAPAN/NATO */
    {
      id: "tkms-fregatten-indien-japan-patriot-nato-10-14", cats: ["defence"], when: "Haushaltsausschuss-Billigung 08.10. · Onodera-Kyjiw-Besuch 08.–11.10. · deutsche NATO-Meldung 124,7 Mrd. € für 2026",
      headline: "Bundestag billigt Milliardenauftrag für vier weitere TKMS-Fregatten, Japan sondiert mögliche Patriot-Lieferung an die Ukraine",
      sec30: "Der Haushaltsausschuss des Bundestags billigte am 08.10. die Finanzierung von vier zusätzlichen Fregatten des Typs MEKO A-200 für TKMS; damit erhält die Werft einen Gesamtauftrag über acht Schiffe mit einem Gesamtwert von rund 11,6 Mrd. Euro – nach Angaben von TKMS-Chef Burkhard der größte Überwasserschiffauftrag der Firmengeschichte. Das indische U-Boot-Programm P75(I) (rund sechs Boote) befindet sich weiterhin in Verhandlungen, ohne bestätigten Abschlusstermin. Der japanische Politiker Itsunori Onodera besuchte Kyjiw, um Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine anzustoßen – eine Entscheidung steht noch aus. Deutschland meldete der NATO für 2026 Rekord-Verteidigungsausgaben von 124,7 Mrd. Euro, das entspricht 2,69 % des BIP und liegt weiterhin unter dem 3,5-%-Ziel.",
      blocks: [
        { h: "Wie ist der Stand beim TKMS-Fregattenauftrag?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags billigte am 08.10. die Finanzierung von vier zusätzlichen MEKO-A-200-Fregatten; zusammen mit den bereits bestellten vier Schiffen erhält TKMS damit einen Gesamtauftrag über acht Fregatten mit einem Gesamtwert von rund 11,6 Mrd. Euro – nach eigenen Angaben der größte Überwasserschiffauftrag der Firmengeschichte.",
            ask: [{ label: "Warum ist Rüstungsnachfrage für Unternehmen wie TKMS relevant?", ref: "e:nato-target" }] },
          { tag: "unbestaetigt", text: "Der Wert allein der vier neuen Schiffe wird je nach Quelle mit rund 5,3 bis 6,3 Mrd. Euro angegeben; der Auftrag ersetzt das zuvor am 24.06.2026 vom Verteidigungsministerium beendete F126-Projekt mit der niederländischen Werft Damen, die laut Berichten nicht termin- und kostengerecht liefern konnte." }
        ]},
        { h: "Wie ist der Stand beim indischen U-Boot-Programm?", items: [
          { tag: "unbestaetigt", text: "Beim P75(I)-Programm (rund sechs U-Boote mit außenluftunabhängigem Antrieb) laufen die Vertragsverhandlungen zwischen TKMS, der indischen Mazagon Dock Shipbuilders und der Beschaffungsbehörde seit September 2025 weiter; ein konkretes Abschlussdatum wurde bislang nicht bestätigt." }
        ]},
        { h: "Was ist der Stand bei Japan und Patriot-Raketen für die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Der japanische Politiker Itsunori Onodera besuchte Kyjiw, um Gespräche über eine mögliche Lieferung oder einen Verkauf von Patriot-Abfangraketen an die Ukraine anzustoßen. Bislang handelt es sich lediglich um die Absicht, innerregierungsinterne Gespräche unter Premierministerin Takaichi wiederaufzunehmen; eine konkrete Entscheidung steht noch aus." }
        ]},
        { h: "Wie ist der Stand bei den NATO-Verteidigungsausgaben?", items: [
          { tag: "fakt", text: "Deutschland meldete der NATO für 2026 Rekordausgaben von 124,7 Mrd. Euro, das entspricht 2,69 % des BIP und liegt weiterhin unter dem 3,5-%-Ziel. Fünf NATO-Staaten (Litauen, Estland, Lettland, Polen, Griechenland) erreichen das 3,5-%-Ziel bereits 2026." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Deutschland mit dem TKMS-Auftrag einen der größten Rüstungsaufträge seiner Geschichte vergibt, während die eigenen Verteidigungsausgaben weiterhin unter dem NATO-Zielwert liegen, und dass Japan erst am Anfang möglicher Gespräche über Patriot-Lieferungen steht, zeigt, dass einzelne Großaufträge und das übergeordnete Ausgabenziel unterschiedlich schnell vorankommen." }
        ]}
      ],
      reaction: "Die Entwicklungen ergänzen die Kursbewegungen bei Rheinmetall, Renk und Hensoldt in Meldung 10.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "onvista.de: TKMS soll vier weitere Fregatten für die deutsche Marine bauen", url: "https://www.onvista.de/news/2026/10-08-tkms-soll-vier-weitere-fregatten-fuer-die-deutsche-marine-bauen-0-20-26561931" },
        { title: "Telepolis: Neustart nach F126-Aus – Marine erhält acht neue MEKO-Fregatten von TKMS", url: "https://www.telepolis.de/article/Neustart-nach-F126-Aus-Marine-erhaelt-acht-neue-MEKO-Fregatten-von-TKMS-11481858.html" },
        { title: "it-boltwise.de: TKMS kurz vor Milliardenauftrag – sechs U-Boote für Indien sichern", url: "https://www.it-boltwise.de/tkms-kurz-vor-milliardenauftrag-sechs-u-boote-fuer-indien-sichern.html" },
        { title: "korabelov.info: Japan launches new talks on Patriot systems for Ukraine", url: "https://korabelov.info/en/2026/10/621559/ukraine-could-be-given-even-more-protection-from-missiles-japan-launches-new-talks-on-patriot-systems/" },
        { title: "ZDFheute: NATO-Ausgaben – Deutschland meldet Rekordausgaben, verfehlt 3,5-%-Ziel", url: "https://www.zdfheute.de/politik/ausland/nato-ausgaben-verteidigung-ziel-trump-100.html" }
      ]
    },

    /* 12 DEALS: LUKOIL/BOEHLY, CABLE ONE, SCHNEIDER/PTC, BUMBLE */
    {
      id: "ma-deals-lukoil-boehly-cableone-schneider-ptc-bumble-10-14", cats: ["deals", "pe"], when: "Carlyle-Rückzug bestätigt 08.10. · OFAC-Lizenz läuft 22.10. aus · Cable-One-Update 12.10. · Schneider/PTC angekündigt 05.10. · Bumble/Ithaca angekündigt 13.10.2026",
      headline: "Carlyle zieht sich aus dem Lukoil-Deal zurück, ein Konsortium um Todd Boehly positioniert sich, Cable One kämpft weiter gegen eine Klage, neue Milliarden-Deals bei PTC und Bumble",
      sec30: "Carlyle bestätigte am 08.10., die Übernahme der rund 22 Mrd. Dollar schweren internationalen Lukoil-Vermögenswerte nicht mehr zu verfolgen, nachdem die US-Sanktionsbehörde OFAC den ursprünglichen Deal nie genehmigt hatte. Ein Konsortium um Todd Boehly (Eldridge, die US-Entwicklungsfinanzierungsbehörde DFC, ein katarisches und ein mit Abu Dhabi verbundenes Unternehmen) positioniert sich nun; die OFAC-Verhandlungslizenz läuft am 22.10. aus. Cable One bestätigte am 12.10., dass eine gerichtliche Verfügung seine Mega-Broadband-Übernahme weiterhin blockiert, meldete aber Fortschritte bei einer alternativen Finanzierung. Schneider Electric kündigte bereits am 05.10. die Übernahme der Industriesoftware-Firma PTC für 23,7 Mrd. Dollar an. Bumble vereinbarte am 13.10., für 1,3 Mrd. Dollar über Ithaca Holdings von der Börse zu gehen.",
      blocks: [
        { h: "Wie ist der Stand beim Carlyle/Lukoil-Deal und dem Boehly-Konsortium?", items: [
          { tag: "fakt", text: "Carlyle bestätigte am 08.10., die im Januar 2026 vereinbarte Übernahme der internationalen Lukoil-Vermögenswerte (rund 22 Mrd. Dollar) nicht mehr zu verfolgen; die US-Sanktionsbehörde OFAC hatte die Vereinbarung nie genehmigt, das Angebot lief Ende Juli aus.",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] },
          { tag: "unbestaetigt", text: "Ein Konsortium um Todd Boehly (Eldridge), die US-Entwicklungsfinanzierungsbehörde DFC, das katarische Unternehmen UCC Holding sowie die mit Abu Dhabi verbundene International Holding Co. positioniert sich für die Vermögenswerte; die DFC soll dabei rund 15 % ohne eigene Kapitaleinlage erhalten. Die OFAC-Verhandlungslizenz wurde zuletzt bis zum 22.10. verlängert – bereits die achte Verlängerung in Folge, mit dem Hinweis, sie könne auch widerrufen werden. Eine endgültige Entscheidung lag bei Redaktionsschluss nicht vor." }
        ]},
        { h: "Was ist bei der Cable-One/Mega-Broadband-Übernahme passiert?", items: [
          { tag: "fakt", text: "Nachdem ein Bundesrichter am 09.10. die rund 480 Mio. Dollar schwere Übernahme von Mega Broadband Investments vorläufig gestoppt hatte (Klage des Kreditgebers CoBank, der die Zahlung als „grob unverhältnismäßig” zum Wert der erworbenen Anteile bezeichnet), bestätigte Cable One am 12.10. die weiter bestehende Verfügung und meldete „wesentliche Fortschritte” bei Gesprächen über eine alternative Finanzierung mit Verkäufer GTCR und weiteren Kreditgebern. Ein Anhörungstermin stand bei Redaktionsschluss nicht fest.",
            ask: [{ label: "Wie kam es zu der gerichtlichen Blockade?", ref: "e:take-private-why" }] }
        ]},
        { h: "Was ist der Schneider-Electric/PTC-Deal?", items: [
          { tag: "fakt", text: "Schneider Electric kündigte am 05.10. die Übernahme der Industriesoftware-Firma PTC für 23,7 Mrd. Dollar an (205 Dollar pro Aktie in bar, Eigenkapitalwert rund 22,6 Mrd. Dollar, eine Prämie von 42,3 % auf den letzten Schlusskurs); erwartet werden jährliche Kosteneinsparungen von rund 250 Mio. Euro und Umsatzsynergien von rund 800 Mio. Euro. Der Abschluss wird für das dritte Quartal 2027 erwartet. Die Schneider-Electric-Aktie fiel nach der Ankündigung um rund 7 %." },
          { tag: "unbestaetigt", text: "Angaben zu finanzierenden Banken sind in den verfügbaren Quellen nicht genannt." }
        ]},
        { h: "Welcher weitere große Deal wurde bekannt?", items: [
          { tag: "fakt", text: "Die Dating-App-Plattform Bumble vereinbarte am 13.10., für rund 1,3 Mrd. Dollar über Ithaca Holdings von der Börse zu gehen (6,05 Dollar pro Aktie, eine Prämie von 138 % gegenüber dem Schlusskurs vom 09.10.)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Carlyle sich aus dem Lukoil-Deal zurückzieht und Cable One weiterhin mit einer gerichtlichen Blockade kämpft, während gleichzeitig neue milliardenschwere Übernahmen wie Schneider Electric/PTC und Bumble/Ithaca abgeschlossen werden, zeigt anhaltend hohe, aber zugleich störanfällige Dealaktivität in diesem Herbst." }
        ]}
      ],
      reaction: "Die Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung bei den Private-Credit-Themen in Meldung 13.",
      terms: ["closing", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "23,7 Mrd. $ (Eigenkapitalwert ca. 22,6 Mrd. $, 205 $/Aktie bar); finanzierende Banken nicht in den Quellen genannt",
        buyer: "Schneider Electric",
        target: "PTC Inc. (Industriesoftware)",
        sector: "Industrielle Software / Automatisierung",
        type: "Übernahme (All-Cash)"
      },
      sources: [
        { title: "Bloomberg: Carlyle says deal to buy Lukoil international assets has expired", url: "https://www.bloomberg.com/news/articles/2026-10-08/carlyle-says-deal-to-buy-lukoil-international-assets-has-expired" },
        { title: "citybiz: Carlyle ends pursuit of Lukoil international assets as rival investors emerge", url: "https://www.citybiz.co/article/916770/carlyle-ends-pursuit-of-lukoil-international-assets-as-rival-investors-emerge/" },
        { title: "Bloomberg: CoBank sues to block Cable One's $480 million Mega Broadband acquisition", url: "https://www.bloomberg.com/news/articles/2026-10-09/cable-one-lender-seeks-to-block-480-million-mega-broadband-deal" },
        { title: "Everest Group: Schneider Electric's US$23.7 billion PTC acquisition", url: "https://www.everestgrp.com/blogs/schneider-electrics-us23-7-billion-ptc-acquisition-evaluating-the-strategic-impact/" },
        { title: "The Tribune: Bumble to go private in USD 1.3 billion deal", url: "https://tribuneindia.com/news/business/bumble-to-go-private-in-usd-1-3-billion-deal-as-online-dating-industry-faces-reset" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-blue-owl-fed-sec-bdc-10-14", cats: ["credit", "pe"], when: "Blue-Owl-Kurs 13.10. · Fed-Bankenbesuche laufend · SEC-Mahnung Hohl/Daly · Q1/Q2-2026-Rücknahmedaten",
      headline: "Blue-Owl-Aktie bleibt unter Druck, Rücknahmen in BDC-Fonds erreichen Rekordniveau, Fed und SEC weiten Prüfungen aus",
      sec30: "Die Blue-Owl-Aktie bewegte sich am Dienstag zwischen 9,08 und 9,45 Dollar – rund 68 % unter ihrem Allzeithoch von 25,02 Dollar aus dem Januar 2025. Rücknahmeanträge erreichten zuletzt 41 % eines 6-Mrd.-Dollar-Technologiefonds und 22 % des 36-Mrd.-Dollar-Flaggschifffonds. Nicht börsennotierte BDC-Fonds verzeichneten im ersten Quartal 2026 erstmals höhere Rücknahmen als Zuflüsse; die Rücknahmequoten der zwölf größten Fonds lagen im Schnitt bei 12,1 % und damit deutlich über der üblichen 5-%-Grenze. Die New Yorker Fed befragt seit dem Frühjahr Großbanken zur Qualität von Sicherheiten bei Private-Credit-Krediten, ausgelöst unter anderem durch Abschreibungen von JPMorgan im März; auch die SEC mahnte zuletzt eine bessere Bewertungspraxis an.",
      blocks: [
        { h: "Wie wirken sich die Bewertungssorgen auf Blue Owl aus?", items: [
          { tag: "fakt", text: "Die Blue-Owl-Aktie bewegte sich am Dienstag zwischen 9,08 und 9,45 Dollar (aktuell rund 9,29 Dollar) – rund 68 % unter ihrem Allzeithoch von 25,02 Dollar aus dem Januar 2025; das bisherige Rekordtief von 7,95 Dollar wurde am 02.04.2026 erreicht.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "Die Rücknahmeanträge erreichten zuletzt 41 % des 6-Mrd.-Dollar-Technologiefonds (gegenüber 15,4 % im Vorquartal) und 22 % des 36-Mrd.-Dollar-Flaggschifffonds (gegenüber 5 % zuvor)." },
          { tag: "unbestaetigt", text: "Ein konkretes Kreditproblem betrifft das nachrangige Darlehen an den Verpackungskonzern Loparex: Im Rahmen einer rund 1-Mrd.-Dollar-Restrukturierung droht die Position weitgehend ausgelöscht zu werden, Blue Owl bliebe nur ein kleiner Eigenkapitalanteil." }
        ]},
        { h: "Wie stark sind Rücknahmen im gesamten BDC-Sektor?", items: [
          { tag: "fakt", text: "Nicht börsennotierte BDCs verzeichneten im ersten Quartal 2026 erstmals höhere Rücknahmen als Zuflüsse: Bruttoverkäufe von 4,9 Mrd. Dollar standen Rücknahmeanträgen von 6,9 Mrd. Dollar gegenüber – ein Rekordwert für ein einzelnes Quartal. Die Rücknahmequoten der zwölf größten nicht börsennotierten BDCs lagen im Schnitt bei 12,1 % und damit deutlich über der üblichen 5-%-Grenze; Blue Owl, FS KKR und Blackstone haben 2026 entsprechende Rücknahme-Obergrenzen eingeführt." }
        ]},
        { h: "Was unternehmen Fed und SEC?", items: [
          { tag: "fakt", text: "Die Federal Reserve Bank of New York befragt seit dem Frühjahr 2026 Großbanken wie JPMorgan, Wells Fargo, Barclays und Morgan Stanley zur Qualität von Sicherheiten bei Private-Credit-Krediten; ausgelöst wurde die Prüfung unter anderem durch Abschreibungen von JPMorgan im März auf von KI-Konkurrenz bedrohte Software-Kredite. Auch die EZB weitet ihre eigene Untersuchung zu Private-Credit-Engagements von Banken aus." },
          { tag: "fakt", text: "SEC-Vertreter mahnten Private-Credit-Manager und Wirtschaftsprüfer zuletzt, ihre Bewertungspraxis zu verbessern; fehlende Marktdaten entschuldigten keine schwache Bewertungsarbeit.",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Blue-Owl-Aktie weiterhin deutlich unter ihrem Allzeithoch notiert, während Rücknahmen im gesamten BDC-Sektor ein Rekordniveau erreichen und sowohl Fed als auch SEC ihre Prüfungen ausweiten, zeigt, dass die Debatte um die Verlässlichkeit von Private-Credit-Bewertungen anhält." }
        ]}
      ],
      reaction: "Die Bewertungsdebatte ergänzt die Fragen zu Dealaktivität und Fremdfinanzierung bei den M&A-Themen in Meldung 12 sowie die Zinslage in Meldung 2.",
      terms: ["nav", "default-rate", "bdc", "pik"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:deal-risks", "chain:rates-to-credit"],
      widget: "sofr",
      sources: [
        { title: "stockanalysis.com: Blue Owl Capital (OWL) – Aktienkurs und Kennzahlen", url: "https://stockanalysis.com/stocks/owl/" },
        { title: "Bloomberg: Blue Owl stock closes at a record low amid private-credit exodus", url: "https://www.bloomberg.com/news/articles/2026-04-06/blue-owl-stock-closes-at-a-record-low-amid-private-credit-exodus" },
        { title: "Benzinga: Blue Owl stock at risk as private credit giant caps withdrawals amid surging outflows", url: "https://www.benzinga.com/markets/equities/26/10/62152913/blue-owl-stock-at-risk-as-private-credit-giant-caps-withdrawals-amid-surging-outflows" },
        { title: "AltsWire: Nontraded BDC outflows exceed inflows for first time", url: "https://altswire.com/nontraded-bdc-outflows-exceed-inflows-for-first-time-as-q1-fundraising-drops-59-year-over-year/" },
        { title: "Benzinga: Fed visits banks in private-credit risk review", url: "https://www.benzinga.com/markets/private-markets/26/10/62206396/fed-visits-jpmorgan-wells-fargo-barclays-in-private-credit-risk-review" }
      ]
    },

    /* 14 TECHNOLOGIE: CXMT-CHIPAUSVERKAUF/OPENAI/KI-BLASE/NVIDIA/SPACEX */
    {
      id: "ki-blase-cxmt-openai-dalio-nvidia-spacex-10-14", cats: ["tech"], when: "CXMT-Kurssturz 12.10. · Asien-Ausverkauf 13.10./Erholung 14.10. · OpenAI-Umsatzkorrektur 08.10. · Dalio-Warnung 07.10. · Nvidia/Reflection-Gespräche seit 11.10.2026",
      headline: "Speicherchip-Ausverkauf in Asien ebbt am Mittwoch ab, OpenAIs Umsatzkorrektur und Ray Dalios Blasen-Warnung befeuern weiter die KI-Debatte",
      sec30: "Der chinesische Speicherchip-Hersteller CXMT meldete Fortschritte bei einem dichteren DRAM-Zelldesign; die CXMT-Aktie fiel am Montag um 7,79 %, am Dienstag folgte ein Ausverkauf bei asiatischen Chipwerten (Kospi über −7 %, Samsung und SK Hynix −8 bis −9 %), der sich am Mittwoch teilweise wieder erholte. Parallel sorgt ein Financial-Times-Bericht vom 08.10. über OpenAIs tatsächliche annualisierte Umsatzrate von rund 50 Mrd. Dollar (statt der zuvor kursierenden 68 bis 70 Mrd. Dollar) weiter für Diskussionen; OpenAI verhandelt über eine Finanzierungsrunde von mindestens 30 Mrd. Dollar bei 1,4 Billionen Dollar Bewertung. Investor Ray Dalio bekräftigte am 07.10. seine Warnung vor einer KI-Blase, Nvidia-Chef Jensen Huang widersprach. Nvidia führt zudem Gespräche über eine engere Verbindung mit dem Start-up Reflection AI, SpaceX sucht rund 40 Mrd. Dollar Fremdfinanzierung für den Kauf von Nvidia-Chips.",
      blocks: [
        { h: "Was löste den Ausverkauf bei asiatischen Chipwerten aus, und wie erholten sie sich?", items: [
          { tag: "fakt", text: "Der chinesische Speicherchip-Hersteller ChangXin Memory Technologies (CXMT) meldete Fortschritte bei einem dichteren DRAM-Zelldesign und plant, entsprechenden Server-Speicher bis Jahresende auszuliefern. Die CXMT-Aktie fiel am Montag, dem ersten Handelstag nach der Feiertagspause, um 7,79 % – der größte Tagesverlust seit dem Börsengang im Juli.",
            ask: [{ label: "Wie hängt das mit der Markterholung am Mittwoch zusammen?", ref: "s:1" }] },
          { tag: "unbestaetigt", text: "Am Dienstag fiel der Kospi um mehr als 7 %, Samsung Electronics um rund 7,7 bis 8 %, SK Hynix um rund 8,8 bis 9 %; am Mittwochmorgen erholten sich beide Werte um jeweils rund 2 bis 3 %, der Nikkei stieg um 0,6 %." }
        ]},
        { h: "Wie erklärt sich die Diskrepanz bei OpenAIs Umsatzzahlen?", items: [
          { tag: "fakt", text: "Laut einem Financial-Times-Bericht vom 08.10. teilte OpenAI potenziellen Investoren mit, die annualisierte Umsatzrate liege bei rund 50 Mrd. Dollar – deutlich unter der zuvor kursierenden Zahl von 68 bis 70 Mrd. Dollar. Als Grund werden unterschiedliche Bilanzierungsmethoden bei Partner- und Cloud-Umsätzen im Vergleich zu Anthropic genannt. Die Diskrepanz löste am 08.10. einen Kursrückgang bei KI-nahen Aktien wie Nvidia, Oracle und CoreWeave aus." },
          { tag: "fakt", text: "OpenAI verhandelt weiterhin über eine Finanzierungsrunde von mindestens 30 Mrd. Dollar bei einer Bewertung von rund 1,4 Billionen Dollar, mit Abu Dhabis MGX und BlackRock als frühen Ankerinvestoren." }
        ]},
        { h: "Welche neuen Blasen-Warnungen und Gegenstimmen gibt es?", items: [
          { tag: "position", text: "Bridgewater-Gründer Ray Dalio sagte am 07.10. in Singapur, KI zeige „alle Merkmale einer klassischen Blase”, die kurz vor dem Kollaps stehe: „We're in the part of the cycle that is before that but approaching that. I think we're close to that.” Als mögliche Auslöser nannte er steigende Verschuldung und steigende Zinsen.",
            ask: [{ label: "Warum warnen Analysten vor einer KI-Blase?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Nvidia-Chef Jensen Huang widersprach laut einem durchgesickerten internen Treffen den Blasen-Sorgen und beschrieb eine „No-win-Situation”: „If we delivered a bad quarter, it is evidence there's an AI bubble. If we delivered a great quarter, we are fueling the AI bubble.”" }
        ]},
        { h: "Was ist bei Nvidia und der KI-Infrastruktur-Finanzierung neu?", items: [
          { tag: "unbestaetigt", text: "Nvidia führt seit dem 11.10. frühe Gespräche über eine Übernahme, einen Acquihire oder eine größere Investition in das KI-Start-up Reflection AI, das zuletzt mit 25 Mrd. Dollar bewertet wurde und an dem Nvidia bereits mit rund 800 Mio. Dollar beteiligt ist.",
            ask: [{ label: "Was ist damit gemeint, dass Finanzierung „zirkulär” wird?", ref: "e:circular-financing" }] },
          { tag: "fakt", text: "SpaceX sucht laut Financial-Times-Berichten rund 40 Mrd. Dollar Fremdfinanzierung (angeführt von Apollo Global Management, davon rund 10 Mrd. Dollar Bankkredite und 30 Mrd. Dollar Anleihen), um Nvidia-KI-Chips zu kaufen; ein Abschluss wird für 2027 erwartet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass ein einzelnes technisches Signal aus China binnen Tagen zu einem deutlichen Ausverkauf und einer teilweisen Erholung bei asiatischen Chipwerten führte, während gleichzeitig renommierte Investoren und Nvidias eigener Chef öffentlich gegensätzliche Einschätzungen zur Tragfähigkeit der milliardenschweren KI-Investitionen vertreten, zeigt, wie unterschiedlich dieselbe Datenlage gedeutet werden kann. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Chip-Thematik knüpft an die Markteinordnung in Meldung 1 an.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Caixin Global: CXMT shares suffer biggest drop since July IPO", url: "https://www.caixinglobal.com/2026-10-09/cxmt-shares-suffer-biggest-drop-since-july-ipo-102491581.html" },
        { title: "NBC News: South Korea's Kospi index sinks more than 7%", url: "https://www.nbcnews.com/world/asia/south-korea-kospi-index-sinks-semiconductor-share-sell-ai-boom-worries-rcna603143" },
        { title: "Axios: OpenAI annualized revenue $20 billion less than previously reported", url: "https://www.axios.com/2026/10/08/openai-50-billion-arr-anthropic-revenue-accounting" },
        { title: "Yahoo Finance: Ray Dalio warns AI bubble is nearing a bursting point", url: "https://finance.yahoo.com/technology/ai/articles/ray-dalio-warns-ai-bubble-115236131.html" },
        { title: "SiliconAngle: Nvidia reportedly in early talks to buy, acquihire or invest more in Reflection AI", url: "https://siliconangle.com/2026/10/11/nvidia-reportedly-in-early-talks-to-buy-acqui-hire-or-invest-more-in-reflection-ai/" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gasspeicher-kwkg-stromsteuer-eeg-opec-10-14", cats: ["energy"], when: "Gasspeicherstand 13.10. · KWKG-Kabinettstermin verschoben 14.10. · Stromsteuer-Ankündigung 12.10. · OPEC+-Entscheidung Anfang Okt. 2026",
      headline: "Deutsche Gasspeicher bei rund 60 Prozent, Kraft-Wärme-Kopplungsgesetz verschiebt sich, OPEC+ hält Fördermenge zweiten Monat in Folge unverändert",
      sec30: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.10. bei 60,3 % (149,04 TWh) – rund 17,3 Prozentpunkte unter dem Vorjahreswert; das gesetzliche Ziel von 80 % zum 01.11. wird damit deutlich verfehlt, die Bundesnetzagentur bezeichnet die Versorgung dennoch als „stabil”. Das für die heutige Kabinettssitzung angemeldete Kraft-Wärme-Kopplungsgesetz wurde laut Berichten nicht wie geplant beschlossen, da erst Eckpunkte vorliegen. Zur von Kanzler Merz angekündigten Stromsteuer-Senkung für alle Verbraucher kursieren Entlastungsschätzungen von 40 bis rund 100 Euro pro Haushalt und Jahr, ohne festes Umsetzungsdatum. Die OPEC+ beließ die Fördermenge für November gegenüber Oktober unverändert – der zweite Monat in Folge ohne Erhöhung.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 13.10. bei 60,3 % (149,04 TWh); nach einer anderen Quelle (AGSI+) lag der Wert am 09.10. bei 59,8 %. Das gesetzliche Ziel liegt bei 80 % zum 01.11.; der Füllstand liegt rund 17,3 Prozentpunkte unter dem Vorjahreswert.",
            ask: [{ label: "Was ist TTF?", ref: "t:ttf" }] },
          { tag: "position", text: "Die Bundesnetzagentur erklärte: „Die Gasversorgung in Deutschland ist stabil. Die Versorgungssicherheit ist gewährleistet.” Zugleich räumte die Behörde ein, die Füllstände lägen „erheblich niedriger als in vergleichbaren Vorjahreszeiträumen”, und rechnet zum Ende des Winters mit einem „relativ niedrigen Füllstand”." }
        ]},
        { h: "Was ist mit dem Kraft-Wärme-Kopplungsgesetz (KWKG)?", items: [
          { tag: "unbestaetigt", text: "Das Bundeswirtschaftsministerium hatte das KWKG für die Kabinettssitzung heute, 14.10., angemeldet; laut Berichten wurde es jedoch nicht wie geplant beschlossen, da bislang nur Eckpunkte (veröffentlicht Ende September) vorliegen: Verlängerung des Förderrahmens bis 2035, Verdopplung des Fördervolumens von 750 Mio. auf 1,5 Mrd. Euro pro Jahr, kürzere förderfähige Vollbenutzungsstunden (30.000 auf 20.000), ausgeglichen durch um 50 % höhere Zuschlagssätze." },
          { tag: "position", text: "Die Branchenverbände BDEW und VKU fordern eine Verlängerung der Förderung bis mindestens 2038 statt nur bis 2035." }
        ]},
        { h: "Was ist der Stand bei der Stromsteuer-Senkung?", items: [
          { tag: "position", text: "Nach der CDU-Klausur kündigte Kanzler Merz an, die Stromsteuer auch für Privathaushalte auf das EU-Mindestniveau zu senken; dies solle nach seinen Worten auch die „Glaubwürdigkeitslücke” schließen, die durch die bisher nur für Industrie und Landwirtschaft umgesetzte Senkung entstanden sei." },
          { tag: "unbestaetigt", text: "Je nach Quelle würde eine Senkung von aktuell 2,05 Cent auf 0,1 Cent je Kilowattstunde (netto) einen Durchschnittshaushalt mit rund 3.500 kWh Jahresverbrauch um 40 bis rund 100 Euro pro Jahr entlasten; die Kosten der vollständigen Ausweitung werden mit zusätzlich rund 5 Mrd. Euro pro Jahr angegeben. Ein festes Umsetzungsdatum liegt nicht vor.",
            ask: [{ label: "Mehr zur Ankündigung und zu den politischen Reaktionen", ref: "s:7" }] }
        ]},
        { h: "Wie ist der Stand beim Ölpreis und bei OPEC+?", items: [
          { tag: "fakt", text: "Die OPEC+ beließ die Fördermenge für November gegenüber Oktober unverändert – der zweite Monat in Folge ohne Erhöhung. Als Grund nennen Berichte, dass die tatsächliche Förderung mit zuvor beschlossenen Quotenerhöhungen wegen Beeinträchtigungen durch die Straße von Hormus nicht Schritt halten konnte.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] },
          { tag: "unbestaetigt", text: "Der Brent-Preis bewegte sich dennoch je nach Quelle zwischen rund 104,7 und 107,3 Dollar; als Treiber nennen Berichte vor allem die Spannungen am Golf und nicht die Förderpolitik (Meldung 9)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Gasspeicher weiterhin deutlich unter dem gesetzlichen Zwischenziel liegen und ein zentrales Energiegesetz sich verschiebt, während gleichzeitig eine neue Stromsteuer-Entlastung ohne festes Datum und Finanzierungsnachweis angekündigt wird, zeigt, wie eng Versorgungssicherheit, Gesetzgebungsverfahren und die Energiepreis-Debatte derzeit miteinander verknüpft sind." }
        ]}
      ],
      reaction: "Die angespannte Gasspeicherlage und der von geopolitischen Spannungen geprägte Ölpreis ergänzen die Lage am Golf in Meldung 9; die Stromsteuer-Ankündigung hängt mit den innenpolitischen Themen in Meldung 7 zusammen.",
      terms: ["ttf", "lng", "opec-plus"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation"],
      sources: [
        { title: "Bundesnetzagentur: Aktuelle Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "zfk.de: Energiegesetze-Ticker Deutschland", url: "https://www.zfk.de/politik/deutschland/energiegesetze-ticker-deutschland-reiche" },
        { title: "Solarserver: BMWE legt Eckpunkte für KWKG-Novelle vor", url: "https://www.solarserver.de/2026/09/23/bmwe-legt-eckpunkte-fuer-kwkg-novelle-vor/" },
        { title: "Handelsblatt: Union – Merz kündigt günstigeren Strom an und kämpft ums Vertrauen", url: "https://www.handelsblatt.com/politik/deutschland/union-merz-kuendigt-guenstigeren-strom-an-und-kaempft-ums-vertrauen/100260818.html" },
        { title: "Handelsblatt: OPEC+ – Fördermenge für Rohöl bleibt konstant", url: "https://www.handelsblatt.com/finanzen/maerkte/devisen-rohstoffe/opec-plus-foerdermenge-fuer-rohoel-bleibt-konstant/28846300.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Dienstag gab der Dow Jones um 0,35 % nach, S&P 500 (−0,02 %) und Nasdaq (−0,15 %) blieben nahezu unverändert; der DAX fiel um 0,07 % auf 25.259,90 Punkte." },
    "why-markets-move": { tag: "unbestaetigt", story: 1, text: "Am Dienstag fielen asiatische Technologiewerte stark, nachdem der chinesische Speicherchip-Hersteller CXMT Fortschritte bei einem neuen DRAM-Design meldete; am Mittwochmorgen erholten sie sich teilweise wieder." },
    "yield-meaning": { tag: "unbestaetigt", story: 2, text: "Die US-10-Jahres-Rendite lag am Dienstag bei rund 5,21 bis 5,22 % – leicht unter dem Anfang-Oktober-Hoch von bis zu 5,36 %." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold notierte je nach Quelle und Tageszeitpunkt zwischen rund 4.155 und 4.182 Dollar je Feinunze; anhaltende geopolitische Unsicherheit stützte die Nachfrage als sicherer Hafen." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs stieg von 1,1181 Dollar am Montag auf 1,1188 Dollar am Dienstag." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin fiel am Dienstag zwischenzeitlich unter 81.000 Dollar, erholte sich aber bis Mittwochmorgen auf rund 83.300 Dollar." },
    "inflation-what": { tag: "fakt", story: 5, text: "Die finale deutsche Inflationsrate für September wurde am 13.10. bei +3,3 % bestätigt – der höchste Wert seit Dezember 2023; die US-Inflationsdaten für September werden erst heute veröffentlicht." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein 5-Monats-Tief." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Die Fed hat ihren Leitzins am 16.09. erstmals seit 2023 angehoben (auf 3,75 bis 4,00 %); Fed-Mitglieder senden weiterhin unterschiedliche Signale zu einem weiteren Schritt, während die EZB ihren Einlagensatz bei 2,50 % hält und laut einer Umfrage am 29.10. eher pausieren dürfte." },
    "fed-hike": { tag: "unbestaetigt", story: 4, text: "Die eingepreiste Wahrscheinlichkeit, dass die Fed am 27./28.10. den Leitzins unverändert lässt, liegt laut Berichten bei rund 80 bis 82 %." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Die EZB hält ihren Einlagensatz aktuell bei 2,50 %; die nächste Zinsentscheidung fällt am 29.10., eine Mehrheit der befragten Ökonomen erwartet dabei eine Pause." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Die Brent-Preisangaben für Dienstag/Mittwoch reichen je nach Quelle von rund 104,7 bis 107,3 Dollar; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Arbeitsministerin Bärbel Bas trat Anfang Oktober von ihren Ämtern zurück; ein Kabinettsbeschluss zur Rentenreform wird weiterhin bis spätestens Jahresende angestrebt, die Bundestagsverabschiedung bleibt auf das Frühjahr 2027 verschoben." },
    "rente-basics": { tag: "fakt", story: 6, text: "SPD-Fraktionschef Miersch forderte am 11.10. zusätzliche Gespräche vor dem Kabinettsbeschluss zur Rente; CDU/CSU-Vize-Fraktionschef Winkel wies dies zurück." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "SPD und Grüne unterbrachen am 13.10. die Berliner Koalitionssondierungen mit der Linken, nachdem deren Fraktion die umstrittene Politikerin Vanessa Emde aufgenommen hatte." },
    "coalition-majority": { tag: "fakt", story: 7, text: "Die Vergesellschaftung großer privater Wohnungsbestände bleibt zentraler ungeklärter Streitpunkt der Berliner Sondierungen; die SPD lehnt sie als „rote Linie” ab, die Linke drängt auf Umsetzung." },
    "hormuz": { tag: "fakt", story: 9, text: "Die britische Marinebehörde UKMTO zählte im Oktober 18 Angriffsmeldungen rund um die Straße von Hormus – ein neuer Höchststand; allein am 11.10. wurden sechs Schiffe getroffen." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "Iranische Vertreter behaupteten, die Straße von Hormus sei „geschlossen”; US-Außenminister Rubio widersprach und erklärte, der Ölfluss liege fast auf Vorkriegsniveau." },
    "defence-order": { tag: "unbestaetigt", story: 11, text: "Japans Politiker Itsunori Onodera besuchte Kyjiw, um Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine anzustoßen; eine Entscheidung steht aus." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Rheinmetall, Renk und Hensoldt gaben am Dienstag alle drei nach; Analysten bleiben bei Kurszielen und Einschätzungen weiterhin stark gespalten." },
    "nato-target": { tag: "fakt", story: 11, text: "Deutschland meldete der NATO für 2026 Rekord-Verteidigungsausgaben von 124,7 Mrd. Euro (2,69 % des BIP) und liegt damit weiterhin unter dem 3,5-%-Ziel." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Nach Carlyles Rückzug positioniert sich ein Konsortium um Todd Boehly für die rund 22 Mrd. Dollar schweren internationalen Lukoil-Vermögenswerte; die OFAC-Verhandlungslizenz läuft am 22.10. aus." },
    "take-private-why": { tag: "fakt", story: 12, text: "Cable One bestätigte am 12.10., dass eine gerichtliche Verfügung die Mega-Broadband-Übernahme weiter blockiert, meldete aber Fortschritte bei einer alternativen Finanzierung." },
    "deal-risks": { tag: "fakt", story: 13, text: "Die Federal Reserve Bank of New York befragt seit dem Frühjahr 2026 Großbanken zur Qualität von Sicherheiten bei Private-Credit-Krediten; auch die EZB weitet ihre eigene Prüfung aus." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Die Blue-Owl-Aktie bewegte sich am Dienstag zwischen 9,08 und 9,45 Dollar – rund 68 % unter ihrem Allzeithoch; Rücknahmeanträge in großen Fonds liegen weiterhin deutlich über der üblichen 5-%-Grenze." },
    "pc-rates": { tag: "unbestaetigt", story: 13, text: "Ein konkretes Beispiel für Bewertungsrisiken ist Blue Owls nachrangiges Darlehen an den Verpackungskonzern Loparex, das im Rahmen einer Restrukturierung weitgehend ausgelöscht zu werden droht." },
    "ai-capex": { tag: "position", story: 14, text: "Bridgewater-Gründer Ray Dalio bekräftigte am 07.10. seine Warnung, die KI-Welle sei eine „klassische Blase”; Nvidia-Chef Jensen Huang widersprach und beschrieb stattdessen eine „No-win-Situation” für sein Unternehmen." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Nvidia führt seit dem 11.10. frühe Gespräche über eine engere Verbindung mit dem KI-Unternehmen Reflection AI, das zuletzt mit 25 Mrd. Dollar bewertet wurde." },
    "circular-financing": { tag: "fakt", story: 14, text: "SpaceX sucht rund 40 Mrd. Dollar Fremdfinanzierung, angeführt von Apollo Global Management, um Nvidia-KI-Chips zu kaufen." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 13.10. bei 60,3 % – deutlich unter dem gesetzlichen Zwischenziel; Kanzler Merz kündigte zusätzlich eine Stromsteuer-Senkung für alle Verbraucher an." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Die OPEC+ beließ die Fördermenge für November gegenüber Oktober unverändert – der zweite Monat in Folge ohne Erhöhung." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie schlossen Dow Jones, S&P 500 und Nasdaq am Dienstag, 13.10.2026, in New York?",
      options: [
        "Alle drei Indizes schlossen deutlich im Plus",
        "Der Dow fiel leicht, S&P 500 und Nasdaq blieben fast unverändert bzw. gaben leicht nach",
        "Alle drei Indizes schlossen deutlich im Minus",
        "Die Börsen blieben wegen eines Feiertags komplett geschlossen"
      ],
      answer: 1,
      explain: "Der Dow Jones fiel um 0,35 %, der S&P 500 gab mit −0,02 % kaum nach, die Nasdaq verlor 0,15 % – belastet von gemischten Bankbilanzen und anhaltender Schwäche bei Speicherchip-Werten."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 9,
      q: "Wie viele Schiffe wurden laut UKMTO allein am 11.10.2026 in der Region um die Straße von Hormus getroffen?",
      options: [
        "Keins",
        "Zwei",
        "Sechs",
        "Über zwanzig"
      ],
      answer: 2,
      explain: "UKMTO zählte am 11.10. allein sechs getroffene Schiffe (fünf Tanker, ein Containerschiff) – Teil eines Höchststands von 18 Angriffsmeldungen im Oktober insgesamt."
    },
    {
      topic: "Wirtschaft", type: "Zusammenhang", story: 4,
      q: "Angenommen, die heute veröffentlichten US-Inflationsdaten für September fallen deutlich höher aus als die vom Markt erwarteten 3,6 bis 3,7 %. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Eine höhere eingepreiste Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung am 27./28.10.",
        "Eine automatische Absage der FOMC-Sitzung",
        "Eine sofortige Zinssenkung der EZB",
        "Ein automatischer Anstieg der deutschen Gasspeicherfüllstände"
      ],
      answer: 0,
      explain: "Höhere Inflationsdaten gelten laut Marktbeobachtern als Argument für weiteren Zinsdruck, was die eingepreiste Wahrscheinlichkeit einer weiteren Fed-Erhöhung tendenziell erhöhen würde; ein fester Automatismus für Sitzungstermine, EZB-Entscheidungen oder Gasspeicher besteht dadurch nicht."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Was nannte Bärbel Bas als Gründe für ihren Rücktritt als SPD-Co-Vorsitzende und Bundesarbeitsministerin?",
      options: [
        "Einen Korruptionsvorwurf gegen sie selbst",
        "Eine Abwahl durch den Bundestag",
        "Trauer über ihre verstorbene Stieftochter und persönliche Angriffe, auch aus dem Koalitionspartner",
        "Einen Wechsel zur EU-Kommission"
      ],
      answer: 2,
      explain: "Bas erklärte, sie könne derzeit nicht die Kraft aufbringen, Regierungs- und Parteiarbeit vollumfänglich wahrzunehmen, und nannte Trauer über den Tod ihrer Stieftochter sowie persönliche Angriffe „auch aus den Reihen des Koalitionspartners” als Gründe."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Angenommen, die Rücknahmeanträge bei großen BDC-Fonds blieben weiterhin über der üblichen 5-Prozent-Grenze, statt zurückzugehen. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Ein automatischer Rückgang der US-Zinsen",
        "Anhaltender Druck auf gedeckelte Rücknahmen und auf das Vertrauen in Bewertungen, ohne dass ein fester Automatismus besteht",
        "Eine sofortige Auflösung aller betroffenen Fonds durch die SEC",
        "Eine automatische Verdopplung der Ausfallraten"
      ],
      answer: 1,
      explain: "Anhaltend hohe Rücknahmeanträge erhöhen laut Berichten tendenziell den Druck auf gedeckelte Rücknahmen und auf das Vertrauen in die zugrunde liegenden Bewertungen; ein fester Automatismus für Zinsentscheidungen, SEC-Eingriffe oder Ausfallraten besteht dadurch nicht."
    }
  ]
};
