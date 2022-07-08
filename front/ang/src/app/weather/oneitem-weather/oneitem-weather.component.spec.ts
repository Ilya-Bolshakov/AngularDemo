import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneitemWeatherComponent } from './oneitem-weather.component';

describe('OneitemWeatherComponent', () => {
  let component: OneitemWeatherComponent;
  let fixture: ComponentFixture<OneitemWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneitemWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneitemWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
