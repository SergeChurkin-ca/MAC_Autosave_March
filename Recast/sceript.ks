MktoForms2.whenReady(function(form) {

    Array.from(document.querySelectorAll('input[type="hidden"]')).map((x) => x.parentNode.className == 'mktoFormRow' ? x.parentNode.style = 'position:absolute;top:0;visibility:hidden' : '')

});