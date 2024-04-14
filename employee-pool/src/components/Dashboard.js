import {useEffect} from "react";
import {getClassifiedPool} from "../actions/pools"

import { connect} from "react-redux";
import ToggleQuestions from "./ToggleQuestions";
// import {handleGetUsers,handleGetPools} from "../actions/shared"




const Dashboard = (props) => {
    useEffect(() => {
        props.dispatch(getClassifiedPool(props.pools,props.users[props.authedUser]))
      }, []);

    return (
        <div>
          
          
          <ToggleQuestions answeredPools={props.pools.answered} newPools={props.pools.new}/>            
        </div>
    );
}

const mapStateToProps = ({authedUser,users,pools}) => ({
    users,
    pools,
    authedUser
  });
export default connect(mapStateToProps)(Dashboard);