function materials(input) {
    let pensils = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);

    let pricePensils = pensils * 5.8;
    let priceMarkers = markers * 7.20;
    let priceCleaner = cleaner * 1.20;

    let priceForAll = pricePensils + priceMarkers + priceCleaner;

    let priceWithDiscount = priceForAll - (priceForAll * discount / 100);

    console.log(priceWithDiscount);

}
materials(["4", "2", "5", "13"])