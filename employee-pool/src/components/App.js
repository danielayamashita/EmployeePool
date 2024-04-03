import '../css/index.css';
import { connect} from "react-redux";
import {handleGetUsers,handleGetPools} from "../actions/shared"

import { Route, Routes } from "react-router-dom";

import {useEffect} from "react";

// import LoadingBar from "react-redux-loading-bar";

import LoginPage from './LoginPage';
import Dashboard from "./Dashboard"
import Leaderboard from "./Leaderboard"
import NewPool from "./NewPool"
import PoolDetail from "./PoolDetail"

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleGetUsers());
    props.dispatch(handleGetPools());
  }, []);

  return (
    <div>
      {/* <LoadingBar /> */}
      <Routes>
        <Route path="/" exact element ={<LoginPage/>}/>
        <Route path="/Dashboard/:id" element ={<Dashboard/>}/>
        <Route path="/leaderboard/:id" element ={<Leaderboard/>}/>
        <Route path="/add/:id" element ={<NewPool/>}/>
        <Route path="/question/:id" element={<PoolDetail/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({  }) => ({
});

export default connect(mapStateToProps)(App);
