function pipesInPool(input) {

    let poolVolume = Number(input[0]);
    let rateFirstPipePerHour = Number(input[1]);
    let rateSecondPipePerHour = Number(input[2]);
    let workerAbsent = Number(input[3]);

    let poolVolumeFirstPipe = workerAbsent * rateFirstPipePerHour;
    let poolVolumeSecondPipe = workerAbsent * rateSecondPipePerHour;

    let totalPoolVolume = poolVolumeFirstPipe + poolVolumeSecondPipe;

    if (poolVolume >= totalPoolVolume) {

        let totalPercent = ((100 * totalPoolVolume) / poolVolume);
        let percentPipe1 = (10 * poolVolumeFirstPipe / totalPercent);
        let percentPipe2 = (10 * poolVolumeSecondPipe / totalPercent);

        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%.`);

    } else {

        let overflowsWater = totalPoolVolume - poolVolume;

        console.log(`For ${workerAbsent.toFixed(2)} hours the pool overflows with ${overflowsWater.toFixed(2)} liters.`);
    }

}

pipesInPool(['100', '100', '100', '2.5'])