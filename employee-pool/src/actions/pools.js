import { handleGetUsers, handleGetPools } from "../actions/shared";
import { _saveQuestionAnswer,_saveQuestion } from "../utils/_DATA";
import { subimitVote, removeVote } from "./users";

export const GET_CLASSIFIED_POOLS = "GET_CLASSIFIED_POOLS";
export const GET_POOLS = "GET_POOLS";
export const ADD_POOL = "ADD_POOL";

export function getClassifiedPool(pools, user) {
  return {
    type: GET_CLASSIFIED_POOLS,
    pools,
    user,
  };
}

export function getPools(pool) {
  return {
    type: GET_POOLS,
    pool,
  };
}

export function addPool(pools){
  return {
    type: ADD_POOL,
    pools
  }
}

export function handleCreatePool(optionOneText, optionTwoText ,author){

  return (dispatch) => {

    return _saveQuestion({optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: author}).then((questions)=> dispatch(addPool(questions)));
   }
  };
 


export function handleAddVote(pool_id, user, answer) {
  return (dispatch) => {
    dispatch(subimitVote(pool_id, user, answer));

    return _saveQuestionAnswer({
      authedUser: user,
      qid: pool_id,
      answer: answer,
    })
      .then(() => dispatch(handleGetUsers()))
      .then(() => dispatch(handleGetPools()))
      .catch(() => {
        alert("There was an error. Try again.");
        dispatch(removeVote(pool_id, user));
      });
  };
}
