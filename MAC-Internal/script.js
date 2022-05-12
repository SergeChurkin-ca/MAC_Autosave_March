// toggling tabs
const items = document.querySelectorAll(".item-title");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
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