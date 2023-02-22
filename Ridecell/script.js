MktoForms2.whenReady(function(form) {


    Array.from(document.querySelectorAll('input[type="checkbox"]')).map((x) => x.parentNode.parentNode.parentNode.parentNode.classList.add('checkboxContainer'))

});