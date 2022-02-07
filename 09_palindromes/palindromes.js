const palindromes = function (str) {
    let strArray = Array.from(str);

    strArray = strArray.filter(function(letter){
        if(letter === "!" ||
        letter === ":" ||
        letter === ";" ||
        letter === "," ||
        letter === "?" ||
        letter === "." ||
        letter === " "){
            return false;
        }else{
            return true;
        }
    })

    let uno = strArray.toString().toLowerCase();
    let dos = strArray.reverse().toString().toLowerCase();

    return uno === dos ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
