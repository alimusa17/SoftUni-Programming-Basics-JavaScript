function clockWhile(input) {

    let h = 0;
    let m = 0;

    while (h <= 23) {

        while (m <= 59) {

            console.log(`${h}:${m}`);
            m++;

        }

        m = 0;
        h++;

    }

}

clockWhile()