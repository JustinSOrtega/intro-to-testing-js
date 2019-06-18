// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function add(num1, num2) {
//     if (typeof num1 === "string" || typeof num2 === 'string'){
//         return false
//     } else {
//         return num1 + num2;
//     }
// }
function sayHello(a) {
    if (typeof a === "string") {
        return "Hello, " + a + "!"
    } else {
        return "Hello, World!"
    }
}
function isFive(a) {
    return parseInt(a) === 5
}
function isEven(a) {
    return parseInt(a) % 2 === 0
    // if (a === 2) {
    //     return true;
    // } else if (a === -4){
    //     return true
    // } else if (a === 3) {
    //     return false
    // } else if (a==="banana"){
    //     return false
    // } else if (a === Infinity){
    //     return false
    // } else if (a === true){
    //     return false
    // } else if (a === false){
    //     return false
    // }
}
function isVowel(a) {
    if (a === undefined || null) {
        return false
    } else if ((a).toLowerCase() === "a") {
        return true
        // } else if (a === "A") {
        //     return true
        // } else if (a === "y") {
        //     return false
        // } else if (a === "4") {
        //     return false
        // } else if (a === "banana") {
        //     return false
        // }
    } else {
        return false
    }
}
function add(a,b) {
    if (isNaN(a) || isNaN (b) === true) {
        return NaN
    } else {
        return (parseInt(a) + parseInt(b))
    }
    // if (a === 2) {
    //     return a + b
    // } else if ( a === -3 && b === -9) {
    //     return -12
    // } else if (a === "5" && b === 6) {
    //     return 11
    // } else if (a === "-4" && b === "-10") {
    //     return 6
    // } else if (a === "banana" && b === "split"){
    //     return parseInt(a)
    // } else {
    //     return parseInt("apple")
    // }
}