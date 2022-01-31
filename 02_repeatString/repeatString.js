const repeatString = function(string, num) {


    let answer='';
    if(num<0){
        return 'ERROR'
    }
    
    for(x=num; x>0; x--){
        answer += string;
    }

    return answer;
};

// Do not edit below this line
module.exports = repeatString;
