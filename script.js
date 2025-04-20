document.addEventListener("DOMContentLoaded", function toggleMenu() {
	const menuItems = document.querySelectorAll(".menu-items");
	const menuCheckbox = document.getElementById("sidebar-active");
	menuItems.forEach((link) => {
		link.addEventListener("click", function () {
			menuCheckbox.checked = false;
		});
	});
});

/* -- SCROLL REVEAL ANIMATION -- */

const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: false,
});

// PROJECT BOX
sr.reveal(".project-box", { interval: 200 });

// HEADINGS
sr.reveal(".section__text__p1", {});
sr.reveal(".title", {});

// PROJECTS
const srBottom = ScrollReveal({
	origin: "bottom",
	distance: "80px",
	duration: 2000,
	reset: false,
});

sr.reveal(".projects", {});

/* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ----- */
// ABOUT INFO & CONTACT INFO

const srLeft = ScrollReveal({
	origin: "left",
	distance: "80px",
	duration: 2000,
	reset: false,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-left", { delay: 100 });

// ABOUT SKILLS & FORM BOX

const srRight = ScrollReveal({
	origin: "right",
	distance: "80px",
	duration: 2000,
	reset: false,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".contact-right", { delay: 100 });

// CONTACT FORM

// using EmailJS api create an account here: https://www.emailjs.com
emailjs.init("Ej8Cm6Sty2n1ug-7B");

document.addEventListener("DOMContentLoaded", function () {
	emailjs.init("Ej8Cm6Sty2n1ug-7B");
	const contactForm = document.querySelector(".contact-form");

	if (!contactForm) {
		console.error("Error: Contact form not found!");
		return;
	}

	contactForm.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(contactForm);

		// take the data from your html for emailing
		const formValues = {
			from_name: formData.get("fullname"),
			from_email: formData.get("email"),
			email_subject: formData.get("subject"),
			message: formData.get("message"),
		};

		console.log("Form values being sent:", formValues);

		if (
			!formValues.from_name ||
			!formValues.from_email ||
			!formValues.message
		) {
			alert("Please fill in all required fields.");
			return;
		}

		// service_id and template-id from your emailJs
		emailjs
			.send(
				"service_rojau1n",
				"template_8ddme6t",
				formValues,
				"Ej8Cm6Sty2n1ug-7B"
			)
			.then(
				function (response) {
					alert("Email sent successfully!");
					console.log("Email sent successfully!", response);
					contactForm.reset();
				},
				function (error) {
					alert("Error sending message: " + JSON.stringify(error));
					console.error("Error sending message: ", error);
				}
			);
	});
});

// COPYRIGHT

const currentYear = new Date().getFullYear();

document.getElementById("copyright").innerHTML =
	"&copy; " + currentYear + ". David Ben-Emu";
