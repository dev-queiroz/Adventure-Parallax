document.addEventListener("DOMContentLoaded", () => {
    // Parallax - imagens e título
    const parallaxContainer = document.querySelector(".parallax__container");
    const parallaxImage = parallaxContainer.querySelector("img");
    const parallaxTitle = parallaxContainer.querySelector("h1");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        // Movimento suave e desacelerado para imagem e título
        parallaxImage.style.transform = `translateY(${scrollTop * 0.3}px) scale(1.05)`;
        parallaxTitle.style.transform = `translate(-50%, calc(-50% + ${scrollTop * 0.5}px)) scale(${1 + scrollTop * 0.0007})`;
    });

    // Fade-in + slide-up para galeria
    const galleryItems = document.querySelectorAll(".image__card");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        galleryItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < windowHeight * 0.85) {
                item.classList.add("visible");
            }
        });
    };
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    // Scroll suave para navbar links
    const navLinks = document.querySelectorAll(".navbar nav a[href^='#']");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (!target) return;
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth",
            });
        });
    });

    // Seções animadas no scroll
    const animatedSections = document.querySelectorAll(
        ".mission, .tours, .testimonials, .explore"
    );
    const animateSections = () => {
        const windowHeight = window.innerHeight;
        animatedSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight * 0.9) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            }
        });
    };
    animatedSections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(40px)";
    });
    animateSections();
    window.addEventListener("scroll", animateSections);

    // Botões Explore - exemplo simples de toggle
    const exploreBtns = document.querySelectorAll(".explore__btns .btn");
    exploreBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            exploreBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});
