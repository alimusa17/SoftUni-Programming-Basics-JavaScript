function trainTheTrainers(input){

    let n = Number(input[0]);
    let index = 1; 
    let command = input[index];
    let sumGrades = 0;
    let counter = 0;

    while (command !== "Finish") {

        counter++;

        let name = command;
        let tempSumGrade = 0;

        for (let i = 1; i <= n; i++) {
           
            index++;
            let grade = Number(input[index]);

            tempSumGrade += grade;            
        }

        let tempAvgGrade = tempSumGrade / n;
        sumGrades += tempAvgGrade;

        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

        index++;
        command = input[index];
        
    }

    let avgGrade = sumGrades / counter;

    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

