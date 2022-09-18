function steps(input) {
    let purposeSteps = 10000;
    let index = 0;
    let inputSteps = input[index];
    let allSteps = 0;

    while (inputSteps !== "Going home") {
        allSteps += Number(inputSteps);
        index++;
        inputSteps = input[index];

        if (allSteps >= purposeSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${allSteps - purposeSteps} steps over the goal!`);
            break;
        }
    }
    if (inputSteps === "Going home") {
        inputSteps = input[index + 1];
        allSteps += Number(inputSteps);
        if (allSteps >= purposeSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${allSteps - purposeSteps} steps over the goal!`);
        } else {
            console.log(`${purposeSteps - allSteps} more steps to reach goal.`);
        }
    }
}
steps(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
]);