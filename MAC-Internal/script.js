const items = document.querySelectorAll(".item-title");

// const container = document.querySelectorAll(".item")

// items.forEach((item) => {
//     item.addEventListener("click", () => {
//         item.parentNode.classList.toggle("open");
//     });
// });

// so we add class to active one
//  have to remove class from all others how?




for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].parentNode.className = current[0].parentNode.className.replace(" open", "closed");
        current[0].className = current[0].className.replace(" active", "");


        this.className += " active";
        this.parentNode.className += " open"

    });
}