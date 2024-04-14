import { connect } from "react-redux";
import Option from "./Option";
import LoginPage from "./LoginPage";
import ErrorPage from "./ErrorPage";

const PoolDetail = (props) => {


  return (
    <div>
    {props.detail && props.authedUser?
    <div>
      {props.detail.id ? (
        <div className="center" >
          <h3 className="center">{`Pool by ${props.detail.author}`}</h3>
          <img className="img-avatar" src={props.users[props.detail.author].avatarURL} alt="avatar" />
         

          <h3 className="center">Would You Rather</h3>

          <div className="center">
            <Option type="optionOne" />

            <Option type="optionTwo" />
          </div>
        </div>
      ) : (
        <ErrorPage />

        
      )}
    </div>
    :
    <div><LoginPage/></div>
    }
    </div>
  );
};

const mapStateToProps = ({ detailPool, pools, authedUser, users }) => ({
  users: users,
  authedUser: authedUser,
  detail: detailPool,
});

export default connect(mapStateToProps)(PoolDetail);
