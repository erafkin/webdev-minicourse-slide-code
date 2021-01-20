import axios from 'axios';
const ActionTypes = {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION',
    GET_ALL_FRIENDS: 'GET_ALL_FRIENDS',
    // flag to handle any errors that arise
    API_ERROR: 'API_ERROR',
   };
   const API_URL = 'http://localhost:9090'
   const getAllFriends = () => {
        return (dispatch) => {
            axios.get(`${API_URL}/friends`)
            .then((res) => {
                console.log(res);
                dispatch({type: ActionTypes.GET_ALL_FRIENDS, payload: res.data.response})
            })
            .catch((error) => {
                dispatch({type:ActionTypes.API_ERROR})
            })
        }
    }
   const example = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.EXAMPLE_ACTION, payload: 'example'});
      }
    };


    

   export {
    ActionTypes,
    example,
    getAllFriends
    };
   
   
   
   