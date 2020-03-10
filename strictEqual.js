const strictEqual = (valueOne, valueTwo) => {
     // compare the value and type of value one to that of value two, returning true if both are equal

     if (valueOne == valueTwo && typeof valueOne == typeof valueTwo) {
        return true 
     }           
     return false
}

module.exports = strictEqual 