import { Link } from "react-router-dom";
import { connect} from "react-redux";


const Nav = ({authedUser}) => {

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
      </ul>
    </nav>
  );
};

const mapStateToProps = ({authedUser}) => ({
  authedUser
});


export default connect(mapStateToProps)(Nav);