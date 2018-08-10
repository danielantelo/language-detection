const getNgrams = require('./ngrams')

const sortToken = (first, second) => {
  // order desc by count, then token length and finally alphabetically
  if (second.count === first.count) {
    if (second.token.length === first.token.length) {
      return second.token > first.token ? -1 : 1
    } else {
      return second.token.length - first.token.length
    }
  }
  return second.count - first.count
}

module.exports = (text, top = 300) => {
  return [...getNgrams(text, 2), ...getNgrams(text, 3), ...getNgrams(text, 4)]
    .sort(sortToken)
    .slice(0, top)
}
