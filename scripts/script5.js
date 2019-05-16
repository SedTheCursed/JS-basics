class Library {
    constructor(array) {
        this.books = array;
    }

    allRentedOnce() {
        const verb = (this.books.filter( book => book.rented === 0).length) ?
            "n'ont pas" :
            "ont";

        return `Tous les livres ${verb} été emprunté au moins une fois.`;
    }

    rentalComparison(string, less = false ) {
        let target = this.books[0];
        let rental = this.books[0].rented;

        books.forEach(book => {
            const condition = (less) ? 
                                book.rented < rental : 
                                book.rented > rental;
            if (condition) {
                target = book;
                rental = book.rented;
            }
        });

        return `${target.title} (${target.id}) ${string} avec ${target.rented} emprunts`;
    }

    moreRented() {
        return this.rentalComparison("est le livre le plus emprunté");
    }

    lessRented() {
        return this.rentalComparison("est le livre le moins emprunté", true);
    }

    findBook(id) {
        return this.books.find(book => book.id === id);
    }

    showFoundBook(id) {
        return `Le livre ayant l'ID ${id} est ` +
            this.findBook(id).title;
    }

    removeBook(id) {
        const bookToRemove = this.findBook(id);

        if (bookToRemove) {
            this.books.splice(this.books.indexOf(bookToRemove),1);

            return `${bookToRemove.title} (ID : ${id}) a bien été retiré de la base de données`;
        } else {
            return `La bibliothèque ne possède pas de livre avec l'ID ${id}`;
        }   
    }

    sortedBooks() {
        return "\nVoici les livres de la bibliothèque :\n" +
            this.books.sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else if (b.title > a.title) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .map(book => `\t${book.title}\n`)
            .join("")
    }

    perform() {
        console.log(this.allRentedOnce());
        console.log(this.moreRented());
        console.log(this.lessRented());     
        console.log(this.showFoundBook(873495));
        console.log(this.removeBook(133712));
        console.log(this.sortedBooks())
    }
}