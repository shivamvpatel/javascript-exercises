const reverseString = function(word) {
    let output = "";
    let i = 1;
    while (i <= word.length) {
        output += (word[word.length-i]);
        i++;
    }
    return output;
};

reverseString("hello world");

// Do not edit below this line
module.exports = reverseString;
