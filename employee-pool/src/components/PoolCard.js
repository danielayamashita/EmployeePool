import { connect} from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {showPoolDetails} from "../actions/detailPool"

const PoolCard = (props) => {

    const pool = props.pools.pools[props.poolId]

    const handleSubmit = () => {

        navigate(`/question/${pool.id}`)
        props.dispatch(showPoolDetails(props.pools.pools,pool.id))
    }

    const navigate = useNavigate();

    
    var date = new Date(pool.timestamp);

    return (
        <div className="pool-card">
            <p key="author">{pool.author}</p>
            <p key="date">{date.toGMTString()}</p>
            <button onClick={handleSubmit}>Show</button>
        </div>
    );
}

const mapStateToProps = ({pools}) => ({
    pools,
  });

export default connect(mapStateToProps)(PoolCard);