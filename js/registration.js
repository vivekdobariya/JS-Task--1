const submit_button = document.querySelector(".button");

submit_button.addEventListener("click", (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const role = document.getElementById("role").value;

    if (fname === "" || lname === "" || email === "" || username === "" || pass === "" || cpass === "" || role === "") {
        alert("Input field is empty");
    } 
    else if (pass.length < 6) {
        alert("Password should be at least 6 characters");
    } 
    else if (pass !== cpass) {
        alert("Password does not match");
    } 
    else {
        let userData = {
            "firstName": fname,
            "lastName": lname,
            "emailAddress": email,
            "userName": username,
            "password": pass,
            "cPassword": cpass,
            "userRole": role
        };

        let allData = JSON.parse(localStorage.getItem("alldata")) || [];
        allData.push(userData);
        localStorage.setItem("alldata", JSON.stringify(allData));

        alert("Registration Successful");
        window.location.href = "login.html";
    }
});