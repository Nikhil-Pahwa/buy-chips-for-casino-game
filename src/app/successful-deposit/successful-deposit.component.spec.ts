import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulDepositComponent } from './successful-deposit.component';

describe('SuccessfulDepositComponent', () => {
  let component: SuccessfulDepositComponent;
  let fixture: ComponentFixture<SuccessfulDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
