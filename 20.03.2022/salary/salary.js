function salary(arg) {
    let openTab = Number(arg[0]);
    let salary = Number(arg[1]);
    let argLength = arg.length;

    for (let i = 2; i < argLength; i++) {
        let currentTab = arg[i];

        switch (currentTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}


salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
])