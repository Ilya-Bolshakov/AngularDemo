import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OneitemWeatherComponent } from './weather/oneitem-weather/oneitem-weather.component';

import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  // { path:'', component: AppComponent },
  { path: 'WeatherForecast', component: WeatherComponent},
  { path: 'WeatherForecast/:id', component: OneitemWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
