function sumOfNumbers(input){

    let word = input[0];
    let sum = 0;

    for (let index = 0; index < word.length; index++) {

        sum += Number(word[index]);
        
    }

    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["564891"])