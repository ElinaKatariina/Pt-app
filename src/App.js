import React from 'react';
import './App.css';
import Navigator from '../src/nav/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react';
import ViewTrainings from '../src/view/ViewTrainings';
import CustomerTable from '../src/view/ViewCustomers';
import Calendar from './components/TrCalendar';


class App extends Component { 
  
  render() {



    return (
      <Router>
    <div className="App">
        <Navigator />
          <Switch>
            <Route path="/customers" component={CustomerTable} />

            <Route path="/trainings" component={ViewTrainings} />

            <Route path="/calendar" component={Calendar} />

            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
      </div>
      </Router>
    
  );
}
}

export default App;
