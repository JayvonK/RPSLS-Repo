let music = document.getElementById("music");
let swordSound = document.getElementById("swordSound");
let beep = document.getElementById("beep");

swordSound.volume = 0.4;
beep.volume = 0.4;

function beepSound(){
    beep.play();
}

function sword(){
    swordSound.play();
}

function musicPlay(){
    music.play();
}

function stopMusic() {
    music.pause();
}

export {musicPlay, stopMusic, music, sword, beepSound}
