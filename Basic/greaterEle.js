// Find the largest element in an array.

function big(arr) {
	let greater = arr[0];
	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] > greater) {
			greater = arr[i];
		}
	}
	console.log(greater);
}
big([1, 2, 6, 4, 5]);
