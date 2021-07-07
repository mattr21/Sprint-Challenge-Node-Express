import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ProjectsList from './components/ProjectsList.js';

class App extends Component {
state = {
  projects: [],
}

componentDidMount() {
  axios
    .get('http://localhost:4000/api/projects')
    .then(res => {
      console.log(res);
      this.setState({ projects: res.data });
    })
    .catch(error => {
      console.log(error);
    })
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ props => <ProjectsList {...this.state} {...props} /> } />
      </div>
    );
  }
}

export default App;
