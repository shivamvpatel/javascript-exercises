const sumAll = function(a,b) {
    sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    } else if (b > a) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
        return sum;
    }
};
// Do not edit below this line
module.exports = sumAll;
