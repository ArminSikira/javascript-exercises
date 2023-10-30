const removeFromArray = function(arr, ...num) {
    const newArr = [];

    arr.forEach((index) => {
        if(!num.includes(index)) { newArr.push(index); } 
    });

    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
