MktoForms2.whenReady(function (form) {
    var emailFields = ["Email", "Email_Address_2__c"],
        emailBannedPatterns = [
            /@gmail\./,
            /@yahoo\./,
            /@hotmail\./,
            /@live\./,
            /@aol\./,
              /@test\./,
            /@outlook\./
        ],
        emailBannedMessage = "Please insert a valid work email address.",
        showMessageNearSubmit = false;

    /* --- NO NEED TO EDIT BELOW THIS LINE! --- */

    form.onValidate(function (nativeValid) {
        if (!nativeValid) return;

        var formEl = form.getFormElem()[0],
            currentValues = form.getValues(),
            buttonEl = formEl.querySelector(".mktoButtonWrap"),
            highlightEl,
            allEmailsAllowed;

        allEmailsAllowed = !emailFields.some(function (fieldName) {
            if (isEmailBanned(currentValues[fieldName])) {
                return highlightEl = formEl.querySelector("[name='" + fieldName + "']");
            }
        });

        buttonEl.removeAttribute("data-error-message");
        if (!allEmailsAllowed) {
            form.showErrorMessage(emailBannedMessage, MktoForms2.$(highlightEl));
            if (showMessageNearSubmit) {
                buttonEl.setAttribute("data-error-message", emailBannedMessage);
            }
        }

        form.submittable(allEmailsAllowed);
    });

    function isEmailBanned(emailAddress) {
        return emailBannedPatterns.some(function (pattern) {
            return new RegExp(pattern.source + "[a-z0-9-.]+$", "i").test(emailAddress);
        });
    }
});