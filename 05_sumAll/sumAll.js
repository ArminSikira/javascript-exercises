const sumAll = function(a, b) {
    let sum = 0;

    if(a < 1 || b < 1 || typeof(a) !== "number" || typeof(b) !== "number" ) {return "ERROR";}

    if( b > a ) {
        
        for(let i = a; i <= b; i++) {
            sum += i;
        }
     }
     else {
        for(let i = b; i <= a; i++) {
            sum += i;
        }
     }

    
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
