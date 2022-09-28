function tradeCommissions(input) {

    let town = input[0];
    let sales = Number(input[1]);

    let percent = 0;

    switch (town) {
        case 'Sofia':
            if (0 <= sales && sales <= 500) {
                percent = 0.05;
            } else if (500 <= sales && sales <= 1000) {
                percent = 0.07;
            } else if (1000 <= sales && sales <= 10000) {
                percent = 0.08;
            } else {
                percent = 0.12;
            }
            break;
        case 'Varna':
            if (0 <= sales && sales <= 500) {
                percent = 0.045;
            } else if (500 <= sales && sales <= 1000) {
                percent = 0.075;
            } else if (1000 <= sales && sales <= 10000) {
                percent = 0.10;
            } else {
                percent = 0.13;
            }
            break;
        case 'Plovdiv':
            if (0 <= sales && sales <= 500) {
                percent = 0.055;
            } else if (500 <= sales && sales <= 1000) {
                percent = 0.08;
            } else if (1000 <= sales && sales <= 10000) {
                percent = 0.12;
            } else {
                percent = 0.145;
            }
            break;
    }

    let commissions = sales * percent;

    if ((town !== 'Sofia' && town !== 'Varna' && town !== 'Plovdiv') || sales < 0) {
       
        console.log('error');

    } else {

        console.log(`${commissions.toFixed(2)}`);
    }

}

tradeCommissions(["Plovdiv",
    "-50"])

