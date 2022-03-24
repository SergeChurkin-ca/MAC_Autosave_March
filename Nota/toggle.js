document.querySelectorAll('.stack-container').length
let containersLength = Array.from(document.querySelectorAll('.stack-container')).length


document.querySelectorAll('.three-columns-wrapper')[0].style = "height: 25rem;"

for (let i = 3; i < containersLength; i++) {
    Array.from(document.querySelectorAll('.stack-container'))[i].style = "transition: all 1s; visibility: hidden; height: 0; padding: 0;"

    Array.from(document.querySelectorAll('.stack-container'))[i].querySelectorAll('*')[0].style = "height: 0; display: none;"
    document.querySelectorAll('.carret-up')[0].style = "transform: rotateX(178deg);"
}




document.querySelectorAll('.carret-up')[0].addEventListener('click', toggleFunction)



function toggleFunction() {
    for (let i = 3; i < containersLength; i++) {
        Array.from(document.querySelectorAll('.stack-container'))[i].style = "transition: all 1s; visibility: visible; height: unset; padding: 3.5rem 2.5rem 0;"

        Array.from(document.querySelectorAll('.stack-container'))[i].querySelectorAll('*')[0].style = "height: unset; display: initial; transition: all 1s"

        document.querySelectorAll('.carret-up')[0].style = "transform: rotateX(0deg);"
        document.querySelectorAll('.three-columns-wrapper')[0].style = "height: unset; transition: all 0.3s;"
    }

}