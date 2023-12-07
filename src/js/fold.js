document.addEventListener("DOMContentLoaded", function () {
    var workItem = document.getElementById("workItem");
    var foldContainer = document.getElementById("foldContainer");
    var submenu = workItem.querySelector("ul");

    workItem.addEventListener("click", function () {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
      foldContainer.classList.toggle("clicked"); 
    });
  });