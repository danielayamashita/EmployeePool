import { RECEIVE_USERS,SUBIMIT_VOTE,REMOVE_VOTE} from "../actions/users";

export default function users(state = {}, action) {

  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SUBIMIT_VOTE:
      state[action.user].answers[action.pool_id] = action.answer;
      return {...state};
    case REMOVE_VOTE:
      if (Object.keys(state[action.user].answers).includes(action.pool_id)){
        delete state[action.user].answers[action.pool_id]
      }
      return {...state};
    default:
      return state;
  }
}