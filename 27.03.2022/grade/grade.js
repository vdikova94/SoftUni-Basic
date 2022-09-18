function gradeExam(input) {
    let maxBadGrade = input[0];
    let badGradeCount = 0;
    let goodGradeCount = 0;
    let grade = 0;
    let gradeCount = 0;
    let sumGrade = 0;
    let index = 1;
    let task = input[index];


    while (badGradeCount < maxBadGrade) {
        index++;
        grade = Number(input[index]);
        if (grade <= 4) {
            badGradeCount++;
        } else {
            goodGradeCount++;
        }
        sumGrade += grade;
        index++;
        task = input[index];

        if (task === "Enough") {
            gradeCount = goodGradeCount + badGradeCount;
            console.log(`Average score: ${(sumGrade/gradeCount).toFixed(2)}`);
            console.log(`Number of problems: ${(index-1)/2}`);
            console.log(`Last problem: ${task = input[index-2]}`);
            break;
        }
    }
    if (badGradeCount >= maxBadGrade) {
        console.log(`You need a break, ${badGradeCount} poor grades.`);
    }
}
gradeExam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
])