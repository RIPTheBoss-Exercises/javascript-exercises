const fibonacci = function(index) {
    if(index<0){
        return "OOPS";
    }
    
    let fibonaci = [1,1];

    while(fibonaci.length<index){
    fibonaci.push((fibonaci[fibonaci.length-1]
     +fibonaci[fibonaci.length-2]));
    }

    return fibonaci[index -1];
};

// Do not edit below this line
module.exports = fibonacci;
