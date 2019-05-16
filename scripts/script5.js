class Library {
    constructor(array) {
        this.books = array;
    }

    allRentedOnce() {
        const verb = (this.books.filter( book => book.rented === 0).length) ?
            "n'ont pas" :
            "ont";

        return `<p>> Tous les livres ${verb} été emprunté au moins une fois.</p>`;
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

        return `<p>> ${target.title} (${target.id}) ${string} avec ${target.rented} emprunts</p>`;
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
        return `<p>> Le livre ayant l'ID ${id} est ` +
            this.findBook(id).title + "</p>";
    }

    removeBook(id) {
        const bookToRemove = this.findBook(id);

        if (bookToRemove) {
            this.books.splice(this.books.indexOf(bookToRemove),1);

            return `<p>> ${bookToRemove.title} (ID : ${id}) a bien été retiré de la base de données</p>`;
        } else {
            return `<p>> La bibliothèque ne possède pas de livre avec l'ID ${id}</p>`;
        }   
    }

    sortedBooks() {
        return "<p>> Voici les livres de la bibliothèque :<br/>" +
            this.books.sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else if (b.title > a.title) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .map(book => `<span class="tab">${book.title}</span><br/>`)
            .join("")
    }

    perform() {
        return this.allRentedOnce() +
        this.moreRented() +
        this.lessRented() +     
        this.showFoundBook(873495)+
        this.removeBook(133712)+
        this.sortedBooks()
    }
}