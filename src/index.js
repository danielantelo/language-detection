const profile = require('./utils/profiler')
const reducer = require('./utils/reducer')
const defaultLanguageProfiles = require('../data/languageProfiles.json')

module.exports = (text, opts) => {
  const { languageProfiles = defaultLanguageProfiles, reducers } = opts
  //const languages = reducer(text, Object.keys(profiles), reducers)
  const languages = Object.keys(languageProfiles)
  const inputProfile = profile(text)
  const scores = {}

  inputProfile.forEach((ngram, index) => {
    languages.forEach(language => {
      const found = languageProfiles[language].findIndex(entry => entry.token === ngram.token)
      const penalty = found ? Math.abs(found - index) : 1000
      language in scores ? (scores[language] -= penalty) : (scores[language] = 0 - penalty)
    })
  })

  const sorted = Object.keys(scores)
    .map(language => ({ language: language, score: scores[language] }))
    .sort((first, second) => first.score - second.score)

  return {
    language: sorted[0].language
  }
}
