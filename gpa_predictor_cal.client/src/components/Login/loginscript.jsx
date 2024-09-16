// const loginContainer = document.getElementById('login-container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     loginContainer.classList.add("active")
// })

// loginBtn.addEventListener('click', () => {
//     loginContainer.classList.remove("active")
// })

// loginscript.js
document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
  
    registerBtn.addEventListener('click', () => {
      loginContainer.classList.add("active");
    });
  
    loginBtn.addEventListener('click', () => {
      loginContainer.classList.remove("active");
    });
  });