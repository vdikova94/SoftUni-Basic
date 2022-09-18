function zoo(input) {
    let cat = input[1] * 4;
    let dog = input[0] * 2.5;
    let catAndDog = cat + dog;
    let all = (`${catAndDog} lv`)
    console.log(all);
}
zoo([5, 4])