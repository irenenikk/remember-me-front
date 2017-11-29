import { createReducer } from 'redux-create-reducer';
import {
  BOOKS_RECEIVED,
  BLOGPOSTS_RECEIVED,
  VIDEOS_RECEIVED,
  EDIT_BOOK,
  EDIT_VIDEO,
  EDIT_BLOGPOST,
  FINISH_BOOK_EDIT,
  UPDATE_BOOK_AUTHOR,
  UPDATE_BOOK_TITLE,
  UPDATE_BOOK_DESCRIPTION,
} from '../state/actions';

const initialState = {
  books: [],
  blogposts: [],
  videos: [],
};

export default createReducer(initialState, {
  [BOOKS_RECEIVED](state, action) {
    const books = action.books.map((b) => {
      return {
        id: b.id,
        title: b.title,
        author: b.author,
        description: b.description,
        comment: b.comment,
        type: b.type,
        edit: false,
      }
    });
    return {
      ...state,
      books,
    };
  },

  [BLOGPOSTS_RECEIVED](state, action) {
    const blogposts = action.blogposts.map((b) => {
      return {
        id: b.id,
        title: b.title,
        url: b.url,
        comment: b.comment,
        type: b.type,
        edit: false,
      }
    });
    return {
      ...state,
      blogposts,
    };
  },

  [VIDEOS_RECEIVED](state, action) {
    const videos = action.videos.map((v) => {
      return {
        id: v.id,
        title: v.title,
        url: v.url,
        comment: v.comment,
        type: v.type,
        edit: false,
      }
    });
    return {
      ...state,
      videos,
    };
  },
  [EDIT_BOOK](state, action) {
    const editable = action.id;
    const books = state.books.map((b) => {
      if (b.id === editable) {
        return {
          ...b,
          edit: true,
        }
      }
      return b;
    });
    return {
      ...state,
      books,
    }
  },
  [FINISH_BOOK_EDIT](state, action) {
    const editable = action.id;
    const books = state.books.map((b) => {
      if (b.id === editable) {
        return {
          ...b,
          edit: false,
        }
      }
      return b;
    });
    return {
      ...state,
      books,
    }
  },
  [UPDATE_BOOK_AUTHOR](state, action) {
    const editable = action.id;
    const books = state.books.map((b) => {
      if (b.id === editable) {
        return {
          ...b,
          author: action.input,
        };
      }
      return b;
    });
    return {
      ...state,
      books,
    }
  },
  [UPDATE_BOOK_TITLE](state, action) {
    const editable = action.id;
    const books = state.books.map((b) => {
      if (b.id === editable) {
        return {
          ...b,
          title: action.input,
        };
      }
      return b;
    });
    return {
      ...state,
      books,
    }
  },
  [UPDATE_BOOK_DESCRIPTION](state, action) {
    const editable = action.id;
    const books = state.books.map((b) => {
      if (b.id === editable) {
        return {
          ...b,
          description: action.input,
        };
      }
      return b;
    });
    return {
      ...state,
      books,
    }
  }
});
