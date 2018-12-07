import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/payment/data.service';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {
  debitCards: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.debitCards = this.dataService.paymentMethods.debitCard.types;
  }
}
