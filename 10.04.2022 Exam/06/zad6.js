function football(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let validCount = 0;

    for (let a = k; a <= 8; a++) {
        if (a % 2 !== 0) {
            continue;
        }
        for (let b = 9; b >= l; b--) {
            if (b % 2 === 0) {
                continue;
            }
            for (let c = m; c <= 8; c++) {
                if (c % 2 !== 0) {
                    continue;
                }
                for (let d = 9; d >= n; d--) {
                    if (d % 2 === 0) {
                        continue;
                    }
                    if (validCount === 6) {
                        break;
                    }
                    if (a === c && b === d) {
                        console.log(`Cannot change the same player.`);
                    } else {
                        validCount++;
                        console.log(`${a}${b} - ${c}${d}`);
                    }
                }
            }
        }
    }
}
football(["6", "7", "5", "6"]);