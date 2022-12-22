// Program to reverse an array.

// using reverse method

function rev(arr) {
	console.log(arr.reverse());
}
rev([1, 2, 3, 4, 5]);

// using pop method

function rev(arr) {
	let len = arr.length , arr2 = [];
	for (let i = 0; i < len; i++) {
		arr2[i] = arr.pop();
	}
	console.log(arr2);
}
rev([1, 2, 3, 4, 5]);
