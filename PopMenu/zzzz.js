for (let i = 0; i < document.getElementsByClassName('nav-btn-next').length; i++) {
    let cloned = document.getElementsByClassName('nav-btn-next')[i].cloneNode(true)
    cloned.classList.add('cloned-btn-next')
    cloned.style = "float: right; "
    document.getElementsByClassName('mktoButtonWrap')[i].appendChild(cloned)
}