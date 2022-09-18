function coins(input) {
    let balance = Number(input[0]);
    balance = (balance * 100).toFixed(2);
    let coinCount = 0;

    while (balance > 0) {
        if (balance >= 200) {
            coinCount++;
            balance -= 200;
        } else if (balance >= 100) {
            coinCount++;
            balance -= 100;
        } else if (balance >= 50) {
            coinCount++;
            balance -= 50;
        } else if (balance >= 20) {
            coinCount++;
            balance -= 20;
        } else if (balance >= 10) {
            coinCount++;
            balance -= 10;
        } else if (balance >= 5) {
            coinCount++;
            balance -= 5;
        } else if (balance >= 2) {
            coinCount++;
            balance -= 2;
        } else if (balance >= 1) {
            coinCount++;
            balance -= 1;
        }
    }
    console.log(coinCount);
}
coins(["2.49"])