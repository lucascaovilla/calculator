var numberA = 0;
var numberB = 0;

function start() {
    calculateResults();
    var inputnumberA = document.querySelector('#first-number');
    var inputnumberB = document.querySelector('#second-number');
    inputnumberA.addEventListener('input', calculateResults);
    inputnumberB.addEventListener('input', calculateResults);
    
}

function calculateResults() {
    getFirstAndnumberBs();
    numbersSum();
    substractionAforB();
    substractionBforA();
    numbersMultiplication();
    numbersDivisionAForB();
    numbersDivisionBForA();
    AUpToB();
    BUpToA();
    sqrtA();
    sqrtB();
    factorialA();
    factorialB();
    APercetageOfB();
    BPercetageOfA();
    numbersMedia();
}

function getFirstAndnumberBs() {
    numberA = Number(document.querySelector('#first-number').value);
    numberB = Number(document.querySelector('#second-number').value);
    console.log(numberA, numberB);
}


function numbersSum() {
    var divSum = document.querySelector('#sum-result');
    var result = numberA + numberB;
    result = result.toFixed(2);
    divSum.innerHTML = result; 
}    

function substractionAforB() {
    var divSubstAB = document.querySelector('#subst-A-B-result');
    var result = numberA - numberB;
    result = result.toFixed(2);
    divSubstAB.innerHTML = result;  
}

function substractionBforA() {
    var divSubstBA = document.querySelector('#subst-B-A-result');
    var result = numberB - numberA;
    result = result.toFixed(2);
    divSubstBA.innerHTML = result;  
}

function numbersMultiplication() {
    var divMult = document.querySelector('#multipl-result');
    var result = numberA * numberB;
    result = result.toFixed(2);
    divMult.innerHTML = result;  
}

function numbersDivisionAForB() {
    var divDivisionAForB = document.querySelector('#division-A-B');
    var result = numberA / numberB;
    result = result.toFixed(2);
    divDivisionAForB.innerHTML = result;  
}

function numbersDivisionBForA() {
    var divDivisionBForA = document.querySelector('#division-B-A');
    var result = numberB / numberA;
    result = result.toFixed(2);
    divDivisionBForA.innerHTML = result;  
}

function AUpToB() {
    var divAUpToB = document.querySelector('#A-up-to-B');
    var result = numberA ** numberB;
    result = result.toFixed(2);
    divAUpToB.innerHTML = result;  
}

function BUpToA() {
    var divBUpToA = document.querySelector('#B-up-to-A');
    var result = numberB ** numberA;
    result = result.toFixed(2);
    divBUpToA.innerHTML = result;  
}

function sqrtA() {
    var divSqrtA = document.querySelector('#sqrt-A');
    var result = Math.sqrt(numberA);
    result = result.toFixed(2);
    divSqrtA.innerHTML = result;  
}

function sqrtB() {
    var divSqrtB = document.querySelector('#sqrt-B');
    var result = Math.sqrt(numberB);
    result = result.toFixed(2);
    divSqrtB.innerHTML = result;  
}

function factorialA() {
    var divFactorialA = document.querySelector('#factorial-A');
    var factNumberA = Math.round(numberA);
    let result = 1;
    for (var i = factNumberA; i>1; i--) {
        result *= i;
    }
    divFactorialA.innerHTML = result;
}

function factorialB() {
    var divFactorialB = document.querySelector('#factorial-B');
    var factNumberB = Math.round(numberB);
    let result = 1;
    for (var i = factNumberB; i>1; i--) {
        result *= i;
    }
    divFactorialB.innerHTML = result;
}

function APercetageOfB() {
    var divAPercetageOfB = document.querySelector('#A-percentage-B');
    var result = (numberA * 100) / numberB;
    result = result.toFixed();
    result = String(result) + '%'
    divAPercetageOfB.innerHTML = result;
}

function BPercetageOfA() {
    var divBPercetageOfA = document.querySelector('#B-percentage-A');
    var result = (numberB * 100) / numberA;
    result = result.toFixed();
    result = String(result) + '%'
    divBPercetageOfA.innerHTML = result;
}

function numbersMedia() {
    var divNumbersMedia = document.querySelector('#media-A-B');
    var result = (numberA + numberB) / 2
    result = result.toFixed(2);
    divNumbersMedia.innerHTML = result;
}

















start();