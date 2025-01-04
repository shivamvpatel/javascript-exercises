const removeFromArray = function(array, ...theArgs) {
    return array.filter(item => !theArgs.includes(item));
};

// removeFromArray([1,2,3,4], 3);
// Do not edit below this line
module.exports = removeFromArray;
