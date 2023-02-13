var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://go.formassembly.com/rs/794-XNU-091/images/emails.json', true);
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status === 200) {
        var invalidDomains = xhr.response.invalidDomains;

        document.getElementById("submit-button").addEventListener("click", function() {
            var email = document.getElementById("email").value;
            var emailDomain = email.split("@")[1];

            if (invalidDomains.indexOf(emailDomain) !== -1) {
                alert("Must be Business email.");
            } else {
                // Continue with form submission
            }
        });

    } else {
        console.error(xhr.statusText);
    }
};
xhr.onerror = function() {
    console.error(xhr.statusText);
};
xhr.send();






(function() {
    // Please include the email domains you would like to block in this list
    var invalidDomains = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook."];

    MktoForms2.whenReady(function(form) {
        form.onValidate(function() {
            var email = form.vals().Email;
            if (email) {
                if (!isEmailGood(email)) {
                    form.submitable(false);
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Must be Business email.", emailElem);
                } else {
                    form.submitable(true);
                }
            }
        });
    });

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }
})();


(async function() {
    var invalidDomains;
    await fetch('invalidDomains.json')
        .then(response => response.json())
        .then(data => {
            invalidDomains = data;
        });

    MktoForms2.whenReady(function(form) {
        form.onValidate(function() {
            var email = form.vals().Email;
            if (email) {
                if (!isEmailGood(email)) {
                    form.submitable(false);
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Must be Business email.", emailElem);
                } else {
                    form.submitable(true);
                }
            }
        });
    });

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }
})();




MktoForms2.whenReady(function(form) {
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

    form.onValidate(function(nativeValid) {
        if (!nativeValid) return;

        var formEl = form.getFormElem()[0],
            currentValues = form.getValues(),
            buttonEl = formEl.querySelector(".mktoButtonWrap"),
            highlightEl,
            allEmailsAllowed;

        allEmailsAllowed = !emailFields.some(function(fieldName) {
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
        return emailBannedPatterns.some(function(pattern) {
            return new RegExp(pattern.source + "[a-z0-9-.]+$", "i").test(emailAddress);
        });
    }
});



(async function() {
    var invalidDomains;
    await fetch('https://go.formassembly.com/rs/794-XNU-091/images/emails.json')
        .then(response => response.json())
        .then(data => {
            invalidDomains = data;
            console.log('ping ping', invalidDomains)
        });

    MktoForms2.whenReady(function(form) {
        form.onValidate(function() {
            var email = form.vals().Email;
            if (email) {
                if (!isEmailGood(email)) {
                    form.submitable(false);
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Must be Business email.", emailElem);
                } else {
                    form.submitable(true);
                }
            }
        });
    });

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }
})();


(async function() {
    var invalidDomains = [];

    await fetch('https://go.formassembly.com/rs/794-XNU-091/images/emails.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                invalidDomains.push("@" + item.domain);
            });
        });

    MktoForms2.whenReady(function(form) {
        form.onValidate(function() {
            var email = form.vals().Email;
            if (email) {
                if (!isEmailGood(email)) {
                    form.submitable(false);
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Must be Business email.", emailElem);
                } else {
                    form.submitable(true);
                }
            }
        });
    });

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }
})();