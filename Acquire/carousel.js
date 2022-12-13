document.querySelectorAll('.owl-next')[0].addEventListener('click', carousleNext)
document.querySelectorAll('.owl-prev')[0].addEventListener('click', carouslePrev)

let owlStageContainer = document.querySelector('.owl-stage')

let outstageWidth = document.querySelector('.owl-stage-outer').offsetWidth;
let owlconatiners = Array.from(document.querySelectorAll('.owl-item'))
let startingpoint = 0 - (owlconatiners[0].offsetWidth * 3)
let total = 0 // it is 4 sums of wol contaibaers

function carousleNext() {
    total -= owlconatiners[0].offsetWidth // this is step 
    owlStageContainer.style = `transform: translate3d(calc(${total}px ), 0px, 0px); transition: all 0.25s ease 0s;width:max-content;`
    console.log.log(owlconatiners[0].offsetWidth)
}

function carouslePrev() {

    total += owlconatiners[0].offsetWidth
    owlStageContainer.style = `transform: translate3d(calc(${total}px), 0px, 0px); transition: all 0.25s ease 0s;width:max-content;`


}


window.addEventListener("load", (event) => {
    owlconatiners.map((x) => x.style = `width: calc((${outstageWidth}px / 3)) !important;`)

    let startingpoint = 0 - (owlconatiners[0].offsetWidth * 4)

    function duplicateChildNodes(parentId) {
        var parent = document.getElementsByClassName('owl-stage')[0];
        NodeList.prototype.forEach = Array.prototype.forEach;
        var children = parent.childNodes;
        children.forEach(function(item) {
            var cln = item.cloneNode(true);
            parent.appendChild(cln);
        });
    };
    duplicateChildNodes();
    owlStageContainer.style = `transform: translate3d(calc(${startingpoint - 0 }px), 0px, 0px); transition: all 0.25s ease 0s;width:max-content;`

});







window.addEventListener('resize', windowResize)

function windowResize() {
    owlconatiners.map((x) => x.style = `width: calc((${outstageWidth}px / 3)) !important;`)

}

// starting point i 1200


// step is owlcontainer width