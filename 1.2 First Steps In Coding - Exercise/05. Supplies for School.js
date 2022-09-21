function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litersPreparation = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens * 5.8;
    let markersPrice = markers * 7.2;
    let litersPreparationPrice = litersPreparation * 1.2;

    let totalSum = pensPrice + markersPrice + litersPreparationPrice;

    let finalSum = totalSum - (totalSum * discount / 100);

    console.log(finalSum);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "])