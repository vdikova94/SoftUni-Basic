function oldBook(input) {
    let searchBook = input[0];
    index = 1;
    let foundBook = input[index];

    while (foundBook !== "No More Books") {
        if (foundBook === searchBook) {
            console.log(`You checked ${index-1} books and found it.`);
            break;
        } else
            index++;
        foundBook = input[index];
    }
    if (foundBook === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index-1} books.`);
    }
}
oldBook(["Troy",
    "Stronger",
    "Life Style",
    "Troy"
]);