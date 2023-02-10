   (async function() {
       var invalidDomains = [];

       await fetch('https://go.formassembly.com/rs/794-XNU-091/images/excluding_email_domains.json')
           .then(response => response.json())
           .then(data => {
               data.forEach(item => {
                   invalidDomains.push("@" + item.domain);
               });
               console.log('ping', invalidDomains)
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