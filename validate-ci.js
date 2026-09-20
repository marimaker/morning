// Prüft die neue Ausgabe auf GitHub (Node). Aufruf: EXPECTED_DATE=YYYY-MM-DD node validate-ci.js [datei]
const fs = require("fs"), vm = require("vm");
function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  return ctx.window;
}
const validateEdition = require("./validate-core.js");
const K = load("knowledge.js").KNOWLEDGE;
const E = load(process.argv[2] || "edition-data.new.js").EDITION;
const r = validateEdition(K, E, process.env.EXPECTED_DATE);
if (r.errs.length) {
  console.error("Validierung fehlgeschlagen (" + r.errs.length + "):\n" + r.errs.slice(0, 30).join("\n"));
  process.exit(1);
}
console.log("OK " + E.stories.length + " Meldungen, " + r.n + " Verweise, " + E.date);
