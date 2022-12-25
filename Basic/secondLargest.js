//  Find the largest second element in an array.

// using sort method

function secLarg(arr) {
	let arr2 = arr.sort();
	let secondLargest = arr2.length - 1;
	console.log(secondLargest);
}
secLarg([1, 2, 5, 3, 4]);

// without using sort method

function secLarg(arr) {
	let first = 0,
		second = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > first) {
			second = first;
			first = arr[i];
		} else if (arr[i] > second && arr[i] != first) {
			second = arr[i];
		}
	}
	console.log(second);
}
secLarg([12, 35, 1, 10, 34, 1]);
