import React, { Component } from 'react';
import logo from '../logo.svg';
import startupLoaderBg from '../assets/startup-loader_bg.jpg';
import './styles/App.sass';

import AppToolbar from './AppToolbar';


class App extends Component {
  constructor() {
    super()
    this.state = {
      startupLoader: true,
      loaderProgress: '100%',
      showLoader: false,
      
    }
  }

  componentDidMount() {
    this.loaderProgress = this.loaderProgress -1
  }

  render() {
    return (
      <div className="App">
        {this.state.startupLoader &&
          <div className="loader-container startup-loader">
            <div className="progress" style={{width: this.state.loaderProgress}}></div>
          </div>
        }

        {this.state.showLoader &&
          <div className="loader-container loader">
            <img src={logo} className="App-logo" alt="loader" />
          </div>
        }
        <AppToolbar />
        <button onClick={this.load}>PRESS</button>
      </div>
    );
  }
}

export default App;
