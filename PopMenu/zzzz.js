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