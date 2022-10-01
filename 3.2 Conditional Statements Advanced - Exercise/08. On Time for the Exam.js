function onTimeForExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    examMin = examMin + examHour * 60;
    arrivalMin = arrivalMin + arrivalHour * 60;

    let difference = Math.abs(arrivalMin - examMin);

    let diffHour = Math.floor(difference / 60);
    let diffMin = difference % 60;

    if (examMin < arrivalMin) {
        console.log(`Late`);

        if (diffHour > 0) {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            }
            else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
        else {
            console.log(`${diffMin} minutes after the start`);
        }
    }

    else if (examMin - arrivalMin <= 30 || examMin === arrivalMin) {
        console.log('On time');

        if (diffMin > 0) {
            console.log(`${difference} minutes before the start`);
        }

    }

    else {
        console.log(`Early`);

        if (diffHour > 0) {

            if (diffMin < 10) {

                console.log(`${diffHour}:0${diffMin} hours before the start`);

            } else {

                console.log(`${diffHour}:${diffMin} hours before the start`);

            }
        }

        else {

            console.log(`${diffMin} minutes before the start`);

        }

    }
}

onTimeForExam(["9",
"00",
"8",
"30"])






