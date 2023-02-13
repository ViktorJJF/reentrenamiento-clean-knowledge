const data = require("./knowledge.json");
const axios = require("axios");

async function getTopWordPairsWithCount(array) {
  try {
    const response = await axios.post(
      "https://Training.viktorjjf.repl.co/clustering",
      { phrases: array, limit: 90 }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// function top10WordPairsWithCount(array) {
//   const stopWords = [
//     "de",
//     "la",
//     "que",
//     "el",
//     "en",
//     "y",
//     "a",
//     "los",
//     "del",
//     "se",
//   ];

//   let wordMap = {};
//   array.forEach((word) => {
//     let words = word.toLowerCase().split(" ");
//     for (let i = 0; i < words.length - 1; i++) {
//       for (let j = i + 1; j < words.length; j++) {
//         if (!stopWords.includes(words[i]) && !stopWords.includes(words[j])) {
//           let wordPair = `${words[i]} ${words[j]}`;
//           if (!wordMap[wordPair]) {
//             wordMap[wordPair] = 1;
//           } else {
//             wordMap[wordPair]++;
//           }
//         }
//       }
//     }
//   });

//   let wordPairsWithCount = Object.entries(wordMap)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 10)
//     .map((pair) => {
//       return { words: pair[0], count: pair[1] };
//     });
//   return wordPairsWithCount;
// }

(async () => {
  let result = await getTopWordPairsWithCount(data[0].examples);
  console.log(result);
})();
