import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    fetch("http://localhost:51099/api/menu").then((response) => response.json()).then( (response) => console.log(response));
    return (
      <div className="App">
        <NavBar />
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        </div>
      </div>
    );
  }
}

export default App;
