function number(arg) {
    let n = Number(arg[0]);

    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
number(["5"])