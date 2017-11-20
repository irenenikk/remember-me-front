export const CLICK = 'CLICK';
export const INPUT_BOOKWRITER_CHANGED = 'INPUT_BOOKWRITER_CHANGED';
export const INPUT_BOOKTITLE_CHANGED = 'INPUT_BOOKTITLE_CHANGED';
export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';

export function clickAction() {
  return {
    type: CLICK,
  };
}

export function inputBookWriterChangedAction(input) {
  return {
    input: input,
    type: INPUT_BOOKWRITER_CHANGED,
  };
}

export function inputBookTitleChangedAction(input) {
  return {
    input: input,
    type: INPUT_BOOKTITLE_CHANGED,
  };
}

export function getBooksAction() {
  return async function getter(dispatch, getState, api) {
    api.getBooks()
       .then(
         (response) => {
          dispatch(booksReceivedAction(response));
         }
       , () => {
         console.info("Couldn't fetch books");
       })
  };
}

export function postBookAction() {
  return async function submitter(dispatch, getState, api) {
    api.postBook(getState().form)
    .then(
      (response) => {
        console.info("posting successful");
      },
      (error) => {
        console.info("Posting book failed");
      },
    );
  };

}

export function booksReceivedAction(books) {
  return {
    books,
    type: BOOKS_RECEIVED,
  }
}
