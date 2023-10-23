var createHelloWorld = function() {
    
    return function(...args) {
        return 'Hello World'
    }
};

var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

var createHelloWorld = function() {
    return () => "Hello World"
};

var createHelloWorld = function() {
    return (...args) => "Hello World"
};

// closure
function createHelloWorld() {
    var msg = 'Hello World'
	return function(...args) {
        return msg
    };
};
