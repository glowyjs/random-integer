export default function randomInteger(min, max) {
    if (min === undefined) {
        min = Number.MIN_SAFE_INTEGER;
    }
    if (max === undefined) {
        max = Number.MAX_SAFE_INTEGER;
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
		throw new TypeError('Expected all arguments to be numbers.');
	}
    if (min > max) {
		throw new TypeError('Min cannot be greater than Max.');
	}
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};