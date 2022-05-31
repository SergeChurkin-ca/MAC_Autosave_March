// add height to #bannernew depending on hieght of container with form
const bannerNew = document.getElementById('bannernew')
let innerContainerHeight = document.querySelectorAll('.inner-container')[0].offsetHeight
bannerNew.style = `height: calc(${innerContainerHeight}px + 800px);`

function chageBannerHeight() {
    let innerContainerHeight = document.querySelectorAll('.inner-container')[0].offsetHeight
    console.log(innerContainerHeight, 'height of inner container')
    bannerNew.style = `height: calc(${innerContainerHeight}px + 550px) !important;`
}

window.addEventListener('resize', chageBannerHeight)