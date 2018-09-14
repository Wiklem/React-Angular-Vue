import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '', data: '', location: '' };
  }

  getWeather = (location) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=19026fe429b4298c6dad54698d4559b8&units=metric&q=` + location + ',no')
      .then(res => {
        this.setState({ data: res.data, location: location })
      })
      .catch(e => {
        this.setState({ error: e, location: location })
      })
  };

  render() {
    const { error, data, location } = this.state;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactWeather</h1>
        <button className={'button'} onClick={() => this.getWeather('Oslo')}>Oslo</button>
        <button className={'button'} onClick={() => this.getWeather('Kristiansand')}>Kristiansand</button>
        <h3> {location}
          {data && <span><img alt={"icon"} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
              <br />
            {data.weather[0].description} </span>}
        </h3>
        <div className={'temp'}>
          {data && data.main.temp + "°"}
        </div>
        {error ? <div>{error.message}</div> : null}
      </div>
    );
  }
}

export default App;
