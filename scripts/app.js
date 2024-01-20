import { musicPlay, stopMusic, music, sword, beepSound } from "./music.js";
import { addVersus } from "./addVersus.js";
import { lightTime, normalTime } from "./lightMode.js";

let body = document.getElementById("body");
let playBtn = document.getElementById("playBtn");
let volume = document.getElementById("volume");
let playCol = document.getElementById("playCol");
let injectRow = document.getElementById("injectRow");
let fT3Col = document.getElementById("fT3Col");
let modeBtn = document.getElementById("modeBtn");
let closeBtn = document.getElementById("closeBtn");
let lightMode = false;

music.volume = 0.3;


closeBtn.addEventListener('click', (event) => {
    beepSound();
})

volume.addEventListener('click', () => {
    beepSound();
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
    sword();
    playCol.className += " none";
    addVersus();
    
})
playBtn.addEventListener('mouseover', (event) => {
    playBtn.src = "./assets/cyanPlay Shuriken.png";
    if(lightMode){
        playBtn.src = "./assets/pinkplay.png";
    }
})
playBtn.addEventListener("mouseleave", (event) => {
    playBtn.src = "./assets/Play Shuriken.png";
    if(lightMode){
        playBtn.src = "./assets/blackPlay Shuriken.png";
    }
})

modeBtn.addEventListener('click', () => {
    beepSound();
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
modeBtn.addEventListener('mouseover', (event) => {
    modeBtn.src = "./assets/cyanModes.png";
    if(lightMode){
        modeBtn.src = "./assets/pinkmode.png";
    }
})
 modeBtn.addEventListener("mouseleave", (event) => {
    modeBtn.src = "./assets/Modes.png";
    if(lightMode){
        modeBtn.src = "./assets/blackModes.png";
    }
})



export { playCol, body, injectRow, fT3Col, playBtn, modeBtn, volume, lightMode }