function circleAreaAndPerimeters(input) {

    let radius = Number(input[0]);

    let calculatedArea = Math.PI * Math.pow(radius, 2);

    console.log(calculatedArea.toFixed(2));

    let calculatedParameter = 2 * Math.PI * radius;

    console.log(calculatedParameter.toFixed(2));

}

circleAreaAndPerimeters(["4.5"]);