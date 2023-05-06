import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssContainerComponent } from './css-container.component';

describe('CssContainerComponent', () => {
  let component: CssContainerComponent;
  let fixture: ComponentFixture<CssContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
