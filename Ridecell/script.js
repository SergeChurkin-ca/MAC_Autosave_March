MktoForms2.whenReady(function(form) {


    Array.from(document.querySelectorAll('input[type="checkbox"]')).map((x) => x.parentNode.parentNode.parentNode.parentNode.classList.add('checkboxContainer'))




    Array.from(document.querySelectorAll('input[type="checkbox"]')).map((x) => x.addEventListener('change', hiddenFunction))

    function hiddenFunction(e) {
        const inputName = e.target.value;
        const inputs = document.querySelectorAll(`input[name="${inputName}"]`);

        if (inputName === "Mail" && inputName == "Phone") {
            inputs.forEach(input => {
                input.parentNode.parentNode.parentNode.classList.toggle('hiddenRow')
            });
        }

    }

});




// what hidden function does
// 1. if input n

document.querySelectorAll(`input[name="Email"]`)[0].parentNode.parentNode.parentNode.classList.add('hiddenRow');
document.querySelectorAll(`input[name="Phone"]`)[0].parentNode.parentNode.parentNode.classList.add('hiddenRow');

Array.from(document.querySelectorAll('input[type="checkbox"]')).map((x) => x.addEventListener('change', hiddenFunction))

function hiddenFunction(e) {
    const inputName = e.target.value;
    console.log(inputName)
    if (inputName === "Email") {
        document.querySelectorAll(`input[name="Email"]`)[0].parentNode.parentNode.parentNode.classList.toggle('hiddenRow');
    } else if (inputName === "Phone") {
        document.querySelectorAll(`input[name="Phone"]`)[0].parentNode.parentNode.parentNode.classList.toggle('hiddenRow');
    }

}