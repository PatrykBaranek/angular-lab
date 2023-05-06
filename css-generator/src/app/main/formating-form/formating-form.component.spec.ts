import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatingFormComponent } from './formating-form.component';

describe('FormatingFormComponent', () => {
  let component: FormatingFormComponent;
  let fixture: ComponentFixture<FormatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
