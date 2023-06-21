
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar/Index.js";
import {BrowserRouter as router , Switch, Route,} from "react-router-dom";
import Home from './components/home/Home';
import Employ from './components/Employ/Employ';


function App() {
  return (
    <>
      
      <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Employ></Employ>
      </div>
    </>
  );
}

export default App;
