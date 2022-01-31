const removeFromArray = function(theArray,...theArgs) {
    

    for(x = theArray.length; x > -1; x--){
        for(let arg of theArgs){
            if(theArray[x] === arg){
                theArray.splice(x,1)
                x = theArray.length;
            }
        }
    }

    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
