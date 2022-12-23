let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    });
});

var hiddenElements = document.querySelectorAll(".thank-you");
hiddenElements.forEach((el) => observer.observe(el)); 


const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu"); 

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}) 

document.querySelectorAll(".nav-link").forEach(n => n . addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))