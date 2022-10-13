function examPreparation(input){

    let index = 0;
    let failedTimes = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let failedCount = 0;
    let evaluationCount = 0;
    let evaluationSum = 0;
    let neededBreak = false;
    let lastExercise = "";

    while (command !== "Enough") {

        let currentExercise = command;
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade <= 4) {

            failedCount++;
        }
        if (failedCount === failedTimes) {
            
            neededBreak = true;
            console.log(`You need a break, ${failedCount} poor grades.`);
            break;
        }
        evaluationSum += currentGrade;
        evaluationCount++;

        lastExercise = currentExercise;
        command = input[index];
        index++;               
    }

    if (!neededBreak ) {

        let averageGrade = evaluationSum / evaluationCount;

        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${evaluationCount}`);
        console.log(`Last problem: ${lastExercise}`);       
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
