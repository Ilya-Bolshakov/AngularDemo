import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private service: WeatherService, private router: Router) {
   }

  id!: number;

  ngOnInit(): void {
  }

  getItem() {
    this.router.navigateByUrl('WeatherForecast/' + this.id)
  }

  

}
