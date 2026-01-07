import { GameCard } from "./GameCard.js";

const gameData = {
    //images/furosha.jpg
    image: "",
    creation: {
        people: "11",
        time: "3 Months",
        engine: "Unity 3D"
    },
    title: "Furōsha",
    description: "Play as a Lone Shinobi known as The Wanderer who has secluded himself in a Mystical Realm called Tengudo, a realm ruled by the infamous Tengu Warrior. With no recollection of how or why you are there. He ventures forth to seek answers in the realm."
};

document.getElementById("current-project")
    .appendChild(GameCard(gameData));