// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-11-18",
  dateLabel: "Mittwoch, 18. November 2026",
  updatedLabel: "Recherchestand 18.11.2026",
  marketNote: "Diese Ausgabe entsteht am Mittwochmittag, 18.11.2026. DAX und Euro Stoxx 50 zeigen einen Zwischenstand vom Mittwochmittag, weil die Börse zum Redaktionsschluss noch nicht geschlossen hatte; der Dienstagshandel war von einem deutlichen Rückgang vor den Nvidia-Quartalszahlen geprägt. S&P 500, Nasdaq Composite und Dow Jones zeigen dagegen noch den Schlusskurs vom Dienstag, 17.11.2026, da der US-Handel zum Redaktionsschluss noch nicht begonnen hatte – ergänzt um die Tendenz der Terminkontrakte (Futures) für Mittwoch, die nach den über Erwarten guten Nvidia-Zahlen deutlich nach oben zeigen. Gold, Öl und Bitcoin handeln durchgehend und zeigen bereits einen Mittwochvormittags-Stand. Beim Goldpreis weichen die ausgewerteten Quellen für Mittwoch deutlich voneinander ab (zwischen rund 3.750 und rund 3.800 Dollar); das ist unten als unbestätigt gekennzeichnet. Der endgültige Ausgabepreis des Anthropic-Börsengangs stand zum Redaktionsschluss noch nicht fest; er wurde für den Abend des 18.11. (US-Zeit) erwartet, der Handelsstart an der Nasdaq ist für Donnerstag, 19.11., angesetzt. Das für Donnerstag geplante erste Dreiertreffen von Xi Jinping, Donald Trump und Wladimir Putin in Shenzhen hat zum Redaktionsschluss ebenfalls noch nicht stattgefunden.",

  top: [
    { text: "Nvidia meldete nach US-Börsenschluss am Dienstag einen Rekordumsatz von 115,8 Mrd. Dollar (über den Erwartungen) und hob den Ausblick an; der neue Verwaltungsratschef Harvey Jones erklärte zugleich, das Board plane nicht, den zurückgetretenen CEO Jensen Huang wieder einzusetzen, während die SEC laut Berichten gegen Nvidia wegen möglicherweise irreführender Angaben zur Huang-Affäre ermittelt. Der Anthropic-Börsengang sollte am Abend des 18.11. gepreist werden, Handelsstart ist für den 19.11. an der Nasdaq geplant.", ref: "s:14" },
    { text: "Am Terminmarkt gilt eine Fed-Zinserhöhung im Dezember inzwischen zu rund 96 bis 97 % als eingepreist; New-York-Fed-Chef Williams schloss einen großen Schritt von 50 Basispunkten aus, Fed-Gouverneur Waller hält einen solchen Schritt dagegen für möglich, falls die Inflation hoch bleibt. EZB-Chefin Lagarde sagte in einem Interview, sie könne eine Dezember-Erhöhung nicht garantieren, hält sie aber für die wahrscheinliche Richtung; laut einem Bericht der niederländischen Zeitung de Volkskrant will sich Notenbank-Chef Klaas Knot aus dem Rennen um ihre Nachfolge zurückziehen, nachdem sich Deutschland und Frankreich informell auf den Spanier Pablo Hernández de Cos verständigt haben sollen.", ref: "s:4" },
    { text: "Der Koalitionsausschuss von Union und SPD einigte sich in der Nacht zu Mittwoch auf eine Senkung der Stromsteuer zum 1.1.2027 auf den EU-Mindestsatz von 0,1 Cent pro Kilowattstunde – auch für Privathaushalte. Die Gegenfinanzierung ist bislang nur für 2027 gesichert; bei der Rentenreform gab es dagegen keine Einigung.", ref: "s:7" },
    { text: "China, die USA und Russland bereiten in Shenzhen das erste trilaterale Gipfeltreffen von Xi Jinping, Donald Trump und Wladimir Putin für Donnerstag vor; am Golf eskaliert die Lage: US-Kampfjets griffen nach iranischen Drohnenangriffen auf US-Stützpunkte in Bahrain eine Raketenstellung auf der iranischen Insel Qeshm an, Iran meldete weitere Angriffe auf Ziele in Kuwait.", ref: "s:10" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "dow", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "≈ 26.065 Pkt.", change: "+0,02 % ggü. Dienstagsschluss (≈ 26.080 Pkt.), der selbst rund -2 % gefallen war", dir: "flat", asof: "Zwischenstand Mi 18.11.26, Mittag", story: 1,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. Der Punktestand ist ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: ein Minus heißt, die 40 Firmen wurden zusammen niedriger bewertet als beim letzten Stand.",
      compare: [
        { label: "Tagesspanne", text: "Der DAX bewegte sich am Mittwochvormittag zwischen einem Tageshoch von 26.139,16 und einem Tagestief von 26.043,97 Punkten." }
      ],
      moved: {
        intro: "Als Hintergrund für die Stabilisierung nach dem Dienstags-Rückgang nennen Berichte:",
        items: [
          "Der DAX war am Dienstag um rund 2 % gefallen – belastet durch Sorgen um die Bewertung von KI-Unternehmen, hohe Anleiherenditen und Zurückhaltung vor den Nvidia-Quartalszahlen. Am Mittwoch hielt sich der Index nach den über Erwarten guten Nvidia-Zahlen zunächst, ohne dass Berichte von Euphorie sprechen."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu den Nvidia-Zahlen und der Marktreaktion in Meldung 2 und 14.", ref: "s:14" }
      ],
      source: { title: "ad-hoc-news.de: DAX hält sich am Mittwochmittag mit 26.065 Punkten knapp im Plus", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-haelt-sich-am-mittwochmittag-mit-26-065-punkten-knapp-im-plus/70530767" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "≈ 6.230 Pkt.", change: "+0,28 % ggü. Dienstagsschluss (6.212,11 Pkt.)", dir: "up", asof: "Zwischenstand Mi 18.11.26, Mittag", story: 1,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab. Die Richtung der Veränderung zeigt, ob diese Unternehmen zusammen höher oder niedriger bewertet wurden als beim letzten Stand.",
      compare: [
        { label: "Dienstag", text: "Der Index war am Dienstag um rund 2 % gefallen, parallel zum DAX und vor den US-Techwerten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die leichte Erholung:",
        items: [
          "Technologiewerte wie ASML profitierten von den über Erwarten guten Nvidia-Zahlen; begrenzt wurde die Erholung durch anhaltende Zins- und Inflationssorgen nach der bestätigten Eurozone-Inflation von 4,0 % sowie schwächere Rohstoffwerte."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und zur Eurozone-Inflation in Meldung 5 und 6.", ref: "s:5" }
      ],
      source: { title: "ad-hoc-news.de: Euro Stoxx 50 steigt am Mittwochmittag um 0,28 Prozent auf 6.229,70 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-steigt-am-mittwochmittag-um-0-28-prozent-auf-6-229-70-punkte/70530749" }
    },
    "sp500": {
      label: "S&P 500", value: "7.340,53 Pkt. (Dienstagsschluss)", change: "-1,03 % ggü. Montag; Mittwoch-Futures zeigen vorbörslich rund +0,3 bis +0,6 %", dir: "down", asof: "Schluss Di 17.11.26; Future-Indikation Mi 18.11.26 vor US-Handelsstart", story: 2,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts.",
      compare: [
        { label: "Tief", text: "Der Schlussstand vom Dienstag war laut Berichten der niedrigste seit Ende Juli." }
      ],
      moved: {
        intro: "Als Hintergrund für den Dienstags-Rückgang und die Mittwoch-Erholung der Futures nennen Berichte:",
        items: [
          "Am Dienstag fielen alle elf S&P-500-Sektoren vor den Nvidia-Zahlen, angeführt von schwachen Software-Werten. Nach dem Nvidia-Ergebnis (Umsatz 115,8 Mrd. Dollar, über der Konsensschätzung von rund 109 Mrd. Dollar) zeigten die Futures am Mittwoch wieder nach oben."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Nvidia, der Huang-Nachfolge und Anthropics Börsengang in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "Yahoo Finance: Stock market today, Wednesday, November 18 – S&P 500, Nasdaq futures rise after Nvidia clears hurdle", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-november-18-dow-sp-500-nasdaq-nvidia-anthropic-ipo-090613569.html" }
    },
    "nasdaq": {
      label: "Nasdaq Composite", value: "24.328,38 Pkt. (Dienstagsschluss)", change: "-0,74 % ggü. Montag; Nasdaq-100-Futures zeigen Mittwoch rund +1 % (+252 Pkt.)", dir: "down", asof: "Schluss Di 17.11.26; Future-Indikation Mi 18.11.26 vor US-Handelsstart", story: 2,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt.",
      compare: [
        { label: "Nvidia", text: "Die Nvidia-Aktie schloss am Dienstag bei 155,46 Dollar (-0,48 %) und notierte vorbörslich am Mittwoch rund 3 % höher." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Erholung der Futures:",
        items: [
          "Nvidias Quartalszahlen fielen deutlich besser aus als erwartet, auch der Ausblick für das laufende Quartal (rund 130 Mrd. Dollar Umsatz) lag über dem Konsens; das stützte am Mittwoch weitere Halbleiterwerte."
        ]
      },
      important: [
        { area: "Technologie", text: "Mehr zu Huangs Nachfolge, der SEC-Ermittlung und Anthropics Börsengang in Meldung 14.", ref: "s:14" }
      ],
      source: { title: "mlq.ai: Nasdaq 100 futures rise 252 points after Nvidia's results as Nebius and CoreWeave jump", url: "https://mlq.ai/news/nasdaq-100-futures-rise-252-points-after-nvidias-results-as-nebius-and-coreweave-jump-and-europe-holds-flat/" }
    },
    "dow": {
      label: "Dow Jones", value: "50.759,42 Pkt. (Dienstagsschluss)", change: "-1,64 % ggü. Montag – 1,5-Monats-Tief", dir: "down", asof: "Schluss Di 17.11.26", story: 2,
      means: "Der Dow Jones Industrial Average bildet 30 große US-Industrieunternehmen ab und reagiert wegen seiner geringeren Technologiegewichtung oft anders auf Kursbewegungen als S&P 500 oder Nasdaq.",
      compare: [
        { label: "Sektoren", text: "Laut Berichten belasteten vor allem Home Depot und andere zyklische Werte den Dow am Dienstag." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund:",
        items: [
          "Schwäche bei zyklischen Konsumwerten vor den Nvidia-Zahlen; die geringere Technologiegewichtung dämpfte zugleich die Mittwoch-Erholung stärker als bei Nasdaq und S&P 500."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zur Eskalation in der Straße von Hormus und zum geplanten Trump-Xi-Putin-Gipfel in Meldung 9 und 10.", ref: "s:10" }
      ],
      source: { title: "The Private Banker: Dow sheds 849 points and every S&P 500 sector falls as software stocks slump ahead of Nvidia results", url: "https://leprivatebanker.com/2026/11/18/dow-sheds-849-points-and-every-sp-500-sector-falls-as-software-stocks-slump-ahead-of-nvidia-results/" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,098", change: "weiterhin unter der Marke von 1,10; binnen eines Jahres rund -5 %", dir: "down", asof: "Stand Mi 18.11.26, Vormittag", story: 3, whyRef: "e:eurusd-meaning",
      means: "1 Euro kostet nach den hier vorliegenden Angaben etwa 1,10 US-Dollar. Fällt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "Jahr", text: "Gegenüber dem Vorjahresstand von rund 1,158 Dollar hat der Euro rund 5,1 % verloren." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die anhaltende Dollar-Stärke:",
        items: [
          "Hawkishe Fed-Rhetorik (u. a. von Fed-Gouverneur Waller, der einen 50-Basispunkte-Schritt im Dezember nicht ausschließt) sowie robuste US-Konjunkturdaten stützen den Dollar weiterhin stärker als die parallele EZB-Zinsdebatte den Euro (mehr in Meldung 4 und 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "FXStreet: EUR/USD moves lower – the pair settles below 1.1000", url: "https://www.fxstreet.com/analysis/eur-usd-moves-lower-the-pair-settles-below-11000-202611180747" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,09 %", change: "nahezu unverändert (-1 Basispunkt) ggü. Vortag, weiterhin über 5 %", dir: "flat", asof: "Stand Mi 18.11.26", story: 4, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,09 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund diesen Zinssatz pro Jahr.",
      compare: [
        { label: "Kurve", text: "Die 2-jährige Rendite lag laut Berichten bei rund 4,79 %, die 30-jährige bei rund 5,44 %." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für das anhaltend hohe Niveau:",
        items: [
          "Investoren warten auf das Protokoll der jüngsten Fed-Sitzung (FOMC Minutes); die Rendite bleibt wegen der als nahezu sicher geltenden Dezember-Zinserhöhung über 5 %."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte und den FedWatch-Wahrscheinlichkeiten in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "CNBC: Treasury yields hold steady as investors look ahead to Fed minutes", url: "https://www.cnbc.com/2026/11/18/treasury-yields-bonds-fed.html" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "≈ 3,35–3,36 %", change: "kaum verändert ggü. Vortag", dir: "flat", asof: "Stand Mi 18.11.26", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland.",
      compare: [
        { label: "Realrendite", text: "Bei einer Eurozone-Inflation von 4,0 % ergibt sich bei dieser Rendite eine negative Realrendite von rund -0,64 Prozentpunkten." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für das erhöhte Niveau:",
        items: [
          "Die Erwartung einer EZB-Zinserhöhung im Dezember sowie Lagardes Aussage, die Richtung sei „ziemlich klar”, auch wenn sie den Dezember-Termin nicht garantieren könne (mehr in Meldung 5)."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur EZB-Zinsdebatte und Lagardes Nachfolge in Meldung 5.", ref: "s:5" }
      ],
      source: { title: "aktiencheck.de: Bundesanleihen – Zehnjährige rentiert mit 3,36 Prozent, die Inflation liegt bei 4,0 Prozent", url: "https://aktiencheck.de/artikel/bundesanleihen-zehnjaehrige-rentiert-mit-336-prozent-die-inflation-liegt-bei-40" }
    },
    "gold": {
      label: "Gold", value: "≈ 3.750–3.800 $ (Angaben widersprüchlich)", change: "weiter rückläufig, rund -2 % ggü. Montag", dir: "down", asof: "Stand Mi 18.11.26, Vormittag – Angaben zwischen Quellen abweichend", story: 3, whyRef: "e:gold-why",
      means: "Gold kostet rund 3.750 bis 3.800 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Trend", text: "Gold setzt damit den seit Mitte November laufenden Abwärtstrend fort, nachdem der Preis bereits am Montag auf ein Mehr-als-Jahres-Tief gefallen war." }
      ],
      moved: {
        intro: "Als Hintergrund für den weiteren Rückgang nennen Berichte:",
        items: [
          "Hawkishe Zinserwartungen vor dem Fed-Sitzungsprotokoll belasten den zinslosen Goldpreis weiter; die genauen Preisangaben für Mittwoch schwanken zwischen den ausgewerteten Quellen deutlich (zwischen rund 3.750 und rund 3.800 Dollar), was hier als unbestätigt gekennzeichnet wird."
        ]
      },
      important: [
        { area: "Zinsen", text: "Mehr zur Fed-Zinsdebatte in Meldung 4.", ref: "s:4" }
      ],
      source: { title: "FXEmpire: Gold and Silver Price Forecast – selloff deepens before Fed minutes", url: "https://fxempire.com/forecasts/article/gold-and-silver-price-forecast-selloff-deepens-before-fed-minutes-1645327" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 92,3 $", change: "rund -3 % ggü. Montag (≈ 95 $)", dir: "down", asof: "Stand Mi 18.11.26, Vormittag", story: 15, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte.",
      compare: [
        { label: "WTI", text: "Die US-Sorte WTI fiel auf rund 84,5 bis 88 Dollar (rund -1,15 %)." }
      ],
      moved: {
        intro: "Als Hintergrund für den Rückgang nennen Berichte:",
        items: [
          "Vorläufige API-Daten zeigten einen Anstieg der US-Rohölvorräte um 5,28 Mio. Barrel; die IEA erwartet für das vierte Quartal 2026 ein globales Angebotsüberangebot von rund 1,7 Mio. Barrel pro Tag. Begrenzt wurde der Rückgang durch die eskalierenden Angriffe in der Straße von Hormus (mehr in Meldung 10)."
        ]
      },
      important: [
        { area: "Geopolitik", text: "Mehr zu den US-Luftschlägen und Drohnenangriffen am Golf in Meldung 10.", ref: "s:10" },
        { area: "Energie", text: "Mehr zu OPEC+ und deutschen Gasspeichern in Meldung 15.", ref: "s:15" }
      ],
      source: { title: "Invezz: Oil price today – API shows 5.28 million-barrel US crude build", url: "https://invezz.com/news/2026/11/18/oil-price-today-api-528-million-barrel-us-crude-build/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 64.100–64.700 $", change: "weitgehend seitwärts, leicht über der 64.000er-Marke", dir: "flat", asof: "Stand Mi 18.11.26, Vormittag", story: 3, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet aktuell zwischen rund 64.000 und 65.000 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Woche", text: "Bitcoin bewegt sich seit dem Wochenend-Tief vom 16.11. (rund 62.000 Dollar) in einer engen Spanne knapp über 64.000 Dollar." }
      ],
      moved: {
        intro: "Berichte nennen als Hintergrund für die Seitwärtsbewegung:",
        items: [
          "Der Markt wartet wie bei Gold auf das Fed-Sitzungsprotokoll; Analysten weisen laut einer Quelle einen direkten Zusammenhang zwischen dem anstehenden Anthropic-Börsengang und der Bitcoin-Kursentwicklung zurück."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Fortune: Current price of Bitcoin for Nov. 18, 2026", url: "https://fortune.com/article/price-of-bitcoin-11-18-2026/" }
    }
  },

  /* ─────────────────────────── MELDUNGEN ─────────────────────────── */
  stories: [
    /* 1 MÄRKTE: DAX/EUROSTOXX50 MITTWOCH NACH DIENSTAGS-AUSVERKAUF */
    {
      id: "markets-dax-eurostoxx-mittwoch-11-18", cats: ["markets"], when: "Dienstagsschluss 17.11.2026 · Zwischenstand Mi 18.11.2026, Mittag",
      headline: "DAX stabilisiert sich am Mittwoch nach rund zweiprozentigem Rückgang am Dienstag, Euro Stoxx 50 legt leicht zu",
      sec30: "Der DAX war am Dienstag um rund 2 % auf etwa 26.045 bis 26.076 Punkte gefallen – belastet durch Sorgen um die Bewertung von KI-Unternehmen, hohe Anleiherenditen und Zurückhaltung vor den Nvidia-Quartalszahlen. Am Mittwochmittag hielt sich der Index bei rund 26.065 Punkten (+0,02 % ggü. Dienstagsschluss), ohne dass Berichte von einer deutlichen Erholung sprechen. Der Euro Stoxx 50 legte dagegen um 0,28 % auf rund 6.230 Punkte zu, gestützt von Technologiewerten wie ASML.",
      blocks: [
        { h: "Wie entwickelte sich der DAX am Dienstag, und wie steht er am Mittwoch?", items: [
          { tag: "fakt", text: "Der DAX schloss den Dienstag laut einer Quelle bei 26.045,37 Punkten (-2,08 %, -553,27 Punkte), laut einer anderen Quelle bei 26.075,73 Punkten (-1,97 %) – die genauen Werte weichen zwischen den ausgewerteten Quellen leicht ab, die Richtung (rund -2 %) ist aber übereinstimmend. Am Mittwochvormittag bewegte sich der Index zwischen einem Tageshoch von 26.139,16 und einem Tagestief von 26.043,97 Punkten und lag zuletzt bei rund 26.065 Punkten.",
            ask: [{ label: "Was bedeutet eine Indexbewegung?", ref: "n:dax" }] }
        ]},
        { h: "Was nennen Berichte als Grund für den Dienstags-Rückgang?", items: [
          { tag: "einordnung", text: "Marktbeobachter verweisen auf eine Mischung aus Unsicherheit über die Bewertungen von KI-Unternehmen, weiterhin hohen Anleiherenditen und Zurückhaltung vor den Nvidia-Quartalszahlen, die am Dienstagabend nach US-Börsenschluss veröffentlicht wurden. Der DAX durchbrach dabei laut einer technischen Analyse eine Unterstützung bei rund 26.665 bis 26.700 Punkten, was die Abwärtsbewegung beschleunigt habe.",
            ask: [{ label: "Mehr zu Nvidias Zahlen", ref: "s:14" }] }
        ]},
        { h: "Wie ordnen sich DAX und Euro Stoxx 50 in den größeren Zusammenhang ein?", items: [
          { tag: "einordnung", text: "Dass sich der DAX nach den über Erwarten guten Nvidia-Zahlen am Mittwoch kaum bewegt, während der technologienähere Euro Stoxx 50 leicht zulegt, deutet darauf hin, dass die Erleichterung über das Nvidia-Ergebnis von anhaltenden Sorgen über hohe Anleiherenditen und die Dezember-Zinsentscheidungen von Fed und EZB teilweise aufgewogen wird. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Die US-Futures und der Dienstagsschluss an der Wall Street werden in Meldung 2 behandelt, Gold/Bitcoin/Euro/Renditen in Meldung 3, die Fed-Zinsdebatte in Meldung 4.",
      terms: ["rendite"],
      followups: ["e:index-move", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "onvista: Dax schließt Kurslücke – diese Marke muss jetzt halten", url: "https://www.onvista.de/news/2026/11-18-dax-schliesst-kursluecke-diese-marke-muss-jetzt-halten-41123281-19-26577747" },
        { title: "ad-hoc-news.de: DAX schließt am 17. November 1,97 Prozent tiefer bei 26.075,73 Punkten", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-am-17-november-1-97-prozent-tiefer-bei-26-075-73-punkten/70528278" },
        { title: "ad-hoc-news.de: DAX hält sich am Mittwochmittag mit 26.065 Punkten knapp im Plus", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-haelt-sich-am-mittwochmittag-mit-26-065-punkten-knapp-im-plus/70530767" },
        { title: "ad-hoc-news.de: Euro Stoxx 50 steigt am Mittwochmittag um 0,28 Prozent auf 6.229,70 Punkte", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/euro-stoxx-50-steigt-am-mittwochmittag-um-0-28-prozent-auf-6-229-70-punkte/70530749" }
      ]
    },
    /* 2 MÄRKTE: US-FUTURES/DIENSTAGSSCHLUSS/NVIDIA-REAKTION */
    {
      id: "markets-us-futures-dienstagsschluss-nvidia-reaktion-11-18", cats: ["markets"], when: "Schluss Di 17.11.2026 · Futures Mi 18.11.2026 vor US-Handelsstart",
      headline: "US-Futures drehen nach starken Nvidia-Zahlen deutlich ins Plus, Dienstag hatte alle elf S&P-500-Sektoren im Minus gesehen",
      sec30: "Der S&P 500 war am Dienstag um 1,03 % auf 7.340,53 Punkte gefallen, die Nasdaq Composite um 0,74 % auf 24.328,38 Punkte, der Dow Jones um 1,64 % auf 50.759,42 Punkte – laut Berichten fielen alle elf S&P-500-Sektoren, angeführt von schwachen Software-Werten, vor den Nvidia-Quartalszahlen. Nach Börsenschluss meldete Nvidia einen Rekordumsatz von 115,8 Mrd. Dollar, deutlich über der Konsensschätzung von rund 109 Mrd. Dollar; die Futures zeigten am Mittwochmorgen entsprechend deutlich nach oben.",
      blocks: [
        { h: "Wie schlossen die US-Indizes am Dienstag?", items: [
          { tag: "fakt", text: "Der S&P 500 fiel am Dienstag um 1,03 % auf 7.340,53 Punkte – laut Berichten der niedrigste Stand seit Ende Juli. Die Nasdaq Composite gab um 0,74 % auf 24.328,38 Punkte nach, der Dow Jones um 1,64 % auf 50.759,42 Punkte, ein 1,5-Monats-Tief. Laut einer Analyse fielen alle elf Sektoren des S&P 500, angeführt von Software-Werten wie Salesforce.",
            ask: [{ label: "Warum bewegen sich Börsen überhaupt?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Wie reagieren die Futures auf Nvidias Zahlen?", items: [
          { tag: "fakt", text: "Nvidia meldete nach US-Börsenschluss am Dienstag einen Umsatz von 115,8 Mrd. Dollar (+103 % im Jahresvergleich) bei einem Konsens von rund 109 Mrd. Dollar, sowie einen Ausblick für das laufende Quartal von rund 130 Mrd. Dollar (Konsens: rund 125 Mrd. Dollar). Die Nasdaq-100-Futures zeigten danach laut einer Quelle rund +252 Punkte, entsprechend rund +1 %; die Nvidia-Aktie selbst notierte vorbörslich am Mittwoch rund 3 % höher.",
            ask: [{ label: "Mehr zu Nvidias Zahlen und der Huang-Nachfolge", ref: "s:14" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die Futures nach dem Nvidia-Ergebnis deutlich anziehen, nachdem der breite Markt am Dienstag vor allem aus Unsicherheit vor diesem einen Ergebnis gefallen war, zeigt erneut, wie stark die Stimmung am gesamten US-Aktienmarkt derzeit von einem einzelnen Unternehmen und dessen KI-Geschäft abhängt. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "DAX und Euro Stoxx 50 in Meldung 1, Gold/Bitcoin/Euro/Renditen in Meldung 3, Nvidia und Anthropic ausführlich in Meldung 14.",
      terms: ["rendite"],
      followups: ["e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "The Private Banker: Dow sheds 849 points and every S&P 500 sector falls as software stocks slump ahead of Nvidia results", url: "https://leprivatebanker.com/2026/11/18/dow-sheds-849-points-and-every-sp-500-sector-falls-as-software-stocks-slump-ahead-of-nvidia-results/" },
        { title: "bbntimes.com: Nasdaq Composite slips 0.74% to 24,328.38 as Nvidia posts $115.8 billion quarter", url: "https://www.bbntimes.com/technology/nasdaq-composite-slips-0-74-to-24-328-38-as-nvidia-posts-115-8-billion-quarter-after-the-close" },
        { title: "mlq.ai: Nasdaq 100 futures rise 252 points after Nvidia's results", url: "https://mlq.ai/news/nasdaq-100-futures-rise-252-points-after-nvidias-results-as-nebius-and-coreweave-jump-and-europe-holds-flat/" },
        { title: "Yahoo Finance: Stock market today, Wednesday, November 18 – Dow, S&P 500, Nasdaq, Nvidia, Anthropic IPO", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-november-18-dow-sp-500-nasdaq-nvidia-anthropic-ipo-090613569.html" }
      ]
    },
    /* 3 MÄRKTE: GOLD/BITCOIN/EURUSD/RENDITEN MITTWOCH */
    {
      id: "markets-gold-bitcoin-eurusd-renditen-mittwoch-11-18", cats: ["markets"], when: "Stand Mi 18.11.2026, Vormittag",
      headline: "Gold setzt Rückgang fort, Bitcoin bewegt sich seitwärts über 64.000 Dollar, der Dollar bleibt stark",
      sec30: "Gold fiel am Mittwoch laut Berichten weiter auf rund 3.750 bis 3.800 Dollar je Feinunze (Angaben zwischen Quellen widersprüchlich), nachdem der Preis bereits am Montag auf ein Mehr-als-Jahres-Tief gefallen war. Bitcoin bewegte sich mit rund 64.100 bis 64.700 Dollar weitgehend seitwärts. Der Euro blieb gegenüber dem Dollar unter der Marke von 1,10, die Rendite zehnjähriger US-Staatsanleihen lag bei rund 5,09 % und damit weiterhin über 5 %.",
      blocks: [
        { h: "Warum fällt Gold weiter?", items: [
          { tag: "unbestaetigt", text: "Die ausgewerteten Quellen nennen für den Goldpreis am Mittwoch unterschiedliche Werte zwischen rund 3.750 und rund 3.800 Dollar je Feinunze – das lässt sich hier nicht abschließend auflösen. Übereinstimmend ist der Trend: ein weiterer Rückgang um rund 2 % gegenüber Montag, nach dem bereits am Montag erreichten Mehr-als-Jahres-Tief.",
            ask: [{ label: "Was bestimmt den Goldpreis?", ref: "n:gold" }] }
        ]},
        { h: "Wie hat sich Bitcoin entwickelt?", items: [
          { tag: "fakt", text: "Bitcoin notierte am Mittwochvormittag bei rund 64.100 bis 64.700 Dollar und bewegte sich damit weitgehend seitwärts, nachdem der Kurs seit dem Wochenend-Tief vom 16.11. (rund 62.000 Dollar) bereits leicht gestiegen war. Laut einer Quelle weisen Analysten einen direkten Zusammenhang zwischen dem anstehenden Anthropic-Börsengang und der Bitcoin-Kursentwicklung zurück.",
            ask: [{ label: "Warum schwankt Bitcoin so stark?", ref: "n:bitcoin" }] }
        ]},
        { h: "Wie entwickelten sich Euro und US-Rendite?", items: [
          { tag: "fakt", text: "Der Euro blieb mit rund 1,098 Dollar weiter unter der Marke von 1,10; binnen eines Jahres hat der Euro rund 5,1 % gegenüber dem Dollar verloren. Die Rendite zehnjähriger US-Staatsanleihen lag bei rund 5,09 % (-1 Basispunkt ggü. Vortag) und damit weiterhin über 5 %.",
            ask: [{ label: "Was bedeutet eine Anleihe-Rendite?", ref: "n:ust10" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Gold weiter fällt und der Dollar stark bleibt, während Bitcoin sich seitwärts bewegt, passt zum Muster einer als nahezu sicher geltenden Fed-Zinserhöhung im Dezember: Zinslose Anlagen wie Gold werden tendenziell weniger gefragt, wenn die Zinsen hoch bleiben oder steigen. Investoren warten zudem auf das Protokoll der jüngsten Fed-Sitzung, das am Nachmittag veröffentlicht werden soll. Dies ist keine Anlageberatung.",
            ask: [{ label: "Vom Zins zum Kreditausfall", ref: "chain:rates-to-credit" }] }
        ]}
      ],
      reaction: "DAX/Euro Stoxx 50 in Meldung 1, US-Futures in Meldung 2, die Fed-Zinsdebatte in Meldung 4, die EZB in Meldung 5.",
      terms: ["rendite"],
      followups: ["e:gold-why", "e:bitcoin-what", "e:eurusd-meaning", "e:yield-meaning"],
      sources: [
        { title: "FXEmpire: Gold and Silver Price Forecast – selloff deepens before Fed minutes", url: "https://fxempire.com/forecasts/article/gold-and-silver-price-forecast-selloff-deepens-before-fed-minutes-1645327" },
        { title: "Fortune: Current price of Bitcoin for Nov. 18, 2026", url: "https://fortune.com/article/price-of-bitcoin-11-18-2026/" },
        { title: "FXStreet: EUR/USD moves lower – the pair settles below 1.1000", url: "https://www.fxstreet.com/analysis/eur-usd-moves-lower-the-pair-settles-below-11000-202611180747" },
        { title: "CNBC: Treasury yields hold steady as investors look ahead to Fed minutes", url: "https://www.cnbc.com/2026/11/18/treasury-yields-bonds-fed.html" }
      ]
    },
    /* 4 WIRTSCHAFT: FED-ZINSDEBATTE (WILLIAMS/WALLER/GOOLSBEE/BESSENT) */
    {
      id: "fed-zinsdebatte-williams-waller-goolsbee-11-18", cats: ["economy"], when: "Williams-Rede 17.11. · Waller-Äußerungen laufende Woche · FOMC-Sitzung 8./9.12.2026",
      headline: "Fed-Vertreter streiten über die Schrittgröße der Dezember-Zinserhöhung, FedWatch sieht rund 96 bis 97 Prozent Wahrscheinlichkeit",
      sec30: "New-York-Fed-Chef John Williams schloss am Dienstag bei einer Veranstaltung in New York einen großen Zinsschritt von 50 Basispunkten im Dezember aus, hält eine Erhöhung aber grundsätzlich für nötig. Fed-Gouverneur Christopher Waller sagte dagegen, er bevorzuge 25 Basispunkte, sei aber bei anhaltend hoher Kerninflation auch zu 50 Basispunkten bereit. Chicago-Fed-Chef Goolsbee nannte die jüngsten Inflationsdaten „discouraging”, Finanzminister Bessent warnte weiter davor, wegen des Energiepreisschocks zu stark zu erhöhen. Am Terminmarkt (CME FedWatch) gilt eine Zinserhöhung im Dezember inzwischen zu rund 96 bis 97 % als eingepreist.",
      blocks: [
        { h: "Was sagte John Williams?", items: [
          { tag: "position", text: "New-York-Fed-Chef John Williams sagte am Dienstag bei einer Veranstaltung: „Ich denke nicht, dass die Lage dramatisches Handeln verlangt” – ein Hinweis darauf, dass er einen Schritt von 50 Basispunkten im Dezember für unwahrscheinlich hält. Er nannte zugleich KI-getriebene Investitionen als möglichen „persistenten” Inflationsfaktor und bekräftigte, eine Erhöhung sei grundsätzlich weiter nötig.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Was sagten Waller, Goolsbee und Bessent?", items: [
          { tag: "position", text: "Fed-Gouverneur Christopher Waller sagte, er bevorzuge einen Schritt um 25 Basispunkte, sei aber bei anhaltend hoher Kerninflation (Kernrate ab 0,3 % monatlich) auch zu einem größeren Schritt von 50 Basispunkten bereit – nach Berichten das erste FOMC-Mitglied, das einen solchen Schritt öffentlich ins Spiel brachte. Chicago-Fed-Chef Austan Goolsbee bezeichnete die jüngsten Inflationsdaten als „discouraging” beziehungsweise laut einer anderen Quelle als „borderline disturbing” und nannte die aktuelle Kerninflation „nicht akzeptabel”. Finanzminister Scott Bessent warnte dagegen weiter davor, die Fed solle wegen des durch den Nahost-Konflikt ausgelösten Energiepreisschocks „nicht zu stark” anheben; die Daten seien derzeit „sehr verrauscht”.",
            ask: [{ label: "Warum erhöhen Notenbanken die Zinsen?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie hoch ist die am Terminmarkt eingepreiste Wahrscheinlichkeit?", items: [
          { tag: "fakt", text: "Die am Terminmarkt (CME FedWatch) eingepreiste Wahrscheinlichkeit einer Zinserhöhung im Dezember liegt laut aktuellen Quellen bei rund 96 bis 97 % für einen Schritt um 25 Basispunkte, mit einer Restwahrscheinlichkeit von rund 3 % für einen größeren Schritt um 50 Basispunkte. Damit gilt praktisch sicher irgendeine Erhöhung, die genaue Schrittgröße ist noch offen.",
            ask: [{ label: "Wie wirken Zinsen auf Aktien?", ref: "e:yield-stocks" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass sich die Debatte innerhalb der Fed inzwischen weniger um die Frage „ob”, sondern stärker um die Frage „wie stark” dreht, zeigt: Die grundsätzliche Richtung gilt als entschieden, offen ist vor allem die Reaktion auf die anhaltend hohe Kerninflation. Der Widerspruch zwischen Waller (offen für einen großen Schritt) und Williams (schließt einen großen Schritt aus) sowie Bessents Warnung zeigt zugleich, dass innerhalb von Fed und Regierung unterschiedlich bewertet wird, wie stark der Nahost-bedingte Energiepreisschock die Kerninflation tatsächlich verzerrt." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion in Meldung 1 bis 3, zur EZB-Zinsdebatte in Meldung 5, zu weiteren Konjunkturdaten in Meldung 6.",
      terms: ["inflation", "kerninflation", "leitzins", "basispunkt"],
      followups: ["e:inflation-what", "e:fed-hike", "e:central-banks-why", "e:inflation-expectations"],
      sources: [
        { title: "AOL/Bloomberg: New York Fed's Williams rules out jumbo rate hike for December", url: "https://www.aol.com/articles/york-feds-williams-rules-jumbo-205144000.html" },
        { title: "1027wbow.com: Fed's Williams still favors tighter monetary policy, but says now is not the time for 'dramatic action'", url: "https://1027wbow.com/2026/11/17/feds-williams-still-favors-tighter-monetary-policy-but-says-now-is-not-the-time-for-dramatic-action/" },
        { title: "Yahoo Finance: Fed's Waller leans toward quarter-point rate hike in December, open to 50 basis points", url: "https://finance.yahoo.com/economy/article/feds-waller-leans-toward-quarter-point-rate-hike-in-december-open-to-50-basis-points-090000672.html" },
        { title: "SeekingAlpha: Fed speak – Goolsbee calls CPI 'borderline disturbing'", url: "https://seekingalpha.com/news/4670490-fed-rate-outlook-inflation-goolsbee-paulson" },
        { title: "Yahoo Finance: Bessent tells the Fed not to hike 'too much'", url: "https://finance.yahoo.com/economy/policy/articles/bessent-tells-fed-not-hike-133844800.html" }
      ]
    },
    /* 5 WIRTSCHAFT: EZB/LAGARDE-INTERVIEW/NACHFOLGE */
    {
      id: "ezb-lagarde-interview-nachfolge-knot-decos-11-18", cats: ["economy"], when: "Lagarde-Interview veröffentlicht ca. 17./18.11. · Nachfolge-Entscheidung Eurogruppe erwartet Dezember · EZB-Sitzung 17.12.2026",
      headline: "Lagarde will Dezember-Zinserhöhung nicht garantieren, aber als wahrscheinliche Richtung bezeichnen – Notenbankchef Knot soll sich laut Bericht aus Nachfolge-Rennen zurückziehen",
      sec30: "EZB-Chefin Christine Lagarde sagte der japanischen Zeitung Yomiuri Shimbun, sie könne eine Zinserhöhung im Dezember nicht garantieren, es brauche aber „erhebliche Änderungen”, damit die EZB von der erwarteten Richtung abweiche. Bei der Nachfolgefrage für ihr Amt, das sie vorzeitig im Februar 2027 abgeben will, berichtet die niederländische Zeitung de Volkskrant, der niederländische Ex-Notenbankchef Klaas Knot wolle sich diese Woche aus dem Rennen zurückziehen, nachdem sich Deutschland und Frankreich informell auf den spanischen BIZ-Chef Pablo Hernández de Cos verständigt haben sollen. Die finale Eurozone-Inflation für Oktober wurde von Eurostat bei 4,0 % bestätigt, die Kernrate stieg auf 2,6 %.",
      blocks: [
        { h: "Was sagte Lagarde zur Dezember-Zinsentscheidung?", items: [
          { tag: "position", text: "Christine Lagarde sagte im Interview mit der Yomiuri Shimbun: „Wir wissen, dass die Inflationsdaten für die nächsten Quartale hoch bleiben werden.” Zur Dezember-Entscheidung sagte sie: „Ich kann heute nicht sagen, dass wir das im Dezember sicher tun werden. Was ich weiß, ist: Auf Basis der heutigen Informationen bräuchte es erhebliche Änderungen, damit die Richtung eine andere ist als die, die ich erwarte.” Sie erklärte zudem, sie habe bei vielen europapolitischen Schlüsselthemen Debatten erlebt, die „entweder gar nicht geführt wurden oder auf falschen Fakten basierten”, und wolle künftig frei sprechen können.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] }
        ]},
        { h: "Wie ist der Stand bei der Nachfolgefrage für Lagarde?", items: [
          { tag: "unbestaetigt", text: "Bis zur Frist am 6.11. hatten die Eurozone-Staaten zwei Kandidaten für Lagardes Nachfolge nominiert: den spanischen BIZ-Chef Pablo Hernández de Cos (zuvor Gouverneur der Banco de España) und den bis 2025 niederländischen Notenbankchef Klaas Knot. Laut einem Bericht der Zeitung de Volkskrant vom 16.11. will sich Knot diese Woche aus dem Rennen zurückziehen, weil sich Bundeskanzler Merz und Präsident Macron am Rande eines EU-Gipfels in Dublin informell auf de Cos verständigt hätten; eine endgültige Entscheidung der Eurozone-Regierungschefs steht noch aus und wird für Dezember erwartet.",
            ask: [{ label: "Mehr zur Fed-Zinsdebatte in den USA", ref: "s:4" }] }
        ]},
        { h: "Wie hat sich die Eurozone-Inflation entwickelt?", items: [
          { tag: "fakt", text: "Eurostat bestätigte am 18.11. die Eurozone-Inflation für Oktober bei 4,0 % (September: 3,8 %); die Kernrate stieg auf 2,6 %. Die Energiepreise legten im Jahresvergleich um rund 21 % zu, Dienstleistungen um 3,3 %, Nahrungsmittel/Alkohol/Tabak um 1,6 %. Italien lag mit 5,6 % deutlich über dem Eurozone-Durchschnitt.",
            ask: [{ label: "Was sind Erzeugerpreise und Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Lagarde die Dezember-Erhöhung als wahrscheinliche Richtung beschreibt, ohne sie fest zuzusagen, lässt der EZB bei der kommenden Sitzung formal Spielraum, auch wenn die am 16.11. vermeldete Reuters-Umfrage unter 71 Ökonomen bereits nahezu einhellig von einer Anhebung ausging. Dass sich die Nachfolgefrage für ihr Amt laut Berichten bereits vor der offiziellen Entscheidung in Richtung de Cos verschiebt, fällt in eine Phase, in der die EZB mitten in dieser Zinsentscheidung steht." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte in Meldung 4, zu weiteren Konjunkturdaten in Meldung 6.",
      terms: ["leitzins", "inflation", "kerninflation"],
      followups: ["e:ecb-hike", "e:central-banks-why", "e:inflation-what"],
      sources: [
        { title: "webull.com: ECB's Lagarde interview with Yomiuri Shimbun", url: "https://www.webull.com/news/15890816870237184" },
        { title: "Bloomberg: ECB succession advances as ministers look to pick trio of jobs", url: "https://www.bloomberg.com/news/articles/2026-11-09/ecb-succession-advances-as-ministers-look-to-pick-trio-of-jobs" },
        { title: "Newsquawk: Former ECB's Knot expected to withdraw from the race for the ECB presidency this week (via de Volkskrant)", url: "https://www.newsquawk.com/headlines/former-ecbs-knot-netherlands-is-expected-to-withdraw-from-the-race-for-the-ecb-presidency-this-week-with-his-chances-minimal-now-that-germany-and-france-have-agreed-in-principle-that-spains-de-cos-should-lead-the-ecb-reports-de-volkskrant" },
        { title: "Eurostat: Annual inflation up to 4.0% in the euro area", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-18112026-ap" },
        { title: "aktiencheck.de: Eurozone-Inflation – 4,0 Prozent bestätigt, Kernrate steigt auf 2,6 Prozent", url: "https://aktiencheck.de/artikel/eurozone-inflation-40-prozent-bestaetigt-kernrate-steigt-auf-26-prozent-wie-viel" }
      ]
    },
    /* 6 WIRTSCHAFT: US-KONJUNKTURDATEN + DEUTSCHE ZEW-ERWARTUNGEN */
    {
      id: "us-konjunkturdaten-zew-erwartungen-11-18", cats: ["economy"], when: "US-Einzelhandel/Industrieproduktion/PPI veröffentlicht 17.11. · ZEW-Konjunkturerwartungen veröffentlicht 17.11.",
      headline: "Deutsche ZEW-Konjunkturerwartungen springen überraschend deutlich, US-Erzeugerpreise beschleunigen auf 5,7 Prozent",
      sec30: "Das ZEW-Konjunkturbarometer für Deutschland stieg im November überraschend um 7,5 Punkte auf 35,6 Punkte – deutlich über der Erwartung von rund 28 Punkten und der höchste Stand seit Februar. In den USA stiegen die Einzelhandelsumsätze im Oktober um 0,2 % (im Rahmen der Erwartungen), während die Industrieproduktion um 0,4 % zurückging (Erwartung: +0,1 %) und die Erzeugerpreise (PPI) im Jahresvergleich auf 5,7 % beschleunigten, über der Erwartung von 5,3 %.",
      blocks: [
        { h: "Was zeigen die deutschen ZEW-Konjunkturerwartungen?", items: [
          { tag: "fakt", text: "Das ZEW-Konjunkturbarometer für Deutschland stieg im November um 7,5 Punkte auf 35,6 Punkte – deutlich über der Erwartung von rund 28,1 bis 28,8 Punkten und der höchste Stand seit Februar. Der Lage-Index für Deutschland verbesserte sich um 2,7 Punkte auf -33,2 Punkte.",
            ask: [{ label: "Was ist Inflation?", ref: "t:inflation" }] }
        ]},
        { h: "Was sagte ZEW-Präsident Wambach dazu?", items: [
          { tag: "position", text: "ZEW-Präsident Achim Wambach sagte: „Die deutsche Wirtschaft setzt ihren Erholungspfad fort, dieser bleibt aber verhalten.” Als stützende Faktoren nannte er steigende Auftragseingänge in der Industrie und fallende Ölpreise; zugleich wüchsen laut ZEW Sorgen über die Tragfähigkeit der Staatsverschuldung, da die Erholung vor allem von Staatsausgaben getragen werde." }
        ]},
        { h: "Was zeigten die US-Konjunkturdaten?", items: [
          { tag: "fakt", text: "Die US-Einzelhandelsumsätze stiegen im Oktober um 0,2 % gegenüber dem Vormonat (748,2 Mrd. Dollar, +6,8 % im Jahresvergleich) – im Rahmen der Erwartungen. Die Industrieproduktion fiel dagegen um 0,4 % (erwartet: +0,1 %), während die Fertigungsproduktion (Manufacturing) um 0,3 % zulegte. Die Erzeugerpreise (PPI) beschleunigten im Jahresvergleich auf 5,7 %, über der Erwartung von 5,3 % und dem Vormonatswert von 5,0 %; die Kernrate lag mit +0,3 % im Monatsvergleich im Rahmen der Erwartungen.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "t:erzeugerpreise" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass die deutschen Konjunkturerwartungen deutlich steigen, während gleichzeitig die US-Erzeugerpreise beschleunigen, zeigt zwei unterschiedliche Bilder: In Deutschland deuten die Daten auf eine – nach ZEW-Einschätzung verhaltene – Erholung hin, während in den USA der Preisdruck auf Herstellerebene zunimmt, was die Fed nach dieser Lesart in ihrer Zinsdebatte (mehr in Meldung 4) zusätzlich beeinflussen könnte." }
        ]}
      ],
      reaction: "Mehr zur Fed-Zinsdebatte in Meldung 4, zur EZB und Eurozone-Inflation in Meldung 5.",
      terms: ["inflation", "erzeugerpreise"],
      followups: ["e:ppi-what", "e:inflation-what", "e:central-banks-why"],
      sources: [
        { title: "onvista: ZEW-Konjunkturbarometer steigt überraschend deutlich – Erholung bleibt verhalten", url: "https://www.onvista.de/news/2026/11-17-zew-konjunkturbarometer-steigt-ueberraschend-deutlich-erholung-bleibt-verhalten-0-20-26577251" },
        { title: "RTTNews: U.S. retail sales rise 0.2% in October, in line with estimates", url: "https://www.rttnews.com/3715531/u-s-retail-sales-rise-0-2-in-october-in-line-with-estimates.aspx" },
        { title: "Bloomberg: US factory output increases 0.3% for a second straight month", url: "https://bloomberg.com/news/articles/2026-11-17/us-factory-output-increases-0-3-for-a-second-straight-month" },
        { title: "Invezz/TradingView: US producer prices accelerate to 5.7% annually in October", url: "https://www.tradingview.com/news/" }
      ]
    },
    /* 7 DEUTSCHLAND: STROMSTEUER-EINIGUNG KOALITIONSAUSSCHUSS */
    {
      id: "koalitionsausschuss-stromsteuer-einigung-11-18", cats: ["germany"], when: "Koalitionsausschuss Di/Mi, 17./18.11.2026, bis in die Nacht",
      headline: "Koalitionsausschuss einigt sich auf Stromsteuersenkung zum 1.1.2027 – Gegenfinanzierung nur für ein Jahr gesichert",
      sec30: "Der Koalitionsausschuss von Union und SPD einigte sich nach rund acht Stunden Verhandlung bis in die Nacht zum Mittwoch auf eine Senkung der Stromsteuer von derzeit 2,05 Cent auf den EU-Mindestsatz von 0,1 Cent pro Kilowattstunde – auch für Privathaushalte, nicht nur für Unternehmen. Die Senkung soll zum 1.1.2027 in Kraft treten und kostet rund 5,4 Mrd. Euro jährlich; finanziert werden soll sie vorwiegend über erwartete Überschüsse des EEG-Kontos, wobei die Finanzierung bislang nur für 2027 gesichert ist. Zusätzlich beschlossen wurde ein Spritpreisdeckel ab 1.1.2027. Bei der Rentenreform gab es dagegen keine Einigung.",
      blocks: [
        { h: "Was wurde konkret beschlossen?", items: [
          { tag: "fakt", text: "Die Stromsteuer wird zum 1.1.2027 von derzeit 2,05 Cent auf das EU-Mindestmaß von 0,1 Cent pro Kilowattstunde gesenkt – auch für Privathaushalte. Die Kosten werden auf rund 5,4 Mrd. Euro jährlich geschätzt. Nach Berechnungen spart ein Vier-Personen-Haushalt dadurch rund 7,75 Euro im Monat, ein Single-Haushalt rund 3 Euro. Zusätzlich wurde ein Spritpreisdeckel ab 1.1.2027 beschlossen; das zugehörige Gesetz soll am 2.12.2026 ins Kabinett.",
            ask: [{ label: "Was ist die Umlage/Stromsteuer?", ref: "t:umlage" }] }
        ]},
        { h: "Was ändert sich bei der Gegenfinanzierung, und was bleibt offen?", items: [
          { tag: "fakt", text: "Die Finanzierung der Stromsteuersenkung ist bislang nur für das Jahr 2027 gesichert, vorwiegend über erwartete Überschüsse des EEG-Kontos (Einnahmen aus der Förderung erneuerbarer Energien). Für die Zeit danach beziehungsweise bei Einnahmeausfällen ist laut Berichten ein weiteres „Maßnahmenpaket” vorgesehen, etwa Subventionsabbau oder Steuererhöhungen – eine dauerhafte Lösung fehlt bislang.",
            ask: [{ label: "Was ist die Schuldenbremse?", ref: "t:schuldenbremse" }] }
        ]},
        { h: "Wer unterstützt die Einigung, und womit begründet er das?", items: [
          { tag: "position", text: "Bundeskanzler Friedrich Merz sagte: „Wir haben die Senkung der Stromsteuer versprochen – und wir haben Wort gehalten.” CSU-Chef Markus Söder schrieb, „die CSU hält Wort”, und nannte die Stromsteuersenkung zentral für die Glaubwürdigkeit der Regierung. Vizekanzler Lars Klingbeil (SPD) sagte: „Wir machen das, was wir auch seriös finanzieren können” – ein Hinweis auf seine vorherige Forderung nach einer soliden Gegenfinanzierung. Verbände wie der Handelsverband Deutschland und der Bundesverband mittelständische Wirtschaft begrüßten die Einigung als „überfälliges Signal”." }
        ]},
        { h: "Wer kritisiert die Einigung, und womit begründet er das?", items: [
          { tag: "position", text: "FDP-Chef Wolfgang Kubicki bezeichnete die Einigung als „Demütigung” für Merz, der bis tief in die Nacht habe verhandeln müssen, um am Ende weniger zu erreichen, als im Koalitionsvertrag vereinbart gewesen sei. Grünen-Chefin Franziska Brantner nannte die auf ein Jahr befristete Senkung eine „Blamage für eine Bundesregierung”, die keine Planungssicherheit schaffen könne. Linken-Chefin Ines Schwerdtner kritisierte die Finanzierung über EEG-Rücklagen als „politisch fatal” angesichts ohnehin steigender Strompreise." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "einordnung", text: "Dass die Gegenfinanzierung nur für das erste Jahr gesichert ist, bedeutet laut Berichten, dass über eine dauerhafte Finanzierung der Stromsteuersenkung weiter verhandelt werden muss; ob und wie das „Maßnahmenpaket” für die Folgejahre aussieht, ist noch offen. Bei der Rentenreform wurde im selben Koalitionsausschuss keine Einigung erzielt – dieses Thema bleibt vertagt (mehr in Meldung 8)." }
        ]}
      ],
      reaction: "Mehr zur Rentenreform, zu aktuellen Umfragen und zur Bundespräsidentschaftskandidatur in Meldung 8.",
      terms: ["schuldenbremse", "umlage", "koalition"],
      followups: ["e:haushalt-basics", "e:debt-brake"],
      sources: [
        { title: "ZDFheute: Stromsteuer – Senkung beschlossen", url: "https://www.zdfheute.de/politik/stromsteuer-senkung-beschlossen-100.html" },
        { title: "Tagesspiegel (dpa): Koalitionsausschuss – Merz drückt Stromsteuersenkung durch, aber nur halb", url: "https://www.tagesspiegel.de/politik/dpa-koalitionsausschuss-merz-druckt-stromsteuersenkung-durch-aber-nur-halb-16296829.html" },
        { title: "cash-online.de: Stromsteuer sinkt, Rentenreform wartet – was der Koalitionsausschuss beschlossen hat", url: "https://www.cash-online.de/a/stromsteuer-sinkt-rentenreform-wartet-was-der-koalitionsausschuss-beschlossen-hat-730813/" }
      ]
    },
    /* 8 DEUTSCHLAND: RENTENREFORM VERTAGT + UMFRAGEN + BERTHOLD */
    {
      id: "rentenreform-vertagt-umfragen-berthold-11-18", cats: ["germany"], when: "Koalitionsausschuss 17./18.11. · YouGov 16.11. · Forsa 17.11. · INSA 13.-16.11.",
      headline: "Rentenreform bleibt im Koalitionsausschuss ungelöst, neue Umfragen sehen die AfD weiterhin deutlich vor der Union",
      sec30: "Der Streit um die abschlagsfreie Rente nach 45 Beitragsjahren wurde im Koalitionsausschuss vom 17./18.11. nicht gelöst und bleibt zwischen Arbeitsminister Alexander Schweitzer (SPD) und Teilen der Union offen; Gewerkschaften wie Verdi, IG Metall und DGB lehnen eine Abschaffung geschlossen ab. Neue Umfragen von YouGov (16.11.), Forsa (17.11.) und INSA sehen die AfD weiterhin bei 26 bis 29 %, die Union zwischen 19 und 22 %. Die Kandidatur des früheren Fußball-Weltmeisters Thomas Berthold für die AfD bei der Bundespräsidentschaftswahl sorgt weiter für Kontroversen, unter anderem distanzierte sich der DFB scharf von ihm.",
      blocks: [
        { h: "Wie ist der Stand bei der Rentenreform?", items: [
          { tag: "fakt", text: "Der Streit um die von der Alterssicherungskommission empfohlene Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren wurde im Koalitionsausschuss vom 17./18.11.2026 nicht gelöst. Die Rentenreform soll aufgeteilt werden: Nur der rentenrechtliche Teil soll noch vor Weihnachten 2026 ins Kabinett, die geplante Kapitalrente wird auf 2027 verschoben; die abschließende Bundestagsbefassung verschiebt sich damit auf das erste Quartal 2027.",
            ask: [{ label: "Was ist die Rente mit 63?", ref: "e:rente-basics" }] }
        ]},
        { h: "Wer unterstützt welche Position, und womit begründet er sie?", items: [
          { tag: "position", text: "Arbeitsminister Alexander Schweitzer (SPD) sucht einen Kompromiss statt einer vollständigen Abschaffung; laut einem Bericht soll die abschlagsfreie Rente erhalten bleiben, aber nur für Versicherte mit tatsächlich 45 Arbeitsjahren, ohne Zeiten wie Arbeitslosigkeit anzurechnen. IG-Metall-Chefin Christiane Benner sagte: „Die abschlagsfreie Rente nach 45 Beitragsjahren ist gerecht und richtig.” DGB-Vorstandsmitglied Anja Piel sagte schärfer: „Man darf die Menschen nicht auspressen wie eine Zitrone.” Laut einer DGB-Analyse erwarten sieben von zehn Beschäftigten in Pflege- und Bauberufen, nicht bis zum gesetzlichen Rentenalter arbeiten zu können.",
            ask: [{ label: "Mehr zur Stromsteuer-Einigung", ref: "s:7" }] }
        ]},
        { h: "Was zeigen die aktuellen Umfragen?", items: [
          { tag: "fakt", text: "YouGov (Erhebung 13.-16.11., veröffentlicht 16.11.) sah die AfD bei 29 %, die Union bei 19 %, die Grünen bei 15 %, die SPD bei 15 %, die Linke bei 10 % und die FDP bei 5 %. Forsa (Erhebung 10.-16.11., veröffentlicht 17.11.) sah die AfD bei 26 %, die Union bei 21 %, die Grünen bei 16 %, die SPD bei 13 % und die Linke bei 11 %. INSA (Erhebung 13.-16.11.) sah die AfD bei 28 %, die Union bei 19 %. Laut INSA im Auftrag der Bild befürworten 58 % der Deutschen vorgezogene Neuwahlen, nur 26 % wollen, dass die Regierung Merz bis 2029 im Amt bleibt.",
            ask: [{ label: "Hätte die Koalition laut solchen Umfragen eine Mehrheit?", ref: "e:coalition-majority" }] }
        ]},
        { h: "Wie wird Thomas Berthold als Kandidat für das Bundespräsidentenamt diskutiert?", items: [
          { tag: "position", text: "DFB-Präsident Bernd Neuendorf distanzierte sich scharf von der Kandidatur des früheren Fußball-Weltmeisters Thomas Berthold für die AfD, da das AfD-Programm mit Satzung und Ethik-Grundsätzen des DFB unvereinbar sei. Laut Berichten gibt es selbst innerhalb der AfD Unbehagen über frühere Äußerungen Bertholds. Berthold selbst betont, er trete „ohne Parteibuch” für das Amt an." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass bei der Stromsteuer eine Einigung gelang, während die Rentenreform im selben Koalitionsausschuss vertagt wurde, zeigt erneut unterschiedliche Konfliktlinien zwischen Union und SPD: Bei der Stromsteuer ging es vor allem um die Gegenfinanzierung, bei der Rente um eine grundsätzliche Richtungsfrage zwischen SPD-Arbeitsminister und Teilen der Union. Parallel zeigen mehrere unabhängige Umfrageinstitute übereinstimmend einen großen Abstand der AfD vor der Union, auch wenn sich die genauen Werte zwischen den Instituten unterscheiden." }
        ]}
      ],
      reaction: "Mehr zur Stromsteuer-Einigung und zum Bundeshaushalt 2027 in Meldung 7.",
      terms: ["koalition"],
      followups: ["e:coalition-majority", "e:rente-basics", "e:haushalt-basics"],
      sources: [
        { title: "ad-hoc-news.de: Rentenreform – Kabinett plant Beschluss vor Weihnachten, Kapitalrente folgt 2027", url: "https://www.ad-hoc-news.de/wissenschaft/rentenreform-kabinett-plant-beschluss-vor-weihnachten-kapitalrente-folgt-2027/70460882" },
        { title: "buerger-geld.org: Rente mit 63 – Arbeitsminister Schweitzer sucht Kompromiss statt Abschaffung", url: "https://www.buerger-geld.org/news/rente/rente-mit-63-arbeitsminister-schweitzer-sucht-kompromiss-statt-abschaffung/" },
        { title: "YouGov: Sonntagsfrage – AfD 10 Prozentpunkte vor der Union", url: "https://yougov.com/de-de/artikel/55986-yougov-sonntagsfrage-afd-10-prozentpunkte-vor-der-union-vier-von-zehn-haben-keine-klare-vorstellung-davon-wer-ilse-aigner-ist" },
        { title: "dawum.de: Forsa-Umfrage, 17.11.2026", url: "https://dawum.de/Bundestag/Forsa/2026-11-17" },
        { title: "web.de: DFB scharf – Bertholds Bundespräsidenten-Kandidatur", url: "https://web.de/magazine/sport/fussball/dfb-scharf-bertholds-bundespraesidenten-kandidatur-42952022" }
      ]
    },
    /* 9 GEOPOLITIK: APEC-GIPFEL SHENZHEN / TRUMP-XI-PUTIN */
    {
      id: "apec-gipfel-shenzhen-trump-xi-putin-berlin-11-18", cats: ["world", "geo"], when: "APEC-Gipfel 18.-19.11.2026 in Shenzhen · Dreiertreffen angesetzt für Do 19.11. · Berlin-Treffen Witkoff/Kushner 19.11.",
      headline: "Trump trifft in Shenzhen ein, erstes Dreiertreffen mit Xi und Putin für Donnerstag angesetzt – parallel Gespräche zu Sicherheitsgarantien in Berlin",
      sec30: "Donald Trump ist am Mittwoch in Shenzhen zum APEC-Gipfel (18.-19.11.) eingetroffen und wurde von Xi Jinping persönlich auf dem Rollfeld empfangen. Bei einem Bankett am Mittwochabend trafen Trump und Putin erstmals zusammen; das eigentliche, erste trilaterale Spitzentreffen der drei Staatschefs ist nach übereinstimmenden Berichten für Donnerstag, 19.11., angesetzt und hat nach bisherigem Stand noch nicht stattgefunden. Parallel treffen sich die US-Sondergesandten Steve Witkoff und Jared Kushner am 19.11. in Berlin mit ukrainischen und europäischen Vertretern zu Sicherheitsgarantien für die Ukraine.",
      blocks: [
        { h: "Was ist für Donnerstag in Shenzhen geplant?", items: [
          { tag: "fakt", text: "Donald Trump traf am Mittwochmorgen in Shenzhen ein und wurde von Xi Jinping persönlich auf dem Rollfeld empfangen – laut einem Bericht eine seltene Geste chinesischer Protokollpraxis. Beim Willkommensbankett am Mittwochabend trafen Trump und Putin erstmals zusammen; Xi hatte Putin zuvor bereits getroffen. Das erste trilaterale Spitzentreffen der drei Staatschefs ist für Donnerstag, 19.11., angesetzt – nach bisherigem Stand hat es noch nicht stattgefunden.",
            ask: [{ label: "Vom Konflikt zur Börse", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Welche Themen stehen laut bisherigen Angaben auf der Agenda?", items: [
          { tag: "einordnung", text: "Berichten zufolge sollen bei dem Dreiertreffen nukleare Rüstungsreduzierung, der Iran-Krieg im Nahen Osten sowie „strategische Stabilität” besprochen werden; parallel verhandeln Trump und Xi bilateral über Handelsfragen, darunter einen möglichen Handels-Waffenstillstand über Januar 2027 hinaus. Die Ukraine ist nach Berichtslage kein offizieller Tagesordnungspunkt des Dreiertreffens, dürfte nach Einschätzung von Beobachtern aber am Rande thematisiert werden." }
        ]},
        { h: "Wie reagieren die Ukraine und europäische Staaten?", items: [
          { tag: "position", text: "Der ukrainische Außenminister Andrij Sybiha sagte, Putin könne „nur von einer neuen Jalta-Konferenz träumen”, da er seine Kriegsziele bis heute nicht erreicht habe. Ein europäischer Diplomat sagte gegenüber Axios: „Wir wissen, dass jedes Mal, wenn Präsident Trump mit Putin spricht oder ihn sieht, es schlechte Nachrichten für die Ukraine und Europa bedeutet. Wir bereiten uns auf alles vor.” EU-Außenbeauftragte Kaja Kallas nannte russische Forderungen nach einer neuen europäischen Sicherheitsarchitektur „absurd”.",
            ask: [{ label: "Mehr zur Eskalation am Golf", ref: "s:10" }] }
        ]},
        { h: "Was ist für Berlin am 19.11. geplant?", items: [
          { tag: "fakt", text: "Parallel zum Shenzhen-Gipfel treffen sich die US-Sondergesandten Steve Witkoff und Jared Kushner am 19.11. in Berlin mit ukrainischen und europäischen Vertretern (unter anderem aus Deutschland, Frankreich, Großbritannien, Italien, Polen sowie EU und NATO) zu Sicherheitsgarantien für die Ukraine. Präsident Selenskyj sprach laut Berichten bereits im Vorfeld mit europäischen Sicherheitsberatern und forderte „eiserne” Sicherheitsgarantien nach Art des NATO-Beistandsartikels 5, verzichtet im Gegenzug aber auf das Beharren auf einem NATO-Beitritt; ein entsprechendes Dokument sei nach seinen Angaben „zu 100 Prozent” fertig." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass das erste Dreiertreffen von Trump, Xi und Putin zeitlich mit separaten Gesprächen zu ukrainischen Sicherheitsgarantien in Berlin zusammenfällt, deutet laut Beobachtern auf einen koordinierten diplomatischen Vorstoß der USA hin, der auf mehreren Ebenen gleichzeitig verhandelt wird – eine Konstellation, die europäische Diplomaten nach eigenen Angaben mit Vorsicht beobachten." }
        ]}
      ],
      reaction: "Mehr zur Eskalation in der Straße von Hormus in Meldung 10, zum Ölpreis in Meldung 15.",
      terms: [],
      followups: ["e:why-oil-up-geo", "chain:oil-to-markets"],
      sources: [
        { title: "CNBC: Trump arrives in China for APEC summit, trilateral meeting with Xi and Putin", url: "https://www.cnbc.com/2026/11/18/trump-xi-putin-china-apec.html" },
        { title: "Anadolu Agency: Kremlin says Putin, Xi, Trump to hold trilateral meeting in Shenzhen on Nov. 19", url: "https://www.aa.com.tr/en/eurasia/kremlin-says-putin-xi-trump-to-hold-trilateral-meeting-in-shenzhen-on-nov-19/4125290" },
        { title: "Al Jazeera: What is Trump hoping to achieve at APEC meeting in China", url: "https://www.aljazeera.com/amp/news/2026/11/18/what-is-trump-hoping-to-achieve-at-apec-meeting-in-china" },
        { title: "Axios: Trump-Xi-Putin summit worries Europe", url: "https://www.axios.com/2026/11/17/trump-xi-putin-summit-europe-worried" },
        { title: "Censor.net: Witkoff, Kushner plan Berlin talks on Ukraine security guarantees", url: "https://censor.net/en/news/4034082/witkoff-kushner-plan-berlin-talks-on-ukraine-security-guarantees" }
      ]
    },
    /* 10 GEOPOLITIK: IRAN/HORMUZ-ESKALATION */
    {
      id: "iran-hormuz-eskalation-qeshm-kuwait-bahrain-11-18", cats: ["world", "geo"], when: "Drohnenangriffe auf Bahrain 17.11. · US-Luftschlag auf Qeshm 17.11. · Angriffe auf Kuwait 18.11.",
      headline: "US-Kampfjets greifen nach iranischen Drohnenangriffen auf Bahrain eine Raketenstellung auf der iranischen Insel Qeshm an, Iran meldet weitere Angriffe auf Kuwait",
      sec30: "Das US-Zentralkommando CENTCOM meldete, die iranischen Revolutionsgarden hätten am Dienstag mehrere Drohnen auf US-Stützpunkte in Bahrain abgefeuert, die ohne Schäden abgefangen worden seien; als Reaktion griffen US-Kampfjets eine Raketenstellung der Revolutionsgarden auf der iranischen Insel Qeshm in der Straße von Hormus an. Am Mittwoch meldeten Kuwait und Bahrain weitere Angriffe mit Raketen und Drohnen, teils über jemenitische Huthi-Verbündete, auf Luftabwehrsysteme und Startplattformen. Irans Armeechef Amir Hatami drohte mit einer „noch verheerenderen” Antwort ohne „geografische Grenzen”. Die iranische Marine meldete zudem weitere Tankervorfälle in der Straße von Hormus, die CENTCOM wie zuvor als nicht belegt zurückweist.",
      blocks: [
        { h: "Was ist am Golf seit Dienstag eskaliert?", items: [
          { tag: "fakt", text: "CENTCOM meldete, die Revolutionsgarden hätten am Dienstag mehrere Drohnen auf US-Stützpunkte in Bahrain (unter anderem die Sheikh-Isa-Luftwaffenbasis) abgefeuert; diese seien „ohne Schäden an Ausrüstung oder Verletzte” abgefangen worden. Als Reaktion führten US-Kampfjets einen nach eigenen Angaben „Selbstverteidigungs”-Schlag mit Präzisionsmunition gegen eine Raketenabschussstelle der Revolutionsgarden auf der iranischen Insel Qeshm in der Straße von Hormus aus. Am Mittwoch meldeten Kuwait und Bahrain weitere Angriffe mit Raketen und Drohnen – teils über jemenitische Huthi-Verbündete Irans – auf Patriot-Luftabwehrsysteme und Drohnen-/Raketenstartplattformen am Ali-Al-Salem-Stützpunkt in Kuwait; beide Länder meldeten, die Angriffe abgefangen zu haben.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] }
        ]},
        { h: "Wie reagiert Iran, und welche Drohung gab es?", items: [
          { tag: "position", text: "Die iranische Nachrichtenagentur Mehr erklärte, der US-Luftschlag auf Qeshm habe „keine Opfer oder Schäden an kritischer bzw. öffentlicher Infrastruktur” verursacht; Irans Außenministerium wies die Vorwürfe als „grundlos” zurück. Irans Armeechef Amir Hatami warnte: „Sollte der Feind einen Fehler machen und Handlungen wiederholen, die ihn zuvor zur Verzweiflung getrieben haben, wird unsere Antwort – gegen den Feind und seine Unterstützer gerichtet – zweifellos noch verheerender sein und keine geografischen Grenzen kennen.”" }
        ]},
        { h: "Was ist mit den gemeldeten Tanker-Zwischenfällen?", items: [
          { tag: "unbestaetigt", text: "Die Revolutionsgarden-Marine meldete am 17./18.11. weitere Tanker-Zwischenfälle in der Straße von Hormus, darunter einen angeblich nach Minentreffer gesunkenen Supertanker mit über 2 Mio. Barrel Ladung; laut iranischer Marine sei die Durchfahrt nur mit Koordination der iranischen Streitkräfte „sicher”. CENTCOM hält weiterhin fest, die Hauptschifffahrtsrouten seien frei von Minen; mehr als 3.000 Handelsschiffe hätten die Wasserstraße in den vergangenen sechs Monaten passiert. Die USS Theodore Roosevelt traf laut Berichten am 15.11. im CENTCOM-Gebiet ein, womit die USA über drei Flugzeugträger in der Region verfügen.",
            ask: [{ label: "Wie wirkt der Ölpreis auf die Inflation?", ref: "e:oil-inflation" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen werden diskutiert?", items: [
          { tag: "fakt", text: "Trotz der eskalierenden Angriffe fiel der Brent-Preis am Mittwoch weiter auf rund 92 Dollar; als Hintergrund nennen Berichte vor allem gestiegene US-Rohölvorräte und ein von der IEA erwartetes globales Angebotsüberangebot, während die Hormuz-Eskalation den Rückgang lediglich begrenzt habe.",
            ask: [{ label: "Mehr zum Ölmarkt und OPEC+", ref: "s:15" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis trotz eines direkten US-Luftschlags auf iranisches Gebiet und weiterer Angriffe auf US-Partnerstaaten am Golf weiter fällt, deutet darauf hin, dass Märkte das globale Angebotsbild aktuell stärker gewichten als die militärische Eskalation – ein Muster, das sich bereits in den vergangenen Wochen gezeigt hatte, aber angesichts der jetzt deutlich konkreteren Vorfälle (bestätigter US-Luftschlag, mehrere Länder betroffen) in seiner Tragfähigkeit von Beobachtern beobachtet wird." }
        ]}
      ],
      reaction: "Mehr zum geplanten Trump-Xi-Putin-Gipfel in Meldung 9, zum Ölpreis und OPEC+ in Meldung 15.",
      terms: ["brent"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:oil-inflation"],
      sources: [
        { title: "The National: US jets strike IRGC missile launch site on Iran's Qeshm Island in self-defence", url: "https://www.thenationalnews.com/news/us/2026/11/17/us-jets-strike-irgc-missile-launch-site-on-irans-qeshm-island-in-self-defence/" },
        { title: "France24 Live: Kuwait, Bahrain report drone and missile attacks", url: "https://www.france24.com/en/middle-east/20261118-middle-east-live-kuwait-bahrain-report-drone-and-missile-attacks" },
        { title: "Gulf News: Middle East war – Iran attacks Bahrain, Kuwait, drone threats keep Gulf on high alert as US hits Iran's Qeshm", url: "https://gulfnews.com/world/mena/middle-east-war-iran-attacks-bahrain-kuwait-drone-threats-keep-gulf-on-high-alert-as-us-hits-irans-qeshm-1.500751444" },
        { title: "Shafaq News: Strait of Hormuz cleared of mines, CENTCOM commander says", url: "https://shafaq.com/en/World/Strait-of-Hormuz-cleared-of-mines-CENTCOM-Commander-says" },
        { title: "IranWire: IRGC claims two more tankers struck mines in the Strait of Hormuz", url: "https://iranwire.com/en/news/159877-irgc-claims-two-more-tankers-struck-mines-in-the-strait-of-hormuz/" }
      ]
    },
    /* 11 DEFENCE: RHEINMETALL/KNDS/HENSOLDT/RENK/TKMS/SAFE */
    {
      id: "ruestungsbranche-rheinmetall-knds-tkms-safe-11-18", cats: ["defence"], when: "Rheinmetall-Kursverlauf 16.-18.11. · TKMS-Auftrag 17.11. · KNDS weiterhin nicht unterschrieben · SAFE-Frist 30.11.",
      headline: "Rheinmetall-Aktie erholt sich leicht nach weiterem Kursrückgang, TKMS sichert sich Fregatten-Großauftrag, Bund-Einstieg bei KNDS weiterhin nicht unterschrieben",
      sec30: "Die Rheinmetall-Aktie fiel am Dienstag auf ein neues 52-Wochen-Tief von 738,70 Euro und erholte sich am Mittwoch auf rund 767 Euro (+0,83 %) – damit weiterhin rund 49 % unter dem Jahreshoch vom Januar. Mehrere Analysten senkten seit Montag ihre Kursziele weiter (Berenberg auf 900 Euro, Jefferies auf 1.100 Euro). Thyssenkrupp Marine Systems (TKMS) besiegelte am 17.11. einen Vertrag über vier zusätzliche MEKO-A-200-Fregatten für die Deutsche Marine. Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS ist auch am 18.11. weiterhin nicht final unterschrieben.",
      blocks: [
        { h: "Wie hat sich die Rheinmetall-Aktie entwickelt?", items: [
          { tag: "fakt", text: "Die Rheinmetall-Aktie fiel am Dienstag intraday auf ein neues 52-Wochen-Tief von 738,70 Euro, Xetra-Schluss bei 763,00 Euro (-0,8 %). Am Mittwoch erholte sie sich auf rund 767,20 Euro (+0,83 %) – damit weiterhin rund 49 % unter dem Jahreshoch von 1.966 Euro vom Januar. Seit Goldmans Kurszielsenkung vom Montag (2.100 auf 1.350 Euro) senkten auch Berenberg (auf 900 Euro, „Hold”) und Jefferies (auf 1.100 Euro) ihre Kursziele; der Analystendurchschnitt liegt bei rund 1.330 bis 1.360 Euro, bei 17 Kauf- und 5 Halteempfehlungen.",
            ask: [{ label: "Was war der Hintergrund der jüngsten Gewinnwarnung?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Was meldet TKMS?", items: [
          { tag: "fakt", text: "Thyssenkrupp Marine Systems (TKMS) besiegelte am 17.11. mit dem Bundesamt für Ausrüstung (BAAINBw) einen Vertrag über vier zusätzliche MEKO-A-200-DEU-Fregatten; damit umfasst das Gesamtprogramm nun acht Fregatten für die Deutsche Marine. Die erste Fregatte soll Ende 2029 geliefert werden; ein Auftragswert wurde nicht genannt.",
            ask: [{ label: "Mehr zu RENK, Hensoldt und der SAFE-Finanzierung", ref: "e:nato-target" }] }
        ]},
        { h: "Was ist beim Bund-Einstieg bei KNDS bekannt?", items: [
          { tag: "unbestaetigt", text: "Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS (50 % Anteil, abgeleitet aus einer Vor-Börsengang-Bewertung von 11,2 Mrd. Euro plus 1 Mrd. Euro Aufschlag) ist den ausgewerteten Quellen zufolge auch am 18.11. weiterhin nicht final unterschrieben; die Unterzeichnung wird „noch im November” erwartet, der Vollzug für Dezember 2026. Deutschland und Frankreich planen zudem, nach dem Einstieg je 10 % ihrer Anteile zu gegebener Zeit abzugeben, mit Blick auf einen späteren gemeinsamen Börsengang.",
            ask: [{ label: "Was passiert bei Übernahmen zwischen Unterzeichnung und Vollzug?", ref: "e:deal-risks" }] }
        ]},
        { h: "Was melden RENK, Hensoldt und die EU-Verteidigungsfinanzierung SAFE?", items: [
          { tag: "fakt", text: "Hensoldt meldete für die ersten neun Monate 2026 einen Rekord-Auftragsbestand von 10,367 Mrd. Euro (+46,1 % ggü. Vorjahr) und hob die Umsatzprognose 2026 auf rund 2,8 Mrd. Euro an. RENK meldete einen Auftragsbestand von 7,6 Mrd. Euro, die Aktie wurde laut Marktkommentaren trotz starker operativer Zahlen vom allgemeinen Sektor-Abwärtstrend mitgezogen. Bei der zweiten SAFE-Finanzierungsrunde über 21,3 Mrd. Euro läuft die Antragsfrist für die EU-Mitgliedstaaten bis 30.11.; bislang wurden rund 16,4 Mrd. Euro an 2026er-Mitteln ausgezahlt." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass RENK, Hensoldt und TKMS ihre Auftragslage weiter verbessern, während die Rheinmetall-Aktie nahe ihrem 52-Wochen-Tief bleibt und der KNDS-Einstieg des Bundes weiterhin nicht unterschrieben ist, deutet darauf hin, dass die operative Nachfrage in der Rüstungsbranche laut den vorliegenden Daten unverändert hoch bleibt, während einzelne Unternehmens- und Staatsvorhaben unterschiedlich stark von der Marktskepsis betroffen sind." }
        ]}
      ],
      reaction: "Mehr zur allgemeinen Marktlage in Meldung 1 und 2.",
      terms: ["enterprise-value"],
      followups: ["e:nato-target", "e:defence-order", "e:defence-stocks", "e:ma-steps"],
      sources: [
        { title: "4investors: Rheinmetall-Aktie – Kursbewegung 18.11.2026", url: "https://www.4investors.de/nachrichten/boerse.php?sektion=stock&ID=193467" },
        { title: "aktiencheck.de: Rheinmetall-Aktie – Prognose, Goldman kappt auf 1.350 Euro, Berenberg auf 900", url: "https://aktiencheck.de/artikel/rheinmetall-aktie-prognose-goldman-kappt-auf-1350-euro-berenberg-auf-900-was" },
        { title: "onvista: Rüstungskonzern TKMS besiegelt Auftrag für weitere Fregatten", url: "https://www.onvista.de/news/2026/11-17-ruestungskonzern-tkms-besiegelt-auftrag-fuer-weitere-fregatten-0-20-26577252" },
        { title: "Handelsblatt: Rüstung – Bund zahlt 6,6 Milliarden Euro für KNDS-Einstieg", url: "https://www.handelsblatt.com/politik/deutschland/ruestung-bund-zahlt-66-milliarden-euro-fuer-knds-einstieg/100268563.html" },
        { title: "finanznachrichten.de: Hensoldt-Auftrag – 3,56 Milliarden Euro Auftragseingang", url: "https://www.finanznachrichten.de/nachrichten-2026-11/70042816-hensoldt-aktie-auftragsflut-sprengt-alle-rekorde-jetzt-wird-auch-die-prognose-angehoben-617.htm" }
      ]
    },
    /* 12 DEALS/PRIVATE CREDIT: MARVELL-LUMENTUM + PRIVATE-CREDIT-STRESS */
    {
      id: "marvell-lumentum-private-credit-stress-11-18", cats: ["deals", "credit"], when: "Deal angekündigt 2.11. · Kursverlauf bis 18.11. · Morgan-Stanley-Deal 17.11.",
      headline: "Marvell-Lumentum-Deal-Spread bleibt groß, Morgan Stanley reicht gestrandeten Kredit an Private-Credit-Fonds weiter",
      sec30: "Bei der am 2.11. vereinbarten All-Stock-Fusion von Marvell und Lumentum (Umtauschverhältnis 4,5 Marvell-Aktien je Lumentum-Aktie) ist der implizite Wert pro Lumentum-Aktie durch den Kursverfall von Marvell auf rund 657 bis 660 Dollar gefallen, gegenüber 1.132 Dollar bei Ankündigung – ein Rückgang von fast 42 %. Mehrere Kanzleien untersuchen weiterhin, ob der Lumentum-Vorstand seine Treuepflichten verletzt hat. Parallel zeigt ein neuer Private-Credit-Deal, wie Kreditfonds zunehmend als Auffangbecken für Banken dienen: Antares Capital, Blue Owl, Carlyle und Golub Capital übernahmen einen 1,3 Mrd. Dollar schweren Kredit, den Morgan Stanley nicht am syndizierten Markt platzieren konnte.",
      blocks: [
        { h: "Wie hat sich die Marvell-Lumentum-Fusion entwickelt?", items: [
          { tag: "fakt", text: "Marvell handelte am 18.11. bei rund 145 bis 155 Dollar, nach einem Rückgang von rund 36 % binnen eines Monats. Bei dem festen Umtauschverhältnis von 4,5 Marvell-Aktien je Lumentum-Aktie ergibt sich daraus ein impliziter Wert von nur noch rund 657 bis 660 Dollar pro Lumentum-Aktie, gegenüber 1.132 Dollar bei der Ankündigung am 2.11. – ein Rückgang von fast 42 %. Das Closing wird laut Quellen für das erste Halbjahr 2028 erwartet.",
            ask: [{ label: "Was kann bei Übernahmen zwischen Unterzeichnung und Vollzug schiefgehen?", ref: "e:deal-risks" }] }
        ]},
        { h: "Wie reagieren Analysten und Aktionärsanwälte?", items: [
          { tag: "fakt", text: "Bank of America (Kursziel von 400 auf 225 Dollar) und TD Cowen (von 350 auf 175 Dollar) senkten ihre Marvell-Kursziele und stuften die Aktie ab; Raymond James stufte dagegen auf „Strong Buy” mit einem Kursziel von 1.328 Dollar hoch. Kanzleien wie Monteverde & Associates, Halper Sadeh und Kahn Swick & Foti untersuchen weiterhin, ob der Lumentum-Vorstand seine Treuepflichten verletzt hat; eine formell eingereichte Klage liegt den ausgewerteten Quellen zufolge weiterhin nicht vor.",
            ask: [{ label: "Was ist ein EBITDA?", ref: "t:ebitda" }] }
        ]},
        { h: "Wie zeigt sich der Stress im Private-Credit-Markt?", items: [
          { tag: "fakt", text: "Private-Credit-Geber – Antares Capital, Blue Owl Capital, Carlyle Group und Golub Capital – übernahmen einen Kredit über 1,3 Mrd. Dollar zur Finanzierung von L Cattertons Übernahme der Gesundheitsplattform Fullscript, nachdem Morgan Stanley das Darlehen nicht im syndizierten Leveraged-Loan-Markt platzieren konnte. Der Kredit wurde mit einem Zinssatz von 4 Prozentpunkten über SOFR und einem Abschlag von 0,96 Dollar pro Dollar verkauft; Morgan Stanley stellte zusätzlich eine revolvierende Kreditlinie über 230 Mio. Dollar bereit.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass eine Bank einen Kredit nicht am öffentlichen Markt platzieren kann und ihn an Private-Credit-Fonds weitergibt, illustriert laut Berichten einen Trend: Private Credit fungiert zunehmend als Ventil für Banken, die auf riskanteren Krediten sitzen bleiben. Zusammen mit dem großen Deal-Spread bei Marvell-Lumentum und den zuvor gemeldeten Rekord-Ausfallzahlen bei KBRA zeigt sich eine Branche, in der sowohl bei Übernahmefinanzierungen als auch bei bestehenden Krediten erhöhte Vorsicht herrscht." }
        ]}
      ],
      deal: { value: "~115 Mrd. $ bei Ankündigung (2.11.); impliziter Wert je Lumentum-Aktie inzwischen rund 657–660 $ (vs. 1.132 $ bei Ankündigung)", buyer: "Marvell Technology", target: "Lumentum", sector: "Halbleiter/Optik (KI-Infrastruktur)", type: "All-Stock-Fusion, Closing erwartet H1 2028" },
      reaction: "Mehr zu Nvidia und zur KI-Chipbranche in Meldung 14.",
      terms: ["ebitda", "sofr", "credit-spread"],
      followups: ["e:deal-risks", "e:private-credit-what", "e:sofr-spread"],
      sources: [
        { title: "Blockchain.News: MRVL price prediction – Lumentum deal debate collides with AI selloff", url: "https://blockchain.news/news/20261118-price-prediction-mrvl-lumentum-deal-debate-collides-with-a" },
        { title: "Yahoo Finance: Analysts downgrade Marvell, slash price targets", url: "https://finance.yahoo.com/markets/stocks/articles/analysts-downgrade-marvell-slash-price-133715676.html" },
        { title: "TipRanks: Marvell stock – why Wall Street is split on the $115B Lumentum acquisition", url: "https://www.tipranks.com/news/marvell-stock-mrvl-why-wall-street-is-split-on-the-115b-lumentum-acquisition" },
        { title: "Bloomberg: Private credit helps Morgan Stanley avoid $1.3 billion hung loan", url: "https://www.bloomberg.com/news/articles/2026-11-17/private-credit-helps-morgan-stanley-avoid-1-3-billion-hung-loan" }
      ]
    },
    /* 13 DEALS/PE: NEUE DEALS – ICEYE/AVIO, TPG/BILL HOLDINGS */
    {
      id: "neue-deals-iceye-avio-tpg-bill-holdings-11-18", cats: ["deals", "pe"], when: "Iceye/Avio-Angebot 17.11. · TPG/BILL-Gespräche laufend, Stand 17.11.",
      headline: "Finnisches Unternehmen Iceye bietet 2 Milliarden Euro für den italienischen Raketenbauer Avio, TPG verhandelt über Übernahme von BILL Holdings",
      sec30: "Das finnische Satellitenunternehmen Iceye hat am 17.11. ein freiwilliges Übernahmeangebot über 2,05 Mrd. Euro (41 Euro pro Aktie, 21,3 % Prämie) für den italienischen Raketenbauer Avio vorgelegt; Italiens Verteidigungsminister Crosetto äußerte Bedenken. Parallel führt der Finanzinvestor TPG laut Berichten fortgeschrittene Gespräche über eine Übernahme der US-Fintech-Firma BILL Holdings (Marktkapitalisierung rund 4,8 Mrd. Dollar) ins Private; ein finaler Preis liegt noch nicht vor.",
      blocks: [
        { h: "Was bietet Iceye für Avio?", items: [
          { tag: "fakt", text: "Das finnische Unternehmen Iceye legte am 17.11.2026 ein freiwilliges Übernahmeangebot über 2,05 Mrd. Euro für den italienischen Raketenbauer Avio S.p.A. vor – 41 Euro pro Aktie, eine Prämie von 21,3 % auf den unbeeinflussten Kurs. Größte Aktionäre von Avio sind Leonardo (18,04 %), Advent International (6,54 %) und Goldman Sachs (5,33 %). Iceye kündigte zusätzlich eine Investition von 1 Mrd. Euro in Italien an, falls der Deal zustande kommt, sowie ein Delisting von Avio von Euronext Mailand; die Mindestannahmeschwelle liegt bei 66,67 %.",
            ask: [{ label: "Was ist ein Übernahmeangebot?", ref: "t:take-private" }] }
        ]},
        { h: "Wie reagiert die italienische Regierung?", items: [
          { tag: "position", text: "Italiens Verteidigungsminister Guido Crosetto äußerte am 18.11. Bedenken zu dem Angebot und mahnte den Avio-Großaktionär Leonardo, nationale Interessen bei der Entscheidung sorgfältig abzuwägen – ein Hinweis auf die sicherheitspolitische Bedeutung von Avio als Hersteller von Raketentechnik." }
        ]},
        { h: "Was ist beim TPG/BILL-Holdings-Deal bekannt?", items: [
          { tag: "unbestaetigt", text: "Laut Financial Times (17.11.) führt ein von TPG angeführtes Konsortium fortgeschrittene Gespräche über eine Übernahme von BILL Holdings (Marktkapitalisierung rund 4,8 Mrd. Dollar) ins Private; der Deal könne „innerhalb von Tagen” finalisiert werden, kann aber auch noch scheitern. Ein finaler Kaufpreis wird in den ausgewerteten Quellen nicht genannt – eine Schätzung von BNP Paribas nennt eine Spanne von 76 bis 91 Dollar pro Aktie. Beteiligte Banken, eine Finanzierungsstruktur oder ein offizieller Zeitplan für Signing/Closing sind in den Quellen ausdrücklich nicht genannt. Die Aktivisten Elliott Management, Starboard Value und Barington Capital hatten zuvor Kostensenkungen und eine strategische Überprüfung bei BILL Holdings gefordert.",
            ask: [{ label: "Was ist ein Leveraged Buyout?", ref: "t:lbo" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass ein finnisches Technologieunternehmen ein europäisches Rüstungs- und Raumfahrtunternehmen übernehmen will, während gleichzeitig politische Bedenken geäußert werden, zeigt, wie sicherheitspolitische Erwägungen auch bei vergleichsweise kleineren Industrie-Übernahmen eine Rolle spielen können. Bei TPG/BILL Holdings bleibt der Ausgang offen, da weder Preis noch Zeitplan feststehen." }
        ]}
      ],
      deal: { value: "2,05 Mrd. € (Iceye/Avio); Preis für TPG/BILL Holdings nicht in den Quellen genannt", buyer: "Iceye (Finnland) bzw. TPG-Konsortium", target: "Avio S.p.A. bzw. BILL Holdings", sector: "Raumfahrt/Verteidigung bzw. Fintech/Payments", type: "Freiwilliges Übernahmeangebot bzw. Take-private (in Verhandlung)" },
      reaction: "Mehr zu Marvell-Lumentum und Private Credit in Meldung 12.",
      terms: ["take-private", "lbo"],
      followups: ["e:take-private-why", "e:ma-steps", "e:pe-money"],
      sources: [
        { title: "Bloomberg: Avio gets $2 billion takeover bid from Finland's Iceye", url: "https://www.bloomberg.com/news/articles/2026-11-17/avio-gets-2-billion-takeover-bid-from-finland-s-iceye" },
        { title: "European Spaceflight: Iceye launches €2.05B takeover bid for Italian rocket builder Avio", url: "https://europeanspaceflight.com/iceye-launches-e2-05b-takeover-bid-for-italian-rocket-builder-avio/" },
        { title: "Fintech Garden: TPG leading consortium in advanced talks to take BILL Holdings private at a premium", url: "https://fintech.garden/news/2026-11-17-tpg-leading-consortium-in-advanced-talks-to-take-bill-holdings-private-at-premiu/" },
        { title: "Benzinga: BILL Holdings hits 52-week high as TPG eyes buyout", url: "https://www.benzinga.com/m-a/26/11/63363303/bill-holdings-hits-52-week-high-as-tpg-eyes-buyout" }
      ]
    },
    /* 14 TECHNOLOGIE: NVIDIA-ZAHLEN/HUANG-NACHFOLGE/SEC/CHINA + ANTHROPIC-IPO */
    {
      id: "nvidia-zahlen-huang-nachfolge-sec-anthropic-ipo-11-18", cats: ["tech"], when: "Nvidia-Zahlen 17.11. nach Börsenschluss · Kongressanhörungen 1.-3.12. angesetzt · Anthropic-Pricing erwartet Abend 18.11., Handelsstart 19.11.",
      headline: "Nvidia übertrifft mit Rekordumsatz die Erwartungen, Board schließt Huang-Rückkehr aus, SEC ermittelt – Anthropic-Börsengang steht vor dem Pricing",
      sec30: "Nvidia meldete für das dritte Quartal einen Umsatz von 115,8 Mrd. Dollar (+103 % im Jahresvergleich) und hob den Ausblick für das laufende Quartal auf rund 130 Mrd. Dollar an. Verwaltungsratschef Harvey Jones bestätigte, das Board plane nicht, den zurückgetretenen CEO Jensen Huang wieder einzusetzen; Interims-CEO Colette Kress betonte Kontinuität. Zugleich wurde bekannt, dass die US-Börsenaufsicht SEC gegen Nvidia wegen möglicherweise irreführender Angaben zur Huang-Affäre ermittelt, und Nvidia stoppte Lieferungen des H200-Chips an China vollständig. Die Kongressanhörungen zu Huang sind nun für den 1. bis 3.12. terminiert. Anthropics Börsengang sollte am Abend des 18.11. gepriced werden, mit Handelsstart am 19.11. an der Nasdaq.",
      blocks: [
        { h: "Wie sind Nvidias Quartalszahlen ausgefallen?", items: [
          { tag: "fakt", text: "Nvidia meldete für das dritte Fiskalquartal einen Umsatz von 115,8 Mrd. Dollar (+103 % im Jahresvergleich), über dem Konsens von rund 109 Mrd. Dollar; der Data-Center-Umsatz stieg um 110 % auf 107,6 Mrd. Dollar. Der Gewinn pro Aktie lag bei 2,68 Dollar (non-GAAP), über dem Konsens von 2,47 Dollar. Für das laufende Quartal stellte das Unternehmen einen Umsatz zwischen 127,4 und 132,6 Mrd. Dollar in Aussicht; CEO Kress nannte „rund 130 Mrd. Dollar”. Die Aktie reagierte nachbörslich zunächst mit einem Sprung auf rund 163 Dollar, gab dann aber einen Teil der Gewinne wieder ab.",
            ask: [{ label: "Mehr zur Marktreaktion bei Nvidia", ref: "s:2" }] }
        ]},
        { h: "Was sagte das Board zur Huang-Nachfolge?", items: [
          { tag: "position", text: "Verwaltungsratschef Harvey Jones sagte auf dem Earnings Call: „We have an incredibly talented leadership team, and we have every confidence in Colette's leadership.” Das Board stellte zugleich klar, es plane nicht, Huang als CEO wieder einzusetzen – nachdem Huang zuvor öffentlich erklärt hatte, er wäre „geehrt”, zurückzukehren, sollte das Board dem zustimmen. Für die CEO-Suche wurde die Personalberatung Heidrick & Struggles engagiert. Interims-CEO Colette Kress sagte: „Jensen resigned from his position with Nvidia, and the board accepted his resignation. The board has determined that they will not reinstate Jensen.”",
            ask: [{ label: "Was ist zirkuläre Finanzierung in der KI-Branche?", ref: "e:circular-financing" }] }
        ]},
        { h: "Was ist bei der SEC-Ermittlung und dem China-Geschäft bekannt?", items: [
          { tag: "unbestaetigt", text: "Laut Berichten ermittelt die US-Börsenaufsicht SEC gegen Nvidia bezüglich möglicherweise irreführender Investoren-Angaben im Zusammenhang mit Nvidias früherer Dementierung der Affäre zwischen Huang und der als mutmaßliche chinesische Spionin verdächtigten Geschäftsfrau Alice Huang. Auf dem Earnings Call kündigte Kress zugleich an, Nvidia stelle Lieferungen lizenzierter Hopper-Chips (H200) nach China vollständig ein; der Umsatz mit solchen Produkten lag im dritten Quartal noch bei 2,4 Mrd. Dollar. Die Prognose für das laufende Quartal schließt China-Data-Center-Umsatz vollständig aus." }
        ]},
        { h: "Wie ist der Stand bei Anthropics Börsengang?", items: [
          { tag: "unbestaetigt", text: "Anthropics Preisspanne liegt weiterhin bei 70 bis 78 Dollar je Aktie (825 Mio. Aktien); dazu kommt eine Privatplatzierung über 26 Mrd. Dollar an sieben Technologiekonzerne (AMD, Broadcom, Alphabet, Micron, Microsoft, Nvidia, TSMC). Das Orderbuch war laut Berichten rund sechs- bis siebenfach überzeichnet; mehrere Quellen erwarteten deshalb eine Preisfestsetzung über der Spanne, teils über 80 Dollar. Ein bestätigter finaler Preis lag zum Redaktionsschluss nicht vor – die Entscheidung wurde für den Abend des 18.11. (US-Zeit) erwartet, der Handelsstart an der Nasdaq (Ticker: ANT) ist für den 19.11. angesetzt.",
            ask: [{ label: "Was ist ein Börsengang?", ref: "t:ipo" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass Nvidia trotz deutlich über den Erwartungen liegender Zahlen nachbörslich nur kurzzeitig zulegt und einen Teil der Gewinne wieder abgibt, deutet darauf hin, dass die anhaltende Unsicherheit um Führungswechsel, SEC-Ermittlung und China-Geschäft die reine Ergebnisfreude dämpft. Die klare Absage des Boards an eine Huang-Rückkehr beendet zugleich die seit dem Wochenende kursierenden Spekulationen über eine mögliche Rückkehr." }
        ]}
      ],
      reaction: "Mehr zur Marktreaktion bei DAX, S&P 500 und Nasdaq in Meldung 1 und 2.",
      terms: ["hyperscaler", "gigawatt", "ipo"],
      followups: ["e:ai-capex", "e:circular-financing", "e:custom-chips"],
      sources: [
        { title: "NVIDIA Newsroom: NVIDIA announces financial results for third quarter fiscal 2026", url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2026" },
        { title: "Yahoo Finance: Nvidia earnings live – Nvidia posts Q3 beat, board says it will not reinstate Jensen Huang as CEO", url: "https://finance.yahoo.com/technology/live/nvidia-earnings-live-nvidia-posts-q3-beat-board-says-it-will-not-reinstate-jensen-huang-as-ceo-221428433.html" },
        { title: "TechCrunch: Nvidia is abandoning China after Jensen Huang's ouster", url: "https://techcrunch.com/2026/11/17/nvidia-is-abandoning-china-after-jensen-huangs-ouster/" },
        { title: "TechCrunch: SEC reportedly investigating Nvidia amid Huang exit", url: "https://techcrunch.com/2026/11/17/sec-reportedly-investigating-nvidia-amid-huang-exit/" },
        { title: "TradingKey: Can Anthropic beat SpaceX's $85.7 billion IPO record", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262308817-anthropic-ipo-spacex-record-85-7-billion-pricing-wednesday-november-17-2026-tradingkey" }
      ]
    },
    /* 15 ENERGIE: BRENT/OPEC+/GASSPEICHER/STROMPREIS */
    {
      id: "oelpreis-opec-gasspeicher-strompreis-11-18", cats: ["energy"], when: "Brent-Stand Mi 18.11. · OPEC+-Treffen für 29.11. angesetzt · Gasspeicher-Stand Mitte November",
      headline: "Ölpreis fällt weiter vor der OPEC+-Entscheidung Ende November, deutsche Gasspeicher so leer wie seit 2011 nicht mehr",
      sec30: "Brent-Rohöl fiel am Mittwoch um rund 0,5 bis 1 % auf etwa 92 Dollar je Barrel (WTI: rund 84,5 bis 88 Dollar), nachdem vorläufige API-Daten einen Anstieg der US-Rohölvorräte um 5,28 Mio. Barrel gezeigt hatten. Die volle, 21 Länder umfassende OPEC+-Gruppe entscheidet am 29.11. über die Fördermengen für 2027, basierend auf einer neuen unabhängigen Kapazitätsprüfung pro Land. Die deutschen Gasspeicher lagen Mitte November bei rund 57 bis 58 % Füllstand – nach Berichten der niedrigste Stand seit 2011 für diese Jahreszeit; der TTF-Gaspreis erholte sich zugleich wieder auf rund 85 bis 86 Euro je Megawattstunde.",
      blocks: [
        { h: "Wie hat sich der Ölpreis entwickelt?", items: [
          { tag: "fakt", text: "Brent-Rohöl fiel am Mittwoch, 18.11.2026, um rund 0,5 bis 1 % auf etwa 92 Dollar je Barrel, WTI auf rund 84,5 bis 88 Dollar. Als Hintergrund nennen Berichte vorläufige API-Daten, die einen Anstieg der US-Rohölvorräte um 5,28 Mio. Barrel in der Woche zum 13.11. zeigten, sowie den von der IEA erwarteten globalen Angebotsüberschuss von rund 1,7 Mio. Barrel pro Tag im vierten Quartal 2026.",
            ask: [{ label: "Was ist ein Öl-Future?", ref: "t:oil-future" }] }
        ]},
        { h: "Was entscheidet OPEC+ am 29.11.?", items: [
          { tag: "fakt", text: "Die acht an den freiwilligen Förderkürzungen beteiligten Länder hatten die Fördermenge für Dezember bereits unverändert gelassen. Am 29.11.2026 trifft sich die vollständige, 21 Länder umfassende OPEC+-Gruppe, um die Fördermengen für 2027 festzulegen – erstmals auf Basis einer neuen, unabhängigen Kapazitätsprüfung pro Land, die künftig als Referenzpunkt für Förderlimits dienen soll. Saudi-Arabien drängt laut Berichten darauf, dass sich die Quoten künftig an diesen Audit-Zahlen orientieren.",
            ask: [{ label: "Was ist OPEC+?", ref: "t:opec-plus" }] }
        ]},
        { h: "Wie ist die Lage bei den deutschen Gasspeichern und dem TTF-Preis?", items: [
          { tag: "fakt", text: "Die deutschen Gasspeicher lagen Mitte November bei rund 57 bis 58 % Füllstand (rund 144,7 TWh Arbeitsgas) – nach Berichten der niedrigste Stand für diese Jahreszeit seit 2011, gegenüber rund 75 % im Vorjahreszeitraum. Der TTF-Gaspreis erholte sich nach einem kurzen Rückgang wieder auf rund 85 bis 86 Euro je Megawattstunde, rund das Dreifache des Vorjahresniveaus. Goldman Sachs rechnet laut einer Quelle mit einem möglichen Anstieg auf über 100 Euro je Megawattstunde im Dezember.",
            ask: [{ label: "Was ist der TTF-Preis?", ref: "t:ttf" }] }
        ]},
        { h: "Wie hat sich der deutsche Strompreis entwickelt?", items: [
          { tag: "fakt", text: "Nach der Dunkelflaute Anfang November (Spitzenpreis über 650 Euro je Megawattstunde am 9.11.) hat sich der Strompreis beruhigt, bleibt aber volatil: Am 17.11. stieg der Day-Ahead-Preis erneut auf rund 45 Cent/kWh, am 18.11. fiel der Tagesdurchschnitt wieder auf rund 14,6 Cent/kWh. Die Schwankungen zeigen laut einer Analyse weiterhin das Grundproblem fehlender Speicherkapazität." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Dass der Ölpreis vor allem auf das globale Angebotsbild und die anstehende OPEC+-Entscheidung reagiert, während die deutschen Gasspeicher und der Strompreis stärker von saisonalen Entnahmen, Wetter und der heimischen Erzeugungsstruktur abhängen, zeigt erneut unterschiedliche Preistreiber auf den einzelnen Energiemärkten – auch wenn die Eskalation in der Straße von Hormus (mehr in Meldung 10) laut Berichten einen zusätzlichen, bislang begrenzten Risikofaktor für Öl- und Gaspreise darstellt." }
        ]}
      ],
      reaction: "Mehr zur Eskalation in der Straße von Hormus in Meldung 10.",
      terms: ["brent", "ttf", "opec-plus"],
      followups: ["e:why-oil-up-geo", "e:opec-plus-why", "e:gas-ttf", "e:energy-germany"],
      sources: [
        { title: "Invezz: Oil price today – API shows 5.28 million-barrel US crude build", url: "https://invezz.com/news/2026/11/18/oil-price-today-api-528-million-barrel-us-crude-build/" },
        { title: "OilPrice.com: OPEC+ keeps oil output steady and approves historic capacity mechanism", url: "https://oilprice.com/Energy/Energy-General/OPEC-Keeps-Oil-Output-Steady-and-Approves-Historic-Capacity-Mechanicsm.html" },
        { title: "netz-trends.de: Gasspeicher nur zu 60,6 Prozent gefüllt – Ziel klar verfehlt", url: "https://www.netz-trends.de/gasspeicher-in-deutschland-nur-zu-60-6-prozent-gefu-llt-ziel-klar-verfehlt/" },
        { title: "Yahoo Finance: TTF gas bounces back to 86 euros as Hormuz risks resurface", url: "https://finance.yahoo.com/energy/articles/ttf-gas-bounces-back-86-143000689.html" },
        { title: "stromauskunft.de: Strompreise aktuell", url: "https://www.stromauskunft.de/strompreise/" }
      ]
    }
  ],

  /* ─────────────────────────── AKTUELLER ZUSAMMENHANG ─────────────────────────── */
  context: {
    "index-move": { tag: "fakt", story: 1, text: "Der DAX lag am Mittwochmittag bei rund 26.065 Punkten (+0,02 %), nachdem er am Dienstag um rund 2 % gefallen war; der Euro Stoxx 50 stieg um 0,28 % auf rund 6.230 Punkte." },
    "why-markets-move": { tag: "einordnung", story: 1, text: "Nach den über Erwarten guten Nvidia-Quartalszahlen am Dienstagabend bleibt der Handel in Europa verhalten, während US-Futures deutlich zulegen." },
    "yield-meaning": { tag: "fakt", story: 4, text: "Die US-10-Jahres-Rendite liegt bei rund 5,09 % und damit weiterhin über 5 %; die Bund-Rendite bei rund 3,35 bis 3,36 %." },
    "yield-stocks": { tag: "einordnung", story: 4, text: "Am Terminmarkt gilt eine Fed-Zinserhöhung im Dezember zu rund 96 bis 97 % als eingepreist; offen ist vor allem die Schrittgröße (25 oder 50 Basispunkte)." },
    "gold-why": { tag: "unbestaetigt", story: 3, text: "Gold fiel laut widersprüchlichen Angaben weiter auf rund 3.750 bis 3.800 Dollar – rund 2 % unter dem Montagsstand." },
    "eurusd-meaning": { tag: "fakt", story: 3, text: "Der Euro blieb mit rund 1,098 Dollar unter der Marke von 1,10; binnen eines Jahres hat er rund 5,1 % gegenüber dem Dollar verloren." },
    "bitcoin-what": { tag: "fakt", story: 3, text: "Bitcoin bewegte sich mit rund 64.100 bis 64.700 Dollar weitgehend seitwärts, nach der leichten Erholung vom Wochenend-Tief." },
    "inflation-what": { tag: "fakt", story: 6, text: "Die US-Erzeugerpreise beschleunigten im Oktober im Jahresvergleich auf 5,7 %; die Eurozone-Inflation wurde bei 4,0 % bestätigt, die Kernrate stieg auf 2,6 %." },
    "central-banks-why": { tag: "einordnung", story: 4, text: "Dass Fed und EZB im November 2026 nahezu gleichzeitig über weitere Zinserhöhungen diskutieren, deutet auf eine breit angelegte geldpolitische Reaktion auf den anhaltenden Preisdruck hin." },
    "fed-hike": { tag: "position", story: 4, text: "New-York-Fed-Chef Williams schloss einen 50-Basispunkte-Schritt im Dezember aus, Fed-Gouverneur Waller hält ihn für möglich; Finanzminister Bessent warnt weiter vor einer zu starken Erhöhung." },
    "ecb-hike": { tag: "position", story: 5, text: "EZB-Chefin Lagarde sagte, sie könne eine Dezember-Erhöhung nicht garantieren, halte sie aber für die wahrscheinliche Richtung." },
    "haushalt-basics": { tag: "fakt", story: 7, text: "Der Koalitionsausschuss einigte sich auf eine Stromsteuersenkung zum 1.1.2027 auf den EU-Mindestsatz; die Gegenfinanzierung ist bislang nur für 2027 gesichert." },
    "debt-brake": { tag: "fakt", story: 7, text: "Die Stromsteuersenkung wird vorwiegend über erwartete Überschüsse des EEG-Kontos finanziert; eine dauerhafte Lösung über 2027 hinaus fehlt bislang." },
    "rente-basics": { tag: "fakt", story: 8, text: "Die Rentenreform wurde im Koalitionsausschuss vertagt; strittig bleibt die Abschaffung der abschlagsfreien Rente nach 45 Beitragsjahren." },
    "coalition-majority": { tag: "fakt", story: 8, text: "Drei aktuelle Umfragen (YouGov, Forsa, INSA) sehen die AfD zwischen 26 und 29 %, die Union zwischen 19 und 22 % – die aktuelle Koalition hätte danach weiterhin keine Bundestagsmehrheit." },
    "nato-target": { tag: "fakt", story: 11, text: "Die zweite SAFE-Finanzierungsrunde über 21,3 Mrd. Euro läuft bis zum 30.11.; bislang wurden rund 16,4 Mrd. Euro an 2026er-Mitteln ausgezahlt." },
    "defence-order": { tag: "fakt", story: 11, text: "Hensoldt meldete einen Rekord-Auftragsbestand von 10,367 Mrd. Euro, RENK einen von 7,6 Mrd. Euro; TKMS sicherte sich einen Auftrag über vier zusätzliche Fregatten." },
    "defence-stocks": { tag: "fakt", story: 11, text: "Die Rheinmetall-Aktie fiel am Dienstag auf ein neues 52-Wochen-Tief von 738,70 Euro und erholte sich am Mittwoch leicht auf rund 767 Euro." },
    "ma-steps": { tag: "unbestaetigt", story: 11, text: "Der für rund 6,6 Mrd. Euro geplante Bund-Einstieg bei KNDS ist auch am 18.11. weiterhin nicht final unterschrieben." },
    "deal-risks": { tag: "fakt", story: 12, text: "Der implizite Wert der Marvell-Lumentum-Fusion pro Lumentum-Aktie ist seit der Ankündigung um fast 42 % auf rund 657 bis 660 Dollar gefallen." },
    "private-credit-what": { tag: "fakt", story: 12, text: "Private-Credit-Fonds übernahmen einen 1,3-Mrd.-Dollar-Kredit, den Morgan Stanley nicht am syndizierten Markt platzieren konnte – ein Beispiel für Private Credit als Ventil für Banken." },
    "ai-capex": { tag: "unbestaetigt", story: 14, text: "Anthropics Börsengang sollte am Abend des 18.11. gepriced werden; ein finaler Preis lag zum Redaktionsschluss nicht vor, erwartet wurde ein Preis über der Spanne von 70 bis 78 Dollar." },
    "circular-financing": { tag: "unbestaetigt", story: 14, text: "Die SEC ermittelt laut Berichten gegen Nvidia wegen möglicherweise irreführender Angaben zur Huang-Affäre; Nvidia stellte zugleich Lieferungen des H200-Chips an China vollständig ein." },
    "why-oil-up-geo": { tag: "fakt", story: 10, text: "US-Kampfjets griffen nach iranischen Drohnenangriffen auf Bahrain eine Raketenstellung auf der iranischen Insel Qeshm an; Iran drohte mit einer „noch verheerenderen” Antwort." },
    "hormuz": { tag: "unbestaetigt", story: 10, text: "Die iranische Marine meldete weitere Tanker-Zwischenfälle in der Straße von Hormus, die CENTCOM wie zuvor nicht bestätigt." },
    "gas-ttf": { tag: "fakt", story: 15, text: "Die deutschen Gasspeicher lagen Mitte November bei rund 57 bis 58 % Füllstand – dem niedrigsten Stand für diese Jahreszeit seit 2011." },
    "energy-germany": { tag: "fakt", story: 15, text: "Der deutsche Strompreis bleibt nach der Dunkelflaute Anfang November volatil, mit einem erneuten Anstieg auf rund 45 Cent/kWh am 17.11." },
    "opec-plus-why": { tag: "fakt", story: 15, text: "OPEC+ entscheidet am 29.11. über die Fördermengen für 2027, erstmals auf Basis einer neuen unabhängigen Kapazitätsprüfung pro Land." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Technologie", type: "Fakt", story: 14,
      q: "Was entschied Nvidias Verwaltungsrat nach den Quartalszahlen vom 17.11.2026 bezüglich Jensen Huang?",
      options: [
        "Huang wird noch im November als CEO wieder eingesetzt",
        "Huang wird neuer Verwaltungsratschef, bleibt aber nicht CEO",
        "Das Board schloss ausdrücklich aus, Huang als CEO wieder einzusetzen, obwohl Huang selbst Interesse signalisiert hatte",
        "Über die Personalie wurde auf dem Earnings Call nicht gesprochen"
      ],
      answer: 2,
      explain: "Verwaltungsratschef Harvey Jones bestätigte auf dem Earnings Call, das Board plane nicht, Huang wieder als CEO einzusetzen, obwohl Huang zuvor öffentlich erklärt hatte, er wäre dazu „geehrt”. Interims-CEO Colette Kress führt das Unternehmen weiter."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 7,
      q: "Worauf einigte sich der Koalitionsausschuss von Union und SPD in der Nacht zum 18.11.2026 bei der Stromsteuer?",
      options: [
        "Eine vollständige Senkung auf den EU-Mindestsatz zum 1.1.2027, auch für Privathaushalte, mit nur für 2027 gesicherter Gegenfinanzierung",
        "Eine Senkung nur für Unternehmen, Privathaushalte sind ausgeschlossen",
        "Die Stromsteuer bleibt bis 2030 unverändert",
        "Eine Senkung um die Hälfte, finanziert durch eine neue Steuer auf erneuerbare Energien"
      ],
      answer: 0,
      explain: "Die Stromsteuer wird zum 1.1.2027 von 2,05 auf 0,1 Cent pro Kilowattstunde gesenkt – auch für Privathaushalte. Die Gegenfinanzierung über das EEG-Konto ist bislang nur für das Jahr 2027 gesichert; bei der Rentenreform gab es im selben Koalitionsausschuss keine Einigung."
    },
    {
      topic: "Geopolitik", type: "Zusammenhang", story: 10,
      q: "Angenommen, die Eskalation in der Straße von Hormus würde sich in den kommenden Tagen weiter verschärfen und mehr Länder direkt betreffen. Was würde dadurch für den Brent-Preis unter sonst gleichen Bedingungen wahrscheinlicher, selbst wenn das globale Angebot weiterhin über der Nachfrage liegt?",
      options: [
        "Der Ölpreis würde garantiert weiter fallen, da geopolitische Risiken Ölpreise grundsätzlich nicht beeinflussen",
        "Nur der Goldpreis würde reagieren, der Ölpreis bliebe davon vollständig unberührt",
        "Der Effekt ließe sich ohne weitere Daten nicht einmal in der Richtung abschätzen",
        "Ein steigendes Risiko für die Versorgungssicherheit einer zentralen Öltransportroute würde den Ölpreis tendenziell stützen oder steigen lassen, auch wenn das Angebotsüberangebot zunächst dagegen wirkt"
      ],
      answer: 3,
      explain: "Die Straße von Hormus ist eine der wichtigsten Öltransportrouten der Welt. Eine Eskalation mit mehr betroffenen Ländern würde die Versorgungssicherheit stärker infrage stellen und den Ölpreis tendenziell stützen oder steigen lassen – auch wenn das aktuelle Angebotsüberangebot laut IEA kurzfristig in die andere Richtung wirkt."
    },
    {
      topic: "Zinsen", type: "Fakt", story: 4,
      q: "Welche Position vertrat New-York-Fed-Chef John Williams am 17.11.2026 zur Schrittgröße einer möglichen Dezember-Zinserhöhung?",
      options: [
        "Er schloss einen großen Schritt um 50 Basispunkte aus und sagte, die Lage verlange kein dramatisches Handeln",
        "Er forderte ausdrücklich einen Schritt um 50 Basispunkte",
        "Er sprach sich gegen jede Zinserhöhung im Dezember aus",
        "Er äußerte sich nicht zur Schrittgröße"
      ],
      answer: 0,
      explain: "Williams sagte, die Lage verlange kein „dramatisches Handeln”, und schloss damit einen Schritt um 50 Basispunkte aus. Fed-Gouverneur Waller hält einen solchen großen Schritt dagegen für möglich, falls die Kerninflation hoch bleibt."
    },
    {
      topic: "Deals", type: "Zusammenhang", story: 12,
      q: "Bei der Marvell-Lumentum-Fusion gilt ein festes Umtauschverhältnis von 4,5 Marvell-Aktien je Lumentum-Aktie. Angenommen, Marvells Aktienkurs würde sich in den kommenden Wochen wieder deutlich erholen. Was würde dadurch für den impliziten Angebotswert je Lumentum-Aktie wahrscheinlicher?",
      options: [
        "Er bliebe exakt bei 657 bis 660 Dollar, weil der Wert bei Signing fixiert wurde",
        "Lumentum-Aktionäre hätten davon keinen Vorteil, da der Deal als Barangebot strukturiert ist",
        "Er würde steigen, weil sich der Wert für Lumentum-Aktionäre bei einem festen Umtauschverhältnis direkt am Marvell-Kurs bemisst",
        "Er würde automatisch auf den ursprünglichen Wert von 1.132 Dollar zurückspringen, unabhängig vom Marvell-Kurs"
      ],
      answer: 2,
      explain: "Bei einem festen Umtauschverhältnis (Aktien-für-Aktien-Deal) hängt der implizite Angebotswert für Lumentum-Aktionäre direkt vom Marvell-Kurs ab: Eine Erholung von Marvell würde den rechnerischen Wert des Angebots für Lumentum-Aktionäre wieder steigen lassen."
    }
  ]
};
