import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-deposit',
  templateUrl: './successful-deposit.component.html',
  styleUrls: ['./successful-deposit.component.scss']
})
export class SuccessfulDepositComponent implements OnInit {
  amount = 'Rs. 100';
  constructor(private route: Router) {}

  ngOnInit() {}

  addMoreCash() {
    this.route.navigate(['/package-selection']);
  }
}
