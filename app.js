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