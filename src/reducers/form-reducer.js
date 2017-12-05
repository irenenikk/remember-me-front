import { createReducer } from 'redux-create-reducer';
import {
  BOOK_WRITER_CHANGED,
  BOOK_TITLE_CHANGED,
  BOOK_DESCRIPTION_CHANGED,
  BOOK_COMMENT_CHANGED,
  BLOGPOST_TITLE_CHANGED,
  BLOGPOST_AUTHOR_CHANGED,
  BLOGPOST_URL_CHANGED,
  BLOGPOST_COMMENT_CHANGED,
  VIDEO_TITLE_CHANGED,
  VIDEO_URL_CHANGED,
  VIDEO_COMMENT_CHANGED,
} from '../state/actions/form-actions';
import {
  NEW_MESSAGE,
  RESET_MESSAGE,
} from '../state/actions/message-actions';

const initialState = {
  book: {
    title: "",
    author: "",
    description: "",
    comment: "",
    read: false,
  },
  blogpost: {
    title: "",
    author: "",
    url: "",
    comment: "",
    read: false,
  },
  video: {
    title: "",
    url: "",
    comment: "",
    read: false,
  },
  message: "",
};

export default createReducer(initialState, {
  [BOOK_WRITER_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        author: action.input,
      }
    };
  },
  [BOOK_TITLE_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        title: action.input,
      }
    };
  },
  [BOOK_DESCRIPTION_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        description: action.input,
      }
    };
  },
  [BOOK_COMMENT_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        comment: action.input,
      }
    };
  },
  [BLOGPOST_TITLE_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        title: action.input,
      }
    };
  },
  [BLOGPOST_AUTHOR_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        author: action.input,
      }
    };
  },
  [BLOGPOST_URL_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        url: action.input,
      }
    };
  },
  [BLOGPOST_COMMENT_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        comment: action.input,
      }
    };
  },
  [VIDEO_TITLE_CHANGED](state, action) {
    return {
      ...state,
      video: {
        ...state.video,
        title: action.input,
      }
    };
  },
  [VIDEO_URL_CHANGED](state, action) {
    return {
      ...state,
      video: {
        ...state.video,
        url: action.input,
      }
    };
  },
  [VIDEO_COMMENT_CHANGED](state, action) {
    return {
      ...state,
      video: {
        ...state.video,
        comment: action.input,
      }
    };
  },
  [NEW_MESSAGE](state, action) {
    return {
      ...state,
      message: action.message,
    };
  },
  [RESET_MESSAGE](state, action) {
    return {
      ...state,
      message: "",
    }
  }
});
