   MktoForms2.whenReady(function(form) {

       let queryLength = Array.from(document.querySelectorAll('input[type="checkbox"]'))

       let firstGroupCheckBox = queryLength[0]
       let secondGroupCheckBox = queryLength[4]



       firstGroupCheckBox.addEventListener('change', checkUncheck1)
       secondGroupCheckBox.addEventListener('change', checkUncheck2)

       function checkUncheck1() {
           console.log('first function works')
           for (i = 1; i < 4; i++) {
               if (firstGroupCheckBox.checked) {
                   queryLength[i].checked = true
               } else if (!firstGroupCheckBox.checked) {
                   queryLength[i].checked = false
               }
           }
       }

       function checkUncheck2() {
           console.log('second function works')
           for (i = 4; i < 11; i++) {
               if (secondGroupCheckBox.checked) {
                   queryLength[i].checked = true
               } else if (!secondGroupCheckBox.checked) {
                   queryLength[i].checked = false
               }
           }
       }

   })