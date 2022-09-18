function toyShop(arg) {
    let trip = Number(arg[0]);
    let puzzlesCount = Number(arg[1]);
    let dollsCount = Number(arg[2]);
    let bearsCount = Number(arg[3]);
    let minionsCount = Number(arg[4]);
    let trucksCount = Number(arg[5]);

    let allToyCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    let puzzlesPrice = puzzlesCount * 2.6;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let allToyPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;


    if (allToyCount >= 50) {
        allToyPrice = allToyPrice * 0.75;
    }
    // let naem = allToyPrice * 0.1;
    let totalPrice = allToyPrice * 0.9;

    if (trip <= totalPrice) {
        console.log(`Yes! ${(totalPrice-trip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip-totalPrice).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);