document.addEventListener("DOMContentLoaded", function() {
    Difficulty.loadDifficulty()

})

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
                let newDifficulty = new Difficulty(info);
                console.log(newDifficulty)
                newDifficulty.addDifficultyToDom();
            } ) 
        })
    }

    addDifficultyToDom() {
        let data = document.getElementById("dump");
        let p = document.createElement("p");
        p.innerText = this.words;
        data.appendChild(p);
    }

    static addRandom() {
        console.log("we hit the function")
        let x = document.querySelector('div');
        let p = document.createElement("p");
        p.innerHTML = "hello-world";
        x.appendChild(p);
    }
}