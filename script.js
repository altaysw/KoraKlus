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

// =======================
// Highlight Slide Image
// =======================

const images = [
  "ngombi/ngombi_1.jpg",
  "ngombi/ngombi_2.jpg",
  "ngombi/ngombi_3.jpg",
  "ngombi/ngombi_4.jpg",
  "ngombi/ngombi_5.jpg",
  "ngombi/ngombi_6.jpg",
  "ngombi/ngombi_7.jpg",
];

let index = 0;

function showSlide(i) {
  const slide = document.getElementById("slide");
  slide.src = images[i];
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
}
