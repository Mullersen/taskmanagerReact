import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
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
            </ul>
            </nav>
            <hr />
            <div className="card">
                <li><Link to={'/Project'} className="nav-link">Project</Link></li>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/project' component={Project} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default App;