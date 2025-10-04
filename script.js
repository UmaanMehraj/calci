const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

let num1, num2, op

const operate = (num1, num2, op) => {
    if (op == '+') {
        return add(num1, num2)
    }
    else if (op == '-') {
        return subtract(num1, num2)
    }
    else if (op == '*') {
        return multiply(num1, num2)
    }
    else {
        return divide(num1, num2)
    }
}

const btn = document.querySelectorAll('.nums')

const content = document.querySelector('.content')

const operators = document.querySelectorAll('.op')

operators.forEach(element => {
    element.addEventListener('click', (e) => {
        op = (e.target.innerText)
    })
})






let display_num = []


btn.forEach(element => {
    element.addEventListener('click', (e) => {
        content.innerText = e.target.id
        display_num.push(parseInt(content.innerText))
    })

})




const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    const text = operate(display_num[0], display_num[1], op)
    content.innerHTML = text;

})

const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    content.innerText = "0";
})



