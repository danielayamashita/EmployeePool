import { connect} from "react-redux";

const PoolCard = (props) => {


    const pool = props.pools.pools[props.poolId]
    var date = new Date(pool.timestamp);
    console.log(date.toGMTString())

    return (
        <div className="pool-card">
            <p key="author">{pool.author}</p>
            <p key="date">{date.toGMTString()}</p>
            <button>Show</button>
        </div>
    );
}

const mapStateToProps = ({pools}) => ({
    pools,
  });

export default connect(mapStateToProps)(PoolCard);