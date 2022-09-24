function trainingLab(input) {

    let width = Number(input[0]) * 100;
    let height = Number(input[1]) * 100;

    let deskInARow = (height - 100) / 70;
    let place = width / 120;

    let workingPlaces = (((Math.floor(place)) * (Math.floor(deskInARow))) - 3);

    console.log(workingPlaces)

}

trainingLab(["15", "8.9"])