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


//password toggle
function passFunction() {
    var x = document.getElementById("input-password");
    var y = document.getElementById("repeat-password");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
}

let form = document.getElementById('signupForm')

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let email = document.getElementById('input-email').value;
    let psw = document.getElementById('input-password').value;
    let cpsw = document.getElementById('repeat-password').value;

    

    if (psw !== cpsw) {
        alert('Passwords do not match!');
        return;
    }
    // Perform registration logic
    // TODO: Send data to backend or perform necessary actions
    
    //local storage
    localStorage.setItem('input-email', email);
    localStorage.setItem('input-password', psw);
    
    /*let showPasswordBtn = document.querySelector('#show-password');
    let passwordInp = document.querySelector('#input-password');

        //toggle password visiblity
        showPasswordBtn.addEventListener('click', function (e) {

        //toggle the type attribute

        var type = passwordInp.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInp.setAttribute('type', type);

        //toggle the icon

        this.classList.toggle("bi-eye");

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    })*/
});


  // Function to handle the registration button click
  function handleRegistration() {
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
  registerButton.addEventListener("click", handleRegistration);
