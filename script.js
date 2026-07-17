const letters = document.querySelectorAll("#letters span");
const claim = document.getElementById("claim");

letters.forEach((letter, index) => {

    setTimeout(() => {

        letter.animate(

            [
                {
                    opacity:0,
                    transform:"translateY(30px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0px)"
                }

            ],

            {

                duration:700,
                easing:"ease-out",
                fill:"forwards"

            }

        );

    }, index * 550);

});

setTimeout(() => {

    claim.animate(

        [

            {
                opacity:0
            },

            {
                opacity:1
            }

        ],

        {

            duration:1500,
            fill:"forwards"

        }

    );

}, 3300);
