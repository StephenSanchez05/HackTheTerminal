

let scoreStartTime;
let scoreEndTime;
let scoreTimeDifference;
let scoreAttempts;
let scoreFinalScore;

class HiScore {
    constructor(data) {
        this.id = data.id;
        this.score = data.score;
        this.difficulty = data.difficulty;
    }

    static createHiScore() {
        let scoreForm = document.querySelector(".new-highscore-form")
        console.log(scoreForm);
        scoreForm.addEventListener("submit", function(event) {
            event.preventDefault();
            console.log("clicked");

        fetch("http://localhost:3000/highs",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify({
                score: event.target[0].value
            })
        })
        .then(response => response.json())
        .then(resp => {
            let newScore = new HiScore(resp)
            
            console.log(resp);
        })
    })
    }
}





function startScoring() {
    scoreFinalScore = 100000;
    scoreAttempts = 0;
    scoreStartTime = new Date().getTime();
}

function finalScore() {
    scoreEndTime = new Date().getTime();
    scoreTimeDifference = scoreEndTime - scoreStartTime;
    scoreFinalScore = scoreFinalScore - scoreTimeDifference - (scoreAttempts * 50);
}

function renderScoreSubmit() {
    // scores = document.querySelector(".scoreList")
    // let p = document.createElement('FORM');
    // p.setAttribute("class", "new-highscore-form");
    // scores.appendChild(p)

    // let scoresInput = document.createElement('INPUT');
    // scoresInput.setAttribute("type", "text");
    // scoresInput.setAttribute("id", "scoreArea");
    // scoresInput.setAttribute("value", scoreFinalScore);
    // scores.appendChild(scoresInput);
    // // document.getElementById('scoreArea').setAttribute('readonly', true);

    // let scoresSubmit = document.createElement('INPUT');
    // scoresSubmit.setAttribute('type', 'submit');
    // scores.appendChild(scoresSubmit);

    HiScore.createHiScore();
}