function pcStore(input) {
    let procesorPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    procesorPrice *= 1.57;
    videoCardPrice *= 1.57;
    ramPrice *= 1.57 * ramCount;

    procesorPrice = procesorPrice - procesorPrice * discount;
    videoCardPrice = videoCardPrice - videoCardPrice * discount;

    let totalPrice = procesorPrice + videoCardPrice + ramPrice;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}
pcStore(["200",
    "100",
    "80",
    "1",
    "0.01"
]);