export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const USER_LOGIN = "USER_LOGIN "; 

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleUserLogin(users,user,password){
    return  {
      type: USER_LOGIN,
      users,
      username: user,
      password: password,
    };
  }
