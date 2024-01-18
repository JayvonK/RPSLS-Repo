
let fightDiv = document.getElementById("fightDiv");
let randomBool = false;

function addSuddenDeathFight() {
    let p1choices = document.createElement("div");
    p1choices.className = "center";

    let rockImg = document.createElement("img");
    rockImg.src = "./assets/rock icon.png";
    rockImg.alt = "img of rock";

    let paperImg = document.createElement("img");
    paperImg.src = "./assets/paper icon.png";
    paperImg.alt = "img of paper";

    let scissorsImg = document.createElement("img");
    scissorsImg.src = "./assets/scissors icon.png";
    scissorsImg.alt = "img of scissors";

    let lizzardImg = document.createElement("img");
    lizzardImg.src = "./assets/lizard icon.png";
    lizzardImg.alt = "img of lizzard";

    let spockImg = document.createElement("img");
    spockImg.src = "./assets/spock icon.png";
    spockImg.alt = "img of spock";

    p1choices.appendChild(rockImg);
    p1choices.appendChild(paperImg);
    p1choices.appendChild(scissorsImg);
    p1choices.appendChild(lizzardImg);
    p1choices.appendChild(spockImg);

    let p1Col = document.createElement("div");
    p1Col.className = "col samurai1Padding";




    fightDiv.append();
}

export {addSuddenDeathFight, randomBool}