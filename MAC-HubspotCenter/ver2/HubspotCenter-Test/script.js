// toggling tabs
const items = document.querySelectorAll(".item-title");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active2");
        current[0].parentNode.className = current[0].parentNode.className.replace("open", "closed");
        current[0].className = current[0].className.replace(" active2", "");

        console.log(current.length)

        this.className += " active2";
        this.parentNode.className = "open"

    });
}

// arrow accordion 

const containers = document.querySelectorAll(".list-row-1", ":after");

containers.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        item.previousElementSibling.classList.toggle("expand")
    });
});


const items2 = document.querySelectorAll(".arrow-container");

items2.forEach((item) => {
    item.addEventListener("click", () => {
        item.previousElementSibling.classList.toggle("untoggled");
        item.childNodes[0].classList.toggle('rotate')
    });
});



// dropdown menu


jQuery(function($) {
    if ($(window).width() > 769) {
        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(150).slideDown();
        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
        });
        $('.navbar .dropdown > a').click(function() {
            location.href = this.href;
        });
    }
});



// add height to #bannernew depending on hieght of container with form
const bannerNew = document.getElementById('bannernew')
let innerContainerInitHeight;
if (window.innerWidth < 1065 && window.innerWidth > 505) {
    innerContainerInitHeight = document.querySelectorAll('.inner-container')[0].clientHeight + document.querySelectorAll('.inner-container')[0].clientHeight - 195;
} else if (window.innerWidth < 505) {
    innerContainerInitHeight = document.querySelectorAll('.inner-container')[0].clientHeight + document.querySelectorAll('.inner-container')[0].clientHeight - 90;
    console.log('chipr')
} else {
    innerContainerInitHeight = document.querySelectorAll('.inner-container')[0].clientHeight + 100;
}

bannerNew.style = `height: calc(${innerContainerInitHeight}px + 800px) !important;`

function chageBannerHeight() {
    const innerContainerHeight = document.querySelectorAll('.inner-container')[0].clientHeight
    bannerNew.style = `height: calc(${innerContainerHeight}px + 550px) !important;`
}

window.addEventListener('resize', chageBannerHeight)