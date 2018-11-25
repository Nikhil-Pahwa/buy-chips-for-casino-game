import { Component, OnInit } from '@angular/core';

import { Package } from 'src/models/package';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-selection',
  templateUrl: './package-selection.component.html',
  styleUrls: ['./package-selection.component.scss']
})
export class PackageSelectionComponent implements OnInit {
  packages: Package[] = [
    {
      promotion: {
        label: 'Bonus',
        value: 100
      },
      amount: 50
    },
    {
      promotion: {
        label: 'Bonus',
        value: 100
      },
      amount: 100
    },
    {
      amount: 200
    },
    {
      isUserInput: true
    }
  ];

  selectedPackage = this.packages[1];

  constructor(private dataService: DataService, private route: Router) {}

  ngOnInit() {}

  continueToPaymentPage() {
    this.dataService.selectedPackage = this.selectedPackage;
    this.route.navigate(['/payment-method']);
  }
}
