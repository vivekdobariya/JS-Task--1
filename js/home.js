const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("role").textContent = currentUser.Role;
    document.getElementById("firstName").textContent = currentUser.FirstName;
    document.getElementById("lastName").textContent = currentUser.LastName;
}

const logoutButton = document.querySelector(".log-out-button");
function handleLogout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
logoutButton.addEventListener("click", handleLogout);