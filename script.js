// JavaScript functionality for a simple calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Division by zero';
    }
}

// Example usage:
console.log('Add:', add(3, 5)); // Add: 8
console.log('Subtract:', subtract(10, 4)); // Subtract: 6
console.log('Multiply:', multiply(2, 3)); // Multiply: 6
console.log('Divide:', divide(8, 2)); // Divide: 4
console.log('Divide by Zero:', divide(8, 0)); // Divide by Zero: Error: Division by zero
