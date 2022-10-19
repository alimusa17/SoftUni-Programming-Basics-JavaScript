function streamOfLetters(input) {

    let index = 0;
    let command = input[index];

    let counterC = 0;
    let counterO = 0;
    let counterN = 0;

    let text = "";
    let correctText = "";

    while (command !== "End") {
        let letters = (command);

        if (/^[a-zA-Z]/.test(letters)) {

            if (letters === "c") {
                counterC++;

                if (counterC >= 2) {
                    text += letters;
                }
                letters = "";
            }

            if (letters === "o") {
                counterO++;

                if (counterO >= 2) {
                    text += letters;
                }
                letters = "";
            }

            if (letters === "n") {
                counterN++;

                if (counterN >= 2) {
                    text += letters;
                }
                letters = "";
            }

            text += letters;

            if (counterC >= 1 && counterO >= 1 && counterN >= 1) {

                counterC = 0;
                counterO = 0;
                counterN = 0;

                text += " ";
                correctText = text;
            }

        }
        index++;
        command = input[index];
    }

    if (command === "End") {
        console.log(correctText);
    }

}

streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "A", "D", "End"])