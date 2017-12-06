// based on the example of github/matthewjberger

const MESSAGE_SELECTOR = '.app-bar';

const ADD_BOOK_BUTTON_ID = '#add-new-book-button';
const ADD_BLOGPOST_BUTTON_ID = '#add-new-blogpost-button';
const ADD_VIDEO_BUTTON_ID = '#add-new-video-button';

const BOOK_CLASS = '.book';
const BLOGPOST_CLASS = '.blogpost';
const VIDEO_CLASS = '.video';

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

// BOOK
    clickAddBookButton() {
        return this.nightmare.click(ADD_BOOK_BUTTON_ID).wait('#book-title-input');
    }

    writeToBookAuthorInput(author) {
        return this.nightmare.type('#book-author-input', author)
    }

    writeToBookTitleInput(title) {
        return this.nightmare.type('#book-title-input', title)
    }

    writeToBookCommentInput(comment) {
        return this.nightmare.type('#book-comment-input', comment)
    }

    getBooks() {
        return this.nightmare.evaluate((selector) => {
            const elements = Array.from(document.querySelectorAll(selector));
            const content = elements.reduce((a, e) => "" + a + e.innerHTML);
            return {
                content,
            };
        }, BOOK_CLASS);
    }

    submitBookForm(author, title) {
        const bookKey =  '#' + title.replace(/\s/g,'') + author.replace(/\s/g,'')  ;
        return this.nightmare.click('#submit-book').wait(bookKey);
    }

    clickDeleteBookButton(author, title) {
        const searchString =  '#'+ title.replace(/\s/g,'') + author.replace(/\s/g,'') ;
        console.log(searchString);

// goto frontpage and make sure the right book is there
        this.nightmare
           .click('#list-all-reading-tips')
           .wait(searchString)
           .end();
           console.log('found the book');

           this.nightmare
              .click('#list-all-reading-tips')
              .wait(searchString + ' .deleteButton')
              .end();
              console.log('found the delete button');

          return  this.nightmare
            .click('#RikinkeltainentaivasKjellWesto .deleteButton')
            .wait('.app-bar');

    }



// BLOGPOST
    clickAddBlogpostButton() {
        return this.nightmare.click(ADD_BLOGPOST_BUTTON_ID).wait('#blogpost-title-input');
    }

    writeToBlogpostAuthorInput(author) {
        return this.nightmare.type('#blogpost-author-input', author)
    }

    writeToBlogpostTitleInput(title) {
        return this.nightmare.type('#blogpost-title-input', title)
    }

    writeToBlogpostLinkInput(link) {
        return this.nightmare.type('#blogpost-link-input', link)
    }

    writeToBlogpostCommentInput(comment) {
        return this.nightmare.type('#blogpost-comment-input', comment)
    }

    getBlogposts() {
        return this.nightmare.evaluate((selector) => {
            const elements = Array.from(document.querySelectorAll(selector));
            const content = elements.reduce((a, e) => "" + a + e.innerHTML);
            return {
                content,
            };
        }, BLOGPOST_CLASS);
    }

    submitBlogpostForm() {
        return this.nightmare.click('#submit-blogpost').wait(BLOGPOST_CLASS);
    }

// VIDEO
        clickAddVideoButton() {
            return this.nightmare.click(ADD_VIDEO_BUTTON_ID).wait('#video-title-input');
        }

        writeToVideoTitleInput(title) {
            return this.nightmare.type('#video-title-input', title)
        }

        writeToVideoLinkInput(link) {
            return this.nightmare.type('#video-link-input', link)
        }

        writeToVideoCommentInput(comment) {
            return this.nightmare.type('#video-comment-input', comment)
        }


        getVideos() {
            return this.nightmare.evaluate((selector) => {
                const elements = Array.from(document.querySelectorAll(selector));
                const content = elements.reduce((a, e) => "" + a + e.innerHTML);
                return {
                    content,
                };
            }, VIDEO_CLASS);
        }

        submitVideoForm() {
            return this.nightmare.click('#submit-video').wait(VIDEO_CLASS);
        }

}

module.exports = {
    HelloWorldPage
};
