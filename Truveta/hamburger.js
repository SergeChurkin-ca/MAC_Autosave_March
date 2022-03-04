Array.from(document.querySelectorAll('.toggle-icon')).map((x) => x.addEventListener('click', hamburgerFunction))

Array.from(document.querySelectorAll(".navbar-mobile"))[0].style = 'visbility: hidden;'


function hamburgerFunction() {
    console.log('click')

    Array.from(document.querySelectorAll(".navbar-mobile"))[0].style = 'visbility: visible; display: block !important; height: 100vh !important;'
    document.getElementsByClassName('toggle-icon-1').style = 'display: none !important;';
    document.getElementsByClassName('toggle-icon-2').style = 'display: block;';
    Array.from(document.querySelectorAll('.hs-menu-item')).map((x) => x.removeEventListener('click', hamburgerFunction))
}

document.querySelectorAll('input[type="checkbox"]')[0].addEventListener('click', myFunction)


function myFunction() {
    console.log('check if tis working')

    if (document.querySelectorAll('input[type="checkbox"]')[0].checked == true) {
        document.body.style = 'overflow: hidden'
    } else {
        document.body.style = 'overflow: unset'
    }
}