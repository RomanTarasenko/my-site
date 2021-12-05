let count = 0;
let width;
let x1 = null;
let y1 = null;

function scrollTo() {
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

document.addEventListener("DOMContentLoaded", function () {
    let upButton = document.querySelector('.up-button');
    window.onscroll = function () {
        if (window.pageYOffset > 200) {
            upButton.style.display = "inline-block";
        } else {
            upButton.style.display = "none";
        }
    }
    upButton.addEventListener('click', () => {
        scrollTo();
    })

    const images = document.querySelectorAll('.slider .slider-line .slider-img img')
    let sliderLine = document.querySelector('.slider-line')

    function init() {
        console.log('resize')
        width = document.querySelector('.slider').offsetWidth
        sliderLine.style.width = width * images.length + 'px'
        images.forEach(item => {
            item.style.width = width + 'px'
            item.style.height = 'auto'
        })
        rollSlider()
    }
    window.addEventListener('resize', init)
    init()

    document.querySelector('.slider-prev').addEventListener('click', function() {
        count--;
        if (count < 0) {
            count = images.length - 1
        }
        rollSlider()
    })

    document.querySelector('.slider-next').addEventListener('click', function() {
        count++;
        if (count >= images.length) {
            count = 0
        }
        rollSlider()
    })

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' +count * width + 'px)'
    }

    const sliderBlock = document.querySelector('.slider')
    sliderBlock.addEventListener('touchstart', handleTouchStart, false)
    sliderBlock.addEventListener('touchmove', handleTouchMove, false)


    function handleTouchStart(event) {
        const firstTouch = event.touches[0]
        x1 = firstTouch.clientX
    }
    
    function handleTouchMove(event) {
        if (!x1) {
            return false
        }

        let x2 = event.touches[0].clientX
        let xDiff = x2 - x1

        if (xDiff > 0) {
            count++;
        if (count >= images.length) {
            count = 0
        }
        rollSlider()
        }
        else {
            count--;
        if (count < 0) {
            count = images.length - 1
        }
        rollSlider()
        }
        x1 = null
        y1 = null
    }
});

