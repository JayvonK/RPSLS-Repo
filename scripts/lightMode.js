import { playBtn, modeBtn, body, volume } from "./app.js";
import { home } from "./addSDResults.js";
import { shurikenDiv } from "./addGameModes.js";

let howToPlayBtn = document.getElementById("howToPlayBtn");
let navRow = document.getElementById("navRow");
let title = document.getElementById("title");
let reverseRow = document.getElementById("reverseRow");


function lightTime(){
    body.className = "bodyBg2 overflowX";
    playBtn.src = "./assets/blackPlay Shuriken.png";
    modeBtn.src = "./assets/blackModes.png";
    howToPlayBtn.src = "./assets/blackhowToPlayshuriken.png";
    home.src = "./assets/blackhome icon.png"
    navRow.className = "row whiteBg navbarHeight alignCenter";
    title.className = "txtCenter black imPerfect titleSize";
    if(volume.alt === "mute icon")
    {
            volume.src = "./assets/blackvolume icon.png";
            volume.alt = "mute icon";
    } else if (volume.alt === "volume icon")
    {
            volume.src = "./assets/blackvolume.png";
            volume.alt = "volume icon";
    }
    reverseRow.className = "row reverse";
    shurikenDiv.className = "container-fluid lotus2 shurikenDiv";
}

function normalTime() {
    body.className = "bodyBg1 overflowX";
    playBtn.src = "./assets/Play Shuriken.png";
    modeBtn.src = "./assets/Modes.png";
    howToPlayBtn.src = "./assets/howToPlayshuriken.png";
    home.src = "./assets/home icon.png";
    navRow.className = "row blackBg navbarHeight alignCenter";
    title.className = "txtCenter white imPerfect titleSize";
    if(volume.alt === "mute icon")
    {
            volume.src = "./assets/muted icon.png";
            volume.alt = "mute icon";
    } else if (volume.alt === "volume icon")
    {
            volume.src = "./assets/volume icon.png";
            volume.alt = "volume icon";
    }
    reverseRow.className = "row";
    shurikenDiv.className = "container-fluid lotus shurikenDiv";
}


export {lightTime, normalTime}