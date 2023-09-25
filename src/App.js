import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Supplier from './pages/supplier/supplier';
import Customer from './pages/customer/customer';
import Stock from './pages/stock/stock';
import Sale from './pages/pos/sale';

function App() {
  return (
    <div>
      <Sidebar/>
      <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/supplier" component={Supplier}/>
          <Route exact path="/customer" component={Customer}/>
          <Route exact path="/stock" component={Stock}/>
          <Route exact path="/sale" component={Sale}/>
        </Switch>
      </Router>
      
    </div>

    </div>
    
  );
}

export default App;
