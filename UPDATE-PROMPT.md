Du aktualisierst die tägliche Ausgabe der Nachrichten-Plattform „MORNING“ (aktuelles Verzeichnis). Arbeite ohne Rückfragen.

## Aufgabe
1. Ermittle das heutige Datum. `date` in der neuen Datei ist YYYY-MM-DD, `dateLabel` der deutsche Langtext (z. B. „Montag, 21. September 2026“), `updatedLabel` „Recherchestand TT.MM.JJJJ“.
2. Lies `edition-data.js` (Struktur und Ton als Vorlage) und `knowledge.js` (dauerhafte Wissensbasis: Fachbegriffe `terms`, Erklärungen `explainers`, Ketten `chains`). `knowledge.js` und `app.js`, `styles.css`, `index.html` werden NICHT verändert.
3. Recherchiere mit WebSearch (und WebFetch, wo erreichbar; bei 403 andere Quellen) die aktuelle Nachrichtenlage: Märkte (DAX, S&P 500, Nasdaq, Euro Stoxx 50, Dow, Rendite 10J USA und Bund, EUR/USD, Gold, Brent, Bitcoin), Wirtschaft (Inflation, Zentralbanken, Konjunktur), Deutschland (Bundesregierung, Haushalt, Rente, Wahlen), International und Geopolitik, Defence, Deals/M&A/Private Equity, Private Credit, Technologie, Energie. Bevorzuge Primärquellen (Zentralbanken, Behörden, Unternehmensmitteilungen), dann etablierte Agenturen und Wirtschaftsmedien.
4. Schreibe die neue Fassung nach `edition-data.new.js` (nicht direkt nach edition-data.js).

## Struktur (wie in der Vorlage)
- `top`: 3–4 Kernaussagen mit `ref: "s:N"`.
- `strip` und `numbers`: 9 Zahlen (dax, sp500, nasdaq, eurusd, ust10, bund10, gold, brent, bitcoin; du darfst ids ergänzen, z. B. eurostoxx50). Jede Zahl: label, value, change, dir (up/down/flat), asof, means, compare[], moved{intro,items[]}, important[{area,text,ref}], source{title,url}, optional whyRef, story.
- `stories`: 15 Meldungen (Gewichtung nach Nachrichtenlage: 2–3 Wirtschaft, 3 Märkte, 2 Deutschland, 2 International/Geopolitik, 1–2 Defence, 1–2 M&A/PE/Private Credit, 1 Technologie, 1 Energie). Jede Meldung: id, cats[], when, headline, sec30, blocks[{h, items[{tag,text,ask[]}]}], reaction, terms[], followups[], sources[], optional deal{…} oder widget:"sofr".
  - Deutsche Politik: neutral, ohne Wertung. Blöcke: Was wurde beschlossen/vorgeschlagen? Was ändert sich konkret? Warum? Wer unterstützt es und womit? Wer kritisiert es und womit? Welche Auswirkungen werden diskutiert?
  - International/Geopolitik: 30 Sekunden, Warum wichtig, Wer ist beteiligt, Historischer Hintergrund, Wirtschaftliche Auswirkungen.
  - Deals: `deal`-Karte (value, buyer, target, sector, type). Angaben, die nicht in den Quellen stehen (Finanzierung, Bewertung, Banken, Zeitplan), ausdrücklich als „nicht in den Quellen genannt“ mit tag "unbestaetigt" ausweisen.
- Jeder `item` MUSS ein `tag` haben: "fakt" (belegt), "einordnung" (deine Erklärung/Deutung), "position" (Aussage einer Quelle oder eines Akteurs, als solche formuliert), "unbestaetigt".
- `ask`-Chips unter wichtigen Aussagen: {label, ref}. Erlaubte refs: "e:ID" (Erklärung aus knowledge.js), "t:ID" (Begriff), "n:ID" (Zahl aus numbers), "chain:ID", "s:N" (Meldung 1–15). Verweise NUR auf existierende IDs.
- `context`: „Aktueller Zusammenhang“ für Erklärungen (Schlüssel = Erklärungs-ID aus knowledge.js): {tag, story, text}. Aktualisiere alle, die heute einen konkreten Bezug haben, und entferne veraltete.
- `quiz`: genau 5 Fragen, gemischt Fakten und Zusammenhänge (auch „Angenommen …, was wird unter sonst gleichen Bedingungen wahrscheinlicher?“). Jede: topic, type, story (1–15), q, options (genau 4, unterschiedlich), answer (Index 0–3, variiere), explain (1–2 Sätze). Nur Stoff, der in den Meldungen/Erklärungen vorkommt.

## Regeln
- Deutsch, klar und einsteigerfreundlich, „du“-Ansprache. Kein Bewerten politischer Entscheidungen als gut oder schlecht.
- Überschriften und Zusammenfassungen sind neutral formuliert. Keine wertenden Begriffe wie „Krise“, „Chaos“, „Streit“ oder „Debakel“ in eigener Formulierung. Solche Begriffe nur, wenn sie ausdrücklich als Aussage einer Quelle oder eines Akteurs gekennzeichnet sind (tag "position").
- Nur Fakten aus heutigen Recherche-Ergebnissen. Nichts erfinden. Keine Kausalität behaupten, die keine Quelle nennt: schreibe „Marktbeobachter nennen …“. Sinngemäße Übersetzungen nicht als wörtliches Zitat in Anführungszeichen setzen.
- Widersprüchliche Angaben kennzeichnen (tag "unbestaetigt"). Am Wochenende sind Börsen geschlossen: Zahlen sind Freitagsschluss, `marketNote` sagt das.
- Jede Meldung hat 2–5 echte Quellen-URLs aus deinen Suchergebnissen.
- Datei muss gültiges JavaScript sein (`window.EDITION = {…};`), Anführungszeichen in Texten korrekt maskieren.

## Abschluss
Antworte nur mit einer Zeile: „Fertig: <n> Meldungen, <m> Zahlen für <Datum>.“
