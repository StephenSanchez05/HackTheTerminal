

const hackWords = ["!", "@", "#", "$", "%", "^", "&", "*", "}", "{"];

let answer;
let randNumber;
let correctLetters = 0;





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
            
                if (info.name === selectedDifficulty.toUpperCase()) {
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
        data.insertAdjacentHTML('beforeend', '<span id="screen";>' + x + "</span>");
}

function addWordsToDom(x) {
        let data = document.getElementById("dump");
        data.insertAdjacentHTML('beforeend', '<span style="color: white"; id="screen"; class="words";>' + x + "</span>");
        setQuerySelector();
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
        answer = String(arr[randNumber]);
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

function setQuerySelector() {
    let selector = document.querySelectorAll('span.words');
    selector.forEach(item => {
        item.addEventListener("click", wordClicked, false);
    })
}

function wordClicked(event) {
    event.target.style.color = "red";
    event = event.target.innerHTML;
    winOrLose(event);
}

function wrongAnswer(x) {
    correctLetters = 0;
    let wrongAnswer = x.split('');
    let rightAnswer = answer.split('');
    for(var i = 0; i < wrongAnswer.length; i++) {
        if ( wrongAnswer[i] === rightAnswer[i]) {
            correctLetters += 1;
        }
    }
    document.querySelectorAll('.correctLetters').forEach(function(a){
        a.remove()
        })
    let docNumbers = document.getElementById("dump");
    docNumbers.insertAdjacentHTML('beforeend', '<h2 style="color: white"; class="correctLetters";>' + correctLetters + "/" + rightAnswer.length + " Letters are in the correct space" + "</h2>");

}

function rightAnswer() {
    document.querySelectorAll('.correctLetters').forEach(function(a){
        a.remove()
        })
        let docNumbers = document.getElementById("dump");
        docNumbers.insertAdjacentHTML('beforeend', '<h1 style="color: white" class="correctLetters";>' + "You win!" + "</h1>");
        finalScore();
}

function winOrLose(x) {
    if (x === answer) {
        rightAnswer();
    } else {
        wrongAnswer(x);
    }

}

