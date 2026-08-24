// ================================
// Header JS
// ================================
// Header Toggel JS ----------
const header = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle-btn");
const headerLinkStack = document.querySelector(".header-link-stack");
const headerDropdownLink = document.querySelector(".header-dropdown-link-wraper");
const headerDropdownBlock = document.querySelector(".header-dropdown-block");
const bodyHidden = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  headerLinkStack.classList.toggle("active");
  header.classList.toggle("active");
  bodyHidden.classList.toggle("body-hidden");
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
        767: {
          gap: "20px",
        },
        575: {
          gap: "12px",
        },
      },
    });
    splide.mount();
  });
}

// ================================
// Process Flow JS
// ================================
const processFlow = document.querySelector(".process-flow-item");
if (processFlow) {
  const items = document.querySelectorAll(".process-flow-item");
  const contentItems = document.querySelectorAll(".process-flow-tab-content");
  const desktopQuery = window.matchMedia("(min-width: 768px)");
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
    contentItems.forEach((contentItem) => {
      contentItem.classList.remove("active");
    });

    if (contentItems[index]) {
      contentItems[index].classList.add("active");
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      currentIndex = (index + 1) % items.length;
      activateItem(currentIndex);
    }, 6000);
  }

  function startDesktopTabs() {
    if (!desktopQuery.matches) return;
    activateItem(currentIndex);
  }

  function stopDesktopTabs() {
    clearTimeout(timer);
  }

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (!desktopQuery.matches) return;
      currentIndex = index;
      activateItem(currentIndex);
    });

    item.addEventListener("keydown", (event) => {
      if (!desktopQuery.matches) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      currentIndex = index;
      activateItem(currentIndex);
    });
  });

  if (desktopQuery.matches) {
    startDesktopTabs();
  }

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) {
      startDesktopTabs();
    } else {
      stopDesktopTabs();
    }
  });
}

