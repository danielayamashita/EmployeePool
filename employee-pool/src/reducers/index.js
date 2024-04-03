import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";
import pools from "./pools";
import detailPool from "./detailPool"

export default combineReducers({
  users,
  authedUser, 
  pools,
  detailPool,
});
