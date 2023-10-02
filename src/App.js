import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Supplier from './pages/supplier/supplier';
import Customer from './pages/customer/customer';
import Stock from './pages/stock/stock';
import Sale from './pages/pos/sale';
import Bills from './pages/bills/bills';
import Email from './pages/email/email';
import Dashboad from './pages/dashboad/dashboad';

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
          <Route exact path="/bills" component={Bills}/>
          <Route exact path="/email" component={Email}/>
          <Route exact path="/dashboad" component={Dashboad}/>
        </Switch>
      </Router>
      
    </div>

    </div>
    
  );
}

export default App;
