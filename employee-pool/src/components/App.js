import '../css/index.css';
import { connect} from "react-redux";
import {handleInitialData} from "../actions/shared"

import { Route, Routes } from "react-router-dom";

import {useEffect} from "react";

import LoginPage from './LoginPage';
import Dashboard from "./Dashboard"
import Leaderboard from "./Leaderboard"
import NewPool from "./NewPool"

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      
      <Routes>
        <Route path="/" exact element ={<LoginPage/>}/>
        <Route path="/Dashboard/:id" element ={<Dashboard/>}/>
        <Route path="/leaderboard/:id" element ={<Leaderboard/>}/>
        <Route path="/new/:id" element ={<NewPool/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({  }) => ({
});

export default connect(mapStateToProps)(App);
