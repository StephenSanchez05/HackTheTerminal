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
                data.map(u => {
                uu.innerHTML = uu.innerHTML + `<option value ="${u.id}">${u.name}</option>`
                })                
            })
    }

    addUserToDom () {
        let users = document.querySelector(".userList")
        let node = document.createElement("LI");
        node.innerText = this.name;
        users.appendChild(node);
        console.log(node);

    }

    
    static getDDChange() {
        let scoreForm = document.querySelector(".new-user-form")
        let select = document.querySelector(".user-select")
        select.addEventListener("change", function(e) {
            console.log("e", e.target.value);
            userCode = e.target.value;    

        })
    }
}