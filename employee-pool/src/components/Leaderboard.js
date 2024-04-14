
import { connect } from "react-redux";
import UserTag from "./UserTag";
import LoginPage from "./LoginPage";

const Leaderboard = (props) => {

  // Order users based on kpi
  const ranked_users = Object.keys(props.users);
  const kpi = ranked_users.map(
    (id) =>
      Object.keys(props.users[id].answers).length +
      Object.keys(props.users[id].questions).length
  );


  for (let i = 0; i < kpi.length - 1; i++) {
    for (let i = 0; i < kpi.length - 1; i++) {
      if (kpi[i+1] > kpi[i]) {
        // Switch
        var temp = ranked_users[i];
        ranked_users[i] = ranked_users[i + 1];
        ranked_users[i + 1] = temp;

        // Switch
        temp = kpi[i];
        kpi[i] = kpi[i + 1];
        kpi[i + 1] = temp;
      }
    }
  }



  return (
    <div>
      {props.authedUser ? (
        <table className="table-leaderboard ">
          <tbody>
            <tr>
              <td>Users</td>
              <td>Answered</td>
              <td>Created</td>
              <td>Score</td>
            </tr>
            {ranked_users.map((id) => (
              <UserTag key={id} id={id} />
            ))}
          </tbody>
        </table>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: authedUser,
  users,
});

export default connect(mapStateToProps)(Leaderboard);
