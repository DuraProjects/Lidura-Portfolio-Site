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