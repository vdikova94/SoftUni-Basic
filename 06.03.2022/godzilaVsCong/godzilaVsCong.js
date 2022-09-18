function godzilaVsCong(arg) {
    let budget = Number(arg[0]);
    let staticsCount = Number(arg[1]);
    let priceOutfit = Number(arg[2]);

    let decor = budget * 0.1;
    let outfitForAll = staticsCount * priceOutfit

    if (staticsCount > 150) {
        outfitForAll = outfitForAll * 0.9;
    }

    let totalPrice = decor + outfitForAll;

    if (totalPrice > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPrice-budget).toFixed(2)} leva more.`);

    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget-totalPrice).toFixed(2)} leva left.`);
    }
}
godzilaVsCong(["20000", "120", "55.5"]);

godzilaVsCong(["15437.62", "186", "57.99"]);

godzilaVsCong(["9587.88", "222", "55.68"]);