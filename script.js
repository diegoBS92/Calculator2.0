let calculator = document.querySelector('.calculator')
let display = document.querySelector('.display')
let displayoperator = document.querySelector('.displayoperator')
let displayresult = document.querySelector('.displayresult')
let btns = document.querySelectorAll('.btn')
let operators = document.querySelectorAll('.operator')
let resultbtn = document.querySelector('.resultbtn')

let numberOne 
let operator 
let numberTwo
let result 

Array.from(btns).forEach(item => item.addEventListener('click', (e) => {
    display.textContent += e.target.textContent
    displayoperator.textContent += e.target.textContent
    
}))
Array.from(operators).forEach(item => item.addEventListener('click', e => {
    numberOne ? numberTwo = display.textContent : numberOne = display.textContent
    if (numberTwo){
        if(!result) {
            operate(numberOne, operator, numberTwo)
            displayresult.textContent = result
        } else {
            operate(result, operator, numberTwo)
            displayresult.textContent = result
        }
    }
    operator = e.target.textContent
    displayoperator.textContent += operator
    display.textContent = ''
    })
)
resultbtn.addEventListener('click', function() {
    numberTwo = display.textContent
    if (!result) {
        operate(numberOne, operator, numberTwo)
    } else {
        operate(result, operator, numberTwo)
    }
    displayresult.textContent = result
    display.textContent = ''

})

let add = (num1, num2) => +(num1) + +(num2)
let subtract = (num1, num2) => +(num1) - +(num2)
let multiply = (num1, num2) => +(num1) * +(num2)
let divide = (num1, num2) => +(num1) / +(num2)

let operate = function(num1, oper, num2) {
    switch(oper) {
        case '+':
            result = add(num1, num2)
            console.log(result)
            break;
        case '-':
            result = subtract(num1, num2)
            console.log(result)
            break;
        case '*':
            result = multiply(num1, num2)
            console.log(result)
            break;
        case '/':
            result = divide(num1, num2)
            console.log(result)
            break;
        
    }
}



//create function for all operators, create three variables, create a function operate that takes an operator and two numbers, add an equal and clear btn, create a funtion that populate the display when you click a number, store the display value for use in the next step