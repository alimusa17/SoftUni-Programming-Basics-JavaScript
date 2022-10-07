function multiplyBy2(input) {

    index = 0;
    let num = Number(input[index]);
    index++;
    let i = 0

    while (i < input.length) {

        if (input[i] >= 0) {

            console.log(`Result: ${(2 * input[i]).toFixed(2)}`)

        } else if (input[i] < 0) {

            console.log(`Negative number!`);

        }

        i++;
    }
}
multiplyBy2(["12"])