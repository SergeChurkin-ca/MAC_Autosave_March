Array.from(document.querySelectorAll('.cursor-pointer')).map((x) => x.addEventListener('click', toggleFunc))


function toggleFunc() {
    Array.from(document.querySelectorAll('.cursor-pointer'))[0].parentElement.parentElement.classList.add('is-open')
}