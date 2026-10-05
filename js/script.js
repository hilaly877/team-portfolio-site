// MEMBER 3: all JavaScript interactivity
/* =====================================================
   THEME TOGGLE
===================================================== */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});


/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* Check empty fields */

    if (name === "" ||
        email === "" ||
        message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.className =
            "error-message";

        return;
    }


    /* Check email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.className =
            "error-message";

        return;
    }


    /* Successful submission */

    formMessage.textContent =
        "Thanks! Your message was sent.";

    formMessage.className =
        "success-message";


    /* Clear form */

    contactForm.reset();

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* =====================================================
   UPDATE ACTIVE LINK WHILE SCROLLING
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 100;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});
