import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import ErrorLogin from "./ErrorLogin";




const LoginPage = (props) => {



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangeUsername = (e) => {
    const text_string = e.target.value;
    setUsername(text_string);
  };

  const handleChangePassword = (e) => {
    const text_string = e.target.value;
    setPassword(text_string);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var user_ids = Object.keys(props.users);

    user_ids.forEach((user_id) => {
      if (props.users[user_id].id === username) {
        if (props.users[user_id].password === password) {
          var id = props.users[user_id].id;
          props.dispatch(setAuthedUser(id));
          // navigate(`/`)
        }
      }
    });

    setIsSubmitted(true);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="center">
      

         

      {isSubmitted && <ErrorLogin />}
      <h1>Employee Pool</h1>
      <form onSubmit={handleSubmit}>
        <h3>User</h3>
        <input
          id="name"
          data-testid="input-name"
          type="User"
          placeholder="User"
          value={username}
          onChange={handleChangeUsername}
        ></input>
        <h3>Password:</h3>
        <input
          data-testid="input-password"
          id="name"
          type="text"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        ></input>
        <br />
        <button data-testid="btn-submit" className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(LoginPage);
