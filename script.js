// =======================
// HEADER SHOW/HIDE ON SCROLL
// =======================
let lastScroll = 0;
const header = document.querySelector("header");
const scrollTolerance = 10; // Ignore tiny scrolls

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (Math.abs(currentScroll - lastScroll) < scrollTolerance) return;

  if (currentScroll > lastScroll) {
    header.classList.add("hide");
    header.classList.remove("active-bg");
  } else {
    header.classList.remove("hide");
    header.classList.add("active-bg");
  }

  lastScroll = Math.max(currentScroll, 0);

  if (currentScroll === 0) {
    header.classList.remove("active-bg");
  }
});
