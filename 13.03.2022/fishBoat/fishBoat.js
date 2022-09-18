function fishBoat(arg) {
    let budget = Number(arg[0]);
    let season = arg[1];
    let fishMans = Number(arg[2]);

    let rentBoat = 0;

    switch (season) {
        case "Spring":
            rentBoat = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentBoat = 4200;
            break;
        case "Winter":
            rentBoat = 2600;
            break;
    }

    if (fishMans <= 6) {
        rentBoat *= 0.9;
    } else if (fishMans >= 7 && fishMans <= 11) {
        rentBoat *= 0.85;
    } else {
        rentBoat *= 0.75;
    }

    if (fishMans % 2 === 0 && season !== "Autumn") {
        rentBoat *= 0.95;
    }

    if (budget >= rentBoat) {
        console.log(`Yes! You have ${(budget - rentBoat).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rentBoat - budget).toFixed(2)} leva.`);
    }
}
fishBoat(["3000", "Spring", "11"]);
fishBoat(["3600", "Autumn", "6"]);
fishBoat(["2000", "Winter", "13"]);