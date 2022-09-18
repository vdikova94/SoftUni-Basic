function menus(input) {
    let menuChicken = Number(input[0]);
    let menuFish = Number(input[1]);
    let menuVegie = Number(input[2]);

    let priceMenuChiken = menuChicken * 10.35;
    let priceMenuFish = menuFish * 12.40;
    let priceMenuVegie = menuVegie * 8.15;

    let totalPrice = priceMenuChiken + priceMenuFish + priceMenuVegie;
    let desert = totalPrice * 0.20;
    const delivery = 2.50;

    let total = totalPrice + desert + delivery;

    console.log(total);
}
menus(["2", "4", "3"])