
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// function which returns user input

function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// print the calculation happens

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifer,
    prevResult,
    operationNumber,
    newResult
) {
    // creating object 
    const logEntry = {
        operation: operationIdentifer,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult

    };

    logEntries.push(logEntry);
    console.log(logEntries.operation); //access data in object
    console.log(logEntries);
}

// addition function 

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);

}

// sustraction function 

function substract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACTION', initialResult, enteredNumber, currentResult);

}

// multiplication function 

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// division function 

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVISON', initialResult, enteredNumber, currentResult);
}

// button clicks eventers

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = add(1, 2);
// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculateDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;




