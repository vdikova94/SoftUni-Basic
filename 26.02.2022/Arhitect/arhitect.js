function arhitect(input) {
    let name = input[0];
    let brProject = input[1];
    let hours = brProject * 3;
    let text = (`The architect ${name} will need ${hours} hours to complete ${brProject} project/s.`);

    console.log(text);
}
arhitect(["Victoria", 5])