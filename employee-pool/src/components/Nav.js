import { Link } from "react-router-dom";
import { connect} from "react-redux";
import {handleUserLogout} from "../actions/authedUser"


const Nav = ({dispatch,authedUser}) => {

  const logoutUser = () => {
    dispatch(handleUserLogout());
  }
 
  console.log(authedUser)
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to={`/Dashboard/${authedUser}`}>Home</Link>
        </li>
        <li>
          <Link to={`/leaderboard/${authedUser}`}>Leaderboard</Link>
        </li>
        <li>
          <Link to={`/new/${authedUser}`}>New</Link>
        </li>

        <li>
          <Link to={`/`} onClick={logoutUser}>Logout</Link>
        </li>

        <li>
          <span>{authedUser}</span>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({authedUser}) => ({
  authedUser
});


export default connect(mapStateToProps)(Nav);