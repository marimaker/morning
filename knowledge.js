// MORNING – dauerhafte Wissensbasis (ändert sich nicht täglich).
// Fachbegriffe, Erklärungen und Kausalketten. Tagesaktuelles steht in edition-data.js.
// Verweise: "e:ID" = Erklärung, "t:ID" = Fachbegriff, "n:ID" = Zahl, "chain:ID" = Kette.
window.KNOWLEDGE = {

  sections: [
    { id: "markets",  label: "Markets",        de: "Finanzmärkte",         blurb: "Indizes, Anleihen, Währungen, Rohstoffe, Krypto" },
    { id: "economy",  label: "Economy",        de: "Wirtschaft",           blurb: "Inflation, Zinsen, Zentralbanken, Konjunktur" },
    { id: "germany",  label: "Germany",        de: "Deutschland",          blurb: "Bundesregierung, Haushalt, Rente, Wahlen" },
    { id: "world",    label: "World",          de: "International",        blurb: "USA, EU, China, Russland/Ukraine, Nahost" },
    { id: "geo",      label: "Geopolitics",    de: "Geopolitik",           blurb: "Wenn Politik Preise und Märkte bewegt" },
    { id: "defence",  label: "Defence",        de: "Defence",              blurb: "Budgets, Aufträge, Rüstungsunternehmen" },
    { id: "deals",    label: "Deals",          de: "Deals / M&A",          blurb: "Übernahmen, Fusionen, Börsengänge" },
    { id: "pe",       label: "Private Equity", de: "Private Equity",       blurb: "Buyouts, Exits, Fonds" },
    { id: "credit",   label: "Private Credit", de: "Private Credit",       blurb: "Direct Lending, Zinsen, Ausfälle" },
    { id: "tech",     label: "Technology",     de: "Technologie",          blurb: "KI, Chips, Rechenzentren, Big Tech" },
    { id: "energy",   label: "Energy",         de: "Energie",              blurb: "Öl, Gas, Strom, LNG" }
  ],

  /* ───────────────────────────── FACHBEGRIFFE ───────────────────────────── */
  terms: {
    "ebitda": {
      name: "EBITDA", aliases: ["EBITDA"],
      short: "Eine Kennzahl, die grob zeigt, wie profitabel das operative Geschäft eines Unternehmens ist, bevor Zinsen, Steuern und Abschreibungen abgezogen werden.",
      example: "Umsatz 100 Mio. €, operative Kosten 75 Mio. € → vereinfacht EBITDA = 25 Mio. €.",
      why: "Bei Übernahmen wird der Kaufpreis oft als Vielfaches des EBITDA ausgedrückt. Kreditgeber messen daran, wie viele Schulden eine Firma tragen kann.",
      next: ["e:ev-ebitda", "t:enterprise-value", "e:lbo"]
    },
    "enterprise-value": {
      name: "Enterprise Value", aliases: ["Enterprise Value", "Unternehmenswert"],
      short: "Der Preis für das gesamte Geschäft eines Unternehmens: Marktwert des Eigenkapitals plus Nettoschulden. Er ist unabhängig davon, wie die Firma finanziert ist.",
      example: "Eigenkapital 800 Mio. €, Schulden 300 Mio. €, Kasse 100 Mio. € → EV = 800 + 300 − 100 = 1.000 Mio. €.",
      why: "Nur über den EV lassen sich Firmen mit unterschiedlich hohen Schulden fair vergleichen.",
      next: ["t:ebitda", "e:ev-ebitda", "e:ma-steps"]
    },
    "sofr": {
      name: "SOFR", aliases: ["SOFR"],
      short: "Der wichtigste US-Referenzzinssatz für Dollar-Kredite. Er wird aus Übernachtgeschäften berechnet, die mit US-Staatsanleihen besichert sind.",
      example: "SOFR 4 % + Aufschlag (Spread) 5 % → Kreditzins ungefähr 9 %.",
      why: "Viele Private-Credit-Kredite haben einen variablen Zins der Form „SOFR + X“. Steigt SOFR, steigt der Zins des Kredits.",
      next: ["e:sofr-spread", "t:credit-spread", "e:pc-rates"]
    },
    "credit-spread": {
      name: "Credit Spread", aliases: ["Credit Spread", "Credit Spreads", "Spread", "Risikoaufschlag"],
      short: "Der Risikoaufschlag, den ein Kreditnehmer gegenüber einem (fast) risikofreien Zins zahlt. Je riskanter der Schuldner, desto höher.",
      example: "Staatsanleihe 4 %, Firmenanleihe 6,5 % → Spread 2,5 Prozentpunkte (= 250 Basispunkte).",
      why: "Steigende Spreads zeigen, dass Anleger mehr Ausfallrisiko sehen oder mehr Prämie verlangen.",
      next: ["e:credit-spread-why", "t:basispunkt", "e:nonaccrual-default"]
    },
    "basispunkt": {
      name: "Basispunkt", aliases: ["Basispunkt", "Basispunkte", "Bp", "bps"],
      short: "Ein hundertstel Prozentpunkt. 25 Basispunkte sind 0,25 Prozentpunkte.",
      example: "Steigt ein Zins von 3,75 % auf 4,00 %, ist das eine Erhöhung um 25 Basispunkte.",
      why: "Zentralbanken und Märkte sprechen in Basispunkten, weil kleine Zinsänderungen große Wirkung haben.",
      next: ["t:leitzins", "t:rendite"]
    },
    "leitzins": {
      name: "Leitzins", aliases: ["Leitzins", "Leitzinsen", "Fed-Zins", "Einlagensatz"],
      short: "Der Zins, den die Zentralbank festlegt. Er steuert, wie teuer Geld in der ganzen Wirtschaft ist: für Banken, Firmen, Staaten und Verbraucher.",
      example: "Erhöht die Zentralbank den Leitzins, werden Kredite und Hypotheken meist teurer, und Sparzinsen steigen oft.",
      why: "Er ist das wichtigste Werkzeug der Geldpolitik im Kampf gegen Inflation.",
      next: ["e:central-banks-why", "e:fed-hike", "e:ecb-hike"]
    },
    "inflation": {
      name: "Inflation", aliases: ["Inflation", "Inflationsrate", "Inflationsdruck"],
      short: "Der Anstieg des allgemeinen Preisniveaus. Für dasselbe Geld bekommt man weniger.",
      example: "Bei 3 % Inflation kostet ein Warenkorb, der heute 100 € kostet, in einem Jahr im Schnitt 103 €.",
      why: "Sie entscheidet über Kaufkraft und über die Politik der Zentralbanken.",
      next: ["e:inflation-what", "e:oil-inflation", "e:central-banks-why"]
    },
    "kerninflation": {
      name: "Kerninflation", aliases: ["Kerninflation"],
      short: "Die Inflation ohne besonders schwankende Preise wie Energie und Lebensmittel. Sie zeigt den breiteren, dauerhafteren Preistrend.",
      example: "Steigt nur der Ölpreis, kann die Gesamtinflation hoch sein, während die Kerninflation ruhig bleibt.",
      why: "Zentralbanken beobachten sie, um zu erkennen, ob sich Preisdruck in der Breite festsetzt.",
      next: ["e:inflation-what", "e:central-banks-why"]
    },
    "erzeugerpreise": {
      name: "Erzeugerpreise", aliases: ["Erzeugerpreise", "Erzeugerpreisen"],
      short: "Die Preise, die Hersteller beim Verkauf ihrer Produkte verlangen, bevor der Handel Aufschläge macht.",
      example: "Steigen die Preise für Heizöl und Metalle, wird die Produktion teurer. Das kann später Verbraucherpreise erhöhen.",
      why: "Sie gelten als Frühindikator für Inflation, gleichen den Verbraucherpreisen aber nie eins zu eins.",
      next: ["e:ppi-what", "e:inflation-what"]
    },
    "rendite": {
      name: "Rendite (Yield)", aliases: ["Rendite", "Renditen", "Yield", "Staatsanleihe", "Staatsanleihen"],
      short: "Die effektive Verzinsung einer Anleihe zum aktuellen Kurs. Fällt der Kurs, steigt die Rendite, und umgekehrt.",
      example: "Eine Anleihe zahlt 4 € pro Jahr auf 100 € Nennwert. Fällt ihr Kurs auf 80 €, beträgt die laufende Rendite 4/80 = 5 %.",
      why: "Die Rendite zehnjähriger Staatsanleihen ist Richtwert für viele Zinsen: Hypotheken, Firmenkredite, Bewertungen von Aktien.",
      next: ["e:yield-meaning", "e:yield-stocks", "t:basispunkt"]
    },
    "dot-plot": {
      name: "Dot Plot", aliases: ["Dot Plot"],
      short: "Eine Grafik der US-Notenbank, in der jedes Mitglied einen Punkt für seinen erwarteten Leitzins setzt. Sie zeigt, wohin die Zinsen nach Ansicht der Mitglieder gehen.",
      example: "Zeigt der Durchschnitt der Punkte eine weitere Erhöhung, rechnen die Fed-Mitglieder damit.",
      why: "Märkte lesen daraus Hinweise auf künftige Zinsschritte. Die Punkte sind aber Erwartungen, keine Zusagen.",
      next: ["e:fed-hike"]
    },
    "verfallstag": {
      name: "Großer Verfallstag", aliases: ["Verfallstag", "Hexensabbat", "Triple Witching"],
      short: "Der Tag, an dem Futures und Optionen auf Aktienindizes auslaufen. Weil viele Positionen gleichzeitig geschlossen werden, schwanken die Kurse oft stärker.",
      example: "Ein Investor sichert sein Depot mit Optionen ab. Am Verfallstag muss er die Position schließen oder erneuern.",
      why: "Starke Kursbewegungen an diesem Tag sagen deshalb nicht automatisch etwas über die Wirtschaftslage.",
      next: ["e:verfallstag-why", "e:why-markets-move"]
    },
    "brent": {
      name: "Brent", aliases: ["Brent", "Brent-Öl", "Brent Oil", "Nordseeöl"],
      short: "Die wichtigste internationale Rohöl-Referenzsorte, gefördert in der Nordsee. Die meisten Ölpreise weltweit orientieren sich daran.",
      example: "Wenn es heißt „Öl kostet 105 Dollar“, ist meist der Preis für ein Fass (159 Liter) Brent gemeint.",
      why: "Brent bestimmt mit, was Benzin, Diesel und Heizöl kosten.",
      next: ["e:brent-wti", "t:wti", "t:oil-future"]
    },
    "wti": {
      name: "WTI", aliases: ["WTI", "West Texas Intermediate"],
      short: "West Texas Intermediate, die wichtigste amerikanische Rohöl-Referenzsorte.",
      example: "WTI und Brent bewegen sich meist ähnlich, WTI ist häufig etwas günstiger.",
      why: "Sie ist der Preisanker für den US-Ölmarkt.",
      next: ["e:brent-wti"]
    },
    "oil-future": {
      name: "Öl-Future", aliases: ["Öl-Future", "Future", "Futures", "Terminkontrakt"],
      short: "Ein Vertrag, Öl zu einem festgelegten Preis an einem späteren Termin zu kaufen oder zu verkaufen. Der „Ölpreis“ in den Nachrichten ist meist der Preis des nächstfälligen Futures.",
      example: "Ein Airline-Konzern kauft Öl-Futures, um sich gegen steigende Kerosinpreise abzusichern.",
      why: "An den Futures spiegeln sich Erwartungen über Angebot und Nachfrage sofort wider.",
      next: ["e:oil-future", "e:brent-wti"]
    },
    "opec-plus": {
      name: "OPEC+", aliases: ["OPEC+", "OPEC"],
      short: "Ein Zusammenschluss großer Ölförderländer (OPEC plus Partner wie Russland), der Fördermengen abstimmt, um den Preis zu beeinflussen.",
      example: "Kürzt OPEC+ die Förderung, wird Öl knapper, und der Preis steigt tendenziell.",
      why: "Ihre Entscheidungen gehören zu den wichtigsten Preistreibern am Ölmarkt.",
      next: ["e:why-oil-up-geo", "e:brent-wti"]
    },
    "lng": {
      name: "LNG", aliases: ["LNG", "Flüssigerdgas"],
      short: "Verflüssigtes Erdgas. Es wird auf minus 162 Grad gekühlt und per Schiff transportiert, ist also nicht an Pipelines gebunden.",
      example: "Europa importiert LNG-Schiffsladungen aus Ländern wie den USA und Katar.",
      why: "Seit dem Wegfall russischer Pipeline-Lieferungen ist LNG für Europas Gasversorgung wichtig.",
      next: ["e:gas-ttf", "t:ttf"]
    },
    "ttf": {
      name: "TTF", aliases: ["TTF"],
      short: "Der wichtigste europäische Großhandelspreis für Erdgas (Title Transfer Facility), angegeben in Euro pro Megawattstunde.",
      example: "Bei 84 € pro MWh kostet die Energie für 1.000 kWh im Großhandel 84 €.",
      why: "Der TTF wirkt auf Strom- und Gastarife, auf Industriekosten und auf Preise energieintensiver Produkte.",
      next: ["e:gas-ttf", "e:energy-germany"]
    },
    "schuldenbremse": {
      name: "Schuldenbremse", aliases: ["Schuldenbremse", "schwarze Null"],
      short: "Eine Regel im Grundgesetz, die die jährliche Neuverschuldung des Bundes begrenzt. Für bestimmte Ausgaben gelten Ausnahmen.",
      example: "Für Verteidigungsausgaben oberhalb einer Grenze von 1 % des BIP gilt seit der Reform 2025 eine Ausnahme.",
      why: "Sie entscheidet, wie viel Schulden der Staat zusätzlich aufnehmen darf, und ist deshalb ein Dauerstreitthema.",
      next: ["e:debt-brake", "e:haushalt-basics"]
    },
    "closing": {
      name: "Closing", aliases: ["Closing", "Signing"],
      short: "Der Abschluss einer Übernahme: Erst dann wechselt das Unternehmen wirklich den Eigentümer und wird bezahlt. Das „Signing“ (Vertragsunterzeichnung) liegt oft Monate früher.",
      example: "Ein Deal wird im September unterschrieben, das Closing folgt nach Genehmigung im ersten Quartal des nächsten Jahres.",
      why: "Zwischen Signing und Closing kann der Deal noch scheitern, etwa an Behörden oder Aktionären.",
      next: ["e:deal-risks", "e:ma-steps"]
    },
    "lbo": {
      name: "Leveraged Buyout (LBO)", aliases: ["Leveraged Buyout", "LBO", "Buyout", "Buyouts"],
      short: "Ein Unternehmenskauf, bei dem ein erheblicher Teil des Kaufpreises mit Fremdkapital (Krediten) finanziert wird. Die Schulden liegen anschließend beim gekauften Unternehmen.",
      example: "Ein Fonds kauft eine Firma für 1.000 Mio. €: 400 Mio. € eigenes Geld, 600 Mio. € Kredit. Der Kredit wird aus dem Cashflow der Firma bedient.",
      why: "Mit wenig Eigenkapital lassen sich große Firmen kaufen. Steigen die Zinsen, wird das aber teurer und riskanter.",
      next: ["e:lbo", "e:pe-money", "e:pc-rates"]
    },
    "take-private": {
      name: "Take-private", aliases: ["Take-private", "Take-Private", "Going Private"],
      short: "Investoren kaufen alle Aktien eines börsennotierten Unternehmens und nehmen es von der Börse. Danach gehört es nur noch den Käufern.",
      example: "Ein Finanzinvestor bietet 30 % über dem Börsenkurs. Stimmen die Aktionäre zu, wird die Aktie eingestellt.",
      why: "Ohne Börse gibt es weniger Quartalsdruck, aber auch weniger öffentliche Informationen.",
      next: ["e:take-private-why", "t:private-equity"]
    },
    "private-equity": {
      name: "Private Equity", aliases: ["Private Equity", "PE", "Finanzinvestor", "Finanzinvestoren"],
      short: "Fonds sammeln Geld von Großanlegern, kaufen damit Unternehmen, entwickeln sie und verkaufen sie nach einigen Jahren, idealerweise mit Gewinn.",
      example: "Kauf für 1.000 Mio. €, fünf Jahre später Verkauf für 1.600 Mio. €. Der Wertzuwachs geht nach Abzug der Gebühren an Fonds und Investoren.",
      why: "PE-Fonds sind große Käufer am Übernahmemarkt und Kreditnehmer am Private-Credit-Markt.",
      next: ["e:pe-money", "e:lbo"]
    },
    "spin-off": {
      name: "Spin-off", aliases: ["Spin-off", "Spin-offs", "Abspaltung"],
      short: "Ein Konzern spaltet einen Geschäftsbereich ab und bringt ihn als eigenes Unternehmen an die Börse. Die Aktionäre erhalten Aktien der neuen Firma.",
      example: "Ein Mischkonzern spaltet seine Medizinsparte ab, weil sie allein besser bewertet würde.",
      why: "Es macht Firmen fokussierter und Bewertungen oft klarer.",
      next: ["e:ma-steps"]
    },
    "ipo": {
      name: "IPO", aliases: ["IPO", "Börsengang", "Börsengänge"],
      short: "Initial Public Offering, der erstmalige Börsengang eines Unternehmens. Es verkauft Aktien an die Öffentlichkeit.",
      example: "Ein Start-up gibt 10 % seiner Aktien aus und erhält dafür frisches Kapital.",
      why: "Ein IPO ist für Gründer und Fonds ein wichtiger Ausstiegsweg (Exit).",
      next: ["t:private-equity", "e:ma-steps"]
    },
    "first-lien": {
      name: "First Lien", aliases: ["First Lien", "Senior Secured"],
      short: "Ein Kredit, der bei einer Pleite zuerst aus dem Verkaufserlös der Sicherheiten bedient wird. Er ist der sicherste Teil der Verschuldung.",
      example: "Bei einer Pleite und 60 Mio. € Erlös werden zuerst die First-Lien-Kreditgeber bezahlt, dann die anderen.",
      why: "Höhere Sicherheit bedeutet in der Regel niedrigere Zinsen.",
      next: ["t:second-lien", "t:unitranche"]
    },
    "second-lien": {
      name: "Second Lien", aliases: ["Second Lien"],
      short: "Ein Kredit, der erst nach den First-Lien-Krediten bedient wird. Er ist riskanter und zahlt deshalb mehr Zinsen.",
      example: "First Lien: SOFR + 5 %. Second Lien: SOFR + 8 %.",
      why: "In einer Krise verlieren Second-Lien-Geber häufig zuerst.",
      next: ["t:first-lien", "t:mezzanine"]
    },
    "mezzanine": {
      name: "Mezzanine", aliases: ["Mezzanine"],
      short: "Nachrangiges, zwischen Kredit und Eigenkapital liegendes Kapital. Es zahlt hohe Zinsen, weil es im Ernstfall weit hinten steht.",
      example: "Ein Mezzanine-Darlehen zahlt 12 % und wird nach allen anderen Schulden zurückgezahlt.",
      why: "Es schließt Finanzierungslücken bei Übernahmen.",
      next: ["t:second-lien", "t:pik"]
    },
    "pik": {
      name: "PIK", aliases: ["PIK", "Payment in Kind"],
      short: "Payment-in-Kind: Die Zinsen werden nicht bar gezahlt, sondern dem Kreditbetrag zugeschlagen. Die Schuld wächst also.",
      example: "Kredit über 100 Mio. € mit 10 % PIK: nach einem Jahr schuldet die Firma 110 Mio. €, ohne bar gezahlt zu haben.",
      why: "PIK schont die Liquidität, kann aber ein Warnsignal sein, wenn ein Schuldner Zinsen nicht mehr bar zahlen kann.",
      next: ["t:non-accrual", "e:nonaccrual-default"]
    },
    "unitranche": {
      name: "Unitranche", aliases: ["Unitranche"],
      short: "Ein einziger Kredit, der First-Lien- und Second-Lien-Teil in einem Vertrag zusammenfasst. Der Zins liegt dazwischen.",
      example: "Statt zwei Kreditgebern gibt es einen Direct Lender mit einem Vertrag.",
      why: "Das ist bei Private Credit eine gängige Form und macht Deals schneller.",
      next: ["t:direct-lending", "t:first-lien"]
    },
    "covenant": {
      name: "Covenant", aliases: ["Covenant", "Covenants"],
      short: "Eine Auflage im Kreditvertrag, etwa ein Höchstwert für die Verschuldung im Verhältnis zum EBITDA. Wird sie verletzt, können Kreditgeber eingreifen.",
      example: "„Schulden dürfen nicht mehr als das 6-Fache des EBITDA betragen.“",
      why: "Covenants sind ein Frühwarnsystem für Kreditgeber.",
      next: ["t:ebitda", "e:nonaccrual-default"]
    },
    "default-rate": {
      name: "Default Rate", aliases: ["Default Rate", "Ausfallrate", "Default Rates"],
      short: "Der Anteil der Kredite, bei denen der Schuldner Zins oder Tilgung nicht mehr wie vereinbart zahlt oder Insolvenz anmeldet.",
      example: "100 Kredite, davon 5 ausgefallen → Ausfallrate 5 %.",
      why: "Sie zeigt, wie gesund ein Kreditmarkt ist. Verschiedene Anbieter messen sie unterschiedlich.",
      next: ["e:nonaccrual-default", "t:non-accrual"]
    },
    "non-accrual": {
      name: "Non-Accrual", aliases: ["Non-Accrual", "Non-Accruals", "Non-Accrual-Kredit"],
      short: "Ein Kredit, bei dem ein Fonds die Zinserträge nicht mehr als sicher verbucht, weil der Schuldner Probleme hat.",
      example: "Ein Kredit mit 50 Mio. € wird als Non-Accrual geführt. Der Fonds bucht keine Zinsen mehr als Ertrag.",
      why: "Der Anteil der Non-Accruals ist ein wichtiger Stressindikator für Kredit-Fonds.",
      next: ["e:nonaccrual-default", "t:bdc"]
    },
    "bdc": {
      name: "BDC", aliases: ["BDC", "BDCs"],
      short: "Business Development Company: ein börsennotierter oder nicht börsennotierter US-Fonds, der Kredite an mittelgroße Firmen vergibt und den Großteil der Erträge ausschüttet.",
      example: "Kleinanleger können in eine BDC investieren und erhalten Ausschüttungen aus den Kreditzinsen.",
      why: "BDCs machen Private Credit auch für Privatanleger zugänglich. Ihre Berichte sind eine wichtige Datenquelle.",
      next: ["t:direct-lending", "e:redemption-limits"]
    },
    "direct-lending": {
      name: "Direct Lending", aliases: ["Direct Lending", "Private Debt", "Private Credit"],
      short: "Nicht-Banken (Fonds) vergeben Kredite direkt an Unternehmen, meist an mittelgroße Firmen oder Firmen in Übernahmen.",
      example: "Statt einer Bank finanziert ein Kreditfonds eine Übernahme mit einem Kredit zu SOFR + 5 %.",
      why: "Seit Banken sich stärker zurückgezogen haben, ist dies ein Markt im Billionen-Dollar-Bereich.",
      next: ["e:private-credit-what", "t:sofr"]
    },
    "nav": {
      name: "NAV", aliases: ["NAV", "Nettoinventarwert"],
      short: "Net Asset Value: der Wert aller Anlagen eines Fonds abzüglich Schulden, geteilt durch die Zahl der Anteile.",
      example: "Fondsvermögen 1 Mrd. €, 10 Mio. Anteile → NAV 100 € pro Anteil.",
      why: "Rücknahmeanfragen werden oft als Anteil am NAV angegeben.",
      next: ["e:redemption-limits"]
    },
    "gigawatt": {
      name: "Gigawatt", aliases: ["Gigawatt", "GW"],
      short: "Eine Milliarde Watt Leistung. Rechenzentren werden inzwischen nach ihrem Strombedarf in GW gemessen.",
      example: "Ein Gigawatt entspricht etwa der Leistung eines großen Kernkraftwerks.",
      why: "Der Strombedarf ist eine Grenze für den Ausbau von KI-Rechenzentren.",
      next: ["e:ai-capex"]
    },
    "hyperscaler": {
      name: "Hyperscaler", aliases: ["Hyperscaler"],
      short: "Sehr große Cloud-Anbieter mit riesigen Rechenzentren, zum Beispiel Amazon, Microsoft und Google.",
      example: "Firmen mieten Rechenleistung, statt eigene Server zu betreiben.",
      why: "Ihre Investitionen sind ein großer Treiber für Chip- und Energiekonzerne.",
      next: ["e:ai-capex"]
    },
    "umlage": {
      name: "Umlageverfahren", aliases: ["Umlageverfahren", "Umlage"],
      short: "Bei der gesetzlichen Rente zahlen die heutigen Beitragszahler direkt die heutigen Renten. Es gibt kein angespartes Vermögen pro Person.",
      example: "Zahlen weniger Beschäftigte für mehr Rentner, muss entweder der Beitrag steigen, die Rente sinken oder der Staat zuschießen.",
      why: "Deshalb wirkt die Demografie direkt auf die Rentenfinanzen.",
      next: ["e:rente-basics"]
    },
    "koalition": {
      name: "Koalition", aliases: ["Koalition", "Koalitionsbildung"],
      short: "Ein Bündnis mehrerer Parteien, die zusammen eine Mehrheit im Parlament haben und gemeinsam regieren.",
      example: "Hat keine Partei allein mehr als 50 % der Sitze, braucht sie einen oder mehrere Koalitionspartner.",
      why: "Ergebnisse von Wahlen entscheiden über mögliche Bündnisse, nicht nur über den ersten Platz.",
      next: ["e:coalition-majority"]
    }
  },

  /* ───────────────────────────── ERKLÄRUNGEN ───────────────────────────── */
  // Jede Erklärung folgt demselben Aufbau: kurz → warum → beispiel → wichtig → terms → related → followups
  explainers: {

    /* ── MÄRKTE ── */
    "index-move": {
      section: "markets", title: "Indexbewegung verstehen", q: "Was bedeutet es, wenn der DAX um 1,6 % fällt?",
      keywords: ["dax", "index", "prozent", "punkte", "s&p", "nasdaq", "dow", "indexbewegung", "fällt", "steigt", "börse", "aktienindex"],
      kurz: "Ein Aktienindex fasst die Kurse vieler Unternehmen zu einer Zahl zusammen. Fällt der DAX um 1,6 %, werden die 40 enthaltenen Unternehmen zusammengenommen 1,6 % niedriger bewertet als beim vorigen Handelsschluss.",
      warum: [
        "Anleger kaufen und verkaufen Aktien laufend.",
        "Überwiegen die Verkäufe, sinken die Kurse. Überwiegen die Käufe, steigen sie.",
        "Der Index gewichtet größere Unternehmen stärker. Ein Kurssprung bei einem Schwergewicht bewegt ihn also mehr."
      ],
      beispiel: "Stand der Index bei 25.717 Punkten und fällt um 1,6 %, sind es etwa 411 Punkte weniger: 25.306. Die Punktzahl selbst hat keine Einheit, sie ist nur ein Vergleichswert.",
      wichtig: "Indizes sind ein Stimmungsbild der Märkte. Sie zeigen nicht, wie es jedem einzelnen Unternehmen oder der Wirtschaft insgesamt geht.",
      terms: ["verfallstag", "rendite"],
      related: ["why-markets-move", "yield-stocks", "verfallstag-why", "rates-stocks"],
      followups: ["why-markets-move", "verfallstag-why", "yield-stocks", "rates-stocks"]
    },
    "why-markets-move": {
      section: "markets", title: "Warum bewegen sich Börsen?", q: "Warum steigt oder fällt der Markt heute?",
      keywords: ["warum", "börse", "kurs", "steigt", "fällt", "ursache", "markt", "bewegung", "gründe", "faktoren"],
      kurz: "Kurse bewegen sich, wenn sich die Erwartungen der Anleger ändern: über künftige Gewinne, Zinsen oder Risiken. Genau eine Ursache für einen Tag gibt es selten.",
      warum: [
        "Neue Informationen erreichen die Märkte: Zinsentscheide, Konjunkturdaten, Firmenzahlen, politische Ereignisse.",
        "Anleger passen ihre Erwartungen an und kaufen oder verkaufen.",
        "Die Kurse ändern sich, bis Angebot und Nachfrage wieder ausgeglichen sind.",
        "Erklärungen für einen Tag sind Deutungen von Marktbeobachtern, keine bewiesenen Ursachen."
      ],
      beispiel: "Steigt die Rendite von Staatsanleihen und meldet ein Autokonzern zugleich eine gesenkte Prognose, fällt der Aktienindex. Wie viel davon auf welchen Faktor zurückgeht, lässt sich nicht exakt messen.",
      wichtig: "Wer Marktnachrichten liest, sollte Formulierungen wie „Marktbeobachter nennen“ ernst nehmen: Sie zeigen, dass es sich um Erklärungsversuche handelt.",
      terms: ["rendite", "verfallstag"],
      related: ["index-move", "yield-stocks", "rates-stocks"],
      followups: ["index-move", "yield-stocks", "rates-stocks", "verfallstag-why"]
    },
    "yield-meaning": {
      section: "markets", title: "Was Anleihe-Renditen bedeuten", q: "Was bedeutet eine Rendite von 5 %?",
      keywords: ["rendite", "yield", "treasury", "anleihe", "10y", "10-jährig", "bund", "staatsanleihe", "5 %", "3,5"],
      kurz: "Die Rendite ist die jährliche Verzinsung, die ein Käufer einer Anleihe zum heutigen Kurs bekommt. Eine 10-jährige US-Staatsanleihe mit 5 % Rendite bringt bei Kauf zum aktuellen Preis rund 5 % pro Jahr.",
      warum: [
        "Der Staat zahlt feste Zinsen auf den Nennwert.",
        "Der Kurs der Anleihe schwankt am Markt.",
        "Sinkt der Kurs, bekommt der Käufer für weniger Geld dieselben Zinsen, also steigt die Rendite.",
        "Steigen die Zinserwartungen, sinken die Kurse alter Anleihen, und die Rendite steigt."
      ],
      beispiel: "Eine Anleihe zahlt 4 € pro Jahr auf 100 € Nennwert. Fällt ihr Kurs auf 80 €, ist die Rendite 4/80 = 5 %.",
      wichtig: "Renditen der Staatsanleihen sind die Grundlage vieler Zinsen: für Firmenkredite, Hypotheken und die Bewertung von Aktien.",
      terms: ["rendite", "basispunkt", "leitzins"],
      related: ["yield-stocks", "fed-hike", "sofr-spread", "rates-stocks"],
      followups: ["yield-stocks", "fed-hike", "central-banks-why", "sofr-spread", "rates-stocks"]
    },
    "yield-stocks": {
      section: "markets", title: "Renditen und Aktien", q: "Warum belasten steigende Renditen Aktien?",
      keywords: ["rendite", "aktien", "belasten", "zinsen", "bewertung", "tech", "nasdaq", "steigende"],
      kurz: "Steigen die Renditen sicherer Anleihen, werden Aktien im Vergleich weniger attraktiv. Zugleich sinkt der heutige Wert künftiger Gewinne, besonders bei Wachstumsfirmen.",
      warum: [
        "Sichere Anleihen zahlen mehr, also sinkt der Anreiz, das Risiko von Aktien einzugehen.",
        "Der Wert einer Aktie hängt von künftigen Gewinnen ab, die mit einem Zins „abgezinst“ werden.",
        "Höherer Zins → niedrigerer heutiger Wert, besonders bei Gewinnen, die weit in der Zukunft liegen.",
        "Firmen mit vielen Schulden zahlen mehr Zinsen, was ihre Gewinne drückt."
      ],
      beispiel: "Ein Gewinn von 100 € in 10 Jahren ist bei 2 % Zins heute rund 82 € wert, bei 5 % nur noch rund 61 €.",
      wichtig: "Deshalb reagieren Tech- und Wachstumsaktien empfindlich auf steigende Zinsen.",
      terms: ["rendite", "leitzins"],
      related: ["rates-stocks", "fed-hike", "index-move"],
      followups: ["rates-stocks", "fed-hike", "inflation-expectations", "central-banks-why"]
    },
    "rates-stocks": {
      section: "markets", title: "Zinsen und Aktien", q: "Wie beeinflussen Zinsen die Aktienmärkte?",
      keywords: ["zinsen", "aktien", "märkte", "aktienmarkt", "leitzins", "zinserhöhung", "börse"],
      kurz: "Höhere Zinsen wirken auf Aktien über drei Wege: Kredite werden teurer, Anleihen konkurrieren stärker um Anlegergeld, und künftige Gewinne werden niedriger bewertet.",
      warum: [
        "Firmen zahlen mehr für Schulden, ihre Gewinne sinken tendenziell.",
        "Anleger können bei Anleihen wieder mehr sicheren Zins bekommen.",
        "Die Bewertung künftiger Gewinne sinkt.",
        "Ob das eintritt, hängt auch davon ab, ob Märkte die Zinserhöhung schon erwartet hatten."
      ],
      beispiel: "Hatte der Markt zwei Zinsschritte eingepreist und die Notenbank macht einen, kann das sogar Kurse stützen.",
      wichtig: "Nicht der Zinsschritt allein, sondern die Abweichung von den Erwartungen bewegt die Märkte.",
      terms: ["leitzins", "rendite"],
      related: ["yield-stocks", "fed-hike", "ecb-hike", "companies-costs"],
      followups: ["fed-hike", "yield-stocks", "central-banks-why", "companies-costs"]
    },
    "verfallstag-why": {
      section: "markets", title: "Der große Verfallstag", q: "Warum schwankt die Börse am großen Verfallstag stärker?",
      keywords: ["verfallstag", "hexensabbat", "triple witching", "optionen", "futures", "verfall", "schwankungen"],
      kurz: "An diesem Tag laufen Futures und Optionen auf Indizes aus. Viele Investoren schließen oder erneuern gleichzeitig ihre Positionen. Das kann Kurse kurzfristig stärker bewegen.",
      warum: [
        "Derivate haben ein Ablaufdatum, an dem sie abgerechnet werden.",
        "Händler gleichen ihre Absicherungspositionen aus.",
        "Dazu werden viele Aktien in kurzer Zeit gekauft oder verkauft.",
        "Die Bewegung kann deshalb größer sein, als die Nachrichtenlage allein erklärt."
      ],
      beispiel: "Ein Fonds hat sein Depot mit Verkaufsoptionen abgesichert. Läuft der Vertrag aus, kauft oder verkauft er Aktien, um seine Position neu auszurichten.",
      wichtig: "Kursbewegungen an Verfallstagen sind mit Vorsicht zu deuten, denn sie müssen nichts über die Wirtschaft aussagen.",
      terms: ["verfallstag", "oil-future"],
      related: ["index-move", "why-markets-move"],
      followups: ["why-markets-move", "index-move", "yield-stocks", "rates-stocks"]
    },
    "gold-why": {
      section: "markets", title: "Gold", q: "Was bestimmt den Goldpreis?",
      keywords: ["gold", "goldpreis", "sicherer hafen", "unze", "edelmetall", "fällt gold", "steigt gold"],
      kurz: "Gold ist ein Wertspeicher ohne Zins. Sein Preis hängt stark von Realzinsen, Dollar und Unsicherheit ab.",
      warum: [
        "Gold zahlt keine Zinsen. Steigen die Zinsen auf Anleihen, wird es im Vergleich weniger attraktiv.",
        "Ein stärkerer Dollar macht Gold für Käufer außerhalb der USA teurer.",
        "In unsicheren Zeiten kaufen Anleger Gold als Absicherung.",
        "Diese Kräfte wirken gegeneinander, deshalb sind Preisbewegungen nicht immer eindeutig zu erklären."
      ],
      beispiel: "Steigen Zinsen und Unsicherheit zugleich, wirken zwei gegenläufige Kräfte auf den Goldpreis.",
      wichtig: "Gold ist ein Gegenpol zu Aktien, aber kein sicherer Gewinn.",
      terms: ["rendite", "inflation"],
      related: ["yield-meaning", "eurusd-meaning", "inflation-what"],
      followups: ["yield-meaning", "inflation-what", "eurusd-meaning", "central-banks-why"]
    },
    "eurusd-meaning": {
      section: "markets", title: "Der Euro-Dollar-Kurs", q: "Was bedeutet ein EUR/USD-Kurs von 1,15?",
      keywords: ["eur/usd", "euro", "dollar", "wechselkurs", "währung", "eurusd"],
      kurz: "EUR/USD = 1,15 heißt: 1 Euro kostet 1,15 US-Dollar. Steigt der Kurs, wird der Euro stärker.",
      warum: [
        "Wechselkurse entstehen aus Angebot und Nachfrage nach Währungen.",
        "Höhere Zinsen in den USA machen Dollar-Anlagen attraktiver, was den Dollar stützen kann.",
        "Höhere Zinsen im Euroraum wirken in die Gegenrichtung.",
        "Entscheidend ist der Unterschied der Zinsen und Erwartungen zwischen den Regionen."
      ],
      beispiel: "Ein US-Urlaub: Bei 1,15 kosten 100 US-Dollar etwa 87 Euro. Bei 1,05 wären es rund 95 Euro.",
      wichtig: "Ein starker Euro macht Importe (z. B. Öl in Dollar) billiger und Exporte teurer.",
      terms: ["leitzins"],
      related: ["fed-hike", "ecb-hike", "oil-inflation"],
      followups: ["fed-hike", "ecb-hike", "oil-inflation", "gold-why"]
    },
    "bitcoin-what": {
      section: "markets", title: "Bitcoin", q: "Warum schwankt Bitcoin so stark?",
      keywords: ["bitcoin", "krypto", "kryptowährung", "btc", "digital"],
      kurz: "Bitcoin ist eine digitale Anlage ohne Zentralbank und ohne Cashflow. Sein Preis hängt fast nur von Angebot, Nachfrage und Stimmung ab.",
      warum: [
        "Es gibt keinen Gewinn oder Zins, aus dem sich ein „fairer Wert“ berechnen ließe.",
        "Der Markt ist kleiner als der für Aktien oder Anleihen, deshalb wirken große Käufe oder Verkäufe stark.",
        "Anleger behandeln Bitcoin oft wie ein Risiko-Asset: Bei steigenden Zinsen kann er unter Druck geraten."
      ],
      beispiel: "Springt das Interesse von Großanlegern, kann der Preis binnen Tagen zweistellig steigen oder fallen.",
      wichtig: "Bitcoin gilt als hochspekulativ. Kursgewinne sind nicht garantiert.",
      terms: ["rendite"],
      related: ["rates-stocks", "gold-why"],
      followups: ["rates-stocks", "gold-why", "why-markets-move"]
    },

    /* ── WIRTSCHAFT ── */
    "inflation-what": {
      section: "economy", title: "Inflation", q: "Was ist Inflation und wie wird sie gemessen?",
      keywords: ["inflation", "preise", "verbraucherpreise", "teuerung", "inflationsrate", "kaufkraft", "messen"],
      kurz: "Inflation ist der Anstieg des allgemeinen Preisniveaus. Sie wird gemessen, indem Statistiker die Preise eines typischen Warenkorbs mit dem Vorjahr vergleichen.",
      warum: [
        "Der Warenkorb enthält Miete, Lebensmittel, Energie, Kleidung, Dienstleistungen.",
        "Jede Position hat ein Gewicht, das ihrem Anteil an den Ausgaben entspricht.",
        "Steigt der Gesamtpreis im Vergleich zum Vorjahr, ergibt sich die Inflationsrate."
      ],
      beispiel: "Kostet der Warenkorb heute 103 € statt 100 € im Vorjahr, beträgt die Inflationsrate 3 %.",
      wichtig: "Inflation mindert Kaufkraft von Löhnen und Ersparnissen und steuert die Zinspolitik.",
      terms: ["inflation", "kerninflation", "erzeugerpreise"],
      related: ["ppi-what", "oil-inflation", "central-banks-why", "inflation-expectations"],
      followups: ["central-banks-why", "oil-inflation", "ppi-what", "inflation-expectations"]
    },
    "inflation-expectations": {
      section: "economy", title: "Inflationserwartungen", q: "Warum sind Inflationserwartungen wichtig?",
      keywords: ["inflationserwartungen", "erwartungen", "inflation", "preise", "lohn", "zentralbank"],
      kurz: "Erwarten Menschen und Firmen höhere Preise, verhalten sie sich danach: Sie fordern höhere Löhne und setzen höhere Preise an. Erwartungen können Inflation dadurch verstärken.",
      warum: [
        "Beschäftigte verlangen mehr Lohn, wenn sie höhere Preise erwarten.",
        "Firmen geben gestiegene Kosten schneller weiter.",
        "Zentralbanken wollen deshalb verhindern, dass sich hohe Erwartungen verfestigen.",
        "Sie reagieren auch auf Erwartungen, nicht nur auf aktuelle Zahlen."
      ],
      beispiel: "Erwartet ein Konzern 5 % Kostensteigerung, kalkuliert er seine Preise für das nächste Jahr schon entsprechend höher.",
      wichtig: "Deshalb bewegen schon Meldungen zu Öl oder Löhnen Zinserwartungen und Aktienkurse.",
      terms: ["inflation", "leitzins"],
      related: ["central-banks-why", "oil-inflation", "yield-stocks"],
      followups: ["central-banks-why", "oil-inflation", "fed-hike", "yield-stocks"]
    },
    "ppi-what": {
      section: "economy", title: "Erzeugerpreise", q: "Was sind Erzeugerpreise und warum sind sie ein Frühindikator?",
      keywords: ["erzeugerpreise", "produzentenpreise", "ppi", "frühindikator", "industrie", "destatis"],
      kurz: "Erzeugerpreise sind die Preise, die Hersteller für ihre Produkte verlangen. Sie steigen oft, bevor die Preise im Supermarkt oder an der Tankstelle steigen.",
      warum: [
        "Steigen Rohstoff- und Energiekosten, wird die Herstellung teurer.",
        "Firmen geben Kostensteigerungen häufig, aber nicht immer und nicht vollständig, an ihre Kunden weiter.",
        "Deshalb kann ein Anstieg der Erzeugerpreise später die Verbraucherpreise erhöhen."
      ],
      beispiel: "Wird Heizöl für Fabriken teurer, steigen Kosten für Glas oder Keramik. Der Preis im Laden folgt möglicherweise Monate später.",
      wichtig: "Zentralbanken und Ökonomen beobachten Erzeugerpreise, um Inflationsdruck früh zu erkennen. Ein sicherer Vorbote sind sie aber nicht.",
      terms: ["erzeugerpreise", "inflation"],
      related: ["inflation-what", "oil-inflation", "energy-germany"],
      followups: ["inflation-what", "oil-inflation", "central-banks-why", "energy-germany"]
    },
    "central-banks-why": {
      section: "economy", title: "Zentralbanken und Inflation", q: "Warum reagieren Zentralbanken auf Inflation?",
      keywords: ["zentralbank", "notenbank", "fed", "ezb", "inflation", "zinsen", "preisstabilität", "geldpolitik"],
      kurz: "Zentralbanken haben den Auftrag, Preise stabil zu halten (die EZB zielt auf 2 % Inflation). Steigt die Inflation deutlich, erhöhen sie meist die Zinsen, um die Nachfrage zu dämpfen.",
      warum: [
        "Höhere Zinsen verteuern Kredite.",
        "Firmen und Haushalte investieren und konsumieren weniger.",
        "Die geringere Nachfrage nimmt Preisdruck aus dem System.",
        "Das wirkt aber mit Verzögerung und kann Wachstum und Jobs kosten."
      ],
      beispiel: "Steigen Hypothekenzinsen von 3 % auf 4 %, überlegen sich viele Käufer den Hauskauf zweimal.",
      wichtig: "Bei Preisschocks durch Energie, die aus dem Ausland kommen, sind Zinserhöhungen ein umstrittenes Mittel. Die EZB-Chefin räumte selbst ein, dass eine Zentralbank Energieprobleme nicht lösen kann.",
      terms: ["leitzins", "inflation"],
      related: ["fed-hike", "ecb-hike", "oil-inflation", "rates-stocks"],
      followups: ["fed-hike", "ecb-hike", "rates-stocks", "inflation-expectations"]
    },
    "fed-hike": {
      section: "economy", title: "Die Fed erhöht die Zinsen", q: "Warum erhöht die Fed die Zinsen?",
      keywords: ["fed", "federal reserve", "zinserhöhung", "leitzins", "warsh", "fomc", "zinsen usa"],
      kurz: "Die US-Notenbank Fed erhöht ihren Leitzins, wenn sie die Inflation für zu hoch hält. So sollen Kreditvergabe und Nachfrage gebremst werden.",
      warum: [
        "Der Leitzins bestimmt die Kosten für Kredite in den USA.",
        "Höhere Zinsen dämpfen Investitionen und Konsum.",
        "Die Fed setzt darauf, dass sich Preise dadurch beruhigen.",
        "Sie entscheidet im Ausschuss (FOMC) und veröffentlicht Prognosen der Mitglieder (Dot Plot)."
      ],
      beispiel: "Steigt der Leitzins um 0,25 Punkte, verteuert sich ein Kredit mit variabler Verzinsung entsprechend, und SOFR steigt in der Regel mit.",
      wichtig: "Fed-Entscheidungen strahlen auf Anleihen, Aktien, Dollar und Kreditmärkte weltweit aus.",
      terms: ["leitzins", "dot-plot", "sofr", "basispunkt"],
      related: ["central-banks-why", "yield-stocks", "sofr-spread", "eurusd-meaning"],
      followups: ["central-banks-why", "yield-stocks", "sofr-spread", "eurusd-meaning", "pc-rates"]
    },
    "ecb-hike": {
      section: "economy", title: "Die EZB erhöht die Zinsen", q: "Was bedeutet die EZB-Zinserhöhung für Verbraucher?",
      keywords: ["ezb", "europäische zentralbank", "lagarde", "einlagensatz", "zinserhöhung", "zinsen euro", "sparzinsen", "kredit"],
      kurz: "Die EZB steuert die Zinsen im Euroraum. Erhöht sie den Einlagensatz, steigen meist Kreditzinsen und oft auch Sparzinsen.",
      warum: [
        "Banken bekommen für Geld bei der EZB mehr Zinsen.",
        "Sie geben das teilweise an Kunden weiter: Kredite werden teurer, Tagesgeld oft besser verzinst.",
        "Die EZB will damit die Inflation dämpfen."
      ],
      beispiel: "Bei einer Baufinanzierung mit variablem Zins kann eine Erhöhung um 0,25 Punkte auf 300.000 € grob 750 € mehr Zinsen pro Jahr bedeuten.",
      wichtig: "Die Wirkung hängt davon ab, wie schnell Banken die Zinsen anpassen und ob Kredite fest oder variabel verzinst sind.",
      terms: ["leitzins", "inflation", "basispunkt"],
      related: ["central-banks-why", "fed-hike", "oil-inflation", "eurusd-meaning"],
      followups: ["central-banks-why", "oil-inflation", "eurusd-meaning", "energy-germany"]
    },
    "oil-inflation": {
      section: "economy", title: "Öl und Inflation", q: "Wie beeinflusst Öl die Inflation?",
      keywords: ["öl", "inflation", "ölpreis", "energie", "benzin", "diesel", "heizöl", "preise", "energiepreise"],
      kurz: "Öl steckt in Benzin, Diesel, Heizöl, Kunststoffen und Transport. Steigt der Ölpreis, werden viele Waren und Dienstleistungen direkt oder indirekt teurer.",
      warum: [
        "Direkt: Sprit und Heizöl kosten mehr.",
        "Indirekt: Transport und Produktion werden teurer, und Firmen reichen das oft weiter.",
        "Die Erwartung höherer Preise kann Lohn- und Preisforderungen antreiben.",
        "Zentralbanken achten darauf, ob aus einem Einmaleffekt ein dauerhafter Preisdruck wird."
      ],
      beispiel: "Steigt Diesel um 30 Cent pro Liter, verteuern sich Speditionen und in der Folge Lebensmittel im Handel.",
      wichtig: "Energiepreise sind ein Haupttreiber von Inflationsschwankungen. Zentralbanken können sie nicht direkt beeinflussen.",
      terms: ["inflation", "kerninflation", "brent"],
      related: ["why-oil-up-geo", "central-banks-why", "energy-germany", "companies-costs"],
      followups: ["central-banks-why", "energy-germany", "oil-stocks", "inflation-expectations", "why-oil-up-geo"]
    },
    "debt-brake": {
      section: "economy", title: "Schulden und Schuldenbremse", q: "Was ist die Schuldenbremse?",
      keywords: ["schuldenbremse", "schulden", "staatsverschuldung", "neuverschuldung", "haushalt", "sondervermögen", "kredit"],
      kurz: "Die Schuldenbremse begrenzt im Grundgesetz die Neuverschuldung des Bundes. Für bestimmte Bereiche gelten Ausnahmen.",
      warum: [
        "Sie soll verhindern, dass der Staat dauerhaft über seine Verhältnisse lebt.",
        "Kritiker sagen, sie bremse notwendige Investitionen aus.",
        "Befürworter sagen, sie schütze künftige Generationen vor hohen Zinslasten.",
        "2025 wurde sie reformiert: Verteidigungsausgaben über 1 % des BIP sind ausgenommen, dazu kam ein Sondervermögen für Infrastruktur."
      ],
      beispiel: "Nimmt der Staat 200 Mrd. € Kredit auf und zahlt 3 % Zinsen, sind das 6 Mrd. € pro Jahr, die nicht für Anderes zur Verfügung stehen.",
      wichtig: "Steigende Zinsen machen Staatsschulden teurer. Diesen Zusammenhang nennen Kritiker als Risiko der hohen Neuverschuldung.",
      terms: ["schuldenbremse", "rendite"],
      related: ["haushalt-basics", "yield-meaning", "nato-target"],
      followups: ["haushalt-basics", "yield-meaning", "nato-target", "central-banks-why"]
    },

    /* ── ENERGIE / GEOPOLITIK ── */
    "why-oil-up-geo": {
      section: "geo", title: "Konflikt und Ölpreis", q: "Warum kann ein geopolitischer Konflikt den Ölpreis erhöhen?",
      keywords: ["ölpreis", "konflikt", "geopolitik", "krieg", "nahost", "iran", "angebot", "ölversorgung", "warum öl", "öl steigt", "öl"],
      kurz: "Öl wird in wenigen Regionen gefördert und muss über wenige Routen zu den Verbrauchern. Bedroht ein Konflikt Förderung oder Transport, wird weniger Öl verfügbar erwartet, und der Preis steigt.",
      warum: [
        "Ein Konflikt gefährdet Förderanlagen, Pipelines oder Schiffsrouten.",
        "Fällt Angebot weg oder droht es wegzufallen, wird Öl knapper.",
        "Käufer bieten mehr, um sich Mengen zu sichern, und Händler preisen das Risiko ein.",
        "Schon die Sorge vor einem Ausfall kann den Preis bewegen, bevor tatsächlich weniger Öl fließt."
      ],
      beispiel: "Fallen 5 % des weltweiten Angebots aus, die Nachfrage bleibt aber gleich, müssen Käufer um die restlichen 95 % konkurrieren. Weil Ölnachfrage kurzfristig kaum ausweichen kann, steigt der Preis oft stark.",
      wichtig: "Öl ist ein Bestandteil fast aller Lieferketten. Ein Ölpreisschock wirkt über Inflation, Zinsen und Firmenkosten bis in die Aktienmärkte.",
      terms: ["brent", "opec-plus", "oil-future"],
      related: ["hormuz", "brent-wti", "oil-inflation", "opec-plus-why", "gas-ttf"],
      followups: ["hormuz", "oil-inflation", "brent-wti", "central-banks-why", "energy-germany", "oil-stocks"]
    },
    "hormuz": {
      section: "geo", title: "Die Straße von Hormus", q: "Was ist die Straße von Hormus und warum ist sie wichtig?",
      keywords: ["hormus", "hormuz", "straße von hormus", "meerenge", "tanker", "persischer golf", "iran", "öltransport"],
      kurz: "Die Straße von Hormus ist eine rund 55 Kilometer breite Meerenge zwischen Oman und Iran. 2023 lief mehr als ein Viertel des weltweiten Ölhandels und etwa ein Fünftel des LNG-Handels durch sie.",
      warum: [
        "Große Förderländer am Persischen Golf liefern ihr Öl per Schiff in die Welt.",
        "Viele Routen führen durch diese eine Engstelle.",
        "Wird sie blockiert oder gefährdet, sinkt die verfügbare Menge stark, und Versicherungen für Schiffe werden teurer.",
        "Alternative Routen (Pipelines) können nur einen Teil auffangen."
      ],
      beispiel: "Aus zig Tankern pro Tag können bei einer Krise nur noch wenige werden. So war es laut Berichten Anfang März 2026.",
      wichtig: "Deshalb reagieren Öl- und Gaspreise sofort auf Nachrichten aus der Region.",
      terms: ["brent", "lng"],
      related: ["why-oil-up-geo", "gas-ttf", "energy-germany"],
      followups: ["why-oil-up-geo", "oil-inflation", "gas-ttf", "energy-germany"]
    },
    "brent-wti": {
      section: "energy", title: "Brent und WTI", q: "Was ist Brent, und wie entsteht der Ölpreis?",
      keywords: ["brent", "wti", "ölpreis", "fass", "barrel", "referenzsorte", "future", "ölsorte", "was ist brent"],
      kurz: "Brent und WTI sind Referenzsorten für Rohöl. Ihr Preis entsteht an Terminmärkten (Futures), an denen Käufer und Verkäufer täglich handeln. Grundlage sind Angebot, Nachfrage und Erwartungen.",
      warum: [
        "Produzenten und Verbraucher sichern sich Preise für spätere Lieferung.",
        "Händler und Fonds handeln zusätzlich auf Erwartungen.",
        "Neue Nachrichten (Konflikte, Förderpolitik, Konjunkturdaten) ändern die Erwartungen sofort."
      ],
      beispiel: "Ein Fass sind 159 Liter. 105 Dollar pro Fass sind damit rund 66 US-Cent pro Liter Rohöl. Der Spritpreis an der Tankstelle enthält zusätzlich Raffinerie, Transport, Steuern und Marge.",
      wichtig: "Brent gilt als globaler Preisanker, und WTI spiegelt den US-Markt.",
      terms: ["brent", "wti", "oil-future", "opec-plus"],
      related: ["why-oil-up-geo", "oil-future", "opec-plus-why", "oil-inflation"],
      followups: ["why-oil-up-geo", "oil-inflation", "opec-plus-why", "oil-stocks"]
    },
    "oil-future": {
      section: "energy", title: "Öl-Futures", q: "Was ist ein Öl-Future?",
      keywords: ["future", "öl-future", "terminkontrakt", "terminmarkt", "derivat", "öl"],
      kurz: "Ein Öl-Future ist ein Vertrag, an einem festen Termin eine festgelegte Menge Öl zu einem vorab vereinbarten Preis zu kaufen oder zu verkaufen.",
      warum: [
        "Firmen sichern sich damit gegen Preisschwankungen ab.",
        "Händler und Fonds spekulieren auf Preisbewegungen.",
        "Der Preis des nächstfälligen Futures ist der „Ölpreis“, der in den Nachrichten genannt wird."
      ],
      beispiel: "Eine Fluggesellschaft kauft Futures für Treibstoff im Dezember. Steigt der Preis bis dahin, war die Absicherung günstig.",
      wichtig: "Weil Futures Erwartungen abbilden, reagiert der Ölpreis auf Nachrichten schneller als der Spritpreis an der Tankstelle.",
      terms: ["oil-future", "brent"],
      related: ["brent-wti", "why-oil-up-geo"],
      followups: ["brent-wti", "why-oil-up-geo", "oil-inflation"]
    },
    "opec-plus-why": {
      section: "energy", title: "OPEC+", q: "Was ist OPEC+ und warum ist es wichtig?",
      keywords: ["opec", "opec+", "förderung", "ölförderung", "saudi-arabien", "fördermenge", "kartell"],
      kurz: "OPEC+ ist ein Verbund großer Ölproduzenten, der Fördermengen abstimmt. Weil die Gruppe einen großen Teil des Weltangebots kontrolliert, wirken ihre Beschlüsse auf den Preis.",
      warum: [
        "Weniger Förderung → weniger Angebot → tendenziell höherer Preis.",
        "Mehr Förderung → mehr Angebot → tendenziell niedrigerer Preis.",
        "Mitglieder haben teils unterschiedliche Interessen, etwa Einnahmen oder Marktanteile."
      ],
      beispiel: "Beschließt die Gruppe eine Kürzung um 1 Million Fass pro Tag, fehlt dem Markt diese Menge.",
      wichtig: "Bei Angriffen auf Förderanlagen kommen Ausfälle hinzu, die auch OPEC+ nicht steuern kann.",
      terms: ["opec-plus", "brent"],
      related: ["why-oil-up-geo", "brent-wti"],
      followups: ["why-oil-up-geo", "brent-wti", "oil-inflation"]
    },
    "gas-ttf": {
      section: "energy", title: "Gaspreis in Europa", q: "Warum ist Gas in Europa teuer?",
      keywords: ["gas", "gaspreis", "ttf", "lng", "speicher", "gasspeicher", "erdgas", "strom", "energiepreise"],
      kurz: "Europa importiert viel Gas, zunehmend als LNG per Schiff. Wenn Lieferrouten oder Lieferländer ausfallen und die Speicher schlecht gefüllt sind, steigt der Preis am Großhandel (TTF).",
      warum: [
        "LNG-Lieferungen kommen aus Ländern wie den USA und Katar.",
        "Gibt es Störungen bei Schifffahrtswegen, wird LNG knapper.",
        "Europäische Speicher müssen vor dem Winter gefüllt werden. Sind sie nicht voll, wächst die Nachfrage am Markt.",
        "Gaskraftwerke bestimmen oft den Strompreis (Merit-Order), sodass Gas auch Strom verteuert."
      ],
      beispiel: "Bei 84 € pro MWh kostet Gas im Großhandel rund 8,4 Cent pro kWh, ohne Netzentgelte, Steuern und Marge.",
      wichtig: "Teures Gas trifft energieintensive Industrie wie Chemie, Glas und Metall und später Verbraucher.",
      terms: ["ttf", "lng"],
      related: ["energy-germany", "hormuz", "companies-costs", "ppi-what"],
      followups: ["energy-germany", "hormuz", "companies-costs", "oil-inflation"]
    },
    "energy-germany": {
      section: "energy", title: "Energiepreise und Deutschland", q: "Was bedeuten hohe Energiepreise für Deutschland?",
      keywords: ["deutschland", "energie", "energiepreise", "verbraucher", "industrie", "auswirkungen", "konjunktur", "heizen", "sprit"],
      kurz: "Deutschland importiert einen großen Teil seiner Energie. Steigen die Preise, trifft das Haushalte (Sprit, Heizen, Strom) und Firmen (Produktionskosten), besonders energieintensive Branchen.",
      warum: [
        "Haushalte haben weniger Geld für anderen Konsum.",
        "Firmen mit hohem Energieeinsatz haben höhere Kosten und weniger Wettbewerbsfähigkeit.",
        "Der Staat und die Zentralbank reagieren, etwa mit Entlastungen oder höheren Zinsen.",
        "Die Wirtschaftsleistung kann dadurch gedämpft werden."
      ],
      beispiel: "Steigt Diesel auf 2,40 €/Liter, zahlt eine Familie mit einem Auto bei 1.000 Litern im Jahr rund 300 € mehr als bei 2,10 €.",
      wichtig: "Energiepreise zählen zu den wichtigsten Einflussfaktoren für Inflation und Konjunktur in Deutschland.",
      terms: ["inflation", "erzeugerpreise"],
      related: ["oil-inflation", "gas-ttf", "companies-costs", "ecb-hike"],
      followups: ["oil-inflation", "gas-ttf", "companies-costs", "ecb-hike"]
    },
    "oil-stocks": {
      section: "energy", title: "Öl und Aktien", q: "Was bedeutet ein hoher Ölpreis für die Börse?",
      keywords: ["öl", "aktien", "börse", "ölpreis aktien", "energieaktien", "auswirkungen", "gewinner", "verlierer"],
      kurz: "Ein hoher Ölpreis nützt Ölförderern, belastet aber Firmen mit hohen Energiekosten und Verbraucher. Über Inflation und Zinsen wirkt er zusätzlich auf den gesamten Markt.",
      warum: [
        "Ölkonzerne verdienen bei höheren Preisen mehr.",
        "Airlines, Chemie, Autobauer oder Logistik haben höhere Kosten.",
        "Höhere Inflation kann höhere Zinsen bedeuten und dadurch Aktienbewertungen belasten."
      ],
      beispiel: "Eine Fluggesellschaft, bei der Kerosin 25 % der Kosten ausmacht, spürt jede Preissteigerung stark.",
      wichtig: "Die Nettowirkung hängt vom Index ab: Ein Index mit vielen Industrie- und Autowerten ist anfälliger als einer mit vielen Energiewerten.",
      terms: ["brent", "inflation"],
      related: ["oil-inflation", "rates-stocks", "companies-costs"],
      followups: ["oil-inflation", "rates-stocks", "companies-costs", "central-banks-why"]
    },
    "companies-costs": {
      section: "economy", title: "Wie Firmen auf Kosten reagieren", q: "Was bedeuten höhere Kosten und Zinsen für Unternehmen?",
      keywords: ["unternehmen", "kosten", "gewinne", "margen", "firmen", "prognose", "verschuldung"],
      kurz: "Steigen Energie- und Zinskosten, sinken die Gewinnmargen, wenn Firmen die Kosten nicht an Kunden weitergeben können. Manche senken dann ihre Gewinnprognose.",
      warum: [
        "Firmen zahlen mehr für Energie, Rohstoffe und Kredite.",
        "Sie können die Preise erhöhen, verlieren dabei aber Kunden.",
        "Bleibt beides aus, sinkt der Gewinn, und die Aktie kann fallen."
      ],
      beispiel: "Ein Autobauer mit 5 % Marge verliert bei 2 % höheren Kosten fast die Hälfte seines Gewinns.",
      wichtig: "Prognosesenkungen sind ein Signal, wie Unternehmen die Lage einschätzen.",
      terms: ["ebitda"],
      related: ["energy-germany", "rates-stocks", "oil-stocks"],
      followups: ["energy-germany", "rates-stocks", "oil-inflation"]
    },

    /* ── DEUTSCHLAND ── */
    "haushalt-basics": {
      section: "germany", title: "Der Bundeshaushalt", q: "Wie entsteht der Bundeshaushalt?",
      keywords: ["haushalt", "bundeshaushalt", "etat", "haushalt 2027", "schulden", "bundestag", "klingbeil", "ausgaben"],
      kurz: "Die Bundesregierung entwirft jedes Jahr einen Haushalt mit geplanten Einnahmen und Ausgaben. Der Bundestag berät und beschließt ihn. Das Parlament hat das letzte Wort.",
      warum: [
        "Das Finanzministerium erstellt mit den Ministerien einen Entwurf.",
        "Das Kabinett beschließt ihn, danach berät der Bundestag und ändert ihn gegebenenfalls.",
        "Der Haushaltsausschuss ist für Details und große Beschaffungen zuständig.",
        "Nach dem Beschluss gilt der Haushalt für das Jahr."
      ],
      beispiel: "Im Entwurf für 2027 sind Ausgaben von rund 555 Mrd. € geplant. Wer mehr ausgibt, als er einnimmt, macht Schulden.",
      wichtig: "Der Haushalt zeigt, welche Prioritäten eine Regierung setzt, und wie stark sie sich verschuldet.",
      terms: ["schuldenbremse"],
      related: ["debt-brake", "rente-basics", "nato-target", "coalition-majority"],
      followups: ["debt-brake", "rente-basics", "nato-target", "yield-meaning"]
    },
    "rente-basics": {
      section: "germany", title: "Die gesetzliche Rente", q: "Wie funktioniert die gesetzliche Rente?",
      keywords: ["rente", "rentenversicherung", "45 beitragsjahre", "abschlagsfrei", "rentenkommission", "umlage", "rentenalter"],
      kurz: "In der gesetzlichen Rente zahlen Beschäftigte und Arbeitgeber Beiträge, aus denen sofort die Renten der heutigen Rentner bezahlt werden. Der Bund schießt zusätzlich Steuergeld zu.",
      warum: [
        "Es gibt keinen individuellen Kapitalstock wie bei einer Privatvorsorge.",
        "Die Zahl der Beitragszahler im Verhältnis zu den Rentnern sinkt durch die Alterung.",
        "Deshalb stehen Beitragssatz, Rentenniveau, Renteneintrittsalter und Bundeszuschüsse immer wieder zur Debatte.",
        "Regeln wie die Rente nach 45 Beitragsjahren ohne Abschläge kosten Geld und werden deshalb politisch diskutiert."
      ],
      beispiel: "Zahlen 2 Beschäftigte je Rentner ein, trägt jeder von ihnen die Hälfte einer Rente. Bei 1,5 Beschäftigten je Rentner sind es zwei Drittel.",
      wichtig: "Die Rente betrifft fast alle. Änderungen wirken langfristig auf Beiträge, Renten und den Bundeshaushalt.",
      terms: ["umlage"],
      related: ["haushalt-basics", "debt-brake", "coalition-majority"],
      followups: ["haushalt-basics", "debt-brake", "coalition-majority"]
    },
    "landtagswahl-why": {
      section: "germany", title: "Landtagswahlen", q: "Warum sind Landtagswahlen auch bundespolitisch wichtig?",
      keywords: ["landtagswahl", "wahl", "berlin", "mecklenburg-vorpommern", "bundesrat", "wahlen", "sonntag", "umfrage"],
      kurz: "Landtagswahlen bestimmen die Landesregierungen. Diese sind über den Bundesrat an der Bundesgesetzgebung beteiligt. Zudem gelten sie als Stimmungstest für die Bundespolitik.",
      warum: [
        "Länder regieren in Bildung, Polizei und vielen Verwaltungsfragen selbst.",
        "Im Bundesrat stimmen die Landesregierungen über viele Bundesgesetze mit ab.",
        "Ergebnisse zeigen, welche Parteien Zuspruch gewinnen oder verlieren.",
        "Ob eine Regierung entsteht, hängt von möglichen Koalitionen ab, nicht nur vom ersten Platz."
      ],
      beispiel: "Eine Partei kann stärkste Kraft werden und trotzdem nicht regieren, wenn niemand mit ihr koalieren will oder kann.",
      wichtig: "Nach einer Wahl folgt die Koalitionsbildung. Sie kann Wochen bis Monate dauern.",
      terms: ["koalition"],
      related: ["coalition-majority", "haushalt-basics"],
      followups: ["coalition-majority", "haushalt-basics", "rente-basics"]
    },
    "coalition-majority": {
      section: "germany", title: "Koalition und Mehrheit", q: "Was bedeutet „keine Mehrheit“ für eine Koalition?",
      keywords: ["koalition", "mehrheit", "regierung", "koalitionsbildung", "sitze", "regierungsbildung", "senat"],
      kurz: "Eine Regierung braucht im Parlament mehr als die Hälfte der Sitze. Sagen Umfragen, eine bisherige Koalition hätte „keine Mehrheit“, würden ihre Parteien zusammen weniger als die Hälfte der Sitze bekommen.",
      warum: [
        "Nach der Wahl werden Sitze nach Stimmenanteilen verteilt.",
        "Parteien, die unter einer Hürde (5 %) bleiben, bekommen meist keine Sitze.",
        "Eine Regierung entsteht, wenn Parteien mit zusammen über 50 % der Sitze ein Bündnis bilden.",
        "Schließen Parteien Bündnisse aus, wird die Koalitionsbildung schwieriger."
      ],
      beispiel: "Bei 100 Sitzen braucht ein Bündnis mindestens 51. Kommen zwei Parteien zusammen nur auf 44 Sitze, fehlen ihnen 7.",
      wichtig: "Umfragen sind Momentaufnahmen mit Schwankungsbreite. Wie viele Menschen noch unentschieden sind, verändert das Ergebnis.",
      terms: ["koalition"],
      related: ["landtagswahl-why"],
      followups: ["landtagswahl-why", "haushalt-basics"]
    },

    /* ── DEFENCE ── */
    "nato-target": {
      section: "defence", title: "Das 5-%-Ziel", q: "Was bedeutet das NATO-Ziel von 5 % des BIP?",
      keywords: ["nato", "5 prozent", "5 %", "verteidigungsausgaben", "bip", "verteidigungshaushalt", "wehretat", "ziel"],
      kurz: "NATO-Staaten haben sich verpflichtet, ihre Verteidigungsausgaben stark zu steigern: Ziel sind 5 % der Wirtschaftsleistung, davon 3,5 % für Kernverteidigung. Deutschland strebt dies laut Haushaltsplanung bis 2029 an.",
      warum: [
        "Die Sicherheitslage in Europa hat sich seit dem russischen Angriff auf die Ukraine verändert.",
        "Verbündete wollen die Lasten in der NATO gerechter verteilen.",
        "Mehr Ausgaben bedeuten mehr Aufträge für Rüstungsunternehmen, aber auch höhere Staatsausgaben oder Schulden."
      ],
      beispiel: "Bei einer Wirtschaftsleistung von 4.500 Mrd. € wären 3,5 % rund 158 Mrd. € pro Jahr.",
      wichtig: "Das Ziel prägt Haushalte, Beschaffung und den Ausblick der Rüstungsbranche.",
      terms: ["schuldenbremse"],
      related: ["defence-order", "haushalt-basics", "debt-brake", "defence-stocks"],
      followups: ["defence-order", "defence-stocks", "debt-brake", "haushalt-basics"]
    },
    "defence-order": {
      section: "defence", title: "Rüstungsmeldungen lesen", q: "Wie liest man eine Meldung über einen Rüstungsauftrag?",
      keywords: ["auftrag", "rüstungsauftrag", "beschaffung", "bundeswehr", "rheinmetall", "hensoldt", "renk", "tkms", "rüstung", "fregatte"],
      kurz: "Bei Rüstungsaufträgen lohnt sich ein Blick auf fünf Punkte: Was wird bestellt? Wer bestellt? Wie groß ist der Auftrag im Vergleich zum Umsatz? Über welchen Zeitraum läuft er? Ist er fest oder nur eine Option?",
      warum: [
        "Große Zahlen wirken auf den ersten Blick beeindruckend, sagen aber wenig ohne Bezug zum Unternehmensumsatz.",
        "Rahmenverträge und Optionen sind keine festen Bestellungen.",
        "Aufträge werden oft über mehrere Jahre abgerechnet.",
        "Politische Zustimmungen (z. B. durch den Haushaltsausschuss) können nötig sein."
      ],
      beispiel: "Ein Auftrag über 1 Mrd. € über 5 Jahre sind 200 Mio. € pro Jahr. Bei 10 Mrd. € Umsatz sind das 2 %.",
      wichtig: "Der Aktienkurs reagiert auf die Erwartung, nicht nur auf die Schlagzeile.",
      terms: ["closing"],
      related: ["nato-target", "defence-stocks", "haushalt-basics"],
      followups: ["defence-stocks", "nato-target", "haushalt-basics"]
    },
    "defence-stocks": {
      section: "defence", title: "Rüstungsaktien", q: "Warum reagieren Rüstungsaktien auf Friedensgespräche?",
      keywords: ["rüstungsaktien", "rheinmetall", "friedensgespräche", "ukraine", "aktien", "kurs", "hensoldt", "renk", "tkms"],
      kurz: "Rüstungsaktien spiegeln die Erwartung künftiger Aufträge. Sinkt die Wahrscheinlichkeit langer Konflikte oder hoher Budgets, überdenken Anleger diese Erwartung. Steigt sie, ist es umgekehrt.",
      warum: [
        "Der Umsatz hängt stark von staatlichen Budgets und Aufträgen ab.",
        "Nachrichten zu Verhandlungen ändern die Erwartung an Nachfrage und Politik.",
        "Auch Lieferverzögerungen oder gestoppte Projekte wirken auf Kurse.",
        "Anleger vergleichen Bewertung, Auftragsbestand und Lieferfähigkeit."
      ],
      beispiel: "Hat eine Aktie stark zugelegt und kommt dann eine Nachricht über verzögerte Lieferungen, verkaufen Anleger oft schnell.",
      wichtig: "Kurse sind Erwartungen, nicht Fakten: Sie können sich schnell ändern.",
      terms: ["closing"],
      related: ["defence-order", "nato-target"],
      followups: ["defence-order", "nato-target", "haushalt-basics"]
    },

    /* ── DEALS / PE ── */
    "ma-steps": {
      section: "deals", title: "Wie eine Übernahme abläuft", q: "Was passiert eigentlich bei einer Übernahme?",
      keywords: ["übernahme", "fusion", "merger", "acquisition", "m&a", "kauf", "deal", "closing", "signing", "target", "käufer"],
      kurz: "Bei einer Übernahme kauft ein Unternehmen (Käufer) ein anderes (Target). Zuerst wird verhandelt und unterschrieben, danach folgen Zustimmungen. Erst beim Closing wird bezahlt und übergeben.",
      warum: [
        "Käufer und Target einigen sich auf einen Preis und unterschreiben (Signing).",
        "Aktionäre und Behörden müssen zustimmen, bei Börsenfirmen oft auch die Aufsicht.",
        "Der Käufer sichert die Finanzierung, mit Eigenmitteln, Krediten oder Aktien.",
        "Beim Closing wechselt das Eigentum."
      ],
      beispiel: "Ein Käufer zahlt 1,9 Mrd. $ für ein Unternehmen mit 100 Mio. Aktien: Das sind rund 19 $ je Aktie, häufig mit Aufschlag auf den Börsenkurs.",
      wichtig: "Solange das Closing aussteht, kann der Deal noch scheitern oder angepasst werden.",
      terms: ["closing", "enterprise-value"],
      related: ["ev-ebitda", "deal-risks", "take-private-why", "lbo"],
      followups: ["ev-ebitda", "deal-risks", "take-private-why", "lbo", "pe-money"]
    },
    "ev-ebitda": {
      section: "deals", title: "EV und EBITDA", q: "Was bedeutet „Enterprise Value“ und wie bewertet man einen Kaufpreis?",
      keywords: ["enterprise value", "ev", "ebitda", "ev/ebitda", "bewertung", "multiple", "kaufpreis", "unternehmenswert"],
      kurz: "Der Enterprise Value (EV) ist der Preis für das ganze Geschäft. Um ihn zu beurteilen, wird er oft mit dem EBITDA verglichen: EV/EBITDA zeigt, das Wievielfache des operativen Gewinns bezahlt wird.",
      warum: [
        "EV = Marktwert des Eigenkapitals + Nettoschulden.",
        "Das EBITDA ist ein einfaches Maß für den operativen Gewinn.",
        "Ein hoher Multiplikator heißt: Der Käufer zahlt viel im Verhältnis zum heutigen Gewinn, meist aufgrund hoher Wachstumserwartungen."
      ],
      beispiel: "EV 1.000 Mio. €, EBITDA 100 Mio. € → EV/EBITDA = 10x. Bei 25 Mio. € EBITDA wäre es 40x.",
      wichtig: "Multiples helfen, ähnliche Deals zu vergleichen. Sie ersetzen aber keine Analyse der Risiken.",
      terms: ["enterprise-value", "ebitda"],
      related: ["ma-steps", "lbo", "pe-money"],
      followups: ["ma-steps", "lbo", "pe-money", "deal-risks"]
    },
    "lbo": {
      section: "pe", title: "Leveraged Buyout", q: "Was ist ein Leveraged Buyout?",
      keywords: ["lbo", "leveraged buyout", "buyout", "fremdkapital", "schulden", "kaufen", "finanzinvestor", "hebel"],
      kurz: "Bei einem Leveraged Buyout wird ein Unternehmen gekauft, wobei ein erheblicher Teil des Kaufpreises durch Fremdkapital finanziert wird. Die Schulden werden dem gekauften Unternehmen aufgeladen.",
      warum: [
        "Warum? Mit wenig Eigenkapital lassen sich größere Firmen kaufen, und die Rendite auf das eingesetzte Eigenkapital steigt, wenn es gut läuft.",
        "Wer gibt den Kredit? Banken und zunehmend Private-Credit-Fonds.",
        "Wie verdient der Fonds? Durch Gewinnwachstum, Schuldenabbau und einen späteren Verkauf oder Börsengang.",
        "Unterschied zur normalen Übernahme: Ein LBO nutzt gezielt hohe Schulden als Hebel.",
        "Risiko: Steigen Zinsen oder sinken Gewinne, wird die Schuldenlast zum Problem."
      ],
      beispiel: "Kauf für 1.000 Mio. €: 400 Mio. € Eigenkapital, 600 Mio. € Kredit. Steigt der Wert auf 1.400 Mio. € und sind 100 Mio. € Schulden getilgt, gehören dem Fonds 1.400 − 500 = 900 Mio. € (Eigenkapital-Gewinn 125 %).",
      wichtig: "LBOs reagieren empfindlich auf Zinsen: Bei höheren Zinsen sinkt der Gewinn nach Zinskosten.",
      terms: ["lbo", "private-equity", "ebitda", "sofr"],
      related: ["pe-money", "pc-rates", "private-credit-what", "take-private-why"],
      followups: ["pe-money", "pc-rates", "private-credit-what", "take-private-why", "deal-risks"]
    },
    "pe-money": {
      section: "pe", title: "Wie Private Equity verdient", q: "Wie verdient ein Private-Equity-Fonds Geld?",
      keywords: ["private equity", "pe", "fonds", "verdienen", "gebühren", "carried interest", "exit", "rendite", "kkr", "blackstone", "apollo"],
      kurz: "PE-Fonds verdienen über den Wertzuwachs der gekauften Unternehmen und über Gebühren. Sie kaufen, entwickeln das Unternehmen und verkaufen es nach einigen Jahren (Exit).",
      warum: [
        "Sie sammeln Geld von Großanlegern (Pensionskassen, Stiftungen, Versicherern).",
        "Sie kaufen Firmen, oft mit Krediten (LBO).",
        "Sie steigern Gewinne, senken Kosten und wachsen durch Zukäufe.",
        "Beim Exit (Verkauf, Börsengang) fließt Geld zurück. Der Fonds bekommt meist eine jährliche Gebühr und einen Gewinnanteil."
      ],
      beispiel: "Ein 5-Mrd.-Fonds kauft Firmen. Verdoppelt sich der Wert in 5 Jahren, geht der Gewinn nach Abzug von Gebühren und Gewinnanteil an die Anleger.",
      wichtig: "Fundraising und Exits sind wichtige Gradmesser für den Zustand der Branche.",
      terms: ["private-equity", "ipo", "lbo"],
      related: ["lbo", "take-private-why", "ma-steps"],
      followups: ["lbo", "take-private-why", "ma-steps", "pc-rates"]
    },
    "take-private-why": {
      section: "pe", title: "Take-private", q: "Warum nehmen Investoren Firmen von der Börse?",
      keywords: ["take-private", "delisting", "börse", "rückzug", "übernahme", "baldwin", "finanzinvestor"],
      kurz: "Bei einem Take-private kaufen Investoren alle Aktien eines börsennotierten Unternehmens und nehmen es von der Börse. Die Aktionäre bekommen einen Preis, meist mit Aufschlag.",
      warum: [
        "Investoren halten die Firma für unterbewertet.",
        "Ohne Börse ist der Druck durch Quartalszahlen und Aktienkurs geringer.",
        "Umbauten lassen sich leichter durchführen.",
        "Die Finanzierung erfolgt oft mit Krediten, das ist dann ein LBO."
      ],
      beispiel: "Börsenkurs 20 $, Angebot 26 $ (30 % Aufschlag). Aktionäre erhalten 26 $ je Aktie.",
      wichtig: "Nach dem Take-private gibt es weniger öffentliche Informationen über das Unternehmen.",
      terms: ["take-private", "lbo", "private-equity"],
      related: ["lbo", "pe-money", "deal-risks"],
      followups: ["lbo", "pe-money", "deal-risks"]
    },
    "deal-risks": {
      section: "deals", title: "Risiken bis zum Closing", q: "Welche Risiken bestehen bis zum Closing eines Deals?",
      keywords: ["risiken", "closing", "genehmigung", "kartell", "behörden", "deal", "scheitern", "aktionäre"],
      kurz: "Zwischen Vertragsunterschrift und Closing kann viel passieren: Behörden können Auflagen machen oder blockieren, Aktionäre ablehnen, Finanzierungen platzen oder die Lage sich ändern.",
      warum: [
        "Kartellbehörden prüfen, ob der Wettbewerb leidet.",
        "Aktionäre müssen oft zustimmen.",
        "Kreditgeber müssen liefern. Steigen die Zinsen, wird die Finanzierung teurer.",
        "Große Kursbewegungen oder schlechte Geschäftszahlen können Verhandlungen erschweren."
      ],
      beispiel: "Der Kurs der Zielfirma liegt knapp unter dem Angebotspreis. Das nennt man Spread und zeigt, wie sicher der Markt den Abschluss einschätzt.",
      wichtig: "Deshalb gelten angekündigte Deals als „pending“, bis das Closing erfolgt.",
      terms: ["closing"],
      related: ["ma-steps", "ev-ebitda"],
      followups: ["ma-steps", "ev-ebitda", "lbo"]
    },

    /* ── PRIVATE CREDIT ── */
    "private-credit-what": {
      section: "credit", title: "Private Credit", q: "Was ist Private Credit?",
      keywords: ["private credit", "direct lending", "private debt", "kreditfonds", "unternehmenskredite", "bdc"],
      kurz: "Bei Private Credit vergeben Fonds statt Banken Kredite an Unternehmen. Die Kredite werden nicht an der Börse gehandelt, meist haben sie variable Zinsen und gehen an mittelgroße Firmen oder Firmen, die übernommen werden.",
      warum: [
        "Banken haben sich aus Teilen der Unternehmensfinanzierung zurückgezogen (Regulierung).",
        "Fonds sammeln Geld von Anlegern, die höhere Zinsen suchen.",
        "Sie vergeben Kredite direkt, schnell und maßgeschneidert.",
        "Dafür bekommen sie höhere Zinsen als bei Bankkrediten, tragen aber mehr Risiko und Illiquidität."
      ],
      beispiel: "Ein Fonds vergibt einen Kredit über 200 Mio. $ für eine Übernahme zu SOFR + 5 %.",
      wichtig: "Private Credit ist inzwischen ein Markt in Billionenhöhe. Seine Gesundheit ist für Firmen, Investoren und die Finanzstabilität relevant.",
      terms: ["direct-lending", "bdc", "sofr", "first-lien", "unitranche"],
      related: ["sofr-spread", "pc-rates", "nonaccrual-default", "redemption-limits", "lbo"],
      followups: ["sofr-spread", "pc-rates", "nonaccrual-default", "redemption-limits"]
    },
    "sofr-spread": {
      section: "credit", title: "SOFR plus Spread", q: "Wie setzt sich der Zins eines Private-Credit-Kredits zusammen?",
      keywords: ["sofr", "spread", "zins", "kreditzins", "variabel", "aufschlag", "referenzzins", "sofr steigt"],
      kurz: "Viele Private-Credit-Kredite haben einen variablen Zins: Referenzzins (SOFR) plus einen festen Aufschlag (Spread). Steigt SOFR, steigt der Zins, den der Kreditnehmer zahlt.",
      warum: [
        "SOFR folgt dem Leitzins der US-Notenbank.",
        "Der Spread ist die Risikoprämie des Kreditgebers und wird beim Kredit festgelegt.",
        "Beim Zinsanstieg zahlt der Kreditnehmer mehr, während der Fonds mehr Zinsen einnimmt."
      ],
      beispiel: "SOFR = 4 %, Spread = 5 % → Kreditzins ≈ 9 %. Steigt SOFR auf 4,25 %, sind es ≈ 9,25 %. Bei 500 Mio. $ Kredit sind das 1,25 Mio. $ mehr Zinsen pro Jahr.",
      wichtig: "Höhere Zinserträge sind gut für Fonds, aber sie belasten Schuldner.",
      terms: ["sofr", "credit-spread", "basispunkt"],
      related: ["pc-rates", "credit-spread-why", "fed-hike", "nonaccrual-default"],
      followups: ["pc-rates", "credit-spread-why", "nonaccrual-default", "fed-hike"]
    },
    "credit-spread-why": {
      section: "credit", title: "Credit Spreads", q: "Was sind Credit Spreads und was verraten sie?",
      keywords: ["credit spread", "credit spreads", "risikoaufschlag", "spread", "kreditrisiko", "ausfallrisiko"],
      kurz: "Ein Credit Spread ist der Zinsaufschlag über einem sicheren Zins. Er misst, wie viel Zusatzverzinsung Anleger für Ausfallrisiko und geringere Handelbarkeit verlangen.",
      warum: [
        "Sicherer Zins (z. B. Staatsanleihe) + Spread = Zins des riskanteren Schuldners.",
        "Steigt der Spread, sehen Anleger mehr Risiko oder wollen mehr Prämie.",
        "Sinkt er, ist der Markt zuversichtlicher."
      ],
      beispiel: "Staatsanleihe 4 %, Firmenkredit 9 % → Spread 5 Prozentpunkte = 500 Basispunkte.",
      wichtig: "Spreads sind ein Frühindikator für Stress in Kreditmärkten.",
      terms: ["credit-spread", "basispunkt"],
      related: ["sofr-spread", "nonaccrual-default"],
      followups: ["sofr-spread", "nonaccrual-default", "pc-rates"]
    },
    "pc-rates": {
      section: "credit", title: "Zinsen und Private Credit", q: "Warum verdient Private Credit bei höheren Zinsen mehr – und wo liegt das Risiko?",
      keywords: ["private credit", "höhere zinsen", "verdient", "sofr", "zinsen", "risiko", "kreditnehmer", "variabel"],
      kurz: "Weil viele Kredite variabel verzinst sind, steigen bei höheren Zinsen die Erträge der Fonds. Gleichzeitig zahlen Kreditnehmer mehr und geraten eher in Schwierigkeiten.",
      warum: [
        "Höherer SOFR → höherer Kreditzins → höhere Einnahmen der Fonds.",
        "Kreditnehmer zahlen mehr Zinsen, ihr freier Cashflow sinkt.",
        "Schwache Firmen können Zinsen schwerer bedienen: Ausfälle und Non-Accruals können steigen.",
        "Der Nettoeffekt hängt von der Qualität der Kredite ab."
      ],
      beispiel: "Ein Kreditnehmer mit 100 Mio. € Cashflow, 600 Mio. € Schulden und 9 % Zins zahlt 54 Mio. € Zinsen. Bei 10 % sind es 60 Mio. €.",
      wichtig: "Deshalb beobachten Anleger neben den Zinserträgen vor allem Ausfälle, Non-Accruals und Rücknahmewünsche.",
      terms: ["sofr", "non-accrual", "default-rate"],
      related: ["sofr-spread", "nonaccrual-default", "redemption-limits", "fed-hike"],
      followups: ["sofr-spread", "nonaccrual-default", "redemption-limits", "software-ai-loans"]
    },
    "nonaccrual-default": {
      section: "credit", title: "Ausfälle und Non-Accruals", q: "Woran erkennt man Stress in Private Credit?",
      keywords: ["non-accruals", "non-accrual", "default rate", "ausfall", "ausfallrate", "stress", "pik", "covenant", "fitch"],
      kurz: "Stress zeigt sich in Kennzahlen: Ausfallraten, Anteil der Non-Accrual-Kredite, Nutzung von PIK-Zinsen und Verletzungen von Kreditauflagen (Covenants).",
      warum: [
        "Ausfallrate: Anteil der Kredite, die nicht mehr wie vereinbart bedient werden.",
        "Non-Accrual: Kredit, dessen Zinsen der Fonds nicht mehr sicher verbucht.",
        "PIK: Zinsen werden dem Kredit zugeschlagen. Das kann anzeigen, dass bar gezahlt nicht mehr möglich ist.",
        "Verschiedene Anbieter messen unterschiedlich, Zahlen sind deshalb nicht direkt vergleichbar."
      ],
      beispiel: "Hat ein Fonds 4 % seiner Kredite zu Anschaffungskosten als Non-Accrual eingestuft, hat er bei 4 von 100 investierten Euro Zweifel an der Zinszahlung.",
      wichtig: "Ein Anstieg der Kennzahlen ist ein Warnsignal, aber kein Beweis für eine Krise. Zahlen einzelner Fonds unterscheiden sich stark.",
      terms: ["non-accrual", "default-rate", "pik", "covenant"],
      related: ["pc-rates", "redemption-limits", "software-ai-loans", "credit-spread-why"],
      followups: ["redemption-limits", "software-ai-loans", "pc-rates", "credit-spread-why"]
    },
    "redemption-limits": {
      section: "credit", title: "Rücknahmen begrenzt", q: "Warum begrenzen Kreditfonds Rücknahmen?",
      keywords: ["rücknahme", "rücknahmen", "redemption", "redemptions", "blue owl", "nav", "abzug", "halbliquide", "fonds"],
      kurz: "Private-Credit-Fonds halten Kredite, die sich nicht schnell verkaufen lassen. Wollen viele Anleger gleichzeitig ihr Geld zurück, begrenzen die Fonds die Auszahlung, meist auf einen Anteil (oft 5 % des Fondswerts je Quartal).",
      warum: [
        "Die Fonds sind „halbliquide“: Anleger können regelmäßig Rücknahmen beantragen, aber nur bis zu einer Grenze.",
        "Kredite lassen sich nur mit Abschlag schnell verkaufen.",
        "Ein Verkauf unter Zeitdruck würde die verbleibenden Anleger benachteiligen.",
        "Deshalb wird gedeckelt, und übrige Anträge werden vertagt."
      ],
      beispiel: "Ein Fonds mit 10 Mrd. $ Wert erhält Anträge über 2 Mrd. $ (20 %). Bei einer 5-%-Grenze zahlt er nur 500 Mio. $ aus.",
      wichtig: "Hohe Rücknahmewünsche zeigen Verunsicherung. Sie bedeuten nicht automatisch, dass die Kredite schlecht sind.",
      terms: ["nav", "bdc", "direct-lending"],
      related: ["nonaccrual-default", "software-ai-loans", "private-credit-what"],
      followups: ["nonaccrual-default", "software-ai-loans", "private-credit-what"]
    },
    "software-ai-loans": {
      section: "credit", title: "Software-Kredite und KI", q: "Warum sind Softwarekredite gerade ein Thema in Private Credit?",
      keywords: ["software", "ki", "ai", "softwarefirmen", "blue owl", "kredite", "disruption", "künstliche intelligenz"],
      kurz: "Softwarefirmen waren für Kreditfonds ein beliebtes Ziel, weil ihre Einnahmen planbar schienen. Nun fürchten Anleger, dass KI diese Geschäftsmodelle stören könnte. Das macht die Rückzahlung unsicherer.",
      warum: [
        "Softwarekredite machen laut Berichten einen großen Teil der Portfolios aus (bei BDCs rund ein Viertel).",
        "Neue KI-Werkzeuge könnten manche Softwareprodukte ersetzen oder Preise drücken.",
        "Anleger fragen deshalb: Können diese Firmen ihre Schulden weiter bedienen?",
        "Manager verweisen darauf, dass bisher nur wenige Kredite tatsächlich ausgefallen sind."
      ],
      beispiel: "Fällt der Umsatz einer Softwarefirma um 20 %, bleibt bei gleichem Schuldendienst weniger Puffer.",
      wichtig: "Es ist ein Beispiel dafür, wie technologischer Wandel Kreditmärkte beeinflussen kann.",
      terms: ["bdc", "non-accrual"],
      related: ["redemption-limits", "nonaccrual-default", "ai-capex"],
      followups: ["redemption-limits", "nonaccrual-default", "ai-capex"]
    },

    /* ── TECHNOLOGIE ── */
    "ai-capex": {
      section: "tech", title: "KI-Infrastruktur", q: "Warum investieren Konzerne Milliarden in KI-Rechenzentren?",
      keywords: ["ki", "ai", "rechenzentren", "data center", "nvidia", "openai", "chips", "investitionen", "gigawatt", "cloud"],
      kurz: "KI-Modelle brauchen enorme Rechenleistung. Konzerne bauen deshalb große Rechenzentren mit Spezialchips und sichern sich Strom. Das kostet Milliarden, in der Hoffnung, damit später Umsatz zu erzielen.",
      warum: [
        "Training und Betrieb von KI-Modellen benötigen viele Chips (GPUs).",
        "Rechenzentren brauchen Fläche, Kühlung und viel Strom (gemessen in Gigawatt).",
        "Die Kosten übersteigen oft, was aktuell mit KI verdient wird.",
        "Deshalb stellt sich die Frage, ob die Nachfrage die Investitionen rechtfertigt."
      ],
      beispiel: "Ein Rechenzentrum mit 1 GW Leistung braucht ungefähr so viel Strom wie ein großes Kraftwerk liefert.",
      wichtig: "Chip-Hersteller, Stromversorger, Kühltechnik und Kreditgeber hängen an diesem Boom. Er beeinflusst auch Übernahmen und Finanzierungen.",
      terms: ["gigawatt", "hyperscaler"],
      related: ["custom-chips", "circular-financing", "software-ai-loans"],
      followups: ["custom-chips", "circular-financing", "software-ai-loans"]
    },
    "custom-chips": {
      section: "tech", title: "Eigene KI-Chips", q: "Warum entwickeln KI-Firmen eigene Chips?",
      keywords: ["chip", "chips", "custom chip", "broadcom", "nvidia", "inferenz", "eigene chips", "jalapeño", "halbleiter"],
      kurz: "Wer viel KI-Rechenleistung braucht, kann mit eigenen Spezialchips Kosten senken und unabhängiger von einem Lieferanten werden. Solche Chips sind oft auf eine bestimmte Aufgabe wie „Inferenz“ (das Anwenden eines Modells) zugeschnitten.",
      warum: [
        "Standard-Chips sind teuer und stark nachgefragt.",
        "Ein auf die eigene Aufgabe zugeschnittener Chip kann effizienter sein.",
        "Es braucht aber Entwicklungsaufwand und Partner für Produktion und Design.",
        "Für Chipkonzerne bedeutet das mehr Wettbewerb."
      ],
      beispiel: "Braucht eine Firma täglich Milliarden Anfragen, spart schon ein Chip mit 20 % weniger Stromverbrauch viel Geld.",
      wichtig: "Der Chip-Wettbewerb bestimmt, wer vom KI-Boom verdient.",
      terms: ["hyperscaler"],
      related: ["ai-capex", "circular-financing"],
      followups: ["ai-capex", "circular-financing"]
    },
    "circular-financing": {
      section: "tech", title: "Zirkuläre Finanzierung", q: "Was bedeutet es, wenn ein Chip-Hersteller seinen Kunden finanziert?",
      keywords: ["finanzierung", "nvidia", "openai", "zirkulär", "künstliche nachfrage", "vendor financing", "kredit", "investition"],
      kurz: "Finanziert ein Lieferant die Käufe seiner Kunden, etwa indem er Kredite garantiert oder investiert, fließt ein Teil des Geldes als Umsatz zu ihm zurück. Kritiker sehen darin das Risiko „künstlicher“ Nachfrage.",
      warum: [
        "Der Kunde hat die Chips noch nicht bezahlt, der Lieferant hilft bei der Finanzierung.",
        "Das lässt Umsätze steigen, kann aber Risiken beim Lieferanten aufbauen.",
        "Befürworter sagen, es beschleunige den Aufbau und die Partner teilen Risiken.",
        "Kritiker fragen, ob die Nachfrage ohne diese Finanzierung so hoch wäre."
      ],
      beispiel: "Ein Hersteller verkauft für 10 Mrd. $ Chips und stellt dem Kunden 5 Mrd. $ Kredit oder Garantien. Bleibt der Kunde zahlungsunfähig, trägt der Lieferant das Risiko.",
      wichtig: "Solche Konstruktionen machen Bewertungen anfällig, wenn die KI-Nachfrage enttäuscht.",
      terms: ["hyperscaler", "gigawatt"],
      related: ["ai-capex", "custom-chips"],
      followups: ["ai-capex", "custom-chips"]
    }
  },

  /* ───────────────────────────── KETTEN (Warum-Kette) ───────────────────────────── */
  chains: {
    "oil-to-markets": {
      title: "Vom Konflikt zur Börse",
      blurb: "Wie ein geopolitischer Konflikt über Öl, Inflation und Zinsen bis zu Aktien und Verbrauchern wirkt.",
      steps: [
        { label: "Konflikt", ref: "why-oil-up-geo" },
        { label: "Ölversorgung", ref: "hormuz" },
        { label: "Ölpreis ↑", ref: "brent-wti" },
        { label: "Inflation ↑", ref: "oil-inflation" },
        { label: "Zentralbanken", ref: "central-banks-why" },
        { label: "Zinsen ↑", ref: "fed-hike" },
        { label: "Finanzmärkte", ref: "rates-stocks" },
        { label: "Unternehmen", ref: "companies-costs" },
        { label: "Verbraucher", ref: "energy-germany" }
      ]
    },
    "nasdaq-why": {
      title: "Warum fällt die Nasdaq?",
      blurb: "Von einem Kursrückgang bis zur geopolitischen Ursache, Schritt für Schritt.",
      steps: [
        { label: "Nasdaq fällt", ref: "index-move" },
        { label: "US-Zinsen ↑", ref: "yield-stocks" },
        { label: "Inflationserwartungen", ref: "inflation-expectations" },
        { label: "Energiepreise", ref: "oil-inflation" },
        { label: "Geopolitik", ref: "why-oil-up-geo" }
      ]
    },
    "rates-to-credit": {
      title: "Vom Zins zum Kreditausfall",
      blurb: "Wie höhere Zinsen bei Private-Credit-Krediten wirken.",
      steps: [
        { label: "Fed erhöht", ref: "fed-hike" },
        { label: "SOFR ↑", ref: "sofr-spread" },
        { label: "Kreditnehmer zahlen mehr", ref: "pc-rates" },
        { label: "Ausfälle & Non-Accruals", ref: "nonaccrual-default" },
        { label: "Rücknahmen", ref: "redemption-limits" }
      ]
    }
  },

  // Häufig gestellte Fragen für die Startseite und Suchvorschläge
  examples: [
    "Warum ist der DAX heute gefallen?",
    "Warum kann ein Konflikt den Ölpreis erhöhen?",
    "Was ist ein Leveraged Buyout?",
    "Was bedeutet eine Rendite von 5 %?",
    "Warum verdient Private Credit bei höheren Zinsen mehr?",
    "Was ist die Straße von Hormus?"
  ]
};
