// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-04",
  dateLabel: "Mittwoch, 4. November 2026",
  updatedLabel: "Recherchestand 04.11.2026",
  marketNote: "Diese Ausgabe entsteht am Mittwochmittag, 4.11.2026. DAX und Euro Stoxx 50 zeigen den Stand des Mittwochmittags (ca. 12 Uhr MEZ) nach einer deutlichen Erleichterungsrally im Anschluss an die US-Zwischenwahlen; die US-Kassamärkte (S&P 500, Nasdaq Composite, Dow Jones) zeigen weiterhin den Schlussstand von Dienstag, 3.11., da der US-Kassamarkt an diesem Mittwoch erst um 15:30 MEZ öffnet. Gold, Öl und Bitcoin handeln durchgehend und zeigen den aktuellsten verfügbaren Stand vom Mittwochvormittag bzw. -mittag. Die Eurostat-Schnellschätzung zur Oktober-Inflation der Eurozone wurde heute veröffentlicht. Die vollständigen Qiagen-Q3-Zahlen zum EQT-Übernahmeangebot werden erst heute Abend nach Redaktionsschluss (22:05 Uhr) veröffentlicht; zum Redaktionsschluss lagen nur die bereits am 21.10. gemeldeten vorläufigen Zahlen vor. Bei einzelnen Rohstoffpreisen (insbesondere Brent und dem europäischen Gaspreis TTF) weichen Quellen zum Redaktionsschluss noch leicht voneinander ab; betroffene Angaben sind entsprechend gekennzeichnet. Die endgültigen Sitzverteilungen im neuen US-Kongress standen zum Redaktionsschluss noch nicht in allen Rennen fest.",

  top: [
    { text: "Die Demokratische Partei gewinnt bei den US-Zwischenwahlen die Kontrolle über beide Kammern des Kongresses zurück; DAX und Euro Stoxx 50 reagieren am Mittwoch mit einer deutlichen Erleichterungsrally, Gold springt über die Marke von 4.000 Dollar.", ref: "s:9" },
    { text: "Die Inflation in der Eurozone steigt im Oktober laut Eurostat-Schnellschätzung auf 4,0 Prozent, den höchsten Stand seit September 2023; Bundesbank-Präsident Nagel hält eine EZB-Zinserhöhung im Dezember für sehr wahrscheinlich notwendig.", ref: "s:4" },
    { text: "Der Iran meldet weitere Tankertreffer an der Straße von Hormus und den Abschuss einer US-Drohne; der Ölpreis bleibt trotz Entspannungshoffnungen zwischen den USA und Iran volatil.", ref: "s:11" },
    { text: "Präsident Selenskyj besucht überraschend das Berliner Kanzleramt, der Kreml bestätigt die für 10./11. November geplanten Dreiergespräche in Abu Dhabi zur Ukraine.", ref: "s:10" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.240–26.250 Pkt.", change: "+1,4 % bis +1,5 % ggü. Vortagesschluss (≈ 25.869 Pkt.)", dir: "up", asof: "Stand Mi 4.11.26, Mittag (ca. 12:08 Uhr MEZ)", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als beim letzten Stand.",
      compare: [
        { label: "Vormittag", text: "Der DAX war am Mittwochmorgen zunächst nur bis auf rund 25.959 Punkte gestiegen, bevor sich die Erholung im Vormittagshandel deutlich beschleunigte und die Marke von 26.200 Punkten überschritten wurde." }
      ],
      moved: {
        intro: "Als Hintergrund für den Anstieg am Mittwoch nennen Berichte:",
        items: [
          "Nachdem am späten Dienstagabend klar wurde, dass die Demokraten die Kontrolle über beide Kammern des US-Kongresses zurückgewonnen haben, zogen DAX und Euro Stoxx 50 am Mittwoch deutlich an.",
          "Marktbeobachter nennen als Hintergrund die Erwartung einer politischen Blockade in Washington, die neue, marktbelastende Gesetzesvorhaben erschweren könnte."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "onvista: Dax vor Ausbruch – US-Midterms liefern neuen Antrieb", url: "https://www.onvista.de/news/2026/11-04-dax-vor-ausbruch-us-midterms-liefern-neuen-antrieb-41123281-19-26572284" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.238 Pkt.", change: "+1,5 % (+93,99 Pkt.) ggü. Vortag", dir: "up", asof: "Stand Mi 4.11.26, Mittag", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Allgemeine Tendenz", text: "Auch der Euro Stoxx 50 zieht am Mittwoch im Einklang mit der breiten Erleichterungsrally an den europäischen Börsen deutlich an." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die gleichen Gründe wie beim DAX – die Erleichterung über den demokratischen Erfolg bei den US-Zwischenwahlen – treiben laut Berichten auch den Euro Stoxx 50."
        ]
      },
      important: [
        { area: "USA", text: "Mehr zu den Zwischenwahlen in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "finanzen.ch: Börse Europa in Grün – so steht der Stoxx 50 mittags", url: "https://www.finanzen.ch/nachrichten/aktien/boerse-europa-in-gruen-so-steht-der-stoxx-50-mittags-1036713936" }
    },
    "sp500": {
      label: "S&P 500", value: "7.568,92", change: "+0,4 % (+27,52 Pkt., Schluss Di 3.11.)", dir: "up", asof: "Schluss Di 3.11.26; US-Kassamarkt öffnet Mi erst 15:30 MEZ", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Im Vergleich zum Dow", text: "Während der S&P 500 am Dienstag 0,4 % zulegte und die Nasdaq 0,8 % gewann, gab der Dow 0,4 % ab – ein Zeichen für unterschiedliche Reaktionen innerhalb der Wall Street auf Wahltag und Apple-Nachwirkungen." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Am Wahltag selbst hielten sich viele Anleger laut Berichten zurück, bevor erste Hochrechnungen zugunsten der Demokraten die Stimmung in Technologiewerten stützten.",
          "Die US-10-Jahres-Rendite war am Dienstag zunächst um mehr als 4 Basispunkte auf rund 4,94 % gestiegen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Was eine steigende Rendite für Aktien bedeutet.", ref: "e:yield-stocks" }
      ],
      source: { title: "WTOP/AP: How major US stock indexes fared Tuesday", url: "https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-tuesday-11-3-2026" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.372,01", change: "+0,8 % (+207,65 Pkt., Schluss Di 3.11.)", dir: "up", asof: "Schluss Di 3.11.26; US-Kassamarkt öffnet Mi erst 15:30 MEZ", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Chipwerte", text: "Die Erholung bei Chipwerten half der technologieschweren Nasdaq zu einem der stärksten Tage seit Wochen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "AMD legte nach starken Q3-Zahlen nachbörslich deutlich zu; mehr dazu in Meldung 15.",
          "Der Wahltag selbst verlief an der Börse zunächst nervös, bevor sich die Stimmung mit den ersten Ergebnissen aufhellte."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu AMD, Apple und Anthropic in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "StockTitan: Stock Market Today – Live, November 3, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-3-2026" }
    },
    "dow": {
      label: "Dow Jones", value: "51.786,72", change: "-0,4 % (-197,26 Pkt., Schluss Di 3.11.)", dir: "down", asof: "Schluss Di 3.11.26; US-Kassamarkt öffnet Mi erst 15:30 MEZ", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft weniger stark auf Kursbewegungen bei Tech-Aktien als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Im Vergleich zur Nasdaq", text: "Während die Nasdaq um 0,8 % zulegte, gab der Dow leicht nach – belastet vor allem vom Kursrückgang bei Apple." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Apple-Aktie fiel am Dienstag um 1,9 % auf 331,90 Dollar, nachdem die DZ Bank die Aktie auf „Verkaufen” abgestuft hatte; das belastete den stärker industriell geprägten Dow."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Apple in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "StockTitan: Stock Market Today – Live, November 3, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-3-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1260", change: "+0,6 % ggü. Vortag", dir: "up", asof: "Stand Mi 4.11.26, Vormittag", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet etwa 1,13 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Dienstag", text: "Der Euro hatte sich am Dienstag vor den endgültigen Wahlergebnissen nur wenig bewegt und zog erst am Mittwoch mit der allgemeinen Risikoerholung an." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein schwächerer Dollar im Zuge der US-Zwischenwahlen wird von Berichten als ein Grund für den festeren Euro genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur erwarteten EZB-Zinserhöhung im Dezember in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,90–4,95 %", change: "weitgehend stabil; am Dienstag kurzzeitig um gut 4 Basispunkte auf rund 4,94 % gestiegen", dir: "flat", asof: "Stand Mi 4.11.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 4,9 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 4,9 % Zinsen pro Jahr.",
      compare: [
        { label: "Fed-Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 %; mehrere Fed-Vertreter werben zuletzt für weitere Erhöhungen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der kurzzeitige Anstieg am Wahltag wird von Berichten mit der Reaktion auf erste Ergebnisse und mit robusten Konjunkturdaten in Verbindung gebracht."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den Fed-Aussagen in Meldung 6.", ref: "s:6" }
      ],
      source: { title: "CNBC: U.S. Treasury yields, bonds", url: "https://www.cnbc.com/amp/2026/11/03/us-treasury-yields-bonds.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,32 %", change: "-0,10 Prozentpunkte ggü. Ende Oktober (≈ 3,42 %)", dir: "down", asof: "Stand Mi 4.11.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Der Risikoaufschlag französischer Anleihen zum Bund bleibt Thema; aktualisierte Spread-Daten für den 4.11. lagen zum Redaktionsschluss nicht vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die leicht rückläufige Rendite wird von Berichten mit der Erleichterung an den Märkten nach den US-Zwischenwahlen in Verbindung gebracht."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinserwartung in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "finanzen.at: Deutsche Anleihen – leichte Kursgewinne nach US-Zwischenwahl", url: "https://www.finanzen.at/nachrichten/anleihen/deutsche-anleihen-leichte-kursgewinne-nach-us-zwischenwahl-1036713744" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.025–4.047 $", change: "+2,4 % bis +3,0 % ggü. Vortag", dir: "up", asof: "Stand Mi 4.11.26, Vormittag", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 4.000 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Wahlnacht", text: "Gold war in der Wahlnacht zunächst gefragt und sprang am Mittwoch deutlich über die Marke von 4.000 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für den Anstieg:",
        items: [
          "Die Erwartung einer politischen Blockade in Washington und anhaltende Spannungen am Persischen Golf werden als Gründe für die Gold-Rally genannt.",
          "Zur genauen Höhe des Tagesgewinns weichen Quellen leicht voneinander ab (zwischen rund 2,4 % und 3,0 %)."
        ]
      },
      important: [
        { area: "Energie", text: "Mehr zur Lage am Golf in Meldung 11.", ref: "s:11" }
      ],
      source: { title: "finanzen.ch: Goldpreis – starkes Comeback über 4.000 Dollar nach US-Zwischenwahlen", url: "https://finanzen.ch/nachrichten/rohstoffe/goldpreis-starkes-comeback-ueber-4000-dollar-nach-us-zwischenwahlen-1036713253" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 102–105 $", change: "-1 % bis -3 % ggü. Dienstag (≈ 106–107 $)", dir: "down", asof: "Stand Mi 4.11.26, Vormittag", story: 11, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 102 bis 105 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Frühjahr 2026.",
      compare: [
        { label: "Letzte Woche", text: "Nach einem Hoch von rund 117 Dollar in der vergangenen Woche und einem zwischenzeitlichen Einbruch auf etwa 100 Dollar am Dienstag pendelt Brent am Mittwoch zwischen rund 102 und 105 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Berichte über mögliche diplomatische Fortschritte zwischen den USA und Iran dämpften die Risikoprämie, auch wenn der Iran zugleich weitere Tankertreffer an der Straße von Hormus meldete.",
          "Ein Rückgang der US-Rohölvorräte laut API-Daten wirkte dem Preisrückgang zugleich leicht entgegen."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage an der Straße von Hormus in Meldung 11.", ref: "s:11" },
        { area: "Inflation", text: "Ein hoher Ölpreis wirkt tendenziell anheizend auf Energie- und Transportkosten.", ref: "e:oil-inflation" }
      ],
      source: { title: "esyoil: Nach den Midterms bleibt der Ölmarkt nervös", url: "https://www.esyoil.com/news/nach-den-midterms-bleibt-der-oelmarkt-nervoes?id=109249" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 78.300 $", change: "+0,9 % ggü. Vortag; Erholung von einem Wahlnacht-Tief bei rund 75.740 $", dir: "up", asof: "Stand Mi 4.11.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 78.300 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Wahlnacht", text: "Bitcoin war in der Nacht zum Mittwoch auf ein Tief von rund 75.740 Dollar gefallen, bevor sich der Kurs mit den Wahlergebnissen wieder erholte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Erholung:",
        items: [
          "Die insgesamt wieder risikofreudigere Stimmung an den Märkten nach den US-Zwischenwahlen wird als Grund für die Erholung genannt."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "finanzen.net: Kryptomarkt – Wahlnacht überstanden, Bitcoin erholt sich", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-wahlnacht-ueberstanden-bitcoin-erholt-sich-nach-tief-bei-75-740-dollar-auf-78-300-dollar-00-16035841" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "markets-mittwoch-dax-eurostoxx-wahlrally-11-04", cats: ["markets"], when: "Stand Mi 4.11.2026, Mittag",
      headline: "DAX und Euro Stoxx 50 legen am Mittwoch nach den US-Zwischenwahlen deutlich zu, Gold springt über die Marke von 4.000 Dollar",
      sec30: "Der DAX stieg am Mittwoch im Tagesverlauf von rund 25.959 auf zwischen 26.240 und 26.250 Punkte (+1,4 % bis +1,5 %), der Euro Stoxx 50 legte um rund 1,5 % auf etwa 6.238 Punkte zu. Als Hintergrund nennen Berichte die am späten Dienstagabend bekannt gewordene Rückgewinnung der Kongressmehrheit durch die Demokraten bei den US-Zwischenwahlen. Parallel sprang der Goldpreis über die Marke von 4.000 Dollar je Feinunze, während Bitcoin sich von einem Wahlnacht-Tief erholte (Meldung 3). Die US-Kassamärkte hatten am Dienstag uneinheitlich geschlossen (Meldung 2).",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 am Mittwoch entwickelt?", items: [
          { tag: "fakt", text: "Der DAX stieg am Mittwoch von rund 25.959 Punkten am Morgen auf zwischen 26.240 und 26.250 Punkte (+1,4 % bis +1,5 % ggü. Vortagesschluss von etwa 25.869 Punkten); der Euro Stoxx 50 legte um rund 1,5 % (+93,99 Punkte) auf etwa 6.238 Punkte zu.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund für die Erleichterungsrally?", items: [
          { tag: "fakt", text: "Am späten Dienstagabend wurde klar, dass die Demokratische Partei die Kontrolle über Repräsentantenhaus und Senat zurückgewonnen hat; das sorgte laut Berichten für die kräftige Erholung an den europäischen Börsen am Mittwoch.",
            ask: [{ label: "Mehr zu den Zwischenwahlen", ref: "s:9" }] },
          { tag: "einordnung", text: "Marktbeobachter nennen als Hintergrund die Erwartung, dass ein von den Demokraten mitkontrollierter Kongress Teile der Agenda von Präsident Trump bremsen und für mehr politische Berechenbarkeit sorgen könnte." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 am Mittwoch deutlich zulegen, während gleichzeitig Gold über 4.000 Dollar springt, zeigt, dass Anleger die Nacht sowohl als Risikoerleichterung bei Aktien als auch als Anlass für Absicherung über Gold deuten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Schlusskurse vom Dienstag werden in Meldung 2 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Zwischenwahl-Ergebnisse im Detail in Meldung 9.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "onvista: Dax vor Ausbruch – US-Midterms liefern neuen Antrieb", url: "https://www.onvista.de/news/2026/11-04-dax-vor-ausbruch-us-midterms-liefern-neuen-antrieb-41123281-19-26572284" },
        { title: "ad-hoc-news: Dax bei 25.959 Punkten – US-Wahl und Zahlenflut im Fokus", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-bei-25-959-punkten-us-wahl-und-zahlenflut-im-fokus/70455101" },
        { title: "finanzen.ch: Börse Europa in Grün – so steht der Stoxx 50 mittags", url: "https://www.finanzen.ch/nachrichten/aktien/boerse-europa-in-gruen-so-steht-der-stoxx-50-mittags-1036713936" },
        { title: "NZZ: Midterms in den USA – die blaue Welle verunsichert zunächst die Börsen", url: "https://www.nzz.ch/wirtschaft/midterms-in-den-usa-die-blaue-welle-verunsichert-die-boersen-ld.10053926" }
      ]
    },
    /* 2 MÄRKTE: US-SCHLUSS DIENSTAG */
    {
      id: "us-wallstreet-dienstag-midterms-11-04", cats: ["markets"], when: "Schluss Di 3.11.2026 · vorbörslich Mi 4.11.",
      headline: "S&P 500 und Nasdaq schließen am Dienstag im Plus, der Dow gibt wegen Apple nach, Anleger blicken auf historische Muster nach US-Zwischenwahlen",
      sec30: "Der S&P 500 schloss am Dienstag bei 7.568,92 Punkten (+0,4 %), die Nasdaq Composite bei 25.372,01 Punkten (+0,8 %); der Dow Jones gab dagegen um 0,4 % auf 51.786,72 Punkte nach, belastet vom Kursrückgang der Apple-Aktie (Meldung 15). Die US-10-Jahres-Rendite stieg am Wahltag zunächst um gut 4 Basispunkte auf rund 4,94 %, bevor sie sich wieder beruhigte. Laut einer von mehreren Medien zitierten Analyse der Deutschen Bank stieg der S&P 500 in allen 20 Zwischenwahljahren seit 1946 binnen zwölf Monaten, im Schnitt um 14,4 %.",
      blocks: [
        { h: "Wie schlossen S&P 500, Nasdaq und Dow am Dienstag?", items: [
          { tag: "fakt", text: "Der S&P 500 schloss am Dienstag bei 7.568,92 Punkten (+0,4 % bzw. +27,52 Punkte), die Nasdaq Composite bei 25.372,01 Punkten (+0,8 % bzw. +207,65 Punkte); der Dow Jones gab dagegen um 0,4 % (-197,26 Punkte) auf 51.786,72 Punkte nach.",
            ask: [{ label: "Warum fällt oder steigt die Nasdaq?", ref: "chain:nasdaq-why" }] }
        ]},
        { h: "Was zeigt der Blick auf frühere Zwischenwahljahre?", items: [
          { tag: "fakt", text: "Mehrere Medien zitierten eine Analyse der Deutschen Bank, wonach der S&P 500 in allen 20 US-Zwischenwahljahren seit 1946 binnen zwölf Monaten gestiegen sei, im Durchschnitt um 14,4 %.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Welche Sektoren waren von der Wahlnacht besonders betroffen?", items: [
          { tag: "unbestaetigt", text: "Berichte zufolge gerieten in der Wahlnacht und am Mittwochmorgen insbesondere KI- und Rechenzentrums-nahe Aktien wie CoreWeave, Tesla und SpaceX zeitweise unter Druck, weil neu gewählte demokratische Gouverneure in Bundesstaaten mit großen Rechenzentrums-Investitionen im Wahlkampf strengere Regeln angekündigt hatten; die US-Futures erholten sich im Tagesverlauf aber wieder.",
            ask: [{ label: "Mehr zu CoreWeave und der Tech-Branche", ref: "s:15" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass S&P 500 und Nasdaq am Wahltag zulegten, während der Dow wegen Apple nachgab und einzelne KI-Werte kurzzeitig unter Druck gerieten, zeigt, dass Anleger die Zwischenwahlen und ihre möglichen Folgen für Technologieregulierung und Haushaltspolitik differenziert einpreisen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Reaktion in Europa wird in Meldung 1 behandelt, Gold/Bitcoin/Euro in Meldung 3, die Zwischenwahl-Ergebnisse im Detail in Meldung 9, die Apple-Nachwirkungen in Meldung 15.",
      terms: ["rendite"],
      followups: ["chain:nasdaq-why", "e:yield-stocks"],
      sources: [
        { title: "WTOP/AP: How major US stock indexes fared Tuesday, 11/3/2026", url: "https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-tuesday-11-3-2026" },
        { title: "StockTitan: Stock Market Today – Live, November 3, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-3-2026" },
        { title: "WiWo: US-Midterms – so reagieren Aktien und Anleihen", url: "https://www.wiwo.de/finanzen/boerse/us-midterms-so-reagieren-aktien-und-anleihen/100267173.html" },
        { title: "CNBC: U.S. Treasury yields, bonds", url: "https://www.cnbc.com/amp/2026/11/03/us-treasury-yields-bonds.html" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/ANLEIHEN */
    {
      id: "gold-bitcoin-eurusd-anleihen-mittwoch-11-04", cats: ["markets"], when: "Stand Mi 4.11.2026, Vormittag",
      headline: "Gold springt nach den US-Zwischenwahlen über 4.000 Dollar, Bitcoin erholt sich von seinem Wahlnacht-Tief, der Euro legt zu",
      sec30: "Gold stieg am Mittwoch um rund 2,4 bis 3,0 % auf zwischen 4.025 und 4.047 Dollar je Feinunze und damit erstmals seit längerem wieder über die Marke von 4.000 Dollar; zur genauen Höhe weichen Quellen leicht voneinander ab. Bitcoin erholte sich von einem Wahlnacht-Tief bei rund 75.740 Dollar auf etwa 78.300 Dollar (+0,9 %). Der Euro legte gegenüber dem Dollar um 0,6 % auf rund 1,1260 zu. Die Rendite zehnjähriger Bundesanleihen gab leicht auf rund 3,32 % nach, die US-10-Jahres-Rendite blieb nach einem kurzen Anstieg am Wahltag bei rund 4,90 bis 4,95 % weitgehend stabil.",
      blocks: [
        { h: "Wie haben sich Gold und Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Gold stieg am Mittwoch auf zwischen 4.025 und 4.047 Dollar je Feinunze (+2,4 % bis +3,0 %, je nach Quelle); Bitcoin erholte sich von einem Wahlnacht-Tief bei rund 75.740 Dollar auf etwa 78.300 Dollar (+0,9 %).",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }, { label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] },
          { tag: "unbestaetigt", text: "Zur exakten Tageshöhe von Gold liegen unterschiedliche Angaben vor (zwischen rund 4.025 und 4.047 Dollar); eine einheitliche Bestätigung lag zum Redaktionsschluss nicht vor." }
        ]},
        { h: "Was nennen Berichte als Grund?", items: [
          { tag: "einordnung", text: "Die Erwartung einer politischen Blockade in Washington nach dem Machtwechsel im Kongress sowie anhaltende Spannungen am Persischen Golf werden von Berichten als Treiber für die Gold-Rally genannt; bei Bitcoin wird die insgesamt wieder risikofreudigere Stimmung nach den Zwischenwahlen angeführt." }
        ]},
        { h: "Wie entwickelten sich Euro und Anleiherenditen?", items: [
          { tag: "fakt", text: "Der Euro legte gegenüber dem Dollar um 0,6 % auf rund 1,1260 zu. Die Rendite zehnjähriger Bundesanleihen gab leicht auf rund 3,32 % nach (von rund 3,42 % Ende Oktober), die US-10-Jahres-Rendite blieb nach einem kurzen Anstieg am Wahltag auf gut 4,94 % bei rund 4,90 bis 4,95 % weitgehend stabil.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold über 4.000 Dollar springt und Bitcoin sich zugleich von seinem Wahlnacht-Tief erholt, zeigt, dass Anleger die Nacht uneinheitlich deuten: teils als Anlass für Absicherung, teils als generelle Risikoerleichterung. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Entwicklung bei DAX/Euro Stoxx 50 wird in Meldung 1 behandelt, die US-Schlusskurse in Meldung 2, die Zwischenwahlen im Detail in Meldung 9.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "finanzen.ch: Goldpreis – starkes Comeback über 4.000 Dollar nach US-Zwischenwahlen", url: "https://finanzen.ch/nachrichten/rohstoffe/goldpreis-starkes-comeback-ueber-4000-dollar-nach-us-zwischenwahlen-1036713253" },
        { title: "wallstreet-online: Goldpreis – Gold-Rally +2,42 %, 4.026,59 USD", url: "https://www.wallstreet-online.de/nachricht/21634332-goldpreis-gold-rally-2-42-24h-4-026-59-usd" },
        { title: "finanzen.net: Kryptomarkt – Wahlnacht überstanden, Bitcoin erholt sich", url: "https://www.finanzen.net/nachricht/devisen/kryptomarkt-wahlnacht-ueberstanden-bitcoin-erholt-sich-nach-tief-bei-75-740-dollar-auf-78-300-dollar-00-16035841" },
        { title: "finanzen.at: Deutsche Anleihen – leichte Kursgewinne nach US-Zwischenwahl", url: "https://www.finanzen.at/nachrichten/anleihen/deutsche-anleihen-leichte-kursgewinne-nach-us-zwischenwahl-1036713744" }
      ]
    },
    /* 4 WIRTSCHAFT: EUROZONE-INFLATION */
    {
      id: "eurozone-inflation-oktober-flash-11-04", cats: ["economy"], when: "Eurostat-Schnellschätzung veröffentlicht Mi 4.11.2026",
      headline: "Die Inflation in der Eurozone steigt im Oktober auf 4,0 Prozent, den höchsten Stand seit September 2023",
      sec30: "Laut der heute veröffentlichten Eurostat-Schnellschätzung stieg die Inflation in der Eurozone im Oktober auf 4,0 % (von 3,8 % im September); die Kerninflation ohne Energie, Lebensmittel, Alkohol und Tabak blieb mit 2,5 % stabil. Haupttreiber war erneut die Energie (+20,8 % ggü. Vorjahr, nach +18,9 % im September). Zwischen den Ländern gibt es weiterhin große Unterschiede: Deutschland meldet 2,8 %, Frankreich 3,8 %, Italien 5,6 % und Spanien 4,9 %. Die vollständigen Oktober-Daten folgen am 18.11.2026.",
      blocks: [
        { h: "Was zeigt die Eurostat-Schnellschätzung für Oktober?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone stieg im Oktober 2026 laut Eurostat-Schnellschätzung auf 4,0 % (von 3,8 % im September) – der höchste Stand seit September 2023. Die Kerninflation ohne Energie, Lebensmittel, Alkohol und Tabak blieb stabil bei 2,5 %.",
            ask: [{ label: "Was ist Inflation, und wie wird sie gemessen?", ref: "t:inflation" }, { label: "Was ist Kerninflation?", ref: "t:kerninflation" }] }
        ]},
        { h: "Welche Preiskomponenten trieben die Inflation?", items: [
          { tag: "fakt", text: "Nach Komponenten: Energie +20,8 % (von +18,9 % im September), Dienstleistungen +3,3 % (von +3,2 %), Lebensmittel/Alkohol/Tabak +1,6 % (von +1,3 %), Industriegüter ohne Energie +1,2 %." }
        ]},
        { h: "Wie unterscheiden sich die Länder?", items: [
          { tag: "fakt", text: "Deutschland meldet 2,8 % (rückläufig), Frankreich 3,8 % (von 3,4 %), Italien 5,6 % (von 4,2 %, stärkster Anstieg) und Spanien 4,9 % (leicht rückläufig). EU-weit die höchsten Werte meldeten Litauen (6,1 %) und Bulgarien (6,0 %), den niedrigsten Malta (2,3 %)." },
          { tag: "einordnung", text: "Als Haupttreiber der insgesamt höheren Eurozone-Inflation nennen Berichte die anhaltend hohen Energiepreise, unter anderem im Zusammenhang mit den Lieferstörungen am Persischen Golf.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:11" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Gesamtinflation steigt, während die Kerninflation stabil bleibt, deutet darauf hin, dass vor allem die Energiepreise für den Anstieg verantwortlich sind und sich der breitere Preisdruck bislang nicht verstärkt hat. Das dürfte die Diskussion um eine EZB-Zinserhöhung im Dezember beeinflussen.",
            ask: [{ label: "Mehr zur EZB-Zinserwartung", ref: "s:5" }] }
        ]}
      ],
      reaction: "Die EZB-Reaktion wird in Meldung 5 behandelt, weitere Konjunkturdaten in Meldung 6, der Ölpreis-Hintergrund in Meldung 11.",
      terms: ["inflation", "kerninflation", "erzeugerpreise"],
      followups: ["e:inflation-what", "e:oil-inflation", "e:central-banks-why"],
      sources: [
        { title: "Eurostat: Euro area annual inflation – flash estimate, November 2026", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-04112026-ap" },
        { title: "finanznachrichten.de (dpa-AFX): ROUNDUP – Inflationsrate der Eurozone steigt auf 4,0 Prozent", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70031011-roundup-inflationrate-der-eurozone-steigt-auf-4-0-prozent-016.htm" },
        { title: "Euronews: Eurozone inflation hits 4% – which countries saw prices jump the most", url: "https://www.euronews.com/2026/11/04/eurozone-inflation-hits-4-which-countries-saw-prices-jump-the-most" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB DEZEMBER-ZINSERHÖHUNG + PERSONALFRAGEN */
    {
      id: "ezb-dezember-zinserhoehung-personalfragen-11-04", cats: ["economy", "markets"], when: "Nagel-Aussage 3.11. · Nominierungsfrist EZB-Spitze 6.11. · Finanzministertreffen 9.11.2026",
      headline: "Bundesbank-Präsident Nagel hält eine EZB-Zinserhöhung im Dezember für sehr wahrscheinlich notwendig, im Rennen um die Lagarde-Nachfolge zeichnen sich zwei Favoriten ab",
      sec30: "Bundesbank-Präsident Joachim Nagel sagte am 3.11. in Berlin, eine EZB-Zinserhöhung im Dezember sei aus heutiger Sicht „sehr wahrscheinlich notwendig”, der Inflationsausblick habe sich verschlechtert. Nach der heutigen Eurostat-Zahl (Meldung 4) gilt eine Erhöhung um 0,25 Prozentpunkte am 17.12. bei Analysten inzwischen weitgehend als gesetzt. Bei der Nachfolge von EZB-Präsidentin Lagarde (Rücktritt zum 7.2.2027) läuft die Nominierungsfrist für die Eurostaaten bis Freitag, 6.11.; die Euro-Finanzminister prüfen die Vorschläge am 9.11. Als Favoriten werden BIZ-Chef Pablo Hernández de Cos und der frühere niederländische Notenbankchef Klaas Knot genannt, auch Bundesbank-Chef Nagel wird weiter gehandelt.",
      blocks: [
        { h: "Was sagte Bundesbank-Präsident Nagel?", items: [
          { tag: "position", text: "Bundesbank-Präsident Joachim Nagel sagte am 3.11.2026 in Berlin, eine EZB-Zinserhöhung im Dezember sei aus heutiger Sicht „sehr wahrscheinlich notwendig”; der Inflationsausblick habe sich verschlechtert.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "EZB-Ratsmitglieder Peter Kažimír (Slowakei) und Dimitar Radev (Bulgarien) betonten zuvor, die Zinspause vom 29.10. sei „keine Ziellinie” gewesen; Kažimír stellte laut Berichten nicht mehr die Frage, ob, sondern wie viel weitere geldpolitische Straffung nötig sei." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Isabel Schnabel wechselt zum IWF (Direktorin für Kapitalmärkte ab 4.1.2027); ihre reguläre EZB-Amtszeit hätte bis Ende 2027 gelaufen. 2027 müssen zusätzlich die EZB-Präsidentschaft und der Posten des Chefökonomen (Philip Lanes Amtszeit endet im Juni 2027) neu besetzt werden." }
        ]},
        { h: "Wer sind die Kandidaten für die Lagarde-Nachfolge?", items: [
          { tag: "fakt", text: "Die Eurostaaten müssen ihre Kandidatenvorschläge für die Lagarde-Nachfolge bis Freitag, 6.11.2026, einreichen; die Euro-Finanzminister prüfen die Vorschläge am 9.11." },
          { tag: "unbestaetigt", text: "Als Favoriten werden BIZ-Chef Pablo Hernández de Cos (Spanien) und der frühere niederländische Notenbankchef Klaas Knot genannt; auch Bundesbank-Chef Joachim Nagel wird weiter gehandelt. Bundesfinanzminister Klingbeil plant laut Berichten einen eigenen deutschen Personalvorschlag, möglicherweise im Paket mit weiteren zu besetzenden EZB-Spitzenposten." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Bundesbank-Chef Nagel eine Dezember-Erhöhung für sehr wahrscheinlich notwendig hält, kurz nachdem die Eurozone-Inflation auf 4,0 % gestiegen ist, zeigt, wie eng die heutigen Konjunkturdaten mit der Zinsdebatte verknüpft sind – während gleichzeitig mehrere EZB-Spitzenposten neu besetzt werden müssen.",
            ask: [{ label: "Mehr zur Eurozone-Inflation", ref: "s:4" }] }
        ]}
      ],
      reaction: "Die Inflationsdaten werden in Meldung 4 behandelt, Fed-Aussagen und weitere Konjunkturdaten in Meldung 6.",
      terms: ["leitzins", "basispunkt"],
      followups: ["e:ecb-hike", "e:central-banks-why"],
      sources: [
        { title: "cash.ch: Währungshüter Nagel – EZB-Zinserhöhung im Dezember ist aus heutiger Sicht sehr wahrscheinlich nötig", url: "https://www.cash.ch/news/top-news/wahrungshuter-nagel-ezb-zinserhohung-im-dezember-ist-aus-heutiger-sicht-sehr-wahrscheinlich-notig-982169" },
        { title: "onvista: Kažimír – EZB fordert straffere Geldpolitik, Zinspause war keine Ziellinie", url: "https://www.onvista.de/news/2026/11-02-kazimir-ezb-fordert-straffere-geldpolitik-zinspause-war-keine-ziellinie-0-20-26571111" },
        { title: "onvista: Euro-Länder müssen EZB-Kandidaten für Lagarde-Nachfolge bis Freitag nominieren", url: "https://www.onvista.de/news/2026/11-03-euro-laender-muessen-ezb-kandidaten-fuer-lagarde-nachfolge-bis-freitag-nominieren-0-20-26571728" },
        { title: "Euronews: Who will replace Lagarde? Eurozone picks nominees as race for ECB top job begins", url: "https://www.euronews.com/2026/11/03/who-will-replace-lagarde-eurozone-picks-nominees-as-race-for-ecb-top-job-begins" },
        { title: "wiwo.de: Europäische Zentralbank – Euro-Finanzminister suchen Nachfolge für Schnabel bei EZB", url: "https://www.wiwo.de/politik/europa/europaeische-zentralbank-euro-finanzminister-suchen-nachfolge-fuer-schnabel-bei-ezb/100260932.html" }
      ]
    },
    /* 6 WIRTSCHAFT: FED-FALKEN + PMI + ARBEITSMARKT */
    {
      id: "fed-falken-pmi-arbeitsmarkt-11-04", cats: ["economy"], when: "Fed-Statements seit 28.10. · PMI final Okt. · Arbeitsmarkt Okt. (BA, 30.10.2026)",
      headline: "Mehrere Fed-Vertreter werben für weitere Zinserhöhungen, die Stimmung bei Dienstleistern in der Eurozone kühlt stärker ab als erwartet, die deutsche Arbeitslosigkeit sinkt nur leicht",
      sec30: "Die Fed hatte ihren Leitzins am 28.10. bei 3,75 bis 4,00 % belassen (10:2-Entscheidung der Stimmberechtigten); seither werben mehrere Vertreter öffentlich für weitere Zinsschritte. Dallas-Fed-Chefin Lorie Logan nannte das aktuelle Preisniveau „unacceptable” und forderte mindestens zwei weitere Erhöhungen um je 0,25 Prozentpunkte; Fed-Gouverneur Michael Barr sagte, weitere Erhöhungen seien „likely” nötig. Der Eurozone-Einkaufsmanagerindex (PMI) für Dienstleister fiel im Oktober überraschend stark auf 51,4 Punkte (von 53,0), der Gesamtindex sank auf 51,7. Die deutsche Arbeitslosigkeit sank im Oktober um 40.000 auf 2,955 Millionen (Quote 6,3 %); BA-Chefin Andrea Nahles bezeichnete den Rückgang als „vergleichsweise schwach”.",
      blocks: [
        { h: "Was sagen Fed-Vertreter seit der Sitzung vom 28.10.?", items: [
          { tag: "fakt", text: "Die Fed beließ ihren Leitzins am 28.10.2026 im Zielkorridor von 3,75 bis 4,00 %; zwei der zwölf Stimmberechtigten (Cook und Hammack) votierten für eine sofortige Erhöhung um 0,25 Prozentpunkte.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Dallas-Fed-Präsidentin Lorie Logan bezeichnete das aktuelle Preisniveau als „unacceptable” und forderte mindestens zwei weitere Zinserhöhungen um je 0,25 Prozentpunkte; Richmond-Fed-Präsident Thomas Barkin verwies auf hohe Inflation, starke Nachfrage und relativ niedrige Arbeitslosigkeit als Argumente für weitere Schritte; Fed-Gouverneur Michael Barr sagte, weitere Erhöhungen seien „likely” nötig." }
        ]},
        { h: "Was zeigt der Eurozone-PMI für Oktober?", items: [
          { tag: "fakt", text: "Der Einkaufsmanagerindex (PMI) für Dienstleister in der Eurozone fiel im Oktober überraschend stark auf 51,4 Punkte (von 53,0 im September); der Industrie-PMI lag bei 52,7, der Gesamtindex (Composite) sank auf 51,7 (von 53,1) – ein Zeichen für ein nachlassendes Wachstumstempo." }
        ]},
        { h: "Wie entwickelte sich der deutsche Arbeitsmarkt im Oktober?", items: [
          { tag: "fakt", text: "Die Zahl der Arbeitslosen in Deutschland sank im Oktober 2026 um 40.000 auf 2,955 Millionen (Quote 6,3 %, -0,1 Punkte ggü. September); saisonbereinigt waren es 9.000 weniger. Im Jahresvergleich gab es aber 44.000 mehr Arbeitslose als im Oktober 2025; gemeldet waren 654.000 offene Stellen (+31.000 ggü. Vorjahr)." },
          { tag: "position", text: "BA-Chefin Andrea Nahles bezeichnete den Rückgang als „vergleichsweise schwach”." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mehrere Fed-Vertreter weitere Zinserhöhungen fordern, während sich die Stimmung bei Dienstleistern in der Eurozone eintrübt und der deutsche Arbeitsmarkt nur verhalten verbessert, zeigt ein uneinheitliches Konjunkturbild auf beiden Seiten des Atlantiks – mit möglichen Folgen für die Zinspolitik beider Notenbanken." }
        ]}
      ],
      reaction: "Die Eurozone-Inflation wird in Meldung 4 behandelt, die EZB-Zinserwartung in Meldung 5.",
      terms: ["leitzins"],
      followups: ["e:fed-hike", "e:central-banks-why"],
      sources: [
        { title: "Federal Reserve: FOMC statement, October 28, 2026", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm" },
        { title: "Yahoo Finance: Fed's Logan/Musalem – rate hike comments", url: "https://finance.yahoo.com/economy/policy/articles/feds-musalem-says-rate-hike-163223128.html" },
        { title: "The Hill: Fed Governor Barr – rate hike", url: "https://thehill.com/business/6107670-fed-governor-barr-rate-hike/" },
        { title: "onvista: Eurozone – Dienstleister-Stimmung trübt sich stärker ein als erwartet", url: "https://www.onvista.de/news/2026/11-04-eurozone-dienstleister-stimmung-truebt-sich-staerker-ein-als-erwartet-0-10-26572280" },
        { title: "Bundesagentur für Arbeit: Arbeitsmarkt im Oktober 2026", url: "https://www.arbeitsagentur.de/presse/2026-41-arbeitsmarkt-im-oktober-2026" }
      ]
    },
    /* 7 DEUTSCHLAND: HAUSHALT/RENTENREFORM */
    {
      id: "bundeshaushalt-rentenreform-11-04", cats: ["germany", "economy"], when: "Bereinigungssitzung 12.11. · Plenumsberatung 24.–27.11. · Merz-Rede 4.11. · Koalitionsausschuss 17.11.2026",
      headline: "Der Zeitplan für den Bundeshaushalt 2027 bleibt bestehen, bei der Rentenreform verschiebt sich der Einstieg in die Kapitaldeckung auf 2027",
      sec30: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung des Haushaltsausschusses am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11. Bei der Rentenreform sagte Bundeskanzler Merz, der klassische Teil solle noch 2026 ins Kabinett, der Einstieg in die kapitalgedeckte Zusatzvorsorge werde dagegen 2026 nur als Eckpunkte vorgelegt; die endgültige Verabschiedung verschiebe sich auf Anfang 2027. Beim Koalitionsausschuss am 17.11. zeichnen sich laut Berichten mehrere Streitpunkte zwischen CDU, CSU und SPD ab, unter anderem zur Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren, zu Minijob-Regeln und zur Pflegeversicherung.",
      blocks: [
        { h: "Was wurde zum Haushalt und zur Rente angekündigt?", items: [
          { tag: "fakt", text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung des Haushaltsausschusses am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026.",
            ask: [{ label: "Wie entsteht der Bundeshaushalt?", ref: "e:haushalt-basics" }] },
          { tag: "fakt", text: "Bundeskanzler Merz kündigte an, der klassische Teil der Rentenreform solle noch 2026 ins Kabinett; der zentrale Baustein – der Einstieg in eine kapitalgedeckte Zusatzvorsorge – werde dagegen 2026 nur als Eckpunkte vorgelegt. Die endgültige parlamentarische Verabschiedung verschiebt sich damit auf Anfang 2027." }
        ]},
        { h: "Was ändert sich konkret, und welche Streitpunkte gibt es vor dem Koalitionsausschuss?", items: [
          { tag: "fakt", text: "Vor dem Koalitionsausschuss am 17.11.2026 gelten laut Berichten mehrere Punkte als strittig zwischen CDU, CSU und SPD: die von der SPD geforderte Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren („Rente mit 63”), Regeln zu Minijobs und Teilzeit für Ältere, die Einbeziehung von Berufspolitikern in die gesetzliche Rentenversicherung sowie ein von der SPD gefordertes Limit für Pflegeheim-Eigenanteile, das die Union ablehnt." }
        ]},
        { h: "Wer unterstützt die Vorschläge, und wer äußert sich kritisch?", items: [
          { tag: "position", text: "Bundeskanzler Merz bezeichnete den bisher fehlenden Einstieg in die Kapitaldeckung als „30 Jahre zu spät” und warb für die große Rentenreform auf Basis der Vorschläge der Alterssicherungskommission." },
          { tag: "position", text: "Einzelne Medien bewerteten die nun angekündigte Verschiebung des Kapitaldeckungs-Einstiegs als „Wortbruch” gegenüber früheren Ankündigungen; dies ist die Einordnung dieser Medien und keine amtliche Feststellung." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Dass der Einstieg in die Kapitaldeckung nur als Eckpunkte vorgelegt wird, bedeutet, dass zentrale Details – etwa zur Finanzierung und zum Starttermin – erst 2027 parlamentarisch entschieden werden; das verschafft der Koalition mehr Zeit, verzögert aber auch eine mögliche Entlastung der umlagefinanzierten Rente.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] }
        ]}
      ],
      reaction: "Umfragen und die Bundespräsident-Nachfolge werden in Meldung 8 behandelt.",
      terms: ["schuldenbremse", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "table.media: Reformen – Termin für Koalitionsausschuss im November", url: "https://table.media/berlin/news/reformen-termin-fuer-koalitionsausschuss-im-november" },
        { title: "epochtimes.de: Steuern, Arbeit, Rente – Streitpunkte vor dem nächsten Koalitionsausschuss", url: "https://www.epochtimes.de/politik/deutschland/steuern-arbeit-rente-streitpunkte-vor-dem-naechsten-koalitionsausschuss-a5625781.html" },
        { title: "Hersfelder Zeitung: Merz zur Kapitalrente – „30 Jahre zu spät”", url: "https://www.hersfelder-zeitung.de/wirtschaft/merz-zur-kapitalrente-30-jahre-zu-spaet-kanzler-wirbt-fuer-grosse-rentenreform-zr-94539627.html" },
        { title: "it-boltwise.de: Koalitionsausschuss – Streit über Rente, Steuer und Pflege", url: "https://www.it-boltwise.de/koalitionsausschuss-nach-wahl-schock-streit-ueber-rente-steuer-und-pflege.html" }
      ]
    },
    /* 8 DEUTSCHLAND: UMFRAGEN/BUNDESPRÄSIDENT/BUNDESTAG */
    {
      id: "umfragen-bundespraesident-bundestag-11-04", cats: ["germany"], when: "Forsa-Umfrage veröffentlicht 3.11. · CDU-Präsidium zu Bundespräsident-Kandidatur 9.11. · Plenarsitzung 4.11.2026",
      headline: "Eine neue Forsa-Umfrage zeigt die Grünen weiter vor der SPD, in der CDU wird über Ines Claus als mögliche Bundespräsidentschafts-Kandidatin diskutiert",
      sec30: "Die Forsa-Umfrage für RTL/n-tv (Erhebung 27.10. bis 2.11., veröffentlicht 3.11.) sieht die AfD bei 26 % (-1 Punkt), die Union bei 20 % (-1), die Grünen bei 17 % (+1) und die SPD bei 14 % (+1); die Grünen liegen damit weiterhin vor der SPD. Bei der Bundespräsident-Nachfolge erwägt Kanzler Merz laut Berichten die hessische CDU-Fraktionschefin Ines Claus, die Interesse signalisiert hat; die CSU besteht weiter auf Ilse Aigner, CDU-intern gibt es Kritik an dem Vorstoß. Merz dementierte Berichte, Claus sei seine Favoritin. Der Bundestag befragte am 4.11. Außenminister Wadephul und Kanzleramtsministerin Warken im Rahmen der Regierungsbefragung.",
      blocks: [
        { h: "Was zeigt die neue Forsa-Umfrage?", items: [
          { tag: "fakt", text: "Die Forsa-Umfrage für RTL/n-tv (telefonische Erhebung 27.10. bis 2.11.2026 unter 2.500 Wahlberechtigten, veröffentlicht 3.11.) sieht die AfD bei 26 % (-1 Punkt ggü. der Vorwoche), die Union bei 20 % (-1), die Grünen bei 17 % (+1), die SPD bei 14 % (+1), die Linke bei 11 % und die FDP bei 4 %; die Grünen liegen damit weiterhin vor der SPD.",
            ask: [{ label: "Was bedeutet eine Koalition ohne Mehrheit?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was ist neu bei der Bundespräsident-Nachfolge?", items: [
          { tag: "unbestaetigt", text: "Laut mehreren Medienberichten erwägt Kanzler Merz die hessische CDU-Fraktionschefin Ines Claus als Kandidatin für die Nachfolge von Bundespräsident Steinmeier; Claus habe Interesse signalisiert. Die CSU besteht weiterhin auf der bayerischen Ministerin Ilse Aigner. Mehrere führende CDU-Politiker kritisierten den Vorstoß intern als „absurd” und verwiesen auf ein fehlendes bundespolitisches Profil von Claus." },
          { tag: "position", text: "Merz dementierte laut Berichten, Claus sei seine Favoritin. Die endgültige Entscheidung soll bei einer CDU-Präsidiumsberatung am 9.11.2026 fallen." }
        ]},
        { h: "Was wurde im Bundestag am 4.11. behandelt?", items: [
          { tag: "fakt", text: "Die Sitzungswoche begann am 4.11. mit der Regierungsbefragung: Außenminister Johann Wadephul und Kanzleramtsministerin Nina Warken (beide CDU) stellten sich den Fragen der Abgeordneten. Im weiteren Verlauf standen unter anderem der Bundeswehreinsatz EUNAVFOR MED IRINI sowie die Bekämpfung rechtsextremistischer Organisationen auf der Tagesordnung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Grünen in mehreren aktuellen Umfragen vor der SPD liegen, während sich CDU und CSU bei der Bundespräsident-Nachfolge noch nicht auf eine gemeinsame Linie verständigt haben, zeigt, dass sowohl das Parteiengefüge als auch Personalfragen innerhalb der Koalition derzeit in Bewegung sind." }
        ]}
      ],
      reaction: "Haushalt und Rentenreform werden in Meldung 7 behandelt.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:landtagswahl-why"],
      sources: [
        { title: "dawum.de: Forsa-Umfrage zur Bundestagswahl vom 03.11.2026", url: "https://dawum.de/Bundestag/Forsa/2026-11-03/" },
        { title: "newstime.joyn.de: Ines Claus neue Bundespräsidentin? Merz liebäugelt mit CDU-Frau", url: "https://newstime.joyn.de/themen/politik/ines-claus-bundespraesident-steinmeier-cdu-merz-208218" },
        { title: "Ostdeutsche Zeitung: Ines Claus – Merz dementiert Berichte über Favoritin", url: "https://ostdeutsche-zeitung.de/berlin/politik/berlin-ines-claus-bundespraesidentin-merz-aigner-11574" },
        { title: "Deutscher Bundestag: Regierungsbefragung mit Wadephul und Warken", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw45-de-regierungsbefragung-1154780" }
      ]
    },
    /* 9 INTERNATIONAL/GEOPOLITIK: US-ZWISCHENWAHLEN */
    {
      id: "us-midterms-ergebnisse-11-04", cats: ["world"], when: "Wahltag Di 3.11. · Teilauszählung Stand Mi 4.11.2026",
      headline: "Die Demokratische Partei gewinnt die Kontrolle über beide Kammern des US-Kongresses zurück, mehrere bislang republikanische Bundesstaaten wählen erstmals demokratische Gouverneure",
      sec30: "Bei den US-Zwischenwahlen am 3.11.2026 haben die Demokraten die Kontrolle über Repräsentantenhaus und Senat zurückgewonnen; mehrere Medien sprechen von einer deutlichen Mehrheit. Minderheitsführer Hakeem Jeffries gilt als künftiger Speaker. Bei den Gouverneurswahlen gewannen Demokraten mehrere bislang republikanische Bundesstaaten, darunter Texas (Gina Hinojosa) und Georgia (Keisha Lance Bottoms). Präsident Trump gratulierte den Demokraten und kündigte an, künftig verstärkt sein Veto einzusetzen. Zum Redaktionsschluss waren nicht alle Rennen final ausgezählt.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Ein von den Demokraten mitkontrollierter Kongress kann die Gesetzgebungsagenda von Präsident Trump für die zweite Hälfte seiner Amtszeit deutlich erschweren, etwa bei Haushalts- und Regulierungsfragen; zugleich steigt die Bedeutung möglicher Vetos des Präsidenten." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Die Demokraten gewannen laut mehreren übereinstimmenden Medienberichten die Mehrheit im Repräsentantenhaus; Minderheitsführer Hakeem Jeffries gilt als künftiger Speaker und wäre damit der erste Schwarze in diesem Amt. Im Senat gewannen die Demokraten und mit ihnen verbündete Unabhängige nach bisherigem Auszählungsstand mindestens 52 Sitze; einzelne Rennen (u. a. in Alaska und Mississippi) waren zum Redaktionsschluss noch nicht entschieden." },
          { tag: "unbestaetigt", text: "Bei den rund 36 Gouverneurswahlen flippten mehrere bislang republikanische Bundesstaaten: In Texas gewann Gina Hinojosa gegen Amtsinhaber Greg Abbott, in Georgia Keisha Lance Bottoms, in Ohio Amy Acton gegen Vivek Ramaswamy. Einzelne Sitzzahlen und Bundesstaaten-Ergebnisse wichen zwischen Quellen zum Redaktionsschluss noch leicht voneinander ab." }
        ]},
        { h: "Welcher historische Hintergrund ist relevant?", items: [
          { tag: "fakt", text: "Laut Berichten wäre dies der erste Kontrollwechsel im Senat in zwei aufeinanderfolgenden Wahlzyklen seit 1954. Vorab hatten Prognosemärkte wie Polymarket und Kalshi den Demokraten rund 94 % Chance auf die Mehrheit im Repräsentantenhaus und rund 75 % Chance auf einen „Sweep” beider Kammern eingeräumt." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "position", text: "Präsident Trump gratulierte den Demokraten in einem Interview und kündigte an, künftig verstärkt von seinem Vetorecht Gebrauch zu machen; er bezeichnete sich dabei selbst als „Mr. Veto”." },
          { tag: "einordnung", text: "An den Finanzmärkten wird der Ausgang überwiegend als Erleichterung gedeutet (Meldung 1), während einzelne Rechenzentrums- und KI-nahe Aktien wegen angekündigter strengerer Regulierung in neu gewonnenen Bundesstaaten zunächst unter Druck gerieten (Meldung 15).",
            ask: [{ label: "Mehr zur Marktreaktion", ref: "s:1" }, { label: "Mehr zu Tech-Aktien", ref: "s:15" }] }
        ]}
      ],
      reaction: "Die Marktreaktion wird in Meldung 1 (Europa) und Meldung 2 (USA) behandelt, Folgen für Tech-Aktien in Meldung 15.",
      terms: [],
      followups: [],
      sources: [
        { title: "NBC News: 2026 US House of Representatives election results", url: "https://www.nbcnews.com/politics/2026-elections/house-results" },
        { title: "CBS News: Election Day 2026 midterms – live updates", url: "https://www.cbsnews.com/live-updates/election-day-2026-midterms/" },
        { title: "Newsweek: Trump says he'll become „Mr. Veto” if Democrats win midterms", url: "https://www.newsweek.com/trump-says-hell-become-mr-veto-if-democrats-win-midterms-12649797" },
        { title: "NBC News: Gina Hinojosa wins Texas governor race, upsetting Greg Abbott", url: "https://www.nbcnews.com/politics/2026-election/gina-hinojosa-win-texas-governor-race-greg-abbott-upset-election-rcna603360" },
        { title: "The Block: Midterm election odds on Polymarket and Kalshi", url: "https://www.theblock.co/news/regulation/2026-11-03-midterm-election-odds-polymarket-kalshi-democrats-432461" }
      ]
    },
    /* 10 INTERNATIONAL/GEOPOLITIK: UKRAINE/SELENSKYJ/ABU DHABI */
    {
      id: "ukraine-merz-selenskyj-abudhabi-11-04", cats: ["world", "geo"], when: "Merz-Selenskyj-Treffen Berlin 4.11. · Abu-Dhabi-Gespräche geplant 10./11.11.2026",
      headline: "Präsident Selenskyj besucht überraschend das Berliner Kanzleramt, der Kreml bestätigt die für 10./11. November geplanten Dreiergespräche in Abu Dhabi",
      sec30: "In der Nacht zum 3.11. griff Russland großflächig die ukrainische Energieinfrastruktur an; der Energiekonzern DTEK meldete massive Schäden an drei Wärmekraftwerken, in Dnipro gab es einen Toten und mehr als ein Dutzend Verletzte. Zeitgleich traf Präsident Selenskyj überraschend mit Bundeskanzler Merz in Berlin zusammen. Der Kreml bestätigte die für 10. und 11. November in Abu Dhabi geplanten Dreiergespräche zwischen russischen, US-amerikanischen und ukrainischen Vertretern; Territorialfragen gelten weiter als strittig. International bleibt die Waffenruhe in Gaza grundsätzlich in Kraft, Venezuelas Oppositionsführerin Machado forderte Wahlen für 2027, und Taiwan meldet verstärkte chinesische Aktivität vor den Lokalwahlen am 28.11.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Der zeitlich mit den US-Zwischenwahlen zusammenfallende russische Großangriff und der kurzfristige Berlin-Besuch Selenskyjs zeigen, dass der Krieg in der Ukraine und die Suche nach einer Verhandlungslösung weiterhin eng mit internationalen Entwicklungen verzahnt sind." }
        ]},
        { h: "Wer ist an den geplanten Abu-Dhabi-Gesprächen beteiligt?", items: [
          { tag: "fakt", text: "Für die für 10./11.11.2026 geplanten Dreiergespräche in Abu Dhabi sind auf russischer Seite Vladimir Medinsky, auf US-Seite Steve Witkoff und Jared Kushner sowie eine ukrainische Delegation ohne Präsident Selenskyj vorgesehen. Themen sind laut Kreml-Angaben Sicherheitsgarantien und „nächste Schritte zum Frieden”; Territorialfragen, insbesondere zu Donezk, gelten weiterhin als strittig." }
        ]},
        { h: "Welcher Hintergrund ist relevant?", items: [
          { tag: "fakt", text: "In der Nacht zum 3.11.2026 führte Russland einen großflächigen Angriff auf die ukrainische Energieinfrastruktur durch; laut dem Energiekonzern DTEK wurden drei Wärmekraftwerke massiv beschädigt, in Dnipro gab es einen Toten und mehr als ein Dutzend Verletzte.",
            ask: [{ label: "Mehr zur Lage am Energiemarkt", ref: "s:11" }] },
          { tag: "position", text: "Präsident Selenskyj warf Russland bei seinem Berlin-Besuch vor, den Angriff bewusst auf den Tag der US-Zwischenwahlen gelegt zu haben; Bundeskanzler Merz forderte Russland zu ernsthaften Verhandlungen auf." }
        ]},
        { h: "Was ist sonst international wichtig?", items: [
          { tag: "fakt", text: "In Gaza hält die Waffenruhe vom Oktober 2025 grundsätzlich, Israel fliegt nach Angaben von Gesundheitsbehörden aber weiterhin Vergeltungsschläge; seit der Waffenruhe seien dort rund 800 Menschen gestorben." },
          { tag: "position", text: "Venezuelas Oppositionsführerin María Corina Machado forderte nach ihrer Rückkehr aus dem Exil Wahlen für 2027." },
          { tag: "unbestaetigt", text: "Taiwan meldet verstärkte chinesische „Grauzonen”-Aktivität vor den dortigen Lokalwahlen am 28.11.2026." }
        ]}
      ],
      reaction: "Der Energiemarkt-Hintergrund wird in Meldung 11 behandelt, die US-Zwischenwahlen im Detail in Meldung 9.",
      terms: [],
      followups: [],
      sources: [
        { title: "ORF: Selenskyj zu Besuch bei Merz in Berlin", url: "https://orf.at/stories/3446933/" },
        { title: "Meduza: Trilateral talks between Russia, Ukraine and the US set for November 10–11 in Abu Dhabi", url: "https://meduza.io/en/news/2026/11/03/trilateral-talks-between-russia-ukraine-and-us-set-for-november-10-11-in-abu-dhabi" },
        { title: "NZZ: Waffenruhe im Gazastreifen – die neuesten Entwicklungen", url: "https://www.nzz.ch/international/waffenruhe-im-gazastreifen-die-neusten-entwicklungen-ld.1920307" },
        { title: "Al Jazeera: Machado lauds Trump for „freedom”, urges 2027 elections", url: "https://www.aljazeera.com/news/2026/10/30/machado-lauds-trump-for-freedom-floodgate-urges-2027-elections" }
      ]
    },
    /* 11 ENERGIE/GEOPOLITIK: HORMUZ/OEL/TTF */
    {
      id: "hormuz-eskalation-oelpreis-ttf-11-04", cats: ["energy", "geo"], when: "IRGC-Meldungen 3.–4.11. · Brent/TTF Stand Mi 4.11.2026",
      headline: "Der Iran meldet weitere Tankertreffer an der Straße von Hormus und den Abschuss einer US-Drohne, der Ölpreis bleibt trotz Entspannungshoffnungen volatil",
      sec30: "Die iranischen Revolutionsgarden (IRGC) meldeten am 4.11., vier weitere Öltanker seien auf einer gesperrten Route südlich der Straße von Hormus auf Seeminen gelaufen und hätten Feuer gefangen; zwei weitere Schiffe seien wegen Verstößen gegen Schifffahrtsbeschränkungen festgesetzt worden. Eine unabhängige Bestätigung lag zum Redaktionsschluss nicht vor. Der Ölpreis Brent gab dennoch von einem Hoch bei rund 117 Dollar in der Vorwoche und rund 106 bis 107 Dollar am Dienstag auf etwa 102 bis 105 Dollar nach; Berichte nennen Hoffnung auf eine diplomatische Lösung als Grund. Der europäische Gaspreis TTF wurde zum Redaktionsschluss uneinheitlich beziffert; die deutschen Gasspeicher lagen zuletzt bestätigt bei 61,17 % Füllstand (31.10.).",
      blocks: [
        { h: "Was meldet der Iran zur Lage an der Straße von Hormus?", items: [
          { tag: "unbestaetigt", text: "Die iranischen Revolutionsgarden (IRGC) meldeten am 4.11.2026, vier weitere Öltanker seien auf einer von Iran gesperrten Route südlich der Straße von Hormus auf Seeminen gelaufen und in Flammen aufgegangen; zwei weitere Schiffe seien wegen Verstößen gegen Schifffahrtsbeschränkungen festgesetzt worden. Zusätzlich meldete die IRGC den Abschuss einer US-Drohne vom Typ MQ-9, nach eigenen Angaben die 56. seit Kriegsbeginn. Eine unabhängige Bestätigung dieser Angaben lag zum Redaktionsschluss nicht vor.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "Der iranische Sicherheitsrat bezeichnete die US-Antwort auf einen iranischen Sieben-Punkte-Plan als „nicht überzeugend”; Präsident Trump bestätigte einen weiteren begrenzten US-Luftschlag auf eine iranische Flugabwehranlage auf der Insel Qeshm und nannte dies „not war”." }
        ]},
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "fakt", text: "Brent gab von einem Hoch von rund 117 Dollar in der vergangenen Woche und rund 106 bis 107 Dollar am Dienstag auf etwa 102 bis 105 Dollar am Mittwoch nach; WTI notierte bei rund 95 bis 96 Dollar.",
            ask: [{ label: "Wie entsteht der Ölpreis?", ref: "n:brent" }] },
          { tag: "einordnung", text: "Berichte nennen Hoffnungen auf eine diplomatische Lösung zwischen den USA und Iran sowie gestiegene Exporte aus den Golfstaaten als Gründe für den Rückgang, obwohl der Iran gleichzeitig neue Tankertreffer meldete; ein zurückgehender US-Lagerbestand (laut API-Daten) wirkte dem Rückgang leicht entgegen." }
        ]},
        { h: "Wie ist der Stand bei TTF-Gas und den deutschen Gasspeichern?", items: [
          { tag: "unbestaetigt", text: "Zum europäischen Gaspreis TTF lagen zum Redaktionsschluss uneinheitliche Angaben vor; ein Rückgang von der Dienstags-Spitze wurde berichtet, eine verlässliche Bestätigung des exakten Mittwoch-Niveaus stand noch aus." },
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen zum zuletzt bestätigten Stand (31.10.2026) bei 61,17 % Füllstand (151,31 von 247,36 TWh Kapazität); die Bundesnetzagentur sieht die Versorgungssicherheit weiterhin nicht gefährdet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz neuer, unbestätigter Tankermeldungen nachgibt, zeigt, dass die Märkte derzeit stärker auf Hoffnungen einer diplomatischen Lösung als auf einzelne Vorfallsmeldungen reagieren. Über die Kette von Konflikt über Ölpreis bis zu Inflation und Zinsen informiert die Übersicht unten.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Die Marktreaktion bei Gold wird in Meldung 3 behandelt, die Eurozone-Inflation in Meldung 4, der Hintergrund zu Selenskyjs Berlin-Besuch in Meldung 10.",
      terms: ["brent", "ttf", "lng"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:gas-ttf", "chain:oil-to-markets"],
      sources: [
        { title: "Al Jazeera: Iran says US reply to Hormuz plan „unconvincing”, Trump confirms strikes", url: "https://aljazeera.com/news/2026/11/4/iran-says-us-reply-to-hormuz-plan-unconvincing-trump-confirms-strikes" },
        { title: "IntelliNews: Iran's IRGC says four more tankers hit mines in Hormuz, 56th US drone downed", url: "https://www.intellinews.com/iran-s-irgc-says-four-more-tankers-hit-mines-in-hormuz-56th-us-drone-downed-481702/" },
        { title: "Hansa-Online: Iran meldet Tanker-Minentreffer", url: "https://hansa-online.de/schifffahrt/iran-meldet-tanker-minentreffer/312247/" },
        { title: "esyoil: Nach den Midterms bleibt der Ölmarkt nervös", url: "https://www.esyoil.com/news/nach-den-midterms-bleibt-der-oelmarkt-nervoes?id=109249" },
        { title: "ARIVA: Ölpreise steigen leicht – Iran meldet Zerstörung von Tankern", url: "https://www.ariva.de/news/oelpreise-steigen-leicht-iran-meldet-zerstoerung-von-12193966" }
      ]
    },
    /* 12 DEFENCE */
    {
      id: "rheinmetall-hensoldt-renk-euronaval-11-04", cats: ["defence"], when: "Kurse Mi 4.11. · Haushaltsausschuss 4.11. · Euronaval Paris 3.–6.11. · Q3-Zahlen Rheinmetall/RENK/Hensoldt 5.11.2026",
      headline: "Rheinmetall und Hensoldt geben vor den morgigen Quartalszahlen weiter nach, der Bundestags-Haushaltsausschuss berät über weitere Rüstungsvorhaben",
      sec30: "Rheinmetall fiel am Mittwoch um 1,66 % unter die 1.000-Euro-Marke auf rund 988,50 Euro, belastet von einem unbestätigten Branchenbericht über eine mögliche Verschiebung der milliardenschweren Boxer-Bestellung „Arminius”. Hensoldt verlor zeitweise bis zu 3,0 % wegen eskalierender Logistikprobleme im neuen Lagerverwaltungssystem ZEBEL, RENK gab rund 1,6 bis 2,0 % ab. Der Bundestags-Haushaltsausschuss berät heute über sieben weitere Rüstungsvorhaben von jeweils über 25 Mio. Euro; die Euronaval-Messe in Paris (3.–6.11.) zeigt unter anderem neue Rheinmetall-Konzepte. Rheinmetall, Hensoldt und RENK legen ihre Q3-Zahlen erst morgen, 5.11., vor.",
      blocks: [
        { h: "Wie entwickelten sich die Rüstungsaktien am Mittwoch?", items: [
          { tag: "fakt", text: "Rheinmetall fiel am Mittwoch um 1,66 % auf rund 988,50 Euro und damit unter die 1.000-Euro-Marke; RENK gab rund 1,6 bis 2,0 % auf etwa 36,30 Euro ab. Hensoldt verlor zeitweise bis zu 3,0 % auf ein Tagestief von 78,54 Euro.",
            ask: [{ label: "Warum reagieren Rüstungsaktien so empfindlich?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "Als Hintergrund für den Rheinmetall-Rückgang nennt ein Branchenbericht (hartpunkt.de) eine mögliche Verschiebung der milliardenschweren Boxer-Großbestellung „Arminius” von Dezember 2026 auf Februar 2027; eine offizielle Bestätigung durch Rheinmetall liegt nicht vor." }
        ]},
        { h: "Was ist beim ZEBEL-Logistikproblem von Hensoldt neu?", items: [
          { tag: "unbestaetigt", text: "Laut Berichten treten im neuen Lagerverwaltungssystem ZEBEL am Hensoldt-Standort Wolfhagen inzwischen bis zu 1.000 Störungen täglich auf (gegenüber rund 100 pro Jahr zuvor); Ersatzteile kämen kaum noch aus dem Lager, rund 500 Arbeitsplätze in Werkstätten seien von Kurzarbeit bedroht. Hensoldt beziffert die eigene Erfüllungsquote auf 98 %, Insider widersprechen dieser Einschätzung laut Berichten." }
        ]},
        { h: "Worüber berät der Haushaltsausschuss heute, und was zeigt Euronaval?", items: [
          { tag: "fakt", text: "Der Bundestags-Haushaltsausschuss berät am 4.11.2026 über sieben weitere 25-Millionen-Euro-Vorlagen (Nummer 63 bis 69 in diesem Jahr) zur Bundeswehr-Beschaffung aus Einzelplan 14; die große Arminius-Entscheidung steht nicht auf der heutigen Tagesordnung." },
          { tag: "fakt", text: "Auf der Euronaval-Messe in Paris (3. bis 6.11., rund 450 bis 500 Aussteller) zeigt Rheinmetall unter anderem ein „Hybrid Fleet”-Konzept aus bemannten und unbemannten Einheiten sowie die Fregatte GMF 140; konkrete neue Vertragsabschlüsse mit Zahlen wurden bislang nicht vermeldet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Rheinmetall, Hensoldt und RENK vor ihren morgigen Quartalszahlen nachgeben, während gleichzeitig ein unbestätigter Bericht über eine Auftragsverschiebung und ein eskalierendes Logistikproblem kursieren, zeigt, wie nervös der Markt auf einzelne, teils unbestätigte Meldungen reagiert, solange die offiziellen Geschäftszahlen noch ausstehen." }
        ]}
      ],
      reaction: "Die Q3-Zahlen von Rheinmetall, Hensoldt und RENK werden voraussichtlich in der morgigen Ausgabe behandelt.",
      terms: ["closing"],
      followups: ["e:defence-stocks", "e:defence-order", "e:nato-target"],
      sources: [
        { title: "boerse-express: Rheinmetall-Aktie – Bund könnte 20-Milliarden-Order schieben", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-bund-koennte-20-milliarden-order-schieben-959073" },
        { title: "finanzen.ch: Hensoldt-Aktie – Kursbewegung 04.11.2026", url: "https://www.finanzen.ch/nachrichten/aktien/hensoldt-aktie-kursbewegung-04-11-2026-1035060946" },
        { title: "esut.de: ZEBEL – Ersatzteilversorgung", url: "https://esut.de/2026/11/meldungen/76452/zebel-ersatzteilversorgung/" },
        { title: "esut.de: Bundeswehr – 7 Rüstungsvorhaben vor Entscheidung", url: "https://esut.de/2026/11/meldungen/76427/bundeswehr-7-ruestungsvorhaben-ent/" },
        { title: "esut.de: Euronaval 2026 – Rheinmetall Hybrid Fleet", url: "https://esut.de/2026/11/meldungen/76439/euronaval-2026-rheinmetall-hybrid/" }
      ]
    },
    /* 13 DEALS: BASF/EVONIK/EQT-QIAGEN/TESLA-SPACEX */
    {
      id: "basf-evonik-eqt-qiagen-teslaspacex-11-04", cats: ["deals", "pe"], when: "Evonik-Q3-Reaktion 3.–4.11. · Qiagen-vollständige Zahlen erst heute Abend 22:05 Uhr · Tesla/SpaceX Stand Anfang November 2026",
      headline: "Evonik verschärft nach starken Q3-Zahlen seine Ablehnung des BASF-Angebots, bei Qiagen stehen die vollständigen Q3-Zahlen zum EQT-Deal noch aus",
      sec30: "Evonik untermauerte seine Ablehnung des BASF-Übernahmeangebots (24,00 Euro je Aktie, rund 11,2 Mrd. Euro) mit den am Vortag gemeldeten Q3-Zahlen: 13 % Umsatzwachstum, das stärkste seit Q3 2022, und einer auf den oberen Bereich der Spanne angehobenen Jahresprognose. Beim bereits besiegelten EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) liegen bislang nur die am 21.10. gemeldeten vorläufigen Q3-Zahlen vor (Umsatz 548 Mio. Dollar, EPS 0,65 Dollar, beide über Erwartungen); die vollständigen Zahlen samt Management-Kommentaren zum Deal folgen erst heute Abend um 22:05 Uhr und lagen zum Redaktionsschluss nicht vor. Bei Tesla und SpaceX bleibt eine Fusion weiterhin unbestätigt.",
      blocks: [
        { h: "Wie reagiert Evonik auf das BASF-Angebot nach den Q3-Zahlen?", items: [
          { tag: "fakt", text: "Evonik meldete für das dritte Quartal 2026 ein Umsatzwachstum von 13 % ggü. Vorjahr – das stärkste Quartalswachstum seit dem dritten Quartal 2022 – und hob die Jahresprognose für das bereinigte EBITDA auf den oberen Bereich der Spanne von 2,0 bis 2,2 Mrd. Euro an.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich der Unternehmenswert vom Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "fakt", text: "Der Evonik-Finanzvorstand untermauerte laut Bloomberg mit den starken Zahlen die Unabhängigkeitsstrategie gegenüber dem BASF-Angebot von 24,00 Euro je Aktie (rund 11,2 Mrd. Euro); der Vorstand lehnt konkrete Verhandlungen weiterhin ab, lässt aber vertraulichen Informationsaustausch zu. Die RAG-Stiftung (rund 43,8 % der Anteile) hat ihr Kuratorium informiert, Inhalte bleiben vertraulich; ein neues öffentliches Statement der Stiftung oder ein höheres BASF-Angebot lagen zum Redaktionsschluss nicht vor." }
        ]},
        { h: "Was ist bei Qiagen und dem EQT-Deal neu?", items: [
          { tag: "fakt", text: "Für den EQT-Kauf von Qiagen (46,50 Euro je Aktie, rund 10,8 Mrd. Euro, Closing Mitte 2027 erwartet) liegen bislang nur die bereits am 21.10.2026 gemeldeten vorläufigen Q3-Zahlen vor: Nettoumsatz 548 Mio. Dollar und bereinigter Gewinn je Aktie 0,65 Dollar, beide über dem Analystenkonsens. Die vollständigen Zahlen inklusive Management-Kommentaren zum Deal werden erst heute Abend um 22:05 Uhr veröffentlicht und lagen zum Redaktionsschluss dieser Ausgabe nicht vor." }
        ]},
        { h: "Was ist bei Tesla und SpaceX neu?", items: [
          { tag: "unbestaetigt", text: "Bei Tesla und SpaceX liegen weiterhin keine Fusionsvereinbarung und keine Konditionen vor. Beide Unternehmen haben unabhängige Sonderausschüsse eingesetzt; Musk selbst bestätigte, es gebe noch keine Einigung über die Transaktionsbedingungen. Laut Prognosemarkt Polymarket liegt die Wahrscheinlichkeit einer Ankündigung bis Ende 2026 bei rund 16 %, bis Ende 2027 bei rund 66,5 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Evonik seine Ablehnung nach starken Zahlen verschärft, während beim bereits besiegelten EQT/Qiagen-Deal die entscheidenden heutigen Zahlen erst nach Redaktionsschluss vorliegen und bei Tesla/SpaceX weiterhin offene Fragen bestehen, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "≈ 11,2 Mrd. € (BASF/Evonik-Angebot, weiterhin abgelehnt) · ≈ 10,8 Mrd. € (EQT/Qiagen, bestätigt)", buyer: "BASF (abgelehnt) · EQT-Konsortium", target: "Evonik · Qiagen", sector: "Chemie / Biotech-Diagnostik", type: "Unternehmensübernahmen (die vollständigen Qiagen-Q3-Zahlen und Management-Kommentare zum EQT-Deal liegen zum Redaktionsschluss nicht vor; Details zu einem möglichen neuen BASF-Schritt sind nicht in den Quellen genannt)" },
      reaction: "Weitere Großdeals und der Private-Credit-Markt werden in Meldung 14 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "Bloomberg: Evonik Sees Strong Earnings Bolstering Defense Against BASF", url: "https://www.bloomberg.com/news/articles/2026-11-03/evonik-sees-strong-earnings-bolstering-defense-against-basf" },
        { title: "GuruFocus: Evonik Industries – 13% Q3 sales growth, rejects BASF takeover bid", url: "https://www.gurufocus.com/news/9166818/evonik-industries-evkif-reports-13-q3-sales-growth-rejects-basf-takeover-bid" },
        { title: "it-boltwise.de: Evonik wehrt BASF-Übernahme ab, bleibt aber für informellen Austausch offen", url: "https://www.it-boltwise.de/evonik-wehrt-basf-uebernahme-ab-bleibt-aber-fuer-informellen-austausch-offen.html" },
        { title: "QIAGEN Corporate IR: QIAGEN reports preliminary Q3 2026 results", url: "https://corporate.qiagen.com/English/newsroom/press-releases/press-release-details/2026/QIAGEN-reports-preliminary-Q3-2026-results/default.aspx" },
        { title: "teslanorth.com: Musk – 56% votes, SpaceX/Tesla merger hurdle", url: "https://teslanorth.com/2026/11/03/musk-56-votes-spacex-tesla-merger/" }
      ]
    },
    /* 14 DEALS/PE/CREDIT: MARVELL/APOLLO/BXSL */
    {
      id: "marvell-apollo-bxsl-privatecredit-11-04", cats: ["deals", "pe", "credit"], when: "Marvell/Lumentum und Apollo/ADT bestätigt 2.11. · BXSL-Q3-Zahlen veröffentlicht 4.11.2026",
      headline: "Blackstones Kreditfonds BXSL meldet für das dritte Quartal weiter steigende Erträge, bei Marvell/Lumentum und Apollo/ADT gibt es keine neuen Entwicklungen",
      sec30: "Blackstone Secured Lending (BXSL) meldete heute für das dritte Quartal einen Nettoanlageertrag von 0,68 Dollar je Aktie (10,7 % annualisierte Rendite auf den Nettoinventarwert) bei einem Portfoliowert von rund 12,9 Mrd. Dollar und beschloss eine Dividende von 0,77 Dollar je Aktie für das vierte Quartal. Bei der 115-Mrd.-Dollar-Übernahme von Lumentum durch Marvell und der von Apollo mit 9,6 Mrd. Dollar Fremdkapital unterlegten Thrive-Holdings-Übernahme von ADT gibt es keine neuen Entwicklungen seit dem 2.11. Die zuletzt verfügbaren branchenweiten Risikodaten zu Private Credit (Fitch-Ausfallrate 6,0 %, Rekordwert) stammen weiterhin aus dem zweiten Quartal 2026.",
      blocks: [
        { h: "Was zeigen die BXSL-Q3-Zahlen?", items: [
          { tag: "fakt", text: "Blackstone Secured Lending (BXSL) meldete für das dritte Quartal 2026 einen Nettoanlageertrag von 0,68 Dollar je Aktie (10,7 % annualisierte Rendite auf den Nettoinventarwert), Neuinvestitionen von knapp 250 Mio. Dollar bei Rückzahlungen von über 550 Mio. Dollar und einen Portfoliowert von rund 12,9 Mrd. Dollar zum 30.9.; für das vierte Quartal wurde eine Dividende von 0,77 Dollar je Aktie beschlossen.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Wie ist der Stand bei Marvell/Lumentum und Apollo/ADT?", items: [
          { tag: "fakt", text: "Bei der Übernahme von Lumentum durch Marvell (Umtauschverhältnis 4,500 Marvell-Aktien je Lumentum-Aktie, impliziter Unternehmenswert rund 115 Mrd. Dollar, bestätigt am 2.11.) und bei der von Apollo mit 9,6 Mrd. Dollar Fremdkapital unterlegten Übernahme von ADT durch Thrive Holdings (Unternehmenswert 15,3 Mrd. Dollar, Closing im ersten Quartal 2027 erwartet) gibt es keine neuen Entwicklungen seit dem 2.11.2026; Apollo sucht laut Berichten weiter Banken zur Mitsyndizierung der Finanzierung." }
        ]},
        { h: "Wie ist die Risikolage bei Private Credit insgesamt?", items: [
          { tag: "unbestaetigt", text: "Die zuletzt verfügbaren branchenweiten Risikodaten stammen weiterhin aus dem zweiten Quartal 2026: Laut Fitch erreichte die Ausfallrate bei Private-Credit-Krediten mit 6,0 % einen Rekordwert. Dem steht das heute gemeldete, auf den ersten Blick solide BXSL-Quartal gegenüber; neuere, speziell auf diese Woche datierte branchenweite Warnsignale wurden in der aktuellen Recherche nicht gefunden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass BXSL für das dritte Quartal weiter steigende Erträge meldet, während die zuletzt verfügbaren branchenweiten Risikokennzahlen unverändert aus dem Frühjahr stammen, zeigt, dass einzelne Fonds und die Gesamtbranche derzeit unterschiedlich schnell neue Daten liefern." }
        ]}
      ],
      reaction: "BASF/Evonik, EQT/Qiagen und Tesla/SpaceX werden in Meldung 13 behandelt.",
      terms: ["bdc", "direct-lending", "nav", "private-equity"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:pc-rates"],
      sources: [
        { title: "StockTitan: Blackstone Secured Lending Fund reports third quarter 2026 results", url: "https://www.stocktitan.net/news/BXSL/blackstone-secured-lending-fund-reports-third-quarter-2026-1zm0iay2s4eh.html" },
        { title: "rallies.ai: Blackstone Secured Lending Fund – Q3 2026 Net Investment Income of $0.68 a share", url: "https://rallies.ai/news/blackstone-secured-lending-fund-reports-q3-2026-net-investment-income-of-068-a-share-c79bac9a85df8c0d" },
        { title: "Bloomberg: Apollo Flexes Underwriting Power With $9.6 Billion ADT Debt Deal", url: "https://www.bloomberg.com/news/articles/2026-11-02/apollo-flexes-underwriting-power-with-9-6-billion-adt-debt-deal" },
        { title: "SEC: Lumentum 8-K – Marvell Merger Agreement", url: "https://www.sec.gov/Archives/edgar/data/0001633978/000119312526442758/d163169dex991.htm" }
      ]
    },
    /* 15 TECHNOLOGIE */
    {
      id: "apple-intel-amazon-coreweave-anthropic-11-04", cats: ["tech"], when: "Apple-Abstufung 3.11. · AMD-Q3-Zahlen 3.11. · Anthropic-S-1 aktualisiert 2.11. · Bitkom-Studie 3.11.2026",
      headline: "Die DZ Bank stuft Apple nach den Quartalszahlen auf Verkaufen ab, AMD übertrifft mit starkem Rechenzentrumswachstum die Erwartungen, Anthropic peilt ein Nasdaq-Listing ab Mitte November an",
      sec30: "Die DZ Bank stufte Apple am 3.11. von „Halten” auf „Verkaufen” ab und senkte den fairen Wert von 310 auf 300 Dollar; als Gründe nennt Analyst Ingo Wermann steigende Speicherchip-Kosten, Lieferengpässe und eine hohe Bewertung. AMD meldete für das dritte Quartal einen Umsatz von 13,4 Mrd. Dollar mit einem Rechenzentrumswachstum von 97 % auf 8,5 Mrd. Dollar und stieg nachbörslich deutlich. Anthropic aktualisierte sein Börsenprospekt für ein Nasdaq-Listing unter dem Ticker „ANT”; neu bekannt wurde eine Zahlung von bis zu 3,1 Mrd. Dollar pro Monat an SpaceX für Nvidia-GPU-Rechenkapazität. CoreWeaves fünfjährige Kreditausfallversicherungs-Spreads lagen zuletzt bei rund 1.041 Basispunkten und damit weiterhin im als „Stress” geltenden Bereich. Eine neue Bitkom-Studie zeigt Rekordinvestitionen von 23,5 Mrd. Euro (+57 %) in deutsche Rechenzentren für 2026.",
      blocks: [
        { h: "Wie reagierten Analysten auf Apple, und was zeigen die AMD-Zahlen?", items: [
          { tag: "fakt", text: "Die DZ Bank stufte die Apple-Aktie am 3.11.2026 von „Halten” auf „Verkaufen” ab und senkte den fairen Wert von 310 auf 300 Dollar; Analyst Ingo Wermann nennt steigende Speicherchip-Kosten, Lieferengpässe und eine hohe Bewertung als Gründe. Die Aktie war am Dienstag bereits um 1,9 % auf 331,90 Dollar gefallen.",
            ask: [{ label: "Mehr zu den Apple-Zahlen vom Montag", ref: "s:2" }] },
          { tag: "fakt", text: "AMD meldete für das dritte Quartal 2026 einen Umsatz von 13,4 Mrd. Dollar (über dem Konsens von rund 13,06 Mrd. Dollar) mit einem Rechenzentrumsumsatz von 8,5 Mrd. Dollar (+97 % ggü. Vorjahr, nun 64 % des Gesamtumsatzes); die Prognose für das vierte Quartal liegt bei rund 17 Mrd. Dollar (+66 % ggü. Vorjahr)." }
        ]},
        { h: "Was ist bei CoreWeave und der Anthropic-IPO neu?", items: [
          { tag: "unbestaetigt", text: "CoreWeaves fünfjährige Kreditausfallversicherungs-Spreads (CDS) lagen zuletzt bei rund 1.041 Basispunkten – ein Rückgang gegenüber einem Rekordhoch von rund 1.195 Basispunkten Mitte Oktober, aber weiterhin ein Niveau, das klassischerweise als „finanzielle Notlage” gilt.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Anthropic aktualisierte am 2.11.2026 sein öffentliches Börsenprospekt (S-1) für ein geplantes Nasdaq-Listing unter dem Ticker „ANT”, mit angepeiltem Listing in der Woche ab 16.11. Neu bekannt wurde, dass Anthropic bis zu 3,1 Mrd. Dollar pro Monat (bis zu 120,5 Mrd. Dollar über die Vertragslaufzeit bis 2029) an SpaceX zahlen soll, um Zugang zu Nvidia-GPU-Rechenkapazität zu erhalten.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was zeigt die neue Bitkom-Studie zu deutschen Rechenzentren?", items: [
          { tag: "fakt", text: "Laut einer am 3.11.2026 veröffentlichten Studie des Borderstep-Instituts für den Digitalverband Bitkom steigen die Investitionen in deutsche Rechenzentren 2026 um 57 % auf einen Rekordwert von 23,5 Mrd. Euro; bis 2035 soll mehr als die Hälfte der deutschen Rechenzentrumskapazität für KI-Anwendungen genutzt werden (heute rund ein Fünftel). Bitkom nennt hohe Energiekosten, lange Genehmigungsverfahren und fehlende Flächen als größte Hürden für den weiteren Ausbau.",
            ask: [{ label: "Warum investieren Konzerne so viel in KI-Rechenzentren?", ref: "e:ai-capex" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die DZ Bank Apple abstuft und CoreWeaves Kreditausfallversicherungen weiterhin auf Stress-Niveau notieren, während AMD gleichzeitig mit starkem Rechenzentrumswachstum überzeugt und Anthropic auf ein Nasdaq-Listing zusteuert, zeigt, wie unterschiedlich Anleger derzeit einzelne Technologie- und KI-Werte einschätzen. Die am Mittwoch zunächst gedrückte Stimmung bei einigen KI-nahen Aktien im Zusammenhang mit den US-Zwischenwahlen wird in Meldung 9 behandelt. Dies ist keine Anlageberatung.",
            ask: [{ label: "Mehr zu den Zwischenwahlen", ref: "s:9" }] }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 (Europa) und Meldung 2 (USA) behandelt.",
      terms: ["hyperscaler", "credit-spread", "gigawatt"],
      followups: ["e:ai-capex", "e:circular-financing", "e:software-ai-loans"],
      sources: [
        { title: "wallstreet-online: DZ Bank stuft Apple Inc. auf „Verkaufen”", url: "https://www.wallstreet-online.de/nachricht/21630738-dz-bank-stuft-apple-inc-verkaufen" },
        { title: "fourweekmba: Anthropic's SpaceX bill set to reach $3.1B a month, up 2.5x", url: "https://fourweekmba.com/ai-anthropics-spacex-bill-set-to-reach-3-1b-a-month-up-2-5x/" },
        { title: "Investing.com: AMD Q3 2026 slides – data center surges 97%, record earnings beat", url: "https://www.investing.com/news/company-news/amd-q3-2026-slides-data-center-surges-97-record-earnings-beat-93CH-4996928" },
        { title: "TokenPost: CoreWeave five-year CDS spread falls to 1,041.4 basis points", url: "https://www.tokenpost.com/news/investing/42120" },
        { title: "Bitkom: KI-Boom treibt Rechenzentren in Deutschland", url: "https://www.bitkom.org/Presse/Presseinformation/KI-Boom-treibt-Rechenzentren-in-Deutschland" }
      ]
    }
  ],
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX legte am Mittwoch um 1,4 bis 1,5 % auf zwischen 26.240 und 26.250 Punkte zu, der Euro Stoxx 50 um rund 1,5 % auf etwa 6.238 Punkte – eine Erleichterungsrally nach den US-Zwischenwahlen." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund für die Rally am Mittwoch nennen Berichte die Erwartung, dass ein von den Demokraten mitkontrollierter US-Kongress Teile der Agenda von Präsident Trump bremsen und für mehr politische Berechenbarkeit sorgen könnte." },
    "yield-meaning": { tag: "fakt", story: 3, text: "Die US-10-Jahres-Rendite liegt nach einem kurzen Anstieg am Wahltag weitgehend stabil bei rund 4,90 bis 4,95 %, die Rendite zehnjähriger Bundesanleihen bei rund 3,32 %." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold sprang am Mittwoch um rund 2,4 bis 3,0 % über die Marke von 4.000 Dollar je Feinunze; zur genauen Höhe weichen Quellen leicht voneinander ab." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin erholte sich am Mittwoch von einem Wahlnacht-Tief bei rund 75.740 Dollar auf etwa 78.300 Dollar (+0,9 %)." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro legte am Mittwoch um 0,6 % auf rund 1,1260 Dollar zu." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone stieg im Oktober laut Eurostat-Schnellschätzung auf 4,0 % (von 3,8 %), den höchsten Stand seit September 2023; die Kerninflation blieb mit 2,5 % stabil." },
    "oil-inflation": { tag: "einordnung", story: 11, text: "Brent notiert am Mittwoch bei rund 102 bis 105 Dollar je Barrel; ein weiterhin hoher Ölpreis wirkt tendenziell anheizend auf Sprit-, Heiz- und Transportkosten in Europa." },
    "central-banks-why": { tag: "position", story: 5, text: "Bundesbank-Präsident Nagel hält eine EZB-Zinserhöhung im Dezember aus heutiger Sicht für „sehr wahrscheinlich notwendig”, da sich der Inflationsausblick verschlechtert habe." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Die Eurostaaten müssen ihre Kandidatenvorschläge für die Lagarde-Nachfolge bis Freitag, 6.11.2026, einreichen; die Euro-Finanzminister prüfen die Vorschläge am 9.11." },
    "fed-hike": { tag: "position", story: 6, text: "Mehrere Fed-Vertreter, darunter Dallas-Fed-Chefin Lorie Logan und Gouverneur Michael Barr, werben seit der Sitzung vom 28.10. öffentlich für weitere Zinserhöhungen." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Zeitplan für den Bundeshaushalt 2027 bleibt unverändert: Bereinigungssitzung am 12.11., abschließende Bundestagsberatung vom 24. bis 27.11.2026." },
    "rente-basics": { tag: "fakt", story: 7, text: "Der Einstieg in eine kapitalgedeckte Zusatzvorsorge wird 2026 nur als Eckpunkte vorgelegt; die endgültige parlamentarische Verabschiedung verschiebt sich auf Anfang 2027." },
    "debt-brake": { tag: "einordnung", story: 7, text: "Vor dem Koalitionsausschuss am 17.11. gelten mehrere Punkte zwischen CDU, CSU und SPD als strittig, unter anderem zur abschlagsfreien Rente nach 45 Beitragsjahren und zur Pflegeversicherung." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Die Forsa-Umfrage vom 3.11. sieht die AfD bei 26 %, die Union bei 20 %, die Grünen bei 17 % und die SPD bei 14 % – die Grünen liegen damit weiterhin vor der SPD." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 11, text: "Der Iran meldete am 4.11. weitere, unbestätigte Tankertreffer an der Straße von Hormus sowie den Abschuss einer US-Drohne; der Ölpreis gab trotzdem nach, da Berichte auf Hoffnungen einer diplomatischen Lösung verweisen." },
    "hormuz": { tag: "unbestaetigt", story: 11, text: "Die iranischen Revolutionsgarden meldeten am 4.11., vier weitere Tanker seien auf einer gesperrten Route südlich der Straße von Hormus auf Seeminen gelaufen; eine unabhängige Bestätigung lag nicht vor." },
    "gas-ttf": { tag: "unbestaetigt", story: 11, text: "Zum europäischen Gaspreis TTF lagen zum Redaktionsschluss uneinheitliche Angaben vor; ein Rückgang von der Dienstags-Spitze wurde berichtet." },
    "energy-germany": { tag: "fakt", story: 11, text: "Die deutschen Gasspeicher lagen zum zuletzt bestätigten Stand (31.10.) bei 61,17 % Füllstand; die Bundesnetzagentur sieht die Versorgungssicherheit weiterhin nicht gefährdet." },
    "defence-stocks": { tag: "fakt", story: 12, text: "Rheinmetall fiel am Mittwoch unter die 1.000-Euro-Marke auf rund 988,50 Euro, Hensoldt verlor zeitweise bis zu 3,0 % wegen des ZEBEL-Logistikproblems, RENK gab rund 1,6 bis 2,0 % ab – alle drei legen ihre Q3-Zahlen erst morgen vor." },
    "defence-order": { tag: "fakt", story: 12, text: "Der Bundestags-Haushaltsausschuss berät am 4.11. über sieben weitere Rüstungsvorhaben von jeweils über 25 Mio. Euro; die große Boxer-Bestellung „Arminius” steht laut einem unbestätigten Branchenbericht vor einer Verschiebung auf Februar 2027." },
    "nato-target": { tag: "fakt", story: 12, text: "Auf der Euronaval-Messe in Paris (3. bis 6.11.) zeigt Rheinmetall unter anderem ein „Hybrid Fleet”-Konzept; nur 5 von 32 NATO-Staaten erreichen 2026 bereits das 5-Prozent-Ziel." },
    "ma-steps": { tag: "fakt", story: 13, text: "Evonik meldete ein Umsatzwachstum von 13 % für das dritte Quartal und hob die Jahresprognose an; der EQT-Kauf von Qiagen (46,50 Euro je Aktie) ist bereits besiegelt, die vollständigen Q3-Zahlen folgen erst heute Abend um 22:05 Uhr." },
    "take-private-why": { tag: "unbestaetigt", story: 13, text: "Die RAG-Stiftung hat ihr Kuratorium über das BASF-Angebot für Evonik informiert, aber kein neues öffentliches Statement abgegeben; ein höheres BASF-Angebot lag zum Redaktionsschluss nicht vor." },
    "deal-risks": { tag: "unbestaetigt", story: 13, text: "Bei Tesla und SpaceX bleibt eine Fusion unbestätigt; laut Prognosemarkt Polymarket liegt die Wahrscheinlichkeit einer Ankündigung bis Ende 2026 bei rund 16 %." },
    "private-credit-what": { tag: "fakt", story: 14, text: "Blackstone Secured Lending (BXSL) meldete für das dritte Quartal einen Nettoanlageertrag von 0,68 Dollar je Aktie und einen Portfoliowert von rund 12,9 Mrd. Dollar." },
    "redemption-limits": { tag: "unbestaetigt", story: 14, text: "Die zuletzt verfügbaren branchenweiten Daten stammen aus dem zweiten Quartal 2026: Die Ausfallrate bei Private-Credit-Krediten erreichte laut Fitch mit 6,0 % einen Rekordwert." },
    "ai-capex": { tag: "fakt", story: 15, text: "AMD meldete für das dritte Quartal ein Rechenzentrumswachstum von 97 % auf 8,5 Mrd. Dollar; eine neue Bitkom-Studie zeigt Rekordinvestitionen von 23,5 Mrd. Euro in deutsche Rechenzentren für 2026." },
    "circular-financing": { tag: "unbestaetigt", story: 15, text: "Anthropic soll laut seinem aktualisierten Börsenprospekt bis zu 3,1 Mrd. Dollar pro Monat an SpaceX für Nvidia-GPU-Rechenkapazität zahlen – bis zu 120,5 Mrd. Dollar über die Vertragslaufzeit bis 2029." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "International", type: "Fakt", story: 9,
      q: "Welches Ergebnis brachten die US-Zwischenwahlen vom 3.11.2026 für den Kongress?",
      options: [
        "Die Republikaner verteidigten beide Kammern",
        "Die Demokraten gewannen die Kontrolle über Repräsentantenhaus und Senat",
        "Nur das Repräsentantenhaus wechselte die Mehrheit, der Senat blieb republikanisch",
        "Es kam zu einem Unentschieden ohne klare Mehrheit"
      ],
      answer: 1,
      explain: "Die Demokraten gewannen laut mehreren übereinstimmenden Medienberichten sowohl die Mehrheit im Repräsentantenhaus als auch im Senat zurück – der erste Senats-Kontrollwechsel in zwei aufeinanderfolgenden Wahlzyklen seit 1954."
    },
    {
      topic: "Wirtschaft", type: "Fakt", story: 4,
      q: "Auf welchen Wert stieg die Inflation in der Eurozone im Oktober 2026 laut Eurostat-Schnellschätzung?",
      options: [
        "2,5 %",
        "3,8 %",
        "4,0 %",
        "5,6 %"
      ],
      answer: 2,
      explain: "Die Eurostat-Schnellschätzung zeigt für Oktober 2026 eine Inflation von 4,0 % (von 3,8 % im September) – den höchsten Stand seit September 2023. Die Kerninflation blieb bei 2,5 % stabil, Italien meldete mit 5,6 % den stärksten Länderanstieg."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 11,
      q: "Angenommen, die von der iranischen IRGC gemeldeten Tankertreffer an der Straße von Hormus würden sich als zutreffend bestätigen und weitere Schifffahrtsrouten blockiert. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Der Ölpreis würde tendenziell steigen, weil weniger Angebot über diese wichtige Route verfügbar wäre",
        "Der Ölpreis würde automatisch fallen, weil Käufer auf andere Energiequellen umsteigen",
        "Es gäbe keinen Zusammenhang, da OPEC+ jeden Ausfall sofort vollständig ausgleicht",
        "Nur der Goldpreis, nicht aber der Ölpreis würde beeinflusst"
      ],
      answer: 0,
      explain: "Werden Förderung oder Transportrouten durch einen Konflikt gefährdet, wird weniger Öl verfügbar erwartet; Käufer bieten dann mehr, um sich Mengen zu sichern, was den Preis tendenziell steigen lässt."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Was kündigte Bundeskanzler Merz am 4.11.2026 zur Rentenreform an?",
      options: [
        "Die gesetzliche Rente wird komplett abgeschafft",
        "Der Einstieg in die Kapitaldeckung wird noch 2026 final vom Kabinett beschlossen",
        "Die Rentenreform wurde vollständig gestoppt",
        "Der Einstieg in die Kapitaldeckung wird nur als Eckpunkte vorgelegt, die endgültige Verabschiedung verschiebt sich auf Anfang 2027"
      ],
      answer: 3,
      explain: "Merz kündigte an, dass der klassische Teil der Rentenreform noch 2026 ins Kabinett solle, der zentrale Baustein – der Einstieg in die Kapitaldeckung – aber 2026 nur als Eckpunkte vorgelegt wird; die endgültige Verabschiedung verschiebt sich auf Anfang 2027."
    },
    {
      topic: "Technologie", type: "Zusammenhang", story: 15,
      q: "Mehrere neu gewählte demokratische Gouverneure, etwa in Texas, hatten im Wahlkampf strengere Regeln für neue Rechenzentren gefordert. Was bedeutete das laut Berichten für Aktien wie CoreWeave am Mittwoch nach den Zwischenwahlen?",
      options: [
        "Sie stiegen deutlich, weil Investoren auf weniger Regulierung hofften",
        "Sie gerieten zunächst unter Druck, weil Anleger strengere Regulierung von Rechenzentren in wichtigen Bundesstaaten befürchteten",
        "Es gab laut den Berichten keinen Zusammenhang zwischen dem Wahlergebnis und Tech-Aktien",
        "Der Handel mit CoreWeave-Aktien wurde komplett ausgesetzt"
      ],
      answer: 1,
      explain: "Berichte nennen die Sorge vor strengerer Rechenzentrums-Regulierung in neu gewonnenen demokratischen Bundesstaaten als Grund, warum KI-nahe Aktien wie CoreWeave, Tesla und SpaceX in der Wahlnacht und am Mittwochmorgen zunächst unter Druck gerieten, bevor sich die US-Futures im Tagesverlauf wieder erholten."
    }
  ]
};
