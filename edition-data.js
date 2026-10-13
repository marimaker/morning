// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-13",
  dateLabel: "Dienstag, 13. Oktober 2026",
  updatedLabel: "Recherchestand 13.10.2026",
  marketNote: "Diese Ausgabe entsteht am Dienstagmorgen, 13.10.2026, vor Handelsbeginn in Europa. Am Montag, 12.10., war in den USA Columbus Day: Die Aktienbörsen (NYSE, Nasdaq) waren regulär geöffnet, der Anleihemarkt blieb dagegen geschlossen – Berichte nennen das als einen Grund für das dünnere Handelsvolumen am Montag. Für DAX, Euro Stoxx 50, Dow Jones, S&P 500 und Nasdaq gilt deshalb der Schlussstand von Montag, 12.10. Am Dienstagmorgen kam es in Asien zu einem deutlichen Kursrückgang bei Technologie- und Chipwerten; beim Hang Seng wichen vier verschiedene Quellen so stark voneinander ab (von −0,62 % bis +2,1 %), dass kein belastbarer Wert genannt werden kann – er fehlt deshalb in dieser Ausgabe. Bei Gold, Brent-Öl und Bitcoin schwanken die Angaben je nach Erhebungszeitpunkt zwischen Montagabend und Dienstagmorgen; auch hier werden widersprüchliche Werte bei der jeweiligen Kennzahl einzeln vermerkt. Der EZB-Referenzkurs für Dienstag war zum Redaktionsschluss noch nicht veröffentlicht, deshalb gilt der Montagswert.",

  top: [
    { text: "Die US-Börsen schlossen am Montag uneinheitlich (Dow +0,38 % auf 51.850,55 Punkte, S&P 500 −0,06 % auf 7.807,24 Punkte, Nasdaq −0,44 % auf 27.245,90 Punkte), der DAX stieg um 0,76 % auf 25.277,68 Punkte. Am Dienstagmorgen brachen in Asien Technologie- und Speicherchip-Werte ein (Nikkei −2,5 %, Kospi laut Berichten −6,3 % bis über −7 %), nachdem ein chinesischer Speicherchip-Hersteller ein neues Design vorstellte, das die Marktstellung US-amerikanischer und südkoreanischer Anbieter infrage stellt.", ref: "s:1" },
    { text: "Die EU verabschiedete am 12.10. in Luxemburg formell ihr 22. Sanktionspaket gegen Russland (rund 1.600 Einträge). Präsident Trump behauptete am 11.10., Russland und die Ukraine hätten einem „Energie-Waffenstillstand” zugestimmt; wenige Stunden später griff Russland erneut ukrainische Energieanlagen an, mindestens 10 Menschen wurden getötet. Präsident Selenskyj zeigte sich „horribly surprised”.", ref: "s:8" },
    { text: "Die Tankerangriffe in der Straße von Hormus erreichten mit 18 UKMTO-Warnmeldungen seit Oktoberbeginn einen neuen Höchststand; ein US-Kampfjet schaltete am 10.10. ein chinesisch kontrolliertes Schiff aus, das laut CENTCOM versuchte, die US-Blockade iranischer Häfen zu durchbrechen. Ein Houthi-Angriff auf den Flughafen Riad forderte am 10.10. mindestens zwölf Tote.", ref: "s:9" },
    { text: "Nach einer zweitägigen Krisensitzung der CDU-Führung (Hintergrund: Serie von Landtagswahlniederlagen, INSA-Umfrage mit AfD bei 30 %) kündigte Kanzler Merz an, die Stromsteuer für alle Verbraucher auf das EU-Mindestniveau zu senken. In Sachsen-Anhalt weitete sich parallel die Kontroverse um den AfD-Landtagsvizepräsidenten Tillschneider aus.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.277,68", change: "+0,76 % (+193 Pkt., Mo-Schluss)", dir: "up", asof: "Schluss Mo 12.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Woche davor", text: "Am Freitag, 09.10., hatte der DAX laut der vorherigen Ausgabe bei 25.102,34 Punkten geschlossen; der Montag brachte einen weiteren Anstieg auf 25.277,68 Punkte." }
      ],
      moved: {
        intro: "Als Hintergrund für Montag nennen Berichte:",
        items: [
          "Kanzler Merz sprach sich nach der CDU-Klausur für eine Senkung der Stromsteuer für alle Verbraucher aus – das kam bei Anlegern laut Berichten positiv an (Meldung 7).",
          "Rheinmetall legte rund 2,5 bis 2,6 % zu, nachdem Morgan Stanley eine optimistische Sektorstudie zu europäischen Rüstungswerten veröffentlicht hatte (Meldung 10).",
          "Nordex stieg rund 3,9 % nach deutlich höheren Bestellungen im dritten Quartal.",
          "Montag war in den USA Columbus Day; der Anleihemarkt blieb geschlossen, was laut Berichten zu dünnerem Handelsvolumen beitrug."
        ]
      },
      important: [
        { area: "Warnung", text: "Marktexperte Andreas Lipkow betonte laut Berichten, die „jüngste Entspannung am Aktienmarkt” stehe „auf wackligen Beinen” angesichts Sorgen um KI-Finanzierungen, hoher Anleiherenditen und teurer Energie.", ref: "s:14" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Dax erholt sich weiter", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-erholt-sich-weiter-12166629" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.201,21", change: "+0,45 % (Mo-Schluss)", dir: "up", asof: "Schluss Mo 12.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Tagesverlauf", text: "Zur Mittagszeit hatte ad-hoc-news ein Plus von rund 0,4 % „nach Öl-Rückgang” gemeldet; am Abend nennen andere Berichte für den Gesamttag wieder steigende Ölpreise. Beide Angaben zusammen deuten auf eine Trendumkehr im Tagesverlauf hin, ohne dass sich der genaue Zeitpunkt abschließend klären ließ." }
      ],
      moved: {
        intro: "Für Montag nennen Berichte als allgemeinen Hintergrund:",
        items: [
          "Schwankende Ölpreise im Tagesverlauf sowie die allgemeine Erholungstendenz an den europäischen Börsen (Meldung 9)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Der Risikoaufschlag französischer Staatsanleihen bleibt mit rund 139,5 Basispunkten ein Belastungsfaktor für den europäischen Gesamtmarkt.", ref: "s:2" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Europa Schluss – Erholung setzt sich zu Wochenbeginn fort", url: "https://www.ariva.de/news/roundup-aktien-europa-schluss-erholung-setzt-sich-zu-12166657" }
    },
    "sp500": {
      label: "S&P 500", value: "7.807,24", change: "−0,06 % (−4,30 Pkt., Mo-Schluss)", dir: "flat", asof: "Schluss Mo 12.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Montagsschluss: 51.850,55 Punkte (+0,38 %) – der Dow legte zu, während S&P 500 und Nasdaq leicht nachgaben." },
        { label: "Nasdaq", text: "Montagsschluss: 27.245,90 Punkte (−0,44 %, eine andere Quelle nennt −0,49 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Montag:",
        items: [
          "Schwäche bei Speicherchip-Werten (SanDisk, Lumentum) sowie erneute Bewertungs-Nervosität bei Halbleiterwerten wie Marvell und Semtech.",
          "Rotation von Technologie in defensive und Bankwerte vor Beginn der Quartalsberichtssaison; steigende Ölpreise begünstigten diese Rotation zusätzlich."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur anhaltenden Berichtslage um OpenAI und zur KI-Blasen-Diskussion in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "The Motley Fool: Stock Market Today, Oct. 12 – Dow Gains as Memory Stocks Weigh on Nasdaq", url: "https://www.fool.com/coverage/stock-market-today/2026/10/12/stock-market-today-oct-12-dow-gains-as-memory-stocks-weigh-on-nasdaq/" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.245,90", change: "−0,44 % (−120,27 Pkt., Mo-Schluss)", dir: "down", asof: "Schluss Mo 12.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Quellenlage", text: "Fool/Yahoo nennen −0,44 % (−120,27 Punkte); 247wallst.com nennt für denselben Tag −0,49 % – die Richtung stimmt überein, die genaue Prozentzahl schwankt leicht." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Memory-Chip-Schwäche (SanDisk, Lumentum Holdings) wegen Sorgen um chinesischen Speicherchip-Fortschritt.",
          "Anhaltende Verunsicherung durch die widersprüchliche Berichtslage zu OpenAIs Umsatzentwicklung (Meldung 14)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf solche Nachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Yahoo Finance: Stock Market Today, Oct. 12", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-oct-12-212311190.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1181 (EZB-Referenzkurs Mo)", change: "−0,22 % ggü. Fr 09.10. (1,1206)", dir: "down", asof: "EZB-Referenzkurs Mo 12.10.26; Di-Kurs bei Redaktionsschluss noch nicht veröffentlicht", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Hintergrund", text: "Laut Berichten stieg der Dollar zuletzt auf ein 18-Monats-Hoch gegenüber mehreren Währungen – das drückte den Euro leicht, trotz anhaltender geopolitischer Unsicherheit." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein insgesamt stärkerer Dollar belastete den Euro leicht; die unterschiedlichen Zinssignale von Fed und EZB spielten laut Berichten ebenfalls eine Rolle."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed und EZB senden weiterhin unterschiedliche Signale: Mehr dazu in Meldung 4 und Meldung 5.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro foreign exchange reference rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,20–5,24 %", change: "leicht nachgebend ggü. Vorwoche", dir: "down", asof: "Stand Di 13.10.26 morgens (TradingEconomics); andere Quellen nennen für Fr 09.10. rund 5,24 %", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,2 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,2 % Zinsen pro Jahr.",
      compare: [
        { label: "Zwischenhoch", text: "Am 07.10. hatte die Rendite laut einer Quelle zwischenzeitlich 5,36 % erreicht – nach dieser Quelle der höchste Stand seit 2002; andere Quellen nennen für denselben Zeitraum ein Hoch von 5,31 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Seit Mai 2026 steht mit Kevin Warsh ein neuer Fed-Vorsitzender an der Spitze der Notenbank; mehrere Fed-Mitglieder hielten zuletzt an der grundsätzlichen Möglichkeit weiterer Zinserhöhungen fest (Meldung 4).",
          "Gleichzeitig dämpfen schwache Arbeitsmarkt- und Konsumklimadaten die Zinserwartung; die US-Inflationsdaten für September werden morgen, 14.10., veröffentlicht."
        ]
      },
      important: [
        { area: "Fed", text: "Die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung im Oktober liegt laut mehreren Quellen bei rund 16 bis 22 %.", ref: "s:4" }
      ],
      source: { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,48–3,52 %", change: "kaum verändert", dir: "flat", asof: "Stand Mo 12.10.26 (TradingEconomics 3,4752 %); Bundesbank-Monatsdurchschnitt Oktober 3,52 %", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Die Rendite zehnjähriger französischer Staatsanleihen lag laut Berichten bei rund 4,86 bis 4,91 %; der Risikoaufschlag zur Bundesanleihe wird mit rund 139,5 Basispunkten angegeben, nachdem er Anfang Oktober zeitweise über 150 (nach einer Quelle bis 159) Basispunkte erreicht hatte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Sorgen um Frankreichs Haushaltsdefizit und das 43-Mrd.-Euro-Sparpaket von Premierminister Lecornu bleiben laut Berichten ein eigenständiger Belastungsfaktor; Abstimmungen in der Nationalversammlung sind für den 20. und 27.10. angesetzt.",
          "Sichere-Hafen-Nachfrage nach Bundesanleihen stützte den Kurs trotz insgesamt steigender Ölpreise."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Mehr zur EZB-Haltung und zur IWF-Jahrestagung in Bangkok in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.169–4.202 $", change: "uneinheitlich: etwa −0,6 % bis +0,56 % je Quelle", dir: "flat", asof: "Stand Mo 12.10./Di-Vormittag 13.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.190 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "TradingEconomics nennt für Dienstag 4.195,25 Dollar (+0,56 %), metalcharts.org 4.202,39 Dollar; eine andere Quelle nennt für Montag einen Rückgang auf 4.168,78 Dollar (−0,6 %). Die Angaben lassen sich nicht abschließend in Einklang bringen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein auf ein 18-Monats-Hoch gestiegener Dollar belastete Gold trotz anhaltender geopolitischer Unsicherheit.",
          "Zum Vergleich: Im Januar 2026 hatte Gold laut Berichten ein Rekordhoch von 5.608,35 Dollar erreicht, ausgelöst unter anderem durch Sorgen um die Unabhängigkeit der Fed; von diesem Niveau ist der Preis inzwischen deutlich entfernt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Ein starker Dollar und hohe Anleiherenditen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Trading Economics: Gold", url: "https://tradingeconomics.com/commodity/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 103,3–105,9 $", change: "uneinheitlich: etwa −1,1 % bis −0,7 % je Quelle (Vortag zeitweise über 106 $)", dir: "down", asof: "Stand Di 13.10.26 morgens (teils Mo 12.10. je Quelle)", story: 9, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 104 Dollar je Fass (159 Liter) sind etwa 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Montag", text: "Am Montag war Brent laut einer Quelle zeitweise auf über 106 Dollar gestiegen; am Dienstag fiel der Preis laut CNBC wieder auf rund 105,45 bis 105,86 Dollar, eine weitere Quelle nennt bereits für Montag nur rund 103,3 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen gegenläufige Faktoren:",
        items: [
          "US-Energieminister Chris Wright erklärte am 12.10., bis zu 14 Mio. Barrel pro Tag flössen inzwischen durch die Straße von Hormus – rund 80 bis 90 % des Vorkriegsniveaus; eine andere Quelle (Kpler) nennt mit rund 9 Mio. Barrel einen deutlich niedrigeren Wert.",
          "Neue Tankerangriffe in der Straße von Hormus (Meldung 9) und der Houthi-Angriff auf den Flughafen Riad wirkten laut Berichten gleichzeitig preistreibend.",
          "Aussicht auf mehr russisches Dieselangebot am Weltmarkt infolge des US-Russland-Deals dämpfte den Preis laut CNBC zusätzlich (Meldung 8)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den neuen Tankerangriffen und zum Houthi-Angriff auf Riad in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "CNBC: Oil prices today – WTI, Brent fall as traders assess Russian supply prospects", url: "https://cnbc.com/2026/10/13/oil-prices-today-brent-wti-hormuz.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 82.287–83.673 $", change: "leicht schwankend, Tendenz zuletzt abwärts", dir: "down", asof: "Stand Mo 12.10./Di-Vormittag 13.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 bis 84.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Quellenlage", text: "Coinbase nennt für Montag, Handelsstart, 83.673,01 Dollar (+0,9 %); CoinDesk nennt für Montagabend (21:43 EDT) einen niedrigeren Stand von 82.286,98 Dollar. Beide Werte stammen von unterschiedlichen Plattformen zu unterschiedlichen Zeitpunkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Hawkishe FOMC-Signale und die Aussicht auf das morgige US-Inflationsdaten belasten Bitcoin laut Berichten weiterhin.",
          "Auf Prognosemärkten wie Polymarket wird einem Rückgang Richtung 80.000 Dollar laut einer Quelle eine Wahrscheinlichkeit von rund 72 % zugeschrieben."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Bitcoin price today", url: "https://www.coindesk.com/price/bitcoin" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: MONTAG-SCHLUSS + ASIEN DIENSTAG + CHIP-KONKURRENZ */
    {
      id: "maerkte-montag-mixed-asien-chip-ausverkauf-10-13", cats: ["markets"], when: "Schluss Mo 12.10.2026 · Asien-Handel Di 13.10.2026",
      headline: "US-Börsen am Montag uneinheitlich, DAX legt zu, asiatische Technologiewerte brechen am Dienstag wegen chinesischer Chip-Konkurrenz ein",
      sec30: "Am Montag schloss der Dow Jones 0,38 % im Plus auf 51.850,55 Punkte, während S&P 500 (−0,06 %) und Nasdaq (−0,44 %) leicht nachgaben. Der DAX stieg um 0,76 % auf 25.277,68 Punkte, gestützt von Kanzler Merz' Ankündigung zur Stromsteuer, einer Rheinmetall-Rally und einem Nordex-Großauftrag; der Euro Stoxx 50 legte 0,45 % zu. Am Dienstagmorgen brachen in Asien Technologie- und Speicherchip-Werte deutlich ein (Nikkei −2,5 % auf rund 67.350 Punkte, Kospi laut Berichten zwischen −6,3 % und über −7 %), nachdem der chinesische Speicherchip-Hersteller ChangXin Memory ein neues DRAM-Design vorstellte, das die Marktstellung US-amerikanischer und südkoreanischer Chiphersteller infrage stellt.",
      blocks: [
        { h: "Wie haben sich die US-Börsen und der DAX am Montag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones legte 0,38 % auf 51.850,55 Punkte zu; der S&P 500 gab 0,06 % auf 7.807,24 Punkte nach, die Nasdaq Composite 0,44 % auf 27.245,90 Punkte (eine andere Quelle nennt −0,49 %).",
            ask: [{ label: "Was bedeutet eine kleine Veränderung bei der Nasdaq?", ref: "n:nasdaq" }] },
          { tag: "fakt", text: "Der DAX stieg um 0,76 % auf 25.277,68 Punkte, der Euro Stoxx 50 um 0,45 % auf 6.201,21 Punkte.",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] }
        ]},
        { h: "Was wird als Hintergrund für den DAX-Anstieg genannt?", items: [
          { tag: "fakt", text: "Rheinmetall legte rund 2,5 bis 2,6 % zu, nachdem Morgan Stanley eine optimistische Sektorstudie zu europäischen Rüstungswerten veröffentlicht hatte (Meldung 10); Nordex stieg rund 3,9 % nach deutlich höheren Bestellungen im dritten Quartal." },
          { tag: "position", text: "Kanzler Merz kündigte nach einer CDU-Klausur an, die Stromsteuer für alle Verbraucher senken zu wollen – das kam bei Anlegern laut Berichten positiv an.",
            ask: [{ label: "Mehr zur Stromsteuer-Ankündigung", ref: "s:7" }] },
          { tag: "fakt", text: "Montag war in den USA Columbus Day: Der Anleihemarkt blieb geschlossen, was laut Berichten zum dünneren Handelsvolumen beitrug." }
        ]},
        { h: "Warum fiel die Nasdaq trotz DAX-Plus?", items: [
          { tag: "unbestaetigt", text: "Speicherchip-Werte wie SanDisk (−6 % und mehr) und Lumentum Holdings (−10 %) gaben wegen Sorgen um den chinesischen Speicherchip-Fortschritt nach; Halbleiterwerte wie Marvell Technology und Semtech litten unter erneuter Bewertungs-Nervosität. Die anhaltende Berichtslage zu OpenAIs Umsatzentwicklung belastete zusätzlich.",
            ask: [{ label: "Mehr zur OpenAI-Umsatzdebatte und zur KI-Blasen-Diskussion", ref: "s:14" }] }
        ]},
        { h: "Wie entwickelten sich die asiatischen Börsen am Dienstag?", items: [
          { tag: "unbestaetigt", text: "Der Nikkei 225 fiel am Dienstagmorgen um rund 2,5 % auf etwa 67.350 Punkte (von 69.030,92 Punkten am Montag); der südkoreanische Kospi fiel laut Berichten zwischen 6,3 % und über 7 %, Samsung und SK Hynix wurden besonders stark getroffen (SK-Hynix-ADRs zeitweise −5,5 %)." },
          { tag: "fakt", text: "Als Grund nennen Berichte den chinesischen Speicherchip-Hersteller ChangXin Memory Technologies, der ein neues DRAM-Design („4F²”) vorstellte und damit Sorgen um die bisherige Marktstellung US-amerikanischer und südkoreanischer Chiphersteller weckte; Nvidia-Lieferungen nach China waren laut Berichten zuvor bereits um 44 % gegenüber dem Vorjahr gefallen." },
          { tag: "unbestaetigt", text: "Der Shanghai Composite fiel je nach Quelle zwischen 0,27 % und 1 %. Beim Hang Seng widersprechen sich vier gefundene Quellen so stark (von −0,62 % bis +2,1 %), dass sich kein belastbarer Wert nennen lässt." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass ein einzelner Bericht über chinesischen Chip-Fortschritt binnen Stunden einen deutlichen Ausverkauf bei asiatischen Technologiewerten auslösen konnte, zeigt erneut, wie empfindlich Anleger derzeit auf jedes Signal zur künftigen Marktstellung bei KI-Chips reagieren. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Der asiatische Ausverkauf trifft auf eine bereits angespannte Zinslage (Meldung 2) und eine von Golf-Spannungen geprägte Ölpreis-Lage (Meldung 9); die KI-Blasen-Debatte wird in Meldung 14 vertieft.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why", "e:ai-capex"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Dax erholt sich weiter", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-erholt-sich-weiter-12166629" },
        { title: "ARIVA.DE: ROUNDUP/Aktien Europa Schluss – Erholung setzt sich zu Wochenbeginn fort", url: "https://www.ariva.de/news/roundup-aktien-europa-schluss-erholung-setzt-sich-zu-12166657" },
        { title: "The Motley Fool: Stock Market Today, Oct. 12 – Dow Gains as Memory Stocks Weigh on Nasdaq", url: "https://www.fool.com/coverage/stock-market-today/2026/10/12/stock-market-today-oct-12-dow-gains-as-memory-stocks-weigh-on-nasdaq/" },
        { title: "fxstreet.de.com: Asiatische Aktienmärkte stürzen ab, Kospi steht angesichts des Chip-Wettbewerbs aus China vor einem Blutbad", url: "https://www.fxstreet.de.com/news/asiatische-aktienmarkte-sturzen-ab-kospi-steht-angesichts-des-chip-wettbewerbs-aus-china-vor-einem-blutbad-202610130326" },
        { title: "finanzen.net: MÄRKTE ASIEN – Leichte Abgaben, Chipwerte unter Abgabedruck, Börse Seoul verliert 6,3 %", url: "https://finanzen.net/nachricht/aktien/maerkte-asien-leichte-abgaben-chipwerte-unter-abgabedruck-boerse-seoul-verliert-6-3-15980641" }
      ]
    },

    /* 2 MÄRKTE: RENDITEN US/BUND/FRANKREICH + FED-VORSITZ */
    {
      id: "renditen-us-bund-frankreich-warsh-10-13", cats: ["markets"], when: "Stand 12.–13.10.2026",
      headline: "US-Rendite bleibt nahe Mehrjahreshoch, Bund-Rendite stabil, Frankreich-Risikoaufschlag bei rund 140 Basispunkten",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen lag zuletzt bei rund 5,20 bis 5,24 % – nahe dem am 07.10. erreichten Zwischenhoch von bis zu 5,36 %, dem höchsten Stand seit 2002 laut einer Quelle. An der Spitze der Fed steht seit Mai 2026 Kevin Warsh. Die Bund-Rendite bewegte sich kaum (rund 3,48 bis 3,52 %), während der Risikoaufschlag französischer Staatsanleihen bei rund 139,5 Basispunkten lag, nachdem er Anfang Oktober zeitweise über 150 Basispunkte erreicht hatte.",
      blocks: [
        { h: "Wer leitet die Fed eigentlich, und was bedeutet das für die Zinserwartung?", items: [
          { tag: "fakt", text: "Der US-Senat bestätigte am 13.05.2026 mit 54:45 Stimmen Kevin Warsh als neuen Fed-Vorsitzenden; die reguläre Amtszeit von Jerome Powell als Chair endete am 15.05., Powell blieb danach als einfaches Gouverneursmitglied im Fed-Board.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Wie hat sich die US-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die US-10-Jahres-Rendite lag laut TradingEconomics am Dienstagmorgen bei rund 5,20 %; andere Quellen nennen für Freitag, 09.10., rund 5,24 % und für das Zwischenhoch am 07.10. Werte zwischen 5,31 % und 5,36 %.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,2 %?", ref: "n:ust10" }] }
        ]},
        { h: "Wie wahrscheinlich ist eine weitere Zinserhöhung am 27./28.10.?", items: [
          { tag: "unbestaetigt", text: "Mehrere Quellen nennen für ein Beibehalten des Leitzinses eine eingepreiste Wahrscheinlichkeit von rund 78 bis 84 %, für eine weitere Erhöhung von rund 16 bis 22 %; eine Zinssenkung gilt praktisch als ausgeschlossen. Schwache Arbeitsmarktdaten und ein gesunkenes Verbrauchervertrauen sprechen gegen, hohe Ölpreise durch die Golf-Spannungen für eine weitere Erhöhung. Die US-Inflationsdaten für September werden morgen, 14.10., veröffentlicht." }
        ]},
        { h: "Wie ist der Stand bei der Bund-Rendite und bei Frankreich?", items: [
          { tag: "unbestaetigt", text: "Die Bund-Rendite lag laut TradingEondices am Montag bei rund 3,48 %; der Bundesbank-Monatsdurchschnitt für Oktober wird mit rund 3,52 % angegeben.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] },
          { tag: "fakt", text: "Der Risikoaufschlag zehnjähriger französischer Staatsanleihen gegenüber der Bundesanleihe lag am 12.10. bei rund 139,5 Basispunkten, nachdem er Anfang Oktober zeitweise über 150 (nach einer Quelle bis 159) Basispunkte erreicht hatte – nach einer Quelle zeitweise sogar höher als die Risikoaufschläge Italiens und Griechenlands. Hintergrund bleibt das 43-Mrd.-Euro-Sparpaket von Premierminister Lecornu; Abstimmungen in der Nationalversammlung sind für den 20. und 27.10. angesetzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die US-Rendite trotz eines neuen, mit knapper Mehrheit entlang der Parteilinien bestätigten Fed-Vorsitzenden nahe einem Mehrjahreshoch verharrt, und dass der französische Risikoaufschlag trotz leichter Beruhigung hoch bleibt, zeigt, dass beide Themen – US-Geldpolitik und französische Staatsfinanzen – weiterhin ungelöst sind." }
        ]}
      ],
      reaction: "Die anhaltend hohe US-Rendite bleibt Hintergrund für die Nasdaq-Bewegung (Meldung 1) und für die Private-Credit-Debatte (Meldung 13); die Lage bei Frankreich ergänzt die EZB-Themen in Meldung 5.",
      terms: ["rendite", "basispunkt", "leitzins", "schuldenbremse"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:debt-brake", "e:central-banks-why"],
      sources: [
        { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
        { title: "Trading Economics: Germany Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" },
        { title: "NPR: Senate confirms Kevin Warsh as next chair of the Federal Reserve", url: "https://www.npr.org/2026/05/13/nx-s1-5816235/kevin-warsh-federal-reserve-chair-jerome-powell" },
        { title: "ideal-investisseur.fr: OAT/Bund spread today: 139.5 bps", url: "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html" },
        { title: "CNBC: UBS CEO says France debt crisis needs 'hard measures'", url: "https://www.cnbc.com/2026/10/06/france-debt-crisis-ubs-ermotti.html" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-13", cats: ["markets"], when: "Stand Mo 12.10./Di-Vormittag 13.10.2026",
      headline: "Gold hält sich knapp unter 4.200 Dollar trotz starkem Dollar, Bitcoin unter Druck vor US-Inflationsdaten, Euro gibt leicht nach",
      sec30: "Gold notierte je nach Quelle zwischen rund 4.169 und 4.202 Dollar je Feinunze – die Angaben schwanken zwischen einem Rückgang von 0,6 % und einem Plus von 0,56 %. Bitcoin bewegte sich zwischen rund 82.287 und 83.673 Dollar, mit zuletzt abwärts gerichteter Tendenz vor den morgigen US-Inflationsdaten. Der Euro gab zum Dollar leicht nach, von 1,1206 am Freitag auf 1,1181 am Montag.",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "unbestaetigt", text: "TradingEconomics nennt für Dienstag 4.195,25 Dollar (+0,56 %), eine andere Quelle 4.202,39 Dollar; eine dritte Quelle nennt für Montag einen Rückgang auf 4.168,78 Dollar (−0,6 %).",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "fakt", text: "Ein auf ein 18-Monats-Hoch gestiegener Dollar belastete Gold trotz anhaltender geopolitischer Unsicherheit am Golf." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte laut Coinbase am Montag zu Handelsbeginn bei rund 83.673 Dollar, laut CoinDesk am Montagabend niedriger bei rund 82.287 Dollar.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "unbestaetigt", text: "Auf Prognosemärkten wie Polymarket wird laut einer Quelle einem Rückgang Richtung 80.000 Dollar eine Wahrscheinlichkeit von rund 72 % zugeschrieben; als Hintergrund nennen Berichte hawkishe Fed-Signale und die Aussicht auf die morgigen US-Inflationsdaten." }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs fiel von 1,1206 Dollar am Freitag, 09.10., auf 1,1181 Dollar am Montag, 12.10. – ein Rückgang von rund 0,22 %; der Dienstagskurs war zum Redaktionsschluss noch nicht veröffentlicht.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold trotz geopolitischer Unsicherheit kaum zulegen konnte und Bitcoin vor den morgigen US-Inflationsdaten unter Druck steht, während der Euro leicht nachgab, passt zum Bild eines insgesamt stärkeren Dollars. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Bewegungen bei Gold, Bitcoin und Euro fallen zusammen mit der anhaltend hohen US-Rendite (Meldung 2) und der unsicheren Ölpreis-Lage am Golf (Meldung 9).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "Trading Economics: Gold", url: "https://tradingeconomics.com/commodity/gold" },
        { title: "CoinDesk: Bitcoin price today", url: "https://www.coindesk.com/price/bitcoin" },
        { title: "Coinbase: BTC price on Oct 12, 2026", url: "https://www.coinbase.com/predictions/event/KXBTCD-26OCT1217" },
        { title: "EZB: Euro foreign exchange reference rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" }
      ]
    },

    /* 4 WIRTSCHAFT: FED/US-KONJUNKTUR */
    {
      id: "fed-warsh-cpi-woche-us-konjunktur-10-13", cats: ["economy"], when: "Waller/Musalem-Reden 08.10. · Verbrauchervertrauen 09.10. · CPI 14.10. · FOMC-Sitzung 27./28.10.2026",
      headline: "Fed unter neuem Vorsitzenden Warsh steht vor wichtiger Datenwoche: US-Inflation, Erzeugerpreise und Einzelhandel vor der Zinsentscheidung",
      sec30: "Seit Mai 2026 ist Kevin Warsh Fed-Vorsitzender, vom Senat am 13.05. mit 54:45 Stimmen bestätigt; Jerome Powell blieb als einfaches Gouverneursmitglied im Board. Fed-Gouverneur Waller und St.-Louis-Fed-Präsident Musalem hielten am 08.10. hawkishe Reden. Das vorläufige Verbrauchervertrauen der University of Michigan fiel am 09.10. auf 46,3 Punkte, ein 5-Monats-Tief. Diese Woche stehen die US-Inflationsdaten für September (14.10.), Erzeugerpreise und Einzelhandelsumsätze (15.10.) sowie das Beige Book (14.10.) an – die letzten wichtigen Datenpunkte vor der FOMC-Sitzung am 27./28.10. Ein Regierungsshutdown findet nicht statt, der Bund ist bis zum 11.12.2026 finanziert.",
      blocks: [
        { h: "Wer ist aktuell Fed-Vorsitzender, und was heißt das für die Geldpolitik?", items: [
          { tag: "fakt", text: "Der Senat bestätigte am 13.05.2026 mit 54:45 Stimmen entlang der Parteilinien Kevin Warsh als neuen Fed-Vorsitzenden; Jerome Powells reguläre Amtszeit als Chair endete am 15.05., er fungierte bis zu Warshs Amtsantritt am 22.05. übergangsweise als Acting Chair und blieb danach als einfaches Gouverneursmitglied im Board.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was sagten Fed-Offizielle zuletzt?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller sagte am 08.10. beim Istanbul Economic Forum, bei weiterhin erwartungsgemäßen Daten seien „additional hikes” nötig, um die Inflation zeitnah auf das 2-%-Ziel zurückzuführen." },
          { tag: "position", text: "St.-Louis-Fed-Präsident Alberto Musalem sagte am 08.10. bei einem Bloomberg-Event: „Inflation remains elevated and is being driven by persistent demand pressures and negative supply shocks.”" }
        ]},
        { h: "Welche Daten stehen diese Woche an?", items: [
          { tag: "fakt", text: "Die US-Inflationsdaten (CPI) für September werden morgen, 14.10., veröffentlicht; der Konsens erwartet einen Anstieg der Kopfrate von 3,4 % auf rund 3,6 bis 3,7 %. Erzeugerpreise und Einzelhandelsumsätze folgen am 15.10., das Beige Book am 14.10." },
          { tag: "fakt", text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein 5-Monats-Tief; der Lage-Subindex fiel auf ein historisches Tief von 44,7 Punkten.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Wie schätzen Märkte die Oktober-Entscheidung ein?", items: [
          { tag: "unbestaetigt", text: "Mehrere Quellen nennen für ein Beibehalten des Leitzinses am 27./28.10. eine Wahrscheinlichkeit von rund 78 bis 84 %, für eine weitere Erhöhung von rund 16 bis 22 %." }
        ]},
        { h: "Gibt es einen Regierungsshutdown?", items: [
          { tag: "fakt", text: "Ein Regierungsshutdown findet nicht statt: Präsident Trump unterschrieb am 02.09.2026 eine Übergangsfinanzierung, die den Bund bis zum 11.12.2026 finanziert; Datenveröffentlichungen laufen fristgerecht." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mehrere Fed-Offizielle an der grundsätzlichen Möglichkeit weiterer Zinserhöhungen festhalten, während sich Arbeitsmarkt und Verbrauchervertrauen gleichzeitig eintrüben, zeigt laut Marktbeobachtern ein Abwägen zwischen Inflationsbekämpfung und konjunktureller Vorsicht; die morgigen Inflationsdaten dürften für die Entscheidung am 27./28.10. mitentscheidend sein." }
        ]}
      ],
      reaction: "Die gemischten Fed-Signale fallen zusammen mit der weiterhin historisch hohen US-Rendite (Meldung 2) und der unsicheren Entwicklung bei Bitcoin (Meldung 3).",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "NPR: Senate confirms Kevin Warsh as next chair of the Federal Reserve", url: "https://www.npr.org/2026/05/13/nx-s1-5816235/kevin-warsh-federal-reserve-chair-jerome-powell" },
        { title: "Federal Reserve: Speech by Governor Waller, Istanbul Economic Forum, 08.10.2026", url: "https://www.federalreserve.gov/newsevents/speech/waller20261008a.htm" },
        { title: "St. Louis Fed: Musalem Remarks, Bloomberg Event, 08.10.2026", url: "https://www.stlouisfed.org/from-the-president/remarks/2026/moderated-qa-bloomberg-event-oct-8-2026" },
        { title: "Bloomberg: US Consumer Sentiment Falls to Five-Month Low in October", url: "https://www.bloomberg.com/news/articles/2026-10-09/us-consumer-sentiment-falls-to-five-month-low-in-october" },
        { title: "Admiral Markets: Fed Rate Decision October 2026", url: "https://admiralmarkets.com/analytics/traders-blog/fed-rate-decision-october-2026" }
      ]
    },

    /* 5 WIRTSCHAFT: EZB/EUROZONE/IWF BANGKOK/SCHNABEL */
    {
      id: "ezb-iwf-bangkok-deutsche-inflation-schnabel-10-13", cats: ["economy"], when: "IWF-Jahrestagung 12.–18.10. · Lane-Warnung 05./06.10. · Schnabel-Nachfolge-Frist 28.10. · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "IWF-Jahrestagung in Bangkok im Fokus, deutsche September-Inflation soll heute final bestätigt werden, Schnabel-Nachfolge weiter offen",
      sec30: "Die vorläufige deutsche Inflationsrate für September lag bei +3,3 %; die finalen Destatis-Zahlen sollten laut Veröffentlichungskalender heute, 13.10., erscheinen, waren zum Redaktionsschluss aber noch nicht auffindbar. EZB-Chefökonom Philip Lane warnte Anfang Oktober vor einer „zweiten Welle” steigender Energiepreise, die die Inflation länger hochhalten könnte; eine Rückkehr zum 2-%-Ziel erwartet er nicht vor Mitte 2027. Die Bewerbungsfrist für die Nachfolge von Isabel Schnabel im EZB-Direktorium läuft bis zum 28.10., bislang wurden keine Kandidaten öffentlich genannt. Vom 12. bis 18.10. findet in Bangkok die IWF/Weltbank-Jahrestagung statt.",
      blocks: [
        { h: "Was ist der Stand bei der deutschen Inflation für September?", items: [
          { tag: "unbestaetigt", text: "Die finale VPI-Zahl für September sollte laut Destatis-Veröffentlichungskalender heute, 13.10., um 08:00 Uhr erscheinen; zum Redaktionsschluss war die entsprechende Pressemitteilung noch nicht auffindbar. Der vorläufige Wert vom 30.09. lag bei +3,3 % (Energiepreise +14,9 %, Kerninflation 2,4 %) – größere Revisionen sind laut Erfahrungswerten selten.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] }
        ]},
        { h: "Was sagt EZB-Chefökonom Lane zur Inflation?", items: [
          { tag: "position", text: "Philip Lane warnte Anfang Oktober vor einer „zweiten Welle” steigender Öl- und Gaspreise, die die Inflation länger hochhalten könnte als erwartet; eine Rückkehr zum 2-%-Ziel erwarte er nicht vor Mitte 2027. Zugleich mahnte er zu einer „gemessenen” (measured) EZB-Reaktion, da die Durchschlagskraft der Energiepreise auf die Gesamtwirtschaft weiterhin unsicher sei." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Eurogruppen-Chef Kyriakos Pierrakakis forderte die Eurostaaten auf, bis zum 28.10. Kandidaten für die Nachfolge von Isabel Schnabel zu benennen, die zum 03.01.2027 zum IWF wechselt. Bislang wurden keine Namen öffentlich genannt; die Entscheidung fällt voraussichtlich beim EU-Gipfel Mitte Dezember." },
          { tag: "fakt", text: "2027 stehen zusätzlich die Neubesetzung von Lanes Posten (Amtszeit bis 31.05.2027) und möglicherweise auch von Lagardes Position an – ein ungewöhnlich umfassender Führungswechsel im EZB-Direktorium." }
        ]},
        { h: "Was passiert bei der IWF/Weltbank-Jahrestagung in Bangkok?", items: [
          { tag: "fakt", text: "Die Jahrestagung findet vom 12. bis 18.10. mit rund 15.000 Delegierten aus 191 Ländern statt. EZB-Präsidentin Lagarde tritt am Mittwoch auf und diskutiert mit internationalen Notenbankchefs; Bundesbank-Präsident Nagel hält am 16.10. gemeinsam mit Bundesfinanzminister Klingbeil eine Pressekonferenz. Der IWF veröffentlicht im Rahmen der Tagung seinen World Economic Outlook und warnt laut Berichten vor anhaltend hohen Energiepreisen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EZB-Spitze mitten in der Suche nach gleich mehreren Nachbesetzungen steckt, während Chefökonom Lane vor einer längeren Phase erhöhter Inflation warnt, zeigt, wie eng Personal- und Zinsfragen bei der EZB derzeit miteinander verknüpft sind; die nächste Zinsentscheidung fällt am 29.10." }
        ]}
      ],
      reaction: "Die EZB-Themen ergänzen die Fed-Debatte in Meldung 4 und bleiben Hintergrund für die weiterhin hohe Rendite französischer Staatsanleihen in Meldung 2.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "Statistisches Bundesamt: Veröffentlichungstermine DESTATIS vom 12.10. bis 16.10.2026", url: "https://www.presseportal.de/pm/32102/6367968" },
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel bis 28. Oktober", url: "https://www.onvista.de/news/2026/10-09-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-bis-28-oktober-0-20-26562225" },
        { title: "fxstreet.de.com: EZB-Mitglied Lane – Hohe Inflation aufgrund des Energieschocks treibt hawkishe EZB-Stimmung", url: "https://www.fxstreet.de.com/news/ezb-mitglied-lane-hohe-inflation-aufgrund-des-energieschocks-treibt-hawkishe-ezb-stimmung-202610060715" },
        { title: "IWF: 2026 Annual Meetings of the IMF and the World Bank Group", url: "https://www.imf.org/en/meetings/2026/annual" },
        { title: "Börse Global: Zinsschritt bezahlt, Staatsfinanzen offen – der Euro vor der IWF-Woche", url: "https://www.boerse-global.de/zinsschritt-bezahlt-staatsfinanzen-offen-der-euro-vor-der-iwf-woche/832373" }
      ]
    },

    /* 6 DEUTSCHLAND: RENTENREFORM/KOALITIONSSTREIT */
    {
      id: "rentenreform-koalitionsstreit-miersch-winkel-10-13", cats: ["germany"], when: "Merz-Äußerung 09.10. · Miersch-Vorschlag 11.10. · Winkel-Zurückweisung 11.10.2026",
      headline: "Streit um weiteres Verfahren bei der Rentenreform: SPD-Fraktionschef Miersch fordert zusätzliche Gespräche, Union lehnt ab",
      sec30: "Kanzler Merz erwartet laut Berichten nicht mehr, dass die Rentenreform wie ursprünglich geplant noch 2026 vom Bundestag beschlossen wird; neues Ziel ist nur noch ein Kabinettsbeschluss bis Jahresende, das Gesamtpaket soll im Frühjahr 2027 stehen. SPD-Fraktionschef Matthias Miersch forderte am 11.10. zusätzliche Gespräche vor dem Kabinettsbeschluss, auch mit Ministerpräsidenten; CDU/CSU-Vize-Fraktionschef Johannes Winkel wies dies zurück. Die Junge Gruppe der Unionsfraktion lehnt das Paket weiterhin ab, der DGB legte einen eigenen Gegenentwurf vor.",
      blocks: [
        { h: "Was ist der aktuelle Zeitplan für die Rentenreform?", items: [
          { tag: "position", text: "Kanzler Merz erklärte laut Berichten, er gehe „nicht mehr davon aus”, dass die Rentenreform wie geplant bis Jahresende vom Bundestag beschlossen wird; Ziel sei nur noch die Verabschiedung im Kabinett bis Jahresende, das Rentenpaket solle im Frühjahr 2027 stehen.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]},
        { h: "Worüber gibt es innerhalb der Koalition Streit?", items: [
          { tag: "position", text: "SPD-Fraktionschef Matthias Miersch forderte am 11.10. zusätzliche Gespräche vor dem Kabinettsbeschluss, an denen auch Bundestagsfraktionen und möglicherweise Ministerpräsidenten beteiligt werden sollten, um unterschiedliche Positionen zusammenzuführen." },
          { tag: "position", text: "Johannes Winkel (stellvertretender Vorsitzender der CDU/CSU-Bundestagsfraktion, Bundesvorsitzender der Jungen Union) wies dies zurück: Die Koalitionsspitzen hätten bereits entschieden, nun gehe es um Umsetzung statt erneuter Ausweitung des Abstimmungsprozesses." },
          { tag: "fakt", text: "Die Junge Gruppe der Unionsfraktion hält das Rentenpaket weiterhin „für nicht zustimmungsfähig”: Die geplante Stabilisierung des Rentenniveaus bei 48 % über 2031 hinaus verursache nach eigener Berechnung allein 2032 bis 2040 Mehrkosten von über 115 Mrd. Euro für künftige Generationen." }
        ]},
        { h: "Welche Gegenvorschläge bringen die Gewerkschaften?", items: [
          { tag: "position", text: "Der DGB legte einen eigenen Gegenentwurf vor: keine Anhebung des Renteneintrittsalters, dafür eine Anhebung des Rentenniveaus zunächst auf 50 %, später auf 53 %. DGB-Chefin Yasmin Fahimi begrüßte das Bekenntnis der Alterssicherungskommission zu einer lebensstandardsichernden Rente, verwies aber auf die Notwendigkeit höherer Beiträge." },
          { tag: "position", text: "Verdi erklärte, die Vorschläge der Alterssicherungskommission „dürfen nicht einfach durchgewellt werden” – die Politik müsse sie „noch einmal anschauen und substanziell verändern”." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass neben dem ursprünglichen Streit zwischen Gewerkschaften und Arbeitgeberverbänden nun auch innerhalb der Koalition selbst über das weitere Verfahren gestritten wird, zeigt, wie schwierig ein tragfähiger Kompromiss innerhalb der Reform weiterhin bleibt – trotz der bereits auf Frühjahr 2027 verschobenen Entscheidung." }
        ]}
      ],
      reaction: "Der Koalitionsstreit um die Rente läuft parallel zur CDU-Krisensitzung und den schlechten Umfragewerten in Meldung 7.",
      terms: ["schuldenbremse", "koalition", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics"],
      sources: [
        { title: "t-online: Rentenreform – Merz erwartet Bundestagsbeschluss wohl erst 2027", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101473498/rentenreform-merz-erwartet-bundestagsbeschluss-wohl-erst-2027.html" },
        { title: "ms-aktuell.de: Rentenstreit – Union weist Mierschs Vorschlag für neue Gespräche zurück", url: "https://ms-aktuell.de/welt/rentenreform-miersch-winkel-11-10-2026" },
        { title: "taz: Unionsstreit über Rentenreform – Junge-Union-Chef sagt „Nein” zum Rentenpaket", url: "https://taz.de/Unionsstreit-ueber-Rentenreform/!6133809/" },
        { title: "Berliner Zeitung: Rentenreform – Gewerkschaftsbund DGB kontert die Regierung", url: "https://www.berliner-zeitung.de/article/rentenreform-dgb-gegenentwurf-10136674" }
      ]
    },

    /* 7 DEUTSCHLAND: BERLIN/SACHSEN-ANHALT/CDU-KRISE/STROMSTEUER */
    {
      id: "berlin-sondierung-sachsen-anhalt-cdu-krise-stromsteuer-10-13", cats: ["germany"], when: "Berlin-Sondierungen laufend seit 08./09.10. · Tillschneider-Entsendung 09.10. · CDU-Klausur 11./12.10. · INSA-Umfrage 11.10.2026",
      headline: "Berliner Linken-Mitglieder protestieren gegen Sondierungskurs, Kontroverse um AfD-Vizepräsidenten in Sachsen-Anhalt weitet sich aus, CDU reagiert mit Stromsteuer-Ankündigung auf Umfragetief",
      sec30: "In Berlin laufen die Sondierungen zwischen Linke, Grüne und SPD seit 08./09.10. weiter, ein Koalitionsvertrag liegt noch nicht vor; über 350 Linken-Mitglieder unterzeichneten offene Briefe gegen die Antisemitismus-Vereinbarung, der Parteitag wurde auf den 18.10. verschoben. In Sachsen-Anhalt entsandte der Landtagspräsident den am 06.10. gewählten AfD-Vizepräsidenten Tillschneider zur Gedenkveranstaltung für den Anschlag auf die Synagoge Halle; eine Menschenkette verweigerte ihm den Zugang. Die CDU-Führung berief nach einer Serie von Landtagswahlniederlagen eine zweitägige Krisensitzung ein; eine INSA-Umfrage sieht die AfD erstmals bei 30 %. Kanzler Merz kündigte danach eine Stromsteuer-Senkung für alle an.",
      blocks: [
        { h: "Wie ist der Stand bei den Berliner Sondierungen?", items: [
          { tag: "fakt", text: "Die Sondierungen zwischen Linke, Grüne und SPD laufen seit 08./09.10.; ein Koalitionsvertrag liegt bislang nicht vor. Ein ursprünglich für den 09.10. geplanter Parteitag der Linken wurde um zwei Wochen auf den 18.10. verschoben.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] },
          { tag: "unbestaetigt", text: "233 Linken-Mitglieder unterzeichneten laut Berichten einen offenen Brief gegen die Antisemitismus-Vereinbarung mit Grünen und SPD und nannten sie einen „Affront”; eine weitere Erklärung von rund 120 Linken-Politikern kritisierte die Einigung als „schweren politischen Fehler”." },
          { tag: "fakt", text: "Die Vergesellschaftung großer privater Wohnungsbestände bleibt zentraler ungeklärter Streitpunkt: Die SPD lehnt sie ab, die Linke drängt auf die Umsetzung des Volksentscheids von 2021; die Grünen zeigen sich laut Berichten ebenfalls skeptisch." }
        ]},
        { h: "Wie weitet sich die Sachsen-Anhalt-Kontroverse aus?", items: [
          { tag: "fakt", text: "Der Landtagspräsident entsandte den am 06.10. mit Stimmen auch aus der CDU-Fraktion gewählten AfD-Vizepräsidenten Hans-Thomas Tillschneider als Vertreter des Landtags zur Gedenkveranstaltung für den Anschlag auf die Synagoge Halle vom 09.10.2019; eine Gruppe von Teilnehmern bildete am Veranstaltungsort eine Menschenkette, um ihm den Zugang zu verwehren." },
          { tag: "position", text: "CDU-Fraktionschef Sven Schulze bezeichnete die Entsendung als „Affront gegenüber der jüdischen Gemeinde”." },
          { tag: "position", text: "Vizekanzler Lars Klingbeil hatte zuvor bereits von einem „Tabubruch” gesprochen und von der CDU eine Erklärung gefordert, wie es zur Wahl Tillschneiders mit Stimmen auch aus der Union kommen konnte." }
        ]},
        { h: "Wie reagiert die CDU auf die Serie von Wahlniederlagen?", items: [
          { tag: "fakt", text: "Die CDU-Führung beriet am 11. und 12.10. zweitägig über Konsequenzen aus der Serie von Landtagswahlniederlagen im September (Rauswurf aus dem Landtag in Mecklenburg-Vorpommern, Platz zwei hinter der Linken in Berlin, deutliche Verluste in Sachsen-Anhalt)." },
          { tag: "unbestaetigt", text: "Der INSA-Sonntagstrend vom 11.10. sieht die AfD erstmals bei 30 % (elf Punkte vor der Union), die Union bei 19 %, SPD bei 13 %, Grüne bei 14 % und Linke bei 10 %; Schwarz-Rot käme zusammen nur auf 32 %." }
        ]},
        { h: "Was kündigte Kanzler Merz an?", items: [
          { tag: "position", text: "Merz kündigte nach der Klausur an, die Stromsteuer für alle Verbraucher auf das EU-Mindestniveau senken zu wollen (bislang 20,50 Euro je Megawattstunde für Haushalte, EU-Minimum 1,0 Euro); ein konkreter Zeitplan blieb offen.",
            ask: [{ label: "Mehr zur Stromsteuer und zur deutschen Energiepolitik", ref: "s:15" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die CDU nach historisch schlechten Umfragewerten mit einer konkreten Entlastungsmaßnahme positioniert, während parallel in Sachsen-Anhalt weiter über das Abstimmverhalten der Union diskutiert wird und die Berliner Sondierungen innerparteilichen Widerstand bei der Linken auslösen, zeigt auf mehreren Ebenen, wie unübersichtlich die politische Lage nach den jüngsten Landtagswahlen bleibt." }
        ]}
      ],
      reaction: "Der Koalitionsstreit um die Rente (Meldung 6) und die Debatte um deutsche Energiepreise (Meldung 15) laufen parallel zu den hier beschriebenen Entwicklungen.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel: „Fassungslos” wegen Antisemitismus-Vereinbarung (Liveblog)", url: "https://www.tagesspiegel.de/berlin/liveblog/einigung-bei-linken-grunen-und-spd-in-berlin-wer-antisemitisch-auffallt-dem-droht-der-rauswurf-16053722.html" },
        { title: "CDU-Fraktion Sachsen-Anhalt: Entsendung Tillschneiders ist ein Affront gegenüber der jüdischen Gemeinde", url: "https://www.cdufraktion.de/2026/cdu-fraktion-entsendung-tillschneiders-ist-ein-affront-gegenueber-der-juedischen-gemeinde/" },
        { title: "NZZ: Krise in der CDU – Friedrich Merz reagiert mit Entlastungen", url: "https://www.nzz.ch/deutschland/politik/cdu-im-stimmungstief-mit-entlastungen-sucht-merz-den-befreiungsschlag-ld.10031483" },
        { title: "t-online: Friedrich Merz – Neue INSA-Umfrage vor CDU-Krisensitzung", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101476044/friedrich-merz-neue-insa-umfrage-vor-cdu-krisensitzung.html" },
        { title: "Stuttgarter Zeitung: Merz bestätigt – Stromsteuer soll für alle sinken", url: "https://www.stuttgarter-zeitung.de/wirtschaft/merz-bestaetigt-stromsteuer-soll-fuer-alle-sinken-79560988.html" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE SANKTIONEN + ENERGIE-WAFFENSTILLSTAND */
    {
      id: "ukraine-sanktionspaket-energie-waffenstillstand-10-13", cats: ["world", "geo"], when: "22. Sanktionspaket verabschiedet 12.10. · Trump-Ankündigung 11.10. · Russische Angriffe 11./12.10. · Miami-Treffen 09.10.2026",
      headline: "EU verabschiedet 22. Sanktionspaket gegen Russland, Trumps behaupteter Energie-Waffenstillstand wird von fortgesetzten russischen Angriffen überschattet",
      sec30: "Die EU-Außenminister verabschiedeten am 12.10. in Luxemburg formell das 22. Sanktionspaket: 826 Unternehmen und 743 Einzelpersonen, Schwerpunkt Produktionskette ballistischer Raketen und Drohnen. Präsident Trump behauptete am 11.10. per Truth Social, Russland und die Ukraine hätten einem „Energie-Waffenstillstand” zugestimmt; wenige Stunden später griff Russland das Wärmekraftwerk CHP-5 in Charkiw sowie weitere Energieanlagen an, mindestens zehn Menschen wurden getötet. Präsident Selenskyj sagte, die Ukraine sei „horribly surprised”; in einem Fox-News-Interview erklärte er sich zugleich bereit für Wahlen, sofern es mindestens 60 Tage ohne russische Angriffe gebe.",
      blocks: [
        { h: "Was wurde beim 22. EU-Sanktionspaket beschlossen?", items: [
          { tag: "fakt", text: "Die EU-Außenminister verabschiedeten am 12.10. in Luxemburg formell das 22. Sanktionspaket: 826 Unternehmen und 743 Einzelpersonen (zusammen rund 1.600 Einträge), mit Schwerpunkt auf der Produktionskette ballistischer Raketen (unter anderem Iskander-M) und Drohnenherstellern, zusätzlich 77 Personen, die an „Wahlen” in besetzten ukrainischen Gebieten beteiligt waren." },
          { tag: "position", text: "EU-Außenbeauftragte Kaja Kallas erklärte: „We are making it significantly harder, slower and more expensive for Russia to produce the weapons it uses to kill Ukrainians.” Zum Diesel-Deal der USA mit Russland sagte sie: „The US is our biggest ally, but our message is clear: if we want to end this war, the only way we can do this is (by) putting more pressure on Russia.”" }
        ]},
        { h: "Was ist mit dem von Trump behaupteten Energie-Waffenstillstand?", items: [
          { tag: "position", text: "Trump kündigte am 11.10. per Truth Social einen „Energie-Waffenstillstand” zwischen Russland und der Ukraine an; auf Nachfrage, da weder Moskau noch Kyjiw dies offiziell bestätigten, sagte er am 12.10.: „They agreed because I said they agreed. And that thing has to get settled.”" },
          { tag: "unbestaetigt", text: "Wenige Stunden nach der Ankündigung griff Russland das Wärmekraftwerk CHP-5 in Charkiw sowie weitere Energieanlagen an; landesweit wurden laut Berichten mindestens zehn Menschen getötet und rund 70 verletzt." },
          { tag: "position", text: "Präsident Selenskyj sagte, die Ukraine sei „horribly surprised”, dass Russland trotz der Ankündigung mehrere Energieanlagen angriff, und forderte, die USA müssten sicherstellen, dass Russland die Vereinbarung auch einhalte." }
        ]},
        { h: "Wie reagierte Präsident Selenskyj auf Trumps Forderung nach einem Führungswechsel?", items: [
          { tag: "position", text: "Selenskyj sagte in einem Fox-News-Interview, nur das ukrainische Volk könne über einen Führungswechsel entscheiden: „I am ready for elections, really.” Dafür brauche es mindestens 60 Tage ohne russische Angriffe." },
          { tag: "position", text: "Zu den Dieselpreisen sagte Selenskyj: „Everybody understands that the prices on diesel doesn't depend on our attacks on diesel in Russia... it depends on the blocking of Hormuz, Strait of Hormuz.”" }
        ]},
        { h: "Wie reagierte die US-Innenpolitik auf den Diesel-Deal?", items: [
          { tag: "position", text: "Senats-Minderheitsführer Chuck Schumer (Demokraten) warf Trump einen „deal with the devil” vor; der republikanische Senator John Kennedy unterstützte die Diesel-Freigabe zwar grundsätzlich, nannte Putin aber einen „butcher”." }
        ]},
        { h: "Wie ist der Stand bei den Witkoff/Kushner-Verhandlungen?", items: [
          { tag: "fakt", text: "Das Treffen in Miami am 09.10. mit ukrainischer Delegation sowie europäischen und NATO-Vertretern endete laut Berichten ohne konkrete Einigung; ein weiterer Moskau-Besuch der US-Sondergesandten wird für „später im Oktober” in Aussicht gestellt, ein Termin stand bei Redaktionsschluss nicht fest." }
        ]},
        { h: "Was bedeutet das, und welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Dass die EU ihr bislang größtes Sanktionspaket verabschiedet, während die USA einen von beiden Kriegsparteien nicht eindeutig bestätigten „Energie-Waffenstillstand” verkünden und dieser innerhalb von Stunden durch neue Angriffe infrage gestellt wird, zeigt weiterhin unterschiedliche Linien zwischen den wichtigsten Unterstützern der Ukraine." }
        ]}
      ],
      reaction: "Die diplomatischen Spannungen bleiben Hintergrund für die Rüstungsthemen (Meldung 10, Meldung 11); die Lage am Golf wird gesondert in Meldung 9 eingeordnet.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Rat der EU: Russia's war of aggression against Ukraine – EU agrees largest-ever package of listings", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/10/12/russia-s-war-of-aggression-against-ukraine-eu-agrees-largest-ever-package-of-listings-targeting-almost-1600-individuals-and-entities-in-russia-s-military-industrial-complex/" },
        { title: "Euronews: EU decries 'concerning' Trump-Putin deal, insists sanctions on Russia will continue", url: "https://www.euronews.com/2026/10/12/eu-decries-concerning-trump-putin-deal-insists-sanctions-on-russia-will-continue" },
        { title: "Kyiv Independent: Trump says Ukraine, Russia agree to energy strike ceasefire 'because I said they agreed'", url: "https://kyivindependent.com/trump-says-ukraine-russia-agree-to-energy-strike-ceasefire-because-i-said-they-agreed/" },
        { title: "CNBC: Zelenskyy accuses Russia of violating Trump's energy ceasefire as drone attacks continue", url: "https://www.cnbc.com/2026/10/12/russia-ukraine-energy-ceasefire-trump.html" },
        { title: "Mediaite: Zelensky Rips Trump's Calls for Him to Be Replaced in Fox News Interview", url: "https://www.mediaite.com/media/tv/zelensky-rips-trumps-calls-for-him-to-be-replaced-in-fox-news-interview-how-can-people-vote/" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: HORMUZ + HOUTHI-ANGRIFF RIAD */
    {
      id: "hormuz-tankerangriffe-houthi-riad-10-13", cats: ["world", "geo"], when: "18 UKMTO-Warnmeldungen seit Oktoberbeginn · US-Militärschlag 10.10. · Houthi-Angriff Riad 10./12.10.2026",
      headline: "Tankerangriffe in der Straße von Hormus erreichen neuen Höchststand, US-Militär stoppt Blockadebrecher, Houthi-Angriff auf Flughafen Riad fordert mindestens zwölf Tote",
      sec30: "Seit Oktoberbeginn zählte die britische Marinebehörde UKMTO 18 Angriffsmeldungen auf Handelsschiffe in der Region rund um die Straße von Hormus – ein neuer Höchststand seit Kriegsbeginn im Februar 2026. Am 10.10. schaltete ein US-Kampfjet den Antrieb eines chinesisch kontrollierten Frachters aus, der laut CENTCOM versuchte, die US-Blockade iranischer Häfen zu durchbrechen. Am 11.10. gab es allein vier Angriffsmeldungen an einem Tag, darunter auf den Supertanker „Al Maqam” und den Tanker „Petro Dolphin”, bei dem zwei indische Seeleute vermisst blieben. Parallel forderte ein Houthi-Angriff auf den Flughafen Riad am 10.10. mindestens zwölf Tote und rund 300 Verletzte.",
      blocks: [
        { h: "Wie hat sich die Zahl der Tankerangriffe entwickelt?", items: [
          { tag: "fakt", text: "Seit Oktoberbeginn zählte die britische Marinebehörde UKMTO 18 Angriffsmeldungen auf Handelsschiffe in der Region – ein neuer Höchststand seit Kriegsbeginn im Februar 2026.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Am 11.10. gab es laut UKMTO allein vier Angriffsmeldungen an einem Tag. Die IRGC-nahe Agentur Tasnim veröffentlichte ein Video, das den Beschuss des liberianisch-registrierten Supertankers „Al Maqam” zeigt; bei einem Drohnenangriff auf den Tanker „Petro Dolphin” vor Oman blieben zwei von zwölf Besatzungsmitgliedern (überwiegend Inder) vermisst." }
        ]},
        { h: "Was unternahm das US-Militär?", items: [
          { tag: "fakt", text: "Ein US-Kampfjet schaltete am 10.10. mit Präzisionsmunition den Antrieb des chinesisch kontrollierten, panamaisch beflaggten Frachters „Ocean Molica” aus, nachdem dieser laut US-Streitkräftekommando CENTCOM versucht habe, die seit dem 14.07. bestehende US-Blockade iranischer Häfen zu durchbrechen. Es ist nach US-Angaben das vierte auf diese Weise gestoppte Schiff seit Blockadebeginn; insgesamt seien 135 Schiffe abgedrängt und zehn Vergeltungsschläge auf iranische Tanker verübt worden." }
        ]},
        { h: "Gibt es neue diplomatische Bewegung?", items: [
          { tag: "unbestaetigt", text: "Außenminister Abbas Araghchi erklärte, Iran habe über Katar einen Sieben-Tage-Plan zur Wiedereröffnung der Straße von Hormus vorgelegt, der unter anderem die Freigabe von über 12 Mrd. Dollar eingefrorener iranischer Gelder und die Aufhebung der US-Blockade vorsieht; eine US-Antwort stand laut Berichten bei Redaktionsschluss noch aus." },
          { tag: "position", text: "Präsident Trump hatte am 08.10. erklärt, die USA würden vor den Zwischenwahlen am 03.11. nicht angreifen, die Blockade iranischer Häfen bleibe aber „in voller Kraft”; laut Axios bereite das Pentagon CENTCOM parallel auf eine mögliche Wiederaufnahme größerer Angriffe vor." }
        ]},
        { h: "Was ist beim Houthi-Angriff auf den Flughafen Riad passiert?", items: [
          { tag: "fakt", text: "Ein Houthi-Angriff auf den King-Khalid-Flughafen in Riad forderte am 10.10. laut saudischen Angaben mindestens 12 Tote und rund 300 Verletzte – nach Berichten der tödlichste Anschlag in Saudi-Arabien seit über einem Jahrzehnt; der Flughafen blieb bis mindestens zum 17.10. geschlossen. Am 12.10. gab es einen weiteren, kleineren Angriff mit einem Toten und elf Verletzten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Tankerangriffe einen neuen Höchststand erreichen, während gleichzeitig ein separater Houthi-Angriff auf saudisches Territorium eskaliert, zeigt laut Marktbeobachtern, wie sich mehrere Krisenherde am Golf gegenseitig verstärken – was sich auch in den widersprüchlichen Ölpreis-Angaben spiegelt.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der widersprüchliche Ölpreis bleibt Hintergrund für die deutsche Energieversorgung (Meldung 15) sowie für die Markteinordnung in Meldung 3.",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "CNBC: Tanker attacks in Strait of Hormuz surge to wartime high as Iran tries to choke off oil exports", url: "https://www.cnbc.com/2026/10/09/iran-war-strait-hormuz-tanker-attack-oil.html" },
        { title: "gCaptain: More Tankers Hit in Hormuz as U.S. Strikes Cargo Ship", url: "https://gcaptain.com/more-tankers-hit-in-hormuz-as-u-s-strikes-cargo-ship/" },
        { title: "Maritime Executive: Two Seafarers Missing in Drone Attack on Product Tanker off Oman", url: "https://maritime-executive.com/article/two-seafarers-missing-in-drone-attack-on-product-tanker-off-oman" },
        { title: "Times of Israel: Iran has offered US seven-day plan for Hormuz reopening, Araghchi says", url: "https://www.timesofisrael.com/liveblog_entry/iran-has-offered-us-seven-day-plan-for-hormuz-reopening-araghchi-says/" },
        { title: "Al Jazeera: Saudi Arabia says 12 killed, 300 wounded in Houthi attack on Riyadh airport", url: "https://www.aljazeera.com/news/2026/10/10/attack-on-airport-in-saudi-capital-riyadh-leaves-several-injured" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL/RENK/HENSOLDT */
    {
      id: "rheinmetall-renk-hensoldt-rally-analysten-10-13", cats: ["defence"], when: "Kursrally Mo 12.10. · Berenberg-Downgrade 09.10. · BofA-Downgrade Renk Anfang Okt. · Morgan-Stanley-Studie 12./13.10.2026",
      headline: "Rüstungsaktien erholen sich kräftig nach Morgan-Stanley-Studie, Berenberg und Bank of America bleiben bei Rheinmetall und Renk skeptisch",
      sec30: "Rheinmetall legte am Montag rund 2,5 bis 2,6 % zu und war damit DAX-Gewinner, bleibt aber rund 37 bis 41 % unter dem Jahresanfangsniveau. Renk entwickelte sich uneinheitlich, nachdem Bank of America das Rating Anfang Oktober auf Neutral gesenkt und das Kursziel auf 42,50 Euro reduziert hatte. Hensoldt stieg um rund 2,4 % auf 78,08 Euro und bleibt der klare Gewinner unter den drei Werten, auch wenn mwb research mit einem Sell-Rating (Kursziel 62 Euro) eine deutlich pessimistischere Einschätzung vertritt als Jefferies, Warburg und Bank of America (jeweils rund 94 Euro). Der europäische Rüstungssektor liegt insgesamt weiterhin über 20 % unter dem Jahreshoch von Januar 2026.",
      blocks: [
        { h: "Wie haben sich die Kurse zuletzt entwickelt?", items: [
          { tag: "fakt", text: "Rheinmetall stieg am Montag um rund 2,5 bis 2,6 % auf etwa 956 bis 964 Euro und war damit DAX-Gewinner des Tages; die Aktie notiert aber weiterhin rund 37 bis 41 % unter dem Jahresanfangsniveau.",
            ask: [{ label: "Was bedeutet ein schwankender Aktienkurs trotz hoher Branchennachfrage?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Hensoldt stieg um rund 2,4 % auf 78,08 Euro und entwickelte sich damit deutlich besser als Rheinmetall und Renk." }
        ]},
        { h: "Was treibt die unterschiedlichen Analysteneinschätzungen?", items: [
          { tag: "position", text: "Berenberg senkte das Rating für Rheinmetall bereits am 09.10. von „Buy” auf „Hold” und das Kursziel auf 1.020 Euro, mit Verweis auf mittelfristige Wachstumsunsicherheit; Deutsche Bank bestätigte dagegen am 06.10. ihre „Buy”-Einschätzung mit einem Kursziel von 1.800 Euro." },
          { tag: "position", text: "Bank of America senkte Anfang Oktober das Rating für Renk von „Buy” auf „Neutral” und das Kursziel auf 42,50 Euro, mit Verweis auf Zweifel, ob das aktuelle Getriebeproduktionsniveau von rund 700 Systemen langfristig auf das Ziel von rund 2.000 Ende der Dekade gesteigert werden kann." },
          { tag: "position", text: "Bei Hensoldt reicht die Analysten-Spanne von mwb research (Sell, Kursziel 62 Euro) bis zu Jefferies, Warburg Research und Bank of America (jeweils Buy, Kursziele um 94 bis 98 Euro); Goldman Sachs bewertet die Aktie seit dem 06.10. mit „Neutral” (Kursziel 85 Euro)." },
          { tag: "fakt", text: "Eine Sektorstudie von Morgan Stanley vom 12./13.10. sieht europäische Rüstungswerte insgesamt positiv und nennt BAE Systems als Top-Pick vor Rheinmetall – dies gilt als ein wesentlicher Treiber der Montagsrally." }
        ]},
        { h: "Wie ordnet sich das in den Gesamtmarkt ein?", items: [
          { tag: "fakt", text: "Der europäische Rüstungssektor liegt laut Berichten insgesamt weiterhin mehr als 20 % unter dem Jahreshoch von Januar 2026; als Gründe werden unter anderem hohe Bewertungen nach dem vorherigen Boom und Kapazitätsengpässe trotz voller Auftragsbücher genannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Hensoldt auch nach der jüngsten Rally der klare Gewinner unter den drei Werten bleibt, während Rheinmetall und Renk bei Analysten weiterhin gespalten bewertet werden, zeigt erneut, dass unternehmensspezifische Nachrichten derzeit stärker wirken als der allgemeine Branchentrend. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Kursbewegungen fallen zusammen mit der allgemeinen Markterholung am Montag (Meldung 1) und den neuen Aufträgen in Meldung 11.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "ad-hoc-news.de: Berenberg senkt Ziel für die Rheinmetall-Aktie auf 1.020 Euro", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/berenberg-senkt-ziel-fuer-die-rheinmetall-aktie-auf-1-020-euro/70298723" },
        { title: "finanznachrichten.de: AKTIEN IM FOKUS – Renk weiter schwach, Hensoldt gefragt nach BofA-Kommentar", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69726320-aktien-im-fokus-renk-weiter-schwach-hensoldt-gefragt-nach-bofa-kommentar-016.htm" },
        { title: "kapitalmarktexperten.de: Hensoldt-Aktie – Analysten spalten sich bei 62 bis 94 Euro", url: "https://www.kapitalmarktexperten.de/hensoldt-aktie-analysten-spalten-sich-bei-62-bis-94-euro/" },
        { title: "marketscreener.de: Morgan Stanley optimistisch für den Verteidigungssektor 2026", url: "https://de.marketscreener.com/boerse-nachrichten/morgan-stanley-optimistisch-fuer-den-verteidigungssektor-2026-die-empfehlungen-des-analysten-ce7e5bdede8bff26" },
        { title: "avronline.de: Rheinmetall-Aktie 2026 – Warum der Rüstungsriese nach dem Rekordjahr plötzlich unter Druck gerät", url: "https://www.avronline.de/nachrichten/news-views-markets/heinmetall-aktie-2026-kursrueckgang-analyse/21929/" }
      ]
    },

    /* 11 DEFENCE: TKMS/FREGATTEN/JAPAN/NATO */
    {
      id: "tkms-fregatten-japan-patriot-nato-10-13", cats: ["defence"], when: "Fregatten-Zuschlag Haushaltsausschuss · Japan-Gespräche laufend · NATO-Ausgaben 777 Mrd. $ 2026",
      headline: "Bundestag billigt Milliardenauftrag für vier weitere Fregatten an TKMS, Japan weiterhin in Gesprächen über Patriot-Lieferung an Ukraine",
      sec30: "Der Haushaltsausschuss des Bundestags billigte vier zusätzliche Fregatten des Typs MEKO A-200 für rund 5,3 Mrd. Euro – damit erhält TKMS einen Gesamtauftrag über acht Fregatten, nach eigenen Angaben der größte Überwasserschiffauftrag der Firmengeschichte; die erste Fregatte soll Ende 2029 ausgeliefert werden. Der japanische Politiker Itsunori Onodera treibt weiterhin Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine voran, eine Entscheidung steht aber weiterhin aus. Die Verteidigungsausgaben europäischer NATO-Partner und Kanadas stiegen 2026 um rund 11 % auf insgesamt 777 Mrd. Dollar.",
      blocks: [
        { h: "Wie ist der Stand beim TKMS-Fregattenauftrag?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags billigte vier zusätzliche Fregatten des Typs MEKO A-200 für rund 5,3 Mrd. Euro; zusammen mit den bereits bestellten vier Schiffen erhält TKMS damit einen Gesamtauftrag über acht Fregatten – nach eigenen Angaben der größte Überwasserschiffauftrag der Firmengeschichte. Die erste Fregatte soll Ende 2029 ausgeliefert werden.",
            ask: [{ label: "Warum ist Rüstungsnachfrage für Unternehmen wie TKMS relevant?", ref: "e:nato-target" }] },
          { tag: "unbestaetigt", text: "Beim indischen P75I-U-Boot-Programm (sechs Boote, rund 8 Mrd. Euro) erwartet TKMS-Chef Oliver Burkhard laut Berichten noch 2026 einen Vertragsabschluss; andere Quellen nennen eher Ende 2027 für die endgültige Vertragsunterzeichnung. Burkhard widersprach Kapazitätsbedenken nach dem kanadischen Großauftrag." }
        ]},
        { h: "Wie ist der Stand bei Japan und der Patriot-Weitergabe?", items: [
          { tag: "unbestaetigt", text: "Der japanische LDP-Politiker Itsunori Onodera treibt weiterhin Gespräche über eine mögliche Lieferung von Patriot-Abfangraketen an die Ukraine voran; die Ukraine benötigt laut Berichten mindestens 300 Abfangraketen für den Winter. Japans restriktive Exportregeln für Kriegsgebiete bleiben eine rechtliche Hürde; eine konkrete Entscheidung lag bei Redaktionsschluss nicht vor." }
        ]},
        { h: "Welche weiteren Rüstungsthemen stehen an?", items: [
          { tag: "fakt", text: "Eine Entscheidung zum Rheinmetall-Programm „Arminius” (über 3.000 Boxer-Radpanzer, Gesamtrahmen über 75 Mrd. Euro) wird für Anfang Dezember erwartet; eine erste Festbestellung von rund 1.800 Boxern im Umfang von rund 25 Mrd. Euro, davon rund 12,4 Mrd. Euro Anteil für Rheinmetall, gilt als wichtiger kursrelevanter Termin vor den Rheinmetall-Q3-Zahlen am 05.11." }
        ]},
        { h: "Wie entwickeln sich die NATO-Verteidigungsausgaben?", items: [
          { tag: "fakt", text: "Europäische NATO-Partner und Kanada erhöhten 2026 ihre Verteidigungsausgaben um rund 11 % auf insgesamt 777 Mrd. Dollar; Deutschland meldet einen Rekordwert von rund 124,7 Mrd. Euro (+25,5 % gegenüber dem Vorjahr). Fünf NATO-Staaten (Estland, Griechenland, Lettland, Litauen, Polen) dürften 2026 das 5-%-Ziel erreichen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der deutsche Fregattenauftrag vertraglich vorankommt und die NATO-Verteidigungsausgaben insgesamt stark steigen, während Japans Patriot-Weitergabe weiterhin politisch offen bleibt, passt zu Berichten über anhaltend hohe Nachfrage bei gleichzeitig begrenzten Fertigungskapazitäten in der Branche." }
        ]}
      ],
      reaction: "Die anhaltende Rüstungsnachfrage hängt mit den Kursbewegungen bei Rheinmetall, Renk und Hensoldt (Meldung 10) und mit den diplomatischen Spannungen rund um die Ukraine (Meldung 8) zusammen.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "Börse Express: Thyssenkrupp-Aktie – Acht-Fregatten-Auftrag gebilligt", url: "https://www.boerse-express.com/news/articles/thyssenkrupp-aktie-acht-fregatten-auftrag-gebilligt-952449" },
        { title: "ad-hoc-news.de: TKMS-Aktie – Morgan Stanley sieht Auftragszuwachs", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/tkms-aktie-morgan-stanley-sieht-auftragszuwachs/70308399" },
        { title: "globaldefensecorp.com: Japan will consider allowing direct arms exports to Ukraine after selling Patriot missile interceptors", url: "https://www.globaldefensecorp.com/2026/10/11/japan-will-consider-allowing-direct-arms-exports-to-ukraine-after-selling-patriot-missile-interceptors/" },
        { title: "Börse Express: Rheinmetall vor der Dezember-Weiche – trägt die Auftragsfantasie noch?", url: "https://www.boerse-express.com/news/articles/rheinmetall-vor-der-dezember-weiche-traegt-die-auftragsfantasie-noch-940926" },
        { title: "wallstreet-online.de: 777 Milliarden Dollar – NATO-Verbündete fahren Verteidigungsausgaben massiv hoch", url: "https://www.wallstreet-online.de/nachricht/21446052-777-milliarden-dollar-nato-verbuendete-fahren-verteidigungsausgaben-massiv-rheinmetall-nodestream" }
      ]
    },

    /* 12 DEALS: CARLYLE/LUKOIL, CABLE ONE, SCHNEIDER/PTC */
    {
      id: "ma-deals-lukoil-cableone-schneider-ptc-10-13", cats: ["deals", "pe"], when: "Boehly-Lizenz läuft 22.10. aus · Cable-One-Stellungnahme 12.10. · Schneider/PTC-Deal 12.10.2026",
      headline: "Carlyles Lukoil-Lizenz läuft in zehn Tagen aus, Cable One verteidigt sich gegen CoBank-Klage, Schneider Electric übernimmt PTC für 23,7 Milliarden Dollar",
      sec30: "Nach dem Auslaufen der Carlyle-Vereinbarung positioniert sich ein Konsortium um Todd Boehly (mit der US-Entwicklungsfinanzierungsbehörde DFC und Golf-Investoren) für die rund 20 Mrd. Dollar schweren internationalen Lukoil-Vermögenswerte; die aktuelle OFAC-Lizenz erlaubt nur Verhandlungen, nicht den Transfer, und läuft am 22.10. aus. Cable One erklärte am 12.10., die Vorwürfe des Gläubigers CoBank zur gestoppten Mega-Broadband-Übernahme seien „incorrect as a matter of law”, und meldete eine Einigung mit GTCR und anderen Kreditgebern über eine Finanzierungslösung. Schneider Electric kündigte am 12.10. die Übernahme der Industriesoftware-Firma PTC für 23,7 Mrd. Dollar an.",
      blocks: [
        { h: "Wie ist der Stand beim Carlyle/Lukoil-Deal und dem Boehly-Konsortium?", items: [
          { tag: "fakt", text: "Carlyle bestätigte Anfang Oktober, dass die Vereinbarung zum Kauf internationaler Lukoil-Vermögenswerte (rund 22 Mrd. Dollar) ausgelaufen ist, nachdem die US-Sanktionsbehörde OFAC keine Genehmigung erteilte.",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] },
          { tag: "unbestaetigt", text: "Ein Konsortium um Todd Boehly (Eldridge Industries), die US-Entwicklungsfinanzierungsbehörde DFC sowie Investoren aus Abu Dhabi und Katar positioniert sich laut Financial-Times-Berichten für die rund 20 Mrd. Dollar schweren Vermögenswerte; die aktuelle OFAC-Generallizenz erlaubt nur Verhandlungen und Due Diligence, nicht den tatsächlichen Transfer, und läuft am 22.10. aus. Eine finale Entscheidung lag bei Redaktionsschluss nicht vor." }
        ]},
        { h: "Was ist bei der Cable-One/Mega-Broadband-Übernahme passiert?", items: [
          { tag: "fakt", text: "Nachdem ein Bundesrichter am 09.10. die rund 480 Mio. Dollar schwere Übernahme von Mega Broadband Investments vorläufig gestoppt hatte, erklärte Cable One am 12.10., die Vorwürfe des Gläubigers CoBank seien „incorrect as a matter of law”; man habe sich mit Verkäufer GTCR und anderen Kreditgebern grundsätzlich auf die wesentlichen Bedingungen einer Finanzierungslösung verständigt. Ein Anhörungstermin stand bei Redaktionsschluss noch nicht fest.",
            ask: [{ label: "Wie kam es zu der gerichtlichen Blockade?", ref: "e:take-private-why" }] }
        ]},
        { h: "Was ist der neue Schneider-Electric/PTC-Deal?", items: [
          { tag: "fakt", text: "Schneider Electric kündigte am 12.10. die Übernahme der Industriesoftware-Firma PTC für 23,7 Mrd. Dollar an (205 Dollar pro Aktie in bar, Eigenkapitalwert rund 22,6 Mrd. Dollar)." },
          { tag: "unbestaetigt", text: "Angaben zu Finanzierung, beteiligten Banken und einem konkreten Abschlusszeitplan sind in den verfügbaren Quellen nicht genannt." }
        ]},
        { h: "Welche weiteren großen Deals wurden diese Woche bekannt?", items: [
          { tag: "fakt", text: "Clayton, Dubilier & Rice und McKesson einigten sich, den Infusionsanbieter Option Care Health für 5,8 Mrd. Dollar zu privatisieren (CD&R 51 %, McKesson rund 49 %)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Carlyle/Lukoil und die Cable-One-Übernahme weiterhin ungelöst bleiben, während gleichzeitig neue milliardenschwere Deals wie Schneider Electric/PTC abgeschlossen werden, zeigt anhaltend hohe, aber zugleich störanfällige Dealaktivität in diesem Herbst." }
        ]}
      ],
      reaction: "Die hohe, aber störanfällige Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: ["closing", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "23,7 Mrd. $ (Eigenkapitalwert ca. 22,6 Mrd. $, 205 $/Aktie bar); Finanzierung/Banken nicht in den Quellen genannt",
        buyer: "Schneider Electric",
        target: "PTC Inc. (Industriesoftware)",
        sector: "Industrielle Software / Automatisierung",
        type: "Übernahme (All-Cash)"
      },
      sources: [
        { title: "Private Equity Wire: Carlyle's Lukoil overseas assets deal expires", url: "https://www.privateequitywire.co.uk/carlyles-lukoil-oversees-assets-deal-expires/" },
        { title: "EnergyNews.pro: Carlyle drops bid for Lukoil's international assets as Boehly consortium moves in", url: "https://energynews.pro/en/carlyle-drops-bid-for-lukoils-international-assets-as-boehly-consortium-moves-in" },
        { title: "Light Reading: Cable One – CoBank's claims are 'incorrect as a matter of law'", url: "https://www.lightreading.com/cable-technology/cable-one-cobank-s-claims-are-incorrect-as-a-matter-of-law-" },
        { title: "Intellizence: Major M&A Deals Making Headlines", url: "https://intellizence.com/insights/merger-and-acquisition/major-ma-deals-making-headlines-industrial-software-healthcare-logistics-and-private-capital/" },
        { title: "Lawrence, Evans & Co.: Healthcare News, Deals, and Investments Update October 12th, 2026", url: "https://www.lawrenceevans.com/2026/10/12/healthcare-news-deals-and-investments-update-october-12th-2026/" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-blue-owl-fed-pruefung-bathla-10-13", cats: ["credit", "pe"], when: "Blue-Owl-Kurs 09.10. · SEC-Statement 28.09. · Fed-Bankenbesuche laufend · Bathla-Einschätzung RBA laufend",
      headline: "Blue-Owl-Aktie erholt sich leicht, Rücknahmen bleiben über dem Deckel, New Yorker Fed prüft Banken-Engagement in Private Credit",
      sec30: "Die Blue-Owl-Aktie schloss am 09.10. bei 9,49 Dollar (+2,37 %); die Rücknahmeanträge in zwei großen Kreditfonds blieben trotz leichter Entspannung über dem 5-%-Deckel. Die New Yorker Fed befragt seit dem Frühjahr Großbanken wie JPMorgan, Wells Fargo, Barclays und Morgan Stanley zur Qualität von Sicherheiten bei Private-Credit-Krediten; einzelne Prüfungen sind bereits abgeschlossen. Die SEC bekräftigte am 28.09. Bewertungsanforderungen für illiquide Vermögenswerte und verwies darauf, dass Private-Credit-Investments in registrierten Fonds seit 2020 um fast 60 % gewachsen sind. Die australische Finanzaufsicht RBA sieht die Bathla-Insolvenz weiterhin nicht als systemisches Risiko.",
      blocks: [
        { h: "Wie wirken sich die Bewertungssorgen auf Blue Owl aus?", items: [
          { tag: "fakt", text: "Die Blue-Owl-Aktie schloss am 09.10. bei 9,49 Dollar (+2,37 % am Tag).",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "Die Rücknahmeanträge haben sich seit dem Höhepunkt im ersten Quartal 2026 etwas abgeschwächt, liegen aber weiterhin über dem 5-%-Deckel: Im Technologie-Fonds OCIC fielen die Anträge von 4,2 Mrd. Dollar auf 3,1 Mrd. Dollar – entspricht rund 16,8 % der ausstehenden Anteile; im rund 5 Mrd. Dollar schweren Technology Income Corp wollten Anleger im dritten Quartal 39 % ihrer Anteile zurückgeben." }
        ]},
        { h: "Was unternehmen SEC und Fed?", items: [
          { tag: "fakt", text: "Die US-Börsenaufsicht SEC bekräftigte am 28.09. in einer Stellungnahme Bewertungsanforderungen für illiquide Vermögenswerte und verwies darauf, dass Private-Credit-Investments in registrierten Fonds von rund 170 Mrd. Dollar (Dezember 2020) auf rund 270 Mrd. Dollar (Dezember 2025) – fast 60 % – gewachsen sind." },
          { tag: "fakt", text: "Die Federal Reserve Bank of New York befragt seit dem Frühjahr 2026 Großbanken wie JPMorgan, Wells Fargo, Barclays und Morgan Stanley zur Qualität von Sicherheiten bei Private-Credit-Krediten; ausgelöst wurde die Prüfung unter anderem durch Abschreibungen von JPMorgan im März auf von KI-Konkurrenz bedrohte Software-Kredite. Einzelne Prüfungen (etwa bei JPMorgan) sind inzwischen abgeschlossen; auch die EZB hat ihre eigene Untersuchung zu Private-Credit-Engagements von Banken ausgeweitet." }
        ]},
        { h: "Wie stark wird die Verlässlichkeit von Bewertungen infrage gestellt?", items: [
          { tag: "unbestaetigt", text: "Ein Semafor-Bericht vom 06.10. beschreibt Klagen, die Fondsmanagern vorwerfen, ihre Bewertungsmarken künstlich aufzublähen; als Beispiel werden Bewertungen bei Krediten eines KKR-Private-Credit-Vehikels genannt, die zwischen nahezu 100 und rund 10 Cent pro Dollar liegen. Leerverkäufer bauten laut dieser Quelle im September Short-Positionen gegen Private Credit in einem seit dem ersten Quartal 2026 nicht mehr gesehenen Ausmaß auf.",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Wie ist der Stand bei der australischen Bathla-Insolvenz?", items: [
          { tag: "fakt", text: "Die australische Zentralbank RBA erklärte, die Insolvenz des Bauträgers Bathla Group habe das Anlegervertrauen in den australischen Private-Credit-Markt beschädigt, stelle aber nach ihrer Einschätzung kein systemisches Risiko für die Finanzstabilität dar." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich der Blue-Owl-Kurs leicht erholt, während Rücknahmen weiterhin über dem Deckel liegen und sowohl SEC als auch Fed ihre Prüfungen fortsetzen, zeigt, dass die Debatte um die Verlässlichkeit von Private-Credit-Bewertungen trotz einzelner Entspannungssignale anhält." }
        ]}
      ],
      reaction: "Die anhaltende Bewertungsdebatte ergänzt die Fragen zu Dealaktivität und Fremdfinanzierung bei den M&A-Themen (Meldung 12) und zur anhaltend hohen US-Rendite (Meldung 2).",
      terms: ["nav", "default-rate", "bdc", "pik"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:deal-risks", "chain:rates-to-credit"],
      widget: "sofr",
      sources: [
        { title: "Bloomberg: Blue Owl Caps Redemptions at Two BDCs After Surge in Withdrawal Requests", url: "https://www.bloomberg.com/news/articles/2026-10-02/blue-owl-again-caps-two-bdcs-after-39-17-withdrawal-requests" },
        { title: "Benzinga: Fed Visits Banks In Private-Credit Risk Review", url: "https://www.benzinga.com/markets/private-markets/26/10/62206396/fed-visits-jpmorgan-wells-fargo-barclays-in-private-credit-risk-review" },
        { title: "WilmerHale: SEC Staff Statement Highlights Valuation and Disclosure Expectations", url: "https://www.wilmerhale.com/en/insights/client-alerts/20261008-sec-staff-statement-highlights-valuation-and-disclosure-expectations-for-private-credit-and-other-illiquid-assets" },
        { title: "Semafor: The worry hanging over private credit – Can anyone trust the numbers?", url: "https://semafor.com/article/10/06/2026/the-worry-hanging-over-private-credit-can-anyone-trust-the-numbers" },
        { title: "Capital Brief: Bathla collapse dents confidence in private credit, RBA says", url: "https://www.capitalbrief.com/briefing/bathla-collapse-dents-confidence-in-private-credit-rba-says-843c48ba-61aa-4ab7-8c63-08bf2e056190/" }
      ]
    },

    /* 14 TECHNOLOGIE: KI-BLASE */
    {
      id: "ki-blase-openai-dalio-huang-nvidia-10-13", cats: ["tech"], when: "OpenAI-Erklärung 09.10. · Dalio-Warnung Anfang Okt. · Huang-Gegenrede · Nvidia/Reflection-AI-Gespräche 10./11.10.2026",
      headline: "OpenAIs Umsatzrätsel erklärt sich laut Berichten durch unterschiedliche Rechenmethoden, Dalio warnt weiter vor Blase, Nvidia widerspricht und verhandelt über Reflection AI",
      sec30: "Laut Bloomberg erklärt sich die Diskrepanz zwischen den rund 50 Mrd. Dollar aktuellem und den rund 70 Mrd. Dollar für Jahresende angepeiltem annualisiertem OpenAI-Umsatz teils durch unterschiedliche Berechnungsmethoden: Investoren versuchten, OpenAIs Kennzahl nach der Methode von Anthropic zu berechnen, die Cloud-Partner-Umsätze anders verbucht. OpenAI verhandelt weiterhin über eine Finanzierungsrunde von mindestens 30 Mrd. Dollar bei einer Bewertung von 1,4 Billionen Dollar. Investor Ray Dalio bekräftigte seine Blasen-Warnung, Nvidia-Chef Jensen Huang widersprach mit einer Umsatzprognose von 108 Mrd. Dollar. Nvidia führt zudem frühe Gespräche über eine engere Verbindung mit dem KI-Unternehmen Reflection AI (Bewertung 25 Mrd. Dollar).",
      blocks: [
        { h: "Wie erklärt sich die Diskrepanz bei OpenAIs Umsatzzahlen?", items: [
          { tag: "fakt", text: "Laut Bloomberg erklärt sich die Diskrepanz zwischen dem Ende September genannten annualisierten Umsatz von rund 50 Mrd. Dollar und dem für Jahresende angepeilten Ziel von mindestens 70 Mrd. Dollar teils durch unterschiedliche Berechnungsmethoden: Investoren versuchten, OpenAIs Kennzahl nach der Methode des Konkurrenten Anthropic zu berechnen, die Cloud-Partner-Umsätze anders verbucht.",
            ask: [{ label: "Wie hängt das mit der Markterholung am Montag zusammen?", ref: "s:1" }] },
          { tag: "fakt", text: "OpenAI verhandelt laut Berichten weiterhin über eine neue Finanzierungsrunde von mindestens 30 Mrd. Dollar bei einer Bewertung von rund 1,4 Billionen Dollar." }
        ]},
        { h: "Welche neuen Blasen-Warnungen und Gegenstimmen gibt es?", items: [
          { tag: "position", text: "Bridgewater-Gründer Ray Dalio bekräftigte seine Warnung, die KI-Welle sei eine „klassische Blase”: „Ich glaube, wir sind nah dran.” Als möglichen Auslöser nannte er das Zusammenspiel aus steigender KI-Kreditaufnahme und steigenden Zinsen.",
            ask: [{ label: "Warum warnen Analysten vor einer KI-Blase?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Nvidia-Chef Jensen Huang widersprach den Blasen-Sorgen explizit und verwies auf eine eigene Umsatzprognose von 108 Mrd. Dollar: Die Branche sei vom Forschungslabor zur Massenproduktion übergegangen." }
        ]},
        { h: "Was ist bei Nvidia und der KI-Infrastruktur-Finanzierung neu?", items: [
          { tag: "unbestaetigt", text: "Nvidia führt laut Financial-Times-Berichten frühe Gespräche über eine Übernahme oder eine engere Verbindung mit dem KI-Unternehmen Reflection AI (zuletzt mit 25 Mrd. Dollar bewertet, Nvidia bereits mit rund 800 Mio. Dollar investiert); konkrete Konditionen stehen laut Berichten noch nicht fest." },
          { tag: "fakt", text: "SpaceX sucht weiterhin rund 40 Mrd. Dollar Fremdfinanzierung (angeführt von Apollo Global Management), um Nvidia-KI-Chips zu kaufen; ein Abschluss wird laut Berichten erst 2027 erwartet.",
            ask: [{ label: "Was ist damit gemeint, dass Finanzierung „zirkulär” wird?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die vermeintlich widersprüchlichen OpenAI-Zahlen teils durch unterschiedliche Rechenmethoden erklären lassen, während gleichzeitig renommierte Investoren und Nvidias eigener Chef öffentlich gegenteilige Einschätzungen zur Tragfähigkeit der KI-Investitionen vertreten, zeigt, wie unterschiedlich dieselbe Datenlage gedeutet werden kann. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die anhaltende KI-Debatte bleibt Hintergrund für die Nasdaq- und Asien-Bewegungen in Meldung 1.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Bloomberg: Anthropic and OpenAI Use Different Revenue Calculations, Clouding AI Valuations", url: "https://www.bloomberg.com/news/articles/2026-10-09/anthropic-and-openai-s-revenue-calculations-confuse-investors" },
        { title: "Bloomberg: OpenAI Expects $70 Billion in Annualized Revenue by End of 2026", url: "https://www.bloomberg.com/news/articles/2026-10-09/openai-expects-70-billion-in-annualized-revenue-by-end-of-2026" },
        { title: "Finanzmarktwelt: Ray Dalio warnt vor KI-Blase – was sie zum Platzen bringt", url: "https://finanzmarktwelt.de/ray-dalio-warnt-vor-ki-blase-was-sie-zum-platzen-bringt-405218/" },
        { title: "IT-Boltwise: Jensen Huang kontert KI-Blasenangst mit 108-Milliarden-Prognose", url: "https://www.it-boltwise.de/jensen-huang-kontert-ki-blasenangst-mit-108-milliarden-prognose.html" },
        { title: "Bloomberg: Nvidia Explores Deal Options With Reflection AI, Financial Times Says", url: "https://www.bloomberg.com/news/articles/2026-10-10/nvidia-is-in-talks-to-acquire-reflection-ai-the-ft-reports" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gasspeicher-stromsteuer-kwkg-eeg-10-13", cats: ["energy"], when: "Gasspeicherstand 09.10. · KWKG im Kabinett 14.10. · Stromsteuer-Ankündigung 12.10. · OPEC+-Entscheidung 04.10.2026",
      headline: "Deutsche Gasspeicher bleiben unter Zielpfad, Kabinett berät morgen über Kraft-Wärme-Kopplungsgesetz, Merz kündigt Stromsteuer-Senkung für alle an",
      sec30: "Die deutschen Gasspeicher lagen am 09.10. bei rund 59,8 % – rund 16 bis 17 Prozentpunkte unter dem Vorjahreswert; das gesetzliche Ziel von 80 % zum 01.11. erscheint beim aktuellen Tempo kaum erreichbar. Das Bundeswirtschaftsministerium hat das Kraft-Wärme-Kopplungsgesetz für die morgige Kabinettssitzung (14.10.) angemeldet, ein fertiger Entwurf lag bei Redaktionsschluss noch nicht vor. Kanzler Merz kündigte am 12.10. an, die Stromsteuer für alle Verbraucher auf das EU-Mindestniveau zu senken. Die OPEC+ beließ die Fördermengen für November am 04.10. unverändert.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen am 09.10. bei rund 59,8 % (147,9 TWh); das gesetzliche Ziel liegt bei 80 % zum 01.11. Der Füllstand liegt rund 16 bis 17 Prozentpunkte unter dem Vorjahreswert.",
            ask: [{ label: "Was ist TTF?", ref: "t:ttf" }] },
          { tag: "fakt", text: "Wirtschaftsministerin Katherina Reiche hatte die bundeseigene Sefe angewiesen, bis zum 15.12. zusätzlich 8 TWh Gas zu beschaffen und einzuspeichern; diese Anweisung steht weiterhin." }
        ]},
        { h: "Was kündigte Kanzler Merz zur Stromsteuer an?", items: [
          { tag: "position", text: "Merz kündigte nach der CDU-Klausur an, die Stromsteuer für alle Verbraucher auf das EU-Mindestniveau zu senken (bislang 20,50 Euro je Megawattstunde für Haushalte, unverändert seit 2003; EU-Minimum 1,0 Euro); ein konkreter Zeitplan blieb offen.",
            ask: [{ label: "Mehr zur CDU-Klausur und zu den Umfragewerten", ref: "s:7" }] }
        ]},
        { h: "Welche weiteren energiepolitischen Entscheidungen stehen an?", items: [
          { tag: "fakt", text: "Das Bundeswirtschaftsministerium hat das Kraft-Wärme-Kopplungsgesetz (geplante Förderverlängerung bis 2035, höhere Fördersätze) für die Kabinettssitzung morgen, 14.10., angemeldet; ein fertiger Referentenentwurf lag bei Redaktionsschluss noch nicht vor." },
          { tag: "fakt", text: "Die EEG-Novelle (Anhörung im Bundestags-Wirtschaftsausschuss am 05.10.) muss spätestens Anfang 2027 in Kraft treten, da die Beihilfegenehmigung des aktuellen EEG Ende 2026 ausläuft." }
        ]},
        { h: "Wie ist der Stand beim Ölpreis und bei OPEC+?", items: [
          { tag: "fakt", text: "Die OPEC+ beließ die Fördermengen für November am 04.10. unverändert gegenüber September – der zweite Monat in Folge ohne Anhebung.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] },
          { tag: "unbestaetigt", text: "Der Brent-Preis bewegte sich dennoch zwischen rund 103 und 106 Dollar; als Treiber nennen Berichte vor allem die Spannungen am Golf und nicht die Förderpolitik (Meldung 9)." }
        ]},
        { h: "Wie reagieren Verbände auf die Auflösung des Referats für Wind- und Solarindustrie?", items: [
          { tag: "position", text: "Die Verbände BEE, BWE und BSW kritisierten die Anfang Oktober erfolgte Auflösung des zuständigen Referats im Bundeswirtschaftsministerium gemeinsam: „Diese wiederholten Störmanöver müssen aufhören.” Ministerin Reiche bezeichnete die Bremsvorwürfe als „Unsinn”." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Gasspeicher weiterhin unter dem gesetzlichen Zwischenziel liegen, während die Bundesregierung gleichzeitig eine Stromsteuer-Senkung ankündigt und über ein neues Kraft-Wärme-Kopplungsgesetz berät, zeigt, wie eng Versorgungssicherheit und Energiepreis-Debatte derzeit miteinander verknüpft sind." }
        ]}
      ],
      reaction: "Die angespannte Gasspeicherlage und der von geopolitischen Spannungen geprägte Ölpreis ergänzen die Lage am Golf (Meldung 9); die Stromsteuer-Ankündigung hängt mit der CDU-Krisensitzung in Meldung 7 zusammen.",
      terms: ["ttf", "lng", "opec-plus"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation"],
      sources: [
        { title: "gasspeicherkarte.de: Gasspeicher Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" },
        { title: "Heise: Federal government intervenes in gas storage – Sefe to procure 8 TWh", url: "https://www.heise.de/en/news/Federal-government-intervenes-in-gas-storage-Sefe-to-procure-8-TWh-11471200.html" },
        { title: "zfk.de: Energiegesetze – Zeitplan 2026 von Merz, Reiche und Co.", url: "https://www.zfk.de/politik/deutschland/energiegesetze-zeitplan-merz-reiche" },
        { title: "Stuttgarter Zeitung: Merz bestätigt – Stromsteuer soll für alle sinken", url: "https://www.stuttgarter-zeitung.de/wirtschaft/merz-bestaetigt-stromsteuer-soll-fuer-alle-sinken-79560988.html" },
        { title: "Telepolis: Reiche löst Referat für Wind- und Solarindustrie auf", url: "https://www.telepolis.de/article/Reiche-loest-Referat-fuer-Wind-und-Solarindustrie-auf-11480470.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Montag legte der Dow Jones um 0,38 % zu, während S&P 500 (−0,06 %) und Nasdaq (−0,44 %) leicht nachgaben; der DAX stieg um 0,76 % auf 25.277,68 Punkte." },
    "why-markets-move": { tag: "unbestaetigt", story: 1, text: "Am Dienstagmorgen brachen asiatische Technologiewerte ein, nachdem der chinesische Speicherchip-Hersteller ChangXin Memory ein neues DRAM-Design vorstellte, das die Marktstellung US-amerikanischer und südkoreanischer Chiphersteller infrage stellt." },
    "yield-meaning": { tag: "unbestaetigt", story: 2, text: "Die US-10-Jahres-Rendite lag zuletzt bei rund 5,20 bis 5,24 % – nahe dem am 07.10. erreichten Zwischenhoch von bis zu 5,36 %." },
    "yield-stocks": { tag: "einordnung", story: 1, text: "Dass Technologie- und Chipwerte besonders stark auf neue Konkurrenzsignale reagieren, während die US-Rendite gleichzeitig nahe einem Mehrjahreshoch verharrt, passt zum klassischen Muster empfindlicher Reaktionen zinssensibler Aktien." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold notierte je nach Quelle zwischen rund 4.169 und 4.202 Dollar je Feinunze; ein auf ein 18-Monats-Hoch gestiegener Dollar belastete den Preis trotz anhaltender geopolitischer Unsicherheit." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs fiel von 1,1206 Dollar am Freitag auf 1,1181 Dollar am Montag; der Dienstagskurs war zum Redaktionsschluss noch nicht veröffentlicht." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin pendelte zwischen rund 82.287 und 83.673 Dollar, mit zuletzt abwärts gerichteter Tendenz vor den morgigen US-Inflationsdaten." },
    "inflation-what": { tag: "unbestaetigt", story: 5, text: "Die vorläufige deutsche Inflationsrate für September lag bei +3,3 %; die finalen Destatis-Zahlen sollten heute erscheinen, waren zum Redaktionsschluss aber noch nicht auffindbar." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein 5-Monats-Tief." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Seit Mai 2026 steht mit Kevin Warsh ein neuer Fed-Vorsitzender an der Spitze der Notenbank; mehrere Fed-Mitglieder halten weiterhin an der grundsätzlichen Möglichkeit weiterer Zinserhöhungen fest, während die EZB ihre Entscheidungen von Sitzung zu Sitzung trifft." },
    "fed-hike": { tag: "unbestaetigt", story: 4, text: "Die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung bei der FOMC-Sitzung am 27./28.10. liegt laut mehreren Quellen bei rund 16 bis 22 %; für ein Beibehalten des Leitzinses bei rund 78 bis 84 %." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Die nächste EZB-Zinsentscheidung fällt am 29.10.2026; EZB-Chefökonom Lane warnte vor einer „zweiten Welle” steigender Energiepreise." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Die Brent-Preisangaben für Montag/Dienstag reichen je nach Quelle von rund 103 bis 106 Dollar; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "fakt", story: 2, text: "Der Risikoaufschlag französischer Staatsanleihen gegenüber Bundesanleihen lag am 12.10. bei rund 139,5 Basispunkten, nach einem Zwischenhoch von über 150 Basispunkten Anfang Oktober." },
    "haushalt-basics": { tag: "unbestaetigt", story: 6, text: "Kanzler Merz erwartet laut Berichten nicht mehr, dass die Rentenreform wie geplant noch 2026 vom Bundestag beschlossen wird; Ziel ist nun ein Kabinettsbeschluss bis Jahresende, das Gesamtpaket soll im Frühjahr 2027 stehen." },
    "rente-basics": { tag: "fakt", story: 6, text: "SPD-Fraktionschef Miersch forderte am 11.10. zusätzliche Gespräche vor dem Kabinettsbeschluss zur Rente; CDU/CSU-Vize-Fraktionschef Winkel wies dies zurück." },
    "landtagswahl-why": { tag: "unbestaetigt", story: 7, text: "Über 350 Linken-Mitglieder unterzeichneten offene Briefe gegen die Antisemitismus-Vereinbarung mit Grünen und SPD in Berlin; der Parteitag der Linken wurde auf den 18.10. verschoben." },
    "coalition-majority": { tag: "fakt", story: 7, text: "Die Vergesellschaftung großer privater Wohnungsbestände bleibt zentraler ungeklärter Streitpunkt der Berliner Sondierungen; die SPD lehnt sie ab, die Linke drängt auf Umsetzung." },
    "hormuz": { tag: "fakt", story: 9, text: "Seit Oktoberbeginn zählte die britische Marinebehörde UKMTO 18 Angriffsmeldungen auf Handelsschiffe rund um die Straße von Hormus – ein neuer Höchststand seit Kriegsbeginn." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "Präsident Trump erklärte am 08.10., die USA würden vor den US-Zwischenwahlen keine Angriffe auf den Iran starten; die Blockade iranischer Häfen bleibe aber „in voller Kraft”." },
    "defence-order": { tag: "unbestaetigt", story: 11, text: "Japan prüft weiterhin eine mögliche Weitergabe von Patriot-Abfangraketen an die Ukraine; eine Entscheidung steht aus." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Rheinmetall und Renk werden von Analysten weiterhin gespalten bewertet (Berenberg/Bank of America senken, Deutsche Bank/Jefferies bestätigen), Hensoldt bleibt der klare Gewinner unter den drei Werten." },
    "nato-target": { tag: "fakt", story: 11, text: "Der Haushaltsausschuss des Bundestags billigte vier zusätzliche TKMS-Fregatten für rund 5,3 Mrd. Euro; die Verteidigungsausgaben europäischer NATO-Partner stiegen 2026 um rund 11 % auf 777 Mrd. Dollar." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Ein Konsortium um Todd Boehly positioniert sich für die rund 20 Mrd. Dollar schweren internationalen Lukoil-Vermögenswerte; die aktuelle OFAC-Lizenz läuft am 22.10. aus." },
    "take-private-why": { tag: "fakt", story: 12, text: "Cable One erklärte am 12.10., die Vorwürfe des Gläubigers CoBank zur gestoppten Mega-Broadband-Übernahme seien „incorrect as a matter of law”." },
    "deal-risks": { tag: "fakt", story: 13, text: "Die Federal Reserve Bank of New York befragt seit dem Frühjahr 2026 Großbanken zur Qualität von Sicherheiten bei Private-Credit-Krediten; einzelne Prüfungen sind bereits abgeschlossen." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Die Blue-Owl-Aktie schloss am 09.10. bei 9,49 Dollar; Rücknahmen in zwei großen Kreditfonds blieben trotz leichter Entspannung über dem 5-%-Deckel." },
    "pc-rates": { tag: "unbestaetigt", story: 13, text: "Ein Semafor-Bericht beschreibt Bewertungen bei Krediten eines KKR-Private-Credit-Vehikels, die zwischen nahezu 100 und rund 10 Cent pro Dollar liegen." },
    "ai-capex": { tag: "position", story: 14, text: "Bridgewater-Gründer Ray Dalio bekräftigte seine Warnung, die KI-Welle sei eine „klassische Blase”; Nvidia-Chef Jensen Huang widersprach mit einer Umsatzprognose von 108 Mrd. Dollar." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Nvidia führt frühe Gespräche über eine engere Verbindung mit dem KI-Unternehmen Reflection AI, das zuletzt mit 25 Mrd. Dollar bewertet wurde." },
    "circular-financing": { tag: "fakt", story: 14, text: "SpaceX sucht weiterhin rund 40 Mrd. Dollar Fremdfinanzierung, angeführt von Apollo Global Management, um Nvidia-KI-Chips zu kaufen." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 09.10. bei rund 59,8 % – deutlich unter dem gesetzlichen Zwischenziel; Kanzler Merz kündigte zusätzlich eine Stromsteuer-Senkung für alle an." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Die OPEC+ beließ die Fördermengen für November am 04.10. unverändert gegenüber September – der zweite Monat in Folge ohne Anhebung." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie schlossen Dow Jones, S&P 500 und Nasdaq am Montag, 12.10.2026, in New York?",
      options: [
        "Alle drei Indizes schlossen deutlich im Plus",
        "Der Dow legte zu, S&P 500 und Nasdaq gaben leicht nach",
        "Alle drei Indizes schlossen deutlich im Minus",
        "Die Börsen blieben wegen Columbus Day komplett geschlossen"
      ],
      answer: 1,
      explain: "Der Dow Jones stieg um 0,38 %, während S&P 500 (−0,06 %) und Nasdaq (−0,44 %) leicht nachgaben. Der Aktienmarkt war trotz Columbus Day regulär geöffnet, nur der Anleihemarkt blieb geschlossen."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 9,
      q: "Wie viele Angriffsmeldungen zählte die britische Marinebehörde UKMTO seit Oktoberbeginn 2026 in der Region rund um die Straße von Hormus?",
      options: [
        "Keine, die Angriffe hatten zu diesem Zeitpunkt bereits aufgehört",
        "Drei",
        "18 – ein neuer Höchststand seit Kriegsbeginn",
        "Über 100"
      ],
      answer: 2,
      explain: "Laut UKMTO wurden seit Oktoberbeginn 18 Angriffsmeldungen gezählt – der höchste Stand seit Beginn des Konflikts zwischen den USA/Israel und dem Iran im Februar 2026."
    },
    {
      topic: "Wirtschaft", type: "Zusammenhang", story: 4,
      q: "Angenommen, die morgigen US-Inflationsdaten für September würden deutlich höher ausfallen als vom Markt erwartet. Was würde dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
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
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Was ergab der INSA-Sonntagstrend vom 11.10.2026 für die AfD?",
      options: [
        "Die AfD fiel auf unter 15 % zurück",
        "Die AfD lag erstmals bei 30 % und damit elf Punkte vor der Union",
        "Die AfD und die Union lagen gleichauf bei 25 %",
        "Die Umfrage wurde wegen methodischer Probleme nicht veröffentlicht"
      ],
      answer: 1,
      explain: "Der INSA-Sonntagstrend sah die AfD erstmals bei 30 % – elf Punkte vor der Union, die bei 19 % lag. Dies fiel zusammen mit einer zweitägigen CDU-Krisensitzung nach einer Serie von Landtagswahlniederlagen."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Angenommen, die Rücknahmewünsche in Blue Owls Kreditfonds würden weiter steigen statt sich zu stabilisieren. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Ein automatischer Rückgang der US-Zinsen",
        "Ein weiterer Druck auf gedeckelte Rücknahmen und auf den Kurs von Blue Owl, ohne dass ein fester Automatismus besteht",
        "Eine sofortige Auflösung aller betroffenen Fonds durch die SEC",
        "Eine automatische Erhöhung der Ausfallrate auf über 20 %"
      ],
      answer: 1,
      explain: "Höhere Rücknahmewünsche erhöhen laut Berichten tendenziell den Druck auf gedeckelte Rücknahmen und auf das Vertrauen in die Bewertungen; ein fester Automatismus für Zinsentscheidungen, SEC-Eingriffe oder Ausfallraten besteht dadurch nicht."
    }
  ]
};
