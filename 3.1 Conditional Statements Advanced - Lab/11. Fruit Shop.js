function fruitShop(input) {

    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (dayOfWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana':
                    price = 2.5;
                    break;
                case 'apple':
                    price = 1.2;
                    break;
                case 'orange':
                    price = 0.85;
                    break;
                case 'grapefruit':
                    price = 1.45;
                    break;
                case 'kiwi':
                    price = 2.7;
                    break;
                case 'pineapple':
                    price = 5.5;
                    break;
                case 'grapes':
                    price = 3.85;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana':
                    price = 2.7;
                    break;
                case 'apple':
                    price = 1.25;
                    break;
                case 'orange':
                    price = 0.9;
                    break;
                case 'grapefruit':
                    price = 1.6;
                    break;
                case 'kiwi':
                    price = 3;
                    break;
                case 'pineapple':
                    price = 5.6;
                    break;
                case 'grapes':
                    price = 4.2;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        default:
            console.log('error');
            break;
    }

    let totalPrice = price * quantity;

    if (totalPrice != 0) {

        console.log(`${totalPrice.toFixed(2)}`);

    }

}

fruitShop(["apple",
"Tuesday",
"2"])




