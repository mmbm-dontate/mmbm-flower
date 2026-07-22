const SUPABASE_URL = "https://qbexbzdnevrxjxzldepy.supabase.co";

const SUPABASE_KEY = "sb_publishable_OdSrzj_esf5vemOMPJzZRg_Sa2Ud7bi";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const offerButton = document.getElementById("offerBtn");
const message = document.getElementById("message");
const deityContainer = document.getElementById("deityContainer");
const counter = document.getElementById("counter");
const devoteeCounter = document.getElementById("devoteeCounter");
const bellSound = document.getElementById("bellSound");

const flowers = [];
let flowerCount = 0;
let devoteeCount = 0;

async function loadCounters() {

    const { data, error } = await supabaseClient
        .from("flower_counter")
        .select("total_flowers,total_devotees")
        .eq("id", 1)
        .single();

    if (error) {
        console.error(error);
        return;
    }

    flowerCount = data.total_flowers;
    devoteeCount = data.total_devotees;

    counter.innerHTML = "🌸 Flowers Offered : " + flowerCount;
    devoteeCounter.innerHTML = "🙏 Devotees Participated : " + devoteeCount;
}

offerButton.addEventListener("click", async function () {

    bellSound.pause();
    bellSound.currentTime = 0;

    bellSound.play().catch(error => {
        console.log(error);
    });

    message.innerHTML = "🙏 Your flower has been offered successfully.";

    let isNewDevotee = false;

    if (!localStorage.getItem("devotee_id")) {

        localStorage.setItem(
            "devotee_id",
            crypto.randomUUID()
        );

        isNewDevotee = true;
    }

    const { data, error } = await supabaseClient.rpc(
    "increment_flower_counter",
    {
        is_new_devotee: isNewDevotee
    }
);

console.log("RPC Data:", data);
console.log("RPC Error:", error);

if (!error) {

    flowerCount = data[0].total_flowers;
    devoteeCount = data[0].total_devotees;

    counter.innerHTML =
        "🌸 Flowers Offered : " + flowerCount;

    devoteeCounter.innerHTML =
        "🙏 Devotees Participated : " + devoteeCount;

} else {

    console.error(error);

}
    const flower = document.createElement("img");

    flower.src = "images/images.png";
    flower.classList.add("flower");

    const size = Math.floor(Math.random() * 12) + 30;
    flower.style.width = size + "px";

    const startX = Math.floor(Math.random() * 170) + 120;
    flower.style.left = startX + "px";

    flower.style.top = "-60px";

    flower.style.animationDuration =
        (3 + Math.random()).toFixed(1) + "s";

    deityContainer.appendChild(flower);

    flowers.push(flower);

    if (flowers.length > 30) {

        flowers[0].style.opacity = "0";

        setTimeout(() => {

            flowers[0].remove();
            flowers.shift();

        }, 500);

    }

});

loadCounters();
