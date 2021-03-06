import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { PackageListService } from './package-list.service';
import { DataService } from '../data.service';
import { PaymentWizardService } from '../payment-wizard/payment-wizard.service';
import { PaymentSteps } from '../payment-wizard/payment-wizard';
import { Package } from './package';

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
   * Default selected package index
   */
  private defaultSelectedPackageIndex = 1;

  /**
   * Creates an instance of package selection component.
   * @param dataService
   * @param route
   */
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private packageListService: PackageListService,
    private paymentWizardService: PaymentWizardService
  ) {}

  /**
   * on init fetches list of all available packages
   */
  ngOnInit() {
    this.paymentWizardService.wizardUpdate$.next({
      selectedStep: PaymentSteps.packageSelection
    });

    this.dataServiceSubscription = this.packageListService
      .getPackages()
      .subscribe(
        (packages: Package[]) => {
          this.packages = packages;
          const packagesIds = packages.map(pkg => pkg.packageId);
          // set second selection to be selected to default
          this.activatedRoute.queryParams.subscribe(params => {
            if (packagesIds.indexOf(+params['pc']) > -1) {
              this.selectedPackage = packages.filter(
                pkg => pkg.packageId === +params['pc']
              )[0];
            } else {
              this.selectedPackage = packages[this.defaultSelectedPackageIndex];
            }
          });

          this.selectLastSelectedPackage();
        },
        error => {
          console.log('service error');
        }
      );
  }

  setPackage(pc: Package) {
    this.route.navigate(['/package-selection'], {
      queryParams: { pc: pc.packageId }
    });
  }
  /**
   * Continues to payment page on user click on continue button
   */
  continueToPaymentPage(): void {
    this.dataService.selectedPackage = this.selectedPackage;
    if (this.isValidPackageSelection()) {
      this.route.navigate(['/payment-method/credit-card']);
    }
  }

  /**
   * Determines whether package selection is valid
   */
  private isValidPackageSelection(): boolean {
    return this.selectedPackage.amount > 0;
  }

  private selectLastSelectedPackage() {
    const currentSelectedPackage = this.dataService.selectedPackage;

    if (currentSelectedPackage && currentSelectedPackage.isUserInput) {
      this.selectedPackage = currentSelectedPackage;
      const lastElementFromPackages = this.packages[this.packages.length - 1];
      if (lastElementFromPackages.isUserInput) {
        this.packages[this.packages.length - 1] = this.selectedPackage;
      }
    } else {
      if (this.packages.indexOf(this.dataService.selectedPackage) > -1) {
        this.selectedPackage = this.dataService.selectedPackage;
      } else {
        this.selectedPackage = this.packages[this.defaultSelectedPackageIndex];
      }
    }
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
