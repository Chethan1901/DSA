//  Program to find the smallest number among three numbers.

function smallAmongThree(num1, num2, num3) {
	if (num1 < num2 && num1 < num3) {
		console.log(`num1 is smallest among three`);
	} else if (num2 < num1 && num2 < num3) {
		console.log(`num2 is smallest among three`);
	} else {
		console.log(`num3 is smallest among three`);
	}
}
smallAmongThree(4, 2, 3);
