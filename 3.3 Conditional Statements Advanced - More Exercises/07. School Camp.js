function schoolCamp(input) {

    let season = input[0];
    let typeGroup = input[1];
    let numberOfStudents = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let typeSport = '';

    switch (season) {
        case 'Winter':
            switch (typeGroup) {
                case 'girls':
                    price = nights * numberOfStudents * 9.6;
                    typeSport = 'Gymnastics';
                    break;
                case 'boys':
                    price = nights * numberOfStudents * 9.6;
                    typeSport = 'Judo';
                    break;
                case 'mixed':
                    price = nights * numberOfStudents * 10;
                    typeSport = 'Ski';
                    break;
            }
            break;

        case 'Spring':
            switch (typeGroup) {
                case 'girls':
                    price = nights * numberOfStudents * 7.2;
                    typeSport = 'Athletics';
                    break;
                case 'boys':
                    price = nights * numberOfStudents * 7.2;
                    typeSport = 'Tennis';
                    break;
                case 'mixed':
                    price = nights * numberOfStudents * 9.5;
                    typeSport = 'Cycling';
                    break;
            }
            break;

        case 'Summer':
            switch (typeGroup) {
                case 'girls':
                    price = nights * numberOfStudents * 15;
                    typeSport = 'Volleyball';
                    break;
                case 'boys':
                    price = nights * numberOfStudents * 15;
                    typeSport = 'Football';
                    break;
                case 'mixed':
                    price = nights * numberOfStudents * 20;
                    typeSport = 'Swimming';
                    break;
            }
            break;

        default:
            break;
    }

    if (numberOfStudents >= 50) {

        price *= 0.5;

    } else if (numberOfStudents >= 20 && numberOfStudents < 50) {
        
        price *= 0.85;

    } else if (numberOfStudents >= 10 && numberOfStudents < 20) {

        price *= 0.95;
        
    }

    console.log(`${typeSport} ${price.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "mixed", "17", "14"])