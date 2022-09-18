function time(arg) {
    let firstTime = Number(arg[0]);
    let secondTime = Number(arg[1]);
    let thirdTime = Number(arg[2]);
    let totalTime = firstTime + secondTime + thirdTime;
    let min = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else {
        console.log(`${min}:${seconds}`);
    }
}
time(["35", "45", "44"])