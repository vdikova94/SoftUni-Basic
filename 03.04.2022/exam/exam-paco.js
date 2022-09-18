function examGrade(input) {
    const judgeCount = Number(input[0]);
    let currentIndex = 1;
    let totalStudentsGrade = 0;
    let gradesCount = 0;

    while (input[currentIndex] !== 'Finish') {
        const presentationName = input[currentIndex];
        currentIndex++;
        let studentGrade = 0;

        for (let i = currentIndex; i < currentIndex + judgeCount; i++) {
            studentGrade += Number(input[i]);
            gradesCount++;
        }

        console.log(presentationName + ' - ' + (studentGrade / judgeCount).toFixed(2) + ".");

        totalStudentsGrade += Number(studentGrade);
        currentIndex += judgeCount;
    }

    console.log("Student's final assessment is " + (totalStudentsGrade / gradesCount).toFixed(2) + ".");
}

examGrade(["3", // number of people ==> 0
    "Arrays", // presentation name  ==> 1
    "4.53", // -\                   ==> 2
    "5.23", // -- grades            ==> 3
    "5.00", // -/                   ==> 4
    "Lists", // presentation name   ==> 5
    "5.83", // ===                  ==> 6
    "6.00", // ===                  ==> 7
    "5.42", // ===                  ==> 8
    "Finish" // end of iterations   ==> 9
]);