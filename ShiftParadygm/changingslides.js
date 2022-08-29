MktoForms2.whenReady(function(form) {

    Array.from(document.querySelectorAll('.product-img')).map(x => x.addEventListener('click', presentationFunction))

    function presentationFunction(e) {

        let productImgIndex = e.target.parentElement.classList[2].split('img')[1]

        for (let i = 0; i <= 3; i++) {
            if (Array.from(document.querySelectorAll(`.presentation-${i}`)).map(x => x.classList[1].slice(-1))[1] != productImgIndex) {
                Array.from(document.querySelectorAll(`.presentation-${i}`)).map(x => x.style = "display: none;")
            } else {
                Array.from(document.querySelectorAll(`.presentation-${i}`)).map(x => x.style = "display: flex;")
            }

        }
    }
})