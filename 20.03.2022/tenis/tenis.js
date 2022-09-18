function tenis(arg) {
    let tournamentCount = Number(arg[0]);
    let pointCount = Number(arg[1]);
    let point = pointCount;
    let argLength = arg.length;
    let win = 0;

    for (let i = 2; i < argLength; i++) {
        let typeTournament = arg[i];

        switch (typeTournament) {
            case "W":
                point += 2000;
                win++;
                break;
            case "F":
                point += 1200;
                break;
            case "SF":
                point += 720;
                break;
        }
    }
    console.log(`Final points: ${point}`);
    console.log(`Average points: ${(point - pointCount)/tournamentCount}`);
    console.log(`${(win/tournamentCount*100).toFixed(2)}%`);
}
tenis(["5", "1400", "F", "SF", "W", "W", "SF"]);
tenis(["4", "750", "SF", "W", "SF", "W"]);