MktoForms2.whenReady(function(form) {
    Array.from(document.querySelectorAll('input[type=checkbox]'))[0].parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.add('hideAtStart');

})

function uncheckFunction() {
    // get all checkboxes on the page
    const checkboxes2 = Array.from(document.querySelectorAll('input[type=checkbox]'));



    // check if the "other" checkbox is checked
    const otherCheckbox = checkboxes2.find((checkbox) => checkbox.value.toLowerCase() === 'other');


    if (otherCheckbox.checked) {
        // show the next .mktoFormRow element
        const currentRow = otherCheckbox.parentNode.parentNode.parentNode.parentNode
        if (currentRow) {
            const nextRow = currentRow.nextElementSibling;
            if (nextRow && nextRow.classList.contains('mktoFormRow')) {
                nextRow.style = 'display: block !important;';
            }
        }
    } else {
        const currentRow = otherCheckbox.parentNode.parentNode.parentNode.parentNode
        if (currentRow) {
            const nextRow = currentRow.nextElementSibling;
            if (nextRow && nextRow.classList.contains('mktoFormRow')) {
                nextRow.style = 'display: none !important;';
            }
            if (nextRow && nextRow.classList.contains('mktoFormRow')) {
                // Check if any checkboxes within the next row are checked
                const isChecked = Array.from(nextRow.querySelectorAll('input[type=checkbox]'))
                    .some((checkbox) => checkbox.checked);

                if (isChecked) {
                    nextRow.style = 'display: block !important;';
                }
            }
        }
    }

    // uncheck all checkboxes2 that are not the one that triggered the event
    checkboxes2.forEach((checkbox) => {
        if (checkbox !== this) {
            checkbox.checked = false;
        }
    });
}

// add event listener to all checkboxes2 on the page
const checkboxes2 = Array.from(document.querySelectorAll('input[type=checkbox]'));
checkboxes2.forEach((checkbox) => {
    checkbox.addEventListener('change', uncheckFunction);
});