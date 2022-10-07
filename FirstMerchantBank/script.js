console.log('check check - form script is working')
    // check and uncheck subsribtion options
    // checkbox event listener
let subscribeButton = document.getElementById('checkAll')
let unSubscribeButton = document.getElementById('unsubAll')

subscribeButton.addEventListener('change', subscribeToAllFunction);
unSubscribeButton.addEventListener('change', unSubscribeToAllFunction);

function subscribeToAllFunction() {
    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
        let subscribeButtons = []
        if (i % 2 == 0)
            subscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)
        unSubscribeButton.checked = false
    }
}

function unSubscribeToAllFunction() {
    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
        let unsubscribeButtons = []
        let subscribeButtons = []
        if (i % 2 !== 0)
            unsubscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)
        subscribeButton = (document.querySelectorAll('input[type="radio"]')[i].checked = false)
        subscribeButton.checked = false
    }
}

// add event listener - if individual subscribtion options are changed - bulk selection is removed

Array.from(document.querySelectorAll('input[type="radio"]')).map(x => x.addEventListener('change', uncheckOptions))

function uncheckOptions() {
    subscribeButton.checked = false
    unSubscribeButton.checked = false

}



// individual news letters - check uncechk

/*

1. lets find the lenght of input nodes array
2. let find subscribe input wich i % 2 == 0 
3. lets find unscubscribe input which is i % 1 == 0
4. we need index
*/

let subscribe = Array.from(document.querySelectorAll('input[type="radio"]')).indexOf(Array.from(document.querySelectorAll('input[type="radio"]'))[0])
let unsubscribe = Array.from(document.querySelectorAll('input[type="radio"]')).indexOf(Array.from(document.querySelectorAll('input[type="radio"]'))[0])

// subscirbe checked
function myFunc() {
    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {

        if (i % 2 !== 0) {
            (document.querySelectorAll('input[type="radio"]'))[i].checked = false
            console.log(Array.from(document.querySelectorAll('input[type="radio"]'))[(i - 1)])
        }
    }

}
// unsubscribe checked 
function myFunc() {
    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {

        if (i % 2 == 0) {
            (document.querySelectorAll('input[type="radio"]'))[i].checked = false
            console.log(Array.from(document.querySelectorAll('input[type="radio"]'))[(i - 1)])
        }
    }

}



myFunc()



/*

have to check only one previous element of array

*/