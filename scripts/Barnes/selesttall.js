MktoForms2.whenReady(function(form) {
    let queryLength = Array.from(document.querySelectorAll('input[type="checkbox"]'))

    let firstCheckBox = queryLength[0]

    firstCheckBox.addEventListener('change', checkUncheck)

    function checkUncheck() {
        for (i = 1; i < queryLength.length - 1; i++) {
            if (firstCheckBox.checked) {
                queryLength[i].checked = true
                console.log('checked')
            } else if (!firstCheckBox.checked) {
                queryLength[i].checked = false
                console.log('unchecked')
            }
        }
    }
})