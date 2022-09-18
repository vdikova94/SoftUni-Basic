function bascketball(input) {
    let taxes = Number(input[0]);

    let shoes = taxes * 0.6;
    let outline = shoes * 0.8;
    let ball = outline / 4;
    let accessory = ball / 5;

    let price = taxes + shoes + outline + ball + accessory;

    console.log(price);
}
bascketball(["365"])