/*document.getElementById("openRegister").addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "block";
    popup.style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";
});*/

document.getElementById("openRegister").addEventListener("submit", function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";

    // Navigate to the main page (index.html in this case)
    window.location.href = "index.html";
});



//password toggle and requirement display
var passwordInput = document.getElementById('input-password');
var eyeIcon = document.getElementById('show-password');
var validationDiv = document.querySelector('.password-validation');
var validationList = validationDiv.querySelector('ul');
var icons = validationList.querySelectorAll('.icon');
var passwordNotMatchMessage = document.getElementById("password-not-match");

passwordInput.addEventListener('focus', function() {
  validationDiv.style.display = 'block';
});

passwordInput.addEventListener('blur', function() {
  validationDiv.style.display = 'none';
});

passwordInput.addEventListener('input', function() {
  validatePassword(this.value);
});

function validatePassword(password) {
  const criteria = [
    /[A-Z]/,
    /[a-z]/,
    /[0-9]/,
    /[^A-Za-z0-9]/,
    /.{8,}/
  ];
  
  let isValid = true;

  criteria.forEach(function(rule, index) {
    const listItem = validationList.children[index];
    const icon = icons[index];

    if (rule.test(password)) {
      listItem.classList.add('valid');
      icon.innerText = '✓';
    } else {
      listItem.classList.remove('valid');
      icon.innerText = '✗';
      isValid = false;
    }
  });

  if (isValid) {
    validationDiv.classList.add('valid');
  } else {
    validationDiv.classList.remove('valid');
  }
}

eyeIcon.addEventListener("click", () =>{
  //toggle password input type between text and password
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

//confirm password toggle
var passwordRinput = document.getElementById('repeat-password');
var eyeRicon = document.getElementById('show-password1');

eyeRicon.addEventListener("click", () =>{
  passwordRinput.type = passwordRinput.type === 'password' ? 'text' : 'password';
  eyeRicon.className = `fa-solid fa-eye${passwordRinput.type === "password" ? "" : "-slash"}`;
});

//Confirming matching passwords
var passwordInput = document.getElementById('input-password');
var passwordRinput = document.getElementById('repeat-password');
var passwordNotMatchMessage = document.getElementById("password-not-match");

passwordRinput.addEventListener("keyup", checkPasswords);

  function checkPasswords() {
    var password = passwordInput.value;
    var repeatPassword = passwordRinput.value;

    if (password === repeatPassword) {
      passwordNotMatchMessage.textContent = "";
    } else {
      passwordNotMatchMessage.textContent = "  Incorrect password!!";
    }
  }

let form = document.getElementById('signupForm')

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let email = document.getElementById('input-email').value;
    let psw = document.getElementById('input-password').value;
    let cpsw = document.getElementById('repeat-password').value;

    // Perform registration logic
    // TODO: Send data to backend or perform necessary actions
    
    //local storage
    /*localStorage.setItem('input-email', email);
    localStorage.setItem('input-password', psw);*/
});


  // Function to handle the registration button click
  /*function handleRegistration() {
    const roleSelect = document.getElementById("role");
    const selectedRole = roleSelect.value;

    if (selectedRole === "customer") {
      // Redirect to the index page for customers
      window.location.href = "index.html"; // Replace with the actual URL
    } else if (selectedRole === "doctor") {
      // Redirect to the doctor registration page
      window.location.href = "docreg.html"; // Replace with the actual URL
    } else if (selectedRole === "service provider") {
      // Redirect to the service provider registration page
      window.location.href = "spreg.html"; // Replace with the actual URL
    }
  }

  // Add an event listener to the registration button
  const registerButton = document.getElementById("submitButton");
  registerButton.addEventListener("click", handleRegistration);*/
