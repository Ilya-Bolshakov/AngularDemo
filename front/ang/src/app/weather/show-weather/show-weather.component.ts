import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  constructor(private service:WeatherService) { }

  WeatherList: any[] = [];

  ngOnInit(): void {
    this.refrestWeatherList();
  }

  refrestWeatherList() {
    this.service.getWeather().subscribe(data => {
      this.WeatherList = data;
    });
  }

}
