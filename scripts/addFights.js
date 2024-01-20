import { displaySDWinner, p1Point, p2Point, displayFT3Winner, displayFT5Winner } from "./addSDResults.js";
import { AITrue } from "./addVersus.js";
import { lightMode } from "./app.js";
let fightDiv = document.getElementById("fightDiv");


let p1Choice = "";
let p2Choice = "";

async function AICall() {
    const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");
    const data = await promise.text();
    return data.toLowerCase();
}


function addSuddenDeathFight(point1, point2, message1, message2) {
    if (AITrue) {
        fightDiv.className = "container-fluid lotus";

        let p1ChoicesOuterDiv = document.createElement("div");
        p1ChoicesOuterDiv.className = "center"

        let p1choices = document.createElement("div");
        p1choices.className = "between optionsDiv";

        let rockImg = document.createElement("img");
        rockImg.src = "./assets/rock icon.png";
        rockImg.alt = "img of rock";
        rockImg.className = "cursor";
        rockImg.addEventListener('click', (event) => {
            p1Choice = "rock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            
            dontCheat1.innerText = "ready to battle";
        })

        let paperImg = document.createElement("img");
        paperImg.src = "./assets/paper icon.png";
        paperImg.alt = "img of paper";
        paperImg.className = "cursor";
        paperImg.addEventListener('click', (event) => {
            p1Choice = "paper";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let scissorsImg = document.createElement("img");
        scissorsImg.src = "./assets/scissors icon.png";
        scissorsImg.alt = "img of scissors";
        scissorsImg.className = "cursor";
        scissorsImg.addEventListener('click', (event) => {
            p1Choice = "scissors";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let lizzardImg = document.createElement("img");
        lizzardImg.src = "./assets/lizard icon.png";
        lizzardImg.alt = "img of lizzard";
        lizzardImg.className = "cursor";
        lizzardImg.addEventListener('click', (event) => {
            p1Choice = "lizard";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let spockImg = document.createElement("img");
        spockImg.src = "./assets/spock icon.png";
        spockImg.alt = "img of spock";
        spockImg.className = "cursor";
        spockImg.addEventListener('click', (event) => {
            p1Choice = "spock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        p1choices.appendChild(rockImg);
        p1choices.appendChild(paperImg);
        p1choices.appendChild(scissorsImg);
        p1choices.appendChild(lizzardImg);
        p1choices.appendChild(spockImg);
        p1ChoicesOuterDiv.appendChild(p1choices);

        let p1Col = document.createElement("div");
        p1Col.className = "col samurai1Padding";

        let p1Score = document.createElement("h1");
        p1Score.className = "imPerfect white txtCenter score";
        p1Score.innerText = `${point1}/1`;

        let samurai1ImgDiv = document.createElement("div");
        samurai1ImgDiv.className = "center";

        let samurai1Img = document.createElement("img");
        samurai1Img.src = "./assets/samurai 1.png";
        samurai1Img.className = "samuraiSize";
        samurai1Img.alt = "picture of samurai";

        samurai1ImgDiv.appendChild(samurai1Img);

        let samurai1Txt = document.createElement("p");
        samurai1Txt.className = "imPerfect txtCenter cyan samurai";
        samurai1Txt.innerText = "Samurai 1";

        let choose1 = document.createElement("h1");
        choose1.className = "imPerfect txtCenter cyan choose";
        choose1.innerText = "choose";

        let dontCheat1 = document.createElement("p");
        dontCheat1.innerText = message1;
        dontCheat1.className = "imPerfect txtCenter cyan message";

        p1Col.appendChild(p1Score);
        p1Col.appendChild(samurai1ImgDiv);
        p1Col.appendChild(samurai1Txt);
        p1Col.appendChild(choose1);
        p1Col.appendChild(p1ChoicesOuterDiv);
        p1Col.appendChild(dontCheat1);



        let p2ChoicesOuterDiv = document.createElement("div");
        p2ChoicesOuterDiv.className = "center"

        let p2choices = document.createElement("div");
        p2choices.className = "between optionsDiv";

        let rockImg2 = document.createElement("img");
        rockImg2.src = "./assets/question mark.png";
        rockImg2.alt = "img of question mark";

        let paperImg2 = document.createElement("img");
        paperImg2.src = "./assets/question mark.png";
        paperImg2.alt = "img of question mark";

        let scissorsImg2 = document.createElement("img");
        scissorsImg2.src = "./assets/question mark.png";
        scissorsImg2.alt = "img of question mark";

        let lizzardImg2 = document.createElement("img");
        lizzardImg2.src = "./assets/question mark.png";
        lizzardImg2.alt = "img of question mark";

        let spockImg2 = document.createElement("img");
        spockImg2.src = "./assets/question mark.png";
        spockImg2.alt = "img of question mark";

        p2choices.appendChild(rockImg2);
        p2choices.appendChild(paperImg2);
        p2choices.appendChild(scissorsImg2);
        p2choices.appendChild(lizzardImg2);
        p2choices.appendChild(spockImg2);
        p2ChoicesOuterDiv.appendChild(p2choices);

        let p2Col = document.createElement("div");
        p2Col.className = "col samurai2Padding";

        let p2Score = document.createElement("h1");
        p2Score.className = "imPerfect white txtCenter score";
        p2Score.innerText = `${point2}/1`;

        let samurai2ImgDiv = document.createElement("div");
        samurai2ImgDiv.className = "center";

        let samurai2Img = document.createElement("img");
        samurai2Img.src = "./assets/samurai 2.png";
        samurai2Img.className = "samuraiSize";
        samurai2Img.alt = "picture of samurai";

        samurai2ImgDiv.appendChild(samurai2Img);

        let samurai2Txt = document.createElement("p");
        samurai2Txt.className = "imPerfect txtCenter yellow samurai";
        samurai2Txt.innerText = "Supreme ai";

        let choose2 = document.createElement("h1");
        choose2.className = "imPerfect txtCenter yellow choose";
        choose2.innerText = "choose";

        let dontCheat2 = document.createElement("p");
        dontCheat2.innerText = "ai is ready";
        dontCheat2.className = "imPerfect txtCenter yellow message";

        p2Col.appendChild(p2Score);
        p2Col.appendChild(samurai2ImgDiv);
        p2Col.appendChild(samurai2Txt);
        p2Col.appendChild(choose2);
        p2Col.appendChild(p2ChoicesOuterDiv);
        p2Col.appendChild(dontCheat2);

        let row = document.createElement("div");
        row.className = "row";

        row.appendChild(p1Col);
        row.appendChild(p2Col);

        let fightBtn = document.createElement("div");
        fightBtn.className = "fightBtn imPerfect white txtCenter centerCol cursor";
        fightBtn.textContent = "Fight";
        fightBtn.addEventListener('click', async (event) => {
            if (p1Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
            } else {
                fightDiv.innerHTML = "";
                displaySDWinner(p1Choice, await AICall());
                addSuddenDeathFight(p1Point, p2Point, "dont cheat", "dont cheat");
                p1Choice = "";
            }
        })

        let vs = document.createElement("h1");
        vs.className = "txtCenter white imPerfect absolute vs";
        vs.textContent = "vs";

        if(lightMode){
            samurai1Img.src = "./assets/blacksamurai 1.png";
            samurai2Img.src = "./assets/blacksamurai 2.png";
            p2Score.className = "imPerfect black txtCenter score";
            dontCheat2.className = "imPerfect txtCenter black message";
            choose2.className = "imPerfect txtCenter black choose";
            samurai2Txt.className = "imPerfect txtCenter black samurai";
            rockImg2.src = "./assets/blackquestion mark.png";
            scissorsImg2.src = "./assets/blackquestion mark.png";
            paperImg2.src = "./assets/blackquestion mark.png";
            lizzardImg2.src = "./assets/blackquestion mark.png";
            spockImg2.src = "./assets/blackquestion mark.png";
            dontCheat1.className = "imPerfect txtCenter white message";
            choose1.className = "imPerfect txtCenter white choose";
            samurai1Txt.className = "imPerfect txtCenter white samurai";
            fightBtn.className = "fightBtn2 imPerfect black txtCenter centerCol cursor";
            vs.className = "txtCenter black imPerfect absolute vs";
            fightDiv.className = "container-fluid lotus2";
        }

        fightDiv.appendChild(row);
        fightDiv.appendChild(fightBtn);
        fightDiv.appendChild(vs);
    } else {
        fightDiv.className = "container-fluid lotus";

        let p1ChoicesOuterDiv = document.createElement("div");
        p1ChoicesOuterDiv.className = "center"

        let p1choices = document.createElement("div");
        p1choices.className = "between optionsDiv";

        let rockImg = document.createElement("img");
        rockImg.src = "./assets/rock icon.png";
        rockImg.alt = "img of rock";
        rockImg.className = "cursor";
        rockImg.addEventListener('click', (event) => {
            p1Choice = "rock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let paperImg = document.createElement("img");
        paperImg.src = "./assets/paper icon.png";
        paperImg.alt = "img of paper";
        paperImg.className = "cursor";
        paperImg.addEventListener('click', (event) => {
            p1Choice = "paper";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let scissorsImg = document.createElement("img");
        scissorsImg.src = "./assets/scissors icon.png";
        scissorsImg.alt = "img of scissors";
        scissorsImg.className = "cursor";
        scissorsImg.addEventListener('click', (event) => {
            p1Choice = "scissors";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let lizzardImg = document.createElement("img");
        lizzardImg.src = "./assets/lizard icon.png";
        lizzardImg.alt = "img of lizzard";
        lizzardImg.className = "cursor";
        lizzardImg.addEventListener('click', (event) => {
            p1Choice = "lizard";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let spockImg = document.createElement("img");
        spockImg.src = "./assets/spock icon.png";
        spockImg.alt = "img of spock";
        spockImg.className = "cursor";
        spockImg.addEventListener('click', (event) => {
            p1Choice = "spock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        p1choices.appendChild(rockImg);
        p1choices.appendChild(paperImg);
        p1choices.appendChild(scissorsImg);
        p1choices.appendChild(lizzardImg);
        p1choices.appendChild(spockImg);
        p1ChoicesOuterDiv.appendChild(p1choices);

        let p1Col = document.createElement("div");
        p1Col.className = "col samurai1Padding";

        let p1Score = document.createElement("h1");
        p1Score.className = "imPerfect white txtCenter score";
        p1Score.innerText = `${point1}/1`;

        let samurai1ImgDiv = document.createElement("div");
        samurai1ImgDiv.className = "center";

        let samurai1Img = document.createElement("img");
        samurai1Img.src = "./assets/samurai 1.png";
        samurai1Img.className = "samuraiSize";
        samurai1Img.alt = "picture of samurai";

        samurai1ImgDiv.appendChild(samurai1Img);

        let samurai1Txt = document.createElement("p");
        samurai1Txt.className = "imPerfect txtCenter cyan samurai";
        samurai1Txt.innerText = "Samurai 1";

        let choose1 = document.createElement("h1");
        choose1.className = "imPerfect txtCenter cyan choose";
        choose1.innerText = "choose";

        let dontCheat1 = document.createElement("p");
        dontCheat1.innerText = message1;
        dontCheat1.className = "imPerfect txtCenter cyan message";

        p1Col.appendChild(p1Score);
        p1Col.appendChild(samurai1ImgDiv);
        p1Col.appendChild(samurai1Txt);
        p1Col.appendChild(choose1);
        p1Col.appendChild(p1ChoicesOuterDiv);
        p1Col.appendChild(dontCheat1);



        let p2ChoicesOuterDiv = document.createElement("div");
        p2ChoicesOuterDiv.className = "center"

        let p2choices = document.createElement("div");
        p2choices.className = "between optionsDiv";

        let rockImg2 = document.createElement("img");
        rockImg2.src = "./assets/rock icon.png";
        rockImg2.alt = "img of rock";
        rockImg2.className = "cursor";
        rockImg2.addEventListener('click', (event) => {
            p2Choice = "rock";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let paperImg2 = document.createElement("img");
        paperImg2.src = "./assets/paper icon.png";
        paperImg2.alt = "img of paper";
        paperImg2.className = "cursor";
        paperImg2.addEventListener('click', (event) => {
            p2Choice = "paper";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let scissorsImg2 = document.createElement("img");
        scissorsImg2.src = "./assets/scissors icon.png";
        scissorsImg2.alt = "img of scissors";
        scissorsImg2.className = "cursor";
        scissorsImg2.addEventListener('click', (event) => {
            p2Choice = "scissors";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let lizzardImg2 = document.createElement("img");
        lizzardImg2.src = "./assets/lizard icon.png";
        lizzardImg2.alt = "img of lizzard";
        lizzardImg2.className = "cursor";
        lizzardImg2.addEventListener('click', (event) => {
            p2Choice = "lizard";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let spockImg2 = document.createElement("img");
        spockImg2.src = "./assets/spock icon.png";
        spockImg2.alt = "img of spock";
        spockImg2.className = "cursor";
        spockImg2.addEventListener('click', (event) => {
            p2Choice = "spock";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        p2choices.appendChild(rockImg2);
        p2choices.appendChild(paperImg2);
        p2choices.appendChild(scissorsImg2);
        p2choices.appendChild(lizzardImg2);
        p2choices.appendChild(spockImg2);
        p2ChoicesOuterDiv.appendChild(p2choices);

        let p2Col = document.createElement("div");
        p2Col.className = "col samurai2Padding";

        let p2Score = document.createElement("h1");
        p2Score.className = "imPerfect white txtCenter score";
        p2Score.innerText = `${point2}/1`;

        let samurai2ImgDiv = document.createElement("div");
        samurai2ImgDiv.className = "center";

        let samurai2Img = document.createElement("img");
        samurai2Img.src = "./assets/samurai 2.png";
        samurai2Img.className = "samuraiSize";
        samurai2Img.alt = "picture of samurai";

        samurai2ImgDiv.appendChild(samurai2Img);

        let samurai2Txt = document.createElement("p");
        samurai2Txt.className = "imPerfect txtCenter yellow samurai";
        samurai2Txt.innerText = "Samurai 2";

        let choose2 = document.createElement("h1");
        choose2.className = "imPerfect txtCenter yellow choose";
        choose2.innerText = "choose";

        let dontCheat2 = document.createElement("p");
        dontCheat2.innerText = message2;
        dontCheat2.className = "imPerfect txtCenter yellow message";

        p2Col.appendChild(p2Score);
        p2Col.appendChild(samurai2ImgDiv);
        p2Col.appendChild(samurai2Txt);
        p2Col.appendChild(choose2);
        p2Col.appendChild(p2ChoicesOuterDiv);
        p2Col.appendChild(dontCheat2);

        let row = document.createElement("div");
        row.className = "row";

        row.appendChild(p1Col);
        row.appendChild(p2Col);

        let fightBtn = document.createElement("div");
        fightBtn.className = "fightBtn imPerfect white txtCenter centerCol cursor";
        fightBtn.textContent = "Fight";
        fightBtn.addEventListener('click', (event) => {
            if (p1Choice === "" && p2Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
                dontCheat2.innerText = "You didnt choose an option";
                dontCheat2.className = "imPerfect txtCenter red message";
            } else if (p2Choice === "") {
                dontCheat2.innerText = "You didnt choose an option";
                dontCheat2.className = "imPerfect txtCenter red message";
            } else if (p1Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
            } else {
                fightDiv.innerHTML = "";
                displaySDWinner(p1Choice, p2Choice);
                addSuddenDeathFight(p1Point, p2Point, "dont cheat", "dont cheat");
                p1Choice = "";
                p2Choice = "";
            }
        })

        let vs = document.createElement("h1");
        vs.className = "txtCenter white imPerfect absolute vs";
        vs.textContent = "vs";

        if(lightMode){
            samurai1Img.src = "./assets/blacksamurai 1.png";
            samurai2Img.src = "./assets/blacksamurai 2.png";
            p2Score.className = "imPerfect black txtCenter score";
            dontCheat2.className = "imPerfect txtCenter black message";
            choose2.className = "imPerfect txtCenter black choose";
            samurai2Txt.className = "imPerfect txtCenter black samurai";
            rockImg2.src = "./assets/blackrock.png";
            scissorsImg2.src = "./assets/blackscissors.png";
            paperImg2.src = "./assets/blackpaper.png";
            lizzardImg2.src = "./assets/blacklizzard.png";
            spockImg2.src = "./assets/blackspock.png";
            dontCheat1.className = "imPerfect txtCenter white message";
            choose1.className = "imPerfect txtCenter white choose";
            samurai1Txt.className = "imPerfect txtCenter white samurai";
            fightBtn.className = "fightBtn2 imPerfect black txtCenter centerCol cursor";
            vs.className = "txtCenter black imPerfect absolute vs";
            fightDiv.className = "container-fluid lotus2";
        }

        fightDiv.appendChild(row);
        fightDiv.appendChild(fightBtn);
        fightDiv.appendChild(vs);
    }

}



function addFT3Fight(point1, point2, message1, message2) {
    if (AITrue) {
        fightDiv.className = "container-fluid lotus";

        let p1ChoicesOuterDiv = document.createElement("div");
        p1ChoicesOuterDiv.className = "center"

        let p1choices = document.createElement("div");
        p1choices.className = "between optionsDiv";

        let rockImg = document.createElement("img");
        rockImg.src = "./assets/rock icon.png";
        rockImg.alt = "img of rock";
        rockImg.className = "cursor";
        rockImg.addEventListener('click', (event) => {
            p1Choice = "rock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let paperImg = document.createElement("img");
        paperImg.src = "./assets/paper icon.png";
        paperImg.alt = "img of paper";
        paperImg.className = "cursor";
        paperImg.addEventListener('click', (event) => {
            p1Choice = "paper";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let scissorsImg = document.createElement("img");
        scissorsImg.src = "./assets/scissors icon.png";
        scissorsImg.alt = "img of scissors";
        scissorsImg.className = "cursor";
        scissorsImg.addEventListener('click', (event) => {
            p1Choice = "scissors";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let lizzardImg = document.createElement("img");
        lizzardImg.src = "./assets/lizard icon.png";
        lizzardImg.alt = "img of lizzard";
        lizzardImg.className = "cursor";
        lizzardImg.addEventListener('click', (event) => {
            p1Choice = "lizard";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let spockImg = document.createElement("img");
        spockImg.src = "./assets/spock icon.png";
        spockImg.alt = "img of spock";
        spockImg.className = "cursor";
        spockImg.addEventListener('click', (event) => {
            p1Choice = "spock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        p1choices.appendChild(rockImg);
        p1choices.appendChild(paperImg);
        p1choices.appendChild(scissorsImg);
        p1choices.appendChild(lizzardImg);
        p1choices.appendChild(spockImg);
        p1ChoicesOuterDiv.appendChild(p1choices);

        let p1Col = document.createElement("div");
        p1Col.className = "col samurai1Padding";

        let p1Score = document.createElement("h1");
        p1Score.className = "imPerfect white txtCenter score";
        p1Score.innerText = `${point1} / 3`;

        let samurai1ImgDiv = document.createElement("div");
        samurai1ImgDiv.className = "center";

        let samurai1Img = document.createElement("img");
        samurai1Img.src = "./assets/samurai 1.png";
        samurai1Img.className = "samuraiSize";
        samurai1Img.alt = "picture of samurai";

        samurai1ImgDiv.appendChild(samurai1Img);

        let samurai1Txt = document.createElement("p");
        samurai1Txt.className = "imPerfect txtCenter cyan samurai";
        samurai1Txt.innerText = "Samurai 1";

        let choose1 = document.createElement("h1");
        choose1.className = "imPerfect txtCenter cyan choose";
        choose1.innerText = "choose";

        let dontCheat1 = document.createElement("p");
        dontCheat1.innerText = message1;
        dontCheat1.className = "imPerfect txtCenter cyan message";

        p1Col.appendChild(p1Score);
        p1Col.appendChild(samurai1ImgDiv);
        p1Col.appendChild(samurai1Txt);
        p1Col.appendChild(choose1);
        p1Col.appendChild(p1ChoicesOuterDiv);
        p1Col.appendChild(dontCheat1);



        let p2ChoicesOuterDiv = document.createElement("div");
        p2ChoicesOuterDiv.className = "center"

        let p2choices = document.createElement("div");
        p2choices.className = "between optionsDiv";

        let rockImg2 = document.createElement("img");
        rockImg2.src = "./assets/question mark.png";
        rockImg2.alt = "img of question mark";

        let paperImg2 = document.createElement("img");
        paperImg2.src = "./assets/question mark.png";
        paperImg2.alt = "img of question mark";

        let scissorsImg2 = document.createElement("img");
        scissorsImg2.src = "./assets/question mark.png";
        scissorsImg2.alt = "img of question mark";

        let lizzardImg2 = document.createElement("img");
        lizzardImg2.src = "./assets/question mark.png";
        lizzardImg2.alt = "img of question mark";

        let spockImg2 = document.createElement("img");
        spockImg2.src = "./assets/question mark.png";
        spockImg2.alt = "img of question mark";

        p2choices.appendChild(rockImg2);
        p2choices.appendChild(paperImg2);
        p2choices.appendChild(scissorsImg2);
        p2choices.appendChild(lizzardImg2);
        p2choices.appendChild(spockImg2);
        p2ChoicesOuterDiv.appendChild(p2choices);

        let p2Col = document.createElement("div");
        p2Col.className = "col samurai2Padding";

        let p2Score = document.createElement("h1");
        p2Score.className = "imPerfect white txtCenter score";
        p2Score.innerText = `${point2} / 3`;

        let samurai2ImgDiv = document.createElement("div");
        samurai2ImgDiv.className = "center";

        let samurai2Img = document.createElement("img");
        samurai2Img.src = "./assets/samurai 2.png";
        samurai2Img.className = "samuraiSize";
        samurai2Img.alt = "picture of samurai";

        samurai2ImgDiv.appendChild(samurai2Img);

        let samurai2Txt = document.createElement("p");
        samurai2Txt.className = "imPerfect txtCenter yellow samurai";
        samurai2Txt.innerText = "Supreme ai";

        let choose2 = document.createElement("h1");
        choose2.className = "imPerfect txtCenter yellow choose";
        choose2.innerText = "choose";

        let dontCheat2 = document.createElement("p");
        dontCheat2.innerText = "ai is ready";
        dontCheat2.className = "imPerfect txtCenter yellow message";

        p2Col.appendChild(p2Score);
        p2Col.appendChild(samurai2ImgDiv);
        p2Col.appendChild(samurai2Txt);
        p2Col.appendChild(choose2);
        p2Col.appendChild(p2ChoicesOuterDiv);
        p2Col.appendChild(dontCheat2);

        let row = document.createElement("div");
        row.className = "row";

        row.appendChild(p1Col);
        row.appendChild(p2Col);

        let fightBtn = document.createElement("div");
        fightBtn.className = "fightBtn imPerfect white txtCenter centerCol cursor";
        fightBtn.textContent = "Fight";
        fightBtn.addEventListener('click', async (event) => {
            if (p1Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
            } else {
                    fightDiv.innerHTML = "";
                    displayFT3Winner(p1Choice, await AICall());
                    addFT3Fight(p1Point, p2Point, "dont cheat", "dont cheat");
                    p1Choice = "";
                    p2Choice = "";
            }
        })

        let vs = document.createElement("h1");
        vs.className = "txtCenter white imPerfect absolute vs";
        vs.textContent = "vs";

        if(lightMode){
            samurai1Img.src = "./assets/blacksamurai 1.png";
            samurai2Img.src = "./assets/blacksamurai 2.png";
            p2Score.className = "imPerfect black txtCenter score";
            dontCheat2.className = "imPerfect txtCenter black message";
            choose2.className = "imPerfect txtCenter black choose";
            samurai2Txt.className = "imPerfect txtCenter black samurai";
            rockImg2.src = "./assets/blackquestion mark.png";
            scissorsImg2.src = "./assets/blackquestion mark.png";
            paperImg2.src = "./assets/blackquestion mark.png";
            lizzardImg2.src = "./assets/blackquestion mark.png";
            spockImg2.src = "./assets/blackquestion mark.png";
            dontCheat1.className = "imPerfect txtCenter white message";
            choose1.className = "imPerfect txtCenter white choose";
            samurai1Txt.className = "imPerfect txtCenter white samurai";
            fightBtn.className = "fightBtn2 imPerfect black txtCenter centerCol cursor";
            vs.className = "txtCenter black imPerfect absolute vs";
            fightDiv.className = "container-fluid lotus2";
        }

        fightDiv.appendChild(row);
        fightDiv.appendChild(fightBtn);
        fightDiv.appendChild(vs);
    } else {
        fightDiv.className = "container-fluid lotus";

        let p1ChoicesOuterDiv = document.createElement("div");
        p1ChoicesOuterDiv.className = "center"

        let p1choices = document.createElement("div");
        p1choices.className = "between optionsDiv";

        let rockImg = document.createElement("img");
        rockImg.src = "./assets/rock icon.png";
        rockImg.alt = "img of rock";
        rockImg.className = "cursor";
        rockImg.addEventListener('click', (event) => {
            p1Choice = "rock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let paperImg = document.createElement("img");
        paperImg.src = "./assets/paper icon.png";
        paperImg.alt = "img of paper";
        paperImg.className = "cursor";
        paperImg.addEventListener('click', (event) => {
            p1Choice = "paper";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let scissorsImg = document.createElement("img");
        scissorsImg.src = "./assets/scissors icon.png";
        scissorsImg.alt = "img of scissors";
        scissorsImg.className = "cursor";
        scissorsImg.addEventListener('click', (event) => {
            p1Choice = "scissors";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let lizzardImg = document.createElement("img");
        lizzardImg.src = "./assets/lizard icon.png";
        lizzardImg.alt = "img of lizzard";
        lizzardImg.className = "cursor";
        lizzardImg.addEventListener('click', (event) => {
            p1Choice = "lizard";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let spockImg = document.createElement("img");
        spockImg.src = "./assets/spock icon.png";
        spockImg.alt = "img of spock";
        spockImg.className = "cursor";
        spockImg.addEventListener('click', (event) => {
            p1Choice = "spock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        p1choices.appendChild(rockImg);
        p1choices.appendChild(paperImg);
        p1choices.appendChild(scissorsImg);
        p1choices.appendChild(lizzardImg);
        p1choices.appendChild(spockImg);
        p1ChoicesOuterDiv.appendChild(p1choices);

        let p1Col = document.createElement("div");
        p1Col.className = "col samurai1Padding";

        let p1Score = document.createElement("h1");
        p1Score.className = "imPerfect white txtCenter score";
        p1Score.innerText = `${point1} / 3`;

        let samurai1ImgDiv = document.createElement("div");
        samurai1ImgDiv.className = "center";

        let samurai1Img = document.createElement("img");
        samurai1Img.src = "./assets/samurai 1.png";
        samurai1Img.className = "samuraiSize";
        samurai1Img.alt = "picture of samurai";

        samurai1ImgDiv.appendChild(samurai1Img);

        let samurai1Txt = document.createElement("p");
        samurai1Txt.className = "imPerfect txtCenter cyan samurai";
        samurai1Txt.innerText = "Samurai 1";

        let choose1 = document.createElement("h1");
        choose1.className = "imPerfect txtCenter cyan choose";
        choose1.innerText = "choose";

        let dontCheat1 = document.createElement("p");
        dontCheat1.innerText = message1;
        dontCheat1.className = "imPerfect txtCenter cyan message";

        p1Col.appendChild(p1Score);
        p1Col.appendChild(samurai1ImgDiv);
        p1Col.appendChild(samurai1Txt);
        p1Col.appendChild(choose1);
        p1Col.appendChild(p1ChoicesOuterDiv);
        p1Col.appendChild(dontCheat1);



        let p2ChoicesOuterDiv = document.createElement("div");
        p2ChoicesOuterDiv.className = "center"

        let p2choices = document.createElement("div");
        p2choices.className = "between optionsDiv";

        let rockImg2 = document.createElement("img");
        rockImg2.src = "./assets/rock icon.png";
        rockImg2.alt = "img of rock";
        rockImg2.className = "cursor";
        rockImg2.addEventListener('click', (event) => {
            p2Choice = "rock";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let paperImg2 = document.createElement("img");
        paperImg2.src = "./assets/paper icon.png";
        paperImg2.alt = "img of paper";
        paperImg2.className = "cursor";
        paperImg2.addEventListener('click', (event) => {
            p2Choice = "paper";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let scissorsImg2 = document.createElement("img");
        scissorsImg2.src = "./assets/scissors icon.png";
        scissorsImg2.alt = "img of scissors";
        scissorsImg2.className = "cursor";
        scissorsImg2.addEventListener('click', (event) => {
            p2Choice = "scissors";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let lizzardImg2 = document.createElement("img");
        lizzardImg2.src = "./assets/lizard icon.png";
        lizzardImg2.alt = "img of lizzard";
        lizzardImg2.className = "cursor";
        lizzardImg2.addEventListener('click', (event) => {
            p2Choice = "lizard";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let spockImg2 = document.createElement("img");
        spockImg2.src = "./assets/spock icon.png";
        spockImg2.alt = "img of spock";
        spockImg2.className = "cursor";
        spockImg2.addEventListener('click', (event) => {
            p2Choice = "spock";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        p2choices.appendChild(rockImg2);
        p2choices.appendChild(paperImg2);
        p2choices.appendChild(scissorsImg2);
        p2choices.appendChild(lizzardImg2);
        p2choices.appendChild(spockImg2);
        p2ChoicesOuterDiv.appendChild(p2choices);

        let p2Col = document.createElement("div");
        p2Col.className = "col samurai2Padding";

        let p2Score = document.createElement("h1");
        p2Score.className = "imPerfect white txtCenter score";
        p2Score.innerText = `${point2} / 3`;

        let samurai2ImgDiv = document.createElement("div");
        samurai2ImgDiv.className = "center";

        let samurai2Img = document.createElement("img");
        samurai2Img.src = "./assets/samurai 2.png";
        samurai2Img.className = "samuraiSize";
        samurai2Img.alt = "picture of samurai";

        samurai2ImgDiv.appendChild(samurai2Img);

        let samurai2Txt = document.createElement("p");
        samurai2Txt.className = "imPerfect txtCenter yellow samurai";
        samurai2Txt.innerText = "Samurai 2";

        let choose2 = document.createElement("h1");
        choose2.className = "imPerfect txtCenter yellow choose";
        choose2.innerText = "choose";

        let dontCheat2 = document.createElement("p");
        dontCheat2.innerText = message2;
        dontCheat2.className = "imPerfect txtCenter yellow message";

        p2Col.appendChild(p2Score);
        p2Col.appendChild(samurai2ImgDiv);
        p2Col.appendChild(samurai2Txt);
        p2Col.appendChild(choose2);
        p2Col.appendChild(p2ChoicesOuterDiv);
        p2Col.appendChild(dontCheat2);

        let row = document.createElement("div");
        row.className = "row";

        row.appendChild(p1Col);
        row.appendChild(p2Col);

        let fightBtn = document.createElement("div");
        fightBtn.className = "fightBtn imPerfect white txtCenter centerCol cursor";
        fightBtn.textContent = "Fight";
        fightBtn.addEventListener('click', (event) => {
            if (p1Choice === "" && p2Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
                dontCheat2.innerText = "You didnt choose an option";
                dontCheat2.className = "imPerfect txtCenter red message";
            } else if (p2Choice === "") {
                dontCheat2.innerText = "You didnt choose an option";
                dontCheat2.className = "imPerfect txtCenter red message";
            } else if (p1Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
            } else {
                    fightDiv.innerHTML = "";
                    displayFT3Winner(p1Choice, p2Choice);
                    addFT3Fight(p1Point, p2Point, "dont cheat", "dont cheat");
                    p1Choice = "";
                    p2Choice = "";
            }
        })

        let vs = document.createElement("h1");
        vs.className = "txtCenter white imPerfect absolute vs";
        vs.textContent = "vs";

        if(lightMode){
            samurai1Img.src = "./assets/blacksamurai 1.png";
            samurai2Img.src = "./assets/blacksamurai 2.png";
            p2Score.className = "imPerfect black txtCenter score";
            dontCheat2.className = "imPerfect txtCenter black message";
            choose2.className = "imPerfect txtCenter black choose";
            samurai2Txt.className = "imPerfect txtCenter black samurai";
            rockImg2.src = "./assets/blackrock.png";
            scissorsImg2.src = "./assets/blackscissors.png";
            paperImg2.src = "./assets/blackpaper.png";
            lizzardImg2.src = "./assets/blacklizzard.png";
            spockImg2.src = "./assets/blackspock.png";
            dontCheat1.className = "imPerfect txtCenter white message";
            choose1.className = "imPerfect txtCenter white choose";
            samurai1Txt.className = "imPerfect txtCenter white samurai";
            fightBtn.className = "fightBtn2 imPerfect black txtCenter centerCol cursor";
            vs.className = "txtCenter black imPerfect absolute vs";
            fightDiv.className = "container-fluid lotus2";
        }

        fightDiv.appendChild(row);
        fightDiv.appendChild(fightBtn);
        fightDiv.appendChild(vs);
    }

}

function addFT5Fight(point1, point2, message1, message2) {
    if (AITrue) {
        fightDiv.className = "container-fluid lotus";

        let p1ChoicesOuterDiv = document.createElement("div");
        p1ChoicesOuterDiv.className = "center"

        let p1choices = document.createElement("div");
        p1choices.className = "between optionsDiv";

        let rockImg = document.createElement("img");
        rockImg.src = "./assets/rock icon.png";
        rockImg.alt = "img of rock";
        rockImg.className = "cursor";
        rockImg.addEventListener('click', (event) => {
            p1Choice = "rock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let paperImg = document.createElement("img");
        paperImg.src = "./assets/paper icon.png";
        paperImg.alt = "img of paper";
        paperImg.className = "cursor";
        paperImg.addEventListener('click', (event) => {
            p1Choice = "paper";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let scissorsImg = document.createElement("img");
        scissorsImg.src = "./assets/scissors icon.png";
        scissorsImg.alt = "img of scissors";
        scissorsImg.className = "cursor";
        scissorsImg.addEventListener('click', (event) => {
            p1Choice = "scissors";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let lizzardImg = document.createElement("img");
        lizzardImg.src = "./assets/lizard icon.png";
        lizzardImg.alt = "img of lizzard";
        lizzardImg.className = "cursor";
        lizzardImg.addEventListener('click', (event) => {
            p1Choice = "lizard";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let spockImg = document.createElement("img");
        spockImg.src = "./assets/spock icon.png";
        spockImg.alt = "img of spock";
        spockImg.className = "cursor";
        spockImg.addEventListener('click', (event) => {
            p1Choice = "spock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        p1choices.appendChild(rockImg);
        p1choices.appendChild(paperImg);
        p1choices.appendChild(scissorsImg);
        p1choices.appendChild(lizzardImg);
        p1choices.appendChild(spockImg);
        p1ChoicesOuterDiv.appendChild(p1choices);

        let p1Col = document.createElement("div");
        p1Col.className = "col samurai1Padding";

        let p1Score = document.createElement("h1");
        p1Score.className = "imPerfect white txtCenter score";
        p1Score.innerText = `${point1} / 5`;

        let samurai1ImgDiv = document.createElement("div");
        samurai1ImgDiv.className = "center";

        let samurai1Img = document.createElement("img");
        samurai1Img.src = "./assets/samurai 1.png";
        samurai1Img.className = "samuraiSize";
        samurai1Img.alt = "picture of samurai";

        samurai1ImgDiv.appendChild(samurai1Img);

        let samurai1Txt = document.createElement("p");
        samurai1Txt.className = "imPerfect txtCenter cyan samurai";
        samurai1Txt.innerText = "Samurai 1";

        let choose1 = document.createElement("h1");
        choose1.className = "imPerfect txtCenter cyan choose";
        choose1.innerText = "choose";

        let dontCheat1 = document.createElement("p");
        dontCheat1.innerText = message1;
        dontCheat1.className = "imPerfect txtCenter cyan message";

        p1Col.appendChild(p1Score);
        p1Col.appendChild(samurai1ImgDiv);
        p1Col.appendChild(samurai1Txt);
        p1Col.appendChild(choose1);
        p1Col.appendChild(p1ChoicesOuterDiv);
        p1Col.appendChild(dontCheat1);



        let p2ChoicesOuterDiv = document.createElement("div");
        p2ChoicesOuterDiv.className = "center"

        let p2choices = document.createElement("div");
        p2choices.className = "between optionsDiv";

        let rockImg2 = document.createElement("img");
        rockImg2.src = "./assets/question mark.png";
        rockImg2.alt = "img of question mark";

        let paperImg2 = document.createElement("img");
        paperImg2.src = "./assets/question mark.png";
        paperImg2.alt = "img of question mark";

        let scissorsImg2 = document.createElement("img");
        scissorsImg2.src = "./assets/question mark.png";
        scissorsImg2.alt = "img of question mark";

        let lizzardImg2 = document.createElement("img");
        lizzardImg2.src = "./assets/question mark.png";
        lizzardImg2.alt = "img of question mark";

        let spockImg2 = document.createElement("img");
        spockImg2.src = "./assets/question mark.png";
        spockImg2.alt = "img of question mark";

        p2choices.appendChild(rockImg2);
        p2choices.appendChild(paperImg2);
        p2choices.appendChild(scissorsImg2);
        p2choices.appendChild(lizzardImg2);
        p2choices.appendChild(spockImg2);
        p2ChoicesOuterDiv.appendChild(p2choices);

        let p2Col = document.createElement("div");
        p2Col.className = "col samurai2Padding";

        let p2Score = document.createElement("h1");
        p2Score.className = "imPerfect white txtCenter score";
        p2Score.innerText = `${point2} / 5`;

        let samurai2ImgDiv = document.createElement("div");
        samurai2ImgDiv.className = "center";

        let samurai2Img = document.createElement("img");
        samurai2Img.src = "./assets/samurai 2.png";
        samurai2Img.className = "samuraiSize";
        samurai2Img.alt = "picture of samurai";

        samurai2ImgDiv.appendChild(samurai2Img);

        let samurai2Txt = document.createElement("p");
        samurai2Txt.className = "imPerfect txtCenter yellow samurai";
        samurai2Txt.innerText = "Supreme ai";

        let choose2 = document.createElement("h1");
        choose2.className = "imPerfect txtCenter yellow choose";
        choose2.innerText = "choose";

        let dontCheat2 = document.createElement("p");
        dontCheat2.innerText = "ai is ready";
        dontCheat2.className = "imPerfect txtCenter yellow message";

        p2Col.appendChild(p2Score);
        p2Col.appendChild(samurai2ImgDiv);
        p2Col.appendChild(samurai2Txt);
        p2Col.appendChild(choose2);
        p2Col.appendChild(p2ChoicesOuterDiv);
        p2Col.appendChild(dontCheat2);

        let row = document.createElement("div");
        row.className = "row";

        row.appendChild(p1Col);
        row.appendChild(p2Col);

        let fightBtn = document.createElement("div");
        fightBtn.className = "fightBtn imPerfect white txtCenter centerCol cursor";
        fightBtn.textContent = "Fight";
        fightBtn.addEventListener('click', async (event) => {
            if (p1Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
            } else {
                    fightDiv.innerHTML = "";
                    displayFT5Winner(p1Choice, await AICall());
                    addFT5Fight(p1Point, p2Point, "dont cheat", "dont cheat");
                    p1Choice = "";
                    p2Choice = "";
            }
        })

        let vs = document.createElement("h1");
        vs.className = "txtCenter white imPerfect absolute vs";
        vs.textContent = "vs";

        if(lightMode){
            samurai1Img.src = "./assets/blacksamurai 1.png";
            samurai2Img.src = "./assets/blacksamurai 2.png";
            p2Score.className = "imPerfect black txtCenter score";
            dontCheat2.className = "imPerfect txtCenter black message";
            choose2.className = "imPerfect txtCenter black choose";
            samurai2Txt.className = "imPerfect txtCenter black samurai";
            rockImg2.src = "./assets/blackquestion mark.png";
            scissorsImg2.src = "./assets/blackquestion mark.png";
            paperImg2.src = "./assets/blackquestion mark.png";
            lizzardImg2.src = "./assets/blackquestion mark.png";
            spockImg2.src = "./assets/blackquestion mark.png";
            dontCheat1.className = "imPerfect txtCenter white message";
            choose1.className = "imPerfect txtCenter white choose";
            samurai1Txt.className = "imPerfect txtCenter white samurai";
            fightBtn.className = "fightBtn2 imPerfect black txtCenter centerCol cursor";
            vs.className = "txtCenter black imPerfect absolute vs";
            fightDiv.className = "container-fluid lotus2";
        }

        fightDiv.appendChild(row);
        fightDiv.appendChild(fightBtn);
        fightDiv.appendChild(vs);
    } else {
        fightDiv.className = "container-fluid lotus";

        let p1ChoicesOuterDiv = document.createElement("div");
        p1ChoicesOuterDiv.className = "center"

        let p1choices = document.createElement("div");
        p1choices.className = "between optionsDiv";

        let rockImg = document.createElement("img");
        rockImg.src = "./assets/rock icon.png";
        rockImg.alt = "img of rock";
        rockImg.className = "cursor";
        rockImg.addEventListener('click', (event) => {
            p1Choice = "rock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let paperImg = document.createElement("img");
        paperImg.src = "./assets/paper icon.png";
        paperImg.alt = "img of paper";
        paperImg.className = "cursor";
        paperImg.addEventListener('click', (event) => {
            p1Choice = "paper";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let scissorsImg = document.createElement("img");
        scissorsImg.src = "./assets/scissors icon.png";
        scissorsImg.alt = "img of scissors";
        scissorsImg.className = "cursor";
        scissorsImg.addEventListener('click', (event) => {
            p1Choice = "scissors";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let lizzardImg = document.createElement("img");
        lizzardImg.src = "./assets/lizard icon.png";
        lizzardImg.alt = "img of lizzard";
        lizzardImg.className = "cursor";
        lizzardImg.addEventListener('click', (event) => {
            p1Choice = "lizard";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        let spockImg = document.createElement("img");
        spockImg.src = "./assets/spock icon.png";
        spockImg.alt = "img of spock";
        spockImg.className = "cursor";
        spockImg.addEventListener('click', (event) => {
            p1Choice = "spock";
            if(lightMode){
                dontCheat1.className = "imPerfect txtCenter white message";
            }else {
                dontCheat1.className = "imPerfect txtCenter cyan message";
            }
            dontCheat1.innerText = "ready to battle";
        })

        p1choices.appendChild(rockImg);
        p1choices.appendChild(paperImg);
        p1choices.appendChild(scissorsImg);
        p1choices.appendChild(lizzardImg);
        p1choices.appendChild(spockImg);
        p1ChoicesOuterDiv.appendChild(p1choices);

        let p1Col = document.createElement("div");
        p1Col.className = "col samurai1Padding";

        let p1Score = document.createElement("h1");
        p1Score.className = "imPerfect white txtCenter score";
        p1Score.innerText = `${point1} / 5`;

        let samurai1ImgDiv = document.createElement("div");
        samurai1ImgDiv.className = "center";

        let samurai1Img = document.createElement("img");
        samurai1Img.src = "./assets/samurai 1.png";
        samurai1Img.className = "samuraiSize";
        samurai1Img.alt = "picture of samurai";

        samurai1ImgDiv.appendChild(samurai1Img);

        let samurai1Txt = document.createElement("p");
        samurai1Txt.className = "imPerfect txtCenter cyan samurai";
        samurai1Txt.innerText = "Samurai 1";

        let choose1 = document.createElement("h1");
        choose1.className = "imPerfect txtCenter cyan choose";
        choose1.innerText = "choose";

        let dontCheat1 = document.createElement("p");
        dontCheat1.innerText = message1;
        dontCheat1.className = "imPerfect txtCenter cyan message";

        p1Col.appendChild(p1Score);
        p1Col.appendChild(samurai1ImgDiv);
        p1Col.appendChild(samurai1Txt);
        p1Col.appendChild(choose1);
        p1Col.appendChild(p1ChoicesOuterDiv);
        p1Col.appendChild(dontCheat1);



        let p2ChoicesOuterDiv = document.createElement("div");
        p2ChoicesOuterDiv.className = "center"

        let p2choices = document.createElement("div");
        p2choices.className = "between optionsDiv";

        let rockImg2 = document.createElement("img");
        rockImg2.src = "./assets/rock icon.png";
        rockImg2.alt = "img of rock";
        rockImg2.className = "cursor";
        rockImg2.addEventListener('click', (event) => {
            p2Choice = "rock";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let paperImg2 = document.createElement("img");
        paperImg2.src = "./assets/paper icon.png";
        paperImg2.alt = "img of paper";
        paperImg2.className = "cursor";
        paperImg2.addEventListener('click', (event) => {
            p2Choice = "paper";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let scissorsImg2 = document.createElement("img");
        scissorsImg2.src = "./assets/scissors icon.png";
        scissorsImg2.alt = "img of scissors";
        scissorsImg2.className = "cursor";
        scissorsImg2.addEventListener('click', (event) => {
            p2Choice = "scissors";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let lizzardImg2 = document.createElement("img");
        lizzardImg2.src = "./assets/lizard icon.png";
        lizzardImg2.alt = "img of lizzard";
        lizzardImg2.className = "cursor";
        lizzardImg2.addEventListener('click', (event) => {
            p2Choice = "lizard";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        let spockImg2 = document.createElement("img");
        spockImg2.src = "./assets/spock icon.png";
        spockImg2.alt = "img of spock";
        spockImg2.className = "cursor";
        spockImg2.addEventListener('click', (event) => {
            p2Choice = "spock";
            if(lightMode){
                dontCheat2.className = "imPerfect txtCenter black message";
            }else {
                dontCheat2.className = "imPerfect txtCenter yellow message";
            }
            dontCheat2.innerText = "ready to battle";
        })

        p2choices.appendChild(rockImg2);
        p2choices.appendChild(paperImg2);
        p2choices.appendChild(scissorsImg2);
        p2choices.appendChild(lizzardImg2);
        p2choices.appendChild(spockImg2);
        p2ChoicesOuterDiv.appendChild(p2choices);

        let p2Col = document.createElement("div");
        p2Col.className = "col samurai2Padding";

        let p2Score = document.createElement("h1");
        p2Score.className = "imPerfect white txtCenter score";
        p2Score.innerText = `${point2} / 5`;

        let samurai2ImgDiv = document.createElement("div");
        samurai2ImgDiv.className = "center";

        let samurai2Img = document.createElement("img");
        samurai2Img.src = "./assets/samurai 2.png";
        samurai2Img.className = "samuraiSize";
        samurai2Img.alt = "picture of samurai";

        samurai2ImgDiv.appendChild(samurai2Img);

        let samurai2Txt = document.createElement("p");
        samurai2Txt.className = "imPerfect txtCenter yellow samurai";
        samurai2Txt.innerText = "Samurai 2";

        let choose2 = document.createElement("h1");
        choose2.className = "imPerfect txtCenter yellow choose";
        choose2.innerText = "choose";

        let dontCheat2 = document.createElement("p");
        dontCheat2.innerText = message2;
        dontCheat2.className = "imPerfect txtCenter yellow message";

        p2Col.appendChild(p2Score);
        p2Col.appendChild(samurai2ImgDiv);
        p2Col.appendChild(samurai2Txt);
        p2Col.appendChild(choose2);
        p2Col.appendChild(p2ChoicesOuterDiv);
        p2Col.appendChild(dontCheat2);

        let row = document.createElement("div");
        row.className = "row";

        row.appendChild(p1Col);
        row.appendChild(p2Col);

        let fightBtn = document.createElement("div");
        fightBtn.className = "fightBtn imPerfect white txtCenter centerCol cursor";
        fightBtn.textContent = "Fight";
        fightBtn.addEventListener('click', (event) => {
            if (p1Choice === "" && p2Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
                dontCheat2.innerText = "You didnt choose an option";
                dontCheat2.className = "imPerfect txtCenter red message";
            } else if (p2Choice === "") {
                dontCheat2.innerText = "You didnt choose an option";
                dontCheat2.className = "imPerfect txtCenter red message";
            } else if (p1Choice === "") {
                dontCheat1.innerText = "You didnt choose an option";
                dontCheat1.className = "imPerfect txtCenter red message";
            } else {
                    fightDiv.innerHTML = "";
                    displayFT5Winner(p1Choice, p2Choice);
                    addFT5Fight(p1Point, p2Point, "dont cheat", "dont cheat");
                    p1Choice = "";
                    p2Choice = "";
            }
        })

        let vs = document.createElement("h1");
        vs.className = "txtCenter white imPerfect absolute vs";
        vs.textContent = "vs";

        if(lightMode){
            samurai1Img.src = "./assets/blacksamurai 1.png";
            samurai2Img.src = "./assets/blacksamurai 2.png";
            p2Score.className = "imPerfect black txtCenter score";
            dontCheat2.className = "imPerfect txtCenter black message";
            choose2.className = "imPerfect txtCenter black choose";
            samurai2Txt.className = "imPerfect txtCenter black samurai";
            rockImg2.src = "./assets/blackrock.png";
            scissorsImg2.src = "./assets/blackscissors.png";
            paperImg2.src = "./assets/blackpaper.png";
            lizzardImg2.src = "./assets/blacklizzard.png";
            spockImg2.src = "./assets/blackspock.png";
            dontCheat1.className = "imPerfect txtCenter white message";
            choose1.className = "imPerfect txtCenter white choose";
            samurai1Txt.className = "imPerfect txtCenter white samurai";
            fightBtn.className = "fightBtn2 imPerfect black txtCenter centerCol cursor";
            vs.className = "txtCenter black imPerfect absolute vs";
            fightDiv.className = "container-fluid lotus2";
        }

        fightDiv.appendChild(row);
        fightDiv.appendChild(fightBtn);
        fightDiv.appendChild(vs);
    }

}




export { addSuddenDeathFight, fightDiv, addFT3Fight, addFT5Fight }