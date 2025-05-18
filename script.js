let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');
let header = document.querySelector('.header');
let mainContent = document.querySelector('#main-content');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    header.classList.toggle('menu-open');

    // blur
    if (navLinks.classList.contains('active')) {
        mainContent.classList.add('blurred');
    } else {
        mainContent.classList.remove('blurred');
    }
};

// changing text
const roles = [
    "Software Engineer",
    "Student",
    "Frontend Developer",
    "Fast Learner",
    "Backend Enthusiast",
    "Tech Explorer"
];

let currentIndex = 0;
const textElement = document.getElementById("changing-text");

setInterval(() => {
    textElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length;
        textElement.textContent = roles[currentIndex];
        textElement.style.opacity = 1;
    }, 500);
}, 3000);

const header1 = document.querySelector(".header");

// shrink
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.1) { // viac ako 1vh
        header.classList.add("shrink");
    } else {
        header1.classList.remove("shrink");
    }
});


