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

let num, nextNum, op

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

const nums = document.querySelectorAll('.nums')

const content = document.querySelector('.content')

const operators = document.querySelectorAll('.op')

operators.forEach(element => {
    element.addEventListener('click', (e) => {
        op = (e.target.innerText)
    })
})



let display_num


nums.forEach(element => {
    element.addEventListener('click', (e) => {
        content.innerText = e.target.id
        display_num = parseInt(content.innerText)

        if (num) {
            nextNum = display_num
        }
        else {
            num = display_num
        }
    })
})




const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    const text = operate(num, nextNum, op)
    content.innerHTML = text;
    num = text;

})

const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    location.reload()
})



