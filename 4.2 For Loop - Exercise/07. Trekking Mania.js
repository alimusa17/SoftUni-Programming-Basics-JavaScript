function trekkingMania(input) {

    let groupsOfPeople = Number(input[0]);

    let groupe1 = 0;
    let groupe2 = 0;
    let groupe3 = 0;
    let groupe4 = 0;
    let groupe5 = 0;

    for (let index = 1; index <= groupsOfPeople; index++) {

        let climbersCount = Number(input[index]);

        if (climbersCount < 6) {

            groupe1 += climbersCount;

        } else if (climbersCount < 13) {

            groupe2 += climbersCount;

        } else if (climbersCount < 26) {

            groupe3 += climbersCount;

        } else if (climbersCount < 41) {

            groupe4 += climbersCount;

        } else {
            
            groupe5 += climbersCount;
            
        }
    }

    let totalClimbersCount = groupe1 + groupe2 + groupe3 + groupe4 + groupe5;

    let convertGroupe1 = (groupe1 / totalClimbersCount) * 100;
    let convertGroupe2 = (groupe2 / totalClimbersCount) * 100;
    let convertGroupe3 = (groupe3 / totalClimbersCount) * 100;
    let convertGroupe4 = (groupe4 / totalClimbersCount) * 100;
    let convertGroupe5 = (groupe5 / totalClimbersCount) * 100;

    console.log(`${convertGroupe1.toFixed(2)}%`);
    console.log(`${convertGroupe2.toFixed(2)}%`);
    console.log(`${convertGroupe3.toFixed(2)}%`);
    console.log(`${convertGroupe4.toFixed(2)}%`);
    console.log(`${convertGroupe5.toFixed(2)}%`);

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
