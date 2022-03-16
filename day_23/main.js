const time = document.querySelector('.time')
const score = document.querySelector('.score')

const primaryNumber = document.querySelector('#primary-number')
const secondaryNumber = document.querySelector('#secondary-number')
const operator = document.querySelector('#operator')
const inputResult = document.querySelector('#result')

const opeArr = ['+', '-', '*']

function randomOperator(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

const operatorObj = {
    '+': (a, b) => Number(a) + Number(b),
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
}

function randomNumber() {
    return Math.floor(Math.random() * 11)
}

function render(number) {
    primaryNumber.innerHTML = randomNumber()
    secondaryNumber.innerHTML = randomNumber()
    operator.innerHTML = randomOperator(opeArr)
    inputResult.value = ''
    score.innerHTML = number
    inputResult.focus()
}
let currentScore

function start() {
    time.innerHTML = 10
    currentScore = 0
    render(0)
    countdown()
}

window.onload = start



inputResult.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        if (operatorObj[operator.innerHTML](primaryNumber.innerHTML, secondaryNumber.innerHTML) == inputResult.value) {
            currentScore++
            render(currentScore)
        } else {
            inputResult.value = ''
        }
    }
})

function countdown() {
    let isConfirm = confirm('Start ???')
    if (isConfirm) {
        const interval = setInterval(() => {
            time.innerHTML--

            if (time.innerHTML == '0') {
                clearInterval(interval)

                setTimeout(() => {
                    alert(`Your score: ${currentScore}`)
                    start()
                }, 1000)
            }
        }, 1000);
    } else {
        inputResult.disabled = true
    }
    
}