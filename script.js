/* ==========================================================
   EV.GT EXPERIENCE
   Version 5.0 — Grand Touring Edition
========================================================== */

const glow = document.querySelector(".glow");
const cards = document.querySelectorAll(".card");
const chapters = document.querySelectorAll(".chapter");
const specRows = document.querySelectorAll(".spec-row");
const reveal = document.querySelector(".reveal");
const navbar = document.querySelector(".navbar");
const progressFill = document.getElementById("progressFill");
const subtitle = document.getElementById("subtitle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");


/* ==========================================================
   Mobile Menu Toggle
========================================================== */

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");

});

mobileMenu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("open");
        mobileMenu.classList.remove("open");

    });

});

/* ==========================================================
   Mouse Parallax
========================================================== */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glow.style.transform =
        `translate(${x * 40 - 20}px, ${y * 40 - 20}px) scale(1.15)`;

});


/* ==========================================================
   Navbar + Scroll Progress Bar
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(5,5,5,.82)";
        navbar.style.borderColor = "rgba(255,255,255,.12)";
        navbar.style.backdropFilter = "blur(22px)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.borderColor = "rgba(255,255,255,.08)";
        navbar.style.backdropFilter = "blur(18px)";

    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressFill.style.width = progress + "%";

});


/* ==========================================================
   Scroll Reveal (chapters, reveal section, spec rows)
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition =
                "all .9s cubic-bezier(.22,.61,.36,1)";

            entry.target.classList.add("in-view");

        }

    });

}, {

    threshold: 0.25

});


chapters.forEach(chapter => {

    chapter.style.opacity = "0";
    chapter.style.transform = "translateY(70px)";

    observer.observe(chapter);

});


observer.observe(reveal);

specRows.forEach(row => observer.observe(row));


/* ==========================================================
   Spec Counter Animation
========================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            let current = 0;

            const step = () => {

                current += 1;
                el.textContent = current;

                if (current < target) {
                    requestAnimationFrame(step);
                }

            };

            step();

            counterObserver.unobserve(el);

        }

    });

}, { threshold: 0.6 });

counters.forEach(c => counterObserver.observe(c));


/* ==========================================================
   Cards — 3D Tilt
========================================================== */

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 18;
        const rotateY = (x - rect.width / 2) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-12px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* ==========================================================
   Reveal Glow
========================================================== */

window.addEventListener("scroll", () => {

    const revealTop = reveal.offsetTop;
    const scroll = window.scrollY + window.innerHeight;

    if (scroll > revealTop + 150) {

        reveal.style.transition = "all 1.5s ease";
        reveal.style.filter = "drop-shadow(0 0 35px rgba(79,211,255,.35))";

    }

});


/* ==========================================================
   Smooth Hero Breathing
========================================================== */

let t = 0;

function animateGlow() {

    t += 0.01;

    const scale = 1 + Math.sin(t) * 0.04;

    glow.style.filter =
        `blur(35px) brightness(${1 + Math.sin(t) * 0.15})`;

    glow.style.scale = scale;

    requestAnimationFrame(animateGlow);

}

animateGlow();


/* ==========================================================
   Hero Subtitle Crossfade (robust single-element version)
========================================================== */

const subtitleTexts = [
    "Every letter tells a story.",
    "Every story has a destination."
];

let subtitleShowingSecond = false;

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.18;
    const shouldShowSecond = window.scrollY > trigger;

    if (shouldShowSecond !== subtitleShowingSecond) {

        subtitleShowingSecond = shouldShowSecond;

        subtitle.classList.add("swap");

        setTimeout(() => {

            subtitle.textContent =
                subtitleTexts[subtitleShowingSecond ? 1 : 0];

            subtitle.classList.remove("swap");

        }, 260);

    }

});


/* ==========================================================
   Console
========================================================== */

console.log("EV.GT Experience Version 5.0 — Grand Touring Edition");
