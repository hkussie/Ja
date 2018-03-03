//	File must end in .spec.js and saved in the spec folder
//	Describe block is used to contain multilple tests that naturally belong together 
//	The actual parameters of the test are written in the it block 
// 	Should contain string describing what the objective of the test is 
// 	A describe block can exist within another describe block 

describe('calculate addition', function() {
	it('should be able to add two numbers together', function() {
		console.log('Two numbers were added successfully!');
	});

	it('shoudld add two numbers together and be equal to five', function () {
		console.log('The total was five!');
	});

	describe('calculate numbers using addition and subtraction', function () {
		it('should come to a total derived from adding two numbers and subtracting another', function () {
			console.log('Two numbers were added and a single number was subtracted from another.');
		});
	});
});