document.querySelectorAll('.fa-bars')[0].addEventListener("click", toggleFunc)

function toggleFunc() {
    document.getElementsByClassName("mobile-menu")[0].classList.add("visible")
}

document.querySelectorAll('.faxmark')[0].addEventListener("click", hideFunc)

function hideFunc() {
    document.getElementsByClassName("visible").classList.remove("visible")
}