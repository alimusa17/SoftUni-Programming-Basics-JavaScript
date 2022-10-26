function pcStore(input) {

    let cpuPriceUsd = Number(input[0]);
    let videoCard = Number(input[1]);
    let ramMemory = Number(input[2]);
    let ramMemoryCount = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let cpuPrice = cpuPriceUsd * 1.57;
    let videoCardPrice = videoCard * 1.57;
    let ramMemoryPrice = ramMemory * 1.57;
    let ramMemoryPlatPrice = ramMemoryCount * ramMemoryPrice;

    let discountCpu = cpuPrice - (cpuPrice * percentDiscount);
    let discountVideoCard = videoCardPrice - (videoCardPrice * percentDiscount);

    let totalPrice = discountCpu + discountVideoCard + ramMemoryPlatPrice;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

pcStore(["200",
"100",
"80",
"1",
"0.01"])


