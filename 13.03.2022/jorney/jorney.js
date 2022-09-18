function jorney(arg) {

    let budget = Number(arg[0]);
    let season = arg[1];

    let tripPrice = 0;

    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);
        if (season === "summer") {
            tripPrice = budget * 0.3;
            console.log(`Camp - ${tripPrice.toFixed(2)}`)
        } else if (season === "winter") {
            tripPrice = budget * 0.7;
            console.log(`Hotel - ${tripPrice.toFixed(2)}`)
        }
    } else if (budget > 100 && budget <= 1000) {
        console.log(`Somewhere in Balkans`)
        if (season === "summer") {
            tripPrice = budget * 0.4;
            console.log(`Camp - ${tripPrice.toFixed(2)}`)
        } else if (season === "winter") {
            tripPrice = budget * 0.8;
            console.log(`Hotel - ${tripPrice.toFixed(2)}`)
        }
    } else if (budget > 1000) {
        console.log(`Somewhere in Europe`)
        tripPrice = budget * 0.9;
        console.log(`Hotel - ${tripPrice.toFixed(2)}`)
    }
}
jorney(["50", "summer"]);
jorney(["75", "winter"]);
jorney(["312", "summer"]);
jorney(["678.53", "winter"]);
jorney(["1500", "summer"]);