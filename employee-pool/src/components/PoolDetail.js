import { connect } from "react-redux";
import Nav from "./Nav";
import Option from "./Option";
import LoginPage from "./LoginPage";
import ErrorPage from "./ErrorPage";

const PoolDetail = (props) => {
  return (
    <div>
    {props.detail && props.authedUser?
    <div>
      {props.authedUser ? (
        <div className="center" >
          <h3 className="center">{`Pool by ${props.detail.author}`}</h3>
          <img scr={props.users[props.authedUser].avatarURL} alt="Avatar" />

          <h3 className="center">Would You Rather</h3>

          <div className="center">
            <Option type="optionOne" />

            <Option type="optionTwo" />
          </div>
        </div>
      ) : (
        <LoginPage />

        
      )}
    </div>
    :
    <div><ErrorPage/></div>
    }
    </div>
  );
};

const mapStateToProps = ({ detailPool, pools, authedUser, users }) => ({
  users: users,
  authedUser: authedUser,
  detail: detailPool,
  allPools: pools,
});

export default connect(mapStateToProps)(PoolDetail);
