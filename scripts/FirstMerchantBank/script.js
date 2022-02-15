var btns = document.querySelectorAll('input[type="radio"]')
for (var i = 0; i < btns.length; i++) {
    if (btns[i].value == "abc")
        btns[i].checked = true;
}