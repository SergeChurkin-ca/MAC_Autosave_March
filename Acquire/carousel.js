document.querySelectorAll('.owl-next')[0].addEventListener('click', carousleNext)
document.querySelectorAll('.owl-prev')[0].addEventListener('click', carouslePrev)

let owlStageContainer = document.querySelector('.owl-stage')

let outstageWidth = document.querySelector('.owl-stage-outer').offsetWidth;
let owlconatiners = Array.from(document.querySelectorAll('.owl-item'))

let total = 0

function carousleNext() {
    total -= 296
    owlStageContainer.style = `transform: translate3d(calc(${total - 0 }px), 0px, 0px); transition: all 0.25s ease 0s;`

}

function carouslePrev() {
    total += 296
    owlStageContainer.style = `transform: translate3d(calc(${total - 0}px), 0px, 0px); transition: all 0.25s ease 0s;`
}

/*
window.onresize = reportWindowSize;

function reportWindowSize() {

    owlconatiners.map((x) => x.offsetWidth = 900)
}

*/





window.addEventListener("load", (event) => {
    owlconatiners.map((x) => x.style = `width: calc((${outstageWidth}px / 3)) !important;`)
});