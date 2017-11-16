import { createReducer } from 'redux-create-reducer';
import { CLICK , INPUT_CHANGED} from '../state/actions';

const initialState = {
  value: false,
  inputValue: "moi",
};

export default createReducer(initialState, {
  [CLICK](state, action) {
    return {
      ...state,
      value: !state.value,
    };
  },
  [INPUT_CHANGED](state, action) {
    return {
      ...state,
      inputValue: action.input,
    };
  }
});
