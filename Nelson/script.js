window.addEventListener("load", function(event) {
    let schools = document.querySelector(".conditional-dropdown select");
    for (var i = 0; i < schools.options.length; i++) {
        if (schools.options[0].selected === 'selected') {
            schools.selectedIndex = 1;
            'helllo'
        }
    }
});