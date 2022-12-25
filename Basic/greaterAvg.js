// Elements greater than avg sum of an array.

function avg(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

function greater(arr) {
	let avgNo = avg(arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > avgNo) {
			console.log(arr[i]);
		}
	}
}

greater([1, 2, 3, 4, 5]);
