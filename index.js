// Get the elements from the HTML document
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-link");

// Add an event listener to the toggle button to show or hide the menu
navbarToggle.addEventListener("click", function () {
  // Toggle the aria-expanded attribute to indicate the menu state
  const expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);

  // Toggle the menu visibility
  navbarMenu.classList.toggle("show");
});

// Add event listeners to the menu links to close the menu when clicked
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Set the aria-expanded attribute to false
    navbarToggle.setAttribute("aria-expanded", false);

    // Hide the menu
    navbarMenu.classList.remove("show");
  });
});
