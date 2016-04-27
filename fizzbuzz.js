exports.count = function(begin, end) {

	var output = begin;
	for (var i = begin; i < end; i+= 1) {
		output = output + " " + exports.fizzer((i+1));
	
	}

	return output;
};

exports.fizzer = function(num) {
	if(0 === num % 3) {
	return "fizz"; 
	}
	return num; 
	//return 0 === num % 3 ? "fizz" : num;
};
 
 exports.buzzer = function(num) {
 	return 0 === num % 5 ? "buzz" : num; 

 };

 exports.fizzbuzzer = function(num) {
 	return 0 === num % 5 % 3 ? "fizzbuzz" : num;

 };

