const login = document.querySelector(".login");

login.addEventListener("click", (e) => {
    e.preventDefault();
    const userName = document.getElementById("Username").value;
    const password = document.getElementById("password").value;

    let allData = JSON.parse(localStorage.getItem("alldata")) || [];

    let validUser = allData.find(
        (user) => user.UserName === userName && user.Password === password
    );

    if (validUser) {
        localStorage.setItem("currentUser", JSON.stringify(validUser));
        window.location.href = "home.html";
    }
    else {
        alert("Invalid email or password");
    }

});