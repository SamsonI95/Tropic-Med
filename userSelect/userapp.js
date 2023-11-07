// Function to handle the registration button click
function handleRegistration() {
    var roleSelect = document.getElementById("role");
    var selectedRole = roleSelect.value;

    if (selectedRole === "Customer") {
      // Redirect to the index page for customers
      window.location.href = "registration.html"; // Replace with the actual URL
    } else if (selectedRole === "Doctor") {
      // Redirect to the doctor registration page
      window.location.href = "docreg.html"; // Replace with the actual URL
    } else if (selectedRole === "Service Provider") {
      // Redirect to the service provider registration page
      window.location.href = "spreg.html"; // Replace with the actual URL
    }
  }

  // Add an event listener to the registration button
  const verifyButton = document.getElementById("nextButton");
  verifyButton.addEventListener("click", handleRegistration);