// ================================
// Partners Showcase JS
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".partners-showcase-slider")) {
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
      height: "100%",
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

// ================================
// Fancybox Js
// ================================
if (typeof Fancybox !== "undefined") {
  Fancybox.bind("[data-fancybox]", {});
}

// ================================
// Animated CTA Box Canvas
// Exact readable equivalent of the production .box-canvas implementation.
// ================================
const BOX_STYLES = [
  {
    fill: "#FF333705",
    border: "#FF33370A",
    largeInset: "#FF333729",
    topInset: "#FF333729",
    edgeInset: "#FF33371F",
  },
  {
    fill: "#FF33370A",
    border: "#FF33371F",
    largeInset: "#FF333729",
    topInset: "#FF333729",
    edgeInset: "#FF33371F",
  },
  {
    fill: "#FF33371F",
    border: "#FF33373D",
    largeInset: "#FF333729",
    topInset: "#FF333729",
    edgeInset: "#FF33371F",
  },
];

const OUTER_BOX_SHADOWS = [
  { offsetY: 0.5, blur: 0.5, color: "#07011308" },
  { offsetY: 1, blur: 1, color: "#07011308" },
  { offsetY: 2, blur: 2, color: "#07011308" },
  { offsetY: 3, blur: 3, color: "#07011308" },
  { offsetY: 5, blur: 5, color: "#07011308" },
  { offsetY: 8, blur: 8, color: "#07011308" },
];

document.querySelectorAll(".box-canvas-wrapper").forEach((wrapper) => {
  const canvas = wrapper.querySelector(".box-canvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const boxWidth = parseInt(wrapper.dataset.boxWidth, 10) || 40;
  const boxHeight = parseInt(wrapper.dataset.boxHeight, 10) || 40;
  const boxCount = 8;
  const boxLifetime = 7000;
  const fadeOutDelay = 300;
  const minimumCellGap = 1;

  let columns = 0;
  let rows = 0;
  let boxes = [];
  let previousFrameTime = 0;

  function findBoxPosition(ignoredBox = null) {
    const availableCells = [];
    const fallbackCells = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const overlapsExistingBox = boxes.some(
          (box) => box !== ignoredBox && box.x === x && box.y === y,
        );

        if (!overlapsExistingBox) {
          fallbackCells.push({ x, y });
        }

        const isTooCloseToAnotherBox = boxes.some(
          (box) =>
            box !== ignoredBox &&
            Math.abs(box.x - x) <= minimumCellGap &&
            Math.abs(box.y - y) <= minimumCellGap,
        );

        if (!isTooCloseToAnotherBox) {
          availableCells.push({ x, y });
        }
      }
    }

    const candidates = availableCells.length ? availableCells : fallbackCells;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function createBoxes() {
    boxes = [];

    for (let index = 0; index < boxCount; index++) {
      const { x, y } = findBoxPosition();
      boxes.push({
        x,
        y,
        opacity: 0,
        targetOpacity: 0.8 + Math.random() * 0.2,
        style: BOX_STYLES[index % BOX_STYLES.length],
        timer: Math.random() * boxLifetime,
        duration: boxLifetime,
        isSwitching: false,
        switchProgress: 0,
      });
    }
  }

  function resizeCanvas() {
    const { width, height } = wrapper.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    columns = Math.floor(width / boxWidth);
    rows = Math.floor(height / boxHeight);
    createBoxes();
  }

  function drawGrid() {
    context.strokeStyle = "rgba(255,255,255,0.05)";
    context.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += boxWidth) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.stroke();
    }

    for (let y = 0; y <= canvas.height; y += boxHeight) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
    }
  }

  function hexToRgba(hex, opacityMultiplier = 1) {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    const alpha = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1;
    return `rgba(${red}, ${green}, ${blue}, ${alpha * opacityMultiplier})`;
  }

  function drawOuterShadows(x, y) {
    OUTER_BOX_SHADOWS.forEach((shadow) => {
      context.save();
      context.fillStyle = "rgba(7,1,19,0.03)";
      context.shadowColor = hexToRgba(shadow.color);
      context.shadowBlur = shadow.blur;
      context.shadowOffsetY = shadow.offsetY;
      context.fillRect(x, y, boxWidth, boxHeight);
      context.restore();
    });
  }

  function drawInsetGlow(x, y, style, boxOpacity) {
    context.save();
    context.beginPath();
    context.rect(x, y, boxWidth, boxHeight);
    context.clip();

    if (style.largeInset) {
      const largeGlow = context.createLinearGradient(x, y, x, y + boxHeight);
      largeGlow.addColorStop(0, hexToRgba(style.largeInset, boxOpacity));
      largeGlow.addColorStop(0.6, hexToRgba(style.largeInset, boxOpacity * 0.25));
      largeGlow.addColorStop(1, "rgba(255,51,55,0)");
      context.fillStyle = largeGlow;
      context.fillRect(x, y, boxWidth, boxHeight);
    }

    context.fillStyle = hexToRgba(style.topInset, boxOpacity);
    context.fillRect(x, y, boxWidth, 0.5);
    const edgeGlow = context.createLinearGradient(x, y, x, y + 3);
    edgeGlow.addColorStop(0, hexToRgba(style.edgeInset, boxOpacity));
    edgeGlow.addColorStop(1, "rgba(255,51,55,0)");
    context.fillStyle = edgeGlow;
    context.fillRect(x, y + 0.5, boxWidth, 3);
    context.restore();
  }

  function drawBoxes() {
    boxes.forEach((box) => {
      const x = box.x * boxWidth;
      const y = box.y * boxHeight;

      drawOuterShadows(x, y);
      context.fillStyle = hexToRgba(box.style.fill, box.opacity);
      context.fillRect(x, y, boxWidth, boxHeight);
      drawInsetGlow(x, y, box.style, box.opacity);
      context.strokeStyle = hexToRgba(box.style.border, box.opacity);
      context.strokeRect(x, y, boxWidth, boxHeight);
    });
  }

  function updateBoxes(elapsedTime) {
    boxes.forEach((box) => {
      box.opacity += (box.targetOpacity - box.opacity) * 0.08;
      box.timer += elapsedTime;

      if (box.timer >= box.duration && !box.isSwitching) {
        box.targetOpacity = 0;
        box.isSwitching = true;
        box.switchProgress = 0;
        box.timer = 0;
      }

      if (box.isSwitching) {
        box.switchProgress += elapsedTime;
      }

      if (box.isSwitching && box.switchProgress > fadeOutDelay) {
        const { x, y } = findBoxPosition(box);
        box.x = x;
        box.y = y;
        box.opacity = 0;
        box.targetOpacity = 0.8 + Math.random() * 0.2;
        box.isSwitching = false;
      }
    });
  }

  function animate(frameTime) {
    const elapsedTime = frameTime - previousFrameTime;
    previousFrameTime = frameTime;

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    updateBoxes(elapsedTime);
    drawBoxes();
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  animate(0);
  window.addEventListener("resize", resizeCanvas);
});

