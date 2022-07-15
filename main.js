document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
const select = (el, all = false) => {
	el = el.trim();
	if (all) {
		return [...document.querySelectorAll(el)];
	} else {
		return document.querySelector(el);
	}
};

const typed = select(".typed");
if (typed) {
	let typed_strings = typed.getAttribute("data-typed-items");
	typed_strings = typed_strings.split(",");
	new Typed(".typed", {
		strings: typed_strings,
		loop: true,
		typeSpeed: 100,
		backSpeed: 50,
		backDelay: 2000,
	});
}