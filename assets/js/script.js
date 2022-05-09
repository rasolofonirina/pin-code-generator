const generate = document.getElementById('generate')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const number3 = document.getElementById('number3')
const number4 = document.getElementById('number4')
const pinCode = []

generateCode()

generate.addEventListener('click', () => {
    while(pinCode.length > 0) {
        pinCode.pop();
    }
    generateCode()
})

function generateCode() {
    let num1 = generateRandomNumber()
    pinCode.push(num1)

    let num2 = generateRandomNumber()
    num2 = compare(num1, num2)
    pinCode.push(num2)

    let num3 = generateRandomNumber()
    num3 = compare(num2, num3)
    pinCode.push(num3)

    let num4 = generateRandomNumber()
    num4 = compare(num3, num4)
    pinCode.push(num4)

    number1.value = pinCode[0]
    number2.value = pinCode[1]
    number3.value = pinCode[2]
    number4.value = pinCode[3]
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10)
}

function compare(a, b) {
    return (a === b) ? ((b === 9) ? 0 : (b + 1)) : b
}
