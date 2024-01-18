import { musicPlay, stopMusic, music } from "./music.js";
import { addVersus } from "./addVersus.js";

let playBtn = document.getElementById("playBtn");
let modeBtn = document.getElementById("modeBtn");
let howToPlayBtn = document.getElementById("howToPlayBtn");
let volume = document.getElementById("volume");
let modal = document.getElementById("btnModal");
let playCol = document.getElementById("playCol");
let p1Rock = document.getElementById("p1Rock");
let p1Paper = document.getElementById("p1Paper");
let p1Scissors = document.getElementById("p1Scissors");
let p1Lizzard = document.getElementById("p1Lizzard");
let p1Spock = document.getElementById("p1Spock");
let p1Message = document.getElementById("p1Message");

let p1Choice;

music.volume = 0.3;


volume.addEventListener('click', () => {
    console.log("click");
    console.log(volume.alt);
    if(volume.alt === "volume icon")
    {
        stopMusic();
        volume.src = "./assets/muted icon.png";
        volume.alt = "mute icon"
        console.log("i woke");
    } else if (volume.alt === "mute icon")
    {
        musicPlay();
        volume.src = "./assets/volume icon.png";
        volume.alt = "volume icon"
        console.log("i wokde");
    }
})

playBtn.addEventListener('click', (event) => {
    modeBtn.className = "none";
    modal.className += " none";
    playBtn.className = "none";
    playCol.className = "none";
    addVersus();
})

p1Rock.addEventListener('click', (event) => {
    p1Choice = "rock";
    console.log(p1Choice);
    p1Message.innerText = "ready to battle";
})

p1Paper.addEventListener('click', (event) => {
    p1Choice = "paper";
    console.log(p1Choice);
    p1Message.innerText = "ready to battle";
})

p1Scissors.addEventListener('click', (event) => {
    p1Choice = "scissors";
    console.log(p1Choice);
    p1Message.innerText = "ready to battle";
})

p1Lizzard.addEventListener('click', (event) => {
    p1Choice = "lizzard";
    console.log(p1Choice);
    p1Message.innerText = "ready to battle";
})

p1Spock.addEventListener('click', (event) => {
    p1Choice = "spock";
    console.log(p1Choice);
    p1Message.innerText = "ready to battle";
})

export { playCol }