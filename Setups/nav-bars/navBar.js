/**functions for nav-bar */
const openNav = document.querySelector('.nav-bar-open');

document.getElementById('openNavBTN').addEventListener("click", function () {
    openNav.classList.toggle('showNav');
});

/**function to control chatbox */
let chatNow = document.getElementById('chat').style;

function openChat() {
    chatNow.display = "block";
}

function closeChat() {
    chatNow.display = "none";
}