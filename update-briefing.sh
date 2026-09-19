#!/bin/bash
# Erzeugt edition-data.js täglich neu (Vorschlag: 06:30 Uhr Europe/Berlin per launchd).
# Manuell testen: ./update-briefing.sh
set -u
cd "$(dirname "$0")" || exit 1
export PATH="$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

mkdir -p logs backups
TODAY="$(date +%F)"
LOG="logs/update-$TODAY.log"
notify() { osascript -e "display notification \"$1\" with title \"MORNING\"" >/dev/null 2>&1 || true; }

{
  echo "=== $(date '+%F %T %Z') Start ==="
  rm -f edition-data.new.js
  perl -e 'alarm shift; exec @ARGV' 1500 \
    claude -p "$(cat UPDATE-PROMPT.md)" \
      --allowedTools "WebSearch,WebFetch,Read,Write" \
      --permission-mode acceptEdits \
      --no-session-persistence
  echo "claude beendet mit Status $?"

  if [ ! -f edition-data.new.js ]; then
    echo "FEHLER: edition-data.new.js wurde nicht erzeugt. Alte Ausgabe bleibt aktiv."
    notify "Update fehlgeschlagen, alte Ausgabe bleibt. Siehe logs/"
    exit 1
  fi
  if RESULT="$(EXPECTED_DATE="$TODAY" osascript -l JavaScript validate.js 2>&1)"; then
    cp edition-data.js "backups/edition-data-$(date +%F-%H%M).js" 2>/dev/null
    mv edition-data.new.js edition-data.js
    find backups -name 'edition-data-*.js' -mtime +14 -delete 2>/dev/null
    echo "Aktualisiert: $RESULT"
    notify "Deine Morning Edition ist bereit."
  else
    echo "FEHLER: $RESULT"
    echo "Neue Datei bleibt als edition-data.new.js zur Prüfung liegen. Alte Ausgabe bleibt aktiv."
    notify "Update ungültig, alte Ausgabe bleibt. Siehe logs/"
    exit 1
  fi
} >> "$LOG" 2>&1
