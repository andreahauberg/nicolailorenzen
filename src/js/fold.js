document.addEventListener("DOMContentLoaded", function () {
  var workItem = document.querySelector("#workItem");
  var foldContainer = document.querySelector("#foldContainer");
  var submenu = workItem.querySelector("ul");

  workItem.addEventListener("click", function () {
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }    
    foldContainer.classList.toggle("clicked"); 
  });
});