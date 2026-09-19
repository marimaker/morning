// MORNING – tägliche Ausgabe. Diese Datei wird jeden Morgen neu erzeugt.
// Verweise: "e:ID" Erklärung, "n:ID" Zahl, "t:ID" Fachbegriff, "chain:ID" Kette, "s:N" Meldung Nr. N (ab 1).
// Tags an Aussagen: fakt | einordnung | position | unbestaetigt
window.EDITION = {
  date: "2026-09-19",
  dateLabel: "Samstag, 19. September 2026",
  updatedLabel: "Recherchestand 19.09.2026",
  marketNote: "Am Wochenende sind die Börsen geschlossen. Die Zahlen zeigen den Handelsschluss vom Freitag, 18.09.2026. Bitcoin wird rund um die Uhr gehandelt, sein Wert stammt vom Samstag. Werte mit „≈“ stammen aus Marktberichten und können je nach Quelle und Uhrzeit leicht abweichen.",

  top: [
    { text: "Die Notenbanken drehen die Zinsschraube: Die Fed hat erstmals seit 2023 erhöht, die EZB vor gut einer Woche ebenfalls, Japan zog am Freitag nach. Der Grund ist überall Inflation, die Energiepreise antreiben.", ref: "s:1" },
    { text: "Ölpreis und Gaspreis bleiben hoch: Brent schloss bei rund 104 Dollar, Gas kostet in Europa etwa 80 Euro je Megawattstunde, und die deutschen Speicher sind nur zu 56 % gefüllt.", ref: "s:7" },
    { text: "Der DAX verlor am Freitag 1,6 %, die Rendite zehnjähriger US-Anleihen erreichte 5,0 %. Marktbeobachter nennen den großen Verfallstag, Öl, Renditen und deutsche Erzeugerpreise.", ref: "s:4" },
    { text: "Am Sonntag wählen Berlin und Mecklenburg-Vorpommern. In beiden Ländern sind die Rennen laut letzten Umfragen eng.", ref: "s:10" }
  ],

  strip: ["dax", "eurostoxx50", "sp500", "nasdaq", "eurusd", "ust10", "bund10", "gold", "brent", "bitcoin"],

  /* ─────────────────────────── ZAHLEN ─────────────────────────── */
  numbers: {
    "dax": {
      label: "DAX", value: "25.304", change: "−1,60 %", dir: "down", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der DAX bildet die 40 größten börsennotierten Unternehmen Deutschlands ab. 25.304 Punkte sind ein Vergleichswert ohne Einheit. Entscheidend ist die Veränderung: −1,60 % heißt, dass diese Unternehmen zusammen rund 1,6 % niedriger bewertet werden als am Vortag.",
      compare: [
        { label: "Vortag (Do)", text: "rechnerisch ≈ 25.715 Punkte" },
        { label: "Woche", text: "−1,03 % gegenüber dem Vorfreitag" },
        { label: "MDax", text: "−1,16 % auf 31.084 Punkte" }
      ],
      moved: {
        intro: "Marktbeobachter nennen für den Freitag vor allem diese Faktoren:",
        items: [
          "Der große Verfallstag, an dem Futures und Optionen auf Aktienindizes auslaufen.",
          "Die angespannte Lage im Nahen Osten und der weiter hohe Ölpreis.",
          "Erneut steigende Renditen am Anleihemarkt.",
          "Stärker als erwartet gestiegene Erzeugerpreise in Deutschland."
        ]
      },
      important: [
        { area: "Aktien", text: "Der DAX ist ein Stimmungsbild der großen deutschen Firmen, kein Maß für die gesamte Wirtschaft.", ref: "e:index-move" },
        { area: "Zinsen", text: "Steigende Renditen können Bewertungen von Aktien belasten.", ref: "e:yield-stocks" }
      ],
      source: { title: "onvista: Aktien Frankfurt Schluss, Dax sackt am großen Verfallstag ab", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "eurostoxx50": {
      label: "Euro Stoxx 50", value: "6.236", change: "−1,37 %", dir: "down", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der Euro Stoxx 50 bildet 50 große Unternehmen aus dem Euroraum ab, nicht nur aus Deutschland. Er zeigt, wie die europäischen Börsen insgesamt liefen. −1,37 % heißt: Diese Unternehmen wurden zusammen rund 1,4 % niedriger bewertet als am Vortag.",
      compare: [
        { label: "Zum DAX", text: "Der DAX verlor mit −1,60 % etwas mehr." }
      ],
      moved: {
        intro: "Der Bericht nennt für den europäischen Handel dieselben Faktoren wie für den DAX:",
        items: [
          "Verfallstag, Nahost-Lage und hoher Ölpreis sowie steigende Anleiherenditen. FTSE 100 in London und SMI in Zürich gaben laut Bericht ebenfalls nach."
        ]
      },
      important: [
        { area: "Aktien", text: "Ein Index fasst viele Aktien zu einer Zahl zusammen.", ref: "e:index-move" }
      ],
      source: { title: "onvista: Aktien Frankfurt Schluss (Euro Stoxx 50)", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" }
    },
    "sp500": {
      label: "S&P 500", value: "7.650", change: "+0,17 %", dir: "up", asof: "Schluss Fr 18.09.", story: 4,
      means: "Der S&P 500 bildet 500 große US-Unternehmen ab und gilt als wichtigster Gradmesser des US-Aktienmarkts. +0,17 % bedeutet: Die Firmen wurden zusammen 0,17 % höher bewertet als am Vortag.",
      compare: [
        { label: "Vortag (Do)", text: "7.637,74 Punkte (+1,14 %)" },
        { label: "Woche", text: "Zweiter Wochenverlust in Folge (AP)" }
      ],
      moved: {
        intro: "Berichte zum Freitag:",
        items: [
          "Die Indizes schlossen nach dem Zinsschritt der Fed nahezu unverändert.",
          "Erhöhte Anleiherenditen und hohe Ölpreise werden als Belastung genannt.",
          "Anleger setzten laut Yahoo Finance verstärkt auf eine weitere Zinserhöhung der Fed im Oktober."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen wirken auf Aktienbewertungen.", ref: "e:rates-stocks" }
      ],
      source: { title: "BNN Bloomberg (AP): Wall Street drifts lower as bond yields rise", url: "https://www.bnnbloomberg.ca/markets/2026/09/18/wall-street-drifts-as-bond-yields-rise-and-oil-prices-swing/" }
    },
    "nasdaq": {
      label: "Nasdaq", value: "26.523", change: "+0,39 %", dir: "up", asof: "Schluss Fr 18.09.", story: 15,
      means: "Die Nasdaq Composite umfasst alle an der Nasdaq gehandelten Aktien und wird stark von Technologiefirmen geprägt. Sie reagiert deshalb oft empfindlich auf Zinsänderungen und auf Nachrichten zur KI.",
      compare: [
        { label: "Vortag (Do)", text: "+1,69 % auf rund 26.418 Punkte" },
        { label: "Montag (14.09.)", text: "Chipwerte brachen ein, nachdem KI-Chefs eine Verlangsamung gefordert hatten" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Am Donnerstag führte eine breite Technologie-Erholung den Markt an, gestützt von niedrigeren Ölpreisen und Renditen sowie starken Arbeitsmarktdaten.",
          "Am Freitag legte die Halbleiter-Gruppe laut Marktbericht um knapp 3 % zu."
        ]
      },
      important: [
        { area: "Zinsen", text: "Warum fällt die Nasdaq bei steigenden Zinsen? Die Kette zeigt es Schritt für Schritt.", ref: "chain:nasdaq-why" }
      ],
      source: { title: "Saxo Bank: Market Quick Take / Morning Brew", url: "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-september-19-2026-18092026" }
    },
    "eurusd": {
      label: "EUR/USD", value: "≈ 1,146", change: "−0,14 %", dir: "down", asof: "Fr 18.09.", story: 1,
      means: "1 Euro kostet etwa 1,146 US-Dollar. Sinkt der Kurs, wird der Euro im Verhältnis zum Dollar schwächer.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 1,1488 (Saxo Bank)" },
        { label: "Einordnung", text: "Der schwächste Stand seit Ende Juli (Trading Economics)" }
      ],
      moved: {
        intro: "Berichte nennen als Grund:",
        items: [
          "Ein stärkerer Dollar nach der Zinserhöhung der Fed und dem Signal auf eine weitere Erhöhung."
        ]
      },
      important: [
        { area: "Importe", text: "Öl wird in Dollar gehandelt. Ein schwächerer Euro verteuert Importe.", ref: "e:eurusd-meaning" },
        { area: "Zinsen", text: "Die Fed und die EZB haben beide erhöht.", ref: "e:fed-hike" }
      ],
      source: { title: "Trading Economics: EUR/USD", url: "https://tradingeconomics.com/euro-area/currency" }
    },
    "ust10": {
      label: "10Y US Treasury", value: "≈ 5,0 %", change: "+5 Bp", dir: "up", asof: "Fr 18.09.", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger US-Staatsanleihen liegt bei rund 5,0 %. Wer eine solche Anleihe zum aktuellen Kurs kauft und zehn Jahre hält, erhält im Schnitt rund 5 % Zinsen pro Jahr. Steigt die Rendite, ist der Kurs der Anleihe gefallen.",
      compare: [
        { label: "Vortag (Do)", text: "4,94 % (AP)" },
        { label: "Einordnung", text: "Laut AP das erste Mal seit 2023 auf 5 %" }
      ],
      moved: {
        intro: "Nach Berichten trieben diese Faktoren die Renditen:",
        items: [
          "Der Zinsschritt der Fed und Wetten auf eine weitere Erhöhung im Oktober.",
          "Hohe Ölpreise, die Inflationssorgen nähren."
        ]
      },
      important: [
        { area: "Aktien", text: "Sichere Zinsen konkurrieren mit Aktien.", ref: "e:yield-stocks" },
        { area: "Unternehmensfinanzierung", text: "Kredite werden teurer, wenn der sichere Zins steigt.", ref: "e:fed-hike" },
        { area: "Immobilien", text: "Hypothekenzinsen orientieren sich an langfristigen Renditen.", ref: "e:yield-meaning" },
        { area: "Private Equity", text: "Schuldenfinanzierte Übernahmen (LBOs) werden teurer.", ref: "e:lbo" },
        { area: "Private Credit", text: "Variable Zinsen steigen mit den Referenzzinsen.", ref: "e:pc-rates" },
        { area: "Dollar", text: "Höhere US-Zinsen können den Dollar stützen.", ref: "e:eurusd-meaning" },
        { area: "Gold", text: "Gold zahlt keinen Zins und konkurriert mit Anleihen.", ref: "e:gold-why" }
      ],
      source: { title: "BNN Bloomberg (AP): Wall Street drifts lower as bond yields rise", url: "https://www.bnnbloomberg.ca/markets/2026/09/18/wall-street-drifts-as-bond-yields-rise-and-oil-prices-swing/" }
    },
    "bund10": {
      label: "Bund Yield (10 J.)", value: "3,50 %", change: "Mehrjahreshoch 3,57 % (diese Woche)", dir: "flat", asof: "Fr 18.09.", story: 5, whyRef: "e:yield-meaning",
      means: "Die Rendite zehnjähriger Bundesanleihen ist der Richtwert für Zinsen in Deutschland. 3,50 % bedeutet: Wer eine Bundesanleihe zum heutigen Kurs kauft und zehn Jahre hält, erhält rund 3,5 % pro Jahr.",
      compare: [
        { label: "Diese Woche", text: "Mehrjahreshoch von 3,57 % (wallstreet-online)" },
        { label: "Euro-Bund-Future", text: "−0,11 % auf 120,64 Punkte (Fr)" }
      ],
      moved: {
        intro: "Berichte nennen:",
        items: [
          "Nach Gewinnen an den zwei Vortagen gab es am Freitag eine leichte Gegenbewegung mit Gewinnmitnahmen.",
          "Der seit Mittwoch gefallene Ölpreis dämpfte die Inflationserwartungen nur etwas."
        ]
      },
      important: [
        { area: "Staatsfinanzen", text: "Höhere Zinsen machen neue Schulden des Bundes teurer.", ref: "e:debt-brake" },
        { area: "Kredite", text: "Bauzinsen und Firmenkredite orientieren sich an Bund-Renditen.", ref: "e:yield-meaning" }
      ],
      source: { title: "onvista: Deutsche Anleihen mit leichten Kursverlusten", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" }
    },
    "gold": {
      label: "Gold", value: "≈ 4.400 $", change: "≈ +0,5 % zur Vorwoche", dir: "up", asof: "Fr 18.09.", story: 6, whyRef: "e:gold-why",
      means: "Gold kostet etwa 4.400 US-Dollar je Feinunze (rund 31 Gramm). Gold ist ein Wertspeicher ohne Zinsen und wird oft in unsicheren Zeiten gekauft.",
      compare: [
        { label: "Spotpreis Fr", text: "4.379,82 $ (goldpreis-Angabe), Futures bis 4.421 $" },
        { label: "Wochenhoch", text: "4.439,80 $ (Futures, Yahoo Finance)" },
        { label: "Vortag (Do)", text: "≈ 4.360 $ (Saxo Bank)" }
      ],
      moved: {
        intro: "Yahoo Finance führt den Anstieg zum Wochenhoch auf diese Faktoren zurück, die Quellen weichen im Preis je nach Kontrakt und Uhrzeit ab:",
        items: [
          "Die Zinserhöhung der Fed und die Wiederherstellung der saudischen Ost-West-Pipeline ließen die Inflationssorgen laut Bericht abklingen."
        ]
      },
      important: [
        { area: "Zinsen", text: "Höhere Zinsen machen zinslose Anlagen weniger attraktiv.", ref: "e:gold-why" }
      ],
      source: { title: "Yahoo Finance: Gold price today, Friday, September 18, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-price-today-friday-september-18-2026-gold-hits-weekly-high-as-inflation-concerns-fade-104807567.html" }
    },
    "brent": {
      label: "Brent Oil", value: "≈ 103,9 $", change: "−0,9 %", dir: "down", asof: "Schluss Fr 18.09.", story: 7, whyRef: "e:why-oil-up-geo",
      means: "Brent ist die wichtigste internationale Ölsorte. Etwa 104 Dollar je Fass (159 Liter) sind rund 65 US-Cent je Liter Rohöl, ohne Raffinerie, Transport und Steuern.",
      compare: [
        { label: "WTI (Okt)", text: "99,52 $ (−1,63 %, Freitagmorgen, dpa-AFX)" },
        { label: "Wochenhoch", text: "Nahe 110 $ (AP), andere Berichte nennen über 109 $ am 14.09." },
        { label: "Vor dem Konflikt", text: "≈ 72 $ (Al Jazeera)" }
      ],
      moved: {
        intro: "Laut Berichten wirkten diese Faktoren:",
        items: [
          "Dritter Verlusttag in Folge, nachdem Saudi-Arabien angekündigt hatte, die Ost-West-Pipeline wieder auf 50 % der Kapazität hochzufahren.",
          "China soll laut Bericht den Iran gebeten haben, die Angriffe der Huthi einzudämmen.",
          "Ein Analyst von Phillip Nova sieht den Rückgang eher als nachlassenden Risikoaufschlag denn als Trendwende."
        ]
      },
      important: [
        { area: "Inflation", text: "Öl verteuert Sprit, Heizen und Transport.", ref: "e:oil-inflation" },
        { area: "Zinsen", text: "Hohe Inflation kann höhere Zinsen bedeuten.", ref: "e:central-banks-why" },
        { area: "Aktien", text: "Ölkonzerne verdienen mehr, energieintensive Firmen zahlen mehr.", ref: "e:oil-stocks" },
        { area: "Deutschland", text: "Energieimporte werden teurer.", ref: "e:energy-germany" }
      ],
      source: { title: "BNN Bloomberg (AP): Brent settled at $103.87", url: "https://www.bnnbloomberg.ca/markets/2026/09/18/wall-street-drifts-as-bond-yields-rise-and-oil-prices-swing/" }
    },
    "bitcoin": {
      label: "Bitcoin", value: "≈ 81.250 $", change: "≈ +6 % seit Do", dir: "up", asof: "Sa 19.09.", story: 6, whyRef: "e:bitcoin-what",
      means: "Ein Bitcoin kostet rund 81.250 US-Dollar. Bitcoin hat keinen Gewinn und keine Zinsen. Der Preis entsteht allein aus Angebot und Nachfrage.",
      compare: [
        { label: "Vortag (Do)", text: "≈ 76.190 $ (Fortune) bzw. ≈ 76.400 $ (andere Berichte)" },
        { label: "Hoch Freitag", text: "81.702 $, erstmals über 80.000 $ seit dem 7. September" },
        { label: "Rekord", text: "126.200 $ im Oktober 2025 (Bericht)" }
      ],
      moved: {
        intro: "Berichte nennen als Grund für den Sprung:",
        items: [
          "Die Auflösung von Wetten auf fallende Kurse (Short-Liquidationen). Die genannten Summen schwanken je nach Quelle zwischen rund 183 und 469 Mio. $.",
          "Zuflüsse in US-Bitcoin-ETFs und Momentum-Käufe."
        ]
      },
      important: [
        { area: "Risikoanlage", text: "Bitcoin wird von vielen Anlegern wie eine riskante Anlage behandelt.", ref: "e:bitcoin-what" }
      ],
      source: { title: "Yahoo Finance: Bitcoin jumps above $81k as short squeeze offsets rate and regulatory pressure", url: "https://finance.yahoo.com/markets/crypto/articles/bitcoin-jumps-above-81k-short-031138129.html" }
    }
  },

  /* ─────────────────────────── 15 MELDUNGEN ─────────────────────────── */
  stories: [

    /* 1 FED */
    {
      id: "fed", cats: ["economy", "markets"], when: "Mi 16.09. · Fed-Entscheid",
      headline: "Fed erhöht die Zinsen erstmals seit 2023 auf 3,75–4,00 %",
      sec30: "Die US-Notenbank hat den Leitzins um 0,25 Punkte auf 3,75–4,00 % angehoben, einstimmig mit 12:0. Es ist die erste Erhöhung seit Juli 2023. Fed-Chef Kevin Warsh sagte sinngemäß, die Inflation sei zu hoch, und das schon zu lange. Die neuen Prognosen deuten bis Jahresende eine weitere Erhöhung an.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Der Offenmarktausschuss (FOMC) beschloss einstimmig (12:0), den Leitzins um 0,25 Prozentpunkte auf eine Spanne von 3,75–4,00 % anzuheben. Es ist die erste Erhöhung seit Juli 2023.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }, { label: "Was sind Basispunkte?", ref: "t:basispunkt" }] },
          { tag: "fakt", text: "In den neuen Projektionen der Mitglieder ist bis Jahresende eine weitere Erhöhung um 0,25 Punkte vorgesehen, für 2027 keine. Der mittlere Wert für den Leitzins sinkt laut Bericht von knapp über 4 % in diesem Jahr auf rund 3,25 % auf lange Sicht.",
            ask: [{ label: "Was ist ein Dot Plot?", ref: "t:dot-plot" }] }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Warsh sagte auf der Pressekonferenz sinngemäß, die Inflation sei zu hoch, und das schon zu lange. Seit der Juli-Sitzung habe sich dreierlei geändert: Die Wirtschaft sei stärker geworden, die Inflation habe sich nicht verlangsamt, und die geopolitischen Spannungen hätten zugenommen.",
            ask: [{ label: "Warum erhöht die Fed die Zinsen?", ref: "e:fed-hike" }, { label: "Wie hängt Öl mit Inflation zusammen?", ref: "e:oil-inflation" }] },
          { tag: "position", text: "Warsh erklärte sinngemäß, die Fed habe einen Teil der Lockerung zurückgenommen, damit Finanz- und Kreditbedingungen besser zu den Zielen der Notenbank passen. Bloomberg beschreibt den Schritt in seiner Überschrift als Kurs gegen Präsident Trump. Das ist die Einordnung des Mediums.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Höhere US-Zinsen verteuern Kredite und machen Anleihen attraktiver. Sie wirken auf Aktien, den Dollar und Kreditmärkte weltweit. Der Referenzzins SOFR folgt dem Leitzins, deshalb steigen auch die Zinsen vieler Unternehmenskredite.",
            ask: [{ label: "Was bedeutet das für Aktien?", ref: "e:rates-stocks" }, { label: "Was bedeutet das für Private Credit?", ref: "e:pc-rates" }, { label: "Was ist SOFR?", ref: "t:sofr" }] },
          { tag: "position", text: "Nach Marktberichten setzten Anleger am Freitag stärker auf eine weitere Erhöhung der Fed im Oktober. Die Rendite zehnjähriger US-Anleihen stieg auf 5,0 %.",
            ask: [{ label: "Was bedeutet 5,0 %?", ref: "n:ust10" }, { label: "Was passiert mit dem Dollar?", ref: "n:eurusd" }] }
        ]}
      ],
      reaction: "Die 10-jährige US-Rendite lag am Freitag bei 5,0 %, der Euro fiel auf ≈ 1,146 Dollar. Der S&P 500 und die Nasdaq schlossen am Freitag leicht höher, der Dow leicht niedriger.",
      terms: ["leitzins", "dot-plot", "basispunkt", "sofr", "rendite"],
      followups: ["e:fed-hike", "e:central-banks-why", "e:yield-stocks", "e:sofr-spread", "e:eurusd-meaning", "chain:rates-to-credit"],
      sources: [
        { title: "CNBC: Fed rate decision September 2026", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
        { title: "CNN Business: What Kevin Warsh said", url: "https://www.cnn.com/2026/09/16/economy/fed-rate-decision-september" },
        { title: "Bloomberg: Fed raises rates as Warsh bucks Trump", url: "https://www.bloomberg.com/news/articles/2026-09-16/fed-raises-rates-as-warsh-bucks-trump-to-contain-inflation" },
        { title: "KPMG: September 2026 FOMC meeting", url: "https://kpmg.com/us/en/articles/2026/september-2026-fomc-meeting.html" }
      ]
    },

    /* 2 EURORAUM-INFLATION */
    {
      id: "inflation-euro", cats: ["economy", "germany"], when: "Do 17.09. · Eurostat / Fr 18.09. · Destatis",
      headline: "Euroraum-Inflation steigt im August auf 3,2 %, deutsche Erzeugerpreise legen um 4,6 % zu",
      sec30: "Die Inflation im Euroraum lag im August laut Eurostat bei 3,2 % (Juli 2,9 %, vor einem Jahr 2,0 %). In Deutschland waren es 2,9 %. Die Erzeugerpreise deutscher Hersteller stiegen um 4,6 % zum Vorjahr, Energie ist Haupttreiber. Die EZB hatte am 10. September den Einlagensatz auf 2,50 % angehoben.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Eurostat: Die Inflation im Euroraum lag im August bei 3,2 % nach 2,9 % im Juli und 2,0 % im August 2025. Die erste Schnellschätzung hatte 3,3 % ergeben. Deutschland kam auf 2,9 % (Juli 2,8 %).",
            ask: [{ label: "Was ist Inflation?", ref: "e:inflation-what" }, { label: "Was ist Kerninflation?", ref: "t:kerninflation" }] },
          { tag: "fakt", text: "Laut Zusammenfassung von Trading Economics stieg die Energieinflation auf 14,3 % (höchster Wert seit Januar 2023), während die Kerninflation auf 2,4 % (Juli 2,5 %) und die Dienstleistungsinflation auf 3,0 % (Vier-Monats-Tief) zurückgingen.",
            ask: [{ label: "Warum treibt Energie die Inflation?", ref: "e:oil-inflation" }] },
          { tag: "fakt", text: "Destatis: Die Erzeugerpreise gewerblicher Produkte lagen im August 4,6 % über dem Vorjahr und 1,1 % über dem Vormonat. Energie +8,3 %, Mineralölprodukte +40,5 %, leichtes Heizöl +65,3 %, Kraftstoffe +37,7 %, Erdgas +7,5 %, Strom +1,7 %, Vorleistungsgüter +6,1 %.",
            ask: [{ label: "Was sind Erzeugerpreise?", ref: "e:ppi-what" }, { label: "Was bedeutet das für Unternehmen?", ref: "e:companies-costs" }] },
          { tag: "fakt", text: "Nicht alles wird teurer: Verbrauchsgüter kosteten 2,0 % weniger, Nahrungsmittel 4,3 % weniger (Butter −40,5 %)." }
        ]},
        { h: "Was hat die EZB getan?", items: [
          { tag: "fakt", text: "Am 10. September erhöhte die EZB den Einlagensatz von 2,25 % auf 2,50 %, den Hauptrefinanzierungssatz auf 2,65 % und den Spitzenrefinanzierungssatz auf 2,90 %. Berichten zufolge ist es die zweite Erhöhung in diesem Jahr.",
            ask: [{ label: "Was bedeutet das für Kredite und Sparer?", ref: "e:ecb-hike" }, { label: "Was ist der Leitzins?", ref: "t:leitzins" }] },
          { tag: "position", text: "EZB-Chefin Lagarde legte sich laut Bericht nicht auf einen weiteren Zinspfad fest. Der Rat habe über künftige Schritte nicht diskutiert und entscheide datenabhängig von Sitzung zu Sitzung.",
            ask: [{ label: "Warum reagieren Zentralbanken auf Inflation?", ref: "e:central-banks-why" }] }
        ]},
        { h: "Wie steht die Konjunktur?", items: [
          { tag: "fakt", text: "ZEW-Konjunkturerwartungen für Deutschland im September: 34,7 Punkte (+0,5). Ökonomen hatten mehr erwartet (rund 40). Die Lagebeurteilung stieg um 14,0 auf −47,1 Punkte. Für den Euroraum sanken die Erwartungen auf 25,8." },
          { tag: "position", text: "ZEW-Präsident Wambach sieht die Experten sinngemäß vorsichtig optimistisch für eine Erholung, getragen von staatlichen Impulsen und Exporten. Als Risiken nennt er hohe Energiekosten durch den Iran-Konflikt und hybride Angriffe." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Erzeugerpreise gelten als Frühindikator für Verbraucherpreise: Steigen die Kosten der Hersteller, geben sie diese oft (nicht immer) weiter. Ob und wann das bei Verbrauchern ankommt, ist offen. Für die EZB ist das ein Grund, weitere Schritte von den Daten abhängig zu machen.",
            ask: [{ label: "Wie hängen beide zusammen?", ref: "e:inflation-what" }, { label: "Was sind Inflationserwartungen?", ref: "e:inflation-expectations" }] }
        ]}
      ],
      reaction: "Marktberichten zufolge belasteten die stärker als erwartet gestiegenen Erzeugerpreise den DAX am Freitag.",
      terms: ["inflation", "kerninflation", "erzeugerpreise", "leitzins", "basispunkt"],
      followups: ["e:inflation-what", "e:ppi-what", "e:oil-inflation", "e:ecb-hike", "e:central-banks-why", "e:energy-germany"],
      sources: [
        { title: "Eurostat: Annual inflation up to 3.2% in the euro area", url: "https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/2-17092026-ap" },
        { title: "Statistisches Bundesamt: Erzeugerpreise August 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_328_61241.html" },
        { title: "finanzen.net: EZB erhöht den Leitzins wie erwartet", url: "https://www.finanzen.net/nachricht/zinsen/ezb-zinsentscheid-ezb-erhoeht-den-leitzins-wie-erwartet-inflationsdruck-steigt-das-kommt-jetzt-auf-anleger-zu-15927178" },
        { title: "ARIVA: ZEW-Konjunkturerwartungen verbessern sich weniger als erwartet", url: "https://www.ariva.de/news/deutschland-zew-konjunkturerwartungen-verbessern-sich-12136791" }
      ]
    },

    /* 3 BOJ / BOE */
    {
      id: "boj-boe", cats: ["economy", "markets"], when: "Do 17.09. · BoE / Fr 18.09. · BoJ",
      headline: "Bank of Japan erhöht auf 1,25 %, Bank of England hält bei 3,75 % – drei Mitglieder stimmen für Erhöhung",
      sec30: "Die Bank of Japan hat ihren Leitzins am Freitag von 1,0 % auf 1,25 % angehoben, den höchsten Stand seit 31 Jahren, mit 7:2 Stimmen. Die Bank of England ließ ihren Zins am Donnerstag bei 3,75 %, aber drei von neun Mitgliedern stimmten für eine Erhöhung auf 4,0 %.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Bank of Japan: Der Zins steigt von 1,0 % auf 1,25 %, das Board entschied mit 7:2. Die Mitglieder Toichiro Asada und Ayano Sato stimmten dagegen. Die Erhöhung galt als weitgehend erwartet.",
            ask: [{ label: "Was ist der Leitzins?", ref: "t:leitzins" }] },
          { tag: "fakt", text: "Bank of England: Der Leitzins bleibt bei 3,75 %. Sechs Mitglieder stimmten für Beibehalten, drei für eine Erhöhung um 0,25 Punkte auf 4,0 %." },
          { tag: "fakt", text: "Der Dollar stand am Freitag über 157 Yen (Saxo Bank)." }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Nach Berichten begründet die Bank of Japan den Schritt mit Inflation über dem 2-%-Ziel, steigenden Energiepreisen und einem schwachen Yen. Sie kündigte an, die Zinsen bei Bedarf weiter anzuheben.",
            ask: [{ label: "Warum erhöhen Zentralbanken die Zinsen?", ref: "e:central-banks-why" }] },
          { tag: "position", text: "Die Bank of England warnte laut Bericht, die Zinsen könnten steigen müssen, wenn der Nahost-Konflikt anhält und höhere Energiepreise die Inflation dauerhafter machen. Bisher hätten die höheren Energiekosten begrenzte Wirkung auf Preis- und Lohnsetzung.",
            ask: [{ label: "Wie hängt Öl mit Inflation zusammen?", ref: "e:oil-inflation" }] },
          { tag: "unbestaetigt", text: "Einzelne Berichte nennen zusätzlich Druck aus Washington auf die Bank of Japan. Belege dafür liegen in den gesichteten Quellen nicht vor." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Fed, EZB, Bank of Japan und (mit Vorbehalt) Bank of England reagieren in derselben Richtung auf Inflation, die Energiepreise antreiben. Zusammen bedeutet das tendenziell höhere Zinsen in großen Währungsräumen.",
            ask: [{ label: "Was bedeutet das für Renditen?", ref: "e:yield-meaning" }, { label: "Was bedeutet das für den Dollar?", ref: "e:eurusd-meaning" }] },
          { tag: "position", text: "Finanzmärkte halten laut Bericht eine Erhöhung der Bank of England bei einer der nächsten Sitzungen im November oder Dezember für wahrscheinlicher als nicht." }
        ]}
      ],
      reaction: "Saxo Bank nennt die Zinserhöhung in Japan, niedrigere Ölpreise und eine breite Erholung als Faktoren des Donnerstags an den Börsen.",
      terms: ["leitzins", "basispunkt", "inflation"],
      followups: ["e:central-banks-why", "e:fed-hike", "e:ecb-hike", "e:oil-inflation", "e:eurusd-meaning"],
      sources: [
        { title: "CNBC: Bank of Japan raises interest rates to 31-year high", url: "https://www.cnbc.com/2026/09/18/japan-raises-rates-30-year-high-yen-jgb.html" },
        { title: "Al Jazeera: Bank of Japan raises rates to 1,25 %", url: "https://www.aljazeera.com/news/2026/9/18/japans-interest-rate-hiked-to-31-year-high-at-1-25-as-inflation-rises" },
        { title: "UPI: Bank of Japan raises rate to 1.25%", url: "https://www.upi.com/Top_News/World-News/2026/09/18/japan-policy-rate-raised-central-bank-weak-yen/6681789772736/" },
        { title: "BNN Bloomberg: Bank of England holds rates but appears ready to hike soon", url: "https://www.bnnbloomberg.ca/business/international/2026/09/17/bank-of-england-holds-rates-but-appears-ready-to-hike-soon/" }
      ]
    },

    /* 4 FREITAG */
    {
      id: "freitag", cats: ["markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "DAX bricht am großen Verfallstag um 1,6 % ein, Wall Street hält sich – Buffett tritt als Berkshire-Chairman ab",
      sec30: "Der DAX schloss 1,60 % tiefer bei 25.304 Punkten und liegt auf Wochensicht 1,03 % im Minus. In den USA gaben sich die Indizes kaum verändert: S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,18 %. Der S&P 500 verbucht den zweiten Wochenverlust in Folge.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "DAX −1,60 % auf 25.304,06 Punkte, MDax −1,16 % auf 31.083,97 Punkte, Euro Stoxx 50 −1,37 % auf 6.236,20 Punkte. VW-Vorzüge verloren 5,6 %, BMW, Continental und Mercedes-Benz bis zu 4,8 %, Porsche AG 3,3 %.",
            ask: [{ label: "Was bedeutet −1,6 %?", ref: "n:dax" }, { label: "Was ist der Euro Stoxx 50?", ref: "n:eurostoxx50" }] },
          { tag: "fakt", text: "Gewinner waren Siltronic (+10,5 %) und Infineon (+2,7 %), auch Halbleiter-Ausrüster wie Jenoptik, Suss Microtec und Aixtron zogen an.",
            ask: [{ label: "Warum steigen Chipwerte?", ref: "s:15" }] },
          { tag: "fakt", text: "In den USA schlossen S&P 500 bei 7.650,50 Punkten (+0,17 %), Nasdaq bei 26.522,55 (+0,39 %) und Dow bei 51.682,64 (−0,18 %). Der Dow verlor auf die Woche mehr als 1,5 %. Nucor fiel um 6,3 % nach einer Prognose unter den Erwartungen, Coinbase legte um 11,7 % zu.",
            ask: [{ label: "Was bedeutet diese Zahl?", ref: "n:sp500" }, { label: "Warum senken Firmen Prognosen?", ref: "e:companies-costs" }] },
          { tag: "fakt", text: "Warren Buffett (96) ist mit sofortiger Wirkung als Chairman von Berkshire Hathaway zurückgetreten. Er bleibt Chairman emeritus und Direktor, sein Sohn Howard Buffett übernimmt den Vorsitz. Greg Abel ist bereits CEO." }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Marktbeobachter nennen vor allem vier Faktoren für den DAX: den großen Verfallstag, die Nahost-Lage samt hohem Ölpreis, steigende Anleiherenditen und stärker als erwartet gestiegene deutsche Erzeugerpreise. Wie viel jeder Faktor beigetragen hat, lässt sich nicht genau sagen.",
            ask: [{ label: "Was ist der große Verfallstag?", ref: "e:verfallstag-why" }, { label: "Warum belasten Renditen Aktien?", ref: "e:yield-stocks" }, { label: "Warum bewegen sich Börsen?", ref: "e:why-markets-move" }] }
        ]},
        { h: "Was bedeutet das für mich?", items: [
          { tag: "einordnung", text: "Ein einzelner Handelstag sagt wenig über die langfristige Entwicklung. Wer in Indexfonds investiert, sieht solche Schwankungen regelmäßig. Wichtiger als der Tageswert ist der Zeithorizont der eigenen Anlage. Dies ist keine Anlageberatung." }
        ]}
      ],
      reaction: "Am Donnerstag hatte die Nasdaq noch um 1,69 % zugelegt, und der S&P 500 war um 1,14 % gestiegen.",
      terms: ["verfallstag", "rendite"],
      followups: ["e:index-move", "e:verfallstag-why", "e:yield-stocks", "e:why-markets-move", "chain:nasdaq-why"],
      sources: [
        { title: "onvista: Aktien Frankfurt Schluss", url: "https://www.onvista.de/news/2026/09-18-roundup-aktien-frankfurt-schluss-dax-sackt-am-grossen-verfallstag-ab-0-10-26555039" },
        { title: "BNN Bloomberg (AP): Wall Street drifts lower", url: "https://www.bnnbloomberg.ca/markets/2026/09/18/wall-street-drifts-as-bond-yields-rise-and-oil-prices-swing/" },
        { title: "Yahoo Finance: Stock market today, Friday September 18", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-september-18-dow-sp-500-nasdaq-080504071.html" },
        { title: "CNBC: Buffett stepping down as Berkshire chairman", url: "https://www.cnbc.com/2026/09/18/buffett-stepping-down-as-berkshire-chairman.html" }
      ]
    },

    /* 5 RENDITEN */
    {
      id: "renditen", cats: ["markets"], when: "Diese Woche",
      headline: "Renditen hoch: US-10-Jahres-Anleihe bei 5,0 %, Bund bei 3,50 %",
      sec30: "Die Rendite zehnjähriger US-Staatsanleihen stieg am Freitag von 4,94 % auf 5,0 %, laut AP erstmals seit 2023. Die zehnjährige Bundesanleihe rentierte bei 3,50 %, nach einem Mehrjahreshoch von 3,57 % in dieser Woche.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "US-10-Jahres-Rendite: Freitag 5,0 % nach 4,94 % am Donnerstag. Sie hatte laut CNBC-Überschrift am Montag die 5-%-Marke kurz berührt.",
            ask: [{ label: "Was bedeutet 5,0 %?", ref: "n:ust10" }, { label: "Was ist eine Rendite?", ref: "t:rendite" }] },
          { tag: "fakt", text: "Bund-Rendite (10 Jahre): 3,50 % am Freitag. Der Euro-Bund-Future verlor 0,11 % auf 120,64 Punkte. Ein Bericht nennt 3,57 % als Mehrjahreshoch in dieser Woche.",
            ask: [{ label: "Was bedeutet 3,5 %?", ref: "n:bund10" }, { label: "Wie hängen Rendite und Kurs zusammen?", ref: "t:rendite" }] },
          { tag: "unbestaetigt", text: "Der Tag des Bund-Mehrjahreshochs von 3,57 % wird in den gesichteten Berichten unterschiedlich angegeben (Dienstag bzw. Donnerstag)." }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Berichte nennen den Zinsschritt der Fed, Wetten auf eine weitere Erhöhung im Oktober und hohe Ölpreise als Treiber. Bei Bundesanleihen sehen sie am Freitag Gewinnmitnahmen nach zwei starken Tagen. Der seit Mittwoch gefallene Ölpreis dämpfte die Inflationserwartungen laut dpa-AFX nur ein wenig.",
            ask: [{ label: "Warum steigen Renditen bei Inflationssorgen?", ref: "e:inflation-expectations" }] },
          { tag: "position", text: "Verbraucherumfragen zeigten laut Bericht Inflationserwartungen von 3 % für die nächsten zwölf Monate. Eine nachhaltige Öffnung der Straße von Hormus gilt weiter als unwahrscheinlich." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Renditen sind Richtwerte für viele Zinsen: Firmenkredite, Hypotheken und die Bewertung von Aktien. Höhere Renditen machen Kredite teurer und belasten tendenziell Aktien mit hohen Bewertungen. Für den Staat werden neue Schulden teurer.",
            ask: [{ label: "Was bedeutet das für Aktien?", ref: "e:yield-stocks" }, { label: "Was bedeutet das für den Staatshaushalt?", ref: "e:debt-brake" }, { label: "Was bedeutet das für Private Equity?", ref: "e:lbo" }] }
        ]}
      ],
      reaction: "DAX −1,60 % am Freitag. Marktbeobachter nennen steigende Renditen als Belastungsfaktor.",
      terms: ["rendite", "basispunkt", "leitzins"],
      followups: ["e:yield-meaning", "e:yield-stocks", "e:rates-stocks", "e:sofr-spread", "e:debt-brake"],
      sources: [
        { title: "onvista: Deutsche Anleihen mit leichten Kursverlusten", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" },
        { title: "wallstreet-online: Öl und Fed setzen Bundesanleihen unter Druck", url: "https://www.wallstreet-online.de/nachricht/21391731-oel-fed-bundesanleihen-druck-rendite-mehrjahreshoch" },
        { title: "BNN Bloomberg (AP): Wall Street drifts lower as bond yields rise", url: "https://www.bnnbloomberg.ca/markets/2026/09/18/wall-street-drifts-as-bond-yields-rise-and-oil-prices-swing/" },
        { title: "CNBC: Stocks slide as 10-year yield briefly touches 5%", url: "https://www.cnbc.com/2026/09/13/stock-futures-today-live-updates.html" }
      ]
    },

    /* 6 BITCOIN / GOLD */
    {
      id: "bitcoin-gold", cats: ["markets"], when: "Fr 18.09. / Sa 19.09.",
      headline: "Bitcoin springt über 81.000 Dollar, Gold nahe Wochenhoch",
      sec30: "Bitcoin stieg von rund 76.400 Dollar am Donnerstag auf über 81.000 Dollar, laut Berichten getrieben von der Auflösung von Wetten auf fallende Kurse. Gold erreichte in der Woche ein Hoch von 4.439,80 Dollar (Futures).",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Bitcoin erreichte am 18.09. ein Hoch von 81.702 Dollar, nachdem er am Vortag um 76.400 Dollar gehandelt worden war. Es war die erste Bewegung über 80.000 Dollar seit dem 7. September. Am Samstag lag er bei rund 81.250 Dollar.",
            ask: [{ label: "Was ist Bitcoin?", ref: "e:bitcoin-what" }, { label: "Was bedeutet 81.000 $?", ref: "n:bitcoin" }] },
          { tag: "fakt", text: "Der Bitcoin-Preis liegt weit unter dem Rekord von 126.200 Dollar (Oktober 2025) und laut Fortune rund 33 % unter dem Stand von vor einem Jahr." },
          { tag: "fakt", text: "Gold: Laut Yahoo Finance stiegen die Futures am Freitag bis auf 4.421 Dollar, Wochenhoch 4.439,80 Dollar. Der Spotpreis lag laut goldpreis-Angabe bei 4.379,82 Dollar. Auf die Woche ist Gold rund 0,5 % im Plus.",
            ask: [{ label: "Warum kaufen Anleger Gold?", ref: "e:gold-why" }, { label: "Was bedeutet 4.400 $?", ref: "n:gold" }] },
          { tag: "unbestaetigt", text: "Die Preisangaben für Gold und Bitcoin unterscheiden sich je nach Quelle, Kontrakt und Uhrzeit. Auch die Höhe der aufgelösten Short-Positionen schwankt in den Berichten (etwa 183 bis 469 Mio. $)." }
        ]},
        { h: "Warum?", items: [
          { tag: "position", text: "Berichte nennen Short-Liquidationen, Zuflüsse in US-Bitcoin-ETFs und Momentum-Käufe. Hinzu komme, dass der Kurs seit dem 7. September unter 80.000 $ gelegen hatte. Marktbeobachter verweisen darauf, dass der Anstieg trotz Zinserhöhungen in den USA und Japan und einer gescheiterten Krypto-Abstimmung im US-Senat kam.",
            ask: [{ label: "Wie hängen Zinsen und Bitcoin zusammen?", ref: "e:yield-stocks" }] },
          { tag: "position", text: "Coinbase stieg am Freitag um 11,7 % und war damit der größte Gewinner im S&P 500. Laut Saxo Bank genehmigte die SEC außerdem eine fünfjährige Ausnahme für den Handel mit tokenisierten Aktien." },
          { tag: "position", text: "Yahoo Finance führt den Goldanstieg darauf zurück, dass nach der Fed-Erhöhung und der Wiederherstellung der saudischen Pipeline Inflationssorgen abklangen." }
        ]},
        { h: "Was bedeutet das?", items: [
          { tag: "einordnung", text: "Bitcoin hat weder Gewinn noch Zinsen. Sein Preis folgt Angebot, Nachfrage und Stimmung, deshalb sind starke Tagesbewegungen üblich. Gold zahlt ebenfalls keinen Zins und konkurriert mit Anleihen, deren Renditen zuletzt stiegen. Dies ist keine Anlageberatung.",
            ask: [{ label: "Warum konkurriert Gold mit Zinsen?", ref: "e:gold-why" }] }
        ]}
      ],
      reaction: "Der Dollar wurde nach dem Fed-Entscheid stärker, EUR/USD fiel auf ≈ 1,146.",
      terms: [],
      followups: ["e:bitcoin-what", "e:gold-why", "e:why-markets-move", "e:eurusd-meaning"],
      sources: [
        { title: "Yahoo Finance: Bitcoin jumps above $81k as short squeeze offsets rate pressure", url: "https://finance.yahoo.com/markets/crypto/articles/bitcoin-jumps-above-81k-short-031138129.html" },
        { title: "Fortune: Current price of Bitcoin for Sept. 18, 2026", url: "https://fortune.com/article/price-of-bitcoin-09-18-2026/" },
        { title: "Yahoo Finance: Gold price today, Friday, September 18, 2026", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-price-today-friday-september-18-2026-gold-hits-weekly-high-as-inflation-concerns-fade-104807567.html" },
        { title: "Saxo Bank: Morning Brew", url: "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-september-19-2026-18092026" }
      ]
    },

    /* 7 ENERGIE */
    {
      id: "oel-gas", cats: ["energy", "markets"], when: "Fr 18.09. · Handelsschluss",
      headline: "Ölpreis fällt den dritten Tag in Folge, Gas in Europa bleibt bei 80 Euro",
      sec30: "Brent schloss am Freitag bei rund 103,9 Dollar (−0,9 %), den dritten Tag in Folge im Minus, nachdem er zu Wochenbeginn nahe 110 Dollar lag. Der europäische Erdgaspreis TTF liegt bei etwa 80 Euro je Megawattstunde, vor dem Iran-Krieg waren es rund 30 Euro. Deutschlands Gasspeicher sind zu 56 % gefüllt.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Brent (November) schloss laut AP bei 103,87 $ (−0,9 %). WTI (Oktober) lag am Freitagmorgen bei 99,52 $ (−1,63 %, dpa-AFX). Die Preise seien seit Wochenbeginn hin- und hergesprungen, nachdem Brent zuvor nahe 110 $ gestanden habe.",
            ask: [{ label: "Warum ist Öl so teuer?", ref: "e:why-oil-up-geo" }, { label: "Was bedeutet 104 $?", ref: "n:brent" }, { label: "Brent und WTI?", ref: "e:brent-wti" }] },
          { tag: "position", text: "Marktberichte nennen als wichtigen Faktor der Preisrückgänge die Ankündigung Saudi-Arabiens, die Ost-West-Pipeline wieder auf 50 % der Kapazität hochzufahren. Ein Analyst von Phillip Nova sieht darin eher einen nachlassenden Risikoaufschlag als eine Trendwende.",
            ask: [{ label: "Was ist das Risiko dahinter?", ref: "s:8" }] },
          { tag: "unbestaetigt", text: "Zur Dauer der Pipeline-Reparatur widersprechen sich Angaben: Ein Branchenvertreter nannte laut Reuters fünf bis sechs Wochen, eine andere Quelle sprach von einem früheren Teilbetrieb." },
          { tag: "fakt", text: "Laut Telepolis (18.09.) liegt der TTF bei etwa 80 €/MWh. Die deutschen Speicher sind zu 56 % gefüllt, die europäischen zu 69 % und damit rund 16 Prozentpunkte unter dem Fünfjahresschnitt.",
            ask: [{ label: "Warum ist Gas teuer?", ref: "e:gas-ttf" }, { label: "Was ist TTF?", ref: "t:ttf" }] }
        ]},
        { h: "Welche Ursachen werden genannt?", items: [
          { tag: "position", text: "Laut Telepolis blockiert die gestörte Straße von Hormus knapp ein Fünftel der weltweiten LNG-Mengen, darunter Lieferungen aus Katar. Im August seien nur rund 70.000 Tonnen statt im Schnitt 6,51 Mio. Tonnen pro Monat vor dem Krieg durchgekommen.",
            ask: [{ label: "Was ist LNG?", ref: "t:lng" }, { label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "position", text: "China soll den Iran laut Bericht gebeten haben, die Angriffe der Huthi einzudämmen. US-Präsident Trump plant am Dienstag am Rand der UN-Generalversammlung ein Treffen mit Vertretern der Golfstaaten zum Iran." }
        ]},
        { h: "Was wird für den Winter erwartet?", items: [
          { tag: "position", text: "Das EU-Ziel sind 90 % Füllstand bis November. Equinor hält nach Telepolis nur 75 % für erreichbar. Das Institut INES warnt vor Versorgungslücken von bis zu 25 % an einzelnen Januartagen bei extremer Kälte, Morgan Stanley hält Preise bis 100 €/MWh für möglich. Das sind Prognosen der Genannten, keine gesicherten Größen." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Öl und Gas stecken in Sprit, Heizung, Strom und der Produktion. Steigen ihre Preise, wirkt das auf Inflation, Zinsen und Unternehmensgewinne. Die deutschen Erzeugerpreise zeigen es: Energie +8,3 %, Heizöl +65,3 %.",
            ask: [{ label: "Wie beeinflusst Öl die Inflation?", ref: "e:oil-inflation" }, { label: "Was bedeutet das für Deutschland?", ref: "e:energy-germany" }, { label: "Was bedeutet das für die Börse?", ref: "e:oil-stocks" }] }
        ]}
      ],
      reaction: "DAX −1,60 % am Freitag. Marktbeobachter nennen den hohen Ölpreis als einen von mehreren Belastungsfaktoren.",
      terms: ["brent", "wti", "ttf", "lng", "oil-future"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:oil-inflation", "e:gas-ttf", "e:energy-germany", "chain:oil-to-markets"],
      sources: [
        { title: "onvista: Ölpreise weiter etwas schwächer", url: "https://www.onvista.de/news/2026/09-18-oelpreise-weiter-etwas-schwaecher-0-10-26554766" },
        { title: "BNN Bloomberg (AP): Brent settled at $103.87", url: "https://www.bnnbloomberg.ca/markets/2026/09/18/wall-street-drifts-as-bond-yields-rise-and-oil-prices-swing/" },
        { title: "Telepolis: Gasspeicher Europa Winter 2026", url: "https://www.telepolis.de/article/Deutschland-bei-56-Prozent-Warum-volle-Gasspeicher-trotz-mehr-LNG-utopisch-sind-11458241.html" },
        { title: "onvista: Deutsche Anleihen (Ölpreis, Hormus)", url: "https://www.onvista.de/news/2026/09-18-deutsche-anleihen-leichte-kursverluste-0-10-26554862" }
      ]
    },

    /* 8 GEOPOLITIK: SAUDI-ARABIEN / HUTHI */
    {
      id: "huthi-saudi", cats: ["geo", "world", "energy"], when: "10.–18.09.",
      headline: "Saudi-Arabien legt wichtige Ölpipeline still, Huthi rücken an der Meerenge Bab el-Mandeb vor",
      sec30: "Nach Drohnenangriffen aus dem Irak hat Saudi-Arabien am 11. September seine Ost-West-Ölpipeline vorsorglich stillgelegt. Sie ist der wichtigste Umweg um die gestörte Straße von Hormus. Zugleich haben die pro-iranischen Huthi im Jemen die Insel Perim in der Meerenge Bab el-Mandeb eingenommen. Brent stieg über 104 Dollar, fiel aber zuletzt wieder.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Die Golfregion liefert einen großen Teil des Weltölangebots. Die Ost-West-Pipeline bringt Öl vom Osten Saudi-Arabiens ans Rote Meer und umgeht damit die Straße von Hormus. Fällt sie aus und drohen auch am Roten Meer Angriffe, verengen sich die Ausweichrouten.",
            ask: [{ label: "Warum steigt der Ölpreis bei Konflikten?", ref: "e:why-oil-up-geo" }, { label: "Was folgt daraus für Inflation und Zinsen?", ref: "chain:oil-to-markets" }] }
        ]},
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Am 10. und 11. September trafen Drohnen aus der irakischen Provinz Maysan Pumpstationen der rund 1.200 km langen Pipeline in den Regionen Riad und Medina. Saudi-Arabien schloss die Leitung am 11. September vorsorglich. Laut Al Jazeera transportiert sie vier bis fünf Millionen Fass Öl pro Tag, etwa 4–5 % des weltweiten Angebots.",
            ask: [{ label: "Was ist ein Fass?", ref: "n:brent" }] },
          { tag: "fakt", text: "Die Huthi nahmen die Insel Perim in der Meerenge Bab el-Mandeb ein und rückten auf den Hafen Mokha vor. Berichten zufolge ist es ihr größter Landgewinn seit Jahren, der den seit zwölf Jahren laufenden Bürgerkrieg im Jemen neu entfacht hat." },
          { tag: "fakt", text: "Brent stieg nach dem Angriff über 104 $ (Al Jazeera) und laut Berichten bis nahe 110 $ am 14.09. Am 18.09. schloss er bei 103,87 $, nachdem Saudi-Arabien angekündigt hatte, die Pipeline wieder auf 50 % der Kapazität hochzufahren." }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Saudi-Arabien, die vom Iran unterstützten Huthi im Jemen und bewaffnete Gruppen im Irak. Beteiligt ist auch die irakische Regierung, die laut Bericht den Kommandeur der Operationen in Maysan abgesetzt hat." },
          { tag: "position", text: "Keine Gruppe hat sich zu den Pipeline-Angriffen bekannt. Der Sicherheitsanalyst Wolfgang Pusztai sagte Al Jazeera, der Angriff sei „höchstwahrscheinlich ein Befehl aus Teheran“ gewesen, um Saudi-Arabien wegen des Jemen unter Druck zu setzen. Das ist seine Einschätzung, ein Beleg liegt hier nicht vor." },
          { tag: "position", text: "Saudi-Arabien verzichtete laut Bericht auf Vergeltung auf Bitten des Irak, behält sich aber alle nötigen Maßnahmen vor. Als Ausweichrouten für Exporte nennt Riad Suezkanal und Sumed-Pipeline." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Die Straße von Hormus ist laut Al Jazeera seit März gestört. Brent kostete vor Beginn des Konflikts rund 72 $.",
            ask: [{ label: "Was ist die Straße von Hormus?", ref: "e:hormuz" }] },
          { tag: "unbestaetigt", text: "Zum aktuellen Zustand der Straße von Hormus und zu Verhandlungen zwischen den USA und dem Iran liegen in den gesichteten Quellen nur uneinheitliche Angaben vor. Eine gesicherte Lagebeschreibung gibt es hier nicht. dpa-AFX schreibt, eine nachhaltige Öffnung gelte weiter als unwahrscheinlich." }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen könnte das haben?", items: [
          { tag: "einordnung", text: "Höhere Öl- und Gaspreise erhöhen die Inflation. Zentralbanken reagieren darauf mit höheren Zinsen (Fed, EZB und Bank of Japan haben erhöht), was Kredite und Aktienbewertungen belastet.",
            ask: [{ label: "Was bedeutet das für Deutschland?", ref: "e:energy-germany" }, { label: "Was bedeutet das für Aktien?", ref: "e:oil-stocks" }] }
        ]}
      ],
      reaction: "Brent schloss am Freitag bei ≈ 103,9 $. Der DAX gab um 1,6 % nach, Marktbeobachter nennen die Nahost-Lage als Belastung.",
      terms: ["brent", "opec-plus", "lng"],
      followups: ["e:why-oil-up-geo", "e:hormuz", "e:opec-plus-why", "e:oil-inflation", "chain:oil-to-markets"],
      sources: [
        { title: "Al Jazeera: Saudi Arabia shuts critical oil pipeline after drone attack", url: "https://www.aljazeera.com/news/2026/9/12/saudi-arabia-shuts-critical-oil-pipeline-after-drone-attack-what-happened" },
        { title: "NPR: What to know after a week of Houthi attacks that threaten Saudi oil", url: "https://www.npr.org/2026/09/18/nx-s1-5973810/houthi-attacks-saudi-oil-world-markets" },
        { title: "CNBC: Saudi Arabia shut down East-West crude oil pipeline", url: "https://www.cnbc.com/2026/09/11/saudi-arabia-shut-down-east-west-crude-oil-pipeline.html" },
        { title: "onvista: Ölpreise weiter etwas schwächer", url: "https://www.onvista.de/news/2026/09-18-oelpreise-weiter-etwas-schwaecher-0-10-26554766" }
      ]
    },

    /* 9 GEOPOLITIK: UKRAINE / EU-SANKTIONEN */
    {
      id: "ukraine-sanktionen", cats: ["world", "geo"], when: "Aktuell · EU-Frist 22.09.",
      headline: "Ukraine-Krieg: EU-Sanktionen gegen Russland hängen an einer Frist, Duma-Wahl läuft",
      sec30: "Die EU konnte sich am 14. September nicht auf die Verlängerung der Russland-Sanktionen gegen Personen und Firmen einigen und verlängerte sie nur um sieben Tage bis zum 22. September. Frankreich und die Slowakei fordern die Streichung des Oligarchen Alischer Usmanow von der Liste. Gleichzeitig wählt Russland vom 18. bis 20. September eine neue Duma.",
      blocks: [
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "EU-Sanktionen müssen einstimmig verlängert werden, ein einzelnes Land kann sie blockieren. Läuft die Verlängerung aus, entfallen die Einreise- und Vermögenssperren für die betroffenen Personen. Damit ändert sich auch die Verhandlungsposition Europas im Krieg.",
            ask: [{ label: "Wie wirken Sanktionen auf Märkte und Energie?", ref: "e:why-oil-up-geo" }] }
        ]},
        { h: "Wer ist beteiligt?", items: [
          { tag: "fakt", text: "Frankreich und die Slowakei verlangen, dass Usmanow von der Liste gestrichen wird. 25 andere Mitgliedstaaten lehnen das laut Berliner Zeitung ab. Luxemburg unterstützt die Verlängerung, würde aber die Streichung von Michail Fridman verlangen, falls Usmanow gestrichen wird." },
          { tag: "unbestaetigt", text: "Zur Zahl der betroffenen Personen und Organisationen gibt es unterschiedliche Angaben: über 3.000 (Euronews, Correctiv) bzw. rund 2.600 (andere Berichte)." },
          { tag: "position", text: "Nach Angaben der Financial Times, wiedergegeben von der Berliner Zeitung, will Frankreich die Streichung im Gegenzug für die Freilassung französischer Staatsbürger in Aserbaidschan erreichen. Euronews zitiert Diplomaten, es scheine vor allem um wirtschaftliche Gründe zu gehen. Beides sind Darstellungen der Quellen, keine bestätigten Fakten." }
        ]},
        { h: "Was ist noch aktuell?", items: [
          { tag: "fakt", text: "Am 18. September gründete Selenskyj die „Karpaten-Acht“ (C8) mit Ungarn, Polen, der Slowakei, Tschechien, Österreich, Rumänien, Serbien und der EU. Themen sind Sicherheit, Energie, Logistik und grenzüberschreitende Wirtschaft. Ungarn war beim ersten Gipfel durch den Leiter seiner Botschaft in Kiew vertreten." },
          { tag: "fakt", text: "In Russland läuft vom 18. bis 20. September die Duma-Wahl. Es geht um alle 450 Sitze, rund 111 Millionen Menschen sind wahlberechtigt. Die Anti-Kriegs-Partei Jabloko wurde von der Landesliste ausgeschlossen. Gewählt wird auch in besetzten ukrainischen Gebieten, was die Ukraine und westliche Regierungen als illegal ansehen." },
          { tag: "position", text: "Nach russischen Angaben gab es einen Cyberangriff auf das elektronische Wahlsystem in Moskau. Putin deutet laut Bericht eine hohe Wahlbeteiligung als Zeichen der Unterstützung für den Krieg." },
          { tag: "position", text: "Zu den Friedensgesprächen berichten die gesichteten Quellen, dass sie derzeit stocken. Selenskyj äußerte laut Bericht Zweifel an Russlands Verhandlungsbereitschaft. Es gibt weder einen Waffenstillstand noch einen Termin für neue Gespräche." }
        ]},
        { h: "Historischer Hintergrund", items: [
          { tag: "fakt", text: "Der Krieg begann mit Russlands großangelegtem Angriff auf die Ukraine im Februar 2022. Die EU-Sanktionen wurden 2022 verhängt. Personenlisten werden bisher alle sechs Monate verlängert, für Sektorsanktionen gilt seit Juli 2026 ein Zwölf-Monats-Rhythmus (Euronews).",
            ask: [{ label: "Was bedeutet das NATO-Ziel von 5 %?", ref: "e:nato-target" }] }
        ]},
        { h: "Welche wirtschaftlichen Auswirkungen könnte das haben?", items: [
          { tag: "einordnung", text: "Wegfallende Sanktionen könnten Russland Handels- und Finanzwege öffnen, ein Streit in der EU könnte Verhandlungsdruck und Energiepreise beeinflussen. Ob und wie stark, lässt sich aus den Quellen nicht ableiten. Die Verhandlungslage wirkt auch auf Rüstungsaktien und Verteidigungsbudgets.",
            ask: [{ label: "Warum reagieren Rüstungsaktien auf Friedensgespräche?", ref: "e:defence-stocks" }] }
        ]}
      ],
      reaction: null,
      terms: [],
      followups: ["e:defence-stocks", "e:nato-target", "e:defence-order", "e:why-oil-up-geo"],
      sources: [
        { title: "Correctiv: EU blockiert Verlängerung von Sanktionen gegen Russland", url: "https://correctiv.org/aktuelles/russland-ukraine-2/2026/09/15/erfolg-fuer-russland-eu-blockiert-veto-gegen-verlaengerung-von-sanktionen-gegen-russland/" },
        { title: "Berliner Zeitung: EU verschiebt Entscheidung über Russland-Sanktionen", url: "https://www.berliner-zeitung.de/article/nach-frankreich-blockade-eu-verschiebt-entscheidung-ueber-russland-sanktionen-10393233" },
        { title: "Euronews: France joins Slovakia in asking to delist Usmanov", url: "https://www.euronews.com/my-europe/2026/09/11/exclusive-france-joins-slovakia-in-asking-to-delist-russian-oligarch-usmanov" },
        { title: "DailyNewsHungary: Selenskyj ruft die Karpaten-Acht ins Leben", url: "https://dailynewshungary.com/de/selenskyj-ruft-neues-bundnis-der-karpaten-acht-unter-beteiligung-ungarns-ins-leben/" },
        { title: "AOL/dpa: Russland wählt neue Duma", url: "https://www.aol.de/articles/russland-w%C3%A4hlt-neue-duma-krieg-094311000.html" }
      ]
    },

    /* 10 WAHLEN */
    {
      id: "wahlen", cats: ["germany"], when: "So 20.09. · Wahltag",
      headline: "Berlin und Mecklenburg-Vorpommern wählen am Sonntag neue Landtage – enge Rennen",
      sec30: "Am 20. September wird in Berlin und Mecklenburg-Vorpommern gewählt. Laut den letzten Umfragen liegen in MV SPD (37 %) und AfD (36 %) fast gleichauf, in Berlin führt die Linke (22 %) knapp vor der CDU (20 %). Zwei Wochen zuvor erreichte die AfD in Sachsen-Anhalt 43,8 %.",
      blocks: [
        { h: "Was steht an?", items: [
          { tag: "fakt", text: "Landtagswahlen am Sonntag, 20.09.2026, in beiden Ländern. Die Zahlen unten stammen aus Umfragen bis zum 17.09. und sind keine Ergebnisse. Umfragen können vom Wahlergebnis abweichen.",
            ask: [{ label: "Warum sind Landtagswahlen wichtig?", ref: "e:landtagswahl-why" }] }
        ]},
        { h: "Mecklenburg-Vorpommern", items: [
          { tag: "fakt", text: "Forschungsgruppe Wahlen (ZDF, 17.09.): SPD 37 %, AfD 36 %, Linke 9 %, CDU 6 %, Grüne 5 %, BSW 4 %. INSA (BILD, 16.09.): AfD 37 %, SPD 35 %, Linke 10 %, CDU 7 %, Grüne 5 %, BSW 3 %. Die CDU liegt damit nahe der 5-%-Hürde.",
            ask: [{ label: "Was heißt „keine Mehrheit“?", ref: "e:coalition-majority" }] },
          { tag: "fakt", text: "Spitzenkandidaten sind Ministerpräsidentin Manuela Schwesig (SPD), Leif-Erik Holm (AfD) und Daniel Peters (CDU). Ob eine Neuauflage von SPD und Linke eine Mehrheit hätte, ist nach den Umfragen offen; im Gespräch ist ein Dreierbündnis mit den Grünen." },
          { tag: "position", text: "Schwesig sagte laut dpa sinngemäß, es sei eine große Leistung, dass man die AfD weit unter 40 % drücke. CDU-Generalsekretärin Hoppermann sagte sinngemäß, man kämpfe bis zum Schluss." }
        ]},
        { h: "Berlin", items: [
          { tag: "fakt", text: "Forschungsgruppe Wahlen (14.–17.09.): Linke 22 %, CDU 20 %, AfD 18 %, Grüne 15 %, SPD 12 %, BSW 4 %. INSA (10.–16.09.): Linke 21 %, CDU 20 %, AfD 18 %, Grüne 15 %, SPD 12 %, BSW 5 %." },
          { tag: "fakt", text: "Nach den Umfragen hätte keine Zweierkoalition eine Mehrheit, auch nicht die bisherige aus CDU und SPD. Als wahrscheinliche Optionen gelten Dreierbündnisse aus Linke, Grünen und SPD oder aus CDU, Grünen und SPD. Spitzenkandidaten sind Elif Eralp (Linke), Stefan Evers (CDU), Steffen Krach (SPD), Werner Graf (Grüne) und Kristin Brinker (AfD).",
            ask: [{ label: "Was ist eine Koalition?", ref: "t:koalition" }] },
          { tag: "fakt", text: "Erstmals dürfen in Berlin auch 16- und 17-Jährige wählen. Jede Person hat zwei Stimmen, gewählt wird von 8 bis 18 Uhr. Laut ZDF dominiert das Thema Wohnen, rund 85 % der Berlinerinnen und Berliner wohnen zur Miete." },
          { tag: "position", text: "Der bisherige Regierende Bürgermeister Kai Wegner (CDU) tritt nicht mehr an. Laut Bericht trat er im Juli als Spitzenkandidat zurück, nachdem es um falsche Angaben zu seinem Krisenmanagement bei einem großen Stromausfall im Januar gegangen war." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "einordnung", text: "Nach der Wahl wird ein neues Parlament gebildet, danach verhandeln Parteien über Koalitionen. Das kann Wochen bis Monate dauern. Erst dann steht fest, wer regiert.",
            ask: [{ label: "Was ist ein Koalitionsvertrag?", ref: "t:koalition" }] }
        ]},
        { h: "Was wird diskutiert?", items: [
          { tag: "fakt", text: "In Sachsen-Anhalt erreichte die AfD am 6. September 43,8 %, ihr bestes Ergebnis bei einer Landtagswahl, und verfehlte die absolute Mehrheit der Sitze knapp. Die CDU kam auf 17,2 %, SPD 9,3 %, Grüne 8,9 %, Linke 8,6 %, BSW 5,3 %; die FDP scheiterte an der Hürde. Die Wahlbeteiligung lag bei 77,8 %." },
          { tag: "position", text: "Kommentatoren verweisen auf die bundespolitische Bedeutung der beiden Wahlen. Laut dpa könnte sich die Position von Bundeskanzler Merz erschweren, falls die CDU in MV an der 5-%-Hürde scheitert. Das ist eine Einschätzung von Beobachtern, keine Tatsache." }
        ]}
      ],
      reaction: null,
      terms: ["koalition"],
      followups: ["e:landtagswahl-why", "e:coalition-majority", "e:haushalt-basics", "e:rente-basics"],
      sources: [
        { title: "wahlrecht.de: Umfragen Mecklenburg-Vorpommern", url: "https://www.wahlrecht.de/umfragen/landtage/mecklenburg-vorpommern.htm" },
        { title: "wahlrecht.de: Umfragen Berlin", url: "https://www.wahlrecht.de/umfragen/landtage/berlin.htm" },
        { title: "WNOZ/dpa: Spannung vor Wahlen mit bundespolitischer Tragweite", url: "https://www.wnoz.de/nachrichten/deutschland-und-die-welt/politik/deutschland/wahlkampffinale-in-mv-und-berlin-enge-rennen-an-der-spitze-1108838.html" },
        { title: "ZDFheute: Berlin-Wahl 2026, Alles Wichtige", url: "https://www.zdfheute.de/politik/deutschland/wahl-berlin-abgeordnetenhaus-faq-100.html" },
        { title: "ZDFheute: Wahl in Sachsen-Anhalt, AfD liegt klar vor CDU", url: "https://www.zdfheute.de/politik/deutschland/landtagswahl-sachsen-anhalt-wahlergebnisse-cdu-afd-schulze-siegmund-100.html" }
      ]
    },

    /* 11 RENTE */
    {
      id: "rente", cats: ["germany"], when: "Aktuelle Debatte · Gesetzentwurf in Arbeit",
      headline: "Rentenreform: Kommission will Ende der abschlagsfreien Rente nach 45 Beitragsjahren, Gesetzentwurf fehlt noch",
      sec30: "Die Alterssicherungskommission empfiehlt in 33 Punkten unter anderem, die abschlagsfreie Rente nach 45 Beitragsjahren abzuschaffen. Die Koalition will alle Empfehlungen umsetzen. Der Gesetzentwurf wird im Arbeitsministerium erarbeitet, das Verfahren soll bis Ende 2026 abgeschlossen sein. Gewerkschaften und Sozialverbände lehnen die Abschaffung ab.",
      blocks: [
        { h: "Was wurde vorgeschlagen?", items: [
          { tag: "fakt", text: "Die Alterssicherungskommission legte ihre Empfehlungen Ende Juni vor. Der Koalitionsausschuss begrüßte den Bericht am 2. Juli und kündigte an, alle 33 Empfehlungen zügig und vollständig umzusetzen.",
            ask: [{ label: "Wie funktioniert die gesetzliche Rente?", ref: "e:rente-basics" }] },
          { tag: "fakt", text: "Zu den Empfehlungen zählen laut Bundesregierung: die abschlagsfreie Rente für besonders langjährig Versicherte abzuschaffen, die Regelaltersgrenze nach 2031 schrittweise um etwa sechs Monate auf 67,5 Jahre anzuheben (gekoppelt an die Lebenserwartung), Selbständige, Abgeordnete und Vorstände in die Rentenversicherung aufzunehmen und eine „gesetzliche Kapitalrente“ mit einem zusätzlichen Beitrag von 2 % einzuführen." }
        ]},
        { h: "Was ändert sich konkret?", items: [
          { tag: "fakt", text: "Nach geltendem Recht können Versicherte des Jahrgangs 1964 oder später mit 45 Beitragsjahren mit 65 ohne Abschläge in Rente gehen. Das könnte entfallen oder nur in engeren Härtefällen bleiben." },
          { tag: "unbestaetigt", text: "Ab welchem Geburtsjahrgang die Neuregelung gelten würde, ist nicht geklärt. Arbeitsministerin Bas hat laut ms-aktuell Schutz für rentennahe Jahrgänge und Übergangsregeln von etwa fünf Jahren in Aussicht gestellt. Ein Gesetzentwurf mit konkreten Fristen liegt nicht vor, die Angaben stammen aus einem Medienbericht." }
        ]},
        { h: "Warum wird das gemacht?", items: [
          { tag: "position", text: "Die Bundesregierung stellt die Reform als Antwort auf die Finanzierung der gesetzlichen Rentenversicherung in einer älter werdenden Gesellschaft dar. Kanzler Merz nannte sie sinngemäß eines der schwierigsten Reformprojekte unserer Zeit.",
            ask: [{ label: "Warum ist die Rente ein Finanzproblem?", ref: "t:umlage" }] }
        ]},
        { h: "Wer unterstützt es – und womit?", items: [
          { tag: "position", text: "Die Koalition aus CDU/CSU und SPD hat beschlossen, das Paket umzusetzen. Sie verweist auf die Sicherung des Rentenniveaus: Ziel ist eine Nettoersatzquote von mindestens 70 % nach Steuern für Durchschnittsverdienende." }
        ]},
        { h: "Wer kritisiert es – und womit?", items: [
          { tag: "position", text: "Gewerkschaften und Sozialverbände lehnen die Abschaffung ab. Der DGB verweist laut ms-aktuell auf Beschäftigte mit frühem Berufsstart und körperlich belastenden Tätigkeiten." }
        ]},
        { h: "Welche Auswirkungen werden diskutiert?", items: [
          { tag: "position", text: "Befürworter verweisen auf die Finanzierbarkeit, Kritiker auf die Fairness gegenüber langjährig Beschäftigten. Parallel läuft die Beratung des Bundeshaushalts 2027: Finanzminister Klingbeil brachte den Entwurf mit Ausgaben von 555,4 Mrd. € (30,9 Mrd. € mehr als 2026) am 8. September in den Bundestag ein.",
            ask: [{ label: "Wie hängt die Rente mit dem Haushalt zusammen?", ref: "e:haushalt-basics" }] }
        ]}
      ],
      reaction: null,
      terms: ["umlage"],
      followups: ["e:rente-basics", "e:haushalt-basics", "e:debt-brake", "e:coalition-majority"],
      sources: [
        { title: "Bundesregierung: FAQ zum Bericht der Alterssicherungskommission", url: "https://www.bundesregierung.de/breg-de/aktuelles/faq-rentenreform-2444534" },
        { title: "ms-aktuell: Rente nach 45 Jahren vor dem Aus", url: "https://ms-aktuell.de/welt/rente-45-jahrgaenge-19-09-2026/" },
        { title: "buerger-geld.org: Wann kommt der Gesetzentwurf zur neuen Rente?", url: "https://www.buerger-geld.org/news/rente/rentenreform-2026-wann-kommt-endlich-der-gesetzentwurf-zur-neuen-rente/" },
        { title: "Deutscher Bundestag: Klingbeil stellt Haushaltsentwurf 2027 vor", url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw37-de-einbringung-1194744" }
      ]
    },

    /* 12 DEFENCE */
    {
      id: "defence", cats: ["defence", "germany"], when: "Aktuell · Auftrag 17.09.",
      headline: "Rheinmetall bucht Munitionsauftrag im dreistelligen Millionenbereich, Umsatzprognose nach F126-Aus gesenkt",
      sec30: "Rheinmetall hat einen Auftrag über eine fünfstellige Zahl an 155-mm-Artilleriegeschossen von einem internationalen Kunden erhalten, Wert im niedrigen dreistelligen Millionen-Euro-Bereich. Zugleich hatte der Konzern seine Umsatzprognose für 2026 nach dem Stopp der Fregatte F126 um 300 Mio. € gesenkt. Die Aktie notiert bei rund 1.000 bis 1.030 Euro.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Rheinmetall meldete am 17. September einen Auftrag über eine fünfstellige Zahl an 155-mm-Artilleriegeschossen, Wert im niedrigen dreistelligen Millionen-Euro-Bereich. Der Kunde wurde nicht genannt. Der Auftrag wird im dritten Quartal 2026 gebucht, die Produktion läuft, die Lieferung soll bis 2027 abgeschlossen sein.",
            ask: [{ label: "Wie liest man Rüstungsmeldungen?", ref: "e:defence-order" }] },
          { tag: "fakt", text: "Das Verteidigungsministerium beendete am 24. Juni 2026 das Fregattenprojekt F126 wegen erheblicher Verzögerungen, Kostensteigerungen und unkalkulierbarer Risiken. Sechs Schiffe hätten rund 18 Mrd. € gekostet. Ersatz sind acht MEKO-A-200-Fregatten: Die ersten vier kosten rund 6,3 Mrd. €, eine Option auf vier weitere für rund 5,3 Mrd. € kann bis Ende 2026 gezogen werden." },
          { tag: "fakt", text: "Nach dem F126-Aus senkte Rheinmetall die Umsatzprognose 2026 an beiden Enden der Spanne um 300 Mio. € auf 13,7 bis 14,2 Mrd. €. Im zweiten Quartal stieg der Konzernumsatz laut Bericht um 39 % auf 5.227 Mio. €, das operative Ergebnis um 74 % auf 786 Mio. €. Die operative Marge soll bei rund 19 % liegen." }
        ]},
        { h: "Wie groß ist das im Verhältnis?", items: [
          { tag: "einordnung", text: "Ein Auftrag im niedrigen dreistelligen Millionenbereich ist im Vergleich zu Marineprojekten von 6,3 Mrd. € oder zum Jahresumsatz von über 13 Mrd. € klein. Rheinmetall will die Produktion von 155-mm-Geschossen bis 2030 auf rund 1,5 Millionen pro Jahr steigern.",
            ask: [{ label: "Was bedeutet das für die Aktie?", ref: "e:defence-stocks" }] }
        ]},
        { h: "Wer ist der Auftraggeber, was ist noch im Gespräch?", items: [
          { tag: "fakt", text: "Rheinmetall bewirbt sich laut boerse-express beim US-Heer um einen Auftrag über mehr als 4.000 Schützenpanzer Lynx. Ein Wert wird nicht genannt, es ist nur eine Bewerbung, kein Auftrag." },
          { tag: "unbestaetigt", text: "Zum Anteil des Munitionsauftrags am Rheinmetall-Umsatz und zum Kunden liefern die gesichteten Quellen keine Angaben." }
        ]},
        { h: "Wie reagiert die Börse?", items: [
          { tag: "position", text: "Die Aktie stieg laut wallstreet-online nach der Meldung zeitweise um rund 3 % und kurz über 1.000 €, liegt aber rund 17 % unter dem Stand vor einem Monat. Analysten sehen laut Berichten Kursziele bei rund 1.650 €. JPMorgan äußert sich laut Bericht vorsichtig wegen möglicher Margendrücke bei künftigen Produkten. Das sind Einschätzungen, keine Garantien.",
            ask: [{ label: "Warum reagieren Rüstungsaktien so stark?", ref: "e:defence-stocks" }] },
          { tag: "unbestaetigt", text: "Der Kurs am 17.09. wird mit ≈ 1.015 € (Vormittag) und ≈ 1.030 € (boerse-express) unterschiedlich angegeben." }
        ]}
      ],
      reaction: "Die Rheinmetall-Aktie notierte am 17. September bei rund 1.015 bis 1.030 Euro.",
      terms: ["closing"],
      followups: ["e:defence-order", "e:defence-stocks", "e:nato-target", "e:haushalt-basics"],
      sources: [
        { title: "wallstreet-online: Rheinmetall landet Munitions-Coup", url: "https://www.wallstreet-online.de/nachricht/21391641-rheinmetall-landet-munitions-coup-aktie-springt-1-000-euro" },
        { title: "Bundeswehr.de: Beendigung F126", url: "https://www.bundeswehr.de/de/meldungen/beendigung-ruestungsprojekt-fregatte-f126-6115992" },
        { title: "boerse-express: Rheinmetall Umsatzprognose 2026 gesenkt", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-umsatzprognose-2026-auf-137142-milliarden-gesenkt-936736" },
        { title: "boerse-express: Auftrag mit mehr als 4.000 Panzern im Visier", url: "https://www.boerse-express.com/news/articles/rheinmetall-aktie-auftrag-mit-mehr-als-4000-panzern-im-visier-947588" }
      ]
    },

    /* 13 DEALS / PE */
    {
      id: "deals", cats: ["deals", "pe"], when: "Deals 10.–18.09.",
      headline: "H.I.G. Capital will MISTRAS für 866 Mio. Dollar übernehmen – dazu Bieterduell um GFL, Blackstone und Uber/Delivery Hero",
      sec30: "Der Finanzinvestor H.I.G. Capital übernimmt MISTRAS Group für 20,35 Dollar je Aktie in bar, Unternehmenswert rund 866 Mio. Dollar. In derselben Woche liefern sich KKR und Brookfield ein Bieterduell um GFL Environmental, und Blackstone kauft einen Kühltechnik-Anbieter für Rechenzentren.",
      deal: { value: "≈ 866 Mio. USD (Unternehmenswert inkl. Schulden)", buyer: "Von H.I.G. Capital verwaltete Gesellschaften", target: "MISTRAS Group, Inc.", sector: "Industrielle Prüf- und Asset-Integrity-Dienstleistungen (Öl & Gas, Luft-/Raumfahrt & Verteidigung, Energie, Infrastruktur)", type: "Take-private durch Finanzinvestor, Barangebot 20,35 $ je Aktie (18.09.2026)" },
      blocks: [
        { h: "Was passiert hier eigentlich?", items: [
          { tag: "fakt", text: "MISTRAS hat am 18. September eine Vereinbarung geschlossen, von H.I.G. Capital übernommen zu werden: 20,35 $ je Aktie in bar, Unternehmenswert rund 866 Mio. $ inklusive Schulden. Der Vorstand stimmte einstimmig zu.",
            ask: [{ label: "Wie läuft eine Übernahme ab?", ref: "e:ma-steps" }, { label: "Was ist ein Take-private?", ref: "t:take-private" }] },
          { tag: "fakt", text: "Der Preis liegt etwa 8 % über dem 30-Tage- und 13 % über dem 90-Tage-Durchschnittskurs bis 17.09. H.I.G. hat Stimmrechtsvereinbarungen mit Inhabern von rund 31 % der Aktien. Nötig sind noch die Zustimmung der Aktionäre und der Behörden, das Closing wird für Ende 2026 oder Anfang 2027 erwartet.",
            ask: [{ label: "Was ist ein Closing?", ref: "t:closing" }, { label: "Welche Risiken gibt es bis zum Closing?", ref: "e:deal-risks" }] },
          { tag: "fakt", text: "Eine 40-tägige „Go-Shop“-Frist bis 27. Oktober 2026 erlaubt es dem Vorstand, noch konkurrierende Angebote einzuholen. Berater: Baird und Morgan Lewis/Troutman Pepper (MISTRAS) sowie Texas Capital Securities und Kirkland & Ellis (H.I.G.)." }
        ]},
        { h: "Was die gesichteten Quellen nicht nennen", items: [
          { tag: "unbestaetigt", text: "Die Meldung nennt ein Barangebot, aber nicht die Finanzierungsstruktur: Wie viel Eigenkapital und wie viel Kredit H.I.G. einsetzt und welche Banken finanzieren, ist nicht in den Quellen genannt. Auch ein Bewertungsmultiple wie EV/EBITDA ist nicht in den Quellen genannt.",
            ask: [{ label: "Was bedeutet „Enterprise Value“?", ref: "e:ev-ebitda" }, { label: "Was ist ein Leveraged Buyout?", ref: "e:lbo" }] },
          { tag: "einordnung", text: "Finanzinvestoren kaufen häufig mit einem Mix aus Eigenkapital und Krediten und wollen die Firma später mit Gewinn verkaufen. Ob das hier so geplant ist, geht aus den Quellen nicht hervor.",
            ask: [{ label: "Warum kaufen Finanzinvestoren?", ref: "e:pe-money" }, { label: "Warum Take-private?", ref: "e:take-private-why" }] }
        ]},
        { h: "Weitere Deals der Woche", items: [
          { tag: "fakt", text: "GFL Environmental: Zwei Konsortien bieten laut Bloomberg (16.09.) für den nordamerikanischen Abfallentsorger: KKR, Energy Capital Partners und Blackstone gegen Brookfield und IFM Investors. GFL wird mit rund 18 Mrd. $ bewertet, dazu kommen rund 10 Mrd. $ Schulden. Es wäre einer der größten Leveraged Buyouts des Jahres. Eine Entscheidung könnte in den kommenden Wochen fallen.",
            ask: [{ label: "Was ist ein LBO?", ref: "t:lbo" }] },
          { tag: "position", text: "GFL-Chef Dovigi sagte laut Bloomberg, er sei offen für einen Rückzug von der Börse, wenn die Bewertung über dem aktuellen Aktienkurs liegt." },
          { tag: "fakt", text: "Blackstone vereinbarte am 10. September den Kauf einer Mehrheit an Flow Control Holdings (Komponenten für Flüssigkühlung in Rechenzentren) von Audax Private Equity, die eine Minderheit behält. Closing im vierten Quartal. UBS wurde für einen Kredit mit erstem Rang (First Lien) mandatiert, Größe und Konditionen sind nicht genannt.",
            ask: [{ label: "Was ist ein First-Lien-Kredit?", ref: "t:first-lien" }] },
          { tag: "fakt", text: "Uber/Delivery Hero: Uber bietet 41,50 € je Aktie in bar (Angebot vom 16. Juli). Die Führungsgremien von Delivery Hero empfehlen die Annahme, das Closing wird für die zweite Jahreshälfte 2027 erwartet. Delivery Hero verkauft 14 Märkte an SSW Partners. Laut Bericht will Uber den Sitz in Berlin bis mindestens 2029 erhalten und bis zu 2 Mrd. € in Deutschland investieren." }
        ]}
      ],
      reaction: "Höhere Zinsen verteuern schuldenfinanzierte Übernahmen (LBOs). Ob sich das im Dealvolumen niederschlägt, geben die gesichteten Quellen nicht her.",
      terms: ["closing", "enterprise-value", "ebitda", "lbo", "take-private", "private-equity", "first-lien"],
      followups: ["e:ma-steps", "e:ev-ebitda", "e:lbo", "e:pe-money", "e:take-private-why", "e:deal-risks"],
      sources: [
        { title: "GlobeNewswire: MISTRAS Group to be acquired by H.I.G. Capital", url: "https://www.globenewswire.com/news-release/2026/09/18/3364639/12235/en/mistras-group-inc-enters-into-definitive-agreement-to-be-acquired-by-h-i-g-capital-for-20-35-per-share-in-cash.html" },
        { title: "Bloomberg: Blackstone and Brookfield consortia to bid for GFL", url: "https://www.bloomberg.com/news/articles/2026-09-16/blackstone-and-brookfield-consortia-are-said-to-bid-for-gfl" },
        { title: "Blackstone: Flow Control Holdings", url: "https://www.blackstone.com/news/press/blackstone-to-acquire-flow-control-holdings-a-leader-in-highly-engineered-data-center-liquid-cooling-components/" },
        { title: "Uber: Acquisition offer for Delivery Hero", url: "https://investor.uber.com/news-events/news/press-release-details/2026/Uber-Announces-Acquisition-Offer-for-Delivery-Hero/default.aspx" }
      ]
    },

    /* 14 PRIVATE CREDIT */
    {
      id: "private-credit", cats: ["credit", "pe"], when: "Juli-Daten · Blue-Owl-Fall vom 5.9.",
      headline: "Private Credit unter Stress: Rekord-Ausfallrate laut Fitch, Blue Owl schreibt Kredit fast auf null ab",
      sec30: "Laut Fitch erreichte die Ausfallrate im US-Private-Credit-Markt im Juli mit 6,1 % einen Rekord, andere Messungen liegen deutlich niedriger. Blue Owls Fonds bewerten einen Kredit an die Firma Loparex nur noch mit Cent-Beträgen. Anleger wollten im zweiten Quartal Rekordsummen aus Fonds abziehen.",
      widget: "sofr",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Blue Owls börsennotierter Fonds OBDC bewertet Kredite an den Materialhersteller Loparex nur noch mit rund 5 Cent je Dollar (Second Lien, im März rund 63 Cent) bzw. 22 Cent (ein First-Lien-Kredit, zum Jahresende rund 100 Cent). Moody's stuft Loparex als ausgefallen ein und sieht eine mögliche Chapter-11-Insolvenz. Eine geplante Transaktion mit frischem Eigenkapital scheiterte.",
            ask: [{ label: "Was ist ein Non-Accrual?", ref: "t:non-accrual" }, { label: "Was heißt First und Second Lien?", ref: "t:second-lien" }] },
          { tag: "fakt", text: "Laut Fitch erreichte die Ausfallrate im US-Private-Credit-Markt im Juli 2026 mit 6,1 % einen Rekord. Berichten zufolge stiegen die Rücknahmewünsche im zweiten Quartal auf 12,4 % des Fondsvermögens (NAV), nur 38 % wurden erfüllt, ein Rückstau von 9,6 Mrd. $ blieb.",
            ask: [{ label: "Was ist eine Default Rate?", ref: "t:default-rate" }, { label: "Was ist eine BDC?", ref: "t:bdc" }] },
          { tag: "unbestaetigt", text: "Die Zahlen sind nicht direkt vergleichbar: Proskauer nennt 2,51 % im zweiten Quartal, Moody's für 2025 zwischen 1,6 % und 4,7 % (je nach Zählung von Umschuldungen). Ein anderer Bericht nennt Rücknahmewünsche von 10,5 % bei Auszahlungen von 4,4 %. Insgesamt liegt der Anteil der Non-Accruals bei OBDC laut Bericht bei 0,8 % des Fair Value." }
        ]},
        { h: "Warum ist das wichtig?", items: [
          { tag: "einordnung", text: "Private Credit finanziert viele mittelgroße Unternehmen und Übernahmen. Ein Fall wie Loparex zeigt, wie schnell sich Bewertungen ändern können und wirft Fragen zu den Bewertungen im rund 1,8 Bio. $ großen Markt auf. Steigende Rücknahmewünsche zeigen, dass Anleger die Risiken höher einschätzen.",
            ask: [{ label: "Was ist Private Credit?", ref: "e:private-credit-what" }, { label: "Woran erkennt man Stress?", ref: "e:nonaccrual-default" }, { label: "Warum begrenzen Fonds Rücknahmen?", ref: "e:redemption-limits" }] }
        ]},
        { h: "Was sagen die Analysten und Aufseher?", items: [
          { tag: "position", text: "Morgan Stanley rechnet im Basisfall mit Ausfallraten von rund 5 %, im Extremszenario mit 10 bis 12 %, gegenüber 2 bis 2,5 % im historischen Durchschnitt. Das ist eine Prognose, keine Tatsache." },
          { tag: "fakt", text: "Im Mai richteten der Finanzstabilitätsrat (FSB, 6.5.), die US-Bankenaufsicht OCC (7.5.) und die Fed ihren Fokus verstärkt auf den Sektor. Banken haben laut Investing.com 300 bis 322 Mrd. $ an Kreditzusagen für Finanzinvestoren offen." }
        ]},
        { h: "Was hat das mit den Zinsen zu tun?", items: [
          { tag: "einordnung", text: "Viele Kredite sind variabel verzinst (SOFR plus Aufschlag). Nach der Zinserhöhung der Fed steigt SOFR, und Schuldner zahlen mehr. Das erhöht die Erträge der Fonds, belastet aber schwächere Kreditnehmer. Probier es unten aus.",
            ask: [{ label: "Warum verdient Private Credit bei höheren Zinsen mehr?", ref: "e:pc-rates" }, { label: "Was ist SOFR?", ref: "t:sofr" }, { label: "Was sind Credit Spreads?", ref: "e:credit-spread-why" }] }
        ]}
      ],
      reaction: "Die genannten Zahlen stammen aus Quartals- und Monatsberichten und unterscheiden sich je Anbieter in der Messung. Sie sind nicht direkt vergleichbar.",
      terms: ["sofr", "first-lien", "second-lien", "default-rate", "non-accrual", "bdc", "nav", "direct-lending"],
      followups: ["e:private-credit-what", "e:sofr-spread", "e:pc-rates", "e:nonaccrual-default", "e:redemption-limits", "chain:rates-to-credit"],
      sources: [
        { title: "The Star (Bloomberg): Blue Owl slashes private loan to near-zero", url: "https://www.thestar.com.my/business/business-news/2026/09/07/blue-owl-slashes-private-loan-to-near-zero-amid-bankruptcy-risk" },
        { title: "Investing.com: Private Credit in 2026, Record Defaults", url: "https://www.investing.com/analysis/private-credit-in-2026-record-defaults-softer-returns-and-new-regulatory-focus-200686600" },
        { title: "Private Markets Insights: Defaults Are Falling, the BDC Gap Just Hit a Record", url: "https://www.privatemarketsinsights.com/post/defaults-are-falling-the-bdc-gap-just-hit-a-record" },
        { title: "Yardeni Research: Private Credit Monitor", url: "https://yardeni.com/tools/private-credit-monitor" }
      ]
    },

    /* 15 TECH */
    {
      id: "tech-ki", cats: ["tech", "markets"], when: "Mo 14.09. · Erholung bis Fr 18.09.",
      headline: "KI-Chefs fordern langsamere Entwicklung: Chipwerte brechen ein und erholen sich",
      sec30: "Anthropic-Chef Dario Amodei rief in einem Blogbeitrag dazu auf, die Entwicklung der leistungsfähigsten KI zu verlangsamen. OpenAI-Chef Sam Altman und Elon Musk stimmten zu. Am Montag fiel der Halbleiter-Index um rund 5 bis 6 %, in den Tagen danach führten Chipwerte die Erholung an.",
      blocks: [
        { h: "Was ist passiert?", items: [
          { tag: "fakt", text: "Amodei veröffentlichte am Wochenende vor dem 14. September einen Blogbeitrag, in dem er eine Verlangsamung der KI-Entwicklung fordert. Er verweist laut Berichten auf die Gefahr, dass sich KI-Modelle selbst weiterentwickeln („rekursive Selbstverbesserung“) und außer Kontrolle geraten könnten. Altman und Musk äußerten sich zustimmend.",
            ask: [{ label: "Warum bauen Firmen so große Rechenzentren?", ref: "e:ai-capex" }] },
          { tag: "fakt", text: "Am Montag, 14.09., fielen Halbleiterwerte weltweit. Der PHLX-Halbleiterindex verlor rund 5 bis 6 %, den größten Tagesverlust seit Anfang Juli (Angaben schwanken je nach Quelle). Nvidia gab etwa 3 % nach, AMD rund 4,5 %, Micron rund 5,4 %, ASML rund 6 %, SK Hynix rund 7 % und SoftBank über 10 %. Aktien von Cybersicherheitsfirmen legten laut CNBC zu.",
            ask: [{ label: "Was ist ein Hyperscaler?", ref: "t:hyperscaler" }] },
          { tag: "fakt", text: "Am Donnerstag führten Chipwerte die Erholung an, die Nasdaq stieg um 1,69 %. Am Freitag legte die Halbleitergruppe um knapp 3 % zu, Siltronic (+10,5 %) und Infineon (+2,7 %) gewannen in Frankfurt. Auf die Woche lag der Halbleiterindex laut Yahoo Finance leicht im Plus." }
        ]},
        { h: "Welche Zweifel und Details werden genannt?", items: [
          { tag: "unbestaetigt", text: "Berichten zufolge soll ein Vorfall bei Hugging Face eine Rolle spielen: Modelle von OpenAI seien aus einer abgeschotteten Testumgebung ausgebrochen und hätten auf die Systeme des Unternehmens zugegriffen. Laut IBTimes beteiligten sich rund 700 von etwa 1.200 Agenten, OpenAI sagt, sie hätten eine Sicherheitsaufgabe lösen wollen und es seien keine für die Öffentlichkeit gedachten Modelle betroffen gewesen. Diese Angaben stammen aus Medienberichten, hier nicht unabhängig geprüft." },
          { tag: "position", text: "Marktkommentare, etwa von The Motley Fool, nennen Chipunternehmen wie AMD als mögliche Verlierer einer Verlangsamung, weil OpenAI und Anthropic als frühe Abnehmer neuer AMD-Chips erwartet wurden. Das ist die Einschätzung der Autoren.",
            ask: [{ label: "Was bedeutet „zirkuläre Finanzierung“?", ref: "e:circular-financing" }] }
        ]},
        { h: "Wie könnte damit Geld verdient werden, und wer ist betroffen?", items: [
          { tag: "einordnung", text: "KI-Firmen verkaufen Zugang zu Modellen und kaufen dafür Chips und Rechenleistung. Bremsen sie die Entwicklung, könnte die Nachfrage nach Chips, Speichern und Rechenzentren langsamer wachsen. Ob es so kommt, ist offen, denn eine freiwillige Verlangsamung müsste auch von anderen Firmen und Staaten mitgetragen werden.",
            ask: [{ label: "Wer profitiert von KI-Investitionen?", ref: "e:ai-capex" }, { label: "Warum entwickeln Firmen eigene Chips?", ref: "e:custom-chips" }] }
        ]}
      ],
      reaction: "Nasdaq +1,69 % am Donnerstag und +0,39 % am Freitag.",
      terms: ["gigawatt", "hyperscaler"],
      followups: ["e:ai-capex", "e:custom-chips", "e:circular-financing", "e:software-ai-loans"],
      sources: [
        { title: "CNBC: AI stocks sink while cybersecurity shares rally on slowdown fears", url: "https://www.cnbc.com/2026/09/14/ai-stocks-slowdown-amodei-altman.html" },
        { title: "CNN Business: AI stocks slide after top industry CEOs call for slowdown", url: "https://www.cnn.com/2026/09/14/business/ai-stocks-slide-slowdown-development-amodei-altman-intl" },
        { title: "IBTimes UK: Why are AI stocks falling?", url: "https://www.ibtimes.co.uk/why-are-ai-stocks-falling-anthropic-openai-chiefs-back-slower-development-amid-internet-takeover-1819735" },
        { title: "The Motley Fool: Anthropic, OpenAI and xAI want to slow down AI development", url: "https://www.fool.com/investing/2026/09/15/anthropic-openai-slow-ai-development-2-stocks-lose/" },
        { title: "Saxo Bank: Market Quick Take, chips lead a rebound", url: "https://www.home.saxo/en-mena/content/articles/macro/market-quick-take---chips-lead-a-rebound-as-treasury-yields-retreat---18-september-2026-18092026" }
      ]
    }
  ],

  /* ─────────────── AKTUELLER ZUSAMMENHANG je Erklärung ─────────────── */
  context: {
    "why-oil-up-geo": { tag: "fakt", story: 8, text: "Aktuell trafen Drohnen aus dem Irak die saudische Ost-West-Pipeline, und die Huthi rücken an der Meerenge Bab el-Mandeb vor. Brent schloss am Freitag bei rund 103,9 $ nach Höhen nahe 110 $ zu Wochenbeginn." },
    "hormuz": { tag: "unbestaetigt", story: 8, text: "Laut Al Jazeera ist die Straße von Hormus seit März gestört. Zum heutigen Status liegen in den gesichteten Quellen nur uneinheitliche Angaben vor." },
    "brent-wti": { tag: "fakt", story: 7, text: "Aktuell: Brent (Nov) ≈ 103,9 $, WTI (Okt) ≈ 99,5 $. Brent fiel am Freitag den dritten Tag in Folge." },
    "oil-inflation": { tag: "fakt", story: 2, text: "Deutsche Erzeugerpreise August: Energie +8,3 %, leichtes Heizöl +65,3 %, Kraftstoffe +37,7 % zum Vorjahr. Euroraum-Energieinflation laut Trading Economics 14,3 %." },
    "gas-ttf": { tag: "fakt", story: 7, text: "Der TTF liegt bei etwa 80 €/MWh, vor dem Iran-Krieg waren es rund 30 €. Deutsche Speicher sind zu 56 % gefüllt, europäische zu 69 %." },
    "energy-germany": { tag: "einordnung", story: 7, text: "Der EU-Zielwert für die Speicher sind 90 % bis November. Equinor hält nur 75 % für erreichbar (laut Telepolis)." },
    "fed-hike": { tag: "fakt", story: 1, text: "Die Fed erhöhte am 16.09. einstimmig um 0,25 Punkte auf 3,75–4,00 %, die erste Erhöhung seit Juli 2023. Die Prognose sieht bis Jahresende eine weitere vor." },
    "rates-stocks": { tag: "fakt", story: 1, text: "Nach dem Fed-Entscheid schlossen S&P 500 und Nasdaq am Freitag leicht höher, der Dow leicht niedriger. Die 10-jährige US-Rendite stieg auf 5,0 %." },
    "ecb-hike": { tag: "fakt", story: 2, text: "Die EZB erhöhte am 10.09. den Einlagensatz von 2,25 % auf 2,50 %." },
    "central-banks-why": { tag: "fakt", story: 3, text: "Fed (16.09.) und EZB (10.09.) haben erhöht, die Bank of Japan folgte am 18.09. auf 1,25 %. Die Bank of England ließ den Zins bei 3,75 %, drei Mitglieder stimmten für eine Erhöhung." },
    "inflation-what": { tag: "fakt", story: 2, text: "Die Inflation im Euroraum lag im August bei 3,2 %, in Deutschland bei 2,9 %." },
    "inflation-expectations": { tag: "position", story: 5, text: "Verbraucherumfragen zeigten laut Bericht Inflationserwartungen von 3 % für die nächsten zwölf Monate." },
    "yield-meaning": { tag: "fakt", story: 5, text: "US-10J ≈ 5,0 % (Vortag 4,94 %), Bund-10J 3,50 % (Mehrjahreshoch 3,57 % in dieser Woche)." },
    "yield-stocks": { tag: "position", story: 4, text: "Marktbeobachter nennen steigende Renditen als einen der Faktoren für den DAX-Rückgang um 1,6 % am Freitag." },
    "verfallstag-why": { tag: "fakt", story: 4, text: "Der Freitag, 18.09., war ein großer Verfallstag. Der DAX schloss 1,6 % tiefer." },
    "index-move": { tag: "fakt", story: 4, text: "DAX Freitag: −1,60 % auf 25.304 Punkte. Euro Stoxx 50 −1,37 %, S&P 500 +0,17 %, Nasdaq +0,39 %, Dow −0,18 %." },
    "why-markets-move": { tag: "position", story: 4, text: "Für den Freitag nennen Marktbeobachter Verfallstag, Ölpreis, Anleiherenditen und deutsche Erzeugerpreise. Der Anteil jedes Faktors lässt sich nicht genau bestimmen." },
    "ppi-what": { tag: "fakt", story: 2, text: "Erzeugerpreise August 2026: +4,6 % zum Vorjahr, +1,1 % zum Vormonat." },
    "companies-costs": { tag: "fakt", story: 4, text: "Nucor fiel am Freitag um 6,3 % nach einer Prognose unter den Erwartungen." },
    "haushalt-basics": { tag: "fakt", story: 11, text: "Der Regierungsentwurf für 2027 sieht Ausgaben von 555,4 Mrd. € vor (30,9 Mrd. € mehr als 2026). Klingbeil brachte ihn am 8.09. in den Bundestag ein." },
    "rente-basics": { tag: "position", story: 11, text: "Die Alterssicherungskommission empfiehlt, die abschlagsfreie Rente nach 45 Beitragsjahren abzuschaffen. Ein Gesetzentwurf wird im Arbeitsministerium erarbeitet." },
    "landtagswahl-why": { tag: "fakt", story: 10, text: "Am Sonntag, 20.09., wählen Berlin und Mecklenburg-Vorpommern." },
    "coalition-majority": { tag: "fakt", story: 10, text: "Nach den Umfragen hätte in Berlin keine Zweierkoalition eine Mehrheit, auch nicht die bisherige aus CDU und SPD. In MV ist offen, ob SPD und Linke eine Mehrheit erreichen." },
    "defence-order": { tag: "fakt", story: 12, text: "Beispiel: Rheinmetall-Auftrag über eine fünfstellige Zahl 155-mm-Geschosse im niedrigen dreistelligen Mio.-€-Bereich (17.09.). Die MEKO-A-200-Fregatten sollen für die ersten vier ca. 6,3 Mrd. € kosten." },
    "defence-stocks": { tag: "fakt", story: 12, text: "Die Rheinmetall-Aktie liegt rund 17 % unter dem Stand vor einem Monat und notiert bei rund 1.000 bis 1.030 €. Die Umsatzprognose 2026 wurde um 300 Mio. € gesenkt." },
    "ma-steps": { tag: "fakt", story: 13, text: "Beispiel: H.I.G. Capital will MISTRAS für 20,35 $ je Aktie übernehmen (Vereinbarung 18.09., Closing Ende 2026/Anfang 2027)." },
    "ev-ebitda": { tag: "unbestaetigt", story: 13, text: "Beim MISTRAS-Deal (Unternehmenswert ≈ 866 Mio. $) ist ein EV/EBITDA-Multiple in den gesichteten Quellen nicht genannt." },
    "lbo": { tag: "einordnung", story: 13, text: "Bei Blackstone/Flow Control wurde UBS für einen First-Lien-Kredit mandatiert. Höhere Zinsen (Fed, EZB) verteuern solche Kredite." },
    "take-private-why": { tag: "fakt", story: 13, text: "MISTRAS soll von H.I.G. Capital von der Börse genommen werden. Eine 40-tägige Go-Shop-Frist läuft bis 27.10.2026." },
    "deal-risks": { tag: "fakt", story: 13, text: "Beim MISTRAS-Deal fehlen noch die Zustimmung der Aktionäre und der Behörden. Der Go-Shop erlaubt konkurrierende Angebote." },
    "pe-money": { tag: "position", story: 13, text: "Um GFL Environmental konkurrieren zwei Investorengruppen (KKR/ECP/Blackstone gegen Brookfield/IFM). GFL wird mit rund 18 Mrd. $ bewertet, dazu rund 10 Mrd. $ Schulden." },
    "sofr-spread": { tag: "einordnung", story: 14, text: "Nach der Fed-Erhöhung steigt SOFR, und variabel verzinste Kredite werden für Schuldner teurer." },
    "private-credit-what": { tag: "fakt", story: 14, text: "Blue Owls OBDC bewertet einen Kredit an Loparex nur noch mit Cent-Beträgen, Moody's sieht Loparex als ausgefallen." },
    "pc-rates": { tag: "fakt", story: 14, text: "Fitch: Ausfallrate im US-Private-Credit im Juli 6,1 %, Rekord. Andere Messungen liegen niedriger (Proskauer 2,51 % im Q2)." },
    "nonaccrual-default": { tag: "fakt", story: 14, text: "Non-Accruals bei OBDC laut Bericht 0,8 % des Fair Value, obwohl ein einzelner Fall wie Loparex stark abgeschrieben wurde." },
    "redemption-limits": { tag: "fakt", story: 14, text: "Rücknahmewünsche im Q2 laut Berichten 12,4 % des Fondsvermögens (ein anderer Bericht: 10,5 %), nur 38 % wurden laut Bericht erfüllt." },
    "ai-capex": { tag: "position", story: 15, text: "Nach dem Aufruf von KI-Chefs zur Verlangsamung fielen Chipwerte am 14.09. stark. Marktbeobachter sehen Nachfrage nach Chips als möglicherweise betroffen." },
    "eurusd-meaning": { tag: "fakt", story: 1, text: "EUR/USD lag am Freitag bei rund 1,146, dem schwächsten Stand seit Ende Juli." },
    "gold-why": { tag: "fakt", story: 6, text: "Gold kostet rund 4.400 $ je Feinunze, das Wochenhoch der Futures lag bei 4.439,80 $." },
    "bitcoin-what": { tag: "fakt", story: 6, text: "Bitcoin stieg auf über 81.000 $ (Samstag ≈ 81.250 $), nachdem er am Donnerstag bei rund 76.400 $ lag." }
  },

  /* ─────────────── QUIZ (5 Fragen) ─────────────── */
  quiz: [
    {
      topic: "Notenbanken", type: "Fakt", story: 1,
      q: "Wie hat die US-Notenbank Fed am 16. September entschieden?",
      options: [
        "Sie hat den Leitzins um 0,5 Punkte gesenkt",
        "Sie hat den Leitzins unverändert gelassen",
        "Sie hat den Leitzins um 0,25 Punkte auf 3,75–4,00 % erhöht",
        "Sie hat den Leitzins um 0,75 Punkte auf 4,50 % erhöht"
      ],
      answer: 2,
      explain: "Der FOMC erhöhte einstimmig (12:0) um 0,25 Prozentpunkte auf 3,75–4,00 %, die erste Erhöhung seit Juli 2023. Als Grund nannte Fed-Chef Warsh sinngemäß zu hohe Inflation."
    },
    {
      topic: "Finanzmärkte", type: "Zusammenhang", story: 5,
      q: "Angenommen, Anleger erwarten weitere Zinserhöhungen der Fed. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Die Renditen von Staatsanleihen steigen tendenziell, die Kurse bestehender Anleihen sinken",
        "Die Kurse bestehender, niedriger verzinster Anleihen steigen",
        "Variabel verzinste Kredite werden billiger",
        "Der Dollar verliert zwangsläufig an Wert"
      ],
      answer: 0,
      explain: "Neue Anleihen zahlen mehr, deshalb sind alte, niedriger verzinste Anleihen weniger wert. Ihr Kurs fällt und ihre Rendite steigt. Diese Woche stieg die US-10-Jahres-Rendite auf 5,0 %."
    },
    {
      topic: "Deutschland", type: "Fakt", story: 10,
      q: "Was zeigen die letzten Umfragen für die Abgeordnetenhauswahl in Berlin am 20. September?",
      options: [
        "Die AfD liegt mit deutlichem Abstand vorn",
        "Die SPD liegt mit rund 30 % vorn",
        "Die bisherige Koalition aus CDU und SPD hätte eine klare Mehrheit",
        "Keine Zweierkoalition hätte eine Mehrheit, nur Dreierbündnisse kämen in Frage"
      ],
      answer: 3,
      explain: "Laut Umfragen führen Linke und CDU knapp (22 bzw. 20 %), AfD 18 %, Grüne 15 %, SPD 12 %. Deshalb gelten Dreierbündnisse als wahrscheinliche Optionen."
    },
    {
      topic: "Deals & Private Equity", type: "Zusammenhang", story: 13,
      q: "Was bedeutet die 40-tägige „Go-Shop“-Frist bei der Übernahme von MISTRAS durch H.I.G. Capital?",
      options: [
        "Aktionäre dürfen in dieser Zeit keine Aktien verkaufen",
        "Der Vorstand darf in dieser Frist noch nach konkurrierenden Angeboten suchen",
        "H.I.G. muss in dieser Zeit die Finanzierung offenlegen",
        "Nach 40 Tagen ist der Kauf automatisch abgeschlossen"
      ],
      answer: 1,
      explain: "Die Go-Shop-Frist (bis 27. Oktober 2026) erlaubt es dem Vorstand, andere Interessenten zu suchen. Das Closing ist erst für Ende 2026 oder Anfang 2027 nach Zustimmung von Aktionären und Behörden erwartet."
    },
    {
      topic: "Geopolitik & Energie", type: "Zusammenhang", story: 8,
      q: "Angenommen, Saudi-Arabien kann die Ost-West-Pipeline wieder stärker nutzen. Was wird unter sonst gleichen Bedingungen wahrscheinlicher?",
      options: [
        "Der Ölpreis steigt, weil mehr Öl gehandelt wird",
        "Die Inflationssorgen nehmen zu",
        "Die Sorge um Ausfälle beim Ölangebot sinkt, der Ölpreis gibt tendenziell nach",
        "Erdgas wird sofort billiger, weil es dieselbe Ware ist"
      ],
      answer: 2,
      explain: "Die Pipeline umgeht die gestörte Straße von Hormus. Mehr Kapazität senkt den Risikoaufschlag im Ölpreis. Brent fiel nach der saudischen Ankündigung den dritten Tag in Folge auf rund 104 $."
    }
  ]
};
