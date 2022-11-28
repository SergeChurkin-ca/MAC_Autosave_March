Array.from(document.querySelectorAll('.chevron-footer')).map((x) => x.addEventListener('click', toggler))

function toggler(e) {
    e.target.parentNode.parentNode.parentNode.classList.toggle("active-menu")
}