// Prüft edition-data.new.js gegen knowledge.js (macOS).
// Aufruf: EXPECTED_DATE=YYYY-MM-DD osascript -l JavaScript validate.js
ObjC.import("Foundation");
function read(p) {
  var s = $.NSString.stringWithContentsOfFileEncodingError(p, $.NSUTF8StringEncoding, null);
  if (!s || s.isNil()) throw new Error("Datei nicht lesbar: " + p);
  return s.js;
}
var dir = $.NSFileManager.defaultManager.currentDirectoryPath.js;
var expected = $.NSProcessInfo.processInfo.environment.objectForKey("EXPECTED_DATE").js;
var window = {};
eval(read(dir + "/validate-core.js"));
eval(read(dir + "/knowledge.js"));
var K = window.KNOWLEDGE;
eval(read(dir + "/edition-data.new.js"));
var E = window.EDITION;
var r = validateEdition(K, E, expected);
if (r.errs.length) throw new Error("Validierung fehlgeschlagen (" + r.errs.length + "): " + r.errs.slice(0, 12).join(" | "));
"OK " + E.stories.length + " Meldungen, " + r.n + " Verweise, " + E.date;
