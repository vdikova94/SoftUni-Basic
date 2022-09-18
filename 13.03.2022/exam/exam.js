function examTime(arg) {
    let hourExam = Number(arg[0]);
    let minExam = Number(arg[1]);
    let hourArrives = Number(arg[2]);
    let minArrives = Number(arg[3]);


    let differentHour = hourExam - hourArrives;
    let differentMin = minExam - minArrives;
    let totalDiferenceMin = differentMin + differentHour * 60;

    let hour = 0;
    let min = 0;

    if (totalDiferenceMin <= 30 && totalDiferenceMin >= 0) {
        console.log("On Time");
    } else if (totalDiferenceMin > 30) {
        console.log("Early");
    } else {
        console.log("Late");
    }

    if (totalDiferenceMin < 0) {
        totalDiferenceMin *= -1;

        if (totalDiferenceMin < 60) {
            console.log(`${totalDiferenceMin} minutes after the start`);
        } else if (totalDiferenceMin >= 60) {
            hour = Math.floor(totalDiferenceMin / 60);
            min = totalDiferenceMin % 60;
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`);
            } else {
                console.log(`${hour}:${min} hours after the start`);
            }
        }
    } else if (totalDiferenceMin > 0) {
        if (totalDiferenceMin < 60) {
            console.log(`${totalDiferenceMin} minutes before the start`);
        } else if (totalDiferenceMin >= 60) {
            hour = Math.floor(totalDiferenceMin / 60);
            min = totalDiferenceMin % 60;
            if (min < 10) {
                console.log(`${hour}:0${min} hours before the start`);
            } else {
                console.log(`${hour}:${min} hours before the start`);
            }
        }
    }
}
examTime(["9", "30", "9", "50"]);
console.log(".........................");
examTime(["9", "00", "8", "30"]);
console.log(".........................");
examTime(["16", "00", "15", "00"]);
console.log(".........................");
examTime(["9", "00", "10", "30"]);
console.log(".........................");
examTime(["14", "00", "13", "55"]);
console.log(".........................");
examTime(["11", "30", "8", "12"]);
console.log(".........................");
examTime(["10", "00", "10", "00"]);
console.log(".........................");
examTime(["11", "30", "10", "55"]);
console.log(".........................");
examTime(["11", "30", "12", "29"]);
console.log(".........................");