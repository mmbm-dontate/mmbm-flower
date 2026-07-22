const offerButton = document.getElementById("offerBtn");
const message = document.getElementById("message");
const deityContainer = document.getElementById("deityContainer");
const counter = document.getElementById("counter");

const flowers = [];
let flowerCount = 0;

offerButton.addEventListener("click", function () {

    message.innerHTML = "🙏 Your flower has been offered successfully.";

    flowerCount++;
    counter.innerHTML = "Flowers Offered : " + flowerCount;

    const flower = document.createElement("img");

    flower.src = "images/images.png";
    flower.classList.add("flower");

    // Random flower size
    const size = Math.floor(Math.random() * 12) + 30;
    flower.style.width = size + "px";

    // Random horizontal position
    const startX = Math.floor(Math.random() * 170) + 120;
    flower.style.left = startX + "px";

    // Start above the image
    flower.style.top = "-60px";

    // Random animation duration
    flower.style.animationDuration =
        (3 + Math.random()).toFixed(1) + "s";

    deityContainer.appendChild(flower);

    flowers.push(flower);

    // Keep only 30 flowers visible
    if (flowers.length > 30) {

        flowers[0].style.opacity = "0";

        setTimeout(() => {

            flowers[0].remove();
            flowers.shift();

        }, 500);

    }

});
