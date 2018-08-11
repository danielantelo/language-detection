const defaultReducers = [
  {
    regex: /[ñ]+/i,
    languages: ['es', 'gn', 'gl']
  },
  {
    regex: /[ü]+/i,
    languages: ['es', 'tr', 'fr', 'hu', 'et', 'de', 'sv']
  },
  {
    regex: /[ä]+/i,
    languages: ['is', 'tr', 'hu', 'et', 'de', 'sv', 'sk']
  },
  {
    regex: /[á|é|í|ó|ú]+/i,
    languages: ['fr', 'es', 'it', 'cn', 'nl', 'fo', 'is', 'pt', 'vi', 'cy', 'el']
  },
  {
    regex: /[â|ê|î]+/i,
    languages: ['fr', 'it', 'pt', 'ro', 'ru', 'hr', 'tr', 'vi']
  },
  {
    regex: /[ô|û]+/i,
    languages: ['fr', 'it', 'pt', 'ro', 'ru', 'hr', 'tr', 'vi']
  },
  {
    regex: /[ö]+/i,
    languages: ['nb', 'nn']
  }
]

module.exports = (text, reducers = defaultReducers) => {
  let reduced;
  reducers.forEach((current) => {
    if (!current.regex.test(text)) {
      return
    }
    const currentLanguages = new Set(current.languages)
    if (!reduced) {
      reduced = currentLanguages
    } else {
      reduced = new Set([...reduced].filter(lang => currentLanguages.has(lang)));
    }
  })

  return reduced ? Array.from(reduced) : []
}
