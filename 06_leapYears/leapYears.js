//return tru if the number is divisible by the 2nd parameter
function isDivisibleBy(number, dividand){
    let numberDivided = number / dividand;
    if(numberDivided === Math.round(numberDivided)){
        return true
    }else{
        return false;
    }
}

//Function return true if the year past is a leap year, else return false
const leapYears = function(year) {

    if(isDivisibleBy(year, 4) === true && isDivisibleBy(year, 100) === false){
        return true;
    }else if (isDivisibleBy(year, 100) === true && isDivisibleBy(year, 400) === true){
        return true
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
