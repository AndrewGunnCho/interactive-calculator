const { evaluate } = require('mathjs')

let storedNumber = 0;

function calculate(input) {
    if (validate(input)) {    
        if (input.includes('=')) {
            const expression = input.replace('=', '');
            if (expression.length > 0) {
                storedNumber = evaluateExpression(expression);
            }
            return storedNumber;
        } else {
            storedNumber = evaluateExpression(input);
            return getLastDigits(input);
        }
    } else {
        clear();
        return 'Error'
    }
}

function validate(input) {
    // Numbers, arithmetic operators, 'c', '!', and '%'
    const validCharsRegex = /^[0-9+\-*/c!%.=\s]+$/;
    return validCharsRegex.test(input);
}


function evaluateExpression(expression) {
    try {
        if (expression.includes('!') || expression.includes('%')) {
            expression = modifyExpression(expression)
        }
        result = evaluate(`${storedNumber}${expression}`)
        return result
    } catch (error) {
        return 'Error'
    }
}

function modifyExpression(expression) {
    // Handle the percentage conversions
    let modifiedExpression = expression.replace(/(\d+)%/g, (match, num) => `${num / 100}`);
    // Handle the negative conversions
    modifiedExpression = modifiedExpression.replace(/!(\d+)/g, (match, num) => `-${num}`);
    return modifiedExpression;
}

function clear() {
    storedNumber = 0;
    return storedNumber;
}

function getStoredNumber() {
    return storedNumber;
}

function getLastDigits(input) {
    const numberRegex = /-?\d+(\.\d+)?$/;
    const match = input.match(numberRegex);
    return match ? match[0] : 'Error'
}

module.exports = { calculate, clear, getStoredNumber };
