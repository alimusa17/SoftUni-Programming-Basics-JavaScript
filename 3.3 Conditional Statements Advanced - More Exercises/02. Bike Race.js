function bikeRace(input) {

    let numberJuniors = Number(input[0]);
    let numberSeniors = Number(input[1]);
    let trackTypes = input[2];

    let totalPeople = numberJuniors + numberSeniors;

    switch (trackTypes) {
        case 'trail':

            let sum = (numberJuniors * 5.5 + numberSeniors * 7) * 0.95;
            console.log(`${sum.toFixed(2)}`);
            break;

        case 'cross-country':
            if (totalPeople < 50) {

                let sum = (numberJuniors * 8 + numberSeniors * 9.5) * 0.95;
                console.log(`${sum.toFixed(2)}`);

            } else {

                sum = ((numberJuniors * 8 + numberSeniors * 9.5) * 0.95) * 0.75;
                console.log(`${sum.toFixed(2)}`);
            }
            break;

        case 'downhill':

            sum = (numberJuniors * 12.25 + numberSeniors * 13.75) * 0.95;
            console.log(`${sum.toFixed(2)}`);
            break;

        case 'road':

            sum = (numberJuniors * 20 + numberSeniors * 21.5) * 0.95;
            console.log(`${sum.toFixed(2)}`);
            break;
        default:
            break;
    }

}
bikeRace(["21","26","cross-country"])