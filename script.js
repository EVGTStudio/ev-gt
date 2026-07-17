window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.animate(
        [
            {
                opacity: 0,
                transform: "translateY(30px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1800,
            easing: "ease-out",
            fill: "forwards"
        }
    );

});
