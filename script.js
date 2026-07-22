// Find the Offer Flower button
const offerButton = document.getElementById("offerBtn");

// Find the message area
const message = document.getElementById("message");

// Run this when the button is clicked
offerButton.addEventListener("click", function () {

    message.innerHTML =
    "🙏 Your flower has been offered successfully.";

});
