import { Component, OnInit } from '@angular/core';
import { weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oneitem-weather',
  templateUrl: './oneitem-weather.component.html',
  styleUrls: ['./oneitem-weather.component.css']
})
export class OneitemWeatherComponent implements OnInit {

  weatherItem!: weather;
  id!: number;
  loaded: boolean = false;
  constructor(private service:WeatherService, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params['id']);
   }

  ngOnInit(): void {  
    this.service.getWeatherToId(this.id)
    .subscribe((data: weather) => { this.weatherItem = data; this.loaded = true; });      
  }

}
