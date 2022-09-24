function housePainting(input) {

    let houseHeight = Number(input[0]);
    let houseSideLength = Number(input[1]);
    let houseHeightHides = Number(input[2]);

    let sideWallArea = houseHeight * houseSideLength;
    let windowArea = 1.5 * 1.5;
    let twoSidesArea = 2 * sideWallArea - 2 * windowArea;
    let backWall = houseHeight * houseHeight;
    let entry = 1.2 * 2;
    let totalBackendFrontend = backWall * 2 - entry;

    let sidesArea = twoSidesArea + totalBackendFrontend;

    let greenPaint = sidesArea / 3.4;

    console.log(greenPaint.toFixed(2));

    let rectangles = (houseHeight * houseSideLength) * 2;
    let triangles = (houseHeight * houseHeightHides / 2) * 2;

    let roofArea = rectangles + triangles;

    let redPaint = roofArea / 4.3;

    console.log(redPaint.toFixed(2));

}

housePainting(["10.25", "15.45", "8.88"])