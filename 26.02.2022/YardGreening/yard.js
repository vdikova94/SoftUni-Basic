function yard(input) {
    let metr = input[0];
    let price = metr * 7.61;
    let discount = price * 0.18;
    let totalPrice = price - discount;
    let total = (`The final price is: ${totalPrice} lv.`);
    let total1 = (`The discount is: ${discount} lv.`);
    console.log(total);
    console.log(total1);
}
yard([150])