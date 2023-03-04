let currentResult = '';
let currentOperator = '';
let previousResult = '';
let calc = document.querySelector('#result')

const calcBtns = document.querySelectorAll('.calc__btn')
const pink = document.querySelector('#pink')
const blue = document.querySelector('#blue')
const black = document.querySelector('#black')




document.addEventListener('click', event =>{
    if (event.target.id === 'blue'){
        calcBtns.forEach((calcBtn) => {
            console.log(calcBtn)
            calcBtn.classList.remove('calc__btn--pink')
            calcBtn.classList.toggle('calc__btn--blue')
        })
        calc.classList.remove('calc__out--pink')
        calc.classList.toggle('calc__out--blue')
    }
    else if (event.target.id === 'pink'){
        calcBtns.forEach((calcBtn) => {
            console.log(calcBtn)
            calcBtn.classList.remove('calc__btn--blue')
            calcBtn.classList.toggle('calc__btn--pink')
        })
        calc.classList.remove('calc__out--blue')
        calc.classList.toggle('calc__out--pink')
    }
    else if (event.target.id === 'black'){
        calcBtns.forEach((calcBtn) => {
            console.log(calcBtn)
            calcBtn.classList.remove('calc__btn--pink')
            calcBtn.classList.remove('calc__btn--blue')
        })
        calc.classList.remove('calc__out--blue')
        calc.classList.remove('calc__out--pink')
    }

})









function addNumber(number) {
	currentResult += number;
    console.log(currentResult) 
	document.getElementById("result").value = currentResult;
    document.getElementById("result").innerHTML = currentResult;
}

function addOperator(operator) {
	previousResult = currentResult;
	currentResult = "";
	currentOperator = operator;
    console.log(currentOperator)
    document.getElementById("result").innerHTML = currentOperator;
    document.getElementById("result").innerHTML += currentResult;
}



document.addEventListener('keydown', (event) => {
    console.log(event)
    const btn = event.code.toLowerCase()
    if (btn === 'backspace' || btn == 'delete'){
        currentResult = '0'
        document.querySelector('#result').innerHTML = currentResult
        currentResult = ''

    }
    else if (event.key >= '0' && event.key <= '9' || event.key == '.'){
        addNumber(event.key)
        document.querySelector('#result').innerHTML = currentResult
    }
    else if (event.key == '+' || event.key == '-' || event.key == '%' || event.key == '/'|| event.key == '*'){
        addOperator(event.key)
        document.querySelector('#result').innerHTML += currentResult
    }
    else if (btn === 'enter'){
        calculate()
    }


})


function calculate() {
	let result = "";
	switch(currentOperator) {
		case "+":
			result = +previousResult + +currentResult;
			break;
		case "-":
			result = +previousResult - +currentResult;
			break;
		case "*":
			result = +previousResult * +currentResult;
			break;
        case "%":
            result = +previousResult % +currentResult;
            break;
		case "/":
			result = +previousResult / +currentResult;
			break;
		default:
			break;
	}
	currentResult = result.toString();
    if (currentResult === 'NaN'){
        result = '0'
        currentResult = '0'
    }
	
    document.getElementById("result").innerHTML = currentResult;


}

function clearResult() {
    currentResult = '0';
    document.getElementById("result").innerHTML = currentResult;
    currentResult = '';
    previousResult = '';
    currentResult = '';
    console.log(currentOperator)
}


























/*
function getData(){
    let result = 0;
    const num1 = document.querySelector('#num-1').value
    const num2 = document.querySelector('#num-2').value
    const mark = document.querySelector('#mark').value
    const out = document.querySelector('#out')

    switch(mark){
        case '+': result = +num1 + +num2;
        break;

        case '-': result = +num1 - +num2;
        break;

        case '*': result = +num1 * +num2;
        break;

        case '/': result = +num1 / +num2;
        break;

        
        case '%': result = +num1 % +num2;
        break;
    }

    document.getElementById('out').innerHTML = result;
}*/







