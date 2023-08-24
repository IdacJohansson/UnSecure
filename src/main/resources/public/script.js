function validation(){ // Index form-validation

    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function(e){
        e.preventDefault();

        const firstname = document.getElementById("fName").value;
        const password = document.getElementById("key").value;
        let isValid = false;

        while(isValid == false) {
            if (firstname == "Klas" && password == "123") {
                isValid = true;
                sessionStorage.setItem("keyIsValid", "true");
                window.location.href = "admin.html";
                return isValid;
            } else { // sätter en tidsfördröjning för varje ogiltigt försök
                setTimeout(() =>console.log("Wrong login. Wait 5 seconds"),5000)
                return false;
            }
        }
    });
}

function checkLogin() {
    const isValid = sessionStorage.getItem("keyIsValid")
    if(isValid !== "true") {
        window.location.href = "index.html"
    }
}

function checkUserLogin() {
    const isValid = sessionStorage.getItem("passIsValid")
    if(isValid !== "true") {
        window.location.href = "index.html"
    }
}

function login() {
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', function(e){
        e.preventDefault();

        const username = document.getElementById("uName").value;
        const password = document.getElementById("pass").value;

        if (username == "Lisa" && password == "111") {
            sessionStorage.setItem("passIsValid", "true");
            window.location.href = "user.html";
            return true;
        }
        else {
            return false;
        }
    });
}

function checkPassword(){ // Gör det svårare för en obehörig att ta sig igenom
    const userForm = document.getElementById("userForm");
    userForm.addEventListener('submit', function (e){
        e.preventDefault();

        const password = document.getElementById("pass").value;
        const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


        if (password == "" || !regPass.test(password)==true){
            document.getElementById('psw').innerText = "Please enter a valid password";
            console.log("Invalid password");
            return false;
        } else {
            console.log(password);
            sessionStorage.setItem("passIsValid", "true");
            window.location.href = "user.html";
            return true;
        }
    });
}