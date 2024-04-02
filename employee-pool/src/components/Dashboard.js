import Nav from "./Nav"
import PoolGroup from "./PoolGroup"
import {useEffect} from "react";
import {getClassifiedPool} from "../actions/pools"

import { connect} from "react-redux";

const Dashboard = (props) => {
    useEffect(() => {

        props.dispatch(getClassifiedPool(props.pools,props.users[props.authedUser]))
      }, []);

    return (
        <div>
            <Nav/>
            <PoolGroup type="New Questions" poolIds={props.pools.new}/>
            <PoolGroup type="Done" poolIds={props.pools.answered}/>
            
        </div>
    );
}

const mapStateToProps = ({authedUser,users,pools}) => ({
    users,
    pools,
    authedUser
  });
export default connect(mapStateToProps)(Dashboard);