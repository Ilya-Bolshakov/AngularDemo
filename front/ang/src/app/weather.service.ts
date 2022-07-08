import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weather } from './models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly APIUrl = "https://localhost:7049/api/WeatherForecast/";
  constructor(private http:HttpClient) { }

  getWeather(): Observable<weather[]> {
    return this.http.get<weather[]>(this.APIUrl)
  }

  getWeatherToId(value: number): Observable<weather> {
    console.log(this.APIUrl + value)
    return this.http.get<weather>(this.APIUrl + value)
  }

}
