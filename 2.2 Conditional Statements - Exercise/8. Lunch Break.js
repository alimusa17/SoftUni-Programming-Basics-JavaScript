function lunchBreak(input) {

    let name = input[0];
    let durationEpisode = Number(input[1]);
    let durationBreak = Number(input[2]);

    let lunch = durationBreak / 8;
    let relaxTime = durationBreak / 4;

    let totalFreeTime = durationBreak - lunch - relaxTime;
    let difference = Math.abs(totalFreeTime - durationEpisode);

    if (totalFreeTime >= durationEpisode) {

        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(difference)} minutes free time.`);

    } else {

        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(difference)} more minutes.`);

    }
}

lunchBreak(["Game of Thrones",
    "60",
    "96"])
