var a = prompt('Enter first number'),
	b = prompt('Enter second number'),
	value = (a * a) - (2 * a * b) + (b * b);
console.log('The result is: ' + value);
if (value > 0) {
	console.log('The result is positive');
}
else if (value < 0) {
	console.log('The result is negative');
} 
else {
	console.log('The result is 0');
}
