// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-25",
  dateLabel: "Sonntag, 25. Oktober 2026",
  updatedLabel: "Recherchestand 25.10.2026",
  marketNote: "Diese Ausgabe entsteht am Sonntag, 25.10.2026. Die Börsen in Europa und den USA sind am Wochenende geschlossen, deshalb gilt für DAX, Euro Stoxx 50, Dow Jones, S&P 500, Nasdaq Composite, den Halbleiterindex SOX sowie für die Renditen von US- und Bundesanleihen weiterhin der Schlussstand von Freitag, 23.10.2026. Auch Brent-Rohöl und WTI handelten am Wochenende nicht neu; hier gilt der offizielle Freitags-Settlement-Stand, auch wenn Berichte über neue Angriffe am Golf von Samstag und Sonntag vorliegen. Devisen- und Goldkurse zeigten übers Wochenende nur minimale, nicht offizielle Bewegungen im Interbankenhandel. Bitcoin handelt rund um die Uhr; hier wird der aktuellste verfügbare Stand vom Sonntagmorgen gezeigt. In der Nacht zum Sonntag wurden in Europa die Uhren auf Winterzeit umgestellt (MEZ, UTC+1); die USA stellen erst am 1.11. um, sodass sich die Zeitdifferenz zur US-Ostküste bis dahin auf 5 Stunden verringert – wichtig für die Fed-Sitzung am 28.10. (siehe Meldung 2). Einzelne Werte (insbesondere Gold und die Bund-Rendite) werden von verschiedenen Quellen zu leicht unterschiedlichen Zeitpunkten und mit leicht abweichenden Werten gemessen; Abweichungen sind entsprechend gekennzeichnet (Meldungen 1, 3).",

  top: [
    { text: "DAX (−0,75 % auf 25.181,65 Pkt.) und Euro Stoxx 50 (−0,3 % auf rund 6.068 Pkt.) schlossen die Handelswoche bis Freitag, 23.10., mit Verlusten (Wochenbilanz DAX rund −1,7 %, Euro Stoxx 50 rund −2,2 %); auch Dow Jones (−1,23 %) und S&P 500 (−0,52 %) gaben nach. Der Halbleiterindex SOX blieb im Oktober außergewöhnlich volatil – Berichte zur genauen Länge und zum Zeitpunkt seiner „längsten Verlustserie seit 2008” widersprechen sich teils, am 23. und 24.10. zeigte sich zuletzt eine Erholung, angeführt von Speicherchip-Werten.", ref: "s:1" },
    { text: "Die Huthi-Miliz im Jemen griff über das Wochenende nach eigenen Angaben erneut saudische Ziele an; am Sonntag, 25.10., fing die saudisch geführte Koalition nach Berichten eine weitere auf Riad gerichtete Rakete ab. Brent-Rohöl erreichte am Freitag mit einem Settlement von 116,72 Dollar je Barrel den höchsten Stand seit Ende April 2026.", ref: "s:8" },
    { text: "Präsident Selenskyj bestätigte am 23.10., dass sich Verhandlungsteams aus Ukraine, Russland und den USA laut Kreml-Angaben „um den 10. November” in Abu Dhabi treffen sollen, zunächst auf technischer Ebene. Er bleibt offen dafür, die aktuelle Frontlinie als ersten Schritt einzufrieren, fordert dafür aber belastbare Sicherheitsgarantien; der Kreml verlangt laut Berichten weiterhin ein Nachkriegs-„Sicherheitssystem” für beide Länder.", ref: "s:7" },
    { text: "Beim Chemiekonzern Evonik soll BASF laut Kreisen sein Angebot auf 24 Euro je Aktie (über 11 Mrd. Euro) erhöht haben – weiterhin nicht offiziell bestätigt. Der Börsenbetreiber LSEG kauft den Datenanbieter Octus von Permira für 3,5 Mrd. Dollar, EQT übernimmt Qiagen für rund 10,8 Mrd. Euro; bei Tesla und SpaceX prüfen unabhängige Ausschüsse eine mögliche Fusion, ohne verbindliches Angebot.", ref: "s:11" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.181,65", change: "−0,75 % (−190 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Wochenbilanz", text: "Der DAX schloss die Handelswoche bis Freitag rund 1,7 % im Minus." },
        { label: "Montag-Ausblick", text: "Für den Handelsstart am Montag, 26.10., deuten Berichte eine leicht schwächere Future-Indikation an – eine Vorab-Einschätzung ohne Gewähr, da sich bis zur Eröffnung noch Nachrichten ändern können." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Der schwache französische Einkaufsmanagerindex (48,4 Punkte) und anhaltende Sorgen um Frankreichs Haushalt belasteten die Stimmung in der Woche; mehr dazu in Meldung 4.",
          "Der auf 116,72 Dollar gestiegene Ölpreis nach der Eskalation am Golf verstärkte die Verunsicherung zusätzlich; mehr dazu in Meldung 8.",
          "Die Rheinmetall-Aktie blieb trotz einer leichten Erholung am Freitag (+0,39 % auf 1.019,00 Euro) für die Woche im Minus; mehr dazu in Meldung 9."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur volatilen Entwicklung des Halbleiterindex SOX in Meldung 1 und Meldung 13.", ref: "s:13" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Frankreich-Sorgen lassen Dax weiter absacken", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-frankreich-sorgen-lassen-12180188" }
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
          "Der auf 116,72 Dollar gestiegene Ölpreis belastete die Stimmung (Settlement Freitag, höchster Stand seit Ende April).",
          "Frankreichs 10-Jahres-Rendite erreichte am 22.10. mit 5,06 % einen 24-Jahres-Höchststand; mehr dazu in Meldung 4."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB-Zinsentscheidung am 29.10. und die französische Risikoprämie werden in Meldung 4 behandelt.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.3 percent lower as oil and luxury slide", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-3-percent-lower-as-oil-and-luxury-slide/70400590" }
    },
    "sp500": {
      label: "S&P 500", value: "7.623,68", change: "−0,52 % (−39,75 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Freitagsschluss: 52.215,16 Punkte (−1,23 %, −652,82 Pkt.)." },
        { label: "Volatilitätsindex VIX", text: "Der VIX stieg laut Berichten am Freitag erstmals seit Juni wieder über die Marke von 20 Punkten – ein Zeichen für zunehmende Nervosität am Markt." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Der auf über 116 Dollar gestiegene Ölpreis nährte Inflationssorgen vor der Fed-Sitzung in der kommenden Woche.",
          "Der Verkaufsdruck weitete sich über den KI-Handel hinaus aus; mehr zu CoreWeave, Meta und dem Halbleitersektor in Meldung 13."
        ]
      },
      important: [
        { area: "Fed", text: "Die Markterwartungen vor der FOMC-Sitzung am 28.10. werden in Meldung 2 behandelt.", ref: "s:2" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Dow sinks 600 points, S&P 500, Nasdaq drop", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-23-dow-sp-500-nasdaq-tesla-meta-093000521.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.955,34", change: "−0,21 % (−53,52 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Chip-Werte", text: "Der Halbleiterindex SOX zeigte sich zuletzt deutlich volatiler als die Nasdaq insgesamt – nach einer historischen Verlustserie folgte am 23. und 24.10. eine Erholung, angeführt von Speicherchip-Werten wie SK Hynix, SanDisk und Micron." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Technologiewerte stabilisierten sich laut Berichten etwas, blieben aber insgesamt volatil angesichts der KI-Bewertungsdebatte."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Meta, Nvidia und dem Halbleitersektor in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "bbntimes.com: Dow Jones Today – DJIA Falls to 52,215.16", url: "https://bbntimes.com/global-economy/dow-jones-today-djia-falls-to-52-215-16-as-american-express-slides-and-oil-prices-jump" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,1193 (EZB-Referenzkurs Fr)", change: "leicht niedriger als 1,1234 am Mittwoch; Wochenend-Indikation rund 1,1200–1,1204", dir: "down", asof: "EZB-Referenzkurs Fr 23.10.26 (keine EZB-Notierung am Wochenende)", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Wochenend-Handel", text: "Da die EZB am Wochenende keinen offiziellen Referenzkurs veröffentlicht, nennt eine Quelle für Samstag einen geringfügig höheren, nicht offiziellen Interbankenkurs von rund 1,1204 Dollar – eine unbestätigte, nur begrenzt belastbare Momentaufnahme." }
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
      label: "10Y US Treasury", value: "≈ 5,00 %", change: "+0,04 Pp. ggü. Donnerstag, weiterhin niedriger als die Vorwoche (5,07–5,13 %)", dir: "up", asof: "Stand Fr 23.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,00 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,00 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 % (seit der Erhöhung am 16.9.2026); die Rendite liegt damit gut einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Rendite legte am Freitag leicht zu, blieb aber unter den Vorwochenwerten, da Anleger angesichts der Sorgen um KI-Investitionen weiterhin Schutz in Anleihen suchten.",
          "Die FOMC-Blackout-Periode läuft seit 17.10. bis zum 29.10.; die Zinsentscheidung fällt am 28.10. um 14 Uhr Eastern Time (19 Uhr MEZ, da Europa bereits am 25.10. auf Winterzeit umgestellt hat)."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Blackout-Periode, zu Fed-Chef Kevin Warsh und den Marktwetten vor der Sitzung am 28.10. in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "etftrends.com: Treasury Yields Snapshot, October 23, 2026", url: "https://www.etftrends.com/fixed-income-content-hub/treasury-yields-snapshot-october-23-2026/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,30–3,46 % (Quellen weichen weiterhin ab)", change: "uneinheitlich ggü. 3,41–3,42 % am Mittwoch", dir: "down", asof: "Stand Fr 23.10.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Bund-Future", text: "Der Bund-Future fiel laut einer Quelle um 0,16 % auf 122,13 Punkte – ein fallender Future-Preis entspricht üblicherweise einer leicht steigenden Rendite; die verfügbaren Quellen nennen für Freitag weiterhin unterschiedliche Werte zwischen rund 3,30 % und 3,46 %." },
        { label: "Frankreich", text: "Frankreichs 10-Jahres-Rendite liegt mit rund 5,04 % deutlich darüber; mehr dazu in Meldung 4." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Im Fokus standen weiterhin die schwachen Einkaufsmanagerindizes (PMI) aus der Eurozone und insbesondere Frankreich sowie die anhaltende französische Haushaltslage."
        ]
      },
      important: [
        { area: "Frankreich", text: "Die französische 10-Jahres-Rendite erreichte am 22.10. mit 5,06 % einen 24-Jahres-Höchststand; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "cbonds.de: 10-jährige Bundesanleihe", url: "https://cbonds.de/10-year-german-government-bond-yield/" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.990–4.030 $ (Quellen weichen ab)", change: "−0,8 bis −2,0 % ggü. Donnerstag, übers Wochenende kaum Bewegung", dir: "down", asof: "Stand Fr 23.10.26 / Sa 24.10. früh", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 3.990 bis 4.030 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Rekordhoch Dienstag", text: "Gold liegt damit weiterhin deutlich unter seinem Rekordhoch von 4.381,21 Dollar vom Dienstag, 20.10." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Gewinnmitnahmen nach dem Rekordhoch; da Gold am Wochenende nur außerbörslich in geringem Umfang gehandelt wird, blieb der Preis zwischen Freitag und Samstag nahezu unverändert."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung am 28.10. in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "tradingeconomics.com: Gold", url: "https://tradingeconomics.com/commodity/gold" }
    },
    "brent": {
      label: "Brent Oil", value: "116,72 $ (Fr-Settlement)", change: "+3,14 % (+3,55 $) ggü. Donnerstag, Wochenplus rund 6,2 %", dir: "up", asof: "Settlement Fr 23.10.26 (keine neue Notierung übers Wochenende)", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 117 Dollar je Fass (159 Liter) sind umgerechnet deutlich mehr als die rund 110 Dollar vom Donnerstag.",
      compare: [
        { label: "WTI", text: "Die US-Ölsorte WTI settelte am Freitag bei rund 103,27 bis 103,44 Dollar je Barrel (+3,8 %)." },
        { label: "Höchststand", text: "116,72 Dollar sind laut Berichten der höchste Brent-Settlement-Stand seit dem 29. April 2026." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Huthi-Angriffe auf Saudi-Arabien, die sich über das Wochenende fortsetzten; mehr dazu in Meldung 8.",
          "Eine unbestätigte iranische Behauptung, mehrere Tanker in der Straße von Hormus beschädigt zu haben, sowie die wachsende Erwartung erneuter US-Luftschläge gegen Iran."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf und in der Straße von Hormus in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "FinanceFeeds: Brent Crude Oil Price: $116.72 Settle", url: "https://financefeeds.com/brent-crude-oil-price-116-72-saturday-week-ahead-houthi-saudi-fed-28-october-bull-120-bear-108/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 80.850 $", change: "+0,06 % binnen 24h (Stand So 25.10. morgens), kaum verändert übers Wochenende", dir: "flat", asof: "Stand So 25.10.26 morgens", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin rund 36 % unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025." },
        { label: "Wochenendverlauf", text: "Von rund 81.300 bis 81.700 Dollar am Freitag fiel Bitcoin bis Samstagmittag auf rund 80.500 bis 80.800 Dollar und stabilisierte sich bis Sonntagmorgen bei rund 80.850 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die leichte Bewegung übers Wochenende wurde kein spezifischer Einzelgrund genannt; eine Quelle verweist stattdessen auf die näher rückende Fed-Sitzung am 28.10."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "cryptoticker.io: Bitcoin Kurs 80.853 Dollar – Fed-Termin jetzt um 19 Uhr", url: "https://cryptoticker.io/de/bitcoin-kurs-winterzeit-fed-fenster-25-oktober-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitagsschluss-woche-10-25", cats: ["markets"], when: "Schluss Fr 23.10.2026 · Wochenbilanz bis 23.10.2026",
      headline: "DAX und Euro Stoxx 50 schließen die Woche mit Verlusten, Wall Street gibt am Freitag nach, Berichte zur „längsten SOX-Verlustserie seit 2008” widersprechen sich beim genauen Zeitpunkt",
      sec30: "Der DAX schloss am Freitag, 23.10., bei 25.181,65 Punkten (−0,75 %, Wochenbilanz rund −1,7 %), der Euro Stoxx 50 bei rund 6.068 Punkten (−0,3 %, Wochenbilanz rund −2,2 %). Auch die US-Indizes gaben nach: Dow Jones −1,23 % auf 52.215,16 Punkte, S&P 500 −0,52 % auf 7.623,68 Punkte, Nasdaq Composite −0,21 % auf 25.955,34 Punkte; der Volatilitätsindex VIX stieg laut Berichten erstmals seit Juni wieder über 20 Punkte. Der Halbleiterindex SOX war im Oktober außergewöhnlich volatil: Mehrere Berichte beschreiben für den 23.10. einen achten Verlusttag in Folge, während andere Quellen eine achttägige Verlustserie bereits auf den Zeitraum 7. bis 16.10. datieren – die genaue zeitliche Einordnung bleibt in den verfügbaren Quellen widersprüchlich. Übereinstimmend berichten Quellen aber, dass der Index am 23. und 24.10. wieder zulegte, angeführt von Speicherchip-Werten.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX fiel am Freitag um 0,75 % (−190 Punkte) auf 25.181,65 Punkte und schloss die Handelswoche rund 1,7 % im Minus; der Euro Stoxx 50 fiel um 0,3 % (−19 Punkte) auf rund 6.068 Punkte, Wochenbilanz rund −2,2 %.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte den auf 116,72 Dollar gestiegenen Ölpreis (Meldung 8) und Frankreichs auf einen 24-Jahres-Höchststand gestiegene Anleiherendite (Meldung 4); die Rheinmetall-Aktie blieb trotz einer leichten Erholung am Freitag für die Woche im Minus (Meldung 9)." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes, und was belastete zusätzlich?", items: [
          { tag: "fakt", text: "Der Dow Jones fiel um 1,23 % (−652,82 Punkte) auf 52.215,16 Punkte, der S&P 500 um 0,52 % (−39,75 Punkte) auf 7.623,68 Punkte, der Nasdaq Composite um 0,21 % (−53,52 Punkte) auf 25.955,34 Punkte. Der VIX stieg laut Berichten erstmals seit Juni wieder über 20 Punkte.",
            ask: [{ label: "Mehr zur Fed-Sitzung am 28.10.", ref: "s:2" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte den auf über 116 Dollar gestiegenen Ölpreis, der Inflationssorgen vor der Fed-Sitzung nährte; der Verkaufsdruck weitete sich dabei über den KI-Handel hinaus aus." }
        ]},
        { h: "Wie entwickelte sich der Halbleiterindex SOX – und warum widersprechen sich Berichte?", items: [
          { tag: "unbestaetigt", text: "Mehrere Berichte vom 23.10. beschreiben für diesen Tag einen achten Verlusttag in Folge beim SOX – nach diesen Angaben die längste Verlustserie seit Oktober 2008. Andere, ebenfalls recherchierte Quellen datieren eine achttägige, rund 15,7 % schwere Verlustserie bereits auf den Zeitraum 7. bis 16.10. (Schlussstand damals 11.137,29 Punkte). Welche Angabe sich auf welchen exakten Zeitraum bezieht, lässt sich aus den verfügbaren Quellen nicht abschließend klären.",
            ask: [{ label: "Mehr zu CoreWeave, Meta und dem Halbleitersektor", ref: "s:13" }] },
          { tag: "fakt", text: "Unabhängig vom genauen Startpunkt sind sich mehrere Quellen einig, dass der SOX in der Woche vom 19. bis 23.10. zeitweise bis zu 18,4 % unter seinem Oktoberhoch notierte, am 23.10. aber um rund 1,61 % zulegte und am 24.10. (SOXX-ETF, +0,53 %) die Erholung fortsetzte – angeführt von Speicherchip-Werten wie SK Hynix, SanDisk und Micron; der Index testete dabei erstmals seit 16 Monaten seine 200-Tage-Linie." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass sowohl europäische als auch US-Indizes am Freitag nachgaben, während der Halbleiterindex SOX nach einer heftigen, in ihrer genauen Dauer umstrittenen Verlustserie zuletzt wieder zulegte, zeigt, wie eng Konjunktursorgen, der steigende Ölpreis und die KI-Bewertungsdebatte derzeit zusammenhängen – und wie schnell sich die Stimmung dabei innerhalb weniger Tage drehen kann. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, Gold/Bitcoin/Bund-Rendite in Meldung 3, die Lage am Golf in Meldung 8, CoreWeave/Meta/SOX im Detail in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Frankreich-Sorgen lassen Dax weiter absacken", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-frankreich-sorgen-lassen-12180188" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 closes 0.3 percent lower as oil and luxury slide", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-closes-0-3-percent-lower-as-oil-and-luxury-slide/70400590" },
        { title: "Yahoo Finance: Stock market today – Dow sinks 600 points, S&P 500, Nasdaq drop", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-23-dow-sp-500-nasdaq-tesla-meta-093000521.html" },
        { title: "bbntimes.com: Dow Jones Today – DJIA Falls to 52,215.16", url: "https://bbntimes.com/global-economy/dow-jones-today-djia-falls-to-52-215-16-as-american-express-slides-and-oil-prices-jump" },
        { title: "Yahoo Finance: Chip stocks just fell 8 days in a row", url: "https://finance.yahoo.com/markets/stocks/articles/chip-stocks-just-fell-8-161520543.html" },
        { title: "OKX: SOX gained 1.61%", url: "https://www.okx.com/en-us/orbit/insight/90537074978272" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED/WARSH/US-DATEN */
    {
      id: "fed-warsh-blackout-us-daten-10-25", cats: ["markets", "economy"], when: "FOMC-Blackout 17.–29.10. · Sitzung 28.10.2026, 19 Uhr MEZ · US-Konjunkturdaten Sept./Okt. 2026",
      headline: "Fed-Chef Kevin Warsh hält sich an die Blackout-Periode vor der Oktober-Sitzung, Markterwartung für eine Zinspause steigt auf rund 94 Prozent",
      sec30: "Die FOMC-Blackout-Periode läuft seit Samstag, 17.10., bis Donnerstag, 29.10.; die Zinsentscheidung fällt am Mittwoch, 28.10., um 14 Uhr Eastern Time – wegen der Zeitumstellung in Europa am 25.10. entspricht das 19 Uhr MEZ (die USA stellen erst am 1.11. um). Fed-Chef Kevin Warsh sagte bei seinem letzten öffentlichen Auftritt vor der Blackout-Periode am 16.10. bei den IWF/Weltbank-Jahrestagungen in Bangkok, die Wirtschaft habe sich seit der September-Erhöhung „largely as expected” entwickelt, wollte sich aber nicht auf die Oktober-Entscheidung festlegen; er warnte zugleich vor einem möglichen KI-bedingten wirtschaftlichen Schock, der die Preisstabilität gefährden könnte. Danach stieg die von Marktplattformen wie Kalshi und Polymarket eingepreiste Wahrscheinlichkeit für eine Zinspause auf rund 94 %. Die US-Erzeugerpreise waren im September um 1,3 % gegenüber dem Vormonat gestiegen, die Verbraucherpreise um 0,6 % (+3,7 % zum Vorjahr); die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis 17.10. auf 194.000.",
      blocks: [
        { h: "Was sagte Fed-Chef Warsh vor Beginn der Blackout-Periode?", items: [
          { tag: "position", text: "Kevin Warsh erklärte am 16.10. bei den IWF/Weltbank-Jahrestagungen in Bangkok, die US-Wirtschaft habe sich seit der Zinserhöhung im September „largely as expected” entwickelt; er gab sinngemäß an, sich nicht auf einzelne Sitzungen festlegen zu wollen („I don't prejudge meetings”). Zugleich warnte er, der Weg der KI-Entwicklung werde „very bumpy”, und ein möglicher KI-bedingter wirtschaftlicher Schock könne die Preisstabilität gefährden – sah den Pfad langfristig aber als wohlstandsfördernd an.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, läuft vom 17.10. bis zum 29.10.; die Zinsentscheidung wird am Mittwoch, 28.10., um 14 Uhr Eastern Time bekanntgegeben – das entspricht wegen der europäischen Zeitumstellung am 25.10. nun 19 Uhr MEZ." }
        ]},
        { h: "Wie schätzen Marktplattformen die Oktober-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Nach Warshs Äußerungen stieg die von Kalshi und Polymarket eingepreiste Wahrscheinlichkeit für eine Zinspause auf rund 94 %, rund 6 % entfallen auf eine erneute Erhöhung und rund 2 % auf eine Senkung – ein Anstieg gegenüber der zuvor breiteren Spanne von 86 bis 93 % für eine Pause.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Welche aktuellen US-Konjunkturdaten spielen eine Rolle?", items: [
          { tag: "fakt", text: "Die US-Verbraucherpreise stiegen im September um 0,6 % gegenüber dem Vormonat und um 3,7 % gegenüber dem Vorjahr (Kernrate +0,3 % bzw. +2,6 %); die Erzeugerpreise legten um 1,3 % zum Vormonat zu (größter Anstieg seit März 2022).",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] },
          { tag: "fakt", text: "Die US-Einzelhandelsumsätze stiegen im September um 0,8 % gegenüber dem Vormonat auf 745,0 Mrd. Dollar; die Erstanträge auf Arbeitslosenhilfe fielen in der Woche bis 17.10. auf 194.000, der Vierwochenschnitt war laut Berichten der niedrigste seit 1969." },
          { tag: "unbestaetigt", text: "Der verzögerte September-Arbeitsmarktbericht (wegen eines Regierungsshutdowns erst am 2.10. veröffentlicht) zeigte mit nur +29.000 neuen Stellen eine deutliche Verlangsamung; die Arbeitslosenquote lag bei 4,2 %. Für den 28. oder 29.10. werden zudem neue PCE-Inflations- und BIP-Daten erwartet – Quellen nennen hierfür leicht unterschiedliche Termine." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung für eine Zinspause nach Warshs vorsichtigen, aber nicht alarmierenden Äußerungen weiter gestiegen ist, während Erzeuger- und Verbraucherpreise weiterhin über den Erwartungen liegen, zeigt, wie genau Anleger weiterhin jedes verfügbare Signal vor der Sitzung am 28.10. verfolgen." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1, die EZB-Seite und globale Zentralbanken in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite", "erzeugerpreise"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Axios: Warsh signals steady Fed outlook despite inflation jump", url: "https://www.axios.com/2026/10/16/warsh-federal-reserve-interest-rates" },
        { title: "CNBC: Fed's Warsh says AI development path will be 'very bumpy'", url: "https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html" },
        { title: "Yahoo Finance: Warsh boosts market expectations of Fed hold in October", url: "https://finance.yahoo.com/economy/policy/articles/warsh-boosts-market-expectations-fed-045741442.html" },
        { title: "BLS: Consumer Price Index – September 2026", url: "https://www.bls.gov/news.release/archives/cpi_10142026.htm" },
        { title: "BLS: Producer Price Index News Release", url: "https://www.bls.gov/news.release/ppi.nr0.htm" },
        { title: "PredictionMarketsPicks: Fed Rate Odds for October 2026", url: "https://predictionmarketspicks.com/articles/fed-rate-october-2026-odds-warsh-kalshi-polymarket-futures" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/BUND */
    {
      id: "gold-bitcoin-eurusd-bund-10-25", cats: ["markets"], when: "Stand Fr 23.10. bis So 25.10.2026",
      headline: "Gold bleibt nach seinem Rekordhoch unter Druck, Bitcoin pendelt übers Wochenende leicht nach unten, Quellen zur Bund-Rendite widersprechen sich weiterhin",
      sec30: "Gold notierte am Freitag je nach Quelle zwischen rund 3.990 und 4.030 Dollar je Feinunze und damit weiterhin deutlich unter seinem Rekordhoch vom Dienstag (4.381,21 Dollar); übers Wochenende bewegte sich der Preis kaum. Bitcoin fiel von rund 81.300 bis 81.700 Dollar am Freitag auf rund 80.500 bis 80.800 Dollar am Samstag und stabilisierte sich bis Sonntagmorgen bei rund 80.850 Dollar. Der EZB-Referenzkurs für den Euro lag am Freitag bei 1,1193 Dollar. Die Rendite zehnjähriger Bundesanleihen wird von Quellen für Freitag weiterhin uneinheitlich zwischen rund 3,30 % und 3,46 % angegeben.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold notierte am Freitag je nach Quelle und Messzeitpunkt zwischen rund 3.990 und 4.030 Dollar je Feinunze – ein Rückgang von rund 0,8 bis 2,0 % gegenüber Donnerstag und weiterhin deutlich unter dem Rekordhoch von 4.381,21 Dollar vom Dienstag, 20.10.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte anhaltende Gewinnmitnahmen nach dem Rekordhoch; da Gold am Wochenende kaum außerbörslich gehandelt wird, blieb der Preis zwischen Freitag und Samstag nahezu unverändert." }
        ]},
        { h: "Wie hat sich Bitcoin übers Wochenende entwickelt?", items: [
          { tag: "unbestaetigt", text: "Bitcoin fiel von rund 81.300 bis 81.700 Dollar am Freitag auf rund 80.500 bis 80.800 Dollar am Samstagmittag (−0,67 % binnen 24h) und stabilisierte sich bis Sonntagmorgen bei rund 80.850 Dollar (+0,06 % binnen 24h, Tagesspanne 79.263 bis 80.949 Dollar) – weiterhin rund 36 % unter dem Allzeithoch von 126.198,07 Dollar vom 6.10.2025.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie haben sich der Euro und die Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch; am Wochenende veröffentlicht die EZB keinen Referenzkurs, eine Quelle nennt für Samstag einen geringfügig höheren, nicht offiziellen Interbankenkurs von rund 1,1204 Dollar.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "unbestaetigt", text: "Zur Rendite zehnjähriger Bundesanleihen nennen Quellen für Freitag weiterhin unterschiedliche Werte zwischen rund 3,30 % und 3,46 %; der Bund-Future fiel laut einer Quelle um 0,16 % auf 122,13 Punkte. Im Fokus standen schwache Einkaufsmanagerindizes aus der Eurozone und insbesondere Frankreich.",
            ask: [{ label: "Mehr zur französischen Haushaltslage und zur EZB", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold nach seinem Rekordhoch weiter unter Druck bleibt und Bitcoin übers Wochenende nur leicht nachgab, während die Bund-Rendite je nach Quelle uneinheitlich bewertet wird, passt zu einer Phase, in der Anleger zwischen Sorgen um KI-Bewertungen, der französischen Haushaltslage und der näher rückenden Fed-Sitzung hin- und herschwanken. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Fed-Zinsentwicklung wird in Meldung 2 behandelt, die EZB-Seite in Meldung 4, der Ölpreis in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "tradingeconomics.com: Gold", url: "https://tradingeconomics.com/commodity/gold" },
        { title: "finanzen.at: Rohstoffe im Fokus – So bewegen sich Goldpreis & Co. am Samstagvormittag", url: "https://www.finanzen.at/nachrichten/rohstoffe/rohstoffe-im-fokus-so-bewegen-sich-goldpreis-&-co-am-samstagvormittag-1036661993" },
        { title: "cryptoticker.io: Bitcoin Kurs 80.806 Dollar unter der 50-Tage-Linie", url: "https://cryptoticker.io/de/bitcoin-kurs-50-tage-linie-24-oktober-2026/" },
        { title: "cryptoticker.io: Bitcoin Kurs 80.853 Dollar – Fed-Termin jetzt um 19 Uhr", url: "https://cryptoticker.io/de/bitcoin-kurs-winterzeit-fed-fenster-25-oktober-2026/" },
        { title: "cbonds.de: 10-jährige Bundesanleihe", url: "https://cbonds.de/10-year-german-government-bond-yield/" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/FRANKREICH/SCHNABEL/GLOBALE ZENTRALBANKEN/IWF */
    {
      id: "ezb-frankreich-schnabel-notenbanken-iwf-10-25", cats: ["economy", "world"], when: "EZB-Sitzung 29.10. · Schnabel-Frist 28.10. · Proteste Frankreich 17.10. · BoJ-Sitzung 29./30.10. · Eurozone-/DE-Inflation September 2026",
      headline: "EZB-Zinsentscheidung rückt näher, Frankreichs Anleiherendite erreicht einen 24-Jahres-Höchststand, Inflation in Eurozone und Deutschland bleibt erhöht",
      sec30: "Die EZB hält ihren Einlagensatz vor der Sitzung am 29.10. bei 2,50 %; der Markt preist laut Berichten zuletzt rund 93,5 % Wahrscheinlichkeit für eine erneute Pause ein. Frankreichs 10-Jahres-Rendite erreichte am 22.10. mit 5,06 % einen 24-Jahres-Höchststand und überstieg damit erstmals seit der Eurokrise die Rendite zehnjähriger US-Staatsanleihen; bis Freitag entspannte sie sich leicht auf rund 5,04 %, der Risikoaufschlag gegenüber Bundesanleihen (OAT/Bund-Spread) lag bei 171,8 Basispunkten. Frankreichs Schuldenstand erreichte im zweiten Quartal mit 3,6 Billionen Euro (119 % des BIP) einen Rekord; Premierminister Lecornus Haushaltsplan für 2027 sieht laut Berichten rund 61 Mrd. Euro an Einsparungen und neuen Abgaben vor, wogegen bereits am 17.10. rund 550.000 Menschen landesweit protestierten. Für die Schnabel-Nachfolge im EZB-Direktorium läuft die Nominierungsfrist am 28.10. ab; laut Berichten wird der frühere Bundesfinanzminister Jörg Kukies dafür nicht gehandelt, Spanien bringt stattdessen BIZ-Chef Pablo Hernández de Cos ins Spiel. Die Inflation in der Eurozone lag im September bei 3,8 %, in Deutschland bei 3,3 %.",
      blocks: [
        { h: "Wie ist der Stand bei der EZB-Zinsentscheidung am 29.10.?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Die Zinsentscheidung wird am 29.10. um 14:15 MEZ bekanntgegeben, die Pressekonferenz von Präsidentin Lagarde folgt um 14:45 MEZ.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "unbestaetigt", text: "Der Marktkonsens preist laut Berichten rund 93,5 % Wahrscheinlichkeit für eine erneute Zinspause am 29.10. ein, rund 7,5 % für eine Erhöhung um 25 Basispunkte." }
        ]},
        { h: "Welche Rolle spielt die französische Haushaltslage?", items: [
          { tag: "fakt", text: "Frankreichs 10-Jahres-Rendite erreichte am 22.10. mit 5,06 % einen 24-Jahres-Höchststand und überstieg damit erstmals seit der Eurokrise die Rendite zehnjähriger US-Staatsanleihen; bis Freitag entspannte sie sich leicht auf rund 5,04 %. Der Risikoaufschlag gegenüber deutschen Bundesanleihen (OAT/Bund-Spread) lag am 23.10. bei 171,8 Basispunkten. Frankreichs Schuldenstand erreichte im zweiten Quartal mit 3,6 Billionen Euro (119 % des BIP) einen Rekord." },
          { tag: "fakt", text: "Premierminister Sébastien Lecornu strebt für den Haushalt 2027 laut Berichten rund 61 Mrd. Euro an Ausgabenkürzungen und neuen Abgaben an. Bereits am 17.10. protestierten landesweit rund 550.000 Menschen (davon 110.000 in Paris) gegen die Sparpläne und die wirtschaftliche Lage; bei den Protesten kam es in mehreren Städten zu Ausschreitungen." },
          { tag: "position", text: "Präsident Macron verurteilte die Ausschreitungen als Versuch, „die Republik zu Fall zu bringen”, und bezeichnete laut Berichten zudem öffentliche Kommentare von US-Präsident Trump zur französischen Lage als „dumm” angesichts des Drucks am Anleihemarkt." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die Nominierungsfrist für die Euro-Staaten läuft am 28.10. ab; Isabel Schnabel verlässt die EZB bereits zum 3.1.2027 für einen Posten beim IWF, fast ein Jahr vor Ablauf ihrer Amtszeit." },
          { tag: "unbestaetigt", text: "Laut Berichten wird der frühere Bundesfinanzminister Jörg Kukies nicht als deutscher Kandidat für die Nachfolge gehandelt; Bundesfinanzminister Klingbeil will dennoch einen deutschen Kandidaten stellen. Spanien bringt stattdessen BIZ-Chef Pablo Hernández de Cos ins Spiel; eine Entscheidung wird frühestens im November in der Eurogruppe erwartet." }
        ]},
        { h: "Wie entwickelt sich die Inflation in Eurozone und Deutschland, und was sagt der IWF?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone lag im September laut Eurostat bei 3,8 % – dem höchsten Stand seit September 2023; die deutsche Inflation lag laut Destatis bei 3,3 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] },
          { tag: "fakt", text: "Der IWF hob in seinem Weltwirtschaftsausblick vom 13.10. die globale Wachstumsprognose 2026 auf 3,1 % an, erwartet aber für 2026 eine globale Inflation von 4,7 %; die Bank of Japan tagt am 29./30.10. (erwartet: Pause bei 1,25 %), die chinesische PBoC beließ ihre Leitzinsen bereits am 20.10. den 17. Monat in Folge unverändert." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die EZB vor ihrer Sitzung am 29.10. gleichzeitig mit der französischen Haushaltslage und der sozialen Unruhe dort, einer noch unbesetzten Personalfrage im eigenen Direktorium und anziehender Inflation umgehen muss, zeigt, wie viele geldpolitische und politische Fragen Ende Oktober zusammenlaufen." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 5.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "CNBC: France's bond drama takes centre stage ahead of ECB rate decision", url: "https://finance.yahoo.com/economy/policy/articles/frances-bond-drama-takes-centre-131455236.html" },
        { title: "CNBC: French 10-year bond yield hits 5% for first time since 2002 amid unrest", url: "https://www.cnbc.com/2026/10/21/france-protests-bonds-debt.html" },
        { title: "CNBC: Macron condemns 'stupid' comments from Trump", url: "https://www.cnbc.com/2026/10/22/macron-trump-france-protests.html" },
        { title: "CNBC: More than 500,000 took to the streets as France protests erupted into violence", url: "https://www.cnbc.com/2026/10/19/france-protests-paris-violence-pictures.html" },
        { title: "Bloomberg: Schnabel ECB Job Deadline Set as Lagarde Plans Stay Unclear", url: "https://www.bloomberg.com/news/articles/2026-10-08/schnabel-ecb-job-deadline-is-set-as-lagarde-plans-stay-unclear" },
        { title: "Eurostat: Annual inflation up to 3.8% in the euro area", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-16102026-ap" },
        { title: "Destatis: Inflationsrate im September 2026 bei +3,3 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_364_611.html" }
      ]
    },

    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-rechnungshof-10-25", cats: ["germany", "economy"], when: "Rechnungshof-Kritik 18.10. · Haushaltsausschuss-Beratungen bis 11.11. · Bereinigungssitzung 12.11. · Schlussabstimmung 27.11.2026",
      headline: "Beratungen zum Haushalt 2027 laufen weiter, der Zeitplan mit Bereinigungssitzung am 12. November und Schlussabstimmung am 27. November bleibt unverändert",
      sec30: "Der Regierungsentwurf für den Haushalt 2027 (Gesamtausgaben 555,4 Mrd. Euro, Nettokreditaufnahme 118,7 Mrd. Euro) wurde am 8.9. von Finanzminister Klingbeil im Bundestag eingebracht. Der Bundesrechnungshof hatte am 18.10. in seinen Einzelplananalysen die Deckungslücke erneut auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben) beziffert und vor einem bis 2030 auf 31,2 % steigenden Wert gewarnt. Der Haushaltsausschuss setzte seine Beratungen in der vergangenen Woche fort, unter anderem mit einer Anhörung zum Haushaltsbegleitgesetz 2027 am 12.10.; neue Beschlüsse seit dem Rechnungshof-Bericht sind nicht bekannt. Die Bereinigungssitzung bleibt für den 12.11. angesetzt, die abschließende Bundestagsabstimmung für Freitag, den 27.11.2026.",
      blocks: [
        { h: "Was sieht der Haushaltsentwurf 2027 vor?", items: [
          { tag: "fakt", text: "Der Regierungsentwurf (beschlossen am 6.7., eingebracht am 8.9. von Finanzminister Klingbeil) sieht Gesamtausgaben von 555,4 Mrd. Euro vor (30,9 Mrd. Euro mehr als 2026), bei einer Nettokreditaufnahme von 118,7 Mrd. Euro; inklusive Sondervermögen liegt die Gesamtneuverschuldung bei rund 200 Mrd. Euro. Die Verteidigungsausgaben im Kernhaushalt sollen auf rund 109,7 Mrd. Euro steigen, mit Sondervermögen Bundeswehr auf knapp 140 Mrd. Euro." }
        ]},
        { h: "Was hatte der Bundesrechnungshof kritisiert?", items: [
          { tag: "fakt", text: "Der Bundesrechnungshof bezifferte am 18.10. in seinen Einzelplananalysen die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben gegenüber erwarteten Einnahmen von 394,7 Mrd. Euro). Für 2030 prognostiziert der Rechnungshof eine auf 31,2 % steigende Deckungslücke und einen ungedeckten Konsolidierungsbedarf von rund 108 Mrd. Euro für die Jahre 2028 bis 2030.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Wie ist der aktuelle Stand der Beratungen?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss setzte seine Beratungen zum Haushaltsentwurf 2027 in der vergangenen Woche fort; am 12.10. fand eine öffentliche Anhörung zum Haushaltsbegleitgesetz 2027 statt, am 14./15.10. berieten die Abgeordneten einzelne Etats. Neue Kabinettsbeschlüsse oder eine Reaktion der Regierung auf die jüngste Rechnungshof-Kritik wurden seither nicht bekannt." },
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses ist weiterhin für den 12.11.2026 angesetzt, die zweite Lesung für den 24. bis 27.11. und die dritte Lesung mit der namentlichen Schlussabstimmung für Freitag, den 27.11.2026.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich seit dem verschärften Rechnungshof-Bericht vor einer Woche keine neuen Beschlüsse oder öffentlichen Reaktionen der Regierung ergeben haben, deutet darauf hin, dass die eigentlichen politischen Entscheidungen erst bei der Bereinigungssitzung Mitte November fallen dürften." }
        ]}
      ],
      reaction: "Die aktuellen Umfragen und die Rentendebatte werden in Meldung 6 behandelt, die EZB-Seite in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "Deutscher Bundestag: Beratungen zum Haushalt 2027 fortgesetzt", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1225360" },
        { title: "ad-hoc-news.de: Bundeshaushalt 2027 – Rechnungshof beziffert Deckungslücke auf 160,7 Milliarden", url: "https://www.ad-hoc-news.de/wirtschaft/bundeshaushalt-2027-rechnungshof-beziffert-deckungsluecke-auf-160-7-milliarden/70351796" },
        { title: "Bundesrechnungshof: Einzelplananalysen 2027", url: "https://bundesrechnungshof.de/veroeffentlichungen/einzelplananalysen-2027" }
      ]
    },

    /* 6 DEUTSCHLAND: RENTE/UMFRAGEN/KOALITION */
    {
      id: "rente-umfragen-koalition-10-25", cats: ["germany"], when: "Rentenstreit seit Juni 2026 · Forsa-Umfrage 13.–19.10. · YouGov-Umfrage 25.10.2026",
      headline: "Die Debatte über die abschlagsfreie Rente mit 63 hält an, neue Umfragen zeigen eine Mehrheit, die mit einem vorzeitigen Ende der Koalition rechnet",
      sec30: "Die Debatte über die von der Rentenkommission im Juni vorgeschlagene Abschaffung der abschlagsfreien „Rente mit 63” (nach 45 Beitragsjahren) hält an; ein Unions-Kompromissvorschlag sähe die abschlagsfreie Rente nur noch bei 45 Jahren im selben Beruf vor, wogegen SPD-Vertreter Kürzungen bei Erziehungs- und Pflegezeiten ablehnen. Laut einer Forsa-Umfrage (13.–19.10., n=2.502) liegt die AfD bei 27 %, die Union bei 20 %, nur 11 % sind mit der Arbeit von Kanzler Merz zufrieden, 56 % erwarten ein vorzeitiges Ende der Koalition. Eine YouGov-Umfrage vom 25.10. (n=2.202) zeigt, dass nur 23 % an einen Fortbestand der Koalition bis 2029 glauben; 13 % erwarten einen Bruch noch 2026, 44 % in den beiden folgenden Jahren – selbst unter Anhängern von Union und SPD überwiegt diese Erwartung.",
      blocks: [
        { h: "Worum geht es in der Debatte über die Rente mit 63?", items: [
          { tag: "fakt", text: "Die von der Bundesregierung berufene Rentenkommission hatte im Juni vorgeschlagen, die abschlagsfreie Rente nach 45 Beitragsjahren („Rente mit 63”) abzuschaffen oder einzuschränken. Als Kompromiss diskutiert die Union, die abschlagsfreie Rente künftig nur noch bei 45 Beitragsjahren im selben Beruf zu gewähren; dabei würden Pflege- und Erziehungszeiten nicht mehr vollständig angerechnet.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Gitta Connemann (CDU, Mittelstands- und Wirtschaftsunion) bezeichnete den Unions-Kompromissvorschlag als „gangbaren Kompromiss”. Pascal Reddig (CDU, Junge Gruppe) warnte dagegen, der Vorschlag könne bestehende Ungerechtigkeiten verschärfen. Die SPD-Vize-Fraktionschefin Dagmar Schmidt lehnte Kürzungen ab und bezeichnete die volle Anrechnung von Erziehungszeiten als „unverzichtbar”; Kanzler Merz plädiert für Übergangsfristen und Härtefallregelungen." },
          { tag: "position", text: "SPD-Generalsekretär Tim Klüssendorf forderte zusätzlich, auch Abgeordnete, Selbstständige und Beamte in die gesetzliche Rentenversicherung einzubeziehen („Erwerbstätigenversicherung”); die Union lehnt dies ab." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "Laut einer Forsa-Umfrage für RTL/ntv (13.–19.10., n=2.502) liegt die AfD bundesweit bei 27 %, die Union bei 20 %, die Grünen bei 17 %, die SPD bei 13 %, die Linke bei 11 % und die FDP bei 4 %; nur 11 % zeigten sich mit der Arbeit von Kanzler Merz zufrieden (87 % unzufrieden), 56 % erwarten ein vorzeitiges Ende der Koalition.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] },
          { tag: "unbestaetigt", text: "Eine YouGov-Umfrage im Auftrag der dpa vom 25.10. (n=2.202) zeigt, dass nur 23 % der Befragten an einen Fortbestand der Koalition bis zur nächsten planmäßigen Bundestagswahl 2029 glauben; 13 % erwarten einen Bruch noch 2026, 44 % in den folgenden zwei Jahren. Selbst unter Unions-Anhängern (53 % zu 32 %) und SPD-Anhängern (46 % zu 34 %) überwiegt die Erwartung eines vorzeitigen Endes. Als Gründe werden unter anderem Differenzen beim Reformpaket, der Umgang mit Linke und AfD sowie die Landtagswahlverluste vom September genannt.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Debatte über die Rente mit 63 fortsetzt und gleichzeitig mehrere unabhängige Umfragen eine wachsende Mehrheit zeigen, die nicht mehr mit einem Fortbestand der Koalition bis zur nächsten planmäßigen Wahl rechnet, deutet auf anhaltende politische Unsicherheit auf mehreren Ebenen hin." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority", "e:landtagswahl-why"],
      sources: [
        { title: "ZDFheute: Rente mit 63 – Streit zwischen CDU und SPD in der Koalition", url: "https://www.zdfheute.de/politik/rente-mit-63-cdu-spd-koalition-100.html" },
        { title: "buerger-geld.org: Gesetzliche Rente – SPD will Abgeordnete einbeziehen, CDU sträubt sich", url: "https://www.buerger-geld.org/news/rente/gesetzliche-rente-spd-will-abgeordnete-einbeziehen-cdu-straeubt-sich" },
        { title: "ad-hoc-news.de: Forsa – AfD bleibt mit 27 Prozent vor Union bei 20 Prozent", url: "https://www.ad-hoc-news.de/politik/forsa-afd-bleibt-mit-27-prozent-vor-union-bei-20-prozent/70373736" },
        { title: "onvista: Umfrage – Mehrheit rechnet mit vorzeitigem Ende der Koalition", url: "https://www.onvista.de/news/2026/10-25-umfrage-mehrheit-rechnet-mit-vorzeitigem-ende-der-koalition-0-10-26568123" }
      ]
    },

    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-abu-dhabi-gespraeche-10-25", cats: ["world", "geo"], when: "Oslo-Gespräche 20.10. · Witkoff-Putin-Treffen 21.10. · Selenskyj-Bestätigung 23.10. · geplantes Treffen „um den 10.11.” in Abu Dhabi",
      headline: "Ukraine, Russland und USA bestätigen geplante Verhandlungen Anfang November in Abu Dhabi, Präsident Selenskyj bleibt offen für ein Einfrieren der Frontlinie",
      sec30: "Nach Gesprächen in Oslo (20.10., mit US-Sondergesandtem Witkoff, Norwegens Premier Støre und Finnlands Präsident Stubb) und einem rund dreistündigen Treffen zwischen Witkoff und Kreml-Chef Putin im Konstantin-Palast bei St. Petersburg (21.10.) bestätigte Präsident Selenskyj am 23.10., dass sich Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi treffen sollen – laut Kreml-Berater Juri Uschakow „um den 10. November”, zunächst auf technischer Ebene. Selenskyj zeigte sich weiter offen dafür, die aktuelle Frontlinie als ersten Schritt einzufrieren, fordert dafür aber einen international überwachten Waffenstillstand, vom US-Kongress ratifizierte Sicherheitsgarantien nach dem Vorbild von NATO-Artikel 5 und eine mindestens zehnjährige internationale Finanzierung der ukrainischen Armee. Russland verlangt laut Uschakow den vollständigen Rückzug ukrainischer Truppen aus Donezk und lehnt einen reinen Waffenstillstand ab. Unmittelbar nach Putins Zusage zu neuen Gesprächen griff Russland Kyjiw mit Raketen an.",
      blocks: [
        { h: "Welche diplomatischen Schritte gab es zuletzt?", items: [
          { tag: "fakt", text: "Am 20.10. traf Präsident Selenskyj in Oslo US-Sondergesandten Steve Witkoff, zusammen mit Norwegens Premier Jonas Gahr Støre und Finnlands Präsident Alexander Stubb. Am 21.10. traf Witkoff im Konstantin-Palast bei St. Petersburg Kreml-Chef Putin für rund drei Stunden." },
          { tag: "position", text: "Laut Kreml-Berater Juri Uschakow erklärte sich Putin bereit, trilaterale Gespräche zwischen Russland, den USA und der Ukraine „um den 10. November” wieder aufzunehmen, mit Fokus auf ein Nachkriegs-„Sicherheitssystem” für beide Länder; Putin selbst sagte, künftige Gespräche müssten sich auf Sicherheitsgarantien für beide Länder und einen „Gesamtrahmen für Sicherheit in Europa” konzentrieren." },
          { tag: "fakt", text: "Präsident Selenskyj bestätigte am 23.10., dass Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi zusammenkommen sollen – zunächst auf technischer Ebene; bei Fortschritten sollen Treffen zwischen Selenskyj, Putin und Trump folgen." }
        ]},
        { h: "Wie positionieren sich Ukraine und Russland zu einem Einfrieren der Frontlinie?", items: [
          { tag: "position", text: "Selenskyj sagte, er sei offen dafür, die aktuelle Frontlinie als ersten Schritt zu einem Friedensabkommen einzufrieren, fordere dafür aber einen sofortigen, international überwachten und durchsetzbaren Waffenstillstand, vom US-Kongress ratifizierte bilaterale Sicherheitsgarantien nach dem Vorbild von NATO-Artikel 5 sowie eine mindestens zehnjährige internationale Finanzierung der ukrainischen Armee; Gebietsabtretungen lehnt er ab." },
          { tag: "position", text: "Russland verlangt laut Uschakow den vollständigen Rückzug ukrainischer Truppen aus dem gesamten Gebiet Donezk und lehnt einen reinen Waffenstillstand ab, da dieser der Ukraine nach russischer Darstellung nur Zeit zum „Durchatmen” gebe." }
        ]},
        { h: "Welche Kritik gibt es an der Vermittlerrolle, und welche aktuellen Angriffe werden gemeldet?", items: [
          { tag: "position", text: "US-Sondergesandter Witkoff bezeichnete Putin nach dem Treffen als „humanitarian” – eine Formulierung, die auch von US-Republikanern kritisiert wurde; internationale Medien werfen Witkoff vor, Moskau könnte den US-Verhandlungseifer zur Zeitgewinnung nutzen." },
          { tag: "unbestaetigt", text: "Unmittelbar nach Putins Zusage zu neuen Gesprächen griff Russland Kyjiw nach ukrainischen Angaben erneut mit Raketen an – einseitige, von russischer Seite nicht bestätigte Opferangaben liegen für diesen konkreten Angriff in den verfügbaren Quellen nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich mit dem für Anfang November geplanten Treffen in Abu Dhabi ein konkreterer diplomatischer Fahrplan abzeichnet, während sich an den gegensätzlichen Grundpositionen zu Gebietsfragen und Sicherheitsgarantien nichts geändert hat und unmittelbar nach der Gesprächszusage weitere Angriffe gemeldet wurden, zeigt, wie weit militärisches Geschehen und diplomatische Fortschritte derzeit noch auseinanderliegen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, weitere internationale Entwicklungen in Meldung 15.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: Russia and Ukraine say talks planned for November in UAE", url: "https://www.aljazeera.com/news/2026/10/23/russia-ukraine-talks-planned-for-november-in-uae-kremlin" },
        { title: "UNITED24 Media: Ukraine, US, and Russian negotiators plan technical-level meeting in Abu Dhabi", url: "https://united24media.com/war-in-ukraine/ukraine-us-and-russian-negotiators-plan-technical-level-meeting-in-abu-dhabi-in-november-zelenskyy-says-23765" },
        { title: "Euronews: Zelenskyy backs freezing front line as first step towards Ukraine ceasefire", url: "https://www.euronews.com/2026/10/21/zelenskyy-backs-freezing-front-line-as-first-step-towards-ukraine-ceasefire" },
        { title: "Moscow Times: Putin says renewed peace talks must focus on security for Russia, Ukraine and Europe", url: "https://www.themoscowtimes.com/2026/10/23/putin-says-renewed-peace-talks-must-focus-on-security-for-russia-ukraine-and-europe-overall-a94061" },
        { title: "CNBC: Witkoff calls Putin a 'humanitarian' at Russia peace talks without Ukraine", url: "https://www.cnbc.com/2026/10/21/witkoff-russia-putin-ukraine-zelenskyy.html" }
      ]
    },

    /* 8 GEOPOLITIK: GOLF/HORMUZ/HOUTHI */
    {
      id: "golf-hormuz-houthi-eskalation-10-25", cats: ["geo", "energy"], when: "Angriffe auf Riad/Dammam 22.10. · erneuter Abfangversuch Riad 25.10. · Hormuz-Zwischenfälle Oktober 2026",
      headline: "Die Huthi-Miliz setzt ihre Angriffe auf Saudi-Arabien übers Wochenende fort, CENTCOM und Iran machen weiter gegensätzliche Angaben zur Straße von Hormus",
      sec30: "Nach einem von den Huthi reklamierten Angriff auf das saudische Verteidigungsministerium in Riad und auf den Flughafen Dammam (22.10., nach saudischen Angaben 2 Tote, 8 Verletzte) fing die saudisch geführte Koalition laut Berichten am Sonntag, 25.10., eine weitere auf Riad gerichtete Rakete ab. Saudi-Arabien hat einen direkten Treffer auf das Verteidigungsministerium nicht offiziell bestätigt. In der Straße von Hormus verzeichnete der Oktober laut UKMTO weiterhin die höchste Zahl an Schiffsangriffen seit Kriegsbeginn Ende Februar 2026; US-Kommandeur Brad Cooper (CENTCOM) beansprucht die Kontrolle für die USA und regionale Partner, während Iran laut eigenen Angaben die Wasserstraße kontrolliert und mit dem Versenken sich nähernder US-Kriegsschiffe droht. Brent-Rohöl stieg als Reaktion auf 116,72 Dollar je Barrel, den höchsten Settlement-Stand seit Ende April.",
      blocks: [
        { h: "Was ist am Wochenende am Golf geschehen?", items: [
          { tag: "unbestaetigt", text: "Die Huthi-Miliz reklamierte am 22.10. einen Angriff auf das saudische Verteidigungsministerium in Riad sowie auf die Flughäfen Dammam und Abha; nach saudischen Angaben wurden dabei in Dammam 2 Menschen getötet und 8 verletzt. Saudi-Arabien hat einen direkten Treffer auf das Verteidigungsministerium nicht offiziell bestätigt, meldete aber abgefangene Drohnen über Riad.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] },
          { tag: "unbestaetigt", text: "Am Sonntag, 25.10., fing die saudisch geführte Koalition laut Berichten eine weitere, auf Riad gerichtete Huthi-Rakete ab – eine Fortsetzung der Angriffsserie, deren genaues Ausmaß weiterhin nur über Angaben der Konfliktparteien und Sekundärquellen vorliegt." }
        ]},
        { h: "Wie ist die Lage in der Straße von Hormus?", items: [
          { tag: "unbestaetigt", text: "Der Oktober verzeichnete laut UKMTO weiterhin die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Kriegsbeginn Ende Februar 2026; UKMTO räumt zugleich ein, Schwierigkeiten bei der korrekten Erfassung der tatsächlichen Angriffszahl zu haben, da viele betroffene Schiffe keine Meldung abgeben." },
          { tag: "position", text: "US-Kommandeur Brad Cooper (CENTCOM) erklärte, die Straße von Hormus werde „eindeutig von amerikanischen Streitkräften und regionalen Partnern kontrolliert”, und verweist auf rund 400 Schiffe und 100 Mio. Barrel Öl, die in der vergangenen Woche sicher durchgeschleust worden seien. Iran und die Revolutionsgarde (IRGC) beanspruchen dagegen die Kontrolle über die Meerenge für sich und drohen, sich nähernde US-Kriegsschiffe zu versenken; ein iranisches Staatsmedium bestritt zugleich Berichte über einen „siebentägigen Wiederöffnungsplan”." },
          { tag: "unbestaetigt", text: "Nach einer bislang nicht von Seebehörden bestätigten IRGC-Behauptung liefen am 25.10. zwei Supertanker in der Meerenge auf Minen auf." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Brent-Rohöl stieg als Reaktion auf die Eskalation am Freitag auf ein Settlement von 116,72 Dollar je Barrel – nach Berichten der höchste Stand seit Ende April 2026; Saudi Aramco hatte bereits am 22.10. sein Hauptquartier in Dhahran vorsorglich evakuiert." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Huthi-Angriffe auf Saudi-Arabien übers Wochenende anhalten und CENTCOM und Iran weiterhin widersprechende Angaben zur Kontrolle der Straße von Hormus machen, zeigt, wie unübersichtlich und angespannt die Lage am Golf bleibt.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis im Detail in Meldung 14.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "Alhurra: 2 Killed in Dammam as Houthis Claim Attack on Saudi Defense Ministry", url: "https://alhurra.com/en/47884" },
        { title: "The National: Middle East latest – Saudi-led coalition downs Houthi missile launched towards Riyadh", url: "https://www.thenationalnews.com/news/mena/2026/10/25/live-riyadh-saudi-houthi-missile/" },
        { title: "Al Jazeera: US and Iran both claim control of Strait of Hormuz amid attacks on vessels", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { title: "gCaptain: By the Numbers – U.S. Claims Control of Hormuz as Ship Attacks Hit New High", url: "https://gcaptain.com/by-the-numbers-u-s-claims-control-of-hormuz-as-ship-attacks-hit-new-high/" },
        { title: "FinanceFeeds: Brent Crude Oil Price: $116.72 Settle", url: "https://financefeeds.com/brent-crude-oil-price-116-72-saturday-week-ahead-houthi-saudi-fed-28-october-bull-120-bear-108/" }
      ]
    },

    /* 9 DEFENCE: RHEINMETALL/ARMINIUS/MARSCHFLUGKÖRPER */
    {
      id: "rheinmetall-arminius-marschflugkoerper-10-25", cats: ["defence"], when: "Kursverlauf Woche 19.–23.10. · Berichte über Marschflugkörper-Gespräche 23.10. · Q3-Zahlen erst am 5.11.2026",
      headline: "Die Rheinmetall-Aktie stabilisiert sich zum Wochenende, Deutschland verhandelt laut Berichten über neue Marschflugkörper-Verträge mit den USA und der Ukraine",
      sec30: "Die Rheinmetall-Aktie schloss die Woche bis Freitag, 23.10., nach einem schwachen Wochenstart (Montag 1.059,80 Euro, Dienstag −3,23 % auf 1.020,00 Euro) mit einer leichten Erholung bei 1.019,00 Euro (+0,39 %) – rund 48 % unter dem 52-Wochen-Hoch von 1.966,00 Euro. Laut einem Bloomberg-Bericht vom 23.10. (über Sekundärquellen verifiziert) verhandelt Deutschland mit dem US-Startup Covenant über einen Vertrag im Wert von über 1 Mrd. Euro für tausende Marschflugkörper des Typs „Anthem” (Reichweite über 2.000 Kilometer, geplante Produktion in Leipzig); daneben laufen Gespräche über ukrainische „Bars”-Marschflugkörper und „Flamingo”-Raketen von Fire Point als mögliche Tomahawk-Alternative. Zum Arminius-Programm für Boxer-Radpanzer gibt es weiterhin keinen finalen Vertrag; die Q3-Zahlen stehen erst am 5.11.2026 an.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "fakt", text: "Nach einem schwachen Start in die Woche (Montag, 19.10.: 1.059,80 Euro, −2,79 %; Dienstag, 20.10.: 1.054,00 Euro; Mittwoch, 21.10.: 1.020,00 Euro, −3,23 %) stabilisierte sich die Aktie zum Wochenende: Donnerstag, 22.10.: 1.015,00 Euro; Freitag, 23.10.: 1.019,00 Euro (+0,39 %). Der Kurs liegt damit rund 48 % unter dem 52-Wochen-Hoch von 1.966,00 Euro.",
            ask: [{ label: "Mehr zum DAX-Wochenverlust", ref: "n:dax" }] }
        ]},
        { h: "Was wird zu neuen Marschflugkörper-Verträgen berichtet?", items: [
          { tag: "unbestaetigt", text: "Laut einem Bloomberg-Bericht vom 23.10., der in den verfügbaren Quellen nur über Sekundärquellen (unter anderem ukrainische Medien) zugänglich war, verhandelt Deutschland mit dem US-Rüstungs-Startup Covenant über einen Vertrag im Wert von über 1 Mrd. Euro für tausende Marschflugkörper des Typs „Anthem” mit einer Reichweite von über 2.000 Kilometern, deren Produktion in Leipzig entstehen soll. Parallel soll Deutschland mit der Ukraine über „Bars”-Marschflugkörper und mit dem ukrainischen Hersteller Fire Point über „Flamingo”-Raketen als mögliche Alternative zu US-Tomahawk-Flugkörpern sprechen – Details zu Vertragsstand und Zeitplan sind nicht bekannt." }
        ]},
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Zum Arminius-Programm (Radpanzer Boxer) gibt es weiterhin keinen finalen Vertrag; die parlamentarische Befassung ist für den 9.12.2026 angesetzt. Rheinmetalls Anteil am Gesamtprogramm wird auf rund 12,4 Mrd. Euro geschätzt, bei einem möglichen Gesamtrahmen von bis zu 75 bis 77 Mrd. Euro für bis zu 5.500 Fahrzeuge – Schätzungen, keine offizielle Bestätigung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Rheinmetall-Aktie nach einem schwachen Wochenstart zuletzt stabilisiert hat, während Berichte über mögliche neue Marschflugkörper-Verträge und das weiterhin offene Arminius-Programm zusätzliche Wachstumsfelder andeuten, zeigt, wie viele einzelne Geschäftsfelder gleichzeitig über die Bewertung des Konzerns entscheiden. Die Q3-Zahlen stehen erst am 5.11.2026 an. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Weitere internationale Rüstungsaufträge werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "finanzen.net: Rheinmetall Aktie News – Rheinmetall legt am Freitagmittag zu", url: "https://www.finanzen.net/nachricht/aktien/rheinmetall-aktie-kursbewegung-23-10-2026-11201172" },
        { title: "ad-hoc-news.de: Rheinmetall-Aktie liegt 47,88 Prozent unter Jahreshoch vor Quartalszahlen", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/rheinmetall-aktie-liegt-47-88-prozent-unter-jahreshoch-vor-quartalszahlen/70398214" },
        { title: "hartpunkt.de: Arminius ante portas – Großvertrag für Boxer-Radpanzer soll im Dezember geschlossen werden", url: "https://www.hartpunkt.de/arminius-ante-portas-grossvertrag-fuer-boxer-radpanzer-soll-im-dezember-geschlossen-werden" },
        { title: "112.ua: Deutschland verhandelt über den Kauf von tausend Marschflugkörpern „Anthem” und „Bars”", url: "https://112.ua/de/nimeccina-vede-peregovori-pro-zakupivlu-tisac-krilatih-raket-anthem-i-bars-dla-posilenna-oboroni-193343" },
        { title: "ukranews.com: Germany plans to purchase thousands of long-range missiles, including Ukrainian Bars missiles", url: "https://ukranews.com/en/news/1183050-germany-plans-to-purchase-thousands-of-long-range-missiles-including-ukrainian-bars-missiles" }
      ]
    },

    /* 10 DEFENCE: RTX/LOCKHEED/NORTHROP/SAAB */
    {
      id: "rtx-lockheed-northrop-saab-q3-10-25", cats: ["defence"], when: "RTX-Q3 20.10. · Northrop-Q3 20.10. · Lockheed-Q3 22.10. · Saab-Q3 23.10.2026",
      headline: "RTX, Lockheed Martin und Northrop Grumman melden Rekord-Auftragsbestände, Saabs Auftragseingang steigt um 216 Prozent dank eines Gripen-Deals mit der Ukraine",
      sec30: "In der „Defense Earnings Week” meldeten gleich mehrere große Rüstungskonzerne starke Quartalszahlen: RTX (20.10.) einen Rekord-Auftragsbestand von 340 Mrd. Dollar, Northrop Grumman (20.10.) einen um 7 % gestiegenen Umsatz von 11,1 Mrd. Dollar und einen Rekord-Auftragsbestand von 110 Mrd. Dollar (+20 % zum Vorjahr), Lockheed Martin (22.10.) einen Rekord-Auftragsbestand von 292 Mrd. Dollar bei einer danach rund 9 % höheren Aktie, General Dynamics einen Rekord-Auftragsbestand von 136,5 Mrd. Dollar. Der schwedische Rüstungskonzern Saab meldete am 23.10. einen um 216 % gestiegenen Auftragseingang im dritten Quartal, getrieben von einem Gripen-E-Kampfflugzeug-Deal mit der Ukraine, sowie ein Umsatzplus von 30 %.",
      blocks: [
        { h: "Was zeigen die Quartalszahlen von RTX, Lockheed Martin und Northrop Grumman?", items: [
          { tag: "fakt", text: "RTX meldete am 20.10. für das dritte Quartal einen Rekord-Auftragsbestand von 340 Mrd. Dollar und hob seine Jahresprognose auf einen Gewinn pro Aktie von 7,65 bis 7,75 Dollar an.",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:9" }] },
          { tag: "fakt", text: "Northrop Grumman meldete am 20.10. einen Quartalsumsatz von 11,1 Mrd. Dollar (+7 % zum Vorjahr) und einen Gewinn pro Aktie von 7,89 Dollar (über den Erwartungen), bei einem Rekord-Auftragsbestand von 110 Mrd. Dollar (+20 % zum Vorjahr) und Nettoaufträgen von 16 Mrd. Dollar, davon 7,6 Mrd. Dollar für das Sentinel-Raketenprogramm." },
          { tag: "fakt", text: "Lockheed Martin meldete am 22.10. einen Umsatz von 20,7 Mrd. Dollar (+11 %) bei einem Rekord-Auftragsbestand von 292,0 Mrd. Dollar (Book-to-Bill-Verhältnis 4,0); die Aktie legte danach rund 9 % zu. General Dynamics meldete einen Rekord-Auftragsbestand von 136,5 Mrd. Dollar und hob seine Gewinnprognose auf 8,00 bis 8,10 Dollar pro Aktie an." }
        ]},
        { h: "Was zeigen die Zahlen von Saab, und welche weiteren Aufträge gab es?", items: [
          { tag: "fakt", text: "Der schwedische Rüstungskonzern Saab meldete am 23.10. für das dritte Quartal einen um 216 % gestiegenen Auftragseingang, getrieben von einem Gripen-E-Kampfflugzeug-Deal mit der Ukraine, sowie ein Umsatzplus von 30 %; die Unternehmensführung sieht nach eigenen Angaben eine „sehr hohe” Nachfrage.",
            ask: [{ label: "Mehr zum DAX-Wochenverlust", ref: "n:dax" }] },
          { tag: "fakt", text: "Griechenland und die USA vereinbarten bereits zuvor einen Deal im Volumen von bis zu 4 Mrd. Dollar für die Modernisierung griechischer F-16-Kampfflugzeuge." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere etablierte Rüstungskonzerne in den USA und Europa binnen einer Woche Rekord-Auftragsbestände und deutlich steigende Umsätze melden, zeigt, wie stark sich die weltweit gestiegenen Verteidigungsausgaben inzwischen in den Geschäftszahlen der Branche niederschlagen." }
        ]}
      ],
      reaction: "Rheinmetall und die deutsche Rüstungsindustrie werden in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "Yahoo Finance: RTX lifts 2026 forecasts on aerospace demand", url: "https://finance.yahoo.com/news/rtx-lifts-2026-forecasts-aerospace-105758789.html" },
        { title: "gurufocus.com: Northrop Grumman Corp (NOC) Q3 2026 Earnings Call Highlights", url: "https://www.gurufocus.com/news/9133121/northrop-grumman-corp-noc-q3-2026-earnings-call-highlights-record-110-billion-backlog-and-raised-guidance-signal-strong-momentum" },
        { title: "247wallst.com: Lockheed Martin rises 9% as record backlog lifts outlook", url: "https://247wallst.com/investing/2026/10/22/lockheed-martin-rises-9-as-record-backlog-lifts-outlook-rtx-gains-2-northrop-grumman-advances-3/" },
        { title: "PR Newswire: Defense earnings week opens with three raised forecasts and two record backlogs", url: "https://www.prnewswire.com/news-releases/defense-earnings-week-opens-with-three-raised-forecasts-and-two-record-backlogs-302915383.html" },
        { title: "envantermedya.com: Saab Q3 2026 orders up 216 percent", url: "https://envantermedya.com/en/en-saab-q3-2026-orders-up-216-percent/" }
      ]
    },

    /* 11 DEALS/PE: BASF/EVONIK, LSEG/OCTUS, EQT/QIAGEN, TESLA/SPACEX */
    {
      id: "deals-basf-evonik-lseg-octus-eqt-qiagen-tesla-spacex-10-25", cats: ["deals", "pe"], when: "LSEG/Octus 22.10. · BASF/Evonik-Berichte 22./23.10. · EQT/Qiagen seit 21./22.10. · Tesla/SpaceX-Ausschüsse 19./20.10.2026",
      headline: "BASF soll sein Angebot für Evonik laut Kreisen weiter erhöht haben, LSEG kauft den Datenanbieter Octus für 3,5 Milliarden Dollar, bei EQT/Qiagen investieren auch Staatsfonds mit",
      sec30: "Laut Kreisen soll BASF sein Angebot für den Chemiekonzern Evonik auf 24 Euro je Aktie (Gesamtwert über 11 Mrd. Euro) erhöht haben, nach einem zuvor vom Evonik-Vorstand als zu niedrig bewerteten Angebot von rund 22,15 Euro; weder BASF noch Evonik haben dies offiziell bestätigt. BASF-Chef Markus Kamieth sicherte laut Berichten zusätzlich betriebsbedingte Kündigungen bis 2032 aus. Der Börsenbetreiber LSEG kündigte am 22.10. den Kauf des Kreditmarkt-Datenanbieters Octus von Permira für 3,5 Mrd. Dollar in bar an. Die am 21.10. vereinbarte Übernahme von Qiagen durch den EQT-XI-Fonds (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) wird über die Beteiligungsgesellschaft „Crown NL Bidco” abgewickelt; als Co-Investoren werden die Abu Dhabi Investment Authority und die kanadische CPP Investments genannt. Bei Tesla und SpaceX haben die Verwaltungsräte unabhängige Ausschüsse zur Prüfung einer möglichen Fusion gebildet, ohne verbindliches Angebot.",
      blocks: [
        { h: "Was ist der Stand bei BASF/Evonik?", items: [
          { tag: "unbestaetigt", text: "Laut Kreisen (Reuters, berichtet unter anderem von Handelsblatt) soll BASF sein Angebot für Evonik auf 24 Euro je Aktie erhöht haben, Gesamtwert über 11 Mrd. Euro – nach einem vorherigen, von Evonik als zu niedrig bewerteten Angebot von rund 22,15 Euro je Aktie. Weder BASF noch Evonik haben dies offiziell bestätigt; Finanzierungsdetails, beteiligte Banken und ein Zeitplan werden in den verfügbaren Quellen nicht genannt.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "BASF-Chef Markus Kamieth soll laut Berichten betriebsbedingte Kündigungen bis 2032 ausgeschlossen haben. Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, berät weiterhin vertraulich über die BASF-Offerte und dürfte für den Ausgang entscheidend sein." }
        ]},
        { h: "Was wurde bei LSEG/Octus angekündigt?", items: [
          { tag: "fakt", text: "LSEG vereinbarte am 22.10. den Kauf von Octus (vormals Reorg, Anbieter von Kreditmarkt- und Distressed-Debt-Daten) vom Finanzinvestor Permira für 3,5 Mrd. Dollar in bar – die größte LSEG-Übernahme seit sieben Jahren und für Permira der sechste strategische Exit des Jahres. Octus soll 2026 über 300 Mio. Dollar Umsatz bei rund 40 % Ebitda-Marge erzielen; Permira hatte das Unternehmen 2022 für rund 1,3 Mrd. Dollar gekauft. Der Abschluss wird im ersten Halbjahr 2027 erwartet." }
        ]},
        { h: "Wie ist der Stand bei EQT/Qiagen und Tesla/SpaceX?", items: [
          { tag: "fakt", text: "Die am 21.10. vereinbarte Übernahme von Qiagen durch den EQT-XI-Fonds (46,50 Euro je Aktie, rund 10,8 Mrd. Euro Eigenkapitalwert, inklusive Schulden umgerechnet rund 12,1 Mrd. Dollar) wird über die niederländische Beteiligungsgesellschaft „Crown NL Bidco” abgewickelt; als Co-Investoren werden die Abu Dhabi Investment Authority und die kanadische CPP Investments genannt. Der Qiagen-Vorstand unterstützt den Deal einstimmig, der Abschluss wird für Mitte 2027 erwartet und benötigt die Zustimmung von mehr als 50 % der Aktionäre.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "unbestaetigt", text: "Die Verwaltungsräte von Tesla und SpaceX bildeten am 19./20.10. jeweils unabhängige Ausschüsse, um eine mögliche Fusion zu prüfen, auf Wunsch von Aktionären; Elon Musk ist als Partei mit Interessenkonflikt nicht an den Gesprächen beteiligt. Es liegt kein verbindliches Angebot und keine Einigung vor; Musk warnte selbst davor, von einer Gewissheit auszugehen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass binnen wenigen Tagen gleich mehrere Milliarden-Deals in unterschiedlichsten Branchen – Finanzdaten, Chemie, Biotech-Software, Raumfahrt/Elektroautos – angekündigt, erhöht oder geprüft wurden, passt zu einer anhaltend aktiven M&A- und Private-Equity-Welle." }
        ]}
      ],
      deal: { value: "3,5 Mrd. $ (LSEG/Octus) · rund 10,8 Mrd. € (EQT/Qiagen) · über 11 Mrd. € (BASF/Evonik, unbestätigt)", buyer: "LSEG · EQT-XI-Fonds · BASF", target: "Octus (von Permira) · Qiagen · Evonik", sector: "Finanzmarktdaten / Biotech-Software / Chemie", type: "Unternehmensübernahme (BASF/Evonik unbestätigt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "Bloomberg: LSEG agrees $3.5 billion deal to buy credit firm Octus", url: "https://www.bloomberg.com/news/articles/2026-10-22/lseg-agrees-3-5-billion-deal-to-buy-credit-firm-octus" },
        { title: "Handelsblatt: Evonik – BASF erhöht Übernahmeangebot auf mehr als elf Milliarden Euro", url: "https://www.handelsblatt.com/unternehmen/industrie/evonik-basf-erhoeht-uebernahmeangebot-auf-mehr-als-elf-milliarden-euro/100264522.html" },
        { title: "vermoegenszentrum.ch: RAG-Stiftung berät über BASF-Übernahmepläne für Evonik", url: "https://www.vermoegenszentrum.ch/boersen-und-maerkte/news/rag-stiftung-beraet-ueber-basf-uebernahmeplaene-fuer-evonik" },
        { title: "Bloomberg: Qiagen-Übernahme – EQT bietet 46,50 Euro je Aktie", url: "https://www.bloomberg.com/news/articles/2026-10-22/qiagen-ubernahme-eqt-bietet-fur-molekulartest-spezialisten-46-50-euro-je-aktie" },
        { title: "TechCrunch: SpaceX and Tesla boards form special committees to review merger", url: "https://techcrunch.com/2026/10/20/spacex-and-tesla-boards-form-special-committees-to-review-merger/" }
      ]
    },

    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-bcred-blueowl-10-25", cats: ["credit", "pe"], when: "BCRED-Earnings-Call 22.10. · Blue Owl-Berichte Oktober 2026",
      headline: "Bei Blackstones Flaggschifffonds BCRED bleiben die Rücknahmewünsche weiterhin doppelt so hoch wie das Limit, Blue Owl kappt erneut Rücknahmen bei einem Technologiefonds",
      sec30: "Beim Blackstone Private Credit Fund (BCRED) wollten Anleger im dritten Quartal 2026 laut dem Earnings Call vom 22.10. netto 1,4 Mrd. Dollar abziehen (nach 1,2 Mrd. Dollar im Vorquartal); erneut wurden nur 5 % der gewünschten rund 10 % des Nettoinventarwerts bedient – das vertragliche Quartalslimit. S&P Global Ratings hatte den Ausblick für den Fonds zuvor von „positiv” auf „stabil” gesenkt. Bei Blue Owl wollten Anleger laut Berichten 39 % (rund 1,1 Mrd. Dollar, nach 38,1 % im Vorquartal) aus einem 5-Mrd.-Dollar-Technologie-Kreditfonds abziehen; auch hier wurde die Rücknahme erneut auf 5 % gekappt.",
      blocks: [
        { h: "Wie ist der Stand bei Blackstones BCRED?", items: [
          { tag: "fakt", text: "Beim Earnings Call am 22.10. berichtete Blackstone für BCRED im dritten Quartal 2026 netto rund 1,4 Mrd. Dollar an Rücknahmewünschen (Vorquartal: 1,2 Mrd. Dollar); wie bereits in den Vorquartalen wurden nur 5 % des Nettoinventarwerts ausgezahlt – das vertragliche Quartalslimit, während Anleger weiterhin rund das Doppelte zurückziehen wollten.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] }
        ]},
        { h: "Wie reagierte S&P auf den Blackstone-Fonds?", items: [
          { tag: "fakt", text: "S&P Global Ratings hatte den Ausblick für den Blackstone Private Credit Fund von „positiv” auf „stabil” gesenkt, mit Verweis auf Abschreibungen bei Krediten aus den Jahrgängen 2021/22, die den Nettoinventarwert belastet haben; die Liquidität des Fonds für Rücknahmen bis zur vertraglichen 5-%-Grenze hält S&P weiterhin für ausreichend.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was zeigt sich bei Blue Owl?", items: [
          { tag: "unbestaetigt", text: "Blue Owl verzeichnete laut Berichten im jüngsten Quartal Rücknahmewünsche von rund 39 % (etwa 1,1 Mrd. Dollar, nach 38,1 % im Vorquartal) bei einem 5-Mrd.-Dollar-Technologie-Kreditfonds und kappte die Auszahlung erneut auf 5 % – nach eigener Darstellung wegen eines „Disconnect” zwischen KI-bezogenen Ängsten der Anleger und den tatsächlichen Fundamentaldaten der Fondsunternehmen.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei mehreren großen Private-Credit-Fonds weiterhin deutlich mehr Rücknahmen angefragt werden, als die Fonds vertraglich auszahlen müssen – und sich das Muster von Quartal zu Quartal fortsetzt, statt sich zu entspannen –, zeigt anhaltenden Druck in Teilen der Anlageklasse.",
            ask: [{ label: "Wie wirken höhere Zinsen auf Private-Credit-Ausfälle?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:nonaccrual-default"],
      sources: [
        { title: "StreetInsider: S&P Affirms Ratings on Blackstone (BX), Subsidiaries; Outlook Remains Stable", url: "https://www.streetinsider.com/Credit+Ratings/S&P+Affirms+Ratings+on+Blackstone+(BX),+Subsidiaries;+Outlook+Remains+Stable/12118083.html" },
        { title: "Bloomberg: Blackstone's BCRED caps redemptions again after 10% seek to exit", url: "https://www.bloomberg.com/news/articles/2026-09-03/blackstone-s-bcred-caps-redemptions-again-after-10-seek-to-exit" },
        { title: "Bloomberg: Blue Owl caps redemptions at two BDCs after 39.17% withdrawal requests", url: "https://www.bloomberg.com/news/articles/2026-10-02/blue-owl-again-caps-two-bdcs-after-39-17-withdrawal-requests" },
        { title: "Benzinga: Blue Owl investors seek to pull 39% from $5B tech credit fund", url: "https://www.benzinga.com/markets/private-markets/26/10/62146487/blue-owl-investors-seek-to-pull-39-from-5b-tech-credit-fund" }
      ]
    },

    /* 13 TECHNOLOGIE: SOX/COREWEAVE/META/NVIDIA/CHIPS */
    {
      id: "coreweave-sox-meta-nvidia-chips-10-25", cats: ["tech"], when: "CoreWeave-CDS-Rekord 15./16.10. · Meta-Q3 21.10. · SOX-Erholung 23./24.10.2026",
      headline: "CoreWeaves Kreditausfallversicherungen erreichten Mitte Oktober ein Rekordniveau, der Halbleiterindex SOX erholt sich zum Wochenende, Meta plant laut einem Bericht eine neue Aktienklasse zur KI-Finanzierung",
      sec30: "CoreWeaves 5-Jahres-Kreditausfallversicherungen (CDS) erreichten am 15./16.10. mit rund 1.194,5 Basispunkten einen Rekordwert, die implizite 5-Jahres-Ausfallwahrscheinlichkeit lag bei über 60 %; die Aktie verlor in der Woche bis zum 20.10. rund 13 %, bevor Goldman Sachs sie hochstufte. Meta hatte am 21.10. seine Investitionsprognose für 2026 auf 135 bis 145 Mrd. Dollar angehoben, bei negativem freiem Cashflow im dritten Quartal; laut einem einzelnen Bericht sollen Metas Leasing- und Vertragsverpflichtungen inzwischen rund 825 Mrd. Dollar erreichen, zudem plant der Konzern laut einem weiteren Bericht eine neue, nicht stimmberechtigte Aktienklasse zur Finanzierung seiner KI-Expansion. Der Halbleiterindex SOX legte nach einer heftigen Verlustserie am 23.10. (+1,61 %) und 24.10. (SOXX-ETF +0,53 %) wieder zu, angeführt von Speicherchip-Werten; Nvidia rückte laut Berichten näher an eine Marktkapitalisierung von 6 Billionen Dollar.",
      blocks: [
        { h: "Wie geht es CoreWeave?", items: [
          { tag: "fakt", text: "Die 5-Jahres-Kreditausfallversicherungen (CDS) von CoreWeave erreichten am 15./16.10. mit rund 1.194,5 Basispunkten einen Rekordwert; daraus lässt sich eine implizite 5-Jahres-Ausfallwahrscheinlichkeit von über 60 % ableiten. Die 9,75-%-Anleihe (fällig 2031) rentierte zuletzt mit rund 15,78 %.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "fakt", text: "Die Aktie verlor in der Woche bis zum 20.10. rund 13 % und markierte am 19.10. kurzzeitig ihr Jahrestief; Goldman Sachs stufte CoreWeave anschließend hoch." }
        ]},
        { h: "Was zeigen Metas Quartalszahlen, und welche Finanzierungspläne werden berichtet?", items: [
          { tag: "fakt", text: "Meta hatte am 21.10. für das dritte Quartal 2026 einen Umsatz von 64,6 Mrd. Dollar (+26 % gegenüber Vorjahr) gemeldet und seine Investitionsprognose für 2026 auf 135 bis 145 Mrd. Dollar angehoben, bei einem negativen freien Cashflow im dritten Quartal.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "unbestaetigt", text: "Laut einem einzelnen Branchenbericht (DigiTimes) sollen Metas Leasing- und Vertragsverpflichtungen inzwischen rund 825 Mrd. Dollar erreichen; ein weiterer Bericht (Bloomberg) beschreibt Pläne für eine neue, nicht stimmberechtigte Aktienklasse zur Finanzierung der KI-Expansion – beide Angaben stammen aus einzelnen, nicht unabhängig bestätigten Quellen." }
        ]},
        { h: "Wie entwickelte sich der Halbleiterindex SOX, und wie reagierten asiatische Chip-Werte?", items: [
          { tag: "fakt", text: "Nach einer heftigen Verlustserie im Oktober (zeitweise bis zu 18,4 % unter dem Oktoberhoch) legte der SOX am 23.10. um rund 1,61 % und am 24.10. (SOXX-ETF) um weitere 0,53 % zu, angeführt von Speicherchip-Werten wie SK Hynix, SanDisk und Micron; der Index testete dabei erstmals seit 16 Monaten seine 200-Tage-Linie.",
            ask: [{ label: "Mehr zur Marktreaktion insgesamt", ref: "s:1" }] },
          { tag: "unbestaetigt", text: "Nvidia rückte laut Berichten näher an eine Marktkapitalisierung von 6 Billionen Dollar; ein CNBC-Bericht vom 24.10. beschreibt laut Titel, Nvidias Rolle als „KI-Financier” (durch Investitionen und Kredite an Cloud-Anbieter wie CoreWeave) werde angesichts der Markterschütterung erstmals ernsthaft getestet – der vollständige Artikeltext war nicht abrufbar." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Meta seine Investitionsprognose weiter anhebt und gleichzeitig CoreWeaves Kreditrisikoaufschläge Mitte Oktober ein Rekordniveau erreichten, während sich der Halbleiterindex SOX zuletzt wieder erholt, zeigt, wie unübersichtlich und uneinheitlich die Lage in der KI- und Chipbranche weiterhin bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Bloomberg: CoreWeave risk gauge hits record, pricing 60% odds of default", url: "https://www.bloomberg.com/news/articles/2026-10-15/coreweave-risk-gauge-hits-record-pricing-60-odds-of-default" },
        { title: "CNBC: CoreWeave credit default swaps hit distress levels as investors sour on AI debt", url: "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html" },
        { title: "Forbes: CoreWeave shares briefly drop to lowest point of 2026 as Goldman Sachs issues upgrade", url: "https://www.forbes.com/sites/antoniopequenoiv/2026/10/19/coreweave-shares-briefly-drop-to-lowest-point-of-2026-as-goldman-sachs-issues-upgrade/" },
        { title: "Yahoo Finance: Chip stocks just fell 8 days in a row", url: "https://finance.yahoo.com/markets/stocks/articles/chip-stocks-just-fell-8-161520543.html" },
        { title: "OKX: SOX gained 1.61%", url: "https://www.okx.com/en-us/orbit/insight/90537074978272" },
        { title: "DigiTimes: Meta financing infrastructure investment capex", url: "https://www.digitimes.com/news/a20261023PD220/meta-financing-infrastructure-investment-capex.html" }
      ]
    },

    /* 14 ENERGIE */
    {
      id: "oelpreis-ttf-gasspeicher-opec-10-25", cats: ["energy", "geo"], when: "Ölpreisanstieg Woche 20.–24.10. · Gasspeicher-Stand 20./22.10. · OPEC+ 4.10., nächstes Treffen 1.11.2026",
      headline: "Brent-Rohöl erreicht den höchsten Settlement-Stand seit Ende April, deutsche Gasspeicher verfehlen weiterhin das Herbstziel, OPEC+ hält an unveränderten Förderquoten fest",
      sec30: "Brent-Rohöl settelte am Freitag, 23.10., bei 116,72 Dollar je Barrel (+3,14 % ggü. Donnerstag, Wochenplus rund 6,2 %) – der höchste Stand seit dem 29. April 2026; die US-Ölsorte WTI settelte bei rund 103,27 bis 103,44 Dollar (+3,8 %). Als Treiber nennen Berichte die Huthi-Angriffe auf Saudi-Arabien und eine unbestätigte iranische Behauptung, mehrere Tanker in der Straße von Hormus beschädigt zu haben. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 20./22.10. bei 61,1 % Füllstand (151,1 TWh) – rund 17,3 Prozentpunkte unter dem Vorjahreswert und damit weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10. Die OPEC+ beließ ihre Förderquoten beim Treffen am 4.10. für November unverändert; das nächste reguläre Treffen ist für den 1.11.2026 angesetzt. Zusätzlich verlängerte die US-Behörde OFAC die Frist für Verhandlungen über eingefrorenes Lukoil-Auslandsvermögen bis zum 21.11.2026.",
      blocks: [
        { h: "Warum ist der Ölpreis zuletzt weiter gestiegen?", items: [
          { tag: "fakt", text: "Brent-Rohöl settelte am Freitag bei 116,72 Dollar je Barrel (+3,14 % bzw. +3,55 Dollar ggü. Donnerstag, Wochenplus rund 6,2 %) – nach Berichten der höchste Stand seit dem 29. April 2026; die US-Ölsorte WTI settelte bei rund 103,27 bis 103,44 Dollar (+3,8 %, Wochenplus rund 2,3 %).",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte die anhaltende Eskalation am Golf, darunter Huthi-Angriffe auf Saudi-Arabien und die wachsende Erwartung erneuter US-Luftschläge gegen Iran.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] },
          { tag: "unbestaetigt", text: "Eine iranische Behauptung, mehrere Tanker in der Straße von Hormus beschädigt zu haben, ist unabhängig nicht überprüft; ein Londoner Analysehaus hob seine Brent-Jahresprognose 2026 von 80 auf 90 Dollar an und nennt im Falle einer fortgesetzten Blockade ein Szenario von bis zu 120 Dollar." }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 20./22.10. bei 61,1 % Füllstand (151,1 TWh) – rund 17,3 Prozentpunkte unter dem Vorjahreswert und damit weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10., das als verfehlt gilt.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] },
          { tag: "unbestaetigt", text: "Zum europäischen Gaspreis TTF liegen für den Zeitraum 23. bis 25.10. keine zuverlässigen, übereinstimmenden aktuellen Angaben vor; eine ältere Quelle nennt für den 19.10. einen Wert von rund 87,73 bis 88,04 Euro je Megawattstunde." }
        ]},
        { h: "Wie ist der Stand bei der OPEC+ und bei Russland-Sanktionen?", items: [
          { tag: "fakt", text: "Die OPEC+ beließ ihre Förderquoten für November beim Treffen am 4.10. unverändert (unter anderem Saudi-Arabien 10,5 Mio. Barrel pro Tag, Russland 9,9 Mio., Irak 4,4 Mio.); das nächste reguläre Treffen ist für den 1.11.2026 angesetzt.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Die US-Behörde OFAC verlängerte die Frist für Verhandlungen über eingefrorenes Auslandsvermögen des russischen Ölkonzerns Lukoil bis zum 21.11.2026; ein Konsortium um den Milliardär Todd Boehly verhandelt laut Berichten über ein Angebot. Rosneft und Lukoil stehen zusammen für rund 50 bis 55 % der russischen Rohölförderung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis auf den höchsten Stand seit Ende April gestiegen ist, während die deutschen Gasspeicher weiterhin unter dem Vorjahresniveau liegen und zusätzlich Sanktionsfragen rund um russische Ölkonzerne offen bleiben, zeigt, wie stark geopolitische Spannungen am Golf und die Energieversorgung Europas derzeit zusammenhängen.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "FinanceFeeds: Brent Crude Oil Price: $116.72 Settle", url: "https://financefeeds.com/brent-crude-oil-price-116-72-saturday-week-ahead-houthi-saudi-fed-28-october-bull-120-bear-108/" },
        { title: "Rigzone: Brent Tops $116 as Middle East Risks Grow", url: "https://www.rigzone.com/news/wire/brent_tops_116_as_middle_east_risks_grow-23-oct-2026-184925-article/" },
        { title: "gasspeicherkarte.de: Gasspeicher-Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" },
        { title: "CNBC: OPEC agrees to keep November oil output targets steady", url: "https://www.cnbc.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady.html" },
        { title: "Berliner Zeitung: Russischer Ölkonzern Lukoil – USA verlängern Verhandlungsfrist bis November", url: "https://www.berliner-zeitung.de/article/russischer-oelkonzern-lukoil-usa-verlaengern-verhandlungsfrist-bis-november-10520293" }
      ]
    },

    /* 15 INTERNATIONAL/GEOPOLITIK: GAZA/TAIWAN */
    {
      id: "gaza-taiwan-international-10-25", cats: ["world", "geo"], when: "Gaza-Waffenstillstand seit 10.10. · China-Kommentar zu Taiwan 24.10. · Taifun Ciampi Mitte Oktober 2026",
      headline: "Der Gaza-Waffenstillstand bleibt nach Berichten fragil, China bezeichnet Taiwans Rüstungskäufe als „töricht”",
      sec30: "Der am 10.10. in Kraft getretene, von den USA vermittelte Waffenstillstand im Gazastreifen (erste Phase eines US-Friedensplans) gilt formal weiter, bleibt laut Berichten aber angespannt: Palästinensische Gesundheitsbehörden melden weiterhin fast tägliche israelische Angriffe, darunter einen Drohnenangriff auf Gaza-Stadt am 23.10. mit 2 Toten; seit Beginn des Waffenstillstands wurden nach diesen Angaben rund 1.400 Palästinenser und 5 israelische Soldaten getötet. In Ostasien bezeichnete Chinas Verteidigungsministerium Taiwans Rüstungskäufe am 24.10. als „töricht”; zugleich setzte die chinesische Küstenwache ihren Druck rund um Taiwan fort. Taiwan wurde zudem Mitte Oktober von Taifun Ciampi getroffen.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen trat am 10.10. als erste Phase eines US-Friedensplans in Kraft und gilt formal weiter." },
          { tag: "unbestaetigt", text: "Palästinensische Gesundheitsbehörden melden laut Berichten weiterhin nahezu tägliche israelische Angriffe, darunter einen Drohnenangriff auf Gaza-Stadt am 23.10. mit 2 Toten; seit Beginn des Waffenstillstands seien nach diesen – unabhängig nicht überprüften – Angaben rund 1.400 Palästinenser und 5 israelische Soldaten getötet worden." }
        ]},
        { h: "Was geschieht zwischen China und Taiwan?", items: [
          { tag: "position", text: "Chinas Verteidigungsministerium bezeichnete Taiwans Rüstungskäufe am 24.10. als „töricht”; Taiwan wertet begleitende Operationen der chinesischen Küstenwache und von Milizbooten rund um die Insel als zunehmenden Druck, während China seine Souveränitätsansprüche über das Gebiet um Taiwan bekräftigt." },
          { tag: "fakt", text: "Taiwan wurde Mitte Oktober zusätzlich von Taifun Ciampi getroffen, mit Berichten über mindestens einen Todesfall und zahlreiche Verletzte." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl der Gaza-Waffenstillstand als auch die Lage zwischen China und Taiwan trotz formal unveränderter Rahmenbedingungen von anhaltenden Spannungen begleitet werden, zeigt, dass sich internationale Konfliktlinien neben der Ukraine und dem Golf weiter fortsetzen, ohne dass es zu offener Eskalation kommt." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "Al Jazeera: What has Trump's Board of Peace achieved in a year since Gaza 'ceasefire'?", url: "https://www.aljazeera.com/news/2026/10/10/what-has-trumps-board-of-peace-achieved-in-a-year-since-gaza" },
        { title: "Washington Post: A US-brokered ceasefire was supposed to end the war in Gaza", url: "https://www.washingtonpost.com/national/2026/10/10/israel-palestinians-hamas-war-gaza-ceasefire-explainer/dcff0b64-c46a-11f1-8170-681419af1cc9_story.html" },
        { title: "Focus Taiwan: Taiwan headline news", url: "https://focustaiwan.tw/society/202610250001" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX schloss die Woche bis Freitag, 23.10., rund 1,7 % im Minus (zuletzt 25.181,65 Punkte, −0,75 %); der Euro Stoxx 50 verlor in der Woche rund 2,2 %, auch Dow Jones (−1,23 %) und S&P 500 (−0,52 %) gaben am Freitag nach." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund nennen Berichte den auf 116,72 Dollar gestiegenen Ölpreis, Frankreichs auf einen 24-Jahres-Höchststand gestiegene Anleiherendite und eine in ihrer genauen Dauer umstrittene, aber heftige Verlustserie beim Halbleiterindex SOX." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Marktplattformen wie Kalshi und Polymarket preisen für die Fed-Sitzung am 28.10. mittlerweile rund 94 % Wahrscheinlichkeit für eine Zinspause ein, nachdem Fed-Chef Kevin Warsh am 16.10. vorsichtige, aber nicht alarmierende Töne angeschlagen hatte." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Fed-Chef Kevin Warsh hatte im September mit einer überraschenden Zinserhöhung auf 3,75 bis 4,00 % überrascht; bei seinem letzten Auftritt vor der Blackout-Periode warnte er vor einem möglichen KI-bedingten Wirtschaftsschock, legte sich aber nicht auf die Oktober-Entscheidung fest." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite liegt bei rund 5,00 % – leicht höher als am Donnerstag, aber weiterhin niedriger als die Vorwochenwerte von 5,07 bis 5,13 %; der Fed-Leitzins liegt bei 3,75 bis 4,00 %." },
    "gold-why": { tag: "einordnung", story: 3, text: "Gold notierte am Freitag je nach Quelle bei rund 3.990 bis 4.030 Dollar und damit weiterhin deutlich unter dem Rekordhoch vom Dienstag (4.381,21 Dollar); übers Wochenende bewegte sich der Preis kaum." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin fiel von rund 81.500 Dollar am Freitag auf rund 80.500 bis 80.800 Dollar am Samstag und stabilisierte sich bis Sonntagmorgen bei rund 80.850 Dollar – weiterhin rund 36 % unter seinem Allzeithoch vom 6.10.2025." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch; am Wochenende gibt es keinen offiziellen EZB-Kurs." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die EZB hält ihren Einlagensatz vor der Sitzung am 29.10. bei 2,50 %; der Markt preist laut Berichten rund 93,5 % Wahrscheinlichkeit für eine erneute Zinspause ein, auch weil Frankreichs stark gestiegene Risikoprämie wie eine zusätzliche Straffung wirkt." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone lag im September laut Eurostat bei 3,8 % – dem höchsten Stand seit September 2023; in Deutschland lag sie laut Destatis bei 3,3 %." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 erneut auf 160,7 Mrd. Euro; die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11., die abschließende Bundestagsabstimmung für den 27.11.2026 angesetzt." },
    "debt-brake": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof warnt vor einem bis 2030 auf 31,2 % steigenden Deckungslückenwert und vor einem ungedeckten Konsolidierungsbedarf von rund 108 Mrd. Euro für 2028 bis 2030." },
    "rente-basics": { tag: "fakt", story: 6, text: "Die Rentenkommission hatte im Juni vorgeschlagen, die abschlagsfreie „Rente mit 63” nach 45 Beitragsjahren abzuschaffen; ein Unions-Kompromiss sähe sie künftig nur noch bei 45 Jahren im selben Beruf vor, wogegen SPD-Vertreter Kürzungen bei Erziehungs- und Pflegezeiten ablehnen." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Eine YouGov-Umfrage vom 25.10. zeigt, dass nur 23 % der Befragten an einen Fortbestand der Koalition bis 2029 glauben; eine Forsa-Umfrage (13.–19.10.) sieht nur 11 % zufrieden mit der Arbeit von Kanzler Merz." },
    "why-oil-up-geo": { tag: "fakt", story: 14, text: "Brent-Rohöl settelte am Freitag bei 116,72 Dollar je Barrel – dem höchsten Stand seit Ende April 2026; Berichte nennen als Hintergrund die anhaltende Eskalation am Golf, darunter Huthi-Angriffe auf Saudi-Arabien." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Der Oktober markiert laut UKMTO weiterhin die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Kriegsbeginn Ende Februar 2026; CENTCOM und Iran machen weiterhin gegensätzliche Angaben zur Kontrolle der Wasserstraße." },
    "defence-order": { tag: "unbestaetigt", story: 9, text: "Zum Arminius-Programm gibt es weiterhin keinen finalen Vertrag; die parlamentarische Befassung ist für den 9.12.2026 angesetzt, Rheinmetalls Anteil wird auf rund 12,4 Mrd. Euro geschätzt. Zusätzlich werden Gespräche über neue Marschflugkörper-Verträge berichtet." },
    "defence-stocks": { tag: "fakt", story: 10, text: "RTX, Lockheed Martin, Northrop Grumman und General Dynamics meldeten in der „Defense Earnings Week” Mitte/Ende Oktober allesamt Rekord-Auftragsbestände; Saabs Auftragseingang stieg im dritten Quartal um 216 %." },
    "ma-steps": { tag: "fakt", story: 11, text: "LSEG kauft den Kreditmarkt-Datenanbieter Octus von Permira für 3,5 Mrd. Dollar; EQT übernimmt Qiagen für rund 10,8 Mrd. Euro, mit der Abu Dhabi Investment Authority und CPP Investments als Co-Investoren." },
    "take-private-why": { tag: "unbestaetigt", story: 11, text: "BASF soll laut Kreisen sein Angebot für Evonik auf 24 Euro je Aktie (über 11 Mrd. Euro) erhöht haben; weder BASF noch Evonik haben dies offiziell bestätigt." },
    "deal-risks": { tag: "unbestaetigt", story: 11, text: "Die Verwaltungsräte von Tesla und SpaceX prüfen in jeweils unabhängigen Ausschüssen eine mögliche Fusion; Elon Musk ist wegen eines Interessenkonflikts nicht an den Gesprächen beteiligt, ein verbindliches Angebot liegt nicht vor." },
    "private-credit-what": { tag: "fakt", story: 12, text: "S&P senkte den Ausblick für Blackstones Private-Credit-Flaggschifffonds BCRED von „positiv” auf „stabil”, nachdem Abschreibungen aus den Jahrgängen 2021/22 den Nettoinventarwert belastet hatten." },
    "redemption-limits": { tag: "fakt", story: 12, text: "Bei BCRED wollten Anleger im dritten Quartal 2026 netto rund 1,4 Mrd. Dollar zurückziehen, ausgezahlt wurden erneut nur 5 % des Nettoinventarwerts – das vertragliche Quartalslimit." },
    "nonaccrual-default": { tag: "unbestaetigt", story: 12, text: "Blue Owl verzeichnete laut Berichten Rücknahmewünsche von rund 39 % bei einem 5-Mrd.-Dollar-Technologie-Kreditfonds und kappte die Auszahlung erneut auf 5 %." },
    "ai-capex": { tag: "fakt", story: 13, text: "Meta hob seine Investitionsprognose für 2026 nach den Quartalszahlen vom 21.10. auf 135 bis 145 Mrd. Dollar an, bei negativem freiem Cashflow im dritten Quartal." },
    "custom-chips": { tag: "unbestaetigt", story: 13, text: "Berichte zur genauen Dauer der „längsten SOX-Verlustserie seit 2008” widersprechen sich; übereinstimmend berichten Quellen aber, dass sich der Index am 23. und 24.10. erholte, angeführt von Speicherchip-Werten wie SK Hynix, SanDisk und Micron." },
    "circular-financing": { tag: "fakt", story: 13, text: "CoreWeaves 5-Jahres-Kreditausfallversicherungen erreichten am 15./16.10. mit rund 1.194,5 Basispunkten einen Rekordwert; die implizite Ausfallwahrscheinlichkeit über 5 Jahre liegt bei über 60 %." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 20./22.10. bei 61,1 % Füllstand (151,1 TWh) – rund 17,3 Prozentpunkte unter dem Vorjahreswert und unter dem verfehlten Herbstziel von 80 %." },
    "opec-plus-why": { tag: "fakt", story: 14, text: "Die OPEC+ beließ ihre Förderquoten für November beim Treffen am 4.10. unverändert; das nächste reguläre Treffen ist für den 1.11.2026 angesetzt." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent-Rohöl settelte zuletzt bei 116,72 Dollar je Barrel; Öl- und Gaspreise bleiben damit Belastungsfaktoren für Sprit-, Heiz- und Transportkosten in Europa." }
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
      q: "Angenommen, Fed-Chef Kevin Warsh würde bei der Sitzung am 28.10.2026 entgegen der Markterwartung von rund 94 % den Leitzins senken statt ihn zu halten. Was würde das unter sonst gleichen Bedingungen am ehesten für die Rendite von US-Staatsanleihen und für stark fremdfinanzierte KI-Firmen wie CoreWeave bedeuten?",
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
      explain: "Laut UKMTO verzeichnete der Oktober 2026 weiterhin die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Beginn des Konflikts Ende Februar 2026."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 14,
      q: "Angenommen, die Angriffe auf saudische Energie- und Verteidigungsinfrastruktur würden sich in den kommenden Wochen weiter verschärfen. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis und die Inflation in der Eurozone bedeuten?",
      options: [
        "Einen automatisch sinkenden Ölpreis und sinkende Inflation",
        "Keine Auswirkung, da Ölpreis und Inflation unabhängig voneinander sind",
        "Eine automatische Zinssenkung der EZB",
        "Tendenziell einen weiter steigenden Ölpreis und zusätzlichen Druck auf die Inflation"
      ],
      answer: 3,
      explain: "Eine weitere Eskalation am Golf würde laut der in Meldung 14 beschriebenen Kette tendenziell den Ölpreis zusätzlich treiben und damit auch die Inflation in der Eurozone belasten."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Was zeigt die YouGov-Umfrage vom 25.10.2026 zur Koalition aus Union und SPD?",
      options: [
        "88 % glauben an einen Fortbestand der Koalition bis 2029",
        "Nur 23 % glauben an einen Fortbestand der Koalition bis 2029",
        "Die Koalition wurde bereits aufgelöst",
        "Alle Befragten erwarten ein Ende noch in diesem Jahr"
      ],
      answer: 1,
      explain: "Laut der YouGov-Umfrage vom 25.10. glauben nur 23 % der Befragten an einen Fortbestand der Koalition bis zur nächsten planmäßigen Bundestagswahl 2029; eine Mehrheit erwartet ein früheres Ende."
    }
  ]
};
