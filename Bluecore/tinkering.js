Array.from(document.querySelectorAll('.cursor-pointer')).map((x) => x.addEventListener('click', toggleFunc))

function toggleFunc(e) {
    // document.querySelectorAll('.cursor-pointer').parentNode.parentNode.classList.add('is-open')
    if (e.target.parentNode.parentNode.parentNode.classList !== 'is-open') {
        e.target.parentNode.parentNode.parentNode.classList.add('is-open')

    } else if (e.target.parentNode.parentNode.parentNode.classList.contains('is-open') == true) {
        console.log(e.target.classList)
        e.target.parentNode.parentNode.parentNode.classList.remove('is-open')
    }

}