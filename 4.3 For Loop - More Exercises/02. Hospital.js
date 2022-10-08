function hospital(input) {

    let period = Number(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let index = 1; index <= period; index++) {

        let patients = Number(input[index]);

        if (index % 3 === 0 && untreatedPatients > treatedPatients) {

            doctors++;

        }
        if (patients > doctors) {

            untreatedPatients += patients - doctors;
            treatedPatients += doctors;

        } else {

            treatedPatients += patients;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(["3", "7", "7", "7", "25", "25", "2"])