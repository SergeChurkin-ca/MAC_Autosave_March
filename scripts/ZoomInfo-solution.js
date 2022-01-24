/* 

Logics:

1. By default we see only email - means all fields aria-invalid are false except first one!

2. Button submit event listener

2.  then, only empty aria-invalid=true (not autocmpleted ) => shows up|| ariva-invalid=false (thouse who being automleted) are hidden

*/

// NEXT - add email validation


/* 3 now implement event listener on change and trigger */
// now start the function work

let allarray = Array.from(document.querySelectorAll('input'))
    // hide all fields but first
allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")

allarray[0].onchange = handleChange;

// arias which are valid have value and they don't need to be seen
// arias which are invalid has to be filled out and shows up
function handleChange() {
    allarray.map(x => allarray.indexOf(x) == 0 ?
        x.style.display = 'block' :
        x.style.display = 'none')


}

// what happens is aria-invalid false shows
/* if row contains input => display none */