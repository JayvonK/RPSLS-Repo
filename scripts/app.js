let playBtn = document.getElementById("playBtn");
let modeBtn = document.getElementById("modeBtn");
let howToPlayBtn = document.getElementById("howToPlayBtn");
let music = document.getElementById("music");
let volume = document.getElementById("volume");

function musicPlay(){
    music.play();
}

function stopMuic() {
    music.pause();
}


volume.addEventListener('click', () => {
    console.log("click");
    console.log(volume.src);
    if(volume.src === "./assets/volume icon.png")
    {
        musicPlay();
        volume.src = "./assets/mute icon.png";
        console.log("i woke");
    } else if (volume.src === "./assets/mute icon.png")
    {
        stopMuic();
        volume.src = "./assets/volume icon.png";
        console.log("i wokde");
    }
})

playBtn.addEventListener('click', (event) => {
    modeBtn.src = "";
    howToPlayBtn.src = "";
})