Array.from(document.getElementsByTagName('input')).map(x => x.addEventListener('focus', removeError))

function removeError(e) {
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.style = "display: none;"
}