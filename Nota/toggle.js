document.querySelectorAll('.stack-container').length
let containersLength = Array.from(document.querySelectorAll('.stack-container')).length




for (let i = 3; i < containersLength; i++) {
    Array.from(document.querySelectorAll('.stack-container'))[i].style = "display: none;"
        // Array.from(document.querySelectorAll('.stack-container'))[i].querySelectorAll('*')[0].style = "height: 0; display: none;"
    document.querySelectorAll('.carret-up')[0].style = "transform: rotateX(178deg);"
}


document.querySelectorAll('.carret-up')[0].addEventListener('click', unToggleFunction)


function unToggleFunction() {
    for (let i = 3; i < containersLength; i++) {

        if (document.querySelector('.carret-up').className.match('untoggled') === null) {

            Array.from(document.querySelectorAll('.stack-container')).map(x => x.style = "display:flex;")


            // document.querySelector('.stack-container').classList.toggle('show');
            Array.from(document.querySelectorAll('.stack-container')).map(x => x.classList.toggle('animated'))



            document.querySelectorAll('.carret-up')[0].style = "transform: rotateX(0deg);"
            document.querySelectorAll('.carret-up')[0].classList.add('untoggled')

        } else if (document.querySelector('.carret-up').className.match('untoggled') !== null) {

            for (let a = 3; a < containersLength; a++) {

                Array.from(document.querySelectorAll('.stack-container'))[a].style = "display: none"

                document.querySelectorAll('.carret-up')[0].style = "transform: rotateX(178deg);"
                document.querySelectorAll('.carret-up')[0].classList.remove('untoggled')

            }
        }
    }
}