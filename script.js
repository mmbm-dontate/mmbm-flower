const offerButton = document.getElementById("offerBtn");
const message = document.getElementById("message");
const deityContainer = document.getElementById("deityContainer");

offerButton.addEventListener("click", function(){

    message.innerHTML =
    "🙏 Your flower has been offered successfully.";

    const flower = document.createElement("img");

    flower.src = "images/images.jpg";

    flower.style.width = "45px";

    flower.style.position = "absolute";

    flower.style.left = "180px";

    flower.style.top = "-60px";

    deityContainer.appendChild(flower);

});
