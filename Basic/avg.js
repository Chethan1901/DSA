// Average sum of elements of an array.

function avg(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum / arr.length);
}
avg([1, 2, 3, 4, 5]);
