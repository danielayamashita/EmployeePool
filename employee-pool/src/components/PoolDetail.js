import { connect} from "react-redux";
import Nav from "./Nav";
import Option from "./Option"


const PoolDetail = (props) => {



    return (
        <div>
            <Nav/>
            <h3 className="center">{`Pool by ${props.detail.author}`}</h3>

            <h3 className="center">Would You Rather</h3>

            <div className="center">
                <Option type="optionOne"/>

                <Option type="optionTwo"/>
                
            </div>
        </div>
    );
}



const mapStateToProps = ({detailPool,pools,authedUser,users}) => ({
    users: users,
    authedUser: authedUser,
    detail: detailPool,
    allPools: pools
  });

export default connect(mapStateToProps)(PoolDetail);