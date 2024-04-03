import { GET_POOL_DETAILS} from "../actions/detailPool";

export default function detailPool(state = {}, action) {

  switch (action.type) {
    case GET_POOL_DETAILS:
      return {
        ...state,
        ...action.poolDetail,
      };
    default:
      return state;
  }
}