import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrencyService } from '../currency.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any;
  clickMessage = '';

  onClickMe(name:string) {
    var uri = 'http://api.openweathermap.org/data/2.5/weather?q='+name+',uk&APPID=74188710fac84a27419837a3287c1a11';
    this.getWeatherDetails(uri);
    }

  constructor(public rest: WeatherService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.getWeatherDetails();
  }

  getWeatherDetails(name:string) {
    this.rest.getProducts(name).subscribe((data: {}) => {
      console.log(data);
      this.weather = data;

    });
  }

}
