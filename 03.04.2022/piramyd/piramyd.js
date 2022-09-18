function pyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let flag = false;
    let printNumber = "";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (current > n) {
                flag = true;
                break;
            }
            printNumber += `${current} `
            current++;
        }
        console.log(printNumber);
        printNumber = "";
        if (flag) {
            break;
        }
    }
}
pyramid(["10"])