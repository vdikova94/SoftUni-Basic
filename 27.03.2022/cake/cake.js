function cakes(input) {
    let cakeWidht = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakePiece = cakeWidht * cakeLength;
    let index = 2;
    let piece = input[index];

    while (piece !== "STOP") {
        piece = Number(input[index]);
        cakePiece -= piece;

        if (cakePiece < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePiece)} pieces more.`);
            break;
        }
        piece = input[++index];
    }
    if (cakePiece >= 0) {
        console.log(`${cakePiece} pieces are left.`);
    }
}
cakes(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
]);
console.log(`.......................`);
cakes(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);