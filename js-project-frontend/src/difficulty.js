document.addEventListener("DOMContentLoaded", function() {
    Difficulty.loadDifficulty()

})

const hackWords = ["!", "@", "#", "$", "%", "^", "&", "*", "}", "{"];

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
        let p = document.createElement("h3");
        p.innerText = x;
        data.appendChild(p);
    }

    function createWordLibrary(data) {
        data = data.replace(/["[\],]+/g, "");
        let diff = data.split(' ');
        let arr = [];
        for(var i = 0; i < 11; i++) {
            let randNumber = Math.floor(Math.random() * 10);
            let y = diff.splice(randNumber, 1);
            arr.push(y);
        }
        arr.forEach(x => {
            addHackWords();
            addDifficultyToDom(x);
            // addHackWords();
        })
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
    console.log(arr)
        addDifficultyToDom(arr);

}
