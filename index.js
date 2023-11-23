let header = document.querySelector("header");
let bar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	header.classList.toggle("active", window.scrollY > 0);
});

bar.addEventListener("click", () => {
	navbar.classList.toggle("active");
});

window.onscroll = () => {
	navbar.classList.remove("active");
};
