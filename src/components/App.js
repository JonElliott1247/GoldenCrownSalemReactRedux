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
    const navHeight = '55px';
    return (
        <div className="App">
          <NavigationContainer width={width} navHeight={navHeight} style={{position: 'sticky', top:'0px', zIndex: '2'}}/>
          <div style={{display: 'flex', gridTemplateColumns: '10% 80% 10%', gridTemplateRows: '20% 80%'}}>
            <Categories width={width} navHeight={navHeight} style={{gridRow: '1 / span 1', gridColumn: '1 / span 1'}}/>
          </div>
        </div>
    );
  }
}

export default App;
