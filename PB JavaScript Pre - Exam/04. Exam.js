function exam(input){

    index = 0;
    let numberOfStudents = Number(input[index]);
    index++;

    let fail = 0;
    let between3To4 = 0;
    let between4To5 = 0;
    let topStudent = 0;
    let sumGrades = 0;

    for (let i = 1; i <= numberOfStudents; i++) {

        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade >= 2 && currentGrade <= 2.99) {

            sumGrades += currentGrade;
            fail++;

        } else if (currentGrade >= 3.00 && currentGrade <= 3.99) {

            sumGrades += currentGrade;
            between3To4++;

        } else if (currentGrade >= 4.00 && currentGrade <= 4.99) {

            sumGrades += currentGrade;
            between4To5++;

        } else if (currentGrade >= 5.00) {

            sumGrades += currentGrade;
            topStudent++;

        }
    }

    let averageGrade = sumGrades / numberOfStudents;
    let percentFail = (fail / numberOfStudents) * 100;
    let percentBetween3To4 = (between3To4 / numberOfStudents) * 100;
    let percentBetween4To5 = (between4To5 / numberOfStudents) * 100;
    let percentTopStudent = (topStudent / numberOfStudents) * 100;

    console.log(`Top students: ${percentTopStudent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentBetween4To5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentBetween3To4.toFixed(2)}%`);
    console.log(`Fail: ${percentFail.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

