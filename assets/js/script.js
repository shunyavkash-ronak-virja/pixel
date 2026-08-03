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
if (typeof Splide !== "undefined" && document.querySelector(".logo-showcase-slider.splide")) {
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

// ================================
// Clients Site Showcase
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".clients-site-showcase.splide")) {
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
}

// ================================
// Process Flow JS
// ================================
if (
  window.matchMedia("(min-width:768px)").matches &&
  document.querySelector(".process-flow-item")
) {
  const items = document.querySelectorAll(".process-flow-item");

  let currentIndex = 0;
  let timer;

  function activateItem(index) {
    items.forEach((item) => {
      item.classList.remove("active");

      const effect = item.querySelector(".process-flow-time-line-effect");

      if (effect) {
        effect.style.animation = "none";
        effect.offsetHeight;
        effect.style.animation = "";
      }
    });

    if (!items[index]) return;

    items[index].classList.add("active");

    clearTimeout(timer);

    timer = setTimeout(() => {
      currentIndex = (index + 1) % items.length;
      activateItem(currentIndex);
    }, 6000);
  }

  document.querySelectorAll(".process-flow-heade").forEach((header, index) => {
    header.addEventListener("click", () => {
      currentIndex = index;
      activateItem(currentIndex);
    });
  });

  activateItem(0);
}

// ================================
// Partners Showcase JS
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".blog-card-slider")) {
  new Splide(".partners-showcase-slider", {
    type: "loop",
    gap: "30px",
    arrows: false,
    perPage: 5,
    pagination: false,
    autoScroll: { speed: 0.7 },
    breakpoints: {
      991: {
        perPage: 4,
      },
    },
  }).mount(window.splide.Extensions);
}

// ================================
// Highlights Slider JS
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".highlight-slider")) {
  document.addEventListener("DOMContentLoaded", function () {
    var thumbnails = new Splide(".highlight-thumbnail-slider", {
      drag: false,
      arrows: false,
      pagination: false,
      perPage: 1,
    });

    var main = new Splide(".highlight-slider", {
      type: "fade",
      pagination: false,
      perPage: 1,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  });
}

// ================================
// Client Testimonials JS
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".client-testimonials-slider")) {
  document.addEventListener("DOMContentLoaded", function () {
    var thumbnails = new Splide(".client-testimonials-thumbnails-slider", {
      drag: false,
      arrows: false,
      pagination: false,
      perPage: 1,
    });

    var main = new Splide(".client-testimonials-slider", {
      type: "fade",
      pagination: false,
      perPage: 1,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  });
}

// Fancybox js -----
if (typeof Fancybox !== "undefined") {
  Fancybox.bind("[data-fancybox]", {});
}

// ================================
// FAQ JS
// ================================
document.querySelectorAll(".faq-question-block").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    document.querySelectorAll(".faq-content").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
    faqItem.classList.toggle("active");
  });
});

// ================================
// Blog Card JS
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".blog-card-slider")) {
  var splide = new Splide(".blog-card-slider.splide", {
    perPage: 3,
    gap: "20px",
    pagination: false,
    breakpoints: {
      991: {
        perPage: 2,
        gap: "18px",
      },
    },
  });
  splide.mount();
}

