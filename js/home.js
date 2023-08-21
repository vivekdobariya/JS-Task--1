const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("role").textContent = currentUser.userRole;
    document.getElementById("firstName").textContent = currentUser.firstName;
    document.getElementById("lastName").textContent = currentUser.lastName;
}

const logoutButton = document.querySelector(".log-out-button");
function handleLogout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
logoutButton.addEventListener("click", handleLogout);