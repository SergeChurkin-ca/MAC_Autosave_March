  document.querySelector('.nav-toggle-button').addEventListener("click", mobMenuToggle);

  function mobMenuToggle(e) {
      document.querySelectorAll('.primary-nav-wrapper')[0].classList.toggle("active")
      console.log('hello')
  }

  Array.from(document.querySelectorAll('.open-filters')).map(x => x.addEventListener('click', subMenuToggle))

  function subMenuToggle(e) {
      e.target.parentNode.parentNode.nextElementSibling.classList.toggle("show")
  }