// ================================
// CTA Canvas
// ================================
const canvas = document.querySelector(".cta-background-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const CELL_WIDTH = 64;
  const CELL_HEIGHT = 48;
  const GRID_BORDER = "rgba(255,255,255,0.04)";
  const opacityLevels = [1, 0.6, 0.45, 0.3, 0.2, 0.1];
  let cells = [];
  let cols = 0;
  let rows = 0;

  function resizeCanvas() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    cols = Math.ceil(canvas.width / CELL_WIDTH);
    rows = Math.ceil(canvas.height / CELL_HEIGHT);
    cells = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        cells.push({
          x: x * CELL_WIDTH,
          y: y * CELL_HEIGHT,
          opacity: 0,
          target: 0,
          speed: 0.08,
        });
      }
    }
  }
  resizeCanvas();
  new ResizeObserver(resizeCanvas).observe(canvas.parentElement);

  /*--------------------------
  Activate Random Cell
  --------------------------*/
  function activateRandomCell() {
    const cell = cells[Math.floor(Math.random() * cells.length)];
    cell.target = opacityLevels[Math.floor(Math.random() * opacityLevels.length)];
  }

  /*--------------------------
  Create Animation Streams
  --------------------------*/
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      activateRandomCell();
      setInterval(
        () => {
          activateRandomCell();
        },
        350 + Math.random() * 300,
      );
    }, i * 220);
  }

  /*--------------------------
  Draw Glow
  --------------------------*/
  function drawGlow(cell) {
    const a = cell.opacity;
    if (a < 0.01) return;
    const x = cell.x;
    const y = cell.y;
    const w = CELL_WIDTH;
    const h = CELL_HEIGHT;

    // =====================================================
    // Layer 1 : Large Soft Red Glow
    // =====================================================
    ctx.save();
    ctx.shadowColor = `rgba(255,51,55,${0.45 * a})`;
    ctx.shadowBlur = 28;
    ctx.fillStyle = `rgba(255,51,55,${0.08 * a})`;
    ctx.fillRect(x + 6, y + 6, w - 12, h - 12);
    ctx.restore();

    // =====================================================
    // Layer 2 : White Bloom
    // =====================================================
    ctx.save();
    ctx.shadowColor = `rgba(255,255,255,${0.9 * a})`;
    ctx.shadowBlur = 10;
    ctx.fillStyle = `rgba(255,51,55,${0.1 * a})`;
    ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
    ctx.restore();

    // =====================================================
    // Layer 3 : Main Background
    // =====================================================
    ctx.save();
    ctx.fillStyle = `rgba(255,51,55,${0.12 * a})`;
    ctx.fillRect(x + 1, y + 1, w - 2, h - 2);

    // =====================================================
    // Top Glass Highlight
    // =====================================================
    const topGradient = ctx.createLinearGradient(x, y, x, y + h * 0.55);
    topGradient.addColorStop(0, `rgba(255,255,255,${0.28 * a})`);
    topGradient.addColorStop(0.45, `rgba(255,255,255,${0.08 * a})`);
    topGradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = topGradient;
    ctx.fillRect(x + 1, y + 1, w - 2, h * 0.55);

    // =====================================================
    // Bottom Shadow
    // =====================================================
    const bottomGradient = ctx.createLinearGradient(x, y, x, y + h);
    bottomGradient.addColorStop(0, "rgba(255,51,55,0)");
    bottomGradient.addColorStop(1, `rgba(255,51,55,${0.18 * a})`);
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(x + 1, y + 1, w - 2, h - 2);

    // =====================================================
    // Inner Highlight
    // =====================================================
    ctx.beginPath();
    ctx.moveTo(x + 3, y + 2);
    ctx.lineTo(x + w - 3, y + 2);
    ctx.strokeStyle = `rgba(255,255,255,${0.35 * a})`;
    ctx.lineWidth = 1;
    ctx.stroke();

    // =====================================================
    // Red Border
    // =====================================================
    ctx.strokeStyle = `rgba(255,51,55,${0.12 * a})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    ctx.restore();
  }

  /*--------------------------
  Animation Loop
  --------------------------*/
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cells.forEach((cell) => {
      // Keep Grid Border Always Visible
      ctx.strokeStyle = GRID_BORDER;
      ctx.lineWidth = 1;
      ctx.strokeRect(cell.x, cell.y, CELL_WIDTH, CELL_HEIGHT);
      // Animate
      cell.opacity += (cell.target - cell.opacity) * cell.speed;
      cell.target *= 0.988;
      drawGlow(cell);
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ================================
// Articles Filter JS
// ================================
const tabs = document.querySelectorAll(".articles-filter-tab");
const cards = document.querySelectorAll(".articles-card");
const searchInput = document.getElementById("blogSearch");
const loadMoreBtn = document.querySelector(".articles-blog-load-btn");

if (tabs.length && cards.length && searchInput && loadMoreBtn) {
  const INITIAL_COUNT = 9;
  const LOAD_COUNT = 9;

  let activeCategory = "all";
  let visibleCount = INITIAL_COUNT;

  function filterBlogs() {
    const searchValue = searchInput.value.trim().toLowerCase();
    let matchedCards = [];

    cards.forEach((card) => {
      const category = card
        .querySelector(".articles-card-caption")
        .textContent.trim()
        .toLowerCase();
      const categoryMatch = activeCategory === "all" || category === activeCategory;
      const searchMatch = searchValue === "" || category.includes(searchValue);

      if (categoryMatch && searchMatch) {
        matchedCards.push(card);
      }
      card.classList.add("hide");
    });

    matchedCards.forEach((card, index) => {
      if (index < visibleCount) {
        card.classList.remove("hide");
      }
    });

    if (matchedCards.length > visibleCount) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
    }
  }

  // Tab Click
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.textContent.trim().toLowerCase();
      if (activeCategory === "all posts") {
        activeCategory = "all";
      }
      visibleCount = INITIAL_COUNT;
      filterBlogs();
    });
  });

  // Search
  searchInput.addEventListener("input", () => {
    visibleCount = INITIAL_COUNT;
    filterBlogs();
  });

  // Load More
  loadMoreBtn.addEventListener("click", () => {
    visibleCount += LOAD_COUNT;
    filterBlogs();
  });

  // Initial Load
  filterBlogs();
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".blog-details-category-item");
  const links = document.querySelectorAll(".blog-details-side-link");

  const offset = 100; // same as scroll-margin-top

  function updateActiveLink() {
    // Remove all active classes first
    links.forEach((link) => link.classList.remove("active"));

    let activeIndex = -1;

    sections.forEach((section, index) => {
      const top = section.getBoundingClientRect().top;

      // Section has reached the 100px line
      if (top <= offset) {
        activeIndex = index;
      }
    });

    if (activeIndex >= 0) {
      links[activeIndex].classList.add("active");
    }
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("resize", updateActiveLink);
});

// ================================
// Case Study Hero Slider
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".case-study-hero-slider.splide")) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".case-study-hero-slider.splide", {
      direction: "ttb",
      releaseWheel: true,
      autoplay: true,
      type: "loop",
      autoHeight: true,
      heightRatio: 1.23,
      focus: "center",
      gap: "28px",
      arrows: false,
      pagination: false,
      breakpoints: {
        991: {
          gap: "20px",
          heightRatio: 1.56,
        },
        767: {
          gap: "12px",
          direction: "ltr",
          heightRatio: 0,
          focus: "left",
        },
      },
    });
    splide.mount();
  });
}

if (typeof Splide !== "undefined" && document.querySelector(".featured-slider.splide")) {
  document.addEventListener("DOMContentLoaded", function () {
    var main = new Splide(".featured-slider.splide", {
      type: "fade",
      perPage: 1,
      pagination: false,
    });

    var thumbnails = new Splide(".featured-thumbnail-slider.splide", {
      perPage: 1,
      gap: 10,
      arrows: false,
      pagination: false,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  });
}

if (typeof Splide !== "undefined" && document.querySelector(".casestudy-testimonial.splide")) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".casestudy-testimonial.splide", {
      type: "fade",
      autoplay: true,
      rewind: true,
      pagination: false,
      interval: 5000,
      speed: 800,
      easing: "ease-in-out",
    });
    splide.mount();
  });
}
