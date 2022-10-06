function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let location = '';
    let type = '';

    if (budget <= 1000) {

        type = 'Camp';

        if (season === 'Summer') {

            location = 'Alaska';
            budget *= 0.65;

        } else {

            location = 'Morocco';
            budget *= 0.45;
        }
    }
    else if (budget > 1000 && budget <= 3000) {

        type = 'Hut';

        if (season === 'Summer') {

            location = 'Alaska';
            budget *= 0.8;

        } else {

            location = 'Morocco';
            budget *= 0.6;
        }
    }
    else {

        type = 'Hotel';

        if (season === 'Summer') {

            location = 'Alaska';
            budget *= 0.9;

        } else {

            location = 'Morocco';
            budget *= 0.9;
        }
    }

    console.log(`${location} - ${type} - ${budget.toFixed(2)}`);

}

vacation(["1100", "Summer"])