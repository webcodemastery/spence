const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
  header.classList.toggle("active");
});

window.addEventListener("resize", function () {
  const windowSize = window.innerWidth;
  if (windowSize > 414) {
    header.classList.remove("active");
  }
});
