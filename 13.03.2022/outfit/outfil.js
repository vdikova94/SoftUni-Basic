function outfit(arg) {
    let degrees = Number(arg[0]);
    let typeOfDay = arg[1];

    let outfits;
    let shoes;



    if (typeOfDay === "Evening") {
        outfits = "Shirt";
        shoes = "Moccasins";
    } else if (degrees >= 10 && degrees <= 18) {
        if (typeOfDay === "Morning") {
            outfits = "Sweatshirt";
            shoes = 'Sneakers';
        } else if (typeOfDay === "Afternoon") {
            outfits = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (typeOfDay === "Morning") {
            outfits = "Shirt";
            shoes = "Moccasins";
        } else if (typeOfDay === "Afternoon") {
            outfits = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (degrees >= 25) {
        if (typeOfDay === "Morning") {
            outfits = "T-Shirt";
            shoes = "Sandals";
        } else if (typeOfDay === "Afternoon") {
            outfits = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfits} and ${shoes}.`);
}
outfit(["16", "Morning"]);
outfit(["22", "Afternoon"])
outfit(["28", "Evening"])