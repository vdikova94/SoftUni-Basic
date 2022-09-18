function hotel(arg) {
    let month = arg[0];
    let night = Number(arg[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = night * 50;
            apartmentPrice = night * 65;
            break;

        case 'June':
        case 'September':
            studioPrice = night * 75.20;
            apartmentPrice = night * 68.70;
            break;

        case 'July':
        case 'August':
            studioPrice = night * 76;
            apartmentPrice = night * 77;
            break;
    }
    if (night > 14) {
        apartmentPrice *= 0.90;
    }
    if ((night > 7 && night <= 14) && (month === "May" || month === "October")) {
        studioPrice *= 0.95;
    } else if (night > 14 && (month === "May" || month === "October")) {
        studioPrice *= 0.70;
    } else if (night > 14 && (month === "June" || month === "September")) {
        studioPrice *= 0.80;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotel(["May", "15"]);
hotel(["June", "14"]);
hotel(["August", "20"]);