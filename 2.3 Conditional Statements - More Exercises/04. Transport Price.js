    function transportPrice(input) {

        let distance = Number(input[0]);
        let dayOrNight = input[1];

        let price = 0;
        let taxiRate = 0;

        if (dayOrNight == 'day') {
            taxiRate = 0.79;
        } else {
            taxiRate = 0.9;
        }

        if (distance < 20) {
            price = 0.7 + distance * taxiRate;
        } else if (distance < 100) {
            price = distance * 0.09;
        } else {
            price = distance * 0.06;
        }

        console.log(`${price.toFixed(2)}`);
    }

    transportPrice(['180', 'night'])