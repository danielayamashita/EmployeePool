export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_LOGIN = "USER_LOGIN";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}



