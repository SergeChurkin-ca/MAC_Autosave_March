for (let i = 0; i < document.getElementsByClassName('nav-btn-next').length; i++) {
    let cloned = document.getElementsByClassName('nav-btn-next')[i].cloneNode(true)
    cloned.classList.add('cloned-btn-next')
    cloned.style = "float: right;"
    document.getElementsByClassName('mktoButtonWrap')[i].appendChild(cloned)

    Array.from(document.querySelectorAll('.nav-btn-prev')).map(x => x.innerText = '')
    Array.from(document.querySelectorAll('.cloned-btn-next')).map(x => x.innerText = '')
}


function removeLastBtn() {
    let numRows = Array.from(document.querySelectorAll('.mktoButtonRow')).length
    Array.from(document.querySelectorAll('.mktoButtonRow'))[numRows - 1].classList.add('lastRow')
}

removeLastBtn()

// clean up please wait message



// now do validation to prevent click next
/* 
what's happening:

on click changes display value of next row only if all previous values are !== ''



*/

Array.from(document.querySelectorAll('input')).map(x => x.value)