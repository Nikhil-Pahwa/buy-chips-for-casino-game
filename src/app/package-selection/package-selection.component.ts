import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Package } from 'src/app/package-selection/package';
import { Subscription } from 'rxjs';
import { PackageListService } from './package-list.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-package-selection',
  templateUrl: './package-selection.component.html',
  styleUrls: ['./package-selection.component.scss']
})
export class PackageSelectionComponent implements OnInit, OnDestroy {
  /**
   * Selected package
   */
  selectedPackage: Package;

  /**
   * List of all available Packages
   */
  packages: Package[];

  dataServiceSubscription: Subscription;

  /**
   * Creates an instance of package selection component.
   * @param dataService
   * @param route
   */
  constructor(
    private route: Router,
    private dataService: DataService,
    private packageListService: PackageListService
  ) {}

  /**
   * on init fetches list of all available packages
   */
  ngOnInit() {
    this.dataServiceSubscription = this.packageListService
      .getPackages()
      .subscribe((packages: Package[]) => {
        this.packages = packages;
        // Set second selection to be selected to default
        this.selectedPackage = packages[1];
      });
  }

  /**
   * Continues to payment page on user click on continue button
   */
  continueToPaymentPage(): void {
    this.dataService.selectedPackage = this.selectedPackage;
    if (this.isValidPackageSelection) {
      this.route.navigate(['/payment-method/credit-card']);
    }
  }

  /**
   * Determines whether package selection is valid
   */
  private isValidPackageSelection(): boolean {
    return this.selectedPackage.amount > 0;
  }

  /**
   * on destroy unsubscribe data service
   */
  ngOnDestroy() {
    if (this.dataServiceSubscription !== Subscription.EMPTY) {
      this.dataServiceSubscription.unsubscribe();
    }
  }
}
