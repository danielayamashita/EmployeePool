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
      {/* <LoadingBar /> */}
      <Nav/>
      <Routes>
        <Route path="/" exact element ={<HomePage/>}/>
        <Route path="/leaderboard" element ={<Leaderboard/>}/>
        <Route path="/add" element ={<NewPool/>}/>
        <Route path="/question/:id" element={<PoolDetail/>}/>
      </Routes>

      
    </div>
  );
}

const mapStateToProps = ({  }) => ({
});

export default connect(mapStateToProps)(App);
