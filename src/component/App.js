import React, { Component } from 'react';
import ImgLazyLoad from './ImgLazyLoad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Preloader</h1>
        <ImgLazyLoad image='chad-madden-436494-unsplash' imageOpt='chad-madden-436494-unsplash-opt'/>
      </div>
    );
  }
}

export default App;
