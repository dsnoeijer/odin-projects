const calculator = document.querySelector('.calculator');
let results = document.querySelector('.result');
let number = '';
let numbers = [];
let operators = [];
let count = {};
const numberObject = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0
}

const reset = () => {
    numbers = [];
    operators = [];
    number = '';
    count = {};
}

const calculate = (numbers, operators) => {

    for (const op of operators) {
        if (count[op]) {
            count[op] += 1;
        } else {
            count[op] = 1;
        }
    }

    if (operators.includes('multiply')) {
        for (let i = 0; i < count['multiply']; i++) {
            let opIndex = operators.indexOf('multiply');
            let total = numbers[opIndex] * numbers[opIndex + 1];
            operators.splice(opIndex, 1);
            numbers.splice(opIndex, 2);
            numbers.splice(opIndex, 0, total);
        }
    }

    if (operators.includes('divide')) {
        for (let i = 0; i < count['divide']; i++) {
            let opIndex = operators.indexOf('divide');
            let total = numbers[opIndex] / numbers[opIndex + 1];
            operators.splice(opIndex, 1);
            numbers.splice(opIndex, 2);
            numbers.splice(opIndex, 0, total);
        }
    }

    if (operators.includes('plus')) {
        for (let i = 0; i < count['plus']; i++) {
            let opIndex = operators.indexOf('plus');
            let total = numbers[opIndex] + numbers[opIndex + 1];
            operators.splice(opIndex, 1);
            numbers.splice(opIndex, 2);
            numbers.splice(opIndex, 0, total);
        }
    }

    if (operators.includes('minus')) {
        for (let i = 0; i < count['minus']; i++) {
            let opIndex = operators.indexOf('minus');
            let total = numbers[opIndex] - numbers[opIndex + 1];
            operators.splice(opIndex, 1);
            numbers.splice(opIndex, 2);
            numbers.splice(opIndex, 0, total);
        }
    }

    results.innerHTML = `<p>${numbers[0]}</p>`;
}

calculator.addEventListener('click', (e) => {

    btn = e.target.className;
    if (btn.includes('disabled')) {
        return;
    }

    if (btn === 'ac') {
        results.innerHTML = '<p></p>';
        reset();
        return;
    }

    if (btn !== 'equals') {
        if (btn in numberObject) {
            number += numberObject[btn];
            results.innerHTML += `<p>${numberObject[btn]}</p>`;
        } else {
            numbers.push(number);
            number = '';
            operators.push(btn)
            results.innerHTML = `<p></p>`;
        }
    } else {
        numbers.push(number);
        calculate(numbers, operators);

    }
});