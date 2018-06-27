import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import NavBar from './NavBar';
import OrderNowPitch from './OrderNowPitch';

class App extends Component {
  render() {
    fetch("http://localhost:51075/api/menu").then((response) => response.json()).then( (response) => console.log(response));
    return (
      <div className="App">
        <NavBar />
       <OrderNowPitch />
      </div>
    );
  }
}

export default App;
