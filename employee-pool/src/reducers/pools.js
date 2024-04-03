import { GET_CLASSIFIED_POOLS, GET_POOLS } from "../actions/pools";


export default function pools(state = {new:[], answered:[]}, action) {
  switch (action.type) {
    case GET_POOLS:

      return { ...state, pools: action.pool };
    case GET_CLASSIFIED_POOLS:
      var answeredPools = Object.keys(action.user.answers);

      var newPools = Object.keys(action.pools.pools).filter(
        (pool) => !answeredPools.includes(pool)
      );
      return { ...state, answered: answeredPools, new: newPools };

    default:
      return state;
  }
}
