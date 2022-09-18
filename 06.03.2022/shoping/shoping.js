function shoping(arg) {
    let budget = Number(arg[0]);
    let videoCardCount = Number(arg[1]);
    let prosessorsCount = Number(arg[2]);
    let RAMCount = Number(arg[3]);

    let videoCardPrice = videoCardCount * 250;
    let prosessorsPrice = prosessorsCount * videoCardPrice * 0.35;
    let RAMPrice = RAMCount * videoCardPrice * 0.1;

    let totalPrice = videoCardPrice + prosessorsPrice + RAMPrice

    if (videoCardCount > prosessorsCount) {
        totalPrice *= 0.85;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
shoping(["900", "2", "1", "3"]);

shoping(["920.45", "3", "1", "1"]);