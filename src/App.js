import React, {Component} from 'react';
import RockyLogo from './Rocky_anthology_dvd_cover.jpg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <img src={RockyLogo} alt="rocky movie cover"/>
      </div>
    );
  }
}

export default App;
