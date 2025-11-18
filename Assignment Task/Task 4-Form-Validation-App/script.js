let form = document.getElementById("regForm");
let nameF = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");

let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");

let userCard = document.getElementById("userCard");
let cardName = document.getElementById("cardName");
let cardEmail = document.getElementById("cardEmail");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous states
    nameF.classList.remove("valid", "invalid");
    email.classList.remove("valid", "invalid");
    pass.classList.remove("valid", "invalid");

    // Name validation
    if (nameF.value.trim() === "") {
        nameErr.textContent = "Name is required";
        nameF.classList.add("invalid");
        valid = false;
    } else {
        nameErr.textContent = "";
        nameF.classList.add("valid");
    }

    // Email validation
    if (!email.value.includes("@") || email.value.trim() === "") {
        emailErr.textContent = "Please enter a valid email address";
        email.classList.add("invalid");
        valid = false;
    } else {
        emailErr.textContent = "";
        email.classList.add("valid");
    }

    // Password validation
    if (pass.value.length < 8) {
        passErr.textContent = "Password must be at least 8 characters";
        pass.classList.add("invalid");
        valid = false;
    } else {
        passErr.textContent = "";
        pass.classList.add("valid");
    }

    if (valid) {
        // Show user card with details
        cardName.textContent = nameF.value.trim();
        cardEmail.textContent = email.value.trim();
        userCard.classList.remove("hidden");
    }
});