let scoreStartTime;
let scoreEndTime;
let scoreTimeDifference;
let scoreAttempts;
let scoreFinalScore;

class Score {
    constructor(data) {
        this.id = data.id;
        this.score = data.score;
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
    scoreFinalScore = scoreFinalScore - scoreTimeDifference - (scoreAttempts * 5);
    console.log(scoreTimeDifference);
    console.log(scoreFinalScore);
}