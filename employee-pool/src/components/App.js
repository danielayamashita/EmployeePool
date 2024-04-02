import '../css/index.css';
import { connect} from "react-redux";
import {handleInitialData} from "../actions/shared"
import Nav from "./Nav"
import { Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage';
import {useEffect} from "react";

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" exact element ={<LoginPage/>}/>
        <Route path="/new" element ={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({  }) => ({
});

export default connect(mapStateToProps)(App);
