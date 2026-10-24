// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-24",
  dateLabel: "Samstag, 24. Oktober 2026",
  updatedLabel: "Recherchestand 24.10.2026",
  marketNote: "Diese Ausgabe entsteht am Samstag, 24.10.2026. Die Börsen in Europa und den USA sind am Wochenende geschlossen, deshalb gilt für DAX, Euro Stoxx 50, Dow Jones, S&P 500, Nasdaq Composite, den Halbleiterindex SOX sowie für die Renditen von US- und Bundesanleihen weiterhin der Schlussstand von Freitag, 23.10.2026. Devisen-, Gold- und Bitcoin-Kurse werden mit dem letzten verfügbaren Stand vom Freitag ausgewiesen. Brent-Rohöl und WTI handeln dagegen auch am Wochenende nahezu durchgehend: Hier wird der aktuellste verfügbare Stand vom Samstagmorgen, 24.10., gezeigt. Einzelne Werte (insbesondere Gold, Bund-Rendite und der Halbleiterindex SOX) wurden in unterschiedlichen Quellen zu leicht unterschiedlichen Zeitpunkten gemessen; Abweichungen sind entsprechend gekennzeichnet (Meldungen 1, 3, 14).",

  top: [
    { text: "DAX (−0,75 % auf 25.181,65 Pkt.) und Euro Stoxx 50 (−0,3 % auf rund 6.068 Pkt.) schlossen die Handelswoche bis Freitag, 23.10., mit Verlusten (Wochenbilanz DAX rund −1,7 %, Euro Stoxx 50 rund −2,2 %); ein schwacher französischer Einkaufsmanagerindex, die anhaltende französische Haushaltslage und der steigende Ölpreis belasteten die Stimmung. Auch Dow Jones (−1,23 %) und S&P 500 (−0,52 %) gaben nach, während der Halbleiterindex SOX laut Berichten die längste Verlustserie seit Oktober 2008 verzeichnete.", ref: "s:1" },
    { text: "Brent-Rohöl stieg bis Samstagmorgen auf rund 116 bis 117 Dollar je Barrel – nach Berichten über eine erneute Eskalation am Golf, darunter einen gemeldeten Huthi-Angriff auf das saudische Verteidigungsministerium in Riad; laut UKMTO verzeichnet die Straße von Hormus im Oktober die höchste Zahl an Schiffsangriffen seit Kriegsbeginn Ende Februar 2026.", ref: "s:8" },
    { text: "Präsident Selenskyj bestätigte am 23.10., dass sich Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi treffen sollen, zunächst auf technischer Ebene. Er zeigte sich erneut offen dafür, die aktuelle Frontlinie als ersten Schritt zu einem Friedensabkommen einzufrieren, verbunden mit der Forderung nach belastbaren Sicherheitsgarantien.", ref: "s:7" },
    { text: "Der Börsenbetreiber LSEG kündigte am 22.10. den Kauf des Kreditmarkt-Datenanbieters Octus vom Finanzinvestor Permira für 3,5 Mrd. Dollar an. Laut Kreisen soll BASF sein Angebot für den Chemiekonzern Evonik zudem auf 24 Euro je Aktie (Gesamtwert über 11 Mrd. Euro) erhöht haben – von BASF und Evonik offiziell nicht bestätigt.", ref: "s:12" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.181,65", change: "−0,75 % (−190 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Wochenbilanz", text: "Der DAX schloss die Handelswoche bis Freitag rund 1,7 % im Minus und fiel dabei unter seine 21-Tage-Trendlinie." },
        { label: "Frankreich-PMI", text: "Der französische Einkaufsmanagerindex (PMI) fiel im Oktober auf 48,4 Punkte und damit unter die Wachstumsschwelle von 50 Punkten; der Eurozone-Composite-PMI fiel von 53,1 auf 51,9 Punkte." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Der schwache französische Einkaufsmanagerindex und anhaltende Sorgen um Frankreichs Haushalt belasteten die Stimmung.",
          "Der auf rund 116 bis 117 Dollar gestiegene Ölpreis nach Berichten über neue Angriffe am Golf verstärkte die Verunsicherung zusätzlich; mehr dazu in Meldung 8.",
          "Einzelwerte wie MTU Aero Engines (−4,8 %, nach schwachen Zahlen des Konkurrenten Safran) und Deutsche Telekom (−3,2 %, wegen neuer Konkurrenzsorgen) belasteten den Index zusätzlich."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Halbleiterindex SOX und zur längsten Verlustserie seit 2008 in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Frankreich-Sorgen lassen Dax weiter absacken", url: "https://www.ariva.de/news/aktien-frankfurt-schluss-frankreich-sorgen-lassen-dax-12180174" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.068,22", change: "−0,3 % (−19 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Wochenbilanz", text: "Der Euro Stoxx 50 verlor in der Handelswoche bis Freitag rund 2,2 %." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Steigende Ölpreise (Brent zeitweise über 116 Dollar) belasteten die Stimmung.",
          "Schwache Luxusgüter-Werte wie Kering (−16,6 %, nach einem Rückgang des Gucci-Umsatzes) und Volvo Cars (fast −25 %, nach schwachen Zahlen) drückten den Index; Eni legte dagegen rund 3,3 % zu, nach einer Anhebung der Aktionärsrenditen-Pläne."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB-Zinsentscheidung am 29.10. und die steigende französische Risikoprämie werden in Meldung 4 behandelt.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.3 percent lower as oil and luxury slide", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-3-percent-lower-as-oil-and-luxury-slide/70400590" }
    },
    "sp500": {
      label: "S&P 500", value: "7.623,68", change: "−0,52 % (−39,75 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 52.215,16 Punkte (−1,23 %, −652,82 Pkt.)." },
        { label: "Halbleiterindex SOX", text: "Der Philadelphia-Halbleiterindex SOX verzeichnete laut Berichten am Freitag den achten Verlusttag in Folge – die längste Verlustserie seit Oktober 2008; mehr dazu in Meldung 14." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Der auf über 116 Dollar gestiegene Ölpreis nährte Inflationssorgen vor der Fed-Sitzung in der kommenden Woche.",
          "Der Verkaufsdruck weitete sich über den KI-Handel hinaus aus; Cybersicherheitsaktien wie Palo Alto Networks, Cloudflare und SailPoint legten dagegen je mehr als 7 % zu."
        ]
      },
      important: [
        { area: "Fed", text: "Die Markterwartungen vor der FOMC-Sitzung am 27./28.10. werden in Meldung 2 behandelt.", ref: "s:2" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow sinks 600 points, S&P 500, Nasdaq drop", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-23-dow-sp-500-nasdaq-tesla-meta-093000521.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.955,34", change: "−0,21 % (−53,52 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Chip-Werte", text: "Der Halbleiterindex SOX fiel am Freitag laut Berichten um 3,83 % und markierte damit die längste Verlustserie seit 2008 – ein deutlicher Gegensatz zur vergleichsweise moderaten Nasdaq-Bewegung." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Technologiewerte stabilisierten sich laut Berichten nach dem KI-Ausverkauf vom Vortag etwas, blieben aber insgesamt volatil."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Meta und dem Halbleitersektor in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Spokesman-Review: Dow, S&P 500 fall, tech steadies to end rocky week", url: "https://www.spokesman.com/stories/2026/oct/23/dow-sp-500-fall-tech-steadies-to-end-rocky-week/" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1193 (EZB-Referenzkurs)", change: "leicht niedriger als 1,1234 am Mittwoch", dir: "down", asof: "EZB-Referenzkurs Fr 23.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Marktkommentar", text: "Ein Bericht beschreibt den Eurokurs am Freitag als „kaum bewegt”." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung von 1,1234 auf 1,1193 Dollar wurde in den verfügbaren Quellen keine ausdrückliche Begründung genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Sitzung am 29.10. und zur Schnabel-Nachfolge in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Grafik USD)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,00 %", change: "leicht niedriger als 5,07 bis 5,13 % in der Vorwoche", dir: "down", asof: "Stand Fr 23.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,00 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,00 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 % (seit der Erhöhung am 16.9.2026); die Rendite liegt damit gut einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Laut CNBC fiel die Rendite in dieser Woche zurück auf rund 5,00 %, da Anleger angesichts der Sorgen um KI-Investitionen Schutz in Anleihen suchten.",
          "Die FOMC-Blackout-Periode läuft seit 17.10. bis zum 29.10.; die Zinsentscheidung fällt am 28.10."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Blackout-Periode, zu Fed-Chef Kevin Warsh und den Marktwetten vor der Sitzung am 27./28.10. in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "CNBC: 10-year Treasury yield drops back to 5% this week as investors seek cover from AI worries", url: "https://www.cnbc.com/2026/10/23/bonds-yields-us-treasurys.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,34 % (eine Quelle nennt für den Vormittag 3,46 %)", change: "leicht niedriger als 3,41 bis 3,42 % am Mittwoch", dir: "down", asof: "Stand Fr 23.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Bund-Future", text: "Der Bund-Future fiel laut einer Quelle um 0,16 % auf 122,13 Punkte – ein fallender Future-Preis entspricht üblicherweise einer leicht steigenden Rendite; die verfügbaren Quellen zur genauen Reihenfolge der Bewegung im Tagesverlauf widersprechen sich leicht." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Im Fokus standen die schwachen Einkaufsmanagerindizes (PMI) aus der Eurozone und insbesondere Frankreich sowie die anhaltende französische Haushaltslage."
        ]
      },
      important: [
        { area: "Frankreich", text: "Die französische 10-Jahres-Rendite stieg laut Berichten erstmals seit 2002 über 5 %; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "onvista: Deutsche Anleihen geben etwas nach", url: "https://www.onvista.de/news/2026/10-23-deutsche-anleihen-geben-etwas-nach-0-10-26567797" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.000–4.027 $", change: "−1,4 bis −2,0 % ggü. Donnerstag", dir: "down", asof: "Stand Fr 23.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.000 bis 4.030 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Rekordhoch Dienstag", text: "Gold liegt damit weiterhin deutlich unter seinem Rekordhoch von 4.381,21 Dollar vom Dienstag, 20.10." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Gewinnmitnahmen nach dem Rekordhoch; ein Bericht beschreibt den Goldpreis insgesamt weiterhin als „unter Druck”."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung am 27./28.10. in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "goldreporter.de: Goldpreis bleibt unter Druck", url: "https://www.goldreporter.de/goldpreis-heute-23-10-2026/marktbericht-gold/262572/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 116,7–117,4 $ (Spanne, Quellen weichen ab)", change: "+rund 5 bis 6 % ggü. Donnerstag", dir: "up", asof: "Stand Sa 24.10.26 früh", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 117 Dollar je Fass (159 Liter) sind umgerechnet deutlich mehr als die rund 110 Dollar vom Donnerstag.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI notierte am Samstagmorgen bei rund 103,3 Dollar je Barrel." },
        { label: "Jahresbilanz", text: "Brent ist seit Jahresbeginn 2026 laut einer Quelle um über 85 % gestiegen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Eine erneute Eskalation am Golf, darunter einen gemeldeten Huthi-Angriff auf das saudische Verteidigungsministerium in Riad; mehr dazu in Meldung 8.",
          "Ein Rückgang der US-Rohölbestände in der Woche bis 16.10. um 3,1 Mio. Barrel auf 412,5 Mio. Barrel."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf und in der Straße von Hormus in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "oilprice.com: Brent Hits $114+ as Houthi Attacks Threaten Saudi Energy Infrastructure", url: "https://oilprice.com/Latest-Energy-News/World-News/Brent-Hits-114-as-Houthi-Attacks-Threaten-Saudi-Energy-Infrastructure.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.330–81.675 $ (Spanne, Quellen weichen ab)", change: "−0,23 % ggü. Vortag (CoinDesk, 24h)", dir: "down", asof: "Stand Fr 23.10.26", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin deutlich unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025 – laut einer Quelle rund 26 % unter dem Vorjahreswert." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung wurde in den verfügbaren Quellen kein spezifischer Einzelgrund genannt; CoinDesk beschreibt die Volatilität von Bitcoin zuletzt als vergleichsweise beruhigt."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "CoinDesk: Bitcoin (BTC) Price", url: "https://www.coindesk.com/price/bitcoin" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitagsschluss-woche-10-24", cats: ["markets"], when: "Schluss Fr 23.10.2026 · Wochenbilanz bis 23.10.2026",
      headline: "DAX und Euro Stoxx 50 schließen die Woche mit Verlusten, Wall Street gibt am Freitag nach, der Halbleiterindex SOX verzeichnet laut Berichten die längste Verlustserie seit 2008",
      sec30: "Der DAX schloss am Freitag, 23.10., bei 25.181,65 Punkten (−0,75 %, Wochenbilanz rund −1,7 %), der Euro Stoxx 50 bei rund 6.068 Punkten (−0,3 %, Wochenbilanz rund −2,2 %). Als Hintergrund nennen Berichte einen schwachen französischen Einkaufsmanagerindex (48,4 Punkte), anhaltende Sorgen um Frankreichs Haushalt und den gestiegenen Ölpreis. Auch die US-Indizes gaben nach: Dow Jones −1,23 % auf 52.215,16 Punkte, S&P 500 −0,52 % auf 7.623,68 Punkte, Nasdaq Composite −0,21 % auf 25.955,34 Punkte. Der Halbleiterindex SOX fiel laut Berichten am Freitag um 3,83 % und verzeichnete damit den achten Verlusttag in Folge – die längste Verlustserie seit Oktober 2008.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX fiel am Freitag um 0,75 % (−190 Punkte) auf 25.181,65 Punkte und schloss die Handelswoche rund 1,7 % im Minus; der Euro Stoxx 50 fiel um 0,3 % (−19 Punkte) auf rund 6.068 Punkte, Wochenbilanz rund −2,2 %.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte einen auf 48,4 Punkte gefallenen französischen Einkaufsmanagerindex (unter der Wachstumsschwelle von 50), anhaltende Sorgen um Frankreichs Haushalt sowie schwache Luxusgüter-Werte wie Kering (−16,6 %) und Volvo Cars (fast −25 %)." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes, und was belastete zusätzlich?", items: [
          { tag: "fakt", text: "Der Dow Jones fiel um 1,23 % (−652,82 Punkte) auf 52.215,16 Punkte, der S&P 500 um 0,52 % (−39,75 Punkte) auf 7.623,68 Punkte, der Nasdaq Composite um 0,21 % (−53,52 Punkte) auf 25.955,34 Punkte.",
            ask: [{ label: "Mehr zur Fed-Sitzung am 27./28.10.", ref: "s:2" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte den auf über 116 Dollar gestiegenen Ölpreis, der Inflationssorgen vor der Fed-Sitzung in der kommenden Woche nährte; der Verkaufsdruck weitete sich dabei über den KI-Handel hinaus aus. Cybersicherheitsaktien wie Palo Alto Networks, Cloudflare und SailPoint legten dagegen je mehr als 7 % zu, nach einem laut Berichten starken Ausblick für Sicherheitsbudgets." }
        ]},
        { h: "Wie entwickelte sich der Halbleiterindex SOX?", items: [
          { tag: "unbestaetigt", text: "Der Halbleiterindex SOX fiel laut mehreren Berichten am Freitag um 3,83 % und verzeichnete damit den achten Verlusttag in Folge – nach diesen Angaben die längste Verlustserie seit Oktober 2008; seit dem Hoch vom 6.10. hat der Index rund 16 % verloren, branchenweit soll dadurch bis zu 1 Billion Dollar Marktkapitalisierung bei Chip-Werten ausgelöscht worden sein. Zum exakten Schlussstand nennen einzelne Quellen abweichende Punktewerte.",
            ask: [{ label: "Mehr zu CoreWeave, Meta und Samsung/SK Hynix", ref: "s:14" }] },
          { tag: "einordnung", text: "UBS deutete den Ausverkauf laut Berichten eher als „Neukalibrierung der Erwartungen” denn als fundamentalen Bruch in der KI-Investitionsstory." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass sowohl europäische als auch US-Indizes am Freitag nachgaben, während sich der Druck auf Chip-Werte mit der längsten SOX-Verlustserie seit 2008 weiter verstärkte, zeigt, wie eng Konjunktursorgen (Frankreich-PMI), der steigende Ölpreis und die KI-Bewertungsdebatte derzeit zusammenhängen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, Gold/Bitcoin/Bund-Rendite in Meldung 3, die Lage am Golf in Meldung 8, CoreWeave/Meta/SOX im Detail in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Frankreich-Sorgen lassen Dax weiter absacken", url: "https://www.ariva.de/news/aktien-frankfurt-schluss-frankreich-sorgen-lassen-dax-12180174" },
        { title: "ad-hoc-news.de: DAX schließt nach Frankreichs PMI 190 Punkte tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-nach-frankreichs-pmi-190-punkte-tiefer/70400630" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.3 percent lower as oil and luxury slide", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-3-percent-lower-as-oil-and-luxury-slide/70400590" },
        { title: "Yahoo Finance: Stock market today – Dow sinks 600 points, S&P 500, Nasdaq drop", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-23-dow-sp-500-nasdaq-tesla-meta-093000521.html" },
        { title: "Spokesman-Review: Dow, S&P 500 fall, tech steadies to end rocky week", url: "https://www.spokesman.com/stories/2026/oct/23/dow-sp-500-fall-tech-steadies-to-end-rocky-week/" },
        { title: "Investing.com: Chip index SOX posts longest losing streak since 2008 as AI worries deepen", url: "https://www.investing.com/news/stock-market-news/chip-index-sox-posts-longest-losing-streak-since-2008-as-ai-worries-deepen-4955401" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED/WARSH/US-DATEN */
    {
      id: "fed-warsh-blackout-us-daten-10-24", cats: ["markets", "economy"], when: "FOMC-Blackout 17.–29.10. · Sitzung 27./28.10.2026 · US-Konjunkturdaten Sept./Okt. 2026",
      headline: "Fed-Chef Kevin Warsh hält sich an die Blackout-Periode vor der Oktober-Sitzung, Marktplattformen rechnen überwiegend mit einer Zinspause, US-Erzeugerpreise und Inflation liegen weiter über den Erwartungen",
      sec30: "Die FOMC-Blackout-Periode läuft seit Samstag, 17.10., bis Donnerstag, 29.10.; die Zinsentscheidung fällt am Mittwoch, 28.10., um 14 Uhr Eastern Time. Seit Mai 2026 ist Kevin Warsh Fed-Chef (vom Senat am 13.5. mit 54:45 Stimmen bestätigt, Amtseinführung 22.5.) und hatte im September mit einer Zinserhöhung auf 3,75 bis 4,00 % überrascht. Marktplattformen wie Kalshi, Polymarket und CME-Futures preisen für Oktober mit rund 86 bis 93 % überwiegend eine Zinspause ein. Die US-Erzeugerpreise waren im September um 1,3 % gegenüber dem Vormonat gestiegen (größter Anstieg seit März 2022), die Verbraucherpreise um 0,6 % (+3,7 % zum Vorjahr); die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis 17.10. auf 194.000 – der niedrigste Vierwochenschnitt seit 1969.",
      blocks: [
        { h: "Wer ist Fed-Chef, und wie ist der Stand vor der Sitzung am 27./28.10.?", items: [
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, läuft vom 17.10. bis zum 29.10.; die Zinsentscheidung wird am Mittwoch, 28.10., um 14 Uhr Eastern Time bekanntgegeben.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Seit der Bestätigung durch den Senat am 13.5.2026 (54:45 Stimmen) und der Amtseinführung am 22.5. ist Kevin Warsh Fed-Chef als Nachfolger von Jerome Powell. Warsh hatte die Fed im September mit einer Zinserhöhung um 25 Basispunkte auf eine Spanne von 3,75 bis 4,00 % überrascht." }
        ]},
        { h: "Wie schätzen Marktplattformen die Oktober-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Nach Angaben von Kalshi liegt die Wahrscheinlichkeit für eine Zinspause bei rund 88,5 bis 93 %, bei Polymarket bei rund 87,5 bis 93 % und bei CME-Futures bei rund 86 %; auf eine erneute Erhöhung um 25 Basispunkte entfallen je Plattform rund 7 bis 12 %. Laut CNBC gibt Warsh bewusst keine Forward Guidance, was eine gewisse Unsicherheit aufrechthält, auch wenn der Markt klar auf eine Pause setzt.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Welche aktuellen US-Konjunkturdaten spielen eine Rolle?", items: [
          { tag: "fakt", text: "Die US-Verbraucherpreise stiegen im September um 0,6 % gegenüber dem Vormonat und um 3,7 % gegenüber dem Vorjahr (Kernrate +0,3 % bzw. +2,6 %); die Erzeugerpreise legten um 1,3 % zum Vormonat zu (größter Anstieg seit März 2022) und um 6,3 % zum Vorjahr (größter 12-Monats-Anstieg seit Dezember 2022), über 80 % davon durch Energie.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] },
          { tag: "fakt", text: "Die US-Einzelhandelsumsätze stiegen im September um 0,8 % gegenüber dem Vormonat auf 745,0 Mrd. Dollar (+6,3 % zum Vorjahr); die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis 17.10. auf 194.000 (−6.000), der Vierwochenschnitt von 197.750 war laut Berichten der niedrigste seit 1969." },
          { tag: "unbestaetigt", text: "Der verzögerte September-Arbeitsmarktbericht (wegen eines Regierungsshutdowns erst am 2.10. veröffentlicht) zeigte mit nur +29.000 neuen Stellen eine deutliche Verlangsamung gegenüber Vormonaten; die Arbeitslosenquote lag bei 4,2 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung trotz der laufenden Blackout-Periode klar auf eine Zinspause zeigt, während Erzeuger- und Verbraucherpreise weiterhin über den Erwartungen liegen und der Arbeitsmarkt gemischte Signale sendet, zeigt, wie genau Anleger weiterhin jedes verfügbare Datum vor der Sitzung am 27./28.10. verfolgen." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1, die EZB-Seite und globale Zentralbanken in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite", "erzeugerpreise"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "CNBC: Everyone expects the Fed to hold rates in October. Kevin Warsh could surprise us all", url: "https://www.cnbc.com/2026/10/16/kevin-warsh-fed-october-rate-hike-interest-rates-markets.html" },
        { title: "BLS: Consumer Price Index – September 2026", url: "https://www.bls.gov/news.release/archives/cpi_10142026.htm" },
        { title: "BLS: Producer Price Index News Release", url: "https://www.bls.gov/news.release/ppi.nr0.htm" },
        { title: "Bloomberg: US Initial Jobless Claims Fall to Three-Month Low", url: "https://bloomberg.com/news/articles/2026-10-22/us-initial-jobless-claims-fall-to-three-month-low" },
        { title: "PredictionMarketsPicks: Fed Rate Tracker, October 2026", url: "https://predictionmarketspicks.com/tools/fed-rate-tracker/october-2026/2026-10-21" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/BUND */
    {
      id: "gold-bitcoin-eurusd-bund-10-24", cats: ["markets"], when: "Stand Fr 23.10.2026",
      headline: "Gold bleibt nach seinem Rekordhoch unter Druck, Bitcoin notiert nahezu unverändert knapp über 81.000 Dollar, die Rendite zehnjähriger Bundesanleihen gibt leicht nach",
      sec30: "Gold notierte am Freitag je nach Quelle und Zeitpunkt zwischen rund 4.000 und 4.027 Dollar je Feinunze und damit weiterhin deutlich unter seinem Rekordhoch vom Dienstag (4.381,21 Dollar). Bitcoin bewegte sich kaum und lag je nach Quelle zwischen rund 81.330 und 81.675 Dollar. Der EZB-Referenzkurs für den Euro lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch. Die Rendite zehnjähriger Bundesanleihen lag laut einer Quelle bei rund 3,34 % – Quellen zur genauen Bewegung im Tagesverlauf widersprechen sich leicht.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold notierte am Freitag je nach Quelle und Messzeitpunkt zwischen rund 4.000 und 4.027 Dollar je Feinunze – ein Rückgang von rund 1,4 bis 2,0 % gegenüber Donnerstag und weiterhin deutlich unter dem Rekordhoch von 4.381,21 Dollar vom Dienstag, 20.10.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte anhaltende Gewinnmitnahmen nach dem Rekordhoch; eine Quelle beschreibt den Goldpreis insgesamt weiterhin als „unter Druck”." }
        ]},
        { h: "Wie entwickelt sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Quellen nennen für Freitag unterschiedliche Werte zwischen rund 81.330 und 81.675 Dollar (CoinDesk, −0,23 % binnen 24 Stunden) – nahezu unverändert gegenüber der Spanne von Donnerstag und weiterhin deutlich unter dem Allzeithoch von 126.198,07 Dollar vom 6.10.2025.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie haben sich der Euro und die Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch; für die Bewegung wurde in den verfügbaren Quellen keine ausdrückliche Begründung genannt.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "unbestaetigt", text: "Die Rendite zehnjähriger Bundesanleihen lag laut einer Quelle am Freitag bei rund 3,34 % (nach rund 3,41 bis 3,42 % am Mittwoch), während eine andere Quelle für den Vormittag einen höheren Wert von rund 3,46 % nennt; der Bund-Future fiel um 0,16 % auf 122,13 Punkte. Im Fokus standen schwache Einkaufsmanagerindizes aus der Eurozone und insbesondere Frankreich.",
            ask: [{ label: "Mehr zur französischen Haushaltslage und zur EZB", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold nach seinem Rekordhoch weiter unter Druck bleibt und Bitcoin kaum Bewegung zeigt, während die Bund-Rendite leicht nachgibt, passt zu einer Woche, in der Anleger zwischen Sorgen um KI-Bewertungen, der französischen Haushaltslage und der näher rückenden Fed-Sitzung hin- und herschwankten. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Fed-Zinsentwicklung wird in Meldung 2 behandelt, die EZB-Seite in Meldung 4, der Ölpreis in Meldung 15.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "goldreporter.de: Goldpreis bleibt unter Druck", url: "https://www.goldreporter.de/goldpreis-heute-23-10-2026/marktbericht-gold/262572/" },
        { title: "goldesel.de: Gold Aktie – Spotpreis steigt leicht auf 4.009,77 US-Dollar", url: "https://goldesel.de/aktien/news/gold-aktie-spotpreis-steigt-leicht-auf-400977-us-dollar" },
        { title: "CoinDesk: Bitcoin (BTC) price volatility", url: "https://www.coindesk.com/daybook-us/2026/10/23/bitcoin-s-volatility-is-well-above-euro-dollar-gyrations-though-it-has-calmed-to-rival-nvidia-s" },
        { title: "Ariva.de: Devisen – Eurokurs kaum bewegt", url: "https://www.ariva.de/news/devisen-eurokurs-kaum-bewegt-12179314" },
        { title: "onvista: Deutsche Anleihen geben etwas nach", url: "https://www.onvista.de/news/2026/10-23-deutsche-anleihen-geben-etwas-nach-0-10-26567797" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/SCHNABEL/GLOBALE ZENTRALBANKEN/IWF */
    {
      id: "ezb-schnabel-globale-notenbanken-iwf-10-24", cats: ["economy", "world"], when: "EZB-Sitzung 29.10. · Schnabel-Frist 28.10. · BoJ-Sitzung 29./30.10. · PBoC 20.10. · Eurozone-/DE-Inflation September 2026",
      headline: "EZB-Zinsentscheidung rückt näher, Frankreichs Anleiherenditen steigen auf den höchsten Stand seit 2002, Inflation in Eurozone und Deutschland zieht weiter an",
      sec30: "Die EZB hält ihren Einlagensatz vor der Sitzung am 29.10. bei 2,50 %; der Markt preist laut Berichten rund 91 % Wahrscheinlichkeit für eine erneute Pause ein. Frankreichs 10-Jahres-Rendite stieg erstmals seit 2002 über 5 %, der Risikoaufschlag gegenüber deutschen Anleihen auf rund 170 Basispunkte – laut EZB-Präsidentin Lagarde liege die Lösung „in Frankreich selbst”. Für die Schnabel-Nachfolge im EZB-Direktorium läuft die Nominierungsfrist am 28.10. ab, ein Name liegt noch nicht vor. Die Inflation in der Eurozone stieg im September laut Eurostat auf 3,8 % (höchster Stand seit September 2023), in Deutschland laut Destatis auf 3,3 %. Die Bank of Japan tagt am 29./30.10. (erwartet: Pause bei 1,25 %), die chinesische PBoC beließ ihre Leitzinsen am 20.10. den 17. Monat in Folge unverändert. Der IWF erwartet im Weltwirtschaftsausblick vom 13.10. für 2026 ein globales Wachstum von 3,1 % bei 4,7 % Inflation.",
      blocks: [
        { h: "Wie ist der Stand bei der EZB-Zinsentscheidung am 29.10.?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Die Zinsentscheidung wird am 29.10. um 14:15 MEZ bekanntgegeben, die Pressekonferenz folgt um 14:45 MEZ; der Oktober-Termin ist eine Sitzung ohne neue EZB-Stabsprojektionen.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Der Marktkonsens preist laut Berichten rund 91 % Wahrscheinlichkeit für eine erneute Zinspause am 29.10. ein." }
        ]},
        { h: "Welche Rolle spielt die französische Haushaltslage für die EZB?", items: [
          { tag: "fakt", text: "Frankreichs 10-Jahres-Rendite stieg laut Berichten erstmals seit 2002 über 5 %, der Risikoaufschlag gegenüber deutschen Bundesanleihen auf rund 170 Basispunkte, die Kreditausfallversicherungen (CDS) auf über 100 Basispunkte – nach diesen Angaben der höchste Stand seit der Eurokrise 2012. Laut ING entspricht das für Frankreich einer Straffung von rund 50 Basispunkten." },
          { tag: "position", text: "EZB-Präsidentin Christine Lagarde erklärte laut Berichten sinngemäß, die Lösung für die französische Haushaltslage liege „in Frankreich selbst” – gemeint ist die Fiskalpolitik, nicht die EZB." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die Nominierungsfrist für die Euro-Staaten läuft am 28.10. ab; ein konkreter Name für die Nachfolge von Isabel Schnabel im EZB-Direktorium liegt bislang nicht vor. Schnabel wechselt zum 3.1.2027 zum IWF." }
        ]},
        { h: "Wie entwickelt sich die Inflation in Eurozone und Deutschland?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone stieg im September laut Eurostat-Schnellschätzung auf 3,8 % (von 3,2 % im August) – den höchsten Stand seit September 2023; die Energiepreise legten um 18,8 % zum Vorjahr zu.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] },
          { tag: "fakt", text: "Die deutsche Inflation lag im September laut Destatis (final bestätigt am 13.10.) bei 3,3 % (von 2,9 % im August) – ein neuer Jahreshöchststand; Kraftstoffe verteuerten sich um 37,1 % zum Vorjahr." }
        ]},
        { h: "Wie ist der Stand bei anderen großen Notenbanken?", items: [
          { tag: "fakt", text: "Die Bank of Japan tagt am 29./30.10.; erwartet wird überwiegend eine Pause bei 1,25 %, Prognosemärkte sehen dafür rund 96,5 % Wahrscheinlichkeit. Die chinesische Notenbank PBoC beließ ihre Leitzinsen (1 Jahr 3,00 %, 5 Jahre 3,50 %) am 20.10. den 17. Monat in Folge unverändert; Gouverneur Pan Gongsheng signalisierte zugleich einen Übergang zu einem neuen Rahmen mit diversifizierteren Leitzinsen." },
          { tag: "fakt", text: "Die britische Inflation war bereits am 21.10. laut ONS auf 3,5 % gestiegen; die nächste Bank-of-England-Sitzung ist für den 5.11. angesetzt." }
        ]},
        { h: "Was sagt der IWF zur globalen Konjunktur?", items: [
          { tag: "fakt", text: "Der IWF erwartet laut seinem am 13.10. veröffentlichten Weltwirtschaftsausblick „Resilience Under Strain, Urgent Choices” für 2026 ein globales Wachstum von 3,1 % (angehoben von 3,0 % im Juli) und 2027 von 3,4 %, bei einer globalen Inflation von 4,7 % (2027: 4,1 %); das Wachstum in der Eurozone wurde auf 1,1 % angehoben, für Deutschland ebenfalls auf 1,1 %. Als Risiken nennt der Bericht unter anderem eine mögliche Neubewertung der KI-Erwartungen und anhaltende geopolitische Konflikte; nur 32 Länder tragen demnach 95 % des globalen Wachstums." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EZB vor ihrer Sitzung am 29.10. gleichzeitig mit der französischen Haushaltslage, einer noch unbesetzten Personalfrage im eigenen Direktorium und anziehender Inflation in Eurozone und Deutschland umgehen muss, während auch BoJ und PBoC in dieser Woche vor beziehungsweise bei Zinsentscheidungen stehen, zeigt, wie viele geldpolitische Fragen Ende Oktober zusammenlaufen." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 5.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "Euronews: France's bond drama takes centre stage ahead of ECB rate decision", url: "https://www.euronews.com/2026/10/23/frances-bond-drama-takes-centre-stage-ahead-of-ecb-rate-decision" },
        { title: "Handelsblatt: EZB – Euro-Staaten müssen bis Monatsende Schnabel-Nachfolge nominieren", url: "https://www.handelsblatt.com/finanzen/ezb-euro-staaten-muessen-bis-monatsende-schnabel-nachfolge-nominieren/100260974.html" },
        { title: "Eurostat: Flash estimate – October 2026", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-02102026-ap" },
        { title: "Destatis: Pressemitteilung – Verbraucherpreise September 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_364_611.html" },
        { title: "IMF: World Economic Outlook, October 2026", url: "https://www.imf.org/en/publications/weo/issues/2026/10/13/world-economic-outlook-october-2026" },
        { title: "FXStreet: Confirmed – PBoC leaves loan prime rates unchanged in October", url: "https://www.fxstreet.com/news/confirmed-pboc-leaves-loan-prime-rates-unchanged-in-october-202610200102" }
      ]
    },

    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-klingbeil-rechnungshof-10-24", cats: ["germany", "economy"], when: "Rechnungshof-Kritik 18.10. · Haushaltsausschuss-Beratungen bis 11.11. · Bereinigungssitzung 12.11. · Schlussabstimmung 27.11.2026",
      headline: "Bundesrechnungshof verschärft Kritik am Haushalt 2027, Zeitplan sieht Bereinigungssitzung am 12. November und Schlussabstimmung am 27. November vor",
      sec30: "Der Regierungsentwurf für den Haushalt 2027 (Gesamtausgaben 555,4 Mrd. Euro, Nettokreditaufnahme 118,7 Mrd. Euro) wurde am 8.9. von Finanzminister Klingbeil im Bundestag eingebracht. Der Bundesrechnungshof bezifferte am 18.10. in seinen Einzelplananalysen die Deckungslücke erneut auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben) und warnte vor einem bis 2030 auf 31,2 % steigenden Wert sowie einem ungedeckten Konsolidierungsbedarf von rund 108 Mrd. Euro für 2028 bis 2030. Klingbeil verteidigt seinen Ausgabenkurs mit dem Argument, Verteidigung lasse sich nicht mit einer „schwarzen Null” finanzieren. Die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11. angesetzt, die zweite Lesung für den 24. bis 27.11. und die abschließende Bundestagsabstimmung für Freitag, den 27.11.2026.",
      blocks: [
        { h: "Was sieht der Haushaltsentwurf 2027 vor?", items: [
          { tag: "fakt", text: "Der Regierungsentwurf (beschlossen am 6.7., eingebracht am 8.9. von Finanzminister Klingbeil) sieht Gesamtausgaben von 555,4 Mrd. Euro vor (30,9 Mrd. Euro mehr als 2026), bei einer Nettokreditaufnahme von 118,7 Mrd. Euro; inklusive Sondervermögen liegt die Gesamtneuverschuldung bei rund 200 Mrd. Euro. Die Verteidigungsausgaben im Kernhaushalt sollen auf rund 109,7 Mrd. Euro steigen (ein Drittel mehr als 2026), mit Sondervermögen Bundeswehr auf knapp 140 Mrd. Euro." }
        ]},
        { h: "Was kritisiert der Bundesrechnungshof?", items: [
          { tag: "fakt", text: "Der Bundesrechnungshof bezifferte am 18.10. in seinen Einzelplananalysen die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben gegenüber erwarteten Einnahmen von 394,7 Mrd. Euro) – ein Anstieg um 2,7 Prozentpunkte gegenüber der vorherigen Einschätzung. Für 2030 prognostiziert der Rechnungshof eine auf 31,2 % steigende Deckungslücke und einen ungedeckten Konsolidierungsbedarf von rund 108 Mrd. Euro für die Jahre 2028 bis 2030.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] },
          { tag: "fakt", text: "Der Rechnungshof kritisierte zusätzlich, dem Innenministerium fehle wegen geschätzter Personalausgaben die „Etatreife”." }
        ]},
        { h: "Wie reagierte die Regierung auf die Kritik?", items: [
          { tag: "position", text: "Finanzminister Klingbeil verteidigt seinen Kurs mit dem Argument, man könne sich „mit der schwarzen Null” nicht gegen Sicherheitsrisiken verteidigen; nach drei Dekaden vernachlässigter Bundeswehr-Investitionen müsse in kurzer Zeit aufgeholt werden, eine spätere Konsolidierung solle „Freiheit für morgen” sichern." }
        ]},
        { h: "Welche nächsten Schritte beim Haushalt stehen an?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss (42 Mitglieder, Leitung Lisa Paus) berät bis zum 11.11. weiter; die Bereinigungssitzung ist für den 12.11.2026 angesetzt, die zweite Lesung für den 24. bis 27.11. und die dritte Lesung mit der namentlichen Schlussabstimmung für Freitag, den 27.11.2026.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Bundesrechnungshof seine Kritik am Haushalt 2027 gegenüber der vorherigen Einschätzung sogar verschärft hat, während die Regierung an ihrem Ausgabenkurs mit sicherheitspolitischer Begründung festhält, zeigt, wie weit beide Seiten in der Bewertung der Haushaltslage auseinanderliegen." }
        ]}
      ],
      reaction: "Die aktuellen Umfragen und die Berliner Koalitionsbildung werden in Meldung 6 behandelt, die EZB-Seite in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "t-online: Haushalt 2027 – Rechnungshof wirft Klingbeil „Buchungstricks” vor", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101420390/haushalt-2027-rechnungshof-wirft-klingbeil-buchungsstricks-vor.html" },
        { title: "ad-hoc-news.de: Bundeshaushalt 2027 – Rechnungshof beziffert Deckungslücke auf 160,7 Milliarden", url: "https://www.ad-hoc-news.de/wirtschaft/bundeshaushalt-2027-rechnungshof-beziffert-deckungsluecke-auf-160-7-milliarden/70351796" },
        { title: "Bundesrechnungshof: Einzelplananalysen 2027", url: "https://bundesrechnungshof.de/veroeffentlichungen/einzelplananalysen-2027" },
        { title: "ZDFheute: Haushalt 2027 – Klingbeil verteidigt neue Schulden für Aufrüstung", url: "https://www.zdfheute.de/politik/deutschland/klingbeil-haushalt-neuverschuldung-100.html" }
      ]
    },

    /* 6 DEUTSCHLAND: UMFRAGEN/KOALITION/CSU-PARTEITAG/BAS-NACHFOLGE */
    {
      id: "umfragen-koalition-csu-parteitag-bas-nachfolge-10-24", cats: ["germany"], when: "ARD-DeutschlandTrend Oktober 2026 · Linke-Parteitag verschoben auf 31.10. · CSU-Parteitag 23./24.10. · Bas-Rücktritt Mitte Oktober 2026",
      headline: "ARD-DeutschlandTrend zeigt historischen Tiefstand bei der Kanzlerzufriedenheit, Berliner Koalitionsbildung verzögert sich, CSU-Parteitag endet mit Gastrede von Bundeskanzler Merz",
      sec30: "Der aktuelle ARD-DeutschlandTrend (Infratest dimap, n=1.303) sieht die AfD unverändert bei 27 %, CDU/CSU bei 20 % (−1), SPD bei 13 %; nur 10 % der Befragten zeigten sich zufrieden mit der Arbeit von Bundeskanzler Merz – laut Infratest dimap ein historischer Tiefstand seit Beginn der Erhebung 1997. Die Berliner Koalitionsbildung aus SPD, Grünen und Linke verzögert sich: Der ursprünglich für Freitag geplante Parteitag der Linken wurde auf den 31.10. verschoben. Beim CSU-Parteitag am 23./24.10. in München warb Parteichef Markus Söder für Landtagspräsidentin Ilse Aigner als Bundespräsidentschaftskandidatin; Bundeskanzler Merz hielt am 24.10. eine Gastrede zum Abschluss. Zudem war Bärbel Bas Mitte Oktober als Arbeitsministerin und SPD-Chefin zurückgetreten, Nachfolger ist seit dem 14.10. Alexander Schweitzer.",
      blocks: [
        { h: "Was zeigt der aktuelle ARD-DeutschlandTrend?", items: [
          { tag: "fakt", text: "Die Sonntagsfrage (Infratest dimap, Erhebung im Oktober, n=1.303) sieht die AfD unverändert bei 27 %, CDU/CSU bei 20 % (−1), SPD bei 13 %, Grüne bei 16 % (+1), Linke bei 11 % (−1) und FDP bei 4 % – damit unterhalb der Mandatsschwelle.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] },
          { tag: "fakt", text: "Nur 10 % der Befragten zeigten sich zufrieden mit der Arbeit von Bundeskanzler Merz – laut Infratest dimap der niedrigste Wert für einen Kanzler seit Beginn der Erhebung 1997 (Anfang September waren es noch 13 %); ebenfalls nur 10 % waren mit der Arbeit der Koalition aus Union und SPD zufrieden." }
        ]},
        { h: "Was zeigen weitere Institute?", items: [
          { tag: "unbestaetigt", text: "Forsa sieht die AfD ebenfalls bei 27 %, INSA bei 30 %, YouGov bei 28 % und Allensbach bei 27 %; der Durchschnitt mehrerer Institute (Stand 23.10.) liegt bei 27,6 % für die AfD, 20,4 % für CDU/CSU und 13,8 % für die SPD.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was ist der aktuelle Stand bei der Berliner Koalitionsbildung?", items: [
          { tag: "fakt", text: "Nachdem SPD- und Grünen-Gremien bereits Mitte Oktober für Koalitionsverhandlungen mit der Linken gestimmt hatten, entscheidet die Linke erst auf ihrem von Freitag auf den 31.10.2026 verschobenen Landesparteitag; bei Zustimmung könnten die Verhandlungen Anfang November beginnen. Bei erfolgreicher Koalitionsbildung könnte Spitzenkandidatin Elif Eralp (Linke) erste Regierende Bürgermeisterin aus der Linkspartei werden." }
        ]},
        { h: "Was geschah beim CSU-Parteitag in München, und welcher personelle Wechsel ist im Kabinett zu beachten?", items: [
          { tag: "fakt", text: "Beim zweitägigen CSU-Parteitag (23./24.10.) in München hielt Parteichef Markus Söder eine Grundsatzrede, der Leitantrag „Demokratie schützen. Freiheit verteidigen. Zukunft gestalten” wurde beschlossen; Söder warb zudem für Bayerns Landtagspräsidentin Ilse Aigner als Kandidatin für das Amt der Bundespräsidentin. Bundeskanzler Merz hielt am 24.10. als Gastredner die Abschlussrede." },
          { tag: "position", text: "Bärbel Bas war Mitte Oktober als Bundesarbeitsministerin und SPD-Chefin zurückgetreten; als Begründung nannte sie den Tod ihrer Stieftochter sowie öffentliche Angriffe gegen sie, die sich zuletzt „auch aus den Reihen des Koalitionspartners” verstärkt hätten. Nachfolger als Arbeitsminister ist seit dem 14.10.2026 Alexander Schweitzer (SPD)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der ARD-DeutschlandTrend einen historischen Tiefstand bei der Zufriedenheit mit Kanzler und Koalition zeigt, während sich die Berliner Koalitionsbildung weiter verzögert und innerhalb der SPD ein Führungswechsel stattgefunden hat, zeichnet insgesamt ein Bild anhaltender politischer Unruhe auf mehreren Ebenen." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Infratest dimap: ARD-DeutschlandTrend Oktober 2026", url: "https://www.infratest-dimap.de/umfragen-analysen/bundesweit/ard-deutschlandtrend/2026/oktober/" },
        { title: "Handelsblatt: ARD-„Deutschlandtrend” – Merz im Rekordtief", url: "https://www.handelsblatt.com/politik/deutschland/ard-deutschlandtrend-merz-im-rekordtief-nur-10-prozent-zufrieden-mit-kanzler/100259107.html" },
        { title: "Tagesspiegel: Berliner Linke verschiebt für Freitag geplanten Parteitag", url: "https://www.tagesspiegel.de/berlin/abstimmung-uber-koalitionsverhandlungen-berliner-linke-verschiebt-fur-freitag-geplanten-parteitag-16155393.html" },
        { title: "ZDFheute: CSU-Parteitag – Söder wirbt für Aigner und Kampf gegen Extreme", url: "https://www.zdfheute.de/politik/deutschland/csu-soeder-parteitag-bayern-100.html" },
        { title: "ZDFheute: Bärbel Bas tritt als SPD-Chefin und Arbeitsministerin zurück", url: "https://www.zdfheute.de/politik/deutschland/baerbel-bas-spd-ruecktritt-100.html" }
      ]
    },

    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-abu-dhabi-gespraeche-selenskyj-frontlinie-10-24", cats: ["world", "geo"], when: "Oslo-Gespräche 20.10. · Witkoff-Putin-Treffen 21.10. · Selenskyj-Bestätigung 23.10. · Angriffe Nacht 22./23.10.2026",
      headline: "Ukraine, Russland und USA wollen sich Anfang November in Abu Dhabi zu Verhandlungen treffen, Präsident Selenskyj zeigt sich weiter offen für ein Einfrieren der Frontlinie",
      sec30: "Nach Gesprächen in Oslo (20.10., mit Witkoff, Norwegens Premier Støre, Finnlands Präsident Stubb und Kushner per Video) und einem rund dreistündigen Treffen zwischen US-Sondergesandtem Witkoff und Kreml-Chef Putin (21.10.) bestätigte Präsident Selenskyj am 23.10., dass sich Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi treffen sollen, zunächst auf technischer Ebene. Selenskyj zeigte sich weiter offen dafür, die aktuelle Frontlinie als ersten Schritt zu einem Friedensabkommen einzufrieren, fordert dafür aber belastbare Sicherheitsgarantien. In der Nacht zum 23.10. griff Russland laut ukrainischen Angaben erneut Energieinfrastruktur an; mindestens 8 Zivilisten wurden getötet, 67 verletzt. Belgiens Premier De Wever bekräftigte am 22.10., die EU-Kommission werde keinen neuen Mechanismus zur Nutzung eingefrorener russischer Vermögenswerte vorschlagen.",
      blocks: [
        { h: "Welche diplomatischen Schritte gab es zuletzt?", items: [
          { tag: "fakt", text: "Am 20.10. traf Präsident Selenskyj in Oslo US-Sondergesandten Steve Witkoff, zusammen mit Norwegens Premier Jonas Gahr Støre und Finnlands Präsident Alexander Stubb; Jared Kushner war per Video zugeschaltet. Am 21.10. traf Witkoff in St. Petersburg Kreml-Chef Putin für rund drei Stunden." },
          { tag: "position", text: "Laut Kreml-Berater Juri Uschakow erklärte Putin sich bereit, trilaterale Gespräche zwischen Russland, den USA und der Ukraine „um den 10. November” wieder aufzunehmen, mit Fokus auf ein Nachkriegs-„Sicherheitssystem” für beide Länder." },
          { tag: "fakt", text: "Präsident Selenskyj bestätigte am 23.10., dass Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi zusammenkommen sollen – zunächst auf technischer Ebene; bei Fortschritten sollen Treffen zwischen Selenskyj, Putin und Trump folgen." }
        ]},
        { h: "Wie positioniert sich Präsident Selenskyj zu einem Einfrieren der Frontlinie?", items: [
          { tag: "position", text: "Selenskyj sagte am 21.10. in einem Fox-News-Interview, er sei offen dafür, die aktuelle Frontlinie als ersten Schritt zu einem Friedensabkommen einzufrieren, fordere dafür aber von den USA und europäischen Partnern belastbare Sicherheitsgarantien." }
        ]},
        { h: "Welche aktuellen Angriffe und Opferzahlen werden gemeldet?", items: [
          { tag: "unbestaetigt", text: "In der Nacht zum 23.10. griff Russland nach ukrainischen Angaben Energieinfrastruktur mit 176 Langstreckendrohnen an (davon 92 Jet-Drohnen), 140 seien abgefangen worden; mindestens 8 Zivilisten wurden getötet und 67 verletzt binnen 24 Stunden, in acht Oblasten kam es zu Stromausfällen – nach eigenen, unabhängig nicht überprüften Angaben." },
          { tag: "unbestaetigt", text: "Für die Woche vom 16. bis 23.10. nennt die ukrainische Seite eine Bilanz von mindestens 38 getöteten und 282 verletzten Zivilisten durch mehr als 1.500 Angriffsdrohnen, über 40 Raketen und zahlreiche Gleitbomben." }
        ]},
        { h: "Wie ist der Stand bei der EU-Finanzierung und den eingefrorenen Vermögenswerten?", items: [
          { tag: "fakt", text: "Belgiens Premierminister Bart De Wever bekräftigte am 22.10., die EU-Kommission werde keinen neuen Mechanismus zur Nutzung der rund 185 Mrd. Euro eingefrorener russischer Vermögenswerte bei Euroclear vorschlagen; stattdessen bleibt ein bereits im April 2026 vereinbarter, über EU-Anleihen finanzierter 90-Mrd.-Euro-Kredit für 2026/2027 die Grundlage.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich mit der für Anfang November geplanten Zusammenkunft in Abu Dhabi ein konkreterer diplomatischer Fahrplan abzeichnet, während sich an den gegenseitigen Angriffen und an der ungelösten Frage der eingefrorenen russischen Vermögenswerte nichts geändert hat, zeigt, wie weit militärisches Geschehen und diplomatische Fortschritte derzeit noch auseinanderliegen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, China-Taiwan in Meldung 9.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "CBS News: Russia-Ukraine war – Witkoff, Putin, Trump, Zelenskyy", url: "https://www.cbsnews.com/news/russia-ukraine-war-witkoff-putin-trump-zelenskyy/" },
        { title: "Kyiv Independent: Trilateral peace talks with Russia, US negotiators to begin in November, Zelensky says", url: "https://kyivindependent.com/trilateral-peace-talks-with-russia-us-negotiators-to-begin-in-november-zelensky-says/" },
        { title: "Fox News: Ukraine's Zelenskyy open to freezing front lines, ceasefire with Russia", url: "https://www.foxnews.com/world/ukraines-zelenskyy-open-freezing-front-lines-ceasefire-russia" },
        { title: "Kyiv Independent: Energy facilities across Ukraine targeted as Russian attacks kill at least 8, injure 67 over past day", url: "https://kyivindependent.com/energy-facilities-across-ukraine-targeted-as-russian-attacks-kill-at-least-8-injure-67-over-past-day/" },
        { title: "Interfax-Ukraine: Belgian premier says EU will not propose using frozen Russian assets for Ukraine", url: "https://en.interfax.com.ua/news/general/1224317.html" }
      ]
    },

    /* 8 GEOPOLITIK: GOLF/HORMUZ/HOUTHI/JEMEN */
    {
      id: "golf-hormuz-houthi-verteidigungsministerium-jemen-10-24", cats: ["geo", "energy"], when: "Berichte über Angriff auf saudisches Verteidigungsministerium Woche 19.–23.10. · Hormuz-Zwischenfälle Oktober · Operation Dawn of Yemen seit 5.10.2026",
      headline: "Berichte beschreiben einen Huthi-Angriff auf das saudische Verteidigungsministerium in Riad, die Straße von Hormus verzeichnet laut UKMTO die höchste Zahl an Schiffsangriffen seit Kriegsbeginn",
      sec30: "Nach Berichten gehörte das saudische Verteidigungsministerium in Riad zu den jüngsten Zielen von Huthi-Angriffen auf Saudi-Arabien, neben weiteren Flughäfen und Aramco-Anlagen – Angaben, die bislang nur von Houthi-Seite oder über Sekundärquellen vorliegen. Der Golfkooperationsrat (GCC) hatte solche Angriffe bereits am 18.10. verurteilt und einen gemeinsamen Verteidigungspakt in Erinnerung gerufen. In der Straße von Hormus verzeichnete der Oktober laut UKMTO die höchste Zahl an Schiffsangriffen seit Kriegsbeginn Ende Februar 2026; CENTCOM und Iran machen weiterhin gegensätzliche Angaben zur Kontrolle der Wasserstraße. Im Jemen hält die saudisch unterstützte „Operation Dawn of Yemen” gegen die Houthi an. Brent-Rohöl stieg als Reaktion auf rund 116 bis 117 Dollar je Barrel.",
      blocks: [
        { h: "Was ist am saudischen Verteidigungsministerium und an anderen Zielen geschehen?", items: [
          { tag: "unbestaetigt", text: "Berichte (unter anderem Handelsblatt) nennen das saudische Verteidigungsministerium in Riad neben mehreren Flughäfen und Aramco-Ölanlagen als Ziel jüngster Huthi-Angriffe; die Houthi reklamierten zudem Angriffe auf den Flughafen Abha und Aramco-Anlagen in Yanbu für sich – einseitige, unabhängig nicht überprüfte Angaben der Konfliktpartei." },
          { tag: "unbestaetigt", text: "Nach aggregierten Berichten tötete die Angriffsserie auf drei saudische Flughäfen zwischen 6. und 21.10. insgesamt 22 Menschen und verletzte über 380 – nach diesen Angaben die tödlichste Angriffsserie in Saudi-Arabien seit den Moscheebombenattentaten von Qatif/Dammam 2015." },
          { tag: "fakt", text: "Der Golfkooperationsrat (Saudi-Arabien, Bahrain, Kuwait, Oman, Katar, VAE) verurteilte die Huthi-Angriffe bereits am 18.10., berief sich auf einen gemeinsamen Verteidigungspakt und forderte eine formale Einstufung der Houthi als Terrororganisation." }
        ]},
        { h: "Wie ist die Lage in der Straße von Hormus?", items: [
          { tag: "unbestaetigt", text: "Der Oktober verzeichnete laut UKMTO die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Kriegsbeginn Ende Februar 2026; mehr als 20 Schiffe, überwiegend Öltanker, wurden in Hormus, dem Persischen Golf und dem Golf von Oman angegriffen. Iranisches Staatsfernsehen berichtete von 7 in einer Nacht beschädigten Tankern – eine einseitige, unabhängig nicht überprüfte Angabe." },
          { tag: "position", text: "CENTCOM (Admiral Brad Cooper) erklärt, die Straße von Hormus werde „von den USA und regionalen Partnern kontrolliert, nicht vom Iran”; nach eigenen Angaben seien in der vergangenen Woche 400 Schiffe und 100 Mio. Barrel Öl sicher durchgeschleust worden." },
          { tag: "fakt", text: "Die Öltransitrate durch die Straße von Hormus lag am 13.10. bei rund 11,6 Mio. Barrel pro Tag – etwa 68 % des Vorkriegs-Niveaus von 17,1 Mio. Barrel pro Tag." }
        ]},
        { h: "Wie ist der Stand im Jemen-Konflikt?", items: [
          { tag: "unbestaetigt", text: "Der jemenitische Präsidialrat unter Raschad al-Alimi startete am 5.10. mit saudischer Luftunterstützung die „Operation Dawn of Yemen” gegen die Houthi und reklamiert die Zerstörung von 324 Houthi-Zielen sowie einen „strategischen Vorstoß” auf Sanaa – eine einseitige Angabe der Regierungsseite." },
          { tag: "fakt", text: "Die humanitäre Lage bleibt laut IOM angespannt: mehr als 233.000 Vertriebene, davon rund 121.000 allein in der Provinz Taiz, wo sich Lebensmittelpreise laut Berichten verfünffacht haben und Krankenhäuser nur noch wenige Tage Treibstoffvorrat hatten." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Brent-Rohöl stieg als Reaktion auf die erneute Eskalation am Golf bis Samstagmorgen auf rund 116 bis 117 Dollar je Barrel.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Berichte nun auch einen Angriff auf das saudische Verteidigungsministerium nennen und die Straße von Hormus laut UKMTO die höchste Angriffszahl seit Kriegsbeginn verzeichnet, während sich CENTCOM und Iran weiterhin widersprechende Angaben zur Kontrolle der Wasserstraße machen, zeigt, wie unübersichtlich und angespannt die Lage am Golf bleibt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis im Detail in Meldung 15.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "Handelsblatt: Energiepreise – Öl fällt, doch Gas ist so teuer wie zuletzt Ende 2022", url: "https://www.handelsblatt.com/finanzen/maerkte/devisen-rohstoffe/energiepreise-oel-faellt-doch-gas-ist-so-teuer-wie-zuletzt-ende-2022/100263581.html" },
        { title: "Al Jazeera: GCC condemns Houthi attacks on Saudi Arabia as Yemen fighting intensifies", url: "https://www.aljazeera.com/news/2026/10/18/gcc-condemns-houthi-attacks-on-saudi-arabia-as-yemen-fighting-intensifies" },
        { title: "Al Jazeera: US and Iran both claim control of Strait of Hormuz amid attacks on vessels", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { title: "The National: Strait of Hormuz attacks surge as Iran steps up campaign against US-backed oil shipping", url: "https://www.thenationalnews.com/news/gulf/2026/10/13/strait-of-hormuz-attacks-surge-as-iran-steps-up-campaign-against-us-backed-oil-shipping/" },
        { title: "Al Arabiya English: Yemen's al-Alimi launches Operation Dawn of Yemen", url: "https://english.alarabiya.net/News/middle-east/2026/10/05/yemen-s-alalimi-launches-operation-dawn-of-yemen-" }
      ]
    },

    /* 9 INTERNATIONAL/GEOPOLITIK: CHINA-TAIWAN */
    {
      id: "taiwan-china-cyberangriffe-pratas-10-24", cats: ["world", "geo"], when: "NSB-Bericht 21.10. · Vorfall Pratas 18.10. · Kommunalwahlen 28.11.2026",
      headline: "Taiwans Sicherheitsbehörde meldet durchschnittlich 2,6 Millionen chinesische Cyberangriffe pro Tag vor den Kommunalwahlen am 28. November",
      sec30: "Taiwans Nationale Sicherheitsbehörde (NSB) berichtete am 21.10. von durchschnittlich rund 2,6 Mio. chinesischen Cyberangriffen pro Tag in den ersten neun Monaten 2026 sowie von deutlich verstärkter Desinformation vor den Kommunalwahlen am 28.11.2026. Am 18.10. vertrieb Taiwans Küstenwache 16 chinesische Schiffe bei Operationen um die Pratas-Inseln, die Taiwan als „hybride Kriegsführung” bezeichnet; China wies entsprechende Vorwürfe zurück.",
      blocks: [
        { h: "Was meldet Taiwans Nationale Sicherheitsbehörde?", items: [
          { tag: "fakt", text: "Die NSB berichtete am 21.10. von durchschnittlich rund 2,6 Mio. chinesischen Cyberangriffen pro Tag in den ersten neun Monaten 2026, verstärkt seit Juni, mit Fokus auf Wissenschaft/Forschung, Telekommunikation und Rüstungslieferketten; zudem seien über 2,5 Mio. Desinformations-Beiträge registriert worden (Vorjahreszeitraum: rund 1,7 Mio.), überwiegend auf Facebook und Threads." }
        ]},
        { h: "Was geschah um die Pratas-Inseln?", items: [
          { tag: "fakt", text: "Am 18.10. vertrieb Taiwans Küstenwache nach eigenen Angaben 16 chinesische Küstenwach-, Forschungs- und Fischereifahrzeuge bei „ungewöhnlich großen” koordinierten Operationen rund um die Hauptinsel und die Pratas-Inseln, die Taiwan als „hybride Kriegsführung” bezeichnete." },
          { tag: "position", text: "Ein Sprecher des chinesischen Taiwan Affairs Office erklärte bereits am 14.10. zu einem früheren Vorfall, Taiwan müsse die „Konsequenzen” tragen, und beansprucht „unbestreitbare Souveränität” über die Pratas-Inseln; Taiwan bezeichnet das Vorgehen seiner Küstenwache dagegen als „normale Rechtsdurchsetzung”." }
        ]},
        { h: "Welcher Termin steht für die Kommunalwahlen an?", items: [
          { tag: "fakt", text: "Taiwans Kommunalwahlen (Bürgermeister- und Kreiswahlen) sind für den 28.11.2026 angesetzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich Cyberangriffe, Desinformation und Zwischenfälle um die Pratas-Inseln vor den Kommunalwahlen fortsetzen, ohne dass es zu offener militärischer Eskalation kommt, passt zu einem seit Jahren andauernden Muster wiederkehrender, aber bislang nicht offen eskalierender Spannungen." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "Hong Kong Free Press: Taiwan says China cyberattacks, disinformation up ahead of local elections", url: "https://hongkongfp.com/2026/10/21/taiwan-says-china-cyberattacks-disinformation-up-ahead-of-local-elections/" },
        { title: "Al Jazeera: Taiwan drives away 16 Chinese ships accused of maritime harassment", url: "https://www.aljazeera.com/news/2026/10/18/taiwan-drives-away-16-chinese-ships-accused-of-maritime-harassment" }
      ]
    },

    /* 10 DEFENCE: RHEINMETALL */
    {
      id: "rheinmetall-kursverlust-arminius-uk-gun-hall-10-24", cats: ["defence"], when: "Kursverlauf Woche 20.–24.10. · UK Gun Hall-Eröffnung 22.10. · Mangalia-Zuschlag 19.10.2026",
      headline: "Die Rheinmetall-Aktie verliert in der Woche rund 6,5 Prozent, das Unternehmen eröffnet eine neue Geschützfabrik in Großbritannien",
      sec30: "Die Rheinmetall-Aktie notierte am Samstagmorgen bei rund 1.017 Euro und verlor in der Woche bis Freitag rund 6,5 % – der größte DAX40-Tagesverlust war der 21.10. (−3,38 %). Analysten bleiben uneinig: Berenberg hatte sein Kursziel von 1.600 auf 1.020 Euro gesenkt und auf „Hold” herabgestuft, UBS senkte von 1.600 auf 1.360 Euro, beließ aber „Buy”. Gleichzeitig eröffnete Rheinmetall am 22.10. eine neue Geschützfabrik in Telford (Großbritannien) und sicherte sich am 19.10. zusammen mit der Reederei MSC den Zuschlag für die rumänische Werft Mangalia. Zum Arminius-Programm gibt es weiterhin keinen finalen Vertrag.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "fakt", text: "Die Aktie notierte am Samstagmorgen bei rund 1.017 Euro (52-Wochen-Spanne 900,20 bis 1.966,00 Euro) und verlor in der Handelswoche rund 6,5 %; der größte DAX40-Tagesverlust war der 21.10. mit −3,38 %, unterhalb der 50-Tage-Durchschnittslinie.",
            ask: [{ label: "Mehr zum DAX-Wochenverlust", ref: "n:dax" }] },
          { tag: "fakt", text: "Analysten bewerten das Unternehmen unterschiedlich: UBS senkte sein Kursziel am 20.10. von 1.600 auf 1.360 Euro, beließ die Einstufung „Buy”; Berenberg hatte zuvor von „Buy” auf „Hold” herabgestuft und das Kursziel von 1.600 auf 1.020 Euro gesenkt, mit Verweis auf Sorgen um die Umsatzentwicklung nach 2030; Bernstein bestätigte am 19.10. ein Kursziel von 1.200 Euro. Der Konsens liegt je nach Quelle bei rund 1.440 bis 1.570 Euro, mit mehrheitlich „Buy”-Einstufungen." }
        ]},
        { h: "Welche neuen Aufträge und Ereignisse gab es?", items: [
          { tag: "fakt", text: "Am 22.10. eröffnete Rheinmetall die „UK Gun Hall” in Telford (120-mm- und 155-mm-Waffensysteme, bis zu 245 Rohre pro Jahr, mehr als 100 neue Arbeitsplätze) als Teil einer 200-Mio.-Pfund-Investition." },
          { tag: "fakt", text: "Am 19.10. sicherten sich Rheinmetall und die Reederei MSC den Zuschlag für die rumänische Werft Mangalia am Schwarzen Meer für rund 138 Mio. Euro, unter anderem für den Bau von vier Marineschiffen für Rumänien." }
        ]},
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Zum Arminius-Programm (Radpanzer Boxer) gibt es weiterhin keinen finalen Vertrag; die parlamentarische Befassung ist für den 9.12.2026 angesetzt. Rheinmetalls Anteil am Gesamtprogramm wird auf rund 12,4 Mrd. Euro geschätzt – eine Schätzung, keine offizielle Bestätigung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Rheinmetall-Aktie trotz neuer Aufträge in Großbritannien und Rumänien in der Woche deutlich verloren hat, während Analysten zum Arminius-Programm uneinig bleiben, zeigt, wie unterschiedlich einzelne Standbeine des Konzerns derzeit bewertet werden. Die Q3-Zahlen stehen erst am 5.11.2026 an; die bisherige Jahresprognose (Wachstum 37 bis 42 %, Marge rund 19 %) wurde zuletzt bestätigt." }
        ]}
      ],
      reaction: "Weitere internationale Rüstungsaufträge werden in Meldung 11 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "boerse-express.com: Rheinmetall-Aktie – Irrsinn", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-irrsinn-955747" },
        { title: "wallstreet-online.de: Beachtet! Rheinmetall-Aktie – Verkaufsdruck", url: "https://wallstreet-online.de/nachricht/21560111-beachtet-rheinmetall-aktie-verkaufsdruck-21-10-2026" },
        { title: "Rheinmetall: Rheinmetall opens the UK Gun Hall in Telford", url: "https://www.rheinmetall.com/en/media/news-watch/news/2026/10/2026-10-22-rheinmetall-opens-the-uk-gun-hall-in-telford" },
        { title: "defensehere.com: Rheinmetall, MSC to acquire Mangalia shipyard in Romania for €138 million", url: "https://www.defensehere.com/en/rheinmetall-msc-to-acquire-mangalia-shipyard-in-romania-for-e138-million" },
        { title: "hartpunkt.de: Arminius ante portas – Großvertrag für Boxer-Radpanzer soll im Dezember geschlossen werden", url: "https://www.hartpunkt.de/arminius-ante-portas-grossvertrag-fuer-boxer-radpanzer-soll-im-dezember-geschlossen-werden" }
      ]
    },

    /* 11 DEFENCE: RTX/LOCKHEED/ANDURIL */
    {
      id: "rtx-lockheed-anduril-q3-project-meridian-10-24", cats: ["defence"], when: "RTX-Q3 20.10. · Lockheed-Q3 22.10. · Javelin-Auftrag 19.10. · Saab-Auftrag 15.10.2026",
      headline: "RTX und Lockheed Martin melden starke Quartalszahlen mit Rekord-Auftragsbeständen, die Kritik an Palmer Luckeys Rolle im Pentagon-Projekt Meridian hält an",
      sec30: "RTX meldete am 20.10. für das dritte Quartal einen Umsatz von 25,0 Mrd. Dollar (+11 %) und einen Rekord-Auftragsbestand von 340 Mrd. Dollar, unter anderem gestützt von einem mehrjährigen Pentagon-Vertrag über Tomahawk- und AMRAAM-Flugkörper im Volumen von rund 37 Mrd. Dollar. Lockheed Martin meldete am 22.10. einen Umsatz von 20,7 Mrd. Dollar (+11 %) und ebenfalls einen Rekord-Auftragsbestand von 292,0 Mrd. Dollar; die Aktie legte danach rund 9 % zu. Ein Gemeinschaftsunternehmen von RTX und Lockheed Martin erhielt bereits am 19.10. einen 215-Mio.-Dollar-Auftrag der US Army für Javelin-Abschussgeräte. Die Kritik an möglichen Interessenkonflikten bei Palmer Luckeys Rolle im Pentagon-Zukunftsgremium „Project Meridian” hält unverändert an.",
      blocks: [
        { h: "Was zeigen die Quartalszahlen von RTX und Lockheed Martin?", items: [
          { tag: "fakt", text: "RTX meldete am 20.10. für das dritte Quartal einen Umsatz von 25,0 Mrd. Dollar (+11 % gegenüber Vorjahr) und einen Gewinn pro Aktie von 2,26 Dollar (+33 %), bei einem Rekord-Auftragsbestand von 340 Mrd. Dollar; die Jahresprognose wurde auf 97,0 bis 97,5 Mrd. Dollar Umsatz angehoben. Ein mehrjähriger Pentagon-Vertrag für Tomahawk- und AMRAAM-Flugkörper hat ein Volumen von rund 37 Mrd. Dollar, ein separater AMRAAM-Vertrag 20,7 Mrd. Dollar." },
          { tag: "fakt", text: "Lockheed Martin meldete am 22.10. einen Umsatz von 20,7 Mrd. Dollar (+11 %) und einen Nettogewinn von 1,8 Mrd. Dollar, bei einem Rekord-Auftragsbestand von 292,0 Mrd. Dollar (Book-to-Bill-Verhältnis 4,0); die Aktie legte danach rund 9 % zu." }
        ]},
        { h: "Welche weiteren Aufträge gab es?", items: [
          { tag: "fakt", text: "Ein Gemeinschaftsunternehmen von RTX und Lockheed Martin erhielt am 19.10. einen 215-Mio.-Dollar-Auftrag der US Army für leichte Javelin-Abschussgeräte mit Kommunikationsmodul." },
          { tag: "fakt", text: "Saab erhielt bereits am 15.10. von der schwedischen Beschaffungsbehörde FMV einen Auftrag über 1,3 Mrd. schwedische Kronen (rund 116 bis 131 Mio. Euro) für einen neuen Flugsteuerrechner für das Kampfflugzeug Gripen.",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:10" }] }
        ]},
        { h: "Wie ist der Stand bei „Project Meridian” und Palmer Luckey?", items: [
          { tag: "fakt", text: "US-Verteidigungsminister Pete Hegseth hatte Ende September Anduril-Mitgründer Palmer Luckey gemeinsam mit Elon Musk und dem früheren Kongressabgeordneten Newt Gingrich in das auf 120 Tage angelegte Pentagon-Projekt „Project Meridian: The Future of Warfare” berufen." },
          { tag: "position", text: "Die Kritik an möglichen Interessenkonflikten hält laut Berichten unverändert an, da sowohl Anduril als auch Musks SpaceX von den Empfehlungen der Studie profitieren könnten; Ergebnisse der Studie stehen weiterhin aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass etablierte Rüstungskonzerne wie RTX und Lockheed Martin Rekord-Auftragsbestände melden, während die Debatte um Interessenkonflikte bei Anduril und Palmer Luckey anhält, spiegelt die anhaltend engen und teils umstrittenen Verbindungen zwischen Industrie und Verteidigungsministerien wider." }
        ]}
      ],
      reaction: "Rheinmetall und die europäische Rüstungsindustrie werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "RTX: RTX reports Q3 2026 results", url: "https://www.rtx.com/news/news-center/2026/10/20/rtx-reports-q3-2026-results" },
        { title: "Lockheed Martin: Lockheed Martin Reports Third Quarter 2026 Financial Results", url: "https://investors.lockheedmartin.com/news-releases/news-release-details/lockheed-martin-reports-third-quarter-2026-financial-results" },
        { title: "RTX: U.S. Army awards Javelin joint venture $215 million contract", url: "https://www.rtx.com/news/news-center/2026/10/19/u-s-army-awards-javelin-joint-venture-215-million-contract-for-lightweight-comm" },
        { title: "Saab: Saab receives order for new Gripen computer", url: "https://www.saab.com/newsroom/press-releases/2026/saab-receives-order-for-new-gripen-computer" },
        { title: "The Hill: Project Meridian Pentagon conflict", url: "https://thehill.com/opinion/national-security/6139986-project-meridian-pentagon-conflict/" }
      ]
    },

    /* 12 DEALS/PE: LSEG/OCTUS, BASF/EVONIK, EQT/QIAGEN, SALESFORCE/BRAZE */
    {
      id: "deals-lseg-octus-basf-evonik-eqt-qiagen-10-24", cats: ["deals", "pe"], when: "LSEG/Octus 22.10. · BASF/Evonik-Berichte 22./23.10. · Tesla/SpaceX-Prüfung 19./20.10. · EQT/Qiagen seit 21./22.10.2026",
      headline: "LSEG kauft den Kreditmarkt-Datenanbieter Octus für 3,5 Milliarden Dollar, BASF soll sein Angebot für Evonik laut Kreisen auf über 11 Milliarden Euro erhöht haben",
      sec30: "Der Börsenbetreiber LSEG kündigte am 22.10. den Kauf von Octus (vormals Reorg) vom Finanzinvestor Permira für 3,5 Mrd. Dollar in bar an – die größte LSEG-Übernahme seit sieben Jahren. Laut Kreisen soll BASF sein Angebot für den Chemiekonzern Evonik auf 24 Euro je Aktie (Gesamtwert über 11 Mrd. Euro) erhöht haben; weder BASF noch Evonik haben dies offiziell bestätigt. Die Verwaltungsräte von Tesla und SpaceX bildeten am 19./20.10. unabhängige Ausschüsse zur Prüfung einer möglichen Fusion, ohne verbindliches Angebot. Die bereits bekannten Übernahmen von Qiagen durch EQT (rund 10,8 Mrd. Euro) und von Braze durch Salesforce (rund 5,66 Mrd. Dollar) bleiben unverändert in der Umsetzung.",
      blocks: [
        { h: "Was wurde bei LSEG/Octus angekündigt?", items: [
          { tag: "fakt", text: "LSEG vereinbarte am 22.10. den Kauf von Octus (vormals Reorg, Anbieter von Kreditmarkt- und Distressed-Debt-Daten) vom Finanzinvestor Permira für 3,5 Mrd. Dollar in bar; die Finanzierung soll über externe Fremdfinanzierung erfolgen. Octus soll 2026 über 300 Mio. Dollar Umsatz erzielen, der Deal soll im ersten Jahr „earnings neutral” sein; der Abschluss wird im ersten Halbjahr 2027 erwartet. Für Permira ist es der sechste strategische Exit des Jahres, für LSEG die größte Akquisition seit sieben Jahren.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was ist der Stand bei BASF/Evonik?", items: [
          { tag: "unbestaetigt", text: "Laut Kreisen (Reuters, berichtet unter anderem von Handelsblatt) soll BASF sein Angebot für Evonik auf 24 Euro je Aktie erhöht haben, Gesamtwert über 11 Mrd. Euro – nach einem vorherigen, von Evonik als zu niedrig bewerteten Angebot von rund 22,15 Euro je Aktie (rund 10,3 Mrd. Euro). Weder BASF noch Evonik haben dies offiziell bestätigt; Finanzierungsdetails und beteiligte Banken werden in den verfügbaren Quellen nicht genannt. Die RAG-Stiftung hält rund 43 % der Evonik-Aktien und dürfte für den Ausgang entscheidend sein." }
        ]},
        { h: "Wie ist der Stand bei Tesla/SpaceX?", items: [
          { tag: "unbestaetigt", text: "Die Verwaltungsräte von Tesla und SpaceX bildeten am 19./20.10. jeweils unabhängige Ausschüsse, um eine mögliche Fusion zu prüfen; Elon Musk ist wegen eines Interessenkonflikts nicht an den Gesprächen beteiligt. Es liegt kein verbindliches Angebot und keine Einigung vor; Finanzierung, Bewertung, beteiligte Banken und ein Zeitplan sind in den verfügbaren Quellen nicht genannt." }
        ]},
        { h: "Was ist der Stand bei EQT/Qiagen und Salesforce/Braze?", items: [
          { tag: "fakt", text: "Die am 21./22.10. vereinbarte Übernahme von Qiagen durch EQT Private Equity (46,50 Euro je Aktie, rund 10,8 Mrd. Euro Unternehmenswert, Konsortium unter anderem mit ADIA und CPP Investments) bleibt unverändert, der Abschluss wird weiterhin für Mitte 2027 erwartet.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Salesforce hält an der am 20.10. vereinbarten Übernahme von Braze für rund 5,66 Mrd. Dollar (47,50 Dollar je Aktie, rund 58 % Prämie) fest; der Abschluss wird im Geschäftsjahr 2028 von Salesforce erwartet." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass binnen wenigen Tagen gleich mehrere Milliarden-Deals in unterschiedlichsten Branchen – Finanzdaten, Chemie, Biotech-Software – angekündigt, erhöht oder geprüft wurden, passt zu einer anhaltend aktiven M&A- und Private-Equity-Welle." }
        ]}
      ],
      deal: { value: "3,5 Mrd. $ (LSEG/Octus) · über 11 Mrd. € (BASF/Evonik, unbestätigt)", buyer: "LSEG · BASF", target: "Octus (von Permira) · Evonik", sector: "Finanzmarktdaten / Chemie", type: "Unternehmensübernahme (BASF/Evonik unbestätigt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 13 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "Bloomberg: LSEG agrees $3.5 billion deal to buy credit firm Octus", url: "https://www.bloomberg.com/news/articles/2026-10-22/lseg-agrees-3-5-billion-deal-to-buy-credit-firm-octus" },
        { title: "LSEG: LSEG response to press speculation – Octus acquisition", url: "https://www.lseg.com/en/media-centre/press-releases/2026/lseg-response-to-press-speculation-octus-acquisition" },
        { title: "Handelsblatt: Übernahme – BASF bietet jetzt mehr als elf Milliarden Euro für Evonik", url: "https://www.handelsblatt.com/unternehmen/industrie/uebernahme-basf-bietet-jetzt-mehr-als-elf-milliarden-euro-fuer-evonik/100264522.html" },
        { title: "Bloomberg: Musk says SpaceX, Tesla have formed committees to explore merger", url: "https://www.bloomberg.com/news/articles/2026-10-20/musk-says-spacex-tesla-have-formed-committees-to-explore-merger" },
        { title: "Bloomberg: EQT nears $9.6 billion deal for molecular testing firm Qiagen", url: "https://www.bloomberg.com/news/articles/2026-10-21/eqt-nears-9-6-billion-deal-for-molecular-testing-firm-qiagen" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-bcred-blueowl-redemptions-10-24", cats: ["credit", "pe"], when: "BCRED-Rücknahmen Q3 2026 · S&P-Ausblicksenkung · Blue Owl-Berichte Oktober 2026",
      headline: "Bei Blackstones Flaggschifffonds BCRED bleibt die Nachfrage nach Rücknahmen weiterhin doppelt so hoch wie das Limit, Blue Owl meldet hohe Abzugswünsche bei einem Technologiefonds",
      sec30: "Beim Blackstone Private Credit Fund (BCRED) wollten Anleger im dritten Quartal 2026 erneut rund 10 % des Nettoinventarwerts zurückziehen – doppelt so viel wie das vertragliche Quartalslimit von 5 %, ein Muster, das sich seit Juni fortsetzt. S&P Global Ratings hatte den Ausblick für den Fonds bereits zuvor von „positiv” auf „stabil” gesenkt, nachdem Abschreibungen auf Kredite der Jahrgänge 2021/22 den Nettoinventarwert belastet hatten. Bei Blue Owl wollten Anleger laut einem Bericht rund 39 % aus einem 5-Mrd.-Dollar-Technologie-Kreditfonds abziehen.",
      blocks: [
        { h: "Wie ist der Stand bei Blackstones BCRED?", items: [
          { tag: "fakt", text: "Im dritten Quartal 2026 wollten Anleger erneut rund 10 % des Nettoinventarwerts von BCRED zurückziehen – doppelt so viel wie das vertragliche Quartalslimit von 5 %, ähnlich wie bereits im Vorquartal. Der Fonds verbuchte im ersten Halbjahr 2026 nicht realisierte Abschreibungen von 1,85 Mrd. Dollar – mehr als das Dreifache des gesamten Jahres 2025 – und senkte innerhalb von neun Monaten zweimal seine Ausschüttung; der Nettoinventarwert pro Anteil ist seit Januar 2026 um 3,4 % gefallen.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] }
        ]},
        { h: "Wie reagierte S&P auf den Blackstone-Fonds?", items: [
          { tag: "fakt", text: "S&P Global Ratings senkte den Ausblick für den Blackstone Private Credit Fund von „positiv” auf „stabil”, mit Verweis auf Abschreibungen bei Krediten aus den Jahrgängen 2021/22, die den Nettoinventarwert belastet haben; die Liquidität des Fonds für Rücknahmen bis zur vertraglichen 5-%-Grenze hält S&P weiterhin für ausreichend.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was zeigt sich bei Blue Owl?", items: [
          { tag: "unbestaetigt", text: "Blue Owl verzeichnete laut einem Bericht Rücknahmewünsche von rund 39 % bei einem 5-Mrd.-Dollar-Technologie-Kreditfonds – eine der höheren bekannten Rücknahmequoten im Sektor.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei mehreren großen Private-Credit-Fonds weiterhin deutlich mehr Rücknahmen angefragt werden, als die Fonds vertraglich auszahlen müssen, während gleichzeitig andere Teile der Private-Equity-Branche (etwa Secondaries-Fonds) weiterhin hohe Mittelzuflüsse verzeichnen, zeigt ein gemischtes Bild der Anlageklasse.",
            ask: [{ label: "Wie wirken höhere Zinsen auf Private-Credit-Ausfälle?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 12 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:nonaccrual-default"],
      sources: [
        { title: "StreetInsider: S&P Affirms Ratings on Blackstone (BX), Subsidiaries; Outlook Remains Stable", url: "https://www.streetinsider.com/Credit+Ratings/S&P+Affirms+Ratings+on+Blackstone+(BX),+Subsidiaries;+Outlook+Remains+Stable/12118083.html" },
        { title: "rallies.ai: S&P says Blackstone Private Credit Fund outlook revised to stable from positive", url: "https://rallies.ai/news/sp-says-blackstone-private-credit-fund-outlook-revised-to-stable-from-positive-af83b57bb94fa143" },
        { title: "Bloomberg: Blackstone's BCRED caps redemptions again after 10% seek to exit", url: "https://www.bloomberg.com/news/articles/2026-09-03/blackstone-s-bcred-caps-redemptions-again-after-10-seek-to-exit" },
        { title: "Benzinga: Blue Owl investors seek to pull 39% from $5B tech credit fund", url: "https://www.benzinga.com/markets/private-markets/26/10/62146487/blue-owl-investors-seek-to-pull-39-from-5b-tech-credit-fund" }
      ]
    },

    /* 14 TECHNOLOGIE: COREWEAVE/SOX/META/OPENAI/ANTHROPIC */
    {
      id: "coreweave-sox-meta-openai-anthropic-10-24", cats: ["tech"], when: "CoreWeave-CDS Woche 20.–23.10. · Meta-Q3 21.10. · OpenAI-Berichte 22.10. · Anthropic-Ankündigung 18.10.2026",
      headline: "CoreWeaves Kreditausfallversicherungen erreichen ein Rekordniveau, Meta hebt seine Investitionsprognose erneut an, OpenAI verhandelt laut Berichten über eine 30-Milliarden-Dollar-Finanzierungsrunde",
      sec30: "Die CoreWeave-Aktie schloss am 23.10. bei 54,24 Dollar, ein neues 52-Wochen-Tief, nach einem Rückgang von rund 36 bis 37 % im Oktober; die 5-Jahres-Kreditausfallversicherungen stiegen zeitweise auf über 1.140 Basispunkte. Goldman Sachs hatte die Aktie am 19.10. trotzdem auf „Buy” hochgestuft. Meta meldete am 21.10. einen Quartalsumsatz von 64,6 Mrd. Dollar (+26 %) und hob seine Investitionsprognose für 2026 auf 135 bis 145 Mrd. Dollar an, bei negativem freiem Cashflow. Der Halbleiterindex SOX verzeichnete laut Berichten die längste Verlustserie seit 2008, während Samsung und SK Hynix nach starken südkoreanischen Exportdaten deutlich zulegten. OpenAI soll laut Berichten kurz vor einer Finanzierungsrunde von bis zu 30 Mrd. Dollar bei 1,25 Billionen Dollar Bewertung stehen; Anthropic kündigte an, 5 % seiner Anteile einem neuen „Public Benefit Fund” zu übertragen.",
      blocks: [
        { h: "Wie geht es CoreWeave?", items: [
          { tag: "fakt", text: "Die CoreWeave-Aktie schloss am 23.10. bei 54,24 Dollar (−2,46 %), nach einem neuen 52-Wochen-Tief von 53,50 Dollar am Vortag; im Oktober verlor die Aktie rund 36 bis 37 %, binnen 12 Monaten rund 54 %. Die Marktkapitalisierung fiel von rund 90 Mrd. Dollar vor etwa einem Jahr auf nur noch rund 31 Mrd. Dollar." },
          { tag: "fakt", text: "Die 5-Jahres-Kreditausfallversicherungen (CDS) stiegen zeitweise auf über 1.140 Basispunkte, zuletzt rund 1.038 bis 1.145 Basispunkte; daraus lässt sich eine implizite 5-Jahres-Ausfallwahrscheinlichkeit von rund 60 bis 64 % ableiten. Die 9,75-%-Anleihe (fällig 2031) rentierte zuletzt mit rund 15,78 %.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Goldman Sachs stufte CoreWeave am 19.10. von „Neutral” auf „Buy” hoch mit einem Kursziel von 106 Dollar, nach einem 43-%-Einbruch seit den August-Zahlen; UBS beließ „Buy”, senkte das Kursziel aber von 120 auf 105 Dollar. Der Umsatz-Auftragsbestand lag zum Ende des zweiten Quartals bei 104,2 Mrd. Dollar." }
        ]},
        { h: "Was zeigen Metas Quartalszahlen?", items: [
          { tag: "fakt", text: "Meta meldete am 21.10. für das dritte Quartal 2026 einen Umsatz von 64,6 Mrd. Dollar (+26 % gegenüber Vorjahr) und einen Gewinn pro Aktie von 7,40 Dollar; die Investitionen (Capex) stiegen im dritten Quartal auf 34,9 Mrd. Dollar und überstiegen damit den operativen Cashflow von 32,8 Mrd. Dollar, sodass der freie Cashflow bei −2,1 Mrd. Dollar lag. Die Jahresprognose für die Investitionen wurde auf 135 bis 145 Mrd. Dollar angehoben.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Wie entwickelte sich der Halbleiterindex SOX?", items: [
          { tag: "unbestaetigt", text: "Der Halbleiterindex SOX fiel am 23.10. laut Berichten um 3,83 % und markierte damit den achten Verlusttag in Folge – die längste Verlustserie seit Oktober 2008, rund 16 % unter dem Hoch vom 6.10.; branchenweit soll dadurch bis zu 1 Billion Dollar Marktkapitalisierung bei Chip-Werten ausgelöscht worden sein." },
          { tag: "fakt", text: "Samsung und SK Hynix legten am 21.10. um rund 5,6 % beziehungsweise 7,1 % zu, nachdem Südkorea einen Anstieg der Halbleiterexporte um 222,5 % gemeldet hatte; SK Hynix erholte sich am 23.10. vorbörslich um weitere gut 6 %." }
        ]},
        { h: "Welche Finanzierungsrunden gibt es bei KI-Anbietern?", items: [
          { tag: "unbestaetigt", text: "OpenAI soll laut Berichten kurz vor dem Abschluss einer Finanzierungsrunde von bis zu 30 Mrd. Dollar bei einer Bewertung von 1,25 Billionen Dollar stehen (zuvor war von bis zu 1,4 Billionen Dollar die Rede), angeführt von Investoren aus den Vereinigten Arabischen Emiraten und von Coatue, als Brücke zu einem geplanten Börsengang 2027; die Konditionen sind nicht final." },
          { tag: "fakt", text: "Anthropic kündigte am 18.10. an, 5 % seiner Anteile einem neuen „Public Benefit Fund” zu übertragen (vorbehaltlich der Zustimmung der Anteilseigner), um unter anderem KI-bedingte Arbeitsplatzveränderungen zu adressieren." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Meta seine Investitionsprognose weiter anhebt und gleichzeitig CoreWeaves Kreditrisikoaufschläge auf ein Rekordniveau steigen, während Speicherchip-Werte in Asien von starken Exportdaten profitieren, zeigt, wie unübersichtlich und uneinheitlich die Lage in der KI- und Chipbranche weiterhin bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "CNBC: CoreWeave's market confidence erodes as bond yields spike, stock sinks", url: "https://www.cnbc.com/2026/10/21/coreweaves-market-confidence-erodes-as-bond-yields-spike-stock-sinks.html" },
        { title: "CNBC: CoreWeave credit default swaps hit distress levels as investors sour on AI debt", url: "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html" },
        { title: "CNBC: Meta earnings Q3 2026 live updates", url: "https://www.cnbc.com/2026/10/21/meta-earnings-q3-2026-live-updates.html" },
        { title: "Investing.com: Chip index SOX posts longest losing streak since 2008 as AI worries deepen", url: "https://www.investing.com/news/stock-market-news/chip-index-sox-posts-longest-losing-streak-since-2008-as-ai-worries-deepen-4955401" },
        { title: "Bloomberg: OpenAI shifts value to $1.25 trillion as funding talks finalize", url: "https://www.bloomberg.com/news/articles/2026-10-22/openai-shifts-value-to-1-25-trillion-as-funding-talks-finalize" },
        { title: "CNBC: Anthropic AI public benefit fund", url: "https://www.cnbc.com/2026/10/18/anthropic-ai-public-benefit-fund.html" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "oelpreis-ttf-gasspeicher-opec-10-24", cats: ["energy", "geo"], when: "Ölpreisanstieg Woche 20.–24.10. · TTF über 90 € seit 20.10. · Gasspeicher-Stand 22./23.10. · OPEC+ 4.10., nächstes Treffen 1.11.2026",
      headline: "Brent-Rohöl steigt auf den höchsten Stand seit Ende April, der europäische Gaspreis TTF bleibt über 90 Euro, deutsche Gasspeicher füllen sich leicht weiter",
      sec30: "Brent-Rohöl stieg bis Samstagmorgen auf rund 116,7 bis 117,4 Dollar je Barrel – nach Berichten über eine erneute Eskalation am Golf; seit Jahresbeginn 2026 ist Brent damit um über 85 % gestiegen. Der europäische Gas-Referenzpreis TTF notiert seit dem 20.10. durchgehend über 90 Euro je Megawattstunde – den höchsten Stand seit Dezember 2022. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22./23.10. bei 61,1 % Füllstand (151,1 TWh), leicht höher als die 60,4 % vom 15./16.10.; die Behörde sieht das Risiko einer angespannten Gasversorgung weiterhin als „gering”. Die OPEC+ beließ ihre Förderquoten beim Treffen am 4.10. für November unverändert; das nächste reguläre Treffen ist für den 1.11.2026 angesetzt.",
      blocks: [
        { h: "Warum ist der Ölpreis zuletzt weiter gestiegen?", items: [
          { tag: "fakt", text: "Brent-Rohöl notierte am Samstagmorgen, 24.10., bei rund 116,7 bis 117,4 Dollar je Barrel, die US-Ölsorte WTI bei rund 103,3 Dollar; seit Jahresbeginn 2026 ist Brent laut einer Quelle um über 85 % gestiegen.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die anhaltende Eskalation am Golf, darunter einen gemeldeten Huthi-Angriff auf das saudische Verteidigungsministerium in Riad sowie die Sorge vor einer weiteren Zuspitzung des seit dem 28.2.2026 andauernden Konflikts rund um den Iran.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "Zusätzlich fielen die US-Rohölbestände in der Woche bis 16.10. um 3,1 Mio. Barrel auf 412,5 Mio. Barrel, was laut Berichten ebenfalls zum Preisanstieg beitrug." }
        ]},
        { h: "Wie hat sich der europäische Gaspreis entwickelt?", items: [
          { tag: "unbestaetigt", text: "Der TTF-Referenzpreis liegt seit dem 20.10. durchgehend über 90 Euro je Megawattstunde – Quellen nennen für die einzelnen Tage leicht unterschiedliche Werte zwischen rund 89,57 Euro (21.10.) und rund 93,19 Euro (23.10.); nach einer Quelle ist der TTF-Preis seit Jahresbeginn 2026 um rund 214 % gestiegen.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die Konkurrenz um LNG-Lieferungen vor dem Winter, Unsicherheiten im Nahen Osten und die im Vorjahresvergleich niedrigeren Speicherfüllstände in Europa." }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern und der OPEC+?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22./23.10. bei 61,1 % Füllstand (151,1 TWh) – leicht höher als die 60,4 % vom 15./16.10.; die Behörde bewertet das Risiko einer angespannten Gasversorgung weiterhin als „gering”. In der Woche vom 14. bis 20.10. wurden 17,5 TWh per Pipeline und 1,6 TWh über deutsche LNG-Terminals importiert, bei einer durchschnittlichen LNG-Terminalauslastung von 37,2 %.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Die OPEC+ beließ ihre Förderquoten für November beim Treffen am 4.10. unverändert (unter anderem Saudi-Arabien 10,5 Mio. Barrel pro Tag, Russland 9,9 Mio.); das nächste reguläre Treffen ist für den 1.11.2026 angesetzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl der Ölpreis als auch der europäische Gaspreis zuletzt gleichzeitig auf mehrjährige beziehungsweise mehrmonatige Höchststände gestiegen sind – Öl wegen der Eskalation am Golf, Gas wegen der Konkurrenz um LNG vor dem Winter –, zeigt, wie stark geopolitische und saisonale Faktoren die Energiepreise derzeit gemeinsam treiben.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "oilprice.com: Brent Hits $114+ as Houthi Attacks Threaten Saudi Energy Infrastructure", url: "https://oilprice.com/Latest-Energy-News/World-News/Brent-Hits-114-as-Houthi-Attacks-Threaten-Saudi-Energy-Infrastructure.html" },
        { title: "Handelsblatt: Energiepreise – Öl fällt, doch Gas ist so teuer wie zuletzt Ende 2022", url: "https://www.handelsblatt.com/finanzen/maerkte/devisen-rohstoffe/energiepreise-oel-faellt-doch-gas-ist-so-teuer-wie-zuletzt-ende-2022/100263581.html" },
        { title: "it-boltwise.de: Erdgas-Preisdruck in Europa – TTF steigt auf 89,57 Euro je MWh", url: "https://www.it-boltwise.de/erdgas-preisdruck-in-europa-ttf-steigt-auf-8957-euro-je-mwh.html" },
        { title: "Bundesnetzagentur: Aktuelle Gasversorgung", url: "https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html" },
        { title: "Enerdata: OPEC+ keeps November 2026 production targets unchanged amid supply disruptions", url: "https://www.enerdata.net/publications/daily-energy-news/opec-keeps-november-2026-production-targets-unchanged-amid-supply-disruptions.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX schloss die Woche bis Freitag, 23.10., rund 1,7 % im Minus (zuletzt 25.181,65 Punkte, −0,75 %); der Euro Stoxx 50 verlor in der Woche rund 2,2 %, auch Dow Jones (−1,23 %) und S&P 500 (−0,52 %) gaben am Freitag nach." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund nennen Berichte einen schwachen französischen Einkaufsmanagerindex (48,4 Punkte), anhaltende Sorgen um Frankreichs Haushalt, den auf über 116 Dollar gestiegenen Ölpreis und eine längere Verlustserie beim Halbleiterindex SOX." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Marktplattformen wie Kalshi, Polymarket und CME-Futures preisen für die Fed-Sitzung am 27./28.10. mit rund 86 bis 93 % überwiegend eine Zinspause ein; Fed-Chef Kevin Warsh gibt laut CNBC bewusst keine Forward Guidance." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Fed-Chef Kevin Warsh hatte im September mit einer überraschenden Zinserhöhung auf 3,75 bis 4,00 % überrascht; seither verweigert er laut Berichten jede Vorab-Festlegung für künftige Sitzungen." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite fiel laut CNBC in dieser Woche auf rund 5,00 %, da Anleger angesichts der Sorgen um KI-Investitionen Schutz in Anleihen suchten; der Fed-Leitzins liegt bei 3,75 bis 4,00 %." },
    "gold-why": { tag: "einordnung", story: 3, text: "Gold notierte am Freitag bei rund 4.000 bis 4.027 Dollar und damit weiterhin deutlich unter dem Rekordhoch vom Dienstag (4.381,21 Dollar) – ein Bericht beschreibt den Goldpreis weiterhin als „unter Druck”." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin notierte am Freitag je nach Quelle zwischen rund 81.330 und 81.675 Dollar, nahezu unverändert gegenüber Donnerstag und weiterhin deutlich unter seinem Allzeithoch vom 6.10.2025." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die EZB hält ihren Einlagensatz vor der Sitzung am 29.10. bei 2,50 %; der Markt preist laut Berichten rund 91 % Wahrscheinlichkeit für eine erneute Zinspause ein, auch weil die steigende französische Risikoprämie wie eine zusätzliche Straffung wirkt." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone stieg im September laut Eurostat-Schnellschätzung auf 3,8 % (von 3,2 % im August) – den höchsten Stand seit September 2023; in Deutschland lag sie laut Destatis bei 3,3 %." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 erneut auf 160,7 Mrd. Euro; die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11., die abschließende Bundestagsabstimmung für den 27.11.2026 angesetzt." },
    "debt-brake": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof warnt vor einem bis 2030 auf 31,2 % steigenden Deckungslückenwert und vor einem ungedeckten Konsolidierungsbedarf von rund 108 Mrd. Euro für 2028 bis 2030." },
    "landtagswahl-why": { tag: "unbestaetigt", story: 6, text: "Der aktuelle ARD-DeutschlandTrend sieht die AfD bundesweit unverändert bei 27 %, CDU/CSU bei 20 % und die SPD bei 13 %; der Durchschnitt mehrerer Institute (Stand 23.10.) nennt 27,6 % für die AfD." },
    "coalition-majority": { tag: "fakt", story: 6, text: "Nur 10 % der Befragten zeigten sich im aktuellen ARD-DeutschlandTrend zufrieden mit der Arbeit von Bundeskanzler Merz und der Koalition – laut Infratest dimap ein historischer Tiefstand seit Beginn der Erhebung 1997." },
    "why-oil-up-geo": { tag: "fakt", story: 15, text: "Brent-Rohöl stieg zuletzt auf rund 116 bis 117 Dollar je Barrel – Berichte nennen als Hintergrund die erneute Eskalation am Golf, darunter einen gemeldeten Huthi-Angriff auf das saudische Verteidigungsministerium in Riad." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Der Oktober markiert laut UKMTO die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Kriegsbeginn Ende Februar 2026; CENTCOM und Iran machen weiterhin gegensätzliche Angaben zur Kontrolle der Wasserstraße." },
    "defence-order": { tag: "unbestaetigt", story: 10, text: "Zum Arminius-Programm gibt es weiterhin keinen finalen Vertrag; die parlamentarische Befassung ist für den 9.12.2026 angesetzt, Rheinmetalls Anteil wird auf rund 12,4 Mrd. Euro geschätzt." },
    "defence-stocks": { tag: "fakt", story: 11, text: "RTX meldete am 20.10. einen Rekord-Auftragsbestand von 340 Mrd. Dollar, Lockheed Martin am 22.10. einen Rekordwert von 292 Mrd. Dollar; beide Aktien reagierten positiv auf die Quartalszahlen." },
    "nato-target": { tag: "fakt", story: 11, text: "Saab erhielt am 15.10. einen Auftrag der schwedischen Beschaffungsbehörde FMV über rund 116 bis 131 Mio. Euro für einen neuen Flugsteuerrechner für das Kampfflugzeug Gripen." },
    "ma-steps": { tag: "fakt", story: 12, text: "LSEG kauft den Kreditmarkt-Datenanbieter Octus von Permira für 3,5 Mrd. Dollar; EQT und Qiagen halten an ihrer am 21./22.10. vereinbarten Übernahme für rund 10,8 Mrd. Euro fest." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "BASF soll laut Kreisen sein Angebot für Evonik auf 24 Euro je Aktie (Gesamtwert über 11 Mrd. Euro) erhöht haben; weder BASF noch Evonik haben dies offiziell bestätigt." },
    "deal-risks": { tag: "unbestaetigt", story: 12, text: "Die Verwaltungsräte von Tesla und SpaceX prüfen in jeweils unabhängigen Ausschüssen eine mögliche Fusion; Elon Musk ist wegen eines Interessenkonflikts nicht an den Gesprächen beteiligt, ein verbindliches Angebot liegt nicht vor." },
    "private-credit-what": { tag: "fakt", story: 13, text: "S&P senkte den Ausblick für Blackstones Private-Credit-Flaggschifffonds BCRED von „positiv” auf „stabil”, nachdem Abschreibungen aus den Jahrgängen 2021/22 den Nettoinventarwert belastet hatten." },
    "redemption-limits": { tag: "fakt", story: 13, text: "Bei BCRED wollten Anleger im dritten Quartal 2026 erneut rund 10 % des Nettoinventarwerts zurückziehen – doppelt so viel wie das vertragliche Quartalslimit von 5 %." },
    "nonaccrual-default": { tag: "unbestaetigt", story: 13, text: "Blue Owl verzeichnete laut einem Bericht Rücknahmewünsche von rund 39 % bei einem 5-Mrd.-Dollar-Technologie-Kreditfonds." },
    "ai-capex": { tag: "fakt", story: 14, text: "Meta hob seine Investitionsprognose für 2026 nach den Quartalszahlen vom 21.10. erneut an, auf 135 bis 145 Mrd. Dollar, bei einem negativen freien Cashflow von −2,1 Mrd. Dollar im dritten Quartal." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Der Halbleiterindex SOX verzeichnete am 23.10. laut Berichten die längste Verlustserie seit Oktober 2008 (acht Tage in Folge, −16 % seit dem Hoch vom 6.10.), während Samsung und SK Hynix nach starken südkoreanischen Exportdaten deutlich zulegten." },
    "circular-financing": { tag: "fakt", story: 14, text: "CoreWeaves 5-Jahres-Kreditausfallversicherungen stiegen zeitweise auf über 1.140 Basispunkte; die implizite Ausfallwahrscheinlichkeit über 5 Jahre liegt laut Berechnungen bei rund 60 bis 64 %." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22./23.10. bei 61,1 % Füllstand (151,1 TWh), leicht höher als die 60,4 % vom 15./16.10." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Die OPEC+ beließ ihre Förderquoten für November beim Treffen am 4.10. unverändert; das nächste reguläre Treffen ist für den 1.11.2026 angesetzt." },
    "gas-ttf": { tag: "unbestaetigt", story: 15, text: "Der europäische Gaspreis TTF notiert seit dem 20.10. durchgehend über 90 Euro je Megawattstunde – je nach Quelle zwischen rund 89,57 und 93,19 Euro." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent stieg zuletzt auf rund 116 bis 117 Dollar je Barrel; Öl- und Gaspreise bleiben damit Belastungsfaktoren für Sprit-, Heiz- und Transportkosten in Europa." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Wie schloss der DAX am Freitag, 23.10.2026?",
      options: [
        "26.702,86 Punkte (+1,05 %)",
        "25.181,65 Punkte (−0,75 %)",
        "25.645,04 Punkte (+1,35 %)",
        "24.000,00 Punkte (−5,0 %)"
      ],
      answer: 1,
      explain: "Der DAX fiel am Freitag um 0,75 % (−190 Punkte) auf 25.181,65 Punkte und schloss die Handelswoche rund 1,7 % im Minus."
    },
    {
      topic: "Zinsen", type: "Zusammenhang", story: 2,
      q: "Angenommen, Fed-Chef Kevin Warsh würde bei der Sitzung am 27./28.10.2026 entgegen der Markterwartung den Leitzins senken statt ihn zu halten. Was würde das unter sonst gleichen Bedingungen am ehesten für die Rendite von US-Staatsanleihen und für stark fremdfinanzierte KI-Firmen wie CoreWeave bedeuten?",
      options: [
        "Sinkende Renditen und tendenziell Entlastung für Firmen wie CoreWeave",
        "Steigende Renditen und zusätzlicher Druck auf Firmen wie CoreWeave",
        "Keine Auswirkung, da Leitzins-Entscheidungen Anleiherenditen grundsätzlich nicht beeinflussen",
        "Eine automatische Erhöhung des Leitzinses im Dezember"
      ],
      answer: 0,
      explain: "Eine überraschende Zinssenkung würde tendenziell die Anleiherenditen sinken lassen und damit die Finanzierungskosten für stark fremdfinanzierte, auf künftiges Wachstum setzende Unternehmen wie CoreWeave senken."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 8,
      q: "Was meldete das UK Maritime Trade Operations Centre (UKMTO) für den Oktober 2026 zur Straße von Hormus?",
      options: [
        "Eine vollständige Sperrung der Wasserstraße",
        "Einen Waffenstillstand aller beteiligten Parteien",
        "Die höchste Zahl an Schiffsangriffen seit Kriegsbeginn Ende Februar 2026",
        "Einen Rückgang der Angriffe auf null"
      ],
      answer: 2,
      explain: "Laut UKMTO verzeichnete der Oktober 2026 die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Beginn des Konflikts Ende Februar 2026."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 15,
      q: "Angenommen, die Angriffe auf saudische Energie- und Verteidigungsinfrastruktur würden sich in den kommenden Wochen weiter verschärfen. Was würde das unter sonst gleichen Bedingungen am ehesten für den europäischen Gaspreis TTF und die Inflation in der Eurozone bedeuten?",
      options: [
        "Einen automatisch sinkenden Gaspreis und sinkende Inflation",
        "Keine Auswirkung, da Öl- und Gaspreise unabhängig voneinander sind",
        "Eine automatische Zinssenkung der EZB",
        "Tendenziell einen weiter steigenden Gaspreis und zusätzlichen Druck auf die Inflation"
      ],
      answer: 3,
      explain: "Eine weitere Eskalation am Golf würde laut der in Meldung 15 beschriebenen Kette tendenziell Öl- und Gaspreise zusätzlich treiben und damit auch die Inflation in der Eurozone belasten."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Wie viel Prozent der Befragten zeigten sich im aktuellen ARD-DeutschlandTrend zufrieden mit der Arbeit von Bundeskanzler Merz?",
      options: [
        "50 %",
        "10 %",
        "25 %",
        "88 %"
      ],
      answer: 1,
      explain: "Nur 10 % der Befragten zeigten sich zufrieden mit der Arbeit von Bundeskanzler Merz – laut Infratest dimap der niedrigste Wert für einen Kanzler seit Beginn der Erhebung 1997."
    }
  ]
};
