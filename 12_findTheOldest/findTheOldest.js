const findTheOldest = function(arr) {
    // Set current date for missing death dates
    const currentYear = new Date().getFullYear();
    // Sort the array by age lived
    const sorted = arr.sort(function(a, b) {
        const aDeath = a.yearOfDeath !== undefined ? a.yearOfDeath : currentYear;
        const bDeath = b.yearOfDeath !== undefined ? b.yearOfDeath : currentYear;

        const lastGuy = aDeath - a.yearOfBirth;
        const nextGuy = bDeath - b.yearOfBirth;

        return lastGuy > nextGuy ? -1 : 1;
    });
    // Return oldest person
    return sorted[0];
};


// Do not edit below this line
module.exports = findTheOldest;
