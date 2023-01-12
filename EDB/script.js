   Array.from(document.querySelectorAll('input')).map((x) => x.addEventListener('change', myFunc))

   function myFunc() {
       Array.from(document.querySelectorAll('input')).map((x) => x.value !== '' ? x.parentElement.classList.add('activefield') : x.parentElement.classList.remove('activefield'))
   }