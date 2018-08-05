import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/App.css';
import NavigationContainer from '../containers/NavigationContainer';
import Category from './Category';
import Categories from './Categories';


class App extends Component {

  render() {

    const dummyCategory = {
      imagePath: "https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg",
      label:"Appetizers",
      description:"Try our delicious appetizers!"
    }
    return (
        <div className="App">
          <NavigationContainer />
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Categories/>
          </div>
        </div>
    );
  }
}

export default App;
