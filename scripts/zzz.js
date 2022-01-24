/* 3 now implement event listener on change and trigger */

let allarray = Array.from(document.querySelectorAll('input'))
allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")

allarray[0].onchange = handleChange;

function handleChange() {
    allarray.map(x => x.getAttribute('aria-invalid') == 'true' || allarray.indexOf(x) == 0 || x.value == '' ?
        x.style.display = 'block' : x.style.display = 'none')


}