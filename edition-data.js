// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-10-08",
  dateLabel: "Donnerstag, 8. Oktober 2026",
  updatedLabel: "Recherchestand 08.10.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagmorgen, 08.10.2026. Für DAX, Euro Stoxx 50, S&P 500, Nasdaq und Dow Jones sowie für die US- und die Bund-Rendite gilt der Schlussstand von Mittwoch, 07.10.2026; der heutige Donnerstagshandel war zum Recherchezeitpunkt noch nicht beendet. Brent-Öl, Gold, Bitcoin und EUR/USD werden rund um die Uhr beziehungsweise durchgehend gehandelt; hier gilt jeweils der zuletzt verfügbare Stand vom Mittwoch beziehungsweise frühen Donnerstagmorgen. Bei einzelnen Werten weichen die Quellen spürbar voneinander ab: Beim Goldpreis reichen die Angaben für Mittwoch von rund 4.087 bis 4.153 Dollar, beim Brentpreis von rund 100 bis 101 Dollar und beim Bitcoin-Kurs von rund 83.770 bis 85.550 Dollar – je nach Erhebungszeitpunkt und Anbieter. Diese Unterschiede sind jeweils bei der betroffenen Kennzahl vermerkt.",

  top: [
    { text: "Die Rendite zehnjähriger US-Staatsanleihen erreichte am Mittwoch laut mehreren Quellen zeitweise 5,36 % – den höchsten Stand seit April 2002. Wall Street fiel von den Dienstags-Rekordständen zurück (S&P 500 −0,22 %, Nasdaq −0,22 %, Dow Jones −0,66 %), auch der DAX gab 1,35 % nach. Am Nachmittag wurde zudem das Fed-Sitzungsprotokoll vom 16.09. veröffentlicht.", ref: "s:3" },
    { text: "Der Koalitionsausschuss von Union und SPD beriet am 07.10. rund vier Stunden über Rente, Pflege und den Bundeshaushalt 2027, endete aber ohne öffentlich verkündete Beschlüsse; Ergebnisse sollten schriftlich am Donnerstagmorgen folgen. Parallel zeichnete sich bei der dritten Berliner Vorgesprächsrunde zwischen Linke, Grüne und SPD eine gemeinsame Linie zum Umgang mit Antisemitismus ab.", ref: "s:6" },
    { text: "Russland griff die Ukraine am 07.10. mit mindestens 130 Drohnen, 48 Marschflugkörpern und ballistischen Raketen an; nach ukrainischen Angaben wurden mindestens 20 Menschen getötet, darunter Kinder. Ein von den USA vorgeschlagenes trilaterales Gesprächsformat zwischen den USA, der Ukraine und Russland bis Ende Oktober bleibt ohne bestätigte russische Zusage.", ref: "s:8" },
    { text: "In der Straße von Hormus wurden in der ersten Oktoberwoche mindestens sieben Tanker-Zwischenfälle gemeldet, zuletzt am 07.10. vor Oman; die USA verstärken ihre Truppenpräsenz am Golf weiter. Ein iranisches Angebot zu Waffenstillstand und Wiedereröffnung der Straße lehnten die USA laut Berichten als unzureichend ab.", ref: "s:9" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.104,36", change: "−1,35 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 07.10.26", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als am Vortag.",
      compare: [
        { label: "Vortag", text: "Am Dienstag, 06.10., hatte der DAX laut dpa-AFX noch bei 25.449,19 Punkten (+0,77 %) geschlossen; der Mittwoch-Rückgang macht einen Teil dieses Gewinns wieder wett." }
      ],
      moved: {
        intro: "Als Hintergrund für Mittwoch nennen Berichte:",
        items: [
          "Gewinnmitnahmen nach drei Gewinntagen und Zurückhaltung vor der anstehenden Quartalssaison.",
          "Steigende US-Renditen auf einem 24-Jahres-Hoch und steigende Ölpreise belasteten Aktien beidseits des Atlantiks (Meldung 3).",
          "Höhere Renditen französischer Staatsanleihen wegen Sorgen um Frankreichs Haushaltsdefizit drückten zusätzlich auf den Gesamtmarkt."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die US-Rendite erreichte am selben Tag ein 24-Jahres-Hoch – mehr dazu in Meldung 3.", ref: "s:3" }
      ],
      source: { title: "ARIVA.DE/dpa-AFX: Börsentag auf einen Blick – Leicht im Minus", url: "https://www.ariva.de/news/dpa-afx-boersentag-auf-einen-blick-leicht-im-minus-12161028" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.272,23", change: "+0,48 % (Mi-Schluss)", dir: "up", asof: "Schluss Mi 07.10.26", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Ein Plus heißt: Diese Unternehmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Quellenlage", text: "Eine weitere, in der Recherche gefundene Quelle nannte für Mittwoch abweichend rund 6.174,90 Punkte (−1,55 %); dieser Wert ließ sich keinem eindeutig bestätigten Zeitpunkt zuordnen und widerspricht der direkt geprüften dpa-AFX-Meldung. Die Redaktion stützt sich auf den dpa-AFX-Wert, da Datum und Kontext dort klar belegt sind." }
      ],
      moved: {
        intro: "Für Mittwoch nennen Berichte keine spezifischen neuen Einzelereignisse für den Euro Stoxx 50; der Index bewegte sich abweichend vom DAX im Rahmen der allgemeinen Marktstimmung.",
        items: []
      },
      important: [
        { area: "Zinsen", text: "Die Rendite französischer Staatsanleihen belastete den europäischen Gesamtmarkt zusätzlich.", ref: "s:3" }
      ],
      source: { title: "ARIVA.DE/dpa-AFX: Börsentag auf einen Blick – Leicht im Minus", url: "https://www.ariva.de/news/dpa-afx-boersentag-auf-einen-blick-leicht-im-minus-12161028" }
    },
    "sp500": {
      label: "S&P 500", value: "7.801,77", change: "−0,22 % (Mi-Schluss)", dir: "down", asof: "Schluss Mi 07.10.26", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Dow Jones", text: "Mittwochsschluss: 51.179,87 Punkte (−0,66 %)." },
        { label: "Nasdaq", text: "Mittwochsschluss: 27.538,69 Punkte (−0,22 %) – ein Rückgang vom Dienstags-Rekordstand." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für Mittwoch:",
        items: [
          "Bankaktien (u. a. Goldman Sachs, Bank of America je rund −1 %) und Technologiewerte (u. a. CrowdStrike −5 %, Meta) gaben nach Veröffentlichung des Fed-Sitzungsprotokolls nach.",
          "Die US-Rendite erreichte am selben Tag ein 24-Jahres-Hoch, was Zinssorgen nährte (Meldung 3)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die US-Rendite erreichte am selben Tag einen 24-Jahres-Höchststand.", ref: "n:ust10" }
      ],
      source: { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/10/06/stock-market-today-live-updates.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.538,69", change: "−0,22 % (Mi-Schluss, nach Rekord am Dienstag)", dir: "down", asof: "Schluss Mi 07.10.26", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Dienstag", text: "Am Dienstag, 06.10., hatte die Nasdaq mit 27.599,79 Punkten (+0,45 %) einen Rekordschlussstand erreicht; der Mittwoch brachte einen leichten Rückgang von diesem Niveau." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Technologiewerte gaben nach den Gewinnen vom Vortag nach, nachdem das Fed-Sitzungsprotokoll Zinssorgen nährte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq oft stärker auf Zinsnachrichten als Dow und S&P 500? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/10/06/stock-market-today-live-updates.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "1,1177", change: "−0,82 % ggü. Dienstag (1,1269)", dir: "down", asof: "Mi 07.10.26, EZB-Referenzkurs", story: 5,
      means: "1 Euro kostet etwa 1,12 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar etwas schwächer.",
      compare: [
        { label: "Vortag", text: "Am Dienstag, 06.10., lag der EZB-Referenzkurs noch bei 1,1269 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen keinen expliziten Einzelgrund für den Tag:",
        items: [
          "Im allgemeinen Marktumfeld spielten laut Berichten Sorgen um die französischen Staatsfinanzen und ein insgesamt fester notierender Dollar eine Rolle."
        ]
      },
      important: [
        { area: "Zinsen", text: "Fed und EZB senden nach ihren September-Erhöhungen weiterhin unterschiedliche Signale zur weiteren Zinsrichtung.", ref: "s:2" }
      ],
      source: { title: "ARIVA.DE: Devisen – Eurokurs gefallen, EZB-Referenzkurs 1,1177 US-Dollar", url: "https://www.ariva.de/news/devisen-eurokurs-gefallen-ezb-referenzkurs-1-1177-12161810" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,28–5,32 % (Intraday-Hoch 5,36 %)", change: "24-Jahres-Hoch seit April 2002", dir: "up", asof: "Mi 07.10.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,3 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,3 % Zinsen pro Jahr.",
      compare: [
        { label: "Quellenlage", text: "Trading Economics nennt 5,28 % als Schlussstand (−8 Basispunkte vom Intraday-Hoch); andere Quellen nennen rund 5,32 % beziehungsweise 5,303–5,304 %. Das Intraday-Hoch von 5,356 % gilt übereinstimmend als höchster Stand seit April 2002." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Das am Mittwochnachmittag veröffentlichte FOMC-Sitzungsprotokoll der September-Sitzung deutete laut einer Quelle an, eine weitere Zinserhöhung bis Jahresende bleibe für eine Mehrheit der Mitglieder möglich.",
          "Eine solide Anleiheauktion sorgte laut Berichten für eine leichte Entspannung vom Intraday-Hoch."
        ]
      },
      important: [
        { area: "Fed", text: "Das FOMC-Protokoll bestätigte die einstimmige Zinserhöhung vom 16.09. und ließ eine weitere Erhöhung bis Jahresende laut Berichten offen.", ref: "s:2" }
      ],
      source: { title: "Forbes: Why The 10-Year Treasury Yield Just Hit A 24-Year High", url: "https://www.forbes.com/sites/garthfriesen/2026/10/07/why-the-10-year-treasury-yield-just-hit-a-24-year-high/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "3,48 %", change: "praktisch unverändert ggü. Vortag", dir: "flat", asof: "Stand Mi 07.10.26", story: 3, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Hintergrund", text: "Die Belastung für europäische Anleihen und Aktien kam laut Berichten weniger von Bundesanleihen selbst als von höheren Renditen französischer Staatsanleihen wegen Sorgen um Frankreichs Haushaltsdefizit." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Bund-Rendite bewegte sich nahezu unverändert im europäischen Zinsumfeld, während die US-Rendite am selben Tag ein 24-Jahres-Hoch erreichte (Meldung 3)."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Steigende Renditen – ob in den USA, Frankreich oder perspektivisch in Deutschland – verteuern tendenziell neue Staatsschulden.", ref: "e:debt-brake" }
      ],
      source: { title: "Trading Economics: Germany 10 Year Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.087–4.153 $", change: "≈ −1,0 bis −2,0 % ggü. Dienstag", dir: "down", asof: "Mi 07.10.26", story: 5, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.100 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Quellenlage", text: "CNBC nannte um 9 Uhr US-Ostküstenzeit 4.086,72 Dollar (Vortagsvergleich 4.169,68 Dollar), Trading Economics 4.109,61 Dollar (−1,32 %), USAGOLD 4.121,26 Dollar (−1,04 %). Die Werte schwanken je nach Abfragezeitpunkt um bis zu rund 65 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Gold gab laut einer Quelle vor der Veröffentlichung des Fed-Sitzungsprotokolls nach, während gleichzeitig steigende US-Renditen zinslose Anlagen weniger attraktiv machten (Meldung 3)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Anleiherenditen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "CNBC Select: The price of gold today, Oct. 7, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-7-2026/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 100–101 $", change: "Quellenlage uneinheitlich", dir: "flat", asof: "Mi 07.10.26", story: 15, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 100 Dollar je Fass (159 Liter) sind rund 63 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Quellenlage", text: "CNBC nennt für das Settlement 100,20 Dollar (−0,4 %), wallstreet-online und dpa-AFX nennen rund 101,30 bis 101,38 Dollar. Der separat berechnete OPEC-Korbpreis lag bei 108,59 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Mindestens sieben Tanker-Zwischenfälle in der Straße von Hormus in der ersten Oktoberwoche stützten die Risikoprämie (Meldung 9).",
          "Ein mögliches Hurrikan-Risiko für US-Golfküsten-Raffinerien wurde Anfang Oktober als zusätzlicher Unsicherheitsfaktor genannt.",
          "OPEC+ hält die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag (Meldung 15)."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Geopolitik", text: "Mehr zu den Tanker-Angriffen und dem US-Truppenaufbau in Meldung 9.", ref: "s:9" }
      ],
      source: { title: "CNBC: Rebounding oil exports through Strait of Hormuz are vulnerable to stepped-up Iranian tanker attacks", url: "https://www.cnbc.com/2026/10/06/crude-oil-tanker-strait-hormuz-iran-attack.html" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 83.770–85.550 $", change: "leicht niedriger, stark zeitpunktabhängig", dir: "down", asof: "Mi 07.10.26", story: 5, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 84.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Quellenlage", text: "Bitcoin eröffnete am Mittwoch bei 85.546,23 Dollar und fiel bis 7:17 Uhr US-Ostküstenzeit auf 83.771,28 Dollar; dpa-AFX/ARIVA nennt für den Tag 84.103 Dollar (−1,69 %)." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Eine „breitere Abkühlung der Risikobereitschaft”, erneuerte Spannungen in der Straße von Hormus und die gleichzeitige Tech-Rallye an den Aktienmärkten hielten laut einer Quelle Kapital von Kryptowährungen ab."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Yahoo Finance: Bitcoin and ethereum prices today, Wednesday, October 7, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-wednesday-october-7-2026-crypto-prices-fade-along-with-risk-appetite-113324902.html" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE */
    {
      id: "maerkte-mittwoch-renditen-dax-wallstreet-08-10", cats: ["markets"], when: "Schluss Mi 07.10.2026",
      headline: "Wall Street fällt von Rekordständen zurück, DAX gibt nach steigenden Renditen ab",
      sec30: "Der S&P 500 gab am Mittwoch 0,22 % auf 7.801,77 Punkte nach, die Nasdaq Composite 0,22 % auf 27.538,69 Punkte, der Dow Jones 0,66 % auf 51.179,87 Punkte – ein Rückgang von den jeweiligen Rekordständen vom Dienstag. Der DAX verlor 1,35 % auf 25.104,36 Punkte, der Euro Stoxx 50 legte dagegen um 0,48 % auf 6.272,23 Punkte zu. Als Hintergrund nennen Berichte Gewinnmitnahmen, steigende Ölpreise, die Rendite französischer Staatsanleihen und das am Nachmittag veröffentlichte Fed-Sitzungsprotokoll.",
      blocks: [
        { h: "Wie haben sich die Indizes am Mittwoch entwickelt?", items: [
          { tag: "fakt", text: "Der S&P 500 gab 0,22 % auf 7.801,77 Punkte nach, die Nasdaq Composite 0,22 % auf 27.538,69 Punkte und der Dow Jones 0,66 % auf 51.179,87 Punkte – jeweils ein Rückgang von den Rekordständen vom Dienstag (Nasdaq: 27.599,79 Punkte, +0,45 %).",
            ask: [{ label: "Warum reagiert die Nasdaq stärker auf Zinsnachrichten?", ref: "chain:nasdaq-why" }] },
          { tag: "unbestaetigt", text: "Der DAX verlor laut dpa-AFX 1,35 % auf 25.104,36 Punkte; der Euro Stoxx 50 legte im selben Bericht um 0,48 % auf 6.272,23 Punkte zu. Eine andere, nicht eindeutig datierte Quelle nannte für den Euro Stoxx 50 abweichend ein Minus von 1,55 %.",
            ask: [{ label: "Was bedeutet ein Minus beim DAX?", ref: "n:dax" }] }
        ]},
        { h: "Was wird als Grund genannt?", items: [
          { tag: "fakt", text: "Bankaktien (u. a. Goldman Sachs, Bank of America je rund −1 %) und Technologiewerte (u. a. CrowdStrike −5 %, Meta) gaben am Mittwoch nach, nachdem am Nachmittag das Protokoll der Fed-Sitzung vom 16.09. veröffentlicht wurde." },
          { tag: "einordnung", text: "Dass Aktien am Mittwoch nachgaben, erklären Marktbeobachter mit Gewinnmitnahmen nach den Rekordständen vom Dienstag sowie mit der am selben Tag auf ein 24-Jahres-Hoch gestiegenen US-Rendite (Meldung 3)." },
          { tag: "unbestaetigt", text: "Für den europäischen Markt nennen Berichte zusätzlich die gestiegene Rendite französischer Staatsanleihen wegen Sorgen um Frankreichs Haushaltsdefizit als belastenden Faktor." }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Dass DAX und Euro Stoxx 50 sich am selben Tag unterschiedlich entwickelten, zeigt, wie unterschiedlich einzelne europäische Indizes auf dieselbe Nachrichtenlage reagieren können. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Kursverluste an den Aktienmärkten fielen zusammen mit dem 24-Jahres-Hoch der US-Rendite (Meldung 3) und dem Fed-Sitzungsprotokoll (Meldung 2).",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ARIVA.DE/dpa-AFX: Börsentag auf einen Blick – Leicht im Minus", url: "https://www.ariva.de/news/dpa-afx-boersentag-auf-einen-blick-leicht-im-minus-12161028" },
        { title: "onvista: Leitindex schließt im Minus – hohe Renditen belasten", url: "https://www.onvista.de/news/2026/10-07-leitindex-schliesst-im-minus-hohe-renditen-belasten-41121301-19-26561594" },
        { title: "CNBC: Stock market today – live updates", url: "https://www.cnbc.com/2026/10/06/stock-market-today-live-updates.html" },
        { title: "Forbes: Why The 10-Year Treasury Yield Just Hit A 24-Year High", url: "https://www.forbes.com/sites/garthfriesen/2026/10/07/why-the-10-year-treasury-yield-just-hit-a-24-year-high/" }
      ]
    },

    /* 2 FED/FOMC-PROTOKOLL/JOBS REPORT */
    {
      id: "fed-fomc-protokoll-jobs-report-08-10", cats: ["economy", "markets"], when: "Fed-Zinsniveau seit 16.09.2026 · Jobs Report 02.10. · FOMC-Protokoll veröffentlicht 07.10. · nächste FOMC-Sitzung 27./28.10.2026",
      headline: "FOMC-Sitzungsprotokoll lässt Oktober-Entscheidung offen, schwacher US-Arbeitsmarktbericht nährt Zinspausen-Hoffnung",
      sec30: "Die Fed hatte ihren Leitzins am 16.09.2026 einstimmig (12:0) auf ein Zielband von 3,75 bis 4,00 % angehoben. Der US-Arbeitsmarktbericht für September (veröffentlicht 02.10.) zeigte mit nur 29.000 neuen Stellen einen deutlich schwächeren Zuwachs als die erwarteten 84.000; die Arbeitslosenquote stieg auf 4,2 %. Das am 07.10. veröffentlichte Protokoll der September-Sitzung zeigt laut Berichten, dass eine Mehrheit der Mitglieder eine weitere Zinserhöhung bis Jahresende weiterhin für möglich hält. Ein Regierungsshutdown lag nicht vor: Die bereits im September unterzeichnete Übergangsfinanzierung sichert die Bundesbehörden bis zum 11.12.2026, Wirtschaftsdaten erscheinen daher planmäßig.",
      blocks: [
        { h: "Wie ist der aktuelle Stand der Fed-Zinspolitik?", items: [
          { tag: "fakt", text: "Die Fed hob ihren Leitzins am 16.09.2026 einstimmig (12:0) auf ein Zielband von 3,75 bis 4,00 % an – die erste Zinserhöhung seit 2023.",
            ask: [{ label: "Was ist ein Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was zeigte der US-Arbeitsmarktbericht für September?", items: [
          { tag: "fakt", text: "Die Zahl der Beschäftigten außerhalb der Landwirtschaft (Nonfarm Payrolls) stieg im September 2026 nur um 29.000 – erwartet worden waren 84.000. Die Arbeitslosenquote stieg auf 4,2 %." }
        ]},
        { h: "Was steht im FOMC-Protokoll vom 7.10.?", items: [
          { tag: "fakt", text: "Das Protokoll der Fed-Sitzung vom 15./16.09.2026 wurde am 07.10. um 14 Uhr US-Ostküstenzeit veröffentlicht und bestätigt den einstimmigen Beschluss zur Zinserhöhung. Laut Berichten hält eine Mehrheit der Mitglieder eine weitere Erhöhung bis Jahresende weiterhin für möglich; ein Zeitpunkt wird nicht genannt." },
          { tag: "unbestaetigt", text: "Ökonomen von UBS erwarten laut Berichten weiterhin eine Zinspause im Oktober mit einer möglichen Erhöhung im Dezember; andere Einschätzungen (u. a. von Citi) sehen die Fed eher in einem „Pause-Modus”, bei dem der nächste Schritt eine Senkung statt einer Erhöhung sein könnte.",
            ask: [{ label: "Was bedeutet das für die Märkte?", ref: "s:1" }] }
        ]},
        { h: "Liegt ein Regierungsshutdown vor?", items: [
          { tag: "fakt", text: "Nein. Die bereits im September 2026 unterzeichnete Übergangsfinanzierung sichert die Bundesbehörden bis zum 11.12.2026; Wirtschaftsdaten wie der Jobs Report und das FOMC-Protokoll erschienen daher planmäßig. Der nächste Inflationsbericht (US-CPI für September) ist für den 14.10.2026 angesetzt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der schwache Arbeitsmarktbericht spricht eher für eine Zinspause im Oktober, während das FOMC-Protokoll vom selben Monat eine weitere Erhöhung bis Jahresende offenhält – ein Nebeneinander, das die Wahrscheinlichkeit für die Sitzung am 27./28.10. nach Einschätzung von Marktbeobachtern unsicher hält." }
        ]}
      ],
      reaction: "Die gemischten Signale fallen zusammen mit dem gleichzeitigen 24-Jahres-Hoch der US-Rendite (Meldung 3) und den Kursverlusten an den Aktienmärkten (Meldung 1).",
      terms: ["leitzins", "rendite", "basispunkt"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "Federal Reserve: FOMC Minutes, 16.09.2026 (veröffentlicht 07.10.2026)", url: "https://www.federalreserve.gov/monetarypolicy/fomcpresconf20260916.htm" },
        { title: "ActionForex: October Pause or Not, Fed Minutes Keep Another Hike Firmly on the Table", url: "https://actionforex.com/live-comments/656775-october-pause-or-not-fed-minutes-keep-another-hike-firmly-on-the-table" },
        { title: "Yahoo Finance: October FOMC – Why the Fed Will Pause", url: "https://finance.yahoo.com/economy/policy/articles/october-fomc-why-fed-pause-153500416.html" },
        { title: "U.S. Bureau of Labor Statistics: Employment Situation Report, September 2026", url: "https://www.bls.gov/news.release/pdf/empsit.pdf" }
      ]
    },

    /* 3 US-/BUND-RENDITE */
    {
      id: "renditen-ust10-24-jahres-hoch-bund-unveraendert-08-10", cats: ["markets"], when: "Stand Mi 07.10.2026",
      headline: "US-Rendite markiert mit bis zu 5,36 % höchsten Stand seit 2002, Bund-Rendite bleibt stabil",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen erreichte am Mittwoch laut mehreren Quellen zeitweise 5,36 % – den höchsten Stand seit April 2002 – und schloss je nach Quelle zwischen 5,28 und 5,32 %. Die Bund-Rendite blieb mit rund 3,48 % praktisch unverändert; die Belastung für europäische Anleihen kam laut Berichten vor allem von höheren Renditen französischer Staatsanleihen wegen Sorgen um Frankreichs Haushaltsdefizit. Am Nachmittag wurde zudem das Protokoll der Fed-Sitzung vom 16.09. veröffentlicht (Meldung 2).",
      blocks: [
        { h: "Wie hat sich die US-Rendite entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die US-10-Jahres-Rendite erreichte am Mittwoch laut mehreren Quellen intraday bis zu 5,36 % – den höchsten Stand seit April 2002 – und schloss je nach Quelle zwischen 5,28 % (Trading Economics) und rund 5,32 %.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5,3 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Eine Quelle beschrieb eine leichte Entspannung vom Intraday-Hoch nach einer soliden Anleiheauktion am Nachmittag." }
        ]},
        { h: "Wie hat sich die Bund-Rendite entwickelt?", items: [
          { tag: "fakt", text: "Die Bund-Rendite lag laut Trading Economics bei 3,48 % und damit praktisch unverändert gegenüber dem Vortag.",
            ask: [{ label: "Was bedeutet eine Bund-Rendite von rund 3,5 %?", ref: "n:bund10" }] }
        ]},
        { h: "Warum ist das für Europa relevant?", items: [
          { tag: "unbestaetigt", text: "Berichte beschreiben, dass die Belastung für europäische Anleihen und Aktien am Mittwoch weniger von Bundesanleihen selbst als von höheren Renditen französischer Staatsanleihen ausging, die mit Sorgen um Frankreichs Haushaltsdefizit begründet wurden." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Eine dauerhaft hohe US-Rendite verteuert tendenziell auch global Kapital und macht zinslose Anlagen wie Gold weniger attraktiv (Meldung 5); eine höhere Bund- oder Frankreich-Rendite würde neue europäische Staatsschulden verteuern." }
        ]}
      ],
      reaction: "Die gestiegene US-Rendite fiel zusammen mit den Kursverlusten an den Aktienmärkten (Meldung 1) und dem am selben Tag veröffentlichten Fed-Sitzungsprotokoll (Meldung 2).",
      terms: ["rendite", "basispunkt"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:debt-brake"],
      sources: [
        { title: "Forbes: Why The 10-Year Treasury Yield Just Hit A 24-Year High", url: "https://www.forbes.com/sites/garthfriesen/2026/10/07/why-the-10-year-treasury-yield-just-hit-a-24-year-high/" },
        { title: "Trading Economics: United States 10-Year Government Bond Yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
        { title: "Trading Economics: Germany 10-Year Government Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" },
        { title: "onvista: Leitindex schließt im Minus – hohe Renditen belasten", url: "https://www.onvista.de/news/2026/10-07-leitindex-schliesst-im-minus-hohe-renditen-belasten-41121301-19-26561594" }
      ]
    },

    /* 4 EZB/EUROZONE-INFLATION/LAGARDE/KONJUNKTUR */
    {
      id: "ezb-eurozone-inflation-lagarde-konjunktur-08-10", cats: ["economy"], when: "Eurozone-Inflation (Flash) 01.10. · Lagarde-Nachfolge-Debatte laufend · Auftragseingänge 06.10. · Industrieproduktion 07.10.",
      headline: "Eurozone-Inflation steigt auf Dreijahreshoch, deutsche Industrieaufträge brechen deutlich ein",
      sec30: "Die Inflation in der Eurozone stieg im September laut Eurostat-Flash-Schätzung auf 3,8 % – den höchsten Stand seit drei Jahren und über der Konsenserwartung von 3,6 %; Haupttreiber war Energie mit +18,8 %. Die deutschen Auftragseingänge im Verarbeitenden Gewerbe sanken im August gegenüber Juli um 10,6 % – deutlich stärker als erwartet, ohne Großaufträge nur −0,1 %. Die Industrieproduktion legte im selben Monat dagegen um 2,0 % zu, getragen von Bau und Maschinenbau. Parallel hält der Druck auf EZB-Präsidentin Lagarde zu mehr Klarheit über ihre Zukunft an; die nächste EZB-Zinsentscheidung fällt am 28./29.10.2026.",
      blocks: [
        { h: "Wie hoch ist die Inflation in der Eurozone?", items: [
          { tag: "fakt", text: "Die Eurozone-Inflation stieg im September 2026 laut Eurostat-Flash-Schätzung auf 3,8 % (von 3,2 % im August) – den höchsten Stand seit drei Jahren und über der Konsenserwartung von 3,6 %. Haupttreiber war Energie (+18,8 % nach +14,3 % im August).",
            ask: [{ label: "Was bedeutet eine Inflation von 3,8 %?", ref: "e:inflation-what" }] }
        ]},
        { h: "Wie haben sich die deutschen Industriedaten entwickelt?", items: [
          { tag: "fakt", text: "Die realen Auftragseingänge im Verarbeitenden Gewerbe sanken im August 2026 gegenüber Juli saison- und kalenderbereinigt um 10,6 % – ohne Großaufträge nur um 0,1 %. Haupttreiber war ein starker Rückgang im „Sonstigen Fahrzeugbau” (u. a. Flugzeuge, Schiffe, Militärfahrzeuge).",
            ask: [{ label: "Was bedeutet das für deutsche Unternehmen?", ref: "e:companies-costs" }] },
          { tag: "fakt", text: "Die reale Produktion im Produzierenden Gewerbe stieg im August 2026 gegenüber Juli um 2,0 %, getragen von Bau und Maschinenbau." }
        ]},
        { h: "Wie ist der Stand bei der Lagarde-Nachfolge?", items: [
          { tag: "position", text: "Italiens Finanzminister Giancarlo Giorgetti hatte EZB-Präsidentin Christine Lagarde bereits am 02.10.2026 aufgefordert, Klarheit über ihre weitere Amtszeit zu schaffen." },
          { tag: "unbestaetigt", text: "Eine Analyse vom 07.10.2026 beschreibt, dass eine Nachbesetzung Lagardes zugleich die Neubesetzung zweier weiterer EZB-Spitzenposten erforderlich machen würde; Lagardes offizielle Amtszeit läuft bis Oktober 2027." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gestiegene Inflation und die eingebrochenen Auftragseingänge bei gleichzeitig gestiegener Industrieproduktion zeigen ein uneinheitliches Bild der Konjunktur im Euroraum vor der nächsten EZB-Zinsentscheidung am 28./29.10.2026." }
        ]}
      ],
      reaction: "Die gestiegene Eurozone-Inflation und die schwachen deutschen Auftragseingänge fallen in dieselbe Woche wie die gestiegene US-Rendite (Meldung 3) und die gemischten Fed-Signale (Meldung 2).",
      terms: ["inflation", "leitzins"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "Eurostat: Euro area annual inflation up to 3.8%", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-02102026-ap" },
        { title: "Bloomberg: Euro-Zone Inflation Tops Estimates to Hit Three-Year High", url: "https://www.bloomberg.com/news/articles/2026-10-02/euro-zone-inflation-tops-estimates-to-hit-three-year-high" },
        { title: "Statistisches Bundesamt (Destatis): Auftragseingang im Verarbeitenden Gewerbe im August 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_354_421.html" },
        { title: "presseportal.de: Produktion im August 2026 – +2,0 % zum Vormonat", url: "https://www.presseportal.de/pm/32102/6366265" },
        { title: "Bloomberg: Replacing Lagarde at the ECB Will Require Filling Two Other Top Jobs", url: "https://www.bloomberg.com/news/newsletters/2026-10-07/ecb-president-race-who-will-replace-christine-lagarde" }
      ]
    },

    /* 5 GOLD/BITCOIN/EUR-USD */
    {
      id: "gold-bitcoin-eurusd-mittwoch-08-10", cats: ["markets"], when: "Stand Mi 07.10.2026",
      headline: "Gold gibt vor Fed-Protokoll nach, Bitcoin fällt mit sinkender Risikobereitschaft, Euro schwächer zum Dollar",
      sec30: "Gold notierte am Mittwoch je nach Quelle und Abfragezeitpunkt zwischen rund 4.087 und 4.153 Dollar je Feinunze – ein Rückgang von rund 1 bis 2 % gegenüber Dienstag. Bitcoin fiel von einer Eröffnung bei 85.546 Dollar auf teils rund 83.771 Dollar; dpa-AFX nennt für den Tag 84.103 Dollar (−1,69 %). Der Euro gab laut EZB-Referenzkurs von 1,1269 auf 1,1177 Dollar nach (−0,82 %). Gleichzeitig erreichte die US-Rendite ein 24-Jahres-Hoch (Meldung 3).",
      blocks: [
        { h: "Wie bewegt sich Gold?", items: [
          { tag: "unbestaetigt", text: "Gold notierte am Mittwoch je nach Quelle zwischen rund 4.087 und 4.153 Dollar je Feinunze – ein Rückgang von rund 1 bis 2 % gegenüber Dienstag.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "einordnung", text: "Dass Gold nachgab, erklären Marktbeobachter mit der am selben Tag auf ein 24-Jahres-Hoch gestiegenen US-Rendite, die zinslose Anlagen weniger attraktiv macht (Meldung 3)." }
        ]},
        { h: "Wie hält sich Bitcoin?", items: [
          { tag: "unbestaetigt", text: "Bitcoin fiel am Mittwoch von einer Eröffnung bei 85.546 Dollar auf teils rund 83.771 Dollar; dpa-AFX/ARIVA nennt für den Tag 84.103 Dollar (−1,69 %). Eine Quelle beschreibt eine „breitere Abkühlung der Risikobereitschaft” als Hintergrund.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] }
        ]},
        { h: "Wie hat sich der Euro entwickelt?", items: [
          { tag: "fakt", text: "Laut EZB-Referenzkurs fiel EUR/USD am Mittwoch auf 1,1177 – ein Rückgang von 0,82 % gegenüber dem Dienstagswert von 1,1269.",
            ask: [{ label: "Was bedeuten unterschiedliche Zinserwartungen für den Euro?", ref: "s:4" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Gold, Bitcoin und Euro gaben am Mittwoch gemeinsam nach, während die US-Rendite gleichzeitig ein 24-Jahres-Hoch erreichte – ein Muster, das Marktbeobachter mit der gestiegenen Attraktivität verzinster Anlagen erklären. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die gleichzeitig auf ein 24-Jahres-Hoch gestiegene US-Rendite (Meldung 3) gilt grundsätzlich als bremsender Faktor für zinslose Anlagen wie Gold und für Risikoanlagen wie Bitcoin.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "CNBC Select: The price of gold today, Oct. 7, 2026", url: "https://www.cnbc.com/select/the-price-of-gold-today-oct-7-2026/" },
        { title: "Yahoo Finance: Bitcoin and ethereum prices today, Wednesday, October 7, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-wednesday-october-7-2026-crypto-prices-fade-along-with-risk-appetite-113324902.html" },
        { title: "ARIVA.DE: Devisen – Eurokurs gefallen, EZB-Referenzkurs 1,1177 US-Dollar", url: "https://www.ariva.de/news/devisen-eurokurs-gefallen-ezb-referenzkurs-1-1177-12161810" }
      ]
    },

    /* 6 KOALITIONSAUSSCHUSS RENTE/PFLEGE/HAUSHALT */
    {
      id: "koalitionsausschuss-rente-pflege-ergebnis-08-10", cats: ["germany"], when: "Sitzung 07.10.2026, ca. 19–23 Uhr · schriftliche Ergebnisse angekündigt für Donnerstagmorgen, 08.10.2026",
      headline: "Koalitionsausschuss berät rund vier Stunden ohne öffentliche Beschlüsse, Ergebnisse sollen schriftlich folgen",
      sec30: "Der Koalitionsausschuss von Union und SPD tagte am 07.10.2026 erstmals seit gut drei Monaten im Kanzleramt – rund vier Stunden, ohne Nachtsitzung und ohne Pressekonferenz. Themen waren die Umsetzung des im Juli vereinbarten Reformpakets zu Rente, Pflege, Arbeitsmarkt und Steuern sowie der Bundeshaushalt 2027. Konkrete inhaltliche Beschlüsse wurden am Abend nicht verkündet; die Koalitionsspitzen wollten sich am Donnerstagmorgen schriftlich äußern. Zentraler Streitpunkt bleibt die abschlagsfreie Rente nach 45 Beitragsjahren, für die als Kompromiss 46 oder 47 Beitragsjahre mit Härtefallregelung diskutiert werden. Arbeitsministerin Bärbel Bas fehlte wegen eines Trauerfalls.",
      blocks: [
        { h: "Worüber wurde beim Koalitionsausschuss beraten, und wie verlief die Sitzung?", items: [
          { tag: "fakt", text: "Der Koalitionsausschuss von Union und SPD tagte am 07.10.2026 im Kanzleramt – die erste Sitzung seit gut drei Monaten. Themen waren die weitere Umsetzung des im Juli 2026 vereinbarten Reformpakets (Rente, Pflege, Arbeitsmarkt, Steuern) sowie der Bundeshaushalt 2027.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Die Sitzung endete nach rund vier Stunden gegen 22 bis 23 Uhr ohne Nachtsitzung und ohne Pressekonferenz; konkrete inhaltliche Beschlüsse wurden nicht öffentlich verkündet. Die Koalitionsspitzen kündigten an, sich am Donnerstagmorgen schriftlich zu den Ergebnissen zu äußern." }
        ]},
        { h: "Was wird zur Rente konkret diskutiert?", items: [
          { tag: "unbestaetigt", text: "Als Kompromiss zur umstrittenen abschlagsfreien Rente nach 45 Beitragsjahren werden laut Berichten eine Anhebung auf 46 oder 47 Beitragsjahre sowie Härtefall- und Übergangsregelungen diskutiert; eine finale Zahl war zum Recherchezeitpunkt nicht entschieden." },
          { tag: "position", text: "CSU-Landesgruppenchef Alexander Hoffmann erklärte, ohne eine Änderung des Regel-Ausnahme-Verhältnisses bei der abschlagsfreien Rente könne es keine Rentenreform geben; Härtefälle sollten möglich bleiben, Regelfälle aber nicht." }
        ]},
        { h: "Welche Positionen vertreten Union und SPD?", items: [
          { tag: "position", text: "Bundeskanzler Friedrich Merz forderte vor der Sitzung ein erneutes Bekenntnis zum im Juli vereinbarten Reformkurs als „Geschäftsgrundlage” der Regierungsarbeit und kündigte an, das Gesamtpaket werde voraussichtlich nicht vor Weihnachten, sondern im Frühjahr 2027 abgeschlossen." },
          { tag: "position", text: "SPD-Fraktionschef Matthias Miersch erwartete vor der Sitzung eine „sehr ehrliche Aussprache darüber, wie wir die Aufgaben in den nächsten Monaten anpacken”." },
          { tag: "fakt", text: "Arbeitsministerin Bärbel Bas (SPD) war wegen eines Trauerfalls bei der Sitzung abwesend. Unionsfraktionschef Thorsten Frei kommentierte den Ausgang beim Verlassen des Kanzleramts knapp mit: „Gut war's.”" }
        ]},
        { h: "Welche weiteren Themen standen zur Debatte?", items: [
          { tag: "fakt", text: "Bei der Pflege hat das Kabinett bereits erste Sparmaßnahmen zur kurzfristigen finanziellen Stabilisierung der Pflegeversicherung auf den Weg gebracht; eine grundlegende Strukturreform soll eine Expertenkommission vorbereiten. Die SPD fordert zusätzlich eine Deckelung der Eigenanteile für Pflegebedürftige." },
          { tag: "unbestaetigt", text: "Bei den Steuern besteht laut Berichten Streit um eine Zuckersteuer: Finanzminister Lars Klingbeil (SPD) hält an der Einführung fest, das Kanzleramt habe den Entwurf laut Berichten gebremst." }
        ]},
        { h: "Welche Auswirkungen werden in Umfragen diskutiert?", items: [
          { tag: "unbestaetigt", text: "Aktuelle Sonntagsfragen Anfang Oktober 2026 sehen die AfD in allen Instituten klar an erster Stelle (INSA 05.10.: 30,5 %; Forsa 06.10.: 26 %; Infratest dimap 01.10.: 27 %), deutlich vor der Union (INSA 17,5 %; Forsa 19 %; Infratest dimap 20 %). Grüne, SPD und Linke liegen im Mittelfeld eng beieinander." },
          { tag: "unbestaetigt", text: "Eine Ipsos-Umfrage für den „Spiegel” (Erhebungszeitraum 30.09.–04.10.2026) kam zu dem Ergebnis, dass 67 % der Befragten die Kanzlerschaft von Friedrich Merz für gescheitert halten; in Ostdeutschland lag der Wert bei 80 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Da Merz den Abschluss des Gesamtpakets erst für das Frühjahr 2027 statt für dieses Jahr erwartet, bleibt der zentrale Streitpunkt bei der Rente vorerst ungelöst, während der Bundeshaushalt 2027 unabhängig davon nach festem Zeitplan bis zur Schlussabstimmung am 27.11.2026 weiterläuft." }
        ]}
      ],
      reaction: "Die ungelöste Rentenfrage läuft parallel zur Debatte über steigende Zinskosten des Staates (Meldung 3) und zur Berliner Sondierung (Meldung 7), deren dritte Runde auf denselben Tag fiel.",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:haushalt-basics", "e:rente-basics", "e:debt-brake"],
      sources: [
        { title: "ad-hoc-news.de: Koalitionsausschuss beendet – Union und SPD beraten über Reformen und Haushalt 2027", url: "https://www.ad-hoc-news.de/politik/koalitionsausschuss-beendet-union-und-spd-beraten-ueber-reformen-und-haushalt-2027/70259842" },
        { title: "ad-hoc-news.de: Koalitionsausschuss beendet Sitzung – Union und SPD beraten über Reform-Zeitplan", url: "https://www.ad-hoc-news.de/politik/koalitionsausschuss-beendet-sitzung-union-und-spd-beraten-ueber-reform-zeitplan/70259665" },
        { title: "ZDFheute: Koalition nach Gipfel – Einigkeit trotz wachsender Spannungen", url: "https://www.zdfheute.de/politik/deutschland/koalitionsausschuss-reformkurs-beratung-spitzen-union-spd-100.html" },
        { title: "t-online: Rentenreform – Union und SPD erwägen Änderung bei „Rente mit 63”", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101450092/rente-mit-63-union-und-spd-erwaegen-bis-zu-47-beitragsjahre.html" },
        { title: "news.de: Friedrich Merz – Umfrage-Knall trifft Merz", url: "https://www.news.de/politik/860066209/friedrich-merz-gescheitert-als-bundeskanzler-laut-neuem-umfrage-knall-waehler-rechnen-mit-koalition-in-berlin-ab-vertrauen-komplett-weg/1/" }
      ]
    },

    /* 7 BERLIN SONDIERUNG */
    {
      id: "berlin-sondierung-dritte-runde-antisemitismus-mechanismus-08-10", cats: ["germany"], when: "Dritte Vorgesprächsrunde 07.10.2026 · gemeinsame Bekanntgabe angesetzt für Donnerstagmittag, 08.10.2026",
      headline: "Linke, Grüne und SPD in Berlin zeichnen Linie zu Antisemitismus vor, formale Sondierung soll folgen",
      sec30: "Die dritte Vorgesprächsrunde zwischen Linke, Grüne und SPD in Berlin fand am 07.10.2026 im Haus der Statistik statt – dem dritten Jahrestag des Hamas-Terroranschlags von 2023. Grüne und SPD hatten eine gemeinsame Linie zum Umgang mit Antisemitismus und organisierter Kriminalität innerhalb der Linken zur Vorbedingung für formelle Sondierungsgespräche gemacht, unter anderem wegen der Chat-Kontakte des Linke-Abgeordneten Ferat Koçak zum Umfeld eines Berliner Clans. Am Abend zeichnete sich laut Berichten eine gemeinsame Linie ab; Details wurden vertraulich gehalten. Ein am Morgen des 08.10. veröffentlichter Bericht beschreibt einen geplanten Mechanismus mit möglichem Fraktionsausschluss bei Verstößen; eine offizielle gemeinsame Bekanntgabe war für Donnerstagmittag angesetzt.",
      blocks: [
        { h: "Worum ging es bei den Vorgesprächen?", items: [
          { tag: "fakt", text: "Grüne und SPD machten eine klare gemeinsame Linie der Linken zum Umgang mit Antisemitismus und organisierter Kriminalität zur Vorbedingung für den Beginn formeller Sondierungsgespräche.",
            ask: [{ label: "Was braucht eine Koalition im Abgeordnetenhaus?", ref: "e:coalition-majority" }] },
          { tag: "fakt", text: "Konkreter Anlass war unter anderem, dass der Linke-Bundestagsabgeordnete Ferat Koçak wegen freundschaftlicher Chat-Kontakte zu einem Angehörigen des Umfelds eines Berliner Clans unter Druck geraten war und seinen Sitz im Innenausschuss des Bundestags aufgegeben hatte." },
          { tag: "position", text: "Linke-Fraktionschef im Bundestag Sören Pellmann bezeichnete Koçaks Kontakte als „Fehler”; Koçak selbst erklärte, er sei „weder kriminell noch ein Unterstützer organisierter Kriminalität”." }
        ]},
        { h: "Was ist der Stand nach der dritten Runde?", items: [
          { tag: "fakt", text: "Die dritte Vorgesprächsrunde fand am 07.10.2026 im Haus der Statistik statt – dem dritten Jahrestag des Hamas-Terroranschlags von 2023. Am Abend zeichnete sich laut übereinstimmenden Angaben aller drei Parteien eine gemeinsame Linie zum Umgang mit Antisemitismus ab; konkrete Inhalte wurden aus Vertraulichkeitsgründen nicht offengelegt." },
          { tag: "position", text: "Grünen-Fraktionschefin Bettina Jarasch kommentierte den Stand mit den Worten: „Morgen geht's weiter.”",
            ask: [{ label: "Warum sind solche Fragen bundespolitisch relevant?", ref: "e:landtagswahl-why" }] }
        ]},
        { h: "Was berichtet die aktuelle Recherche zum geplanten Mechanismus?", items: [
          { tag: "unbestaetigt", text: "Ein am Morgen des 08.10.2026 veröffentlichter Bericht beschreibt einen geplanten „Mechanismus gegen Antisemitismus”, nach dem Abgeordnete bei Verstößen aus der Fraktion ausgeschlossen werden könnten. Die genaue Ausgestaltung war zum Recherchezeitpunkt nicht öffentlich einsehbar; eine offizielle gemeinsame Bekanntgabe war für Donnerstagmittag angesetzt, ob sie bereits erfolgt ist, ließ sich nicht abschließend verifizieren." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Sollte die Linie zum Umgang mit Antisemitismus endgültig stehen, könnten formelle Sondierungsgespräche zwischen Linke, Grüne und SPD beginnen – ein möglicher Schritt zu einer ersten von der Linken geführten Berliner Landesregierung. Die Linke war mit 25,7 % stärkste Kraft der Berlin-Wahl vom 20.09.2026 geworden." }
        ]}
      ],
      reaction: "Die Berliner Vorgespräche fielen auf denselben Tag wie der bundespolitische Koalitionsausschuss zu Rente und Pflege (Meldung 6).",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel: Durchbruch ausgerechnet am 7. Oktober? Die Verantwortung für Grüne und SPD wird immer größer", url: "https://www.tagesspiegel.de/berlin/durchbruch-ausgerechnet-am-7-oktober-die-verantwortung-fur-grune-und-spd-wird-immer-grosser-16123309.html" },
        { title: "Tagesspiegel: Noch keine Einigung zum Antisemitismus – Linke, Grüne und SPD wollen am Donnerstag zu Ergebnis kommen", url: "https://www.tagesspiegel.de/berlin/noch-keine-einigung-zum-antisemitismus-linke-grune-und-spd-wollen-am-donnerstag-zu-ergebnis-bei-vorgesprachen-in-berlin-kommen-16137826.html" },
        { title: "Tagesspiegel Checkpoint: Exklusiv – Mechanismus gegen Antisemitismus, Abgeordnete sollen aus der Fraktion ausgeschlossen werden", url: "https://www.tagesspiegel.de/checkpoint/exklusiv-mechanismus-gegen-antisemitismus-abgeordnete-sollen-aus-der-fraktion-ausgeschlossen-werden-16138643.html" },
        { title: "ZDFheute: Berlin – Vorgespräch von Linken, Grünen und SPD ohne Ergebnis", url: "https://www.zdfheute.de/politik/deutschland/berlin-linke-gruene-spd-gespraech-koalition-wahl-sondierung-100.html" }
      ]
    },

    /* 8 UKRAINE GROSSANGRIFF */
    {
      id: "ukraine-grossangriff-trilaterale-gespraeche-suedkorea-08-10", cats: ["world", "geo"], when: "Großangriff 07.10.2026 · US-Vorschlag trilaterale Gespräche 04.10. weiterhin ohne russische Zusage · Südkorea-Streit andauernd, Stand 06.10.",
      headline: "Russland greift ukrainische Energieinfrastruktur in mehreren Regionen an, Vorschlag für trilaterale Gespräche bleibt offen",
      sec30: "Russland setzte am 07.10.2026 bei einem Großangriff auf mehrere ukrainische Regionen laut ukrainischer Luftwaffe 130 Drohnen, 48 Marschflugkörper sowie ballistische Raketen ein; 161 Ziele wurden nach ukrainischen Angaben abgefangen. Mindestens 20 bis 21 Zivilisten wurden getötet, darunter vier Kinder, rund 50 bis 60 wurden verletzt – am stärksten betroffen war Pryluky mit 14 Toten. Präsident Selenskyj hatte den Angriff bereits am Vortag anhand von Geheimdiensterkenntnissen öffentlich vorhergesagt und bezeichnete ihn als einen der größten seit 2022. Der von den USA vorgeschlagene trilaterale Gesprächsrahmen zwischen den USA, der Ukraine und Russland bis Ende Oktober bleibt ohne bestätigte russische Zusage. Im Streit mit Südkorea um überstellte nordkoreanische Kriegsgefangene zeigte sich Seoul zum 06.10. weiterhin unzufrieden mit einer Teil-Entschuldigung der Ukraine.",
      blocks: [
        { h: "Was ist beim russischen Großangriff am 7.10. passiert?", items: [
          { tag: "fakt", text: "Russland setzte laut ukrainischer Luftwaffe 130 Drohnen, 48 Marschflugkörper sowie ballistische Raketen gegen mehrere ukrainische Regionen (u. a. Kyjiw, Poltava, Dnipropetrovsk, Charkiw) ein; 161 Ziele wurden nach ukrainischen Angaben abgefangen. Mindestens 20 bis 21 Zivilisten wurden getötet, darunter vier Kinder; rund 50 bis 60 wurden verletzt. Am stärksten betroffen war Pryluky mit 14 Toten bei einem Raketeneinschlag in einem Wohnhaus." },
          { tag: "position", text: "Präsident Selenskyj erklärte, eines der zentralen Ziele sei die ukrainische Energieinfrastruktur gewesen: Russland habe „schmerzhaft und demonstrativ” treffen wollen. Er bezeichnete den Angriff als einen der größten seit 2022." }
        ]},
        { h: "Welche Position vertritt Russland dazu?", items: [
          { tag: "position", text: "Das russische Verteidigungsministerium erklärte, Ziel seien militärische Einrichtungen gewesen, unter anderem Produktionsstätten für „Flamingo”-Marschflugkörper, Drohnenfertigung sowie Hafen- und Schiffsreparatur-Infrastruktur in der Region Odesa – eine Darstellung der Konfliktpartei, die sich unabhängig nicht überprüfen ließ." }
        ]},
        { h: "Was ist der Stand bei den vorgeschlagenen trilateralen Gesprächen?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj hatte am 04.10. mitgeteilt, die USA hätten technische Gespräche im Dreier-Format zwischen den USA, der Ukraine und Russland bis Ende Oktober vorgeschlagen; die Ukraine signalisierte Bereitschaft, unter anderem für einen Austragungsort wie Abu Dhabi. Eine Zusage Russlands lag zum Recherchezeitpunkt weiterhin nicht vor." }
        ]},
        { h: "Was ist der Stand im Streit mit Südkorea?", items: [
          { tag: "position", text: "Südkoreas Präsident Lee Jae-myung bekräftigte seine Kritik, die Ukraine habe ihn durch die Offenlegung der vertraulichen Überstellung zweier gefangener nordkoreanischer Soldaten getäuscht, und drohte mit „weiteren Maßnahmen”, darunter laut Berichten ein möglicher Abzug des südkoreanischen Botschafters." },
          { tag: "position", text: "Der ukrainische Außenminister Andrii Sybiha bezeichnete den Vorgang als „diplomatisches Missverständnis”; eine von Südkorea als ausreichend akzeptierte Entschuldigung lag zum 06.10. nach Berichten weiterhin nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die anhaltenden Angriffe auf die Energieinfrastruktur und der weiterhin offene Stand bei den vorgeschlagenen trilateralen Gesprächen zeigen, wie unsicher sowohl die militärische als auch die diplomatische Lage bleibt, während westliche Rüstungsunterstützung weiterläuft (Meldung 10, Meldung 11)." }
        ]}
      ],
      reaction: "Die anhaltenden Angriffe bleiben Hintergrund für die Rüstungsthemen (Meldung 10, Meldung 11); die Lage am Golf wird gesondert in Meldung 9 eingeordnet.",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Al Jazeera: At least 20 killed as Russia launches 'massive' attack on Ukraine", url: "https://www.aljazeera.com/news/2026/10/7/at-least-two-killed-in-kyiv-as-russia-launches-massive-attack-on-ukraine" },
        { title: "Washington Post: Russian strikes on Ukrainian cities kill at least 15", url: "https://www.washingtonpost.com/world/2026/10/07/russia-ukraine-war-kyiv-strike/f76fe5e6-c216-11f1-8170-681419af1cc9_story.html" },
        { title: "Kyiv Independent: US proposes trilateral talks with Russia, Ukraine by end of October, Zelensky says", url: "https://kyivindependent.com/us-proposes-trilateral-talks-with-russia-ukraine-by-end-of-october-zelensky-says/" },
        { title: "Al Jazeera: Ukraine ready for US-backed talks with Russia: Zelenskyy", url: "https://www.aljazeera.com/news/2026/10/4/ukraine-ready-for-us-backed-talks-with-russia-zelenskyy" },
        { title: "Pravda Ukraine: Seoul dissatisfied with Kyiv's apology over POW transfer", url: "https://www.pravda.com.ua/eng/news/2026/10/06/8056667/" }
      ]
    },

    /* 9 IRAN/HORMUZ */
    {
      id: "iran-hormuz-tanker-angriffe-us-truppenaufbau-trump-08-10", cats: ["world", "geo"], when: "Mindestens sieben Tanker-Zwischenfälle Anfang Oktober, zuletzt 07.10. · US-Truppenaufbau laufend · Trump-Äußerung 06.10. · Taiwan F-16-Lieferung 02.10.",
      headline: "Weitere Tanker-Angriffe in der Straße von Hormus, USA verstärken Truppenpräsenz, Trump schließt neue Angriffe nicht aus",
      sec30: "In der ersten Oktoberwoche wurden mindestens sieben Tanker-Zwischenfälle in der Straße von Hormus gemeldet, zuletzt am 07.10. bei dem Tanker „On Peace” vor dem omanischen Hafen Limah, dessen Besatzung von der omanischen Luftwaffe evakuiert wurde. Die USA verlegen einen dritten Flugzeugträger (USS Theodore Roosevelt) sowie mehrere Tausend zusätzliche Soldaten in die Golfregion – nach Einschätzung mehrerer Berichte der größte Truppenaufbau in der Region seit der Irak-Invasion 2003. Irans Außenminister Araghchi soll laut Berichten einen Waffenstillstand samt Wiedereröffnung der Straße nach sieben Tagen angeboten haben; Präsident Trump erklärte bei einer Wahlkampfveranstaltung am 06.10., nicht mehr an einem Deal mit Teheran interessiert zu sein. Separat lieferten die USA am 02.10. zwei weitere F-16V-Kampfjets an Taiwan.",
      blocks: [
        { h: "Welche neuen Tanker-Zwischenfälle gab es?", items: [
          { tag: "fakt", text: "In der ersten Oktoberwoche wurden mindestens sieben Tanker-Zwischenfälle in der Straße von Hormus gemeldet, darunter der kuwaitische Tanker „Kazimah III” (01.10.) und der liberianisch geflaggte Tanker „Lipsi” (04.10.). Am 07.10. wurde der panamaisch geflaggte Tanker „On Peace” rund 9 Seemeilen vor dem omanischen Hafen Limah getroffen; die omanische Luftwaffe evakuierte zehn Besatzungsmitglieder.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wie ist der aktuelle militärische Stand?", items: [
          { tag: "fakt", text: "Die USA verlegen einen dritten Flugzeugträger (USS Theodore Roosevelt) sowie mehrere Tausend zusätzliche Soldaten in die Golfregion; mehrere Berichte bezeichnen dies als den größten US-Truppenaufbau in der Region seit der Irak-Invasion 2003." },
          { tag: "unbestaetigt", text: "Einzelne Berichte nennen eine mögliche Gesamt-US-Präsenz von deutlich über 20.000 Personen; genaue, übereinstimmend bestätigte Gesamtzahlen lagen zum Recherchezeitpunkt nicht vor." }
        ]},
        { h: "Welche Positionen vertreten die Konfliktparteien?", items: [
          { tag: "position", text: "Irans Parlamentspräsident Ghalibaf besteht weiterhin darauf, dass die Straße von Hormus gesperrt bleibt, bis die USA sieben im Juni formulierte Bedingungen erfüllen." },
          { tag: "unbestaetigt", text: "Irans Außenminister Araghchi soll laut Berichten nach der UN-Generalversammlung einen Waffenstillstand samt Wiedereröffnung der Straße von Hormus nach sieben Tagen angeboten haben; eine unabhängige Bestätigung dieses Angebots lag nicht vor." },
          { tag: "position", text: "Präsident Trump erklärte bei einer Wahlkampfveranstaltung am 06.10.2026 in San Antonio laut Berichten, er sei „nicht mehr an einem Deal” mit Teheran interessiert." }
        ]},
        { h: "Bereitet das Pentagon neue Angriffsoptionen vor?", items: [
          { tag: "unbestaetigt", text: "Berichte vom 08.10.2026 beschreiben, das Pentagon bereite Optionen für mögliche neue Angriffe auf Iran vor, die laut Trump möglicherweise erst nach den US-Zwischenwahlen im November erfolgen könnten; eine endgültige Entscheidung lag nicht vor." }
        ]},
        { h: "Was ist der Stand bei Taiwan?", items: [
          { tag: "fakt", text: "Die USA lieferten am 02.10.2026 zwei weitere F-16V-Kampfjets an Taiwan, Teil eines rund 8 Mrd. Dollar schweren Vertrags über 66 Maschinen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Kette von einem geopolitischen Konflikt über den Ölpreis bis zu Zinsen und Verbrauchern lässt sich Schritt für Schritt nachvollziehen.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Die anhaltenden Tanker-Zwischenfälle bleiben Hintergrund für den Ölpreis und die deutsche Energieversorgung (Meldung 15) sowie für die allgemeine Risikoprämie an den Märkten (Meldung 3, Meldung 5).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "Al Jazeera: Oman evacuates injured crew from attacked tanker in Strait of Hormuz", url: "https://www.aljazeera.com/news/2026/10/7/oman-evacuates-injured-crew-from-attacked-tanker-in-strait-of-hormuz" },
        { title: "CNBC: Rebounding oil exports through Strait of Hormuz are vulnerable to stepped-up Iranian tanker attacks", url: "https://www.cnbc.com/2026/10/06/crude-oil-tanker-strait-hormuz-iran-attack.html" },
        { title: "Euronews: US sends third carrier strike group to Middle East in biggest buildup since 2003", url: "https://www.euronews.com/2026/10/02/us-sends-third-carrier-strike-group-to-middle-east-in-biggest-buildup-since-2003" },
        { title: "Washington Times: Iranian leaders focus on diplomatic talks as U.S. adds more military muscle", url: "https://washingtontimes.com/news/2026/oct/4/iranian-leaders-focus-diplomatic-talks-us-adds-military-muscle" },
        { title: "BusinessToday: Pentagon prepares Iran strike plans as Trump weighs options before midterm elections", url: "https://businesstoday.in/world/story/pentagon-prepares-iran-strike-plans-as-trump-weighs-options-before-midterm-elections-report-560282-2026-10-08" }
      ]
    },

    /* 10 RHEINMETALL/RENK/HENSOLDT */
    {
      id: "rheinmetall-renk-hensoldt-kurse-alstom-ukraine-radar-08-10", cats: ["defence"], when: "Kursrückgänge 06.–07.10.2026 · Rheinmetall-Alstom-Eckpunkte 06.10. · Hensoldt-Ukraine-Absichtserklärung 05.10.",
      headline: "Rheinmetall, Renk und Hensoldt geben trotz neuer Vereinbarungen nach, Rheinmetall einigt sich mit Alstom über Lokwerk Kassel",
      sec30: "Die Rheinmetall-Aktie fiel am Mittwoch je nach Quelle auf rund 926 bis 953 Euro (−2,7 bis −2,8 %); am Vortag hatten Rheinmetall und Alstom Eckpunkte zur Übernahme des Alstom-Lokomotivwerks in Kassel (rund 750 Beschäftigte) vereinbart. Die Renk-Aktie fiel weiter auf 34,11 Euro (−5,79 %), der Marktwert sank auf rund 3,7 Mrd. Euro. Die Hensoldt-Aktie gab trotz einer am 05.10. unterzeichneten Absichtserklärung mit der Ukraine über weitere Radarlieferungen weiter nach, auf rund 75,08 bis 75,62 Euro (−4,2 bis −4,4 %); Jefferies bestätigte dennoch das Rating „Buy” mit Kursziel 98 Euro, während Goldman Sachs neutral bleibt.",
      blocks: [
        { h: "Wie haben sich die Kurse entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die Rheinmetall-Aktie notierte am Mittwoch, 07.10.2026, je nach Quelle unterschiedlich zwischen rund 926 und 953 Euro (−2,71 bis −2,82 %); eine eindeutig bestätigte Schlusszahl lag nicht vor.",
            ask: [{ label: "Was bedeutet ein fallender Aktienkurs trotz hoher Auftragsbestände?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Die Renk-Aktie fiel am Mittwoch auf 34,11 Euro (−5,79 %); der Marktwert sank auf rund 3,7 Mrd. Euro. Das durchschnittliche Analystenkursziel liegt bei gut 63 Euro, deutlich über dem aktuellen Kurs." },
          { tag: "fakt", text: "Die Hensoldt-Aktie fiel am Dienstag um 6,4 % auf 78,78 Euro und am Mittwoch je nach Quelle weiter auf rund 75,08 bis 75,62 Euro (−4,2 bis −4,4 %)." }
        ]},
        { h: "Was hat Rheinmetall mit Alstom vereinbart?", items: [
          { tag: "fakt", text: "Rheinmetall und Alstom vereinbarten am 06.10.2026 Eckpunkte zur Übernahme des Alstom-Lokomotivwerks in Kassel (rund 750 Beschäftigte) durch Rheinmetall Land Systems; detaillierte Vertragsbedingungen stehen noch aus." }
        ]},
        { h: "Was hat Hensoldt mit der Ukraine vereinbart?", items: [
          { tag: "fakt", text: "Hensoldt-CEO Oliver Dörre unterzeichnete am 05.10.2026 am Rande des Besuchs von Bundeskanzler Merz in der Ukraine eine Absichtserklärung mit dem ukrainischen Verteidigungsministerium über weitere Radarlieferungen und die Weiterentwicklung der Luftraumüberwachung; geprüft wird zudem der Einsatz des Weitbereichsradars TRL-4D LR in der Ukraine. Stückzahlen, Auftragswert und Zeitplan wurden nicht genannt." }
        ]},
        { h: "Wie bewerten Analysten die Kursrückgänge?", items: [
          { tag: "position", text: "Jefferies-Analyst Ben Brown bestätigte am 07.10. das Rating „Buy” für Hensoldt mit Kursziel 98 Euro und bewertete den jüngsten Kursrückgang als Kaufgelegenheit." },
          { tag: "position", text: "Goldman Sachs nahm die Hensoldt-Coverage dagegen mit neutralem Rating auf und verwies auf hohe Auftragsbestände im Verhältnis zur Verschuldung sowie auf Umsetzungsrisiken." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass alle drei Rüstungswerte trotz neuer Aufträge und Absichtserklärungen nachgaben, fällt zusammen mit dem allgemeinen Marktumfeld steigender Renditen (Meldung 3) – ein Hinweis darauf, dass Rüstungsaktien zuletzt auch stark vom Zinsumfeld statt nur von der Auftragslage getrieben wurden. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die Kursrückgänge fielen zusammen mit dem allgemeinen Rückgang an den Aktienmärkten (Meldung 1) und der gestiegenen US-Rendite (Meldung 3); die anhaltenden Angriffe in der Ukraine (Meldung 8) bleiben Hintergrundfaktor für die Branche.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "finanzen.net: Rheinmetall Aktie – Kursbewegung 07.10.2026", url: "https://www.finanzen.net/nachricht/aktien/rheinmetall-aktie-kursbewegung-07-10-2026-11201172" },
        { title: "boerse-express: Rheinmetall Aktie – Eckpunkte für Alstom-Lokwerk vereinbart", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-eckpunkte-fuer-alstom-lokwerk-vereinbart-951376" },
        { title: "wallstreet-online: RENK Group Aktie fällt auf 35,49 Euro", url: "https://www.wallstreet-online.de/nachricht/21488332-beachtet-renk-group-aktie-faellt-35-49-07-10-2026" },
        { title: "suv.report: HENSOLDT und Ukraine vereinbaren weitere Radarlieferungen", url: "https://suv.report/hensoldt-und-ukraine-vereinbaren-weitere-radarlieferungen/" },
        { title: "wallstreet-online: Jefferies stuft Hensoldt auf 'Buy'", url: "https://www.wallstreet-online.de/nachricht/21491467-jefferies-stuft-hensoldt-buy" }
      ]
    },

    /* 11 NATO/TKMS/PATRIOT-JAPAN */
    {
      id: "nato-verteidigungsausgaben-tkms-patriot-japan-08-10", cats: ["defence"], when: "NATO-Jahreszahlen 2026 · TKMS Vorzugsbieter seit Juli, unveränderter Stand · Japan-Patriot-Prüfung seit 02.10.",
      headline: "NATO-Verteidigungsausgaben übersteigen erstmals 1,5 Billionen Dollar, Japan prüft erneut Patriot-Weitergabe an die Ukraine",
      sec30: "Die europäischen NATO-Mitglieder erhöhten ihre Verteidigungsausgaben 2026 das zwölfte Jahr in Folge; die gesamten NATO-Verteidigungsausgaben übersteigen 2026 erstmals 1,5 Billionen Dollar. Beim kanadischen U-Boot-Programm bleibt TKMS seit Juli Vorzugsbieter, ohne dass im Berichtszeitraum ein neuer Vertragsstand gemeldet wurde. Bei der Patriot-Produktionslizenz für die Ukraine bleibt die von Trump im September zugesagte Lizenz eine politische Zusage ohne unterzeichnetes Abkommen; der japanische Politiker Itsunori Onodera kündigte am 02.10. an, Japan wolle unter Premierministerin Takaichi erneut prüfen, ob es Patriot-Abfangraketen an die Ukraine weitergeben kann – rechtliche Exportbeschränkungen sind dafür noch zu klären.",
      blocks: [
        { h: "Wie haben sich die NATO-Verteidigungsausgaben entwickelt?", items: [
          { tag: "fakt", text: "Die europäischen NATO-Mitglieder erhöhten ihre Verteidigungsausgaben 2026 das zwölfte Jahr in Folge; die gesamten NATO-Verteidigungsausgaben übersteigen 2026 erstmals 1,5 Billionen Dollar.",
            ask: [{ label: "Welche deutschen Rüstungsaufträge hängen damit zusammen?", ref: "s:10" }] }
        ]},
        { h: "Wie ist der Stand beim TKMS-Auftrag aus Kanada?", items: [
          { tag: "fakt", text: "TKMS ist seit Juli 2026 unverändert Vorzugsbieter für die Erneuerung der kanadischen U-Boot-Flotte (bis zu zwölf Boote vom Typ 212CD); im Berichtszeitraum wurde kein neuer Stand zu einem unterzeichneten Hauptvertrag gemeldet.",
            ask: [{ label: "Was bedeutet „Vorzugsbieter”?", ref: "e:nato-target" }] }
        ]},
        { h: "Wie ist der Stand bei der Patriot-Lizenz und bei Japan?", items: [
          { tag: "unbestaetigt", text: "Die im September von Trump zugesagte Produktionslizenz für Patriot-Abfangraketen für die Ukraine bleibt ohne unterzeichnetes Abkommen; Berichten zufolge verhandelt die Ukraine mit Raytheon über einen Produktionsaufbau, der realistisch frühestens Ende 2027/Anfang 2028 Ergebnisse liefern könnte." },
          { tag: "unbestaetigt", text: "Der japanische Politiker Itsunori Onodera (LDP) kündigte am 02.10.2026 an, Japan wolle unter Premierministerin Takaichi erneut prüfen, ob es Patriot-Abfangraketen an die Ukraine weitergeben oder verkaufen kann; rechtliche Exportbeschränkungen sind dafür noch zu klären, eine Lieferung war zum Recherchezeitpunkt nicht erfolgt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Steigende NATO-Verteidigungsausgaben und laufende, aber noch nicht final vertraglich abgesicherte Großprojekte wie das kanadische U-Boot-Programm oder die Patriot-Lizenz zeigen zwei unterschiedliche Stadien derselben Entwicklung: wachsende Budgets einerseits, offene Vertragsabschlüsse andererseits." }
        ]}
      ],
      reaction: "Die anhaltende Nachfrage nach westlicher Rüstung (Meldung 8) und die Kursentwicklung deutscher Rüstungswerte (Meldung 10) hängen mit demselben Trend steigender Verteidigungsbudgets zusammen.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "IISS: NATO defence spending – navigating the noise", url: "https://www.iiss.org/online-analysis/military-balance/2026/07/nato-defence-spending-navigating-the-noise/" },
        { title: "TVC News: NATO Europe boosts defence spending for 12th straight year", url: "https://www.tvcnews.tv/nato-europe-boosts-defence-spending-for-12th-straight-year/" },
        { title: "militarnyi: Japan to Consider Transferring Patriot Missiles to Ukraine", url: "https://militarnyi.com/en/news/japan-consider-patriot-missiles-for-ukraine/" },
        { title: "France24: Trump made 'final decision' to allow Ukraine to produce Patriot missiles, Zelensky says", url: "https://www.france24.com/en/europe/20260925-trump-made-final-decision-to-give-ukraine-patriot-licence-zelensky-says" }
      ]
    },

    /* 12 M&A: KKR/GEN II, INFORMA/CLARION, GFL */
    {
      id: "kkr-gen-ii-informa-clarion-gfl-deals-08-10", cats: ["deals"], when: "KKR/Gen-II-Vertrag 06.10.2026 · Informa/Clarion(Blackstone)-Vertrag 06.–07.10.2026 · GFL-Bieterwettstreit weiterhin offen",
      headline: "KKR übernimmt Fondsadministrator Gen II für über 5 Milliarden Dollar, Informa kauft Clarion Events von Blackstone",
      sec30: "KKR vereinbarte am 06.10.2026 die Übernahme des Fondsadministrators Gen II Fund Services von Hg und General Atlantic für einen Unternehmenswert von mehr als 5 Mrd. Dollar (konkret rund 5,1 Mrd. Dollar); der Abschluss wird für 2027 erwartet. Informa kauft die Messe- und Konferenzsparte Clarion Events (u. a. IFA Berlin, ICE Barcelona, DSEI) von Blackstone für einen Unternehmenswert von rund 2,24 Mrd. Pfund, finanziert über einen Akquisitionskredit und eine Eigenkapitalplatzierung von rund 940 Mio. Pfund; parallel kündigte Informa eine Abspaltung von Taylor & Francis an. Beim Bieterwettstreit um GFL Environmental zwischen den Konsortien KKR/Blackstone/Energy Capital Partners und Brookfield/IFM gibt es weiterhin keine Einigung; die nächste Telefonkonferenz zu den Q3-Zahlen ist für den 29.10. angesetzt.",
      blocks: [
        { h: "Was hat KKR mit Gen II Fund Services vereinbart?", items: [
          { tag: "fakt", text: "KKR vereinbarte am 06.10.2026 die Übernahme von Gen II Fund Services, einem Anbieter von Fondsadministration mit mehr als 2 Billionen Dollar verwaltetem Vermögen für über 275 Manager, von den bisherigen Eigentümern Hg und General Atlantic. Der Unternehmenswert liegt bei mehr als 5 Mrd. Dollar (konkret rund 5,1 Mrd. Dollar); der Abschluss wird für 2027 erwartet.",
            ask: [{ label: "Wie läuft eine solche Übernahme typischerweise ab?", ref: "e:ma-steps" }] }
        ]},
        { h: "Was hat Informa mit Clarion Events vereinbart?", items: [
          { tag: "fakt", text: "Informa vereinbarte den Kauf der Messe- und Konferenzsparte Clarion Events (u. a. IFA Berlin, ICE Barcelona, DSEI) von Blackstone für einen Unternehmenswert von rund 2,24 Mrd. Pfund; die Finanzierung erfolgt über einen Akquisitionskredit und eine Eigenkapitalplatzierung von rund 940 Mio. Pfund (rund 9 % des Grundkapitals). Parallel kündigte Informa eine Abspaltung des Fachverlags Taylor & Francis an. Der Abschluss wird für das vierte Quartal 2026 erwartet.",
            ask: [{ label: "Was ist eine Abspaltung (Spin-off)?", ref: "t:spin-off" }] }
        ]},
        { h: "Wie ist der Stand bei GFL Environmental?", items: [
          { tag: "unbestaetigt", text: "Zwei Investorenkonsortien – KKR, Blackstone und Energy Capital Partners auf der einen, Brookfield Asset Management und IFM Investors auf der anderen Seite – bieten weiterhin um eine Übernahme von GFL Environmental, ohne dass eine Einigung erzielt wurde. Berichten zufolge müssten die Gebote im Bereich von rund 50 bis 55 Dollar je Aktie liegen, um Erfolgsaussichten zu haben; die nächste Telefonkonferenz zu den Q3-Zahlen ist für den 29.10.2026 angesetzt. Angaben zu einem finalen Kaufpreis, zur Finanzierung oder zu einem Entscheidungstermin sind in den vorliegenden Quellen nicht genannt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die neuen Übernahmen bei Fondsdienstleistern (Gen II) und Messeveranstaltern (Clarion Events) zeigen anhaltend hohe Dealaktivität in diesem Herbst, während der GFL-Bieterwettstreit als Beispiel für einen noch offenen, größeren Übernahmeprozess weiterläuft." }
        ]}
      ],
      reaction: "Die hohe Dealaktivität ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: ["closing", "spin-off"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks"],
      deal: {
        value: "> 5 Mrd. $ Unternehmenswert (konkret rund 5,1 Mrd. $)",
        buyer: "KKR",
        target: "Gen II Fund Services (Fondsadministration)",
        sector: "Finanzdienstleistungen / Fund Administration",
        type: "Unternehmensübernahme (Vertrag unterzeichnet, Closing erwartet 2027)"
      },
      sources: [
        { title: "Hg Capital: KKR to Acquire Gen II Fund Services for More Than $5 Billion from Hg and General Atlantic", url: "https://hgcapital.com/insights/kkr-to-acquire-gen-ii-fund-services-for-more-than-5-billion-from-hg-and-general-atlantic" },
        { title: "Kirkland & Ellis: Kirkland Advises Gen II Fund Services on $5.1 Billion Sale to KKR", url: "https://www.kirkland.com/news/press-release/2026/10/kirkland-advises-gen-ii-fund-services-on-5-1-billion-sale-to-kkr" },
        { title: "Bloomberg: Informa to Buy Events Firm From Blackstone for $2.2 Billion", url: "https://www.bloomberg.com/news/articles/2026-10-06/informa-to-buy-events-firm-from-blackstone-for-2-2-billion" },
        { title: "GuruFocus: GFL Environmental stock rises amid takeover bids from private equity groups", url: "https://www.gurufocus.com/news/9107708/gfl-environmental-gfl-stock-rises-4-amid-takeover-bids-from-private-equity-groups" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "apollo-kkr-kfits-bathla-fitch-palmer-square-08-10", cats: ["credit", "pe"], when: "Apollo-Tagesbewertung seit 01.10.2026 · KKR-K-FITS-Rücknahmen 05.10. · Bathla-Insolvenz Ende August, Fortsetzung bis 01.10. · Fitch-Augustzahl 6,3 % unverändert",
      headline: "Apollo bewertet sein 850-Milliarden-Dollar-Kreditportfolio künftig täglich, australische Bathla-Insolvenz zieht rund 40 Fonds in Mitleidenschaft",
      sec30: "Apollo Global Management weitete die tägliche Preisbildung seit dem 01.10.2026 auf eine Reihe von Direct-Lending-, Asset-Backed-Finance-, Multi-Credit- und Opportunistic-Credit-Vehikeln aus – ein Schritt, der mit verstärkter Aufmerksamkeit der US-Börsenaufsicht SEC für die Bewertung privater Vermögenswerte zusammenfällt. KKRs nicht börsengehandelter Fonds K-FITS erhielt für das zum 29.09. endende Quartal Rücknahmeanträge über 5,06 % der Anteile – knapp über der 5-Prozent-Grenze – und erfüllte sie trotzdem vollständig. Die Insolvenz des australischen Bauträgers Bathla Group Ende August hinterließ rund 3,6 Mrd. Dollar Private-Credit-Engagement bei rund 40 Fonds; die australische Notenbank RBA sieht laut eigener Einschätzung kein systemisches Risiko. Fitch beziffert die US-Ausfallrate bei Private-Credit-Krediten für August weiterhin auf einen Rekordwert von 6,3 %. Goldman Sachs bleibt führender Bieter für den CLO-Manager Palmer Square, ein BlackRock/IFM-Konsortium bleibt in exklusiven Gesprächen über die Rechenzentren von Stack Infrastructure – in beiden Fällen weiterhin ohne Einigung.",
      blocks: [
        { h: "Was macht Apollo bei der Bewertung seines Kreditportfolios neu?", items: [
          { tag: "fakt", text: "Apollo weitete seine tägliche Preisbildung seit dem 01.10.2026 von bislang nur investment-grade-ähnlichen Produkten auf eine Reihe von Direct-Lending-, Asset-Backed-Finance-, Multi-Credit- und Opportunistic-Credit-Vehikeln aus; Asset-Level-Pricing für betroffene Fonds soll ab dem 30.10.2026 verfügbar sein.",
            ask: [{ label: "Was ist ein NAV?", ref: "t:nav" }] },
          { tag: "fakt", text: "Der Schritt fällt zusammen mit verstärkter Aufmerksamkeit der US-Börsenaufsicht SEC für die Bewertung privater Vermögenswerte; Apollo begründete ihn mit größerer Transparenz für eine wachsende Zahl von Anlegern im Private-Credit-Markt." }
        ]},
        { h: "Was zeigen die Rücknahmedaten bei KKR K-FITS?", items: [
          { tag: "fakt", text: "KKRs Fonds K-FITS erhielt für das zum 29.09.2026 endende Quartal Rücknahmeanträge über 5,06 % der Anteile – knapp über der 5-Prozent-Grenze, nach 3,43 % im Vorquartal – und erfüllte sie dennoch vollständig; das Fondsvermögen (NAV) liegt bei 996 Mio. Dollar. KKRs separater Fonds K-FIT verzeichnete dagegen mit 1,53 % geringere Rücknahmeanträge." }
        ]},
        { h: "Was ist bei der australischen Bathla-Insolvenz passiert?", items: [
          { tag: "fakt", text: "Der australische Bauträger Bathla Group ging Ende August 2026 nach eigenen Angaben wegen Liquiditätsmangel in die freiwillige Insolvenzverwaltung; rund 40 Private-Credit-Fonds (u. a. PAG, Balmain, Trilogy, Centuria Bass) sind mit insgesamt rund 3,6 Mrd. Dollar engagiert.",
            ask: [{ label: "Was passiert bei solchen Rücknahmesperren grundsätzlich?", ref: "e:redemption-limits" }] },
          { tag: "fakt", text: "Die australische Notenbank RBA erklärte, die Insolvenz habe das Anlegervertrauen in den Private-Credit-Markt gedämpft, sehe aber kein systemisches Risiko für den Gesamtmarkt." }
        ]},
        { h: "Wie entwickeln sich die Ausfallraten bei Private Credit insgesamt?", items: [
          { tag: "fakt", text: "Fitch beziffert die rollierende Zwölf-Monats-Ausfallrate bei US-Private-Credit-Krediten für August 2026 weiterhin auf einen Rekordwert von 6,3 %; eine aktuellere Septemberzahl lag zum Recherchezeitpunkt nicht vor.",
            ask: [{ label: "Wie hängen Zinsen und Kreditausfälle zusammen?", ref: "chain:rates-to-credit" }] }
        ]},
        { h: "Wie ist der Stand bei Palmer Square und Stack Infrastructure?", items: [
          { tag: "unbestaetigt", text: "Goldman Sachs gilt weiterhin als führender Bieter für den CLO-Manager Palmer Square Capital Management (rund 37 Mrd. Dollar verwaltetes Vermögen, davon rund 27 Mrd. Dollar CLO-Plattform); eine endgültige Vereinbarung liegt laut Berichten weiterhin nicht vor. Ein von BlackRock und IFM Investors angeführtes Konsortium bleibt ebenfalls ohne neue Entwicklung in exklusiven Gesprächen über die Rechenzentren von Stack Infrastructure." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Apollos Schritt zu täglicher Bewertung und die Bathla-Insolvenz zeigen anhaltende Transparenz- und Risikofragen im Private-Credit-Markt, während gleichzeitig hohe Rücknahmen bei K-FITS vollständig bedient wurden und milliardenschwere Übernahmegespräche bei Palmer Square und Stack Infrastructure weiterlaufen – ein insgesamt wachsender, aber uneinheitlicher Markt." }
        ]}
      ],
      reaction: "Die Entwicklungen bei Apollo, KKR und der Bathla-Insolvenz ergänzen die laufenden Übernahmegespräche bei Palmer Square und Stack Infrastructure sowie die hohe allgemeine Dealaktivität (Meldung 12) um die Risikoseite desselben Marktes.",
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
        { title: "Bloomberg: Apollo Debuts Daily Private Credit Marks as SEC Sounds Alarm", url: "https://www.bloomberg.com/news/articles/2026-10-01/apollo-debuts-daily-private-credit-marks-as-sec-urges-vigilance" },
        { title: "Alternative Credit Investor: Apollo rolls out daily pricing across $850bn credit business", url: "https://alternativecreditinvestor.com/2026/10/01/apollo-rolls-out-daily-pricing-across-850bn-credit-business/" },
        { title: "Bloomberg: KKR Private Credit Fund Exceeds 5% Redemption Cap to Fulfill Withdrawals", url: "https://www.bloomberg.com/news/articles/2026-10-05/kkr-private-credit-fund-exceeds-5-redemption-cap-to-fulfill-withdrawals" },
        { title: "MacroBusiness: Bathla's collapse an iceberg for private credit market", url: "https://www.macrobusiness.com.au/2026/10/bathlas-collapse-an-iceberg-for-private-credit-market/" },
        { title: "Private Equity Wire: Goldman Sachs emerges as lead bidder for $37bn credit manager Palmer Square", url: "https://www.privateequitywire.co.uk/goldman-sachs-emerges-as-lead-bidder-for-37bn-credit-manager-palmer-square/" }
      ]
    },

    /* 14 TECH/KI */
    {
      id: "intel-amd-terafab-broadcom-spacex-finanzierung-08-10", cats: ["tech"], when: "Intel/AMD-Preiserhöhungen laut Branchenberichten, offiziell unbestätigt · Musk-Dementi TSMC-Rolle 07.10. · Broadcom/Anthropic-Ausbau 02.10. · SpaceX-Finanzierungsgespräche 06./07.10.",
      headline: "Musk dementiert operative TSMC-Rolle bei „Terafab”, Broadcom und SpaceX suchen Milliarden-Finanzierungen für KI-Chips",
      sec30: "Branchenberichte auf Basis von Lieferketten-Quellen berichten weiterhin unbestätigt über eine rund zehnprozentige Preiserhöhung bei Intel-PC-Prozessoren zum 05.10. und bei AMD-Grafikkarten/-Chipsätzen ab dem vierten Quartal; eine offizielle, pauschale Bestätigung liegt nicht vor, Intel hatte frühere Preiserhöhungen bei einzelnen Modellen im Juli offiziell bestätigt. Elon Musk dementierte am 07.10. eine operative Rolle von TSMC bei seinem texanischen Chipfabrik-Projekt „Terafab”: „We will build and run the fab.” Broadcom baut laut Berichten eine rund 60 Mrd. Dollar schwere Finanzierung für seinen auf 3,5 Gigawatt erweiterten Anthropic-Chip-Deal auf; SpaceX sucht laut Berichten rund 40 Mrd. Dollar zur Finanzierung von Nvidia-Chip-Käufen. Nvidias eigene 500-Mrd.-Dollar-Finanzierungsinitiative stößt laut Berichten bei Banken auf Vorbehalte wegen der Werthaltigkeit der zugrunde liegenden Chips.",
      blocks: [
        { h: "Was wird zu den Preiserhöhungen bei Intel und AMD berichtet?", items: [
          { tag: "unbestaetigt", text: "Mehrere Branchenmedien berichten auf Basis von Lieferketten-Quellen, Intel habe seine PC-Prozessorpreise zum 05.10.2026 um rund 10 % erhöht; eine offizielle, pauschale Bestätigung durch Intel liegt weiterhin nicht vor. Intel hatte im Juli 2026 offiziell Preiserhöhungen bei einzelnen Modellen (u. a. Core Ultra 7 270K Plus von 299 auf 349 Dollar) mit gestiegenen Lieferkettenkosten und starker Nachfrage begründet." },
          { tag: "unbestaetigt", text: "Ähnliche, ebenfalls unbestätigte Berichte kursieren zu einer rund zehnprozentigen Preiserhöhung bei AMD-Grafikkarten, KI-Beschleunigern und Chipsätzen ab dem vierten Quartal 2026, begründet mit gestiegenen TSMC-Waferkosten." }
        ]},
        { h: "Was ist bei TSMC und „Terafab” neu?", items: [
          { tag: "fakt", text: "Elon Musk hatte zuvor Gespräche zwischen TSMC und seinem in Texas entstehenden Chipfabrik-Projekt „Terafab” (geplantes Investitionsvolumen rund 16,8 Mrd. Dollar) bestätigt. Am 07.10.2026 relativierte er die Rolle von TSMC deutlich per Mitteilung: „No, we will build and run the fab. Let there be ZERO doubt about that.” TSMC könne allenfalls einen Teil der Fabrik untervermieten.",
            ask: [{ label: "Wie hängt das mit KI-Investitionen insgesamt zusammen?", ref: "e:ai-capex" }] }
        ]},
        { h: "Welche neuen KI-Finanzierungstransaktionen gibt es?", items: [
          { tag: "fakt", text: "Broadcom erweiterte laut Berichten vom 02.10.2026 seinen Chip-Liefervertrag mit Anthropic auf 3,5 Gigawatt zusätzlicher Google-TPU-Kapazität ab 2027 (zusätzlich zu 1 Gigawatt ab 2026, Laufzeit bis 2031) und baut dafür eine Finanzierung von rund 60 Mrd. Dollar auf, unter anderem mit Beteiligung von Blackstone (rund 9 Mrd. Dollar)." },
          { tag: "unbestaetigt", text: "SpaceX befindet sich laut Berichten vom 06./07.10.2026 in Gesprächen über rund 40 Mrd. Dollar Fremdkapital (Bankkredite und Anleihen) zur Finanzierung einer Großbestellung von Nvidia-Chips; eine endgültige Vereinbarung lag nicht vor." },
          { tag: "unbestaetigt", text: "Nvidias im August angekündigte 500-Mrd.-Dollar-Finanzierungsinitiative für Kunden stößt laut Berichten bei Wall-Street-Banken auf Vorbehalte, weil diese die wirtschaftliche Nutzungsdauer der zugrunde liegenden Grafikprozessoren niedriger einschätzen als Nvidia selbst." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass gleich mehrere große Chip- und KI-Finanzierungsthemen gleichzeitig in der Schwebe bleiben – unbestätigte Preisrunden bei Intel und AMD, ein öffentliches Dementi bei „Terafab” und milliardenschwere, aber noch nicht abgeschlossene Finanzierungsgespräche bei Broadcom/Anthropic und SpaceX –, zeigt, wie viel in diesem schnell wachsenden Markt derzeit noch nicht vertraglich abgesichert ist." }
        ]}
      ],
      reaction: "Die Diskussion um Chip-Kosten und KI-Finanzierungsstrukturen ergänzt die Fragen zu Bewertungen und Fremdfinanzierung, die auch bei den Private-Credit-Themen eine Rolle spielen (Meldung 13).",
      terms: [],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing"],
      sources: [
        { title: "Bloomberg: Elon Musk Rules Out Potential TSMC Role in Terafab Operations", url: "https://www.bloomberg.com/news/articles/2026-10-07/elon-musk-rules-out-potential-tsmc-role-in-terafab-operations" },
        { title: "Tom's Hardware: Elon Musk confirms discussions with TSMC about Terafab chipmaking collaboration", url: "https://www.tomshardware.com/tech-industry/semiconductors/elon-musk-confirms-discussions-with-tsmc-about-terafab-chipmaking-collaboration-intel-is-the-only-other-named-partner-terafab-to-exclusively-supply-tesla-spacex-and-xai" },
        { title: "Bloomberg: Broadcom Starts Amassing $60 Billion to Fund Chips for Anthropic", url: "https://www.bloomberg.com/news/articles/2026-10-02/broadcom-starts-amassing-60-billion-to-fund-chips-for-anthropic" },
        { title: "Bloomberg via Tech Times: SpaceX Seeking to Raise $40 Billion to Buy Nvidia Chips", url: "https://www.bloomberg.com/news/articles/2026-10-06/spacex-seeking-to-raise-40-billion-to-buy-nvidia-chips-ft-says" },
        { title: "VideoCardz: Intel reportedly plans another 10% PC CPU price increase for October 5", url: "https://videocardz.com/newz/intel-reportedly-plans-another-10-pc-cpu-price-increase-for-october-5" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "gasspeicher-strategische-reserve-opec-oelpreis-08-10", cats: ["energy"], when: "Gasspeicher-Stand 06.10. (59,4 %) · Reiche-Ankündigung 07.10. · OPEC+-Quote seit 04.10. unverändert · Ölpreis Stand 07.10.",
      headline: "Deutsche Gasspeicher bei 59 Prozent, Wirtschaftsministerin Reiche kündigt strategische Gasreserve an",
      sec30: "Die deutschen Gasspeicher waren am 06.10.2026 zu rund 59,4 % gefüllt (147,0 von 247,4 Terawattstunden) – rund 19 Prozentpunkte unter dem Vorjahreswert zur gleichen Zeit. Bundeswirtschaftsministerin Katherina Reiche sieht trotz des niedrigen Füllstands keinen Gasmangel im kommenden Winter, kündigte aber am 07.10.2026 eine strategische Gasreserve von 24 Terawattstunden an, die angesichts anhaltender geopolitischer Risiken – insbesondere der Lage in der Straße von Hormus – zusätzliche Sicherheit schaffen soll; verfügbar sein soll sie aber erst im übernächsten Winter. OPEC+ hält die Förderquote für November seit dem 04.10. unverändert bei rund 31,01 Mio. Barrel pro Tag; Brent-Rohöl notierte am Mittwoch je nach Quelle zwischen rund 100 und 101 Dollar je Barrel.",
      blocks: [
        { h: "Wie ist der Stand bei den deutschen Gasspeichern?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher waren am 06.10.2026 zu rund 59,4 % gefüllt (147,0 von 247,4 Terawattstunden) – ein leichter Anstieg gegenüber rund 58,7 % am 05.10., aber rund 19 Prozentpunkte unter dem Vorjahreswert zur gleichen Zeit und weiterhin unter dem üblichen 80-Prozent-Zielwert zum 1. November.",
            ask: [{ label: "Welche Rolle spielen Gasspeicher für die Energieversorgung?", ref: "e:energy-germany" }] }
        ]},
        { h: "Was hat Wirtschaftsministerin Reiche angekündigt?", items: [
          { tag: "position", text: "Bundeswirtschaftsministerin Katherina Reiche erklärte am 07.10.2026, sie sehe trotz des Füllstands von 59 % keinen Gasmangel im kommenden Winter." },
          { tag: "fakt", text: "Reiche kündigte zugleich den Aufbau einer strategischen Gasreserve von rund 24 Terawattstunden an – als zusätzliche Absicherung neben den regulären Speichern. Als Grund nannte sie anhaltende geopolitische Risiken, insbesondere die Lage in der Straße von Hormus. Die Reserve soll aber erst im übernächsten Winter (2027/28) zur Verfügung stehen; Finanzierung und parlamentarisches Verfahren waren zum Recherchezeitpunkt noch nicht abschließend geklärt." }
        ]},
        { h: "Was hat die OPEC+ entschieden, und wie reagiert der Ölpreis?", items: [
          { tag: "fakt", text: "OPEC+ einigte sich am 04.10.2026 darauf, die Förderquote für November unverändert bei rund 31,01 Mio. Barrel pro Tag zu lassen.",
            ask: [{ label: "Wie ist der Gesamtkontext zur Lage am Golf?", ref: "s:9" }] },
          { tag: "unbestaetigt", text: "Brent-Rohöl notierte am Mittwoch je nach Quelle zwischen rund 100 und 101 Dollar je Barrel; mehrere Tanker-Zwischenfälle in der Straße von Hormus in der ersten Oktoberwoche stützten laut Berichten die Risikoprämie (Meldung 9).",
            ask: [{ label: "Wie wirkt sich der Ölpreis auf die Inflation aus?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Reiche trotz eines im Jahresvergleich niedrigen Speicherstands keinen akuten Gasmangel sieht, aber gleichzeitig eine erst mittelfristig verfügbare strategische Reserve ankündigt, zeigt zwei unterschiedliche Zeithorizonte der Risikovorsorge; die unveränderte OPEC+-Förderquote dämpft zusätzliche Preissprünge beim Öl, ohne die geopolitische Risikoprämie durch die Lage in der Straße von Hormus zu beseitigen (Meldung 9)." }
        ]}
      ],
      reaction: "Die Gasspeicher-Lage und die unveränderte OPEC+-Förderquote hängen mit der allgemeinen, durch die Lage in der Straße von Hormus getriebenen Risikoprämie bei Energie zusammen (Meldung 9).",
      terms: ["opec-plus", "ttf", "lng"],
      followups: ["e:energy-germany", "e:opec-plus-why", "e:oil-inflation", "e:hormuz"],
      sources: [
        { title: "onvista: Reiche sieht keinen Gasmangel in Deutschland im Winter", url: "https://www.onvista.de/news/2026/10-07-reiche-sieht-keinen-gasmangel-in-deutschland-im-winter-0-10-26561297" },
        { title: "leinetal24: Gasspeicher nur zu 59 Prozent gefüllt – Reiche kündigt strategische Reserve an", url: "https://www.leinetal24.de/wirtschaft/gasspeicher-deutschland-winter-nur-zu-59-prozent-gefuellt-reiche-kuendigt-strategische-reserve-an-zr-94528497.html" },
        { title: "gasspeicherkarte.de: Gasspeicher-Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" },
        { title: "World Oil: OPEC+ holds November oil production targets steady as supply remains constrained", url: "https://www.worldoil.com/news/2026/10/4/opec-holds-november-oil-production-targets-steady-as-supply-remains-constrained/" },
        { title: "CNBC: Rebounding oil exports through Strait of Hormuz are vulnerable to stepped-up Iranian tanker attacks", url: "https://www.cnbc.com/2026/10/06/crude-oil-tanker-strait-hormuz-iran-attack.html" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Am Mittwoch fielen S&P 500 (−0,22 %), Nasdaq (−0,22 %) und Dow Jones (−0,66 %) von ihren Dienstags-Rekordständen zurück; der DAX gab 1,35 % nach, der Euro Stoxx 50 legte dagegen 0,48 % zu." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Steigende US-Renditen auf einem 24-Jahres-Hoch, höhere Ölpreise und die Veröffentlichung des Fed-Sitzungsprotokolls gelten laut Marktbeobachtern als Hintergrund für die Kursverluste vom Mittwoch." },
    "yield-meaning": { tag: "unbestaetigt", story: 3, text: "Die US-10-Jahres-Rendite lag am Mittwoch je nach Quelle zwischen rund 5,28 % und 5,32 %, mit einem Intraday-Hoch von 5,36 % – dem höchsten Stand seit April 2002." },
    "yield-stocks": { tag: "einordnung", story: 1, text: "Dass Aktien am Mittwoch bei gleichzeitig stark gestiegenen US-Renditen nachgaben, passt eher zum klassischen Muster als die Kursgewinne vom Vortag." },
    "gold-why": { tag: "fakt", story: 5, text: "Gold gab am Mittwoch vor der Fed-Protokoll-Veröffentlichung nach, auf rund 4.087 bis 4.153 Dollar je Feinunze je nach Quelle." },
    "bitcoin-what": { tag: "unbestaetigt", story: 5, text: "Bitcoin fiel am Mittwoch von rund 85.550 auf teils rund 83.770 Dollar; Marktbeobachter nennen eine breitere Abkühlung der Risikobereitschaft als Hintergrund." },
    "eurusd-meaning": { tag: "fakt", story: 5, text: "Der Euro fiel laut EZB-Referenzkurs von 1,1269 (Dienstag) auf 1,1177 Dollar (Mittwoch)." },
    "inflation-what": { tag: "fakt", story: 4, text: "Die Eurozone-Inflation stieg im September laut Eurostat-Flash-Schätzung auf 3,8 % – den höchsten Stand seit drei Jahren." },
    "inflation-expectations": { tag: "unbestaetigt", story: 2, text: "Das am 07.10. veröffentlichte FOMC-Protokoll zeigt laut Berichten, dass eine Mehrheit der Fed-Mitglieder eine weitere Zinserhöhung bis Jahresende weiterhin für möglich hält." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Während die EZB mit einer auf 3,8 % gestiegenen Eurozone-Inflation konfrontiert ist, zeigt das Fed-Protokoll gleichzeitig keine klare Linie zur nächsten US-Zinsentscheidung." },
    "fed-hike": { tag: "unbestaetigt", story: 2, text: "Das FOMC-Protokoll vom 16.09. hält laut Berichten eine weitere Zinserhöhung bis Jahresende für möglich; eine Oktober-Pause gilt bei UBS weiterhin als Basisszenario." },
    "ecb-hike": { tag: "fakt", story: 4, text: "Die nächste EZB-Zinsentscheidung fällt am 28./29.10.2026." },
    "oil-inflation": { tag: "einordnung", story: 15, text: "Brent-Rohöl notierte am Mittwoch je nach Quelle zwischen rund 100 und 101 Dollar je Barrel und gilt weiterhin als Belastungsfaktor für Sprit-, Heiz- und Transportkosten." },
    "debt-brake": { tag: "unbestaetigt", story: 3, text: "Die Bund-Rendite blieb am Mittwoch mit rund 3,48 % stabil, während die Rendite französischer Staatsanleihen den europäischen Anleihemarkt zusätzlich belastete." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Bundeshaushalt 2027 läuft unabhängig vom Koalitionsausschuss nach festem Zeitplan bis zur Schlussabstimmung am 27.11.2026." },
    "rente-basics": { tag: "unbestaetigt", story: 6, text: "Als Kompromiss bei der abschlagsfreien Rente nach 45 Beitragsjahren werden laut Berichten 46 oder 47 Beitragsjahre mit Härtefallregelung diskutiert; eine finale Entscheidung lag zum Recherchezeitpunkt nicht vor." },
    "landtagswahl-why": { tag: "fakt", story: 7, text: "Die dritte Berliner Vorgesprächsrunde zwischen Linke, Grüne und SPD fand am 07.10. statt – exakt am dritten Jahrestag des Hamas-Terroranschlags." },
    "coalition-majority": { tag: "unbestaetigt", story: 7, text: "Grüne und SPD hielten an einer gemeinsamen Linie zum Umgang mit Antisemitismus als Vorbedingung für formelle Sondierungen fest; ein Mechanismus mit möglichem Fraktionsausschluss bei Verstößen wurde berichtet, aber zum Recherchezeitpunkt nicht offiziell bestätigt." },
    "hormuz": { tag: "fakt", story: 9, text: "In der ersten Oktoberwoche wurden mindestens sieben Tanker-Zwischenfälle in der Straße von Hormus gemeldet, zuletzt am 07.10. vor Oman." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 9, text: "Irans Außenminister Araghchi soll laut Berichten einen Waffenstillstand samt Wiedereröffnung der Straße von Hormus nach sieben Tagen angeboten haben; die USA lehnten das Angebot laut Berichten als unzureichend ab." },
    "defence-order": { tag: "fakt", story: 10, text: "Hensoldt unterzeichnete am 05.10. eine Absichtserklärung mit der Ukraine über weitere Radarlieferungen, ohne genannte Stückzahlen oder Werte." },
    "defence-stocks": { tag: "unbestaetigt", story: 10, text: "Rheinmetall, Renk und Hensoldt gaben am Mittwoch trotz neuer Vereinbarungen allesamt nach." },
    "nato-target": { tag: "fakt", story: 11, text: "TKMS bleibt seit Juli ohne unterzeichneten Hauptvertrag Vorzugsbieter für das kanadische U-Boot-Programm; Japan prüft seit dem 02.10. erneut eine Patriot-Weitergabe an die Ukraine." },
    "ma-steps": { tag: "fakt", story: 12, text: "KKR vereinbarte am 06.10. die Übernahme von Gen II Fund Services für über 5 Mrd. Dollar; Informa kauft Clarion Events von Blackstone für rund 2,24 Mrd. Pfund." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental konkurrieren weiterhin zwei Konsortien ohne Einigung; der nächste Termin ist die Q3-Telefonkonferenz am 29.10." },
    "deal-risks": { tag: "fakt", story: 13, text: "Apollo bewertet sein 850-Mrd.-Dollar-Kreditportfolio seit dem 01.10. auf wachsende Teile täglich – auch als Reaktion auf verstärkte SEC-Aufmerksamkeit für die Bewertung privater Vermögenswerte." },
    "private-credit-what": { tag: "unbestaetigt", story: 13, text: "Goldman Sachs bleibt führender Bieter für den CLO-Manager Palmer Square (≈ 37 Mrd. $ AUM); eine endgültige Vereinbarung liegt weiterhin nicht vor." },
    "pc-rates": { tag: "fakt", story: 13, text: "Die US-Ausfallrate im Private-Credit-Markt lag laut Fitch im August 2026 unverändert bei einem Rekordwert von 6,3 %." },
    "nonaccrual-default": { tag: "fakt", story: 13, text: "Die Insolvenz der australischen Bathla Group (Ende August) lässt rund 40 Private-Credit-Fonds auf einem Engagement von rund 3,6 Mrd. Dollar sitzen." },
    "redemption-limits": { tag: "fakt", story: 13, text: "KKRs Fonds K-FITS erhielt Rücknahmeanträge über 5,06 % der Anteile – knapp über der 5-Prozent-Grenze – und erfüllte sie trotzdem vollständig." },
    "ai-capex": { tag: "unbestaetigt", story: 14, text: "Berichte zu Preiserhöhungen von rund 10 % bei Intel und AMD bleiben teilweise unbestätigt; Intel hatte frühere Erhöhungen bei einzelnen Modellen im Juli offiziell bestätigt." },
    "custom-chips": { tag: "fakt", story: 14, text: "Elon Musk dementierte am 07.10. eine operative Rolle von TSMC bei seinem Terafab-Projekt: „We will build and run the fab.”" },
    "circular-financing": { tag: "fakt", story: 14, text: "Broadcom baut laut Berichten eine 60-Mrd.-Dollar-Finanzierung für seinen erweiterten Anthropic-Chip-Deal auf; SpaceX sucht laut Berichten rund 40 Mrd. Dollar zur Finanzierung von Nvidia-Chip-Käufen." },
    "energy-germany": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen am 06.10. bei rund 59,4 %; Wirtschaftsministerin Reiche kündigte am 07.10. eine strategische Gasreserve von 24 Terawattstunden an, die aber erst im übernächsten Winter verfügbar sein soll." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ hält die Förderquote für November seit dem 04.10. unverändert bei rund 31,01 Mio. Barrel pro Tag." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 3,
      q: "Welchen historischen Stand erreichte die Rendite zehnjähriger US-Staatsanleihen am Mittwoch, 07.10.2026, laut mehreren Quellen zeitweise?",
      options: [
        "Den niedrigsten Stand seit 2015",
        "Exakt 0 Prozent",
        "Den höchsten Stand seit April 2002 (ein 24-Jahres-Hoch)",
        "Den höchsten Stand aller Zeiten"
      ],
      answer: 2,
      explain: "Die US-10-Jahres-Rendite erreichte am Mittwoch laut mehreren Quellen intraday bis zu 5,36 % – den höchsten Stand seit April 2002 – und schloss je nach Quelle zwischen 5,28 und 5,32 %."
    },
    {
      topic: "Wirtschaft", type: "Zusammenhang", story: 2,
      q: "Angenommen, der US-Arbeitsmarkt würde sich in den kommenden Wochen weiter deutlich abschwächen, während das Fed-Protokoll gleichzeitig eine weitere Zinserhöhung offenhält. Was wird dadurch unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Die Fed müsste automatisch sofort eine Zinssenkung beschließen",
        "Die Wahrscheinlichkeit einer Zinspause im Oktober würde eher zunehmen, ein fester Automatismus besteht aber nicht",
        "Der Euro würde automatisch zur Weltreservewährung",
        "Die EZB müsste ihren Leitzins zwingend anheben"
      ],
      answer: 1,
      explain: "Ein schwächerer Arbeitsmarkt spricht grundsätzlich eher für eine vorsichtigere Geldpolitik, während das FOMC-Protokoll eine weitere Erhöhung bis Jahresende weiterhin offenhält – ein Automatismus bei der Fed-Entscheidung besteht dadurch aber nicht."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 6,
      q: "Was war das unmittelbare Ergebnis des Koalitionsausschusses von Union und SPD am Abend des 07.10.2026?",
      options: [
        "Ein vollständiges, auf einer Pressekonferenz verkündetes Rentenreform-Gesetz",
        "Der Austritt der SPD aus der Koalition",
        "Eine sofortige Neuwahl des Bundestags",
        "Die Sitzung endete nach rund vier Stunden ohne öffentlich verkündete inhaltliche Beschlüsse; Ergebnisse sollten schriftlich folgen"
      ],
      answer: 3,
      explain: "Der Koalitionsausschuss tagte rund vier Stunden ohne Nachtsitzung und ohne Pressekonferenz; konkrete inhaltliche Beschlüsse wurden am Abend nicht verkündet, die Koalitionsspitzen kündigten eine schriftliche Stellungnahme für den Donnerstagmorgen an."
    },
    {
      topic: "International", type: "Fakt", story: 8,
      q: "Wie viele Menschen wurden laut Berichten bei dem russischen Großangriff auf die Ukraine am 07.10.2026 mindestens getötet?",
      options: [
        "Niemand, es gab keine Opfer",
        "Über 10.000 Menschen",
        "Mindestens 20 Menschen, darunter Kinder",
        "Genau 1.000 Menschen"
      ],
      answer: 2,
      explain: "Bei dem Großangriff mit Drohnen, Marschflugkörpern und ballistischen Raketen wurden nach ukrainischen Angaben mindestens 20 bis 21 Zivilisten getötet, darunter vier Kinder; am stärksten betroffen war die Stadt Pryluky."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 15,
      q: "Angenommen, die Spannungen in der Straße von Hormus würden sich in den kommenden Wochen weiter verschärfen. Was wird unter sonst gleichen Bedingungen am ehesten wahrscheinlicher?",
      options: [
        "Der Ölpreis und damit die Risikoprämie für Energie würden eher steigen, ein fester Automatismus für einzelne Preise besteht aber nicht",
        "Der deutsche Gasspeicher-Füllstand würde sich dadurch automatisch verdoppeln",
        "Die OPEC+ müsste ihre Förderquote gesetzlich auf null senken",
        "Der Euro würde automatisch gegenüber dem Dollar aufwerten"
      ],
      answer: 0,
      explain: "Eine weitere Zuspitzung in der Straße von Hormus würde nach Einschätzung von Marktbeobachtern tendenziell die Risikoprämie und damit den Ölpreis erhöhen; ein fester Automatismus für andere Kennzahlen wie Gasspeicher-Füllstand, Förderquote oder Euro-Kurs besteht dadurch nicht."
    }
  ]
};
