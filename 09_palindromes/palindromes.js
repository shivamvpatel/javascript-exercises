const palindromes = function (str) {
    // convert to an array if not already seen as array
    // filter out the punctuations and spaces and numbers
    let result = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // change to lowercase
    return result === result.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
