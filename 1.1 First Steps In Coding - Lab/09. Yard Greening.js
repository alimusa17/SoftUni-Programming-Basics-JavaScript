function greening(input) {

    let greeningArea = input[0];
    let price = greeningArea * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;

    let result1 = `The final price is: ${finalPrice} lv.`;
    let result2 = `The discount is: ${discount} lv.`

    console.log(result1);
    console.log(result2);
}

greening["550"];