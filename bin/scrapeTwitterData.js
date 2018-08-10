const fs = require('fs')
const parse = require('csv-parse')
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  bearer_token: process.env.TWITTER_TOKEN,
})

const getTweetText = id => {
  client.get(`statuses/show/${id}`, tweet => {
    console.log(tweet)
  })
}

const contents = {}
fs.createReadStream('./data/twitter/resource.tsv')
  .pipe(
    parse({
      delimiter: '\t',
    })
  )
  .on('data', row => {
    const lang = row[0]
    const twitterId = row[1]
    const content = getTweetText(twitterId)
    lang in contents
      ? (contents[lang] = `${contents[lang]} ${content}`)
      : (contents[lang] = content)
  })
  .on('end', () => {
    Object.keys(content).forEach(lang => {
      const data = content[lang]
      fs.writeFile(`./data/twitter/${lang}.txt`, data)
    })
  })
