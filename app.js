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
});