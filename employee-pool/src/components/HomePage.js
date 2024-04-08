import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";

const HomePage = (props) => {
  return <div>{props.authedUser ? <Dashboard /> : <LoginPage />}</div>;
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(HomePage);
