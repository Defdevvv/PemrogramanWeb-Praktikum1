const textElement = document.querySelector(".typing");
const words = ["C Programmer.", "Frontend Developer.", "Backend Beginner."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(type, speed);
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 }); 

document.addEventListener("DOMContentLoaded", () => {
    type();
    
    
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
});