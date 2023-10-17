document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }

    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        slides[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 500); // Change image every 0.5 seconds
});
