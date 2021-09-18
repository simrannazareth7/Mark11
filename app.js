const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#btn-check-number");
const outputBox = document.querySelector("#output-box");


function compareForLuck(summ, luckyNum) {
    if (summ % luckyNum === 0) {
        outputBox.innerText = "You birhday is lucky";
    } else {
        outputBox.innerText = "You're unlucky";
    }
};

function checkLuckyNumber() {

    const dOb = dateOfBirth.value;
    const numberForCheck = luckyNumber.value;

    if (dOb && numberForCheck) {
        const sumOfDob = calculateSum(dOb);
        compareForLuck(sumOfDob, numberForCheck);
    } else {
        outputBox.innerText = "Please enter both feilds";
    }
};

function calculateSum(Bdate) {
    Bdate = Bdate.replaceAll("-", "");
    let sum = 0;
    for (let i of Bdate) {
        sum += Number(i);
    }
    return sum;
};



checkBtn.addEventListener("click", checkLuckyNumber);
