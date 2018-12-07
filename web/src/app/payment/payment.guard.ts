import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from './data.service';

@Injectable()
export class PaymentGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.dataService.selectedPackage !== undefined) {
      return true;
    }

    // navigate to package selection page
    this.router.navigate(['package-selection']);
    return false;
  }
}
