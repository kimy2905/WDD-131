import { validateForm, handleFormSubmission } from './formValidation.js';

const form = document.querySelector('form');
const feedbackSection = document.getElementById('feedback');

if(form){
  console.log(form);
  handleFormSubmission(form, feedbackSection);
}


// ===== Menu button functionality for navigation =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ===== ScrollReveal animations for various sections =====
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".project__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".experience__list li", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".footer__container h2", { ...scrollRevealOption });
ScrollReveal().reveal(".footer__container p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".footer__container .mail__to", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".footer__socials", { ...scrollRevealOption, delay: 1500 });

// ===== Portfolio filtering functionality =====
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'block'; // Show all items
      } else if (item.classList.contains(filter)) {
        item.style.display = 'block'; // Show filtered items
      } else {
        item.style.display = 'none'; // Hide non-matching items
      }
    });
  });
});

// ===== Form input focus and blur functionality =====
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  const parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  const parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



