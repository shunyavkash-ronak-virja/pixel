// ================================
// Header JS
// ================================
// Header Toggel JS ----------
const header = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle-btn");
const headerLinkStack = document.querySelector(".header-link-stack");
const headerDropdownLink = document.querySelector(".header-dropdown-link-wraper");
const headerDropdownBlock = document.querySelector(".header-dropdown-block");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  headerLinkStack.classList.toggle("active");
  header.classList.toggle("active");
});

headerDropdownLink.addEventListener("click", () => {
  headerDropdownLink.classList.toggle("active");
  headerDropdownBlock.classList.toggle("active");
});

// Body Scroll JS ----------
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  addEventListener("scroll", () => {
    if (window.pageYOffset > 4) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
});

// ================================
// Footer JS
// ================================
// Footer Toggel JS ----------
const footerTitles = document.querySelectorAll(".footer-link-title");
footerTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const footerBlock = title.nextElementSibling;
    footerBlock.classList.toggle("active");
    title.classList.toggle("active");
  });
});

// ================================
// Logo Showcase JS
// ================================
if (document.querySelector(".logo-showcase-slider.splide")) {
  new Splide(".logo-showcase-slider", {
    type: "loop",
    gap: "30px",
    arrows: false,
    perPage: 6,
    pagination: false,
    autoScroll: { speed: 0.7 },
    breakpoints: {
      991: {
        perPage: 5,
      },
      767: {
        perPage: 4,
      },
    },
  }).mount(window.splide.Extensions);
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".clients-site-showcase.splide", {
    autoplay: true,
    rewind: true,
    gap: "28px",
    width: "auto",
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        gap: "24px",
      },
    },
  });
  splide.mount();
});

// ================================
// Process Flow JS
// ================================
const items = document.querySelectorAll(".process-flow-item");
let currentIndex = 0;
let timer;

function activateItem(index) {
  items.forEach((item) => {
    item.classList.remove("active");

    const effect = item.querySelector(".process-flow-time-line-effect");
    effect.style.animation = "none";
    effect.offsetHeight;
    effect.style.animation = "";
  });

  items[index].classList.add("active");

  clearTimeout(timer);
  timer = setTimeout(() => {
    currentIndex = (index + 1) % items.length;
    activateItem(currentIndex);
  }, 10000);
}

document.querySelectorAll(".process-flow-heade").forEach((header, index) => {
  header.addEventListener("click", () => {
    currentIndex = index;
    activateItem(currentIndex);
  });
});

activateItem(0);
