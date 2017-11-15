import { createReducer } from 'redux-create-reducer';
import { CLICK } from '../state/actions';

const initialState = {
  value: false,
};

export default createReducer(initialState, {
  [CLICK](state, action) {
    return {
      ...state,
      value: !state.value,
    };
  },
});
