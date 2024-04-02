export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const USER_LOGIN = "USER_LOGIN "; 
export const USER_LOGOUT = "USER_LOGOUT "; 

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleUserLogout(){
    return  {
      type: USER_LOGOUT,
    };
  }
