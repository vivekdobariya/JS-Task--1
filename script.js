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

    let userData = {
        "FirstName": fname,
        "LastName": lname,
        "Email": email,
        "UserName": username,
        "Password": pass,
        "Cpassword": cpass,
        "Role": role
    };

    let allData = JSON.parse(localStorage.getItem("alldata")) || [];
    allData.push(userData);
    localStorage.setItem("alldata", JSON.stringify(allData));

    if (fname == "" || lname == "" || email == "" || username == "" || pass == "" || cpass == "" || role == "") {
        alert("Input field is empty");
    }
    else {
        if (pass.length <= 6) {
            if (pass !== cpass) {
                alert("Password does not match");
            }
            else {
                alert("Registration Successful");
                setTimeout(()=>{
                    window.location.href = "login.html"
                }, 2000);
            }
        }
        else {
            alert("Password should be atleast 6 characters");
        }
    }
})

const login = document.querySelector(".login");

login.addEventListener("click" , (e)=>{
    e.preventDefault();
    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;

    let allData = JSON.parse(localStorage.getItem("alldata")) || [];

    let validUser = allData.find(user => user.Username === username && user.Password === password);
    if (validUser) {
        alert("Login successful");
    }
    else {
        alert("Invalid email or password");
    } 


})

