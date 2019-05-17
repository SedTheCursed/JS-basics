class Entrepreneurs {
    constructor(array) {
        this.people = array;
    }

    //Search the people born in the 197* and returning a formatted texte about it
    bornInThe70() {
        let content = this.title("Entrepreneurs né dans les 70's&nbsp;") +
            this.people
                .filter(person => /^197\d$/.test(String(person.year)))
                .map(person => this.line(`${person.first} ${person.last}, année de naissance : ${person.year}`))
                .join("")

        return content + "</p>"
    }
    
    //standard function formatting a text
    mapping(string, callback) {
        let content = this.title(string) + 
                    this.people
                    .map(callback)
                    .join("");

        return content + "</p>"
    }
    
    identity() {
        return this.mapping(
                "Entrepreneurs américains&nbsp;:",
                person => this.line(`${person.first} ${person.last}`)
            );
    }
    
    ageIn2019() {
        return this.mapping(
                "Age en 2019&nbsp;:",
                person => this.line(`${person.first} ${person.last}&nbsp;: ${2019 - person.year}`)
            );
    }
    
    alphabeticalIdentity() {
        let content = this.title("Entrepreneurs par ordre alphabétique&nbsp;:") +
            this.people
                .sort((a, b) => (a.last > b.last) ? 1 : -1)
                .map((person) => this.line(`${person.last.toUpperCase()}, ${person.first}`))
                .join("")

        return content + "</p>"
    }

    title(text) {
        return `<p>> ${text}</br>`
    }

    line(text) {
        return `<span class="tab">${text}</span></br>`
    }
    
    perform() {
        return this.bornInThe70() +
                this.identity() +
                this.ageIn2019() +
                this.alphabeticalIdentity();
    }
}