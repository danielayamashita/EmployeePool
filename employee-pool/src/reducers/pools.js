import { GET_CLASSIFIED_POOLS, GET_POOLS, ADD_POOL } from "../actions/pools";


export default function pools(state = {new:[], answered:[]}, action) {
  switch (action.type) {
    case GET_POOLS:
      

      
      return { ...state, pools: action.pool };

    case GET_CLASSIFIED_POOLS:
      // Sort pools 
      function compareTimestamp(pool1, pool2) {
        return  action.pools.pools[pool2].timestamp - action.pools.pools[pool1].timestamp;
      }

      var allPoolsID = Object.keys(action.pools.pools).sort(compareTimestamp);


      var answeredPools = allPoolsID.filter((pool) => Object.keys(action.user.answers).includes(pool))
  
      var newPools = allPoolsID.filter(
        (pool) => !answeredPools.includes(pool)
      );
      return { ...state, answered: answeredPools, new: newPools };
    
    case ADD_POOL:
      
      state.pools[action.pools.id] = action.pools
      console.log("add pool ",state);
      console.log("ID ",action.pools.id);
      return state;

    default:
      return state;
  }
}
