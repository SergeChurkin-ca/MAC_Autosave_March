  document.querySelector('.nav-toggle-button').addEventListener("click", mobMenuToggle);

  function mobMenuToggle(e) {
      document.querySelectorAll('.primary-nav-wrapper')[0].classList.toggle("active")

  }


  /*

    const callToActionBtns = document.querySelectorAll('.open-filters');

    callToActionBtns.forEach((btn) => {

        btn.addEventListener("click", (e) => {

            //   callToActionBtns.forEach(f => f.parentNode.nextElementSibling.classList.remove("show"));

            if (!e.target.parentNode.parentNode.nextElementSibling.classList.contains("show")) {
                e.target.parentNode.parentNode.nextElementSibling.classList.add("show");
            } else if (e.target.parentNode.parentNode.nextElementSibling.classList.contains("show")) {
                e.target.parentNode.parentNode.nextElementSibling.classList.remove("show");

            }
            //   console.log(e.target.parentNode.parentNode.nextElementSibling.classList.contains("show"))

        });

    });
  */

  //   Array.from(document.querySelectorAll('.fa-angle-down')).map(x => x.addEventListener('click', subMenuToggle))

  //   function subMenuToggle(e) {
  //       e.target.parentNode.parentNode.nextElementSibling.classList.remove("show")

  //   }

  const callToActionBtns = document.querySelectorAll('.open-filters');

  callToActionBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
          // Get the siblings of the clicked element
          const siblings = [...e.target.parentNode.parentNode.nextElementSibling.parentNode.children].filter(child => child !== e.target.parentNode.parentNode.nextElementSibling);

          // Iterate over the siblings and hide them
          siblings.forEach(sibling => {
              sibling.classList.remove("show");
          });

          // Check if the clicked element's next sibling has the class "show"
          if (!e.target.parentNode.parentNode.nextElementSibling.classList.contains("show")) {
              // If it doesn't, add the class "show"
              e.target.parentNode.parentNode.nextElementSibling.classList.add("show");
          } else if (e.target.parentNode.parentNode.nextElementSibling.classList.contains("show")) {
              // If it does, remove the class "show"
              e.target.parentNode.parentNode.nextElementSibling.classList.remove("show");
          }
      });
  });