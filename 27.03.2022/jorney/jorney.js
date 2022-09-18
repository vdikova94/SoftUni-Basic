function jorney(input) {
    let needMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let totalDays = 0;
    let spendDays = 0;
    let money = 0;
    let index = 2;
    let operation = input[index];

    while (availableMoney < needMoney) {
        index++;
        money = Number(input[index]);
        if (operation === "spend") {
            availableMoney -= money;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            totalDays++;
            spendDays++;
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(totalDays);
                break;
            }
        }
        if (operation === "save") {
            availableMoney += money;
            totalDays++;
            spendDays = 0;
        }
        index++;
        operation = input[index];
    }
    if (availableMoney >= needMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}
jorney(["1100",
    "600",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "save",
    "20",
    "spend",
    "10",
    "spend",
    "120",
    "save",
    "200",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
]);