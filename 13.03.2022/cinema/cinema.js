function cinema(arg) {
    let typeMovie = arg[0];
    let row = Number(arg[1]);
    let col = Number(arg[2]);

    let price = 0;

    if (typeMovie === "Premiere") {
        price = 12 * row * col;
    } else if (typeMovie === "Normal") {
        price = 7.50 * row * col;
    } else if (typeMovie === "Discount") {
        price = 5 * row * col;
    }
    console.log(`${price.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
console.log("..........");
cinema(["Normal", "21", "13"]);
console.log("..........");
cinema(["Discount", "12", "30"]);