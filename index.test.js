const randomInteger = require('./index.js');

test('randomInteger return type to be number', () => {
  expect(typeof randomInteger()).toBe('number');
});

test('randomInteger with number min 0 return type to be number', () => {
  expect(typeof randomInteger(0)).toBe('number');
});

test('randomInteger with number min 0 and max 10 return type to be number', () => {
  expect(typeof randomInteger(0, 10)).toBe('number');
});

test('randomInteger with number min 0 and max 10 less than 11', () => {
  expect(randomInteger(0, 10)).toBeLessThan(11);
});

test('randomInteger with string to thow error', () => {
  expect(() => {randomInteger('string')}).toThrowError();
});