let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// /*==================Menu Show=======================*/

// /* Validate if constant exist*/
// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("show-menu");
//   });
// }

// /*==================Menu Hidden=======================*/

// /* Validate if constant exist*/

// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("show-menu");
//   });
// }
