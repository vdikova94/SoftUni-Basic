function painting(input) {
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hour = Number(input[3]);

    let priceNylon = (naylon + 2) * 1.5;
    let pricePaint = (paint + paint * 10 / 100) * 14.50;
    let priceThinner = thinner * 5;
    const bag = 0.40;

    let allSumMaterial = priceNylon + pricePaint + priceThinner + bag;
    let sumMaistors = allSumMaterial * 0.3 * hour;

    let allSum = allSumMaterial + sumMaistors;

    console.log(allSum);
}
painting(["10", "11", "4", "8"])