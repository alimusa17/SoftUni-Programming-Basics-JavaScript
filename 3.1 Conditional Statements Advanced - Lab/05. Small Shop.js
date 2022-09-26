function smallShop(input) {

    let productName = input[0];
    let townName = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;

    switch (townName) {
        case 'Sofia':
            if (productName == "coffee") {
                totalPrice = 0.5 * quantity;
            } else if (productName == "water") {
                totalPrice = 0.8 * quantity;
            } else if (productName == "beer") {
                totalPrice = 1.2 * quantity;
            } else if (productName == "sweets") {
                totalPrice = 1.45 * quantity;
            } else {
                totalPrice = 1.6 * quantity;
            }
            break;
        case 'Plovdiv':
            if (productName == "coffee") {
                totalPrice = 0.4 * quantity;
            } else if (productName == "water") {
                totalPrice = 0.7 * quantity;
            } else if (productName == "beer") {
                totalPrice = 1.15 * quantity;
            } else if (productName == "sweets") {
                totalPrice = 1.3 * quantity;
            } else {
                totalPrice = 1.5 * quantity;
            }
            break;
        case 'Varna':
            if (productName == "coffee") {
                totalPrice = 0.45 * quantity;
            } else if (productName == "water") {
                totalPrice = 0.7 * quantity;
            } else if (productName == "beer") {
                totalPrice = 1.1 * quantity;
            } else if (productName == "sweets") {
                totalPrice = 1.35 * quantity;
            } else {
                totalPrice = 1.55 * quantity;
            }
            break;
        default:
            break;
    }

    console.log(`${totalPrice}`);
}

smallShop(["sweets","Sofia","2.23"])



