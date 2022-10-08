function logistics(input){

    index = 0;
    let numberOfLoads = Number(input[index]);
    index ++;

    let priceBusPerTon = 200;
    let priceTruckPerTon = 175;
    let priceTrainPerTon = 120;

    let allTones = 0;
    let totalSum = 0;

    let tonesBus = 0;
    let tonesTruck = 0;
    let tonesTrain = 0;

    for (let index = 1; index <= numberOfLoads; index++) {
        
        let weight = Number(input[index]);
        allTones += weight;

        if (weight <= 3) {
            
            totalSum += priceBusPerTon * weight;
            tonesBus += weight;

        } else if (weight >= 4 && weight <= 11) {
            
            totalSum += priceTruckPerTon * weight;
            tonesTruck += weight;

        }else {

            totalSum += priceTrainPerTon * weight;
            tonesTrain += weight;

        }        
    }

    console.log((totalSum / allTones).toFixed(2));

    let percentBus = (tonesBus / allTones) * 100;
    let percentTruck = (tonesTruck / allTones) * 100;
    let percentTrain = (tonesTrain / allTones) * 100;

    console.log(`${percentBus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"])