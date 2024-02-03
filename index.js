const tweetContainer = document.querySelector(".tweet-container");

const postButton = document.querySelector(".post-btn");

let index = 0;

postButton.addEventListener("click", () => {
  index++;
  const textarea = document.querySelector("textarea");
  let textAreaValue = textarea.value;

  let tweetPosted = document.createElement("div");
  tweetPosted.id = index;
  tweetPosted.classList.add("posted-tweet");
  tweetPosted.textContent = textAreaValue;

  tweetContainer.appendChild(tweetPosted);
  textarea.value = "";

  tweetPosted.innerHTML = `

  <img
  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739"
  alt="profile-image"
/>
<h3>User_name</h3>
<span class="user-id">@User_id</span>
  <button class="posted-tweet-edit-btn ${index}" onclick=editTweet(${index})>
      <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661"
    alt="edit-btn"
/>
  </button>
  <button class="delete-btn ${index}" onclick=deleteTweet(${index})>
      <img
    src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643"
    alt="delete-btn"
  />
  </button>

<div class="posted-tweet-text">${textAreaValue}</div>
<button class="comment-btn  ${index}">
  <img
  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"
  alt="comment-btn"
/>
</button>
<button class="like-button-inactive ${index} onclick=likeTweet(${index}">
  <img
  class="${index}"
  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"
  alt="like-btn"
/>
</button>
  `;
});

const deleteTweet = (btnIndex) => {
  const tweet = document.getElementById(btnIndex);
  tweet.remove();
};

const editTweet = (btnIndex) => {
  const tweet = document.getElementById(btnIndex);
  const tweetText = tweet.children[5];
  tweetText.contentEditable = true;
  tweetText.classList.add("editable");
  tweetText.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      tweetText.contentEditable = false;
      tweetText.classList.remove("editable");
    }
  });
};

const likeTweet = (btnIndex) => {
  const tweet = document.getElementById(btnIndex);
  const tweetImage = tweet.children[7];
  tweetImage.src =
    "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
};
