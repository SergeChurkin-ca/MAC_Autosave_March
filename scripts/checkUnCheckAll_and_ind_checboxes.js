// THIS IS latest working function
console.log('check check - form script is working')
    // check and uncheck subsribtion options
    // checkbox event listener
let subscribeButton = document.getElementById('checkAll')
let unSubscribeButton = document.getElementById('unsubAll')

subscribeButton.addEventListener('change', subscribeToAllFunction);
unSubscribeButton.addEventListener('change', unSubscribeToAllFunction);

function subscribeToAllFunction() {
    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {

        Array.from(document.querySelectorAll('input[type="radio')).map(x => Array.from(document.querySelectorAll('input[type="radio')).indexOf(Array.from(document.querySelectorAll('input[type="radio'))[i]) % 2 == 0 ?
            Array.from(document.querySelectorAll('input[type="radio'))[i].checked = true : (Array.from(document.querySelectorAll('input[type="radio'))[i].checked = false))
    }
    console.log('subscribe function')
    unSubscribeButton.checked = false
}

function unSubscribeToAllFunction() {
    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {

        Array.from(document.querySelectorAll('input[type="radio')).map(x => Array.from(document.querySelectorAll('input[type="radio')).indexOf(Array.from(document.querySelectorAll('input[type="radio'))[i]) % 2 !== 0 ?
            Array.from(document.querySelectorAll('input[type="radio'))[i].checked = true : (Array.from(document.querySelectorAll('input[type="radio'))[i].checked = false))

    }
    console.log("unsubscribe funttion")
    SubscribeButton.checked = false
}



// now let's work on change function


Array.from(document.querySelectorAll('input[type="radio')).map(x => x.addEventListener('change', changeFunc))


function changeFunc(e) {
    if (Array.from(document.querySelectorAll('input[type="radio')).indexOf(e.target) % 2 == 0) {
        console.log(e.target)
        Array.from(document.querySelectorAll('input[type="radio'))[Array.from(document.querySelectorAll('input[type="radio')).indexOf(e.target) + 1].checked = false
    } else {
        Array.from(document.querySelectorAll('input[type="radio'))[Array.from(document.querySelectorAll('input[type="radio')).indexOf(e.target) - 1].checked = false
    }
    console.log('individual sub unsb function ')
}