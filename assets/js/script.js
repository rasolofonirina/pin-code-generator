const codeInputs = document.querySelectorAll('.code')
const generateBtn = document.getElementById('generateBtn')
const pinCode = []

generateCode()

generateBtn.addEventListener('click', () => {
    while(pinCode.length > 0) {
        pinCode.pop()
    }

    generateCode()
})

function generateCode() {
    let firstNumber = generateRandomNumber()
    pinCode.push(firstNumber)

    let secondNumber = generateRandomNumber()
    secondNumber = compare(firstNumber, secondNumber)
    pinCode.push(secondNumber)

    let thirdNumber = generateRandomNumber()
    thirdNumber = compare(secondNumber, thirdNumber)
    pinCode.push(thirdNumber)

    let fourthNumber = generateRandomNumber()
    fourthNumber = compare(thirdNumber, fourthNumber)
    pinCode.push(fourthNumber)

    for (let i = 0; i < codeInputs.length; i++) {
        codeInputs[i].setAttribute('value', pinCode[i])
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10)
}

function compare(a, b) {
    return (a === b) ? ((b === 9) ? 0 : (b + 1)) : b
}
