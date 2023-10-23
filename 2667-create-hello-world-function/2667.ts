function createHelloWorld() {
	return function(...args): string {
        return 'Hello World'
    };
};

// closure
function createHelloWorld() {
    var msg = 'Hello World'
	return function(...args) {
        return msg
    };
};

var createHelloWorld = function() {
    return () => "Hello World";
};
