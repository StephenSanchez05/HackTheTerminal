document.addEventListener("DOMContentLoaded", function() {
    Difficulty.loadDifficulty()

})

const hackWords = ["!", "@", "#", "$", "%", "^", "&", "*", "}", "{"];

let answer;
let randNumber;

class Difficulty {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.words = data.words;
        this.highs = [];
    }

    static loadDifficulty() {
        fetch("http://localhost:3000/difficulties")
        .then(resp => resp.json())
        .then(results => {
            results.forEach( info => {
                if (info.name === "HARD") {
                let newDifficulty = new Difficulty(info);
                let x = newDifficulty.words;
                createWordLibrary(x);
                }
            } ) 
        })
    }
}

    function addDifficultyToDom(x) {
        let data = document.getElementById("dump");
        data.insertAdjacentHTML('beforeend', x);
    }

    function addWordsToDom(x) {
        let data = document.getElementById("dump");
        data.insertAdjacentHTML('beforeend', '<span style="color: white"; id="words";>' + x + "</span>");
    }

    function createWordLibrary(data) {
        data = data.replace(/["[\],]+/g, "");
        let diff = data.split(' ');
        let arr = [];
        for(var i = 0; i < 15; i++) {
            randNumber = Math.floor(Math.random() * 10);
            let y = diff.splice(randNumber, 1);
            arr.push(y);
        }
        answer = arr[randNumber];
        arr.forEach(x => {
            addHackWords();
            addWordsToDom(x);
            addHackWords();
        })
        console.log(answer);
    }

    function addHackWords() {
    let randHighNumber = Math.floor(Math.random() * 20) + 5;
    let arr = [];
    for(var i = 0; i < randHighNumber; i++) {
        let randNumber = Math.floor(Math.random() * 10);
        arr.push(hackWords[randNumber]);
    }
    arr = arr.join();
    arr = arr.replace(/[,]+/g, "")
    addDifficultyToDom(arr);

}
