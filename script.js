const offerButton = document.getElementById("offerBtn");
const message = document.getElementById("message");
const deityContainer = document.getElementById("deityContainer");
const flowerBed = document.getElementById("flowerBed");

const flowers = [];
const landingPositions = [
    110,
    140,
    170,
    200,
    230,
    260,
    290
];
const counter =
document.getElementById("counter");

let flowerCount = 0;

offerButton.addEventListener("click", function(){

    message.innerHTML =
    "🙏 Your flower has been offered successfully.";

    const flower = document.createElement("img");

    flower.src = "images/images.png";

    flower.classList.add("flower");
    
    const randomIndex =
    Math.floor(Math.random() * landingPositions.length);

    flower.style.left =
    landingPositions[randomIndex] + "px";
    
    flower.style.top = "-60px";

    deityContainer.appendChild(flower);
    flowers.push(flower);

    flowerCount++;

    counter.innerHTML =
    "Flowers Offered : " + flowerCount;

    if(flowers.length > 30){

    const oldFlower = flowers.shift();

    oldFlower.remove();

}

});
