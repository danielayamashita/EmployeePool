import { connect} from "react-redux";
import PoolCard from "./PoolCard";
import { useEffect} from "react";


const PoolGroup = (props) => {

    return (
        <div>
           <h3 className="center">{props.type}</h3>
            <div className="container-pool">
          
                {props.poolIds.map((poolId) => (
                    poolId && <PoolCard key={poolId} poolId={poolId}/>
                )) }
                
            
            </div>
        </div>
    );
}

const mapStateToProps = ({authedUser,users,pools}) => ({
    users,
    pools,
    authedUser
  });

export default connect(mapStateToProps)(PoolGroup);