function validation(){ // Index form-validation

    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function(e){
        e.preventDefault();

        const firstname = document.getElementById("fName").value;
        const password = document.getElementById("key").value;

        if(firstname == "Klas" && password == "123"){

            const isValid = true;

            window.location.href = "admin.html";
            return isValid;
        }
        else {
            return false;
        }




    });

}

function openForm(){
    document.getElementById("popup").style.display="block";
}

function closeForm(){
    document.getElementById("popup").style.display="none";
}