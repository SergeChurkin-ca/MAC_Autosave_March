const previousMasterField = document.querySelectorAll('.dependentField')[0].previousElementSibling.previousElementSibling;


document.querySelectorAll('.dependentFieldSlave')[0].style.display !== "none" || document.querySelectorAll('.dependentFieldSlave')[0].style.display !== "" ? previousMasterField.style.width = " calc((100% / 3 ) - 1rem)" : previousMasterField.style.width = "calc((100% / 2 ) - 1rem)"

console.log('check dynamic function: ', document.querySelectorAll('.dependentFieldSlave')[0].style.display)