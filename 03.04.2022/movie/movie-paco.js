function movie(input) {
    let index = 0;
    let totalTickets = 0;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (input[index] !== 'Finish') {
        // console.log('Current element at the beggining: ' + input[index]);

        const name = input[index];
        index++;
        const limit = Number(input[index]);
        index++;
        let totalMovieTickets = 0;

        // console.log(totalMovieTickets);
        while (input[index] !== 'End' && input[index] !== 'Finish' && totalMovieTickets < limit) {
            const currentTicketType = input[index];
            // console.log(currentTicketType);
            index++;
            if (totalMovieTickets >= limit) {
                continue;
            }

            totalTickets++;
            totalMovieTickets++;

            switch (currentTicketType) {
                case 'student':
                    studentTickets++;
                    break;

                case 'kid':
                    kidTickets++;
                    break;

                case 'standard':
                    standardTickets++;
                    break;
            }
        }

        console.log(name + " - " + (totalMovieTickets / limit * 100).toFixed(2) + '% full.');
        // console.log(input[index])
        if (input[index] === 'Finish') {
            break;
        } else if (input[index] === 'End') {
            index++;
        }
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
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

console.log('------------------')

movie(['Shutter Island',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Rush',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Deadpool',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Finish'
]);