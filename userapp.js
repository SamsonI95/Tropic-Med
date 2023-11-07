/*// Function to handle the registration button click
function handleRegistration() {
    var roleSelect = document.getElementById("role");
    var selectedRole = roleSelect.value;

    if (selectedRole === "customer") {
      // Redirect to the index page for customers
      window.location.href = "registration.html"; // Replace with the actual URL
    } else if (selectedRole === "doctor") {
      // Redirect to the doctor registration page
      window.location.href = "docreg.html"; // Replace with the actual URL
    } else if (selectedRole === "service provider") {
      // Redirect to the service provider registration page
      window.location.href = "spreg.html"; // Replace with the actual URL
    }
  }

  // Add an event listener to the registration button
  var nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", handleRegistration);
*/

  document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('role');
    const nextButton = document.getElementById('nextButton');

    // Event listener for the "Next" button
    nextButton.addEventListener('click', function() {
        const selectedRole = roleSelect.value;

        if (selectedRole === 'customer') {
            // Redirect to the Customer registration page
            window.location.href = 'registration.html';
        } else if (selectedRole === 'doctor') {
            // Redirect to the Doctor registration page
            window.location.href = 'docreg.html';
        } else if (selectedRole === 'service provider') {
            // Redirect to the Service Provider registration page
            window.location.href = 'spreg.html';
        } else {
            // Handle the case when no role is selected
            alert('Please select a user type to continue.');
        }
    });
});
