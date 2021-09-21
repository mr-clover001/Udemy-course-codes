
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

function calculationResult(calculationType) {
if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
){
    return;
}

// if(
//     calculationType === 'ADD' ||
//     calculationType === 'SUBTRACT' ||
//     calculationType === 'MULTIPLY' ||
//     calculationType === 'DIVIDE'
// ){  }

    const enteredNumber = getUserNumberInput();
const initialResult= currentResult;
let mathOperator;
if(calculationType==='ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
}else if(calculationType==='SUBTRACT'){
    currentResult -=enteredNumber;
    mathOperator ='-';
}
else if(calculationType==='MULTIPLY'){
    currentResult *=enteredNumber;
    mathOperator ='*';
}
else if(calculationType==='DIVIDE'){
    currentResult /=enteredNumber;
    mathOperator ='/';
}
createAndWriteOutput(mathOperator, initialResult, enteredNumber);
writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}
// addition function 

function add() {
   calculationResult('ADD');
}

// sustraction function 

function substract() {
    calculationResult('SUBTRACT');

}

// multiplication function 

function multiply() {
    calculationResult('MULTIPLY');
}

// division function 

function divide() {
    calculationResult('DIVIDE');
}

// button clicks eventers

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = add(1, 2);
// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculateDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;




