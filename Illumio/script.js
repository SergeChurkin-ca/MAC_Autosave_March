  document.querySelector('.nav-toggle-button').addEventListener("click", mobMenuToggle);

  function mobMenuToggle(e) {
      document.querySelectorAll('.primary-nav-wrapper')[0].classList.toggle("active")

  }




  const callToActionBtns = document.querySelectorAll('.open-filters');

  callToActionBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
          callToActionBtns.forEach(f => f.parentNode.nextElementSibling.classList.remove("show"));
          e.target.parentNode.parentNode.nextElementSibling.classList.toggle("show");
          //   Array.from(document.querySelectorAll('.open-filters')).map(x => x.addEventListener('click', subMenuToggle))

          //   function subMenuToggle(e) {
          //       e.target.parentNode.parentNode.nextElementSibling.classList.toggle("show")

          //   }

      });
  });