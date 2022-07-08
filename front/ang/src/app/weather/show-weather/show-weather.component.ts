import { Component, OnInit } from '@angular/core';
import { weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  constructor(private service:WeatherService) { }

  WeatherList: weather[] = [];

  ngOnInit(): void {
    this.refrestWeatherList();
  }

  refrestWeatherList() {
    this.service.getWeather().subscribe(data => {
      this.WeatherList = data;
    });
  }

}
