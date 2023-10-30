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
    let firstName = document.getElementById('input-fn').value;
    let lastName = document.getElementById('input-ln').value;
    let specialization = document.getElementById('input-spec').value;
    let licenceAuthority = document.getElementById('input-lcauth').value;
    let licenceNumber = document.getElementById('input-lcnumber').value;
    let phone = document.getElementById('phone').value;

    //store user detail
    localStorage.setItem('input-fn', firstName);
    localStorage.setItem('input-ln', lastName);
    localStorage.setItem('input-spec', specialization);
    localStorage.setItem('input-lcauth', licenceAuthority);
    localStorage.setItem('input-lcnumber', licenceNumber);
    localStorage.setItem('phone', phone);

    alert("Saved Successfully!!")

})
