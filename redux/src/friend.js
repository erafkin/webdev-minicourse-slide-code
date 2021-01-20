import React from 'react'
import {example, getAllFriends} from './actions';
import { connect } from 'react-redux';

const Friend = (props) => {
    return(
        <div>
            <button onClick = {() => props.getAllFriends()}>
                click
            </button>
            <div>
                example:
                {JSON.stringify(props.allFriends)}
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
      friendExample: state.friends.example,
      allFriends:state.friends.allFriends
    };
   };

const mapDispatchToProps = (dispatch) => {
 return {
   example: () => {
     dispatch(example());
   },
   getAllFriends: () => {
    dispatch(getAllFriends());
  },
 };
};


export default connect(mapStateToProps, mapDispatchToProps)(Friend);
