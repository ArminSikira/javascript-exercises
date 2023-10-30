const reverseString = function(string) {
    let rString = '';
    for(let i = 1; i <= string.length; i++) {
        rString +=string[string.length - i];
    }
    return rString;

};

// Do not edit below this line
module.exports = reverseString;
