function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function openArrow() {
    /*a.classList.toggle("rotate");*/
    document.querySelector('arrow').style.transform = 'rotate(-90deg)';
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//registration form linking
function regPop(){

}
/*
// Get the modal
var modal = document.getElementById('reg');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    windows.location.assign('registration/registration.html');
  }
}

document.getElementById("openRegister").addEventListener("click", function() {
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

document.getElementById("openRegister").addEventListener("submit", function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  overlay.style.display = "none";
  popup.style.display = "none";

  // Navigate to the main page (index.html in this case)
  window.location.href = "C:\Users\SAMSON\Desktop\Coding\HTML works\Full work\Tropic-Med\index.html";
});*/