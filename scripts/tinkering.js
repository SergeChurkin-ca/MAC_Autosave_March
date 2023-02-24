// experiment

function uncheckFunction() {
    // get all checkboxes on the page
    const checkboxes2 = Array.from(document.querySelectorAll('input[type=checkbox]'));

    // check if the "other" checkbox is checked
    const otherCheckbox = checkboxes2.find((checkbox) => checkbox.value.toLowerCase() === 'other');
    if (otherCheckbox && otherCheckbox.checked) {
        // show the next .mktoFormRow element
        const currentRow = otherCheckbox.parentNode.parentNode.parentNode.parentNode
        if (currentRow) {
            const nextRow = currentRow.nextElementSibling;
            if (nextRow && nextRow.classList.contains('mktoFormRow')) {
                nextRow.style.display = 'none !important';
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
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', uncheckFunction);
});