//The First Way To Do The Calculator

const dispaly = document.getElementById('dispaly');

function toDispaly(input){
//dispaly.value = dispaly.value + input
dispaly.value += input;
}

function clearDisplay(){
dispaly.value = "";
}
function calculate(){
try{
    // Added replacement of ^ with ** for exponentiation
    let expression = dispaly.value.replace(/\^/g, '**');
    dispaly.value = eval(expression);
}
catch(error){
    dispaly.value = "Error";
}
}

//The Second Way To Do The Calculator Into Three Different Input Fields


/*let result;
function calculate() {
const first = document.getElementById('num1').value;
const second = document.getElementById('num2').value;
const op = document.getElementById('operator').value;

switch (op) {
    case '+':
        result = +first + +second;
        break;
    case '-':
        result = +first - +second;
        break;
    case '*':
        result = +first * +second;
        break;
    case '/':
        result = +first / +second;
        break;
    case '^':
        result = (+first) ** +second;
        break;
    default:
        result = 'Enter a valid operation';
        break;
}
document.getElementById('output').value = result;
}*/