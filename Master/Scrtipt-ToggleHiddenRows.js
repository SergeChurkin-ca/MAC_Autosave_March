Array.from(document.querySelectorAll('input[type=checkbox]')).map((x) => x.addEventListener('change', toggleRows))



function toggleRows(e) {
    document.getElementById(e.target.value).parentNode.parentNode.parentNode.classList.toggle('hiddenRow')
}