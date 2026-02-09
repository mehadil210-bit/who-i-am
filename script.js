// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Back to top button
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
