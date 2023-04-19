import { Component } from '@angular/core';
import {WEATHERMODEL} from './weatherModel';
import data from './requestResult'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';

  weathers: WEATHERMODEL[] | undefined;

  getWeatherData(): void{
    for(let i = 0; i < data.length; i++){
      const currentInfo: WEATHERMODEL = {
        location: data[i].name,
        weather: data[i].weather.description,
        temp: data[i].main.temp,
      }

      if(this.weathers == undefined) this.weathers = [currentInfo]
      else this.weathers.push(currentInfo);
    }




  }

}
