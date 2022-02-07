const findTheOldest = function(persons) {

    const age = function(someone){
        if(someone.yearOfDeath !== undefined){
            return someone.yearOfDeath - someone.yearOfBirth;
        }else{
            return new Date().getFullYear() - someone.yearOfBirth;
        }
    }

    persons = persons.sort((a,b) => age(a) > age(b) ? 1:-1); //Order persons from youngest to oldest

    return persons[(persons.length - 1)];
};

// Do not edit below this line
module.exports = findTheOldest;
