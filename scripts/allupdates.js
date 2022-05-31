// select only all updates
MktoForms2.whenReady(function(form) {
    let allUpdates = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    allUpdates[0].addEventListener('change', selectAllUpdates)

    function selectAllUpdates() {
        for (let i = 0; i < 6; i++) {
            allUpdates[i].checked = true
        }
    }
});