import '../css/index.css';
import Nav from "./Nav"
import { Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" exact element ={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
