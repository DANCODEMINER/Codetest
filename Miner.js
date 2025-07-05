// Toggle menu in login page
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Show the selected form (login/register/forgot)
function showForm(formType) {
  document.getElementById("login-form").style.display = formType === "login" ? "block" : "none";
  document.getElementById("register-form").style.display = formType === "register" ? "block" : "none";
  document.getElementById("forgot-form").style.display = formType === "forgot" ? "block" : "none";
}

// On login success, switch to dashboard
function loginSuccess() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("dashboard-page").style.display = "block";
}

// Sidebar toggle for dashboard
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const isOpen = sidebar.classList.toggle("active");
  overlay.style.display = isOpen ? "block" : "none";
}

// Logout user and go back to login page
function logout() {
  alert("Logging out...");
  document.getElementById("dashboard-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
  showForm('login');
}

// BTC counter animation on dashboard
let btcValue = 0.00000000;
setInterval(() => {
  const btcCounter = document.getElementById("btc-counter");
  if (btcCounter) {
    btcValue += 0.00000001;
    btcCounter.innerText = btcValue.toFixed(8) + " BTC";
  }
}, 1000);

// Attach form submit event listeners for future backend integration
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // TODO: connect login to backend here
  loginSuccess();
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // TODO: connect signup to backend here
  alert('Sign up functionality to be implemented');
});

document.getElementById('forgot-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // TODO: connect forgot password to backend here
  alert('Forgot password functionality to be implemented');
});
