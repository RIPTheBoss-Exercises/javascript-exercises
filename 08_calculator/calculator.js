const add = function(...numbers) {
  return numbers.reduce(function(total, currentValue){
    return total + currentValue;
  })
};

const subtract = function(...numbers) {
	return numbers.reduce(function(total, currentValue){
    return total - currentValue;
  })
};

const sum = function(numbers) {
	return numbers.reduce(function(total, currentValue){
    return total + currentValue;
  }, 0)
};

const multiply = function(numbers) {
  return numbers.reduce(function(total, currentValue){
    return total * currentValue;
  }, 1)
};

const power = function(a,b) {
  let result = 1;
  for(let i = 0; i<b; i++){
    result *= a;
  }
	return result;
};

const factorial = function(num) {
  if(num == 0) {
    return 1;
  }else if(num < 0){
    return -1;
  }else{
    return num*factorial(num-1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
