import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleUserLogout } from "../actions/authedUser";

const Nav = ({ dispatch, authedUser, users }) => {
  const logoutUser = () => {
    dispatch(handleUserLogout());
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/leaderboard`}>Leaderboard</Link>
        </li>
        <li>
          <Link to={`/add`}>New</Link>
        </li>

        <div className="nav-right">
          

          <li>
            {authedUser ? (
              <Link to={`/`} onClick={logoutUser}>
                Logout
              </Link>
            ) : (
              <div></div>
            )}
          </li>
          <li>
            {authedUser ? (
              <img className="img-avatar-authed-user" src={users[authedUser].avatarURL} alt="avatar" />
     
            ) : (
              <div></div>
            )}
          </li>

          <li>
            <span>{authedUser}</span>
          </li>
        </div>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(Nav);
