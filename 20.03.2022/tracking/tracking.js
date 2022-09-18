function tracking(arg) {
    let groupCount = Number(arg[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groupCount; i++) {
        let numberPerson = Number(arg[i]);

        if (numberPerson <= 5) {
            musala += numberPerson;
        } else if (numberPerson <= 12) {
            monblan += numberPerson;
        } else if (numberPerson <= 25) {
            kilimandjaro += numberPerson;
        } else if (numberPerson <= 40) {
            k2 += numberPerson;
        } else if (numberPerson >= 41) {
            everest += numberPerson;
        }

    }
    let sumPerson = musala + monblan + kilimandjaro + k2 + everest;
    console.log(`${(musala / sumPerson * 100).toFixed(2)}%`);
    console.log(`${(monblan / sumPerson * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / sumPerson * 100).toFixed(2)}%`);
    console.log(`${(k2 / sumPerson * 100).toFixed(2)}%`);
    console.log(`${(everest / sumPerson * 100).toFixed(2)}%`);
}
tracking(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
]);