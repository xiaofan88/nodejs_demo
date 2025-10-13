const greet = require('./index');

test('returns greeting', () => {
  expect(greet('Xiaofan')).toBe('Hello, Xiaofan!');
});
