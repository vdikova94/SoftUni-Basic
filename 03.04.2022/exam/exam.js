function examGrade(input) {
    let index = 0;
    let command = input[index];
    let judgeCount = Number(command);
    let alllGradeSum = 0;
    let allGradeCount = 0;
    index++;
    command = input[index];

    while (command !== "Finish") {
        let presentationName = command;
        index++;
        command = input[index];
        let grade = Number(command);
        let gradeSum = 0;
        let gradeCount = 0;
        let avgGrade = 0;
        for (let i = 1; i <= judgeCount; i++) {
            gradeSum += grade;
            gradeCount++;
            if (gradeCount === judgeCount) {
                break;
            }
            index++;
            command = input[index];
            grade = Number(command);
        }
        alllGradeSum += gradeSum;
        allGradeCount += gradeCount;
        avgGrade = gradeSum / judgeCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);
        index++;
        command = input[index];
    }

    console.log(`Student's final assessment is ${(alllGradeSum/allGradeCount).toFixed(2)}.`);
}
examGrade(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
]);