function swimming(arg) {
    let record = Number(arg[0]);
    let metres = Number(arg[1]);
    let secondsForMeter = Number(arg[2]);

    let distance = metres * secondsForMeter;
    let time = Math.floor(metres / 15) * 12.5;
    let ivanTime = distance + time;

    if (ivanTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(ivanTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanTime - record).toFixed(2)} seconds slower.`);
    }
}
swimming(["10464", "1500", "20"]);

swimming(["55555.67", "3017", "5.03"]);