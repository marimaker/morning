# MORNING – Nachrichten verstehen

Ein tägliches Morning Briefing zu Märkten, Wirtschaft, Politik, Defence, Deals und Private Credit.
Jede Meldung ist der Anfang eines Lernpfads: Was ist passiert? Warum? Was bedeutet das? Dazu Fachbegriffe,
Warum-Ketten und ein 5-Fragen-Quiz.

**Kein Framework, kein Build:** reines HTML, CSS und JavaScript. Einfach `index.html` öffnen.

## Aufbau

| Datei | Zweck |
|---|---|
| `index.html`, `styles.css`, `app.js` | Oberfläche und Logik |
| `knowledge.js` | Dauerhafte Wissensbasis (Fachbegriffe, Erklärungen, Ketten) |
| `edition-data.js` | **Tägliche Ausgabe** (Meldungen, Zahlen, Quiz), wird jeden Morgen neu erzeugt |
| `manifest.webmanifest`, `sw.js`, `icons/` | Installierbare App (PWA), auch offline nutzbar |
| `.github/workflows/daily.yml` | **Tägliche Aktualisierung auf GitHub** (ca. 06:30 Berliner Zeit), Mac nicht nötig |
| `UPDATE-PROMPT.md`, `validate-core.js`, `validate-ci.js` | Anweisung und Prüfung der neuen Ausgabe |
| `validate.js`, `update-briefing.sh` | Manuelle Aktualisierung auf dem Mac (optional) |

## Hinweise

- Keine Anlageberatung. Zusammenfassung aus veröffentlichten Quellen, Zahlen ohne Gewähr.
- Jede Aussage ist als FAKT, EINORDNUNG, POSITION oder NOCH UNBESTÄTIGT gekennzeichnet, jede Meldung nennt Quellen.
- Die Suche greift auf die vorbereitete Wissensbasis zu und ist kein Live-Chatbot.
- Keine Passwörter oder Schlüssel ins Repository legen (siehe `.gitignore`).

## Tägliche Aktualisierung

Ein GitHub-Workflow startet jeden Morgen, lässt Claude recherchieren, prüft die neue `edition-data.js` und veröffentlicht sie.
Benötigt wird das Repository-Secret `CLAUDE_CODE_OAUTH_TOKEN`. Manuell starten: Actions, „Tägliche Ausgabe“, „Run workflow".
GitHub-Zeitpläne können verspätet starten.
