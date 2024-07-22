import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodulComponent } from './formmodul.component';

describe('FormmodulComponent', () => {
  let component: FormmodulComponent;
  let fixture: ComponentFixture<FormmodulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormmodulComponent]
    });
    fixture = TestBed.createComponent(FormmodulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
