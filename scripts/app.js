import { musicPlay, stopMusic, music } from "./music.js";
import { addVersus } from "./addVersus.js";
import { lightTime, normalTime } from "./lightMode.js";

let body = document.getElementById("body");
let playBtn = document.getElementById("playBtn");
let volume = document.getElementById("volume");
let playCol = document.getElementById("playCol");
let injectRow = document.getElementById("injectRow");
let fT3Col = document.getElementById("fT3Col");
let modeBtn = document.getElementById("modeBtn");
let p1Choice = "";
let p2Choice = "";
let lightMode = false;

music.volume = 0.3;



volume.addEventListener('click', () => {
    if(volume.alt === "volume icon")
    {
        stopMusic();
        if(lightMode){
            volume.src = "./assets/blackvolume icon.png";
            volume.alt = "mute icon";
        } else {
            volume.src = "./assets/muted icon.png";
            volume.alt = "mute icon";
        }
    } else if (volume.alt === "mute icon")
    {
        musicPlay();
        if(lightMode){
            volume.src = "./assets/blackvolume.png";
            volume.alt = "volume icon";
        } else {
            volume.src = "./assets/volume icon.png";
        volume.alt = "volume icon";
        }
    }
})

playBtn.addEventListener('click', (event) => {
    playCol.className += " none";
    addVersus();
})

modeBtn.addEventListener('click', () => {
    if(lightMode){
        lightMode = false;
    } else {
        lightMode = true;
    }

    if(lightMode)
    {
        lightTime();
    }else{
        normalTime();
    }
    
})



export { playCol, p1Choice, p2Choice, body, injectRow, fT3Col, playBtn, modeBtn, volume, lightMode }