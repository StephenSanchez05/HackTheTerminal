document.addEventListener("DOMContentLoaded", function() {
    

})

let selectedDifficulty;

function startGame() {
    let instructions = document.getElementById("dump");
        document.querySelector('.new-user-form').remove();
        instructions.insertAdjacentHTML('beforeend', '<h2 class="instructions";>' + "Welcome:  Pick a difficulty below to start hacking the password " + "</h2>");
        instructions.insertAdjacentHTML('beforeend', '<h2 style="color: white"; class="difficulty";>' + "Easy" + "</h2>");
        instructions.insertAdjacentHTML('beforeend', '<h2 style="color: white"; class="difficulty";>' + "Hard" + "</h2>");
        selectDiff();
}

function selectDiff() {
    let selector = document.querySelectorAll('h2.difficulty');
    selector.forEach(item => {
        item.addEventListener("click", diffClicked, false);
    })
}

function diffClicked(event) {
        event = event.target.innerHTML;
        selectedDifficulty = event;
        document.querySelector('.instructions').remove();
        document.querySelectorAll('.difficulty').forEach(function(a){
            a.remove()
            })
        Difficulty.loadDifficulty();
        startScoring();
        
}



