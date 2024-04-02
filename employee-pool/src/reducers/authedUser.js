import { SET_AUTHED_USER, USER_LOGIN } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {

    case SET_AUTHED_USER:
      console.log("SET_AUTHED_USER reducer");
      return action.id;

    case USER_LOGIN:
        var user_ids = Object.keys(action.users); 
        
        var login_user_id = null;
        user_ids.forEach((user_id) => {
            if(action.users[user_id].id == action.username){
                if (action.users[user_id].password == action.password){
                    
                    login_user_id = action.users[user_id].id
                }
            }
        });


        return login_user_id;
    default:
      return state;
  }
}
