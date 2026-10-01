// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-01",
  dateLabel: "Donnerstag, 1. Oktober 2026",
  updatedLabel: "Recherchestand 01.10.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagvormittag, 01.10.2026. Für DAX, Euro Stoxx 50, S&P 500, Nasdaq und Dow Jones liegt der zuletzt bestätigte Schlusskurs vom Mittwoch, 30.09.2026, vor; ein bestätigter Donnerstags-Schlusskurs lag zum Recherchezeitpunkt naturgemäß noch nicht vor, da die Börsen erst im Tagesverlauf schließen. Vorbörsliche Indikationen deuteten auf einen leicht festeren DAX-Start hin. Brent-Öl, Bitcoin und EUR/USD werden rund um die Uhr beziehungsweise durchgehend gehandelt, ihre Werte spiegeln bereits den Donnerstagvormittag wider. Bei der US- und der Bund-Rendite ist der Mittwochsschluss der zuletzt bestätigte Wert. Werte mit „≈” stammen aus Marktberichten und können je nach Quelle und Erhebungszeitpunkt leicht abweichen.",

  top: [
    { text: "Die US-Rendite stieg am Mittwoch auf rund 5,30 % – den höchsten Stand seit rund 24 Jahren –, obwohl die am selben Tag veröffentlichte Kern-PCE-Inflation mit 3,0 % schwächer ausfiel als erwartet. Die von Märkten eingepreiste Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung am 28.10. schwankte danach laut Berichten zwischen rund 32 und 67 %. EZB-Präsidentin Lagarde sprach sich am Montag vor dem Europaparlament weiter für „maßvolle” Zinsschritte aus.", ref: "s:2" },
    { text: "Irans Außenminister Araghchi reiste am Mittwoch nach Doha und erhielt dort laut mehreren Berichten ein US-Gegenangebot zur Wiedereröffnung der Straße von Hormus, das er dem Kabinett und Präsident Pezeshkian vorlegte. Ob es sich inhaltlich um ein Gegenangebot oder eine Ablehnung handelt, blieb offiziell unbestätigt. Der Ölpreis bleibt mit rund 98 Dollar je Barrel Brent deutlich über dem Niveau vor dem Konflikt.", ref: "s:8" },
    { text: "Die Berliner SPD und die Grünen nahmen die Einladung der Linken zu Sondierungsgesprächen an; zentraler Streitpunkt ist der Umgang der Linken mit Antisemitismus-Vorwürfen, den Grüne und SPD zur Vorbedingung machten. Linken-Landesvorsitzende Kerstin Wolter räumte dazu Fehler in der eigenen Partei ein.", ref: "s:6" },
    { text: "Ein Koalitionsgipfel von Union und SPD zur Rentenreform endete nach fast vier Stunden ohne Ergebnis. Diskutiert wird weiterhin eine Anhebung der für die abschlagsfreie Rente nötigen Beitragsjahre von 45 auf 46 bis 47; der DGB hält an seinem Gegenkonzept einer „Schutzrente” fest.", ref: "s:7" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.199,19", change: "−0,79 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 30.09. · Do 01.10.: noch kein bestätigter Schlusskurs", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Letzter bestätigter Stand", text: "Der DAX schloss am Mittwoch, 30.09., bei 25.199,19 Punkten (−0,79 %) und rutschte dabei unter die vielbeachtete 100-Tage-Linie. Für den Monat September ergab sich ein Minus von rund 4 % – der schwächste Monat seit Längerem." },
        { label: "Vorbörse Donnerstag", text: "Ein Bericht nannte für die Vorbörse am Donnerstag ein DAX-Future-Plus von rund 55 Punkten. Ein bestätigter Xetra-Schlusskurs für Donnerstag lag zum Recherchezeitpunkt nicht vor." }
      ],
      moved: {
        intro: "Als Hintergrund für den Mittwoch nennen Berichte:",
        items: [
          "Die am selben Tag veröffentlichte deutsche Inflationsrate von 3,3 % für September – der höchste Stand seit Ende 2023 – belastete den DAX trotz insgesamt robuster US-Konjunkturdaten (Meldung 4).",
          "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite nach Fed-Gouverneur Barrs Äußerungen hält die Finanzierungskosten von Unternehmen hoch (Meldung 2)."
        ]
      },
      important: [
        { area: "Inflation", text: "Die deutsche Inflationsrate stieg im September auf 3,3 % und gilt als einer der Belastungsfaktoren für den DAX.", ref: "s:4" },
        { area: "Zinsen", text: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite wirkt über die Finanzierungskosten auch auf europäische Aktien.", ref: "s:2" }
      ],
      source: { title: "onvista: ROUNDUP/Aktien Frankfurt Schluss – Dax beendet schwachen September im Minus", url: "https://www.onvista.de/news/2026/09-30-roundup-aktien-frankfurt-schluss-dax-beendet-schwachen-september-im-minus-0-10-26559233" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.269,02", change: "−0,81 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 30.09. · Do 01.10.: noch kein bestätigter Schlusskurs", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Ein Minus heißt: Diese Unternehmen wurden zusammen niedriger bewertet als am Vortag, mit teils großen Unterschieden zwischen einzelnen Aktien.",
      compare: [
        { label: "Widersprüchliche Angaben", text: "Eine Quelle nennt für Mittwoch 6.269,02 Punkte (−0,81 %), eine andere 6.274,19 Punkte (−0,73 %). Für den Monat September ergab sich laut Berichten ein Minus von rund 2,4 %." }
      ],
      moved: {
        intro: "Für Mittwoch nennen Berichte:",
        items: [
          "Höhere Inflationsdaten aus mehreren großen Euro-Ländern (Deutschland 3,3 %, Spanien 5,0 %) belasteten laut dpa-Marktbericht die Stimmung (Meldung 4).",
          "Die gestiegenen US- und Bund-Renditen nach Fed-Gouverneur Barrs Äußerungen wirken weiter auf europäische Aktien (Meldung 2)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Bund-Rendite lag Ende September bei rund 3,58 % und damit nahe einem mehrjährigen Hoch.", ref: "e:yield-stocks" }
      ],
      source: { title: "finanzen.at: Handel in Europa – Euro STOXX 50 sackt zum Handelsende ab", url: "https://www.finanzen.at/nachrichten/aktien/handel-in-europa-euro-stoxx-50-sackt-zum-handelsende-ab-1036586301" }
    },
    "sp500": {
      label: "S&P 500", value: "7.651,54", change: "−0,3 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 30.09. · Do 01.10.: noch kein bestätigter Schlusskurs", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. Ein Minus von 0,3 % heißt: Diese Firmen wurden zusammen rund 0,3 % niedriger bewertet als am Vortag.",
      compare: [
        { label: "Dow Jones", text: "Mittwochsschluss: −0,86 % (−443,87 Punkte) auf 50.906,05 Punkte." },
        { label: "Nasdaq", text: "Mittwochsschluss: +0,2 % (+63,52 Punkte) auf 26.861,06 Punkte – als einziger der drei großen US-Indizes im Plus." },
        { label: "September-Bilanz", text: "Für den Monat September nennen Berichte beim S&P 500 ein Minus von rund 0,4 bis 0,7 %, beim Dow ein Minus von rund 4,3 bis 4,9 % und bei der Nasdaq ein Plus von rund 1,7 bis 1,9 % – je nach Quelle leicht abweichende Werte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Die auf rund 5,30 % gestiegene US-Rendite belastete laut CNBC zinssensitive Werte, obwohl die am selben Tag veröffentlichte Kern-PCE-Inflation mit 3,0 % schwächer ausfiel als erwartet.",
          "Anleger konzentrierten sich laut Berichten stattdessen auf starkes Wachstum und einen weiterhin hohen staatlichen Finanzierungsbedarf."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die US-Rendite stieg auf den höchsten Stand seit rund 24 Jahren.", ref: "n:ust10" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow, S&P 500 post monthly losses in September as Treasury yields climb", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-september-30-dow-sp-500-nasdaq-080339262.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.861,06", change: "+0,2 % (Mi-Schluss)", dir: "up", asof: "Schluss Mi 30.09. · Do 01.10.: noch kein bestätigter Schlusskurs", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Am Mittwoch legte sie trotz der auf ein 24-Jahres-Hoch gestiegenen US-Rendite leicht zu.",
      compare: [
        { label: "Technologiewerte", text: "AMD kündigte am 28.09. die Übernahme von World Labs für 8,2 Mrd. Dollar in Aktien an, Nvidia erhöhte sein Aktienrückkaufprogramm um 150 Mrd. Dollar (Meldung 13)." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Anleger preisten laut CNBC/TheStreet trotz hoher Zinsen weiterhin starkes Wirtschaftswachstum und anhaltende KI-Investitionen ein.",
          "Die Debatte um KI-Sicherheit (abgesagter GPT-6.1-Start bei OpenAI, FTC-Untersuchung) bleibt im Hintergrund relevant für Technologiewerte (Meldung 13)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq anders auf steigende Zinsen als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "TheStreet: Stock Market Today (Sept. 30, 2026) – Nasdaq rises to end Q3 as PCE inflation lands below expectations", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-30-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1332", change: "≈ leicht fallend", dir: "down", asof: "Do 01.10. Vormittag", story: 2,
      means: "1 Euro kostet etwa 1,13 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Mittwoch zum Vergleich", text: "Am Mittwoch, 30.09., notierte EUR/USD laut FXStreet bei 1,1339 (−0,02 % zum Vortag)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Höhere als erwartete Inflationsdaten aus großen Euro-Ländern (u. a. Spanien 5,0 %) belasteten laut FXStreet den Euro.",
          "EZB-Präsidentin Lagarde sprach am Montag erneut von „maßvollen” Zinsschritten statt einer aggressiveren Straffung, während Fed-Gouverneur Barr zuvor weitere Zinsschritte signalisiert hatte (Meldung 2)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die unterschiedliche Tonlage von Fed und EZB bleibt für den Euro-Dollar-Kurs im Fokus.", ref: "s:2" }
      ],
      source: { title: "FXStreet: The Euro slips as Europe’s biggest economies report hotter inflation", url: "https://www.fxstreet.com/news/the-euro-slips-as-europes-biggest-economies-report-hotter-inflation-202609302331" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,30 %", change: "höchster Stand seit rund 24 Jahren", dir: "up", asof: "Schluss Mi 30.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,30 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,30 % Zinsen pro Jahr.",
      compare: [
        { label: "Genauer Wert", text: "Laut CNBC schloss die Rendite am Mittwoch, 30.09., bei rund 5,298 % – dem höchsten Stand seit rund 24 Jahren (Mai 2002)." },
        { label: "Lange Laufzeiten", text: "Die 30-jährige US-Rendite stieg parallel auf 5,642 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Fed unter dem neuen Vorsitzenden Kevin Warsh hatte den Leitzins am 16.09. erstmals seit 2023 auf 3,75–4,00 % angehoben; Fed-Gouverneur Barr signalisierte am 23.09. weitere mögliche Schritte.",
          "Bemerkenswert laut CNBC: Der Renditeanstieg erfolgte, obwohl die am 30.09. veröffentlichte Kern-PCE-Inflation mit 3,0 % schwächer ausfiel als erwartet – Anleger konzentrierten sich stattdessen auf starkes Wachstum und hohen staatlichen Finanzierungsbedarf."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren weiterhin mit Aktien.", ref: "e:yield-stocks" },
        { area: "Private Credit", text: "Variable Zinsen bleiben erhöht.", ref: "e:sofr-spread" },
        { area: "Zinserwartung", text: "Wie stark die Fed im Oktober noch nachlegt, ist laut Berichten unsicher.", ref: "s:2" }
      ],
      source: { title: "CNBC: 10-year Treasury yield is higher as traders look past inflation data, await jobs report", url: "https://www.cnbc.com/2026/09/30/treasury-yields-bonds-selloff.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,58 %", change: "nahe mehrjährigem Hoch", dir: "up", asof: "Schluss Mi 30.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. Rund 3,58 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,58 % pro Jahr.",
      compare: [
        { label: "Widersprüchliche Angaben", text: "Für den Monatsverlauf nennen Quellen leicht abweichende Werte zwischen rund 3,48 % und 3,61 %; ein Bericht bezeichnet das Niveau als 15-Jahres-Hoch." }
      ],
      moved: {
        intro: "Berichte nennen als möglichen Hintergrund:",
        items: [
          "EZB-Präsidentin Lagarde sprach sich am Montag, 28.09., vor dem Europaparlament weiter für „maßvolle” Zinsschritte aus.",
          "Die zur Fed-Zinserhöhung tendierenden Äußerungen von Fed-Gouverneur Barr wirken über die US-Rendite auch auf die Bund-Rendite."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen verteuern neue Bundesschulden, relevant für den Haushalt 2027.", ref: "e:debt-brake" }
      ],
      source: { title: "cbonds: 10-jährige Bundesanleihe – Rendite, Kurs und Zinsentwicklung", url: "https://cbonds.de/10-year-german-government-bond-yield/" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.150,99 $", change: "−0,74 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 30.09.", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.151 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Monatsbilanz", text: "Im September verlor Gold laut Berichten rund 6,6 % in Dollar gerechnet." },
        { label: "Jahreshoch", text: "Das bisherige Rekordhoch von rund 5.417,60 Dollar (Tageshoch zeitweise 5.594,70 Dollar) hatte Gold bereits Ende Januar 2026 erreicht; der aktuelle Preis liegt deutlich darunter." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite macht zinslose Anlagen wie Gold tendenziell weniger attraktiv (Meldung 2).",
          "Die anhaltende geopolitische Unsicherheit rund um Iran und die Straße von Hormus wirkt dem tendenziell entgegen – beide Effekte laufen gegenläufig."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinserwartungen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "finanzen.net: Goldpreis und Ölpreis – Goldpreis: Monatsverlust von mehr als sechs Prozent droht", url: "https://www.finanzen.net/nachricht/rohstoffe/goldpreis-und-oelpreis-goldpreis-monatsverlust-von-mehr-als-sechs-prozent-droht-15954798" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 98 $", change: "schwankend, unter dem Montagshoch von über 106 $", dir: "down", asof: "Do 01.10. Vormittag", story: 8, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 98 Dollar je Fass (159 Liter) sind rund 61 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Verlauf der Woche", text: "Brent lag am Montag, 28.09., laut Berichten zeitweise über 106 Dollar, am Mittwoch, 30.09., je nach Quelle zwischen rund 97 und 104 Dollar – die Angaben schwanken stark je nach Tageszeitpunkt." },
        { label: "WTI", text: "WTI notierte am Donnerstag bei rund 90,06 Dollar (−0,40 % zum Vortag)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Außenminister Araghchi reiste am 30.09. nach Doha und erhielt dort ein US-Gegenangebot zur Wiedereröffnung der Straße von Hormus; eine Einigung steht weiterhin aus (Meldung 8).",
          "Präsident Trump dementierte am 30.09. laut Berichten eine mögliche Lockerung der Iran-Sanktionen; OPEC+ hält die Förderquoten für November Berichten zufolge voraussichtlich unverändert."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Zentralbanken", text: "Hohe Ölpreise gehören zu den von Fed und EZB genannten Gründen für ihre jüngsten Zinserhöhungen.", ref: "s:2" }
      ],
      source: { title: "Bloomberg: Latest Oil Market News and Analysis for Sept. 30", url: "https://www.bloomberg.com/news/articles/2026-09-29/latest-oil-market-news-and-analysis-for-sept-30" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 83.500 $", change: "kaum verändert", dir: "flat", asof: "Do 01.10. Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 83.500 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Vortag", text: "Am Mittwoch, 30.09., notierte Bitcoin laut Berichten zwischen rund 83.600 und 84.550 Dollar – die Angaben schwanken je nach Tageszeitpunkt." },
        { label: "Septemberbilanz", text: "Laut Yahoo Finance blieben die Gewinne aus einem insgesamt schwachen September für Kryptowährungen größtenteils erhalten." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Bitcoin bewegte sich trotz der auf rund 5,30 % gestiegenen US-Rendite – die Risikoanlagen eigentlich belasten sollte – nur wenig."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "usethebitcoin.com: Bitcoin Price Analysis October 1, 2026 – BTC Holds $83.5K as 10-Year Treasury Yields Reach 5.3%", url: "https://usethebitcoin.com/bitcoin/bitcoin-price-october-1-2026/" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 MÄRKTE Q3-ENDE */
    {
      id: "maerkte-q3-ende-rueckblick", cats: ["markets"], when: "Schluss Mi 30.09.2026 · Do 01.10.: Vorbörse",
      headline: "DAX beendet schwachen September im Minus, Nasdaq hält sich als einziger großer US-Index im Plus",
      sec30: "Der DAX schloss den Mittwoch bei 25.199,19 Punkten (−0,79 %) und rutschte damit unter die 100-Tage-Linie; der Monat September endete mit einem Minus von rund 4 %. Der Euro Stoxx 50 verlor 0,81 % auf 6.269,02 Punkte. In den USA gaben Dow Jones (50.906,05, −0,86 %) und S&P 500 (7.651,54, −0,3 %) nach, während die Nasdaq Composite um 0,2 % auf 26.861,06 Punkte zulegte. Vorbörsliche Indikationen deuteten für Donnerstag auf einen leicht festeren DAX-Start hin.",
      blocks: [
        { h: "Wie haben die Indizes das dritte Quartal beendet?", items: [
          { tag: "fakt", text: "Der DAX schloss am Mittwoch, 30.09.2026, bei 25.199,19 Punkten (−0,79 %) und rutschte dabei unter die zuvor stützende 100-Tage-Linie; für den Monat September ergab sich ein Minus von rund 4 %. Der Euro Stoxx 50 verlor 0,81 % auf 6.269,02 Punkte (laut einer anderen Quelle −0,73 % auf 6.274,19 Punkte), mit einer Monatsbilanz von rund −2,4 %.",
            ask: [{ label: "Was bedeutet ein Minus beim DAX?", ref: "n:dax" }] },
          { tag: "fakt", text: "In den USA schloss der Dow Jones bei 50.906,05 Punkten (−0,86 %, −443,87 Punkte), der S&P 500 bei 7.651,54 Punkten (−0,3 %); einzig die Nasdaq Composite legte um 0,2 % auf 26.861,06 Punkte zu. Für den Monat September nennen Berichte beim S&P 500 ein Minus von rund 0,4 bis 0,7 %, beim Dow ein Minus von rund 4,3 bis 4,9 % und bei der Nasdaq ein Plus von rund 1,7 bis 1,9 %.",
            ask: [{ label: "Warum reagiert die Nasdaq anders auf Zinsen?", ref: "chain:nasdaq-why" }] }
        ]},
        { h: "Was wird als Grund genannt?", items: [
          { tag: "fakt", text: "Laut dpa-Marktbericht (onvista) belastete die am selben Tag veröffentlichte deutsche Inflationsrate von 3,3 % für September – der höchste Stand seit Ende 2023 – den DAX trotz insgesamt robuster US-Konjunkturdaten.",
            ask: [{ label: "Wie hoch ist die Inflation in Deutschland?", ref: "s:4" }] },
          { tag: "einordnung", text: "Laut CNBC/TheStreet blieb die Nasdaq trotz der auf ein 24-Jahres-Hoch gestiegenen US-Rendite im Plus, weil Anleger weiterhin starkes Wirtschaftswachstum und anhaltende KI-Investitionen einpreisten; bei Dow und S&P 500 überwog dagegen offenbar die Belastung durch die Zinsentwicklung.",
            ask: [{ label: "Was steckt hinter dem Renditeanstieg?", ref: "s:2" }] }
        ]},
        { h: "Wie ist der Ausblick für Donnerstag?", items: [
          { tag: "unbestaetigt", text: "Ein Bericht nannte für die Vorbörse am Donnerstag ein DAX-Future-Plus von rund 55 Punkten. Ein bestätigter Donnerstags-Schlusskurs lag für keinen der großen Indizes zum Recherchezeitpunkt vor." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Die gegenläufige Entwicklung von Nasdaq einerseits und Dow/S&P 500 andererseits am selben Handelstag zeigt, wie unterschiedlich einzelne Indizes auf dieselbe Zinsnachricht reagieren können. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite (Meldung 2) und die hohe deutsche Inflation (Meldung 4) gelten laut Berichten als die wichtigsten Belastungsfaktoren für DAX, Dow und S&P 500.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "e:yield-stocks", "chain:nasdaq-why"],
      sources: [
        { title: "onvista: ROUNDUP/Aktien Frankfurt Schluss – Dax beendet schwachen September im Minus", url: "https://www.onvista.de/news/2026/09-30-roundup-aktien-frankfurt-schluss-dax-beendet-schwachen-september-im-minus-0-10-26559233" },
        { title: "onvista: Leitindex im Minus – Inflationssorgen belasten trotz guter US-Daten", url: "https://www.onvista.de/news/2026/09-30-dax-rutscht-ab-inflationssorgen-belasten-trotz-us-daten-41121301-19-26559213" },
        { title: "Yahoo Finance: Stock market today – Dow, S&P 500 post monthly losses in September as Treasury yields climb", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-september-30-dow-sp-500-nasdaq-080339262.html" },
        { title: "TheStreet: Stock Market Today (Sept. 30, 2026) – Nasdaq rises to end Q3 as PCE inflation lands below expectations", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-30-2026" }
      ]
    },

    /* 2 FED/WARSH/RENDITEN/EZB */
    {
      id: "fed-warsh-renditen-ezb-lagarde", cats: ["markets", "economy"], when: "Fed-Entscheid 16.09. · Barr-Rede 23.09. · PCE-Daten 30.09. · Lagarde-Anhörung 28.09. · nächster Fed-Termin 28.10.",
      headline: "US-Rendite steigt auf höchsten Stand seit rund 24 Jahren, schwächere Preisdaten lassen Zinserwartung für Oktober schwanken",
      sec30: "Die Fed unter dem seit Mai amtierenden Vorsitzenden Kevin Warsh hatte den Leitzins am 16.09.2026 erstmals seit 2023 auf 3,75–4,00 % angehoben; Gouverneur Barr signalisierte am 23.09. weitere Schritte, woraufhin die von Märkten eingepreiste Wahrscheinlichkeit einer weiteren Erhöhung am 28.10. laut CME FedWatch zeitweise auf rund 70 bis 77 % stieg. Die am 30.09. veröffentlichte Kern-PCE-Inflation für August fiel mit 3,0 % schwächer aus als die erwarteten 3,3 % – dennoch stieg die 10-Jahres-Rendite am selben Tag laut CNBC auf rund 5,30 %, den höchsten Stand seit rund 24 Jahren. Die eingepreiste Wahrscheinlichkeit für den Oktober-Zinsschritt schwankte Berichten zufolge zuletzt zwischen rund 32 und 67 %. EZB-Präsidentin Lagarde sprach sich am 28.09. vor dem Europaparlament weiter für „maßvolle” Zinsschritte aus.",
      blocks: [
        { h: "Was hat die Fed zuletzt entschieden, und wer führt sie?", items: [
          { tag: "fakt", text: "Die Fed erhöhte den Leitzins am 16.09.2026 einstimmig (12:0) um 25 Basispunkte auf 3,75–4,00 % – die erste Erhöhung seit 2023. Vorsitzender ist seit seiner Vereidigung am 22.05.2026 Kevin Warsh, den der Senat am 13.05. mit 54 zu 45 Stimmen bestätigt hatte. Bei der Pressekonferenz sagte Warsh laut Berichten, die Inflation sei „zu hoch – und das seit zu langer Zeit” gewesen.",
            ask: [{ label: "Was hatte die Fed am 16.09. beschlossen?", ref: "e:fed-hike" }] },
          { tag: "fakt", text: "Fed-Gouverneur Michael Barr sagte am 23.09.2026, weitere geldpolitische Anpassungen seien wahrscheinlich nötig, um die Inflation rechtzeitig auf das Ziel zu senken. Märkte preisten laut CME FedWatch daraufhin zeitweise eine Wahrscheinlichkeit von rund 70 bis 77 % für eine weitere Zinserhöhung am 28.10.2026 ein.",
            ask: [{ label: "Was ist ein Dot Plot?", ref: "t:dot-plot" }] }
        ]},
        { h: "Was zeigen die neuesten Preis- und Arbeitsmarktdaten?", items: [
          { tag: "fakt", text: "Die am 30.09.2026 veröffentlichte Kern-PCE-Inflation – das von der Fed bevorzugte Inflationsmaß – lag im August laut CNBC bei 3,0 % im Jahresvergleich und damit schwächer als die erwarteten 3,3 %.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "unbestaetigt", text: "Einzelne andere Quellen nennen abweichende PCE-Werte (u. a. eine Kernrate von 3,9 %); welcher Wert korrekt ist, ließ sich in der Recherche nicht abschließend auflösen. Der von CNBC unter Berufung auf die amtlichen Daten der BEA genannte Wert von 3,0 % erscheint am verlässlichsten." },
          { tag: "fakt", text: "Der ADP-Beschäftigungsbericht für September (veröffentlicht 30.09.) zeigte mit 90.000 neuen Stellen in der Privatwirtschaft ein stärkeres Wachstum als die erwarteten rund 70.000 bis 72.000; ADP-Chefökonomin Nela Richardson sprach von einem „starken Bericht” nach einer dreimonatigen Verlangsamung.",
            ask: [{ label: "Was wird vom offiziellen US-Arbeitsmarktbericht erwartet?", ref: "s:5" }] }
        ]},
        { h: "Wie haben sich die Renditen entwickelt?", items: [
          { tag: "fakt", text: "Die Rendite zehnjähriger US-Staatsanleihen stieg am 30.09.2026 laut CNBC auf rund 5,298 % – den höchsten Stand seit rund 24 Jahren (Mai 2002); die 30-jährige Rendite kletterte auf 5,642 %.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Die deutsche Bund-Rendite lag am 30.09. bei rund 3,58 % und damit laut einem Bericht nahe einem mehrjährigen Hoch; einzelne Quellen nennen für den Monatsverlauf leicht abweichende Werte zwischen 3,48 % und 3,61 %.",
            ask: [{ label: "Was bedeutet das für den Bundeshaushalt?", ref: "e:debt-brake" }] }
        ]},
        { h: "Was hat EZB-Präsidentin Lagarde gesagt?", items: [
          { tag: "position", text: "Christine Lagarde sagte am 28.09.2026 vor dem Wirtschafts- und Währungsausschuss des Europaparlaments, „maßvolle” EZB-Zinsschritte blieben weiterhin angemessen; aktuell sehe sie keine Anzeichen dafür, dass hohe Energiepreise sich bereits in höheren Löhnen niederschlügen. Die EZB rechnet demnach für den Euroraum 2026 mit 0,9 % Wachstum, für 2027 mit 1,4 %.",
            ask: [{ label: "Was hatte die EZB zuvor beschlossen?", ref: "e:ecb-hike" }] },
          { tag: "position", text: "Lagarde warnte zudem, eine scharfe Neubewertung der Aussichten von KI-Unternehmen könne Marktkorrekturen auslösen – eine Einschätzung der EZB-Präsidentin, keine konkrete Prognose." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gegenläufigen Signale – hawkishe Fed-Kommentare einerseits, schwächere Preisdaten andererseits – erklären laut Berichten, warum die eingepreiste Wahrscheinlichkeit für den Oktober-Zinsschritt zuletzt stark schwankte. Das zeigt: Zinserwartungen können sich innerhalb weniger Tage deutlich verschieben.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]}
      ],
      reaction: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite bleibt laut Berichten ein Belastungsfaktor für Aktien (Meldung 1) und hält variable Private-Credit-Zinsen erhöht (Meldung 12).",
      terms: ["leitzins", "rendite", "basispunkt", "dot-plot"],
      followups: ["e:yield-meaning", "e:fed-hike", "e:ecb-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "CNBC: Fed rate decision September 2026 – Rates rise to 3.75%-4%", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
        { title: "Federal Reserve: Speech by Governor Barr, 23.09.2026", url: "https://www.federalreserve.gov/newsevents/speech/barr20260923a.htm" },
        { title: "CNBC: 10-year Treasury yield is higher as traders look past inflation data, await jobs report", url: "https://www.cnbc.com/2026/09/30/treasury-yields-bonds-selloff.html" },
        { title: "CNBC: Fed’s preferred gauge showed core inflation at 3.0% in August, much lighter than expected", url: "https://www.cnbc.com/2026/09/30/feds-preferred-gauge-showed-core-inflation-at-3point0percent-in-august-much-lighter-than-expected.html" },
        { title: "ECB: Hearing of the Committee on Economic and Monetary Affairs of the European Parliament", url: "https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260928~a875675544.en.html" }
      ]
    },

    /* 3 GOLD/BITCOIN */
    {
      id: "gold-bitcoin-renditehoch", cats: ["markets"], when: "Gold Schluss Mi 30.09. · Bitcoin Stand Do 01.10. Vormittag",
      headline: "Gold fällt auf tiefsten Stand seit Wochen, Bitcoin hält sich knapp über 83.000 Dollar",
      sec30: "Gold fiel am Mittwoch um 0,74 % auf rund 4.150,99 Dollar je Feinunze und verlor im September insgesamt rund 6,6 % – belastet von der auf ein 24-Jahres-Hoch gestiegenen US-Rendite. Bitcoin notierte Donnerstagvormittag bei rund 83.500 Dollar, kaum verändert gegenüber dem Vortag.",
      blocks: [
        { h: "Warum fällt Gold?", items: [
          { tag: "unbestaetigt", text: "Gold fiel am Mittwoch, 30.09.2026, um 0,74 % auf rund 4.150,99 Dollar je Feinunze und verlor im September laut Berichten insgesamt rund 6,6 % in Dollar gerechnet.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite macht zinslose Anlagen wie Gold tendenziell weniger attraktiv (Meldung 2); die anhaltende geopolitische Unsicherheit rund um Iran und die Straße von Hormus (Meldung 8) wirkt dem tendenziell entgegen." },
          { tag: "fakt", text: "Das bisherige Rekordhoch von rund 5.417,60 Dollar hatte Gold bereits Ende Januar 2026 erreicht; der aktuelle Preis liegt deutlich darunter." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Mittwoch zwischen rund 83.600 und 84.550 Dollar und am Donnerstagvormittag bei rund 83.500 Dollar – kaum verändert, obwohl die gestiegene US-Rendite Risikoanlagen eigentlich belasten sollte.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "fakt", text: "Laut Yahoo Finance blieben die Gewinne aus einem insgesamt schwachen September für Kryptowährungen größtenteils erhalten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold und Bitcoin reagieren derzeit unterschiedlich auf dieselbe Zinslage: Gold gab zuletzt klarer nach, Bitcoin hielt sich dagegen stabil. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite (Meldung 2) wirkt grundsätzlich bremsend auf zinslose Anlagen wie Gold.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:yield-meaning"],
      sources: [
        { title: "finanzen.net: Goldpreis und Ölpreis – Goldpreis: Monatsverlust von mehr als sechs Prozent droht", url: "https://www.finanzen.net/nachricht/rohstoffe/goldpreis-und-oelpreis-goldpreis-monatsverlust-von-mehr-als-sechs-prozent-droht-15954798" },
        { title: "wallstreet-online: Rohstoffpreise Überblick – Goldpreis, Silberpreis, Öl (Brent/WTI), 30.09.2026", url: "https://www.wallstreet-online.de/nachricht/21456696-rohstoffpreise-ueberblick-goldpreis-silberpreis-oel-brent-wti-rohstoffe-30-09-2026" },
        { title: "usethebitcoin.com: Bitcoin Price Analysis October 1, 2026 – BTC Holds $83.5K as 10-Year Treasury Yields Reach 5.3%", url: "https://usethebitcoin.com/bitcoin/bitcoin-price-october-1-2026/" }
      ]
    },

    /* 4 INFLATION DE/EUROZONE */
    {
      id: "inflation-deutschland-eurozone-september", cats: ["economy"], when: "Deutsche Flash-Inflation veröffentlicht 30.09. · Eurozone-Flash erwartet Fr 02.10.",
      headline: "Deutsche Inflation steigt im September auf 3,3 Prozent, weitere große Euro-Länder melden ebenfalls höhere Teuerung",
      sec30: "Die deutschen Verbraucherpreise stiegen im September laut vorläufigen Destatis-Zahlen um 3,3 % im Jahresvergleich – der höchste Wert seit Ende 2023, nach 2,9 % im August; Energie verteuerte sich um 14,9 %, die Kernrate lag bei 2,4 %. Auch andere große Euro-Länder meldeten höhere Werte: Frankreich 3,4 %, Italien 4,1 %, Spanien 5,0 %. Die Eurozone-weite Flash-Inflation für September wird für Freitag, 02.10.2026, erwartet; der Marktkonsens liegt bei 3,6 %.",
      blocks: [
        { h: "Wie hoch ist die deutsche Inflation?", items: [
          { tag: "fakt", text: "Die deutschen Verbraucherpreise stiegen im September 2026 laut vorläufigen Destatis-Zahlen um 3,3 % im Jahresvergleich (Vormonatsvergleich +0,6 %) – der höchste Stand seit Ende 2023. Die Kernrate ohne Energie und Nahrungsmittel lag bei 2,4 %, Energie verteuerte sich um 14,9 % gegenüber dem Vorjahr. Endgültige Zahlen folgen am 13.10.2026.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] }
        ]},
        { h: "Wie sieht es in anderen Euro-Ländern aus?", items: [
          { tag: "fakt", text: "Mehrere große Euro-Länder meldeten Ende September ebenfalls höhere Inflationsraten: Frankreich 3,4 % (höchster Stand seit über zwei Jahren), Italien (HVPI) 4,1 % und Spanien 5,0 % – jeweils die höchsten Werte seit 2023." },
          { tag: "einordnung", text: "Berichte nennen als gemeinsamen Treiber vor allem den Energiepreisschock im Zuge des anhaltenden Nahost-/Iran-Konflikts (Meldung 8)." }
        ]},
        { h: "Was wird für die Eurozone insgesamt erwartet?", items: [
          { tag: "fakt", text: "Die Flash-Inflation für die gesamte Eurozone im September wird laut Wirtschaftskalendern für Freitag, 02.10.2026, erwartet. Der Marktkonsens liegt bei 3,6 % (von 3,2 % im August), manche Ökonomen rechnen laut Berichten sogar mit einem Dreijahreshoch von 3,7 %.",
            ask: [{ label: "Was ist Inflation und wie wird sie gemessen?", ref: "e:inflation-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die über den Notenbankzielen liegende Inflation in mehreren großen Euro-Ländern passt zur weiterhin vorsichtigen Tonlage von EZB-Präsidentin Lagarde, die „maßvolle” statt ausbleibender Zinsschritte in Aussicht stellte (Meldung 2).",
            ask: [{ label: "Wie reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]}
      ],
      reaction: "Die hohe deutsche Inflation gehört laut Berichten zu den Belastungsfaktoren für den DAX am Mittwoch (Meldung 1) und bleibt Hintergrund für die Zinsdebatte bei Fed und EZB (Meldung 2).",
      terms: ["inflation", "kerninflation"],
      followups: ["e:inflation-what", "e:oil-inflation", "e:central-banks-why", "e:companies-costs"],
      sources: [
        { title: "Statistisches Bundesamt: Inflationsrate im September 2026 voraussichtlich +3,3 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_348_611.html" },
        { title: "FXStreet: The Euro slips as Europe’s biggest economies report hotter inflation", url: "https://www.fxstreet.com/news/the-euro-slips-as-europes-biggest-economies-report-hotter-inflation-202609302331" },
        { title: "Bloomberg: Inflation Surges in Germany, France, Italy as Energy Prices Drive Eurozone Gains", url: "https://www.bloomberg.com/news/articles/2026-09-30/inflation-grips-eu-s-top-economies-as-oil-prices-pummel-region" }
      ]
    },

    /* 5 US-ARBEITSMARKT/OECD/WELTBANK */
    {
      id: "us-arbeitsmarkt-adp-oecd-weltbank", cats: ["economy"], when: "ADP-Bericht 30.09. · US-Arbeitsmarktbericht erwartet Fr 02.10. · OECD 23.09. · Weltbank Juni",
      headline: "ADP meldet stärkeres US-Beschäftigungswachstum vor dem offiziellen Arbeitsmarktbericht, OECD und Weltbank uneins über Tempo der Weltwirtschaft",
      sec30: "Der ADP-Beschäftigungsbericht zeigte für September ein Plus von 90.000 Stellen in der US-Privatwirtschaft – mehr als die erwarteten rund 70.000 bis 72.000; der offizielle US-Arbeitsmarktbericht folgt am Freitag, 02.10.2026. Ein Regierungsshutdown dürfte die Veröffentlichung nicht verzögern, da eine Übergangsfinanzierung bis zum 11.12.2026 bereits Anfang September beschlossen wurde. Die OECD hatte am 23.09. das globale Wachstum für 2026 auf 2,9 % taxiert, während die Weltbank in ihrem Juni-Bericht nur 2,5 % nannte – nach eigenen Angaben der schwächste Wert außerhalb einer Rezession seit rund 20 Jahren.",
      blocks: [
        { h: "Was zeigt der ADP-Bericht?", items: [
          { tag: "fakt", text: "Der ADP-Beschäftigungsbericht für September (veröffentlicht 30.09.2026) zeigte ein Plus von 90.000 Stellen in der US-Privatwirtschaft gegenüber erwarteten rund 70.000 bis 72.000; die Grundgehälter stiegen um 3,2 % im Jahresvergleich, die Bruttolöhne um 4,7 %. ADP-Chefökonomin Nela Richardson sprach von einem „starken Bericht” nach einer dreimonatigen Verlangsamung.",
            ask: [{ label: "Was bedeuten diese Daten für die Fed-Zinspolitik?", ref: "s:2" }] }
        ]},
        { h: "Ist am 1. Oktober ein Regierungsshutdown eingetreten?", items: [
          { tag: "fakt", text: "Nein. Der Senat hatte eine Übergangsfinanzierung bereits am 08.08.2026 mit 90 zu 6 Stimmen verabschiedet, das Repräsentantenhaus am 01.09. mit 370 zu 48 Stimmen; Präsident Trump unterzeichnete das Gesetz am 02.09.2026. Die Bundesregierung ist damit bis zum 11.12.2026 auf bestehendem Niveau finanziert, ohne Gehaltsausfälle für Bundesbedienstete." }
        ]},
        { h: "Wie schätzen OECD und Weltbank die Weltwirtschaft ein?", items: [
          { tag: "fakt", text: "Die OECD bezifferte in ihrem Interim Economic Outlook vom 23.09.2026 das globale Wirtschaftswachstum für 2026 auf 2,9 % und für 2027 auf 3,0 %; die G20-Inflation soll von 4,1 % (2026) auf 3,6 % (2027) sinken.",
            ask: [{ label: "Was treibt die aktuell hohe Inflation an?", ref: "e:companies-costs" }] },
          { tag: "position", text: "Die Weltbank nannte in ihrem Global Economic Prospects-Bericht vom Juni 2026 dagegen nur 2,5 % globales Wachstum für 2026 (herabgesetzt von 2,9 % im Vorjahresbericht) – nach eigenen Angaben den schwächsten Wert außerhalb einer Rezession seit rund 20 Jahren, bedingt unter anderem durch die Folgen des Nahost-Konflikts. Ein neuerer Weltbank-Bericht lag zum Recherchezeitpunkt nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die unterschiedlichen Wachstumsschätzungen von OECD und Weltbank zeigen die Bandbreite, die verschiedene Institutionen derzeit für plausibel halten. Der offizielle US-Arbeitsmarktbericht am Freitag könnte die Diskussion über weitere Fed-Zinsschritte neu beeinflussen: ein robuster Wert könnte Fed-Gouverneur Barrs Argumentation für weitere Zinsschritte stützen, ein schwacher Wert eher dagegen sprechen (Meldung 2). Dies ist eine mögliche Wechselwirkung, keine feststehende Prognose." }
        ]}
      ],
      reaction: "Ein schwächerer oder stärkerer Arbeitsmarktbericht am 02.10. könnte die Diskussion über weitere Zinsschritte der Fed neu beeinflussen (Meldung 2).",
      terms: [],
      followups: ["e:companies-costs", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "ADP: National Employment Report – Private-Sector Employment Increased by 90,000 Jobs in September", url: "https://mediacenter.adp.com/2026-09-30-ADP-National-Employment-Report-Private-Sector-Employment-Increased-by-90,000-Jobs-in-September" },
        { title: "Fox Business: Private sector added 90,000 jobs in September, above expectations, ADP says", url: "https://www.foxbusiness.com/economy/private-sector-added-90000-jobs-september-above-expectations-adp-says" },
        { title: "Breaking Defense: House passes funding stopgap, averting government shutdown in October", url: "https://breakingdefense.com/2026/09/house-passes-funding-stopgap-averting-government-shutdown-in-october/" },
        { title: "OECD: Economic Outlook, Interim Report September 2026", url: "https://www.oecd.org/en/publications/2026/09/oecd-economic-outlook-interim-report-september-2026_8312492f.html" },
        { title: "World Bank: Global Economic Prospects, June 2026", url: "https://thedocs.worldbank.org/en/doc/2b672b3b0415d6b66c45b66579db4ef5-0050012026/original/GEP-Jun-2026.pdf" }
      ]
    },

    /* 6 BERLIN KOALITION / ANTISEMITISMUS */
    {
      id: "berlin-sondierung-antisemitismus-debatte", cats: ["germany"], when: "Wahl 20.09. · Linke-Sonderparteitag · Einladung von SPD und Grünen angenommen",
      headline: "Linke, SPD und Grüne bereiten Sondierungsgespräche in Berlin vor, Umgang mit Antisemitismus-Vorwürfen ist zentraler Streitpunkt",
      sec30: "Bei der Berliner Abgeordnetenhauswahl am 20.09.2026 wurde die Linke mit 25,7 % stärkste Kraft (47 Sitze), vor CDU (18,8 %, 34 Sitze), Grünen (14,3 %, 26 Sitze) und SPD (12,1 %, 22 Sitze). Nach einem Sonderparteitag der Linken nahmen die Landesvorstände von Grünen und SPD die Einladung zu Sondierungsgesprächen an. Zentraler Streitpunkt ist der Umgang der Linken mit Antisemitismus-Vorwürfen, den Grüne und SPD zur Vorbedingung machten; Linken-Landesvorsitzende Kerstin Wolter räumte dazu Fehler in der eigenen Partei ein. Ein genauer Zeitplan für den Beginn der Gespräche lag zum Recherchezeitpunkt nicht vor.",
      blocks: [
        { h: "Was wurde beschlossen bzw. vorgeschlagen?", items: [
          { tag: "fakt", text: "Bei der Berliner Abgeordnetenhauswahl am 20.09.2026 wurde die Linke mit 25,7 % stärkste Kraft (47 Sitze), vor der CDU (18,8 %, 34 Sitze), den Grünen (14,3 %, 26 Sitze) und der SPD (12,1 %, 22 Sitze). Auf einem Sonderparteitag stimmte die Linke mit großer Mehrheit dafür, Grüne und SPD zu Sondierungsgesprächen einzuladen; beide Landesvorstände nahmen die Einladung an, die SPD zuletzt und einstimmig.",
            ask: [{ label: "Warum sind Landtags- und Abgeordnetenhauswahlen auch bundespolitisch wichtig?", ref: "e:landtagswahl-why" }] }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Geplant war zunächst, dass die Linke getrennt mit Grünen und SPD spricht, bevor dreiseitige Gespräche folgen. Ein bestätigter Starttermin für die Sondierungen oder erste Ergebnisse lagen zum Recherchezeitpunkt nicht vor." }
        ]},
        { h: "Was ist der zentrale Streitpunkt, und wer unterstützt bzw. kritisiert was?", items: [
          { tag: "position", text: "Grüne und SPD machten eine klare Positionierung der Linken gegen Antisemitismus zur Vorbedingung für Sondierungsgespräche. Linken-Landesvorsitzende Kerstin Wolter übte dazu Selbstkritik: „Fehler wurden auch in unserer Partei gemacht, Grenzen wurden überschritten, Sätze gesagt, die Juden Angst machen.”",
            ask: [{ label: "Was bedeutet eine Koalition?", ref: "t:koalition" }] },
          { tag: "position", text: "Spitzenkandidatin Elif Eralp bezeichnete die Vorwürfe teils als in einer „destruktiven Dimension” angekommen, betonte aber zugleich, „vielfältiges jüdisches Leben” stärken und Antisemitismus bekämpfen zu wollen (Position der Linken-Spitzenkandidatin)." }
        ]},
        { h: "Wie ist die Stimmung in aktuellen Umfragen?", items: [
          { tag: "unbestaetigt", text: "Eine INSA-Umfrage (Erhebung 25.–28.09., veröffentlicht 29.09.) nennt: AfD 29,5 %, Union 19 %, Grüne 14,5 %, SPD 14,5 %, Linke 10 %, FDP 4 %, BSW 3,5 %, Sonstige 5 %. Eine Forsa-Umfrage vom 29.09. nennt dagegen: AfD 26 %, Union 19 %, Grüne 16 %, SPD 14 %, Linke 12 %, FDP 4 % – die Abweichungen bei AfD und Linke gelten als methodisch bedingt." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Der offene Umgang mit den Antisemitismus-Vorwürfen trifft die Sondierungsgespräche unmittelbar vor ihrem erwarteten Beginn. Ob und wie stark dies den weiteren Verlauf beeinflusst, ist offen." }
        ]}
      ],
      reaction: "Die Debatte fällt zusammen mit der anhaltenden bundespolitischen Diskussion über Rente und Haushalt (Meldung 7).",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "taz: Sondierungen in Berlin – SPD will mit Linken über Regierungsbildung sprechen", url: "https://taz.de/Sondierungen-in-Berlin/!6216437/" },
        { title: "Tagesspiegel: Linke, Grüne und SPD sind bereit – Sondierungen in Berlin starten kommende Woche", url: "https://www.tagesspiegel.de/berlin/linke-grune-und-spd-sind-bereit-sondierungen-in-berlin-starten-kommende-woche-16099533.html" },
        { title: "ZDFheute: Berlin – Linke lädt Grüne und SPD zu Sondierungen ein", url: "https://www.zdfheute.de/politik/deutschland/linke-berlin-sondierung-gruene-spd-100.html" },
        { title: "Berliner Zeitung: Insa-Umfrage – AfD bei 29 Prozent, Union fällt auf 19 Prozent", url: "https://www.berliner-zeitung.de/article/insa-umfrage-union-rutscht-auf-19-prozent-10434825" },
        { title: "dawum.de: Bundestagswahl – Wahlumfrage vom 29.09.2026 von Forsa", url: "https://dawum.de/Bundestag/Forsa/2026-09-29/" }
      ]
    },

    /* 7 RENTE/HAUSHALT/PFLEGEREFORM */
    {
      id: "rentenreform-haushalt-pflegereform", cats: ["germany"], when: "Koalitionsgipfel Rente ohne Ergebnis · Pflegereform-Kabinettsbeschluss 30.09. · Haushaltsausschuss laufend",
      headline: "Koalitionsgipfel zur Rente endet ohne Ergebnis, Kabinett beschließt Pflegereform und schärferes Strafrecht für Angriffe auf Einsatzkräfte",
      sec30: "Ein Krisengipfel von Union und SPD im Kanzleramt zur Rentenreform endete nach fast vier Stunden ohne Ergebnis; diskutiert wird weiterhin eine Anhebung der für die abschlagsfreie Rente nötigen Beitragsjahre von 45 auf 46 bis 47. Der DGB hält an seinem im Juni vorgelegten Gegenkonzept einer „Schutzrente” fest. Am 30.09. beschloss das Bundeskabinett zudem das Pflegeneuordnungsgesetz sowie eine Verschärfung des Strafrechts für Angriffe auf Polizei, Feuerwehr und Rettungskräfte. Der Haushaltsausschuss berät parallel weiter über den Etat 2027.",
      blocks: [
        { h: "Was wurde zur Rente vorgeschlagen bzw. diskutiert?", items: [
          { tag: "fakt", text: "Die Rentenkommission hatte am 23.06.2026 ihren Abschlussbericht mit 33 Empfehlungen übergeben, darunter eine neue gesetzliche Kapitalrente, in die Arbeitgeber und Arbeitnehmer ab 2028 schrittweise je 2 % des Bruttoeinkommens einzahlen sollen, sowie eine schrittweise Kopplung des Renteneintrittsalters an die Lebenserwartung. Kanzler Merz und Arbeitsministerin Bas hatten eine vollständige und zügige Umsetzung angekündigt.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Ein Krisengipfel von Union und SPD im Kanzleramt endete nach fast vier Stunden ohne Ergebnis, lediglich mit einer Bestandsaufnahme. Diskutiert wird eine Anhebung der für die abschlagsfreie Rente nötigen Beitragsjahre von derzeit 45 auf 46 oder 47 sowie eine Verkürzung der Anrechnung von Erziehungszeiten." }
        ]},
        { h: "Wer unterstützt die Pläne, und womit?", items: [
          { tag: "position", text: "CSU-Landesgruppenchef Alexander Hoffmann erklärte, ohne eine Änderung des „Regel-Ausnahme-Verhältnisses” bei der abschlagsfreien Rente nach 45 Beitragsjahren sei keine Rentenreform möglich (Position der CSU)." }
        ]},
        { h: "Wer kritisiert die Pläne, und womit?", items: [
          { tag: "position", text: "SPD-Fraktionschef Matthias Miersch bezeichnete den Anspruch auf abschlagsfreie Rente nach 45 Versicherungsjahren als „elementares Gerechtigkeitsthema” (Position der SPD-Fraktion).",
            ask: [{ label: "Was ist das Umlageverfahren?", ref: "t:umlage" }] },
          { tag: "position", text: "Der DGB hatte bereits im Juni 2026 ein eigenes Gegenkonzept vorgelegt: eine „Schutzrente” für langjährig Versicherte, die aus gesundheitlichen Gründen kurz vor dem Renteneintritt nicht mehr arbeiten können, sowie die Forderung, das Renteneintrittsalter nicht weiter anzuheben (Position des DGB)." }
        ]},
        { h: "Wie ist der Stand beim Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Der Haushaltsentwurf 2027 (Ausgaben 555,44 Mrd. Euro, +30,9 Mrd. Euro gegenüber 2026) wurde am 08.09.2026 von Finanzminister Klingbeil vorgestellt; der Haushaltsausschuss beriet am 23./24.09. weiter über die Einzelpläne. Die Bereinigungssitzung ist für den 12.11.2026 angesetzt, die Schlussabstimmung für den 27.11.2026.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Welche weiteren Kabinettsbeschlüsse gab es?", items: [
          { tag: "fakt", text: "Das Bundeskabinett beschloss am 30.09.2026 das Pflegeneuordnungsgesetz (PNOG): vorgesehen sind unter anderem eine Anhebung der Beitragsbemessungsgrenze der sozialen Pflegeversicherung um 300 Euro im Monat, ein Beitragszuschlag von 0,52 % für gemeinsam versicherte Ehe- und Lebenspartner ab 2028, ein höherer Zuschlag für Kinderlose (0,9 % ab 2027) sowie jährliche Anpassungen der Leistungsbeträge ab 2029 (zuständige Ministerin: Nina Warken, CDU). Zudem billigte das Kabinett eine Verschärfung des Strafrechts für Angriffe auf Polizei, Feuerwehr, Rettungskräfte und Beschäftigte der Daseinsvorsorge." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Koalition verhandelt derzeit an mehreren innenpolitischen Fronten gleichzeitig – Rente, Haushalt und Pflege. Während bei Pflegereform und Strafrecht bereits Kabinettsbeschlüsse vorliegen, bleibt die Rentenreform nach dem ergebnislosen Gipfel ohne festen Zeitplan." }
        ]}
      ],
      reaction: "Die Debatte um Rente und Haushalt läuft parallel zu den Berliner Koalitionssondierungen (Meldung 6) und zur allgemeinen Diskussion über die Zinslast des Staates (Meldung 2).",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:debt-brake", "e:rente-basics"],
      sources: [
        { title: "t-online: Rentenreform – Union und SPD erwägen wohl Änderung bei „Rente mit 63”", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101450092/rentenreform-union-und-spd-erwaegen-wohl-aenderung-bei-rente-mit-63-.html" },
        { title: "Tagesspiegel/AFP: Streit um die abschlagsfreie Rente – Koalition berät über Anhebung der Beitragsjahre", url: "https://www.tagesspiegel.de/politik/afp-streit-um-die-abschlagsfreie-rente-koalition-berat-laut-medienberichten-bei-rente-mit-63-uber-anhebung-der-beitragsjahre-16091742.html" },
        { title: "Personalwirtschaft: Rentenreform 2026 – Jetzt bringt sich der DGB mit eigenem Vorschlag ein", url: "https://www.personalwirtschaft.de/news/allgemein/rentenreform-2026-jetzt-mischt-sich-dgb-rentenkommission-mit-eigenem-vorschlag-ein-205469/" },
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027 vom Entwurf zum Beschluss", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "euronews: Nach langem Streit – Bundeskabinett beschließt Pflegereform", url: "https://de.euronews.com/2026/09/30/nach-langem-streit-bundeskabinett-beschliesst-pflegereform" }
      ]
    },

    /* 8 IRAN/HORMUZ */
    {
      id: "iran-hormuz-doha-gegenangebot", cats: ["world", "geo"], when: "Ablehnung Trump 26.09. · Vermittlergespräche 29.09. · Araghchi in Doha 30.09.",
      headline: "Iran erhält über Katar ein US-Gegenangebot zur Wiedereröffnung der Straße von Hormus, Ölpreis bleibt deutlich erhöht",
      sec30: "Nachdem Präsident Trump den iranischen Sieben-Tage-Fahrplan am 26.09. abgelehnt hatte, fanden am 29.09. laut CNBC getrennte Vermittlergespräche zwischen den USA und Iran statt, ohne dass ein Durchbruch gelang. Am 30.09. reiste Außenminister Araghchi nach Doha und erhielt dort laut mehreren Berichten ein US-Gegenangebot beziehungsweise Feedback zum iranischen Vorschlag, das er dem Kabinett und Präsident Pezeshkian vorlegte. Ob es sich inhaltlich um ein Gegenangebot oder eine Ablehnung handelt, blieb offiziell unbestätigt. Der Ölpreis bleibt mit rund 98 Dollar je Barrel Brent deutlich über dem Niveau vor dem Konflikt.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Durch die Straße von Hormus läuft nach Angaben von Marktbeobachtern ein großes Volumen des weltweit gehandelten Öls und Flüssigerdgases. Eine Deeskalation oder Eskalation dort wirkt sich direkt auf die globalen Energiepreise aus (Meldung 14).",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Auf iranischer Seite verhandeln Außenminister Abbas Araghchi und Präsident Massoud Pezeshkian, auf US-Seite Präsident Trump. Katar vermittelt weiterhin zwischen beiden Seiten." }
        ]},
        { h: "Wie ist der Stand der Gespräche?", items: [
          { tag: "fakt", text: "Präsident Trump lehnte den von Iran über Katar übermittelten Sieben-Tage-Fahrplan am 26.09.2026 öffentlich ab, sagte aber, er erwarte „in dieser Woche” weitere Gespräche. Am 29.09. fanden laut CNBC getrennte Vermittlergespräche zwischen US- und iranischen Vertretern statt; ein Durchbruch blieb aus." },
          { tag: "unbestaetigt", text: "Am 30.09.2026 reiste Außenminister Araghchi nach Doha und erhielt dort laut übereinstimmenden Berichten ein US-Gegenangebot beziehungsweise Feedback zum iranischen Vertrauensbildungsplan, das er anschließend dem iranischen Kabinett und Präsident Pezeshkian vorlegte. Ob es sich inhaltlich um ein Gegenangebot oder um eine Ablehnung handelt, ließ sich aus offiziellen Stellungnahmen nicht eindeutig entnehmen.",
            ask: [{ label: "Wie hat sich der Ölpreis dadurch entwickelt?", ref: "n:brent" }] }
        ]},
        { h: "Was ist der Hauptstreitpunkt?", items: [
          { tag: "einordnung", text: "Als zentraler Streitpunkt gilt laut Berichten weiterhin die Reihenfolge der Umsetzungsschritte: Iran fordert zunächst eine Lockerung der US-Ölsanktionen und ein Ende der Seeblockade, bevor die Straße von Hormus wieder vollständig geöffnet wird; die USA sehen dies offenbar umgekehrt." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "unbestaetigt", text: "Der Brent-Ölpreis lag am Montag zeitweise über 106 Dollar, am Mittwoch je nach Quelle zwischen rund 97 und 104 Dollar und am Donnerstagvormittag bei rund 98 Dollar je Barrel – nach Angaben von Marktbeobachtern rund 40 % über dem Niveau vor Beginn des Konflikts.",
            ask: [{ label: "Wie wirkt sich das auf Verbraucher aus?", ref: "e:oil-inflation" }] },
          { tag: "einordnung", text: "Die Kette von einem geopolitischen Konflikt über den Ölpreis bis zu Zinsen und Verbraucherpreisen lässt sich Schritt für Schritt nachvollziehen.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der weiterhin erhöhte Ölpreis bleibt laut Berichten einer der Hintergrundfaktoren für die jüngsten Zinserhöhungen von Fed und EZB (Meldung 2) und für die deutsche Energieversorgung vor dem Winter (Meldung 14).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "e:oil-inflation", "chain:oil-to-markets"],
      sources: [
        { title: "CBS News: Trump expects talks with Iran to resume this week after rejecting proposal", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-strait-of-hormuz-7-day-proposal/" },
        { title: "CNBC: U.S., Iran hold separate mediator talks as Mideast oil exports hit war-time high", url: "https://www.cnbc.com/2026/09/29/us-iran-war-trump-hormuz-.html" },
        { title: "Washington Times: Iranian Foreign Minister Abbas Araghchi delivers latest U.S. proposal to Tehran", url: "https://www.washingtontimes.com/news/2026/sep/30/iranian-foreign-minister-abbas-araghchi-delivers-latest-us-proposal/" },
        { title: "CNN: Iran says it is awaiting ‘definitive’ US response despite Trump rejecting latest proposal", url: "https://www.cnn.com/2026/09/26/middleeast/trump-rejects-iran-proposal-hormuz-intl" },
        { title: "Vantage Markets: Brent Tops $106 After Tehran Holds Firm on Hormuz Conditions", url: "https://www.vantagemarkets.com/market-news/oil-price-news-today-brent-tops-106-september-28-2026/" }
      ]
    },

    /* 9 UKRAINE/RUSSLAND/SÜDKOREA */
    {
      id: "ukraine-angriffe-patriot-suedkorea", cats: ["world", "geo"], when: "Angriff Nacht 30.09. · Patriot-Aussage Selenskyj 25.09. · Südkorea-Streit seit 23./24.09.",
      headline: "Russland greift Kiew erneut mit Drohnen und Marschflugkörpern an, Patriot-Lizenz-Frage bleibt ungeklärt",
      sec30: "In der Nacht zum Mittwoch griff Russland Kiew und Umgebung mit Drohnen und Marschflugkörpern an; nach ukrainischen Angaben starben mindestens sieben Menschen, darunter ein Kind, Energieinfrastruktur wurde beschädigt. An der Front bei Pokrowsk meldete die Ukraine zwischen 20 und 29 russische Angriffe pro Tag. Präsident Selenskyjs Aussage vom 25.09., Trump habe eine „endgültige Entscheidung” zu einer Patriot-Lizenz für die Ukraine getroffen, blieb von US-Seite weiterhin unbestätigt. Zugleich hält der Streit mit Südkorea um die Weitergabe nordkoreanischer Kriegsgefangener an.",
      blocks: [
        { h: "Was ist in der Nacht zum Mittwoch passiert?", items: [
          { tag: "fakt", text: "Russland griff Kiew und Umgebung in der Nacht zum 30.09.2026 mit Drohnen und Marschflugkörpern an; nach ukrainischen Angaben starben mindestens sieben Menschen, darunter ein Kind. Die Energieinfrastruktur wurde beschädigt, unter anderem ein Umspannwerk, das Wasserkraftwerk Trypilska und ein Batteriespeicher. Die ukrainische Luftwaffe meldete den Einsatz von Anti-Schiffs-Raketen sowie Iskander-M/KN-23-Systemen und insgesamt 188 Angriffsdrohnen gegen Ziele in Kiew, Charkiw, Saporischschja und weiteren Regionen." }
        ]},
        { h: "Wie ist die Lage an der Front?", items: [
          { tag: "fakt", text: "Bei Pokrowsk meldete die Ukraine zwischen dem 22. und 27.09. zwischen 20 und 29 russische Angriffe pro Tag, mit einem Höhepunkt am 24.09." },
          { tag: "unbestaetigt", text: "Die 40. separate Marineinfanteriebrigade erklärte am 27.09., fünf Quadratkilometer zurückerobert und zwei russische Soldaten gefangen genommen zu haben – eine Angabe der ukrainischen Seite, die unabhängig nicht bestätigt wurde. Bei Kupjansk intensivierten russische Truppen im September laut Berichten ihre Offensivoperationen, konnten dabei aber nur begrenzt Gelände gewinnen." }
        ]},
        { h: "Was ist mit der Patriot-Lizenz für die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj hatte am 25.09.2026 erklärt, Trump habe ihm am Rande der UN-Generalversammlung eine „endgültige Entscheidung” mitgeteilt, wonach die Ukraine Lizenzen zur eigenen Produktion von Patriot-Flugabwehrraketen erhalten solle. Eine offizielle US-Bestätigung dieser Aussage liegt in den ausgewerteten Quellen weiterhin nicht vor; selbst bei Erteilung der Lizenz würde der Aufbau eigener Produktionskapazitäten laut Berichten über ein Jahr dauern.",
            ask: [{ label: "Wie ist die Lage bei Rüstungsaufträgen und Beschaffung?", ref: "s:10" }] }
        ]},
        { h: "Was ist der Streit mit Südkorea?", items: [
          { tag: "fakt", text: "Präsident Selenskyj machte bei seiner Rede vor der UN-Generalversammlung um den 23./24.09. öffentlich, dass zwei im Januar 2025 in der russischen Region Kursk gefangene nordkoreanische Soldaten nach Südkorea gebracht worden waren." },
          { tag: "position", text: "Südkoreas Präsidialamt reagierte mit „großem Bedauern”, warf Kiew „einseitiges und abruptes” Vorgehen vor und verlangte eine offizielle Entschuldigung, da man sich zuvor nach südkoreanischer Darstellung auf Vertraulichkeit verständigt habe (Position Südkoreas)." },
          { tag: "position", text: "Ein Berater des ukrainischen Präsidialbüros erklärte, es habe zwar intensive Abstimmungen gegeben, aber keine Vereinbarung auf Präsidentenebene zur Geheimhaltung (Position der Ukraine, im Widerspruch zur südkoreanischen Darstellung)." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Anhaltende Kampfhandlungen und die ungeklärte Patriot-Frage halten laut Marktbeobachtern die Nachfrage nach westlicher Rüstungsunterstützung hoch (Meldung 10)." }
        ]}
      ],
      reaction: "Die ungeklärte Patriot-Lizenz-Frage bleibt Teil der allgemeinen Debatte über westliche Rüstungslieferungen (Meldung 10).",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Euromaidan Press: Ukraine makes local gains on Pokrovsk front despite sustained Russian attacks", url: "https://euromaidanpress.com/2026/09/28/ukraine-makes-local-gains-on-pokrovsk-front-despite-sustained-russian-attacks/" },
        { title: "Euronews: Trump makes ‘final decision’ to grant Ukraine Patriot licence, Zelenskyy says", url: "https://www.euronews.com/2026/09/25/trump-makes-final-decision-to-grant-ukraine-patriot-license-zelenskyy-says" },
        { title: "CTV News: Seoul demands an apology after Zelenskyy reveals North Korean POWs were sent to South Korea", url: "https://www.ctvnews.ca/world/article/seoul-demands-an-apology-after-zelenskyy-reveals-north-korean-pows-were-sent-to-south-korea/" }
      ]
    },

    /* 10 DEFENCE */
    {
      id: "rheinmetall-bundeswehr-beschaffung-patriot", cats: ["defence"], when: "Rheinmetall-Kursverlauf September · Haushaltsausschuss-Beschaffung 23.09. · EU-Rat 28.09.",
      headline: "Rheinmetall-Aktie fällt im September deutlich, Bundeswehr und EU billigen neue Rüstungsvorhaben",
      sec30: "Die Rheinmetall-Aktie schloss Ende September bei rund 956 bis 960 Euro und damit laut einem Bericht rund 52 % unter ihrem Rekordhoch vom Oktober 2025 – belastet unter anderem von der Streichung des F126-Fregattenprogramms und gesenkten Jahresprognosen. Andere Analysehäuser bleiben dagegen deutlich optimistischer. Der Haushaltsausschuss des Bundestags billigte am 23.09. zwölf weitere Bundeswehr-Beschaffungsvorhaben, der EU-Rat stimmte am 28.09. fünf gemeinsamen Verteidigungsprojekten zu.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die Rheinmetall-Aktie schloss Ende September 2026 laut Berichten bei rund 956 bis 960 Euro – rund 52 % unter ihrem Rekordhoch von rund 1.977 bis 2.007 Euro vom Oktober 2025. Als Auslöser nennen Berichte die Streichung des F126-Fregattenprogramms (der Auftrag ging an TKMS für bis zu acht MEKO-A200-Fregatten) sowie die am 06.08.2026 gesenkte Umsatzprognose (13,7 bis 14,2 Mrd. Euro) und Auftragsbestandsprognose (über 100 statt zuvor rund 135 Mrd. Euro). Die Investmentbank JPMorgan setzte die Aktie am 10.09. auf „Negative Catalyst Watch”.",
            ask: [{ label: "Was bedeutet ein fallender Aktienkurs trotz hoher Auftragsbestände?", ref: "e:defence-stocks" }] },
          { tag: "position", text: "Andere Analysehäuser bleiben deutlich optimistischer: Bernstein bestätigte „Outperform” bei einem Kursziel von rund 1.900 Euro, die Deutsche Bank „Buy” bei 1.800 Euro, Jefferies „Buy” bei 2.250 Euro – die Bandbreite zwischen den Häusern bleibt damit groß." }
        ]},
        { h: "Welche Bundeswehr-Beschaffungen wurden gebilligt?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags billigte am 23.09.2026 zwölf Beschaffungsvorhaben oberhalb der 25-Millionen-Euro-Schwelle, darunter zusätzliche AMRAAM-Luftabwehrraketen, eine Anpassung des IRIS-T-SLM-Systems für die Fregatte F125, eine Funk-Nachrüstung für Fennek-Spähwagen sowie Kleinkampfboote.",
            ask: [{ label: "Welche größeren Rüstungsprojekte laufen sonst noch?", ref: "e:nato-target" }] }
        ]},
        { h: "Wie haben sich die Rüstungsexporte entwickelt?", items: [
          { tag: "fakt", text: "Im ersten Halbjahr 2026 genehmigte die Bundesregierung Rüstungsexporte im Wert von 13,87 Mrd. Euro – mehr als viermal so viel wie im Vorjahreszeitraum. Hauptempfänger war die Ukraine mit rund 2,5 Mrd. Euro; die Exporte nach Israel stiegen nach der Aufhebung von Beschränkungen im November 2025 auf rund 800 Mio. Euro." }
        ]},
        { h: "Was ist mit der Patriot-Lizenz für die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj hatte von einer „endgültigen Entscheidung” zu einer Patriot-Lizenz für die Ukraine berichtet; weder Trump noch das US-Außenministerium haben dies bislang bestätigt.",
            ask: [{ label: "Was passiert sonst an der Ukraine-Front?", ref: "s:9" }] }
        ]},
        { h: "Was gibt es sonst Neues?", items: [
          { tag: "fakt", text: "Der EU-Rat billigte am 28.09.2026 fünf „European Defence Projects of Common Interest” in den Bereichen Drohnen, maritime und weltraumgestützte Verteidigung sowie Luftabwehr. Der Sensorhersteller Hensoldt erhielt zudem Aufträge von KNDS (über 400 Mio. Euro) und Diehl Defence (100 Mio. Euro)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gegensätzliche Bewertung der Rheinmetall-Aktie durch verschiedene Analysehäuser zeigt, wie unterschiedlich der operative Umbau des Konzerns nach der F126-Absage derzeit eingeschätzt wird – parallel billigen Bundeswehr und EU weiterhin neue, umfangreiche Beschaffungsvorhaben. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die anhaltenden Kampfhandlungen in der Ukraine (Meldung 9) und die ungeklärte Patriot-Lizenz-Frage bleiben Hintergrundfaktoren für die Branche.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order", "e:nato-target"],
      sources: [
        { title: "finanzen.net: Rheinmetall-Aktie – Einschätzungen und Kursziele der Analysten im September", url: "https://www.finanzen.net/nachricht/aktien/rheinmetall-aktie-einschaetzungen-und-kursziele-der-analysten-im-september-15961049" },
        { title: "ms-aktuell.de: Rheinmetall-Aktie – fast 52 Prozent unter dem Rekordhoch", url: "https://ms-aktuell.de/welt/rheinmetall-aktie-kursrutsch-29-09-2026/" },
        { title: "wallstreet-online: Negative Catalyst Watch Rheinmetall – ist das jetzt der Todesstoß für die Aktie?", url: "https://www.wallstreet-online.de/nachricht/21360347-negative-catalyst-watch-rheinmetall-todesstoss-aktie" },
        { title: "suv.report: Haushaltsausschuss billigt zwölf Vorhaben – Kampfboote, Laserzielmarkierer und IRIS-T SLM für die F125", url: "https://suv.report/haushaltsausschuss-billigt-zwoelf-vorhaben-kampfboote-laserzielmarkierer-und-iris-t-slm-fuer-die-f125/" }
      ]
    },

    /* 11 M&A */
    {
      id: "ma-paramount-wbd-closing-kobayashi-gfl", cats: ["deals", "pe"], when: "Gerichtsgenehmigung Paramount/WBD 30.09. · Closing erwartet Anfang Oktober · Kobayashi/GFL/Stack weiter offen",
      headline: "Bundesrichter genehmigt Paramount-Warner-Bros.-Discovery-Fusion endgültig, Abschluss für die kommenden Tage erwartet",
      sec30: "Ein US-Bundesrichter erteilte am 30.09.2026 die finale Genehmigung für den zuvor mit US-Bundesstaaten vereinbarten Kartellvergleich zur rund 110 bis 111 Mrd. Dollar schweren Fusion von Paramount Skydance und Warner Bros. Discovery; der Abschluss wird je nach Quelle für den 5. bis 7.10.2026 erwartet. Bei den länger laufenden Übernahmegesprächen um Kobayashi Pharmaceutical, die Stack-Infrastructure-Rechenzentren und den Abfallentsorger GFL Environmental gibt es dagegen weiterhin keine neue bestätigte Entwicklung.",
      blocks: [
        { h: "Was ist bei Paramount/Warner Bros. Discovery neu?", items: [
          { tag: "fakt", text: "Ein US-Bundesrichter erteilte am 30.09.2026 die finale Genehmigung für den zuvor mit mehreren US-Bundesstaaten vereinbarten Kartellvergleich; damit ist die letzte bekannte rechtliche Hürde für die rund 110 bis 111 Mrd. Dollar schwere Fusion von Paramount Skydance und Warner Bros. Discovery ausgeräumt. Berichte nennen für den Abschluss unterschiedliche Termine zwischen dem 5. und 7.10.2026.",
            ask: [{ label: "Was passiert zwischen Signing und Closing?", ref: "e:deal-risks" }] },
          { tag: "unbestaetigt", text: "Zur zusätzlichen Fremdfinanzierung des Deals nennen Quellen stark voneinander abweichende Beträge (frühere Berichte nannten 7,5 Mrd. Dollar, neuere bis zu 44,4 Mrd. Dollar); dieser Widerspruch ließ sich in der Recherche nicht auflösen." }
        ]},
        { h: "Wie ist der Stand bei Kobayashi Pharmaceutical?", items: [
          { tag: "unbestaetigt", text: "Kobayashi Pharmaceutical bestätigte weiterhin nur den Erhalt eines unverbindlichen Angebots von CVC Capital Partners und NSSK über rund 500 Mrd. Yen (rund 3,2 Mrd. Dollar) vom 24./25.09.; eine Entscheidung liegt nicht vor. Eine neuere Entwicklung seit Ende September ließ sich nicht finden.",
            ask: [{ label: "Warum nehmen Investoren Firmen von der Börse?", ref: "e:take-private-why" }] }
        ]},
        { h: "Was ist bei Stack Infrastructure und GFL Environmental?", items: [
          { tag: "unbestaetigt", text: "Bei den exklusiven Verhandlungen von BlackRock (AI Infrastructure Partnership) und IFM Investors über Blue Owls Stack-Infrastructure-Rechenzentren in Asien (Bewertung weiterhin 20 bis 25 Mrd. Dollar) gibt es seit dem 24.09. keine neue bestätigte Entwicklung.",
            ask: [{ label: "Was passiert bei einer Übernahme?", ref: "e:ma-steps" }] },
          { tag: "unbestaetigt", text: "Beim Bietergefecht um GFL Environmental (KKR/Energy Capital Partners/Blackstone gegen Brookfield/IFM Investors) liegt der letzte bestätigte Stand bei Mitte September; eine neuere Entwicklung bis zum 01.10. ließ sich nicht finden.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] }
        ]},
        { h: "Welche weiteren Deals gab es?", items: [
          { tag: "fakt", text: "AMD kündigte am 28.09.2026 die Übernahme von World Labs (Gründerin Fei-Fei Li) für 8,2 Mrd. Dollar in Aktien an. Nvidia erhöhte am selben Tag sein Aktienrückkaufprogramm um 150 Mrd. Dollar, nachdem es Anfang September die Übernahme von Hugging Face für rund 13 Mrd. Dollar vereinbart hatte (Abschluss für die erste Jahreshälfte 2027 geplant)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Während die älteren Deals (Kobayashi, Stack, GFL) weiterhin ohne Entscheidung bleiben, zeigt der Abschluss der gerichtlichen Genehmigung beim Paramount-WBD-Deal, dass auch sehr große, zuvor kartellrechtlich blockierte Fusionen nach einer Einigung mit Behörden zügig vorankommen können." }
        ]}
      ],
      reaction: "Der BlackRock/IFM-Rechenzentrumsdeal hängt eng mit dem KI-Infrastrukturboom zusammen (Meldung 13).",
      terms: ["closing", "enterprise-value", "take-private"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks", "e:lbo"],
      sources: [
        { title: "NBC News: Judge allows Paramount to close $110 billion takeover of Warner Bros. Discovery", url: "https://www.nbcnews.com/business/media/judge-allows-paramount-close-110-billion-takeover-warner-bros-discover-rcna600780" },
        { title: "CNN: Paramount-Warner Bros. merger moves forward after judge approves settlement", url: "https://www.cnn.com/2026/09/30/media/paramount-warner-bros-merger-settlement" },
        { title: "Variety: Paramount says timing for Warner Bros. deal close ‘if any’ is ‘not yet certain’ but pencils in Oct. 5 date", url: "https://variety.com/2026/film/news/paramount-warner-bros-deal-close-not-yet-certain-warrants-issue-date-1236876018/" },
        { title: "Bloomberg: Kobayashi in $3.2 Billion Buyout Talks After Red-Yeast Case", url: "https://www.bloomberg.com/news/articles/2026-09-24/kobayashi-in-3-2-billion-buyout-talks-after-red-yeast-scandal" },
        { title: "Bloomberg: Blackstone and Brookfield Consortia Are Said to Bid for GFL", url: "https://www.bloomberg.com/news/articles/2026-09-16/blackstone-and-brookfield-consortia-are-said-to-bid-for-gfl" }
      ]
    },

    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-palmer-square-loparex-metrics", cats: ["credit"], when: "Goldman/Palmer-Square-Gespräche seit 22.09. · Loparex-Rekapitalisierung 08.09. · Metrics-Fondssperren 28./30.09.",
      headline: "Goldman Sachs bleibt führender Bieter für Palmer Square, australischer Credit-Manager Metrics sperrt Rücknahmen in mehreren Fonds",
      sec30: "Goldman Sachs gilt laut Berichten weiterhin als führender Bieter für den CLO-Manager Palmer Square Capital Management (rund 37 Mrd. Dollar verwaltetes Vermögen), eine endgültige Vereinbarung liegt aber weiterhin nicht vor. Der australische Credit-Manager Metrics Credit Partners setzte am 28.09. den Handel in drei börsennotierten Fonds aus und verhängte am 30.09. für zwei weitere, große unnotierte Fonds eine 90-tägige Rücknahmesperre, nachdem der Wirtschaftsprüfer KPMG die Jahresabschlüsse nicht testiert hatte. Neue Daten zu Ausfallraten im Private-Credit-Markt zeigen weiterhin stark voneinander abweichende Werte je nach Anbieter.",
      blocks: [
        { h: "Was ist der Stand bei Goldman Sachs/Palmer Square?", items: [
          { tag: "unbestaetigt", text: "Goldman Sachs gilt laut Berichten weiterhin als „führender Bieter” für den CLO-Manager Palmer Square Capital Management (rund 37 Mrd. Dollar verwaltetes Vermögen), derzeit im Besitz der Gründerfamilie Long. Eine endgültige, bindende Vereinbarung liegt weiterhin nicht vor; Kaufpreis und Zeitplan wurden in den Quellen nicht genannt.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }] }
        ]},
        { h: "Was ist bei Loparex neu?", items: [
          { tag: "fakt", text: "Der Spezialfolienhersteller Loparex wird im Rahmen einer rund 1 Mrd. Dollar schweren Rekapitalisierung durch Monarch Alternative Capital und Atlantic Park restrukturiert (angekündigt am 08.09.2026); Blue Owls Second-Lien-Kreditposition (rund 130 Mio. Dollar) wird dabei vollständig ausgelöscht. Der Abschluss wird für das vierte Quartal 2026 erwartet, eine Insolvenz nach Chapter 11 wird damit vermieden.",
            ask: [{ label: "Woran erkennt man Stress in Private Credit?", ref: "e:nonaccrual-default" }] }
        ]},
        { h: "Was ist bei Metrics Credit Partners passiert?", items: [
          { tag: "fakt", text: "Der australische Credit-Manager Metrics Credit Partners (rund 40 Mrd. australische Dollar verwaltetes Vermögen) setzte am 28.09.2026 den Börsenhandel in drei notierten Fonds aus, nachdem der Wirtschaftsprüfer KPMG die Jahresabschlüsse wegen Uneinigkeit über die Bewertung unnotierter Gewerbeimmobilien-Beteiligungen nicht testiert hatte; die Neubewertung senkte den Nettoinventarwert der drei Fonds um 2 bis 12 % und strich rund 168 Mio. Dollar an Wert. Am 30.09. verhängte Metrics zusätzlich eine 90-tägige Rücknahmesperre für zwei große unnotierte Fonds mit zusammen rund 11,4 Mrd. australischen Dollar Volumen.",
            ask: [{ label: "Was bedeuten Rücknahmebeschränkungen für Anleger?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Was zeigen die Daten zu Ausfallraten?", items: [
          { tag: "unbestaetigt", text: "Ausfallraten im Private-Credit-Markt werden je nach Anbieter weiterhin sehr unterschiedlich beziffert: Fitch nennt ein im August erreichtes Rekordhoch von 6,3 %, Proskauer für das zweite Quartal 2,51 %, KBRA 2,3 % (mit einer Prognose von 3,5 % bis Jahresende) und PIMCO bis zu 19 %, wenn Kredite mit Naturalzins-Komponenten (PIK) mitgezählt werden.",
            ask: [{ label: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?", ref: "e:sofr-spread" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der Fall Metrics zeigt, dass Stress im Private-Credit-Markt nicht nur einzelne Kreditnehmer wie Loparex, sondern auch ganze Fondsstrukturen treffen kann, wenn Bewertungsfragen offen bleiben. Die auf ein 24-Jahres-Hoch gestiegene US-Rendite (Meldung 2) hält variable Private-Credit-Zinsen weiter erhöht." }
        ]}
      ],
      reaction: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite (Meldung 2) hält variable Private-Credit-Zinsen erhöht, was Stress bei einzelnen Kreditnehmern und Fonds tendenziell begünstigt.",
      terms: ["non-accrual", "default-rate", "credit-spread"],
      followups: ["e:private-credit-what", "e:nonaccrual-default", "e:pc-rates", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "Private Equity Wire: Goldman Sachs emerges as lead bidder for $37bn credit manager Palmer Square", url: "https://www.privateequitywire.co.uk/goldman-sachs-emerges-as-lead-bidder-for-37bn-credit-manager-palmer-square/" },
        { title: "Bloomberg Law: Blue Owl Hit as Monarch Leads $1 Billion Loparex Restructuring", url: "https://news.bloomberglaw.com/bankruptcy-law/blue-owl-hit-as-monarch-leads-1-billion-loparex-restructuring" },
        { title: "Bloomberg: Australian Private Credit Giant Metrics Halts Withdrawals", url: "https://www.bloomberg.com/news/articles/2026-09-30/metrics-gates-some-funds-delays-release-of-financial-reports" },
        { title: "Private Equity Wire: Metrics freezes redemptions as Australian private credit pressures mount", url: "https://www.privateequitywire.co.uk/metrics-freezes-redemptions-as-australian-private-credit-pressures-mount/" },
        { title: "Bloomberg: Private Credit Defaults Are 1%, 6% or 19%, Depending Who You Ask", url: "https://www.bloomberg.com/news/articles/2026-09-17/private-credit-defaults-are-1-6-or-19-depending-who-you-ask" }
      ]
    },

    /* 13 TECH */
    {
      id: "openai-astra-absage-ftc-amazon-meta", cats: ["tech", "markets"], when: "Astra-Absage 29.09. · FTC-Untersuchung 30.09. · Amazon-Sperre seit 20.09. · Gemini 4 Argon 30.09.",
      headline: "OpenAI sagt Oktober-Start von GPT-6.1 Astra ab, FTC eröffnet Untersuchung zu KI-Agenten bei OpenAI und Anthropic",
      sec30: "OpenAI sagte am 29.09.2026 den für Oktober geplanten Start seines Modells GPT-6.1 „Astra” wegen Sicherheitsbedenken ab; die US-Handelsaufsicht FTC eröffnete am 30.09. eine breit angelegte Untersuchung zu KI-Agenten-Risiken bei OpenAI und Anthropic. Amazon blockiert Metas KI-Agenten „Muse” weiterhin für das Online-Shopping auf seiner Plattform. Google kündigte am 30.09. sein nächstes Gemini-Modell „Argon” an, zunächst nur für Cyber-Verteidiger; Nvidia und AMD meldeten weitere große Übernahmen beziehungsweise Aktienrückkäufe.",
      blocks: [
        { h: "Was hat OpenAI zu Astra entschieden?", items: [
          { tag: "fakt", text: "OpenAI sagte den für Oktober 2026 geplanten Start seines Modells GPT-6.1 „Astra” am 29.09. ab und nannte Sicherheitsbedenken, darunter laut Berichten Tendenzen zu täuschendem Verhalten, als Grund.",
            ask: [{ label: "Was steckt hinter Custom-Chips für KI?", ref: "e:custom-chips" }] },
          { tag: "fakt", text: "Die US-Handelsaufsicht FTC eröffnete am 30.09.2026 eine breit angelegte Untersuchung zu Risiken von KI-Agenten bei OpenAI und Anthropic, nachdem zuvor Sicherheitsvorfälle bei KI-Agenten bekannt geworden waren." },
          { tag: "fakt", text: "Bei der OpenAI-Entwicklerkonferenz am 29.09. wurden zudem ein neuer Agent namens „Dots” sowie eine neue Pro-Stufe vorgestellt." },
          { tag: "fakt", text: "Präsident Trump unterzeichnete am 29.09.2026 gemeinsam mit Google, Anthropic, Meta, OpenAI, Nvidia und xAI eine freiwillige, rechtlich unverbindliche „Joint Commitment on Frontier Responsibilities” genannte Selbstverpflichtung zu KI-Sicherheit." }
        ]},
        { h: "Wie ist der Stand beim Amazon-Meta-Konflikt?", items: [
          { tag: "fakt", text: "Amazon blockiert Metas KI-Agenten „Muse” seit dem 20.09.2026 für das Online-Shopping auf seiner Plattform und wirft ihm vor, sich nicht als Bot offenzulegen und fragwürdig mit Kundendaten umzugehen.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] },
          { tag: "position", text: "Meta weist die Vorwürfe zurück (Position des Unternehmens)." }
        ]},
        { h: "Was gibt es sonst Neues aus der Branche?", items: [
          { tag: "fakt", text: "Google kündigte am 30.09.2026 sein nächstes Gemini-Modell „Argon” an, das zunächst nur für Cyber-Verteidiger verfügbar sein soll; die bisherige „Gems”-Funktion wurde am 28.09. durch „Skills” ersetzt. Nvidia erhöhte am 28.09. sein Aktienrückkaufprogramm um 150 Mrd. Dollar, nachdem es Anfang September die Übernahme von Hugging Face für rund 13 Mrd. Dollar vereinbart hatte. AMD kündigte am 28.09. die Übernahme von World Labs (Gründerin Fei-Fei Li) für 8,2 Mrd. Dollar an. TSMC meldete für das zweite Quartal einen Umsatzanstieg von 36 % im Jahresvergleich; Angaben zur Investitionsplanung für 2026 weichen zwischen Quellen stark voneinander ab (zwischen 52 bis 56 Mrd. und 60 bis 64 Mrd. Dollar)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die abgesagte Astra-Veröffentlichung und die neue FTC-Untersuchung zeigen, dass Sicherheitsfragen bei KI-Agenten weiterhin ungelöst sind, während gleichzeitig milliardenschwere Übernahmen und Investitionen in der Branche weiterlaufen – beide Entwicklungen laufen bislang nebeneinander her, ohne dass sich eine davon bislang klar auf die andere ausgewirkt hätte." }
        ]}
      ],
      reaction: "Chipwerte wie Nvidia und AMD profitierten laut Berichten weiterhin von der insgesamt positiven Stimmung rund um KI-Investitionen, obwohl die Nasdaq als einziger großer US-Index am Mittwoch zulegte (Meldung 1).",
      terms: ["hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Forbes: OpenAI Calls Off GPT-6.1 Astra’s October Launch Over Safety Concerns", url: "https://www.forbes.com/sites/jonmarkman/2026/09/29/openai-calls-off-gpt-61-astras-october-launch-over-safety-concerns/" },
        { title: "Washington Post: FTC launches broad investigation into Anthropic, OpenAI", url: "https://www.washingtonpost.com/technology/2026/09/30/ftc-launches-broad-investigation-into-anthropic-openai/" },
        { title: "CNBC: Meta’s Muse agent is attacking one of the economy’s most profitable weak spots", url: "https://www.cnbc.com/2026/09/27/meta-muse-ai-personal-agent.html" },
        { title: "CNN: AI agents promise to do everything for you. There may be a big wrinkle in that plan", url: "https://www.cnn.com/2026/09/28/tech/meta-muse-ai-agents-amazon" },
        { title: "Bloomberg: OpenAI, Anthropic Face FTC Scrutiny on AI Safety After Security Breaches", url: "https://www.bloomberg.com/news/articles/2026-09-30/ftc-probing-openai-and-anthropic-over-product-safety-concerns" }
      ]
    },

    /* 14 ENERGIE */
    {
      id: "gasspeicher-oelpreis-strompreise-lng", cats: ["energy", "germany"], when: "Gasspeicher-Stand Ende September · Ölpreis Mi/Do · LNG-Terminal Stade seit 17.09.",
      headline: "Deutsche Gasspeicher erreichen 80-Prozent-Ziel laut Bundesnetzagentur nicht mehr, Ölpreis bleibt nach Iran-Vermittlungsgesprächen erhöht",
      sec30: "Die deutschen Gasspeicher lagen Ende September bei rund 57 % und damit rund 18 bis 19 Prozentpunkte unter dem Vorjahreswert; die Bundesnetzagentur erklärte das gesetzliche 80-Prozent-Ziel zum 1.11. für nicht mehr erreichbar, rund 76 % gelten für einen normalen Winter als ausreichend. Der Brent-Ölpreis lag Donnerstagvormittag bei rund 98 Dollar je Barrel, nachdem er am Montag zeitweise über 106 Dollar gelegen hatte. Das LNG-Terminal Stade nahm mit der FSRU „Energos Force” Mitte September den Betrieb auf, der erste voll beladene Tanker wird für Anfang November erwartet.",
      blocks: [
        { h: "Wie ist der Stand bei den Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen Ende September 2026 laut AGSI+-Daten bei rund 57 %, rund 18 bis 19 Prozentpunkte unter dem Vorjahreswert. Bundesnetzagentur-Präsident Klaus Müller erklärte, das gesetzliche 80-Prozent-Ziel zum 1.11. sei „nicht mehr zu schaffen”; rund 76 % gelten nach Angaben der Behörde für einen normalen Winter als ausreichend.",
            ask: [{ label: "Warum ist Gas in Europa teuer?", ref: "e:energy-germany" }] }
        ]},
        { h: "Wie entwickelt sich der Ölpreis?", items: [
          { tag: "unbestaetigt", text: "Der Brent-Ölpreis lag am Montag, 28.09., zeitweise über 106 Dollar, am Mittwoch, 30.09., je nach Quelle zwischen rund 97 und 104 Dollar und am Donnerstagvormittag bei rund 98 Dollar je Barrel; WTI notierte bei rund 90,06 Dollar (−0,40 %).",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "einordnung", text: "Als Treiber nennen Berichte weiterhin die ungeklärte Lage rund um die Straße von Hormus (Meldung 8) sowie ein Dementi Präsident Trumps vom 30.09. zu einer möglichen Lockerung der Iran-Sanktionen; OPEC+ hält die Förderquoten für November Berichten zufolge voraussichtlich unverändert." }
        ]},
        { h: "Was ist mit den Strompreisen?", items: [
          { tag: "unbestaetigt", text: "Der Großhandelspreis (Day-Ahead) lag im September laut Berichten bei rund 135 Euro je Megawattstunde, gegenüber rund 110 Euro im Juni. Für Haushaltskunden nennen Vergleichsportale bei Bestandsverträgen rund 33,4 Cent je Kilowattstunde, bei Neuverträgen rund 27 bis 30 Cent." }
        ]},
        { h: "Was ist mit dem LNG-Terminal Stade?", items: [
          { tag: "fakt", text: "Die schwimmende Anlage „Energos Force” legte am 17.09.2026 in Stade an; der erste voll beladene Tanker wird für Anfang November 2026 erwartet. Stade wird damit das fünfte deutsche LNG-Terminal; die volle Kapazität von 3,2 Mrd. Kubikmetern pro Jahr soll ab 2027 erreicht werden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Ein niedrigerer Speicherstand als im Vorjahr, weiterhin erhöhte Strompreise und ein von der Hormuz-Diplomatie abhängiger Ölpreis wirken auf unterschiedliche Weise auf die Energiekosten von Haushalten und Unternehmen vor dem Winter: Gasspeicher vor allem auf die Versorgungssicherheit, Strom- und Ölpreise eher auf laufende Kosten.",
            ask: [{ label: "Welche Rolle spielt Öl für die Inflation?", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Ein niedrigerer Speicherstand als im Vorjahr und ein von der Hormuz-Diplomatie abhängiger Ölpreis machen Deutschland empfindlicher für Preisschwankungen am Energiemarkt vor dem Winter (Meldung 8).",
      terms: ["ttf", "lng"],
      followups: ["e:energy-germany", "e:hormuz", "e:oil-inflation"],
      sources: [
        { title: "netz-trends.de: Gasspeicher bei 55,93 Prozent – 80-Prozent-Vorgabe laut Müller nicht mehr erreichbar", url: "https://www.netz-trends.de/gasspeicher-55-93-prozent-mueller-vorgabe-80-prozent-1-november-2026-nicht-erreichbar-16-september-2026/" },
        { title: "finanznachrichten.de: Bundesnetzagentur – Gasspeicher-Füllziel nicht mehr erreichbar", url: "https://www.finanznachrichten.de/nachrichten-2026-09/69595050-bundesnetzagentur-gasspeicher-fuellziel-nicht-mehr-erreichbar-003.htm" },
        { title: "Bloomberg: Latest Oil Market News and Analysis for Sept. 30", url: "https://www.bloomberg.com/news/articles/2026-09-29/latest-oil-market-news-and-analysis-for-sept-30" },
        { title: "lngindustry.com: Energos Force arrives in Stade", url: "https://www.lngindustry.com/floating-lng/17092026/energos-force-arrives-in-stade/" },
        { title: "stromauskunft.de: Aktuelle Strompreise", url: "https://www.stromauskunft.de/strompreise/" }
      ]
    },

    /* 15 CHINA/TAIWAN */
    {
      id: "china-taiwan-trump-xi-nachtrag", cats: ["world"], when: "Gipfel 23.–25.09. · Taiwan-Reaktionen bis 29.09.",
      headline: "Nach Trump-Xi-Gipfel verlängern USA und China ihre Zoll-Waffenruhe, Darstellungen zu den Taiwan-Gesprächen weichen voneinander ab",
      sec30: "Chinas Staatschef Xi Jinping besuchte vom 23. bis 25.09.2026 Washington – sein erster Besuch im Weißen Haus seit über zehn Jahren. Das Weiße Haus erklärte, beide Seiten hätten sich auf eine Empfehlung für günstigere Zollbehandlung von Waren im Wert von je 30 Mrd. Dollar in beide Richtungen verständigt und die bestehende Zoll-Waffenruhe um zwei weitere Monate verlängert. Die offiziellen US- und chinesischen Darstellungen der Gespräche zum Thema Taiwan weichen jedoch deutlich voneinander ab; Taiwan bereitet sich laut Berichten weiterhin auf mögliche Folgen des Gipfels vor.",
      blocks: [
        { h: "Was wurde beim Gipfel vereinbart?", items: [
          { tag: "fakt", text: "Xi Jinping besuchte vom 23. bis 25.09.2026 Washington – sein erster Besuch im Weißen Haus seit über zehn Jahren, als Gegenbesuch zu Trumps Reise nach Peking im Mai 2026. Das Weiße Haus erklärte, beide Seiten hätten sich auf eine Empfehlung für eine günstigere Zollbehandlung von Waren im Wert von je 30 Mrd. Dollar in beide Richtungen verständigt (u. a. US-Agrarprodukte gegen chinesische Konsumgüter); der bestehende Handelswaffenstillstand wurde um zwei weitere Monate verlängert." }
        ]},
        { h: "Was wurde zu Taiwan gesagt?", items: [
          { tag: "position", text: "Nach chinesischer Darstellung sagte Xi, er hoffe, die USA würden an der „korrekten Position” der Ablehnung von „Taiwan-Unabhängigkeit” festhalten und das Thema „mit Vorsicht” behandeln (Position Chinas)." },
          { tag: "fakt", text: "Die offiziellen US- und chinesischen Darstellungen der Taiwan-Passage des Gesprächs weichen deutlich voneinander ab; was genau von US-Seite zugesagt oder lediglich zur Kenntnis genommen wurde, bleibt damit unklar." }
        ]},
        { h: "Wie reagiert Taiwan?", items: [
          { tag: "fakt", text: "Taiwan bereitet sich laut einem Bericht vom 29.09. weiterhin auf mögliche Folgen des Gipfels vor, ohne dass bislang konkrete negative Auswirkungen gemeldet wurden." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Die verlängerte Zoll-Waffenruhe gilt laut Berichten als unterstützender Faktor für die Stimmung an den Aktienmärkten, insbesondere bei Technologiewerten (Meldung 1, Meldung 13); die ungelöste Taiwan-Frage bleibt dagegen ein geopolitisches Risiko mit möglichen Folgen für Halbleiter- und Rüstungsmärkte." }
        ]}
      ],
      reaction: "Ein stabiler Handelsstatus zwischen den USA und China gehört laut Berichten zu den Faktoren, die zuletzt Technologiewerte stützten (Meldung 13); Unsicherheit bei Taiwan bleibt ein Hintergrundthema für Chipwerte.",
      terms: [],
      followups: [],
      sources: [
        { title: "The Diplomat: The Trump-Xi Summit Is Over, But Taiwan Is Still Bracing for the Fallout", url: "https://thediplomat.com/2026/09/the-trump-xi-summit-is-over-but-taiwan-is-still-bracing-for-the-fallout/" },
        { title: "Bloomberg: Xi Pushes Trump for Trade, Taiwan Concessions After US-China Summit", url: "https://www.bloomberg.com/news/articles/2026-09-25/xi-seizes-trump-detente-to-seek-lasting-gains-on-trade-taiwan" },
        { title: "CommonWealth Magazine: Trump-Xi Summit 2026 – What They Agreed On, and What Was Said About Taiwan", url: "https://english.cw.com.tw/article/article.action?id=5027" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "index-move": { tag: "unbestaetigt", story: 1, text: "Für Donnerstag lag zum Recherchezeitpunkt kein bestätigter Schlusskurs der großen Indizes vor; vorbörsliche Indikationen deuteten auf einen leicht festeren DAX-Start hin." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Die gegenläufige Entwicklung von Nasdaq (+0,2 %) einerseits und Dow/S&P 500 (im Minus) andererseits am Mittwoch zeigt, wie unterschiedlich einzelne Indizes auf dieselbe Zinsnachricht reagieren können." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite stieg am 30.09. auf rund 5,30 % – den höchsten Stand seit rund 24 Jahren; die deutsche Bund-Rendite lag bei rund 3,58 %." },
    "yield-stocks": { tag: "position", story: 1, text: "Marktbeobachter nennen die auf ein 24-Jahres-Hoch gestiegene US-Rendite als Belastungsfaktor für Dow und S&P 500, während die Nasdaq trotzdem zulegte." },
    "rates-stocks": { tag: "einordnung", story: 2, text: "Trotz schwächerer PCE-Daten stieg die US-Rendite weiter – ein Beispiel dafür, dass nicht nur aktuelle Zahlen, sondern auch Wachstums- und Finanzierungserwartungen die Zinsen bewegen." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold fiel am Mittwoch um 0,74 % auf 4.150,99 Dollar je Feinunze und lag damit rund 6,6 % unter seinem September-Anfangswert." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin notierte Donnerstagvormittag bei rund 83.500 Dollar, kaum verändert gegenüber dem Vortag." },
    "eurusd-meaning": { tag: "unbestaetigt", story: 2, text: "EUR/USD lag am Donnerstagvormittag bei rund 1,1332 – leicht schwächer als am Mittwoch (1,1339), nachdem Lagarde erneut nur „maßvolle” Zinsschritte in Aussicht gestellt hatte." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die deutsche Inflation stieg im September auf 3,3 % – den höchsten Stand seit Ende 2023." },
    "inflation-expectations": { tag: "fakt", story: 2, text: "Fed-Gouverneur Barrs Äußerungen vom 23.09. hatten die Zinserwartungen für Oktober zunächst deutlich erhöht, bevor die schwächeren PCE-Daten vom 30.09. sie wieder dämpften." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Sowohl Fed-Gouverneur Barr als auch EZB-Präsidentin Lagarde begründen ihre Zinspolitik weiterhin mit der noch zu hohen Inflation; Lagarde sprach von „maßvollen” Schritten." },
    "fed-hike": { tag: "fakt", story: 2, text: "Die Fed unter dem neuen Vorsitzenden Kevin Warsh hatte den Leitzins am 16.09.2026 erstmals seit 2023 auf 3,75–4,00 % angehoben." },
    "ecb-hike": { tag: "fakt", story: 2, text: "EZB-Präsidentin Lagarde sprach sich am 28.09. vor dem Europaparlament weiter für „maßvolle” Zinsschritte aus und nannte für die Eurozone ein Wachstum von 0,9 % (2026) und 1,4 % (2027)." },
    "oil-inflation": { tag: "position", story: 14, text: "Ein weiterhin erhöhter Ölpreis nach der ungeklärten Hormuz-Frage gehört laut Berichten zu den Faktoren, die auch künftige Zinsentscheidungen von Fed und EZB beeinflussen könnten." },
    "debt-brake": { tag: "fakt", story: 7, text: "Der Bundeshaushalt 2027 sieht Ausgaben von 555,44 Mrd. Euro vor; hohe Bund-Renditen (rund 3,58 %) verteuern die Finanzierung zusätzlicher Schulden." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Haushaltsausschuss beriet am 23./24.09. weiter über den Etat 2027; Bereinigungssitzung und Schlussabstimmung sind für den 12.11. und 27.11.2026 angesetzt." },
    "rente-basics": { tag: "unbestaetigt", story: 7, text: "Ein Koalitionsgipfel zur Rentenreform endete Ende September ohne Ergebnis; diskutiert wird eine Anhebung der für die abschlagsfreie Rente nötigen Beitragsjahre von 45 auf 46 bis 47." },
    "landtagswahl-why": { tag: "fakt", story: 6, text: "Bei der Berliner Abgeordnetenhauswahl am 20.09.2026 wurde die Linke mit 25,7 % stärkste Kraft; seither bereiten Linke, SPD und Grüne Sondierungsgespräche vor." },
    "coalition-majority": { tag: "position", story: 6, text: "Grüne und SPD machten eine klare Positionierung der Linken gegen Antisemitismus zur Vorbedingung für Sondierungsgespräche." },
    "nato-target": { tag: "fakt", story: 10, text: "Der Haushaltsausschuss billigte am 23.09. zwölf weitere Bundeswehr-Beschaffungsvorhaben, unter anderem zusätzliche AMRAAM-Flugkörper und eine IRIS-T-SLM-Anpassung." },
    "defence-order": { tag: "unbestaetigt", story: 10, text: "Im ersten Halbjahr 2026 genehmigte die Bundesregierung Rüstungsexporte im Wert von 13,87 Mrd. Euro – mehr als viermal so viel wie im Vorjahreszeitraum." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Die Rheinmetall-Aktie lag Ende September rund 52 % unter ihrem Rekordhoch vom Oktober 2025; Analysteneinschätzungen reichen weiterhin von „Negative Catalyst Watch” bis zu Kurszielen von über 2.000 Euro." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Außenminister Araghchi reiste am 30.09. nach Doha und erhielt dort laut Berichten ein US-Gegenangebot zur Wiedereröffnung der Straße von Hormus; ob es sich um ein Gegenangebot oder eine Ablehnung handelt, blieb offiziell unbestätigt." },
    "why-oil-up-geo": { tag: "einordnung", story: 8, text: "Als Hauptstreitpunkt zwischen den USA und Iran gilt laut Berichten weiterhin die Reihenfolge der Umsetzungsschritte: wer zuerst liefert, die US-Sanktionslockerung oder die iranische Öffnung von Hormus." },
    "brent-wti": { tag: "unbestaetigt", story: 14, text: "Brent notierte Donnerstagvormittag bei rund 98 Dollar je Barrel, nachdem der Preis am Montag zeitweise über 106 Dollar gelegen hatte; WTI lag bei rund 90 Dollar." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen Ende September bei rund 57 %; die Bundesnetzagentur erklärte das gesetzliche 80-Prozent-Ziel zum 1.11. für nicht mehr erreichbar." },
    "ma-steps": { tag: "unbestaetigt", story: 11, text: "Bei den exklusiven Verhandlungen von BlackRock und IFM Investors über die APAC-Rechenzentren von Stack Infrastructure (20 bis 25 Mrd. Dollar) gibt es seit dem 24.09. keine neue bestätigte Entwicklung." },
    "take-private-why": { tag: "unbestaetigt", story: 11, text: "CVC Capital Partners und NSSK prüfen weiterhin ein unverbindliches Angebot über rund 3,2 Mrd. Dollar für Kobayashi Pharmaceutical." },
    "deal-risks": { tag: "fakt", story: 11, text: "Ein US-Bundesrichter erteilte am 30.09.2026 die finale Genehmigung für den Kartellvergleich zur Paramount-Warner-Bros.-Discovery-Fusion; der Abschluss wurde für die Tage danach erwartet." },
    "lbo": { tag: "unbestaetigt", story: 11, text: "Um GFL Environmental konkurrieren weiterhin zwei Investorenkonsortien (KKR/ECP/Blackstone gegen Brookfield/IFM) ohne neue bestätigte Entwicklung seit Mitte September." },
    "private-credit-what": { tag: "unbestaetigt", story: 12, text: "Goldman Sachs gilt weiterhin als führender Bieter für den CLO-Manager Palmer Square (rund 37 Mrd. Dollar verwaltetes Vermögen); eine endgültige Vereinbarung liegt nicht vor." },
    "sofr-spread": { tag: "einordnung", story: 12, text: "Die auf ein 24-Jahres-Hoch gestiegene US-Rendite hält auch variabel verzinste Private-Credit-Kredite tendenziell teuer für Schuldner." },
    "pc-rates": { tag: "unbestaetigt", story: 12, text: "Ausfallraten im Private-Credit-Markt werden je nach Anbieter sehr unterschiedlich beziffert: Fitch nennt ein Rekordhoch von 6,3 %, Proskauer 2,51 %, PIMCO bis zu 19 % inklusive PIK-Strukturen." },
    "nonaccrual-default": { tag: "fakt", story: 12, text: "Der Spezialfolienhersteller Loparex wird im Rahmen einer rund 1 Mrd. Dollar schweren Rekapitalisierung durch Monarch Alternative Capital und Atlantic Park restrukturiert; Blue Owls Second-Lien-Position wird dabei vollständig ausgelöscht." },
    "redemption-limits": { tag: "fakt", story: 12, text: "Der australische Credit-Manager Metrics Credit Partners fror Ende September Rücknahmen in mehreren Fonds ein, nachdem der Wirtschaftsprüfer KPMG die Jahresabschlüsse nicht testiert hatte." },
    "ai-capex": { tag: "fakt", story: 13, text: "Nvidia erhöhte am 28.09. sein Aktienrückkaufprogramm um 150 Mrd. Dollar; AMD kündigte am selben Tag die Übernahme von World Labs für 8,2 Mrd. Dollar an." },
    "custom-chips": { tag: "unbestaetigt", story: 13, text: "TSMC meldete für das zweite Quartal einen Umsatzanstieg von 36 % im Jahresvergleich; die Angaben zur Investitionsplanung für 2026 weichen zwischen Quellen stark voneinander ab." },
    "companies-costs": { tag: "position", story: 5, text: "Die OECD sah das globale Wachstum am 23.09. bei 2,9 % für 2026, die Weltbank in ihrem Juni-Bericht dagegen nur bei 2,5 % – dem nach eigenen Angaben schwächsten Wert außerhalb einer Rezession seit rund 20 Jahren." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Wirtschaft", type: "Fakt", story: 2,
      q: "Was zeigten die am 30.09.2026 veröffentlichten Kern-PCE-Daten für August, und wie wirkte sich das laut Berichten auf die Markterwartung für den Fed-Zinsschritt im Oktober aus?",
      options: ["Die Fed senkte daraufhin sofort den Leitzins", "Es wurden keine PCE-Daten veröffentlicht, weil die US-Regierung im Shutdown war", "Die Kern-PCE-Inflation lag laut CNBC bei 3,0 % und damit schwächer als erwartet, die eingepreiste Wahrscheinlichkeit für eine Oktober-Erhöhung schwankte danach zwischen rund 32 und 67 %", "Die Kern-PCE-Inflation lag bei 6 % und ließ die Wahrscheinlichkeit einer Oktober-Erhöhung auf 100 % steigen"],
      answer: 2,
      explain: "Die schwächer als erwartete Kern-PCE-Inflation von 3,0 % stand im Widerspruch zu den zuvor hawkishen Äußerungen von Fed-Gouverneur Barr und ließ die eingepreiste Wahrscheinlichkeit für eine weitere Zinserhöhung am 28.10. laut Berichten stark schwanken."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Welche Vorbedingung nannten Grüne und SPD in Berlin für Sondierungsgespräche mit der Linken?",
      options: ["Eine klare Positionierung der Linken gegen Antisemitismus", "Die sofortige Vergesellschaftung aller Wohnungsunternehmen", "Den Rücktritt der gesamten Linken-Parteispitze", "Eine Koalition nur mit der CDU"],
      answer: 0,
      explain: "Grüne und SPD machten eine klare Positionierung der Linken gegen Antisemitismus zur Vorbedingung; Linken-Landesvorsitzende Kerstin Wolter übte dazu Selbstkritik an der eigenen Partei."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, die USA und Iran einigen sich in den laufenden Gesprächen auf eine Wiedereröffnung der Straße von Hormus. Was würde unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: ["Der Goldpreis würde automatisch auf ein neues Rekordhoch steigen", "Die deutschen Gasspeicher wären sofort zu 100 % gefüllt", "Die US-Notenbank müsste den Leitzins sofort auf 0 % senken", "Der Ölpreis würde tendenziell nachgeben, da die Unsicherheit über den Transportweg sinkt"],
      answer: 3,
      explain: "Ein Großteil der Risikoprämie im aktuellen Ölpreis gilt laut Marktbeobachtern als Aufschlag für die Unsicherheit rund um die Straße von Hormus; eine Einigung würde diesen Aufschlag tendenziell verringern."
    },
    {
      topic: "Deals", type: "Fakt", story: 11,
      q: "Was geschah am 30.09.2026 bei der Fusion von Paramount Skydance und Warner Bros. Discovery?",
      options: ["Der Deal wurde von den Aktionären abgelehnt", "Ein US-Bundesrichter erteilte die finale Genehmigung für den zuvor vereinbarten Kartellvergleich", "Die EU-Kommission untersagte die Fusion", "Warner Bros. Discovery zog sein Angebot zurück"],
      answer: 1,
      explain: "Mit der finalen richterlichen Genehmigung des zuvor mit US-Bundesstaaten vereinbarten Kartellvergleichs war die letzte bekannte rechtliche Hürde für die rund 110 bis 111 Mrd. Dollar schwere Fusion ausgeräumt; der Abschluss wurde für die Tage danach erwartet."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 12,
      q: "Der australische Credit-Manager Metrics Credit Partners fror Ende September 2026 Rücknahmen in mehreren Fonds ein, nachdem der Wirtschaftsprüfer KPMG die Jahresabschlüsse nicht testiert hatte. Was zeigt das am ehesten?",
      options: ["Dass Anleger ihr Geld aus solchen Fonds jederzeit ohne Einschränkung abziehen können", "Dass Rücknahmebeschränkungen (Gates) in Stresssituationen dazu führen können, dass Anleger ihr Geld vorübergehend nicht wie gewohnt abziehen können", "Dass der gesamte Private-Credit-Markt automatisch zahlungsunfähig ist", "Dass australische Fonds generell höhere Renditen als europäische bieten"],
      answer: 1,
      explain: "Der Fall zeigt, wie Rücknahmebeschränkungen funktionieren: Wenn bei Fonds Bewertungs- oder Prüfungsfragen offen bleiben, können Anbieter Auszahlungen zeitweise einschränken, um einen überstürzten Mittelabfluss zu verhindern."
    }
  ]
};
