import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Supplier from './pages/supplier/supplier';

function App() {
  return (
    <div>
      <Sidebar/>
      <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/supplier" component={Supplier}/>
        </Switch>
      </Router>
      
    </div>

    </div>
    
  );
}

export default App;
