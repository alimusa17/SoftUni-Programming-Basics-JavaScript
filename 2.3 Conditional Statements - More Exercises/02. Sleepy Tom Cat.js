function sleepyTomCat(input){

    let numbersDayOff = Number(input[0]);

    let numbersDayWorking = 365 - numbersDayOff

    let normOfPlay = 30000;
    let timeToPlay = numbersDayWorking * 63 + numbersDayOff * 127;

    let difference = Math.abs(normOfPlay - timeToPlay);

    if (timeToPlay > normOfPlay) {

        let hours = difference / 60;
        let minutes = difference % 60;

        console.log(`Tom will run away`);
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes more for play`);

    } else {

        let hours = difference / 60;
        let minutes = difference % 60;

        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes less for play`);

    }
}

sleepyTomCat(['20'])