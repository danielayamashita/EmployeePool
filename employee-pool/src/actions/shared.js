import { _getUsers,_getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./users";
import {getPools} from "./pools"



export function handleGetUsers() {
  return (dispatch) => {
    return _getUsers().then((users) => {      
      dispatch(receiveUsers(users));
    });
  };
}

export function handleGetPools(){
  return (dispatch) => {

    return _getQuestions().then((pool) => {
      dispatch(getPools(pool));
    });
  };
}


