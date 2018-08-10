const defaultReducers = [
  {
    regex: /[ñ]+/i,
    languages: ['es']
  },
  {
    regex: /[é]+/i,
    languages: ['fr', 'es']
  },
  {
    regex: /[â|ê|î|ô|û]+/i,
    languages: ['fr']
  }
]
module.exports = (text, allLanguages, reducers = defaultReducers) => {
  const reduced = reducers.reduce((acc, current) => {
    if (current.regex.test(text)) {
      acc.push(...current.languages)
    }
    return acc;
  }, [])

  return reduced.length ? reduced.filter((item, pos, self) => self.indexOf(item) == pos) : allLanguages
}
