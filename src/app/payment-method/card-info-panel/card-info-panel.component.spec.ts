import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoPanelComponent } from './card-info-panel.component';

describe('CardInfoPanelComponent', () => {
  let component: CardInfoPanelComponent;
  let fixture: ComponentFixture<CardInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
