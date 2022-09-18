function mustBook(input) {
    let numberPages = Number(input[0]);
    let pages = Number(input[1]);
    let hour = Number(input[2]);

    let necessaryHour = numberPages / pages;
    let necessaryHourPerDay = necessaryHour / hour;

    console.log(necessaryHourPerDay);
}
mustBook(["212", "20", "2"])