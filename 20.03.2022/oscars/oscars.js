function oscars(arg) {
    let person = arg[0];
    let points = Number(arg[1]);

    let arglength = arg.length;

    for (let i = 2; i < arglength; i++) {
        if (isNaN(Number(arg[i]))) {
            let nameLength = arg[i].length;
            points += nameLength * Number(arg[i + 1]) / 2;
        };
        if (points >= 1250.5) {
            console.log(`Congratulations, ${person} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    if (points < 1250.5) {
        console.log(`Sorry, ${person} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);