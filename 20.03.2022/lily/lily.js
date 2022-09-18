function lily(arg) {
    let lilyAge = Number(arg[0]);
    let washingMachinePrice = Number(arg[1]);
    let toyPrice = Number(arg[2]);

    let saveMoney = 0;
    let addMoney = 10;
    let stealMoney = 0;
    let toyCount = 0;

    for (i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            saveMoney += addMoney;
            stealMoney++;
            addMoney += 10
        } else {
            toyCount++;
        }
    }
    let saleToy = toyPrice * toyCount;
    let allSavedMoney = (saveMoney + saleToy) - stealMoney;

    if (allSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(allSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(allSavedMoney - washingMachinePrice).toFixed(2)}`);
    }
}
lily(["10", "170.00", "6"]);

lily(["21",
    "1570.98",
    "3"
])