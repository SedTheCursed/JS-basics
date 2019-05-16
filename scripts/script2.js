function factorielle() {
    let number = 0;
    let factorial = 1;

    while (!number) {number = parseInt(prompt("De quel nombre veut tu calculer la factorielle ?"))}
    
    for(let i = 1; i<=number; i++) {factorial *= i}

    console.log(`Le résultat est : ${factorial}`);
}