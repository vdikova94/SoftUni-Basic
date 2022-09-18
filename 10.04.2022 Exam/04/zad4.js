function rakia(input) {
    let days = Number(input[0]);
    let index = 1;
    let allLitraRakia = 0;
    let allGradusRakia = 0;
    let sumGradusForLitar = 0;
    for (let i = 1; i <= days; i++) {
        let litraRakia = Number(input[index]);
        allLitraRakia += litraRakia;
        index++;
        let gradusRakia = Number(input[index]);
        allGradusRakia += gradusRakia;
        sumGradusForLitar += litraRakia * gradusRakia;
        index++;
    }
    let avgGradus = sumGradusForLitar / allLitraRakia;
    console.log(`Liter: ${allLitraRakia.toFixed(2)}`);
    console.log(`Degrees: ${avgGradus.toFixed(2)}`);
    if (avgGradus < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgGradus <= 42) {
        console.log(`Super!`);
    } else if (avgGradus > 42) {
        console.log(`Dilution with distilled water!`);
    }
}
rakia(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"
]);