const sumAll = function (...args) {
    let error = "ERROR";
    let start = Math.min(args[0], args[1]);
    let end = Math.max(args[0], args[1]);
    let sum = 0;

    if (args[0] < 0 || args[1] < 0) {
        return error;
    } else if (
        isNaN(args[0]) ||
        isNaN(args[1]) ||
        typeof args[0] === "string" ||
        typeof args[1] === "string"
    ) {
        return error;
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
