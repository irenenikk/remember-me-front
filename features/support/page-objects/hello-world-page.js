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

    submitBookForm() {
        return this.nightmare.click('#submit-book').wait(5000);
    }

    clickDeleteBookButton(author, title) {
      const searchString =  '#' + title.replace(/\s/g,'') + author.replace(/\s/g,'') +  ' .deleteButton' ;
      console.log(searchString);
        const bookID = this.nightmare.evaluate((searchString) => {
            const bookID = document.querySelector(searchString)+'.id';
            console.log(bookID);
            return {
                bookID,
            };
        }, searchString );
          console.log(bookID);
        return this.nightmare.click('#'+bookID).wait('.paper');
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
