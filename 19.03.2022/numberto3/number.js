function number(arg) {
    let n = Number(arg[0]);
    for (let i = 0; i <= n; i += 2) {
        let sum = Math.pow(2, i);
        console.log(sum);
    }
}
number(["3"])