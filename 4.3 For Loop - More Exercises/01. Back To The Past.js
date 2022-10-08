function backToThePast(input) {

    let inheritedMoney = Number(input[0]);
    let yearsToLiveUpTo = Number(input[1]);

    let totalMoney = 0;
    let ages = 18;

    for (let year = 1800; year <= yearsToLiveUpTo; year ++) {
        
        if (year % 2 === 0) {
            
            totalMoney += 12000;

        } else {
            
           totalMoney += 12000 + 50 * ages;
        }
        ages++;
    }

    if (inheritedMoney >= totalMoney) {
        
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - totalMoney).toFixed(2)} dollars left.`);

    } else {

        console.log(`He will need ${(totalMoney - inheritedMoney).toFixed(2)} dollars to survive.`);
    }

}

backToThePast(["100000.15", "1808"])