function area(arg) {
    let figure = arg[0];
    let res = 0;
    if (figure === "square") {
        let a = Number(arg[1]);
        res = Math.pow(a, 2);
    } else if (figure === "rectangle") {
        let a = Number(arg[1]);
        let b = Number(arg[2]);
        res = a * b;
    } else if (figure === "circle") {
        let r = Number(arg[1]);
        res = Math.pow(r, 2) * Math.PI;
    } else if (figure === "triangle") {
        let a = Number(arg[1]);
        let ha = Number(arg[2]);
        res = a * ha / 2;
    }
    console.log(res.toFixed(3));
}
area(["rectangle", "7", "2.5"])