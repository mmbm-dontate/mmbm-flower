const offerButton = document.getElementById("offerBtn");
const message = document.getElementById("message");
const deityContainer = document.getElementById("deityContainer");
const flowerBed = document.getElementById("flowerBed");

const flowers = [];
const landingArea = {

    minX:110,

    maxX:290,

    minY:420,

    maxY:480

};
const counter =
document.getElementById("counter");

let flowerCount = 0;

offerButton.addEventListener("click", function(){

    message.innerHTML =
    "🙏 Your flower has been offered successfully.";

    const flower = document.createElement("img");

    flower.src = "images/images.png";

    flower.classList.add("flower");
    
    const randomX =
    Math.floor(

    Math.random() *
    (landingArea.maxX - landingArea.minX)

    ) + landingArea.minX;

    flower.style.left =
    randomX + "px";

    const randomY =
    Math.floor(

    Math.random() *
    (landingArea.maxY - landingArea.minY)

    ) + landingArea.minY;

    flower.style.top =
    randomY + "px";
    
    
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
