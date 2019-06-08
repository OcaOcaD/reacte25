import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar.js'
import Carousel from './components/Carousel/Carousel.js'

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Toolbar/>
        <main style={{paddingTop:'0px'}}>
          <Carousel/>
          <h1>This is the page content</h1>
        </main>
      </div>
    );
  }
}


export default App;
