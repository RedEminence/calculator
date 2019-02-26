const displayValue = document.querySelector('#display');
const blocks = document.querySelectorAll('button');

let displayed = ''; 

let operands = [];
let operator = '';




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

function operate(a, b, operator) {
	if(operator == '+') {
		return sum(a, b);
	} else if(operator == '*') {
		return multiply(a, b);
	} else if(operator == '-') {
		return substract(a, b);
	} else if(operator == '/') {
		if (b == 0) {
			return;
		};
		return divide(a, b);
	};
};


function display(number) {
	displayed += number;
	displayValue.textContent = displayed;
};

/*
function delete {
	displayed = displayed.slice(0, -1);
	displayValue.textContent = displayed;
}
*/

function clear() {
	displayed = '';
	operator = 0;
	while (operands.length) {
		operands.pop();
	};
	displayValue.textContent = displayed;
};

function calculate(a) {
	operands.push(parseFloat(displayValue.textContent));
	if(operands.length == 2) {
		let result = operate(operands[0], operands[1]);
		displayed = result.toString();
		displayValue.textContent = displayed;
		displayed = '';
		operands.pop();
		operands.pop();
		operands.push(result);
	} else {
		displayed = '';
		displayValue.textContent = a;
	}

	operator = a;
};

function equals() {
	operands.push(parseFloat(displayed));
	if(operands.length == 2) {
		displayed = operate(operands[0], operands[1], operator).toString();
		displayValue.textContent = displayed;
		displayed = '';
		operator = '';
		operands.pop();
		operands.pop();
	};

};

blocks.forEach(block => {
	block.addEventListener('click', function(e) {
		if (parseInt(e.target.textContent) >= 0) {
			display(e.target.textContent.toString());
		} else if (parseInt(e.target.textContent) == 'C')  {
			clear();
		} else if (e.target.textContent != '=') {
			calculate(e.target.textContent);

		} else if (e.target.textContent == '=') {
			equals();
	}
})});