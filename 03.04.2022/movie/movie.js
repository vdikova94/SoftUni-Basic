function movie(input) {
    let movieName = " ";
    let ticketType = " ";
    let studentTicetCount = 0;
    let standardTicetCount = 0;
    let kidsTicetCount = 0;
    let totalTickets = 0;
    let freeSpaces = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Finish") {
        let fullSpace = 0;
        movieName = command;
        command = input[++index];
        freeSpaces = Number(command);
        command = input[++index];
        ticketType = command;
        while (ticketType !== "End" || ticketType !== "Finish") {
            switch (ticketType) {
                case "student":
                    studentTicetCount++;
                    break;
                case "standard":
                    standardTicetCount++;
                    break;
                case "kid":
                    kidsTicetCount++;
                    break;
            }

            totalTickets = studentTicetCount + standardTicetCount + kidsTicetCount;
            ticketType = input[++index];
        }
        if (freeSpaces < totalTickets) {
            break;
        }
        fullSpace = (totalTickets / freeSpaces * 100).toFixed(2);
        console.log(`${movieName}: ${fullSpace}% full. `);
        if (command === "Finish") {
            break;
        } else {
            command = input[++index];
        }
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTicetCount / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicetCount / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTicetCount / totalTickets * 100).toFixed(2)}% kids tickets.`);

}
movie(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
]);