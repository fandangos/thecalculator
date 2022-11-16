const result = document.querySelector('.result');
const calcDisplay = document.getElementById('operation');

let storedDisplay = '0';
let opResult = 0;
let calc = undefined;
let clear = undefined;

function operate(op1, opn, op2) {
    op1 = Number(op1);
    op2 = Number(op2);

    storedDisplay = result.textContent;

    if (opn == 'sum' && opn != undefined) {
        opResult = op1 + op2;
        result.textContent = opResult;
    }

    else if (opn == 'multi' && opn != undefined) {
        opResult = (op1 * op2);
        result.textContent = opResult;
    }

    else if (opn == 'divide' && opn != undefined) {
        if (op2 == 0) {
            result.textContent = 'ERROR';
        } else {
            opResult = (op1 / op2);
            result.textContent = opResult;
        }
    }
    else if (opn == 'sub' && opn != undefined) {
        opResult = ((op1) - (op2));
        result.textContent = opResult;
    }
    else {
        clear = true;
        return;
    }

    clear = true;
    return;

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
    calcDisplay.textContent = '/';
    if (clear == true || calc == 'multi' || calc == 'sub' || calc == 'sum') {
        calc = 'divide';
        return
    };

    operate(storedDisplay, calc, result.textContent);
    calc = 'divide';
}

function multiply() {
    resetBtnColor();
    buttonMulti.style.backgroundColor = 'gold';
    calcDisplay.textContent = 'x';
    if (clear == true || calc == 'divide' || calc == 'sub' || calc == 'sum') {
        calc = 'multi';
        return
    };

    operate(storedDisplay, calc, result.textContent);
    calc = 'multi';
}

function sum() {
    resetBtnColor();
    buttonAdd.style.backgroundColor = 'gold';
    calcDisplay.textContent = '+';

    if (clear == true || calc == 'sub' || calc == 'multi' || calc == 'divide') {
        calc = 'sum';
        return
    };

    operate(storedDisplay, calc, result.textContent);
    calc = 'sum';
}

function sub() {
    resetBtnColor();
    buttonSub.style.backgroundColor = 'gold';
    calcDisplay.textContent = '-';
    if (clear == true || calc == 'sum' || calc == 'multi' || calc == 'divide') {
        calc = 'sub';
        return
    };

    operate(storedDisplay, calc, result.textContent);
    calc = 'sub';
}

function equal() {
    resetBtnColor();
    if (clear == true) { return };

    operate(storedDisplay, calc, result.textContent);
    calcDisplay.textContent = '';
    calc = undefined;
}

function period() {
    if (result.textContent.match(/^.$/)) {
        result.textContent = '0';
    } else if (result.textContent.match(/[.]/g)) {
        return
    } else {
        result.textContent = result.textContent + '.';
    }
}

function exclude() {
    if (result.textContent == 'ERROR') { return }

    if (result.textContent.match(/^.$/)) {
        resetBtnColor();
        result.textContent = '0';
    } else {
        result.textContent = result.textContent.slice(0, -1);
    }
}

function clearDisplay() {
    resetBtnColor();
    calcDisplay.textContent = '';
    storedDisplay = '0';
    result.textContent = 0;
    calc = undefined;
}

function clearDisplayBtn() {
    resetBtnColor();
    storedDisplay = result.textContent;
    result.textContent = 0;
    clear = false;
}

function digit0() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '0';
    } else {
        result.textContent = result.textContent + '0';
    }
}

function digit1() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '1';
    } else {
        result.textContent = result.textContent + '1';
    }
}

function digit2() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '2';
    } else {
        result.textContent = result.textContent + '2';
    }
}

function digit3() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '3';
    } else {
        result.textContent = result.textContent + '3';
    }
}

function digit4() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '4';
    } else {
        result.textContent = result.textContent + '4';
    }
}

function digit5() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '5';
    } else {
        result.textContent = result.textContent + '5';
    }
}

function digit6() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '6';
    } else {
        result.textContent = result.textContent + '6';
    }
}

function digit7() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '7';
    } else {
        result.textContent = result.textContent + '7';
    }
}

function digit8() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '8';
    } else {
        result.textContent = result.textContent + '8';
    }
}

function digit9() {
    if (result.textContent.match(/^............$/)) { return };

    if (clear == true) { clearDisplayBtn() };

    if (result.textContent.match(/^0$/)) {
        result.textContent = '9';
    } else {
        result.textContent = result.textContent + '9';
    }
}

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        btn.style.transform = 'scale(0.9)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('touchstart', event => {
        btn.style.transform = 'scale(0.9)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseup', event => {
        btn.style.transform = 'none';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('touchend', event => {
        btn.style.transform = 'none';
    })
})

document.addEventListener('keydown', (event) => {
    if (result.textContent.match(/^............$/)) { return };

    if (event.code == "NumpadEnter" || event.code == "Equal") { equal(); }
    else if (event.code == "KeyC") { clearDisplay(); }
    else if (event.code == "NumpadDivide" || event.code == "IntlRo") { divide(); }
    else if (event.code == "NumpadMultiply") { multiply(); }
    else if (event.code == "NumpadSubtract" || event.code == "Minus") { sub(); }
    else if (event.code == "NumpadAdd") { console.log("Pressed Add key"); sum(); }
    else if (event.code == "Numpad7" || event.code == "Digit7") { digit7(); }
    else if (event.code == "Numpad8" || event.code == "Digit8") { digit8(); }
    else if (event.code == "Numpad9" || event.code == "Digit9") { digit9(); }
    else if (event.code == "Numpad4" || event.code == "Digit4") { digit4(); }
    else if (event.code == "Numpad5" || event.code == "Digit5") { digit5(); }
    else if (event.code == "Numpad6" || event.code == "Digit6") { digit6(); }
    else if (event.code == "Numpad1" || event.code == "Digit1") { digit1(); }
    else if (event.code == "Numpad2" || event.code == "Digit2") { digit2(); }
    else if (event.code == "Numpad3" || event.code == "Digit3") { digit3(); }
    else if (event.code == "Numpad0" || event.code == "Digit0") { digit0(); }
    else if (event.code == "NumpadDecimal" || event.code == "Period" || event.code == "Comma") { period(); }
    else if (event.code == "Backspace" || event.code == "Delete") { exclude(); }
}, false);