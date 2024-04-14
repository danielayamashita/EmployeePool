import { connect } from "react-redux";

const UserTag = (props) => {

    
  return (
    <tr>
      <td>
      <div className="container-two-cols">
          <img className="img-avatar" src={props.users[props.id].avatarURL} alt="avatar" />
          <div>
            <p>{props.users[props.id].name}</p>
            <p>{props.id}</p>
          </div>
        </div>
      </td>
      <td>{Object.keys(props.users[props.id].answers).length}</td>
      <td>{props.users[props.id].questions.length}</td>
      <td>{Object.keys(props.users[props.id].answers).length + props.users[props.id].questions.length}</td>
    </tr>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: authedUser,
  users,
});

export default connect(mapStateToProps)(UserTag);
