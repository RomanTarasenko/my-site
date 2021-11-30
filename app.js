let offset = 0;

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

    const sliderLine = document.querySelector('.slider-line')

    document.querySelector('.slider-next').addEventListener('click', function () {
        offset += 1050;
        if(offset > 1100){
            offset = 0
        }
        sliderLine.style.left = -offset + 'px';
    })


    document.querySelector('.slider-prev').addEventListener('click', function () {
        offset -= 1050;
        if(offset < 0) {
            offset = 1050
        }
        sliderLine.style.left = -offset + 'px';
    })
});

