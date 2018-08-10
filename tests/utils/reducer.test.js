const reduce = require('../../src/utils/reducer')

test('reduces texts with ñ to spanish', () => {
  expect(reduce('bua niÑo')).toEqual(['es'])
})

test('reduces texts with ñ to spanish', () => {
  expect(reduce('bua niÑo')).toEqual(['es'])
})
