import React from 'react';
import './App.css';
import BrowserRouter from 'react-dom';
import Navigator from '../src/nav/Navigation';
import Switch from 'react-dom';
import Route from 'react-dom';
import Customers from '../src/view/ViewCustomers';
import { Component } from 'react';


class App extends Component { 
  
  render() {



    return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Navigator />
          <Switch>
            <Route path="/customers" component={Customers} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
