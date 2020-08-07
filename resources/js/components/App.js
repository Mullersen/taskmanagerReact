import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyProject from './MyProject.js';
import Home from './Home.js';
import NewProject from './NewProject.js';

//import Task from './components/Task';

class App extends Component {
    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to taskmanager</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/newproject'} className="nav-link">New Project</Link></li>
            </ul>
            </nav>
            <hr />
            <div className="card">
                <li><Link to={'/myproject'} className="nav-link">Project</Link></li>
            </div>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/myproject' component={MyProject} />
                <Route path='/newproject' component={NewProject} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  export default App;
