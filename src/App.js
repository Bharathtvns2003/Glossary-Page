import {
  BrowserRouter as Router,
  Route,
}  from "react-router-dom";
import { Switch } from 'react-router-dom';import './App.css';
import Homepage from './Homepage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
          <Homepage></Homepage>
          </Route>
        </Switch>
      
        
        
      </Router>
    </div>
  );
}

export default App;
