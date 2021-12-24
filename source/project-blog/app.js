const login = document.querySelector('.login')
const popupLayout = document.querySelector('.popup')
const popupContent = document.querySelector('popup-content')

login.addEventListener('click', function(e){
    popupLayout.classList.add('open')
})

popupLayout.addEventListener('click', function(e){
    if (e.target.classList.contains('popup-body')) {
        popupLayout.classList.remove('open');
    }
})


// popupContent.addEventListener('click', function(){
//     return false;
// })

