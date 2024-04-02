export const GET_CLASSIFIED_POOLS = "GET_CLASSIFIED_POOLS";
export const GET_POOLS = "GET_POOLS";

export function getClassifiedPool(pools, user) {
  return {
    type: GET_CLASSIFIED_POOLS,
    pools,
    user,
  };
}

export function getPools(pool){
    return {
        type: GET_POOLS,
        pool
    }
}
