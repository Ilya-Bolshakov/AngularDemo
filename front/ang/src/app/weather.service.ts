import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly APIUrl = "https://localhost:7049/api/Weather";
  constructor(private http:HttpClient) { }

  getWeather(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "WeatherForecast")
  }

}
