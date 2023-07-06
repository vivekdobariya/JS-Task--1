const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("role").textContent = currentUser.Role;
    document.getElementById("firstName").textContent = currentUser.FirstName;
    document.getElementById("lastName").textContent = currentUser.LastName;
}