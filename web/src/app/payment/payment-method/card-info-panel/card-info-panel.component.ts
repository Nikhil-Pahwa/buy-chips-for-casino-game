import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CardInfo, defaultCardInfo } from '../payment.model';

@Component({
  selector: 'app-card-info-panel',
  templateUrl: './card-info-panel.component.html',
  styleUrls: ['./card-info-panel.component.scss']
})
export class CardInfoPanelComponent implements OnInit {
  @ViewChild('cardInfoForm') cardInfoPanel: HTMLFormElement;
  @Input() cardList: string[];
  cardInfo: CardInfo = { ...defaultCardInfo };
  years: number[] = [];
  months: number[] = [];
  constructor(private route: Router) {
    this.getDates();
  }

  ngOnInit() {}

  private getDates() {
    for (let i = 0; i <= 20; i++) {
      this.years.push(new Date().getFullYear() + i);
    }

    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }
  }

  payNow() {
    if (!this.cardInfoPanel.valid) {
      return;
    }
    // Make http request to deduct money. If success redirect to success page else stay here and show error msg
    this.route.navigate(['/successful-deposit']);
  }
}
