// based on the example of github/matthewjberger

const MESSAGE_SELECTOR = '.app-bar';
const INFO_BAR = '.info-bar';

const ADD_BOOK_BUTTON_ID = '#add-new-book-button';
const ADD_BLOGPOST_BUTTON_ID = '#add-new-blogpost-button';
const ADD_VIDEO_BUTTON_ID = '#add-new-video-button';

const BOOK_CLASS = '.book';
const BLOGPOST_CLASS = '.blogpost';
const VIDEO_CLASS = '.video';

const SHOW_DONE_ID = '#show-done-button';
const SHOW_UNDONE_ID = '#show-undone-button';
const SHOW_ALL_ID = '#show-all-button';

const DONE_TOGGLE_SELECTOR = "input[type=checkbox]";

class App {
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

    clickShowDoneButton() {
        return this.nightmare.click(SHOW_DONE_ID);
    }

    clickShowUndoneButton() {
        return this.nightmare.click(SHOW_UNDONE_ID)
    }

    clickShowAllButton() {
        return this.nightmare.click(SHOW_ALL_ID)
    }

    clickDoneToggle(attr1, attr2) {
        const CSSId = this._normalizeSelector(attr1, attr2);
        return this.nightmare.click("#" + CSSId + "-done").wait(500);
    }

    getCheckedCheckBoxes() {
        this.nightmare
            .click('#list-all-reading-tips')
            .wait(DONE_TOGGLE_SELECTOR);

        return this.nightmare.evaluate((selector) => {
            const elements = Array.from(document.querySelectorAll(selector));
            const content = elements.map(e => e.checked);
            return {
                content
            };
        }, DONE_TOGGLE_SELECTOR);
    }

    getInfoBar() {
        return this.nightmare.evaluate((selector) => {
            const element = document.querySelector(selector);
            
            return {
                message: element.innerText,
            };
        }, INFO_BAR);
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
            const content = elements.reduce((a, e) => "" + a + e.innerHTML, "");
            return {
                content,
            };
        }, BOOK_CLASS);
    }

    submitBookForm(author, title) {
        const bookKey = '#' + this._normalizeSelector(title, author);
        return this.nightmare.click('#submit-book').wait(bookKey);
    }

    clickDeleteBookButton(author, title) {
        const searchString = '#' + this._normalizeSelector(title, author);

        this.nightmare
            .click('#list-all-reading-tips')
            .wait(searchString + ' .deleteButton')

        return this.nightmare
            .click(searchString + ' .deleteButton')
            // this is not the best way of doing this but the api call takes time
            .wait(500);

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

    submitBlogpostForm(author, title) {
        const id = '#' + this._normalizeSelector(title, author);
        return this.nightmare.click('#submit-blogpost').wait(id);
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
            const content = elements.reduce((a, e) => "" + a + e.innerHTML, "");
            return {
                content,
            };
        }, VIDEO_CLASS);
    }

    submitVideoForm(title, url) {
        const id = '#' + this._normalizeSelector(title, url);
        return this.nightmare.click('#submit-video').wait(id);
    }

    _normalizeSelector(attr1, attr2) {
        return attr1.replace(/[^a-zA-Z0-9]/g, '') + attr2.replace(/[^a-zA-Z0-9]/g, '')
    }
}

module.exports = {
    App
};
