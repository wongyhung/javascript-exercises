const reverseString = function(word) {
    let arrayedWord = Array.from(word)
    let reversedWord = [];
    for (let i = word.length; i > 0; i--) {
        reversedWord.push(arrayedWord.pop())
        
    }
    return reversedWord.join("")
    

};

// Do not edit below this line
module.exports = reverseString;
