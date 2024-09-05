const readline = require('node:readline');
const { calculate, clear, getStoredNumber } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function promptUser() {
    rl.question('> ', (input) => {
        if (input === 'c') {
            console.log(clear());
        } else {
            console.log(calculate(input));
        }
        
        promptUser();
    });
}

console.log(getStoredNumber());
promptUser();
