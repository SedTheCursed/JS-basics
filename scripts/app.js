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
        this.render(
            new Genome("CCGUCGUUGCGCUACAGC").presentation() +
            new Genome("CCUCGCCGGUACUUCUCG").presentation()
        );
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