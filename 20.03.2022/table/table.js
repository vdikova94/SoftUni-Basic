function table(arg) {
    let number = Number(arg[0]);
    for (i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} = ${i*number}`);
    }
}
table(["4"]);