const hamburger = document.getElementById("hamburgerButton");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', function() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    });


window.onscroll = function () {
if (window.pageYOffset > 0) {
    nav.style.backgroundColor = "#239fd4"
} else {
    nav.style.backgroundColor = "transparent"
}
}