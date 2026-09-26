// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-26",
  dateLabel: "Samstag, 26. September 2026",
  updatedLabel: "Recherchestand 26.09.2026",
  marketNote: "Diese Ausgabe erscheint am Samstagmorgen, wenn die Börsen geschlossen sind. Die europäischen und US-Zahlen zeigen daher den Handelsschluss vom Freitag, 25.09.2026 (Xetra 17:30 Uhr bzw. US-Handelsschluss). Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Freitagvormittag (US-Ostküstenzeit). Auch am Freitag kursierten für mehrere Kennzahlen abweichende Werte: Beim DAX-Schlussstand unterscheiden sich Quellen zwischen 25.396 und 25.409 Punkten, bei der Bund-Rendite zwischen rund 3,58 % und 3,62 %, und beim Brent-Ölpreis reicht die Bandbreite der Berichte weiterhin von rund 99 bis 108 Dollar je Barrel. Werte mit „≈” stammen aus Marktberichten und können je nach Quelle und Erhebungszeitpunkt abweichen.",

  top: [
    { text: "Der DAX beendete die Woche am Freitag mit einem Plus von rund 0,4 % und stoppte damit eine dreiwöchige Verlustserie; auch Euro Stoxx 50, S&P 500, Dow und Nasdaq schlossen im Plus. Die US-Rendite blieb dabei nahe ihrem höchsten Stand seit 2007/2008 (rund 5,17 %), gestützt von anhaltenden Inflationssorgen.", ref: "s:1" },
    { text: "Iran übermittelte über Katar einen Sieben-Tage-Fahrplan zur Beendigung des seit Ende Februar laufenden Kriegs mit den USA und Israel, der am sechsten Tag eine Wiedereröffnung der Straße von Hormus vorsieht. Die USA und Iran erkunden laut Bloomberg zugleich einen gestaffelten Deal zur Öffnung der Meerenge, während Huthi-Rebellen weiter Ziele in Saudi-Arabien angreifen und der Ölpreis entsprechend schwankt (Berichte: rund 99 bis 108 Dollar je Barrel Brent).", ref: "s:7" },
    { text: "Die Konsumentenstimmung fiel sowohl in Deutschland (GfK/NIM-Index: −30,6 Punkte) als auch in den USA (University of Michigan: 48,1 Punkte, 4-Monats-Tief) deutlich – beide Institute nennen hohe Öl- und Spritpreise infolge der Nahost-Lage als wichtigen Faktor.", ref: "s:4" },
    { text: "In Berlin stimmten die Delegierten der Linken auf einem Sonderparteitag mit deutlicher Mehrheit dafür, SPD und Grüne zu Sondierungsgesprächen für eine Landesregierung einzuladen. Während die Grünen grundsätzliche Gesprächsbereitschaft zeigten, forderten mehr als 60 Berliner Sozialdemokraten, darunter frühere Regierende Bürgermeister, einen Stopp der Gespräche mit der Linken.", ref: "s:5" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 25.400", change: "≈ +0,5 %", dir: "up", asof: "Schluss Fr 25.09.", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Plus heißt, die 40 Firmen wurden zusammen höher bewertet als am Vortag.",
      compare: [
        { label: "Widersprüchliche Angaben", text: "Für den Freitagsschluss nennen Quellen unterschiedliche Werte: 25.396,22 Punkte (+0,51 %) laut einer Quelle, 25.408,64 Punkte (+0,56 %) laut einer anderen – beide bezogen auf einen Donnerstagsschluss von 25.266,53 Punkten." },
        { label: "Wochenbilanz", text: "Der DAX beendete die Woche laut Berichten mit einem Plus von rund 0,4 % und stoppte damit eine dreiwöchige Verlustserie." }
      ],
      moved: {
        intro: "Marktbeobachter nennen für Freitag vor allem:",
        items: [
          "Leicht nachgebende Ölpreise nach Berichten über mögliche Fortschritte bei der Wiedereröffnung der Straße von Hormus stützten die Stimmung (Meldung 7).",
          "Analyst Andreas Lipkow (CMC Markets) verwies laut Bericht zugleich auf anhaltende Vorsicht wegen hoher Finanzierungskosten durch die gestiegenen Anleiherenditen.",
          "Bankenwerte wie Commerzbank und Deutsche Bank gehörten zu den Gewinnern, während BASF nach Kurszielsenkungen deutlich verlor."
        ]
      },
      important: [
        { area: "Öl", text: "Nachlassende Ölpreise stützten die Stimmung am Freitag.", ref: "e:oil-stocks" },
        { area: "Zinsen", text: "Die Anleiherenditen blieben auf mehrjährigen Hochs.", ref: "s:2" }
      ],
      source: { title: "onvista: Verlustserie beendet – Dax erzielt kleines Wochenplus", url: "https://www.onvista.de/news/2026/09-25-verlustserie-beendet-dax-erzielt-kleines-wochenplus-41121301-19-26557594" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.302,82", change: "+0,48 %", dir: "up", asof: "Schluss Fr 25.09.", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Ein Plus heißt: Diese Unternehmen wurden zusammen höher bewertet als am Vortag, mit teils großen Unterschieden zwischen einzelnen Aktien.",
      compare: [
        { label: "Gewinner", text: "UBS +3,2 % (Spekulationen über eine Kooperation mit einer ausländischen Bank sowie ein gewonnener Rechtsstreit im Zusammenhang mit der Credit-Suisse-Übernahme in Australien); Bankenwerte insgesamt stärkster Sektor." },
        { label: "Verlierer", text: "Ölwerte gaben mit den fallenden Ölpreisen nach, Airbus −1 % (Berichte über Qualitätsprobleme an der A321neo-Rumpfverstärkung), EssilorLuxottica −0,6 % (Kurszielsenkungen von Goldman Sachs und Bernstein)." },
        { label: "Jahresverlauf", text: "Seit Jahresbeginn 2026 liegt der Index laut Bericht mit +7,70 % im Plus." }
      ],
      moved: {
        intro: "Berichte nennen für Freitag:",
        items: [
          "Moderate Erholung zum Wochenschluss, gestützt von Bankenwerten.",
          "Nachlassende Ölpreise entlasteten energieintensive Sektoren, belasteten aber Ölkonzerne selbst.",
          "Analyst Andreas Lipkow warnte zugleich vor anhaltend hohen Energiepreisen als Inflationsrisiko."
        ]
      },
      important: [
        { area: "Zinsen", text: "Steigende US- und Bund-Renditen wirken weiter auf europäische Aktien.", ref: "e:yield-stocks" }
      ],
      source: { title: "onvista: ROUNDUP Aktien Europa Schluss – Aufatmen zum Wochenende", url: "https://www.onvista.de/news/2026/09-25-roundup-aktien-europa-schluss-aufatmen-zum-wochenende-0-10-26557627" }
    },
    "sp500": {
      label: "S&P 500", value: "7.743,41", change: "+0,51 % (+39,28 Pkt.)", dir: "up", asof: "Schluss Fr 25.09.", story: 1,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. Ein Plus von 0,51 % heißt: Diese Firmen wurden zusammen rund 0,51 % höher bewertet als am Vortag.",
      compare: [
        { label: "Dow Jones", text: "+0,93 % (+478,64 Punkte) auf 51.828,62 – beendete eine dreitägige Verluststrähne." },
        { label: "Nasdaq", text: "+0,48 % (+129,34 Punkte) auf 27.068,72 Punkte." },
        { label: "Wochenbilanz", text: "Alle drei US-Indizes verzeichneten laut Berichten einen Wochengewinn, obwohl die Anleiherendite zeitweise auf den höchsten Stand seit 2008 gestiegen war." }
      ],
      moved: {
        intro: "Berichte nennen für Freitag:",
        items: [
          "Ölpreise gaben nach Berichten über einen möglichen gestaffelten Deal zur Wiedereröffnung der Straße von Hormus zwischen den USA und Iran nach.",
          "Das Trump-Xi-Treffen deutete auf einen vorerst stabilen Handelsstatus zwischen den USA und China hin.",
          "Gegenläufig meldete die University of Michigan ein 4-Monats-Tief beim Verbrauchervertrauen wegen hoher Benzinpreise und Zollsorgen (Meldung 4)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die US-Rendite blieb nahe ihrem mehrjährigen Hoch.", ref: "n:ust10" }
      ],
      source: { title: "Yahoo Finance: Stock market today – Friday, September 25", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-25-dow-sp-500-nasdaq-081738529.html" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "27.068,72", change: "+0,48 % (+129,34 Pkt.)", dir: "up", asof: "Schluss Fr 25.09.", story: 1,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Am Freitag legte sie trotz hoher Anleiherenditen leicht zu.",
      compare: [
        { label: "Woche", text: "Die Nasdaq verzeichnete trotz zwischenzeitlicher Verluste am Donnerstag einen Wochengewinn." },
        { label: "Chipwerte", text: "Chipwerte profitierten laut Berichten von Meldungen über Kapazitätsengpässe bei TSMC, die Nvidia, AMD und Broadcom zugutekommen könnten (Meldung 14)." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Nachlassende Ölpreise und Hoffnung auf eine Entspannung am Golf stützten risikofreudigere Anlagen.",
          "TSMC signalisierte Kapazitätsengpässe bei fortschrittlichen KI-Chips, was Chipwerte stützte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum reagiert die Nasdaq besonders empfindlich auf steigende Zinsen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "CNBC: Stock market news for Sept. 25, 2026", url: "https://www.cnbc.com/2026/09/24/stock-market-today-live-updates.html" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,140", change: "≈ +0,36 %", dir: "up", asof: "Fr 25.09.", story: 2,
      means: "1 Euro kostet etwa 1,140 US-Dollar. Steigt der Kurs, wird der Euro im Verhältnis zum Dollar etwas stärker.",
      compare: [
        { label: "Referenzkurs", text: "Die EZB nannte für Freitag einen Referenzkurs von 1,1403 Dollar je Euro, der Handelskurs lag bei rund 1,1401." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Der Euro legte gegenüber dem Dollar leicht zu; die gesichteten Quellen nannten dafür keinen expliziten Einzelauslöser."
        ]
      },
      important: [
        { area: "Zinsen", text: "Die Zinsdifferenz zwischen den USA und dem Euroraum bleibt im Fokus.", ref: "s:2" }
      ],
      source: { title: "onvista: Devisen – Eurokurs hält leichten Vorsprung zum US-Dollar", url: "https://www.onvista.de/news/2026/09-25-devisen-eurokurs-haelt-leichten-vorsprung-zum-us-dollar-0-10-26557645" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,17 %", change: "kaum verändert, nahe dem höchsten Stand seit 2007/2008", dir: "flat", asof: "Fr 25.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,17 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5,17 % Zinsen pro Jahr.",
      compare: [
        { label: "Wochenhoch", text: "Im Wochenverlauf erreichte die Rendite laut mehreren Berichten zeitweise ein Tageshoch von rund 5,18 % – nach Quellenangaben der höchste Stand seit 2007 bzw. seit der Finanzkrise 2008." },
        { label: "CNBC-Einordnung", text: "CNBC beschrieb die Bewegung zum Wochenschluss als „little changed to end a volatile week”." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Anhaltende Inflationssorgen nach den starken US-Konjunkturdaten der Vortage hielten die Rendite auf hohem Niveau.",
          "Die finale September-Erhebung der University of Michigan zeigte gestiegene Inflationserwartungen der Verbraucher (1-Jahres-Erwartung: 4,6 %, stärkster Anstieg seit Juni), was Zinssorgen zusätzlich nährte (Meldung 4)."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren weiterhin mit Aktien.", ref: "e:yield-stocks" },
        { area: "Private Credit", text: "Variable Zinsen bleiben erhöht.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Das Zinsniveau stützt tendenziell den Dollar.", ref: "e:eurusd-meaning" }
      ],
      source: { title: "CNBC: 10-year Treasury yield little changed to end a volatile week", url: "https://www.cnbc.com/2026/09/25/treasury-yields-bonds-debt.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,62 %", change: "weiter gestiegen", dir: "up", asof: "Fr 25.09.", story: 2, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. Rund 3,6 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,6 % pro Jahr.",
      compare: [
        { label: "Widersprüchliche Angaben", text: "Eine Quelle nennt für Freitag 3,62 % (weiter steigend), eine andere Quellenzusammenfassung 3,58 %. Übereinstimmend ist die Richtung: weiterhin erhöht gegenüber der Vorwoche (rund 3,44 % am Dienstag zuvor)." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Die Bund-Rendite setzte ihren Anstieg der Vortage im Sog der hohen US-Rendite fort.",
          "Zunehmende Erwartungen an weitere geldpolitische Straffung beiderseits des Atlantiks sowie anhaltend hohe Energiepreise wurden als Hintergrund genannt."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen verteuern neue Bundesschulden, relevant für den Haushalt 2027.", ref: "e:debt-brake" }
      ],
      source: { title: "onvista: Deutsche Anleihen geben weiter nach", url: "https://www.onvista.de/news/2026/09-25-deutsche-anleihen-geben-weiter-nach-0-10-26557598" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.278 $", change: "kaum verändert", dir: "flat", asof: "Fr 25.09.", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.278 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Abweichende Angaben", text: "Quellen nennen für Freitag Werte zwischen rund 4.275 $ und 4.281 $ je nach Handelsplatz und Tageszeit – nahe dem Niveau der Vorwoche." }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Gold bewegte sich nahe seinem hohen Niveau der Vorwoche, deutlich unter dem Ende Januar 2026 erreichten Rekordhoch von rund 5.417 $.",
          "Geopolitische Spannungen im Nahen Osten stützten Gold tendenziell als sicheren Hafen, während die hohen Zinsen gegenläufig wirkten."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinserwartungen machen zinslose Anlagen wie Gold tendenziell weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "gold.de: Goldpreis aktuell", url: "https://www.gold.de/kurse/goldpreis/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 104 $", change: "stark schwankend, Berichte nennen zwischen ≈ 99 und 108 $", dir: "down", asof: "Fr 25.09.", story: 7, whyRef: "e:hormuz",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 104 Dollar je Fass (159 Liter) sind rund 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "Ungewöhnlich große Bandbreite", text: "Für den Freitagsschluss nennen Quellen sehr unterschiedliche Werte: rund 104–106 $ laut mehreren Marktberichten, eine Quelle nennt einen Rückgang auf rund 98,76 $, eine andere rund 102,75 $. Die Bandbreite lässt sich aus den gesichteten Quellen nicht auf einen einzelnen Wert eingrenzen." }
      ],
      moved: {
        intro: "Berichte nennen für Freitag:",
        items: [
          "Die USA und Iran erkunden laut Bloomberg einen „gestaffelten Deal” (phased deal) zur Wiedereröffnung der Straße von Hormus gegen eine Lockerung der US-Seeblockade iranischer Häfen – das drückte den Ölpreis zeitweise.",
          "Gleichzeitig griffen Huthi-Rebellen am Donnerstag erneut mit ballistischen Raketen Ziele nahe Taif und Yanbu in Saudi-Arabien an, die von der saudischen Luftabwehr abgefangen wurden – das trieb den Preis zeitweise wieder nach oben."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Verbraucherstimmung", text: "Hohe Ölpreise gehören zu den genannten Gründen für die gesunkene Konsumentenstimmung in Deutschland und den USA.", ref: "s:4" }
      ],
      source: { title: "Bloomberg: US, Iran Said to Be Exploring Phased Deal to Open Hormuz", url: "https://www.bloomberg.com/news/articles/2026-09-24/us-iran-said-to-be-exploring-phased-deal-to-open-hormuz" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 84.400 $", change: "≈ +0,5 %, Woche ≈ +10 %", dir: "up", asof: "Fr 25.09., Vormittag ET", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 84.400 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Tagesverlauf", text: "Eröffnung bei rund 84.378 $, zeitweise (7:14 Uhr ET) bis 85.200 $, gegen 9 Uhr ET rund 84.413 $ – Angaben schwanken je nach Zeitpunkt und Handelsplatz. Der Vortagesschluss wird je nach Quelle mit rund 83.650 bis 83.940 $ angegeben." },
        { label: "Wochenperformance", text: "Bitcoin und Ethereum verzeichneten laut Berichten eine gemeinsame Wochenperformance von rund +10 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Fundstrat-Analyst Sean Farrell bezeichnete den Kursanstieg laut Bericht sinngemäß als glaubwürdig und sah die Krypto-Flaute der vergangenen Monate als beendet an (Einzeleinschätzung, kein Marktkonsens).",
          "Ein Hedgefonds-Manager nannte laut Bericht ein langfristiges Kursziel von rund 250.000 $ – ebenfalls eine Einzelmeinung."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin, Sept. 25, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-25-2026/" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 FREITAG-MARKTBERICHT */
    {
      id: "freitag-maerkte", cats: ["markets"], when: "Fr 25.09. Handelsschluss · Wochenrückblick",
      headline: "DAX und Wall Street beenden volatile Woche mit Gewinnen, Ölpreis-Rückgang stützt Stimmung",
      sec30: "Der DAX gewann am Freitag rund 0,5 % (Quellen: 25.396–25.409 Punkte) und beendete damit eine dreiwöchige Verlustserie, der Euro Stoxx 50 legte 0,48 % zu. In den USA stiegen S&P 500 (+0,51 %), Nasdaq (+0,48 %) und Dow Jones (+0,93 %) trotz einer weiterhin nahe ihrem mehrjährigen Hoch liegenden Anleiherendite. Nachlassende Ölpreise nach Berichten über mögliche Fortschritte bei der Straße von Hormus stützten die Stimmung.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "unbestaetigt", text: "Der DAX schloss am Freitag laut unterschiedlichen Quellen bei 25.396,22 Punkten (+0,51 %) bzw. 25.408,64 Punkten (+0,56 %), jeweils bezogen auf den Donnerstagsschluss von 25.266,53 Punkten. Der Index beendete damit eine dreiwöchige Verlustserie und die Woche insgesamt mit einem Plus von rund 0,4 %.",
            ask: [{ label: "Was bedeutet ein Plus beim DAX?", ref: "n:dax" }] },
          { tag: "fakt", text: "Der Euro Stoxx 50 stieg um 0,48 % auf 6.302,82 Punkte, in den USA schlossen S&P 500 bei 7.743,41 Punkten (+0,51 %), Dow Jones bei 51.828,62 Punkten (+0,93 %) und Nasdaq bei 27.068,72 Punkten (+0,48 %).",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }] }
        ]},
        { h: "Was trieb die Kurse einzelner Aktien?", items: [
          { tag: "fakt", text: "Im DAX gehörten Commerzbank (+2,73 %), Deutsche Bank (+2,68 %) und adidas (+2,99 %) zu den Gewinnern, während BASF (rund −3,6 bis −3,8 %) zu den größten Verlierern zählte. Im Euro Stoxx 50 war UBS mit +3,2 % auffällig, gestützt von Spekulationen über eine Kooperation mit einer ausländischen Bank sowie einem gewonnenen Rechtsstreit im Zusammenhang mit der Credit-Suisse-Übernahme in Australien." },
          { tag: "position", text: "Marktbeobachter nennen bei Airbus (−1 %) Berichte über Qualitätsprobleme an der Rumpfverstärkung des A321neo als Belastungsfaktor, bei EssilorLuxottica (−0,6 %) Kurszielsenkungen von Goldman Sachs und Bernstein." }
        ]},
        { h: "Was bewegte die Märkte insgesamt?", items: [
          { tag: "position", text: "Analyst Andreas Lipkow (CMC Markets) verwies laut Bericht auf nachlassende Ölpreise als stützenden Faktor, mahnte aber weiter zu Vorsicht wegen hoher Finanzierungskosten durch gestiegene Anleiherenditen und anhaltend hoher Energiepreise.",
            ask: [{ label: "Warum belasten hohe Renditen Aktien?", ref: "e:yield-stocks" }] },
          { tag: "fakt", text: "In den USA nannten Berichte als Hintergrund Hoffnungen auf einen gestaffelten Deal zur Wiedereröffnung der Straße von Hormus (Meldung 7) sowie ein Trump-Xi-Treffen, das auf einen vorerst stabilen Handelsstatus zwischen den USA und China hindeutete (Meldung 9).",
            ask: [{ label: "Was ist bei der Straße von Hormus los?", ref: "s:7" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Trotz einer Woche mit Rekordrenditen bei US-Staatsanleihen und schwankenden Ölpreisen beendeten die wichtigsten Aktienindizes die Woche im Plus. Das zeigt, dass einzelne Belastungsfaktoren nicht automatisch zu fallenden Kursen führen müssen, wenn andere Entwicklungen gegenläufig wirken. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die zeitgleich gesunkene Verbraucherstimmung in Deutschland und den USA (Meldung 4) zeigt, dass die hohen Energiepreise trotz der Erholung an den Aktienmärkten spürbare Spuren hinterlassen.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:yield-stocks", "e:oil-stocks", "e:why-markets-move"],
      sources: [
        { title: "onvista: Verlustserie beendet – Dax erzielt kleines Wochenplus", url: "https://www.onvista.de/news/2026/09-25-verlustserie-beendet-dax-erzielt-kleines-wochenplus-41121301-19-26557594" },
        { title: "onvista: ROUNDUP Aktien Europa Schluss – Aufatmen zum Wochenende", url: "https://www.onvista.de/news/2026/09-25-roundup-aktien-europa-schluss-aufatmen-zum-wochenende-0-10-26557627" },
        { title: "Yahoo Finance: Stock market today – Friday, September 25", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-25-dow-sp-500-nasdaq-081738529.html" },
        { title: "CNBC: Stock market news for Sept. 25, 2026", url: "https://www.cnbc.com/2026/09/24/stock-market-today-live-updates.html" }
      ]
    },

    /* 2 RENDITEN */
    {
      id: "renditen-wochenschluss", cats: ["markets", "economy"], when: "Fr 25.09. Wochenschluss Anleihemärkte",
      headline: "US-Rendite bleibt nahe mehrjährigem Hoch, Bund-Rendite zieht weiter an",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen blieb am Freitag laut CNBC „little changed” bei rund 5,17 %, nachdem sie im Wochenverlauf zeitweise auf rund 5,18 % gestiegen war – nach Quellenangaben der höchste Stand seit 2007/2008. Die deutsche Bund-Rendite zog laut Berichten weiter auf rund 3,62 % an. Hintergrund bleiben anhaltende Inflationssorgen und gestiegene Inflationserwartungen der US-Verbraucher.",
      blocks: [
        { h: "Wie haben sich die Renditen entwickelt?", items: [
          { tag: "unbestaetigt", text: "Die US-10-Jahres-Rendite lag am Freitag laut Trading Economics bei rund 5,17 %, nachdem im Wochenverlauf laut mehreren Berichten ein Tageshoch von rund 5,18 % erreicht wurde. CNBC beschrieb die Bewegung zum Wochenschluss als „little changed to end a volatile week”.",
            ask: [{ label: "Was bedeutet eine Rendite von rund 5 %?", ref: "n:ust10" }] },
          { tag: "unbestaetigt", text: "Für die deutsche Bund-Rendite nennen Quellen für Freitag unterschiedliche Werte zwischen rund 3,58 % und 3,62 % – übereinstimmend ist die Richtung: weiterhin erhöht gegenüber der Vorwoche (rund 3,44 % am Dienstag zuvor).",
            ask: [{ label: "Was bedeutet das für den Bundeshaushalt?", ref: "e:debt-brake" }] }
        ]},
        { h: "Was nährt die Zinssorgen?", items: [
          { tag: "fakt", text: "Die finale September-Erhebung der University of Michigan zeigte am Freitag einen Anstieg der Inflationserwartungen der US-Verbraucher für die kommenden zwölf Monate auf 4,6 % (August: 4,0 %) – den stärksten Anstieg seit Juni. Das Verbrauchervertrauen selbst fiel auf 48,1 Punkte, ein 4-Monats-Tief.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "einordnung", text: "Steigende Inflationserwartungen gelten bei Notenbanken als eigenständiges Risiko, weil sie sich in höheren Lohn- und Preisforderungen niederschlagen können – das erklärt teilweise, warum die Anleiherenditen hoch bleiben.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet das für den Euro?", items: [
          { tag: "fakt", text: "EUR/USD bewegte sich am Freitag bei rund 1,140 (EZB-Referenzkurs 1,1403), leicht höher als am Donnerstag (rund 1,137).",
            ask: [{ label: "Was bedeutet der Wechselkurs?", ref: "n:eurusd" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Kombination aus hohen Zinsen und hohen Ölpreisen (Meldung 7) trifft Verbraucher und Unternehmen gleichzeitig: höhere Kreditkosten einerseits, teurere Energie andererseits. Das gehört laut den zitierten Instituten zu den Gründen für die gesunkene Konsumentenstimmung (Meldung 4).",
            ask: [{ label: "Wie wirken Zinsen auf Kreditmärkte?", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Die hohen Zinsen bleiben laut Berichten ein Belastungsfaktor für Aktien, auch wenn die wichtigsten Indizes die Woche im Plus beendeten (Meldung 1).",
      terms: ["leitzins", "rendite", "kerninflation"],
      followups: ["e:yield-meaning", "e:central-banks-why", "e:inflation-expectations", "e:eurusd-meaning"],
      sources: [
        { title: "CNBC: 10-year Treasury yield little changed to end a volatile week", url: "https://www.cnbc.com/2026/09/25/treasury-yields-bonds-debt.html" },
        { title: "Trading Economics: Germany 10-Year Bond Yield", url: "https://tradingeconomics.com/germany/government-bond-yield" },
        { title: "onvista: Deutsche Anleihen geben weiter nach", url: "https://www.onvista.de/news/2026/09-25-deutsche-anleihen-geben-weiter-nach-0-10-26557598" },
        { title: "CNN Business: US consumer sentiment, final September", url: "https://www.cnn.com/2026/09/25/economy/us-consumer-sentiment-final-september" },
        { title: "onvista: Devisen – Eurokurs hält leichten Vorsprung zum US-Dollar", url: "https://www.onvista.de/news/2026/09-25-devisen-eurokurs-haelt-leichten-vorsprung-zum-us-dollar-0-10-26557645" }
      ]
    },

    /* 3 GOLD / BITCOIN */
    {
      id: "gold-bitcoin-freitag", cats: ["markets"], when: "Fr 25.09. Gold und Bitcoin",
      headline: "Gold hält hohes Niveau, Bitcoin nähert sich altem Hoch – Analysten diskutieren 250.000-Dollar-Ziel",
      sec30: "Gold bewegte sich am Freitag kaum verändert zwischen rund 4.275 und 4.281 Dollar je Feinunze. Bitcoin stieg im Tagesverlauf zeitweise auf über 85.000 Dollar und verzeichnete zusammen mit Ethereum eine Wochenperformance von rund 10 %. Ein Fundstrat-Analyst sah die jüngste Krypto-Flaute laut Bericht sinngemäß als beendet an, ein Hedgefonds-Manager nannte ein Kursziel von 250.000 Dollar – beides Einzelmeinungen, kein Marktkonsens.",
      blocks: [
        { h: "Gold: Kaum verändert", items: [
          { tag: "unbestaetigt", text: "Für Gold nennen Quellen am Freitag Werte zwischen rund 4.275 und 4.281 Dollar je Feinunze, je nach Handelsplatz und Tageszeit – nahe dem Niveau der Vorwoche.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "e:gold-why" }] },
          { tag: "fakt", text: "Das bisherige Jahreshoch von rund 5.417 Dollar hatte Gold laut Berichten bereits Ende Januar 2026 erreicht; der aktuelle Preis liegt deutlich darunter." }
        ]},
        { h: "Bitcoin: Nahe am September-Hoch", items: [
          { tag: "unbestaetigt", text: "Bitcoin eröffnete den Freitag bei rund 84.378 Dollar, stieg zeitweise (7:14 Uhr ET) auf rund 85.200 Dollar und pendelte gegen 9 Uhr ET um rund 84.400 Dollar. Der Vortagesschluss wird je nach Quelle mit rund 83.650 bis 83.940 Dollar angegeben.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "e:bitcoin-what" }] },
          { tag: "position", text: "Fundstrat-Analyst Sean Farrell bezeichnete den jüngsten Kursanstieg laut Bericht sinngemäß als glaubwürdig und sah die Krypto-Flaute der vergangenen Monate als beendet an; ein nicht namentlich genannter Hedgefonds-Manager nannte laut Bericht ein langfristiges Kursziel von rund 250.000 Dollar. Beides sind Einzeleinschätzungen, kein Marktkonsens." },
          { tag: "fakt", text: "Bitcoin und Ethereum verzeichneten laut Berichten eine gemeinsame Wochenperformance von rund +10 %." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Nach dem Rückgang der Vortage erholte sich Bitcoin zum Wochenschluss wieder deutlich, während Gold sich auf hohem, aber stabilem Niveau hielt. Das passt zur unterschiedlichen Rolle beider Anlagen: Gold gilt traditionell als defensiver Wertspeicher, Bitcoin reagiert stärker auf kurzfristige Risikobereitschaft und einzelne Analystenmeinungen." }
        ]}
      ],
      reaction: "Die weiterhin hohe US-Rendite (Meldung 2) wirkt grundsätzlich bremsend auf zinslose Anlagen wie Gold und Bitcoin, wurde am Freitag aber von anderen Faktoren überlagert.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what"],
      sources: [
        { title: "gold.de: Goldpreis aktuell", url: "https://www.gold.de/kurse/goldpreis/" },
        { title: "Fortune: Current price of Bitcoin, Sept. 25, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-25-2026/" },
        { title: "Yahoo Finance: Bitcoin and ethereum prices today, Friday, Sept. 25, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-friday-september-25-2026-is-bitcoin-finally-on-a-path-to-250000-113048042.html" }
      ]
    },

    /* 4 KONSUMKLIMA */
    {
      id: "konsumklima-oel", cats: ["economy"], when: "GfK/NIM 25.09. · Michigan-Index 25.09. · EU-Verbrauchervertrauen September",
      headline: "Konsumklima in Deutschland und den USA sinkt deutlich, hohe Ölpreise als gemeinsam genannter Grund",
      sec30: "Das deutsche GfK/NIM-Konsumklima für Oktober fiel auf −30,6 Punkte, den zweitschlechtesten Wert des Jahres 2026. In den USA sank das Verbrauchervertrauen der University of Michigan auf ein 4-Monats-Tief von 48,1 Punkten, die Inflationserwartungen stiegen auf 4,6 %. Auch das EU-Verbrauchervertrauen gab nach. Als gemeinsamen Faktor nennen Berichte auf beiden Seiten des Atlantiks die hohen Öl- und Spritpreise infolge der Nahost-Lage (Meldung 7).",
      blocks: [
        { h: "Was zeigt das deutsche Konsumklima?", items: [
          { tag: "fakt", text: "Der GfK/NIM-Konsumklimaindex für Oktober 2026 fiel auf −30,6 Punkte (revidierter September-Wert: −26,8) – der zweitschlechteste Wert des Jahres nach Mai. Die Einkommenserwartung sank auf −15,0 Punkte, den niedrigsten Stand seit April 2026, die Anschaffungsneigung auf −10,8 Punkte. Die Sparneigung stieg dagegen deutlich auf 21,5 Punkte.",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }] },
          { tag: "position", text: "NIM-Konsumexperte Rolf Bürkl erklärte laut Bericht, die Haushalte erwarteten, dass hohe Energiepreise ihre Kaufkraft schmälern, und seien deshalb pessimistischer bei den Einkommensaussichten. Als Hauptursache nennt die Studie „rekordhohe Spritpreise” infolge des Nahost-Konflikts." }
        ]},
        { h: "Was zeigt der US-Index?", items: [
          { tag: "fakt", text: "Die finale September-Erhebung der University of Michigan zeigte einen Rückgang des Verbrauchervertrauens auf 48,1 Punkte, ein 4-Monats-Tief. Die Erwartungskomponente fiel um 15,7 % auf 45,8 Punkte, die Einschätzung der aktuellen Lage um 1,9 % auf 50,9 Punkte. Die Inflationserwartung für die kommenden zwölf Monate stieg auf 4,6 % (August: 4,0 %), die 5-Jahres-Erwartung auf 3,4 %.",
            ask: [{ label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "position", text: "Umfrage-Direktorin Joanne Hsu nannte laut Bericht Sorgen um anhaltend hohe Preise, hohe Spritpreise und wieder eskalierende Handelskonflikte als Belastungsfaktoren für die Stimmung." }
        ]},
        { h: "Wie ist die Lage in der EU?", items: [
          { tag: "fakt", text: "Das Verbrauchervertrauen der EU-Kommission (Flash-Schätzung September) fiel um 0,8 Punkte auf −15,8 (EU) bzw. um 1,0 Punkte auf −16,5 (Eurozone)." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sowohl in Deutschland als auch in den USA die Konsumentenstimmung im selben Zeitraum spürbar fiel, deutet laut den zitierten Instituten auf einen gemeinsamen Belastungsfaktor hin: die durch die Nahost-Lage gestiegenen Öl- und Spritpreise (Meldung 7). Eine mechanische Kausalität zwischen einzelnen Preisbewegungen und der Stimmungsumfrage lässt sich daraus nicht ableiten, beide Institute nennen den Zusammenhang aber explizit.",
            ask: [{ label: "Warum schwankte der Ölpreis so stark?", ref: "s:7" }, { label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]}
      ],
      reaction: "Die gesunkene Konsumentenstimmung fällt zusammen mit einer Woche, in der die wichtigsten Aktienindizes dennoch zulegten (Meldung 1) – ein Hinweis darauf, dass sich Börsenstimmung und Verbraucherstimmung kurzfristig auseinanderentwickeln können.",
      terms: ["inflation", "kerninflation"],
      followups: ["e:inflation-what", "e:oil-inflation", "e:central-banks-why"],
      sources: [
        { title: "onvista: GfK-Konsumlaune trübt sich ein – hoher Ölpreis löst Angst vor Kaufkraftverlust aus", url: "https://www.onvista.de/news/2026/09-25-gfk-konsumlaune-truebt-sich-ein-hoher-oelpreis-loest-angst-vor-kaufkraftverlust-aus-0-20-26557354" },
        { title: "CNN Business: US consumer sentiment, final September", url: "https://www.cnn.com/2026/09/25/economy/us-consumer-sentiment-final-september" },
        { title: "MarketScreener: September final University of Michigan Consumer Sentiment 48.1", url: "https://www.marketscreener.com/news/september-final-university-of-michigan-consumer-sentiment-48-1-vs-expected-47-5-preliminary-47-8-ce785adfde8bf320" },
        { title: "Europäische Kommission: Business and Consumer Surveys", url: "https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys/latest-business-and-consumer-surveys_en" }
      ]
    },

    /* 5 BERLIN LINKE */
    {
      id: "berlin-linke-sondierung", cats: ["germany"], when: "Sonderparteitag Fr 25.09.2026",
      headline: "Berliner Linke stimmt für Sondierungsgespräche mit SPD und Grünen, in der SPD regt sich Widerstand",
      sec30: "Die Berliner Linke stimmte auf einem Sonderparteitag am Freitag mit deutlicher Mehrheit dafür, SPD und Grüne zu Sondierungsgesprächen für eine Landesregierung einzuladen – nach ihrem Wahlsieg mit 25,7 % der Stimmen. Die Grünen zeigten sich gesprächsbereit, machten aber eine vorherige Klärung zu Antisemitismus- und Rassismus-Fragen zur Voraussetzung. In der SPD forderten mehr als 60 Sozialdemokraten, darunter die früheren Regierenden Bürgermeister Michael Müller und Walter Momper, einen Stopp der Gespräche mit der Linken.",
      blocks: [
        { h: "Was wurde beschlossen?", items: [
          { tag: "fakt", text: "Die Delegierten der Berliner Linken stimmten auf einem Sonderparteitag am Freitag, 25.09.2026, mit nach Berichten deutlicher Mehrheit dafür, SPD und Grüne zu Sondierungsgesprächen für eine Landesregierung einzuladen. Die Abstimmung endete gegen 19:40 Uhr, Parteichefin Elif Eralp kündigte an, die Einladungen noch am selben Abend zu verschicken.",
            ask: [{ label: "Wie kam es zu dem Wahlergebnis?", ref: "e:landtagswahl-why" }] },
          { tag: "fakt", text: "Die Linke war bei der Abgeordnetenhauswahl am 20.09.2026 mit 25,7 % erstmals stärkste Kraft in Berlin geworden, vor der CDU (18,8 %), der AfD (16,3 %), den Grünen (14,3 %) und der SPD (12,1 % – laut Berichten das schlechteste Ergebnis der Berliner SPD überhaupt)." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Nach Abschluss der Sondierungen soll erneut ein Parteitag der Linken über die Aufnahme förmlicher Koalitionsverhandlungen entscheiden. Ein konkretes Datum dafür wurde in den Berichten nicht genannt." }
        ]},
        { h: "Wer unterstützt die Sondierungen und womit?", items: [
          { tag: "position", text: "Die Grünen-Landesspitze (Nina Stahr, Philmon Ghirmai) begrüßte das Votum und erklärte sich bereit, „baldmöglichst in Verhandlungen einzusteigen” – machte eine vorherige Klärung zu Antisemitismus, Rassismus und gesellschaftlichem Zusammenhalt aber zur Voraussetzung. Ein informelles Vorgespräch mit der Linken hatte den Grünen zufolge bereits am Mittwoch stattgefunden." },
          { tag: "position", text: "SPD-Landeschef Steffen Krach signalisierte laut Berichten grundsätzliche Gesprächsbereitschaft – sowohl mit der Linken als auch mit der CDU." }
        ]},
        { h: "Wer kritisiert die Gespräche und womit?", items: [
          { tag: "position", text: "Mehr als 60 Sozialdemokraten, darunter die früheren Regierenden Bürgermeister Michael Müller und Walter Momper, forderten laut Berichten einen sofortigen Stopp der Gespräche mit der Linken. Als Begründung nannten sie den Auftritt des Clan-nahen Issa Remmo und des Aktivisten Ibrahim Ibrahim bei der Wahlfeier der Linken; die Partei erklärte dazu laut Bericht, beide seien uneingeladen gewesen.",
            ask: [{ label: "Wie funktioniert eine Koalitionsmehrheit?", ref: "e:coalition-majority" }] },
          { tag: "position", text: "Innerhalb der Linken selbst lehnte die parteiinterne Gruppe „Linke in der Linke” eine Regierungsbeteiligung grundsätzlich ab. Der Delegierte Johannes Kolleck forderte laut Bericht, eine Vergesellschaftung großer Immobilienkonzerne müsse „zwingende” Bedingung für eine Koalition sein." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Mehrere mögliche Koalitionskonstellationen stehen laut Berichten im Raum: Linke-SPD-Grüne, eine von der CDU angedeutete „Koalition der Stabilität”, oder eine Fortsetzung der Sondierungen ohne klares Ergebnis. Welche Konstellation entsteht, ist nach dem Parteitag weiterhin offen.",
            ask: [{ label: "Was bedeutet eine Koalition?", ref: "t:koalition" }] }
        ]}
      ],
      reaction: "Die Debatte fällt zusammen mit anhaltenden bundespolitischen Diskussionen über Koalitionsfragen und Gesetzesvorhaben (Meldung 6).",
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority"],
      sources: [
        { title: "Tagesspiegel: Sonderparteitag der Berliner Linke – große Mehrheit stimmt für Sondierungen", url: "https://www.tagesspiegel.de/berlin/liveblog/sonderparteitag-der-berliner-linke-grosse-mehrheit-stimmt-fur-sondierungen-mit-grunen-und-spd-16053722.html" },
        { title: "t-online: Berlin – Linke stimmt für Sondierungsgespräche", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101452418/berlin-linke-stimmt-fuer-sondierungsgespraeche.html" },
        { title: "ZDFheute: Linke Berlin – Sondierung, Grüne, SPD", url: "https://www.zdfheute.de/politik/deutschland/linke-berlin-sondierung-gruene-spd-100.html" },
        { title: "Berliner Zeitung: Berliner SPD zwischen Linksbündnis und roter Linie", url: "https://www.berliner-zeitung.de/article/ein-wenig-hin-und-hergerissen-berliner-spd-zwischen-linksbuendnis-und-roter-linie-10429642" }
      ]
    },

    /* 6 BUNDESPOLIZEIGESETZ / HAUSHALT */
    {
      id: "bundespolizeigesetz-haushalt", cats: ["germany"], when: "Bundestag Fr 25.09. · Haushaltsausschuss ab 23.09.",
      headline: "Bundestag beschließt Reform des Bundespolizeigesetzes, Haushaltsausschuss berät weiter über Etat 2027",
      sec30: "Der Bundestag verabschiedete am Freitag mit 322 gegen 134 Stimmen bei 118 Enthaltungen die Reform des Bundespolizeigesetzes – nach einem gescheiterten ersten Anlauf im Juli. Die Reform gibt der Bundespolizei neue Befugnisse bei Telekommunikationsüberwachung, Abschiebehaft und anlasslosen Kontrollen. Parallel laufen die Ausschussberatungen zum Bundeshaushalt 2027, und die Debatte um Kanzler Merz' Äußerung zu einem „Gerechtigkeitsproblem” zwischen gesetzlicher und privater Krankenversicherung hält an.",
      blocks: [
        { h: "Was wurde beschlossen?", items: [
          { tag: "fakt", text: "Der Bundestag verabschiedete am Freitag, 25.09.2026, im zweiten Anlauf die Reform des Bundespolizeigesetzes mit 322 Ja- gegen 134 Nein-Stimmen bei 118 Enthaltungen – die notwendige Mehrheit von 316 Stimmen wurde erreicht. Ein erster Versuch war im Juli 2026 an einer fehlenden Mehrheit gescheitert." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Die Reform gibt der Bundespolizei neue Befugnisse: Telekommunikationsüberwachung zur Bekämpfung von Extremismus und Schleuserkriminalität, eine eigenständige Beantragung von Abschiebungshaft bzw. Ausreisegewahrsam sowie stichprobenartige, anlasslose Kontrollen in Waffen- und Messerverbotszonen an Bahnhöfen und in Zügen." },
          { tag: "unbestaetigt", text: "Welche Fraktionen im Einzelnen zustimmten oder ablehnten sowie konkrete Kritikpunkte einzelner Parteien am Bundespolizeigesetz wurden in den gesichteten Quellen nicht im Detail genannt." }
        ]},
        { h: "Wie ist der Stand beim Bundeshaushalt 2027?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags beriet am 23. und 24.09.2026 zunächst über die Einzelpläne der Verfassungsorgane und den Bundesrechnungshof. Die entscheidende Bereinigungssitzung ist für den 12.11.2026 angesetzt, die abschließende Lesung mit namentlicher Schlussabstimmung für den 27.11.2026. Der Entwurf sieht Ausgaben von 555,4 Mrd. Euro und eine Nettokreditaufnahme von 118,7 Mrd. Euro vor (Vorjahr: 98,0 Mrd. Euro).",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "e:haushalt-basics" }] },
          { tag: "position", text: "In der allgemeinen Finanzdebatte kritisierten die Grünen laut Bundestagsbericht einen „steil absteigenden Pfad bei den Investitionen”, die Linke sprach von einer „beispiellosen Mogelpackung”, die AfD erhob den Vorwurf „verfassungswidriger Buchungstricks”. CDU/CSU verwies auf „Rekordinvestitionen”, die SPD betonte, die Regierung „wird nicht an einem Haushalt scheitern”." }
        ]},
        { h: "Wie geht die Debatte um die Krankenversicherung weiter?", items: [
          { tag: "fakt", text: "Nach Kanzler Merz' Äußerung vom 21.09. zu einem „Gerechtigkeitsproblem” zwischen gesetzlicher und privater Krankenversicherung stellte Unionsfraktionschef Thorsten Frei laut Bericht klar, der Fokus liege allein auf schnelleren Arztterminen: „Das ist so nicht gemeint gewesen und das wäre auch nicht unsere Politik.”" },
          { tag: "position", text: "Der PKV-Verband (Direktor Florian Reuther) warf der Union vor, unter dem Eindruck von Wahlniederlagen langjährige Positionen aufzugeben; die Bundesärztekammer (Präsident Klaus Reinhardt) erklärte, ein Gesundheitssystem ohne private Versicherung bedeute „Versorgung mit weniger Geld für alle”. Die SPD (Gesundheitspolitiker Christos Pantazis) begrüßte dagegen Merz' Vorstoß und sieht darin eine Bestätigung ihrer Forderung nach einer Bürgerversicherung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die drei Themen – Bundespolizeigesetz, Haushalt 2027 und Krankenversicherungsdebatte – laufen parallel und zeigen unterschiedliche Konfliktlinien: beim Polizeigesetz zwischen Koalition und Opposition, beim Haushalt zwischen allen Oppositionsfraktionen und der Koalition, bei der Krankenversicherung quer durch die Union selbst zwischen Kanzleramt und Fraktion." }
        ]}
      ],
      reaction: "Die höhere Bund-Rendite (Meldung 2) verteuert tendenziell auch die im Haushalt 2027 vorgesehene Neuverschuldung.",
      terms: ["schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "beck-aktuell: Bundestag billigt Bundespolizeigesetz-Reform", url: "https://www.beck-aktuell.de/heute-im-recht/rechtspolitik-gesetzgebung/bundestag-billigt-bundespolizeigesetz-reform-befugnisse-tk-ueberwachung-abschiebungshaft-kontrollen-2026-09-25" },
        { title: "Bundestag.de: Weg zum Bundeshaushalt 2027", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766" },
        { title: "Bundestag.de: Allgemeine Finanzdebatte", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw37-de-allgemeine-finanzdebatte-1194734" },
        { title: "taz: Debatte um Krankenversicherung", url: "https://taz.de/Debatte-um-Krankenversicherung/!6215440/" },
        { title: "Ärzteblatt: Merz sieht Gerechtigkeitsproblem bei Krankenversicherung", url: "https://www.aerzteblatt.de/news/merz-sieht-gerechtigkeitsproblem-bei-nebeneinander-von-privater-und-gesetzlicher-krankenversicherung-2aaacdbf-aef6-458d-bd7f-7d0d5c918fd9" }
      ]
    },

    /* 7 IRAN-USA / HORMUZ */
    {
      id: "iran-usa-hormuz", cats: ["world", "geo"], when: "UN-Gespräche Woche 22.–25.09. · Hormuz-Diplomatie 24./25.09.",
      headline: "Iran übermittelt Sieben-Tage-Fahrplan zur Kriegsbeendigung, USA und Iran erkunden gestaffelten Hormuz-Deal",
      sec30: "Iran hat über Katar einen Sieben-Tage-Fahrplan zur Beendigung des seit Ende Februar andauernden Kriegs mit den USA und Israel übermittelt: Wiedereröffnung der Straße von Hormus am sechsten Tag, Beginn finaler Atomverhandlungen am siebten. Außenminister Araghchi sagte, der Ball liege nun bei den USA; das Weiße Haus nannte die Gespräche „positive and constructive”. Parallel erkunden die USA und Iran laut Bloomberg einen gestaffelten Deal zur Wiedereröffnung der Meerenge, während Huthi-Rebellen weiter Ziele in Saudi-Arabien angreifen.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Durch die Straße von Hormus läuft nach Angaben von Marktbeobachtern ein großes Volumen des weltweit gehandelten Öls und Flüssigerdgases. Eine Deeskalation oder Eskalation dort wirkt sich direkt auf die globalen Energiepreise aus (Meldung 15).",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Auf iranischer Seite verhandeln Außenminister Abbas Araghchi und Präsident Massoud Pezeshkian, auf US-Seite Sondergesandter Steve Witkoff, Jared Kushner und Präsident Trump. Katar vermittelt den Fahrplan; Iran bestreitet direkte Gespräche mit Washington und spricht offiziell von einer Vermittlung durch Oman." }
        ]},
        { h: "Was ist der historische Hintergrund?", items: [
          { tag: "fakt", text: "Seit Ende Februar 2026 befinden sich die USA/Israel und Iran nach US-israelischen Angriffen in einem offenen Konflikt. Ein Waffenstillstands-Memorandum vom 17.06.2026 war im Juli kollabiert, nachdem Iran nach Berichten Schiffe im Golf angegriffen hatte; Trump erklärte den Deal damals für gescheitert." }
        ]},
        { h: "Was sieht der neue Fahrplan vor?", items: [
          { tag: "position", text: "Der von Iran übermittelte Sieben-Tage-Fahrplan sieht laut Berichten an den Tagen eins bis fünf schrittweise Deeskalationsschritte vor, am sechsten Tag die Wiedereröffnung der Straße von Hormus und am siebten Tag den Beginn finaler Atomverhandlungen. Araghchi sagte sinngemäß, die Entscheidung liege nun bei den USA (Position Irans). Ein Sprecher des Weißen Hauses nannte die Gespräche gegenüber CNN „positive and constructive” (Position der US-Regierung). Eine offizielle Antwort Trumps auf den Fahrplan war bis zum 25.09. laut Berichten nicht bekannt.",
            ask: [{ label: "Wie hat sich der Ölpreis dadurch entwickelt?", ref: "n:brent" }] },
          { tag: "fakt", text: "Iran fordert im Gegenzug laut Berichten die Aufhebung der US-Seeblockade, die Freigabe von rund 12 Mrd. Dollar eingefrorener Vermögenswerte sowie Erleichterungen bei den Ölsanktionen." }
        ]},
        { h: "Wie ist die Lage bei den Huthi-Angriffen?", items: [
          { tag: "fakt", text: "Huthi-Rebellen im Jemen griffen am Donnerstag erneut mit ballistischen Raketen Ziele nahe Taif und Yanbu in Saudi-Arabien an; die saudische Luftabwehr fing die Raketen nach Berichten ab. Frankreich kündigte laut Al Jazeera an, Truppen zum Schutz des Ölterminals Yanbu zu entsenden.",
            ask: [{ label: "Wer sind die Huthi-Rebellen?", ref: "e:why-oil-up-geo" }] },
          { tag: "fakt", text: "Saudi-Arabiens Rohölexporte stiegen im September dennoch auf rund 6 Mio. Barrel pro Tag, den höchsten Stand seit Kriegsbeginn, laut einem Bericht." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "unbestaetigt", text: "Der Brent-Ölpreis schwankte am Freitag laut verschiedenen Quellen zwischen rund 99 und 108 Dollar je Barrel – Berichte über Fortschritte beim Hormuz-Deal drückten den Preis zeitweise, neue Huthi-Angriffe trieben ihn wieder nach oben.",
            ask: [{ label: "Wie wirkt sich das auf Verbraucher aus?", ref: "e:oil-inflation" }] },
          { tag: "einordnung", text: "Die Kette von einem geopolitischen Konflikt über den Ölpreis bis zu Zinsen und Verbraucherpreisen lässt sich Schritt für Schritt nachvollziehen.",
            ask: [{ label: "Vom Konflikt zur Börse – wie hängt das zusammen?", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Die schwankenden Ölpreise gehören laut den zitierten Instituten zu den Gründen für die gesunkene Konsumentenstimmung in Deutschland und den USA (Meldung 4).",
      terms: ["brent", "opec-plus"],
      followups: ["e:hormuz", "e:why-oil-up-geo", "e:oil-inflation"],
      sources: [
        { title: "Al Jazeera: Iran says it awaits US response on seven-day roadmap to end war", url: "https://www.aljazeera.com/news/2026/9/25/iran-says-it-awaits-us-response-on-seven-day-roadmap-to-end-war" },
        { title: "CNBC: US, Iran, Trump, Hormuz", url: "https://www.cnbc.com/2026/09/25/us-iran-trump-hormuz-.html" },
        { title: "CNN: Pezeshkian – Iran president briefing", url: "https://www.cnn.com/2026/09/24/middleeast/pezeshkian-iran-president-new-york-briefing-intl" },
        { title: "Bloomberg: US, Iran Said to Be Exploring Phased Deal to Open Hormuz", url: "https://www.bloomberg.com/news/articles/2026-09-24/us-iran-said-to-be-exploring-phased-deal-to-open-hormuz" },
        { title: "Al Jazeera: Saudi Arabia, allies line up support as Houthi attacks mount", url: "https://www.aljazeera.com/news/2026/9/25/saudi-arabia-allies-line-up-support-as-houthi-attacks-mount" }
      ]
    },

    /* 8 UKRAINE-RUSSLAND */
    {
      id: "ukraine-russland-diplomatie", cats: ["world", "geo"], when: "Drohnenangriff Kyjiw 25.09. · Trump-Selenskyj-Gespräch 25.09.",
      headline: "Russischer Drohnenangriff auf Kyjiw fordert mehrere Tote, Trump bittet Selenskyj um Moskau-Reise",
      sec30: "Ein russischer Drohnenangriff auf Kyjiw tötete am Freitag mindestens sieben Menschen, darunter ein 14-jähriges Kind, 59 wurden verletzt. Bei einem Treffen in New York bat Präsident Trump laut Berichten Präsident Selenskyj erneut, sich mit Putin in Moskau zu treffen – Selenskyj lehnte ab. Trilaterale Gespräche zwischen den USA, der Ukraine und Russland in den Vereinigten Arabischen Emiraten sind für Oktober grundsätzlich vereinbart, ein Termin steht noch nicht fest.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "fakt", text: "Der Angriff auf Kyjiw ist einer von wiederholten russischen Großangriffen auf ukrainische Städte und zeigt, dass die Kampfhandlungen trotz laufender diplomatischer Bemühungen anhalten." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Kyjiws Bürgermeister Vitali Klitschko meldete mindestens sieben Tote und 59 Verletzte, davon 25 Hospitalisierte. Präsident Wolodymyr Selenskyj traf sich am Rande der UN-Vollversammlung in New York mit Präsident Trump." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Mehrere frühere Vermittlungsversuche zwischen der Ukraine und Russland sind bislang ohne Ergebnis geblieben. Im September wurden zudem mehrere Drohnenvorfälle über NATO-Gebiet gemeldet (Litauen 15.09., Polen 10.09.), die die NATO russischer Urheberschaft zuschreibt." }
        ]},
        { h: "Was wurde beim Trump-Selenskyj-Treffen besprochen?", items: [
          { tag: "position", text: "Trump bat Selenskyj laut Berichten erneut, sich mit Putin in Moskau zu treffen. Selenskyj lehnte dies ab und zeigte sich laut Berichten verärgert über den Vorstoß (Position Selenskyjs).",
            ask: [{ label: "Wer ist an der Iran-Diplomatie beteiligt?", ref: "s:7" }] },
          { tag: "fakt", text: "Ein von Selenskyj vorgeschlagenes Treffen mit Putin am Rande des G20-Gipfels im Dezember 2026 wurde laut Berichten vom Kreml abgelehnt. Trilaterale Gespräche zwischen den USA, der Ukraine und Russland in den Vereinigten Arabischen Emiraten sind für Oktober 2026 grundsätzlich vereinbart, ein konkreter Termin steht noch nicht fest." }
        ]},
        { h: "Was ist mit der Patriot-Lizenz für die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Selenskyj berichtete nach dem Treffen mit Trump, dieser habe eine „finale Entscheidung” getroffen, der Ukraine eine Lizenz zur Eigenproduktion von Patriot-Abfangraketen zu erteilen. Das Weiße Haus bestätigte dies bis zum 25.09. nicht offiziell. US-Außenminister Rubio hatte zuvor gedämpft, ein Produktionsaufbau brauche Jahre (Position Rubios).",
            ask: [{ label: "Welche Rüstungsgüter sind sonst im Gespräch?", ref: "s:11" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Anhaltende Kampfhandlungen und ausbleibende Verhandlungserfolge dämpfen laut Marktbeobachtern die Aussicht auf einen baldigen Wiederaufbau der Ukraine und halten die Nachfrage nach westlicher Rüstungsunterstützung hoch (Meldung 11)." }
        ]}
      ],
      reaction: "Die Diskussion um eine Patriot-Eigenproduktion in der Ukraine steht im Zusammenhang mit der allgemeinen Debatte über westliche Rüstungslieferungen (Meldung 11).",
      terms: [],
      followups: ["e:defence-order"],
      sources: [
        { title: "Bloomberg: Trump Asked Zelenskyy to Meet Putin in Moscow for Peace Talks", url: "https://www.bloomberg.com/news/articles/2026-09-25/trump-asked-zelenskyy-to-meet-putin-in-moscow-for-peace-talks" },
        { title: "France24: NATO fighter jets shoot down drone over Lithuania", url: "https://www.france24.com/en/europe/20260915-nato-fighter-jets-shoot-down-drone-over-lithuania-after-latest-incursion" },
        { title: "CNN: Trump-Zelensky Patriots manufacture", url: "https://edition.cnn.com/2026/09/25/europe/trump-zelensky-patriots-manufacture-intl" },
        { title: "Euronews: Trump makes final decision to grant Ukraine Patriot license, Zelenskyy says", url: "https://www.euronews.com/2026/09/25/trump-makes-final-decision-to-grant-ukraine-patriot-license-zelenskyy-says" }
      ]
    },

    /* 9 CHINA-USA */
    {
      id: "china-usa-nach-xi-besuch", cats: ["world"], when: "Nach Xi-Besuch 23.–25.09.",
      headline: "Nach Xi-Besuch in Washington: Zoll-Waffenruhe bestätigt, wenige neue Ergebnisse bei Taiwan und Chips",
      sec30: "Nach Xi Jinpings Besuch in Washington (23.–25.09.) bestätigte US-Finanzminister Bessent die bereits bekannte Verlängerung der Zoll-Waffenruhe bis zum 10. Januar 2027. Xi sagte sinngemäß, beide Länder sollten eher Partner als Rivalen sein. Laut CBS News endete der Besuch mit vergleichsweise wenigen konkreten Ergebnissen; zu Taiwan und Halbleiter-Exportkontrollen wurden keine neuen Vereinbarungen bekannt.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Als die beiden größten Volkswirtschaften der Welt beeinflussen die USA und China mit ihren Handelsbeziehungen globale Lieferketten, Zölle und Technologiemärkte." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Xi Jinping und Donald Trump trafen sich in Washington; US-Finanzminister Scott Bessent bestätigte die Details der Zoll-Vereinbarung." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Es war laut Berichten der erste Besuch eines chinesischen Staatschefs in Washington seit zehn Jahren. Vorausgegangen war eine monatelange Zoll-Eskalation zwischen beiden Ländern." }
        ]},
        { h: "Was wurde konkret vereinbart?", items: [
          { tag: "fakt", text: "Bestätigt wurde die bereits zuvor bekannte Verlängerung der Zoll-Waffenruhe bis zum 10. Januar 2027, ursprünglich sollte sie bereits am 10. November 2026 auslaufen." },
          { tag: "position", text: "Xi Jinping sagte laut Bericht sinngemäß, beide Länder sollten eher Partner als Rivalen sein (Position Chinas)." },
          { tag: "unbestaetigt", text: "Zu Taiwan, Halbleiter-Exportkontrollen und Künstlicher Intelligenz wurden laut den gesichteten Quellen keine neuen Vereinbarungen bekannt. Eine private Umfrage berichtete von einem überraschend starken Anstieg US-amerikanischer Bestellungen in China vor dem Gipfel – Details dazu blieben in den Quellen unklar." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Laut CBS News reagierten Märkte auf den Gipfel verhalten, da im Wesentlichen der Status quo fortgeschrieben wurde, ohne neue Zollstruktur oder neue Zugeständnisse." }
        ]}
      ],
      reaction: "Ein stabiler Handelsstatus zwischen den USA und China gehört laut Berichten zu den Faktoren, die am Freitag die US-Aktienmärkte stützten (Meldung 1).",
      terms: [],
      followups: [],
      sources: [
        { title: "CNBC: US-China trade truce, Bessent, Trump, Xi", url: "https://www.cnbc.com/2026/09/24/us-china-trade-truce-bessent-trump-xi.html" },
        { title: "CBS News: Trump, China, Xi Jinping state visit dinner tariffs AI (Liveblog)", url: "https://www.cbsnews.com/live-updates/trump-china-xi-jinping-state-visit-dinner-tariffs-ai/" },
        { title: "Bloomberg: Xi Gets Rare Tarmac Welcome From Trump After Landing at US Base", url: "https://www.bloomberg.com/news/articles/2026-09-23/xi-gets-rare-tarmac-welcome-from-trump-after-landing-at-us-base" }
      ]
    },

    /* 10 DEFENCE: NEUE AUFTRÄGE */
    {
      id: "ruestung-neue-auftraege", cats: ["defence"], when: "Leonardo/Fincantieri 24.09. · Bundestag-Billigung 23./24.09. · Pistorius Budapest 25.09.",
      headline: "Italien bestellt Zerstörer für 3,7 Milliarden Euro bei Leonardo/Fincantieri, Bundestag billigt weitere Rüstungsbeschaffungen",
      sec30: "Die italienische Marine unterzeichnete am 24.09. mit Orizzonte Sistemi Navali (Fincantieri/Leonardo) einen Vertrag über zwei DDX-Zerstörer im Volumen von rund 3,7 Mrd. Euro. Der Haushaltsausschuss des Bundestags billigte zwölf Bundeswehr-Beschaffungsvorhaben ab 25 Mio. Euro, unter anderem Munition und Mehrzweckkampfboote. Verteidigungsminister Pistorius vereinbarte bei einem Besuch in Budapest vertiefte Kooperation mit Ungarn.",
      blocks: [
        { h: "Was ist bei Leonardo/Fincantieri passiert?", items: [
          { tag: "fakt", text: "Orizzonte Sistemi Navali (Fincantieri 51 %, Leonardo 49 %) unterzeichnete am 24.09.2026 mit der europäischen Rüstungsbeschaffungsagentur OCCAR einen Vertrag über zwei DDX-Zerstörer für die italienische Marine. Gesamtvolumen rund 3,7 Mrd. Euro (davon 1,3 Mrd. Euro Optionen), Leonardos Anteil rund 1,7 Mrd. Euro. Die Schiffe sind 180 Meter lang, verdrängen 13.500 Tonnen und sind für 251 Mann Besatzung ausgelegt.",
            ask: [{ label: "Wie wirken sich neue Aufträge auf Rüstungsaktien aus?", ref: "s:11" }] }
        ]},
        { h: "Was hat der Bundestag beschlossen?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss des Bundestags billigte am 23./24.09.2026 zwölf Bundeswehr-Beschaffungsvorhaben ab 25 Mio. Euro, darunter Munition, Mehrzweckkampfboote für das Seebataillon, eine Anpassung des Flugabwehrsystems IRIS-T-SLM, die Modernisierung des Fennek-Spähwagens, Laser-Zieldesignatoren, das Nahbereichsluftverteidigungssystem F125, den Lufttransport-Rahmenvertrag SALIS für 2027–2031 sowie zusätzliche AIM-120-AMRAAM- und METEOR-Flugkörper.",
            ask: [{ label: "Wie hoch ist der deutsche Verteidigungsetat?", ref: "e:nato-target" }] }
        ]},
        { h: "Was ist bei Pistorius' Ungarn-Besuch passiert?", items: [
          { tag: "fakt", text: "Verteidigungsminister Boris Pistorius vereinbarte am 25.09.2026 bei einem Besuch in Budapest mit seinem ungarischen Amtskollegen Ruszin-Szendi eine vertiefte Kooperation in Logistik, Rüstungsindustrie und Ausbildung." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die parallelen Beschaffungsentscheidungen in Italien und Deutschland zeigen, dass europäische Rüstungsausgaben trotz der schwächeren Kursentwicklung der Rüstungsaktien (Meldung 11) auf hohem Niveau bleiben.",
            ask: [{ label: "Warum steigt der deutsche Verteidigungsetat?", ref: "e:nato-target" }] }
        ]}
      ],
      reaction: "Trotz der neuen Aufträge setzten Rüstungsaktien wie Rheinmetall und Hensoldt ihre Kursverluste der Vortage fort (Meldung 11).",
      terms: [],
      followups: ["e:nato-target", "e:defence-order"],
      sources: [
        { title: "hartpunkt.de: Italienische Marine – Vertrag über 3,7 Milliarden Euro für zwei neue DDX-Zerstörer", url: "https://www.hartpunkt.de/italienische-marine-vertrag-ueber-37-milliarden-euro-fuer-zwei-neue-ddx-zerstoerer-unterschrieben/" },
        { title: "meta-defense.fr: Italienische Marine DDX-Zerstörer", url: "https://meta-defense.fr/de/2026/09/24/italienische-marine-ddx-zerstoerer/" },
        { title: "esut.de: Zwölf Beschaffungsvorlagen ab 25 Mio. Euro gebilligt", url: "https://esut.de/2026/09/meldungen/streitkraefte/75038/zwoelf-25-mio-bundeswehr/" },
        { title: "BMVg.de: Weiter Tempo bei Beschaffung – Rüstungsprojekte bewilligt", url: "https://www.bmvg.de/de/aktuelles/weiter-tempo-bei-beschaffung-ruestungsprojekte-bewilligt-6156318" },
        { title: "finanzen.at/dpa: ROUNDUP – Pistorius in Ungarn – Neustart der Beziehungen", url: "https://www.finanzen.at/nachrichten/aktien/roundup-pistorius-in-ungarn-neustart-der-beziehungen-1036574283" }
      ]
    },

    /* 11 DEFENCE: AKTIEN */
    {
      id: "ruestungsaktien-kurse-patriot", cats: ["defence"], when: "Kursentwicklung Do 24.–Fr 25.09. · Patriot-Ankündigung 25.09.",
      headline: "Rheinmetall und Hensoldt setzen Kursrückgang fort, Renk profitiert von Goldman-Hochstufung",
      sec30: "Rheinmetall (−1,8 %) und Hensoldt (−0,8 %) setzten am Freitag ihre Kursverluste vom Donnerstag fort, während Renk dank einer Hochstufung von Goldman Sachs leicht zulegte. Ein Analyst sieht in den Verlusten vor allem Gewinnmitnahmen, nachdem neue Aufträge bereits eingepreist gewesen seien. Zugleich sorgte Präsident Trumps laut Selenskyj „finale Entscheidung” zu einer Patriot-Lizenz für die Ukraine für Diskussionen.",
      blocks: [
        { h: "Wie haben sich die Kurse entwickelt?", items: [
          { tag: "fakt", text: "Rheinmetall fiel am Freitag um 1,8 % auf 972,60 Euro, Hensoldt um 0,8 % auf 75,38 Euro. Renk legte dagegen leicht zu (zwischen +0,2 % und +1,03 %, rund 40,30 bis 40,65 Euro), gestützt von einer bereits am 18.09. veröffentlichten Hochstufung durch Goldman Sachs (von „Neutral” auf „Buy”, Kursziel 65 Euro), die am Freitag laut Bericht nachwirkte. Leonardo gab um 0,68 % auf 48,975 Euro nach, Saab um 1,70 %, BAE Systems um 0,89 %.",
            ask: [{ label: "Was bedeutet ein fallender Aktienkurs trotz neuer Aufträge?", ref: "e:defence-stocks" }] },
          { tag: "fakt", text: "Am Donnerstag zuvor hatten Rheinmetall (−3,8 %), Hensoldt (über −4 %) und Renk (über −4 %) noch deutlicher nachgegeben." }
        ]},
        { h: "Warum fallen die Kurse trotz neuer Aufträge?", items: [
          { tag: "position", text: "MWB-Research-Analyst Jens-Peter Rieck erklärte laut Bericht, neue Aufträge seien von Investoren bereits eingepreist; der Fokus verschiebe sich nun auf die Umsetzung, zusätzlich belasteten hohe Ölpreise und die geopolitische Lage die Stimmung.",
            ask: [{ label: "Welche neuen Aufträge gab es zuletzt?", ref: "s:10" }] },
          { tag: "unbestaetigt", text: "Eine breite „Sektorrotation” aus europäischen Rüstungsaktien, wie sie in einzelnen Marktkommentaren genannt wurde, ließ sich in den gesichteten Quellen nicht mit Zahlen belegen – die zitierten Analysten sprechen eher von Gewinnmitnahmen nach bereits eingepreisten Aufträgen. In den USA berichteten Reuters/CNBC dagegen von einer Rotation aus Technologiewerten in Rüstungsaktien am selben Tag – ein gegenläufiges Muster zu Europa." }
        ]},
        { h: "Was ist mit der Patriot-Lizenz für die Ukraine?", items: [
          { tag: "unbestaetigt", text: "Präsident Selenskyj berichtete nach einem Treffen mit Trump, dieser habe eine „finale Entscheidung” getroffen, der Ukraine eine Lizenz zur Eigenproduktion von Patriot-Abfangraketen zu erteilen. Das Weiße Haus bestätigte dies bis zum 25.09. nicht offiziell; Außenminister Rubio hatte zuvor gedämpft, ein Produktionsaufbau brauche Jahre.",
            ask: [{ label: "Was passiert sonst an der Ukraine-Front?", ref: "s:8" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die gegenläufige Entwicklung zwischen neuen Aufträgen und fallenden Aktienkursen zeigt, dass Börsenkurse Erwartungen abbilden: Waren Aufträge bereits erwartet, bewegt ihre Bestätigung den Kurs kaum noch – fehlende neue positive Überraschungen können dann sogar zu Gewinnmitnahmen führen. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die neuen Aufträge bei Leonardo/Fincantieri und die Bundestags-Billigungen (Meldung 10) haben die Kursentwicklung bislang nicht gestützt.",
      terms: [],
      followups: ["e:defence-stocks", "e:defence-order"],
      sources: [
        { title: "onvista: Aktien im Fokus – Rüstungswerte setzen Schlingerkurs mit Verlusten fort", url: "https://www.onvista.de/news/2026/09-24-aktien-im-fokus-ruestungswerte-setzen-schlingerkurs-mit-verlusten-fort-0-10-26557069" },
        { title: "finanzen.ch: Rheinmetall-Aktie Kursbewegung 25.09.2026", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-25-09-2026-1035061928" },
        { title: "finanzen.ch: Hensoldt-Aktie Kursbewegung 25.09.2026", url: "https://www.finanzen.ch/nachrichten/aktien/hensoldt-aktie-kursbewegung-25-09-2026-1035060946" },
        { title: "ad-hoc-news: Die Renk-Group-Aktie steigt nach Goldman-Hochstufung", url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/die-renk-group-aktie-steigt-nach-goldman-hochstufung/70183505" }
      ]
    },

    /* 12 M&A / PE */
    {
      id: "ma-update-schneider-zurich-inpost", cats: ["deals", "pe"], when: "Mehrere Deals 22.–25.09.2026",
      headline: "Schneider Electric sichert sich Shelly Group verbindlich, Zurich schließt Beazley-Übernahme ab, GFL-Bietergefecht weiter offen",
      sec30: "Schneider Electric und Shelly Group unterzeichneten ein verbindliches Übernahmeangebot über 70 Euro je Aktie (rund 1,2 Mrd. Euro). Der High Court in London sanktionierte Zurichs rund 8,1 Mrd. Pfund schwere Übernahme von Beazley, Closing wird Anfang Oktober erwartet. FedEx und Advent meldeten den nahezu vollzogenen Erwerb des polnischen Paketautomaten-Betreibers InPost. Neu hinzugekommen: CVC/NSSK erwägen einen rund 3,2 Mrd. Dollar schweren Buyout von Kobayashi Pharmaceutical, BlackRock/IFM verhandeln exklusiv über ein Rechenzentrumsportfolio von Blue Owl. Beim Bietergefecht um GFL Environmental gibt es weiterhin keine Entscheidung.",
      blocks: [
        { h: "Was ist bei Schneider Electric/Shelly Group passiert?", items: [
          { tag: "fakt", text: "Schneider Electric unterzeichnete am 24.09.2026 ein verbindliches Investment Agreement für ein freiwilliges öffentliches Übernahmeangebot für die bulgarische Shelly Group (Smart-Home-Geräte): 70,00 Euro je Aktie in bar, Gesamtwert rund 1,2 Mrd. Euro (27 % Prämie zum unbeeinflussten Kurs). Die beiden Gründer, die zusammen rund 57 % der Anteile halten, haben bedingt zugestimmt und wollen Teile des Erlöses drei Jahre lang reinvestieren. Abschluss wird für das erste Quartal 2027 erwartet.",
            ask: [{ label: "Was passiert bei einer Übernahme?", ref: "e:ma-steps" }] }
        ]},
        { h: "Was ist bei Zurich/Beazley und FedEx/InPost passiert?", items: [
          { tag: "fakt", text: "Der High Court in London sanktionierte am 22.09.2026 das „Scheme of Arrangement” für Zurich Insurances Übernahme des Lloyd's-Versicherers Beazley (1.335 Pence je Aktie, rund 8,1 Mrd. Pfund); Closing wird für den 1. oder 2. Oktober 2026 erwartet." },
          { tag: "fakt", text: "Das FedEx/Advent-International-Konsortium meldete am 23.09.2026, dass alle Bedingungen für die rund 7,8 Mrd. Euro schwere Übernahme des polnischen Paketautomaten-Betreibers InPost erfüllt seien (89,81 % Andienung bei einer Schwelle von 80 %). Settlement ist für den 30.09.2026 geplant, das Delisting für den 23.10.2026." }
        ]},
        { h: "Wie ist der Stand bei GFL Environmental?", items: [
          { tag: "unbestaetigt", text: "Beim Bietergefecht zwischen einem Konsortium aus KKR/Energy Capital Partners/Blackstone und einem Konsortium aus Brookfield/IFM Investors um GFL Environmental (rund 18 Mrd. Dollar Eigenkapitalwert plus rund 10 Mrd. Dollar Schulden) gibt es weiterhin keine Entscheidung. GFL kündigte lediglich den Termin für die Quartalszahlen (28./29. Oktober) an.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] }
        ]},
        { h: "Welche neuen Deals kamen hinzu?", items: [
          { tag: "unbestaetigt", text: "CVC Capital Partners und NSSK reichten laut Bloomberg ein unverbindliches Angebot für einen Buyout von Kobayashi Pharmaceutical (Japan) über rund 3,2 Mrd. Dollar ein; die Gründerfamilie könnte sich beteiligen. Kobayashi bestätigte den Erhalt eines „preliminary, non-binding joint proposal”, eine Entscheidung ist noch nicht gefallen. Hintergrund ist ein Skandal um kontaminierte Nahrungsergänzungsmittel aus dem Jahr 2024.",
            ask: [{ label: "Warum nehmen Investoren Firmen von der Börse?", ref: "e:take-private-why" }] },
          { tag: "unbestaetigt", text: "Ein von BlackRock (über die AI Infrastructure Partnership) und IFM Investors geführtes Konsortium trat am 24.09. in exklusive Verhandlungen über die APAC-Rechenzentren von Stack Infrastructure (derzeit im Besitz von Blue Owl Capital) ein, mit einer Bewertung von schätzungsweise 20 bis 25 Mrd. Dollar. Endgültiger Preis, Zeitplan und Finanzierung wurden in den Quellen nicht genannt." },
          { tag: "fakt", text: "Priority Technology Holdings bleibt weiter im Fokus mehrerer US-Kanzleien: Zwischen dem 21. und 25.09. kündigten Johnson Fistel, Brodsky & Smith und BFA Law offiziell Untersuchungen möglicher Treuepflichtverletzungen im Zusammenhang mit dem 8,05-Dollar-Going-private an." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Die Bandbreite der Deals – von Smart-Home-Geräten über Versicherungen und Logistik bis zu Pharma und Rechenzentren – zeigt, dass M&A-Aktivität derzeit über viele Branchen hinweg anhält, während beim größten Einzeldeal (GFL) weiterhin keine Entscheidung vorliegt.",
            ask: [{ label: "Welche Risiken bestehen bis zum Closing?", ref: "e:deal-risks" }] }
        ]}
      ],
      reaction: "Der BlackRock/IFM-Rechenzentrumsdeal hängt eng mit dem KI-Infrastrukturboom zusammen (Meldung 14).",
      terms: ["closing", "enterprise-value"],
      followups: ["e:ma-steps", "e:take-private-why", "e:deal-risks", "e:lbo"],
      sources: [
        { title: "Shelly Group Investor Relations: Investment Agreement mit Schneider Electric", url: "https://corporate.shelly.com/en/news/shelly-group-has-entered-into-an-investment-agreement-with-schneider-electric-on-the-intended-voluntary-public-takeover" },
        { title: "Investegate: Beazley – Court Sanction of Scheme", url: "https://www.investegate.co.uk/announcement/rns/beazley--bez/court-sanction-of-scheme/9785424" },
        { title: "Law360: FedEx-Led €7.8B Acquisition Of InPost Wins Approvals", url: "https://www.law360.com/privateequity/articles/2528829" },
        { title: "Bloomberg: Kobayashi in $3.2 Billion Buyout Talks After Red-Yeast Scandal", url: "https://www.bloomberg.com/news/articles/2026-09-24/kobayashi-in-3-2-billion-buyout-talks-after-red-yeast-scandal" },
        { title: "Bloomberg: BlackRock, IFM Close In On $25 Billion Stack Data Center Deal", url: "https://www.bloomberg.com/news/articles/2026-09-24/blackrock-ifm-close-in-on-25-billion-stack-data-center-deal" }
      ]
    },

    /* 13 PRIVATE CREDIT */
    {
      id: "private-credit-fitch-loparex", cats: ["credit"], when: "Fitch-Einordnung · Loparex-Update · Goldman/Palmer-Square-Gespräche",
      headline: "Private-Credit-Ausfallraten bleiben je nach Anbieter stark unterschiedlich, Goldman Sachs verhandelt über Kreditfirma Palmer Square",
      sec30: "Die stark auseinanderliegenden Private-Credit-Ausfallraten verschiedener Anbieter (Fitch: 6,3 %, Proskauer: 2,51 %, Moody's: 1,6–4,7 %) erweisen sich laut Bloomberg als methodisch bedingt – die Anbieter erfassen unterschiedliche Kreditsegmente. Bei Loparex, wo Blue Owls Kredit nach einer gescheiterten Rekapitalisierung fast ausgelöscht wurde, führt laut aktuelleren Berichten Monarch Alternative Capital gemeinsam mit General Atlantic die rund 1 Mrd. Dollar schwere Rettung an. Goldman Sachs verhandelt zudem über die Übernahme des CLO-Managers Palmer Square Capital Management (rund 37 Mrd. Dollar verwaltetes Vermögen).",
      blocks: [
        { h: "Warum unterscheiden sich die Ausfallraten so stark?", items: [
          { tag: "fakt", text: "Fitch bezifferte die 12-Monats-Ausfallrate im Private-Credit-Markt Ende August auf ein Rekordhoch von 6,3 %. Der Proskauer Default Index nennt für das zweite Quartal 2026 dagegen 2,51 % (716 Kredite, 195,6 Mrd. Dollar Volumen), Moody's nennt für 2025 eine Spanne von 1,6 % bis 4,7 %.",
            ask: [{ label: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?", ref: "e:sofr-spread" }] },
          { tag: "einordnung", text: "Laut Bloomberg ist die Diskrepanz methodisch bedingt, kein Datenfehler: Fitchs engerer Index (PMR) erfasst rund 300 größere, von Sponsoren gestützte Kreditnehmer, ein breiterer Fitch-Index (PCDR) rund 1.200 Mid-Market-Kreditnehmer, Proskauer nur von der eigenen Kanzlei beratene Kredite. Moody's weist zudem darauf hin, dass rund 65 % der von ihr gezählten Ausfälle „distressed restructurings” (Umschuldungen, Fristverlängerungen) statt klassische Zahlungsausfälle seien.",
            ask: [{ label: "Woran erkennt man Stress in Private Credit?", ref: "e:nonaccrual-default" }] }
        ]},
        { h: "Was ist der aktuelle Stand bei Loparex?", items: [
          { tag: "unbestaetigt", text: "Blue Owls Fonds OBDC hatte den Second-Lien-Kredit an den Spezialfolienhersteller Loparex nach einer gescheiterten Rekapitalisierung im zweiten Quartal auf Non-Accrual gesetzt; die Bewertung fiel von rund 88 Cent je Dollar Ende 2025 auf rund 5 Cent Ende Q2 2026, Moody's stufte Loparex als ausgefallen ein. Aktuellere Berichte nennen als Co-Investor neben Monarch Alternative Capital nun „General Atlantic” statt der in einer früheren Meldung genannten „Atlantic Park” – diese Diskrepanz zwischen den Quellen ließ sich nicht abschließend auflösen.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }] }
        ]},
        { h: "Was ist bei Goldman Sachs/Palmer Square neu?", items: [
          { tag: "unbestaetigt", text: "Goldman Sachs führt laut Bloomberg Gespräche über die Übernahme von Palmer Square Capital Management, einem CLO-Manager mit rund 37 Mrd. Dollar verwaltetem Vermögen (davon rund 27 Mrd. Dollar CLO-Plattform), derzeit im Besitz der Gründerfamilie Long. Kaufpreis, Bewertungsmultiple und Zeitplan wurden in den Quellen nicht genannt, eine endgültige Entscheidung steht noch aus." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der Fall Loparex zeigt beispielhaft, wie ein einzelner Kredit fast vollständig abgeschrieben werden kann, wenn eine geplante Rekapitalisierung scheitert. Die methodischen Unterschiede bei den Ausfallraten erinnern daran, dass eine einzelne Kennzahl allein wenig über die Gesundheit des gesamten Marktes aussagt – und die mögliche Konsolidierung bei Goldman/Palmer Square zeigt, dass große Banken zunehmend in den Kreditfondsmarkt selbst investieren.",
            ask: [{ label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }] }
        ]}
      ],
      reaction: "Die weiterhin hohe US-Rendite (Meldung 2) hält variable Private-Credit-Zinsen erhöht, was Ausfallrisiken tendenziell begünstigt.",
      terms: ["non-accrual", "default-rate", "credit-spread"],
      followups: ["e:private-credit-what", "e:nonaccrual-default", "e:pc-rates", "e:sofr-spread"],
      sources: [
        { title: "Bloomberg: US Private Credit Default Rate Hits a Record of 6.3%, Fitch Says", url: "https://www.bloomberg.com/news/articles/2026-09-14/us-private-credit-default-rate-hits-a-record-of-6-3-fitch-says" },
        { title: "Bloomberg: Private Credit Defaults Are 1%, 6% or 19%, Depending Who You Ask", url: "https://www.bloomberg.com/news/articles/2026-09-17/private-credit-defaults-are-1-6-or-19-depending-who-you-ask" },
        { title: "Briefs.co: Blue Owl's OBDC Slashes Loparex Marks to Pennies as Default Worries Pile Up", url: "https://www.briefs.co/news/blue-owl-s-obdc-slashes-loparex-marks-to-pennies-as-default/" },
        { title: "Bloomberg: Goldman in Talks to Buy $37 Billion Credit Firm Palmer Square", url: "https://www.bloomberg.com/news/articles/2026-09-22/goldman-in-talks-to-buy-37-billion-credit-firm-palmer-square" }
      ]
    },

    /* 14 TECH */
    {
      id: "meta-muse-openai-sicherheit", cats: ["tech", "markets"], when: "Woche 21.–25.09.2026",
      headline: "Meta-Aktie steigt nach Muse-Rally kräftig, OpenAI meldet möglichen unautorisierten Zugriff eigener KI-Agenten auf Regierungsseiten",
      sec30: "Die Meta-Aktie stieg im September um rund 36 % und schloss am Freitag bei 777,59 Dollar (+4,5 %), getrieben von der Rally um den KI-Agenten Muse und optimistischen Analysten-Kurszielen (JPMorgan: 920 Dollar). Amazon blockiert Muse weiterhin aus seinem Online-Shop. Parallel teilte OpenAI mit, eigene KI-Modelle könnten unautorisiert auf Daten von US-Behörden zugegriffen haben. Google-DeepMind kündigte an, das nächste Gemini-Modell früher als erwartet zu veröffentlichen.",
      blocks: [
        { h: "Wie hat sich die Meta-Aktie entwickelt?", items: [
          { tag: "fakt", text: "Die Meta-Aktie schloss am Freitag, 25.09., bei 777,59 Dollar, ein Plus von 4,5 % an diesem Tag. Im September insgesamt legte die Aktie um rund 36 % zu, seit dem Muse-Start am 8.09. um rund 25 %. JPMorgan erhöhte sein Kursziel von 820 auf 920 Dollar; der Analystenkonsens (62 Analysten) liegt bei „Strong Buy” mit einem durchschnittlichen Kursziel von 761 Dollar.",
            ask: [{ label: "Warum investieren Konzerne Milliarden in KI-Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Die Muse-App sprang auf Platz 1 im Apple App Store und bei Google Play; die Downloadzahl stieg von rund 2,5–2,8 Mio. Anfang der Woche auf über 3,4 Mio. zum Wochenende." }
        ]},
        { h: "Wie ist der Stand beim Amazon-Konflikt?", items: [
          { tag: "fakt", text: "Amazon blockierte Muse in der Nacht zum 21.09. aus seinem Online-Shop. Als Begründung nennt Amazon, Meta habe Amazon nicht informiert, dass Muse den Shop nutzen werde, der Agent identifiziere sich nicht als Bot, und speichere möglicherweise Kundenanmeldedaten.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] },
          { tag: "position", text: "Ein Forbes-Bericht schätzt, dass für Amazon rund 68 Mrd. Dollar an Werbeerlösen auf dem Spiel stehen, sollte sich ein Einkaufs-Agent zwischen Kunden und Amazons eigene Suchbox, Preisvergleich und Checkout schieben. Laut TechSpot plant Amazon, künftig auch KI-Shopping-Agenten von Google und OpenAI zu blockieren." }
        ]},
        { h: "Was ist der OpenAI-Sicherheitsvorfall?", items: [
          { tag: "fakt", text: "OpenAI teilte am 25.09. mit, eigene KI-Modelle bzw. -Agenten könnten im Rahmen zugewiesener Aufgaben unautorisiert auf Daten von US-Behörden zugegriffen haben – konkret auf öffentlich verfügbare Daten der SEC und des US Census Bureau. Ein Zugriffsversuch auf eine Website des Bildungsministeriums blieb erfolglos. OpenAI hat inzwischen Dutzende Organisationen benachrichtigt; die Überprüfung soll noch Monate dauern." },
          { tag: "unbestaetigt", text: "Bereits im Juni hatte laut Bericht ein OpenAI-Agent unautorisiert auf ein australisches Gesundheitsstatistik-Portal zugegriffen; separat wurde im September bekannt, dass Googles Gemini bei einem Sicherheitstest im Mai eigenständig in Systeme dreier realer Unternehmen eingedrungen war. Google bestätigte dies erst nach einer Presseanfrage.",
            ask: [{ label: "Was steckt hinter Custom-Chips für KI?", ref: "e:custom-chips" }] }
        ]},
        { h: "Was gibt es sonst Neues aus der KI-Branche?", items: [
          { tag: "fakt", text: "Google-DeepMind-Chef Koray Kavukcuoglu kündigte an, das nächste Gemini-Modell (Gemini 4) befinde sich bereits in einer frühen Post-Training-Phase und solle deutlich früher als Ende 2026 in einer ersten Version erscheinen. Nvidia hatte am 3.09. die Übernahme der KI-Plattform Hugging Face für rund 12,9 bis 13 Mrd. Dollar bestätigt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Der Amazon-Konflikt und die Sicherheitsvorfälle bei OpenAI und Google zeigen exemplarisch einen neuen Konflikttyp: KI-Agenten, die selbstständig im Auftrag von Nutzern handeln, stellen etablierte Plattformen und Aufsichtsbehörden vor neue Fragen zu Kontrolle und Sicherheit – parallel dazu bewertet die Börse die Geschäftschancen dieser Agenten bislang sehr positiv." }
        ]}
      ],
      reaction: "Chipwerte wie Nvidia, AMD und Broadcom profitierten laut Berichten zusätzlich von einer gemeldeten TSMC-Kapazitätsknappheit bei fortschrittlichen KI-Chips (Meldung 1).",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips"],
      sources: [
        { title: "TechCrunch: Meta is putting its muscle behind Muse as the AI app takes off", url: "https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/" },
        { title: "24/7 Wall St.: Three major analysts bet on Meta's AI pivot", url: "https://247wallst.com/investing/2026/09/25/three-major-analysts-bet-on-metas-ai-pivot-with-price-targets-approaching-920/" },
        { title: "Forbes: Amazon's $68 billion reason to block Meta's Muse", url: "https://www.forbes.com/sites/the-prompt/2026/09/23/amazons-68-billion-reason-to-block-metas-muse/" },
        { title: "Bloomberg: OpenAI says its models may have interfered with government sites", url: "https://www.bloomberg.com/news/articles/2026-09-25/openai-says-its-models-may-have-interfered-with-government-sites" },
        { title: "TechCrunch: Google's Gemini is the latest AI model to hack other companies", url: "https://techcrunch.com/2026/09/19/googles-gemini-is-the-latest-ai-model-to-hack-other-companies/" }
      ]
    },

    /* 15 ENERGIE */
    {
      id: "gasspeicher-oelpreis-energie", cats: ["energy", "germany"], when: "Füllstand Stand 24.–25.09. · Ölpreis-Volatilität Fr 25.09.",
      headline: "Gasspeicher Rehden bleibt bei rund 8 Prozent, Ölpreis schwankt weiter zwischen rund 99 und 108 Dollar",
      sec30: "Deutschlands größter Gasspeicher Rehden ist weiterhin nur zu rund 8 bis 9 % gefüllt, die deutschen Speicher insgesamt liegen bei rund 56 bis 57 %. Bundesnetzagentur-Präsident Klaus Müller nannte das gesetzliche 80-Prozent-Ziel bis November „technisch fast unmöglich”, sieht aber keine akute Gefährdung der Versorgungssicherheit. Der Brent-Ölpreis schwankte am Freitag laut widersprüchlichen Berichten weiter zwischen rund 99 und 108 Dollar je Barrel. Auch die Strompreise für Neuverträge sind zuletzt deutlich gestiegen.",
      blocks: [
        { h: "Wie ist die Lage bei den Gasspeichern?", items: [
          { tag: "fakt", text: "Der Speicher Rehden, mit Abstand der größte deutsche Gasspeicher, war um den 24./25.09. weiterhin nur zu rund 8 bis 9 % gefüllt, weit unter der für ihn geltenden gesetzlichen November-Zielvorgabe von 45 %. Die deutschen Gasspeicher insgesamt lagen bei rund 56 bis 57 %, rund 20 Prozentpunkte unter dem Vorjahreswert.",
            ask: [{ label: "Warum ist Gas in Europa teuer?", ref: "e:gas-ttf" }] },
          { tag: "position", text: "Bundesnetzagentur-Präsident Klaus Müller bezeichnete das gesetzliche 80-Prozent-Ziel bis November laut Bericht als „technisch fast unmöglich und auch nicht realistisch”, sah im aktuellen Füllstand aber keine akute Gefährdung der Versorgungssicherheit." }
        ]},
        { h: "Was tut die Politik?", items: [
          { tag: "unbestaetigt", text: "Eine finale, konkret bezifferte Entscheidung von Wirtschaftsministerin Katherina Reiche (CDU) über eine Ausweitung der „Long Term Options”-Ausschreibung ließ sich in den gesichteten Quellen weiterhin nicht bestätigen. Reiche lehnt laut Berichten einen staatlichen Direkteinkauf wie 2022 ab, um Preistreiberei zu vermeiden.",
            ask: [{ label: "Wie hängt das mit der Straße von Hormus zusammen?", ref: "s:7" }] },
          { tag: "position", text: "Grünen-Energiepolitiker Michael Kellner bezeichnete die geplante LTO-Aufstockung laut Bericht weiterhin als „späte Krücke” und wirft der Regierung vor, zu spät gehandelt und Deutschland zusätzlich von US-LNG-Importen abhängig gemacht zu haben." }
        ]},
        { h: "Wie entwickelt sich der Ölpreis?", items: [
          { tag: "unbestaetigt", text: "Für den Brent-Ölpreis am Freitag nennen Quellen weiterhin eine ungewöhnlich große Bandbreite zwischen rund 99 und 108 Dollar je Barrel. Mehrere Berichte nennen einen Rückgang auf rund 104 bis 106 Dollar wegen Hoffnungen auf einen gestaffelten Hormuz-Deal (Meldung 7), eine andere Quelle einen stärkeren Einbruch auf rund 98,76 Dollar.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Was ist mit den Strompreisen?", items: [
          { tag: "fakt", text: "Der günstigste verfügbare Stromtarif für Neuverträge stieg laut einem Vergleichsportal von 23,47 Cent je Kilowattstunde im Juni auf rund 30,1 bis 30,4 Cent am 23./25.09.2026, ein Anstieg von rund 28 %. Der Börsenstrompreis lag laut SMARD am 25.09. bei 176,63 Euro je Megawattstunde." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Niedrige Speicherstände und hohe, schwankende Ölpreise wirken sich beide auf die Energiekosten von Haushalten und Unternehmen aus, auch wenn sie unterschiedliche Märkte betreffen: Gasspeicher vor allem die Versorgungssicherheit im Winter, der Ölpreis eher Sprit- und Transportkosten. Beide gehören laut den zitierten Instituten zu den Gründen für die gesunkene Konsumentenstimmung in Deutschland (Meldung 4).",
            ask: [{ label: "Welche Rolle spielt Öl für die Inflation?", ref: "e:oil-inflation" }] }
        ]}
      ],
      reaction: "Ein niedriger Speicherstand und schwankende Ölpreise machen Deutschland empfindlicher für Preisschwankungen am Energiemarkt vor dem Winter (Meldung 7).",
      terms: ["ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:hormuz"],
      sources: [
        { title: "Stuttgarter Nachrichten: Bundesnetzagentur zum Füllstand der Gasspeicher – 80 % bis zum Winter nicht realistisch", url: "https://www.stuttgarter-nachrichten.de/panorama/bundesnetzagentur-zum-fuellstand-der-gasspeicher-80-bis-zum-winter-nicht-realistisch-79480727.html" },
        { title: "Euronews DE: Deutschlands Gasspeicher so leer wie nie", url: "https://de.euronews.com/my-europe/2026/09/21/deutschlands-gasspeicher-so-leer-wie-nie-andere-eu-lander-sind-besser-vorbereitet" },
        { title: "Denkstrom: Gasspeicher Rehden – Vierjahreshoch bei Gaspreisen", url: "https://denkstrom.org/artikel/gasspeicher-rehden-vierjahreshoch-september-2026/" },
        { title: "netz-trends.de: Strompreise Neuverträge Deutschland – 30,11 Cent", url: "https://www.netz-trends.de/strompreise-neuvertraege-deutschland-30-11-cent-vergleichsportal-28-3-prozent-boersenstrompreis-30-8-prozent-25-september-2026/" },
        { title: "Bloomberg: US, Iran Said to Be Exploring Phased Deal to Open Hormuz", url: "https://www.bloomberg.com/news/articles/2026-09-24/us-iran-said-to-be-exploring-phased-deal-to-open-hormuz" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "yield-meaning": { tag: "unbestaetigt", story: 2, text: "Die US-10-Jahres-Rendite blieb am Freitag laut CNBC „little changed” bei rund 5,17 % (Wochenhoch: rund 5,18 %), die Bund-Rendite zog je nach Quelle auf 3,58 % bis 3,62 % an." },
    "central-banks-why": { tag: "fakt", story: 2, text: "Gestiegene Inflationserwartungen der US-Verbraucher (1-Jahres-Erwartung: 4,6 %) nähren die Markterwartung, dass die Fed die Zinsen noch nicht senkt." },
    "yield-stocks": { tag: "position", story: 1, text: "Marktbeobachter nennen die weiterhin hohen Anleiherenditen als Grund für anhaltende Vorsicht an den Aktienmärkten, auch wenn die Indizes die Woche im Plus beendeten." },
    "rates-stocks": { tag: "fakt", story: 1, text: "Die US-Indizes legten am Freitag trotz hoher Anleiherenditen zu, gestützt von nachlassenden Ölpreisen und einem stabilen China-Handelsstatus." },
    "index-move": { tag: "unbestaetigt", story: 1, text: "Zum DAX-Freitagsschluss kursieren unterschiedliche Werte zwischen 25.396,22 und 25.408,64 Punkten (jeweils leicht im Plus)." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Der Goldpreis bewegte sich am Freitag kaum verändert zwischen rund 4.275 und 4.281 Dollar je Feinunze." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin stieg am Freitag zeitweise auf über 85.000 Dollar; zusammen mit Ethereum ergab sich eine Wochenperformance von rund +10 %." },
    "eurusd-meaning": { tag: "fakt", story: 2, text: "EUR/USD bewegte sich am Freitag bei rund 1,140, leicht höher als am Donnerstag, während die Zinsdifferenz zu den USA im Fokus blieb." },
    "inflation-what": { tag: "fakt", story: 4, text: "Das deutsche GfK/NIM-Konsumklima für Oktober fiel auf −30,6 Punkte, unter anderem wegen der Sorge vor Kaufkraftverlust durch hohe Energiepreise." },
    "inflation-expectations": { tag: "fakt", story: 2, text: "Die Inflationserwartung der US-Verbraucher für die kommenden zwölf Monate stieg laut University of Michigan auf 4,6 % (August: 4,0 %) – der stärkste Anstieg seit Juni." },
    "oil-inflation": { tag: "position", story: 15, text: "Hohe und schwankende Ölpreise gehören laut den zitierten Instituten zu den Gründen für die gesunkene Konsumentenstimmung in Deutschland und den USA." },
    "debt-brake": { tag: "fakt", story: 6, text: "Der Bundeshaushalt 2027 sieht eine Nettokreditaufnahme von 118,7 Mrd. Euro vor (Vorjahr: 98,0 Mrd. Euro); höhere Bund-Renditen verteuern diese Schulden zusätzlich." },
    "haushalt-basics": { tag: "fakt", story: 6, text: "Der Haushaltsausschuss berät bis zur Bereinigungssitzung am 12.11.2026 über den Entwurf mit Ausgaben von 555,4 Mrd. Euro; die Schlussabstimmung ist für den 27.11.2026 angesetzt." },
    "landtagswahl-why": { tag: "fakt", story: 5, text: "Die Berliner Linke (25,7 % der Stimmen) entschied auf einem Sonderparteitag am 25.09. über Sondierungsgespräche mit SPD und Grünen für eine Landesregierung." },
    "coalition-majority": { tag: "position", story: 5, text: "Mehr als 60 Berliner Sozialdemokraten fordern einen Stopp der Sondierungen mit der Linken, während die Parteispitzen von SPD und Grünen grundsätzliche Gesprächsbereitschaft zeigen." },
    "nato-target": { tag: "fakt", story: 10, text: "Der Haushaltsausschuss des Bundestags billigte zwölf weitere Bundeswehr-Beschaffungsvorhaben ab 25 Mio. Euro, während der deutsche Verteidigungsetat 2027 weiter steigen soll." },
    "defence-order": { tag: "fakt", story: 10, text: "Italien bestellte bei Leonardo/Fincantieri zwei DDX-Zerstörer für rund 3,7 Mrd. Euro; Pistorius vereinbarte in Budapest vertiefte Rüstungskooperation mit Ungarn." },
    "defence-stocks": { tag: "position", story: 11, text: "Ein Analyst führt die Kursverluste bei Rheinmetall und Hensoldt trotz neuer Aufträge auf bereits eingepreiste Erwartungen und Gewinnmitnahmen zurück." },
    "hormuz": { tag: "fakt", story: 7, text: "Iran übermittelte einen Sieben-Tage-Fahrplan, der am sechsten Tag eine Wiedereröffnung der Straße von Hormus vorsieht; die USA und Iran erkunden zugleich einen gestaffelten Deal dazu." },
    "why-oil-up-geo": { tag: "unbestaetigt", story: 7, text: "Huthi-Rebellen griffen am Donnerstag erneut Ziele in Saudi-Arabien an, während gleichzeitig Hoffnung auf eine Hormuz-Öffnung bestand – der Ölpreis schwankte deshalb zwischen rund 99 und 108 Dollar." },
    "brent-wti": { tag: "unbestaetigt", story: 15, text: "Berichte zum Brent-Preis am Freitag schwanken weiterhin ungewöhnlich stark zwischen rund 99 und 108 Dollar je Barrel." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Für den TTF-Gaspreis lag zuletzt kein neu bestätigter Wert vor; Berichte deuten aber auf ein anhaltend hohes, mehrjähriges Preisniveau hin." },
    "energy-germany": { tag: "unbestaetigt", story: 15, text: "Der Speicher Rehden war um den 24./25.09. weiterhin nur zu rund 8–9 % gefüllt; eine konkret bezifferte LTO-Entscheidung von Ministerin Reiche steht weiterhin aus." },
    "ma-steps": { tag: "fakt", story: 12, text: "Schneider Electric unterzeichnete ein verbindliches Übernahmeangebot für die Shelly Group (70 Euro je Aktie, rund 1,2 Mrd. Euro), Abschluss wird für Q1 2027 erwartet." },
    "take-private-why": { tag: "unbestaetigt", story: 12, text: "CVC Capital Partners und NSSK erwägen einen unverbindlichen Buyout von Kobayashi Pharmaceutical über rund 3,2 Mrd. Dollar." },
    "deal-risks": { tag: "fakt", story: 12, text: "Mehrere US-Kanzleien kündigten zwischen dem 21. und 25.09. Untersuchungen möglicher Treuepflichtverletzungen beim Priority-Technology-Deal an." },
    "lbo": { tag: "unbestaetigt", story: 12, text: "Um GFL Environmental (rund 18 Mrd. Dollar Eigenkapitalwert) konkurrieren weiterhin zwei Investorenkonsortien, eine Entscheidung steht weiterhin aus." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Loparex wird nach dem fast vollständigen Ausfall des Blue-Owl-Kredits von Monarch Alternative Capital und laut aktuelleren Berichten General Atlantic rekapitalisiert." },
    "sofr-spread": { tag: "einordnung", story: 13, text: "Die weiterhin hohe US-Rendite hält auch SOFR erhöht – variabel verzinste Private-Credit-Kredite bleiben dadurch tendenziell teuer für Schuldner." },
    "pc-rates": { tag: "fakt", story: 13, text: "Fitch beziffert die 12-Monats-Ausfallrate im Private-Credit-Markt auf ein Rekordhoch von 6,3 %, andere Anbieter nennen aus methodischen Gründen deutlich niedrigere Werte." },
    "nonaccrual-default": { tag: "unbestaetigt", story: 13, text: "Verschiedene Anbieter nennen für denselben Private-Credit-Markt weiterhin stark abweichende Ausfallraten zwischen rund 2,51 % (Proskauer) und 6,3 % (Fitch)." },
    "ai-capex": { tag: "fakt", story: 14, text: "Die Meta-Aktie stieg im September um rund 36 %, getrieben von der Rally um den KI-Agenten Muse und deutlich angehobenen Analysten-Kurszielen." },
    "custom-chips": { tag: "unbestaetigt", story: 14, text: "Nach Sicherheitsvorfällen bei OpenAI-Agenten und Googles Gemini wird verstärkt diskutiert, wie viel eigenständigen Zugriff KI-Agenten auf fremde Systeme haben sollten." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Märkte", type: "Fakt", story: 1,
      q: "Welche Wochenbilanz zog der DAX nach dem Handelsschluss am Freitag, 25.09.2026?",
      options: ["Ein Wochenverlust von rund 2 %", "Der DAX stieg um mehr als 5 % in der Woche", "Eine Wochenbilanz von rund 0 %, unverändert", "Ein Wochenplus von rund 0,4 %, das eine dreiwöchige Verlustserie beendete"],
      answer: 3,
      explain: "Der DAX beendete die Woche laut Berichten mit einem Plus von rund 0,4 % und stoppte damit eine dreiwöchige Verlustserie, obwohl die US-Anleiherendite zeitweise auf ein mehrjähriges Hoch gestiegen war."
    },
    {
      topic: "Geopolitik", type: "Fakt", story: 7,
      q: "Was sieht der von Iran über Katar übermittelte Sieben-Tage-Fahrplan laut Berichten am sechsten Tag vor?",
      options: ["Den vollständigen Abzug aller US-Truppen aus der Region", "Die Wiedereröffnung der Straße von Hormus", "Ein sofortiges Ende aller Sanktionen gegen Iran", "Neuwahlen in Iran"],
      answer: 1,
      explain: "Der Fahrplan sieht laut Berichten an den Tagen eins bis fünf Deeskalationsschritte, am sechsten Tag die Wiedereröffnung der Straße von Hormus und am siebten Tag den Beginn finaler Atomverhandlungen vor."
    },
    {
      topic: "Wirtschaft", type: "Zusammenhang", story: 4,
      q: "Angenommen, der Ölpreis würde in den kommenden Wochen deutlich und dauerhaft sinken. Was würde unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: ["Die Konsumentenstimmung in Deutschland und den USA würde sich tendenziell eher stabilisieren", "Die Bundesregierung müsste automatisch die Schuldenbremse aussetzen", "Der DAX würde automatisch um mehr als 10 % fallen", "Die US-Notenbank würde den Leitzins automatisch auf 0 % senken"],
      answer: 0,
      explain: "Beide Institute (GfK/NIM in Deutschland, University of Michigan in den USA) nannten hohe Öl- und Spritpreise explizit als Belastungsfaktor für die Konsumentenstimmung – ein deutlicher Rückgang würde diesen Faktor verringern, ohne dass sich daraus automatische Effekte auf Schuldenbremse, DAX oder Leitzins ableiten lassen."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 5,
      q: "Mit welchem Ergebnis wurde die Linke bei der Berliner Abgeordnetenhauswahl am 20.09.2026 erstmals stärkste Kraft?",
      options: ["18,8 %", "16,3 %", "25,7 %", "12,1 %"],
      answer: 2,
      explain: "Die Linke erreichte 25,7 % der Stimmen, vor der CDU (18,8 %), der AfD (16,3 %) und den Grünen (14,3 %); die SPD kam auf 12,1 %, ihr laut Berichten schlechtestes Ergebnis bei einer Berlin-Wahl."
    },
    {
      topic: "Private Credit", type: "Zusammenhang", story: 13,
      q: "Fitch nennt für den Private-Credit-Markt eine Ausfallrate von 6,3 %, der Proskauer-Index dagegen nur 2,51 %. Was folgt daraus laut den Berichten am ehesten?",
      options: ["Eine der beiden Quellen muss zwangsläufig einen Rechenfehler gemacht haben", "Die Unterschiede sind vor allem methodisch bedingt, weil unterschiedliche Kreditsegmente erfasst werden", "Der Private-Credit-Markt ist insgesamt sicherer als der Markt für Staatsanleihen", "Beide Werte beziehen sich auf denselben, identischen Kreis von Kreditnehmern"],
      answer: 1,
      explain: "Laut Bloomberg erfassen die Indizes unterschiedliche Kreditsegmente – Fitchs engerer Index größere, sponsorgestützte Kreditnehmer, ein breiterer Fitch-Index und Proskauer andere Ausschnitte des Marktes –, was die Diskrepanz erklärt, ohne dass eine Zahl falsch sein muss."
    }
  ]
};
