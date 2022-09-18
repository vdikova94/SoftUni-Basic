function numbers(arg) {
    let a = Number(arg[0]);
    let b = Number(arg[1]);
    let operator = arg[2];
    let result = 0;
    if (b === 0 && (operator === "/" || operator === "%")) {
        console.log(`Cannot divide ${a} by zero`);
        return;
    }
    if (operator === "+") {
        result = a + b;
        if (result % 2 === 0) {
            console.log(`${a} + ${b} = ${result} - even`);
        } else {
            console.log(`${a} + ${b} = ${result} - odd`);
        }
    } else if (operator === "-") {
        result = a - b;
        if (result % 2 === 0) {
            console.log(`${a} - ${b} = ${result} - even`);
        } else {
            console.log(`${a} - ${b} = ${result} - odd`);
        }
    } else if (operator === "*") {
        result = a * b;
        if (result % 2 === 0) {
            console.log(`${a} * ${b} = ${result} - even`);
        } else {
            console.log(`${a} * ${b} = ${result} - odd`);
        }
    } else if (operator === "/") {
        result = a / b;
        console.log(`${a} / ${b} = ${result.toFixed(2)}`);
    } else if (operator === "%") {
        result = a % b;
        console.log(`${a} % ${b} = ${result}`);
    }
}
numbers(["10", "12", "+"]);
console.log(`.............................`);
numbers(["10", "1", "-"]);
console.log(`.............................`);
numbers(["7", "3", "*"]);
console.log(`.............................`);
numbers(["112", "0", "/"]);
console.log(`.............................`);
numbers(["10", "0", "%"]);