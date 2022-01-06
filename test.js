import randomInteger from './index.js';
import test from 'ava';

test('randomInteger return type to be number', t => {
	t.is(typeof randomInteger(), 'number');
});

test('randomInteger with number min 0 return type to be number', t => {
	t.is(typeof randomInteger(0), 'number');
});

test('randomInteger with number min 0 and max 10 return type to be number', t => {
	t.is(typeof randomInteger(0, 10), 'number');
});

test('randomInteger with number min 0 and max 10 less than 11', t => {
	t.true(randomInteger(0, 10) < 11);
});

test('randomInteger with string to thow error', t => {
  const error = t.throws(() => {
		randomInteger('string')
	}, {instanceOf: TypeError});

	t.is(error.message, 'Expected all arguments to be numbers');
});