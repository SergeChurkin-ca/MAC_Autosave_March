let scrollBtns = Array.from(document.querySelectorAll('button'))




for (let i = 0; i < 2; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', myFunction)

    function myFunction() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    console.log('check function - it works!')
}