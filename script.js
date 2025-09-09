function login() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("auth").classList.remove("hidden");
}

function showPage(pageId) {
  let pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

function toggleSignup() {
  alert("Signup form coming soon!");
}