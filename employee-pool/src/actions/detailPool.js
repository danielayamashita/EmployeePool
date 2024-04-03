export const GET_POOL_DETAILS = "GET_POOL_DETAILS";


export function showPoolDetails(pools,id) {
  return {
    type: GET_POOL_DETAILS,
    poolDetail:pools[id]
  };
}