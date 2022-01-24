MktoForms2.whenReady(function(form) {

    let allarray = Array.from(document.querySelectorAll('.mktoFormRow'))
    allarray.map(x => allarray.indexOf(x) == 0 ? x.style.display = "block" : x.style.display = "none")


    Array.from(document.querySelectorAll('input'))[0].onchange = handleChange;

    function handleChange() {
        console.log("chirp")


        for (let i = 0; i <= Array.from(document.querySelectorAll('.mktoFormRow')).length; i++) {

            console.log('check loop', i)
            if (Array.from(document.querySelectorAll('input[data-zi-input-enriched="true"]'))[i]) {
                Array.from(document.querySelectorAll('input[data-zi-input-enriched="true"]'))[i].parentElement.parentElement.parentElement.style = "display: none"

            } else if (Array.from(document.querySelectorAll('input[data-zi-input-enriched="false"]'))[i]) {
                Array.from(document.querySelectorAll('input[data-zi-input-enriched="false"]'))[i].parentElement.parentElement.parentElement.style = "display: block"

            }
        }


    }
})