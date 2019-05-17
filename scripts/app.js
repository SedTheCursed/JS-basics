//Class calling every script and rendering their result on the HTML terminal
class App {

    hello () {
        this.render(hello());
    }

    factorial() {
        this.render(factorielle());
    }

    pyramid() {
        this.render(pyramid());
    }

    entrepreneurs() {
        this.render(new Entrepreneurs(businesspeople).perform());
    }

    library() {
        this.render(new Library(books).perform());
    }

    genome() {
        //"CCGUCGUUGCGCUACAGC" => "Proline-Sérine-Leucine-Arginine-Tyrosine-Sérine"
        //"CCUCGCCGGUACUUCUCG" => "Proline-Arginine-Arginine-Tyrosine-Phénylalanine-Sérine"
        const arn = prompt("Quel ARN voulez-vous séquencer ?")
        this.render(new Genome(arn).presentation());
    }

    adoBot() {
        this.render(new AdoBot().chat());
    }

    render(content) {
        const terminal = document.querySelector(".card.terminal");
        terminal.innerHTML = content;
    }
}

app = new App();