document.addEventListener("DOMContentLoaded", function() {
    User.createUser()
    User.getDDChange()
 

})

let userCode;

class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.highs = data.highs;
        
    }

    static createUser() {
        let scoreForm = document.querySelector(".new-user-form")
        scoreForm.addEventListener("submit", function(event) {
            event.preventDefault();
            console.log("clicked");
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: event.target[0].value
            })
        })
        .then(response => response.json())
        .then(resp => {
            let newUser = new User(resp); 
            startGame();           
            newUser.getAllUsers()
        })
    })
    }



    getAllUsers() {
        let uu = document.querySelector(".user-select")
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                data.data.map(u => {
                uu.innerHTML = uu.innerHTML + `<option value ="${u.id}">${u.attributes.name}</option>`
                })                
            })
    }

   
    static getDDChange() {
        let select = document.querySelector(".user-select")
        select.addEventListener("change", function(e) {
            console.log("e", e.target.value);
            userCode = e.target.value;    

        })
    }
}

function addUserToDom (info) {
    node.innerText = info.name;
    users.appendChild(node);
    console.log(info.highs);
    info.highs.forEach( x => {
        node.innertext = x;
        users.appendChild(node);
    })
    console.log(node);
}

// function listHighScores() {
//     let users = document.querySelector(".scoreList")
//     let node = document.createElement("LI");
//     fetch("http://localhost:3000/users")
//         .then(response => response.json())
//         .then(data => {
//             data.map(u => {
//             console.log(u.highs);
//             node.innerHTML = u.name;
//             users.appendChild(node);
//             })                
//         })
// }
