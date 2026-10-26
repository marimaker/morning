// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-26",
  dateLabel: "Montag, 26. Oktober 2026",
  updatedLabel: "Recherchestand 26.10.2026",
  marketNote: "Diese Ausgabe entsteht am Montagmorgen, 26.10.2026, vor Eröffnung der europäischen Börsen (Xetra startet 9 Uhr MEZ, die Wall Street 15:30 MEZ). Für DAX, Euro Stoxx 50, Dow Jones, S&P 500, Nasdaq Composite, den Halbleiterindex SOX sowie für die Renditen von US- und Bundesanleihen gilt deshalb weiterhin der Schlussstand von Freitag, 23.10.2026, da zum Redaktionsschluss noch keine Kassakurse für Montag vorliegen; Vorbörsen-Indikationen (Futures) werden ausdrücklich als vorläufig gekennzeichnet. Öl-Futures und Bitcoin handeln dagegen bereits seit Sonntagabend bzw. durchgehend; hier wird der aktuellste verfügbare Montagfrüh-Stand gezeigt. Da Europa am 25.10. auf Winterzeit (MEZ, UTC+1) umgestellt hat, die USA aber erst am 1.11. umstellen, beträgt die Zeitdifferenz zur US-Ostküste bis dahin nur noch 5 statt 6 Stunden – wichtig für die Fed-Sitzung am 28.10. (siehe Meldung 2). Einzelne Werte (insbesondere DAX-Schlussstand, Euro-Stoxx-50-Schlussstand, VIX und die Bund-Rendite) werden von verschiedenen Quellen zu leicht unterschiedlichen Zeitpunkten und mit leicht abweichenden Werten gemessen; Abweichungen sind entsprechend gekennzeichnet (Meldung 1).",

  top: [
    { text: "Der DAX schloss die Handelswoche bis Freitag, 23.10., bei 25.181,65 Punkten (−0,75 %, Wochenbilanz je nach Quelle rund −1,7 bis −2,0 %), der Euro Stoxx 50 bei rund 6.068 Punkten (−0,3 %, Wochenbilanz −2,2 %); auch Nasdaq (−0,7 % Wochenbilanz) und S&P 500 (−0,5 % Wochenbilanz) gaben nach, während der Dow Jones die Woche trotz eines schwachen Freitags (−1,23 %) per Saldo rund 0,4 % im Plus abschloss. Vorbörsen-Indikationen zeigen für Montag eine leichte Erholungstendenz vor einer Woche mit Quartalszahlen von Microsoft, Alphabet und Amazon und der Fed-Entscheidung am Mittwoch.", ref: "s:1" },
    { text: "Laut einem CNN-Bericht vom 25.10. verfügt das US-Regionalkommando CENTCOM über ausgearbeitete Angriffspläne gegen Iran, die binnen 96 Stunden nach einem Befehl von Präsident Trump umsetzbar wären. Trump schloss einen Angriff für Sonntag aus, hatte tags zuvor aber noch einen möglichen Angriff „schon morgen” angedeutet. CENTCOM-Befehlshaber Admiral Brad Cooper erklärte nach einem Flug über die Straße von Hormus am Sonntag, die Wasserstraße sei „frei von iranischen Seeminen” – eine Einschätzung, der Iran widerspricht. Der Ölpreis gab am Montagmorgen nach dem Freitags-Höchststand von 116,72 Dollar wieder nach.", ref: "s:8" },
    { text: "Russland und die Ukraine bestätigten nach einem rund dreistündigen Treffen zwischen US-Sondergesandtem Witkoff und Kreml-Chef Putin in St. Petersburg (21.10.) erneut geplante Dreiergespräche „um den 10. November” in Abu Dhabi; danach griff Russland nach ukrainischen Angaben erneut ein Kraftwerk in Charkiw an. Präsident Trump drohte zugleich, die Frist für neue Zölle gegen Handelspartner Russlands deutlich zu verkürzen, sollte es keine Einigung geben.", ref: "s:7" },
    { text: "Beim Chemiekonzern Evonik soll BASF sein Angebot laut Kreisen weiterhin auf 24 Euro je Aktie (über 11 Mrd. Euro) erhöht haben, ohne dass dies von BASF oder Evonik offiziell bestätigt wurde; beim Diagnostik-Konzern Qiagen unterstützen Vorstand und Aufsichtsrat die rund 10,8 Mrd. Euro schwere Übernahme durch den EQT-XI-Fonds. In Deutschland hält Bundeskanzler Merz an der geplanten Einschränkung der abschlagsfreien Rente mit 63 fest, während aus Teilen der SPD weiterhin Widerstand kommt.", ref: "s:11" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.181,65", change: "−0,75 % (−190 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Wochenbilanz", text: "Je nach Quelle schloss der DAX die Handelswoche bis Freitag zwischen rund 1,7 und 2,0 % im Minus; eine Quelle nennt für den Freitagsschluss abweichend 25.128 Punkte (−1,0 %) statt 25.181,65 Punkte (−0,75 %) – beide Angaben weisen in dieselbe Richtung, der genaue Punktestand bleibt leicht uneinheitlich." },
        { label: "Montag-Vorbörse", text: "Laut Vorbörsen-Indikationen (Stand rund 8 Uhr MEZ) notierte der DAX-Future rund 50 Punkte höher bei etwa 25.230 bis 25.314 Punkten – eine unbestätigte, vorläufige Einschätzung vor der Eröffnung, die sich bis 9 Uhr noch ändern kann." }
      ],
      moved: {
        intro: "Als Hintergrund für Freitag nennen Berichte:",
        items: [
          "Der auf 116,72 Dollar gestiegene Ölpreis nach der Eskalation am Golf nährte Inflationssorgen; mehr dazu in Meldung 8.",
          "Der schwache französische Einkaufsmanagerindex und die anhaltende französische Haushaltslage belasteten die Stimmung zusätzlich; mehr dazu in Meldung 4.",
          "Für den Montagvormittag nennen Berichte als möglichen Stimmungsaufheller den am Montagmorgen wieder leicht gefallenen Ölpreis, nachdem Präsident Trump einen unmittelbaren Angriff auf Iran ausgeschlossen hatte; mehr dazu in Meldung 8."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zur Entwicklung des Halbleiterindex SOX und zu CoreWeave/Meta/Nvidia in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Frankreich-Sorgen lassen Dax weiter absacken", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-frankreich-sorgen-lassen-12180188" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.068,22", change: "−0,3 % (−19 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als am Vortag.",
      compare: [
        { label: "Wochenbilanz", text: "Der Euro Stoxx 50 verlor in der Handelswoche bis Freitag rund 2,2 %; eine Quelle nennt für Freitag abweichend 6.059,96 Punkte (−0,44 %) statt 6.068,22 Punkte (−0,3 %)." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der gestiegene Ölpreis belastete die Stimmung (Settlement Freitag 116,72 Dollar, höchster Stand seit Ende April).",
          "Schwäche bei Luxusgüterwerten (u. a. Kering) sowie die auf einen 24-Jahres-Höchststand gestiegene französische Anleiherendite drückten zusätzlich; mehr dazu in Meldung 4."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die EZB-Zinsentscheidung am 29.10. und die französische Risikoprämie werden in Meldung 4 behandelt.", ref: "s:4" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 schließt wegen Kering 0,3 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-wegen-kering-0-3-prozent-tiefer/70400567" }
    },
    "sp500": {
      label: "S&P 500", value: "7.623,68", change: "−0,52 % (−39,75 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Wochenbilanz", text: "Der S&P 500 verlor in der Handelswoche bis Freitag rund 0,5 %, der Dow Jones legte dagegen per Saldo rund 0,4 % zu – getragen von Energie- und Industriewerten, die vom gestiegenen Ölpreis profitierten." },
        { label: "Volatilitätsindex VIX", text: "Quellen nennen für den VIX am Freitag unterschiedliche Werte: 19,27 Punkte (−0,93 %) laut einer Agenturmeldung, 19,45 Punkte (+2,21 %) laut einer anderen – beide Angaben liegen aber in einer ähnlichen Größenordnung von rund 19 bis 19,5 Punkten, moderat erhöht, aber ohne Panikniveau." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Der auf über 116 Dollar gestiegene Ölpreis nährte Inflationssorgen vor der Fed-Sitzung am Mittwoch.",
          "Metas am 21.10. bekanntgegebene Pläne für eine neue Aktienklasse zur KI-Finanzierung sowie auf rund 825 Mrd. Dollar bezifferte Leasingverpflichtungen lösten laut Berichten einen breiteren Tech-Ausverkauf aus, der auch Nvidia (−4 %) erfasste; mehr dazu in Meldung 13."
        ]
      },
      important: [
        { area: "Fed", text: "Die Markterwartungen vor der FOMC-Sitzung am 28.10. werden in Meldung 2 behandelt.", ref: "s:2" }
      ],
      source: { title: "Yahoo Finance/AP: How major US stock indexes fared Friday 10/23/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-201458598.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "25.955,34", change: "−0,21 % (−53,52 Pkt., Fr-Schluss)", dir: "down", asof: "Schluss Fr 23.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Chip-Werte", text: "Der Halbleiterindex SOX schloss Freitag bei rund 10.779 Punkten (+0,44 %) und damit leicht im Plus, nach einer mehrtägigen, in ihrer genauen Länge umstrittenen Verlustserie (Quellen nennen 8 Tage; manche sprechen von der längsten Verlustserie seit 2008, andere seit 2006)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Freitag:",
        items: [
          "Technologiewerte blieben insgesamt volatil angesichts der KI-Bewertungsdebatte und der Sorgen um CoreWeaves Kreditrisiko; mehr dazu in Meldung 13."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu CoreWeave, Meta, Nvidia und dem Halbleitersektor in Meldung 13.", ref: "s:13" }
      ],
      source: { title: "Yahoo Finance/AP: How major US stock indexes fared Friday 10/23/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-201458598.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1193", change: "leicht niedriger als 1,1234 am Mittwoch", dir: "down", asof: "EZB-Referenzkurs Fr 23.10.26", story: 3,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Montag", text: "Die EZB veröffentlicht ihren Referenzkurs für Montag erst im Tagesverlauf; zum Redaktionsschluss lag noch keine neue offizielle Notierung vor." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung von 1,1234 auf 1,1193 Dollar wurde in den verfügbaren Quellen keine ausdrückliche Begründung genannt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Sitzung am 29.10. und zur französischen Risikoprämie in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "EZB: Euro-Referenzkurs (Grafik USD)", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 4,99–5,00 %", change: "leichter Rückgang von den Vorwochenhochs (5,07–5,15 %)", dir: "down", asof: "Stand Fr 23.10.26", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,00 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,00 % Zinsen pro Jahr.",
      compare: [
        { label: "Leitzins", text: "Der Fed-Leitzins liegt weiterhin bei 3,75 bis 4,00 % (seit der Erhöhung am 16.9.2026); die Rendite liegt damit gut einen Prozentpunkt darüber." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anleger suchten laut CNBC angesichts der KI-Bewertungssorgen weiterhin Schutz in Anleihen, wodurch die Rendite von den Vorwochenhochs zurückkam.",
          "Die FOMC-Blackout-Periode läuft seit 17.10. bis zum 29.10.; die Zinsentscheidung fällt am 28.10. um 14 Uhr Eastern Time (19 Uhr MEZ)."
        ]
      },
      important: [
        { area: "Fed", text: "Mehr zur Blackout-Periode und den Marktwetten vor der Sitzung am 28.10. in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "CNBC: 10-year Treasury yield drops back to 5% this week as investors seek cover from AI worries", url: "https://www.cnbc.com/2026/10/23/bonds-yields-us-treasurys.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,30–3,37 %", change: "leicht höher als 3,30–3,34 % am Freitag", dir: "up", asof: "Stand Mo 26.10.26 früh", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Frankreich", text: "Frankreichs 10-Jahres-Rendite fiel am Montag um rund 0,06 Punkte auf 4,95 % (von zuvor 5,04 bis 5,14 %), nachdem Moody's die französische Bonität am Freitag/Samstag bei Aa3 bestätigt hatte; der Risikoaufschlag zu Bundesanleihen (OAT/Bund-Spread) liegt damit bei rund 1,58 Prozentpunkten (158 Basispunkten) – etwas niedriger als die zuvor berichteten 171,8 Basispunkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Frühere Berichte hatten für Freitag auch einen Wert von bis zu 3,46 % genannt; die hier recherchierten Quellen bestätigen für den 23.10. eher eine Spanne von 3,30 bis 3,34 %, der höhere Wert von 3,46 % konnte nicht unabhängig bestätigt werden und bezog sich möglicherweise auf einen anderen Zeitpunkt oder eine andere Laufzeit."
        ]
      },
      important: [
        { area: "Frankreich", text: "Moody's bestätigte Frankreichs Bonität bei Aa3 mit weiterhin negativem Ausblick; mehr dazu in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "ARIVA.DE/finanzen.at: Deutsche Anleihen – Kursverluste, Entspannung am Freitag", url: "https://www.ariva.de/news/deutsche-anleihen-kursverluste-entspannung-am-12181478" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.990–4.030 $", change: "3-Monats-Tief, leicht fallend", dir: "down", asof: "Stand Fr 23.10.26", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 3.990 bis 4.030 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Rekordhoch", text: "Gold liegt damit weiterhin deutlich unter seinem Rekordhoch von 4.381,21 Dollar vom Dienstag, 20.10., und erreichte laut Yahoo Finance am Freitag ein 3-Monats-Tief." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der gestiegene Ölpreis und die leicht erholten Anleiherenditen machten Gold im Vergleich weniger attraktiv; anhaltende Gewinnmitnahmen nach dem Rekordhoch setzten sich fort."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Sitzung am 28.10. in Meldung 2.", ref: "s:2" }
      ],
      source: { title: "Yahoo Finance: Gold price today – Gold opens at 3-month lows as oil prices keep rising", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-price-today-friday-october-23-2026-gold-opens-at-3-month-lows-as-oil-prices-keep-rising-111248003.html" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 114,50 $ (Mo-früh, Future)", change: "−1,8 bis −2,0 % ggü. Fr-Settlement 116,72 $", dir: "down", asof: "Stand Mo 26.10.26 früh", story: 14, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Rund 114 bis 117 Dollar je Fass (159 Liter) liegen weiterhin deutlich über dem Niveau vom Vormonat.",
      compare: [
        { label: "Freitags-Settlement", text: "Brent-Rohöl settelte am Freitag bei 116,72 Dollar je Barrel – laut Berichten der höchste Stand seit Ende April 2026; die US-Ölsorte WTI settelte bei rund 103,27 bis 103,44 Dollar." },
        { label: "Montag", text: "WTI fiel am Montagmorgen auf rund 100,97 bis 101,10 Dollar (−2,1 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Der Anstieg auf 116,72 Dollar am Freitag geht auf die anhaltenden Huthi-Angriffsdrohungen gegen Saudi-Arabien und die Lage in der Straße von Hormus zurück; mehr dazu in Meldung 8.",
          "Der Rückgang am Montagmorgen folgt auf Präsident Trumps Aussage, es werde am Sonntag keinen Angriff auf Iran geben, sowie darauf, dass Saudi-Arabien keine Schäden durch die übers Wochenende gemeldeten Huthi-Drohungen auf Yanbu/Rabigh meldete."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf, zur Straße von Hormus und zu den berichteten CENTCOM-Angriffsplänen gegen Iran in Meldung 8.", ref: "s:8" },
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }
      ],
      source: { title: "Bloomberg: US equity futures climb as crude oil price dips", url: "https://www.bloomberg.com/news/articles/2026-10-25/us-equity-futures-climb-as-crude-oil-price-dips-markets-wrap" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 80.500 $", change: "leichter Rückgang von rund 81.500 $ am Freitag", dir: "down", asof: "Stand Mo 26.10.26 früh", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 80.000 bis 81.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Allzeithoch", text: "Bitcoin liegt damit weiterhin deutlich unter seinem Allzeithoch von 126.198,07 Dollar vom 6.10.2025." },
        { label: "Wochenendverlauf", text: "Von rund 81.500 Dollar am Freitagmorgen fiel Bitcoin übers Wochenende auf eine Spanne von rund 80.000 bis 80.900 Dollar am Montagmorgen." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Für die Bewegung übers Wochenende wurde kein spezifischer Einzelgrund genannt; Berichte verweisen auf die näher rückende Fed-Sitzung am 28.10. und die allgemein vorsichtige Stimmung bei Risikoanlagen."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "cryptoticker.io: Bitcoin Kurs – Wochenendverlauf", url: "https://cryptoticker.io/de/bitcoin-kurs-50-tage-linie-24-oktober-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-freitagsschluss-woche-10-26", cats: ["markets"], when: "Schluss Fr 23.10.2026 · Wochenbilanz bis 23.10.2026 · Vorbörse Mo 26.10.2026",
      headline: "DAX und Euro Stoxx 50 schließen die Woche mit Verlusten, der Dow Jones hält sich per Saldo im Plus, Vorbörsen-Indikationen zeigen am Montag eine leichte Erholungstendenz",
      sec30: "Der DAX schloss am Freitag, 23.10., bei 25.181,65 Punkten (−0,75 %, Wochenbilanz je nach Quelle rund −1,7 bis −2,0 %), der Euro Stoxx 50 bei rund 6.068 Punkten (−0,3 %, Wochenbilanz −2,2 %). Bei den US-Indizes fiel der S&P 500 um 0,52 % auf 7.623,68 Punkte (Wochenbilanz −0,5 %), die Nasdaq Composite um 0,21 % auf 25.955,34 Punkte (Wochenbilanz −0,7 %); der Dow Jones gab am Freitag zwar um 1,23 % auf 52.215,16 Punkte nach, schloss die Woche aber per Saldo rund 0,4 % im Plus – getragen von Energie- und Industriewerten. Der Halbleiterindex SOX schloss Freitag bei rund 10.779 Punkten (+0,44 %) nach einer mehrtägigen, in ihrer genauen Länge umstrittenen Verlustserie. Vorbörsen-Indikationen zeigen für Montag einen rund 50 Punkte höheren DAX-Future und leicht positive US-Futures vor einer Woche mit Quartalszahlen von Microsoft, Alphabet und Amazon sowie der Fed-Entscheidung am Mittwoch.",
      blocks: [
        { h: "Wie haben sich DAX und Euro Stoxx 50 entwickelt?", items: [
          { tag: "fakt", text: "Der DAX fiel am Freitag um 0,75 % (−190 Punkte) auf 25.181,65 Punkte; eine andere Quelle nennt für denselben Tag abweichend 25.128 Punkte (−1,0 %). Der Euro Stoxx 50 fiel um 0,3 % (−19 Punkte) auf rund 6.068 Punkte, eine Quelle nennt abweichend 6.059,96 Punkte (−0,44 %). Beide Indizes schlossen die Woche je nach Quelle zwischen rund 1,7 und 2,2 % im Minus.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte den auf 116,72 Dollar gestiegenen Ölpreis (Meldung 8), Schwäche bei Luxusgüterwerten sowie Frankreichs auf einen 24-Jahres-Höchststand gestiegene Anleiherendite (Meldung 4)." }
        ]},
        { h: "Wie entwickelten sich die US-Indizes, und warum schloss der Dow die Woche im Plus?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 0,52 % (−39,75 Punkte) auf 7.623,68 Punkte, die Nasdaq Composite um 0,21 % (−53,52 Punkte) auf 25.955,34 Punkte, der Dow Jones um 1,23 % (−652,82 Punkte) auf 52.215,16 Punkte. Trotz des schwachen Freitags schloss der Dow die Woche per Saldo rund 0,4 % im Plus, während S&P 500 und Nasdaq die Woche mit rund −0,5 % bzw. −0,7 % abschlossen.",
            ask: [{ label: "Mehr zur Fed-Sitzung am 28.10.", ref: "s:2" }] },
          { tag: "einordnung", text: "Dass der Dow die Woche im Plus abschloss, obwohl er am Freitag am stärksten verlor, erklären Berichte mit der Gewichtung von Energie- und Industriewerten, die vom gestiegenen Ölpreis profitierten, während S&P 500 und Nasdaq stärker von Technologiewerten abhängen." }
        ]},
        { h: "Wie entwickelte sich der Halbleiterindex SOX – und warum widersprechen sich Berichte?", items: [
          { tag: "unbestaetigt", text: "Mehrere Berichte beschreiben für den Zeitraum bis zum 22.10. eine achttägige Verlustserie beim SOX, die manche als die längste seit 2008, andere als die längste seit 2006 einordnen; der Index soll dabei zeitweise bis zu 16 bis 18 % unter seinem Oktoberhoch vom 6.10. notiert haben. Welche Angabe exakt zutrifft, lässt sich aus den verfügbaren Quellen nicht abschließend klären.",
            ask: [{ label: "Mehr zu CoreWeave, Meta und dem Halbleitersektor", ref: "s:13" }] },
          { tag: "fakt", text: "Übereinstimmend berichten Quellen, dass sich der SOX am Freitag, 23.10., mit +0,44 % auf rund 10.779 Punkte stabilisierte, nachdem Speicherchip-Werte wie SK Hynix, SanDisk und Micron die Erholung angeführt hatten." }
        ]},
        { h: "Was zeigen die Vorbörsen-Indikationen für Montag?", items: [
          { tag: "unbestaetigt", text: "Laut Vorbörsen-Indikationen notierte der DAX-Future am Montagmorgen rund 50 Punkte höher bei etwa 25.230 bis 25.314 Punkten; auch Euro-Stoxx- und US-Futures zeigten sich leicht positiv. Als möglichen Grund nennen Berichte den am Montagmorgen wieder leicht gefallenen Ölpreis, nachdem Präsident Trump einen unmittelbaren Angriff auf Iran ausgeschlossen hatte (Meldung 8). Diese Angaben sind vorläufige Vorbörsenwerte, keine Handelsschlüsse." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass europäische und US-Indizes die Woche uneinheitlich abschlossen, während der Halbleiterindex SOX nach einer heftigen, in ihrer genauen Dauer umstrittenen Verlustserie zuletzt wieder zulegte, zeigt, wie eng Konjunktursorgen, der Ölpreis und die KI-Bewertungsdebatte derzeit zusammenhängen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, Gold/Bitcoin/Bund-Rendite in Meldung 3, die Lage am Golf in Meldung 8, CoreWeave/Meta/SOX im Detail in Meldung 13.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move"],
      sources: [
        { title: "ARIVA.DE: ROUNDUP/Aktien Frankfurt Schluss – Frankreich-Sorgen lassen Dax weiter absacken", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-frankreich-sorgen-lassen-12180188" },
        { title: "onvista: Aktien Frankfurt – Dax schwächelt weiter, Wochenbilanz negativ", url: "https://www.onvista.de/news/2026/10-23-aktien-frankfurt-dax-schwaechelt-weiter-wochenbilanz-negativ-0-10-26567723" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 schließt wegen Kering 0,3 Prozent tiefer", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-schliesst-wegen-kering-0-3-prozent-tiefer/70400567" },
        { title: "Yahoo Finance/AP: How major US stock indexes fared Friday 10/23/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-201458598.html" },
        { title: "Investing.com: Chip index SOX posts longest losing streak since 2008 as AI worries deepen", url: "https://www.investing.com/news/stock-market-news/chip-index-sox-posts-longest-losing-streak-since-2008-as-ai-worries-deepen-4955401" },
        { title: "finanzen.net: Heute im Fokus – 26.10.2026 (Tagesvorschau)", url: "https://www.finanzen.net/nachricht/aktien/heute-im-fokus-26-10-2026-16005771" }
      ]
    },

    /* 2 MÄRKTE/WIRTSCHAFT: FED/WARSH/US-DATEN */
    {
      id: "fed-warsh-blackout-us-daten-10-26", cats: ["markets", "economy"], when: "FOMC-Blackout 17.–29.10. · Sitzung 28.10.2026, 19 Uhr MEZ",
      headline: "Fed-Chef Kevin Warsh bleibt in der Blackout-Periode vor der Oktober-Sitzung, Marktpreisung zeigt weiterhin eine hohe Wahrscheinlichkeit für eine Zinspause",
      sec30: "Die FOMC-Blackout-Periode läuft seit Samstag, 17.10., bis Donnerstag, 29.10.; die Zinsentscheidung fällt am Mittwoch, 28.10., um 14 Uhr Eastern Time – wegen der Zeitumstellung in Europa am 25.10. entspricht das 19 Uhr MEZ. Da sich Fed-Mitglieder während der Blackout-Periode nicht öffentlich äußern, bleibt Fed-Chef Kevin Warshs letzter öffentlicher Auftritt vom 16.10. bei den IWF/Weltbank-Jahrestagungen in Bangkok maßgeblich: Er sagte, die Wirtschaft habe sich seit der September-Erhöhung „largely as expected” entwickelt, warnte aber vor einem möglichen KI-bedingten wirtschaftlichen Schock. Laut CME FedWatch und Prognosemarktplattformen liegt die eingepreiste Wahrscheinlichkeit für eine erneute Zinspause am 28.10. bei rund 90 bis 93 %; für die Dezember-Sitzung preisen einzelne Quellen dagegen eine höhere Wahrscheinlichkeit für eine erneute Anhebung ein. Ein durch den Regierungsshutdown verzögerter Datenkalender erschwert weiterhin die Einordnung aktueller US-Konjunkturdaten.",
      blocks: [
        { h: "Was sagte Fed-Chef Warsh vor Beginn der Blackout-Periode?", items: [
          { tag: "position", text: "Kevin Warsh erklärte am 16.10. bei den IWF/Weltbank-Jahrestagungen in Bangkok, die US-Wirtschaft habe sich seit der Zinserhöhung im September „largely as expected” entwickelt; er wollte sich nicht auf einzelne Sitzungen festlegen. Zugleich warnte er, der Weg der KI-Entwicklung werde „very bumpy”, und ein möglicher KI-bedingter wirtschaftlicher Schock könne die Preisstabilität gefährden.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht mehr öffentlich zur Geldpolitik äußern, läuft vom 17.10. bis zum 29.10.; die Zinsentscheidung wird am Mittwoch, 28.10., um 14 Uhr Eastern Time bekanntgegeben – das entspricht wegen der europäischen Zeitumstellung am 25.10. nun 19 Uhr MEZ." }
        ]},
        { h: "Wie schätzen Marktplattformen die Oktober-Sitzung ein?", items: [
          { tag: "unbestaetigt", text: "Laut CME FedWatch Tool liegt die eingepreiste Wahrscheinlichkeit für eine Zinspause am 28.10. bei rund 90 bis 93 %, der Rest entfällt überwiegend auf eine erneute Erhöhung. Für die Dezember-Sitzung nennen einzelne Berichte dagegen eine deutlich höhere Wahrscheinlichkeit für eine erneute Anhebung – diese Markteinschätzungen können sich bis zu den jeweiligen Sitzungen noch ändern.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] }
        ]},
        { h: "Welche aktuellen US-Konjunkturdaten spielen eine Rolle?", items: [
          { tag: "fakt", text: "Die US-Verbraucherpreise waren im September um 0,6 % gegenüber dem Vormonat gestiegen (+3,7 % zum Vorjahr), die Erzeugerpreise um 1,3 % zum Vormonat – der größte Anstieg seit März 2022.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] },
          { tag: "unbestaetigt", text: "Ein durch den Regierungsshutdown verzögerter Datenkalender erschwert weiterhin die Einordnung: Offizielle PCE-Inflations- und BIP-Daten für das dritte Quartal werden um den 29.10. erwartet, der genaue Veröffentlichungstermin steht laut Berichten weiterhin unter Vorbehalt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Markterwartung für eine Zinspause trotz anhaltend erhöhter Erzeuger- und Verbraucherpreise hoch bleibt, während gleichzeitig für Dezember wieder eine mögliche Anhebung eingepreist wird, zeigt, wie unsicher Anleger die weitere Zinsentwicklung angesichts des hohen Ölpreises und der KI-Bewertungsdebatte einschätzen." }
        ]}
      ],
      reaction: "Die Markteinordnung dazu findet sich in Meldung 1, die EZB-Seite und globale Zentralbanken in Meldung 4.",
      terms: ["leitzins", "basispunkt", "rendite", "erzeugerpreise"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Axios: Warsh signals steady Fed outlook despite inflation jump", url: "https://www.axios.com/2026/10/16/warsh-federal-reserve-interest-rates" },
        { title: "CNBC: Fed's Warsh says AI development path will be 'very bumpy'", url: "https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html" },
        { title: "CNBC: 10-year Treasury yield drops back to 5% this week as investors seek cover from AI worries", url: "https://www.cnbc.com/2026/10/23/bonds-yields-us-treasurys.html" },
        { title: "BLS: Consumer Price Index – September 2026", url: "https://www.bls.gov/news.release/archives/cpi_10142026.htm" },
        { title: "BLS: Producer Price Index News Release", url: "https://www.bls.gov/news.release/ppi.nr0.htm" }
      ]
    },

    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/BUND */
    {
      id: "gold-bitcoin-eurusd-bund-10-26", cats: ["markets"], when: "Stand Fr 23.10. bis Mo 26.10.2026 früh",
      headline: "Gold fällt auf ein 3-Monats-Tief, Bitcoin gibt übers Wochenende leicht nach, die Bund-Rendite zieht am Montag etwas an",
      sec30: "Gold notierte am Freitag je nach Quelle zwischen rund 3.990 und 4.030 Dollar je Feinunze – laut Yahoo Finance ein 3-Monats-Tief – und damit weiterhin deutlich unter seinem Rekordhoch vom 20.10. (4.381,21 Dollar). Bitcoin fiel von rund 81.500 Dollar am Freitagmorgen auf eine Spanne von rund 80.000 bis 80.900 Dollar am Montagmorgen. Der EZB-Referenzkurs für den Euro lag am Freitag bei 1,1193 Dollar. Die Rendite zehnjähriger Bundesanleihen lag am Freitag bei rund 3,30 bis 3,34 % und zog am Montag auf rund 3,37 % an, während Frankreichs Anleiherendite nach einer von Moody's bestätigten Bonitätsnote auf 4,95 % zurückfiel.",
      blocks: [
        { h: "Wie hat sich Gold entwickelt?", items: [
          { tag: "fakt", text: "Gold notierte am Freitag je nach Quelle und Messzeitpunkt zwischen rund 3.990 und 4.030 Dollar je Feinunze – laut Yahoo Finance ein 3-Monats-Tief – und damit weiterhin deutlich unter dem Rekordhoch von 4.381,21 Dollar vom Dienstag, 20.10.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Als Hintergrund nennen Berichte den gestiegenen Ölpreis und leicht erholte Anleiherenditen, die Gold im Vergleich weniger attraktiv machten, sowie anhaltende Gewinnmitnahmen nach dem Rekordhoch." }
        ]},
        { h: "Wie hat sich Bitcoin übers Wochenende entwickelt?", items: [
          { tag: "unbestaetigt", text: "Bitcoin fiel von rund 81.500 Dollar am Freitagmorgen auf eine Spanne von rund 80.000 bis 80.900 Dollar am Montagmorgen – weiterhin deutlich unter dem Allzeithoch von 126.198,07 Dollar vom 6.10.2025. Für die Bewegung wurde kein spezifischer Einzelgrund genannt.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie haben sich der Euro und die Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "Der EZB-Referenzkurs lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch; zum Redaktionsschluss lag für Montag noch keine neue offizielle EZB-Notierung vor.",
            ask: [{ label: "Was bedeutet ein EUR/USD-Kurs von rund 1,12?", ref: "e:eurusd-meaning" }] },
          { tag: "fakt", text: "Die Rendite zehnjähriger Bundesanleihen lag am Freitag bei rund 3,30 bis 3,34 % und zog am Montag auf rund 3,37 % an; frühere Berichte hatten für Freitag auch einen Wert von bis zu 3,46 % genannt, der sich in der aktuellen Recherche nicht unabhängig bestätigen ließ. Frankreichs Anleiherendite fiel dagegen am Montag auf 4,95 %, nachdem Moody's die französische Bonität am Wochenende bei Aa3 bestätigt hatte – der Risikoaufschlag zu Bundesanleihen liegt damit bei rund 158 Basispunkten.",
            ask: [{ label: "Mehr zur französischen Haushaltslage und zur EZB", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold auf ein 3-Monats-Tief fällt, während Bitcoin übers Wochenende nur leicht nachgibt und sich die Risikoprämie für Frankreich nach der bestätigten Bonitätsnote etwas entspannt, passt zu einer Phase, in der Anleger zwischen Sorgen um KI-Bewertungen, der französischen Haushaltslage und der näher rückenden Fed-Sitzung hin- und herschwanken. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zugrundeliegende Fed-Zinsentwicklung wird in Meldung 2 behandelt, die EZB-Seite in Meldung 4, der Ölpreis in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning"],
      sources: [
        { title: "Yahoo Finance: Gold price today – Gold opens at 3-month lows as oil prices keep rising", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-price-today-friday-october-23-2026-gold-opens-at-3-month-lows-as-oil-prices-keep-rising-111248003.html" },
        { title: "CNBC Select: The price of gold today, Oct. 23, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-23-2026/" },
        { title: "cryptoticker.io: Bitcoin Kurs – unter der 50-Tage-Linie", url: "https://cryptoticker.io/de/bitcoin-kurs-50-tage-linie-24-oktober-2026/" },
        { title: "CNBC: Moody's holds steady on France's credit rating as country grapples with turmoil and higher yields", url: "https://www.cnbc.com/2026/10/23/moodys-holds-steady-on-frances-credit-rating-as-country-grapples-with-turmoil-and-higher-yields.html" },
        { title: "ARIVA.DE/finanzen.at: Deutsche Anleihen – Kursverluste, Entspannung am Freitag", url: "https://www.ariva.de/news/deutsche-anleihen-kursverluste-entspannung-am-12181478" }
      ]
    },

    /* 4 WIRTSCHAFT: EZB/FRANKREICH/MOODYS/SCHNABEL */
    {
      id: "ezb-frankreich-moodys-schnabel-10-26", cats: ["economy", "world"], when: "EZB-Sitzung 29.10. · Moody's-Bestätigung 23./24.10. · Schnabel-Frist 28.10. · Eurozone-/DE-Inflation September 2026",
      headline: "Moody's bestätigt Frankreichs Bonität trotz politischer Spannungen, die französische Anleiherendite entspannt sich etwas, die EZB-Zinsentscheidung am 29.10. rückt näher",
      sec30: "Die EZB hält ihren Einlagensatz vor der Sitzung am 29.10. weiterhin bei 2,50 %; EZB-Präsidentin Lagarde hatte zuletzt erklärt, man entscheide „von Sitzung zu Sitzung”. Die Ratingagentur Moody's bestätigte am Freitag/Samstag (23./24.10.) Frankreichs Bonität bei Aa3 mit weiterhin negativem Ausblick, statt wie von manchen erwartet herabzustufen. Frankreichs 10-Jahres-Rendite, die am 22.10. mit rund 5,06 % einen 24-Jahres-Höchststand erreicht hatte, fiel daraufhin am Montag auf 4,95 %; der Risikoaufschlag gegenüber Bundesanleihen (OAT/Bund-Spread) liegt bei rund 158 Basispunkten. Das strukturelle Problem – laut Berichten rund 105 Mrd. Euro nötige Einsparungen bis 2029 – bleibt dabei ungelöst. Für die Schnabel-Nachfolge im EZB-Direktorium läuft die Nominierungsfrist am 28.10. ab; die Inflation in der Eurozone lag im September bei 3,8 %, in Deutschland bei 3,3 %.",
      blocks: [
        { h: "Wie ist der Stand bei der EZB-Zinsentscheidung am 29.10.?", items: [
          { tag: "fakt", text: "Die EZB hält ihren Einlagensatz seit der Erhöhung im September bei 2,50 %. Die Zinsentscheidung wird am 29.10. um 14:15 MEZ bekanntgegeben, die Pressekonferenz von Präsidentin Lagarde folgt um 14:45 MEZ.",
            ask: [{ label: "Was ist ein Leitzins von 2,50 %?", ref: "t:leitzins" }] },
          { tag: "position", text: "Lagarde hatte zuletzt erklärt, die EZB entscheide „von Sitzung zu Sitzung” und lege sich nicht auf einen vorbestimmten Kurs fest; Marktbeobachter preisen weiterhin überwiegend eine erneute Zinspause ein." }
        ]},
        { h: "Was hat Moody's zu Frankreich entschieden, und wie reagierte der Markt?", items: [
          { tag: "fakt", text: "Moody's bestätigte Frankreichs Kreditwürdigkeit am 23./24.10. bei Aa3, mit weiterhin negativem Ausblick – ein Downgrade, mit dem Teile des Marktes gerechnet hatten, blieb damit aus.",
            ask: [{ label: "Was zeigt eine Anleiherendite?", ref: "e:yield-meaning" }] },
          { tag: "fakt", text: "Frankreichs 10-Jahres-Rendite war am 22.10. mit rund 5,06 % auf einen 24-Jahres-Höchststand gestiegen und damit erstmals seit der Eurokrise über die Rendite zehnjähriger US-Staatsanleihen geklettert; nach der Moody's-Entscheidung fiel sie am Montag auf 4,95 %. Der Risikoaufschlag gegenüber Bundesanleihen (OAT/Bund-Spread) liegt bei rund 158 Basispunkten, etwas niedriger als die zuvor berichteten 171,8 Basispunkte." },
          { tag: "einordnung", text: "Dass die Rendite trotz der bestätigten Bonitätsnote nur leicht zurückging, deuten Berichte darauf hin, dass das strukturelle Problem – rund 105 Mrd. Euro an nötigen Einsparungen bis 2029 – mit der Bestätigung allein nicht gelöst ist; der Ausblick bleibt negativ." }
        ]},
        { h: "Wie ist der Stand bei der Schnabel-Nachfolge?", items: [
          { tag: "fakt", text: "Die Nominierungsfrist für die Euro-Staaten läuft am 28.10. ab; Isabel Schnabel verlässt die EZB bereits zum 3.1.2027 für einen Posten beim IWF, fast ein Jahr vor Ablauf ihrer Amtszeit." },
          { tag: "unbestaetigt", text: "Als mögliche Kandidaten für den Schnabel-Sitz werden laut Berichten unter anderem Jörg Kukies, Markus Brunnermeier, Ulrike Malmendier und Tobias Adrian genannt; für die Lagarde-Nachfolge als EZB-Präsident im Jahr 2027 gelten Pablo Hernández de Cos und Klaas Knot als Favoriten – eine Entscheidung wird frühestens im November in der Eurogruppe erwartet." }
        ]},
        { h: "Wie entwickelt sich die Inflation in Eurozone und Deutschland?", items: [
          { tag: "fakt", text: "Die Inflation in der Eurozone lag im September laut Eurostat bei 3,8 % – dem höchsten Stand seit September 2023; die deutsche Inflation lag laut Destatis bei 3,3 %.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Moody's Frankreichs Bonität bestätigt und sich die Anleiherendite daraufhin etwas entspannt hat, nimmt kurzfristig Druck von den Märkten, löst aber nicht das zugrunde liegende Haushaltsproblem; gleichzeitig muss die EZB vor ihrer Sitzung am 29.10. weiterhin mit einer unbesetzten Personalfrage im eigenen Direktorium und anziehender Inflation umgehen." }
        ]}
      ],
      reaction: "Die Fed-Seite wird in Meldung 2 behandelt, der deutsche Haushalt in Meldung 5.",
      terms: ["leitzins", "inflation", "basispunkt"],
      followups: ["e:ecb-hike", "e:inflation-expectations", "e:central-banks-why"],
      sources: [
        { title: "CNBC: Moody's holds steady on France's credit rating as country grapples with turmoil and higher yields", url: "https://www.cnbc.com/2026/10/23/moodys-holds-steady-on-frances-credit-rating-as-country-grapples-with-turmoil-and-higher-yields.html" },
        { title: "Seoul Economic Daily: France dodges downgrade as Moody's keeps Aa3 rating", url: "https://en.sedaily.com/finance/2026/10/24/france-dodges-downgrade-as-moodys-keeps-aa3-rating" },
        { title: "ARIVA.DE/finanzen.at: Deutsche Anleihen – Kursverluste, Entspannung am Freitag", url: "https://www.ariva.de/news/deutsche-anleihen-kursverluste-entspannung-am-12181478" },
        { title: "onvista: Frist für Vorschläge zur Nachfolge von EZB-Direktorin Schnabel bis 28. Oktober", url: "https://www.onvista.de/news/2026/10-09-frist-fuer-vorschlaege-zur-nachfolge-von-ezb-direktorin-schnabel-bis-28-oktober-0-20-26562225" },
        { title: "Eurostat: Annual inflation up to 3.8% in the euro area", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-16102026-ap" },
        { title: "Destatis: Inflationsrate im September 2026 bei +3,3 %", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_364_611.html" }
      ]
    },

    /* 5 DEUTSCHLAND: BUNDESHAUSHALT */
    {
      id: "bundeshaushalt-2027-stand-10-26", cats: ["germany", "economy"], when: "Rechnungshof-Kritik 18.10. · Haushaltsausschuss-Beratungen bis 11.11. · Bereinigungssitzung 12.11. · Schlussabstimmung 27.11.2026",
      headline: "Beratungen zum Haushalt 2027 laufen unverändert weiter, der Zeitplan mit Bereinigungssitzung am 12. November und Schlussabstimmung am 27. November bleibt bestehen",
      sec30: "Der Regierungsentwurf für den Haushalt 2027 (Gesamtausgaben 555,4 Mrd. Euro, Nettokreditaufnahme 118,7 Mrd. Euro) wurde am 8.9. von Finanzminister Klingbeil im Bundestag eingebracht. Der Bundesrechnungshof hatte am 18.10. die Deckungslücke erneut auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben) beziffert, dem Finanzministerium laut einem Bericht zudem verfassungsrechtlich bedenkliche Praktiken zur Schließung von Finanzierungslücken vorgeworfen und vor einem bis 2030 auf rund 3 Billionen Euro steigenden Schuldenstand gewarnt. Finanzminister Klingbeil verteidigte die hohe Kreditaufnahme zuletzt mit dem Argument, „Verteidigung ohne Schulden” sei „wie eine Mondfahrt ohne Rakete”. Seit dem Rechnungshof-Bericht sind keine neuen Kabinettsbeschlüsse bekannt; die Bereinigungssitzung bleibt für den 12.11. angesetzt, die abschließende Bundestagsabstimmung für Freitag, den 27.11.2026.",
      blocks: [
        { h: "Was sieht der Haushaltsentwurf 2027 vor?", items: [
          { tag: "fakt", text: "Der Regierungsentwurf (beschlossen am 6.7., eingebracht am 8.9. von Finanzminister Klingbeil) sieht Gesamtausgaben von 555,4 Mrd. Euro vor, bei einer Nettokreditaufnahme von 118,7 Mrd. Euro; inklusive Sondervermögen liegt die Gesamtneuverschuldung bei rund 200 Mrd. Euro." }
        ]},
        { h: "Was hatte der Bundesrechnungshof kritisiert?", items: [
          { tag: "fakt", text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro (28,9 % der Gesamtausgaben gegenüber erwarteten Einnahmen von 394,7 Mrd. Euro) und erwartet, dass dieser Anteil bis 2030 auf 31,2 % steigt.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] },
          { tag: "unbestaetigt", text: "Laut einem Bericht wirft der Rechnungshof dem Finanzministerium zudem verfassungsrechtlich bedenkliche „Buchungstricks” zur Schließung von Finanzierungslücken vor; der Gesamtschuldenstand des Bundes könne demnach bis 2030 auf rund 3 Billionen Euro steigen." }
        ]},
        { h: "Wie reagiert die Politik auf die Kritik?", items: [
          { tag: "position", text: "Finanzminister Klingbeil verteidigte die hohe Kreditaufnahme mit dem Argument, „Verteidigung ohne Schulden” sei „wie eine Mondfahrt ohne Rakete”, und bezeichnete die frühere „schwarze Null” als „Fetisch” aus einer früheren Regierungszeit.",
            ask: [{ label: "Was zeigt eine Deckungslücke?", ref: "e:haushalt-basics" }] },
          { tag: "position", text: "Oppositionsvertreter kritisierten laut Berichten die geplante Neuverschuldung des Kernhaushalts von rund 118 Mrd. Euro." }
        ]},
        { h: "Wie ist der aktuelle Stand des Zeitplans?", items: [
          { tag: "fakt", text: "Die Bereinigungssitzung des Haushaltsausschusses ist weiterhin für den 12.11.2026 angesetzt, die zweite Lesung für den 24. bis 27.11. und die dritte Lesung mit der namentlichen Schlussabstimmung für Freitag, den 27.11.2026. Neue Kabinettsbeschlüsse seit dem Rechnungshof-Bericht vom 18.10. sind nicht bekannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich seit dem verschärften Rechnungshof-Bericht keine neuen Beschlüsse ergeben haben, während Finanzminister Klingbeil die hohe Kreditaufnahme weiterhin öffentlich verteidigt, deutet darauf hin, dass die eigentlichen politischen Entscheidungen erst bei der Bereinigungssitzung Mitte November fallen dürften." }
        ]}
      ],
      reaction: "Die Rentendebatte und aktuelle Umfragen werden in Meldung 6 behandelt, die EZB-Seite in Meldung 4.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Deutscher Bundestag: Der Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "ad-hoc-news.de: Bundeshaushalt 2027 – Rechnungshof beziffert Deckungslücke auf 160,7 Milliarden", url: "https://www.ad-hoc-news.de/wirtschaft/bundeshaushalt-2027-rechnungshof-beziffert-deckungsluecke-auf-160-7-milliarden/70351796" },
        { title: "t-online.de: Haushalt 2027 – Rechnungshof wirft Klingbeil „Buchungstricks” vor", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101420390/haushalt-2027-rechnungshof-wirft-klingbeil-buchungsstricks-vor.html" },
        { title: "Handelsblatt: Haushalt 2027 – So verteidigt Klingbeil die hohen Rüstungsausgaben", url: "https://www.handelsblatt.com/politik/deutschland/haushalt-2027-so-verteidigt-klingbeil-die-hohen-ruestungsausgaben-1/100252789.html" }
      ]
    },

    /* 6 DEUTSCHLAND: RENTE/UMFRAGEN/KOALITION */
    {
      id: "rente-umfragen-koalition-10-26", cats: ["germany"], when: "Bas-Rücktritt 12.10. · Merz-Äußerungen Wochenende 24./25.10. · Umfragen 20.–24.10.2026",
      headline: "Kanzler Merz bekräftigt übers Wochenende den Plan zur Einschränkung der abschlagsfreien Rente mit 63, neuer Arbeitsminister Schweitzer signalisiert Kompromissbereitschaft",
      sec30: "Nach dem Rücktritt von Bundesarbeitsministerin und SPD-Co-Chefin Bärbel Bas am 12.10. bekräftigte Bundeskanzler Friedrich Merz übers Wochenende, unter anderem beim Deutschlandtag der Jungen Union, den Plan, die abschlagsfreie Rente nach 45 Beitragsjahren einzuschränken; Ziel sei eine Kabinettsentscheidung bis Weihnachten beziehungsweise – nach zuletzt verschobenem Zeitplan – eine Umsetzung im Frühjahr 2027. CSU-Chef Markus Söder sprach sich für die vollständige Umsetzung des mit der SPD im Juli vereinbarten Reformpakets aus. Bas-Nachfolger Alexander Schweitzer (SPD) zeigte sich demgegenüber kompromissbereit, SPD-Generalsekretär Tim Klüssendorf bekräftigte, man wolle die abschlagsfreie Rente nach 45 Beitragsjahren erhalten. Mehrere Umfragen von Mitte/Ende Oktober zeigen die AfD weiterhin als stärkste Kraft (26 bis 30 %) vor der Union (18 bis 23 %); laut einer Forsa-Erhebung erwarten 56 % ein vorzeitiges Ende der Koalition.",
      blocks: [
        { h: "Worum geht es in der Debatte über die Rente mit 63?", items: [
          { tag: "fakt", text: "Bundesarbeitsministerin und SPD-Co-Chefin Bärbel Bas trat am 12.10. zurück, mit Verweis auf einen persönlichen Verlust und öffentliche Angriffe auf sie, auch aus der Koalition; Alexander Schweitzer (SPD) wurde als Nachfolger bestimmt.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "position", text: "Bundeskanzler Merz bekräftigte übers Wochenende, etwa beim Deutschlandtag der Jungen Union, den Plan, die abschlagsfreie Rente nach 45 Beitragsjahren einzuschränken; laut Berichten begründete er dies damit, es sei „weder gerecht”, gesund und fit ohne Abschläge früher in Rente zu gehen, „noch können es Rentenversicherung und unsere Wirtschaft sich leisten”. Ziel sei eine Kabinettsentscheidung bis Weihnachten, Umsetzung im Frühjahr 2027." },
          { tag: "position", text: "CSU-Chef Markus Söder sprach sich für die vollständige Umsetzung des im Juli zwischen Union und SPD vereinbarten Reformpakets aus. Der neue Arbeitsminister Alexander Schweitzer (SPD) zeigte sich demgegenüber kompromissbereit und sagte, man müsse „sich zusammensetzen und einen guten Kompromiss finden”; SPD-Generalsekretär Tim Klüssendorf erklärte: „Wir wollen diese Möglichkeit erhalten, nach 45 Beitragsjahren abschlagsfrei in Rente zu gehen.”" },
          { tag: "unbestaetigt", text: "Diskutiert wird laut Berichten ein möglicher Kompromiss, wonach die 45 Jahre künftig stärker über tatsächliche Arbeitsjahre statt reiner Beitragsjahre definiert werden könnten; Details sind offen. Eine Erhebung nennt eine Ablehnung der Abschaffung der abschlagsfreien Rente mit 63 durch 74 % der Befragten." }
        ]},
        { h: "Was zeigen aktuelle Umfragen?", items: [
          { tag: "unbestaetigt", text: "Mehrere Institute (INSA 24.10., Verian/Focus 23.10., Forschungsgruppe Wahlen/ZDF 23.10., Forsa 20.10., YouGov 20.10.) sehen die AfD bundesweit zwischen 26 und 30 %, die Union zwischen 18 und 23 %, die Grünen zwischen 13 und 17 %, die SPD zwischen 13 und 14 % und die Linke zwischen 10 und 11 %.",
            ask: [{ label: "Warum weichen Umfragen voneinander ab?", ref: "e:coalition-majority" }] },
          { tag: "unbestaetigt", text: "Laut dem Forsa-Trendbarometer vom 20.10. erwarten 56 % der Befragten ein vorzeitiges Ende der Koalition aus Union und SPD, 40 % rechnen mit einem Durchhalten bis zum regulären Ende der Legislaturperiode 2029.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Kanzler Merz übers Wochenende öffentlich am Plan zur Einschränkung der Rente mit 63 festhält, während der neue SPD-Arbeitsminister Kompromissbereitschaft signalisiert und mehrere Umfragen weiterhin eine Mehrheit zeigen, die nicht mit einem Fortbestand der Koalition bis 2029 rechnet, deutet auf anhaltende politische Unsicherheit auf mehreren Ebenen hin." }
        ]}
      ],
      reaction: "Der Bundeshaushalt wird in Meldung 5 behandelt.",
      terms: ["koalition"],
      followups: ["e:rente-basics", "e:coalition-majority", "e:landtagswahl-why"],
      sources: [
        { title: "Tagesspiegel: Arbeitsministerin und SPD-Co-Chefin Bärbel Bas tritt zurück", url: "https://www.tagesspiegel.de/politik/arbeitsministerin-und-spd-co-chefin-barbel-bas-tritt-zuruck-16151175.html" },
        { title: "nius.de: Merz widerspricht neuem SPD-Arbeitsminister", url: "https://nius.de/politik/merz-widerspricht-neuem-spd-arbeitsminister" },
        { title: "it-boltwise.de: Rente mit 63 – Streit um Arbeits- statt Beitragsjahre für Abschlagsfreiheit", url: "https://www.it-boltwise.de/rente-mit-63-streit-um-arbeits-statt-beitragsjahre-fuer-abschlagsfreiheit.html" },
        { title: "cash-online.de: Rente mit 63 – Merz will bis Weihnachten liefern, 74 Prozent sind dagegen", url: "https://www.cash-online.de/a/rente-mit-63-merz-will-bis-weihnachten-liefern-74-prozent-sind-dagegen/728492/" },
        { title: "dawum.de: Umfragen zur Bundestagswahl (Aggregation)", url: "https://dawum.de/Bundestag/" }
      ]
    },

    /* 7 INTERNATIONAL/GEOPOLITIK: UKRAINE */
    {
      id: "ukraine-abu-dhabi-charkiw-10-26", cats: ["world", "geo"], when: "Witkoff-Putin-Treffen 21.10. · Selenskyj-Bestätigung 23.10. · neue Angriffe auf Charkiw und Chmelnyzkyj Wochenende · geplantes Treffen „um den 10.11.” in Abu Dhabi",
      headline: "Russland und die Ukraine bestätigen weiterhin geplante Verhandlungen Anfang November in Abu Dhabi, Russland griff übers Wochenende erneut Energieinfrastruktur in Charkiw an",
      sec30: "Nach einem rund dreistündigen Treffen zwischen US-Sondergesandtem Witkoff und Kreml-Chef Putin im Konstantin-Palast bei St. Petersburg (21.10., laut Berichten bereits das neunte persönliche Treffen der beiden) bestätigte Präsident Selenskyj am 23.10., dass sich Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi treffen sollen – laut Kreml-Berater Juri Uschakow „um den 10. November”, zunächst auf technischer Ebene. Selenskyj erhofft sich von den Gesprächen die Grundlage für einen späteren Dreiergipfel mit Putin und Trump und bleibt offen dafür, die aktuelle Frontlinie als ersten Schritt einzufrieren, fordert dafür aber belastbare Sicherheitsgarantien. Russland griff nach ukrainischen Angaben übers Wochenende erneut ein Kraftwerk in Charkiw sowie ein weiteres in der westlichen Region Chmelnyzkyj an; Präsident Trump drohte, die Frist für neue Zölle gegen Handelspartner Russlands von ursprünglich 50 auf „zehn bis zwölf Tage” zu verkürzen, sollte es keine Einigung geben.",
      blocks: [
        { h: "Welche diplomatischen Schritte gab es zuletzt?", items: [
          { tag: "fakt", text: "Am 21.10. traf US-Sondergesandter Steve Witkoff im Konstantin-Palast bei St. Petersburg Kreml-Chef Putin für rund drei Stunden – laut Berichten bereits das neunte persönliche Treffen der beiden." },
          { tag: "position", text: "Laut Kreml-Berater Juri Uschakow erklärte sich Putin bereit, trilaterale Gespräche zwischen Russland, den USA und der Ukraine „um den 10. November” wieder aufzunehmen, zunächst auf technischer Ebene und mit Fokus auf ein Nachkriegs-„Sicherheitssystem” für beide Länder; laut Berliner Zeitung sagte Uschakow sinngemäß, nach dem russischen Feiertag Anfang November sei man bereit, Verhandlungen wieder aufzunehmen." },
          { tag: "fakt", text: "Präsident Selenskyj bestätigte am 23.10., dass Verhandlungsteams aus Ukraine, Russland und den USA in der ersten Novemberhälfte in Abu Dhabi zusammenkommen sollen – zunächst auf technischer Ebene; laut Berichten erhofft er sich davon vor allem die Möglichkeit eines späteren Dreiertreffens mit Putin und Trump." }
        ]},
        { h: "Wie positionieren sich Ukraine und Russland zu einem Einfrieren der Frontlinie?", items: [
          { tag: "position", text: "Selenskyj zeigte sich weiterhin offen dafür, die aktuelle Frontlinie als ersten Schritt zu einem Friedensabkommen einzufrieren, fordert dafür aber einen international überwachten Waffenstillstand und belastbare Sicherheitsgarantien; Gebietsabtretungen lehnt er ab." },
          { tag: "position", text: "Russland verlangt laut Uschakow weiterhin den vollständigen Rückzug ukrainischer Truppen aus dem gesamten Gebiet Donezk und lehnt einen reinen Waffenstillstand ab." }
        ]},
        { h: "Welche neuen Angriffe wurden übers Wochenende gemeldet?", items: [
          { tag: "unbestaetigt", text: "Das russische Militär meldete Angriffe auf ein Kraftwerk in Charkiw, ein Lagerhaus im Umland sowie ein weiteres Kraftwerk in der westlichen Region Chmelnyzkyj; Präsident Selenskyj bestätigte den Angriff auf Charkiw und sprach laut Berichten von einem Folgeangriff auf Rettungskräfte, nachdem zunächst ein Baumarkt getroffen worden war. Unabhängig bestätigte Opferzahlen für diese konkreten Angriffe liegen in den verfügbaren Quellen nicht vor.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:8" }] },
          { tag: "position", text: "Präsident Trump drohte, die Frist für neue Zölle gegen Handelspartner Russlands von ursprünglich 50 auf „zehn bis zwölf Tage” zu verkürzen, sollte es keine Einigung über einen Waffenstillstand oder ein Friedensabkommen geben." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich mit dem für Anfang November geplanten Treffen in Abu Dhabi ein konkreterer diplomatischer Fahrplan abzeichnet, während sich an den gegensätzlichen Grundpositionen zu Gebietsfragen und Sicherheitsgarantien nichts geändert hat und übers Wochenende weitere Angriffe auf die Energieinfrastruktur gemeldet wurden, zeigt, wie weit militärisches Geschehen und diplomatische Fortschritte derzeit noch auseinanderliegen." }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 behandelt, weitere internationale Entwicklungen in Meldung 15.",
      terms: [],
      followups: ["e:why-oil-up-geo"],
      sources: [
        { title: "Al Jazeera: Russia and Ukraine say talks planned for November in UAE", url: "https://www.aljazeera.com/news/2026/10/23/russia-ukraine-talks-planned-for-november-in-uae-kremlin" },
        { title: "Axios: Putin tells Witkoff he is ready to resume direct peace talks", url: "https://www.axios.com/2026/10/21/russia-ukraine-putin-witkoff-peace" },
        { title: "Berliner Zeitung: Ukraine-Verhandlungen – Russland nach 4. November bereit", url: "https://www.berliner-zeitung.de/article/ukraine-verhandlungen-russland-usa-november-10528855" },
        { title: "ZDFheute: Liveblog Ukraine/Russland", url: "https://www.zdfheute.de/politik/ausland/ukraine-russland-konflikt-blog-102.html" },
        { title: "echo24.de: Verhandlungen in Abu Dhabi – Selenskyj offen für Front-Einfrieren", url: "https://www.echo24.de/welt/ukraine-gespraeche-in-abu-dhabi-selenskyj-offen-fuer-front-einfrieren-zr-94556708.html" }
      ]
    },

    /* 8 GEOPOLITIK: GOLF/HORMUZ/IRAN-ANGRIFFSPLÄNE */
    {
      id: "golf-hormuz-iran-angriffsplaene-10-26", cats: ["geo", "energy"], when: "CENTCOM-Flug über Hormuz So 25.10. · CNN-Bericht Angriffspläne 25.10. · Trump-Aussagen 25.10. · Ölpreisrückgang Mo 26.10.",
      headline: "CENTCOM verfügt laut CNN über Angriffspläne gegen Iran, die binnen 96 Stunden umsetzbar wären, Trump schließt einen Angriff für Sonntag aus, der Ölpreis gibt am Montag nach",
      sec30: "Laut einem CNN-Bericht vom 25.10. (auf zwei US-Beamte gestützt) verfügen die US-Streitkräfte über ausgearbeitete Angriffspläne gegen iranische Energieinfrastruktur, Militärstandorte und Nuklearanlagen, die binnen 96 Stunden nach einem Befehl von Präsident Trump umsetzbar wären. Trump sagte am Sonntag, 25.10., es werde an diesem Tag keinen Angriff geben („There will not be a strike”), hatte tags zuvor aber noch einen möglichen Angriff „schon morgen” angedeutet und hält zugleich ein Abkommen mit Teheran für möglich. CENTCOM-Befehlshaber Admiral Brad Cooper flog am Sonntag über die Straße von Hormus und erklärte die Wasserstraße für „frei und geräumt von iranischen Seeminen”; Iran und die Revolutionsgarde (IRGC) widersprechen dieser Einschätzung und beanspruchen weiterhin die Kontrolle über die Meerenge für sich. Der Ölpreis gab am Montagmorgen nach dem Freitags-Höchststand von 116,72 Dollar wieder nach, unter anderem weil Saudi-Arabien keine Schäden durch übers Wochenende gemeldete Huthi-Drohungen gegen Anlagen in Yanbu und Rabigh meldete.",
      blocks: [
        { h: "Was wird über US-Angriffspläne gegen Iran berichtet?", items: [
          { tag: "unbestaetigt", text: "Laut einem CNN-Bericht vom 25.10., gestützt auf zwei US-Beamte, verfügen die US-Streitkräfte über ausgearbeitete Angriffspläne gegen iranische Energieinfrastruktur, Militärstandorte und Nuklearanlagen, die binnen 96 Stunden nach Erhalt eines Befehls von Präsident Trump umsetzbar wären; CENTCOM und das Pentagon werden als Planungsbehörden genannt. Al Jazeera griff den Bericht am selben Tag auf, nannte den „96-Stunden”-Zeitrahmen aber nicht ausdrücklich.",
            ask: [{ label: "Mehr zum Ölpreis", ref: "n:brent" }] },
          { tag: "position", text: "Präsident Trump sagte am Sonntag, 25.10., es werde an diesem Tag keinen Angriff geben: „Would I tell you that? But the answer is no. There will not be a strike.” Tags zuvor hatte er noch einen möglichen Angriff „schon morgen” angedeutet; zugleich hält er ein Abkommen mit Teheran für möglich." }
        ]},
        { h: "Wie ist die Lage in der Straße von Hormus?", items: [
          { tag: "fakt", text: "CENTCOM-Befehlshaber Admiral Brad Cooper flog am Sonntag, 25.10., über die Straße von Hormus und erklärte die Wasserstraße für „frei und geräumt von iranischen Seeminen”.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "Iran und die Revolutionsgarde (IRGC) widersprechen dieser Einschätzung: Sie beanspruchen weiterhin die Kontrolle über die Meerenge für sich und geben an, Schiffe liefen dort weiterhin auf Minen auf, sofern sie nicht mit Irans „Persian Gulf Strait Authority” koordiniert seien – eine Behauptung, die sich unabhängig nicht bestätigen ließ." },
          { tag: "unbestaetigt", text: "Der Oktober markierte laut UKMTO weiterhin die höchste Zahl an Schiffsangriffen in der Straße von Hormus seit Kriegsbeginn Ende Februar 2026; UKMTO räumt zugleich Schwierigkeiten bei der korrekten Erfassung der tatsächlichen Angriffszahl ein." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Brent-Rohöl war am Freitag auf ein Settlement von 116,72 Dollar je Barrel gestiegen – laut Berichten der höchste Stand seit Ende April 2026; am Montagmorgen gab der Preis auf rund 114,50 Dollar nach.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] },
          { tag: "unbestaetigt", text: "Als Hintergrund für den Rückgang am Montag nennen Berichte Trumps Aussage, es werde keinen unmittelbaren Angriff geben, sowie die Tatsache, dass Saudi-Arabien keine Schäden durch übers Wochenende gemeldete Huthi-Drohungen gegen Anlagen in Yanbu und Rabigh meldete." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass CENTCOM laut Berichten über binnen 96 Stunden umsetzbare Angriffspläne gegen Iran verfügt, während Trump einen unmittelbaren Angriff zugleich ausschließt und ein Abkommen für möglich hält, und dass sich CENTCOM und Iran weiterhin über die Kontrolle der Straße von Hormus widersprechen, zeigt, wie unübersichtlich und angespannt die Lage am Golf bleibt." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, der Ölpreis im Detail in Meldung 14.",
      terms: ["brent"],
      followups: ["e:hormuz", "e:why-oil-up-geo"],
      sources: [
        { title: "CNN (via KEYT): US has plans for major Iran strikes if Trump chooses", url: "https://keyt.com/politics/cnn-us-politics/2026/10/25/us-has-plans-for-major-iran-strikes-if-trump-chooses/" },
        { title: "Al Jazeera: CENTCOM reportedly has plans for Iran strikes – will Trump approve them?", url: "https://www.aljazeera.com/news/2026/10/25/centcom-reportedly-has-plans-for-iran-strikes-will-trump-approve-them" },
        { title: "Al Jazeera: Iran steps up Hormuz surveillance as attacks soar and oil flows crash again", url: "https://www.aljazeera.com/news/2026/10/14/iran-steps-up-hormuz-surveillance-attacks-soar-oil-flows-crash-again" },
        { title: "The Jerusalem Post: CENTCOM chief flies over Strait of Hormuz", url: "https://www.jpost.com/middle-east/article-912824" },
        { title: "Anadolu Agency: Trump rules out Sunday military strikes on Iran", url: "https://www.aa.com.tr/en/americas/-trump-rules-out-sunday-military-strikes-on-iran/4100333" },
        { title: "FinanceFeeds: Brent Crude Oil Price – $114.60 Monday after Houthi Yanbu claims", url: "https://financefeeds.com/brent-crude-oil-price-114-60-monday-after-houthi-yanbu-claims-fed-week-bull-120-bear-108/" }
      ]
    },

    /* 9 DEFENCE: RHEINMETALL/COVENANT/DIEHL-FIRE POINT/ARMINIUS */
    {
      id: "rheinmetall-covenant-arminius-10-26", cats: ["defence"], when: "Covenant-Werk Leipzig eröffnet 5.10. · Arminius-Zeitplan Dezember · Q3-Zahlen 5.11.2026",
      headline: "Die Rheinmetall-Aktie notiert vorbörslich leicht höher, das US-Startup Covenant verhandelt weiter über Marschflugkörper, Diehl Defence sondiert eine Kooperation beim ukrainischen „Flamingo”",
      sec30: "Die Rheinmetall-Aktie notierte am Montag, 26.10., vorbörslich bei rund 1.027,70 Euro (+0,85 % gegenüber dem Xetra-Schluss von Freitag, 1.019,00 Euro) und bleibt damit rund 48 % unter ihrem 52-Wochen-Hoch von 1.966,00 Euro. Das US-Startup Covenant, das bereits am 5.10. sein erstes europäisches Werk in Leipzig eröffnet hat (Investition rund 250 Mio. Euro, Serienstart Q1/2027), verhandelt laut Berichten weiterhin mit dem Bundesverteidigungsministerium über den Marschflugkörper „Anthem”; eine direkte Beteiligung Rheinmetalls an diesem Vertrag ist in den verfügbaren Quellen nicht bestätigt. Beim ukrainischen „Flamingo”-Marschflugkörper von Fire Point sondiert laut Berichten der Rüstungskonzern Diehl Defence – nicht Rheinmetall – eine mögliche Kooperation. Beim Arminius-Programm (Boxer-Radpanzer) ist weiterhin kein finaler Vertrag unterzeichnet; die parlamentarische Befassung ist für den 9.12.2026 angesetzt, Rheinmetalls Anteil wird auf rund 12,4 Mrd. Euro geschätzt. Die Q3-Zahlen stehen am 5.11.2026 an.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "unbestaetigt", text: "Laut Vorbörsen-Indikationen notierte die Rheinmetall-Aktie am Montagmorgen, 26.10., bei rund 1.027,70 Euro (+0,85 % gegenüber dem Xetra-Schluss von Freitag, 1.019,00 Euro) – eine vorläufige Vorbörsenangabe. Der Kurs liegt damit weiterhin rund 48 % unter dem 52-Wochen-Hoch von 1.966,00 Euro.",
            ask: [{ label: "Mehr zum DAX-Wochenverlust", ref: "n:dax" }] }
        ]},
        { h: "Was wird zu neuen Marschflugkörper-Verträgen berichtet?", items: [
          { tag: "fakt", text: "Das US-israelische Rüstungs-Startup Covenant eröffnete am 5.10.2026 sein erstes europäisches Werk in Leipzig (Investition rund 250 Mio. Euro), mit geplantem Serienstart im ersten Quartal 2027 und einer Anfangskapazität von rund 1.000, später bis zu 5.000 Marschflugkörpern des Typs „Anthem” (Reichweite laut Berichten über 1.500 Kilometer) pro Jahr." },
          { tag: "unbestaetigt", text: "Covenant verhandelt laut Berichten weiterhin mit dem Bundesverteidigungsministerium über einen Lieferauftrag; ein europäischer Erstkunde soll laut Unternehmensangaben bereits einen Liefervertrag haben, dessen Identität in den verfügbaren Quellen nicht genannt wird. Eine direkte Beteiligung Rheinmetalls an diesem Geschäft ließ sich nicht bestätigen." },
          { tag: "unbestaetigt", text: "Beim ukrainischen „Flamingo”-Marschflugkörper (Reichweite laut Berichten rund 3.000 Kilometer) des Herstellers Fire Point sondiert laut Berichten der Rüstungskonzern Diehl Defence – nicht Rheinmetall – eine mögliche Kooperation, etwa bei Zielsensorik und Raketentechnik; Hintergrund ist die Suche der Bundeswehr nach Alternativen, nachdem Lieferungen von US-Tomahawk-Flugkörpern ausblieben. Es handelt sich um eine Absichtserklärung, keine Festvereinbarung." }
        ]},
        { h: "Wie ist der Stand beim Arminius-Programm?", items: [
          { tag: "unbestaetigt", text: "Deutschland plant einen Festauftrag über rund 25 Mrd. Euro für bis zu 1.800 Boxer-Radpanzer, mit einem möglichen Rahmenvolumen von bis zu 5.500 Fahrzeugen (Gesamtwert bis rund 77 Mrd. Euro bis etwa 2040); Rheinmetalls Anteil über die Beteiligungsgesellschaft ARTEC (50:50-Aufteilung mit KNDS) wird auf rund 12,4 Mrd. Euro geschätzt. Die parlamentarische Befassung im Haushaltsausschuss ist für den 9.12.2026 angesetzt, eine Vertragsunterschrift wäre danach frühestens 5 bis 10 Tage später möglich.",
            ask: [{ label: "Wie liest man eine Meldung über einen Rüstungsauftrag?", ref: "e:defence-order" }] }
        ]},
        { h: "Was erwarten Analysten für die Q3-Zahlen am 5.11.?", items: [
          { tag: "unbestaetigt", text: "Der Analystenkonsens erwartet für das dritte Quartal einen Gewinn pro Aktie von rund 7,00 Euro (Vorjahr 3,34 Euro) und einen Umsatz von rund 3,23 Mrd. Euro (+16,2 %); mwb Research hat seine Schätzungen zuletzt aber gesenkt (Umsatz von 3,9 auf 3,4 Mrd. Euro, EBIT von 740 auf 650 Mio. Euro) – ein Hinweis darauf, dass Analysten insgesamt vorsichtiger geworden sind." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass neben Rheinmetall auch andere Anbieter wie Covenant und Diehl Defence um neue Marschflugkörper-Verträge mit der Bundeswehr konkurrieren, während beim milliardenschweren Arminius-Programm weiterhin kein finaler Vertrag steht, zeigt, wie viele einzelne Geschäftsfelder gleichzeitig über die Bewertung der deutschen Rüstungsbranche entscheiden. Die Q3-Zahlen stehen erst am 5.11.2026 an. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Weitere internationale Rüstungsaufträge werden in Meldung 10 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-order", "e:defence-stocks"],
      sources: [
        { title: "ad-hoc-news.de: Rheinmetall-Aktie – vorbörslich leicht fester", url: "https://www.ad-hoc-news.de/boerse/news/vorboerse/rheinmetall-aktie-zahlen-am-05-11-2026-vorboerslich-leicht-fester/70412577" },
        { title: "hartpunkt.de: Deep Strike – Covenant will in Sachsen kostengünstigen Marschflugkörper Anthem fertigen", url: "https://www.hartpunkt.de/deep-strike-covenant-will-in-sachsen-kostenguenstigen-marschflugkoerper-anthem-fertigen/" },
        { title: "t-online.de: Ukraine-Marschflugkörper Flamingo – Diehl will Kiews Wunderwaffe bauen", url: "https://www.t-online.de/nachrichten/ukraine/id_101297318/ukraine-marschflugkoerper-flamingo-diehl-will-kiews-wunderwaffe-bauen.html" },
        { title: "calibredefence.co.uk: Arminius Boxer contract – Rheinmetall/KNDS", url: "https://www.calibredefence.co.uk/arminius-boxer-contract-rheinmetall-knds/" },
        { title: "boerse-express.com: Rheinmetall-Aktie – Analysten erwarten Gewinnsprung am 5. November", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-analysten-erwarten-gewinnsprung-am-5-november-955031" }
      ]
    },

    /* 10 DEFENCE: RTX/LOCKHEED/NORTHROP/SAAB/HENSOLDT/RENK */
    {
      id: "rtx-lockheed-northrop-hensoldt-renk-10-26", cats: ["defence"], when: "RTX-/Northrop-Q3 20.10. · Lockheed-Q3 22.10. · Hensoldt/RENK-Kursbewegungen Woche 20.–26.10.2026",
      headline: "RTX, Lockheed Martin und Northrop Grumman meldeten vergangene Woche Rekord-Auftragsbestände, Bank of America zieht ihre Kaufempfehlung für RENK zurück",
      sec30: "In der vergangenen „Defense Earnings Week” meldeten RTX (20.10.) einen Rekord-Auftragsbestand von 340 Mrd. Dollar und eine angehobene Jahresprognose, Northrop Grumman (20.10.) einen um 7 % gestiegenen Umsatz von 11,1 Mrd. Dollar und einen Rekord-Auftragsbestand von 110 Mrd. Dollar, Lockheed Martin (22.10.) einen Rekord-Auftragsbestand von 292 Mrd. Dollar bei einer danach rund 9 % höheren Aktie, General Dynamics einen Rekord-Auftragsbestand von 136,5 Mrd. Dollar. Seit Freitag sind keine neuen Auftragsmeldungen dieser US-Konzerne bekannt geworden. Bei den europäischen Werten bewegte sich die Hensoldt-Aktie am Montag leicht nach unten (−1,0 % auf 83,16 Euro), nachdem sie zuvor auf fast 88 Euro gestiegen war; Bank of America zog dagegen ihre Kaufempfehlung für den Getriebehersteller RENK zurück, mit Verweis auf eine aktuell nicht weiter skalierbare Produktion.",
      blocks: [
        { h: "Was zeigten die Quartalszahlen von RTX, Lockheed Martin und Northrop Grumman vergangene Woche?", items: [
          { tag: "fakt", text: "RTX meldete am 20.10. einen Rekord-Auftragsbestand von 340 Mrd. Dollar und hob seine Jahresprognose auf einen Gewinn pro Aktie von 7,65 bis 7,75 Dollar an.",
            ask: [{ label: "Mehr zu Rheinmetall und dem Arminius-Programm", ref: "s:9" }] },
          { tag: "fakt", text: "Northrop Grumman meldete am 20.10. einen Quartalsumsatz von 11,1 Mrd. Dollar (+7 % zum Vorjahr) bei einem Rekord-Auftragsbestand von 110 Mrd. Dollar (+20 % zum Vorjahr). Lockheed Martin meldete am 22.10. einen Umsatz von 20,7 Mrd. Dollar (+11 %) bei einem Rekord-Auftragsbestand von 292,0 Mrd. Dollar; die Aktie legte danach rund 9 % zu. General Dynamics meldete einen Rekord-Auftragsbestand von 136,5 Mrd. Dollar." },
          { tag: "fakt", text: "Seit Freitag, 23.10., sind keine neuen Auftrags- oder Prognosemeldungen dieser vier US-Konzerne bekannt geworden." }
        ]},
        { h: "Wie entwickelten sich europäische Rüstungswerte zum Wochenstart?", items: [
          { tag: "unbestaetigt", text: "Die Hensoldt-Aktie notierte am Montagvormittag rund 1,0 % niedriger bei 83,16 Euro, nachdem sie zuvor auf fast 88 Euro gestiegen war und Analysten ihr Kursziel zuletzt auf 94 Euro angehoben hatten.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Nachrichten?", ref: "e:defence-stocks" }] },
          { tag: "position", text: "Bank of America zog ihre Kaufempfehlung für den Getriebehersteller RENK zurück, mit der Begründung, die Getriebeproduktion sei auf dem aktuellen Niveau nicht weiter nachhaltig skalierbar." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass mehrere etablierte US-Rüstungskonzerne weiterhin Rekord-Auftragsbestände ausweisen, während ein einzelner europäischer Zulieferer wie RENK von einer Analystenherabstufung betroffen ist, zeigt, dass der allgemeine Rüstungsboom nicht automatisch jedes einzelne Unternehmen in der Lieferkette gleich begünstigt." }
        ]}
      ],
      reaction: "Rheinmetall und die deutsche Rüstungsindustrie werden in Meldung 9 behandelt, der Ukraine-Krieg in Meldung 7.",
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target"],
      sources: [
        { title: "247wallst.com: Lockheed Martin rises 9% as record backlog lifts outlook", url: "https://247wallst.com/investing/2026/10/22/lockheed-martin-rises-9-as-record-backlog-lifts-outlook-rtx-gains-2-northrop-grumman-advances-3/" },
        { title: "AOL/Yahoo Finance: RTX, Northrop Grumman raise 2026 forecasts", url: "https://www.aol.com/articles/rtx-northrop-grumman-raise-2026-170122000.html" },
        { title: "finanzen.ch: Hensoldt-Aktie Kursbewegung 26.10.2026", url: "https://www.finanzen.ch/nachrichten/aktien/hensoldt-aktie-kursbewegung-26-10-2026-1035064657" },
        { title: "finanzen.net: Branche im Blick – Rüstungsaktien wie RENK und Rheinmetall unter Druck, warum Hensoldt gegen den Trend gewinnt", url: "https://www.finanzen.net/nachricht/aktien/branche-im-blick-ruestungsaktien-wie-renk-und-rheinmetall-unter-druck-warum-hensoldt-gegen-den-trend-gewinnt-15962170" }
      ]
    },

    /* 11 DEALS/PE: BASF/EVONIK, LSEG/OCTUS, EQT/QIAGEN, TESLA/SPACEX */
    {
      id: "deals-basf-evonik-lseg-octus-eqt-qiagen-tesla-spacex-10-26", cats: ["deals", "pe"], when: "LSEG/Octus bestätigt 22.10. · BASF/Evonik-Berichte bis 26.10. · EQT/Qiagen seit 21.10. · Tesla/SpaceX-Ausschüsse seit 20.10.2026",
      headline: "BASF soll sein Angebot für Evonik laut weiterhin unbestätigten Kreisen auf über 11 Milliarden Euro erhöht haben, LSEG bestätigt den Kauf des Datenanbieters Octus, Qiagen-Vorstand unterstützt die EQT-Übernahme einstimmig",
      sec30: "Laut Kreisen, über mehrere deutsche Medien verbreitet (zuletzt ad-hoc-news.de am 26.10.), soll BASF sein Angebot für den Chemiekonzern Evonik auf 24 Euro je Aktie (Gesamtwert über 11 Mrd. Euro) erhöht haben; weder BASF noch Evonik haben dies bis Montagmorgen offiziell bestätigt, ein Evonik-Sprecher äußerte sich laut Berichten nicht zur Zahl. Die RAG-Stiftung (rund 43 % der Evonik-Aktien) berät weiterhin vertraulich, ohne öffentliche Stellungnahme. Der Börsenbetreiber LSEG hat den bereits am 22.10. angekündigten Kauf des Kreditmarkt-Datenanbieters Octus von Permira für 3,5 Mrd. Dollar in bar offiziell bestätigt, Abschluss im ersten Halbjahr 2027 erwartet. Bei der am 21.10. vereinbarten Übernahme von Qiagen durch den EQT-XI-Fonds (46,50 Euro je Aktie, rund 10,8 Mrd. Euro) unterstützen Vorstand und Aufsichtsrat den Deal einstimmig; Analysten sind uneinheitlicher Meinung, Deutsche Bank bestätigte ihre Kaufempfehlung, JPMorgan stufte von „Overweight” auf „Neutral” herab. Bei Tesla und SpaceX prüfen unabhängige Ausschüsse weiterhin eine mögliche Fusion, ohne verbindliches Angebot; neue Entwicklungen seit dem 21.10. sind nicht bekannt.",
      blocks: [
        { h: "Was ist der Stand bei BASF/Evonik?", items: [
          { tag: "unbestaetigt", text: "Laut Kreisen soll BASF sein Angebot für Evonik auf 24 Euro je Aktie erhöht haben (Gesamtwert über 11 Mrd. Euro), nach einem vorherigen, von Evonik als zu niedrig bewerteten Angebot von rund 22,15 Euro je Aktie. Diese Zahl wird von mehreren deutschen Medien berichtet, darunter zuletzt am 26.10., doch eine offizielle Bestätigung durch BASF oder Evonik liegt weiterhin nicht vor; Finanzierungsdetails, beteiligte Banken und ein Zeitplan werden in den verfügbaren Quellen nicht genannt.",
            ask: [{ label: "Was ist EBITDA, und wie unterscheidet sich Unternehmenswert von Eigenkapitalwert?", ref: "t:enterprise-value" }] },
          { tag: "unbestaetigt", text: "Die RAG-Stiftung, die rund 43 % der Evonik-Aktien hält, berät laut Berichten weiterhin vertraulich über die BASF-Offerte, ohne dass Inhalte oder Ergebnisse der Beratungen öffentlich gemacht wurden – ein klares Signal zu den Erfolgsaussichten fehlt damit weiterhin." }
        ]},
        { h: "Was wurde bei LSEG/Octus bestätigt?", items: [
          { tag: "fakt", text: "LSEG hat den Kauf von Octus (vormals Reorg, Anbieter von Kreditmarkt- und Distressed-Debt-Daten) vom Finanzinvestor Permira für 3,5 Mrd. Dollar in bar offiziell bestätigt – die größte LSEG-Übernahme seit sieben Jahren. Octus soll 2026 über 300 Mio. Dollar Umsatz bei rund 40 % Ebitda-Marge erzielen; der Abschluss wird im ersten Halbjahr 2027 erwartet." }
        ]},
        { h: "Wie ist der Stand bei EQT/Qiagen und Tesla/SpaceX?", items: [
          { tag: "fakt", text: "Vorstand und Aufsichtsrat von Qiagen unterstützen die Übernahme durch den EQT-XI-Fonds (46,50 Euro je Aktie, rund 10,8 Mrd. Euro, mit der Abu Dhabi Investment Authority und CPP Investments als Co-Investoren) einstimmig; die Prämie liegt bei rund 47 % auf den volumengewichteten 3-Monats-Durchschnittskurs, Mindestannahmeschwelle ist mehr als 50 % der Aktien, Vollzug geplant Mitte 2027.",
            ask: [{ label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "position", text: "Analysten bewerten den Qiagen-Deal uneinheitlich: Deutsche Bank bestätigte ihre Kaufempfehlung, JPMorgan stufte dagegen von „Overweight” auf „Neutral” herab; das durchschnittliche Kursziel-Potenzial gegenüber dem Xetra-Kurs liegt laut Berichten nur noch bei rund 3 %." },
          { tag: "unbestaetigt", text: "Bei Tesla und SpaceX prüfen die seit dem 19./20.10. gebildeten unabhängigen Ausschüsse weiterhin eine mögliche Fusion; Elon Musk ist wegen eines Interessenkonflikts nicht an den Gesprächen beteiligt. Neue Entwicklungen seit dem 20./21.10. sind nicht bekannt, ein verbindliches Angebot liegt nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass LSEG seine Octus-Übernahme offiziell bestätigt hat und der Qiagen-Vorstand den EQT-Deal einstimmig unterstützt, während BASF/Evonik auch Tage nach den ersten Kreisen-Berichten weiterhin ohne offizielle Bestätigung bleibt, zeigt unterschiedliche Reifegrade innerhalb derselben M&A-Welle." }
        ]}
      ],
      deal: { value: "3,5 Mrd. $ (LSEG/Octus, bestätigt) · rund 10,8 Mrd. € (EQT/Qiagen, bestätigt) · über 11 Mrd. € (BASF/Evonik, unbestätigt)", buyer: "LSEG · EQT-XI-Fonds · BASF", target: "Octus (von Permira) · Qiagen · Evonik", sector: "Finanzmarktdaten / Biotech-Software / Chemie", type: "Unternehmensübernahme (BASF/Evonik unbestätigt)" },
      reaction: "Der Private-Credit-Markt wird in Meldung 12 behandelt.",
      terms: ["take-private", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "ad-hoc-news.de: BASF raises offer above EUR 11 billion for Evonik stock", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/basf-raises-offer-above-eur-11-billion-for-evonik-stock/70413479" },
        { title: "Finanznachrichten: 24 Euro je Aktie – BASF legt bei Evonik nach", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69921536-24-euro-je-aktie-basf-legt-bei-evonik-nach-088.htm" },
        { title: "t-online.de: RAG-Stiftung berät über BASF-Übernahmepläne für Evonik", url: "https://www.t-online.de/finanzen/boerse/ticker/rag-stiftung-beraet-ueber-basf-uebernahmeplaene-fuer-evonik/0DBA92006A1EA271/" },
        { title: "Bloomberg: LSEG Seals $3.5 Billion Octus Deal as Group Fights Back AI Fears", url: "https://www.bloomberg.com/news/articles/2026-10-22/lseg-agrees-3-5-billion-deal-to-buy-credit-firm-octus" },
        { title: "transkript.de: Qiagen stimmt Übernahme durch EQT zu", url: "https://transkript.de/artikel/2026/qiagen-stimmt-uebernahme-durch-eqt-zu/" },
        { title: "wallstreet-online: EQT bietet 46,50 Euro für Qiagen – reicht das den Aktionären?", url: "https://www.wallstreet-online.de/nachricht/21577060-eqt-46-50-euro-qiagen-reicht-aktionaeren" },
        { title: "Axios: SpaceX-Tesla merger talks", url: "https://www.axios.com/2026/10/20/spacex-tesla-merger-talks" }
      ]
    },

    /* 12 PRIVATE CREDIT */
    {
      id: "private-credit-bcred-blueowl-blackstone-q3-10-26", cats: ["credit", "pe"], when: "Blackstone-Q3 22.10. · BCRED/Blue-Owl-Rücknahmen Q3 2026",
      headline: "Bei Blackstones Flaggschifffonds BCRED bleiben die Rücknahmewünsche weiterhin doppelt so hoch wie das Limit, Blue Owl kappt zum dritten Quartal in Folge Rücknahmen bei zwei Fonds",
      sec30: "Beim Blackstone Private Credit Fund (BCRED, rund 79 Mrd. Dollar Fondsvolumen) wollten Anleger im dritten Quartal 2026 laut dem Earnings Call vom 22.10. netto rund 4,3 Mrd. Dollar (rund 10 % der Anteile) abziehen; wie bereits in den Vorquartalen wurden nur 5 % des Nettoinventarwerts ausgezahlt – das vertragliche Quartalslimit. Blackstone selbst meldete für das Konzern-Quartal einen bereinigten Gewinn pro Aktie von 1,32 Dollar (über dem Konsens von 1,26 Dollar) bei einem leicht unter den Erwartungen liegenden Umsatz von 3,217 Mrd. Dollar und 63 Mrd. Dollar an Nettozuflüssen. Bei Blue Owl wollten Anleger laut Berichten das dritte Quartal in Folge mehr zurückziehen, als die Fonds auszahlen müssen: Bei einem Technologie-Kreditfonds wurden rund 39 % der Anteile zur Rücknahme angemeldet (zuvor 38,1 %), erneut gekappt auf 5 %.",
      blocks: [
        { h: "Wie ist der Stand bei Blackstones BCRED?", items: [
          { tag: "fakt", text: "Beim Earnings Call am 22.10. berichtete Blackstone für BCRED im dritten Quartal 2026 Rücknahmewünsche von rund 4,3 Mrd. Dollar, etwa 10 % der Anteile; wie bereits in den Vorquartalen wurden nur 5 % des Nettoinventarwerts ausgezahlt – das vertragliche Quartalslimit, während Anleger weiterhin rund das Doppelte zurückziehen wollten.",
            ask: [{ label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "fakt", text: "Blackstone meldete für das Konzern-Quartal einen bereinigten Gewinn pro Aktie von 1,32 Dollar (Konsens: 1,26 Dollar) bei einem Umsatz von 3,217 Mrd. Dollar (leicht unter dem Konsens von 3,28 Mrd. Dollar) und 63 Mrd. Dollar an Nettozuflüssen über den Gesamtkonzern.",
            ask: [{ label: "Was zeigt der Nettoinventarwert (NAV)?", ref: "t:nav" }] }
        ]},
        { h: "Was zeigt sich bei Blue Owl?", items: [
          { tag: "unbestaetigt", text: "Blue Owl verzeichnete laut Berichten im jüngsten Quartal – bereits das dritte Quartal in Folge – Rücknahmewünsche von rund 39 % (nach 38,1 % im Vorquartal) bei einem 5-Mrd.-Dollar-Technologie-Kreditfonds und kappte die Auszahlung erneut auf 5 %.",
            ask: [{ label: "Was ist Direct Lending?", ref: "t:direct-lending" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei mehreren großen Private-Credit-Fonds weiterhin deutlich mehr Rücknahmen angefragt werden, als die Fonds vertraglich auszahlen müssen – und sich das Muster über mehrere Quartale in Folge fortsetzt, statt sich zu entspannen –, zeigt anhaltenden Druck in Teilen der Anlageklasse, auch wenn Blackstone auf Konzernebene zugleich über dem Gewinnkonsens lag.",
            ask: [{ label: "Wie wirken höhere Zinsen auf Private-Credit-Ausfälle?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Die Mega-Deals der Woche werden in Meldung 11 behandelt.",
      terms: ["private-equity", "bdc", "direct-lending", "nav"],
      followups: ["e:private-credit-what", "e:redemption-limits", "e:nonaccrual-default"],
      sources: [
        { title: "nashnova: Blackstone Private Credit Fund Caps Redemptions at 5% Again in Q3", url: "https://www.nashnova.com/feed/special/blackstone-private-credit-fund-caps-redemptions-at-5-percent-again-in-q3-11448" },
        { title: "Benzinga: Blue Owl Investors Seek to Pull 39% from $5B Tech Credit Fund", url: "https://www.benzinga.com/markets/private-markets/26/10/62146487/blue-owl-investors-seek-to-pull-39-from-5b-tech-credit-fund" },
        { title: "Bloomberg: Blackstone BCRED joins private credit funds limiting redemptions", url: "https://www.bloomberg.com/news/articles/2026-06-04/blackstone-bcred-joins-private-credit-funds-limiting-redemptions" }
      ]
    },

    /* 13 TECHNOLOGIE: COREWEAVE/META/NVIDIA/SOX */
    {
      id: "coreweave-meta-nvidia-sox-10-26", cats: ["tech"], when: "CoreWeave-CDS-Rekord 22.10. · Meta-Quartalsmitteilung 22.10. · Analysten-Kurszielsenkungen 24.10. · Nvidia-Marktkapitalisierung Stand 23./24.10.2026",
      headline: "CoreWeaves Kreditausfallversicherungen erreichen ein weiteres Rekordniveau, mehrere Analysten senken ihre Kursziele, Meta beziffert künftige Leasingverpflichtungen auf rund 825 Milliarden Dollar",
      sec30: "CoreWeaves 5-Jahres-Kreditausfallversicherungen (CDS) erreichten am 22.10. mit rund 1.100 bis 1.194 Basispunkten ein weiteres Rekordniveau, was einer impliziten 5-Jahres-Ausfallwahrscheinlichkeit von rund 60 bis 64 % entspricht; die Aktie fiel am Freitag um 6,4 % auf 65,25 Dollar (Wochenverlust rund 22 %, seit dem 6.10. über 40 % Einbruch). Morgan Stanley, Raymond James und UBS senkten daraufhin ihre Kursziele, bestätigten aber jeweils ihre Kaufempfehlung. In seiner Quartalsmitteilung vom 22.10. bezifferte Meta künftige Leasing- und Vertragsverpflichtungen auf rund 825 Mrd. Dollar (davon 355,7 Mrd. Dollar Leasingverpflichtungen, 454,5 Mrd. Dollar nicht kündbare Verträge) – ein Anstieg von knapp 700 Mrd. Dollar im Juli – und kündigte eine neue, nicht stimmberechtigte Aktienklasse C zur Finanzierung von Akquisitionen und KI-Ausgaben an; die Ankündigung löste am Freitag einen breiteren Tech-Ausverkauf aus, der auch Nvidia (−4 %) erfasste. Nvidias Marktkapitalisierung lag am 23./24.10. bei rund 5,1 bis 5,2 Billionen Dollar, nachdem sie sich Anfang Oktober kurzzeitig der Marke von 6 Billionen Dollar genähert hatte. Der Halbleiterindex SOX schloss Freitag bei rund 10.779 Punkten (+0,44 %).",
      blocks: [
        { h: "Wie geht es CoreWeave?", items: [
          { tag: "fakt", text: "Die 5-Jahres-Kreditausfallversicherungen (CDS) von CoreWeave erreichten am 22.10. mit rund 1.100 bis 1.194 Basispunkten ein weiteres Rekordniveau; daraus lässt sich eine implizite 5-Jahres-Ausfallwahrscheinlichkeit von rund 60 bis 64 % ableiten. Die Aktie fiel am Freitag um 6,4 % auf 65,25 Dollar, Wochenverlust rund 22 %, seit dem Hoch vom 6.10. ein Einbruch von über 40 %.",
            ask: [{ label: "Was ist ein Credit Spread?", ref: "t:credit-spread" }] },
          { tag: "position", text: "Morgan Stanley senkte das Kursziel auf 70 Dollar (von 99 Dollar, Rating „Equal-Weight” bestätigt), Raymond James auf 75 Dollar (von 125 Dollar, „Outperform” bestätigt), UBS auf 105 Dollar (von 120 Dollar, „Buy” bestätigt) – alle drei Häuser senkten also ihre Kursziele deutlich, ohne ihre grundsätzliche Einschätzung zu ändern." }
        ]},
        { h: "Was zeigt Metas Quartalsmitteilung, und welche Finanzierungspläne wurden bekannt?", items: [
          { tag: "fakt", text: "In der Quartalsmitteilung vom 22.10. bezifferte Meta künftige Leasing- und Vertragsverpflichtungen auf rund 825 Mrd. Dollar (davon 355,7 Mrd. Dollar Leasingverpflichtungen, 454,5 Mrd. Dollar nicht kündbare Verträge, bis zu 14,7 Mrd. Dollar bedingte Cloud-Kapazitätskäufe) – ein Anstieg von knapp 700 Mrd. Dollar im Juli.",
            ask: [{ label: "Was treibt die KI-Investitionen?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Meta kündigte zudem eine neue, nicht stimmberechtigte Aktienklasse C an (eine C-Aktie pro bestehender A/B-Aktie als Dividende), mit der Akquisitionen und KI-Ausgaben finanziert werden sollen; die Ankündigung löste am Freitag laut Berichten einen breiteren Tech-Ausverkauf aus, der auch Nvidia (−4 %) erfasste." },
          { tag: "unbestaetigt", text: "Investor Michael Burry kritisierte Nvidias rund 500 Mrd. Dollar schweres Finanzierungsgeflecht mit BlackRock, Apollo und Goldman Sachs als „byzantinisch” und zog Vergleiche zu Enron; er verweist auf rund 879 Mrd. Dollar an Hyperscaler-Verpflichtungen, die über Nvidia zirkulieren. Nvidia widersprach dieser Einschätzung in einem Earnings Call.",
            ask: [{ label: "Was bedeutet zirkuläre Finanzierung?", ref: "e:circular-financing" }] }
        ]},
        { h: "Wie entwickelten sich Nvidia und der Halbleiterindex SOX?", items: [
          { tag: "fakt", text: "Nvidias Marktkapitalisierung lag am 23./24.10. bei rund 5,1 bis 5,2 Billionen Dollar, nachdem sie sich Anfang Oktober (6.10.) kurzzeitig der Marke von 6 Billionen Dollar genähert hatte.",
            ask: [{ label: "Mehr zur Marktreaktion insgesamt", ref: "s:1" }] },
          { tag: "fakt", text: "Der Halbleiterindex SOX schloss Freitag bei rund 10.779 Punkten (+0,44 %), nach einer mehrtägigen, in ihrer genauen Länge umstrittenen Verlustserie; angeführt wurde die Erholung von Speicherchip-Werten wie SK Hynix, SanDisk und Micron." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Metas neue Finanzierungspläne und CoreWeaves erneut gestiegenes Kreditrisiko gleichzeitig bekannt wurden, während mehrere Analysten ihre Kursziele für CoreWeave senken, ohne grundsätzlich an KI-Investitionen zu zweifeln, zeigt, wie unübersichtlich und uneinheitlich die Lage in der KI- und Chipbranche weiterhin bleibt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Marktreaktion insgesamt wird in Meldung 1 behandelt, die Fed-Seite in Meldung 2.",
      terms: ["credit-spread", "hyperscaler", "gigawatt"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "GuruFocus: CRWV maintained by Morgan Stanley, price target lowered to $70", url: "https://www.gurufocus.com/news/9139567/crwv-maintained-by-morgan-stanley-price-target-lowered-to-70" },
        { title: "Defense World: CoreWeave (NASDAQ:CRWV) stock falls 2.4% on analyst downgrade", url: "https://www.defenseworld.net/2026/10/24/coreweave-nasdaqcrwv-stock-falls-2-4-on-analyst-downgrade.html" },
        { title: "The Next Web: Meta's $825B future spending commitments", url: "https://thenextweb.com/news/meta-825b-future-spending-commitments" },
        { title: "Investing.com: Meta's new Class C stock to keep Zuckerberg in California, fund AI spending spree", url: "https://www.investing.com/news/stock-market-news/metas-new-class-c-stock-to-keep-zuckerberg-in-california-fund-ai-spending-spree-4966480" },
        { title: "Yahoo Finance: Michael Burry sounds alarm again on Nvidia's circular financing", url: "https://finance.yahoo.com/technology/ai/articles/michael-burry-sounds-alarm-again-144154784.html" },
        { title: "cappnotes Substack: Closing Look – Friday, October 23, 2026", url: "https://cappnotes.substack.com/p/closing-look-friday-october-23-2026" }
      ]
    },

    /* 14 ENERGIE */
    {
      id: "oelpreis-opec-gasspeicher-lukoil-10-26", cats: ["energy", "geo"], when: "Ölpreisrückgang Mo 26.10. · OPEC+-Beschluss 4.10., nächstes Treffen 1.11. · Gasspeicher-Stand 22.10. · Lukoil-Frist 21.11.2026",
      headline: "Der Ölpreis gibt am Montagmorgen nach dem Freitags-Höchststand wieder nach, die deutschen Gasspeicher verfehlen weiterhin das Herbstziel, die OPEC+ hält an unveränderten Förderquoten fest",
      sec30: "Brent-Rohöl war am Freitag, 23.10., auf ein Settlement von 116,72 Dollar je Barrel gestiegen – der höchste Stand seit Ende April 2026 – und fiel am Montagmorgen auf rund 114,40 bis 114,60 Dollar (−1,8 bis −2,0 %); die US-Ölsorte WTI fiel von rund 103,27 bis 103,44 Dollar am Freitag auf rund 100,97 bis 101,10 Dollar am Montag. Als Hintergrund für den Rückgang nennen Berichte Präsident Trumps Aussage, es werde am Sonntag keinen Angriff auf Iran geben, sowie ausbleibende Schadensmeldungen aus Saudi-Arabien nach übers Wochenende gemeldeten Huthi-Drohungen gegen Anlagen in Yanbu und Rabigh. Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10. Die OPEC+ beließ ihre Förderquoten beim Treffen am 4.10. für November unverändert; das nächste reguläre Treffen ist für den 1.11.2026 angesetzt. Die US-Behörde OFAC hatte die Frist für Verhandlungen über eingefrorenes Lukoil-Auslandsvermögen bis zum 21.11.2026 verlängert.",
      blocks: [
        { h: "Warum ist der Ölpreis am Montagmorgen gefallen?", items: [
          { tag: "fakt", text: "Brent-Rohöl war am Freitag auf ein Settlement von 116,72 Dollar je Barrel gestiegen (höchster Stand seit Ende April 2026) und fiel am Montagmorgen auf rund 114,40 bis 114,60 Dollar (−1,8 bis −2,0 %); WTI fiel von rund 103,27 bis 103,44 Dollar auf rund 100,97 bis 101,10 Dollar.",
            ask: [{ label: "Mehr zur Lage am Golf und zu den berichteten Iran-Angriffsplänen", ref: "s:8" }] },
          { tag: "einordnung", text: "Als Hintergrund für den Rückgang nennen Berichte Präsident Trumps Aussage, es werde am Sonntag keinen Angriff auf Iran geben, sowie ausbleibende Schadensmeldungen aus Saudi-Arabien nach übers Wochenende gemeldeten Huthi-Drohungen gegen Anlagen in Yanbu und Rabigh.",
            ask: [{ label: "Warum kann Politik den Ölpreis bewegen?", ref: "e:why-oil-up-geo" }] }
        ]},
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10., das als verfehlt gilt; die Bundesnetzagentur sieht aktuell dennoch kein Versorgungsrisiko.",
            ask: [{ label: "Was ist der TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Wie ist der Stand bei der OPEC+ und bei Russland-Sanktionen?", items: [
          { tag: "fakt", text: "Die OPEC+ beließ ihre Förderquoten für November beim Treffen am 4.10. unverändert (unter anderem Saudi-Arabien 10,5 Mio. Barrel pro Tag, Russland 9,9 Mio.); das nächste reguläre Treffen ist für den 1.11.2026 angesetzt. Neue Signale für eine Kursänderung sind nicht bekannt, auch wenn reale Fördermengen wegen der Hormus-Exportstörungen und russischer Lieferengpässe unter den Zielwerten liegen.",
            ask: [{ label: "Was ist die OPEC+?", ref: "t:opec-plus" }] },
          { tag: "fakt", text: "Die US-Behörde OFAC hatte die Frist für Verhandlungen über eingefrorenes Auslandsvermögen des russischen Ölkonzerns Lukoil (rund 20 bis 22 Mrd. Dollar) bis zum 21.11.2026 verlängert, nachdem ein Gebot des Investors Carlyle Anfang Oktober zurückgezogen worden war; die Lizenz erlaubt weiterhin keinen tatsächlichen Vermögenstransfer." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis nach seinem Höchststand vom Freitag am Montag wieder nachgibt, während die deutschen Gasspeicher weiterhin unter dem gesetzlichen Ziel liegen und Sanktionsfragen rund um russische Ölkonzerne offen bleiben, zeigt, wie unmittelbar geopolitische Nachrichten vom Golf derzeit auf den Ölpreis durchschlagen.",
            ask: [{ label: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Die Lage am Golf wird in Meldung 8 vertieft, der Ukraine-Krieg in Meldung 7.",
      terms: ["ttf", "opec-plus", "brent", "wti"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:gas-ttf", "e:oil-inflation"],
      sources: [
        { title: "Bloomberg: US equity futures climb as crude oil price dips", url: "https://www.bloomberg.com/news/articles/2026-10-25/us-equity-futures-climb-as-crude-oil-price-dips-markets-wrap" },
        { title: "FinanceFeeds: Brent Crude Oil Price – $114.60 Monday after Houthi Yanbu claims", url: "https://financefeeds.com/brent-crude-oil-price-114-60-monday-after-houthi-yanbu-claims-fed-week-bull-120-bear-108/" },
        { title: "netz-trends.de: Gasspeicher Deutschland – 61,1 Prozent (22. Oktober 2026)", url: "https://www.netz-trends.de/gasspeicher-deutschland-61-1-prozent-22-oktober-2026-bundesnetzagentur-gaspreis-destatis/" },
        { title: "CNBC: OPEC agrees to keep November oil output targets steady", url: "https://www.cnbc.com/2026/10/04/opec-agrees-to-keep-november-oil-output-targets-steady.html" },
        { title: "enerdata: OPEC+ keeps November 2026 production targets unchanged amid supply disruptions", url: "https://www.enerdata.net/publications/daily-energy-news/opec-keeps-november-2026-production-targets-unchanged-amid-supply-disruptions.html" },
        { title: "Interfax: Lukoil international assets sale negotiations", url: "https://interfax.com/newsroom/top-stories/119637/" }
      ]
    },

    /* 15 INTERNATIONAL/GEOPOLITIK: GAZA/TAIWAN */
    {
      id: "gaza-taiwan-international-10-26", cats: ["world", "geo"], when: "Gaza-Waffenstillstand seit 10.10. · China-Kommentar zu Taiwan 24.10. · Taifun Ciampi Mitte Oktober 2026",
      headline: "Der Gaza-Waffenstillstand gilt laut Hilfsorganisationen nur dem Namen nach, China bezeichnet Taiwans Rüstungskäufe weiterhin als „töricht”",
      sec30: "Der am 10.10. in Kraft getretene, von den USA vermittelte Waffenstillstand im Gazastreifen gilt formal weiter, mehr als 100 Hilfsorganisationen erklärten laut Amnesty International jedoch, er bestehe „nur dem Namen nach”. Israel hat seine Luftangriffe laut Berichten zuletzt wieder verstärkt, nach eigenen Angaben gezielt gegen hochrangige Hamas-Mitglieder; bei neueren Angriffen seien laut Hamas-naher Gesundheitsbehörde 25 Menschen getötet worden, das israelische Militär räumte selbst einen Verstoß gegen die Waffenruhe ein. Seit Inkrafttreten des Waffenstillstands wurden nach Angaben israelischer wie palästinensischer Stellen je nach Quelle zwischen rund 1.400 und 1.511 Palästinenser durch israelische Streitkräfte getötet; Hamas und Israel werfen sich gegenseitig vor, die Waffenruhe zu verletzen. In Ostasien bezeichnete Chinas Verteidigungsministerium Taiwans Rüstungskäufe am 24.10. erneut als „töricht”, nachdem Taiwan im Oktober sein erstes selbst gebautes U-Boot „Hai Kun” präsentiert und ein großes Militärinvestitionsprogramm angekündigt hatte; China setzte seinen Druck mit Militärmanövern im Pazifik fort.",
      blocks: [
        { h: "Wie ist der Stand beim Gaza-Waffenstillstand?", items: [
          { tag: "fakt", text: "Der von den USA vermittelte Waffenstillstand im Gazastreifen trat am 10.10. in Kraft und gilt formal weiter." },
          { tag: "position", text: "Mehr als 100 Hilfsorganisationen erklärten laut Amnesty International, der Waffenstillstand bestehe „nur dem Namen nach”." },
          { tag: "unbestaetigt", text: "Israel hat seine Luftangriffe laut Berichten zuletzt wieder verstärkt, nach eigenen Angaben gezielt gegen hochrangige Hamas-Mitglieder; bei neueren Angriffen seien laut Hamas-naher Gesundheitsbehörde 25 Menschen getötet worden, das israelische Militär räumte selbst einen Verstoß gegen die Waffenruhe ein. Seit Beginn des Waffenstillstands wurden nach Angaben verschiedener Quellen zwischen rund 1.400 und 1.511 Palästinenser durch israelische Streitkräfte getötet – die Zahlen variieren je nach Quelle und Stichtag; Hamas und Israel werfen sich gegenseitig vor, die Waffenruhe zu verletzen." }
        ]},
        { h: "Was geschieht zwischen China und Taiwan?", items: [
          { tag: "position", text: "Chinas Verteidigungsministerium bezeichnete Taiwans Rüstungskäufe am 24.10. erneut als „töricht”." },
          { tag: "fakt", text: "Hintergrund ist, dass Taiwan im Oktober sein erstes selbst gebautes U-Boot „Hai Kun” samt Testfahrt präsentiert und zuvor das nach eigenen Angaben größte Militärinvestitionsprogramm seiner Geschichte angekündigt hatte; China setzte seinen Druck mit fortgesetzten Militärmanövern im Pazifik fort." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl der Gaza-Waffenstillstand als auch die Lage zwischen China und Taiwan trotz formal unveränderter Rahmenbedingungen von anhaltenden Spannungen begleitet werden, zeigt, dass sich internationale Konfliktlinien neben der Ukraine und dem Golf weiter fortsetzen, ohne dass es zu offener Eskalation kommt." }
        ]}
      ],
      reaction: "Der Ukraine-Krieg wird in Meldung 7 behandelt, die Lage am Golf in Meldung 8.",
      terms: [],
      followups: [],
      sources: [
        { title: "Amnesty International: Waffenstillstand in Gaza besteht nur dem Namen nach, sagen mehr als 100 Organisationen", url: "https://www.amnesty.at/news-events/news/waffenstillstand-in-gaza-besteht-nur-dem-namen-nach-sagen-mehr-als-100-organisationen/" },
        { title: "ZDFheute: Liveblog Nahost – Israel/Gaza", url: "https://www.zdfheute.de/politik/ausland/liveblog-nahost-israel-gaza-100.html" },
        { title: "AEI: China & Taiwan Update, October 23, 2026", url: "https://www.aei.org/commentary/china-taiwan-update-october-23-2026/" },
        { title: "kurierverlag.de: Taiwan zeigt neues U-Boot – China reagiert mit Drohung", url: "https://www.kurierverlag.de/politik/taiwan-zeigt-neues-boot-china-reagiert-mit-drohung-zr-94539242.html" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX schloss Freitag, 23.10., bei 25.181,65 Punkten (−0,75 %); eine andere Quelle nennt abweichend 25.128 Punkte (−1,0 %). Der Dow Jones schloss die Woche trotz eines schwachen Freitags (−1,23 %) per Saldo rund 0,4 % im Plus, während S&P 500 und Nasdaq die Woche im Minus beendeten." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Als Hintergrund nennen Berichte den auf 116,72 Dollar gestiegenen Ölpreis, Frankreichs zuvor auf einen 24-Jahres-Höchststand gestiegene Anleiherendite und eine in ihrer genauen Dauer umstrittene, aber heftige Verlustserie beim Halbleiterindex SOX." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Laut CME FedWatch liegt die eingepreiste Wahrscheinlichkeit für eine Fed-Zinspause am 28.10. bei rund 90 bis 93 %; für die Dezember-Sitzung preisen einzelne Quellen dagegen eine höhere Wahrscheinlichkeit für eine erneute Anhebung ein." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Fed-Chef Kevin Warsh hatte im September mit einer Zinserhöhung auf 3,75 bis 4,00 % überrascht; bei seinem letzten Auftritt vor der Blackout-Periode warnte er vor einem möglichen KI-bedingten Wirtschaftsschock, legte sich aber nicht auf die Oktober-Entscheidung fest." },
    "yield-meaning": { tag: "fakt", story: 2, text: "Die US-10-Jahres-Rendite liegt bei rund 4,99 bis 5,00 % und damit leicht niedriger als die Vorwochenhochs von 5,07 bis 5,15 %; der Fed-Leitzins liegt bei 3,75 bis 4,00 %." },
    "gold-why": { tag: "fakt", story: 3, text: "Gold fiel am Freitag laut Yahoo Finance auf ein 3-Monats-Tief von rund 3.990 bis 4.030 Dollar und liegt damit weiterhin deutlich unter dem Rekordhoch vom 20.10. (4.381,21 Dollar)." },
    "bitcoin-what": { tag: "unbestaetigt", story: 3, text: "Bitcoin fiel von rund 81.500 Dollar am Freitagmorgen auf eine Spanne von rund 80.000 bis 80.900 Dollar am Montagmorgen – weiterhin deutlich unter seinem Allzeithoch vom 6.10.2025." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der EZB-Referenzkurs lag am Freitag bei 1,1193 Dollar, etwas niedriger als die 1,1234 Dollar vom Mittwoch; am Montag lag zum Redaktionsschluss noch keine neue offizielle Notierung vor." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die EZB hält ihren Einlagensatz vor der Sitzung am 29.10. bei 2,50 %; Moody's bestätigte Frankreichs Bonität am Wochenende bei Aa3, woraufhin die französische Anleiherendite am Montag auf 4,95 % zurückfiel." },
    "inflation-expectations": { tag: "fakt", story: 4, text: "Die Inflation in der Eurozone lag im September laut Eurostat bei 3,8 % – dem höchsten Stand seit September 2023; in Deutschland lag sie laut Destatis bei 3,3 %." },
    "haushalt-basics": { tag: "fakt", story: 5, text: "Der Bundesrechnungshof bezifferte am 18.10. die Deckungslücke im Haushalt 2027 auf 160,7 Mrd. Euro; die Bereinigungssitzung des Haushaltsausschusses ist für den 12.11., die abschließende Bundestagsabstimmung für den 27.11.2026 angesetzt." },
    "debt-brake": { tag: "unbestaetigt", story: 5, text: "Laut einem Bericht wirft der Bundesrechnungshof dem Finanzministerium verfassungsrechtlich bedenkliche „Buchungstricks” zur Schließung von Finanzierungslücken vor; der Gesamtschuldenstand des Bundes könnte demnach bis 2030 auf rund 3 Billionen Euro steigen." },
    "rente-basics": { tag: "position", story: 6, text: "Bundeskanzler Merz bekräftigte übers Wochenende den Plan, die abschlagsfreie Rente nach 45 Beitragsjahren einzuschränken; der neue SPD-Arbeitsminister Alexander Schweitzer zeigte sich demgegenüber kompromissbereit." },
    "coalition-majority": { tag: "unbestaetigt", story: 6, text: "Laut dem Forsa-Trendbarometer vom 20.10. erwarten 56 % der Befragten ein vorzeitiges Ende der Koalition aus Union und SPD; mehrere Umfragen sehen die AfD weiterhin als stärkste Kraft vor der Union." },
    "why-oil-up-geo": { tag: "fakt", story: 8, text: "Der Ölpreis war am Freitag auf 116,72 Dollar je Barrel gestiegen (höchster Stand seit Ende April 2026) und fiel am Montagmorgen wieder auf rund 114,50 Dollar, nachdem Präsident Trump einen unmittelbaren Angriff auf Iran ausgeschlossen hatte." },
    "hormuz": { tag: "position", story: 8, text: "CENTCOM-Befehlshaber Admiral Brad Cooper erklärte die Straße von Hormus nach einem Flug am Sonntag für „frei von iranischen Seeminen”; Iran widerspricht dieser Einschätzung und beansprucht weiterhin die Kontrolle über die Meerenge für sich." },
    "defence-order": { tag: "unbestaetigt", story: 9, text: "Beim Arminius-Programm gibt es weiterhin keinen finalen Vertrag; die parlamentarische Befassung ist für den 9.12.2026 angesetzt. Zusätzlich verhandelt das US-Startup Covenant mit dem Bundesverteidigungsministerium über den Marschflugkörper „Anthem”, Diehl Defence sondiert eine Kooperation beim ukrainischen „Flamingo”." },
    "defence-stocks": { tag: "fakt", story: 10, text: "RTX, Lockheed Martin, Northrop Grumman und General Dynamics meldeten in der „Defense Earnings Week” Rekord-Auftragsbestände; Bank of America zog dagegen ihre Kaufempfehlung für den Getriebehersteller RENK zurück." },
    "ma-steps": { tag: "fakt", story: 11, text: "LSEG hat den Kauf des Kreditmarkt-Datenanbieters Octus von Permira für 3,5 Mrd. Dollar offiziell bestätigt; Qiagens Vorstand und Aufsichtsrat unterstützen die rund 10,8 Mrd. Euro schwere Übernahme durch den EQT-XI-Fonds einstimmig." },
    "take-private-why": { tag: "unbestaetigt", story: 11, text: "BASF soll laut Kreisen sein Angebot für Evonik auf 24 Euro je Aktie (über 11 Mrd. Euro) erhöht haben; weder BASF noch Evonik haben dies bis Montagmorgen offiziell bestätigt." },
    "deal-risks": { tag: "unbestaetigt", story: 11, text: "Die Verwaltungsräte von Tesla und SpaceX prüfen weiterhin in unabhängigen Ausschüssen eine mögliche Fusion; ein verbindliches Angebot liegt nicht vor, neue Entwicklungen seit dem 20./21.10. sind nicht bekannt." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Beim Blackstone Private Credit Fund (BCRED) wollten Anleger im dritten Quartal 2026 netto rund 4,3 Mrd. Dollar zurückziehen, ausgezahlt wurden erneut nur 5 % des Nettoinventarwerts – das vertragliche Quartalslimit." },
    "redemption-limits": { tag: "unbestaetigt", story: 12, text: "Blue Owl verzeichnete bereits das dritte Quartal in Folge Rücknahmewünsche von rund 39 % bei einem 5-Mrd.-Dollar-Technologie-Kreditfonds und kappte die Auszahlung erneut auf 5 %." },
    "ai-capex": { tag: "fakt", story: 13, text: "Meta bezifferte in seiner Quartalsmitteilung vom 22.10. künftige Leasing- und Vertragsverpflichtungen auf rund 825 Mrd. Dollar und kündigte eine neue, nicht stimmberechtigte Aktienklasse zur Finanzierung von Akquisitionen und KI-Ausgaben an." },
    "circular-financing": { tag: "unbestaetigt", story: 13, text: "Investor Michael Burry kritisierte Nvidias rund 500 Mrd. Dollar schweres Finanzierungsgeflecht mit BlackRock, Apollo und Goldman Sachs als „byzantinisch”; Nvidia widersprach dieser Einschätzung." },
    "energy-germany": { tag: "fakt", story: 14, text: "Die deutschen Gasspeicher lagen laut Bundesnetzagentur am 22.10. bei 61,1 % Füllstand (151,1 TWh) – weiterhin deutlich unter dem gesetzlichen Herbstziel von 80 % zum 1.10." },
    "opec-plus-why": { tag: "fakt", story: 14, text: "Die OPEC+ beließ ihre Förderquoten für November beim Treffen am 4.10. unverändert; das nächste reguläre Treffen ist für den 1.11.2026 angesetzt." },
    "oil-inflation": { tag: "einordnung", story: 14, text: "Brent-Rohöl fiel am Montagmorgen auf rund 114,50 Dollar, nach einem Freitags-Höchststand von 116,72 Dollar; Öl- und Gaspreise bleiben Belastungsfaktoren für Sprit-, Heiz- und Transportkosten in Europa." }
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
      explain: "Der DAX fiel am Freitag um 0,75 % (−190 Punkte) auf 25.181,65 Punkte, während der Dow Jones die Woche trotz eines schwachen Freitags per Saldo im Plus abschloss."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 8,
      q: "Angenommen, Präsident Trump würde entgegen seiner Aussage vom Sonntag doch kurzfristig einen Militärschlag gegen Iran befehlen. Was würde das unter sonst gleichen Bedingungen am ehesten für den Ölpreis bedeuten?",
      options: [
        "Einen tendenziell sinkenden Ölpreis, weil Unsicherheit Anleger beruhigt",
        "Keine Auswirkung, da der Ölpreis unabhängig von Konflikten am Golf ist",
        "Einen tendenziell steigenden Ölpreis, weil Anleger ein geringeres Angebot erwarten würden",
        "Eine automatische Leitzinssenkung der Fed"
      ],
      answer: 2,
      explain: "Ein Militärschlag würde laut der in Meldung 8 beschriebenen Logik die Sorge um die Ölversorgung am Golf verschärfen und den Ölpreis tendenziell weiter nach oben treiben, nicht senken."
    },
    {
      topic: "Zinsen", type: "Fakt", story: 2,
      q: "Was ist die FOMC-Blackout-Periode, und wann endet sie laut Meldung 2?",
      options: [
        "Ein Streik der Fed-Mitarbeiter, der die Sitzung verzögert",
        "Eine Stromausfall-bedingte Unterbrechung der Fed-Website",
        "Ein Zeitraum, in dem die Fed keine Zinsentscheidungen trifft, endet nie",
        "Ein Zeitraum, in dem sich Fed-Mitglieder nicht öffentlich zur Geldpolitik äußern, er endet am 29.10.2026"
      ],
      answer: 3,
      explain: "Die Blackout-Periode, in der sich Fed-Mitglieder nicht öffentlich zur Geldpolitik äußern, läuft vom 17.10. bis zum 29.10.2026; die Zinsentscheidung selbst fällt am 28.10."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Was erwarten laut dem Forsa-Trendbarometer vom 20.10.2026 56 % der Befragten?",
      options: [
        "Ein vorzeitiges Ende der Koalition aus Union und SPD",
        "Einen sofortigen Rücktritt von Kanzler Merz",
        "Eine Mehrheit für die AfD bei der nächsten Wahl",
        "Eine Verschiebung der nächsten Bundestagswahl"
      ],
      answer: 0,
      explain: "Laut dem Forsa-Trendbarometer vom 20.10. erwarten 56 % der Befragten ein vorzeitiges Ende der Koalition aus Union und SPD, 40 % rechnen mit einem Durchhalten bis 2029."
    },
    {
      topic: "Deals", type: "Zusammenhang", story: 11,
      q: "Angenommen, die RAG-Stiftung würde das erhöhte BASF-Angebot für Evonik öffentlich ablehnen. Was würde das unter sonst gleichen Bedingungen am ehesten für den Fortgang der Übernahme bedeuten?",
      options: [
        "Keine Auswirkung, da die RAG-Stiftung keinen Einfluss auf den Deal hat",
        "Eine automatische Verdopplung des Angebotspreises",
        "Die Übernahme würde deutlich unwahrscheinlicher, da die RAG-Stiftung rund 43 % der Evonik-Aktien hält",
        "BASF müsste das Angebot sofort zurückziehen und dürfte nie wieder bieten"
      ],
      answer: 2,
      explain: "Die RAG-Stiftung hält laut Meldung 11 rund 43 % der Evonik-Aktien und gilt als entscheidender Akteur; eine öffentliche Ablehnung würde die Erfolgsaussichten der Übernahme deutlich verschlechtern, auch wenn ein Scheitern damit nicht automatisch feststeht."
    }
  ]
};

