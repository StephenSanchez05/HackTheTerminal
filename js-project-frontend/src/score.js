document.addEventListener("DOMContentLoaded", function() {
    HiScore.createHiScore()
})

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
            newScore.listHighScores
            console.log(resp);
        })
    })
    }

     static listHighScores() {
     let scores = document.querySelector(".scoreList")
     let p = document.createElement("p")
     p.innertext = this.difficulty
     scores.appendChild(p)
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
    console.log(scoreTimeDifference);
    console.log(scoreFinalScore);
}