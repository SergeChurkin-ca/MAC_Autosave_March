   Array.from(document.querySelectorAll('input')).map((x) => x.addEventListener('change', myFunc));
   Array.from(document.querySelectorAll('select')).map((x) => x.addEventListener('change', myFunc2));

   function myFunc() {
       Array.from(document.querySelectorAll('input')).map((x) => x.value !== '' ? x.parentElement.classList.add('activefield') : x.parentElement.classList.remove('activefield'))
   }

   function myFunc2(e) {
       e.target.classLsit.add('activefield')
   }




   document.querySelectorAll('.mktoCheckboxList')[0].parentElement.parentElement.parentElement.appendChild(document.querySelectorAll('.mktoCheckboxList')[0].parentElement.parentElement.parentElement.querySelectorAll('.mktoHtmlText')[0])