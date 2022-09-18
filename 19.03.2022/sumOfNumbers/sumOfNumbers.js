function sumOfNumbers(arg) {
    let numberText = arg[0];
    let sum = 0;
    for (let i = 0; i < numberText.length; i++) {
        sum += Number(numberText[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])