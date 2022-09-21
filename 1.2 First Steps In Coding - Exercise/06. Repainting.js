function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let bagPrice = 0.4;

    let nylonSum = (nylon + 2) * 1.5;
    let paintSum = (paint * 1.1) * 14.5;
    let thinnerSum = thinner * 5;

    let materialsSum = nylonSum + paintSum + thinnerSum + bagPrice;

    let totalSum = materialsSum * 0.3 * hours;

    let finalSum = totalSum + materialsSum;

    console.log(finalSum);
}

repainting(["10 ", "11 ", "4 ", "8 "])