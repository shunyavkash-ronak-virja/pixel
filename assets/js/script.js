// Header Toggel JS ----------
const header = document.querySelector(".header");
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


// Footer Toggel JS ----------
const footerTitles = document.querySelectorAll(".footer-link-title");
footerTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const footerBlock = title.nextElementSibling;
    footerBlock.classList.toggle("active");
    title.classList.toggle("active");
  });
});
