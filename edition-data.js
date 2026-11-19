// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-19",
  dateLabel: "Donnerstag, 19. November 2026",
  updatedLabel: "Recherchestand 19.11.2026",
  marketNote: "Diese Ausgabe entsteht am Donnerstagnachmittag, 19.11.2026. DAX und Euro Stoxx 50 zeigen den Zwischenstand von rund 13:59 Uhr MEZ, nachdem beide Indizes am Mittwochabend durch die hawkisch ausgefallenen US-Notenbankprotokolle (FOMC Minutes) deutlich nachgegeben hatten und am Donnerstagvormittag zunächst von der Begeisterung über den Anthropic-Börsengang profitierten, bevor die Gewinne im Tagesverlauf wieder abschmolzen. S&P 500, Nasdaq Composite und Dow Jones zeigen den Schlussstand vom Mittwoch, 18.11.2026, da der US-Kassahandel zum Redaktionsschluss noch nicht begonnen hatte; ergänzt um die Tendenz der Terminkontrakte (Futures) für Donnerstag, die vor dem heutigen Handelsstart der Anthropic-Aktie an der Nasdaq deutlich nach oben zeigen. Gold, Öl und Bitcoin handeln durchgehend und zeigen bereits einen Donnerstagmittags-Stand. Beim Goldpreis bleiben die Angaben zwischen Quellen leicht uneinheitlich (Erholung versus weiterer Rückgang); das ist unten als unbestätigt gekennzeichnet. Der erste Handelstag der Anthropic-Aktie (Ticker „ANT”) an der Nasdaq hatte zum Redaktionsschluss noch keinen Schlusskurs; der Graumarkt deutete vorab auf einen Aufschlag von rund 20 bis 27 % gegenüber dem IPO-Preis von 83 Dollar hin.",

  top: [
    { text: "Anthropic preiste seinen Börsengang am Mittwochabend bei 83 Dollar je Aktie (über der zuvor genannten Spanne von 70 bis 78 Dollar) und sammelte dabei rund 81,3 Mrd. Dollar ein – laut Berichten der größte Börsengang der Geschichte, vor dem von SpaceX. Der Handelsstart an der Nasdaq unter dem Ticker „ANT” war für heute angesetzt, ein Schlusskurs lag zum Redaktionsschluss noch nicht vor. Nvidia blieb trotz eines Rekordumsatzes von 115,84 Mrd. Dollar unter Druck, die Aktie fiel am Mittwoch um 2,9 %; Interims-CEO Colette Kress bestätigte zudem den vollständigen Lieferstopp von H200-Chips nach China.", ref: "s:14" },
    { text: "Das am Mittwochabend veröffentlichte FOMC-Protokoll zeigt eine knappe Debatte über den Dezember-Zinsschritt (Oktober-Entscheidung mit 10 zu 2 Stimmen): Fed-Gouverneur Waller hält einen Schritt um 50 Basispunkte für möglich, New-York-Fed-Chef Williams sieht dafür keine Notwendigkeit. Fed-Chef Kevin Warsh kündigte zudem an, die Fed werde ab 2027 nur noch sieben statt acht Zinsentscheide pro Jahr abhalten.", ref: "s:4" },
    { text: "Xi Jinping, Donald Trump und Wladimir Putin trafen sich am Rande des APEC-Gipfels in Shenzhen zu einem ersten trilateralen Gespräch, ohne greifbare Annäherung beim Ukraine-Krieg; Putin erklärte laut Berichten, Kyjiw und Europa seien nach den jüngsten ukrainischen Angriffen auf die Kertsch-Brücke noch nicht verhandlungsbereit. Am Golf griff Iran nach dem US-Luftschlag auf die iranische Insel Qeshm die US-Basis Ali Al Salem in Kuwait und erneut Ziele in Bahrain an.", ref: "s:9" },
    { text: "Der Koalitionsausschuss von Union und SPD vertagte die Rentenreform auf eine Kabinettssitzung im Dezember, nachdem er sich bereits in der Nacht zum 18.11. auf eine Stromsteuersenkung geeinigt hatte. Der Haushaltsausschuss billigte unterdessen den Bundeshaushalt 2027 mit rund 210 Mrd. Euro Gesamtneuverschuldung; die für die Schuldenbremse relevante Kreditaufnahme liegt laut Ausschuss exakt an der zulässigen Obergrenze.", ref: "s:8" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 25.714 Pkt.", change: "-0,10 % ggü. Mittwochsschluss (25.736,24 Pkt.), der selbst um 1,19 % gefallen war", dir: "down", asof: "Stand Do 19.11.26, 13:59 Uhr", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Tagesverlauf", text: "Der DAX eröffnete am Donnerstagmorgen mit einem Sprung auf rund 25.938 Punkte (+0,8 %), lag gegen 12:09 Uhr noch bei 25.833 Punkten (+0,38 %) und drehte gegen 13:59 Uhr wieder leicht ins Minus." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Der DAX war am Mittwochabend nach den hawkisch ausgefallenen FOMC-Minutes um 1,19 % auf 25.736,24 Punkte gefallen. Am Donnerstagmorgen trieb die erfolgreiche Preisfeststellung des Anthropic-Börsengangs die Stimmung zunächst nach oben, die Gewinne schmolzen im Handelsverlauf aber wieder ab."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zu den FOMC-Minutes und der Fed-Zinsdebatte in Meldung 4.", ref: "s:4" },
        { area: "Technologie", text: "Mehr zum Anthropic-Börsengang in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "ad-hoc-news.de: DAX fällt 1,2 Prozent auf 25.736 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-faellt-1-2-prozent-auf-25-736-punkte/70531895" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.172 Pkt.", change: "+0,16 % ggü. Mittwochsschluss (6.154,39 Pkt.), der selbst um 0,93 % gefallen war", dir: "up", asof: "Stand Do 19.11.26, 13:59 Uhr", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Mittwoch", text: "Der Index war am Mittwoch um 0,93 % auf 6.154,39 Punkte gefallen, nachdem er mittags noch höher gestanden hatte." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die relative Stärke:",
        items: [
          "Ähnlich wie der DAX profitierte der Euro Stoxx 50 am Donnerstagvormittag zunächst von der Anthropic-Preisfeststellung und gab die Gewinne im Tagesverlauf nur teilweise wieder ab."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und Lagardes Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "finanzen.at: Gute Stimmung in Europa – Anleger lassen Euro Stoxx 50 am Donnerstagmittag steigen", url: "https://www.finanzen.at/nachrichten/aktien/gute-stimmung-in-europa-anleger-lassen-euro-stoxx-50-am-donnerstagmittag-steigen-1036783279" }
    },
    "sp500": {
      label: "S&P 500", value: "7.323,63 Pkt. (Mittwochsschluss)", change: "-0,23 % ggü. Dienstag – fünfter Verlusttag in Folge; Donnerstag-Futures zeigen vorbörslich rund +1,2 %", dir: "down", asof: "Schluss Mi 18.11.26; Future-Indikation Do 19.11.26 vor US-Handelsstart", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Verlustserie", text: "Laut einer Quelle war dies der fünfte Verlusttag in Folge und die längste Verlustserie seit Juni; der Index fiel dabei unter seine 200-Tage-Linie." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Die am Mittwochabend veröffentlichten, hawkisch ausgefallenen FOMC-Minutes dämpften die Stimmung trotz der starken Nvidia-Zahlen vom Vortag. Die Futures für Donnerstag zeigen vor dem Handelsstart der Anthropic-Aktie an der Nasdaq deutlich nach oben."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zum Anthropic-Börsengang und Nvidia in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "The Motley Fool: Stock market today, Nov. 18 – S&P 500 breaks key support as Fed minutes signal more rate hikes ahead", url: "https://www.fool.com/coverage/stock-market-today/2026/11/18/stock-market-today-nov-18-s-and-p-500-breaks-key-support-as-fed-minutes-signal-more-rate-hikes-ahead/" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "24.429,89 Pkt. (Mittwochsschluss)", change: "+0,42 % ggü. Dienstag; Nasdaq-100-Futures zeigen Donnerstag rund +2 %", dir: "up", asof: "Schluss Mi 18.11.26; Future-Indikation Do 19.11.26 vor US-Handelsstart", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Nvidia", text: "Nvidia trug trotz der breiten Marktschwäche zur Stabilisierung der Nasdaq bei; Details zur Nvidia-Aktie in Meldung 14." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Technologiewerte stützten die Nasdaq am Mittwoch trotz der hawkishen Fed-Protokolle; die Futures für Donnerstag zeigen vor dem Anthropic-Handelsstart deutlich nach oben."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Nvidia und Anthropic in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Alain Guillot: Stock market recap, November 18, 2026", url: "https://www.alainguillot.com/stock-market-recap-november-18-2026/" }
    },
    "dow": {
      label: "Dow Jones", value: "50.198,17 Pkt. (Mittwochsschluss)", change: "-1,11 % ggü. Dienstag; Donnerstag-Futures zeigen rund +0,6 %", dir: "down", asof: "Schluss Mi 18.11.26; Future-Indikation Do 19.11.26 vor US-Handelsstart", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Woche", text: "Der Dow fiel am Mittwoch weiter und bleibt nahe seinem 1,5-Monats-Tief vom Vortag." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die geringere Technologiegewichtung des Dow dämpfte die Erholung stärker als bei Nasdaq und S&P 500; die hawkishen FOMC-Minutes belasteten zusätzlich."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Lage am Golf und zum Shenzhen-Gipfel in Meldung 9 und 10.", ref: "s:10" }
      ],
      source: { title: "StockTitan: Stock market today live, November 18, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-18-2026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,096–1,098", change: "weiterhin unter der Marke von 1,10, nahe dem niedrigsten Stand seit Mai 2025", dir: "down", asof: "Stand Do 19.11.26, Vormittag", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,10 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "Mehrmonatstief", text: "Der Euro bewegt sich nahe seinem niedrigsten Stand seit Mai 2025." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die anhaltende Dollar-Stärke:",
        items: [
          "Die Erwartung einer länger restriktiven Fed-Politik nach den hawkishen FOMC-Minuten stützt den Dollar weiter stärker als die parallele EZB-Zinsdebatte den Euro (mehr in Meldung 4 und 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "FXStreet: Euro struggles amid growing expectations of prolonged Fed tightening", url: "https://fxstreet.com/news/euro-struggles-amid-growing-expectations-of-prolonged-fed-tightening-202611181517" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,08 %", change: "leicht gefallen ggü. Vortag, weiterhin über 5 %", dir: "down", asof: "Stand Do 19.11.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,08 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund diesen Zinssatz pro Jahr.",
      compare: [
        { label: "Spanne", text: "Die Rendite bewegte sich laut Berichten zwischen rund 5,05 % und 5,08 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Investoren reagierten auf die am Mittwochabend veröffentlichten FOMC-Minutes und auf Aussagen von Fed-Gouverneur Waller; die Rendite bleibt wegen der als nahezu sicher geltenden Dezember-Zinserhöhung über 5 %."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte und den FedWatch-Wahrscheinlichkeiten in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields – longer-dated yields fall as traders weigh Waller comments, Fed minutes", url: "https://www.cnbc.com/amp/2026/11/18/treasury-yields-bonds-fed.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,37 %", change: "leicht über Mittwochniveau (3,35–3,36 %)", dir: "flat", asof: "Stand Do 19.11.26", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Bund-Future", text: "Der Bund-Future notierte laut Berichten bei rund 122,02 bis 122,12 Punkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Erwartung einer EZB-Zinserhöhung im Dezember sowie die Debatte um Lagardes Nachfolge halten die Rendite auf erhöhtem Niveau (mehr in Meldung 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und Lagardes Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "aktiencheck.de: Bundesanleihen – Zehnjährige bei 3,37 Prozent, Terminmarkt sieht Einlagensatz", url: "https://aktiencheck.de/artikel/bundesanleihen-zehnjaehrige-bei-337-prozent-terminmarkt-sieht-einlagensatz-bei" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.730–3.740 $ (Angaben uneinheitlich)", change: "uneinheitliche Signale zwischen leichter Erholung und weiterem Rückgang", dir: "flat", asof: "Stand Do 19.11.26, Vormittag – Angaben zwischen Quellen abweichend", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 3.730 bis 3.740 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Trend", text: "Gold bleibt nahe dem zuletzt erreichten Mehr-als-Jahres-Tief." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Eine Quelle meldet für Donnerstagvormittag eine leichte Erholung des Goldpreises, eine andere einen weiteren Rückgang auf rund 3.735 Dollar unter Verweis auf die FOMC-Minutes, die den restriktiven Zinskurs bestätigt hätten – die genaue Richtung lässt sich aus den ausgewerteten Quellen nicht abschließend auflösen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "goldreporter.de: Goldpreis heute, 19.11.2026 – Marktbericht Gold", url: "https://www.goldreporter.de/goldpreis-heute-19-11-2026/marktbericht-gold/263196/" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 92 $", change: "weitgehend stabil ggü. Mittwoch, im November bereits rund -20 % seit Monatsbeginn", dir: "flat", asof: "Stand Do 19.11.26, Vormittag", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte.",
      compare: [
        { label: "WTI", text: "Die US-Sorte WTI notierte bei rund 83 Dollar je Barrel." }
      ],
      moved: {
        intro: "Als Hintergrund nennen Berichte:",
        items: [
          "Steigende US-Lagerbestände und ein von der IEA erwartetes globales Angebotsüberangebot für das vierte Quartal belasten den Ölpreis; die Eskalation am Golf (mehr in Meldung 10) begrenzt den Rückgang."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Eskalation am Golf in Meldung 10.", ref: "s:10" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "Forbes Advisor: Crude Oil Price Today, November 18, 2026", url: "https://www.forbes.com/advisor/investing/oil-prices-today/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 63.500–63.800 $", change: "rund -0,75 % binnen 24 Stunden", dir: "down", asof: "Stand Do 19.11.26, Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet aktuell zwischen rund 63.500 und 64.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Monat", text: "Laut Berichten summierten sich die Abflüsse aus Bitcoin-ETFs im November auf rund 9 Mrd. Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Die Zinssorgen nach den FOMC-Minutes belasten Bitcoin wie andere Risikoanlagen; zusätzlich melden Berichte anhaltende Mittelabflüsse aus Bitcoin-ETFs im November."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin for Nov. 19, 2026", url: "https://fortune.com/article/price-of-bitcoin-11-19-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 DONNERSTAG */
    {
      id: "markets-dax-eurostoxx-donnerstag-11-19", cats: ["markets"], when: "Mittwochsschluss 18.11.2026 · Zwischenstand Do 19.11.2026, früher Nachmittag",
      headline: "DAX gibt nach kurzer Erholung wieder nach, Euro Stoxx 50 hält sich knapp im Plus",
      sec30: "Der DAX war am Mittwochabend nach den hawkisch ausgefallenen US-Notenbankprotokollen (FOMC Minutes) um 1,19 % auf 25.736,24 Punkte gefallen. Am Donnerstagmorgen sprang der Index zunächst um 0,8 % auf rund 25.938 Punkte, getrieben von der erfolgreichen Preisfeststellung des Anthropic-Börsengangs; die Gewinne schmolzen im Tagesverlauf aber wieder ab, am frühen Nachmittag lag der DAX bei rund 25.714 Punkten (-0,10 %). Der Euro Stoxx 50 hielt sich mit +0,16 % auf rund 6.172 Punkte knapp im Plus.",
      blocks: [
        { h: "Wie entwickelte sich der DAX zwischen Mittwochabend und Donnerstagnachmittag?", items: [
          { tag: "fakt", text: "Der DAX schloss den Mittwoch bei 25.736,24 Punkten (-1,19 %, -309,13 Punkte) gegenüber dem Dienstagsschluss von 26.045,37 Punkten. Am Donnerstagmorgen stieg der Index zunächst auf 25.938 Punkte (+0,8 %), lag gegen 12:09 Uhr bei 25.833,13 Punkten (+0,38 %) und gegen 13:59 Uhr bei 25.713,73 Punkten (-0,10 %) – die Vormittagsgewinne waren damit wieder abgeschmolzen.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Hintergrund?", items: [
          { tag: "einordnung", text: "Marktbeobachter führen den Mittwochabend-Rückgang auf die FOMC-Minutes zurück, die mehrheitlich für eine weitere Zinserhöhung im Dezember sprechen und laut Berichten auch einen größeren Schritt für einzelne Fed-Mitglieder nicht ausschließen (mehr in Meldung 4). Die Donnerstagmorgen-Erholung erklären Berichte mit der über den Erwartungen liegenden Preisfeststellung des Anthropic-Börsengangs bei 83 Dollar je Aktie; dass die Gewinne im Tagesverlauf wieder abschmolzen, zeigt laut Beobachtern, dass die FOMC-bedingte Vorsicht nicht vollständig verflogen ist.",
            ask: [{ label: "Mehr zum Anthropic-Börsengang", ref: "s:14" }] }
        ]},
        { h: "Wie ordnet sich das ein?", items: [
          { tag: "einordnung", text: "Dass der technologienähere Euro Stoxx 50 die Gewinne besser hält als der DAX, deutet darauf hin, dass die Anthropic-Euphorie europäische Technologiewerte stärker stützt als die breiter gestreuten DAX-Schwergewichte. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zu den Märkten", ref: "chain:nasdaq-why" }] }
        ]}
      ],
      reaction: "US-Futures und Mittwochsschluss an der Wall Street in Meldung 2, Gold/Bitcoin/Euro/Renditen in Meldung 3, die Fed-Zinsdebatte in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "ad-hoc-news.de: DAX fällt 1,2 Prozent auf 25.736 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-faellt-1-2-prozent-auf-25-736-punkte/70531895" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 fällt am Mittwoch 0,93 Prozent auf 6.154 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-faellt-am-mittwoch-0-93-prozent-auf-6-154-punkte/70532382" },
        { title: "onvista: Dax unter 26.000 Punkten – welche Unterstützung nun halten muss", url: "https://www.onvista.de/news/2026/11-19-dax-unter-26-000-punkten-welche-unterstuetzung-nun-halten-muss-41123281-19-26578224" },
        { title: "finanzen.at: Gute Stimmung in Europa – Anleger lassen Euro Stoxx 50 am Donnerstagmittag steigen", url: "https://www.finanzen.at/nachrichten/aktien/gute-stimmung-in-europa-anleger-lassen-euro-stoxx-50-am-donnerstagmittag-steigen-1036783279" }
      ]
    },
    /* 2 MÄRKTE: US-INDIZES MITTWOCHSSCHLUSS/DONNERSTAG-FUTURES */
    {
      id: "markets-us-futures-mittwochsschluss-anthropic-11-19", cats: ["markets"], when: "Schluss Mi 18.11.2026 · Futures Do 19.11.2026 vor US-Handelsstart",
      headline: "S&P 500 fällt fünften Tag in Folge, Nasdaq hält sich dank Technologiewerten – Futures zeigen vor Anthropic-Debüt nach oben",
      sec30: "Der S&P 500 fiel am Mittwoch um 0,23 % auf 7.323,63 Punkte – laut Berichten der fünfte Verlusttag in Folge, nachdem der Index unter seine 200-Tage-Linie gerutscht war. Die Nasdaq Composite legte dagegen um 0,42 % auf 24.429,89 Punkte zu, gestützt von Technologiewerten. Der Dow Jones gab um 1,11 % auf 50.198,17 Punkte nach. Vor dem Handelsstart der Anthropic-Aktie an der Nasdaq zeigen die Futures für Donnerstag nach oben: S&P-Futures rund +1,2 %, Nasdaq-100-Futures rund +2 %, Dow-Futures rund +0,6 %.",
      blocks: [
        { h: "Wie schlossen die US-Indizes am Mittwoch?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel um 0,23 % auf 7.323,63 Punkte, die Nasdaq Composite stieg um 0,42 % auf 24.429,89 Punkte, der Dow Jones fiel um 1,11 % auf 50.198,17 Punkte. Laut einer Analyse war es für den S&P 500 der fünfte Verlusttag in Folge und die längste Verlustserie seit Juni.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Warum fiel der breite Markt trotz guter Nvidia-Zahlen?", items: [
          { tag: "einordnung", text: "Berichte führen den Rückgang auf die am Mittwochabend veröffentlichten FOMC-Minutes zurück, die laut Analysen auf weitere Zinserhöhungen hindeuten; das überlagerte laut Beobachtern die positiven Effekte der Nvidia-Zahlen vom Vortag (mehr in Meldung 14).",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Wie reagieren die Futures vor dem Anthropic-Debüt?", items: [
          { tag: "fakt", text: "Die Futures für Donnerstag zeigen vor dem erwarteten Handelsstart der Anthropic-Aktie (Ticker „ANT”) deutlich nach oben: S&P-500-Futures rund +1,2 %, Nasdaq-100-Futures rund +2 %, Dow-Futures rund +0,6 %.",
            ask: [{ label: "Mehr zum Anthropic-Börsengang", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Futures trotz der hawkishen Fed-Protokolle deutlich zulegen, zeigt, wie stark die aktuelle Marktstimmung von einem einzelnen Ereignis – dem größten Börsengang der Geschichte – geprägt ist. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "DAX und Euro Stoxx 50 in Meldung 1, Gold/Bitcoin/Euro/Renditen in Meldung 3, Nvidia und Anthropic ausführlich in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "The Motley Fool: Stock market today, Nov. 18 – S&P 500 breaks key support as Fed minutes signal more rate hikes ahead", url: "https://www.fool.com/coverage/stock-market-today/2026/11/18/stock-market-today-nov-18-s-and-p-500-breaks-key-support-as-fed-minutes-signal-more-rate-hikes-ahead/" },
        { title: "Alain Guillot: Stock market recap, November 18, 2026", url: "https://www.alainguillot.com/stock-market-recap-november-18-2026/" },
        { title: "StockTitan: Stock market today live, November 18, 2026", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-18-2026" },
        { title: "Yahoo Finance: Stock market today, Thursday, November 19 – Dow, S&P 500, Nasdaq, Anthropic IPO", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-november-19-dow-sp-500-nasdaq-anthropic-ipo-090910916.html" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/RENDITEN DONNERSTAG */
    {
      id: "markets-gold-bitcoin-eurusd-renditen-donnerstag-11-19", cats: ["markets"], when: "Stand Do 19.11.2026, Vormittag",
      headline: "Gold zeigt uneinheitliche Signale, Bitcoin gibt weiter nach, Dollar bleibt stark",
      sec30: "Der Goldpreis bewegte sich am Donnerstag je nach Quelle zwischen leichter Erholung und weiterem Rückgang auf rund 3.730 bis 3.740 Dollar je Feinunze. Bitcoin fiel um rund 0,75 % binnen 24 Stunden auf etwa 63.500 bis 63.800 Dollar. Der Euro blieb mit rund 1,096 bis 1,098 Dollar weiter unter der Marke von 1,10, nahe seinem niedrigsten Stand seit Mai 2025. Die Rendite zehnjähriger US-Staatsanleihen lag bei rund 5,08 %, leicht unter dem Vortagesniveau, aber weiterhin über 5 %.",
      blocks: [
        { h: "Warum sind die Angaben zum Goldpreis uneinheitlich?", items: [
          { tag: "unbestaetigt", text: "Eine Quelle meldet für Donnerstagvormittag eine leichte Erholung des Goldpreises, eine andere einen weiteren Rückgang auf rund 3.735 Dollar unter Verweis auf die FOMC-Minutes, die den Zinskurs bestätigt hätten. Die genaue Richtung lässt sich aus den ausgewerteten Quellen nicht abschließend auflösen; übereinstimmend ist nur, dass der Preis nahe dem zuletzt erreichten Mehr-als-Jahres-Tief bleibt.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }] }
        ]},
        { h: "Wie entwickelte sich Bitcoin?", items: [
          { tag: "fakt", text: "Bitcoin notierte laut einer Quelle am Donnerstagmorgen (6 Uhr US-Ostküstenzeit) bei 63.747,99 Dollar, ein Rückgang von rund 0,75 % bzw. 398 Dollar binnen 24 Stunden. Berichte nennen anhaltende Mittelabflüsse aus Bitcoin-ETFs von rund 9 Mrd. Dollar im November als Hintergrund.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Wie entwickelten sich Euro und US-Rendite?", items: [
          { tag: "fakt", text: "Der Euro notierte bei rund 1,096 bis 1,098 Dollar, nahe seinem niedrigsten Stand seit Mai 2025. Die Rendite zehnjähriger US-Staatsanleihen lag bei rund 5,08 % und damit weiterhin über 5 %, nach einem leichten Rückgang gegenüber dem Vortag.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold uneinheitlich reagiert und Bitcoin weiter nachgibt, während der Dollar stark bleibt, passt zum Muster der hawkishen FOMC-Minutes: Zinslose oder risikoreiche Anlagen werden tendenziell weniger gefragt, wenn eine anhaltend restriktive Geldpolitik erwartet wird. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX/Euro Stoxx 50 in Meldung 1, US-Futures in Meldung 2, die Fed-Zinsdebatte in Meldung 4, die EZB in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "goldreporter.de: Goldpreis heute, 19.11.2026 – Marktbericht Gold", url: "https://www.goldreporter.de/goldpreis-heute-19-11-2026/marktbericht-gold/263196/" },
        { title: "aktiencheck.de: Goldpreis – Fed-Protokoll bestätigt den Zinskurs, Gold fällt auf rund 3.735 Dollar", url: "https://aktiencheck.de/artikel/goldpreis-fed-protokoll-bestaetigt-den-zinskurs-gold-faellt-auf-rund-3735-dollar" },
        { title: "Fortune: Current price of Bitcoin for Nov. 19, 2026", url: "https://fortune.com/article/price-of-bitcoin-11-19-2026/" },
        { title: "FXStreet: Euro struggles amid growing expectations of prolonged Fed tightening", url: "https://fxstreet.com/news/euro-struggles-amid-growing-expectations-of-prolonged-fed-tightening-202611181517" }
      ]
    },
    /* 4 WIRTSCHAFT: FOMC-MINUTES/WARSH/WALLER/WILLIAMS/GOOLSBEE */
    {
      id: "fed-fomc-minutes-warsh-waller-williams-goolsbee-11-19", cats: ["economy"], when: "FOMC-Minutes veröffentlicht Mi 18.11.2026, ca. 20 Uhr MEZ · Sitzung 27./28.10.2026 · nächste Entscheidung 9./10.12.2026",
      headline: "FOMC-Protokoll zeigt knappe Debatte über Dezember-Zinsschritt, Fed kündigt künftig weniger Sitzungen pro Jahr an",
      sec30: "Das am Mittwochabend veröffentlichte Protokoll der Fed-Sitzung vom 27./28. Oktober zeigt laut Berichten eine knappe Debatte: Die Entscheidung, den Leitzins bei 3,75 bis 4,00 % zu halten, fiel mit 10 zu 2 Stimmen, zwei Mitglieder hätten sofort erhöhen wollen. Fast alle Teilnehmer erwarten laut dem Protokoll eine Zinserhöhung im Dezember, einzelne Mitglieder halten laut Protokoll sogar einen größeren Schritt als 25 Basispunkte für erwägenswert, falls sich die Inflationsdaten ungünstig entwickeln. Fed-Chef Kevin Warsh kündigte zugleich an, dass die Fed ab 2027 nur noch sieben statt acht Zinsentscheide pro Jahr treffen werde. Am Terminmarkt (CME FedWatch) gilt eine Zinserhöhung im Dezember weiterhin mit hoher Wahrscheinlichkeit als eingepreist, die genauen Prozentwerte schwanken zwischen den Quellen.",
      blocks: [
        { h: "Was steht im FOMC-Protokoll?", items: [
          { tag: "fakt", text: "Das Protokoll der Sitzung vom 27./28. Oktober wurde am Mittwoch, 18.11., gegen 20 Uhr MEZ veröffentlicht. Die Fed hielt den Leitzins mit 10 zu 2 Stimmen bei 3,75 bis 4,00 %; zwei Mitglieder stimmten für eine sofortige Erhöhung um 25 Basispunkte. Laut Berichten erwarten fast alle Sitzungsteilnehmer eine Erhöhung im Dezember, „einige” Mitglieder hätten dabei laut Protokoll auch einen Schritt über 25 Basispunkte für erwägenswert gehalten, falls die Inflationsdaten ungünstig ausfallen.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was kündigte Fed-Chef Warsh an?", items: [
          { tag: "fakt", text: "Fed-Chef Kevin Warsh – seit Mai 2026 im Amt als Nachfolger von Jerome Powell – kündigte an, dass die Fed ab 2027 nur noch sieben statt acht reguläre Zinsentscheide pro Jahr treffen wird; der Oktober-Termin soll künftig zu einer reinen Strategiesitzung ohne Beschluss werden. Zu den Dezember- und übrigen 2026er-Terminen wollte er sich laut Berichten nicht vorab festlegen.",
            ask: [{ label: "Warum erhöhen Notenbanken die Zinsen?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was sagten Waller, Williams, Goolsbee und Bessent seither?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller sagte in einem Interview, die Fed könnte im Dezember einen einzelnen Schritt um 50 Basispunkte brauchen. New-York-Fed-Chef John Williams hält das bisherige „graduelle, datenabhängige” Vorgehen dagegen weiter für ausreichend und sieht keine Notwendigkeit für ein so großes Ausmaß. Chicago-Fed-Chef Austan Goolsbee widersprach laut Berichten auf CNBC Finanzminister Scott Bessent öffentlich: Der Preisdruck gehe seiner Einschätzung nach weit über das hinaus, was sich allein mit hohen Ölpreisen erklären lasse. Bessent hatte zuvor erklärt, die Fed solle wegen des Energiepreisschocks durch den Nahost-Konflikt „nicht zu stark” erhöhen.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Wie hoch ist die am Terminmarkt eingepreiste Wahrscheinlichkeit?", items: [
          { tag: "unbestaetigt", text: "Die von CME FedWatch errechnete Wahrscheinlichkeit für eine Dezember-Erhöhung um 25 Basispunkte wird in den ausgewerteten Quellen zwischen rund 85 und 97 % angegeben, mit einer Restwahrscheinlichkeit für einen größeren 50-Basispunkte-Schritt, die je nach Quelle und Zeitpunkt der Momentaufnahme deutlich schwankt. Übereinstimmend gilt irgendeine Erhöhung im Dezember als nahezu sicher.",
            ask: [{ label: "Was ist ein Basispunkt?", ref: "t:basispunkt" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Debatte laut Protokoll inzwischen weniger um die Frage „ob”, sondern stärker um das „wie stark” dreht, deckt sich mit den öffentlichen Äußerungen von Waller und Williams. Die Ankündigung von Fed-Chef Warsh, die Zahl der jährlichen Sitzungen zu reduzieren, ist laut Berichten eine strukturelle Reform unabhängig von der aktuellen Zinsdebatte." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1 bis 3, zur EZB-Zinsdebatte in Meldung 5, zu weiteren Konjunkturdaten in Meldung 6.",
      terms: ["inflation", "kerninflation", "leitzins", "basispunkt"],
      followups: ["e:inflation-what", "e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "Federal Reserve: Minutes of the Federal Open Market Committee, October 27–28, 2026", url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20261028.htm" },
        { title: "ABA Banking Journal: FOMC minutes show close call over possible rate hike", url: "https://bankingjournal.aba.com/2026/11/fomc-minutes-show-close-call-over-possible-rate-hike/" },
        { title: "Washington Post: Federal Reserve, inflation, rates", url: "https://www.washingtonpost.com/business/2026/11/18/federal-reserve-inflation-rates/" },
        { title: "InvestingLive: Warsh won't prejudge rest of 2026, names October and December as decision points", url: "https://investinglive.com/central-banks/warsh-won-t-prejudge-rest-of-2026-names-october-and-december-as-decision-points/" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB-ZINSDEBATTE/LAGARDE-NACHFOLGE */
    {
      id: "ezb-zinsdebatte-lagarde-nachfolge-knot-de-cos-11-19", cats: ["economy"], when: "Stand 18./19.11.2026 · EU-Gipfel 17./18.12.2026 · nächste EZB-Zinsentscheidung 17.12.2026",
      headline: "EZB-Rat signalisiert Dezember-Zinsschritt, Entscheidung über Lagardes Nachfolge rückt näher",
      sec30: "EZB-Chefin Christine Lagarde verlässt ihr Amt laut Berichten vorzeitig zum 7. Februar 2027. Aus dem EZB-Rat kommen laut Berichten deutliche Signale für eine weitere Zinserhöhung bei der nächsten Sitzung am 17. Dezember. Für die Nachfolge stehen offiziell der Niederländer Klaas Knot und der Spanier Pablo Hernández de Cos (seit 2025 Chef der Bank für Internationalen Zahlungsausgleich) zur Wahl; laut einem Bericht der Zeitung de Volkskrant könnte sich Knot zurückziehen, nachdem sich Deutschland und Frankreich informell auf de Cos verständigt haben sollen. Die Entscheidung soll beim EU-Gipfel am 17./18. Dezember fallen.",
      blocks: [
        { h: "Was sagte Lagarde zuletzt zur Zinspolitik?", items: [
          { tag: "position", text: "Lagarde sagte laut Berichten, sie könne eine Zinserhöhung im Dezember nicht garantieren, halte diese aber für die wahrscheinliche Richtung. Aus dem EZB-Rat kommen laut Berichten „deutliche Signale” für einen weiteren Zinsschritt bei der Sitzung am 17. Dezember.",
            ask: [{ label: "Warum erhöhen Notenbanken die Zinsen?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie steht es um Lagardes Nachfolge?", items: [
          { tag: "unbestaetigt", text: "Mehrere Quellen nennen als Rücktrittstermin den 7. Februar 2027; einzelne frühere Berichte hatten einen Termin im November genannt – das lässt sich hier nicht abschließend auflösen. Offiziell im Rennen sind Klaas Knot (Niederlande) und Pablo Hernández de Cos (Spanien). Laut einem Bericht der Zeitung de Volkskrant könnte sich Knot zurückziehen, nachdem sich Deutschland und Frankreich informell auf de Cos verständigt haben sollen; ein weiterer Bericht bestätigt, dass Berlin und Paris auf de Cos setzen. Die Entscheidung soll beim EU-Gipfel am 17./18. Dezember fallen.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:bund10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass EZB und Fed nahezu gleichzeitig im Dezember über weitere Zinserhöhungen entscheiden, während sich zugleich die EZB-Führung personell neu sortiert, erhöht laut Beobachtern die Unsicherheit darüber, wie die Zinspolitik im Euroraum über das Jahr 2026 hinaus fortgesetzt wird." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte in Meldung 4, zu deutschen und europäischen Konjunkturdaten in Meldung 6.",
      terms: ["leitzins", "inflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:yield-meaning"],
      sources: [
        { title: "Börsen-Zeitung: Lagardes Nachfolger erbt die Frage nach dem Zinsgipfel", url: "https://www.boersen-zeitung.de/konjunktur-politik/lagardes-nachfolger-erbt-die-frage-nach-dem-zinsgipfel" },
        { title: "cash-online: EZB-Spitze – Frankreich könnte de Cos statt Knot unterstützen", url: "https://www.cash-online.de/a/ezb-spitze-frankreich-koennte-de-cos-statt-knot-unterstuetzen-730438/" },
        { title: "aktiencheck.de: EZB-Präsidentschaft – Knot vor dem Rückzug, Berlin und Paris setzen auf de Cos", url: "https://aktiencheck.de/artikel/ezb-praesidentschaft-knot-vor-dem-rueckzug-berlin-und-paris-setzen-auf-de-cos" },
        { title: "finanzen.net: Lagarde deutet EZB-Zinsschritt im Dezember an", url: "https://www.finanzen.net/nachricht/aktien/lagarde-deutet-ezb-zinsschritt-im-dezember-an-16019107" }
      ]
    },
    /* 6 WIRTSCHAFT: IFO/PMI DEUTSCHLAND/EUROZONE */
    {
      id: "ifo-pmi-konjunktur-deutschland-eurozone-11-19", cats: ["economy", "germany"], when: "ifo-Index veröffentlicht 19.11.2026 · Flash-PMI November veröffentlicht 19.11.2026",
      headline: "Ifo-Geschäftsklima sinkt überraschend, Einkaufsmanagerindex zeigt moderates Wachstum bei schwacher Industrie",
      sec30: "Der ifo-Geschäftsklimaindex für Deutschland fiel im November überraschend auf 85,7 Punkte (Erwartung: 86,0), nach 86,5 im Oktober. Der vorläufige Einkaufsmanagerindex (PMI) für die Eurozone zeigte im November mit 52,4 Punkten weiterhin eine moderate Expansion der Gesamtwirtschaft, während die Industrie schwach bleibt: Der deutsche Industrie-PMI lag bei 48,4 Punkten (Kontraktion), der französische bei 47,8 Punkten – ein Neunmonatstief.",
      blocks: [
        { h: "Was zeigt der ifo-Index?", items: [
          { tag: "fakt", text: "Der ifo-Geschäftsklimaindex fiel im November auf 85,7 Punkte, nach 86,5 im Oktober und unter der Erwartung von 86,0 Punkten. Die Lagebeurteilung der Unternehmen sank auf 84,3 Punkte (von 85,7), die Erwartungskomponente gab leicht auf 87,2 Punkte nach (von 87,3).",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was zeigt der Einkaufsmanagerindex für die Eurozone?", items: [
          { tag: "fakt", text: "Der vorläufige Composite-PMI für die Eurozone lag im November bei 52,4 Punkten (Werte über 50 zeigen Wachstum an). Die Industrie bleibt dabei schwach: Der deutsche Industrie-PMI lag bei 48,4 Punkten, der französische bei 47,8 Punkten – laut Berichten ein Neunmonatstief für Frankreich.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "e:index-move" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass das ifo-Geschäftsklima überraschend sinkt, während der gesamtwirtschaftliche PMI für die Eurozone noch moderates Wachstum zeigt, deutet laut Beobachtern auf eine zunehmende Diskrepanz zwischen dem Dienstleistungssektor und der weiterhin schwachen Industrie hin. Das fällt zeitlich mit der Debatte über weitere EZB-Zinserhöhungen zusammen (mehr in Meldung 5).",
            ask: [{ label: "Mehr zur EZB-Zinsdebatte", ref: "s:5" }] }
        ]}
      ],
      reaction: "Mehr zur EZB-Zinsdebatte in Meldung 5, zur Fed-Zinsdebatte in Meldung 4.",
      terms: ["inflation"],
      followups: ["e:inflation-what", "e:inflation-expectations"],
      sources: [
        { title: "produktion.de: Ifo-Index sinkt überraschend im November", url: "https://www.produktion.de/wirtschaft/ifoindex-sinkt-ueberraschend-im-november/2147727" },
        { title: "S&P Global PMI: Pressemitteilung Flash PMI Eurozone November 2026", url: "https://www.pmi.spglobal.com/Public/Home/PressRelease/460d8e59c101498493559df807c62014" }
      ]
    },
    /* 7 DEUTSCHLAND: REAKTIONEN AUF STROMSTEUERSENKUNG */
    {
      id: "stromsteuer-reaktionen-koalition-11-19", cats: ["germany"], when: "Koalitionsbeschluss Nacht zum 18.11.2026 · Reaktionen 18./19.11.2026",
      headline: "Reaktionen auf die beschlossene Stromsteuersenkung: Zustimmung und Kritik an Umfang und Befristung",
      sec30: "Nach der Einigung des Koalitionsausschusses von Union und SPD auf eine Stromsteuersenkung zum 1.1.2027 auf den EU-Mindestsatz von 0,1 Cent pro Kilowattstunde äußern sich Länder-Ministerpräsidenten, Verbände und die Opposition unterschiedlich. Mehrere Stimmen kritisieren die Befristung der gesicherten Gegenfinanzierung auf das Jahr 2027, andere Landespolitiker und Verbände begrüßen den Schritt.",
      blocks: [
        { h: "Was wurde beschlossen und was ändert sich konkret?", items: [
          { tag: "fakt", text: "Der Koalitionsausschuss einigte sich darauf, die Stromsteuer zum 1.1.2027 von 2,05 Cent auf den EU-Mindestsatz von 0,1 Cent pro Kilowattstunde zu senken – auch für Privathaushalte. Die Gegenfinanzierung über erwartete Überschüsse des EEG-Kontos ist bislang nur für das Jahr 2027 gesichert.",
            ask: [{ label: "Was ist eine Umlage?", ref: "t:umlage" }] }
        ]},
        { h: "Wer unterstützt die Einigung und womit?", items: [
          { tag: "position", text: "Saarlands Ministerpräsidentin Anke Rehlinger (SPD) und NRW-Ministerpräsident Hendrik Wüst (CDU) bezeichneten die Einigung als Erfolg. Der Handelsverband Deutschland (HDE) wertete sie über seinen Vertreter Alexander von Preen als positives Signal an Verbraucher und Wirtschaft. Der Verband VDGN nannte die Senkung „mehr als überfällig”. Hamburgs Umweltsenatorin Katharina Fegebank (Grüne) sprach von einer „guten Nachricht”, wichtig unter anderem für Wärmepumpen und Elektroautos.",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] }
        ]},
        { h: "Wer kritisiert die Einigung und womit?", items: [
          { tag: "position", text: "Brandenburgs Ministerpräsident Dietmar Woidke (SPD) nannte die Befristung der Finanzierung auf ein Jahr „überschaubar”. Rheinland-Pfalz' CDU-Politiker Gordon Schneider forderte eine Senkung über 2027 hinaus, Hessens Ministerpräsident Boris Rhein (CDU) verlangte zusätzliche Entlastungen beim Heizen und Tanken. Grüne und Linke kritisierten laut Berichten vor allem die Befristung und forderten zusätzlich sinkende Netzentgelte. Vizekanzler Lars Klingbeil (SPD) verteidigte die Begrenzung mit den Worten, die Koalition mache nur das, was sie „seriös finanzieren” könne.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "In der Debatte geht es vor allem darum, ob die Entlastung über das Jahr 2027 hinaus finanziell absicherbar ist; Ökonomen äußern laut Berichten Zweifel, ob die Finanzierung über das EEG-Konto dauerhaft trägt. Der Verbraucherzentrale Bundesverband begrüßte den Schritt über seine Vertreterin Ramona Pop, forderte aber eine dauerhafte Absicherung." }
        ]}
      ],
      reaction: "Mehr zur gleichzeitig vertagten Rentenreform und zum Bundeshaushalt 2027 in Meldung 8.",
      terms: ["umlage", "koalition", "schuldenbremse"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "Tagesspiegel/dpa: Koalitionsausschuss – Merz drückt Stromsteuersenkung durch, aber nur halb", url: "https://www.tagesspiegel.de/politik/dpa-koalitionsausschuss-merz-druckt-stromsteuersenkung-durch-aber-nur-halb-16296829.html" },
        { title: "Epoch Times: Stromsteuersenkung – Lob aus der Wirtschaft, Kritik von SPD und Opposition", url: "https://www.epochtimes.de/politik/deutschland/stromsteuersenkung-lob-aus-der-wirtschaft-kritik-von-spd-und-opposition-a5666836.html" },
        { title: "VDGN: Senkung der Stromsteuer war mehr als überfällig", url: "https://www.vdgn.de/aktuelles/senkung-der-stromsteuer-war-mehr-als-ueberfaellig/" }
      ]
    },
    /* 8 DEUTSCHLAND: RENTENREFORM VERTAGT/BUNDESHAUSHALT 2027 */
    {
      id: "rentenreform-vertagt-bundeshaushalt-2027-11-19", cats: ["germany"], when: "Koalitionsausschuss Nacht zum 18.11.2026 (Rente vertagt) · Haushaltsausschuss 13.11.2026 · Bundestag-Schlussabstimmung geplant 27.11.2026",
      headline: "Rentenreform auf Dezember vertagt, Bundeshaushalt 2027 mit höherer Neuverschuldung passiert Ausschuss",
      sec30: "Bei der Rentenreform einigte sich der Koalitionsausschuss in der Nacht zum 18.11. nicht; die Entscheidung über die „Rente mit 63” soll laut Berichten erst im Dezember im Kabinett fallen. Parallel billigte der Haushaltsausschuss am 13.11. den Bundeshaushalt 2027 mit rund 560,92 Mrd. Euro Ausgaben und einer Gesamtneuverschuldung von rund 210 Mrd. Euro; die für die Schuldenbremse relevante Kreditaufnahme liegt bei 38,43 Mrd. Euro – nach Angaben des Ausschusses exakt an der zulässigen Obergrenze. Die Schlussabstimmung im Bundestag ist für den 27.11. vorgesehen.",
      blocks: [
        { h: "Was wurde bei der Rentenreform vorgeschlagen und was bleibt offen?", items: [
          { tag: "fakt", text: "Strittig bleibt die abschlagsfreie Rente nach 45 Beitragsjahren („Rente mit 63”). Als möglicher Kompromiss wird diskutiert, nicht die Regelung selbst abzuschaffen, sondern die Anrechnung zu verschärfen: Arbeitslosigkeits- und Pflegezeiten sollen demnach künftig nicht mehr mitzählen, Kindererziehungszeiten laut Berichten vermutlich weiterhin. Das Kabinett soll die Entscheidung am 9. oder 16. Dezember treffen.",
            ask: [{ label: "Wie hängt die Rentenreform mit den Umfragen zusammen?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Was wurde beim Bundeshaushalt 2027 beschlossen?", items: [
          { tag: "fakt", text: "Der Haushaltsausschuss billigte am 13.11. einen Bundeshaushalt 2027 mit rund 560,92 Mrd. Euro Ausgaben (+6,9 % ggü. dem 2026er-Soll). Die Gesamtneuverschuldung (inklusive Sondervermögen) liegt bei rund 210 Mrd. Euro, davon rund 122,97 Mrd. Euro Kreditaufnahme im Kernhaushalt (2026: 97,96 Mrd. Euro). Die für die Schuldenbremse relevante Kreditaufnahme liegt laut Ausschuss bei 38,43 Mrd. Euro – exakt an der verfassungsrechtlich zulässigen Obergrenze. Die Schlussabstimmung im Bundestag ist für Freitag, 27.11., vorgesehen.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Wer kritisiert die Haushaltsplanung?", items: [
          { tag: "position", text: "Der Bundesrechnungshof warnte laut Berichten vor den steigenden Schulden und forderte Einsparungen bei Subventionen.",
            ask: [{ label: "Was bedeutet die Schuldenbremse konkret?", ref: "e:debt-brake" }] }
        ]},
        { h: "Was bedeutet das im Zusammenhang?", items: [
          { tag: "einordnung", text: "Dass die Rentenreform erneut vertagt wurde, während der Haushalt 2027 bereits mit einer Kreditaufnahme exakt an der Schuldenbremsen-Obergrenze beschlossen wurde, zeigt laut Beobachtern den begrenzten finanziellen Spielraum für weitere große Sozialreformen. Aktuelle Umfragen (YouGov, Forsa, INSA) sehen die AfD zwischen 26 und 29 %, die Union zwischen 19 und 22 % – die aktuelle Koalition hätte danach weiterhin keine Bundestagsmehrheit, was laut Beobachtern den Einigungsdruck auf Union und SPD erhöht.",
            ask: [{ label: "Mehr zur Rentenreform", ref: "e:rente-basics" }] }
        ]}
      ],
      reaction: "Mehr zur Stromsteuersenkung in Meldung 7.",
      terms: ["schuldenbremse", "koalition"],
      followups: ["e:rente-basics", "e:coalition-majority", "e:debt-brake", "e:landtagswahl-why"],
      sources: [
        { title: "aktiencheck.de: Rente mit 63 – Koalition vertagt Entscheidung auf Dezember, Kabinett am 9. oder 16.", url: "https://aktiencheck.de/artikel/rente-mit-63-koalition-vertagt-entscheidung-auf-dezember-kabinett-am-9-oder-16" },
        { title: "WirtschaftsWoche: Bundeshaushalt 2027 steht – Neuverschuldung steigt auf 210 Milliarden Euro", url: "https://www.wiwo.de/politik/deutschland/bundeshaushalt-2027-steht-neuverschuldung-steigt-auf-210-milliarden-euro/100269598.html" },
        { title: "aktiencheck.de: Bundeshaushalt 2027 – 561 Milliarden Euro, 123 Milliarden neue Schulden", url: "https://aktiencheck.de/artikel/bundeshaushalt-2027-561-milliarden-euro-123-milliarden-neue-schulden-110" },
        { title: "kurierverlag.de: Umfrage – AfD wieder deutlicher vor Union", url: "https://www.kurierverlag.de/politik/umfrage-afd-wieder-deutlicher-vor-union-zr-94588061.html" }
      ]
    },
    /* 9 GEOPOLITIK: XI-TRUMP-PUTIN-GIPFEL SHENZHEN */
    {
      id: "xi-trump-putin-gipfel-shenzhen-ukraine-11-19", cats: ["world", "geo"], when: "Gipfeltreffen am Rande des APEC-Gipfels, Shenzhen, 18./19.11.2026",
      headline: "Xi, Trump und Putin treffen sich in Shenzhen – keine Annäherung zur Ukraine, Gespräche zu Handel und nuklearer Stabilität",
      sec30: "Am Rande des APEC-Gipfels in Shenzhen kam es zum ersten trilateralen Treffen von Xi Jinping, Donald Trump und Wladimir Putin: zunächst ein bilaterales Trump-Putin-Gespräch (rund 42 Minuten), danach Trump-Xi (rund eine Stunde) und schließlich eine rund anderthalbstündige trilaterale Sitzung. Ukrainische Vertreter waren nicht anwesend. Laut Kreml-Angaben ging es um „strategische Stabilität” und die Aussage, es gebe „keine Sieger in einem Atomkrieg”; zum Ukraine-Krieg erklärte Putin, nach den jüngsten ukrainischen Angriffen auf die Kertsch-Brücke seien Verhandlungen vorerst blockiert. Mit Xi sprach Trump laut Berichten vor allem über Handel und US-Agrarexporte.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Das Treffen fand am Rande des APEC-Gipfels in Shenzhen statt. Es gab zunächst getrennte bilaterale Gespräche (Trump-Putin rund 42 Minuten, Trump-Xi rund eine Stunde), dann eine rund anderthalbstündige trilaterale Sitzung. Ukrainische Vertreter nahmen nicht teil." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Es ist laut Berichten das erste Mal, dass sich die Staatschefs der drei Länder gemeinsam an einen Tisch setzen, während gleichzeitig am Golf ein von den USA mitgetragener Krieg gegen Iran läuft (mehr in Meldung 10) und der Krieg in der Ukraine andauert. Ein greifbares Ergebnis zur Ukraine blieb nach Angaben aller Seiten aus." }
        ]},
        { h: "Wer ist beteiligt und was wurde besprochen?", items: [
          { tag: "position", text: "Laut Kreml-Angaben bekräftigten die drei Seiten das Prinzip der „strategischen Stabilität” und die Aussage, es gebe „keine Sieger in einem Atomkrieg”; zudem wurde laut Kreml eine UN-Reform angemahnt und vor Schritten des Internationalen Strafgerichtshofs gewarnt. Putin erklärte laut Berichten, Kyjiw und Europa seien nach den jüngsten ukrainischen Angriffen auf die Kertsch-Brücke „noch nicht bereit” für Verhandlungen. Mit Xi ging es laut Berichten auch um Zölle, US-Agrarimporte, Iran und nukleare Abrüstung; Xi warnte laut Berichten vor „Turbulenzen” beim Thema Taiwan.",
            ask: [{ label: "Mehr zur Lage am Golf", ref: "s:10" }] }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "einordnung", text: "Russland und der Iran stehen seit Jahren in einem von den USA angeführten Sanktionsregime; der seit Ende Februar 2026 laufende Krieg zwischen den USA/Israel und Iran sowie der seit 2022 andauernde Krieg in der Ukraine prägen seither die Beziehungen zwischen den drei Ländern." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "unbestaetigt", text: "Berichte erwähnten Zusagen zur Steigerung der Öl- und Gasförderung im Zusammenhang mit dem Treffen; wie konkret diese Zusagen sind und ob sie sich im Ölpreis niederschlagen, ließ sich aus den ausgewerteten Quellen nicht abschließend klären. In Berlin fand parallel ein von Bundeskanzler Friedrich Merz, Frankreichs Präsident Emmanuel Macron und UK-Premier Andy Burnham einberufenes Treffen der „Koalition der Willigen” zur Ukraine statt; EU-Kommissionschefin Ursula von der Leyen schlug dabei laut Berichten einen 45-Mrd.-Euro-Kredit für die Ukraine vor.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zur militärischen Eskalation am Golf in Meldung 10.",
      terms: [],
      followups: ["chain:oil-to-markets"],
      sources: [
        { title: "CBS News: Trump, Xi and Putin meet at APEC summit in Shenzhen", url: "https://www.cbsnews.com/news/trump-xi-putin-china-apec-summit/" },
        { title: "NPR: Trump, Xi and Putin in Shenzhen", url: "https://www.npr.org/2026/11/18/nx-s1-6040432/trump-xi-and-putin-shenzhen-china-russia-usa" },
        { title: "CNBC: Trump, Xi, Putin – Ukraine, nuclear, tariffs, Russia, Iran", url: "https://www.cnbc.com/2026/11/16/trump-xi-putin-ukraine-nuclear-tariffs-russia-iran-.html" },
        { title: "deutschland.de: Merz hosts meeting of the Coalition of the Willing in Berlin", url: "https://www.deutschland.de/en/news/merz-hosts-meeting-of-the-coalition-of-the-willing-in-berlin" }
      ]
    },
    /* 10 GEOPOLITIK: ESKALATION AM GOLF/STRASSE VON HORMUS */
    {
      id: "golf-eskalation-hormus-iran-kuwait-bahrain-11-19", cats: ["geo", "world"], when: "Angriffe 18./19.11.2026 · UN-Resolution 2817 vom 11.3.2026 als Hintergrund",
      headline: "Iran weitet Angriffe auf US-Stützpunkt in Kuwait und Ziele in Bahrain aus, Tanker-Zwischenfälle bei Hormus unbestätigt",
      sec30: "Nach dem US-Luftschlag auf eine Raketenstellung auf der iranischen Insel Qeshm griff Iran laut Berichten die US-Luftwaffenbasis Ali Al Salem in Kuwait sowie erneut Ziele in Bahrain an; Kuwait und Bahrain meldeten Abfangungen ohne größere Schäden. Irans Marine berichtete von drei brennenden Öltankern östlich der Straße von Hormus nach angeblichen Minentreffern – unabhängig nicht bestätigt. Der Brent-Ölpreis bewegte sich bei rund 92 Dollar je Barrel.",
      blocks: [
        { h: "30 Sekunden", items: [
          { tag: "fakt", text: "Iran griff laut Berichten die US-Luftwaffenbasis Ali Al Salem in Kuwait sowie erneut Ziele in Bahrain an – als Vergeltung für den vorherigen US-Schlag auf eine Raketenstellung auf der iranischen Insel Qeshm. Kuwait und Bahrain meldeten, die Angriffe abgefangen zu haben, ohne größere Schäden." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Die Straße von Hormus ist eine der wichtigsten Öltransportrouten der Welt; eine weitere Eskalation mit mehr betroffenen Golfstaaten erhöht laut Beobachtern das Risiko für die Versorgungssicherheit, auch wenn der Ölpreis aktuell zusätzlich durch ein von der IEA erwartetes globales Angebotsüberangebot gedrückt wird (mehr in Meldung 15).",
            ask: [{ label: "Mehr zu Öl und Gas", ref: "s:15" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Beteiligt sind die USA, Iran sowie die Golfstaaten Kuwait und Bahrain; der UN-Sicherheitsrat hatte mit Resolution 2817 vom 11. März 2026 (13:0 Stimmen, Russland und China enthielten sich) iranische Angriffe auf Nachbarstaaten verurteilt. Der Golf-Kooperationsrat (GCC) meldete seit Kriegsbeginn mehr als 7.000 iranische Raketen und Drohnen gegen Golfstaaten.",
            ask: [{ label: "Was sind Ölfutures?", ref: "t:oil-future" }] }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der aktuelle Krieg zwischen den USA/Israel und Iran läuft seit Ende Februar 2026; zu den Ereignissen zählte laut früheren Berichten auch die Tötung des iranischen Machthabers Ali Khamenei." }
        ]},
        { h: "Wirtschaftliche Auswirkungen", items: [
          { tag: "unbestaetigt", text: "Irans Marine meldete drei brennende Öltanker östlich von Hormus nach angeblichen Minentreffern; das US-Zentralkommando (CENTCOM) hat dies wie zuvor nicht bestätigt. Der Brent-Preis bewegte sich dennoch nur moderat bei rund 92 Dollar je Barrel, da laut IEA für das vierte Quartal 2026 gleichzeitig ein globales Angebotsüberangebot erwartet wird (mehr in Meldung 15).",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]}
      ],
      reaction: "Mehr zum Treffen von Xi, Trump und Putin in Meldung 9, zu Öl und Gas in Meldung 15.",
      terms: ["brent", "oil-future"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:brent-wti", "chain:oil-to-markets"],
      sources: [
        { title: "Korea Times: Iran widens Gulf attacks by targeting a US air base in Kuwait and sites in Bahrain", url: "https://www.koreatimes.co.kr/world/20261119/iran-widens-gulf-attacks-by-targeting-a-us-air-base-in-kuwait-and-sites-in-bahrain" },
        { title: "Gulf News: Middle East war – Iran attacks Bahrain, Kuwait, drone threats keep Gulf on high alert as US hits Iran's Qeshm", url: "https://gulfnews.com/world/mena/middle-east-war-iran-attacks-bahrain-kuwait-drone-threats-keep-gulf-on-high-alert-as-us-hits-irans-qeshm-1.500751444" },
        { title: "Al Arabiya: Three oil tankers catch fire after hitting naval mines east of Strait of Hormuz, report", url: "https://english.alarabiya.net/News/middle-east/2026/11/19/three-oil-tankers-catch-fire-after-hitting-naval-mines-east-of-strait-of-hormuz-report" },
        { title: "UN Press: Security Council press release SC/16315", url: "https://press.un.org/en/2026/sc16315.doc.htm" },
        { title: "CNBC: Oil, Brent, WTI – price and Hormuz", url: "https://www.cnbc.com/amp/2026/11/19/oil-brent-wti-price-hormuz.html" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL/KNDS/SAFE */
    {
      id: "ruestungsindustrie-rheinmetall-knds-safe-11-19", cats: ["defence"], when: "Stand 19.11.2026 · SAFE-Antragsfrist 30.11.2026",
      headline: "Rheinmetall-Aktie fällt auf neues Jahrestief, TKMS erhält Fregatten-Auftrag, KNDS-Bund-Einstieg weiterhin ohne bestätigte Unterschrift",
      sec30: "Die Rheinmetall-Aktie fiel am Donnerstag auf ein neues 52-Wochen-Tief von rund 731,80 Euro, nachdem mehrere Analysten ihre Kursziele gesenkt hatten – unter anderem mit der These, Drohnen könnten die Kriegsführung so verändern, dass das Artilleriemunitionsgeschäft ab 2030 schrumpft. TKMS erhielt einen Auftrag über vier zusätzliche Fregatten für die Deutsche Marine im Wert von laut Verteidigungsministerium rund 5,3 Mrd. Euro. Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS war zum Redaktionsschluss weiterhin nicht ausdrücklich als unterschrieben bestätigt.",
      blocks: [
        { h: "Wie entwickelten sich die Rüstungsaktien?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie fiel am Donnerstag zeitweise auf 730,70 Euro, mittags auf rund 731,80 Euro (-1,49 % bzw. -11,10 Euro) – ein neues 52-Wochen-Tief und der niedrigste Stand seit Februar 2025. Goldman Sachs senkte sein Kursziel von 2.100 auf 1.350 Euro (behält aber die Einstufung „Kaufen”), Bernstein Research senkte es auf 950 Euro.",
            ask: [{ label: "Mehr zu Rheinmetalls Geschäftsentwicklung", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was nennen Analysten als Grund?", items: [
          { tag: "position", text: "Laut Bernstein Research könnten Drohnen die Kriegsführung so verändern, dass das Artilleriemunitionsgeschäft von Rheinmetall ab 2030 schrumpfen oder stagnieren könnte. Rheinmetall hatte Anfang November bereits seine Jahresprognose wegen verzögerter Großaufträge gesenkt, meldete aber für die ersten neun Monate 2026 einen um 38 % auf rund 8,4 Mrd. Euro gestiegenen Umsatz.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "e:index-move" }] }
        ]},
        { h: "Welche neuen Aufträge gibt es?", items: [
          { tag: "fakt", text: "TKMS erhielt den Auftrag über vier zusätzliche Fregatten vom Typ MEKO A-200 DEU für die Deutsche Marine, den das Bundesverteidigungsministerium mit rund 5,3 Mrd. Euro kalkuliert. Hensoldt meldete einen Auftrag von GDELS über knapp 1 Mrd. Euro, RENK einen Auftrag des niederländischen Heeresinstandsetzungskommandos AMLC für Prüfsysteme für Militärfahrzeuge. Trotz der Aufträge gaben die Aktien von TKMS, Rheinmetall, RENK und Hensoldt laut Berichten zeitweise nach.",
            ask: [{ label: "Mehr zum NATO-Rüstungsziel", ref: "e:nato-target" }] }
        ]},
        { h: "Wie steht es um den KNDS-Bund-Einstieg und die SAFE-Mittel?", items: [
          { tag: "unbestaetigt", text: "Der für rund 6,6 Mrd. Euro geplante 50-Prozent-Einstieg des Bundes bei KNDS, auf den sich Bund und die Eigentümerfamilie Wegmann laut Berichten bereits grundsätzlich verständigt hatten, war zum Redaktionsschluss weiterhin nicht ausdrücklich als final unterschrieben bestätigt; der Vollzug wurde für Dezember erwartet. Beim EU-Verteidigungsprogramm SAFE waren Anfang November 16,4 Mrd. Euro an 2026er-Mitteln ausgezahlt; die Antragsfrist für die zweite Runde über 21,3 Mrd. Euro läuft bis zum 30.11." }
        ]}
      ],
      reaction: "Mehr zur Lage am Golf in Meldung 10.",
      terms: [],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks", "e:ma-steps"],
      sources: [
        { title: "ms-aktuell.de: Rheinmetall-Aktie 19.11.2026", url: "https://ms-aktuell.de/welt/rheinmetall-aktie-19-11-2026/" },
        { title: "finanzen.ch: Rheinmetall-Aktie Kursbewegung 19.11.2026", url: "https://www.finanzen.ch/nachrichten/aktien/rheinmetall-aktie-kursbewegung-19-11-2026-1035060931" },
        { title: "aktiencheck.de: Rheinmetall-Aktie – Bernstein senkt Kursziel auf 950 Euro, welche Rolle Drohnen spielen", url: "https://aktiencheck.de/artikel/rheinmetall-aktie-bernstein-senkt-kursziel-auf-950-euro-welche-rolle-drohnen" },
        { title: "finanzen.at: TKMS erhält Fregatten-Auftrag für die Deutsche Marine, Aktie dennoch schwächer", url: "https://www.finanzen.at/nachrichten/aktien/tkms-erhalt-fregatten-auftrag-fuer-die-deutsche-marine-aktie-dennoch-schwacher-rheinmetall-renk-und-hensoldt-verlieren-ebenfalls-1036773154" },
        { title: "grosswald.org: SAFE defence loans tracker", url: "https://www.grosswald.org/safe-defence-loans-tracker/" }
      ]
    },
    /* 12 DEALS: MARVELL-LUMENTUM */
    {
      id: "marvell-lumentum-fusion-update-11-19", cats: ["deals"], when: "Stand 19.11.2026 · Abschluss für H1 2028 erwartet",
      headline: "Marvell-Aktie bleibt volatil, Merger-Arbitrage-Spread bei der Lumentum-Übernahme nahe 50 Prozent",
      sec30: "Die Marvell-Aktie schwankte am Donnerstag zwischen rund 142,62 und 154,06 Dollar und lag je nach Quelle zwischen 143,50 und 151,59 Dollar. Bei einem festen Umtauschverhältnis von 4,5 Marvell-Aktien je Lumentum-Aktie bestimmt der Marvell-Kurs direkt den rechnerischen Wert des Übernahmeangebots für Lumentum-Aktionäre. Laut Berichten liegt der Merger-Arbitrage-Spread – die Differenz zwischen aktuellem Marktpreis und rechnerischem Angebotswert – weiterhin bei rund 50 Prozent.",
      blocks: [
        { h: "Wie entwickelte sich die Marvell-Aktie?", items: [
          { tag: "fakt", text: "Die Marvell-Aktie bewegte sich am Donnerstag in einer Spanne von 142,62 bis 154,06 Dollar; einzelne Quellen nennen einen zeitweiligen Rückgang auf 143,50 Dollar (-3,5 % im Frühhandel), andere einen Stand um 151,49 Dollar (-2,51 %). Die Aktie hatte sich zuvor von einem rund 50-prozentigen Kursrückgang seit ihrem Juni-Hoch teilweise erholt, bleibt aber unter Druck durch mehrere Analysten-Abstufungen (u. a. von BofA und TD Cowen).",
            ask: [{ label: "Was ist ein Unternehmenswert (Enterprise Value)?", ref: "t:enterprise-value" }] }
        ]},
        { h: "Was bedeutet das für Lumentum-Aktionäre?", items: [
          { tag: "einordnung", text: "Bei einem festen Umtauschverhältnis von 4,5 Marvell-Aktien je Lumentum-Aktie hängt der rechnerische Wert des Angebots direkt vom Marvell-Kurs ab: Multipliziert man einen Marvell-Kurs von rund 151 Dollar mit 4,5, ergibt sich ein rechnerischer Wert von rund 680 Dollar je Lumentum-Aktie – das ist eine eigene Berechnung auf Basis des bekannten Umtauschverhältnisses, keine direkte Quellenangabe. Der ursprünglich bei Ankündigung genannte Wert lag bei rund 1.132 Dollar je Aktie.",
            ask: [{ label: "Mehr zum Merger-Arbitrage-Spread", ref: "e:deal-risks" }] }
        ]},
        { h: "Was ist ein Merger-Arbitrage-Spread und warum bleibt er hoch?", items: [
          { tag: "fakt", text: "Laut Berichten liegt der Merger-Arbitrage-Spread bei der Übernahme weiterhin bei rund 50 Prozent – ein Hinweis darauf, dass der Markt dem Abschluss des zum Zeitpunkt der Ankündigung sehr werthaltigen Deals zu den ursprünglichen Konditionen weiterhin mit Skepsis begegnet. Der Deal-Abschluss wird für das erste Halbjahr 2028 erwartet.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "t:lbo" }] }
        ]}
      ],
      reaction: "Mehr zu Private-Credit-Nachrichten in Meldung 13.",
      terms: ["enterprise-value", "ebitda", "closing"],
      followups: ["e:deal-risks", "e:ev-ebitda", "e:lbo"],
      deal: { value: "115 Mrd. $ Enterprise Value (ursprünglich rund 1.132 $ je Lumentum-Aktie bei Ankündigung)", buyer: "Marvell Technology", target: "Lumentum Holdings", sector: "Halbleiter / optische Komponenten", type: "Aktien-für-Aktien-Fusion, festes Umtauschverhältnis 4,5:1" },
      sources: [
        { title: "Blockchain.News: Price prediction MRVL – Lumentum deal resets the debate", url: "https://blockchain.news/news/20261119-price-prediction-mrvl-lumentum-deal-resets-the-debate-as" },
        { title: "Benzinga: Marvell stock reverses early gains as chipmakers weigh Nvidia earnings against export risks", url: "https://www.benzinga.com/markets/tech/26/11/63404046/marvell-stock-reverses-early-gains-as-chipmakers-weigh-nvidia-earnings-against-export-risks" },
        { title: "DefenseWorld: Marvell Technology (NASDAQ:MRVL) shares down 2,2% on insider selling", url: "https://www.defenseworld.net/2026/11/19/marvell-technology-nasdaqmrvl-shares-down-2-2-on-insider-selling.html" }
      ]
    },
    /* 13 PRIVATE CREDIT: MORGAN STANLEY/FULLSCRIPT */
    {
      id: "private-credit-morgan-stanley-fullscript-default-raten-11-19", cats: ["credit"], when: "Kredit-Deal gemeldet 17.11.2026 · Default-Raten Q3/Oktober 2026",
      headline: "Private-Credit-Fonds übernehmen gehängten 1,3-Milliarden-Dollar-Kredit von Morgan Stanley, Ausfallraten gehen leicht zurück",
      sec30: "Private-Credit-Firmen (Antares Capital, Blue Owl Capital, Carlyle, Golub Capital) übernahmen einen 1,3-Mrd.-Dollar-Kredit zur Finanzierung von L Cattertons Übernahme von Fullscript, nachdem Morgan Stanley ihn nicht am syndizierten Markt platzieren konnte. Der Proskauer Private Credit Default Index fiel im dritten Quartal 2026 auf 2,41 Prozent (von 2,51 % im zweiten Quartal), Fitch meldet für Oktober eine rollierende Zwölf-Monats-Ausfallrate bei Direct-Lending-Krediten von 6,2 Prozent.",
      blocks: [
        { h: "Was ist bei dem Fullscript-Kredit passiert?", items: [
          { tag: "fakt", text: "Private-Credit-Firmen – Antares Capital, Blue Owl Capital, Carlyle und Golub Capital – übernahmen einen 1,3-Mrd.-Dollar-Kredit zur Finanzierung der Übernahme von Fullscript durch L Catterton, nachdem Morgan Stanley den Kredit nicht am syndizierten Markt platzieren konnte. Die Konditionen: Preisaufschlag von 400 Basispunkten auf SOFR, Ausgabe zu 0,96 Dollar je Dollar Nennwert; zusätzlich stellte Morgan Stanley einen 230-Mio.-Dollar-Revolver bereit.",
            ask: [{ label: "Was ist SOFR?", ref: "t:sofr" }] }
        ]},
        { h: "Wie haben sich die Ausfallraten entwickelt?", items: [
          { tag: "fakt", text: "Der Proskauer Private Credit Default Index fiel im dritten Quartal 2026 auf 2,41 % (nach 2,51 % im zweiten Quartal) – der zweite Rückgang in Folge. KBRA erwartet für das Gesamtjahr 2026 eine Direct-Lending-Ausfallrate von rund 2,5 % (gegenüber rund 3,5 % bei syndizierten Leveraged Loans). Fitch meldet für Oktober eine rollierende Zwölf-Monats-Ausfallrate von 6,2 % (Vormonat: 6,3 %).",
            ask: [{ label: "Was ist eine Ausfallrate?", ref: "t:default-rate" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Private-Credit-Fonds einen von einer großen Bank nicht platzierbaren Kredit übernehmen, zeigt erneut, wie Private Credit als Ventil für Banken dient, wenn sich Kredite nicht am traditionellen syndizierten Markt verkaufen lassen. Die leicht rückläufigen Ausfallraten deuten laut Berichten auf eine gewisse Stabilisierung des Markts hin, auch wenn das Niveau historisch weiterhin erhöht bleibt.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "Mehr zur Marvell-Lumentum-Fusion in Meldung 12, zur Fed-Zinsdebatte in Meldung 4.",
      terms: ["sofr", "credit-spread", "basispunkt", "direct-lending", "non-accrual", "default-rate"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:credit-spread-why", "e:pc-rates", "e:nonaccrual-default", "chain:rates-to-credit"],
      widget: "sofr",
      sources: [
        { title: "Bloomberg: Private credit helps Morgan Stanley avoid $1.3 billion hung loan", url: "https://www.bloomberg.com/news/articles/2026-11-17/private-credit-helps-morgan-stanley-avoid-1-3-billion-hung-loan" },
        { title: "Legal500/Proskauer: Proskauer's Private Credit Default Index reveals rate of 2.41% for Q3 2026", url: "https://legal500.com/intelligence/united-states/finance-and-banking/proskauers-private-credit-default-index-reveals-rate-of-241-for-q3-2026" },
        { title: "Investment Executive/Fitch: U.S. private credit defaults ease in October", url: "https://investmentexecutive.com/news/research-and-markets/u-s-private-credit-defaults-ease-in-october-fitch" }
      ]
    },
    /* 14 TECHNOLOGIE: ANTHROPIC-IPO/NVIDIA-NACHWIRKUNGEN */
    {
      id: "anthropic-ipo-nasdaq-debuet-nvidia-nachwirkungen-11-19", cats: ["tech"], when: "IPO-Preisfeststellung Mi 18.11.2026, Abend · Handelsstart Nasdaq Do 19.11.2026",
      headline: "Anthropic startet als größter Börsengang der Geschichte an der Nasdaq, Nvidia-Aktie bleibt nach Rekordquartal unter Druck",
      sec30: "Anthropic preiste seinen Börsengang am Mittwochabend bei 83 Dollar je Aktie – über der zuvor genannten Spanne von 70 bis 78 Dollar – und sammelte dabei rund 81,3 Mrd. Dollar ein, bei einer Bewertung von rund 1,5 Billionen Dollar. Damit ist es laut Berichten der größte Börsengang der Geschichte, vor dem von SpaceX. Der Handelsstart unter dem Ticker „ANT” an der Nasdaq war für Donnerstag angesetzt; vor Handelsbeginn deutete der Graumarkt auf einen Aufschlag von rund 20 bis 27 % hin. Nvidia blieb trotz der am Dienstag gemeldeten Rekordzahlen unter Druck: Die Aktie fiel am Mittwoch um 2,9 % und büßte binnen einer Woche gut 13 % ein.",
      blocks: [
        { h: "Wie verlief die Anthropic-Preisfeststellung?", items: [
          { tag: "fakt", text: "Anthropic preiste sein Börsengang am Mittwochabend (US-Zeit) bei 83 Dollar je Aktie – über der zuvor kommunizierten Spanne von 70 bis 78 Dollar. Verkauft wurden rund 980 Mio. Aktien, der Erlös liegt bei rund 81,3 Mrd. Dollar, die Bewertung bei rund 1,5 Billionen Dollar (voll verwässert). Laut Berichten lagen die institutionellen Orders bei rund 400 Mrd. Dollar, die Retail-Orders bei fast 100 Mrd. Dollar – zusammen rund das Siebenfache des Angebots.",
            ask: [{ label: "Was ist ein Börsengang (IPO)?", ref: "t:ipo" }] }
        ]},
        { h: "Wie verlief der Handelsstart?", items: [
          { tag: "unbestaetigt", text: "Der Handelsstart unter dem Ticker „ANT” an der Nasdaq war für Donnerstag angesetzt, verzögerte sich aber wie bei Börsengängen dieser Größe üblich durch die längere Eröffnungsauktion. Der Graumarkt-Handel deutete vor Handelsbeginn auf einen Aufschlag von rund 20 bis 27 % gegenüber dem Ausgabepreis hin; ein tatsächlicher Schlusskurs für den ersten Handelstag lag zum Redaktionsschluss noch nicht vor.",
            ask: [{ label: "Mehr zu DAX und Euro Stoxx 50", ref: "s:1" }] }
        ]},
        { h: "Wie entwickelte sich Nvidia nach den Rekordzahlen?", items: [
          { tag: "fakt", text: "Trotz des am Dienstag gemeldeten Rekordumsatzes von 115,84 Mrd. Dollar (über dem Konsens von 109,1 Mrd. Dollar) und einer Umsatzprognose von 130 Mrd. Dollar für das laufende Quartal fiel die Nvidia-Aktie am Mittwoch um 2,9 % – die anfängliche nachbörsliche Rallye von +4,8 % wurde damit vollständig ausgelöscht. Binnen einer Woche verlor die Aktie gut 13 %. An deutschen Handelsplätzen (Tradegate) zeigte sich die Aktie am Donnerstag mit rund +1,4 % auf etwa 139 Euro moderat erholt.",
            ask: [{ label: "Mehr zu den US-Futures", ref: "s:2" }] }
        ]},
        { h: "Was ist bei Nvidias China-Geschäft und der SEC-Ermittlung neu?", items: [
          { tag: "fakt", text: "Interims-CEO Colette Kress bestätigte im Earnings-Call, dass Nvidia keine lizenzierten H200-Rechenzentrumschips mehr nach China liefert – das beendet die zuvor von Jensen Huang mit der Trump-Regierung ausgehandelte Vereinbarung samt 25-Prozent-Zoll auf solche Lieferungen. Laut Berichten lagerten bereits rund 600.000 unabgenommene H200-Chips in Hongkong, da China die Abnahme zuvor verweigert hatte. Die SEC ermittelt laut Berichten zivilrechtlich, ob Nvidias Angaben im Zusammenhang mit Huangs Abgang den Investoren ein akkurates Bild vermittelten.",
            ask: [{ label: "Was sind kundenspezifische Chips?", ref: "e:custom-chips" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Anthropic trotz der unsicheren Marktlage den größten Börsengang der Geschichte hinlegt, während Nvidia trotz Rekordzahlen unter Druck bleibt, zeigt laut Beobachtern, wie unterschiedlich der Markt einzelne KI-Unternehmen aktuell bewertet – Wachstumserwartungen bei Anthropic gegen Unsicherheit um Führung und China-Geschäft bei Nvidia. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zu den Märkten", ref: "chain:nasdaq-why" }] }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1 und 2.",
      terms: ["ipo"],
      followups: ["e:ai-capex", "e:circular-financing", "e:custom-chips"],
      sources: [
        { title: "TechCrunch: Anthropic reportedly prices IPO at $83 a share, above projected range", url: "https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/" },
        { title: "CNBC: Anthropic IPO raises over $81 billion in largest offering on record, topping SpaceX", url: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html" },
        { title: "PYMNTS: Anthropic sets record with $81.3 billion share sale before Nasdaq debut", url: "https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-sets-record-with-81-3-billion-share-sale-before-nasdaq-debut/" },
        { title: "The Motley Fool: Stock market today, Nov. 18 – Nvidia slips on strong results as succession and China business risks weigh", url: "https://www.fool.com/coverage/stock-market-today/2026/11/18/stock-market-today-nov-18-nvidia-slips-on-strong-results-as-succession-and-china-business-risks-weigh/" },
        { title: "TechCrunch: SEC reportedly investigating Nvidia amid Huang exit", url: "https://techcrunch.com/2026/11/17/sec-reportedly-investigating-nvidia-amid-huang-exit/" }
      ]
    },
    /* 15 ENERGIE: GASSPEICHER/TTF/OEL/OPEC+ */
    {
      id: "gasspeicher-ttf-oelpreis-opec-plus-11-19", cats: ["energy"], when: "Stand 19.11.2026 · OPEC+-Entscheidung für 2027-Quoten am 29.11.2026",
      headline: "Deutsche Gasspeicher bleiben unterdurchschnittlich gefüllt, TTF-Gaspreis steigt, OPEC+ bereitet Entscheidung über 2027-Förderquoten vor",
      sec30: "Die deutschen Gasspeicher waren Mitte November zu rund 57,2 % gefüllt (EU-weit: 70,2 %) und verfehlen damit weiterhin deutlich die gesetzliche 80-Prozent-Vorgabe zum 1. November. Der TTF-Gaspreis stieg auf knapp 83 Euro pro Megawattstunde. Der Brent-Ölpreis bewegte sich bei rund 92 Dollar je Barrel, belastet von steigenden US-Lagerbeständen und einem von der IEA erwarteten globalen Angebotsüberangebot im vierten Quartal; alle 21 OPEC+-Staaten treffen sich am 29. November, um erstmals auf Basis einer unabhängigen Kapazitätsprüfung pro Land über die Förderquoten für 2027 zu entscheiden.",
      blocks: [
        { h: "Wie ist der Füllstand der deutschen Gasspeicher?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen zuletzt bei rund 57,2 % Füllstand (141,5 von 247,4 TWh Arbeitsgasvolumen), EU-weit bei rund 70,2 % (794 TWh). Damit verfehlt Deutschland weiterhin deutlich die gesetzliche Vorgabe von 80 % zum 1. November.",
            ask: [{ label: "Was ist LNG?", ref: "t:lng" }] }
        ]},
        { h: "Wie entwickelte sich der Gaspreis?", items: [
          { tag: "fakt", text: "Der TTF-Gaspreis (Front-Month) stieg am Donnerstag auf knapp 83 Euro pro Megawattstunde. Berichte nennen die niedrigen Speicherstände und Versorgungssorgen vor dem Winter als Hintergrund.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] }
        ]},
        { h: "Wie entwickelte sich der Ölpreis und was ist bei OPEC+ geplant?", items: [
          { tag: "fakt", text: "Brent notierte bei rund 92 bis 93 Dollar je Barrel, WTI bei rund 83 Dollar; im November haben beide Sorten bereits rund 16 bis 20 % verloren. Alle 21 OPEC+-Mitglieder treffen sich am 29. November, um auf Basis einer neuen, unabhängigen Kapazitätsprüfung pro Land über die Förderquoten für 2027 zu entscheiden; für Dezember hatten die sieben aktiv fördernden Länder zuvor beschlossen, die Fördermenge auf September-Niveau zu halten.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz der Eskalation am Golf (mehr in Meldung 10) moderat bleibt, während gleichzeitig Erdgas wegen niedriger Speicherstände teurer wird, zeigt laut Beobachtern, dass Öl- und Gasmarkt derzeit von unterschiedlichen Faktoren getrieben werden: beim Öl überwiegt kurzfristig das von der IEA erwartete Angebotsüberangebot, bei Gas die Sorge vor einem knappen Winter in Europa." }
        ]}
      ],
      reaction: "Mehr zur Eskalation am Golf in Meldung 10.",
      terms: ["brent", "wti", "opec-plus", "ttf", "lng"],
      followups: ["e:gas-ttf", "e:energy-germany", "e:opec-plus-why", "e:oil-future"],
      sources: [
        { title: "gasspeicherkarte.de: Gasspeicher Füllstand Deutschland", url: "https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland" },
        { title: "Investing.com: Gaspreis steigt auf fast 83 Euro – was das für Versorger bedeutet", url: "https://de.investing.com/news/stock-market-news/gaspreis-steigt-auf-fast-83-euro--was-das-fur-versorger-bedeutet-3777152" },
        { title: "stromauskunft.de: Strompreise aktuell", url: "https://www.stromauskunft.de/strompreise/" },
        { title: "Forbes Advisor: Crude Oil Price Today, November 18, 2026", url: "https://www.forbes.com/advisor/investing/oil-prices-today/" },
        { title: "BOE Report: OPEC officials meet to discuss oil production capacity review", url: "https://boereport.com/2026/11/16/opec-officials-meet-to-discuss-oil-production-capacity-review/" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX lag am Donnerstagnachmittag bei rund 25.714 Punkten (-0,10 %), nachdem er am Mittwochabend um 1,19 % gefallen war; der Euro Stoxx 50 hielt sich bei rund 6.172 Punkten (+0,16 %)." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Die hawkishen FOMC-Minutes vom Mittwochabend belasten die Stimmung; die Begeisterung über die Anthropic-Preisfeststellung konnte das am Donnerstag nur zeitweise ausgleichen." },
    "yield-meaning": { tag: "fakt", story: 4, text: "Die US-10-Jahres-Rendite liegt bei rund 5,08 % und damit weiterhin über 5 %; die Bund-Rendite bei rund 3,37 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Am Terminmarkt gilt eine Fed-Zinserhöhung im Dezember weiterhin mit hoher Wahrscheinlichkeit als eingepreist; die genauen Prozentwerte schwanken zwischen den Quellen zwischen rund 85 und 97 %." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Der Goldpreis zeigte am Donnerstag uneinheitliche Signale zwischen leichter Erholung und weiterem Rückgang auf rund 3.730 bis 3.740 Dollar." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro blieb mit rund 1,096 bis 1,098 Dollar unter der Marke von 1,10, nahe seinem niedrigsten Stand seit Mai 2025." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin fiel um rund 0,75 % binnen 24 Stunden auf etwa 63.500 bis 63.800 Dollar, begleitet von anhaltenden Mittelabflüssen aus Bitcoin-ETFs." },
    "inflation-what": { tag: "fakt", story: 6, text: "Der ifo-Geschäftsklimaindex fiel im November überraschend auf 85,7 Punkte; der Eurozone-Composite-PMI lag bei 52,4 Punkten, die Industrie bleibt mit einem deutschen Industrie-PMI von 48,4 Punkten schwach." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Fed-Chef Kevin Warsh kündigte an, die Fed werde ab 2027 nur noch sieben statt acht Zinsentscheide pro Jahr treffen – eine strukturelle Reform parallel zur laufenden Debatte über den Dezember-Zinsschritt." },
    "fed-hike": { tag: "position", story: 4, text: "Fed-Gouverneur Waller hält einen Schritt um 50 Basispunkte im Dezember für möglich, New-York-Fed-Chef Williams sieht dafür keine Notwendigkeit; Goolsbee widersprach Finanzminister Bessent öffentlich zur Frage, wie stark Ölpreise die Inflation erklären." },
    "ecb-hike": { tag: "position", story: 5, text: "Aus dem EZB-Rat kommen laut Berichten deutliche Signale für eine weitere Zinserhöhung bei der Sitzung am 17. Dezember; Lagarde selbst wollte sich auf den Termin nicht endgültig festlegen." },
    "haushalt-basics": { tag: "fakt", story: 8, text: "Der Haushaltsausschuss billigte am 13.11. den Bundeshaushalt 2027 mit rund 560,92 Mrd. Euro Ausgaben und rund 210 Mrd. Euro Gesamtneuverschuldung; die Schlussabstimmung im Bundestag ist für den 27.11. vorgesehen." },
    "debt-brake": { tag: "fakt", story: 8, text: "Die für die Schuldenbremse relevante Kreditaufnahme im Bundeshaushalt 2027 liegt laut Haushaltsausschuss bei 38,43 Mrd. Euro – exakt an der verfassungsrechtlich zulässigen Obergrenze." },
    "rente-basics": { tag: "fakt", story: 8, text: "Die Rentenreform wurde erneut vertagt; das Kabinett soll die Entscheidung über die „Rente mit 63” am 9. oder 16. Dezember treffen. Diskutiert wird eine strengere Anrechnung von Arbeitslosigkeits- und Pflegezeiten statt einer vollständigen Abschaffung." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Aktuelle Umfragen (YouGov, Forsa, INSA) sehen die AfD zwischen 26 und 29 %, die Union zwischen 19 und 22 % – die aktuelle Koalition hätte danach weiterhin keine Bundestagsmehrheit." },
    "nato-target": { tag: "fakt", story: 11, text: "Beim EU-Verteidigungsprogramm SAFE waren Anfang November 16,4 Mrd. Euro an 2026er-Mitteln ausgezahlt; die Antragsfrist für die zweite Runde über 21,3 Mrd. Euro läuft bis zum 30.11." },
    "defence-order": { tag: "fakt", story: 11, text: "TKMS erhielt den Auftrag über vier zusätzliche Fregatten (rund 5,3 Mrd. Euro), Hensoldt einen GDELS-Auftrag über knapp 1 Mrd. Euro, RENK einen Prüfsystem-Auftrag des niederländischen AMLC." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie fiel am Donnerstag auf ein neues 52-Wochen-Tief von rund 731,80 Euro, nachdem mehrere Analysten ihre Kursziele gesenkt hatten." },
    "ma-steps": { tag: "unbestaetigt", story: 11, text: "Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS war am 19.11. weiterhin nicht ausdrücklich als unterschrieben bestätigt." },
    "deal-risks": { tag: "fakt", story: 12, text: "Der Merger-Arbitrage-Spread bei der Marvell-Lumentum-Fusion liegt laut Berichten weiterhin bei rund 50 %, bei einer Marvell-Aktie, die am Donnerstag zwischen rund 142,62 und 154,06 Dollar schwankte." },
    "private-credit-what": { tag: "fakt", story: 13, text: "Private-Credit-Firmen übernahmen einen 1,3-Mrd.-Dollar-Kredit zur Finanzierung der Fullscript-Übernahme durch L Catterton, nachdem Morgan Stanley ihn nicht syndizieren konnte." },
    "ai-capex": { tag: "fakt", story: 14, text: "Anthropic preiste seinen Börsengang bei 83 Dollar je Aktie und sammelte rund 81,3 Mrd. Dollar ein, bei einer Bewertung von rund 1,5 Billionen Dollar – laut Berichten der größte Börsengang der Geschichte." },
    "circular-financing": { tag: "fakt", story: 14, text: "Nvidia stellte Lieferungen des H200-Chips nach China vollständig ein; die SEC ermittelt laut Berichten zivilrechtlich wegen möglicherweise irreführender Angaben im Zusammenhang mit Jensen Huangs Abgang." },
    "why-oil-up-geo": { tag: "fakt", story: 10, text: "Iran griff nach dem US-Luftschlag auf die Insel Qeshm die US-Basis Ali Al Salem in Kuwait sowie Ziele in Bahrain an; beide Länder meldeten Abfangungen ohne größere Schäden." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Irans Marine meldete drei brennende Öltanker östlich der Straße von Hormus nach angeblichen Minentreffern – vom US-Zentralkommando CENTCOM nicht bestätigt." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen zuletzt bei rund 57,2 % Füllstand, der TTF-Gaspreis stieg auf knapp 83 Euro pro Megawattstunde." },
    "energy-germany": { tag: "fakt", story: 15, text: "Deutschland verfehlt mit rund 57,2 % Speicherfüllstand weiterhin deutlich die gesetzliche 80-Prozent-Vorgabe zum 1. November." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "Alle 21 OPEC+-Mitglieder treffen sich am 29.11., um erstmals auf Basis einer unabhängigen Kapazitätsprüfung pro Land über die Förderquoten für 2027 zu entscheiden." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Zu welchem Preis wurde Anthropics Börsengang am 18.11.2026 gepreist, und wie hoch war der Emissionserlös?",
      options: [
        "70 Dollar je Aktie, Erlös rund 50 Mrd. Dollar",
        "78 Dollar je Aktie, Erlös rund 70 Mrd. Dollar",
        "83 Dollar je Aktie, Erlös rund 81,3 Mrd. Dollar",
        "90 Dollar je Aktie, Erlös rund 100 Mrd. Dollar"
      ],
      answer: 2,
      explain: "Anthropic preiste den Börsengang bei 83 Dollar je Aktie – über der zuvor genannten Spanne von 70 bis 78 Dollar – und sammelte dabei rund 81,3 Mrd. Dollar ein, bei einer Bewertung von rund 1,5 Billionen Dollar."
    },
    {
      topic: "Zinsen", type: "Fakt", story: 4,
      q: "Was kündigte Fed-Chef Kevin Warsh im Zusammenhang mit dem am 18.11.2026 veröffentlichten FOMC-Protokoll an?",
      options: [
        "Die Fed werde ab 2027 nur noch sieben statt acht Zinsentscheide pro Jahr treffen",
        "Die Fed werde den Leitzins sofort auf null senken",
        "Die Fed werde künftig monatlich tagen",
        "Die Fed-Sitzungen würden komplett öffentlich übertragen"
      ],
      answer: 0,
      explain: "Warsh kündigte an, dass die Fed ab 2027 nur noch sieben statt acht reguläre Zinsentscheide pro Jahr treffen wird; der bisherige Oktober-Termin soll zu einer reinen Strategiesitzung ohne Beschluss werden."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 9,
      q: "Angenommen, die ukrainischen Angriffe auf die Kertsch-Brücke würden sich in den kommenden Wochen fortsetzen. Was wird dadurch laut Putins Aussagen beim Shenzhen-Treffen für die Chancen auf eine kurzfristige Verhandlungslösung wahrscheinlicher?",
      options: [
        "Die Kertsch-Brücke hat laut den Quellen keinen Zusammenhang mit den Verhandlungen",
        "Trump kündigte an, sich bei weiteren Angriffen vollständig aus der Vermittlerrolle zurückzuziehen",
        "Verhandlungen würden dadurch automatisch wahrscheinlicher, da Druck Kompromisse erzwingt",
        "Putin erklärte bereits nach den bisherigen Angriffen, Kyjiw und Europa seien noch nicht verhandlungsbereit – weitere Angriffe würden eine kurzfristige Annäherung laut dieser Logik eher unwahrscheinlicher machen"
      ],
      answer: 3,
      explain: "Putin erklärte beim Treffen in Shenzhen, Kyjiw und Europa seien nach den jüngsten Angriffen auf die Kertsch-Brücke noch nicht verhandlungsbereit. Daraus lässt sich ableiten, dass weitere solche Angriffe eine kurzfristige Annäherung aus seiner Sicht eher erschweren würden."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 8,
      q: "Was wurde bei der Rentenreform in der Nacht zum 18.11.2026 im Koalitionsausschuss entschieden?",
      options: [
        "Die Rente mit 63 wird auf 67 Jahre angehoben",
        "Die abschlagsfreie Rente nach 45 Beitragsjahren wird vollständig abgeschafft",
        "Es gab keine Einigung; die Entscheidung wurde auf eine Kabinettssitzung im Dezember vertagt",
        "Die Koalition einigte sich auf eine Beitragserhöhung ab 2027"
      ],
      answer: 2,
      explain: "Bei der Rentenreform gab es keine Einigung; die Entscheidung wurde auf eine Kabinettssitzung am 9. oder 16. Dezember vertagt. Diskutiert wird eine strengere Anrechnung von Arbeitslosigkeits- und Pflegezeiten statt einer vollständigen Abschaffung."
    },
    {
      topic: "Energie", type: "Zusammenhang", story: 10,
      q: "Angenommen, die Angriffe am Golf würden sich auf tatsächliche Öl-Förderanlagen statt nur auf Militärbasen ausweiten. Was würde dadurch für den Brent-Preis wahrscheinlicher, selbst wenn die IEA weiterhin ein globales Angebotsüberangebot für das vierte Quartal erwartet?",
      options: [
        "Der Ölpreis würde davon unberührt bleiben, da geopolitische Risiken Preise grundsätzlich nicht beeinflussen",
        "Eine direkte Bedrohung der Förderkapazität würde den Ölpreis tendenziell stützen oder steigen lassen, auch wenn das erwartete Angebotsüberangebot kurzfristig in die andere Richtung wirkt",
        "Nur Gold würde reagieren, Öl nicht",
        "Der Ölpreis würde garantiert um mindestens 50 % fallen"
      ],
      answer: 1,
      explain: "Eine Eskalation, die direkt die Förderkapazität bedroht, würde die Versorgungssicherheit stärker infrage stellen und den Ölpreis tendenziell stützen oder steigen lassen – auch wenn das von der IEA erwartete Angebotsüberangebot kurzfristig in die entgegengesetzte Richtung wirkt."
    }
  ]
};

