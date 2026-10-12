// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-12",
  dateLabel: "Montag, 12. Oktober 2026",
  updatedLabel: "Recherchestand 12.10.2026",
  marketNote: "Diese Ausgabe entsteht am Montagmorgen, 12.10.2026, vor Handelsbeginn in Europa. Für DAX, Euro Stoxx 50, S&P 500, Nasdaq und Dow Jones sowie für die US- und die Bund-Rendite gilt deshalb der Schlussstand von Freitag, 09.10.2026, dem letzten vollständigen Handelstag. Brent-Öl, Gold, Bitcoin und EUR/USD werden rund um die Uhr beziehungsweise durchgehend gehandelt; hier gilt der zuletzt verfügbare Stand vom Sonntagabend beziehungsweise frühen Montagmorgen. Bei einzelnen Werten weichen die Quellen spürbar voneinander ab: Bei der Bund-Rendite nennt eine Quelle für Freitag rund 3,48 %, eine andere für Dienstag, 07.10., rund 3,55 %. Beim Brent-Ölpreis reichen die Angaben für Freitag/Samstag von rund 102,6 bis 104,7 Dollar. Diese Unterschiede sind jeweils bei der betroffenen Kennzahl vermerkt.",

  top: [
    { text: "Die US-Börsen schlossen die Handelswoche am Freitag im Plus (Dow +0,83 % auf 51.655,01 Punkte, S&P 500 +0,59 % auf 7.811,54 Punkte, Nasdaq +0,64 % auf 27.366,17 Punkte); der DAX stieg um 1,19 % auf 25.102,34 Punkte. Hintergrund ist laut Berichten unter anderem eine neue, uneinheitliche Einschätzung zu OpenAIs Umsatzentwicklung sowie nachgebende Ölpreise.", ref: "s:1" },
    { text: "Nach einem Telefonat mit Putin kündigte Präsident Trump einen Diesel-Deal mit Russland an. Präsident Selenskyj nannte den Deal „nicht fair und nicht ehrlich”; Trump forderte am 10.10. im Gegenzug, die Ukraine solle Selenskyj durch einen verhandlungsbereiteren Präsidenten ersetzen. Das 22. EU-Sanktionspaket mit über 1.600 Einträgen soll am 12.10. in Luxemburg formell verabschiedet werden.", ref: "s:8" },
    { text: "In der Straße von Hormus erreichten die Tankerangriffe laut Berichten in der Woche bis zum 04.10. mit elf Vorfällen die höchste Zahl seit Kriegsbeginn; am 07.10. wurde erstmals seit Wochen ein Tanker außerhalb der eigentlichen Straße getroffen. Präsident Trump hält an seiner Zusage fest, vor den US-Zwischenwahlen am 03.11. keine Angriffe auf den Iran zu starten.", ref: "s:9" },
    { text: "Der Koalitionsausschuss von CDU/CSU und SPD vertagte zentrale Teile der Sozialreform – darunter die Rente – auf das Frühjahr 2027. Der Bundestag debattierte am 09.10. dennoch erneut über das Rentenalter und die abschlagsfreie Rente nach 45 Versicherungsjahren; Gewerkschaften und Arbeitgeberverbände lehnen den Kommissionsvorschlag weiterhin ab, aus entgegengesetzten Gründen.", ref: "s:6" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.102,34", change: "+1,19 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Donnerstag, 08.10., war der DAX laut Berichten belastet von Sorgen um die Umsatzentwicklung von OpenAI gefallen; der Freitags-Anstieg brachte den Index zurück über die Marke von 25.000 Punkten." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Ein neuer Bericht vom 09.10. nannte für OpenAI ein Jahresend-Ziel von mindestens 70 Mrd. Dollar annualisiertem Umsatz, nachdem Ende September noch rund 50 Mrd. Dollar genannt worden waren – das beruhigte Chip- und KI-Werte nach den Verlusten vom Donnerstag (Meldung 14).",
          "Nachgebende Ölpreise und leicht sinkende Anleiherenditen stützten zusätzlich die allgemeine Risikobereitschaft (Meldung 2, Meldung 9)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur widersprüchlichen Berichtslage um OpenAIs Umsatzziele und zur KI-Blasen-Debatte in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ms-aktuell.de: DAX-Schluss – zurück über 25.000 Punkte", url: "https://ms-aktuell.de/welt/dax-schluss-25000-09-10-2026/" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.173,37", change: "+0,83 % bis +0,9 % (Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "ad-hoc-news nannte für Freitag ein Plus von 0,9 % auf rund 6.173 Punkte, begründet mit fallenden Ölpreisen; andere Quellen nennen ein etwas niedrigeres Plus von rund 0,83 %. Die Richtung stimmt in diesem Fall über die Quellen hinweg überein." }
      ],
      moved: {
        intro: "Für Freitag nennen Berichte als allgemeinen Hintergrund:",
        items: [
          "Sinkende Ölpreise sowie leicht nachgebende Anleiherenditen (Meldung 2, Meldung 9)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Rendite französischer Staatsanleihen bleibt mit einem hohen Risikoaufschlag ein Belastungsfaktor für den europäischen Gesamtmarkt.", ref: "s:2" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 legt dank fallender Ölpreise 0,9 Prozent zu", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-legt-dank-fallender-oelpreise-0-9-prozent-zu/70276828" }
    },
    "sp500": {
      label: "S&P 500", value: "7.811,54", change: "+0,59 % (+46,18 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 51.655,01 Punkte (+0,83 %) – alle drei großen US-Indizes schlossen die Woche im Plus." },
        { label: "Nasdaq", text: "Freitagsschluss: 27.366,17 Punkte (+0,64 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Ein neuer Bericht zu OpenAIs Jahresend-Umsatzziel von mindestens 70 Mrd. Dollar beruhigte Chip- und KI-Werte nach den Verlusten vom Donnerstag (Meldung 14)."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur Berichtslage rund um OpenAI und zur KI-Blasen-Debatte in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Yahoo Finance: Markets News, Oct. 9, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-9-2026-105547352.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.366,17", change: "+0,64 % (+172,83 Pkt., Fr-Schluss)", dir: "up", asof: "Schluss Fr 09.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Donnerstag", text: "Am Donnerstag war die Nasdaq laut Berichten belastet von einem Bericht zur OpenAI-Umsatzentwicklung gefallen (Nvidia, Oracle, CoreWeave und weitere KI-Werte im Minus); der Freitag brachte eine teilweise Erholung." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Technologie- und Halbleiterwerte erholten sich, nachdem ein neuer Bericht für OpenAI ein Jahresend-Ziel von mindestens 70 Mrd. Dollar annualisiertem Umsatz nannte (Meldung 14)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf solche Nachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "TheStreet: Stock Market Today – Dow Jones, S&P 500, Nasdaq Updates Oct. 9, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-09-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1196–1,1206", change: "Fr +0,18 % ggü. Do, bis Mo-Vormittag leicht nachgegeben", dir: "flat", asof: "Fr 09.10./Mo-Vormittag 12.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Quellenlage", text: "Der EZB-Referenzkurs stieg am Freitag auf 1,1206 Dollar (+0,18 % ggü. Donnerstag); eine andere Quelle nennt für den Zeitraum bis Montagvormittag einen leichten Rückgang auf rund 1,1196 Dollar. Beide Werte liegen nah beieinander." }
      ],
      moved: {
        intro: "Berichte nennen keinen expliziten Einzelgrund für die leichten Schwankungen:",
        items: [
          "Im allgemeinen Marktumfeld spielte laut Berichten die nachlassende Risikoprämie am Ölmarkt eine Rolle, die auch den Dollar als „sicherer Hafen” etwas weniger gefragt machte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed und EZB senden weiterhin unterschiedliche Signale: Mehr dazu in Meldung 4 und Meldung 5.", ref: "s:4" }
      ],
      source: { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,23–5,24 %", change: "kaum verändert ggü. Donnerstag", dir: "flat", asof: "Stand Fr 09.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,2 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,2 % Zinsen pro Jahr.",
      compare: [
        { label: "Woche davor", text: "Am 05.10. hatte die Rendite laut einer Quelle zwischenzeitlich bis zu 5,31 % erreicht; seither bewegt sie sich leicht darunter bei rund 5,23 bis 5,24 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die FOMC-Sitzungsprotokolle vom 07.10. sowie Reden von Fed-Gouverneur Waller und Vice Chair Jefferson zeigten, dass mehrere Fed-Mitglieder grundsätzlich an weiteren Zinserhöhungen festhalten (Meldung 4).",
          "Gleichzeitig fielen die US-Arbeitsmarktdaten für September deutlich schwächer aus als erwartet, was der Zinserwartung entgegensteht (Meldung 4)."
        ]
      },
      important: [
        { area: "Fed", text: "Die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung im Oktober liegt laut Berichten nur noch bei rund 16 bis 22 %.", ref: "s:4" }
      ],
      source: { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,48–3,55 %", change: "uneinheitlich je nach Quelle/Tag", dir: "flat", asof: "Stand 07.–09.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Quellenlage", text: "Eine Quelle nennt für Freitag, 09.10., rund 3,48 %, eine andere für Dienstag, 07.10., rund 3,55 % (mit einem Hoch von 3,69 % am 28.09., dem höchsten Stand seit April 2011). Eine genaue, einheitliche Freitagszahl ließ sich nicht abschließend verifizieren." },
        { label: "Frankreich", text: "Die Rendite zehnjähriger französischer Staatsanleihen lag laut Berichten zuletzt bei rund 4,8 bis 4,96 % – teils der höchste Stand seit 2002; der Risikoaufschlag zur Bundesanleihe wird je nach Quelle mit rund 127 bis 140 Basispunkten angegeben." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Sorgen um Frankreichs Haushaltsdefizit und den Sparhaushalt 2027 von Premierminister Lecornu bleiben laut Berichten ein eigenständiger Belastungsfaktor, unabhängig von der allgemeinen Zinsentwicklung (Meldung 5)."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Mehr zur EZB-Haltung gegenüber Frankreich und zur Schnabel-Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "kagels-trading.de: Zinsentwicklung und Zinsprognose 2026", url: "https://www.kagels-trading.de/zinsentwicklung-prognose/" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.192–4.195 $", change: "+1,3 % bis +1,45 % ggü. Donnerstag", dir: "up", asof: "Stand Fr 09.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.190 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "goldreporter.de nannte für Freitag eine Erholung Richtung 4.200 Dollar, wallstreet-online 4.193,18 Dollar (+1,45 %) – die genaue Nachkommastelle schwankt je nach Erfassungszeitpunkt (Fixing vs. Spot)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Ein schwächerer Dollar und leicht sinkende US-Renditen stützten den Goldpreis.",
          "Chinas Zentralbank kaufte laut Berichten den 23. Monat in Folge Gold zu (rund 740.000 Feinunzen im September) – ein Hinweis auf anhaltende strukturelle Nachfrage neben kurzfristigen Marktbewegungen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Anleiherenditen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv – trotzdem legte Gold am Freitag weiter zu.", ref: "e:gold-why" }
      ],
      source: { title: "goldreporter.de: Goldpreis heute – Erholung Richtung 4.200 Dollar", url: "https://www.goldreporter.de/goldpreis-heute-09102026-erholung-4200-dollar/marktbericht-gold/262330/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 102,6–104,7 $", change: "uneinheitlich: etwa −1,3 % bis +0,4 % je Quelle", dir: "flat", asof: "Stand Fr 09./Sa 10.10.26", story: 9, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 103 Dollar je Fass (159 Liter) sind etwa 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Quellenlage", text: "Eine Quelle nennt für Freitag einen Rückgang auf rund 102,9 bis 103,2 Dollar (−0,94 % bis −1,29 % ggü. Donnerstag), nachdem der Preis am Donnerstag kurzzeitig auf rund 106 Dollar gesprungen war. Eine andere Quelle nennt für Freitag/Samstag einen Anstieg auf 104,42 bis 104,72 Dollar. Diese Diskrepanz ließ sich nicht abschließend auflösen." }
      ],
      moved: {
        intro: "Berichte nennen gegenläufige Faktoren:",
        items: [
          "Trumps Zusage, vor den Zwischenwahlen am 03.11. keine Angriffe auf den Iran zu starten, sowie ein Dementi zu angeblich neuen US-Militärschlägen drückten laut einer Quelle den Preis.",
          "Neue Tankerangriffe in der Straße von Hormus (Meldung 9) wirkten laut anderen Quellen gleichzeitig preistreibend, ebenso Berichte über Huthi-Drohungen im Jemen."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den neuen Tankerangriffen trotz Trumps Zusage in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "finanzen.at: Ölpreise gefallen – Dementi zu angeblich neuen US-Angriffen", url: "https://www.finanzen.at/nachrichten/aktien/oelpreise-gefallen-dementi-zu-angeblich-neuen-us-angriffen-1036612341" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 82.413–82.950 $", change: "leicht schwankend (−0,25 % bis +0,93 % je Zeitpunkt)", dir: "flat", asof: "Stand Fr 09./Mo-Vormittag 12.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 82.000 bis 83.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Freitag vs. Montag", text: "Bitcoin notierte am Freitagmorgen bei rund 82.413 Dollar; bis Montagvormittag stieg der Kurs laut einer Quelle leicht auf rund 82.950 Dollar (+0,93 % auf 24-Stunden-Sicht), bei laut Berichten niedriger Liquidität (nur rund 34 % des 30-Tage-Durchschnittsvolumens)." }
      ],
      moved: {
        intro: "Berichte nennen keinen expliziten neuen Einzelgrund:",
        items: [
          "Eine insgesamt vorsichtige Risikobereitschaft bleibt laut Berichten ein Faktor; teils wird auf ETF-Abflüsse und den Druck steigender Fed-Zinserwartungen verwiesen, ohne dass eine einzelne Nachricht als Auslöser genannt wird."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "interactivecrypto.com: Bitcoin (BTC) unter 83.000 USD – ETF-Abflüsse und Fed-Druck belasten den Kurs", url: "https://www.interactivecrypto.com/de/bitcoin-btc-unter-83-000-usd-etf-abflusse-und-fed-druck-belasten-den-kurs" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: INDIZES FREITAG + ASIEN MONTAG */
    {
      id: "maerkte-freitag-plus-dax-ueber-25000-asien-montag-10-12", cats: ["markets"], when: "Schluss Fr 09.10.2026 · Asien-Handel Mo 12.10.2026",
      headline: "US-Börsen schließen die Woche im Plus, DAX über 25.000 Punkte, Asien am Montag uneinheitlich",
      sec30: "Die großen US-Indizes schlossen die Handelswoche am Freitag im Plus: Dow Jones +0,83 % auf 51.655,01 Punkte, S&P 500 +0,59 % auf 7.811,54 Punkte, Nasdaq Composite +0,64 % auf 27.366,17 Punkte. Der DAX stieg um 1,19 % auf 25.102,34 Punkte und damit wieder über die Marke von 25.000 Punkten, der Euro Stoxx 50 legte rund 0,83 bis 0,9 % auf 6.173,37 Punkte zu. Als Hintergrund nennen Berichte eine neue, im Vergleich zu einem Bericht vom Donnerstag deutlich positivere Einschätzung zu OpenAIs Umsatzentwicklung sowie nachgebende Ölpreise. Am Montag fiel der Nikkei 225 in Tokio um 0,28 % auf 39.821,40 Punkte, während der Hang Seng in Hongkong um rund 1 % zulegte.",
      blocks: [
        { h: "Wie haben sich die Indizes am Freitag entwickelt?", items: [
          { tag: "fakt", text: "Der Dow Jones legte 0,83 % auf 51.655,01 Punkte zu, der S&P 500 0,59 % auf 7.811,54 Punkte und die Nasdaq Composite 0,64 % auf 27.366,17 Punkte – alle drei US-Indizes schlossen die Woche im Plus." },
          { tag: "fakt", text: "Der DAX stieg laut Berichten um 1,19 % auf 25.102,34 Punkte und damit wieder über die Marke von 25.000 Punkten. Der Euro Stoxx 50 legte rund 0,83 bis 0,9 % auf 6.173,37 Punkte zu.",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] }
        ]},
        { h: "Was wird als Grund genannt?", items: [
          { tag: "unbestaetigt", text: "Zur Umsatzentwicklung von OpenAI widersprechen sich Berichte teilweise: Ein Bericht vom 08.10. nannte einen aktuellen annualisierten Umsatz von rund 50 Mrd. Dollar – unter zuvor genannten Erwartungen von bis zu 68 bis 70 Mrd. Dollar –, was Chip- und KI-Werte am Donnerstag belastete. Ein Bericht vom 09.10. nannte dagegen für Jahresende ein Ziel von mindestens 70 Mrd. Dollar; dies beruhigte die Märkte am Freitag.",
            ask: [{ label: "Mehr zur OpenAI-Umsatzdebatte und zur KI-Blasen-Diskussion", ref: "s:14" }] },
          { tag: "fakt", text: "Nachgebende Ölpreise und leicht sinkende Anleiherenditen stützten laut Berichten zusätzlich die allgemeine Risikobereitschaft (Meldung 2, Meldung 9)." }
        ]},
        { h: "Wie entwickelten sich die asiatischen Börsen am Montag?", items: [
          { tag: "fakt", text: "Der Nikkei 225 fiel am Montagmorgen um 0,28 % auf 39.821,40 Punkte, belastet laut Berichten von schwachen Signalen von der Wall Street zum Wochenende; der Hang Seng in Hongkong stieg dagegen um rund 1 %." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass ein neuer Bericht zur selben Umsatzfrage binnen 24 Stunden die Marktstimmung drehen konnte, zeigt erneut, wie empfindlich Anleger derzeit auf jedes Signal zur Tragfähigkeit der hohen KI-Investitionen reagieren (Meldung 14). Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Erholung fällt zusammen mit der weiterhin hohen US-Rendite und dem hohen Risikoaufschlag französischer Anleihen (Meldung 2) sowie den uneinheitlichen Ölpreis-Angaben rund um die Lage im Golf (Meldung 9).",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why", "e:ai-capex"],
      sources: [
        { title: "Yahoo Finance: Markets News, Oct. 9, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-9-2026-105547352.html" },
        { title: "TheStreet: Stock Market Today – Dow Jones, S&P 500, Nasdaq Updates Oct. 9, 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-09-2026" },
        { title: "ms-aktuell.de: DAX-Schluss – zurück über 25.000 Punkte", url: "https://ms-aktuell.de/welt/dax-schluss-25000-09-10-2026/" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 legt dank fallender Ölpreise 0,9 Prozent zu", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-legt-dank-fallender-oelpreise-0-9-prozent-zu/70276828" },
        { title: "TradingView: Asien-Märkte am Montag gemischt", url: "https://de.tradingview.com/news/invezz:6e48dd84d600c:0/" }
      ]
    },

    /* 2 MÄRKTE: RENDITEN US/BUND/FRANKREICH */
    {
      id: "renditen-us-bund-frankreich-10-12", cats: ["markets"], when: "Stand 07.–09.10.2026",
      headline: "US-Rendite bleibt nahe Mehrjahreshoch, Bund-Rendite je nach Quelle bei 3,5 Prozent, Frankreich-Risikoaufschlag bleibt hoch",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen lag zuletzt bei rund 5,23 bis 5,24 % – kaum verändert und nahe dem am 05.10. erreichten Zwischenhoch von 5,31 %. Bei der Bund-Rendite nennen Quellen unterschiedliche Werte für unterschiedliche Tage: rund 3,48 % für Freitag, 09.10., beziehungsweise rund 3,55 % für Dienstag, 07.10. Die Rendite zehnjähriger französischer Staatsanleihen bleibt mit rund 4,8 bis 4,96 % hoch, der Risikoaufschlag zur Bundesanleihe wird je nach Quelle mit 127 bis 140 Basispunkten angegeben.",
      blocks: [
        { h: "Wie hat sich die US-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die US-10-Jahres-Rendite lag zuletzt bei rund 5,23 bis 5,24 % – kaum verändert gegenüber Donnerstag und etwas unter dem am 05.10. erreichten Zwischenhoch von bis zu 5,31 %.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,2 %?", ref: "n:ust10" }] },
          { tag: "fakt", text: "Die FOMC-Sitzungsprotokolle vom 07.10. und Reden von Fed-Mitgliedern zeigten, dass mehrere Fed-Offizielle grundsätzlich an weiteren Zinserhöhungen festhalten (Meldung 4)." }
        ]},
        { h: "Wie hat sich die Bund-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Zur Bund-Rendite widersprechen sich die verfügbaren Quellen in Tag und Höhe: Eine Quelle nennt für Freitag, 09.10., rund 3,48 %, eine andere für Dienstag, 07.10., rund 3,55 % – mit einem Zwischenhoch von 3,69 % am 28.09., dem höchsten Stand seit April 2011. Eine eindeutige, für denselben Tag verifizierte Zahl ließ sich nicht ermitteln.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Was ist der Stand bei Frankreichs Staatsanleihen?", items: [
          { tag: "unbestaetigt", text: "Die Rendite zehnjähriger französischer Staatsanleihen (OAT) liegt laut Berichten bei rund 4,8 bis 4,96 % – nach einer Quelle der höchste Stand seit 2002, nachdem sie seit Februar von rund 3,2 % gestiegen war. Der Risikoaufschlag zur Bundesanleihe wird je nach Quelle mit 127 bis 140 Basispunkten angegeben." },
          { tag: "fakt", text: "Premierminister Lecornus Sparhaushalt 2027 mit rund 54 Mrd. Euro Konsolidierung bleibt laut Berichten Gegenstand der politischen Auseinandersetzung in der Nationalversammlung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Eine dauerhaft hohe US-Rendite verteuert tendenziell auch global Kapital; der weiterhin hohe Risikoaufschlag französischer Staatsanleihen zeigt, dass die Sorge um Frankreichs Haushaltsdefizit trotz leichter Schwankungen bei anderen Kennzahlen bestehen bleibt." }
        ]}
      ],
      reaction: "Die anhaltend hohe US-Rendite und der hohe Risikoaufschlag französischer Anleihen bleiben Hintergrund für die Markterholung (Meldung 1) und die EZB-Haltung zu Frankreich (Meldung 5).",
      terms: ["rendite", "basispunkt", "schuldenbremse"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:debt-brake"],
      sources: [
        { title: "Trading Economics: United States Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
        { title: "Seeking Alpha: Treasury Yields Snapshot – October 9, 2026", url: "https://seekingalpha.com/article/4953188-treasury-yields-snapshot-october-9-2026" },
        { title: "kagels-trading.de: Zinsentwicklung und Zinsprognose 2026", url: "https://www.kagels-trading.de/zinsentwicklung-prognose/" },
        { title: "Bloomberg: Frankreich-Anleihen unter Druck – Risikoprämie auf höchstem Stand seit Eurokrise", url: "https://www.bloomberg.com/news/articles/2026-10-02/frankreich-anleihen-unter-druck-risikopramie-auf-hochstem-stand-seit-eurokrise" },
        { title: "kapitalmarktexperten.de: Frankreichs Schuldenberg treibt Risikoaufschläge nach oben", url: "https://www.kapitalmarktexperten.de/frankreichs-schuldenberg-treibt-risikoaufschlaege-nach-oben/" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-10-12", cats: ["markets"], when: "Stand Fr 09.10./Mo-Vormittag 12.10.2026",
      headline: "Gold legt weiter zu, Bitcoin pendelt um 82.500 bis 83.000 Dollar, Euro bewegt sich seitwärts zum Dollar",
      sec30: "Gold notierte am Freitag je nach Quelle zwischen rund 4.192 und 4.195 Dollar je Feinunze – ein Plus von rund 1,3 bis 1,45 % gegenüber Donnerstag. Bitcoin pendelte zwischen rund 82.413 Dollar am Freitagmorgen und rund 82.950 Dollar am Montagvormittag, bei nach Berichten niedriger Liquidität. Der Euro bewegte sich zwischen rund 1,1196 und 1,1206 Dollar.",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "unbestaetigt", text: "Gold notierte am Freitag je nach Quelle zwischen rund 4.192 und 4.195 Dollar je Feinunze – ein Plus von rund 1,3 bis 1,45 % gegenüber Donnerstag.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "fakt", text: "Chinas Zentralbank kaufte laut Berichten im September den 23. Monat in Folge Gold zu (rund 740.000 Feinunzen) – ein Hinweis auf anhaltende strukturelle Nachfrage neben kurzfristigen Marktbewegungen." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin notierte am Freitagmorgen bei rund 82.413 Dollar und stieg bis Montagvormittag laut einer Quelle auf rund 82.950 Dollar (+0,93 % auf 24-Stunden-Sicht), bei laut Berichten niedriger Liquidität von nur rund 34 % des 30-Tage-Durchschnittsvolumens.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "unbestaetigt", text: "Der EZB-Referenzkurs stieg am Freitag auf 1,1206 Dollar (+0,18 % ggü. Donnerstag); eine andere Quelle nennt für den Zeitraum bis Montagvormittag einen leichten Rückgang auf rund 1,1196 Dollar.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold weiter zulegte, während Bitcoin nur leicht schwankte und der Euro sich seitwärts bewegte, zeigt unterschiedliche Reaktionen auf dieselbe uneinheitliche Nachrichtenlage rund um Zinsen und Geopolitik. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die unterschiedlichen Bewegungen bei Gold, Bitcoin und Euro fielen zusammen mit den uneinheitlichen Ölpreis-Angaben (Meldung 9) und der weiterhin historisch hohen US-Rendite (Meldung 2).",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "goldreporter.de: Goldpreis heute – Erholung Richtung 4.200 Dollar", url: "https://www.goldreporter.de/goldpreis-heute-09102026-erholung-4200-dollar/marktbericht-gold/262330/" },
        { title: "wallstreet-online: Goldpreis – Gold explodiert, plus 1,45 % auf 4.193,18 USD", url: "https://www.wallstreet-online.de/nachricht/21499438-goldpreis-gold-explodiert-plus-1-45-4-193-18-usd" },
        { title: "interactivecrypto.com: Bitcoin (BTC) unter 83.000 USD – ETF-Abflüsse und Fed-Druck belasten den Kurs", url: "https://www.interactivecrypto.com/de/bitcoin-btc-unter-83-000-usd-etf-abflusse-und-fed-druck-belasten-den-kurs" },
        { title: "Trading Economics: Euro Area Currency (EUR/USD)", url: "https://tradingeconomics.com/euro-area/currency" }
      ]
    },

    /* 4 WIRTSCHAFT: FED */
    {
      id: "fed-fomc-protokolle-arbeitsmarkt-verbrauchervertrauen-10-12", cats: ["economy"], when: "FOMC-Protokolle veröff. 07.10. · Waller-Rede 08.10. · Arbeitsmarktbericht Sept. 02.10. · nächste FOMC-Sitzung 27./28.10.2026",
      headline: "Fed-Protokolle zeigen Uneinigkeit über weitere Zinserhöhung, schwache US-Arbeitsmarktdaten dämpfen Erwartungen",
      sec30: "Die am 07.10. veröffentlichten FOMC-Sitzungsprotokolle zur Zinserhöhung vom 16.09. (auf 3,75 bis 4,00 %) zeigen, dass die meisten Fed-Mitglieder grundsätzlich mit mindestens einer weiteren Erhöhung bis Jahresende rechnen, sich aber über Zeitpunkt und Zahl der Schritte uneinig sind. Fed-Gouverneur Waller sprach am 08.10. von insgesamt rund 50 weiteren Basispunkten in den kommenden Monaten, ohne festen Zeitplan. Der US-Arbeitsmarktbericht für September (veröffentlicht 02.10.) fiel mit nur 29.000 neuen Stellen deutlich schwächer aus als die erwarteten 84.000; die Arbeitslosenquote stieg auf 4,2 %. Das vorläufige Verbrauchervertrauen der University of Michigan fiel auf ein 5-Monats-Tief von 46,3 Punkten.",
      blocks: [
        { h: "Was zeigen die FOMC-Protokolle vom 07.10.?", items: [
          { tag: "fakt", text: "Die Protokolle der FOMC-Sitzung vom 15./16.09. (dort wurde der Leitzins einstimmig um 25 Basispunkte auf 3,75 bis 4,00 % angehoben) zeigen, dass 16 von 18 Fed-Offiziellen in ihren Projektionen mit mindestens einer weiteren Erhöhung bis Jahresende rechneten; Uneinigkeit bestand über Zeitpunkt und Zahl der Schritte. Als Inflationstreiber wurden geopolitisch bedingte Ölpreisanstiege, Zolleffekte und KI-bezogene Investitionen genannt.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "Fed-Gouverneur Christopher Waller sagte am 08.10. in Istanbul, die Septemberentscheidung habe auf „einer Überzahl an Belegen über mehrere Monate” beruht, nicht auf einem Einzeldatum; er deutete weitere Erhöhungen von insgesamt rund 50 Basispunkten in den kommenden Monaten an, ohne festen Zeitplan." },
          { tag: "position", text: "Fed-Vice-Chair Philip Jefferson verwies am 01.10. auf ein BIP-Wachstum von 2,4 % im ersten Halbjahr und eine seit über fünf Jahren über dem 2-%-Ziel liegende Inflation; er warnte vor „upside risks to inflation” durch geopolitische Entwicklungen." }
        ]},
        { h: "Wie haben sich US-Arbeitsmarkt und Verbrauchervertrauen entwickelt?", items: [
          { tag: "fakt", text: "Der Arbeitsmarktbericht für September (veröffentlicht 02.10. vom Bureau of Labor Statistics) zeigte nur 29.000 neue Stellen (erwartet: 84.000); die Arbeitslosenquote stieg auf 4,2 %. Die Zahlen für Juli und August wurden nach unten revidiert, das Lohnwachstum lag mit 3 % auf dem niedrigsten Stand seit Mai 2021." },
          { tag: "fakt", text: "Das vorläufige Verbrauchervertrauen der University of Michigan für Oktober fiel auf 46,3 Punkte – ein 5-Monats-Tief (September: 48,1), unter anderem wegen gestiegener Lebenshaltungskosten.",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Wie schätzen Märkte die Oktober-Entscheidung ein?", items: [
          { tag: "unbestaetigt", text: "Wegen der schwachen Arbeitsmarktdaten ist die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung bei der Sitzung am 27./28.10. laut mehreren Quellen auf rund 16 bis 22 % gefallen; Investoren rechnen laut Berichten eher mit einem möglichen Schritt im Dezember." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mehrere Fed-Mitglieder an der grundsätzlichen Möglichkeit weiterer Zinserhöhungen festhalten, während sich gleichzeitig Arbeitsmarkt und Verbrauchervertrauen eintrüben, zeigt laut Marktbeobachtern ein Abwägen zwischen Inflationsbekämpfung und konjunktureller Vorsicht; die Entscheidung am 27./28.10. bleibt offen." }
        ]}
      ],
      reaction: "Die gemischten Fed-Signale fallen zusammen mit der weiterhin historisch hohen US-Rendite (Meldung 2) und der Markterholung vom Freitag (Meldung 1).",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "Federal Reserve: Minutes of the Federal Open Market Committee, September 15-16, 2026", url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm" },
        { title: "Federal Reserve: Speech by Governor Waller, Istanbul Economic Forum, 08.10.2026", url: "https://federalreserve.gov/newsevents/speech/waller20261008a.htm" },
        { title: "Federal Reserve: Speech by Vice Chair Jefferson, 01.10.2026", url: "https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm" },
        { title: "CNBC: Fed officials see another hike coming but no sign as to when, minutes show", url: "https://www.cnbc.com/2026/10/07/fed-officials-see-another-hike-coming-but-no-sign-as-to-when-minutes-show.html" },
        { title: "U.S. Bureau of Labor Statistics: Employment Situation Summary", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
        { title: "Yahoo Finance: US Consumer Sentiment Falls to Five-Month Low", url: "https://finance.yahoo.com/economy/articles/us-consumer-sentiment-falls-five-140000023.html" }
      ]
    },

    /* 5 WIRTSCHAFT: EZB/EUROZONE-INFLATION/SCHNABEL */
    {
      id: "ezb-eurozone-inflation-schnabel-nachfolge-10-12", cats: ["economy"], when: "Eurostat-Flash 02.10. · Eurogruppen-Frist Schnabel-Nachfolge 28.10. · nächste EZB-Zinsentscheidung 29.10.2026",
      headline: "Eurozone-Inflation springt auf 3,8 Prozent, EZB-Zinsentscheidung am 29.10. im Fokus, Bewerbungsfrist für Schnabel-Nachfolge läuft",
      sec30: "Die Inflation in der Eurozone sprang laut Eurostat-Flashschätzung vom 02.10. im September auf 3,8 % (von 3,2 % im August) – den höchsten Stand seit September 2023, vor allem wegen stark gestiegener Energiepreise. Die EZB hatte ihre Leitzinsen zuletzt am 10.09. um je 25 Basispunkte angehoben (Einlagesatz auf 2,50 %); die nächste Zinsentscheidung fällt am 29.10. Die Eurogruppe setzte den 28.10. als Frist für Kandidatenvorschläge zur Nachfolge von Isabel Schnabel im EZB-Direktorium, die zum IWF wechseln will.",
      blocks: [
        { h: "Wie hat sich die Inflation in der Eurozone entwickelt?", items: [
          { tag: "fakt", text: "Laut Eurostat-Flashschätzung vom 02.10. stieg die Inflation in der Eurozone im September auf 3,8 % (von 3,2 % im August) – der höchste Stand seit September 2023. Haupttreiber war Energie mit +18,8 % (nach +14,3 % im Vormonat); Dienstleistungen verteuerten sich um 3,2 %.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] },
          { tag: "unbestaetigt", text: "Für Deutschland rechnet das Statistische Bundesamt für September mit rund +3,3 % im Jahresvergleich (Kerninflation ohne Energie/Nahrungsmittel: 2,4 %); die finale Zahl soll am 13.10. veröffentlicht werden." }
        ]},
        { h: "Wie ist der Stand bei der EZB-Zinspolitik?", items: [
          { tag: "fakt", text: "Die EZB hatte ihre Leitzinsen am 10.09. um je 25 Basispunkte angehoben (Einlagesatz 2,50 %, Hauptrefinanzierungssatz 2,65 %), mit Verweis auf anhaltenden Inflationsdruck unter anderem durch den Nahost-Konflikt." },
          { tag: "position", text: "EZB-Präsidentin Christine Lagarde erklärte, die Kerninflation werde bis Anfang 2027 weiter steigen, die Gesamtinflation solle erst Ende 2027 ins Zielband zurückkehren; der EZB-Rat habe über künftige Zinsschritte nicht diskutiert, Entscheidungen erfolgten „von Sitzung zu Sitzung”." },
          { tag: "fakt", text: "Die nächste EZB-Zinsentscheidung fällt am 29.10.2026." }
        ]},
        { h: "Wie ist der Stand bei der EZB-Direktoriumsnachfolge?", items: [
          { tag: "fakt", text: "Eurogruppen-Chef Kyriakos Pierrakakis forderte die 21 Eurozonen-Staaten auf, bis zum 28.10.2026 Kandidaten für die Nachfolge von Isabel Schnabel einzureichen, die die EZB zum 01.01.2027 vorzeitig Richtung Internationalem Währungsfonds verlassen will." }
        ]},
        { h: "Welche weiteren Konjunkturdaten liegen vor?", items: [
          { tag: "fakt", text: "Der Composite-Einkaufsmanagerindex für die Eurozone (S&P Global/HCOB) stieg im September auf 53,1 Punkte – ein 41-Monats-Hoch; für Deutschland lag der Wert bei 53,8 Punkten, dem stärksten Wert seit Anfang 2022." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Eurozone-Inflation deutlich über das EZB-Ziel von 2 % gestiegen ist, während die EZB ihre künftigen Zinsschritte bewusst offenhält, erhöht die Aufmerksamkeit für die Sitzung am 29.10.; die parallel laufende Suche nach Schnabels Nachfolge fällt in dieselbe Phase der EZB-Entscheidungsfindung." }
        ]}
      ],
      reaction: "Die gestiegene Eurozone-Inflation ergänzt die Fed-Debatte um weitere Zinsschritte (Meldung 4) und bleibt Hintergrund für die weiterhin hohe Rendite französischer Staatsanleihen (Meldung 2).",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "EZB: Pressekonferenz zur Geldpolitik, 10.09.2026", url: "https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260910~6a45359cfc.de.html" },
        { title: "CNBC: Eurozone inflation jumps to 3.8%, sharpest increase since 2023", url: "https://www.cnbc.com/2026/10/02/eurozone-inflation-ecb.html" },
        { title: "Destatis: Pressemitteilung PD26_348_611 – Inflationsrate September 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_348_611.html" },
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel bis 28. Oktober", url: "https://www.onvista.de/news/2026/10-09-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-bis-28-oktober-0-20-26562225" },
        { title: "Handelsblatt: EZB – Euro-Staaten müssen bis Monatsende Schnabel-Nachfolge nominieren", url: "https://www.handelsblatt.com/finanzen/ezb-euro-staaten-muessen-bis-monatsende-schnabel-nachfolge-nominieren/100260974.html" },
        { title: "ZEW: Economic expectations show signs of improvement", url: "https://www.zew.de/en/press/latest-press-releases/economic-expectations-show-signs-of-improvement" }
      ]
    },

    /* 6 DEUTSCHLAND: RENTE + KOALITIONSAUSSCHUSS */
    {
      id: "koalitionsausschuss-rentenreform-fruehjahr-2027-10-12", cats: ["germany"], when: "Koalitionsausschuss 07.10.2026 · Bundestagsdebatte 09.10.2026",
      headline: "Koalitionsausschuss verschiebt Teile der Sozialreform auf Frühjahr 2027, Bundestag debattiert weiter über Rentenalter",
      sec30: "Nach dem Koalitionsausschuss von CDU/CSU und SPD am 07.10. im Kanzleramt gab es keine gemeinsame Pressekonferenz und keine neuen inhaltlichen Beschlüsse zu Rente, Pflege und Haushalt 2027; als neues Ziel für die Umsetzung des im Sommer vereinbarten Reformpakets wird laut Berichten nun das Frühjahr 2027 genannt, statt wie ursprünglich geplant noch 2026. Am 09.10. debattierte der Bundestag dennoch über drei Anträge der Linksfraktion zum Rentenalter, zur abschlagsfreien Rente nach 45 Versicherungsjahren und zur Altersteilzeit; die Anträge wurden ohne Schlussabstimmung an den Ausschuss für Arbeit und Soziales überwiesen. Gewerkschaften und Arbeitgeberverbände lehnen den Vorschlag der Alterssicherungskommission weiterhin aus entgegengesetzten Gründen ab.",
      blocks: [
        { h: "Was wurde beim Koalitionsausschuss besprochen – und was wurde verschoben?", items: [
          { tag: "unbestaetigt", text: "Nach rund vierstündiger Sitzung am 07.10. zwischen Bundeskanzler Friedrich Merz, Vizekanzler und SPD-Chef Lars Klingbeil sowie CSU-Chef Markus Söder gab es keine gemeinsame Pressekonferenz und keine neuen inhaltlichen Beschlüsse; offene Streitpunkte blieben Rente, Pflege und der Bundeshaushalt 2027. Merz nannte laut Berichten „Frühjahr 2027” als neues Ziel für die Umsetzung des im Sommer vereinbarten Reformpakets, statt wie ursprünglich geplant bis Jahresende 2026.",
            ask: [{ label: "Wo steht der Bundeshaushalt 2027 aktuell?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Worüber debattierte der Bundestag am 09.10. konkret?", items: [
          { tag: "fakt", text: "Die Linksfraktion brachte drei Anträge ein, die ohne Schlussabstimmung an den Ausschuss für Arbeit und Soziales überwiesen wurden: gegen eine weitere Erhöhung der Regelaltersgrenze, für den Erhalt der abschlagsfreien Rente nach 45 Beitragsjahren und für den Erhalt der Altersteilzeit ab 55 Jahren im Blockmodell.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Hintergrund ist der Bericht der Alterssicherungskommission vom 23.06. mit 33 Empfehlungen, darunter die Abschaffung der abschlagsfreien Rente nach 45 Versicherungsjahren und eine verpflichtende Kapitalrente mit zusätzlich 2 % Beitrag." }
        ]},
        { h: "Welche Position vertreten Gewerkschaften?", items: [
          { tag: "position", text: "DGB-Vorsitzende Yasmin Fahimi erklärte: „Rentenpolitik ist eben nicht nur eine Frage der Mathematik, sondern auch eine Frage der Gerechtigkeit”, zur Rente mit 63: „Das muss beibehalten werden.” Verdi-Vorsitzender Frank Werneke kritisierte, die Pläne entwerteten die Lebensleistung von Beschäftigten in körperlich belastenden Berufen." }
        ]},
        { h: "Welche Position vertreten Arbeitgeberverbände?", items: [
          { tag: "position", text: "BDA-Hauptgeschäftsführer Steffen Kampeter erklärte, er finde „erst einmal gut, dass die Politik Reformnotwendigkeiten adressiert”, kritisierte aber die verpflichtende Kapitalrente, die mit „40 Milliarden Euro” koste, „die an anderer Stelle fehlen” – damit lehnen Gewerkschaften und Arbeitgeberverbände den Kommissionsvorschlag aus entgegengesetzten Gründen ab." }
        ]},
        { h: "Welche weiteren Positionen gibt es?", items: [
          { tag: "position", text: "Die Linke (Luigi Pantisano) spricht statt von einer Alterssicherungs- von einer „Kürzungskommission”. Die Grünen (Armin Grau) werfen der Bundesregierung vor, die gesetzliche Rente „immer mehr zu einem Billigprodukt” machen zu wollen. Die AfD-Fraktion fordert eigenen Angaben zufolge, die Regelaltersgrenze von 67 zu sichern und zusätzliche abschlagsfreie Modelle einzuführen. Bundesarbeitsministerin Bärbel Bas (SPD) nannte die mögliche Abschaffung der Rente mit 63 für die SPD ein „schwieriges Thema”." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl Gewerkschaften als auch Arbeitgeberverbände den Kommissionsvorschlag ablehnen – wenn auch aus entgegengesetzten Gründen –, und dass der Koalitionsausschuss zentrale Entscheidungen auf Frühjahr 2027 vertagt hat, zeigt, wie schwierig ein Kompromiss innerhalb der Reform weiterhin bleibt." }
        ]}
      ],
      reaction: "Die vertagte Rentenfrage läuft parallel zu den laufenden Haushaltsberatungen für 2027 und zur Debatte über steigende Zinskosten des Staates (Meldung 2).",
      terms: ["schuldenbremse", "koalition", "umlage"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "ms-aktuell.de: Koalitionsausschuss – Merz nennt Frühjahr 2027 als Ziel", url: "https://ms-aktuell.de/welt/koalitionsausschuss-reformen-08-10-2026/" },
        { title: "Handelsblatt: Bundesregierung – Koalitionsausschuss beendet Sitzung nach vier Stunden", url: "https://www.handelsblatt.com/politik/deutschland/bundesregierung-koalitionsausschuss-beendet-sitzung-nach-vier-stunden/100260554.html" },
        { title: "Bundestag.de: Anträge zur Rentenpolitik debattiert", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw41-de-regelaltersgrenze-1217530" },
        { title: "it-boltwise.de: Rentenkommission – DGB begrüßt Ziele, BDA kritisiert Kapitalrente und Minijobs", url: "https://www.it-boltwise.de/rentenkommission-dgb-begruesst-ziele-bda-kritisiert-kapitalrente-und-minijobs.html" },
        { title: "AfD-Bundestagsfraktion: Wer 45 Jahre gearbeitet hat, hat sich eine abschlagsfreie Rente verdient", url: "https://afdbundestag.de/wer-45-jahre-gearbeitet-hat-hat-sich-eine-abschlagsfreie-rente-verdient/" }
      ]
    },

    /* 7 DEUTSCHLAND: BERLIN SONDIERUNG + SACHSEN-ANHALT */
    {
      id: "berlin-sondierung-sachsen-anhalt-afd-vize-10-12", cats: ["germany"], when: "Berlin: Acht-Punkte-Papier 08.10., Sondierungen laufend · Sachsen-Anhalt: Landtagsabstimmung 06.10.2026",
      headline: "Berliner Sondierungen zwischen Linke, Grüne und SPD laufen weiter, Wahl eines AfD-Vizepräsidenten in Sachsen-Anhalt sorgt für Kritik an der CDU",
      sec30: "Nach der Berliner Abgeordnetenhauswahl vom 20.09. (Die Linke stärkste Kraft mit 25,7 %) einigten sich Linke, Grüne und SPD am 08.10. auf ein Acht-Punkte-Papier zum Umgang mit Antisemitismus; offen bleiben die Haushaltslage und der Streit um die Vergesellschaftung großer Wohnungsbestände. In Sachsen-Anhalt wurde am 06.10. der AfD-Politiker Hans-Thomas Tillschneider mit 44 Ja-Stimmen zum Landtags-Vizepräsidenten gewählt – mehr Stimmen, als die AfD-Fraktion mit ihren 38 Sitzen selbst aufbringen konnte. Vizekanzler Klingbeil forderte von der CDU eine Erklärung dazu.",
      blocks: [
        { h: "Wie ist der Stand bei den Berliner Sondierungen?", items: [
          { tag: "fakt", text: "Nach der Abgeordnetenhauswahl vom 20.09.2026 (Die Linke 25,7 %, CDU 18,8 %, AfD 16,3 %, Grüne 14,3 %, SPD 12,1 %, laut vorläufigem Ergebnis) lud Die Linke Grüne und SPD zu Sondierungen ein.",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "Am 08.10. einigten sich die drei Parteien auf ein Acht-Punkte-Papier: Israels Existenzrecht wird für „unverhandelbar” erklärt, BDS-Kampagnen und israelbezogener Antisemitismus werden abgelehnt, ein unabhängiges Expertengremium soll Vorfälle in den eigenen Reihen bewerten." },
          { tag: "position", text: "CDU-Politiker Stefan Evers bezeichnete die Einigung laut Berichten als „Feigenblatt”." }
        ]},
        { h: "Was ist bei der Haushaltslage und der Vergesellschaftungsfrage offen?", items: [
          { tag: "fakt", text: "Berlins Haushaltslage gilt als angespannt; die Sondierungen zum Landeshaushalt liefen seit dem 08.10. fortlaufend weiter.",
            ask: [{ label: "Was braucht eine Koalition im Abgeordnetenhaus?", ref: "e:coalition-majority" }] },
          { tag: "position", text: "SPD-Fraktionschef Steffen Krach lehnt die von Linken und Grünen geforderte Vergesellschaftung großer privater Wohnungsbestände ab; auch die Grünen sind laut Berichten skeptisch, während die Linke auf die Umsetzung des Volksentscheids von 2021 drängt." },
          { tag: "unbestaetigt", text: "Zum genauen Verhandlungsstand am 11./12.10. liegen keine belastbaren neuen Berichte vor; der letzte öffentlich dokumentierte Stand datiert vom 10.10." }
        ]},
        { h: "Was ist in Sachsen-Anhalt passiert?", items: [
          { tag: "fakt", text: "Nach der Landtagswahl in Sachsen-Anhalt vom 06.09.2026 (AfD mit 43,8 % stärkste Kraft, bestes Landtagswahlergebnis ihrer Geschichte) wurde am 06.10. der AfD-Politiker Hans-Thomas Tillschneider mit 44 Ja-Stimmen zum Vizepräsidenten des Landtags gewählt – mehr Stimmen, als die AfD-Fraktion mit ihren 38 Sitzen selbst aufbringen konnte." },
          { tag: "position", text: "Vizekanzler Lars Klingbeil (SPD) forderte von der CDU eine Erklärung: „Nicht nur das BSW, auch die CDU muss dringend erklären, wie das passieren konnte.” Grüne und Linke äußerten ebenfalls Kritik am mutmaßlichen Abstimmverhalten der Union." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Berliner Sondierungen trotz der Antisemitismus-Einigung bei Haushalt und Vergesellschaftung weiterhin offene Streitpunkte haben, und dass die Wahl eines AfD-Vizepräsidenten in Sachsen-Anhalt Fragen zum Abstimmverhalten der Union aufwirft, zeigt auf zwei verschiedenen Ebenen, wie unübersichtlich die Mehrheitsverhältnisse nach den jüngsten Landtagswahlen geworden sind." }
        ]}
      ],
      reaction: "Die Berliner Haushaltssondierungen laufen parallel zur bundespolitischen Debatte über Rente und Koalitionsausschuss (Meldung 6).",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Berliner Zeitung: Berliner Sondierungen – die Vereinbarung von Linken, Grünen und SPD im Wortlaut", url: "https://www.berliner-zeitung.de/article/berliner-sondierungen-die-vereinbarung-von-linken-gruenen-und-spd-im-wortlaut-10472990" },
        { title: "ZDFheute: Rot-Rot-Grün in Berlin – warum der Weg zur Koalition noch weit ist", url: "https://www.zdfheute.de/politik/deutschland/berlin-sondierungen-linke-spd-gruene-100.html" },
        { title: "Tagesspiegel-Liveblog: Einigung bei Linken, Grünen und SPD in Berlin", url: "https://www.tagesspiegel.de/berlin/liveblog/einigung-bei-linken-grunen-und-spd-in-berlin-wer-antisemitisch-auffallt-dem-droht-der-rauswurf-16053722.html" },
        { title: "Tagesspiegel/dpa: Wie verlässlich ist die CDU? Grüne und Linke üben Kritik am mutmaßlichen Abstimmverhalten der Union in Sachsen-Anhalt", url: "https://www.tagesspiegel.de/politik/dpa-wie-verlasslich-ist-die-cdu-grune-und-linke-uben-kritik-am-mutmasslichen-abstimmverhalten-der-union-in-sachsen-anhalt-16133079.html" },
        { title: "ZDFheute: Rausch und Tillschneider – AfD stellt Landtagspräsidenten und Vize", url: "https://www.zdfheute.de/politik/deutschland/sachsen-anhalt-afd-landtag-praesident-tobias-rausch-100.html" }
      ]
    },

    /* 8 INTERNATIONAL/GEOPOLITIK: UKRAINE DIESEL-DEAL */
    {
      id: "ukraine-diesel-deal-selenskyj-sanktionen-10-12", cats: ["world", "geo"], when: "Diesel-Deal 09.10. · Trump-Forderung 10.10. · Russischer Großangriff 07.10. · 22. EU-Sanktionspaket Verabschiedung geplant 12.10.",
      headline: "Trump kündigt Diesel-Deal mit Russland an, Selenskyj übt scharfe Kritik, Trump fordert Führungswechsel in Kyjiw",
      sec30: "Nach einem Telefonat mit Putin kündigte Präsident Trump am 09.10. einen Diesel-Deal an: Russland soll wieder Diesel auf den Weltmarkt liefern, zunächst über 300.000 Tonnen, in Stufen bis auf mehr als 4 Millionen Tonnen; das US-Finanzministerium setzte Sanktionen auf russischen Diesel befristet bis April 2027 aus. Präsident Selenskyj nannte den Deal „nicht fair und nicht ehrlich”; Trump forderte am 10.10. im Gegenzug, die Ukraine solle Selenskyj durch einen verhandlungsbereiteren Präsidenten ersetzen. Russland hatte am 07.10. einen der größten Angriffe seit 2022 auf die ukrainische Energieinfrastruktur gestartet (laut Berichten mindestens 32 Tote); die Ukraine griff ihrerseits russische Raffinerien an. Das 22. EU-Sanktionspaket mit über 1.600 Einträgen soll am 12.10. in Luxemburg formell verabschiedet werden.",
      blocks: [
        { h: "Was kündigte Präsident Trump beim Diesel-Deal mit Russland an?", items: [
          { tag: "position", text: "Nach einem Telefonat mit Putin gab Trump am 09.10. bekannt, Russland dürfe wieder Diesel auf den Weltmarkt liefern: sofort über 300.000 Tonnen, im November weitere 500.000 Tonnen, danach kurzfristig 1 Million und zusätzlich bis zu 3 Millionen Tonnen – insgesamt laut Trump über 4 Millionen Tonnen beziehungsweise rund 6 Millionen Barrel. Das US-Finanzministerium erteilte dafür eine befristete Ausnahmegenehmigung der Behörde OFAC, die die Sanktionen auf russischen Diesel bis April 2027 aussetzt." },
          { tag: "unbestaetigt", text: "Ein US-Regierungsvertreter sagte Axios, Trump habe den Deal geschlossen, nachdem Selenskyj mehrere US-Bitten ignoriert habe, Angriffe auf russische Ölraffinerien einzustellen; diese Darstellung ließ sich nicht unabhängig verifizieren." }
        ]},
        { h: "Wie reagierte Präsident Selenskyj, und wie ging der Streit weiter?", items: [
          { tag: "position", text: "Präsident Selenskyj bezeichnete den Deal als „nicht fair und nicht ehrlich” sowie als Zeichen der Schwäche Trumps; Sanktionserleichterungen ohne ein „dauerhaftes Deeskalations-Abkommen” seien eine „offensichtliche Schwäche”. Russland werde den Diesel „mit weiterem Terror und Perfidie zurückzahlen”." },
          { tag: "position", text: "Trump reagierte am 10.10. mit der Forderung, die Ukraine solle Selenskyj durch einen verhandlungsbereiteren Präsidenten ersetzen." }
        ]},
        { h: "Wie ist der Stand bei den Witkoff/Kushner-Verhandlungen?", items: [
          { tag: "fakt", text: "Die US-Sondergesandten Steve Witkoff und Jared Kushner kehrten nach einem früheren Russland-Besuch mit dem Eindruck zurück, ein Energie-Waffenstillstand sei möglich; für den 09.10. war ein Treffen mit ukrainischen und europäischen Vertretern in Miami angesetzt, um „neue Ideen” vorzustellen." }
        ]},
        { h: "Was ist bei den jüngsten Angriffen passiert?", items: [
          { tag: "unbestaetigt", text: "Russland startete am 07.10. laut Selenskyj einen der größten Angriffe seit 2022 gezielt gegen die Energieinfrastruktur (130 Drohnen, 48 Marschflug- und ballistische Raketen); dabei wurden laut Berichten mindestens 32 Menschen getötet. Am 08.10. verursachten weitere Drohnenangriffe großflächige Stromausfälle in Kyjiw." },
          { tag: "unbestaetigt", text: "Das ukrainische Militär meldete, eigene Langstreckenangriffe hätten über 51 % der russischen Ölraffineriekapazität außer Betrieb gesetzt (Stand 05./06.10.); diese Angabe stammt von einer Konfliktpartei und ist nicht unabhängig verifiziert." }
        ]},
        { h: "Was ist der Stand bei den EU-Sanktionen?", items: [
          { tag: "fakt", text: "Die EU-Botschafter einigten sich am 07.10. auf das bislang größte Sanktionspaket seit Kriegsbeginn: über 1.600 neue Einträge (743 Einzelpersonen, 826 Unternehmen), vor allem mit Bezug zur russischen Rüstungsindustrie, zusätzlich gegen 77 Abgeordnete der Dumawahlen in besetzten ukrainischen Gebieten. Die formale Verabschiedung durch die EU-Außenminister war für den 12.10. in Luxemburg vorgesehen." }
        ]},
        { h: "Warum ist das wichtig, und welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Dass die USA kurzfristig wirtschaftliche Zusammenarbeit mit Russland (Diesel-Importe) ermöglichen, während die EU gleichzeitig ihr bislang größtes Sanktionspaket verabschiedet, zeigt unterschiedliche Linien zwischen den beiden wichtigsten Unterstützern der Ukraine. Der Diesel-Deal soll laut Trump globale Dieselpreise dämpfen, die wegen Raffinerieausfällen gestiegen waren; Kritiker werten die Sanktionslockerung zugleich als zusätzliche Einnahmequelle für Russlands Kriegsfinanzierung." }
        ]}
      ],
      reaction: "Die diplomatischen Spannungen bleiben Hintergrund für die Rüstungsthemen (Meldung 10, Meldung 11); die Lage am Golf wird gesondert in Meldung 9 eingeordnet.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Axios: Exclusive – Zelensky tells Axios Trump's diesel deal with Putin \"not fair and not honest\"", url: "https://www.axios.com/2026/10/09/exclusive-zelensky-putin-trump-diesel-deal" },
        { title: "Axios: Trump announces major diesel deal with Putin, infuriating Ukraine", url: "https://www.axios.com/2026/10/09/trump-putin-diesel-agreement-ukraine-war" },
        { title: "Axios: Trump calls for Ukraine to replace Zelensky after Putin diesel deal", url: "https://www.axios.com/2026/10/10/trump-ukraine-zelensky-replace-putin-diesel" },
        { title: "CNBC: Trump strikes deal with Putin to supply Russian diesel to U.S. and global markets", url: "https://www.cnbc.com/2026/10/09/trump-putin-russian-diesel-us-global-markets.html" },
        { title: "The Moscow Times: EU Approves Record Sanctions Expansion Targeting 1.6K Russian Citizens and Entities", url: "https://www.themoscowtimes.com/2026/10/07/eu-approves-record-sanctions-expansion-targeting-16k-russian-citizens-and-entities-a93913" },
        { title: "PBS NewsHour: Ukraine claims its strikes have taken out more than half of Russia's oil refining capacity", url: "https://www.pbs.org/newshour/world/ukraine-claims-its-strikes-have-taken-out-more-than-half-of-russias-oil-refining-capacity" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: IRAN/HORMUZ */
    {
      id: "iran-hormuz-tankerangriffe-trump-midterms-10-12", cats: ["world", "geo"], when: "Höchststand Tankerangriffe Woche bis 04.10. · Vorfall außerhalb Hormuz 07.10. · Oman-Evakuierung 07.10. · Trump-Zusage 08.10.",
      headline: "Tankerangriffe in der Straße von Hormus erreichen Kriegshoch, Trump hält an Nicht-Angriffs-Zusage vor den Zwischenwahlen fest",
      sec30: "In der Woche bis zum 04.10. wurden in der Straße von Hormus laut Berichten elf Tanker angegriffen – die höchste Zahl seit Beginn des Konflikts zwischen den USA/Israel und dem Iran im Februar 2026. Am 07.10. wurde erstmals seit Wochen ein Tanker außerhalb der eigentlichen Straße getroffen; die omanische Luftwaffe evakuierte Besatzungsmitglieder eines weiteren getroffenen Tankers. Präsident Trump erklärte am 08.10., die USA würden vor den Zwischenwahlen am 03.11. keine Angriffe auf den Iran starten; die Blockade iranischer Häfen bleibe aber „in voller Kraft”. OPEC+ ließ die Fördermengen für November am 04.10. unverändert.",
      blocks: [
        { h: "Was ist bei den jüngsten Tankerangriffen passiert?", items: [
          { tag: "fakt", text: "Laut US Naval Institute News kam es im Oktober 2026 „fast täglich” zu Angriffen auf Schiffe in der Straße von Hormus; in der Woche bis zum 04.10. wurden elf Tanker angegriffen – die höchste Zahl seit Kriegsbeginn.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "fakt", text: "Am 07.10. wurde erstmals seit dem 09.09. ein Tanker außerhalb der eigentlichen Straße getroffen (rund 51 Seemeilen vor Katar); die omanische Luftwaffe evakuierte zudem zehn Besatzungsmitglieder eines unter panamaischer Flagge fahrenden Tankers nach einem Angriff vor der omanischen Küste, laut indischem Außenministerium waren 11 der 12 verletzten Crewmitglieder Inder." },
          { tag: "unbestaetigt", text: "Nach einer CNN-Analyse versucht der Iran mit der Angriffswelle, seine Kontrolle über die Wasserstraße zurückzugewinnen und womöglich eine US-Reaktion zu provozieren; der Schiffsverkehr durch Hormus fiel laut Berichten auf den niedrigsten Stand seit über zwei Monaten." }
        ]},
        { h: "Was kündigte Trump zum Umgang mit dem Iran an?", items: [
          { tag: "position", text: "Präsident Trump erklärte am 08.10. auf Truth Social, die USA würden „zu keinem Zeitpunkt vor den Zwischenwahlen am 3. November” den Iran angreifen; die Gespräche mit Teheran seien „produktiv”. Zugleich betonte er, die Blockade iranischer Häfen bleibe „in voller Kraft”." },
          { tag: "unbestaetigt", text: "Medien berichten, frühere Ankündigungen Trumps zum Umgang mit dem Iran hätten sich nicht immer mit seinem späteren Handeln gedeckt; eine abschließende Einschätzung dazu liegt nicht vor." }
        ]},
        { h: "Was ist der Stand bei OPEC+?", items: [
          { tag: "fakt", text: "Die acht OPEC+-Staaten mit freiwilligen Förderanpassungen beschlossen am 04.10. in einer virtuellen Sitzung, die Fördermengen im November unverändert gegenüber September zu lassen – der zweite Monat in Folge ohne Anhebung; die nächste Überprüfung ist für den 01.11. vorgesehen.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass neue Tankerangriffe und Trumps öffentliche Zurückhaltung gleichzeitig auftreten, zeigt laut Marktbeobachtern, wie widersprüchlich sich die Risikolage am Golf derzeit darstellt – was sich auch in den uneinheitlichen Ölpreis-Angaben spiegelt. Analysten betonen zudem, der anhaltende Konflikt im Hormus-Korridor schränke die Fähigkeit der OPEC+ ein, Preise allein über Förderentscheidungen zu steuern, da unklar sei, ob zugesagte Mengen überhaupt sicher verschifft werden können.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Der uneinheitliche Ölpreis bleibt Hintergrund für die deutsche Energieversorgung (Meldung 15) sowie für die Markterholung (Meldung 1).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "CNN: Strait of Hormuz – after more oil left the Gulf, Iran tries to regain its stranglehold on shipping", url: "https://www.cnn.com/2026/10/11/middleeast/iran-hormuz-oil-analysis-intl" },
        { title: "USNI News: October Sees Near Daily Strikes on Ships in Hormuz", url: "https://news.usni.org/2026/10/09/october-sees-near-daily-strikes-on-ships-in-hormuz" },
        { title: "Al Jazeera: Oman evacuates injured crew from attacked tanker in Strait of Hormuz", url: "https://www.aljazeera.com/news/2026/10/7/oman-evacuates-injured-crew-from-attacked-tanker-in-strait-of-hormuz" },
        { title: "Al Jazeera: Trump says US will not strike Iran before midterm elections", url: "https://www.aljazeera.com/amp/news/2026/10/9/trump-says-us-will-not-strike-iran-before-midterm-elections" },
        { title: "The Moscow Times: OPEC+ Agrees to Keep November Oil Output Targets Steady", url: "https://www.themoscowtimes.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady-a93865" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL/RENK/HENSOLDT */
    {
      id: "rheinmetall-renk-hensoldt-analysten-auftraege-10-12", cats: ["defence"], when: "Kurse Stand 09.–11.10.2026 · Berenberg-Abstufung Rheinmetall 09.10. · Hensoldt-Hochstufung Anfang Okt.",
      headline: "Rheinmetall bei Analysten gespalten, Renk erhält Folgeauftrag aus Finnland, Hensoldt-Auftragseingang verdoppelt",
      sec30: "Rheinmetall notierte zuletzt bei rund 931,70 Euro, über 41 % unter dem Jahresanfangsniveau; Berenberg senkte das Rating am 09.10. auf „Hold” (Kursziel 1.020 Euro), während Deutsche Bank und RBC Capital Markets ihre positiveren Einschätzungen bestätigten. Renk notierte bei rund 34,35 Euro (−36 % seit Jahresanfang) und erhielt von der finnischen Patria einen Folgeauftrag über 30 Mio. Euro; Bank of America senkte das Kursziel, Jefferies bestätigte „Buy”. Hensoldt stieg auf rund 75,15 Euro, gestützt von einem im ersten Halbjahr auf 2,81 Mrd. Euro verdoppelten Auftragseingang; Jefferies stufte die Aktie hoch, Goldman Sachs startete die Coverage neutral.",
      blocks: [
        { h: "Wie haben sich die Kurse zuletzt entwickelt?", items: [
          { tag: "unbestaetigt", text: "Rheinmetall notierte zuletzt bei rund 931,70 Euro (je nach Quelle 931 bis 939 Euro) und damit über 41 % unter dem Jahresanfangsniveau, nahe dem Jahrestief.",
            ask: [{ label: "Was bedeutet ein schwankender Aktienkurs trotz hoher Branchennachfrage?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Renk notierte bei rund 34,35 Euro – ein Jahresminus von rund 36 %." },
          { tag: "fakt", text: "Hensoldt notierte dagegen bei rund 75,15 Euro und war damit der klare Gewinner unter den drei Werten." }
        ]},
        { h: "Was treibt die unterschiedlichen Analysteneinschätzungen?", items: [
          { tag: "position", text: "Berenberg-Analyst George McWhirter senkte das Rating für Rheinmetall am 09.10. von „Buy” auf „Hold” und das Kursziel auf 1.020 Euro, mit Verweis auf Unsicherheit beim mittelfristigen Wachstum. Deutsche Bank (Buy, 1.800 Euro) und RBC Capital Markets (Outperform) bestätigten dagegen ihre positiveren Einschätzungen; der Analysten-Konsens liegt bei rund 1.500 bis 1.627 Euro." },
          { tag: "position", text: "Bank of America senkte das Kursziel für Renk auf 42,50 Euro und äußerte Zweifel, ob Renk sein hohes Produktionstempo bei Getrieben halten kann; Jefferies bestätigte dagegen „Buy” und bezeichnete den neuen Auftrag als „solid start” ins vierte Quartal." },
          { tag: "fakt", text: "Jefferies stufte Hensoldt Anfang Oktober von „Hold” auf „Buy” hoch (Kursziel 98 Euro); Goldman Sachs startete die Coverage am 06.10. mit „Neutral” (Kursziel 85 Euro), da das Wachstumspotenzial aus dem europäischen Rüstungszyklus bereits weitgehend eingepreist sei." }
        ]},
        { h: "Welche neuen Aufträge gibt es?", items: [
          { tag: "fakt", text: "Renk erhielt von der finnischen Patria einen Folgeauftrag über rund 30 Mio. Euro für HSWL-076-Getriebe der TRACKX-Fahrzeugfamilie, Lieferbeginn 2027." },
          { tag: "fakt", text: "American Rheinmetall erhielt über die Defense Logistics Agency einen Auftrag der US Army über 20,7 Mio. Dollar für neue und modernisierte MK93-Waffenhalterungen, Lieferungen bis Oktober 2027." },
          { tag: "fakt", text: "Hensoldts Auftragseingang verdoppelte sich im ersten Halbjahr 2026 auf 2,81 Mrd. Euro (Vorjahr: 1,41 Mrd. Euro); der Auftragsbestand lag erstmals über 10,36 Mrd. Euro." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Hensoldt von einer konkreten Auftragsperspektive profitiert, während Rheinmetall und Renk trotz operativ positiver Einzelaufträge bei Analysten gespalten bewertet werden, zeigt erneut, dass die drei Rüstungswerte derzeit stärker auf unternehmensspezifische Nachrichten reagieren als auf den allgemeinen Branchentrend. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die unterschiedliche Kursentwicklung fällt zusammen mit der allgemeinen Markterholung (Meldung 1); die anhaltenden Spannungen rund um die Ukraine bleiben Hintergrundfaktor für die Branche (Meldung 8, Meldung 11).",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "finanzen.net: Rheinmetall-Aktie", url: "https://www.finanzen.net/aktien/rheinmetall-aktie" },
        { title: "wallstreet-online: Aktie nah Jahrestief – Analysten ziehen Reißleine, Rheinmetall-Kursziel fällt", url: "https://www.wallstreet-online.de/nachricht/21500398-aktie-nah-jahrestief-analysten-reissleine-rheinmetall-kursziel-faellt-580-euro" },
        { title: "Börse Express: Renk-Aktie – ein Auftrag aus Finnland über 30 Millionen", url: "https://www.boerse-express.com/news/articles/renk-aktie-ein-auftrag-aus-finnland-ueber-30-millionen-952304" },
        { title: "Börse Express: Renk Group-Aktie – Kurs fällt um 36 Prozent seit Jahresanfang", url: "https://www.boerse-express.com/news/articles/renk-group-aktie-kurs-faellt-um-36-prozent-seit-jahresanfang-952277" },
        { title: "ad-hoc-news.de: Hensoldt-Aktie bei 75,15 Euro – Analystenziel liegt 30,4 Prozent höher", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/hensoldt-aktie-bei-75-15-euro-analystenziel-liegt-30-4-prozent-hoeher/70278231" },
        { title: "kapitalmarktexperten.de: Hensoldt-Aktie – Auftragseingang verdoppelt auf 2,81 Milliarden", url: "https://www.kapitalmarktexperten.de/hensoldt-aktie-auftragseingang-verdoppelt-auf-281-milliarden/" }
      ]
    },

    /* 11 DEFENCE: TKMS/JAPAN/NATO */
    {
      id: "tkms-kanada-japan-patriot-nato-ausgaben-10-12", cats: ["defence"], when: "TKMS-Kanada-Zuschlag bestätigt · Japan-Ankündigung Anfang Okt. · NATO-Ausgabenbericht Sept. 2026",
      headline: "TKMS erhält Milliardenauftrag aus Kanada für bis zu zwölf U-Boote, Japan prüft Patriot-Weitergabe an Ukraine, NATO-Ausgaben steigen deutlich",
      sec30: "TKMS hat laut dem kanadischen Premierminister Mark Carney den Zuschlag für bis zu zwölf U-Boote des Typs 212CD erhalten – die größte U-Boot-Order der Firmengeschichte, mit einem Auftragswert von über 10 Mrd. Euro allein für die Boote und bis zu rund 20 Mrd. Euro inklusive Service. Der japanische Politiker Itsunori Onodera kündigte an, Japan werde Gespräche über eine mögliche Weitergabe von Patriot-Abfangraketen an die Ukraine wieder aufnehmen. Europäische NATO-Partner und Kanada erhöhten ihre Verteidigungsausgaben 2026 laut einem Bericht um rund 11 % auf insgesamt 777 Mrd. Dollar.",
      blocks: [
        { h: "Wie ist der Stand beim TKMS-Auftrag aus Kanada?", items: [
          { tag: "fakt", text: "TKMS hat laut dem kanadischen Premierminister Mark Carney den Zuschlag für die Erneuerung der kanadischen U-Boot-Flotte erhalten: bis zu zwölf Boote vom Typ 212CD, rund 72 Meter lang, für 30 Mann Besatzung ausgelegt. Der Auftragswert liegt bei über 10 Mrd. Euro für die Boote, inklusive Service-Leistungen bei bis zu rund 20 Mrd. Euro.",
            ask: [{ label: "Warum ist Rüstungsnachfrage für Unternehmen wie TKMS relevant?", ref: "e:nato-target" }] },
          { tag: "fakt", text: "Der Bau soll in Kiel und am zweiten Standort Wismar (Mecklenburg-Vorpommern) stattfinden, wo bis zu 1.500 neue Arbeitsplätze entstehen sollen; Verteidigungsminister Pistorius sprach von der „weltgrößten U-Boot-Flotte”." }
        ]},
        { h: "Wie ist der Stand bei Japan und der Patriot-Weitergabe?", items: [
          { tag: "unbestaetigt", text: "Der japanische LDP-Politiker und frühere Verteidigungsminister Itsunori Onodera kündigte an, Japan werde trotz rechtlicher Exportbeschränkungen Gespräche über eine Lieferung oder einen Verkauf von Patriot-Abfangraketen an die Ukraine wieder aufnehmen; unter Premierministerin Takaichi sollen regierungsinterne Beratungen beginnen. Im Gespräch sind laut Berichten PAC-3-CRI- und PAC-2-GEM-Flugkörper; welche Typen konkret und wann geliefert werden könnten, ist offen." }
        ]},
        { h: "Wie entwickeln sich die NATO-Verteidigungsausgaben?", items: [
          { tag: "fakt", text: "Europäische NATO-Partner und Kanada erhöhten 2026 laut einem Bericht ihre Verteidigungsausgaben um rund 11 % auf insgesamt 777 Mrd. Dollar. Deutschland plant für 2026 über 108 Mrd. Euro für äußere Sicherheit, mit einer Steigerung bis auf 152 Mrd. Euro bis 2029; Ziel bleibt laut dem Den-Haag-Beschluss 3,5 % des Bruttoinlandsprodukts für Verteidigung." },
          { tag: "fakt", text: "Verteidigungsminister Pistorius und US-Verteidigungsminister Hegseth unterzeichneten eine Absichtserklärung zu Entwicklung, Produktion, Lizenzfertigung und Wartung von Rüstungsgütern; im Gespräch sind unter anderem eine PAC-3-Lizenzfertigung und europäische Tomahawk-Produktion." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl das kanadische U-Boot-Programm vertraglich abgeschlossen wird als auch Japans mögliche Patriot-Weitergabe politisch vorankommt, während die NATO-Verteidigungsausgaben insgesamt stark steigen, passt zu Berichten über anhaltend hohe Nachfrage bei gleichzeitig begrenzten Fertigungskapazitäten in der Branche." }
        ]}
      ],
      reaction: "Die anhaltende Nachfrage nach westlicher Rüstung hängt mit den Kursbewegungen bei Rheinmetall, Renk und Hensoldt zusammen (Meldung 10) und mit den diplomatischen Spannungen rund um die Ukraine (Meldung 8).",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "ZDFheute: U-Boot-Deal mit Kanada – TKMS erhält Zuschlag", url: "https://www.zdfheute.de/politik/ausland/u-boot-deal-kanada-tkms-100.html" },
        { title: "t-online: TKMS-Deal mit Kanada – Pistorius kündigt weltgrößte U-Boot-Flotte an", url: "https://www.t-online.de/finanzen/aktuelles/wirtschaft/id_101330960/tkms-deal-mit-kanada-pistorius-kuendigt-weltgroesste-u-boot-flotte-an.html" },
        { title: "Militarnyi: Japan to Consider Transferring Patriot Missiles to Ukraine", url: "https://militarnyi.com/en/news/japan-consider-patriot-missiles-for-ukraine/" },
        { title: "globaldefensecorp.com: Japan will consider allowing direct arms exports to Ukraine after selling Patriot missile interceptors", url: "https://www.globaldefensecorp.com/2026/10/11/japan-will-consider-allowing-direct-arms-exports-to-ukraine-after-selling-patriot-missile-interceptors/" },
        { title: "finanznachrichten.de: 777 Milliarden Dollar – NATO-Verbündete fahren Verteidigungsausgaben massiv hoch", url: "https://www.finanznachrichten.de/nachrichten-2026-09/69698624-777-milliarden-dollar-nato-verbuendete-fahren-verteidigungsausgaben-massiv-hoch-wo-rheinmetall-und-nodestream-ansetzen-176.htm" }
      ]
    },

    /* 12 DEALS: CARLYLE/LUKOIL, CABLE ONE, SPACEX/GRAIN, FIRMUS */
    {
      id: "ma-deals-carlyle-lukoil-cableone-spacex-firmus-10-12", cats: ["deals", "pe"], when: "Carlyle/Lukoil-Vertragsende 08.10. · CoBank-Klage/Verfügung 09.10. · SpaceX/Grain-Deal 08./09.10. · Firmus-IPO-Rückzug 09.10.",
      headline: "Carlyles Lukoil-Deal läuft aus, Gläubiger stoppt Cable-One-Übernahme vorläufig, SpaceX kauft Funkspektrum für 8 Mrd. Dollar",
      sec30: "Die Private-Equity-Firma Carlyle bestätigte am 08.10., dass ihre Vereinbarung zum Kauf internationaler Lukoil-Vermögenswerte ausgelaufen ist, nachdem die US-Sanktionsbehörde OFAC keine Genehmigung erteilte; ein Konsortium um Todd Boehly übernimmt laut Berichten die Initiative. Die Kreditgenossenschaft CoBank erreichte am 09.10. eine gerichtliche Verfügung, die Cable Ones rund 480 Mio. Dollar schwere Übernahme von Mega Broadband Investments vorläufig stoppt; die Cable-One-Aktie fiel um rund 35 %. SpaceX unterzeichnete eine Vereinbarung zum Kauf eines Funkspektrum-Portfolios von Grain Management für 8 Mrd. Dollar. Der australische Rechenzentrumsbetreiber Firmus zog seinen geplanten Milliarden-Börsengang zurück.",
      blocks: [
        { h: "Was ist beim Carlyle/Lukoil-Deal passiert?", items: [
          { tag: "fakt", text: "Carlyle bestätigte am 08.10., dass die Vereinbarung zum Kauf internationaler Lukoil-Vermögenswerte (unter anderem europäische Raffinerien, Ölfelder im Irak und in Kasachstan, Gesamtwert zuvor rund 22 Mrd. Dollar) ausgelaufen ist, nachdem das US-Finanzministerium (OFAC) bis Ende Juli keine Genehmigung erteilt hatte.",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] },
          { tag: "unbestaetigt", text: "Ein Konsortium um den Investor Todd Boehly, mit der US-Entwicklungsfinanzierungsbehörde DFC und Golf-Investoren, soll laut Financial-Times-Berichten die Initiative übernehmen; der Deal befinde sich „in einem fortgeschrittenen Stadium”, sei aber mit Lukoil noch nicht final vereinbart. Finanzierung und Banken sind in den Quellen nicht genannt." }
        ]},
        { h: "Was ist bei der Cable-One/Mega-Broadband-Übernahme passiert?", items: [
          { tag: "fakt", text: "Die Kreditgenossenschaft CoBank ACB (Gläubigerin mit rund 1,1 Mrd. Dollar besicherter Kredite an Cable One) reichte Klage ein; ein Bundesrichter stoppte am 09.10. vorläufig den für diesen Tag fälligen Kauf von 55 % an Mega Broadband Investments (Marke Vyve Broadband, Verkäufer: GTCR) für rund 480 Mio. Dollar. CoBank argumentiert, Cable Ones eigene Offenlegungen bewerteten den Anteil nur mit rund 54 Mio. Dollar; die Übernahme würde die Insolvenzgefahr verschärfen." },
          { tag: "fakt", text: "Die Cable-One-Aktie fiel um rund 35 % infolge der Klage; ein konkreter Anhörungstermin war den Quellen zufolge noch nicht festgelegt." }
        ]},
        { h: "Was ist beim SpaceX/Grain-Management-Deal neu?", items: [
          { tag: "fakt", text: "SpaceX unterzeichnete eine definitive Vereinbarung zum Kauf eines landesweiten 800-MHz-Funkspektrum-Portfolios von der Private-Equity-Firma Grain Management für 8 Mrd. Dollar in bar, für den geplanten Starlink-Mobilfunkdienst; die Transaktion steht unter dem Vorbehalt der Zustimmung der US-Regulierungsbehörde FCC." },
          { tag: "fakt", text: "Laut Berichten fiel die Verizon-Aktie um rund 10 % (größter Tagesverlust seit 2002); AT&T, Verizon und T-Mobile verloren zusammen rund 36 Mrd. Dollar an Marktkapitalisierung." }
        ]},
        { h: "Was ist beim geplanten Börsengang von Firmus passiert?", items: [
          { tag: "fakt", text: "Der australische, von Nvidia unterstützte Rechenzentrumsbetreiber Firmus zog seinen geplanten Börsengang am 09.10. zurück, nachdem das Marktinteresse laut Berichten unterwältigend war; geplant war eine implizite Bewertung von bis zu rund 43,7 Mrd. australischen Dollar (etwa 30,3 Mrd. US-Dollar). Das Unternehmen verfolgt nun private Finanzierungsoptionen; konkrete Zahlen dazu sind in den Quellen nicht genannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere große, teils milliardenschwere Deals (Carlyle/Lukoil, Cable One/Mega Broadband, Firmus-Börsengang) binnen wenigen Tagen ausliefen, gerichtlich blockiert oder zurückgezogen wurden, während SpaceX zeitgleich einen neuen Milliarden-Deal abschloss, zeigt anhaltend hohe, aber zugleich störanfällige Dealaktivität in diesem Herbst." }
        ]}
      ],
      reaction: "Die hohe, aber störanfällige Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: ["closing", "take-private", "private-equity"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "8 Mrd. $ (SpaceX/Grain Management, Funkspektrum, bar); weitere genannte Deals ohne einheitlichen Gesamtwert",
        buyer: "SpaceX",
        target: "Grain Management (800-MHz-Funkspektrumportfolio)",
        sector: "Telekommunikation / Satellitenkommunikation",
        type: "Übernahme unter FCC-Vorbehalt"
      },
      sources: [
        { title: "gurufocus.com: Carlyle Group (CG) Deal to Acquire Lukoil's International Assets Lapses", url: "https://www.gurufocus.com/news/9116462/carlyle-group-cg-deal-to-acquire-lukoils-international-assets-lapses" },
        { title: "Meduza: Former Chelsea co-owner Todd Boehly seeks to buy Lukoil's foreign assets", url: "https://meduza.io/en/news/2026/09/23/former-chelsea-co-owner-todd-boehly-seeks-to-buy-lukoil-s-foreign-assets" },
        { title: "Bloomberg: CoBank Sues to Block Cable One's $480 Million Mega Broadband Acquisition", url: "https://www.bloomberg.com/news/articles/2026-10-09/cable-one-lender-seeks-to-block-480-million-mega-broadband-deal" },
        { title: "gurufocus.com: Cable One (CABO) Shares Plunge 35% Amid CoBank Legal Block on Mega Broadband Deal", url: "https://www.gurufocus.com/news/9117660/cable-one-cabo-shares-plunge-35-amid-cobank-legal-block-on-mega-broadband-deal" },
        { title: "Axios: SpaceX's $8 billion spectrum deal", url: "https://www.axios.com/2026/10/09/spacex-8-billion-spectrum" },
        { title: "CNBC: Nvidia-backed Aussie AI firm Firmus withdraws historic IPO", url: "https://www.cnbc.com/2026/10/09/nvidia-ai-firmus-ipo-.html" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-blue-owl-sec-fed-bathla-10-12", cats: ["credit", "pe"], when: "Blue-Owl-Rücknahme-Deckelung Anfang Okt. · SEC-Stellungnahme 28.09. · Semafor-Bericht zu Fed-Prüfung 05.10. · Bathla-Insolvenz ungelöst seit 25.08.",
      headline: "Private-Credit-Bewertungssorgen halten an: Blue Owl kappt Rücknahmen, SEC und Fed verschärfen Aufsicht, Bathla-Insolvenz belastet australische Fonds",
      sec30: "Die Blue-Owl-Aktie fiel Anfang Oktober auf rund 9,08 Dollar – nahezu 30 % seit dem August-Hoch und 63 % unter dem Allzeithoch; Rücknahmen in zwei großen Kreditfonds wurden gedeckelt, nachdem Anleger teils über ein Drittel ihrer Anteile zurückgeben wollten. Die US-Börsenaufsicht SEC veröffentlichte am 28.09. eine Stellungnahme zur Bewertung illiquider Vermögenswerte; die US-Notenbank prüft laut einem Semafor-Bericht vom 05.10., wie Banken Sicherheiten für Private-Credit-Kredite bewerten. Die Insolvenz des australischen Bauträgers Bathla Group bleibt mit rund 3,4 bis 3,6 Mrd. australischen Dollar Schulden bei rund 40 Private-Credit-Fonds ungelöst.",
      blocks: [
        { h: "Wie wirken sich die Bewertungssorgen auf Blue Owl aus?", items: [
          { tag: "fakt", text: "Die Blue-Owl-Aktie fiel Anfang Oktober auf rund 9,08 Dollar – ein Rückgang von nahezu 30 % seit dem August-Hoch und von rund 63 % gegenüber dem Allzeithoch.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "Rücknahmen in zwei großen Kreditfonds wurden auf 5 % gedeckelt: Im rund 5 Mrd. Dollar schweren Technology Income Corp wollten Anleger 39 % ihrer Anteile zurückgeben, im Credit Income Corp 16,8 %." },
          { tag: "unbestaetigt", text: "Nach Berichten soll der Investor Boaz Weinstein (Saba Capital) einen Fonds lanciert haben, der Blue-Owl-Fondsanteile mit bis zu 35 % Abschlag zum Nettoinventarwert aufkauft; eine offizielle Bestätigung dazu liegt nicht vor." }
        ]},
        { h: "Was unternehmen SEC und Fed?", items: [
          { tag: "fakt", text: "Die US-Börsenaufsicht SEC veröffentlichte am 28.09. eine Stellungnahme zur Fair-Value-Bewertung illiquider Vermögenswerte und warnte Wirtschaftsprüfer vor zu pauschalen Offenlegungen." },
          { tag: "unbestaetigt", text: "Laut einem Semafor-Bericht vom 05.10. prüft die US-Notenbank Fed bei mehreren Banken, wie diese Sicherheiten für Private-Credit-Kredite bewerten; ausgelöst wurde die Prüfung laut Berichten unter anderem durch Abschreibungen bei Software-Krediten im März." }
        ]},
        { h: "Wie hoch sind aktuelle Ausfallraten, und welches Refinanzierungsrisiko wird diskutiert?", items: [
          { tag: "unbestaetigt", text: "Angaben zu aktuellen Ausfallraten schwanken je nach Quelle zwischen rund 2,5 % (Proskauer, zweites Quartal) und 6,3 % (Fitch, 12 Monate bis August, laut dieser Quelle ein Rekordwert).",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] },
          { tag: "fakt", text: "Ein Bloomberg-Bericht vom 08.10. beschreibt ein wachsendes Refinanzierungsrisiko bei Private-Credit-Deals aus den Jahren 2021/2022, die bei den damaligen Nahe-Null-Zinsen abgeschlossen wurden." }
        ]},
        { h: "Wie ist der Stand bei der australischen Bathla-Insolvenz?", items: [
          { tag: "fakt", text: "Die Insolvenz des australischen Bauträgers Bathla Group vom 25.08. bleibt ungelöst: rund 3,4 bis 3,6 Mrd. australische Dollar Schulden bei rund 40 Private-Credit-Fonds, betroffen sind rund 2.000 Häuser im Bau und bis zu 15.000 geplante Einheiten; CVS Lane Capital Partners setzte Rücknahmen in einem betroffenen Fonds aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Blue Owls Aktie und Fondsrücknahmen deutlich unter Druck stehen, während SEC und Fed gleichzeitig genauer hinschauen und die Bathla-Insolvenz weiterhin ungelöst bleibt, zeigt, dass die Debatte um die Verlässlichkeit von Private-Credit-Bewertungen anhält." }
        ]}
      ],
      reaction: "Die anhaltende Bewertungsdebatte ergänzt die Fragen zu Dealaktivität und Fremdfinanzierung bei den M&A-Themen (Meldung 12).",
      terms: ["nav", "default-rate", "bdc", "pik"],
      followups: ["e:private-credit-what", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      widget: "sofr",
      sources: [
        { title: "Benzinga: Blue Owl Stock at Risk as Private Credit Giant Caps Withdrawals Amid Surging Outflows", url: "https://www.benzinga.com/markets/equities/26/10/62152913/blue-owl-stock-at-risk-as-private-credit-giant-caps-withdrawals-amid-surging-outflows" },
        { title: "WilmerHale: SEC Staff Statement Highlights Valuation and Disclosure Expectations for Private Credit and Other Illiquid Assets", url: "https://www.wilmerhale.com/en/insights/client-alerts/20261008-sec-staff-statement-highlights-valuation-and-disclosure-expectations-for-private-credit-and-other-illiquid-assets" },
        { title: "Semafor: Exclusive – Private-credit worries spur Fed review", url: "https://www.semafor.com/article/10/05/2026/private-credit-worries-spur-fed-review" },
        { title: "Bloomberg: Legacy Private Credit Loans Face Refinancing Risks as Rates Rise", url: "https://www.bloomberg.com/news/articles/2026-10-08/legacy-private-credit-loans-face-refinancing-risks-as-rates-rise" },
        { title: "MacroBusiness: Bathla's collapse an iceberg for private credit market", url: "https://www.macrobusiness.com.au/2026/10/bathlas-collapse-an-iceberg-for-private-credit-market/" }
      ]
    },

    /* 14 TECHNOLOGIE: KI-BLASE */
    {
      id: "ki-blase-openai-hyperscaler-capex-circular-financing-10-12", cats: ["tech"], when: "OpenAI-Berichte 08./09.10. · Dalio-Warnung 08.10. · Hyperscaler-Signale 11.10.",
      headline: "KI-Investitionsboom treibt Hyperscaler-Ausgaben auf 725 Mrd. Dollar, Warnungen vor einer KI-Blase häufen sich",
      sec30: "Zur Umsatzentwicklung von OpenAI widersprechen sich Berichte: Ein Bericht vom 08.10. nannte einen aktuellen annualisierten Umsatz von rund 50 Mrd. Dollar – unter zuvor genannten Erwartungen –, ein Bericht vom 09.10. ein Jahresend-Ziel von mindestens 70 Mrd. Dollar. Investor Ray Dalio warnte am 08.10., die KI-Welle sei eine „klassische Blase”; Panmure-Liberum-Stratege Joachim Klement erwartet ein Platzen 2027/2028. Die vier größten Hyperscaler dürften laut Berichten 2026 zusammen rund 725 Mrd. Dollar in KI-Infrastruktur investieren. SpaceX sucht parallel rund 40 Mrd. Dollar Fremdfinanzierung für Nvidia-Chip-Käufe.",
      blocks: [
        { h: "Was wird zur Umsatzentwicklung von OpenAI berichtet?", items: [
          { tag: "unbestaetigt", text: "Ein Bericht vom 08.10. nannte für OpenAI einen aktuellen annualisierten Umsatz von rund 50 Mrd. Dollar – deutlich unter zuvor genannten Erwartungen von bis zu 68 bis 70 Mrd. Dollar; dies belastete am Donnerstag Chip- und KI-Werte (Nvidia −3 %, Oracle −6 %, CoreWeave −8 %, AMD/Broadcom je rund −4 % laut Berichten). Ein Bericht vom 09.10. nannte dagegen für Jahresende ein Ziel von mindestens 70 Mrd. Dollar annualisiertem Umsatz. Beide Angaben stammen aus unterschiedlichen Quellen und ließen sich nicht abschließend in Übereinstimmung bringen.",
            ask: [{ label: "Wie hängt das mit der DAX-Erholung am Freitag zusammen?", ref: "s:1" }] },
          { tag: "fakt", text: "In laufenden Finanzierungsgesprächen beziffert OpenAI den eigenen Unternehmenswert laut Berichten auf rund 1,4 Billionen Dollar und will rund 30 Mrd. Dollar einsammeln." }
        ]},
        { h: "Welche Warnungen vor einer KI-Blase gibt es?", items: [
          { tag: "position", text: "Bridgewater-Gründer Ray Dalio warnte am 08.10. auf einer Konferenz in Singapur, die KI-Welle sei eine „klassische Blase”: „Ich glaube, wir sind nah dran.” Als möglichen Auslöser für ein Platzen nannte er das Zusammenspiel aus steigender KI-Kreditaufnahme und steigenden Zinsen.",
            ask: [{ label: "Warum warnen Analysten vor einer KI-Blase?", ref: "e:ai-capex" }] },
          { tag: "position", text: "Panmure-Liberum-Stratege Joachim Klement beschreibt den KI-Investitionsboom als nominal rund 60 % größer als die Dotcom-Blase der späten 1990er-Jahre und erwartet ein Platzen 2027 oder 2028 mit einem möglichen Rückgang des S&P 500 auf 5.000 Punkte." }
        ]},
        { h: "Wie hoch sind die Investitionen der großen Tech-Konzerne?", items: [
          { tag: "unbestaetigt", text: "Signale der vier größten Hyperscaler vom 11.10. deuten laut Berichten auf einen kombinierten Capex 2026 von rund 725 Mrd. Dollar hin (gegenüber rund 410 Mrd. Dollar 2025); für 2027 werden über 1 Billion Dollar erwartet." }
        ]},
        { h: "Was ist mit der zirkulären Finanzierung bei KI-Infrastruktur gemeint?", items: [
          { tag: "fakt", text: "SpaceX sucht rund 40 Mrd. Dollar Fremdkapital (etwa 10 Mrd. Dollar Bankkredite, 30 Mrd. Dollar Investment-Grade-Anleihen), um Nvidia-KI-Chips zu kaufen; die Transaktion soll laut Berichten von Apollo Global Management geführt werden, ein Abschluss wird erst 2027 erwartet.",
            ask: [{ label: "Was ist damit gemeint, dass Finanzierung „zirkulär” wird?", ref: "e:circular-financing" }] },
          { tag: "unbestaetigt", text: "Kritiker bezeichnen die Konstruktion als eine sich selbst verstärkende Geldschleife, da Nvidia SpaceX-Chips verkauft, zugleich SpaceX-Aktien hält und Teile der Finanzierung mitträgt, mit der SpaceX wiederum Nvidia-Chips kauft; diese Einschätzung ist eine Deutung von Beobachtern, keine eigenständig belegte Tatsache." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass widersprüchliche Berichte zu denselben Umsatzzahlen innerhalb von 24 Stunden die Marktstimmung drehen konnten, während gleichzeitig renommierte Investoren vor einer Blase warnen und die Investitionssummen weiter steigen, zeigt, wie stark sich die Finanzmärkte derzeit an einzelnen Signalen zur Tragfähigkeit der KI-Investitionen orientieren. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die widersprüchliche Berichtslage zu OpenAI bleibt Hintergrund für die Markterholung vom Freitag (Meldung 1) und für die Nasdaq-Bewegung im Besonderen (Meldung 1).",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "WirtschaftsWoche: KI – wie OpenAI bis Ende 2026 einen Umsatz von 70 Milliarden Dollar anpeilt", url: "https://www.wiwo.de/unternehmen/it/ki-wie-openai-bis-ende-2026-einen-umsatz-von-70-milliarden-dollar-anpeilt/100260968.html" },
        { title: "cash.ch: Hedgefonds-Legende Ray Dalio – KI-Blase steht kurz vor dem Platzen", url: "https://www.cash.ch/news/top-news/hedgefonds-legende-ray-dalio-ki-blase-steht-kurz-vor-dem-platzen-974750" },
        { title: "Invezz: AI bubble could burst in 2027, sending S&P 500 down to 5,000, strategist warns", url: "https://invezz.com/news/2026/10/08/ai-bubble-could-burst-in-2027-sending-sp-500-down-to-5000-strategist-warns/" },
        { title: "Forbes: Big Tech Will Spend Over $700 Billion On AI This Year – Follow The Money, Not The Hype", url: "https://www.forbes.com/sites/jasonkirsch/2026/10/07/big-tech-will-spend-over-700-billion-on-ai-this-year-follow-the-money-not-the-hype/" },
        { title: "Yahoo Finance: SpaceX seeks $40 billion debt to fund Nvidia chip purchases", url: "https://finance.yahoo.com/technology/ai/articles/spacex-seeks-40-billion-debt-114434062.html" },
        { title: "IFA Magazine: SpaceX's $40bn Nvidia chip deal exposes AI's dangerous money loop", url: "https://ifamagazine.com/spacexs-40bn-nvidia-chip-deal-exposes-ais-dangerous-money-loop/" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "energie-gasspeicher-sefe-opec-brent-10-12", cats: ["energy"], when: "Gasspeicherstand 09.10. · Sefe-Weisung Reiche Anfang Okt. · OPEC+-Entscheidung 04.10.",
      headline: "Deutsche Gasspeicher bleiben unter dem Zielpfad, Reiche lässt Sefe nachkaufen, Ölpreis bewegt sich trotz unveränderter OPEC+-Förderung",
      sec30: "Die deutschen Gasspeicher lagen am 09.10. bei rund 59,8 % – deutlich unter dem gesetzlichen Zwischenziel und rund 17 Prozentpunkte unter dem Vorjahreswert. Wirtschaftsministerin Katherina Reiche (CDU) wies die bundeseigene Sefe an, zusätzlich 8 TWh Gas zu beschaffen und bis zum 15.12. einzuspeichern. Die OPEC+ beließ die Fördermengen für November am 04.10. unverändert; der Brent-Ölpreis bewegte sich dennoch zwischen rund 102,6 und 104,7 Dollar, getrieben laut Berichten vor allem von den Spannungen im Golf (Meldung 9).",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen am 09.10. bei rund 59,8 % (147,9 TWh); das gesetzliche Ziel liegt bei 80 % zum 01.11. Der Füllstand liegt rund 17 Prozentpunkte unter dem Vorjahreswert.",
            ask: [{ label: "Was ist TTF?", ref: "t:ttf" }] },
          { tag: "position", text: "Wirtschaftsministerin Katherina Reiche (CDU) wies die bundeseigene Sefe an, zusätzlich 8 TWh Gas zu beschaffen und bis zum 15.12. einzuspeichern: „Aus der Perspektive der Krisenvorsorge ist dieser Schritt ein wichtiger zusätzlicher Beitrag, um die Resilienz der deutschen Gasversorgung zu erhöhen.”" },
          { tag: "position", text: "Die Bundesnetzagentur sieht die Lage dennoch als grundsätzlich stabil an: „Es ist für die Versorgungssicherheit auch nicht zwingend, dass die Füllstandsziele zum November erreicht werden.”" }
        ]},
        { h: "Welche weiteren energiepolitischen Entscheidungen stehen an?", items: [
          { tag: "fakt", text: "Reiche löste Anfang Oktober das Referat für Wind- und Solarindustrie im Wirtschaftsministerium auf, was Kritik von Verbänden der erneuerbaren Energien auslöste; sie verwies darauf, dass der Anteil erneuerbarer Energien am Gesamtenergieverbrauch trotz langjähriger Klimapolitik erst bei rund 20 % liege.",
            ask: [{ label: "Wie hängen Energiepreise und Inflation zusammen?", ref: "e:oil-inflation" }] },
          { tag: "fakt", text: "Das Kraft-Wärme-Kopplungsgesetz steht am 14.10. im Kabinett." }
        ]},
        { h: "Wie ist der Stand beim Ölpreis und bei OPEC+?", items: [
          { tag: "fakt", text: "Die OPEC+ beließ die Fördermengen für November am 04.10. unverändert gegenüber September – der zweite Monat in Folge ohne Anhebung.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] },
          { tag: "unbestaetigt", text: "Der Brent-Preis bewegte sich dennoch zwischen rund 102,6 und 104,7 Dollar je Fass; als Treiber nennen Berichte vor allem die Spannungen im Golf und nicht die Förderpolitik (Meldung 9)." }
        ]},
        { h: "Wie entwickelt sich der Anteil erneuerbarer Energien am Stromverbrauch?", items: [
          { tag: "fakt", text: "In den ersten drei Quartalen 2026 deckten erneuerbare Energien laut Berichten 60,7 % des deutschen Stromverbrauchs (+4 Prozentpunkte gegenüber dem Vorjahr); Photovoltaik wuchs um 13,9 % und hatte mit 24 % den größten Einzelanteil." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Gasspeicher trotz der zusätzlichen Sefe-Beschaffung unter dem gesetzlichen Zwischenziel liegen, während die Bundesnetzagentur die Versorgungssicherheit insgesamt als stabil einschätzt, zeigt unterschiedliche Risikoeinschätzungen innerhalb derselben Datenlage; der Ölpreis bleibt unterdessen stärker von geopolitischen Spannungen als von OPEC+-Entscheidungen geprägt." }
        ]}
      ],
      reaction: "Die angespannte Gasspeicherlage und der von geopolitischen Spannungen geprägte Ölpreis ergänzen die Lage im Golf (Meldung 9) um die Frage der deutschen Energieversorgung.",
      terms: ["ttf", "lng", "opec-plus"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation"],
      sources: [
        { title: "netz-trends.de: Gasspeicher 58 Prozent – Sefe soll 8 Terawattstunden bis 15. Dezember beschaffen", url: "https://www.netz-trends.de/gasspeicher-58-prozent-heizperiode-sefe-8-terawattstunden-15-dezember-2026-bundesnetzagentur-4-oktober-2026/" },
        { title: "ad-hoc-news.de: Gasspeicher – Reiche weist Sefe zu zusätzlicher Gasbeschaffung an", url: "https://www.ad-hoc-news.de/wirtschaft/gasspeicher-reiche-weist-sefe-zu-zusaetzlicher-gasbeschaffung-an/70203229" },
        { title: "Telepolis: Reiche löst Referat für Wind- und Solarindustrie auf", url: "https://www.telepolis.de/article/Reiche-loest-Referat-fuer-Wind-und-Solarindustrie-auf-11480470.html" },
        { title: "Handelsblatt: Öl – OPEC+ will Förderziele für November beibehalten", url: "https://www.handelsblatt.com/finanzen/maerkte/devisen-rohstoffe/oel-opec-plus-will-foerderziele-fuer-november-beibehalten/100259559.html" },
        { title: "Solarserver: Erneuerbare decken Stromverbrauch in 9 Monaten 2026 zu 61 Prozent", url: "https://www.solarserver.de/2026/10/01/erneuerbare-decken-stromverbrauch-in-9-monaten-2026-zu-61-prozent" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Freitag legten Dow Jones (+0,83 %), S&P 500 (+0,59 %) und Nasdaq (+0,64 %) zu; der DAX stieg um 1,19 % auf 25.102,34 Punkte und damit zurück über die Marke von 25.000 Punkten." },
    "why-markets-move": { tag: "unbestaetigt", story: 1, text: "Ein Bericht vom 09.10. nannte für OpenAI ein Jahresend-Ziel von mindestens 70 Mrd. Dollar Umsatz, nachdem Ende September noch rund 50 Mrd. Dollar genannt worden waren; das beruhigte Chip- und KI-Werte nach den Verlusten vom Donnerstag." },
    "yield-meaning": { tag: "unbestaetigt", story: 2, text: "Die US-10-Jahres-Rendite lag zuletzt bei rund 5,23 bis 5,24 % – kaum verändert und etwas unter dem Zwischenhoch von 5,31 % vom 05.10." },
    "yield-stocks": { tag: "einordnung", story: 1, text: "Dass Technologiewerte besonders stark auf neue Umsatzsignale reagieren, während die US-Rendite gleichzeitig nahe einem Mehrjahreshoch verharrt, passt zum klassischen Muster empfindlicher Reaktionen zinssensibler Aktien." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold notierte am Freitag je nach Quelle zwischen rund 4.192 und 4.195 Dollar je Feinunze – ein Plus von rund 1,3 bis 1,45 % gegenüber Donnerstag." },
    "eurusd-meaning": { tag: "unbestaetigt", story: 3, text: "Der EZB-Referenzkurs stieg am Freitag auf 1,1206 Dollar; bis Montagvormittag gab der Kurs laut einer Quelle leicht auf rund 1,1196 Dollar nach." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin pendelte zwischen rund 82.413 Dollar am Freitagmorgen und rund 82.950 Dollar am Montagvormittag, bei laut Berichten niedriger Liquidität." },
    "inflation-what": { tag: "fakt", story: 5, text: "Die Inflation in der Eurozone sprang im September laut Eurostat-Flashschätzung auf 3,8 % (von 3,2 % im August) – den höchsten Stand seit September 2023." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Das vorläufige Verbrauchervertrauen der University of Michigan fiel im Oktober auf 46,3 Punkte – ein 5-Monats-Tief." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Während mehrere Fed-Mitglieder an der grundsätzlichen Möglichkeit weiterer Zinserhöhungen festhalten, bindet die EZB ihre Entscheidungen weiterhin an die laufende Dateneinschätzung von Sitzung zu Sitzung." },
    "fed-hike": { tag: "unbestaetigt", story: 4, text: "Die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung bei der FOMC-Sitzung am 27./28.10. liegt laut mehreren Quellen nur noch bei rund 16 bis 22 %, nach den schwachen US-Arbeitsmarktdaten für September." },
    "ecb-hike": { tag: "fakt", story: 5, text: "Die nächste EZB-Zinsentscheidung fällt am 29.10.2026; der Einlagesatz liegt seit dem 10.09.2026 bei 2,50 %." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Die Brent-Preisangaben für Freitag/Samstag reichen je nach Quelle von rund 102,6 bis 104,7 Dollar; Öl bleibt damit ein Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "unbestaetigt", story: 2, text: "Der Risikoaufschlag französischer Staatsanleihen gegenüber Bundesanleihen liegt laut Berichten weiterhin bei rund 127 bis 140 Basispunkten." },
    "haushalt-basics": { tag: "unbestaetigt", story: 6, text: "Der Koalitionsausschuss von CDU/CSU und SPD verschob zentrale Entscheidungen zu Rente, Pflege und dem Haushalt 2027 am 07.10. auf das Frühjahr 2027." },
    "rente-basics": { tag: "fakt", story: 6, text: "Der Bundestag debattierte am 09.10. über drei Linken-Anträge zum Rentenalter und zur abschlagsfreien Rente nach 45 Versicherungsjahren; die Alterssicherungskommission hatte zuvor die Abschaffung dieser Regel empfohlen." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "Nach der Berliner Abgeordnetenhauswahl vom 20.09. einigten sich Linke, Grüne und SPD am 08.10. auf ein Acht-Punkte-Papier zum Umgang mit Antisemitismus; Haushalt und Vergesellschaftungsfrage bleiben offen." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "SPD-Fraktionschef Steffen Krach lehnt die von Linken und Grünen geforderte Vergesellschaftung großer privater Wohnungsbestände ab; die Grünen sind laut Berichten ebenfalls skeptisch." },
    "hormuz": { tag: "fakt", story: 9, text: "In der Woche bis zum 04.10. wurden in der Straße von Hormus laut Berichten elf Tanker angegriffen – die höchste Zahl seit Kriegsbeginn." },
    "why-oil-up-geo": { tag: "position", story: 9, text: "Präsident Trump erklärte am 08.10., die USA würden vor den US-Zwischenwahlen keine Angriffe auf den Iran starten; die Blockade iranischer Häfen bleibe aber „in voller Kraft”." },
    "defence-order": { tag: "unbestaetigt", story: 11, text: "Japan prüft weiterhin eine mögliche Weitergabe von Patriot-Abfangraketen an die Ukraine; eine Kabinettsentscheidung steht aus." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Rheinmetall und Renk werden von Analysten zuletzt gespalten bewertet (Berenberg/Bank of America senken, Deutsche Bank/RBC/Jefferies bestätigen), Hensoldt wurde dagegen von Jefferies hochgestuft." },
    "nato-target": { tag: "fakt", story: 11, text: "TKMS erhielt den Zuschlag für bis zu zwölf U-Boote des Typs 212CD für Kanada, mit einem Auftragswert von über 10 Mrd. Euro für die Boote allein." },
    "ma-steps": { tag: "unbestaetigt", story: 12, text: "Carlyles Vereinbarung zum Kauf internationaler Lukoil-Vermögenswerte lief am 08.10. aus, nachdem keine OFAC-Genehmigung erteilt wurde; ein Konsortium um Todd Boehly soll laut Berichten die Initiative übernehmen." },
    "take-private-why": { tag: "fakt", story: 12, text: "Ein Bundesrichter stoppte am 09.10. vorläufig Cable Ones rund 480 Mio. Dollar schwere Übernahme von Mega Broadband Investments, nachdem der Gläubiger CoBank Klage eingereicht hatte." },
    "deal-risks": { tag: "unbestaetigt", story: 13, text: "Die US-Notenbank prüft laut einem Semafor-Bericht vom 05.10. bei mehreren Banken, wie diese Sicherheiten für Private-Credit-Kredite bewerten." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Die Blue-Owl-Aktie fiel Anfang Oktober auf rund 9,08 Dollar; Rücknahmen in zwei großen Kreditfonds wurden auf 5 % gedeckelt." },
    "pc-rates": { tag: "unbestaetigt", story: 13, text: "Angaben zu aktuellen Private-Credit-Ausfallraten schwanken je nach Quelle zwischen rund 2,5 % und 6,3 %." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Ein Bloomberg-Bericht vom 08.10. beschreibt ein wachsendes Refinanzierungsrisiko bei Private-Credit-Deals aus den Jahren 2021/2022." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Die Insolvenz der australischen Bathla Group lässt weiterhin rund 40 Private-Credit-Fonds auf einem Engagement von rund 3,4 bis 3,6 Mrd. australischen Dollar sitzen." },
    "ai-capex": { tag: "position", story: 14, text: "Bridgewater-Gründer Ray Dalio warnte am 08.10., die KI-Welle sei eine „klassische Blase”; Panmure-Liberum-Stratege Joachim Klement erwartet ein Platzen 2027 oder 2028." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Die vier größten Hyperscaler dürften 2026 zusammen rund 725 Mrd. Dollar in KI-Infrastruktur investieren – deutlich mehr als 2025." },
    "circular-financing": { tag: "fakt", story: 14, text: "SpaceX sucht rund 40 Mrd. Dollar Fremdfinanzierung, um Nvidia-KI-Chips zu kaufen; die Transaktion soll laut Berichten von Apollo Global Management geführt werden." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 09.10. bei rund 59,8 % – deutlich unter dem gesetzlichen Zwischenziel; Ministerin Reiche wies die bundeseigene Sefe an, verstärkt einzuspeichern." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Die OPEC+ beließ die Fördermengen für November am 04.10. unverändert gegenüber September – der zweite Monat in Folge ohne Anhebung." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie schlossen Dow Jones, S&P 500 und Nasdaq am Freitag, 09.10.2026, die Handelswoche ab?",
      options: [
        "Alle drei Indizes schlossen im Minus",
        "Nur der Dow Jones schloss im Plus, S&P 500 und Nasdaq im Minus",
        "Alle drei Indizes schlossen im Plus (Dow +0,83 %, S&P 500 +0,59 %, Nasdaq +0,64 %)",
        "Die Börsen blieben wegen eines Feiertags geschlossen"
      ],
      answer: 2,
      explain: "Dow Jones, S&P 500 und Nasdaq schlossen am Freitag alle drei im Plus und beendeten damit die Handelswoche insgesamt mit einem Gewinn."
    },
    {
      topic: "Wirtschaft", type: "Zusammenhang", story: 4,
      q: "Angenommen, der US-Arbeitsmarktbericht für September hätte die erwarteten 84.000 neuen Stellen gezeigt statt der tatsächlich gemeldeten 29.000. Was wäre dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher geworden?",
      options: [
        "Eine höhere eingepreiste Wahrscheinlichkeit für eine weitere Fed-Zinserhöhung im Oktober",
        "Eine automatische Absage der FOMC-Sitzung am 27./28.10.",
        "Eine sofortige Zinssenkung der EZB",
        "Ein automatischer Anstieg der deutschen Gasspeicherfüllstände"
      ],
      answer: 0,
      explain: "Stärkere Arbeitsmarktdaten gelten laut Marktbeobachtern als Argument für eine robustere Konjunktur, was die eingepreiste Wahrscheinlichkeit einer weiteren Zinserhöhung tendenziell erhöht hätte; ein fester Automatismus für Sitzungstermine, EZB-Entscheidungen oder Gasspeicher besteht dadurch nicht."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Worauf einigte sich der Koalitionsausschuss von CDU/CSU und SPD am 07.10.2026 bei zentralen Themen wie Rente, Pflege und Haushalt 2027?",
      options: [
        "Auf ein vollständiges, bis Jahresende 2026 umzusetzendes Reformpaket",
        "Auf keine neuen inhaltlichen Beschlüsse; als neues Ziel wird laut Berichten das Frühjahr 2027 genannt",
        "Auf die sofortige Abschaffung der Rente mit 63",
        "Auf eine Volksabstimmung über die Rentenreform"
      ],
      answer: 1,
      explain: "Nach rund vierstündiger Sitzung gab es keine gemeinsame Pressekonferenz und keine neuen inhaltlichen Beschlüsse; Kanzler Merz nannte laut Berichten das Frühjahr 2027 als neues Ziel, statt wie ursprünglich geplant bis Jahresende 2026."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 9,
      q: "Wie viele Tankerangriffe wurden laut Berichten in der Straße von Hormus in der Woche bis zum 04.10.2026 gezählt?",
      options: [
        "Keine, die Angriffe hatten zu diesem Zeitpunkt bereits aufgehört",
        "Drei",
        "Elf – die höchste Zahl seit Beginn des Konflikts",
        "Über fünfzig"
      ],
      answer: 2,
      explain: "Laut Berichten wurden in der Woche bis zum 04.10.2026 elf Tanker in der Straße von Hormus angegriffen – die höchste Zahl seit Beginn des Konflikts zwischen den USA/Israel und dem Iran im Februar 2026."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Angenommen, die Rücknahmewünsche in Blue Owls Kreditfonds würden weiter steigen statt sich zu stabilisieren. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Eine automatische Erhöhung der Ausfallrate auf über 20 %",
        "Ein weiterer Druck auf gedeckelte Rücknahmen und auf den Kurs von Blue Owl, ohne dass ein fester Automatismus besteht",
        "Eine sofortige Auflösung aller betroffenen Fonds durch die SEC",
        "Ein automatischer Rückgang der US-Zinsen"
      ],
      answer: 1,
      explain: "Höhere Rücknahmewünsche erhöhen laut Berichten tendenziell den Druck auf gedeckelte Rücknahmen und auf das Vertrauen in die Bewertungen; ein fester Automatismus für Ausfallraten, SEC-Eingriffe oder Zinsentscheidungen besteht dadurch nicht."
    }
  ]
};
