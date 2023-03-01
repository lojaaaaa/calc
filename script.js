let currentResult = '';
let currentOperator = '';
let previousResult = '';
let calc = document.querySelector('result')



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
    
	document.getElementById("result").innerHTML = currentResult;
    currentResult='0'
}

function clearResult() {
    currentResult = '0';
    document.getElementById("result").innerHTML = currentResult;
    currentResult = '';
    console.log(currentOperator)
}









