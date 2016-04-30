var fb = require('../fizzbuzz')

describe("A program that plays fizzbuzz", function() {

	it("can count from 1 to 6", function() {
		expect(fb.count(1,6)).toBe("1 2 fizz 4 buzz fizz");
	});

	it("can take multiples of 3 and return 'fizz', otherwise return input", function() {
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(8)).toBe(8);
		expect(fb.fizzer(33)).toBe('fizz');
	});

	it("can take multiples of 5 and return 'buzz', otherwise return input", function() {
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(7)).toBe(7);
		expect(fb.buzzer(40)).toBe('buzz');
	});

	it("can take multiples of 3 and 5 and return 'fizzbuzz', otherwise return input", function() {
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
		expect(fb.fizzbuzzer(7)).toBe(7);
		expect(fb.fizzbuzzer(30)).toBe('fizzbuzz');
	});
});

