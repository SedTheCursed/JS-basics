//Function asking a number and calculing its factorial (the product of all the integer between 0 and it) 
function factorielle() {
    let number = 0;
    let factorial = 1;

    while (!number ||  number<= 0) {number = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"))}
    
    for(let i = 1; i<=number; i++) {factorial *= i}

    return `<p>>La factorielle de ${number} est ${factorial}</p>`;
}