// function validateForm() {

//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let dob = document.getElementById("dob").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;

//     let genderSelected = document.getElementById("gender").value;

// if (!genderSelected) {
//   alert("All fields are required!");
//   return false;
// }

//     // Checking if any field is empty
//     if (firstName === "" || lastName === "" || dob === "" || email === "" || phone === "" || genderSelected === null) {
//         alert("All fields are required!");
//         return false;
//     }

//     // Phone number validation
//     if (phone.length !== 10) {
//         alert("Phone number must be 10 digits");
//         return false;
//     }

//     // If everything is valid
//     window.location.href = "success.html";
//     return false;
// }

// //date...
// const today = new Date().toISOString().split("T")[0];
//   document.getElementById("dob").max = today;



function validateForm() {

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;

    let nameRegex = /^[A-Za-z]{2,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(firstName)) {
        alert("Enter a valid First Name");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Enter a valid Last Name");
        return false;
    }

    if (!dob) {
        alert("Please select Date of Birth");
        return false;
    }

    // Block future dates 
    if (new Date(dob) > new Date()) {
        alert("Date of Birth cannot be a future date");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid Email");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits");
        return false;
    }

    if (gender === "") {
        alert("Please select Gender");
        return false;
    }

    window.location.href = "success.html";
    return false;
}





