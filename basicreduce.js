const countWords = inputWords => inputWords.reduce((previous, current) => {
  previous[current] =   ++previous[current] || 1;
  return previous;
}, {});

module.exports = countWords;