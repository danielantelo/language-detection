const glob = require('glob')
const path = require('path')
const fs = require('fs')
const profile = require('../src/utils/profiler')

const profiles = {}
glob('./data/resources/*.txt', (er, files) => {
  files.forEach(file => {
    const lang = path.basename(file, '.txt')
    const text = fs.readFileSync(file, 'utf8')
    profiles[lang] = profile(text)
  })
  fs.writeFileSync('./data/languageProfiles.json', JSON.stringify(profiles))
})
