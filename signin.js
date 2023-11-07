document.getElementById("sign").addEventListener("click", function() {
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
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
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

signupForm.addEventListener('submit', (e) =>{
    let email = document.getElementById('input-email').value;
    let psw = document.getElementById('input-password').value;

    //local storage

    /*localStorage.setItem('input-email', email);
    localStorage.setItem('input-password', psw);*/
})
