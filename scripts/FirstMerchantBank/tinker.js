 console.log('check check - form script is working')
     // check and uncheck subsribtion options
     // checkbox event listener
 let subscribeButton = document.getElementById('checkAll')
 let unSubscribeButton = document.getElementById('unsubAll')

 subscribeButton.addEventListener('change', subscribeToAllFunction);
 unSubscribeButton.addEventListener('change', unSubscribeToAllFunction);

 function subscribeToAllFunction() {
     for (let i = 0; i <= document.querySelectorAll('input[type="radio"]').length; i++) {
         //  let subscribeButtons = []
         if (i % 2 == 0)
         //     subscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)
         //  document.querySelectorAll('input[type="radio"]')[(i % 2 == 0 ? i : false)].checked = true
         //  console.log(i % 2 == 0 ? i : 'none')
         //  document.querySelectorAll('input[type="radio"]')[i % 2].checked = false

             Array.from(document.querySelectorAll('input[type="radio"]')).map(x => Array.from(document.querySelectorAll('input[type="radio"]')).indexOf(x))
         console.log(i)

         unSubscribeButton.checked = false

     }
 }

 function unSubscribeToAllFunction() {
     for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
         //  let unsubscribeButtons = []

         if (i % 1 == 0)
         //  unsubscribeButtons = (document.querySelectorAll('input[type="radio"]')[i].checked = true)
             document.querySelectorAll('input[type="radio"]')[i + 1].checked = true
         document.querySelectorAll('input[type="radio"]')[i].checked = false
         subscribeButton.checked = false
     }
 }

 // add event listener - if individual subscribtion options are changed - bulk selection is removed

 /*   Array.from(document.querySelectorAll('input[type="radio"]')).map(x => x.addEventListener('change', uncheckOptions))

        function uncheckOptions() {
          subscribeButton.checked = false
          unSubscribeButton.checked = false
        }
*/

 document.querySelectorAll('input[type="radio"]')[i % 1 == 0].checked = false