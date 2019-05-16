function hello() {
    let name = "";
    
    while (!name) { name = prompt("Quel est ton nom ?").trim() }

    return `<p>> Bonjour ${name}&nbsp;!</p>`;
}
