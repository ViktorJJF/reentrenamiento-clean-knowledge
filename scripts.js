/**
 * DEBES REALIZAR LA SOLICITUD DE DOWNLOAD CSV, CONVERTIR A JSON Y VENIR ACÁ
 */

const fs = require("fs");
const { removeAccents } = require("./utils");

function addIntentKeyword(intentName, keywords) {
  const intents = JSON.parse(fs.readFileSync("./knowledge.json"));
  // buscando frases entrenamiento con palabra clave
  const newIntent = {
    intent: intentName,
    examples: [],
  };
  intents.map((intent, intentIndex) => {
    let examples = intent.examples;
    examples.map((example, index) => {
      if (
        keywords.every((keyword) =>
          removeAccents(example).toLowerCase().includes(keyword)
        )
      ) {
        newIntent.examples.push(example);
        examples[index] = null;
      }
    });
    intents[intentIndex].examples = examples.filter((example) => example);
  });
  // pusheando nuevo intent
  let intentExist = intents.find((intent) => intent.intent === intentName);
  if (intentExist) {
    intentExist.examples.push(...newIntent.examples);
  } else {
    intents.push(newIntent);
  }
  fs.writeFileSync("./knowledge.json", JSON.stringify(intents));
  console.log("listo!!");
}

module.exports = {
  addIntentKeyword,
};
