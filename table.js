// Program that takes a number as input and prints its multiplication table upto 10.

function table(n) {
	for (let i = 1; i < 11; i++) {
		console.log(`${n} * ${i} = ${n * i}`);
	}
}
table(7);
