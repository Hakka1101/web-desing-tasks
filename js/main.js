const gnavToggle = document.querySelector(".gnav__toggle");
const gnavList = document.querySelector(".gnav__list");

if (gnavToggle && gnavList) {
	gnavToggle.addEventListener("click", () => {
		const isOpen = gnavToggle.getAttribute("aria-expanded") === "true";
		gnavToggle.setAttribute("aria-expanded", String(!isOpen));
		gnavList.classList.toggle("is-open");
	});

	gnavList.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			gnavToggle.setAttribute("aria-expanded", "false");
			gnavList.classList.remove("is-open");
		});
	});
}
