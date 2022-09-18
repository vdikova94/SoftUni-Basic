function primeNonPrime(input) {
    let index = 0;
    let command = input[index];
    let sumPrime = 0;
    let sumNotPrime = 0;

    while (command !== "stop") {
        let number = Number(command);
        if (number < 0) {
            console.log(`Number is negative.`);
            index++;
            command = input[index];
            number = command;
            continue;
        }
        if (number === 0) {
            index++;
            command = input[index];
            number = command;
            continue;
        }

        let isPrime = true;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrime += number;
        } else {
            sumNotPrime += number;
        }

        index++;
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}
primeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"
]);