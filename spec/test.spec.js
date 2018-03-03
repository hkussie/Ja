//	1. File must end in .spec.js and saved in the spec folder
//	2. Describe block is used to contain multilple tests that naturally belong together 
//	3. The actual parameters of the test are written in the it block 
// 	4. Should contain string describing what the objective of the test is 
// 	5. A describe block can exist within another describe block 
// 	6. Always use pre-built function expect to validate test outcomes 

class Calculator {

	add (a, b) {
		return a + b;
	}

	subtract (a, b) {
		return a - b;
	}

	sum(a, b, c) {
		return a + b - c; 
	}
}

describe('calculate addition', function() {

	var calc = new Calculator();

	it('should be able to add two numbers together', function() {
		expect(calc.add(2, 4)).toBe(6);
	});

	it('should subtract two numbers', function () {
		expect(calc.subtract(1, 4)).toBe(-3);
	});

	it('should arrive at a total through adding two numbers and subtracting one', function() {
		expect(calc.sum(4, 6, 3)).toBe(7);
	});
});


