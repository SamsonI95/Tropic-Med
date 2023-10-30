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

let form = document.getElementById('signupForm')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get each user detail
    let businessName = document.getElementById('input-bn').value;
    let businessAddress = document.getElementById('input-ba').value;
    let email = document.getElementById('input-email').value;
    let businessType = document.getElementById('input-bt"').value;
    let phone = document.getElementById('phone').value;
    let cacNumber = document.getElementById('cac').value;
    let tinNumber = document.getElementById('tin').value;
    
    //store user detail
    localStorage.setItem('input-bn', businessName);
    localStorage.setItem('input-ba', businessAddress);
    localStorage.setItem('input-email', email);
    localStorage.setItem('input-bt"', businessType);
    localStorage.setItem('phone', phone);
    localStorage.setItem('cac', cacNumber);
    localStorage.setItem('tin', tinNumber);
    
    alert("Saved Successfully!!")

})

