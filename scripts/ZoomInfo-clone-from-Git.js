// ZoomInfo + Marketo Form Listener
// Created to display or hide fields that are already validated by ZoomInfo
// This script does the following:
// 1. Adds initial state to the ZoomInfo + Marketo form (to hide init values)
// 2. Prevents non-validated users from completing the form.
// @variable form expects a Marketo "form" object (standard part of Marketo form js api)

function zoomListener(form) {
    if (!form) throw new Error('Marketo Form Element not supplied.')

    const zoomForm = form.getFormElem()[0]
    const inputs = zoomForm.elements
    const submitButton = zoomForm.querySelector('[type="submit"]')

    function showZoomError() {
        form.showErrorMessage('Email address is invalid', form.getFormElem().find('#Email'))
    }

    for (const input of inputs) {
        // On load, hide initial state of non-email fields.
        if (
            input.localName === "input" &&
            input.type !== "email" &&
            input.type !== "hidden"
        ) {
            input.closest(".mktoFormRow").hidden = true;
        }

        // Create globally scoped Mutation Observer + track changes to never bounce.
        if (input.type === 'email') {
            window._ziObserver = new MutationObserver(mutations => {
                const { ziNeverbounceStatus } = mutations[0].target.dataset
                if (ziNeverbounceStatus === 'invalid') {
                    form.submittable(false);
                    submitButton.disabled = true
                    showZoomError()
                    input.onmouseover(showZoomError)
                } else {
                    form.submittable(true);
                    submitButton.disabled = false
                }
            })

            window._ziObserver.observe(input, {
                attributes: true,
                attributeFilter: ['data-zi-neverbounce-status']
            })
        }
    }

    // Show or hide marketo fields based on `data-zi-input-enriched` property
    window._ziInputObserver = new MutationObserver(mutations =>
        mutations
        .filter(mutation => mutation.target.dataset.ziInputEnriched !== undefined)
        .map(mutation => {
            const { target } = mutation
            const { ziInputEnriched } = target.dataset
            const isTrue = (ziInputEnriched === 'true')
            const parentRow = target.closest('.mktoFormRow')
            isTrue
                ?
                parentRow.hidden = true :
                parentRow.hidden = false
        })
    )

    window._ziInputObserver.observe(zoomForm, {
        attributes: true,
        subtree: true,
        attributeFilter: ['data-zi-input-enriched']
    })
}

// Example of usage with Marketo
window.MktoForms2.whenRendered(function(form) {
    zoomListener(form)
})