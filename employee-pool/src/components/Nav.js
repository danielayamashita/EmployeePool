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
          

          {/* <img src={} alt={`Avatar of ${authedUser}`} className="avatar" /> */}
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
              <img scr={users[authedUser].avatarURL} alt="Avatar" />
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