// ================================
// Process Hero Canvas (second animation variant)
// ================================
document.querySelectorAll(".process-hero-animation").forEach((section) => {
  const canvas = section.querySelector(".process-hero-canvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const cellSize = 36;
  const boxSize = 36;
  const boxInset = (cellSize - boxSize) / 2;
  const boxCount = 7;
  const boxLifetime = 7000;
  const fadeDuration = 300;
  const boxStyles = [
    { fill: "rgba(255,255,255,0.025)", border: "rgba(255,255,255,0.04)" },
    { fill: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.1)" },
    { fill: "rgba(255,255,255,0.12)", border: "rgba(255,255,255,0.18)" },
  ];
  let width = 0;
  let height = 0;
  let columns = 0;
  let rows = 0;
  let boxes = [];
  let previousFrameTime = 0;

  function getGridBounds() {
    return {
      leftColumn: Math.ceil(columns * 0.18),
      rightColumn: Math.floor(columns * 0.79) - 1,
      bottomRow: Math.floor(rows * 0.56) - 1,
    };
  }

  function isInGridArea(x, y) {
    const { leftColumn, rightColumn, bottomRow } = getGridBounds();
    return x >= leftColumn && x <= rightColumn && y >= 0 && y <= bottomRow;
  }

  function findPosition(ignoredBox = null) {
    const candidates = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (!isInGridArea(x, y)) continue;
        const tooClose = boxes.some(
          (box) => box !== ignoredBox && Math.abs(box.x - x) <= 1 && Math.abs(box.y - y) <= 1,
        );
        if (!tooClose) candidates.push({ x, y });
      }
    }

    return candidates[Math.floor(Math.random() * candidates.length)] || { x: 0, y: 0 };
  }

  function createBoxes() {
    boxes = [];
    for (let index = 0; index < boxCount; index++) {
      const position = findPosition();
      boxes.push({
        ...position,
        opacity: 0,
        targetOpacity: 0.78 + Math.random() * 0.22,
        timer: Math.random() * boxLifetime,
        switchTimer: 0,
        switching: false,
      });
    }
  }

  function drawGradientLine(x1, y1, x2, y2, opacity) {
    const gradient = context.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, "rgba(255,255,255,0)");
    gradient.addColorStop(0.18, `rgba(255,255,255,${opacity * 0.35})`);
    gradient.addColorStop(0.5, `rgba(255,255,255,${opacity})`);
    gradient.addColorStop(0.82, `rgba(255,255,255,${opacity * 0.35})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.strokeStyle = gradient;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  function drawPartialGrid() {
    context.lineWidth = 1;
    const { leftColumn, rightColumn, bottomRow } = getGridBounds();
    const left = leftColumn * cellSize;
    const right = (rightColumn + 1) * cellSize;
    const bottom = (bottomRow + 1) * cellSize;
    const centerX = (left + right) / 2;
    const centerY = bottom * 0.36;

    for (let x = left; x <= right; x += cellSize) {
      const horizontalDistance = Math.abs(x - centerX) / ((right - left) / 2);
      const opacity = 0.08 * Math.max(0, 1 - horizontalDistance ** 1.7);
      drawGradientLine(x, 0, x, bottom, opacity);
    }

    for (let y = 0; y <= bottom; y += cellSize) {
      const verticalDistance = Math.abs(y - centerY) / (bottom * 0.7);
      const opacity = 0.08 * Math.max(0, 1 - verticalDistance ** 1.5);
      drawGradientLine(left, y, right, y, opacity);
    }
  }

  function beamIntensity(x, y) {
    const horizontal = 1 - Math.min(Math.abs(x / width - 0.52) / 0.21, 1);
    const vertical = 1 - Math.min(Math.abs(y / height - 0.15) / 0.24, 1);
    return Math.max(0, horizontal * vertical);
  }

  function drawBoxes() {
    boxes.forEach((box) => {
      const x = box.x * cellSize + boxInset;
      const y = box.y * cellSize + boxInset;
      const intensity = beamIntensity(x + boxSize / 2, y + boxSize / 2);
      const style = boxStyles[intensity > 0.45 ? 2 : intensity > 0.12 ? 1 : 0];
      const opacity = box.opacity;
      context.fillStyle = style.fill.replace(
        /([\d.]+)\)$/,
        (_, alpha) => `${Number(alpha) * opacity})`,
      );
      context.fillRect(x, y, boxSize, boxSize);
      if (intensity > 0) {
        context.fillStyle = `rgba(255,71,74,${intensity * opacity * 0.16})`;
        context.fillRect(x, y, boxSize, boxSize);
      }
      context.strokeStyle = style.border.replace(
        /([\d.]+)\)$/,
        (_, alpha) => `${Number(alpha) * opacity})`,
      );
      context.lineWidth = 0.5;
      context.strokeRect(x, y, boxSize, boxSize);
    });
  }

  function updateBoxes(elapsedTime) {
    boxes.forEach((box) => {
      box.opacity += (box.targetOpacity - box.opacity) * 0.08;
      box.timer += elapsedTime;
      if (box.timer >= boxLifetime && !box.switching) {
        box.targetOpacity = 0;
        box.switching = true;
        box.switchTimer = 0;
      }
      if (box.switching) box.switchTimer += elapsedTime;
      if (box.switching && box.switchTimer > fadeDuration) {
        Object.assign(box, findPosition(box), {
          opacity: 0,
          targetOpacity: 0.78 + Math.random() * 0.22,
          timer: 0,
          switchTimer: 0,
          switching: false,
        });
      }
    });
  }

  function animate(frameTime) {
    const elapsedTime = frameTime - previousFrameTime;
    previousFrameTime = frameTime;
    context.clearRect(0, 0, width, height);
    drawPartialGrid();
    updateBoxes(elapsedTime);
    drawBoxes();
    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    const rect = section.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    columns = Math.floor(width / cellSize);
    rows = Math.floor(height / cellSize);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    createBoxes();
  }

  resizeCanvas();
  animate(0);
  new ResizeObserver(resizeCanvas).observe(section);
});

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

  searchInput.addEventListener("input", () => {
    visibleCount = INITIAL_COUNT;
    filterBlogs();
  });

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += LOAD_COUNT;
    filterBlogs();
  });

  filterBlogs();
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".blog-details-category-item");
  const links = document.querySelectorAll(".blog-details-side-link");
  const offset = 100;

  function updateActiveLink() {
    links.forEach((link) => link.classList.remove("active"));
    let activeIndex = -1;

    sections.forEach((section, index) => {
      const top = section.getBoundingClientRect().top;
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
      arrows: false,
      interval: 5000,
      speed: 800,
      easing: "ease-in-out",
    });
    splide.mount();
  });
}

// ================================
// Clients Site Showcase
// ================================
if (typeof Splide !== "undefined" && document.querySelector(".customer-review-slider.splide")) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".customer-review-slider.splide", {
      autoplay: true,
      type: "fade",
      rewind: true,
      gap: "28px",
      pagination: false,
      interval: 5000,
      speed: 800,
      easing: "ease-in-out",
    });
    splide.mount();
  });
}

// ================================
// Select Js
// ================================
if (typeof Splide !== "undefined" && document.querySelector("select")) {
  $(document).ready(function () {
    $("select").niceSelect();
  });
}

// ================================
// Discovery Call Modal JS
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector('[data-modal="discovery-call"]');
  if (!modal) return;
  const openButtons = document.querySelectorAll('[data-modal-open="discovery-call"]');
  const closeButton = modal.querySelector(".discovery-call-modal-close-btn");
  const desktopMediaQuery = window.matchMedia("(min-width: 992px)");

  const openModal = () => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      modal.querySelector("#discovery-call-name")?.focus();
    }, 100);
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });

  closeButton?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!desktopMediaQuery.matches) return;
    const isTyping = event.target.matches("input, textarea, select");

    if (event.key.toLowerCase() === "b" && !isTyping && !modal.classList.contains("open")) {
      openModal();
    }

    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
});

// ================================
// Latest News - Show More JS
// ================================
document.querySelectorAll(".articles-load-more-section").forEach((section) => {
  const cards = section.querySelectorAll(".articles-card");
  const loadMoreBtn = section.querySelector(".project-articles-blog-load-btn");

  if (!cards.length || !loadMoreBtn) return;

  const INITIAL_COUNT = 3;
  const LOAD_COUNT = 3;

  let visibleCount = INITIAL_COUNT;

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.toggle("hide", index >= visibleCount);
    });
    loadMoreBtn.style.display = visibleCount >= cards.length ? "none" : "";
  }

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += LOAD_COUNT;
    updateCards();
  });
  updateCards();
});
