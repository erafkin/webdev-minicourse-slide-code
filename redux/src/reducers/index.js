import { combineReducers } from 'redux';
import friendReducer from './friend';

const rootReducer = combineReducers({
 friends: friendReducer,
});

export default rootReducer;


