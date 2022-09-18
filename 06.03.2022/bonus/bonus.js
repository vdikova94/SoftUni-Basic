function bonus(arg) {
    let points = Number(arg[0]);
    let bonusPoints = 0.0;

    if (points <= 100) {
        bonusPoints = 5;
    } else if (points > 100 && points <= 1000) {
        bonusPoints = points * 0.2;
    } else {
        bonusPoints = points * 0.1;
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 5 === 0) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}

console.log('--- 2703 points ---');
bonus(["2703"]);
console.log('------------------');