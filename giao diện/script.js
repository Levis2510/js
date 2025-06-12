document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = {
        username: "admin",
        password: "123456"
    };
    if (username === validUser.username && password === validUser.password) {
        document.getElementById("message").textContent = "Đăng nhập thành công!";
        document.getElementById("message").style.color = "green";
        setTimeout(function() {
            window.location.href = "home.html";
        }, 1000);
    } else {
        document.getElementById("message").textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
        document.getElementById("message").style.color = "red";
    }
});
document.getElementById("registerBtn").addEventListener("click", function() {
    window.location.href = "register.html";
});