const login = document.querySelector('.login');
const popupLayout = document.querySelector('.popup');
const popupContent = document.querySelector('popup-content');
const tweetsCount = document.querySelector('.tweets-count');
const tweetButton = document.querySelector('.tweet-button');
const tweetField = document.querySelector('.tweet-field');

let tweetsArr = [];

const tweet = 
        `
            <img src="img/Avatar.png" alt="avatar" class="tweet-avatar"/>
            <div>
                <div class="whose-tweet">
                    <h3>Roman Tarasenko</h3>
                    <p>@rtarasenko</p>
                </div>
                <p class="tweet-text"></p>
                <p class = "tweet-date"></p>
            </div>
        `
    
// const Sign_up_buttons = document.querySelectorAll('.sign-up')
// const popup_sign_up_layout = document.querySelector('.popup_sign_up')
// const popup_sign_up_content = document.querySelector('popup-content_sign_up')

function showTweets() {
    const tweetsContainer = document.getElementById('tweets');
    tweetsContainer.innerHTML = '';
    for(let i = 0; i< tweetsArr.length; i++) {
        if (tweetsArr[i].text) {
            let div = document.createElement("div");
            div.classList.add('tweet');
            div.innerHTML = tweet;
            tweetsContainer.append(div);
        }
    };
    const tweetsList = document.getElementsByClassName('tweet-text');
    for(let i = 0; i< tweetsArr.length; i++) {
        tweetsList[i].innerHTML = tweetsArr[i].text;
    };
    const tweetsDates = document.getElementsByClassName('tweet-date');
    for(let i = 0; i< tweetsArr.length; i++) {
        tweetsDates[i].innerHTML = tweetsArr[i].date;
    };
    tweetsCount.textContent = tweetsArr.length;
}

function Tweet (text, date) {
    this.text = text;
    this.date = date;
};

window.addEventListener("load", function(event) {
    if (tweetsArr.length) {
        showTweets();
    }
});

login.addEventListener('click', function(e){
    popupLayout.classList.add('open');
});

popupLayout.addEventListener('click', function(e){
    if (e.target.classList.contains('popup-body')) {
        popupLayout.classList.remove('open');
    }
});

tweetButton.addEventListener('click', function() {
    if (tweetField.value && !tweetField.value.match(/^[ ]+$/)) {
        const currentDate = new Date()
        const newDate = currentDate.toLocaleDateString("en-US");
        const newTweet = new Tweet(tweetField.value, newDate);
        // const formatedDate = newDate.format("dd.mm.yyyy");
        tweetsArr.unshift(newTweet);
        tweetField.value = '';
        showTweets();
    }
});

tweetButton.onsubmit = function () {
    if (tweetField.value && !tweetField.value.match(/^[ ]+$/)) {
        const currentDate = new Date()
        const newDate = currentDate.toLocaleDateString("en-US");
        const newTweet = new Tweet(tweetField.value, newDate);
        // const formatedDate = newDate.format("dd.mm.yyyy");
        tweetsArr.unshift(newTweet);
        tweetField.value = '';
        showTweets();
    }
    return false;
};


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




