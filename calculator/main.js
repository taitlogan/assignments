var readlineSync = require('readline-sync');
var num1 = readlineSync.question("Please enter your first number: ");
var num2 = readlineSync.question("Please enter your second number: ");
var maths = readlineSync.question("Please enter operation to perform (add, subtract, multiply, divide): ");
var operation = function(){
    if(maths === "add"){
        return parseInt(num1) + parseInt(num2)
    }
    else if(maths === "subtract"){
        return (num1) - (num2)
    }
    else if(maths === "multiply"){
        return (num1) * (num2)
    }
    else if(maths === "divide"){
        return (num1) / (num2)
    }
    else {
        return "Try Again"
    }
}

var final = operation(maths)
console.log("The result is: " +final)
