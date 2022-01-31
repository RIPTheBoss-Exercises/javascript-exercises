const reverseString = function(string) {
    let reversedString='';

    for(x = string.length; x != -1; x --){
        reversedString +=string.substr(x,1);
    }

    return reversedString;


};

// Do not edit below this line
module.exports = reverseString;
