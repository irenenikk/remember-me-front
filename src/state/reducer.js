import Api from '../utils/api';
import { combineReducers } from 'redux';
import formReducer from '../reducers/form-reducer';

export default combineReducers({
  form: formReducer,
});
