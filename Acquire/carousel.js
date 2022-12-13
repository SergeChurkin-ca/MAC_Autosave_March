document.querySelectorAll('.owl-next')[0].addEventListener('click', carousleNext)
document.querySelectorAll('.owl-prev')[0].addEventListener('click', carouslePrev)

let owlStageContainer = document.querySelector('.owl-stage')

let outstageWidth = document.querySelector('.owl-stage-outer').offsetWidth;
let owlconatiners = Array.from(document.querySelectorAll('.owl-item'))

let total = 0

function carousleNext() {
    total -= owlconatiners[0].offsetWidth
    owlStageContainer.style = `transform: translate3d(calc(${total - 0 }px), 0px, 0px); transition: all 0.25s ease 0s;width:max-content;`

    console.log('total is', total)

    if (Array.from(document.querySelectorAll('.owl-item')).length <= 4) {
        function duplicateChildNodes(parentId) {
            let parent = document.getElementsByClassName('owl-stage')[0];
            NodeList.prototype.forEach = Array.prototype.forEach;
            let children = parent.childNodes;
            children.forEach(function(item) {
                let cln = item.cloneNode(true);
                parent.appendChild(cln);
            });
        };
        duplicateChildNodes();
    }
}

function carouslePrev() {

    total += owlconatiners[0].offsetWidth
    owlStageContainer.style = `transform: translate3d(calc(${total - 0}px), 0px, 0px); transition: all 0.25s ease 0s;width:max-content;`

    if (Array.from(document.querySelectorAll('.owl-item')).length <= 8) {
        function duplicateChildNodes(parentId) {
            let parent = document.getElementsByClassName('owl-stage')[0];
            NodeList.prototype.forEach = Array.prototype.forEach;
            let children = parent.childNodes;
            children.forEach(function(item) {
                let cln = item.cloneNode(true);
                // parent.appendChild(cln);
                // console.log(parent.firstElementChild.innerHTML)
                parent.insertBefore(cln, parent.firstElementChild)



            });
        };
        duplicateChildNodes();
    }
}



window.addEventListener("load", (event) => {
    owlconatiners.map((x) => x.style = `width: calc((${outstageWidth}px / 3)) !important;`)

});




// function duplicateChildNodes(parentId) {
//     var parent = document.getElementsByClassName('owl-stage')[0];
//     NodeList.prototype.forEach = Array.prototype.forEach;
//     var children = parent.childNodes;
//     children.forEach(function(item) {
//         var cln = item.cloneNode(true);
//         parent.appendChild(cln);
//     });
// };

// function duplicateChildNodes2(parentId) {
//     var parent = document.getElementsByClassName('owl-stage')[0];
//     NodeList.prototype.forEach = Array.prototype.forEach;
//     var children = parent.childNodes;
//     children.forEach(function(item) {
//         var cln = item.cloneNode(true);
//         parent.appendChild(cln);
//     });
// };



// duplicateChildNodes();
// duplicateChildNodes2();


window.addEventListener('resize', windowResize)

function windowResize() {
    owlconatiners.map((x) => x.style = `width: calc((${outstageWidth}px / 3)) !important;border: solid 1px red;`)

}