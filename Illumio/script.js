  document.querySelector('.nav-toggle-button').addEventListener("click", mobMenuToggle);

  function mobMenuToggle(e) {
      document.querySelectorAll('.primary-nav-wrapper')[0].classList.toggle("active")

  }


  const callToActionBtns = document.querySelectorAll('.open-filters');

  callToActionBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
          // Get the siblings of the clicked element
          const siblings = [...e.target.parentNode.parentNode.nextElementSibling.parentNode.children].filter(child => child !== e.target.parentNode.parentNode.nextElementSibling);

          // Iterate over the siblings and hide them
          siblings.forEach(sibling => {
              sibling.classList.remove("show");
              document.querySelectorAll('.fa-angle-down').forEach(x => x.style.transform = "rotate(0deg");
          });

          // Check if the clicked element's next sibling has the class "show"
          if (!e.target.parentNode.parentNode.nextElementSibling.classList.contains("show")) {
              // If it doesn't, add the class "show"
              e.target.parentNode.parentNode.nextElementSibling.classList.add("show");
              // Rotate the clicked element 180 degrees
              e.target.style.transform = "rotate(180deg)";
          } else if (e.target.parentNode.parentNode.nextElementSibling.classList.contains("show")) {
              // If it does, remove the class "show"
              e.target.parentNode.parentNode.nextElementSibling.classList.remove("show");
              // Rotate the clicked element back to its original position
              e.target.style.transform = "rotate(0deg)";
          }


      });
  });