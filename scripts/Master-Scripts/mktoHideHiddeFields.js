MktoForms2.whenReady(function(form) {

    var formEl = form.getFormElem()[0],

        hiddenEls = formEl.querySelectorAll('.mktoFormRow INPUT[type="hidden"]');
    [].forEach.call(hiddenEls, function(el) {

        el.parentNode.style = 'width: 0; height: 0; line-height: 0; min-height: unset !important; margin:0 !important; padding:0 !important;'

    });

});