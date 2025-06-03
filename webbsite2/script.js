function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (user === "user" && pass === "pass123") {
        window.location.href = "home.html";
    } else {
        errorMsg.textContent = "Invalid username or password.";
    }
}
