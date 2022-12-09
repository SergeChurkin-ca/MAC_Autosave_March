document.querySelectorAll('.owl-next')[0].addEventListener('click', carousleNext)
document.querySelectorAll('.owl-prev')[0].addEventListener('click', carouslePrev)
let owlStageContainer = document.querySelectorAll('.owl-stage')[0]

let total = 0

function carousleNext() {
    total -= 200

    owlStageContainer.style = `transform: translate3d(calc(${total -1477}px), 0px, 0px); transition: all 0.25s ease 0s;`
}





function carouslePrev() {

    owlStageContainer.style = "transform: translate3d(-1077px, 0px, 0px); transition: all 0.25s ease 0s;"
}