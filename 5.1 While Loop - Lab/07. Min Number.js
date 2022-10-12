function minNumber(input){

    let index = 0;
    let command = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {

        min = Number(min);
        let value = Number(command);

        if (value < min) {

            min = value;
            
        }

        index++;
        command = input[index];        
    }

    console.log(min);
}
minNumber(["45","-20","7","99","Stop"])

