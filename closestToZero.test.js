const test = require('ava');
const casual = require('casual');

const closestToZero = require('./closestToZero.js');

test('Statement', t => {
	let result = closestToZero([8, 5, 10]);
	t.is(result, 5, '[8, 5, 10]');
	result = closestToZero([5, 4, -9, 6, -10, -1, 8]);
	t.is(result, -1, '[5, 4, -9, 6, -10, -1, 8]');
	result = closestToZero([8, 2, 3, -2]);
	t.is(result, 2, '[8, 2, 3, -2]');
});

test('Positive and negative orders', t => {
	let result = closestToZero([-2, -2, 2]);
	t.is(result, 2, '[-2, -2, 2]');
	result = closestToZero([2, -2, -2]);
	t.is(result, 2, '[2, -2, -2]');
});

test('Floats', t => {
	let result = closestToZero([-2.5, -1, 0.25, 6]);
	t.is(result, 0.25, '[-2.5, -1, 0.25, 6]');
});

test('Zeros, empty arrays and no params', t => {
	let result = closestToZero([0, 0, 2, 3, 0]);
	t.is(result, 2, '[0, 0, 2, 3, 0]');
	result = closestToZero([]);
	t.is(result, 0, '[]');
	result = closestToZero();
	t.is(result, 0, 'undefined');
});

test('Performance', t => {
	const casualArray = casual.array_of_integers(9999);
	const casualArrayDouble = casual.array_of_doubles(9999);
	const array = [...casualArray, 1];
	const arrayDouble = [...casualArrayDouble, Number.MIN_VALUE]; // 5e-324

	console.time('closestToZero with 10000 integers');
	let result = closestToZero(array);
	console.timeEnd('closestToZero with 10000 integers');
	t.is(result, 1, 'closestToZero with 10000 integers');

	console.time('closestToZero with 10000 doubles');
	result = closestToZero(arrayDouble);
	console.timeEnd('closestToZero with 10000 doubles');
	t.is(result, Number.MIN_VALUE, 'closestToZero with 10000 doubles');
});
