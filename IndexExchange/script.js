MktoForms2.whenReady(function(form) {
    const targetedInput = Array.from(document.querySelectorAll('input')).map(x => x.addEventListener('keydown', myFunction))

    function myFunction(e) {
        console.log(e.target.type !== 'checkbox' || e.target.type !== 'hidden')


        if (e.target.type !== 'checkbox' || e.target.type !== 'hidden') {
            e.target.parentNode.querySelector('label').style = " top: -3px; transition: all 0.5s; font-size: 12px !important;"
        }



    }
})