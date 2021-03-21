const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArrayToReturn = [];

  for (let tutorial of tutorials) {
    let valueFromFunc = titleCaseText(tutorial);
    let joined = valueFromFunc.join(' ');
    newArrayToReturn.push(joined);
  }
  return newArrayToReturn;
}

function titleCaseText(text) {
  let arrayToReturn = [];
  let newArrayWords = text.split(' ');
  for (let word of newArrayWords) {
    let capitalizedLetter = word.charAt(0).toUpperCase();
    let remainingPart = word.slice(1);
    let newWord = capitalizedLetter + remainingPart;
    arrayToReturn.push(newWord);
  }
  return arrayToReturn;
}

