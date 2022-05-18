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


const items2 = document.querySelectorAll(".arrow-container");

items2.forEach((item) => {
    item.addEventListener("click", () => {
        item.previousElementSibling.classList.toggle("untoggled");
        item.childNodes[0].classList.toggle('rotate')
    });
});