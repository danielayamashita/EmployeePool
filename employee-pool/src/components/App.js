import '../css/index.css';
import { connect} from "react-redux";
import {handleGetUsers,handleGetPools} from "../actions/shared"

import { Route, Routes } from "react-router-dom";

import {useEffect} from "react";

// import LoadingBar from "react-redux-loading-bar";


import HomePage from "./HomePage"
import Leaderboard from "./Leaderboard"
import NewPool from "./NewPool"
import PoolDetail from "./PoolDetail"
import Nav from "./Nav"


const App = (props) => {

  useEffect(() => {
    props.dispatch(handleGetUsers());
    props.dispatch(handleGetPools());
  }, []);

  return (
    <div>
      
      
      <Nav/>
      
      <Routes>
        <Route path="/" exact element ={<HomePage/>}/>
        <Route path="/leaderboard" exact  element ={<Leaderboard/>}/>
        <Route path="/add" exact  element ={<NewPool/>}/>
        <Route path="/question/:id" exact  element={<PoolDetail/>}/>

        {/* this route will catch any route that wasnt matched in previous routes */}
        <Route element={<HomePage/>}/>
      </Routes>

      
    </div>
  );
}

const mapStateToProps = ({  }) => ({
  
});

export default connect(mapStateToProps)(App);
