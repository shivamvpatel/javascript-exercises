const fibonacci = function(n) {
    //ensure n is a positive number, even if it is a string number
    n = Number(n);
    if (n < 0) {
        return "OOPS";
    }
    //check index for fibonacci number for n
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (n > 1) {
        let prev = 0;
        let current = 1; 

        for (let i = 2; i <= n; i++) {
            const next = prev + current;
            prev = current;
            current = next;
        };
        console.log(current);
        return current;
    };
};

fibonacci("1");

// Do not edit below this line
module.exports = fibonacci;
