function summerOutfit(input) {

    let degrees = Number(input[0]);
    let time = input[1];

    let outfit = 'Shirt';
    let shoes = 'Moccasins';

    switch (time) {
        case 'Morning':
            if (degrees <= 18) {

                outfit = 'Sweatshirt';
                shoes = 'Sneakers';

            } else {
                (degrees >= 25)

                outfit = 'T-Shirt';
                shoes = 'Sandals';

            }
            break;
        case 'Afternoon':
            if (18 < degrees <= 24) {

                outfit = 'T-Shirt';
                shoes = 'Sandals';

            } else {
                (degrees >= 25)

                outfit = 'Swim Suit';
                shoes = 'Barefoot';

            }
            break;

        /*default:
            break;*/
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["28",
"Evening"])


