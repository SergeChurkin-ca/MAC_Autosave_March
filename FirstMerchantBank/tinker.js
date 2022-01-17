document.querySelectorAll('input[type="radio"]')



console.log(subscribeButtons)


document.querySelectorAll('input[type="radio"]').map(x => x.checked = true)


Array.from(document.querySelectorAll('input[type="radio"]')).map(x => x)


// get lenggth of radio buttons array

// then get indees of even and filter them out






// subscribe all function


for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
    let subscribeButtons = []
    if (i % 2 == 0)
        subscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)

    console.log(subscribeButtons)
}

// unsubscribe all function

for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
    let unsubscribeButtons = []
    if (i % 1 == 0)
        unsubscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)
    console.log(unsubscribeButtons)
}


// 
// 

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
        console.log(subscribeButtons)
    }

}

function unSubscribeToAllFunction() {

    for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
        let unsubscribeButtons = []
        if (i % 1 == 0)
            unsubscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)
        subscribeButton.checked = false
        console.log(unsubscribeButtons)
    }

}