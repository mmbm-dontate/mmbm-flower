const offerButton = document.getElementById("offerBtn");
const message = document.getElementById("message");
const deityContainer = document.getElementById("deityContainer");
const flowerBed = document.getElementById("flowerBed");

const flowers = [];

offerButton.addEventListener("click", function(){

    message.innerHTML =
    "🙏 Your flower has been offered successfully.";

    const flower = document.createElement("img");

    flower.src = "images/images.png";

    flower.classList.add("flower");
    
    const startX = Math.floor(Math.random() * 120) + 120;

    flower.style.left = startX + "px";

    flower.style.top = "-60px";

    deityContainer.appendChild(flower);

});
