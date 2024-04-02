import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";
import pools from "./pools";

export default combineReducers({
  users,
  authedUser, 
  pools,
});
