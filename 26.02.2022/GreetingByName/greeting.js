function greeting(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`)
}
greeting(["Viki"])

function greetingLong(input) {
    let fName = input[0];
    let lName = input[1];
    let age = input[2];
    let town = input[3];
    let text = (`You are ${fName} ${lName}, a ${age}-years old person from ${town}.`);
    console.log(text);
}
greetingLong(["Viktoria", "Dikova", 28, "Varna"])