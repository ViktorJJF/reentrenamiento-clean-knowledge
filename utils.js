function isNumeric(str) {
  str = str
    .trim()
    .replace(/[`´~!@#$%^&*()_|+\-=¿?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .replace(/ /g, "");
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
function hasWhiteSpace(s) {
  return s.indexOf(" ") >= 0;
}

function checkLogPhrase(phrase) {
  phrase = phrase.trim().toLowerCase();
  if (
    phrase.includes("mi nombre es") ||
    phrase.includes("sí, quiero continuar") ||
    // phrase.includes("-") ||
    phrase.includes("_") ||
    phrase.includes("@") ||
    phrase.includes("#") ||
    phrase.includes("horario am") ||
    phrase.includes("horario pm") ||
    phrase.includes("lo antes posible") ||
    phrase.includes("contactar ahora") ||
    phrase.includes("contactar ahora") ||
    (phrase.includes("hola") && phrase.length < 22) ||
    isNumeric(phrase) ||
    phrase.length < 13 ||
    !hasWhiteSpace(phrase)
  ) {
    return false;
  } else return true;
}

function removeAccents(str) {
  var accents =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  var accentsOut =
    "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  str = str.split("");
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join("");
}

module.exports = {
  checkLogPhrase,
  removeAccents,
};
