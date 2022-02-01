//Function receive two numbers then add every numbers between them, them included
const sumAll = function(num1, num2) {

    if(num1 < 0|| num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "ERROR";
    }

    //Put the smaller number first
    if(num1 > num2){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    let result = 0;
    for(x = num1; x<(num2 + 1);x++){
        result += x;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
