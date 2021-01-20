import { ActionTypes } from '../actions';
const initialState = {
 example: null,
 allFriends:null,
};
const FriendReducer = (state = initialState, action) => {
 switch (action.type) {
        case ActionTypes.EXAMPLE_ACTION:
             return { ...state, example: action.payload };
        case ActionTypes.GET_ALL_FRIENDS:
     		return { ...state, allFriends: action.payload };
        default:
     		return state;
 }
};
export default FriendReducer;


