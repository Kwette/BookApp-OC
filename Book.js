 class Book {
    constructor(title, author, pages, description, currentPage, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = 1;
        this.read = false;
    }
    readBook(number) {
      if (number > this.pages ) {
            alert('Could not find this page number');
            return this.currentPage
        } else {
            this.currentPage = number
              if (this.currentPage == this.pages) {
                alert('The book is readed now');
                return this.read = true;
              }
        }

    }

}
export { Book };
