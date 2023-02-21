MktoForms2.whenReady(function(form) {

    Array.from(document.querySelectorAll('input[type="hidden"]')).map((x) => x.parentNode.className == 'mktoFormRow' ? x.parentNode.style = 'position:absolute;top:0;visibility:hidden' : '')
    console.log('check if function works')
});






MktoForms2.whenReady(function(form) {
    Array.from(document.querySelectorAll('input[type="hidden"]')).map((x) => x.parentNode.className == 'mktoFormRow' ? x.parentNode.classList.add('hiddenClass') : '');
    document.querySelectorAll('.scriptText')[0].parentNode.parentNode.parentNode.parentNode.classList.add('hiddenClass');

});





window.MktoForms2BehaviorsRunCache = window.MktoForms2BehaviorsRunCache || {};

(function() {

    var thisBehavior = "hiddenClassFunc";

    if (thisBehavior in window.MktoForms2BehaviorsRunCache) {
        return;
    } else {
        window.MktoForms2BehaviorsRunCache[thisBehavior] = new Date();
    }


    function hiddenClassFunc() {
        Array.from(document.querySelectorAll('input[type="hidden"]')).map((x) => x.parentNode.className == 'mktoFormRow' ? x.parentNode.classList.add('hiddenClass') : '')
    }

})();