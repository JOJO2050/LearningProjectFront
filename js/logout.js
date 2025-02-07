const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  localStorage.removeItem("auth")
  Redirection("http://127.0.0.1:5500/login.html");
})