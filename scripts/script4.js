class Entrepreneurs {
    constructor(array) {
        this.people = array;
    }

    bornInThe70() {
        return "Entrepreneurs né dans les 70's:\n" +
            this.people
                .filter(person => /^197\d$/.test(String(person.year)))
                .map(person => `\t${person.first} ${person.last}, année de naissance : ${person.year}\n`)
                .join("")
    }
    
    mapping(string, callback) {
        return `\n${string}\n` + 
                this.people
                    .map(callback)
                    .join("");
    }
    
    identity() {
        return this.mapping(
                "Entrepreneurs américains :",
                person => `\t${person.first} ${person.last}\n`
            );
    }
    
    ageIn2019() {
        return this.mapping(
                "Age en 2019 :",
                person => `\t${person.first} ${person.last} : ${2019 - person.year}\n`
            );
    }
    
    alphabeticalIdentity() {
        return "\nEntrepreneurs par ordre alphabétique : \n" +
            this.people
                .sort((a, b) => (a.last > b.last) ? 1 : -1)
                .map((person) => `\t${person.last.toUpperCase()}, ${person.first}\n`)
                .join("")
    }
    
    perform() {
        console.log(this.bornInThe70());
        console.log(this.identity());
        console.log(this.ageIn2019());
        console.log(this.alphabeticalIdentity());
    }
}