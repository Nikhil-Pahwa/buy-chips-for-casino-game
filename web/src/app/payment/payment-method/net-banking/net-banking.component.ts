import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CardInfo, defaultCardInfo, NetBanking } from '../payment.model';
import { DataService } from 'src/app/payment/data.service';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.scss']
})
export class NetBankingComponent implements OnInit {
  @ViewChild('bankListForm') bankListForm: HTMLFormElement;
  bankList: NetBanking;
  cardInfo: CardInfo = { ...defaultCardInfo };

  constructor(private route: Router, private dataService: DataService) {}

  ngOnInit() {
    this.bankList = this.dataService.paymentMethods.netBanking;
  }

  payNow() {
    if (!this.bankListForm.valid) {
      return;
    }
    // Make http request to deduct money using some payment gateway.
    // Provide redirection url if deduction succeeded.
    this.route.navigate(['/successful-deposit']);
  }
}
