const sumAll = function(firstNum, lastNum) {
    let summedNum = 0;
    if (typeof firstNum === "number" && typeof lastNum === "number") {

        if (firstNum >= 0 && lastNum >= 0) {

            if (Number.isInteger(firstNum) && Number.isInteger(lastNum)) {

            if (firstNum < lastNum) {

                for (let i = firstNum; firstNum <= lastNum; firstNum++) {
                    summedNum += firstNum;
                }

            } else if (firstNum > lastNum) {

                for (let i = lastNum; lastNum <= firstNum; lastNum++) {
                    summedNum += lastNum;
                }

            }
            } else return "ERROR";

        } else return "ERROR";

            return summedNum;

    } else return "ERROR";


};

// Do not edit below this line
module.exports = sumAll;
