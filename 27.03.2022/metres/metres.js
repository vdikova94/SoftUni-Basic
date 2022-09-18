function moving(input) {
    let widht = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let freeSpace = widht * length * hight;
    let index = 3;
    let box = input[index];

    while (box != "Done") {
        box = Number(box);
        freeSpace -= box;
        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        box = input[++index];
    }
    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
]);