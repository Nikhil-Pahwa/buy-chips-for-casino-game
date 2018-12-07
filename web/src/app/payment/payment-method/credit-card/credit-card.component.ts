import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/payment/data.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  creditCards: string[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.creditCards = this.dataService.paymentMethods.creditCard.types;
  }
}
