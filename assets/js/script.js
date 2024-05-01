const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

// Function to toggle active class on an element
const elemToggleFunc = function (elem) {
	elem.classList.toggle("active");
};

menuToggleBtn.addEventListener("click", function () {
	elemToggleFunc(navbar);
});

// Get all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Add event listeners to each nav link
navLinks.forEach(function (link) {
	link.addEventListener("click", function () {
		// Close the navbar dropdown by removing the active class
		navbar.classList.remove("active");
	});
});

/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
	if (window.scrollY >= 800) {
		goTopBtn.classList.add("active");
	} else {
		goTopBtn.classList.remove("active");
	}
});
