module.exports = text => {
  return (
    text
      // remove all numbers
      .replace(/[0-9]/g, ' ')
      // remove all punctuation except apostrophes
      .replace(/[^\w\s']|_/g, ' ')
      // remove duplicate spaces
      .replace(/\s+/g, ' ')
      .toLowerCase()
      .trim()
  )
}
