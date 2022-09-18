function footbalBall(input) {

    let shirtPrice = Number(input[0]);
    let sumForBall = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let socsPrice = shortsPrice * 0.2;
    let shoesPeice = 2 * (shirtPrice + shortsPrice);

    let totalPrice = shirtPrice + shortsPrice + socsPrice + shoesPeice;
    totalPrice *= 0.85;

    if (totalPrice >= sumForBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(sumForBall - totalPrice).toFixed(2)} lv. more.`);
    }
}
footbalBall(["59.99",
    "500"
]);