function home(arg) {
    let flower = arg[0];
    let flowerCount = Number(arg[1]);
    let budget = Number(arg[2]);

    let flowerPrice = 0;

    switch (flower) {
        case "Roses":
            flowerPrice = 5 * flowerCount;
            if (flowerCount > 80) {
                flowerPrice *= 0.9;
            }
            break;
        case "Dahlias":
            flowerPrice = 3.8 * flowerCount;
            if (flowerCount > 90) {
                flowerPrice *= 0.85;
            }
            break;
        case "Tulips":
            flowerPrice = 2.8 * flowerCount;
            if (flowerCount > 80) {
                flowerPrice *= 0.85;
            }
            break;
        case "Narcissus":
            flowerPrice = 3 * flowerCount;
            if (flowerCount < 120) {
                flowerPrice *= 1.15;
            }
            break;
        case "Gladiolus":
            flowerPrice = 2.5 * flowerCount;
            if (flowerCount < 80) {
                flowerPrice *= 1.2;
            }
            break;
    }
    if (budget >= flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${(budget - flowerPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`);
    }
}
home(["Roses", "55", "250"]);
home(["Tulips", "88", "260"]);
home(["Narcissus", "119", "360"]);