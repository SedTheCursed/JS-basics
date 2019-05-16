function hello() {
    let name = "";
    
    while (!name) { name = prompt("Quel est ton nom ?").trim() }

    console.log(`Bonjour ${name}`);
}
