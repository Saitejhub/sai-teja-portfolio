  const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

year.textContent = new Date().getFullYear();