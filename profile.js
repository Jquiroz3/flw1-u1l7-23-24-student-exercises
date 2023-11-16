// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Jimena Quiroz";

    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://i.pinimg.com/originals/5a/bc/b9/5abcb94311f76a3e0fbc51196a6fb057.jpg";

    // 3. Updated the src of main to a photo that's be your first post.
main.src = "https://media0.giphy.com/media/qPoCDRpGkRG5a/giphy.gif";

});