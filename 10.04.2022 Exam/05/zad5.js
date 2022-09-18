function hairCut(input) {

    let target = Number(input[0]);
    let index = 1;
    let procedure = input[index];
    let moneyForProcedure = 0;
    let winMoney = 0;

    while (procedure !== "closed") {
        if (procedure === "haircut") {
            index++;
            procedure = input[index];
            switch (procedure) {
                case "mens":
                    moneyForProcedure = 15;
                    winMoney += moneyForProcedure;
                    break;
                case "ladies":
                    moneyForProcedure = 20;
                    winMoney += moneyForProcedure;
                    break;
                case "kids":
                    moneyForProcedure = 10;
                    winMoney += moneyForProcedure;
                    break;
            }
        } else if (procedure === "color") {
            index++;
            procedure = input[index];
            switch (procedure) {
                case "touch up":
                    moneyForProcedure = 20;
                    winMoney += moneyForProcedure;
                    break;
                case "full color":
                    moneyForProcedure = 30;
                    winMoney += moneyForProcedure;
                    break;
            }
        }
        index++;
        procedure = input[index];
        if (winMoney >= target) {
            console.log(`You have reached your target for the day!`);
            break;
        }
    }
    if (winMoney < target) {
        console.log(`Target not reached! You need ${target - winMoney}lv. more.`);
    }
    console.log(`Earned money: ${winMoney}lv.`);
}
hairCut(["50",
    "color",
    "full color",
    "haircut",
    "ladies"
])