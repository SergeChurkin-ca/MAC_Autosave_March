const previousMasterField = document.querySelectorAll('.dependentField')[0].previousElementSibling.previousElementSibling;


document.querySelectorAll('.dependentFieldSlave')[0].style.display == "none" ? previousMasterField.style = "width: calc((100% / 3 ) + 30% + 2rem) !important" : previousMasterField.style = "width: calc((100% / 3 ) - 1rem) !important";