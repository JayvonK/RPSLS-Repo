let music = document.getElementById("music");

function musicPlay(){
    music.play();
}

function stopMusic() {
    music.pause();
}

export {musicPlay, stopMusic, music}
