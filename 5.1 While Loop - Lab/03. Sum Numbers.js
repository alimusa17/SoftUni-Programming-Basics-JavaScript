function sumNumber(input) {

    let number = Number(input[0]);
    let sum = 0;
    let index = 1

    while (sum < number) {

        let currentNumber = Number(input[index]);
        index++;

        sum += currentNumber;

    }
    console.log(sum);
}
sumNumber(["20", "1", "2", "3", "4", "5", "6"])

