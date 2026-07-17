const logo = document.getElementById("letters");
const claim = document.getElementById("claim");

const steps = [
    "E",
    "EV",
    "EV.",
    "EV.G",
    "EV.GT"
];

logo.textContent = "";

steps.forEach((text, index) => {

    setTimeout(() => {

        logo.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(18px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 450,
                easing: "ease-out"
            }
        );

        logo.textContent = text;

    }, index * 700);

});

setTimeout(() => {

    claim.animate(
        [
            {
                opacity: 0,
                transform: "translateY(10px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1200,
            easing: "ease-out",
            fill: "forwards"
        }
    );

}, 3800);
