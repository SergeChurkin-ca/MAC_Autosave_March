document.querySelectorAll("input")[0].getAttribute('aria-invalid') == "true" ?
    (document.querySelectorAll("input")[1].style.display = "none",
        document.querySelectorAll("input")[2].style.display = "none") : (document.querySelectorAll("input")[1].style.display = "block",
        document.querySelectorAll("input")[2].style.display = "block")



// another example
Array.from(document.querySelectorAll('input')).map(x => x.getAttribute('aria-invalid') == "true" ?
    x.style.display = "none" : '');



Array.from(document.querySelectorAll('input')).map((x) => x.getAttribute('aria-invalid') == 'true')


/* 1 hide all fields except 1st - at first determine first field */
// find index of first field
// find index of first field
let allarray = Array.from(document.querySelectorAll('input'))

let FirstInputField = document.querySelectorAll('input')[0]
let IndexOfFirstField = Array.from(document.querySelectorAll('input')).indexOf(FirstInputField)

allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")

/* 2 now we make event listener and if aria-invalid=true (filledout) we show field
        - if aria-invalid (not filled out) we hide it
*/

let FirstInputField = document.querySelectorAll('input')[0]
let IndexOfFirstField = Array.from(document.querySelectorAll('input')).indexOf(FirstInputField)

// 
let allarray = Array.from(document.querySelectorAll('input'))
allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = 'block' : x.style.display = 'none')


// let's just try this out

Array.from(document.querySelectorAll('input[data-zi-input-enriched="false"]'))

// 


allarray.map(x => x.getElementsByTagName('input'))


// this function works in browser but wont do anything in marketo

Array.from(document.querySelectorAll('input[data-zi-input-enriched="true"]')).map(x => x.parentElement.parentElement.style = "display: none")
Array.from(document.querySelectorAll('input[data-zi-input-enriched="false"]')).map(x => x.parentElement.parentElement.style = "display: block")


// lets hide all row but first - compelete
let allarray = Array.from(document.querySelectorAll('.mktoFormRow'))
allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")


// 
// 
// 


/* this is working script! */
let allarray = Array.from(document.querySelectorAll('.mktoFormRow'))
allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")

Array.from(document.querySelectorAll('input'))[0].onchange = handleChange;

// arias which are valid have value and they don't need to be seen
// arias which are invalid has to be filled out and shows up
function handleChange() {
    console.log("check")
    Array.from(document.querySelectorAll('input[data-zi-input-enriched="true"]')).map(x => x.parentElement.parentElement.style = "display: none ")
    Array.from(document.querySelectorAll('input[data-zi-input-enriched="false"]')).map(x => x.parentElement.parentElement.style = "display: block ")
}


(function() {

    Array.from(document.querySelectorAll('input'))[0].addEventListener('change', handleChange)

    function handleChange() {
        console.log("check")
        Array.from(document.querySelectorAll('input[data-zi-input-enriched="true"]')).map(x => x.parentElement.parentElement.parentElement.style = "display: none")
        Array.from(document.querySelectorAll('input[data-zi-input-enriched="false"]')).map(x => x.parentElement.parentElement.parentElement.style = "display: block")
    }
})();


// --------- 
MktoForms2.whenReady(function(form) {
    let allarray = Array.from(document.querySelectorAll('.mktoFormRow'))
    allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")
});