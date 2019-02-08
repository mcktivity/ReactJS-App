import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/:project_id' component={Project} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
