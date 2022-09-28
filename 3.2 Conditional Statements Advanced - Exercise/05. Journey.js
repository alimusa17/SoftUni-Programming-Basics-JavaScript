function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 'Europe';
    let type = 'Hotel';
    let price = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            type = 'Camp';
            price = budget * 0.3;
        } else {
            type = 'Hotel';
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            type = 'Camp';
            price = budget * 0.4;
        } else {
            type = 'Hotel';
            price = budget * 0.8;
        }
    } else {
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}

journey(["1500", "summer"])