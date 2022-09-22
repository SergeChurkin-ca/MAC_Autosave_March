  var getFavicon = function() {
      var favicon = undefined;
      var nodeList = document.getElementsByTagName("link");
      for (var i = 0; i < nodeList.length; i++) {
          if ((nodeList[i].getAttribute("rel") == "icon") || (nodeList[i].getAttribute("rel") == "shortcut icon")) {
              favicon = nodeList[i].getAttribute("href");
          }

      }
      return favicon;

  }

  alert(getFavicon());





  // another one


  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      faviconEl.setAttribute('class', 'change 1');
      document.body.style = 'background: black;'
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      faviconEl.setAttribute('class', 'change 2')
      document.body.style = 'background: red;'
  }



  mediaQuery.addEventListener('change', themeChange)

  function themeChange(event) {
      if (event.matches) {
          faviconEl.setAttribute('class', 'dark-scheme-favicon')
              // document.body.style = 'background: black;'
          document.getElementsByTagName('head')[0].appendChild(document.querySelector('link[rel="shortcut icon"]'))
      } else {
          faviconEl.setAttribute('class', 'light-scheme-favicon')
              // document.body.style = 'background: blue;'
          document.getElementsByTagName('head')[0].appendChild(document.querySelector('link[rel="shortcut icon"]'))
      }
  }


  //   goes to page
  MktoForms2.whenReady(function(form) {
      const faviconEl = document.querySelector('link[rel="shortcut icon"]')

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          faviconEl.setAttribute('class', 'dark-scheme-favicon')
          document.getElementsByTagName('head')[0].appendChild(document.querySelector('link[rel="shortcut icon"]'))
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          faviconEl.setAttribute('class', 'light-scheme-favicon')
              // document.body.style = 'background: blue;'
          document.getElementsByTagName('head')[0].appendChild(document.querySelector('link[rel="shortcut icon"]'))
      }

      mediaQuery.addEventListener('change', themeChange)

      function themeChange(event) {
          if (event.matches) {
              faviconEl.setAttribute('class', 'dark-scheme-favicon')
              document.getElementsByTagName('head')[0].appendChild(document.querySelector('link[rel="shortcut icon"]'))
          } else {
              faviconEl.setAttribute('class', 'light-scheme-favicon')
              document.getElementsByTagName('head')[0].appendChild(document.querySelector('link[rel="shortcut icon"]'))
          }
      }

  })




  window.onload = (function(form) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      // get attribute of light scheme favicon
      const attibuteLightSchemeFav = document.querySelectorAll('.light-scheme-favicon')[0].getAttribute('href')
      const attibuteDarkSchemeFav = document.querySelectorAll('.dark-scheme-favicon')[0].getAttribute('href')

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

          Array.from(document.querySelectorAll('link[rel="shortcut icon"]')).map(x => x.setAttribute('href', attibuteDarkSchemeFav))

      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          Array.from(document.querySelectorAll('link[rel="shortcut icon"]')).map(x => x.setAttribute('href', attibuteLightSchemeFav))
      }

      mediaQuery.addEventListener('change', themeChange)

      function themeChange(event) {
          if (event.matches) {
              Array.from(document.querySelectorAll('link[rel="shortcut icon"]')).map(x => x.setAttribute('href', attibuteDarkSchemeFav))
          } else {

              Array.from(document.querySelectorAll('link[rel="shortcut icon"]')).map(x => x.setAttribute('href', attibuteLightSchemeFav))
          }
      }

  })