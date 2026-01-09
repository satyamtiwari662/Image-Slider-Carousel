let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    // Reset index if it goes out of bounds
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    // Remove 'active' classes
    slides.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    // Add 'active' classes to current slide
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active-dot");
}

function changeSlide(step) {
    showSlide(currentIndex + step);
    resetTimer(); // Reset auto-slide when user clicks
}

function currentSlide(index) {
    showSlide(index);
    resetTimer();
}

// Auto-slide logic: every 3 seconds
let slideTimer = setInterval(() => changeSlide(1), 3000);

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => changeSlide(1), 3000);
}