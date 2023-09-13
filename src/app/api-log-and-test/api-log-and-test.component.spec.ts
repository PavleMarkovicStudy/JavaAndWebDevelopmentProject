import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLogAndTestComponent } from './api-log-and-test.component';

describe('ApiLogAndTestComponent', () => {
  let component: ApiLogAndTestComponent;
  let fixture: ComponentFixture<ApiLogAndTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiLogAndTestComponent]
    });
    fixture = TestBed.createComponent(ApiLogAndTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
