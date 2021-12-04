const dateOfBirthday = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = ('Your Birthday is lucky🥳🥰')
    } else {
        outputBox.innerText = ('Your Birthday is not lucky🙁')
    }
}




function checkBirthDateIsLucky() {
    const DB = dateOfBirthday.value
    const sum = calculateSum(DB)
    if (sum && DB)
        compareValues(sum, luckyNumber.value)

    else
        outputBox.innerText = "Please enter both the fields😡👆"

}


function calculateSum(DB) {
    DB = DB.replaceAll("-", "")
    var sum = 0
    for (i = 0; i < DB.length; i++) {
        sum = sum + Number(DB.charAt(i))

    }
    return sum;

}




checkButton.addEventListener('click', checkBirthDateIsLucky)