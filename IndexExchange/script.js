MktoForms2.whenReady(function(form) {

    console.log(Array.from(document.querySelectorAll('input')))

    const targetedInput = Array.from(document.querySelectorAll('input')).map(x => x.addEventListener('keydown', myFunction))

    function myFunction(e) {
        console.log(e.target.parentNode.querySelectorAll('label'))
        console.log(e.target.parentNode, " this is paretn node")
        e.target.parentNode.querySelector('label').style = " top: -3px; transition: all 0.5s; font-size: 12px !important;"
    }
})