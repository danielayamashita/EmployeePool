export const RECEIVE_USERS = "RECEIVE_USERS";
export const SUBIMIT_VOTE = "SUBIMIT_VOTE"
export const REMOVE_VOTE = "REMOVE_VOTE"



export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}


export function subimitVote(pool_id,user,answer){
  return {
    type: SUBIMIT_VOTE,
    pool_id,
    user,
    answer
  }
}

export function removeVote(pool_id,user){
  return {
    type: REMOVE_VOTE,
    pool_id,
    user
  }
}




