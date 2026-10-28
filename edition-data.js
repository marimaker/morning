// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-28",
  dateLabel: "Mittwoch, 28. Oktober 2026",
  updatedLabel: "Recherchestand 28.10.2026",
  marketNote: "Diese Ausgabe entsteht am Mittwochmorgen, 28.10.2026, vor Eröffnung der europäischen Börsen (Xetra startet 9 Uhr MEZ, die Wall Street 15:30 MEZ). Für DAX, Euro Stoxx 50, Dow Jones, S&P 500, Nasdaq Composite, den Halbleiterindex SOX sowie für die Renditen von US- und Bundesanleihen gilt deshalb weiterhin der Schlussstand von Dienstag, 27.10.2026, da zum Redaktionsschluss noch keine Kassakurse für Mittwoch vorliegen; Vorbörsen-Indikationen (Futures) werden ausdrücklich als vorläufig gekennzeichnet. Gold-, Öl- und Bitcoin-Notierungen handeln dagegen durchgehend; hier wird der aktuellste verfügbare Stand gezeigt. Heute, Mittwoch, entscheidet die US-Notenbank Fed um 14 Uhr Eastern Time (19 Uhr MEZ, Pressekonferenz 19:30 Uhr MEZ) über den Leitzins; nach US-Börsenschluss legen zudem Microsoft und Alphabet Quartalszahlen vor, Amazon folgt morgen. Die EZB entscheidet morgen, 29.10., um 14:15 MEZ. Beim Ölpreis (Brent/WTI) weichen verfügbare Quellen für Dienstag und Mittwochmorgen deutlich voneinander ab; Abweichungen sind entsprechend gekennzeichnet (Meldung 14).",

  top: [
    { text: "DAX (25.590,77 Punkte, +0,71 %), Euro Stoxx 50 (6.164,69 Punkte, +0,79 %), S&P 500 (7.722,60 Punkte, +0,60 %) und Nasdaq Composite (26.477,81 Punkte, +1,18 %) schlossen den Dienstag im Plus, der Dow Jones legte nur minimal zu (52.377,57 Punkte, +0,03 %); der Halbleiterindex SOX sprang um 3,60 % auf 11.482,5 Punkte. Vorbörsen-Indikationen zeigen für Mittwoch eine leichte Zurückhaltung vor der Fed-Entscheidung am Abend und den Quartalszahlen von Microsoft und Alphabet.", ref: "s:1" },
    { text: "Die US-Notenbank Fed entscheidet heute, 28.10., um 14 Uhr Eastern Time (19 Uhr MEZ) über den Leitzins. Laut CME FedWatch liegt die eingepreiste Wahrscheinlichkeit für eine erneute Pause bei rund 90 %, für die Dezember-Sitzung preisen Marktbeobachter dagegen mit rund 80 % Wahrscheinlichkeit eine weitere Erhöhung ein – ein ungewöhnliches Muster, da die Fed im September bereits überraschend angehoben hatte.", ref: "s:2" },
    { text: "Die iranische Revolutionsgarde erklärte die Straße von Hormus am 26.10. erneut für „geschlossen” und drohte Schiffen, die sich nicht mit iranischen Stellen abstimmten; Huthi-Rebellen meldeten zudem neue Angriffe auf saudische Ziele. Der Ölpreis bewegte sich entsprechend volatil zwischen rund 108 und 116 Dollar je Barrel (Brent), auch wegen Präsident Trumps befristeter Lockerung von Russland-Sanktionen.", ref: "s:8" },
    { text: "BASF-Chef Markus Kamieth äußerte sich am 28.10. bei der Vorlage der Quartalszahlen erstmals öffentlich zur möglichen Evonik-Übernahme, bestätigte den seit Tagen kursierenden Preis von 24 Euro je Aktie aber nicht. Bei Tesla und SpaceX prüfen laut Bloomberg weiterhin unabhängige, von Elon Musk unabhängige Ausschüsse eine mögliche Fusion.", ref: "s:11" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.590,77", change: "+0,71 % (Di-Schluss)", dir: "up", asof: "Schluss Di 27.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Mittwoch-Vorbörse", text: "Laut Vorbörsen-Indikationen notierte der DAX-Future am Mittwochmorgen bei rund 25.555 Punkten – leicht niedriger als der Dienstagsschluss, da sich Anleger vor der Fed-Entscheidung am Abend zurückhaltend zeigten." }
      ],
      moved: {
        intro: "Als Hintergrund für Dienstag nennen Berichte:",
        items: [
          "Der nach Reuters-Angaben um rund 1 % auf etwa 108,59 Dollar gefallene Ölpreis nährte Hoffnungen auf nachlassenden Inflationsdruck; mehr dazu in Meldung 14.",
          "Die Erholung bei Technologie- und Chipwerten (Halbleiterindex SOX +3,6 %) vor den US-Quartalszahlen stützte die Stimmung europaweit; mehr dazu in Meldung 13."
        ]
      },
      important: [
        { area: "Fed", text: "Die Fed-Entscheidung am Mittwochabend wird in Meldung 2 behandelt.", ref: "s:2" }
      ],
      source: { title: "ad-hoc-news.de: Dax startet bei 25.555 Punkten vor Fed-Entscheid zurückhaltend", url: "https://www.ad-hoc-news.de/boerse/news/ueberblick/dax-startet-bei-25-555-punkten-vor-fed-entscheid-zurueckhaltend/70424779" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.164,69", change: "+0,79 % (+48,46 Pkt., Di-Schluss)", dir: "up", asof: "Schluss Di 27.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Einzelwerte", text: "Infineon legte laut Berichten rund 4,7 bis 4,8 % zu, während Mercedes-Benz nach einer gesenkten Prognose rund 3,1 bis 3,9 % verlor." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der gefallene Ölpreis und die Erholung bei Chipwerten stützten die Stimmung.",
          "Die seit dem Moody's-Entscheid entspanntere französische Risikoprämie wirkte zusätzlich unterstützend; mehr dazu in Meldung 4."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB-Zinsentscheidung morgen und die französische Risikoprämie werden in Meldung 4 behandelt.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 geht mit Fed-Fokus und 0,8 Prozent Plus in den Mittwoch", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-geht-mit-fed-fokus-und-0-8-prozent-plus-in-den-mittwoch/70424776" }
    },
    "sp500": {
      label: "S&P 500", value: "7.722,60", change: "+0,60 % (Di-Schluss)", dir: "up", asof: "Schluss Di 27.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Abweichende Angabe", text: "Eine andere Quelle (247wallst.com) nennt für Dienstag abweichend rund 7.732 Punkte statt 7.722,60 Punkte – beide Angaben weisen in dieselbe Richtung." },
        { label: "Volatilitätsindex VIX", text: "Der VIX fiel am Dienstag auf rund 18,4 Punkte (teils auch 17,7 Punkte im Tagesverlauf genannt), nach rund 19,3 Punkten in der Vorwoche – ein Hinweis auf nachlassende Nervosität vor der Fed-Entscheidung." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Dienstag:",
        items: [
          "Sinkende Ölpreise und die Erwartung einer erneuten Fed-Zinspause stützten die Stimmung.",
          "Anleger positionierten sich vor den Quartalszahlen von Microsoft und Alphabet am Mittwochabend sowie Amazon am Donnerstag; mehr dazu in Meldung 13."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Fed-Entscheidung heute Abend in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "AP via ktvb.com: How major US stock indexes fared Tuesday", url: "https://www.ktvb.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-tuesday-10272026/616-aa76019b-b218-4bd1-956f-e9226e74551b" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "26.477,81", change: "+1,18 % (Di-Schluss)", dir: "up", asof: "Schluss Di 27.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Chip-Werte", text: "Der Halbleiterindex SOX legte am Dienstag um rund 3,6 % auf 11.482,5 Punkte zu, unter anderem getrieben von Broadcom (+4 %) nach Bekanntwerden einer 63-Mrd.-Dollar-Finanzierung für KI-Chips für Anthropic; mehr dazu in Meldung 13." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Dienstag:",
        items: [
          "Die Tech-Rally vor den Quartalszahlen von Microsoft und Alphabet am Mittwochabend trieb den Index."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Meta, Nvidia und Broadcom/Anthropic in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "AP via ktvb.com: How major US stock indexes fared Tuesday", url: "https://www.ktvb.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-tuesday-10272026/616-aa76019b-b218-4bd1-956f-e9226e74551b" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1150", change: "niedriger als 1,1188 am Montag", dir: "down", asof: "EZB-Referenzkurs Di 27.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Mittwoch", text: "Laut einer Vorbörsen-Meldung notierte der Euro am Mittwochmorgen bereits bei rund 1,1123 Dollar; eine offizielle EZB-Notierung für Mittwoch lag zum Redaktionsschluss noch nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung wurde in den verfügbaren Quellen keine ausdrückliche Begründung genannt; Berichte verweisen auf die näher rückende Fed-Entscheidung am Abend."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Sitzung morgen und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "news.de: Eurokurs gefallen, EZB-Referenzkurs 1,1150 US-Dollar", url: "https://www.news.de/wirtschaft/860135698/eurokurs-gefallen-ezb-referenzkurs-1-1150-us-dollar-boerse-news-der-dpa-aktuell-zu-waehrung/1/" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,99 %", change: "nahezu unverändert ggü. Vorwoche", dir: "flat", asof: "Stand Di 27.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,99 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,99 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 % (seit der Erhöhung am 16.9.2026); die Rendite liegt damit knapp einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anleger warten auf die Fed-Entscheidung am Mittwochabend; laut CME FedWatch liegt die eingepreiste Wahrscheinlichkeit für eine Zinspause bei rund 90 %, für die Dezember-Sitzung wird dagegen mit rund 80 % Wahrscheinlichkeit eine erneute Erhöhung eingepreist."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur heutigen Fed-Entscheidung in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Forbes Advisor: Treasury Rates Today", url: "https://www.forbes.com/advisor/investing/treasury-rates/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,35–3,37 %", change: "leicht niedriger als Montag", dir: "down", asof: "Stand Di 27.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Frankreichs 10-Jahres-Rendite lag am Dienstag bei rund 4,93 bis 4,98 %; der Risikoaufschlag zu Bundesanleihen (OAT/Bund-Spread) liegt bei rund 156 Basispunkten – nach einem 24-Jahres-Hoch von rund 178 Basispunkten am 22.10. weiter leicht rückläufig." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Euro-Bund-Future legte am Dienstag leicht zu (+0,07 % auf 122,07 Punkte), vor der EZB-Sitzung morgen und der Fed-Entscheidung heute Abend."
        ]
      },
      important: [
        { area: "Frankreich", text: "Mehr zur EZB-Sitzung und zur französischen Haushaltslage in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ARIVA.DE: Deutsche Anleihen – Leichte Kursgewinne", url: "https://www.ariva.de/news/deutsche-anleihen-leichte-kursgewinne-12183135" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.048–4.061 $", change: "uneinheitlich, tendenziell höher als Montag", dir: "up", asof: "Stand Di 27.10. bis Mi 28.10.26 früh", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.050 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Tagesverlauf", text: "Quellen nennen für Dienstag deutlich unterschiedliche Werte je Messzeitpunkt: Kitco rund 4.059 Dollar (16:45 Uhr Eastern Time, +42,80 Dollar), JM Bullion rund 4.061 Dollar (23:06 Uhr), CNBC am Morgen dagegen noch 4.023 Dollar. Eine Mittwochmorgen-Meldung nennt rund 4.048 Dollar (−0,4 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die insgesamt vorsichtigere Stimmung bei Anleihen und Risikoanlagen vor der Fed-Entscheidung am Abend wird als Hintergrund genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Entscheidung heute Abend in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Kitco: Gold Charts", url: "http://www.kitco.com/charts/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 108,59–115,51 $ (Quellen uneinheitlich)", change: "stark schwankend, siehe Meldung 14", dir: "up", asof: "Stand Mi 28.10.26 früh", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 110 bis 115 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Vormonat.",
      compare: [
        { label: "Dienstag", text: "Reuters berichtete für Dienstag einen Rückgang um rund 1 % auf etwa 108,59 Dollar, nachdem Präsident Trump Sanktionen und Zölle gegen Russland befristet gelockert hatte; andere Quellen nennen für denselben Tag abweichend Werte zwischen rund 109,67 und 115 Dollar – die Angaben schwanken stark je nach Messzeitpunkt und Quelle." },
        { label: "Mittwoch", text: "Am Mittwochmorgen erholte sich der Preis laut einer Meldung auf rund 115,51 Dollar (+1,4 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Rückgang am Dienstag wird mit der Spekulation auf zusätzliches russisches Angebot nach Trumps befristeter Sanktionslockerung begründet; mehr dazu in Meldung 7.",
          "Die Erholung am Mittwochmorgen wird damit begründet, dass Zweifel aufkamen, ob Russland die angekündigte Exportsteigerung tatsächlich liefern kann, während die Ukraine laut Berichten weiterhin russische Ölinfrastruktur angreift."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf und in der Straße von Hormus in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "ARIVA.DE: Ölpreise fallen – Trump lockert Russland-Sanktionen", url: "https://www.ariva.de/news/oelpreise-fallen-trump-lockert-russland-sanktionen-rsf-12172979" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 80.700–80.800 $", change: "leicht höher im Tagesverlauf", dir: "up", asof: "Stand Di 27.10.26 abends", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 80.000 bis 81.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf", text: "Bitcoin stieg am Dienstag von rund 79.756 Dollar am Morgen (8 Uhr Eastern Time) auf rund 80.700 bis 80.800 Dollar am Abend (20 Uhr Eastern Time)." },
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin deutlich unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung wurde kein spezifischer Einzelgrund genannt; Berichte verweisen auf die allgemein vorsichtige Stimmung bei Risikoanlagen vor der Fed-Entscheidung."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin for October 27, 2026", url: "https://fortune.com/article/price-of-bitcoin-10-27-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-dienstagsschluss-fed-tag-10-28", cats: ["markets"], when: "Schluss Di 27.10.2026 · Vorbörse Mi 28.10.2026 · Fed-Entscheidung heute Abend",
      headline: "DAX, Euro Stoxx 50 und US-Indizes schließen den Dienstag im Plus, Anleger zeigen sich vor der Fed-Entscheidung am Abend zurückhaltend",
      sec30: "Der DAX legte am Dienstag um 0,71 % auf 25.590,77 Punkte zu, der Euro Stoxx 50 um 0,79 % auf 6.164,69 Punkte. Bei den US-Indizes stieg der S&P 500 um 0,60 % auf 7.722,60 Punkte, die Nasdaq Composite um 1,18 % auf 26.477,81 Punkte; der Dow Jones legte nur minimal zu (+0,03 % auf 52.377,57 Punkte). Der Halbleiterindex SOX sprang um 3,60 % auf 11.482,5 Punkte, angetrieben unter anderem von Broadcom nach dessen Finanzierungsdeal mit Anthropic. Als Hintergrund nennen Berichte den gefallenen Ölpreis sowie eine Tech-Rally vor den Quartalszahlen von Microsoft und Alphabet am Mittwochabend und Amazon am Donnerstag. Vorbörsen-Indikationen zeigen für Mittwoch eine leichte Zurückhaltung vor der Fed-Entscheidung am Abend.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stieg am Dienstag um 0,71 % auf 25.590,77 Punkte, der Euro Stoxx 50 um 0,79 % (+48,46 Punkte) auf 6.164,69 Punkte. Bei Einzelwerten legte Infineon rund 4,7 bis 4,8 % zu, während Mercedes-Benz nach einer gesenkten Prognose rund 3,1 bis 3,9 % verlor.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte den gefallenen Ölpreis (Meldung 14) und die seit der Moody's-Entscheidung entspanntere französische Risikoprämie (Meldung 4)." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes?", items: [
          { tag: "fakt", text: "Der S&P 500 stieg um 0,60 % auf 7.722,60 Punkte (eine andere Quelle nennt abweichend rund 7.732 Punkte), die Nasdaq Composite um 1,18 % auf 26.477,81 Punkte, der Dow Jones nur minimal um 0,03 % auf 52.377,57 Punkte. Der Volatilitätsindex VIX fiel auf rund 18,4 Punkte, nach rund 19,3 Punkten in der Vorwoche.",
            ask: [{ label: "Mehr zur Fed-Entscheidung heute Abend", ref: "s:2" }] },
          { tag: "einordnung", text: "Sinkende Ölpreise und die Erwartung einer erneuten Fed-Zinspause stützten die Stimmung; Anleger positionierten sich zudem vor den Quartalszahlen von Microsoft und Alphabet." }
        ]},
        { h: "Wie entwickelte sich der Halbleiterindex SOX?", items: [
          { tag: "fakt", text: "Der SOX sprang am Dienstag um 3,60 % auf 11.482,5 Punkte; Berichte nennen Broadcom (+4 %) nach dessen 63-Mrd.-Dollar-Finanzierungsdeal für KI-Chips mit Anthropic als wichtigen Treiber.",
            ask: [{ label: "Mehr zu CoreWeave, Meta, Nvidia und Broadcom", ref: "s:13" }] }
        ]},
        { h: "Was zeigen die Vorbörsen-Indikationen für Mittwoch?", items: [
          { tag: "unbestaetigt", text: "Laut Vorbörsen-Indikationen notierte der DAX-Future am Mittwochmorgen bei rund 25.555 Punkten, leicht niedriger als der Dienstagsschluss. Als Grund nennen Berichte die Zurückhaltung von Anlegern vor der Fed-Entscheidung am Abend und den US-Quartalszahlen." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass europäische und US-Indizes den Dienstag trotz volatiler Ölpreise und einer bevorstehenden Fed-Entscheidung im Plus abschlossen, während sich die Vorbörse für Mittwoch bereits wieder zurückhaltender zeigt, verdeutlicht, wie stark die Stimmung derzeit von Einzelterminen wie der Fed-Sitzung und den Tech-Quartalszahlen abhängt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, Gold/Bitcoin/Bund-Rendite in Meldung 3, Technologie/CoreWeave/Meta/Nvidia in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ad-hoc-news.de: Dax startet bei 25.555 Punkten vor Fed-Entscheid zurückhaltend", url: "https://www.ad-hoc-news.de/boerse/news/ueberblick/dax-startet-bei-25-555-punkten-vor-fed-entscheid-zurueckhaltend/70424779" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 geht mit Fed-Fokus und 0,8 Prozent Plus in den Mittwoch", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-geht-mit-fed-fokus-und-0-8-prozent-plus-in-den-mittwoch/70424776" },
        { title: "AP via ktvb.com: How major US stock indexes fared Tuesday", url: "https://www.ktvb.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-tuesday-10272026/616-aa76019b-b218-4bd1-956f-e9226e74551b" },
        { title: "Investing.com: PHLX Semiconductor Index Historical Data", url: "https://www.investing.com/indices/phlx-semiconductor-historical-data" },
        { title: "ad-hoc-news.de: VIX falls as oil eases at midday", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/vix-falls-as-oil-eases-at-midday-17-74-points/70422585" }
      ]
    },

    /* 2 FED-ENTSCHEIDUNG */
    {
      id: "fed-entscheidung-warsh-10-28", cats: ["markets", "economy"], when: "FOMC-Sitzung 27.–28.10.2026 · Entscheidung 14 Uhr ET / 19 Uhr MEZ · PK 19:30 Uhr MEZ",
      headline: "Die Fed entscheidet heute Abend über den Leitzins, Marktpreisung zeigt eine rund 90-prozentige Wahrscheinlichkeit für eine erneute Pause, für Dezember wird überwiegend eine weitere Erhöhung eingepreist",
      sec30: "Die FOMC-Sitzung unter Fed-Chef Kevin Warsh läuft seit Dienstag, 27.10.; die Entscheidung fällt heute um 14 Uhr Eastern Time (19 Uhr MEZ), die Pressekonferenz folgt um 14:30 Uhr ET (19:30 Uhr MEZ). Laut CME FedWatch liegt die eingepreiste Wahrscheinlichkeit für eine erneute Pause bei 3,75 bis 4,00 % bei rund 90 %; für die Dezember-Sitzung preisen Marktbeobachter dagegen mit rund 80 % Wahrscheinlichkeit eine weitere Erhöhung ein – ein ungewöhnliches Muster, da die Fed im September bereits überraschend angehoben hatte. Ein Regierungsstillstand liegt aktuell nicht vor (eine Übergangsfinanzierung sichert den Haushalt bis zum 11.12.); die am Fed-Lieblingsindikator PCE-Inflation und die BIP-Daten für das dritte Quartal werden erst morgen, 29.10. und damit nach der Fed-Sitzung veröffentlicht. Die US-Verbraucherpreise waren im September um 3,7 % zum Vorjahr gestiegen, die Arbeitslosenquote auf 4,2 %.",
      blocks: [
        { h: "Wie ist der Zeitplan der heutigen Fed-Entscheidung?", items: [
          { tag: "fakt", text: "Die FOMC-Sitzung läuft seit Dienstag, 27.10.; die Zinsentscheidung wird heute um 14 Uhr Eastern Time (19 Uhr MEZ) bekanntgegeben, die Pressekonferenz von Fed-Chef Kevin Warsh folgt um 14:30 Uhr ET (19:30 Uhr MEZ).",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Wie schätzen Marktplattformen die Entscheidung ein?", items: [
          { tag: "unbestaetigt", text: "Laut CME FedWatch liegt die eingepreiste Wahrscheinlichkeit für eine erneute Zinspause bei 3,75 bis 4,00 % bei rund 90 %. Für die Dezember-Sitzung preisen Marktbeobachter dagegen mit rund 80 % Wahrscheinlichkeit eine weitere Erhöhung um 25 Basispunkte ein – diese Markteinschätzungen können sich bis zu den jeweiligen Sitzungen noch ändern.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Welche aktuellen US-Konjunkturdaten spielen eine Rolle?", items: [
          { tag: "fakt", text: "Die US-Verbraucherpreise waren im September um 3,7 % zum Vorjahr gestiegen; die wöchentlichen Erstanträge auf Arbeitslosenhilfe fielen zuletzt auf rund 194.000 – nahe einem historischen Tiefstand –, während die Arbeitslosenquote im September auf 4,2 % stieg und die Beschäftigung nur um 29.000 Stellen zunahm.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] },
          { tag: "fakt", text: "Ein Regierungsstillstand liegt aktuell nicht vor: Eine Übergangsfinanzierung sichert den Bundeshaushalt bis zum 11.12.2026. Die PCE-Inflation (der von der Fed bevorzugte Indikator) und die vorläufigen BIP-Daten für das dritte Quartal werden erst morgen, 29.10., und damit nach der heutigen Fed-Sitzung veröffentlicht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung für eine Zinspause trotz anhaltend erhöhter Inflation hoch bleibt, während gleichzeitig für Dezember bereits eine erneute Erhöhung eingepreist wird, zeigt, dass sich Fed und Marktbeobachter weiterhin in einem Straffungszyklus bewegen, obwohl sich der Arbeitsmarkt zugleich abschwächt." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1, die EZB-Seite in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite", "erzeugerpreise"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Yahoo Finance: Fed meeting live updates", url: "https://finance.yahoo.com/economy/policy/live/fed-meeting-live-updates-federal-reserve-october-meeting-kevin-warsh-161129201.html" },
        { title: "Forbes: Markets Predict Over 90% Odds Fed Will Leave Rates Unchanged This Month", url: "https://www.forbes.com/sites/digital-assets/2026/10/27/markets-predict-over-90-odds-fed-will-leave-rates-unchanged-this-month/" },
        { title: "CNBC: Fed decision – what to expect", url: "https://www.cnbc.com/2026/10/26/fed-decision-expectations-october-meeting.html" },
        { title: "CNBC: Jobless claims near lowest since 1960s", url: "https://www.cnbc.com/2026/10/22/jobless-claims-record-low-weekly.html" },
        { title: "fedtools.com: Government Shutdown October 2026 – Averted", url: "https://www.fedtools.com/blog/government-shutdown-october-2026" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/BUND */
    {
      id: "gold-bitcoin-eurusd-bund-10-28", cats: ["markets"], when: "Stand Di 27.10. bis Mi 28.10.2026 früh",
      headline: "Gold schwankt stark im Tagesverlauf, Bitcoin zieht zum Tagesende leicht an, die Bund-Rendite bleibt vor Fed und EZB nahezu unverändert",
      sec30: "Gold notierte am Dienstag je nach Quelle und Messzeitpunkt zwischen rund 4.023 und 4.061 Dollar je Feinunze; eine Mittwochmorgen-Meldung nennt rund 4.048 Dollar. Bitcoin stieg am Dienstag von rund 79.756 Dollar am Morgen auf rund 80.700 bis 80.800 Dollar am Abend. Der EZB-Referenzkurs für den Euro lag am Dienstag bei 1,1150 Dollar, niedriger als die 1,1188 Dollar vom Montag; eine Vorbörsen-Meldung nennt für Mittwoch bereits rund 1,1123 Dollar. Die Rendite zehnjähriger Bundesanleihen lag am Dienstag bei rund 3,35 bis 3,37 %, während Frankreichs Anleiherendite auf rund 4,93 bis 4,98 % zurückfiel und der Risikoaufschlag zu Bundesanleihen auf rund 156 Basispunkte sank.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "unbestaetigt", text: "Gold notierte am Dienstag je nach Quelle und Messzeitpunkt zwischen rund 4.023 Dollar (CNBC, morgens) und 4.061 Dollar (JM Bullion, abends) je Feinunze; eine Mittwochmorgen-Meldung nennt rund 4.048 Dollar (−0,4 %) – die Schwankungsbreite zeigt, wie stark der Goldpreis untertägig schwankt.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die insgesamt vorsichtigere Stimmung bei Anleihen und Risikoanlagen vor der Fed-Entscheidung am Abend." }
        ]},
        { h: "Wie hat sich Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Bitcoin stieg am Dienstag von rund 79.756 Dollar am Morgen (8 Uhr Eastern Time) auf rund 80.700 bis 80.800 Dollar am Abend (20 Uhr Eastern Time) – weiterhin deutlich unter dem Allzeithoch von 126.198,07 Dollar vom 6.10.2025.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie haben sich der Euro und die Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Dienstag bei 1,1150 Dollar, niedriger als die 1,1188 Dollar vom Montag; eine Vorbörsen-Meldung nennt für Mittwochmorgen bereits rund 1,1123 Dollar.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "fakt", text: "Die Rendite zehnjähriger Bundesanleihen lag am Dienstag bei rund 3,35 bis 3,37 %. Frankreichs Anleiherendite fiel auf rund 4,93 bis 4,98 %, der Risikoaufschlag zu Bundesanleihen (OAT/Bund-Spread) sank damit auf rund 156 Basispunkte – nach einem 24-Jahres-Hoch von rund 178 Basispunkten am 22.10.",
            ask: [{ label: "Mehr zur EZB-Sitzung und zur französischen Haushaltslage", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold untertägig stark schwankt, während Bitcoin zum Tagesende leicht zulegt und sich die französische Risikoprämie weiter entspannt, passt zu einer Phase, in der Anleger unmittelbar vor der Fed-Entscheidung und der EZB-Sitzung morgen zwischen verschiedenen Risikoeinschätzungen hin- und herschwanken. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Fed-Zinsentwicklung wird in Meldung 2 behandelt, die EZB-Seite in Meldung 4, der Ölpreis in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Kitco: Gold Charts", url: "http://www.kitco.com/charts/gold" },
        { title: "CNBC Select: The price of gold today, Oct. 27, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-27-2026/" },
        { title: "Fortune: Current price of Bitcoin for October 27, 2026", url: "https://fortune.com/article/price-of-bitcoin-10-27-2026/" },
        { title: "news.de: Eurokurs gefallen, EZB-Referenzkurs 1,1150 US-Dollar", url: "https://www.news.de/wirtschaft/860135698/eurokurs-gefallen-ezb-referenzkurs-1-1150-us-dollar-boerse-news-der-dpa-aktuell-zu-waehrung/1/" },
        { title: "ARIVA.DE: Deutsche Anleihen – Leichte Kursgewinne", url: "https://www.ariva.de/news/deutsche-anleihen-leichte-kursgewinne-12183135" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/FRANKREICH/SCHNABEL */
    {
      id: "ezb-frankreich-schnabel-inflation-10-28", cats: ["economy", "world"], when: "EZB-Sitzung morgen 29.10. · Schnabel-Nachfolgefrist verlängert bis 27.11. · Reuters-Umfrage 27.10.",
      headline: "Reuters-Umfrage sieht die EZB morgen weiterhin bei einer Zinspause, für Dezember erwarten die meisten befragten Ökonomen eine weitere Erhöhung, die Frist für die Schnabel-Nachfolge wird bis zum 27. November verlängert",
      sec30: "Die EZB hält ihren Einlagensatz vor der morgigen Sitzung (29.10., 14:15 MEZ, PK 14:45 MEZ) weiterhin bei 2,50 %. Eine Reuters-Umfrage vom 27.10. zeigt: 70 von 73 befragten Ökonomen erwarten eine erneute Pause, 64 von 73 erwarten für Dezember dagegen eine weitere Erhöhung um 25 Basispunkte. Die Nominierungsfrist für die Schnabel-Nachfolge im EZB-Direktorium wurde vom 28.10. auf den 27.11.2026 verlängert; als Kandidaten für EZB-Spitzenpositionen gelten laut Berichten Pablo Hernández de Cos und Klaas Knot, Bundesfinanzminister Klingbeil plant laut Handelsblatt „bald” einen deutschen Personalvorschlag. In Frankreich erholte sich die Anleiherendite nach der von Moody's bestätigten Aa3-Bonität weiter auf rund 4,93 bis 4,98 %; Premierminister Lecornu hatte am 1.10. einen Sparhaushalt über 54 Mrd. Euro vorgelegt, mit dem Ziel, das Defizit auf 5,0 % des BIP zu senken, ohne dass die Regierung über eine stabile Mehrheit in der Nationalversammlung verfügt.",
      blocks: [
        { h: "Wie ist der Stand vor der EZB-Zinsentscheidung morgen?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Die Zinsentscheidung wird morgen, 29.10., um 14:15 MEZ bekanntgegeben, die Pressekonferenz von Präsidentin Lagarde folgt um 14:45 MEZ.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Laut einer Reuters-Umfrage vom 27.10. erwarten 70 von 73 befragten Ökonomen für morgen eine erneute Pause; 64 von 73 erwarten dagegen für die Dezember-Sitzung eine weitere Erhöhung um 25 Basispunkte." },
          { tag: "position", text: "EZB-Präsidentin Lagarde hatte bei den IWF/Weltbank-Jahrestagungen erklärt, höhere Energiepreise dürften die Gesamtinflation bis ins erste Halbjahr 2027 über dem Zielwert halten; Bundesbankpräsident Joachim Nagel sagte, es sei „zu früh”, über weitere Zinsschritte zu spekulieren." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die ursprüngliche Nominierungsfrist für den Schnabel-Sitz im EZB-Direktorium (28.10.) wurde auf den 27.11.2026 verlängert; Isabel Schnabel wechselt Anfang 2027 zum IWF." },
          { tag: "unbestaetigt", text: "Als Kandidaten für EZB-Spitzenpositionen (auch im Hinblick auf die Lagarde-Nachfolge 2027) gelten laut Berichten Pablo Hernández de Cos und Klaas Knot; Bundesfinanzminister Klingbeil plant laut Handelsblatt „bald” einen eigenen deutschen Personalvorschlag." }
        ]},
        { h: "Wie ist der Stand bei Frankreich?", items: [
          { tag: "fakt", text: "Frankreichs 10-Jahres-Rendite, die am 23.10. bei rund 5,14 % ein 24-Jahres-Hoch erreicht hatte, erholte sich weiter auf rund 4,93 bis 4,98 %; der Risikoaufschlag zu Bundesanleihen liegt bei rund 156 Basispunkten.",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "e:yield-meaning" }] },
          { tag: "fakt", text: "Premierminister Lecornu hatte am 1.10. einen Sparhaushalt über 54 Mrd. Euro vorgelegt, mit dem Ziel, das Defizit 2027 auf 5,0 % des BIP zu senken; die Regierung verfügt laut Berichten über keine stabile Mehrheit in der Nationalversammlung." }
        ]},
        { h: "Wie entwickelt sich die Inflation?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone lag im September bei 3,8 %, in Deutschland bei 3,3 %; die Oktober-Schnellschätzung für die Eurozone wird erst am 4.11. veröffentlicht.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich Frankreichs Risikoprämie nach der bestätigten Bonität weiter entspannt, während die EZB morgen vermutlich pausiert, aber für Dezember von den meisten befragten Ökonomen eine weitere Erhöhung erwartet wird, zeigt, dass sich auch die EZB derzeit in einem Straffungszyklus bewegt – parallel zur Fed-Entscheidung am selben Tag." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 5.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "finchiefs.com: ECB meeting preview", url: "https://finchiefs.com/central-banks/ecb/meetings/2026-10-29" },
        { title: "disruptionbanking.com: Statement by Christine Lagarde at the IMFC", url: "https://www.disruptionbanking.com/2026/10/18/statement-by-christine-lagarde-president-of-the-ecb-at-the-fifty-fourth-meeting-of-the-international-monetary-and-financial-committee/" },
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel verlängert", url: "https://www.onvista.de/news/2026/10-27-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-verlaengert-0-20-26568925" },
        { title: "Handelsblatt: Rennen um EZB-Spitze – Klingbeil plant bald Personalvorschlag", url: "https://www.handelsblatt.com/politik/deutschland/europaeische-zentralbank-rennen-um-ezb-spitze-klingbeil-plant-bald-personalvorschlag/100262803.html" },
        { title: "BNN Bloomberg: French bond selloff eases as country spared ratings downgrade", url: "https://www.bnnbloomberg.ca/business/economics/2026/10/26/french-bond-selloff-eases-as-country-spared-ratings-downgrade/" },
        { title: "France24: French PM to present belt-tightening 2027 budget", url: "https://www.france24.com/en/france/20261001-french-pm-to-present-belt-tightening-2027-budget-including-frozen-wages-and-new-taxes" }
      ]
    }
    ,
    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-steuerschaetzung-10-28", cats: ["germany", "economy"], when: "Steuerschätzung 22.10. · Anhörung Haushaltsausschuss KW 42 · Bereinigungssitzung 12.11. · Schlussabstimmung 27.11.2026",
      headline: "Die Steuerschätzung vom 22. Oktober bringt dem Bund nur geringe Entlastung, der Zeitplan für die Haushaltsberatungen 2027 bleibt unverändert",
      sec30: "Der Regierungsentwurf für den Haushalt 2027 (Gesamtausgaben 555,4 Mrd. Euro, Nettokreditaufnahme 118,7 Mrd. Euro) wurde am 8.9. von Finanzminister Klingbeil im Bundestag eingebracht; der Bundesrechnungshof hatte am 18.10. die Deckungslücke auf 160,7 Mrd. Euro beziffert. Die Steuerschätzung vom 22.10. brachte dem Bund laut Berichten kaum Entlastung – nur rund 4,1 Mrd. Euro Mehreinnahmen für 2027, kein Spielraum für Steuersenkungen; Klingbeil sieht laut Berichten weiteren Sparbedarf. Eine Anhörung zum Haushaltsbegleitgesetz 2027 fand in der Kalenderwoche 42 im Haushaltsausschuss statt. Der Zeitplan bleibt unverändert: Bereinigungssitzung am 12.11., Schlussabstimmung am 27.11.2026.",
      blocks: [
        { h: "Was sieht der Haushaltsentwurf 2027 weiterhin vor?", items: [
          { tag: "fakt", text: "Der Regierungsentwurf sieht Gesamtausgaben von 555,4 Mrd. Euro vor, bei einer Nettokreditaufnahme von 118,7 Mrd. Euro; inklusive Sondervermögen liegt die Gesamtneuverschuldung bei rund 203,7 Mrd. Euro. Der Verteidigungsetat steigt auf 109,7 Mrd. Euro." }
        ]},
        { h: "Was ergab die Steuerschätzung vom 22.10.?", items: [
          { tag: "fakt", text: "Die Steuerschätzung vom 22.10. ergab für den Bund nur rund 4,1 Mrd. Euro an Mehreinnahmen für 2027 – kein Spielraum für Steuersenkungen.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] },
          { tag: "position", text: "Finanzminister Klingbeil sieht laut Berichten angesichts der Steuerschätzung weiteren Sparbedarf." }
        ]},
        { h: "Was hatte der Bundesrechnungshof kritisiert?", items: [
          { tag: "fakt", text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben) und erwartet, dass dieser Anteil bis 2030 auf 31,2 % steigt.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] },
          { tag: "position", text: "Der CDU-Haushaltspolitiker Andreas Mattfeldt äußerte zur Rechnungshof-Kritik, es treibe ihn um, „wie wenig reformbereit Teile der Politik, aber auch unserer Gesellschaft inzwischen sind”." }
        ]},
        { h: "Wie ist der aktuelle Stand des Zeitplans?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses ist weiterhin für den 12.11.2026 angesetzt, die Schlussabstimmung für Freitag, den 27.11.2026. Neue Kabinettsbeschlüsse zum Haushalt seit der Steuerschätzung sind nicht bekannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Steuerschätzung dem Bund kaum zusätzlichen Spielraum verschafft, während der Zeitplan für die Bereinigungssitzung und die Schlussabstimmung unverändert bleibt, deutet darauf hin, dass die eigentlichen politischen Entscheidungen weiterhin erst Mitte November fallen dürften." }
        ]}
      ],
      reaction: "Die Innenpolitik rund um Rente und Kabinett wird in Meldung 6 behandelt, die EZB-Seite in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "Deutscher Bundestag: Beratungen zum Bundeshaushalt 2027 fortgesetzt", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1225360" },
        { title: "ad-hoc-news.de: Bundeshaushalt 2027 – Rechnungshof beziffert Deckungslücke auf 160,7 Milliarden", url: "https://www.ad-hoc-news.de/wirtschaft/bundeshaushalt-2027-rechnungshof-beziffert-deckungsluecke-auf-160-7-milliarden/70351796" },
        { title: "onvista: Steuerschätzung bringt Bund kaum Entlastung, Klingbeil sieht Sparbedarf", url: "https://www.onvista.de/news/2026/10-22-steuerschaetzung-bringt-bund-kaum-entlastung-klingbeil-sieht-sparbedarf-0-20-26567380" },
        { title: "Deutscher Bundestag: Anhörung zum Haushaltsbegleitgesetz 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw42-pa-haushalt-1194772" }
      ]
    },

    /* 6 DEUTSCHLAND: RENTE/KABINETT/UMFRAGEN/BUNDESPRÄSIDENT */
    {
      id: "rente-kabinett-umfragen-bundespraesident-10-28", cats: ["germany"], when: "Kabinettssitzung 28.10. (Klingbeil vertritt Merz) · Merz-Asienreise seit 27.10. · Umfragen 20.–27.10.2026",
      headline: "Bundeskanzler Merz reist durch Asien, Vizekanzler Klingbeil leitet die Kabinettssitzung, bei der Rente mit 63 ist seit dem Wochenende keine neue Einigung bekannt",
      sec30: "Bundeskanzler Merz (CDU) befindet sich seit dem 27.10. auf Asienreise (Singapur, danach Japan); die Kabinettssitzung am 28.10. leitete in seiner Vertretung Vizekanzler und Finanzminister Lars Klingbeil (SPD). Beschlossen wurden unter anderem erweiterte Befugnisse für Verfassungsschutz und BND bei hybriden Bedrohungen, eine Erhöhung des BAföG-Wohnkostenzuschlags von 380 auf 440 Euro ab Sommersemester 2027 sowie ein Verbot des begleiteten Trinkens für 14- und 15-Jährige. Bei der Rente mit 63 bleiben die Fronten zwischen Kanzler Merz, der auf Tempo drängt, und Arbeitsminister Alexander Schweitzer (SPD), der einen Gesetzentwurf an eine vorherige Koalitionseinigung knüpft, unverändert; mehrere Umfragen (INSA, Forsa, YouGov, Stand 20.–27.10.) sehen die AfD weiterhin als stärkste Kraft vor der Union. Bei der Nachfolge von Bundespräsident Steinmeier hält Merz mehrere CDU-Optionen offen, die CSU positioniert sich für die bayerische Landtagspräsidentin Ilse Aigner.",
      blocks: [
        { h: "Was wurde im Kabinett am 28.10. beschlossen?", items: [
          { tag: "fakt", text: "Die vom abwesenden Kanzler Merz vertretene Kabinettssitzung unter Leitung von Vizekanzler Klingbeil beschloss unter anderem erweiterte Befugnisse für Verfassungsschutz und BND bei hybriden Bedrohungen (etwa aktives Eingreifen gegen ausländische IT-Infrastruktur bei laufenden Cyber- oder Desinformationsangriffen), eine Erhöhung des BAföG-Wohnkostenzuschlags von 380 auf 440 Euro pro Monat ab dem Sommersemester 2027, ein Verbot des begleiteten Trinkens für 14- und 15-Jährige sowie ausgeweitete Sicherheitsüberprüfungen für Personal kritischer Infrastruktur." }
        ]},
        { h: "Wie ist der Stand bei der Rente mit 63?", items: [
          { tag: "position", text: "Arbeitsminister Alexander Schweitzer (SPD) knüpft die Vorlage eines Gesetzentwurfs weiterhin an eine vorherige Einigung innerhalb der Koalition zu allen Altersvorsorgefragen und strebt einen Kompromiss an.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Kanzler Merz und CSU-Chef Söder drängen dagegen auf Tempo; Söder hatte zuletzt erklärt, ein einheitliches Rentenpaket könne „in der nächsten Woche” stehen, CSU-Fraktionschef Holetschek forderte einen Gesetzentwurf noch im Oktober." },
          { tag: "unbestaetigt", text: "In der Unionsfraktion wird laut Berichten ein Kompromiss diskutiert, wonach die abschlagsfreie Rente nach 45 Jahren im Grundsatz bleibt, aber die Anrechnung von Kindererziehungs- oder Pflegezeiten eingeschränkt werden könnte; der Zeitplan für eine Parlamentsentscheidung hat sich von Jahresende 2026 auf das erste Quartal 2027 verschoben." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "INSA (27.10.) sieht die AfD bei 29,5 %, die Union bei 19,0 %, die Grünen bei 14,0 %, die SPD bei 14,0 % und die Linke bei 10,0 %; Forsa (27.10.) sieht die AfD bei rund 27 %, die Union bei 20 bis 21 %. Eine Koalition aus Union und SPD hätte laut diesen Werten rechnerisch keine Mehrheit mehr.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] },
          { tag: "unbestaetigt", text: "Laut dem Forsa-Trendbarometer erwarten weiterhin 56 % der Befragten ein vorzeitiges Ende der Koalition aus Union und SPD vor dem regulären Ende 2029; unter CDU/CSU-Anhängern erwarten laut einer Erhebung 53 % ein vorzeitiges Ende.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Wie ist der Stand bei der Bundespräsidenten-Nachfolge?", items: [
          { tag: "fakt", text: "Für die Nachfolge von Bundespräsident Steinmeier (Amtsende März 2027) hält Kanzler Merz mehrere CDU-Optionen offen, darunter Bundestagspräsidentin Julia Klöckner und Bildungsministerin Karin Prien; die CSU positioniert sich laut Berichten für die bayerische Landtagspräsidentin Ilse Aigner." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Kanzler während seiner Asienreise die Kabinettsarbeit an Vizekanzler Klingbeil delegiert, während bei der Rente mit 63 weiterhin keine Einigung erzielt wurde und Umfragen unverändert keine Mehrheit für die aktuelle Koalition zeigen, deutet auf anhaltende politische Unsicherheit auf mehreren Ebenen hin." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority", "e:landtagswahl-why"],
      sources: [
        { title: "ARIVA: Vizekanzler Klingbeil leitet Kabinett", url: "https://www.ariva.de/news/vizekanzler-klingbeil-leitet-kabinett-12184171" },
        { title: "t-online: Rente mit 63 – Merz widerspricht neuem Arbeitsminister deutlich", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101485570/rente-mit-63-merz-widerspricht-neuem-arbeitsminister-deutlich.html" },
        { title: "ARIVA: Arbeitsminister Schweitzer – Müssen Kompromiss zu Rente finden", url: "https://www.ariva.de/news/arbeitsminister-schweitzer-muessen-kompromiss-zu-rente-12172107" },
        { title: "dawum.de: Wahlumfrage INSA 27.10.2026", url: "https://dawum.de/Bundestag/INSA/2026-10-27/" },
        { title: "infranken: Umfrage – Mehrheit rechnet mit vorzeitigem Ende der Koalition", url: "https://www.infranken.de/deutschland/umfrage-mehrheit-rechnet-mit-vorzeitigem-ende-der-koalition-art-6406151" },
        { title: "Tagesspiegel: Merz sieht mehrere Optionen für Steinmeier-Nachfolge", url: "https://www.tagesspiegel.de/politik/dpa-bundesprasident-merz-sieht-mehrere-optionen-fur-steinmeier-nachfolge-16208397.html" }
      ]
    },

    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-abu-dhabi-angriffe-10-28", cats: ["world", "geo"], when: "Angriffe Nacht 26./27.10. und 27./28.10. · Uschakow-Aussage 25.10. · Trump-Aussage 28.10.",
      headline: "Russland und die Ukraine griffen sich in den vergangenen Nächten erneut gegenseitig an, Präsident Trump sprach von einem baldigen Treffen zwischen Selenskyj und Putin, ein verbindliches Datum für Abu Dhabi liegt weiterhin nicht vor",
      sec30: "Russland griff in der Nacht zum 27.10. Energieinfrastruktur in acht ukrainischen Oblasten an, in der Nacht zum 28.10. erneut mit einer ballistischen Rakete und 88 Drohnen, von denen die Ukraine eigenen Angaben zufolge 71 abfing; Russland behauptet unbestätigt, 531 ukrainische Drohnen abgeschossen zu haben. Eine UN-Untersuchungskommission stufte die systematischen russischen Angriffe auf ukrainische Energieinfrastruktur am 27.10. als mögliches Kriegsverbrechen ein. Bei der Diplomatie bleibt ein verbindliches Datum für das geplante Dreiertreffen in Abu Dhabi offen: Putin-Berater Uschakow hatte am 25.10. signalisiert, Russland sei frühestens nach dem 4.11. gesprächsbereit; Kyjiw drängt laut Berichten auf einen früheren Termin und einen EU-Sitz am Tisch, was Russland und Teile der US-Regierung ablehnen. Präsident Selenskyj sagte am 28.10., die Russen „scheinen” nach Telefonaten europäischer Staatschefs mit Putin „ernsthaft” zum Treffen verpflichtet; Präsident Trump sprach am selben Tag von einem baldigen Selenskyj-Putin-Treffen, was von Kyjiw und Moskau nicht offiziell bestätigt wurde.",
      blocks: [
        { h: "Welche neuen Angriffe gab es in den vergangenen Nächten?", items: [
          { tag: "unbestaetigt", text: "Russland griff in der Nacht zum 27.10. Energieinfrastruktur in acht ukrainischen Oblasten an (unter anderem Charkiw, Saporischschja, Chmelnyzkyj); in der Nacht zum 28.10. erfolgte ein weiterer Angriff mit einer ballistischen Rakete und 88 Drohnen, von denen die ukrainische Luftabwehr eigenen Angaben zufolge 71 abfing. Das russische Verteidigungsministerium meldet unbestätigt, in derselben Nacht 531 ukrainische Drohnen abgeschossen zu haben; die Ukraine griff ihrerseits eine Chemieanlage in der russischen Region Tula sowie ein Munitionsdepot bei Chrustalnyj (Luhansk) an." },
          { tag: "unbestaetigt", text: "Eine UN-Untersuchungskommission stufte die systematischen russischen Angriffe auf ukrainische Energieinfrastruktur am 27.10. als mögliches Kriegsverbrechen beziehungsweise Verbrechen gegen die Menschlichkeit ein; unabhängig bestätigte Opferzahlen für die einzelnen Angriffe liegen in den verfügbaren Quellen nicht vor." }
        ]},
        { h: "Wie ist der Stand bei den geplanten Verhandlungen in Abu Dhabi?", items: [
          { tag: "position", text: "Putin-Berater Juri Uschakow hatte am 25.10. signalisiert, Russland sei frühestens nach dem russischen Feiertag am 4.11. zu Gesprächen bereit – eine mögliche Verzögerung gegenüber dem zuvor genannten Termin „um den 10. November”. Kremlsprecher Peskow bestätigte ein Dreierformat Ukraine-Russland-USA, ausdrücklich ohne EU-Beteiligung." },
          { tag: "unbestaetigt", text: "Kyjiw drängt laut Berichten auf ein Vorziehen des Termins und auf einen EU-Sitz am Tisch; Russland und Teile der US-Regierung lehnen eine EU-Teilnahme ab. Präsident Selenskyj sagte am 28.10., nach Telefonaten europäischer Staatschefs mit Putin „scheinen die Russen ernsthaft” zum Abu-Dhabi-Treffen verpflichtet." },
          { tag: "position", text: "Präsident Trump sagte am 28.10. vor Reportern, ein Treffen zwischen Selenskyj und Putin komme „very soon” zustande und man mache „viel Fortschritt”; dies wurde von Kyjiw und Moskau nicht offiziell bestätigt. Selenskyj warnte zugleich vor einem „New Yalta”-Szenario, falls über die Ukraine ohne ihre Beteiligung entschieden werde." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich Russland und die Ukraine in den vergangenen Nächten weiterhin gegenseitig angriffen, während gleichzeitig von einem möglicherweise bevorstehenden Selenskyj-Putin-Treffen die Rede ist, ohne dass ein verbindliches Datum vorliegt, zeigt, wie weit militärisches Geschehen und diplomatische Ankündigungen weiterhin auseinanderliegen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, weitere internationale Entwicklungen in Meldung 15.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "Yahoo/Ukrinform: Russians attack energy infrastructure in eight regions", url: "https://www.yahoo.com/news/world/articles/russians-attack-energy-infrastructure-eight-093500952.html" },
        { title: "Censor.net: Russia attacks Ukraine with ballistic missile and 88 drones", url: "https://censor.net/en/news/4030731/" },
        { title: "Kyiv Post: Trump says Zelensky-Putin meeting coming very soon", url: "https://www.kyivpost.com" },
        { title: "Ukrinform: Zelensky says Russians seem seriously committed to Abu Dhabi talks", url: "https://www.ukrinform.net" }
      ]
    },

    /* 8 GEOPOLITIK: GOLF/HORMUZ/IRAN */
    {
      id: "golf-hormuz-iran-eskalation-10-28", cats: ["geo", "energy"], when: "IRGC erklärt Hormus geschlossen 26.10. · Huthi-Angriffe 27./28.10. · Trump-Aussagen 26.10.",
      headline: "Die iranische Revolutionsgarde erklärt die Straße von Hormus erneut für geschlossen, Huthi-Rebellen melden weitere Angriffe auf saudische Ziele, der Ölpreis bleibt entsprechend volatil",
      sec30: "Präsident Trump bezeichnete den Waffenstillstand vom April bei einer Wahlkampfrede in Mississippi am 26.10. als „Zeitverschwendung” und beanspruchte „volle US-Kontrolle” über die Straße von Hormus. Die iranische Revolutionsgarde (IRGC) erklärte die Meerenge am selben Tag erneut für „geschlossen” und drohte Schiffen, die sich nicht mit iranischen Stellen abstimmten; Kriegsrisiko-Versicherungen für Hormuz-Transits stiegen laut Berichten auf 6 bis 10 % des Schiffswerts. Huthi-Rebellen meldeten am 27. und 28.10. weitere Angriffe auf saudische Ziele, darunter die Raffinerie Ras Tanura und das saudische Verteidigungsministerium in Riad. Ein Treffen saudischer, türkischer und pakistanischer Vertreter mit Irans Präsident Pezeshkian in Teheran am 26.10. brachte laut Berichten „keinen Fortschritt”; Iran nennt weiterhin sieben Bedingungen für Gespräche mit Washington.",
      blocks: [
        { h: "Wie ist die Lage in der Straße von Hormus?", items: [
          { tag: "position", text: "Präsident Trump bezeichnete den Waffenstillstand vom April bei einer Wahlkampfrede in Mississippi am 26.10. als „Zeitverschwendung” und beanspruchte „volle US-Kontrolle” über die Straße von Hormus; kein iranisches Schiff habe die Blockade seit Monaten durchbrochen.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "Die iranische Revolutionsgarde (IRGC) erklärte die Wasserstraße am 26.10. erneut für „geschlossen” und drohte, Schiffe bei Regelverstößen „riskierten in Flammen aufzugehen” – eine klare Gegenposition zu Trumps Aussage." },
          { tag: "unbestaetigt", text: "Kriegsrisiko-Versicherungen für Hormuz-Transits stiegen laut Berichten auf 6 bis 10 % des Schiffswerts, von zuvor 0,15 bis 0,25 %; der Schiffsverkehr durch die Meerenge bleibt stark reduziert." }
        ]},
        { h: "Welche weiteren Angriffe wurden gemeldet?", items: [
          { tag: "unbestaetigt", text: "Huthi-Rebellen meldeten am 27. und 28.10. weitere Angriffe auf saudische Ziele, darunter die Ölraffinerie Ras Tanura und das saudische Verteidigungsministerium in Riad; unabhängig bestätigte Schäden liegen in den verfügbaren Quellen nicht vor.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] },
          { tag: "unbestaetigt", text: "Ein Treffen saudischer, türkischer und pakistanischer Vertreter mit Irans Präsident Pezeshkian in Teheran am 26.10. brachte laut Berichten „keinen Fortschritt”; Iran nennt weiterhin sieben Bedingungen für mögliche Gespräche mit Washington." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "unbestaetigt", text: "Der Ölpreis bewegte sich entsprechend volatil zwischen rund 108 und 116 Dollar je Barrel (Brent); mehr zu den widersprüchlichen Angaben und zu Trumps zusätzlicher Lockerung der Russland-Sanktionen in Meldung 14.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die IRGC die Straße von Hormus erneut für geschlossen erklärt, während die USA „volle Kontrolle” beanspruchen und Huthi-Rebellen parallel saudische Ziele angreifen, zeigt, wie angespannt und widersprüchlich die Lage am Golf bleibt, ohne dass sich eine der beiden Seiten faktisch durchsetzt." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis im Detail in Meldung 14.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "The Times of Israel: Liveblog – Iran/Gulf tensions", url: "https://www.timesofisrael.com" },
        { title: "houseofsaud.com: IRGC declares Strait of Hormuz closed", url: "https://houseofsaud.com" },
        { title: "Critical Threats/ISW: Iran update, October 27, 2026", url: "https://www.criticalthreats.org" },
        { title: "Business Recorder: Houthi strikes on Ras Tanura and Riyadh", url: "https://www.brecorder.com" }
      ]
    }
    ,
    /* 9 DEFENCE: RHEINMETALL/ARMINIUS/COVENANT/FLAMINGO */
    {
      id: "rheinmetall-arminius-covenant-flamingo-10-28", cats: ["defence"], when: "Kurs Di 27.10. · Analysten-Updates vor Q3 (5.11.) · Arminius-Votum 9.12.2026",
      headline: "Die Rheinmetall-Aktie bleibt unter Druck, Berenberg stuft vor den Quartalszahlen am 5. November auf Halten zurück, beim Arminius-Programm bleibt es beim Termin 9. Dezember",
      sec30: "Die Rheinmetall-Aktie schloss am Dienstag an der Xetra bei 1.021,20 Euro (−1,3 %) und liegt damit rund 41 % unter ihrem Jahresanfangsstand. Berenberg stufte die Aktie vor den Q3-Zahlen am 5.11. von Kaufen auf Halten zurück (Kursziel von 1.600 auf 1.020 Euro gesenkt), die Deutsche Bank bestätigte dagegen ihre Kaufempfehlung (Kursziel von 1.800 auf 1.650 Euro gesenkt); der Analystenkonsens erwartet für Q3 einen Gewinn pro Aktie von rund 7,00 Euro (Vorjahr 3,34 Euro). Beim Arminius-Programm (rund 1.800 Boxer-Radpanzer für etwa 25 Mrd. Euro, Rahmenvolumen bis 75 Mrd. Euro) bleibt die parlamentarische Befassung für den 9.12.2026 angesetzt, Rheinmetalls Anteil über ARTEC (50:50 mit KNDS) wird auf rund 12,4 Mrd. Euro geschätzt. Das US-Startup Covenant, das sein Werk in Leipzig für den Marschflugkörper „Anthem” bereits eröffnet hat, erhielt am 22.10. eine Bestellung aus Dänemark; Diehl Defence verhandelt laut Berichten weiterhin mit Fire Point über eine Kooperation beim ukrainischen „Flamingo”-Marschflugkörper, Rheinmetall-Chef Papperger sucht laut Berichten separat ebenfalls eine eigene Kooperation mit Fire Point.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt, und wie reagieren Analysten vor den Q3-Zahlen?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie schloss am Dienstag an der Xetra bei 1.021,20 Euro (−1,3 %) und liegt damit rund 41 % unter ihrem Jahresanfangsstand (52-Wochen-Hoch 1.922 Euro, Tief 928,20 Euro).",
            ask: [{ label: "Mehr zum DAX-Verlauf", ref: "n:dax" }] },
          { tag: "position", text: "Berenberg stufte die Aktie vor den Q3-Zahlen am 5.11. von Kaufen auf Halten zurück und senkte das Kursziel von 1.600 auf 1.020 Euro; die Deutsche Bank bestätigte ihre Kaufempfehlung, senkte das Kursziel aber von 1.800 auf 1.650 Euro. Der Analystenkonsens erwartet für Q3 einen Gewinn pro Aktie von rund 7,00 Euro (Vorjahr 3,34 Euro) bei einem Umsatz von rund 3,23 Mrd. Euro." }
        ]},
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Deutschland plant einen Festauftrag über rund 25 Mrd. Euro für rund 1.800 Boxer-Radpanzer, mit einem möglichen Rahmenvolumen von mehr als 3.000 Fahrzeugen und bis zu 75 Mrd. Euro Gesamtwert; Rheinmetalls Anteil über die Beteiligungsgesellschaft ARTEC (50:50 mit KNDS) wird auf rund 12,4 Mrd. Euro plus rund 2 Mrd. Euro Service geschätzt. Die parlamentarische Befassung im Haushaltsausschuss bleibt für den 9.12.2026 angesetzt.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] }
        ]},
        { h: "Was wird zu Covenant und zum ukrainischen „Flamingo” berichtet?", items: [
          { tag: "fakt", text: "Das US-Startup Covenant hat sein europäisches Werk in Leipzig für den Marschflugkörper „Anthem” bereits eröffnet; Dänemark bestellte am 22.10. Anthem-Raketen. Eine direkte Beteiligung Rheinmetalls an diesem Geschäft ist in den verfügbaren Quellen nicht bestätigt." },
          { tag: "unbestaetigt", text: "Diehl Defence verhandelt laut Berichten weiterhin mit dem ukrainischen Hersteller Fire Point über eine Kooperation beim „Flamingo”-Marschflugkörper (Reichweite rund 3.000 Kilometer); Rheinmetall-Chef Armin Papperger sucht laut Berichten separat ebenfalls eine eigene Kooperation mit Fire Point. Es handelt sich um Verhandlungen, keine Festvereinbarungen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Analysten vor den Q3-Zahlen am 5.11. uneinheitlich reagieren – Berenberg stuft zurück, die Deutsche Bank bestätigt ihre Kaufempfehlung –, während beim Arminius-Programm weiterhin kein finaler Vertrag steht und sich mehrere Anbieter um neue Marschflugkörper-Geschäfte bemühen, zeigt, wie viele einzelne Faktoren gleichzeitig über die Bewertung der deutschen Rüstungsbranche entscheiden. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Weitere internationale Rüstungsaufträge und Hensoldt/RENK werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "finanzen.ch: Rheinmetall-Aktie Kursbewegung", url: "https://www.finanzen.ch/aktien/rheinmetall-aktie" },
        { title: "boerse.de: Rheinmetall Analysten-Updates", url: "https://www.boerse.de/aktien/Rheinmetall-Aktie/DE0007030009" },
        { title: "hartpunkt.de: Deep Strike – Covenant und der Marschflugkörper Anthem", url: "https://www.hartpunkt.de/" },
        { title: "t-online.de: Ukraine-Marschflugkörper Flamingo – Diehl will Kiews Wunderwaffe bauen", url: "https://www.t-online.de/nachrichten/ukraine/id_101297318/ukraine-marschflugkoerper-flamingo-diehl-will-kiews-wunderwaffe-bauen.html" }
      ]
    },

    /* 10 DEFENCE: RTX/LOCKHEED/NORTHROP/HENSOLDT/RENK */
    {
      id: "us-ruestungskonzerne-hensoldt-renk-10-28", cats: ["defence"], when: "Kurse Di 27.10. · Lockheed-Hyperschallvertrag 27.10. · RENK-Herabstufung 1.10.2026",
      headline: "Lockheed Martin, Northrop Grumman und RTX geben nach der Rekordwoche leicht nach, bei Hensoldt und RENK bleiben die Analystenmeinungen gespalten",
      sec30: "Nach der „Defense Earnings Week” mit Rekord-Auftragsbeständen gaben US-Rüstungswerte am Dienstag leicht nach: Lockheed Martin 622,99 Dollar (−1,9 %), Northrop Grumman 551,23 Dollar (−2,5 %), RTX 194,60 Dollar (−1,5 %), General Dynamics 354,89 Dollar (−0,6 %). Lockheed erhielt am 27.10. einen 694-Mio.-Dollar-Auftrag der US-Luftwaffe für die Hyperschallwaffe ARRW; Northrop meldete einen Meilenstein beim Sentinel-Interkontinentalraketenprogramm. Bei den europäischen Werten notierte Hensoldt zuletzt bei rund 86 Euro (von 75,15 Euro am 9.10.), Deutsche Bank und Jefferies sehen weiteres Potenzial, mwb research rät zum Verkauf; die RENK-Aktie liegt bei rund 36,92 Euro, nachdem Bank of America die Kaufempfehlung am 1.10. mit Verweis auf Zweifel an der langfristigen Getriebe-Nachfrage auf Neutral zurückgestuft hatte.",
      blocks: [
        { h: "Wie entwickelten sich die US-Rüstungskonzerne nach der Rekordwoche?", items: [
          { tag: "fakt", text: "Nach der Rekordwoche gaben die Aktien am Dienstag leicht nach: Lockheed Martin 622,99 Dollar (−1,9 %), Northrop Grumman 551,23 Dollar (−2,5 %), RTX 194,60 Dollar (−1,5 %), General Dynamics 354,89 Dollar (−0,6 %).",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:9" }] },
          { tag: "fakt", text: "Lockheed Martin erhielt am 27.10. einen 694-Mio.-Dollar-Auftrag der US-Luftwaffe für die Hyperschallwaffe ARRW; General Dynamics erhielt eine 194-Mio.-Dollar-Vertragsmodifikation für ein Feuerleitsystem der US-Marine. Northrop Grumman meldete, dass das Interkontinentalraketenprogramm Sentinel einen Design-Meilenstein passiert habe." }
        ]},
        { h: "Wie entwickelten sich Hensoldt und RENK?", items: [
          { tag: "unbestaetigt", text: "Die Hensoldt-Aktie notierte zuletzt bei rund 86 Euro, nachdem sie seit dem 9.10. (75,15 Euro) deutlich gestiegen war; Deutsche Bank (Kursziel 105 Euro) und Jefferies (98 Euro) sehen weiteres Potenzial, mwb research rät mit einem Kursziel von 62 Euro zum Verkauf.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Nachrichten?", ref: "e:defence-stocks" }] },
          { tag: "position", text: "Bank of America hatte die Kaufempfehlung für den Getriebehersteller RENK bereits am 1.10. auf Neutral zurückgestuft (Kursziel von 62,50 auf 42,50 Euro gesenkt), mit Verweis auf Zweifel an einer über 2030 hinaus nachhaltig skalierbaren Getriebeproduktion; die Aktie notiert zuletzt bei rund 36,92 Euro." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass US-Rüstungskonzerne nach ihrer Rekordwoche nur moderat nachgeben, während bei den europäischen Zulieferern Hensoldt und RENK die Analystenmeinungen weit auseinandergehen, zeigt, dass der allgemeine Rüstungsboom nicht automatisch jedes einzelne Unternehmen in der Lieferkette gleich begünstigt." }
        ]}
      ],
      reaction: "Rheinmetall und die deutsche Rüstungsindustrie werden in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "DefenseScoop: Lockheed, RTX, Northrop earnings roundup", url: "https://defensescoop.com/" },
        { title: "GuruFocus: Lockheed Martin ARRW contract", url: "https://www.gurufocus.com/" },
        { title: "ad-hoc-news.de: Hensoldt-Aktie Kursbewegung", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/" },
        { title: "ad-hoc-news.de: RENK-Aktie – Bank of America stuft zurück", url: "https://www.ad-hoc-news.de/boerse/news/analyse/" }
      ]
    },

    /* 11 DEALS: BASF/EVONIK, EQT/QIAGEN, TESLA/SPACEX */
    {
      id: "deals-basf-evonik-qiagen-teslaspacex-10-28", cats: ["deals", "pe"], when: "BASF-Q3-PK 28.10. · Analystenreaktionen Qiagen bis 27.10. · Tesla/SpaceX-Bericht 27.10.2026",
      headline: "BASF-Chef Kamieth äußert sich erstmals öffentlich zu Evonik, ohne den Preis von 24 Euro zu bestätigen, unabhängige Ausschüsse von Tesla und SpaceX prüfen laut Bloomberg weiterhin eine mögliche Fusion",
      sec30: "BASF legte heute, 28.10., Q3-Zahlen vor und hob die Ergebnisprognose für 2026 an; CEO Markus Kamieth äußerte sich dabei erstmals öffentlich zur seit Tagen kursierenden Evonik-Offerte von 24 Euro je Aktie (über 11 Mrd. Euro), sagte aber, Zukäufe seien in der BASF-Strategie „ein Kann, kein Muss”, man werde „keine überhöhten Preise zahlen” – eine offizielle Bestätigung des Preises blieb aus. Die RAG-Stiftung (rund 43 bis 44 % der Evonik-Aktien) äußerte sich weiterhin nicht öffentlich; die Evonik-Aktie notiert mit rund 21,40 Euro unter dem kursierenden Angebotspreis. Beim EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) richteten mehrere Analystenhäuser (DZ Bank, JPMorgan, Barclays, Baird) ihre Kursziele nahe am Angebotspreis aus und stuften auf neutral zurück. Bei Tesla und SpaceX prüfen laut einem Bloomberg-Bericht vom 27.10. unabhängige, von Musk nicht beteiligte Direktoren-Ausschüsse weiterhin eine mögliche Fusion; die Tesla-Aktie stieg nach einer Barclays-Hochstufung um 5,2 % auf 391,62 Dollar.",
      blocks: [
        { h: "Was ist der neue Stand bei BASF/Evonik?", items: [
          { tag: "position", text: "BASF-Chef Markus Kamieth äußerte sich am 28.10. bei der Vorlage der Q3-Zahlen erstmals öffentlich zur Evonik-Offerte: Zukäufe seien in der BASF-Strategie „ein Kann, kein Muss”, man werde „keine überhöhten Preise zahlen” – den seit Tagen kursierenden Preis von 24 Euro je Aktie bestätigte er nicht.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "Die RAG-Stiftung, die rund 43 bis 44 % der Evonik-Aktien hält, äußerte sich weiterhin nicht öffentlich zur Offerte; laut Berichten hatte ihr Vorstand das Angebot bereits am 9.10. erstmals beraten, ohne Festlegung. Die Evonik-Aktie notiert mit rund 21,40 Euro unter dem kursierenden Angebotspreis von 24 Euro." }
        ]},
        { h: "Wie reagieren Analysten auf den EQT-Kauf von Qiagen?", items: [
          { tag: "fakt", text: "Mehrere Analystenhäuser richteten ihre Kursziele für Qiagen nahe am Angebotspreis von 46,50 Euro aus und stuften auf neutral zurück: DZ Bank (Kaufen auf Halten), JPMorgan (Overweight auf Neutral), Barclays (Overweight auf Equal Weight); Citigroup erhöhte sein Kursziel auf 52 Dollar.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] }
        ]},
        { h: "Wie ist der Stand bei Tesla und SpaceX?", items: [
          { tag: "unbestaetigt", text: "Laut einem Bloomberg-Bericht vom 27.10. prüfen unabhängige, von Elon Musk nicht beteiligte Direktoren-Ausschüsse beider Unternehmen weiterhin eine mögliche Fusion; Musk selbst nannte den Prozess einen „odd kabuki dance” und nennt eine Zustimmung von 50 % aller ausstehenden Aktien als hohe Hürde.",
            ask: [{ label: "Mehr zum Private-Credit-Markt", ref: "s:12" }] },
          { tag: "fakt", text: "Die Tesla-Aktie stieg am 27.10. um 5,2 % auf 391,62 Dollar, nachdem Barclays sein Kursziel von 370 auf 450 Dollar angehoben hatte." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich BASF-Chef Kamieth erstmals öffentlich, aber ohne Preisbestätigung zu Evonik äußert, während sich Analysten beim Qiagen-Deal bereits am Angebotspreis orientieren und bei Tesla/SpaceX weiterhin nur unabhängige Ausschüsse prüfen, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "über 11 Mrd. € (BASF/Evonik, weiterhin unbestätigt) · rund 10,8 Mrd. € (EQT/Qiagen, bestätigt)", buyer: "BASF · EQT-XI-Fonds", target: "Evonik · Qiagen", sector: "Chemie / Biotech-Software", type: "Unternehmensübernahme (BASF/Evonik unbestätigt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "onvista: BASF setzt sich Preisgrenze für Evonik-Kauf, Prognose angehoben", url: "https://www.onvista.de/news/2026/10-28-basf-setzt-sich-preisgrenze-fuer-evonik-kauf-prognose-angehoben-0-20-26569291" },
        { title: "finanzen.at: ROUNDUP – BASF hebt Ergebnisprognose für 2026 an, weiter an Evonik interessiert", url: "https://www.finanzen.at/nachrichten/aktien/roundup-basf-hebt-ergebnisprognose-fuer-2026-an-weiter-an-evonik-interessiert-1036676048" },
        { title: "ad-hoc-news.de: Evonik's 24 question – a sweetened bid, a silent owner and two paths forward", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/evonik-s-24-question-a-sweetened-bid-a-silent-owner-and-two-paths-forward/70401701" },
        { title: "goldesel.de: Qiagen-Aktie – DZ Bank stuft nach EQT-Offerte auf Halten ab", url: "https://goldesel.de/aktien/news/qiagen-aktie-dz-bank-stuft-nach-eqt-offerte-auf-halten-ab" },
        { title: "Bloomberg: SpaceX and Tesla turn to boards cozy with Musk to mull a merger", url: "https://www.bloomberg.com/news/articles/2026-10-27/spacex-and-tesla-turn-to-boards-cozy-with-musk-to-mull-a-merger" },
        { title: "fxleaders.com: TSLA stock jumps 5% to $391.62 after Barclays upgrade", url: "https://www.fxleaders.com/news/2026/10/27/tsla-stock-jumps-5-to-391-62-after-barclays-upgrade-on-spacex-merger-hopes/" }
      ]
    },

    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-bcred-blueowl-sec-10-28", cats: ["credit", "pe"], when: "Blackstone-Q3 22.10. · Blue-Owl-Rücknahmen Q3 · SEC-Vorschlag 1.10.2026",
      headline: "Bei Blackstones BCRED und bei Blue Owls Technologie-Kreditfonds werden erneut mehr Rücknahmen angefragt als ausgezahlt, die SEC schlägt derweil erleichterten Privatanleger-Zugang zu Privatmärkten vor",
      sec30: "Beim Blackstone Private Credit Fund (BCRED) wollten Anleger im dritten Quartal 2026 netto rund 10 % der Anteile (4,3 Mrd. Dollar) zurückziehen – das dritte Quartal in Folge über dem vertraglichen 5-Prozent-Quartalslimit (Q1: 7 %, Q2: 10 %, Q3: 10 %); Anleger erhalten über zwei Quartale rund 75 % der angefragten Summe. Blackstone meldete für das Konzern-Quartal einen bereinigten Gewinn pro Aktie von 1,32 Dollar (Konsens 1,26 Dollar) bei 63 Mrd. Dollar Nettozuflüssen. Bei Blue Owl wollten Anleger beim Technologie-Kreditfonds OTIC bereits das dritte Quartal in Folge mehr zurückziehen, als der Fonds auszahlen muss: 39 % der Anteile (1,1 Mrd. Dollar), nach 38,1 % im Vorquartal, erneut auf 5 % gekappt. Branchenschätzungen gehen von rund 15,6 Mrd. Dollar aus, die aktuell in solchen Rücknahmebeschränkungen („Gates”) stecken. Die SEC schlug am 1.10. vor, Privatanlegern über ein modernisiertes Interval-Fund-Regelwerk und neue Offenlegungspflichten erleichterten Zugang zu Privatmärkten zu verschaffen.",
      blocks: [
        { h: "Wie ist der Stand bei Blackstones BCRED?", items: [
          { tag: "fakt", text: "Beim Earnings Call am 22.10. berichtete Blackstone für BCRED im dritten Quartal 2026 Rücknahmewünsche von rund 10 % der Anteile (4,3 Mrd. Dollar) – das dritte Quartal in Folge über dem vertraglichen Quartalslimit von 5 % (Q1: 7 %, Q2: 10 %); Anleger erhielten über zwei Quartale rund 75 % der angefragten Summe.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "fakt", text: "Blackstone meldete für das Konzern-Quartal einen bereinigten Gewinn pro Aktie von 1,32 Dollar (Konsens: 1,26 Dollar) bei 63 Mrd. Dollar Nettozuflüssen über den Gesamtkonzern; das verwaltete Vermögen stieg um 10 % auf 1,37 Billionen Dollar.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was zeigt sich bei Blue Owl und weiteren Fonds?", items: [
          { tag: "unbestaetigt", text: "Blue Owl verzeichnete beim Technologie-Kreditfonds OTIC bereits das dritte Quartal in Folge Rücknahmewünsche über dem Limit: 39 % der Anteile (1,1 Mrd. Dollar), nach 38,1 % im Vorquartal, erneut auf 5 % gekappt.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] },
          { tag: "unbestaetigt", text: "Auch der Apollo Debt Solutions BDC (25 Mrd. Dollar) hatte bereits wiederholt bei 5 % gekappt, nach Rücknahmewünschen von 11,2 % und 16,8 % in den Vorquartalen; branchenweit sollen laut Schätzungen rund 15,6 Mrd. Dollar in solchen Rücknahmebeschränkungen stecken." }
        ]},
        { h: "Was unternimmt die SEC?", items: [
          { tag: "fakt", text: "Die SEC schlug am 1.10. vor, Privatanlegern über ein modernisiertes Interval-Fund-Regelwerk und neue Offenlegungspflichten erleichterten Zugang zu Privatmärkten zu verschaffen; die Kommentierungsfrist läuft 60 Tage.",
            ask: [{ label: "Wie wirken höhere Zinsen auf Private-Credit-Ausfälle?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei mehreren großen Private-Credit-Fonds weiterhin deutlich mehr Rücknahmen angefragt werden, als die Fonds vertraglich auszahlen müssen – und sich das Muster über mehrere Quartale fortsetzt –, zeigt anhaltenden Druck in Teilen der Anlageklasse, auch wenn Blackstone auf Konzernebene zugleich über dem Gewinnkonsens lag und die SEC gleichzeitig über einen erleichterten Privatanleger-Zugang nachdenkt." }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:nonaccrual-default"],
      sources: [
        { title: "CRE Daily: BCRED holds 5% repurchase cap as requests hit $4.3B", url: "https://www.credaily.com/briefs/bcred-holds-5-repurchase-cap-as-requests-hit-4-3b/" },
        { title: "Blackstone: 3Q26 Earnings Press Release", url: "https://www.blackstone.com/wp-content/uploads/sites/2/2026/10/Blackstone3Q26EarningsPressRelease.pdf" },
        { title: "Bloomberg: Blue Owl again caps two BDCs after 39% withdrawal requests", url: "https://www.bloomberg.com/news/articles/2026-10-02/blue-owl-again-caps-two-bdcs-after-39-17-withdrawal-requests" },
        { title: "angelinvestorsnetwork.com: BDC Redemption Crisis 2026", url: "https://angelinvestorsnetwork.com/alternative-investments/bdc-redemption-crisis-2026-private-credit-liquidity-gates" },
        { title: "CNBC: Private credit, SEC and retail investors", url: "https://www.cnbc.com/2026/10/01/private-credit-sec-retail-investors.html" }
      ]
    }
    ,
    /* 13 TECHNOLOGIE: COREWEAVE/META/NVIDIA/BROADCOM */
    {
      id: "coreweave-meta-nvidia-broadcom-10-28", cats: ["tech"], when: "CoreWeave-Erholung 27.10. · Broadcom/Anthropic-Deal 26.10. · Microsoft/Alphabet-Zahlen heute Abend, Amazon morgen",
      headline: "CoreWeave erholt sich nach einer Hochstufung von Goldman Sachs, Broadcom sichert sich eine 63-Milliarden-Dollar-Finanzierung für Anthropic-Chips, Microsoft und Alphabet legen heute Abend Quartalszahlen vor",
      sec30: "CoreWeaves 5-Jahres-Kreditausfallversicherungen (CDS) lagen am 26.10. bei rund 1.148 Basispunkten – leicht unter dem Rekord vom 22.10. (bis 1.194 Punkte), aber weiterhin auf „Distress”-Niveau; die Aktie sprang am 27.10. dagegen um 7,9 % auf 59,57 Dollar, nachdem Goldman Sachs das Rating von Neutral auf Kaufen hochgestuft hatte und ein neues Rechenzentrum in Dänemark in Betrieb ging. Broadcom sicherte sich am 26.10. eine 63-Mrd.-Dollar-Finanzierung (unter anderem von Bank of America, Citi, Morgan Stanley und Blackstone) für eigene KI-Chips, die an Anthropic verleast werden sollen; der Halbleiterindex SOX legte am 27.10. um 3,6 % zu. Nvidias Aktie stieg um 0,9 % auf 217,94 Dollar (Marktkapitalisierung rund 5,25 Billionen Dollar); Nvidia investierte zudem 3 Mrd. Dollar in Metas neues Aktienangebot. Meta wies für Q3 erstmals einen negativen freien Cashflow aus (−2,12 Mrd. Dollar) und kündigte eine Finanzierung von bis zu 95 Mrd. Dollar über neue Aktien an. Microsoft und Alphabet berichten heute nach Börsenschluss Quartalszahlen, Amazon folgt morgen.",
      blocks: [
        { h: "Wie geht es CoreWeave?", items: [
          { tag: "fakt", text: "CoreWeaves 5-Jahres-Kreditausfallversicherungen (CDS) lagen am 26.10. bei rund 1.148 Basispunkten, leicht unter dem Rekord vom 22.10. (bis 1.194 Punkte) – weiterhin ein Niveau, das einer impliziten 5-Jahres-Ausfallwahrscheinlichkeit von rund 60 % entspricht.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Die Aktie sprang am 27.10. um 7,9 % auf 59,57 Dollar, nachdem Goldman Sachs das Rating von Neutral auf Kaufen hochgestuft hatte; als weitere Treiber nennen Berichte ein neues Rechenzentrum in Dänemark und die Expansion nach Indien. Der Nettozinsaufwand stieg im dritten Quartal auf 640 Mio. Dollar (von 267 Mio. Dollar im Vorjahr)." }
        ]},
        { h: "Was zeigt der Broadcom-Anthropic-Deal, und wie entwickelt sich Meta?", items: [
          { tag: "fakt", text: "Broadcom sicherte sich am 26.10. eine 63-Mrd.-Dollar-Finanzierung über eine eigens gegründete Zweckgesellschaft – Bank of America, Citi und Morgan Stanley stellen rund 43,5 Mrd. Dollar als vorrangige Kredite, Blackstone übernimmt nachrangige Finanzierung –, um eigene KI-Chips zu kaufen und an Anthropic zu verleasen; Lieferungen sollen 2027 beginnen.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Meta wies für das dritte Quartal erstmals als börsennotiertes Unternehmen einen negativen freien Cashflow aus (−2,12 Mrd. Dollar, Vorjahr +10,63 Mrd. Dollar) und kündigte eine Finanzierung von bis zu 95 Mrd. Dollar über ein sofortiges Aktien-/Wandelvorzugsangebot (35 Mrd. Dollar) sowie ein Programm über neue, nicht stimmberechtigte Class-C-Aktien (bis zu 60 Mrd. Dollar) an." }
        ]},
        { h: "Wie entwickelten sich Nvidia und der Halbleiterindex SOX?", items: [
          { tag: "fakt", text: "Nvidias Aktie stieg am 27.10. um 0,9 % auf 217,94 Dollar, die Marktkapitalisierung liegt bei rund 5,25 Billionen Dollar – unter dem Anfang Oktober erreichten Zwischenhoch nahe 6 Billionen Dollar. Nvidia investierte zudem 3 Mrd. Dollar in Metas neues Aktienangebot. Der Halbleiterindex SOX legte am 27.10. um 3,6 % auf 11.482,5 Punkte zu, unter anderem getragen von Broadcom.",
            ask: [{ label: "Mehr zur Marktreaktion insgesamt", ref: "s:1" }] },
          { tag: "unbestaetigt", text: "Investor Michael Burry verweist weiterhin auf Nvidias rund 105-Mrd.-Dollar-Garantie für OpenAI als Beleg für „zirkuläre Finanzierung”; laut einem Bericht soll sich Nvidias eigenes Kreditausfallrisiko (CDS) zuletzt verdreifacht und das von Meta überholt haben. Nvidia widerspricht dieser Einschätzung.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was steht heute und morgen bei Microsoft, Alphabet und Amazon an?", items: [
          { tag: "fakt", text: "Microsoft und Alphabet legen heute nach US-Börsenschluss Quartalszahlen vor (Alphabet 16:30 Uhr, Microsoft 17:30 Uhr Eastern Time), Amazon folgt morgen um 17 Uhr Eastern Time. Analysten erwarten unter anderem für Microsoft einen Umsatz von rund 90,6 Mrd. Dollar und für Alphabet rund 128 Mrd. Dollar, bei weiter hohen Investitionsausgaben (Capex) für KI-Infrastruktur." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass CoreWeave sich nach einer Analysten-Hochstufung erholt, Broadcom eine milliardenschwere neue KI-Finanzierung sichert und Meta erstmals einen negativen freien Cashflow ausweist, während heute und morgen die Zahlen von Microsoft, Alphabet und Amazon anstehen, zeigt, wie genau Anleger derzeit beobachten, ob sich die hohen KI-Investitionen in profitablen Cashflow übersetzen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Benzinga: CoreWeave CDS hits record, Lehman-style default risk", url: "https://www.benzinga.com/markets/bonds/26/10/62603452/coreweave-cds-record-lehman-default-risk" },
        { title: "The Motley Fool: Stock market today, Oct. 27 – CoreWeave surges on Denmark data center launch", url: "https://www.fool.com/coverage/stock-market-today/2026/10/27/stock-market-today-oct-27-coreweave-surges-on-denmark-data-center-launch/" },
        { title: "Bloomberg: Broadcom arranges $63 billion deal to finance Anthropic's chips", url: "https://www.bloomberg.com/news/articles/2026-10-26/broadcom-arranges-63-billion-deal-to-finance-anthropic-s-chips" },
        { title: "KuCoin: Meta's AI spending and credit risk – $825 billion commitments", url: "https://www.kucoin.com/blog/id-meta-ai-spending-credit-risk-825-billion-commitments" },
        { title: "Benzinga: Michael Burry points to Nvidia's $105B OpenAI guarantee as circular financing red flag", url: "https://www.benzinga.com/markets/earnings/26/08/61486426/michael-burry-points-to-nvidias-105b-openai-guarantee-as-circular-financing-red-flag-whistling-past-the-graveyard" }
      ]
    },

    /* 14 ENERGIE */
    {
      id: "oelpreis-gasspeicher-opec-lukoil-10-28", cats: ["energy", "geo"], when: "Brent/WTI-Schwankungen 27./28.10. · Gasspeicher-Stand 22.10. · OPEC+-Treffen 1.11. · Lukoil-Frist 21.11.2026",
      headline: "Der Ölpreis bewegt sich zwischen Trumps befristeter Lockerung der Russland-Sanktionen und der Eskalation am Golf, die deutschen Gasspeicher bleiben deutlich unter dem Herbstziel",
      sec30: "Der Ölpreis war am Dienstag laut Reuters um rund 1 % auf etwa 108,59 Dollar je Barrel (Brent) gefallen, nachdem Präsident Trump Sanktionen und Zölle gegen Russland befristet (bis zu 60 Tage) gelockert hatte – andere Quellen nennen für denselben Tag deutlich abweichende Werte zwischen rund 109,67 und 115 Dollar. Am Mittwochmorgen erholte sich der Preis laut einer Meldung auf rund 115,51 Dollar, da Zweifel aufkamen, ob Russland die angekündigte Exportsteigerung tatsächlich liefern kann, während die Ukraine laut Berichten weiterhin russische Ölinfrastruktur angreift. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %. Die OPEC+ wird beim Treffen am 1.11. laut Delegierten voraussichtlich an unveränderten Förderquoten festhalten; die OFAC-Frist für Verhandlungen über eingefrorenes Lukoil-Auslandsvermögen läuft weiterhin bis zum 21.11.2026.",
      blocks: [
        { h: "Warum schwankt der Ölpreis derzeit so stark?", items: [
          { tag: "unbestaetigt", text: "Reuters berichtete für Dienstag einen Rückgang um rund 1 % auf etwa 108,59 Dollar je Barrel (Brent), nachdem Präsident Trump Sanktionen und Zölle gegen Russland befristet gelockert hatte; andere Quellen nennen für denselben Tag deutlich abweichende Werte zwischen rund 109,67 und 115 Dollar – die Angaben schwanken stark je nach Messzeitpunkt und Quelle.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "einordnung", text: "Am Mittwochmorgen erholte sich der Preis laut einer Meldung auf rund 115,51 Dollar; als Hintergrund nennen Berichte Zweifel daran, ob Russland die nach der Sanktionslockerung angekündigte Exportsteigerung tatsächlich liefern kann, während die Ukraine laut Berichten weiterhin russische Ölinfrastruktur und den Hafen St. Petersburg angreift.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10.; die Bundesnetzagentur sieht aktuell dennoch kein akutes Versorgungsrisiko.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Wie ist der Stand bei der OPEC+ und bei Russland-Sanktionen?", items: [
          { tag: "unbestaetigt", text: "Die OPEC+ wird beim Treffen am 1.11. laut Delegierten voraussichtlich an den seit dem 4.10. unveränderten Förderquoten festhalten; Änderungen vor 2027 gelten als unwahrscheinlich, auch weil die tatsächliche Förderung wegen der Störungen an Hormus und bei russischen Lieferungen unter den Zielwerten liegt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Die US-Behörde OFAC erlaubt Verhandlungen über eingefrorenes Auslandsvermögen des russischen Ölkonzerns Lukoil weiterhin nur bis zum 21.11.2026, ohne dass ein tatsächlicher Eigentumsübergang erlaubt ist; ein zuvor verhandelter Carlyle-Deal war Anfang Oktober fallengelassen worden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis zwischen einer befristeten Sanktionslockerung gegen Russland und der fortgesetzten Eskalation am Golf hin- und herschwankt, während die deutschen Gasspeicher weiterhin unter dem gesetzlichen Ziel liegen, zeigt, wie unmittelbar geopolitische Nachrichten derzeit auf den Ölpreis durchschlagen.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "aktien.news: Ölpreis fällt – Märkte ringen mit Russland-Sanktionen und Iran-Krise", url: "https://www.aktien.news/olpreis-fallt-markte-ringen-mit-russland-sanktionen-und-iran-krise" },
        { title: "ARIVA.DE: Ölpreise fallen – Trump lockert Russland-Sanktionen", url: "https://www.ariva.de/news/oelpreise-fallen-trump-lockert-russland-sanktionen-rsf-12172979" },
        { title: "netz-trends.de: Gasspeicher Deutschland – 61,1 Prozent (22. Oktober 2026)", url: "https://www.netz-trends.de/gasspeicher-deutschland-61-1-prozent-22-oktober-2026-bundesnetzagentur-gaspreis-destatis/" },
        { title: "Interfax: OFAC extends Lukoil's license to sell foreign assets until Nov 21", url: "https://interfax.com/newsroom/top-stories/119637/" }
      ]
    },

    /* 15 INTERNATIONAL/GEOPOLITIK: GAZA/TAIWAN/VENEZUELA */
    {
      id: "gaza-taiwan-venezuela-international-10-28", cats: ["world", "geo"], when: "UN-Bericht Gaza 26.10. · Knesset-Wahl Israel 27.10. · Machado-Rückkehr 25./26.10. · El Fasher 27.10.2026",
      headline: "Eine UN-Untersuchungskommission wirft Israel trotz Waffenstillstand anhaltende schwere Verstöße vor, in Venezuela kehrte Oppositionsführerin Machado aus dem Exil zurück, China setzt den militärischen Druck auf Taiwan fort",
      sec30: "Eine UN-Untersuchungskommission warf Israel am 26.10. vor, trotz des seit dem 10.10. formal geltenden Waffenstillstands weiterhin schwere Verstöße gegen das Völkerrecht zu begehen und verwies auf mehr als 1.400 seit Beginn des Waffenstillstands getötete Palästinenser; Israel wies den Bericht als „Desinformationskampagne” zurück und forderte die Auflösung der Kommission. In Ostasien meldete ein Thinktank-Update seit Anfang Oktober 166 chinesische Militärflugzeuge und 309 Schiffe rund um Taiwan sowie die Verlegung der Flugzeugträgergruppe Liaoning in den westlichen Pazifik; Taiwans Verteidigungsminister Koo wirft China „kognitive Kriegsführung” vor. In Venezuela kehrte Oppositionsführerin María Corina Machado am 25./26.10. aus dem Exil zurück; Präsident Trump feierte die Ankunft eines Tankers mit venezolanischem Öl in Texas. Im Sudan eroberte die paramilitärische RSF am 27.10. nach 18-monatiger Belagerung die Stadt El Fasher in Nord-Darfur.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen gilt seit dem 10.10. formal weiter." },
          { tag: "unbestaetigt", text: "Eine UN-Untersuchungskommission warf Israel am 26.10. vor, trotz des Waffenstillstands weiterhin schwere Verstöße gegen das Völkerrecht zu begehen, und verwies auf mehr als 1.400 seit Beginn des Waffenstillstands getötete Palästinenser; Israel wies den Bericht als „Desinformationskampagne” zurück und forderte die Auflösung der Kommission." }
        ]},
        { h: "Was geschieht zwischen China und Taiwan?", items: [
          { tag: "unbestaetigt", text: "Laut einem Thinktank-Update wurden seit Anfang Oktober 166 chinesische Militärflugzeuge und 309 Schiffe rund um Taiwan erfasst, zudem verlegte China die Flugzeugträgergruppe Liaoning in den westlichen Pazifik." },
          { tag: "position", text: "Taiwans Verteidigungsminister Wellington Koo wirft China „kognitive Kriegsführung” vor; ein von den USA zugesagtes, rund 14 Mrd. Dollar schweres Rüstungspaket (Patriot/T-Dome) ist laut Berichten weiterhin nicht final von Präsident Trump genehmigt." }
        ]},
        { h: "Welche weiteren internationalen Entwicklungen gab es?", items: [
          { tag: "fakt", text: "Oppositionsführerin María Corina Machado kehrte am 25./26.10. aus dem Exil nach Venezuela zurück; Präsident Trump feierte die Ankunft eines Tankers mit venezolanischem Öl in Texas." },
          { tag: "unbestaetigt", text: "Im Sudan eroberte die paramilitärische RSF am 27.10. nach einer rund 18-monatigen Belagerung die Stadt El Fasher in Nord-Darfur; Genfer Friedensgespräche brachten laut Berichten keinen Durchbruch." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere internationale Konfliktlinien – Gaza, Taiwan, Sudan – parallel ohne klare Lösung fortbestehen, während sich in Venezuela mit der Rückkehr Machados zumindest eine innenpolitische Entwicklung sichtbar verändert, zeigt, wie viele geopolitische Baustellen derzeit gleichzeitig offen bleiben." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "The National/Islamabad Post: UN commission accuses Israel of ongoing violations in Gaza", url: "https://www.thenationalnews.com" },
        { title: "AEI: China & Taiwan Update, October 27, 2026", url: "https://www.aei.org/commentary/china-taiwan-update-october-23-2026/" },
        { title: "MercoPress: Machado returns to Venezuela from exile", url: "https://en.mercopress.com" },
        { title: "UN News: RSF captures El Fasher in North Darfur", url: "https://news.un.org" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX stieg am Dienstag, 27.10., um 0,71 % auf 25.590,77 Punkte, der Euro Stoxx 50 um 0,79 % auf 6.164,69 Punkte; S&P 500 (+0,60 %) und Nasdaq (+1,18 %) legten ebenfalls zu, der Dow Jones nur minimal (+0,03 %)." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund nennen Berichte den am Dienstag gefallenen Ölpreis und eine Tech-Rally vor den Quartalszahlen von Microsoft und Alphabet am Mittwochabend und Amazon am Donnerstag." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Laut CME FedWatch liegt die eingepreiste Wahrscheinlichkeit für eine Fed-Zinspause heute Abend bei rund 90 %; für die Dezember-Sitzung preisen Marktbeobachter dagegen mit rund 80 % Wahrscheinlichkeit eine weitere Erhöhung ein." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Die Fed hatte im September überraschend auf 3,75 bis 4,00 % angehoben; die heutige Entscheidung fällt um 14 Uhr Eastern Time (19 Uhr MEZ), die PCE-Inflation und die Q3-BIP-Daten folgen erst morgen." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite liegt bei rund 4,99 % und damit knapp einen Prozentpunkt über dem Fed-Leitzins von 3,75 bis 4,00 %." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold schwankte am Dienstag je nach Quelle und Messzeitpunkt zwischen rund 4.023 und 4.061 Dollar je Feinunze; eine Mittwochmorgen-Meldung nennt rund 4.048 Dollar." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin stieg am Dienstag von rund 79.756 Dollar am Morgen auf rund 80.700 bis 80.800 Dollar am Abend – weiterhin deutlich unter seinem Allzeithoch vom 6.10.2025." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Dienstag bei 1,1150 Dollar, niedriger als die 1,1188 Dollar vom Montag; eine Vorbörsen-Meldung nennt für Mittwoch bereits rund 1,1123 Dollar." },
    "ecb-hike": { tag: "unbestaetigt", story: 4, text: "Laut einer Reuters-Umfrage erwarten 70 von 73 befragten Ökonomen für die morgige EZB-Sitzung eine Pause bei 2,50 %, 64 von 73 erwarten für Dezember dagegen eine weitere Erhöhung." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone lag im September bei 3,8 %, in Deutschland bei 3,3 %; die Oktober-Schnellschätzung für die Eurozone wird erst am 4.11. veröffentlicht." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro; die Steuerschätzung vom 22.10. brachte dem Bund nur rund 4,1 Mrd. Euro an Mehreinnahmen." },
    "debt-brake": { tag: "unbestaetigt", story: 5, text: "Laut Berichten wirft der Bundesrechnungshof dem Finanzministerium verfassungsrechtlich bedenkliche Praktiken zur Schließung von Finanzierungslücken vor; der Zeitplan mit Bereinigungssitzung am 12.11. und Schlussabstimmung am 27.11. bleibt unverändert." },
    "rente-basics": { tag: "position", story: 6, text: "Arbeitsminister Alexander Schweitzer (SPD) knüpft einen Gesetzentwurf zur Rente mit 63 weiterhin an eine vorherige Koalitionseinigung; Kanzler Merz und CSU-Chef Söder drängen auf Tempo." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Laut dem Forsa-Trendbarometer erwarten weiterhin 56 % der Befragten ein vorzeitiges Ende der Koalition aus Union und SPD; INSA (27.10.) sieht die AfD bei 29,5 % vor der Union (19,0 %)." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 8, text: "Der Ölpreis fiel am Dienstag laut Reuters um rund 1 % auf etwa 108,59 Dollar nach Trumps befristeter Lockerung der Russland-Sanktionen und erholte sich am Mittwochmorgen auf rund 115,51 Dollar, nachdem Zweifel an Russlands Lieferfähigkeit aufkamen." },
    "hormuz": { tag: "position", story: 8, text: "Die iranische Revolutionsgarde erklärte die Straße von Hormus am 26.10. erneut für „geschlossen” und drohte Schiffen; die USA beanspruchen dagegen „volle Kontrolle” über die Meerenge." },
    "defence-order": { tag: "unbestaetigt", story: 9, text: "Beim Arminius-Programm bleibt die parlamentarische Befassung für den 9.12.2026 angesetzt; Covenant erhielt am 22.10. eine dänische Bestellung für den Marschflugkörper „Anthem”, Diehl Defence verhandelt mit Fire Point über das „Flamingo”-Programm." },
    "defence-stocks": { tag: "fakt", story: 10, text: "US-Rüstungswerte gaben am Dienstag nach ihrer Rekordwoche leicht nach; bei RENK bleibt die Kaufempfehlung seit dem 1.10. auf Neutral zurückgestuft, bei Hensoldt sehen mehrere Analysten weiteres Potenzial." },
    "ma-steps": { tag: "fakt", story: 11, text: "Mehrere Analystenhäuser richteten ihre Kursziele für Qiagen nahe am EQT-Angebotspreis von 46,50 Euro aus und stuften auf neutral zurück; die LSEG/Octus-Übernahme ist seit dem 22.10. bestätigt." },
    "take-private-why": { tag: "position", story: 11, text: "BASF-Chef Kamieth äußerte sich am 28.10. erstmals öffentlich zur Evonik-Offerte, ohne den kursierenden Preis von 24 Euro je Aktie zu bestätigen; die RAG-Stiftung schweigt weiterhin öffentlich." },
    "deal-risks": { tag: "unbestaetigt", story: 11, text: "Laut Bloomberg prüfen unabhängige Ausschüsse von Tesla und SpaceX weiterhin eine mögliche Fusion, ohne Beteiligung von Elon Musk; ein verbindliches Angebot liegt nicht vor." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Beim Blackstone Private Credit Fund (BCRED) wollten Anleger im dritten Quartal 2026 erneut rund 10 % der Anteile zurückziehen – das dritte Quartal in Folge über dem vertraglichen 5-Prozent-Limit." },
    "redemption-limits": { tag: "unbestaetigt", story: 12, text: "Blue Owl verzeichnete beim Technologie-Kreditfonds OTIC bereits das dritte Quartal in Folge Rücknahmewünsche von rund 39 % und kappte die Auszahlung erneut auf 5 %." },
    "ai-capex": { tag: "fakt", story: 13, text: "Meta wies für das dritte Quartal erstmals einen negativen freien Cashflow aus (−2,12 Mrd. Dollar) und kündigte eine Finanzierung von bis zu 95 Mrd. Dollar über neue Aktien an; Broadcom sicherte sich parallel eine 63-Mrd.-Dollar-Finanzierung für KI-Chips." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "Investor Michael Burry verweist weiterhin auf Nvidias rund 105-Mrd.-Dollar-Garantie für OpenAI als Beleg für „zirkuläre Finanzierung”; Nvidias eigenes Kreditausfallrisiko soll sich laut einem Bericht zuletzt verdreifacht haben." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 %." },
    "opec-plus-why": { tag: "unbestaetigt", story: 14, text: "Die OPEC+ wird beim Treffen am 1.11. laut Delegierten voraussichtlich an unveränderten Förderquoten festhalten, auch weil die tatsächliche Förderung wegen der Störungen an Hormus unter den Zielwerten liegt." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Der Ölpreis schwankte zwischen rund 108 und 116 Dollar je Barrel (Brent); Öl- und Gaspreise bleiben Belastungsfaktoren für Sprit-, Heiz- und Transportkosten in Europa." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Zinsen", type: "Fakt", story: 2,
      q: "Um wie viel Uhr MEZ gibt die Fed ihre Zinsentscheidung heute, 28.10.2026, bekannt?",
      options: [
        "9 Uhr MEZ",
        "19 Uhr MEZ",
        "Mitternacht MEZ",
        "14 Uhr MEZ"
      ],
      answer: 1,
      explain: "Die Fed trifft ihre Entscheidung um 14 Uhr Eastern Time; durch die Zeitdifferenz von 5 Stunden (Europa ist seit dem 25.10. auf Winterzeit, die USA stellt erst am 1.11. um) entspricht das 19 Uhr MEZ."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, die iranische Revolutionsgarde würde die Straße von Hormus tatsächlich faktisch blockieren. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Einen tendenziell steigenden Ölpreis, weil ein großer Teil der weltweiten Öllieferungen durch die Straße von Hormus läuft",
        "Einen tendenziell sinkenden Ölpreis, weil Unsicherheit Anleger beruhigt",
        "Keine Auswirkung, da Öltransporte unabhängig von der Straße von Hormus sind",
        "Eine automatische Erhöhung der OPEC+-Förderquoten"
      ],
      answer: 0,
      explain: "Ein großer Teil der weltweiten Öltransporte läuft durch die Straße von Hormus; eine faktische Blockade würde laut der in Meldung 8 beschriebenen Logik das Angebot verknappen und den Ölpreis tendenziell steigen lassen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Wer leitete die Kabinettssitzung am 28.10.2026, während Kanzler Merz auf Asienreise war?",
      options: [
        "Alexander Schweitzer",
        "Markus Söder",
        "Lars Klingbeil",
        "Friedrich Merz selbst, per Videoschalte"
      ],
      answer: 2,
      explain: "Vizekanzler und Finanzminister Lars Klingbeil (SPD) leitete die Kabinettssitzung am 28.10. in Vertretung des auf Asienreise befindlichen Kanzlers Merz."
    },
    {
      topic: "Deals", type: "Fakt", story: 11,
      q: "Was sagte BASF-Chef Markus Kamieth am 28.10. zur möglichen Evonik-Übernahme?",
      options: [
        "Er bestätigte den Preis von 24 Euro je Aktie offiziell",
        "Er kündigte den Rückzug des Angebots an",
        "Er kündigte eine feindliche Übernahme an",
        "Zukäufe seien in der BASF-Strategie „ein Kann, kein Muss”, man werde keine überhöhten Preise zahlen"
      ],
      answer: 3,
      explain: "Kamieth äußerte sich in der Telefonkonferenz zu den Q3-Zahlen erstmals offiziell, aber zurückhaltend, und bestätigte den kursierenden Preis von 24 Euro je Aktie nicht."
    },
    {
      topic: "Technologie", type: "Zusammenhang", story: 13,
      q: "Angenommen, Microsoft und Alphabet würden heute Abend deutlich höhere KI-Investitionen ankündigen, ohne dass sich das in höheren Cloud-Umsätzen zeigt. Was würde das unter sonst gleichen Bedingungen am ehesten für die Stimmung bei KI-/Chip-Aktien wie Nvidia oder CoreWeave bedeuten?",
      options: [
        "Eine tendenziell positivere Stimmung, weil mehr Investitionen immer als gutes Zeichen gelten",
        "Eine tendenziell vorsichtigere Stimmung, weil Anleger laut Meldung 13 bereits jetzt genau beobachten, ob sich KI-Investitionen in Cashflow übersetzen",
        "Keine Auswirkung, da Capex-Ankündigungen nie Marktreaktionen auslösen",
        "Eine automatische Leitzinssenkung der Fed"
      ],
      answer: 1,
      explain: "Laut Meldung 13 beobachten Anleger bereits jetzt genau, ob sich steigende KI-Investitionen in profitablen Cashflow übersetzen; steigende Ausgaben ohne entsprechenden Umsatz würden die bestehende Vorsicht gegenüber KI-/Chip-Bewertungen eher verstärken."
    }
  ]
};
