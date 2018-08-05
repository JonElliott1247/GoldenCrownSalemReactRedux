import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/App.css';
import NavigationContainer from '../containers/NavigationContainer';
import Category from './Category';
import Categories from './Categories';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {width: document.documentElement.clientWidth, active: ""};
      this.updateWidth = this.updateWidth.bind(this);
  }

  updateWidth() {
      const width = document.documentElement.clientWidth;
      this.setState({width});
  }

  componentDidMount() {
      this.updateWidth();
      window.addEventListener('resize', this.updateWidth);
  }

  render() {

    const {width} = this.state;
    return (
        <div className="App">
          <NavigationContainer width={width}/>
          <Categories width={width}/>
        </div>
    );
  }
}

export default App;
