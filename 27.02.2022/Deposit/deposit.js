function deposit1(amount, term, interest) {

    let allInterest = amount * interest / 100;
    let monthInterest = allInterest / 12;
    let sumDeposit = amount + (term * monthInterest);

    console.log(sumDeposit);

}
deposit1(200, 3, 5.7)

function deposit(input) {
    let amount = Number(input[0]);
    let term = Number(input[1]);
    let interest = Number(input[2]);

    let allInterest = amount * interest / 100;
    let monthInterest = allInterest / 12;
    let sumDeposit = amount + (term * monthInterest);

    console.log(sumDeposit);
}
deposit(["200", "3", "5.7"])