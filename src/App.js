import './App.css';
// import { BrowserRouter as Switch,Router,Route} from 'react-router-dom';
 import Add from './Component/Add';
 import Mainpage from './Component/Mainpage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Component/Home';
import Navbar from './Layout/Navbar';
// import {BrowserRouter as Switch,Router,Route} from "react-router-dom";

function App() {
  return (
      // <Router>
      <div className="row justify-content-center mt-3">
      {/* <Switch> */}
    
      
      <Add/>
      {/* </Switch> */}
      </div>
      // </Router>
  )
}

export default App;
