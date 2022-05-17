// toggling tabs
const items = document.querySelectorAll(".item-title");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].parentNode.className = current[0].parentNode.className.replace("open", "closed");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        this.parentNode.className = "open"
    });
}

// arrow accordion 

const containers = document.querySelectorAll("li", ":after");

containers.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        item.previousElementSibling.classList.toggle("expand")
    });
});

// toggle sections

const arrows = document.querySelectorAll(".arrow-container");
const arrow = document.querySelectorAll(".arrow-container > .arrow-toggle")
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('toggled-content');
        current[0].className = current[0].className.replace('toggled-content', 'untoggled');
        arrow[i].style = 'transform:rotate(180deg);'
    })
}