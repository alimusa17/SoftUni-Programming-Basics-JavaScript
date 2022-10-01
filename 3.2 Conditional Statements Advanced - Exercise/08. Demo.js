function demo(input){

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]); 
    let timeExam = examHour * 60 + examMin;
    let timeArrive = arrivalHour * 60 + arrivalMinute;

    let time = Math.abs(timeArrive - timeExam); 
    let h = Math.floor(time / 60);
    let min = time % 60;


    if (timeExam < timeArrive) { 
        console.log("Late");

        if (time >= 60) {
           
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${time} minutes after the start`);
        }

    } else if (timeArrive === timeExam || timeExam - timeArrive <= 30) {
        console.log("On time");

        if (time !== 0) {
            console.log(`${time} minutes before the start`);
        }
    } else {
        console.log("Early");

        if (time >= 60) {
           
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${time} minutes before the start`);
        }
    }
}

demo(["10",
"00",
"10",
"00"])
; //35
