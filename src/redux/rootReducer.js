import {combineReducers} from 'redux';
import localReducer from './Local/local.reducer';
import userReducer from './User/user.reducer';

export default combineReducers({
  user: userReducer,
  local: localReducer,
});
