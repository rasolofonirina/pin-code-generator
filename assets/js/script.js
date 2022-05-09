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
