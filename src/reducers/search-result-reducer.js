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
  UPDATE_VIDEO_URL,
  UPDATE_VIDEO_TITLE,
  UPDATE_BLOGPOST_URL,
  UPDATE_BLOGPOST_TITLE
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
  [EDIT_BLOGPOST](state, action) {
    const editable = action.id;
    const blogposts = state.blogposts.map((b) => {
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
      blogposts,
    }
  },
  [EDIT_VIDEO](state, action) {
    const editable = action.id;
    const videos = state.videos.map((v) => {
      if (v.id === editable) {
        return {
          ...v,
          edit: true,
        }
      }
      return v;
    });
    return {
      ...state,
      videos,
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
  },
  [UPDATE_VIDEO_TITLE](state, action) {
    const editable = action.id;
    const videos = state.videos.map((v) => {
      if (v.id === editable) {
        return {
          ...v,
          title: action.input,
        };
      }
      return v;
    });
    return {
      ...state,
      videos,
    }
  },
  [UPDATE_VIDEO_URL](state, action) {
    const editable = action.id;
    const videos = state.videos.map((v) => {
      if (v.id === editable) {
        return {
          ...v,
          title: action.input,
        };
      }
      return v;
    });
    return {
      ...state,
      videos,
    }
  },
  [UPDATE_BLOGPOST_TITLE](state, action) {
    const editable = action.id;
    const blogposts = state.blogposts.map((b) => {
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
      blogposts,
    }
  },
  [UPDATE_BLOGPOST_URL](state, action) {
    const editable = action.id;
    const blogposts = state.blogposts.map((b) => {
      if (b.id === editable) {
        return {
          ...b,
          url: action.input,
        };
      }
      return b;
    });
    return {
      ...state,
      blogposts,
    }
  }
});
