'use strict';
module.exports = function randomInteger(min, max) {

    if (min === undefined) {
        min = 0;
    }

    if (max === undefined) {
        max = Number.MAX_SAFE_INTEGER;
    }

	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new TypeError('Expected all arguments to be numbers');
	}

    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};