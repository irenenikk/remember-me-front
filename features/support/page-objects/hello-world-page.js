// pased on the example of github/matthewjberger

const MESSAGE_SELECTOR = '.app-bar';
const ADD_BOOK_BUTTON_ID = '#add-new-book-button';
const BOOK_CLASS = '.book';

class HelloWorldPage {
    constructor(nightmare) {
        this.nightmare = nightmare;
    }

    setHost(host) {
        this.host = host;
    }

    loadPage() {
        const path = `${this.host}`;

        return this.nightmare
            .goto(path)
            .wait('.app-bar');
    }

    getPageMessage() {
        return this.nightmare.evaluate((selector) => {
            const element = document.querySelector(selector);

            return {
                message: element.innerText
            };
        }, MESSAGE_SELECTOR);
    }

    clickAddBookButton() {
        return this.nightmare.click(ADD_BOOK_BUTTON_ID).wait('#book-title-input');
    }

    writeToBookAuthorInput(author) {
        return this.nightmare.type('#book-author-input', author)
    }

    writeToBookTitleInput(title) {
        return this.nightmare.type('#book-title-input', title)
    }

    getBooks() {
        return this.nightmare.evaluate((selector) => {
            const elements = Array.from(document.querySelectorAll(selector));
            return {
                content: elements[elements.length-1].innerHTML
            };
        }, BOOK_CLASS);
    }

    submitBookForm() {
        return this.nightmare.click('button[type=submit]').wait(500).wait(BOOK_CLASS);
    }
}

module.exports = {
    HelloWorldPage
};
