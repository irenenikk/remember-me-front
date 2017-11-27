import { createReducer } from 'redux-create-reducer';
import { BOOKS_RECEIVED, BLOGPOSTS_RECEIVED, VIDEOS_RECEIVED, } from '../state/actions';

const initialState = {
  books: [],
  blogposts: [],
  videos: [],
};

export default createReducer(initialState, {
  [BOOKS_RECEIVED](state, action) {
    return {
      ...state,
      books: action.books,
    };
  },

  [BLOGPOSTS_RECEIVED](state, action) {
    return {
      ...state,
      blogposts: action.blogposts,
    };
  },

  [VIDEOS_RECEIVED](state, action) {
    return {
      ...state,
      videos: action.videos,
    };
  },


});
