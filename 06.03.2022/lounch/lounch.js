function lounch(arg) {
    let series = arg[0];
    let seriesTime = Number(arg[1]);
    let lounchTime = Number(arg[2]);

    let eatTime = lounchTime / 8;
    let relaxTime = lounchTime / 4;
    let freeTime = lounchTime - eatTime - relaxTime;

    if (freeTime >= seriesTime) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(freeTime - seriesTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(seriesTime - freeTime)} more minutes.`);
    }
}
lounch(["Game of Thrones", "60", "96"])

lounch(["Teen Wolf", "48", "60"])