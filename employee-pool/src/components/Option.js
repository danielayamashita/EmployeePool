import { FaCircleCheck } from "react-icons/fa6";
import { connect} from "react-redux";
import {handleAddVote} from "../actions/pools"

const Option = (props) => {

    // const answer = props.allPools.answered.includes(props.detail.id) ? props.users[props.authedUser].answers[props.detail.id]: null;

    const answer = Object.keys(props.users[props.authedUser].answers).includes(props.detail.id) ? props.users[props.authedUser].answers[props.detail.id]: null;

    const text = props.type === "optionOne" ? props.allPools.pools[props.detail.id].optionOne.text : props.allPools.pools[props.detail.id].optionTwo.text;



    const handleClick = (e) => {
        e.preventDefault();

     
        props.dispatch(handleAddVote(props.detail.id, props.authedUser,props.type));
  
    }

    return (
        <div className="options-pool">
            <p >{text} </p>
            {(answer == null) ?
             (<button className="btn-option" onClick={handleClick}>Click</button>) : 
             ((props.type === answer) ? (<FaCircleCheck color="#27B749"/>):(<div> -</div>))}
             <p>Number of votes: {props.allPools.pools[props.detail.id][props.type]['votes'].length}</p>  
             <p>Percentage: {100*props.allPools.pools[props.detail.id][props.type]['votes'].length/Object.keys(props.users).length}%</p>         
        </div>
    )
}

const mapStateToProps = ({detailPool,pools,authedUser,users}) => ({
    users: users,
    authedUser: authedUser,
    detail: detailPool,
    allPools: pools
  });

export default connect(mapStateToProps)(Option);