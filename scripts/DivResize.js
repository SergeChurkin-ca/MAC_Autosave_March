let onFirstRow = document.querySelector('.section-container-1')
let onSecondRow = document.querySelector('.section-container-2')
let onThirdRow = document.querySelector('.section-container-3')
orderNum1 = window.getComputedStyle(onFirstRow).order
orderNum2 = window.getComputedStyle(onSecondRow).order
orderNum3 = window.getComputedStyle(onThirdRow).order

orderNum1 == 1 ? onFirstRow.style = "width: 100%;" : onFirstRow.style = "width: 45%;"
orderNum2 == 1 ? onSecondRow.style = "width: 100%;" : onSecondRow.style = "width: 45%;"
orderNum3 == 1 ? onThirdRow.style = "width: 100%;" : onThirdRow.style = "width: 45%;"



function myFunction(x) {
    if (x.matches) { // If media query matches
        onFirstRow.style = "width: 100%;";
        onSecondRow.style = "width: 100%;";
        onThirdRow.style = "width: 100%;";
    }
}

let x = window.matchMedia("(max-width: 600px)")
myFunction(x)