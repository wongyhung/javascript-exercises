const removeFromArray = function(enteredArray, ...toBeRemoved) {
    const newArray = [];

    enteredArray.forEach((item) => {
        if (!toBeRemoved.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
