function oddEven(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let print = '';

    for (let i = numberOne; i <= numberTwo; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let n = 0; n <= currentNum.length; n++) {
            let currentNumber = Number(currentNum.charAt(n));
            if (n % 2 === 0) {
                evenSum += currentNumber;
            } else {
                oddSum += currentNumber;
            }
        }

        if (oddSum === evenSum) {
            print += `${i} `
        }
    }
    console.log(print);
}
oddEven(["100000", "100050"]);