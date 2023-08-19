document.getElementById("myform").addEventListener("submit", function (e) {
    e.preventDefault();
    var userName = document.getElementById("username").value;
    var userEmail = document.getElementById("email").value;

    if (userName == "") {
        alert("user name is required");
    }

    if (userEmail == "") {
        alert("User email is required");
    }

    if (!isValidEmail(userEmail)) {
        alert("Invalid email format");
    }

    alert("Form submitted successfully");
});

const isValidEmail = (email) => {

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);

}

