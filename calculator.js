const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');


let operator = undefined;
let numberCurrent = '';
let number = '';
let result = '';


function sum(a, b) {
	return a + b;
};

function multiply(a, b) {
	return a * b;
};

function substract(a, b) {
	return a - b;
};

function divide(a, b) {
	return a / b;
};

function operate(a, b, op) {
	if(op === '+') {
		number = sum(a, b);
		result = number;
		operator = undefined;
		populateDisplay();
	} else if(op === '*') {
		number = multiply(a, b);
		result = number;
		operator = undefined;
		populateDisplay();
	} else if(op === '-') {
		number = substract(a, b);
		result = number;
		operator = undefined;
		populateDisplay();
	} else if(op === '/') {
		number = divide(a, b);
		result = number;
		operator = undefined;
		populateDisplay();
	};	
};



function populateDisplay() {
	display.textContent = number;
}


function updateOperation(op) {
	if(operator != undefined) {
		operate(parseFloat(numberCurrent), parseFloat(number), operator);
		operator = op;
		numberCurrent = result;
		result += operator;
		number = '';
		populateDisplay();
	} else {
		operator = op;
		numberCurrent = number;
		number = '';
		result += operator;
		populateDisplay();
	}
}


function clear() {
	number = '';
	numberCurrent = '';
	result = '';
	operator = undefined;
	populateDisplay();
}


buttons.forEach(block => {
	block.addEventListener('click', function(e) {
		if (parseFloat(e.target.textContent) || e.target.textContent == '0') {
			let string = parseInt(e.target.textContent);
			number += string;
			result += string;
			populateDisplay();
		} else if (e.target.textContent == 'C')  {
			clear();

		} else if (e.target.textContent == '=') {
			operate(parseFloat(numberCurrent), parseFloat(number), operator);

	} else {
		updateOperation(e.target.textContent);
	}
})});