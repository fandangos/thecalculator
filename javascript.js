const result = document.querySelector('.result');

let displayValue = '';
let value1 = '';
let calc = '';
let value2 = '';

function operate(value1, calc, value2) {
    return
}

const buttons = document.querySelectorAll('.buttons');
const buttonC = document.getElementById('buttonC');
const buttonDivision = document.getElementById('buttonDivision');
const buttonMulti = document.getElementById('buttonMulti');
const buttonAdd = document.getElementById('buttonAdd');
const buttonSub = document.getElementById('buttonSub');
const buttonEqual = document.getElementById('buttonEqual');
const buttonDot = document.getElementById('buttonDot');
const buttonDel = document.getElementById('buttonDel');
const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');

buttonC.addEventListener('click', clearDisplay);
button0.addEventListener('click', digit0);
button1.addEventListener('click', digit1);
button2.addEventListener('click', digit2);
button3.addEventListener('click', digit3);
button4.addEventListener('click', digit4);
button5.addEventListener('click', digit5);
button6.addEventListener('click', digit6);
button7.addEventListener('click', digit7);
button8.addEventListener('click', digit8);
button9.addEventListener('click', digit9);
buttonDivision.addEventListener('click', divide);
buttonMulti.addEventListener('click', multiply);
buttonAdd.addEventListener('click', sum);
buttonSub.addEventListener('click', sub);
buttonEqual.addEventListener('click', equal);
buttonDot.addEventListener('click', period);
buttonDel.addEventListener('click', exclude);

function resetBtnColor() {
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
    })
}

function divide() {
    resetBtnColor();
    buttonDivision.style.backgroundColor = 'gold';
    result.textContent = displayValue;
}

function multiply() {
    resetBtnColor();
    buttonMulti.style.backgroundColor = 'gold';
    result.textContent = displayValue;
}

function sum() {
    resetBtnColor();
    buttonAdd.style.backgroundColor = 'gold';
    result.textContent = displayValue;
}

function sub() {
    resetBtnColor();
    buttonSub.style.backgroundColor = 'gold';
    result.textContent = displayValue;
}

function equal() {
    resetBtnColor();
}

function period() {
    displayValue = displayValue+'.';
    result.textContent = displayValue;
}

function exclude() {
    if (displayValue.match(/^.$/)) {
        resetBtnColor();
        displayValue = '0';
    } else {
        displayValue = displayValue.slice(0, -1);   
    }
    result.textContent = displayValue;
}

function clearDisplay() {
    resetBtnColor();
    result.textContent = 0;
}

function digit0() {
    displayValue = displayValue+'0';
    result.textContent = displayValue;
}

function digit1() {
    displayValue = displayValue+'1';
    result.textContent = displayValue;
}

function digit2() {
    displayValue = displayValue+'2';
    result.textContent = displayValue;
}

function digit3() {
    displayValue = displayValue+'3';
    result.textContent = displayValue;
}

function digit4() {
    displayValue = displayValue+'4';
    result.textContent = displayValue;
}

function digit5() {
    displayValue = displayValue+'5';
    result.textContent = displayValue;
}

function digit6() {
    displayValue = displayValue+'6';
    result.textContent = displayValue;
}

function digit7() {
    displayValue = displayValue+'7';
    result.textContent = displayValue;
}

function digit8() {
    displayValue = displayValue+'8';
    result.textContent = displayValue;
}

function digit9() {
    displayValue = displayValue+'1';
    result.textContent = displayValue;
}

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        btn.style.transform = 'scale(0.9)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseup', event => {
        btn.style.transform = 'none';
    })
})

document.addEventListener('keydown', (event) => {
    // let name = event.key;
    // let code = event.code;
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (event.code == "KeyC") {console.log("Pressed Clear"); clearDisplay();}
    else if (event.code == "NumpadDivide" || event.code == "IntlRo") {console.log("Pressed Divide key"); divide();}
    else if (event.code == "NumpadMultiply") {console.log("Pressed Multiply key"); multiply();}
    else if (event.code == "NumpadSubtract" || event.code == "Minus") {console.log("Pressed Subtract key"); sub();}
    else if (event.code == "NumpadAdd") {console.log("Pressed Add key"); sum();}
    else if (event.code == "Numpad7" || event.code == "Digit7") {console.log("Pressed 7 key"); digit7();}
    else if (event.code == "Numpad8" || event.code == "Digit8") {console.log("Pressed 8 key"); digit8();}
    else if (event.code == "Numpad9" || event.code == "Digit9") {console.log("Pressed 9 key"); digit9();}
    else if (event.code == "Numpad4" || event.code == "Digit4") {console.log("Pressed 4 key"); digit4();}
    else if (event.code == "Numpad5" || event.code == "Digit5") {console.log("Pressed 5 key"); digit5();}
    else if (event.code == "Numpad6" || event.code == "Digit6") {console.log("Pressed 6 key"); digit6();}
    else if (event.code == "Numpad1" || event.code == "Digit1") {console.log("Pressed 1 key"); digit1();}
    else if (event.code == "Numpad2" || event.code == "Digit2") {console.log("Pressed 2 key"); digit2();}
    else if (event.code == "Numpad3" || event.code == "Digit3") {console.log("Pressed 3 key"); digit3();}
    else if (event.code == "Numpad0" || event.code == "Digit0") {console.log("Pressed 0 key"); digit0();}
    else if (event.code == "NumpadDecimal" || event.code == "Period" || event.code == "Comma") {console.log("Pressed Dot key"); period();}
    else if (event.code == "NumpadEnter" || event.code == "Equal") {console.log("Pressed Enter key"); equal();}

  }, false);