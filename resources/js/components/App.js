import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Projects from './Projects.js';
import NewProject from './NewProject.js';

//import Task from './components/Task';

class App extends Component {
    render() {
      return (
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Taskmanager</Link>
            <ul className="navbar-nav ml-auto">
              <li><Link to='/projects' className="nav-link"> Current Projects </Link></li>
              <li><Link to='/newproject' className="nav-link">New Project</Link></li>
            </ul>
            </nav>
            <hr />

            <Switch>
                <Route exact path='/'>
                    <div>
                        <h3>Select an option in the menu to begin</h3>
                    </div>
                </Route>
                <Route path='/projects'>
                    <Projects/>
                </Route>
                <Route path='/newproject'>
                    <NewProject/>
                </Route>
            </Switch>
          </div>
      );
    }
  }

  export default App;
