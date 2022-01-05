const login = document.querySelector('.login');
const popupLayout = document.querySelector('.popup');
const popupContent = document.querySelector('popup-content');

let tweetsArr = ['first tweet', 'second tweet', 'third tweet'];

let tweet = 
        `
            <img src="img/Avatar.png" alt="avatar" class="tweet-avatar"/>
            <div>
                <div class="whose-tweet">
                    <h3>Roman Tarasenko</h3>
                    <p>@rtarasenko</p>
                    <p><img src="img/Ellipse 2.png" alt="eclips"/>20 dec</p>
                </div>
                <p class="tweet-text"></p>
            </div>
        `
    
// const Sign_up_buttons = document.querySelectorAll('.sign-up')
// const popup_sign_up_layout = document.querySelector('.popup_sign_up')
// const popup_sign_up_content = document.querySelector('popup-content_sign_up')

window.addEventListener("load", function(event) {
    const tweetsContainer = document.getElementById('tweets');
    for(let i = 0; i< tweetsArr.length; i++) {
        let div = document.createElement("div");
        div.classList.add('tweet');
        div.innerHTML = tweet;
        tweetsContainer.append(div);
    };
    const tweetsList = document.getElementsByClassName('tweet-text');
    for(let i = 0; i< tweetsList.length; i++) {
        tweetsList[i].innerHTML = tweetsArr[i];
    };
    // let tweetsList = document.querySelectorAll('tweet-text');
    // for(let i = 0; i< tweetsList.length; i++) {
    //     tweetsList[i].innerHTML = tweetsArr[i];
    // }
})

login.addEventListener('click', function(e){
    popupLayout.classList.add('open')
})

popupLayout.addEventListener('click', function(e){
    if (e.target.classList.contains('popup-body')) {
        popupLayout.classList.remove('open');
    }
})


// for(let Sign_up_button of Sign_up_buttons) {
//     Sign_up_button.addEventListener('click', function(e){
//     popup_sign_up_layout.classList.add('open')
// })
// }

// popup_sign_up_layout.addEventListener('click', function(e){
//     if (e.target.classList.contains('popup-body_sign_up')) {
//         popup_sign_up_layout.classList.remove('open');
//     }
// })




