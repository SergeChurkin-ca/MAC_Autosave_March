var xhr = new XMLHttpRequest();
xhr.open('GET', 'emails.json', true);
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