// document.querySelectorAll('.select-toggle-eng')
// document.querySelectorAll('.select-toggle-eng')[0]
// document.getElementsByClassName('select-toggle-eng')



// Array.from(document.querySelectorAll('input[type="checkbox"]')).map(x => x.addEventListener('click', myFunction))

document.querySelectorAll('.select-toggle-eng')[0].style = 'display: none'
document.querySelectorAll('.select-toggle-fr')[0].style = 'display: none'

document.querySelectorAll('input[type="checkbox"]')[0].addEventListener('click', myFunction)




function myFunction() {
    if (document.querySelectorAll('input[type="checkbox"]')[0].checked == true) {
        document.querySelectorAll('.select-toggle-eng')[0].style = 'display: inline-block;'
    } else {
        document.querySelectorAll('.select-toggle-eng')[0].style = 'display: none;'
    }
}