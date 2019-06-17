// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function add(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === 'string'){
        return false
    } else {
        return num1 + num2;
    }
}
function sayHello(a) {
    if (a === "Alex") {
        return "Hello, Alex!"
    } else if (a === "Pat") {
        return "Hello, Pat!"
    } else if (a === "Jane") {
        return "Hello, Jane!"
    } else if (a === undefined || true || false) {
        return "Hello, World!"
    } else {
        return "Hello, " + a +"!"
    }
}