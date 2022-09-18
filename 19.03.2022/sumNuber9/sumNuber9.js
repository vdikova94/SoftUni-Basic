function number(arg) {
    let n = Number(arg[0]);
    let m = Number(arg[1]);

    let sum = 0;
    let outputNum = '';
    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            sum += i;
            outputNum += `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNum);
}
number(["100", "200"])