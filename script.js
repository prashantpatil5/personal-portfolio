

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});





const navItems = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navbarCollapse).toggle();

        }

    });

});





const footer = document.querySelector("footer p:last-child");

const currentYear = new Date().getFullYear();

footer.innerHTML = `© ${currentYear} All Rights Reserved.`;





window.onbeforeunload = function () {

    window.scrollTo(0, 0);

};