import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPickerComponent } from './city-picker.component';

describe('CityPickerComponent', () => {
  let component: CityPickerComponent;
  let fixture: ComponentFixture<CityPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityPickerComponent]
    });
    fixture = TestBed.createComponent(CityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
