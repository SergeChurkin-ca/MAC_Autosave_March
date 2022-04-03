document.querySelectorAll("[name^='Email_Opt_in_old__c']")[0].checked === true ? document.querySelectorAll("[name^='Email_Opt_in_old__c']")[1].checked = 'false' :
    document.querySelectorAll("[name^='Email_Opt_in_old__c']")[1].checked = 'true'



Array.from(document.querySelectorAll("[name^='Text_Opt_In_old__c']"))[0].addEventListener('click', myFunction5)

function myFunction5() {
    if (document.querySelectorAll("[name^='Text_Opt_In_old__c']")[0].checked === true) {
        document.querySelectorAll("[name^='Text_Opt_In_old__c']")[1].checked = false

    }
}

Array.from(document.querySelectorAll("[name^='Text_Opt_In_old__c']"))[1].addEventListener('click', myFunction6)

function myFunction6() {
    if (document.querySelectorAll("[name^='Text_Opt_In_old__c']")[1].checked === true) {
        document.querySelectorAll("[name^='Text_Opt_In_old__c']")[0].checked = false

    }
}