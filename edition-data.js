// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-06",
  dateLabel: "Dienstag, 6. Oktober 2026",
  updatedLabel: "Recherchestand 06.10.2026",
  marketNote: "Diese Ausgabe entsteht am Dienstagmorgen, 06.10.2026. Für DAX, Euro Stoxx 50, S&P 500, Nasdaq und Dow Jones sowie für die US- und die Bund-Rendite gilt – soweit nicht anders vermerkt – der Schlussstand von Montag, 05.10.2026; der heutige Dienstagshandel war zum Recherchezeitpunkt noch nicht beendet. Brent-Öl, Gold, Bitcoin und EUR/USD werden rund um die Uhr beziehungsweise durchgehend gehandelt. Bei mehreren Werten weichen die Quellen an diesem Montag spürbar voneinander ab: Für den DAX reichen die Angaben von kaum verändert bis spürbar höher, für die US- und die Bund-Rendite liegen die Zahlen teils mehrere Basispunkte auseinander, und beim Brentpreis nennen einzelne Quellen Werte zwischen rund 101 und 106 Dollar (eine zusätzliche, nicht erhärtete Einzelquelle nannte rund 89 Dollar). Diese Widersprüche sind jeweils bei der betroffenen Kennzahl vermerkt.",

  top: [
    { text: "Fed-Vizechef Philip Jefferson (Rede 01.10.) und New-York-Fed-Präsident John Williams (Rede 05.10.) äußerten sich zurückhaltend zu einer weiteren Zinserhöhung; an den Terminmärkten wird die Wahrscheinlichkeit einer Fed-Zinspause bei der Sitzung am 27./28.10. inzwischen auf rund 80 % taxiert. Wall Street schloss am Montag im Plus, die Nasdaq erreichte einen neuen Rekordschlussstand.", ref: "s:2" },
    { text: "Trotz der zurückhaltenden Fed-Reden meldeten mehrere Quellen für die US-Rendite zehnjähriger Staatsanleihen am Montag ein mehrjähriges Hoch; auch die Bund-Rendite notierte nahe ihrem höchsten Stand seit 2011. Die genauen Werte schwanken je nach Quelle deutlich.", ref: "s:3" },
    { text: "Bundeskanzler Merz besuchte am 04.10. während Luftalarms und Explosionen unangekündigt Kyjiw, sprach von „täglichen Kriegsverbrechen” und sagte 1,3 Mrd. Euro Hilfe sowie 350 Mio. Euro Energiehilfe zu. Parallel schlugen die USA laut Zelenskyj trilaterale Gespräche mit Russland bis Ende Oktober vor; Russland griff zuvor erneut Kyjiws Brücken an.", ref: "s:8" },
    { text: "Der für Mittwoch, 07.10., angesetzte Koalitionsausschuss zu Rente, Pflege und Gesundheit steht unter Druck: Bundeskanzler Merz rief am 05.10. zum Zusammenhalt der Koalition auf, während 18 Abgeordnete der Jungen Gruppe der Union laut Berichten zusätzliche Kosten von rund 120 Mrd. Euro (2032–2040) durch den SPD-Rentenvorschlag kritisieren.", ref: "s:6" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 25.250", change: "≈ +0,1 % (Mo-Schluss, Quellenlage uneinheitlich)", dir: "flat", asof: "Schluss Mo 05.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "Je nach Datenanbieter schloss der DAX am Montag zwischen rund 25.231 und 25.254 Punkten; die genannte Veränderung reicht von kaum verändert (+0,09 %) bis deutlich höher. Eine von mehreren Quellen übereinstimmend bestätigte Zahl lag zum Redaktionsschluss nicht vor." }
      ],
      moved: {
        intro: "Als Hintergrund für Montag nennen Berichte:",
        items: [
          "Zurückhaltende Reden von Fed-Vizechef Jefferson und New-York-Fed-Präsident Williams bestätigten die Markterwartung einer Zinspause im Oktober und stützten damit Aktien beidseits des Atlantiks (Meldung 2)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die von Fed-Vertretern signalisierte Zurückhaltung bei einer weiteren Zinserhöhung im Oktober gilt als Hintergrund für die Kursgewinne an den Aktienmärkten.", ref: "s:2" }
      ],
      source: { title: "finanzen.net: Tagesvorschau Montag, 5. Oktober 2026", url: "https://www.finanzen.net/nachricht/aktien/tagesvorschau-montag-5-oktober-2026-15966562" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.241–6.256", change: "≈ +0,03 % (kaum verändert, Mo-Schluss)", dir: "flat", asof: "Schluss Mo 05.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Ein Plus heißt: Diese Unternehmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Monat", text: "Über den vergangenen Monat verlor der Euro Stoxx 50 laut einer Quelle rund 2,55 %; über die vergangenen 12 Monate liegt er dagegen weiterhin rund 10,9 % im Plus." }
      ],
      moved: {
        intro: "Für Montag nennen Berichte keine spezifischen neuen Einzelereignisse; der Index bewegte sich im Rahmen der allgemeinen, von den Fed-Reden geprägten Marktstimmung (Meldung 2).",
        items: []
      },
      important: [
        { area: "Zinsen", text: "Die Bund-Rendite notierte zu Wochenbeginn nahe ihrem höchsten Stand seit 2011.", ref: "n:bund10" }
      ],
      source: { title: "TradingEconomics: Euro Area Stock Market Index", url: "https://tradingeconomics.com/euro-area/stock-market" }
    },
    "sp500": {
      label: "S&P 500", value: "7.773,95", change: "+0,66 % (Mo-Schluss)", dir: "up", asof: "Schluss Mo 05.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Montagsschluss: 51.267,90 Punkte (+0,18 %)." },
        { label: "Nasdaq", text: "Montagsschluss: 27.477,31 Punkte (+1,05 %) – ein neuer Rekordschlussstand." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Montag:",
        items: [
          "Zurückhaltende Reden von Fed-Vizechef Jefferson (01.10.) und New-York-Fed-Präsident Williams (05.10.) bestätigten die Markterwartung, dass die Fed bei ihrer Sitzung am 27./28.10. die Zinsen pausieren könnte."
        ]
      },
      important: [
        { area: "Zinsen", text: "An den Terminmärkten wird die Wahrscheinlichkeit einer Fed-Zinspause im Oktober inzwischen auf rund 80 % taxiert.", ref: "s:2" }
      ],
      source: { title: "Yahoo Finance: Stock market today, Oct. 5, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-oct-5-135537124.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.477,31", change: "+1,05 % (Rekordschluss, Mo)", dir: "up", asof: "Schluss Mo 05.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Woche", text: "Die Nasdaq schloss am Montag auf einem neuen Rekordstand und legte damit deutlicher zu als Dow und S&P 500." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Die zurückhaltenden Fed-Reden senkten die Wahrscheinlichkeit einer weiteren Zinserhöhung im Oktober, was besonders zinssensitiven Technologiewerten half."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zinsnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Yahoo Finance: How major US stock indexes fared Monday, 10/5/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-201520824.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1204", change: "−0,46 % ggü. Freitagschluss", dir: "down", asof: "Mo 05.10.26, EZB-Referenzkurs", story: 5,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Monat/Jahr", text: "Über den vergangenen Monat hat der Euro gegenüber dem Dollar laut einer Quelle rund 3,6 % verloren, über die vergangenen 12 Monate rund 4,3 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein insgesamt fester notierender Dollar und leicht gestiegene US-Renditen wirkten am Montag auf den Euro; explizite Einzelgründe für den Tag wurden in den Quellen nicht genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Sowohl die Fed als auch die EZB haben ihre Leitzinsen im September angehoben; die weitere Zinsrichtung bleibt für beide Währungsräume Gegenstand laufender Debatten.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro foreign exchange reference rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,29–5,31 %", change: "laut einer Quelle frisches Mehrjahreshoch, andere Quellen kaum verändert", dir: "up", asof: "Mo 05.10.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,3 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,3 % Zinsen pro Jahr.",
      compare: [
        { label: "Quellenlage", text: "Eine Quelle (CNBC) berichtet von einem frischen Hoch seit 2002; andere Quellen nennen rund 5,25 % und damit praktisch unverändert gegenüber Freitag. Eine eindeutige, von mehreren Quellen übereinstimmend bestätigte Schlusszahl lag zum Redaktionsschluss nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Trotz der zurückhaltenden Reden von Fed-Vizechef Jefferson und New-York-Fed-Präsident Williams blieb die Rendite erhöht; eine Quelle beschreibt die Schwäche am Anleihemarkt als von „mehr als Geldpolitik” getrieben, ohne weitere Details zu nennen."
        ]
      },
      important: [
        { area: "Fed", text: "An den Terminmärkten wird die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10. auf rund 80 % taxiert.", ref: "s:2" }
      ],
      source: { title: "CNBC: 10-year Treasury yield rises to fresh 2002 high to start the week", url: "https://www.cnbc.com/2026/10/05/treasury-yields-bonds-fed-rates.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,60–3,63 %", change: "weiter gestiegen ggü. Freitag (≈ 3,46 %)", dir: "up", asof: "Stand Mo 05.10.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Quellenlage", text: "Eine Quelle nennt für Anfang Oktober rund 3,63 % – nahe dem seit April 2011 höchsten Stand –, eine andere, möglicherweise nicht tagesaktuelle Quelle weiterhin rund 3,47 %. Eine eindeutig bestätigte Zahl für Montag lag nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als möglichen Hintergrund:",
        items: [
          "Die Bund-Rendite bewegte sich im europäischen Zinsumfeld nach der EZB-Zinserhöhung vom September mit leicht steigender Tendenz."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Eine höhere Bund-Rendite verteuert neue deutsche Staatsschulden; das bleibt Hintergrund der Debatte über die Rentenlast im Bundeshaushalt.", ref: "s:6" }
      ],
      source: { title: "Statista: Rendite zehnjähriger Staatsanleihen in Deutschland", url: "https://de.statista.com/statistik/daten/studie/238018/umfrage/rendite-zehnjaehriger-staatsanleihen-in-deutschland-nach-monaten/" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.128–4.153 $", change: "kaum verändert ggü. Freitag", dir: "flat", asof: "Mo/Di 05.–06.10.26", story: 5, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.130 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Jahreshoch", text: "Gold liegt damit rund 26 % unter dem 2026er-Rekordhoch von rund 5.608 Dollar (Ende Januar 2026)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die nachlassende Erwartung einer Fed-Zinserhöhung im Oktober stützte Gold grundsätzlich als zinslose Anlage, während ein insgesamt fester notierender Dollar und leicht gestiegene US-Renditen gegenläufig wirkten (Meldung 3)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Renditen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "CNBC: Gold gains as October Fed rate hike prospects fade", url: "https://www.cnbc.com/2026/10/05/gold-gains-as-october-fed-rate-hike-prospects-fade.html" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 102 $", change: "Quellenlage uneinheitlich (≈ 101 bis 106 $)", dir: "flat", asof: "Mo 05.10.26", story: 15, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 102 Dollar je Fass (159 Liter) sind rund 64 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Quellenlage", text: "Werte für Montag reichen je nach Quelle und Tageszeit von rund 101 bis 106 Dollar; die separat gehandelte Sorte Murban lag mit rund 110 Dollar deutlich darüber. Eine einzelne Quelle nannte zusätzlich einen stark abweichenden Wert von rund 89 Dollar, der sich mit weiteren Quellen nicht erhärten ließ." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die anhaltende Störung der Schifffahrt durch die Straße von Hormus und die am 04.10. begonnene Ölumleitung des Irak halten die Risikoprämie hoch (Meldung 9).",
          "OPEC+ beschloss am 04.10., die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag zu lassen (Meldung 15)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "OPEC+", text: "OPEC+ hält die Förderquote für November unverändert – mehr dazu in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "World Oil: OPEC+ holds November oil production targets steady as supply remains constrained", url: "https://www.worldoil.com/news/2026/10/4/opec-holds-november-oil-production-targets-steady-as-supply-remains-constrained/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 85.000–86.200 $", change: "leicht höher ggü. Freitag (≈ 84.700–84.900 $)", dir: "up", asof: "Mo/Di 05.–06.10.26", story: 5, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 85.000 bis 86.200 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Quellenlage", text: "Die gefundenen Quellen liegen für Montag/Dienstag relativ nah beieinander im Bereich von rund 85.000 bis 86.200 Dollar – ein leichter Anstieg gegenüber dem Vorwochenende." }
      ],
      moved: {
        intro: "Berichte nennen keine spezifischen Einzelgründe für den Tag:",
        items: [
          "Bitcoin bewegte sich im Rahmen der allgemeinen, risikofreundlicheren Marktstimmung nach den zurückhaltenden Fed-Reden nur leicht nach oben."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Coinbase: Bitcoin (BTC) Price USD Today", url: "https://www.coinbase.com/price/bitcoin" }
    }
  },

  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-montag-rally-fed-reden-06-10", cats: ["markets"], when: "Schluss Mo 05.10.2026",
      headline: "Nasdaq schließt auf Rekordhoch, Wall Street und DAX legen nach zurückhaltenden Fed-Reden zu",
      sec30: "Die Nasdaq Composite schloss am Montag mit 27.477,31 Punkten (+1,05 %) auf einem neuen Rekordstand, der S&P 500 gewann 0,66 % auf 7.773,95 Punkte, der Dow Jones legte um 0,18 % auf 51.267,90 Punkte zu. Der DAX bewegte sich je nach Quelle zwischen kaum verändert und leicht höher bei rund 25.250 Punkten, der Euro Stoxx 50 blieb mit rund +0,03 % praktisch unverändert bei 6.241 bis 6.256 Punkten. Als Hintergrund nennen Berichte zurückhaltende Reden von Fed-Vizechef Philip Jefferson und New-York-Fed-Präsident John Williams, die die Markterwartung einer Fed-Zinspause im Oktober bestätigten.",
      blocks: [
        { h: "Wie haben sich die Indizes am Montag entwickelt?", items: [
          { tag: "fakt", text: "Die Nasdaq Composite schloss am Montag, 05.10.2026, bei 27.477,31 Punkten (+1,05 %) – ein neuer Rekordschlussstand.",
            ask: [{ label: "Warum reagiert die Nasdaq stärker auf Zinsnachrichten?", ref: "chain:nasdaq-why" }] },
          { tag: "fakt", text: "Der S&P 500 gewann 0,66 % auf 7.773,95 Punkte, der Dow Jones 0,18 % auf 51.267,90 Punkte." },
          { tag: "unbestaetigt", text: "Für den DAX nennen Quellen unterschiedliche Werte zwischen rund 25.231 und 25.254 Punkten, mit einer Veränderung von kaum verändert bis deutlich höher; der Euro Stoxx 50 schloss nach verfügbaren Quellen mit rund +0,03 % praktisch unverändert zwischen 6.241 und 6.256 Punkten.",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] }
        ]},
        { h: "Was wird als Grund genannt?", items: [
          { tag: "position", text: "Fed-Vizechef Philip Jefferson erklärte in einer Rede am 01.10.2026, er habe die Zinserhöhung vom September unterstützt, künftige Zinsentscheidungen sollten aber „durch sorgfältige Prüfung der Datenentwicklung” bestimmt werden.",
            ask: [{ label: "Was steckt hinter der Fed-Zinspolitik?", ref: "s:2" }] },
          { tag: "unbestaetigt", text: "New-York-Fed-Präsident John Williams äußerte sich laut Berichten in einer Rede am 05.10.2026 ebenfalls zurückhaltend zu einer weiteren Zinserhöhung im Oktober; Goldman-Sachs-Ökonomen sahen ihre Einschätzung einer geringeren Hike-Wahrscheinlichkeit dadurch bestätigt." },
          { tag: "einordnung", text: "Dass zurückhaltende Fed-Reden ohne neue Wirtschaftsdaten Aktien weltweit stützten, erklären Marktbeobachter mit der gesunkenen Wahrscheinlichkeit einer weiteren Fed-Zinserhöhung im Oktober." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass die Nasdaq deutlich stärker zulegte als Dow und S&P 500, zeigt erneut, wie stark zinssensitive Technologiewerte von Zinserwartungen abhängen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zurückhaltenden Fed-Reden stützten Aktien (Meldung 2), während die US- und die Bund-Rendite laut einzelnen Quellen gleichzeitig auf mehrjährige Hochs stiegen (Meldung 3) – ein von Marktbeobachtern als ungewöhnlich bezeichnetes Nebeneinander.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "Yahoo Finance: Stock market today, Oct. 5, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-oct-5-135537124.html" },
        { title: "Yahoo Finance: How major US stock indexes fared Monday, 10/5/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-201520824.html" },
        { title: "finanzen.net: Tagesvorschau Montag, 5. Oktober 2026", url: "https://www.finanzen.net/nachricht/aktien/tagesvorschau-montag-5-oktober-2026-15966562" },
        { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/10/05/stock-market-today-live-updates.html" }
      ]
    },

    /* 2 FED/JEFFERSON/WILLIAMS */
    {
      id: "fed-zinspolitik-jefferson-williams-06-10", cats: ["economy", "markets"], when: "Fed-Zinsniveau seit 16.09.2026 · Rede Jefferson 01.10. · Rede Williams 05.10. · nächste FOMC-Sitzung 27./28.10.2026",
      headline: "US-Notenbank hält nach zurückhaltenden Reden von Jefferson und Williams Zinspause im Oktober für wahrscheinlich",
      sec30: "Die Fed hatte ihren Leitzins am 16.09.2026 einstimmig (12:0) auf ein Zielband von 3,75 bis 4,00 % angehoben – die erste Erhöhung seit 2023 – und dabei anhaltend hohe Inflation sowie geopolitische Aufwärtsrisiken als Begründung genannt. Fed-Vizechef Philip Jefferson erklärte am 01.10. in einer Rede, er habe die Septemberentscheidung unterstützt, künftige Schritte sollten aber von der Datenentwicklung abhängen; New-York-Fed-Präsident John Williams äußerte sich laut Berichten am 05.10. ähnlich zurückhaltend. An den Terminmärkten wird die Wahrscheinlichkeit einer Zinspause bei der nächsten Sitzung am 27./28.10. inzwischen auf rund 80 % taxiert. Ein Regierungsshutdown lag nicht vor: Die bereits am 02.09. unterzeichnete Übergangsfinanzierung sichert die Bundesbehörden bis zum 11.12.2026.",
      blocks: [
        { h: "Wie ist der aktuelle Stand der Fed-Zinspolitik?", items: [
          { tag: "fakt", text: "Die Fed hob ihren Leitzins am 16.09.2026 einstimmig (12:0) auf ein Zielband von 3,75 bis 4,00 % an – die erste Zinserhöhung seit 2023. Als Begründung nannte die Notenbank anhaltend hohe Inflation (Kern-PCE das ganze Jahr 2026 über 3 %) sowie zusätzliche, von geopolitischen Entwicklungen ausgehende Aufwärtsrisiken.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was haben Jefferson und Williams gesagt?", items: [
          { tag: "position", text: "Fed-Vizechef Philip Jefferson sagte in einer Rede an der University of Virginia am 01.10.2026 über die Septemberentscheidung: „I supported that decision because I saw it as the appropriate policy to pursue the Fed's dual mandate.” Zur weiteren Zinspolitik erklärte er: „any future adjustments in policy should be determined by carefully examining trends in the data.” Zur Inflation sagte er, diese sei „too high for too long” gewesen." },
          { tag: "unbestaetigt", text: "New-York-Fed-Präsident John Williams äußerte sich laut Berichten in einer Rede an der University at Buffalo am 05.10.2026 ebenfalls zurückhaltend zu einer weiteren Zinserhöhung im Oktober; eine wörtliche, unabhängig bestätigte Zusammenfassung seiner Aussagen lag zum Redaktionsschluss nicht vor." },
          { tag: "unbestaetigt", text: "An den Terminmärkten wird die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10.2026 inzwischen auf rund 80 % taxiert – ein deutlicher Rückgang gegenüber einer zuvor bei rund 70 % liegenden Erwartung einer weiteren Erhöhung.",
            ask: [{ label: "Was bedeutet das für die Märkte?", ref: "s:1" }] }
        ]},
        { h: "Liegt ein Regierungsshutdown vor?", items: [
          { tag: "fakt", text: "Nein. Präsident Trump hatte bereits am 02.09.2026 eine Übergangsfinanzierung unterzeichnet, die die Bundesbehörden bis zum 11.12.2026 auf dem bisherigen Niveau finanziert; das Repräsentantenhaus hatte zuvor am 01.09. mit 370:48 Stimmen zugestimmt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die zurückhaltenden Reden zweier ranghoher Fed-Vertreter senkten die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung im Oktober und stützten damit Aktien (Meldung 1); gleichzeitig meldeten einzelne Quellen für die US-Rendite am selben Tag ein mehrjähriges Hoch (Meldung 3) – ein von Beobachtern als ungewöhnlich bezeichnetes Nebeneinander." }
        ]}
      ],
      reaction: "Die gesunkene Zinserwartung stützte Aktien (Meldung 1); die gleichzeitig laut einzelnen Quellen gestiegene US-Rendite wird in Meldung 3 näher eingeordnet.",
      terms: ["leitzins", "rendite", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "Federal Reserve: Speech by Vice Chair Jefferson, 01.10.2026", url: "https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm" },
        { title: "BIS: Rede von John Williams, 05.10.2026 („Unwavering dedication”)", url: "https://www.bis.org/speeches/20261005-unwavering-dedication" },
        { title: "bworldonline.com/Bloomberg: Top Fed deputies step in to give markets a clear message", url: "https://bworldonline.com/bloomberg/2026/10/04/784184/top-fed-deputies-step-in-to-give-markets-a-clear-message" },
        { title: "Breaking Defense: House passes funding stopgap, averting government shutdown in October", url: "https://breakingdefense.com/2026/09/house-passes-funding-stopgap-averting-government-shutdown-in-october/" }
      ]
    },

    /* 3 US-/BUND-RENDITE */
    {
      id: "renditen-ust10-bund10-hoch-trotz-fed-06-10", cats: ["markets"], when: "Stand Mo 05.10.2026",
      headline: "US-Rendite steigt laut einer Quelle auf frisches Mehrjahreshoch, trotz zurückhaltender Fed-Reden",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen notierte am Montag je nach Quelle zwischen rund 5,25 % (kaum verändert) und 5,31 % – eine Quelle (CNBC) berichtete von einem frischen Hoch seit 2002. Die Bund-Rendite lag laut einer Quelle bei rund 3,63 % und damit nahe ihrem höchsten Stand seit 2011, eine andere, möglicherweise nicht tagesaktuelle Quelle nannte weiterhin rund 3,47 %. Ungewöhnlich daran: Beide Bewegungen fielen in denselben Tag, an dem sich ranghohe Fed-Vertreter zurückhaltend zu einer weiteren Zinserhöhung äußerten (Meldung 2).",
      blocks: [
        { h: "Wie hat sich die US-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Eine Quelle (CNBC) berichtete für Montag von einem frischen Hoch der US-10-Jahres-Rendite seit 2002 (rund 5,31 %); andere Quellen nennen rund 5,25 % und damit praktisch unverändert gegenüber Freitag. Eine eindeutig bestätigte Schlusszahl lag zum Redaktionsschluss nicht vor.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Dieselbe Quelle beschreibt die Schwäche am US-Anleihemarkt als von „mehr als Geldpolitik” getrieben, ohne weitere Details zu den zusätzlichen Faktoren zu nennen." }
        ]},
        { h: "Wie hat sich die Bund-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Eine Quelle nennt für die Bund-Rendite Anfang Oktober rund 3,63 % – nahe dem seit April 2011 höchsten Stand –, eine andere, möglicherweise veraltete Quelle weiterhin rund 3,47 %.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,6 %?", ref: "n:bund10" }] }
        ]},
        { h: "Warum ist das ungewöhnlich?", items: [
          { tag: "einordnung", text: "Üblicherweise lassen zurückhaltende Zentralbank-Reden wie die von Jefferson und Williams (Meldung 2) Anleiherenditen eher sinken, weil Anleger eine weniger restriktive Geldpolitik erwarten. Dass beide Renditen laut einzelnen Quellen trotzdem stiegen, bezeichnen Marktbeobachter als bemerkenswert, ohne dafür einen eindeutigen Einzelgrund zu nennen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Eine dauerhaft höhere Bund-Rendite würde neue deutsche Staatsschulden verteuern – ein Thema, das auch in der Debatte über die Rentenlast im Bundeshaushalt eine Rolle spielt (Meldung 6)." }
        ]}
      ],
      reaction: "Die gestiegenen Renditen fielen zusammen mit den stützenden Aktienmärkten (Meldung 1) und den zurückhaltenden Fed-Reden (Meldung 2); sie bleiben Hintergrund für die Debatte über Zinskosten des Staates (Meldung 6).",
      terms: ["rendite", "basispunkt"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:debt-brake"],
      sources: [
        { title: "CNBC: 10-year Treasury yield rises to fresh 2002 high to start the week", url: "https://www.cnbc.com/2026/10/05/treasury-yields-bonds-fed-rates.html" },
        { title: "TradingEconomics: US 10 Year Treasury Note Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
        { title: "Statista: Rendite zehnjähriger Staatsanleihen in Deutschland", url: "https://de.statista.com/statistik/daten/studie/238018/umfrage/rendite-zehnjaehriger-staatsanleihen-in-deutschland-nach-monaten/" },
        { title: "marketscreener: Anleihen Deutschland 10 Jahre", url: "https://www.marketscreener.com/quote/interest/GERMANY-10Y-CASH-146043340/" }
      ]
    },

    /* 4 EZB/LAGARDE-NACHFOLGE/NAGEL */
    {
      id: "ezb-lagarde-nachfolge-nagel-06-10", cats: ["economy"], when: "EZB-Zinsniveau seit 16.09.2026 · Lagarde-Ankündigung 18.09./30.09. · Giorgetti-Äußerung 02.10. · Nagel-Rede 05.10. · nächste EZB-Sitzung 28./29.10.2026",
      headline: "EZB sucht Nachfolge für Schnabel im Direktorium, italienischer Finanzminister drängt Lagarde zu Klarheit über eigene Zukunft",
      sec30: "Die EZB hatte ihre Leitzinsen am 10.09.2026 (wirksam ab 16.09.) um 25 Basispunkte angehoben, den Einlagensatz auf 2,50 %; als Grund nannte sie anhaltenden Inflationsdruck durch den Nahost-Konflikt. EZB-Präsidentin Lagarde hatte am 18.09. erklärt, 2027 die EZB verlassen zu wollen, ohne genaues Datum, und am 30.09. einen früheren Abgang nicht ausgeschlossen; Italiens Finanzminister Giorgetti forderte sie am 02.10. zu mehr Klarheit auf. Die EZB begann am 01.10. die Suche nach einer Nachfolge für Isabel Schnabel im Direktorium. Bundesbank-Präsident Joachim Nagel sagte am 05.10. in einer Rede in Sorrent, es gebe bislang keine klaren Anzeichen dafür, dass sich die Inflation auf die Lohnsetzung ausgewirkt habe, und bezifferte das deutsche Wirtschaftswachstum 2026 auf real rund 1 %.",
      blocks: [
        { h: "Wie ist der aktuelle EZB-Leitzins, und warum wurde er angehoben?", items: [
          { tag: "fakt", text: "Die EZB hob ihre drei Leitzinsen am 10.09.2026 um jeweils 25 Basispunkte an (Einlagenfazilität auf 2,50 %, Hauptrefinanzierungssatz auf 2,65 %, Spitzenrefinanzierungsfazilität auf 2,90 %), wirksam seit 16.09.2026. Als Begründung verwies die EZB auf anhaltenden Inflationsdruck durch den Nahost-Konflikt; die Inflationsprojektion für 2026 liegt bei 3,0 %.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was ist der Stand bei Lagardes Zukunft?", items: [
          { tag: "fakt", text: "EZB-Präsidentin Christine Lagarde hatte am 18.09.2026 erklärt, sie wolle 2027 die EZB verlassen, ohne ein genaues Datum zu nennen; am 30.09. schloss sie einen früheren Abgang wenige Monate vor Ende ihrer Amtszeit nicht aus." },
          { tag: "position", text: "Italiens Finanzminister Giancarlo Giorgetti forderte Lagarde am 02.10.2026 auf, Klarheit über ihre weitere Amtszeit zu schaffen." },
          { tag: "fakt", text: "Die EZB begann am 01.10.2026 die Suche nach einer Nachfolge für Isabel Schnabel im Direktorium – ein erster Schritt in Richtung der Zeit nach Lagardes Amtszeit." }
        ]},
        { h: "Was sagte Bundesbank-Präsident Nagel?", items: [
          { tag: "position", text: "Bundesbank-Präsident Joachim Nagel erklärte am 05.10.2026 in einer Rede in Sorrent, es gebe bislang keine klaren Anzeichen dafür, dass sich die durch den Energieschock getriebene Inflation auf die Lohnsetzung ausgewirkt habe." },
          { tag: "position", text: "Nagel bezifferte Anfang Oktober 2026 das reale deutsche Wirtschaftswachstum für 2026 auf rund 1 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Debatte um Lagardes Nachfolge und die Suche nach einem neuen Direktoriumsmitglied fällt in eine Phase, in der die EZB nach der Zinserhöhung vom September und der über dem Konsens liegenden Eurozone-Inflation vom 02.10. weiterhin eine vorsichtige Linie fährt; die nächste Zinsentscheidung fällt am 28./29.10.2026." }
        ]}
      ],
      reaction: "Die EZB-Linie bleibt eng mit der Eurozone-Inflation und dem durch den Nahost-Konflikt getriebenen Energiepreis verknüpft (Meldung 9, Meldung 15); parallel hält auch die Fed ihren Leitzins nach der Septembererhöhung vorerst für angemessen (Meldung 2).",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "EZB: Pressemitteilung zur Zinsentscheidung, 10.09.2026", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260910~314e508016.en.html" },
        { title: "Bloomberg: Lagarde Pressed by Italy's Giorgetti for Guidance on ECB Tenure", url: "https://www.bloomberg.com/news/articles/2026-10-02/lagarde-should-give-clarity-on-her-future-at-ecb-giorgetti-says" },
        { title: "Bloomberg: ECB Seeks Schnabel Successor in First Move to Post-Lagarde Era", url: "https://www.bloomberg.com/news/articles/2026-10-01/ecb-seeks-schnabel-successor-in-first-move-to-post-lagarde-era" },
        { title: "FXStreet: Nagel – keine klaren Anzeichen für Lohn-Preis-Wirkung, 05.10.2026", url: "https://www.fxstreet.de.com/news/nagel-von-der-ezb-keine-klaren-anzeichen-dafur-dass-sich-die-inflation-auf-die-preis-und-lohnsetzung-ausgewirkt-hat-202610050913" },
        { title: "ad-hoc-news.de: Wachstum 2026 – Bundesbankpräsident Nagel erwartet rund ein Prozent", url: "https://www.ad-hoc-news.de/wirtschaft/wachstum-2026-bundesbankpraesident-nagel-erwartet-rund-ein-prozent/70219465" }
      ]
    },

    /* 5 GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-wochenstart-06-10", cats: ["markets"], when: "Stand Mo/Di 05.–06.10.2026",
      headline: "Gold pendelt nahe 4.130 Dollar, Bitcoin leicht fester, Euro gibt zum Dollar weiter nach",
      sec30: "Gold notierte zu Wochenbeginn bei rund 4.128 bis 4.153 Dollar je Feinunze – kaum verändert gegenüber Freitag und weiterhin rund 26 % unter dem 2026er-Rekordhoch von rund 5.608 Dollar (Ende Januar 2026). Bitcoin bewegte sich leicht höher bei rund 85.000 bis 86.200 Dollar, nach rund 84.700 bis 84.900 Dollar am Wochenende. Der Euro gab laut EZB-Referenzkurs auf 1,1204 zum Dollar nach (−0,46 % gegenüber Freitag). Die Bund-Rendite notierte laut einer Quelle nahe ihrem höchsten Stand seit 2011 (Meldung 3).",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "fakt", text: "Gold notierte am Montag/Dienstag bei rund 4.128 bis 4.153 Dollar je Feinunze – kaum verändert gegenüber Freitag und rund 26 % unter dem 2026er-Rekordhoch von rund 5.608 Dollar (Ende Januar 2026).",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Dass Gold trotz der nachlassenden Erwartung einer Fed-Zinserhöhung kaum zulegte, erklären Marktbeobachter mit einem gegenläufig wirkenden, insgesamt festeren Dollar und leicht gestiegenen US-Renditen (Meldung 3)." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Montag/Dienstag bei rund 85.000 bis 86.200 Dollar – leicht höher als am Wochenende (rund 84.700 bis 84.900 Dollar); ein genauer Einzelgrund für die Bewegung wird in den Quellen nicht genannt.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Laut EZB-Referenzkurs stand EUR/USD am Montag bei 1,1204 – ein Rückgang von 0,46 % gegenüber Freitag, 3,6 % über den vergangenen Monat und 4,3 % über die vergangenen 12 Monate.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold, Bitcoin und Euro reagierten zu Wochenbeginn unterschiedlich auf dieselbe Nachrichtenlage: Gold blieb nahezu unverändert, Bitcoin legte leicht zu, der Euro gab nach. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die gleichzeitig gestiegenen US- und Bund-Renditen (Meldung 3) gelten grundsätzlich als bremsender Faktor für zinslose Anlagen wie Gold.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "CNBC: Gold gains as October Fed rate hike prospects fade", url: "https://www.cnbc.com/2026/10/05/gold-gains-as-october-fed-rate-hike-prospects-fade.html" },
        { title: "CNBC Select: The price of gold today, Oct. 5, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-5-2026/" },
        { title: "Coinbase: Bitcoin (BTC) Price USD Today", url: "https://www.coinbase.com/price/bitcoin" },
        { title: "EZB: Euro foreign exchange reference rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" }
      ]
    },

    /* 6 KOALITIONSAUSSCHUSS RENTE */
    {
      id: "koalitionsausschuss-rente-merz-umfragen-06-10", cats: ["germany"], when: "Koalitionsausschuss angesetzt für Mi 07.10.2026 · Merz-Aussage 05.10. · Umfragen Anfang Oktober",
      headline: "Koalitionsausschuss zu Rente und Pflege für Mittwoch angesetzt, Bundeskanzler Merz ruft zum Zusammenhalt auf",
      sec30: "Der Koalitionsausschuss zu Rente, Pflege und Gesundheit ist für Mittwoch, 07.10.2026, angesetzt. Bundeskanzler Friedrich Merz rief am 05.10. im ARD-„Bericht aus Berlin” zum Zusammenhalt der Koalition auf und bezeichnete die vorliegenden Rentenvorschläge als „so gut ausgearbeitet, wie wir das in den letzten 30 Jahren in Deutschland nicht gehabt haben”; er forderte Entscheidungen bis Jahresende. 18 Abgeordnete der Jungen Gruppe der Unionsfraktion kritisieren laut Berichten den SPD-Rentenvorschlag von Arbeitsministerin Bärbel Bas wegen zusätzlicher Kosten von rund 120 Mrd. Euro zwischen 2032 und 2040; die SPD-Fraktion will laut Berichten an der bestehenden Regelung zur abschlagsfreien Rente nach 45 Beitragsjahren festhalten oder zumindest eine mehrjährige Übergangsfrist durchsetzen. Umfragen Anfang Oktober zeigen uneinheitlich einen Rückgang der Union auf rund 18 bis 20 % und einen Anstieg der AfD auf rund 27 bis 30 %.",
      blocks: [
        { h: "Was steht beim Koalitionsausschuss am 7.10. zur Debatte?", items: [
          { tag: "fakt", text: "Der Koalitionsausschuss zu Rente, Pflege und Gesundheit ist für Mittwoch, 07.10.2026, angesetzt; laut Berichten könnten zusätzlich Themen wie Steuern, Arbeitsmarkt und Elterngeld zur Sprache kommen.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Bundeskanzler Friedrich Merz sagte am 05.10.2026 im ARD-„Bericht aus Berlin”: „Wir müssen in der Regierung zusammenbleiben. Wir müssen das Land nach vorne bringen.” Er bezeichnete die Rentenvorschläge als „so gut ausgearbeitet auf dem Tisch, wie wir das in den letzten 30 Jahren in Deutschland nicht gehabt haben”, und forderte Entscheidungen bis Jahresende." }
        ]},
        { h: "Was wird zur Rentenreform konkret diskutiert?", items: [
          { tag: "unbestaetigt", text: "Arbeitsministerin Bärbel Bas (SPD) soll im Oktober einen Gesetzentwurf vorlegen; Berichten zufolge sieht ihr Vorschlag unter anderem eine mehrjährige Übergangsfrist für die bestehende 45-Jahre-Regelung zur abschlagsfreien Rente vor. Ein formaler Gesetzentwurf lag zum Recherchezeitpunkt nicht vor." }
        ]},
        { h: "Wer unterstützt die Reformlinie, und womit?", items: [
          { tag: "position", text: "JU-Chef Johannes Winkel drängt darauf, die Rentenreform „wie auf vier politischen Ebenen vereinbart” zügig umzusetzen und warnt davor, von dem vereinbarten Reformpaket abzurücken." }
        ]},
        { h: "Wer kritisiert die Reformlinie, und womit?", items: [
          { tag: "unbestaetigt", text: "18 Abgeordnete der Jungen Gruppe der Unionsfraktion sollen laut Berichten signalisiert haben, dem Bas-Vorschlag in der vorliegenden Form nicht zustimmen zu wollen; als Kernkritik werden zusätzliche Kosten von rund 120 Mrd. Euro zwischen 2032 und 2040 genannt." },
          { tag: "position", text: "SPD-Fraktionsgeschäftsführer Dirk Wiese erklärte, öffentliche Forderungen oder Ultimaten erschwerten nur die Lösungssuche; unterschiedlicher Änderungsbedarf bei weitreichenden Reformvorhaben sei normal." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "unbestaetigt", text: "Verschiedene Umfragen Anfang Oktober 2026 zeigen unterschiedliche, aber in der Tendenz übereinstimmende Werte: Die Union liegt je nach Institut bei rund 18 bis 20 %, die AfD bei rund 27 bis 30 %. Einzelne Berechnungen kommen zu dem Schluss, dass die amtierende Koalition aus Union und SPD damit rechnerisch keine Mehrheit mehr hätte; die genauen Werte schwanken deutlich je nach Institut und Erhebungszeitraum." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Rentenreform bleibt der zentrale ungelöste Streitpunkt zwischen Junger Gruppe/Union und SPD; der Koalitionsausschuss am 7.10. fällt auf denselben Tag wie die dritte Berliner Sondierungsrunde (Meldung 7) und den Jahrestag des Hamas-Terroranschlags von 2023." }
        ]}
      ],
      reaction: "Die ungelöste Rentenfrage läuft parallel zur Debatte über steigende Zinskosten des Staates (Meldung 3) und zu den Berliner Sondierungsgesprächen (Meldung 7), deren dritte Runde auf denselben Tag fällt.",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "Tagesspiegel: Pflege, Rente, Haushalt – warum es bei den Reformen gerade ganz besonders hakt", url: "https://www.tagesspiegel.de/politik/pflege-rente-haushalt-warum-es-bei-den-reformen-gerade-ganz-besonders-hakt-16102424.html" },
        { title: "Ariva/dpa: ROUNDUP – Merz: „Wir müssen in der Regierung zusammenbleiben”", url: "https://www.ariva.de/news/roundup-merz-wir-muessen-in-der-regierung-zusammenbleiben-12158112" },
        { title: "ad-hoc-news.de: JU-Chef Winkel dringt auf Rentenreform noch in diesem Jahr", url: "https://www.ad-hoc-news.de/politik/die-junge-union-dringt-auf-eine-schnelle-rentenreform-noch-in-diesem-jahr/70061467" },
        { title: "ad-hoc-news.de: Koalitionskrise Rente – SPD fordert Rente mit 63 zurück", url: "https://www.ad-hoc-news.de/wirtschaft/koalitionskrise-rente-spd-fordert-rente-mit-63-zurueck/70157306" },
        { title: "t-online: Schlappe für Merz – Union sackt in neuer Sonntagsfrage ab", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101464462/sonntagsfrage-afd-erreicht-30-prozent-cdu-csu-verlieren.html" }
      ]
    },

    /* 7 BERLIN SONDIERUNG/HAUSHALT 2027 */
    {
      id: "berlin-sondierung-dritte-runde-haushaltsausschuss-06-10", cats: ["germany"], when: "3. Sondierungsrunde angesetzt für Mi 07.10.2026 · Haushaltsausschuss-Beratungen laufend seit 23.09.",
      headline: "Dritte Berliner Sondierungsrunde für Mittwoch angesetzt, Haushaltsausschuss berät weiter über Etat 2027",
      sec30: "Die dritte Sondierungsrunde zwischen Linke, SPD und Grünen in Berlin ist für Mittwoch, 07.10.2026, vereinbart – denselben Tag wie der bundespolitische Koalitionsausschuss zu Rente und Pflege (Meldung 6) und den Jahrestag des Hamas-Terroranschlags von 2023. Zentraler Streitpunkt bleibt weiterhin der Umgang mit Antisemitismus-Vorwürfen und organisierter Kriminalität; eine Einigung lag nach der zweiten Runde am 03.10. nicht vor. Der Haushaltsausschuss des Bundestags unter Vorsitz von Lisa Paus (Grüne) berät seit dem 23.09.2026 in Einzelsitzungen über den Etat 2027 (Kernhaushalt-Ausgaben 555,4 Mrd. Euro, Nettokreditaufnahme steigt von 97,96 auf 118,73 Mrd. Euro); diskutiert wird unter anderem die im Regierungsentwurf nicht berücksichtigte Personalausstattung von Bundesrat, Bundesverfassungsgericht und Bundesrechnungshof. Die Bereinigungssitzung ist für den 12.11.2026 angesetzt, die Schlussabstimmung für den 27.11.2026.",
      blocks: [
        { h: "Was ist der Stand der Berliner Sondierungsgespräche?", items: [
          { tag: "fakt", text: "Die Parteivorsitzenden von Linke, Grünen und SPD führten am 03.10.2026 ein zweites Sondierungsgespräch in Berlin, erneut ohne Einigung zum Umgang mit Antisemitismus-Vorwürfen und organisierter Kriminalität. Eine dritte Runde ist für Mittwoch, 07.10.2026, vereinbart.",
            ask: [{ label: "Was braucht eine Koalition im Abgeordnetenhaus?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Welche Positionen vertreten die beteiligten Parteien?", items: [
          { tag: "fakt", text: "Grüne und SPD machen eine klare Positionierung der Linken zu Antisemitismus-Vorwürfen und organisierter Kriminalität weiterhin zur Vorbedingung für formelle Koalitionsverhandlungen.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] },
          { tag: "einordnung", text: "Dass die dritte Runde auf denselben Tag fällt wie Gedenkveranstaltungen zum Jahrestag des Hamas-Terroranschlags von 2023, erhöht laut Kommentaren einzelner Zeitungen den politischen Erwartungsdruck auf alle Beteiligten." }
        ]},
        { h: "Wie ist der Stand beim Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss berät seit der Einbringung durch Finanzminister Lars Klingbeil am 08.09.2026 in zehn geplanten Einzelsitzungen über den Etat 2027 (Kernhaushalt-Ausgaben 555,4 Mrd. Euro, +5,9 % gegenüber Vorjahr; Nettokreditaufnahme steigt von 97,96 auf 118,73 Mrd. Euro); diskutiert wird unter anderem die im Entwurf nicht berücksichtigte Personalausstattung von Bundesrat, Bundesverfassungsgericht und Bundesrechnungshof. Die Bereinigungssitzung ist für den 12.11.2026 angesetzt, die Schlussabstimmung im Plenum für den 27.11.2026.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Während Haushalt 2027 nach festem parlamentarischem Zeitplan läuft, bleiben sowohl die Berliner Koalitionsbildung als auch die bundespolitische Rentenreform (Meldung 6) ohne Einigung; beide Termine fallen auf denselben Tag, den 7.10.2026." }
        ]}
      ],
      reaction: "Die Debatte läuft parallel zur bundespolitischen Diskussion über Rente und Pflege (Meldung 6), deren Koalitionsausschuss auf denselben Tag fällt wie die dritte Berliner Sondierungsrunde.",
      terms: ["koalition", "schuldenbremse"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics"],
      sources: [
        { title: "Tagesspiegel: Durchbruch ausgerechnet am 7. Oktober? Die Verantwortung für Grüne und SPD wird immer größer", url: "https://www.tagesspiegel.de/berlin/durchbruch-ausgerechnet-am-7-oktober-die-verantwortung-fur-grune-und-spd-wird-immer-grosser-16123309.html" },
        { title: "Tagesspiegel: Vorgespräche gehen in dritte Runde", url: "https://www.tagesspiegel.de/berlin/vorgesprache-gehen-in-dritte-runde-linke-grune-und-spd-bewegen-sich-in-berlin-zaghaft-aufeinander-zu-16122162.html" },
        { title: "ZDFheute: Berlin – Vorgespräch von Linken, Grünen und SPD ohne Ergebnis", url: "https://www.zdfheute.de/politik/deutschland/berlin-linke-gruene-spd-gespraech-koalition-wahl-sondierung-100.html" },
        { title: "Bundestag.de: Haushalt 2027 – Personalausstattung im Fokus", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1217308" },
        { title: "Bundestag.de: Der Weg zum Bundeshaushalt 2027 vom Entwurf zum Beschluss", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" }
      ]
    },

    /* 8 UKRAINE/MERZ-BESUCH */
    {
      id: "ukraine-merz-besuch-bruecken-trilaterale-gespraeche-06-10", cats: ["world", "geo"], when: "Merz-Besuch Kyjiw 04.10.2026 · Brückenangriffe 02.–04.10. · US-Vorschlag trilaterale Gespräche 04.10. · Südkorea-Streit andauernd",
      headline: "Bundeskanzler Merz besucht während Luftalarm Kyjiw, USA schlagen trilaterale Gespräche bis Ende Oktober vor",
      sec30: "Bundeskanzler Friedrich Merz reiste am 04.10.2026 unangekündigt und begleitet von Luftalarm und Explosionen nach Kyjiw, traf Präsident Selenskyj unter anderem an der von einer russischen Drohne getroffenen Akademie der Wissenschaften und sagte 1,3 Mrd. Euro Hilfe sowie 350 Mio. Euro Energiehilfe vor dem Winter zu. Zuvor hatte Russland die Kyjiwer Südbrücke binnen 24 Stunden mehrfach und am 03./04.10. zusätzlich die Nordbrücke getroffen. Laut Selenskyj schlugen die USA am 04.10. trilaterale technische Gespräche zwischen den USA, der Ukraine und Russland bis Ende Oktober vor. Im Streit mit Südkorea um überstellte nordkoreanische Kriegsgefangene wirft Präsident Lee Jae-myung der Ukraine weiterhin vor, ihn „zum Lügner” gemacht zu haben und fordert eine öffentliche Entschuldigung.",
      blocks: [
        { h: "Was hat Bundeskanzler Merz in Kyjiw angekündigt?", items: [
          { tag: "fakt", text: "Bundeskanzler Friedrich Merz reiste am 04.10.2026 unangekündigt nach Kyjiw und traf Präsident Selenskyj unter anderem an der von einer russischen Drohne getroffenen Akademie der Wissenschaften; Deutschland sagte ein neues Hilfspaket über 1,3 Mrd. Euro sowie 350 Mio. Euro Energiehilfe vor dem Winter zu.",
            ask: [{ label: "Welche deutschen Rüstungsthemen hängen damit zusammen?", ref: "s:11" }] },
          { tag: "position", text: "Merz bezeichnete die russischen Angriffe als „barbarisch” und „tägliche Kriegsverbrechen” und warnte, Russlands „Kriegsmaschinerie” könnte sich „früher oder später” auch gegen andere richten." }
        ]},
        { h: "Was ist in Kyjiw bei den Brückenangriffen passiert?", items: [
          { tag: "fakt", text: "Die Kyjiwer Südbrücke wurde laut Berichten binnen 24 Stunden mehrfach getroffen; am 03./04.10.2026 wurde zusätzlich die Nordbrücke beschädigt. Bürgermeister Vitali Klitschko bestätigte Schäden an Fahrbahn und Oberleitungen der Trolleybusse; mittlerweile sind nach Angaben örtlicher Stellen drei von sechs Dnipro-Straßenbrücken in Kyjiw ganz oder teilweise gesperrt." }
        ]},
        { h: "Was ist der Stand bei den Verhandlungen?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj teilte am 04.10.2026 mit, die US-Regierung habe trilaterale Gespräche auf technischer Ebene zwischen den USA, der Ukraine und Russland bis Ende Oktober vorgeschlagen; Ukraine signalisierte Offenheit, nannte aber keine Bestätigung, ob Russland den Vorschlag bereits erhalten oder akzeptiert habe." }
        ]},
        { h: "Was ist der Stand im Streit mit Südkorea?", items: [
          { tag: "position", text: "Südkoreas Präsident Lee Jae-myung bekräftigte am 02.10.2026 seine Kritik, die Ukraine habe ihn durch die Offenlegung der vertraulichen Überstellung zweier gefangener nordkoreanischer Soldaten „zum Lügner” gemacht, und fordert weiterhin eine öffentliche Entschuldigung." },
          { tag: "position", text: "Der ukrainische Außenminister Andrii Sybiha bezeichnete den Vorgang als „diplomatisches Missverständnis”; eine öffentliche Entschuldigung ist nach Stand der Recherche nicht erfolgt." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Das deutsche Hilfspaket und die anhaltenden Angriffe auf die Infrastruktur halten laut Marktbeobachtern die Nachfrage nach westlicher Rüstungsunterstützung hoch (Meldung 11)." }
        ]}
      ],
      reaction: "Das deutsche Hilfspaket und die anhaltenden Angriffe bleiben Hintergrund für die Rüstungsthemen (Meldung 10, Meldung 11); die Lage am Golf wird gesondert in Meldung 9 eingeordnet.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Kyiv Independent: German Chancellor Merz arrives in Kyiv, pledges further support for Ukraine", url: "https://kyivindependent.com/german-chancellor-merz-arrives-in-kyiv-pledges-further-support-for-ukraine/" },
        { title: "Al Jazeera: Russian strike hits Kyiv bridge as German chancellor visits Ukraine", url: "https://www.aljazeera.com/news/2026/10/4/russian-strike-hits-kyiv-bridge-as-german-chancellor-visits-ukraine" },
        { title: "CNN: Russia strikes another major bridge in Kyiv as attacks on Ukrainian capital escalate", url: "https://edition.cnn.com/2026/10/03/europe/russia-strikes-northern-southern-bridges-kyiv-attacks-intl" },
        { title: "Kyiv Independent: US proposes trilateral talks with Russia, Ukraine by end of October", url: "https://kyivindependent.com/us-proposes-trilateral-talks-with-russia-ukraine-by-end-of-october-zelensky-says/" },
        { title: "CNBC: South Korea's Lee warns of 'measures' against Ukraine, demands apology", url: "https://www.cnbc.com/2026/10/02/south-korea-ukraine-prisoner-north-korea-.html" }
      ]
    },

    /* 9 IRAN/HORMUZ/IRAK-OELUMLEITUNG */
    {
      id: "iran-hormuz-us-truppenaufbau-irak-oelumleitung-06-10", cats: ["world", "geo"], when: "US-Truppenverlegung laufend · Irak-Ölumleitung ab 04.10. · Tanker-Vorfälle Anfang Oktober · Taiwan F-16-Lieferung 02.10.",
      headline: "USA verstärken Truppenpräsenz am Golf weiter, Irak leitet Ölexporte erstmals seit Jahrzehnten an Hormus vorbei",
      sec30: "Die USA verlegen eine dritte Flugzeugträgerkampfgruppe (Theodore Roosevelt) sowie die Makin-Island-Einsatzgruppe mit rund 2.000 Marineinfanteristen in die Golfregion; die gesamte US-Präsenz könnte bis Ende Oktober auf mehr als 20.000 Personen steigen. Die Straße von Hormus bleibt für den regulären Schiffsverkehr weitgehend blockiert; der Irak leitete am 04.10.2026 erstmals seit Jahrzehnten einen Teil seiner Ölexporte an Hormus vorbei um, weil der Konflikt die Ausfuhren abschnürt. Irans Parlamentspräsident Ghalibaf besteht darauf, dass die Straße gesperrt bleibt, bis die USA sieben im Juni formulierte Bedingungen erfüllen; Irans Außenminister erklärte, Teheran sei „vorbereiteter als zuvor”, verfolge aber weiterhin auch Friedensverhandlungen. Separat lieferten die USA am 02.10. zwei weitere F-16V-Kampfjets an Taiwan.",
      blocks: [
        { h: "Warum ist die Lage an der Straße von Hormus wichtig?", items: [
          { tag: "einordnung", text: "Durch die Straße von Hormus läuft nach Angaben von Marktbeobachtern ein großer Teil des weltweit gehandelten Öls. Eine Deeskalation oder weitere Eskalation dort wirkt sich direkt auf die globalen Energiepreise aus (Meldung 15).",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wie ist der aktuelle militärische Stand?", items: [
          { tag: "fakt", text: "Die USA verlegen eine dritte Flugzeugträgerkampfgruppe (USS Theodore Roosevelt) sowie die Makin-Island-Einsatzgruppe mit rund 2.000 Marineinfanteristen in die Golfregion; die gesamte US-Truppenpräsenz könnte bis Ende Oktober 2026 auf mehr als 20.000 Personen steigen." }
        ]},
        { h: "Welche neuen wirtschaftlichen Auswirkungen gibt es?", items: [
          { tag: "fakt", text: "Der Irak leitete am 04.10.2026 erstmals seit Jahrzehnten einen Teil seiner Ölexporte an der Straße von Hormus vorbei um, weil der Konflikt die regulären Ausfuhren abschnürt.",
            ask: [{ label: "Wie wirkt sich das auf den Ölpreis aus?", ref: "n:brent" }] },
          { tag: "unbestaetigt", text: "Mehrere Tanker-Vorfälle wurden Anfang Oktober von der britischen Marinebehörde UKMTO gemeldet; nach Angaben der iranstaatsnahen Agentur Fars – einer Position der Konfliktpartei, nicht unabhängig bestätigt – habe die Iranische Revolutionsgarde binnen fünf Tagen mehrere Öltanker angegriffen." }
        ]},
        { h: "Welche Positionen vertreten die Konfliktparteien?", items: [
          { tag: "position", text: "Irans Parlamentspräsident Mohammad Bagher Ghalibaf besteht darauf, dass die Straße von Hormus geschlossen bleibt, bis die USA sieben im Juni formulierte Bedingungen erfüllen." },
          { tag: "position", text: "Irans Außenminister erklärte, Teheran sei im Falle einer militärischen Eskalation durch die USA „vorbereiteter als zuvor”, verfolge aber parallel weiterhin Friedensverhandlungen." }
        ]},
        { h: "Was ist der Stand bei Taiwan?", items: [
          { tag: "fakt", text: "Die USA lieferten am 02.10.2026 zwei weitere F-16V-Kampfjets an Taiwan, Teil eines rund 8 Mrd. Dollar schweren Vertrags über 66 Maschinen aus einer früheren Amtszeit Trumps." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Kette von einem geopolitischen Konflikt über den Ölpreis bis zu Zinsen und Verbrauchern lässt sich Schritt für Schritt nachvollziehen.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Die anhaltende Störung der Hormus-Schifffahrt bleibt Hintergrund für den Ölpreis und die deutsche Energieversorgung (Meldung 15) sowie für die allgemeine Risikoprämie an den Märkten (Meldung 3, Meldung 5).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "GlobalSecurity.org: Iran War 2026 – Day 220 Update", url: "https://www.globalsecurity.org/military/ops/iran-war-oprep.htm" },
        { title: "Washington Times: Iranian leaders focus on diplomatic talks as U.S. adds more military muscle", url: "https://washingtontimes.com/news/2026/oct/4/iranian-leaders-focus-diplomatic-talks-us-adds-military-muscle" },
        { title: "The National: Iraq transports its oil past Hormuz for first time in decades as war with Iran chokes exports", url: "https://www.thenationalnews.com/business/energy/2026/10/04/iraq-transports-its-oil-past-hormuz-for-first-time-in-decades-as-war-with-iran-chokes-exports/" },
        { title: "Al Jazeera: US delivers F-16V fighter jets to Taiwan as island eyes threat from China", url: "https://www.aljazeera.com/news/2026/10/2/us-delivers-f-16v-fighter-jets-to-taiwan-as-island-eyes-threat-from-china" }
      ]
    },

    /* 10 RHEINMETALL/RENK/HENSOLDT */
    {
      id: "rheinmetall-renk-hensoldt-auftraege-06-10", cats: ["defence"], when: "Insiderkäufe 29.09./02.10. · US-Auftrag/Satellitenstart Anfang Oktober · Hensoldt-Auftrag Oktober",
      headline: "Rheinmetall erhält neuen US-Auftrag und startet ersten Überwachungssatelliten, Renk bleibt unter Druck, Hensoldt gewinnt Sensorauftrag",
      sec30: "Die Rheinmetall-Aktie notierte am Montag je nach Handelsplatz uneinheitlich zwischen rund 963 und 979 Euro; CEO Papperger und die einem Aufsichtsratsmitglied nahestehende Sara-Georgi-Stiftung hatten zuvor (29.09./02.10.) eigene Aktien gekauft. Rheinmetall erhielt zudem einen neuen US-Auftrag über rund 20,7 Mio. Dollar zur Modernisierung von Waffenlafetten und startete am 01.10. gemeinsam mit dem italienischen Unternehmen Argotec seinen ersten Überwachungssatelliten per SpaceX-Falcon-9-Rakete. Die Renk-Aktie notierte weiter rund 32 % im Minus seit Jahresbeginn, nächster Bericht am 05.11. Hensoldt gewann einen Sensorauftrag von rund 130 Mio. Euro für die P-8-Poseidon-Seeaufklärungsflotte der Bundeswehr.",
      blocks: [
        { h: "Wie haben sich Rheinmetall, Renk und Hensoldt entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die Rheinmetall-Aktie notierte am Montag, 05.10.2026, je nach Quelle und Handelsplatz unterschiedlich zwischen rund 963 und 979 Euro; eine eindeutige, übereinstimmend bestätigte Schlusszahl lag nicht vor.",
            ask: [{ label: "Was bedeutet ein fallender Aktienkurs trotz hoher Auftragsbestände?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "CEO Armin Papperger kaufte am 29.09.2026 eigene Aktien; am 02.10.2026 erwarb zusätzlich die mit Aufsichtsratsmitglied Andreas Georgi verbundene Sara-Georgi-Stiftung Aktien für rund 238.707 Euro (Durchschnittspreis 954,83 Euro)." },
          { tag: "fakt", text: "Die Renk-Aktie notierte weiterhin deutlich unter Druck, rund 32 % im Minus seit Jahresbeginn; das durchschnittliche Analystenkursziel liegt bei rund 63 Euro, deutlich über dem aktuellen Kurs. Der nächste Quartalsbericht ist für den 05.11.2026 angesetzt." },
          { tag: "fakt", text: "Die Hensoldt-Aktie legte am 02.10.2026 um 4,21 % zu und notierte am 05.10. bei 83,84 Euro." }
        ]},
        { h: "Welche neuen Aufträge gab es bei Rheinmetall?", items: [
          { tag: "fakt", text: "Rheinmetall erhielt einen neuen US-Auftrag über rund 20,7 Mio. Dollar zur Lieferung von 3.104 neuen und zur Modernisierung von 245 bereits ausgelieferten MK93-Lafetten, mit Lieferungen bis Oktober 2027." },
          { tag: "fakt", text: "Am 01.10.2026 startete gemeinsam mit dem italienischen Unternehmen Argotec der erste Rheinmetall-Überwachungssatellit zur luftgestützten Bedrohungsaufklärung per SpaceX-Falcon-9-Rakete vom Vandenberg Space Force Base aus; weitere Satelliten einer Konstellation sind bis 2028 geplant." }
        ]},
        { h: "Welchen neuen Auftrag gewann Hensoldt?", items: [
          { tag: "fakt", text: "Hensoldt erhielt einen Auftrag von rund 130 Mio. Euro zur langfristigen Sensorlieferung für die neue P-8-Poseidon-Seeaufklärungsflotte der Bundeswehr." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die unterschiedliche Kursentwicklung von Rheinmetall (uneinheitlich je Handelsplatz, aber mit neuen Aufträgen und Insiderkäufen), Renk (weiterhin unter Druck) und Hensoldt (mit Kursplus nach neuem Auftrag) zeigt, wie unterschiedlich Anleger die einzelnen deutschen Rüstungswerte derzeit einschätzen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die anhaltenden Angriffe in der Ukraine und das deutsche Hilfspaket (Meldung 8) bleiben Hintergrundfaktor für die Branche; steigende NATO-Verteidigungsausgaben zeigen gegenläufig weiter hohe internationale Nachfrage (Meldung 11).",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "finanznachrichten.de: Rheinmetall Aktie – Insiderkäufe und neuer Vorstoß ins All", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69741134-rheinmetall-aktie-insiderkaeufe-und-neuer-vorstoss-ins-all-424.htm" },
        { title: "esut.de: Erster Rheinmetall-Überwachungssatellit im All", url: "https://esut.de/2026/10/meldungen/space/75488/rheinmetall-ueberwachungssatellit/" },
        { title: "DER AKTIONÄR: Rheinmetall – neuer US-Auftrag", url: "https://www.deraktionaer.de/artikel/aktien/rheinmetall-neuer-us-auftrag-20409819.html" },
        { title: "ad-hoc-news.de: Renk Group Aktie – Kurs kämpft am 52-Wochen-Tief", url: "https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/renk-group-aktie-kurs-kaempft-am-52-wochen-tief/70236787" },
        { title: "wallstreet-online.de: Hensoldt-Aktie mit kräftigem Kursplus", url: "https://www.wallstreet-online.de/nachricht/21467256-beachtet-hensoldt-aktie-kraeftigem-kursplus-02-10-2026" }
      ]
    },

    /* 11 NATO/TKMS/PATRIOT */
    {
      id: "nato-verteidigungsausgaben-tkms-patriot-06-10", cats: ["defence"], when: "NATO-Jahreszahlen 2026 · TKMS-Kooperationen CAE/Seaspan laufend · Patriot-Zusage 25.09. · Japan prüft Lieferung",
      headline: "Europäische NATO-Staaten erhöhen Verteidigungsausgaben zwölftes Jahr in Folge, TKMS-Kanada-Vertrag bleibt offen",
      sec30: "Die europäischen NATO-Mitglieder erhöhten ihre Verteidigungsausgaben 2026 das zwölfte Jahr in Folge; die gesamten NATO-Verteidigungsausgaben übersteigen 2026 erstmals 1,5 Billionen Dollar, die europäischen Ausgaben liegen bei rund 639 Mrd. Dollar. Bis auf Slowenien erreichen inzwischen alle NATO-Staaten das 2014 vereinbarte 2-Prozent-Ziel; das 2025 in Den Haag vereinbarte Fernziel liegt bei 5 % des BIP bis 2035. Beim kanadischen U-Boot-Programm bleibt TKMS seit Juli Vorzugsbieter, ohne unterzeichneten Hauptvertrag; neue Kooperationsvereinbarungen mit dem kanadischen Unternehmen CAE (Training/Simulation) und mit Seaspan Shipyards (Wartung) sowie eine Geheimschutzvereinbarung zwischen Deutschland und Kanada schaffen die Basis für den Austausch sensibler Dokumente vor einer möglichen Bestellung. Bei der Ukraine bleibt die von Trump laut Selenskyj am 25.09. zugesagte Patriot-Produktionslizenz eine politische Zusage ohne unterzeichnetes Abkommen; Japan prüft laut Berichten erneut eine Freigabe zur Lieferung von Patriot-Abfangraketen an die Ukraine.",
      blocks: [
        { h: "Wie haben sich die NATO-Verteidigungsausgaben entwickelt?", items: [
          { tag: "fakt", text: "Die europäischen NATO-Mitglieder erhöhten ihre Verteidigungsausgaben 2026 das zwölfte Jahr in Folge; die gesamten NATO-Verteidigungsausgaben übersteigen 2026 erstmals 1,5 Billionen Dollar, davon rund 639 Mrd. Dollar aus Europa. Mit Ausnahme Sloweniens erreichen inzwischen alle NATO-Staaten das 2014 vereinbarte 2-Prozent-Ziel.",
            ask: [{ label: "Welche deutschen Rüstungsaufträge hängen damit zusammen?", ref: "s:10" }] },
          { tag: "fakt", text: "Das auf dem Den-Haag-Gipfel 2025 vereinbarte Fernziel liegt bei 5 % des BIP bis 2035 (3,5 % Kernverteidigung plus 1,5 % verteidigungsnahe Projekte)." }
        ]},
        { h: "Wie ist der Stand beim TKMS-Auftrag aus Kanada?", items: [
          { tag: "fakt", text: "TKMS ist seit Juli 2026 Vorzugsbieter für die Erneuerung der kanadischen U-Boot-Flotte (bis zu zwölf Boote vom Typ 212CD); TKMS und das kanadische Unternehmen CAE unterzeichneten eine Kooperationsvereinbarung für Trainings- und Simulationslösungen, zudem besteht eine Vereinbarung mit Seaspan Shipyards zum Aufbau kanadischer Wartungskapazitäten. Eine neue Geheimschutzvereinbarung zwischen Deutschland und Kanada schafft die rechtliche Basis für den Austausch sensibler Dokumente.",
            ask: [{ label: "Was bedeutet „Vorzugsbieter”?", ref: "e:nato-target" }] },
          { tag: "unbestaetigt", text: "Ein unterzeichneter Hauptvertrag über die bis zu zwölf U-Boote liegt weiterhin nicht vor." }
        ]},
        { h: "Wie ist der Stand bei der Patriot-Lizenz für die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj hatte am 25.09.2026 erklärt, Trump habe eine „endgültige Entscheidung” getroffen, der Ukraine eine Lizenz zur eigenen Produktion von Patriot-Abfangraketen zu erteilen; eine unabhängige Bestätigung oder ein unterzeichnetes Abkommen liegen weiterhin nicht vor.",
            ask: [{ label: "Was ist dazu der Gesamtkontext?", ref: "s:8" }] },
          { tag: "unbestaetigt", text: "Japan prüft laut Berichten erneut eine interne Freigabe zur Lieferung beziehungsweise zum Verkauf von Patriot-Abfangraketen an die Ukraine; eine Entscheidung lag zum Recherchezeitpunkt nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Steigende NATO-Verteidigungsausgaben und laufende, aber noch nicht final vertraglich abgesicherte Großaufträge wie das kanadische U-Boot-Programm oder die Patriot-Lizenz zeigen zwei unterschiedliche Stadien derselben Entwicklung: wachsende Budgets einerseits, offene Vertragsabschlüsse andererseits." }
        ]}
      ],
      reaction: "Die anhaltende Nachfrage nach westlicher Rüstung (Meldung 8) und die Kursentwicklung deutscher Rüstungswerte (Meldung 10) hängen mit demselben Trend steigender Verteidigungsbudgets zusammen.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "IISS: NATO defence spending – navigating the noise", url: "https://www.iiss.org/online-analysis/military-balance/2026/07/nato-defence-spending-navigating-the-noise/" },
        { title: "TVC News: NATO Europe boosts defence spending for 12th straight year", url: "https://www.tvcnews.tv/nato-europe-boosts-defence-spending-for-12th-straight-year/" },
        { title: "hartpunkt.de: Kanada – TKMS und CAE unterzeichnen Kooperationsvereinbarung", url: "https://www.hartpunkt.de/kanada-tkms-und-cae-unterzeichnen-kooperationsvereinbarung/" },
        { title: "it-boltwise.de: TKMS-Kooperation mit Kanada – Geheimschutz schafft Basis", url: "https://www.it-boltwise.de/tkms-kooperation-mit-kanada-geheimschutz-schafft-basis-fuer-u-boot-deal.html" },
        { title: "euronews: Trump makes 'final decision' to grant Ukraine Patriot licence", url: "https://www.euronews.com/2026/09/25/trump-makes-final-decision-to-grant-ukraine-patriot-license-zelenskyy-says" }
      ]
    },

    /* 12 DEALS: SKYDANCE/GFL/SCHNEIDER-PTC */
    {
      id: "skydance-nyse-gfl-schneider-ptc-06-10", cats: ["deals"], when: "Skydance-Closing/NYSE-Wechsel 06.10.2026 · GFL-Gebote laufend seit 02.10. · Schneider/PTC-Vertrag 05.10.",
      headline: "Skydance Corporation wechselt zur NYSE und schließt WBD-Fusion ab, Schneider Electric kauft PTC für 23,7 Milliarden Dollar",
      sec30: "Der aus der Fusion von Paramount und Warner Bros. Discovery entstandene Konzern hat die Transaktion am 06.10.2026 formal abgeschlossen, firmiert nun als „Skydance Corporation” und wechselte mit seinen Class-B-Aktien von der Nasdaq an die NYSE (neuer Ticker „SKYD”), nachdem ein Bundesrichter am 30.09. den Vergleich mit klagenden US-Bundesstaaten genehmigt hatte; WBD-Aktionäre erhalten rund 31,02 Dollar je Aktie in bar, das Transaktionsvolumen wird mit rund 110 Mrd. Dollar beziffert. Beim Bieterwettstreit um GFL Environmental zwischen den Konsortien KKR/Blackstone/Energy Capital Partners und Brookfield/IFM gibt es weiterhin keine Einigung; Berichten zufolge müssten Gebote im Bereich von rund 50 bis 55 Dollar je Aktie liegen, um Erfolgsaussichten zu haben. Schneider Electric unterzeichnete am 05.10.2026 einen Vertrag zur Übernahme des US-Softwareanbieters PTC für 23,7 Mrd. Dollar in bar (205 Dollar je Aktie, 42,33 % Prämie) – die größte Übernahme in der Unternehmensgeschichte von Schneider Electric.",
      blocks: [
        { h: "Was ist bei Paramount/WBD/Skydance passiert?", items: [
          { tag: "fakt", text: "Der Merger-Vollzug zwischen Paramount Skydance und Warner Bros. Discovery erfolgte am 06.10.2026, nachdem ein Bundesrichter am 30.09.2026 den Vergleich mit den klagenden Generalstaatsanwälten mehrerer US-Bundesstaaten genehmigt hatte. Der Konzern firmiert seitdem als „Skydance Corporation”; die Class-B-Aktien wechselten von der Nasdaq (Ticker „PSKY”) an die NYSE (neuer Ticker „SKYD”).",
            ask: [{ label: "Wie läuft eine solche Fusion typischerweise ab?", ref: "e:ma-steps" }] },
          { tag: "fakt", text: "WBD-Aktionäre erhalten 31 Dollar in bar je Aktie plus einen täglichen Aufschlag seit dem 30.09., was beim Closing am 06.10. rund 31,02 Dollar je Aktie ergibt; das Transaktionsvolumen wird mit rund 110 Mrd. Dollar beziffert." }
        ]},
        { h: "Wie ist der Stand bei GFL Environmental?", items: [
          { tag: "fakt", text: "Zwei Investorenkonsortien – KKR, Blackstone und Energy Capital Partners auf der einen, Brookfield Asset Management und IFM Investors auf der anderen Seite – bieten weiterhin um eine Übernahme von GFL Environmental; ein im Juli eingesetzter Sonderausschuss prüft die Angebote." },
          { tag: "unbestaetigt", text: "Berichten zufolge müssten die Gebote im Bereich von rund 50 bis 55 Dollar je Aktie liegen, um Erfolgsaussichten zu haben. Angaben zu einem finalen Kaufpreis je Aktie, zur Finanzierung, zu beteiligten Banken und zu einem konkreten Entscheidungstermin sind in den vorliegenden Quellen nicht genannt.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "t:lbo" }] }
        ]},
        { h: "Was hat Schneider Electric angekündigt?", items: [
          { tag: "fakt", text: "Schneider Electric unterzeichnete am 05.10.2026 einen Vertrag zur Übernahme des US-Softwareunternehmens PTC Inc. für 23,7 Mrd. Dollar in bar (205 Dollar je Aktie, eine Prämie von 42,33 % auf den letzten Schlusskurs) – die größte Übernahme in der Geschichte von Schneider Electric; strategischer Hintergrund ist der Ausbau der KI- und Softwarekompetenzen des Konzerns." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der formale Abschluss der Skydance-Fusion, der weiterhin offene GFL-Bieterwettstreit und der neue Schneider-Electric-Deal zeigen zusammen anhaltend hohe Aktivität bei großen Unternehmensübernahmen in diesem Herbst – in unterschiedlichen Stadien von unmittelbar bevorstehendem Vollzug bis offenem Bieterwettstreit." }
        ]}
      ],
      reaction: "Die hohe Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: ["closing"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "≈ 28 Mrd. $ Unternehmenswert (≈ 18 Mrd. $ Eigenkapital + ≈ 10 Mrd. $ Schulden); Gebote laut Berichten evtl. im Bereich ≈ 50–55 $/Aktie, offiziell nicht bestätigt",
        buyer: "Zwei konkurrierende Konsortien: (1) KKR, Blackstone, Energy Capital Partners; (2) Brookfield Asset Management, IFM Investors",
        target: "GFL Environmental (Entsorgungskonzern, Kanada/USA)",
        sector: "Entsorgung / Infrastruktur",
        type: "Take-Private (Leveraged Buyout, Gebote liegen vor, keine Einigung)"
      },
      sources: [
        { title: "The Globe and Mail: Skydance Corporation moves Class B stock to NYSE", url: "https://www.theglobeandmail.com/investing/markets/markets-news/Tipranks/4943934/skydance-corporation-moves-class-b-stock-to-nyse/" },
        { title: "Yahoo Finance: Paramount Skydance and Warner Bros. Discovery expect merger to close October 6", url: "https://finance.yahoo.com/media-advertising/articles/paramount-skydance-warner-bros-discovery-102322316.html" },
        { title: "GuruFocus: GFL Environmental stock rises 4% amid takeover bids from private equity groups", url: "https://www.gurufocus.com/news/9107708/gfl-environmental-gfl-stock-rises-4-amid-takeover-bids-from-private-equity-groups" },
        { title: "InsideArbitrage: Schneider Electric acquires PTC for $23.7 billion in cash", url: "https://www.insidearbitrage.com/2026/10/schneider-electric-acquires-ptc-for-23-7-billion-in-cash/" },
        { title: "Bloomberg: Schneider expands in AI with record $23 billion acquisition", url: "https://bloomberg.com/news/articles/2026-10-05/schneider-electric-to-acquire-ptc-for-more-than-20-billion" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "metrics-kpmg-fitch-palmersquare-stack-blueowl-06-10", cats: ["credit", "pe"], when: "Metrics-Ausweitung 03.10. · Fitch-Augustzahl 6,3 % unverändert · Goldman/Palmer-Square & BlackRock/Stack laufend · Blue-Owl/BCRED-Daten Q3",
      headline: "Metrics Credit Partners weitet Fondssperren aus, Private-Credit-Markt zeigt gemischte Signale bei Rücknahmen",
      sec30: "Der australische Credit-Manager Metrics Credit Partners weitete die bereits bestehende Rücknahmesperre am 03.10.2026 auf zwei weitere, nicht börsennotierte Fonds aus, die wiederum in die bereits gesperrten gelisteten Fonds investieren. Der testierte KPMG-Abschluss kürzte den Fair Value der drei betroffenen gelisteten Fonds um insgesamt rund 185,5 Mio. australische Dollar – mehr als die zunächst gemeldeten vorläufigen Abwertungen. Fitch beziffert die US-Ausfallrate bei Private-Credit-Krediten für August weiterhin auf einen Rekordwert von 6,3 %, eine Septemberzahl liegt noch nicht vor. Goldman Sachs bleibt führender Bieter für den CLO-Manager Palmer Square, ein BlackRock/IFM-Konsortium bleibt in exklusiven Gesprächen über die Rechenzentren von Stack Infrastructure – in beiden Fällen ohne Einigung. Bei Blue Owl gingen die Rücknahmeanträge für den Flaggschiff-Fonds OCIC leicht zurück (16,8 % der Anteile, nach 18,8 %), blieben beim technologiefokussierten Fonds OTIC mit 39 % aber hoch; Blackstones BCRED beließ sein Rücknahmelimit das zweite Quartal in Folge bei 5 %.",
      blocks: [
        { h: "Was ist bei Metrics Credit Partners neu?", items: [
          { tag: "fakt", text: "Metrics Credit Partners setzte am 03.10.2026 auch Rücknahmen bei zwei weiteren, nicht börsennotierten Fonds aus, die in die bereits seit dem 30.09. gesperrten gelisteten Fonds investieren.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "Der testierte KPMG-Abschluss kürzte den Fair Value der drei betroffenen gelisteten Fonds um insgesamt rund 185,5 Mio. australische Dollar – stärker als die zunächst gemeldeten vorläufigen Abwertungen von bis zu 12,16 %.",
            ask: [{ label: "Was passiert bei solchen Rücknahmesperren grundsätzlich?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Wie entwickeln sich die Ausfallraten bei Private Credit insgesamt?", items: [
          { tag: "fakt", text: "Fitch beziffert die rollierende Zwölf-Monats-Ausfallrate bei US-Private-Credit-Krediten für August 2026 weiterhin auf einen Rekordwert von 6,3 %; eine aktuellere Septemberzahl lag zum Recherchezeitpunkt nicht vor.",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Wie ist der Stand bei Palmer Square und Stack Infrastructure?", items: [
          { tag: "unbestaetigt", text: "Goldman Sachs gilt weiterhin als führender Bieter für den CLO-Manager Palmer Square Capital Management (rund 37 Mrd. Dollar verwaltetes Vermögen); eine endgültige Vereinbarung liegt laut Berichten weiterhin nicht vor." },
          { tag: "unbestaetigt", text: "Ein von BlackRock und IFM Investors angeführtes Konsortium bleibt in exklusiven Gesprächen mit Blue Owl Capital über die asiatisch-pazifischen Rechenzentren von Stack Infrastructure, bewertet mit rund 20 bis 25 Mrd. Dollar; auch hier steht eine Einigung weiterhin aus." }
        ]},
        { h: "Was zeigen die Rücknahmedaten bei Blue Owl und Blackstone BCRED?", items: [
          { tag: "fakt", text: "Beim Blue-Owl-Fonds OCIC (35,1 Mrd. Dollar) sanken die Rücknahmeanträge im dritten Quartal auf 16,8 % der Anteile (von 18,8 %); beim technologiefokussierten Fonds OTIC blieben die Anträge mit 39 % hoch." },
          { tag: "fakt", text: "Blackstones 79-Mrd.-Dollar-Fonds BCRED beließ sein Rücknahmelimit das zweite Quartal in Folge bei 5 % pro Quartal, nachdem Anleger rund 10 % der Anteile zurückgeben wollten – es wird nur anteilig bedient." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Ausweitung der Metrics-Sperren und die unveränderte Fitch-Ausfallrate zeigen anhaltende Belastungen im Private-Credit-Markt, während gleichzeitig – etwas entspanntere Rücknahmedaten bei Blue Owl und weiterhin laufende Milliardenübernahmen bei Palmer Square und Stack Infrastructure – auf einen insgesamt weiter wachsenden, aber uneinheitlichen Markt hindeuten." }
        ]}
      ],
      reaction: "Die Entwicklungen bei Metrics und die Fitch-Ausfallrate ergänzen die laufenden Übernahmegespräche bei Palmer Square und Stack Infrastructure sowie die hohe allgemeine Dealaktivität (Meldung 12) um die Risikoseite desselben Marktes.",
      terms: ["nav", "default-rate", "bdc"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      widget: "sofr",
      deal: {
        value: "≈ 37 Mrd. $ verwaltetes Vermögen (davon ≈ 27 Mrd. $ CLO-Plattform); Kaufpreis nicht in den Quellen genannt",
        buyer: "Goldman Sachs",
        target: "Palmer Square Capital Management (CLO- und Credit-Manager)",
        sector: "Private Credit / CLO-Management",
        type: "Unternehmensübernahme (Gespräche laufen, keine Einigung)"
      },
      sources: [
        { title: "Caproasia: Australia $28 Billion Asset Manager Metrics Credit Partners Suspends Redemption of Unlisted Funds", url: "https://www.caproasia.com/2026/10/03/australia-28-billion-asset-manager-metrics-credit-partners-suspends-redemption-of-unlisted-funds-that-invest-in-suspended-listed-funds-metrics-real-estate-multi-strategy-fund-metrics-income-opportu/" },
        { title: "Capital Brief: KPMG downgrades fair value of Metrics funds by $185.5m", url: "https://www.capitalbrief.com/briefing/kpmg-downgrades-fair-value-of-metrics-funds-a2d70a2f-afac-4adf-89c8-7f4e246c9c31/" },
        { title: "Bloomberg: US Private Credit Default Rate Hits a Record of 6.3%, Fitch Says", url: "https://www.bloomberg.com/news/articles/2026-09-14/us-private-credit-default-rate-hits-a-record-of-6-3-fitch-says" },
        { title: "Bloomberg via Inkl: BlackRock, IFM close in on $25 billion Stack data center deal", url: "https://www.inkl.com/news/blackrock-ifm-close-in-on-25-billion-stack-data-center-deal-bloomberg" },
        { title: "Investing.com/Reuters: Private credit roundup – Blue Owl redemptions ease, tech and refinancing risks persist", url: "https://investing.com/news/stock-market-news/private-credit-roundup-blue-owl-redemptions-ease-tech-and-refinancing-risks-persist-4932327" }
      ]
    },

    /* 14 TECH/KI */
    {
      id: "amd-intel-preiserhoehung-terafab-ki-schulden-06-10", cats: ["tech"], when: "Intel-Preiserhöhung laut Branchenberichten zum 05.10. · Musk-Bestätigung 03.10., weitere Berichte 04./05.10. · BoE-Protokoll 25.09., BIS-Bericht 02.10.",
      headline: "Berichte: Intel erhöht PC-Chip-Preise zum dritten Mal in diesem Jahr, Gespräche zwischen TSMC und Musks „Terafab” bleiben im Frühstadium",
      sec30: "Branchenberichte auf Basis von Lieferketten-Quellen (DigiTimes, TrendForce, VideoCardz) berichten, Intel habe seine PC-Prozessorpreise zum 05.10.2026 um rund 10 % erhöht – die dritte Erhöhung in diesem Jahr; eine offizielle Bestätigung durch Intel liegt weiterhin nicht vor, obwohl der genannte Termin bereits verstrichen ist. Ähnliche, ebenfalls unbestätigte Berichte kursieren zu einer rund zehnprozentigen Preiserhöhung bei AMD-Grafikkarten und -Chipsätzen ab dem vierten Quartal. Die Gespräche zwischen TSMC und Elon Musks texanischem Chipfabrik-Projekt „Terafab” befinden sich laut Berichten vom 04./05.10. weiterhin im frühen Stadium, Eigentümerstruktur und Zeitplan sind ungeklärt. Die Bank of England warnte bereits im Sitzungsprotokoll vom 25.09. explizit vor zirkulären KI-Finanzierungsstrukturen, die Risikobewertungen erschweren könnten; die BIZ griff das Thema am 02.10. in einem eigenen Bericht auf. SoftBank zahlte am 01.10. die dritte und letzte Tranche von 10 Mrd. Dollar an OpenAI.",
      blocks: [
        { h: "Was wird zu den Preiserhöhungen bei Intel und AMD berichtet?", items: [
          { tag: "unbestaetigt", text: "Mehrere Branchenmedien berichten auf Basis von Lieferketten-Quellen, Intel habe seine PC-Prozessorpreise zum 05.10.2026 um rund 10 % erhöht – nach Angaben der Berichte die dritte Erhöhung in diesem Jahr. Eine offizielle Bestätigung durch Intel liegt weiterhin nicht vor, obwohl der genannte Termin bereits verstrichen ist." },
          { tag: "unbestaetigt", text: "Ähnliche, ebenfalls unbestätigte Berichte kursieren zu einer rund zehnprozentigen Preiserhöhung bei AMD-Grafikkarten, KI-Beschleunigern und Mainboard-Chipsätzen ab dem vierten Quartal 2026, begründet mit gestiegenen TSMC-Waferpreisen." }
        ]},
        { h: "Was ist bei TSMC und „Terafab” neu?", items: [
          { tag: "fakt", text: "Elon Musk bestätigte am 03.10.2026 Gespräche zwischen TSMC und seinem in Texas entstehenden Chipfabrik-Projekt „Terafab” (geplantes Investitionsvolumen rund 16,8 Mrd. Dollar in der ersten Phase); Berichte vom 04./05.10. beschreiben die Gespräche weiterhin als im frühen Stadium, Eigentümerstruktur, Beteiligungsform und Zeitplan blieben ungeklärt.",
            ask: [{ label: "Wie hängt das mit KI-Investitionen insgesamt zusammen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Welche Warnungen zu KI-Finanzierung gibt es?", items: [
          { tag: "fakt", text: "Das Financial Policy Committee der Bank of England warnte im Protokoll seiner Sitzung vom 25.09.2026 explizit vor „zirkulären” KI-Finanzierungsstrukturen, die Risikobewertungen erschweren und Verluste im Abschwungfall verstärken könnten; die Bank für Internationalen Zahlungsausgleich (BIZ) griff das Thema in einem Bericht vom 02.10.2026 auf und nannte KI-Blase, zirkuläre Finanzierung und Staatsverschuldung als zentrale Finanzrisiken.",
            ask: [{ label: "Was ist mit „zirkulärer Finanzierung” gemeint?", ref: "e:circular-financing" }] }
        ]},
        { h: "Welche neuen KI-Finanzierungstransaktionen gibt es?", items: [
          { tag: "fakt", text: "SoftBank zahlte am 01.10.2026 über seinen Vision Fund 2 die dritte und letzte Tranche von 10 Mrd. Dollar an OpenAI; der KI-Infrastrukturanbieter Lambda sicherte sich am selben Tag einen weiteren besicherten GPU-Kredit zum Kauf von mehr als 30.000 Nvidia-Grafikprozessoren im Rahmen seiner Microsoft-Partnerschaft." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere große Chip- und KI-Finanzierungsthemen gleichzeitig in der Schwebe bleiben – unbestätigte Preisrunden bei Intel und AMD, unverbindliche TSMC-Gespräche bei „Terafab” und wiederholte Warnungen vor zirkulärer KI-Finanzierung bei gleichzeitig neuen Milliarden-Transaktionen –, zeigt, wie viel in diesem schnell wachsenden Markt derzeit noch nicht vertraglich oder offiziell abgesichert ist." }
        ]}
      ],
      reaction: "Die Diskussion um steigende Chip-Kosten und KI-Finanzierungsrisiken ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: [],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "VideoCardz: Intel reportedly plans another 10% PC CPU price increase for October 5", url: "https://videocardz.com/newz/intel-reportedly-plans-another-10-pc-cpu-price-increase-for-october-5" },
        { title: "TrendForce: TSMC earnings preview – Terafab talks, price hikes, and A14 – Intel race lead five key themes", url: "https://www.trendforce.com/news/2026/10/05/news-tsmc-earnings-preview-terafab-talks-price-hikes-and-a14-intel-race-lead-five-key-themes/" },
        { title: "DataCenterDynamics: Elon Musk confirms Terafab discussions between SpaceX and TSMC", url: "https://www.datacenterdynamics.com/en/news/elon-musk-confirms-terafab-discussions-between-spacex-and-tsmc-says-spacexai-will-be-renamed-spacexsi/" },
        { title: "aninews: TSMC in talks with Musk over potential role in Texas Terafab, discussions at early stage", url: "https://www.aninews.in/news/business/tsmc-in-talks-with-musk-over-potential-role-in-texas-terafab-discussions-at-early-stage20261005084949/" },
        { title: "tftc.io: BIS Annual Report 2026 – AI bubble, circular financing, sovereign debt", url: "https://www.tftc.io/bis-annual-report-2026-ai-bubble-circular-financing-sovereign-debt" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "gasspeicher-sefe-opec-strompreise-06-10", cats: ["energy"], when: "Gasspeicher-Stand 04.10. (59,1 %) · SEFE-Anweisung · OPEC+-Quote 04.10. unverändert · Strompreis Oktober 2026",
      headline: "Deutsche Gasspeicher steigen leicht auf 59 Prozent, Bundesregierung weist SEFE zu zusätzlichem Gaskauf an",
      sec30: "Die deutschen Gasspeicher waren am 04.10.2026 zu rund 59,1 % gefüllt (146,1 von 247,4 Terawattstunden) – ein leichter Anstieg gegenüber den rund 58 % vom 02.10., aber weiterhin unter dem üblichen 80-Prozent-Zielwert zum 1. November und unter dem Vorjahresniveau. Die Bundesnetzagentur sieht das Erreichen des Zielwerts nicht als zwingend für die Versorgungssicherheit; die Bundesregierung wies den Energiekonzern SEFE an, bis zum 15.12.2026 zusätzlich 8 Terawattstunden Gas zu beschaffen. Das LNG-Terminal in Stade erwartet die erste reguläre Netzeinspeisung weiterhin erst für Anfang November. OPEC+ hatte am 04.10. die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag gelassen. Der durchschnittliche deutsche Strompreis lag im Oktober 2026 bei rund 29,68 Cent pro Kilowattstunde für einen Haushalt mit 5.000 kWh Jahresverbrauch.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher waren laut Bundesnetzagentur am 04.10.2026 zu rund 59,1 % gefüllt (146,1 von 247,4 Terawattstunden) – ein leichter Anstieg gegenüber rund 58 % am 02.10., aber weiterhin unter dem üblichen 80-Prozent-Zielwert zum 1. November und unter dem Vorjahresniveau.",
            ask: [{ label: "Welche Rolle spielen Gasspeicher für die Energieversorgung?", ref: "e:energy-germany" }] },
          { tag: "fakt", text: "Die Bundesregierung wies den Energiekonzern SEFE an, bis zum 15.12.2026 zusätzlich 8 Terawattstunden Gas zu beschaffen, um die Versorgung während der Heizperiode zu sichern." },
          { tag: "unbestaetigt", text: "Die Bundesnetzagentur sieht das Erreichen des 80-Prozent-Zielwerts nicht als zwingend für die Versorgungssicherheit an; eine abweichende Einschätzung einzelner Branchenvertreter zu den Risiken eines besonders kalten Winters lag für den aktuellen Berichtszeitraum nicht vor." }
        ]},
        { h: "Wie ist der Stand beim LNG-Terminal Stade?", items: [
          { tag: "fakt", text: "Das LNG-Terminal in Stade (schwimmende Anlage „Energos Force”) erwartet die erste vollständige Lieferung und reguläre Netzeinspeisung weiterhin für Anfang November 2026; ab 2027 sollen bis zu 3,2 Mrd. Kubikmeter Gas pro Jahr eingespeist werden." }
        ]},
        { h: "Was hat die OPEC+ entschieden, und wie reagiert der Ölpreis?", items: [
          { tag: "fakt", text: "OPEC+ einigte sich am 04.10.2026 darauf, die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag zu lassen; die tatsächliche Förderung der Kerngruppe liegt laut Berichten weiterhin unter der Quote.",
            ask: [{ label: "Wie ist der Gesamtkontext zur Lage am Golf?", ref: "s:9" }] },
          { tag: "unbestaetigt", text: "Brent-Rohöl notierte am Montag je nach Quelle zwischen rund 101 und 106 Dollar je Barrel – eine deutliche Quellenlagen-Abweichung (Meldung 3).",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Wie haben sich die Strompreise entwickelt?", items: [
          { tag: "fakt", text: "Der durchschnittliche deutsche Strompreis lag im Oktober 2026 bei rund 29,68 Cent pro Kilowattstunde für einen Haushalt mit 5.000 kWh Jahresverbrauch; Grundversorgungstarife lagen mit rund 40,37 Cent deutlich darüber." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der leicht gestiegene, aber weiterhin niedrige Speicherstand bei gleichzeitig als „nicht zwingend” eingeschätztem Zielwert zeigt, dass die Bundesnetzagentur und die zusätzliche SEFE-Beschaffung unterschiedliche Absicherungsebenen für die Versorgung bilden; die unveränderte OPEC+-Quote dämpft zusätzliche Preissprünge beim Öl, ohne die geopolitische Risikoprämie durch den Nahost-Konflikt zu beseitigen (Meldung 9)." }
        ]}
      ],
      reaction: "Die Gasspeicher-Lage und die unveränderte OPEC+-Förderquote hängen mit der allgemeinen, durch den Nahost-Konflikt getriebenen Risikoprämie bei Energie zusammen (Meldung 9).",
      terms: ["opec-plus", "ttf", "lng"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation", "e:hormuz"],
      sources: [
        { title: "netz-trends.de: Gasspeicher 58 Prozent – Heizperiode, SEFE 8 Terawattstunden bis 15. Dezember 2026", url: "https://www.netz-trends.de/gasspeicher-58-prozent-heizperiode-sefe-8-terawattstunden-15-dezember-2026-bundesnetzagentur-4-oktober-2026/" },
        { title: "gasspeicherkarte.de: Gasspeicher-Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" },
        { title: "Offshore-Energy.biz: FSRU docks in Stade as LNG terminal prepares to feed gas into German grid from November", url: "https://www.offshore-energy.biz/fsru-docks-in-stade-as-lng-terminal-prepares-to-feed-gas-into-german-grid-from-november/" },
        { title: "World Oil: OPEC+ holds November oil production targets steady as supply remains constrained", url: "https://www.worldoil.com/news/2026/10/4/opec-holds-november-oil-production-targets-steady-as-supply-remains-constrained/" },
        { title: "stromauskunft.de: Strompreise", url: "https://www.stromauskunft.de/strompreise/" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Die Nasdaq schloss am Montag mit 27.477,31 Punkten (+1,05 %) auf einem neuen Rekordstand; S&P 500 und Dow Jones legten ebenfalls zu, DAX und Euro Stoxx 50 blieben je nach Quelle nahezu unverändert." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Dass zurückhaltende Fed-Reden ohne neue Wirtschaftsdaten Aktien weltweit stützten, erklären Marktbeobachter mit der gesunkenen Wahrscheinlichkeit einer weiteren Fed-Zinserhöhung im Oktober." },
    "yield-meaning": { tag: "unbestaetigt", story: 3, text: "Die US-10-Jahres-Rendite lag am Montag je nach Quelle zwischen rund 5,25 % und 5,31 %, die Bund-Rendite zwischen rund 3,47 % und 3,63 % – beide Werte trotz zurückhaltender Fed-Reden am oberen Ende der Quellenlage." },
    "yield-stocks": { tag: "einordnung", story: 1, text: "Dass Aktien am Montag trotz gleichzeitig laut einzelnen Quellen gestiegener US-Rendite zulegten, bezeichnen Marktbeobachter als ungewöhnliches Nebeneinander." },
    "gold-why": { tag: "fakt", story: 5, text: "Gold notierte zu Wochenbeginn bei rund 4.128 bis 4.153 Dollar je Feinunze – kaum verändert gegenüber Freitag und rund 26 % unter dem 2026er-Rekordhoch von rund 5.608 Dollar." },
    "bitcoin-what": { tag: "unbestaetigt", story: 5, text: "Bitcoin notierte am Montag/Dienstag bei rund 85.000 bis 86.200 Dollar – leicht höher als am Wochenende." },
    "eurusd-meaning": { tag: "fakt", story: 5, text: "EUR/USD stand laut EZB-Referenzkurs am Montag bei 1,1204 – ein Rückgang von 0,46 % gegenüber Freitag." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die Eurozone-Inflation lag im September laut Eurostat-Flash-Schätzung bei 3,8 %; die EZB-Projektion für 2026 insgesamt liegt bei 3,0 %." },
    "inflation-expectations": { tag: "unbestaetigt", story: 2, text: "Terminmärkte sehen die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10. nach den Reden von Jefferson und Williams bei rund 80 %." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Sowohl Fed als auch EZB haben ihre Leitzinsen im September 2026 angehoben und begründen dies mit anhaltend hoher, durch den Nahost-Konflikt getriebener Inflation; beide signalisieren nun vorsichtig unterschiedliche nächste Schritte." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Terminmärkte sehen die Wahrscheinlichkeit einer Fed-Zinspause am 27./28.10.2026 bei rund 80 %, nach zurückhaltenden Reden von Jefferson und Williams." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die EZB hob ihre Leitzinsen am 10.09.2026 um 25 Basispunkte an (Einlagensatz auf 2,50 %); die nächste Zinsentscheidung fällt am 28./29.10.2026." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent-Rohöl notierte am Montag je nach Quelle zwischen rund 101 und 106 Dollar je Barrel und gilt weiterhin als Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "unbestaetigt", story: 6, text: "Eine höhere Bund-Rendite (laut einer Quelle rund 3,63 %) verteuert neue deutsche Staatsschulden und bleibt Hintergrund der Debatte über die Rentenlast im Bundeshaushalt." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Haushaltsausschuss berät bis zur Bereinigungssitzung am 12.11.2026; die Schlussabstimmung ist für den 27.11.2026 angesetzt." },
    "rente-basics": { tag: "unbestaetigt", story: 6, text: "Arbeitsministerin Bas soll im Oktober einen Gesetzentwurf zur Rente vorlegen; der Koalitionsausschuss am 07.10.2026 soll eine Linie zwischen Union und SPD finden." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "Linke, SPD und Grüne führten am 03.10. ein zweites Sondierungsgespräch ohne Einigung zu Antisemitismus-Vorwürfen; eine dritte Runde ist für den 07.10. vereinbart." },
    "coalition-majority": { tag: "fakt", story: 7, text: "Grüne und SPD machen eine klare Positionierung der Linken gegen Antisemitismus und organisierte Kriminalität weiterhin zur Vorbedingung für Koalitionsverhandlungen." },
    "hormuz": { tag: "fakt", story: 9, text: "Der Irak leitete am 04.10. erstmals seit Jahrzehnten einen Teil seiner Ölexporte an der Straße von Hormus vorbei um; die US-Truppenpräsenz in der Golfregion wächst weiter." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "Irans Parlamentspräsident Ghalibaf besteht darauf, dass die Straße von Hormus gesperrt bleibt, bis die USA sieben im Juni formulierte Bedingungen erfüllen." },
    "defence-order": { tag: "fakt", story: 10, text: "Rheinmetall erhielt einen neuen US-Auftrag über rund 20,7 Mio. Dollar; Hensoldt gewann einen Sensorauftrag von rund 130 Mio. Euro für die P-8-Poseidon-Flotte der Bundeswehr." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Die Rheinmetall-Aktie notierte am Montag je nach Handelsplatz zwischen rund 963 und 979 Euro; die Renk-Aktie blieb rund 32 % im Minus seit Jahresbeginn, Hensoldt legte zu." },
    "nato-target": { tag: "fakt", story: 11, text: "Die NATO-Gesamtausgaben übersteigen 2026 erstmals 1,5 Billionen Dollar; TKMS bleibt ohne unterzeichneten Hauptvertrag Vorzugsbieter für das kanadische U-Boot-Programm." },
    "ma-steps": { tag: "fakt", story: 12, text: "Der aus der Paramount-WBD-Fusion entstandene Konzern firmiert seit 06.10.2026 als „Skydance Corporation” und handelt an der NYSE; Schneider Electric kündigte am 05.10. die Übernahme von PTC für 23,7 Mrd. Dollar an." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental konkurrieren weiterhin zwei Konsortien; Gebote müssten laut Berichten im Bereich von rund 50 bis 55 Dollar je Aktie liegen, um Erfolgsaussichten zu haben." },
    "deal-risks": { tag: "fakt", story: 12, text: "Der Merger-Vollzug zwischen Paramount Skydance und Warner Bros. Discovery erfolgte am 06.10.2026 nach gerichtlicher Genehmigung eines Vergleichs mit klagenden US-Bundesstaaten." },
    "private-credit-what": { tag: "unbestaetigt", story: 13, text: "Goldman Sachs gilt weiterhin als führender Bieter für den CLO-Manager Palmer Square (≈ 37 Mrd. $ verwaltetes Vermögen); eine endgültige Vereinbarung liegt nicht vor." },
    "pc-rates": { tag: "fakt", story: 13, text: "Die US-Ausfallrate im Private-Credit-Markt lag laut Fitch im August 2026 unverändert bei einem Rekordwert von 6,3 %." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Der testierte KPMG-Abschluss kürzte den Fair Value der drei betroffenen Metrics-Fonds um insgesamt rund 185,5 Mio. australische Dollar." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Metrics Credit Partners weitete die Rücknahmesperre am 03.10. auf zwei weitere, nicht börsennotierte Fonds aus." },
    "ai-capex": { tag: "unbestaetigt", story: 14, text: "Berichte zu Preiserhöhungen von rund 10 % bei Intel (zum 05.10.) und AMD (ab Q4 2026) bleiben ohne offizielle Unternehmensbestätigung." },
    "custom-chips": { tag: "fakt", story: 14, text: "Elon Musk bestätigte am 03.10. Gespräche zwischen TSMC und seinem Chipfabrik-Projekt „Terafab”; Berichte vom 04./05.10. beschreiben sie weiterhin als im frühen Stadium." },
    "circular-financing": { tag: "fakt", story: 14, text: "Die Bank of England warnte bereits im Protokoll vom 25.09. vor zirkulären KI-Finanzierungsstrukturen; die BIZ griff das Thema am 02.10. in einem eigenen Bericht auf." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 04.10. bei rund 59,1 %; die Bundesregierung wies SEFE an, bis 15.12. zusätzlich 8 TWh Gas zu beschaffen." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ einigte sich am 04.10. darauf, die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag zu lassen." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Wirtschaft", type: "Fakt", story: 2,
      q: "Auf welches Zielband hob die US-Notenbank Fed ihren Leitzins am 16.09.2026 an?",
      options: [
        "0,75 bis 1,00 %",
        "5,25 bis 5,50 %",
        "3,75 bis 4,00 %",
        "Sie senkte den Leitzins auf 0 bis 0,25 %"
      ],
      answer: 2,
      explain: "Die Fed hob ihren Leitzins am 16.09.2026 einstimmig (12:0) auf ein Zielband von 3,75 bis 4,00 % an – die erste Zinserhöhung seit 2023 – und begründete dies mit anhaltend hoher Inflation und geopolitischen Aufwärtsrisiken."
    },
    {
      topic: "Märkte", type: "Zusammenhang", story: 3,
      q: "Angenommen, die US-Rendite würde in den kommenden Wochen weiter in Richtung eines neuen Mehrjahreshochs steigen. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Der Euro würde automatisch zur Weltreservewährung",
        "Neue Schulden für Staaten wie Deutschland würden tendenziell teurer, und zinslose Anlagen wie Gold würden grundsätzlich weniger attraktiv",
        "Die EZB müsste ihren Leitzins automatisch auf 0 % senken",
        "Der DAX müsste gesetzlich einen Kurssturz erleben"
      ],
      answer: 1,
      explain: "Höhere Anleiherenditen verteuern tendenziell neue Staatsschulden und machen zinslose Anlagen wie Gold im Vergleich zu verzinsten Anleihen grundsätzlich weniger attraktiv – ein Automatismus bei anderen Werten besteht nicht."
    },
    {
      topic: "Deutschland", type: "Zusammenhang", story: 6,
      q: "Angenommen, Union und SPD einigen sich beim Koalitionsausschuss am 7.10. entgegen der Kritik der Jungen Gruppe vollständig auf den Rentenvorschlag von Arbeitsministerin Bas. Was folgt daraus am ehesten?",
      options: [
        "Der zentrale innenpolitische Streitpunkt bei der Rentenreform wäre vorerst geklärt, während der Bundeshaushalt 2027 ohnehin nach festem Ausschuss-Zeitplan weiterläuft",
        "Die Bundestagswahl müsste automatisch wiederholt werden",
        "Die Bund-Rendite würde dadurch automatisch auf 0 % fallen",
        "Die AfD müsste danach gesetzlich aus dem Bundestag ausscheiden"
      ],
      answer: 0,
      explain: "Die Rentenreform ist laut Berichten der zentrale noch ungelöste Streitpunkt zwischen Junger Gruppe/Union und SPD; der Bundeshaushalt 2027 folgt unabhängig davon bereits einem festen parlamentarischen Zeitplan bis zur Schlussabstimmung am 27.11.2026."
    },
    {
      topic: "International", type: "Fakt", story: 9,
      q: "Was passierte laut Berichten am 04.10.2026 erstmals seit Jahrzehnten beim irakischen Ölexport?",
      options: [
        "Irak kündigte den Bau einer neuen Pipeline nach Europa an",
        "Irak trat aus der OPEC+ aus",
        "Irak leitete einen Teil seiner Ölexporte an der Straße von Hormus vorbei um",
        "Irak stellte die gesamte Ölförderung ein"
      ],
      answer: 2,
      explain: "Weil der Nahost-Konflikt die regulären Ausfuhren durch die Straße von Hormus abschnürt, leitete der Irak am 04.10.2026 erstmals seit Jahrzehnten einen Teil seiner Ölexporte an Hormus vorbei um."
    },
    {
      topic: "Deals", type: "Fakt", story: 12,
      q: "Was geschah am 06.10.2026 formal mit dem aus der Fusion von Paramount und Warner Bros. Discovery entstandenen Konzern?",
      options: [
        "Er spaltete sich in vier unabhängige Firmen auf",
        "Er wurde von Disney übernommen",
        "Er meldete Insolvenz an",
        "Er firmierte als „Skydance Corporation” und wechselte mit dem Ticker „SKYD” von der Nasdaq an die NYSE"
      ],
      answer: 3,
      explain: "Nach gerichtlicher Genehmigung eines Vergleichs mit klagenden US-Bundesstaaten am 30.09. wurde der Merger-Vollzug am 06.10.2026 formal abgeschlossen; der Konzern firmiert seitdem als „Skydance Corporation” und handelt unter dem Ticker „SKYD” an der NYSE."
    }
  ]
};
