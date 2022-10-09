function footballLeague(input) {

    let index = 0;
    let stadiumCapacity = Number(input[index]);
    index++;

    let numbersFans = Number(input[index]);
    index++;

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 0; i < input.length; i++) {

        let currentSector = input[index];
        index++;

        if (currentSector === "A") {

            sectorA++;

        } else if (currentSector === "B") {

            sectorB++;

        } else if (currentSector === "V") {

            sectorV++;

        } else if (currentSector === "G") {

            sectorG++;

        }
    }

    let percentsectorA = (sectorA / numbersFans) * 100;
    let percentsectorB = (sectorB / numbersFans) * 100;
    let percentsectorV = (sectorV / numbersFans) * 100;
    let percentsectorG = (sectorG / numbersFans) * 100;

    console.log(`${percentsectorA.toFixed(2)}%`);
    console.log(`${percentsectorB.toFixed(2)}%`);
    console.log(`${percentsectorV.toFixed(2)}%`);
    console.log(`${percentsectorG.toFixed(2)}%`);

    console.log(`${((numbersFans / stadiumCapacity) * 100).toFixed(2)}%`)

}
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"])