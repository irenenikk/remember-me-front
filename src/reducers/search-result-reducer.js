import { createReducer } from 'redux-create-reducer';
import { BOOKS_RECEIVED } from '../state/actions';

const initialState = {
  books: []
};

export default createReducer(initialState, {
  [BOOKS_RECEIVED](state, action) {
    return {
      ...state,
      books: action.books,
    };
  },
});
