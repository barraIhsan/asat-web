const hamburger = document.querySelector("#hamburger");
const hamburgerList = document.querySelector("#hamburgerList");
const hamburgerOverlay = document.querySelector("#hamburgerOverlay");
const hamburgerBar = document.querySelectorAll("#hamburger div");
console.log(hamburger);
hamburger.addEventListener("click", () => {
	hamburgerBar[0].classList.toggle("rotate-45");
	hamburgerBar[0].classList.toggle("translate-y-full");
	hamburgerBar[1].classList.toggle("hidden");
	hamburgerBar[2].classList.toggle("-rotate-45");
	hamburgerBar[2].classList.toggle("-translate-y-[150%]");
	hamburgerList.classList.toggle("hidden");
	hamburgerList.classList.toggle("translate-y-full");
	hamburgerOverlay.classList.toggle("opacity-0");
});
