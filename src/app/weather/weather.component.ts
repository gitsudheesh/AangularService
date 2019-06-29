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


  constructor(public rest: WeatherService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.weather = data;

    });
  }

}
