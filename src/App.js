import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import NavBar from './NavBar';
import Category from './Category';
import OrderNowPitch from './OrderNowPitch';

class App extends Component {
  render() {
    fetch("http://localhost:51099/api/menu").then((response) => response.json()).then( (response) => console.log(response));
    return (
      <div className="App">
        <NavBar />
        <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
      </div>
    );
  }
}

export default App;
