function graduation(input) {

    let index = 0;
    let student = input[index];
    index++;

    let badGrade = 0; 
    let sumGrade = 0; 
    let i = 1; 
    let isExcluded = false; 

    while (i <= 12) { 

        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {

            badGrade++;

            if (badGrade > 1) {
                isExcluded = true;
                break;
            }
            continue; 
        }

        sumGrade += grade; 
        i++; 
    }

    if (!isExcluded) {

        let averageGrade = sumGrade / 12;
        console.log(`${student} graduated. Average grade: ${averageGrade.toFixed(2)}`);

    } else {

        console.log(`${student} has been excluded at ${i} grade`); 

    }
}

graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
