// Access DOM element of the calculator
const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');


// Define expression and result variable 
let expression = '';
let result = '';

// Define event handler for button clicks 
function buttonClick(event) {
    // Get values from clicked button 
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;
    // console.log(target, action, value);

    // Switch case to control the calculator
 switch (action) {
    case 'number':
        addValue(value);
        break;
        case 'clear':
           clear()
            break;  

            case 'backspace':
                backspace()
                 break;  
                 // add the result to expression as a starting point if expression is empty   
                 case 'addition':
                    case 'substraction':
                    case 'multiplication':
                    case 'division':
                if  (expression === '' && result !== '') {
                    startFromResult(value);
                } else if (expression !== '' && !isLastOperator()) {
                addValue(value);
                }
                        


    
 }

//  Update display

updateDisplay(expression, result);


    
}

inputBox.addEventListener('click', buttonClick);

function addValue(value) {
    // Add value to the expression 
    expression += value;
    
}

function updateDisplay(expression, result) {
    expressionDiv.textContent = expression;
    resultDiv.textContent = result;
}

function clear() {
expression = '';
result = '';
}

function backspace() {
    expression = expression.slice(0, -1);
}

function isLastOperator() {
    return isNaN(parseInt(expression.slice(-1))); 
} 