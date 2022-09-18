function aquarium(input) {

    let lenght = Number(input[0]);
    let wight = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3])
    let procents = procent / 100;

    let capacity = lenght * wight * height;
    let capacityLitres = capacity * 0.001;

    let allCapacity = capacityLitres * (1 - procents);
    console.log(allCapacity);

}
aquarium(["85", "75", "47", "17"])