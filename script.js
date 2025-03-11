const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");
const menuItems = document.querySelectorAll(".main-menu a");

menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("active"); // Toggle the "active" class
});

// Hide menu when a menu item is clicked
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mainMenu.classList.remove("active"); // Hide the menu
  });
});
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
