import {Component} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWeather';
  error = '';
  location = '';
  data = '';

  getData(location): void {
    this.location = location;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=19026fe429b4298c6dad54698d4559b8&units=metric&q=` + location + ',no')
      .then(res => {
        this.data = res.data;
      })
      .catch(e => {
        this.error = e.message;
      })
  }

}
