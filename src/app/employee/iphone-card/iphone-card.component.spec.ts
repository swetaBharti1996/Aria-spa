import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneCardComponent } from './iphone-card.component';

describe('IphoneCardComponent', () => {
  let component: IphoneCardComponent;
  let fixture: ComponentFixture<IphoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
