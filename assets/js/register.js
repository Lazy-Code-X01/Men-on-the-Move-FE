const form = document.querySelector(".contact-form");
const alertBox = document.querySelector("#contact .alert");
const submitBtn = document.querySelector(".submit");

// Hide alert by default
alertBox.style.visibility = "hidden";

form.addEventListener("submit", async function (e) {
	e.preventDefault();

	// Clear previous messages
	alertBox.textContent = "";
	alertBox.classList.remove("success", "error");

	// Fetch form data
	const formData = new FormData(form);

	// Check for empty input fields
	let hasEmptyFields = false;
	formData.forEach(function (value) {
		if (!value) {
			hasEmptyFields = true;
		}
	});

	if (hasEmptyFields) {
		location.href = "#contact";
		showAlert("Please fill in all required fields.", "error");
		return;
	}

	try {
		// Display loading state
		submitBtn.disabled = true;
		submitBtn.textContent = "Loading...";
		submitBtn.style.backgroundColor = "gray";

		// Make API request
		const response = await fetch(
			"https://adminpowerhouse.menonthemove.ng/api/mom/registration",
			{
				method: "POST",
				body: formData,
			},
		);

		if (!response.ok) {
			throw new Error("Failed to register. Please try again later.");
		}

		// Extract success message from API response
		const responseData = await response.json();
		const successMessage = responseData.success;

		// Reset form
		form.reset();

		// Show success modal with success message
		showModal(successMessage);
	} catch (error) {
		// Show error message
		showAlert(error.message, "error");
	} finally {
		// Reset submit button state
		submitBtn.disabled = false;
		submitBtn.textContent = "Submit";
		submitBtn.style.backgroundColor = "";
		location.href = "#contact";
	}
});

function showModal(content) {
	const modal = document.createElement("div");
	modal.classList.add("modal");
	modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="./assets/images/success.png" alt="Success Image">
        <p>${content}</p>
        <p class='sal'>Please screenshot this message for your reference.</p>
      </div>
    `;
	document.body.appendChild(modal);

	document.body.classList.add("modal-open"); // Add modal-open class to body

	const closeButton = modal.querySelector(".close");
	closeButton.addEventListener("click", function () {
		document.body.removeChild(modal);
		document.body.classList.remove("modal-open"); // Remove modal-open class from body
	});
}

function showAlert(message, type) {
	alertBox.textContent = message;
	alertBox.classList.add(type);
	alertBox.style.visibility = "visible";

	// Hide alert after 3 seconds
	setTimeout(function () {
		alertBox.style.visibility = "hidden";
	}, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
	var modal = document.getElementById("welcomeModal");
	var closeButton = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	closeButton.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from("#welcomeModal", {
	opacity: 0,
	y: -10,
	delay: 1,
	duration: 0.5,
});
// ==== LOGO  ==== //
gsap.from(".logo", {
	opacity: 0,
	y: -10,
	delay: 1,
	duration: 0.5,
});

// ==== NAV-MENU ==== //
gsap.from(".navbar .nav-item", {
	opacity: 0,
	y: -10,
	delay: 1.2,
	duration: 0.5,
	stagger: 0.3,
});

// ==== TOGGLE BTN ==== //
gsap.from(".navbar-menu-btn", {
	opacity: 0,
	y: -10,
	delay: 1.4,
	duration: 0.5,
});

// ==== MAIN HEADING  ==== //
gsap.from(".hero-title", {
	opacity: 0,
	y: 20,
	delay: 2.4,
	duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".hero-text", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

// ==== CTA BUTTONS ==== //
gsap.from(".btn-wrapper", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

// ==== TEAM IMAGE ==== //
gsap.from(".shape-content", {
	opacity: 0,
	y: 20,
	delay: 3,
	duration: 1,
});
