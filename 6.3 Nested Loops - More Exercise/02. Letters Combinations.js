function lettersCombinations(input) {

    let firstChar = input[0].charCodeAt();
    let lastChar = input[1].charCodeAt();
    let skippedChar = input[2].charCodeAt();

    let combinations = "";
    let combinationsCount = 0;

    for (let i = firstChar; i <= lastChar; i++) {

        if (i === skippedChar) {
            continue;
        }

        for (let j = firstChar; j <= lastChar; j++) {
            
            if (j === skippedChar) {
                
                continue;    
            }

            for (let k = firstChar; k <= lastChar; k++) {
                
                if (k === skippedChar) {
                    continue;
                }

                combinations += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} ` 
                combinationsCount++;
            }
        }
    }

    combinations += combinationsCount;

    console.log(combinations);
}

lettersCombinations(["f", "k", "h"]);