function ski(arg) {
    let days = Number(arg[0]);
    let room = arg[1];
    let feedback = arg[2];

    let night = days - 1;
    let nightPrice = 0;

    switch (room) {
        case "room for one person":
            nightPrice = night * 18;
            break;
        case "apartment":
            nightPrice = night * 25;
            if (night < 10) {
                nightPrice *= 0.7;
            } else if (night < 15) {
                nightPrice *= 0.65;
            } else if (night >= 15) {
                nightPrice *= 0.5;
            }
            break;
        case "president apartment":
            nightPrice = night * 35;
            if (night < 10) {
                nightPrice *= 0.9;
            } else if (night < 15) {
                nightPrice *= 0.85;
            } else if (night >= 15) {
                nightPrice *= 0.8;
            }
            break;
    }
    if (feedback === "positive") {
        nightPrice *= 1.25;
    } else if (feedback === "negative") {
        nightPrice *= 0.9;
    }
    console.log(nightPrice.toFixed(2));
}
ski(["14", "apartment", "positive"]);
ski(["30", "president apartment", "negative"]);
ski(["12", "room for one person", "positive"]);
ski(["2", "apartment", "positive"])