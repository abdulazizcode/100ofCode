const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  return wordArray.length;
}

const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  let totalLetters = 0;
  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }
  return totalLetters;
}


const getAverageWordLength = (stringToTest) => {
  return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
}

const printStringStats = (stringToTest) => {
  console.log({
    wordCount: getWordCount(stringToTest),
    letterCount: getLetterCount(stringToTest),
    averageWordLength: getAverageWordLength(stringToTest)
  })
}
