function time(arg) {
    let hours = Number(arg[0]);
    let minutes = Number(arg[1]);

    let totalMinutes = minutes + 15;

    if (totalMinutes >= 60) {
        hours += 1;
        totalMinutes -= 60;
    }
    if (hours >= 24) {
        hours -= 24;
    }

    if (totalMinutes < 10) {
        console.log(`${hours}:0${totalMinutes}`);
    } else {
        console.log(`${hours}:${totalMinutes}`);
    }
}

time(["1", "46"]);