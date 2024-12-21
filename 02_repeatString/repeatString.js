const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        let i = 0;
        let printedString = "";
        while (i < num) {
            printedString += string;
            i++;
        }
        return printedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
