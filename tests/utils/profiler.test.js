const profile = require('../../src/utils/profiler')

test('profile text', () => {
  expect(profile('hello worldy world', 16)).toEqual([
    { token: '___w', count: 2 },
    { token: '__wo', count: 2 },
    { token: '_wor', count: 2 },
    { token: 'orld', count: 2 },
    { token: 'worl', count: 2 },
    { token: '__w', count: 2 },
    { token: '_wo', count: 2 },
    { token: 'orl', count: 2 },
    { token: 'rld', count: 2 },
    { token: 'wor', count: 2 },
    { token: '_w', count: 2 },
    { token: 'ld', count: 2 },
    { token: 'or', count: 2 },
    { token: 'rl', count: 2 },
    { token: 'wo', count: 2 },
    { token: '___h', count: 1 },
  ])
})
